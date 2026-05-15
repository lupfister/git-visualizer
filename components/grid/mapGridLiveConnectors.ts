import type { Connector, Node, NodePositionOverrides } from './LayoutGrid';
import { computeMergeConnectorAnchors, computeParentChildConnectorAnchors } from './branchGridConnectorAnchors';

const nodeWithEffectivePosition = (
  node: Node,
  nodePositionOverrides: NodePositionOverrides,
  dragPreviewByNodeId: NodePositionOverrides,
): Node => {
  const visualId = node.commit.visualId;
  const drag = dragPreviewByNodeId[visualId];
  const persisted = nodePositionOverrides[visualId];
  const o = drag ?? persisted;
  if (!o) return node;
  return { ...node, x: o.x, y: o.y };
};

/** Recompute connector anchor geometry from layout nodes + drag preview (no full grid layout). */
export const connectorsWithEffectivePositions = (
  connectors: Connector[],
  renderNodes: Node[],
  dragPreviewByNodeId: NodePositionOverrides,
  nodePositionOverrides: NodePositionOverrides,
  isHorizontal: boolean,
): Connector[] => {
  if (Object.keys(dragPreviewByNodeId).length === 0) return connectors;

  const nodeByVisualId = new Map<string, Node>();
  for (const n of renderNodes) {
    nodeByVisualId.set(n.commit.visualId, n);
  }

  return connectors.map((c) => {
    if (!c.fromCommitVisualId || !c.toCommitVisualId) return c;
    const baseFrom = nodeByVisualId.get(c.fromCommitVisualId);
    const baseTo = nodeByVisualId.get(c.toCommitVisualId);
    if (!baseFrom || !baseTo) return c;

    const from = nodeWithEffectivePosition(baseFrom, nodePositionOverrides, dragPreviewByNodeId);
    const to = nodeWithEffectivePosition(baseTo, nodePositionOverrides, dragPreviewByNodeId);
    if (from.x === baseFrom.x && from.y === baseFrom.y && to.x === baseTo.x && to.y === baseTo.y) {
      return c;
    }

    if (c.connectorEdgeKind === 'merge') {
      const a = computeMergeConnectorAnchors(isHorizontal, from, to);
      return { ...c, ...a };
    }
    const a = computeParentChildConnectorAnchors(isHorizontal, c.useBranchFeedAnchors ?? false, from, to);
    return { ...c, ...a };
  });
};
