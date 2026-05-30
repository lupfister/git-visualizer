mod window;

use serde::Serialize;
use std::collections::hash_map::DefaultHasher;
use std::collections::HashMap;
use std::fs::{File, OpenOptions};
use std::hash::{Hash, Hasher};
use std::io::Write;
use std::path::{Path, PathBuf};
use std::process::{Child, Command, Stdio};
use std::sync::{Mutex, OnceLock};

#[derive(Debug, Clone, Copy, Serialize)]
#[serde(rename_all = "snake_case")]
pub enum PreviewStartStatus {
    Started,
    AlreadyRunning,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct PreviewStartResult {
    pub short_sha: String,
    pub canonical_url: String,
    pub status: PreviewStartStatus,
    pub preview_url: Option<String>,
    pub gateway_url: String,
    pub log_path: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct PreviewInfo {
    pub full_sha: String,
    pub short_sha: String,
    pub canonical_url: String,
    pub preview_url: Option<String>,
    pub gateway_url: String,
    pub log_path: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct PreviewEligibility {
    pub eligible: bool,
    pub reason: Option<String>,
}

struct ProjectPreviewWorkspace {
    worktree_dir: PathBuf,
    last_lock_fingerprint: Option<String>,
    last_commit_sha: Option<String>,
}

struct PreviewSession {
    repo_path: String,
    full_sha: String,
    short_sha: String,
    worktree_dir: PathBuf,
    log_path: PathBuf,
    child: Child,
    preview_url: Option<String>,
    browser_opened: bool,
}

static WORKSPACES: OnceLock<Mutex<HashMap<String, ProjectPreviewWorkspace>>> = OnceLock::new();
static SESSIONS: OnceLock<Mutex<HashMap<String, PreviewSession>>> = OnceLock::new();

fn workspaces() -> &'static Mutex<HashMap<String, ProjectPreviewWorkspace>> {
    WORKSPACES.get_or_init(|| Mutex::new(HashMap::new()))
}

fn sessions() -> &'static Mutex<HashMap<String, PreviewSession>> {
    SESSIONS.get_or_init(|| Mutex::new(HashMap::new()))
}

fn repo_key(repo_path: &str) -> String {
    normalize_repo_path(repo_path)
}

pub fn short_sha_from(full_sha: &str) -> String {
    full_sha.chars().take(7).collect::<String>().to_lowercase()
}

fn normalize_repo_path(repo_path: &str) -> String {
    if repo_path == "/" {
        "/".to_string()
    } else {
        repo_path.trim_end_matches('/').to_string()
    }
}

fn stable_repo_slug(repo_path: &str) -> String {
    let mut hasher = DefaultHasher::new();
    normalize_repo_path(repo_path).to_lowercase().hash(&mut hasher);
    format!("{:016x}", hasher.finish())
}

fn preview_worktrees_root() -> PathBuf {
    dirs::data_local_dir()
        .unwrap_or_else(std::env::temp_dir)
        .join("git-visualizer")
        .join("preview-worktrees")
}

fn preview_worktree_dir(repo_path: &str) -> PathBuf {
    preview_worktrees_root().join(stable_repo_slug(repo_path))
}

fn log_path_for_repo(repo_path: &str) -> PathBuf {
    preview_worktrees_root()
        .join(format!("{}.log", stable_repo_slug(repo_path)))
}

pub fn check_preview_eligibility(repo_path: &str, commit_sha: &str) -> PreviewEligibility {
    let repo = Path::new(repo_path);
    if tree_has_file(repo, commit_sha, "package.json") {
        return PreviewEligibility {
            eligible: true,
            reason: None,
        };
    }
    PreviewEligibility {
        eligible: false,
        reason: Some(
            "This commit has no package.json — preview needs a Node/web project.".to_string(),
        ),
    }
}

/// Create the per-project preview worktree when a project is added (or first preview).
pub fn ensure_project_preview_worktree(repo_path: &str, initial_sha: Option<&str>) -> Result<PathBuf, String> {
    let repo = Path::new(repo_path);
    let key = repo_key(repo_path);
    let wt_dir = preview_worktree_dir(repo_path);

    if let Ok(mut guard) = workspaces().lock() {
        if let Some(ws) = guard.get(&key) {
            if ws.worktree_dir.exists() {
                return Ok(ws.worktree_dir.clone());
            }
        }
    }

    if let Some(parent) = preview_worktrees_root().parent() {
        let _ = std::fs::create_dir_all(parent);
    }
    let _ = std::fs::create_dir_all(preview_worktrees_root());

    if wt_dir.exists() {
        remove_worktree_registration(repo, &wt_dir);
    }

    let start_ref = match initial_sha {
        Some(sha) if !sha.is_empty() => sha.to_string(),
        _ => git_rev_parse(repo, "HEAD")?,
    };

    let output = Command::new("git")
        .args([
            "-C",
            repo.to_str().unwrap_or("."),
            "worktree",
            "add",
            "--detach",
            wt_dir.to_str().unwrap_or("."),
            &start_ref,
        ])
        .output()
        .map_err(|e| format!("git worktree add failed to start: {e}"))?;

    if !output.status.success() {
        return Err(format!(
            "git worktree add failed: {}",
            String::from_utf8_lossy(&output.stderr).trim()
        ));
    }

    let lock_fp = lockfile_fingerprint(&wt_dir);
    let mut guard = workspaces().lock().map_err(|e| e.to_string())?;
    guard.insert(
        key,
        ProjectPreviewWorkspace {
            worktree_dir: wt_dir.clone(),
            last_lock_fingerprint: lock_fp,
            last_commit_sha: Some(start_ref),
        },
    );

    Ok(wt_dir)
}

pub fn remove_project_preview_worktree(repo_path: &str) -> Result<(), String> {
    let key = repo_key(repo_path);
    let repo = Path::new(repo_path);

    if let Ok(mut guard) = sessions().lock() {
        if let Some(mut session) = guard.remove(&key) {
            kill_dev_server(&mut session.child);
        }
    }

    let wt_dir = preview_worktree_dir(repo_path);
    remove_worktree_registration(repo, &wt_dir);

    if let Ok(mut guard) = workspaces().lock() {
        guard.remove(&key);
    }

    let _ = std::fs::remove_file(log_path_for_repo(repo_path));
    Ok(())
}

pub fn start_commit_preview(
    repo_path: String,
    commit_sha: String,
) -> Result<PreviewStartResult, String> {
    let repo = Path::new(&repo_path);
    let key = repo_key(&repo_path);
    let short_sha = short_sha_from(&commit_sha);

    let eligibility = check_preview_eligibility(&repo_path, &commit_sha);
    if !eligibility.eligible {
        return Err(eligibility.reason.unwrap_or_else(|| "Not previewable".to_string()));
    }

    let wt_dir = ensure_project_preview_worktree(&repo_path, None)?;

    {
        let mut guard = sessions().lock().map_err(|e| e.to_string())?;
        if let Some(session) = guard.get_mut(&key) {
            if session.full_sha == commit_sha && session_alive(session) {
                return Ok(PreviewStartResult {
                    short_sha: session.short_sha.clone(),
                    canonical_url: format!("localhost:{}", session.short_sha),
                    status: PreviewStartStatus::AlreadyRunning,
                    preview_url: session.preview_url.clone(),
                    gateway_url: String::new(),
                    log_path: session.log_path.display().to_string(),
                });
            }
            if session_alive(session) {
                kill_dev_server(&mut session.child);
            }
            guard.remove(&key);
        }
    }

    checkout_commit_in_worktree(&wt_dir, &commit_sha)?;

    let new_lock_fp = lockfile_fingerprint(&wt_dir);
    let run_install = {
        let mut guard = workspaces().lock().map_err(|e| e.to_string())?;
        let ws = guard
            .get_mut(&key)
            .ok_or_else(|| "Preview workspace not registered".to_string())?;
        let install = ws.last_lock_fingerprint.as_ref() != new_lock_fp.as_ref();
        ws.last_lock_fingerprint = new_lock_fp.clone();
        ws.last_commit_sha = Some(commit_sha.clone());
        install
    };

    let pm = detect_package_manager(&wt_dir);
    let dev_cmd = detect_dev_command(&wt_dir, pm)?;
    let script = build_shell_script(&wt_dir, pm, &dev_cmd, run_install);
    let log_path = log_path_for_repo(&repo_path);

    write_log_banner(
        &log_path,
        &format!(
            "# Commit preview — {short_sha}\n# Worktree: {}\n# Install: {run_install}\n# Command: {dev_cmd}\n\n",
            wt_dir.display()
        ),
    )?;

    let stdout = open_log_stdio(&log_path)?;
    let stderr = stdout
        .try_clone()
        .map_err(|e| format!("Failed to clone log handle: {e}"))?;

    let child = Command::new("sh")
        .arg("-c")
        .arg(&script)
        .current_dir(&wt_dir)
        .stdout(stdout)
        .stderr(stderr)
        .stdin(Stdio::null())
        .spawn()
        .map_err(|e| format!("Failed to start preview shell: {e}"))?;

    let session = PreviewSession {
        repo_path: repo_path.clone(),
        full_sha: commit_sha.clone(),
        short_sha: short_sha.clone(),
        worktree_dir: wt_dir,
        log_path: log_path.clone(),
        child,
        preview_url: None,
        browser_opened: false,
    };

    sessions()
        .lock()
        .map_err(|e| e.to_string())?
        .insert(key, session);

    Ok(PreviewStartResult {
        short_sha,
        canonical_url: format!("localhost:{short_sha}"),
        status: PreviewStartStatus::Started,
        preview_url: None,
        gateway_url: String::new(),
        log_path: log_path.display().to_string(),
    })
}

pub fn stop_commit_preview(repo_path: String, _commit_sha: String) -> Result<(), String> {
    let key = repo_key(&repo_path);
    let mut guard = sessions().lock().map_err(|e| e.to_string())?;
    if let Some(mut session) = guard.remove(&key) {
        kill_dev_server(&mut session.child);
    }
    Ok(())
}

pub fn list_commit_previews(repo_path: String) -> Vec<PreviewInfo> {
    let key = repo_key(&repo_path);
    let Ok(mut guard) = sessions().lock() else {
        return Vec::new();
    };

    let Some(session) = guard.get_mut(&key) else {
        return Vec::new();
    };

    if !session_alive(session) {
        let mut dead = guard.remove(&key).unwrap();
        kill_dev_server(&mut dead.child);
        return Vec::new();
    }

    vec![PreviewInfo {
        full_sha: session.full_sha.clone(),
        short_sha: session.short_sha.clone(),
        canonical_url: format!("localhost:{}", session.short_sha),
        preview_url: session.preview_url.clone(),
        gateway_url: String::new(),
        log_path: session.log_path.display().to_string(),
    }]
}

pub fn open_commit_preview(repo_path: String, _commit_sha: String) -> Result<(), String> {
    let key = repo_key(&repo_path);
    let mut guard = sessions().lock().map_err(|e| e.to_string())?;
    let session = guard
        .get_mut(&key)
        .ok_or_else(|| "No active preview for this project".to_string())?;

    refresh_preview_url(session);
    let url = session.preview_url.clone().ok_or_else(|| {
        "No dev server URL yet — wait for the terminal output (look for http://127.0.0.1:…)"
            .to_string()
    })?;
    window::open_preview_url(&url)
}

pub fn get_preview_log(repo_path: String, _commit_sha: String) -> Result<String, String> {
    let key = repo_key(&repo_path);
    let log_path = log_path_for_repo(&repo_path);

    if let Ok(mut guard) = sessions().lock() {
        if let Some(session) = guard.get_mut(&key) {
            refresh_preview_url(session);
            return read_log_tail(&session.log_path, 96 * 1024);
        }
    }

    read_log_tail(&log_path, 96 * 1024)
}

pub fn cleanup_all_previews() {
    let Ok(mut guard) = sessions().lock() else {
        return;
    };
    for (_, mut session) in guard.drain() {
        kill_dev_server(&mut session.child);
    }
}

fn session_alive(session: &mut PreviewSession) -> bool {
    matches!(session.child.try_wait(), Ok(None))
}

fn refresh_preview_url(session: &mut PreviewSession) {
    let Ok(log) = read_log_tail(&session.log_path, 64 * 1024) else {
        return;
    };
    let Some(url) = parse_dev_server_url(&log) else {
        return;
    };
    session.preview_url = Some(url.clone());
    if !session.browser_opened {
        if window::open_preview_url(&url).is_ok() {
            session.browser_opened = true;
        }
    }
}

fn kill_dev_server(child: &mut Child) {
    let pid = child.id();
    #[cfg(unix)]
    {
        let _ = Command::new("pkill")
            .args(["-TERM", "-P", &pid.to_string()])
            .status();
    }
    let _ = child.kill();
    let _ = child.wait();
}

fn checkout_commit_in_worktree(wt_dir: &Path, commit_sha: &str) -> Result<(), String> {
    let output = Command::new("git")
        .args([
            "-C",
            wt_dir.to_str().unwrap_or("."),
            "checkout",
            "--detach",
            "--force",
            commit_sha,
        ])
        .output()
        .map_err(|e| format!("git checkout failed to start: {e}"))?;

    if output.status.success() {
        return Ok(());
    }

    Err(format!(
        "git checkout {commit_sha} failed: {}",
        String::from_utf8_lossy(&output.stderr).trim()
    ))
}

fn remove_worktree_registration(repo: &Path, wt_dir: &Path) {
    if !wt_dir.exists() {
        return;
    }
    let _ = Command::new("git")
        .args([
            "-C",
            repo.to_str().unwrap_or("."),
            "worktree",
            "remove",
            "--force",
            wt_dir.to_str().unwrap_or("."),
        ])
        .status();
    let _ = std::fs::remove_dir_all(wt_dir);
}

fn git_rev_parse(repo: &Path, ref_name: &str) -> Result<String, String> {
    let output = Command::new("git")
        .args([
            "-C",
            repo.to_str().unwrap_or("."),
            "rev-parse",
            ref_name,
        ])
        .output()
        .map_err(|e| format!("git rev-parse failed: {e}"))?;
    if !output.status.success() {
        return Err(format!(
            "git rev-parse {ref_name} failed: {}",
            String::from_utf8_lossy(&output.stderr).trim()
        ));
    }
    Ok(String::from_utf8_lossy(&output.stdout).trim().to_string())
}

fn lockfile_fingerprint(wt_dir: &Path) -> Option<String> {
    let mut parts = Vec::new();
    for name in [
        "pnpm-lock.yaml",
        "package-lock.json",
        "yarn.lock",
        "bun.lockb",
        "package.json",
    ] {
        let path = wt_dir.join(name);
        if !path.is_file() {
            continue;
        }
        let Ok(data) = std::fs::read(&path) else {
            continue;
        };
        let mut hasher = DefaultHasher::new();
        data.hash(&mut hasher);
        parts.push(format!("{name}:{}", hasher.finish()));
    }
    if parts.is_empty() {
        None
    } else {
        Some(parts.join("|"))
    }
}

fn tree_has_file(repo: &Path, treeish: &str, rel: &str) -> bool {
    Command::new("git")
        .args([
            "-C",
            repo.to_str().unwrap_or("."),
            "cat-file",
            "-e",
            &format!("{treeish}:{rel}"),
        ])
        .output()
        .map(|o| o.status.success())
        .unwrap_or(false)
}

fn detect_package_manager(dir: &Path) -> &'static str {
    if dir.join("bun.lockb").exists() {
        "bun"
    } else if dir.join("pnpm-lock.yaml").exists() {
        "pnpm"
    } else if dir.join("yarn.lock").exists() {
        "yarn"
    } else {
        "npm"
    }
}

fn detect_dev_command(dir: &Path, pm: &str) -> Result<String, String> {
    if dir.join("scripts/vite-dev.mjs").is_file() {
        return Ok(format!("{pm} exec node scripts/vite-dev.mjs"));
    }

    let pkg_path = dir.join("package.json");
    let pkg_raw = std::fs::read_to_string(&pkg_path)
        .map_err(|e| format!("Failed to read package.json: {e}"))?;
    let pkg: serde_json::Value = serde_json::from_str(&pkg_raw)
        .map_err(|e| format!("Invalid package.json: {e}"))?;
    let scripts = pkg
        .get("scripts")
        .and_then(|v| v.as_object())
        .ok_or_else(|| "package.json has no scripts — cannot start a dev server".to_string())?;

    if scripts.contains_key("dev") {
        return Ok(format!("{pm} run dev"));
    }
    if dir.join("vite.config.ts").is_file() || dir.join("vite.config.js").is_file() {
        return Ok(format!("{pm} exec vite --host 127.0.0.1"));
    }
    if scripts.contains_key("start") {
        return Ok(format!("{pm} start"));
    }
    if scripts.contains_key("serve") {
        return Ok(format!("{pm} run serve"));
    }

    Err("No dev script or vite.config — cannot start preview".to_string())
}

fn build_shell_script(worktree_dir: &Path, pm: &str, dev_cmd: &str, run_install: bool) -> String {
    let dir = worktree_dir.display();
    let install_block = if run_install {
        format!(
            r#"echo "==> {pm} install"
{pm} install
"#
        )
    } else {
        "echo \"==> Skipping install (lockfile unchanged)\"\n".to_string()
    };
    format!(
        r#"set -e
cd "{dir}"
export CI=1
export BROWSER=none
export NO_OPEN=1
{install_block}echo "==> {dev_cmd}"
exec {dev_cmd}
"#
    )
}

fn write_log_banner(log_path: &Path, banner: &str) -> Result<(), String> {
    let mut file = File::create(log_path)
        .map_err(|e| format!("Failed to create log ({}): {e}", log_path.display()))?;
    file.write_all(banner.as_bytes())
        .map_err(|e| format!("Failed to write log: {e}"))?;
    Ok(())
}

fn open_log_stdio(log_path: &Path) -> Result<File, String> {
    OpenOptions::new()
        .create(true)
        .append(true)
        .open(log_path)
        .map_err(|e| format!("Failed to open log ({}): {e}", log_path.display()))
}

fn read_log_tail(path: &Path, max_bytes: usize) -> Result<String, String> {
    let data = std::fs::read(path)
        .map_err(|e| format!("Failed to read log ({}): {e}", path.display()))?;
    if data.len() <= max_bytes {
        return Ok(String::from_utf8_lossy(&data).into_owned());
    }
    Ok(String::from_utf8_lossy(&data[data.len() - max_bytes..]).into_owned())
}

fn parse_dev_server_url(log: &str) -> Option<String> {
    for line in log.lines().rev() {
        for prefix in ["http://127.0.0.1:", "http://localhost:", "https://127.0.0.1:"] {
            let Some(idx) = line.find(prefix) else {
                continue;
            };
            let rest = &line[idx..];
            let url: String = rest
                .chars()
                .take_while(|c| !c.is_whitespace() && *c != ')' && *c != '"' && *c != '\'')
                .collect();
            if parse_port_from_url(&url).is_some() {
                return Some(url);
            }
        }
    }
    None
}

pub fn parse_localhost_url(log: &str) -> Option<String> {
    parse_dev_server_url(log)
}

fn parse_port_from_url(url: &str) -> Option<u16> {
    let host_port = url
        .trim()
        .strip_prefix("http://")
        .or_else(|| url.trim().strip_prefix("https://"))?
        .split('/')
        .next()?;
    let port_str = host_port.rsplit(':').next()?;
    let port: u16 = port_str.parse().ok()?;
    if port >= 1024 {
        Some(port)
    } else {
        None
    }
}
