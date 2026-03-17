import React, { useState, useRef, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { X } from 'lucide-react';
import { Branch, BranchCommitPreview, BranchPromptMeta, CheckedOutRef, DirectCommit, MergeNode, MergedPR, OpenPR } from '../types';
import { ViewMode } from './BranchMapView';

// ── Layout constants ──────────────────────────────────────────────────────────
const LEFT_PAD = 60;
const RIGHT_PAD = 160;
const MIN_BRANCH_SPACING_X = 30;
const LANE_HEIGHT = 60;
const NODE_SIZE = 8;
const CORNER_R = 20;
const BRANCH_HIT_STROKE_WIDTH = 48;
const AHEAD_LABEL_OFFSET_X = 10;
const MAIN_LABEL_OFFSET_X = 10;
const MAX_ACTIVE = 50;
const ZOOM_MIN = 0.2;
const ZOOM_MAX = 2;
const ZOOM_DEFAULT = 1;
const ZOOM_SENSITIVITY = 0.0065;
const ZOOM_DELTA_CLAMP = 0.22;
const CAMERA_UI_SYNC_MS = 24;
const CANVAS_PAD_X = 240;
const CANVAS_PAD_Y = 140;
const TIME_SCALE_MIN = 0.5;
const TIME_SCALE_MAX = 3;
const TIME_SCALE_STEP = 0.05;
const TIME_SCALE_DEFAULT = 0.5;
const PROMPT_MARKER_MAX = 10;
const LOCAL_UNPUSHED_GRAY = '#a8a29e';

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

function getCameraScale(zoomValue: number, _horizontal: boolean): { x: number; y: number } {
  return { x: zoomValue, y: zoomValue };
}

function smoothValueTo(
  start: number,
  target: number,
  durationMs: number,
  onFrame: (value: number) => void
): () => void {
  const delta = target - start;
  if (Math.abs(delta) < 1) return () => undefined;
  const startTime = performance.now();
  let rafId = 0;
  let cancelled = false;
  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
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
}: BranchMapProps) {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);
  const [hoveredPR, setHoveredPR] = useState<number | null>(null);
  const [hoveredPRCommit, setHoveredPRCommit] = useState<PRCommitHover | null>(null);
  const [hoveredMergeNode, setHoveredMergeNode] = useState<{ y: number; node: MergeNode } | null>(null);
  const [prCommits, setPrCommits] = useState<Map<number, string[]>>(new Map());
  const [zoom, setZoom] = useState(ZOOM_DEFAULT);
  const [timeScale, setTimeScale] = useState(TIME_SCALE_DEFAULT);
  const [spacingMode, setSpacingMode] = useState<SpacingMode>('bounded');
  const [orientation, setOrientation] = useState<OrientationMode>('vertical');
  const isHorizontal = orientation === 'horizontal';
  const effectiveTimeScale = timeScale;
  const effectiveSpacingMode: SpacingMode = spacingMode;
  // WKWebView (Tauri) doesn't fire CSS animations on SVG elements inserted during
  // the initial paint. Defer animation classes by one rAF so they start post-paint.
  const [drawReady, setDrawReady] = useState(false);
  const [animationsLocked, setAnimationsLocked] = useState(false);
  // flashingName: branch in "bright" phase right after focus (clears after 700ms, triggering CSS stroke transition to lighter red)
  const [_flashingName, setFlashingName] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const zoomLayerRef = useRef<SVGGElement>(null);
  const zoomRef = useRef(zoom);
  const zoomStateRef = useRef(zoom);
  const panUiSyncTimeoutRef = useRef<number | null>(null);
  const zoomWheelFactorRef = useRef(1);
  const zoomWheelPointRef = useRef<{ x: number; y: number } | null>(null);
  const zoomWheelRafRef = useRef<number | null>(null);
  const zoomUiSyncTimeoutRef = useRef<number | null>(null);
  const gestureZoomBaseRef = useRef(zoomRef.current);
  const gesturePointRef = useRef<{ x: number; y: number } | null>(null);
  const panStartRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const panRef = useRef(pan);
  const targetPanRef = useRef(pan);
  const lastUiSyncRef = useRef(0);
  const [isPanning, setIsPanning] = useState(false);
  const isPanningRef = useRef(false);
  const [spaceHeld, setSpaceHeld] = useState(false);
  const spacePressedRef = useRef(false);
  const focusScrollCancelRef = useRef<(() => void) | null>(null);
  const hasAutoCenteredRef = useRef(false);

  // Bottom chrome scrollbar state
  const [barScrollLeft, setBarScrollLeft] = useState(0);
  const [barScrollMax, setBarScrollMax] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(48);
  const [scrollbarReady, setScrollbarReady] = useState(false);
  const barRangeRef = useRef<HTMLInputElement>(null);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const [containerHeight, setContainerHeight] = useState(540);
  const renderCameraScale = getCameraScale(zoom, isHorizontal);

  // Branch issues panel state
  const [errorPanelOpen, setErrorPanelOpen] = useState(false);
  const errorPanelRef = useRef<HTMLDivElement>(null);

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
      setAnimationsLocked(false);
      return;
    }
    if (hadDataRef.current) return;
    hadDataRef.current = true;

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
    const zoomLayer = zoomLayerRef.current;
    if (zoomLayer) {
      zoomLayer.setAttribute('transform', `scale(${cameraScale.x} ${cameraScale.y})`);
    }
  }

  function syncUiState(force = false) {
    if (!force) return;
    const now = performance.now();
    if (now - lastUiSyncRef.current < CAMERA_UI_SYNC_MS) return;
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

  function applyCamera(nextPan: { x: number; y: number }, nextZoom = zoomRef.current, forceUiSync = false) {
    panRef.current = nextPan;
    targetPanRef.current = nextPan;
    zoomRef.current = nextZoom;
    paintCamera(nextPan, nextZoom);
    syncUiState(forceUiSync);
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
    zoomWheelFactorRef.current = 1;
    zoomWheelPointRef.current = null;
    if (zoomWheelRafRef.current !== null) {
      cancelAnimationFrame(zoomWheelRafRef.current);
      zoomWheelRafRef.current = null;
    }
    if (zoomUiSyncTimeoutRef.current !== null) {
      clearTimeout(zoomUiSyncTimeoutRef.current);
      zoomUiSyncTimeoutRef.current = null;
    }
    if (forceUiSync) {
      syncUiState(true);
    }
  }

  function applyZoomAt(point: { x: number; y: number }, nextZoom: number, forceUiSync = false): boolean {
    if (!Number.isFinite(nextZoom)) return false;
    const currentZoom = zoomRef.current;
    nextZoom = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, nextZoom));
    if (nextZoom === currentZoom) return false;

    const currentPan = panRef.current;
    const currentScale = getCameraScale(currentZoom, isHorizontal);
    const nextScale = getCameraScale(nextZoom, isHorizontal);
    const worldX = (point.x - currentPan.x - graphOffsetX) / Math.max(currentScale.x, 0.0001);
    const worldY = (point.y - currentPan.y - graphOffsetY) / Math.max(currentScale.y, 0.0001);
    const nextPan = clampPan(
      {
        x: point.x - graphOffsetX - worldX * nextScale.x,
        y: point.y - graphOffsetY - worldY * nextScale.y,
      },
      nextZoom,
      'soft'
    );

    stopPanSmoothing();
    applyCamera(nextPan, nextZoom, forceUiSync);
    return true;
  }

  function queueWheelZoom(point: { x: number; y: number }, zoomDelta: number) {
    zoomWheelPointRef.current = point;
    zoomWheelFactorRef.current *= 1 + zoomDelta;
    if (zoomUiSyncTimeoutRef.current !== null) {
      clearTimeout(zoomUiSyncTimeoutRef.current);
    }
    zoomUiSyncTimeoutRef.current = window.setTimeout(() => {
      zoomUiSyncTimeoutRef.current = null;
      syncUiState(true);
    }, 90);
    if (zoomWheelRafRef.current !== null) return;
    zoomWheelRafRef.current = requestAnimationFrame(() => {
      zoomWheelRafRef.current = null;
      const focusPoint = zoomWheelPointRef.current;
      const factor = zoomWheelFactorRef.current;
      zoomWheelPointRef.current = null;
      zoomWheelFactorRef.current = 1;
      if (!focusPoint || !Number.isFinite(factor) || factor <= 0) return;
      applyZoomAt(focusPoint, zoomRef.current * factor);
    });
  }

  // Reveal the scrollbar after the main draw-in animation completes.
  // drawReady fires when animations start; 2600ms matches draw-path-main duration.
  // When drawReady resets (new repo), hide the scrollbar immediately so it
  // doesn't flash visible before the next animation cycle begins.
  useEffect(() => {
    if (!drawReady) {
      setScrollbarReady(false);
      return;
    }
    const id = setTimeout(() => setScrollbarReady(true), 2600);
    return () => clearTimeout(id);
  }, [drawReady]);

  // In WebKit, repeated ancestor transform updates can occasionally restart SVG
  // stroke-dash animations. Lock them to final state right after initial intro.
  useEffect(() => {
    if (!drawReady) {
      setAnimationsLocked(false);
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
      focusScrollCancelRef.current?.();
      focusScrollCancelRef.current = null;

      if (e.ctrlKey || e.metaKey) {
        stopWheelInertia();
        stopPanSmoothing();
        const rect = el.getBoundingClientRect();
        const point = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        const deltaScale = -e.deltaY * ZOOM_SENSITIVITY;
        const zoomDelta = Math.max(-ZOOM_DELTA_CLAMP, Math.min(ZOOM_DELTA_CLAMP, deltaScale));
        queueWheelZoom(point, zoomDelta);
        return;
      }

      stopZoomAnimation(false);
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
      stopWheelInertia();
      stopPanSmoothing();
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
      applyZoomAt(point, gestureZoomBaseRef.current * scale);
    };

    const onGestureEnd = (evt: Event) => {
      evt.preventDefault();
      gesturePointRef.current = null;
      syncUiState(true);
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
      if (e.code !== 'Space' || isEditable(e.target)) return;
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
    focusScrollCancelRef.current?.();
    focusScrollCancelRef.current = null;
    stopZoomAnimation(false);
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
  const allAnchorTimes = Array.from(
    new Set<number>([
      ...timelineEvents.map((e) => e.t).filter(Number.isFinite),
      ...branchCommitAnchorTimes,
      ...promptAnchorTimes,
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

  function branchCreatedDate(b: Branch): string {
    return b.createdDate ?? b.divergedFromDate ?? b.lastCommitDate;
  }

  function branchCreatedMs(b: Branch): number {
    const t = new Date(branchCreatedDate(b)).getTime();
    return Number.isFinite(t) ? t : Number.POSITIVE_INFINITY;
  }

  function branchForkX(b: Branch): number {
    if (b.divergedFromDate) return timeToX(b.divergedFromDate);
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
    if (previews != null) return previews.length;
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
  const branchByName = new Map(activeBranches.map((b) => [b.name, b]));

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

  const laneCount = laneLastEndX.length;
  const availableLaneWidth = Math.max(
    220,
    Math.max(viewportSize.width, 800) - mainX - rightPad - 60
  );
  const laneWidthBase = laneCount > 0
    ? Math.max(34, Math.min(LANE_HEIGHT, availableLaneWidth / laneCount))
    : LANE_HEIGHT;
  const laneWidth = laneWidthBase;

  function laneX(b: Branch): number {
    const lane = laneAssignments.get(b.name) ?? 0;
    return mainX + laneWidth * (lane + 1) + 40;
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

  // Sync bottom chrome scrollbar to camera state.
  useEffect(() => {
    const axisScale = isHorizontal ? renderCameraScale.x : renderCameraScale.y;
    const safeScale = Math.max(axisScale, 0.0001);
    const visibleWorldSpan = isHorizontal
      ? viewportSize.width / safeScale
      : viewportSize.height / safeScale;
    const axisSvgSize = isHorizontal ? svgWidth : svgHeight;
    const max = Math.max(0, axisSvgSize - visibleWorldSpan);
    const axisPan = isHorizontal ? pan.x : pan.y;
    const axisGraphOffset = isHorizontal ? graphOffsetX : graphOffsetY;
    const axisWorldStart = Math.max(0, Math.min(max, (-axisPan - axisGraphOffset) / safeScale));
    setBarScrollLeft(axisWorldStart);
    setBarScrollMax(max);

    const rangeEl = barRangeRef.current;
    if (rangeEl && rangeEl.offsetWidth > 0) {
      const ratio = axisSvgSize > 0 ? visibleWorldSpan / axisSvgSize : 1;
      setThumbWidth(Math.max(24, Math.round(rangeEl.offsetWidth * ratio)));
    }
  }, [
    pan.x,
    pan.y,
    viewportSize.width,
    viewportSize.height,
    branches,
    mergeNodes,
    directCommits,
    effectiveTimeScale,
    effectiveSpacingMode,
    isHorizontal,
    canvasWidth,
    canvasHeight,
    renderCameraScale.x,
    renderCameraScale.y,
  ]);

  const checkedOutBranchName = checkedOutRef?.branchName ?? null;
  const checkedOutHeadSha = checkedOutRef?.headSha ?? null;
  const checkedOutIndicatorLocal = (() => {
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
      const directX = directXByFullSha.get(checkedOutHeadSha);
      if (typeof directX === 'number') {
        return { x: mainX, y: timeCoordToY(directX) };
      }
      const mergeX = nodeXByFullSha.get(checkedOutHeadSha);
      if (typeof mergeX === 'number') {
        return { x: mainX, y: timeCoordToY(mergeX) };
      }
      const branchBySha = activeBranches.find((b) => b.headSha === checkedOutHeadSha);
      if (branchBySha) {
        return {
          x: laneXByBranch.get(branchBySha.name) ?? mainX,
          y: timeCoordToY(branchTipX(branchBySha)),
        };
      }
    }

    if (checkedOutBranchName === defaultBranch) {
      return { x: mainX, y: mainEndY };
    }

    return null;
  })();
  const checkedOutAnchor = checkedOutIndicatorLocal
    ? {
      x: projectPoint(checkedOutIndicatorLocal.x, checkedOutIndicatorLocal.y).x,
      y: projectPoint(checkedOutIndicatorLocal.x, checkedOutIndicatorLocal.y).y,
    }
    : null;

  // Center the checked-out commit in the viewport when data first appears.
  useEffect(() => {
    if (!hasTimelineSeedData) {
      hasAutoCenteredRef.current = false;
      return;
    }
    if (hasAutoCenteredRef.current || viewportSize.width <= 0 || viewportSize.height <= 0) return;
    const zoomValue = zoomRef.current;
    const fallbackCenter = {
      x: svgWidth / 2,
      y: svgHeight / 2,
    };
    const target = checkedOutAnchor ?? fallbackCenter;
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
  }, [
    hasTimelineSeedData,
    viewportSize.width,
    viewportSize.height,
    graphOffsetX,
    graphOffsetY,
    svgWidth,
    svgHeight,
    checkedOutAnchor,
    effectiveTimeScale,
    effectiveSpacingMode,
  ]);

  // Scroll timeline to the requested branch. Set flashingName briefly so the arc
  // starts bright red, then CSS stroke transition fades it to the settled lighter red.
  useEffect(() => {
    if (!scrollRequest) return;
    if (isHorizontal ? viewportSize.width <= 0 : viewportSize.height <= 0) return;
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

  const scaledNodeSize = NODE_SIZE;
  const scaledHoverHitSize = 20;
  const scaledBranchHitStrokeWidth = BRANCH_HIT_STROKE_WIDTH;

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
            drawReady ? 'timeline-ready' : '',
            animationsLocked ? 'timeline-static' : '',
          ].filter(Boolean).join(' ')}
          style={{
            minWidth: svgWidth,
            display: 'block',
            position: 'absolute',
            left: graphOffsetX,
            top: graphOffsetY,
            overflow: 'visible',
          }}
        >
          <defs>
            <filter id="tick-shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#000" floodOpacity="0.08" />
            </filter>
          </defs>

          <g
            ref={zoomLayerRef}
            transform={`scale(${renderCameraScale.x} ${renderCameraScale.y})`}
          >

          {/* ── Main timeline + merge nodes ── */}
          <g style={{ opacity: hoveredPR !== null || hoveredBranch !== null ? 0.2 : 1, transition: 'opacity 0.15s' }}>
            {/* Use <path> not <line>: pathLength on <line> is SVG 2 only and unreliable in WKWebView */}
            <path
              d={`M ${pathCoord(mainX, mainStartY)} L ${pathCoord(mainX, mainActiveEndY)}`}
              fill="none"
              stroke="#78716c"
              strokeWidth={1.5}
              pathLength={1}
              className="draw-path-main"
            />
            {hasMainStaleTailY && (
              <g className="main-stale-tail-glow">
                <path
                  d={`M ${pathCoord(mainX, mainActiveEndY)} L ${pathCoord(mainX, mainEndY)}`}
                  fill="none"
                  stroke="#a8a29e"
                  strokeWidth={1.5}
                  pathLength={1}
                  className="draw-path-main"
                />
              </g>
            )}

            {/* Main label and ticks — fade in once the line is drawn */}
            <g className="fade-in-info" style={{ '--delay': `${MAIN_DRAW_MS}ms` } as React.CSSProperties}>
              {(() => {
                const labelPoint = projectPoint(mainX + MAIN_LABEL_OFFSET_X, mainEndY + 4);
                return (
                  <text
                   
                    x={labelPoint.x}
                    y={labelPoint.y}
                    fontSize={12}
                    fill="#1c1917"
                    fontWeight={500}
                  >
                    {defaultBranch}
                  </text>
                );
              })()}

              {/* Direct commits */}
              {directCommits.map(c => {
                const timeCoordX = directXByFullSha.get(c.fullSha) ?? timeToX(c.date);
                const y = timeCoordToY(timeCoordX);
                const markerPoint = projectPoint(mainX, y);
                const label = c.message.length > 38 ? c.message.slice(0, 38) + '…' : c.message;
                return (
                  <circle
                   
                    key={c.fullSha}
                    cx={markerPoint.x}
                    cy={markerPoint.y}
                    r={scaledNodeSize / 2}
                    fill="#78716c"
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() =>
                      setTooltip({
                        x: markerPoint.x + 14,
                        y: markerPoint.y,
                        lines: [c.sha, label, `@${c.author} · ${fmtTooltipDate(c.date)}`],
                        avatarFallback: c.author?.charAt(0).toUpperCase() || '?',
                      })
                    }
                    onMouseLeave={() => setTooltip(null)}
                  />
                );
              })}

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
                  className="draw-path-arc"
                  style={{ pointerEvents: 'none', '--delay': `${prDelay}ms` } as React.CSSProperties}
                />

                {/* Arc info — fades in as arc draws */}
                <g className="fade-in-info" style={{ '--delay': `${prDelay + INFO_OFFSET}ms` } as React.CSSProperties}>
                  <circle
                   
                    cx={mainX}
                    cy={forkY}
                    r={scaledNodeSize / 2}
                    fill="#fafaf9"
                    stroke={isFocusedPR ? focusedPRColor : strokeColor}
                    strokeWidth={(isFocusedPR ? 1.5 : 1)}
                    style={{ pointerEvents: 'none' }}
                  />
                  <circle
                   
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
                     
                      href={pr.authorAvatar}
                      x={arcX - 9}
                      y={midY - 10}
                      width={18}
                      height={18}
                      style={{ clipPath: `circle(${9}px at ${9}px ${9}px)` }}
                    />
                  ) : (
                    <circle cx={arcX} cy={midY} r={8} fill="#57534e" />
                  )}
                  <text x={arcX + 12} y={midY + 4} fontSize={12} fill={isHovered ? '#1c1917' : '#57534e'}>
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
              const isConflict = b.status === 'conflict-risk';
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

              const tipTimeX = branchTipX(b);
              const tipY = timeCoordToY(tipTimeX);
              const cornerDir = tipY <= forkY ? -1 : 1;
              const turnY = forkY + cornerDir * cornerR;
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
              const commitCount = hasPreviewData ? branchCommits.length : b.commitsAhead;
              const displayedCommits =
                hasPreviewData ? [...branchCommits.slice(0, commitCount)].reverse() : [];
              const minCommitTimeX = forkTimeX + cornerR + 6;
              const maxCommitTimeX = Math.max(minCommitTimeX, tipTimeX - 2);
              const commitItems: Array<BranchCommitPreview | undefined> = hasPreviewData
                ? displayedCommits
                : Array.from({ length: commitCount }, () => undefined);
              const commitDots = placeItemsEvenly(commitItems, minCommitTimeX, maxCommitTimeX).map((entry) => ({
                y: timeCoordToY(entry.x),
                commit: entry.item,
              }));
              const realCommitDotIndices = commitItems.reduce<number[]>((acc, item, index) => {
                if (item?.kind !== 'branch-created') acc.push(index);
                return acc;
              }, []);
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
                .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
                .slice(-PROMPT_MARKER_MAX);
              const promptMarkers = placeItemsEvenly(promptSeeds, minPromptX, maxPromptX).map((entry) => ({
                y: timeCoordToY(entry.x),
                marker: entry.item,
              }));

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
              const nameDx = isHorizontal ? 12 : 10;
              const nameDy = isHorizontal ? -21 : -6;
              const namePoint = { x: nameAnchor.x + nameDx, y: nameAnchor.y + nameDy };
              const hoverBadgeAnchor = projectPoint(lanePosX, tipY);
              const hoverBadgePoint = {
                x: hoverBadgeAnchor.x + AHEAD_LABEL_OFFSET_X,
                y: hoverBadgeAnchor.y - 4,
              };
              const nameLen = Math.min(b.name.length, 22);
              const approxNameW = nameLen * 6.5;
              const clockPoint = projectPoint(lanePosX + approxNameW + 10, forkY);
              const zoomHideStrength = zoom <= 1 ? 1 : 0;
              const nameOpacity = isHorizontal ? 1 : (isHovered ? 1 : 0);
              const nameBlurPx = isHorizontal ? 0 : (isHovered ? 0 : zoomHideStrength * 4);

              return (
                <g
                  key={b.name}
                  className="cursor-pointer"
                  onClick={() => onBranchSelect?.(b)}
                  onDoubleClick={() => onBranchClick?.(b)}
                  onMouseEnter={() => setHoveredBranch(b.name)}
                  onMouseLeave={() => setHoveredBranch(null)}
                  style={{ opacity: isFocusedError ? 1 : hoveredBranch !== null && !isHovered ? 0.12 : hasSelection && !isSelected ? 0.5 : 1, transition: 'opacity 0.15s' }}
                >
                  {/* Invisible wide hit target to make hover/click easier on thin SVG strokes */}
                  <path
                    d={curvePath}
                    fill="none"
                    stroke="transparent"
                    strokeWidth={scaledBranchHitStrokeWidth}
                    style={{ pointerEvents: 'stroke' }}
                  />
                  <line
                   
                    x1={projectPoint(lanePosX, tipY).x}
                    y1={projectPoint(lanePosX, tipY).y}
                    x2={projectPoint(lanePosX + AHEAD_LABEL_OFFSET_X + 6, tipY).x}
                    y2={projectPoint(lanePosX + AHEAD_LABEL_OFFSET_X + 6, tipY).y}
                    stroke="transparent"
                    strokeWidth={scaledBranchHitStrokeWidth}
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
                    className="draw-path-arc"
                    style={{
                      '--delay': `${brDelay}ms`,
                      transition: 'stroke 0.12s ease',
                      ...(fullBranchShouldUseLocalGray
                        ? { strokeDasharray: localSegmentDashPattern, strokeLinecap: 'round' }
                        : {}),
                    } as React.CSSProperties}
                  />
                  {!fullBranchShouldUseLocalGray && localSegmentStartY != null && (
                    <path
                      d={`M ${pathCoord(lanePosX, localSegmentStartY)} L ${pathCoord(lanePosX, tipY)}`}
                      fill="none"
                      stroke={isHovered && !isSelected ? '#78716c' : LOCAL_UNPUSHED_GRAY}
                      strokeWidth={strokeWidth}
                      className="draw-path-arc"
                      style={{
                        '--delay': `${brDelay}ms`,
                        strokeDasharray: localSegmentDashPattern,
                        strokeLinecap: 'round',
                      } as React.CSSProperties}
                    />
                  )}

                  {/* Branch info — fades in as arc draws */}
                  <g className="fade-in-info" style={{ '--delay': `${brDelay + INFO_OFFSET}ms` } as React.CSSProperties}>
                    {/* Fork marker on parent baseline (or main fallback) */}
                    <circle
                     
                      cx={projectPoint(startX, forkY).x}
                      cy={projectPoint(startX, forkY).y}
                      r={scaledNodeSize / 2}
                      fill={isSelected ? '#22d3ee' : isFocusedError ? color : fullBranchShouldUseLocalGray ? LOCAL_UNPUSHED_GRAY : '#1c1917'}
                      stroke={fullBranchShouldUseLocalGray ? LOCAL_UNPUSHED_GRAY : color}
                      strokeWidth={strokeWidth}
                    />
                    {/* Commit markers along branch */}
                    {commitDots.map(({ y: commitY, commit }, ci) => {
                      const isBranchCreatedEvent = commit?.kind === 'branch-created';
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
                         
                          key={ci}
                          cx={projectPoint(lanePosX, commitY).x}
                          cy={projectPoint(lanePosX, commitY).y}
                          r={scaledNodeSize / 2}
                          fill={
                            fullBranchShouldUseLocalGray || localCommitDotIndices.has(ci)
                              ? LOCAL_UNPUSHED_GRAY
                              : color
                          }
                          onMouseEnter={() =>
                            setTooltip({
                              x: projectPoint(lanePosX, commitY).x + 14,
                              y: projectPoint(lanePosX, commitY).y,
                              lines: [
                                isBranchCreatedEvent ? 'Branch created' : `Commit ${tooltipSha}`,
                                tooltipMessage ? tooltipMessage : `@${tooltipAuthor}`,
                                `@${tooltipAuthor} · ${fmtTooltipDate(tooltipDate)}`,
                              ],
                              avatarUrl: showBranchAvatar ? b.lastCommitAuthorAvatar : undefined,
                              avatarFallback: tooltipAuthor?.charAt(0).toUpperCase() || '?',
                            })
                          }
                          onMouseLeave={() => setTooltip(null)}
                        />
                      );
                    })}
                    {promptMarkers.map(({ y: markerY, marker }) => {
                      const markerCy = markerY;
                      const markerPoint = projectPoint(lanePosX, markerCy);
                      const circleR = 4.8;
                      const tabW = 4.2;
                      const tabH = 3.8;
                      const tabX = lanePosX - circleR - tabW * 0.55;
                      const tabY = markerCy + circleR * 0.2;
                      const tabPoint = projectPoint(tabX, tabY);
                      const tabWidth = isHorizontal ? tabH : tabW;
                      const tabHeight = isHorizontal ? tabW : tabH;
                      const hitSize = scaledHoverHitSize;
                      return (
                        <g key={marker.id}>
                          <circle
                           
                            cx={markerPoint.x}
                            cy={markerPoint.y}
                            r={circleR}
                            fill="#ecfeff"
                            stroke="#0891b2"
                            strokeWidth={1.2}
                            style={{ pointerEvents: 'none' }}
                          />
                          <rect
                           
                            x={tabPoint.x}
                            y={tabPoint.y}
                            width={tabWidth}
                            height={tabHeight}
                            rx={0.8}
                            fill="#ecfeff"
                            stroke="#0891b2"
                            strokeWidth={1.2}
                            style={{ pointerEvents: 'none' }}
                          />
                          <line
                           
                            x1={projectPoint(lanePosX - 2.4, markerCy - 0.7).x}
                            y1={projectPoint(lanePosX - 2.4, markerCy - 0.7).y}
                            x2={projectPoint(lanePosX + 2.4, markerCy - 0.7).x}
                            y2={projectPoint(lanePosX + 2.4, markerCy - 0.7).y}
                            stroke="#0e7490"
                            strokeWidth={0.9}
                            strokeLinecap="round"
                            style={{ pointerEvents: 'none' }}
                          />
                          <line
                           
                            x1={projectPoint(lanePosX - 2.4, markerCy + 1.2).x}
                            y1={projectPoint(lanePosX - 2.4, markerCy + 1.2).y}
                            x2={projectPoint(lanePosX + 1.7, markerCy + 1.2).x}
                            y2={projectPoint(lanePosX + 1.7, markerCy + 1.2).y}
                            stroke="#0e7490"
                            strokeWidth={0.85}
                            strokeLinecap="round"
                            style={{ pointerEvents: 'none' }}
                          />
                          <rect
                           
                            x={markerPoint.x - hitSize / 2}
                            y={markerPoint.y - hitSize / 2}
                            width={hitSize}
                            height={hitSize}
                            fill="transparent"
                            style={{ cursor: 'pointer' }}
                            onMouseEnter={() =>
                              setTooltip({
                                x: markerPoint.x + 14,
                                y: markerPoint.y,
                                lines: [
                                  truncatePrompt(marker.prompt, 52),
                                  marker.agent,
                                  fmtTooltipDate(marker.timestamp),
                                ],
                              })
                            }
                            onMouseLeave={() => setTooltip(null)}
                          />
                        </g>
                      );
                    })}
                    <text
                     
                      x={namePoint.x}
                      y={namePoint.y}
                      fontSize={12}
                      fill={isSelected ? '#22d3ee' : isHovered ? '#1c1917' : color}
                      fontWeight={isSelected ? 600 : 400}
                      opacity={nameOpacity}
                      style={{
                        filter: `blur(${nameBlurPx}px)`,
                        pointerEvents: 'none',
                        transition: 'fill 0.12s ease, opacity 0.16s ease, filter 0.16s ease',
                      }}
                    >
                      {b.name.length > 22 ? b.name.slice(0, 22) + '…' : b.name}
                    </text>
                    {isHovered && (
                      <text
                       
                        x={hoverBadgePoint.x}
                        y={hoverBadgePoint.y}
                        fontSize={12}
                        fill="#1c1917"
                        fontWeight={500}
                        style={{ pointerEvents: 'none' }}
                      >
                        {formatCommitsAhead(branchAheadCount(b))}
                      </text>
                    )}
                    {showClockIcon && (
                      <g style={{ pointerEvents: 'none' }}>
                        <circle cx={clockPoint.x} cy={clockPoint.y} r={4.2} stroke={color} strokeWidth={1.2} fill="none" />
                        <line x1={clockPoint.x} y1={clockPoint.y - 2.9} x2={clockPoint.x} y2={clockPoint.y} stroke={color} strokeWidth={1.2} strokeLinecap="round" />
                        <line x1={clockPoint.x} y1={clockPoint.y} x2={clockPoint.x + 2.3} y2={clockPoint.y + 1.5} stroke={color} strokeWidth={1.2} strokeLinecap="round" />
                      </g>
                    )}
                  </g>

                  {/* Status labels — own fade-in-pill group so they animate independently of fade-in-info */}
                  {!forkOnNode && !isLocalBranch && isConflict && (
                    <g
                      className="fade-in-pill"
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

          {/* Checked-out commit marker */}
          {checkedOutIndicatorLocal && (() => {
            const markerPoint = projectPoint(checkedOutIndicatorLocal.x, checkedOutIndicatorLocal.y);
            return (
              <g style={{ pointerEvents: 'none' }}>
                <g>
                  <circle
                    className="checked-out-halo-pulse"
                    cx={markerPoint.x}
                    cy={markerPoint.y}
                    r={12}
                    fill="#93c5fd"
                  />
                  <circle
                    cx={markerPoint.x}
                    cy={markerPoint.y}
                    r={7}
                    fill="#2563eb"
                  />
                </g>
              </g>
            );
          })()}
          </g>
        </svg>
        </div>

        {/* Fixed-size tooltip layer (not affected by timeline zoom). */}
        {tooltip && (() => {
          const [title, subtitle, meta] = tooltip.lines;
          const avatarFallback = tooltip.avatarFallback || '?';
          const tooltipW = 228;
          const tooltipH = 74;
          const anchorX = pan.x + graphOffsetX + tooltip.x * renderCameraScale.x;
          const anchorY = pan.y + graphOffsetY + tooltip.y * renderCameraScale.y;
          const rawLeft = anchorX - tooltipW / 2;
          const rawTop = anchorY - tooltipH - 10;
          const maxLeft = Math.max(8, viewportSize.width - tooltipW - 8);
          const maxTop = Math.max(8, viewportSize.height - tooltipH - 8);
          const left = Math.min(maxLeft, Math.max(8, rawLeft));
          const top = Math.min(maxTop, Math.max(8, rawTop));

          return (
            <div
              className="absolute z-30 w-[228px] rounded-xl border border-border bg-card shadow-sm overflow-hidden pointer-events-none"
              style={{ left, top }}
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
                    {subtitle && <p className="text-xs text-foreground truncate">{subtitle}</p>}
                    {meta && <p className="text-xs text-muted-foreground truncate">{meta}</p>}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Empty / loading state */}
        {sortedNodes.length === 0 && activeBranches.length === 0 && (
          isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex items-center gap-1.5">
                {[0, 1, 2].map(i => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-bounce"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
            </div>
          ) : (
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
          )
        )}
      </div>

      {/* Bottom chrome: scrollbar + zoom — absolute so it stays inside the map
          container and respects visibility:hidden when the diff view is shown. */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 z-50">

        {/* Scrollbar + zoom row */}
        <div
          className="flex items-center gap-4"
          style={{
            opacity: isLoading || !scrollbarReady ? 0 : 1,
            transition: 'opacity 0.4s ease',
          }}
        >
          <input
            ref={barRangeRef}
            type="range"
            min={0}
            max={Math.max(1, barScrollMax)}
            value={barScrollLeft}
            style={{ ['--thumb-w' as string]: `${thumbWidth}px` }}
            onChange={(e) => {
              const nextWorldStart = Number(e.target.value);
              const scale = getCameraScale(zoomRef.current, isHorizontal);
              const nextPan = clampPan({
                x: isHorizontal ? -graphOffsetX - nextWorldStart * scale.x : targetPanRef.current.x,
                y: isHorizontal ? targetPanRef.current.y : -graphOffsetY - nextWorldStart * scale.y,
              }, zoomRef.current, 'hard');
              applyCamera(nextPan, zoomRef.current, true);
            }}
            className="bottom-scroll-range flex-1"
          />
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
          <div className="flex items-center gap-1 shrink-0 bg-card border border-border rounded-full p-1">
            <button
              onClick={() => setSpacingMode('regular')}
              className={`px-2.5 py-1 rounded-full text-xs leading-none select-none transition-colors ${effectiveSpacingMode === 'regular'
                ? 'bg-primary/10 text-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              title="Use pure time scaling"
            >
              Time
            </button>
            <button
              onClick={() => setSpacingMode('bounded')}
              className={`px-2.5 py-1 rounded-full text-xs leading-none select-none transition-colors ${effectiveSpacingMode === 'bounded'
                ? 'bg-primary/10 text-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              title="Clamp timeline gaps with min/max bounds"
            >
              Bounded
            </button>
          </div>
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
          <div className="flex items-center gap-2 shrink-0 bg-card border border-border rounded-full px-3 py-1">
            <button
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                stopWheelInertia();
                stopZoomAnimation();
                applyZoomAt(
                  { x: el.clientWidth / 2, y: el.clientHeight / 2 },
                  zoomRef.current * 0.92,
                  true
                );
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors leading-none select-none"
              title="Zoom out"
            >
              −
            </button>
            <span className="text-xs text-muted-foreground w-10 text-center tabular-nums select-none">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                stopWheelInertia();
                stopZoomAnimation();
                applyZoomAt(
                  { x: el.clientWidth / 2, y: el.clientHeight / 2 },
                  zoomRef.current * 1.08,
                  true
                );
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors leading-none select-none"
              title="Zoom in"
            >
              +
            </button>
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
