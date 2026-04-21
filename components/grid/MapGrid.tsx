import {
  Fragment,
  startTransition,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import {
  buildLanes,
  buildMergeOrthogonalPath,
  CARD_HEIGHT,
  CARD_BODY_TOP_OFFSET,
  CARD_WIDTH,
  CONNECTOR_COLOR,
  type BranchGridViewProps,
  type Node,
} from './LayoutGrid';
import { computeBranchGridLayout } from './branchGridLayoutModel';
import { buildRoundedElbowPath } from './gridPathUtils';

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

/** Opacity ramp for commits that re-enter the viewport after culling (double rAF before fade). */
function MapGridCommitWrapper({
  fadeIn,
  className,
  style,
  children,
}: {
  fadeIn: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const [opaque, setOpaque] = useState(!fadeIn);
  useLayoutEffect(() => {
    if (!fadeIn) {
      setOpaque(true);
      return;
    }
    setOpaque(false);
    let innerRaf: number | null = null;
    const outerRaf = requestAnimationFrame(() => {
      innerRaf = requestAnimationFrame(() => setOpaque(true));
    });
    return () => {
      cancelAnimationFrame(outerRaf);
      if (innerRaf != null) cancelAnimationFrame(innerRaf);
    };
  }, [fadeIn]);
  return (
    <div
      className={className}
      style={{
        ...style,
        opacity: opaque ? 1 : 0,
        transition: fadeIn ? 'opacity 240ms ease-out' : undefined,
      }}
    >
      {children}
    </div>
  );
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

export default function BranchGridMap({
  branches,
  mergeNodes = [],
  directCommits = [],
  unpushedDirectCommits = [],
  defaultBranch,
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
  const dragStateRef = useRef<{ x: number; y: number; panX: number; panY: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isCameraMoving, setIsCameraMoving] = useState(false);
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
  const showCommitMetadata = displayZoom > 0.5;

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
    'border-slate-400/70 ring-2 ring-slate-400/20 shadow-[0_0_0_1px_rgba(100,116,139,0.14)]';
  const branchStartAccentClass =
    'border-blue-500 ring-2 ring-blue-500/35 shadow-[0_0_0_1px_rgba(59,130,246,0.18)]';

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
      if (!dragStateRef.current) setIsCameraMoving(false);
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

  const startPanDrag = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    const target = event.target as HTMLElement | null;
    if (target?.closest('button, a, input, textarea, select')) return;
    event.preventDefault();
    setIsDragging(true);
    dragStateRef.current = {
      x: event.clientX,
      y: event.clientY,
      panX: panRef.current.x,
      panY: panRef.current.y,
    };
  };

  useEffect(() => {
    onInteractionChange?.(isDragging || isCameraMoving);
  }, [isDragging, isCameraMoving, onInteractionChange]);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const drag = dragStateRef.current;
      if (!drag) return;
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      syncCamera(drag.panX + dx, drag.panY + dy, zoomRef.current);
    };
    const handleUp = () => {
      dragStateRef.current = null;
      setIsDragging(false);
      if (interactionIdleTimeoutRef.current == null) setIsCameraMoving(false);
      flushCameraReactTick();
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [flushCameraReactTick]);

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

  return (
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="pointer-events-none absolute bottom-4 right-4 z-[10000] flex items-end gap-2">
        <button
          type="button"
          onClick={() => setIsDebugOpen((open) => !open)}
          className={cn(
            'pointer-events-auto inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium shadow-sm transition-colors',
            isDebugOpen
              ? 'border-primary/30 bg-primary/10 text-primary'
              : 'border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground'
          )}
        >
          Debug
        </button>
      </div>
      {isDebugOpen ? (
        <div className="absolute bottom-14 right-4 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 shadow-lg backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-foreground">Commit debug</p>
              <p className="text-xs text-muted-foreground">Rendered branch summaries and connector decisions</p>
            </div>
            <button
              type="button"
              onClick={() => setIsDebugOpen(false)}
              className="rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              Close
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3">
            <pre className="whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground">
              {[
                `Cull viewport (inset ${MAP_GRID_CULL_VIEWPORT_INSET_SCREEN_PX}px screen/side): ${visibleBounds ? `${(visibleBounds.right - visibleBounds.left).toFixed(0)} x ${(visibleBounds.bottom - visibleBounds.top).toFixed(0)} content px` : 'unavailable'}`,
                `Rendered nodes: ${renderedNodeCount} / ${renderNodes.length}`,
                `Rendered merge connectors: ${renderedMergeConnectorCount} / ${mergeConnectors.length}`,
                `Rendered connectors: ${renderedConnectorCount} / ${connectors.length}`,
                '',
                ...debugRows,
                ...branchDebugRows,
                '',
                ...connectorDecisions.map((decision) => `${decision.rendered ? 'rendered' : 'skipped'} [${decision.kind}] ${decision.parent.slice(0, 7)} -> ${decision.child.slice(0, 7)} (${decision.reason})`),
              ].join('\n')}
            </pre>
          </div>
        </div>
      ) : null}
      {allCommits.length === 0 ? (
        <div className="flex flex-1 min-h-0 items-center justify-center py-20">
          <div className="rounded-xl border border-border/50 bg-muted/30 shadow-inner px-4 py-3">
            <p className="text-sm text-muted-foreground">No commits to render</p>
          </div>
        </div>
      ) : (
        <div
          ref={scrollContainerRef}
          className="flex-1 min-h-0 overflow-hidden"
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div
            ref={mapPadHostRef}
            className="relative min-w-full p-2.5"
            onWheel={handleWheel}
            onMouseDown={startPanDrag}
            style={{ width: contentWidth, minWidth: '100%', height: contentHeight }}
          >
            <div
              ref={transformLayerRef}
              className="absolute left-0 top-0"
              style={{
                width: contentWidth,
                height: contentHeight,
                transformOrigin: 'top left' as const,
                ...(isDragging || isCameraMoving ? { willChange: 'transform' as const } : {}),
              }}
            >
              {renderNodes.filter((node) => shouldRenderNode(node)).map((node) => {
            const clusterKey = clusterKeyByCommitId.get(node.commit.visualId);
            const isClusterOpen = clusterKey
              ? clusterKey === checkedOutClusterKey || manuallyOpenedClumps.has(clusterKey) || !defaultCollapsedClumps.has(clusterKey)
              : false;
            const isTop = clusterKey ? leadByClusterKey.get(clusterKey) === node.commit.id : false;
            const clumpCount = clusterKey ? clusterCounts.get(clusterKey) ?? 1 : 1;
            const hasRenderedAncestry = commitIdsWithRenderedAncestry.has(node.commit.id);
            const nodeWarningsForCard = nodeWarnings.get(node.commit.id) ?? [];
            const showDataShapeError = nodeWarningsForCard.length > 0 && !hasRenderedAncestry;
            return (
            <MapGridCommitWrapper
              key={node.commit.visualId}
              fadeIn={false}
              className={cn(
                'group absolute z-20',
                normalizedSearchQuery && !matchingNodeIds.has(node.commit.id)
                  ? isCameraMoving
                    ? 'opacity-10'
                    : 'opacity-10 blur-[0.5px]'
                  : '',
                normalizedSearchQuery && matchingNodeIds.has(node.commit.id) ? 'scale-[1.01]' : '',
                focusedNode?.commit.id === node.commit.id ? 'z-30 scale-[1.015]' : ''
              )}
              style={{ left: node.x, top: node.y, width: CARD_WIDTH, height: CARD_BODY_TOP_OFFSET + CARD_HEIGHT + 4, overflow: 'visible' }}
            >
              <div className="absolute left-0 w-full" style={{ ...inverseZoomStyle, top: `${labelTopPx}px` }}>
                <div className="flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0">
                  <div
                    className={cn(
                      'min-w-0 flex-1 text-sm font-medium leading-none text-muted-foreground',
                      displayZoom <= 0.5 ? 'overflow-hidden text-ellipsis whitespace-nowrap' : 'break-words whitespace-normal',
                    )}
                  >
                    {node.commit.branchName}/{node.commit.id.slice(0, 7)}
                  </div>
                  {isTop && clumpCount > 1 ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (!clusterKey || clusterKey === checkedOutClusterKey) return;
                        setManuallyOpenedClumps((prev) => {
                          const next = new Set(prev);
                          if (next.has(clusterKey)) next.delete(clusterKey);
                          else next.add(clusterKey);
                          return next;
                        });
                        flushCameraReactTick();
                      }}
                      className="inline-flex items-center bg-transparent p-0 text-sm font-medium leading-none text-muted-foreground"
                    >
                      {isClusterOpen ? '⌃' : `x${clumpCount}`}
                    </button>
                  ) : null}
                </div>
              </div>
              <div
                className={cn(
                  'absolute left-0 h-[176px] w-full overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50 bg-card hover:border-border',
                  isCameraMoving
                    ? 'transition-none'
                    : 'transition-[border-color,box-shadow] duration-200 ease-in-out hover:shadow-sm',
                  branchOffNodeShas.has(node.commit.id) ||
                  branchStartShas.has(node.commit.id) ||
                  crossBranchOutgoingShas.has(node.commit.id)
                    ? branchStartAccentClass
                    : connectorParentShas.has(node.commit.id)
                      ? connectorParentAccentClass
                    : branchBaseCommitByName.get(node.commit.branchName)?.id === node.commit.id
                      ? 'border-amber-500 ring-2 ring-amber-500/35 shadow-[0_0_0_1px_rgba(245,158,11,0.18)]'
                      : showDataShapeError
                        ? 'border-red-500 ring-2 ring-red-500/25 shadow-[0_0_0_1px_rgba(239,68,68,0.12)]'
                        : '',
                  normalizedSearchQuery && matchingNodeIds.has(node.commit.id) && !isCameraMoving ? 'shadow-md' : '',
                  focusedNode?.commit.id === node.commit.id ? cn('ring-2 ring-primary/20', !isCameraMoving && 'shadow-md') : ''
                )}
                style={{
                  top: 0,
                  borderWidth: `${lineStrokeWidth}px`,
                  borderColor: CONNECTOR_COLOR,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: `${commitCornerRadiusPx}px`,
                  borderBottomRightRadius: `${commitCornerRadiusPx}px`,
                  borderBottomLeftRadius: `${commitCornerRadiusPx}px`,
                }}
              >
                <div className="flex h-full min-h-0 flex-col px-2.5 py-2" style={inverseZoomStyle}>
                  <div className="min-h-0 flex-1">
                    <div
                      className={cn(
                        'max-w-[38rem] text-sm font-medium leading-tight tracking-tight text-muted-foreground group-hover:text-muted-foreground',
                        displayZoom <= 0.5 ? 'overflow-hidden text-ellipsis whitespace-nowrap' : 'break-words whitespace-normal',
                      )}
                    >
                      {isTop && isClusterOpen
                        ? node.commit.message
                        : isTop && clumpCount > 1
                          ? `${node.commit.message} +${clumpCount - 1}`
                          : node.commit.message}
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                      {showDataShapeError ? (
                        <span
                          className="inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground"
                          title={nodeWarningsForCard.join('\n')}
                        >
                          Broken ancestry
                        </span>
                      ) : null}
                    </div>
                  </div>
                  {showCommitMetadata ? (
                    <div className="mt-auto flex items-end justify-between gap-4 pt-5">
                      <div className="text-sm font-medium text-muted-foreground">@{node.commit.author}</div>
                      <div className="text-sm font-medium text-muted-foreground">
                        {new Date(node.commit.date).toLocaleString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          hour: 'numeric',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>
                  ) : null}
                  {focusedNode?.commit.id === node.commit.id && normalizedSearchQuery ? (
                    <div className="absolute left-5 top-4 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground" style={iconScaleStyle}>
                      Search result
                    </div>
                  ) : null}
                  {showDataShapeError ? null : null}
                </div>
              </div>
            </MapGridCommitWrapper>
            );
              })}
              <svg
                className="pointer-events-none absolute inset-0 z-10"
                width={contentWidth}
                height={contentHeight}
                viewBox={`0 0 ${contentWidth} ${contentHeight}`}
                aria-hidden="true"
                overflow="visible"
                style={{ overflow: 'visible' }}
              >
                {mergeConnectors.filter((connector) => cullConnectorPath(connector)).map((connector) => {
                  const path = buildMergeOrthogonalPath({
                    laneX: connector.fromX,
                    tipY: connector.fromY,
                    mergeX: connector.toX,
                    mergeY: connector.toY,
                    cornerR: connectorCornerRadiusPx,
                    pointFormatter,
                  });
                  return (
                    <Fragment key={connector.id}>
                      {!isCameraMoving ? (
                        <path
                          d={path}
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.8)"
                          strokeWidth={haloStrokeWidth}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      ) : null}
                      <path
                        d={path}
                        fill="none"
                        stroke={CONNECTOR_COLOR}
                        strokeWidth={lineStrokeWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Fragment>
                  );
                })}
                {connectors.filter((connector) => cullConnectorPath(connector)).map((connector) => {
                  const path = buildRoundedElbowPath(
                    connector.fromX,
                    connector.fromY,
                    connector.toX,
                    connector.toY,
                    connectorCornerRadiusPx,
                    pointFormatter,
                    GRID_CONNECTOR_GAP_PX,
                  );
                  return (
                    <Fragment key={connector.id}>
                      {!isCameraMoving ? (
                        <path
                          d={path}
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.8)"
                          strokeWidth={haloStrokeWidth}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      ) : null}
                      <path
                        d={path}
                        fill="none"
                        stroke={CONNECTOR_COLOR}
                        strokeWidth={lineStrokeWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Fragment>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
