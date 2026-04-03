use super::cli::{self, GitError};
use serde::Serialize;
use std::collections::HashSet;
use std::path::Path;

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Branch {
    pub name: String,
    pub commits_ahead: i32,
    pub commits_behind: i32,
    pub created_from_sha: Option<String>,
    pub created_date: Option<String>,
    pub last_commit_date: String,
    pub last_commit_author: String,
    pub status: String,
    pub remote_sync_status: String,
    pub unpushed_commits: i32,
    pub head_sha: String,
    pub parent_branch: Option<String>,
    pub diverged_from_sha: Option<String>,
    pub diverged_from_date: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct CheckedOutRef {
    pub branch_name: Option<String>,
    pub head_sha: String,
    pub parent_sha: Option<String>,
    pub has_uncommitted_changes: bool,
}

/// Get the default branch name (usually main or master)
pub fn get_default_branch(repo: &Path) -> Result<String, GitError> {
    // Try to get from origin HEAD
    if let Ok(output) = cli::run(repo, &["symbolic-ref", "refs/remotes/origin/HEAD"]) {
        let trimmed = output.trim();
        if let Some(branch) = trimmed.strip_prefix("refs/remotes/origin/") {
            return Ok(branch.to_string());
        }
    }

    // Fallback: check if main exists
    if cli::run(repo, &["rev-parse", "--verify", "main"]).is_ok() {
        return Ok("main".to_string());
    }

    // Fallback: check if master exists
    if cli::run(repo, &["rev-parse", "--verify", "master"]).is_ok() {
        return Ok("master".to_string());
    }

    // Last resort: use HEAD
    Ok("HEAD".to_string())
}

/// Get the current checked-out ref (branch name when attached, and HEAD SHA).
pub fn get_checked_out_ref(repo: &Path) -> Result<CheckedOutRef, GitError> {
    let branch_raw = cli::run(repo, &["rev-parse", "--abbrev-ref", "HEAD"])?;
    let branch_name = match branch_raw.trim() {
        "" | "HEAD" => None,
        value => Some(value.to_string()),
    };

    let head_raw = cli::run(repo, &["rev-parse", "HEAD"])?;
    let head_sha = head_raw.trim().to_string();

    let parent_sha = cli::run(repo, &["rev-list", "--parents", "-n", "1", "HEAD"])
        .ok()
        .and_then(|output| {
            let mut parts = output.split_whitespace();
            let _head = parts.next()?;
            parts.next().map(|sha| sha.to_string())
        });

    let has_uncommitted_changes =
        cli::run(repo, &["status", "--porcelain", "--untracked-files=normal"])
            .map(|output| !output.trim().is_empty())
            .unwrap_or(false);

    Ok(CheckedOutRef {
        branch_name,
        head_sha,
        parent_sha,
        has_uncommitted_changes,
    })
}

/// Get repository info (name and path)
pub fn get_repo_info(repo: &Path) -> Result<(String, String), GitError> {
    let output = cli::run(repo, &["rev-parse", "--show-toplevel"])?;
    let full_path = output.trim().to_string();

    let name = Path::new(&full_path)
        .file_name()
        .map(|s| s.to_string_lossy().to_string())
        .unwrap_or_else(|| "unknown".to_string());

    Ok((name, full_path))
}

/// List all branches with their metadata
pub fn list_branches(repo: &Path, default_branch: &str) -> Result<Vec<Branch>, GitError> {
    // Get all local branches
    let output = cli::run(repo, &["branch", "--format=%(refname:short)"])?;

    let branch_names: Vec<String> = output
        .lines()
        .filter(|s| !s.is_empty() && *s != default_branch)
        .map(|s| s.to_string())
        .collect();

    let mut branches = Vec::new();

    for name in &branch_names {
        if let Ok(branch) = get_branch_info(repo, name, default_branch) {
            branches.push(branch);
        }
    }

    infer_branch_parents(repo, &mut branches, default_branch)?;

    // Sort by last commit date (most recent first)
    branches.sort_by(|a, b| b.last_commit_date.cmp(&a.last_commit_date));

    Ok(branches)
}

fn get_branch_info(repo: &Path, name: &str, default_branch: &str) -> Result<Branch, GitError> {
    // Get ahead/behind counts
    let (commits_ahead, commits_behind) = get_ahead_behind(repo, name, default_branch)?;
    let (remote_sync_status, unpushed_commits) = get_remote_sync_status(repo, name, commits_ahead);

    // Get last commit info: SHA, author, date
    let log_output = cli::run(repo, &["log", "-1", "--format=%H|%an|%aI", name])?;
    let parts: Vec<&str> = log_output.trim().split('|').collect();

    let head_sha = parts.first().unwrap_or(&"").to_string();
    let last_commit_author = parts.get(1).unwrap_or(&"Unknown").to_string();
    let last_commit_date = parts.get(2).unwrap_or(&"").to_string();

    // Get merge base (fork point)
    let (diverged_from_sha, diverged_from_date) = get_fork_point(repo, name, default_branch)?;

    // Calculate status
    let status = calculate_status(commits_behind, &last_commit_date);

    Ok(Branch {
        name: name.to_string(),
        commits_ahead,
        commits_behind,
        created_from_sha: None,
        created_date: None,
        last_commit_date,
        last_commit_author,
        status,
        remote_sync_status,
        unpushed_commits,
        head_sha,
        parent_branch: None,
        diverged_from_sha,
        diverged_from_date,
    })
}

#[derive(Clone)]
struct ParentCandidate {
    name: String,
    head_sha: String,
    last_commit_date: String,
    is_default: bool,
}

#[derive(Clone)]
struct BranchCreationInfo {
    sha: String,
    date: String,
    source_ref: Option<String>,
}

fn infer_branch_parents(
    repo: &Path,
    branches: &mut [Branch],
    default_branch: &str,
) -> Result<(), GitError> {
    if branches.is_empty() {
        return Ok(());
    }

    let mut candidates: Vec<ParentCandidate> = branches
        .iter()
        .map(|b| ParentCandidate {
            name: b.name.clone(),
            head_sha: b.head_sha.clone(),
            last_commit_date: b.last_commit_date.clone(),
            is_default: false,
        })
        .collect();

    if let Ok(default_head_sha) = get_ref_head_sha(repo, default_branch) {
        let default_date = get_commit_date(repo, &default_head_sha).unwrap_or_default();
        candidates.push(ParentCandidate {
            name: default_branch.to_string(),
            head_sha: default_head_sha,
            last_commit_date: default_date,
            is_default: true,
        });
    }

    let candidate_names: HashSet<String> = candidates.iter().map(|c| c.name.clone()).collect();

    for branch in branches.iter_mut() {
        let created_from_reflog = get_branch_reflog_created_entry(repo, &branch.name)
            .ok()
            .flatten();
        let created_from_reflog_sha = created_from_reflog.as_ref().map(|info| info.sha.clone());
        let created_from_reflog_date = created_from_reflog.as_ref().map(|info| info.date.clone());
        let created_from_reflog_parent = created_from_reflog
            .as_ref()
            .and_then(|info| info.source_ref.as_deref())
            .and_then(|source| normalize_reflog_parent(source, default_branch, &candidate_names))
            .filter(|name| name != &branch.name);

        // Prefer explicit reflog origin whenever available.
        // If reflog is missing/ambiguous, fall back to heuristic inference.
        let mut parent_name = created_from_reflog_parent;
        if parent_name.is_none() {
            let mut best: Option<(ParentCandidate, i32)> = None;

            for candidate in &candidates {
                if candidate.name == branch.name {
                    continue;
                }
                if candidate.head_sha.is_empty() || branch.head_sha.is_empty() {
                    continue;
                }

                let ancestor = is_ancestor_head(repo, &candidate.head_sha, &branch.head_sha)?;
                if !ancestor {
                    continue;
                }

                let distance = commit_distance(repo, &candidate.head_sha, &branch.head_sha)?;
                if distance < 0 {
                    continue;
                }

                match &best {
                    None => best = Some((candidate.clone(), distance)),
                    Some((best_candidate, best_distance)) => {
                        let better_distance = distance < *best_distance;
                        let same_distance = distance == *best_distance;
                        let newer_candidate =
                            candidate.last_commit_date > best_candidate.last_commit_date;
                        let prefer_non_default = best_candidate.is_default && !candidate.is_default;

                        if better_distance
                            || (same_distance && (newer_candidate || prefer_non_default))
                        {
                            best = Some((candidate.clone(), distance));
                        }
                    }
                }
            }

            if let Some((candidate, _)) = best {
                parent_name = Some(candidate.name);
            }
        }

        if parent_name.is_none() {
            parent_name = candidates
                .iter()
                .find(|c| c.is_default)
                .map(|c| c.name.clone());
        }

        branch.parent_branch = parent_name.clone();

        if let Some(parent_ref) = parent_name.as_deref() {
            if let Ok((sha, date)) = get_fork_point(repo, &branch.name, &parent_ref) {
                branch.diverged_from_sha = sha;
                branch.diverged_from_date = date;
            }
        }

        let created_from_unique_commit = branch.parent_branch.as_deref().and_then(|parent| {
            get_first_unique_commit_date(repo, parent, &branch.name)
                .ok()
                .flatten()
        });
        branch.created_from_sha = created_from_reflog_sha
            .clone()
            .or_else(|| branch.diverged_from_sha.clone());
        branch.created_date = created_from_reflog_date
            .clone()
            .or(created_from_unique_commit)
            .or_else(|| branch.diverged_from_date.clone())
            .or_else(|| Some(branch.last_commit_date.clone()));
    }

    Ok(())
}

fn get_ref_head_sha(repo: &Path, reference: &str) -> Result<String, GitError> {
    let output = cli::run(repo, &["rev-parse", "--verify", reference])?;
    Ok(output.trim().to_string())
}

fn get_commit_date(repo: &Path, reference: &str) -> Result<String, GitError> {
    let output = cli::run(repo, &["log", "-1", "--format=%aI", reference])?;
    Ok(output.trim().to_string())
}

fn is_ancestor_head(
    repo: &Path,
    ancestor_sha: &str,
    descendant_sha: &str,
) -> Result<bool, GitError> {
    let output = cli::run(repo, &["merge-base", ancestor_sha, descendant_sha])?;
    Ok(output.trim() == ancestor_sha)
}

fn commit_distance(repo: &Path, from_sha: &str, to_sha: &str) -> Result<i32, GitError> {
    let output = cli::run(
        repo,
        &["rev-list", "--count", &format!("{}..{}", from_sha, to_sha)],
    )?;
    Ok(output.trim().parse::<i32>().unwrap_or(i32::MAX))
}

fn get_ahead_behind(repo: &Path, branch: &str, base: &str) -> Result<(i32, i32), GitError> {
    let output = cli::run(
        repo,
        &[
            "rev-list",
            "--left-right",
            "--count",
            &format!("{}...{}", base, branch),
        ],
    )?;

    let parts: Vec<&str> = output.trim().split_whitespace().collect();
    let behind = parts.first().and_then(|s| s.parse().ok()).unwrap_or(0);
    let ahead = parts.get(1).and_then(|s| s.parse().ok()).unwrap_or(0);

    Ok((ahead, behind))
}

fn get_fork_point(
    repo: &Path,
    branch: &str,
    base: &str,
) -> Result<(Option<String>, Option<String>), GitError> {
    let merge_base = cli::run(repo, &["merge-base", base, branch])?;
    let sha = merge_base.trim();

    if sha.is_empty() {
        return Ok((None, None));
    }

    let date_output = cli::run(repo, &["log", "-1", "--format=%aI", sha])?;
    let date = date_output.trim().to_string();

    Ok((Some(sha.to_string()), Some(date)))
}

fn get_first_unique_commit_date(
    repo: &Path,
    base: &str,
    branch: &str,
) -> Result<Option<String>, GitError> {
    let output = cli::run(
        repo,
        &[
            "log",
            "--reverse",
            "--format=%aI",
            &format!("{}..{}", base, branch),
        ],
    )?;

    Ok(output
        .lines()
        .map(str::trim)
        .find(|line| !line.is_empty())
        .map(|line| line.to_string()))
}

fn get_branch_reflog_created_entry(
    repo: &Path,
    branch: &str,
) -> Result<Option<BranchCreationInfo>, GitError> {
    let ref_name = format!("refs/heads/{}", branch);
    let output = cli::run(
        repo,
        &[
            "reflog",
            "show",
            "--date=iso-strict",
            "--format=%H|%gd|%gs",
            &ref_name,
        ],
    )?;

    let entry = output
        .lines()
        .map(str::trim)
        .filter(|line| !line.is_empty())
        .last();

    let Some(entry) = entry else {
        return Ok(None);
    };

    let mut parts = entry.splitn(3, '|');
    let sha = parts.next().map(str::trim).unwrap_or("");
    let selector = parts.next().map(str::trim).unwrap_or("");
    let subject = parts.next().map(str::trim).unwrap_or("");
    if sha.is_empty() || selector.is_empty() {
        return Ok(None);
    }

    let Some(start) = selector.rfind("@{") else {
        return Ok(None);
    };

    let tail = &selector[start + 2..];
    let Some(end) = tail.rfind('}') else {
        return Ok(None);
    };

    let raw_date = tail[..end].trim();
    let Some(date) = normalize_git_date(raw_date) else {
        return Ok(None);
    };
    let source_ref = parse_reflog_created_from_subject(subject);
    Ok(Some(BranchCreationInfo {
        sha: sha.to_string(),
        date,
        source_ref,
    }))
}

fn parse_reflog_created_from_subject(subject: &str) -> Option<String> {
    let raw = subject.trim();
    let created_prefix = "branch: Created from ";
    let source = raw.strip_prefix(created_prefix)?.trim();
    if source.is_empty() {
        None
    } else {
        Some(source.to_string())
    }
}

fn normalize_reflog_parent(
    source: &str,
    default_branch: &str,
    candidate_names: &HashSet<String>,
) -> Option<String> {
    let raw = source.trim();
    if raw.is_empty() {
        return None;
    }

    let mut options: Vec<String> = vec![raw.to_string()];
    if let Some(stripped) = raw.strip_prefix("refs/heads/") {
        options.push(stripped.to_string());
    }
    if let Some(stripped) = raw.strip_prefix("origin/") {
        options.push(stripped.to_string());
    }
    if let Some(stripped) = raw.strip_prefix("refs/remotes/origin/") {
        options.push(stripped.to_string());
    }
    if let Some(stripped) = raw.strip_prefix("refs/remotes/") {
        if let Some((_remote, branch_name)) = stripped.split_once('/') {
            options.push(branch_name.to_string());
        }
    }

    for candidate in options {
        if candidate == "HEAD" {
            continue;
        }
        if candidate == default_branch || candidate_names.contains(&candidate) {
            return Some(candidate);
        }
    }

    None
}

fn get_remote_sync_status(repo: &Path, branch: &str, commits_ahead: i32) -> (String, i32) {
    let compare_ref =
        get_branch_upstream(repo, branch).or_else(|| find_remote_branch_ref(repo, branch));

    if let Some(remote_ref) = compare_ref {
        if let Ok((ahead, _behind)) = get_ahead_behind(repo, branch, &remote_ref) {
            if ahead > 0 {
                return ("unpushed".to_string(), ahead);
            }
            return ("on-github".to_string(), 0);
        }
        return ("on-github".to_string(), 0);
    }

    ("local-only".to_string(), commits_ahead.max(0))
}

fn get_branch_upstream(repo: &Path, branch: &str) -> Option<String> {
    let ref_query = format!("{branch}@{{upstream}}");
    let output = cli::run(repo, &["rev-parse", "--abbrev-ref", &ref_query]).ok()?;
    let upstream = output.trim();
    if upstream.is_empty() {
        return None;
    }
    Some(upstream.to_string())
}

fn find_remote_branch_ref(repo: &Path, branch: &str) -> Option<String> {
    let origin_full_ref = format!("refs/remotes/origin/{branch}");
    if remote_ref_exists(repo, &origin_full_ref) {
        return Some(format!("origin/{branch}"));
    }

    let remotes = cli::run(repo, &["remote"]).ok()?;
    for remote in remotes
        .lines()
        .map(str::trim)
        .filter(|line| !line.is_empty() && *line != "origin")
    {
        let full_ref = format!("refs/remotes/{remote}/{branch}");
        if remote_ref_exists(repo, &full_ref) {
            return Some(format!("{remote}/{branch}"));
        }
    }

    None
}

fn remote_ref_exists(repo: &Path, full_ref: &str) -> bool {
    cli::run(repo, &["show-ref", "--verify", "--quiet", full_ref]).is_ok()
}

fn normalize_git_date(value: &str) -> Option<String> {
    if let Ok(dt) = chrono::DateTime::parse_from_rfc3339(value) {
        return Some(dt.to_rfc3339());
    }
    if let Ok(dt) = chrono::DateTime::parse_from_str(value, "%Y-%m-%d %H:%M:%S %z") {
        return Some(dt.to_rfc3339());
    }
    None
}

fn calculate_status(commits_behind: i32, last_commit_date: &str) -> String {
    // Parse the date and check if it's stale (more than 7 days old)
    if commits_behind > 50 {
        return "stale".to_string();
    }

    // Historically we returned "conflict-risk" here, but the app no longer
    // surfaces that as a dedicated indicator.
    if commits_behind > 10 {
        return "stale".to_string();
    }

    // Check date freshness
    if let Ok(commit_date) = chrono::DateTime::parse_from_rfc3339(last_commit_date) {
        let now = chrono::Utc::now();
        let days_old = (now - commit_date.with_timezone(&chrono::Utc)).num_days();

        if days_old > 14 {
            return "stale".to_string();
        }
    }

    "fresh".to_string()
}
