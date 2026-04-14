use super::cli::{self, GitError};
use serde::Serialize;
use std::path::Path;

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct WorktreeInfo {
    pub path: String,
    pub head_sha: String,
    pub branch_name: Option<String>,
    pub parent_sha: Option<String>,
    pub is_current: bool,
    pub is_prunable: bool,
}

fn worktree_paths_are_same(repo: &Path, wt_path: &Path) -> bool {
    match (std::fs::canonicalize(repo), std::fs::canonicalize(wt_path)) {
        (Ok(r), Ok(w)) => r == w,
        _ => {
            let trim = |p: &Path| {
                p.to_string_lossy()
                    .trim_end_matches(|c| c == '/' || c == '\\')
                    .to_string()
            };
            trim(repo) == trim(wt_path)
        }
    }
}

/// List all worktrees for the repository that contains `repo`.
/// `repo` may be the main checkout or any linked worktree path.
pub fn list_worktrees(repo: &Path) -> Result<Vec<WorktreeInfo>, GitError> {
    let output = cli::run(repo, &["worktree", "list", "--porcelain"])?;
    let mut parsed: Vec<PartialWt> = Vec::new();
    let mut current: Option<PartialWt> = None;

    let flush = |slot: &mut Option<PartialWt>, out: &mut Vec<PartialWt>| {
        if let Some(wt) = slot.take() {
            out.push(wt);
        }
    };

    for line in output.lines() {
        if line.trim().is_empty() {
            flush(&mut current, &mut parsed);
            continue;
        }
        if let Some(path) = line.strip_prefix("worktree ") {
            flush(&mut current, &mut parsed);
            current = Some(PartialWt {
                path: path.trim().to_string(),
                ..PartialWt::default()
            });
            continue;
        }
        let Some(entry) = current.as_mut() else {
            continue;
        };
        if let Some(sha) = line.strip_prefix("HEAD ") {
            entry.head_sha = Some(sha.trim().to_string());
        } else if let Some(rest) = line.strip_prefix("branch ") {
            let rest = rest.trim();
            if rest == "detached" {
                entry.branch_name = None;
            } else if let Some(name) = rest.strip_prefix("refs/heads/") {
                entry.branch_name = Some(name.to_string());
            }
        } else if line.starts_with("prunable") {
            entry.is_prunable = true;
        }
    }
    flush(&mut current, &mut parsed);

    let mut result: Vec<WorktreeInfo> = Vec::new();
    for partial in parsed {
        if partial.path.is_empty() {
            continue;
        }
        let Some(head_sha) = partial.head_sha.filter(|h| !h.is_empty()) else {
            continue;
        };

        let wt_path = Path::new(&partial.path);
        let parent_sha = git_parent_sha(wt_path).ok().flatten();

        let is_current = worktree_paths_are_same(repo, wt_path);

        result.push(WorktreeInfo {
            path: partial.path,
            head_sha,
            branch_name: partial.branch_name,
            parent_sha,
            is_current,
            is_prunable: partial.is_prunable,
        });
    }

    Ok(result)
}

#[derive(Default)]
struct PartialWt {
    path: String,
    head_sha: Option<String>,
    branch_name: Option<String>,
    is_prunable: bool,
}

fn git_parent_sha(wt_root: &Path) -> Result<Option<String>, GitError> {
    let out = cli::run(wt_root, &["rev-list", "--parents", "-n", "1", "HEAD"])?;
    let line = out.lines().next().unwrap_or("").trim();
    if line.is_empty() {
        return Ok(None);
    }
    let mut parts = line.split_whitespace();
    let _head = parts.next();
    Ok(parts.next().map(|s| s.to_string()))
}

pub fn remove_worktree(repo: &Path, worktree_path: &str, force: bool) -> Result<(), GitError> {
    let mut args: Vec<String> = vec!["worktree".into(), "remove".into()];
    if force {
        args.push("--force".into());
    }
    args.push(worktree_path.to_string());
    let args_ref: Vec<&str> = args.iter().map(|s| s.as_str()).collect();
    cli::run(repo, &args_ref)?;
    Ok(())
}
