use super::branches::{self, Branch, CheckedOutRef};
use super::cli::{self, GitError};
use serde::{Deserialize, Serialize};
use std::collections::{HashMap, HashSet};
use std::path::Path;
use std::sync::atomic::{AtomicU64, Ordering};

static SNAPSHOT_COUNTER: AtomicU64 = AtomicU64::new(1);

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GraphLoadOptions {
    pub max_commits: Option<u32>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct GraphNode {
    pub id: String,
    pub sha: String,
    pub kind: String,
    pub lane_id: String,
    pub row: u32,
    pub timestamp: i64,
    pub label: String,
    pub author: String,
    pub badges: Vec<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct GraphEdge {
    pub id: String,
    pub from_node_id: String,
    pub to_node_id: String,
    pub edge_type: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct GraphStats {
    pub node_count: usize,
    pub edge_count: usize,
    pub lane_count: usize,
    pub row_count: usize,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct BranchMetadata {
    pub name: String,
    pub head_sha: String,
    pub parent_branch: Option<String>,
    pub commits_ahead: i32,
    pub commits_behind: i32,
    pub status: String,
    pub remote_sync_status: String,
    pub unpushed_commits: i32,
    pub last_commit_date: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct GraphSnapshot {
    pub snapshot_id: u64,
    pub nodes: Vec<GraphNode>,
    pub edges: Vec<GraphEdge>,
    pub lanes: Vec<String>,
    pub rows: usize,
    pub branch_heads: HashMap<String, String>,
    pub checked_out_ref: CheckedOutRef,
    pub stats: GraphStats,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct GraphDelta {
    pub snapshot_id: u64,
    pub reason: String,
    pub changed_at_ms: i64,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct CommitDetails {
    pub sha: String,
    pub short_sha: String,
    pub author_name: String,
    pub author_email: String,
    pub authored_at: i64,
    pub subject: String,
    pub body: String,
    pub files_changed: usize,
    pub additions: i64,
    pub deletions: i64,
}

#[derive(Debug, Clone)]
struct CommitRow {
    sha: String,
    parent_shas: Vec<String>,
    timestamp: i64,
    subject: String,
    author: String,
    refs: String,
}

pub fn next_snapshot_id() -> u64 {
    SNAPSHOT_COUNTER.fetch_add(1, Ordering::Relaxed)
}

pub fn get_branch_metadata(repo: &Path) -> Result<Vec<BranchMetadata>, GitError> {
    let default_branch = branches::get_default_branch(repo)?;
    let mut branches = branches::list_branches(repo, &default_branch)?;
    branches.sort_by(|a, b| b.last_commit_date.cmp(&a.last_commit_date));

    Ok(branches
        .into_iter()
        .map(|branch| BranchMetadata {
            name: branch.name,
            head_sha: branch.head_sha,
            parent_branch: branch.parent_branch,
            commits_ahead: branch.commits_ahead,
            commits_behind: branch.commits_behind,
            status: branch.status,
            remote_sync_status: branch.remote_sync_status,
            unpushed_commits: branch.unpushed_commits,
            last_commit_date: branch.last_commit_date,
        })
        .collect())
}

fn parse_commit_rows(raw: &str) -> Vec<CommitRow> {
    raw.lines()
        .filter_map(|line| {
            if line.trim().is_empty() {
                return None;
            }
            let parts: Vec<&str> = line.splitn(6, '|').collect();
            if parts.len() < 6 {
                return None;
            }
            let timestamp = parts[2].parse::<i64>().unwrap_or(0);
            let parent_shas = parts[4]
                .split_whitespace()
                .filter(|v| !v.is_empty())
                .map(|v| v.to_string())
                .collect::<Vec<_>>();
            Some(CommitRow {
                sha: parts[0].to_string(),
                parent_shas,
                timestamp,
                subject: parts[3].to_string(),
                author: parts[5].to_string(),
                refs: parts[1].to_string(),
            })
        })
        .collect()
}

fn lane_from_refs(refs: &str) -> Option<String> {
    refs.split(',')
        .map(str::trim)
        .find_map(|token| {
            if let Some(branch) = token.strip_prefix("HEAD -> ") {
                return Some(branch.trim().to_string());
            }
            if token.starts_with("origin/") || token.starts_with("tag: ") || token.starts_with("HEAD") {
                return None;
            }
            if token.is_empty() {
                return None;
            }
            Some(token.to_string())
        })
}

fn lane_for_commit(
    commit: &CommitRow,
    branch_by_head: &HashMap<String, String>,
    default_branch: &str,
) -> String {
    if let Some(branch) = branch_by_head.get(&commit.sha) {
        return branch.clone();
    }
    if let Some(lane) = lane_from_refs(&commit.refs) {
        if !lane.is_empty() {
            return lane;
        }
    }
    default_branch.to_string()
}

pub fn build_graph_snapshot(
    repo: &Path,
    options: Option<GraphLoadOptions>,
) -> Result<GraphSnapshot, GitError> {
    let default_branch = branches::get_default_branch(repo)?;
    let checked_out_ref = branches::get_checked_out_ref(repo)?;

    let branch_list = branches::list_branches(repo, &default_branch)?;
    let mut branch_heads: HashMap<String, String> = HashMap::new();
    branch_heads.insert(default_branch.clone(), cli::run(repo, &["rev-parse", &default_branch])?.trim().to_string());
    for branch in &branch_list {
        branch_heads.insert(branch.name.clone(), branch.head_sha.clone());
    }

    let max_commits = options.and_then(|v| v.max_commits).unwrap_or(2000).max(50);
    let output = cli::run(
        repo,
        &[
            "log",
            "--all",
            "--date-order",
            &format!("--max-count={max_commits}"),
            "--format=%H|%D|%ct|%s|%P|%an",
        ],
    )?;

    let commits = parse_commit_rows(&output);
    let lane_name_set: HashSet<String> = branch_heads.keys().cloned().collect();
    let branch_by_head: HashMap<String, String> = branch_heads
        .iter()
        .map(|(branch, sha)| (sha.clone(), branch.clone()))
        .collect();

    let mut lanes = vec![default_branch.clone()];
    for branch in lane_name_set {
        if branch != default_branch {
            lanes.push(branch);
        }
    }
    lanes.sort();
    if let Some(idx) = lanes.iter().position(|v| v == &default_branch) {
        lanes.swap(0, idx);
    }

    let mut lane_index_by_name = HashMap::new();
    for (idx, lane) in lanes.iter().enumerate() {
        lane_index_by_name.insert(lane.clone(), idx);
    }

    let mut nodes = Vec::with_capacity(commits.len());
    let mut node_id_by_sha = HashMap::new();

    for (row_idx, commit) in commits.iter().enumerate() {
        let lane = lane_for_commit(commit, &branch_by_head, &default_branch);
        let lane_id = lane.clone();
        if !lane_index_by_name.contains_key(&lane_id) {
            let idx = lanes.len();
            lanes.push(lane_id.clone());
            lane_index_by_name.insert(lane_id.clone(), idx);
        }

        let mut badges = Vec::new();
        if checked_out_ref.head_sha == commit.sha {
            badges.push("checked-out".to_string());
        }
        if branch_by_head.contains_key(&commit.sha) {
            badges.push("branch-head".to_string());
        }

        let node = GraphNode {
            id: commit.sha.clone(),
            sha: commit.sha.clone(),
            kind: "commit".to_string(),
            lane_id,
            row: row_idx as u32,
            timestamp: commit.timestamp,
            label: commit.subject.clone(),
            author: commit.author.clone(),
            badges,
        };
        node_id_by_sha.insert(commit.sha.clone(), node.id.clone());
        nodes.push(node);
    }

    let mut edges = Vec::new();
    for commit in &commits {
        if let Some(from_id) = node_id_by_sha.get(&commit.sha) {
            for parent in &commit.parent_shas {
                if let Some(to_id) = node_id_by_sha.get(parent) {
                    edges.push(GraphEdge {
                        id: format!("{}->{to_id}", commit.sha),
                        from_node_id: from_id.clone(),
                        to_node_id: to_id.clone(),
                        edge_type: "branch".to_string(),
                    });
                }
            }
        }
    }

    let stats = GraphStats {
        node_count: nodes.len(),
        edge_count: edges.len(),
        lane_count: lanes.len(),
        row_count: nodes.len(),
    };

    Ok(GraphSnapshot {
        snapshot_id: next_snapshot_id(),
        nodes,
        edges,
        lanes,
        rows: stats.row_count,
        branch_heads,
        checked_out_ref,
        stats,
    })
}

pub fn get_commit_details(repo: &Path, commit_sha: &str) -> Result<CommitDetails, GitError> {
    let summary = cli::run(
        repo,
        &[
            "show",
            "-s",
            "--format=%H|%h|%an|%ae|%ct|%s|%b",
            commit_sha,
        ],
    )?;

    let parts: Vec<&str> = summary.trim_end().splitn(7, '|').collect();
    if parts.len() < 7 {
        return Err(GitError::CommandFailed("Failed to parse commit summary".to_string()));
    }

    let stat_output = cli::run(repo, &["show", "--numstat", "--format=", commit_sha])?;
    let mut files_changed = 0usize;
    let mut additions = 0i64;
    let mut deletions = 0i64;

    for line in stat_output.lines() {
        let cols: Vec<&str> = line.split('\t').collect();
        if cols.len() < 3 {
            continue;
        }
        files_changed += 1;
        additions += cols[0].parse::<i64>().unwrap_or(0);
        deletions += cols[1].parse::<i64>().unwrap_or(0);
    }

    Ok(CommitDetails {
        sha: parts[0].to_string(),
        short_sha: parts[1].to_string(),
        author_name: parts[2].to_string(),
        author_email: parts[3].to_string(),
        authored_at: parts[4].parse::<i64>().unwrap_or(0),
        subject: parts[5].to_string(),
        body: parts[6].to_string(),
        files_changed,
        additions,
        deletions,
    })
}

#[allow(dead_code)]
fn _branch_to_metadata(branch: Branch) -> BranchMetadata {
    BranchMetadata {
        name: branch.name,
        head_sha: branch.head_sha,
        parent_branch: branch.parent_branch,
        commits_ahead: branch.commits_ahead,
        commits_behind: branch.commits_behind,
        status: branch.status,
        remote_sync_status: branch.remote_sync_status,
        unpushed_commits: branch.unpushed_commits,
        last_commit_date: branch.last_commit_date,
    }
}
