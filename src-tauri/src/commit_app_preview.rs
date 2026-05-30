use crate::{
    get_changed_routes_for_commit, open_visual_cache_connection, run_previews_blocking, PreviewRunConfig,
};
use git::cli;
use rusqlite::{params, OptionalExtension};
use serde::{Deserialize, Serialize};
use std::{
    collections::hash_map::DefaultHasher,
    fs,
    hash::{Hash, Hasher},
    path::{Path, PathBuf},
    sync::{Condvar, Mutex, OnceLock},
    time::{SystemTime, UNIX_EPOCH},
};

const WORKING_TREE_PREFIX: &str = "WORKING_TREE";
const STASH_PREFIX: &str = "STASH:";

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CommitAppPreviewRecord {
    pub commit_key: String,
    pub status: String,
    pub git_ref: Option<String>,
    pub route: Option<String>,
    pub image_path: Option<String>,
    pub error: Option<String>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EnsureCommitAppPreviewOpts {
    pub full_sha: Option<String>,
    pub parent_sha: Option<String>,
    pub kind: Option<String>,
    pub worktree_path: Option<String>,
    pub worktree_head_sha: Option<String>,
    pub worktree_has_uncommitted: Option<bool>,
    pub stash_index: Option<u32>,
    pub stash_base_sha: Option<String>,
    pub branch_name: Option<String>,
    pub priority: Option<i32>,
}

#[derive(Debug, Clone)]
struct PreviewJob {
    repo_path: String,
    commit_key: String,
    opts: EnsureCommitAppPreviewOpts,
    priority: i32,
}

struct PreviewQueueState {
    pending: Vec<PreviewJob>,
    running: bool,
}

static PREVIEW_QUEUE: OnceLock<(Mutex<PreviewQueueState>, Condvar)> = OnceLock::new();

fn preview_queue() -> &'static (Mutex<PreviewQueueState>, Condvar) {
    PREVIEW_QUEUE.get_or_init(|| {
        (
            Mutex::new(PreviewQueueState {
                pending: Vec::new(),
                running: false,
            }),
            Condvar::new(),
        )
    })
}

fn now_ms() -> i64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|d| d.as_millis() as i64)
        .unwrap_or(0)
}

fn repo_cache_hash(repo_path: &str) -> String {
    let mut hasher = DefaultHasher::new();
    repo_path.hash(&mut hasher);
    format!("{:x}", hasher.finish())
}

fn preview_cache_dir(repo_path: &str) -> Result<PathBuf, String> {
    let home = dirs::home_dir().ok_or_else(|| "Could not determine home directory".to_string())?;
    Ok(home
        .join(".git-viz-preview-cache")
        .join(repo_cache_hash(repo_path)))
}

fn safe_commit_key_filename(key: &str) -> String {
    key.chars()
        .map(|c| {
            if c.is_ascii_alphanumeric() || c == '-' || c == '_' {
                c
            } else {
                '_'
            }
        })
        .collect()
}

fn preview_image_path(repo_path: &str, commit_key: &str) -> Result<PathBuf, String> {
    Ok(preview_cache_dir(repo_path)?.join(format!("{}.png", safe_commit_key_filename(commit_key))))
}

pub fn init_commit_app_preview_schema(conn: &rusqlite::Connection) -> Result<(), String> {
    conn.execute_batch(
        "
        CREATE TABLE IF NOT EXISTS commit_app_preview_cache (
            repo_path TEXT NOT NULL,
            commit_key TEXT NOT NULL,
            git_ref TEXT,
            route TEXT,
            image_path TEXT,
            status TEXT NOT NULL,
            error TEXT,
            fingerprint TEXT,
            updated_at_ms INTEGER NOT NULL,
            PRIMARY KEY (repo_path, commit_key)
        );
        ",
    )
    .map_err(|e| format!("Failed to initialize commit preview schema: {e}"))
}

fn read_preview_record(repo_path: &str, commit_key: &str) -> Result<Option<CommitAppPreviewRecord>, String> {
    let conn = open_visual_cache_connection()?;
    let row = conn
        .query_row(
            "SELECT commit_key, status, git_ref, route, image_path, error
             FROM commit_app_preview_cache
             WHERE repo_path = ?1 AND commit_key = ?2",
            params![repo_path, commit_key],
            |row| {
                Ok(CommitAppPreviewRecord {
                    commit_key: row.get(0)?,
                    status: row.get(1)?,
                    git_ref: row.get(2)?,
                    route: row.get(3)?,
                    image_path: row.get(4)?,
                    error: row.get(5)?,
                })
            },
        )
        .optional()
        .map_err(|e| format!("Failed to read commit preview: {e}"))?;

    Ok(row.map(|mut record| {
        if record.status == "ready" {
            if let Some(path) = record.image_path.as_ref() {
                if !Path::new(path).exists() {
                    record.status = "idle".to_string();
                    record.image_path = None;
                }
            } else {
                record.status = "idle".to_string();
            }
        }
        record
    }))
}

fn upsert_preview_record(
    repo_path: &str,
    commit_key: &str,
    status: &str,
    git_ref: Option<&str>,
    route: Option<&str>,
    image_path: Option<&str>,
    error: Option<&str>,
    fingerprint: Option<&str>,
) -> Result<(), String> {
    let conn = open_visual_cache_connection()?;
    conn.execute(
        "
        INSERT INTO commit_app_preview_cache
            (repo_path, commit_key, git_ref, route, image_path, status, error, fingerprint, updated_at_ms)
        VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)
        ON CONFLICT(repo_path, commit_key) DO UPDATE SET
            git_ref = excluded.git_ref,
            route = excluded.route,
            image_path = excluded.image_path,
            status = excluded.status,
            error = excluded.error,
            fingerprint = excluded.fingerprint,
            updated_at_ms = excluded.updated_at_ms
        ",
        params![
            repo_path,
            commit_key,
            git_ref,
            route,
            image_path,
            status,
            error,
            fingerprint,
            now_ms(),
        ],
    )
    .map_err(|e| format!("Failed to upsert commit preview: {e}"))?;
    Ok(())
}

fn is_working_tree_key(commit_key: &str) -> bool {
    commit_key == WORKING_TREE_PREFIX || commit_key.starts_with(&format!("{WORKING_TREE_PREFIX}:"))
}

fn is_stash_key(commit_key: &str) -> bool {
    commit_key.starts_with(STASH_PREFIX)
}

fn git_object_exists(repo_path: &Path, git_ref: &str) -> bool {
    cli::run(repo_path, &["cat-file", "-e", &format!("{git_ref}^{{commit}}")]).is_ok()
}

fn worktree_fingerprint(worktree_path: &Path) -> Result<String, String> {
    let output = cli::run(worktree_path, &["diff", "HEAD", "--shortstat"])
        .unwrap_or_default();
    let status = cli::run(worktree_path, &["status", "--short"]).unwrap_or_default();
    Ok(format!("{output}\n{status}"))
}

fn resolve_preview_source(
    repo_path: &str,
    commit_key: &str,
    opts: &EnsureCommitAppPreviewOpts,
) -> Result<PreviewSourcePlan, String> {
    let repo = Path::new(repo_path);
    let kind = opts.kind.as_deref().unwrap_or("commit");

    if kind == "branch-created" {
        return Ok(PreviewSourcePlan::skipped("Empty branch placeholder"));
    }

    if is_stash_key(commit_key) {
        let index = opts
            .stash_index
            .or_else(|| commit_key.strip_prefix(STASH_PREFIX)?.parse().ok())
            .ok_or_else(|| "Missing stash index".to_string())?;
        let base_sha = opts
            .stash_base_sha
            .clone()
            .ok_or_else(|| "Missing stash base SHA".to_string())?;
        return Ok(PreviewSourcePlan::Stash { index, base_sha });
    }

    if is_working_tree_key(commit_key) {
        let worktree_path = opts
            .worktree_path
            .clone()
            .unwrap_or_else(|| repo_path.to_string());
        let head_sha = opts
            .worktree_head_sha
            .clone()
            .filter(|sha| !sha.is_empty())
            .ok_or_else(|| "Missing worktree head SHA".to_string())?;
        let has_uncommitted = opts.worktree_has_uncommitted.unwrap_or(false);
        let fingerprint = if has_uncommitted {
            Some(worktree_fingerprint(Path::new(&worktree_path))?)
        } else {
            None
        };
        if has_uncommitted {
            return Ok(PreviewSourcePlan::LiveWorktree {
                path: worktree_path,
                git_ref: head_sha,
                fingerprint,
            });
        }
        if !git_object_exists(repo, &head_sha) {
            return Ok(PreviewSourcePlan::skipped("Commit not available locally"));
        }
        return Ok(PreviewSourcePlan::Archive {
            git_ref: head_sha,
            fingerprint: None,
        });
    }

    let full_sha = opts
        .full_sha
        .clone()
        .filter(|sha| !sha.is_empty())
        .unwrap_or_else(|| commit_key.to_string());

    if !git_object_exists(repo, &full_sha) {
        return Ok(PreviewSourcePlan::skipped("Commit not fetched locally"));
    }

    Ok(PreviewSourcePlan::Archive {
        git_ref: full_sha,
        fingerprint: None,
    })
}

enum PreviewSourcePlan {
    Archive {
        git_ref: String,
        fingerprint: Option<String>,
    },
    LiveWorktree {
        path: String,
        git_ref: String,
        fingerprint: Option<String>,
    },
    Stash {
        index: u32,
        base_sha: String,
    },
    Skipped {
        reason: String,
    },
}

impl PreviewSourcePlan {
    fn skipped(reason: &str) -> Self {
        Self::Skipped {
            reason: reason.to_string(),
        }
    }
}

fn port_for_commit_key(commit_key: &str) -> u16 {
    let mut hasher = DefaultHasher::new();
    commit_key.hash(&mut hasher);
    3491 + (hasher.finish() % 100) as u16
}

fn slug_for_key(commit_key: &str) -> String {
    commit_key
        .chars()
        .map(|c| {
            if c.is_ascii_alphanumeric() || c == '-' || c == '_' {
                c
            } else {
                '-'
            }
        })
        .collect()
}

fn prepare_stash_preview_dir(repo_path: &str, index: u32, base_sha: &str, port: u16) -> Result<PathBuf, String> {
    let preview_dir = std::env::temp_dir().join(format!(
        "git-viz-stash-preview-{}-{}-{port}",
        slug_for_key(base_sha),
        index
    ));
    let _ = fs::remove_dir_all(&preview_dir);
    fs::create_dir_all(&preview_dir).map_err(|e| format!("Failed to create stash preview dir: {e}"))?;

    let worktree_out = std::process::Command::new("git")
        .args([
            "-C",
            repo_path,
            "worktree",
            "add",
            "--detach",
            preview_dir.to_str().unwrap_or(""),
            base_sha,
        ])
        .output()
        .map_err(|e| format!("git worktree add failed: {e}"))?;
    if !worktree_out.status.success() {
        let _ = fs::remove_dir_all(&preview_dir);
        return Err(format!(
            "git worktree add failed: {}",
            String::from_utf8_lossy(&worktree_out.stderr).trim()
        ));
    }

    let stash_ref = format!("stash@{{{index}}}");
    let apply_out = std::process::Command::new("git")
        .args([
            "-C",
            preview_dir.to_str().unwrap_or(""),
            "stash",
            "apply",
            &stash_ref,
        ])
        .output()
        .map_err(|e| format!("git stash apply failed: {e}"))?;
    if !apply_out.status.success() {
        let _ = std::process::Command::new("git")
            .args(["-C", repo_path, "worktree", "remove", "--force", preview_dir.to_str().unwrap_or("")])
            .output();
        let _ = fs::remove_dir_all(&preview_dir);
        return Err(format!(
            "git stash apply failed: {}",
            String::from_utf8_lossy(&apply_out.stderr).trim()
        ));
    }

    Ok(preview_dir)
}

fn cleanup_stash_preview_dir(repo_path: &str, preview_dir: &Path) {
    let _ = std::process::Command::new("git")
        .args([
            "-C",
            repo_path,
            "worktree",
            "remove",
            "--force",
            preview_dir.to_str().unwrap_or(""),
        ])
        .output();
    let _ = fs::remove_dir_all(preview_dir);
}

fn generate_commit_preview(
    repo_path: &str,
    commit_key: &str,
    opts: &EnsureCommitAppPreviewOpts,
) -> Result<CommitAppPreviewRecord, String> {
    let plan = resolve_preview_source(repo_path, commit_key, opts)?;

    match plan {
        PreviewSourcePlan::Skipped { reason } => {
            upsert_preview_record(
                repo_path,
                commit_key,
                "skipped",
                None,
                None,
                None,
                Some(&reason),
                None,
            )?;
            return Ok(CommitAppPreviewRecord {
                commit_key: commit_key.to_string(),
                status: "skipped".to_string(),
                git_ref: None,
                route: None,
                image_path: None,
                error: Some(reason),
            });
        }
        _ => {}
    }

    upsert_preview_record(
        repo_path,
        commit_key,
        "pending",
        None,
        None,
        None,
        None,
        None,
    )?;

    let port = port_for_commit_key(commit_key);
    let mut stash_temp_dir: Option<PathBuf> = None;

    let (git_ref, live_source_dir, preserve_source, fingerprint) = match plan {
        PreviewSourcePlan::Archive {
            git_ref,
            fingerprint,
        } => (git_ref, None, false, fingerprint),
        PreviewSourcePlan::LiveWorktree {
            path,
            git_ref,
            fingerprint,
        } => (git_ref, Some(PathBuf::from(path)), true, fingerprint),
        PreviewSourcePlan::Stash { index, base_sha } => {
            let dir = prepare_stash_preview_dir(repo_path, index, &base_sha, port)?;
            stash_temp_dir = Some(dir.clone());
            (base_sha, Some(dir), false, None)
        }
        PreviewSourcePlan::Skipped { .. } => unreachable!(),
    };

    let routes = get_changed_routes_for_commit(
        repo_path.to_string(),
        git_ref.clone(),
        opts.parent_sha.clone(),
    )?;
    let primary_route = routes.first().cloned().unwrap_or_else(|| "/".to_string());

    let cache_dir = preview_cache_dir(repo_path)?;
    fs::create_dir_all(&cache_dir).map_err(|e| format!("Failed to create preview cache dir: {e}"))?;
    let output_path = preview_image_path(repo_path, commit_key)?;

    let config = PreviewRunConfig {
        repo_path: repo_path.to_string(),
        git_ref: git_ref.clone(),
        slug: slug_for_key(commit_key),
        port,
        paths: vec![primary_route.clone()],
        live_source_dir,
        preserve_source_dir: preserve_source,
        single_output_path: Some(output_path.clone()),
    };

    let capture_result = run_previews_blocking(config);

    if let Some(dir) = stash_temp_dir.as_ref() {
        cleanup_stash_preview_dir(repo_path, dir);
    }

    match capture_result {
        Ok(_) if output_path.exists() => {
            upsert_preview_record(
                repo_path,
                commit_key,
                "ready",
                Some(&git_ref),
                Some(&primary_route),
                Some(output_path.to_string_lossy().as_ref()),
                None,
                fingerprint.as_deref(),
            )?;
            Ok(CommitAppPreviewRecord {
                commit_key: commit_key.to_string(),
                status: "ready".to_string(),
                git_ref: Some(git_ref),
                route: Some(primary_route),
                image_path: Some(output_path.to_string_lossy().to_string()),
                error: None,
            })
        }
        Ok(_) => {
            let err = "Screenshot file was not created".to_string();
            upsert_preview_record(
                repo_path,
                commit_key,
                "failed",
                Some(&git_ref),
                Some(&primary_route),
                None,
                Some(&err),
                fingerprint.as_deref(),
            )?;
            Ok(CommitAppPreviewRecord {
                commit_key: commit_key.to_string(),
                status: "failed".to_string(),
                git_ref: Some(git_ref),
                route: Some(primary_route),
                image_path: None,
                error: Some(err),
            })
        }
        Err(err) => {
            upsert_preview_record(
                repo_path,
                commit_key,
                "failed",
                Some(&git_ref),
                None,
                None,
                Some(&err),
                fingerprint.as_deref(),
            )?;
            Ok(CommitAppPreviewRecord {
                commit_key: commit_key.to_string(),
                status: "failed".to_string(),
                git_ref: Some(git_ref),
                route: None,
                image_path: None,
                error: Some(err),
            })
        }
    }
}

fn enqueue_preview_job(repo_path: String, commit_key: String, opts: EnsureCommitAppPreviewOpts) {
    let priority = opts.priority.unwrap_or(0);
    let (lock, cvar) = preview_queue();
    let mut state = lock.lock().expect("preview queue lock poisoned");
    if !state.pending.iter().any(|job| {
        job.repo_path == repo_path && job.commit_key == commit_key
    }) {
        state.pending.push(PreviewJob {
            repo_path,
            commit_key,
            opts,
            priority,
        });
        state
            .pending
            .sort_by(|left, right| right.priority.cmp(&left.priority));
    }
    if !state.running {
        state.running = true;
        drop(state);
        std::thread::spawn(process_preview_queue);
    } else {
        cvar.notify_one();
    }
}

fn process_preview_queue() {
    loop {
        let job = {
            let (lock, cvar) = preview_queue();
            let mut state = lock.lock().expect("preview queue lock poisoned");
            while state.pending.is_empty() {
                state.running = false;
                cvar.notify_all();
                return;
            }
            let job = state.pending.remove(0);
            drop(state);
            job
        };

        let _ = generate_commit_preview(&job.repo_path, &job.commit_key, &job.opts);
    }
}

fn should_regenerate(
    repo_path: &str,
    commit_key: &str,
    opts: &EnsureCommitAppPreviewOpts,
    record: &CommitAppPreviewRecord,
) -> Result<bool, String> {
    if record.status == "ready" || record.status == "skipped" {
        if is_working_tree_key(commit_key) && opts.worktree_has_uncommitted.unwrap_or(false) {
            if let Some(path) = opts.worktree_path.as_ref() {
                let fingerprint = worktree_fingerprint(Path::new(path))?;
                let conn = open_visual_cache_connection()?;
                let stored: Option<String> = conn
                    .query_row(
                        "SELECT fingerprint FROM commit_app_preview_cache WHERE repo_path = ?1 AND commit_key = ?2",
                        params![repo_path, commit_key],
                        |row| row.get(0),
                    )
                    .optional()
                    .map_err(|e| format!("Failed to read preview fingerprint: {e}"))?;
                return Ok(stored.as_deref() != Some(fingerprint.as_str()));
            }
        }
        return Ok(false);
    }
    Ok(record.status != "pending")
}

#[tauri::command(rename_all = "camelCase")]
pub fn get_commit_app_preview(repo_path: String, commit_key: String) -> Result<CommitAppPreviewRecord, String> {
    read_preview_record(&repo_path, &commit_key).map(|record| {
        record.unwrap_or(CommitAppPreviewRecord {
            commit_key,
            status: "idle".to_string(),
            git_ref: None,
            route: None,
            image_path: None,
            error: None,
        })
    })
}

#[tauri::command(rename_all = "camelCase")]
pub fn get_commit_app_previews_batch(
    repo_path: String,
    commit_keys: Vec<String>,
) -> Result<Vec<CommitAppPreviewRecord>, String> {
    commit_keys
        .into_iter()
        .map(|commit_key| get_commit_app_preview(repo_path.clone(), commit_key))
        .collect()
}

#[tauri::command(rename_all = "camelCase")]
pub fn ensure_commit_app_preview(
    repo_path: String,
    commit_key: String,
    opts: EnsureCommitAppPreviewOpts,
) -> Result<CommitAppPreviewRecord, String> {
    if let Some(existing) = read_preview_record(&repo_path, &commit_key)? {
        if !should_regenerate(&repo_path, &commit_key, &opts, &existing)? {
            return Ok(existing);
        }
    }

    let (lock, _) = preview_queue();
    let state = lock.lock().expect("preview queue lock poisoned");
    if state.pending.iter().any(|job| {
        job.repo_path == repo_path && job.commit_key == commit_key
    }) {
        return Ok(CommitAppPreviewRecord {
            commit_key,
            status: "pending".to_string(),
            git_ref: None,
            route: None,
            image_path: None,
            error: None,
        });
    }
    drop(state);

    upsert_preview_record(
        &repo_path,
        &commit_key,
        "pending",
        None,
        None,
        None,
        None,
        None,
    )?;
    enqueue_preview_job(repo_path, commit_key.clone(), opts);
    Ok(CommitAppPreviewRecord {
        commit_key,
        status: "pending".to_string(),
        git_ref: None,
        route: None,
        image_path: None,
        error: None,
    })
}

#[tauri::command(rename_all = "camelCase")]
pub fn clear_commit_app_preview_cache(repo_path: String) -> Result<(), String> {
    let conn = open_visual_cache_connection()?;
    conn.execute(
        "DELETE FROM commit_app_preview_cache WHERE repo_path = ?1",
        params![repo_path],
    )
    .map_err(|e| format!("Failed to clear commit preview cache: {e}"))?;
    if let Ok(dir) = preview_cache_dir(&repo_path) {
        let _ = fs::remove_dir_all(dir);
    }
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn working_tree_key_detection() {
        assert!(is_working_tree_key("WORKING_TREE"));
        assert!(is_working_tree_key("WORKING_TREE:abc123"));
        assert!(!is_working_tree_key("deadbeef"));
    }

    #[test]
    fn stash_key_detection() {
        assert!(is_stash_key("STASH:0"));
        assert!(!is_stash_key("WORKING_TREE"));
    }

    #[test]
    fn safe_commit_key_filename_replaces_special_chars() {
        assert_eq!(safe_commit_key_filename("STASH:0"), "STASH_0");
        assert_eq!(
            safe_commit_key_filename("WORKING_TREE:abc"),
            "WORKING_TREE_abc"
        );
    }
}
