import { COLUMN_WIDTH, type Node, type NodePositionOverrides, type VisualCommit } from './LayoutGrid';
import { getNodePositionOverride } from './nodePositionOverrides';
import {
  layoutIndicesForOverride,
  type OverrideLayoutMetrics,
} from './overrideLayoutPropagation';

export type ApplyNodePositionOverridesInput = {
  renderNodes: Node[];
  allCommitsWithClusters: VisualCommit[];
  clusterKeyByCommitId: Map<string, string>;
  leadByClusterKey: Map<string, string>;
  rowByVisualId: Map<string, number>;
  overrides: NodePositionOverrides;
  isHorizontal: boolean;
  zoomAwareTimelinePitch: number;
  timelineRowLeadOffset?: number;
  zoomAwareLanePitch?: number;
  maxResolvedRow?: number;
};

type ClusterDragAnchor = { node: Node };

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
  timelineRowLeadOffset = 0,
  zoomAwareLanePitch = COLUMN_WIDTH,
  maxResolvedRow = 0,
}: ApplyNodePositionOverridesInput): void => {
  const layoutMetrics: OverrideLayoutMetrics = {
    isHorizontal,
    timelineRowLeadOffset,
    zoomAwareTimelinePitch,
    zoomAwareLanePitch,
    maxResolvedRow: Math.max(
      maxResolvedRow,
      ...renderNodes.map((node) => node.row),
      1,
    ),
  };

  const bestOverrideByClusterKey = new Map<string, { override: NodePositionOverrides[string]; row: number }>();
  for (const commit of allCommitsWithClusters) {
    const clusterKey = clusterKeyByCommitId.get(commit.visualId);
    if (!clusterKey) continue;
    const override = getNodePositionOverride(overrides, commit);
    if (!override) continue;
    const row = rowByVisualId.get(commit.visualId) ?? 0;
    const current = bestOverrideByClusterKey.get(clusterKey);
    if (!current || row > current.row) {
      bestOverrideByClusterKey.set(clusterKey, { override, row });
    }
  }

  const clusterDragAnchorByKey = new Map<string, ClusterDragAnchor>();
  for (const node of renderNodes) {
    const clusterKey = clusterKeyByCommitId.get(node.commit.visualId);
    if (!clusterKey) continue;
    if (leadByClusterKey.get(clusterKey) !== node.commit.visualId) continue;
    const directOverride = getNodePositionOverride(overrides, node.commit);
    if (directOverride) {
      const indices = layoutIndicesForOverride(directOverride, layoutMetrics);
      node.row = indices.row;
      node.column = indices.column;
      clusterDragAnchorByKey.set(clusterKey, { node });
      continue;
    }
    const inherited = bestOverrideByClusterKey.get(clusterKey);
    if (!inherited) continue;
    const indices = layoutIndicesForOverride(inherited.override, layoutMetrics);
    node.row = indices.row;
    node.column = indices.column;
    clusterDragAnchorByKey.set(clusterKey, { node });
  }

  for (const node of renderNodes) {
    const override = getNodePositionOverride(overrides, node.commit);
    if (override) {
      const indices = layoutIndicesForOverride(override, layoutMetrics);
      node.row = indices.row;
      node.column = indices.column;
      continue;
    }
    const clusterKey = clusterKeyByCommitId.get(node.commit.visualId);
    const anchor = clusterKey ? clusterDragAnchorByKey.get(clusterKey) : null;
    if (!anchor) continue;
    if (isHorizontal) node.row = Math.max(node.row, anchor.node.row);
    else node.column = Math.max(node.column, anchor.node.column);
  }
};
