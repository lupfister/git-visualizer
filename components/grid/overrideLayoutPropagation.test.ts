import { describe, expect, it } from 'vitest';
import type { Node, VisualCommit } from './LayoutGrid';
import { COLUMN_WIDTH, LEFT_PADDING, TOP_PADDING } from './LayoutGrid';
import { assignNodePositionOverride } from './nodePositionOverrides';
import {
  inferLayoutIndicesFromOverride,
  propagateOverrideRelativeLayout,
  resolveOverrideAwareNodeCollisions,
} from './overrideLayoutPropagation';

const commit = (overrides: Partial<VisualCommit> = {}): VisualCommit => ({
  id: 'sha-parent',
  visualId: 'main:sha-parent',
  branchName: 'main',
  message: 'parent',
  author: 'a',
  date: '2024-01-01T00:00:00Z',
  parentSha: null,
  parentShas: [],
  ...overrides,
});

const nodeFor = (visualCommit: VisualCommit, row: number, column: number): Node => ({
  commit: visualCommit,
  row,
  column,
  x: 0,
  y: 0,
});

describe('overrideLayoutPropagation', () => {
  const verticalMetrics = {
    isHorizontal: false,
    timelineRowLeadOffset: 0,
    zoomAwareTimelinePitch: 40,
    zoomAwareLanePitch: 120,
    maxResolvedRow: 5,
  };

  it('infers row/column from a vertical drag position', () => {
    const indices = inferLayoutIndicesFromOverride(
      LEFT_PADDING + 2 * COLUMN_WIDTH,
      TOP_PADDING + (5 - 2) * 40,
      verticalMetrics,
    );
    expect(indices).toEqual({ row: 2, column: 2 });
  });

  it('anchors only the dragged parent', () => {
    const parent = commit({ id: 'parent', visualId: 'main:parent' });
    const child = commit({
      id: 'child',
      visualId: 'main:child',
      parentSha: 'parent',
      parentShas: ['parent'],
    });
    const parentNode = nodeFor(parent, 1, 0);
    const childNode = nodeFor(child, 2, 0);
    const overrides = {};
    assignNodePositionOverride(overrides, parent, {
      x: LEFT_PADDING,
      y: TOP_PADDING + (5 - 4) * 40,
    });

    propagateOverrideRelativeLayout({
      renderNodes: [parentNode, childNode],
      overrides,
      metrics: { ...verticalMetrics, maxResolvedRow: 5 },
    });

    expect(parentNode.row).toBe(4);
    expect(childNode.row).toBe(2);
    expect(childNode.column).toBe(0);
  });

  it('moves unpinned nodes out of overridden node slots', () => {
    const pinned = commit({ id: 'pinned', visualId: 'main:pinned' });
    const newWorktree = commit({
      id: 'WORKTREE:/repo/worktree',
      visualId: 'feature:WORKTREE:/repo/worktree',
      branchName: 'feature',
      kind: 'uncommitted',
    });
    const pinnedNode = nodeFor(pinned, 4, 2);
    const worktreeNode = nodeFor(newWorktree, 4, 2);
    const overrides = {};
    assignNodePositionOverride(overrides, pinned, { row: 4, column: 2 });

    resolveOverrideAwareNodeCollisions({
      renderNodes: [worktreeNode, pinnedNode],
      overrides,
    });

    expect(pinnedNode.column).toBe(2);
    expect(worktreeNode.row).toBe(4);
    expect(worktreeNode.column).toBe(3);
  });
});
