pub mod cli;
mod branches;
mod commits;
mod stash;
mod worktrees;

pub use branches::{Branch, CheckedOutRef, get_checked_out_ref, get_default_branch, get_repo_info, list_branches};
pub use stash::{
    GitStashEntry, apply_stash_restore, create_branch_from_uncommitted, create_root_branch,
    list_stashes, move_stash_to_new_branch, stash_drop, stash_push,
};
pub use commits::{
    DirectCommit, MergeNode, commit_working_tree, get_all_repo_commits, get_direct_commits,
    get_merge_commits, stage_working_tree,
};
pub use worktrees::{WorktreeInfo, list_worktrees, remove_worktree as remove_git_worktree};
