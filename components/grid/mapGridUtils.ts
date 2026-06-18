import { CARD_BODY_TOP_OFFSET, CARD_HEIGHT, CARD_WIDTH, type Node } from './LayoutGrid';
import { mapGridConnectorHullPoints } from './gridPathUtils';
import type { CableFace } from './gridPathUtils';
import type { WorktreeInfo } from '../../types';

export const GRID_RENDER_ZOOM = 2.25;
export const GRID_ZOOM_MAX = 4.5;
export const GRID_ZOOM_DEFAULT = GRID_RENDER_ZOOM / 2;
export const GRID_ZOOM_MIN = 0.45;
export const GRID_ZOOM_WHEEL_SENSITIVITY = 0.02;
export const MAP_GRID_INNER_PADDING_PX = 10;
export const MAP_GRID_CULL_VIEWPORT_INSET_SCREEN_PX = -200;
export const MAP_GRID_CAMERA_PAN_REACT_THROTTLE_MS = 250;
/**
 * Force-flush a cull tick once the camera has panned this many screen pixels
 * since the last tick. Guarantees no leading-edge pop-in regardless of how
 * long a continuous pan lasts; chosen smaller than
 * `MAP_GRID_CULL_VIEWPORT_INSET_SCREEN_PX` so commits enter `visibleNodeIds`
 * before they cross into the screen.
 */
export const MAP_GRID_CAMERA_PAN_DISTANCE_TICK_PX = 120;
/** Max cards dropped from the visible set per pan cull tick (hysteresis). */
export const MAP_GRID_PAN_MAX_VISIBLE_EVICT_PER_TICK = 2;
/**
 * Minimum layout-space motion (same nominal px as {@link MAP_GRID_CAMERA_PAN_DISTANCE_TICK_PX})
 * paired with the zoom-scaled screen threshold in {@link mapGridPanCullDistanceExceeded}.
 */
export const MAP_GRID_CAMERA_PAN_CONTENT_TICK_PX = MAP_GRID_CAMERA_PAN_DISTANCE_TICK_PX;
/** Max new commit cards admitted per distance cull tick while panning (~{@link MAP_GRID_CAMERA_PAN_DISTANCE_TICK_PX} screen px). */
export const MAP_GRID_MAX_NODES_ADDED_PER_PAN_ADMISSION = 12;
/** Max commit cards unmounted per frame during post-pan settle prune. */
export const MAP_GRID_MAX_NODES_REMOVED_PER_FRAME = 56;

/**
 * Screen-space pan distance before a cull / React tick. At low zoom the viewport
 * covers more content so we fire ticks more eagerly to surface hidden content.
 */
export function mapGridPanTickThresholdScreenPx(cameraZoom: number): number {
  const scale = cameraZoom / GRID_RENDER_ZOOM;
  const displayZoom = cameraZoom / GRID_RENDER_ZOOM;
  const base = MAP_GRID_CAMERA_PAN_DISTANCE_TICK_PX / Math.max(scale, 0.05);
  if (displayZoom <= 0.35) return base * 1.4;
  if (displayZoom <= 0.75) return base * 1.15;
  return base;
}

export function mapGridPanTickThresholdSq(cameraZoom: number): number {
  const thresholdPx = mapGridPanTickThresholdScreenPx(cameraZoom);
  return thresholdPx * thresholdPx;
}

const MAP_GRID_CAMERA_PAN_CONTENT_TICK_SQ =
  MAP_GRID_CAMERA_PAN_CONTENT_TICK_PX * MAP_GRID_CAMERA_PAN_CONTENT_TICK_PX;

/**
 * True when the camera has moved enough since the last cull tick: either the
 * zoom-scaled screen threshold or ~{@link MAP_GRID_CAMERA_PAN_CONTENT_TICK_PX} of
 * layout-space motion (whichever fires first). Using max() here caused multi-hundred-
 * pixel gaps when zoomed out and delayed node/connector admission until idle.
 */
export function mapGridPanCullDistanceExceeded(
  deltaScreenX: number,
  deltaScreenY: number,
  cameraZoom: number,
): boolean {
  const scale = cameraZoom / GRID_RENDER_ZOOM;
  if (!Number.isFinite(scale) || scale <= 0) return false;
  const screenDistSq = deltaScreenX * deltaScreenX + deltaScreenY * deltaScreenY;
  if (screenDistSq >= mapGridPanTickThresholdSq(cameraZoom)) return true;
  return screenDistSq / (scale * scale) >= MAP_GRID_CAMERA_PAN_CONTENT_TICK_SQ;
}
/** Smooths async trackpad wheel delivery without feeling floaty. */
export const CAMERA_PAN_INTERPOLATION = 0.65;
export const CAMERA_ZOOM_INTERPOLATION = 0.25;
export const CAMERA_SETTLE_EPSILON = 0.001;
export const ZOOM_SETTLE_EPSILON = 0.001;
export const GRID_CONNECTOR_GAP_PX = 0;
export const GRID_COMMIT_CORNER_RADIUS_BASE_PX = 12;

/**
 * Commit card outline: sharp top-left (label notch), rounded on the other three corners.
 * Pass `cornerRadiusPx === 0` for a square outline.
 */
export function buildMapGridCommitOutlinePath(
  width: number,
  height: number,
  inset: number,
  cornerRadiusPx: number,
): string {
  const radius = Math.max(0, cornerRadiusPx);
  if (radius <= 0) {
    const right = width - inset;
    const bottom = height - inset;
    return `M ${inset} ${inset} H ${right} V ${bottom} H ${inset} Z`;
  }
  return (
    `M ${inset} ${inset} ` +
    `H ${width - inset - radius} ` +
    `Q ${width - inset} ${inset} ${width - inset} ${inset + radius} ` +
    `V ${height - inset - radius} ` +
    `Q ${width - inset} ${height - inset} ${width - inset - radius} ${height - inset} ` +
    `H ${inset + radius} ` +
    `Q ${inset} ${height - inset} ${inset} ${height - inset - radius} ` +
    `V ${inset}`
  );
}

/** Persisted flag for cubic “loose cable” connectors on the branch map (`localStorage`). */
export const GRID_LOOSE_CABLE_STORAGE_KEY = 'git-visualizer-loose-cable-connectors';
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

/** Prefix-safe SHA equality (matches branch grid layout). */
export const shasMatch = (left: string | null | undefined, right: string | null | undefined): boolean => {
  if (!left || !right) return false;
  return left === right || left.startsWith(right) || right.startsWith(left);
};

export const isCommitUnpushedOnBranch = (
  commitSha: string,
  branchName: string,
  unpushedShasByBranch: Map<string, Set<string>>,
): boolean => {
  const branchesToCheck = [branchName];
  const localSuffix = ' (local)';
  if (branchName.endsWith(localSuffix)) {
    branchesToCheck.push(branchName.slice(0, -localSuffix.length));
  }
  for (const name of branchesToCheck) {
    const set = unpushedShasByBranch.get(name);
    if (!set) continue;
    for (const candidate of set) {
      if (shasMatch(candidate, commitSha)) return true;
    }
  }
  return false;
};

export function clampZoom(value: number): number {
  return Math.max(GRID_ZOOM_MIN, Math.min(GRID_ZOOM_MAX, value));
}

/** Camera zoom ÷ {@link GRID_RENDER_ZOOM}; 0.2 at minimum zoom-out. */
export const MAP_GRID_MIN_DISPLAY_ZOOM = GRID_ZOOM_MIN / GRID_RENDER_ZOOM;

export function computeMapGridDisplayZoom(cameraZoom: number): number {
  return cameraZoom / GRID_RENDER_ZOOM;
}

/** Inverse zoom for card typography (`--map-inv-zoom`); matches camera scale compensation. */
export function computeMapGridInvZoom(displayZoom: number): number {
  if (!Number.isFinite(displayZoom) || displayZoom <= 0) return 1;
  return 1 / displayZoom;
}

/** Minimum commit cards retained / slotted at any zoom (floor when zoomed out). */
export const MAP_GRID_MIN_CARD_SLOTS = 48;

/** Max real commit card DOM slots; scales up from {@link MAP_GRID_MIN_CARD_SLOTS} when zoomed out. */
export function computeMapGridCardSlotCap(displayZoom: number): number {
  const maxSlots = 128;
  if (displayZoom >= 0.85) return maxSlots;
  if (displayZoom <= MAP_GRID_MIN_DISPLAY_ZOOM) return MAP_GRID_MIN_CARD_SLOTS;
  const t =
    (displayZoom - MAP_GRID_MIN_DISPLAY_ZOOM) / (0.85 - MAP_GRID_MIN_DISPLAY_ZOOM);
  return Math.round(MAP_GRID_MIN_CARD_SLOTS + t * (maxSlots - MAP_GRID_MIN_CARD_SLOTS));
}

/** Cap for `visibleNodeIds`; matches DOM slot cap at every zoom. */
export function mapGridMaxVisibleNodeRetain(displayZoom: number): number {
  return computeMapGridCardSlotCap(displayZoom);
}

/** Pan admission budget — admits more per tick when zoomed out (larger content area visible). */
export function mapGridPanAdmissionBudget(displayZoom: number): number {
  if (displayZoom >= 0.75) return MAP_GRID_MAX_NODES_ADDED_PER_PAN_ADMISSION;
  if (displayZoom <= MAP_GRID_MIN_DISPLAY_ZOOM) return Math.round(MAP_GRID_MAX_NODES_ADDED_PER_PAN_ADMISSION * 1.5);
  const t =
    (displayZoom - MAP_GRID_MIN_DISPLAY_ZOOM) / (0.75 - MAP_GRID_MIN_DISPLAY_ZOOM);
  return Math.max(
    MAP_GRID_MAX_NODES_ADDED_PER_PAN_ADMISSION,
    Math.round(
      MAP_GRID_MAX_NODES_ADDED_PER_PAN_ADMISSION * 1.5 -
        t * (MAP_GRID_MAX_NODES_ADDED_PER_PAN_ADMISSION * 1.5 - MAP_GRID_MAX_NODES_ADDED_PER_PAN_ADMISSION),
    ),
  );
}

/** Lower canvas DPR when zoomed out — lines stay visible, less fill cost. */
export function mapGridConnectorCanvasDpr(displayZoom: number): number {
  const device = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
  const cappedDevice = Math.min(device, 2);
  if (displayZoom >= 0.5) return cappedDevice;
  if (displayZoom <= MAP_GRID_MIN_DISPLAY_ZOOM) return 1;
  const t =
    (displayZoom - MAP_GRID_MIN_DISPLAY_ZOOM) / (0.5 - MAP_GRID_MIN_DISPLAY_ZOOM);
  return 1 + t * (cappedDevice - 1);
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

/** Viewport cull for {@link import('./gridPathUtils').buildRoundedElbowPathVerticalFirst}. */
export function roundedElbowVerticalFirstConnectorIntersectsViewportBounds(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  cornerR: number,
  tipGap: number,
  rect: ViewportContentBounds,
): boolean {
  const finalX = toX - Math.sign(toX - fromX || 1) * tipGap;
  const corner = Math.max(0, Math.min(cornerR, Math.abs(toX - fromX), Math.abs(toY - fromY)));
  if (corner < 0.5) {
    return (
      segmentIntersectsViewportBounds(fromX, fromY, fromX, toY, rect) ||
      segmentIntersectsViewportBounds(fromX, toY, finalX, toY, rect)
    );
  }
  const horizontalDir = toX >= fromX ? 1 : -1;
  const verticalDir = toY >= fromY ? 1 : -1;
  const preTurnY = toY - verticalDir * corner;
  const postTurnX = finalX - horizontalDir * corner;
  const quadEndX = fromX + horizontalDir * corner;
  const quadEndY = toY;
  if (segmentIntersectsViewportBounds(fromX, fromY, fromX, preTurnY, rect)) return true;
  const quadHull = axisAlignedBoundsOfPoints([
    { x: fromX, y: preTurnY },
    { x: fromX, y: toY },
    { x: quadEndX, y: quadEndY },
  ]);
  if (intersectsVisibleBounds(rect, quadHull)) return true;
  if (segmentIntersectsViewportBounds(quadEndX, quadEndY, postTurnX, toY, rect)) return true;
  return segmentIntersectsViewportBounds(postTurnX, toY, finalX, toY, rect);
}

/** Viewport cull for branch-map connectors (hull of orthogonal polyline vertices). */
export function looseCableConnectorIntersectsViewportBounds(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  rect: ViewportContentBounds,
  fromFace?: CableFace,
  toFace?: CableFace,
): boolean {
  const pts = mapGridConnectorHullPoints(fromX, fromY, toX, toY, fromFace, toFace);
  const hull = axisAlignedBoundsOfPoints(pts);
  return intersectsVisibleBounds(rect, hull);
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

/**
 * Worst-case (most negative) `labelTopPx` value across all zoom levels.
 * `labelTopPx = -(20 / displayZoom)` and `displayZoom >= GRID_ZOOM_MIN`, so
 * the largest absolute label inset is at the minimum zoom. We use this
 * constant to size the spatial index buckets so the index identity is
 * independent of zoom.
 */
const COMMIT_CULL_LABEL_BAND_MAX_CONTENT_PX = 20 / GRID_ZOOM_MIN;

function commitIndexBoundingRect(node: Node) {
  return {
    left: node.x,
    top: node.y - COMMIT_CULL_LABEL_BAND_MAX_CONTENT_PX,
    right: node.x + CARD_WIDTH,
    bottom: node.y + CARD_BODY_TOP_OFFSET + CARD_HEIGHT + 4,
  };
}

export function buildCommitCullSpatialIndex(nodes: readonly Node[]): CommitCullSpatialIndex {
  const cellW = COMMIT_CULL_CELL_W;
  const cellH = Math.max(
    120,
    Math.ceil(CARD_BODY_TOP_OFFSET + CARD_HEIGHT + 4 + COMMIT_CULL_LABEL_BAND_MAX_CONTENT_PX + 24),
  );
  const buckets = new Map<string, Set<string>>();
  for (const node of nodes) {
    const rect = commitIndexBoundingRect(node);
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

export function computeViewportCullBounds(
  viewportWidth: number,
  viewportHeight: number,
  camera: { panX: number; panY: number; zoom: number },
  options?: { innerPaddingPx?: number; cullInsetScreenPx?: number },
): ViewportContentBounds | null {
  const raw = getViewportContentBoundsFromClientSize(viewportWidth, viewportHeight, camera, {
    innerPaddingPx: options?.innerPaddingPx ?? MAP_GRID_INNER_PADDING_PX,
  });
  if (!raw) return null;
  const inset = options?.cullInsetScreenPx ?? MAP_GRID_CULL_VIEWPORT_INSET_SCREEN_PX;
  return withCullInsetScreenPx(raw, camera.zoom, inset);
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

/** Leaf directory name for a worktree checkout path (e.g. `feature-wt` from `/repo/.worktrees/feature-wt`). */
export function worktreeDisplayName(path: string): string {
  const parts = path.replace(/\\/g, '/').split('/').filter(Boolean);
  return parts[parts.length - 1] ?? path;
}

export const PRIMARY_WORKTREE_DISPLAY_NAME = 'Primary';

/** User-facing worktree name on map cards and actions (primary checkout vs linked worktrees). */
export function worktreeSessionDisplayName(session: { path: string; isCurrent: boolean }): string {
  return session.isCurrent ? PRIMARY_WORKTREE_DISPLAY_NAME : worktreeDisplayName(session.path);
}

export const formatWorktreeNodeHeaderLabel = (
  session: {
    path: string;
    branchName: string | null;
    hasUncommittedChanges: boolean;
    isCurrent: boolean;
  },
): string => {
  return session.branchName ?? 'detached';
};

export const REMOTE_COMMIT_SOURCE_LABEL = 'Origin';

/** Map card header for commits that exist on the remote but not locally (matches worktree `Name • branch` pattern). */
export const formatRemoteCommitHeaderLabel = (
  branchName: string,
  commitSha: string,
): string => {
  const shortSha = commitSha.slice(0, 7);
  return `${REMOTE_COMMIT_SOURCE_LABEL} • ${branchName}/${shortSha}`;
};
