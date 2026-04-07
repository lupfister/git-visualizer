import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { Loader2, X } from 'lucide-react';
import { Branch, BranchCommitPreview, BranchPromptMeta, CheckedOutRef, DirectCommit, MergeNode, MergedPR, OpenPR } from '../types';
import { ViewMode } from './BranchMapView';
import {
  buildBranchOrthogonalPath,
  buildMergeOrthogonalPath,
  commitRectSize,
  type AnchorPoint as LayoutAnchorPoint,
} from './branchMapLayout';

// ── Layout constants ──────────────────────────────────────────────────────────
const LEFT_PAD = 0;
const RIGHT_PAD = 0;
const MIN_BRANCH_SPACING_X = 30;
const NODE_SIZE = 24;
const CORNER_R = 20;
const BRANCH_HIT_STROKE_WIDTH = 48;
const BRANCH_HIT_END_INSET = 10;
const AHEAD_LABEL_OFFSET_X = 10;
const MAIN_LABEL_OFFSET_X = 10;
const ZOOM_DEFAULT = 2;
const ZOOM_MIN = 2;
const ZOOM_MAX = 30;
const ZOOM_WHEEL_EXP_SENSITIVITY = 0.0025;
const ZOOM_WHEEL_DELTA_MAX_PX = 180;
const CAMERA_UI_SYNC_MS = 24;
/** Space between the `<svg>` and the camera container edges (screen px each side). */
const CANVAS_PAD_X = 0;
const CANVAS_PAD_Y = 0;
/** When set, expand the SVG “lake” (user units) so its aspect ratio matches the map viewport; graph layout is unchanged — only empty padding grows. */
const MATCH_SVG_ASPECT_TO_VIEWPORT = true;
/** Extra logical width/height beyond content (SVG user units). */
const SVG_LAYOUT_TAIL_X = 0;
const SVG_LAYOUT_TAIL_Y = 0;
/** Margins around the graph when clipping / finite pan bounds (SVG user units). */
const CLIP_MARGIN_LEFT = 0;
const CLIP_MARGIN_RIGHT = 0;
const CLIP_MARGIN_TOP = 0;
const CLIP_MARGIN_BOTTOM = 0;
/** Grid: horizontal pad around lane + label extent (SVG user units). */
const GRID_VIEW_PAD_X = 0;
/**
 * Equal inset between graph/grid content and the SVG edges on all four sides (SVG user units).
 * `svgContentPadding` scales from this baseline when the map viewport is larger than
 * `SVG_CONTENT_PADDING_VIEWPORT_REF_MIN` (min of width/height, px); mini windows stay ~baseline.
 */
const SVG_CONTENT_PADDING_BASE = 0;
const SVG_CONTENT_PADDING_VIEWPORT_REF_MIN = 360;
const SVG_CONTENT_PADDING_MAX = 0;
/** Full-bleed fill behind graph content (SVG user units). */
const SVG_AREA_BG = 'transparent';
const TIME_SCALE_DEFAULT = 0.5;
// Grid nodes render without clump boost, so grid spacing must match the un-boosted rect size
// or you'll see tiny gaps between nodes.
const GRID_NODE_RECT = commitRectSize(NODE_SIZE, 0);
// Keep a subtle gutter between rows/columns so cells don't visually touch.
const GRID_CELL_GAP = 1;
const GRID_ROW_GAP = GRID_NODE_RECT.height + GRID_CELL_GAP;
const GRID_LANE_WIDTH = GRID_NODE_RECT.width + GRID_CELL_GAP;
const GRID_LANE_OFFSET_X = 0;
const GRID_LANE_MIN_SEPARATION = GRID_ROW_GAP;
const GRID_ROUTE_CORNER_R = 9;
const GRID_MERGE_EVENT_ROW_NUDGE = 0.001;
const LOCAL_UNPUSHED_GRAY = '#E0E0E0';
const CANVAS_NEUTRAL_GRAY = '#E0E0E0';
const CANVAS_NEUTRAL_GRAY_HOVER = '#44403c';
const CANVAS_NEUTRAL_TEXT = '#1c1917';
const CANVAS_NODE_FILL = '#F5F5F5';
const CANVAS_UNPUSHED_NODE_FILL = 'var(--background)';
const CANVAS_NODE_STROKE = '#E0E0E0';
const CANVAS_NODE_STROKE_WIDTH = 1.5;
const CANVAS_NODE_STROKE_INSET = CANVAS_NODE_STROKE_WIDTH / 2;
const DEBUG_SHOW_BRANCH_HIT_AREAS = false;
const DEBUG_BRANCH_HIT_AREA_COLOR = '#ef4444';
const DEBUG_BRANCH_HIT_AREA_OPACITY = 0.25;
const UNPUSHED_LANE_STROKE_VISUAL_COMP = 0.3;
const CLUMP_COUNT_MAX = 99;
const CHECKED_OUT_AHEAD_OFFSET_WORLD = 120;
/** Stroke color used to mark the currently checked-out commit/branch. */
const CHECKED_OUT_SELECTION_STROKE = '#B4CDEB';
/** Stroke color used for user-selected commits/branches (distinct from checked-out). */
const USER_SELECTION_STROKE = '#6F88C3';
const CHECKED_OUT_PULSE_MS = 1800;
const INITIAL_CENTER_SETTLE_MS = CHECKED_OUT_PULSE_MS;
const INITIAL_REVEAL_FADE_MS = CHECKED_OUT_PULSE_MS;
const ENABLE_TIMELINE_INTRO_ANIMATIONS = false;

type TooltipData = {
  x: number;
  y: number;
  lines: string[];
  avatarUrl?: string;
  avatarFallback?: string;
};
type PRCommitHover = { x: number; arcY: number; pr: MergedPR; commitIdx: number; total: number };
type ClampMode = 'hard' | 'soft' | 'none';
type OrientationMode = 'vertical' | 'horizontal';
type MarkerEntry<T> = { x: number; y: number; item: T };
type MarkerCluster<T> = { x: number; y: number; entries: MarkerEntry<T>[] };
type CommitDot = { y: number; commit?: BranchCommitPreview };
type CommitEntryItem = { index: number; commit?: BranchCommitPreview };
type PromptEntryItem = { marker: NonNullable<BranchPromptMeta['markers']>[number]; index: number };
type BranchHeadTarget = {
  branchName: string;
  headSha: string;
  point: { x: number; y: number };
};
type CommitSelectionTarget = {
  commitSha: string;
  point: { x: number; y: number };
};
type MarqueeDragState = {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  additive: boolean;
  moved: boolean;
};
type MarqueeRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};
type BranchRenderLayout = {
  forkY: number;
  lanePosX: number;
  startX: number;
  isMergedBranch: boolean;
  isLocalBranch: boolean;
  mergeNodeTimeX: number | null;
  branchLineTipY: number;
  mergeBackPath: string | null;
  curvePath: string;
  hitCurvePath: string;
  hasPreviewData: boolean;
  visibleBranchCommits: BranchCommitPreview[];
  uniqueAheadCount: number;
  branchEndDotIndex: number | null;
  localCommitDotIndices: Set<number>;
  fullBranchShouldUseLocalGray: boolean;
  localSegmentStartY: number | undefined;
  commitDotClusters: MarkerCluster<CommitEntryItem>[];
  promptMarkerClusters: MarkerCluster<PromptEntryItem>[];
  branchHasCheckedOutHead: boolean;
  brDelay: number;
  showClockIcon: boolean;
  namePoint: { x: number; y: number };
  clockPoint: { x: number; y: number };
};
type AnchorPoint = LayoutAnchorPoint;
type ClumpAnchorState = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  lastSeenRender: number;
};
type ExpandedClumpState = {
  isExpanded: boolean;
  phase: 'collapsed' | 'expanding' | 'expanded' | 'collapsing';
  phaseStartedAt?: number;
};
type ClumpMemberAnchorState = {
  x: number;
  y: number;
  lastSeenRender: number;
};

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function getCameraScale(zoomValue: number, _horizontal: boolean): { x: number; y: number } {
  return { x: zoomValue, y: zoomValue };
}

function smoothValueTo(
  start: number,
  target: number,
  durationMs: number,
  onFrame: (value: number) => void,
  minDelta = 1
): () => void {
  const delta = target - start;
  if (Math.abs(delta) < minDelta) return () => undefined;
  const startTime = performance.now();
  let rafId = 0;
  let cancelled = false;
  function step(now: number) {
    if (cancelled) return;
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / durationMs);
    onFrame(start + delta * easeInOutCubic(t));
    if (t < 1) rafId = requestAnimationFrame(step);
  }
  rafId = requestAnimationFrame(step);
  return () => {
    cancelled = true;
    cancelAnimationFrame(rafId);
  };
}

function fmtRelativeDate(dateStr: string): string {
  const diffDays = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
  if (diffDays === 0) return 'today';
  if (diffDays === 1) return 'yesterday';
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  return `${Math.floor(diffDays / 30)}mo ago`;
}

function fmtTooltipDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit',
  });
}

function fmtLabelDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: '2-digit',
    hour: 'numeric', minute: '2-digit',
  });
}

const svgTextWidthCache = new Map<string, number>();
let svgTextMeasureCtx: CanvasRenderingContext2D | null = null;

function estimateSvgTextWidth(text: string, fontSize = 10): number {
  const cacheKey = `${fontSize}:${text}`;
  const cached = svgTextWidthCache.get(cacheKey);
  if (cached != null) return cached;

  let width: number;
  if (typeof document !== 'undefined') {
    if (!svgTextMeasureCtx) {
      const canvas = document.createElement('canvas');
      svgTextMeasureCtx = canvas.getContext('2d');
    }
    if (svgTextMeasureCtx) {
      // Match the SVG label style closely so truncation happens at the right time.
      svgTextMeasureCtx.font = `400 ${fontSize}px sans-serif`;
      width = Math.ceil(svgTextMeasureCtx.measureText(text).width);
    } else {
      width = Math.ceil(text.length * fontSize * 0.56);
    }
  } else {
    width = Math.ceil(text.length * fontSize * 0.56);
  }

  svgTextWidthCache.set(cacheKey, width);
  return width;
}

function shaMatchesGitRef(a: string | undefined | null, b: string | undefined | null): boolean {
  if (!a || !b) return false;
  return a === b || a.startsWith(b) || b.startsWith(a);
}

function truncatePrompt(text: string, max = 90): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max)}…`;
}

type LineageCommitLike = {
  fullSha: string;
  parentSha?: string | null;
  date: string;
};

function compareByDateThenSha<T extends LineageCommitLike>(a: T, b: T): number {
  const aTime = new Date(a.date).getTime();
  const bTime = new Date(b.date).getTime();
  const aFinite = Number.isFinite(aTime);
  const bFinite = Number.isFinite(bTime);
  if (aFinite && bFinite && aTime !== bTime) return aTime - bTime;
  if (aFinite !== bFinite) return aFinite ? -1 : 1;
  return a.fullSha.localeCompare(b.fullSha);
}

/**
 * Order commits using explicit parent edges first, then time/sha as a stable tie-breaker.
 * This keeps lineage deterministic and avoids date-only inversions.
 */
function orderByLineage<T extends LineageCommitLike>(items: T[]): T[] {
  if (items.length <= 1) return [...items];

  const bySha = new Map(items.map((item) => [item.fullSha, item]));
  const inDegree = new Map<string, number>();
  const childrenByParent = new Map<string, T[]>();

  items.forEach((item) => inDegree.set(item.fullSha, 0));

  for (const item of items) {
    const parentSha = item.parentSha ?? undefined;
    if (!parentSha || !bySha.has(parentSha)) continue;
    inDegree.set(item.fullSha, (inDegree.get(item.fullSha) ?? 0) + 1);
    const children = childrenByParent.get(parentSha) ?? [];
    children.push(item);
    childrenByParent.set(parentSha, children);
  }

  for (const children of childrenByParent.values()) {
    children.sort(compareByDateThenSha);
  }

  const ready = items
    .filter((item) => (inDegree.get(item.fullSha) ?? 0) === 0)
    .sort(compareByDateThenSha);
  const ordered: T[] = [];
  const seen = new Set<string>();

  while (ready.length > 0) {
    const next = ready.shift()!;
    if (seen.has(next.fullSha)) continue;
    seen.add(next.fullSha);
    ordered.push(next);

    const children = childrenByParent.get(next.fullSha) ?? [];
    for (const child of children) {
      const remainingParents = (inDegree.get(child.fullSha) ?? 0) - 1;
      inDegree.set(child.fullSha, remainingParents);
      if (remainingParents === 0) ready.push(child);
    }
    ready.sort(compareByDateThenSha);
  }

  if (ordered.length === items.length) return ordered;
  const remainder = items
    .filter((item) => !seen.has(item.fullSha))
    .sort(compareByDateThenSha);
  return [...ordered, ...remainder];
}

const COMMIT_TOOLTIP_PREVIEW_MAX = 120;
const COMMIT_CLUSTER_PREVIEW_MAX = 90;
const PROMPT_TOOLTIP_PREVIEW_MAX = 120;
const PROMPT_CLUSTER_PREVIEW_MAX = 90;

/**
 * Remove fork split points that create singleton clusters (size 1).
 * Those singleton clumps render as unlabeled boxes and look like empty rows.
 */
function pruneForkSplitIndices(
  entryCount: number,
  forkIndices: Set<number>,
  preserveSplitIndices: Set<number> = new Set<number>(),
): Set<number> {
  if (entryCount <= 1 || forkIndices.size === 0) return new Set(forkIndices);
  const active = Array.from(forkIndices)
    .filter((index) => index >= 0 && index < entryCount - 1)
    .sort((a, b) => a - b);
  if (active.length === 0) return new Set<number>();

  const buildSegments = () => {
    const segments: Array<{ start: number; end: number; len: number }> = [];
    let start = 0;
    for (const split of active) {
      const end = Math.min(split, entryCount - 1);
      if (end >= start) {
        segments.push({ start, end, len: end - start + 1 });
      }
      start = end + 1;
    }
    if (start <= entryCount - 1) {
      segments.push({ start, end: entryCount - 1, len: entryCount - start });
    }
    return segments;
  };

  while (active.length > 0) {
    const segments = buildSegments();
    const singletonIdx = segments.findIndex((segment) => segment.len === 1);
    if (singletonIdx < 0 || segments.length <= 1) break;

    // Prefer removing the split before the singleton so fork commits stay with
    // the following context rather than becoming isolated rows.
    let splitToRemove =
      singletonIdx > 0
        ? segments[singletonIdx - 1].end
        : segments[0].end;
    if (preserveSplitIndices.has(splitToRemove)) {
      const alternate =
        singletonIdx > 0 && singletonIdx < segments.length
          ? segments[singletonIdx].end
          : -1;
      if (alternate >= 0 && !preserveSplitIndices.has(alternate)) {
        splitToRemove = alternate;
      } else {
        break;
      }
    }
    const removeAt = active.indexOf(splitToRemove);
    if (removeAt < 0) break;
    active.splice(removeAt, 1);
  }

  return new Set(active);
}

/**
 * Cluster entries by splitting at fork-point indices.
 *
 * Rules:
 * 1. Never clump across lanes (caller ensures entries are from one branch).
 * 2. Split where another branch forked off. The fork commit is included in the
 *    **left** (earlier) clump; the next commit starts a new clump.
 * 3. Anchor each cluster on its **first entry** so the clump sits at the
 *    assigned grid row.
 *
 * `forkIndices` contains the indices (into `entries`) of commits where a child
 * branch diverged. A split happens **after** each fork index.
 */
function clusterByForkPoints<T>(
  entries: MarkerEntry<T>[],
  forkIndices: Set<number>,
  preserveSplitIndices: Set<number> = new Set<number>(),
): MarkerCluster<T>[] {
  if (entries.length === 0) return [];
  const effectiveForkIndices = pruneForkSplitIndices(entries.length, forkIndices, preserveSplitIndices);

  const clusters: MarkerCluster<T>[] = [];
  let current: MarkerEntry<T>[] = [entries[0]];

  function flush() {
    if (current.length === 0) return;
    clusters.push({ x: current[0].x, y: current[0].y, entries: current });
  }

  for (let i = 1; i < entries.length; i += 1) {
    if (effectiveForkIndices.has(i - 1)) {
      flush();
      current = [entries[i]];
    } else {
      current.push(entries[i]);
    }
  }
  flush();
  return clusters;
}

function clumpCountLabel(count: number): string {
  return count > CLUMP_COUNT_MAX ? `${CLUMP_COUNT_MAX}+` : String(count);
}

function nodeLabelFontSize(nodeSize: number, count: number): number {
  const base = Math.max(9, Math.min(12, nodeSize * 0.46));
  if (count >= 100) return Math.max(7.5, base - 2.5);
  if (count >= 10) return Math.max(8.25, base - 1.75);
  return base;
}

function promptMarkerPath(centerX: number, centerY: number, size: number): string {
  const markerX = centerX - size / 2;
  const markerY = centerY - size / 2;
  const markerRadius = size / 2;
  const markerBottom = markerY + size;
  return [
    `M ${markerX} ${markerY + markerRadius}`,
    `A ${markerRadius} ${markerRadius} 0 0 1 ${markerX + markerRadius} ${markerY}`,
    `A ${markerRadius} ${markerRadius} 0 0 1 ${markerX + size} ${markerY + markerRadius}`,
    `A ${markerRadius} ${markerRadius} 0 0 1 ${markerX + markerRadius} ${markerBottom}`,
    `H ${markerX}`,
    'Z',
  ].join(' ');
}

/** Axis-aligned hit rect for a collapsed clump anchored to a single node. */
function collapsedClumpHitRect(
  anchorX: number,
  anchorY: number,
  rectSize: { width: number; height: number },
  padWorld: number
): { x: number; y: number; width: number; height: number } {
  const w = rectSize.width + padWorld * 2;
  const h = rectSize.height + padWorld * 2;
  const cx = anchorX;
  const cy = anchorY;
  return { x: cx - w / 2, y: cy - h / 2, width: w, height: h };
}

interface BranchMapProps {
  branches: Branch[];
  mergeNodes: MergeNode[];
  directCommits?: DirectCommit[];
  mergedPRs?: MergedPR[];
  defaultBranch: string;
  onHoveredBranchChange?: (branchName: string | null) => void;
  onCommitClick?: (target: { commitSha: string; branchName?: string }) => void;
  onLoadMore?: () => void;
  githubOwner?: string | null;
  githubRepo?: string | null;
  branchPromptMeta?: Record<string, BranchPromptMeta>;
  branchCommitPreviews?: Record<string, BranchCommitPreview[]>;
  branchUniqueAheadCounts?: Record<string, number>;
  view?: ViewMode;
  staleBranches?: Branch[];
  openPRs?: OpenPR[];
  isLoading?: boolean;
  scrollRequest?: { branch: Branch; seq: number } | null;
  focusedErrorBranch?: Branch | null;
  checkedOutRef?: CheckedOutRef | null;
  isPopoverWindow?: boolean;
  /** Pixels of vertical chrome (e.g. floating header) covering the top of the map; used for aspect/padding and pan bounds. */
  mapTopInsetPx?: number;
  onMergeRefsIntoBranch?: (sourceRefs: string[], targetBranch: string) => Promise<void> | void;
  mergeInProgress?: boolean;
}

export default function BranchMap({
  branches,
  mergeNodes,
  directCommits = [],
  mergedPRs = [],
  defaultBranch,
  onHoveredBranchChange,
  onCommitClick,
  githubOwner,
  githubRepo,
  branchPromptMeta = {},
  branchCommitPreviews = {},
  branchUniqueAheadCounts = {},
  view = 'time',
  staleBranches = [],
  openPRs = [],
  isLoading = false,
  scrollRequest,
  focusedErrorBranch,
  checkedOutRef = null,
  isPopoverWindow = false,
  mapTopInsetPx = 0,
  onMergeRefsIntoBranch,
  mergeInProgress = false,
}: BranchMapProps) {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);
  const [hoveredPR, setHoveredPR] = useState<number | null>(null);
  const [hoveredPRCommit, setHoveredPRCommit] = useState<PRCommitHover | null>(null);
  const [hoveredMergeNode, setHoveredMergeNode] = useState<{ y: number; node: MergeNode } | null>(null);
  const [hoveredNodeStrokeKey, setHoveredNodeStrokeKey] = useState<string | null>(null);
  const [hoveredNodeBranchName, setHoveredNodeBranchName] = useState<string | null>(null);
  const [prCommits, setPrCommits] = useState<Map<number, string[]>>(new Map());
  const [expandedClumps, setExpandedClumps] = useState<Map<string, ExpandedClumpState>>(() => new Map());
  const [zoom, setZoom] = useState(ZOOM_DEFAULT);
  const [orientation, setOrientation] = useState<OrientationMode>('vertical');
  const [showGuides, setShowGuides] = useState(false);
  const [showRowDebugOverlay, setShowRowDebugOverlay] = useState(false);
  const [selectedBranchNames, setSelectedBranchNames] = useState<string[]>([]);
  const [selectedCommitShas, setSelectedCommitShas] = useState<string[]>([]);
  const [mergeTargetCommitSha, setMergeTargetCommitSha] = useState<string | null>(null);
  const [isMarqueeSelecting, setIsMarqueeSelecting] = useState(false);
  const [marqueeRect, setMarqueeRect] = useState<MarqueeRect | null>(null);
  const isHorizontal = orientation === 'horizontal';
  const gridEventGap = isHorizontal ? GRID_LANE_WIDTH : GRID_ROW_GAP;
  const gridLaneWidth = isHorizontal ? GRID_ROW_GAP : GRID_LANE_WIDTH;
  // WKWebView (Tauri) doesn't fire CSS animations on SVG elements inserted during
  // the initial paint. Defer animation classes by one rAF so they start post-paint.
  const [drawReady, setDrawReady] = useState(false);
  const [animationsLocked, setAnimationsLocked] = useState(true);
  // flashingName: branch in "bright" phase right after focus (clears after 700ms, triggering CSS stroke transition to lighter red)
  const [_flashingName, setFlashingName] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const zoomLayerRef = useRef<SVGGElement>(null);
  const zoomRef = useRef(zoom);
  const zoomStateRef = useRef(zoom);
  const lastContinuousZoomTsRef = useRef(0);
  const gestureZoomBaseRef = useRef(zoomRef.current);
  const gesturePointRef = useRef<{ x: number; y: number } | null>(null);
  const lastPointerClientRef = useRef<{ x: number; y: number } | null>(null);
  const zoomStableTextElsRef = useRef<SVGTextElement[]>([]);
  const zoomStableRectElsRef = useRef<SVGRectElement[]>([]);
  const panUiSyncTimeoutRef = useRef<number | null>(null);
  const zoomUiSyncTimeoutRef = useRef<number | null>(null);
  const cameraPaintRafRef = useRef<number | null>(null);
  const pendingCameraRef = useRef<{ pan: { x: number; y: number }; zoom: number } | null>(null);
  const [, setClumpAnimationTick] = useState(0);
  const clumpAnchorStateRef = useRef<Map<string, ClumpAnchorState>>(new Map());
  const clumpMemberAnchorStateRef = useRef<Map<string, ClumpMemberAnchorState>>(new Map());
  const clumpRenderCounterRef = useRef(0);
  clumpRenderCounterRef.current += 1;
  const clumpRenderId = clumpRenderCounterRef.current;
  const clumpCleanupTimersRef = useRef<Map<string, number>>(new Map());
  const graphOffsetRef = useRef({ x: 0, y: 0 });
  const cameraBoundsRef = useRef({
    viewportW: 0,
    viewportH: 0,
    viewportTopInset: 0,
    canvasWidth: 0,
    canvasHeight: 0,
    svgWidth: 0,
    svgHeight: 0,
    graphOffsetX: 0,
    graphOffsetY: 0,
    isHorizontal: false,
  });
  const contentLayerRef = useRef<SVGGElement>(null);
  const finiteWorldBoundsRef = useRef({
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    measured: false,
  });
  const centerableCommitBoundsRef = useRef({
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    measured: false,
  });
  const panStartRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const panRef = useRef(pan);
  const targetPanRef = useRef(pan);
  const lastUiSyncRef = useRef(0);
  const [isPanning, setIsPanning] = useState(false);
  const isPanningRef = useRef(false);
  const [spaceHeld, setSpaceHeld] = useState(false);
  const spacePressedRef = useRef(false);
  const drawReadyRef = useRef(drawReady);
  const animationsLockedRef = useRef(animationsLocked);
  const focusScrollCancelRef = useRef<(() => void) | null>(null);
  const hasAutoCenteredRef = useRef(false);
  const autoCenterSignatureRef = useRef<string | null>(null);
  const hasUserMovedCameraRef = useRef(false);
  const marqueeDragRef = useRef<MarqueeDragState | null>(null);
  const branchHeadTargetsRef = useRef<BranchHeadTarget[]>([]);
  const commitSelectionTargetsRef = useRef<CommitSelectionTarget[]>([]);
  const selectionProjectionRef = useRef({
    graphOffsetX: 0,
    graphOffsetY: 0,
    graphContentTranslateX: 0,
    graphContentTranslateY: 0,
    isHorizontal: false,
  });

  useEffect(() => {
    onHoveredBranchChange?.(hoveredBranch);
  }, [hoveredBranch, onHoveredBranchChange]);

  useEffect(() => () => onHoveredBranchChange?.(null), [onHoveredBranchChange]);
  const [timelineRevealReady, setTimelineRevealReady] = useState(false);
  const [timelineRevealPhase, setTimelineRevealPhase] = useState<'hidden' | 'fading' | 'done'>('hidden');
  const [hasInitialRevealDone, setHasInitialRevealDone] = useState(false);
  const timelineRevealStartTimeoutRef = useRef<number | null>(null);
  const timelineRevealDoneTimeoutRef = useRef<number | null>(null);

  // Bottom chrome controls visibility state
  const [controlsReady, setControlsReady] = useState(false);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  // Use zoomRef (not React `zoom` state) so transforms match paintCamera during throttled sync.
  // Otherwise re-renders can overwrite the <g> scale with a stale zoom and cause WKWebView glitches.
  const layerCameraScale = getCameraScale(zoomRef.current, isHorizontal);

  // Branch issues panel state
  const [errorPanelOpen, setErrorPanelOpen] = useState(false);
  const errorPanelRef = useRef<HTMLDivElement>(null);

  function handleCommitNodeClick(
    event: React.MouseEvent,
    commitSha?: string,
    branchName?: string,
  ) {
    event.stopPropagation();
    if (!commitSha) return;
    const shouldCheckout = event.ctrlKey || event.metaKey || event.detail >= 2;
    if (branchName) {
      if (event.shiftKey) {
        setSelectedBranchNames((prev) =>
          prev.includes(branchName)
            ? prev.filter((name) => name !== branchName)
            : [...prev, branchName]
        );
      } else {
        setSelectedBranchNames([branchName]);
      }
    }
    setSelectedCommitShas((prev) => {
      if (event.shiftKey) {
        return prev.includes(commitSha)
          ? prev.filter((sha) => sha !== commitSha)
          : [...prev, commitSha];
      }
      return [commitSha];
    });
    setMergeTargetCommitSha(commitSha);
    if (!branchName && !event.shiftKey) {
      setSelectedBranchNames([]);
    }
    if (shouldCheckout) {
      onCommitClick?.({ commitSha, branchName });
    }
  }

  function normalizeMarqueeRect(drag: MarqueeDragState): MarqueeRect {
    const left = Math.min(drag.startX, drag.currentX);
    const top = Math.min(drag.startY, drag.currentY);
    const width = Math.abs(drag.currentX - drag.startX);
    const height = Math.abs(drag.currentY - drag.startY);
    return { left, top, width, height };
  }

  function applyMarqueeBranchSelection(nextRect: MarqueeRect, additive: boolean) {
    const targets = branchHeadTargetsRef.current;
    const projection = selectionProjectionRef.current;
    const cameraScale = getCameraScale(zoomRef.current, projection.isHorizontal);
    const nodeRect = commitRectSize(scaledNodeSize);
    const halfWidthPx = (nodeRect.width / 2) * cameraScale.x;
    const halfHeightPx = (nodeRect.height / 2) * cameraScale.y;
    const hitPaddingPx = 3;
    const selected = targets
      .filter((target) => {
        const centerX =
          panRef.current.x +
          projection.graphOffsetX +
          (projection.graphContentTranslateX + target.point.x) * cameraScale.x;
        const centerY =
          panRef.current.y +
          projection.graphOffsetY +
          (projection.graphContentTranslateY + target.point.y) * cameraScale.y;
        const nodeLeft = centerX - halfWidthPx - hitPaddingPx;
        const nodeRight = centerX + halfWidthPx + hitPaddingPx;
        const nodeTop = centerY - halfHeightPx - hitPaddingPx;
        const nodeBottom = centerY + halfHeightPx + hitPaddingPx;
        return (
          nodeLeft <= nextRect.left + nextRect.width &&
          nodeRight >= nextRect.left &&
          nodeTop <= nextRect.top + nextRect.height &&
          nodeBottom >= nextRect.top
        );
      })
      .map((target) => target.branchName);

    setSelectedBranchNames((prev) => {
      if (!additive) return selected;
      const merged = new Set(prev);
      selected.forEach((name) => merged.add(name));
      return Array.from(merged);
    });
  }

  function applyMarqueeCommitSelection(nextRect: MarqueeRect, additive: boolean) {
    const targets = commitSelectionTargetsRef.current;
    const projection = selectionProjectionRef.current;
    const cameraScale = getCameraScale(zoomRef.current, projection.isHorizontal);
    const nodeRect = commitRectSize(scaledNodeSize);
    const halfWidthPx = (nodeRect.width / 2) * cameraScale.x;
    const halfHeightPx = (nodeRect.height / 2) * cameraScale.y;
    const hitPaddingPx = 3;
    const selected = targets
      .filter((target) => {
        const centerX =
          panRef.current.x +
          projection.graphOffsetX +
          (projection.graphContentTranslateX + target.point.x) * cameraScale.x;
        const centerY =
          panRef.current.y +
          projection.graphOffsetY +
          (projection.graphContentTranslateY + target.point.y) * cameraScale.y;
        const nodeLeft = centerX - halfWidthPx - hitPaddingPx;
        const nodeRight = centerX + halfWidthPx + hitPaddingPx;
        const nodeTop = centerY - halfHeightPx - hitPaddingPx;
        const nodeBottom = centerY + halfHeightPx + hitPaddingPx;
        return (
          nodeLeft <= nextRect.left + nextRect.width &&
          nodeRight >= nextRect.left &&
          nodeTop <= nextRect.top + nextRect.height &&
          nodeBottom >= nextRect.top
        );
      })
      .map((target) => target.commitSha);

    setSelectedCommitShas((prev) => {
      if (!additive) return Array.from(new Set(selected));
      const merged = new Set(prev);
      selected.forEach((sha) => merged.add(sha));
      return Array.from(merged);
    });
    if (!additive) {
      setMergeTargetCommitSha(selected[selected.length - 1] ?? null);
    }
  }

  function beginMarqueeSelection(event: React.MouseEvent<HTMLDivElement>, additive: boolean) {
    const container = scrollRef.current;
    if (!container) return;
    const bounds = container.getBoundingClientRect();
    const startX = event.clientX - bounds.left;
    const startY = event.clientY - bounds.top;
    marqueeDragRef.current = {
      startX,
      startY,
      currentX: startX,
      currentY: startY,
      additive,
      moved: false,
    };
    setTooltip(null);
    setMarqueeRect({ left: startX, top: startY, width: 0, height: 0 });
    setIsMarqueeSelecting(true);
  }

  function clearTimelineRevealTimer() {
    if (timelineRevealStartTimeoutRef.current !== null) {
      clearTimeout(timelineRevealStartTimeoutRef.current);
      timelineRevealStartTimeoutRef.current = null;
    }
    if (timelineRevealDoneTimeoutRef.current !== null) {
      clearTimeout(timelineRevealDoneTimeoutRef.current);
      timelineRevealDoneTimeoutRef.current = null;
    }
  }

  function scheduleTimelineReveal(delayMs = INITIAL_CENTER_SETTLE_MS) {
    clearTimelineRevealTimer();
    setTimelineRevealReady(false);
    setTimelineRevealPhase('hidden');
    timelineRevealStartTimeoutRef.current = window.setTimeout(() => {
      timelineRevealStartTimeoutRef.current = null;
      setTimelineRevealPhase('fading');
      timelineRevealDoneTimeoutRef.current = window.setTimeout(() => {
        timelineRevealDoneTimeoutRef.current = null;
        setTimelineRevealPhase('done');
        setTimelineRevealReady(true);
        setHasInitialRevealDone(true);
      }, INITIAL_REVEAL_FADE_MS);
    }, delayMs);
  }

  function markUserMovedCamera() {
    hasUserMovedCameraRef.current = true;
    clearTimelineRevealTimer();
    setTimelineRevealPhase('done');
    setTimelineRevealReady(true);
    setHasInitialRevealDone(true);
  }

  const openPRBranchNames = new Set(openPRs.map(p => p.branchName));
  const localBranchCount = branches.filter((b) => b.name !== defaultBranch).length;
  const hasTimelineSeedData =
    mergeNodes.length > 0 || directCommits.length > 0 || localBranchCount > 0;

  // Trigger draw-in animations when timeline data first arrives (not on mount),
  // so the timeline always animates in even when the map view is shown before data loads.
  const hadDataRef = useRef(false);
  useEffect(() => {
    // Reset when data is cleared (new repo selected) so animations retrigger.
    if (!hasTimelineSeedData) {
      hadDataRef.current = false;
      setDrawReady(false);
      setAnimationsLocked(true);
      return;
    }
    if (hadDataRef.current) return;
    hadDataRef.current = true;

    if (!ENABLE_TIMELINE_INTRO_ANIMATIONS) {
      setDrawReady(true);
      setAnimationsLocked(true);
      return;
    }

    // Use a cancelled flag so React StrictMode's cleanup can invalidate the
    // first invocation's callbacks before the second invocation schedules its own.
    let cancelled = false;
    let id1: number, id2: number;
    id1 = requestAnimationFrame(() => {
      if (cancelled) return;
      id2 = requestAnimationFrame(() => {
        if (cancelled) return;
        setDrawReady(true);
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(id1);
      cancelAnimationFrame(id2);
      // Reset so the re-invocation (StrictMode second mount) can trigger normally.
      hadDataRef.current = false;
    };
  }, [hasTimelineSeedData]);

  useLayoutEffect(() => {
    zoomRef.current = zoom;
    zoomStateRef.current = zoom;
    paintCamera(panRef.current, zoomRef.current);
  }, [zoom]);

  function resolveAnimatedClumpAnchor(
    clusterKey: string,
    target: AnchorPoint,
    memberKeys: readonly string[]
  ): AnchorPoint {
    const clumpAnchorStates = clumpAnchorStateRef.current;
    const clumpMemberAnchorStates = clumpMemberAnchorStateRef.current;
    // Layout must be allocator-authoritative. Do not let anchor interpolation
    // move rendered nodes between rows after allocation.
    const state: ClumpAnchorState = {
      x: target.x,
      y: target.y,
      targetX: target.x,
      targetY: target.y,
      lastSeenRender: clumpRenderId,
    };
    clumpAnchorStates.set(clusterKey, state);
    for (const memberKey of memberKeys) {
      clumpMemberAnchorStates.set(memberKey, {
        x: target.x,
        y: target.y,
        lastSeenRender: clumpRenderId,
      });
    }
    return target;
  }

  useEffect(() => {
    const clumpAnchorStates = clumpAnchorStateRef.current;
    const clumpMemberAnchorStates = clumpMemberAnchorStateRef.current;

    for (const [key, state] of clumpAnchorStates.entries()) {
      if (state.lastSeenRender !== clumpRenderId) {
        clumpAnchorStates.delete(key);
      }
    }
    for (const [key, state] of clumpMemberAnchorStates.entries()) {
      if (state.lastSeenRender !== clumpRenderId) {
        clumpMemberAnchorStates.delete(key);
      }
    }

    const reduceMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let snapped = false;
    let shouldContinue = false;
    for (const state of clumpAnchorStates.values()) {
      const dx = state.targetX - state.x;
      const dy = state.targetY - state.y;
      if (Math.abs(dx) <= 0.08 && Math.abs(dy) <= 0.08) {
        if (state.x !== state.targetX || state.y !== state.targetY) {
          state.x = state.targetX;
          state.y = state.targetY;
          snapped = true;
        }
        continue;
      }
      if (reduceMotion) {
        state.x = state.targetX;
        state.y = state.targetY;
        snapped = true;
        continue;
      }
      state.x += dx * 0.26;
      state.y += dy * 0.26;
      shouldContinue = true;
    }

    if (snapped) {
      setClumpAnimationTick((v) => v + 1);
      return;
    }
    if (!shouldContinue) return;
    const rafId = requestAnimationFrame(() => {
      setClumpAnimationTick((v) => v + 1);
    });
    return () => cancelAnimationFrame(rafId);
  });

  useEffect(() => {
    drawReadyRef.current = drawReady;
  }, [drawReady]);

  useEffect(() => {
    animationsLockedRef.current = animationsLocked;
    setTimelineStaticClass(animationsLocked);
  }, [animationsLocked]);

  useLayoutEffect(() => {
    panRef.current = pan;
    if (!isPanning) {
      targetPanRef.current = pan;
    }
    paintCamera(panRef.current, zoomRef.current);
  }, [pan, isPanning]);

  const CAMERA_CONTENT_PAD = 0;

  function clampPan(
    next: { x: number; y: number },
    zoomValue = zoomRef.current,
    mode: ClampMode = 'hard'
  ) {
    function clampAxis(value: number, min: number, max: number): number {
      const lower = Math.min(min, max);
      const upper = Math.max(min, max);
      if (value >= lower && value <= upper) return value;
      const clamped = Math.max(lower, Math.min(upper, value));
      if (mode === 'soft') {
        const overshoot = value - clamped;
        const maxOvershoot = 48;
        return clamped + Math.max(-maxOvershoot, Math.min(maxOvershoot, overshoot * 0.18));
      }
      return clamped;
    }

    const {
      viewportW,
      viewportH,
      viewportTopInset,
      svgWidth: currentSvgWidth,
      svgHeight: currentSvgHeight,
      graphOffsetX: currentGraphOffsetX,
      graphOffsetY: currentGraphOffsetY,
      isHorizontal: currentIsHorizontal,
    } = cameraBoundsRef.current;
    if (viewportW <= 0 || viewportH <= 0) return next;
    if (mode === 'none') return next;

    const scale = getCameraScale(zoomValue, currentIsHorizontal);
    const topInset = viewportTopInset ?? 0;
    const visibleH = Math.max(0, viewportH - topInset);

    // Strict finite bounds: clamp around the actual content bbox (plus small padding),
    // not the whole logical SVG, so you can't drift into vast empty space.
    const finiteWorld = finiteWorldBoundsRef.current;
    const centerable = centerableCommitBoundsRef.current;
    const hasFinite = finiteWorld.measured;
    const hasCenterable = centerable.measured;

    let minXWorld = hasFinite ? finiteWorld.minX : 0;
    let maxXWorld = hasFinite ? finiteWorld.maxX : currentSvgWidth;
    let minYWorld = hasFinite ? finiteWorld.minY : 0;
    let maxYWorld = hasFinite ? finiteWorld.maxY : currentSvgHeight;

    // Compute mathematically minimal bounds that still allow centering any commit rectangle.
    // Padding is derived from current viewport + zoom, so there's no extra slack.
    if (hasCenterable) {
      const halfViewportWorldX = viewportW / Math.max(scale.x, 0.0001) / 2;
      const halfViewportWorldY = visibleH / Math.max(scale.y, 0.0001) / 2;
      minXWorld = centerable.minX - halfViewportWorldX;
      maxXWorld = centerable.maxX + halfViewportWorldX;
      minYWorld = centerable.minY - halfViewportWorldY;
      maxYWorld = centerable.maxY + halfViewportWorldY;
    }

    const sceneMinX = currentGraphOffsetX + minXWorld * scale.x - CAMERA_CONTENT_PAD;
    const sceneMaxX = currentGraphOffsetX + maxXWorld * scale.x + CAMERA_CONTENT_PAD;
    const sceneMinY = currentGraphOffsetY + minYWorld * scale.y - CAMERA_CONTENT_PAD;
    const sceneMaxY = currentGraphOffsetY + maxYWorld * scale.y + CAMERA_CONTENT_PAD;
    const xBounds = {
      min: viewportW - sceneMaxX,
      max: -sceneMinX,
    };
    const yBounds = {
      min: viewportH - sceneMaxY,
      max: topInset - sceneMinY,
    };

    let x: number;
    x = clampAxis(next.x, xBounds.min, xBounds.max);

    let y: number;
    y = clampAxis(next.y, yBounds.min, yBounds.max);

    return { x, y };
  }

  function paintCamera(nextPan = panRef.current, _nextZoom = zoomRef.current) {
    const el = cameraRef.current;
    if (!el) return;
    const cameraScale = getCameraScale(_nextZoom, isHorizontal);
    el.style.transform = `translate3d(${nextPan.x}px, ${nextPan.y}px, 0)`;
    const svg = svgRef.current;
    if (svg) {
      svg.style.setProperty('--camera-scale', String(cameraScale.x));
    }
    const zoomLayer = zoomLayerRef.current;
    if (zoomLayer) {
      zoomLayer.setAttribute('transform', `scale(${cameraScale.x} ${cameraScale.y})`);
    }

    // Keep zoom-stable typography + corner rounding continuous during wheel/pinch
    // by updating attributes imperatively at the same cadence as the camera transform.
    const inv = 1 / Math.max(cameraScale.x, 0.0001);
    for (const textEl of zoomStableTextElsRef.current) {
      const base = Number(textEl.dataset.baseFontSize);
      if (!Number.isFinite(base)) continue;
      textEl.style.fontSize = `${base * inv}px`;
    }
    for (const rectEl of zoomStableRectElsRef.current) {
      const base = Number(rectEl.dataset.baseRx);
      if (!Number.isFinite(base)) continue;
      rectEl.setAttribute('rx', String(base * inv));
    }
  }

  useLayoutEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    zoomStableTextElsRef.current = Array.from(svg.querySelectorAll<SVGTextElement>('text[data-base-font-size]'));
    zoomStableRectElsRef.current = Array.from(svg.querySelectorAll<SVGRectElement>('rect[data-base-rx]'));
  });

  function flushCameraPaint() {
    const pending = pendingCameraRef.current;
    if (!pending) return;
    pendingCameraRef.current = null;
    paintCamera(pending.pan, pending.zoom);
  }

  function scheduleCameraPaint() {
    if (cameraPaintRafRef.current !== null) return;
    cameraPaintRafRef.current = requestAnimationFrame(() => {
      cameraPaintRafRef.current = null;
      flushCameraPaint();
    });
  }

  function stopCameraPaint() {
    if (cameraPaintRafRef.current !== null) {
      cancelAnimationFrame(cameraPaintRafRef.current);
      cameraPaintRafRef.current = null;
    }
    flushCameraPaint();
  }

  function setTimelineStaticClass(locked: boolean) {
    const svg = svgRef.current;
    if (!svg) return;
    if (locked) {
      svg.classList.add('timeline-static');
    } else {
      svg.classList.remove('timeline-static');
    }
  }

  function syncUiState(force = false, immediate = false) {
    if (!force) return;
    const now = performance.now();
    if (!immediate) {
      const minInterval = CAMERA_UI_SYNC_MS;
      if (now - lastUiSyncRef.current < minInterval) return;
    }
    lastUiSyncRef.current = now;
    if (Math.abs(zoomRef.current - zoomStateRef.current) > 0.0001) {
      zoomStateRef.current = zoomRef.current;
      setZoom(zoomRef.current);
    }
    const nextPan = panRef.current;
    setPan((prev) => (
      Math.abs(prev.x - nextPan.x) < 0.1 && Math.abs(prev.y - nextPan.y) < 0.1
        ? prev
        : nextPan
    ));
  }

  function applyCamera(
    nextPan: { x: number; y: number },
    nextZoom = zoomRef.current,
    forceUiSync = false,
    immediateUiSync = false
  ) {
    panRef.current = nextPan;
    targetPanRef.current = nextPan;
    zoomRef.current = nextZoom;
    pendingCameraRef.current = { pan: nextPan, zoom: nextZoom };
    if (immediateUiSync) {
      stopCameraPaint();
    } else {
      scheduleCameraPaint();
    }
    syncUiState(forceUiSync, immediateUiSync);
  }

  useEffect(() => {
    // Fast Refresh keeps hook state between edits. If zoom constants change,
    // snap stale zoom values into the active range so updates are visible.
    const clampedZoom = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, zoomRef.current));
    if (Math.abs(clampedZoom - zoomRef.current) < 0.0001) return;
    const nextPan = clampPan(panRef.current, clampedZoom, 'hard');
    applyCamera(nextPan, clampedZoom, true, true);
  }, [viewportSize.width, viewportSize.height]);

  function normalizeWheelDeltaPx(delta: number, deltaMode: number, pageSizePx: number): number {
    if (deltaMode === WheelEvent.DOM_DELTA_LINE) return delta * 16;
    if (deltaMode === WheelEvent.DOM_DELTA_PAGE) return delta * Math.max(pageSizePx, 1);
    return delta;
  }

  type ZoomUiSyncMode = 'none' | 'deferred' | 'immediate';

  function scheduleZoomUiSync(immediate = false) {
    if (immediate) {
      if (zoomUiSyncTimeoutRef.current !== null) {
        clearTimeout(zoomUiSyncTimeoutRef.current);
        zoomUiSyncTimeoutRef.current = null;
      }
      syncUiState(true, true);
      return;
    }
    if (zoomUiSyncTimeoutRef.current !== null) {
      clearTimeout(zoomUiSyncTimeoutRef.current);
    }
    zoomUiSyncTimeoutRef.current = window.setTimeout(() => {
      zoomUiSyncTimeoutRef.current = null;
      syncUiState(true, true);
    }, 90);
  }

  function lockAnimationsIfReady() {
    if (!drawReadyRef.current || animationsLockedRef.current) return;
    animationsLockedRef.current = true;
    // Synchronously lock before camera transform changes to avoid WebKit replaying intro animations.
    setTimelineStaticClass(true);
    setAnimationsLocked(true);
  }

  function stopPanSmoothing() {
    if (panUiSyncTimeoutRef.current !== null) {
      clearTimeout(panUiSyncTimeoutRef.current);
      panUiSyncTimeoutRef.current = null;
    }
  }

  function stopWheelInertia() {
    stopPanSmoothing();
  }

  function schedulePanUiSync() {
    if (panUiSyncTimeoutRef.current !== null) {
      clearTimeout(panUiSyncTimeoutRef.current);
    }
    panUiSyncTimeoutRef.current = window.setTimeout(() => {
      panUiSyncTimeoutRef.current = null;
      syncUiState(true, true);
    }, 70);
  }

  function stopZoomAnimation(forceUiSync = true) {
    if (zoomUiSyncTimeoutRef.current !== null) {
      clearTimeout(zoomUiSyncTimeoutRef.current);
      zoomUiSyncTimeoutRef.current = null;
    }
    if (forceUiSync) {
      syncUiState(true, true);
    }
  }

  function flushPendingZoomUiSync() {
    if (zoomUiSyncTimeoutRef.current === null) return;
    clearTimeout(zoomUiSyncTimeoutRef.current);
    zoomUiSyncTimeoutRef.current = null;
    syncUiState(true, true);
  }

  // Keep controls available regardless of intro-reveal state.
  useEffect(() => {
    setControlsReady(true);
  }, []);

  // In WebKit, repeated ancestor transform updates can occasionally restart SVG
  // stroke-dash animations. Keep them locked when intro animations are disabled.
  useEffect(() => {
    if (!drawReady) {
      setAnimationsLocked(true);
      return;
    }
    if (!ENABLE_TIMELINE_INTRO_ANIMATIONS) {
      setAnimationsLocked(true);
      return;
    }
    const id = setTimeout(() => setAnimationsLocked(true), 2800);
    return () => clearTimeout(id);
  }, [drawReady]);

  function applyZoomAt(
    point: { x: number; y: number },
    nextZoomRaw: number,
    uiSyncMode: ZoomUiSyncMode = 'none'
  ): boolean {
    lockAnimationsIfReady();
    const nextZoom = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, nextZoomRaw));
    if (!Number.isFinite(nextZoom) || nextZoom <= 0) return false;
    const currentZoom = zoomRef.current;
    if (Math.abs(nextZoom - currentZoom) < 0.0001) return false;

    const currentPan = panRef.current;
    const graphOffset = graphOffsetRef.current;
    const currentScale = getCameraScale(currentZoom, isHorizontal);
    const nextScale = getCameraScale(nextZoom, isHorizontal);
    const worldX = (point.x - currentPan.x - graphOffset.x) / Math.max(currentScale.x, 0.0001);
    const worldY = (point.y - currentPan.y - graphOffset.y) / Math.max(currentScale.y, 0.0001);
    // Clamp immediately during zoom so camera never performs delayed auto-corrections.
    const nextPan = clampPan(
      {
        x: point.x - graphOffset.x - worldX * nextScale.x,
        y: point.y - graphOffset.y - worldY * nextScale.y,
      },
      nextZoom,
      'hard'
    );

    stopPanSmoothing();
    if (uiSyncMode === 'deferred') {
      lastContinuousZoomTsRef.current = performance.now();
    }
    if (uiSyncMode === 'immediate') {
      applyCamera(nextPan, nextZoom, true, true);
      return true;
    }
    // Keep zoom-driven visuals (label fontSize, rx scaling, etc.) continuous by
    // syncing React state during active zoom gestures (throttled in `syncUiState`).
    applyCamera(nextPan, nextZoom, uiSyncMode === 'deferred');
    if (uiSyncMode === 'deferred') {
      scheduleZoomUiSync();
    }
    return true;
  }

  // Wheel behavior:
  // - Ctrl/Cmd + wheel: zoom toward cursor
  // - plain wheel: inertial pan in both axes
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Always zoom to the cursor position within the viewport.
    const zoomAnchorForClientPoint = (clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      lastPointerClientRef.current = { x: e.clientX, y: e.clientY };
      lockAnimationsIfReady();
      focusScrollCancelRef.current?.();
      focusScrollCancelRef.current = null;
      markUserMovedCamera();

      if (e.ctrlKey || e.metaKey) {
        stopWheelInertia();
        stopPanSmoothing();
        setTooltip(null);
        const point = zoomAnchorForClientPoint(e.clientX, e.clientY);
        const pixelDeltaY = normalizeWheelDeltaPx(e.deltaY, e.deltaMode, el.clientHeight);
        const clampedDeltaY = Math.max(-ZOOM_WHEEL_DELTA_MAX_PX, Math.min(ZOOM_WHEEL_DELTA_MAX_PX, pixelDeltaY));
        const zoomFactor = Math.exp(-clampedDeltaY * ZOOM_WHEEL_EXP_SENSITIVITY);
        if (!Number.isFinite(zoomFactor) || Math.abs(zoomFactor - 1) < 0.0001) return;
        applyZoomAt(point, zoomRef.current * zoomFactor, 'deferred');
        return;
      }

      flushPendingZoomUiSync();
      const nextPan = clampPan({
        x: panRef.current.x - e.deltaX,
        y: panRef.current.y - e.deltaY,
      }, zoomRef.current, 'hard');
      applyCamera(nextPan, zoomRef.current);
      schedulePanUiSync();
    };

    const onGestureStart = (evt: Event) => {
      const e = evt as Event & { scale?: number; clientX?: number; clientY?: number };
      e.preventDefault();
      lockAnimationsIfReady();
      stopWheelInertia();
      stopPanSmoothing();
      setTooltip(null);
      markUserMovedCamera();
      gestureZoomBaseRef.current = zoomRef.current;
      const rect = el.getBoundingClientRect();
      const lastPointer = lastPointerClientRef.current;
      const cx = e.clientX ?? lastPointer?.x ?? rect.left + rect.width / 2;
      const cy = e.clientY ?? lastPointer?.y ?? rect.top + rect.height / 2;
      gesturePointRef.current = zoomAnchorForClientPoint(cx, cy);
    };

    const onGestureChange = (evt: Event) => {
      const e = evt as Event & { scale?: number };
      e.preventDefault();
      const point = gesturePointRef.current;
      const scale = e.scale;
      if (!point || scale == null || !Number.isFinite(scale)) return;
      applyZoomAt(point, gestureZoomBaseRef.current * scale, 'deferred');
    };

    const onGestureEnd = (evt: Event) => {
      evt.preventDefault();
      gesturePointRef.current = null;
      scheduleZoomUiSync(true);
    };

    const onPointerMove = (e: PointerEvent) => {
      lastPointerClientRef.current = { x: e.clientX, y: e.clientY };
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('pointermove', onPointerMove, { passive: true });
    el.addEventListener('gesturestart', onGestureStart as EventListener, { passive: false });
    el.addEventListener('gesturechange', onGestureChange as EventListener, { passive: false });
    el.addEventListener('gestureend', onGestureEnd as EventListener, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('gesturestart', onGestureStart as EventListener);
      el.removeEventListener('gesturechange', onGestureChange as EventListener);
      el.removeEventListener('gestureend', onGestureEnd as EventListener);
    };
  }, []);

  // Keep wheel inertia and RAF loops cleaned up.
  useEffect(() => {
    return () => {
      focusScrollCancelRef.current?.();
      focusScrollCancelRef.current = null;
      stopCameraPaint();
      stopZoomAnimation();
      stopWheelInertia();
      stopPanSmoothing();
    };
  }, []);

  // Track viewport size for camera clamping + layout.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const updateSize = () => {
      const rect = el.getBoundingClientRect();
      setViewportSize({ width: rect.width, height: rect.height });
    };
    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Space+drag (or middle mouse drag) panning, interrupting all inertial motion.
  useEffect(() => {
    if (!isPanning) return;
    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - panStartRef.current.x;
      const dy = e.clientY - panStartRef.current.y;
      const nextPan = clampPan({
        x: panStartRef.current.panX + dx,
        y: panStartRef.current.panY + dy,
      }, zoomRef.current, 'hard');
      applyCamera(nextPan, zoomRef.current);
    };
    const onUp = () => {
      isPanningRef.current = false;
      setIsPanning(false);
      const settledPan = clampPan(panRef.current, zoomRef.current, 'hard');
      applyCamera(settledPan, zoomRef.current);
      syncUiState(true);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [isPanning]);

  useEffect(() => {
    const isEditable = (el: EventTarget | null) => {
      if (!(el instanceof Element)) return false;
      if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) return true;
      return (el as HTMLElement).isContentEditable;
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (isEditable(e.target)) return;

      // Zoom shortcuts disabled.

      if (e.code !== 'Space') return;
      e.preventDefault();
      spacePressedRef.current = true;
      setSpaceHeld(true);
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code !== 'Space') return;
      spacePressedRef.current = false;
      setSpaceHeld(false);
      if (isPanningRef.current) {
        isPanningRef.current = false;
        setIsPanning(false);
        syncUiState(true);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  useEffect(() => {
    isPanningRef.current = isPanning;
  }, [isPanning]);

  useEffect(() => {
    hasAutoCenteredRef.current = false;
    autoCenterSignatureRef.current = null;
    hasUserMovedCameraRef.current = false;
    clearTimelineRevealTimer();
    setTimelineRevealPhase('hidden');
    setTimelineRevealReady(false);
    setHasInitialRevealDone(false);
  }, [orientation]);

  useEffect(() => {
    if (!isMarqueeSelecting) return;
    const onMove = (event: MouseEvent) => {
      const container = scrollRef.current;
      const drag = marqueeDragRef.current;
      if (!container || !drag) return;
      const bounds = container.getBoundingClientRect();
      drag.currentX = event.clientX - bounds.left;
      drag.currentY = event.clientY - bounds.top;
      if (Math.abs(drag.currentX - drag.startX) > 2 || Math.abs(drag.currentY - drag.startY) > 2) {
        drag.moved = true;
      }
      setMarqueeRect(normalizeMarqueeRect(drag));
    };
    const onUp = () => {
      const drag = marqueeDragRef.current;
      if (!drag) {
        setIsMarqueeSelecting(false);
        setMarqueeRect(null);
        return;
      }
      const nextRect = normalizeMarqueeRect(drag);
      if (drag.moved && nextRect.width > 1 && nextRect.height > 1) {
        applyMarqueeBranchSelection(nextRect, drag.additive);
        applyMarqueeCommitSelection(nextRect, drag.additive);
      } else if (!drag.additive) {
        setSelectedBranchNames([]);
        setSelectedCommitShas([]);
        setMergeTargetCommitSha(null);
      }
      marqueeDragRef.current = null;
      setMarqueeRect(null);
      setIsMarqueeSelecting(false);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [isMarqueeSelecting]);

  function handleCanvasMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as Element | null;
    const clickedBackground =
      target === scrollRef.current ||
      target === svgRef.current ||
      !!(target instanceof HTMLDivElement && target.parentElement === scrollRef.current);
    const canPan = e.button === 1 || (e.button === 0 && spacePressedRef.current);
    if (canPan && scrollRef.current) {
      e.preventDefault();
      markUserMovedCamera();
      lockAnimationsIfReady();
      focusScrollCancelRef.current?.();
      focusScrollCancelRef.current = null;
      flushPendingZoomUiSync();
      stopWheelInertia();
      targetPanRef.current = panRef.current;
      panStartRef.current = {
        x: e.clientX,
        y: e.clientY,
        panX: targetPanRef.current.x,
        panY: targetPanRef.current.y,
      };
      isPanningRef.current = true;
      setIsPanning(true);
      return;
    }
    if (e.button === 0 && clickedBackground) {
      e.preventDefault();
      beginMarqueeSelection(e, e.shiftKey);
      return;
    }
  }

  async function handleMergeSourcesIntoTarget(sourceRefs: string[], targetBranch: string) {
    if (!onMergeRefsIntoBranch || mergeInProgress) return;
    await onMergeRefsIntoBranch(sourceRefs, targetBranch);
    setSelectedCommitShas([]);
    setSelectedBranchNames([]);
    setMergeTargetCommitSha(null);
  }

  // Fetch real commit SHAs for merged PRs
  useEffect(() => {
    if (!githubOwner || !githubRepo || mergedPRs.length === 0) return;

    const prNumbers = mergedPRs.map(pr => pr.number);
    invoke<Record<number, string[]>>('get_pr_commits', {
      owner: githubOwner,
      repo: githubRepo,
      prNumbers,
    })
      .then((data) => {
        setPrCommits(new Map(Object.entries(data).map(([k, v]) => [parseInt(k), v])));
      })
      .catch(() => {
        // Silently fail - tooltips will just not show SHAs
      });
  }, [githubOwner, githubRepo, mergedPRs]);

  // Close error panel on outside click
  useEffect(() => {
    if (!errorPanelOpen) return;
    const handler = (e: MouseEvent) => {
      if (!errorPanelRef.current?.contains(e.target as Node)) setErrorPanelOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [errorPanelOpen]);

  // ── Active branches (branch-first) ─────────────────────────────────────────
  const STATUS_PRIORITY: Record<string, number> = { stale: 1, fresh: 2, unknown: 3 };
  const activeBranches = branches
    .filter(b => b.name !== defaultBranch)
    .sort((a, b) => {
      if (view === 'status') {
        const diff = STATUS_PRIORITY[a.status] - STATUS_PRIORITY[b.status];
        return diff !== 0 ? diff : new Date(b.lastCommitDate).getTime() - new Date(a.lastCommitDate).getTime();
      }
      if (view === 'creator') {
        const diff = a.lastCommitAuthor.localeCompare(b.lastCommitAuthor);
        return diff !== 0 ? diff : new Date(b.lastCommitDate).getTime() - new Date(a.lastCommitDate).getTime();
      }
      // 'time': most recently committed first
      return new Date(b.lastCommitDate).getTime() - new Date(a.lastCommitDate).getTime();
    });
  const selectableBranchNameSet = new Set<string>([defaultBranch, ...activeBranches.map((b) => b.name)]);
  const activeBranchNameSignature = Array.from(selectableBranchNameSet).sort().join('\u0000');
  const branchByName = new Map(activeBranches.map((b) => [b.name, b]));

  useEffect(() => {
    setSelectedBranchNames((prev) => prev.filter((name) => selectableBranchNameSet.has(name)));
  }, [activeBranchNameSignature]);

  // Detect fresh-copy branches (worktrees): when multiple branches share the
  // exact same HEAD SHA, all but the oldest are fresh copies with no unique
  // commits and must not inherit merge nodes or other parent-branch artifacts.
  // Phase 1: same-head-sibling detection among active branches.
  // Phase 2 (after mergeNodeByMergedHeadSha) adds commitsAhead===0-with-no-merge-node.
  const sameHeadSiblingMeta = (() => {
    const headShaGroups = new Map<string, Branch[]>();
    for (const b of activeBranches) {
      if (!b.headSha) continue;
      const group = headShaGroups.get(b.headSha) ?? [];
      group.push(b);
      headShaGroups.set(b.headSha, group);
    }
    const names = new Set<string>();
    const parentByName = new Map<string, string>();
    for (const group of headShaGroups.values()) {
      if (group.length < 2) continue;
      const sorted = [...group].sort((a, b) => {
        const aDate = a.createdDate ?? a.divergedFromDate ?? a.lastCommitDate;
        const bDate = b.createdDate ?? b.divergedFromDate ?? b.lastCommitDate;
        const dateDiff = aDate.localeCompare(bDate);
        if (dateDiff !== 0) return dateDiff;
        return a.name.localeCompare(b.name);
      });
      for (let i = 1; i < sorted.length; i++) {
        const child = sorted[i];
        const parent = sorted[i - 1];
        names.add(child.name);
        parentByName.set(child.name, parent.name);
      }
    }
    return { names, parentByName };
  })();
  const freshCopyBranchNames = sameHeadSiblingMeta.names;
  const sameHeadParentOverrideByBranch = sameHeadSiblingMeta.parentByName;

  function renderParentBranchName(branch: Branch): string {
    const normalizedParent = (!branch.parentBranch || branch.parentBranch === branch.name)
      ? defaultBranch
      : branch.parentBranch;
    if (normalizedParent === defaultBranch) {
      const overrideParent = sameHeadParentOverrideByBranch.get(branch.name);
      if (overrideParent && overrideParent !== branch.name) {
        return overrideParent;
      }
    }
    return normalizedParent;
  }

  const protectedMainForkShas = new Set<string>(
    activeBranches
      .filter((b) => renderParentBranchName(b) === defaultBranch)
      .flatMap((b) => [b.createdFromSha, b.divergedFromSha].filter((sha): sha is string => !!sha))
  );

  const childBranchesByParent = new Map<string, Branch[]>();
  activeBranches.forEach((branch) => {
    const effectiveParent = renderParentBranchName(branch);
    const existing = childBranchesByParent.get(effectiveParent) ?? [];
    existing.push(branch);
    childBranchesByParent.set(effectiveParent, existing);
  });

  function branchPreviewIndexForChildFork(
    previews: BranchCommitPreview[],
    branchTimes: number[],
    child: Branch
  ): number {
    const childForkSha = child.divergedFromSha;
    if (childForkSha) {
      const bySha = previews.findIndex((preview) =>
        preview.fullSha === childForkSha ||
        preview.sha === childForkSha ||
        preview.fullSha.startsWith(childForkSha) ||
        childForkSha.startsWith(preview.fullSha) ||
        preview.sha.startsWith(childForkSha) ||
        childForkSha.startsWith(preview.sha)
      );
      if (bySha >= 0) return bySha;
    }
    const childForkTime = new Date(child.divergedFromDate ?? child.createdDate ?? child.lastCommitDate).getTime();
    if (!Number.isFinite(childForkTime) || branchTimes.length === 0) return -1;
    const firstTime = branchTimes[0];
    const lastTime = branchTimes[branchTimes.length - 1];
    if (childForkTime <= firstTime) return 0;
    if (childForkTime >= lastTime) return branchTimes.length - 1;

    // Prefer anchoring to the latest parent commit at-or-before the fork time.
    // Only fall forward when the visible preview window has no past match.
    let bestPastIndex = -1;
    let bestPastDelta = Number.POSITIVE_INFINITY;
    let bestFutureIndex = -1;
    let bestFutureDelta = Number.POSITIVE_INFINITY;
    for (let index = 0; index < branchTimes.length; index += 1) {
      const time = branchTimes[index];
      if (!Number.isFinite(time)) continue;
      if (time <= childForkTime) {
        const delta = childForkTime - time;
        if (delta < bestPastDelta) {
          bestPastDelta = delta;
          bestPastIndex = index;
        }
      } else {
        const delta = time - childForkTime;
        if (delta < bestFutureDelta) {
          bestFutureDelta = delta;
          bestFutureIndex = index;
        }
      }
    }
    if (bestPastIndex >= 0) return bestPastIndex;
    return bestFutureIndex;
  }

  // ── Animation delays — branches and PRs computed independently ───────────
  // Keeping them separate means adding mergedPRs (async GitHub data) never
  // changes branch delays mid-animation, which would restart their CSS animation.
  const MAIN_DRAW_MS = 1400;
  const STAGGER_MS = 70;
  const INFO_OFFSET = 600; // ms after arc starts drawing before info fades in

  const branchDelayMs = new Map<string, number>(
    [...activeBranches]
      .sort((a, b) => new Date(b.lastCommitDate).getTime() - new Date(a.lastCommitDate).getTime())
      .map((b, i) => [b.name, MAIN_DRAW_MS + i * STAGGER_MS] as [string, number])
  );

  const prDelayMs = new Map<number, number>(
    [...mergedPRs]
      .sort((a, b) => new Date(b.mergedAt).getTime() - new Date(a.mergedAt).getTime())
      .map((pr, i) => [pr.number, MAIN_DRAW_MS + i * STAGGER_MS] as [number, number])
  );
  const showMergeTicks = false;
  const showMergedPROverlays = false;

  const reserveMergeRows = showMergeTicks || showMergedPROverlays;

  const leftPad = LEFT_PAD;
  const rightPad = RIGHT_PAD;
  const cornerR = CORNER_R;

  // ── Build a date → X mapping ─────────────────────────────────────────────
  // Simple and deterministic timeline mapping:
  // - `regular`: true time-proportional spacing.
  // - `bounded`: time-aware spacing with per-gap clamping.
  // Both modes preserve chronology and use the same anchor timestamps.
  const IDEAL_NODE_SPACING = Math.max(MIN_BRANCH_SPACING_X, 160 * TIME_SCALE_DEFAULT);
  const IDEAL_EVENT_GAP = Math.max(8, 40 * TIME_SCALE_DEFAULT);
  const GRID_EVENT_GAP = gridEventGap;

  const sortedNodes = [...mergeNodes].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const mergeNodeByMergedHeadSha = new Map<string, MergeNode>();
  for (const node of sortedNodes) {
    const mergedParents = node.parentShas?.slice(1) ?? [];
    for (const parentSha of mergedParents) {
      if (parentSha && !mergeNodeByMergedHeadSha.has(parentSha)) {
        mergeNodeByMergedHeadSha.set(parentSha, node);
      }
    }
  }
  // Phase 2: branches with commitsAhead===0 that have no merge node are fresh
  // branches from the default branch (not genuinely merged).
  for (const b of activeBranches) {
    const hasChildBranches = (childBranchesByParent.get(b.name)?.length ?? 0) > 0;
    if (
      b.commitsAhead === 0 &&
      b.headSha &&
      !mergeNodeByMergedHeadSha.has(b.headSha) &&
      !hasChildBranches
    ) {
      freshCopyBranchNames.add(b.name);
    }
  }

  const mergedBranchByHeadSha = new Map<string, Branch>();
  for (const branch of activeBranches) {
    if (branch.commitsAhead === 0 && branch.headSha && !freshCopyBranchNames.has(branch.name)) {
      mergedBranchByHeadSha.set(branch.headSha, branch);
    }
  }
  const sortedDirectCommits = orderByLineage(directCommits);
  const directCommitShaSet = new Set<string>(sortedDirectCommits.map((commit) => commit.fullSha));
  const mainMergeCommitShas = new Set<string>(
    sortedNodes
      .map((node) => node.fullSha)
      .filter((sha) => directCommitShaSet.has(sha))
  );
  const forcedVisibleMainShas = new Set<string>();
  const latestMainDirectCommitSha = sortedDirectCommits[sortedDirectCommits.length - 1]?.fullSha;
  if (latestMainDirectCommitSha) {
    forcedVisibleMainShas.add(latestMainDirectCommitSha);
  }
  if (checkedOutRef?.headSha) {
    const checkedOutOnMain = sortedDirectCommits.find((commit) =>
      shaMatchesGitRef(commit.fullSha, checkedOutRef.headSha)
    );
    if (checkedOutOnMain?.fullSha) {
      forcedVisibleMainShas.add(checkedOutOnMain.fullSha);
    }
  }
  const forcedMainSplitIndices = new Set<number>();
  const mainCommitSplitIndices = (() => {
    const splits = new Set<number>();
    if (sortedDirectCommits.length <= 1) return splits;

    for (let index = 0; index < sortedDirectCommits.length; index += 1) {
      const commit = sortedDirectCommits[index];
      const prev = index > 0 ? sortedDirectCommits[index - 1] : null;

      if (index > 0 && prev && commit.parentSha && commit.parentSha !== prev.fullSha) {
        splits.add(index - 1);
      }

      if (mainMergeCommitShas.has(commit.fullSha)) {
        // Keep merge commits from being absorbed into adjacent clumps.
        // Add boundaries on both sides and preserve them through pruning so
        // the merge row stays chronologically ahead of preceding clumps.
        if (index > 0) {
          const splitBefore = index - 1;
          splits.add(splitBefore);
          forcedMainSplitIndices.add(splitBefore);
        }
        if (index < sortedDirectCommits.length - 1) {
          const splitAfter = index;
          splits.add(splitAfter);
          forcedMainSplitIndices.add(splitAfter);
        }
      }

      if (protectedMainForkShas.has(commit.fullSha) && index < sortedDirectCommits.length - 1) {
        splits.add(index);
      }

      // Keep the latest/checked-out main commit visible instead of hidden in a clump.
      if (forcedVisibleMainShas.has(commit.fullSha) && index > 0) {
        const splitBefore = index - 1;
        splits.add(splitBefore);
        forcedMainSplitIndices.add(splitBefore);
      }
    }

    return splits;
  })();

  type TimelineEvent = { key: string; t: number; kind: 'merge' | 'direct' | 'branch' };
  const directTimelineEvents: TimelineEvent[] = sortedDirectCommits.map((c) => ({
    key: `direct:${c.fullSha}`,
    t: new Date(c.date).getTime(),
    kind: 'direct' as const,
  }));
  const directTimelineTimes = new Set<number>(directTimelineEvents.map((event) => event.t));
  const mergeNudgeCountByRawTime = new Map<number, number>();
  const mergeEventTimeByFullSha = new Map<string, number>();

  sortedNodes.forEach((m) => {
    const rawTime = new Date(m.date).getTime();
    const mergeCommitIsOnMain = directCommitShaSet.has(m.fullSha);
    let eventTime = rawTime;
    if (!mergeCommitIsOnMain && directTimelineTimes.has(rawTime)) {
      const bumpIndex = (mergeNudgeCountByRawTime.get(rawTime) ?? 0) + 1;
      mergeNudgeCountByRawTime.set(rawTime, bumpIndex);
      eventTime = rawTime + bumpIndex * GRID_MERGE_EVENT_ROW_NUDGE;
    }
    if (!mergeCommitIsOnMain) {
      const mergedParents = m.parentShas?.slice(1) ?? [];
      for (const parentSha of mergedParents) {
        const mergedBranch = mergedBranchByHeadSha.get(parentSha);
        if (!mergedBranch) continue;
        const branchHeadTime = new Date(mergedBranch.lastCommitDate).getTime();
        if (!Number.isFinite(branchHeadTime)) continue;
        eventTime = Math.max(eventTime, branchHeadTime + GRID_MERGE_EVENT_ROW_NUDGE);
      }
    }
    mergeEventTimeByFullSha.set(m.fullSha, eventTime);
  });

  // ── Grid: build clumps first, derive rows from them ────────────────
  type GridClump = {
    lane: string;
    shas: string[];
    earliestTime: number;
    rowIndex: number;
    key: string;
    slotIndices?: number[];
  };
  const gridClumps: GridClump[] = [];
  const gridRowBySha = new Map<string, number>();
  const gridRowByBranchSha = new Map<string, number>();
  const gridRowByBranchSlot = new Map<string, number>();
  let claimedGridRowTimes: number[] = [];
  let claimedGridRowSources = new Map<number, string[]>();
  function branchShaRowKey(branchName: string, sha: string): string {
    return `${branchName}::${sha}`;
  }
  function branchSlotRowKey(branchName: string, slotIndex: number): string {
    return `${branchName}::slot:${slotIndex}`;
  }
  {
    const mainForkIdx = new Set<number>(mainCommitSplitIndices);

    {
      let buf: string[] = [];
      let tFirst = 0;
      const effectiveMainForkIdx = pruneForkSplitIndices(
        sortedDirectCommits.length,
        mainForkIdx,
        forcedMainSplitIndices,
      );
      const flush = () => {
        if (buf.length === 0) return;
        gridClumps.push({ lane: 'main', shas: [...buf], earliestTime: tFirst, rowIndex: -1, key: `direct-clump-${buf[0]}-${buf[buf.length - 1]}` });
        buf = [];
      };
      sortedDirectCommits.forEach((c, i) => {
        const commitTime = new Date(c.date).getTime();
        if (buf.length === 0) tFirst = commitTime;
        buf.push(c.fullSha);
        if (effectiveMainForkIdx.has(i)) flush();
      });
      flush();
    }

    activeBranches.forEach((branch) => {
      const previews = renderableBranchPreviews(branch);
      const uniqueAhead = branchAheadCount(branch);
      if (previews.length === 0) {
        // Reserve rows for synthetic/placeholder branch nodes so they do not
        // collapse onto shared rows with other markers.
        const fallbackCount = Math.max(1, uniqueAhead);
        const t = new Date(branch.lastCommitDate).getTime();
        gridClumps.push({
          lane: branch.name,
          shas: [],
          earliestTime: t,
          rowIndex: -1,
          key: `commit-clump-${branch.name}-synthetic`,
          slotIndices: Array.from({ length: fallbackCount }, (_, index) => index),
        });
        return;
      }
      const branchTimes = previews.map((c) => new Date(c.date).getTime());
      const forkIdx = new Set<number>();
      (childBranchesByParent.get(branch.name) ?? []).forEach((child) => {
        const idx = branchPreviewIndexForChildFork(previews, branchTimes, child);
        if (idx >= 0) forkIdx.add(idx);
      });
      const effectiveForkIdx = pruneForkSplitIndices(previews.length, forkIdx);
      let buf: string[] = [];
      let slotBuf: number[] = [];
      let tFirst = 0;
      let startIdx = 0;
      const flushBranch = (endIdx: number) => {
        if (buf.length === 0) return;
        gridClumps.push({
          lane: branch.name,
          shas: [...buf],
          earliestTime: tFirst,
          rowIndex: -1,
          key: `commit-clump-${branch.name}-${startIdx}-${endIdx}`,
          slotIndices: [...slotBuf],
        });
        buf = [];
        slotBuf = [];
      };
      previews.forEach((c, i) => {
        const commitTime = new Date(c.date).getTime();
        if (buf.length === 0) { startIdx = i; }
        if (buf.length === 0) tFirst = commitTime;
        buf.push(c.fullSha);
        slotBuf.push(i);
        if (effectiveForkIdx.has(i)) { flushBranch(i); }
      });
      flushBranch(previews.length - 1);
    });

    if (reserveMergeRows) {
      sortedNodes.forEach((node) => {
        if (directCommitShaSet.has(node.fullSha)) return;
        const t = mergeEventTimeByFullSha.get(node.fullSha) ?? new Date(node.date).getTime();
        gridClumps.push({ lane: 'main-merge', shas: [node.fullSha], earliestTime: t, rowIndex: -1, key: `merge-row-${node.fullSha}` });
      });
    }

    gridClumps.sort((a, b) => a.earliestTime - b.earliestTime);

    const rowByEntity = new Map<string, number>();
    const rowTimeByIndex = new Map<number, number>();
    let nextRowIndex = 0;
    const claimRow = (entityKey: string, rowTime: number): number => {
      const existing = rowByEntity.get(entityKey);
      if (existing != null) return existing;
      const claimed = nextRowIndex;
      nextRowIndex += 1;
      rowByEntity.set(entityKey, claimed);
      rowTimeByIndex.set(claimed, rowTime);
      return claimed;
    };

    for (const clump of gridClumps) {
      const expandedState = expandedClumps.get(clump.key);
      const shouldReserveExpandedRows =
        (expandedState?.isExpanded ?? false) &&
        expandedState?.phase !== 'collapsing';
      const assignShaRow = (sha: string, row: number) => {
        if (clump.lane === 'main' || clump.lane === 'main-merge') {
          gridRowBySha.set(sha, row);
        } else {
          gridRowByBranchSha.set(branchShaRowKey(clump.lane, sha), row);
        }
      };
      const assignSlotRow = (slotIndex: number, row: number) => {
        if (clump.lane === 'main' || clump.lane === 'main-merge') return;
        gridRowByBranchSlot.set(branchSlotRowKey(clump.lane, slotIndex), row);
      };

      if (shouldReserveExpandedRows && (clump.shas.length > 1 || (clump.slotIndices?.length ?? 0) > 1)) {
        const memberCount = Math.max(clump.shas.length, clump.slotIndices?.length ?? 0);
        let firstRow: number | null = null;
        for (let i = 0; i < memberCount; i += 1) {
          const sha = clump.shas[i];
          const slotIndex = clump.slotIndices?.[i];
          const rowTime = clump.earliestTime + i;
          const fallbackEntityKey = `clump-member:${clump.key}:${i}`;
          const entityKey = (() => {
            if (clump.lane === 'main' || clump.lane === 'main-merge') {
              return sha ? `main-sha:${sha}` : fallbackEntityKey;
            }
            if (sha) return `branch-sha:${clump.lane}:${sha}`;
            if (slotIndex != null) return `branch-slot:${clump.lane}:${slotIndex}`;
            return fallbackEntityKey;
          })();
          const claimedRow = claimRow(entityKey, rowTime);
          if (firstRow == null) firstRow = claimedRow;
          if (sha) assignShaRow(sha, claimedRow);
          if (slotIndex != null) assignSlotRow(slotIndex, claimedRow);
        }
        clump.rowIndex = firstRow ?? claimRow(`clump:${clump.key}`, clump.earliestTime);
      } else {
        const clumpRow = claimRow(`clump:${clump.key}`, clump.earliestTime);
        clump.rowIndex = clumpRow;
        clump.shas.forEach((sha) => { assignShaRow(sha, clumpRow); });
        clump.slotIndices?.forEach((slotIndex) => { assignSlotRow(slotIndex, clumpRow); });
      }
    }

    const rowTimes: number[] = [];
    for (let i = 0; i < nextRowIndex; i += 1) {
      rowTimes.push(rowTimeByIndex.get(i) ?? 0);
    }

    // Ensure child branch clumps are always allocated above their parent fork segment.
    // This is a structural layout rule (allocator-level), not a render-time clamp.
    const shiftBranchRowsToFloor = (branchName: string, floorRowExclusive: number): boolean => {
      const slotPrefix = `${branchName}::slot:`;
      const shaPrefix = `${branchName}::`;
      const slotEntries = Array.from(gridRowByBranchSlot.entries())
        .filter(([key]) => key.startsWith(slotPrefix));
      const shaEntries = Array.from(gridRowByBranchSha.entries())
        .filter(([key]) => key.startsWith(shaPrefix));
      const clumpRows = gridClumps
        .filter((clump) => clump.lane === branchName && Number.isFinite(clump.rowIndex))
        .map((clump) => clump.rowIndex);
      const allRows = [
        ...slotEntries.map(([, row]) => row),
        ...shaEntries.map(([, row]) => row),
        ...clumpRows,
      ].filter((row) => Number.isFinite(row));
      if (allRows.length === 0) return false;
      const minRow = Math.min(...allRows);
      const floorRow = floorRowExclusive + 1;
      if (!Number.isFinite(floorRow)) return false;

      let delta = Math.max(0, floorRow - minRow);
      const currentRows = Array.from(new Set(allRows)).sort((a, b) => a - b);
      let shiftedOthers = false;
      const occupiedRowsByOthers = (): Set<number> => {
        const occupied = new Set<number>();
        gridRowBySha.forEach((row) => {
          if (Number.isFinite(row)) occupied.add(row);
        });
        gridRowByBranchSlot.forEach((row, key) => {
          if (key.startsWith(slotPrefix)) return;
          if (Number.isFinite(row)) occupied.add(row);
        });
        gridRowByBranchSha.forEach((row, key) => {
          if (key.startsWith(shaPrefix)) return;
          if (Number.isFinite(row)) occupied.add(row);
        });
        gridClumps.forEach((clump) => {
          if (clump.lane === branchName) return;
          if (Number.isFinite(clump.rowIndex)) occupied.add(clump.rowIndex);
        });
        return occupied;
      };
      const shiftOtherRowsAtOrAbove = (thresholdRow: number) => {
        gridRowBySha.forEach((row, key) => {
          if (!Number.isFinite(row) || row < thresholdRow) return;
          gridRowBySha.set(key, row + 1);
        });
        gridRowByBranchSlot.forEach((row, key) => {
          if (key.startsWith(slotPrefix)) return;
          if (!Number.isFinite(row) || row < thresholdRow) return;
          gridRowByBranchSlot.set(key, row + 1);
        });
        gridRowByBranchSha.forEach((row, key) => {
          if (key.startsWith(shaPrefix)) return;
          if (!Number.isFinite(row) || row < thresholdRow) return;
          gridRowByBranchSha.set(key, row + 1);
        });
        gridClumps.forEach((clump) => {
          if (clump.lane === branchName || !Number.isFinite(clump.rowIndex) || clump.rowIndex < thresholdRow) return;
          clump.rowIndex += 1;
        });
        const fallbackTime =
          rowTimes[Math.min(Math.max(0, thresholdRow), Math.max(0, rowTimes.length - 1))] ?? 0;
        rowTimes.splice(thresholdRow, 0, fallbackTime);
      };
      for (let guard = 0; guard < 2000; guard += 1) {
        const occupied = occupiedRowsByOthers();
        const collisions = currentRows
          .map((row) => row + delta)
          .filter((row) => occupied.has(row));
        if (collisions.length === 0) break;
        const firstCollision = Math.min(...collisions);
        shiftOtherRowsAtOrAbove(firstCollision);
        shiftedOthers = true;
      }
      if (delta === 0) return shiftedOthers;

      slotEntries.forEach(([key, row]) => {
        gridRowByBranchSlot.set(key, row + delta);
      });
      shaEntries.forEach(([key, row]) => {
        gridRowByBranchSha.set(key, row + delta);
      });
      gridClumps.forEach((clump) => {
        if (clump.lane !== branchName || !Number.isFinite(clump.rowIndex)) return;
        clump.rowIndex += delta;
      });

      allRows.forEach((oldRow) => {
        const newRow = oldRow + delta;
        if (newRow < 0) return;
        const oldTime = rowTimes[oldRow] ?? 0;
        if (newRow >= rowTimes.length) {
          rowTimes.length = newRow + 1;
        }
        const existing = rowTimes[newRow];
        rowTimes[newRow] =
          existing == null
            ? oldTime
            : Math.max(existing, oldTime);
      });

      return true;
    };

    const parentAnchorRowForBranch = (branch: Branch): number | null => {
      const parentName = renderParentBranchName(branch);
      if (!parentName || parentName === defaultBranch || parentName === branch.name) return null;
      const parentBranch = branchByName.get(parentName);
      if (!parentBranch) return null;
      const parentPreviews = renderableBranchPreviews(parentBranch);
      if (parentPreviews.length === 0) return null;
      const parentTimes = parentPreviews.map((commit) => new Date(commit.date).getTime());
      const forkIndex = branchPreviewIndexForChildFork(parentPreviews, parentTimes, branch);
      if (forkIndex < 0) return null;
      const parentForkIndices = new Set<number>();
      (childBranchesByParent.get(parentName) ?? []).forEach((child) => {
        const idx = branchPreviewIndexForChildFork(parentPreviews, parentTimes, child);
        if (idx >= 0) parentForkIndices.add(idx);
      });
      const parentSegment = findSegmentForIndex(parentPreviews.length, parentForkIndices, forkIndex);
      if (!parentSegment) return null;
      // Use the actual fork-point row (time-aligned) rather than the parent clump's
      // collapsed anchor row, which can be significantly newer and force children too high.
      const forkPreview = parentPreviews[forkIndex];
      const anchorRow =
        gridRowByBranchSlot.get(branchSlotRowKey(parentName, forkIndex)) ??
        (forkPreview?.fullSha
          ? gridRowByBranchSha.get(branchShaRowKey(parentName, forkPreview.fullSha))
          : undefined) ??
        (() => {
          const fallbackSlotIndex = parentSegment.end;
          const fallbackPreview = parentPreviews[fallbackSlotIndex];
          return (
            gridRowByBranchSlot.get(branchSlotRowKey(parentName, fallbackSlotIndex)) ??
            (fallbackPreview?.fullSha
              ? gridRowByBranchSha.get(branchShaRowKey(parentName, fallbackPreview.fullSha))
              : undefined)
          );
        })();
      return anchorRow == null || !Number.isFinite(anchorRow) ? null : anchorRow;
    };

    const branchDepthCache = new Map<string, number>();
    const branchDepth = (branchName: string, visiting = new Set<string>()): number => {
      const cached = branchDepthCache.get(branchName);
      if (cached != null) return cached;
      if (visiting.has(branchName)) return Number.MAX_SAFE_INTEGER;
      visiting.add(branchName);
      const branch = branchByName.get(branchName);
      if (!branch) {
        branchDepthCache.set(branchName, 0);
        return 0;
      }
      const parentName = renderParentBranchName(branch);
      if (!parentName || parentName === defaultBranch || parentName === branchName || !branchByName.has(parentName)) {
        branchDepthCache.set(branchName, 1);
        return 1;
      }
      const depth = 1 + branchDepth(parentName, visiting);
      branchDepthCache.set(branchName, depth);
      return depth;
    };

    // Iterate to settle cascaded parent->child constraints across nested branches.
    for (let pass = 0; pass < activeBranches.length; pass += 1) {
      let changed = false;
      const branchShiftOrder = [...activeBranches].sort((a, b) => {
        const depthDiff = branchDepth(a.name) - branchDepth(b.name);
        if (depthDiff !== 0) return depthDiff;
        const floorDiff =
          (parentAnchorRowForBranch(a) ?? Number.NEGATIVE_INFINITY) -
          (parentAnchorRowForBranch(b) ?? Number.NEGATIVE_INFINITY);
        if (floorDiff !== 0) return floorDiff;
        const forkDiff = branchForkMs(a) - branchForkMs(b);
        if (forkDiff !== 0) return forkDiff;
        const createdDiff = branchCreatedMs(a) - branchCreatedMs(b);
        if (createdDiff !== 0) return createdDiff;
        return a.name.localeCompare(b.name);
      });
      for (const branch of branchShiftOrder) {
        const parentAnchorRow = parentAnchorRowForBranch(branch);
        if (parentAnchorRow == null) continue;
        changed = shiftBranchRowsToFloor(branch.name, parentAnchorRow) || changed;
      }
      if (!changed) break;
    }

    // Densify row indices to only rows that actually back visible commit markers.
    // This prevents "phantom" timeline rows reserved by transient/internal clumps
    // from creating blank bands in the rendered map.
    const usedRows = new Set<number>();
    const usedRowSources = new Map<number, Set<string>>();
    const includeRow = (row: number | undefined | null, source?: string) => {
      if (row == null || !Number.isFinite(row)) return;
      usedRows.add(row);
      if (!source) return;
      let sources = usedRowSources.get(row);
      if (!sources) {
        sources = new Set<string>();
        usedRowSources.set(row, sources);
      }
      sources.add(source);
    };

    // Keep only rows that back currently visible clump markers.
    // Collapsed clumps keep one row, expanded clumps keep one row per visible member.
    const rowForClumpMember = (clump: GridClump, memberIndex: number): number | undefined => {
      const sha = clump.shas[memberIndex];
      const slotIndex = clump.slotIndices?.[memberIndex];
      if (clump.lane === 'main' || clump.lane === 'main-merge') {
        return sha ? gridRowBySha.get(sha) : undefined;
      }
      if (sha) {
        return gridRowByBranchSha.get(branchShaRowKey(clump.lane, sha));
      }
      if (slotIndex != null) {
        return gridRowByBranchSlot.get(branchSlotRowKey(clump.lane, slotIndex));
      }
      return undefined;
    };

    gridClumps.forEach((clump) => {
      const expandedState = expandedClumps.get(clump.key);
      const shouldReserveExpandedRows =
        (expandedState?.isExpanded ?? false) &&
        expandedState?.phase !== 'collapsing';
      const memberCount = Math.max(clump.shas.length, clump.slotIndices?.length ?? 0);

      if (shouldReserveExpandedRows && memberCount > 1) {
        let includedAnyMember = false;
        for (let memberIndex = 0; memberIndex < memberCount; memberIndex += 1) {
          const memberRow = rowForClumpMember(clump, memberIndex);
          if (memberRow == null || !Number.isFinite(memberRow)) continue;
          includeRow(memberRow, `${clump.key}#${memberIndex}`);
          includedAnyMember = true;
        }
        if (!includedAnyMember) includeRow(clump.rowIndex, clump.key);
        return;
      }

      includeRow(clump.rowIndex, clump.key);
    });

    if (usedRows.size === 0) {
      claimedGridRowTimes = rowTimes;
      claimedGridRowSources = new Map<number, string[]>();
      rowTimes.forEach((_, row) => {
        claimedGridRowSources.set(row, Array.from(usedRowSources.get(row) ?? []));
      });
    } else {
      const denseRows = Array.from(usedRows).sort((a, b) => a - b);
      const denseRowByOld = new Map<number, number>();
      denseRows.forEach((row, index) => {
        denseRowByOld.set(row, index);
      });

      const remapRows = (map: Map<string, number>) => {
        const entries = Array.from(map.entries());
        map.clear();
        entries.forEach(([key, row]) => {
          const nextRow = denseRowByOld.get(row);
          if (nextRow == null) return;
          map.set(key, nextRow);
        });
      };

      remapRows(gridRowBySha);
      remapRows(gridRowByBranchSha);
      remapRows(gridRowByBranchSlot);
      claimedGridRowTimes = denseRows.map((row) => rowTimes[row] ?? 0);
      claimedGridRowSources = new Map<number, string[]>();
      denseRows.forEach((row, denseIndex) => {
        claimedGridRowSources.set(denseIndex, Array.from(usedRowSources.get(row) ?? []));
      });
    }
  }

  const gridRowTimes = (() => {
    return claimedGridRowTimes;
  })();
  const gridRowSources = claimedGridRowSources;
  const gridEventPoints = gridRowTimes.map((time, index) => ({ t: time, x: leftPad + index * GRID_EVENT_GAP }));


  const allAnchorTimes = gridRowTimes;

  const anchorXs: number[] = [];
  if (gridEventPoints.length > 0) {
    anchorXs.push(...gridEventPoints.map((point) => point.x));
  } else if (allAnchorTimes.length > 0) {
    anchorXs.push(leftPad);
    for (let i = 1; i < allAnchorTimes.length; i += 1) {
      anchorXs.push(anchorXs[i - 1] + IDEAL_EVENT_GAP);
    }
  }

  function xForTimestamp(t: number): number {
    if (gridEventPoints.length > 0) {
      if (!Number.isFinite(t)) return gridEventPoints[0]?.x ?? leftPad;
      // Preserve chronology: anchor to the latest row at-or-before the target
      // timestamp. Only fall forward when nothing exists in the past.
      let bestPast: { t: number; x: number } | null = null;
      let bestFuture: { t: number; x: number } | null = null;
      for (const point of gridEventPoints) {
        if (point.t <= t) {
          if (
            bestPast == null ||
            point.t > bestPast.t ||
            (point.t === bestPast.t && point.x > bestPast.x)
          ) {
            bestPast = point;
          }
        } else if (
          bestFuture == null ||
          point.t < bestFuture.t ||
          (point.t === bestFuture.t && point.x < bestFuture.x)
        ) {
          bestFuture = point;
        }
      }
      return bestPast?.x ?? bestFuture?.x ?? (gridEventPoints[0]?.x ?? leftPad);
    }
    if (!Number.isFinite(t) || allAnchorTimes.length === 0) return leftPad;
    let lo = 0;
    let hi = allAnchorTimes.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (allAnchorTimes[mid] < t) lo = mid + 1;
      else hi = mid;
    }
    if (lo <= 0) return leftPad - IDEAL_EVENT_GAP * 2;
    if (lo >= allAnchorTimes.length) {
      const endX = anchorXs[anchorXs.length - 1] ?? leftPad;
      return endX + IDEAL_EVENT_GAP * 2;
    }
    return anchorXs[lo] ?? leftPad + lo * IDEAL_EVENT_GAP;
  }

  function gridXForSha(sha: string): number | undefined {
    if (!gridRowBySha) return undefined;
    const row = gridRowBySha.get(sha);
    if (row == null) return undefined;
    return leftPad + row * GRID_EVENT_GAP;
  }

  function gridXForBranchSha(branchName: string, sha: string): number | undefined {
    const branchRow = gridRowByBranchSha.get(branchShaRowKey(branchName, sha));
    if (branchRow != null) return leftPad + branchRow * GRID_EVENT_GAP;
    return gridXForSha(sha);
  }

  function gridXForBranchSlot(branchName: string, slotIndex: number): number | undefined {
    const branchRow = gridRowByBranchSlot.get(branchSlotRowKey(branchName, slotIndex));
    if (branchRow == null) return undefined;
    return leftPad + branchRow * GRID_EVENT_GAP;
  }

  const nodeXByFullSha = new Map<string, number>(
    sortedNodes.map((m) => [
      m.fullSha,
      gridXForSha(m.fullSha) ?? xForTimestamp(new Date(m.date).getTime()),
    ])
  );
  const directXByFullSha = new Map<string, number>(
    sortedDirectCommits.map((c) => [
      c.fullSha,
      gridXForSha(c.fullSha) ?? xForTimestamp(new Date(c.date).getTime()),
    ])
  );
  const forcedMergeJunctionXBySha = new Map<string, number>();

  function mergeJunctionTimeX(mergeNode: MergeNode): number {
    // Prefer forced grid placement (one row above merged branch source),
    // otherwise use the actual main-line commit coordinate for the merge SHA.
    return forcedMergeJunctionXBySha.get(mergeNode.fullSha) ??
      directXByFullSha.get(mergeNode.fullSha) ??
      nodeXByFullSha.get(mergeNode.fullSha) ??
      timeToX(mergeNode.date);
  }
  const mainEndX = gridEventPoints[gridEventPoints.length - 1]?.x ?? leftPad;
  const mainCommitXs = [
    ...sortedNodes.map((m) => nodeXByFullSha.get(m.fullSha) ?? leftPad),
    ...sortedDirectCommits.map((c) => directXByFullSha.get(c.fullSha) ?? leftPad),
  ];
  const latestMainCommitX = mainCommitXs.length > 0 ? Math.max(...mainCommitXs) : mainEndX;
  const mainActiveEndX = Math.min(mainEndX, latestMainCommitX);
  const averageMergeGap = sortedNodes.length > 1
    ? ((nodeXByFullSha.get(sortedNodes[sortedNodes.length - 1].fullSha) ?? leftPad) - (nodeXByFullSha.get(sortedNodes[0].fullSha) ?? leftPad)) / (sortedNodes.length - 1)
    : IDEAL_NODE_SPACING;

  function timeToX(dateStr: string): number {
    return xForTimestamp(new Date(dateStr).getTime());
  }

  const mainCommitXBySha = new Map<string, number>([
    ...sortedDirectCommits.map((c) => [c.fullSha, directXByFullSha.get(c.fullSha) ?? timeToX(c.date)] as [string, number]),
    ...sortedNodes.map((m) => [m.fullSha, nodeXByFullSha.get(m.fullSha) ?? timeToX(m.date)] as [string, number]),
  ]);

  function commitXForSha(sha?: string): number | null {
    if (!sha) return null;
    const exact = mainCommitXBySha.get(sha);
    if (typeof exact === 'number') return exact;
    const direct = sortedDirectCommits.find((c) => c.fullSha.startsWith(sha));
    if (direct) return directXByFullSha.get(direct.fullSha) ?? timeToX(direct.date);
    const merge = sortedNodes.find((m) => m.fullSha.startsWith(sha));
    if (merge) return nodeXByFullSha.get(merge.fullSha) ?? timeToX(merge.date);
    return null;
  }

  function branchCommitXForSha(branchName: string, sha?: string): number | null {
    if (!sha) return null;
    const previews = branchCommitPreviews[branchName] ?? [];
    const exact = previews.find((commit) => commit.fullSha === sha || commit.sha === sha);
    if (exact) return gridXForBranchSha(branchName, exact.fullSha) ?? timeToX(exact.date);
    const prefix = previews.find(
      (commit) =>
        commit.fullSha.startsWith(sha) ||
        sha.startsWith(commit.fullSha) ||
        commit.sha.startsWith(sha) ||
        sha.startsWith(commit.sha)
    );
    if (prefix) return gridXForBranchSha(branchName, prefix.fullSha) ?? timeToX(prefix.date);
    return null;
  }

  const mainCommitAnchors = [
    ...sortedDirectCommits.map((commit) => ({
      t: new Date(commit.date).getTime(),
      x: directXByFullSha.get(commit.fullSha) ?? timeToX(commit.date),
    })),
    ...(reserveMergeRows
      ? sortedNodes.map((node) => ({
        t: new Date(node.date).getTime(),
        x: nodeXByFullSha.get(node.fullSha) ?? timeToX(node.date),
      }))
      : []),
  ].filter((anchor) => Number.isFinite(anchor.t) && Number.isFinite(anchor.x));

  function snapToMainCommitX(dateStr?: string): number | null {
    if (!dateStr || mainCommitAnchors.length === 0) return null;
    const target = new Date(dateStr).getTime();
    if (!Number.isFinite(target)) return null;
    let bestPast: { delta: number; x: number } | null = null;
    let bestFuture: { delta: number; x: number } | null = null;
    for (const anchor of mainCommitAnchors) {
      if (anchor.t <= target) {
        const delta = target - anchor.t;
        if (!bestPast || delta < bestPast.delta) bestPast = { delta, x: anchor.x };
      } else {
        const delta = anchor.t - target;
        if (!bestFuture || delta < bestFuture.delta) bestFuture = { delta, x: anchor.x };
      }
    }
    return bestPast?.x ?? bestFuture?.x ?? null;
  }

  function snapToBranchCommitX(branchName: string, dateStr?: string): number | null {
    if (!dateStr) return null;
    const branch = branchByName.get(branchName);
    const commits = branch ? renderableBranchPreviews(branch) : sortedConcreteBranchPreviews(branchName);
    if (commits.length === 0) return null;
    const target = new Date(dateStr).getTime();
    if (!Number.isFinite(target)) return null;
    let bestPast: { delta: number; x: number } | null = null;
    let bestFuture: { delta: number; x: number } | null = null;
    for (const commit of commits) {
      const commitTime = new Date(commit.date).getTime();
      if (!Number.isFinite(commitTime)) continue;
      const commitX = gridXForBranchSha(branchName, commit.fullSha) ?? timeToX(commit.date);
      if (commitTime <= target) {
        const delta = target - commitTime;
        if (!bestPast || delta < bestPast.delta) bestPast = { delta, x: commitX };
      } else {
        const delta = commitTime - target;
        if (!bestFuture || delta < bestFuture.delta) bestFuture = { delta, x: commitX };
      }
    }
    return bestPast?.x ?? bestFuture?.x ?? null;
  }

  function findSegmentForIndex(
    entryCount: number,
    forkIndices: Set<number>,
    targetIndex: number
  ): { start: number; end: number } | null {
    if (entryCount <= 0 || targetIndex < 0 || targetIndex >= entryCount) return null;
    const effectiveForkIndices = Array.from(pruneForkSplitIndices(entryCount, forkIndices))
      .sort((a, b) => a - b);
    let start = 0;
    for (const split of effectiveForkIndices) {
      const end = Math.min(split, entryCount - 1);
      if (targetIndex >= start && targetIndex <= end) return { start, end };
      start = end + 1;
    }
    if (targetIndex >= start && targetIndex <= entryCount - 1) {
      return { start, end: entryCount - 1 };
    }
    return null;
  }

  function collapsedParentClumpLiftedTipX(branch: Branch, parentName: string): number | null {
    if (!parentName || parentName === defaultBranch || parentName === branch.name) return null;

    const parentBranch = branchByName.get(parentName);
    if (!parentBranch) return null;
    const parentPreviews = renderableBranchPreviews(parentBranch);
    if (parentPreviews.length <= 1) return null;

    const parentTimes = parentPreviews.map((commit) => new Date(commit.date).getTime());
    const forkIndex = branchPreviewIndexForChildFork(parentPreviews, parentTimes, branch);
    if (forkIndex < 0) return null;

    const parentForkIndices = new Set<number>();
    (childBranchesByParent.get(parentName) ?? []).forEach((child) => {
      const idx = branchPreviewIndexForChildFork(parentPreviews, parentTimes, child);
      if (idx >= 0) parentForkIndices.add(idx);
    });

    const parentSegment = findSegmentForIndex(parentPreviews.length, parentForkIndices, forkIndex);
    if (!parentSegment) return null;
    const { start: segmentStart, end: segmentEnd } = parentSegment;
    const segmentLength = segmentEnd - segmentStart + 1;
    if (segmentLength <= 1) return null;
    // If the fork is already on the visible clump anchor commit, no lift needed.
    if (forkIndex >= segmentEnd) return null;

    const clumpKey = `commit-clump-${parentName}-${segmentStart}-${segmentEnd}`;
    const expandedState = expandedClumps.get(clumpKey);
    const parentClumpIsExpanded =
      (expandedState?.isExpanded ?? false) &&
      expandedState?.phase !== 'collapsing';
    if (parentClumpIsExpanded) return null;

    const anchorSlotIndex = segmentEnd;
    const anchorPreview = parentPreviews[anchorSlotIndex];
    const anchorX =
      gridXForBranchSlot(parentName, anchorSlotIndex) ??
      (anchorPreview?.fullSha
        ? gridXForBranchSha(parentName, anchorPreview.fullSha)
        : undefined);
    if (anchorX == null) return null;
    return anchorX + GRID_EVENT_GAP;
  }

  function branchCreatedDate(b: Branch): string {
    return b.createdDate ?? b.divergedFromDate ?? b.lastCommitDate;
  }

  function branchCreatedMs(b: Branch): number {
    const t = new Date(branchCreatedDate(b)).getTime();
    return Number.isFinite(t) ? t : Number.POSITIVE_INFINITY;
  }

  function branchForkMs(branch: Branch): number {
    const t = new Date(branch.divergedFromDate ?? branch.createdDate ?? branch.lastCommitDate).getTime();
    return Number.isFinite(t) ? t : Number.POSITIVE_INFINITY;
  }

  function branchEarliestPreviewDate(branchName: string): string | null {
    const branch = branchByName.get(branchName);
    if (!branch) return null;
    const previews = renderableBranchPreviews(branch);
    return previews[0]?.date ?? null;
  }

  type BranchTiming = {
    parentName: string;
    forkTimeX: number;
    tipTimeX: number;
    mergeNodeTimeX: number | null;
    maxTimeX: number;
    isFreshCopy: boolean;
    isMergedBranch: boolean;
  };

  const branchTimingByName = new Map<string, BranchTiming>();

  function branchHeadTimeX(branch: Branch): number {
    const byBranchSha = branch.headSha ? branchCommitXForSha(branch.name, branch.headSha) : null;
    if (byBranchSha != null) return byBranchSha;
    const byMainSha = commitXForSha(branch.headSha);
    if (byMainSha != null) return byMainSha;
    const byBranchDate = snapToBranchCommitX(branch.name, branch.lastCommitDate);
    if (byBranchDate != null) return byBranchDate;
    const byMainDate = snapToMainCommitX(branch.lastCommitDate);
    if (byMainDate != null) return byMainDate;
    return timeToX(branch.lastCommitDate);
  }

  function branchForkTimeX(branch: Branch, parentName: string, visiting: Set<string>): number {
    const hasParentBranch =
      parentName !== defaultBranch &&
      parentName !== branch.name &&
      branchByName.has(parentName);

    if (!hasParentBranch) {
      const createdAnchor =
        commitXForSha(branch.createdFromSha) ??
        commitXForSha(branch.divergedFromSha);
      if (createdAnchor != null) return createdAnchor;

      const earliestPreviewDate = branchEarliestPreviewDate(branch.name);
      const snapMain =
        snapToMainCommitX(branch.divergedFromDate ?? branch.createdDate) ??
        snapToMainCommitX(earliestPreviewDate ?? branch.createdDate);
      if (snapMain != null) return snapMain;
    } else {
      const byParentSha = branchCommitXForSha(parentName, branch.divergedFromSha);
      const byParentDate = snapToBranchCommitX(parentName, branch.divergedFromDate ?? branch.createdDate);

      let baseForkX: number;
      if (byParentSha != null) {
        baseForkX = byParentSha;
      } else if (byParentDate != null) {
        baseForkX = byParentDate;
      } else {
        const parentTiming = branchTimingWithVisited(parentName, visiting);
        baseForkX = parentTiming.tipTimeX;
      }

      const lift = collapsedParentClumpLiftedTipX(branch, parentName);
      return lift != null ? Math.max(baseForkX, lift) : baseForkX;
    }

    return timeToX(branch.divergedFromDate ?? branch.createdDate ?? branch.lastCommitDate);
  }

  function branchTimingWithVisited(branchName: string, visiting: Set<string>): BranchTiming {
    const cached = branchTimingByName.get(branchName);
    if (cached) return cached;

    const branch = branchByName.get(branchName);
    if (!branch) {
      const fallbackDate =
        activeBranches[activeBranches.length - 1]?.lastCommitDate ??
        activeBranches[0]?.lastCommitDate ??
        new Date().toISOString();
      const fallbackTimeX = timeToX(fallbackDate);
      const fallback: BranchTiming = {
        parentName: defaultBranch,
        forkTimeX: fallbackTimeX,
        tipTimeX: fallbackTimeX,
        mergeNodeTimeX: null,
        maxTimeX: fallbackTimeX,
        isFreshCopy: false,
        isMergedBranch: false,
      };
      return fallback;
    }

    if (visiting.has(branch.name)) {
      const cycleHeadX = branchHeadTimeX(branch);
      const cycleFallback: BranchTiming = {
        parentName: defaultBranch,
        forkTimeX: Math.max(timeToX(branchCreatedDate(branch)), cycleHeadX - GRID_EVENT_GAP),
        tipTimeX: cycleHeadX,
        mergeNodeTimeX: null,
        maxTimeX: cycleHeadX,
        isFreshCopy: freshCopyBranchNames.has(branch.name),
        isMergedBranch: false,
      };
      branchTimingByName.set(branch.name, cycleFallback);
      return cycleFallback;
    }

    visiting.add(branch.name);
    const parentName = renderParentBranchName(branch);

    const children = childBranchesByParent.get(branch.name) || [];
    let maxChildLift = Number.NEGATIVE_INFINITY;
    for (const child of children) {
      const lift = collapsedParentClumpLiftedTipX(child, branch.name);
      if (lift != null) {
        maxChildLift = Math.max(maxChildLift, lift);
      }
    }

    const forkTimeX = branchForkTimeX(branch, parentName, visiting);
    const minTipTimeXFromCollapsedParent = collapsedParentClumpLiftedTipX(branch, parentName);
    const tipTimeX = Math.max(
      branchHeadTimeX(branch),
      forkTimeX,
      minTipTimeXFromCollapsedParent ?? Number.NEGATIVE_INFINITY,
      maxChildLift,
    );
    const isFreshCopy = freshCopyBranchNames.has(branch.name);
    const isMergedBranch = branch.commitsAhead === 0 && !isFreshCopy;
    const mergeNodeForBranch = isMergedBranch
      ? mergeNodeByMergedHeadSha.get(branch.headSha)
      : undefined;
    const mergeNodeTimeX = mergeNodeForBranch ? mergeJunctionTimeX(mergeNodeForBranch) : null;
    const timing: BranchTiming = {
      parentName,
      forkTimeX,
      tipTimeX,
      mergeNodeTimeX,
      maxTimeX: mergeNodeTimeX != null ? Math.max(tipTimeX, mergeNodeTimeX) : tipTimeX,
      isFreshCopy,
      isMergedBranch,
    };
    visiting.delete(branch.name);
    branchTimingByName.set(branch.name, timing);
    return timing;
  }

  function branchTiming(branch: Branch): BranchTiming {
    return branchTimingWithVisited(branch.name, new Set<string>());
  }

  function branchForkX(branch: Branch): number {
    return branchTiming(branch).forkTimeX;
  }

  function branchTipX(branch: Branch): number {
    return branchTiming(branch).tipTimeX;
  }

  for (const branch of activeBranches) {
    if (branch.commitsAhead !== 0) continue;
    if (freshCopyBranchNames.has(branch.name)) continue;
    const mergeNode = mergeNodeByMergedHeadSha.get(branch.headSha);
    if (!mergeNode) continue;
    const baseMergeX =
      directXByFullSha.get(mergeNode.fullSha) ??
      nodeXByFullSha.get(mergeNode.fullSha) ??
      timeToX(mergeNode.date);
    const minMergeX = branchTipX(branch) + GRID_EVENT_GAP;
    const forcedMergeX = Math.max(baseMergeX, minMergeX);
    forcedMergeJunctionXBySha.set(mergeNode.fullSha, forcedMergeX);
    // Keep merge-node rendering aligned with forced merge junction placement.
    nodeXByFullSha.set(mergeNode.fullSha, forcedMergeX);
    directXByFullSha.set(mergeNode.fullSha, forcedMergeX);
    mainCommitXBySha.set(mergeNode.fullSha, forcedMergeX);
  }

  function branchAheadCount(b: Branch): number {
    if (Object.prototype.hasOwnProperty.call(branchUniqueAheadCounts, b.name)) {
      return branchUniqueAheadCounts[b.name] ?? 0;
    }
    const previews = branchCommitPreviews[b.name];
    if (previews != null) return previews.filter((preview) => preview.kind !== 'branch-created').length;
    return 0;
  }

  function sortedConcreteBranchPreviews(branchName: string): BranchCommitPreview[] {
    const concrete = (branchCommitPreviews[branchName] ?? [])
      .filter((commit) => commit.kind !== 'branch-created');
    return orderByLineage(concrete);
  }

  function renderableBranchPreviews(branch: Branch): BranchCommitPreview[] {
    const previews = sortedConcreteBranchPreviews(branch.name);
    const uniqueAhead = branchAheadCount(branch);
    if (uniqueAhead <= 0) return [];
    if (previews.length <= uniqueAhead) return previews;
    // Keep the latest N entries that correspond to unique commits ahead.
    return previews.slice(previews.length - uniqueAhead);
  }

  // Canonical (logical) layout uses vertical time; orientation projection swaps axes when needed.
  const MAIN_LEFT_PAD = 0;
  const MAIN_TOP_PAD = 0;
  const mainX = MAIN_LEFT_PAD;
  const timelineMinX = leftPad;
  const timelineMaxX = activeBranches.reduce(
    (max, b) => Math.max(max, branchTipX(b)),
    mainEndX
  ) + GRID_EVENT_GAP;
  const timelineSpanY = Math.max(1, timelineMaxX - timelineMinX);
  const mainStartY = MAIN_TOP_PAD + timelineSpanY; // oldest
  function timeCoordToY(timeCoordX: number): number {
    return mainStartY - (timeCoordX - timelineMinX);
  }
  const mainEndY = timeCoordToY(mainEndX); // newest anchor on main
  const mainActiveEndY = timeCoordToY(mainActiveEndX);

  const mapTopInset = Math.max(0, mapTopInsetPx);
  const layoutViewportW = viewportSize.width;
  const layoutViewportH = Math.max(1, viewportSize.height - mapTopInset);
  const viewportMinDim = Math.min(layoutViewportW, layoutViewportH);
  const svgContentPadding =
    layoutViewportW > 0 && layoutViewportH > 0
      ? Math.min(
          SVG_CONTENT_PADDING_MAX,
          Math.round(
            SVG_CONTENT_PADDING_BASE *
              Math.max(1, viewportMinDim / SVG_CONTENT_PADDING_VIEWPORT_REF_MIN)
          )
        )
      : SVG_CONTENT_PADDING_BASE;

  // Vertical extent of grid rows in Y (half node above/below row centers). Used to keep
  // guide and viewport bounds aligned to full node cells instead of center lines.
  const gridHalfHForBounds = GRID_NODE_RECT.height / 2;
  const gridRowYExtent =
    gridEventPoints.length > 0
      ? (() => {
          const ys = gridEventPoints.map((p) => timeCoordToY(p.x)).filter(Number.isFinite);
          if (ys.length === 0) return null;
          const minC = Math.min(...ys);
          const maxC = Math.max(...ys);
          return { minY: minC - gridHalfHForBounds, maxY: maxC + gridHalfHForBounds };
        })()
      : null;

  const logicalTimelineHeight = gridRowYExtent
    ? Math.max(
        mainStartY + SVG_LAYOUT_TAIL_Y,
        gridRowYExtent.maxY - Math.min(0, gridRowYExtent.minY),
      ) + 2 * svgContentPadding
    : mainStartY + SVG_LAYOUT_TAIL_Y + 2 * svgContentPadding;

  function projectPoint(x: number, y: number): { x: number; y: number } {
    return isHorizontal ? { x: logicalTimelineHeight - y, y: x } : { x, y };
  }

  function pathCoord(x: number, y: number): string {
    const projected = projectPoint(x, y);
    return `${projected.x} ${projected.y}`;
  }

  function unprojectPoint(x: number, y: number): { x: number; y: number } {
    return isHorizontal ? { x: y, y: logicalTimelineHeight - x } : { x, y };
  }

  function rowIndexForProjectedPoint(x: number, y: number): number | undefined {
    if (gridEventPoints.length === 0) return undefined;
    const logical = unprojectPoint(x, y);
    const timeCoordX = timelineMinX + (mainStartY - logical.y);
    if (!Number.isFinite(timeCoordX)) return undefined;
    const rawRow = Math.round((timeCoordX - leftPad) / GRID_EVENT_GAP);
    if (!Number.isFinite(rawRow)) return undefined;
    if (rawRow < 0 || rawRow >= gridEventPoints.length) return undefined;
    return rawRow;
  }

  // ── Branch columns self-create on first use ────────────────────────────────
  // Each branch claims its own column lazily, biased to parent+1 when parent
  // is visible. Columns are reused only when branch time-ranges are separated.
  const BRANCH_LANE_MIN_SEPARATION_X = Math.max(GRID_LANE_MIN_SEPARATION, GRID_EVENT_GAP);
  const laneWidth = gridLaneWidth;
  const laneOffsetX = GRID_LANE_OFFSET_X;
  const branchColumnByName = new Map<string, number>();
  const columnIntervals = new Map<number, Array<{ start: number; end: number }>>();

  function intervalsConflict(startA: number, endA: number, startB: number, endB: number): boolean {
    return !(
      startA - endB >= BRANCH_LANE_MIN_SEPARATION_X ||
      startB - endA >= BRANCH_LANE_MIN_SEPARATION_X
    );
  }

  function columnHasConflict(column: number, start: number, end: number): boolean {
    const intervals = columnIntervals.get(column) ?? [];
    return intervals.some((interval) => intervalsConflict(start, end, interval.start, interval.end));
  }

  function claimBranchColumnWithVisited(branchName: string, visiting: Set<string>): number {
    const cached = branchColumnByName.get(branchName);
    if (typeof cached === 'number') return cached;
    const branch = branchByName.get(branchName);
    if (!branch) return 0;
    const timing = branchTiming(branch);
    const branchStart = timing.forkTimeX;
    const branchEnd = timing.maxTimeX;

    if (visiting.has(branchName)) {
      let cycleColumn = 0;
      while (columnHasConflict(cycleColumn, branchStart, branchEnd)) cycleColumn += 1;
      const intervals = columnIntervals.get(cycleColumn) ?? [];
      intervals.push({ start: branchStart, end: branchEnd });
      columnIntervals.set(cycleColumn, intervals);
      branchColumnByName.set(branchName, cycleColumn);
      return cycleColumn;
    }

    visiting.add(branchName);
    const renderParent = timing.parentName;
    const hasVisibleParent =
      renderParent !== defaultBranch &&
      renderParent !== branch.name &&
      branchByName.has(renderParent);
    const minColumn = hasVisibleParent
      ? claimBranchColumnWithVisited(renderParent, visiting) + 1
      : 0;

    let column = minColumn;
    while (columnHasConflict(column, branchStart, branchEnd)) column += 1;

    const intervals = columnIntervals.get(column) ?? [];
    intervals.push({ start: branchStart, end: branchEnd });
    columnIntervals.set(column, intervals);
    branchColumnByName.set(branchName, column);
    visiting.delete(branchName);
    return column;
  }

  [...activeBranches]
    .sort((a, b) => {
      const createdDiff = branchCreatedMs(a) - branchCreatedMs(b);
      if (createdDiff !== 0) return createdDiff;
      const startDiff = branchForkX(a) - branchForkX(b);
      if (startDiff !== 0) return startDiff;
      return a.name.localeCompare(b.name);
    })
    .forEach((branch) => {
      claimBranchColumnWithVisited(branch.name, new Set<string>());
    });

  function laneBaseX(b: Branch): number {
    const column = branchColumnByName.get(b.name) ?? claimBranchColumnWithVisited(b.name, new Set<string>());
    return mainX + laneWidth * (column + 1) + laneOffsetX;
  }

  const laneBaseXByBranch = new Map<string, number>(
    activeBranches.map((b) => [b.name, laneBaseX(b)])
  );

  const laneXByBranch = new Map<string, number>(
    activeBranches.map((branch) => {
      const baseLaneX = laneBaseXByBranch.get(branch.name) ?? laneBaseX(branch);
      return [branch.name, baseLaneX];
    })
  );

  function laneX(b: Branch): number {
    return laneXByBranch.get(b.name) ?? laneBaseX(b);
  }

  function branchStartX(b: Branch): number {
    const parent = branchTiming(b).parentName;
    if (parent && parent !== defaultBranch) {
      const parentX = laneXByBranch.get(parent);
      if (typeof parentX === 'number') {
        return parentX;
      }
    }
    return mainX;
  }

  let hasCommitCenterCanonicalBounds = false;
  let commitCenterCanonicalMinX = 0;
  let commitCenterCanonicalMaxX = 0;
  let commitCenterCanonicalMinY = 0;
  let commitCenterCanonicalMaxY = 0;

  function includeCommitCenterCanonical(x: number, y: number) {
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;
    if (!hasCommitCenterCanonicalBounds) {
      hasCommitCenterCanonicalBounds = true;
      commitCenterCanonicalMinX = x;
      commitCenterCanonicalMaxX = x;
      commitCenterCanonicalMinY = y;
      commitCenterCanonicalMaxY = y;
      return;
    }
    commitCenterCanonicalMinX = Math.min(commitCenterCanonicalMinX, x);
    commitCenterCanonicalMaxX = Math.max(commitCenterCanonicalMaxX, x);
    commitCenterCanonicalMinY = Math.min(commitCenterCanonicalMinY, y);
    commitCenterCanonicalMaxY = Math.max(commitCenterCanonicalMaxY, y);
  }

  const seenMainCommitShas = new Set<string>();
  for (const commit of sortedDirectCommits) {
    const timeCoordX = directXByFullSha.get(commit.fullSha) ?? timeToX(commit.date);
    includeCommitCenterCanonical(mainX, timeCoordToY(timeCoordX));
    seenMainCommitShas.add(commit.fullSha);
  }
  if (reserveMergeRows) {
    for (const node of sortedNodes) {
      if (seenMainCommitShas.has(node.fullSha)) continue;
      const timeCoordX = nodeXByFullSha.get(node.fullSha) ?? timeToX(node.date);
      includeCommitCenterCanonical(mainX, timeCoordToY(timeCoordX));
    }
  }
  for (const branch of activeBranches) {
    const lanePosX = laneXByBranch.get(branch.name);
    if (typeof lanePosX !== 'number' || !Number.isFinite(lanePosX)) continue;
    const commitTipTimeX = branchTipX(branch);
    const uniqueAhead = branchAheadCount(branch);
    const previews = renderableBranchPreviews(branch);
    const minCommitTimeX = branchForkX(branch);
    const maxCommitTimeX = Math.max(minCommitTimeX, commitTipTimeX);
    includeCommitCenterCanonical(lanePosX, timeCoordToY(minCommitTimeX));
    includeCommitCenterCanonical(lanePosX, timeCoordToY(maxCommitTimeX));
    if (previews.length > 0) {
      for (const preview of previews) {
        const timeCoordX =
          gridXForBranchSha(branch.name, preview.fullSha) ?? timeToX(preview.date);
        includeCommitCenterCanonical(lanePosX, timeCoordToY(timeCoordX));
      }
      continue;
    }
    const syntheticCount = Math.max(0, uniqueAhead);
    for (let slot = 0; slot < syntheticCount; slot += 1) {
      const timeCoordX =
        gridXForBranchSlot(branch.name, slot) ?? timeToX(branch.lastCommitDate);
      includeCommitCenterCanonical(lanePosX, timeCoordToY(timeCoordX));
    }
  }

  const maxBranchVisualEndX = activeBranches.reduce((max, b) => {
    const lanePosX = laneXByBranch.get(b.name) ?? mainX;
    return Math.max(max, lanePosX + AHEAD_LABEL_OFFSET_X);
  }, mainX + MAIN_LABEL_OFFSET_X + estimateSvgTextWidth(defaultBranch));

  // Lane geometry (used for grid width — see below).
  const laneXsForBounds = [mainX, ...Array.from(laneXByBranch.values())];
  const minLaneXForBounds = Math.min(...laneXsForBounds);
  const maxLaneXForBounds = Math.max(...laneXsForBounds);
  const gridHalfWForBounds = GRID_LANE_WIDTH / 2;
  /** Right edge of the lane column strip (grid columns + row lines should match this). */
  const gridLaneExtentMaxX = maxLaneXForBounds + gridHalfWForBounds;

  // Left edge can be < 0 when mainX is 0: lane cells extend to minLaneX - laneHalf. Do not
  // clamp to 0 or the clip slices the left half of the left column (same idea as Y below).
  const graphExtentMinX = Math.min(timelineMinX, minLaneXForBounds - gridHalfWForBounds);

  // Use `tightGridXSpan` for SVG width so row lines match lane columns.
  const tightGridXSpan = gridLaneExtentMaxX - graphExtentMinX;
  const logicalSvgWidth = tightGridXSpan + 2 * svgContentPadding + rightPad + SVG_LAYOUT_TAIL_X;

  // Merged PRs lane layout
  const MERGED_LANE_HEIGHT = 60;
  const MERGED_LANES = 4;
  const logicalSvgHeight = logicalTimelineHeight;
  const contentSvgWidth = isHorizontal ? logicalSvgHeight : logicalSvgWidth;
  const contentSvgHeight = isHorizontal ? logicalSvgWidth : logicalSvgHeight;
  let svgWidth = contentSvgWidth;
  let svgHeight = contentSvgHeight;
  if (
    MATCH_SVG_ASPECT_TO_VIEWPORT &&
    layoutViewportW > 0 &&
    layoutViewportH > 0 &&
    contentSvgWidth > 0 &&
    contentSvgHeight > 0
  ) {
    const winAr = layoutViewportW / layoutViewportH;
    const contentAr = contentSvgWidth / contentSvgHeight;
    if (contentAr > winAr) {
      svgHeight = contentSvgWidth / winAr;
    } else {
      svgWidth = contentSvgHeight * winAr;
    }
  }
  const canvasWidth = svgWidth + CANVAS_PAD_X * 2;
  const canvasHeight = svgHeight + CANVAS_PAD_Y * 2;
  const graphOffsetX = (canvasWidth - svgWidth) / 2;
  const graphOffsetY = (canvasHeight - svgHeight) / 2;
  graphOffsetRef.current = { x: graphOffsetX, y: graphOffsetY };
  cameraBoundsRef.current = {
    viewportW: viewportSize.width,
    viewportH: viewportSize.height,
    viewportTopInset: mapTopInset,
    canvasWidth,
    canvasHeight,
    svgWidth,
    svgHeight,
    graphOffsetX,
    graphOffsetY,
    isHorizontal,
  };

  // Center finite graph content inside the SVG viewBox so empty padding is even on all sides.
  const yPadSymmetric = Math.min(CLIP_MARGIN_TOP, CLIP_MARGIN_BOTTOM);

  let minXWorldForBounds: number;
  let maxXWorldForBounds: number;
  let minYWorldForBounds: number;
  let maxYWorldForBounds: number;

  {
    const tightMinX = graphExtentMinX - GRID_VIEW_PAD_X;
    const tightMaxX = gridLaneExtentMaxX + GRID_VIEW_PAD_X;
    minXWorldForBounds = tightMinX - svgContentPadding;
    maxXWorldForBounds = tightMaxX + svgContentPadding;
    if (gridRowYExtent) {
      minYWorldForBounds = gridRowYExtent.minY - yPadSymmetric - svgContentPadding;
      maxYWorldForBounds = gridRowYExtent.maxY + yPadSymmetric + svgContentPadding;
    } else {
      minYWorldForBounds = Math.max(0, mainEndY - yPadSymmetric) - svgContentPadding;
      maxYWorldForBounds = Math.min(logicalSvgHeight, mainStartY + yPadSymmetric) + svgContentPadding;
    }
  }
  const projectedContentBounds = isHorizontal
    ? {
        minX: logicalTimelineHeight - maxYWorldForBounds,
        maxX: logicalTimelineHeight - minYWorldForBounds,
        minY: minXWorldForBounds,
        maxY: maxXWorldForBounds,
      }
    : {
        minX: minXWorldForBounds,
        maxX: maxXWorldForBounds,
        minY: minYWorldForBounds,
        maxY: maxYWorldForBounds,
      };
  const contentBBoxW = projectedContentBounds.maxX - projectedContentBounds.minX;
  const contentBBoxH = projectedContentBounds.maxY - projectedContentBounds.minY;
  const graphContentTranslateX =
    contentBBoxW > 0 && Number.isFinite(contentBBoxW)
      ? (svgWidth - contentBBoxW) / 2 - projectedContentBounds.minX
      : 0;
  const graphContentTranslateY =
    contentBBoxH > 0 && Number.isFinite(contentBBoxH)
      ? (svgHeight - contentBBoxH) / 2 - projectedContentBounds.minY
      : 0;
  selectionProjectionRef.current = {
    graphOffsetX,
    graphOffsetY,
    graphContentTranslateX,
    graphContentTranslateY,
    isHorizontal,
  };
  const projectedCommitCenterBounds = hasCommitCenterCanonicalBounds
    ? (isHorizontal
      ? {
          minX: logicalTimelineHeight - commitCenterCanonicalMaxY,
          maxX: logicalTimelineHeight - commitCenterCanonicalMinY,
          minY: commitCenterCanonicalMinX,
          maxY: commitCenterCanonicalMaxX,
        }
      : {
          minX: commitCenterCanonicalMinX,
          maxX: commitCenterCanonicalMaxX,
          minY: commitCenterCanonicalMinY,
          maxY: commitCenterCanonicalMaxY,
        })
    : null;
  finiteWorldBoundsRef.current = {
    minX: projectedContentBounds.minX + graphContentTranslateX,
    maxX: projectedContentBounds.maxX + graphContentTranslateX,
    minY: projectedContentBounds.minY + graphContentTranslateY,
    maxY: projectedContentBounds.maxY + graphContentTranslateY,
    measured: true,
  };
  centerableCommitBoundsRef.current = projectedCommitCenterBounds
    ? {
        minX: projectedCommitCenterBounds.minX + graphContentTranslateX,
        maxX: projectedCommitCenterBounds.maxX + graphContentTranslateX,
        minY: projectedCommitCenterBounds.minY + graphContentTranslateY,
        maxY: projectedCommitCenterBounds.maxY + graphContentTranslateY,
        measured: true,
      }
    : {
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0,
        measured: false,
      };
  const centerableCommitBoundsDep = projectedCommitCenterBounds
    ? `${projectedCommitCenterBounds.minX}:${projectedCommitCenterBounds.maxX}:${projectedCommitCenterBounds.minY}:${projectedCommitCenterBounds.maxY}`
    : 'none';

  useEffect(() => {
    if (viewportSize.width <= 0 || viewportSize.height <= 0) return;
    syncUiState(true, true);
  }, [
    viewportSize.width,
    viewportSize.height,
    canvasWidth,
    canvasHeight,
    svgWidth,
    svgHeight,
    graphOffsetX,
    graphOffsetY,
    isHorizontal,
    graphContentTranslateX,
    graphContentTranslateY,
    mapTopInset,
    centerableCommitBoundsDep,
  ]);

  const checkedOutBranchName = checkedOutRef?.branchName ?? null;
  const checkedOutHeadSha = checkedOutRef?.headSha ?? null;
  const checkedOutParentSha = checkedOutRef?.parentSha ?? null;
  const checkedOutHasUncommittedChanges = checkedOutRef?.hasUncommittedChanges ?? false;
  const checkedOutIsDetached = !checkedOutBranchName;

  function branchPreviewContainsSha(branchName: string, sha: string): boolean {
    const previews = branchCommitPreviews[branchName] ?? [];
    return previews.some((commit) =>
      commit.fullSha === sha ||
      commit.sha === sha ||
      commit.fullSha.startsWith(sha) ||
      sha.startsWith(commit.fullSha) ||
      commit.sha.startsWith(sha) ||
      sha.startsWith(commit.sha)
    );
  }

  function isSelectedLaneBranch(branch: Branch): boolean {
    if (checkedOutBranchName) return checkedOutBranchName === branch.name;
    if (!checkedOutHeadSha) return false;
    return (
      shaMatchesGitRef(branch.headSha, checkedOutHeadSha) ||
      branchPreviewContainsSha(branch.name, checkedOutHeadSha)
    );
  }

  function checkedOutPointForSha(sha: string): { x: number; y: number } | null {
    const directX = directXByFullSha.get(sha);
    if (typeof directX === 'number') {
      return { x: mainX, y: timeCoordToY(directX) };
    }

    const mergeX = nodeXByFullSha.get(sha);
    if (typeof mergeX === 'number') {
      return { x: mainX, y: timeCoordToY(mergeX) };
    }

    const branchesByShaAll = activeBranches.filter((b) => b.headSha === sha);
    const preferredHeadBranches = branchesByShaAll.filter((b) => branchAheadCount(b) > 0);
    const branchesBySha = preferredHeadBranches.length > 0
      ? preferredHeadBranches
      : branchesByShaAll;
    if (branchesBySha.length > 0) {
      const branchBySha = (() => {
        if (branchesBySha.length === 1) return branchesBySha[0];
        if (checkedOutParentSha) {
          const byParent = branchesBySha.find((b) =>
            branchPreviewContainsSha(b.name, checkedOutParentSha)
          );
          if (byParent) return byParent;
        }
        return [...branchesBySha].sort((a, b) => {
          const laneAX = laneXByBranch.get(a.name) ?? mainX;
          const laneBX = laneXByBranch.get(b.name) ?? mainX;
          if (laneAX !== laneBX) return laneAX - laneBX;
          return a.name.localeCompare(b.name);
        })[0];
      })();
      return {
        x: laneXByBranch.get(branchBySha.name) ?? mainX,
        y: timeCoordToY(branchTipX(branchBySha)),
      };
    }

    return null;
  }

  const checkedOutIndicatorLocal = (() => {
    if (checkedOutBranchName === defaultBranch) {
      if (checkedOutHeadSha) {
        const headPoint = checkedOutPointForSha(checkedOutHeadSha);
        if (headPoint) return headPoint;
      }
      return { x: mainX, y: mainActiveEndY };
    }

    if (checkedOutBranchName && checkedOutBranchName !== defaultBranch) {
      const branch = activeBranches.find((b) => b.name === checkedOutBranchName);
      if (branch) {
        return {
          x: laneXByBranch.get(branch.name) ?? mainX,
          y: timeCoordToY(branchTipX(branch)),
        };
      }
    }

    if (checkedOutHeadSha) {
      const headPoint = checkedOutPointForSha(checkedOutHeadSha);
      if (headPoint) return headPoint;

      if (checkedOutIsDetached && checkedOutParentSha) {
        const parentPoint = checkedOutPointForSha(checkedOutParentSha);
        if (parentPoint) return parentPoint;
      }
    }

    return null;
  })();

  const checkedOutDisplayIndicatorLocal = checkedOutIndicatorLocal
    ? {
      x: (() => {
        if (!(checkedOutHasUncommittedChanges && checkedOutIsDetached)) {
          return checkedOutIndicatorLocal.x;
        }
        const lanePositions = Array.from(
          new Set<number>([mainX, ...Array.from(laneXByBranch.values())])
        ).sort((a, b) => a - b);
        if (lanePositions.length <= 1) {
          return mainX + laneWidth + 40;
        }

        let nearestLane = lanePositions[0];
        let nearestDistance = Math.abs(checkedOutIndicatorLocal.x - nearestLane);
        for (const lanePos of lanePositions.slice(1)) {
          const distance = Math.abs(checkedOutIndicatorLocal.x - lanePos);
          if (distance < nearestDistance) {
            nearestLane = lanePos;
            nearestDistance = distance;
          }
        }

        const nextLane = lanePositions.find((lanePos) => lanePos > nearestLane + 0.5);
        if (typeof nextLane === 'number') return nextLane;
        return nearestLane + laneWidth;
      })(),
      y: checkedOutIndicatorLocal.y + (
        checkedOutHasUncommittedChanges && checkedOutIsDetached
          ? -CHECKED_OUT_AHEAD_OFFSET_WORLD
          : 0
      ),
    }
    : null;
  const checkedOutAnchorTarget = checkedOutDisplayIndicatorLocal ?? checkedOutIndicatorLocal;
  const checkedOutAnchor = checkedOutAnchorTarget
    ? {
      x: projectPoint(checkedOutAnchorTarget.x, checkedOutAnchorTarget.y).x,
      y: projectPoint(checkedOutAnchorTarget.x, checkedOutAnchorTarget.y).y,
    }
    : null;

  // Center the checked-out commit in the viewport when data first appears.
  useEffect(() => {
    if (!hasTimelineSeedData) {
      hasAutoCenteredRef.current = false;
      autoCenterSignatureRef.current = null;
      hasUserMovedCameraRef.current = false;
      clearTimelineRevealTimer();
      setTimelineRevealPhase('hidden');
      setTimelineRevealReady(false);
      setHasInitialRevealDone(false);
      return;
    }
    if (hasUserMovedCameraRef.current || viewportSize.width <= 0 || viewportSize.height <= 0) return;
    if (!hasInitialRevealDone && timelineRevealPhase === 'fading') return;
    // During initial hydration, the checked-out target can be unresolved for a
    // render or two. Keep showing the centered loader marker until the real
    // anchor exists so reveal timing always starts from the final camera target.
    if (!hasInitialRevealDone && checkedOutAnchor == null) return;
    // After the intro reveal has completed, still guard checked-out scenarios.
    if (hasInitialRevealDone && checkedOutRef && checkedOutAnchor == null) return;
    const zoomValue = zoomRef.current;
    const fallbackCenter = {
      x: svgWidth / 2,
      y: svgHeight / 2,
    };
    const target = checkedOutAnchor
      ? {
          x: checkedOutAnchor.x + graphContentTranslateX,
          y: checkedOutAnchor.y + graphContentTranslateY,
        }
      : fallbackCenter;
    const signature = [
      Math.round(target.x * 10) / 10,
      Math.round(target.y * 10) / 10,
      Math.round(viewportSize.width),
      Math.round(viewportSize.height),
      Math.round(mapTopInset),
      Math.round(zoomValue * 1000) / 1000,
    ].join('|');
    if (hasAutoCenteredRef.current && autoCenterSignatureRef.current === signature) return;
    const scale = getCameraScale(zoomValue, isHorizontal);
    const visibleCenterY = (mapTopInset + viewportSize.height) / 2;
    const nextPan = clampPan(
      {
        x: viewportSize.width / 2 - graphOffsetX - target.x * scale.x,
        y: visibleCenterY - graphOffsetY - target.y * scale.y,
      },
      zoomValue,
      'hard'
    );
    applyCamera(nextPan, zoomValue, true);
    hasAutoCenteredRef.current = true;
    autoCenterSignatureRef.current = signature;
    if (!hasInitialRevealDone && timelineRevealPhase === 'hidden') {
      scheduleTimelineReveal();
    }
  }, [
    hasTimelineSeedData,
    hasInitialRevealDone,
    timelineRevealPhase,
    viewportSize.width,
    viewportSize.height,
    graphOffsetX,
    graphOffsetY,
    svgWidth,
    svgHeight,
    checkedOutAnchor?.x,
    checkedOutAnchor?.y,
    checkedOutRef?.branchName,
    checkedOutRef?.headSha,
    checkedOutRef?.parentSha,
    checkedOutRef?.hasUncommittedChanges,
    graphContentTranslateX,
    graphContentTranslateY,
    mapTopInset,
  ]);

  // Scroll timeline to the requested branch. Set flashingName briefly so the arc
  // starts bright red, then CSS stroke transition fades it to the settled lighter red.
  useEffect(() => {
    if (!scrollRequest) return;
    if (isHorizontal ? viewportSize.width <= 0 : viewportSize.height <= 0) return;
    markUserMovedCamera();
    const { branch } = scrollRequest;
    const focusTime = branch.divergedFromDate
      ? timeToX(branch.divergedFromDate)
      : timeToX(branch.lastCommitDate);
    const focusLaneX = laneXByBranch.get(branch.name) ?? mainX;
    const projected = projectPoint(focusLaneX, timeCoordToY(focusTime));
    const viewportSpan = isHorizontal ? layoutViewportW : layoutViewportH;
    const axisGraphOffset = isHorizontal ? graphOffsetX : graphOffsetY;
    const scalePair = getCameraScale(zoomRef.current, isHorizontal);
    const axisScale = Math.max(isHorizontal ? scalePair.x : scalePair.y, 0.0001);
    const axisSvgSize = isHorizontal ? svgWidth : svgHeight;
    const visibleWorldSpan = viewportSpan / axisScale;
    const axisCoord = isHorizontal
      ? projected.x + graphContentTranslateX
      : projected.y + graphContentTranslateY;
    const targetWorldStart = Math.max(
      0,
      Math.min(Math.max(0, axisSvgSize - visibleWorldSpan), axisCoord - visibleWorldSpan / 2)
    );
    const clampedTargetPan = clampPan(
      isHorizontal
        ? { x: -axisGraphOffset - targetWorldStart * axisScale, y: targetPanRef.current.y }
        : { x: targetPanRef.current.x, y: -axisGraphOffset - targetWorldStart * axisScale },
      zoomRef.current,
      'hard'
    );

    focusScrollCancelRef.current?.();
    focusScrollCancelRef.current = smoothValueTo(
      isHorizontal ? panRef.current.x : panRef.current.y,
      isHorizontal ? clampedTargetPan.x : clampedTargetPan.y,
      600,
      (value) => {
        const next = clampPan(
          isHorizontal
            ? { x: value, y: targetPanRef.current.y }
            : { x: targetPanRef.current.x, y: value },
          zoomRef.current,
          'hard'
        );
        applyCamera(next, zoomRef.current);
      }
    );
    setFlashingName(branch.name);
    const t = setTimeout(() => setFlashingName(null), 700);
    return () => {
      clearTimeout(t);
      focusScrollCancelRef.current?.();
      focusScrollCancelRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    scrollRequest,
    viewportSize.width,
    viewportSize.height,
    graphOffsetX,
    graphOffsetY,
    canvasWidth,
    canvasHeight,
    isHorizontal,
    graphContentTranslateX,
    graphContentTranslateY,
    mapTopInset,
  ]);

  useEffect(() => {
    return () => {
      clearTimelineRevealTimer();
    };
  }, []);

  useEffect(() => {
    return () => {
      for (const timer of clumpCleanupTimersRef.current.values()) {
        window.clearTimeout(timer);
      }
      clumpCleanupTimersRef.current.clear();
    };
  }, []);

  const worldUnitsPerScreenPx = 1 / Math.max(layerCameraScale.x, 0.0001);
  const worldPx = (px: number) => px * worldUnitsPerScreenPx;
  const NODE_FRAME_LABEL_FONT_PX = 12;
  const NODE_FRAME_LABEL_TOP_GAP_PX = 2;
  const NODE_FRAME_LABEL_LEFT_INSET_PX = 2;
  const NODE_FRAME_LABEL_RIGHT_INSET_PX = 4;
  const NODE_FRAME_LABEL_PAIR_GAP_PX = 2;
  const NODE_FRAME_LABEL_COLOR = '#78716c';
  const NODE_FRAME_LABEL_WEIGHT = 400;
  const nodeFrameLabelFontSize = worldPx(NODE_FRAME_LABEL_FONT_PX);
  const nodeFrameLabelGap = worldPx(NODE_FRAME_LABEL_TOP_GAP_PX);
  const nodeFrameLabelInsetX = worldPx(NODE_FRAME_LABEL_LEFT_INSET_PX);
  const nodeFrameLabelRightInsetX = worldPx(NODE_FRAME_LABEL_RIGHT_INSET_PX);
  const nodeFrameLabelPairGap = worldPx(NODE_FRAME_LABEL_PAIR_GAP_PX);
  const nodeFrameCollapseIconSize = worldPx(12);
  const shortShaLabel = (sha?: string | null): string => (sha ? sha.slice(0, 7) : '-------');
  const stackCountLabel = (count: number): string => `x${clumpCountLabel(count)}`;
  const trimTextToWidth = (text: string, maxWidth: number): string => {
    if (maxWidth <= 0) return '';
    if (estimateSvgTextWidth(text, nodeFrameLabelFontSize) <= maxWidth) return text;
    const ellipsis = '…';
    const ellipsisWidth = estimateSvgTextWidth(ellipsis, nodeFrameLabelFontSize);
    if (ellipsisWidth > maxWidth) return '';
    let lo = 0;
    let hi = text.length;
    while (lo < hi) {
      const mid = Math.ceil((lo + hi) / 2);
      const candidate = `${text.slice(0, mid)}${ellipsis}`;
      if (estimateSvgTextWidth(candidate, nodeFrameLabelFontSize) <= maxWidth) {
        lo = mid;
      } else {
        hi = mid - 1;
      }
    }
    if (lo <= 0) return ellipsis;
    return `${text.slice(0, lo)}${ellipsis}`;
  };
  const fitNodeFrameTitle = (
    branchName: string,
    sha: string | undefined | null,
    rectWidth: number,
    rightText?: string,
    reserveIconWidth = false,
  ): string => {
    const fullLabel = `${branchName}/${shortShaLabel(sha)}`;
    let rightContentWidth = 0;
    if (rightText) {
      rightContentWidth = estimateSvgTextWidth(rightText, nodeFrameLabelFontSize) + nodeFrameLabelPairGap;
    } else if (reserveIconWidth) {
      rightContentWidth = nodeFrameCollapseIconSize + nodeFrameLabelPairGap;
    }
    const availableTitleWidth =
      rectWidth - nodeFrameLabelInsetX - nodeFrameLabelRightInsetX - rightContentWidth;
    if (availableTitleWidth <= 0) return '';
    return trimTextToWidth(fullLabel, availableTitleWidth);
  };
  const scaledNodeSize = NODE_SIZE;
  const nodeRectSize = (_count: number) => commitRectSize(scaledNodeSize, 0);
  // Keep interaction hit areas consistent in screen pixels across zoom levels.
  const scaledHoverHitSize = worldPx(20);
  // Branch hover lines use vector-effect: non-scaling-stroke, so this should
  // stay in screen px (not inverse-scaled by zoom) to avoid oversized hitboxes when zoomed out.
  const branchHitStrokeWidth = BRANCH_HIT_STROKE_WIDTH;
  const drawPathMainClass = (!ENABLE_TIMELINE_INTRO_ANIMATIONS || animationsLocked) ? undefined : 'draw-path-main';
  const drawPathArcClass = (!ENABLE_TIMELINE_INTRO_ANIMATIONS || animationsLocked) ? undefined : 'draw-path-arc';
  const fadeInInfoClass = (!ENABLE_TIMELINE_INTRO_ANIMATIONS || animationsLocked) ? undefined : 'fade-in-info';
  const mainTimelineOpacity = 1;
  const timelineCanvasVisible = timelineRevealPhase !== 'hidden';
  const holdTimelineForInitialCenter =
    isLoading || (!hasInitialRevealDone && hasTimelineSeedData && timelineRevealPhase !== 'done' && !hasUserMovedCameraRef.current);

  const clumpExpandMs = 260;
  const clumpExpandEasing = 'cubic-bezier(0.22, 1, 0.36, 1)';
  const getNodeStrokeColor = (
    nodeKey: string,
    baseStroke = CANVAS_NODE_STROKE,
    isCheckedOutSelection = false,
    isUserSelected = false,
  ) => {
    if (isUserSelected) return USER_SELECTION_STROKE;
    if (isCheckedOutSelection) return CHECKED_OUT_SELECTION_STROKE;
    return hoveredNodeStrokeKey === nodeKey ? CANVAS_NEUTRAL_GRAY_HOVER : baseStroke;
  };
  const branchLaneHitPointerEvents: React.CSSProperties['pointerEvents'] =
    hoveredNodeStrokeKey != null ? 'none' : 'stroke';
  function handleNodeHoverEnter(nodeKey: string, branchName?: string) {
    setHoveredNodeStrokeKey(nodeKey);
    setHoveredNodeBranchName(branchName ?? null);
  }
  function handleNodeHoverLeave() {
    setHoveredNodeStrokeKey(null);
    setHoveredNodeBranchName(null);
  }
  const branchRenderLayoutCache = new Map<string, BranchRenderLayout>();
  function getBranchRenderLayout(b: Branch): BranchRenderLayout {
    const cached = branchRenderLayoutCache.get(b.name);
    if (cached) return cached;

    const forkTimeX = branchForkX(b);
    const lanePosX = laneX(b);
    const startX = branchStartX(b);
    const isFreshCopy = freshCopyBranchNames.has(b.name);
    const isMergedBranch = b.commitsAhead === 0 && !isFreshCopy;
    const isLocalBranch = b.remoteSyncStatus !== 'on-github';
    const branchCommits = renderableBranchPreviews(b);
    const hasPreviewData = branchCommitPreviews[b.name] != null;
    const visibleBranchCommits = branchCommits;
    const uniqueAheadCount = branchAheadCount(b);
    const aheadCount = Math.max(0, uniqueAheadCount);
    const hasConcretePreviewCommits = visibleBranchCommits.length > 0;
    const shouldShowEmptyPlaceholder = !hasConcretePreviewCommits && uniqueAheadCount <= 0;
    const commitCount = hasConcretePreviewCommits
      ? visibleBranchCommits.length
      : Math.max(aheadCount, shouldShowEmptyPlaceholder ? 1 : 0);
    const mergeNodeForBranch = isMergedBranch
      ? mergeNodeByMergedHeadSha.get(b.headSha)
      : undefined;
    const mergeNodeTimeX = mergeNodeForBranch
      ? mergeJunctionTimeX(mergeNodeForBranch)
      : null;
    const baseTipTimeX = branchTipX(b);
    const tipTimeX = mergeNodeTimeX != null ? Math.max(baseTipTimeX, mergeNodeTimeX) : baseTipTimeX;
    const commitTipTimeX = isMergedBranch ? baseTipTimeX : tipTimeX;
    const commitTipY = timeCoordToY(commitTipTimeX);
    let branchLineTipY = commitTipY;
    if (!hasConcretePreviewCommits && commitCount > 0) {
      const placeholderTipX = gridXForBranchSlot(b.name, commitCount - 1);
      if (placeholderTipX != null) {
        branchLineTipY = timeCoordToY(placeholderTipX);
      }
    }
    const forkY = timeCoordToY(forkTimeX);
    const routeCornerR = GRID_ROUTE_CORNER_R;
    const maxAllowedMergeY = branchLineTipY - GRID_EVENT_GAP;
    const renderedMergeAnchorByShaRaw = mergeNodeForBranch
      ? renderedMainAnchorByCommitSha.get(mergeNodeForBranch.fullSha)
      : undefined;
    const renderedMergeAnchorBySha =
      renderedMergeAnchorByShaRaw && renderedMergeAnchorByShaRaw.y <= maxAllowedMergeY
        ? renderedMergeAnchorByShaRaw
        : undefined;
    const renderedMergeAnchorByTime = renderedMainAnchorForTimeX(mergeNodeTimeX, maxAllowedMergeY);
    const renderedMergeAnchor = renderedMergeAnchorBySha ?? renderedMergeAnchorByTime;
    const fallbackMergeTarget = mergeNodeTimeX != null
      ? { x: mainX, y: timeCoordToY(mergeNodeTimeX) }
      : null;
    const mergeTarget = (() => {
      const isUpward = (y: number): boolean => y <= maxAllowedMergeY;
      if (renderedMergeAnchor && isUpward(renderedMergeAnchor.y)) {
        return { x: renderedMergeAnchor.x, y: renderedMergeAnchor.y };
      }
      if (fallbackMergeTarget && isUpward(fallbackMergeTarget.y)) {
        return fallbackMergeTarget;
      }
      if (renderedMergeAnchor || fallbackMergeTarget) {
        // Guardrail: merge connectors should never route downward.
        return { x: mainX, y: maxAllowedMergeY };
      }
      return null;
    })();
    const mergeTargetX = mergeTarget?.x ?? mainX;
    const mergeTargetY = mergeTarget?.y ?? null;
    const hasMergeBackConnector =
      mergeTargetY != null && Math.abs(lanePosX - mergeTargetX) > 0.5;
    const mergeBackPath = (() => {
      if (!hasMergeBackConnector || mergeTargetY == null) return null;
      return buildMergeOrthogonalPath({
        laneX: lanePosX,
        tipY: branchLineTipY,
        mergeX: mergeTargetX,
        mergeY: mergeTargetY,
        cornerR: routeCornerR,
        pointFormatter: pathCoord,
      });
    })();
    const curvePath = buildBranchOrthogonalPath({
      startX,
      forkY,
      laneX: lanePosX,
      tipY: branchLineTipY,
      cornerR: routeCornerR,
      pointFormatter: pathCoord,
    });
    const horizontalDir = lanePosX >= startX ? 1 : -1;
    const verticalDir = branchLineTipY >= forkY ? 1 : -1;
    const startTrim = Math.min(
      BRANCH_HIT_END_INSET,
      Math.max(0, Math.abs(lanePosX - startX) - 1),
    );
    const endTrim = Math.min(
      BRANCH_HIT_END_INSET,
      Math.max(0, Math.abs(branchLineTipY - forkY) - 1),
    );
    const hitStartX = startX + horizontalDir * startTrim;
    const hitTipY = branchLineTipY - verticalDir * endTrim;
    const hitCurvePath = buildBranchOrthogonalPath({
      startX: hitStartX,
      forkY,
      laneX: lanePosX,
      tipY: hitTipY,
      cornerR: routeCornerR,
      pointFormatter: pathCoord,
    });

    const displayedCommits = hasConcretePreviewCommits
      ? [...visibleBranchCommits.slice(0, commitCount)]
      : [];
    const minCommitTimeX = forkTimeX;
    const maxCommitTimeX = Math.max(minCommitTimeX, commitTipTimeX);
    const commitItems: Array<BranchCommitPreview | undefined> = hasConcretePreviewCommits
      ? displayedCommits
      : Array.from({ length: commitCount }, () => undefined);
    const headCommitIndex = hasConcretePreviewCommits
      ? commitItems.findIndex((item) => item?.fullSha === b.headSha)
      : -1;
    let commitDots: CommitDot[] = commitItems.map((commit, index) => {
      // Always prefer grid-derived rows (sha/slot) so rendered marker positions
      // stay in lock-step with row allocation, even for synthetic commit entries.
      const slotX = gridXForBranchSlot(b.name, index);
      const shaX = commit?.fullSha ? gridXForBranchSha(b.name, commit.fullSha) : undefined;
      // Prefer slot rows over SHA rows. Branch preview streams can contain repeated
      // SHAs across slots/clumps, and SHA lookups would collapse those markers.
      const mappedX = slotX ?? shaX;
      const fallbackX = Math.max(
        minCommitTimeX,
        Math.min(maxCommitTimeX, timeToX(commit?.date ?? b.lastCommitDate))
      );
      const x = mappedX ?? fallbackX;
      return { y: timeCoordToY(x), commit };
    });
    const realCommitDotIndices = commitItems.reduce<number[]>((acc, item, index) => {
      if (item?.kind !== 'branch-created') acc.push(index);
      return acc;
    }, []);
    let branchEndDotIndex: number | null = null;
    if (realCommitDotIndices.length > 0) {
      const anchorIndex = headCommitIndex >= 0
        ? headCommitIndex
        : realCommitDotIndices[realCommitDotIndices.length - 1];
      branchEndDotIndex = anchorIndex;
    } else if (commitDots.length > 0) {
      branchEndDotIndex = commitDots.length - 1;
    }
    const targetLocalCommitCount = isLocalBranch
      ? (
        b.remoteSyncStatus === 'local-only'
          ? realCommitDotIndices.length
          : b.unpushedCommits
      )
      : 0;
    const boundedLocalCommitCount = Math.max(
      0,
      Math.min(targetLocalCommitCount, realCommitDotIndices.length),
    );
    const localCommitDotIndices = new Set(
      realCommitDotIndices.slice(realCommitDotIndices.length - boundedLocalCommitCount),
    );
    const allBranchCommitsAreLocal =
      realCommitDotIndices.length > 0 &&
      boundedLocalCommitCount === realCommitDotIndices.length;
    const firstLocalDotIndex = localCommitDotIndices.size > 0
      ? Math.min(...Array.from(localCommitDotIndices))
      : null;
    const firstLocalCommitY = firstLocalDotIndex != null
      ? commitDots[firstLocalDotIndex]?.y
      : undefined;
    const previousCommittedIndex = firstLocalDotIndex != null
      ? (() => {
        const prior = realCommitDotIndices.filter((idx) => idx < firstLocalDotIndex);
        return prior.length > 0 ? prior[prior.length - 1] : undefined;
      })()
      : undefined;
    const localSegmentStartY =
      !allBranchCommitsAreLocal &&
      firstLocalCommitY != null &&
      previousCommittedIndex != null
        ? (
          (firstLocalCommitY + (commitDots[previousCommittedIndex]?.y ?? firstLocalCommitY)) / 2
        )
        : undefined;
    const fullBranchShouldUseLocalGray =
      isLocalBranch && (allBranchCommitsAreLocal || realCommitDotIndices.length === 0);
    const commitDotEntries: MarkerEntry<CommitEntryItem>[] =
      commitDots.map(({ y, commit }, index) => {
        const point = projectPoint(lanePosX, y);
        return {
          x: point.x,
          y: point.y,
          item: { index, commit },
        };
      });
    const branchForkIndices = new Set<number>();
    const branchChildBranches = childBranchesByParent.get(b.name) ?? [];
    if (branchChildBranches.length > 0) {
      const previews = renderableBranchPreviews(b);
      const branchTimes = previews.map((c) => new Date(c.date).getTime());
      branchChildBranches.forEach((child) => {
        const idx = branchPreviewIndexForChildFork(previews, branchTimes, child);
        if (idx >= 0) branchForkIndices.add(idx);
      });
    }
    const commitDotClusters = clusterByForkPoints(commitDotEntries, branchForkIndices);

    const promptMarkersRaw = branchPromptMeta[b.name]?.markers ?? [];
    const promptSeeds = [...promptMarkersRaw]
      .sort((a, bx) => new Date(a.timestamp).getTime() - new Date(bx.timestamp).getTime());
    const promptMarkers = promptSeeds.map((marker) => {
      const rawX = timeToX(marker.timestamp);
      const x = Math.max(minCommitTimeX, Math.min(maxCommitTimeX, rawX));
      return {
        y: timeCoordToY(x),
        marker,
      };
    });
    const promptMarkerEntries: MarkerEntry<PromptEntryItem>[] =
      promptMarkers.map(({ y, marker }, markerIndex) => {
        const point = projectPoint(lanePosX, y);
        return {
          x: point.x,
          y: point.y,
          item: {
            marker,
            index: markerIndex,
          },
        };
      });
    const promptMarkerClusters = clusterByForkPoints(promptMarkerEntries, new Set<number>());

    const branchHasCheckedOutHead =
      checkedOutHeadSha != null &&
      (
        checkedOutBranchName
          ? checkedOutBranchName === b.name
          : (
            shaMatchesGitRef(b.headSha, checkedOutHeadSha) ||
            visibleBranchCommits.some((commit) =>
              shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
              shaMatchesGitRef(commit.sha, checkedOutHeadSha)
            )
          )
      );
    const brDelay = branchDelayMs.get(b.name) ?? 0;
    const hasOpenPR = openPRBranchNames.has(b.name);
    const daysSinceCommit = (Date.now() - new Date(b.lastCommitDate).getTime()) / 86400000;
    const showClockIcon = hasOpenPR && daysSinceCommit >= 60;
    const nameAnchor = projectPoint(lanePosX, forkY);
    const nameDx = isHorizontal ? 24 : 20;
    const nameDy = isHorizontal ? -20 : -12;
    const namePoint = { x: nameAnchor.x + nameDx, y: nameAnchor.y + nameDy };
    const clockPoint = { x: namePoint.x + 10, y: namePoint.y };

    const layout: BranchRenderLayout = {
      forkY,
      lanePosX,
      startX,
      isMergedBranch,
      isLocalBranch,
      mergeNodeTimeX,
      branchLineTipY,
      mergeBackPath,
      curvePath,
      hitCurvePath,
      hasPreviewData,
      visibleBranchCommits,
      uniqueAheadCount,
      branchEndDotIndex,
      localCommitDotIndices,
      fullBranchShouldUseLocalGray,
      localSegmentStartY,
      commitDotClusters,
      promptMarkerClusters,
      branchHasCheckedOutHead,
      brDelay,
      showClockIcon,
      namePoint,
      clockPoint,
    };
    branchRenderLayoutCache.set(b.name, layout);
    return layout;
  }

  const clumpAnimStyle: React.CSSProperties = {
    transition: `transform ${clumpExpandMs}ms ${clumpExpandEasing}, opacity ${clumpExpandMs}ms ${clumpExpandEasing}`,
    willChange: 'transform, opacity',
  };
  const hoveredNodeBranchLineage = (() => {
    if (!hoveredNodeBranchName) return new Set<string>();
    const lineage = new Set<string>();
    const visited = new Set<string>();
    let currentBranchName: string | null = hoveredNodeBranchName;
    while (currentBranchName && !visited.has(currentBranchName)) {
      visited.add(currentBranchName);
      if (currentBranchName === defaultBranch) break;
      const branch = branchByName.get(currentBranchName);
      if (!branch) break;
      lineage.add(currentBranchName);
      const parentName = renderParentBranchName(branch);
      if (!parentName || parentName === currentBranchName || parentName === defaultBranch) break;
      currentBranchName = parentName;
    }
    return lineage;
  })();
  const isNodeLineageHovered = (branchName: string): boolean => hoveredNodeBranchLineage.has(branchName);

  const toggleClumpExpanded = (clumpKey: string) => {
    const existing = expandedClumps.get(clumpKey);
    const isExpanded = existing?.isExpanded ?? false;

    const existingCleanupTimer = clumpCleanupTimersRef.current.get(clumpKey);
    if (existingCleanupTimer != null) {
      window.clearTimeout(existingCleanupTimer);
      clumpCleanupTimersRef.current.delete(clumpKey);
    }

    if (isExpanded) {
      // Collapse: keep visual state long enough for transition effects, but
      // row reservation now drops immediately when phase becomes "collapsing".
      const collapseStartedAt = Date.now();
      setExpandedClumps((prev) => {
        const next = new Map(prev);
        next.set(clumpKey, { isExpanded: true, phase: 'collapsing', phaseStartedAt: collapseStartedAt });
        return next;
      });

      // Drive re-renders so grid-row interpolation/fade stays smooth.
      const collapseTick = () => {
        const elapsed = Date.now() - collapseStartedAt;
        setClumpAnimationTick((v) => v + 1);
        if (elapsed < clumpExpandMs) requestAnimationFrame(collapseTick);
      };
      requestAnimationFrame(collapseTick);

      const cleanupTimer = window.setTimeout(() => {
        setExpandedClumps((prev) => {
          const next = new Map(prev);
          next.delete(clumpKey);
          return next;
        });
        clumpCleanupTimersRef.current.delete(clumpKey);
      }, clumpExpandMs);

      clumpCleanupTimersRef.current.set(clumpKey, cleanupTimer);
      return;
    }

    setExpandedClumps((prev) => {
      const next = new Map(prev);
      next.set(clumpKey, { isExpanded: true, phase: 'collapsed', phaseStartedAt: Date.now() });
      return next;
    });

    requestAnimationFrame(() => {
      setExpandedClumps((prev) => {
        const next = new Map(prev);
        const current = next.get(clumpKey);
        if (!current?.isExpanded) return prev;
        next.set(clumpKey, {
          isExpanded: true,
          phase: 'expanding',
          phaseStartedAt: current.phaseStartedAt ?? Date.now(),
        });
        return next;
      });
      requestAnimationFrame(() => {
        setExpandedClumps((prev) => {
          const next = new Map(prev);
          const current = next.get(clumpKey);
          if (!current?.isExpanded) return prev;
          next.set(clumpKey, {
            isExpanded: true,
            phase: 'expanded',
            phaseStartedAt: current.phaseStartedAt ?? Date.now(),
          });
          return next;
        });
      });
    });
  };

  type MainDirectClusterLayout = {
    cluster: MarkerCluster<DirectCommit>;
    clusterKey: string;
    count: number;
    first: DirectCommit;
    last: DirectCommit;
    memberKeys: string[];
    clusterHasMainTip: boolean;
    clusterHasCheckedOutHead: boolean;
    clusterHasSelectedCommit: boolean;
  };
  const mainDirectEntries: MarkerEntry<DirectCommit>[] = sortedDirectCommits.map((commit) => {
    const timeCoordX = directXByFullSha.get(commit.fullSha) ?? timeToX(commit.date);
    const markerPoint = projectPoint(mainX, timeCoordToY(timeCoordX));
    return { x: markerPoint.x, y: markerPoint.y, item: commit };
  });
  const latestMainCommitSha = mainDirectEntries[mainDirectEntries.length - 1]?.item.fullSha;
  const selectedCommitShaRawSet = new Set(selectedCommitShas);
  const mainForkIndices = new Set<number>(mainCommitSplitIndices);
  const mainDirectClusters: MainDirectClusterLayout[] = clusterByForkPoints(
    mainDirectEntries,
    mainForkIndices,
    forcedMainSplitIndices,
  )
    .map((cluster) => {
      const count = cluster.entries.length;
      const first = cluster.entries[0].item;
      const last = cluster.entries[count - 1].item;
      const clusterKey = `direct-clump-${first.fullSha}-${last.fullSha}`;
      return {
        cluster,
        clusterKey,
        count,
        first,
        last,
        memberKeys: cluster.entries.map((entry) => `direct:${entry.item.fullSha}`),
        clusterHasMainTip: cluster.entries.some(
          (entry) => entry.item.fullSha === latestMainCommitSha
        ),
        clusterHasCheckedOutHead:
          checkedOutHeadSha != null &&
          cluster.entries.some((entry) => shaMatchesGitRef(entry.item.fullSha, checkedOutHeadSha)),
        clusterHasSelectedCommit:
          cluster.entries.some((entry) => selectedCommitShaRawSet.has(entry.item.fullSha)),
      };
    });
  const renderedMainAnchorByCommitSha = (() => {
    const anchors = new Map<string, AnchorPoint>();
    for (const clusterLayout of mainDirectClusters) {
      const {
        cluster,
        clusterKey,
        memberKeys,
        clusterHasCheckedOutHead: mainClusterHasCheckedOutHead,
      } = clusterLayout;
      const animatedAnchor = resolveAnimatedClumpAnchor(
        clusterKey,
        { x: cluster.x, y: cluster.y },
        memberKeys
      );
      const expanded = expandedClumps.get(clusterKey);
      const isExpanded = expanded?.isExpanded ?? false;
      const headEntryForCluster =
        mainClusterHasCheckedOutHead && checkedOutHeadSha && isExpanded
          ? cluster.entries.find((entry) =>
              shaMatchesGitRef(entry.item.fullSha, checkedOutHeadSha)
            )
          : null;
      const anchorProjected = headEntryForCluster ?? animatedAnchor;
      const collapsedCanonical = unprojectPoint(anchorProjected.x, anchorProjected.y);

      if (!isExpanded || cluster.entries.length <= 1) {
        cluster.entries.forEach((entry) => {
          anchors.set(entry.item.fullSha, collapsedCanonical);
        });
        continue;
      }

      const phase = expanded?.phase ?? 'collapsed';
      const phaseStartedAtMs = expanded?.phaseStartedAt ?? Date.now();
      const phaseProgress = phase === 'collapsed'
        ? 0
        : phase === 'expanded'
          ? 1
          : clamp01((Date.now() - phaseStartedAtMs) / clumpExpandMs);
      const phaseEased = phaseProgress <= 0 ? 0 : phaseProgress >= 1 ? 1 : easeInOutCubic(phaseProgress);
      cluster.entries.forEach((entry) => {
        const from = { x: anchorProjected.x, y: anchorProjected.y };
        const to = { x: entry.x, y: entry.y };
        const at = phase === 'collapsing'
          ? { x: to.x + (from.x - to.x) * phaseEased, y: to.y + (from.y - to.y) * phaseEased }
          : phase === 'expanding'
            ? { x: from.x + (to.x - from.x) * phaseEased, y: from.y + (to.y - from.y) * phaseEased }
            : phase === 'collapsed'
              ? from
              : to;
        anchors.set(entry.item.fullSha, unprojectPoint(at.x, at.y));
      });
    }
    return anchors;
  })();
  const renderedMainAnchorsByTime = (() => {
    const timedAnchors: Array<{ timeX: number; anchor: AnchorPoint }> = [];
    for (const [sha, anchor] of renderedMainAnchorByCommitSha.entries()) {
      const timeX = directXByFullSha.get(sha) ?? mainCommitXBySha.get(sha);
      if (typeof timeX !== 'number' || !Number.isFinite(timeX)) continue;
      timedAnchors.push({ timeX, anchor });
    }
    timedAnchors.sort((a, b) => a.timeX - b.timeX);
    return timedAnchors;
  })();

  function renderedMainAnchorForTimeX(targetTimeX: number | null, maxY: number = Number.POSITIVE_INFINITY): AnchorPoint | undefined {
    if (targetTimeX == null || !Number.isFinite(targetTimeX) || renderedMainAnchorsByTime.length === 0) {
      return undefined;
    }

    // Prefer a newer-or-equal visible main node so merge connectors trend upward.
    let future: { delta: number; anchor: AnchorPoint } | null = null;
    let past: { delta: number; anchor: AnchorPoint } | null = null;
    for (const entry of renderedMainAnchorsByTime) {
      if (entry.anchor.y > maxY) continue;
      if (entry.timeX >= targetTimeX) {
        const delta = entry.timeX - targetTimeX;
        if (!future || delta < future.delta) future = { delta, anchor: entry.anchor };
      } else {
        const delta = targetTimeX - entry.timeX;
        if (!past || delta < past.delta) past = { delta, anchor: entry.anchor };
      }
    }
    return future?.anchor ?? past?.anchor;
  }

  const checkedOutClumpKeysToAutoExpand = (() => {
    if (!checkedOutHeadSha) return [];

    const keys = new Set<string>();

    for (const { cluster, clusterKey } of mainDirectClusters) {
      if (cluster.entries.length <= 1) continue;
      const hasCheckedOutCommit = cluster.entries.some((entry) =>
        shaMatchesGitRef(entry.item.fullSha, checkedOutHeadSha)
      );
      if (hasCheckedOutCommit) keys.add(clusterKey);
    }

    for (const branch of activeBranches) {
      const { commitDotClusters, hasPreviewData, branchEndDotIndex } = getBranchRenderLayout(branch);
      for (const cluster of commitDotClusters) {
        const realCommitEntries = cluster.entries.filter(
          (entry) => entry.item.commit?.kind !== 'branch-created'
        );
        const renderEntries = realCommitEntries.length > 0 ? realCommitEntries : cluster.entries;
        if (renderEntries.length <= 1) continue;

        const hasCheckedOutCommit = cluster.entries.some((entry) => {
          const idx = entry.item.index;
          const commit = entry.item.commit;
          if (hasPreviewData && commit && commit.kind !== 'branch-created') {
            return (
              shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
              shaMatchesGitRef(commit.sha, checkedOutHeadSha)
            );
          }
          if (!hasPreviewData && checkedOutBranchName === branch.name && branchEndDotIndex === idx) {
            return shaMatchesGitRef(branch.headSha, checkedOutHeadSha);
          }
          return false;
        });

        if (!hasCheckedOutCommit) continue;

        const firstEntry = cluster.entries[0];
        const lastEntry = cluster.entries[cluster.entries.length - 1];
        keys.add(`commit-clump-${branch.name}-${firstEntry.item.index}-${lastEntry.item.index}`);
      }
    }

    return Array.from(keys);
  })();
  const checkedOutClumpAutoExpandSignature = checkedOutClumpKeysToAutoExpand
    .slice()
    .sort()
    .join('|');
  useEffect(() => {
    if (checkedOutClumpKeysToAutoExpand.length === 0) return;

    setExpandedClumps((prev) => {
      let next: Map<string, ExpandedClumpState> | null = null;
      for (const clumpKey of checkedOutClumpKeysToAutoExpand) {
        if (prev.get(clumpKey)?.isExpanded) continue;
        if (next == null) next = new Map(prev);
        next.set(clumpKey, { isExpanded: true, phase: 'expanded', phaseStartedAt: Date.now() });
      }
      return next ?? prev;
    });
  }, [checkedOutClumpAutoExpandSignature]);

  function resolveBranchHeadProjectedPoint(layout: BranchRenderLayout): { x: number; y: number } {
    if (layout.branchEndDotIndex != null) {
      for (const cluster of layout.commitDotClusters) {
        const matchedEntry = cluster.entries.find(
          (entry) => entry.item.index === layout.branchEndDotIndex
        );
        if (matchedEntry) return { x: matchedEntry.x, y: matchedEntry.y };
      }
    }
    return projectPoint(layout.lanePosX, layout.branchLineTipY);
  }

  const branchHeadTargets: BranchHeadTarget[] = [
    ...activeBranches.map((branch) => {
      const layout = getBranchRenderLayout(branch);
      return {
        branchName: branch.name,
        headSha: branch.headSha,
        point: resolveBranchHeadProjectedPoint(layout),
      };
    }),
    ...(() => {
      if (!latestMainCommitSha) return [] as BranchHeadTarget[];
      const mainAnchor = renderedMainAnchorByCommitSha.get(latestMainCommitSha);
      if (!mainAnchor) return [] as BranchHeadTarget[];
      return [{
        branchName: defaultBranch,
        headSha: latestMainCommitSha,
        point: projectPoint(mainAnchor.x, mainAnchor.y),
      }];
    })(),
  ];
  branchHeadTargetsRef.current = branchHeadTargets;
  const commitSelectionTargets = (() => {
    const bySha = new Map<string, CommitSelectionTarget>();
    for (const [sha, anchor] of renderedMainAnchorByCommitSha.entries()) {
      bySha.set(sha, {
        commitSha: sha,
        point: projectPoint(anchor.x, anchor.y),
      });
    }
    for (const branch of activeBranches) {
      const layout = getBranchRenderLayout(branch);
      for (const cluster of layout.commitDotClusters) {
        for (const entry of cluster.entries) {
          const commit = entry.item.commit;
          if (!commit || commit.kind === 'branch-created') continue;
          if (bySha.has(commit.fullSha)) continue;
          bySha.set(commit.fullSha, {
            commitSha: commit.fullSha,
            point: { x: entry.x, y: entry.y },
          });
        }
      }
    }
    for (const target of branchHeadTargets) {
      if (bySha.has(target.headSha)) continue;
      bySha.set(target.headSha, {
        commitSha: target.headSha,
        point: target.point,
      });
    }
    return Array.from(bySha.values());
  })();
  commitSelectionTargetsRef.current = commitSelectionTargets;
  const selectableCommitShaSet = new Set(commitSelectionTargets.map((target) => target.commitSha));
  const selectedVisibleCommitShas = selectedCommitShas.filter((sha) => selectableCommitShaSet.has(sha));
  const selectedCommitShaSet = new Set(selectedVisibleCommitShas);
  const commitShaToBranchNames = (() => {
    const map = new Map<string, Set<string>>();
    const add = (sha: string | undefined | null, branchName: string) => {
      if (!sha) return;
      const set = map.get(sha) ?? new Set<string>();
      set.add(branchName);
      map.set(sha, set);
    };

    for (const commit of sortedDirectCommits) {
      add(commit.fullSha, defaultBranch);
    }
    for (const branch of activeBranches) {
      const layout = getBranchRenderLayout(branch);
      for (const cluster of layout.commitDotClusters) {
        for (const entry of cluster.entries) {
          add(entry.item.commit?.fullSha, branch.name);
        }
      }
      add(branch.headSha, branch.name);
    }
    return map;
  })();
  const selectedBranchList = selectedBranchNames.filter((name) => selectableBranchNameSet.has(name));
  const selectedBranchNameSet = new Set(selectedBranchList);
  const branchCandidatesForCommit = (sha: string): string[] => {
    const branchesForCommit = commitShaToBranchNames.get(sha);
    if (!branchesForCommit) return [];
    return Array.from(branchesForCommit).filter((name) => selectableBranchNameSet.has(name));
  };
  const resolveTargetBranch = (targetSha: string): string | null => {
    const candidates = branchCandidatesForCommit(targetSha);
    if (candidates.length === 0) return null;
    const explicitBranch = selectedBranchList.find((branchName) => candidates.includes(branchName));
    if (explicitBranch) return explicitBranch;
    if (candidates.length === 1) return candidates[0];
    const nonDefault = candidates.find((branchName) => branchName !== defaultBranch);
    return nonDefault ?? candidates[0];
  };
  const commitMergeTargetOptions = Array.from(
    selectedVisibleCommitShas.reduce((byBranch, targetSha) => {
      const targetBranch = resolveTargetBranch(targetSha);
      if (!targetBranch) return byBranch;
      const sourceRefs = selectedVisibleCommitShas
        .filter((sha) => sha !== targetSha)
        .filter((sha) => {
          const sourceCandidates = new Set(branchCandidatesForCommit(sha));
          return !sourceCandidates.has(targetBranch);
        });
      byBranch.set(targetBranch, {
        targetSha,
        targetBranch,
        sourceRefs,
      });
      return byBranch;
    }, new Map<string, { targetSha: string; targetBranch: string; sourceRefs: string[] }>())
      .values()
  );
  const explicitTargetBranch =
    mergeTargetCommitSha != null ? resolveTargetBranch(mergeTargetCommitSha) : null;
  const selectedCommitTargetOption =
    (explicitTargetBranch
      ? commitMergeTargetOptions.find((option) => option.targetBranch === explicitTargetBranch)
      : null) ?? commitMergeTargetOptions[commitMergeTargetOptions.length - 1] ?? null;
  const targetBranchForSelectedCommit = selectedCommitTargetOption?.targetBranch ?? null;
  const commitMergeSources = selectedCommitTargetOption?.sourceRefs ?? [];

  type RowDebugUsage = {
    mainDirect: number;
    mainMerge: number;
    branchSha: number;
    branchSlot: number;
  };
  type RowDebugVisibleUsage = {
    main: number;
    branch: number;
    prompt: number;
    markerKeys: Set<string>;
  };
  const rowDebugEntityUsageByIndex = (() => {
    const usageByRow = new Map<number, RowDebugUsage>();
    const ensureRow = (row: number): RowDebugUsage => {
      let usage = usageByRow.get(row);
      if (!usage) {
        usage = { mainDirect: 0, mainMerge: 0, branchSha: 0, branchSlot: 0 };
        usageByRow.set(row, usage);
      }
      return usage;
    };
    const addUsage = (row: number | undefined | null, key: keyof RowDebugUsage) => {
      if (row == null || !Number.isFinite(row)) return;
      ensureRow(row)[key] += 1;
    };

    sortedDirectCommits.forEach((commit) => {
      addUsage(gridRowBySha.get(commit.fullSha), 'mainDirect');
    });
    if (reserveMergeRows) {
      sortedNodes.forEach((node) => {
        if (directCommitShaSet.has(node.fullSha)) return;
        addUsage(gridRowBySha.get(node.fullSha), 'mainMerge');
      });
    }

    activeBranches.forEach((branch) => {
      const previews = renderableBranchPreviews(branch);
      if (previews.length > 0) {
        previews.forEach((preview, index) => {
          const slotRow = gridRowByBranchSlot.get(branchSlotRowKey(branch.name, index));
          if (slotRow != null) {
            addUsage(slotRow, 'branchSlot');
            return;
          }
          addUsage(gridRowByBranchSha.get(branchShaRowKey(branch.name, preview.fullSha)), 'branchSha');
        });
        return;
      }

      const fallbackCount = Math.max(0, branchAheadCount(branch));
      for (let slot = 0; slot < fallbackCount; slot += 1) {
        addUsage(gridRowByBranchSlot.get(branchSlotRowKey(branch.name, slot)), 'branchSlot');
      }
    });

    return usageByRow;
  })();
  const rowDebugVisibleUsageByIndex = (() => {
    const usageByRow = new Map<number, RowDebugVisibleUsage>();
    const ensureRow = (row: number): RowDebugVisibleUsage => {
      let usage = usageByRow.get(row);
      if (!usage) {
        usage = { main: 0, branch: 0, prompt: 0, markerKeys: new Set<string>() };
        usageByRow.set(row, usage);
      }
      return usage;
    };
    const addVisible = (
      row: number | undefined | null,
      key: 'main' | 'branch' | 'prompt',
      markerKey: string
    ) => {
      if (row == null || !Number.isFinite(row)) return;
      const usage = ensureRow(row);
      if (usage.markerKeys.has(markerKey)) return;
      usage.markerKeys.add(markerKey);
      usage[key] += 1;
    };
    const addVisibleAtProjected = (
      x: number | undefined | null,
      y: number | undefined | null,
      key: 'main' | 'branch' | 'prompt',
      markerKey: string
    ) => {
      if (x == null || y == null || !Number.isFinite(x) || !Number.isFinite(y)) return;
      addVisible(rowIndexForProjectedPoint(x, y), key, markerKey);
    };

    // Main commit clumps.
    mainDirectClusters.forEach((clusterLayout) => {
      const { cluster, clusterKey } = clusterLayout;
      const expanded = expandedClumps.get(clusterKey);
      const isExpanded = expanded?.isExpanded ?? false;
      if (isExpanded) {
        cluster.entries.forEach((entry) => {
          addVisibleAtProjected(
            entry.x,
            entry.y,
            'main',
            `main:${entry.item.fullSha}`
          );
        });
      } else {
        addVisibleAtProjected(cluster.x, cluster.y, 'main', clusterKey);
      }
    });

    // Main prompt clumps.
    {
      const mainPromptMarkers = [...(branchPromptMeta[defaultBranch]?.markers ?? [])]
        .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
      const promptEntries: MarkerEntry<{ marker: typeof mainPromptMarkers[number]; index: number }>[] =
        mainPromptMarkers.map((marker, markerIndex) => {
          const markerPoint = projectPoint(
            mainX,
            timeCoordToY(timeToX(marker.timestamp))
          );
          return {
            x: markerPoint.x,
            y: markerPoint.y,
            item: { marker, index: markerIndex },
          };
        });
      const clusters = clusterByForkPoints(promptEntries, new Set<number>());
      clusters.forEach((cluster) => {
        const firstEntry = cluster.entries[0];
        const lastEntry = cluster.entries[cluster.entries.length - 1];
        const clusterKey = `main-prompt-clump-${defaultBranch}-${firstEntry.item.index}-${lastEntry.item.index}`;
        addVisibleAtProjected(cluster.x, cluster.y, 'prompt', clusterKey);
      });
    }

    // Branch commit and prompt clumps.
    activeBranches.forEach((branch) => {
      const { commitDotClusters, promptMarkerClusters, branchEndDotIndex } = getBranchRenderLayout(branch);

      commitDotClusters.forEach((cluster) => {
        const realCommitEntries = cluster.entries.filter(
          (entry) => entry.item.commit?.kind !== 'branch-created'
        );
        const renderEntries = realCommitEntries.length > 0 ? realCommitEntries : cluster.entries;
        const count = renderEntries.length;
        const firstEntry = cluster.entries[0];
        const lastEntry = cluster.entries[cluster.entries.length - 1];
        const clusterKey = `commit-clump-${branch.name}-${firstEntry.item.index}-${lastEntry.item.index}`;
        const canExpandCluster = renderEntries.length > 1;
        const expanded = canExpandCluster ? expandedClumps.get(clusterKey) : undefined;
        const isExpanded = canExpandCluster ? (expanded?.isExpanded ?? false) : false;

        if (count <= 1 || !isExpanded) {
          const preferredAnchorEntry = (() => {
            if (branchEndDotIndex != null) {
              const headEntry = cluster.entries.find(
                (entry) => entry.item.index === branchEndDotIndex
              );
              if (headEntry) return headEntry;
            }
            return realCommitEntries[realCommitEntries.length - 1] ?? lastEntry;
          })();
          addVisibleAtProjected(
            preferredAnchorEntry.x,
            preferredAnchorEntry.y,
            'branch',
            clusterKey
          );
          return;
        }

        realCommitEntries.forEach((entry) => {
          addVisibleAtProjected(
            entry.x,
            entry.y,
            'branch',
            entry.item.commit?.fullSha
              ? `branch:${branch.name}:${entry.item.commit.fullSha}`
              : `branch:${branch.name}:slot-${entry.item.index}`
          );
        });
      });

      promptMarkerClusters.forEach((cluster) => {
        const firstEntry = cluster.entries[0];
        const lastEntry = cluster.entries[cluster.entries.length - 1];
        const clusterKey = `prompt-clump-${branch.name}-${firstEntry.item.index}-${lastEntry.item.index}`;
        addVisibleAtProjected(cluster.x, cluster.y, 'prompt', clusterKey);
      });
    });

    return usageByRow;
  })();

  const gridClipBounds = {
    leftX: minXWorldForBounds,
    rightX: maxXWorldForBounds,
    topY: minYWorldForBounds,
    bottomY: maxYWorldForBounds,
  };

  return (
    <div className="relative h-full">
      <div
        ref={scrollRef}
        onMouseDown={handleCanvasMouseDown}
        className={`w-full h-full overflow-hidden branch-map-scroll relative select-none touch-none ${isPanning ? 'cursor-grabbing' : spaceHeld ? 'cursor-grab' : 'cursor-default'}`}
      >
        <div
          ref={cameraRef}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: canvasWidth,
            height: canvasHeight,
            transformOrigin: 'top left',
            willChange: 'transform',
          }}
        >
        <svg
          ref={svgRef}
          width={svgWidth}
          height={svgHeight}
          className={[
            'branch-map-svg',
            drawReady && ENABLE_TIMELINE_INTRO_ANIMATIONS ? 'timeline-ready' : '',
            animationsLocked ? 'timeline-static' : '',
          ].filter(Boolean).join(' ')}
          style={{
            '--camera-scale': String(layerCameraScale.x),
            minWidth: svgWidth,
            display: 'block',
            position: 'absolute',
            left: graphOffsetX,
            top: graphOffsetY,
            overflow: 'visible',
          } as React.CSSProperties}
        >
          <defs>
            <filter id="tick-shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#000" floodOpacity="0.08" />
            </filter>
          </defs>

          <g
            ref={zoomLayerRef}
            transform={`scale(${layerCameraScale.x} ${layerCameraScale.y})`}
            style={{
              opacity: timelineCanvasVisible ? 1 : 0,
              visibility: timelineCanvasVisible ? 'visible' : 'hidden',
              transition: `opacity ${INITIAL_REVEAL_FADE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
              pointerEvents: holdTimelineForInitialCenter ? 'none' : 'auto',
            }}
          >
            <rect
              x={0}
              y={0}
              width={svgWidth}
              height={svgHeight}
              fill={SVG_AREA_BG}
              style={{ pointerEvents: 'none' }}
            />
          <g transform={`translate(${graphContentTranslateX} ${graphContentTranslateY})`}>
          <g
            ref={contentLayerRef}
          >

          {/* ── Grid background (table-like lanes) ── */}
          {(showGuides || showRowDebugOverlay) && (
            <g style={{ pointerEvents: 'none' }}>
              {(() => {
                const rawRowInfos = gridEventPoints
                  .map((point, index) => {
                    const entityUsage = rowDebugEntityUsageByIndex.get(index) ?? {
                      mainDirect: 0,
                      mainMerge: 0,
                      branchSha: 0,
                      branchSlot: 0,
                    };
                    const visibleUsage = rowDebugVisibleUsageByIndex.get(index) ?? {
                      main: 0,
                      branch: 0,
                      prompt: 0,
                      markerKeys: new Set<string>(),
                    };
                    const entityTotal =
                      entityUsage.mainDirect + entityUsage.mainMerge + entityUsage.branchSha + entityUsage.branchSlot;
                    const visibleTotal = visibleUsage.main + visibleUsage.branch + visibleUsage.prompt;
                    const rowSources = gridRowSources.get(index) ?? [];
                    return {
                      index,
                      rawTime: point.t,
                      centerY: timeCoordToY(point.x),
                      entityUsage,
                      visibleUsage,
                      entityTotal,
                      visibleTotal,
                      rowSources,
                    };
                  })
                  .filter((info) => Number.isFinite(info.centerY));
                const rowBandsByIndex = new Map<number, { topY: number; bottomY: number }>();
                if (rawRowInfos.length > 0) {
                  for (let i = 0; i < rawRowInfos.length; i += 1) {
                    const info = rawRowInfos[i];
                    const prevCenter = rawRowInfos[i - 1]?.centerY;
                    const nextCenter = rawRowInfos[i + 1]?.centerY;
                    const defaultHalf =
                      nextCenter != null
                        ? Math.abs(info.centerY - nextCenter) / 2
                        : prevCenter != null
                          ? Math.abs(prevCenter - info.centerY) / 2
                          : GRID_EVENT_GAP / 2;
                    const boundA = prevCenter != null ? (prevCenter + info.centerY) / 2 : info.centerY + defaultHalf;
                    const boundB = nextCenter != null ? (info.centerY + nextCenter) / 2 : info.centerY - defaultHalf;
                    rowBandsByIndex.set(info.index, {
                      topY: Math.min(boundA, boundB),
                      bottomY: Math.max(boundA, boundB),
                    });
                  }
                }
                const rowStep = rawRowInfos.length > 320 ? Math.ceil(rawRowInfos.length / 260) : 1;
                const rowInfos = rawRowInfos.filter((_, idx) => idx % rowStep === 0);
                const nodeSizeWorld = (() => {
                  const rect = nodeRectSize(2);
                  // Align grid to node outer bounds (edges), not its center.
                  return {
                    halfHeight: Math.max(4, rect.height / 2),
                    halfWidth: Math.max(4, rect.width / 2),
                  };
                })();
                // Orientation projection swaps axes; adjust which half-size applies to each logical axis.
                // Horizontal mode maps logical Y → screen X (use width) and logical X → screen Y (use height).
                const halfAlongLogicalY = isHorizontal ? nodeSizeWorld.halfWidth : nodeSizeWorld.halfHeight;
                const halfAlongLogicalX = isHorizontal ? nodeSizeWorld.halfHeight : nodeSizeWorld.halfWidth;

                // Vertical guides: one per lane (main + branches).
                const laneXs = Array.from(
                  new Set<number>([
                    mainX,
                    ...Array.from(laneXByBranch.values()).filter((x) => Number.isFinite(x)),
                  ])
                ).sort((a, b) => a - b);

                const leftX = gridClipBounds?.leftX ?? Math.max(0, timelineMinX - CLIP_MARGIN_LEFT);
                const rightX = gridClipBounds?.rightX ?? Math.min(logicalSvgWidth, maxBranchVisualEndX + CLIP_MARGIN_RIGHT);
                const topY = gridClipBounds?.topY ?? Math.max(0, mainEndY - CLIP_MARGIN_TOP);
                const bottomY = gridClipBounds?.bottomY ?? Math.min(logicalSvgHeight, mainStartY + CLIP_MARGIN_BOTTOM);
                const emptyRows = rawRowInfos.filter((info) => info.visibleTotal === 0);
                const sharedRows = rawRowInfos.filter((info) => info.visibleTotal > 1);
                const usedRowCount = rawRowInfos.length - emptyRows.length;
                const summaryAnchor = projectPoint(leftX + 6, topY + 16);

                return (
                  <>
                    {showGuides && (
                      <>
                        {/* Row lines */}
                        {rowInfos.flatMap((info, idx) => {
                          const centerY = info.centerY;
                          const topYLine = centerY - halfAlongLogicalY;
                          const bottomYLine = centerY + halfAlongLogicalY;
                          const strokeOpacity = 0.33;
                          return [
                            <path
                              key={`grid-row-top-${idx}`}
                              d={`M ${pathCoord(leftX, topYLine)} L ${pathCoord(rightX, topYLine)}`}
                              fill="none"
                              stroke="#E0E0E0"
                              strokeOpacity={strokeOpacity}
                              strokeWidth={1}
                            />,
                            <path
                              key={`grid-row-bottom-${idx}`}
                              d={`M ${pathCoord(leftX, bottomYLine)} L ${pathCoord(rightX, bottomYLine)}`}
                              fill="none"
                              stroke="#E0E0E0"
                              strokeOpacity={strokeOpacity}
                              strokeWidth={1}
                            />,
                          ];
                        })}

                        {/* Column (lane) lines */}
                        {laneXs.flatMap((centerX, idx) => {
                          const leftXLine = centerX - halfAlongLogicalX;
                          const rightXLine = centerX + halfAlongLogicalX;
                          return [
                            <path
                              key={`grid-col-left-${idx}`}
                              className="non-scaling-stroke"
                              d={`M ${pathCoord(leftXLine, topY)} L ${pathCoord(leftXLine, bottomY)}`}
                              fill="none"
                              stroke="#E0E0E0"
                              strokeOpacity={0.26}
                              strokeWidth={1}
                            />,
                            <path
                              key={`grid-col-right-${idx}`}
                              className="non-scaling-stroke"
                              d={`M ${pathCoord(rightXLine, topY)} L ${pathCoord(rightXLine, bottomY)}`}
                              fill="none"
                              stroke="#E0E0E0"
                              strokeOpacity={0.26}
                              strokeWidth={1}
                            />,
                          ];
                        })}
                      </>
                    )}

                    {showRowDebugOverlay && (
                      <g>
                        {emptyRows.map((info) => {
                          const band = rowBandsByIndex.get(info.index);
                          if (!band) return null;
                          const topYLine = band.topY;
                          const bottomYLine = band.bottomY;
                          const labelPoint = projectPoint(leftX + 6, info.centerY - 2);
                          return (
                            <g key={`debug-empty-row-${info.index}`}>
                              <path
                                d={`M ${pathCoord(leftX, topYLine)} L ${pathCoord(rightX, topYLine)} L ${pathCoord(rightX, bottomYLine)} L ${pathCoord(leftX, bottomYLine)} Z`}
                                fill="#ef4444"
                                fillOpacity={0.12}
                                stroke="#dc2626"
                                strokeOpacity={0.65}
                                strokeWidth={0.8}
                              />
                              <text
                                x={labelPoint.x}
                                y={labelPoint.y}
                                fill="#991b1b"
                                fontSize={10}
                                fontWeight={600}
                                pointerEvents="none"
                              >
                                {`empty row ${info.index}${info.rowSources.length > 0 ? ` · ${info.rowSources.slice(0, 2).join(', ')}` : ''}`}
                              </text>
                            </g>
                          );
                        })}
                        {sharedRows.map((info) => {
                          const band = rowBandsByIndex.get(info.index);
                          if (!band) return null;
                          const topYLine = band.topY;
                          const bottomYLine = band.bottomY;
                          const labelPoint = projectPoint(leftX + 120, info.centerY - 2);
                          return (
                            <g key={`debug-shared-row-${info.index}`}>
                              <path
                                d={`M ${pathCoord(leftX, topYLine)} L ${pathCoord(rightX, topYLine)} L ${pathCoord(rightX, bottomYLine)} L ${pathCoord(leftX, bottomYLine)} Z`}
                                fill="#f59e0b"
                                fillOpacity={0.1}
                                stroke="#b45309"
                                strokeOpacity={0.5}
                                strokeWidth={0.7}
                              />
                              <text
                                x={labelPoint.x}
                                y={labelPoint.y}
                                fill="#78350f"
                                fontSize={10}
                                fontWeight={600}
                                pointerEvents="none"
                              >
                                {`shared row ${info.index} visible x${info.visibleTotal} entity x${info.entityTotal}`}
                              </text>
                            </g>
                          );
                        })}
                        <text
                          x={summaryAnchor.x}
                          y={summaryAnchor.y}
                          fill="#7f1d1d"
                          fontSize={10}
                          fontWeight={600}
                          pointerEvents="none"
                        >
                          {`row debug: total ${rawRowInfos.length}, used ${usedRowCount}, empty ${emptyRows.length}, shared ${sharedRows.length}`}
                        </text>
                      </g>
                    )}
                  </>
                );
              })()}
            </g>
          )}

          {/* ── Main timeline + merge nodes ── */}
          <g style={{ opacity: mainTimelineOpacity, transition: 'opacity 0.15s' }}>
            {/* Use <path> not <line>: pathLength on <line> is SVG 2 only and unreliable in WKWebView */}
            <path
              d={`M ${pathCoord(mainX, mainStartY)} L ${pathCoord(mainX, mainActiveEndY)}`}
              fill="none"
              stroke={
                checkedOutIndicatorLocal && Math.abs(checkedOutIndicatorLocal.x - mainX) < 0.5
                  ? CHECKED_OUT_SELECTION_STROKE
                  : CANVAS_NEUTRAL_GRAY
              }
              strokeWidth={1.5}
              pathLength={1}
              className={drawPathMainClass}
            />

            <g className={fadeInInfoClass} style={{ '--delay': `${MAIN_DRAW_MS}ms` } as React.CSSProperties}>
              {/* Direct commits */}
              {mainDirectClusters.map((clusterLayout) => {
                  const {
                    cluster,
                    count,
                    first,
                    last,
                    clusterKey,
                    clusterHasMainTip,
                    clusterHasCheckedOutHead,
                    clusterHasSelectedCommit,
                    memberKeys,
                  } = clusterLayout;
                  const countLabel = stackCountLabel(count);
                  const animatedAnchor = resolveAnimatedClumpAnchor(
                    clusterKey,
                    { x: cluster.x, y: cluster.y },
                    memberKeys
                  );
                  const anchorX = animatedAnchor.x;
                  const anchorY = animatedAnchor.y;

                  if (count === 1) {
                    const c = last;
                    const label = truncatePrompt(c.message, COMMIT_TOOLTIP_PREVIEW_MAX);
                    const rectSize = commitRectSize(scaledNodeSize);
                    return (
                      <rect
                        key={clusterKey}
                        className="branch-map-commit-rect"
                        x={anchorX - rectSize.width / 2 + CANVAS_NODE_STROKE_INSET}
                        y={anchorY - rectSize.height / 2 + CANVAS_NODE_STROKE_INSET}
                        width={rectSize.width - CANVAS_NODE_STROKE_WIDTH}
                        height={rectSize.height - CANVAS_NODE_STROKE_WIDTH}
                        data-base-rx={rectSize.radius}
                        rx={rectSize.radius / Math.max(layerCameraScale.x, 0.0001)}
                        style={{ cursor: 'pointer' }}
                        fill={CANVAS_NODE_FILL}
                        stroke={getNodeStrokeColor(
                          clusterKey,
                          CANVAS_NODE_STROKE,
                          clusterHasCheckedOutHead,
                          clusterHasSelectedCommit || (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                        )}
                        strokeWidth={CANVAS_NODE_STROKE_WIDTH}
                        onClick={(event) =>
                          handleCommitNodeClick(
                            event,
                            c.fullSha,
                            clusterHasMainTip ? defaultBranch : undefined,
                          )
                        }
                        onDoubleClick={(event) => event.stopPropagation()}
                        onMouseEnter={() => {
                          handleNodeHoverEnter(clusterKey);
                          setTooltip({
                            x: anchorX,
                            y: anchorY,
                            lines: [`Commit ${c.sha}`, label, `@${c.author} · ${fmtTooltipDate(c.date)}`],
                            avatarFallback: c.author?.charAt(0).toUpperCase() || '?',
                          });
                        }}
                        onMouseLeave={() => {
                          handleNodeHoverLeave();
                          setTooltip(null);
                        }}
                      />
                    );
                  }

                  const expanded = expandedClumps.get(clusterKey);
                  const isExpanded = expanded?.isExpanded ?? false;
                  const phase = expanded?.phase ?? 'collapsed';
                  const phaseStartedAtMs = expanded?.phaseStartedAt ?? Date.now();
                  const phaseProgress = phase === 'collapsed'
                    ? 0
                    : phase === 'expanded'
                      ? 1
                      : clamp01((Date.now() - phaseStartedAtMs) / clumpExpandMs);
                  const phaseEased = phaseProgress <= 0 ? 0 : phaseProgress >= 1 ? 1 : easeInOutCubic(phaseProgress);
                  const rectSize = nodeRectSize(count);
                  const localRect = commitRectSize(scaledNodeSize, 0);

                  const firstTime = new Date(first.date).getTime();
                  const lastTime = new Date(last.date).getTime();
                  const rangeLine = firstTime === lastTime
                    ? fmtTooltipDate(last.date)
                    : `${fmtTooltipDate(first.date)} → ${fmtTooltipDate(last.date)}`;
                  const latestCommitMessage = last.message
                    ? truncatePrompt(last.message, COMMIT_CLUSTER_PREVIEW_MAX)
                    : 'on main';
                  // Main-node visuals are authored in the dedicated overlay to keep branch
                  // connectors behind them; keep this base layer for interaction only.
                  const renderCollapsedVisualInBase = false;

                  return (
                    <g key={clusterKey}>
                      {/* Collapsed: draw one clump node. Expanded: animate members out. */}
                      {!isExpanded && renderCollapsedVisualInBase && (
                        <g style={{ pointerEvents: 'none' }}>
                          <rect
                            className="branch-map-commit-rect"
                            x={anchorX - rectSize.width / 2 + CANVAS_NODE_STROKE_INSET}
                            y={anchorY - rectSize.height / 2 + CANVAS_NODE_STROKE_INSET}
                            width={rectSize.width - CANVAS_NODE_STROKE_WIDTH}
                            height={rectSize.height - CANVAS_NODE_STROKE_WIDTH}
                            data-base-rx={rectSize.radius}
                            rx={rectSize.radius / Math.max(layerCameraScale.x, 0.0001)}
                            fill={CANVAS_NODE_FILL}
                            stroke={getNodeStrokeColor(
                              clusterKey,
                              CANVAS_NODE_STROKE,
                              clusterHasCheckedOutHead,
                              clusterHasSelectedCommit || (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                            )}
                            strokeWidth={CANVAS_NODE_STROKE_WIDTH}
                          />
                          <text
                            x={anchorX + rectSize.width / 2 - nodeFrameLabelRightInsetX}
                            y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                            textAnchor="end"
                            fontSize={nodeFrameLabelFontSize}
                            fill={NODE_FRAME_LABEL_COLOR}
                            fontWeight={NODE_FRAME_LABEL_WEIGHT}
                            pointerEvents="none"
                          >
                            {countLabel}
                          </text>
                        </g>
                      )}

                      {/* Collapsed-only overlay hit target (on top) so clicks never fall through. */}
                      {!isExpanded && (() => {
                        const pad = worldPx(6);
                        const hit = collapsedClumpHitRect(
                          anchorX,
                          anchorY,
                          rectSize,
                          pad
                        );
                        return (
                          <rect
                            x={hit.x}
                            y={hit.y}
                            width={hit.width}
                            height={hit.height}
                            fill="transparent"
                            style={{ cursor: 'pointer' }}
                            onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleClumpExpanded(clusterKey);
                            }}
                            onDoubleClick={(event) => {
                              event.preventDefault();
                              event.stopPropagation();
                            }}
                            onMouseEnter={() => {
                              handleNodeHoverEnter(clusterKey);
                              setTooltip({
                                x: anchorX,
                                y: anchorY,
                                lines: [`${count} commits`, latestCommitMessage, rangeLine],
                                avatarFallback: last.author?.charAt(0).toUpperCase() || '?',
                              });
                            }}
                            onMouseLeave={() => {
                              handleNodeHoverLeave();
                              setTooltip(null);
                            }}
                          />
                        );
                      })()}

                      {isExpanded && (
                        <g>
                          {cluster.entries.map((entry) => {
                            const c = entry.item;
                            const label = truncatePrompt(c.message, COMMIT_TOOLTIP_PREVIEW_MAX);
                            const from = { x: anchorX, y: anchorY };
                            const to = { x: entry.x, y: entry.y };
                            const at = phase === 'collapsing'
                              ? { x: to.x + (from.x - to.x) * phaseEased, y: to.y + (from.y - to.y) * phaseEased }
                              : phase === 'expanding'
                                ? { x: from.x + (to.x - from.x) * phaseEased, y: from.y + (to.y - from.y) * phaseEased }
                                : phase === 'collapsed'
                                  ? from
                                  : to;
                            const commitKey = `direct:${c.fullSha}`;
                            const isCheckedOutCommit =
                              checkedOutHeadSha != null && shaMatchesGitRef(c.fullSha, checkedOutHeadSha);
                            const memberOpacity = phase === 'collapsing'
                              ? 1 - 0.3 * phaseEased
                              : phase === 'expanding'
                                ? 0.7 + 0.3 * phaseEased
                                : phase === 'collapsed'
                                  ? 0.7
                                  : 1;
                            return (
                              <g
                                key={commitKey}
                                transform={`translate(${at.x} ${at.y})`}
                                style={{ ...clumpAnimStyle, pointerEvents: phase === 'expanded' ? 'auto' : 'none' }}
                                opacity={memberOpacity}
                              >
                                <rect
                                  className="branch-map-commit-rect"
                                  x={-localRect.width / 2 + CANVAS_NODE_STROKE_INSET}
                                  y={-localRect.height / 2 + CANVAS_NODE_STROKE_INSET}
                                  width={localRect.width - CANVAS_NODE_STROKE_WIDTH}
                                  height={localRect.height - CANVAS_NODE_STROKE_WIDTH}
                                  data-base-rx={localRect.radius}
                                  rx={localRect.radius / Math.max(layerCameraScale.x, 0.0001)}
                                  fill={CANVAS_NODE_FILL}
                                  stroke={getNodeStrokeColor(
                                    commitKey,
                                    CANVAS_NODE_STROKE,
                                    isCheckedOutCommit,
                                    selectedCommitShaSet.has(c.fullSha) ||
                                      (clusterHasMainTip &&
                                        selectedBranchNameSet.has(defaultBranch) &&
                                        c.fullSha === latestMainCommitSha),
                                  )}
                                  strokeWidth={CANVAS_NODE_STROKE_WIDTH}
                                  style={{ cursor: 'pointer' }}
                                  onClick={(event) =>
                                    handleCommitNodeClick(
                                      event,
                                      c.fullSha,
                                      clusterHasMainTip && c.fullSha === latestMainCommitSha
                                        ? defaultBranch
                                        : undefined,
                                    )
                                  }
                                  onDoubleClick={(event) => event.stopPropagation()}
                                  onMouseEnter={() => {
                                    handleNodeHoverEnter(commitKey);
                                    setTooltip({
                                      x: entry.x,
                                      y: entry.y,
                                      lines: [`Commit ${c.sha}`, label, `@${c.author} · ${fmtTooltipDate(c.date)}`],
                                      avatarFallback: c.author?.charAt(0).toUpperCase() || '?',
                                    });
                                  }}
                                  onMouseLeave={() => {
                                    handleNodeHoverLeave();
                                    setTooltip(null);
                                  }}
                                />
                              </g>
                            );
                          })}
                        </g>
                      )}
                    </g>
                  );
                })}
              {(() => {
                const mainPromptMarkers = [...(branchPromptMeta[defaultBranch]?.markers ?? [])]
                  .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
                const promptEntries: MarkerEntry<{ marker: typeof mainPromptMarkers[number]; index: number }>[] =
                  mainPromptMarkers.map((marker, markerIndex) => {
                    const markerPoint = projectPoint(
                      mainX,
                      timeCoordToY(timeToX(marker.timestamp))
                    );
                    return {
                      x: markerPoint.x,
                      y: markerPoint.y,
                      item: { marker, index: markerIndex },
                    };
                  });
                const clusters = clusterByForkPoints(promptEntries, new Set<number>());
                return clusters.map((cluster) => {
                  const count = cluster.entries.length;
                  const firstEntry = cluster.entries[0];
                  const lastEntry = cluster.entries[count - 1];
                  const clusterKey = `main-prompt-clump-${defaultBranch}-${firstEntry.item.index}-${lastEntry.item.index}`;
                  const memberKeys = cluster.entries.map((entry) => `prompt:${defaultBranch}:slot-${entry.item.index}`);
                  const animatedAnchor = resolveAnimatedClumpAnchor(
                    clusterKey,
                    { x: cluster.x, y: cluster.y },
                    memberKeys
                  );
                  const anchorX = animatedAnchor.x;
                  const anchorY = animatedAnchor.y;
                  const markerSize =
                    scaledNodeSize;
                  const markerPath = promptMarkerPath(anchorX, anchorY, markerSize);
                  const hitSize = scaledHoverHitSize;
                  const markerStrokeWidth = 1.2;
                  const label = count > 1 ? clumpCountLabel(count) : '';
                  const labelFontSize = nodeLabelFontSize(scaledNodeSize, count);

                  if (count === 1) {
                    const marker = lastEntry.item.marker;
                    return (
                      <g key={clusterKey}>
                        <g style={{ pointerEvents: 'none' }}>
                          <path
                            d={markerPath}
                            fill="var(--background)"
                            stroke="#14b8a6"
                            strokeWidth={markerStrokeWidth}
                            strokeLinejoin="round"
                          />
                        </g>
                        <rect
                          x={anchorX - hitSize / 2}
                          y={anchorY - hitSize / 2}
                          width={hitSize}
                          height={hitSize}
                          fill="transparent"
                          style={{ cursor: 'pointer' }}
                          onMouseEnter={() =>
                            setTooltip({
                              x: anchorX,
                              y: anchorY,
                              lines: [
                                'Prompt',
                                truncatePrompt(marker.prompt, PROMPT_TOOLTIP_PREVIEW_MAX),
                                `${marker.agent} · ${fmtTooltipDate(marker.timestamp)}`,
                              ],
                            })
                          }
                          onMouseLeave={() => setTooltip(null)}
                        />
                      </g>
                    );
                  }

                  const firstDate = firstEntry.item.marker.timestamp;
                  const lastDate = lastEntry.item.marker.timestamp;
                  const dateRangeLabel = new Date(firstDate).getTime() === new Date(lastDate).getTime()
                    ? fmtTooltipDate(lastDate)
                    : `${fmtTooltipDate(firstDate)} → ${fmtTooltipDate(lastDate)}`;
                  const latestPrompt = truncatePrompt(lastEntry.item.marker.prompt, PROMPT_CLUSTER_PREVIEW_MAX);
                  return (
                    <g key={clusterKey}>
                      <g style={{ pointerEvents: 'none' }}>
                        <path
                          d={markerPath}
                          fill="var(--background)"
                          stroke="#14b8a6"
                          strokeWidth={markerStrokeWidth}
                          strokeLinejoin="round"
                        />
                        <text
                          x={anchorX}
                          y={anchorY}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="#14b8a6"
                          fontWeight={700}
                          style={{
                            fontVariantNumeric: 'tabular-nums',
                            fontSize: `${labelFontSize / Math.max(layerCameraScale.x, 0.0001)}px`,
                          }}
                          data-base-font-size={labelFontSize}
                        >
                          {label}
                        </text>
                      </g>
                      <rect
                        x={anchorX - hitSize / 2}
                        y={anchorY - hitSize / 2}
                        width={hitSize}
                        height={hitSize}
                        fill="transparent"
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={() =>
                          setTooltip({
                            x: anchorX,
                            y: anchorY,
                            lines: [`${count} prompts`, latestPrompt, dateRangeLabel],
                          })
                        }
                        onMouseLeave={() => setTooltip(null)}
                      />
                    </g>
                  );
                });
              })()}

              {showMergeTicks && (() => {
                // Progressive label culling as zoom decreases.
                // Step 1: decide which content lines to show based on node spacing.
                //   ≥130px → full (PR#, title, date)
                //   ≥80px  → medium (PR#, date — no title)
                //   ≥40px  → minimal (PR# only)
                //   <40px  → no labels at all (hover tooltip still works)
                // Step 2: min gap between shown labels = width of the widest line
                //   being rendered, so labels never overlap their neighbours.
                const labelSpacing = averageMergeGap;
                const showTitle = labelSpacing >= 130;
                const showDate = labelSpacing >= 80;
                const anyLabel = labelSpacing >= 40;
                const minLabelGap = showTitle ? 130 : showDate ? 100 : anyLabel ? 55 : Infinity;

                let lastLabelY = Number.POSITIVE_INFINITY;
                return sortedNodes.map((m) => {
                  const timeCoordX = nodeXByFullSha.get(m.fullSha) ?? timeToX(m.date);
                  const y = timeCoordToY(timeCoordX);
                  const showLabel = anyLabel && lastLabelY - y >= minLabelGap;
                  if (showLabel) lastLabelY = y;
                  const label = m.prNumber ? `PR #${m.prNumber}` : m.sha.slice(0, 7);
                  const isHovered = hoveredMergeNode?.node.fullSha === m.fullSha;
                  const hitSize = scaledHoverHitSize;
                  return (
                    <g key={m.fullSha}>
                      {/* Visible tick — pointer-events off so hit rect handles hover */}
                      <circle
                       
                        className={undefined}
                        cx={mainX}
                        cy={y}
                        r={scaledNodeSize / 2}
                        fill={isHovered ? CANVAS_NEUTRAL_GRAY_HOVER : CANVAS_NEUTRAL_GRAY}
                        style={{ pointerEvents: 'none', transition: 'fill 0.1s' }}
                      />
                      {/* Transparent hit area for hover — rendered on top */}
                      <rect
                       
                        x={mainX - hitSize / 2}
                        y={y - hitSize / 2}
                        width={hitSize}
                        height={hitSize}
                        fill="transparent"
                        style={{ cursor: 'default' }}
                        onMouseEnter={() => setHoveredMergeNode({ y, node: m })}
                        onMouseLeave={() => setHoveredMergeNode(null)}
                      />
                      {showLabel && (
                        <>
                          <text x={mainX + 14} y={y + 4} textAnchor="start" fontSize={12} fill="#57534e">
                            {label}
                          </text>
                          {showTitle && (
                            <text x={mainX + 14} y={y + 16} textAnchor="start" fontSize={10} fill="#78716c">
                              {(m.prTitle ?? '').slice(0, 22) + ((m.prTitle?.length ?? 0) > 22 ? '…' : '')}
                            </text>
                          )}
                          {showDate && (
                            <text x={mainX + 14} y={showTitle ? y + 28 : y + 16} textAnchor="start" fontSize={10} fill="#78716c">
                              {fmtLabelDate(m.date)}
                            </text>
                          )}
                        </>
                      )}
                    </g>
                  );
                });
              })()}
            </g>
          </g>

          {/* ── Merged PR overlays (optional secondary context) ── */}
          {showMergedPROverlays && mergedPRs.map((pr, idx) => {
            const forkY = timeCoordToY(timeToX(pr.createdAt));
            const mergeY = timeCoordToY(timeToX(pr.mergedAt));
            const lane = idx % MERGED_LANES;
            const arcX = mainX - MERGED_LANE_HEIGHT * (lane + 1);
            const shas = prCommits.get(pr.number);
            const commitCount = Math.min(shas?.length ?? pr.commitCount ?? 1, 12);
            const effectiveMergeY = Math.min(mergeY, forkY - cornerR * 2 - 20);

            const isHovered = hoveredPR === pr.number;
            const isDimmed = (hoveredPR !== null && !isHovered) || hoveredBranch !== null;
            const isFocusedPR = focusedErrorBranch?.name === pr.branchName;
            const opacity = isFocusedPR ? 1 : isDimmed ? 0.1 : isHovered ? 0.85 : 0.38;
            const strokeColor = isHovered ? CANVAS_NEUTRAL_GRAY_HOVER : CANVAS_NEUTRAL_GRAY;
            const strokeWidth = isHovered ? 1.6 : 1.2;

            const arcPath = [
              `M ${mainX} ${forkY}`,
              `L ${arcX + cornerR} ${forkY}`,
              `Q ${arcX} ${forkY} ${arcX} ${forkY - cornerR}`,
              `L ${arcX} ${effectiveMergeY + cornerR}`,
              `Q ${arcX} ${effectiveMergeY} ${arcX + cornerR} ${effectiveMergeY}`,
              `L ${mainX} ${effectiveMergeY}`,
            ].join(' ');

            const midY = (forkY + effectiveMergeY) / 2;
            const arcSpan = forkY - effectiveMergeY - cornerR * 2;
            const commitYs = Array.from({ length: commitCount }, (_, i) =>
              forkY - cornerR - (arcSpan * (i + 1)) / (commitCount + 1)
            );

            const prDelay = prDelayMs.get(pr.number) ?? 0;

            // Focused error branches are now only "stale" (no dedicated conflict indicator).
            const focusedPRColor = '#d97706';
            return (
              <g
                key={pr.number}
                opacity={opacity}
                style={{ transition: 'opacity 0.15s' }}
                onMouseEnter={() => setHoveredPR(pr.number)}
                onMouseLeave={() => { setHoveredPR(null); setHoveredPRCommit(null); }}
              >
                {/* Wide invisible stroke for hover */}
                <path d={arcPath} fill="none" stroke="transparent" strokeWidth={20} />
                {/* Visible arc — draws in */}
                <path
                  d={arcPath}
                  fill="none"
                  stroke={isFocusedPR ? focusedPRColor : strokeColor}
                  strokeWidth={(focusedErrorBranch?.name === pr.branchName ? 2 : strokeWidth)}
                  pathLength={1}
                  className={drawPathArcClass}
                  style={{ pointerEvents: 'none', '--delay': `${prDelay}ms` } as React.CSSProperties}
                />

                {/* Arc info — fades in as arc draws */}
                <g className={fadeInInfoClass} style={{ '--delay': `${prDelay + INFO_OFFSET}ms` } as React.CSSProperties}>
                  <circle
                   
                    className={undefined}
                    cx={mainX}
                    cy={forkY}
                    r={scaledNodeSize / 2}
                    fill="#fafaf9"
                    stroke={isFocusedPR ? focusedPRColor : strokeColor}
                    strokeWidth={(isFocusedPR ? 1.5 : 1)}
                    style={{ pointerEvents: 'none' }}
                  />
                  <circle
                   
                    className={undefined}
                    cx={mainX}
                    cy={effectiveMergeY}
                    r={scaledNodeSize / 2}
                    fill="#fafaf9"
                    stroke={isFocusedPR ? focusedPRColor : strokeColor}
                    strokeWidth={(isFocusedPR ? 1.5 : 1)}
                    style={{ pointerEvents: 'none' }}
                  />

                  {/* Commit ticks — interactive with SHA tooltips */}
                  {commitYs.map((cy, ci) => {
                    const isTickHovered = isHovered &&
                      hoveredPRCommit?.pr.number === pr.number &&
                      hoveredPRCommit?.commitIdx === ci;
                    const tickSize = (isTickHovered ? NODE_SIZE + 3 : NODE_SIZE - 2);
                    const hitSize = scaledHoverHitSize;
                    return (
                      <g key={ci}>
                        {/* Visible tick */}
                        <circle
                         
                          className={undefined}
                          cx={arcX}
                          cy={cy}
                          r={tickSize / 2}
                          fill={isFocusedPR ? focusedPRColor : isHovered ? CANVAS_NEUTRAL_GRAY_HOVER : CANVAS_NEUTRAL_GRAY}
                          style={{ pointerEvents: 'none', transition: 'fill 0.1s ease' }}
                        />
                        {/* Invisible hit area */}
                        <rect
                         
                          x={arcX - hitSize / 2}
                          y={cy - hitSize / 2}
                          width={hitSize}
                          height={hitSize}
                          fill="transparent"
                          style={{ cursor: 'crosshair' }}
                          onMouseEnter={(e) => {
                            e.stopPropagation();
                            setHoveredPRCommit({ x: arcX, arcY: cy, pr, commitIdx: ci, total: commitCount });
                          }}
                          onMouseLeave={(e) => {
                            e.stopPropagation();
                            setHoveredPRCommit(null);
                          }}
                        />
                      </g>
                    );
                  })}

                  {/* Author avatar */}
                  {pr.authorAvatar ? (
                    <image
                     
                      className={undefined}
                      href={pr.authorAvatar}
                      x={arcX - 9}
                      y={midY - 10}
                      width={18}
                      height={18}
                      style={{ clipPath: 'circle(9px at 9px 9px)' }}
                    />
                  ) : (
                    <circle cx={arcX} cy={midY} r={8} fill={CANVAS_NEUTRAL_GRAY} />
                  )}
                  <text
                    className={undefined}
                    x={arcX + 12}
                    y={midY + 4}
                    fontSize={12}
                    fill={CANVAS_NEUTRAL_TEXT}
                    style={{ transformOrigin: `${arcX + 12}px ${midY + 4}px` }}
                  >
                    {pr.branchName.length > 20 ? pr.branchName.slice(0, 20) + '…' : pr.branchName}
                  </text>
                </g>
              </g>
            );
          })}

          {/* ── Active branches ── */}
          <g style={{ opacity: hoveredPR !== null ? 0.2 : 1, transition: 'opacity 0.15s' }}>
            {(() => {
              const branchUsesLocalGrayStroke = (branch: Branch): boolean => {
                return getBranchRenderLayout(branch).fullBranchShouldUseLocalGray;
              };

              const branchStrokeLayerPriority = (branch: Branch): number => {
                if (selectedBranchNameSet.has(branch.name)) return 5;
                if (hoveredBranch === branch.name || isNodeLineageHovered(branch.name)) return 4;
                if (isSelectedLaneBranch(branch)) return 3;
                if (focusedErrorBranch?.name === branch.name) return 2;
                return branchUsesLocalGrayStroke(branch) ? 0 : 1;
              };

              const orderedActiveBranches = [...activeBranches].sort(
                (a, b) => branchStrokeLayerPriority(a) - branchStrokeLayerPriority(b)
              );

              return orderedActiveBranches.map((b) => {
                const {
                  lanePosX,
                  branchLineTipY,
                  mergeBackPath,
                  curvePath,
                  hitCurvePath,
                  hasPreviewData,
                  uniqueAheadCount,
                  branchEndDotIndex,
                  localCommitDotIndices,
                  fullBranchShouldUseLocalGray,
                  localSegmentStartY,
                  commitDotClusters,
                  promptMarkerClusters,
                  branchHasCheckedOutHead,
                  brDelay,
                  showClockIcon,
                  clockPoint,
                } = getBranchRenderLayout(b);
                const isHovered = hoveredBranch === b.name || isNodeLineageHovered(b.name);
                const isSelectedForMerge = selectedBranchNameSet.has(b.name);
                const isFocusedError = focusedErrorBranch?.name === b.name;
                const focusedErrorColor = '#d97706';
                const neutralColor = CANVAS_NEUTRAL_GRAY;
                const color = isFocusedError ? focusedErrorColor : neutralColor;
                const strokeWidth = isFocusedError || isSelectedForMerge ? 2 : 1.5;
                const defaultStrokeColor =
                  isSelectedForMerge
                    ? USER_SELECTION_STROKE
                    : isHovered
                      ? CANVAS_NEUTRAL_GRAY_HOVER
                      : color;
                const strokeColor =
                  isSelectedForMerge
                    ? USER_SELECTION_STROKE
                    : !isFocusedError && branchHasCheckedOutHead
                      ? CHECKED_OUT_SELECTION_STROKE
                      : (
                        fullBranchShouldUseLocalGray && !isFocusedError && !isHovered
                          ? LOCAL_UNPUSHED_GRAY
                          : defaultStrokeColor
                      );
                const unpushedStrokeWidth = strokeWidth + UNPUSHED_LANE_STROKE_VISUAL_COMP;
                const unpushedLaneDasharray = `${Math.max(1, unpushedStrokeWidth)} ${Math.max(2, unpushedStrokeWidth * 1.8)}`;
                const isEmptyBranch = uniqueAheadCount <= 0;
                const branchGroupOpacity = 1;

              return (
                <g
                  key={b.name}
                  onMouseEnter={() => setHoveredBranch(b.name)}
                  onMouseLeave={() => setHoveredBranch(null)}
                  style={{ opacity: branchGroupOpacity, transition: 'opacity 0.15s' }}
                >
                  {/* Invisible wide hit target to make hover/click easier on thin SVG strokes */}
                  <path
                    d={hitCurvePath}
                    fill="none"
                    stroke={DEBUG_SHOW_BRANCH_HIT_AREAS ? DEBUG_BRANCH_HIT_AREA_COLOR : 'transparent'}
                    strokeOpacity={DEBUG_SHOW_BRANCH_HIT_AREAS ? DEBUG_BRANCH_HIT_AREA_OPACITY : undefined}
                    strokeWidth={branchHitStrokeWidth}
                    strokeLinecap="butt"
                    style={{
                      pointerEvents: branchLaneHitPointerEvents,
                      cursor: isEmptyBranch ? 'pointer' : undefined,
                    }}
                    onClick={(event) => {
                      if (!isEmptyBranch) return;
                      handleCommitNodeClick(event, b.headSha, b.name);
                    }}
                    onDoubleClick={(event) => event.stopPropagation()}
                  />

                  {/* Branch path — draws in. key="arc" keeps the DOM node stable so the
                      CSS animation is never restarted when sibling elements change. */}
                  <path
                    key="arc"
                    d={curvePath}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={fullBranchShouldUseLocalGray ? unpushedStrokeWidth : strokeWidth}
                    strokeDasharray={fullBranchShouldUseLocalGray ? unpushedLaneDasharray : undefined}
                    strokeLinecap={fullBranchShouldUseLocalGray ? 'round' : undefined}
                    pathLength={fullBranchShouldUseLocalGray ? undefined : 1}
                    className={drawPathArcClass}
                    style={{
                      '--delay': `${brDelay}ms`,
                      transition: 'stroke 0.12s ease',
                    } as React.CSSProperties}
                  />
                  {mergeBackPath && (
                    <path
                      d={mergeBackPath}
                      fill="none"
                      stroke={strokeColor}
                      strokeWidth={fullBranchShouldUseLocalGray ? unpushedStrokeWidth : strokeWidth}
                      strokeDasharray={fullBranchShouldUseLocalGray ? unpushedLaneDasharray : undefined}
                      strokeLinecap={fullBranchShouldUseLocalGray ? 'round' : undefined}
                      className={drawPathArcClass}
                      style={{
                        '--delay': `${brDelay}ms`,
                        transition: 'stroke 0.12s ease',
                      } as React.CSSProperties}
                    />
                  )}
                  {!fullBranchShouldUseLocalGray && localSegmentStartY != null && (
                    <path
                      d={`M ${pathCoord(lanePosX, localSegmentStartY)} L ${pathCoord(lanePosX, branchLineTipY)}`}
                      fill="none"
                      stroke={
                        isSelectedForMerge
                          ? USER_SELECTION_STROKE
                          : !isFocusedError && branchHasCheckedOutHead
                            ? CHECKED_OUT_SELECTION_STROKE
                            : isHovered
                              ? CANVAS_NEUTRAL_GRAY_HOVER
                              : LOCAL_UNPUSHED_GRAY
                      }
                      strokeWidth={unpushedStrokeWidth}
                      strokeDasharray={unpushedLaneDasharray}
                      strokeLinecap="round"
                      className={drawPathArcClass}
                      style={{
                        '--delay': `${brDelay}ms`,
                      } as React.CSSProperties}
                    />
                  )}

                  {/* Branch info — fades in as arc draws */}
                  <g className={fadeInInfoClass} style={{ '--delay': `${brDelay + INFO_OFFSET}ms` } as React.CSSProperties}>
                    {/* Prompt marker visuals render below commit nodes so branch dots stay on top. */}
                    {promptMarkerClusters.map((cluster) => {
                      const count = cluster.entries.length;
                      const firstEntry = cluster.entries[0];
                      const lastEntry = cluster.entries[count - 1];
                      const clusterKey = `prompt-clump-${b.name}-${firstEntry.item.index}-${lastEntry.item.index}`;
                      const memberKeys = cluster.entries.map((entry) => `prompt:${b.name}:slot-${entry.item.index}`);
                      const animatedAnchor = resolveAnimatedClumpAnchor(
                        clusterKey,
                        { x: cluster.x, y: cluster.y },
                        memberKeys
                      );
                      const anchorX = animatedAnchor.x;
                      const anchorY = animatedAnchor.y;
                      const markerSize =
                        scaledNodeSize;
                      const markerPath = promptMarkerPath(anchorX, anchorY, markerSize);
                      const markerStrokeWidth = 1.2;
                      const label = count > 1 ? clumpCountLabel(count) : '';
                      const labelFontSize = nodeLabelFontSize(scaledNodeSize, count);

                      return (
                        <g key={`${clusterKey}-visual`} style={{ pointerEvents: 'none' }}>
                          <path
                            d={markerPath}
                            fill="var(--background)"
                            stroke="#14b8a6"
                            strokeWidth={markerStrokeWidth}
                            strokeLinejoin="round"
                          />
                          {count > 1 && (
                            <text
                              x={anchorX}
                              y={anchorY}
                              textAnchor="middle"
                              dominantBaseline="middle"
                              fill="#14b8a6"
                              fontWeight={700}
                              style={{
                                fontVariantNumeric: 'tabular-nums',
                                fontSize: `${labelFontSize / Math.max(layerCameraScale.x, 0.0001)}px`,
                              }}
                              data-base-font-size={labelFontSize}
                            >
                              {label}
                            </text>
                          )}
                        </g>
                      );
                    })}

                    {/* Commit markers along branch */}
                    {commitDotClusters.map((cluster) => {
                      const realCommitEntries = cluster.entries.filter(
                        (entry) => entry.item.commit?.kind !== 'branch-created'
                      );
                      const renderEntries = realCommitEntries.length > 0 ? realCommitEntries : cluster.entries;
                      const count = renderEntries.length;
                      const firstEntry = cluster.entries[0];
                      const lastEntry = cluster.entries[cluster.entries.length - 1];
                      const clusterKey = `commit-clump-${b.name}-${firstEntry.item.index}-${lastEntry.item.index}`;
                      const memberKeys = cluster.entries.map((entry) => {
                        const commitSha = entry.item.commit?.fullSha;
                        return commitSha
                          ? `branch-commit:${b.name}:${commitSha}`
                          : `branch-commit:${b.name}:slot-${entry.item.index}`;
                      });
                      const preferredAnchorEntry = (() => {
                        if (branchEndDotIndex != null) {
                          const headEntry = cluster.entries.find(
                            (entry) => entry.item.index === branchEndDotIndex
                          );
                          if (headEntry) return headEntry;
                        }
                        return realCommitEntries[realCommitEntries.length - 1] ?? lastEntry;
                      })();
                      const animatedAnchor = resolveAnimatedClumpAnchor(
                        clusterKey,
                        { x: preferredAnchorEntry.x, y: preferredAnchorEntry.y },
                        memberKeys
                      );
                      const anchorX = animatedAnchor.x;
                      const anchorY = animatedAnchor.y;
                    const dotShouldUseCanvasFill =
                      fullBranchShouldUseLocalGray ||
                      cluster.entries.every((entry) => localCommitDotIndices.has(entry.item.index));
                    const dotFill = dotShouldUseCanvasFill ? CANVAS_UNPUSHED_NODE_FILL : CANVAS_NODE_FILL;
                    const dotStrokeWidth = CANVAS_NODE_STROKE_WIDTH;
                    const dotStrokeInset = dotStrokeWidth / 2;
                    const dotStrokeDasharray = dotShouldUseCanvasFill ? '3 3' : undefined;
                    const clusterHasBranchTip =
                      branchEndDotIndex != null &&
                      cluster.entries.some((entry) => entry.item.index === branchEndDotIndex);
                    const clusterHasCheckedOutHead =
                      checkedOutHeadSha != null &&
                      cluster.entries.some((entry) => {
                        const idx = entry.item.index;
                        const commit = entry.item.commit;
                        if (hasPreviewData && commit && commit.kind !== 'branch-created') {
                          return (
                            shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                            shaMatchesGitRef(commit.sha, checkedOutHeadSha)
                          );
                        }
                        if (!hasPreviewData && checkedOutBranchName === b.name && branchEndDotIndex === idx) {
                          return shaMatchesGitRef(b.headSha, checkedOutHeadSha);
                        }
                        return false;
                      });
                    const clusterHasSelectedCommit =
                      cluster.entries.some((entry) => {
                        const commitSha = entry.item.commit?.fullSha;
                        return !!commitSha && selectedCommitShaSet.has(commitSha);
                      });
                    const clusterHasSelectedHead = clusterHasBranchTip && selectedBranchNameSet.has(b.name);

                    if (count <= 1) {
                      const commitEntry = renderEntries[0] ?? lastEntry;
                      const commit = commitEntry.item.commit;
                      const isNonCommitPlaceholder = !commit && uniqueAheadCount <= 0;
                      const targetCommitSha = commit?.fullSha ?? b.headSha;
                      const tooltipAuthor = commit?.author ?? b.lastCommitAuthor;
                      const tooltipDate = commit?.date ?? b.lastCommitDate;
                      const tooltipSha = commit?.sha ?? b.headSha?.slice(0, 7) ?? '-------';
                        const tooltipMessage = commit?.message;
                        const showBranchAvatar = !!(
                          commit &&
                          b.lastCommitAuthorAvatar &&
                          commit.author === b.lastCommitAuthor
                        );
                        const rectSize = commitRectSize(scaledNodeSize);
                        const isGhostRect = isNonCommitPlaceholder;
                        const ghostRectStrokeWidth = unpushedStrokeWidth;
                        const ghostRectDasharray = unpushedLaneDasharray;
                        return (
                          <g key={clusterKey}>
                            <rect
                              className="branch-map-commit-rect"
                              x={anchorX - rectSize.width / 2 + dotStrokeInset}
                              y={anchorY - rectSize.height / 2 + dotStrokeInset}
                              width={rectSize.width - dotStrokeWidth}
                              height={rectSize.height - dotStrokeWidth}
                              data-base-rx={rectSize.radius}
                              rx={rectSize.radius / Math.max(layerCameraScale.x, 0.0001)}
                              style={{ cursor: 'pointer' }}
                              fill={dotFill}
                              stroke={
                                getNodeStrokeColor(
                                  clusterKey,
                                  isGhostRect ? LOCAL_UNPUSHED_GRAY : CANVAS_NODE_STROKE,
                                  clusterHasCheckedOutHead,
                                  clusterHasSelectedCommit || clusterHasSelectedHead,
                                )
                              }
                              strokeWidth={
                                isGhostRect
                                  ? ghostRectStrokeWidth
                                  : dotStrokeWidth
                              }
                              strokeDasharray={isGhostRect ? ghostRectDasharray : dotStrokeDasharray}
                              strokeLinecap={isGhostRect ? 'round' : undefined}
                              strokeLinejoin={isGhostRect ? 'round' : undefined}
                              onClick={(event) => {
                                if (isNonCommitPlaceholder) {
                                  handleCommitNodeClick(event, b.headSha, b.name);
                                  return;
                                }
                                handleCommitNodeClick(
                                  event,
                                  targetCommitSha,
                                  clusterHasBranchTip ? b.name : undefined,
                                );
                              }}
                              onDoubleClick={(event) => event.stopPropagation()}
                              onMouseEnter={() => {
                                handleNodeHoverEnter(clusterKey, b.name);
                                setTooltip({
                                  x: anchorX,
                                  y: anchorY,
                                  lines: isNonCommitPlaceholder
                                    ? [
                                      `No unique commits`,
                                      `Branch ${b.name}`,
                                      `Click to check out this branch`,
                                    ]
                                    : [
                                      `Commit ${tooltipSha}`,
                                      tooltipMessage
                                        ? truncatePrompt(tooltipMessage, COMMIT_TOOLTIP_PREVIEW_MAX)
                                        : `@${tooltipAuthor}`,
                                      `@${tooltipAuthor} · ${fmtTooltipDate(tooltipDate)}`,
                                    ],
                                  avatarUrl:
                                    !isNonCommitPlaceholder && showBranchAvatar
                                      ? b.lastCommitAuthorAvatar
                                      : undefined,
                                  avatarFallback:
                                    !isNonCommitPlaceholder
                                      ? (tooltipAuthor?.charAt(0).toUpperCase() || '?')
                                      : undefined,
                                });
                              }}
                              onMouseLeave={() => {
                                handleNodeHoverLeave();
                                setTooltip(null);
                              }}
                            />
                          </g>
                        );
                      }

                      const firstRealEntry = renderEntries[0] ?? firstEntry;
                      const lastRealEntry = renderEntries[renderEntries.length - 1] ?? lastEntry;
                      const firstDate = firstRealEntry.item.commit?.date ?? b.lastCommitDate;
                      const lastDate = lastRealEntry.item.commit?.date ?? b.lastCommitDate;
                      const dateRangeLabel = new Date(firstDate).getTime() === new Date(lastDate).getTime()
                        ? fmtTooltipDate(lastDate)
                        : `${fmtTooltipDate(firstDate)} → ${fmtTooltipDate(lastDate)}`;
                      const latestAuthor = lastRealEntry.item.commit?.author ?? b.lastCommitAuthor;
                      const latestCommitMessage = lastRealEntry.item.commit?.message
                        ? truncatePrompt(lastRealEntry.item.commit.message, COMMIT_CLUSTER_PREVIEW_MAX)
                        : `on ${b.name}`;

                      const canExpandCluster = renderEntries.length > 1;
                      const expanded = canExpandCluster ? expandedClumps.get(clusterKey) : undefined;
                      const isExpanded = canExpandCluster ? (expanded?.isExpanded ?? false) : false;
                      const phase = expanded?.phase ?? 'collapsed';
                      const phaseStartedAtMs = expanded?.phaseStartedAt ?? Date.now();
                      const phaseProgress = phase === 'collapsed'
                        ? 0
                        : phase === 'expanded'
                          ? 1
                          : clamp01((Date.now() - phaseStartedAtMs) / clumpExpandMs);
                      const phaseEased = phaseProgress <= 0 ? 0 : phaseProgress >= 1 ? 1 : easeInOutCubic(phaseProgress);
                      const rectSize = nodeRectSize(count);
                      // Expanded members represent single commits in grid layout.
                      const localRect = commitRectSize(scaledNodeSize, 0);

                      return (
                        <g key={clusterKey}>
                          {!isExpanded && (
                            <g style={{ pointerEvents: 'none' }}>
                              <rect
                                className="branch-map-commit-rect"
                                x={anchorX - rectSize.width / 2 + dotStrokeInset}
                                y={anchorY - rectSize.height / 2 + dotStrokeInset}
                                width={rectSize.width - dotStrokeWidth}
                                height={rectSize.height - dotStrokeWidth}
                                data-base-rx={rectSize.radius}
                                rx={rectSize.radius / Math.max(layerCameraScale.x, 0.0001)}
                                fill={dotFill}
                                stroke={getNodeStrokeColor(
                                  clusterKey,
                                  CANVAS_NODE_STROKE,
                                  clusterHasCheckedOutHead,
                                  clusterHasSelectedCommit || clusterHasSelectedHead,
                                )}
                                strokeWidth={dotStrokeWidth}
                                strokeDasharray={dotStrokeDasharray}
                              />
                            </g>
                          )}

                          {/* Collapsed-only overlay hit target (on top) so clicks never fall through. */}
                          {!isExpanded && (() => {
                            const pad = worldPx(6);
                            const hit = collapsedClumpHitRect(
                              anchorX,
                              anchorY,
                              rectSize,
                              pad
                            );
                            return (
                              <rect
                                x={hit.x}
                                y={hit.y}
                                width={hit.width}
                                height={hit.height}
                                fill="transparent"
                                style={{ cursor: canExpandCluster ? 'pointer' : 'default' }}
                                onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                                onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  if (canExpandCluster) toggleClumpExpanded(clusterKey);
                                }}
                                onDoubleClick={(event) => {
                                  event.preventDefault();
                                  event.stopPropagation();
                                }}
                                onMouseEnter={() => {
                                  handleNodeHoverEnter(clusterKey, b.name);
                                  setTooltip({
                                    x: anchorX,
                                    y: anchorY,
                                    lines: [`${count} commits`, latestCommitMessage, dateRangeLabel],
                                    avatarFallback: latestAuthor?.charAt(0).toUpperCase() || '?',
                                  });
                                }}
                                onMouseLeave={() => {
                                  handleNodeHoverLeave();
                                  setTooltip(null);
                                }}
                              />
                            );
                          })()}

                          {isExpanded && (
                            <g>
                              {renderEntries.map((entry) => {
                                const commit = entry.item.commit;
                                if (!commit?.fullSha) return null;
                                const isCheckedOutCommit =
                                  checkedOutHeadSha != null &&
                                  (shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                                    shaMatchesGitRef(commit.sha, checkedOutHeadSha));
                                const tooltipAuthor = commit.author ?? b.lastCommitAuthor;
                                const tooltipDate = commit.date ?? b.lastCommitDate;
                                const tooltipSha = commit.sha ?? commit.fullSha.slice(0, 7);
                                const tooltipMessage = commit.message;

                                const from = { x: anchorX, y: anchorY };
                                const to = { x: entry.x, y: entry.y };
                                const at = phase === 'collapsing'
                                  ? { x: to.x + (from.x - to.x) * phaseEased, y: to.y + (from.y - to.y) * phaseEased }
                                  : phase === 'expanding'
                                    ? { x: from.x + (to.x - from.x) * phaseEased, y: from.y + (to.y - from.y) * phaseEased }
                                    : phase === 'collapsed'
                                      ? from
                                      : to;
                                const memberOpacity = phase === 'collapsing'
                                  ? 1 - 0.3 * phaseEased
                                  : phase === 'expanding'
                                    ? 0.7 + 0.3 * phaseEased
                                    : phase === 'collapsed'
                                      ? 0.7
                                      : 1;
                                const commitKey = `branch-commit:${b.name}:${commit.fullSha}`;

                                return (
                                  <g
                                    key={commitKey}
                                    transform={`translate(${at.x} ${at.y})`}
                                    style={{ ...clumpAnimStyle, pointerEvents: phase === 'expanded' ? 'auto' : 'none' }}
                                    opacity={memberOpacity}
                                  >
                                    <rect
                                      className="branch-map-commit-rect"
                                      x={-localRect.width / 2 + dotStrokeInset}
                                      y={-localRect.height / 2 + dotStrokeInset}
                                      width={localRect.width - dotStrokeWidth}
                                      height={localRect.height - dotStrokeWidth}
                                      data-base-rx={localRect.radius}
                                      rx={localRect.radius / Math.max(layerCameraScale.x, 0.0001)}
                                      fill={dotFill}
                                      stroke={getNodeStrokeColor(
                                        commitKey,
                                        CANVAS_NODE_STROKE,
                                        isCheckedOutCommit,
                                        selectedCommitShaSet.has(commit.fullSha) ||
                                          (clusterHasSelectedHead && commit.fullSha === b.headSha),
                                      )}
                                      strokeWidth={dotStrokeWidth}
                                      strokeDasharray={dotStrokeDasharray}
                                      style={{ cursor: 'pointer' }}
                                      onClick={(event) =>
                                        handleCommitNodeClick(
                                          event,
                                          commit.fullSha,
                                          clusterHasBranchTip && commit.fullSha === b.headSha
                                            ? b.name
                                            : undefined,
                                        )
                                      }
                                      onDoubleClick={(event) => event.stopPropagation()}
                                      onMouseEnter={() => {
                                        handleNodeHoverEnter(commitKey, b.name);
                                        setTooltip({
                                          x: entry.x,
                                          y: entry.y,
                                          lines: [
                                            `Commit ${tooltipSha}`,
                                            tooltipMessage
                                              ? truncatePrompt(tooltipMessage, COMMIT_TOOLTIP_PREVIEW_MAX)
                                              : `@${tooltipAuthor}`,
                                            `@${tooltipAuthor} · ${fmtTooltipDate(tooltipDate)}`,
                                          ],
                                          avatarFallback: tooltipAuthor?.charAt(0).toUpperCase() || '?',
                                        });
                                      }}
                                      onMouseLeave={() => {
                                        handleNodeHoverLeave();
                                        setTooltip(null);
                                      }}
                                    />
                                  </g>
                                );
                              })}
                            </g>
                          )}
                        </g>
                      );
                    })}
                    {/* Prompt marker hit areas stay on top so hover remains easy. */}
                    {promptMarkerClusters.map((cluster) => {
                      const count = cluster.entries.length;
                      const firstEntry = cluster.entries[0];
                      const lastEntry = cluster.entries[count - 1];
                      const clusterKey = `prompt-clump-${b.name}-${firstEntry.item.index}-${lastEntry.item.index}`;
                      const memberKeys = cluster.entries.map((entry) => `prompt:${b.name}:slot-${entry.item.index}`);
                      const animatedAnchor = resolveAnimatedClumpAnchor(
                        clusterKey,
                        { x: cluster.x, y: cluster.y },
                        memberKeys
                      );
                      const anchorX = animatedAnchor.x;
                      const anchorY = animatedAnchor.y;
                      const hitSize = scaledHoverHitSize;

                      if (count === 1) {
                        const marker = lastEntry.item.marker;
                        return (
                          <g key={`${clusterKey}-hit`}>
                            <rect
                              x={anchorX - hitSize / 2}
                              y={anchorY - hitSize / 2}
                              width={hitSize}
                              height={hitSize}
                              fill="transparent"
                              style={{ cursor: 'pointer' }}
                              onMouseEnter={() =>
                                setTooltip({
                                  x: anchorX,
                                  y: anchorY,
                                  lines: [
                                    'Prompt',
                                    truncatePrompt(marker.prompt, PROMPT_TOOLTIP_PREVIEW_MAX),
                                    `${marker.agent} · ${fmtTooltipDate(marker.timestamp)}`,
                                  ],
                                })
                              }
                              onMouseLeave={() => setTooltip(null)}
                            />
                          </g>
                        );
                      }

                      const firstDate = firstEntry.item.marker.timestamp;
                      const lastDate = lastEntry.item.marker.timestamp;
                      const dateRangeLabel = new Date(firstDate).getTime() === new Date(lastDate).getTime()
                        ? fmtTooltipDate(lastDate)
                        : `${fmtTooltipDate(firstDate)} → ${fmtTooltipDate(lastDate)}`;
                      const latestPrompt = truncatePrompt(lastEntry.item.marker.prompt, PROMPT_CLUSTER_PREVIEW_MAX);
                      return (
                        <g key={`${clusterKey}-hit`}>
                          <rect
                            x={anchorX - hitSize / 2}
                            y={anchorY - hitSize / 2}
                            width={hitSize}
                            height={hitSize}
                            fill="transparent"
                            style={{ cursor: 'pointer' }}
                            onMouseEnter={() =>
                              setTooltip({
                                x: anchorX,
                                y: anchorY,
                                lines: [`${count} prompts`, latestPrompt, dateRangeLabel],
                              })
                            }
                            onMouseLeave={() => setTooltip(null)}
                          />
                        </g>
                      );
                    })}
                    {showClockIcon && (
                      <g style={{ pointerEvents: 'none' }}>
                        <circle cx={clockPoint.x} cy={clockPoint.y} r={4.2} stroke={color} strokeWidth={1.2} fill="none" />
                        <line x1={clockPoint.x} y1={clockPoint.y - 2.9} x2={clockPoint.x} y2={clockPoint.y} stroke={color} strokeWidth={1.2} strokeLinecap="round" />
                        <line x1={clockPoint.x} y1={clockPoint.y} x2={clockPoint.x + 2.3} y2={clockPoint.y + 1.5} stroke={color} strokeWidth={1.2} strokeLinecap="round" />
                      </g>
                    )}
                  </g>

                  {/* Status labels are conflict-aware upstream; conflict indicator was removed. */}
                </g>
              );
              });
            })()}
          </g>

          {/* Checked-out connector line (render below node overlays). */}
          {checkedOutHasUncommittedChanges && checkedOutDisplayIndicatorLocal && checkedOutIndicatorLocal && (() => {
            const markerLocal = checkedOutDisplayIndicatorLocal;
            const anchorLocal = checkedOutIndicatorLocal;
            const hasHorizontalOffset = Math.abs(markerLocal.x - anchorLocal.x) > 0.5;
            const hasVerticalOffset = Math.abs(markerLocal.y - anchorLocal.y) > 0.5;
            const forkPath = (() => {
              if (!hasHorizontalOffset || !hasVerticalOffset) return null;
              const horizontalDir = markerLocal.x >= anchorLocal.x ? 1 : -1;
              const verticalDir = markerLocal.y >= anchorLocal.y ? 1 : -1;
              const bend = Math.min(
                cornerR,
                Math.abs(markerLocal.x - anchorLocal.x),
                Math.abs(markerLocal.y - anchorLocal.y),
              );
              const preTurnX = markerLocal.x - horizontalDir * bend;
              const turnY = anchorLocal.y + verticalDir * bend;
              return `M ${pathCoord(anchorLocal.x, anchorLocal.y)} L ${pathCoord(preTurnX, anchorLocal.y)} Q ${pathCoord(markerLocal.x, anchorLocal.y)} ${pathCoord(markerLocal.x, turnY)} L ${pathCoord(markerLocal.x, markerLocal.y)}`;
            })();
            const straightPath = `M ${pathCoord(anchorLocal.x, anchorLocal.y)} L ${pathCoord(markerLocal.x, markerLocal.y)}`;
            return (
              <g style={{ pointerEvents: 'none' }}>
                <path
                  d={forkPath ?? straightPath}
                  fill="none"
                  stroke={CHECKED_OUT_SELECTION_STROKE}
                  strokeWidth={1.5}
                  pathLength={1}
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            );
          })()}

          {/* Branch commit node overlay so branch connectors/lanes never render over branch rectangles. */}
          <g style={{ opacity: hoveredPR !== null ? 0.2 : 1, transition: 'opacity 0.15s', pointerEvents: 'none' }}>
            {(() => {
              const branchUsesLocalGrayStroke = (branch: Branch): boolean => {
                return getBranchRenderLayout(branch).fullBranchShouldUseLocalGray;
              };

              const branchStrokeLayerPriority = (branch: Branch): number => {
                if (hoveredBranch === branch.name || isNodeLineageHovered(branch.name)) return 4;
                if (isSelectedLaneBranch(branch)) return 3;
                if (focusedErrorBranch?.name === branch.name) return 2;
                return branchUsesLocalGrayStroke(branch) ? 0 : 1;
              };

              const orderedActiveBranches = [...activeBranches].sort(
                (a, b) => branchStrokeLayerPriority(a) - branchStrokeLayerPriority(b)
              );

              return orderedActiveBranches.flatMap((b) => {
                const {
                  hasPreviewData,
                  uniqueAheadCount,
                  branchEndDotIndex,
                  localCommitDotIndices,
                  fullBranchShouldUseLocalGray,
                  commitDotClusters,
                } = getBranchRenderLayout(b);
                const isFocusedError = focusedErrorBranch?.name === b.name;
                const strokeWidth = isFocusedError ? 2 : 1.5;
                const unpushedStrokeWidth = strokeWidth + UNPUSHED_LANE_STROKE_VISUAL_COMP;
                const unpushedLaneDasharray = `${Math.max(1, unpushedStrokeWidth)} ${Math.max(2, unpushedStrokeWidth * 1.8)}`;

                return commitDotClusters.map((cluster) => {
                  const realCommitEntries = cluster.entries.filter(
                    (entry) => entry.item.commit?.kind !== 'branch-created'
                  );
                  const renderEntries = realCommitEntries.length > 0 ? realCommitEntries : cluster.entries;
                  const count = renderEntries.length;
                  const firstEntry = cluster.entries[0];
                  const lastEntry = cluster.entries[cluster.entries.length - 1];
                  const clusterKey = `commit-clump-${b.name}-${firstEntry.item.index}-${lastEntry.item.index}`;
                  const memberKeys = cluster.entries.map((entry) => {
                    const commitSha = entry.item.commit?.fullSha;
                    return commitSha
                      ? `branch-commit:${b.name}:${commitSha}`
                      : `branch-commit:${b.name}:slot-${entry.item.index}`;
                  });
                  const preferredAnchorEntry = (() => {
                    if (branchEndDotIndex != null) {
                      const headEntry = cluster.entries.find(
                        (entry) => entry.item.index === branchEndDotIndex
                      );
                      if (headEntry) return headEntry;
                    }
                    return realCommitEntries[realCommitEntries.length - 1] ?? lastEntry;
                  })();
                  const animatedAnchor = resolveAnimatedClumpAnchor(
                    clusterKey,
                    { x: preferredAnchorEntry.x, y: preferredAnchorEntry.y },
                    memberKeys
                  );
                  const anchorX = animatedAnchor.x;
                  const anchorY = animatedAnchor.y;
                  const dotShouldUseCanvasFill =
                    fullBranchShouldUseLocalGray ||
                    cluster.entries.every((entry) => localCommitDotIndices.has(entry.item.index));
                  const dotFill = dotShouldUseCanvasFill ? CANVAS_UNPUSHED_NODE_FILL : CANVAS_NODE_FILL;
                  const dotStrokeWidth = CANVAS_NODE_STROKE_WIDTH;
                  const dotStrokeInset = dotStrokeWidth / 2;
                  const dotStrokeDasharray = dotShouldUseCanvasFill ? '3 3' : undefined;
                  const clusterHasCheckedOutHead =
                    checkedOutHeadSha != null &&
                    cluster.entries.some((entry) => {
                      const idx = entry.item.index;
                      const commit = entry.item.commit;
                      if (hasPreviewData && commit && commit.kind !== 'branch-created') {
                        return (
                          shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                          shaMatchesGitRef(commit.sha, checkedOutHeadSha)
                        );
                      }
                      if (!hasPreviewData && checkedOutBranchName === b.name && branchEndDotIndex === idx) {
                        return shaMatchesGitRef(b.headSha, checkedOutHeadSha);
                      }
                      return false;
                    });
                  const clusterHasSelectedCommit =
                    cluster.entries.some((entry) => {
                      const commitSha = entry.item.commit?.fullSha;
                      return !!commitSha && selectedCommitShaSet.has(commitSha);
                    });
                  const clusterHasSelectedHead =
                    branchEndDotIndex != null &&
                    cluster.entries.some((entry) => entry.item.index === branchEndDotIndex) &&
                    selectedBranchNameSet.has(b.name);

                  if (count <= 1) {
                    const commitEntry = renderEntries[0] ?? lastEntry;
                    const commit = commitEntry.item.commit;
                    const isNonCommitPlaceholder = !commit && uniqueAheadCount <= 0;
                    const rectSize = commitRectSize(scaledNodeSize);
                    const isGhostRect = isNonCommitPlaceholder;
                    const ghostRectStrokeWidth = unpushedStrokeWidth;
                    const ghostRectDasharray = unpushedLaneDasharray;

                    return (
                      <g key={`branch-overlay-${clusterKey}`}>
                        <rect
                          className="branch-map-commit-rect"
                          x={anchorX - rectSize.width / 2 + dotStrokeInset}
                          y={anchorY - rectSize.height / 2 + dotStrokeInset}
                          width={rectSize.width - dotStrokeWidth}
                          height={rectSize.height - dotStrokeWidth}
                          data-base-rx={rectSize.radius}
                          rx={rectSize.radius / Math.max(layerCameraScale.x, 0.0001)}
                          fill={dotFill}
                          stroke={
                            getNodeStrokeColor(
                              clusterKey,
                              isGhostRect ? LOCAL_UNPUSHED_GRAY : CANVAS_NODE_STROKE,
                              clusterHasCheckedOutHead,
                              clusterHasSelectedCommit || clusterHasSelectedHead,
                            )
                          }
                          strokeWidth={
                            isGhostRect
                              ? ghostRectStrokeWidth
                              : dotStrokeWidth
                          }
                          strokeDasharray={isGhostRect ? ghostRectDasharray : dotStrokeDasharray}
                          strokeLinecap={isGhostRect ? 'round' : undefined}
                          strokeLinejoin={isGhostRect ? 'round' : undefined}
                        />
                      </g>
                    );
                  }

                  const canExpandCluster = renderEntries.length > 1;
                  const expanded = canExpandCluster ? expandedClumps.get(clusterKey) : undefined;
                  const isExpanded = canExpandCluster ? (expanded?.isExpanded ?? false) : false;

                  if (!isExpanded) {
                    const rectSize = nodeRectSize(count);
                    return (
                      <g key={`branch-overlay-${clusterKey}`}>
                        <rect
                          className="branch-map-commit-rect"
                          x={anchorX - rectSize.width / 2 + dotStrokeInset}
                          y={anchorY - rectSize.height / 2 + dotStrokeInset}
                          width={rectSize.width - dotStrokeWidth}
                          height={rectSize.height - dotStrokeWidth}
                          data-base-rx={rectSize.radius}
                          rx={rectSize.radius / Math.max(layerCameraScale.x, 0.0001)}
                          fill={dotFill}
                          stroke={getNodeStrokeColor(
                            clusterKey,
                            CANVAS_NODE_STROKE,
                            clusterHasCheckedOutHead,
                            clusterHasSelectedCommit || clusterHasSelectedHead,
                          )}
                          strokeWidth={dotStrokeWidth}
                          strokeDasharray={dotStrokeDasharray}
                        />
                      </g>
                    );
                  }

                  const phase = expanded?.phase ?? 'collapsed';
                  const phaseStartedAtMs = expanded?.phaseStartedAt ?? Date.now();
                  const phaseProgress = phase === 'collapsed'
                    ? 0
                    : phase === 'expanded'
                      ? 1
                      : clamp01((Date.now() - phaseStartedAtMs) / clumpExpandMs);
                  const phaseEased = phaseProgress <= 0 ? 0 : phaseProgress >= 1 ? 1 : easeInOutCubic(phaseProgress);
                  const localRect = commitRectSize(scaledNodeSize, 0);

                  return (
                    <g key={`branch-overlay-${clusterKey}`}>
                      {renderEntries.map((entry) => {
                        const commit = entry.item.commit;
                        if (!commit?.fullSha) return null;
                        const isCheckedOutCommit =
                          checkedOutHeadSha != null &&
                          (shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                            shaMatchesGitRef(commit.sha, checkedOutHeadSha));

                        const from = { x: anchorX, y: anchorY };
                        const to = { x: entry.x, y: entry.y };
                        const at = phase === 'collapsing'
                          ? { x: to.x + (from.x - to.x) * phaseEased, y: to.y + (from.y - to.y) * phaseEased }
                          : phase === 'expanding'
                            ? { x: from.x + (to.x - from.x) * phaseEased, y: from.y + (to.y - from.y) * phaseEased }
                            : phase === 'collapsed'
                              ? from
                              : to;
                        const memberOpacity = phase === 'collapsing'
                          ? 1 - 0.3 * phaseEased
                          : phase === 'expanding'
                            ? 0.7 + 0.3 * phaseEased
                            : phase === 'collapsed'
                              ? 0.7
                              : 1;
                        const commitKey = `branch-commit:${b.name}:${commit.fullSha}`;

                        return (
                          <g
                            key={`branch-overlay-${commitKey}`}
                            transform={`translate(${at.x} ${at.y})`}
                            style={clumpAnimStyle}
                            opacity={memberOpacity}
                          >
                            <rect
                              className="branch-map-commit-rect"
                              x={-localRect.width / 2 + dotStrokeInset}
                              y={-localRect.height / 2 + dotStrokeInset}
                              width={localRect.width - dotStrokeWidth}
                              height={localRect.height - dotStrokeWidth}
                              data-base-rx={localRect.radius}
                              rx={localRect.radius / Math.max(layerCameraScale.x, 0.0001)}
                              fill={dotFill}
                              stroke={getNodeStrokeColor(
                                commitKey,
                                CANVAS_NODE_STROKE,
                                isCheckedOutCommit,
                                selectedCommitShaSet.has(commit.fullSha) ||
                                  (clusterHasSelectedHead && commit.fullSha === b.headSha),
                              )}
                              strokeWidth={dotStrokeWidth}
                              strokeDasharray={dotStrokeDasharray}
                            />
                          </g>
                        );
                      })}
                    </g>
                  );
                });
              });
            })()}
          </g>

          {/* Main commit node overlay so branch connectors never render over main clumps. */}
          <g style={{ opacity: mainTimelineOpacity, transition: 'opacity 0.15s', pointerEvents: 'none' }}>
            {mainDirectClusters.map((clusterLayout) => {
                const {
                  cluster,
                  count,
                  clusterKey,
                  memberKeys,
                  clusterHasMainTip,
                  clusterHasCheckedOutHead: mainClusterHasCheckedOutHead,
                  clusterHasSelectedCommit: mainClusterHasSelectedCommit,
                } = clusterLayout;
                const animatedAnchor = resolveAnimatedClumpAnchor(
                  clusterKey,
                  { x: cluster.x, y: cluster.y },
                  memberKeys
                );
                const expanded = expandedClumps.get(clusterKey);
                const isExpanded = expanded?.isExpanded ?? false;
                const phase = expanded?.phase ?? 'collapsed';
                const phaseStartedAtMs = expanded?.phaseStartedAt ?? Date.now();
                const phaseProgress = phase === 'collapsed'
                  ? 0
                  : phase === 'expanded'
                    ? 1
                    : clamp01((Date.now() - phaseStartedAtMs) / clumpExpandMs);
                const phaseEased = phaseProgress <= 0 ? 0 : phaseProgress >= 1 ? 1 : easeInOutCubic(phaseProgress);
                const headEntryForCluster =
                  mainClusterHasCheckedOutHead && checkedOutHeadSha && isExpanded
                    ? cluster.entries.find((entry) =>
                        shaMatchesGitRef(entry.item.fullSha, checkedOutHeadSha)
                      )
                    : null;
                const anchorX = headEntryForCluster?.x ?? animatedAnchor.x;
                const anchorY = headEntryForCluster?.y ?? animatedAnchor.y;

                if (count === 1) {
                  const rectSize = commitRectSize(scaledNodeSize);
                  return (
                    <g key={`main-direct-overlay-${clusterKey}`}>
                      <rect
                        className="branch-map-commit-rect"
                        x={anchorX - rectSize.width / 2 + CANVAS_NODE_STROKE_INSET}
                        y={anchorY - rectSize.height / 2 + CANVAS_NODE_STROKE_INSET}
                        width={rectSize.width - CANVAS_NODE_STROKE_WIDTH}
                        height={rectSize.height - CANVAS_NODE_STROKE_WIDTH}
                        data-base-rx={rectSize.radius}
                        rx={rectSize.radius / Math.max(layerCameraScale.x, 0.0001)}
                        fill={CANVAS_NODE_FILL}
                        stroke={getNodeStrokeColor(
                          clusterKey,
                          CANVAS_NODE_STROKE,
                          mainClusterHasCheckedOutHead,
                          mainClusterHasSelectedCommit || (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                        )}
                        strokeWidth={CANVAS_NODE_STROKE_WIDTH}
                      />
                    </g>
                  );
                }

                const clusterRectSize = nodeRectSize(count);
                const localRect = commitRectSize(scaledNodeSize, 0);
                return (
                  <g key={`main-direct-overlay-${clusterKey}`}>
                    {isExpanded ? (
                      <>
                        {cluster.entries.map((entry) => {
                          const c = entry.item;
                          const from = { x: anchorX, y: anchorY };
                          const to = { x: entry.x, y: entry.y };
                          const at = phase === 'collapsing'
                            ? { x: to.x + (from.x - to.x) * phaseEased, y: to.y + (from.y - to.y) * phaseEased }
                            : phase === 'expanding'
                              ? { x: from.x + (to.x - from.x) * phaseEased, y: from.y + (to.y - from.y) * phaseEased }
                              : phase === 'collapsed'
                                ? from
                                : to;
                          const memberOpacity = phase === 'collapsing'
                            ? 1 - 0.3 * phaseEased
                            : phase === 'expanding'
                              ? 0.7 + 0.3 * phaseEased
                              : phase === 'collapsed'
                                ? 0.7
                                : 1;
                          const commitKey = `direct:${c.fullSha}`;
                          const isCheckedOutCommit =
                            checkedOutHeadSha != null &&
                            (shaMatchesGitRef(c.fullSha, checkedOutHeadSha) ||
                              shaMatchesGitRef(c.sha, checkedOutHeadSha));

                          return (
                            <g
                              key={`main-direct-overlay:${c.fullSha}`}
                              transform={`translate(${at.x} ${at.y})`}
                              style={clumpAnimStyle}
                              opacity={memberOpacity}
                            >
                              <rect
                                className="branch-map-commit-rect"
                                x={-localRect.width / 2 + CANVAS_NODE_STROKE_INSET}
                                y={-localRect.height / 2 + CANVAS_NODE_STROKE_INSET}
                                width={localRect.width - CANVAS_NODE_STROKE_WIDTH}
                                height={localRect.height - CANVAS_NODE_STROKE_WIDTH}
                                data-base-rx={localRect.radius}
                                rx={localRect.radius / Math.max(layerCameraScale.x, 0.0001)}
                                fill={CANVAS_NODE_FILL}
                                stroke={getNodeStrokeColor(
                                  commitKey,
                                  CANVAS_NODE_STROKE,
                                  isCheckedOutCommit,
                                  selectedCommitShaSet.has(c.fullSha) ||
                                    (clusterHasMainTip &&
                                      selectedBranchNameSet.has(defaultBranch) &&
                                      c.fullSha === latestMainCommitSha),
                                )}
                                strokeWidth={CANVAS_NODE_STROKE_WIDTH}
                              />
                            </g>
                          );
                        })}
                      </>
                    ) : (
                      <rect
                        className="branch-map-commit-rect"
                        x={anchorX - clusterRectSize.width / 2 + CANVAS_NODE_STROKE_INSET}
                        y={anchorY - clusterRectSize.height / 2 + CANVAS_NODE_STROKE_INSET}
                        width={clusterRectSize.width - CANVAS_NODE_STROKE_WIDTH}
                        height={clusterRectSize.height - CANVAS_NODE_STROKE_WIDTH}
                        data-base-rx={clusterRectSize.radius}
                        rx={clusterRectSize.radius / Math.max(layerCameraScale.x, 0.0001)}
                        fill={CANVAS_NODE_FILL}
                        stroke={getNodeStrokeColor(
                          clusterKey,
                          CANVAS_NODE_STROKE,
                          mainClusterHasCheckedOutHead,
                          mainClusterHasSelectedCommit || (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                        )}
                        strokeWidth={CANVAS_NODE_STROKE_WIDTH}
                      />
                    )}
                  </g>
                );
              })}
          </g>

          {/* Top-most label overlay so labels are always above all rectangle layers. */}
          <g style={{ pointerEvents: 'none' }}>
            <g style={{ opacity: hoveredPR !== null ? 0.2 : 1, transition: 'opacity 0.15s' }}>
              {(() => {
                const branchUsesLocalGrayStroke = (branch: Branch): boolean => {
                  return getBranchRenderLayout(branch).fullBranchShouldUseLocalGray;
                };

                const branchStrokeLayerPriority = (branch: Branch): number => {
                  if (hoveredBranch === branch.name || isNodeLineageHovered(branch.name)) return 4;
                  if (isSelectedLaneBranch(branch)) return 3;
                  if (focusedErrorBranch?.name === branch.name) return 2;
                  return branchUsesLocalGrayStroke(branch) ? 0 : 1;
                };

                const orderedActiveBranches = [...activeBranches].sort(
                  (a, b) => branchStrokeLayerPriority(a) - branchStrokeLayerPriority(b)
                );

                return orderedActiveBranches.flatMap((b) => {
                  const {
                    commitDotClusters,
                    branchEndDotIndex,
                  } = getBranchRenderLayout(b);

                  return commitDotClusters.map((cluster) => {
                    const realCommitEntries = cluster.entries.filter(
                      (entry) => entry.item.commit?.kind !== 'branch-created'
                    );
                    const renderEntries = realCommitEntries.length > 0 ? realCommitEntries : cluster.entries;
                    const count = renderEntries.length;
                    const firstEntry = cluster.entries[0];
                    const lastEntry = cluster.entries[cluster.entries.length - 1];
                    const clusterKey = `commit-clump-${b.name}-${firstEntry.item.index}-${lastEntry.item.index}`;
                    const memberKeys = cluster.entries.map((entry) => {
                      const commitSha = entry.item.commit?.fullSha;
                      return commitSha
                        ? `branch-commit:${b.name}:${commitSha}`
                        : `branch-commit:${b.name}:slot-${entry.item.index}`;
                    });
                    const preferredAnchorEntry = (() => {
                      if (branchEndDotIndex != null) {
                        const headEntry = cluster.entries.find(
                          (entry) => entry.item.index === branchEndDotIndex
                        );
                        if (headEntry) return headEntry;
                      }
                      return realCommitEntries[realCommitEntries.length - 1] ?? lastEntry;
                    })();
                    const animatedAnchor = resolveAnimatedClumpAnchor(
                      clusterKey,
                      { x: preferredAnchorEntry.x, y: preferredAnchorEntry.y },
                      memberKeys
                    );
                    const anchorX = animatedAnchor.x;
                    const anchorY = animatedAnchor.y;

                    if (count <= 1) {
                      const commitEntry = renderEntries[0] ?? lastEntry;
                      const commit = commitEntry.item.commit;
                      const rectSize = commitRectSize(scaledNodeSize);
                      const singleTitleText = fitNodeFrameTitle(
                        b.name,
                        commit?.sha ?? commit?.fullSha ?? b.headSha,
                        rectSize.width,
                      );

                      return (
                        <text
                          key={`branch-label-overlay-${clusterKey}`}
                          x={anchorX - rectSize.width / 2 + CANVAS_NODE_STROKE_INSET + nodeFrameLabelInsetX}
                          y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                          textAnchor="start"
                          fill={NODE_FRAME_LABEL_COLOR}
                          fontSize={nodeFrameLabelFontSize}
                          fontWeight={NODE_FRAME_LABEL_WEIGHT}
                          pointerEvents="none"
                        >
                          {singleTitleText}
                        </text>
                      );
                    }

                    const canExpandCluster = renderEntries.length > 1;
                    const expanded = canExpandCluster ? expandedClumps.get(clusterKey) : undefined;
                    const isExpanded = canExpandCluster ? (expanded?.isExpanded ?? false) : false;

                    if (!isExpanded) {
                      const rectSize = nodeRectSize(count);
                      const clumpCountText = stackCountLabel(count);
                      const clumpTitleText = fitNodeFrameTitle(
                        b.name,
                        (renderEntries[renderEntries.length - 1]?.item.commit?.sha ??
                          renderEntries[renderEntries.length - 1]?.item.commit?.fullSha ??
                          b.headSha),
                        rectSize.width,
                        clumpCountText,
                      );

                      return (
                        <g key={`branch-label-overlay-${clusterKey}`}>
                          <text
                            x={anchorX + rectSize.width / 2 - CANVAS_NODE_STROKE_INSET - nodeFrameLabelRightInsetX}
                            y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                            textAnchor="end"
                            fontSize={nodeFrameLabelFontSize}
                            fill={NODE_FRAME_LABEL_COLOR}
                            fontWeight={NODE_FRAME_LABEL_WEIGHT}
                            pointerEvents="none"
                          >
                            {clumpCountText}
                          </text>
                          <text
                            x={anchorX - rectSize.width / 2 + CANVAS_NODE_STROKE_INSET + nodeFrameLabelInsetX}
                            y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                            textAnchor="start"
                            fill={NODE_FRAME_LABEL_COLOR}
                            fontSize={nodeFrameLabelFontSize}
                            fontWeight={NODE_FRAME_LABEL_WEIGHT}
                            pointerEvents="none"
                          >
                            {clumpTitleText}
                          </text>
                        </g>
                      );
                    }

                    const phase = expanded?.phase ?? 'collapsed';
                    const phaseStartedAtMs = expanded?.phaseStartedAt ?? Date.now();
                    const phaseProgress = phase === 'collapsed'
                      ? 0
                      : phase === 'expanded'
                        ? 1
                        : clamp01((Date.now() - phaseStartedAtMs) / clumpExpandMs);
                    const phaseEased = phaseProgress <= 0 ? 0 : phaseProgress >= 1 ? 1 : easeInOutCubic(phaseProgress);
                    const localRect = commitRectSize(scaledNodeSize, 0);
                    const topExpandedEntry = renderEntries.reduce(
                      (top, entry) => (entry.y < top.y ? entry : top),
                      renderEntries[0]
                    );
                    return (
                      <g key={`branch-label-overlay-${clusterKey}`}>
                        {renderEntries.map((entry) => {
                          const commit = entry.item.commit;
                          if (!commit?.fullSha) return null;

                          const from = { x: anchorX, y: anchorY };
                          const to = { x: entry.x, y: entry.y };
                          const at = phase === 'collapsing'
                            ? { x: to.x + (from.x - to.x) * phaseEased, y: to.y + (from.y - to.y) * phaseEased }
                            : phase === 'expanding'
                              ? { x: from.x + (to.x - from.x) * phaseEased, y: from.y + (to.y - from.y) * phaseEased }
                              : phase === 'collapsed'
                                ? from
                                : to;
                          const memberOpacity = phase === 'collapsing'
                            ? 1 - 0.3 * phaseEased
                            : phase === 'expanding'
                              ? 0.7 + 0.3 * phaseEased
                              : phase === 'collapsed'
                                ? 0.7
                                : 1;

                              return (
                                <g
                                  key={`branch-label-overlay:${b.name}:${commit.fullSha}`}
                                  transform={`translate(${at.x} ${at.y})`}
                                  style={clumpAnimStyle}
                                  opacity={memberOpacity}
                                >
                                  <text
                                    x={-localRect.width / 2 + CANVAS_NODE_STROKE_INSET + nodeFrameLabelInsetX}
                                    y={-localRect.height / 2 - nodeFrameLabelGap}
                                    textAnchor="start"
                                    fill={NODE_FRAME_LABEL_COLOR}
                                    fontSize={nodeFrameLabelFontSize}
                                    fontWeight={NODE_FRAME_LABEL_WEIGHT}
                                    pointerEvents="none"
                                  >
                                    {fitNodeFrameTitle(
                                      b.name,
                                      commit.sha ?? commit.fullSha,
                                      localRect.width,
                                      undefined,
                                      entry === topExpandedEntry
                                    )}
                                  </text>
                                </g>
                              );
                        })}
                      </g>
                    );
                  });
                });
              })()}
            </g>

            <g style={{ opacity: mainTimelineOpacity, transition: 'opacity 0.15s' }}>
              {mainDirectClusters.map((clusterLayout) => {
                const {
                  cluster,
                  count,
                  last,
                  clusterKey,
                  memberKeys,
                  clusterHasCheckedOutHead: mainClusterHasCheckedOutHead,
                } = clusterLayout;
                const animatedAnchor = resolveAnimatedClumpAnchor(
                  clusterKey,
                  { x: cluster.x, y: cluster.y },
                  memberKeys
                );
                const expanded = expandedClumps.get(clusterKey);
                const isExpanded = expanded?.isExpanded ?? false;
                const headEntryForCluster =
                  mainClusterHasCheckedOutHead && checkedOutHeadSha && isExpanded
                    ? cluster.entries.find((entry) =>
                        shaMatchesGitRef(entry.item.fullSha, checkedOutHeadSha)
                      )
                    : null;
                const anchorX = headEntryForCluster?.x ?? animatedAnchor.x;
                const anchorY = headEntryForCluster?.y ?? animatedAnchor.y;

                if (count === 1) {
                  const rectSize = commitRectSize(scaledNodeSize);
                  const singleTitleText = fitNodeFrameTitle(
                    defaultBranch,
                    last.sha ?? last.fullSha,
                    rectSize.width,
                  );
                  return (
                    <text
                      key={`main-label-overlay-${clusterKey}`}
                      x={anchorX - rectSize.width / 2 + CANVAS_NODE_STROKE_INSET + nodeFrameLabelInsetX}
                      y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                      textAnchor="start"
                      fill={NODE_FRAME_LABEL_COLOR}
                      fontSize={nodeFrameLabelFontSize}
                      fontWeight={NODE_FRAME_LABEL_WEIGHT}
                      pointerEvents="none"
                    >
                      {singleTitleText}
                    </text>
                  );
                }

                const clusterRectSize = nodeRectSize(count);
                const clumpCountText = stackCountLabel(count);
                const clumpTitleText = fitNodeFrameTitle(
                  defaultBranch,
                  last.sha ?? last.fullSha,
                  clusterRectSize.width,
                  clumpCountText,
                );
                if (isExpanded) {
                  const phase = expanded?.phase ?? 'collapsed';
                  const phaseStartedAtMs = expanded?.phaseStartedAt ?? Date.now();
                  const phaseProgress = phase === 'collapsed'
                    ? 0
                    : phase === 'expanded'
                      ? 1
                      : clamp01((Date.now() - phaseStartedAtMs) / clumpExpandMs);
                  const phaseEased = phaseProgress <= 0 ? 0 : phaseProgress >= 1 ? 1 : easeInOutCubic(phaseProgress);
                  const localRect = commitRectSize(scaledNodeSize, 0);
                  const topEntryForLabels = cluster.entries.reduce(
                    (top, entry) => (entry.y < top.y ? entry : top),
                    cluster.entries[0]
                  );
                  return (
                    <g key={`main-label-overlay-${clusterKey}`}>
                      {cluster.entries.map((entry) => {
                        const c = entry.item;
                        const from = { x: anchorX, y: anchorY };
                        const to = { x: entry.x, y: entry.y };
                        const at = phase === 'collapsing'
                          ? { x: to.x + (from.x - to.x) * phaseEased, y: to.y + (from.y - to.y) * phaseEased }
                          : phase === 'expanding'
                            ? { x: from.x + (to.x - from.x) * phaseEased, y: from.y + (to.y - from.y) * phaseEased }
                            : phase === 'collapsed'
                              ? from
                              : to;
                        const memberOpacity = phase === 'collapsing'
                          ? 1 - 0.3 * phaseEased
                          : phase === 'expanding'
                            ? 0.7 + 0.3 * phaseEased
                            : phase === 'collapsed'
                              ? 0.7
                              : 1;
                          return (
                            <g
                              key={`main-label-overlay:${c.fullSha}`}
                              transform={`translate(${at.x} ${at.y})`}
                              style={clumpAnimStyle}
                              opacity={memberOpacity}
                            >
                              <text
                                x={-localRect.width / 2 + CANVAS_NODE_STROKE_INSET + nodeFrameLabelInsetX}
                                y={-localRect.height / 2 - nodeFrameLabelGap}
                                textAnchor="start"
                                fill={NODE_FRAME_LABEL_COLOR}
                                fontSize={nodeFrameLabelFontSize}
                                fontWeight={NODE_FRAME_LABEL_WEIGHT}
                                pointerEvents="none"
                              >
                                {fitNodeFrameTitle(
                                  defaultBranch,
                                  c.sha ?? c.fullSha,
                                  localRect.width,
                                  undefined,
                                  entry === topEntryForLabels
                                )}
                              </text>
                            </g>
                          );
                      })}
                    </g>
                  );
                }
                return (
                  <g key={`main-label-overlay-${clusterKey}`}>
                    {!isExpanded && (
                      <text
                        x={anchorX + clusterRectSize.width / 2 - CANVAS_NODE_STROKE_INSET - nodeFrameLabelRightInsetX}
                        y={anchorY - clusterRectSize.height / 2 - nodeFrameLabelGap}
                        textAnchor="end"
                        fontSize={nodeFrameLabelFontSize}
                        fill={NODE_FRAME_LABEL_COLOR}
                        fontWeight={NODE_FRAME_LABEL_WEIGHT}
                        pointerEvents="none"
                      >
                        {clumpCountText}
                      </text>
                    )}
                    <text
                      x={anchorX - clusterRectSize.width / 2 + CANVAS_NODE_STROKE_INSET + nodeFrameLabelInsetX}
                      y={anchorY - clusterRectSize.height / 2 - nodeFrameLabelGap}
                      textAnchor="start"
                      fill={NODE_FRAME_LABEL_COLOR}
                      fontSize={nodeFrameLabelFontSize}
                      fontWeight={NODE_FRAME_LABEL_WEIGHT}
                      pointerEvents="none"
                    >
                      {clumpTitleText}
                    </text>
                  </g>
                );
              })}
            </g>
          </g>

          {/* Top-most collapse controls so carets are never occluded by node layers. */}
          <g>
            {mainDirectClusters.map((clusterLayout) => {
              const { cluster, count, clusterKey } = clusterLayout;
              const expanded = expandedClumps.get(clusterKey);
              const isExpanded = expanded?.isExpanded ?? false;
              const phase = expanded?.phase ?? 'collapsed';
              if (count <= 1 || !isExpanded || phase !== 'expanded') return null;

              const localRect = commitRectSize(scaledNodeSize, 0);
              const collapseIconSize = nodeFrameCollapseIconSize;
              const collapseHitSize = worldPx(16);
              const collapseStrokeWidth = 1;
              const topExpandedEntry = cluster.entries.reduce(
                (top, entry) => (entry.y < top.y ? entry : top),
                cluster.entries[0]
              );
              const clumpCountAnchorX =
                topExpandedEntry.x + localRect.width / 2 - CANVAS_NODE_STROKE_INSET - nodeFrameLabelRightInsetX;
              const clumpCountAnchorY = topExpandedEntry.y - localRect.height / 2 - nodeFrameLabelGap;
              const collapseHitX = clumpCountAnchorX - collapseHitSize;
              const collapseHitY = clumpCountAnchorY - collapseHitSize + worldPx(3);
              // Keep caret right edge locked to the same anchor as count text ("end"-aligned).
              const collapseCaretX = clumpCountAnchorX - collapseIconSize;
              const collapseCaretY = collapseHitY + (collapseHitSize - collapseIconSize) / 2;
              const collapseCaretNudgeX = worldPx(0.8);

              return (
                <g
                  key={`main-collapse-control-${clusterKey}`}
                  role="button"
                  tabIndex={0}
                  aria-label="Collapse commit stack"
                  style={{ cursor: 'pointer' }}
                  onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                  onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleClumpExpanded(clusterKey);
                  }}
                  onKeyDown={(e) => {
                    if (e.key !== 'Enter' && e.key !== ' ') return;
                    e.preventDefault();
                    e.stopPropagation();
                    toggleClumpExpanded(clusterKey);
                  }}
                >
                  <rect
                    x={collapseHitX}
                    y={collapseHitY}
                    width={collapseHitSize}
                    height={collapseHitSize}
                    fill="rgba(0,0,0,0.001)"
                    pointerEvents="all"
                  />
                  <path
                    d={`M ${collapseCaretX + collapseCaretNudgeX + collapseIconSize * 0.16} ${collapseCaretY + collapseIconSize * 0.34} L ${collapseCaretX + collapseCaretNudgeX + collapseIconSize * 0.5} ${collapseCaretY + collapseIconSize * 0.66} L ${collapseCaretX + collapseCaretNudgeX + collapseIconSize * 0.84} ${collapseCaretY + collapseIconSize * 0.34}`}
                    stroke={NODE_FRAME_LABEL_COLOR}
                    strokeWidth={collapseStrokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                  />
                </g>
              );
            })}

            {activeBranches.flatMap((b) => {
              const { commitDotClusters } = getBranchRenderLayout(b);
              return commitDotClusters.map((cluster) => {
                const realCommitEntries = cluster.entries.filter(
                  (entry) => entry.item.commit?.kind !== 'branch-created'
                );
                const renderEntries = realCommitEntries.length > 0 ? realCommitEntries : cluster.entries;
                const count = renderEntries.length;
                const firstEntry = cluster.entries[0];
                const lastEntry = cluster.entries[cluster.entries.length - 1];
                const clusterKey = `commit-clump-${b.name}-${firstEntry.item.index}-${lastEntry.item.index}`;
                const canExpandCluster = renderEntries.length > 1;
                const expanded = canExpandCluster ? expandedClumps.get(clusterKey) : undefined;
                const isExpanded = canExpandCluster ? (expanded?.isExpanded ?? false) : false;
                const phase = expanded?.phase ?? 'collapsed';
                if (count <= 1 || !isExpanded || phase !== 'expanded') return null;

                const localRect = commitRectSize(scaledNodeSize, 0);
                const collapseIconSize = nodeFrameCollapseIconSize;
                const collapseHitSize = worldPx(16);
                const collapseStrokeWidth = 1;
                const topExpandedEntry = renderEntries.reduce(
                  (top, entry) => (entry.y < top.y ? entry : top),
                  renderEntries[0]
                );
                const clumpCountAnchorX =
                  topExpandedEntry.x + localRect.width / 2 - CANVAS_NODE_STROKE_INSET - nodeFrameLabelRightInsetX;
                const clumpCountAnchorY = topExpandedEntry.y - localRect.height / 2 - nodeFrameLabelGap;
                const collapseHitX = clumpCountAnchorX - collapseHitSize;
                const collapseHitY = clumpCountAnchorY - collapseHitSize + worldPx(3);
                // Keep caret right edge locked to the same anchor as count text ("end"-aligned).
                const collapseCaretX = clumpCountAnchorX - collapseIconSize;
                const collapseCaretY = collapseHitY + (collapseHitSize - collapseIconSize) / 2;
                const collapseCaretNudgeX = worldPx(0.8);

                return (
                  <g
                    key={`branch-collapse-control-${clusterKey}`}
                    role="button"
                    tabIndex={0}
                    aria-label="Collapse commit stack"
                    style={{ cursor: 'pointer' }}
                    onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleClumpExpanded(clusterKey);
                    }}
                    onKeyDown={(e) => {
                      if (e.key !== 'Enter' && e.key !== ' ') return;
                      e.preventDefault();
                      e.stopPropagation();
                      toggleClumpExpanded(clusterKey);
                    }}
                  >
                    <rect
                      x={collapseHitX}
                      y={collapseHitY}
                      width={collapseHitSize}
                      height={collapseHitSize}
                      fill="rgba(0,0,0,0.001)"
                      pointerEvents="all"
                    />
                    <path
                      d={`M ${collapseCaretX + collapseCaretNudgeX + collapseIconSize * 0.16} ${collapseCaretY + collapseIconSize * 0.34} L ${collapseCaretX + collapseCaretNudgeX + collapseIconSize * 0.5} ${collapseCaretY + collapseIconSize * 0.66} L ${collapseCaretX + collapseCaretNudgeX + collapseIconSize * 0.84} ${collapseCaretY + collapseIconSize * 0.34}`}
                      stroke={NODE_FRAME_LABEL_COLOR}
                      strokeWidth={collapseStrokeWidth}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      vectorEffect="non-scaling-stroke"
                    />
                  </g>
                );
              });
            })}
          </g>

          {/* Branch commit tooltip is rendered as an HTML overlay outside the zoomed camera. */}

          {/* Tooltip for main-line merge nodes — shown above the tick */}
          {hoveredMergeNode && (() => {
            const { y, node: m } = hoveredMergeNode;
            const label = m.prNumber ? `PR #${m.prNumber}` : m.sha.slice(0, 7);
            const title = m.prTitle ?? '';
            const hasTitle = title.length > 0;
            const TW = 220;
            const TH = hasTitle ? 58 : 44;
            const tx = mainX + 14;
            const ty = y - TH / 2;
            return (
              <g style={{ pointerEvents: 'none' }}>
                <rect x={tx} y={ty} width={TW} height={TH} rx={8}
                  fill="#ffffff" stroke="#e7e5e0" strokeWidth={1}
                  filter="url(#tick-shadow)" />
                <text x={tx + 10} y={ty + 14} fontSize={10} fontWeight={600} fill="#1c1917">{label}</text>
                {hasTitle && (
                  <text x={tx + 10} y={ty + 30} fontSize={10} fill="#a8a29e">
                    {title.slice(0, 34)}{title.length > 34 ? '…' : ''}
                  </text>
                )}
                <text x={tx + 10} y={hasTitle ? ty + 46 : ty + 30} fontSize={10} fill="#a8a29e">
                  {fmtLabelDate(m.date)}
                </text>
              </g>
            );
          })()}

          {/* Tooltip for PR commit SHAs — positioned below the tick */}
          {hoveredPRCommit && (() => {
            const { x, arcY, pr, commitIdx } = hoveredPRCommit;
            const sha = prCommits.get(pr.number)?.[commitIdx];
            const TW = 200;
            const tx = x - TW / 2;
            const ty = arcY + 14;
            return (
              <g style={{ pointerEvents: 'none' }}>
                <rect x={tx} y={ty} width={TW} height={60} rx={8}
                  fill="#ffffff" stroke="#e7e5e0" strokeWidth={1}
                  filter="url(#tick-shadow)" />
                <text x={tx + 10} y={ty + 17} fontSize={10} fontWeight={600} fill="#1c1917">
                  {sha ?? `commit ${commitIdx + 1}`}
                </text>
                <text x={tx + 10} y={ty + 32} fontSize={10} fill="#78716c">
                  PR #{pr.number} · {pr.branchName.length > 22 ? pr.branchName.slice(0, 22) + '…' : pr.branchName}
                </text>
                <text x={tx + 10} y={ty + 47} fontSize={10} fill="#a8a29e">
                  @{pr.authorLogin} · merged {fmtLabelDate(pr.mergedAt)}
                </text>
              </g>
            );
          })()}
          </g>
          </g>
          </g>
        </svg>
        </div>

        {marqueeRect && (
          <div
            className="absolute border border-primary bg-primary/10 rounded-sm pointer-events-none z-40"
            style={{
              left: marqueeRect.left,
              top: marqueeRect.top,
              width: marqueeRect.width,
              height: marqueeRect.height,
            }}
          />
        )}

        {holdTimelineForInitialCenter && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <Loader2
              className="size-6 shrink-0 animate-spin text-muted-foreground"
              aria-hidden
            />
          </div>
        )}
        {holdTimelineForInitialCenter && timelineRevealPhase === 'fading' && (
          <div
            className="absolute inset-0 pointer-events-none branch-map-fog-recede"
            style={{ '--fog-duration': `${INITIAL_REVEAL_FADE_MS}ms` } as React.CSSProperties}
          />
        )}

        {/* Fixed-size tooltip layer (not affected by timeline zoom). */}
        {timelineRevealReady && tooltip && (() => {
          const [title, subtitle, meta] = tooltip.lines;
          const avatarFallback = tooltip.avatarFallback || '?';
          const tooltipCompact = isPopoverWindow || viewportSize.width < 420;
          const viewportPadX = tooltipCompact ? 18 : 8;
          const viewportPadTop = tooltipCompact ? 84 : 8;
          const viewportPadBottom = tooltipCompact ? 18 : 8;
          const availableTooltipW = Math.max(140, viewportSize.width - viewportPadX * 2);
          const tooltipMaxW = Math.min(tooltipCompact ? 260 : 320, availableTooltipW);
          const tooltipMinW = tooltipCompact ? 160 : 240;
          const tooltipW = Math.min(tooltipMaxW, Math.max(tooltipMinW, availableTooltipW));
          const tooltipHeaderH = 24;
          const tooltipAvatarSize = 20;
          const tooltipBodyGap = 8;
          const tooltipBodyPadX = 12;
          const tooltipBodyPadY = 8;
          const tooltipLineHeight = 16;
          // Use live camera refs to avoid tooltip drift when zoom/pan state is throttled.
          const livePan = panRef.current;
          const liveCameraScale = getCameraScale(zoomRef.current, isHorizontal);
          const anchorX =
            livePan.x + graphOffsetX + (tooltip.x + graphContentTranslateX) * liveCameraScale.x;
          const anchorY =
            livePan.y + graphOffsetY + (tooltip.y + graphContentTranslateY) * liveCameraScale.y;
          const bodyContentW = Math.max(
            92,
            tooltipW - tooltipBodyPadX * 2 - tooltipAvatarSize - tooltipBodyGap
          );
          const estimatedCharsPerLine = Math.max(18, Math.floor(bodyContentW / 6));
          const subtitleLines = subtitle ? Math.max(1, Math.ceil(subtitle.length / estimatedCharsPerLine)) : 0;
          const metaLines = meta ? Math.max(1, Math.ceil(meta.length / estimatedCharsPerLine)) : 0;
          const tooltipBodyH = Math.max(
            50,
            tooltipBodyPadY * 2 + Math.max(tooltipAvatarSize, (subtitleLines + metaLines) * tooltipLineHeight)
          );
          const tooltipH = Math.min(220, tooltipHeaderH + tooltipBodyH);
          const gap = tooltipCompact ? 8 : 10;
          const nodeClearance = tooltipCompact ? 14 : 18;
          const maxLeft = Math.max(viewportPadX, viewportSize.width - tooltipW - viewportPadX);
          const maxTop = Math.max(viewportPadTop, viewportSize.height - tooltipH - viewportPadBottom);
          const clampLeft = (left: number) => Math.min(maxLeft, Math.max(viewportPadX, left));
          const clampTop = (top: number) => Math.min(maxTop, Math.max(viewportPadTop, top));
          const candidatePositions = (
            tooltipCompact
              ? [
                { left: anchorX - tooltipW / 2, top: anchorY + gap }, // below
                { left: anchorX + gap, top: anchorY - tooltipH / 2 }, // right
                { left: anchorX - tooltipW - gap, top: anchorY - tooltipH / 2 }, // left
                { left: anchorX - tooltipW / 2, top: anchorY - tooltipH - gap }, // above
              ]
              : [
                { left: anchorX - tooltipW / 2, top: anchorY - tooltipH - gap }, // above
                { left: anchorX - tooltipW / 2, top: anchorY + gap }, // below
                { left: anchorX + gap, top: anchorY - tooltipH / 2 }, // right
                { left: anchorX - tooltipW - gap, top: anchorY - tooltipH / 2 }, // left
              ]
          ).map((position) => ({
            left: clampLeft(position.left),
            top: clampTop(position.top),
          }));
          const overlapsAnchor = ({ left, top }: { left: number; top: number }) =>
            anchorX >= left - nodeClearance &&
            anchorX <= left + tooltipW + nodeClearance &&
            anchorY >= top - nodeClearance &&
            anchorY <= top + tooltipH + nodeClearance;
          const distanceFromRect = ({ left, top }: { left: number; top: number }) => {
            const dx = anchorX < left ? left - anchorX : anchorX > left + tooltipW ? anchorX - (left + tooltipW) : 0;
            const dy = anchorY < top ? top - anchorY : anchorY > top + tooltipH ? anchorY - (top + tooltipH) : 0;
            return dx * dx + dy * dy;
          };
          const nonOverlappingPosition = candidatePositions.find((position) => !overlapsAnchor(position));
          const fallbackPosition = candidatePositions.reduce((best, candidate) =>
            distanceFromRect(candidate) > distanceFromRect(best) ? candidate : best
          );
          const { left, top } = nonOverlappingPosition ?? fallbackPosition;

          return (
            <div
              className="absolute z-[120] rounded-xl border border-border bg-card shadow-sm overflow-hidden pointer-events-none"
              style={{ left, top, width: tooltipW }}
            >
              <div
                className="flex h-6 items-center bg-muted/80 border-b border-border/70 px-3"
                style={{ height: tooltipHeaderH }}
              >
                <p className="text-xs font-medium text-foreground truncate">{title}</p>
              </div>
              <div
                style={{ padding: `${tooltipBodyPadY}px ${tooltipBodyPadX}px` }}
              >
                <div className="flex items-start gap-2">
                  <span
                    className="shrink-0 rounded-full overflow-hidden bg-muted flex items-center justify-center text-[10px] font-medium leading-none text-muted-foreground"
                    style={{ width: tooltipAvatarSize, height: tooltipAvatarSize }}
                  >
                    {tooltip.avatarUrl ? (
                      <img
                        src={tooltip.avatarUrl}
                        alt={`${avatarFallback} avatar`}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    ) : (
                      avatarFallback
                    )}
                  </span>
                  <div className="min-w-0 space-y-1">
                    {subtitle && (
                      <p
                        className="text-xs text-foreground whitespace-normal break-words"
                        style={{ lineHeight: `${tooltipLineHeight}px` }}
                      >
                        {subtitle}
                      </p>
                    )}
                    {meta && (
                      <p
                        className="text-xs text-muted-foreground whitespace-normal break-words"
                        style={{ lineHeight: `${tooltipLineHeight}px` }}
                      >
                        {meta}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Empty state */}
        {sortedNodes.length === 0 && activeBranches.length === 0 && !isLoading && (
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl border shadow-sm px-5 py-4 text-center max-w-md">
                <p className="text-sm text-foreground">
                  {sortedDirectCommits.length > 0
                    ? 'No non-default branches found to visualize.'
                    : 'No branches found.'}
                </p>
                {sortedDirectCommits.length > 0 && (
                  <p className="text-xs text-muted-foreground mt-1.5">
                    Main has commits, but there are no active topic branches yet.
                  </p>
                )}
              </div>
            </div>
        )}
      </div>

      {/* Bottom chrome: timeline controls — absolute so it stays inside the map
          container and respects visibility:hidden when the diff view is shown. */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 z-50">

        {/* Controls row */}
        <div
          className="flex items-center justify-between gap-4"
          style={{
            opacity: isLoading || !controlsReady ? 0 : 1,
            transition: 'opacity 0.4s ease',
          }}
        >
          <div className="flex items-center gap-2 min-w-0">
            {selectedVisibleCommitShas.length > 1 &&
              commitMergeTargetOptions.length > 1 &&
              selectedCommitTargetOption &&
              targetBranchForSelectedCommit && (
              <div className="flex items-center gap-2 shrink-0 bg-card border border-border rounded-full pl-3 pr-1 py-1">
                <span className="text-xs text-muted-foreground font-medium select-none">
                  merge to...
                </span>
                <div className="flex items-center gap-1.5">
                  {commitMergeTargetOptions.map((option) => {
                    const isActiveTarget = option.targetBranch === targetBranchForSelectedCommit;
                    return (
                      <button
                        key={`merge-target-${option.targetBranch}`}
                        onClick={() => setMergeTargetCommitSha(option.targetSha)}
                        className={`px-2 py-1 rounded-full text-xs leading-none select-none transition-colors ${
                          isActiveTarget
                            ? 'bg-primary/10 text-foreground'
                            : 'bg-muted/30 text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                        title={`Merge selected commits into ${option.targetBranch}`}
                      >
                        {option.targetBranch}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => void handleMergeSourcesIntoTarget(commitMergeSources, targetBranchForSelectedCommit)}
                  disabled={mergeInProgress || commitMergeSources.length === 0}
                  className="px-2.5 py-1 rounded-full text-xs leading-none select-none transition-opacity text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: USER_SELECTION_STROKE }}
                  title={
                    commitMergeSources.length > 0
                      ? `Merge ${commitMergeSources.length} commits into ${targetBranchForSelectedCommit}`
                      : 'No eligible source commits to merge'
                  }
                >
                  Confirm
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center justify-end gap-4">
            {!isPopoverWindow && (
              <div className="flex items-center gap-1 shrink-0 bg-card border border-border rounded-full p-1">
                <button
                  onClick={() => setOrientation('vertical')}
                  className={`px-2.5 py-1 rounded-full text-xs leading-none select-none transition-colors ${orientation === 'vertical'
                    ? 'bg-primary/10 text-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  title="Timeline runs top to bottom"
                >
                  Vertical
                </button>
                <button
                  onClick={() => setOrientation('horizontal')}
                  className={`px-2.5 py-1 rounded-full text-xs leading-none select-none transition-colors ${orientation === 'horizontal'
                    ? 'bg-primary/10 text-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  title="Timeline runs left to right"
                >
                  Horizontal
                </button>
              </div>
            )}
            {!isPopoverWindow && (
              <div className="flex items-center gap-2 shrink-0 bg-card border border-border rounded-full px-3 py-1">
                <span className="text-xs text-muted-foreground select-none">Guide lines</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showGuides}
                    onChange={(e) => setShowGuides(e.target.checked)}
                    aria-label="Toggle guide lines"
                    className="sr-only"
                  />
                  <span
                    className={`w-10 h-5 rounded-full border transition-colors flex items-center p-0.5 ${
                      showGuides ? 'bg-primary/10 border-primary/30' : 'bg-muted/30 border-border'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full bg-card shadow-sm transform transition-transform duration-200 ${
                        showGuides ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </span>
                </label>
              </div>
            )}
            {!isPopoverWindow && (
              <div className="flex items-center gap-2 shrink-0 bg-card border border-border rounded-full px-3 py-1">
                <span className="text-xs text-muted-foreground select-none">Row debug</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showRowDebugOverlay}
                    onChange={(e) => setShowRowDebugOverlay(e.target.checked)}
                    aria-label="Toggle row debug overlay"
                    className="sr-only"
                  />
                  <span
                    className={`w-10 h-5 rounded-full border transition-colors flex items-center p-0.5 ${
                      showRowDebugOverlay ? 'bg-primary/10 border-primary/30' : 'bg-muted/30 border-border'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full bg-card shadow-sm transform transition-transform duration-200 ${
                        showRowDebugOverlay ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </span>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Branch issues panel — slides in from right */}
      <div
        ref={errorPanelRef}
        className={`fixed right-4 top-14 bottom-6 w-72 flex flex-col bg-card/90 backdrop-blur-sm rounded-2xl border border-border shadow-lg z-40 transition-all duration-300 ease-in-out ${errorPanelOpen ? 'translate-x-0 opacity-100' : 'translate-x-[110%] opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 shrink-0">
          <span className="text-sm font-medium text-foreground">Branch issues</span>
          <button
            onClick={() => setErrorPanelOpen(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-2">
          {staleBranches.length > 0 && (
            <>
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium px-4 pt-3 pb-1">
                Stale branches
              </p>
              {staleBranches.map(b => (
                <div
                  key={b.name}
                  className="flex items-start gap-2.5 px-4 py-2.5"
                >
                  <span className="mt-0.5 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-foreground truncate">{b.name}</p>
                    <p className="text-[11px] text-muted-foreground">
                      {b.lastCommitAuthor ? `${b.lastCommitAuthor} · ` : ''}{fmtRelativeDate(b.lastCommitDate)}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
