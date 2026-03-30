export type LayoutMode = 'timeline' | 'grid';

export type AnchorPoint = { x: number; y: number };

export type GridAxis = {
  orderedTimes: number[];
  rowByTime: Map<number, number>;
  rowStart: number;
  rowGap: number;
  rowForTimestamp: (timestampMs: number) => number;
  coordForTimestamp: (timestampMs: number) => number;
};

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

export function buildGridAxis(anchorTimes: number[], rowStart: number, rowGap: number): GridAxis {
  const orderedTimes = Array.from(new Set(anchorTimes.filter(Number.isFinite))).sort((a, b) => a - b);
  const safeRowGap = Math.max(1, rowGap);
  const rowByTime = new Map<number, number>(orderedTimes.map((time, index) => [time, index]));

  function rowForTimestamp(timestampMs: number): number {
    if (!Number.isFinite(timestampMs) || orderedTimes.length === 0) return 0;

    let lo = 0;
    let hi = orderedTimes.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (orderedTimes[mid] < timestampMs) lo = mid + 1;
      else hi = mid;
    }

    if (lo <= 0) return 0;
    if (lo >= orderedTimes.length) return orderedTimes.length - 1;

    const prevIdx = lo - 1;
    const nextIdx = lo;
    const prevDelta = Math.abs(timestampMs - orderedTimes[prevIdx]);
    const nextDelta = Math.abs(orderedTimes[nextIdx] - timestampMs);

    // Deterministic tie-break: prefer the earlier row.
    return prevDelta <= nextDelta ? prevIdx : nextIdx;
  }

  function coordForTimestamp(timestampMs: number): number {
    const row = rowForTimestamp(timestampMs);
    return rowStart + row * safeRowGap;
  }

  return {
    orderedTimes,
    rowByTime,
    rowStart,
    rowGap: safeRowGap,
    rowForTimestamp,
    coordForTimestamp,
  };
}

export type LaneInput = {
  id: string;
  createdOrder: number;
  startCoord: number;
  endCoord: number;
  parentId?: string | null;
};

export function assignLanesWithParentOrder(
  items: LaneInput[],
  minSeparation: number,
  rootParentId?: string
): Map<string, number> {
  const laneAssignments = new Map<string, number>();
  const laneLastEndCoord: number[] = [];
  const itemById = new Map(items.map((item) => [item.id, item]));

  function ensureLaneCapacity(minLane: number) {
    while (laneLastEndCoord.length <= minLane) {
      laneLastEndCoord.push(Number.NEGATIVE_INFINITY);
    }
  }

  function allocateLane(minLane: number, startCoord: number, endCoord: number): number {
    ensureLaneCapacity(minLane);
    for (let lane = minLane; lane < laneLastEndCoord.length; lane += 1) {
      const lastEnd = laneLastEndCoord[lane];
      if (startCoord - lastEnd >= minSeparation) {
        laneLastEndCoord[lane] = endCoord;
        return lane;
      }
    }
    laneLastEndCoord.push(endCoord);
    return laneLastEndCoord.length - 1;
  }

  const pending = [...items].sort((a, b) => {
    if (a.createdOrder !== b.createdOrder) return a.createdOrder - b.createdOrder;
    if (a.startCoord !== b.startCoord) return a.startCoord - b.startCoord;
    return a.id.localeCompare(b.id);
  });

  let guard = 0;
  while (pending.length > 0 && guard < pending.length * 6) {
    let progressed = false;

    for (let index = 0; index < pending.length; index += 1) {
      const item = pending[index];
      const parentVisible = !!(
        item.parentId &&
        item.parentId !== item.id &&
        item.parentId !== rootParentId &&
        items.some((candidate) => candidate.id === item.parentId)
      );
      const parentAssigned = parentVisible ? laneAssignments.has(item.parentId as string) : true;
      if (!parentAssigned) continue;

      const parentLane = parentVisible ? (laneAssignments.get(item.parentId as string) ?? 0) : 0;
      const parentItem = parentVisible ? itemById.get(item.parentId as string) : undefined;
      const overlapsParent =
        !!parentItem && item.startCoord <= parentItem.endCoord + minSeparation;
      const minLane = parentVisible
        ? (overlapsParent ? parentLane + 1 : parentLane)
        : 0;
      const lane = allocateLane(minLane, item.startCoord, item.endCoord);
      laneAssignments.set(item.id, lane);
      pending.splice(index, 1);
      index -= 1;
      progressed = true;
    }

    if (!progressed) {
      const fallback = pending.shift();
      if (!fallback) break;
      const lane = allocateLane(0, fallback.startCoord, fallback.endCoord);
      laneAssignments.set(fallback.id, lane);
    }

    guard += 1;
  }

  return laneAssignments;
}

export function selectClosestEntryIndices(
  entries: AnchorPoint[],
  anchors: AnchorPoint[]
): Set<number> {
  if (entries.length === 0 || anchors.length === 0) return new Set<number>();
  const chosen = new Set<number>();

  for (const anchor of anchors) {
    let bestUnusedIndex = -1;
    let bestUnusedDistance = Number.POSITIVE_INFINITY;
    let bestAnyIndex = -1;
    let bestAnyDistance = Number.POSITIVE_INFINITY;

    for (let index = 0; index < entries.length; index += 1) {
      const entry = entries[index];
      const dx = entry.x - anchor.x;
      const dy = entry.y - anchor.y;
      const distance = Math.hypot(dx, dy);

      if (distance < bestAnyDistance) {
        bestAnyDistance = distance;
        bestAnyIndex = index;
      }
      if (!chosen.has(index) && distance < bestUnusedDistance) {
        bestUnusedDistance = distance;
        bestUnusedIndex = index;
      }
    }

    const pickedIndex = bestUnusedIndex >= 0 ? bestUnusedIndex : bestAnyIndex;
    if (pickedIndex >= 0) chosen.add(pickedIndex);
  }

  return chosen;
}

export function structuralAnchorPriority(
  entryIndex: number,
  structuralIndices: Set<number>,
  secondaryIndices: Set<number>,
  baseBoost = 0
): number {
  const structuralBoost = structuralIndices.has(entryIndex) ? 8 : 0;
  const secondaryBoost = secondaryIndices.has(entryIndex) ? 2 : 0;
  return baseBoost + structuralBoost + secondaryBoost;
}

type PointFormatter = (x: number, y: number) => string;

type BranchPathInput = {
  startX: number;
  forkY: number;
  laneX: number;
  tipY: number;
  cornerR: number;
  pointFormatter: PointFormatter;
};

export function buildBranchOrthogonalPath({
  startX,
  forkY,
  laneX,
  tipY,
  cornerR,
  pointFormatter,
}: BranchPathInput): string {
  if (Math.abs(startX - laneX) < 0.5) {
    return `M ${pointFormatter(laneX, forkY)} L ${pointFormatter(laneX, tipY)}`;
  }

  const horizontalDir = laneX > startX ? 1 : -1;
  const verticalDir = tipY >= forkY ? 1 : -1;
  const corner = Math.max(0, Math.min(cornerR, Math.abs(laneX - startX), Math.abs(tipY - forkY)));
  const preTurnX = laneX - horizontalDir * corner;
  const postTurnY = forkY + verticalDir * corner;

  return [
    `M ${pointFormatter(startX, forkY)}`,
    `L ${pointFormatter(preTurnX, forkY)}`,
    `Q ${pointFormatter(laneX, forkY)} ${pointFormatter(laneX, postTurnY)}`,
    `L ${pointFormatter(laneX, tipY)}`,
  ].join(' ');
}

type MergePathInput = {
  laneX: number;
  tipY: number;
  mergeX: number;
  mergeY: number;
  cornerR: number;
  pointFormatter: PointFormatter;
};

export function buildMergeOrthogonalPath({
  laneX,
  tipY,
  mergeX,
  mergeY,
  cornerR,
  pointFormatter,
}: MergePathInput): string {
  if (Math.abs(mergeY - tipY) < 0.5) {
    return `M ${pointFormatter(laneX, tipY)} L ${pointFormatter(mergeX, mergeY)}`;
  }

  const horizontalDir = mergeX >= laneX ? 1 : -1;
  const corner = Math.max(0, Math.min(cornerR, Math.abs(mergeY - tipY), Math.abs(mergeX - laneX)));
  const preTurnY = mergeY - Math.sign(mergeY - tipY) * corner;
  const cornerX = laneX + horizontalDir * corner;

  return [
    `M ${pointFormatter(laneX, tipY)}`,
    `L ${pointFormatter(laneX, preTurnY)}`,
    `Q ${pointFormatter(laneX, mergeY)} ${pointFormatter(cornerX, mergeY)}`,
    `L ${pointFormatter(mergeX, mergeY)}`,
  ].join(' ');
}

export function commitRectSize(baseNodeSize: number, clusterBoost = 0): {
  width: number;
  height: number;
  radius: number;
} {
  const height = Math.max(8, baseNodeSize - 2 + clusterBoost);
  const width = height * 1.5;
  const radius = Math.max(2, Math.min(4, height * 0.24));
  return { width, height, radius };
}

export function densityLabelFromLayout(layoutMode: LayoutMode): string {
  return layoutMode === 'grid' ? 'Density' : 'Time';
}

export function densityTitleFromLayout(layoutMode: LayoutMode, orientation: 'vertical' | 'horizontal'): string {
  if (layoutMode === 'grid') {
    return `${orientation === 'vertical' ? 'Vertical' : 'Horizontal'} grid density`;
  }
  return `${orientation === 'vertical' ? 'Vertical' : 'Horizontal'} time scaling`;
}

export function easedDensityProgress(value: number): number {
  const t = clamp01(value);
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}
