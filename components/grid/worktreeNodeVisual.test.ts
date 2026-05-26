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
  it('uses select accent when selected, worktree accent otherwise', () => {
    expect(
      resolveWorktreeCommitTileShapeCssVar('worktree-violet', true, true),
    ).toBe('--select-muted');
    expect(
      resolveWorktreeCommitTileShapeCssVar('worktree-violet', false, true),
    ).toBe('--worktree-violet-muted');
    expect(
      resolveWorktreeCommitTileShapeCssVar(null, true, true),
    ).toBe('--select-muted');
  });
});
