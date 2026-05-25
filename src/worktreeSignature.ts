import type { WorktreeInfo } from '../types';
import type { WorktreeSession } from '../lib/worktreeSessions';

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

/** Layout cache input — anchor geometry only; dirty is visual-only on the canvas. */
export function formatWorktreeSessionLayoutSignature(sessions: WorktreeSession[]): string {
  return sessions
    .map(
      (session) =>
        `${session.path}:${session.headSha}:${session.parentSha ?? ''}:${session.branchName ?? ''}`,
    )
    .sort()
    .join('|');
}
