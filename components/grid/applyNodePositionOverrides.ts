import { COLUMN_WIDTH, type Node, type NodePositionOverrides, type VisualCommit } from './LayoutGrid';
import { getNodePositionOverride } from './nodePositionOverrides';

export type ApplyNodePositionOverridesInput = {
  renderNodes: Node[];
  allCommitsWithClusters: VisualCommit[];
  clusterKeyByCommitId: Map<string, string>;
  leadByClusterKey: Map<string, string>;
  rowByVisualId: Map<string, number>;
  overrides: NodePositionOverrides;
  isHorizontal: boolean;
  zoomAwareTimelinePitch: number;
};

type ClusterDragAnchor = { node: Node; x: number; y: number };

/**
 * Applies persisted drag positions. Collapsed clumps inherit the override from the member
 * on the highest timeline row (newest in layout order); non-lead members offset from the lead.
 */
export const applyNodePositionOverrides = ({
  renderNodes,
  allCommitsWithClusters,
  clusterKeyByCommitId,
  leadByClusterKey,
  rowByVisualId,
  overrides,
  isHorizontal,
  zoomAwareTimelinePitch,
}: ApplyNodePositionOverridesInput): void => {
  const bestOverrideByClusterKey = new Map<string, { x: number; y: number; row: number }>();
  for (const commit of allCommitsWithClusters) {
    const clusterKey = clusterKeyByCommitId.get(commit.visualId);
    if (!clusterKey) continue;
    const override = getNodePositionOverride(overrides, commit);
    if (!override) continue;
    const row = rowByVisualId.get(commit.visualId) ?? 0;
    const current = bestOverrideByClusterKey.get(clusterKey);
    if (!current || row > current.row) {
      bestOverrideByClusterKey.set(clusterKey, { x: override.x, y: override.y, row });
    }
  }

  const clusterDragAnchorByKey = new Map<string, ClusterDragAnchor>();
  for (const node of renderNodes) {
    const clusterKey = clusterKeyByCommitId.get(node.commit.visualId);
    if (!clusterKey) continue;
    if (leadByClusterKey.get(clusterKey) !== node.commit.visualId) continue;
    const directOverride = getNodePositionOverride(overrides, node.commit);
    if (directOverride) {
      clusterDragAnchorByKey.set(clusterKey, { node, x: directOverride.x, y: directOverride.y });
      continue;
    }
    const inherited = bestOverrideByClusterKey.get(clusterKey);
    if (!inherited) continue;
    clusterDragAnchorByKey.set(clusterKey, { node, x: inherited.x, y: inherited.y });
  }

  for (const node of renderNodes) {
    const override = getNodePositionOverride(overrides, node.commit);
    if (override) {
      node.x = override.x;
      node.y = override.y;
      continue;
    }
    const clusterKey = clusterKeyByCommitId.get(node.commit.visualId);
    const anchor = clusterKey ? clusterDragAnchorByKey.get(clusterKey) : null;
    if (!anchor) continue;
    if (isHorizontal) {
      node.x = anchor.x + (node.row - anchor.node.row) * zoomAwareTimelinePitch;
      continue;
    }
    node.x = anchor.x + (node.column - anchor.node.column) * COLUMN_WIDTH;
    node.y = anchor.y - (node.row - anchor.node.row) * zoomAwareTimelinePitch;
  }
};
