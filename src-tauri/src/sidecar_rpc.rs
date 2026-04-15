use serde::de::DeserializeOwned;
use serde::{Deserialize, Serialize};
use serde_json::{json, Value};
use std::io::{self, BufRead, Write};

use super::*;

pub const PROTOCOL_VERSION: u32 = 1;

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
struct RpcRequest {
    #[allow(dead_code)]
    jsonrpc: Option<String>,
    id: Option<Value>,
    method: String,
    #[serde(default)]
    params: Value,
    protocol_version: Option<u32>,
}

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
struct RpcError {
    code: i64,
    message: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    data: Option<Value>,
}

fn supported_methods() -> Vec<&'static str> {
    vec![
        "system.handshake",
        "get_home_dir",
        "list_directory",
        "search_directories",
        "get_repo_info",
        "get_default_branch",
        "get_checked_out_ref",
        "get_branches",
        "get_merge_nodes",
        "get_direct_commits",
        "get_unpushed_direct_commits",
        "get_branch_unpushed_commit_shas",
        "list_worktrees",
        "remove_worktree",
        "checkout_ref",
        "checkout_branch",
        "list_stashes",
        "stash_push",
        "commit_working_tree",
        "stage_working_tree",
        "apply_stash_restore",
        "stash_drop",
        "create_branch_from_uncommitted",
        "move_stash_to_new_branch",
        "push_branch",
        "push_current_branch",
        "push_all_unpushed_branches",
        "delete_selected_elements",
        "merge_branches",
        "merge_ref_into_branch",
        "get_github_info",
        "get_github_auth_status",
        "authenticate_github",
        "get_merged_prs",
        "get_open_prs",
        "get_pr_commits",
        "get_branch_diff",
        "get_branch_commits",
        "get_commit_diff",
        "get_recent_log",
        "get_changed_routes",
        "get_changed_routes_for_commit",
        "debug_diff_files",
        "generate_preview",
        "generate_preview_routes",
        "open_preview_browser",
        "take_pending_open_repo",
        "get_anthropic_key",
    ]
}

fn parse_params<T: DeserializeOwned>(params: Value) -> Result<T, RpcError> {
    serde_json::from_value(params).map_err(|err| RpcError {
        code: -32602,
        message: "Invalid params".to_string(),
        data: Some(json!({ "details": err.to_string() })),
    })
}

fn ok_response(id: Option<Value>, result: Value) -> Value {
    json!({
        "jsonrpc": "2.0",
        "protocolVersion": PROTOCOL_VERSION,
        "id": id,
        "result": result,
    })
}

fn err_response(id: Option<Value>, err: RpcError) -> Value {
    json!({
        "jsonrpc": "2.0",
        "protocolVersion": PROTOCOL_VERSION,
        "id": id,
        "error": err,
    })
}

fn method_error(message: impl Into<String>) -> RpcError {
    RpcError {
        code: -32000,
        message: message.into(),
        data: None,
    }
}

fn not_found_error(method: &str) -> RpcError {
    RpcError {
        code: -32601,
        message: format!("Method not found: {method}"),
        data: None,
    }
}

fn protocol_error(actual: Option<u32>) -> RpcError {
    RpcError {
        code: -32001,
        message: format!(
            "Unsupported protocolVersion {:?}; expected {}",
            actual, PROTOCOL_VERSION
        ),
        data: Some(json!({ "expected": PROTOCOL_VERSION, "received": actual })),
    }
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct RepoPathParam {
    repo_path: String,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct ListDirParam {
    path: String,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct SearchDirectoriesParam {
    path: String,
    query: String,
    #[serde(default)]
    max_depth: Option<u32>,
    #[serde(default)]
    limit: Option<usize>,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct GetMergeNodesParam {
    repo_path: String,
    branch: String,
    page: u32,
    per_page: u32,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct RemoveWorktreeParam {
    repo_path: String,
    worktree_path: String,
    force: bool,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct CheckoutRefParam {
    repo_path: String,
    ref_name: String,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct CheckoutBranchParam {
    repo_path: String,
    branch_name: String,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct StashPushParam {
    repo_path: String,
    include_untracked: bool,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct CommitWorkingTreeParam {
    repo_path: String,
    message: String,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct StashIndexParam {
    repo_path: String,
    stash_index: u32,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct BranchNameParam {
    repo_path: String,
    #[serde(alias = "branch")]
    branch_name: String,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct MoveStashParam {
    repo_path: String,
    stash_index: u32,
    branch_name: String,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct PushBranchParam {
    repo_path: String,
    branch_name: String,
    #[serde(default)]
    target_sha: Option<String>,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct DeleteSelectedParam {
    repo_path: String,
    branch_names: Vec<String>,
    discard_uncommitted_changes: bool,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct MergeBranchesParam {
    repo_path: String,
    source_branch: String,
    target_branch: String,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct MergeRefParam {
    repo_path: String,
    source_ref: String,
    target_branch: String,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct GithubMergedPrsParam {
    owner: String,
    repo: String,
    base_branch: String,
    #[serde(default)]
    limit: Option<usize>,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct GithubRepoParam {
    owner: String,
    repo: String,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct GithubPrCommitsParam {
    owner: String,
    repo: String,
    pr_numbers: Vec<i64>,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct BranchDiffParam {
    repo_path: String,
    branch: String,
    base_branch: String,
    #[serde(default)]
    merge_commit_sha: Option<String>,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct BranchCommitsParam {
    repo_path: String,
    branch: String,
    base_branch: String,
    #[serde(default)]
    merge_commit_sha: Option<String>,
    #[serde(default)]
    include_prompts: Option<bool>,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct CommitDiffParam {
    repo_path: String,
    commit_sha: String,
    #[serde(default)]
    base_sha: Option<String>,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct DirectCommitsParam {
    repo_path: String,
    branch: String,
    #[serde(default)]
    limit: Option<u32>,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct RecentLogParam {
    repo_path: String,
    branch: String,
    #[serde(default)]
    limit: Option<u32>,
    #[serde(default)]
    first_parent: Option<bool>,
    #[serde(default)]
    include_prompts: Option<bool>,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct PreviewParam {
    repo_path: String,
    branch: String,
    port: u16,
    #[serde(default)]
    path: Option<String>,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct PreviewRoutesParam {
    repo_path: String,
    branch: String,
    port: u16,
    paths: Vec<String>,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct OpenPreviewBrowserParam {
    repo_path: String,
    branch: String,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct ChangedRoutesParam {
    repo_path: String,
    branch: String,
    base_branch: String,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct ChangedRoutesForCommitParam {
    repo_path: String,
    commit_sha: String,
    #[serde(default)]
    base_sha: Option<String>,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct DebugDiffFilesParam {
    repo_path: String,
    branch: String,
    base_branch: String,
}

pub fn handle_request_value(raw: Value) -> Value {
    let req: RpcRequest = match serde_json::from_value(raw) {
        Ok(value) => value,
        Err(err) => {
            return err_response(
                None,
                RpcError {
                    code: -32700,
                    message: "Parse error".to_string(),
                    data: Some(json!({ "details": err.to_string() })),
                },
            );
        }
    };

    if req.method != "system.handshake" && req.protocol_version != Some(PROTOCOL_VERSION) {
        return err_response(req.id, protocol_error(req.protocol_version));
    }

    let id = req.id.clone();
    let method = req.method;
    let params = req.params;

    let result = (|| -> Result<Value, RpcError> {
        match method.as_str() {
            "system.handshake" => Ok(json!({
                "protocolVersion": PROTOCOL_VERSION,
                "app": "git-visualizer-sidecar",
                "supportedMethods": supported_methods(),
            })),
            "get_home_dir" => get_home_dir().map(|home| json!(home)).map_err(method_error),
            "list_directory" => {
                let p: ListDirParam = parse_params(params)?;
                list_directory(p.path).map(|v| json!(v)).map_err(method_error)
            }
            "search_directories" => {
                let p: SearchDirectoriesParam = parse_params(params)?;
                search_directories(p.path, p.query, p.max_depth, p.limit)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "get_repo_info" => {
                let p: RepoPathParam = parse_params(params)?;
                get_repo_info(p.repo_path).map(|v| json!(v)).map_err(method_error)
            }
            "get_default_branch" => {
                let p: RepoPathParam = parse_params(params)?;
                get_default_branch(p.repo_path).map(|v| json!(v)).map_err(method_error)
            }
            "get_checked_out_ref" => {
                let p: RepoPathParam = parse_params(params)?;
                get_checked_out_ref(p.repo_path).map(|v| json!(v)).map_err(method_error)
            }
            "get_branches" => {
                let p: RepoPathParam = parse_params(params)?;
                get_branches(p.repo_path).map(|v| json!(v)).map_err(method_error)
            }
            "get_merge_nodes" => {
                let p: GetMergeNodesParam = parse_params(params)?;
                get_merge_nodes(p.repo_path, p.branch, p.page, p.per_page)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "get_direct_commits" => {
                let p: DirectCommitsParam = parse_params(params)?;
                get_direct_commits(p.repo_path, p.branch, p.limit)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "get_unpushed_direct_commits" => {
                let p: BranchNameParam = parse_params(params)?;
                get_unpushed_direct_commits(p.repo_path, p.branch_name)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "get_branch_unpushed_commit_shas" => {
                let p: BranchNameParam = parse_params(params)?;
                get_branch_unpushed_commit_shas(p.repo_path, p.branch_name)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "list_worktrees" => {
                let p: RepoPathParam = parse_params(params)?;
                list_worktrees(p.repo_path).map(|v| json!(v)).map_err(method_error)
            }
            "remove_worktree" => {
                let p: RemoveWorktreeParam = parse_params(params)?;
                remove_worktree(p.repo_path, p.worktree_path, p.force)
                    .map(|_| json!(null))
                    .map_err(method_error)
            }
            "checkout_ref" => {
                let p: CheckoutRefParam = parse_params(params)?;
                checkout_ref(p.repo_path, p.ref_name).map(|v| json!(v)).map_err(method_error)
            }
            "checkout_branch" => {
                let p: CheckoutBranchParam = parse_params(params)?;
                checkout_branch(p.repo_path, p.branch_name)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "list_stashes" => {
                let p: RepoPathParam = parse_params(params)?;
                list_stashes(p.repo_path).map(|v| json!(v)).map_err(method_error)
            }
            "stash_push" => {
                let p: StashPushParam = parse_params(params)?;
                stash_push(p.repo_path, p.include_untracked)
                    .map(|_| json!(null))
                    .map_err(method_error)
            }
            "commit_working_tree" => {
                let p: CommitWorkingTreeParam = parse_params(params)?;
                commit_working_tree(p.repo_path, p.message)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "stage_working_tree" => {
                let p: RepoPathParam = parse_params(params)?;
                stage_working_tree(p.repo_path).map(|v| json!(v)).map_err(method_error)
            }
            "apply_stash_restore" => {
                let p: StashIndexParam = parse_params(params)?;
                apply_stash_restore(p.repo_path, p.stash_index)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "stash_drop" => {
                let p: StashIndexParam = parse_params(params)?;
                stash_drop(p.repo_path, p.stash_index)
                    .map(|_| json!(null))
                    .map_err(method_error)
            }
            "create_branch_from_uncommitted" => {
                let p: BranchNameParam = parse_params(params)?;
                create_branch_from_uncommitted(p.repo_path, p.branch_name)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "move_stash_to_new_branch" => {
                let p: MoveStashParam = parse_params(params)?;
                move_stash_to_new_branch(p.repo_path, p.stash_index, p.branch_name)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "push_branch" => {
                let p: PushBranchParam = parse_params(params)?;
                push_branch(p.repo_path, p.branch_name, p.target_sha)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "push_current_branch" => {
                let p: RepoPathParam = parse_params(params)?;
                push_current_branch(p.repo_path).map(|v| json!(v)).map_err(method_error)
            }
            "push_all_unpushed_branches" => {
                let p: RepoPathParam = parse_params(params)?;
                push_all_unpushed_branches(p.repo_path)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "delete_selected_elements" => {
                let p: DeleteSelectedParam = parse_params(params)?;
                delete_selected_elements(p.repo_path, p.branch_names, p.discard_uncommitted_changes)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "merge_branches" => {
                let p: MergeBranchesParam = parse_params(params)?;
                merge_branches(p.repo_path, p.source_branch, p.target_branch)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "merge_ref_into_branch" => {
                let p: MergeRefParam = parse_params(params)?;
                merge_ref_into_branch(p.repo_path, p.source_ref, p.target_branch)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "get_github_info" => {
                let p: RepoPathParam = parse_params(params)?;
                get_github_info(p.repo_path).map(|v| json!(v)).map_err(method_error)
            }
            "get_github_auth_status" => get_github_auth_status()
                .map(|v| json!(v))
                .map_err(method_error),
            "authenticate_github" => authenticate_github()
                .map(|_| json!(null))
                .map_err(method_error),
            "get_merged_prs" => {
                let p: GithubMergedPrsParam = parse_params(params)?;
                get_merged_prs(p.owner, p.repo, p.base_branch, p.limit)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "get_open_prs" => {
                let p: GithubRepoParam = parse_params(params)?;
                get_open_prs(p.owner, p.repo).map(|v| json!(v)).map_err(method_error)
            }
            "get_pr_commits" => {
                let p: GithubPrCommitsParam = parse_params(params)?;
                get_pr_commits(p.owner, p.repo, p.pr_numbers)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "get_branch_diff" => {
                let p: BranchDiffParam = parse_params(params)?;
                get_branch_diff(p.repo_path, p.branch, p.base_branch, p.merge_commit_sha)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "get_branch_commits" => {
                let p: BranchCommitsParam = parse_params(params)?;
                get_branch_commits(
                    p.repo_path,
                    p.branch,
                    p.base_branch,
                    p.merge_commit_sha,
                    p.include_prompts,
                )
                .map(|v| json!(v))
                .map_err(method_error)
            }
            "get_commit_diff" => {
                let p: CommitDiffParam = parse_params(params)?;
                get_commit_diff(p.repo_path, p.commit_sha, p.base_sha)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "get_recent_log" => {
                let p: RecentLogParam = parse_params(params)?;
                get_recent_log(p.repo_path, p.branch, p.limit, p.first_parent, p.include_prompts)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "get_changed_routes" => {
                let p: ChangedRoutesParam = parse_params(params)?;
                get_changed_routes(p.repo_path, p.branch, p.base_branch)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "get_changed_routes_for_commit" => {
                let p: ChangedRoutesForCommitParam = parse_params(params)?;
                get_changed_routes_for_commit(p.repo_path, p.commit_sha, p.base_sha)
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "debug_diff_files" => {
                let p: DebugDiffFilesParam = parse_params(params)?;
                Ok(json!(debug_diff_files(p.repo_path, p.branch, p.base_branch)))
            }
            "generate_preview" => {
                let p: PreviewParam = parse_params(params)?;
                tauri::async_runtime::block_on(generate_preview(p.repo_path, p.branch, p.port, p.path))
                    .map(|v| json!(v))
                    .map_err(method_error)
            }
            "generate_preview_routes" => {
                let p: PreviewRoutesParam = parse_params(params)?;
                tauri::async_runtime::block_on(generate_preview_routes(
                    p.repo_path,
                    p.branch,
                    p.port,
                    p.paths,
                ))
                .map(|v| json!(v))
                .map_err(method_error)
            }
            "open_preview_browser" => {
                let p: OpenPreviewBrowserParam = parse_params(params)?;
                tauri::async_runtime::block_on(open_preview_browser(p.repo_path, p.branch))
                    .map(|_| json!(null))
                    .map_err(method_error)
            }
            "take_pending_open_repo" => Ok(json!(take_pending_open_repo())),
            "get_anthropic_key" => Ok(json!(get_anthropic_key())),
            _ => Err(not_found_error(&method)),
        }
    })();

    match result {
        Ok(payload) => ok_response(id, payload),
        Err(err) => err_response(id, err),
    }
}

pub fn run_stdio() -> Result<(), String> {
    let stdin = io::stdin();
    let mut stdout = io::stdout();

    for line in stdin.lock().lines() {
        let line = line.map_err(|e| e.to_string())?;
        if line.trim().is_empty() {
            continue;
        }

        let parsed: Value = match serde_json::from_str(&line) {
            Ok(v) => v,
            Err(err) => {
                let response = err_response(
                    None,
                    RpcError {
                        code: -32700,
                        message: "Parse error".to_string(),
                        data: Some(json!({ "details": err.to_string() })),
                    },
                );
                let encoded = serde_json::to_string(&response).map_err(|e| e.to_string())?;
                writeln!(stdout, "{encoded}").map_err(|e| e.to_string())?;
                stdout.flush().map_err(|e| e.to_string())?;
                continue;
            }
        };

        let response = handle_request_value(parsed);
        let encoded = serde_json::to_string(&response).map_err(|e| e.to_string())?;
        writeln!(stdout, "{encoded}").map_err(|e| e.to_string())?;
        stdout.flush().map_err(|e| e.to_string())?;
    }

    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    fn load_golden(name: &str) -> Value {
        let content = match name {
            "handshake" => include_str!("../tests/golden/sidecar_handshake.json"),
            "version_mismatch" => include_str!("../tests/golden/sidecar_version_mismatch.json"),
            _ => panic!("unknown fixture: {name}"),
        };
        serde_json::from_str(content).expect("valid fixture JSON")
    }

    #[test]
    fn handshake_matches_golden() {
        let req = json!({
            "jsonrpc": "2.0",
            "id": 1,
            "method": "system.handshake"
        });

        let mut actual = handle_request_value(req);
        let mut expected = load_golden("handshake");

        let methods_actual = actual["result"]["supportedMethods"].as_array_mut().unwrap();
        methods_actual.sort_by(|a, b| a.as_str().cmp(&b.as_str()));
        let methods_expected = expected["result"]["supportedMethods"].as_array_mut().unwrap();
        methods_expected.sort_by(|a, b| a.as_str().cmp(&b.as_str()));

        assert_eq!(actual, expected);
    }

    #[test]
    fn version_mismatch_matches_golden() {
        let req = json!({
            "jsonrpc": "2.0",
            "id": 7,
            "method": "get_home_dir",
            "protocolVersion": 999,
            "params": {}
        });

        let actual = handle_request_value(req);
        let expected = load_golden("version_mismatch");
        assert_eq!(actual, expected);
    }

    #[test]
    fn unknown_method_returns_not_found() {
        let req = json!({
            "jsonrpc": "2.0",
            "id": "abc",
            "method": "nope",
            "protocolVersion": PROTOCOL_VERSION,
            "params": {}
        });

        let actual = handle_request_value(req);
        assert_eq!(actual["error"]["code"], -32601);
    }
}
