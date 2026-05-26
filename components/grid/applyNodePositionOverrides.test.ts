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
    assignNodePositionOverride(overrides, member, { x: 200, y: 300 });

    const leadNode = nodeFor(lead, 1, 0);
    const memberNode = nodeFor(member, 3, 0);
    const renderNodes = [leadNode, memberNode];

    applyNodePositionOverrides({
      renderNodes,
      allCommitsWithClusters: [lead, member],
      clusterKeyByCommitId,
      leadByClusterKey,
      rowByVisualId,
      overrides,
      isHorizontal: false,
      zoomAwareTimelinePitch: 40,
    });

    expect(leadNode.x).toBe(200);
    expect(leadNode.y).toBe(300);
    expect(memberNode.x).toBe(200);
    expect(memberNode.y).toBe(300);
  });
});
