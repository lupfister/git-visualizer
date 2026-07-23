use super::cli::{self, GitError};
use serde::{Deserialize, Serialize};
use std::{
    collections::HashSet,
    fs,
    io::Write,
    path::{Component, Path, PathBuf},
    process::{Command, Stdio},
};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(
    tag = "kind",
    rename_all = "camelCase",
    rename_all_fields = "camelCase"
)]
pub enum PreviewTarget {
    Commit {
        sha: String,
    },
    Worktree {
        worktree_path: String,
        head_sha: String,
        working_tree_id: String,
    },
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PreparePreviewTargetResult {
    pub preview_path: String,
    pub target_kind: String,
    pub effective_head_sha: String,
    pub overlay_applied: bool,
    pub dependency_files_changed: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ActivePreviewTarget {
    pub preview_path: String,
    pub target_id: String,
    pub target_kind: String,
    pub effective_head_sha: String,
    pub overlay_applied: bool,
}

impl PreviewTarget {
    pub fn target_id(&self) -> String {
        match self {
            PreviewTarget::Commit { sha } => sha.clone(),
            PreviewTarget::Worktree {
                working_tree_id, ..
            } => working_tree_id.clone(),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
#[serde(rename_all = "camelCase")]
struct OverlayManifest {
    paths: Vec<String>,
}

const OVERLAY_MANIFEST_FILE: &str = "overlay-manifest.json";
const OVERLAY_PATCH_FILE: &str = "overlay.patch";
const ACTIVE_PREVIEW_TARGET_FILE: &str = "active-preview-target.json";
const PREVIEW_WORKTREE_DIR: &str = "preview";
const LEGACY_PREVIEW_WORKTREE_DIR: &str = "worktree";

pub fn prepare_preview_target(
    repo: &Path,
    storage_root: &Path,
    target: PreviewTarget,
) -> Result<PreparePreviewTargetResult, GitError> {
    let repo_id = repo_storage_id(repo);
    let project_root = storage_root.join(repo_id);
    let preview_path = project_root.join(PREVIEW_WORKTREE_DIR);
    let state_path = project_root.join("state");
    fs::create_dir_all(&state_path).map_err(|e| {
        GitError::CommandFailed(format!("failed to create preview state directory: {e}"))
    })?;
    remove_legacy_preview_worktree(repo, &project_root)?;

    let target_id = target.target_id();
    let (target_kind, checkout_sha, source_worktree) = match target {
        PreviewTarget::Commit { sha } => ("commit".to_string(), sha, None),
        PreviewTarget::Worktree {
            worktree_path,
            head_sha,
            working_tree_id: _,
        } => (
            "worktree".to_string(),
            head_sha,
            Some(PathBuf::from(worktree_path)),
        ),
    };

    ensure_preview_worktree(repo, &preview_path, &checkout_sha)?;

    let active_target = get_active_preview_target(storage_root, repo).ok().flatten();
    let already_prepared = active_target.as_ref().map_or(false, |active| {
        active.target_id == target_id
            && active.target_kind == target_kind
            && active.effective_head_sha == checkout_sha
            && !active.overlay_applied
            && source_worktree.is_none()
    });

    if already_prepared {
        return Ok(PreparePreviewTargetResult {
            preview_path: preview_path.to_string_lossy().to_string(),
            target_kind,
            effective_head_sha: checkout_sha,
            overlay_applied: false,
            dependency_files_changed: false,
        });
    }

    remove_previous_overlay(&preview_path, &state_path)?;
    git_run(&preview_path, &["reset", "--hard"])?;
    git_run(&preview_path, &["clean", "-fd"])?;
    git_run(&preview_path, &["checkout", "--detach", &checkout_sha])?;

    let mut overlay_paths = Vec::new();
    let mut overlay_applied = false;

    if let Some(source) = source_worktree {
        let source_head = git_run(&source, &["rev-parse", "HEAD"])?.trim().to_string();
        if source_head != checkout_sha {
            return Err(GitError::CommandFailed(format!(
                "source worktree moved while preparing preview: expected {checkout_sha}, found {source_head}"
            )));
        }

        let patch = git_run_bytes(&source, &["diff", "--binary", "--full-index", "HEAD"])?;
        if !patch.is_empty() {
            let patch_path = state_path.join(OVERLAY_PATCH_FILE);
            fs::write(&patch_path, &patch).map_err(|e| {
                GitError::CommandFailed(format!("failed to write preview overlay patch: {e}"))
            })?;
            let patch_arg = path_to_string(&patch_path)?;
            git_run(&preview_path, &["apply", "--check", &patch_arg])?;
            git_run(&preview_path, &["apply", &patch_arg])?;
            overlay_applied = true;
        }

        let copied = copy_untracked_non_ignored_files(&source, &preview_path)?;
        if !copied.is_empty() {
            overlay_applied = true;
            overlay_paths.extend(copied);
        }

        write_overlay_manifest(&state_path, &overlay_paths)?;
    } else {
        let _ = fs::remove_file(state_path.join(OVERLAY_MANIFEST_FILE));
        let _ = fs::remove_file(state_path.join(OVERLAY_PATCH_FILE));
    }

    let effective_head_sha = git_run(&preview_path, &["rev-parse", "HEAD"])?
        .trim()
        .to_string();
    let dependency_files_changed = dependency_files_changed(&preview_path)?;
    write_active_preview_target(
        &state_path,
        &ActivePreviewTarget {
            preview_path: preview_path.to_string_lossy().to_string(),
            target_id,
            target_kind: target_kind.clone(),
            effective_head_sha: effective_head_sha.clone(),
            overlay_applied,
        },
    )?;

    Ok(PreparePreviewTargetResult {
        preview_path: preview_path.to_string_lossy().to_string(),
        target_kind,
        effective_head_sha,
        overlay_applied,
        dependency_files_changed,
    })
}

#[allow(dead_code)]
pub fn get_active_preview_target(
    storage_root: &Path,
    repo: &Path,
) -> Result<Option<ActivePreviewTarget>, GitError> {
    let state_path = preview_state_path(storage_root, repo);
    let target_path = state_path.join(ACTIVE_PREVIEW_TARGET_FILE);
    if let Ok(raw) = fs::read_to_string(target_path) {
        let target: ActivePreviewTarget = serde_json::from_str(&raw).map_err(|e| {
            GitError::CommandFailed(format!("failed to decode active preview target: {e}"))
        })?;
        return Ok(Some(target));
    }

    let preview_path = storage_root
        .join(repo_storage_id(repo))
        .join(PREVIEW_WORKTREE_DIR);
    if !preview_path.join(".git").exists() {
        return Ok(None);
    }
    let effective_head_sha = git_run(&preview_path, &["rev-parse", "HEAD"])?
        .trim()
        .to_string();
    Ok(Some(ActivePreviewTarget {
        preview_path: preview_path.to_string_lossy().to_string(),
        target_id: effective_head_sha.clone(),
        target_kind: "commit".to_string(),
        effective_head_sha,
        overlay_applied: false,
    }))
}

pub fn clear_active_preview_target(storage_root: &Path, repo: &Path) {
    let _ =
        fs::remove_file(preview_state_path(storage_root, repo).join(ACTIVE_PREVIEW_TARGET_FILE));
}

fn write_active_preview_target(
    state_path: &Path,
    target: &ActivePreviewTarget,
) -> Result<(), GitError> {
    let raw = serde_json::to_string_pretty(target).map_err(|e| {
        GitError::CommandFailed(format!("failed to encode active preview target: {e}"))
    })?;
    fs::write(state_path.join(ACTIVE_PREVIEW_TARGET_FILE), raw).map_err(|e| {
        GitError::CommandFailed(format!("failed to write active preview target: {e}"))
    })?;
    Ok(())
}

fn ensure_preview_worktree(repo: &Path, preview_path: &Path, sha: &str) -> Result<(), GitError> {
    if preview_path.join(".git").exists() {
        return Ok(());
    }
    let preview_arg = path_to_string(preview_path)?;
    if preview_path.exists() {
        let _ = git_run(
            repo,
            &["worktree", "remove", "--force", "--force", &preview_arg],
        );
        fs::remove_dir_all(preview_path).map_err(|e| {
            GitError::CommandFailed(format!("failed to replace invalid preview worktree: {e}"))
        })?;
    } else {
        let _ = git_run(
            repo,
            &["worktree", "remove", "--force", "--force", &preview_arg],
        );
    }
    if let Some(parent) = preview_path.parent() {
        fs::create_dir_all(parent).map_err(|e| {
            GitError::CommandFailed(format!("failed to create preview directory: {e}"))
        })?;
    }
    git_run(repo, &["worktree", "add", "--detach", &preview_arg, sha])?;
    git_run(
        repo,
        &[
            "worktree",
            "lock",
            "--reason",
            "cobble managed preview",
            &preview_arg,
        ],
    )
    .or_else(|_| Ok(String::new()))?;
    Ok(())
}

fn remove_legacy_preview_worktree(repo: &Path, project_root: &Path) -> Result<(), GitError> {
    let legacy_path = project_root.join(LEGACY_PREVIEW_WORKTREE_DIR);
    let legacy_arg = path_to_string(&legacy_path)?;
    let _ = git_run(
        repo,
        &["worktree", "remove", "--force", "--force", &legacy_arg],
    );
    if legacy_path.exists() {
        let _ = fs::remove_dir_all(&legacy_path);
    }
    Ok(())
}

fn remove_previous_overlay(preview_path: &Path, state_path: &Path) -> Result<(), GitError> {
    let manifest_path = state_path.join(OVERLAY_MANIFEST_FILE);
    let Ok(raw) = fs::read_to_string(&manifest_path) else {
        return Ok(());
    };
    let manifest: OverlayManifest = serde_json::from_str(&raw).unwrap_or_default();
    let mut paths = manifest.paths;
    paths.sort_by_key(|path| std::cmp::Reverse(path.matches('/').count()));
    for relative in paths {
        let Some(relative_path) = safe_relative_path(&relative) else {
            continue;
        };
        let absolute = preview_path.join(relative_path);
        if absolute.is_dir() {
            let _ = fs::remove_dir_all(&absolute);
        } else {
            let _ = fs::remove_file(&absolute);
        }
        prune_empty_parents(preview_path, absolute.parent());
    }
    let _ = fs::remove_file(manifest_path);
    let _ = fs::remove_file(state_path.join(OVERLAY_PATCH_FILE));
    Ok(())
}

fn copy_untracked_non_ignored_files(
    source: &Path,
    preview_path: &Path,
) -> Result<Vec<String>, GitError> {
    let status = git_run_bytes(
        source,
        &["status", "--porcelain=v1", "-z", "--untracked-files=all"],
    )?;
    let entries = parse_porcelain_z(&status);
    let mut copied = Vec::new();
    let mut seen = HashSet::new();

    for entry in entries {
        if !entry.starts_with("?? ") {
            continue;
        }
        let relative = &entry[3..];
        if !seen.insert(relative.to_string()) {
            continue;
        }
        let Some(relative_path) = safe_relative_path(relative) else {
            continue;
        };
        let source_file = source.join(&relative_path);
        if !source_file.is_file() {
            continue;
        }
        let target_file = preview_path.join(&relative_path);
        if let Some(parent) = target_file.parent() {
            fs::create_dir_all(parent).map_err(|e| {
                GitError::CommandFailed(format!("failed to create overlay directory: {e}"))
            })?;
        }
        fs::copy(&source_file, &target_file).map_err(|e| {
            GitError::CommandFailed(format!("failed to copy overlay file {relative}: {e}"))
        })?;
        copied.push(relative.to_string());
    }

    Ok(copied)
}

fn write_overlay_manifest(state_path: &Path, paths: &[String]) -> Result<(), GitError> {
    let manifest = OverlayManifest {
        paths: paths.to_vec(),
    };
    let raw = serde_json::to_string_pretty(&manifest)
        .map_err(|e| GitError::CommandFailed(format!("failed to encode overlay manifest: {e}")))?;
    fs::write(state_path.join(OVERLAY_MANIFEST_FILE), raw)
        .map_err(|e| GitError::CommandFailed(format!("failed to write overlay manifest: {e}")))?;
    Ok(())
}

fn dependency_files_changed(preview_path: &Path) -> Result<bool, GitError> {
    let status = git_run(
        preview_path,
        &["status", "--porcelain=v1", "--untracked-files=all"],
    )?;
    Ok(status.lines().any(|line| {
        let path = line.get(3..).unwrap_or("").trim();
        is_dependency_file(path)
    }))
}

fn is_dependency_file(path: &str) -> bool {
    let file_name = Path::new(path)
        .file_name()
        .and_then(|name| name.to_str())
        .unwrap_or(path);
    matches!(
        file_name,
        "package.json"
            | "pnpm-lock.yaml"
            | "package-lock.json"
            | "yarn.lock"
            | "bun.lockb"
            | "Cargo.toml"
            | "Cargo.lock"
            | "requirements.txt"
            | "pyproject.toml"
            | "poetry.lock"
            | "Pipfile"
            | "Pipfile.lock"
            | "go.mod"
            | "go.sum"
    )
}

pub fn preview_state_path(storage_root: &Path, repo: &Path) -> PathBuf {
    storage_root.join(repo_storage_id(repo)).join("state")
}

pub fn install_marker_path(storage_root: &Path, repo: &Path) -> PathBuf {
    preview_state_path(storage_root, repo).join("install-ok.json")
}

pub fn should_run_install(
    storage_root: &Path,
    repo: &Path,
    preview_path: &Path,
    dependency_files_changed: bool,
) -> bool {
    !install_marker_path(storage_root, repo).exists()
        || preview_path_needs_install(preview_path, dependency_files_changed)
}

pub fn preview_path_needs_install(preview_path: &Path, dependency_files_changed: bool) -> bool {
    dependency_files_changed
        || (preview_path.join("package.json").exists()
            && !preview_path.join("node_modules").exists())
}

pub fn mark_install_success(storage_root: &Path, repo: &Path) -> Result<(), GitError> {
    let state_path = preview_state_path(storage_root, repo);
    fs::create_dir_all(&state_path).map_err(|e| {
        GitError::CommandFailed(format!("failed to create preview state directory: {e}"))
    })?;
    fs::write(
        install_marker_path(storage_root, repo),
        format!(
            "{{\"installedAtMs\":{}}}\n",
            chrono::Utc::now().timestamp_millis()
        ),
    )
    .map_err(|e| GitError::CommandFailed(format!("failed to write install marker: {e}")))?;
    Ok(())
}

pub fn detect_localhost_url(log: &str) -> Option<String> {
    let cleaned_log = strip_ansi_escape_sequences(log);
    for token in cleaned_log
        .split(|ch: char| ch.is_whitespace() || ch == '"' || ch == '\'' || ch == ')' || ch == '(')
    {
        let cleaned = token.trim_matches(|ch: char| ch == ',' || ch == ';' || ch == '.');
        if cleaned.starts_with("http://localhost:") || cleaned.starts_with("https://localhost:") {
            return Some(cleaned.trim_end_matches('/').to_string());
        }
        if cleaned.starts_with("http://127.0.0.1:") || cleaned.starts_with("https://127.0.0.1:") {
            return Some(cleaned.trim_end_matches('/').to_string());
        }
    }
    for host in ["localhost:", "127.0.0.1:", "0.0.0.0:"] {
        if let Some(index) = cleaned_log.find(host) {
            let after = &cleaned_log[index + host.len()..];
            let digits: String = after.chars().take_while(|ch| ch.is_ascii_digit()).collect();
            if !digits.is_empty() {
                return Some(format!("http://localhost:{digits}"));
            }
        }
    }
    None
}

fn strip_ansi_escape_sequences(value: &str) -> String {
    let mut output = String::with_capacity(value.len());
    let mut chars = value.chars().peekable();
    while let Some(ch) = chars.next() {
        if ch != '\u{1b}' {
            output.push(ch);
            continue;
        }
        if chars.next_if_eq(&'[').is_none() {
            continue;
        }
        for sequence_char in chars.by_ref() {
            if ('@'..='~').contains(&sequence_char) {
                break;
            }
        }
    }
    output
}

fn parse_porcelain_z(output: &[u8]) -> Vec<String> {
    output
        .split(|byte| *byte == 0)
        .filter(|entry| !entry.is_empty())
        .map(|entry| String::from_utf8_lossy(entry).to_string())
        .collect()
}

fn safe_relative_path(raw: &str) -> Option<PathBuf> {
    let path = Path::new(raw);
    if path.is_absolute() {
        return None;
    }
    if path.components().any(|component| {
        matches!(
            component,
            Component::ParentDir | Component::RootDir | Component::Prefix(_)
        )
    }) {
        return None;
    }
    Some(path.to_path_buf())
}

fn prune_empty_parents(root: &Path, mut parent: Option<&Path>) {
    while let Some(path) = parent {
        if path == root {
            break;
        }
        if fs::remove_dir(path).is_err() {
            break;
        }
        parent = path.parent();
    }
}

fn repo_storage_id(repo: &Path) -> String {
    let canonical = fs::canonicalize(repo).unwrap_or_else(|_| repo.to_path_buf());
    let normalized = canonical.to_string_lossy().to_lowercase();
    let mut hash = 2166136261u32;
    for byte in normalized.as_bytes() {
        hash ^= u32::from(*byte);
        hash = hash.wrapping_mul(16777619);
    }
    format!("{hash:08x}")
}

fn git_run(repo: &Path, args: &[&str]) -> Result<String, GitError> {
    cli::run(repo, args)
}

fn git_run_bytes(repo: &Path, args: &[&str]) -> Result<Vec<u8>, GitError> {
    let repo_str = path_to_string(repo)?;
    let output = Command::new("git")
        .args(["-C", &repo_str])
        .args(args)
        .env("GIT_TERMINAL_PROMPT", "0")
        .env("GIT_ASKPASS", "")
        .env("SSH_ASKPASS", "")
        .output()
        .map_err(|e| GitError::CommandFailed(e.to_string()))?;
    if !output.status.success() {
        return Err(GitError::CommandFailed(
            String::from_utf8_lossy(&output.stderr).into_owned(),
        ));
    }
    Ok(output.stdout)
}

fn path_to_string(path: &Path) -> Result<String, GitError> {
    path.to_str()
        .map(str::to_string)
        .ok_or_else(|| GitError::InvalidPath(path.display().to_string()))
}

#[allow(dead_code)]
fn git_run_with_stdin(repo: &Path, args: &[&str], stdin: &[u8]) -> Result<(), GitError> {
    let repo_str = path_to_string(repo)?;
    let mut child = Command::new("git")
        .args(["-C", &repo_str])
        .args(args)
        .env("GIT_TERMINAL_PROMPT", "0")
        .env("GIT_ASKPASS", "")
        .env("SSH_ASKPASS", "")
        .stdin(Stdio::piped())
        .stderr(Stdio::piped())
        .spawn()
        .map_err(|e| GitError::CommandFailed(e.to_string()))?;
    if let Some(mut input) = child.stdin.take() {
        input
            .write_all(stdin)
            .map_err(|e| GitError::CommandFailed(e.to_string()))?;
    }
    let output = child
        .wait_with_output()
        .map_err(|e| GitError::CommandFailed(e.to_string()))?;
    if output.status.success() {
        Ok(())
    } else {
        Err(GitError::CommandFailed(
            String::from_utf8_lossy(&output.stderr).into_owned(),
        ))
    }
}

#[cfg(test)]
mod tests {
    use super::{
        detect_localhost_url, get_active_preview_target, mark_install_success,
        prepare_preview_target, preview_path_needs_install, should_run_install, PreviewTarget,
    };
    use std::{fs, path::Path, process::Command};

    struct TestRepo {
        root: std::path::PathBuf,
        storage: std::path::PathBuf,
    }

    impl TestRepo {
        fn new(name: &str) -> Self {
            let base = std::env::temp_dir().join(format!(
                "gv-preview-{name}-{}-{}",
                std::process::id(),
                chrono::Utc::now().timestamp_nanos_opt().unwrap_or_default()
            ));
            let root = base.join("repo");
            let storage = base.join("storage");
            fs::create_dir_all(&root).expect("create repo dir");
            run(&root, &["init"]);
            run(&root, &["config", "user.email", "test@example.com"]);
            run(&root, &["config", "user.name", "Test User"]);
            fs::write(
                root.join("package.json"),
                "{\"scripts\":{\"dev\":\"vite\"}}\n",
            )
            .expect("write package");
            fs::write(root.join(".gitignore"), ".env.local\ndist/\n").expect("write gitignore");
            run(&root, &["add", "."]);
            run(&root, &["commit", "-m", "initial"]);
            Self { root, storage }
        }

        fn head(&self) -> String {
            output(&self.root, &["rev-parse", "HEAD"])
                .trim()
                .to_string()
        }
    }

    impl Drop for TestRepo {
        fn drop(&mut self) {
            let _ = fs::remove_dir_all(self.root.parent().unwrap());
        }
    }

    fn run(repo: &Path, args: &[&str]) {
        let output = Command::new("git")
            .args(["-C", repo.to_str().unwrap()])
            .args(args)
            .output()
            .expect("run git");
        assert!(
            output.status.success(),
            "git {:?} failed: {}",
            args,
            String::from_utf8_lossy(&output.stderr)
        );
    }

    fn output(repo: &Path, args: &[&str]) -> String {
        let output = Command::new("git")
            .args(["-C", repo.to_str().unwrap()])
            .args(args)
            .output()
            .expect("run git");
        assert!(
            output.status.success(),
            "git {:?} failed: {}",
            args,
            String::from_utf8_lossy(&output.stderr)
        );
        String::from_utf8(output.stdout).expect("utf8")
    }

    #[test]
    fn clean_commit_preview_checks_out_exact_sha_without_overlay() {
        let repo = TestRepo::new("clean");
        let head = repo.head();
        let result = prepare_preview_target(
            &repo.root,
            &repo.storage,
            PreviewTarget::Commit { sha: head.clone() },
        )
        .expect("prepare preview");

        assert_eq!(result.target_kind, "commit");
        assert_eq!(result.effective_head_sha, head);
        assert!(!result.overlay_applied);
        assert!(!Path::new(&result.preview_path)
            .parent()
            .unwrap()
            .join("state")
            .join("overlay-manifest.json")
            .exists());
    }

    #[test]
    fn managed_preview_worktree_directory_is_named_preview() {
        let repo = TestRepo::new("preview-name");
        let result = prepare_preview_target(
            &repo.root,
            &repo.storage,
            PreviewTarget::Commit { sha: repo.head() },
        )
        .expect("prepare preview");

        assert_eq!(
            Path::new(&result.preview_path)
                .file_name()
                .and_then(|name| name.to_str()),
            Some("preview")
        );
    }

    #[test]
    fn active_preview_target_persists_for_reload_outline() {
        let repo = TestRepo::new("active-target");
        let head = repo.head();
        prepare_preview_target(
            &repo.root,
            &repo.storage,
            PreviewTarget::Commit { sha: head.clone() },
        )
        .expect("prepare preview");

        let active = get_active_preview_target(&repo.storage, &repo.root)
            .expect("read active")
            .expect("active target");
        assert_eq!(active.target_id, head);
        assert_eq!(active.target_kind, "commit");
        assert_eq!(
            Path::new(&active.preview_path)
                .file_name()
                .and_then(|name| name.to_str()),
            Some("preview")
        );
    }

    #[test]
    fn dirty_worktree_preview_applies_tracked_and_untracked_non_ignored_files() {
        let repo = TestRepo::new("dirty");
        let head = repo.head();
        fs::write(
            repo.root.join("package.json"),
            "{\"dependencies\":{\"x\":\"1\"}}\n",
        )
        .expect("modify tracked");
        fs::write(repo.root.join("new-file.txt"), "untracked\n").expect("write untracked");
        fs::write(repo.root.join(".env.local"), "SECRET=1\n").expect("write ignored");

        let result = prepare_preview_target(
            &repo.root,
            &repo.storage,
            PreviewTarget::Worktree {
                worktree_path: repo.root.to_string_lossy().to_string(),
                head_sha: head,
                working_tree_id: "WORKING_TREE".to_string(),
            },
        )
        .expect("prepare preview");

        let preview = Path::new(&result.preview_path);
        assert!(result.overlay_applied);
        assert!(result.dependency_files_changed);
        assert_eq!(
            fs::read_to_string(preview.join("package.json")).expect("read tracked"),
            "{\"dependencies\":{\"x\":\"1\"}}\n"
        );
        assert_eq!(
            fs::read_to_string(preview.join("new-file.txt")).expect("read untracked"),
            "untracked\n"
        );
        assert!(!preview.join(".env.local").exists());
    }

    #[test]
    fn switching_targets_removes_stale_untracked_overlay_files() {
        let repo = TestRepo::new("switch");
        let head = repo.head();
        fs::write(repo.root.join("scratch.txt"), "one\n").expect("write untracked");

        let dirty = prepare_preview_target(
            &repo.root,
            &repo.storage,
            PreviewTarget::Worktree {
                worktree_path: repo.root.to_string_lossy().to_string(),
                head_sha: head.clone(),
                working_tree_id: "WORKING_TREE".to_string(),
            },
        )
        .expect("prepare dirty preview");
        assert!(Path::new(&dirty.preview_path).join("scratch.txt").exists());

        let clean = prepare_preview_target(
            &repo.root,
            &repo.storage,
            PreviewTarget::Commit { sha: head },
        )
        .expect("prepare clean preview");
        assert!(!Path::new(&clean.preview_path).join("scratch.txt").exists());
        assert!(!clean.overlay_applied);
    }

    #[test]
    fn dirty_worktree_preview_applies_binary_changes_and_tracked_deletes() {
        let repo = TestRepo::new("binary-delete");
        fs::write(repo.root.join("image.bin"), [0_u8, 1, 2, 3, 4]).expect("write binary");
        fs::write(repo.root.join("delete-me.txt"), "delete\n").expect("write tracked");
        run(&repo.root, &["add", "."]);
        run(&repo.root, &["commit", "-m", "add binary and deletable"]);
        let head = repo.head();

        fs::write(repo.root.join("image.bin"), [9_u8, 8, 7, 6]).expect("modify binary");
        fs::remove_file(repo.root.join("delete-me.txt")).expect("delete tracked");

        let result = prepare_preview_target(
            &repo.root,
            &repo.storage,
            PreviewTarget::Worktree {
                worktree_path: repo.root.to_string_lossy().to_string(),
                head_sha: head,
                working_tree_id: "WORKING_TREE".to_string(),
            },
        )
        .expect("prepare preview");

        let preview = Path::new(&result.preview_path);
        assert_eq!(
            fs::read(preview.join("image.bin")).expect("read binary"),
            vec![9_u8, 8, 7, 6]
        );
        assert!(!preview.join("delete-me.txt").exists());
    }

    #[test]
    fn preview_target_deserializes_frontend_camel_case_shape() {
        let raw = r#"{
            "kind": "worktree",
            "worktreePath": "/tmp/source",
            "headSha": "abc123",
            "workingTreeId": "WORKING_TREE"
        }"#;
        let target: PreviewTarget = serde_json::from_str(raw).expect("deserialize target");
        match target {
            PreviewTarget::Worktree {
                worktree_path,
                head_sha,
                working_tree_id,
            } => {
                assert_eq!(worktree_path, "/tmp/source");
                assert_eq!(head_sha, "abc123");
                assert_eq!(working_tree_id, "WORKING_TREE");
            }
            PreviewTarget::Commit { .. } => panic!("expected worktree target"),
        }
    }

    #[test]
    fn detects_localhost_urls_from_logs() {
        assert_eq!(
            detect_localhost_url("ready at http://localhost:5173/"),
            Some("http://localhost:5173".to_string())
        );
        assert_eq!(
            detect_localhost_url("Local: localhost:1420"),
            Some("http://localhost:1420".to_string())
        );
        assert_eq!(
            detect_localhost_url("\u{1b}[32mLocal: http://127.0.0.1:5173/\u{1b}[39m"),
            Some("http://127.0.0.1:5173".to_string())
        );
        assert_eq!(
            detect_localhost_url("ready on 0.0.0.0:3000"),
            Some("http://localhost:3000".to_string())
        );
    }

    #[test]
    fn install_marker_controls_install_skip() {
        let repo = TestRepo::new("install-marker");
        assert!(should_run_install(
            &repo.storage,
            &repo.root,
            &repo.root,
            false
        ));
        mark_install_success(&repo.storage, &repo.root).expect("mark install");
        fs::create_dir_all(repo.root.join("node_modules")).expect("create node_modules");
        assert!(!should_run_install(
            &repo.storage,
            &repo.root,
            &repo.root,
            false
        ));
        assert!(should_run_install(
            &repo.storage,
            &repo.root,
            &repo.root,
            true
        ));
    }

    #[test]
    fn javascript_worktree_needs_first_install() {
        let repo = TestRepo::new("worktree-first-install");
        assert!(preview_path_needs_install(&repo.root, false));
        fs::create_dir_all(repo.root.join("node_modules")).expect("create node_modules");
        assert!(!preview_path_needs_install(&repo.root, false));
    }
}
