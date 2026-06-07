import { CARD_BODY_TOP_OFFSET, CARD_HEIGHT, CARD_WIDTH, type Node } from './LayoutGrid';
import { computeMapGridCardSlotCap, GRID_RENDER_ZOOM, MAP_GRID_MIN_CARD_SLOTS } from './mapGridUtils';
import { getNodePositionOverride } from './nodePositionOverrides';
import type { NodePositionOverrides } from './LayoutGrid';

type DragPreviewByVisualId = Record<string, { x: number; y: number }>;

export type MapGridCardSlotAssignment = {
  node: Node;
  cardLeft: number;
  cardTop: number;
};

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
  return Math.max(MAP_GRID_MIN_CARD_SLOTS, Math.min(slotCap, estimate));
}

const resolveCardPosition = (
  node: Node,
  dragPreviewByNodeId: DragPreviewByVisualId,
  nodePositionOverrides: NodePositionOverrides,
  ignorePersistedOverrideVisualIds?: ReadonlySet<string>,
): { cardLeft: number; cardTop: number } => {
  const dragPreview = dragPreviewByNodeId[node.commit.visualId];
  if (dragPreview) {
    return { cardLeft: dragPreview.x, cardTop: dragPreview.y };
  }
  if (ignorePersistedOverrideVisualIds?.has(node.commit.visualId)) {
    return { cardLeft: node.x, cardTop: node.y };
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
  stickyVisualIdOrder: readonly string[] = [],
  ignorePersistedOverrideVisualIds?: ReadonlySet<string>,
): MapGridCardSlotAssignment[] {
  if (visibleNodes.length === 0 || slotCount <= 0) {
    return [];
  }

  const visibleByVisualId = new Map(visibleNodes.map((node) => [node.commit.visualId, node] as const));
  const assignments: MapGridCardSlotAssignment[] = [];
  const assigned = new Set<string>();

  const pushNode = (node: Node) => {
    const { cardLeft, cardTop } = resolveCardPosition(
      node,
      dragPreviewByNodeId,
      nodePositionOverrides,
      ignorePersistedOverrideVisualIds,
    );
    if (!Number.isFinite(cardLeft) || !Number.isFinite(cardTop)) return;
    assignments.push({ node, cardLeft, cardTop });
    assigned.add(node.commit.visualId);
  };

  for (const visualId of stickyVisualIdOrder) {
    if (assignments.length >= slotCount) break;
    if (assigned.has(visualId)) continue;
    const node = visibleByVisualId.get(visualId);
    if (!node) continue;
    pushNode(node);
  }

  const ranked = visibleNodes
    .filter((node) => !assigned.has(node.commit.visualId))
    .map((node) => {
      const { cardLeft, cardTop } = resolveCardPosition(
        node,
        dragPreviewByNodeId,
        nodePositionOverrides,
        ignorePersistedOverrideVisualIds,
      );
      return {
        node,
        distanceSq: viewportDistanceSq(cardLeft, cardTop, viewportCenterX, viewportCenterY),
      };
    })
    .sort((a, b) => a.distanceSq - b.distanceSq);

  for (const entry of ranked) {
    if (assignments.length >= slotCount) break;
    pushNode(entry.node);
  }

  return assignments;
}

/** Keep the nearest `maxCount` commits to the viewport center (O(n·k), no full sort). */
export function pickNearestVisibleVisualIds(
  candidateIds: ReadonlySet<string>,
  maxCount: number,
  nodeByVisualId: ReadonlyMap<string, Node>,
  viewportCenterX: number,
  viewportCenterY: number,
  nodePositionOverrides: NodePositionOverrides = {},
  dragPreviewByNodeId: DragPreviewByVisualId = {},
): Set<string> {
  if (!Number.isFinite(maxCount) || maxCount <= 0) {
    return new Set();
  }
  if (candidateIds.size <= maxCount) {
    return new Set(candidateIds);
  }

  const cap = Math.floor(maxCount);
  const farthest: Array<{ id: string; distanceSq: number }> = [];

  const consider = (id: string, distanceSq: number) => {
    if (farthest.length < cap) {
      farthest.push({ id, distanceSq });
      if (farthest.length === cap) {
        farthest.sort((a, b) => b.distanceSq - a.distanceSq);
      }
      return;
    }
    if (distanceSq >= farthest[0]!.distanceSq) return;
    farthest[0] = { id, distanceSq };
    farthest.sort((a, b) => b.distanceSq - a.distanceSq);
  };

  for (const id of candidateIds) {
    const node = nodeByVisualId.get(id);
    if (!node) continue;
    const { cardLeft, cardTop } = resolveCardPosition(node, dragPreviewByNodeId, nodePositionOverrides);
    consider(id, viewportDistanceSq(cardLeft, cardTop, viewportCenterX, viewportCenterY));
  }

  return new Set(farthest.map((entry) => entry.id));
}

/**
 * While panning: keep in-viewport ids, evict at most `maxEvictPerTick` farthest when
 * over `maxCount`, admit at most `admissionBudget` nearest newcomers. Full cap trim on settle.
 */
export function mergePanStableVisibleNodeIds(
  prev: ReadonlySet<string>,
  spatiallyVisible: ReadonlySet<string>,
  nearestCandidates: ReadonlySet<string>,
  admissionBudget: number,
  maxCount: number,
  maxEvictPerTick: number,
  nodeByVisualId: ReadonlyMap<string, Node>,
  viewportCenterX: number,
  viewportCenterY: number,
  nodePositionOverrides: NodePositionOverrides = {},
  dragPreviewByNodeId: DragPreviewByVisualId = {},
): Set<string> {
  const next = new Set<string>();
  for (const id of prev) {
    if (spatiallyVisible.has(id)) next.add(id);
  }

  const cap = Number.isFinite(maxCount) ? maxCount : next.size;
  if (next.size > cap && maxEvictPerTick > 0) {
    const ranked = [...next]
      .map((id) => {
        const node = nodeByVisualId.get(id);
        if (!node) return { id, distanceSq: Number.POSITIVE_INFINITY };
        const { cardLeft, cardTop } = resolveCardPosition(node, dragPreviewByNodeId, nodePositionOverrides);
        return {
          id,
          distanceSq: viewportDistanceSq(cardLeft, cardTop, viewportCenterX, viewportCenterY),
        };
      })
      .sort((a, b) => b.distanceSq - a.distanceSq);
    let evicted = 0;
    for (const entry of ranked) {
      if (next.size <= cap) break;
      if (evicted >= maxEvictPerTick) break;
      next.delete(entry.id);
      evicted += 1;
    }
  }

  const admitCap = Math.min(
    Math.max(0, admissionBudget),
    Math.max(0, cap - next.size),
  );
  if (admitCap <= 0) return next;

  const toAdmit = new Set<string>();
  for (const id of nearestCandidates) {
    if (!next.has(id)) toAdmit.add(id);
  }
  if (toAdmit.size === 0) return next;

  const admitted = pickNearestVisibleVisualIds(
    toAdmit,
    admitCap,
    nodeByVisualId,
    viewportCenterX,
    viewportCenterY,
    nodePositionOverrides,
    dragPreviewByNodeId,
  );
  for (const id of admitted) next.add(id);
  return next;
}
