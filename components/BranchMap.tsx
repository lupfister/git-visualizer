import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { Loader2, X } from 'lucide-react';
import { Branch, BranchCommitPreview, BranchPromptMeta, CheckedOutRef, DirectCommit, MergeNode, MergedPR, OpenPR } from '../types';
import { ViewMode } from './BranchMapView';
import {
  assignLanesWithParentOrder,
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
const AHEAD_LABEL_OFFSET_X = 10;
const MAIN_LABEL_OFFSET_X = 10;
const MAX_ACTIVE = 50;
const ZOOM_DEFAULT = 1;
const ZOOM_MIN = 1;
const ZOOM_MAX = 6;
const ZOOM_WHEEL_EXP_SENSITIVITY = 0.0025;
const ZOOM_WHEEL_DELTA_MAX_PX = 180;
/** Eased snap-to-bounds after zoom: duration scales with correction distance (ms). */
const ZOOM_SNAP_MS_MIN = 160;
const ZOOM_SNAP_MS_MAX = 360;
const ZOOM_SNAP_MS_PER_PX = 0.32;
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
const SVG_CONTENT_PADDING_BASE =  20;
const SVG_CONTENT_PADDING_VIEWPORT_REF_MIN = 360;
const SVG_CONTENT_PADDING_MAX = 320;
/** Full-bleed fill behind graph content (SVG user units; hex OK for SVG fills). */
const SVG_AREA_BG = '#e8f4fc';
const TIME_SCALE_DEFAULT = 0.5;
// Grid nodes render without clump boost, so grid spacing must match the un-boosted rect size
// or you'll see tiny gaps between nodes.
const GRID_NODE_RECT = commitRectSize(NODE_SIZE, 0);
// Grid spacing should match node bounds so nodes "kiss" instead of overlapping.
const GRID_ROW_GAP = GRID_NODE_RECT.height;
const GRID_LANE_WIDTH = GRID_NODE_RECT.width;
const GRID_LANE_OFFSET_X = 0;
const GRID_LANE_MIN_SEPARATION = 0;
const GRID_ROUTE_CORNER_R = 1;
const GRID_MERGE_EVENT_ROW_NUDGE = 0.001;
const LOCAL_UNPUSHED_GRAY = '#a8a29e';
const CANVAS_NEUTRAL_GRAY = '#D9D9D9';
const CANVAS_NEUTRAL_GRAY_HOVER = '#44403c';
const CANVAS_NEUTRAL_TEXT = '#1c1917';
const CANVAS_CLUMP_LABEL_GRAY = '#787878';
const CLUMP_COUNT_MAX = 99;
const CHECKED_OUT_AHEAD_OFFSET_WORLD = 120;
/** Ring around the commit that matches HEAD (SVG user units; hex OK for SVG). */
const CHECKED_OUT_RING_STROKE = '#2563eb';
const CHECKED_OUT_RING_STROKE_WIDTH = 2;
/** Space between node edge and inner edge of the ring. */
const CHECKED_OUT_RING_GAP = 2.5;
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

function estimateSvgTextWidth(text: string, fontSize = 10): number {
  return Math.ceil(text.length * fontSize * 0.56);
}

function shaMatchesGitRef(a: string | undefined | null, b: string | undefined | null): boolean {
  if (!a || !b) return false;
  return a === b || a.startsWith(b) || b.startsWith(a);
}

function truncatePrompt(text: string, max = 90): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max)}…`;
}

const COMMIT_TOOLTIP_PREVIEW_MAX = 120;
const COMMIT_CLUSTER_PREVIEW_MAX = 90;
const PROMPT_TOOLTIP_PREVIEW_MAX = 120;
const PROMPT_CLUSTER_PREVIEW_MAX = 90;

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
): MarkerCluster<T>[] {
  if (entries.length === 0) return [];

  const clusters: MarkerCluster<T>[] = [];
  let current: MarkerEntry<T>[] = [entries[0]];

  function flush() {
    if (current.length === 0) return;
    clusters.push({ x: current[0].x, y: current[0].y, entries: current });
  }

  for (let i = 1; i < entries.length; i += 1) {
    if (forkIndices.has(i - 1)) {
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

/** Axis-aligned hit rect for a collapsed clump stack (rects offset by +x, −y from anchor). */
function collapsedClumpHitRect(
  anchorX: number,
  anchorY: number,
  stackDepth: number,
  rectSize: { width: number; height: number },
  clumpStackOffset: number,
  padWorld: number
): { x: number; y: number; width: number; height: number } {
  const k = Math.max(0, stackDepth - 1);
  const w = rectSize.width + k * clumpStackOffset + padWorld * 2;
  const h = rectSize.height + k * clumpStackOffset + padWorld * 2;
  const cx = anchorX + (k * clumpStackOffset) / 2;
  const cy = anchorY - (k * clumpStackOffset) / 2;
  return { x: cx - w / 2, y: cy - h / 2, width: w, height: h };
}

function placeItemsEvenly<T>(items: T[], minX: number, maxX: number): Array<{ item: T; x: number }> {
  if (items.length === 0) return [];
  if (items.length === 1) return [{ item: items[0], x: maxX }];
  const span = Math.max(0, maxX - minX);
  return items.map((item, index) => ({
    item,
    x: minX + (span * index) / (items.length - 1),
  }));
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
}: BranchMapProps) {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);
  const [hoveredPR, setHoveredPR] = useState<number | null>(null);
  const [hoveredPRCommit, setHoveredPRCommit] = useState<PRCommitHover | null>(null);
  const [hoveredMergeNode, setHoveredMergeNode] = useState<{ y: number; node: MergeNode } | null>(null);
  const [prCommits, setPrCommits] = useState<Map<number, string[]>>(new Map());
  const [expandedClumps, setExpandedClumps] = useState<Map<string, ExpandedClumpState>>(() => new Map());
  const [zoom, setZoom] = useState(ZOOM_DEFAULT);
  const [orientation, setOrientation] = useState<OrientationMode>('vertical');
  const [showGuides, setShowGuides] = useState(true);
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
  const zoomStableTextElsRef = useRef<SVGTextElement[]>([]);
  const zoomStableRectElsRef = useRef<SVGRectElement[]>([]);
  const panUiSyncTimeoutRef = useRef<number | null>(null);
  const zoomUiSyncTimeoutRef = useRef<number | null>(null);
  /** After ctrl/cmd+wheel zoom stops, snap pan to finite bounds (ms idle). */
  const zoomWheelSnapTimeoutRef = useRef<number | null>(null);
  /** Cancels in-flight eased snap-to-bounds after zoom (RAF loop). */
  const zoomBoundsSnapCancelRef = useRef<(() => void) | null>(null);
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
    onCommitClick?.({ commitSha, branchName });
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
    let state = clumpAnchorStates.get(clusterKey);
    if (!state) {
      let seedX = 0;
      let seedY = 0;
      let matchedMembers = 0;
      for (const memberKey of memberKeys) {
        const memberState = clumpMemberAnchorStates.get(memberKey);
        if (!memberState) continue;
        seedX += memberState.x;
        seedY += memberState.y;
        matchedMembers += 1;
      }
      if (matchedMembers > 0) {
        seedX /= matchedMembers;
        seedY /= matchedMembers;
      } else {
        seedX = target.x;
        seedY = target.y;
      }
      state = {
        x: seedX,
        y: seedY,
        targetX: target.x,
        targetY: target.y,
        lastSeenRender: clumpRenderId,
      };
      clumpAnchorStates.set(clusterKey, state);
    } else {
      state.targetX = target.x;
      state.targetY = target.y;
      state.lastSeenRender = clumpRenderId;
    }
    for (const memberKey of memberKeys) {
      clumpMemberAnchorStates.set(memberKey, {
        x: state.x,
        y: state.y,
        lastSeenRender: clumpRenderId,
      });
    }
    return { x: state.x, y: state.y };
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

    // Strict finite bounds: clamp around the actual content bbox (plus small padding),
    // not the whole logical SVG, so you can't drift into vast empty space.
    const finiteWorld = finiteWorldBoundsRef.current;
    const hasFinite = finiteWorld.measured;

    const minXWorld = hasFinite ? finiteWorld.minX : 0;
    const maxXWorld = hasFinite ? finiteWorld.maxX : currentSvgWidth;
    const minYWorld = hasFinite ? finiteWorld.minY : 0;
    const maxYWorld = hasFinite ? finiteWorld.maxY : currentSvgHeight;

    const sceneMinX = currentGraphOffsetX + minXWorld * scale.x - CAMERA_CONTENT_PAD;
    const sceneMaxX = currentGraphOffsetX + maxXWorld * scale.x + CAMERA_CONTENT_PAD;
    const sceneMinY = currentGraphOffsetY + minYWorld * scale.y - CAMERA_CONTENT_PAD;
    const sceneMaxY = currentGraphOffsetY + maxYWorld * scale.y + CAMERA_CONTENT_PAD;

    const topInset = viewportTopInset ?? 0;
    const visibleH = viewportH - topInset;
    const sceneSpanX = sceneMaxX - sceneMinX;
    const sceneSpanY = sceneMaxY - sceneMinY;
    const xBounds = {
      min: viewportW - sceneMaxX,
      max: -sceneMinX,
    };
    const yBounds = {
      min: viewportH - sceneMaxY,
      max: topInset - sceneMinY,
    };

    // When zoomed out enough that the graph fits inside the viewport with extra margin,
    // snap pan so the content stays centered. Skip while space-drag panning so the gesture
    // still moves the map; the mouseup settle pass recenters when slack.
    const SLACK_EPS = 0.5;
    const allowSlackCenter = mode === 'hard' && !isPanningRef.current;
    let x: number;
    if (mode !== 'hard') {
      x = clampAxis(next.x, xBounds.min, xBounds.max);
    } else if (allowSlackCenter && sceneSpanX <= viewportW + SLACK_EPS) {
      x = viewportW / 2 - (sceneMinX + sceneMaxX) / 2;
    } else {
      x = clampAxis(next.x, xBounds.min, xBounds.max);
    }

    let y: number;
    if (mode !== 'hard') {
      y = clampAxis(next.y, yBounds.min, yBounds.max);
    } else if (allowSlackCenter && visibleH > 0 && sceneSpanY <= visibleH + SLACK_EPS) {
      y = (topInset + viewportH) / 2 - (sceneMinY + sceneMaxY) / 2;
    } else {
      y = clampAxis(next.y, yBounds.min, yBounds.max);
    }

    return { x, y };
  }

  function cancelZoomBoundsSnap() {
    zoomBoundsSnapCancelRef.current?.();
    zoomBoundsSnapCancelRef.current = null;
  }

  /** Returns true if a snap animation was started (caller should not sync pan state immediately). */
  function snapZoomPanToBounds(): boolean {
    cancelZoomBoundsSnap();
    const settled = clampPan(panRef.current, zoomRef.current, 'hard');
    if (
      Math.abs(settled.x - panRef.current.x) < 0.1 &&
      Math.abs(settled.y - panRef.current.y) < 0.1
    ) {
      return false;
    }
    const start = { x: panRef.current.x, y: panRef.current.y };
    const dx = settled.x - start.x;
    const dy = settled.y - start.y;
    const dist = Math.hypot(dx, dy);
    const durationMs = Math.min(
      ZOOM_SNAP_MS_MAX,
      Math.max(ZOOM_SNAP_MS_MIN, 90 + dist * ZOOM_SNAP_MS_PER_PX),
    );
    const startTime = performance.now();
    let rafId = 0;
    let cancelled = false;

    const cancelRun = () => {
      cancelled = true;
      if (rafId !== 0) cancelAnimationFrame(rafId);
      zoomBoundsSnapCancelRef.current = null;
    };
    zoomBoundsSnapCancelRef.current = cancelRun;

    const step = (now: number) => {
      if (cancelled) return;
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / durationMs);
      const eased = easeInOutCubic(t);
      if (t >= 1) {
        applyCamera(settled, zoomRef.current, true, true);
        zoomBoundsSnapCancelRef.current = null;
        return;
      }
      applyCamera(
        { x: start.x + dx * eased, y: start.y + dy * eased },
        zoomRef.current,
        false,
        false,
      );
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return true;
  }

  function scheduleZoomWheelSnap() {
    if (zoomWheelSnapTimeoutRef.current !== null) {
      clearTimeout(zoomWheelSnapTimeoutRef.current);
    }
    zoomWheelSnapTimeoutRef.current = window.setTimeout(() => {
      zoomWheelSnapTimeoutRef.current = null;
      snapZoomPanToBounds();
    }, 150);
  }

  function cancelZoomWheelSnapPending() {
    if (zoomWheelSnapTimeoutRef.current === null) return;
    clearTimeout(zoomWheelSnapTimeoutRef.current);
    zoomWheelSnapTimeoutRef.current = null;
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
      if (!snapZoomPanToBounds()) {
        syncUiState(true, true);
      }
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
    cancelZoomBoundsSnap();
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
    // Zoom ignores finite bounds during the gesture; wheel debounce / gesture end snaps.
    const nextPan = clampPan(
      {
        x: point.x - graphOffset.x - worldX * nextScale.x,
        y: point.y - graphOffset.y - worldY * nextScale.y,
      },
      nextZoom,
      'none'
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
  // - Ctrl/Cmd + wheel: zoom toward cursor when over the SVG lake; otherwise zoom toward viewport center
  // - plain wheel: inertial pan in both axes
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Use layout math for the SVG viewport (the blue lake), not `svg.getBoundingClientRect()`.
    // With `overflow: visible`, painted graph content can inflate the SVG's bbox to fill the
    // scroll area, which made every point look "inside" and defeated center zoom on margins.
    const zoomAnchorForClientPoint = (clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      const localX = clientX - rect.left;
      const localY = clientY - rect.top;
      const { x: panX, y: panY } = panRef.current;
      const go = graphOffsetRef.current;
      const { svgWidth: sw, svgHeight: sh } = cameraBoundsRef.current;
      const lakeLeft = panX + go.x;
      const lakeTop = panY + go.y;
      const overLake =
        sw > 0 &&
        sh > 0 &&
        localX >= lakeLeft &&
        localX <= lakeLeft + sw &&
        localY >= lakeTop &&
        localY <= lakeTop + sh;
      if (overLake) {
        return { x: localX, y: localY };
      }
      return { x: rect.width / 2, y: rect.height / 2 };
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
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
        scheduleZoomWheelSnap();
        return;
      }

      flushPendingZoomUiSync();
      if (zoomWheelSnapTimeoutRef.current !== null) {
        clearTimeout(zoomWheelSnapTimeoutRef.current);
        zoomWheelSnapTimeoutRef.current = null;
        snapZoomPanToBounds();
      }
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
      cancelZoomBoundsSnap();
      stopWheelInertia();
      stopPanSmoothing();
      setTooltip(null);
      markUserMovedCamera();
      gestureZoomBaseRef.current = zoomRef.current;
      const rect = el.getBoundingClientRect();
      const cx = e.clientX ?? rect.left + rect.width / 2;
      const cy = e.clientY ?? rect.top + rect.height / 2;
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
      cancelZoomWheelSnapPending();
      snapZoomPanToBounds();
      scheduleZoomUiSync(true);
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('gesturestart', onGestureStart as EventListener, { passive: false });
    el.addEventListener('gesturechange', onGestureChange as EventListener, { passive: false });
    el.addEventListener('gestureend', onGestureEnd as EventListener, { passive: false });
    return () => {
      cancelZoomBoundsSnap();
      if (zoomWheelSnapTimeoutRef.current !== null) {
        clearTimeout(zoomWheelSnapTimeoutRef.current);
        zoomWheelSnapTimeoutRef.current = null;
      }
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('gesturestart', onGestureStart as EventListener);
      el.removeEventListener('gesturechange', onGestureChange as EventListener);
      el.removeEventListener('gestureend', onGestureEnd as EventListener);
    };
  }, []);

  // Keep wheel inertia and RAF loops cleaned up.
  useEffect(() => {
    return () => {
      cancelZoomBoundsSnap();
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

  function handleCanvasMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as Element | null;
    const clickedBackground =
      target === scrollRef.current ||
      target === svgRef.current ||
      !!(target instanceof HTMLDivElement && target.parentElement === scrollRef.current);
    const canPan =
      e.button === 1 ||
      (e.button === 0 && (spacePressedRef.current || clickedBackground));
    if (!canPan || !scrollRef.current) return;
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
    })
    .slice(0, MAX_ACTIVE);
  const branchByName = new Map(activeBranches.map((b) => [b.name, b]));

  // Detect fresh-copy branches (worktrees): when multiple branches share the
  // exact same HEAD SHA, all but the oldest are fresh copies with no unique
  // commits and must not inherit merge nodes or other parent-branch artifacts.
  // Phase 1: same-head-sibling detection among active branches.
  // Phase 2 (after mergeNodeByMergedHeadSha) adds commitsAhead===0-with-no-merge-node.
  const freshCopyBranchNames = (() => {
    const headShaGroups = new Map<string, Branch[]>();
    for (const b of activeBranches) {
      if (!b.headSha) continue;
      const group = headShaGroups.get(b.headSha) ?? [];
      group.push(b);
      headShaGroups.set(b.headSha, group);
    }
    const names = new Set<string>();
    for (const group of headShaGroups.values()) {
      if (group.length < 2) continue;
      const sorted = [...group].sort((a, b) => {
        const aDate = a.createdDate ?? a.divergedFromDate ?? a.lastCommitDate;
        const bDate = b.createdDate ?? b.divergedFromDate ?? b.lastCommitDate;
        return aDate.localeCompare(bDate);
      });
      for (let i = 1; i < sorted.length; i++) {
        names.add(sorted[i].name);
      }
    }
    return names;
  })();

  const protectedMainForkShas = new Set<string>(
    activeBranches
      .filter((b) => !b.parentBranch || b.parentBranch === b.name || b.parentBranch === defaultBranch)
      .flatMap((b) => [b.createdFromSha, b.divergedFromSha].filter((sha): sha is string => !!sha))
  );

  const childBranchesByParent = new Map<string, Branch[]>();
  activeBranches.forEach((branch) => {
    const effectiveParent = (!branch.parentBranch || branch.parentBranch === branch.name)
      ? defaultBranch
      : branch.parentBranch;
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
    let bestIndex = -1;
    let bestDelta = Number.POSITIVE_INFINITY;
    for (let index = 0; index < branchTimes.length; index += 1) {
      const delta = Math.abs(branchTimes[index] - childForkTime);
      if (delta < bestDelta) {
        bestDelta = delta;
        bestIndex = index;
      }
    }
    return bestIndex;
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
    if (b.commitsAhead === 0 && b.headSha && !mergeNodeByMergedHeadSha.has(b.headSha)) {
      freshCopyBranchNames.add(b.name);
    }
  }

  const mergedBranchByHeadSha = new Map<string, Branch>();
  for (const branch of activeBranches) {
    if (branch.commitsAhead === 0 && branch.headSha && !freshCopyBranchNames.has(branch.name)) {
      mergedBranchByHeadSha.set(branch.headSha, branch);
    }
  }
  const sortedDirectCommits = [...directCommits].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const directCommitShaSet = new Set<string>(sortedDirectCommits.map((commit) => commit.fullSha));

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
  type GridClump = { lane: string; shas: string[]; earliestTime: number; rowIndex: number; key: string };
  const gridClumps: GridClump[] = [];
  const gridRowBySha = new Map<string, number>();
  {
    const mainForkIdx = new Set<number>();
    sortedDirectCommits.forEach((c, i) => {
      if (protectedMainForkShas.has(c.fullSha)) mainForkIdx.add(i);
    });

    {
      let buf: string[] = [];
      let t0 = 0;
      const flush = () => {
        if (buf.length === 0) return;
        gridClumps.push({ lane: 'main', shas: [...buf], earliestTime: t0, rowIndex: -1, key: `direct-clump-${buf[0]}-${buf[buf.length - 1]}` });
        buf = [];
      };
      sortedDirectCommits.forEach((c, i) => {
        if (buf.length === 0) t0 = new Date(c.date).getTime();
        buf.push(c.fullSha);
        if (mainForkIdx.has(i)) flush();
      });
      flush();
    }

    activeBranches.forEach((branch) => {
      const previews = (branchCommitPreviews[branch.name] ?? [])
        .filter((c) => c.kind !== 'branch-created')
        .sort((a, bx) => new Date(a.date).getTime() - new Date(bx.date).getTime());
      if (previews.length === 0) {
        if (branch.commitsAhead > 0) {
          const t = new Date(branch.lastCommitDate).getTime();
          gridClumps.push({ lane: branch.name, shas: [], earliestTime: t, rowIndex: -1, key: `commit-clump-${branch.name}-tip` });
        }
        return;
      }
      const branchTimes = previews.map((c) => new Date(c.date).getTime());
      const forkIdx = new Set<number>();
      (childBranchesByParent.get(branch.name) ?? []).forEach((child) => {
        const idx = branchPreviewIndexForChildFork(previews, branchTimes, child);
        if (idx >= 0) forkIdx.add(idx);
      });
      let buf: string[] = [];
      let t0 = 0;
      let startIdx = 0;
      const flushBranch = (endIdx: number) => {
        if (buf.length === 0) return;
        gridClumps.push({ lane: branch.name, shas: [...buf], earliestTime: t0, rowIndex: -1, key: `commit-clump-${branch.name}-${startIdx}-${endIdx}` });
        buf = [];
      };
      previews.forEach((c, i) => {
        if (buf.length === 0) { t0 = new Date(c.date).getTime(); startIdx = i; }
        buf.push(c.fullSha);
        if (forkIdx.has(i)) { flushBranch(i); }
      });
      flushBranch(previews.length - 1);
    });

    sortedNodes.forEach((node) => {
      if (directCommitShaSet.has(node.fullSha)) return;
      const t = mergeEventTimeByFullSha.get(node.fullSha) ?? new Date(node.date).getTime();
      gridClumps.push({ lane: 'main-merge', shas: [node.fullSha], earliestTime: t, rowIndex: -1, key: `merge-row-${node.fullSha}` });
    });

    gridClumps.sort((a, b) => a.earliestTime - b.earliestTime);

    let rowCursor = 0;
    for (const clump of gridClumps) {
      const isExpanded = expandedClumps.get(clump.key)?.isExpanded ?? false;
      clump.rowIndex = rowCursor;
      if (isExpanded && clump.shas.length > 1) {
        clump.shas.forEach((sha, i) => { gridRowBySha!.set(sha, rowCursor + i); });
        rowCursor += clump.shas.length;
      } else {
        clump.shas.forEach((sha) => { gridRowBySha!.set(sha, rowCursor); });
        rowCursor += 1;
      }
    }
  }

  const gridRowTimes = (() => {
    const times: number[] = [];
    for (const clump of gridClumps) {
      const isExpanded = expandedClumps.get(clump.key)?.isExpanded ?? false;
      if (isExpanded && clump.shas.length > 1) {
        for (let i = 0; i < clump.shas.length; i++) times.push(clump.earliestTime + i);
      } else {
        times.push(clump.earliestTime);
      }
    }
    return times;
  })();
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
      let lo = 0;
      let hi = gridEventPoints.length;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (gridEventPoints[mid].t < t) lo = mid + 1;
        else hi = mid;
      }
      if (lo <= 0) return gridEventPoints[0].x;
      if (lo >= gridEventPoints.length) return gridEventPoints[gridEventPoints.length - 1].x;
      const prev = gridEventPoints[lo - 1];
      const next = gridEventPoints[lo];
      return Math.abs(t - prev.t) <= Math.abs(next.t - t) ? prev.x : next.x;
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
    if (exact) return gridXForSha(exact.fullSha) ?? timeToX(exact.date);
    const prefix = previews.find(
      (commit) =>
        commit.fullSha.startsWith(sha) ||
        sha.startsWith(commit.fullSha) ||
        commit.sha.startsWith(sha) ||
        sha.startsWith(commit.sha)
    );
    if (prefix) return gridXForSha(prefix.fullSha) ?? timeToX(prefix.date);
    return null;
  }

  const mainCommitAnchors = [
    ...sortedDirectCommits.map((commit) => ({
      t: new Date(commit.date).getTime(),
      x: directXByFullSha.get(commit.fullSha) ?? timeToX(commit.date),
    })),
    ...sortedNodes.map((node) => ({
      t: new Date(node.date).getTime(),
      x: nodeXByFullSha.get(node.fullSha) ?? timeToX(node.date),
    })),
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
    const commits = (branchCommitPreviews[branchName] ?? []).filter(
      (commit) => commit.kind !== 'branch-created'
    );
    if (commits.length === 0) return null;
    const target = new Date(dateStr).getTime();
    if (!Number.isFinite(target)) return null;
    let bestPast: { delta: number; x: number } | null = null;
    let bestFuture: { delta: number; x: number } | null = null;
    for (const commit of commits) {
      const commitTime = new Date(commit.date).getTime();
      if (!Number.isFinite(commitTime)) continue;
      const commitX = gridXForSha(commit.fullSha) ?? timeToX(commit.date);
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

  function branchCreatedDate(b: Branch): string {
    return b.createdDate ?? b.divergedFromDate ?? b.lastCommitDate;
  }

  function branchCreatedMs(b: Branch): number {
    const t = new Date(branchCreatedDate(b)).getTime();
    return Number.isFinite(t) ? t : Number.POSITIVE_INFINITY;
  }

  function branchForkX(b: Branch): number {
    const hasNonDefaultParent =
      !!b.parentBranch && b.parentBranch !== b.name && b.parentBranch !== defaultBranch;
    const isParentDefault = !hasNonDefaultParent;

    // For merged branches, merge-base against default can collapse to branch HEAD.
    // Prefer the recorded branch-creation anchor first.
    // Skip for fresh-copy branches (worktrees) — they aren't actually merged.
    if (b.commitsAhead === 0 && !freshCopyBranchNames.has(b.name) && isParentDefault && b.createdDate) {
      const createdAnchorX =
        commitXForSha(b.createdFromSha) ??
        snapToMainCommitX(b.createdDate);
      if (createdAnchorX != null) return createdAnchorX;
      return timeToX(b.createdDate);
    }

    if (isParentDefault) {
      const anchoredMainForkX = commitXForSha(b.createdFromSha) ?? commitXForSha(b.divergedFromSha);
      if (anchoredMainForkX != null) return anchoredMainForkX;
      const snappedMainForkX = snapToMainCommitX(b.divergedFromDate ?? b.createdDate);
      if (snappedMainForkX != null) return snappedMainForkX;
    }

    if (hasNonDefaultParent && b.parentBranch) {
      const parentBranch = branchByName.get(b.parentBranch);
      const anchoredToParentHead =
        parentBranch && b.divergedFromSha && b.divergedFromSha === parentBranch.headSha
          ? branchTipX(parentBranch)
          : null;
      const anchoredParentForkX =
        anchoredToParentHead ??
        branchCommitXForSha(b.parentBranch, b.divergedFromSha);
      if (anchoredParentForkX != null) return anchoredParentForkX;
      const snappedParentForkX = snapToBranchCommitX(
        b.parentBranch,
        b.divergedFromDate ?? b.createdDate
      );
      if (snappedParentForkX != null) return snappedParentForkX;
      if (parentBranch) return branchTipX(parentBranch);
    }

    // For stacked branches, fork should snap to the parent divergence commit
    // so child lanes originate exactly from parent tips (no floating gap).
    if (hasNonDefaultParent && b.divergedFromDate) return timeToX(b.divergedFromDate);

    if (b.divergedFromDate) return timeToX(b.divergedFromDate);
    if (b.createdDate) return timeToX(b.createdDate);
    return timeToX(b.lastCommitDate);
  }

  function branchTipX(b: Branch): number {
    const forkX = branchForkX(b);
    const lastCommitX = (b.headSha ? gridXForSha(b.headSha) : undefined) ?? timeToX(b.lastCommitDate);
    const minTailDistance = GRID_EVENT_GAP;
    return Math.max(lastCommitX, forkX + minTailDistance);
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
    directXByFullSha.set(mergeNode.fullSha, forcedMergeX);
    mainCommitXBySha.set(mergeNode.fullSha, forcedMergeX);
  }

  function branchAheadCount(b: Branch): number {
    if (Object.prototype.hasOwnProperty.call(branchUniqueAheadCounts, b.name)) {
      return branchUniqueAheadCounts[b.name] ?? 0;
    }
    const previews = branchCommitPreviews[b.name];
    if (previews != null) return previews.filter((preview) => preview.kind !== 'branch-created').length;
    return b.commitsAhead;
  }

  // Canonical (logical) layout uses vertical time; orientation projection swaps axes when needed.
  const MAIN_LEFT_PAD = 0;
  const MAIN_TOP_PAD = 0;
  const mainX = MAIN_LEFT_PAD;
  const timelineMinX = leftPad;
  const timelineMaxX = activeBranches.reduce(
    (max, b) => Math.max(max, branchTipX(b)),
    mainEndX
  );
  const timelineSpanY = Math.max(1, timelineMaxX - timelineMinX);
  const mainStartY = MAIN_TOP_PAD + timelineSpanY; // oldest
  function timeCoordToY(timeCoordX: number): number {
    return mainStartY - (timeCoordX - timelineMinX);
  }
  const mainEndY = timeCoordToY(mainEndX); // newest anchor on main
  const mainActiveEndY = timeCoordToY(mainActiveEndX);
  const hasMainStaleTailY = Math.abs(mainActiveEndY - mainEndY) > 0.5;

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

  // Vertical extent of grid rows in Y (half node above/below row centers). Used so clipPath
  // does not slice nodes: using mainEndY/mainStartY as edges cut off the outer half of cells.
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

  // ── Assign branch lanes while preserving parent -> child ordering ─────────
  // Policy:
  // 1) If a branch has a visible parent branch, it must render to the right of that parent.
  // 2) Unrelated branches can shift rightward to satisfy (1).
  // 3) Lane occupancy still respects time separation to reduce label overlap.
  const BRANCH_LANE_MIN_SEPARATION_X = GRID_LANE_MIN_SEPARATION;
  const laneAssignments = assignLanesWithParentOrder(
    activeBranches.map((branch) => ({
      id: branch.name,
      createdOrder: branchCreatedMs(branch),
      startCoord: branchForkX(branch),
      endCoord: branchTipX(branch),
      parentId: branch.parentBranch,
    })),
    BRANCH_LANE_MIN_SEPARATION_X,
    defaultBranch
  );

  const laneWidth = gridLaneWidth;
  const laneOffsetX = GRID_LANE_OFFSET_X;

  function laneX(b: Branch): number {
    const lane = laneAssignments.get(b.name) ?? 0;
    return mainX + laneWidth * (lane + 1) + laneOffsetX;
  }

  const laneXByBranch = new Map<string, number>(
    activeBranches.map((b) => [b.name, laneX(b)])
  );

  function branchStartX(b: Branch): number {
    const parent = b.parentBranch;
    if (parent && parent !== defaultBranch) {
      const parentX = laneXByBranch.get(parent);
      if (typeof parentX === 'number') {
        return parentX;
      }
    }
    return mainX;
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
  finiteWorldBoundsRef.current = {
    minX: projectedContentBounds.minX + graphContentTranslateX,
    maxX: projectedContentBounds.maxX + graphContentTranslateX,
    minY: projectedContentBounds.minY + graphContentTranslateY,
    maxY: projectedContentBounds.maxY + graphContentTranslateY,
    measured: true,
  };

  useEffect(() => {
    if (viewportSize.width <= 0 || viewportSize.height <= 0) return;
    if (!snapZoomPanToBounds()) {
      syncUiState(true, true);
    }
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
      y: checkedOutIndicatorLocal.y + (checkedOutHasUncommittedChanges ? -CHECKED_OUT_AHEAD_OFFSET_WORLD : 0),
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

  const worldUnitsPerScreenPx = 1 / Math.max(layerCameraScale.x, 0.0001);
  const worldPx = (px: number) => px * worldUnitsPerScreenPx;
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
  const mainTimelineOpacity = hoveredPR !== null || hoveredBranch !== null ? 0.2 : 1;
  const timelineCanvasVisible = timelineRevealPhase !== 'hidden';
  const holdTimelineForInitialCenter =
    isLoading || (!hasInitialRevealDone && hasTimelineSeedData && timelineRevealPhase !== 'done' && !hasUserMovedCameraRef.current);

  const CLUMP_STACK_DEPTH_MAX = 4;
  const clumpStackOffset = worldPx(3);
  const clumpExpandMs = 260;
  const clumpExpandEasing = 'cubic-bezier(0.22, 1, 0.36, 1)';
  const clumpAnimStyle: React.CSSProperties = {
    transition: `transform ${clumpExpandMs}ms ${clumpExpandEasing}, opacity ${clumpExpandMs}ms ${clumpExpandEasing}`,
    willChange: 'transform, opacity',
  };

  const toggleClumpExpanded = (clumpKey: string) => {
    const existing = expandedClumps.get(clumpKey);
    const isExpanded = existing?.isExpanded ?? false;

    const existingCleanupTimer = clumpCleanupTimersRef.current.get(clumpKey);
    if (existingCleanupTimer != null) {
      window.clearTimeout(existingCleanupTimer);
      clumpCleanupTimersRef.current.delete(clumpKey);
    }

    if (isExpanded) {
      // Collapse: keep expanded timestamps around until the animation ends,
      // then remove them so grid rows disappear reliably.
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

  const gridClipBounds = {
    leftX: minXWorldForBounds,
    rightX: maxXWorldForBounds,
    topY: minYWorldForBounds,
    bottomY: maxYWorldForBounds,
  };

  const gridClipPathD = gridClipBounds
    ? [
      `M ${pathCoord(gridClipBounds.leftX, gridClipBounds.topY)}`,
      `L ${pathCoord(gridClipBounds.rightX, gridClipBounds.topY)}`,
      `L ${pathCoord(gridClipBounds.rightX, gridClipBounds.bottomY)}`,
      `L ${pathCoord(gridClipBounds.leftX, gridClipBounds.bottomY)}`,
      'Z',
    ].join(' ')
    : null;

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
            {gridClipPathD && (
              <clipPath id="grid-clip">
                <path d={gridClipPathD} />
              </clipPath>
            )}
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
            clipPath={gridClipPathD ? 'url(#grid-clip)' : undefined}
          >

          {/* ── Grid background (table-like lanes) ── */}
          {showGuides && (
            <g style={{ pointerEvents: 'none' }}>
              {(() => {
                const rawRowInfos = gridEventPoints
                  .map((point) => ({ rawTime: point.t, centerY: timeCoordToY(point.x) }))
                  .filter((info) => Number.isFinite(info.centerY));
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

                return (
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
                          stroke="#e7e5e4"
                          strokeOpacity={strokeOpacity}
                          strokeWidth={1}
                        />,
                        <path
                          key={`grid-row-bottom-${idx}`}
                          d={`M ${pathCoord(leftX, bottomYLine)} L ${pathCoord(rightX, bottomYLine)}`}
                          fill="none"
                          stroke="#e7e5e4"
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
                          stroke="#e7e5e4"
                          strokeOpacity={0.26}
                          strokeWidth={1}
                        />,
                        <path
                          key={`grid-col-right-${idx}`}
                          className="non-scaling-stroke"
                          d={`M ${pathCoord(rightXLine, topY)} L ${pathCoord(rightXLine, bottomY)}`}
                          fill="none"
                          stroke="#e7e5e4"
                          strokeOpacity={0.26}
                          strokeWidth={1}
                        />,
                      ];
                    })}
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
              stroke={CANVAS_NEUTRAL_GRAY}
              strokeWidth={1.5}
              pathLength={1}
              className={drawPathMainClass}
            />
            {hasMainStaleTailY && (
              <g className="main-stale-tail-glow">
                <path
                  d={`M ${pathCoord(mainX, mainActiveEndY)} L ${pathCoord(mainX, mainEndY)}`}
                  fill="none"
                  stroke={CANVAS_NEUTRAL_GRAY}
                  strokeWidth={1.5}
                  pathLength={1}
                  className={drawPathMainClass}
                />
              </g>
            )}

            <g className={fadeInInfoClass} style={{ '--delay': `${MAIN_DRAW_MS}ms` } as React.CSSProperties}>
              {/* Direct commits */}
              {(() => {
                const entries: MarkerEntry<DirectCommit>[] = sortedDirectCommits.map((commit) => {
                  const timeCoordX = directXByFullSha.get(commit.fullSha) ?? timeToX(commit.date);
                  const markerPoint = projectPoint(mainX, timeCoordToY(timeCoordX));
                  return { x: markerPoint.x, y: markerPoint.y, item: commit };
                });
                const latestMainCommitSha = entries[entries.length - 1]?.item.fullSha;
                const mainForkIndices = new Set<number>();
                entries.forEach((entry, idx) => {
                  if (protectedMainForkShas.has(entry.item.fullSha)) mainForkIndices.add(idx);
                });
                const clusters = clusterByForkPoints(entries, mainForkIndices);
                return clusters.map((cluster) => {
                  const count = cluster.entries.length;
                  const first = cluster.entries[0].item;
                  const last = cluster.entries[count - 1].item;
                  const countLabel = clumpCountLabel(count);
                  const clusterKey = `direct-clump-${first.fullSha}-${last.fullSha}`;
                  const clusterHasMainTip = cluster.entries.some(
                    (entry) => entry.item.fullSha === entries[entries.length - 1]?.item.fullSha
                  );
                  const memberKeys = cluster.entries.map((entry) => `direct:${entry.item.fullSha}`);
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
                        x={anchorX - rectSize.width / 2}
                        y={anchorY - rectSize.height / 2}
                        width={rectSize.width}
                        height={rectSize.height}
                        data-base-rx={rectSize.radius}
                        rx={rectSize.radius / Math.max(layerCameraScale.x, 0.0001)}
                        style={{ cursor: 'pointer' }}
                        fill={CANVAS_NEUTRAL_GRAY}
                        stroke="none"
                        strokeWidth={0}
                        onClick={(event) =>
                          handleCommitNodeClick(
                            event,
                            c.fullSha,
                            clusterHasMainTip ? defaultBranch : undefined,
                          )
                        }
                        onDoubleClick={(event) => event.stopPropagation()}
                        onMouseEnter={() =>
                          setTooltip({
                            x: anchorX,
                            y: anchorY,
                            lines: [`Commit ${c.sha}`, label, `@${c.author} · ${fmtTooltipDate(c.date)}`],
                            avatarFallback: c.author?.charAt(0).toUpperCase() || '?',
                          })
                        }
                        onMouseLeave={() => setTooltip(null)}
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
                  const stackDepth = Math.min(CLUMP_STACK_DEPTH_MAX, count);
                  const rectSize = nodeRectSize(count);
                  const localRect = commitRectSize(scaledNodeSize, 0);
                  const collapseIconSize = Math.max(12, Math.min(localRect.width, localRect.height) * 0.55);
                  const expandedXs = cluster.entries.map((e) => e.x);
                  const expandedYs = cluster.entries.map((e) => e.y);
                  const expandedMaxX = Math.max(...expandedXs) + localRect.width / 2;
                  const expandedMinY = Math.min(...expandedYs) - localRect.height / 2;
                  const collapseIconX = expandedMaxX - collapseIconSize - 2;
                  const collapseIconY = expandedMinY + 2;

                  const firstTime = new Date(first.date).getTime();
                  const lastTime = new Date(last.date).getTime();
                  const rangeLine = firstTime === lastTime
                    ? fmtTooltipDate(last.date)
                    : `${fmtTooltipDate(first.date)} → ${fmtTooltipDate(last.date)}`;
                  const latestCommitMessage = last.message
                    ? truncatePrompt(last.message, COMMIT_CLUSTER_PREVIEW_MAX)
                    : 'on main';

                  return (
                    <g key={clusterKey}>
                      {/* Collapsed: draw a stack. Expanded: animate members out. */}
                      {!isExpanded && (
                        <g style={{ pointerEvents: 'none' }}>
                          {Array.from({ length: stackDepth }, (_, i) => {
                            const depth = stackDepth - 1 - i;
                            const dx = depth * clumpStackOffset;
                            const dy = -depth * clumpStackOffset;
                            return (
                              <g
                                key={`stack-${i}`}
                                transform={`translate(${anchorX + dx} ${anchorY + dy})`}
                                opacity={0.85 - depth * 0.12}
                              >
                                <rect
                                  className="branch-map-commit-rect"
                                  x={-rectSize.width / 2}
                                  y={-rectSize.height / 2}
                                  width={rectSize.width}
                                  height={rectSize.height}
                                  data-base-rx={rectSize.radius}
                                  rx={rectSize.radius / Math.max(layerCameraScale.x, 0.0001)}
                                  fill={CANVAS_NEUTRAL_GRAY}
                                />
                              </g>
                            );
                          })}
                          <text
                            x={anchorX}
                            y={anchorY}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            data-base-font-size={nodeLabelFontSize(scaledNodeSize, count)}
                            fontSize={nodeLabelFontSize(scaledNodeSize, count) / Math.max(layerCameraScale.x, 0.0001)}
                            fill={CANVAS_CLUMP_LABEL_GRAY}
                            fontWeight={600}
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
                          stackDepth,
                          rectSize,
                          clumpStackOffset,
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
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleClumpExpanded(clusterKey); }}
                            onDoubleClick={(event) => event.stopPropagation()}
                            onMouseEnter={() =>
                              setTooltip({
                                x: anchorX,
                                y: anchorY,
                                lines: [`${count} commits`, latestCommitMessage, rangeLine],
                                avatarFallback: last.author?.charAt(0).toUpperCase() || '?',
                              })
                            }
                            onMouseLeave={() => setTooltip(null)}
                          />
                        );
                      })()}

                      {isExpanded && (
                        <g>
                          {cluster.entries.map((entry, idx) => {
                            const c = entry.item;
                            const label = truncatePrompt(c.message, COMMIT_TOOLTIP_PREVIEW_MAX);
                            const collapsedDx = Math.min(idx, stackDepth - 1) * clumpStackOffset;
                            const collapsedDy = -Math.min(idx, stackDepth - 1) * clumpStackOffset;
                            const from = { x: anchorX + collapsedDx, y: anchorY + collapsedDy };
                            const to = { x: entry.x, y: entry.y };
                            const at = phase === 'collapsing'
                              ? { x: to.x + (from.x - to.x) * phaseEased, y: to.y + (from.y - to.y) * phaseEased }
                              : phase === 'expanding'
                                ? { x: from.x + (to.x - from.x) * phaseEased, y: from.y + (to.y - from.y) * phaseEased }
                                : phase === 'collapsed'
                                  ? from
                                  : to;
                            const commitKey = `direct:${c.fullSha}`;
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
                                  x={-localRect.width / 2}
                                  y={-localRect.height / 2}
                                  width={localRect.width}
                                  height={localRect.height}
                                  data-base-rx={localRect.radius}
                                  rx={localRect.radius / Math.max(layerCameraScale.x, 0.0001)}
                                  fill={CANVAS_NEUTRAL_GRAY}
                                  stroke="none"
                                  strokeWidth={0}
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
                                  onMouseEnter={() =>
                                    setTooltip({
                                      x: entry.x,
                                      y: entry.y,
                                      lines: [`Commit ${c.sha}`, label, `@${c.author} · ${fmtTooltipDate(c.date)}`],
                                      avatarFallback: c.author?.charAt(0).toUpperCase() || '?',
                                    })
                                  }
                                  onMouseLeave={() => setTooltip(null)}
                                />
                              </g>
                            );
                          })}
                          {phase === 'expanded' && (
                            <>
                              {phase === 'expanded' && (
                                <>
                                  {/* Contextual collapse icon (so expanded stacks can be re-collapsed). */}
                                  <g
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
                                      x={collapseIconX}
                                      y={collapseIconY}
                                      width={collapseIconSize}
                                      height={collapseIconSize}
                                      rx={collapseIconSize * 0.35}
                                      fill={CANVAS_NEUTRAL_GRAY}
                                      stroke={CANVAS_NEUTRAL_TEXT}
                                      strokeWidth={1}
                                    />
                                    <path
                                      d={`M ${collapseIconX + collapseIconSize * 0.28} ${collapseIconY + collapseIconSize / 2} L ${collapseIconX + collapseIconSize * 0.72} ${collapseIconY + collapseIconSize / 2}`}
                                      stroke={CANVAS_NEUTRAL_TEXT}
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                    />
                                  </g>
                                </>
                              )}
                            </>
                          )}
                        </g>
                      )}
                    </g>
                  );
                });
              })()}
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
            {activeBranches.map((b) => {
              const forkTimeX = branchForkX(b);
              const forkY = timeCoordToY(forkTimeX);
              const lanePosX = laneX(b);
              const startX = branchStartX(b);
              const isFreshCopy = freshCopyBranchNames.has(b.name);
              const isMergedBranch = b.commitsAhead === 0 && !isFreshCopy;
              const isHovered = hoveredBranch === b.name;
              const isLocalBranch = b.remoteSyncStatus !== 'on-github';

              const isFocusedError = focusedErrorBranch?.name === b.name;
              const focusedErrorColor = '#d97706';
              const neutralColor = CANVAS_NEUTRAL_GRAY;
              const color = isFocusedError ? focusedErrorColor : neutralColor;
              const strokeWidth = isHovered ? 2 : isFocusedError ? 2 : 1.5;
              const defaultStrokeColor = isHovered ? CANVAS_NEUTRAL_GRAY_HOVER : color;

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
              const branchLineTipY = commitTipY;
              const routeCornerR = GRID_ROUTE_CORNER_R;
              const mergeTargetX = mainX;
              const mergeTargetY = mergeNodeTimeX != null ? timeCoordToY(mergeNodeTimeX) : null;
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

              const branchCommits = branchCommitPreviews[b.name] ?? [];
              const hasPreviewData = Object.prototype.hasOwnProperty.call(branchCommitPreviews, b.name);
              const visibleBranchCommits = hasPreviewData
                ? branchCommits.filter((commit) => commit.kind !== 'branch-created')
                : branchCommits;
              const commitCount = hasPreviewData ? visibleBranchCommits.length : b.commitsAhead;
              const displayedCommits = hasPreviewData
                ? [...visibleBranchCommits.slice(0, commitCount)].sort(
                  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
                )
                : [];
              const minCommitTimeX = forkTimeX + GRID_EVENT_GAP;
              const maxCommitTimeX = Math.max(minCommitTimeX, commitTipTimeX);
              const commitItems: Array<BranchCommitPreview | undefined> = hasPreviewData
                ? displayedCommits
                : Array.from({ length: commitCount }, () => undefined);
              const headCommitIndex = hasPreviewData
                ? commitItems.findIndex((item) => item?.fullSha === b.headSha)
                : -1;
              let commitDots = hasPreviewData
                ? commitItems.map((commit) => {
                  const shaX = commit?.fullSha ? gridXForSha(commit.fullSha) : undefined;
                  const rawX = shaX ?? timeToX(commit?.date ?? b.lastCommitDate);
                  const x = Math.max(minCommitTimeX, Math.min(maxCommitTimeX, rawX));
                  return { y: timeCoordToY(x), commit };
                })
                : placeItemsEvenly(commitItems, minCommitTimeX, maxCommitTimeX).map((entry) => ({
                  y: timeCoordToY(entry.x),
                  commit: entry.item,
                }));
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
                const anchor = commitDots[anchorIndex];
                if (anchor) {
                  const branchCommitEndY = timeCoordToY(commitTipTimeX);
                  commitDots[anchorIndex] = { ...anchor, y: branchCommitEndY };
                }
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
              const localSegmentDashPattern = `${0.1} ${6}`;
              const strokeColor =
                fullBranchShouldUseLocalGray && !isFocusedError && !isHovered
                  ? LOCAL_UNPUSHED_GRAY
                  : defaultStrokeColor;
              const promptMarkersRaw = branchPromptMeta[b.name]?.markers ?? [];
              const minPromptX = minCommitTimeX;
              const maxPromptX = maxCommitTimeX;
              const promptSeeds = [...promptMarkersRaw]
                .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
              const promptMarkers = promptSeeds.map((marker) => {
                const rawX = timeToX(marker.timestamp);
                const x = Math.max(minPromptX, Math.min(maxPromptX, rawX));
                return {
                  y: timeCoordToY(x),
                  marker,
                };
              });
              const commitDotEntries: MarkerEntry<{ index: number; commit?: BranchCommitPreview }>[] =
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
                const previews = (branchCommitPreviews[b.name] ?? [])
                  .filter((c) => c.kind !== 'branch-created')
                  .sort((a, bx) => new Date(a.date).getTime() - new Date(bx.date).getTime());
                const branchTimes = previews.map((c) => new Date(c.date).getTime());
                branchChildBranches.forEach((child) => {
                  const idx = branchPreviewIndexForChildFork(previews, branchTimes, child);
                  if (idx >= 0) branchForkIndices.add(idx);
                });
              }
              const commitDotClusters = clusterByForkPoints(commitDotEntries, branchForkIndices);
              const promptMarkerEntries: MarkerEntry<{ marker: typeof promptMarkers[number]['marker']; index: number }>[] =
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

              const brDelay = branchDelayMs.get(b.name) ?? 0;

              const hasOpenPR = openPRBranchNames.has(b.name);
              const daysSinceCommit = (Date.now() - new Date(b.lastCommitDate).getTime()) / 86400000;
              const showClockIcon = hasOpenPR && daysSinceCommit >= 60;
              const nameAnchor = projectPoint(lanePosX, forkY);
              const nameDx = isHorizontal ? 24 : 20;
              const nameDy = isHorizontal ? -20 : -12;
              const namePoint = { x: nameAnchor.x + nameDx, y: nameAnchor.y + nameDy };
              const clockPoint = { x: namePoint.x + 10, y: namePoint.y };
              const branchGroupOpacity =
                isFocusedError ? 1 : hoveredBranch !== null && !isHovered ? 0.12 : 1;

              return (
                <g
                  key={b.name}
                  onMouseEnter={() => setHoveredBranch(b.name)}
                  onMouseLeave={() => setHoveredBranch(null)}
                  style={{ opacity: branchGroupOpacity, transition: 'opacity 0.15s' }}
                >
                  {/* Invisible wide hit target to make hover/click easier on thin SVG strokes */}
                  <path
                    d={curvePath}
                    fill="none"
                    stroke="transparent"
                    strokeWidth={branchHitStrokeWidth}
                    style={{ pointerEvents: 'stroke' }}
                  />

                  {/* Branch path — draws in. key="arc" keeps the DOM node stable so the
                      CSS animation is never restarted when sibling elements change. */}
                  <path
                    key="arc"
                    d={curvePath}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    pathLength={fullBranchShouldUseLocalGray ? undefined : 1}
                    className={drawPathArcClass}
                    style={{
                      '--delay': `${brDelay}ms`,
                      transition: 'stroke 0.12s ease',
                      ...(fullBranchShouldUseLocalGray
                        ? { strokeDasharray: localSegmentDashPattern, strokeLinecap: 'round' }
                        : {}),
                    } as React.CSSProperties}
                  />
                  {mergeBackPath && (
                    <path
                      d={mergeBackPath}
                      fill="none"
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
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
                      stroke={isHovered ? CANVAS_NEUTRAL_GRAY_HOVER : LOCAL_UNPUSHED_GRAY}
                      strokeWidth={strokeWidth}
                      className={drawPathArcClass}
                      style={{
                        '--delay': `${brDelay}ms`,
                        strokeDasharray: localSegmentDashPattern,
                        strokeLinecap: 'round',
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
                      const count = realCommitEntries.length;
                      const firstEntry = cluster.entries[0];
                      const lastEntry = cluster.entries[cluster.entries.length - 1];
                      const clusterKey = `commit-clump-${b.name}-${firstEntry.item.index}-${lastEntry.item.index}`;
                      const memberKeys = cluster.entries.map((entry) => {
                        const commitSha = entry.item.commit?.fullSha;
                        return commitSha
                          ? `branch-commit:${b.name}:${commitSha}`
                          : `branch-commit:${b.name}:slot-${entry.item.index}`;
                      });
                      const animatedAnchor = resolveAnimatedClumpAnchor(
                        clusterKey,
                        { x: cluster.x, y: cluster.y },
                        memberKeys
                      );
                      const anchorX = animatedAnchor.x;
                      const anchorY = animatedAnchor.y;
                    const dotShouldUseLocalGray =
                      fullBranchShouldUseLocalGray ||
                      cluster.entries.every((entry) => localCommitDotIndices.has(entry.item.index));
                    const dotFill = dotShouldUseLocalGray
                      ? LOCAL_UNPUSHED_GRAY
                      : isFocusedError
                        ? focusedErrorColor
                        : CANVAS_NEUTRAL_GRAY;
                    const clusterHasBranchTip =
                      branchEndDotIndex != null &&
                      cluster.entries.some((entry) => entry.item.index === branchEndDotIndex);

                    if (count <= 1) {
                      const commitEntry = realCommitEntries[0] ?? lastEntry;
                      const commit = commitEntry.item.commit;
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
                        const isGhostRect = isFreshCopy;

                        return (
                          <rect
                            key={clusterKey}
                            className="branch-map-commit-rect"
                            x={anchorX - rectSize.width / 2}
                            y={anchorY - rectSize.height / 2}
                            width={rectSize.width}
                            height={rectSize.height}
                            data-base-rx={rectSize.radius}
                            rx={rectSize.radius / Math.max(layerCameraScale.x, 0.0001)}
                            style={{ cursor: 'pointer' }}
                            fill={isGhostRect ? 'none' : dotFill}
                            stroke={isGhostRect ? LOCAL_UNPUSHED_GRAY : 'none'}
                            strokeWidth={isGhostRect ? 1.2 : 0}
                            strokeDasharray={isGhostRect ? '3 3' : undefined}
                            onClick={(event) =>
                              handleCommitNodeClick(
                                event,
                                targetCommitSha,
                                clusterHasBranchTip ? b.name : undefined,
                              )
                            }
                            onDoubleClick={(event) => event.stopPropagation()}
                            onMouseEnter={() =>
                              setTooltip({
                                x: anchorX,
                                y: anchorY,
                                lines: [
                                  `Commit ${tooltipSha}`,
                                  tooltipMessage
                                    ? truncatePrompt(tooltipMessage, COMMIT_TOOLTIP_PREVIEW_MAX)
                                    : `@${tooltipAuthor}`,
                                  `@${tooltipAuthor} · ${fmtTooltipDate(tooltipDate)}`,
                                ],
                                avatarUrl: showBranchAvatar ? b.lastCommitAuthorAvatar : undefined,
                                avatarFallback: tooltipAuthor?.charAt(0).toUpperCase() || '?',
                              })
                            }
                            onMouseLeave={() => setTooltip(null)}
                          />
                        );
                      }

                      const firstRealEntry = realCommitEntries[0] ?? firstEntry;
                      const lastRealEntry = realCommitEntries[realCommitEntries.length - 1] ?? lastEntry;
                      const firstDate = firstRealEntry.item.commit?.date ?? b.lastCommitDate;
                      const lastDate = lastRealEntry.item.commit?.date ?? b.lastCommitDate;
                      const dateRangeLabel = new Date(firstDate).getTime() === new Date(lastDate).getTime()
                        ? fmtTooltipDate(lastDate)
                        : `${fmtTooltipDate(firstDate)} → ${fmtTooltipDate(lastDate)}`;
                      const latestAuthor = lastRealEntry.item.commit?.author ?? b.lastCommitAuthor;
                      const latestCommitMessage = lastRealEntry.item.commit?.message
                        ? truncatePrompt(lastRealEntry.item.commit.message, COMMIT_CLUSTER_PREVIEW_MAX)
                        : `on ${b.name}`;

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
                      const stackDepth = Math.min(CLUMP_STACK_DEPTH_MAX, count);
                      const rectSize = nodeRectSize(count);
                      // Expanded members represent single commits in grid layout.
                      const localRect = commitRectSize(scaledNodeSize, 0);
                      const collapseIconSize = Math.max(12, Math.min(localRect.width, localRect.height) * 0.55);
                      const expandedXs = realCommitEntries.map((e) => e.x);
                      const expandedYs = realCommitEntries.map((e) => e.y);
                      const expandedMaxX = Math.max(...expandedXs) + localRect.width / 2;
                      const expandedMinY = Math.min(...expandedYs) - localRect.height / 2;
                      const collapseIconX = expandedMaxX - collapseIconSize - 2;
                      const collapseIconY = expandedMinY + 2;

                      return (
                        <g key={clusterKey}>
                          {!isExpanded && (
                            <g style={{ pointerEvents: 'none' }}>
                              {Array.from({ length: stackDepth }, (_, i) => {
                                const depth = stackDepth - 1 - i;
                                const dx = depth * clumpStackOffset;
                                const dy = -depth * clumpStackOffset;
                                return (
                                  <g
                                    key={`stack-${i}`}
                                    transform={`translate(${anchorX + dx} ${anchorY + dy})`}
                                    opacity={0.85 - depth * 0.12}
                                  >
                                    <rect
                                      className="branch-map-commit-rect"
                                      x={-rectSize.width / 2}
                                      y={-rectSize.height / 2}
                                      width={rectSize.width}
                                      height={rectSize.height}
                                      data-base-rx={rectSize.radius}
                                      rx={rectSize.radius / Math.max(layerCameraScale.x, 0.0001)}
                                      fill={dotFill}
                                    />
                                  </g>
                                );
                              })}
                              <text
                                x={anchorX}
                                y={anchorY}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                data-base-font-size={nodeLabelFontSize(scaledNodeSize, count)}
                                fontSize={nodeLabelFontSize(scaledNodeSize, count) / Math.max(layerCameraScale.x, 0.0001)}
                                fill={CANVAS_CLUMP_LABEL_GRAY}
                                fontWeight={600}
                              >
                                {clumpCountLabel(count)}
                              </text>
                            </g>
                          )}

                          {/* Collapsed-only overlay hit target (on top) so clicks never fall through. */}
                          {!isExpanded && (() => {
                            const pad = worldPx(6);
                            const hit = collapsedClumpHitRect(
                              anchorX,
                              anchorY,
                              stackDepth,
                              rectSize,
                              clumpStackOffset,
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
                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleClumpExpanded(clusterKey); }}
                                onDoubleClick={(event) => event.stopPropagation()}
                                onMouseEnter={() =>
                                  setTooltip({
                                    x: anchorX,
                                    y: anchorY,
                                    lines: [`${count} commits`, latestCommitMessage, dateRangeLabel],
                                    avatarFallback: latestAuthor?.charAt(0).toUpperCase() || '?',
                                  })
                                }
                                onMouseLeave={() => setTooltip(null)}
                              />
                            );
                          })()}

                          {isExpanded && (
                            <g>
                              {realCommitEntries.map((entry, idx) => {
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

                                const collapsedDx = Math.min(idx, stackDepth - 1) * clumpStackOffset;
                                const collapsedDy = -Math.min(idx, stackDepth - 1) * clumpStackOffset;
                                const from = { x: anchorX + collapsedDx, y: anchorY + collapsedDy };
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
                                    key={`branch-commit:${b.name}:${commit.fullSha}`}
                                    transform={`translate(${at.x} ${at.y})`}
                                    style={{ ...clumpAnimStyle, pointerEvents: phase === 'expanded' ? 'auto' : 'none' }}
                                    opacity={memberOpacity}
                                  >
                                    <rect
                                      className="branch-map-commit-rect"
                                      x={-localRect.width / 2}
                                      y={-localRect.height / 2}
                                      width={localRect.width}
                                      height={localRect.height}
                                      data-base-rx={localRect.radius}
                                      rx={localRect.radius / Math.max(layerCameraScale.x, 0.0001)}
                                      fill={dotFill}
                                      stroke="none"
                                      strokeWidth={0}
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
                                      onMouseEnter={() =>
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
                                        })
                                      }
                                      onMouseLeave={() => setTooltip(null)}
                                    />

                                    {isCheckedOutCommit && (
                                      <>
                                        <rect
                                          className="branch-map-commit-rect"
                                          x={-localRect.width / 2 - CHECKED_OUT_RING_GAP}
                                          y={-localRect.height / 2 - CHECKED_OUT_RING_GAP}
                                          width={localRect.width + 2 * CHECKED_OUT_RING_GAP}
                                          height={localRect.height + 2 * CHECKED_OUT_RING_GAP}
                                          data-base-rx={localRect.radius + CHECKED_OUT_RING_GAP}
                                          rx={
                                            (localRect.radius + CHECKED_OUT_RING_GAP) /
                                            Math.max(layerCameraScale.x, 0.0001)
                                          }
                                          fill="none"
                                          stroke={CHECKED_OUT_RING_STROKE}
                                          strokeWidth={CHECKED_OUT_RING_STROKE_WIDTH}
                                          vectorEffect="non-scaling-stroke"
                                          pointerEvents="none"
                                        />
                                      </>
                                    )}
                                  </g>
                                );
                              })}
                              {/* Contextual collapse icon (so expanded stacks can be re-collapsed). */}
                              <g
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
                                  x={collapseIconX}
                                  y={collapseIconY}
                                  width={collapseIconSize}
                                  height={collapseIconSize}
                                  rx={collapseIconSize * 0.35}
                                  fill={CANVAS_NEUTRAL_GRAY}
                                  stroke={CANVAS_NEUTRAL_TEXT}
                                  strokeWidth={1}
                                />
                                <path
                                  d={`M ${collapseIconX + collapseIconSize * 0.28} ${collapseIconY + collapseIconSize / 2} L ${collapseIconX + collapseIconSize * 0.72} ${collapseIconY + collapseIconSize / 2}`}
                                  stroke={CANVAS_NEUTRAL_TEXT}
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                />
                              </g>
                            </g>
                          )}
                        </g>
                      );
                    })}
                    {/* Ghost outline for fresh-copy branches with no commits */}
                    {isFreshCopy && commitDots.length === 0 && (() => {
                      const ghostRect = commitRectSize(scaledNodeSize);
                      const tipPoint = projectPoint(lanePosX, timeCoordToY(commitTipTimeX));
                      // Render a dashed-outline rect at the branch tip.
                      // Fresh-copy branches have no real commit nodes, so we must not
                      // fabricate any "HEAD of ___" commit previews.
                      return (
                        <rect
                          key={`ghost-${b.name}`}
                          className="branch-map-commit-rect"
                          x={tipPoint.x - ghostRect.width / 2}
                          y={tipPoint.y - ghostRect.height / 2}
                          width={ghostRect.width}
                          height={ghostRect.height}
                          data-base-rx={ghostRect.radius}
                          rx={ghostRect.radius / Math.max(layerCameraScale.x, 0.0001)}
                          fill="none"
                          stroke={LOCAL_UNPUSHED_GRAY}
                          strokeWidth={1.2}
                          strokeDasharray="3 3"
                          style={{ pointerEvents: 'none' }}
                        />
                      );
                    })()}

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
            })}
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
                  stroke="#2563eb"
                  strokeWidth={1.5}
                  pathLength={1}
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            );
          })()}

          {/* Global node overlay so commit/prompt nodes always paint above branch lines. */}
          <g
            style={{ opacity: hoveredPR !== null ? 0.2 : 1, transition: 'opacity 0.15s', pointerEvents: 'none' }}
          >
            {activeBranches.map((b) => {
              const forkTimeX = branchForkX(b);
              const lanePosX = laneX(b);
              const isFreshCopy = freshCopyBranchNames.has(b.name);
              const isMergedBranch = b.commitsAhead === 0 && !isFreshCopy;
              const mergeNodeForBranch = isMergedBranch
                ? mergeNodeByMergedHeadSha.get(b.headSha)
                : undefined;
              const mergeNodeTimeX = mergeNodeForBranch
                ? mergeJunctionTimeX(mergeNodeForBranch)
                : null;
              const baseTipTimeX = branchTipX(b);
              const tipTimeX = mergeNodeTimeX != null ? Math.max(baseTipTimeX, mergeNodeTimeX) : baseTipTimeX;
              const commitTipTimeX = isMergedBranch ? baseTipTimeX : tipTimeX;

              const isHovered = hoveredBranch === b.name;
              const isLocalBranch = b.remoteSyncStatus !== 'on-github';
              const isFocusedError = focusedErrorBranch?.name === b.name;
              const focusedErrorColor = '#d97706';
              const branchGroupOpacity =
                isFocusedError ? 1 : hoveredBranch !== null && !isHovered ? 0.12 : 1;

              const branchCommits = branchCommitPreviews[b.name] ?? [];
              const hasPreviewData = Object.prototype.hasOwnProperty.call(branchCommitPreviews, b.name);
              const visibleBranchCommits = hasPreviewData
                ? branchCommits.filter((commit) => commit.kind !== 'branch-created')
                : branchCommits;
              const commitCount = hasPreviewData ? visibleBranchCommits.length : b.commitsAhead;
              const displayedCommits = hasPreviewData
                ? [...visibleBranchCommits.slice(0, commitCount)].sort(
                  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
                )
                : [];
              const minCommitTimeX = forkTimeX + GRID_EVENT_GAP;
              const maxCommitTimeX = Math.max(minCommitTimeX, commitTipTimeX);
              const commitItems: Array<BranchCommitPreview | undefined> = hasPreviewData
                ? displayedCommits
                : Array.from({ length: commitCount }, () => undefined);
              let commitDots = hasPreviewData
                ? commitItems.map((commit) => {
                  const shaX = commit?.fullSha ? gridXForSha(commit.fullSha) : undefined;
                  const rawX = shaX ?? timeToX(commit?.date ?? b.lastCommitDate);
                  const x = Math.max(minCommitTimeX, Math.min(maxCommitTimeX, rawX));
                  return { y: timeCoordToY(x), commit };
                })
                : placeItemsEvenly(commitItems, minCommitTimeX, maxCommitTimeX).map((entry) => ({
                  y: timeCoordToY(entry.x),
                  commit: entry.item,
                }));
              const realCommitDotIndices = commitItems.reduce<number[]>((acc, item, index) => {
                if (item?.kind !== 'branch-created') acc.push(index);
                return acc;
              }, []);
              let branchEndDotIndex: number | null = null;
              if (realCommitDotIndices.length > 0) {
                const headCommitIndex = hasPreviewData
                  ? commitItems.findIndex((item) => item?.fullSha === b.headSha)
                  : -1;
                const anchorIndex = headCommitIndex >= 0
                  ? headCommitIndex
                  : realCommitDotIndices[realCommitDotIndices.length - 1];
                branchEndDotIndex = anchorIndex;
                const anchor = commitDots[anchorIndex];
                if (anchor) {
                  const branchCommitEndY = timeCoordToY(commitTipTimeX);
                  commitDots[anchorIndex] = { ...anchor, y: branchCommitEndY };
                }
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
              const fullBranchShouldUseLocalGray =
                isLocalBranch && (allBranchCommitsAreLocal || realCommitDotIndices.length === 0);

              const commitDotEntries: MarkerEntry<{ index: number; commit?: BranchCommitPreview }>[] =
                commitDots.map(({ y, commit }, index) => {
                  const point = projectPoint(lanePosX, y);
                  return {
                    x: point.x,
                    y: point.y,
                    item: { index, commit },
                  };
                });
              const branchForkIndices2 = new Set<number>();
              const branchChildBranches2 = childBranchesByParent.get(b.name) ?? [];
              if (branchChildBranches2.length > 0) {
                const previews = (branchCommitPreviews[b.name] ?? [])
                  .filter((c) => c.kind !== 'branch-created')
                  .sort((a, bx) => new Date(a.date).getTime() - new Date(bx.date).getTime());
                const branchTimes = previews.map((c) => new Date(c.date).getTime());
                branchChildBranches2.forEach((child) => {
                  const idx = branchPreviewIndexForChildFork(previews, branchTimes, child);
                  if (idx >= 0) branchForkIndices2.add(idx);
                });
              }
              const commitDotClusters = clusterByForkPoints(commitDotEntries, branchForkIndices2);

              const promptMarkersRaw = branchPromptMeta[b.name]?.markers ?? [];
              const promptSeeds = [...promptMarkersRaw]
                .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
              const promptMarkers = promptSeeds.map((marker) => {
                const rawX = timeToX(marker.timestamp);
                const x = Math.max(minCommitTimeX, Math.min(maxCommitTimeX, rawX));
                return {
                  y: timeCoordToY(x),
                  marker,
                };
              });
              const promptMarkerEntries: MarkerEntry<{ marker: typeof promptMarkers[number]['marker']; index: number }>[] =
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

              return (
                <g key={`node-overlay-${b.name}`} style={{ opacity: branchGroupOpacity }}>
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
                    const label = count > 1 ? clumpCountLabel(count) : '';
                    const labelFontSize = nodeLabelFontSize(scaledNodeSize, count);

                    return (
                      <g key={`prompt-overlay-${clusterKey}`}>
                        <path
                          d={markerPath}
                          fill="var(--background)"
                          stroke="#14b8a6"
                          strokeWidth={1.2}
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
                            style={{ fontVariantNumeric: 'tabular-nums', fontSize: `${labelFontSize / Math.max(layerCameraScale.x, 0.0001)}px` }}
                            data-base-font-size={labelFontSize}
                          >
                            {label}
                          </text>
                        )}
                      </g>
                    );
                  })}
                  {commitDotClusters.map((cluster) => {
                    const realCommitEntries = cluster.entries.filter(
                      (entry) => entry.item.commit?.kind !== 'branch-created'
                    );
                    const count = realCommitEntries.length;
                    const firstEntry = cluster.entries[0];
                    const lastEntry = cluster.entries[cluster.entries.length - 1];
                    const clusterKey = `commit-clump-${b.name}-${firstEntry.item.index}-${lastEntry.item.index}`;
                    const memberKeys = cluster.entries.map((entry) => {
                      const commitSha = entry.item.commit?.fullSha;
                      return commitSha
                        ? `branch-commit:${b.name}:${commitSha}`
                        : `branch-commit:${b.name}:slot-${entry.item.index}`;
                    });
                    const animatedAnchor = resolveAnimatedClumpAnchor(
                      clusterKey,
                      { x: cluster.x, y: cluster.y },
                      memberKeys
                    );
                    const anchorX = animatedAnchor.x;
                    const anchorY = animatedAnchor.y;
                    const dotShouldUseLocalGray =
                      fullBranchShouldUseLocalGray ||
                      cluster.entries.every((entry) => localCommitDotIndices.has(entry.item.index));
                    const dotFill = dotShouldUseLocalGray
                      ? LOCAL_UNPUSHED_GRAY
                      : isFocusedError
                        ? focusedErrorColor
                        : CANVAS_NEUTRAL_GRAY;

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

                    const isOverlayExpanded =
                      (expandedClumps.get(clusterKey)?.isExpanded ?? false);

                    if (count <= 1) {
                      const rectSize = commitRectSize(scaledNodeSize);
                      const gridPad = 0;
                      const isGhostRect = isFreshCopy;
                      return (
                        <g key={`commit-overlay-${clusterKey}`}>
                          {!isGhostRect && (
                            <rect
                              className="branch-map-commit-rect"
                              x={anchorX - (rectSize.width + gridPad) / 2}
                              y={anchorY - (rectSize.height + gridPad) / 2}
                              width={rectSize.width + gridPad}
                              height={rectSize.height + gridPad}
                              data-base-rx={Math.max(2, rectSize.radius + (gridPad ? 0.6 : 0))}
                              rx={Math.max(2, rectSize.radius + (gridPad ? 0.6 : 0)) / Math.max(layerCameraScale.x, 0.0001)}
                              fill="var(--background)"
                            />
                          )}
                          <rect
                            className="branch-map-commit-rect"
                            x={anchorX - rectSize.width / 2}
                            y={anchorY - rectSize.height / 2}
                            width={rectSize.width}
                            height={rectSize.height}
                            data-base-rx={rectSize.radius}
                            rx={rectSize.radius / Math.max(layerCameraScale.x, 0.0001)}
                            fill={isGhostRect ? 'none' : dotFill}
                            stroke={isGhostRect ? LOCAL_UNPUSHED_GRAY : undefined}
                            strokeWidth={isGhostRect ? 1.2 : undefined}
                            strokeDasharray={isGhostRect ? '3 3' : undefined}
                          />
                          {clusterHasCheckedOutHead && !isOverlayExpanded && (
                            <rect
                              className="branch-map-commit-rect"
                              x={anchorX - (rectSize.width + gridPad) / 2 - CHECKED_OUT_RING_GAP}
                              y={anchorY - (rectSize.height + gridPad) / 2 - CHECKED_OUT_RING_GAP}
                              width={rectSize.width + gridPad + 2 * CHECKED_OUT_RING_GAP}
                              height={rectSize.height + gridPad + 2 * CHECKED_OUT_RING_GAP}
                              data-base-rx={Math.max(2, rectSize.radius + (gridPad ? 0.6 : 0)) + CHECKED_OUT_RING_GAP}
                              rx={
                                (Math.max(2, rectSize.radius + (gridPad ? 0.6 : 0)) + CHECKED_OUT_RING_GAP) /
                                Math.max(layerCameraScale.x, 0.0001)
                              }
                              fill="none"
                              stroke={CHECKED_OUT_RING_STROKE}
                              strokeWidth={CHECKED_OUT_RING_STROKE_WIDTH}
                              vectorEffect="non-scaling-stroke"
                            />
                          )}
                        </g>
                      );
                    }

                    const clusterRectSize = nodeRectSize(count);
                    const gridPad = 0;
                    return (
                      <g key={`commit-overlay-${clusterKey}`}>
                        <>
                          <rect
                            className="branch-map-commit-rect"
                            x={anchorX - (clusterRectSize.width + gridPad) / 2}
                            y={anchorY - (clusterRectSize.height + gridPad) / 2}
                            width={clusterRectSize.width + gridPad}
                            height={clusterRectSize.height + gridPad}
                            data-base-rx={Math.max(2, clusterRectSize.radius + (gridPad ? 0.6 : 0))}
                            rx={Math.max(2, clusterRectSize.radius + (gridPad ? 0.6 : 0)) / Math.max(layerCameraScale.x, 0.0001)}
                            fill="var(--background)"
                          />
                          <rect
                            className="branch-map-commit-rect"
                            x={anchorX - clusterRectSize.width / 2}
                            y={anchorY - clusterRectSize.height / 2}
                            width={clusterRectSize.width}
                            height={clusterRectSize.height}
                            data-base-rx={clusterRectSize.radius}
                            rx={clusterRectSize.radius / Math.max(layerCameraScale.x, 0.0001)}
                            fill={dotFill}
                          />
                          {clusterHasCheckedOutHead && !isOverlayExpanded && (
                            <rect
                              className="branch-map-commit-rect"
                              x={anchorX - (clusterRectSize.width + gridPad) / 2 - CHECKED_OUT_RING_GAP}
                              y={anchorY - (clusterRectSize.height + gridPad) / 2 - CHECKED_OUT_RING_GAP}
                              width={clusterRectSize.width + gridPad + 2 * CHECKED_OUT_RING_GAP}
                              height={clusterRectSize.height + gridPad + 2 * CHECKED_OUT_RING_GAP}
                              data-base-rx={Math.max(2, clusterRectSize.radius + (gridPad ? 0.6 : 0)) + CHECKED_OUT_RING_GAP}
                              rx={
                                (Math.max(2, clusterRectSize.radius + (gridPad ? 0.6 : 0)) + CHECKED_OUT_RING_GAP) /
                                Math.max(layerCameraScale.x, 0.0001)
                              }
                              fill="none"
                              stroke={CHECKED_OUT_RING_STROKE}
                              strokeWidth={CHECKED_OUT_RING_STROKE_WIDTH}
                              vectorEffect="non-scaling-stroke"
                            />
                          )}
                        </>
                        {!isOverlayExpanded && (
                          <text
                            x={anchorX}
                            y={anchorY}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            data-base-font-size={nodeLabelFontSize(scaledNodeSize, count)}
                            fontSize={nodeLabelFontSize(scaledNodeSize, count) / Math.max(layerCameraScale.x, 0.0001)}
                            fill={CANVAS_CLUMP_LABEL_GRAY}
                            fontWeight={600}
                          >
                            {clumpCountLabel(count)}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </g>
              );
            })}
          </g>

          {/* Main commit node overlay so branch connectors never render over main clumps. */}
          <g style={{ opacity: mainTimelineOpacity, transition: 'opacity 0.15s', pointerEvents: 'none' }}>
            {(() => {
              const entries: MarkerEntry<DirectCommit>[] = sortedDirectCommits.map((commit) => {
                const timeCoordX = directXByFullSha.get(commit.fullSha) ?? timeToX(commit.date);
                const markerPoint = projectPoint(mainX, timeCoordToY(timeCoordX));
                return { x: markerPoint.x, y: markerPoint.y, item: commit };
              });
              const mainForkIndices2 = new Set<number>();
              entries.forEach((entry, idx) => {
                if (protectedMainForkShas.has(entry.item.fullSha)) mainForkIndices2.add(idx);
              });
              const clusters = clusterByForkPoints(entries, mainForkIndices2);

              return clusters.map((cluster) => {
                const count = cluster.entries.length;
                const first = cluster.entries[0].item;
                const last = cluster.entries[count - 1].item;
                const clusterKey = `direct-clump-${first.fullSha}-${last.fullSha}`;
                const memberKeys = cluster.entries.map((entry) => `direct:${entry.item.fullSha}`);
                const animatedAnchor = resolveAnimatedClumpAnchor(
                  clusterKey,
                  { x: cluster.x, y: cluster.y },
                  memberKeys
                );
                const mainClusterHasCheckedOutHead =
                  checkedOutHeadSha != null &&
                  cluster.entries.some((entry) =>
                    shaMatchesGitRef(entry.item.fullSha, checkedOutHeadSha)
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
                  const gridPad = 0;
                  return (
                    <g key={`main-direct-overlay-${clusterKey}`}>
                      <rect
                        className="branch-map-commit-rect"
                        x={anchorX - (rectSize.width + gridPad) / 2}
                        y={anchorY - (rectSize.height + gridPad) / 2}
                        width={rectSize.width + gridPad}
                        height={rectSize.height + gridPad}
                        data-base-rx={Math.max(2, rectSize.radius + (gridPad ? 0.6 : 0))}
                        rx={Math.max(2, rectSize.radius + (gridPad ? 0.6 : 0)) / Math.max(layerCameraScale.x, 0.0001)}
                        fill="var(--background)"
                      />
                      <rect
                        className="branch-map-commit-rect"
                        x={anchorX - rectSize.width / 2}
                        y={anchorY - rectSize.height / 2}
                        width={rectSize.width}
                        height={rectSize.height}
                        data-base-rx={rectSize.radius}
                        rx={rectSize.radius / Math.max(layerCameraScale.x, 0.0001)}
                        fill={CANVAS_NEUTRAL_GRAY}
                      />
                      {mainClusterHasCheckedOutHead && (
                        <rect
                          className="branch-map-commit-rect"
                          x={anchorX - (rectSize.width + gridPad) / 2 - CHECKED_OUT_RING_GAP}
                          y={anchorY - (rectSize.height + gridPad) / 2 - CHECKED_OUT_RING_GAP}
                          width={rectSize.width + gridPad + 2 * CHECKED_OUT_RING_GAP}
                          height={rectSize.height + gridPad + 2 * CHECKED_OUT_RING_GAP}
                          data-base-rx={Math.max(2, rectSize.radius + (gridPad ? 0.6 : 0)) + CHECKED_OUT_RING_GAP}
                          rx={
                            (Math.max(2, rectSize.radius + (gridPad ? 0.6 : 0)) + CHECKED_OUT_RING_GAP) /
                            Math.max(layerCameraScale.x, 0.0001)
                          }
                          fill="none"
                          stroke={CHECKED_OUT_RING_STROKE}
                          strokeWidth={CHECKED_OUT_RING_STROKE_WIDTH}
                          vectorEffect="non-scaling-stroke"
                        />
                      )}
                    </g>
                  );
                }

                const clusterRectSize = nodeRectSize(count);
                const gridPad = 0;
                return (
                  <g key={`main-direct-overlay-${clusterKey}`}>
                    <>
                      <rect
                        className="branch-map-commit-rect"
                        x={anchorX - (clusterRectSize.width + gridPad) / 2}
                        y={anchorY - (clusterRectSize.height + gridPad) / 2}
                        width={clusterRectSize.width + gridPad}
                        height={clusterRectSize.height + gridPad}
                        data-base-rx={Math.max(2, clusterRectSize.radius + (gridPad ? 0.6 : 0))}
                        rx={Math.max(2, clusterRectSize.radius + (gridPad ? 0.6 : 0)) / Math.max(layerCameraScale.x, 0.0001)}
                        fill="var(--background)"
                      />
                      <rect
                        className="branch-map-commit-rect"
                        x={anchorX - clusterRectSize.width / 2}
                        y={anchorY - clusterRectSize.height / 2}
                        width={clusterRectSize.width}
                        height={clusterRectSize.height}
                        data-base-rx={clusterRectSize.radius}
                        rx={clusterRectSize.radius / Math.max(layerCameraScale.x, 0.0001)}
                        fill={CANVAS_NEUTRAL_GRAY}
                      />
                      {mainClusterHasCheckedOutHead && (
                        <rect
                          className="branch-map-commit-rect"
                          x={anchorX - (clusterRectSize.width + gridPad) / 2 - CHECKED_OUT_RING_GAP}
                          y={anchorY - (clusterRectSize.height + gridPad) / 2 - CHECKED_OUT_RING_GAP}
                          width={clusterRectSize.width + gridPad + 2 * CHECKED_OUT_RING_GAP}
                          height={clusterRectSize.height + gridPad + 2 * CHECKED_OUT_RING_GAP}
                          data-base-rx={Math.max(2, clusterRectSize.radius + (gridPad ? 0.6 : 0)) + CHECKED_OUT_RING_GAP}
                          rx={
                            (Math.max(2, clusterRectSize.radius + (gridPad ? 0.6 : 0)) + CHECKED_OUT_RING_GAP) /
                            Math.max(layerCameraScale.x, 0.0001)
                          }
                          fill="none"
                          stroke={CHECKED_OUT_RING_STROKE}
                          strokeWidth={CHECKED_OUT_RING_STROKE_WIDTH}
                          vectorEffect="non-scaling-stroke"
                        />
                      )}
                    </>
                    {!isExpanded && (
                      <text
                        x={anchorX}
                        y={anchorY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        data-base-font-size={nodeLabelFontSize(scaledNodeSize, count)}
                        fontSize={nodeLabelFontSize(scaledNodeSize, count) / Math.max(layerCameraScale.x, 0.0001)}
                        fill={CANVAS_CLUMP_LABEL_GRAY}
                        fontWeight={600}
                      >
                        {clumpCountLabel(count)}
                      </text>
                    )}
                  </g>
                );
              });
            })()}
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
          className="flex items-center justify-end gap-4"
          style={{
            opacity: isLoading || !controlsReady ? 0 : 1,
            transition: 'opacity 0.4s ease',
          }}
        >
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
