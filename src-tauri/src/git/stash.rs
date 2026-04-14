use super::cli::{self, GitError};
use serde::Serialize;
use std::path::Path;

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

/// Check out the stash's base commit (detached), apply the stash to the working tree, then drop it from the stash list.
pub fn apply_stash_restore(repo: &Path, stash_index: u32) -> Result<(), GitError> {
    let stash_ref = format!("stash@{{{stash_index}}}");
    let base_sha = cli::run(repo, &["rev-parse", &format!("{stash_ref}^1")])?;
    let base_sha = base_sha.trim();
    cli::run(repo, &["checkout", "--detach", base_sha])?;
    cli::run(repo, &["stash", "apply", &stash_ref])?;
    cli::run(repo, &["stash", "drop", &stash_ref])?;
    Ok(())
}

pub fn stash_drop(repo: &Path, stash_index: u32) -> Result<(), GitError> {
    let stash_ref = format!("stash@{{{stash_index}}}");
    cli::run(repo, &["stash", "drop", &stash_ref])?;
    Ok(())
}
