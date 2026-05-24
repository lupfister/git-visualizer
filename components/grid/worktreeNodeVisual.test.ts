import { describe, expect, it } from 'vitest';
import {
  resolveWorktreeCommitTileShapeCssVar,
  shouldAnimateWorktreeNode,
} from '../../lib/worktreeSessions';

describe('shouldAnimateWorktreeNode', () => {
  it('animates only when the session has uncommitted changes', () => {
    expect(shouldAnimateWorktreeNode({ hasUncommittedChanges: false })).toBe(false);
    expect(shouldAnimateWorktreeNode({ hasUncommittedChanges: true })).toBe(true);
  });
});

describe('resolveWorktreeCommitTileShapeCssVar', () => {
  it('keeps worktree accent when the node is selected', () => {
    expect(
      resolveWorktreeCommitTileShapeCssVar(true, 'worktree-violet', true, true),
    ).toBe('--worktree-violet-muted');
    expect(
      resolveWorktreeCommitTileShapeCssVar(false, 'worktree-violet', true, true),
    ).toBe('--select-muted');
  });
});
