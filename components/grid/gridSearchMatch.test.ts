import { describe, expect, it } from 'vitest';
import type { Node } from './LayoutGrid';
import { deriveGridSearchMatch } from './gridSearchMatch';

const node = (id: string, message: string, branchName: string): Node => ({
  commit: {
    id,
    visualId: `main:${id}`,
    branchName,
    message,
    author: '',
    date: '2026-01-01T00:00:00.000Z',
    parentSha: null,
    parentShas: [],
    childShas: [],
    clusterKey: null,
  },
  row: 1,
  column: 0,
  x: 0,
  y: 0,
});

describe('deriveGridSearchMatch', () => {
  it('matches worktree temp commit title from draft labels', () => {
    const nodes = [node('WORKING_TREE', '', 'main')];
    const draftLabels = new Map([['WORKING_TREE', 'Add grid search for drafts']]);
    const match = deriveGridSearchMatch(nodes, 'grid search', draftLabels);
    expect(match.matchingNodes).toHaveLength(1);
    expect(match.matchingNodeIds.has('WORKING_TREE')).toBe(true);
  });

  it('does not match draft-only text without draft labels map', () => {
    const nodes = [node('WORKING_TREE', '', 'main')];
    const match = deriveGridSearchMatch(nodes, 'grid search');
    expect(match.matchingNodes).toHaveLength(0);
  });
});
