import React, { useState, useRef, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { X } from 'lucide-react';
import { Branch, BranchCommitPreview, BranchPromptMeta, CheckedOutRef, DirectCommit, MergeNode, MergedPR, OpenPR } from '../types';
import { ViewMode } from './BranchMapView';

// ── Layout constants ──────────────────────────────────────────────────────────
const LEFT_PAD = 60;
const RIGHT_PAD = 160;
const MIN_BRANCH_SPACING_X = 30;
const LANE_HEIGHT = 120;
const NODE_SIZE = 14;
const CORNER_R = 20;
const BRANCH_HIT_STROKE_WIDTH = 48;
const AHEAD_LABEL_OFFSET_X = 10;
const MAIN_LABEL_OFFSET_X = 10;
const MAX_ACTIVE = 50;
const ZOOM_DEFAULT = 1;
const ZOOM_WHEEL_EXP_SENSITIVITY = 0.0025;
const ZOOM_WHEEL_DELTA_MAX_PX = 180;
const CAMERA_UI_SYNC_MS = 24;
const ZOOM_UI_SYNC_IDLE_MS = 90;
const CANVAS_PAD_X = 240;
const CANVAS_PAD_Y = 140;
const TIME_SCALE_MIN = 0.5;
const TIME_SCALE_MAX = 3;
const TIME_SCALE_STEP = 0.05;
const TIME_SCALE_DEFAULT = 0.5;
const LOCAL_UNPUSHED_GRAY = '#a8a29e';
const CLUMP_DISTANCE_PX = 8;
const CLUMP_TOUCH_DISTANCE_PX = NODE_SIZE;
const CLUMP_COUNT_MAX = 99;
const CLUMP_SIZE_BOOST_PX = 0.5;
const CLUMP_START_ZOOM = 1.15;
const CLUMP_FULL_ZOOM = 0.72;
const CLUMP_ANIMATION_MS = 180;
const CLUMP_ZOOM_INTERACTION_WINDOW_MS = 120;
const CLUMP_MAX_ENTRIES_TOUCH = 2;
const CLUMP_MAX_ENTRIES_FULL = CLUMP_COUNT_MAX;
const CLUMP_STRUCTURAL_PRIORITY = 5;
const CLUMP_SECONDARY_PRIORITY = 1.5;
const CHECKED_OUT_AHEAD_OFFSET_WORLD = 120;
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
type SpacingMode = 'regular' | 'bounded';
type ClampMode = 'hard' | 'soft';
type OrientationMode = 'vertical' | 'horizontal';
type ZoomUiSyncMode = 'none' | 'deferred' | 'immediate';
type MarkerEntry<T> = { x: number; y: number; item: T };
type MarkerCluster<T> = { x: number; y: number; entries: MarkerEntry<T>[] };
type AnchorPoint = { x: number; y: number };
type ClumpAnchorState = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  lastSeenRender: number;
};
type ClumpMemberAnchorState = {
  x: number;
  y: number;
  lastSeenRender: number;
};
type ClusterOptions<T> = {
  shouldBreak?: (prev: MarkerEntry<T>, next: MarkerEntry<T>) => boolean;
  anchorPriority?: (entry: MarkerEntry<T>) => number;
  preferredAnchors?: AnchorPoint[];
  maxEntriesPerCluster?: number;
};

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function clumpProgressForZoom(zoomValue: number): number {
  const span = Math.max(CLUMP_START_ZOOM - CLUMP_FULL_ZOOM, 0.0001);
  const normalized = clamp01((CLUMP_START_ZOOM - zoomValue) / span);
  return easeInOutCubic(normalized);
}

function getCameraScale(zoomValue: number, _horizontal: boolean): { x: number; y: number } {
  return { x: zoomValue, y: zoomValue };
}

function normalizeWheelDeltaPx(delta: number, deltaMode: number, pageSizePx: number): number {
  if (deltaMode === WheelEvent.DOM_DELTA_LINE) return delta * 16;
  if (deltaMode === WheelEvent.DOM_DELTA_PAGE) return delta * Math.max(pageSizePx, 1);
  return delta;
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

function formatCommitsAhead(commitsAhead: number): string {
  return `${commitsAhead} commit${commitsAhead === 1 ? '' : 's'} ahead`;
}

function estimateSvgTextWidth(text: string, fontSize = 10): number {
  return Math.ceil(text.length * fontSize * 0.56);
}

function truncatePrompt(text: string, max = 90): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max)}…`;
}

const COMMIT_TOOLTIP_PREVIEW_MAX = 120;
const COMMIT_CLUSTER_PREVIEW_MAX = 90;
const PROMPT_TOOLTIP_PREVIEW_MAX = 120;
const PROMPT_CLUSTER_PREVIEW_MAX = 90;

function clusterMarkersByDistance<T>(
  entries: MarkerEntry<T>[],
  maxGap: number,
  options: ClusterOptions<T> = {}
): MarkerCluster<T>[] {
  if (entries.length === 0) return [];
  if (maxGap <= 0) {
    return entries.map((entry) => ({
      x: entry.x,
      y: entry.y,
      entries: [entry],
    }));
  }

  const clusters: MarkerCluster<T>[] = [];
  let current: MarkerEntry<T>[] = [entries[0]];
  const maxEntriesPerCluster =
    typeof options.maxEntriesPerCluster === 'number' && options.maxEntriesPerCluster > 0
      ? Math.max(1, Math.floor(options.maxEntriesPerCluster))
      : Number.POSITIVE_INFINITY;

  function flush() {
    if (current.length === 1) {
      const only = current[0];
      clusters.push({
        x: only.x,
        y: only.y,
        entries: current,
      });
      return;
    }

    const totalX = current.reduce((sum, entry) => sum + entry.x, 0);
    const totalY = current.reduce((sum, entry) => sum + entry.y, 0);
    const centroidX = totalX / current.length;
    const centroidY = totalY / current.length;
    let anchorX = centroidX;
    let anchorY = centroidY;

    let usedPriorityAnchor = false;
    if (options.anchorPriority) {
      let bestEntry: MarkerEntry<T> | null = null;
      let bestScore = Number.NEGATIVE_INFINITY;
      let bestDistance = Number.POSITIVE_INFINITY;
      for (const entry of current) {
        const score = options.anchorPriority(entry);
        if (score <= 0) continue;
        const distanceToCentroid = Math.hypot(entry.x - centroidX, entry.y - centroidY);
        if (
          score > bestScore ||
          (score === bestScore && distanceToCentroid < bestDistance)
        ) {
          bestEntry = entry;
          bestScore = score;
          bestDistance = distanceToCentroid;
        }
      }
      if (bestEntry) {
        anchorX = bestEntry.x;
        anchorY = bestEntry.y;
        usedPriorityAnchor = true;
      }
    }
    if (!usedPriorityAnchor && options.preferredAnchors && options.preferredAnchors.length > 0) {
      const snapDistance = Math.max(1, maxGap * 1.35);
      let bestAnchor: AnchorPoint | null = null;
      let bestDistance = Number.POSITIVE_INFINITY;
      for (const anchor of options.preferredAnchors) {
        const touchesCluster = current.some(
          (entry) => Math.hypot(anchor.x - entry.x, anchor.y - entry.y) <= snapDistance
        );
        if (!touchesCluster) continue;
        const distanceToCentroid = Math.hypot(anchor.x - centroidX, anchor.y - centroidY);
        if (distanceToCentroid < bestDistance) {
          bestDistance = distanceToCentroid;
          bestAnchor = anchor;
        }
      }
      if (bestAnchor) {
        anchorX = bestAnchor.x;
        anchorY = bestAnchor.y;
      }
    }

    clusters.push({
      x: anchorX,
      y: anchorY,
      entries: current,
    });
  }

  for (let i = 1; i < entries.length; i += 1) {
    const prev = current[current.length - 1];
    const next = entries[i];
    const distance = Math.hypot(next.x - prev.x, next.y - prev.y);
    const forceBreak = options.shouldBreak?.(prev, next) ?? false;
    const roomInCluster = current.length < maxEntriesPerCluster;
    if (!forceBreak && roomInCluster && distance <= maxGap) {
      current.push(next);
    } else {
      flush();
      current = [next];
    }
  }
  flush();
  return clusters;
}

function selectEntryIndicesForAnchors<T>(
  entries: MarkerEntry<T>[],
  anchors: AnchorPoint[]
): Set<number> {
  if (entries.length === 0 || anchors.length === 0) return new Set<number>();
  const chosen = new Set<number>();

  for (const anchor of anchors) {
    let bestUnusedIndex = -1;
    let bestUnusedDistance = Number.POSITIVE_INFINITY;
    let bestAnyIndex = -1;
    let bestAnyDistance = Number.POSITIVE_INFINITY;

    for (let i = 0; i < entries.length; i += 1) {
      const entry = entries[i];
      const distance = Math.hypot(entry.x - anchor.x, entry.y - anchor.y);
      if (distance < bestAnyDistance) {
        bestAnyDistance = distance;
        bestAnyIndex = i;
      }
      if (!chosen.has(i) && distance < bestUnusedDistance) {
        bestUnusedDistance = distance;
        bestUnusedIndex = i;
      }
    }

    const pickedIndex = bestUnusedIndex >= 0 ? bestUnusedIndex : bestAnyIndex;
    if (pickedIndex >= 0) chosen.add(pickedIndex);
  }

  return chosen;
}

function clusterDirectCommitsWithAnchors(
  entries: MarkerEntry<DirectCommit>[],
  maxGap: number,
  protectedShas: Set<string>,
  preferredAnchors: AnchorPoint[] = [],
  maxEntriesPerCluster?: number,
  entryPriority?: (entry: MarkerEntry<DirectCommit>) => number
): MarkerCluster<DirectCommit>[] {
  function isProtected(entry: MarkerEntry<DirectCommit>): boolean {
    return protectedShas.has(entry.item.fullSha);
  }

  return clusterMarkersByDistance(entries, maxGap, {
    anchorPriority: (entry) => (isProtected(entry) ? 3 : 0) + (entryPriority?.(entry) ?? 0),
    preferredAnchors,
    maxEntriesPerCluster,
  });
}

function clumpCountLabel(count: number): string {
  return count > CLUMP_COUNT_MAX ? `${CLUMP_COUNT_MAX}+` : String(count);
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
  selectedBranch?: Branch | null;
  onBranchSelect?: (branch: Branch) => void;
  onBranchClick?: (branch: Branch) => void;
  onHoveredBranchChange?: (branchName: string | null) => void;
  onCommitClick?: (target: { commitSha: string; branchName?: string }) => void;
  onLoadMore?: () => void;
  githubOwner?: string | null;
  githubRepo?: string | null;
  branchPromptMeta?: Record<string, BranchPromptMeta>;
  branchCommitPreviews?: Record<string, BranchCommitPreview[]>;
  branchUniqueAheadCounts?: Record<string, number>;
  view?: ViewMode;
  conflictBranches?: Branch[];
  staleBranches?: Branch[];
  openPRs?: OpenPR[];
  isLoading?: boolean;
  scrollRequest?: { branch: Branch; seq: number } | null;
  focusedErrorBranch?: Branch | null;
  checkedOutRef?: CheckedOutRef | null;
  isPopoverWindow?: boolean;
}

export default function BranchMap({
  branches,
  mergeNodes,
  directCommits = [],
  mergedPRs = [],
  defaultBranch,
  selectedBranch,
  onBranchSelect,
  onBranchClick,
  onHoveredBranchChange,
  onCommitClick,
  githubOwner,
  githubRepo,
  branchPromptMeta = {},
  branchCommitPreviews = {},
  branchUniqueAheadCounts = {},
  view = 'time',
  conflictBranches = [],
  staleBranches = [],
  openPRs = [],
  isLoading = false,
  scrollRequest,
  focusedErrorBranch,
  checkedOutRef = null,
  isPopoverWindow = false,
}: BranchMapProps) {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);
  const [hoveredPR, setHoveredPR] = useState<number | null>(null);
  const [hoveredPRCommit, setHoveredPRCommit] = useState<PRCommitHover | null>(null);
  const [hoveredMergeNode, setHoveredMergeNode] = useState<{ y: number; node: MergeNode } | null>(null);
  const [prCommits, setPrCommits] = useState<Map<number, string[]>>(new Map());
  const [zoom, setZoom] = useState(ZOOM_DEFAULT);
  const [animatedClumpZoom, setAnimatedClumpZoom] = useState(ZOOM_DEFAULT);
  const [timeScale, setTimeScale] = useState(TIME_SCALE_DEFAULT);
  const [spacingMode] = useState<SpacingMode>('bounded');
  const [orientation, setOrientation] = useState<OrientationMode>('vertical');
  const isHorizontal = orientation === 'horizontal';
  const effectiveTimeScale = timeScale;
  const effectiveSpacingMode: SpacingMode = spacingMode;
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
  const panUiSyncTimeoutRef = useRef<number | null>(null);
  const zoomUiSyncTimeoutRef = useRef<number | null>(null);
  const cameraPaintRafRef = useRef<number | null>(null);
  const pendingCameraRef = useRef<{ pan: { x: number; y: number }; zoom: number } | null>(null);
  const clumpZoomCancelRef = useRef<(() => void) | null>(null);
  const clumpZoomRef = useRef(ZOOM_DEFAULT);
  const [, setClumpAnimationTick] = useState(0);
  const clumpAnchorStateRef = useRef<Map<string, ClumpAnchorState>>(new Map());
  const clumpMemberAnchorStateRef = useRef<Map<string, ClumpMemberAnchorState>>(new Map());
  const clumpRenderCounterRef = useRef(0);
  clumpRenderCounterRef.current += 1;
  const clumpRenderId = clumpRenderCounterRef.current;
  const gestureZoomBaseRef = useRef(zoomRef.current);
  const gesturePointRef = useRef<{ x: number; y: number } | null>(null);
  const graphOffsetRef = useRef({ x: 0, y: 0 });
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
  const [containerHeight, setContainerHeight] = useState(540);
  const renderCameraScale = getCameraScale(zoom, isHorizontal);

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

  useEffect(() => {
    zoomRef.current = zoom;
    zoomStateRef.current = zoom;
    paintCamera(panRef.current, zoomRef.current);
  }, [zoom]);

  useEffect(() => {
    clumpZoomCancelRef.current?.();
    const start = clumpZoomRef.current;
    const inContinuousZoomWindow =
      performance.now() - lastContinuousZoomTsRef.current < CLUMP_ZOOM_INTERACTION_WINDOW_MS;
    if (inContinuousZoomWindow) {
      clumpZoomRef.current = zoom;
      setAnimatedClumpZoom(zoom);
      return;
    }
    if (Math.abs(start - zoom) < 0.0001) {
      clumpZoomRef.current = zoom;
      setAnimatedClumpZoom(zoom);
      return;
    }
    clumpZoomCancelRef.current = smoothValueTo(
      start,
      zoom,
      CLUMP_ANIMATION_MS,
      (value) => {
        clumpZoomRef.current = value;
        setAnimatedClumpZoom(value);
      },
      0.0001
    );
    return () => {
      clumpZoomCancelRef.current?.();
      clumpZoomCancelRef.current = null;
    };
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

  useEffect(() => {
    panRef.current = pan;
    if (!isPanning) {
      targetPanRef.current = pan;
    }
    paintCamera(panRef.current, zoomRef.current);
  }, [pan, isPanning]);

  function clampPan(
    next: { x: number; y: number },
    _zoomValue = zoomRef.current,
    _mode: ClampMode = 'soft'
  ) {
    return next;
  }

  function paintCamera(nextPan = panRef.current, _nextZoom = zoomRef.current) {
    const el = cameraRef.current;
    if (!el) return;
    const cameraScale = getCameraScale(_nextZoom, isHorizontal);
    el.style.transform = `translate3d(${nextPan.x}px, ${nextPan.y}px, 0)`;
    const svg = svgRef.current;
    if (svg) {
      const inv = 1 / Math.max(cameraScale.x, 0.0001);
      svg.style.setProperty('--icon-inv-scale', String(inv));
    }
    const zoomLayer = zoomLayerRef.current;
    if (zoomLayer) {
      zoomLayer.setAttribute('transform', `scale(${cameraScale.x} ${cameraScale.y})`);
    }
  }

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
      syncUiState(true);
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
    }, ZOOM_UI_SYNC_IDLE_MS);
  }

  function flushPendingZoomUiSync() {
    if (zoomUiSyncTimeoutRef.current === null) return;
    clearTimeout(zoomUiSyncTimeoutRef.current);
    zoomUiSyncTimeoutRef.current = null;
    syncUiState(true, true);
  }

  function applyZoomAt(
    point: { x: number; y: number },
    nextZoom: number,
    uiSyncMode: ZoomUiSyncMode = 'none'
  ): boolean {
    lockAnimationsIfReady();
    if (!Number.isFinite(nextZoom) || nextZoom <= 0) return false;
    const currentZoom = zoomRef.current;
    if (Math.abs(nextZoom - currentZoom) < 0.0001) return false;

    const currentPan = panRef.current;
    const graphOffset = graphOffsetRef.current;
    const currentScale = getCameraScale(currentZoom, isHorizontal);
    const nextScale = getCameraScale(nextZoom, isHorizontal);
    const worldX = (point.x - currentPan.x - graphOffset.x) / Math.max(currentScale.x, 0.0001);
    const worldY = (point.y - currentPan.y - graphOffset.y) / Math.max(currentScale.y, 0.0001);
    const nextPan = clampPan(
      {
        x: point.x - graphOffset.x - worldX * nextScale.x,
        y: point.y - graphOffset.y - worldY * nextScale.y,
      },
      nextZoom,
      'soft'
    );

    stopPanSmoothing();
    if (uiSyncMode === 'deferred') {
      lastContinuousZoomTsRef.current = performance.now();
    }
    if (uiSyncMode === 'immediate') {
      applyCamera(nextPan, nextZoom, true, true);
      return true;
    }
    applyCamera(nextPan, nextZoom);
    if (uiSyncMode === 'deferred') {
      scheduleZoomUiSync();
    }
    return true;
  }

  // Reveal controls immediately when intro animations are disabled.
  // When enabled, keep the original delayed reveal timing.
  useEffect(() => {
    if (!drawReady) {
      setControlsReady(false);
      return;
    }
    if (!ENABLE_TIMELINE_INTRO_ANIMATIONS) {
      setControlsReady(true);
      return;
    }
    const id = setTimeout(() => setControlsReady(true), 2600);
    return () => clearTimeout(id);
  }, [drawReady]);

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

  // Wheel behavior:
  // - Ctrl/Cmd + wheel: direct cursor-anchored zoom
  // - plain wheel: inertial pan in both axes
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
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
        const rect = el.getBoundingClientRect();
        const point = { x: e.clientX - rect.left, y: e.clientY - rect.top };
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
      }, zoomRef.current, 'soft');
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
      gesturePointRef.current = {
        x: (e.clientX ?? (rect.left + rect.width / 2)) - rect.left,
        y: (e.clientY ?? (rect.top + rect.height / 2)) - rect.top,
      };
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

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('gesturestart', onGestureStart as EventListener, { passive: false });
    el.addEventListener('gesturechange', onGestureChange as EventListener, { passive: false });
    el.addEventListener('gestureend', onGestureEnd as EventListener, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
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
      if (rect.height > 0) setContainerHeight(rect.height);
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
      }, zoomRef.current, 'soft');
      applyCamera(nextPan, zoomRef.current);
    };
    const onUp = () => {
      isPanningRef.current = false;
      setIsPanning(false);
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

      // Keep zoom shortcuts on the graph camera (unbounded), not browser/webview zoom.
      if (e.metaKey || e.ctrlKey) {
        const isZoomIn = e.key === '=' || e.key === '+';
        const isZoomOut = e.key === '-' || e.key === '_';
        if (isZoomIn || isZoomOut) {
          e.preventDefault();
          const el = scrollRef.current;
          if (!el) return;
          markUserMovedCamera();
          stopWheelInertia();
          stopZoomAnimation();
          applyZoomAt(
            { x: el.clientWidth / 2, y: el.clientHeight / 2 },
            zoomRef.current * (isZoomIn ? 1.08 : 0.92),
            'immediate'
          );
          return;
        }
      }

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
  const STATUS_PRIORITY: Record<string, number> = { 'conflict-risk': 0, stale: 1, fresh: 2, unknown: 3 };
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
  const IDEAL_NODE_SPACING = Math.max(MIN_BRANCH_SPACING_X, 160 * effectiveTimeScale);
  const IDEAL_EVENT_GAP = Math.max(8, 40 * effectiveTimeScale);
  const MIN_EVENT_GAP = Math.max(4, IDEAL_EVENT_GAP * 0.22);
  const MAX_EVENT_GAP = IDEAL_EVENT_GAP * 6.5;

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
  const sortedDirectCommits = [...directCommits].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  type TimelineEvent = { key: string; t: number; kind: 'merge' | 'direct' | 'branch' };
  const branchTimelineEvents: TimelineEvent[] = activeBranches.flatMap((b) => {
    const events: TimelineEvent[] = [
      {
        key: `branch:tip:${b.name}`,
        t: new Date(b.lastCommitDate).getTime(),
        kind: 'branch',
      },
    ];
    if (b.divergedFromDate) {
      events.push({
        key: `branch:fork:${b.name}`,
        t: new Date(b.divergedFromDate).getTime(),
        kind: 'branch',
      });
    }
    return events;
  });

  const timelineEvents: TimelineEvent[] = [
    ...sortedNodes.map((m) => ({
      key: `merge:${m.fullSha}`,
      t: new Date(m.date).getTime(),
      kind: 'merge' as const,
    })),
    ...sortedDirectCommits.map((c) => ({
      key: `direct:${c.fullSha}`,
      t: new Date(c.date).getTime(),
      kind: 'direct' as const,
    })),
    ...branchTimelineEvents,
  ].sort((a, b) => {
    if (a.t !== b.t) return a.t - b.t;
    // Keep direct dots first, then branch markers, then merge ticks.
    if (a.kind === b.kind) return a.key.localeCompare(b.key);
    if (a.kind === 'direct') return -1;
    if (b.kind === 'direct') return 1;
    if (a.kind === 'branch') return -1;
    if (b.kind === 'branch') return 1;
    return 0;
  });

  const branchCommitAnchorTimes = activeBranches.flatMap((b) =>
    (branchCommitPreviews[b.name] ?? [])
      .map((c) => new Date(c.date).getTime())
      .filter(Number.isFinite)
  );
  const promptAnchorTimes = activeBranches.flatMap((b) =>
    (branchPromptMeta[b.name]?.markers ?? [])
      .map((m) => new Date(m.timestamp).getTime())
      .filter(Number.isFinite)
  );
  const mainPromptAnchorTimes = (branchPromptMeta[defaultBranch]?.markers ?? [])
    .map((m) => new Date(m.timestamp).getTime())
    .filter(Number.isFinite);
  const allAnchorTimes = Array.from(
    new Set<number>([
      ...timelineEvents.map((e) => e.t).filter(Number.isFinite),
      ...branchCommitAnchorTimes,
      ...promptAnchorTimes,
      ...mainPromptAnchorTimes,
    ])
  ).sort((a, b) => a - b);

  const DAY_MS = 86400000;
  const firstEventT = allAnchorTimes.length > 0 ? allAnchorTimes[0] : Date.now();
  const lastEventT = allAnchorTimes.length > 1 ? allAnchorTimes[allAnchorTimes.length - 1] : firstEventT + 1;
  const timelineTimeSpan = Math.max(lastEventT - firstEventT, 1);
  const avgAnchorIntervalMs = allAnchorTimes.length > 1
    ? timelineTimeSpan / (allAnchorTimes.length - 1)
    : 7 * DAY_MS;
  const regularPxPerMs = IDEAL_EVENT_GAP / Math.max(avgAnchorIntervalMs, 1);

  const anchorXs: number[] = [];
  if (allAnchorTimes.length > 0) {
    anchorXs.push(leftPad);
    for (let i = 1; i < allAnchorTimes.length; i += 1) {
      if (effectiveSpacingMode === 'regular') {
        anchorXs.push(leftPad + (allAnchorTimes[i] - firstEventT) * regularPxPerMs);
      } else {
        const deltaMs = Math.max(1, allAnchorTimes[i] - allAnchorTimes[i - 1]);
        const scaledGap = IDEAL_EVENT_GAP * (deltaMs / Math.max(avgAnchorIntervalMs, 1));
        const boundedGap = Math.max(MIN_EVENT_GAP, Math.min(MAX_EVENT_GAP, scaledGap));
        anchorXs.push(anchorXs[i - 1] + boundedGap);
      }
    }
  }

  const averageEventGap = anchorXs.length > 1
    ? (anchorXs[anchorXs.length - 1] - leftPad) / (anchorXs.length - 1)
    : IDEAL_EVENT_GAP;
  const safeExtrapPxPerMs = effectiveSpacingMode === 'regular'
    ? regularPxPerMs
    : averageEventGap / Math.max(avgAnchorIntervalMs, 7 * DAY_MS);

  function xForTimestamp(t: number): number {
    if (!Number.isFinite(t) || allAnchorTimes.length === 0) return leftPad;
    let lo = 0;
    let hi = allAnchorTimes.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (allAnchorTimes[mid] < t) lo = mid + 1;
      else hi = mid;
    }
    if (lo <= 0) {
      const rawX = leftPad + (t - firstEventT) * safeExtrapPxPerMs;
      return Math.max(rawX, leftPad - MIN_EVENT_GAP * 2);
    }
    if (lo >= allAnchorTimes.length) {
      const endX = anchorXs[anchorXs.length - 1] ?? leftPad;
      return endX + (t - lastEventT) * safeExtrapPxPerMs;
    }
    const i = lo - 1;
    const tA = allAnchorTimes[i];
    const tB = allAnchorTimes[lo];
    const xA = anchorXs[i] ?? leftPad;
    const xB = anchorXs[lo] ?? xA;
    if (tB <= tA) return xA;
    const ratio = (t - tA) / (tB - tA);
    return xA + ratio * (xB - xA);
  }

  const nodeXByFullSha = new Map<string, number>(
    sortedNodes.map((m) => [m.fullSha, xForTimestamp(new Date(m.date).getTime())])
  );
  const directXByFullSha = new Map<string, number>(
    sortedDirectCommits.map((c) => [c.fullSha, xForTimestamp(new Date(c.date).getTime())])
  );

  const mainEndX = allAnchorTimes.length > 0 ? xForTimestamp(lastEventT) : leftPad;
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
    if (exact) return timeToX(exact.date);
    const prefix = previews.find(
      (commit) =>
        commit.fullSha.startsWith(sha) ||
        sha.startsWith(commit.fullSha) ||
        commit.sha.startsWith(sha) ||
        sha.startsWith(commit.sha)
    );
    if (prefix) return timeToX(prefix.date);
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
      const commitX = timeToX(commit.date);
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
    if (b.commitsAhead === 0 && isParentDefault && b.createdDate) {
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
    const lastCommitX = timeToX(b.lastCommitDate);
    return Math.max(lastCommitX, forkX + cornerR + 20);
  }

  function branchAheadCount(b: Branch): number {
    if (Object.prototype.hasOwnProperty.call(branchUniqueAheadCounts, b.name)) {
      return branchUniqueAheadCounts[b.name] ?? 0;
    }
    const previews = branchCommitPreviews[b.name];
    if (previews != null) return previews.filter((preview) => preview.kind !== 'branch-created').length;
    return b.commitsAhead;
  }

  function branchVisualEndTimeX(b: Branch): number {
    const tipX = branchTipX(b);
    return tipX + AHEAD_LABEL_OFFSET_X + estimateSvgTextWidth(formatCommitsAhead(branchAheadCount(b)));
  }

  // Canonical (logical) layout uses vertical time; orientation projection swaps axes when needed.
  const MAIN_LEFT_PAD = 80;
  const MAIN_TOP_PAD = 80;
  const mainX = MAIN_LEFT_PAD;
  const timelineMinX = leftPad;
  const timelineMaxX = activeBranches.reduce(
    (max, b) => Math.max(max, branchTipX(b)),
    mainEndX
  );
  const timelineSpanY = Math.max(220, timelineMaxX - timelineMinX);
  const mainStartY = MAIN_TOP_PAD + timelineSpanY; // oldest
  function timeCoordToY(timeCoordX: number): number {
    return mainStartY - (timeCoordX - timelineMinX);
  }
  const mainEndY = timeCoordToY(mainEndX); // newest anchor on main
  const mainActiveEndY = timeCoordToY(mainActiveEndX);
  const hasMainStaleTailY = Math.abs(mainActiveEndY - mainEndY) > 0.5;
  const logicalTimelineHeight = Math.max(mainStartY + 120, containerHeight);

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
  const sortedByX = [...activeBranches].sort((a, b) => {
    // Allocate older branches first so they stay on earlier lanes.
    const createdDiff = branchCreatedMs(a) - branchCreatedMs(b);
    if (createdDiff !== 0) return createdDiff;
    const forkDiff = branchForkX(a) - branchForkX(b);
    if (forkDiff !== 0) return forkDiff;
    return a.name.localeCompare(b.name);
  });

  const BRANCH_LANE_MIN_SEPARATION_X = Math.max(20, 40 * effectiveTimeScale);
  const laneAssignments = new Map<string, number>();
  const laneLastEndX: number[] = [];

  function ensureLaneCapacity(minLane: number) {
    while (laneLastEndX.length <= minLane) {
      laneLastEndX.push(Number.NEGATIVE_INFINITY);
    }
  }

  function allocateLane(minLane: number, startX: number, endX: number): number {
    ensureLaneCapacity(minLane);
    for (let lane = minLane; lane < laneLastEndX.length; lane += 1) {
      const lastEndX = laneLastEndX[lane];
      if (startX - lastEndX >= BRANCH_LANE_MIN_SEPARATION_X) {
        laneLastEndX[lane] = endX;
        return lane;
      }
    }
    laneLastEndX.push(endX);
    return laneLastEndX.length - 1;
  }

  const pending = [...sortedByX];
  let guard = 0;
  while (pending.length > 0 && guard < sortedByX.length * 3) {
    let progressed = false;
    for (let i = 0; i < pending.length; i += 1) {
      const b = pending[i];
      const parentName = b.parentBranch;
      const parentVisible = !!(parentName && parentName !== defaultBranch && branchByName.has(parentName));
      const parentAssigned = parentVisible ? laneAssignments.has(parentName!) : true;
      if (!parentAssigned) continue;

      const minLane = parentVisible ? (laneAssignments.get(parentName!) ?? 0) + 1 : 0;
      const lane = allocateLane(minLane, branchForkX(b), branchVisualEndTimeX(b));
      laneAssignments.set(b.name, lane);
      pending.splice(i, 1);
      i -= 1;
      progressed = true;
    }

    if (!progressed) {
      // Cycle or missing parent assignment edge-case fallback.
      const b = pending.shift()!;
      const lane = allocateLane(0, branchForkX(b), branchVisualEndTimeX(b));
      laneAssignments.set(b.name, lane);
    }
    guard += 1;
  }

  const laneWidth = LANE_HEIGHT;

  function laneX(b: Branch): number {
    const lane = laneAssignments.get(b.name) ?? 0;
    return mainX + laneWidth * (lane + 1) + 40;
  }

  const laneXByBranch = new Map<string, number>(
    activeBranches.map((b) => [b.name, laneX(b)])
  );

  const protectedMainForkShas = new Set<string>(
    activeBranches
      .filter((b) => !b.parentBranch || b.parentBranch === b.name || b.parentBranch === defaultBranch)
      .flatMap((b) => [b.createdFromSha, b.divergedFromSha].filter((sha): sha is string => !!sha))
  );

  const branchOutAnchorsByBranch = new Map<string, AnchorPoint[]>();
  const branchMergeAnchorsByBranch = new Map<string, AnchorPoint[]>();
  const mainBranchOutAnchors: AnchorPoint[] = [];
  const mainMergeAnchors: AnchorPoint[] = [];
  const branchOutAnchorSeen = new Set<string>();
  function pushBranchAnchor(
    branchName: string,
    point: AnchorPoint,
    kind: 'out' | 'merge'
  ) {
    const xKey = Math.round(point.x * 10) / 10;
    const yKey = Math.round(point.y * 10) / 10;
    const dedupeKey = `${kind}:${branchName}:${xKey}:${yKey}`;
    if (branchOutAnchorSeen.has(dedupeKey)) return;
    branchOutAnchorSeen.add(dedupeKey);
    if (branchName === defaultBranch) {
      if (kind === 'merge') {
        mainMergeAnchors.push(point);
      } else {
        mainBranchOutAnchors.push(point);
      }
      return;
    }
    const branchMap = kind === 'merge' ? branchMergeAnchorsByBranch : branchOutAnchorsByBranch;
    const existing = branchMap.get(branchName) ?? [];
    existing.push(point);
    branchMap.set(branchName, existing);
  }
  for (const branch of activeBranches) {
    const forkX = branchForkX(branch);
    const forkY = timeCoordToY(forkX);
    const parentName = branch.parentBranch;
    const hasVisibleNonDefaultParent =
      !!parentName &&
      parentName !== defaultBranch &&
      parentName !== branch.name &&
      laneXByBranch.has(parentName);
    if (hasVisibleNonDefaultParent) {
      const parentLaneX = laneXByBranch.get(parentName!)!;
      pushBranchAnchor(parentName!, projectPoint(parentLaneX, forkY), 'out');
    } else {
      pushBranchAnchor(defaultBranch, projectPoint(mainX, forkY), 'out');
    }
  }
  for (const branch of activeBranches) {
    const mergeNode = mergeNodeByMergedHeadSha.get(branch.headSha);
    if (!mergeNode) continue;
    const mergeTimeX = nodeXByFullSha.get(mergeNode.fullSha) ?? timeToX(mergeNode.date);
    const mergeY = timeCoordToY(mergeTimeX);
    const branchLaneX = laneXByBranch.get(branch.name) ?? mainX;
    pushBranchAnchor(defaultBranch, projectPoint(mainX, mergeY), 'merge');
    pushBranchAnchor(branch.name, projectPoint(branchLaneX, mergeY), 'merge');
  }
  const mainClumpAnchors: AnchorPoint[] = [
    ...mainBranchOutAnchors,
    ...mainMergeAnchors,
  ];

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
    const labelWidth = estimateSvgTextWidth(formatCommitsAhead(branchAheadCount(b)));
    return Math.max(max, lanePosX + AHEAD_LABEL_OFFSET_X + labelWidth);
  }, mainX + MAIN_LABEL_OFFSET_X + estimateSvgTextWidth(defaultBranch));
  const logicalSvgWidth = maxBranchVisualEndX + rightPad + 80;

  // Merged PRs lane layout
  const MERGED_LANE_HEIGHT = 60;
  const MERGED_LANES = 4;
  const logicalSvgHeight = logicalTimelineHeight;
  const svgWidth = isHorizontal ? logicalSvgHeight : logicalSvgWidth;
  const svgHeight = isHorizontal ? logicalSvgWidth : logicalSvgHeight;
  const canvasWidth = svgWidth + CANVAS_PAD_X * 2;
  const canvasHeight = svgHeight + CANVAS_PAD_Y * 2;
  const graphOffsetX = (canvasWidth - svgWidth) / 2;
  const graphOffsetY = (canvasHeight - svgHeight) / 2;
  graphOffsetRef.current = { x: graphOffsetX, y: graphOffsetY };

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
    const target = checkedOutAnchor ?? fallbackCenter;
    const signature = [
      Math.round(target.x * 10) / 10,
      Math.round(target.y * 10) / 10,
      Math.round(viewportSize.width),
      Math.round(viewportSize.height),
      Math.round(zoomValue * 1000) / 1000,
    ].join('|');
    if (hasAutoCenteredRef.current && autoCenterSignatureRef.current === signature) return;
    const scale = getCameraScale(zoomValue, isHorizontal);
    const nextPan = clampPan(
      {
        x: viewportSize.width / 2 - graphOffsetX - target.x * scale.x,
        y: viewportSize.height / 2 - graphOffsetY - target.y * scale.y,
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
    effectiveTimeScale,
    effectiveSpacingMode,
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
    const viewportSpan = isHorizontal ? viewportSize.width : viewportSize.height;
    const axisGraphOffset = isHorizontal ? graphOffsetX : graphOffsetY;
    const scalePair = getCameraScale(zoomRef.current, isHorizontal);
    const axisScale = Math.max(isHorizontal ? scalePair.x : scalePair.y, 0.0001);
    const axisSvgSize = isHorizontal ? svgWidth : svgHeight;
    const visibleWorldSpan = viewportSpan / axisScale;
    const axisCoord = isHorizontal ? projected.x : projected.y;
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
  ]);

  useEffect(() => {
    return () => {
      clearTimelineRevealTimer();
    };
  }, []);

  const worldUnitsPerScreenPx = 1 / Math.max(renderCameraScale.x, 0.0001);
  const worldPx = (px: number) => px * worldUnitsPerScreenPx;
  const scaledNodeSize = NODE_SIZE;
  // Keep interaction hit areas consistent in screen pixels across zoom levels.
  const scaledHoverHitSize = worldPx(20);
  // Branch hover lines use vector-effect: non-scaling-stroke, so this should
  // stay in screen px (not inverse-scaled by zoom) to avoid oversized hitboxes when zoomed out.
  const branchHitStrokeWidth = BRANCH_HIT_STROKE_WIDTH;
  const clumpProgress = clumpProgressForZoom(animatedClumpZoom);
  const clumpDistanceWorld =
    worldPx(CLUMP_TOUCH_DISTANCE_PX) +
    worldPx(CLUMP_DISTANCE_PX) * clumpProgress;
  const clumpMaxEntries =
    CLUMP_MAX_ENTRIES_TOUCH +
    Math.round((CLUMP_MAX_ENTRIES_FULL - CLUMP_MAX_ENTRIES_TOUCH) * clumpProgress);
  const drawPathMainClass = (!ENABLE_TIMELINE_INTRO_ANIMATIONS || animationsLocked) ? undefined : 'draw-path-main';
  const drawPathArcClass = (!ENABLE_TIMELINE_INTRO_ANIMATIONS || animationsLocked) ? undefined : 'draw-path-arc';
  const fadeInInfoClass = (!ENABLE_TIMELINE_INTRO_ANIMATIONS || animationsLocked) ? undefined : 'fade-in-info';
  const fadeInPillClass = (!ENABLE_TIMELINE_INTRO_ANIMATIONS || animationsLocked) ? undefined : 'fade-in-pill';
  const mainTimelineOpacity = hoveredPR !== null || hoveredBranch !== null ? 0.2 : 1;
  const timelineCanvasVisible = timelineRevealPhase !== 'hidden';
  const holdTimelineForInitialCenter =
    isLoading || (!hasInitialRevealDone && hasTimelineSeedData && timelineRevealPhase !== 'done' && !hasUserMovedCameraRef.current);

  return (
    <div className="h-full">
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
            transform: `translate3d(${panRef.current.x}px, ${panRef.current.y}px, 0)`,
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
            '--icon-inv-scale': String(1 / Math.max(renderCameraScale.x, 0.0001)),
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
            transform={`scale(${renderCameraScale.x} ${renderCameraScale.y})`}
            style={{
              opacity: timelineCanvasVisible ? 1 : 0,
              visibility: timelineCanvasVisible ? 'visible' : 'hidden',
              transition: `opacity ${INITIAL_REVEAL_FADE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
              pointerEvents: holdTimelineForInitialCenter ? 'none' : 'auto',
            }}
          >
          <g
          >

          {/* ── Main timeline + merge nodes ── */}
          <g style={{ opacity: mainTimelineOpacity, transition: 'opacity 0.15s' }}>
            {/* Use <path> not <line>: pathLength on <line> is SVG 2 only and unreliable in WKWebView */}
            <path
              d={`M ${pathCoord(mainX, mainStartY)} L ${pathCoord(mainX, mainActiveEndY)}`}
              fill="none"
              stroke="#78716c"
              strokeWidth={1.5}
              pathLength={1}
              className={drawPathMainClass}
            />
            {hasMainStaleTailY && (
              <g className="main-stale-tail-glow">
                <path
                  d={`M ${pathCoord(mainX, mainActiveEndY)} L ${pathCoord(mainX, mainEndY)}`}
                  fill="none"
                  stroke="#a8a29e"
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
                const mainInitialCommitAnchor = entries.length > 0
                  ? [{ x: entries[0].x, y: entries[0].y }]
                  : [];
                const mainEndCommitAnchor = entries.length > 0
                  ? [{ x: entries[entries.length - 1].x, y: entries[entries.length - 1].y }]
                  : [];
                const mainStructuralCommitAnchors = [...mainClumpAnchors];
                const mainSecondaryCommitAnchors = [
                  ...mainInitialCommitAnchor,
                  ...mainEndCommitAnchor,
                ];
                const mainDirectClumpAnchors = [
                  ...mainStructuralCommitAnchors,
                  ...mainSecondaryCommitAnchors,
                ];
                const structuralMainEntryIndices = selectEntryIndicesForAnchors(entries, mainStructuralCommitAnchors);
                const secondaryMainEntryIndices = selectEntryIndicesForAnchors(entries, mainSecondaryCommitAnchors);
                const structuralMainEntryShas = new Set(
                  Array.from(structuralMainEntryIndices)
                    .map((idx) => entries[idx]?.item.fullSha)
                    .filter((sha): sha is string => typeof sha === 'string')
                );
                const secondaryMainEntryShas = new Set(
                  Array.from(secondaryMainEntryIndices)
                    .map((idx) => entries[idx]?.item.fullSha)
                    .filter((sha): sha is string => typeof sha === 'string')
                );
                const firstMainCommitSha = entries[0]?.item.fullSha;
                const clusters = clusterDirectCommitsWithAnchors(
                  entries,
                  clumpDistanceWorld,
                  protectedMainForkShas,
                  mainDirectClumpAnchors,
                  clumpMaxEntries,
                  firstMainCommitSha
                    ? (entry) =>
                      (entry.item.fullSha === firstMainCommitSha ? 1.25 : 0) +
                      (secondaryMainEntryShas.has(entry.item.fullSha) ? CLUMP_SECONDARY_PRIORITY : 0) +
                      (structuralMainEntryShas.has(entry.item.fullSha) ? CLUMP_STRUCTURAL_PRIORITY : 0)
                    : undefined
                );
                return clusters.map((cluster) => {
                  const count = cluster.entries.length;
                  const first = cluster.entries[0].item;
                  const last = cluster.entries[count - 1].item;
                  const countLabel = clumpCountLabel(count);
                  const clusterKey = `direct-clump-${first.fullSha}-${last.fullSha}`;
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
                    return (
                      <circle
                        key={clusterKey}
                        className="branch-map-icon-fixed"
                        cx={anchorX}
                        cy={anchorY}
                        r={scaledNodeSize / 2}
                        fill="#57534e"
                        stroke="var(--background)"
                        strokeWidth={1.2}
                        style={{ cursor: 'pointer' }}
                        onClick={(event) => handleCommitNodeClick(event, c.fullSha)}
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

                  const firstTime = new Date(first.date).getTime();
                  const lastTime = new Date(last.date).getTime();
                  const rangeLine = firstTime === lastTime
                    ? fmtTooltipDate(last.date)
                    : `${fmtTooltipDate(first.date)} → ${fmtTooltipDate(last.date)}`;
                  const latestCommitMessage = last.message
                    ? truncatePrompt(last.message, COMMIT_CLUSTER_PREVIEW_MAX)
                    : 'on main';

                  return (
                    <g key={clusterKey} className="branch-map-icon-fixed">
                      <circle
                        cx={anchorX}
                        cy={anchorY}
                        r={scaledNodeSize / 2 + CLUMP_SIZE_BOOST_PX}
                        fill="#57534e"
                        stroke="var(--background)"
                        strokeWidth={1.2}
                        style={{ cursor: 'pointer' }}
                        onClick={(event) => handleCommitNodeClick(event, last.fullSha)}
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
                      <text
                        x={anchorX}
                        y={anchorY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={count >= 10 ? 6.5 : 8}
                        fill="#fafaf9"
                        fontWeight={600}
                        style={{ pointerEvents: 'none' }}
                      >
                        {countLabel}
                      </text>
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
                const promptAnchors = promptEntries.map((entry) => ({ x: entry.x, y: entry.y }));
                const clusters = clusterMarkersByDistance(promptEntries, clumpDistanceWorld, {
                  preferredAnchors: promptAnchors,
                  maxEntriesPerCluster: clumpMaxEntries,
                });
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
                    count > 1 ? scaledNodeSize + CLUMP_SIZE_BOOST_PX * 2 : scaledNodeSize;
                  const markerPath = promptMarkerPath(anchorX, anchorY, markerSize);
                  const hitSize = scaledHoverHitSize;
                  const markerStrokeWidth = 1.2;
                  const label = count > 1 ? clumpCountLabel(count) : '';
                  const labelFontSize = count >= 10 ? 6.2 : 8;

                  if (count === 1) {
                    const marker = lastEntry.item.marker;
                    return (
                      <g key={clusterKey}>
                        <g className="branch-map-icon-fixed" style={{ pointerEvents: 'none' }}>
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
                      <g className="branch-map-icon-fixed" style={{ pointerEvents: 'none' }}>
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
                          fontSize={labelFontSize}
                          fill="#14b8a6"
                          fontWeight={700}
                          style={{
                            fontVariantNumeric: 'tabular-nums',
                          }}
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
                       
                        className="branch-map-icon-fixed"
                        cx={mainX}
                        cy={y}
                        r={scaledNodeSize / 2}
                        fill={isHovered ? '#44403c' : '#78716c'}
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
            const strokeColor = isHovered ? '#44403c' : '#78716c';
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

            const mergedBranch = branches.find(b => b.name === pr.branchName);
            const focusedPRColor = mergedBranch?.status === 'conflict-risk' ? '#dc2626' : '#d97706';
            return (
              <g
                key={pr.number}
                opacity={opacity}
                style={{ cursor: mergedBranch ? 'pointer' : 'default', transition: 'opacity 0.15s' }}
                onMouseEnter={() => setHoveredPR(pr.number)}
                onMouseLeave={() => { setHoveredPR(null); setHoveredPRCommit(null); }}
                onClick={() => { if (mergedBranch) onBranchClick?.(mergedBranch); }}
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
                   
                    className="branch-map-icon-fixed"
                    cx={mainX}
                    cy={forkY}
                    r={scaledNodeSize / 2}
                    fill="#fafaf9"
                    stroke={isFocusedPR ? focusedPRColor : strokeColor}
                    strokeWidth={(isFocusedPR ? 1.5 : 1)}
                    style={{ pointerEvents: 'none' }}
                  />
                  <circle
                   
                    className="branch-map-icon-fixed"
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
                         
                          className="branch-map-icon-fixed"
                          cx={arcX}
                          cy={cy}
                          r={tickSize / 2}
                          fill={isFocusedPR ? focusedPRColor : isHovered ? '#a8a29e' : '#78716c'}
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
                     
                      className="branch-map-icon-fixed"
                      href={pr.authorAvatar}
                      x={arcX - 9}
                      y={midY - 10}
                      width={18}
                      height={18}
                      style={{ clipPath: 'circle(9px at 9px 9px)' }}
                    />
                  ) : (
                    <circle className="branch-map-icon-fixed" cx={arcX} cy={midY} r={8} fill="#57534e" />
                  )}
                  <text
                    className="branch-map-icon-fixed"
                    x={arcX + 12}
                    y={midY + 4}
                    fontSize={12}
                    fill={isHovered ? '#1c1917' : '#57534e'}
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
              const isMergedBranch = b.commitsAhead === 0;
              const isConflict = b.status === 'conflict-risk' && !isMergedBranch;
              const isSelected = selectedBranch?.name === b.name;
              const isHovered = hoveredBranch === b.name;
              const hasSelection = selectedBranch != null;
              const isLocalBranch = b.remoteSyncStatus !== 'on-github';

              const isFocusedError = focusedErrorBranch?.name === b.name;
              const focusedErrorColor = b.status === 'conflict-risk' ? '#dc2626' : '#d97706';
              const neutralColor = hasSelection ? '#57534e' : '#78716c';
              const color = isFocusedError
                ? focusedErrorColor
                : isSelected
                  ? '#22d3ee'
                  : isLocalBranch
                    ? neutralColor
                    : isConflict
                      ? '#dc2626'
                      : neutralColor;
              const strokeWidth = isSelected ? 2.5 : isHovered ? 2 : isFocusedError ? 2 : 1.5;
              const defaultStrokeColor = isHovered && !isSelected ? '#44403c' : color;

              const mergeNodeForBranch = isMergedBranch
                ? mergeNodeByMergedHeadSha.get(b.headSha)
                : undefined;
              const mergeNodeTimeX = mergeNodeForBranch
                ? (nodeXByFullSha.get(mergeNodeForBranch.fullSha) ?? timeToX(mergeNodeForBranch.date))
                : null;
              const baseTipTimeX = branchTipX(b);
              const tipTimeX = mergeNodeTimeX != null ? Math.max(baseTipTimeX, mergeNodeTimeX) : baseTipTimeX;
              const commitTipTimeX = isMergedBranch ? baseTipTimeX : tipTimeX;
              const tipY = timeCoordToY(tipTimeX);
              const cornerDir = tipY <= forkY ? -1 : 1;
              const turnY = forkY + cornerDir * cornerR;
              const mergeTargetX = mainX;
              const mergeTargetY = mergeNodeTimeX != null ? timeCoordToY(mergeNodeTimeX) : null;
              const hasMergeBackConnector =
                mergeTargetY != null && Math.abs(lanePosX - mergeTargetX) > 0.5;
              const mergeBackPath = (() => {
                if (!hasMergeBackConnector || mergeTargetY == null) return null;
                const horizontalDir = mergeTargetX >= lanePosX ? 1 : -1;
                const verticalDelta = mergeTargetY - tipY;
                if (Math.abs(verticalDelta) < 0.5) {
                  return `M ${pathCoord(lanePosX, tipY)} L ${pathCoord(mergeTargetX, mergeTargetY)}`;
                }
                const cornerYOffset = Math.min(cornerR, Math.abs(verticalDelta));
                const preTurnY = mergeTargetY - Math.sign(verticalDelta) * cornerYOffset;
                const cornerX = lanePosX + horizontalDir * cornerR;
                return `M ${pathCoord(lanePosX, tipY)} L ${pathCoord(lanePosX, preTurnY)} Q ${pathCoord(lanePosX, mergeTargetY)} ${pathCoord(cornerX, mergeTargetY)} L ${pathCoord(mergeTargetX, mergeTargetY)}`;
              })();
              let curvePath: string;
              if (startX === lanePosX) {
                curvePath = `M ${pathCoord(lanePosX, forkY)} L ${pathCoord(lanePosX, tipY)}`;
              } else if (startX < lanePosX) {
                curvePath = `M ${pathCoord(startX, forkY)} L ${pathCoord(lanePosX - cornerR, forkY)} Q ${pathCoord(lanePosX, forkY)} ${pathCoord(lanePosX, turnY)} L ${pathCoord(lanePosX, tipY)}`;
              } else {
                curvePath = `M ${pathCoord(startX, forkY)} L ${pathCoord(lanePosX + cornerR, forkY)} Q ${pathCoord(lanePosX, forkY)} ${pathCoord(lanePosX, turnY)} L ${pathCoord(lanePosX, tipY)}`;
              }

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
              const minCommitTimeX = forkTimeX + cornerR + 6;
              const maxCommitTimeX = Math.max(minCommitTimeX, commitTipTimeX);
              const commitItems: Array<BranchCommitPreview | undefined> = hasPreviewData
                ? displayedCommits
                : Array.from({ length: commitCount }, () => undefined);
              let commitDots = hasPreviewData
                ? commitItems.map((commit) => {
                  const rawX = timeToX(commit?.date ?? b.lastCommitDate);
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
                fullBranchShouldUseLocalGray && !isFocusedError && !isSelected && !isHovered
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
              const branchOutAnchors = branchOutAnchorsByBranch.get(b.name) ?? [];
              const branchMergeAnchors = branchMergeAnchorsByBranch.get(b.name) ?? [];
              const branchStartCommitAnchor = commitDotEntries.length > 0
                ? [{ x: commitDotEntries[0].x, y: commitDotEntries[0].y }]
                : [];
              const branchEndCommitAnchor =
                branchEndDotIndex != null && commitDotEntries[branchEndDotIndex]
                  ? [{ x: commitDotEntries[branchEndDotIndex].x, y: commitDotEntries[branchEndDotIndex].y }]
                  : [];
              const branchStructuralCommitAnchors = [
                ...branchOutAnchors,
                ...branchMergeAnchors,
              ];
              const branchSecondaryCommitAnchors = [
                ...branchStartCommitAnchor,
                ...branchEndCommitAnchor,
              ];
              const branchClumpAnchors = [
                ...branchStructuralCommitAnchors,
                ...branchSecondaryCommitAnchors,
              ];
              const structuralBranchEntryIndices = selectEntryIndicesForAnchors(
                commitDotEntries,
                branchStructuralCommitAnchors
              );
              const secondaryBranchEntryIndices = selectEntryIndicesForAnchors(
                commitDotEntries,
                branchSecondaryCommitAnchors
              );
              const commitDotClusters = clusterMarkersByDistance(commitDotEntries, clumpDistanceWorld, {
                preferredAnchors: branchClumpAnchors,
                maxEntriesPerCluster: clumpMaxEntries,
                anchorPriority: (entry) =>
                  (entry.item.index === 0 ? 1.25 : 0) +
                  (secondaryBranchEntryIndices.has(entry.item.index) ? CLUMP_SECONDARY_PRIORITY : 0) +
                  (structuralBranchEntryIndices.has(entry.item.index) ? CLUMP_STRUCTURAL_PRIORITY : 0),
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
              const promptBranchAnchors = promptMarkerEntries.map((entry) => ({ x: entry.x, y: entry.y }));
              const promptMarkerClusters = clusterMarkersByDistance(promptMarkerEntries, clumpDistanceWorld, {
                preferredAnchors: promptBranchAnchors,
                maxEntriesPerCluster: clumpMaxEntries,
              });

              const brDelay = branchDelayMs.get(b.name) ?? 0;

              // If this branch forks directly on a merge node, suppress status pills
              // below the baseline so labels don't stack under dense marker clusters.
              const forkOnNode = showMergeTicks && sortedNodes.some((n) =>
                Math.abs((nodeXByFullSha.get(n.fullSha) ?? timeToX(n.date)) - forkTimeX) < scaledNodeSize
              );
              const statusLabelX = lanePosX;
              const statusLabelY = forkY + 16;
              const statusLabelPoint = projectPoint(statusLabelX, statusLabelY);
              const hasOpenPR = openPRBranchNames.has(b.name);
              const daysSinceCommit = (Date.now() - new Date(b.lastCommitDate).getTime()) / 86400000;
              const showClockIcon = hasOpenPR && daysSinceCommit >= 60;
              const nameAnchor = projectPoint(lanePosX, forkY);
              const nameDx = isHorizontal ? 24 : 20;
              const nameDy = isHorizontal ? -20 : -12;
              const namePoint = { x: nameAnchor.x + nameDx, y: nameAnchor.y + nameDy };
              const clockPoint = { x: namePoint.x + 10, y: namePoint.y };
              const branchGroupOpacity =
                isFocusedError ? 1 : hoveredBranch !== null && !isHovered ? 0.12 : hasSelection && !isSelected ? 0.5 : 1;

              return (
                <g
                  key={b.name}
                  className="cursor-pointer"
                  onClick={() => onBranchSelect?.(b)}
                  onDoubleClick={() => onBranchClick?.(b)}
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

                  {/* Glow effect for selected branch — keyed so it never displaces the arc path */}
                  {isSelected && (
                    <path
                      key="glow"
                      d={curvePath}
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth={8}
                      strokeOpacity={0.25}
                      style={{ filter: 'blur(4px)' }}
                    />
                  )}
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
                      strokeWidth={Math.max(1, strokeWidth - 0.2)}
                      className={drawPathArcClass}
                      style={{
                        '--delay': `${brDelay}ms`,
                        transition: 'stroke 0.12s ease',
                      } as React.CSSProperties}
                    />
                  )}
                  {!fullBranchShouldUseLocalGray && localSegmentStartY != null && (
                    <path
                      d={`M ${pathCoord(lanePosX, localSegmentStartY)} L ${pathCoord(lanePosX, tipY)}`}
                      fill="none"
                      stroke={isHovered && !isSelected ? '#78716c' : LOCAL_UNPUSHED_GRAY}
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
                        count > 1 ? scaledNodeSize + CLUMP_SIZE_BOOST_PX * 2 : scaledNodeSize;
                      const markerPath = promptMarkerPath(anchorX, anchorY, markerSize);
                      const markerStrokeWidth = 1.2;
                      const label = count > 1 ? clumpCountLabel(count) : '';
                      const labelFontSize = count >= 10 ? 6.2 : 8;

                      return (
                        <g key={`${clusterKey}-visual`} className="branch-map-icon-fixed" style={{ pointerEvents: 'none' }}>
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
                              fontSize={labelFontSize}
                              fill="#14b8a6"
                              fontWeight={700}
                              style={{
                                fontVariantNumeric: 'tabular-nums',
                              }}
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
                      : (isSelected ? '#22d3ee' : isConflict ? '#dc2626' : isFocusedError ? focusedErrorColor : '#57534e');
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

                        return (
                          <circle
                            key={clusterKey}
                            className="branch-map-icon-fixed"
                            cx={anchorX}
                            cy={anchorY}
                            r={scaledNodeSize / 2}
                            fill={dotFill}
                            stroke="var(--background)"
                            strokeWidth={1.2}
                            style={{ cursor: 'pointer' }}
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
                      const targetCommitSha = lastRealEntry.item.commit?.fullSha ?? b.headSha;

                      return (
                        <g key={clusterKey} className="branch-map-icon-fixed">
                          <circle
                            cx={anchorX}
                            cy={anchorY}
                            r={scaledNodeSize / 2 + CLUMP_SIZE_BOOST_PX}
                            fill={dotFill}
                            stroke="var(--background)"
                            strokeWidth={1.2}
                            style={{ cursor: 'pointer' }}
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
                                lines: [`${count} commits`, latestCommitMessage, dateRangeLabel],
                                avatarFallback: latestAuthor?.charAt(0).toUpperCase() || '?',
                              })
                            }
                            onMouseLeave={() => setTooltip(null)}
                          />
                          <text
                            x={anchorX}
                            y={anchorY}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize={count >= 10 ? 6.5 : 8}
                            fill="#fafaf9"
                            fontWeight={600}
                            style={{ pointerEvents: 'none' }}
                          >
                            {clumpCountLabel(count)}
                          </text>
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
                      <g className="branch-map-icon-fixed" style={{ pointerEvents: 'none' }}>
                        <circle cx={clockPoint.x} cy={clockPoint.y} r={4.2} stroke={color} strokeWidth={1.2} fill="none" />
                        <line x1={clockPoint.x} y1={clockPoint.y - 2.9} x2={clockPoint.x} y2={clockPoint.y} stroke={color} strokeWidth={1.2} strokeLinecap="round" />
                        <line x1={clockPoint.x} y1={clockPoint.y} x2={clockPoint.x + 2.3} y2={clockPoint.y + 1.5} stroke={color} strokeWidth={1.2} strokeLinecap="round" />
                      </g>
                    )}
                  </g>

                  {/* Status labels — own fade-in-pill group so they animate independently of fade-in-info */}
                  {!forkOnNode && !isLocalBranch && isConflict && (
                    <g
                      className={fadeInPillClass}
                      style={{ '--delay': `${brDelay + INFO_OFFSET}ms`, cursor: 'pointer' } as React.CSSProperties}
                      onClick={() => onBranchClick?.(b)}
                    >
                      {/* Invisible hit area — text alone is too small to click reliably */}
                      <rect
                       
                        x={statusLabelPoint.x - 22}
                        y={statusLabelPoint.y - 11}
                        width={44}
                        height={14}
                        fill="transparent"
                      />
                      {isConflict && (
                        <text x={statusLabelPoint.x} y={statusLabelPoint.y} textAnchor="middle" fontSize={10} fill="#dc2626">conflict</text>
                      )}
                    </g>
                  )}
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
              const isMergedBranch = b.commitsAhead === 0;
              const mergeNodeForBranch = b.commitsAhead === 0
                ? mergeNodeByMergedHeadSha.get(b.headSha)
                : undefined;
              const mergeNodeTimeX = mergeNodeForBranch
                ? (nodeXByFullSha.get(mergeNodeForBranch.fullSha) ?? timeToX(mergeNodeForBranch.date))
                : null;
              const baseTipTimeX = branchTipX(b);
              const tipTimeX = mergeNodeTimeX != null ? Math.max(baseTipTimeX, mergeNodeTimeX) : baseTipTimeX;
              const commitTipTimeX = isMergedBranch ? baseTipTimeX : tipTimeX;

              const isConflict = b.status === 'conflict-risk' && !isMergedBranch;
              const isSelected = selectedBranch?.name === b.name;
              const isHovered = hoveredBranch === b.name;
              const hasSelection = selectedBranch != null;
              const isLocalBranch = b.remoteSyncStatus !== 'on-github';
              const isFocusedError = focusedErrorBranch?.name === b.name;
              const focusedErrorColor = b.status === 'conflict-risk' ? '#dc2626' : '#d97706';
              const branchGroupOpacity =
                isFocusedError ? 1 : hoveredBranch !== null && !isHovered ? 0.12 : hasSelection && !isSelected ? 0.5 : 1;

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
              const minCommitTimeX = forkTimeX + cornerR + 6;
              const maxCommitTimeX = Math.max(minCommitTimeX, commitTipTimeX);
              const commitItems: Array<BranchCommitPreview | undefined> = hasPreviewData
                ? displayedCommits
                : Array.from({ length: commitCount }, () => undefined);
              let commitDots = hasPreviewData
                ? commitItems.map((commit) => {
                  const rawX = timeToX(commit?.date ?? b.lastCommitDate);
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
              const branchOutAnchors = branchOutAnchorsByBranch.get(b.name) ?? [];
              const branchMergeAnchors = branchMergeAnchorsByBranch.get(b.name) ?? [];
              const branchStartCommitAnchor = commitDotEntries.length > 0
                ? [{ x: commitDotEntries[0].x, y: commitDotEntries[0].y }]
                : [];
              const branchEndCommitAnchor =
                branchEndDotIndex != null && commitDotEntries[branchEndDotIndex]
                  ? [{ x: commitDotEntries[branchEndDotIndex].x, y: commitDotEntries[branchEndDotIndex].y }]
                  : [];
              const branchStructuralCommitAnchors = [
                ...branchOutAnchors,
                ...branchMergeAnchors,
              ];
              const branchSecondaryCommitAnchors = [
                ...branchStartCommitAnchor,
                ...branchEndCommitAnchor,
              ];
              const branchClumpAnchors = [
                ...branchStructuralCommitAnchors,
                ...branchSecondaryCommitAnchors,
              ];
              const structuralBranchEntryIndices = selectEntryIndicesForAnchors(
                commitDotEntries,
                branchStructuralCommitAnchors
              );
              const secondaryBranchEntryIndices = selectEntryIndicesForAnchors(
                commitDotEntries,
                branchSecondaryCommitAnchors
              );
              const commitDotClusters = clusterMarkersByDistance(commitDotEntries, clumpDistanceWorld, {
                preferredAnchors: branchClumpAnchors,
                maxEntriesPerCluster: clumpMaxEntries,
                anchorPriority: (entry) =>
                  (entry.item.index === 0 ? 1.25 : 0) +
                  (secondaryBranchEntryIndices.has(entry.item.index) ? CLUMP_SECONDARY_PRIORITY : 0) +
                  (structuralBranchEntryIndices.has(entry.item.index) ? CLUMP_STRUCTURAL_PRIORITY : 0),
              });

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
              const promptBranchAnchors = promptMarkerEntries.map((entry) => ({ x: entry.x, y: entry.y }));
              const promptMarkerClusters = clusterMarkersByDistance(promptMarkerEntries, clumpDistanceWorld, {
                preferredAnchors: promptBranchAnchors,
                maxEntriesPerCluster: clumpMaxEntries,
              });

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
                      count > 1 ? scaledNodeSize + CLUMP_SIZE_BOOST_PX * 2 : scaledNodeSize;
                    const markerPath = promptMarkerPath(anchorX, anchorY, markerSize);
                    const label = count > 1 ? clumpCountLabel(count) : '';
                    const labelFontSize = count >= 10 ? 6.2 : 8;

                    return (
                      <g key={`prompt-overlay-${clusterKey}`} className="branch-map-icon-fixed">
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
                            fontSize={labelFontSize}
                            fill="#14b8a6"
                            fontWeight={700}
                            style={{ fontVariantNumeric: 'tabular-nums' }}
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
                      : (isSelected ? '#22d3ee' : isConflict ? '#dc2626' : isFocusedError ? focusedErrorColor : '#57534e');

                    if (count <= 1) {
                      return (
                        <g key={`commit-overlay-${clusterKey}`} className="branch-map-icon-fixed">
                          <circle
                            cx={anchorX}
                            cy={anchorY}
                            r={scaledNodeSize / 2 + 1.4}
                            fill="var(--background)"
                          />
                          <circle
                            cx={anchorX}
                            cy={anchorY}
                            r={scaledNodeSize / 2}
                            fill={dotFill}
                          />
                        </g>
                      );
                    }

                    return (
                      <g key={`commit-overlay-${clusterKey}`} className="branch-map-icon-fixed">
                        <circle
                          cx={anchorX}
                          cy={anchorY}
                          r={scaledNodeSize / 2 + CLUMP_SIZE_BOOST_PX + 1.4}
                          fill="var(--background)"
                        />
                        <circle
                          cx={anchorX}
                          cy={anchorY}
                          r={scaledNodeSize / 2 + CLUMP_SIZE_BOOST_PX}
                          fill={dotFill}
                        />
                        <text
                          x={anchorX}
                          y={anchorY}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontSize={count >= 10 ? 6.5 : 8}
                          fill="#fafaf9"
                          fontWeight={600}
                        >
                          {clumpCountLabel(count)}
                        </text>
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
              const mainInitialCommitAnchor = entries.length > 0
                ? [{ x: entries[0].x, y: entries[0].y }]
                : [];
              const mainEndCommitAnchor = entries.length > 0
                ? [{ x: entries[entries.length - 1].x, y: entries[entries.length - 1].y }]
                : [];
              const mainStructuralCommitAnchors = [...mainClumpAnchors];
              const mainSecondaryCommitAnchors = [
                ...mainInitialCommitAnchor,
                ...mainEndCommitAnchor,
              ];
              const mainDirectClumpAnchors = [
                ...mainStructuralCommitAnchors,
                ...mainSecondaryCommitAnchors,
              ];
              const structuralMainEntryIndices = selectEntryIndicesForAnchors(entries, mainStructuralCommitAnchors);
              const secondaryMainEntryIndices = selectEntryIndicesForAnchors(entries, mainSecondaryCommitAnchors);
              const structuralMainEntryShas = new Set(
                Array.from(structuralMainEntryIndices)
                  .map((idx) => entries[idx]?.item.fullSha)
                  .filter((sha): sha is string => typeof sha === 'string')
              );
              const secondaryMainEntryShas = new Set(
                Array.from(secondaryMainEntryIndices)
                  .map((idx) => entries[idx]?.item.fullSha)
                  .filter((sha): sha is string => typeof sha === 'string')
              );
              const firstMainCommitSha = entries[0]?.item.fullSha;
              const clusters = clusterDirectCommitsWithAnchors(
                entries,
                clumpDistanceWorld,
                protectedMainForkShas,
                mainDirectClumpAnchors,
                clumpMaxEntries,
                firstMainCommitSha
                  ? (entry) =>
                    (entry.item.fullSha === firstMainCommitSha ? 1.25 : 0) +
                    (secondaryMainEntryShas.has(entry.item.fullSha) ? CLUMP_SECONDARY_PRIORITY : 0) +
                    (structuralMainEntryShas.has(entry.item.fullSha) ? CLUMP_STRUCTURAL_PRIORITY : 0)
                  : undefined
              );

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
                const anchorX = animatedAnchor.x;
                const anchorY = animatedAnchor.y;

                if (count === 1) {
                  return (
                    <g key={`main-direct-overlay-${clusterKey}`} className="branch-map-icon-fixed">
                      <circle
                        cx={anchorX}
                        cy={anchorY}
                        r={scaledNodeSize / 2 + 1.4}
                        fill="var(--background)"
                      />
                      <circle
                        cx={anchorX}
                        cy={anchorY}
                        r={scaledNodeSize / 2}
                        fill="#57534e"
                      />
                    </g>
                  );
                }

                return (
                  <g key={`main-direct-overlay-${clusterKey}`} className="branch-map-icon-fixed">
                    <circle
                      cx={anchorX}
                      cy={anchorY}
                      r={scaledNodeSize / 2 + CLUMP_SIZE_BOOST_PX + 1.4}
                      fill="var(--background)"
                    />
                    <circle
                      cx={anchorX}
                      cy={anchorY}
                      r={scaledNodeSize / 2 + CLUMP_SIZE_BOOST_PX}
                      fill="#57534e"
                    />
                    <text
                      x={anchorX}
                      y={anchorY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={count >= 10 ? 6.5 : 8}
                      fill="#fafaf9"
                      fontWeight={600}
                    >
                      {clumpCountLabel(count)}
                    </text>
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

          {/* Checked-out commit marker */}
          {!holdTimelineForInitialCenter && checkedOutDisplayIndicatorLocal && (() => {
            const markerPoint = projectPoint(checkedOutDisplayIndicatorLocal.x, checkedOutDisplayIndicatorLocal.y);
            return (
              <g className="branch-map-icon-fixed" style={{ pointerEvents: 'none' }}>
                <circle
                  className="checked-out-halo-pulse"
                  cx={markerPoint.x}
                  cy={markerPoint.y}
                  r={12}
                  fill="#93c5fd"
                  opacity={0.35}
                />
                <circle
                  cx={markerPoint.x}
                  cy={markerPoint.y}
                  r={7}
                  fill="#2563eb"
                />
              </g>
            );
          })()}
          </g>
        </svg>
        </div>

        {holdTimelineForInitialCenter && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="relative h-6 w-6">
              <span
                className="absolute inset-0 rounded-full checked-out-halo-pulse"
                style={{ backgroundColor: '#93c5fd', opacity: 0.35 }}
              />
              <span
                className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ backgroundColor: '#2563eb' }}
              />
            </div>
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
          const tooltipW = Math.min(320, Math.max(240, viewportSize.width - 16));
          // Use live camera refs to avoid tooltip drift when zoom/pan state is throttled.
          const livePan = panRef.current;
          const liveCameraScale = getCameraScale(zoomRef.current, isHorizontal);
          const anchorX = livePan.x + graphOffsetX + tooltip.x * liveCameraScale.x;
          const anchorY = livePan.y + graphOffsetY + tooltip.y * liveCameraScale.y;
          const bodyContentW = Math.max(120, tooltipW - 56);
          const estimatedCharsPerLine = Math.max(18, Math.floor(bodyContentW / 6));
          const subtitleLines = subtitle ? Math.max(1, Math.ceil(subtitle.length / estimatedCharsPerLine)) : 0;
          const metaLines = meta ? Math.max(1, Math.ceil(meta.length / estimatedCharsPerLine)) : 0;
          const tooltipH = Math.min(220, Math.max(96, 46 + (subtitleLines + metaLines) * 16));
          const viewportPad = 8;
          const gap = 10;
          const nodeClearance = 18;
          const maxLeft = Math.max(viewportPad, viewportSize.width - tooltipW - viewportPad);
          const maxTop = Math.max(viewportPad, viewportSize.height - tooltipH - viewportPad);
          const clampLeft = (left: number) => Math.min(maxLeft, Math.max(viewportPad, left));
          const clampTop = (top: number) => Math.min(maxTop, Math.max(viewportPad, top));
          const candidatePositions = [
            { left: anchorX - tooltipW / 2, top: anchorY - tooltipH - gap }, // above
            { left: anchorX - tooltipW / 2, top: anchorY + gap }, // below
            { left: anchorX + gap, top: anchorY - tooltipH / 2 }, // right
            { left: anchorX - tooltipW - gap, top: anchorY - tooltipH / 2 }, // left
          ].map((position) => ({
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
              <div className="h-6 px-3 flex items-center bg-muted/80 border-b border-border/70">
                <p className="text-xs font-medium text-foreground truncate">{title}</p>
              </div>
              <div className="px-3 py-2">
                <div className="flex items-start gap-2">
                  <span className="h-5 w-5 shrink-0 rounded-full overflow-hidden bg-muted flex items-center justify-center text-[10px] font-medium leading-none text-muted-foreground">
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
                      <p className="text-xs text-foreground leading-4 whitespace-normal break-words">{subtitle}</p>
                    )}
                    {meta && (
                      <p className="text-xs text-muted-foreground leading-4 whitespace-normal break-words">{meta}</p>
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
            opacity: isLoading || !controlsReady || holdTimelineForInitialCenter ? 0 : 1,
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
              <span className="text-xs text-muted-foreground select-none">Time</span>
              <input
                type="range"
                min={TIME_SCALE_MIN}
                max={TIME_SCALE_MAX}
                step={TIME_SCALE_STEP}
                value={timeScale}
                onChange={(e) => setTimeScale(Number(e.target.value))}
                className="timeline-scale-range w-24"
                title={`${orientation === 'vertical' ? 'Vertical' : 'Horizontal'} time scaling`}
              />
              <span className="text-xs text-muted-foreground w-10 text-right tabular-nums select-none">
                {effectiveTimeScale.toFixed(2)}x
              </span>
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
          {conflictBranches.length > 0 && (
            <>
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium px-4 pt-2 pb-1">
                Merge risk
              </p>
              {conflictBranches.map(b => (
                <div
                  key={b.name}
                  onClick={() => onBranchClick?.(b)}
                  className="flex items-start gap-2.5 px-4 py-2.5 hover:bg-accent transition-colors cursor-pointer"
                >
                  <span className="mt-0.5 w-2 h-2 rounded-full bg-destructive shrink-0" />
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

          {staleBranches.length > 0 && (
            <>
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium px-4 pt-3 pb-1">
                Stale branches
              </p>
              {staleBranches.map(b => (
                <div
                  key={b.name}
                  onClick={() => onBranchClick?.(b)}
                  className="flex items-start gap-2.5 px-4 py-2.5 hover:bg-accent transition-colors cursor-pointer"
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
