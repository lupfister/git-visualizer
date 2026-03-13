import React, { useState, useRef, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { X } from 'lucide-react';
import { Branch, CheckedOutRef, DirectCommit, MergeNode, MergedPR, OpenPR } from '../types';
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
const ZOOM_DEFAULT = 0.9;
const ZOOM_SENSITIVITY = 0.0065;
const ZOOM_DELTA_CLAMP = 0.22;
const ZOOM_INERTIA_DECAY = 0.8;
const ZOOM_INERTIA_MIN = 0.0012;
const PAN_SMOOTHING = 0.3;
const WHEEL_INERTIA_DECAY = 0.9;
const WHEEL_INERTIA_MIN = 0.15;
const CANVAS_PAD_X = 240;
const CANVAS_PAD_Y = 140;
const TIME_SCALE_MIN = 0.5;
const TIME_SCALE_MAX = 3;
const TIME_SCALE_STEP = 0.05;
const TIME_SCALE_DEFAULT = 0.5;

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
  view?: ViewMode;
  conflictBranches?: Branch[];
  staleBranches?: Branch[];
  inactiveErrorBranches?: Branch[];
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
  view = 'time',
  conflictBranches = [],
  staleBranches = [],
  inactiveErrorBranches = [],
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
  const [hoveredMergeNode, setHoveredMergeNode] = useState<{ x: number; node: MergeNode } | null>(null);
  const [prCommits, setPrCommits] = useState<Map<number, string[]>>(new Map());
  const [zoom, setZoom] = useState(ZOOM_DEFAULT);
  const [timeScale, setTimeScale] = useState(TIME_SCALE_DEFAULT);
  const [spacingMode, setSpacingMode] = useState<SpacingMode>('bounded');
  const effectiveTimeScale = timeScale;
  const effectiveSpacingMode: SpacingMode = spacingMode;
  // WKWebView (Tauri) doesn't fire CSS animations on SVG elements inserted during
  // the initial paint. Defer animation classes by one rAF so they start post-paint.
  const [drawReady, setDrawReady] = useState(false);
  // flashingName: branch in "bright" phase right after focus (clears after 700ms, triggering CSS stroke transition to lighter red)
  const [_flashingName, setFlashingName] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const labelsLayerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const zoomRef = useRef(zoom);
  const zoomStateRef = useRef(zoom);
  const zoomVelocityRef = useRef(0);
  const zoomPointRef = useRef<{ x: number; y: number } | null>(null);
  const zoomRafRef = useRef<number | null>(null);
  const wheelVelocityRef = useRef({ x: 0, y: 0 });
  const wheelRafRef = useRef<number | null>(null);
  const panRafRef = useRef<number | null>(null);
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

  // Branch issues panel state
  const [errorPanelOpen, setErrorPanelOpen] = useState(false);
  const errorPanelRef = useRef<HTMLDivElement>(null);

  // Inactive error branches render grey (no status colors)
  const inactiveErrorSet = new Set(inactiveErrorBranches.map(b => b.name));
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

  function paintCamera(nextPan = panRef.current, nextZoom = zoomRef.current) {
    const el = cameraRef.current;
    if (!el) return;
    el.style.transform = `translate(${nextPan.x}px, ${nextPan.y}px) scale(${nextZoom})`;

    // Keep fixed-size branch labels in lockstep with camera motion without
    // forcing React rerenders on every frame.
    const labelsEl = labelsLayerRef.current;
    if (labelsEl) {
      const positioned = labelsEl.querySelectorAll('[data-overlay-pos="1"]');
      positioned.forEach((node) => {
        const worldX = Number((node as HTMLElement).dataset.worldX ?? 0);
        const worldY = Number((node as HTMLElement).dataset.worldY ?? 0);
        const dx = Number((node as HTMLElement).dataset.dx ?? 0);
        const dy = Number((node as HTMLElement).dataset.dy ?? 0);
        let x = nextPan.x + (graphOffsetX + worldX) * nextZoom + dx;
        let y = nextPan.y + (graphOffsetY + worldY) * nextZoom + dy;
        if ((node as HTMLElement).dataset.snapPixel === '1') {
          x = Math.round(x);
          y = Math.round(y);
          (node as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
          return;
        }
        (node as HTMLElement).style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    }
  }

  function syncUiState(force = false) {
    const now = performance.now();
    if (Math.abs(zoomRef.current - zoomStateRef.current) > 0.0001) {
      zoomStateRef.current = zoomRef.current;
      setZoom(zoomRef.current);
    }
    if (force || now - lastUiSyncRef.current >= 90) {
      lastUiSyncRef.current = now;
      setPan(panRef.current);
    }
  }

  function applyCamera(nextPan: { x: number; y: number }, nextZoom = zoomRef.current, forceUiSync = false) {
    panRef.current = nextPan;
    targetPanRef.current = nextPan;
    zoomRef.current = nextZoom;
    paintCamera(nextPan, nextZoom);
    syncUiState(forceUiSync);
  }

  function stopPanSmoothing() {
    if (panRafRef.current !== null) {
      cancelAnimationFrame(panRafRef.current);
      panRafRef.current = null;
    }
  }

  function startPanSmoothing() {
    if (panRafRef.current !== null) return;
    const tick = () => {
      const current = panRef.current;
      const target = clampPan(targetPanRef.current, zoomRef.current, 'soft');
      const next = {
        x: current.x + (target.x - current.x) * PAN_SMOOTHING,
        y: current.y + (target.y - current.y) * PAN_SMOOTHING,
      };
      applyCamera(next, zoomRef.current);

      const settled =
        Math.abs(next.x - target.x) < 0.6 &&
        Math.abs(next.y - target.y) < 0.6 &&
        Math.abs(wheelVelocityRef.current.x) < WHEEL_INERTIA_MIN &&
        Math.abs(wheelVelocityRef.current.y) < WHEEL_INERTIA_MIN;
      if (settled && !isPanningRef.current) {
        applyCamera(target, zoomRef.current, true);
        panRafRef.current = null;
        return;
      }
      panRafRef.current = requestAnimationFrame(tick);
    };
    panRafRef.current = requestAnimationFrame(tick);
  }

  function stopWheelInertia() {
    wheelVelocityRef.current = { x: 0, y: 0 };
    if (wheelRafRef.current !== null) {
      cancelAnimationFrame(wheelRafRef.current);
      wheelRafRef.current = null;
    }
  }

  function startWheelInertia() {
    if (wheelRafRef.current !== null) return;
    const tick = () => {
      const vx = wheelVelocityRef.current.x;
      const vy = wheelVelocityRef.current.y;
      if (Math.abs(vx) < WHEEL_INERTIA_MIN && Math.abs(vy) < WHEEL_INERTIA_MIN) {
        wheelVelocityRef.current = { x: 0, y: 0 };
        wheelRafRef.current = null;
        return;
      }

      targetPanRef.current = clampPan({
        x: targetPanRef.current.x + vx,
        y: targetPanRef.current.y + vy,
      }, zoomRef.current, 'soft');
      startPanSmoothing();

      wheelVelocityRef.current = {
        x: vx * WHEEL_INERTIA_DECAY,
        y: vy * WHEEL_INERTIA_DECAY,
      };
      wheelRafRef.current = requestAnimationFrame(tick);
    };
    wheelRafRef.current = requestAnimationFrame(tick);
  }

  function stopZoomAnimation() {
    zoomVelocityRef.current = 0;
    zoomPointRef.current = null;
    if (zoomRafRef.current !== null) {
      cancelAnimationFrame(zoomRafRef.current);
      zoomRafRef.current = null;
    }
  }

  function startZoomInertia() {
    if (zoomRafRef.current !== null) return;
    const tick = () => {
      const point = zoomPointRef.current;
      const velocity = zoomVelocityRef.current;
      if (!point || Math.abs(velocity) < ZOOM_INERTIA_MIN) {
        zoomVelocityRef.current = 0;
        zoomRafRef.current = null;
        return;
      }
      const didZoom = applyZoomAt(point, zoomRef.current * (1 + velocity));
      if (!didZoom) {
        zoomVelocityRef.current = 0;
        zoomRafRef.current = null;
        return;
      }
      zoomVelocityRef.current *= ZOOM_INERTIA_DECAY;
      zoomRafRef.current = requestAnimationFrame(tick);
    };
    zoomRafRef.current = requestAnimationFrame(tick);
  }

  function applyZoomAt(point: { x: number; y: number }, nextZoom: number): boolean {
    if (!Number.isFinite(nextZoom)) return false;
    const currentZoom = zoomRef.current;
    nextZoom = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, nextZoom));
    if (nextZoom === currentZoom) return false;

    const currentPan = panRef.current;
    const worldX = (point.x - currentPan.x) / currentZoom;
    const worldY = (point.y - currentPan.y) / currentZoom;
    const nextPan = clampPan(
      {
        x: point.x - worldX * nextZoom,
        y: point.y - worldY * nextZoom,
      },
      nextZoom,
      'soft'
    );

    stopPanSmoothing();
    applyCamera(nextPan, nextZoom, true);
    return true;
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
        const nextZoom = zoomRef.current * (1 + zoomDelta);
        const didZoom = applyZoomAt(point, nextZoom);
        if (didZoom) {
          zoomPointRef.current = point;
          zoomVelocityRef.current = zoomVelocityRef.current * 0.5 + zoomDelta;
          startZoomInertia();
        }
        return;
      }

      stopZoomAnimation();
      targetPanRef.current = clampPan({
        x: targetPanRef.current.x - e.deltaX,
        y: targetPanRef.current.y - e.deltaY,
      }, zoomRef.current, 'soft');
      wheelVelocityRef.current = {
        x: wheelVelocityRef.current.x * 0.5 - e.deltaX,
        y: wheelVelocityRef.current.y * 0.5 - e.deltaY,
      };
      startPanSmoothing();
      startWheelInertia();
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
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

  // Sync bottom chrome scrollbar to camera state.
  useEffect(() => {
    const safeZoom = Math.max(zoom, 0.0001);
    const visibleWorldWidth = viewportSize.width / safeZoom;
    const max = Math.max(0, canvasWidth - visibleWorldWidth);
    const leftWorld = Math.max(0, Math.min(max, -pan.x / safeZoom));
    setBarScrollLeft(leftWorld);
    setBarScrollMax(max);

    const rangeEl = barRangeRef.current;
    if (rangeEl && rangeEl.offsetWidth > 0) {
      const ratio = canvasWidth > 0 ? visibleWorldWidth / canvasWidth : 1;
      setThumbWidth(Math.max(24, Math.round(rangeEl.offsetWidth * ratio)));
    }
  }, [
    pan.x,
    zoom,
    viewportSize.width,
    branches,
    mergeNodes,
    directCommits,
    effectiveTimeScale,
    effectiveSpacingMode,
  ]);

  // Space+drag (or middle mouse drag) panning, interrupting all inertial motion.
  useEffect(() => {
    if (!isPanning) return;
    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - panStartRef.current.x;
      const dy = e.clientY - panStartRef.current.y;
      targetPanRef.current = clampPan({
        x: panStartRef.current.panX + dx,
        y: panStartRef.current.panY + dy,
      }, zoomRef.current, 'soft');
      startPanSmoothing();
    };
    const onUp = () => {
      isPanningRef.current = false;
      setIsPanning(false);
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
    stopZoomAnimation();
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
    startPanSmoothing();
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
  // Timeline spacing can run in pure time mode or in bounded mode where each
  // adjacent gap is clamped to avoid unreadable clusters/deserts.
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

  const firstEventT =
    timelineEvents.length > 0
      ? timelineEvents[0].t
      : Date.now();
  const lastEventT =
    timelineEvents.length > 1
      ? timelineEvents[timelineEvents.length - 1].t
      : firstEventT + 1;
  const timelineTimeSpan = Math.max(lastEventT - firstEventT, 1);
  const eventTimes = timelineEvents.map((e) => e.t);
  const avgEventIntervalMs = timelineEvents.length > 1
    ? timelineTimeSpan / (timelineEvents.length - 1)
    : 7 * 86400000;
  const regularPxPerMs = IDEAL_EVENT_GAP / Math.max(avgEventIntervalMs, 1);

  const eventDeltaDays = timelineEvents.slice(1).map((e, i) => {
    const prevT = timelineEvents[i].t;
    return Math.max((e.t - prevT) / 86400000, 0);
  });
  // Use rank-based normalization so spacing differences remain visible even when
  // many timestamp deltas are numerically close.
  const rankedDeltaInputs = eventDeltaDays.map((d, i) => d + i * 1e-6);
  const sortedRankedDeltas = [...rankedDeltaInputs].sort((a, b) => a - b);
  const deltaRankPct = rankedDeltaInputs.map((v) => {
    if (sortedRankedDeltas.length <= 1) return 0;
    let lo = 0;
    let hi = sortedRankedDeltas.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (sortedRankedDeltas[mid] < v) lo = mid + 1;
      else hi = mid;
    }
    return lo / (sortedRankedDeltas.length - 1);
  });

  const eventXs: number[] = [];
  const eventXByKey = new Map<string, number>();
  if (timelineEvents.length > 0) {
    eventXs.push(leftPad);
    eventXByKey.set(timelineEvents[0].key, leftPad);
  }
  for (let i = 1; i < timelineEvents.length; i++) {
    let x: number;
    if (effectiveSpacingMode === 'regular') {
      x = leftPad + (timelineEvents[i].t - firstEventT) * regularPxPerMs;
    } else {
      // Aggressive spread: curve ranked deltas into a wide min..max gap range.
      const normalized = deltaRankPct[i - 1] ?? 0;
      const eased = Math.pow(normalized, 1.35);
      const gap = MIN_EVENT_GAP + eased * (MAX_EVENT_GAP - MIN_EVENT_GAP);
      x = eventXs[i - 1] + gap;
    }
    eventXs.push(x);
    eventXByKey.set(timelineEvents[i].key, x);
  }

  const nodeXByFullSha = new Map<string, number>(
    sortedNodes.map((m) => [m.fullSha, eventXByKey.get(`merge:${m.fullSha}`) ?? leftPad])
  );
  const directXByFullSha = new Map<string, number>(
    sortedDirectCommits.map((c) => [c.fullSha, eventXByKey.get(`direct:${c.fullSha}`) ?? leftPad])
  );

  const mainEndX = eventXs.length > 0 ? eventXs[eventXs.length - 1] : leftPad;
  const averageEventGap = timelineEvents.length > 1
    ? (mainEndX - leftPad) / (timelineEvents.length - 1)
    : IDEAL_EVENT_GAP;
  const averageMergeGap = sortedNodes.length > 1
    ? ((nodeXByFullSha.get(sortedNodes[sortedNodes.length - 1].fullSha) ?? leftPad) - (nodeXByFullSha.get(sortedNodes[0].fullSha) ?? leftPad)) / (sortedNodes.length - 1)
    : IDEAL_NODE_SPACING;

  // Extrapolation uses true time-rate in regular mode and a capped synthetic
  // rate in bounded mode so off-range dates remain legible.
  const safeExtrapPxPerMs = effectiveSpacingMode === 'regular'
    ? regularPxPerMs
    : averageEventGap / Math.max(avgEventIntervalMs, 7 * 86400000);

  function timeToX(dateStr: string): number {
    const t = new Date(dateStr).getTime();
    if (timelineEvents.length === 0) return leftPad;

    let lo = 0;
    let hi = eventTimes.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (eventTimes[mid] < t) lo = mid + 1;
      else hi = mid;
    }

    if (lo <= 0) {
      const rawX = leftPad + (t - firstEventT) * safeExtrapPxPerMs;
      return Math.max(rawX, leftPad - MIN_EVENT_GAP * 2);
    }
    if (lo >= eventTimes.length) {
      return mainEndX + (t - lastEventT) * safeExtrapPxPerMs;
    }

    const i = lo - 1;
    const tA = eventTimes[i];
    const tB = eventTimes[lo];
    const xA = eventXs[i] ?? leftPad;
    const xB = eventXs[lo] ?? xA;
    if (tB <= tA) return xA;
    const ratio = (t - tA) / (tB - tA);
    return xA + ratio * (xB - xA);
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

  function branchVisualEndX(b: Branch): number {
    const tipX = branchTipX(b);
    const labelWidth = estimateSvgTextWidth(formatCommitsAhead(b.commitsAhead));
    return tipX + AHEAD_LABEL_OFFSET_X + labelWidth;
  }

  // SVG width: extend past mainEndX if any branch tip falls further right
  // (e.g. a fresh branch with no commits sits at today's date, past the last PR).
  const maxBranchVisualEndX = activeBranches.reduce(
    (max, b) => Math.max(max, branchVisualEndX(b)),
    mainEndX
  );
  const svgWidth = maxBranchVisualEndX + rightPad + 80;

  // Main baseline sits near the top so branch lanes flow downward.
  const MAIN_TOP_PAD = 80;
  const mainY = MAIN_TOP_PAD;

  // ── Assign vertical lanes to avoid overlap (strict downward hierarchy) ───
  // Policy:
  // 1) If a branch has a visible parent branch, it must render below that parent.
  // 2) Unrelated branches can shift to lower lanes to satisfy (1).
  // 3) Lane occupancy still respects horizontal separation to reduce label overlap.
  const sortedByX = [...activeBranches].sort(
    (a, b) => branchForkX(a) - branchForkX(b)
  );
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
      const lane = allocateLane(minLane, branchForkX(b), branchVisualEndX(b));
      laneAssignments.set(b.name, lane);
      pending.splice(i, 1);
      i -= 1;
      progressed = true;
    }

    if (!progressed) {
      // Cycle or missing parent assignment edge-case fallback.
      const b = pending.shift()!;
      const lane = allocateLane(0, branchForkX(b), branchVisualEndX(b));
      laneAssignments.set(b.name, lane);
    }
    guard += 1;
  }

  const laneCount = laneLastEndX.length;
  const availableLaneHeight = Math.max(220, containerHeight - mainY - 80);
  const laneHeightBase = laneCount > 0
    ? Math.max(34, Math.min(LANE_HEIGHT, availableLaneHeight / laneCount))
    : LANE_HEIGHT;
  const laneHeight = laneHeightBase;

  function laneY(b: Branch): number {
    const lane = laneAssignments.get(b.name) ?? 0;
    return mainY + laneHeight * (lane + 1) + 40;
  }

  const laneYByBranch = new Map<string, number>(
    activeBranches.map((b) => [b.name, laneY(b)])
  );

  function branchStartY(b: Branch): number {
    const parent = b.parentBranch;
    if (parent && parent !== defaultBranch) {
      const parentY = laneYByBranch.get(parent);
      if (typeof parentY === 'number') {
        return parentY;
      }
    }
    return mainY;
  }

  // Merged PRs lane layout
  const MERGED_LANE_HEIGHT = 60;
  const MERGED_LANES = 4;
  const maxBranchY = laneCount > 0
    ? mainY + laneHeight * laneCount + 40
    : mainY;
  const svgHeight = Math.max(maxBranchY + 120, containerHeight);
  const canvasWidth = svgWidth + CANVAS_PAD_X * 2;
  const canvasHeight = svgHeight + CANVAS_PAD_Y * 2;
  const graphOffsetX = (canvasWidth - svgWidth) / 2;
  const graphOffsetY = (canvasHeight - svgHeight) / 2;
  const checkedOutBranchName = checkedOutRef?.branchName ?? null;
  const checkedOutHeadSha = checkedOutRef?.headSha ?? null;
  const checkedOutIndicatorLocal = (() => {
    if (checkedOutBranchName && checkedOutBranchName !== defaultBranch) {
      const branch = activeBranches.find((b) => b.name === checkedOutBranchName);
      if (branch) {
        return {
          x: branchTipX(branch),
          y: laneYByBranch.get(branch.name) ?? mainY,
        };
      }
    }

    if (checkedOutHeadSha) {
      const directX = directXByFullSha.get(checkedOutHeadSha);
      if (typeof directX === 'number') {
        return { x: directX, y: mainY };
      }
      const mergeX = nodeXByFullSha.get(checkedOutHeadSha);
      if (typeof mergeX === 'number') {
        return { x: mergeX, y: mainY };
      }
      const branchBySha = activeBranches.find((b) => b.headSha === checkedOutHeadSha);
      if (branchBySha) {
        return {
          x: branchTipX(branchBySha),
          y: laneYByBranch.get(branchBySha.name) ?? mainY,
        };
      }
    }

    if (checkedOutBranchName === defaultBranch) {
      return { x: mainEndX, y: mainY };
    }

    return null;
  })();
  const checkedOutAnchor = checkedOutIndicatorLocal
    ? {
      x: graphOffsetX + checkedOutIndicatorLocal.x,
      y: graphOffsetY + checkedOutIndicatorLocal.y,
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
      x: graphOffsetX + svgWidth / 2,
      y: graphOffsetY + svgHeight / 2,
    };
    const target = checkedOutAnchor ?? fallbackCenter;
    const nextPan = clampPan(
      {
        x: viewportSize.width / 2 - target.x * zoomValue,
        y: viewportSize.height / 2 - target.y * zoomValue,
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
    if (!scrollRequest || viewportSize.width <= 0) return;
    const { branch } = scrollRequest;
    const x = branch.divergedFromDate
      ? timeToX(branch.divergedFromDate)
      : timeToX(branch.lastCommitDate);
    const targetWorldLeft = Math.max(
      0,
      graphOffsetX + x - viewportSize.width / (2 * zoomRef.current)
    );
    const clampedTargetPan = clampPan({
      x: -targetWorldLeft * zoomRef.current,
      y: targetPanRef.current.y,
    }, zoomRef.current, 'hard');

    focusScrollCancelRef.current?.();
    focusScrollCancelRef.current = smoothValueTo(
      panRef.current.x,
      clampedTargetPan.x,
      600,
      (value) => {
        const next = clampPan({ x: value, y: targetPanRef.current.y }, zoomRef.current, 'hard');
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
  }, [scrollRequest, viewportSize.width, graphOffsetX]);

  const zoomCompensation = 1 / Math.max(zoom, 0.0001);
  const scaledNodeSize = NODE_SIZE * zoomCompensation;
  const scaledNodeRadius = 2 * zoomCompensation;
  const scaledHoverHitSize = 20 * zoomCompensation;
  const scaledBranchHitStrokeWidth = BRANCH_HIT_STROKE_WIDTH * zoomCompensation;

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
            transform: `translate(${panRef.current.x}px, ${panRef.current.y}px) scale(${zoomRef.current})`,
            transformOrigin: 'top left',
          }}
        >
        <svg
          ref={svgRef}
          width={svgWidth}
          height={svgHeight}
          className={drawReady ? 'timeline-ready' : ''}
          style={{
            minWidth: svgWidth,
            display: 'block',
            position: 'absolute',
            left: graphOffsetX,
            top: graphOffsetY,
          }}
        >
          <defs>
            <filter id="tick-shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#000" floodOpacity="0.08" />
            </filter>
          </defs>

          {/* ── Main timeline + merge nodes ── */}
          <g style={{ opacity: hoveredPR !== null || hoveredBranch !== null ? 0.2 : 1, transition: 'opacity 0.15s' }}>
            {/* Use <path> not <line>: pathLength on <line> is SVG 2 only and unreliable in WKWebView */}
            <path
              d={`M ${leftPad} ${mainY} L ${mainEndX} ${mainY}`}
              fill="none"
              stroke="#78716c"
              strokeWidth={1.5 * zoomCompensation}
              pathLength={1}
              className="draw-path-main"
            />

            {/* Main label and ticks — fade in once the line is drawn */}
            <g className="fade-in-info" style={{ '--delay': `${MAIN_DRAW_MS}ms` } as React.CSSProperties}>
              <text
                x={mainEndX + MAIN_LABEL_OFFSET_X}
                y={mainY + 4}
                fontSize={12}
                fill="#1c1917"
                fontWeight={500}
              >
                {defaultBranch}
              </text>

              {/* Direct commits — render with the same filled-square commit block shape as branch lanes */}
              {directCommits.map(c => {
                const x = directXByFullSha.get(c.fullSha) ?? timeToX(c.date);
                const label = c.message.length > 38 ? c.message.slice(0, 38) + '…' : c.message;
                return (
                  <rect
                    key={c.fullSha}
                    x={x - scaledNodeSize / 2}
                    y={mainY - scaledNodeSize / 2}
                    width={scaledNodeSize}
                    height={scaledNodeSize}
                    rx={scaledNodeRadius}
                    fill="#78716c"
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() =>
                      setTooltip({
                        x,
                        y: mainY - 16 * zoomCompensation,
                        lines: [c.sha, label, `@${c.author}`],
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

                let lastLabelX = -Infinity;
                return sortedNodes.map((m) => {
                  const x = nodeXByFullSha.get(m.fullSha) ?? timeToX(m.date);
                  const showLabel = anyLabel && x - lastLabelX >= minLabelGap;
                  if (showLabel) lastLabelX = x;
                  const label = m.prNumber ? `PR #${m.prNumber}` : m.sha.slice(0, 7);
                  const isHovered = hoveredMergeNode?.node.fullSha === m.fullSha;
                  const hitSize = scaledHoverHitSize;
                  return (
                    <g key={m.fullSha}>
                      {/* Visible tick — pointer-events off so hit rect handles hover */}
                      <rect
                        x={x - scaledNodeSize / 2}
                        y={mainY - scaledNodeSize / 2}
                        width={scaledNodeSize}
                        height={scaledNodeSize}
                        rx={scaledNodeRadius}
                        fill={isHovered ? '#44403c' : '#78716c'}
                        style={{ pointerEvents: 'none', transition: 'fill 0.1s' }}
                      />
                      {/* Transparent hit area for hover — rendered on top */}
                      <rect
                        x={x - hitSize / 2}
                        y={mainY - hitSize / 2}
                        width={hitSize}
                        height={hitSize}
                        fill="transparent"
                        style={{ cursor: 'default' }}
                        onMouseEnter={() => setHoveredMergeNode({ x, node: m })}
                        onMouseLeave={() => setHoveredMergeNode(null)}
                      />
                      {showLabel && (
                        <>
                          <text x={x} y={mainY + 20} textAnchor="middle" fontSize={12} fill="#57534e">
                            {label}
                          </text>
                          {showTitle && (
                            <text x={x} y={mainY + 32} textAnchor="middle" fontSize={10} fill="#78716c">
                              {(m.prTitle ?? '').slice(0, 22) + ((m.prTitle?.length ?? 0) > 22 ? '…' : '')}
                            </text>
                          )}
                          {showDate && (
                            <text x={x} y={showTitle ? mainY + 44 : mainY + 32} textAnchor="middle" fontSize={10} fill="#78716c">
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
            const forkX = timeToX(pr.createdAt);
            const mergeX = timeToX(pr.mergedAt);
            const lane = idx % MERGED_LANES;
            const arcY = mainY - MERGED_LANE_HEIGHT * (lane + 1);
            const shas = prCommits.get(pr.number);
            const commitCount = Math.min(shas?.length ?? pr.commitCount ?? 1, 12);
            const effectiveMergeX = Math.max(mergeX, forkX + cornerR * 2 + 20);

            const isHovered = hoveredPR === pr.number;
            const isDimmed = (hoveredPR !== null && !isHovered) || hoveredBranch !== null;
            const isFocusedPR = focusedErrorBranch?.name === pr.branchName;
            const opacity = isFocusedPR ? 1 : isDimmed ? 0.1 : isHovered ? 0.85 : 0.38;
            const strokeColor = isHovered ? '#44403c' : '#78716c';
            const strokeWidth = isHovered ? 1.6 : 1.2;

            const arcPath = [
              `M ${forkX} ${mainY}`,
              `L ${forkX} ${arcY + cornerR}`,
              `Q ${forkX} ${arcY} ${forkX + cornerR} ${arcY}`,
              `L ${effectiveMergeX - cornerR} ${arcY}`,
              `Q ${effectiveMergeX} ${arcY} ${effectiveMergeX} ${arcY + cornerR}`,
              `L ${effectiveMergeX} ${mainY}`,
            ].join(' ');

            const midX = (forkX + effectiveMergeX) / 2;
            const arcSpan = effectiveMergeX - forkX - cornerR * 2;
            const commitXs = Array.from({ length: commitCount }, (_, i) =>
              forkX + cornerR + (arcSpan * (i + 1)) / (commitCount + 1)
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
                <path d={arcPath} fill="none" stroke="transparent" strokeWidth={20 * zoomCompensation} />
                {/* Visible arc — draws in */}
                <path
                  d={arcPath}
                  fill="none"
                  stroke={isFocusedPR ? focusedPRColor : strokeColor}
                  strokeWidth={(focusedErrorBranch?.name === pr.branchName ? 2 : strokeWidth) * zoomCompensation}
                  pathLength={1}
                  className="draw-path-arc"
                  style={{ pointerEvents: 'none', '--delay': `${prDelay}ms` } as React.CSSProperties}
                />

                {/* Arc info — fades in as arc draws */}
                <g className="fade-in-info" style={{ '--delay': `${prDelay + INFO_OFFSET}ms` } as React.CSSProperties}>
                  <rect x={forkX - scaledNodeSize / 2} y={mainY - scaledNodeSize / 2}
                    width={scaledNodeSize} height={scaledNodeSize} rx={scaledNodeRadius}
                    fill="#fafaf9" stroke={isFocusedPR ? focusedPRColor : strokeColor} strokeWidth={(isFocusedPR ? 1.5 : 1) * zoomCompensation} style={{ pointerEvents: 'none' }} />
                  <rect x={effectiveMergeX - scaledNodeSize / 2} y={mainY - scaledNodeSize / 2}
                    width={scaledNodeSize} height={scaledNodeSize} rx={scaledNodeRadius}
                    fill="#fafaf9" stroke={isFocusedPR ? focusedPRColor : strokeColor} strokeWidth={(isFocusedPR ? 1.5 : 1) * zoomCompensation} style={{ pointerEvents: 'none' }} />

                  {/* Commit ticks — interactive with SHA tooltips */}
                  {commitXs.map((cx, ci) => {
                    const isTickHovered = isHovered &&
                      hoveredPRCommit?.pr.number === pr.number &&
                      hoveredPRCommit?.commitIdx === ci;
                    const tickSize = (isTickHovered ? NODE_SIZE + 3 : NODE_SIZE - 2) * zoomCompensation;
                    const hitSize = scaledHoverHitSize;
                    return (
                      <g key={ci}>
                        {/* Visible tick */}
                        <rect
                          x={cx - tickSize / 2}
                          y={arcY - tickSize / 2}
                          width={tickSize}
                          height={tickSize}
                          rx={1.5 * zoomCompensation}
                          fill={isFocusedPR ? focusedPRColor : isHovered ? '#a8a29e' : '#78716c'}
                          style={{ pointerEvents: 'none', transition: 'fill 0.1s ease' }}
                        />
                        {/* Invisible hit area */}
                        <rect
                          x={cx - hitSize / 2}
                          y={arcY - hitSize / 2}
                          width={hitSize}
                          height={hitSize}
                          fill="transparent"
                          style={{ cursor: 'crosshair' }}
                          onMouseEnter={(e) => {
                            e.stopPropagation();
                            setHoveredPRCommit({ x: cx, arcY, pr, commitIdx: ci, total: commitCount });
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
                      x={midX - 10 * zoomCompensation}
                      y={arcY - 32 * zoomCompensation}
                      width={18 * zoomCompensation}
                      height={18 * zoomCompensation}
                      style={{ clipPath: `circle(${9 * zoomCompensation}px at ${9 * zoomCompensation}px ${9 * zoomCompensation}px)` }}
                    />
                  ) : (
                    <circle cx={midX} cy={arcY - 22 * zoomCompensation} r={8 * zoomCompensation} fill="#57534e" />
                  )}
                  <text x={midX + 14} y={arcY - 18} fontSize={12} fill={isHovered ? '#1c1917' : '#57534e'}>
                    {pr.branchName.length > 20 ? pr.branchName.slice(0, 20) + '…' : pr.branchName}
                  </text>
                </g>
              </g>
            );
          })}

          {/* ── Active branches ── */}
          <g style={{ opacity: hoveredPR !== null ? 0.2 : 1, transition: 'opacity 0.15s' }}>
            {activeBranches.map((b) => {
              const forkX = branchForkX(b);
              const y = laneY(b);
              const startY = branchStartY(b);
              const isConflict = b.status === 'conflict-risk';
              const isStale = b.status === 'stale';
              const isSelected = selectedBranch?.name === b.name;
              const isHovered = hoveredBranch === b.name;
              const hasSelection = selectedBranch != null;
              const isInactiveError = inactiveErrorSet.has(b.name);

              const isFocusedError = focusedErrorBranch?.name === b.name;
              const focusedErrorColor = b.status === 'conflict-risk' ? '#dc2626' : '#d97706';
              const color = isFocusedError
                ? focusedErrorColor
                : isSelected
                  ? '#22d3ee'
                  : isInactiveError
                    ? '#78716c'
                    : isConflict
                      ? '#dc2626'
                      : isStale
                        ? '#d97706'
                        : hasSelection
                          ? '#57534e'
                          : '#78716c';
              const strokeWidth = isSelected ? 2.5 : isHovered ? 2 : isFocusedError ? 2 : 1.5;
              const strokeColor = isHovered && !isSelected ? '#44403c' : color;

              const tipX = branchTipX(b);
              let curvePath: string;
              if (startY === y) {
                curvePath = `M ${forkX} ${y} L ${tipX} ${y}`;
              } else if (startY > y) {
                curvePath = `M ${forkX} ${startY} L ${forkX} ${y + cornerR} Q ${forkX} ${y} ${forkX + cornerR} ${y} L ${tipX} ${y}`;
              } else {
                curvePath = `M ${forkX} ${startY} L ${forkX} ${y - cornerR} Q ${forkX} ${y} ${forkX + cornerR} ${y} L ${tipX} ${y}`;
              }

              const commitCount = Math.min(b.commitsAhead, 4);
              const spanWidth = tipX - (forkX + cornerR);
              // Place the final commit marker at the branch tip so the stroke
              // does not visibly extend past the last shown commit.
              const commitXs = Array.from({ length: commitCount }, (_, i) =>
                forkX + cornerR + (spanWidth * (i + 1)) / Math.max(commitCount, 1)
              );

              const brDelay = branchDelayMs.get(b.name) ?? 0;

              // If this branch forks directly on a merge node, suppress status pills
              // below the baseline so labels don't stack under dense marker clusters.
              const forkOnNode = showMergeTicks && sortedNodes.some((n) =>
                Math.abs((nodeXByFullSha.get(n.fullSha) ?? timeToX(n.date)) - forkX) < scaledNodeSize
              );
              const statusLabelY = startY + 34;

              return (
                <g
                  key={b.name}
                  className="cursor-pointer"
                  onClick={() => onBranchSelect?.(b)}
                  onDoubleClick={() => onBranchClick?.(b)}
                  onMouseEnter={() => setHoveredBranch(b.name)}
                  onMouseLeave={() => setHoveredBranch(null)}
                  style={{ opacity: isFocusedError ? 1 : hoveredBranch !== null && !isHovered ? 0.12 : isInactiveError ? 0.45 : hasSelection && !isSelected ? 0.5 : 1, transition: 'opacity 0.15s' }}
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
                    x1={tipX}
                    y1={y}
                    x2={tipX + AHEAD_LABEL_OFFSET_X + 6}
                    y2={y}
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
                      strokeWidth={8 * zoomCompensation}
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
                    strokeWidth={strokeWidth * zoomCompensation}
                    pathLength={1}
                    className="draw-path-arc"
                    style={{ '--delay': `${brDelay}ms`, transition: 'stroke 0.12s ease' } as React.CSSProperties}
                  />

                  {/* Branch info — fades in as arc draws */}
                  <g className="fade-in-info" style={{ '--delay': `${brDelay + INFO_OFFSET}ms` } as React.CSSProperties}>
                    {/* Fork hollow square on parent baseline (or main fallback) */}
                    <rect
                      x={forkX - scaledNodeSize / 2}
                      y={startY - scaledNodeSize / 2}
                      width={scaledNodeSize}
                      height={scaledNodeSize}
                      rx={scaledNodeRadius}
                      fill={isSelected ? '#22d3ee' : isFocusedError ? color : '#1c1917'}
                      stroke={color}
                      strokeWidth={strokeWidth * zoomCompensation}
                    />
                    {/* Commit filled squares along branch */}
                    {commitXs.map((cx, ci) => (
                      <rect
                        key={ci}
                        x={cx - scaledNodeSize / 2}
                        y={y - scaledNodeSize / 2}
                        width={scaledNodeSize}
                        height={scaledNodeSize}
                        rx={scaledNodeRadius}
                        fill={color}
                        onMouseEnter={() =>
                          setTooltip({
                            x: cx,
                            y: y - 16 * zoomCompensation,
                            lines: [
                              `Commit ${b.headSha?.slice(0, 7) ?? '-------'}`,
                              `@${b.lastCommitAuthor}`,
                              fmtTooltipDate(b.lastCommitDate),
                            ],
                            avatarUrl: b.lastCommitAuthorAvatar,
                            avatarFallback: b.lastCommitAuthor?.charAt(0).toUpperCase() || '?',
                          })
                        }
                        onMouseLeave={() => setTooltip(null)}
                      />
                    ))} 

                  </g>

                  {/* Status labels — own fade-in-pill group so they animate independently of fade-in-info */}
                  {!forkOnNode && !isInactiveError && (isStale || isConflict) && (
                    <g
                      className="fade-in-pill"
                      style={{ '--delay': `${brDelay + INFO_OFFSET}ms`, cursor: 'pointer' } as React.CSSProperties}
                      onClick={() => onBranchClick?.(b)}
                    >
                      {/* Invisible hit area — text alone is too small to click reliably */}
                      <rect
                        x={forkX - 22 * zoomCompensation}
                        y={statusLabelY - 11 * zoomCompensation}
                        width={44 * zoomCompensation}
                        height={14 * zoomCompensation}
                        fill="transparent"
                      />
                      {isStale && (
                        <text x={forkX} y={statusLabelY} textAnchor="middle" fontSize={10} fill="#d97706">stale</text>
                      )}
                      {isConflict && (
                        <text x={forkX} y={statusLabelY} textAnchor="middle" fontSize={10} fill="#dc2626">conflict</text>
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
            const { x, node: m } = hoveredMergeNode;
            const label = m.prNumber ? `PR #${m.prNumber}` : m.sha.slice(0, 7);
            const title = m.prTitle ?? '';
            const hasTitle = title.length > 0;
            const TW = 220;
            const TH = hasTitle ? 44 : 30;
            const tx = x - TW / 2;
            const ty = mainY - TH - 14;
            return (
              <g style={{ pointerEvents: 'none' }}>
                <rect x={tx} y={ty} width={TW} height={TH} rx={8}
                  fill="#ffffff" stroke="#e7e5e0" strokeWidth={1}
                  filter="url(#tick-shadow)" />
                <text x={tx + 10} y={ty + 14} fontSize={10} fontWeight={600} fill="#1c1917">
                  {label}{hasTitle ? ` · ${title.slice(0, 30)}${title.length > 30 ? '…' : ''}` : ''}
                </text>
                {hasTitle && (
                  <text x={tx + 10} y={ty + 30} fontSize={10} fill="#a8a29e">
                    {fmtLabelDate(m.date)}
                  </text>
                )}
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
          {checkedOutIndicatorLocal && (
            <g style={{ pointerEvents: 'none' }}>
              <circle
                cx={checkedOutIndicatorLocal.x}
                cy={checkedOutIndicatorLocal.y}
                r={11 * zoomCompensation}
                fill="none"
                stroke="#22d3ee"
                strokeWidth={1.5 * zoomCompensation}
                strokeDasharray={`${3 * zoomCompensation} ${3 * zoomCompensation}`}
                opacity={0.95}
              />
              <circle
                cx={checkedOutIndicatorLocal.x}
                cy={checkedOutIndicatorLocal.y}
                r={4.5 * zoomCompensation}
                fill="#22d3ee"
                stroke="#ecfeff"
                strokeWidth={1 * zoomCompensation}
              />
            </g>
          )}
        </svg>
        </div>

        {/* Fixed-size branch labels/icons outside camera scaling. */}
        <div ref={labelsLayerRef} className="absolute inset-0 pointer-events-none z-20">
        {activeBranches.map((b) => {
          const forkX = branchForkX(b);
          const tipX = branchTipX(b);
          const y = laneY(b);
          const isConflict = b.status === 'conflict-risk';
          const isStale = b.status === 'stale';
          const isSelected = selectedBranch?.name === b.name;
          const isHovered = hoveredBranch === b.name;
          const hasSelection = selectedBranch != null;
          const isInactiveError = inactiveErrorSet.has(b.name);
          const hasOpenPR = openPRBranchNames.has(b.name);
          const daysSinceCommit = (Date.now() - new Date(b.lastCommitDate).getTime()) / 86400000;
          const showClockIcon = hasOpenPR && daysSinceCommit >= 60;
          const isFocusedError = focusedErrorBranch?.name === b.name;
          const focusedErrorColor = b.status === 'conflict-risk' ? '#dc2626' : '#d97706';

          const color = isFocusedError
            ? focusedErrorColor
            : isSelected
              ? '#22d3ee'
              : isInactiveError
                ? '#78716c'
                : isConflict
                  ? '#dc2626'
                  : isStale
                    ? '#d97706'
                    : hasSelection
                      ? '#57534e'
                      : '#78716c';

          const baseOpacity =
            isFocusedError ? 1
              : hoveredBranch !== null && !isHovered ? 0.12
                : isInactiveError ? 0.45
                  : hasSelection && !isSelected ? 0.5
                    : 1;
          const groupOpacity = hoveredPR !== null ? 0.2 : 1;
          const overlayOpacity = baseOpacity * groupOpacity;
          const zoomHideStrength = zoom <= 1 ? 1 : 0;
          const preserveName = isHovered;
          const nameOpacity = preserveName ? 1 : 1 - zoomHideStrength;
          const nameBlurPx = preserveName ? 0 : zoomHideStrength * 4;

          const nameWorldX = forkX;
          const nameWorldY = y;
          const hoverBadgeWorldX = tipX;
          const hoverBadgeWorldY = y;
          const nameDx = cornerR;
          const nameDy = -32;
          const hoverBadgeDx = AHEAD_LABEL_OFFSET_X;
          const hoverBadgeDy = -6;

          const nameLen = Math.min(b.name.length, 22);
          const approxNameW = nameLen * 6.5;
          const clockWorldX = nameWorldX + approxNameW + 10;
          const clockWorldY = nameWorldY;

          const nameInitialX = Math.round(pan.x + (graphOffsetX + nameWorldX) * zoom + nameDx);
          const nameInitialY = Math.round(pan.y + (graphOffsetY + nameWorldY) * zoom + nameDy);
          const hoverBadgeInitialX = Math.round(pan.x + (graphOffsetX + hoverBadgeWorldX) * zoom + hoverBadgeDx);
          const hoverBadgeInitialY = Math.round(pan.y + (graphOffsetY + hoverBadgeWorldY) * zoom + hoverBadgeDy);
          const clockInitialX = pan.x + (graphOffsetX + clockWorldX) * zoom - 5;
          const clockInitialY = pan.y + (graphOffsetY + clockWorldY) * zoom - 5;

          return (
            <div
              key={`branch-label-${b.name}`}
              className="absolute pointer-events-none"
              style={{ opacity: overlayOpacity, transition: 'opacity 0.15s' }}
            >
              <div
                className="absolute h-3 flex items-center text-xs leading-3 select-none whitespace-nowrap"
                style={{
                  left: 0,
                  top: 0,
                  transform: `translate(${nameInitialX}px, ${nameInitialY}px)`,
                  willChange: 'transform',
                  fontWeight: isSelected ? 600 : 400,
                  color: isSelected ? '#22d3ee' : isHovered ? '#1c1917' : color,
                  opacity: nameOpacity,
                  filter: `blur(${nameBlurPx}px)`,
                  transition: 'color 0.12s ease, opacity 0.16s ease, filter 0.16s ease',
                }}
                data-overlay-pos="1"
                data-world-x={nameWorldX}
                data-world-y={nameWorldY}
                data-dx={nameDx}
                data-dy={nameDy}
                data-snap-pixel="1"
              >
                {b.name.length > 22 ? b.name.slice(0, 22) + '…' : b.name}
              </div>

              {isHovered && (
                <div
                  className="absolute h-3 flex items-center text-xs leading-3 font-medium whitespace-nowrap"
                  style={{
                    left: 0,
                    top: 0,
                    transform: `translate(${hoverBadgeInitialX}px, ${hoverBadgeInitialY}px)`,
                    willChange: 'transform',
                    color: '#1c1917',
                  }}
                  data-overlay-pos="1"
                  data-world-x={hoverBadgeWorldX}
                  data-world-y={hoverBadgeWorldY}
                  data-dx={hoverBadgeDx}
                  data-dy={hoverBadgeDy}
                  data-snap-pixel="1"
                >
                  {formatCommitsAhead(b.commitsAhead)}
                </div>
              )}

              {showClockIcon && (
                <svg
                  className="absolute"
                  style={{
                    left: 0,
                    top: 0,
                    transform: `translate3d(${clockInitialX}px, ${clockInitialY}px, 0)`,
                    willChange: 'transform',
                  }}
                  width={10}
                  height={10}
                  viewBox="0 0 10 10"
                  fill="none"
                  data-overlay-pos="1"
                  data-world-x={clockWorldX}
                  data-world-y={clockWorldY}
                  data-dx={-5}
                  data-dy={-5}
                >
                  <circle cx="5" cy="5" r="4.2" stroke={color} strokeWidth="1.2" />
                  <line x1="5" y1="2.1" x2="5" y2="5" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="5" y1="5" x2="7.3" y2="6.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              )}
            </div>
          );
        })}
        </div>

        {/* Fixed-size tooltip layer (not affected by timeline zoom). */}
        {tooltip && (() => {
          const [title, subtitle, meta] = tooltip.lines;
          const avatarFallback = tooltip.avatarFallback || '?';
          const tooltipW = 228;
          const tooltipH = 74;
          const anchorX = pan.x + (graphOffsetX + tooltip.x) * zoom;
          const anchorY = pan.y + (graphOffsetY + tooltip.y) * zoom;
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
              const nextWorldLeft = Number(e.target.value);
              const nextPan = clampPan({
                x: -nextWorldLeft * zoomRef.current,
                y: targetPanRef.current.y,
              }, zoomRef.current, 'hard');
              applyCamera(nextPan, zoomRef.current, true);
            }}
            className="bottom-scroll-range flex-1"
          />
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
              title="Horizontal time scaling"
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
                  zoomRef.current * 0.92
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
                  zoomRef.current * 1.08
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
