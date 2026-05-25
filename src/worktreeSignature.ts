import type { WorktreeInfo } from '../types';

/** Matches Rust `worktree_sig` in repo fingerprint and sync peek. */
export function formatWorktreeSyncSignature(worktrees: WorktreeInfo[]): string {
  return worktrees
    .map(
      (worktree) =>
        `${worktree.path}:${worktree.headSha}:${worktree.branchName ?? ''}:${worktree.hasUncommittedChanges ? '1' : '0'}`,
    )
    .sort()
    .join('|');
}
