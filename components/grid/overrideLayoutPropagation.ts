import {
  COLUMN_WIDTH,
  LEFT_PADDING,
  TOP_PADDING,
  type Node,
  type NodePositionOverrides,
} from './LayoutGrid';
import { getNodePositionOverride } from './nodePositionOverrides';

export type OverrideLayoutMetrics = {
  isHorizontal: boolean;
  timelineRowLeadOffset: number;
  zoomAwareTimelinePitch: number;
  zoomAwareLanePitch: number;
  maxResolvedRow: number;
};

/** Snap a dragged pixel position to the nearest logical row/column for layout math. */
export const inferLayoutIndicesFromOverride = (
  x: number,
  y: number,
  metrics: OverrideLayoutMetrics,
): { row: number; column: number } => {
  const { isHorizontal, timelineRowLeadOffset, zoomAwareTimelinePitch, zoomAwareLanePitch, maxResolvedRow } =
    metrics;
  if (isHorizontal) {
    const row =
      zoomAwareTimelinePitch > 0
        ? Math.max(
            1,
            Math.round((x - LEFT_PADDING) / zoomAwareTimelinePitch - timelineRowLeadOffset + 1),
          )
        : 1;
    const column =
      zoomAwareLanePitch > 0
        ? Math.max(0, Math.round((y - TOP_PADDING) / zoomAwareLanePitch))
        : 0;
    return { row, column };
  }
  const column =
    COLUMN_WIDTH > 0 ? Math.max(0, Math.round((x - LEFT_PADDING) / COLUMN_WIDTH)) : 0;
  const row =
    zoomAwareTimelinePitch > 0
      ? Math.max(
          1,
          Math.round(maxResolvedRow - (y - TOP_PADDING) / zoomAwareTimelinePitch),
        )
      : 1;
  return { row, column };
};

export const layoutIndicesForOverride = (
  override: { row?: number; column?: number; x?: number; y?: number },
  metrics: OverrideLayoutMetrics,
): { row: number; column: number } => {
  if (Number.isFinite(override.row) && Number.isFinite(override.column)) {
    return {
      row: Math.max(1, Math.round(override.row!)),
      column: Math.max(0, Math.round(override.column!)),
    };
  }
  return inferLayoutIndicesFromOverride(override.x ?? 0, override.y ?? 0, metrics);
};

/** Apply persisted logical anchors without translating adjacent or descendant nodes. */
export const propagateOverrideRelativeLayout = ({
  renderNodes,
  overrides,
  metrics,
}: {
  renderNodes: Node[];
  overrides: NodePositionOverrides;
  metrics: OverrideLayoutMetrics;
}): void => {
  if (renderNodes.length === 0) return;

  for (const node of renderNodes) {
    const override = getNodePositionOverride(overrides, node.commit);
    if (!override) continue;
    const indices = layoutIndicesForOverride(override, metrics);
    node.row = indices.row;
    node.column = indices.column;
  }
};

export const resolveOverrideAwareNodeCollisions = ({
  renderNodes,
  overrides,
  isPinnedNode,
}: {
  renderNodes: Node[];
  overrides: NodePositionOverrides;
  isPinnedNode?: (node: Node) => boolean;
}): void => {
  if (renderNodes.length <= 1) return;

  const occupied = new Set<string>();
  const hasOverride = (node: Node): boolean =>
    Boolean(getNodePositionOverride(overrides, node.commit)) || Boolean(isPinnedNode?.(node));
  const keyFor = (row: number, column: number): string => `${row}:${column}`;
  const orderedNodes = [...renderNodes].sort((left, right) => {
    const leftPinned = hasOverride(left);
    const rightPinned = hasOverride(right);
    if (leftPinned !== rightPinned) return leftPinned ? -1 : 1;
    if (left.row !== right.row) return left.row - right.row;
    if (left.column !== right.column) return left.column - right.column;
    return left.commit.visualId.localeCompare(right.commit.visualId);
  });

  for (const node of orderedNodes) {
    if (hasOverride(node)) {
      occupied.add(keyFor(node.row, node.column));
      continue;
    }

    let column = node.column;
    while (occupied.has(keyFor(node.row, column))) column += 1;
    node.column = column;
    occupied.add(keyFor(node.row, column));
  }
};
