pub mod cli;
mod branches;
mod commits;

pub use branches::{Branch, CheckedOutRef, get_checked_out_ref, get_default_branch, get_repo_info, list_branches};
pub use commits::{DirectCommit, MergeNode, get_direct_commits, get_merge_commits};
