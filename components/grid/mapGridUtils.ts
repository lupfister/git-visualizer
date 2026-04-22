import { CARD_BODY_TOP_OFFSET, CARD_HEIGHT, CARD_WIDTH, type Node } from './LayoutGrid';
import type { WorktreeInfo } from '../../types';

export const GRID_ZOOM_MAX = 2.25;
export const GRID_ZOOM_DEFAULT = GRID_ZOOM_MAX / 2;
export const GRID_ZOOM_MIN = 0.45;
export const GRID_ZOOM_WHEEL_SENSITIVITY = 0.01;
export const GRID_RENDER_ZOOM = GRID_ZOOM_MAX;
export const MAP_GRID_INNER_PADDING_PX = 10;
export const MAP_GRID_CULL_VIEWPORT_INSET_SCREEN_PX = -100;
export const MAP_GRID_CAMERA_PAN_REACT_THROTTLE_MS = 0;
export const CAMERA_PAN_INTERPOLATION = 0.9;
export const CAMERA_ZOOM_INTERPOLATION = 0.9;
export const CAMERA_SETTLE_EPSILON = 0.001;
export const ZOOM_SETTLE_EPSILON = 0.001;
export const GRID_CONNECTOR_GAP_PX = 0;
export const GRID_CONNECTOR_CORNER_RADIUS_BASE_PX = 18;
export const GRID_COMMIT_CORNER_RADIUS_BASE_PX = 12;
const COMMIT_CULL_CELL_W = CARD_WIDTH + 48;

export type ViewportContentBounds = { left: number; top: number; right: number; bottom: number };

export type CommitCullSpatialIndex = {
  cellW: number;
  cellH: number;
  buckets: Map<string, Set<string>>;
};

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

export function clampZoom(value: number): number {
  return Math.max(GRID_ZOOM_MIN, Math.min(GRID_ZOOM_MAX, value));
}

export function visibleCommitIdSetEquals(a: Set<string> | null, b: Set<string>): boolean {
  if (a === null) return false;
  if (a.size !== b.size) return false;
  for (const id of a) {
    if (!b.has(id)) return false;
  }
  return true;
}

export function intersectsVisibleBounds(
  bounds: ViewportContentBounds,
  rect: { left: number; top: number; right: number; bottom: number },
): boolean {
  return !(
    rect.right < bounds.left ||
    rect.left > bounds.right ||
    rect.bottom < bounds.top ||
    rect.top > bounds.bottom
  );
}

function segmentIntersectsViewportBounds(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  rect: ViewportContentBounds,
): boolean {
  const { left: xmin, top: ymin, right: xmax, bottom: ymax } = rect;
  let u1 = 0;
  let u2 = 1;
  const dx = x2 - x1;
  const dy = y2 - y1;

  const clip = (p: number, q: number): boolean => {
    if (Math.abs(p) < 1e-12) {
      return q >= 0;
    }
    const t = q / p;
    if (p < 0) {
      if (t > u2) return false;
      if (t > u1) u1 = t;
    } else {
      if (t < u1) return false;
      if (t < u2) u2 = t;
    }
    return true;
  };

  if (!clip(-dx, x1 - xmin)) return false;
  if (!clip(dx, xmax - x1)) return false;
  if (!clip(-dy, y1 - ymin)) return false;
  if (!clip(dy, ymax - y1)) return false;
  return u1 <= u2;
}

function axisAlignedBoundsOfPoints(points: ReadonlyArray<{ x: number; y: number }>): ViewportContentBounds {
  let left = points[0]?.x ?? 0;
  let top = points[0]?.y ?? 0;
  let right = left;
  let bottom = top;
  for (const p of points) {
    left = Math.min(left, p.x);
    top = Math.min(top, p.y);
    right = Math.max(right, p.x);
    bottom = Math.max(bottom, p.y);
  }
  return { left, top, right, bottom };
}

export function roundedElbowConnectorIntersectsViewportBounds(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  cornerR: number,
  tipGap: number,
  rect: ViewportContentBounds,
): boolean {
  const finalY = toY - Math.sign(toY - fromY || 1) * tipGap;
  const corner = Math.max(0, Math.min(cornerR, Math.abs(toX - fromX), Math.abs(toY - fromY)));
  if (corner < 0.5) {
    return (
      segmentIntersectsViewportBounds(fromX, fromY, toX, fromY, rect) ||
      segmentIntersectsViewportBounds(toX, fromY, toX, finalY, rect)
    );
  }
  const horizontalDir = toX >= fromX ? 1 : -1;
  const verticalDir = toY >= fromY ? 1 : -1;
  const preTurnX = toX - horizontalDir * corner;
  const postTurnY = finalY - verticalDir * corner;
  const quadEndX = toX;
  const quadEndY = fromY + verticalDir * corner;
  if (segmentIntersectsViewportBounds(fromX, fromY, preTurnX, fromY, rect)) return true;
  const quadHull = axisAlignedBoundsOfPoints([
    { x: preTurnX, y: fromY },
    { x: toX, y: fromY },
    { x: quadEndX, y: quadEndY },
  ]);
  if (intersectsVisibleBounds(rect, quadHull)) return true;
  if (segmentIntersectsViewportBounds(quadEndX, quadEndY, toX, postTurnY, rect)) return true;
  return segmentIntersectsViewportBounds(toX, postTurnY, toX, finalY, rect);
}

export function mergeOrthogonalConnectorIntersectsViewportBounds(
  laneX: number,
  tipY: number,
  mergeX: number,
  mergeY: number,
  cornerR: number,
  rect: ViewportContentBounds,
): boolean {
  if (Math.abs(mergeY - tipY) < 0.5) {
    return segmentIntersectsViewportBounds(laneX, tipY, mergeX, mergeY, rect);
  }
  const horizontalDir = mergeX >= laneX ? 1 : -1;
  const corner = Math.max(0, Math.min(cornerR, Math.abs(mergeY - tipY), Math.abs(mergeX - laneX)));
  if (corner < 0.5) {
    return (
      segmentIntersectsViewportBounds(laneX, tipY, laneX, mergeY, rect) ||
      segmentIntersectsViewportBounds(laneX, mergeY, mergeX, mergeY, rect)
    );
  }
  const preTurnY = mergeY - Math.sign(mergeY - tipY) * corner;
  const cornerX = laneX + horizontalDir * corner;
  if (segmentIntersectsViewportBounds(laneX, tipY, laneX, preTurnY, rect)) return true;
  const quadHull = axisAlignedBoundsOfPoints([
    { x: laneX, y: preTurnY },
    { x: laneX, y: mergeY },
    { x: cornerX, y: mergeY },
  ]);
  if (intersectsVisibleBounds(rect, quadHull)) return true;
  return segmentIntersectsViewportBounds(cornerX, mergeY, mergeX, mergeY, rect);
}

function commitBoundingRectForCull(node: Node, labelTopPxForCull: number) {
  return {
    left: node.x,
    top: node.y + labelTopPxForCull,
    right: node.x + CARD_WIDTH,
    bottom: node.y + CARD_BODY_TOP_OFFSET + CARD_HEIGHT + 4,
  };
}

export function buildCommitCullSpatialIndex(
  nodes: readonly Node[],
  labelTopPxForCull: number,
): CommitCullSpatialIndex {
  const cellW = COMMIT_CULL_CELL_W;
  const cellH = Math.max(
    120,
    Math.ceil(CARD_BODY_TOP_OFFSET + CARD_HEIGHT + 4 - labelTopPxForCull + 24),
  );
  const buckets = new Map<string, Set<string>>();
  for (const node of nodes) {
    const rect = commitBoundingRectForCull(node, labelTopPxForCull);
    const ix0 = Math.floor(rect.left / cellW);
    const ix1 = Math.floor(rect.right / cellW);
    const iy0 = Math.floor(rect.top / cellH);
    const iy1 = Math.floor(rect.bottom / cellH);
    const id = node.commit.visualId;
    for (let ix = ix0; ix <= ix1; ix++) {
      for (let iy = iy0; iy <= iy1; iy++) {
        const key = `${ix},${iy}`;
        let set = buckets.get(key);
        if (!set) {
          set = new Set<string>();
          buckets.set(key, set);
        }
        set.add(id);
      }
    }
  }
  return { cellW, cellH, buckets };
}

export function collectVisibleCommitIdsFromSpatialIndex(
  index: CommitCullSpatialIndex,
  bounds: ViewportContentBounds,
  nodesByVisualId: ReadonlyMap<string, Node>,
  labelTopPxForCull: number,
): Set<string> {
  const { cellW, cellH, buckets } = index;
  const ix0 = Math.floor(bounds.left / cellW);
  const ix1 = Math.floor(bounds.right / cellW);
  const iy0 = Math.floor(bounds.top / cellH);
  const iy1 = Math.floor(bounds.bottom / cellH);
  const candidates = new Set<string>();
  for (let ix = ix0; ix <= ix1; ix++) {
    for (let iy = iy0; iy <= iy1; iy++) {
      const bucket = buckets.get(`${ix},${iy}`);
      if (!bucket) continue;
      for (const cid of bucket) candidates.add(cid);
    }
  }
  const nextVisible = new Set<string>();
  for (const cid of candidates) {
    const node = nodesByVisualId.get(cid);
    if (!node) continue;
    const rect = commitBoundingRectForCull(node, labelTopPxForCull);
    if (intersectsVisibleBounds(bounds, rect)) nextVisible.add(cid);
  }
  return nextVisible;
}

export function getViewportContentBoundsFromClientSize(
  width: number,
  height: number,
  camera: { panX: number; panY: number; zoom: number },
  options?: { innerPaddingPx?: number },
): ViewportContentBounds | null {
  if (camera.zoom <= 0) return null;
  if (width <= 0 || height <= 0) return null;
  const scale = camera.zoom / GRID_RENDER_ZOOM;
  if (!Number.isFinite(scale) || scale <= 0) return null;
  const pad = options?.innerPaddingPx ?? 0;
  return {
    left: (-pad - camera.panX) / scale,
    top: (-pad - camera.panY) / scale,
    right: (width - pad - camera.panX) / scale,
    bottom: (height - pad - camera.panY) / scale,
  };
}

function shrinkViewportContentBounds(bounds: ViewportContentBounds, insetContent: number): ViewportContentBounds {
  if (!(insetContent > 0)) return bounds;
  const halfW = (bounds.right - bounds.left) / 2;
  const halfH = (bounds.bottom - bounds.top) / 2;
  const clampedInset = Math.min(insetContent, Math.max(0, halfW - 8), Math.max(0, halfH - 8));
  return {
    left: bounds.left + clampedInset,
    top: bounds.top + clampedInset,
    right: bounds.right - clampedInset,
    bottom: bounds.bottom - clampedInset,
  };
}

function growViewportContentBounds(bounds: ViewportContentBounds, outsetContent: number): ViewportContentBounds {
  if (!(outsetContent > 0)) return bounds;
  return {
    left: bounds.left - outsetContent,
    top: bounds.top - outsetContent,
    right: bounds.right + outsetContent,
    bottom: bounds.bottom + outsetContent,
  };
}

export function withCullInsetScreenPx(
  bounds: ViewportContentBounds,
  cameraZoom: number,
  insetScreenPx: number,
): ViewportContentBounds {
  if (insetScreenPx === 0) return bounds;
  const scale = cameraZoom / GRID_RENDER_ZOOM;
  if (!Number.isFinite(scale) || scale <= 0) return bounds;
  if (insetScreenPx > 0) {
    return shrinkViewportContentBounds(bounds, insetScreenPx / scale);
  }
  return growViewportContentBounds(bounds, -insetScreenPx / scale);
}

export function normalizeRepoPathForCompare(path: string): string {
  return path.replace(/\\/g, '/').replace(/\/+$/, '');
}

export function shaMatchesGitRef(a?: string | null, b?: string | null): boolean {
  if (!a || !b) return false;
  return a === b || a.startsWith(b) || b.startsWith(a);
}

export function isOtherWorktree(worktree: WorktreeInfo, currentRepoPath?: string): boolean {
  if (currentRepoPath) {
    const a = normalizeRepoPathForCompare(currentRepoPath);
    const b = normalizeRepoPathForCompare(worktree.path);
    if (a === b || a.toLowerCase() === b.toLowerCase()) return false;
  }
  return !worktree.isCurrent;
}

export function isUsableOtherWorktree(worktree: WorktreeInfo, currentRepoPath?: string): boolean {
  if (worktree.pathExists === false) return false;
  return isOtherWorktree(worktree, currentRepoPath);
}

export function worktreeShortLabel(path: string): string {
  const parts = path.replace(/\\/g, '/').split('/').filter(Boolean);
  if (parts.length <= 2) return path;
  return `.../${parts.slice(-2).join('/')}`;
}
