use super::branches::get_default_branch;
use super::cli::{self, GitError};
use serde::Serialize;
use std::path::Path;

/// Local branch names whose tip is exactly `commit_sha` (empty if detached-only / no branch tip).
fn local_branches_pointing_at(repo: &Path, commit_sha: &str) -> Result<Vec<String>, GitError> {
    let output = cli::run(
        repo,
        &[
            "branch",
            "--format=%(refname:short)",
            "--points-at",
            commit_sha,
        ],
    )?;
    let mut names: Vec<String> = output
        .lines()
        .map(str::trim)
        .filter(|s| !s.is_empty())
        .map(str::to_string)
        .collect();
    names.sort();
    Ok(names)
}

/// Check out `commit_sha`, attached to a branch when that commit is a branch tip (prefers default branch).
fn checkout_for_stash_base(repo: &Path, commit_sha: &str) -> Result<(), GitError> {
    let branches = local_branches_pointing_at(repo, commit_sha)?;
    if branches.is_empty() {
        cli::run(repo, &["checkout", "--detach", commit_sha])?;
        return Ok(());
    }
    let default_branch = get_default_branch(repo)?;
    let chosen = if branches.iter().any(|b| b == &default_branch) {
        default_branch
    } else {
        branches[0].clone()
    };
    cli::run(repo, &["checkout", &chosen])?;
    Ok(())
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct GitStashEntry {
    pub index: u32,
    pub base_sha: String,
    pub message: String,
}

pub fn list_stashes(repo: &Path) -> Result<Vec<GitStashEntry>, GitError> {
    let output = cli::run(repo, &["stash", "list"])?;
    let mut entries = Vec::new();
    for (idx, line) in output.lines().enumerate() {
        let line = line.trim();
        if line.is_empty() {
            continue;
        }
        let message = line
            .splitn(3, ':')
            .nth(2)
            .map(str::trim)
            .unwrap_or("")
            .to_string();
        let stash_ref = format!("stash@{{{idx}}}");
        let base_sha = cli::run(repo, &["rev-parse", &format!("{stash_ref}^1")])?;
        entries.push(GitStashEntry {
            index: idx as u32,
            base_sha: base_sha.trim().to_string(),
            message,
        });
    }
    Ok(entries)
}

pub fn stash_push(repo: &Path, include_untracked: bool) -> Result<(), GitError> {
    let mut args = vec!["stash", "push", "-m", "git-visualizer"];
    if include_untracked {
        args.push("-u");
    }
    cli::run(repo, &args)?;
    Ok(())
}

/// Check out the stash's base (`stash@{n}^1`): attached to a local branch when that commit is a branch tip
/// (prefers the repo default branch if multiple tips match), otherwise detached. Then apply the stash to the
/// working tree and drop it from the stash list.
pub fn apply_stash_restore(repo: &Path, stash_index: u32) -> Result<(), GitError> {
    let stash_ref = format!("stash@{{{stash_index}}}");
    let base_sha = cli::run(repo, &["rev-parse", &format!("{stash_ref}^1")])?;
    let base_sha = base_sha.trim();
    checkout_for_stash_base(repo, base_sha)?;
    cli::run(repo, &["stash", "apply", &stash_ref])?;
    cli::run(repo, &["stash", "drop", &stash_ref])?;
    Ok(())
}

pub fn stash_drop(repo: &Path, stash_index: u32) -> Result<(), GitError> {
    let stash_ref = format!("stash@{{{stash_index}}}");
    cli::run(repo, &["stash", "drop", &stash_ref])?;
    Ok(())
}

/// Create a new branch at the current HEAD and check it out.
/// Uncommitted changes in the working tree follow automatically.
pub fn create_branch_from_uncommitted(repo: &Path, branch_name: &str) -> Result<(), GitError> {
    cli::run(repo, &["checkout", "-b", branch_name])?;
    Ok(())
}

/// Create a new branch at the stash's base commit (`stash@{n}^1`), check it out,
/// then apply and drop the stash — leaving changes as uncommitted on the new branch.
pub fn move_stash_to_new_branch(repo: &Path, stash_index: u32, branch_name: &str) -> Result<(), GitError> {
    let stash_ref = format!("stash@{{{stash_index}}}");
    let base_sha = cli::run(repo, &["rev-parse", &format!("{stash_ref}^1")])?;
    let base_sha = base_sha.trim().to_string();
    cli::run(repo, &["checkout", "-b", branch_name, &base_sha])?;
    cli::run(repo, &["stash", "apply", &stash_ref])?;
    cli::run(repo, &["stash", "drop", &stash_ref])?;
    Ok(())
}

/// Create a branch with unrelated history (`git checkout --orphan`).
pub fn create_root_branch(repo: &Path, branch_name: &str) -> Result<(), GitError> {
    cli::run(repo, &["checkout", "--orphan", branch_name])?;
    Ok(())
}
