import {
  startTransition,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { BranchCommitPreview, WorktreeInfo } from '../../types';
import {
  buildLanes,
  CARD_HEIGHT,
  CARD_BODY_TOP_OFFSET,
  CARD_WIDTH,
  type BranchGridViewProps,
  type Node,
} from './LayoutGrid';
import { computeBranchGridLayout } from './branchGridLayoutModel';
import MapGridCanvas from './MapGridCanvas';
import MapGridDebugPanel from './MapGridDebugPanel';
import MapGridDialogs from './MapGridDialogs';

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

const GRID_ZOOM_MAX = 2.25;
const GRID_ZOOM_DEFAULT = GRID_ZOOM_MAX / 2;
const GRID_ZOOM_MIN = 0.45;
const GRID_ZOOM_WHEEL_SENSITIVITY = 0.01;
/** Must match `GRID_LAYOUT_RENDER_ZOOM` in `branchGridLayoutModel.ts`. */
const GRID_RENDER_ZOOM = GRID_ZOOM_MAX;
/** Keep in sync with `p-2.5` on the padded wrapper around the transform layer (0.625rem ≈ 10px at 16px root). */
const MAP_GRID_INNER_PADDING_PX = 10;
/**
 * Adjusts the cull rectangle on every side (in screen px, converted by zoom).
 * Positive values shrink the rect (inset) so edge content is culled earlier — useful to verify culling.
 * Negative values expand the rect outward (outset) so more off-screen content stays mounted.
 * Set to `0` to match the full viewport bounds.
 */
const MAP_GRID_CULL_VIEWPORT_INSET_SCREEN_PX = -100;
/** Pan-only camera updates throttle React re-renders (zoom always updates immediately). */
const MAP_GRID_CAMERA_PAN_REACT_THROTTLE_MS = 0;
/** Near-1 keeps pan responsive with a very slight eased follow. Zoom still eases separately. */
const CAMERA_PAN_INTERPOLATION = 0.9;
/**
 * Zoom must apply in lockstep with pan for cursor-centered zoom — lerping zoom while pan snaps to
 * target breaks the screen→world mapping until the animation finishes.
 */
const CAMERA_ZOOM_INTERPOLATION = 0.9;
const CAMERA_SETTLE_EPSILON = 0.001;
const ZOOM_SETTLE_EPSILON = 0.001;

function clampZoom(value: number): number {
  return Math.max(GRID_ZOOM_MIN, Math.min(GRID_ZOOM_MAX, value));
}

type ViewportContentBounds = { left: number; top: number; right: number; bottom: number };

function intersectsVisibleBounds(
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

/** Liang–Barsky: true iff the segment intersects the closed axis-aligned rectangle (inclusive). */
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

/** Matches `buildRoundedElbowPath` straight segments + quad bbox (same corner math). */
function roundedElbowConnectorIntersectsViewportBounds(
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

/** Matches `buildMergeOrthogonalPath` (LayoutGrid) segment layout. */
function mergeOrthogonalConnectorIntersectsViewportBounds(
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

function visibleCommitIdSetEquals(a: Set<string> | null, b: Set<string>): boolean {
  if (a === null) return false;
  if (a.size !== b.size) return false;
  for (const id of a) {
    if (!b.has(id)) return false;
  }
  return true;
}

/** Horizontal pitch for spatial bucketing (~one card span). */
const COMMIT_CULL_CELL_W = CARD_WIDTH + 48;

function commitBoundingRectForCull(node: Node, labelTopPxForCull: number) {
  return {
    left: node.x,
    top: node.y + labelTopPxForCull,
    right: node.x + CARD_WIDTH,
    bottom: node.y + CARD_BODY_TOP_OFFSET + CARD_HEIGHT + 4,
  };
}

type CommitCullSpatialIndex = {
  cellW: number;
  cellH: number;
  buckets: Map<string, Set<string>>;
};

function buildCommitCullSpatialIndex(nodes: readonly Node[], labelTopPxForCull: number): CommitCullSpatialIndex {
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

function collectVisibleCommitIdsFromSpatialIndex(
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

function getViewportContentBoundsFromClientSize(
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

/** Inset in content space on all sides; clamped so the rect stays valid. */
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

/** Outset in content space on all sides (inverse of inset). */
function growViewportContentBounds(bounds: ViewportContentBounds, outsetContent: number): ViewportContentBounds {
  if (!(outsetContent > 0)) return bounds;
  return {
    left: bounds.left - outsetContent,
    top: bounds.top - outsetContent,
    right: bounds.right + outsetContent,
    bottom: bounds.bottom + outsetContent,
  };
}

function withCullInsetScreenPx(
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

const GRID_CONNECTOR_GAP_PX = 0;
const GRID_CONNECTOR_CORNER_RADIUS_BASE_PX = 18;
const GRID_COMMIT_CORNER_RADIUS_BASE_PX = 12;

type MarqueeDragState = {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  additive: boolean;
};

function normalizeMarqueeRect(drag: MarqueeDragState) {
  const left = Math.min(drag.startX, drag.currentX);
  const top = Math.min(drag.startY, drag.currentY);
  const width = Math.abs(drag.currentX - drag.startX);
  const height = Math.abs(drag.currentY - drag.startY);
  return { left, top, width, height };
}

function normalizeRepoPathForCompare(path: string): string {
  return path.replace(/\\/g, '/').replace(/\/+$/, '');
}

function shaMatchesGitRef(a?: string | null, b?: string | null): boolean {
  if (!a || !b) return false;
  return a === b || a.startsWith(b) || b.startsWith(a);
}

function isOtherWorktree(worktree: WorktreeInfo, currentRepoPath?: string): boolean {
  if (currentRepoPath) {
    const a = normalizeRepoPathForCompare(currentRepoPath);
    const b = normalizeRepoPathForCompare(worktree.path);
    if (a === b || a.toLowerCase() === b.toLowerCase()) return false;
  }
  return !worktree.isCurrent;
}

function isUsableOtherWorktree(worktree: WorktreeInfo, currentRepoPath?: string): boolean {
  if (worktree.pathExists === false) return false;
  return isOtherWorktree(worktree, currentRepoPath);
}

function worktreeShortLabel(path: string): string {
  const parts = path.replace(/\\/g, '/').split('/').filter(Boolean);
  if (parts.length <= 2) return path;
  return `.../${parts.slice(-2).join('/')}`;
}

export default function BranchGridMap({
  branches,
  mergeNodes = [],
  directCommits = [],
  unpushedDirectCommits = [],
  unpushedCommitShasByBranch = {},
  openPRs = [],
  defaultBranch,
  onCommitClick,
  onLoadMore,
  view,
  staleBranches = [],
  isLoading = false,
  scrollRequest,
  focusedErrorBranch,
  mapTopInsetPx = 0,
  onMergeRefsIntoBranch,
  mergeInProgress = false,
  onPushAllBranches,
  onPushCurrentBranch,
  onPushCommitTargets,
  pushInProgress = false,
  onDeleteSelection,
  deleteInProgress = false,
  worktrees = [],
  currentRepoPath,
  onRemoveWorktree,
  removeWorktreeInProgress = false,
  onSwitchToWorktree,
  onStashLocalChanges,
  stashInProgress = false,
  stashDisabled = false,
  onCommitLocalChanges,
  commitInProgress = false,
  commitDisabled = false,
  onStageAllChanges,
  stageInProgress = false,
  onCreateBranchFromNode,
  createBranchFromNodeInProgress = false,
  orientation = 'vertical',
  branchCommitPreviews = {},
  branchUniqueAheadCounts = {},
  gridSearchQuery = '',
  gridSearchJumpToken = 0,
  gridFocusSha = null,
  checkedOutRef = null,
  onGridSearchResultCountChange,
  onGridSearchFocusChange,
  onInteractionChange,
}: BranchGridViewProps) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  /** `p-2.5` wrapper: used to map pointer position to the transform layer origin (padding edge). */
  const mapPadHostRef = useRef<HTMLDivElement | null>(null);
  const transformLayerRef = useRef<HTMLDivElement | null>(null);
  const panRef = useRef({ x: 0, y: 0 });
  const zoomRef = useRef(GRID_ZOOM_DEFAULT);
  const renderedCameraRef = useRef({ panX: 0, panY: 0, zoom: GRID_ZOOM_DEFAULT });
  const cameraFrameRef = useRef<number | null>(null);
  const renderedZoomRef = useRef(GRID_ZOOM_DEFAULT);
  const interactionIdleTimeoutRef = useRef<number | null>(null);
  const [isCameraMoving, setIsCameraMoving] = useState(false);
  const marqueeDragRef = useRef<MarqueeDragState | null>(null);
  const marqueeMovedRef = useRef(false);
  const marqueeBaseSelectionRef = useRef<string[]>([]);
  const [isMarqueeSelecting, setIsMarqueeSelecting] = useState(false);
  const [marqueeRect, setMarqueeRect] = useState<{ left: number; top: number; width: number; height: number } | null>(null);
  const [selectedCommitShas, setSelectedCommitShas] = useState<string[]>([]);
  const [mergeTargetCommitSha, setMergeTargetCommitSha] = useState<string | null>(null);
  const [worktreeMenuOpen, setWorktreeMenuOpen] = useState(false);
  const [commitDialogOpen, setCommitDialogOpen] = useState(false);
  const [commitMessageDraft, setCommitMessageDraft] = useState('');
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [newBranchDialogOpen, setNewBranchDialogOpen] = useState(false);
  const [newBranchName, setNewBranchName] = useState('');
  const [manuallyOpenedClumps, setManuallyOpenedClumps] = useState<Set<string>>(() => new Set());
  const [isDebugOpen, setIsDebugOpen] = useState(false);
  const [renderedZoom, setRenderedZoom] = useState(GRID_ZOOM_DEFAULT);
  const [cameraRenderTick, setCameraRenderTick] = useState(0);
  const [visibleNodeIds, setVisibleNodeIds] = useState<Set<string> | null>(null);
  const [viewportClientSize, setViewportClientSize] = useState<{ width: number; height: number } | null>(null);
  const panReactTrailingTimeoutRef = useRef<number | null>(null);
  const lastCameraPanReactEmitRef = useRef(0);

  const lanes = useMemo(() => buildLanes(branches, defaultBranch), [branches, defaultBranch]);
  const layoutModel = useMemo(
    () =>
      computeBranchGridLayout({
        lanes,
        branches,
        mergeNodes,
        directCommits,
        unpushedDirectCommits,
        defaultBranch,
        branchCommitPreviews,
        branchUniqueAheadCounts,
        manuallyOpenedClumps,
        isDebugOpen,
        gridSearchQuery,
        gridFocusSha,
        checkedOutRef: checkedOutRef ?? null,
      }),
    [
      lanes,
      branches,
      mergeNodes,
      directCommits,
      unpushedDirectCommits,
      defaultBranch,
      branchCommitPreviews,
      branchUniqueAheadCounts,
      manuallyOpenedClumps,
      isDebugOpen,
      gridSearchQuery,
      gridFocusSha,
      checkedOutRef?.headSha ?? null,
      checkedOutRef?.branchName ?? null,
    ],
  );

  const {
    allCommits,
    debugRows,
    branchDebugRows,
    clusterKeyByCommitId,
    leadByClusterKey,
    clusterCounts,
    matchingNodes,
    matchingNodeIds,
    normalizedSearchQuery,
    focusedNode,
    checkedOutClusterKey,
    defaultCollapsedClumps,
    renderNodes,
    visibleNodesBySha,
    contentWidth,
    contentHeight,
    connectors,
    mergeConnectors,
    connectorDecisions,
    nodeWarnings,
    commitIdsWithRenderedAncestry,
    connectorParentShas,
    branchStartShas,
    branchOffNodeShas,
    crossBranchOutgoingShas,
    branchBaseCommitByName,
    pointFormatter,
  } = layoutModel;

  const isGridSearchActive = Boolean(normalizedSearchQuery);

  const displayZoom = renderedZoom / GRID_RENDER_ZOOM;
  const inverseZoomStyle = useMemo(
    () => ({
      transform: `scale(${1 / displayZoom})`,
      transformOrigin: 'top left' as const,
      width: `${100 * displayZoom}%`,
      height: `${100 * displayZoom}%`,
    }),
    [displayZoom],
  );
  const labelTopPx = -(20 / displayZoom);

  const nodeByVisualId = useMemo(() => {
    const m = new Map<string, Node>();
    for (const node of renderNodes) {
      m.set(node.commit.visualId, node);
    }
    return m;
  }, [renderNodes]);

  const commitCullSpatialIndex = useMemo(
    () => buildCommitCullSpatialIndex(renderNodes, labelTopPx),
    [renderNodes, labelTopPx],
  );

  const shouldRenderNode = (node: Node) => {
    const commitId = node.commit.id;
    const visualId = node.commit.visualId;
    if (isGridSearchActive && matchingNodeIds.has(commitId)) return true;
    if (focusedNode?.commit.id === commitId) return true;
    if (visibleNodeIds === null) return true;
    if (!visibleNodeIds.has(visualId)) return false;
    const ck = clusterKeyByCommitId.get(visualId);
    if (ck) {
      const count = clusterCounts.get(ck) ?? 1;
      if (count > 1) {
        const clusterExpanded =
          ck === checkedOutClusterKey ||
          manuallyOpenedClumps.has(ck) ||
          !defaultCollapsedClumps.has(ck);
        if (clusterExpanded) return true;
      }
    }
    return true;
  };

  const lineStrokeWidth = 1.5 / displayZoom;
  const haloStrokeWidth = 4 / displayZoom;
  const zoomOutCornerReductionPx = Math.max(0, 1 - displayZoom) * 8;
  const connectorCornerRadiusPx =
    Math.max(6, GRID_CONNECTOR_CORNER_RADIUS_BASE_PX - zoomOutCornerReductionPx) / displayZoom;
  const commitCornerRadiusPx = GRID_COMMIT_CORNER_RADIUS_BASE_PX / displayZoom;
  const iconScaleStyle = useMemo(
    () => ({
      transform: `scale(${1 / displayZoom})`,
      transformOrigin: 'center' as const,
    }),
    [displayZoom],
  );

  const connectorParentAccentClass =
    'border-slate-400/70';
  const branchStartAccentClass =
    'border-blue-500';

  const branchByName = useMemo(() => new Map(branches.map((branch) => [branch.name, branch])), [branches]);
  const freshCopyBranchNames = useMemo(
    () => new Set(branches.filter((branch) => branch.commitsAhead === 0 && !branch.name.startsWith('*')).map((branch) => branch.name)),
    [branches],
  );
  const commitShaToBranchNames = useMemo(() => {
    const map = new Map<string, Set<string>>();
    for (const node of renderNodes) {
      const set = map.get(node.commit.id) ?? new Set<string>();
      set.add(node.commit.branchName);
      map.set(node.commit.id, set);
    }
    for (const commit of directCommits) {
      const set = map.get(commit.fullSha) ?? new Set<string>();
      set.add(defaultBranch);
      map.set(commit.fullSha, set);
    }
    return map;
  }, [renderNodes, directCommits, defaultBranch]);
  const selectableCommitShaSet = useMemo(() => new Set(renderNodes.map((node) => node.commit.id)), [renderNodes]);
  const selectedVisibleCommitShas = useMemo(
    () => selectedCommitShas.filter((sha) => selectableCommitShaSet.has(sha)),
    [selectedCommitShas, selectableCommitShaSet],
  );
  const branchPreviewContainsSha = useCallback(
    (branchName: string, sha: string): boolean => {
      if (!sha) return false;
      const previews = branchCommitPreviews[branchName] ?? [];
      if (previews.some((preview) => shaMatchesGitRef(preview.fullSha, sha) || shaMatchesGitRef(preview.sha, sha))) return true;
      const branch = branchByName.get(branchName);
      if (branch?.headSha && shaMatchesGitRef(branch.headSha, sha)) return true;
      return false;
    },
    [branchCommitPreviews, branchByName],
  );
  const checkedOutBranchName = checkedOutRef?.branchName ?? null;
  const checkedOutHeadSha = checkedOutRef?.headSha ?? null;
  const checkedOutIsDetached = checkedOutBranchName == null;

  const findOtherWorktreeForCommit = useCallback(
    (branchName: string, commitFullSha: string, commitShortSha: string): WorktreeInfo | null => {
      for (const wt of worktrees) {
        if (!isUsableOtherWorktree(wt, currentRepoPath)) continue;
        if (wt.branchName) {
          if (wt.branchName === branchName && shaMatchesGitRef(wt.headSha, commitFullSha)) return wt;
          continue;
        }
        if (!shaMatchesGitRef(wt.headSha, commitFullSha) && !shaMatchesGitRef(wt.headSha, commitShortSha)) continue;
        if (wt.parentSha && branchPreviewContainsSha(branchName, wt.parentSha)) return wt;
        if (branchPreviewContainsSha(branchName, wt.headSha)) return wt;
        const branch = branchByName.get(branchName);
        if (branch && shaMatchesGitRef(branch.headSha, wt.headSha)) return wt;
        if (branchName === defaultBranch && directCommits.some((commit) => shaMatchesGitRef(commit.fullSha, wt.headSha))) {
          return wt;
        }
      }
      return null;
    },
    [worktrees, currentRepoPath, branchPreviewContainsSha, branchByName, defaultBranch, directCommits],
  );

  const findWorktreeWithBranchCheckedOut = useCallback(
    (branchName: string): WorktreeInfo | null => {
      for (const wt of worktrees) {
        if (!isUsableOtherWorktree(wt, currentRepoPath)) continue;
        if (wt.branchName === branchName) return wt;
      }
      return null;
    },
    [worktrees, currentRepoPath],
  );

  const findOtherWorktreeByHeadSha = useCallback(
    (commitFullSha: string, commitShortSha: string): WorktreeInfo | null => {
      for (const wt of worktrees) {
        if (!isUsableOtherWorktree(wt, currentRepoPath)) continue;
        if (shaMatchesGitRef(wt.headSha, commitFullSha) || shaMatchesGitRef(wt.headSha, commitShortSha)) return wt;
      }
      return null;
    },
    [worktrees, currentRepoPath],
  );

  const branchCandidatesForCommit = useCallback(
    (sha: string): string[] => Array.from(commitShaToBranchNames.get(sha) ?? []),
    [commitShaToBranchNames],
  );

  const selectedCommitTargetOption = useMemo(() => {
    const byBranch = new Map<string, { targetSha: string; targetBranch: string; sourceRefs: string[] }>();
    for (const targetSha of selectedVisibleCommitShas) {
      const candidates = branchCandidatesForCommit(targetSha);
      if (candidates.length === 0) continue;
      const targetBranch = candidates.find((name) => name !== defaultBranch) ?? candidates[0];
      const sourceRefs = selectedVisibleCommitShas
        .filter((sha) => sha !== targetSha)
        .filter((sha) => {
          const sourceCandidates = new Set(branchCandidatesForCommit(sha));
          return !sourceCandidates.has(targetBranch);
        });
      byBranch.set(targetBranch, { targetSha, targetBranch, sourceRefs });
    }
    const options = Array.from(byBranch.values());
    const explicit = mergeTargetCommitSha
      ? options.find((option) => option.targetSha === mergeTargetCommitSha || option.targetBranch === (branchCandidatesForCommit(mergeTargetCommitSha)[0] ?? ''))
      : null;
    const selected = explicit ?? options[options.length - 1] ?? null;
    return {
      options,
      selected,
      targetBranch: selected?.targetBranch ?? null,
      sources: selected?.sourceRefs ?? [],
    };
  }, [selectedVisibleCommitShas, branchCandidatesForCommit, defaultBranch, mergeTargetCommitSha]);

  const pushableBranchByName = useMemo(() => {
    const entries = [
      ...(checkedOutBranchName === defaultBranch
        ? [{ name: defaultBranch, headSha: checkedOutHeadSha ?? '', unpushedCommits: unpushedDirectCommits.length, remoteSyncStatus: 'unpushed' as const }]
        : []),
      ...branches,
    ]
      .filter(
        (branch) =>
          !branch.name.startsWith('*') &&
          branch.unpushedCommits > 0 &&
          branch.remoteSyncStatus !== 'on-github',
      )
      .map((branch) => [branch.name, branch] as const);
    return new Map(entries);
  }, [branches, checkedOutBranchName, checkedOutHeadSha, defaultBranch, unpushedDirectCommits.length]);

  const selectedPushTargets = useMemo(() => {
    const resolvePushBranch = (targetSha: string): string | null => {
      const candidates = branchCandidatesForCommit(targetSha).filter((branchName) => pushableBranchByName.has(branchName));
      if (candidates.length === 0) return null;
      if (candidates.length === 1) return candidates[0];
      if (checkedOutBranchName && candidates.includes(checkedOutBranchName)) return checkedOutBranchName;
      return candidates.find((name) => name !== defaultBranch) ?? candidates[0];
    };
    const commitPreviewListForBranch = (branchName: string): BranchCommitPreview[] => {
      if (branchName === defaultBranch) {
        return unpushedDirectCommits.map((commit) => ({
          fullSha: commit.fullSha,
          sha: commit.sha,
          parentSha: commit.parentSha ?? null,
          message: commit.message,
          author: commit.author,
          date: commit.date,
          kind: commit.kind ?? 'commit',
        }));
      }
      return branchCommitPreviews[branchName] ?? [];
    };
    const map = new Map<string, { branchName: string; targetSha: string; targetIndex: number; commitCount: number }>();
    for (const sha of selectedVisibleCommitShas) {
      const targetBranch = resolvePushBranch(sha);
      if (!targetBranch) continue;
      const branch = pushableBranchByName.get(targetBranch);
      if (!branch) continue;
      const unpushedPreviews = commitPreviewListForBranch(targetBranch).slice(0, branch.unpushedCommits);
      const targetIndex = unpushedPreviews.findIndex((commit) => commit.fullSha === sha);
      if (targetIndex === -1) continue;
      const existing = map.get(targetBranch);
      if (!existing || targetIndex < existing.targetIndex) {
        map.set(targetBranch, {
          branchName: targetBranch,
          targetSha: sha,
          targetIndex,
          commitCount: unpushedPreviews.length - targetIndex,
        });
      }
    }
    return Array.from(map.values());
  }, [
    selectedVisibleCommitShas,
    branchCandidatesForCommit,
    pushableBranchByName,
    checkedOutBranchName,
    defaultBranch,
    unpushedDirectCommits,
    branchCommitPreviews,
  ]);

  const selectedStashIndices = useMemo(
    () =>
      Array.from(
        new Set(
          selectedVisibleCommitShas
            .map((sha) => /^STASH:(\d+)$/.exec(sha))
            .filter((match): match is RegExpExecArray => !!match)
            .map((match) => parseInt(match[1], 10)),
        ),
      ).sort((a, b) => a - b),
    [selectedVisibleCommitShas],
  );
  const hasSelectedUncommittedChanges = selectedVisibleCommitShas.includes('WORKING_TREE');
  const deletableSelectionCount = (hasSelectedUncommittedChanges ? 1 : 0) + selectedStashIndices.length;
  const deleteSelectionItems = [
    ...(hasSelectedUncommittedChanges ? ['Uncommitted changes'] : []),
    ...selectedStashIndices.map((idx) => `Stash ${idx + 1}`),
  ];
  const hasSelection = selectedVisibleCommitShas.length > 0;
  const pushableRemoteBranchCount = pushableBranchByName.size;
  const canPushCurrentBranch = !checkedOutIsDetached && !!checkedOutBranchName && pushableBranchByName.has(checkedOutBranchName);
  const pushCurrentBranchLabel = checkedOutBranchName ? `Push ${checkedOutBranchName}` : 'Push current branch';
  const selectedPushLabel = selectedPushTargets.length === 1
    ? selectedPushTargets[0].commitCount > 1
      ? `Push ${selectedPushTargets[0].commitCount} commits on ${selectedPushTargets[0].branchName}`
      : `Push ${selectedPushTargets[0].targetSha.slice(0, 7)} on ${selectedPushTargets[0].branchName}`
    : `Push ${selectedPushTargets.length} selected ranges`;

  /** Top-left of the transform layer's local space in viewport (screen) coordinates. */
  const getTransformLayerOriginScreen = useCallback((): { x: number; y: number } | null => {
    const host = mapPadHostRef.current;
    if (!host) return null;
    const hr = host.getBoundingClientRect();
    const cs = getComputedStyle(host);
    const bl = Number.parseFloat(cs.borderLeftWidth) || 0;
    const bt = Number.parseFloat(cs.borderTopWidth) || 0;
    const pl = Number.parseFloat(cs.paddingLeft) || MAP_GRID_INNER_PADDING_PX;
    const pt = Number.parseFloat(cs.paddingTop) || MAP_GRID_INNER_PADDING_PX;
    return { x: hr.left + bl + pl, y: hr.top + bt + pt };
  }, []);

  const flushCameraReactTick = useCallback(() => {
    if (panReactTrailingTimeoutRef.current != null) {
      window.clearTimeout(panReactTrailingTimeoutRef.current);
      panReactTrailingTimeoutRef.current = null;
    }
    startTransition(() => {
      setCameraRenderTick((tick) => tick + 1);
    });
    lastCameraPanReactEmitRef.current = performance.now();
  }, []);

  const applyRenderedCamera = (nextPanX: number, nextPanY: number, nextZoom: number) => {
    const prev = renderedCameraRef.current;
    renderedCameraRef.current = { panX: nextPanX, panY: nextPanY, zoom: nextZoom };
    const layer = transformLayerRef.current;
    if (layer) {
      layer.style.transform = `translate3d(${nextPanX}px, ${nextPanY}px, 0) scale(${nextZoom / GRID_RENDER_ZOOM})`;
    }
    if (Math.abs(renderedZoomRef.current - nextZoom) > ZOOM_SETTLE_EPSILON) {
      renderedZoomRef.current = nextZoom;
      setRenderedZoom(nextZoom);
    }

    const zoomChanged = Math.abs(nextZoom - prev.zoom) > ZOOM_SETTLE_EPSILON;
    if (zoomChanged) {
      flushCameraReactTick();
      return;
    }

    const now = performance.now();
    const elapsed = now - lastCameraPanReactEmitRef.current;
    if (elapsed >= MAP_GRID_CAMERA_PAN_REACT_THROTTLE_MS) {
      flushCameraReactTick();
      return;
    }
    if (panReactTrailingTimeoutRef.current != null) {
      window.clearTimeout(panReactTrailingTimeoutRef.current);
    }
    panReactTrailingTimeoutRef.current = window.setTimeout(() => {
      panReactTrailingTimeoutRef.current = null;
      flushCameraReactTick();
    }, MAP_GRID_CAMERA_PAN_REACT_THROTTLE_MS - elapsed);
  };

  const stepCamera = () => {
    cameraFrameRef.current = null;
    const rendered = renderedCameraRef.current;
    const targetPanX = panRef.current.x;
    const targetPanY = panRef.current.y;
    const targetZoom = zoomRef.current;
    const nextPanX =
      Math.abs(targetPanX - rendered.panX) <= CAMERA_SETTLE_EPSILON
        ? targetPanX
        : rendered.panX + (targetPanX - rendered.panX) * CAMERA_PAN_INTERPOLATION;
    const nextPanY =
      Math.abs(targetPanY - rendered.panY) <= CAMERA_SETTLE_EPSILON
        ? targetPanY
        : rendered.panY + (targetPanY - rendered.panY) * CAMERA_PAN_INTERPOLATION;
    const nextZoom =
      Math.abs(targetZoom - rendered.zoom) <= ZOOM_SETTLE_EPSILON
        ? targetZoom
        : rendered.zoom + (targetZoom - rendered.zoom) * CAMERA_ZOOM_INTERPOLATION;

    applyRenderedCamera(nextPanX, nextPanY, nextZoom);

    if (nextPanX !== targetPanX || nextPanY !== targetPanY || nextZoom !== targetZoom) {
      cameraFrameRef.current = window.requestAnimationFrame(stepCamera);
    } else {
      flushCameraReactTick();
    }
  };

  const scheduleCameraFrame = () => {
    if (cameraFrameRef.current != null) return;
    cameraFrameRef.current = window.requestAnimationFrame(stepCamera);
  };

  const markCameraInteraction = () => {
    if (!isCameraMoving) setIsCameraMoving(true);
    if (interactionIdleTimeoutRef.current != null) {
      window.clearTimeout(interactionIdleTimeoutRef.current);
    }
    interactionIdleTimeoutRef.current = window.setTimeout(() => {
      interactionIdleTimeoutRef.current = null;
      setIsCameraMoving(false);
    }, 90);
  };

  const syncCamera = (nextPanX: number, nextPanY: number, nextZoom: number) => {
    panRef.current = { x: nextPanX, y: nextPanY };
    zoomRef.current = nextZoom;
    markCameraInteraction();
    scheduleCameraFrame();
  };

  const zoomToPoint = (clientX: number, clientY: number, nextZoom: number) => {
    const targetZoom = clampZoom(nextZoom);
    const rendered = renderedCameraRef.current;
    const origin = getTransformLayerOriginScreen();
    if (!origin) {
      syncCamera(panRef.current.x, panRef.current.y, targetZoom);
      return;
    }
    const anchorX = clientX - origin.x;
    const anchorY = clientY - origin.y;
    const scaleBefore = rendered.zoom / GRID_RENDER_ZOOM;
    const scaleAfter = targetZoom / GRID_RENDER_ZOOM;
    const worldX = (anchorX - rendered.panX) / scaleBefore;
    const worldY = (anchorY - rendered.panY) / scaleBefore;
    syncCamera(anchorX - worldX * scaleAfter, anchorY - worldY * scaleAfter, targetZoom);
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.ctrlKey || event.metaKey) {
      const factor = Math.exp(-event.deltaY * GRID_ZOOM_WHEEL_SENSITIVITY);
      zoomToPoint(event.clientX, event.clientY, zoomRef.current * factor);
      return;
    }

    syncCamera(panRef.current.x - event.deltaX, panRef.current.y - event.deltaY, zoomRef.current);
  };

  const collectCommitSelectionFromMarquee = useCallback(
    (rect: { left: number; top: number; width: number; height: number }): string[] => {
      const viewport = scrollContainerRef.current;
      const origin = getTransformLayerOriginScreen();
      if (!viewport || !origin) return [];
      const viewportRect = viewport.getBoundingClientRect();
      const scale = renderedCameraRef.current.zoom / GRID_RENDER_ZOOM;
      if (scale <= 0) return [];
      const selected: string[] = [];
      const left = rect.left;
      const right = rect.left + rect.width;
      const top = rect.top;
      const bottom = rect.top + rect.height;
      for (const node of renderNodes) {
        if (!shouldRenderNode(node)) continue;
        const nodeLeft = origin.x + renderedCameraRef.current.panX + node.x * scale - viewportRect.left;
        const nodeTop = origin.y + renderedCameraRef.current.panY + node.y * scale - viewportRect.top;
        const nodeRight = nodeLeft + CARD_WIDTH * scale;
        const nodeBottom = nodeTop + (CARD_BODY_TOP_OFFSET + CARD_HEIGHT) * scale;
        const intersects = !(nodeRight < left || nodeLeft > right || nodeBottom < top || nodeTop > bottom);
        if (intersects) selected.push(node.commit.id);
      }
      return selected;
    },
    [getTransformLayerOriginScreen, renderNodes],
  );

  const startMarqueeDrag = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    const target = event.target as HTMLElement | null;
    if (target?.closest('[data-commit-card]')) return;
    if (target?.closest('button, a, input, textarea, select')) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    event.preventDefault();
    const bounds = container.getBoundingClientRect();
    const startX = event.clientX - bounds.left;
    const startY = event.clientY - bounds.top;
    marqueeDragRef.current = {
      startX,
      startY,
      currentX: startX,
      currentY: startY,
      additive: event.metaKey || event.ctrlKey,
    };
    marqueeMovedRef.current = false;
    marqueeBaseSelectionRef.current = event.metaKey || event.ctrlKey ? selectedVisibleCommitShas : [];
    setIsMarqueeSelecting(true);
    setMarqueeRect({ left: startX, top: startY, width: 0, height: 0 });
  };

  useEffect(() => {
    onInteractionChange?.(isCameraMoving || isMarqueeSelecting);
  }, [isCameraMoving, isMarqueeSelecting, onInteractionChange]);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const marqueeDrag = marqueeDragRef.current;
      if (marqueeDrag) {
        const container = scrollContainerRef.current;
        if (!container) return;
        const bounds = container.getBoundingClientRect();
        marqueeDrag.currentX = event.clientX - bounds.left;
        marqueeDrag.currentY = event.clientY - bounds.top;
        if (!marqueeMovedRef.current && (Math.abs(marqueeDrag.currentX - marqueeDrag.startX) > 2 || Math.abs(marqueeDrag.currentY - marqueeDrag.startY) > 2)) {
          marqueeMovedRef.current = true;
        }
        const nextRect = normalizeMarqueeRect(marqueeDrag);
        setMarqueeRect(nextRect);
        const commitSelection = collectCommitSelectionFromMarquee(nextRect);
        setSelectedCommitShas(
          marqueeDrag.additive
            ? Array.from(new Set([...marqueeBaseSelectionRef.current, ...commitSelection]))
            : Array.from(new Set(commitSelection)),
        );
        if (!marqueeDrag.additive) {
          setMergeTargetCommitSha(commitSelection[commitSelection.length - 1] ?? null);
        }
        return;
      }
    };
    const handleUp = () => {
      if (marqueeDragRef.current) {
        const marqueeDragged = marqueeMovedRef.current;
        marqueeDragRef.current = null;
        marqueeMovedRef.current = false;
        setIsMarqueeSelecting(false);
        setMarqueeRect(null);
        if (!marqueeDragged) {
          setSelectedCommitShas([]);
          setMergeTargetCommitSha(null);
        }
        return;
      }
      if (interactionIdleTimeoutRef.current == null) setIsCameraMoving(false);
      flushCameraReactTick();
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [flushCameraReactTick, collectCommitSelectionFromMarquee, selectedVisibleCommitShas]);

  useLayoutEffect(() => {
    applyRenderedCamera(0, 0, GRID_ZOOM_DEFAULT);
    return () => {
      if (interactionIdleTimeoutRef.current != null) {
        window.clearTimeout(interactionIdleTimeoutRef.current);
      }
      if (cameraFrameRef.current != null) {
        window.cancelAnimationFrame(cameraFrameRef.current);
      }
      if (panReactTrailingTimeoutRef.current != null) {
        window.clearTimeout(panReactTrailingTimeoutRef.current);
        panReactTrailingTimeoutRef.current = null;
      }
    };
  }, []);

  /** Reapply camera transform after React commits — `style` omits `transform` so reconciliation won't strip imperative pan/zoom. */
  useLayoutEffect(() => {
    const layer = transformLayerRef.current;
    if (!layer) return;
    const r = renderedCameraRef.current;
    layer.style.transform = `translate3d(${r.panX}px, ${r.panY}px, 0) scale(${r.zoom / GRID_RENDER_ZOOM})`;
  });

  useEffect(() => {
    onGridSearchResultCountChange?.(normalizedSearchQuery ? matchingNodes.length : null);
  }, [matchingNodes.length, normalizedSearchQuery, onGridSearchResultCountChange]);

  useEffect(() => {
    if (!normalizedSearchQuery) {
      onGridSearchFocusChange?.(null);
      return;
    }
    const firstMatch = matchingNodes[0]?.commit.id ?? null;
    onGridSearchFocusChange?.(firstMatch);
  }, [matchingNodes, normalizedSearchQuery, onGridSearchFocusChange]);

  useLayoutEffect(() => {
    if (!gridFocusSha) return;
    const viewport = scrollContainerRef.current;
    const focusNode = focusedNode;
    if (!viewport || !focusNode) return;
    const origin = getTransformLayerOriginScreen();
    if (!origin) return;
    const viewportRect = viewport.getBoundingClientRect();
    const targetZoom = renderedCameraRef.current.zoom;
    const scale = targetZoom / GRID_RENDER_ZOOM;
    const nodeCenterX = focusNode.x + CARD_WIDTH / 2;
    const nodeCenterY = focusNode.y + CARD_BODY_TOP_OFFSET + CARD_HEIGHT / 2;
    const targetScreenX = viewportRect.left + viewportRect.width / 2;
    const targetScreenY = viewportRect.top + viewportRect.height / 2;
    syncCamera(
      targetScreenX - origin.x - nodeCenterX * scale,
      targetScreenY - origin.y - nodeCenterY * scale,
      targetZoom,
    );
  }, [gridFocusSha, gridSearchJumpToken, focusedNode, getTransformLayerOriginScreen]);

  const viewportClientW = viewportClientSize?.width ?? scrollContainerRef.current?.clientWidth ?? 0;
  const viewportClientH = viewportClientSize?.height ?? scrollContainerRef.current?.clientHeight ?? 0;
  const rawVisibleBounds =
    viewportClientW > 0 && viewportClientH > 0
      ? getViewportContentBoundsFromClientSize(viewportClientW, viewportClientH, renderedCameraRef.current, {
          innerPaddingPx: MAP_GRID_INNER_PADDING_PX,
        })
      : null;
  const visibleBounds =
    rawVisibleBounds != null
      ? withCullInsetScreenPx(
          rawVisibleBounds,
          renderedCameraRef.current.zoom,
          MAP_GRID_CULL_VIEWPORT_INSET_SCREEN_PX,
        )
      : null;
  const cullConnectorPath = (connector: { id: string; fromX: number; fromY: number; toX: number; toY: number }): boolean => {
    if (!visibleBounds) return true;
    if (connector.id.startsWith('merge:')) {
      return mergeOrthogonalConnectorIntersectsViewportBounds(
        connector.fromX,
        connector.fromY,
        connector.toX,
        connector.toY,
        connectorCornerRadiusPx,
        visibleBounds,
      );
    }
    return roundedElbowConnectorIntersectsViewportBounds(
      connector.fromX,
      connector.fromY,
      connector.toX,
      connector.toY,
      connectorCornerRadiusPx,
      GRID_CONNECTOR_GAP_PX,
      visibleBounds,
    );
  };

  useLayoutEffect(() => {
    const viewport = scrollContainerRef.current;
    if (!viewport) return;
    if (viewport.clientWidth <= 0 || viewport.clientHeight <= 0) return;
    const w = viewport.clientWidth;
    const h = viewport.clientHeight;
    setViewportClientSize((prev) => (prev?.width === w && prev?.height === h ? prev : { width: w, height: h }));
    const rawBounds = getViewportContentBoundsFromClientSize(w, h, renderedCameraRef.current, {
      innerPaddingPx: MAP_GRID_INNER_PADDING_PX,
    });
    if (!rawBounds) {
      setVisibleNodeIds((prev) => (prev === null ? prev : null));
      return;
    }
    const bounds = withCullInsetScreenPx(
      rawBounds,
      renderedCameraRef.current.zoom,
      MAP_GRID_CULL_VIEWPORT_INSET_SCREEN_PX,
    );
    const nextVisible = collectVisibleCommitIdsFromSpatialIndex(
      commitCullSpatialIndex,
      bounds,
      nodeByVisualId,
      labelTopPx,
    );
    /* Expanded clumps: spatial cull rects use live zoom while row layout uses GRID_LAYOUT_RENDER_ZOOM — they
     * can disagree, so commits stay out of visibleNodeIds. Always allow laid-out commits for open
     * multi-commit clusters into the viewport set. */
    for (const node of renderNodes) {
      const ck = clusterKeyByCommitId.get(node.commit.visualId);
      if (!ck) continue;
      const count = clusterCounts.get(ck) ?? 1;
      if (count <= 1) continue;
      const clusterExpanded =
        ck === checkedOutClusterKey ||
        manuallyOpenedClumps.has(ck) ||
        !defaultCollapsedClumps.has(ck);
      if (clusterExpanded) nextVisible.add(node.commit.visualId);
    }
    setVisibleNodeIds((prev) => (visibleCommitIdSetEquals(prev, nextVisible) ? prev : nextVisible));
  }, [
    renderedZoom,
    gridSearchJumpToken,
    gridFocusSha,
    isCameraMoving,
    cameraRenderTick,
    manuallyOpenedClumps,
    checkedOutClusterKey,
    defaultCollapsedClumps,
    clusterKeyByCommitId,
    clusterCounts,
    renderNodes,
    viewportClientSize,
    commitCullSpatialIndex,
    nodeByVisualId,
    labelTopPx,
  ]);

  useLayoutEffect(() => {
    const viewport = scrollContainerRef.current;
    if (!viewport) return;
    const handleResize = () => {
      const w = viewport.clientWidth;
      const h = viewport.clientHeight;
      if (w <= 0 || h <= 0) return;
      setViewportClientSize((prev) => (prev?.width === w && prev?.height === h ? prev : { width: w, height: h }));
    };
    handleResize();
    const ro = new ResizeObserver(handleResize);
    ro.observe(viewport);
    return () => ro.disconnect();
  }, [allCommits.length]);

  const renderedNodeCount = renderNodes.filter((node) => shouldRenderNode(node)).length;
  const renderedMergeConnectorCount = mergeConnectors.filter((connector) => cullConnectorPath(connector)).length;
  const renderedConnectorCount = connectors.filter((connector) => cullConnectorPath(connector)).length;

  const handleCommitCardClick = useCallback(
    (event: React.MouseEvent, node: Node) => {
      event.stopPropagation();
      const commitSha = node.commit.id;
      if (event.shiftKey) {
        setSelectedCommitShas((prev) =>
          prev.includes(commitSha)
            ? prev.filter((sha) => sha !== commitSha)
            : [...prev, commitSha],
        );
        setMergeTargetCommitSha(commitSha);
      } else {
        setSelectedCommitShas((prev) => (prev.includes(commitSha) ? [] : [commitSha]));
        setMergeTargetCommitSha((current) => (current === commitSha ? null : commitSha));
      }

      const shouldCheckout = event.metaKey || event.ctrlKey || event.detail >= 2;
      if (!shouldCheckout) return;
      if (commitSha === 'WORKING_TREE') return;

      const shortSha = commitSha.length >= 40 ? commitSha.slice(0, 7) : commitSha;
      let otherWorktree: WorktreeInfo | null = null;
      if (node.commit.branchName) {
        otherWorktree = findOtherWorktreeForCommit(node.commit.branchName, commitSha, shortSha);
        if (!otherWorktree) {
          otherWorktree = findWorktreeWithBranchCheckedOut(node.commit.branchName);
        }
      } else {
        otherWorktree = findOtherWorktreeByHeadSha(commitSha, shortSha);
      }
      if (otherWorktree && onSwitchToWorktree) {
        void onSwitchToWorktree(otherWorktree.path);
        return;
      }
      onCommitClick?.({ commitSha });
    },
    [
      findOtherWorktreeByHeadSha,
      findOtherWorktreeForCommit,
      findWorktreeWithBranchCheckedOut,
      onCommitClick,
      onSwitchToWorktree,
    ],
  );

  const confirmCommit = useCallback(async () => {
    if (!onCommitLocalChanges) return;
    const ok = await onCommitLocalChanges(commitMessageDraft);
    if (ok) {
      setCommitDialogOpen(false);
      setCommitMessageDraft('');
    }
  }, [onCommitLocalChanges, commitMessageDraft]);

  const confirmDeleteSelection = useCallback(async () => {
    if (!onDeleteSelection) return;
    await onDeleteSelection({
      branchNames: [],
      discardUncommittedChanges: hasSelectedUncommittedChanges,
      stashIndices: selectedStashIndices,
    });
    setDeleteConfirmOpen(false);
    setSelectedCommitShas([]);
    setMergeTargetCommitSha(null);
  }, [onDeleteSelection, hasSelectedUncommittedChanges, selectedStashIndices]);

  const confirmCreateBranchFromSelection = useCallback(async () => {
    if (!onCreateBranchFromNode || selectedVisibleCommitShas.length !== 1) return;
    const target = selectedVisibleCommitShas[0];
    if (!(target === 'WORKING_TREE' || target.startsWith('STASH:'))) return;
    const trimmed = newBranchName.trim();
    if (!trimmed) return;
    await onCreateBranchFromNode(target, trimmed);
    setNewBranchDialogOpen(false);
    setNewBranchName('');
    setSelectedCommitShas([]);
    setMergeTargetCommitSha(null);
  }, [onCreateBranchFromNode, selectedVisibleCommitShas, newBranchName]);

  const selectedCommitCanCreateBranch =
    selectedVisibleCommitShas.length === 1 &&
    (selectedVisibleCommitShas[0] === 'WORKING_TREE' || selectedVisibleCommitShas[0].startsWith('STASH:'));

  void [
    unpushedCommitShasByBranch,
    openPRs,
    onLoadMore,
    view,
    staleBranches,
    isLoading,
    scrollRequest,
    focusedErrorBranch,
    mapTopInsetPx,
    orientation,
    visibleNodesBySha,
    freshCopyBranchNames,
  ];

  return (
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <MapGridDebugPanel
        isOpen={isDebugOpen}
        onToggle={() => setIsDebugOpen((open) => !open)}
        onClose={() => setIsDebugOpen(false)}
        visibleBounds={visibleBounds}
        renderedNodeCount={renderedNodeCount}
        totalNodeCount={renderNodes.length}
        renderedMergeConnectorCount={renderedMergeConnectorCount}
        totalMergeConnectorCount={mergeConnectors.length}
        renderedConnectorCount={renderedConnectorCount}
        totalConnectorCount={connectors.length}
        mapGridCullViewportInsetScreenPx={MAP_GRID_CULL_VIEWPORT_INSET_SCREEN_PX}
        debugRows={debugRows}
        branchDebugRows={branchDebugRows}
        connectorDecisions={connectorDecisions}
      />
      {allCommits.length === 0 ? (
        <div className="flex flex-1 min-h-0 items-center justify-center py-20">
          <div className="rounded-xl border border-border/50 bg-muted/30 px-4 py-3">
            <p className="text-sm text-muted-foreground">No commits to render</p>
          </div>
        </div>
      ) : (
        <MapGridCanvas
          scrollContainerRef={scrollContainerRef}
          mapPadHostRef={mapPadHostRef}
          transformLayerRef={transformLayerRef}
          isMarqueeSelecting={isMarqueeSelecting}
          contentWidth={contentWidth}
          contentHeight={contentHeight}
          isCameraMoving={isCameraMoving}
          onWheel={handleWheel}
          onMouseDown={startMarqueeDrag}
          labelTopPx={labelTopPx}
          inverseZoomStyle={inverseZoomStyle}
          displayZoom={displayZoom}
          iconScaleStyle={iconScaleStyle}
          selectedVisibleCommitShas={selectedVisibleCommitShas}
          normalizedSearchQuery={normalizedSearchQuery}
          matchingNodeIds={matchingNodeIds}
          focusedNode={focusedNode}
          renderNodes={renderNodes}
          shouldRenderNode={shouldRenderNode}
          checkedOutClusterKey={checkedOutClusterKey}
          manuallyOpenedClumps={manuallyOpenedClumps}
          defaultCollapsedClumps={defaultCollapsedClumps}
          leadByClusterKey={leadByClusterKey}
          clusterKeyByCommitId={clusterKeyByCommitId}
          clusterCounts={clusterCounts}
          commitIdsWithRenderedAncestry={commitIdsWithRenderedAncestry}
          nodeWarnings={nodeWarnings}
          connectorParentShas={connectorParentShas}
          branchStartShas={branchStartShas}
          branchOffNodeShas={branchOffNodeShas}
          crossBranchOutgoingShas={crossBranchOutgoingShas}
          branchBaseCommitByName={branchBaseCommitByName}
          branchStartAccentClass={branchStartAccentClass}
          connectorParentAccentClass={connectorParentAccentClass}
          commitCornerRadiusPx={commitCornerRadiusPx}
          lineStrokeWidth={lineStrokeWidth}
          haloStrokeWidth={haloStrokeWidth}
          connectorCornerRadiusPx={connectorCornerRadiusPx}
          pointFormatter={pointFormatter}
          connectors={connectors}
          mergeConnectors={mergeConnectors}
          cullConnectorPath={cullConnectorPath}
          flushCameraReactTick={flushCameraReactTick}
          setManuallyOpenedClumps={setManuallyOpenedClumps}
          onCommitCardClick={handleCommitCardClick}
        />
      )}

      {marqueeRect && isMarqueeSelecting ? (
        <div
          className="pointer-events-none absolute z-[60] border border-primary/40 bg-primary/10"
          style={{
            left: marqueeRect.left,
            top: marqueeRect.top,
            width: marqueeRect.width,
            height: marqueeRect.height,
          }}
        />
      ) : null}

      <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-[70] flex flex-wrap items-center gap-2">
        <div className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setCommitDialogOpen(true)}
            disabled={!onCommitLocalChanges || commitDisabled || hasSelection || commitInProgress}
            className="rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
          >
            {commitInProgress ? 'Committing...' : 'Commit'}
          </button>
          <button
            type="button"
            onClick={() => void onStageAllChanges?.()}
            disabled={!onStageAllChanges || commitDisabled || hasSelection || stageInProgress}
            className="rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
          >
            {stageInProgress ? 'Staging...' : 'Stage all'}
          </button>
          <button
            type="button"
            onClick={() => void onStashLocalChanges?.()}
            disabled={!onStashLocalChanges || stashDisabled || hasSelection || stashInProgress}
            className="rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
          >
            {stashInProgress ? 'Stashing...' : 'Stash'}
          </button>
          <button
            type="button"
            onClick={() => void onPushCurrentBranch?.()}
            disabled={!onPushCurrentBranch || !canPushCurrentBranch || hasSelection || pushInProgress}
            className="rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
          >
            {pushInProgress ? 'Pushing...' : pushCurrentBranchLabel}
          </button>
          <button
            type="button"
            onClick={() => void onPushAllBranches?.()}
            disabled={!onPushAllBranches || pushableRemoteBranchCount < 2 || hasSelection || pushInProgress}
            className="rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
          >
            Push all
          </button>
          <button
            type="button"
            onClick={() => void onPushCommitTargets?.(selectedPushTargets.map((target) => ({ branchName: target.branchName, targetSha: target.targetSha })))}
            disabled={!onPushCommitTargets || selectedPushTargets.length === 0 || pushInProgress}
            className="rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
            title={selectedPushTargets.length > 0 ? selectedPushLabel : 'Select commits to push'}
          >
            {selectedPushTargets.length > 0 ? selectedPushLabel : 'Push selected'}
          </button>
          <button
            type="button"
            onClick={() => setDeleteConfirmOpen(true)}
            disabled={!onDeleteSelection || deletableSelectionCount === 0 || deleteInProgress}
            className="rounded-lg px-2.5 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {deleteInProgress ? 'Deleting...' : 'Delete selection'}
          </button>
          <button
            type="button"
            onClick={() => setNewBranchDialogOpen(true)}
            disabled={!onCreateBranchFromNode || !selectedCommitCanCreateBranch || createBranchFromNodeInProgress}
            className="rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
          >
            {createBranchFromNodeInProgress ? 'Creating...' : 'Create branch'}
          </button>
        </div>

        {selectedVisibleCommitShas.length > 1 && selectedCommitTargetOption.options.length > 0 && selectedCommitTargetOption.targetBranch && onMergeRefsIntoBranch ? (
          <div className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm">
            <span className="px-1 text-xs font-medium text-muted-foreground">merge to</span>
            {selectedCommitTargetOption.options.map((option) => {
              const isActive = option.targetBranch === selectedCommitTargetOption.targetBranch;
              return (
                <button
                  key={`merge-${option.targetBranch}`}
                  type="button"
                  onClick={() => setMergeTargetCommitSha(option.targetSha)}
                  className={cn(
                    'rounded-full px-2.5 py-1 text-xs font-medium transition-colors',
                    isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                  )}
                >
                  {option.targetBranch}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => void onMergeRefsIntoBranch(selectedCommitTargetOption.sources, selectedCommitTargetOption.targetBranch!)}
              disabled={selectedCommitTargetOption.sources.length === 0 || mergeInProgress}
              className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {mergeInProgress ? 'Merging...' : 'Confirm'}
            </button>
          </div>
        ) : null}

        {worktrees.length > 0 && (onSwitchToWorktree || onRemoveWorktree) ? (
          <div className="pointer-events-auto relative">
            <button
              type="button"
              onClick={() => setWorktreeMenuOpen((open) => !open)}
              className="rounded-full border border-border bg-card/95 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-accent"
            >
              {worktrees.length} {worktrees.length === 1 ? 'Worktree' : 'Worktrees'}
            </button>
            {worktreeMenuOpen ? (
              <div className="absolute bottom-full left-0 mb-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border bg-card p-2">
                {worktrees.map((worktree) => (
                  <div key={worktree.path} className="mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30">
                    <div className="min-w-0">
                      <div className="truncate text-xs font-medium text-foreground" title={worktree.path}>
                        {isOtherWorktree(worktree, currentRepoPath) ? worktreeShortLabel(worktree.path) : 'This window'}
                      </div>
                      <div className="truncate text-[11px] text-muted-foreground">
                        {worktree.branchName ?? 'detached'} • {worktree.headSha.slice(0, 7)}
                      </div>
                    </div>
                    {isOtherWorktree(worktree, currentRepoPath) ? (
                      <div className="flex items-center gap-1">
                        {onSwitchToWorktree ? (
                          <button
                            type="button"
                            onClick={() => {
                              setWorktreeMenuOpen(false);
                              void onSwitchToWorktree(worktree.path);
                            }}
                            disabled={removeWorktreeInProgress || worktree.pathExists === false}
                            className="rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            Switch
                          </button>
                        ) : null}
                        {onRemoveWorktree ? (
                          <button
                            type="button"
                            onClick={() => void onRemoveWorktree(worktree.path, worktree.isPrunable)}
                            disabled={removeWorktreeInProgress}
                            className="rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {removeWorktreeInProgress ? '...' : 'Remove'}
                          </button>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      <MapGridDialogs
        commitDialogOpen={commitDialogOpen}
        commitMessageDraft={commitMessageDraft}
        onCommitMessageDraftChange={setCommitMessageDraft}
        onCommitDialogClose={() => setCommitDialogOpen(false)}
        onCommitConfirm={() => void confirmCommit()}
        commitInProgress={commitInProgress}
        deleteConfirmOpen={deleteConfirmOpen}
        deleteSelectionItems={deleteSelectionItems}
        onDeleteConfirmClose={() => setDeleteConfirmOpen(false)}
        onDeleteConfirm={() => void confirmDeleteSelection()}
        deleteInProgress={deleteInProgress}
        deletableSelectionCount={deletableSelectionCount}
        newBranchDialogOpen={newBranchDialogOpen}
        newBranchName={newBranchName}
        onNewBranchNameChange={setNewBranchName}
        onNewBranchDialogClose={() => setNewBranchDialogOpen(false)}
        onNewBranchConfirm={() => void confirmCreateBranchFromSelection()}
        createBranchFromNodeInProgress={createBranchFromNodeInProgress}
      />
    </div>
  );
}
