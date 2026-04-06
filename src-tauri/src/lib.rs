mod git;
mod github;

use tauri::{
    menu::{MenuBuilder, MenuItemBuilder},
    tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent},
    Emitter, Manager, PhysicalPosition, Position, Rect, Size, WindowEvent,
};

use git::{Branch, CheckedOutRef, DirectCommit, MergeNode};
use github::{GitHubAuthStatus, GitHubInfo, MergedPR, OpenPR};
use chrono::{DateTime, Duration, Utc};
use std::{
    collections::{HashMap, HashSet},
    fs::{self, File},
    io::{BufRead, BufReader, Write},
    path::{Path, PathBuf},
    sync::{
        atomic::{AtomicU64, Ordering},
        Mutex, OnceLock,
    },
    time::{Duration as StdDuration, Instant},
};

#[cfg(target_os = "macos")]
use core_graphics::{
    event::{CGEvent, CGEventTapLocation},
    event_source::{CGEventSource, CGEventSourceStateID},
};
#[cfg(target_os = "macos")]
use objc2::MainThreadMarker;
#[cfg(target_os = "macos")]
use objc2_app_kit::{NSApplication, NSWindow, NSWorkspace};
#[cfg(target_os = "macos")]
use tauri_plugin_global_shortcut::{Code, GlobalShortcutExt, Modifiers, Shortcut, ShortcutState};

#[derive(serde::Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RepoInfo {
    name: String,
    path: String,
}

// =============================================================================
// Directory Browsing
// =============================================================================

#[derive(serde::Serialize)]
#[serde(rename_all = "camelCase")]
pub struct DirEntry {
    name: String,
    path: String,
    is_dir: bool,
    is_repo: bool,
}

/// List visible sub-directories of a directory.
/// Returns sorted directories only (files are intentionally omitted).
/// Also indicates if each directory is a git repository.
#[tauri::command(rename_all = "camelCase")]
fn list_directory(path: String) -> Result<Vec<DirEntry>, String> {
    let dir = Path::new(&path);

    if !dir.exists() {
        return Err(format!("Directory does not exist: {path}"));
    }

    if !dir.is_dir() {
        return Err(format!("Not a directory: {path}"));
    }

    const MAX_DIRECTORY_ENTRIES: usize = 2000;
    let mut dirs = Vec::new();

    let entries = std::fs::read_dir(dir).map_err(|e| format!("Failed to read directory: {e}"))?;

    for entry in entries.flatten() {
        let name = entry.file_name().to_string_lossy().to_string();

        // Skip hidden files/directories
        if name.starts_with('.') {
            continue;
        }

        let file_type = match entry.file_type() {
            Ok(file_type) => file_type,
            Err(_) => continue,
        };
        if !file_type.is_dir() || file_type.is_symlink() {
            continue;
        }

        let entry_path = entry.path();
        let is_repo = entry_path.join(".git").is_dir();

        let item = DirEntry {
            name,
            path: entry_path.to_string_lossy().to_string(),
            is_dir: true,
            is_repo,
        };

        dirs.push(item);
        if dirs.len() >= MAX_DIRECTORY_ENTRIES {
            break;
        }
    }

    // Sort alphabetically (case-insensitive)
    dirs.sort_by_key(|entry| entry.name.to_ascii_lowercase());
    Ok(dirs)
}

/// Folders to skip during search - system folders unlikely to contain projects.
const SKIP_FOLDERS: &[&str] = &[
    // macOS system
    "Library",
    "Applications",
    "System",
    "Volumes",
    "cores",
    "private",
    // Common non-project folders
    "node_modules",
    "target",
    "build",
    "dist",
    "vendor",
    ".git",
    "__pycache__",
    "venv",
    ".venv",
    "env",
    ".cargo",
    ".rustup",
    ".npm",
    ".cache",
    "Caches",
    // Media/documents unlikely to have repos
    "Movies",
    "Music",
    "Pictures",
    "Photos Library.photoslibrary",
];

/// Common development folder names - search these when at home directory.
const DEV_FOLDERS: &[&str] = &[
    "dev",
    "projects",
    "code",
    "repos",
    "src",
    "workspace",
    "work",
    "github",
    "gitlab",
    "Development",
    "Documents",
    "Desktop",
];

/// Search for git repositories matching a query.
/// Only returns directories containing a .git folder.
/// When at home directory, only searches inside common dev folders.
/// Returns up to `limit` matches sorted by relevance.
#[tauri::command(rename_all = "camelCase")]
fn search_directories(
    path: String,
    query: String,
    max_depth: Option<u32>,
    limit: Option<usize>,
) -> Result<Vec<DirEntry>, String> {
    let dir = Path::new(&path);
    let max_depth = max_depth.unwrap_or(6);
    let limit = limit.unwrap_or(20);
    let query_lower = query.to_lowercase();
    let mut visited_dirs = 0usize;
    let max_visited_dirs = 6000usize;
    let deadline = Instant::now() + StdDuration::from_millis(180);

    if !dir.exists() || !dir.is_dir() {
        return Err(format!("Invalid directory: {path}"));
    }

    let mut results = Vec::new();
    let collect_limit = limit * 3;

    // Check if we're at the home directory
    let home_dir = dirs::home_dir();
    let is_home = home_dir.as_ref().is_some_and(|h| h == dir);

    if is_home {
        // When at home, only search inside common dev folders
        for dev_folder in DEV_FOLDERS {
            let dev_path = dir.join(dev_folder);
            if dev_path.exists() && dev_path.is_dir() {
                let should_stop = search_repos_recursive(
                    &dev_path,
                    &query_lower,
                    0,
                    max_depth,
                    &mut results,
                    collect_limit,
                    &mut visited_dirs,
                    max_visited_dirs,
                    deadline,
                );
                if should_stop {
                    break;
                }
            }
        }
    } else {
        // Normal recursive search for non-home directories
        search_repos_recursive(
            dir,
            &query_lower,
            0,
            max_depth,
            &mut results,
            collect_limit,
            &mut visited_dirs,
            max_visited_dirs,
            deadline,
        );
    }

    // Sort results by relevance:
    // 1. Exact matches first
    // 2. Then by path depth (shallower = better)
    results.sort_by(|a, b| {
        let a_exact = a.name.to_lowercase() == query_lower;
        let b_exact = b.name.to_lowercase() == query_lower;
        if a_exact != b_exact {
            return b_exact.cmp(&a_exact); // exact matches first
        }

        let a_depth = a.path.matches('/').count();
        let b_depth = b.path.matches('/').count();
        a_depth.cmp(&b_depth) // shallower first
    });
    results.truncate(limit);

    Ok(results)
}

/// Recursive helper for searching git repositories.
fn search_repos_recursive(
    dir: &Path,
    query: &str,
    depth: u32,
    max_depth: u32,
    results: &mut Vec<DirEntry>,
    limit: usize,
    visited_dirs: &mut usize,
    max_visited_dirs: usize,
    deadline: Instant,
) -> bool {
    if depth > max_depth || results.len() >= limit {
        return results.len() >= limit;
    }
    if *visited_dirs >= max_visited_dirs || Instant::now() >= deadline {
        return true;
    }
    *visited_dirs += 1;

    let entries = match std::fs::read_dir(dir) {
        Ok(e) => e,
        Err(_) => return false,
    };

    for entry in entries.flatten() {
        let name = entry.file_name().to_string_lossy().to_string();

        // Skip hidden directories
        if name.starts_with('.') {
            continue;
        }

        // Skip system/non-project folders
        if SKIP_FOLDERS.contains(&name.as_str()) {
            continue;
        }

        if *visited_dirs >= max_visited_dirs || Instant::now() >= deadline {
            return true;
        }

        let file_type = match entry.file_type() {
            Ok(file_type) => file_type,
            Err(_) => continue,
        };
        if !file_type.is_dir() || file_type.is_symlink() {
            continue;
        }
        let entry_path = entry.path();

        // Check if this is a git repository
        let is_repo = entry_path.join(".git").is_dir();

        if is_repo {
            // Only add if name matches query
            let name_lower = name.to_lowercase();
            if query.is_empty() || name_lower.starts_with(query) || name_lower.contains(query) {
                results.push(DirEntry {
                    name: name.clone(),
                    path: entry_path.to_string_lossy().to_string(),
                    is_dir: true,
                    is_repo: true,
                });

                if results.len() >= limit {
                    return true;
                }
            }
            // Don't recurse into repos (nested repos are rare)
        } else {
            // Not a repo, recurse to find repos inside
            if search_repos_recursive(
                &entry_path,
                query,
                depth + 1,
                max_depth,
                results,
                limit,
                visited_dirs,
                max_visited_dirs,
                deadline,
            ) {
                return true;
            }
        }
    }

    false
}

/// Get the user's home directory.
#[tauri::command]
fn get_home_dir() -> Result<String, String> {
    dirs::home_dir()
        .map(|p| p.to_string_lossy().to_string())
        .ok_or_else(|| "Could not determine home directory".to_string())
}

#[derive(serde::Serialize)]
#[serde(rename_all = "camelCase")]
pub struct MergeNodesResponse {
    nodes: Vec<MergeNode>,
    has_more: bool,
}

#[tauri::command]
fn get_branches(repo_path: String) -> Result<Vec<Branch>, String> {
    let path = Path::new(&repo_path);
    let default = git::get_default_branch(path).unwrap_or_else(|_| "main".to_string());
    git::list_branches(path, &default).map_err(|e| e.to_string())
}

#[tauri::command]
fn get_merge_nodes(
    repo_path: String,
    branch: String,
    page: u32,
    per_page: u32,
) -> Result<MergeNodesResponse, String> {
    let path = Path::new(&repo_path);
    let (nodes, has_more) =
        git::get_merge_commits(path, &branch, page, per_page).map_err(|e| e.to_string())?;
    Ok(MergeNodesResponse { nodes, has_more })
}

#[tauri::command]
fn get_default_branch(repo_path: String) -> Result<String, String> {
    let path = Path::new(&repo_path);
    git::get_default_branch(path).map_err(|e| e.to_string())
}

#[tauri::command]
fn get_checked_out_ref(repo_path: String) -> Result<CheckedOutRef, String> {
    let path = Path::new(&repo_path);
    git::get_checked_out_ref(path).map_err(|e| e.to_string())
}

#[tauri::command(rename_all = "camelCase")]
fn checkout_ref(repo_path: String, ref_name: String) -> Result<CheckedOutRef, String> {
    let path = Path::new(&repo_path);
    git::cli::run(path, &["checkout", "--detach", &ref_name]).map_err(|e| e.to_string())?;
    git::get_checked_out_ref(path).map_err(|e| e.to_string())
}

#[tauri::command(rename_all = "camelCase")]
fn checkout_branch(repo_path: String, branch_name: String) -> Result<CheckedOutRef, String> {
    let path = Path::new(&repo_path);
    git::cli::run(path, &["checkout", &branch_name]).map_err(|e| e.to_string())?;
    git::get_checked_out_ref(path).map_err(|e| e.to_string())
}

#[tauri::command]
fn get_repo_info(repo_path: String) -> Result<RepoInfo, String> {
    let path = Path::new(&repo_path);
    let (name, full_path) = git::get_repo_info(path).map_err(|e| e.to_string())?;
    Ok(RepoInfo {
        name,
        path: full_path,
    })
}

// =============================================================================
// GitHub Integration
// =============================================================================

#[tauri::command]
fn get_github_info(repo_path: String) -> Result<GitHubInfo, String> {
    let path = Path::new(&repo_path);
    github::get_github_info(path)
}

#[tauri::command]
fn get_github_auth_status() -> Result<GitHubAuthStatus, String> {
    Ok(github::get_github_auth_status())
}

#[tauri::command]
fn authenticate_github() -> Result<(), String> {
    github::authenticate_github()
}

#[tauri::command(rename_all = "camelCase")]
fn get_merged_prs(
    owner: String,
    repo: String,
    base_branch: String,
    limit: Option<usize>,
) -> Result<Vec<MergedPR>, String> {
    let limit = limit.unwrap_or(50);
    github::get_merged_prs(&owner, &repo, &base_branch, limit)
}

#[tauri::command(rename_all = "camelCase")]
fn get_open_prs(owner: String, repo: String) -> Result<Vec<OpenPR>, String> {
    github::get_open_prs(&owner, &repo)
}

#[tauri::command(rename_all = "camelCase")]
fn get_pr_commits(
    owner: String,
    repo: String,
    pr_numbers: Vec<i64>,
) -> Result<std::collections::HashMap<i64, Vec<String>>, String> {
    github::get_pr_commits(&owner, &repo, &pr_numbers)
}

#[tauri::command(rename_all = "camelCase")]
fn get_branch_diff(
    repo_path: String,
    branch: String,
    base_branch: String,
    merge_commit_sha: Option<String>,
) -> Result<String, String> {
    let path = Path::new(&repo_path);
    let diff = if let Some(sha) = merge_commit_sha {
        // Historical diff: show what this PR added when it was merged
        let parent = format!("{}^1", sha);
        git::cli::run(path, &["diff", &parent, &sha, "--unified=3"])
            .map_err(|e| e.to_string())?
    } else {
        // Current diff: unmerged changes ahead of base branch
        let range = format!("{}...{}", base_branch, branch);
        git::cli::run(path, &["diff", &range, "--unified=3"])
            .map_err(|e| e.to_string())?
    };
    const MAX_CHARS: usize = 60_000;
    if diff.len() > MAX_CHARS {
        Ok(format!("{}\n\n[diff truncated at {} chars]", &diff[..MAX_CHARS], MAX_CHARS))
    } else {
        Ok(diff)
    }
}

#[derive(serde::Serialize)]
#[serde(rename_all = "camelCase")]
pub struct CommitInfo {
    full_sha: String,
    sha: String,
    parent_sha: Option<String>,
    message: String,
    author: String,
    date: String,
    prompt_window_start: Option<String>,
    prompt_window_end: Option<String>,
    agent_prompts: Vec<AgentPrompt>,
}

#[derive(serde::Serialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct AgentPrompt {
    id: String,
    agent: String,
    prompt: String,
    timestamp: String,
    source: String,
}

#[derive(Clone)]
struct PromptRecord {
    id: String,
    agent: String,
    prompt: String,
    timestamp: DateTime<Utc>,
    source: String,
}

#[derive(Clone)]
struct PromptCache {
    repo_path: String,
    start: DateTime<Utc>,
    end: DateTime<Utc>,
    records: Vec<PromptRecord>,
    collected_at: DateTime<Utc>,
}

static PROMPT_CACHE: OnceLock<Mutex<Option<PromptCache>>> = OnceLock::new();

fn parse_iso_to_utc(value: &str) -> Option<DateTime<Utc>> {
    DateTime::parse_from_rfc3339(value)
        .ok()
        .map(|dt| dt.with_timezone(&Utc))
}

fn normalize_path_for_compare(path: &str) -> String {
    path.trim()
        .trim_end_matches('/')
        .replace('\\', "/")
        .to_lowercase()
}

fn paths_match(repo_path: &Path, candidate: &str) -> bool {
    let repo_norm = normalize_path_for_compare(&repo_path.to_string_lossy());
    let cand_norm = normalize_path_for_compare(candidate);
    !repo_norm.is_empty() && !cand_norm.is_empty() && repo_norm == cand_norm
}

fn extract_tag_text(raw: &str, tag: &str) -> Option<String> {
    let open = format!("<{tag}>");
    let close = format!("</{tag}>");
    let start = raw.find(&open)? + open.len();
    let rest = &raw[start..];
    let end_rel = rest.find(&close).unwrap_or(rest.len());
    Some(rest[..end_rel].trim().to_string())
}

fn normalize_prompt_text(raw: &str) -> Option<String> {
    let trimmed = raw.trim();
    if trimmed.is_empty() {
        return None;
    }

    if let Some(query) = extract_tag_text(trimmed, "user_query") {
        if !query.is_empty() {
            return normalize_prompt_text(&query);
        }
    }

    if trimmed.starts_with("# AGENTS.md instructions for ")
        || trimmed.starts_with("<environment_context>")
        || trimmed.starts_with("<INSTRUCTIONS>")
    {
        return None;
    }

    if trimmed.starts_with("<attached_files>") {
        return None;
    }

    let normalized = trimmed.replace("\r\n", "\n").replace('\r', "\n");
    let collapsed = normalized.trim();
    if collapsed.is_empty() {
        return None;
    }

    if collapsed.starts_with("@/") && collapsed.contains("/terminals/") {
        return Some("Shared terminal selection".to_string());
    }

    const MAX_PROMPT_CHARS: usize = 4000;
    if collapsed.len() > MAX_PROMPT_CHARS {
        let mut truncated = collapsed[..MAX_PROMPT_CHARS].to_string();
        truncated.push_str("…");
        return Some(truncated);
    }

    Some(collapsed.to_string())
}

fn extract_text_chunks(content: &serde_json::Value) -> Vec<String> {
    let mut chunks = Vec::new();

    if let Some(arr) = content.as_array() {
        for item in arr {
            if let Some(text) = item.get("text").and_then(|v| v.as_str()) {
                chunks.push(text.to_string());
            }
            if let Some(inner) = item.get("content") {
                chunks.extend(extract_text_chunks(inner));
            }
        }
        return chunks;
    }

    if let Some(text) = content.as_str() {
        chunks.push(text.to_string());
    }

    chunks
}

fn insert_prompt(
    out: &mut Vec<PromptRecord>,
    seen: &mut HashSet<String>,
    agent: &str,
    source: &str,
    timestamp: DateTime<Utc>,
    prompt: String,
) {
    let dedupe_key = format!("{agent}|{}|{prompt}", timestamp.to_rfc3339());
    if !seen.insert(dedupe_key) {
        return;
    }

    let id = format!(
        "{}-{}-{}",
        agent.to_lowercase().replace(' ', "-"),
        timestamp.timestamp_millis(),
        out.len() + 1
    );

    out.push(PromptRecord {
        id,
        agent: agent.to_string(),
        prompt,
        timestamp,
        source: source.to_string(),
    });
}

fn parse_generic_timestamp(value: &serde_json::Value) -> Option<DateTime<Utc>> {
    for key in ["timestamp", "time", "createdAt", "created_at", "updatedAt", "updated_at"] {
        if let Some(ts) = value.get(key).and_then(|v| v.as_str()) {
            if let Some(parsed) = parse_iso_to_utc(ts) {
                return Some(parsed);
            }
        }
    }
    None
}

fn collect_jsonl_files(root: &Path, out: &mut Vec<PathBuf>) {
    if !root.exists() {
        return;
    }

    let mut stack = vec![root.to_path_buf()];
    while let Some(dir) = stack.pop() {
        let Ok(entries) = fs::read_dir(&dir) else { continue };
        for entry in entries.flatten() {
            let path = entry.path();
            if path.is_dir() {
                stack.push(path);
            } else if path.extension().is_some_and(|ext| ext == "jsonl") {
                out.push(path);
            }
        }
    }
}

fn collect_codex_prompts(
    repo_path: &Path,
    start: DateTime<Utc>,
    end: DateTime<Utc>,
    out: &mut Vec<PromptRecord>,
    seen: &mut HashSet<String>,
) {
    let Some(home) = dirs::home_dir() else { return };
    let roots = [home.join(".codex/sessions"), home.join(".codex/archived_sessions")];

    let mut files = Vec::new();
    for root in roots {
        collect_jsonl_files(&root, &mut files);
    }

    for path in files {
        let Ok(file) = File::open(&path) else { continue };
        let reader = BufReader::new(file);
        let mut matches_repo = false;
        let source = path
            .file_name()
            .and_then(|n| n.to_str())
            .unwrap_or("codex-session")
            .to_string();

        for line in reader.lines().map_while(Result::ok) {
            let Ok(value) = serde_json::from_str::<serde_json::Value>(&line) else { continue };
            let event_type = value.get("type").and_then(|v| v.as_str()).unwrap_or_default();

            if event_type == "session_meta" {
                let cwd = value
                    .pointer("/payload/cwd")
                    .and_then(|v| v.as_str())
                    .unwrap_or_default();
                matches_repo = paths_match(repo_path, cwd);
                continue;
            }

            if !matches_repo {
                continue;
            }

            if event_type == "response_item"
                && value.pointer("/payload/type").and_then(|v| v.as_str()) == Some("message")
                && value.pointer("/payload/role").and_then(|v| v.as_str()) == Some("user")
            {
                let timestamp = value
                    .get("timestamp")
                    .and_then(|v| v.as_str())
                    .and_then(parse_iso_to_utc);
                let Some(ts) = timestamp else { continue };
                if ts < start || ts > end {
                    continue;
                }

                let content = value.pointer("/payload/content").unwrap_or(&serde_json::Value::Null);
                for chunk in extract_text_chunks(content) {
                    if let Some(prompt) = normalize_prompt_text(&chunk) {
                        insert_prompt(out, seen, "Codex", &source, ts, prompt);
                    }
                }
            }
        }
    }
}

fn collect_claude_prompts(
    repo_path: &Path,
    start: DateTime<Utc>,
    end: DateTime<Utc>,
    out: &mut Vec<PromptRecord>,
    seen: &mut HashSet<String>,
) {
    let Some(home) = dirs::home_dir() else { return };
    let projects_root = home.join(".claude/projects");
    let Ok(project_dirs) = fs::read_dir(projects_root) else { return };

    for dir_entry in project_dirs.flatten() {
        let project_dir = dir_entry.path();
        if !project_dir.is_dir() {
            continue;
        }

        let index_path = project_dir.join("sessions-index.json");
        if !index_path.exists() {
            continue;
        }

        let Ok(index_raw) = fs::read_to_string(&index_path) else { continue };
        let Ok(index_json) = serde_json::from_str::<serde_json::Value>(&index_raw) else { continue };
        let Some(entries) = index_json.get("entries").and_then(|v| v.as_array()) else { continue };

        for entry in entries {
            let project_path = entry
                .get("projectPath")
                .and_then(|v| v.as_str())
                .unwrap_or_default();
            if !paths_match(repo_path, project_path) {
                continue;
            }

            let Some(full_path) = entry.get("fullPath").and_then(|v| v.as_str()) else { continue };
            let session_path = Path::new(full_path);
            let Ok(file) = File::open(session_path) else { continue };
            let reader = BufReader::new(file);
            let source = session_path
                .file_name()
                .and_then(|n| n.to_str())
                .unwrap_or("claude-session")
                .to_string();

            for line in reader.lines().map_while(Result::ok) {
                let Ok(value) = serde_json::from_str::<serde_json::Value>(&line) else { continue };
                let is_user = value.get("type").and_then(|v| v.as_str()) == Some("user")
                    && value.pointer("/message/role").and_then(|v| v.as_str()) == Some("user");
                if !is_user {
                    continue;
                }

                let cwd = value.get("cwd").and_then(|v| v.as_str()).unwrap_or_default();
                if !cwd.is_empty() && !paths_match(repo_path, cwd) {
                    continue;
                }

                let timestamp = value
                    .get("timestamp")
                    .and_then(|v| v.as_str())
                    .and_then(parse_iso_to_utc);
                let Some(ts) = timestamp else { continue };
                if ts < start || ts > end {
                    continue;
                }

                let content = value.pointer("/message/content").unwrap_or(&serde_json::Value::Null);
                for chunk in extract_text_chunks(content) {
                    if let Some(prompt) = normalize_prompt_text(&chunk) {
                        insert_prompt(out, seen, "Claude Code", &source, ts, prompt);
                    }
                }
            }
        }
    }
}

fn cursor_project_dir_name(path: &Path) -> String {
    path.to_string_lossy()
        .trim_start_matches('/')
        .replace('/', "-")
}

fn collect_cursor_prompts(
    repo_path: &Path,
    start: DateTime<Utc>,
    end: DateTime<Utc>,
    out: &mut Vec<PromptRecord>,
    seen: &mut HashSet<String>,
) {
    let Some(home) = dirs::home_dir() else { return };
    let projects_root = home.join(".cursor/projects");
    let Ok(project_dirs) = fs::read_dir(&projects_root) else { return };

    let canonical_repo = fs::canonicalize(repo_path).unwrap_or_else(|_| repo_path.to_path_buf());
    let mut candidates = HashSet::new();
    candidates.insert(cursor_project_dir_name(repo_path));
    candidates.insert(cursor_project_dir_name(&canonical_repo));
    let repo_leaf = repo_path
        .file_name()
        .and_then(|n| n.to_str())
        .unwrap_or_default()
        .to_lowercase();

    for dir_entry in project_dirs.flatten() {
        let project_dir = dir_entry.path();
        if !project_dir.is_dir() {
            continue;
        }
        let Some(project_name) = project_dir.file_name().and_then(|n| n.to_str()) else { continue };
        let project_name_lc = project_name.to_lowercase();
        let maybe_matches_leaf = !repo_leaf.is_empty() && project_name_lc.contains(&repo_leaf);
        if !candidates.contains(project_name) && !maybe_matches_leaf {
            continue;
        }

        let transcript_root = project_dir.join("agent-transcripts");
        let mut files = Vec::new();
        collect_jsonl_files(&transcript_root, &mut files);

        for path in files {
            let file_meta = fs::metadata(&path).ok();
            let modified = file_meta
                .and_then(|m| m.modified().ok())
                .map(DateTime::<Utc>::from)
                .unwrap_or(end);

            // Cursor transcript lines currently do not include message timestamps.
            // We anchor prompts to file mtime and spread entries backward.
            let Ok(file) = File::open(&path) else { continue };
            let reader = BufReader::new(file);
            let source = path
                .file_name()
                .and_then(|n| n.to_str())
                .unwrap_or("cursor-session")
                .to_string();

            let mut prompts = Vec::new();
            for line in reader.lines().map_while(Result::ok) {
                let Ok(value) = serde_json::from_str::<serde_json::Value>(&line) else { continue };
                if value.get("role").and_then(|v| v.as_str()) != Some("user") {
                    continue;
                }
                let content = value.pointer("/message/content").unwrap_or(&serde_json::Value::Null);
                for chunk in extract_text_chunks(content) {
                    if let Some(prompt) = normalize_prompt_text(&chunk) {
                        prompts.push(prompt);
                    }
                }
            }

            let total = prompts.len();
            if total == 0 {
                continue;
            }

            for (idx, prompt) in prompts.into_iter().enumerate() {
                let offset = (total.saturating_sub(idx + 1) as i64) * 30;
                let ts = modified - Duration::seconds(offset);
                if ts < start || ts > end {
                    continue;
                }
                insert_prompt(out, seen, "Cursor", &source, ts, prompt);
            }
        }
    }
}

fn collect_generic_jsonl_prompts(
    repo_path: &Path,
    start: DateTime<Utc>,
    end: DateTime<Utc>,
    out: &mut Vec<PromptRecord>,
    seen: &mut HashSet<String>,
) {
    let mut roots = vec![
        repo_path.join("agent-transcripts"),
        repo_path.join(".agent-transcripts"),
        repo_path.join(".ai-transcripts"),
    ];

    if let Ok(extra) = std::env::var("AGENT_TRANSCRIPT_PATHS") {
        for segment in extra.split(':') {
            if !segment.trim().is_empty() {
                roots.push(PathBuf::from(segment.trim()));
            }
        }
    }

    for root in roots {
        let mut files = Vec::new();
        collect_jsonl_files(&root, &mut files);
        for path in files {
            let Ok(file) = File::open(&path) else { continue };
            let reader = BufReader::new(file);
            let source = path
                .file_name()
                .and_then(|n| n.to_str())
                .unwrap_or("transcript")
                .to_string();

            for line in reader.lines().map_while(Result::ok) {
                let Ok(value) = serde_json::from_str::<serde_json::Value>(&line) else { continue };

                let role = value.get("role").and_then(|v| v.as_str())
                    .or_else(|| value.pointer("/message/role").and_then(|v| v.as_str()))
                    .or_else(|| value.pointer("/payload/role").and_then(|v| v.as_str()));
                if role != Some("user") {
                    continue;
                }

                if let Some(cwd) = value.get("cwd").and_then(|v| v.as_str()) {
                    if !cwd.is_empty() && !paths_match(repo_path, cwd) {
                        continue;
                    }
                }

                let timestamp = parse_generic_timestamp(&value).or_else(|| {
                    fs::metadata(&path)
                        .ok()
                        .and_then(|m| m.modified().ok())
                        .map(DateTime::<Utc>::from)
                });
                let Some(ts) = timestamp else { continue };
                if ts < start || ts > end {
                    continue;
                }

                let content = value
                    .pointer("/message/content")
                    .or_else(|| value.pointer("/payload/content"))
                    .or_else(|| value.get("content"))
                    .unwrap_or(&serde_json::Value::Null);

                for chunk in extract_text_chunks(content) {
                    if let Some(prompt) = normalize_prompt_text(&chunk) {
                        insert_prompt(out, seen, "Agent", &source, ts, prompt);
                    }
                }
            }
        }
    }
}

fn collect_agent_prompts_for_repo(
    repo_path: &Path,
    start: DateTime<Utc>,
    end: DateTime<Utc>,
) -> Vec<PromptRecord> {
    let repo_key = normalize_path_for_compare(&repo_path.to_string_lossy());
    let cache_cell = PROMPT_CACHE.get_or_init(|| Mutex::new(None));

    if let Ok(cache_guard) = cache_cell.lock() {
        if let Some(cache) = cache_guard.as_ref() {
            let cache_is_fresh = Utc::now() - cache.collected_at <= Duration::minutes(3);
            let range_inside_cache = start >= cache.start && end <= cache.end;
            if cache.repo_path == repo_key && cache_is_fresh && range_inside_cache {
                return cache
                    .records
                    .iter()
                    .filter(|record| record.timestamp >= start && record.timestamp <= end)
                    .cloned()
                    .collect();
            }
        }
    }

    let mut records = Vec::new();
    let mut seen = HashSet::new();

    collect_codex_prompts(repo_path, start, end, &mut records, &mut seen);
    collect_claude_prompts(repo_path, start, end, &mut records, &mut seen);
    collect_cursor_prompts(repo_path, start, end, &mut records, &mut seen);
    collect_generic_jsonl_prompts(repo_path, start, end, &mut records, &mut seen);

    records.sort_by(|a, b| a.timestamp.cmp(&b.timestamp));

    if let Ok(mut cache_guard) = cache_cell.lock() {
        *cache_guard = Some(PromptCache {
            repo_path: repo_key,
            start,
            end,
            records: records.clone(),
            collected_at: Utc::now(),
        });
    }

    records
}

fn hydrate_commit_prompt_windows(path: &Path, commits: &mut [CommitInfo]) {
    if commits.is_empty() {
        return;
    }

    let mut parent_dates: HashMap<String, DateTime<Utc>> = HashMap::new();
    for commit in commits.iter() {
        let Some(parent_sha) = &commit.parent_sha else { continue };
        if parent_dates.contains_key(parent_sha) {
            continue;
        }
        let Ok(parent_date_raw) = git::cli::run(path, &["log", "-1", "--format=%cI", parent_sha]) else {
            continue;
        };
        let parsed = parse_iso_to_utc(parent_date_raw.trim());
        if let Some(parent_date) = parsed {
            parent_dates.insert(parent_sha.clone(), parent_date);
        }
    }

    let mut windows: Vec<(Option<DateTime<Utc>>, Option<DateTime<Utc>>)> = Vec::with_capacity(commits.len());
    let mut global_start: Option<DateTime<Utc>> = None;
    let mut global_end: Option<DateTime<Utc>> = None;

    for commit in commits.iter() {
        let end_dt = parse_iso_to_utc(&commit.date);
        let start_dt = commit
            .parent_sha
            .as_ref()
            .and_then(|sha| parent_dates.get(sha).copied());

        if let Some(end_ts) = end_dt {
            let bounded_start = start_dt.unwrap_or(end_ts - Duration::hours(12));
            global_start = Some(global_start.map_or(bounded_start, |cur| cur.min(bounded_start)));
            global_end = Some(global_end.map_or(end_ts, |cur| cur.max(end_ts)));
        }

        windows.push((start_dt, end_dt));
    }

    let prompts = if let (Some(start), Some(end)) = (global_start, global_end) {
        collect_agent_prompts_for_repo(path, start, end)
    } else {
        Vec::new()
    };

    for (idx, commit) in commits.iter_mut().enumerate() {
        let (start_dt, end_dt) = windows[idx];
        commit.prompt_window_start = start_dt.map(|dt| dt.to_rfc3339());
        commit.prompt_window_end = end_dt.map(|dt| dt.to_rfc3339());

        let Some(end_ts) = end_dt else { continue };

        let mut matched: Vec<AgentPrompt> = prompts
            .iter()
            .filter(|record| {
                let in_upper = record.timestamp <= end_ts;
                let in_lower = start_dt.map_or(true, |start_ts| record.timestamp > start_ts);
                in_upper && in_lower
            })
            .map(|record| AgentPrompt {
                id: record.id.clone(),
                agent: record.agent.clone(),
                prompt: record.prompt.clone(),
                timestamp: record.timestamp.to_rfc3339(),
                source: record.source.clone(),
            })
            .collect();

        const MAX_PROMPTS_PER_COMMIT: usize = 40;
        if matched.len() > MAX_PROMPTS_PER_COMMIT {
            let to_drop = matched.len() - MAX_PROMPTS_PER_COMMIT;
            matched.drain(0..to_drop);
        }
        commit.agent_prompts = matched;
    }
}

#[tauri::command(rename_all = "camelCase")]
fn get_branch_commits(
    repo_path: String,
    branch: String,
    base_branch: String,
    merge_commit_sha: Option<String>,
    include_prompts: Option<bool>,
) -> Result<Vec<CommitInfo>, String> {
    let path = Path::new(&repo_path);
    let range = if let Some(sha) = merge_commit_sha {
        // Commits that were part of this merged branch side (exclude merge commit itself).
        format!("{}^1..{}^2", sha, sha)
    } else {
        // Commits on this branch not yet in base
        format!("{}..{}", base_branch, branch)
    };
    let output = git::cli::run(
        path,
        &["log", &range, "--format=%H|%h|%s|%an|%cI|%P"],
    )
    .map_err(|e| e.to_string())?;

    let mut commits: Vec<CommitInfo> = output
        .lines()
        .filter(|l| !l.is_empty())
        .filter_map(|line| {
            let parts: Vec<&str> = line.splitn(6, '|').collect();
            if parts.len() < 6 { return None; }
            let parent_sha = parts[5]
                .split_whitespace()
                .next()
                .map(|p| p.to_string());
            Some(CommitInfo {
                full_sha: parts[0].to_string(),
                sha: parts[1].to_string(),
                parent_sha,
                message: parts[2].to_string(),
                author: parts[3].to_string(),
                date: parts[4].to_string(),
                prompt_window_start: None,
                prompt_window_end: None,
                agent_prompts: Vec::new(),
            })
        })
        .collect();

    if include_prompts.unwrap_or(true) {
        hydrate_commit_prompt_windows(path, &mut commits);
    }

    Ok(commits)
}

#[tauri::command(rename_all = "camelCase")]
fn get_commit_diff(
    repo_path: String,
    commit_sha: String,
    base_sha: Option<String>,
) -> Result<String, String> {
    let path = Path::new(&repo_path);
    let base = base_sha.unwrap_or_else(|| format!("{}^1", commit_sha));
    let diff = git::cli::run(path, &["diff", &base, &commit_sha, "--unified=3"])
        .map_err(|e| e.to_string())?;
    const MAX_CHARS: usize = 60_000;
    if diff.len() > MAX_CHARS {
        Ok(format!("{}\n\n[diff truncated at {} chars]", &diff[..MAX_CHARS], MAX_CHARS))
    } else {
        Ok(diff)
    }
}

#[tauri::command(rename_all = "camelCase")]
fn get_direct_commits(
    repo_path: String,
    branch: String,
    limit: Option<u32>,
) -> Result<Vec<DirectCommit>, String> {
    let path = Path::new(&repo_path);
    git::get_direct_commits(path, &branch, limit).map_err(|e| e.to_string())
}

/// Recent commits on a branch (no base filtering — just git log -N <branch>).
#[tauri::command(rename_all = "camelCase")]
fn get_recent_log(
    repo_path: String,
    branch: String,
    limit: Option<u32>,
    first_parent: Option<bool>,
    include_prompts: Option<bool>,
) -> Result<Vec<CommitInfo>, String> {
    let path = Path::new(&repo_path);
    let limit_str = limit.unwrap_or(20).to_string();
    let mut args: Vec<String> = vec!["log".to_string()];
    if first_parent.unwrap_or(true) {
        args.push("--first-parent".to_string());
    }
    args.push(branch);
    args.push(format!("--max-count={}", limit_str));
    args.push("--format=%H|%h|%s|%an|%cI|%P".to_string());
    let arg_refs: Vec<&str> = args.iter().map(|s| s.as_str()).collect();
    let output = git::cli::run(path, &arg_refs).map_err(|e| e.to_string())?;
    let mut commits: Vec<CommitInfo> = output
        .lines()
        .filter(|l| !l.is_empty())
        .filter_map(|line| {
            let parts: Vec<&str> = line.splitn(6, '|').collect();
            if parts.len() < 6 { return None; }
            let parent_sha = parts[5]
                .split_whitespace()
                .next()
                .map(|p| p.to_string());
            Some(CommitInfo {
                full_sha: parts[0].to_string(),
                sha: parts[1].to_string(),
                parent_sha,
                message: parts[2].to_string(),
                author: parts[3].to_string(),
                date: parts[4].to_string(),
                prompt_window_start: None,
                prompt_window_end: None,
                agent_prompts: Vec::new(),
            })
        })
        .collect();
    if include_prompts.unwrap_or(true) {
        hydrate_commit_prompt_windows(path, &mut commits);
    }
    Ok(commits)
}

// =============================================================================
// App Preview Screenshots
// =============================================================================

/// Extract the first `http://localhost:PORT` URL from a server startup log.
/// Works for Vite ("Local: http://localhost:5175/") and
/// Next.js ("- Local: http://localhost:3000").
fn parse_localhost_url(log: &str) -> Option<String> {
    let start = log.find("localhost:")?;
    let after = &log[start + 10..]; // skip "localhost:"
    let end = after.find(|c: char| !c.is_ascii_digit()).unwrap_or(after.len());
    let port: u16 = after[..end].parse().ok()?;
    Some(format!("http://localhost:{port}"))
}

/// Normalize any naming convention to lowercase alphanumeric only, so that
/// `DesignOnboarding`, `design-onboarding`, and `design_onboarding` all compare equal.
fn normalize_name(s: &str) -> String {
    s.chars()
        .filter(|c| c.is_alphanumeric())
        .flat_map(|c| c.to_lowercase())
        .collect()
}

/// All page routes that exist in the repo at HEAD (used for fuzzy matching).
fn all_page_routes(repo_path: &Path) -> Vec<String> {
    let Ok(output) = git::cli::run(
        repo_path,
        &["ls-tree", "-r", "--name-only", "HEAD", "--",
          "app", "pages", "src/app", "src/pages", "src/routes"],
    ) else {
        return Vec::new();
    };
    let mut seen = std::collections::HashSet::new();
    output
        .lines()
        .filter(|l| !l.is_empty())
        .filter_map(file_to_route)
        .filter(|r| seen.insert(r.clone()))
        .collect()
}

/// For changed files that aren't page files themselves, fuzzy-match their
/// base name against route path segments.
///
/// Example: `components/DesignOnboarding.tsx` → normalize `designonboarding`
///          → matches route `/design-onboarding` (segment normalizes the same).
fn fuzzy_matched_routes<'a>(changed_files: &[&str], all_routes: &'a [String]) -> Vec<&'a String> {
    let mut matched: Vec<&String> = Vec::new();
    let mut seen = std::collections::HashSet::new();

    for &file in changed_files {
        if file_to_route(file).is_some() { continue; } // already handled directly

        // Build candidate names to match against route segments:
        //   (a) file stem — catches component files e.g. TarotCard.tsx → "tarotcard"
        //   (b) intermediate directory segments (skip first and last) — catches
        //       content/data/public changes e.g. content/tarot/card.md → "tarot"
        let mut names: Vec<String> = Vec::new();

        let stem = std::path::Path::new(file)
            .file_stem()
            .and_then(|s| s.to_str())
            .unwrap_or("");
        if stem.len() >= 5 {
            names.push(normalize_name(stem));
        }

        let parts: Vec<&str> = file.split('/').collect();
        // parts[0] = top-level dir (content/public/app/etc), parts[last] = filename
        // Intermediate parts are meaningful directory names that often mirror routes
        if parts.len() > 2 {
            for seg in &parts[1..parts.len() - 1] {
                if seg.len() >= 3 && !seg.starts_with('(') && !seg.starts_with('[') {
                    names.push(normalize_name(seg));
                }
            }
        }

        if names.is_empty() { continue; }

        for route in all_routes {
            if seen.contains(route.as_str()) { continue; }
            let hit = route
                .split('/')
                .filter(|s| !s.is_empty())
                .any(|seg| {
                    let norm_seg = normalize_name(seg);
                    names.iter().any(|n| {
                        norm_seg == *n
                            || (norm_seg.len() >= 8 && n.starts_with(&norm_seg))
                    })
                });
            if hit {
                seen.insert(route.as_str());
                matched.push(route);
            }
        }
    }
    matched
}

/// Debug: return raw git diff --name-only output so we can see which files changed.
#[tauri::command(rename_all = "camelCase")]
fn debug_diff_files(repo_path: String, branch: String, base_branch: String) -> String {
    let path = Path::new(&repo_path);
    let range = format!("{}...{}", base_branch, branch);
    match git::cli::run(path, &["diff", "--name-only", &range]) {
        Ok(s) => format!("OK: {:?}", s),
        Err(e) => format!("ERR: {e}"),
    }
}

/// For non-page files inside an app route directory, extract the route from
/// the first non-special path segment under `app/`.
///
/// Examples:
///   app/design-onboarding/DesignOnboardingPanel.tsx  →  /design-onboarding
///   app/design-onboarding/components/Card.tsx         →  /design-onboarding
///   app/api/users/route.ts                             →  None (api skipped)
fn app_dir_to_route(file: &str) -> Option<String> {
    if file_to_route(file).is_some() { return None; } // already a page file
    let rest = file.strip_prefix("app/")
        .or_else(|| file.strip_prefix("src/app/"))?;
    let slash_pos = rest.find('/')?; // must be inside a subdirectory
    let first_seg = &rest[..slash_pos];
    // Skip route groups, dynamic segs, parallel routes, private dirs, and api
    if first_seg.starts_with('(')
        || first_seg.starts_with('[')
        || first_seg.starts_with('@')
        || first_seg.starts_with('_')
        || first_seg == "api"
    {
        return None;
    }
    Some(format!("/{first_seg}"))
}

/// Return the URL paths most likely affected by the branch's diff.
///
/// Three-pass detection:
/// 1. Direct: changed files that ARE page files (app/**/page.tsx, pages/*.tsx).
/// 2. Directory: non-page files inside app route dirs (app/design-onboarding/X.tsx → /design-onboarding).
/// 3. Fuzzy: changed component filenames matched against all page routes in
///    the repo — e.g. `DesignOnboarding.tsx` → `/design-onboarding`.
#[tauri::command(rename_all = "camelCase")]
fn get_changed_routes(
    repo_path: String,
    branch: String,
    base_branch: String,
) -> Result<Vec<String>, String> {
    let path = Path::new(&repo_path);
    let output = git::cli::run(
        path,
        &["diff", "--name-only", &format!("{}...{}", base_branch, branch)],
    )
    .map_err(|e| e.to_string())?;

    let changed_files: Vec<&str> = output.lines().filter(|l| !l.is_empty()).collect();

    let mut seen = std::collections::HashSet::new();

    // Pass 1: direct page file matches
    let mut routes: Vec<String> = changed_files
        .iter()
        .filter_map(|f| file_to_route(f))
        .filter(|r| seen.insert(r.clone()))
        .collect();

    // Pass 2: non-page files inside app route directories → extract containing route
    for &file in &changed_files {
        if let Some(route) = app_dir_to_route(file) {
            if seen.insert(route.clone()) {
                routes.push(route);
            }
        }
    }

    // Pass 3: fuzzy-match filenames and directory segments against all repo routes.
    // This catches content/data/public changes: content/tarot/card.md → /tarot
    let all_routes = all_page_routes(path);
    for r in fuzzy_matched_routes(&changed_files, &all_routes) {
        if seen.insert(r.clone()) {
            routes.push(r.clone());
        }
    }

    // Cap at 4 routes to avoid starting excessive dev servers
    if routes.len() > 4 { routes.truncate(4); }

    // Pass 4: fallback — if nothing was detected, sample the repo's top-level
    // routes so broad changes (shared components, utils, styles) still get
    // multiple screenshots instead of just '/'.
    if routes.is_empty() {
        // Routes likely behind auth or not useful to screenshot
        let skip = ["login", "signin", "signup", "register", "auth", "logout",
                    "callback", "verify", "reset", "forgot", "404", "500",
                    "error", "not-found", "api", "onboarding"];

        // Collect top-level routes only (one non-empty path segment)
        let mut candidates: Vec<&String> = all_routes
            .iter()
            .filter(|r| {
                let segs: Vec<&str> = r.split('/').filter(|s| !s.is_empty()).collect();
                if segs.len() != 1 { return false; }
                let lower = r.to_lowercase();
                !skip.iter().any(|k| lower.contains(k))
            })
            .collect();

        // Sort so shorter names (likely more important pages) come first
        candidates.sort_by_key(|r| r.len());

        let mut fallback = vec!["/".to_string()];
        for route in candidates {
            if fallback.len() >= 4 { break; }
            fallback.push(route.clone());
        }
        return Ok(fallback);
    }

    Ok(routes)
}

/// Return the URL paths most likely affected by a specific commit.
/// Defaults to first-parent diff: `commit^1..commit`.
#[tauri::command(rename_all = "camelCase")]
fn get_changed_routes_for_commit(
    repo_path: String,
    commit_sha: String,
    base_sha: Option<String>,
) -> Result<Vec<String>, String> {
    let path = Path::new(&repo_path);
    let base = base_sha.unwrap_or_else(|| format!("{}^1", commit_sha));
    let output = git::cli::run(path, &["diff", "--name-only", &base, &commit_sha])
        .map_err(|e| e.to_string())?;

    let changed_files: Vec<&str> = output.lines().filter(|l| !l.is_empty()).collect();

    let mut seen = std::collections::HashSet::new();

    // Pass 1: direct page file matches
    let mut routes: Vec<String> = changed_files
        .iter()
        .filter_map(|f| file_to_route(f))
        .filter(|r| seen.insert(r.clone()))
        .collect();

    // Pass 2: non-page files inside app route directories → extract containing route
    for &file in &changed_files {
        if let Some(route) = app_dir_to_route(file) {
            if seen.insert(route.clone()) {
                routes.push(route);
            }
        }
    }

    // Pass 3: fuzzy-match filenames and directory segments against all repo routes.
    let all_routes = all_page_routes(path);
    for r in fuzzy_matched_routes(&changed_files, &all_routes) {
        if seen.insert(r.clone()) {
            routes.push(r.clone());
        }
    }

    if routes.len() > 4 {
        routes.truncate(4);
    }

    if routes.is_empty() {
        return Ok(vec!["/".to_string()]);
    }

    Ok(routes)
}

/// Map a changed file path to a URL route, or None if not a page file.
fn file_to_route(file: &str) -> Option<String> {
    const PAGE_EXTS: &[&str] = &["page.tsx", "page.jsx", "page.ts", "page.js"];

    // Next.js App Router: app/**/page.{tsx,jsx,ts,js}  (also src/app/**)
    let app_rest = file.strip_prefix("app/")
        .or_else(|| file.strip_prefix("src/app/"));
    if let Some(rest) = app_rest {
        for &suffix in PAGE_EXTS {
            if rest == suffix {
                return Some("/".to_string());
            }
            if let Some(route_part) = rest.strip_suffix(&format!("/{suffix}")) {
                return app_route_to_url(route_part);
            }
        }
    }

    // Next.js Pages Router: pages/**/*.{tsx,jsx,ts,js}  (also src/pages/**)
    let pages_rest = file.strip_prefix("pages/")
        .or_else(|| file.strip_prefix("src/pages/"));
    if let Some(rest) = pages_rest {
        if rest.starts_with('_') || rest.starts_with("api/") {
            return None;
        }
        for &ext in &[".tsx", ".jsx", ".ts", ".js"] {
            if let Some(route) = rest.strip_suffix(ext) {
                if route == "index" {
                    return Some("/".to_string());
                }
                let route = route.strip_suffix("/index").unwrap_or(route);
                // Skip dynamic segments
                if route.contains('[') {
                    return None;
                }
                return Some(format!("/{route}"));
            }
        }
    }

    // File-based routing under src/routes/ or app/routes/ (TanStack Router, Remix, SvelteKit, etc.)
    // e.g. src/routes/design-onboarding.tsx → /design-onboarding
    let routes_rest = file
        .strip_prefix("src/routes/")
        .or_else(|| file.strip_prefix("app/routes/"));
    if let Some(rest) = routes_rest {
        // Skip special files: __root, _layout, leading underscores, api routes
        if rest.starts_with('_') || rest.starts_with("api/") || rest.starts_with("api.") {
            return None;
        }
        const EXTS: &[&str] = &[".tsx", ".jsx", ".ts", ".js", ".svelte", ".vue"];
        for &ext in EXTS {
            if let Some(route) = rest.strip_suffix(ext) {
                let route = route.strip_suffix("/index").unwrap_or(route);
                let route = route.strip_suffix("/route").unwrap_or(route);
                let route = route.strip_suffix("/page").unwrap_or(route);
                if route == "index" || route.is_empty() {
                    return Some("/".to_string());
                }
                // Skip dynamic ($param or [param]) and layout groups
                if route.contains('$') || route.contains('[') || route.contains('(') {
                    return None;
                }
                return Some(format!("/{route}"));
            }
        }
    }

    None
}

/// Convert an App Router directory path to a URL, stripping route groups
/// `(group)` and parallel routes `@slot`, skipping dynamic segments `[id]`.
fn app_route_to_url(path: &str) -> Option<String> {
    let segments: Vec<&str> = path
        .split('/')
        .filter(|s| {
            !s.starts_with('(') // route groups
                && !s.starts_with('@') // parallel routes
                && !s.starts_with('[') // dynamic segments — skip whole route
        })
        .collect();

    // If any dynamic segment was present, the original split had more parts
    if path.split('/').any(|s| s.starts_with('[')) {
        return None;
    }

    if segments.is_empty() {
        Some("/".to_string())
    } else {
        Some(format!("/{}", segments.join("/")))
    }
}

/// Screenshot a single path (convenience wrapper around `generate_preview_routes`).
#[tauri::command(rename_all = "camelCase")]
async fn generate_preview(repo_path: String, branch: String, port: u16, path: Option<String>) -> Result<String, String> {
    let paths = vec![path.unwrap_or_else(|| "/".to_string())];
    let mut results = tauri::async_runtime::spawn_blocking(move || run_previews_blocking(repo_path, branch, port, paths))
        .await
        .map_err(|e| format!("Spawn error: {e}"))??;
    results.pop().filter(|s| !s.is_empty()).ok_or_else(|| "No screenshot generated".to_string())
}

/// Screenshot multiple paths in a single server startup — one data URL per path.
/// Empty-string entries indicate a screenshot failure for that specific route.
#[tauri::command(rename_all = "camelCase")]
async fn generate_preview_routes(repo_path: String, branch: String, port: u16, paths: Vec<String>) -> Result<Vec<String>, String> {
    tauri::async_runtime::spawn_blocking(move || run_previews_blocking(repo_path, branch, port, paths))
        .await
        .map_err(|e| format!("Spawn error: {e}"))?
}

/// Opens a visible Chrome window pointed at the branch's dev server so the user
/// can authenticate. The session is stored in `~/.git-viz-preview-auth/setup`
/// and is automatically seeded into CDP screenshot profiles on the next run.
fn run_open_browser_blocking(repo_path: String, branch: String, port: u16) -> Result<(), String> {
    use std::process::Stdio;
    use std::time::{Duration, Instant};

    let repo = Path::new(&repo_path);

    let slug: String = branch.chars()
        .map(|c| if c.is_alphanumeric() || c == '-' || c == '_' { c } else { '-' })
        .collect();
    let preview_dir = std::env::temp_dir().join(format!("git-viz-preview-{slug}-{port}"));

    let _ = std::fs::remove_dir_all(&preview_dir);
    std::fs::create_dir_all(&preview_dir)
        .map_err(|e| format!("Failed to create preview dir: {e}"))?;

    let archive_path = std::env::temp_dir().join(format!("git-viz-archive-{port}.tar"));
    let _ = std::fs::remove_file(&archive_path);

    let arch_out = std::process::Command::new("git")
        .args(["-C", &repo_path, "archive", "--format=tar", &branch])
        .output()
        .map_err(|e| format!("git archive failed to start: {e}"))?;

    if !arch_out.status.success() {
        let _ = std::fs::remove_dir_all(&preview_dir);
        return Err(format!(
            "git archive failed for branch '{}': {}",
            branch,
            String::from_utf8_lossy(&arch_out.stderr).trim()
        ));
    }

    std::fs::write(&archive_path, &arch_out.stdout)
        .map_err(|e| format!("Failed to write archive: {e}"))?;

    let tar_out = std::process::Command::new("tar")
        .args(["-xf", archive_path.to_str().unwrap_or(""), "-C", preview_dir.to_str().unwrap_or("")])
        .output()
        .map_err(|e| format!("tar failed to start: {e}"))?;

    let _ = std::fs::remove_file(&archive_path);

    if !tar_out.status.success() {
        let _ = std::fs::remove_dir_all(&preview_dir);
        return Err(format!(
            "tar extraction failed: {}",
            String::from_utf8_lossy(&tar_out.stderr).trim()
        ));
    }

    if !preview_dir.join("package.json").exists() {
        let _ = std::fs::remove_dir_all(&preview_dir);
        return Err("No package.json — not a Node.js project".to_string());
    }

    for name in &[
        ".env", ".env.local", ".env.development", ".env.development.local",
        ".env.production", ".env.production.local",
    ] {
        let src = repo.join(name);
        if src.exists() {
            let _ = std::fs::copy(&src, preview_dir.join(name));
        }
    }

    let pm = if preview_dir.join("bun.lockb").exists() { "bun" }
        else if preview_dir.join("pnpm-lock.yaml").exists() { "pnpm" }
        else if preview_dir.join("yarn.lock").exists() { "yarn" }
        else { "npm" };

    let main_modules = repo.join("node_modules");
    if main_modules.exists() {
        let _ = std::fs::remove_dir_all(main_modules.join(".vite"));
        let link = preview_dir.join("node_modules");
        if !link.exists() {
            let _ = std::os::unix::fs::symlink(&main_modules, &link);
        }
    }

    let port_str = port.to_string();
    let pm_args: Vec<&str> = match pm {
        "yarn" => vec!["dev", "--port", &port_str],
        "pnpm" => vec!["run", "dev", "--port", &port_str],
        _      => vec!["run", "dev", "--", "--port", &port_str],
    };

    let log_path = std::env::temp_dir().join(format!("git-viz-dev-{port}.log"));
    let (stdout_sink, stderr_sink) = match std::fs::File::create(&log_path) {
        Ok(f) => {
            let f2 = f.try_clone().unwrap_or_else(|_| std::fs::File::create("/dev/null").unwrap());
            (Stdio::from(f), Stdio::from(f2))
        }
        Err(_) => (Stdio::null(), Stdio::null()),
    };

    let mut server = std::process::Command::new(pm)
        .args(&pm_args)
        .env("PORT", &port_str)
        // Prevent framework dev servers from auto-opening a browser window/tab.
        .env("BROWSER", "none")
        .env("NO_OPEN", "1")
        .env("npm_config_open", "false")
        .env("npm_config_browser", "none")
        .current_dir(&preview_dir)
        .stdout(stdout_sink)
        .stderr(stderr_sink)
        .spawn()
        .map_err(|e| {
            let _ = std::fs::remove_dir_all(&preview_dir);
            format!("Failed to start dev server ({pm}): {e}")
        })?;

    let requested_url = format!("http://localhost:{port}");
    let start = Instant::now();
    let live_url: Option<String> = loop {
        if start.elapsed() > Duration::from_secs(90) { break None; }

        if let Ok(Some(_)) = server.try_wait() {
            let log = std::fs::read_to_string(&log_path).unwrap_or_default();
            let tail = log.lines().rev().take(15)
                .collect::<Vec<_>>().into_iter().rev().collect::<Vec<_>>().join("\n");
            let _ = std::fs::remove_file(&log_path);
            let _ = std::fs::remove_dir_all(&preview_dir);
            return Err(format!("Dev server crashed.\nLog:\n{tail}"));
        }

        std::thread::sleep(Duration::from_millis(500));

        if ureq::get(&requested_url).call().is_ok() {
            break Some(requested_url.clone());
        }

        let log = std::fs::read_to_string(&log_path).unwrap_or_default();
        if let Some(actual) = parse_localhost_url(&log) {
            if ureq::get(&actual).call().is_ok() {
                break Some(actual);
            }
        }
    };

    let _ = std::fs::remove_file(&log_path);

    let url = match live_url {
        Some(u) => u,
        None => {
            let _ = server.kill();
            let _ = std::fs::remove_dir_all(&preview_dir);
            return Err(format!("Dev server did not respond within 90s (tried port {port})"));
        }
    };

    let chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
    if !Path::new(chrome).exists() {
        let _ = server.kill();
        let _ = std::fs::remove_dir_all(&preview_dir);
        return Err("Google Chrome not found — install Chrome to generate previews".to_string());
    }

    let home = std::env::var("HOME").unwrap_or_else(|_| "/tmp".to_string());
    let auth_dir = format!("{home}/.git-viz-preview-auth/setup");

    let mut chrome_proc = std::process::Command::new(chrome)
        .args([
            "--no-sandbox",
            "--disable-extensions",
            "--disable-default-apps",
            "--window-size=1440,900",
            &format!("--user-data-dir={auth_dir}"),
            &url,
        ])
        .spawn()
        .map_err(|e| {
            let _ = server.kill();
            let _ = std::fs::remove_dir_all(&preview_dir);
            format!("Failed to launch Chrome: {e}")
        })?;

    // Block until the user closes Chrome
    let _ = chrome_proc.wait();

    let _ = server.kill();
    let _ = std::fs::remove_dir_all(&preview_dir);
    Ok(())
}

/// Open a visible Chrome window for the given branch so the user can log in.
/// Returns when Chrome is closed. On the next preview run, the CDP script will
/// seed its profile from `~/.git-viz-preview-auth/setup`.
#[tauri::command(rename_all = "camelCase")]
async fn open_preview_browser(repo_path: String, branch: String) -> Result<(), String> {
    tauri::async_runtime::spawn_blocking(move || run_open_browser_blocking(repo_path, branch, 3493))
        .await
        .map_err(|e| format!("Spawn error: {e}"))?
}

/// Node.js script that uses Chrome DevTools Protocol to screenshot a URL.
///
/// Unlike `chrome --screenshot` (which fires at the browser `load` event, before
/// React's useEffect data fetches), this script waits for **network idle** — no
/// in-flight requests for 2 s — before capturing.  That means the screenshot
/// shows fully-loaded data, not loading skeletons.
///
/// Uses only Node.js built-in modules so it works without npm install.
const CDP_SCREENSHOT_SCRIPT: &str = r#"
'use strict';
const http   = require('http');
const net    = require('net');
const crypto = require('crypto');
const fs     = require('fs');
const { spawn } = require('child_process');

// urlsJson is a JSON array of full URLs to screenshot in sequence.
// Screenshots are saved as outDir/0.png, outDir/1.png, …
const [,, urlsJson, chromePath, outDir, cdpPortStr] = process.argv;
const urls = JSON.parse(urlsJson);
const CDP_PORT = parseInt(cdpPortStr, 10);

const userDataDir = require('os').tmpdir() + '/git-viz-chrome-' + CDP_PORT;
const chrome = spawn(chromePath, [
  '--headless', '--no-sandbox', '--disable-gpu', '--hide-scrollbars',
  '--window-size=1440,900', '--disable-extensions', '--disable-default-apps',
  // Allow any origin to connect via CDP (required in Chrome 112+).
  '--remote-allow-origins=*',
  `--user-data-dir=${userDataDir}`,
  `--remote-debugging-port=${CDP_PORT}`,
  'about:blank',
], { stdio: 'ignore' });
chrome.on('error', err => { process.stderr.write('Chrome error: ' + err.message + '\n'); process.exit(1); });
let chromeDead = false;
let chromeExitError = null;
chrome.on('exit', (code, signal) => {
  if (!chromeDead) {
    chromeDead = true;
    chromeExitError = new Error('Chrome exited unexpectedly (code=' + code + ', signal=' + signal + ')');
    process.stderr.write(chromeExitError.message + '\n');
  }
});

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function httpGet(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(d));
    }).on('error', reject);
  });
}

async function waitForTarget(timeout) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    if (chromeDead) throw chromeExitError || new Error('Chrome exited before CDP was ready');
    try {
      const data = await httpGet(`http://localhost:${CDP_PORT}/json/list`);
      const targets = JSON.parse(data);
      const page = targets.find(t => t.type === 'page');
      if (page && page.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch(_) {}
    await sleep(200);
  }
  throw new Error('Timeout waiting for Chrome CDP on port ' + CDP_PORT);
}

function wsConnect(wsUrl) {
  return new Promise((resolve, reject) => {
    const { hostname: host, port, pathname, search } = new URL(wsUrl);
    const wsPath = pathname + (search || '');
    const key    = crypto.randomBytes(16).toString('base64');
    const socket = net.createConnection(parseInt(port, 10), host);

    const handlers = new Map();
    const listeners = [];
    let wsOpen = false;
    let httpBuf = Buffer.alloc(0);
    let frameBuf = Buffer.alloc(0);
    let nextId = 1;

    socket.on('connect', () => {
      socket.write([
        `GET ${wsPath} HTTP/1.1`, `Host: ${host}:${port}`,
        'Upgrade: websocket', 'Connection: Upgrade',
        `Sec-WebSocket-Key: ${key}`, 'Sec-WebSocket-Version: 13',
        '', '',
      ].join('\r\n'));
    });

    socket.on('data', chunk => {
      if (!wsOpen) {
        httpBuf = Buffer.concat([httpBuf, chunk]);
        const sep = httpBuf.indexOf('\r\n\r\n');
        if (sep !== -1) {
          const statusLine = httpBuf.slice(0, sep).toString().split('\r\n')[0];
          if (!statusLine.includes('101')) {
            return reject(new Error('WebSocket upgrade failed: ' + statusLine));
          }
          wsOpen = true;
          const rest = httpBuf.slice(sep + 4);
          if (rest.length) processFrames(rest);
          resolve(ws);
        }
        return;
      }
      processFrames(chunk);
    });

    function processFrames(data) {
      frameBuf = Buffer.concat([frameBuf, data]);
      while (frameBuf.length >= 2) {
        const opcode = frameBuf[0] & 0x0f;
        let len = frameBuf[1] & 0x7f, off = 2;
        if (len === 126) {
          if (frameBuf.length < 4) break;
          len = frameBuf.readUInt16BE(2); off = 4;
        } else if (len === 127) {
          if (frameBuf.length < 10) break;
          len = frameBuf.readUInt32BE(2) * 0x100000000 + frameBuf.readUInt32BE(6); off = 10;
        }
        if (frameBuf.length < off + len) break;
        const payload = frameBuf.slice(off, off + len);
        frameBuf = frameBuf.slice(off + len);
        if (opcode === 1) {
          try {
            const msg = JSON.parse(payload.toString());
            if (msg.id != null && handlers.has(msg.id)) {
              const h = handlers.get(msg.id); handlers.delete(msg.id);
              msg.error ? h.reject(new Error(JSON.stringify(msg.error))) : h.resolve(msg.result);
            } else if (msg.method) {
              listeners.forEach(fn => fn(msg));
            }
          } catch(_) {}
        } else if (opcode === 8) { socket.destroy(); }
      }
    }

    function sendFrame(text) {
      const payload = Buffer.from(text);
      const mask = crypto.randomBytes(4);
      let hdr;
      if (payload.length < 126) {
        hdr = Buffer.alloc(6); hdr[0] = 0x81; hdr[1] = 0x80 | payload.length; mask.copy(hdr, 2);
      } else if (payload.length < 65536) {
        hdr = Buffer.alloc(8); hdr[0] = 0x81; hdr[1] = 0xfe; hdr.writeUInt16BE(payload.length, 2); mask.copy(hdr, 4);
      } else {
        hdr = Buffer.alloc(14); hdr[0] = 0x81; hdr[1] = 0xff;
        hdr.writeUInt32BE(0, 2); hdr.writeUInt32BE(payload.length, 6); mask.copy(hdr, 10);
      }
      const masked = Buffer.allocUnsafe(payload.length);
      for (let i = 0; i < payload.length; i++) masked[i] = payload[i] ^ mask[i % 4];
      socket.write(Buffer.concat([hdr, masked]));
    }

    const ws = {
      send(method, params) {
        return new Promise((res, rej) => {
          if (chromeDead) { return rej(chromeExitError || new Error('Chrome is not running')); }
          const id = nextId++;
          handlers.set(id, { resolve: res, reject: rej });
          sendFrame(JSON.stringify({ id, method, params: params || {} }));
          const timeoutMs = method === 'Runtime.evaluate' ? 10000 : 30000;
          setTimeout(() => {
            if (handlers.has(id)) { handlers.delete(id); rej(new Error('CDP timeout: ' + method)); }
          }, timeoutMs);
        });
      },
      on(fn) { listeners.push(fn); },
      close() { try { socket.destroy(); } catch(_) {} },
    };

    socket.on('error', err => { if (!wsOpen) reject(err); });
    socket.on('close', () => {
      if (chromeDead) {
        const err = chromeExitError || new Error('Chrome connection closed');
        handlers.forEach(h => h.reject(err));
        handlers.clear();
      }
    });
  });
}

async function main() {
  let ws;
  try {
    const wsUrl = await waitForTarget(20000);
    ws = await wsConnect(wsUrl);

    await ws.send('Network.enable', {});
    await ws.send('Page.enable', {});
    await ws.send('Emulation.setDeviceMetricsOverride', {
      width: 1440, height: 900, deviceScaleFactor: 1, mobile: false,
    });;

    const inFlight = new Set();
    let lastActivity = Date.now();

    ws.on(msg => {
      if (msg.method === 'Network.requestWillBeSent') {
        inFlight.add(msg.params.requestId); lastActivity = Date.now();
      } else if (msg.method === 'Network.loadingFinished' || msg.method === 'Network.loadingFailed') {
        inFlight.delete(msg.params.requestId); lastActivity = Date.now();
      }
    });

    const IDLE_MS = 2000, MAX_MS = 30000;
    const { join } = require('path');

    for (let i = 0; i < urls.length; i++) {
      // Reset network tracking for each new page load
      inFlight.clear();
      lastActivity = Date.now();

      await ws.send('Page.navigate', { url: urls[i] });
      lastActivity = Date.now();

      const started = Date.now();
      while (Date.now() - started < MAX_MS) {
        if (chromeDead) throw chromeExitError || new Error('Chrome exited during page load');
        await sleep(250);
        if (inFlight.size === 0 && Date.now() - lastActivity >= IDLE_MS) break;
      }
      if (chromeDead) throw chromeExitError || new Error('Chrome exited during page load');

      // Try to click an entry-point button (e.g. "START") to reveal the main content.
      // Matches buttons/links whose full visible text is a single common CTA word.
      await sleep(400);
      const clickResult = await ws.send('Runtime.evaluate', {
        expression: `(() => {
          const re = /^\\s*(start|begin|enter|open|launch|go|continue|next|let's go|get started)\\s*$/i;
          const el = Array.from(document.querySelectorAll('button, a, [role="button"]'))
            .find(el => re.test(el.textContent));
          if (el) { el.click(); return el.textContent.trim(); }
          return null;
        })()`,
        returnByValue: true,
      });

      const didClick = clickResult && clickResult.result && clickResult.result.value != null;
      if (didClick) {
        // Wait for post-click navigation + animations to settle
        await sleep(300);
        inFlight.clear();
        lastActivity = Date.now();
        const postClick = Date.now();
        while (Date.now() - postClick < 12000) {
          if (chromeDead) throw chromeExitError || new Error('Chrome exited during page load');
          await sleep(250);
          if (inFlight.size === 0 && Date.now() - lastActivity >= IDLE_MS) break;
        }
        await sleep(1200);
      } else {
        await sleep(400);
      }

      const shot = await ws.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
      if (!shot || !shot.data) throw new Error('No screenshot data for URL ' + i);

      fs.writeFileSync(join(outDir, i + '.png'), Buffer.from(shot.data, 'base64'));
    }

    ws.close(); chrome.kill(); process.exit(0);
  } catch(err) {
    process.stderr.write('Error: ' + err.message + '\n');
    if (ws) try { ws.close(); } catch(_) {}
    chrome.kill(); process.exit(1);
  }
}
main();
"#;

/// Recursively copy `src` dir into `dst`, skipping symlinks (e.g. Chrome's
/// SingletonLock) and known large cache directories that aren't needed for
/// preserving web-app session state.
fn copy_dir_all(src: &Path, dst: &Path) -> std::io::Result<()> {
    const SKIP: &[&str] = &[
        "Cache", "Code Cache", "GPUCache", "ShaderCache", "Crashpad",
        "CrashpadMetrics-active.pma", "BrowserMetrics", "GrShaderCache",
    ];
    std::fs::create_dir_all(dst)?;
    for entry in std::fs::read_dir(src)? {
        let entry = entry?;
        let name = entry.file_name();
        if SKIP.contains(&name.to_string_lossy().as_ref()) {
            continue;
        }
        let ty = entry.file_type()?;
        if ty.is_dir() {
            let _ = copy_dir_all(&entry.path(), &dst.join(&name));
        } else if ty.is_file() {
            // ty.is_symlink() is false here because is_file() is false for symlinks
            let _ = std::fs::copy(entry.path(), dst.join(&name));
        }
        // Symlinks (SingletonLock, etc.) are skipped — is_dir and is_file both false
    }
    Ok(())
}

/// Returns true if the project at `dir` uses hash-based client-side routing
/// (React HashRouter, Vue createWebHashHistory, etc.). For these apps all paths
/// serve the same HTML — routes live in the URL fragment, e.g. `/#/tarot`.
fn uses_hash_routing(dir: &Path) -> bool {
    const PATTERNS: &[&str] = &[
        "createHashRouter",
        "HashRouter",
        "createHashHistory",
        "createWebHashHistory",  // Vue Router
        "useHash: true",
        "\"hash\"",              // generic router hash mode config
        "'hash'",
    ];
    let candidates = [
        "src/main.tsx", "src/main.ts", "src/main.jsx", "src/main.js",
        "src/App.tsx",  "src/App.ts",  "src/App.jsx",  "src/App.js",
        "src/router.ts", "src/router.tsx", "src/router/index.ts", "src/router/index.tsx",
        "src/routes.ts", "src/routes.tsx",
        "app/router.ts", "app/router.tsx",
    ];
    for rel in &candidates {
        if let Ok(content) = std::fs::read_to_string(dir.join(rel)) {
            if PATTERNS.iter().any(|p| content.contains(p)) {
                return true;
            }
        }
    }
    false
}

/// Blocking core: starts a dev server for `branch`, screenshots each `path` in
/// sequence via the CDP script, and returns one base64 data URL per path.
/// Empty strings indicate that a particular screenshot failed.
fn run_previews_blocking(repo_path: String, branch: String, port: u16, paths: Vec<String>) -> Result<Vec<String>, String> {
    use std::process::Stdio;
    use std::time::{Duration, Instant};
    use base64::Engine;

    let repo = Path::new(&repo_path);

    // Sanitise branch name for the temp directory name
    let slug: String = branch.chars()
        .map(|c| if c.is_alphanumeric() || c == '-' || c == '_' { c } else { '-' })
        .collect();
    // Include port in the dir name so concurrent calls for the same branch
    // (e.g. from React StrictMode double-effect) use separate directories.
    let preview_dir = std::env::temp_dir().join(format!("git-viz-preview-{slug}-{port}"));

    // Always start clean
    let _ = std::fs::remove_dir_all(&preview_dir);
    std::fs::create_dir_all(&preview_dir)
        .map_err(|e| format!("Failed to create preview dir: {e}"))?;

    // ── Extract branch files via git archive ─────────────────────────────────
    // More reliable than git worktrees (no locking, no registration state).
    // We buffer to a temp .tar file instead of piping, avoiding macOS pipe
    // edge cases where tar can exit before git flushes its stdout.
    let archive_path = std::env::temp_dir().join(format!("git-viz-archive-{port}.tar"));
    let _ = std::fs::remove_file(&archive_path);

    let arch_out = std::process::Command::new("git")
        .args(["-C", &repo_path, "archive", "--format=tar", &branch])
        .output()
        .map_err(|e| format!("git archive failed to start: {e}"))?;

    if !arch_out.status.success() {
        let _ = std::fs::remove_dir_all(&preview_dir);
        return Err(format!(
            "git archive failed for branch '{}': {}",
            branch,
            String::from_utf8_lossy(&arch_out.stderr).trim()
        ));
    }

    std::fs::write(&archive_path, &arch_out.stdout)
        .map_err(|e| format!("Failed to write archive: {e}"))?;

    let tar_out = std::process::Command::new("tar")
        .args(["-xf", archive_path.to_str().unwrap_or(""), "-C", preview_dir.to_str().unwrap_or("")])
        .output()
        .map_err(|e| format!("tar failed to start: {e}"))?;

    let _ = std::fs::remove_file(&archive_path);

    if !tar_out.status.success() {
        let _ = std::fs::remove_dir_all(&preview_dir);
        return Err(format!(
            "tar extraction failed: {}",
            String::from_utf8_lossy(&tar_out.stderr).trim()
        ));
    }

    // Must be a Node.js project
    if !preview_dir.join("package.json").exists() {
        let _ = std::fs::remove_dir_all(&preview_dir);
        return Err("No package.json — not a Node.js project".to_string());
    }

    // Copy .env files from the real repo into the temp dir.
    // git archive excludes them (they're gitignored) but the app needs them
    // to authenticate and load data — without them the app shows loading
    // skeletons or blank pages indefinitely.
    for name in &[
        ".env",
        ".env.local",
        ".env.development",
        ".env.development.local",
        ".env.production",
        ".env.production.local",
    ] {
        let src = repo.join(name);
        if src.exists() {
            let _ = std::fs::copy(&src, preview_dir.join(name));
        }
    }

    // Inject a MutationObserver script into index.html that removes the
    // Vite error overlay element before the screenshot is taken.
    // We're modifying a temp copy so the real repo is untouched.
    let index_html_path = preview_dir.join("index.html");
    if index_html_path.exists() {
        if let Ok(html) = std::fs::read_to_string(&index_html_path) {
            let inject = concat!(
                "<script>",
                "!function(){",
                "var mo=new MutationObserver(function(){",
                "var el=document.querySelector('vite-error-overlay');",
                "if(el)el.remove();",
                "});",
                "document.addEventListener('DOMContentLoaded',function(){",
                "if(document.body)mo.observe(document.body,{childList:true,subtree:true});",
                "});",
                "}();",
                "</script>"
            );
            let patched = if html.contains("</body>") {
                html.replace("</body>", &format!("{inject}</body>"))
            } else {
                format!("{html}{inject}")
            };
            let _ = std::fs::write(&index_html_path, patched);
        }
    }

    // Detect package manager from lockfile
    let pm = if preview_dir.join("bun.lockb").exists() { "bun" }
        else if preview_dir.join("pnpm-lock.yaml").exists() { "pnpm" }
        else if preview_dir.join("yarn.lock").exists() { "yarn" }
        else { "npm" };

    // Symlink node_modules from the live repo checkout to skip install
    let main_modules = repo.join("node_modules");
    if main_modules.exists() {
        // Clear Vite's dependency cache before starting the preview server.
        // Previous parallel preview runs share this cache and can corrupt it.
        // Vite automatically rebuilds it on next startup — clearing is safe.
        let _ = std::fs::remove_dir_all(main_modules.join(".vite"));

        let link = preview_dir.join("node_modules");
        if !link.exists() {
            let _ = std::os::unix::fs::symlink(&main_modules, &link);
        }
    }

    // Launch dev server (PORT env var + --port flag for belt-and-suspenders)
    let port_str = port.to_string();
    // npm and bun strip '--' before forwarding to the script.
    // pnpm does NOT — it passes '--' literally, so 'pnpm run dev -- --port X'
    // becomes 'vite -- --port X' which vite ignores.  Omit '--' for pnpm.
    let pm_args: Vec<&str> = match pm {
        "yarn" => vec!["dev", "--port", &port_str],
        "pnpm" => vec!["run", "dev", "--port", &port_str],
        _      => vec!["run", "dev", "--", "--port", &port_str],
    };

    // Capture BOTH stdout and stderr to a log file.
    // Next.js writes its "ready on port X" message to stdout, not stderr.
    let log_path = std::env::temp_dir().join(format!("git-viz-dev-{port}.log"));
    let (stdout_sink, stderr_sink) = match std::fs::File::create(&log_path) {
        Ok(f) => {
            let f2 = f.try_clone().unwrap_or_else(|_| std::fs::File::create("/dev/null").unwrap());
            (Stdio::from(f), Stdio::from(f2))
        }
        Err(_) => (Stdio::null(), Stdio::null()),
    };

    let mut server = std::process::Command::new(pm)
        .args(&pm_args)
        .env("PORT", &port_str)
        // Prevent framework dev servers from auto-opening a browser window/tab.
        .env("BROWSER", "none")
        .env("NO_OPEN", "1")
        .env("npm_config_open", "false")
        .env("npm_config_browser", "none")
        .current_dir(&preview_dir)
        .stdout(stdout_sink)
        .stderr(stderr_sink)
        .spawn()
        .map_err(|e| {
            let _ = std::fs::remove_dir_all(&preview_dir);
            format!("Failed to start dev server ({pm}): {e}")
        })?;

    // Poll until the server responds.  We try two URLs:
    // 1. The port we asked for (via --port flag).
    // 2. Whatever port the server actually logged (fallback for frameworks that
    //    ignore --port or choose a different port due to conflicts).
    let requested_url = format!("http://localhost:{port}");
    let start = Instant::now();
    let live_url: Option<String> = loop {
        if start.elapsed() > Duration::from_secs(90) { break None; }

        // Bail early on crash rather than waiting the full 90s
        if let Ok(Some(_)) = server.try_wait() {
            let log = std::fs::read_to_string(&log_path).unwrap_or_default();
            let tail = log.lines().rev().take(15)
                .collect::<Vec<_>>().into_iter().rev().collect::<Vec<_>>().join("\n");
            let _ = std::fs::remove_file(&log_path);
            let _ = std::fs::remove_dir_all(&preview_dir);
            return Err(format!("Dev server crashed.\nLog:\n{tail}"));
        }

        std::thread::sleep(Duration::from_millis(500));

        // 1. Check the port we asked for
        if ureq::get(&requested_url).call().is_ok() {
            break Some(requested_url.clone());
        }

        // 2. Parse the log to find what port the server actually chose
        //    (e.g. Vite prints "Local: http://localhost:5175/")
        let log = std::fs::read_to_string(&log_path).unwrap_or_default();
        if let Some(actual) = parse_localhost_url(&log) {
            if ureq::get(&actual).call().is_ok() {
                break Some(actual);
            }
        }
    };

    let url = match live_url {
        Some(u) => u,
        None => {
            let _ = server.kill();
            let log = std::fs::read_to_string(&log_path).unwrap_or_default();
            let tail = log.lines().rev().take(15)
                .collect::<Vec<_>>().into_iter().rev().collect::<Vec<_>>().join("\n");
            let _ = std::fs::remove_file(&log_path);
            let _ = std::fs::remove_dir_all(&preview_dir);
            return Err(if tail.is_empty() {
                format!("Dev server did not respond within 90s (tried port {port})")
            } else {
                format!("Dev server timed out. Last log output:\n{tail}")
            });
        }
    };
    let _ = std::fs::remove_file(&log_path);

    // Locate Chrome
    let chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
    if !Path::new(chrome).exists() {
        let _ = server.kill();
        let _ = std::fs::remove_dir_all(&preview_dir);
        return Err("Google Chrome not found — install Chrome to generate previews".to_string());
    }

    // Locate Node.js — check common macOS install paths
    let node_bin = [
        "node",
        "/usr/local/bin/node",
        "/opt/homebrew/bin/node",
        "/usr/bin/node",
    ]
    .iter()
    .find(|&&n| {
        if n.starts_with('/') {
            Path::new(n).exists()
        } else {
            std::process::Command::new(n)
                .arg("--version")
                .stdout(std::process::Stdio::null())
                .stderr(std::process::Stdio::null())
                .status()
                .map(|s| s.success())
                .unwrap_or(false)
        }
    })
    .copied();

    if node_bin.is_none() {
        let _ = server.kill();
        let _ = std::fs::remove_dir_all(&preview_dir);
        return Err("Node.js not found — install Node.js to generate previews".to_string());
    }
    let node_bin = node_bin.unwrap();

    let home = std::env::var("HOME").unwrap_or_else(|_| "/tmp".to_string());
    let cdp_port_num = port + 1000;

    // Use a fresh temp dir for each Chrome instance — guarantees no stale
    // SingletonLock/SingletonCookie symlinks from previous crashed sessions.
    let temp_profile = std::env::temp_dir().join(format!("git-viz-chrome-{cdp_port_num}"));
    let _ = std::fs::remove_dir_all(&temp_profile);

    // Copy the full auth session profile (cookies, localStorage, IndexedDB, etc.)
    // so logged-in state carries over. copy_dir_all skips symlinks automatically,
    // so SingletonLock is never transferred to the fresh temp dir.
    let shared_auth = Path::new(&home).join(".git-viz-preview-auth/setup");
    if shared_auth.exists() {
        let _ = copy_dir_all(&shared_auth, &temp_profile);
    } else {
        let _ = std::fs::create_dir_all(&temp_profile);
    }

    // Detect hash-based routing (e.g. React Router HashRouter, Vue createWebHashHistory).
    // These apps serve the same HTML at every path; routes live in the URL fragment (#/tarot).
    let hash_routing = uses_hash_routing(&preview_dir);

    // Build the full URL for each requested path.
    let nav_paths = if paths.is_empty() { vec!["/".to_string()] } else { paths };
    let full_urls: Vec<String> = nav_paths.iter().map(|p| {
        let p = if p.starts_with('/') { p.as_str() } else { "/" };
        if p == "/" {
            url.clone()
        } else if hash_routing {
            format!("{url}/#{p}")   // e.g. http://localhost:3492/#/tarot
        } else {
            format!("{url}{p}")     // e.g. http://localhost:3492/tarot
        }
    }).collect();

    let urls_json = serde_json::to_string(&full_urls)
        .map_err(|e| format!("JSON error: {e}"))?;

    // Output directory: one PNG per path (0.png, 1.png, …)
    let out_dir = std::env::temp_dir().join(format!("git-viz-shots-{port}"));
    let _ = std::fs::remove_dir_all(&out_dir);
    std::fs::create_dir_all(&out_dir)
        .map_err(|e| format!("Failed to create output dir: {e}"))?;

    // Write CDP script and invoke it.
    // The script starts Chrome with --remote-debugging-port, navigates to each
    // URL in sequence, waits for network idle (2 s quiet), then screenshots.
    let script_path = std::env::temp_dir().join(format!("git-viz-cdp-{port}.js"));
    std::fs::write(&script_path, CDP_SCREENSHOT_SCRIPT)
        .map_err(|e| format!("Failed to write CDP script: {e}"))?;

    // CDP debug port offset: 3491 → 4491, 3492 → 4492
    let cdp_port = (port + 1000).to_string();

    let node_out = std::process::Command::new(node_bin)
        .args([
            script_path.to_str().unwrap_or(""),
            &urls_json,
            chrome,
            out_dir.to_str().unwrap_or(""),
            &cdp_port,
        ])
        .stdout(std::process::Stdio::null())
        .stderr(std::process::Stdio::piped())
        .output();

    let _ = std::fs::remove_file(&script_path);
    let _ = server.kill();
    let _ = std::fs::remove_dir_all(&preview_dir);

    match node_out {
        Ok(out) => {
            let mut results: Vec<String> = Vec::with_capacity(full_urls.len());
            for i in 0..full_urls.len() {
                let png = out_dir.join(format!("{i}.png"));
                if png.exists() {
                    match std::fs::read(&png) {
                        Ok(bytes) if !bytes.is_empty() => {
                            let _ = std::fs::remove_file(&png);
                            results.push(format!(
                                "data:image/png;base64,{}",
                                base64::engine::general_purpose::STANDARD.encode(&bytes)
                            ));
                        }
                        Ok(_) => results.push(String::new()), // 0-byte = skip
                        Err(_) => results.push(String::new()),
                    }
                } else {
                    results.push(String::new());
                }
            }
            let _ = std::fs::remove_dir_all(&out_dir);
            if results.iter().all(|s| s.is_empty()) {
                let stderr = String::from_utf8_lossy(&out.stderr);
                Err(format!("Screenshot failed: {}", stderr.trim()))
            } else {
                Ok(results)
            }
        }
        Err(e) => {
            let _ = std::fs::remove_dir_all(&out_dir);
            Err(format!("Node.js launch failed: {e}"))
        }
    }
}

/// Capture the main webview window and save as a PNG.
/// Uses macOS `screencapture -R x,y,w,h` with the window's exact bounds.
#[tauri::command]
fn screenshot(app: tauri::AppHandle, path: String) -> Result<(), String> {
    let win = app
        .get_webview_window("main")
        .ok_or_else(|| "main window not found".to_string())?;
    let pos = win.outer_position().map_err(|e| e.to_string())?;
    let size = win.outer_size().map_err(|e| e.to_string())?;
    if let Some(parent) = std::path::Path::new(&path).parent() {
        std::fs::create_dir_all(parent).map_err(|e| e.to_string())?;
    }
    let region = format!("{},{},{},{}", pos.x, pos.y, size.width, size.height);
    std::process::Command::new("screencapture")
        .args(["-x", "-R", &region, &path]) // -x = silent, -R = region
        .status()
        .map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command(rename_all = "camelCase")]
fn summarize_diff(diff: String, api_key: String) -> Result<String, String> {
    let prompt = format!(
        "Analyze this git diff and return a plain-English summary grouped by area of the codebase.\n\n\
         Return ONLY valid JSON, no markdown fences:\n\
         [\n  {{\n    \"section\": \"Area or component name\",\n    \"changes\": [\n      \
         {{\"type\": \"add\", \"description\": \"What was added or improved\"}},\n      \
         {{\"type\": \"remove\", \"description\": \"What was removed or changed\"}}\n    ]\n  }}\n]\n\n\
         Rules:\n\
         - Group by feature area, not by file\n\
         - Keep descriptions under 55 chars\n\
         - Use \"add\" for additions/improvements, \"remove\" for removals/regressions\n\
         - Max 6 sections, max 4 changes per section\n\n\
         Git diff:\n{}",
        diff
    );
    let body = serde_json::json!({
        "model": "claude-haiku-4-5-20251001",
        "max_tokens": 1024,
        "messages": [{ "role": "user", "content": prompt }]
    });
    let result = ureq::post("https://api.anthropic.com/v1/messages")
        .set("Content-Type", "application/json")
        .set("x-api-key", &api_key)
        .set("anthropic-version", "2023-06-01")
        .send_json(&body);
    match result {
        Ok(resp) => {
            let data: serde_json::Value = resp
                .into_json()
                .map_err(|e| format!("Failed to parse response: {e}"))?;
            Ok(data["content"][0]["text"].as_str().unwrap_or("").to_string())
        }
        Err(ureq::Error::Status(code, resp)) => {
            let body: serde_json::Value = resp.into_json().unwrap_or_default();
            let msg = body["error"]["message"].as_str().unwrap_or("Unknown error");
            Err(format!("{code}: {msg}"))
        }
        Err(e) => Err(format!("Network error: {e}")),
    }
}

#[tauri::command]
fn get_anthropic_key() -> Option<String> {
    // Compile-time key (set ANTHROPIC_API_KEY when running pnpm tauri build)
    if let Some(key) = option_env!("ANTHROPIC_API_KEY") {
        if !key.is_empty() {
            return Some(key.to_string());
        }
    }
    // Fallback to runtime env var for local development
    std::env::var("ANTHROPIC_API_KEY").ok()
}

#[derive(Clone, serde::Serialize)]
#[serde(rename_all = "camelCase")]
struct OpenRepoEventPayload {
    path: String,
    source_app: Option<String>,
}

#[cfg(target_os = "macos")]
fn parse_frontmost_process(output: &str) -> Option<(String, i32)> {
    let trimmed = output.trim();
    let mut parts = trimmed.splitn(2, "||");
    let app_name = parts.next()?.trim().to_string();
    let pid = parts.next()?.trim().parse::<i32>().ok()?;
    if app_name.is_empty() || pid <= 0 {
        return None;
    }
    Some((app_name, pid))
}

#[cfg(target_os = "macos")]
fn frontmost_process_via_nsworkspace() -> Option<(String, i32)> {
    let workspace = NSWorkspace::sharedWorkspace();
    let app = workspace.frontmostApplication()?;
    let pid = app.processIdentifier() as i32;
    if pid <= 0 {
        return None;
    }
    let app_name = app
        .localizedName()
        .map(|name| name.to_string())
        .filter(|name| !name.is_empty())
        .unwrap_or_else(|| "Frontmost App".to_string());
    Some((app_name, pid))
}

#[cfg(target_os = "macos")]
fn frontmost_process_via_system_events() -> Option<(String, i32)> {
    let script = r#"tell application "System Events"
  tell first application process whose frontmost is true
    return (name as text) & "||" & (unix id as text)
  end tell
end tell"#;
    let output = std::process::Command::new("osascript")
        .args(["-e", script])
        .output()
        .ok()?;
    if !output.status.success() {
        return None;
    }
    parse_frontmost_process(std::str::from_utf8(&output.stdout).ok()?)
}

#[cfg(target_os = "macos")]
fn frontmost_process_via_swift() -> Option<(String, i32)> {
    let script = r#"import AppKit
if let app = NSWorkspace.shared.frontmostApplication {
    print("\(app.localizedName ?? "")||\(app.processIdentifier)")
}"#;
    let output = std::process::Command::new("swift")
        .args(["-e", script])
        .output()
        .ok()?;
    if !output.status.success() {
        return None;
    }
    parse_frontmost_process(std::str::from_utf8(&output.stdout).ok()?)
}

#[cfg(target_os = "macos")]
fn get_frontmost_process() -> Option<(String, i32)> {
    frontmost_process_via_nsworkspace()
        .or_else(frontmost_process_via_system_events)
        .or_else(frontmost_process_via_swift)
}

#[cfg(target_os = "macos")]
fn parse_lsof_paths_by_pid(raw: &str) -> HashMap<i32, Vec<PathBuf>> {
    let mut by_pid: HashMap<i32, Vec<PathBuf>> = HashMap::new();
    let mut current_pid: Option<i32> = None;

    for line in raw.lines() {
        if let Some(pid_text) = line.strip_prefix('p') {
            current_pid = pid_text.trim().parse::<i32>().ok();
            continue;
        }
        let Some(path_text) = line.strip_prefix('n') else {
            continue;
        };
        let Some(pid) = current_pid else {
            continue;
        };
        let path = path_text.trim();
        if !path.starts_with('/') {
            continue;
        }
        by_pid.entry(pid).or_default().push(PathBuf::from(path));
    }

    by_pid
}

#[cfg(target_os = "macos")]
fn is_noise_system_path(path: &Path) -> bool {
    let raw = path.to_string_lossy();
    raw.starts_with("/System/")
        || raw.starts_with("/usr/")
        || raw.starts_with("/private/var/")
        || raw.starts_with("/Library/")
        || raw.starts_with("/Applications/")
}

#[cfg(target_os = "macos")]
fn git_root_for_path(path: &Path) -> Option<PathBuf> {
    let mut cursor = if path.is_dir() {
        path.to_path_buf()
    } else {
        path.parent()?.to_path_buf()
    };

    loop {
        if cursor.join(".git").exists() {
            return Some(cursor);
        }
        if !cursor.pop() {
            break;
        }
    }
    None
}

#[cfg(target_os = "macos")]
fn lsof_paths_for_pids(pids: &[i32], descriptor_filter: &str) -> HashMap<i32, Vec<PathBuf>> {
    if pids.is_empty() {
        return HashMap::new();
    }
    let mut unique_pids = pids
        .iter()
        .copied()
        .filter(|pid| *pid > 0)
        .collect::<Vec<_>>();
    unique_pids.sort_unstable();
    unique_pids.dedup();
    if unique_pids.is_empty() {
        return HashMap::new();
    }

    let pid_list = unique_pids
        .iter()
        .map(|pid| pid.to_string())
        .collect::<Vec<_>>()
        .join(",");

    let output = std::process::Command::new("lsof")
        .args(["-n", "-P", "-a", "-p", &pid_list, "-d", descriptor_filter, "-Fn"])
        .output();
    let Ok(output) = output else {
        return HashMap::new();
    };
    let Ok(raw) = std::str::from_utf8(&output.stdout) else {
        return HashMap::new();
    };
    if raw.trim().is_empty() {
        return HashMap::new();
    }
    parse_lsof_paths_by_pid(raw)
}

#[cfg(target_os = "macos")]
fn parse_tty_list(raw: &str) -> Vec<String> {
    raw.split(|ch: char| ch == ',' || ch.is_whitespace())
        .map(str::trim)
        .filter(|token| token.starts_with("/dev/tty"))
        .map(|tty| tty.to_string())
        .collect()
}

#[cfg(target_os = "macos")]
fn terminal_front_tty() -> Option<String> {
    let output = std::process::Command::new("osascript")
        .args([
            "-e",
            r#"tell application "Terminal"
  if (count of windows) is 0 then return ""
  return tty of selected tab of front window
end tell"#,
        ])
        .output()
        .ok()?;
    if !output.status.success() {
        return None;
    }
    let raw = std::str::from_utf8(&output.stdout).ok()?;
    parse_tty_list(raw).into_iter().next()
}

#[cfg(target_os = "macos")]
fn terminal_all_ttys() -> Vec<String> {
    let output = std::process::Command::new("osascript")
        .args([
            "-e",
            r#"tell application "Terminal"
  if (count of windows) is 0 then return ""
  return tty of every tab of every window
end tell"#,
        ])
        .output();
    let Ok(output) = output else {
        return Vec::new();
    };
    if !output.status.success() {
        return Vec::new();
    }
    let Ok(raw) = std::str::from_utf8(&output.stdout) else {
        return Vec::new();
    };
    parse_tty_list(raw)
}

#[cfg(target_os = "macos")]
fn pids_for_ttys(ttys: &[String]) -> Vec<i32> {
    if ttys.is_empty() {
        return Vec::new();
    }
    let mut tty_values = ttys
        .iter()
        .filter(|tty| tty.starts_with("/dev/tty"))
        .cloned()
        .collect::<Vec<_>>();
    tty_values.sort();
    tty_values.dedup();
    if tty_values.is_empty() {
        return Vec::new();
    }

    let output = std::process::Command::new("lsof")
        .arg("-n")
        .arg("-P")
        .arg("-t")
        .args(tty_values.iter().map(String::as_str))
        .output();
    let Ok(output) = output else {
        return Vec::new();
    };
    let Ok(raw) = std::str::from_utf8(&output.stdout) else {
        return Vec::new();
    };

    let mut pids = raw
        .lines()
        .filter_map(|line| line.trim().parse::<i32>().ok())
        .filter(|pid| *pid > 0)
        .collect::<Vec<_>>();
    pids.sort_unstable();
    pids.dedup();
    pids
}

#[cfg(target_os = "macos")]
fn detect_repo_from_terminal_sessions(home_dir: Option<&PathBuf>) -> Option<PathBuf> {
    let front_tty = terminal_front_tty();
    let mut ttys = front_tty.clone().into_iter().collect::<Vec<_>>();
    ttys.extend(terminal_all_ttys());
    ttys.sort();
    ttys.dedup();

    let pids = pids_for_ttys(&ttys);
    if pids.is_empty() {
        return None;
    }

    let mut scores: HashMap<PathBuf, i32> = HashMap::new();
    let cwd_by_pid = lsof_paths_for_pids(&pids, "cwd");
    for path in cwd_by_pid.values().flatten() {
        if !path_allowed_for_detection(path, home_dir) {
            continue;
        }
        if let Some(root) = git_root_for_path(path) {
            *scores.entry(root).or_insert(0) += 28;
        }
    }

    let files_by_pid = lsof_paths_for_pids(&pids, "0-256");
    for path in files_by_pid.values().flatten() {
        if !path_allowed_for_detection(path, home_dir) {
            continue;
        }
        if let Some(root) = git_root_for_path(path) {
            *scores.entry(root).or_insert(0) += 2;
        }
    }

    if let Some(front_tty) = front_tty {
        let front_pids = pids_for_ttys(&[front_tty]);
        let front_cwds = lsof_paths_for_pids(&front_pids, "cwd");
        for path in front_cwds.values().flatten() {
            if !path_allowed_for_detection(path, home_dir) {
                continue;
            }
            if let Some(root) = git_root_for_path(path) {
                *scores.entry(root).or_insert(0) += 48;
            }
        }
    }

    best_scored_repo(scores)
}

#[cfg(target_os = "macos")]
fn percent_decode_component(raw: &str) -> Option<String> {
    let bytes = raw.as_bytes();
    let mut decoded = Vec::with_capacity(bytes.len());
    let mut index = 0usize;

    while index < bytes.len() {
        if bytes[index] == b'%' {
            if index + 2 >= bytes.len() {
                return None;
            }
            let hex = std::str::from_utf8(&bytes[(index + 1)..(index + 3)]).ok()?;
            let value = u8::from_str_radix(hex, 16).ok()?;
            decoded.push(value);
            index += 3;
            continue;
        }
        decoded.push(bytes[index]);
        index += 1;
    }

    String::from_utf8(decoded).ok()
}

#[cfg(target_os = "macos")]
fn file_uri_to_path(uri: &str) -> Option<PathBuf> {
    let encoded_path = uri.strip_prefix("file://")?;
    if !encoded_path.starts_with('/') {
        return None;
    }
    let decoded = percent_decode_component(encoded_path)?;
    if decoded.is_empty() {
        return None;
    }
    Some(PathBuf::from(decoded))
}

#[cfg(target_os = "macos")]
fn detect_repo_from_editor_storage(home_dir: Option<&PathBuf>) -> Option<PathBuf> {
    let home = home_dir?;
    let storage_files = [
        home.join("Library/Application Support/Cursor/User/globalStorage/storage.json"),
        home.join("Library/Application Support/Antigravity/User/globalStorage/storage.json"),
        home.join("Library/Application Support/Code/User/globalStorage/storage.json"),
    ];

    let mut scores: HashMap<PathBuf, i32> = HashMap::new();

    for storage_path in storage_files {
        let Ok(raw) = fs::read_to_string(&storage_path) else {
            continue;
        };
        let Ok(json) = serde_json::from_str::<serde_json::Value>(&raw) else {
            continue;
        };
        let Some(folders) = json
            .pointer("/backupWorkspaces/folders")
            .and_then(|value| value.as_array())
        else {
            continue;
        };

        for (idx, folder) in folders.iter().enumerate() {
            let Some(uri) = folder.get("folderUri").and_then(|value| value.as_str()) else {
                continue;
            };
            let Some(folder_path) = file_uri_to_path(uri) else {
                continue;
            };
            if !path_allowed_for_detection(&folder_path, home_dir) {
                continue;
            }
            let Some(root) = git_root_for_path(&folder_path) else {
                continue;
            };
            let position_weight = (40_i32 - (idx as i32 * 6)).max(8);
            *scores.entry(root).or_insert(0) += position_weight;
        }
    }

    best_scored_repo(scores)
}

#[cfg(target_os = "macos")]
fn collect_descendant_pids(root_pid: i32, max_nodes: usize) -> Vec<i32> {
    let output = std::process::Command::new("ps")
        .args(["-axo", "pid=,ppid="])
        .output();
    let Ok(output) = output else {
        return Vec::new();
    };
    if !output.status.success() {
        return Vec::new();
    }
    let Ok(raw) = std::str::from_utf8(&output.stdout) else {
        return Vec::new();
    };

    let mut children: HashMap<i32, Vec<i32>> = HashMap::new();
    for line in raw.lines() {
        let mut parts = line.split_whitespace();
        let Some(pid_text) = parts.next() else {
            continue;
        };
        let Some(ppid_text) = parts.next() else {
            continue;
        };
        let Ok(pid) = pid_text.parse::<i32>() else {
            continue;
        };
        let Ok(ppid) = ppid_text.parse::<i32>() else {
            continue;
        };
        children.entry(ppid).or_default().push(pid);
    }

    let mut result = Vec::new();
    let mut queue = vec![root_pid];
    let mut cursor = 0usize;
    let mut seen: HashSet<i32> = HashSet::new();
    seen.insert(root_pid);

    while cursor < queue.len() && result.len() < max_nodes {
        let current = queue[cursor];
        cursor += 1;
        let Some(next_children) = children.get(&current) else {
            continue;
        };
        for child in next_children {
            if seen.insert(*child) {
                result.push(*child);
                queue.push(*child);
                if result.len() >= max_nodes {
                    break;
                }
            }
        }
    }

    result
}

#[cfg(target_os = "macos")]
fn parse_etime_to_seconds(raw: &str) -> Option<i64> {
    let trimmed = raw.trim();
    let (day_part, time_part) = if let Some((days, rest)) = trimmed.split_once('-') {
        (days.parse::<i64>().ok()?, rest)
    } else {
        (0_i64, trimmed)
    };
    let pieces = time_part
        .split(':')
        .map(|part| part.parse::<i64>().ok())
        .collect::<Option<Vec<_>>>()?;
    let (hours, minutes, seconds) = match pieces.as_slice() {
        [h, m, s] => (*h, *m, *s),
        [m, s] => (0, *m, *s),
        [s] => (0, 0, *s),
        _ => return None,
    };
    Some(day_part * 86_400 + hours * 3_600 + minutes * 60 + seconds)
}

#[cfg(target_os = "macos")]
fn parse_ps_pid_elapsed_command(line: &str) -> Option<(i32, i64, String)> {
    let trimmed = line.trim_start();
    let pid_end = trimmed.find(char::is_whitespace)?;
    let pid = trimmed[..pid_end].trim().parse::<i32>().ok()?;
    let rest = trimmed[pid_end..].trim_start();
    let etime_end = rest.find(char::is_whitespace)?;
    let elapsed = parse_etime_to_seconds(rest[..etime_end].trim())?;
    let command = rest[etime_end..].trim_start().to_string();
    if command.is_empty() {
        return None;
    }
    Some((pid, elapsed, command))
}

#[cfg(target_os = "macos")]
fn process_command_weight(command_lower: &str) -> i32 {
    if command_lower.contains("pnpm tauri dev")
        || command_lower.contains("npm run tauri")
        || command_lower.contains("tauri dev")
    {
        return 90;
    }
    if command_lower.contains("cursor")
        || command_lower.contains("visual studio code")
        || command_lower.contains("/code ")
        || command_lower.contains("claude")
        || command_lower.contains("codex")
        || command_lower.contains("dia")
    {
        return 64;
    }
    if command_lower.contains("pnpm")
        || command_lower.contains("npm")
        || command_lower.contains("yarn")
        || command_lower.contains("bun")
        || command_lower.contains("node")
        || command_lower.contains("cargo")
        || command_lower.contains("python")
        || command_lower.contains("uv ")
        || command_lower.contains("go ")
    {
        return 46;
    }
    if command_lower.contains("terminal")
        || command_lower.contains("iterm")
        || command_lower.contains("wezterm")
        || command_lower.contains("alacritty")
        || command_lower.contains("/zsh")
        || command_lower.contains("/bash")
        || command_lower.contains("/fish")
    {
        return 30;
    }
    12
}

#[cfg(target_os = "macos")]
fn should_scan_process_command(command_lower: &str) -> bool {
    command_lower.contains("tauri")
        || command_lower.contains("git")
        || command_lower.contains("pnpm")
        || command_lower.contains("npm")
        || command_lower.contains("yarn")
        || command_lower.contains("bun")
        || command_lower.contains("node")
        || command_lower.contains("cargo")
        || command_lower.contains("python")
        || command_lower.contains("uv ")
        || command_lower.contains("zsh")
        || command_lower.contains("bash")
        || command_lower.contains("fish")
        || command_lower.contains("terminal")
        || command_lower.contains("iterm")
        || command_lower.contains("wezterm")
        || command_lower.contains("alacritty")
}

#[cfg(target_os = "macos")]
fn best_scored_repo(scores: HashMap<PathBuf, i32>) -> Option<PathBuf> {
    scores
        .into_iter()
        .max_by(|(path_a, score_a), (path_b, score_b)| {
            score_a
                .cmp(score_b)
                .then_with(|| path_a.as_os_str().len().cmp(&path_b.as_os_str().len()))
        })
        .map(|(path, _)| path)
}

#[cfg(target_os = "macos")]
fn path_allowed_for_detection(path: &Path, home_dir: Option<&PathBuf>) -> bool {
    if is_noise_system_path(path) {
        return false;
    }
    if let Some(home) = home_dir {
        return path.starts_with(home);
    }
    true
}

#[cfg(target_os = "macos")]
fn detect_repo_from_active_dev_processes(home_dir: Option<&PathBuf>) -> Option<PathBuf> {
    let output = std::process::Command::new("ps")
        .args(["-axo", "pid=,etime=,command="])
        .output()
        .ok()?;
    if !output.status.success() {
        return None;
    }
    let raw = std::str::from_utf8(&output.stdout).ok()?;

    let mut process_rows: Vec<(i32, i64, String)> = raw
        .lines()
        .filter_map(parse_ps_pid_elapsed_command)
        .filter_map(|(pid, elapsed, command)| {
            let command_lower = command.to_lowercase();
            if !should_scan_process_command(&command_lower) {
                return None;
            }
            Some((pid, elapsed, command_lower))
        })
        .collect();

    process_rows.sort_by_key(|(_, elapsed, _)| *elapsed);
    if process_rows.len() > 180 {
        process_rows.truncate(180);
    }

    let pid_list: Vec<i32> = process_rows.iter().map(|(pid, _, _)| *pid).collect();
    let cwd_by_pid = lsof_paths_for_pids(&pid_list, "cwd");
    let mut scores: HashMap<PathBuf, i32> = HashMap::new();

    for (pid, elapsed, command_lower) in process_rows {
        let Some(paths) = cwd_by_pid.get(&pid) else {
            continue;
        };
        let base_weight = process_command_weight(&command_lower);
        let recency_bonus = (900_i64.saturating_sub(elapsed.min(900)) / 45) as i32; // 0..20
        let total_weight = base_weight + recency_bonus;
        for path in paths {
            if !path_allowed_for_detection(path, home_dir) {
                continue;
            }
            let Some(root) = git_root_for_path(path) else {
                continue;
            };
            *scores.entry(root).or_insert(0) += total_weight;
        }
    }

    best_scored_repo(scores)
}

#[cfg(target_os = "macos")]
fn detect_repo_from_process_cwd() -> Option<PathBuf> {
    let cwd = std::env::current_dir().ok()?;
    git_root_for_path(&cwd)
}

#[cfg(target_os = "macos")]
fn detect_repo_from_frontmost_process() -> Option<OpenRepoEventPayload> {
    let frontmost = get_frontmost_process();
    let mut scores: HashMap<PathBuf, i32> = HashMap::new();
    let home_dir = dirs::home_dir();
    let source_app = frontmost.as_ref().map(|(name, _)| name.clone());

    if let Some((_, pid)) = frontmost {
        let mut pids = vec![pid];
        pids.extend(collect_descendant_pids(pid, 280));

        let cwd_by_pid = lsof_paths_for_pids(&pids, "cwd");
        for (owner_pid, paths) in cwd_by_pid {
            let weight = if owner_pid == pid { 24 } else { 14 };
            for path in paths {
                if !path_allowed_for_detection(&path, home_dir.as_ref()) {
                    continue;
                }
                if let Some(root) = git_root_for_path(&path) {
                    *scores.entry(root).or_insert(0) += weight;
                }
            }
        }

        let file_by_pid = lsof_paths_for_pids(&pids, "0-256");
        for (owner_pid, paths) in file_by_pid {
            let weight = if owner_pid == pid { 2 } else { 1 };
            for path in paths {
                if !path_allowed_for_detection(&path, home_dir.as_ref()) {
                    continue;
                }
                if let Some(root) = git_root_for_path(&path) {
                    *scores.entry(root).or_insert(0) += weight;
                }
            }
        }
    }

    if let Some(terminal_repo) = detect_repo_from_terminal_sessions(home_dir.as_ref()) {
        *scores.entry(terminal_repo).or_insert(0) += 80;
    }
    if let Some(storage_repo) = detect_repo_from_editor_storage(home_dir.as_ref()) {
        *scores.entry(storage_repo).or_insert(0) += 55;
    }

    let best = best_scored_repo(scores)
        .or_else(|| detect_repo_from_active_dev_processes(home_dir.as_ref()))
        .or_else(detect_repo_from_process_cwd)?;

    Some(OpenRepoEventPayload {
        path: best.to_string_lossy().to_string(),
        source_app,
    })
}

#[cfg(target_os = "macos")]
fn append_shortcut_debug_log(message: &str) {
    let mut path = std::env::temp_dir();
    path.push("git-visualizer-shortcut.log");

    if let Ok(mut file) = fs::OpenOptions::new().create(true).append(true).open(path) {
        let timestamp = chrono::Local::now().format("%Y-%m-%d %H:%M:%S");
        let _ = writeln!(file, "[{timestamp}] {message}");
    }
}

const TRAY_TOGGLE_ID: &str = "toggle-window";
const TRAY_QUIT_ID: &str = "quit-app";
const POPOVER_OFFSET_Y: i32 = 0;
const POPOVER_WIDTH: f64 = 240.0;
const POPOVER_HEIGHT: f64 = 320.0;
const POPOVER_FADE_OUT_MS: u64 = 85;
const POPOVER_FADE_STEP_MS: u64 = 8;
static MAIN_WINDOW_LOCKED_POS: OnceLock<Mutex<Option<(i32, i32)>>> = OnceLock::new();
static MAIN_WINDOW_HIDE_SEQ: OnceLock<AtomicU64> = OnceLock::new();
static PENDING_OPEN_REPO: OnceLock<Mutex<Option<OpenRepoEventPayload>>> = OnceLock::new();

fn main_window_locked_pos() -> &'static Mutex<Option<(i32, i32)>> {
    MAIN_WINDOW_LOCKED_POS.get_or_init(|| Mutex::new(None))
}

fn main_window_hide_seq() -> &'static AtomicU64 {
    MAIN_WINDOW_HIDE_SEQ.get_or_init(|| AtomicU64::new(0))
}

fn pending_open_repo() -> &'static Mutex<Option<OpenRepoEventPayload>> {
    PENDING_OPEN_REPO.get_or_init(|| Mutex::new(None))
}

fn set_pending_open_repo(payload: Option<OpenRepoEventPayload>) {
    if let Ok(mut pending) = pending_open_repo().lock() {
        *pending = payload;
    }
}

fn consume_pending_open_repo() -> Option<OpenRepoEventPayload> {
    pending_open_repo().lock().ok()?.take()
}

fn bump_main_window_hide_seq() -> u64 {
    main_window_hide_seq().fetch_add(1, Ordering::SeqCst) + 1
}

fn set_locked_main_position(x: i32, y: i32) {
    if let Ok(mut pos) = main_window_locked_pos().lock() {
        *pos = Some((x, y));
    }
}

fn get_locked_main_position() -> Option<(i32, i32)> {
    main_window_locked_pos()
        .lock()
        .ok()
        .and_then(|pos| *pos)
}

fn set_main_window_alpha(window: &tauri::WebviewWindow, alpha: f64) {
    #[cfg(target_os = "macos")]
    {
        let clamped = alpha.clamp(0.0, 1.0);
        let _ = window.with_webview(move |webview| unsafe {
            let ns_window: &NSWindow = &*webview.ns_window().cast();
            ns_window.setAlphaValue(clamped);
        });
    }
    #[cfg(not(target_os = "macos"))]
    {
        let _ = window;
        let _ = alpha;
    }
}

fn set_menu_bar_mode(app: &tauri::AppHandle) {
    #[cfg(target_os = "macos")]
    {
        let _ = app.set_dock_visibility(false);
        let _ = app.set_activation_policy(tauri::ActivationPolicy::Accessory);
    }
}

fn activate_popover_open_mode(app: &tauri::AppHandle) {
    #[cfg(target_os = "macos")]
    {
        let _ = app.run_on_main_thread(|| {
            if let Some(mtm) = MainThreadMarker::new() {
                let ns_app = NSApplication::sharedApplication(mtm);
                ns_app.activate();
                #[allow(deprecated)]
                ns_app.activateIgnoringOtherApps(true);
            }
        });
    }
}

fn dismiss_other_menu_bar_popovers() {
    #[cfg(target_os = "macos")]
    {
        // Ask any currently open status-item popovers to close (e.g. other menubar apps)
        // before opening ours, without switching activation policy to Regular.
        if let Ok(source) = CGEventSource::new(CGEventSourceStateID::CombinedSessionState) {
            if let Ok(esc_down) = CGEvent::new_keyboard_event(source.clone(), 53, true) {
                esc_down.post(CGEventTapLocation::HID);
            }
            if let Ok(esc_up) = CGEvent::new_keyboard_event(source, 53, false) {
                esc_up.post(CGEventTapLocation::HID);
            }
        }
    }
}

fn nudge_popover_open_mode(app: &tauri::AppHandle) {
    let app_handle = app.clone();
    std::thread::spawn(move || {
        std::thread::sleep(StdDuration::from_millis(24));
        activate_popover_open_mode(&app_handle);
    });
}

fn configure_main_popover_window(window: &tauri::WebviewWindow) {
    #[cfg(target_os = "macos")]
    {
        let _ = window.with_webview(|webview| unsafe {
            let ns_window: &NSWindow = &*webview.ns_window().cast();
            ns_window.setHidesOnDeactivate(true);
        });
    }
}

fn set_desktop_mode(app: &tauri::AppHandle) {
    #[cfg(target_os = "macos")]
    {
        let _ = app.set_activation_policy(tauri::ActivationPolicy::Regular);
        let _ = app.set_dock_visibility(true);
    }
}

fn rect_to_physical(rect: Rect) -> (f64, f64, f64, f64) {
    let (x, y) = match rect.position {
        Position::Physical(pos) => (pos.x as f64, pos.y as f64),
        Position::Logical(pos) => (pos.x, pos.y),
    };
    let (w, h) = match rect.size {
        Size::Physical(size) => (size.width as f64, size.height as f64),
        Size::Logical(size) => (size.width, size.height),
    };
    (x, y, w, h)
}

fn anchor_main_window(window: &tauri::WebviewWindow, tray_rect: Rect) {
    let (tray_x, tray_y, tray_w, tray_h) = rect_to_physical(tray_rect);
    let window_size = window.outer_size().ok();
    let popover_w = window_size.map(|s| s.width as f64).unwrap_or(POPOVER_WIDTH);
    let popover_h = window_size.map(|s| s.height as f64).unwrap_or(POPOVER_HEIGHT);

    let icon_center_x = tray_x + tray_w / 2.0;
    let mut x = icon_center_x - popover_w / 2.0;
    let mut y = tray_y + tray_h + f64::from(POPOVER_OFFSET_Y);

    if let Ok(Some(monitor)) = window.monitor_from_point(icon_center_x, tray_y + tray_h / 2.0) {
        let work = monitor.work_area();
        let min_x = work.position.x as f64;
        let max_x = min_x + work.size.width as f64 - popover_w;
        if max_x >= min_x {
            x = x.clamp(min_x, max_x);
        }

        let min_y = work.position.y as f64;
        let max_y = min_y + work.size.height as f64 - popover_h;
        if max_y >= min_y {
            y = y.clamp(min_y, max_y);
        }
    }

    let anchored_x = x.round() as i32;
    let anchored_y = y.round() as i32;
    set_locked_main_position(anchored_x, anchored_y);
    let _ = window.set_position(Position::Physical(PhysicalPosition::new(
        anchored_x,
        anchored_y,
    )));
}

fn reapply_locked_main_position(window: &tauri::WebviewWindow) {
    if let Some((x, y)) = get_locked_main_position() {
        let _ = window.set_position(Position::Physical(PhysicalPosition::new(x, y)));
    }
}

fn show_main_window(app: &tauri::AppHandle, tray_rect: Option<Rect>) {
    if let Some(window) = app.get_webview_window("main") {
        bump_main_window_hide_seq();
        set_main_window_alpha(&window, 1.0);
        dismiss_other_menu_bar_popovers();
        if let Some(rect) = tray_rect {
            anchor_main_window(&window, rect);
        } else {
            reapply_locked_main_position(&window);
        }
        let _ = window.set_focusable(true);
        let _ = window.emit("popover://open", ());
        let _ = window.show();
        let _ = window.unminimize();
        let _ = window.set_focus();
        // Activate after the window is visible/focused so other menu bar popovers
        // get dismissed without switching to Regular activation policy.
        activate_popover_open_mode(app);
        nudge_popover_open_mode(app);
    }
}

fn hide_main_window(app: &tauri::AppHandle) {
    if let Some(window) = app.get_webview_window("main") {
        let seq = bump_main_window_hide_seq();
        let _ = window.emit("popover://closing", ());
        let app_handle = app.clone();
        std::thread::spawn(move || {
            let step_ms = POPOVER_FADE_STEP_MS.max(1);
            let steps = (POPOVER_FADE_OUT_MS / step_ms).max(1);
            let sleep_ms = (POPOVER_FADE_OUT_MS / steps).max(1);

            for step in 1..=steps {
                if main_window_hide_seq().load(Ordering::SeqCst) != seq {
                    return;
                }
                let progress = step as f64 / steps as f64;
                if let Some(window) = app_handle.get_webview_window("main") {
                    set_main_window_alpha(&window, (1.0 - progress).max(0.0));
                } else {
                    return;
                }
                std::thread::sleep(StdDuration::from_millis(sleep_ms));
            }

            if main_window_hide_seq().load(Ordering::SeqCst) != seq {
                return;
            }
            if let Some(window) = app_handle.get_webview_window("main") {
                let _ = window.hide();
                set_main_window_alpha(&window, 1.0);
            }
        });
    }
}

fn hide_full_window(app: &tauri::AppHandle) {
    if let Some(window) = app.get_webview_window("main-full") {
        let _ = window.hide();
    }
}

fn toggle_main_window(app: &tauri::AppHandle, tray_rect: Option<Rect>) {
    if let Some(window) = app.get_webview_window("main") {
        if window.is_visible().unwrap_or(false) {
            hide_main_window(app);
        } else {
            show_main_window(app, tray_rect);
        }
    }
}

fn open_full_window_and_emit_repo(
    app: &tauri::AppHandle,
    repo_payload: Option<&OpenRepoEventPayload>,
) -> Result<(), String> {
    let full = app
        .get_webview_window("main-full")
        .ok_or_else(|| "Full app window not found".to_string())?;

    set_desktop_mode(app);
    hide_main_window(app);

    let _ = full.show();
    let _ = full.unminimize();
    let _ = full.set_focus();

    if let Some(payload) = repo_payload {
        set_pending_open_repo(Some(payload.clone()));
        let _ = full.emit("gitviz://open-repo", payload);
    } else {
        set_pending_open_repo(None);
    }

    Ok(())
}

#[tauri::command]
fn open_full_app_window(app: tauri::AppHandle) -> Result<(), String> {
    open_full_window_and_emit_repo(&app, None)
}

#[tauri::command]
fn take_pending_open_repo() -> Option<OpenRepoEventPayload> {
    consume_pending_open_repo()
}

fn create_tray_icon(app: &tauri::AppHandle) -> Result<(), tauri::Error> {
    let toggle_item = MenuItemBuilder::with_id(TRAY_TOGGLE_ID, "Show / Hide Git Visualizer")
        .build(app)?;
    let quit_item = MenuItemBuilder::with_id(TRAY_QUIT_ID, "Quit").build(app)?;

    let menu = MenuBuilder::new(app)
        .item(&toggle_item)
        .separator()
        .item(&quit_item)
        .build()?;

    let mut tray_builder = TrayIconBuilder::with_id("git-visualizer-tray")
        .menu(&menu)
        .show_menu_on_left_click(false)
        .tooltip("Git Visualizer")
        .on_menu_event(|app, event| match event.id().as_ref() {
            TRAY_TOGGLE_ID => toggle_main_window(app, None),
            TRAY_QUIT_ID => app.exit(0),
            _ => {}
        })
        .on_tray_icon_event(|tray, event| {
            if let TrayIconEvent::Click {
                button: MouseButton::Left,
                button_state: MouseButtonState::Up,
                rect,
                ..
            } = event
            {
                toggle_main_window(tray.app_handle(), Some(rect));
            }
        });

    if let Some(icon) = app.default_window_icon() {
        tray_builder = tray_builder.icon(icon.clone());
    }

    let _ = tray_builder.build(app)?;
    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_global_shortcut::Builder::new().build())
        .setup(|app| {
            create_tray_icon(app.handle())?;
            set_menu_bar_mode(app.handle());
            if let Some(window) = app.get_webview_window("main") {
                configure_main_popover_window(&window);
            }
            hide_main_window(app.handle());
            hide_full_window(app.handle());
            #[cfg(target_os = "macos")]
            {
                let shortcut = Shortcut::new(Some(Modifiers::SUPER), Code::KeyG);
                app.global_shortcut()
                    .on_shortcut(shortcut, move |app_handle, _shortcut, event| {
                        if event.state() != ShortcutState::Pressed {
                            return;
                        }
                        let detected_repo = detect_repo_from_frontmost_process();
                        #[cfg(target_os = "macos")]
                        {
                            match detected_repo.as_ref() {
                                Some(payload) => {
                                    let source = payload
                                        .source_app
                                        .as_deref()
                                        .unwrap_or("unknown");
                                    append_shortcut_debug_log(&format!(
                                        "Cmd+G detected path='{}' source='{}'",
                                        payload.path, source
                                    ));
                                }
                                None => append_shortcut_debug_log("Cmd+G detected no repository"),
                            }
                        }
                        let _ = open_full_window_and_emit_repo(app_handle, detected_repo.as_ref());
                    })
                    .map_err(|e| format!("Failed to register Cmd+G: {e}"))?;
            }
            Ok(())
        })
        .on_window_event(|window, event| {
            match window.label() {
                "main" => match event {
                    WindowEvent::CloseRequested { api, .. } => {
                        api.prevent_close();
                        hide_main_window(&window.app_handle());
                    }
                    WindowEvent::Focused(false) => {
                        hide_main_window(&window.app_handle());
                    }
                    WindowEvent::Moved(position) => {
                        if let Some((x, y)) = get_locked_main_position() {
                            if position.x != x || position.y != y {
                                let _ = window.set_position(Position::Physical(
                                    PhysicalPosition::new(x, y),
                                ));
                            }
                        }
                    }
                    _ => {}
                },
                "main-full" => {
                    if let WindowEvent::CloseRequested { api, .. } = event {
                        api.prevent_close();
                        let _ = window.hide();
                        set_menu_bar_mode(&window.app_handle());
                    }
                }
                _ => {}
            }
        })
        .invoke_handler(tauri::generate_handler![
            get_branches,
            get_merge_nodes,
            get_default_branch,
            get_checked_out_ref,
            checkout_ref,
            checkout_branch,
            get_repo_info,
            get_github_info,
            get_github_auth_status,
            authenticate_github,
            get_merged_prs,
            get_open_prs,
            get_pr_commits,
            list_directory,
            search_directories,
            get_home_dir,
            get_branch_diff,
            get_branch_commits,
            get_commit_diff,
            get_direct_commits,
            get_anthropic_key,
            summarize_diff,
            screenshot,
            get_recent_log,
            generate_preview,
            generate_preview_routes,
            open_preview_browser,
            get_changed_routes,
            get_changed_routes_for_commit,
            debug_diff_files,
            open_full_app_window,
            take_pending_open_repo,
        ])
        .run(tauri::generate_context!())
        .expect("error running tauri application");
}
