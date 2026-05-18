import { CARD_BODY_TOP_OFFSET, CARD_HEIGHT, CARD_WIDTH, type Node } from './LayoutGrid';
import { computeMapGridCardSlotCap, GRID_RENDER_ZOOM } from './mapGridUtils';
import { getNodePositionOverride } from './nodePositionOverrides';
import type { NodePositionOverrides } from './LayoutGrid';

type DragPreviewByVisualId = Record<string, { x: number; y: number }>;

export type MapGridCardSlotAssignment = {
  node: Node;
  cardLeft: number;
  cardTop: number;
} | null;

export function computeMapGridCardSlotCount(
  viewportWidth: number,
  viewportHeight: number,
  displayZoom: number,
): number {
  const slotCap = computeMapGridCardSlotCap(displayZoom);
  if (viewportWidth <= 0 || viewportHeight <= 0) {
    return slotCap;
  }
  const scale = displayZoom / GRID_RENDER_ZOOM;
  const cardW = CARD_WIDTH * scale;
  const cardH = (CARD_BODY_TOP_OFFSET + CARD_HEIGHT + 4) * scale;
  const cardArea = Math.max(1, cardW * cardH);
  const fillFactor = displayZoom <= 0.35 ? 1 : 1.5;
  const estimate = Math.ceil((viewportWidth * viewportHeight) / cardArea) * fillFactor;
  const minSlots = displayZoom <= 0.35 ? 12 : 16;
  return Math.max(minSlots, Math.min(slotCap, estimate));
}

const resolveCardPosition = (
  node: Node,
  dragPreviewByNodeId: DragPreviewByVisualId,
  nodePositionOverrides: NodePositionOverrides,
): { cardLeft: number; cardTop: number } => {
  const dragPreview = dragPreviewByNodeId[node.commit.visualId];
  if (dragPreview) {
    return { cardLeft: dragPreview.x, cardTop: dragPreview.y };
  }
  const persisted = getNodePositionOverride(nodePositionOverrides, node.commit);
  if (persisted) {
    return { cardLeft: persisted.x, cardTop: persisted.y };
  }
  return { cardLeft: node.x, cardTop: node.y };
};

const viewportDistanceSq = (cardLeft: number, cardTop: number, centerX: number, centerY: number): number => {
  const cx = cardLeft + CARD_WIDTH / 2;
  const cy = cardTop + CARD_BODY_TOP_OFFSET + CARD_HEIGHT / 2;
  const dx = cx - centerX;
  const dy = cy - centerY;
  return dx * dx + dy * dy;
};

export function buildMapGridCardSlotAssignments(
  slotCount: number,
  visibleNodes: readonly Node[],
  dragPreviewByNodeId: NodePositionOverrides,
  nodePositionOverrides: NodePositionOverrides,
  viewportCenterX: number,
  viewportCenterY: number,
): MapGridCardSlotAssignment[] {
  const slots: MapGridCardSlotAssignment[] = Array.from({ length: slotCount }, () => null);
  if (visibleNodes.length === 0) {
    return slots;
  }

  const ranked = visibleNodes
    .map((node) => {
      const { cardLeft, cardTop } = resolveCardPosition(node, dragPreviewByNodeId, nodePositionOverrides);
      return {
        node,
        cardLeft,
        cardTop,
        distanceSq: viewportDistanceSq(cardLeft, cardTop, viewportCenterX, viewportCenterY),
      };
    })
    .sort((a, b) => a.distanceSq - b.distanceSq);

  const limit = Math.min(slotCount, ranked.length);
  for (let i = 0; i < limit; i += 1) {
    const entry = ranked[i]!;
    slots[i] = { node: entry.node, cardLeft: entry.cardLeft, cardTop: entry.cardTop };
  }
  return slots;
}

/** Keep the nearest `maxCount` commits to the viewport center. */
export function pickNearestVisibleVisualIds(
  candidateIds: ReadonlySet<string>,
  maxCount: number,
  nodeByVisualId: ReadonlyMap<string, Node>,
  viewportCenterX: number,
  viewportCenterY: number,
  nodePositionOverrides: NodePositionOverrides = {},
  dragPreviewByNodeId: DragPreviewByVisualId = {},
): Set<string> {
  if (!Number.isFinite(maxCount) || candidateIds.size <= maxCount) {
    return new Set(candidateIds);
  }

  const ranked: Array<{ id: string; distanceSq: number }> = [];
  for (const id of candidateIds) {
    const node = nodeByVisualId.get(id);
    if (!node) continue;
    const { cardLeft, cardTop } = resolveCardPosition(node, dragPreviewByNodeId, nodePositionOverrides);
    ranked.push({
      id,
      distanceSq: viewportDistanceSq(cardLeft, cardTop, viewportCenterX, viewportCenterY),
    });
  }
  ranked.sort((a, b) => a.distanceSq - b.distanceSq);

  const next = new Set<string>();
  for (let i = 0; i < maxCount && i < ranked.length; i += 1) {
    next.add(ranked[i]!.id);
  }
  return next;
}
