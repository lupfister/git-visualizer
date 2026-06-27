import { describe, expect, it } from 'vitest';
import type { Node, VisualCommit } from './LayoutGrid';
import { assignNodePositionOverride } from './nodePositionOverrides';
import { applyNodePositionOverrides } from './applyNodePositionOverrides';

const commit = (overrides: Partial<VisualCommit> = {}): VisualCommit => ({
  id: 'sha1',
  visualId: 'main:sha1',
  branchName: 'main',
  message: 'm',
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

describe('applyNodePositionOverrides', () => {
  it('inherits collapsed-clump position from the member on the highest row', () => {
    const lead = commit({ id: 'lead', visualId: 'main:lead' });
    const member = commit({ id: 'member', visualId: 'main:member' });
    const clusterKey = 'main:cluster';
    const clusterKeyByCommitId = new Map([
      [lead.visualId, clusterKey],
      [member.visualId, clusterKey],
    ]);
    const leadByClusterKey = new Map([[clusterKey, lead.visualId]]);
    const rowByVisualId = new Map([
      [lead.visualId, 1],
      [member.visualId, 3],
    ]);
    const overrides = {};
    assignNodePositionOverride(overrides, member, { row: 4, column: 2 });

    const leadNode = nodeFor(lead, 1, 0);
    const renderNodes = [leadNode];

    applyNodePositionOverrides({
      renderNodes,
      allCommitsWithClusters: [lead, member],
      clusterKeyByCommitId,
      leadByClusterKey,
      rowByVisualId,
      overrides,
      isHorizontal: false,
      zoomAwareTimelinePitch: 40,
      zoomAwareLanePitch: 120,
      maxResolvedRow: 3,
    });

    expect(leadNode.row).toBe(4);
    expect(leadNode.column).toBe(2);
  });

  it('ignores overrides with isMigratedWorktree: true if the clump is collapsed', () => {
    const lead = commit({ id: 'lead', visualId: 'main:lead' });
    const member = commit({ id: 'member', visualId: 'main:member' });
    const clusterKey = 'main:cluster';
    const clusterKeyByCommitId = new Map([
      [lead.visualId, clusterKey],
      [member.visualId, clusterKey],
    ]);
    const leadByClusterKey = new Map([[clusterKey, lead.visualId]]);
    const rowByVisualId = new Map([
      [lead.visualId, 1],
      [member.visualId, 3],
    ]);
    const overrides = {};
    assignNodePositionOverride(overrides, lead, { row: 4, column: 2, isMigratedWorktree: true });

    // Collapsed clump: only 1 node in the cluster (the lead) is rendered
    const leadNode = nodeFor(lead, 1, 0);
    const renderNodes = [leadNode];

    applyNodePositionOverrides({
      renderNodes,
      allCommitsWithClusters: [lead, member],
      clusterKeyByCommitId,
      leadByClusterKey,
      rowByVisualId,
      overrides,
      isHorizontal: false,
      zoomAwareTimelinePitch: 40,
      zoomAwareLanePitch: 120,
      maxResolvedRow: 3,
    });

    // Since the override is a migrated worktree override and the clump is collapsed, it is ignored
    expect(leadNode.row).toBe(1);
    expect(leadNode.column).toBe(0);
  });
});
