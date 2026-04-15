import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { ChevronDown, GitCommitHorizontal, Loader2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { layoutWithLines, prepareWithSegments } from '@chenglou/pretext';
import { Branch, BranchCommitPreview, BranchPromptMeta, CheckedOutRef, DirectCommit, MergeNode, OpenPR, WorktreeInfo } from '../types';
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
const NODE_SIZE = 24;
const CORNER_R = 20;
const BRANCH_HIT_STROKE_WIDTH = 48;
const BRANCH_HIT_END_INSET = 10;

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
// Keep a clear gutter between rows/columns so cells don't visually touch.
const GRID_CELL_GAP = 8;
const GRID_ROW_GAP = GRID_NODE_RECT.height + GRID_CELL_GAP;
const GRID_LANE_WIDTH = GRID_NODE_RECT.width + GRID_CELL_GAP;
const GRID_LANE_OFFSET_X = 0;
/**
 * How much empty timeline distance two branch lifetimes need before reusing a column.
 * Lower values are less conservative and keep columns more stable across clump toggles.
 */
const BRANCH_COLUMN_REUSE_TIME_GAP_FACTOR = 0.35;
/**
 * Row sharing tolerance for collapsed clumps. Rows can be reused when timestamps are
 * close and lane-level safety checks pass.
 */
const GRID_ROW_SHARE_TIME_TOLERANCE_FACTOR = 0.52;
const GRID_ROUTE_CORNER_R = 9;
const GRID_MERGE_EVENT_ROW_NUDGE = 0.001;
const LOCAL_UNPUSHED_GRAY = '#E0E0E0';
const CANVAS_NEUTRAL_GRAY = '#E0E0E0';
const CANVAS_NEUTRAL_GRAY_HOVER = '#7CB0F8';
const CANVAS_NODE_FILL = '#F5F5F5';
const HOVER_NODE_FILL = '#F0F6FE';
const CANVAS_UNPUSHED_NODE_FILL = '#FAFAF9';
const CANVAS_UNPUSHED_NODE_FILL_HEX = '#FAFAF9';
/** Stash synthetic nodes — yellow outline; fill matches other commit nodes. */
const CANVAS_STASH_NODE_STROKE = '#D4A82A';
const STASH_LABEL_TEXT = '#B8860B';
const CANVAS_NODE_STROKE = '#E0E0E0';
const CANVAS_NODE_STROKE_WIDTH = 1;
const CANVAS_NODE_STROKE_INSET = CANVAS_NODE_STROKE_WIDTH / 2;
const COMMIT_NODE_CORNER_RADIUS = 6;
const DEBUG_SHOW_BRANCH_HIT_AREAS = false;
const DEBUG_BRANCH_HIT_AREA_COLOR = '#ef4444';
const DEBUG_BRANCH_HIT_AREA_OPACITY = 0.25;
const UNPUSHED_LANE_STROKE_VISUAL_COMP = 0.15;
const CLUMP_COUNT_MAX = 99;
const CHECKED_OUT_AHEAD_OFFSET_WORLD = 120;
/** Stroke color used to mark the currently checked-out commit/branch. */
const CHECKED_OUT_SELECTION_STROKE = '#5EB9ED';
const CHECKED_OUT_SELECTION_FILL = '#EDF7FD';
/** Slightly brighter stroke when hovering the checked-out commit (hover must win over checkout chrome). */
const CHECKED_OUT_SELECTION_HOVER_STROKE = '#64A1F7';
/** Linked worktree checkout (not this app window) — teal vs primary blue; stash stays yellow */
const WORKTREE_OTHER_STROKE = '#0F9489';
const WORKTREE_OTHER_FILL = '#E6FAF7';
const WORKTREE_OTHER_HOVER_STROKE = '#0D7D72';
const WORKTREE_OTHER_TITLE = '#0B6B63';
const WORKTREE_OTHER_INNER_TEXT = '#0B5C56';
/** Stroke color used for user-selected commits/branches (distinct from checked-out). */
const USER_SELECTION_STROKE = '#3D8AF5';
const USER_SELECTION_FILL = '#E7F0FE';
const CHECKED_OUT_PULSE_MS = 1800;
const INITIAL_CENTER_SETTLE_MS = CHECKED_OUT_PULSE_MS;
const INITIAL_REVEAL_FADE_MS = CHECKED_OUT_PULSE_MS;
const ENABLE_TIMELINE_INTRO_ANIMATIONS = false;
const ENABLE_NODE_PUSH_DEBUG_LABEL = false;
const DROPDOWN_SPRING_VARIANTS = {
  closed: {
    opacity: 0,
    y: 12,
    scale: 0.95,
    transition: { type: 'spring', stiffness: 1520, damping: 40, mass: 0.24 },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 2560, damping: 42, mass: 0.2 },
  },
} as const;
/** Same stack as `body` / inherited SVG labels — avoids a generic `sans-serif` ellipsis glyph that looks wider than the UI font. */
const BRANCH_MAP_SVG_FONT_FAMILY = 'system-ui, -apple-system, sans-serif';

type TooltipData = {
  x: number;
  y: number;
  lines: string[];
  avatarUrl?: string;
  avatarFallback?: string;
};
type ClampMode = 'hard' | 'soft' | 'none';
type OrientationMode = 'vertical' | 'horizontal';
const ORIENTATION_SWITCH_FADE_MS = 140;
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
type NodeDragState = {
  nodeId: string;
  stashIndex?: number;
  parentBranchName: string | null;
  parentSha: string | null;
  containerLeft: number;
  containerTop: number;
  startClientX: number;
  startClientY: number;
  currentClientX: number;
  currentClientY: number;
  isDragging: boolean;
  isDone: boolean;
  /** The actual SVG <g> element being dragged — moved imperatively */
  nodeElement: SVGGElement | null;
  /** The label <text> element that lives outside the moved <g> — hidden during drag */
  nodeLabelElement: SVGTextElement | null;
};
type NodeDragDisplay = {
  /** Cursor position in container-relative pixels, for the floating label */
  cursorX: number;
  cursorY: number;
  nodeId: string;
  hoveringMoveBackBranch: string | null;
};
type CheckoutAccent = 'none' | 'primary' | 'other';
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
  hasUncommittedPreview: boolean;
  localSegmentStartY: number | undefined;
  commitDotClusters: MarkerCluster<CommitEntryItem>[];
  promptMarkerClusters: MarkerCluster<PromptEntryItem>[];
  branchHasCheckedOutHead: boolean;
  brDelay: number;
  showClockIcon: boolean;
  namePoint: { x: number; y: number };
  clockPoint: { x: number; y: number };
  mergeTargetX: number | null;
  mergeTargetY: number | null;
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
  phaseProgress?: number;
  rowReleaseAt?: number;
};
type ClumpMemberAnchorState = {
  x: number;
  y: number;
  lastSeenRender: number;
};
type BranchLineGeometryState = {
  startX: number;
  targetStartX: number;
  forkY: number;
  targetForkY: number;
  lanePosX: number;
  targetLanePosX: number;
  tipY: number;
  targetTipY: number;
  mergeTargetX: number | null;
  targetMergeTargetX: number | null;
  mergeTargetY: number | null;
  targetMergeTargetY: number | null;
  localSegmentStartY: number | null;
  targetLocalSegmentStartY: number | null;
  lastSeenRender: number;
  createdAtRender: number;
};
type LaneAnchor = {
  x: number;
  y: number;
  trimRadius: number;
  key: string;
};
type LaneSegment = {
  start: LaneAnchor;
  end: LaneAnchor;
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

function buildStraightPath(
  start: { x: number; y: number },
  end: { x: number; y: number },
  pointFormatter: (x: number, y: number) => string,
): string {
  return `M ${pointFormatter(start.x, start.y)} L ${pointFormatter(end.x, end.y)}`;
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

function fmtClumpDateRange(startStr: string, endStr: string): string {
  const d1 = new Date(startStr);
  const d2 = new Date(endStr);
  const sameDay =
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
  const d1Str = d1.toLocaleDateString('en-US', options);

  if (sameDay) {
    const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit' };
    const t1 = d1.toLocaleTimeString('en-US', timeOptions);
    const t2 = d2.toLocaleTimeString('en-US', timeOptions);
    return `${d1Str} at ${t1} → ${t2}`;
  } else {
    const d2Str = d2.toLocaleDateString('en-US', options);
    return `${d1Str} → ${d2Str}`;
  }
}

const svgTextWidthCache = new Map<string, number>();
let svgTextMeasureCtx: CanvasRenderingContext2D | null = null;
const pretextPreparedCache = new Map<string, ReturnType<typeof prepareWithSegments>>();
const PRETEXT_PREPARED_CACHE_LIMIT = 1800;

function prunePretextPreparedCache() {
  if (pretextPreparedCache.size <= PRETEXT_PREPARED_CACHE_LIMIT) return;
  const removeCount = pretextPreparedCache.size - PRETEXT_PREPARED_CACHE_LIMIT;
  let removed = 0;
  for (const key of pretextPreparedCache.keys()) {
    pretextPreparedCache.delete(key);
    removed += 1;
    if (removed >= removeCount) break;
  }
}

function getPreparedPretext(text: string, font: string) {
  const cacheKey = `${font}::${text}`;
  const cached = pretextPreparedCache.get(cacheKey);
  if (cached) return cached;
  const prepared = prepareWithSegments(text, font);
  pretextPreparedCache.set(cacheKey, prepared);
  prunePretextPreparedCache();
  return prepared;
}

function estimateSvgTextWidth(text: string, fontSize = 10): number {
  const cacheKey = `${fontSize}:${BRANCH_MAP_SVG_FONT_FAMILY}:${text}`;
  const cached = svgTextWidthCache.get(cacheKey);
  if (cached != null) return cached;

  let width: number;
  if (typeof document !== 'undefined') {
    if (!svgTextMeasureCtx) {
      const canvas = document.createElement('canvas');
      svgTextMeasureCtx = canvas.getContext('2d');
    }
    if (svgTextMeasureCtx) {
      svgTextMeasureCtx.font = `400 ${fontSize}px ${BRANCH_MAP_SVG_FONT_FAMILY}`;
      width = svgTextMeasureCtx.measureText(text).width;
    } else {
      width = text.length * fontSize * 0.56;
    }
  } else {
    width = text.length * fontSize * 0.56;
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
 * Fork-off indices must be included in `preserveSplitIndices` so clump bounds
 * always align with branch fork points (never merge across a fork).
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

function isStashCommitLike(commit: { kind?: string; fullSha?: string }): boolean {
  return commit.kind === 'stash' || (commit.fullSha?.startsWith('STASH:') ?? false);
}

function isSyntheticLocalCommit(commit: { kind?: string; fullSha?: string }): boolean {
  return (
    commit.fullSha === 'WORKING_TREE' ||
    commit.kind === 'uncommitted' ||
    isStashCommitLike(commit)
  );
}

function stashOrUncommittedBaseStroke(isStash: boolean, isUncommitted: boolean): string {
  if (isStash) return CANVAS_STASH_NODE_STROKE;
  if (isUncommitted) return CHECKED_OUT_SELECTION_STROKE;
  return CANVAS_NODE_STROKE;
}

/** Collapsed clump: blue if any uncommitted, else yellow if stash-only. */
function clusterLocalSyntheticStroke(clusterHasUncommitted: boolean, clusterHasStash: boolean): string {
  if (clusterHasUncommitted) return CHECKED_OUT_SELECTION_STROKE;
  if (clusterHasStash) return CANVAS_STASH_NODE_STROKE;
  return CANVAS_NODE_STROKE;
}

function splitIndicesAroundUncommitted<T>(
  entries: T[],
  isUncommitted: (entry: T) => boolean,
): Set<number> {
  const splits = new Set<number>();
  entries.forEach((entry, index) => {
    if (!isUncommitted(entry)) return;
    // Isolate the uncommitted marker into its own singleton cluster.
    if (index > 0) splits.add(index - 1);
    if (index < entries.length - 1) splits.add(index);
  });
  return splits;
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

type BranchClusterEntries = {
  realCommitEntries: MarkerEntry<CommitEntryItem>[];
  renderEntries: MarkerEntry<CommitEntryItem>[];
};

type BranchClusterViewModel = {
  cluster: MarkerCluster<CommitEntryItem>;
  clusterKey: string;
  memberKeys: string[];
  realCommitEntries: MarkerEntry<CommitEntryItem>[];
  renderEntries: MarkerEntry<CommitEntryItem>[];
  preferredAnchorEntry: MarkerEntry<CommitEntryItem>;
  count: number;
  canExpandCluster: boolean;
};

type MainClusterViewModel = {
  cluster: MarkerCluster<DirectCommit>;
  clusterKey: string;
  memberKeys: string[];
  first: DirectCommit;
  last: DirectCommit;
  count: number;
  canExpandCluster: boolean;
};

function resolveBranchClusterEntries(
  cluster: MarkerCluster<CommitEntryItem>,
): BranchClusterEntries {
  const realCommitEntries = cluster.entries.filter(
    (entry) => entry.item.commit?.kind !== 'branch-created'
  );
  return {
    realCommitEntries,
    renderEntries: realCommitEntries.length > 0 ? realCommitEntries : cluster.entries,
  };
}

function branchClusterKey(
  branchName: string,
  cluster: MarkerCluster<CommitEntryItem>,
): string {
  const firstEntry = cluster.entries[0];
  const lastEntry = cluster.entries[cluster.entries.length - 1];
  return `commit-clump-${branchName}-${firstEntry.item.index}-${lastEntry.item.index}`;
}

function branchClusterMemberKeys(
  branchName: string,
  cluster: MarkerCluster<CommitEntryItem>,
): string[] {
  return cluster.entries.map((entry) => {
    const commitSha = entry.item.commit?.fullSha;
    return commitSha
      ? `branch-commit:${branchName}:${commitSha}`
      : `branch-commit:${branchName}:slot-${entry.item.index}`;
  });
}

function branchPreferredAnchorEntry(
  cluster: MarkerCluster<CommitEntryItem>,
  realCommitEntries: MarkerEntry<CommitEntryItem>[],
  branchEndDotIndex: number | null,
): MarkerEntry<CommitEntryItem> {
  if (branchEndDotIndex != null) {
    const headEntry = cluster.entries.find(
      (entry) => entry.item.index === branchEndDotIndex
    );
    if (headEntry) return headEntry;
  }
  return realCommitEntries[realCommitEntries.length - 1] ?? cluster.entries[cluster.entries.length - 1];
}

function buildBranchClusterViewModel(
  branchName: string,
  cluster: MarkerCluster<CommitEntryItem>,
  branchEndDotIndex: number | null,
): BranchClusterViewModel {
  const { realCommitEntries, renderEntries } = resolveBranchClusterEntries(cluster);
  const count = renderEntries.length;
  return {
    cluster,
    clusterKey: branchClusterKey(branchName, cluster),
    memberKeys: branchClusterMemberKeys(branchName, cluster),
    realCommitEntries,
    renderEntries,
    preferredAnchorEntry: branchPreferredAnchorEntry(cluster, realCommitEntries, branchEndDotIndex),
    count,
    canExpandCluster: count > 1,
  };
}

function mainClusterKey(
  cluster: MarkerCluster<DirectCommit>,
): string {
  const first = cluster.entries[0].item;
  const last = cluster.entries[cluster.entries.length - 1].item;
  return `direct-clump-${first.fullSha}-${last.fullSha}`;
}

function mainClusterMemberKeys(
  cluster: MarkerCluster<DirectCommit>,
): string[] {
  return cluster.entries.map((entry) => `direct:${entry.item.fullSha}`);
}

function buildMainClusterViewModel(
  cluster: MarkerCluster<DirectCommit>,
): MainClusterViewModel {
  const count = cluster.entries.length;
  return {
    cluster,
    clusterKey: mainClusterKey(cluster),
    memberKeys: mainClusterMemberKeys(cluster),
    first: cluster.entries[0].item,
    last: cluster.entries[count - 1].item,
    count,
    canExpandCluster: count > 1,
  };
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
  unpushedDirectCommits?: DirectCommit[];
  unpushedCommitShasByBranch?: Record<string, string[]>;
  defaultBranch: string;
  onCommitClick?: (target: { commitSha: string; branchName?: string }) => void;
  onLoadMore?: () => void;
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

  /** Pixels of vertical chrome (e.g. floating header) covering the top of the map; used for aspect/padding and pan bounds. */
  mapTopInsetPx?: number;
  onMergeRefsIntoBranch?: (sourceRefs: string[], targetBranch: string) => Promise<void> | void;
  mergeInProgress?: boolean;
  onPushAllBranches?: () => Promise<void> | void;
  onPushCurrentBranch?: () => Promise<void> | void;
  onPushCommitTargets?: (targets: Array<{ branchName: string; targetSha: string }>) => Promise<void> | void;
  pushInProgress?: boolean;
  onDeleteSelection?: (targets: {
    branchNames: string[];
    discardUncommittedChanges: boolean;
    stashIndices?: number[];
  }) => Promise<void> | void;
  deleteInProgress?: boolean;
  worktrees?: WorktreeInfo[];
  /** App’s open repo path; used with Git’s worktree paths when isCurrent is wrong (symlinks, /private/var, etc.). */
  currentRepoPath?: string;
  onRemoveWorktree?: (worktreePath: string, force: boolean) => Promise<void> | void;
  removeWorktreeInProgress?: boolean;
  /** Cmd/Ctrl+click or double-click a teal (other worktree) commit to target that worktree directory. */
  onSwitchToWorktree?: (worktreePath: string) => void | Promise<void>;
  onStashLocalChanges?: () => Promise<void> | void;
  stashInProgress?: boolean;
  stashDisabled?: boolean;
  onCommitLocalChanges?: (message: string) => Promise<boolean>;
  commitInProgress?: boolean;
  commitDisabled?: boolean;
  onStageAllChanges?: () => Promise<boolean> | Promise<void> | boolean | void;
  stageInProgress?: boolean;
  /** Drag-to-branch: called when user drags WORKING_TREE or a stash node to a new branch. */
  onCreateBranchFromNode?: (nodeId: string, branchName: string) => Promise<void>;
  createBranchFromNodeInProgress?: boolean;
  /** Move back: called when user drags back to a branch that shares the current HEAD. */
  onMoveNodeBackToBranch?: (targetBranchName: string) => Promise<void>;
}

export default function BranchMap({
  branches,
  mergeNodes,
  directCommits = [],
  unpushedDirectCommits = [],
  unpushedCommitShasByBranch = {},
  defaultBranch,
  onCommitClick,
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
  onMoveNodeBackToBranch,
}: BranchMapProps) {
  const [, setTooltip] = useState<TooltipData | null>(null);
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);
  const [hoveredNodeStrokeKey, setHoveredNodeStrokeKey] = useState<string | null>(null);
  const [hoveredNodeBranchName, setHoveredNodeBranchName] = useState<string | null>(null);
  const [expandedClumps, setExpandedClumps] = useState<Map<string, ExpandedClumpState>>(() => new Map());
  const [zoom, setZoom] = useState(ZOOM_DEFAULT);
  const [orientation, setOrientation] = useState<OrientationMode>('vertical');
  const [isOrientationSwitchFading, setIsOrientationSwitchFading] = useState(false);

  const [showLineageDebug, setShowLineageDebug] = useState(false);
  const [selectedBranchNames, setSelectedBranchNames] = useState<string[]>([]);
  const [selectedCommitShas, setSelectedCommitShas] = useState<string[]>([]);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [commitDialogOpen, setCommitDialogOpen] = useState(false);
  const [commitMessageDraft, setCommitMessageDraft] = useState('');
  const commitMessageRef = useRef<HTMLTextAreaElement>(null);
  const [worktreeMenuOpen, setWorktreeMenuOpen] = useState(false);
  const worktreeMenuRef = useRef<HTMLDivElement>(null);
  const [gitActionMenuOpen, setGitActionMenuOpen] = useState(false);
  const gitActionMenuRef = useRef<HTMLDivElement>(null);
  const deleteConfirmOpenRef = useRef(false);
  const deleteInProgressRef = useRef(deleteInProgress);
  const deletableSelectionCountRef = useRef(0);
  const marqueeBaseSelectionRef = useRef<{ branchNames: string[]; commitShas: string[] }>({
    branchNames: [],
    commitShas: [],
  });
  const [mergeTargetCommitSha, setMergeTargetCommitSha] = useState<string | null>(null);
  const [isMarqueeSelecting, setIsMarqueeSelecting] = useState(false);
  const [marqueeRect, setMarqueeRect] = useState<MarqueeRect | null>(null);
  const [nodeDragDisplay, setNodeDragDisplay] = useState<NodeDragDisplay | null>(null);
  const [newBranchDialogForNode, setNewBranchDialogForNode] = useState<{ nodeId: string; stashIndex?: number } | null>(null);
  const [newBranchNameForNode, setNewBranchNameForNode] = useState('');
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
  const branchLineGeometryStateRef = useRef<Map<string, BranchLineGeometryState>>(new Map());
  const stableHorizontalMaxRowRef = useRef<number | null>(null);
  const stableHorizontalMirrorRef = useRef<number | null>(null);
  const clumpRenderCounterRef = useRef(0);
  clumpRenderCounterRef.current += 1;
  const clumpRenderId = clumpRenderCounterRef.current;
  const clumpCleanupTimersRef = useRef<Map<string, number>>(new Map());
  const graphOffsetRef = useRef({ x: 0, y: 0 });
  const graphProjectionRef = useRef({
    graphOffsetX: 0,
    graphOffsetY: 0,
    graphContentTranslateX: 0,
    graphContentTranslateY: 0,
    initialized: false,
  });
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
  const pendingOrientationAutoCenterRef = useRef(false);
  const orientationSwitchFadeTimeoutRef = useRef<number | null>(null);
  const orientationAutoCenterRafRef = useRef<number | null>(null);
  const marqueeDragRef = useRef<MarqueeDragState | null>(null);
  const nodeDragRef = useRef<NodeDragState | null>(null);
  const newBranchInputForNodeRef = useRef<HTMLInputElement>(null);
  const onCreateBranchFromNodeRef = useRef(onCreateBranchFromNode);
  const onMoveNodeBackToBranchRef = useRef(onMoveNodeBackToBranch);
  const moveBackCandidateBranchNamesRef = useRef<Set<string>>(new Set());
  const branchHeadTargetsRef = useRef<BranchHeadTarget[]>([]);
  const commitSelectionTargetsRef = useRef<CommitSelectionTarget[]>([]);
  const selectionProjectionRef = useRef({
    graphOffsetX: 0,
    graphOffsetY: 0,
    graphContentTranslateX: 0,
    graphContentTranslateY: 0,
    isHorizontal: false,
  });

  const [, setTimelineRevealReady] = useState(false);
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
    clearTransientHoverState();
    const shouldCheckout = event.ctrlKey || event.metaKey || event.detail >= 2;
    if (shouldCheckout && commitSha && commitSha !== 'WORKING_TREE' && onSwitchToWorktree) {
      const shortSha = commitSha.length >= 40 ? commitSha.slice(0, 7) : commitSha;
      let otherWt: WorktreeInfo | null = null;
      if (branchName) {
        otherWt = findOtherWorktreeForCommit(branchName, commitSha, shortSha);
        if (!otherWt) {
          otherWt = findWorktreeWithBranchCheckedOut(branchName);
        }
      } else {
        otherWt = findOtherWorktreeByHeadSha(commitSha, shortSha);
      }
      if (otherWt) {
        void onSwitchToWorktree(otherWt.path);
        return;
      }
    }
    const isFreshCopyBranchSelection = !!(branchName && freshCopyBranchNames.has(branchName));
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
    if (!commitSha) return;
    if (isFreshCopyBranchSelection) {
      if (!event.shiftKey) {
        setSelectedCommitShas([]);
        setMergeTargetCommitSha(null);
      }
      if (shouldCheckout) {
        onCommitClick?.({ commitSha, branchName });
      }
      return;
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

  function clearTransientHoverState() {
    setHoveredBranch(null);
    handleNodeHoverLeave();
    setTooltip(null);
  }

  function normalizeMarqueeRect(drag: MarqueeDragState): MarqueeRect {
    const left = Math.min(drag.startX, drag.currentX);
    const top = Math.min(drag.startY, drag.currentY);
    const width = Math.abs(drag.currentX - drag.startX);
    const height = Math.abs(drag.currentY - drag.startY);
    return { left, top, width, height };
  }

  function getMarqueeBranchSelection(nextRect: MarqueeRect): string[] {
    const targets = branchHeadTargetsRef.current;
    const projection = selectionProjectionRef.current;
    const cameraScale = getCameraScale(zoomRef.current, projection.isHorizontal);
    const nodeRect = commitRectSize(scaledNodeSize);
    const halfWidthPx = (nodeRect.width / 2) * cameraScale.x;
    const halfHeightPx = (nodeRect.height / 2) * cameraScale.y;
    const hitPaddingPx = 3;
    return targets
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
  }

  function getMarqueeCommitSelection(nextRect: MarqueeRect): string[] {
    const targets = commitSelectionTargetsRef.current;
    const projection = selectionProjectionRef.current;
    const cameraScale = getCameraScale(zoomRef.current, projection.isHorizontal);
    const nodeRect = commitRectSize(scaledNodeSize);
    const halfWidthPx = (nodeRect.width / 2) * cameraScale.x;
    const halfHeightPx = (nodeRect.height / 2) * cameraScale.y;
    const hitPaddingPx = 3;
    return targets
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
  }

  function applyMarqueeSelection(nextRect: MarqueeRect, additive: boolean) {
    const branchSelection = getMarqueeBranchSelection(nextRect);
    const commitSelection = getMarqueeCommitSelection(nextRect);
    const baseSelection = marqueeBaseSelectionRef.current;
    const nextBranchSelection = additive
      ? Array.from(new Set([...baseSelection.branchNames, ...branchSelection]))
      : branchSelection;
    const nextCommitSelection = additive
      ? Array.from(new Set([...baseSelection.commitShas, ...commitSelection]))
      : Array.from(new Set(commitSelection));

    setSelectedBranchNames(nextBranchSelection);
    setSelectedCommitShas(nextCommitSelection);
    if (!additive) {
      setMergeTargetCommitSha(commitSelection[commitSelection.length - 1] ?? null);
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
    marqueeBaseSelectionRef.current = {
      branchNames: additive ? selectedBranchNames : [],
      commitShas: additive ? selectedCommitShas : [],
    };
    setTooltip(null);
    setMarqueeRect({ left: startX, top: startY, width: 0, height: 0 });
    setIsMarqueeSelecting(true);
  }

  function beginNodeDrag(e: React.MouseEvent, nodeId: string, _worldX: number, _worldY: number) {
    if (!onCreateBranchFromNode && !onMoveNodeBackToBranch) return;
    e.stopPropagation();
    const container = scrollRef.current;
    if (!container) return;
    const bounds = container.getBoundingClientRect();
    const stashMatch = /^STASH:(\d+)$/.exec(nodeId);
    const stashIndex = stashMatch ? parseInt(stashMatch[1], 10) : undefined;
    const parentBranchName =
      nodeId === 'WORKING_TREE'
        ? (checkedOutRef?.branchName ?? null)
        : stashMatch
          ? (branches.find((b) => b.name === `*Stash:${stashMatch[1]}`)?.parentBranch ?? null)
          : null;
    const parentSha =
      nodeId === 'WORKING_TREE'
        ? (checkedOutRef?.headSha ?? null)
        : stashMatch
          ? (branches.find((b) => b.name === `*Stash:${stashMatch[1]}`)?.divergedFromSha ?? null)
          : null;

    // Find the actual SVG elements to manipulate imperatively
    const nodeElement =
      svgRef.current?.querySelector<SVGGElement>(`[data-drag-id="${CSS.escape(nodeId)}"]`) ?? null;
    const nodeLabelElement =
      svgRef.current?.querySelector<SVGTextElement>(`[data-drag-label-id="${CSS.escape(nodeId)}"]`) ?? null;

    nodeDragRef.current = {
      nodeId,
      stashIndex,
      parentBranchName,
      parentSha,
      containerLeft: bounds.left,
      containerTop: bounds.top,
      startClientX: e.clientX,
      startClientY: e.clientY,
      currentClientX: e.clientX,
      currentClientY: e.clientY,
      isDragging: false,
      isDone: false,
      nodeElement,
      nodeLabelElement,
    };
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
    if (!ENABLE_TIMELINE_INTRO_ANIMATIONS) {
      clearTimelineRevealTimer();
      setTimelineRevealPhase('done');
      setTimelineRevealReady(true);
      setHasInitialRevealDone(true);
      return;
    }
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
    const existing = clumpAnchorStates.get(clusterKey);
    const state: ClumpAnchorState = existing
      ? {
        ...existing,
        targetX: target.x,
        targetY: target.y,
        lastSeenRender: clumpRenderId,
      }
      : {
        x: target.x,
        y: target.y,
        targetX: target.x,
        targetY: target.y,
        lastSeenRender: clumpRenderId,
      };
    clumpAnchorStates.set(clusterKey, state);
    for (const memberKey of memberKeys) {
      const existingMember = clumpMemberAnchorStates.get(memberKey);
      clumpMemberAnchorStates.set(memberKey, existingMember
        ? {
          ...existingMember,
          lastSeenRender: clumpRenderId,
        }
        : {
          x: target.x,
          y: target.y,
          lastSeenRender: clumpRenderId,
        });
    }
    return { x: state.x, y: state.y };
  }

  function resolveAnimatedBranchLineGeometry(
    branchKey: string,
    target: {
      startX: number;
      forkY: number;
      lanePosX: number;
      tipY: number;
      mergeTargetX: number | null;
      mergeTargetY: number | null;
      localSegmentStartY: number | null;
    },
  ): {
    startX: number;
    forkY: number;
    lanePosX: number;
    tipY: number;
    mergeTargetX: number | null;
    mergeTargetY: number | null;
    localSegmentStartY: number | null;
  } {
    const states = branchLineGeometryStateRef.current;
    const existing = states.get(branchKey);
    const state: BranchLineGeometryState = existing
      ? {
        ...existing,
        targetStartX: target.startX,
        targetForkY: target.forkY,
        targetLanePosX: target.lanePosX,
        targetTipY: target.tipY,
        targetMergeTargetX: target.mergeTargetX,
        targetMergeTargetY: target.mergeTargetY,
        targetLocalSegmentStartY: target.localSegmentStartY,
        lastSeenRender: clumpRenderId,
      }
      : {
        startX: target.startX,
        targetStartX: target.startX,
        forkY: target.forkY,
        targetForkY: target.forkY,
        lanePosX: target.lanePosX,
        targetLanePosX: target.lanePosX,
        tipY: target.tipY,
        targetTipY: target.tipY,
        mergeTargetX: target.mergeTargetX,
        targetMergeTargetX: target.mergeTargetX,
        mergeTargetY: target.mergeTargetY,
        targetMergeTargetY: target.mergeTargetY,
        localSegmentStartY: target.localSegmentStartY,
        targetLocalSegmentStartY: target.localSegmentStartY,
        lastSeenRender: clumpRenderId,
        createdAtRender: clumpRenderId,
      };
    states.set(branchKey, state);
    return {
      startX: state.startX,
      forkY: state.forkY,
      lanePosX: state.lanePosX,
      tipY: state.tipY,
      mergeTargetX: state.mergeTargetX,
      mergeTargetY: state.mergeTargetY,
      localSegmentStartY: state.localSegmentStartY,
    };
  }

  useEffect(() => {
    const clumpAnchorStates = clumpAnchorStateRef.current;
    const clumpMemberAnchorStates = clumpMemberAnchorStateRef.current;
    const branchLineStates = branchLineGeometryStateRef.current;

    const clumpMotionActive = Array.from(expandedClumps.values()).some(
      (s) => s.phase === 'expanding' || s.phase === 'collapsing',
    );
    /** Match lane/connector motion to clump transitions (grid targets jump faster than 0.26 can follow). */
    const motionLerp = clumpMotionActive ? 0.55 : 0.26;

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
    for (const [key, state] of branchLineStates.entries()) {
      if (state.lastSeenRender !== clumpRenderId) {
        branchLineStates.delete(key);
      }
    }

    const reduceMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let snapped = false;
    let shouldContinue = false;
    for (const [, state] of clumpAnchorStates.entries()) {
      if (reduceMotion) {
        if (state.x !== state.targetX || state.y !== state.targetY) {
          state.x = state.targetX;
          state.y = state.targetY;
          snapped = true;
        }
        continue;
      }
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
      state.x += dx * motionLerp;
      state.y += dy * motionLerp;
      shouldContinue = true;
    }
    const animateNumeric = (
      current: number,
      target: number,
      onUpdate: (value: number) => void,
    ) => {
      const delta = target - current;
      if (Math.abs(delta) <= 0.08) {
        if (current !== target) {
          onUpdate(target);
          snapped = true;
        }
        return;
      }
      if (reduceMotion) {
        onUpdate(target);
        snapped = true;
        return;
      }
      onUpdate(current + delta * motionLerp);
      shouldContinue = true;
    };
    const animateNullableNumeric = (
      current: number | null,
      target: number | null,
      onUpdate: (value: number | null) => void,
    ) => {
      if (target == null) {
        if (current != null) {
          onUpdate(null);
          snapped = true;
        }
        return;
      }
      if (current == null) {
        onUpdate(target);
        snapped = true;
        return;
      }
      animateNumeric(current, target, onUpdate);
    };
    for (const [, state] of branchLineStates.entries()) {
      // Branch lines created very recently (within 2 renders) should snap to
      // corrected positions instead of animating.  This prevents the visual
      // glitch where incomplete initial data produces a wrong fork Y that then
      // visibly lerps to the correct position.
      const isNewlyCreated = clumpRenderId - state.createdAtRender <= 2;
      if (isNewlyCreated) {
        const forkDelta = Math.abs(state.forkY - state.targetForkY);
        const tipDelta = Math.abs(state.tipY - state.targetTipY);
        const startDelta = Math.abs(state.startX - state.targetStartX);
        const laneDelta = Math.abs(state.lanePosX - state.targetLanePosX);
        if (forkDelta > 0.5 || tipDelta > 0.5 || startDelta > 0.5 || laneDelta > 0.5) {
          state.startX = state.targetStartX;
          state.forkY = state.targetForkY;
          state.lanePosX = state.targetLanePosX;
          state.tipY = state.targetTipY;
          state.mergeTargetX = state.targetMergeTargetX;
          state.mergeTargetY = state.targetMergeTargetY;
          state.localSegmentStartY = state.targetLocalSegmentStartY;
          snapped = true;
          continue;
        }
      }
      animateNumeric(state.startX, state.targetStartX, (value) => { state.startX = value; });
      animateNumeric(state.forkY, state.targetForkY, (value) => { state.forkY = value; });
      animateNumeric(state.lanePosX, state.targetLanePosX, (value) => { state.lanePosX = value; });
      animateNumeric(state.tipY, state.targetTipY, (value) => { state.tipY = value; });
      animateNullableNumeric(
        state.mergeTargetX,
        state.targetMergeTargetX,
        (value) => { state.mergeTargetX = value; },
      );
      animateNullableNumeric(
        state.mergeTargetY,
        state.targetMergeTargetY,
        (value) => { state.mergeTargetY = value; },
      );
      animateNullableNumeric(
        state.localSegmentStartY,
        state.targetLocalSegmentStartY,
        (value) => { state.localSegmentStartY = value; },
      );
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
  }, [expandedClumps, clumpRenderId]);

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
      const topElementAtPointer = document.elementFromPoint(e.clientX, e.clientY);
      if (topElementAtPointer?.closest('[data-map-ui]')) {
        return;
      }
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
      if (e.clientX != null && e.clientY != null) {
        const topElementAtPointer = document.elementFromPoint(e.clientX, e.clientY);
        if (topElementAtPointer?.closest('[data-map-ui]')) {
          return;
        }
      }
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
      if (orientationSwitchFadeTimeoutRef.current !== null) {
        clearTimeout(orientationSwitchFadeTimeoutRef.current);
        orientationSwitchFadeTimeoutRef.current = null;
      }
      if (orientationAutoCenterRafRef.current !== null) {
        cancelAnimationFrame(orientationAutoCenterRafRef.current);
        orientationAutoCenterRafRef.current = null;
      }
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
    deleteConfirmOpenRef.current = deleteConfirmOpen;
  }, [deleteConfirmOpen]);

  useEffect(() => {
    if (!commitDialogOpen) return;
    const id = requestAnimationFrame(() => {
      commitMessageRef.current?.focus();
    });
    return () => cancelAnimationFrame(id);
  }, [commitDialogOpen]);

  useEffect(() => {
    if (!commitDialogOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        if (!commitInProgress) {
          setCommitDialogOpen(false);
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [commitDialogOpen, commitInProgress]);

  useEffect(() => {
    deleteInProgressRef.current = deleteInProgress;
  }, [deleteInProgress]);

  useEffect(() => {
    onCreateBranchFromNodeRef.current = onCreateBranchFromNode;
  }, [onCreateBranchFromNode]);

  useEffect(() => {
    onMoveNodeBackToBranchRef.current = onMoveNodeBackToBranch;
  }, [onMoveNodeBackToBranch]);

  useEffect(() => {
    function findMoveBackBranch(screenX: number): string | null {
      const candidates = moveBackCandidateBranchNamesRef.current;
      if (candidates.size === 0) return null;
      const projection = selectionProjectionRef.current;
      const cameraScale = getCameraScale(zoomRef.current, projection.isHorizontal);
      for (const target of branchHeadTargetsRef.current) {
        if (!candidates.has(target.branchName)) continue;
        const centerX =
          panRef.current.x +
          projection.graphOffsetX +
          (projection.graphContentTranslateX + target.point.x) * cameraScale.x;
        if (Math.abs(screenX - centerX) <= 56) return target.branchName;
      }
      return null;
    }

    const onMouseMove = (e: MouseEvent) => {
      const drag = nodeDragRef.current;
      if (!drag || drag.isDone) return;
      const dx = e.clientX - drag.startClientX;
      const dy = e.clientY - drag.startClientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const wasDragging = drag.isDragging;
      const isDragging = wasDragging || dist > 6;
      nodeDragRef.current = { ...drag, currentClientX: e.clientX, currentClientY: e.clientY, isDragging };
      if (!isDragging) return;

      // Move the actual SVG element imperatively — world units = screen delta / zoom
      if (drag.nodeElement) {
        const worldDx = dx / zoomRef.current;
        const worldDy = dy / zoomRef.current;
        drag.nodeElement.setAttribute('transform', `translate(${worldDx} ${worldDy})`);
      }

      const cursorContainerX = e.clientX - drag.containerLeft;
      const nextMoveBack = findMoveBackBranch(cursorContainerX);
      const actionText = nextMoveBack ? `→ ${nextMoveBack}` : '→ New branch';

      if (!wasDragging) {
        // First drag frame: hide the external label and inject action text inside the moved <g>
        if (drag.nodeLabelElement) {
          drag.nodeLabelElement.style.opacity = '0';
          // Inject a cloned <text> into the moved <g> with action text + same styling
          if (drag.nodeElement) {
            const injected = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            injected.setAttribute('x', drag.nodeLabelElement.getAttribute('x') ?? '0');
            injected.setAttribute('y', drag.nodeLabelElement.getAttribute('y') ?? '0');
            injected.setAttribute('text-anchor', drag.nodeLabelElement.getAttribute('text-anchor') ?? 'start');
            injected.setAttribute('fill', drag.nodeLabelElement.getAttribute('fill') ?? '#47AFEB');
            injected.setAttribute('font-size', drag.nodeLabelElement.getAttribute('font-size') ?? '');
            injected.setAttribute('font-weight', drag.nodeLabelElement.getAttribute('font-weight') ?? '');
            injected.setAttribute('font-family', drag.nodeLabelElement.getAttribute('font-family') ?? '');
            injected.setAttribute('text-rendering', 'geometricPrecision');
            injected.setAttribute('pointer-events', 'none');
            injected.setAttribute('data-action-text', 'true');
            injected.textContent = actionText;
            drag.nodeElement.appendChild(injected);
          }
        }
      } else {
        // Subsequent frames: only update the text if it changed
        const injected = drag.nodeElement?.querySelector<SVGTextElement>('[data-action-text]');
        if (injected && injected.textContent !== actionText) injected.textContent = actionText;
      }

      // Only trigger a React re-render when drop-zone highlights need updating
      setNodeDragDisplay((prev) => {
        if (prev && prev.hoveringMoveBackBranch === nextMoveBack) return prev;
        return { cursorX: cursorContainerX, cursorY: e.clientY - drag.containerTop, nodeId: drag.nodeId, hoveringMoveBackBranch: nextMoveBack };
      });
    };

    const resetNodeDrag = (drag: NodeDragState) => {
      // Reset the SVG element's transform so it snaps back to its original position
      drag.nodeElement?.removeAttribute('transform');
      // Remove the injected action text and restore the original label
      drag.nodeElement?.querySelector('[data-action-text]')?.remove();
      if (drag.nodeLabelElement) drag.nodeLabelElement.style.removeProperty('opacity');
      nodeDragRef.current = null;
      setNodeDragDisplay(null);
    };

    const onMouseUp = (e: MouseEvent) => {
      const drag = nodeDragRef.current;
      if (!drag || drag.isDone) return;
      const wasDragging = drag.isDragging;
      resetNodeDrag(drag);
      if (!wasDragging) return;

      const container = scrollRef.current;
      if (!container) return;
      const bounds = container.getBoundingClientRect();
      const cursorContainerX = e.clientX - bounds.left;

      const moveBackBranch = findMoveBackBranch(cursorContainerX);
      if (moveBackBranch && onMoveNodeBackToBranchRef.current) {
        void onMoveNodeBackToBranchRef.current(moveBackBranch);
        return;
      }

      if (onCreateBranchFromNodeRef.current) {
        setNewBranchDialogForNode({ nodeId: drag.nodeId, stashIndex: drag.stashIndex });
        setNewBranchNameForNode('');
        setTimeout(() => newBranchInputForNodeRef.current?.focus(), 60);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const drag = nodeDragRef.current;
      if (e.key === 'Escape' && drag) {
        resetNodeDrag(drag);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('keydown', onKeyDown, { capture: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('keydown', onKeyDown, { capture: true });
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const isEditable = (el: EventTarget | null) => {
      if (!(el instanceof Element)) return false;
      if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) return true;
      return (el as HTMLElement).isContentEditable;
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (isEditable(e.target)) return;

      // Zoom shortcuts disabled.

      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (
          deletableSelectionCountRef.current > 0 &&
          !deleteConfirmOpenRef.current &&
          !deleteInProgressRef.current
        ) {
          e.preventDefault();
          setDeleteConfirmOpen(true);
        }
        return;
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

  // Hard guard: when interacting with overlay UI, never allow map gesture handlers
  // (including wheel inertia or drag-pan) to keep moving the canvas.
  useEffect(() => {
    const stopActivePan = () => {
      if (!isPanningRef.current) return;
      isPanningRef.current = false;
      setIsPanning(false);
      const settledPan = clampPan(panRef.current, zoomRef.current, 'hard');
      applyCamera(settledPan, zoomRef.current);
      syncUiState(true);
    };

    const shouldBlockMapGestures = (target: EventTarget | null): boolean => {
      if (!(target instanceof Element)) return false;
      return !!target.closest('[data-map-ui]');
    };

    const onPointerLikeDownCapture = (event: MouseEvent | PointerEvent) => {
      if (!shouldBlockMapGestures(event.target)) return;
      stopWheelInertia();
      stopPanSmoothing();
      stopActivePan();
      event.stopPropagation();
    };

    const onWheelCapture = (event: WheelEvent) => {
      if (!shouldBlockMapGestures(event.target)) return;
      stopWheelInertia();
      stopPanSmoothing();
      stopActivePan();
      event.preventDefault();
      event.stopPropagation();
    };

    window.addEventListener('mousedown', onPointerLikeDownCapture, true);
    window.addEventListener('pointerdown', onPointerLikeDownCapture, true);
    window.addEventListener('wheel', onWheelCapture, { capture: true, passive: false });
    return () => {
      window.removeEventListener('mousedown', onPointerLikeDownCapture, true);
      window.removeEventListener('pointerdown', onPointerLikeDownCapture, true);
      window.removeEventListener('wheel', onWheelCapture, true);
    };
  }, []);

  useEffect(() => {
    const hadCompletedReveal = hasInitialRevealDone;
    hasAutoCenteredRef.current = false;
    autoCenterSignatureRef.current = null;
    // Preserve manual camera intent across orientation switches to prevent
    // jumpy recenter/layout shifts after the user has already panned.
    // Orientation switches should not replay the intro loader/fog.
    // Keep reveal state "done" once content has been shown at least once.
    if (!hadCompletedReveal) {
      clearTimelineRevealTimer();
      setTimelineRevealPhase('hidden');
      setTimelineRevealReady(false);
      setHasInitialRevealDone(false);
      return;
    }
    clearTimelineRevealTimer();
    setTimelineRevealPhase('done');
    setTimelineRevealReady(true);
    setHasInitialRevealDone(true);
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
      const nextRect = normalizeMarqueeRect(drag);
      setMarqueeRect(nextRect);
      if (drag.moved && nextRect.width > 1 && nextRect.height > 1) {
        applyMarqueeSelection(nextRect, drag.additive);
      } else if (!drag.additive) {
        setSelectedBranchNames([]);
        setSelectedCommitShas([]);
        setMergeTargetCommitSha(null);
      }
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
        applyMarqueeSelection(nextRect, drag.additive);
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
    const topElementAtPointer = document.elementFromPoint(e.clientX, e.clientY);
    if (topElementAtPointer?.closest('[data-map-ui]')) {
      return;
    }
    const target = e.target as Element | null;
    // Never start canvas gestures from UI controls.
    if (target?.closest('button, input, textarea, select, [role="button"], a')) {
      return;
    }
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
      clearTransientHoverState();
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

  const openGitActionMenu = () => setGitActionMenuOpen(true);
  const closeGitActionMenu = () => setGitActionMenuOpen(false);
  const toggleGitActionMenu = () => setGitActionMenuOpen((open) => !open);
  const closeWorktreeMenu = () => setWorktreeMenuOpen(false);
  const toggleWorktreeMenu = () => setWorktreeMenuOpen((open) => !open);

  // Close error panel on outside click
  useEffect(() => {
    if (!errorPanelOpen) return;
    const handler = (e: MouseEvent) => {
      if (!errorPanelRef.current?.contains(e.target as Node)) setErrorPanelOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [errorPanelOpen]);

  // Close git action menu on outside click
  useEffect(() => {
    if (!gitActionMenuOpen) return;
    const handler = (e: MouseEvent) => {
      if (!gitActionMenuRef.current?.contains(e.target as Node)) closeGitActionMenu();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [gitActionMenuOpen]);

  // Close worktree menu on outside click
  useEffect(() => {
    if (!worktreeMenuOpen) return;
    const handler = (e: MouseEvent) => {
      if (!worktreeMenuRef.current?.contains(e.target as Node)) closeWorktreeMenu();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [worktreeMenuOpen]);

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
        names.add(child.name);
      }
    }
    return { names };
  })();
  const freshCopyBranchNames = sameHeadSiblingMeta.names;

  function renderParentBranchName(branch: Branch): string {
    return (!branch.parentBranch || branch.parentBranch === branch.name)
      ? defaultBranch
      : branch.parentBranch;
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

  // ── Animation delays ───────────────────────────────────────────────────────
  const MAIN_DRAW_MS = 1400;
  const STAGGER_MS = 70;
  const INFO_OFFSET = 600; // ms after arc starts drawing before info fades in

  const branchDelayMs = new Map<string, number>(
    [...activeBranches]
      .sort((a, b) => new Date(b.lastCommitDate).getTime() - new Date(a.lastCommitDate).getTime())
      .map((b, i) => [b.name, MAIN_DRAW_MS + i * STAGGER_MS] as [string, number])
  );

  const reserveMergeRows = false;

  const leftPad = LEFT_PAD;
  const rightPad = RIGHT_PAD;
  const cornerR = CORNER_R;

  // ── Build a date → X mapping ─────────────────────────────────────────────
  // Simple and deterministic timeline mapping:
  // - `regular`: true time-proportional spacing.
  // - `bounded`: time-aware spacing with per-gap clamping.
  // Both modes preserve chronology and use the same anchor timestamps.
  const IDEAL_EVENT_GAP = Math.max(8, 40 * TIME_SCALE_DEFAULT);
  const GRID_EVENT_GAP = gridEventGap;

  const sortedNodes = [...mergeNodes].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const mergeHeadTargetKey = (targetBranch: string, mergedHeadSha: string): string =>
    `${targetBranch}::${mergedHeadSha}`;
  const mergeNodeByMergedHeadSha = new Map<string, MergeNode>();
  const mergeNodeByMergedHeadAndTarget = new Map<string, MergeNode>();
  for (const node of sortedNodes) {
    const mergedParents = node.parentShas?.slice(1) ?? [];
    const targetBranch = node.targetBranch ?? defaultBranch;
    for (const parentSha of mergedParents) {
      if (parentSha && !mergeNodeByMergedHeadSha.has(parentSha)) {
        mergeNodeByMergedHeadSha.set(parentSha, node);
      }
      const targetedKey = mergeHeadTargetKey(targetBranch, parentSha);
      if (parentSha && !mergeNodeByMergedHeadAndTarget.has(targetedKey)) {
        mergeNodeByMergedHeadAndTarget.set(targetedKey, node);
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
  const directCommitsForLayout = directCommits;
  const sortedDirectCommits = orderByLineage(directCommitsForLayout);
  const defaultBranchFromData = branches.find((branch) => branch.name === defaultBranch);
  const defaultBranchRenderBranch: Branch = defaultBranchFromData ?? {
    name: defaultBranch,
    commitsAhead: Math.max(0, sortedDirectCommits.length - 1),
    commitsBehind: 0,
    lastCommitDate: sortedDirectCommits[sortedDirectCommits.length - 1]?.date ?? new Date().toISOString(),
    lastCommitAuthor: sortedDirectCommits[sortedDirectCommits.length - 1]?.author ?? 'unknown',
    status: 'fresh',
    remoteSyncStatus: 'on-github',
    unpushedCommits: 0,
    headSha: sortedDirectCommits[sortedDirectCommits.length - 1]?.fullSha ?? 'WORKING_TREE',
  };
  const renderBranches = [defaultBranchRenderBranch, ...activeBranches];
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
        // Merge-in commits join the clump with newer (toward-HEAD) work: split
        // before the merge so prior history stays separate, but do not split
        // after the merge (merge + newer commits share one clump).
        if (index < sortedDirectCommits.length - 1) {
          if (index > 0) {
            const splitBefore = index - 1;
            splits.add(splitBefore);
            forcedMainSplitIndices.add(splitBefore);
          }
        }
        // When merge is HEAD, omit split-before so it rolls into the preceding clump.
      }

      if (protectedMainForkShas.has(commit.fullSha) && index < sortedDirectCommits.length - 1) {
        splits.add(index);
      }

      // Keep the latest/checked-out main commit visible instead of hidden in a clump.
      if (forcedVisibleMainShas.has(commit.fullSha) && index > 0) {
        const mergeAtHead =
          mainMergeCommitShas.has(commit.fullSha) && index === sortedDirectCommits.length - 1;
        if (!mergeAtHead) {
          const splitBefore = index - 1;
          splits.add(splitBefore);
          forcedMainSplitIndices.add(splitBefore);
        }
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

  const hasActiveClumpTransition = Array.from(expandedClumps.values()).some(
    (state) => state.phase === 'expanding' || state.phase === 'collapsing'
  );
  const nowMsForHorizontalRowPin = Date.now();
  const hasPinnedHorizontalRowOffset = Array.from(expandedClumps.values()).some(
    (state) =>
      (((state.isExpanded ?? false) && state.phase !== 'collapsed') ||
        ((state.rowReleaseAt ?? 0) > nowMsForHorizontalRowPin))
  );

  // ── Grid: build clumps first, derive rows from them ────────────────
  type GridClump = {
    lane: string;
    shas: string[];
    earliestTime: number;
    latestTime: number;
    rowIndex: number;
    key: string;
    slotIndices?: number[];
  };
  const gridClumps: GridClump[] = [];
  const gridRowBySha = new Map<string, number>();
  const gridRowByBranchSha = new Map<string, number>();
  const gridRowByBranchSlot = new Map<string, number>();
  let claimedGridRowTimes: number[] = [];

  function branchShaRowKey(branchName: string, sha: string): string {
    return `${branchName}::${sha}`;
  }
  function branchSlotRowKey(branchName: string, slotIndex: number): string {
    return `${branchName}::slot:${slotIndex}`;
  }
  {
    const mainForkIdx = new Set<number>();
    const mainPreviewCommits = sortedDirectCommits.map((commit) => ({
      ...commit,
      kind:
        commit.kind === 'stash'
          ? 'stash'
          : commit.kind === 'uncommitted'
            ? 'uncommitted'
            : 'commit',
    } as BranchCommitPreview));
    const mainChildBranches = childBranchesByParent.get(defaultBranch) ?? [];
    if (mainChildBranches.length > 0 && mainPreviewCommits.length > 0) {
      const mainBranchTimes = mainPreviewCommits.map((commit) => new Date(commit.date).getTime());
      mainChildBranches.forEach((child) => {
        const idx = branchPreviewIndexForChildFork(mainPreviewCommits, mainBranchTimes, child);
        if (idx >= 0) mainForkIdx.add(idx);
      });
    }

    {
      let buf: string[] = [];
      let slotBuf: number[] = [];
      let tFirst = 0;
      let tLast = 0;
      let startIdx = 0;
      const mainUncommittedSplitIndices = splitIndicesAroundUncommitted(
        sortedDirectCommits,
        (commit) => isSyntheticLocalCommit(commit)
      );
      const mainAllocatorSplitIndices = new Set<number>([
        ...mainForkIdx,
        ...mainCommitSplitIndices,
        ...mainUncommittedSplitIndices,
      ]);
      const mainAllocatorPreserveSplitIndices = new Set<number>([
        ...mainForkIdx,
        ...forcedMainSplitIndices,
        ...mainUncommittedSplitIndices,
      ]);
      const effectiveMainForkIdx = pruneForkSplitIndices(
        sortedDirectCommits.length,
        mainAllocatorSplitIndices,
        mainAllocatorPreserveSplitIndices,
      );
      const flush = (endIdx: number) => {
        if (buf.length === 0) return;
        gridClumps.push({
          lane: 'main',
          shas: [...buf],
          earliestTime: tFirst,
          latestTime: tLast,
          rowIndex: -1,
          key: `commit-clump-${defaultBranch}-${startIdx}-${endIdx}`,
          slotIndices: [...slotBuf],
        });
        buf = [];
        slotBuf = [];
      };
      sortedDirectCommits.forEach((c, i) => {
        const commitTime = new Date(c.date).getTime();
        if (buf.length === 0) startIdx = i;
        if (buf.length === 0) tFirst = commitTime;
        tLast = commitTime;
        buf.push(c.fullSha);
        slotBuf.push(i);
        if (effectiveMainForkIdx.has(i)) flush(i);
      });
      flush(sortedDirectCommits.length - 1);
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
          latestTime: t,
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
      const branchUncommittedSplitIndices = splitIndicesAroundUncommitted(
        previews,
        (commit) => isSyntheticLocalCommit(commit)
      );
      const branchAllocatorSplitIndices = new Set<number>([
        ...forkIdx,
        ...branchUncommittedSplitIndices,
      ]);
      const branchAllocatorPreserveSplitIndices = new Set<number>([
        ...forkIdx,
        ...branchUncommittedSplitIndices,
      ]);
      const effectiveForkIdx = pruneForkSplitIndices(
        previews.length,
        branchAllocatorSplitIndices,
        branchAllocatorPreserveSplitIndices,
      );
      let buf: string[] = [];
      let slotBuf: number[] = [];
      let tFirst = 0;
      let tLast = 0;
      let startIdx = 0;
      const flushBranch = (endIdx: number) => {
        if (buf.length === 0) return;
        gridClumps.push({
          lane: branch.name,
          shas: [...buf],
          earliestTime: tFirst,
          latestTime: tLast,
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
        tLast = commitTime;
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
        gridClumps.push({
          lane: 'main-merge',
          shas: [node.fullSha],
          earliestTime: t,
          latestTime: t,
          rowIndex: -1,
          key: `merge-row-${node.fullSha}`,
        });
      });
    }

    gridClumps.sort((a, b) => {
      const latestDiff = a.latestTime - b.latestTime;
      if (latestDiff !== 0) return latestDiff;
      const earliestDiff = a.earliestTime - b.earliestTime;
      if (earliestDiff !== 0) return earliestDiff;
      return a.key.localeCompare(b.key);
    });

    const rowByEntity = new Map<string, number>();
    const rowTimeByIndex = new Map<number, number>();
    const rowLanesByIndex = new Map<number, Set<string>>();
    const rowExclusiveByIndex = new Map<number, boolean>();
    let nextRowIndex = 0;
    const rowShareTolerance = GRID_EVENT_GAP * GRID_ROW_SHARE_TIME_TOLERANCE_FACTOR;
    const registerRowUsage = (
      row: number,
      lane: string,
      options: { exclusive: boolean; rowTime: number },
    ) => {
      const existingLanes = rowLanesByIndex.get(row);
      if (existingLanes) {
        existingLanes.add(lane);
      } else {
        rowLanesByIndex.set(row, new Set([lane]));
      }
      const existingTime = rowTimeByIndex.get(row);
      rowTimeByIndex.set(
        row,
        existingTime == null || !Number.isFinite(existingTime)
          ? options.rowTime
          : Math.max(existingTime, options.rowTime),
      );
      if (options.exclusive) {
        rowExclusiveByIndex.set(row, true);
      } else if (!rowExclusiveByIndex.has(row)) {
        rowExclusiveByIndex.set(row, false);
      }
    };
    const claimRow = (
      entityKey: string,
      rowTime: number,
      options: { lane: string; allowShare: boolean; exclusive: boolean },
    ): number => {
      const existing = rowByEntity.get(entityKey);
      if (existing != null) {
        registerRowUsage(existing, options.lane, { exclusive: options.exclusive, rowTime });
        return existing;
      }

      let claimed: number | null = null;
      if (options.allowShare && Number.isFinite(rowShareTolerance) && rowShareTolerance > 0) {
        let bestCandidate: { row: number; timeDelta: number; laneCount: number } | null = null;
        for (let row = 0; row < nextRowIndex; row += 1) {
          if (rowExclusiveByIndex.get(row)) continue;
          const lanes = rowLanesByIndex.get(row);
          if (lanes?.has(options.lane)) continue;
          const existingTime = rowTimeByIndex.get(row);
          if (existingTime == null || !Number.isFinite(existingTime)) continue;
          const timeDelta = Math.abs(existingTime - rowTime);
          if (timeDelta > rowShareTolerance) continue;
          const laneCount = lanes?.size ?? 0;
          if (
            bestCandidate == null ||
            timeDelta < bestCandidate.timeDelta ||
            (timeDelta === bestCandidate.timeDelta && laneCount < bestCandidate.laneCount)
          ) {
            bestCandidate = { row, timeDelta, laneCount };
          }
        }
        if (bestCandidate) {
          claimed = bestCandidate.row;
        }
      }

      if (claimed == null) {
        claimed = nextRowIndex;
        nextRowIndex += 1;
      }
      rowByEntity.set(entityKey, claimed);
      registerRowUsage(claimed, options.lane, { exclusive: options.exclusive, rowTime });
      return claimed;
    };

    const nowMs = Date.now();
    for (const clump of gridClumps) {
      const expandedState = expandedClumps.get(clump.key);
      const shouldReserveExpandedRows =
        ((expandedState?.isExpanded ?? false) &&
          expandedState?.phase !== 'collapsed' &&
          expandedState?.phase !== 'collapsing') ||
        ((expandedState?.rowReleaseAt ?? 0) > nowMs);
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
          const rowTime = clump.latestTime + i;
          const fallbackEntityKey = `clump-member:${clump.key}:${i}`;
          const entityKey = (() => {
            if (clump.lane === 'main' || clump.lane === 'main-merge') {
              return sha ? `main-sha:${sha}` : fallbackEntityKey;
            }
            if (sha) return `branch-sha:${clump.lane}:${sha}`;
            if (slotIndex != null) return `branch-slot:${clump.lane}:${slotIndex}`;
            return fallbackEntityKey;
          })();
          const claimedRow = claimRow(entityKey, rowTime, {
            lane: clump.lane,
            allowShare: false,
            exclusive: true,
          });
          if (firstRow == null) firstRow = claimedRow;
          if (sha) assignShaRow(sha, claimedRow);
          if (slotIndex != null) assignSlotRow(slotIndex, claimedRow);
        }
        clump.rowIndex = firstRow ?? claimRow(`clump:${clump.key}`, clump.latestTime, {
          lane: clump.lane,
          allowShare: false,
          exclusive: true,
        });
      } else {
        // For collapsed branch clumps, prefer the older edge of the clump window so
        // sibling branches that fork around the same point can share rows even when
        // their head commit times drift apart.
        const shareRowTime =
          clump.lane === 'main' || clump.lane === 'main-merge'
            ? clump.latestTime
            : clump.earliestTime;
        const clumpRow = claimRow(`clump:${clump.key}`, shareRowTime, {
          lane: clump.lane,
          allowShare: true,
          exclusive: false,
        });
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
    const shiftBranchRowsToFloor = (
      branchName: string,
      floorRowExclusive: number,
      options?: { exactOffset?: boolean; avoidDisplacingOthers?: boolean },
    ): boolean => {
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

      const exactOffset = options?.exactOffset ?? false;
      const avoidDisplacingOthers = options?.avoidDisplacingOthers ?? false;
      let delta = exactOffset
        ? floorRow - minRow
        : Math.max(0, floorRow - minRow);
      if (delta < -minRow) delta = -minRow;
      // If already at-or-above the floor, do not run collision displacement.
      // Allow legitimate shared rows for sibling branches with matching timing.
      if (delta === 0) return false;
      const currentRows = Array.from(new Set(allRows)).sort((a, b) => a - b);
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
      if (!avoidDisplacingOthers) {
        for (let guard = 0; guard < 2000; guard += 1) {
          const occupied = occupiedRowsByOthers();
          const collisions = currentRows
            .map((row) => row + delta)
            .filter((row) => occupied.has(row));
          if (collisions.length === 0) break;
          const firstCollision = Math.min(...collisions);
          shiftOtherRowsAtOrAbove(firstCollision);
        }
      }
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
      if (!parentName || parentName === branch.name) return null;
      if (parentName === defaultBranch) {
        // Lightweight anchor for synthetic/main-parent branches: pin to the fork SHA row
        // when available, without scanning/splitting main previews.
        const forkSha = branch.divergedFromSha ?? branch.createdFromSha;
        if (!forkSha) return null;
        const row = gridRowBySha.get(forkSha);
        return row == null || !Number.isFinite(row) ? null : row;
      }
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

    const syntheticBranchNames = new Set(
      activeBranches
        .filter((branch) => renderableBranchPreviews(branch).length === 0)
        .map((branch) => branch.name),
    );

    // Iterate to settle cascaded parent->child constraints across nested branches.
    for (let pass = 0; pass < activeBranches.length; pass += 1) {
      let changed = false;
      const parentAnchorRowCache = new Map<string, number | null>();
      const cachedParentAnchorRowForBranch = (branch: Branch): number | null => {
        const cached = parentAnchorRowCache.get(branch.name);
        if (cached !== undefined) return cached;
        const computed = parentAnchorRowForBranch(branch);
        parentAnchorRowCache.set(branch.name, computed);
        return computed;
      };
      const branchShiftOrder = [...activeBranches].sort((a, b) => {
        const depthDiff = branchDepth(a.name) - branchDepth(b.name);
        if (depthDiff !== 0) return depthDiff;
        const floorDiff =
          (cachedParentAnchorRowForBranch(a) ?? Number.NEGATIVE_INFINITY) -
          (cachedParentAnchorRowForBranch(b) ?? Number.NEGATIVE_INFINITY);
        if (floorDiff !== 0) return floorDiff;
        const forkDiff = branchForkMs(a) - branchForkMs(b);
        if (forkDiff !== 0) return forkDiff;
        const createdDiff = branchCreatedMs(a) - branchCreatedMs(b);
        if (createdDiff !== 0) return createdDiff;
        return a.name.localeCompare(b.name);
      });
      for (const branch of branchShiftOrder) {
        const isSynthetic = syntheticBranchNames.has(branch.name);
        const isMainParent = renderParentBranchName(branch) === defaultBranch;
        const parentAnchorRow = parentAnchorRowForBranch(branch);
        if (parentAnchorRow == null) continue;
        changed = shiftBranchRowsToFloor(branch.name, parentAnchorRow, {
          // Empty/synthetic branches (no concrete commits) should sit at a stable
          // one-row offset from the parent anchor.
          // Keep main-parent synthetic branches on a soft floor so siblings can
          // still share the same collapsed row when timing is close.
          exactOffset:
            syntheticBranchNames.has(branch.name) &&
            renderParentBranchName(branch) !== defaultBranch,
          // For synthetic branches off main, enforce parent+1 floor without
          // displacing unrelated rows; this preserves shared-row collapsing.
          avoidDisplacingOthers: isSynthetic && isMainParent,
        }) || changed;
      }
      if (!changed) break;
    }

    // Densify row indices to only rows that actually back visible commit markers.
    // This prevents "phantom" timeline rows reserved by transient/internal clumps
    // from creating blank bands in the rendered map.
    const usedRows = new Set<number>();
    const includeRow = (row: number | undefined | null) => {
      if (row == null || !Number.isFinite(row)) return;
      usedRows.add(row);
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

    const nowMsForUsedRows = Date.now();
    gridClumps.forEach((clump) => {
      const expandedState = expandedClumps.get(clump.key);
      const shouldReserveExpandedRows =
        ((expandedState?.isExpanded ?? false) &&
          expandedState?.phase !== 'collapsed' &&
          expandedState?.phase !== 'collapsing') ||
        ((expandedState?.rowReleaseAt ?? 0) > nowMsForUsedRows);
      const memberCount = Math.max(clump.shas.length, clump.slotIndices?.length ?? 0);

      if (shouldReserveExpandedRows && memberCount > 1) {
        let includedAnyMember = false;
        for (let memberIndex = 0; memberIndex < memberCount; memberIndex += 1) {
          const memberRow = rowForClumpMember(clump, memberIndex);
          if (memberRow == null || !Number.isFinite(memberRow)) continue;
          includeRow(memberRow);
          includedAnyMember = true;
        }
        if (!includedAnyMember) includeRow(clump.rowIndex);
        return;
      }
      includeRow(clump.rowIndex);
    });

    if (hasActiveClumpTransition) {
      // Keep row indices stable while clumps are mid-transition so connected
      // branch paths don't appear to "recalculate" against a shifting grid.
      claimedGridRowTimes = rowTimes;
    } else if (usedRows.size === 0) {
      claimedGridRowTimes = rowTimes;
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
    }
  }

  const gridRowTimes = (() => {
    return claimedGridRowTimes;
  })();

  const currentMaxGridRow = Math.max(0, gridRowTimes.length - 1);
  if (
    !isHorizontal ||
    !hasPinnedHorizontalRowOffset ||
    stableHorizontalMaxRowRef.current == null
  ) {
    stableHorizontalMaxRowRef.current = currentMaxGridRow;
  }
  const pinnedHorizontalMaxRow = stableHorizontalMaxRowRef.current ?? currentMaxGridRow;
  const horizontalRowShiftX = (isHorizontal && hasPinnedHorizontalRowOffset)
    ? (pinnedHorizontalMaxRow - currentMaxGridRow) * GRID_EVENT_GAP
    : 0;
  const shiftedLeftPad = leftPad + horizontalRowShiftX;
  const gridRowToX = (row: number): number => shiftedLeftPad + row * GRID_EVENT_GAP;

  const gridEventPoints = gridRowTimes.map((time, index) => ({ t: time, x: gridRowToX(index) }));


  const allAnchorTimes = gridRowTimes;

  const anchorXs: number[] = [];
  if (gridEventPoints.length > 0) {
    anchorXs.push(...gridEventPoints.map((point) => point.x));
  } else if (allAnchorTimes.length > 0) {
    anchorXs.push(shiftedLeftPad);
    for (let i = 1; i < allAnchorTimes.length; i += 1) {
      anchorXs.push(anchorXs[i - 1] + IDEAL_EVENT_GAP);
    }
  }

  function xForTimestamp(t: number): number {
    if (gridEventPoints.length > 0) {
      if (!Number.isFinite(t)) return gridEventPoints[0]?.x ?? shiftedLeftPad;
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
      return bestPast?.x ?? bestFuture?.x ?? (gridEventPoints[0]?.x ?? shiftedLeftPad);
    }
    if (!Number.isFinite(t) || allAnchorTimes.length === 0) return shiftedLeftPad;
    let lo = 0;
    let hi = allAnchorTimes.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (allAnchorTimes[mid] < t) lo = mid + 1;
      else hi = mid;
    }
    if (lo <= 0) return shiftedLeftPad - IDEAL_EVENT_GAP * 2;
    if (lo >= allAnchorTimes.length) {
      const endX = anchorXs[anchorXs.length - 1] ?? leftPad;
      return endX + IDEAL_EVENT_GAP * 2;
    }
    return anchorXs[lo] ?? shiftedLeftPad + lo * IDEAL_EVENT_GAP;
  }

  function gridXForSha(sha: string): number | undefined {
    if (!gridRowBySha) return undefined;
    const row = gridRowBySha.get(sha);
    if (row == null) return undefined;
    return gridRowToX(row);
  }

  function gridXForBranchSha(branchName: string, sha: string): number | undefined {
    const branchRow = gridRowByBranchSha.get(branchShaRowKey(branchName, sha));
    if (branchRow != null) return gridRowToX(branchRow);
    return gridXForSha(sha);
  }

  function gridXForBranchSlot(branchName: string, slotIndex: number): number | undefined {
    const branchRow = gridRowByBranchSlot.get(branchSlotRowKey(branchName, slotIndex));
    if (branchRow == null) return undefined;
    return gridRowToX(branchRow);
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
    const b = branchByName.get(branchName);
    if (!b) return null;

    const renderable = renderableBranchPreviews(b);
    const exact = renderable.find((commit) => commit.fullSha === sha || commit.sha === sha);
    if (exact) return gridXForBranchSha(branchName, exact.fullSha) ?? timeToX(exact.date);
    const prefix = renderable.find(
      (commit) =>
        commit.fullSha.startsWith(sha) ||
        sha.startsWith(commit.fullSha) ||
        commit.sha.startsWith(sha) ||
        sha.startsWith(commit.sha)
    );
    if (prefix) return gridXForBranchSha(branchName, prefix.fullSha) ?? timeToX(prefix.date);

    // If the sha wasn't found in the explicitly rendered commits of this branch,
    // we assume this branch is either a fresh copy (no unique commits) or the
    // fork happened before its unique history. If it's an empty placeholder,
    // Force it to anchor directly to its visual box (slot 0).
    const isPlaceholder = renderable.length === 0;
    if (isPlaceholder) {
      const slotX = gridXForBranchSlot(branchName, 0);
      if (slotX != null) return slotX;
    }

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
    targetIndex: number,
    preserveSplitIndices?: Set<number>,
  ): { start: number; end: number } | null {
    if (entryCount <= 0 || targetIndex < 0 || targetIndex >= entryCount) return null;
    const effectiveForkIndices = Array.from(pruneForkSplitIndices(entryCount, forkIndices, preserveSplitIndices))
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

  function collapsedParentClumpAnchorX(branch: Branch, parentName: string): number | null {
    if (!parentName || parentName === branch.name) return null;

    const parentPreviews: BranchCommitPreview[] = parentName === defaultBranch
      ? sortedDirectCommits.map((commit) => ({
        ...commit,
        kind:
        commit.kind === 'stash'
          ? 'stash'
          : commit.kind === 'uncommitted'
            ? 'uncommitted'
            : 'commit',
      } as BranchCommitPreview))
      : (() => {
        const parentBranch = branchByName.get(parentName);
        if (!parentBranch) return [];
        return renderableBranchPreviews(parentBranch);
      })();
    if (parentPreviews.length <= 1) return null;

    const parentTimes = parentPreviews.map((commit) => new Date(commit.date).getTime());
    const forkIndex = branchPreviewIndexForChildFork(parentPreviews, parentTimes, branch);
    if (forkIndex < 0) return null;

    const parentForkIndices = new Set<number>();
    (childBranchesByParent.get(parentName) ?? []).forEach((child) => {
      const idx = branchPreviewIndexForChildFork(parentPreviews, parentTimes, child);
      if (idx >= 0) parentForkIndices.add(idx);
    });

    // For the default branch, include the same additional split indices that
    // the grid allocator uses (merge commits, parent-sha breaks, forced-visible
    // commits, uncommitted markers). Without these, pruneForkSplitIndices may
    // compute different segment boundaries than the actual rendered clumps,
    // causing fork points to be incorrectly lifted to a later clump anchor.
    const combinedSplitIndices = parentName === defaultBranch
      ? new Set<number>([...parentForkIndices, ...mainCommitSplitIndices])
      : parentForkIndices;
    const preserveSplitIndices =
      parentName === defaultBranch
        ? new Set<number>([...parentForkIndices, ...forcedMainSplitIndices])
        : parentForkIndices;

    const parentSegment = findSegmentForIndex(parentPreviews.length, combinedSplitIndices, forkIndex, preserveSplitIndices);
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
      expandedState?.phase !== 'collapsed';
    if (parentClumpIsExpanded) return null;

    const anchorSlotIndex = segmentEnd;
    const anchorPreview = parentPreviews[anchorSlotIndex];
    const anchorX = parentName === defaultBranch
      ? (
        anchorPreview?.fullSha
          ? (
            directXByFullSha.get(anchorPreview.fullSha) ??
            nodeXByFullSha.get(anchorPreview.fullSha) ??
            timeToX(anchorPreview.date)
          )
          : undefined
      )
      : (
        gridXForBranchSlot(parentName, anchorSlotIndex) ??
        (anchorPreview?.fullSha
          ? gridXForBranchSha(parentName, anchorPreview.fullSha)
          : undefined)
      );
    if (anchorX == null) return null;
    return anchorX;
  }

  function collapsedParentClumpLiftedForkX(branch: Branch, parentName: string): number | null {
    return collapsedParentClumpAnchorX(branch, parentName);
  }

  function collapsedParentClumpLiftedTipX(branch: Branch, parentName: string): number | null {
    const anchorX = collapsedParentClumpAnchorX(branch, parentName);
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

  function branchForkMs(b: Branch): number {
    const t = new Date(b.divergedFromDate ?? b.createdDate ?? b.lastCommitDate).getTime();
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
        commitXForSha(branch.divergedFromSha) ??
        commitXForSha(branch.createdFromSha);
      if (createdAnchor != null) return createdAnchor;

      const earliestPreviewDate = branchEarliestPreviewDate(branch.name);
      const snapMain =
        snapToMainCommitX(branch.divergedFromDate ?? branch.createdDate) ??
        snapToMainCommitX(earliestPreviewDate ?? branch.createdDate);
      if (snapMain != null) return snapMain;
    } else {
      const byParentSha = branchCommitXForSha(parentName, branch.divergedFromSha);
      if (byParentSha != null) return byParentSha;

      const byParentDate = snapToBranchCommitX(parentName, branch.divergedFromDate ?? branch.createdDate);
      if (byParentDate != null) return byParentDate;

      // The declared parent branch doesn't contain the fork SHA or a matching
      // date.  Before falling back to the parent's tip (which can be wildly
      // wrong for branches forked from main that git metadata erroneously
      // attributes to a sibling branch), try resolving the fork commit on main.
      const mainFallback =
        commitXForSha(branch.divergedFromSha) ??
        commitXForSha(branch.createdFromSha);
      if (mainFallback != null) return mainFallback;

      const snapMainFallback =
        snapToMainCommitX(branch.divergedFromDate ?? branch.createdDate);
      if (snapMainFallback != null) return snapMainFallback;

      const parentTiming = branchTimingWithVisited(parentName, visiting);
      return parentTiming.tipTimeX;
    }

    return timeToX(branch.divergedFromDate ?? branch.createdDate ?? branch.lastCommitDate);
  }

  function resolveMergeNodeForBranch(branch: Branch, parentName: string): MergeNode | undefined {
    const headSha = branch.headSha;
    if (!headSha) return undefined;
    const targeted = mergeNodeByMergedHeadAndTarget.get(mergeHeadTargetKey(parentName, headSha));
    if (targeted) return targeted;
    return mergeNodeByMergedHeadSha.get(headSha);
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
    const forkTimeX = branchForkTimeX(branch, parentName, visiting);
    const minTipTimeXFromCollapsedParent = collapsedParentClumpLiftedTipX(branch, parentName);
    const tipTimeX = Math.max(
      branchHeadTimeX(branch),
      forkTimeX,
      minTipTimeXFromCollapsedParent ?? Number.NEGATIVE_INFINITY,
    );
    const isFreshCopy = freshCopyBranchNames.has(branch.name);
    const isMergedBranch = branch.commitsAhead === 0 && !isFreshCopy;
    const mergeNodeForBranch = isMergedBranch
      ? resolveMergeNodeForBranch(branch, parentName)
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
    const parentName = renderParentBranchName(branch);
    const mergeNode = resolveMergeNodeForBranch(branch, parentName);
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

  // Canonical (logical) layout uses vertical time; orientation projection swaps
  // axes when needed, and mirrors horizontal time so left=past, right=future.
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

  if (
    !isHorizontal ||
    !hasPinnedHorizontalRowOffset ||
    stableHorizontalMirrorRef.current == null
  ) {
    stableHorizontalMirrorRef.current = logicalTimelineHeight;
  }
  const horizontalProjectionMirrorX = (isHorizontal && hasPinnedHorizontalRowOffset)
    ? stableHorizontalMirrorRef.current
    : logicalTimelineHeight;
  function projectPoint(x: number, y: number): { x: number; y: number } {
    return isHorizontal
      ? { x: horizontalProjectionMirrorX - y, y: x }
      : { x, y };
  }

  function pathCoord(x: number, y: number): string {
    const projected = projectPoint(x, y);
    return `${projected.x} ${projected.y}`;
  }

  function unprojectPoint(x: number, y: number): { x: number; y: number } {
    return isHorizontal
      ? { x: y, y: horizontalProjectionMirrorX - x }
      : { x, y };
  }

  // ── Branch columns self-create on first use ────────────────────────────────
  // Each branch claims its own column lazily, biased to parent+1 when parent
  // is visible. Columns are reused only when branch time-ranges are separated.
  const BRANCH_LANE_MIN_SEPARATION_X = Math.max(1, GRID_EVENT_GAP * BRANCH_COLUMN_REUSE_TIME_GAP_FACTOR);
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

  function resolveBranchStartParentName(b: Branch): string {
    const declaredParent = branchTiming(b).parentName;
    const hasConcreteParent =
      declaredParent &&
      declaredParent !== defaultBranch &&
      declaredParent !== b.name &&
      branchByName.has(declaredParent);
    if (!hasConcreteParent) return defaultBranch;

    const forkSha = b.divergedFromSha ?? b.createdFromSha;
    if (forkSha) {
      const forkOnParent = branchCommitXForSha(declaredParent, forkSha) != null;
      if (forkOnParent) return declaredParent;
      const forkOnMain = commitXForSha(forkSha) != null;
      if (forkOnMain) return defaultBranch;
    }

    const forkX = branchForkX(b);
    const forkDate = b.divergedFromDate ?? b.createdDate ?? b.lastCommitDate;
    const parentForkByDate = snapToBranchCommitX(declaredParent, forkDate);
    const mainForkByDate = snapToMainCommitX(forkDate);
    if (mainForkByDate != null && parentForkByDate == null) {
      return defaultBranch;
    }
    if (mainForkByDate != null && parentForkByDate != null) {
      const mainDelta = Math.abs(mainForkByDate - forkX);
      const parentDelta = Math.abs(parentForkByDate - forkX);
      if (mainDelta + GRID_EVENT_GAP * 0.15 < parentDelta) {
        return defaultBranch;
      }
    }
    const parentTiming = branchTimingWithVisited(declaredParent, new Set<string>());
    // If a branch forks before the declared parent even exists on-screen,
    // anchor from main to avoid detached connector starts.
    if (forkX < parentTiming.forkTimeX - GRID_EVENT_GAP * 0.5) {
      return defaultBranch;
    }

    return declaredParent;
  }

  function branchStartX(b: Branch): number {
    const startParent = resolveBranchStartParentName(b);
    if (startParent === defaultBranch) return mainX;
    const parentX = laneXByBranch.get(startParent);
    return typeof parentX === 'number' ? parentX : mainX;
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

  const logicalSvgHeight = logicalTimelineHeight;
  const contentSvgWidth = isHorizontal
    ? Math.max(logicalSvgHeight, horizontalProjectionMirrorX)
    : logicalSvgWidth;
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
  const yPadSymmetric = 0;

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
      minX: horizontalProjectionMirrorX - maxYWorldForBounds,
      maxX: horizontalProjectionMirrorX - minYWorldForBounds,
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
  // Compute which branches can accept a "move back" drop: any branch sharing the
  // current HEAD sha (other than the currently checked-out branch itself).
  {
    const currentHeadSha = checkedOutRef?.headSha ?? null;
    const currentBranch = checkedOutRef?.branchName ?? null;
    if (currentHeadSha && currentBranch && checkedOutRef?.hasUncommittedChanges) {
      const candidates = new Set<string>();
      for (const b of activeBranches) {
        if (b.name !== currentBranch && b.headSha === currentHeadSha) candidates.add(b.name);
      }
      const mainHeadSha = sortedDirectCommits[sortedDirectCommits.length - 1]?.fullSha ?? null;
      if (mainHeadSha && mainHeadSha === currentHeadSha && defaultBranch !== currentBranch) {
        candidates.add(defaultBranch);
      }
      moveBackCandidateBranchNamesRef.current = candidates;
    } else {
      moveBackCandidateBranchNamesRef.current = new Set();
    }
  }
  const projectedCommitCenterBounds = hasCommitCenterCanonicalBounds
    ? (isHorizontal
      ? {
        minX: horizontalProjectionMirrorX - commitCenterCanonicalMaxY,
        maxX: horizontalProjectionMirrorX - commitCenterCanonicalMinY,
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

  useLayoutEffect(() => {
    const previous = graphProjectionRef.current;
    const next = {
      graphOffsetX,
      graphOffsetY,
      graphContentTranslateX,
      graphContentTranslateY,
      initialized: true,
    };
    if (!previous.initialized) {
      graphProjectionRef.current = next;
      return;
    }
    if (!hasUserMovedCameraRef.current) {
      graphProjectionRef.current = next;
      return;
    }

    const deltaGraphOffsetX = next.graphOffsetX - previous.graphOffsetX;
    const deltaGraphOffsetY = next.graphOffsetY - previous.graphOffsetY;
    const cameraScale = getCameraScale(zoomRef.current, isHorizontal);
    const deltaTranslatePxX = (next.graphContentTranslateX - previous.graphContentTranslateX) * cameraScale.x;
    const deltaTranslatePxY = (next.graphContentTranslateY - previous.graphContentTranslateY) * cameraScale.y;
    const correctionX = deltaGraphOffsetX + deltaTranslatePxX;
    const correctionY = deltaGraphOffsetY + deltaTranslatePxY;
    graphProjectionRef.current = next;

    if (Math.abs(correctionX) < 0.01 && Math.abs(correctionY) < 0.01) return;
    const stabilizedPan = clampPan(
      {
        x: panRef.current.x - correctionX,
        y: panRef.current.y - correctionY,
      },
      zoomRef.current,
      'hard'
    );
    if (
      Math.abs(stabilizedPan.x - panRef.current.x) < 0.01 &&
      Math.abs(stabilizedPan.y - panRef.current.y) < 0.01
    ) return;
    applyCamera(stabilizedPan, zoomRef.current, true, true);
  }, [
    graphOffsetX,
    graphOffsetY,
    graphContentTranslateX,
    graphContentTranslateY,
    isHorizontal,
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

  function normalizeRepoPathForCompare(p: string): string {
    return p.replace(/\\/g, '/').replace(/\/+$/, '');
  }

  /** True if this worktree is not the app’s checkout (Git flag + path compare for symlink / macOS quirks). */
  function isOtherWorktree(wt: WorktreeInfo): boolean {
    if (currentRepoPath) {
      const a = normalizeRepoPathForCompare(currentRepoPath);
      const b = normalizeRepoPathForCompare(wt.path);
      if (a === b || a.toLowerCase() === b.toLowerCase()) return false;
    }
    if (wt.isCurrent) return false;
    return true;
  }

  /** Other worktree with an on-disk checkout (Git can still list deleted folders until prune). */
  function isUsableOtherWorktree(wt: WorktreeInfo): boolean {
    if (wt.pathExists === false) return false;
    return isOtherWorktree(wt);
  }

  function otherWorktreeMatchesBranchCommit(
    branchName: string,
    commitFullSha: string,
    commitSha: string,
  ): boolean {
    for (const wt of worktrees) {
      if (!isUsableOtherWorktree(wt)) continue;
      if (wt.branchName) {
        if (wt.branchName === branchName && shaMatchesGitRef(wt.headSha, commitFullSha)) return true;
        continue;
      }
      if (!shaMatchesGitRef(wt.headSha, commitFullSha) && !shaMatchesGitRef(wt.headSha, commitSha)) continue;
      if (wt.parentSha && branchPreviewContainsSha(branchName, wt.parentSha)) return true;
      if (branchPreviewContainsSha(branchName, wt.headSha)) return true;
      const branch = activeBranches.find((b) => b.name === branchName);
      if (branch && shaMatchesGitRef(branch.headSha, wt.headSha)) return true;
      if (branchName === defaultBranch) {
        if (sortedDirectCommits.some((c) => shaMatchesGitRef(c.fullSha, wt.headSha))) return true;
      }
    }
    return false;
  }

  function findOtherWorktreeForCommit(
    branchName: string,
    commitFullSha: string,
    commitSha: string,
  ): WorktreeInfo | null {
    for (const wt of worktrees) {
      if (!isUsableOtherWorktree(wt)) continue;
      if (wt.branchName) {
        if (wt.branchName === branchName && shaMatchesGitRef(wt.headSha, commitFullSha)) return wt;
        continue;
      }
      if (!shaMatchesGitRef(wt.headSha, commitFullSha) && !shaMatchesGitRef(wt.headSha, commitSha)) continue;
      if (wt.parentSha && branchPreviewContainsSha(branchName, wt.parentSha)) return wt;
      if (branchPreviewContainsSha(branchName, wt.headSha)) return wt;
      const branch = activeBranches.find((b) => b.name === branchName);
      if (branch && shaMatchesGitRef(branch.headSha, wt.headSha)) return wt;
      if (branchName === defaultBranch) {
        if (sortedDirectCommits.some((c) => shaMatchesGitRef(c.fullSha, wt.headSha))) return wt;
      }
    }
    return null;
  }

  /** Other worktree has this branch checked out (same branch ref cannot be checked out twice). */
  function findWorktreeWithBranchCheckedOut(branchName: string): WorktreeInfo | null {
    for (const wt of worktrees) {
      if (!isUsableOtherWorktree(wt)) continue;
      if (wt.branchName === branchName) return wt;
    }
    return null;
  }

  /** Match by HEAD sha only (when click handlers omit branchName). */
  function findOtherWorktreeByHeadSha(commitFullSha: string, commitShortSha: string): WorktreeInfo | null {
    for (const wt of worktrees) {
      if (!isUsableOtherWorktree(wt)) continue;
      if (shaMatchesGitRef(wt.headSha, commitFullSha) || shaMatchesGitRef(wt.headSha, commitShortSha)) {
        return wt;
      }
    }
    return null;
  }

  function mergeCheckoutAccent(
    isPrimaryCheckout: boolean,
    branchName: string,
    fullSha: string,
    shortSha: string,
  ): CheckoutAccent {
    if (isPrimaryCheckout) return 'primary';
    if (otherWorktreeMatchesBranchCommit(branchName, fullSha, shortSha)) return 'other';
    return 'none';
  }

  function worktreeShortLabel(path: string): string {
    const parts = path.replace(/\\/g, '/').split('/').filter(Boolean);
    if (parts.length <= 2) return path;
    return `…/${parts.slice(-2).join('/')}`;
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
  const checkedOutMatchesKnownBranchTip = (() => {
    const checkedOutAnchorSha = checkedOutHeadSha ?? checkedOutParentSha ?? null;
    if (!checkedOutIndicatorLocal) return false;
    const epsilon = 0.5;
    const isMainTipAnchor =
      Math.abs(checkedOutIndicatorLocal.x - mainX) <= epsilon &&
      Math.abs(checkedOutIndicatorLocal.y - mainActiveEndY) <= epsilon;
    if (isMainTipAnchor) return true;

    for (const branch of activeBranches) {
      const branchTipPoint = {
        x: laneXByBranch.get(branch.name) ?? mainX,
        y: timeCoordToY(branchTipX(branch)),
      };
      const samePoint =
        Math.abs(checkedOutIndicatorLocal.x - branchTipPoint.x) <= epsilon &&
        Math.abs(checkedOutIndicatorLocal.y - branchTipPoint.y) <= epsilon;
      if (samePoint) return true;
    }

    // Keep a SHA fallback for cases where coordinates are unavailable/ambiguous.
    if (!checkedOutAnchorSha) return false;
    return (
      (latestMainDirectCommitSha ? shaMatchesGitRef(latestMainDirectCommitSha, checkedOutAnchorSha) : false) ||
      activeBranches.some((branch) => shaMatchesGitRef(branch.headSha, checkedOutAnchorSha))
    );
  })();
  const shouldOffsetDetachedUncommittedIndicator =
    checkedOutHasUncommittedChanges &&
    checkedOutIsDetached &&
    !checkedOutMatchesKnownBranchTip;

  const checkedOutDisplayIndicatorLocal = checkedOutIndicatorLocal
    ? {
      x: (() => {
        if (!shouldOffsetDetachedUncommittedIndicator) {
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
        shouldOffsetDetachedUncommittedIndicator
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
      pendingOrientationAutoCenterRef.current = false;
      clearTimelineRevealTimer();
      setTimelineRevealPhase('hidden');
      setTimelineRevealReady(false);
      setHasInitialRevealDone(false);
      return;
    }
    const forceOrientationAutoCenter = pendingOrientationAutoCenterRef.current;
    if (!forceOrientationAutoCenter && hasUserMovedCameraRef.current) return;
    if (viewportSize.width <= 0 || viewportSize.height <= 0) return;
    if (!hasInitialRevealDone && timelineRevealPhase === 'fading') return;
    // During orientation switches and hydration there are brief windows where
    // checkout anchor resolution lags behind layout. Do not block reveal/camera
    // on that transient state; center using a fallback first, then this effect
    // will recenter again once the real checkout anchor resolves.
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
    if (forceOrientationAutoCenter) {
      if (orientationAutoCenterRafRef.current !== null) {
        cancelAnimationFrame(orientationAutoCenterRafRef.current);
      }
      orientationAutoCenterRafRef.current = requestAnimationFrame(() => {
        orientationAutoCenterRafRef.current = null;
        applyCamera(nextPan, zoomValue, true);
      });
    } else {
      applyCamera(nextPan, zoomValue, true);
    }
    hasAutoCenteredRef.current = true;
    autoCenterSignatureRef.current = signature;
    pendingOrientationAutoCenterRef.current = false;
    const revealAlreadyScheduled =
      timelineRevealStartTimeoutRef.current !== null || timelineRevealDoneTimeoutRef.current !== null;
    if (!hasInitialRevealDone && timelineRevealPhase === 'hidden' && !revealAlreadyScheduled) {
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
      for (const frameId of clumpCleanupTimersRef.current.values()) {
        window.cancelAnimationFrame(frameId);
      }
      clumpCleanupTimersRef.current.clear();
    };
  }, []);

  const worldUnitsPerScreenPx = 1 / Math.max(layerCameraScale.x, 0.0001);
  const worldPx = (px: number) => px * worldUnitsPerScreenPx;
  const NODE_FRAME_LABEL_FONT_PX = 12;
  const NODE_FRAME_LABEL_TOP_GAP_PX = 2.5;
  const NODE_FRAME_LABEL_LEFT_INSET_PX = 0;
  const NODE_FRAME_LABEL_RIGHT_INSET_PX = 0;
  const NODE_FRAME_LABEL_PAIR_GAP_PX = 2;
  const NODE_FRAME_MESSAGE_INSET_X_PX = 8;
  const NODE_FRAME_MESSAGE_INSET_TOP_PX = 6.5;
  const NODE_FRAME_MESSAGE_INSET_BOTTOM_PX = 8;
  const NODE_FRAME_PADDING_ZOOM_GAIN_MAX = 3.0;
  const NODE_FRAME_MESSAGE_FONT_PX = 12;
  const NODE_FRAME_FOOTER_META_PAIR_GAP_PX = 8;
  const NODE_FRAME_FOOTER_META_ZOOM_MIN = 3.5;
  const NODE_FRAME_MESSAGE_RENDER_OFFSET_Y_PX = 0;
  /** Branch name / sha / stack count row above each node — slightly darker than default rect stroke for legibility. */
  const NODE_FRAME_BRANCH_TITLE_COLOR = '#B3B3B3';
  /** Commit message inside the rectangle keeps the legacy neutral when idle. */
  const NODE_FRAME_INNER_TEXT_COLOR = '#7C736D';
  const NODE_FRAME_LABEL_WEIGHT = 400;
  const nodeFrameLabelFontSize = worldPx(NODE_FRAME_LABEL_FONT_PX);
  const nodeFrameLabelGap = worldPx(NODE_FRAME_LABEL_TOP_GAP_PX);
  const nodeFrameLabelInsetX = worldPx(NODE_FRAME_LABEL_LEFT_INSET_PX);
  const nodeFrameLabelRightInsetX = worldPx(NODE_FRAME_LABEL_RIGHT_INSET_PX);
  const nodeFrameLabelPairGap = worldPx(NODE_FRAME_LABEL_PAIR_GAP_PX);
  const nodeFramePaddingZoomProgress = clamp01(
    (zoom - ZOOM_DEFAULT) / Math.max(1, ZOOM_MAX - ZOOM_DEFAULT),
  );
  const nodeFramePaddingZoomFactor = 1 + nodeFramePaddingZoomProgress * NODE_FRAME_PADDING_ZOOM_GAIN_MAX;
  const nodeFrameMessageInsetX = worldPx(NODE_FRAME_MESSAGE_INSET_X_PX * nodeFramePaddingZoomFactor);
  const nodeFrameMessageInsetTop = worldPx(NODE_FRAME_MESSAGE_INSET_TOP_PX * nodeFramePaddingZoomFactor);
  const nodeFrameMessageInsetBottom = worldPx(
    NODE_FRAME_MESSAGE_INSET_BOTTOM_PX * nodeFramePaddingZoomFactor,
  );
  const nodeFrameMessageFontSize = worldPx(NODE_FRAME_MESSAGE_FONT_PX);
  const nodeFrameFooterMetaPairGap = worldPx(NODE_FRAME_FOOTER_META_PAIR_GAP_PX);
  const nodeFrameMessageRenderOffsetY = worldPx(NODE_FRAME_MESSAGE_RENDER_OFFSET_Y_PX);
  const nodeFrameCollapseIconSize = worldPx(12);
  const shortShaLabel = (sha?: string | null): string => {
    if (!sha) return '-------';
    if (sha === 'WORKING_TREE') return 'Uncommited Changes';
    if (sha.startsWith('STASH:')) {
      const n = parseInt(sha.slice('STASH:'.length), 10);
      return Number.isFinite(n) ? `Stash ${n + 1}` : 'Stash';
    }
    // Only abbreviate real commit SHAs. Keep human-readable synthetic labels intact.
    return /^[0-9a-f]{7,40}$/i.test(sha) ? sha.slice(0, 7) : sha;
  };
  const stackCountLabel = (count: number): string => `x${clumpCountLabel(count)}`;
  const trimTextToWidth = (text: string, maxWidth: number, fontSize = nodeFrameLabelFontSize): string => {
    if (maxWidth <= 0) return '';
    if (estimateSvgTextWidth(text, fontSize) <= maxWidth) return text;
    const ellipsis = '…';
    const ellipsisWidth = estimateSvgTextWidth(ellipsis, fontSize);
    if (ellipsisWidth > maxWidth) return '';
    let lo = 0;
    let hi = text.length;
    while (lo < hi) {
      const mid = Math.ceil((lo + hi) / 2);
      const candidate = `${text.slice(0, mid)}${ellipsis}`;
      if (estimateSvgTextWidth(candidate, fontSize) <= maxWidth) {
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
    includeBranchForUncommitted = branchName !== defaultBranch,
  ): string => {
    const shaLabel = shortShaLabel(sha);
    const isUncommittedLabel = sha === 'WORKING_TREE' || shaLabel === 'Uncommited Changes';
    const isStashLabel = sha?.startsWith('STASH:');
    const fullLabel = isStashLabel
      ? includeBranchForUncommitted
        ? `${branchName}/${shaLabel}`
        : shaLabel
      : isUncommittedLabel
        ? includeBranchForUncommitted
          ? `${branchName}/Uncommited Changes`
          : 'Uncommited Changes'
        : `${branchName}/${shaLabel}`;
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
  const wrapNodeFrameMessage = (
    message: string | undefined | null,
    rectSize: ReturnType<typeof commitRectSize>,
    strokeWidth: number,
  ): { lines: string[]; fontSize: number; lineHeight: number } => {
    const label = message?.trim().replace(/\s+/g, ' ');
    const availableWidth = Math.max(
      0,
      rectSize.width - strokeWidth - nodeFrameMessageInsetX * 2,
    );
    const availableHeight =
      rectSize.height - strokeWidth - nodeFrameMessageInsetTop - nodeFrameMessageInsetBottom;
    if (!label || availableWidth <= 0 || availableHeight <= 0) {
      return { lines: [], fontSize: 0, lineHeight: 0 };
    }

    const fontSize = nodeFrameMessageFontSize;
    const lineHeight = fontSize * 1.08;
    const maxLines = Math.max(1, Math.floor(availableHeight / lineHeight));
    if (maxLines <= 0) return { lines: [], fontSize, lineHeight };
    try {
      const prepared = getPreparedPretext(
        label,
        `400 ${fontSize}px ${BRANCH_MAP_SVG_FONT_FAMILY}`,
      );
      const wrapped = layoutWithLines(prepared, availableWidth, lineHeight);
      const fullLines = wrapped.lines
        .map((line) => line.text.trim())
        .filter((line) => line.length > 0)
        // Safety clamp: even if a line comes back too wide (e.g. long unbroken token),
        // never allow visual overflow past the node bounds.
        .map((line) => trimTextToWidth(line, availableWidth, fontSize));
      if (fullLines.length <= maxLines) return { lines: fullLines, fontSize, lineHeight };

      const lines = fullLines.slice(0, maxLines);
      const overflow = fullLines.slice(maxLines).join(' ').trim();
      const lastLineSource = overflow
        ? `${lines[maxLines - 1]} ${overflow}`.trim()
        : lines[maxLines - 1];
      lines[maxLines - 1] = trimTextToWidth(lastLineSource, availableWidth, fontSize);
      return { lines, fontSize, lineHeight };
    } catch {
      const lines: string[] = [];
      let remaining = label;
      const fitLine = (text: string, truncate = false): { line: string; rest: string } => {
        const source = text.trimStart();
        if (!source) return { line: '', rest: '' };
        if (truncate) return { line: trimTextToWidth(source, availableWidth, fontSize), rest: '' };
        if (estimateSvgTextWidth(source, fontSize) <= availableWidth) return { line: source, rest: '' };
        let lo = 1;
        let hi = source.length;
        while (lo < hi) {
          const mid = Math.ceil((lo + hi) / 2);
          const candidate = source.slice(0, mid);
          if (estimateSvgTextWidth(candidate, fontSize) <= availableWidth) {
            lo = mid;
          } else {
            hi = mid - 1;
          }
        }
        let end = lo;
        const fitted = source.slice(0, end);
        const lastWhitespace = fitted.search(/\s\S*$/);
        if (lastWhitespace > 0) end = lastWhitespace;
        const line = source.slice(0, end).trimEnd();
        if (!line) return { line: trimTextToWidth(source, availableWidth, fontSize), rest: '' };
        return {
          line,
          rest: source.slice(end).trimStart(),
        };
      };
      for (let lineIndex = 0; lineIndex < maxLines && remaining; lineIndex += 1) {
        const isLastLine = lineIndex === maxLines - 1;
        const { line, rest } = fitLine(remaining, isLastLine);
        if (!line) break;
        lines.push(line);
        remaining = rest;
      }
      return { lines, fontSize, lineHeight };
    }
  };
  const scaledNodeSize = NODE_SIZE;
  const nodeRectSize = (_count: number) => commitRectSize(scaledNodeSize, 0);
  // Keep interaction hit areas consistent in screen pixels across zoom levels.
  const scaledHoverHitSize = worldPx(20);
  // Branch hover lines use vector-effect: non-scaling-stroke, so this should
  // stay in screen px (not inverse-scaled by zoom) to avoid oversized hitboxes when zoomed out.
  const branchHitStrokeWidth = BRANCH_HIT_STROKE_WIDTH;
  const drawPathArcClass = (!ENABLE_TIMELINE_INTRO_ANIMATIONS || animationsLocked) ? undefined : 'draw-path-arc';
  const drawPathMainClass = drawPathArcClass;
  const fadeInInfoClass = (!ENABLE_TIMELINE_INTRO_ANIMATIONS || animationsLocked) ? undefined : 'fade-in-info';
  const mainTimelineOpacity = 1;
  const timelineCanvasVisible = timelineRevealPhase !== 'hidden';
  const holdTimelineForInitialCenter =
    isLoading || (!hasInitialRevealDone && hasTimelineSeedData && timelineRevealPhase !== 'done' && !hasUserMovedCameraRef.current);

  function resolveClumpPhase(expandedState?: ExpandedClumpState): {
    isExpanded: boolean;
    phase: ExpandedClumpState['phase'];
    phaseEased: number;
  } {
    const isExpanded = expandedState?.isExpanded ?? false;
    const phase = expandedState?.phase ?? 'collapsed';
    const phaseProgress = phase === 'collapsed'
      ? 0
      : phase === 'expanded'
        ? 1
        : clamp01(expandedState?.phaseProgress ?? (phase === 'collapsing' ? 1 : 0));
    const phaseEased = phase === 'collapsing' ? 1 - phaseProgress : phaseProgress;
    return { isExpanded, phase, phaseEased };
  }
  function resolveClusterMotion(
    clusterKey: string,
    defaultAnchor: { x: number; y: number },
    memberKeys: string[],
    canExpandCluster = true,
  ): {
    anchorX: number;
    anchorY: number;
    isExpanded: boolean;
    phase: ExpandedClumpState['phase'];
    phaseEased: number;
  } {
    const animatedAnchor = resolveAnimatedClumpAnchor(
      clusterKey,
      defaultAnchor,
      memberKeys,
    );
    const expandedState = canExpandCluster ? expandedClumps.get(clusterKey) : undefined;
    const { isExpanded, phase, phaseEased } = resolveClumpPhase(expandedState);
    return {
      anchorX: animatedAnchor.x,
      anchorY: animatedAnchor.y,
      isExpanded: canExpandCluster ? isExpanded : false,
      phase: canExpandCluster ? phase : 'collapsed',
      phaseEased: canExpandCluster ? phaseEased : 0,
    };
  }
  function interpolateExpandedEntryPose(
    anchor: { x: number; y: number },
    entry: { x: number; y: number },
    phase: ExpandedClumpState['phase'],
    phaseEased: number,
  ): { x: number; y: number; opacity: number; scale: number } {
    const to = { x: entry.x, y: entry.y };
    const from = { x: anchor.x, y: anchor.y };
    const at = phase === 'collapsing'
      ? { x: to.x + (from.x - to.x) * phaseEased, y: to.y + (from.y - to.y) * phaseEased }
      : phase === 'expanding'
        ? { x: from.x + (to.x - from.x) * phaseEased, y: from.y + (to.y - from.y) * phaseEased }
        : phase === 'collapsed'
          ? from
          : to;
    const opacity = phase === 'collapsed' ? 0 : 1;
    const scale = phase === 'collapsing'
      ? (() => {
          const t = clamp01(phaseEased);
          const shallow = 0.032;
          const dipEnd = 0.38;
          if (t < dipEnd) {
            const u = t / dipEnd;
            const easeOut = 1 - Math.pow(1 - u, 3);
            return 1 - shallow * easeOut;
          }
          const u = (t - dipEnd) / (1 - dipEnd);
          const low = 1 - shallow;
          return low + (1 - low) * easeInOutCubic(clamp01(u));
        })()
      : phase === 'expanding'
        ? 0.96 + 0.04 * phaseEased
        : phase === 'collapsed'
          ? 0.96
          : 1;
    return { x: at.x, y: at.y, opacity, scale };
  }
  const getNodeStrokeColor = (
    nodeKey: string,
    baseStroke = CANVAS_NODE_STROKE,
    checkoutAccent: CheckoutAccent = 'none',
    isUserSelected = false,
    accentOutlineOnly = false,
  ) => {
    if (isUserSelected) return USER_SELECTION_STROKE;
    if (hoveredNodeStrokeKey === nodeKey) {
      // Ghost / empty uncommitted: same blue hover ring as normal nodes (not worktree-only stroke).
      if (accentOutlineOnly) return CANVAS_NEUTRAL_GRAY_HOVER;
      if (checkoutAccent === 'primary') return CHECKED_OUT_SELECTION_HOVER_STROKE;
      if (checkoutAccent === 'other') return WORKTREE_OTHER_HOVER_STROKE;
      return CANVAS_NEUTRAL_GRAY_HOVER;
    }
    if (checkoutAccent === 'primary') return CHECKED_OUT_SELECTION_STROKE;
    if (checkoutAccent === 'other') return WORKTREE_OTHER_STROKE;
    return baseStroke;
  };
  const getNodeFillColor = (
    nodeKey: string,
    baseFill = CANVAS_NODE_FILL,
    checkoutAccent: CheckoutAccent = 'none',
    isUserSelected = false,
    accentOutlineOnly = false,
  ) => {
    const normalizedFill = baseFill.trim().toLowerCase();
    const isUnpushedFill =
      normalizedFill === CANVAS_UNPUSHED_NODE_FILL ||
      normalizedFill === CANVAS_UNPUSHED_NODE_FILL_HEX.toLowerCase();
    // Ghost / empty uncommitted, or any unpushed surface: checkout accent must not paint the
    // pushed-only checked-out fill (#EDF7FD) on top of #FAFAF9.
    const retainNeutralSurfaceFill = accentOutlineOnly || isUnpushedFill;
    if (retainNeutralSurfaceFill) {
      return CANVAS_UNPUSHED_NODE_FILL_HEX;
    }
    if (isUserSelected) return USER_SELECTION_FILL;
    if (hoveredNodeStrokeKey === nodeKey) return HOVER_NODE_FILL;
    if (checkoutAccent === 'primary') return CHECKED_OUT_SELECTION_FILL;
    if (checkoutAccent === 'other') return WORKTREE_OTHER_FILL;
    return baseFill;
  };
  const getNodeFrameTitleColor = (
    nodeKey: string,
    checkoutAccent: CheckoutAccent = 'none',
    isUserSelected = false,
    isUncommitted = false,
    isStash = false,
    accentOutlineOnly = false,
  ) => {
    if (isUserSelected) return '#257BF3';
    if (hoveredNodeStrokeKey === nodeKey) {
      if (accentOutlineOnly) return '#64A1F7';
      if (checkoutAccent === 'primary') return '#64A1F7';
      if (checkoutAccent === 'other') return WORKTREE_OTHER_HOVER_STROKE;
      return '#64A1F7';
    }
    if (checkoutAccent === 'primary') return '#47AFEB';
    if (checkoutAccent === 'other') return WORKTREE_OTHER_TITLE;
    if (isStash) return STASH_LABEL_TEXT;
    if (isUncommitted) return '#47AFEB';
    return NODE_FRAME_BRANCH_TITLE_COLOR;
  };
  const getNodeFrameInnerTextColor = (
    nodeKey: string,
    checkoutAccent: CheckoutAccent = 'none',
    isUserSelected = false,
    isUncommitted = false,
    isStash = false,
    accentOutlineOnly = false,
  ) => {
    if (isUserSelected) return '#257BF3';
    if (hoveredNodeStrokeKey === nodeKey) {
      if (accentOutlineOnly) return '#64A1F7';
      if (checkoutAccent === 'primary') return '#64A1F7';
      if (checkoutAccent === 'other') return WORKTREE_OTHER_HOVER_STROKE;
      return '#64A1F7';
    }
    if (checkoutAccent === 'primary') return '#47AFEB';
    if (checkoutAccent === 'other') return WORKTREE_OTHER_INNER_TEXT;
    if (isStash) return STASH_LABEL_TEXT;
    if (isUncommitted) return '#47AFEB';
    return NODE_FRAME_INNER_TEXT_COLOR;
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
  function clearMainBranchHover() {
    setHoveredBranch((current) => (current === defaultBranch ? null : current));
  }
  function renderCommitNodeShapeRect({
    x,
    y,
    width,
    height,
    baseRadius = COMMIT_NODE_CORNER_RADIUS,
    fill,
    stroke,
    strokeWidth = CANVAS_NODE_STROKE_WIDTH,
    dashed = false,
  }: {
    x: number;
    y: number;
    width: number;
    height: number;
    baseRadius?: number;
    fill: string;
    stroke: string;
    strokeWidth?: number;
    dashed?: boolean;
  }) {
    const zoomSafeScale = Math.max(layerCameraScale.x, 0.0001);
    const radius = Math.max(0, baseRadius / zoomSafeScale);
    return (
      <>
        <rect
          className="branch-map-commit-rect"
          x={x}
          y={y}
          width={width}
          height={height}
          data-base-rx={baseRadius}
          rx={radius}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={dashed ? '3 3' : undefined}
          strokeLinecap={dashed ? 'round' : undefined}
          strokeLinejoin={dashed ? 'round' : undefined}
        />
        {radius > 0 && (
          <>
            <rect
              x={x}
              y={y}
              width={radius}
              height={radius}
              fill={fill}
              pointerEvents="none"
            />
            <path
              d={`M ${x + radius} ${y} L ${x} ${y} L ${x} ${y + radius}`}
              fill="none"
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeDasharray={dashed ? '3 3' : undefined}
              strokeLinecap={dashed ? 'round' : undefined}
              strokeLinejoin={dashed ? 'round' : undefined}
              pointerEvents="none"
            />
          </>
        )}
      </>
    );
  }
  function renderCommitNodeRect({
    nodeKey,
    centerX,
    centerY,
    rectSize,
    fill,
    baseStroke,
    checkoutAccent = 'none' as CheckoutAccent,
    isUserSelected = false,
    strokeWidth = CANVAS_NODE_STROKE_WIDTH,
    strokeInset = strokeWidth / 2,
    dashed = false,
    cursor = undefined,
    innerText,
    footerMetaAuthor,
    footerMetaDate,
    isUncommitted = false,
    isStash = false,
    accentOutlineOnly: accentOutlineOnlyProp = false,
  }: {
    nodeKey: string;
    centerX: number;
    centerY: number;
    rectSize: ReturnType<typeof commitRectSize>;
    fill: string;
    baseStroke: string;
    checkoutAccent?: CheckoutAccent;
    isUserSelected?: boolean;
    strokeWidth?: number;
    strokeInset?: number;
    dashed?: boolean;
    cursor?: React.CSSProperties['cursor'];
    innerText?: string;
    footerMetaAuthor?: string;
    footerMetaDate?: string;
    isUncommitted?: boolean;
    isStash?: boolean;
    /** Ghost / empty uncommitted: transparent fill; checkout accent only on stroke. */
    accentOutlineOnly?: boolean;
  }) {
    const wrappedInnerText = innerText?.trim()
      ? wrapNodeFrameMessage(innerText, rectSize, strokeWidth)
      : { lines: [], fontSize: 0, lineHeight: 0 };
    const shouldShowFooterMeta = zoom >= NODE_FRAME_FOOTER_META_ZOOM_MIN;
    const trimmedFooterMetaAuthor = footerMetaAuthor?.trim();
    const trimmedFooterMetaDate = footerMetaDate?.trim();
    const footerMetaMaxWidth = Math.max(0, rectSize.width - strokeWidth - nodeFrameMessageInsetX * 2);
    const hasFooterMeta = !!trimmedFooterMetaAuthor && !!trimmedFooterMetaDate;
    const renderedFooterMetaDate = hasFooterMeta
      ? trimTextToWidth(trimmedFooterMetaDate, footerMetaMaxWidth * 0.65, nodeFrameMessageFontSize)
      : '';
    const footerMetaDateWidth = renderedFooterMetaDate
      ? estimateSvgTextWidth(renderedFooterMetaDate, nodeFrameMessageFontSize)
      : 0;
    const renderedFooterMetaAuthor = hasFooterMeta
      ? trimTextToWidth(
          trimmedFooterMetaAuthor,
          Math.max(0, footerMetaMaxWidth - footerMetaDateWidth - nodeFrameFooterMetaPairGap),
          nodeFrameMessageFontSize,
        )
      : '';
    const footerMetaTransitionStyle: React.CSSProperties = {
      opacity: shouldShowFooterMeta ? 1 : 0,
      filter: shouldShowFooterMeta ? 'blur(0px)' : 'blur(3px)',
      transition: 'opacity 180ms ease, filter 220ms ease',
    };
    const rectX = centerX - rectSize.width / 2 + strokeInset;
    const rectY = centerY - rectSize.height / 2 + strokeInset;
    const rectWidth = rectSize.width - strokeWidth;
    const rectHeight = rectSize.height - strokeWidth;
    const effectiveAccentOutlineOnly =
      accentOutlineOnlyProp || (isUncommitted && !isStash && !innerText?.trim());
    const nodeFill = getNodeFillColor(
      nodeKey,
      fill,
      checkoutAccent,
      isUserSelected,
      effectiveAccentOutlineOnly,
    );
    const normalizedFill = fill.trim().toLowerCase();
    const isUnpushedFill =
      normalizedFill === CANVAS_UNPUSHED_NODE_FILL ||
      normalizedFill === CANVAS_UNPUSHED_NODE_FILL_HEX.toLowerCase();
    const pushDebugLabel = isUncommitted || isStash || isUnpushedFill ? 'unpushed' : 'pushed';
    const nodeStroke = getNodeStrokeColor(
      nodeKey,
      baseStroke,
      checkoutAccent,
      isUserSelected,
      effectiveAccentOutlineOnly,
    );
    return (
      <g style={cursor ? { cursor } : undefined}>
        {renderCommitNodeShapeRect({
          x: rectX,
          y: rectY,
          width: rectWidth,
          height: rectHeight,
          baseRadius: COMMIT_NODE_CORNER_RADIUS,
          fill: nodeFill,
          stroke: nodeStroke,
          strokeWidth,
          dashed,
        })}
        {wrappedInnerText.lines.length > 0 && (
          <text
            x={centerX - rectSize.width / 2 + strokeInset + nodeFrameMessageInsetX}
            textAnchor="start"
            textRendering="geometricPrecision"
            fontFamily={BRANCH_MAP_SVG_FONT_FAMILY}
            fill={getNodeFrameInnerTextColor(
              nodeKey,
              checkoutAccent,
              isUserSelected,
              isUncommitted,
              isStash,
              effectiveAccentOutlineOnly,
            )}
            fontWeight={NODE_FRAME_LABEL_WEIGHT}
            pointerEvents="none"
            fontSize={wrappedInnerText.fontSize}
            y={
              centerY -
              rectSize.height / 2 +
              strokeInset +
              nodeFrameMessageInsetTop +
              wrappedInnerText.fontSize +
              nodeFrameMessageRenderOffsetY
            }
          >
            {wrappedInnerText.lines.map((line, index) => (
              <tspan
                key={`${nodeKey}-line-${index}`}
                x={centerX - rectSize.width / 2 + strokeInset + nodeFrameMessageInsetX}
                dy={index === 0 ? 0 : wrappedInnerText.lineHeight}
              >
                {line}
              </tspan>
            ))}
          </text>
        )}
        {ENABLE_NODE_PUSH_DEBUG_LABEL && (
          <text
            x={rectX + nodeFrameMessageInsetX}
            y={rectY + nodeFrameMessageInsetTop - worldPx(4)}
            textAnchor="start"
            textRendering="geometricPrecision"
            fontFamily={BRANCH_MAP_SVG_FONT_FAMILY}
            fill={pushDebugLabel === 'unpushed' ? '#47AFEB' : '#6B7280'}
            fontWeight={700}
            pointerEvents="none"
            fontSize={Math.max(7, worldPx(10))}
          >
            {pushDebugLabel} | fill={fill.slice(0, 7)} | base={nodeKey.slice(-7)}
          </text>
        )}
        {renderedFooterMetaAuthor && renderedFooterMetaDate && (
          <>
            <text
              x={centerX - rectSize.width / 2 + strokeInset + nodeFrameMessageInsetX}
              y={
                centerY +
                rectSize.height / 2 -
                strokeInset -
                nodeFrameMessageInsetBottom
              }
              textAnchor="start"
              textRendering="geometricPrecision"
              fontFamily={BRANCH_MAP_SVG_FONT_FAMILY}
              fill={getNodeFrameInnerTextColor(
                nodeKey,
                checkoutAccent,
                isUserSelected,
                isUncommitted,
                isStash,
                effectiveAccentOutlineOnly,
              )}
              fontWeight={NODE_FRAME_LABEL_WEIGHT}
              pointerEvents="none"
              fontSize={nodeFrameMessageFontSize}
              style={footerMetaTransitionStyle}
            >
              {renderedFooterMetaAuthor}
            </text>
            <text
              x={centerX + rectSize.width / 2 - strokeInset - nodeFrameMessageInsetX}
              y={
                centerY +
                rectSize.height / 2 -
                strokeInset -
                nodeFrameMessageInsetBottom
              }
              textAnchor="end"
              textRendering="geometricPrecision"
              fontFamily={BRANCH_MAP_SVG_FONT_FAMILY}
              fill={getNodeFrameInnerTextColor(
                nodeKey,
                checkoutAccent,
                isUserSelected,
                isUncommitted,
                isStash,
                effectiveAccentOutlineOnly,
              )}
              fontWeight={NODE_FRAME_LABEL_WEIGHT}
              pointerEvents="none"
              fontSize={nodeFrameMessageFontSize}
              style={footerMetaTransitionStyle}
            >
              {renderedFooterMetaDate}
            </text>
          </>
        )}
      </g>
    );
  }
  const branchRenderLayoutCache = new Map<string, BranchRenderLayout>();
  function getBranchRenderLayout(b: Branch): BranchRenderLayout {
    const cached = branchRenderLayoutCache.get(b.name);
    if (cached) return cached;

    if (b.name === defaultBranch) {
      const lanePosX = mainX;
      const startX = mainX;
      const forkY = mainStartY;
      const branchLineTipY = mainActiveEndY;
      const routeCornerR = GRID_ROUTE_CORNER_R;
      const curvePath = buildBranchOrthogonalPath({
        startX,
        forkY,
        laneX: lanePosX,
        tipY: branchLineTipY,
        cornerR: routeCornerR,
        pointFormatter: pathCoord,
      });
      const verticalDir = branchLineTipY >= forkY ? 1 : -1;
      const endTrim = Math.min(
        BRANCH_HIT_END_INSET,
        Math.max(0, Math.abs(branchLineTipY - forkY) - 1),
      );
      const hitCurvePath = buildBranchOrthogonalPath({
        startX,
        forkY,
        laneX: lanePosX,
        tipY: branchLineTipY - verticalDir * endTrim,
        cornerR: routeCornerR,
        pointFormatter: pathCoord,
      });

      const visibleBranchCommits = sortedDirectCommits.map((commit) => ({
        ...commit,
        kind:
        commit.kind === 'stash'
          ? 'stash'
          : commit.kind === 'uncommitted'
            ? 'uncommitted'
            : 'commit',
      } as BranchCommitPreview));
      const commitTimeXs = sortedDirectCommits.map(
        (commit) => directXByFullSha.get(commit.fullSha) ?? timeToX(commit.date)
      );
      const minCommitTimeX = commitTimeXs.length > 0 ? Math.min(...commitTimeXs) : mainEndX;
      const maxCommitTimeX = commitTimeXs.length > 0 ? Math.max(...commitTimeXs) : mainEndX;
      const commitDotEntries: MarkerEntry<CommitEntryItem>[] = sortedDirectCommits.map((commit, index) => {
        const timeCoordX = directXByFullSha.get(commit.fullSha) ?? timeToX(commit.date);
        const markerPoint = projectPoint(mainX, timeCoordToY(timeCoordX));
        return {
          x: markerPoint.x,
          y: markerPoint.y,
          item: {
            index,
            commit: {
              ...commit,
              kind:
        commit.kind === 'stash'
          ? 'stash'
          : commit.kind === 'uncommitted'
            ? 'uncommitted'
            : 'commit',
            },
          },
        };
      });
      const mainForkIndices = new Set<number>();
      const mainChildBranches = childBranchesByParent.get(defaultBranch) ?? [];
      if (mainChildBranches.length > 0 && visibleBranchCommits.length > 0) {
        const branchTimes = visibleBranchCommits.map((commit) => new Date(commit.date).getTime());
        mainChildBranches.forEach((child) => {
          const idx = branchPreviewIndexForChildFork(visibleBranchCommits, branchTimes, child);
          if (idx >= 0) mainForkIndices.add(idx);
        });
      }
      const mainUncommittedSplitIndices = splitIndicesAroundUncommitted(
        commitDotEntries,
        (entry) =>
          !!entry.item.commit && isSyntheticLocalCommit(entry.item.commit)
      );
      const defaultBranchSplitIndices = new Set<number>([
        ...mainForkIndices,
        ...mainCommitSplitIndices,
        ...mainUncommittedSplitIndices,
      ]);
      const defaultBranchPreserveSplitIndices = new Set<number>([
        ...mainForkIndices,
        ...forcedMainSplitIndices,
        ...mainUncommittedSplitIndices,
      ]);
      const commitDotClusters = clusterByForkPoints(
        commitDotEntries,
        defaultBranchSplitIndices,
        defaultBranchPreserveSplitIndices,
      );

      const promptMarkersRaw = branchPromptMeta[defaultBranch]?.markers ?? [];
      const promptSeeds = [...promptMarkersRaw]
        .sort((a, bx) => new Date(a.timestamp).getTime() - new Date(bx.timestamp).getTime());
      const promptMarkers = promptSeeds.map((marker) => {
        const rawX = timeToX(marker.timestamp);
        const clampedX = Math.max(minCommitTimeX, Math.min(maxCommitTimeX, rawX));
        return {
          y: timeCoordToY(clampedX),
          marker,
        };
      });
      const promptMarkerEntries: MarkerEntry<PromptEntryItem>[] = promptMarkers.map(
        ({ y, marker }, markerIndex) => {
          const point = projectPoint(lanePosX, y);
          return {
            x: point.x,
            y: point.y,
            item: { marker, index: markerIndex },
          };
        }
      );
      const promptMarkerClusters = clusterByForkPoints(promptMarkerEntries, new Set<number>());
      const branchEndDotIndex = sortedDirectCommits.length > 0 ? sortedDirectCommits.length - 1 : null;
      const branchHasCheckedOutHead =
        checkedOutHeadSha != null &&
        sortedDirectCommits.some((commit) =>
          shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
          shaMatchesGitRef(commit.sha, checkedOutHeadSha)
        );
      const nameAnchor = projectPoint(lanePosX, forkY);
      const namePoint = { x: nameAnchor.x + (isHorizontal ? 24 : 20), y: nameAnchor.y + (isHorizontal ? -20 : -12) };
      const clockPoint = { x: namePoint.x + 10, y: namePoint.y };

      const mainLocalCommitDotIndices = new Set<number>(
        sortedDirectCommits
          .map((commit, index) => ({ commit, index }))
          .filter(({ commit }) => isCommitUnpushed(commit.fullSha, commit.sha))
          .map(({ index }) => index)
      );
      const layout: BranchRenderLayout = {
        forkY,
        lanePosX,
        startX,
        isMergedBranch: false,
        isLocalBranch: mainLocalCommitDotIndices.size > 0,
        mergeNodeTimeX: null,
        branchLineTipY,
        mergeBackPath: null,
        curvePath,
        hitCurvePath,
        hasPreviewData: true,
        visibleBranchCommits,
        uniqueAheadCount: visibleBranchCommits.filter((commit) => commit.kind !== 'branch-created').length,
        branchEndDotIndex,
        localCommitDotIndices: mainLocalCommitDotIndices,
        fullBranchShouldUseLocalGray: false,
        hasUncommittedPreview: visibleBranchCommits.some(
          (commit) => commit.kind === 'uncommitted' || commit.kind === 'stash',
        ),
        localSegmentStartY: undefined,
        commitDotClusters,
        promptMarkerClusters,
        branchHasCheckedOutHead,
        brDelay: MAIN_DRAW_MS,
        showClockIcon: false,
        namePoint,
        clockPoint,
        mergeTargetX: null,
        mergeTargetY: null,
      };
      branchRenderLayoutCache.set(b.name, layout);
      return layout;
    }

    const forkTimeX = branchForkX(b);
    const lanePosX = laneX(b);
    let startX = branchStartX(b);
    const parentName = renderParentBranchName(b);
    const liftedForkTimeX = collapsedParentClumpLiftedForkX(b, parentName);
    const effectiveForkTimeX = liftedForkTimeX != null ? Math.max(forkTimeX, liftedForkTimeX) : forkTimeX;

    if (Math.abs(lanePosX - startX) > 0.5) {
      const { width: rectW, height: rectH } = commitRectSize(NODE_SIZE);
      const logicalOffset = isHorizontal ? rectH / 2 : rectW / 2;
      // Start connectors from the source node edge so there is no visible gap.
      const direction = lanePosX > startX ? 1 : -1;
      // Guard against overshooting the lane when branches are tightly packed,
      // which creates tiny reversed "stubs" near the fork point.
      const laneDelta = Math.abs(lanePosX - startX);
      const safeOffset = Math.min(logicalOffset, Math.max(0, laneDelta - 0.5));
      startX += direction * safeOffset;
    }

    const isFreshCopy = freshCopyBranchNames.has(b.name);
    const isMergedBranch = b.commitsAhead === 0 && !isFreshCopy;
    const isLocalBranch = b.remoteSyncStatus !== 'on-github';
    const branchCommits = renderableBranchPreviews(b);
    const hasPreviewData = branchCommitPreviews[b.name] != null;
    const visibleBranchCommits = branchCommits;
    const hasUncommittedPreview = visibleBranchCommits.some(
      (commit) => commit.kind === 'uncommitted' || commit.kind === 'stash',
    );
    const uniqueAheadCount = branchAheadCount(b);
    const aheadCount = Math.max(0, uniqueAheadCount);
    const hasConcretePreviewCommits = visibleBranchCommits.length > 0;
    const shouldShowEmptyPlaceholder = !hasConcretePreviewCommits && uniqueAheadCount <= 0;
    // Keep placeholder rows derived from ahead-count even when preview data is partial.
    // This prevents synthetic/local preview entries from displacing existing rows.
    const commitCount = Math.max(
      hasConcretePreviewCommits ? visibleBranchCommits.length : 0,
      aheadCount,
      shouldShowEmptyPlaceholder ? 1 : 0,
    );
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
        branchLineTipY = timeCoordToY(Math.max(placeholderTipX, commitTipTimeX));
      }
    }
    const forkY = timeCoordToY(effectiveForkTimeX);
    const routeCornerR = GRID_ROUTE_CORNER_R;
    const maxAllowedMergeY = branchLineTipY - GRID_EVENT_GAP;
    const mergeTargetBranchName = mergeNodeForBranch?.targetBranch ?? parentName;
    const mergeTargetLaneX = mergeTargetBranchName === defaultBranch
      ? mainX
      : (laneXByBranch.get(mergeTargetBranchName) ?? (
        parentName === defaultBranch
          ? mainX
          : (laneXByBranch.get(parentName) ?? mainX)
      ));
    const fallbackMergeTarget = mergeNodeTimeX != null
      ? { x: mergeTargetLaneX, y: timeCoordToY(mergeNodeTimeX) }
      : null;
    const mergeTarget = (() => {
      const isUpward = (y: number): boolean => y <= maxAllowedMergeY;
      if (fallbackMergeTarget && isUpward(fallbackMergeTarget.y)) {
        return fallbackMergeTarget;
      }
      if (fallbackMergeTarget) {
        // Guardrail: merge connectors should never route downward.
        return { x: mergeTargetLaneX, y: maxAllowedMergeY };
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
    const commitItems: Array<BranchCommitPreview | undefined> = [
      ...displayedCommits,
      ...Array.from({ length: Math.max(0, commitCount - displayedCommits.length) }, () => undefined),
    ];
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
    const localCommitDotIndicesFromSha = new Set<number>(
      realCommitDotIndices.filter((index) => {
        const commit = commitItems[index];
        if (!commit?.fullSha) return false;
        return isCommitUnpushed(commit.fullSha, commit.sha ?? undefined);
      }),
    );
    // Fall back to count-based slicing when per-commit SHA data is not yet loaded.
    const localCommitDotIndices = localCommitDotIndicesFromSha.size > 0
      ? localCommitDotIndicesFromSha
      : new Set(realCommitDotIndices.slice(realCommitDotIndices.length - boundedLocalCommitCount));
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
    const branchUncommittedSplitIndices = splitIndicesAroundUncommitted(
      commitDotEntries,
      (entry) =>
        !!entry.item.commit && isSyntheticLocalCommit(entry.item.commit)
    );
    const branchSplitIndices = new Set<number>([
      ...branchForkIndices,
      ...branchUncommittedSplitIndices,
    ]);
    const branchPreserveSplitIndices = new Set<number>([
      ...branchForkIndices,
      ...branchUncommittedSplitIndices,
    ]);
    const commitDotClusters = clusterByForkPoints(
      commitDotEntries,
      branchSplitIndices,
      branchPreserveSplitIndices,
    );

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
      hasUncommittedPreview,
      localSegmentStartY,
      commitDotClusters,
      promptMarkerClusters,
      branchHasCheckedOutHead,
      brDelay,
      showClockIcon,
      namePoint,
      clockPoint,
      mergeTargetX,
      mergeTargetY,
    };
    branchRenderLayoutCache.set(b.name, layout);
    return layout;
  }

  const clumpAnimStyleForPhase = (phase: ExpandedClumpState['phase']): React.CSSProperties => {
    void phase;
    return {
      willChange: 'transform, opacity',
    };
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
  function branchUsesLocalGrayStroke(branch: Branch): boolean {
    return getBranchRenderLayout(branch).fullBranchShouldUseLocalGray;
  }

  function branchStrokeLayerPriority(
    branch: Branch,
    options: { includeSelectedPriority: boolean },
  ): number {
    if (options.includeSelectedPriority && selectedBranchNameSet.has(branch.name)) return 5;
    if (hoveredBranch === branch.name || isNodeLineageHovered(branch.name)) return 4;
    if (isSelectedLaneBranch(branch)) return 3;
    if (focusedErrorBranch?.name === branch.name) return 2;
    return branchUsesLocalGrayStroke(branch) ? 0 : 1;
  }

  function orderedActiveBranchesForLayer(options: { includeSelectedPriority: boolean }): Branch[] {
    return [...renderBranches].sort(
      (a, b) => branchStrokeLayerPriority(a, options) - branchStrokeLayerPriority(b, options)
    );
  }
  const mainIsUnifiedRender = renderBranches.some((branch) => branch.name === defaultBranch);
  const isNodeLineageHovered = (branchName: string): boolean => hoveredNodeBranchLineage.has(branchName);

  const toggleClumpExpanded = (clumpKey: string) => {
    clearTransientHoverState();
    markUserMovedCamera();
    const existing = expandedClumps.get(clumpKey);
    const isExpanded = existing?.isExpanded ?? false;

    const existingAnimationFrame = clumpCleanupTimersRef.current.get(clumpKey);
    if (existingAnimationFrame != null) {
      window.cancelAnimationFrame(existingAnimationFrame);
      clumpCleanupTimersRef.current.delete(clumpKey);
    }

    if (isExpanded) {
      // Collapse while rows start compacting shortly after collapse begins,
      // so surrounding content moves during the same motion window.
      const collapseStartedAt = Date.now();
      const collapseLerp = 0.26;
      let collapseProgress = existing?.phaseProgress ?? 1;
      // Keep expanded rows briefly during collapse so member travel remains visible,
      // then release rows early enough that lane motion still feels synced.
      const rowReleaseAt = collapseStartedAt + 80;
      setExpandedClumps((prev) => {
        const next = new Map(prev);
        next.set(clumpKey, {
          isExpanded: true,
          phase: 'collapsing',
          phaseStartedAt: collapseStartedAt,
          phaseProgress: collapseProgress,
          rowReleaseAt,
        });
        return next;
      });

      // Drive per-frame exponential interpolation until clump fully collapses.
      const collapseTick = () => {
        collapseProgress += (0 - collapseProgress) * collapseLerp;
        const done = Math.abs(collapseProgress) <= 0.004;
        setExpandedClumps((prev) => {
          const next = new Map(prev);
          if (done) {
            next.delete(clumpKey);
            return next;
          }
          const current = next.get(clumpKey);
          if (!current) return prev;
          next.set(clumpKey, {
            ...current,
            isExpanded: true,
            phase: 'collapsing',
            phaseStartedAt: collapseStartedAt,
            phaseProgress: collapseProgress,
            rowReleaseAt,
          });
          return next;
        });
        setClumpAnimationTick((v) => v + 1);
        if (done) {
          clumpCleanupTimersRef.current.delete(clumpKey);
          return;
        }
        const frameId = window.requestAnimationFrame(collapseTick);
        clumpCleanupTimersRef.current.set(clumpKey, frameId);
      };
      const frameId = window.requestAnimationFrame(collapseTick);
      clumpCleanupTimersRef.current.set(clumpKey, frameId);
      return;
    }

    const expandStartedAt = Date.now();
    const expandLerp = 0.26;
    let expandProgress = existing?.phaseProgress ?? 0;
    setExpandedClumps((prev) => {
      const next = new Map(prev);
      next.set(clumpKey, {
        isExpanded: true,
        phase: 'expanding',
        phaseStartedAt: expandStartedAt,
        phaseProgress: expandProgress,
        rowReleaseAt: undefined,
      });
      return next;
    });

    // Drive per-frame exponential interpolation until clump fully expands.
    const expandTick = () => {
      expandProgress += (1 - expandProgress) * expandLerp;
      const done = Math.abs(1 - expandProgress) <= 0.004;
      setExpandedClumps((prev) => {
        const next = new Map(prev);
        const current = next.get(clumpKey);
        if (!current) return prev;
        if (done) {
          next.set(clumpKey, {
            isExpanded: true,
            phase: 'expanded',
            phaseStartedAt: expandStartedAt,
            phaseProgress: 1,
            rowReleaseAt: undefined,
          });
          return next;
        }
        next.set(clumpKey, {
          ...current,
          isExpanded: true,
          phase: 'expanding',
          phaseStartedAt: expandStartedAt,
          phaseProgress: expandProgress,
          rowReleaseAt: undefined,
        });
        return next;
      });
      setClumpAnimationTick((v) => v + 1);
      if (done) {
        clumpCleanupTimersRef.current.delete(clumpKey);
        return;
      }
      const frameId = window.requestAnimationFrame(expandTick);
      clumpCleanupTimersRef.current.set(clumpKey, frameId);
    };
    const frameId = window.requestAnimationFrame(expandTick);
    clumpCleanupTimersRef.current.set(clumpKey, frameId);
  };

  // Seed the unified unpushed SHA set with direct-commit data (main branch),
  // falling back to the count-based slice if the explicit list is empty.
  const fallbackMainUnpushedCommits = (() => {
    const explicitUnpushed = Math.max(0, defaultBranchFromData?.unpushedCommits ?? 0);
    if (explicitUnpushed === 0) return [];
    return sortedDirectCommits.slice(-explicitUnpushed);
  })();
  const effectiveUnpushedDirectCommits =
    unpushedDirectCommits.length > 0 ? unpushedDirectCommits : fallbackMainUnpushedCommits;

  // Single source of truth: every unpushed SHA from every branch merged into one set.
  const allUnpushedShas = new Set<string>(
    [
      ...effectiveUnpushedDirectCommits.flatMap((c) => [c.fullSha, c.sha].filter(Boolean)),
      ...Object.values(unpushedCommitShasByBranch).flat().map((sha) => sha.trim()).filter(Boolean),
    ]
  );
  const isCommitUnpushed = (fullSha: string, sha?: string): boolean => {
    if (allUnpushedShas.has(fullSha)) return true;
    if (sha && allUnpushedShas.has(sha)) return true;
    for (const candidate of allUnpushedShas) {
      if (shaMatchesGitRef(candidate, fullSha)) return true;
      if (sha && shaMatchesGitRef(candidate, sha)) return true;
    }
    return false;
  };

  type MainDirectClusterLayout = {
    cluster: MarkerCluster<DirectCommit>;
    clusterKey: string;
    count: number;
    first: DirectCommit;
    last: DirectCommit;
    memberKeys: string[];
    preferredAnchorX: number;
    preferredAnchorY: number;
    clusterHasMainTip: boolean;
    clusterCheckoutAccent: CheckoutAccent;
    clusterHasSelectedCommit: boolean;
    clusterHasUncommitted: boolean;
    clusterHasStash: boolean;
    clusterHasUnpushed: boolean;
  };
  const mainLayout = getBranchRenderLayout(defaultBranchRenderBranch);
  const latestMainCommitSha = sortedDirectCommits[sortedDirectCommits.length - 1]?.fullSha;
  const selectedCommitShaRawSet = new Set(selectedCommitShas);
  const mainDirectClusters: MainDirectClusterLayout[] = mainLayout.commitDotClusters
    .map((cluster) => {
      const vm = buildBranchClusterViewModel(defaultBranch, cluster, mainLayout.branchEndDotIndex);
      const directEntries: MarkerEntry<DirectCommit>[] = vm.renderEntries
        .map((entry) => {
          const commit = entry.item.commit;
          if (!commit) return null;
          return { x: entry.x, y: entry.y, item: commit as DirectCommit };
        })
        .filter((entry): entry is MarkerEntry<DirectCommit> => entry != null);

      if (directEntries.length === 0) return null;

      const directCluster: MarkerCluster<DirectCommit> = {
        x: cluster.x,
        y: cluster.y,
        entries: directEntries,
      };
      const mainVm = buildMainClusterViewModel(directCluster);
      return {
        cluster: mainVm.cluster,
        clusterKey: vm.clusterKey,
        count: vm.count,
        first: mainVm.first,
        last: mainVm.last,
        memberKeys: vm.memberKeys,
        preferredAnchorX: vm.preferredAnchorEntry.x,
        preferredAnchorY: vm.preferredAnchorEntry.y,
        clusterHasMainTip: directEntries.some(
          (entry) => entry.item.fullSha === latestMainCommitSha
        ),
        clusterCheckoutAccent: (() => {
          const clusterHasPrimaryCheckoutHead =
            checkedOutHeadSha != null &&
            directEntries.some((entry) => shaMatchesGitRef(entry.item.fullSha, checkedOutHeadSha));
          const clusterHasOtherWorktreeHead = directEntries.some((entry) =>
            otherWorktreeMatchesBranchCommit(defaultBranch, entry.item.fullSha, entry.item.sha),
          );
          return clusterHasPrimaryCheckoutHead
            ? 'primary'
            : clusterHasOtherWorktreeHead
              ? 'other'
              : 'none';
        })(),
        clusterHasSelectedCommit:
          directEntries.some((entry) => selectedCommitShaRawSet.has(entry.item.fullSha)),
        clusterHasUncommitted: directEntries.some(
          (entry) =>
            entry.item.fullSha === 'WORKING_TREE' || entry.item.kind === 'uncommitted',
        ),
        clusterHasStash: directEntries.some((entry) => isStashCommitLike(entry.item)),
        clusterHasUnpushed: directEntries.some((entry) => isCommitUnpushed(entry.item.fullSha, entry.item.sha)),
      };
    })
    .filter((cluster): cluster is MainDirectClusterLayout => cluster != null);
  const renderedMainAnchorByCommitSha = (() => {
    const anchors = new Map<string, AnchorPoint>();
    for (const cluster of mainLayout.commitDotClusters) {
      const vm = buildBranchClusterViewModel(defaultBranch, cluster, mainLayout.branchEndDotIndex);
      const motion = resolveClusterMotion(
        vm.clusterKey,
        { x: vm.preferredAnchorEntry.x, y: vm.preferredAnchorEntry.y },
        vm.memberKeys,
        vm.canExpandCluster,
      );
      const collapsedCanonical = unprojectPoint(motion.anchorX, motion.anchorY);
      if (!motion.isExpanded || vm.count <= 1) {
        vm.renderEntries.forEach((entry) => {
          const sha = entry.item.commit?.fullSha;
          if (!sha) return;
          anchors.set(sha, collapsedCanonical);
        });
        continue;
      }

      vm.renderEntries.forEach((entry) => {
        const sha = entry.item.commit?.fullSha;
        if (!sha) return;
        const memberPose = interpolateExpandedEntryPose(
          { x: motion.anchorX, y: motion.anchorY },
          { x: entry.x, y: entry.y },
          motion.phase,
          motion.phaseEased,
        );
        anchors.set(sha, unprojectPoint(memberPose.x, memberPose.y));
      });
    }
    return anchors;
  })();
  const renderedBranchAnchorByBranchAndSha = (() => {
    const anchors = new Map<string, AnchorPoint>();
    for (const branch of activeBranches) {
      const layout = getBranchRenderLayout(branch);
      for (const cluster of layout.commitDotClusters) {
        const vm = buildBranchClusterViewModel(branch.name, cluster, layout.branchEndDotIndex);
        const motion = resolveClusterMotion(
          vm.clusterKey,
          { x: vm.preferredAnchorEntry.x, y: vm.preferredAnchorEntry.y },
          vm.memberKeys,
          vm.canExpandCluster,
        );
        const collapsedCanonical = unprojectPoint(motion.anchorX, motion.anchorY);
        if (!motion.isExpanded || vm.count <= 1) {
          vm.renderEntries.forEach((entry) => {
            const sha = entry.item.commit?.fullSha;
            if (!sha) return;
            anchors.set(`${branch.name}\0${sha}`, collapsedCanonical);
          });
          continue;
        }

        vm.renderEntries.forEach((entry) => {
          const sha = entry.item.commit?.fullSha;
          if (!sha) return;
          const memberPose = interpolateExpandedEntryPose(
            { x: motion.anchorX, y: motion.anchorY },
            { x: entry.x, y: entry.y },
            motion.phase,
            motion.phaseEased,
          );
          anchors.set(`${branch.name}\0${sha}`, unprojectPoint(memberPose.x, memberPose.y));
        });
      }
    }
    return anchors;
  })();
  const baseLaneTrimRadius = commitRectSize(scaledNodeSize, 0).height / 2;

  function dedupeLaneAnchors(anchors: LaneAnchor[]): LaneAnchor[] {
    return anchors.filter((anchor, index) => {
      const previous = anchors[index - 1];
      if (!previous) return true;
      return Math.abs(previous.x - anchor.x) > 0.5 || Math.abs(previous.y - anchor.y) > 0.5;
    });
  }

  function buildLaneSegments(anchors: LaneAnchor[]): LaneSegment[] {
    const deduped = dedupeLaneAnchors(anchors);
    const segments: LaneSegment[] = [];
    for (let index = 1; index < deduped.length; index += 1) {
      segments.push({ start: deduped[index - 1], end: deduped[index] });
    }
    return segments;
  }

  function trimLaneSegment(segment: LaneSegment): { start: { x: number; y: number }; end: { x: number; y: number } } | null {
    const dx = segment.end.x - segment.start.x;
    const dy = segment.end.y - segment.start.y;
    const distance = Math.hypot(dx, dy);
    if (!Number.isFinite(distance) || distance < 0.5) return null;
    const ux = dx / distance;
    const uy = dy / distance;
    const trimStart = Math.min(segment.start.trimRadius, Math.max(0, distance / 2 - 0.25));
    const trimEnd = Math.min(segment.end.trimRadius, Math.max(0, distance / 2 - 0.25));
    return {
      start: {
        x: segment.start.x + ux * trimStart,
        y: segment.start.y + uy * trimStart,
      },
      end: {
        x: segment.end.x - ux * trimEnd,
        y: segment.end.y - uy * trimEnd,
      },
    };
  }

  function buildMainLaneAnchors(): LaneAnchor[] {
    return dedupeLaneAnchors(
      mainDirectClusters.map((clusterLayout) => {
        const motion = resolveClusterMotion(
          clusterLayout.clusterKey,
          { x: clusterLayout.preferredAnchorX, y: clusterLayout.preferredAnchorY },
          clusterLayout.memberKeys,
          clusterLayout.count > 1,
        );
        const anchor = unprojectPoint(motion.anchorX, motion.anchorY);
        const rectSize = commitRectSize(scaledNodeSize, 0);
        return {
          x: anchor.x,
          y: anchor.y,
          trimRadius: rectSize.height / 2,
          key: clusterLayout.clusterKey,
        };
      })
    );
  }

  function buildBranchLaneAnchors(branch: Branch, layout: BranchRenderLayout): LaneAnchor[] {
    const anchors: LaneAnchor[] = [];
    for (const cluster of layout.commitDotClusters) {
      const { realCommitEntries, renderEntries } = resolveBranchClusterEntries(cluster);
      const count = renderEntries.length;
      if (count <= 0) continue;
      const clusterKey = branchClusterKey(branch.name, cluster);
      const memberKeys = branchClusterMemberKeys(branch.name, cluster);
      const preferredAnchorEntry = branchPreferredAnchorEntry(
        cluster,
        realCommitEntries,
        layout.branchEndDotIndex,
      );
      const motion = resolveClusterMotion(
        clusterKey,
        { x: preferredAnchorEntry.x, y: preferredAnchorEntry.y },
        memberKeys,
        count > 1,
      );
      if (!motion.isExpanded || count <= 1 || motion.phase === 'collapsed') {
        const collapsedCanonical = unprojectPoint(motion.anchorX, motion.anchorY);
        const rectSize = commitRectSize(scaledNodeSize, 0);
        anchors.push({
          x: collapsedCanonical.x,
          y: collapsedCanonical.y,
          trimRadius: rectSize.height / 2,
          key: clusterKey,
        });
        continue;
      }
      renderEntries.forEach((entry) => {
        const memberPose = interpolateExpandedEntryPose(
          { x: motion.anchorX, y: motion.anchorY },
          { x: entry.x, y: entry.y },
          motion.phase,
          motion.phaseEased,
        );
        const memberCanonical = unprojectPoint(memberPose.x, memberPose.y);
        anchors.push({
          x: memberCanonical.x,
          y: memberCanonical.y,
          trimRadius: baseLaneTrimRadius,
          key: `${clusterKey}:${entry.item.index}`,
        });
      });
    }
    return dedupeLaneAnchors(anchors);
  }

  const mainLaneAnchors = buildMainLaneAnchors();
  const mainLaneSegments = buildLaneSegments(mainLaneAnchors);
  // Clumps are closed by default; no checked-out auto-expansion.

  function resolveBranchHeadProjectedPoint(branch: Branch, layout: BranchRenderLayout): { x: number; y: number } {
    let renderedHeadAnchor = renderedBranchAnchorByBranchAndSha.get(`${branch.name}\0${branch.headSha}`);
    if (!renderedHeadAnchor) {
      for (const [key, anchor] of renderedBranchAnchorByBranchAndSha.entries()) {
        const sep = key.indexOf('\0');
        if (sep < 0) continue;
        const keyBranch = key.slice(0, sep);
        const keySha = key.slice(sep + 1);
        if (keyBranch === branch.name && shaMatchesGitRef(keySha, branch.headSha)) {
          renderedHeadAnchor = anchor;
          break;
        }
      }
    }
    if (renderedHeadAnchor) {
      return projectPoint(renderedHeadAnchor.x, renderedHeadAnchor.y);
    }

    const resolveEntryPose = (
      cluster: MarkerCluster<CommitEntryItem>,
      entry: MarkerEntry<CommitEntryItem>,
    ): { x: number; y: number } => {
      const vm = buildBranchClusterViewModel(branch.name, cluster, layout.branchEndDotIndex);
      const motion = resolveClusterMotion(
        vm.clusterKey,
        { x: vm.preferredAnchorEntry.x, y: vm.preferredAnchorEntry.y },
        vm.memberKeys,
        vm.canExpandCluster,
      );
      if (!motion.isExpanded || vm.count <= 1 || motion.phase === 'collapsed') {
        return { x: motion.anchorX, y: motion.anchorY };
      }
      const memberPose = interpolateExpandedEntryPose(
        { x: motion.anchorX, y: motion.anchorY },
        { x: entry.x, y: entry.y },
        motion.phase,
        motion.phaseEased,
      );
      return { x: memberPose.x, y: memberPose.y };
    };

    // Prefer exact head SHA match so connector tips always target the real head node.
    for (const cluster of layout.commitDotClusters) {
      const shaEntry = cluster.entries.find((entry) =>
        shaMatchesGitRef(entry.item.commit?.fullSha, branch.headSha) ||
        shaMatchesGitRef(entry.item.commit?.sha, branch.headSha)
      );
      if (shaEntry) return resolveEntryPose(cluster, shaEntry);
    }

    if (layout.branchEndDotIndex != null) {
      for (const cluster of layout.commitDotClusters) {
        const indexEntry = cluster.entries.find(
          (entry) => entry.item.index === layout.branchEndDotIndex
        );
        if (!indexEntry) continue;
        return resolveEntryPose(cluster, indexEntry);
      }
    }
    // Fallback: use the newest visible commit entry across clusters so connector tips
    // still land on a real rendered marker even when the exact index is absent.
    let fallbackCluster: MarkerCluster<CommitEntryItem> | null = null;
    let fallbackEntry: MarkerEntry<CommitEntryItem> | null = null;
    for (const cluster of layout.commitDotClusters) {
      for (const entry of cluster.entries) {
        if (!fallbackEntry || entry.item.index > fallbackEntry.item.index) {
          fallbackEntry = entry;
          fallbackCluster = cluster;
        }
      }
    }
    if (fallbackCluster && fallbackEntry) {
      return resolveEntryPose(fallbackCluster, fallbackEntry);
    }
    return projectPoint(layout.lanePosX, layout.branchLineTipY);
  }

  const branchHeadTargets: BranchHeadTarget[] = [
    ...renderBranches.map((branch) => {
      const layout = getBranchRenderLayout(branch);
      return {
        branchName: branch.name,
        headSha: branch.headSha,
        point: resolveBranchHeadProjectedPoint(branch, layout),
      };
    }),
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

    for (const branch of renderBranches) {
      const layout = getBranchRenderLayout(branch);
      for (const cluster of layout.commitDotClusters) {
        for (const entry of cluster.entries) {
          add(entry.item.commit?.fullSha, branch.name);
        }
      }
      add(branch.headSha, branch.name);
    }
    for (const commit of directCommits) {
      add(commit.fullSha, defaultBranch);
    }
    if (checkedOutBranchName === defaultBranch && checkedOutHeadSha) {
      add(checkedOutHeadSha, defaultBranch);
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
  const pushableBranchByName = new Map(
    [
      ...(checkedOutBranchName === defaultBranch
        ? [{ name: defaultBranch, headSha: checkedOutHeadSha ?? '', unpushedCommits: unpushedDirectCommits.length, remoteSyncStatus: 'unpushed' as const }]
        : []),
      ...activeBranches,
    ]
      .filter(
        (branch) =>
          !branch.name.startsWith('*') &&
          branch.unpushedCommits > 0 &&
          branch.remoteSyncStatus !== 'on-github',
      )
      .map((branch) => [branch.name, branch] as const),
  );
  const pushableRemoteBranchCount = pushableBranchByName.size;
  const canPushCurrentBranch =
    !checkedOutIsDetached &&
    !!checkedOutBranchName &&
    pushableBranchByName.has(checkedOutBranchName);
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
  const resolvePushBranch = (targetSha: string): string | null => {
    const candidates = branchCandidatesForCommit(targetSha).filter((branchName) =>
      pushableBranchByName.has(branchName)
    );
    if (candidates.length === 0) return null;
    const explicitlySelectedBranch = selectedBranchList.find((branchName) => candidates.includes(branchName));
    if (explicitlySelectedBranch) return explicitlySelectedBranch;
    if (candidates.length === 1) return candidates[0];
    if (checkedOutBranchName && candidates.includes(checkedOutBranchName)) return checkedOutBranchName;
    return candidates[0];
  };
  const selectedPushTargets = Array.from(
    selectedVisibleCommitShas.reduce((byBranch, sha) => {
      const targetBranch = resolvePushBranch(sha);
      if (!targetBranch) return byBranch;
      const branch = pushableBranchByName.get(targetBranch);
      if (!branch) return byBranch;
      const unpushedPreviews = commitPreviewListForBranch(targetBranch).slice(0, branch.unpushedCommits);
      const targetIndex = unpushedPreviews.findIndex((commit) => commit.fullSha === sha);
      if (targetIndex === -1) return byBranch;

      const existing = byBranch.get(targetBranch);
      if (!existing || targetIndex < existing.targetIndex) {
        byBranch.set(targetBranch, {
          branchName: targetBranch,
          targetSha: sha,
          targetIndex,
          commitCount: unpushedPreviews.length - targetIndex,
        });
      }
      return byBranch;
    }, new Map<string, { branchName: string; targetSha: string; targetIndex: number; commitCount: number }>())
      .values()
  );
  const selectedBranchPushTargets = selectedBranchList
    .map((branchName) => {
      const branch = pushableBranchByName.get(branchName);
      if (!branch || !branch.headSha) return null;
      const previews = commitPreviewListForBranch(branchName);
      const commitCount = Math.max(1, Math.min(branch.unpushedCommits, previews.length || branch.unpushedCommits));
      return {
        branchName,
        targetSha: branch.headSha,
        targetIndex: 0,
        commitCount,
      };
    })
    .filter((target): target is { branchName: string; targetSha: string; targetIndex: number; commitCount: number } => !!target);
  const selectedPushTargetMap = new Map<string, { branchName: string; targetSha: string; targetIndex: number; commitCount: number }>();
  for (const target of selectedPushTargets) {
    selectedPushTargetMap.set(target.branchName, target);
  }
  for (const target of selectedBranchPushTargets) {
    if (!selectedPushTargetMap.has(target.branchName)) {
      selectedPushTargetMap.set(target.branchName, target);
    }
  }
  const resolvedSelectedPushTargets = Array.from(selectedPushTargetMap.values());
  const hasSelection = selectedVisibleCommitShas.length > 0 || selectedBranchList.length > 0;
  const selectedDeletableBranchNames = selectedBranchList.filter(
    (branchName) => branchName !== defaultBranch && freshCopyBranchNames.has(branchName)
  );
  const hasSelectedUncommittedChanges = selectedVisibleCommitShas.includes('WORKING_TREE');
  const selectedStashIndices = Array.from(
    new Set(
      selectedVisibleCommitShas
        .map((sha) => {
          const match = /^STASH:(\d+)$/.exec(sha);
          return match ? parseInt(match[1], 10) : null;
        })
        .filter((n): n is number => n != null && Number.isFinite(n)),
    ),
  ).sort((a, b) => a - b);
  const deletableSelectionCount =
    selectedDeletableBranchNames.length +
    (hasSelectedUncommittedChanges ? 1 : 0) +
    selectedStashIndices.length;
  const deleteSelectionItems = [
    ...selectedDeletableBranchNames.map((branchName) => `Branch: ${branchName}`),
    ...(hasSelectedUncommittedChanges ? ['Uncommitted changes'] : []),
    ...selectedStashIndices.map((idx) => `Stash ${idx + 1}`),
  ];
  deletableSelectionCountRef.current = deletableSelectionCount;
  const pushCurrentBranchLabel = checkedOutBranchName ? `Push ${checkedOutBranchName}` : 'Push current branch';
  const selectedPushLabel = resolvedSelectedPushTargets.length === 1
    ? resolvedSelectedPushTargets[0].commitCount > 1
      ? `Push ${resolvedSelectedPushTargets[0].commitCount} commits on ${resolvedSelectedPushTargets[0].branchName}`
      : `Push ${resolvedSelectedPushTargets[0].targetSha.slice(0, 7)} on ${resolvedSelectedPushTargets[0].branchName}`
    : `Push ${resolvedSelectedPushTargets.length} selected ranges`;
  const selectedPushTitle = resolvedSelectedPushTargets.length === 1
    ? `Push ${resolvedSelectedPushTargets[0].branchName} through ${resolvedSelectedPushTargets[0].targetSha.slice(0, 7)}, including the earlier unpushed commits in that range`
    : 'Push each selected branch through its newest selected unpushed commit, including the earlier unpushed commits in that range';

  async function handlePushSelectedTargets() {
    if (!onPushCommitTargets || pushInProgress || resolvedSelectedPushTargets.length === 0) return;
    await onPushCommitTargets(resolvedSelectedPushTargets.map(({ branchName, targetSha }) => ({ branchName, targetSha })));
    setSelectedCommitShas([]);
    setSelectedBranchNames([]);
    setMergeTargetCommitSha(null);
  }

  async function handleConfirmDeleteSelection() {
    if (!onDeleteSelection || deleteInProgress || deletableSelectionCount === 0) return;
    await onDeleteSelection({
      branchNames: selectedDeletableBranchNames,
      discardUncommittedChanges: hasSelectedUncommittedChanges,
      stashIndices: selectedStashIndices.length > 0 ? selectedStashIndices : undefined,
    });
    setDeleteConfirmOpen(false);
    setSelectedCommitShas([]);
    setSelectedBranchNames([]);
    setMergeTargetCommitSha(null);
  }

  async function handleConfirmCommit() {
    if (!onCommitLocalChanges || commitInProgress) return;
    const ok = await onCommitLocalChanges(commitMessageDraft);
    if (ok) {
      setCommitMessageDraft('');
      setCommitDialogOpen(false);
    }
  }

  const handleCommitMessageKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      void handleConfirmCommit();
    }
  };

  const handleOrientationChange = (nextOrientation: OrientationMode) => {
    if (nextOrientation === orientation) return;
    if (orientationSwitchFadeTimeoutRef.current !== null) {
      clearTimeout(orientationSwitchFadeTimeoutRef.current);
      orientationSwitchFadeTimeoutRef.current = null;
    }
    setIsOrientationSwitchFading(true);
    pendingOrientationAutoCenterRef.current = true;
    setOrientation(nextOrientation);
    orientationSwitchFadeTimeoutRef.current = window.setTimeout(() => {
      orientationSwitchFadeTimeoutRef.current = null;
      setIsOrientationSwitchFading(false);
    }, ORIENTATION_SWITCH_FADE_MS);
  };

  return (
    <div className="relative h-full">
      <div
        ref={scrollRef}
        onMouseDown={handleCanvasMouseDown}
        className={`w-full h-full overflow-hidden branch-map-scroll relative select-none touch-none ${nodeDragDisplay ? 'cursor-grabbing' : isPanning ? 'cursor-grabbing' : spaceHeld ? 'cursor-grab' : 'cursor-default'}`}
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
            willChange: isOrientationSwitchFading ? 'transform, opacity' : 'transform',
            opacity: isOrientationSwitchFading ? 0.9 : 1,
            transition: `opacity ${ORIENTATION_SWITCH_FADE_MS}ms ease-out`,
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


                  {/* ── Main timeline + merge nodes ── */}
                  <g
                    style={{ opacity: mainTimelineOpacity, transition: 'opacity 0.15s' }}
                    onMouseEnter={() => setHoveredBranch(defaultBranch)}
                    onMouseLeave={() => clearMainBranchHover()}
                  >
                    {!mainIsUnifiedRender && (
                      <>
                        {mainLaneSegments.map((segment) => {
                          const trimmed = trimLaneSegment(segment);
                          if (!trimmed) return null;
                          return (
                            <path
                              key={`main-hit:${segment.start.key}:${segment.end.key}`}
                              d={buildStraightPath(trimmed.start, trimmed.end, pathCoord)}
                              fill="none"
                              stroke="transparent"
                              strokeWidth={branchHitStrokeWidth}
                              style={{ pointerEvents: branchLaneHitPointerEvents }}
                            />
                          );
                        })}
                        {mainLaneSegments.map((segment) => {
                          const trimmed = trimLaneSegment(segment);
                          if (!trimmed) return null;
                          return (
                            <path
                              key={`main-segment:${segment.start.key}:${segment.end.key}`}
                              d={buildStraightPath(trimmed.start, trimmed.end, pathCoord)}
                              fill="none"
                              stroke={CANVAS_NEUTRAL_GRAY}
                              strokeWidth={0.75}
                              pathLength={1}
                              className={drawPathMainClass}
                              style={{
                                '--delay': `${MAIN_DRAW_MS}ms`,
                              } as React.CSSProperties}
                            />
                          );
                        })}

                        <g className={fadeInInfoClass} style={{ '--delay': `${MAIN_DRAW_MS + INFO_OFFSET}ms` } as React.CSSProperties}>
                          {/* Direct commits */}
                          {mainDirectClusters.map((clusterLayout) => {
                            const {
                              cluster,
                              count,
                              first,
                              last,
                              clusterKey,
                              clusterHasMainTip,
                              clusterCheckoutAccent,
                              clusterHasSelectedCommit,
                              memberKeys,
                              preferredAnchorX,
                              preferredAnchorY,
                            } = clusterLayout;
                            const countLabel = stackCountLabel(count);
                            const motion = resolveClusterMotion(
                              clusterKey,
                              { x: preferredAnchorX, y: preferredAnchorY },
                              memberKeys,
                              count > 1,
                            );
                            const anchorX = motion.anchorX;
                            const anchorY = motion.anchorY;

                            if (count === 1) {
                              const c = last;
                              const isUncommittedCommit =
                                c.fullSha === 'WORKING_TREE' || c.kind === 'uncommitted';
                              const isStashCommit = isStashCommitLike(c);
                              const isUnpushedCommit = isCommitUnpushed(c.fullSha, c.sha);
                              const label = truncatePrompt(c.message, COMMIT_TOOLTIP_PREVIEW_MAX);
                              const rectSize = commitRectSize(scaledNodeSize);
                              const mainSingleHitPad = worldPx(6);
                              const mainSingleHit = collapsedClumpHitRect(anchorX, anchorY, rectSize, mainSingleHitPad);
                              return (
                                <g key={clusterKey}>
                                  <g
                                    style={{
                                      pointerEvents: 'none',
                                      opacity: (isUncommittedCommit || isStashCommit) && nodeDragDisplay?.nodeId === c.fullSha ? 0 : 1,
                                    }}
                                  >
                                    {renderCommitNodeShapeRect({
                                      x: anchorX - rectSize.width / 2 + CANVAS_NODE_STROKE_INSET,
                                      y: anchorY - rectSize.height / 2 + CANVAS_NODE_STROKE_INSET,
                                      width: rectSize.width - CANVAS_NODE_STROKE_WIDTH,
                                      height: rectSize.height - CANVAS_NODE_STROKE_WIDTH,
                                      fill: getNodeFillColor(
                                        clusterKey,
                                        isStashCommit || isUncommittedCommit || isUnpushedCommit
                                          ? CANVAS_UNPUSHED_NODE_FILL
                                          : CANVAS_NODE_FILL,
                                        clusterCheckoutAccent,
                                        clusterHasSelectedCommit || (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                      ),
                                      stroke: getNodeStrokeColor(
                                        clusterKey,
                                        stashOrUncommittedBaseStroke(isStashCommit, isUncommittedCommit),
                                        clusterCheckoutAccent,
                                        clusterHasSelectedCommit || (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                      ),
                                      strokeWidth: CANVAS_NODE_STROKE_WIDTH,
                                      dashed: isUncommittedCommit || isStashCommit,
                                    })}
                                  </g>
                                  <rect
                                    x={mainSingleHit.x}
                                    y={mainSingleHit.y}
                                    width={mainSingleHit.width}
                                    height={mainSingleHit.height}
                                    fill="transparent"
                                    style={{ cursor: (isUncommittedCommit || isStashCommit) && onCreateBranchFromNode ? 'grab' : 'pointer' }}
                                    onMouseDown={(event) => {
                                      if ((isUncommittedCommit || isStashCommit) && onCreateBranchFromNode) {
                                        beginNodeDrag(event, c.fullSha, anchorX, anchorY);
                                      }
                                    }}
                                    onClick={(event) =>
                                      handleCommitNodeClick(
                                        event,
                                        c.fullSha,
                                        clusterHasMainTip ? defaultBranch : undefined,
                                      )
                                    }
                                    onDoubleClick={(event) => event.stopPropagation()}
                                    onMouseEnter={() => {
                                      setHoveredBranch(defaultBranch);
                                      handleNodeHoverEnter(clusterKey, defaultBranch);
                                      setTooltip({
                                        x: anchorX,
                                        y: anchorY,
                                        lines: [
                                          isStashCommit
                                            ? shortShaLabel(c.fullSha)
                                            : isUncommittedCommit
                                              ? 'Uncommited Changes'
                                              : `Commit ${c.sha}`,
                                          label,
                                          `@${c.author} · ${fmtTooltipDate(c.date)}`,
                                        ],
                                        avatarFallback: c.author?.charAt(0).toUpperCase() || '?',
                                      });
                                    }}
                                    onMouseLeave={() => {
                                      handleNodeHoverLeave();
                                      clearMainBranchHover();
                                      setTooltip(null);
                                    }}
                                  />
                                </g>
                              );
                            }

                            const isExpanded = motion.isExpanded;
                            const phase = motion.phase;
                            const phaseEased = motion.phaseEased;
                            const rectSize = nodeRectSize(count);
                            const localRect = commitRectSize(scaledNodeSize, 0);

                            const rangeLine = fmtClumpDateRange(first.date, last.date);
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
                                    {renderCommitNodeShapeRect({
                                      x: anchorX - rectSize.width / 2 + CANVAS_NODE_STROKE_INSET,
                                      y: anchorY - rectSize.height / 2 + CANVAS_NODE_STROKE_INSET,
                                      width: rectSize.width - CANVAS_NODE_STROKE_WIDTH,
                                      height: rectSize.height - CANVAS_NODE_STROKE_WIDTH,
                                      fill: getNodeFillColor(
                                        clusterKey,
                                        CANVAS_NODE_FILL,
                                        clusterCheckoutAccent,
                                        clusterHasSelectedCommit || (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                      ),
                                      stroke: getNodeStrokeColor(
                                        clusterKey,
                                        CANVAS_NODE_STROKE,
                                        clusterCheckoutAccent,
                                        clusterHasSelectedCommit || (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                      ),
                                      strokeWidth: CANVAS_NODE_STROKE_WIDTH,
                                    })}
                                    <text
                                      x={anchorX + rectSize.width / 2 - nodeFrameLabelRightInsetX}
                                      y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                                      textAnchor="end"
                                      fontSize={nodeFrameLabelFontSize}
                                      fill={getNodeFrameTitleColor(
                                        clusterKey,
                                        clusterCheckoutAccent,
                                        clusterHasSelectedCommit || (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                      )}
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
                                        setHoveredBranch(defaultBranch);
                                        handleNodeHoverEnter(clusterKey, defaultBranch);
                                        setTooltip({
                                          x: anchorX,
                                          y: anchorY,
                                          lines: [`${count} commits`, latestCommitMessage, `and ${count - 1} more commits`, `@${last.author} · ${rangeLine}`],
                                          avatarFallback: last.author?.charAt(0).toUpperCase() || '?',
                                        });
                                      }}
                                      onMouseLeave={() => {
                                        handleNodeHoverLeave();
                                        clearMainBranchHover();
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
                                      const memberPose = interpolateExpandedEntryPose(
                                        { x: anchorX, y: anchorY },
                                        { x: entry.x, y: entry.y },
                                        phase,
                                        phaseEased,
                                      );
                                      const commitKey = `direct:${c.fullSha}`;
                                      const isUncommittedCommit =
                                        c.fullSha === 'WORKING_TREE' || c.kind === 'uncommitted';
                                      const isStashCommit = isStashCommitLike(c);
                                      const isUnpushedCommit = isCommitUnpushed(c.fullSha, c.sha);
                                      const commitCheckoutAccent = mergeCheckoutAccent(
                                        checkedOutHeadSha != null && shaMatchesGitRef(c.fullSha, checkedOutHeadSha),
                                        defaultBranch,
                                        c.fullSha,
                                        c.sha,
                                      );
                                      return (
                                        <g
                                          key={commitKey}
                                          transform={`translate(${memberPose.x} ${memberPose.y})`}
                                          style={{ ...clumpAnimStyleForPhase(phase), pointerEvents: phase === 'expanded' ? 'auto' : 'none' }}
                                          opacity={memberPose.opacity}
                                        >
                                          <g transform={`scale(${memberPose.scale})`}>
                                            <g
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
                                                setHoveredBranch(defaultBranch);
                                                handleNodeHoverEnter(commitKey, defaultBranch);
                                                setTooltip({
                                                  x: entry.x,
                                                  y: entry.y,
                                                  lines: [
                                                    isStashCommit
                                                      ? shortShaLabel(c.fullSha)
                                                      : isUncommittedCommit
                                                        ? 'Uncommited Changes'
                                                        : `Commit ${c.sha}`,
                                                    label,
                                                    `@${c.author} · ${fmtTooltipDate(c.date)}`,
                                                  ],
                                                  avatarFallback: c.author?.charAt(0).toUpperCase() || '?',
                                                });
                                              }}
                                              onMouseLeave={() => {
                                                handleNodeHoverLeave();
                                                clearMainBranchHover();
                                                setTooltip(null);
                                              }}
                                            >
                                              {renderCommitNodeShapeRect({
                                                x: -localRect.width / 2 + CANVAS_NODE_STROKE_INSET,
                                                y: -localRect.height / 2 + CANVAS_NODE_STROKE_INSET,
                                                width: localRect.width - CANVAS_NODE_STROKE_WIDTH,
                                                height: localRect.height - CANVAS_NODE_STROKE_WIDTH,
                                                fill: getNodeFillColor(
                                                  commitKey,
                                                  isStashCommit || isUncommittedCommit || isUnpushedCommit
                                                    ? CANVAS_UNPUSHED_NODE_FILL
                                                    : CANVAS_NODE_FILL,
                                                  commitCheckoutAccent,
                                                  selectedCommitShaSet.has(c.fullSha) ||
                                                    (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                                ),
                                                stroke: getNodeStrokeColor(
                                                  commitKey,
                                                  stashOrUncommittedBaseStroke(isStashCommit, isUncommittedCommit),
                                                  commitCheckoutAccent,
                                                  selectedCommitShaSet.has(c.fullSha) ||
                                                  (clusterHasMainTip &&
                                                    selectedBranchNameSet.has(defaultBranch) &&
                                                    c.fullSha === latestMainCommitSha),
                                                ),
                                                strokeWidth: CANVAS_NODE_STROKE_WIDTH,
                                                dashed: isUncommittedCommit || isStashCommit,
                                              })}
                                            </g>
                                          </g>
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
                              const dateRangeLabel = fmtClumpDateRange(firstDate, lastDate);
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
                                        lines: [`${count} prompts`, latestPrompt, `and ${count - 1} more prompts`, `${lastEntry.item.marker.agent} · ${dateRangeLabel}`],
                                      })
                                    }
                                    onMouseLeave={() => setTooltip(null)}
                                  />
                                </g>
                              );
                            });
                          })()}

                        </g>
                      </>
                    )}
                  </g>

                  {/* ── Active branches ── */}
                  <g>
                    {(() => {
                      const orderedActiveBranches = orderedActiveBranchesForLayer({
                        includeSelectedPriority: true,
                      });

                      return orderedActiveBranches.map((b) => {
                        const {
                          uniqueAheadCount,
                          branchEndDotIndex,
                          localCommitDotIndices,
                          fullBranchShouldUseLocalGray,
                          hasUncommittedPreview,
                          localSegmentStartY,
                          commitDotClusters,
                          promptMarkerClusters,
                          brDelay,
                          showClockIcon,
                          clockPoint,
                          forkY,
                          startX,
                          mergeTargetX,
                          mergeTargetY,
                        } = getBranchRenderLayout(b);
                        const layout = getBranchRenderLayout(b);
                        const branchLaneAnchors = buildBranchLaneAnchors(b, layout);
                        const branchLaneSegments = buildLaneSegments(branchLaneAnchors);
                        const firstLaneAnchor = branchLaneAnchors[0];
                        const lastLaneAnchor = branchLaneAnchors[branchLaneAnchors.length - 1];
                        const renderedBranchHead = resolveBranchHeadProjectedPoint(b, layout);
                        const renderedBranchHeadCanonical = unprojectPoint(renderedBranchHead.x, renderedBranchHead.y);
                        const animatedLine = resolveAnimatedBranchLineGeometry(`branch-line:${b.name}`, {
                          startX,
                          forkY,
                          lanePosX: renderedBranchHeadCanonical.x,
                          tipY: renderedBranchHeadCanonical.y,
                          mergeTargetX,
                          mergeTargetY,
                          localSegmentStartY: localSegmentStartY ?? null,
                        });
                        const routeCornerR = GRID_ROUTE_CORNER_R;
                        const forkConnectorTip = firstLaneAnchor ?? {
                          x: animatedLine.lanePosX,
                          y: animatedLine.tipY,
                          trimRadius: baseLaneTrimRadius,
                          key: `${b.name}:fallback-tip`,
                        };
                        const forkConnectorPath = buildBranchOrthogonalPath({
                          startX: animatedLine.startX,
                          forkY: animatedLine.forkY,
                          laneX: forkConnectorTip.x,
                          tipY: forkConnectorTip.y - forkConnectorTip.trimRadius,
                          cornerR: routeCornerR,
                          pointFormatter: pathCoord,
                        });
                        const hitForkConnectorPath = buildBranchOrthogonalPath({
                          startX: animatedLine.startX,
                          forkY: animatedLine.forkY,
                          laneX: forkConnectorTip.x,
                          tipY: forkConnectorTip.y,
                          cornerR: routeCornerR,
                          pointFormatter: pathCoord,
                        });
                        const mergeBackPath =
                          animatedLine.mergeTargetY != null &&
                            animatedLine.mergeTargetX != null &&
                            Math.abs(animatedLine.lanePosX - animatedLine.mergeTargetX) > 0.5
                            ? buildMergeOrthogonalPath({
                              laneX: lastLaneAnchor?.x ?? animatedLine.lanePosX,
                              tipY: (lastLaneAnchor?.y ?? animatedLine.tipY) - (lastLaneAnchor?.trimRadius ?? baseLaneTrimRadius),
                              mergeX: animatedLine.mergeTargetX,
                              mergeY: animatedLine.mergeTargetY,
                              cornerR: routeCornerR,
                              pointFormatter: pathCoord,
                            })
                            : null;
                        const strokeWidth = 0.75;
                        const strokeColor = CANVAS_NEUTRAL_GRAY;
                        const unpushedStrokeWidth = strokeWidth + UNPUSHED_LANE_STROKE_VISUAL_COMP;
                        const unpushedLaneDasharray = `${Math.max(1, unpushedStrokeWidth)} ${Math.max(2, unpushedStrokeWidth * 1.8)}`;
                        const isEmptyBranch = uniqueAheadCount <= 0;
                        const shouldDashLocalLane = hasUncommittedPreview || isEmptyBranch;
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
                              d={hitForkConnectorPath}
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
                            {branchLaneSegments.map((segment) => {
                              const trimmed = trimLaneSegment(segment);
                              if (!trimmed) return null;
                              return (
                                <path
                                  key={`branch-hit:${segment.start.key}:${segment.end.key}`}
                                  d={buildStraightPath(trimmed.start, trimmed.end, pathCoord)}
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
                              );
                            })}

                            {/* Branch path — draws in. key="arc" keeps the DOM node stable so the
                      CSS animation is never restarted when sibling elements change. */}
                            <path
                              key="arc"
                              d={forkConnectorPath}
                              fill="none"
                              stroke={strokeColor}
                              strokeWidth={fullBranchShouldUseLocalGray ? unpushedStrokeWidth : strokeWidth}
                              strokeDasharray={fullBranchShouldUseLocalGray && shouldDashLocalLane ? unpushedLaneDasharray : undefined}
                              strokeLinecap={fullBranchShouldUseLocalGray && shouldDashLocalLane ? 'round' : undefined}
                              pathLength={fullBranchShouldUseLocalGray ? undefined : 1}
                              className={drawPathArcClass}
                              style={{
                                '--delay': `${brDelay}ms`,
                              } as React.CSSProperties}
                            />
                            {branchLaneSegments.map((segment) => {
                              const trimmed = trimLaneSegment(segment);
                              if (!trimmed) return null;
                              return (
                                <path
                                  key={`branch-segment:${segment.start.key}:${segment.end.key}`}
                                  d={buildStraightPath(trimmed.start, trimmed.end, pathCoord)}
                                  fill="none"
                                  stroke={fullBranchShouldUseLocalGray ? CANVAS_NEUTRAL_GRAY : strokeColor}
                                  strokeWidth={fullBranchShouldUseLocalGray ? unpushedStrokeWidth : strokeWidth}
                                  strokeDasharray={fullBranchShouldUseLocalGray && shouldDashLocalLane ? unpushedLaneDasharray : undefined}
                                  strokeLinecap={fullBranchShouldUseLocalGray && shouldDashLocalLane ? 'round' : undefined}
                                  pathLength={fullBranchShouldUseLocalGray ? undefined : 1}
                                  className={drawPathArcClass}
                                  style={{
                                    '--delay': `${brDelay}ms`,
                                  } as React.CSSProperties}
                                />
                              );
                            })}
                            {mergeBackPath && (
                              <path
                                d={mergeBackPath}
                                fill="none"
                                stroke={strokeColor}
                                strokeWidth={fullBranchShouldUseLocalGray ? unpushedStrokeWidth : strokeWidth}
                                strokeDasharray={fullBranchShouldUseLocalGray && shouldDashLocalLane ? unpushedLaneDasharray : undefined}
                                strokeLinecap={fullBranchShouldUseLocalGray && shouldDashLocalLane ? 'round' : undefined}
                                className={drawPathArcClass}
                                style={{
                                  '--delay': `${brDelay}ms`,
                                } as React.CSSProperties}
                              />
                            )}
                            {!fullBranchShouldUseLocalGray && localSegmentStartY != null && (
                              <path
                                d={`M ${pathCoord(animatedLine.lanePosX, animatedLine.localSegmentStartY ?? animatedLine.tipY)} L ${pathCoord(lastLaneAnchor?.x ?? animatedLine.lanePosX, (lastLaneAnchor?.y ?? animatedLine.tipY) - (lastLaneAnchor?.trimRadius ?? baseLaneTrimRadius))}`}
                                fill="none"
                                stroke={CANVAS_NEUTRAL_GRAY}
                                strokeWidth={unpushedStrokeWidth}
                                strokeDasharray={shouldDashLocalLane ? unpushedLaneDasharray : undefined}
                                strokeLinecap={shouldDashLocalLane ? 'round' : undefined}
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
                                const vm = buildBranchClusterViewModel(b.name, cluster, branchEndDotIndex);
                                const motion = resolveClusterMotion(
                                  vm.clusterKey,
                                  { x: vm.preferredAnchorEntry.x, y: vm.preferredAnchorEntry.y },
                                  vm.memberKeys,
                                  vm.canExpandCluster,
                                );
                                const anchorX = motion.anchorX;
                                const anchorY = motion.anchorY;
                                const dotShouldUseCanvasFill =
                                  fullBranchShouldUseLocalGray ||
                                  cluster.entries.every((entry) => localCommitDotIndices.has(entry.item.index));
                                const dotFill = dotShouldUseCanvasFill ? CANVAS_UNPUSHED_NODE_FILL : CANVAS_NODE_FILL;
                                const dotStrokeWidth = CANVAS_NODE_STROKE_WIDTH;
                                const dotStrokeInset = dotStrokeWidth / 2;
                                const dotStrokeDasharray = undefined;
                                const clusterHasBranchTip =
                                  branchEndDotIndex != null &&
                                  cluster.entries.some((entry) => entry.item.index === branchEndDotIndex);
                                const clusterHasPrimaryCheckoutHead =
                                  checkedOutHeadSha != null &&
                                  cluster.entries.some((entry) => {
                                    const idx = entry.item.index;
                                    const commit = entry.item.commit;
                                    if (commit && commit.kind !== 'branch-created') {
                                      return (
                                        shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                                        shaMatchesGitRef(commit.sha, checkedOutHeadSha)
                                      );
                                    }
                                    if (checkedOutBranchName === b.name && branchEndDotIndex === idx) {
                                      return shaMatchesGitRef(b.headSha, checkedOutHeadSha);
                                    }
                                    return false;
                                  });
                                const clusterHasOtherWorktreeHead = cluster.entries.some((entry) => {
                                  const idx = entry.item.index;
                                  const commit = entry.item.commit;
                                  if (commit && commit.kind !== 'branch-created') {
                                    return otherWorktreeMatchesBranchCommit(b.name, commit.fullSha, commit.sha ?? '');
                                  }
                                  if (branchEndDotIndex === idx) {
                                    return otherWorktreeMatchesBranchCommit(
                                      b.name,
                                      b.headSha,
                                      b.headSha.slice(0, 7),
                                    );
                                  }
                                  return false;
                                });
                                const clusterCheckoutAccent = clusterHasPrimaryCheckoutHead
                                  ? 'primary'
                                  : clusterHasOtherWorktreeHead
                                    ? 'other'
                                    : 'none';
                                const clusterHasSelectedCommit =
                                  cluster.entries.some((entry) => {
                                    const commitSha = entry.item.commit?.fullSha;
                                    return !!commitSha && selectedCommitShaSet.has(commitSha);
                                  });
                                const clusterHasSelectedHead =
                                  clusterHasBranchTip &&
                                  selectedBranchNameSet.has(b.name);

                                if (vm.count <= 1) {
                                  const commitEntry = vm.renderEntries[0] ?? cluster.entries[cluster.entries.length - 1];
                                  const commit = commitEntry.item.commit;
                                  const isNonCommitPlaceholder = !commit && uniqueAheadCount <= 0;
                                  const isUncommittedCommit = commit?.kind === 'uncommitted';
                                  const isStashCommit = commit ? isStashCommitLike(commit) : false;
                                  const isLocalCommit =
                                    !isNonCommitPlaceholder && localCommitDotIndices.has(commitEntry.item.index);
                                  const isUnpushedCommit =
                                    !!commit &&
                                    !isUncommittedCommit &&
                                    !isStashCommit &&
                                    isCommitUnpushed(commit.fullSha, commit.sha);
                                  const targetCommitSha = commit?.fullSha ?? b.headSha;
                                  const tooltipAuthor = commit?.author ?? b.lastCommitAuthor;
                                  const tooltipDate = commit?.date ?? b.lastCommitDate;
                                  const tooltipSha = commit?.sha ?? b.headSha?.slice(0, 7) ?? '-------';
                                  const tooltipTitle = isStashCommit
                                    ? shortShaLabel(commit?.fullSha)
                                    : isUncommittedCommit
                                      ? 'Uncommited changes'
                                      : `Commit ${tooltipSha}`;
                                  const tooltipMessage = commit?.message;
                                  const showBranchAvatar = !!(
                                    commit &&
                                    b.lastCommitAuthorAvatar &&
                                    commit.author === b.lastCommitAuthor
                                  );
                                  const rectSize = commitRectSize(scaledNodeSize);
                                  const isGhostRect = isNonCommitPlaceholder;
                                  const ghostRectStrokeWidth = unpushedStrokeWidth;
                                  const singleCommitHitPad = worldPx(6);
                                  const singleCommitHit = collapsedClumpHitRect(
                                    anchorX,
                                    anchorY,
                                    rectSize,
                                    singleCommitHitPad,
                                  );
                                  return (
                                    <g key={vm.clusterKey}>
                                      <g
                                        style={{
                                          pointerEvents: 'none',
                                          opacity: (isUncommittedCommit || isStashCommit) && nodeDragDisplay?.nodeId === targetCommitSha ? 0 : 1,
                                        }}
                                      >
                                        {renderCommitNodeShapeRect({
                                          x: anchorX - rectSize.width / 2 + dotStrokeInset,
                                          y: anchorY - rectSize.height / 2 + dotStrokeInset,
                                          width: rectSize.width - dotStrokeWidth,
                                          height: rectSize.height - dotStrokeWidth,
                                          fill: getNodeFillColor(
                                            vm.clusterKey,
                                            isStashCommit || isUncommittedCommit || isLocalCommit || isUnpushedCommit
                                              ? CANVAS_UNPUSHED_NODE_FILL
                                              : dotFill,
                                            clusterCheckoutAccent,
                                            clusterHasSelectedCommit || clusterHasSelectedHead,
                                            isGhostRect,
                                          ),
                                          stroke: getNodeStrokeColor(
                                            vm.clusterKey,
                                            isGhostRect
                                              ? LOCAL_UNPUSHED_GRAY
                                              : stashOrUncommittedBaseStroke(isStashCommit, !!isUncommittedCommit),
                                            clusterCheckoutAccent,
                                            clusterHasSelectedCommit || clusterHasSelectedHead,
                                            isGhostRect,
                                          ),
                                          strokeWidth: isGhostRect ? ghostRectStrokeWidth : dotStrokeWidth,
                                          dashed: isGhostRect || isUncommittedCommit || isStashCommit,
                                        })}
                                      </g>
                                      <rect
                                        x={singleCommitHit.x}
                                        y={singleCommitHit.y}
                                        width={singleCommitHit.width}
                                        height={singleCommitHit.height}
                                        fill="transparent"
                                        style={{ cursor: (isUncommittedCommit || isStashCommit) && onCreateBranchFromNode ? 'grab' : 'pointer' }}
                                        onMouseDown={(event) => {
                                          if ((isUncommittedCommit || isStashCommit) && onCreateBranchFromNode) {
                                            beginNodeDrag(event, targetCommitSha, anchorX, anchorY);
                                          }
                                        }}
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
                                          handleNodeHoverEnter(vm.clusterKey, b.name);
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
                                                tooltipTitle,
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

                                const firstRealEntry = vm.renderEntries[0] ?? cluster.entries[0];
                                const lastRealEntry = vm.renderEntries[vm.renderEntries.length - 1] ?? cluster.entries[cluster.entries.length - 1];
                                const firstDate = firstRealEntry.item.commit?.date ?? b.lastCommitDate;
                                const lastDate = lastRealEntry.item.commit?.date ?? b.lastCommitDate;
                                const dateRangeLabel = fmtClumpDateRange(firstDate, lastDate);
                                const latestAuthor = lastRealEntry.item.commit?.author ?? b.lastCommitAuthor;
                                const latestCommitMessage = lastRealEntry.item.commit?.message
                                  ? truncatePrompt(lastRealEntry.item.commit.message, COMMIT_CLUSTER_PREVIEW_MAX)
                                  : `on ${b.name}`;

                                const showClumpAvatar = !!(
                                  b.lastCommitAuthorAvatar &&
                                  latestAuthor === b.lastCommitAuthor
                                );

                                const clusterHasUncommitted = vm.renderEntries.some(
                                  (entry) =>
                                    entry.item.commit?.kind === 'uncommitted' ||
                                    entry.item.commit?.fullSha === 'WORKING_TREE',
                                );
                                const clusterHasStash = vm.renderEntries.some(
                                  (entry) =>
                                    !!entry.item.commit && isStashCommitLike(entry.item.commit),
                                );
                                const clusterHasLocalCommits = vm.renderEntries.some((entry) =>
                                  localCommitDotIndices.has(entry.item.index)
                                );
                                const clusterHasUnpushedCommits = vm.renderEntries.some((entry) => {
                                  const c = entry.item.commit;
                                  if (!c || c.kind === 'uncommitted' || c.fullSha === 'WORKING_TREE') return false;
                                  if (isStashCommitLike(c)) return false;
                                  return isCommitUnpushed(c.fullSha, c.sha);
                                });
                                const isExpanded = motion.isExpanded;
                                const phase = motion.phase;
                                const phaseEased = motion.phaseEased;
                                const rectSize = nodeRectSize(vm.count);
                                // Expanded members represent single commits in grid layout.
                                const localRect = commitRectSize(scaledNodeSize, 0);

                                return (
                                  <g key={vm.clusterKey}>
                                    {!isExpanded && (
                                      <g style={{ pointerEvents: 'none' }}>
                                        {renderCommitNodeShapeRect({
                                          x: anchorX - rectSize.width / 2 + dotStrokeInset,
                                          y: anchorY - rectSize.height / 2 + dotStrokeInset,
                                          width: rectSize.width - dotStrokeWidth,
                                          height: rectSize.height - dotStrokeWidth,
                                          fill: getNodeFillColor(
                                            vm.clusterKey,
                                            clusterHasStash || clusterHasLocalCommits || clusterHasUnpushedCommits
                                              ? CANVAS_UNPUSHED_NODE_FILL
                                              : dotFill,
                                            clusterCheckoutAccent,
                                            clusterHasSelectedCommit || clusterHasSelectedHead,
                                          ),
                                          stroke: getNodeStrokeColor(
                                            vm.clusterKey,
                                            clusterLocalSyntheticStroke(clusterHasUncommitted, clusterHasStash),
                                            clusterCheckoutAccent,
                                            clusterHasSelectedCommit || clusterHasSelectedHead,
                                          ),
                                          strokeWidth: dotStrokeWidth,
                                          dashed: clusterHasUncommitted || clusterHasStash || !!dotStrokeDasharray,
                                        })}
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
                                          style={{ cursor: vm.canExpandCluster ? 'pointer' : 'default' }}
                                          onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                                          onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                                          onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            if (vm.canExpandCluster) toggleClumpExpanded(vm.clusterKey);
                                          }}
                                          onDoubleClick={(event) => {
                                            event.preventDefault();
                                            event.stopPropagation();
                                          }}
                                          onMouseEnter={() => {
                                            handleNodeHoverEnter(vm.clusterKey, b.name);
                                            setTooltip({
                                              x: anchorX,
                                              y: anchorY,
                                              lines: [`${vm.count} commits`, latestCommitMessage, `and ${vm.count - 1} more commits`, `@${latestAuthor} · ${dateRangeLabel}`],
                                              avatarUrl: showClumpAvatar ? b.lastCommitAuthorAvatar : undefined,
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
                                        {vm.renderEntries.map((entry) => {
                                          const commit = entry.item.commit;
                                          if (!commit?.fullSha) return null;
                                          const commitCheckoutAccent = mergeCheckoutAccent(
                                            checkedOutHeadSha != null &&
                                              (shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                                                shaMatchesGitRef(commit.sha, checkedOutHeadSha)),
                                            b.name,
                                            commit.fullSha,
                                            commit.sha,
                                          );
                                          const tooltipAuthor = commit.author ?? b.lastCommitAuthor;
                                          const tooltipDate = commit.date ?? b.lastCommitDate;
                                          const tooltipSha = commit.sha ?? commit.fullSha.slice(0, 7);
                                          const tooltipMessage = commit.message;
                                          const isUncommittedCommit = commit.kind === 'uncommitted';
                                          const isStashCommit = isStashCommitLike(commit);
                                          const isLocalCommit = localCommitDotIndices.has(entry.item.index);
                                          const tooltipTitle = isStashCommit
                                            ? `${shortShaLabel(commit.fullSha)} — ⌘-click or double-click to restore`
                                            : isUncommittedCommit
                                              ? 'Uncommited changes'
                                              : `Commit ${tooltipSha}`;

                                          const memberPose = interpolateExpandedEntryPose(
                                            { x: anchorX, y: anchorY },
                                            { x: entry.x, y: entry.y },
                                            phase,
                                            phaseEased,
                                          );
                                          const commitKey = `branch-commit:${b.name}:${commit.fullSha}`;

                                          return (
                                            <g
                                              key={commitKey}
                                              transform={`translate(${memberPose.x} ${memberPose.y})`}
                                              style={{ ...clumpAnimStyleForPhase(phase), pointerEvents: phase === 'expanded' ? 'auto' : 'none' }}
                                              opacity={memberPose.opacity}
                                            >
                                              <g transform={`scale(${memberPose.scale})`}>
                                                <g
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
                                                        tooltipTitle,
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
                                                >
                                                  {renderCommitNodeShapeRect({
                                                    x: -localRect.width / 2 + dotStrokeInset,
                                                    y: -localRect.height / 2 + dotStrokeInset,
                                                    width: localRect.width - dotStrokeWidth,
                                                    height: localRect.height - dotStrokeWidth,
                                                    fill: getNodeFillColor(
                                                      commitKey,
                                                      isLocalCommit ? CANVAS_UNPUSHED_NODE_FILL : dotFill,
                                                      commitCheckoutAccent,
                                                      selectedCommitShaSet.has(commit.fullSha) ||
                                                      (clusterHasSelectedHead && commit.fullSha === b.headSha),
                                                    ),
                                                    stroke: getNodeStrokeColor(
                                                      commitKey,
                                                      isUncommittedCommit ? CHECKED_OUT_SELECTION_STROKE : CANVAS_NODE_STROKE,
                                                      commitCheckoutAccent,
                                                      selectedCommitShaSet.has(commit.fullSha) ||
                                                      (clusterHasSelectedHead && commit.fullSha === b.headSha),
                                                    ),
                                                    strokeWidth: dotStrokeWidth,
                                                    dashed: isUncommittedCommit || !!dotStrokeDasharray,
                                                  })}
                                                </g>
                                              </g>
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
                                const dateRangeLabel = fmtClumpDateRange(firstDate, lastDate);
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
                                          lines: [`${count} prompts`, latestPrompt, `and ${count - 1} more prompts`, `${lastEntry.item.marker.agent} · ${dateRangeLabel}`],
                                        })
                                      }
                                      onMouseLeave={() => setTooltip(null)}
                                    />
                                  </g>
                                );
                              })}
                              {showClockIcon && (
                                <g style={{ pointerEvents: 'none' }}>
                                  <circle cx={clockPoint.x} cy={clockPoint.y} r={4.2} stroke={CANVAS_NEUTRAL_GRAY} strokeWidth={1.2} fill="none" />
                                  <line x1={clockPoint.x} y1={clockPoint.y - 2.9} x2={clockPoint.x} y2={clockPoint.y} stroke={CANVAS_NEUTRAL_GRAY} strokeWidth={1.2} strokeLinecap="round" />
                                  <line x1={clockPoint.x} y1={clockPoint.y} x2={clockPoint.x + 2.3} y2={clockPoint.y + 1.5} stroke={CANVAS_NEUTRAL_GRAY} strokeWidth={1.2} strokeLinecap="round" />
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
                          stroke={CANVAS_NEUTRAL_GRAY}
                          strokeWidth={0.75}
                          pathLength={1}
                          vectorEffect="non-scaling-stroke"
                        />
                      </g>
                    );
                  })()}

                  {/* Branch commit node overlay so branch connectors/lanes never render over branch rectangles. */}
                  <g style={{ pointerEvents: 'none' }}>
                    {(() => {
                      const orderedActiveBranches = orderedActiveBranchesForLayer({
                        includeSelectedPriority: false,
                      });

                      return orderedActiveBranches.flatMap((b) => {
                        const {
                          uniqueAheadCount,
                          branchEndDotIndex,
                          localCommitDotIndices,
                          fullBranchShouldUseLocalGray,
                          commitDotClusters,
                        } = getBranchRenderLayout(b);
                        const isFocusedError = focusedErrorBranch?.name === b.name;
                        const strokeWidth = isFocusedError ? 1 : 0.75;
                        const unpushedStrokeWidth = strokeWidth + UNPUSHED_LANE_STROKE_VISUAL_COMP;

                        return commitDotClusters.map((cluster) => {
                          const { realCommitEntries, renderEntries } = resolveBranchClusterEntries(cluster);
                          const count = renderEntries.length;
                          const clusterKey = branchClusterKey(b.name, cluster);
                          const memberKeys = branchClusterMemberKeys(b.name, cluster);
                          const preferredAnchorEntry = branchPreferredAnchorEntry(
                            cluster,
                            realCommitEntries,
                            branchEndDotIndex,
                          );
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
                          const clusterHasPrimaryCheckoutHead =
                            checkedOutHeadSha != null &&
                            cluster.entries.some((entry) => {
                              const idx = entry.item.index;
                              const commit = entry.item.commit;
                              if (commit && commit.kind !== 'branch-created') {
                                return (
                                  shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                                  shaMatchesGitRef(commit.sha, checkedOutHeadSha)
                                );
                              }
                              if (checkedOutBranchName === b.name && branchEndDotIndex === idx) {
                                return shaMatchesGitRef(b.headSha, checkedOutHeadSha);
                              }
                              return false;
                            });
                          const clusterHasOtherWorktreeHead = cluster.entries.some((entry) => {
                            const idx = entry.item.index;
                            const commit = entry.item.commit;
                            if (commit && commit.kind !== 'branch-created') {
                              return otherWorktreeMatchesBranchCommit(b.name, commit.fullSha, commit.sha ?? '');
                            }
                            if (branchEndDotIndex === idx) {
                              return otherWorktreeMatchesBranchCommit(
                                b.name,
                                b.headSha,
                                b.headSha.slice(0, 7),
                              );
                            }
                            return false;
                          });
                          const clusterCheckoutAccent = clusterHasPrimaryCheckoutHead
                            ? 'primary'
                            : clusterHasOtherWorktreeHead
                              ? 'other'
                              : 'none';
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
                            const commitEntry = renderEntries[0] ?? cluster.entries[cluster.entries.length - 1];
                            const commit = commitEntry.item.commit;
                            const isNonCommitPlaceholder = !commit && uniqueAheadCount <= 0;
                            const isUncommittedCommit = commit?.kind === 'uncommitted';
                            const isStashCommit = commit ? isStashCommitLike(commit) : false;
                            const isLocalCommit =
                              !isNonCommitPlaceholder && localCommitDotIndices.has(commitEntry.item.index);
                            const isUnpushedCommit =
                              !!commit &&
                              !isUncommittedCommit &&
                              !isStashCommit &&
                              isCommitUnpushed(commit.fullSha, commit.sha);
                            const rectSize = commitRectSize(scaledNodeSize);
                            const isGhostRect = isNonCommitPlaceholder;
                            const ghostRectStrokeWidth = unpushedStrokeWidth;

                            return (
                              <g
                                key={`branch-overlay-${clusterKey}`}
                                {...((isUncommittedCommit || isStashCommit) ? { 'data-drag-id': commit?.fullSha } : {})}
                              >
                                {isGhostRect ? (
                                  renderCommitNodeShapeRect({
                                    x: anchorX - rectSize.width / 2 + dotStrokeInset,
                                    y: anchorY - rectSize.height / 2 + dotStrokeInset,
                                    width: rectSize.width - dotStrokeWidth,
                                    height: rectSize.height - dotStrokeWidth,
                                    fill: getNodeFillColor(
                                      clusterKey,
                                      dotFill,
                                      clusterCheckoutAccent,
                                      clusterHasSelectedCommit || clusterHasSelectedHead,
                                      true,
                                    ),
                                    stroke: getNodeStrokeColor(
                                      clusterKey,
                                      LOCAL_UNPUSHED_GRAY,
                                      clusterCheckoutAccent,
                                      clusterHasSelectedCommit || clusterHasSelectedHead,
                                      true,
                                    ),
                                    strokeWidth: ghostRectStrokeWidth,
                                    dashed: true,
                                  })
                                ) : renderCommitNodeRect({
                                  nodeKey: clusterKey,
                                  centerX: anchorX,
                                  centerY: anchorY,
                                  rectSize,
                                  innerText: isUncommittedCommit || isStashCommit ? undefined : commit?.message,
                                  footerMetaAuthor: `@${commit?.author ?? b.lastCommitAuthor}`,
                                  footerMetaDate: fmtTooltipDate(commit?.date ?? b.lastCommitDate),
                                  fill: isStashCommit || isUncommittedCommit || isLocalCommit || isUnpushedCommit
                                    ? CANVAS_UNPUSHED_NODE_FILL
                                    : dotFill,
                                  baseStroke: stashOrUncommittedBaseStroke(isStashCommit, !!isUncommittedCommit),
                                  checkoutAccent: clusterCheckoutAccent,
                                  isUserSelected: clusterHasSelectedCommit || clusterHasSelectedHead,
                                  strokeWidth: dotStrokeWidth,
                                  strokeInset: dotStrokeInset,
                                  dashed: !!(isUncommittedCommit || isStashCommit),
                                  isUncommitted: !!isUncommittedCommit,
                                  isStash: isStashCommit,
                                })}
                              </g>
                            );
                          }

                          const canExpandCluster = renderEntries.length > 1;
                          const clusterHasUncommitted = renderEntries.some(
                            (entry) =>
                              entry.item.commit?.kind === 'uncommitted' ||
                              entry.item.commit?.fullSha === 'WORKING_TREE',
                          );
                          const clusterHasStash = renderEntries.some(
                            (entry) => !!entry.item.commit && isStashCommitLike(entry.item.commit),
                          );
                          const clusterHasLocalCommits = renderEntries.some((entry) =>
                            localCommitDotIndices.has(entry.item.index)
                          );
                          const clusterHasUnpushedCommits = renderEntries.some((entry) => {
                            const c = entry.item.commit;
                            if (!c || c.kind === 'uncommitted' || c.fullSha === 'WORKING_TREE') return false;
                            if (isStashCommitLike(c)) return false;
                            return isCommitUnpushed(c.fullSha, c.sha);
                          });
                          const expanded = canExpandCluster ? expandedClumps.get(clusterKey) : undefined;
                          const { isExpanded, phase, phaseEased } = canExpandCluster
                            ? resolveClumpPhase(expanded)
                            : { isExpanded: false, phase: 'collapsed' as const, phaseEased: 0 };

                          if (!isExpanded) {
                            const rectSize = nodeRectSize(count);
                            return (
                              <g key={`branch-overlay-${clusterKey}`}>
                                {renderCommitNodeRect({
                                  nodeKey: clusterKey,
                                  centerX: anchorX,
                                  centerY: anchorY,
                                  rectSize,
                                  innerText: (() => {
                                    const last = renderEntries[renderEntries.length - 1]?.item.commit;
                                    if (!last) return undefined;
                                    if (
                                      last.kind === 'uncommitted' ||
                                      last.fullSha === 'WORKING_TREE' ||
                                      isStashCommitLike(last)
                                    ) {
                                      return undefined;
                                    }
                                    return last.message;
                                  })(),
                                  footerMetaAuthor: (() => {
                                    const latestAuthor =
                                      renderEntries[renderEntries.length - 1]?.item.commit?.author ?? b.lastCommitAuthor;
                                    return `@${latestAuthor}`;
                                  })(),
                                  footerMetaDate: (() => {
                                    const firstDate = renderEntries[0]?.item.commit?.date ?? b.lastCommitDate;
                                    const lastDate = renderEntries[renderEntries.length - 1]?.item.commit?.date ?? b.lastCommitDate;
                                    return fmtClumpDateRange(firstDate, lastDate);
                                  })(),
                                  fill: clusterHasStash || clusterHasUncommitted || clusterHasLocalCommits || clusterHasUnpushedCommits
                                    ? CANVAS_UNPUSHED_NODE_FILL
                                    : dotFill,
                                  baseStroke: clusterLocalSyntheticStroke(clusterHasUncommitted, clusterHasStash),
                                  checkoutAccent: clusterCheckoutAccent,
                                  isUserSelected: clusterHasSelectedCommit || clusterHasSelectedHead,
                                  strokeWidth: dotStrokeWidth,
                                  strokeInset: dotStrokeInset,
                                  dashed: clusterHasUncommitted || clusterHasStash,
                                  isUncommitted: clusterHasUncommitted,
                                  isStash: clusterHasStash,
                                })}
                              </g>
                            );
                          }

                          const localRect = commitRectSize(scaledNodeSize, 0);

                          return (
                            <g key={`branch-overlay-${clusterKey}`}>
                              {renderEntries.map((entry) => {
                                const commit = entry.item.commit;
                                if (!commit?.fullSha) return null;
                                const commitCheckoutAccent = mergeCheckoutAccent(
                                  checkedOutHeadSha != null &&
                                    (shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                                      shaMatchesGitRef(commit.sha, checkedOutHeadSha)),
                                  b.name,
                                  commit.fullSha,
                                  commit.sha,
                                );

                                const memberPose = interpolateExpandedEntryPose(
                                  { x: anchorX, y: anchorY },
                                  { x: entry.x, y: entry.y },
                                  phase,
                                  phaseEased,
                                );
                                const commitKey = `branch-commit:${b.name}:${commit.fullSha}`;
                                const isUncommittedCommit = commit.kind === 'uncommitted';
                                const isStashCommit = isStashCommitLike(commit);
                                const isLocalCommit = localCommitDotIndices.has(entry.item.index);
                                const isUnpushedCommit =
                                  !isUncommittedCommit &&
                                  !isStashCommit &&
                                  isCommitUnpushed(commit.fullSha, commit.sha);

                                return (
                                  <g
                                    key={`branch-overlay-${commitKey}`}
                                    transform={`translate(${memberPose.x} ${memberPose.y})`}
                                    style={clumpAnimStyleForPhase(phase)}
                                    opacity={memberPose.opacity}
                                  >
                                    <g transform={`scale(${memberPose.scale})`}>
                                      {renderCommitNodeRect({
                                        nodeKey: commitKey,
                                        centerX: 0,
                                        centerY: 0,
                                        rectSize: localRect,
                                        innerText:
                                          isUncommittedCommit || isStashCommit ? undefined : commit.message,
                                        footerMetaAuthor: `@${commit.author ?? b.lastCommitAuthor}`,
                                        footerMetaDate: fmtTooltipDate(commit.date ?? b.lastCommitDate),
                                        fill: isStashCommit || isUncommittedCommit || isLocalCommit || isUnpushedCommit
                                          ? CANVAS_UNPUSHED_NODE_FILL
                                          : dotFill,
                                        baseStroke: stashOrUncommittedBaseStroke(isStashCommit, isUncommittedCommit),
                                        checkoutAccent: commitCheckoutAccent,
                                        isUserSelected:
                                          selectedCommitShaSet.has(commit.fullSha) ||
                                          (clusterHasSelectedHead && commit.fullSha === b.headSha),
                                        strokeWidth: dotStrokeWidth,
                                        strokeInset: dotStrokeInset,
                                        dashed: isUncommittedCommit || isStashCommit,
                                        isUncommitted: isUncommittedCommit,
                                        isStash: isStashCommit,
                                      })}
                                    </g>
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
                  {!mainIsUnifiedRender && (
                    <g style={{ opacity: mainTimelineOpacity, transition: 'opacity 0.15s', pointerEvents: 'none' }}>
                      {mainDirectClusters.map((clusterLayout) => {
                        const {
                          cluster,
                          count,
                          clusterKey,
                          memberKeys,
                          preferredAnchorX,
                          preferredAnchorY,
                          clusterHasMainTip,
                          clusterCheckoutAccent,
                          clusterHasSelectedCommit: mainClusterHasSelectedCommit,
                          clusterHasUncommitted,
                          clusterHasStash,
                          clusterHasUnpushed,
                        } = clusterLayout;
                        const motion = resolveClusterMotion(
                          clusterKey,
                          { x: preferredAnchorX, y: preferredAnchorY },
                          memberKeys,
                          count > 1,
                        );
                        const isExpanded = motion.isExpanded;
                        const phase = motion.phase;
                        const phaseEased = motion.phaseEased;
                        const anchorX = motion.anchorX;
                        const anchorY = motion.anchorY;

                        if (count === 1) {
                          const singleMainCommit = cluster.entries[0]?.item;
                          const isUncommittedCommit =
                            singleMainCommit?.fullSha === 'WORKING_TREE' ||
                            singleMainCommit?.kind === 'uncommitted';
                          const isStashCommit = singleMainCommit ? isStashCommitLike(singleMainCommit) : false;
                          const isUnpushedCommit = singleMainCommit
                            ? isCommitUnpushed(singleMainCommit.fullSha, singleMainCommit.sha)
                            : false;
                          const rectSize = commitRectSize(scaledNodeSize);
                          return (
                            <g
                              key={`main-direct-overlay-${clusterKey}`}
                              {...((isUncommittedCommit || isStashCommit) ? { 'data-drag-id': singleMainCommit?.fullSha } : {})}
                            >
                              {renderCommitNodeRect({
                                nodeKey: clusterKey,
                                centerX: anchorX,
                                centerY: anchorY,
                                rectSize,
                                innerText: isUncommittedCommit || isStashCommit ? undefined : singleMainCommit?.message,
                                footerMetaAuthor: `@${singleMainCommit?.author ?? 'unknown'}`,
                                footerMetaDate: singleMainCommit?.date ? fmtTooltipDate(singleMainCommit.date) : 'Unknown date',
                                fill: isStashCommit || isUncommittedCommit || isUnpushedCommit
                                  ? CANVAS_UNPUSHED_NODE_FILL
                                  : CANVAS_NODE_FILL,
                                baseStroke: stashOrUncommittedBaseStroke(isStashCommit, isUncommittedCommit),
                                checkoutAccent: clusterCheckoutAccent,
                                isUserSelected:
                                  mainClusterHasSelectedCommit ||
                                  (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                dashed: isUncommittedCommit || isStashCommit,
                                isUncommitted: isUncommittedCommit,
                                isStash: isStashCommit,
                              })}
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
                                  const memberPose = interpolateExpandedEntryPose(
                                    { x: anchorX, y: anchorY },
                                    { x: entry.x, y: entry.y },
                                    phase,
                                    phaseEased,
                                  );
                                  const commitKey = `direct:${c.fullSha}`;
                                  const isUncommittedCommit =
                                    c.fullSha === 'WORKING_TREE' || c.kind === 'uncommitted';
                                  const isStashCommit = isStashCommitLike(c);
                                  const isUnpushedCommit = isCommitUnpushed(c.fullSha, c.sha);
                                  const commitCheckoutAccent = mergeCheckoutAccent(
                                    checkedOutHeadSha != null &&
                                      (shaMatchesGitRef(c.fullSha, checkedOutHeadSha) ||
                                        shaMatchesGitRef(c.sha, checkedOutHeadSha)),
                                    defaultBranch,
                                    c.fullSha,
                                    c.sha,
                                  );

                                  return (
                                    <g
                                      key={`main-direct-overlay:${c.fullSha}`}
                                      transform={`translate(${memberPose.x} ${memberPose.y})`}
                                      style={clumpAnimStyleForPhase(phase)}
                                      opacity={memberPose.opacity}
                                    >
                                      <g transform={`scale(${memberPose.scale})`}>
                                        {renderCommitNodeRect({
                                          nodeKey: commitKey,
                                          centerX: 0,
                                          centerY: 0,
                                          rectSize: localRect,
                                          innerText: isUncommittedCommit || isStashCommit ? undefined : c.message,
                                          footerMetaAuthor: `@${c.author}`,
                                          footerMetaDate: fmtTooltipDate(c.date),
                                          fill: isStashCommit || isUncommittedCommit || isUnpushedCommit
                                            ? CANVAS_UNPUSHED_NODE_FILL
                                            : CANVAS_NODE_FILL,
                                          baseStroke: stashOrUncommittedBaseStroke(isStashCommit, isUncommittedCommit),
                                          checkoutAccent: commitCheckoutAccent,
                                          isUserSelected:
                                            selectedCommitShaSet.has(c.fullSha) ||
                                            (clusterHasMainTip &&
                                              selectedBranchNameSet.has(defaultBranch) &&
                                              c.fullSha === latestMainCommitSha),
                                          dashed: isUncommittedCommit || isStashCommit,
                                          isUncommitted: isUncommittedCommit,
                                          isStash: isStashCommit,
                                        })}
                                      </g>
                                    </g>
                                  );
                                })}
                              </>
                            ) : (
                              renderCommitNodeRect({
                                nodeKey: clusterKey,
                                centerX: anchorX,
                                centerY: anchorY,
                                rectSize: clusterRectSize,
                                innerText: (() => {
                                  const last = cluster.entries[cluster.entries.length - 1]?.item;
                                  if (!last) return undefined;
                                  if (
                                    last.fullSha === 'WORKING_TREE' ||
                                    last.kind === 'uncommitted' ||
                                    isStashCommitLike(last)
                                  ) {
                                    return undefined;
                                  }
                                  return last.message;
                                })(),
                                footerMetaAuthor: (() => {
                                  const latestAuthor =
                                    cluster.entries[cluster.entries.length - 1]?.item.author ?? 'unknown';
                                  return `@${latestAuthor}`;
                                })(),
                                footerMetaDate: (() => {
                                  const firstDate = cluster.entries[0]?.item.date ?? '';
                                  const lastDate = cluster.entries[cluster.entries.length - 1]?.item.date ?? '';
                                  return fmtClumpDateRange(firstDate, lastDate);
                                })(),
                                fill: clusterHasStash || clusterHasUncommitted || clusterHasUnpushed
                                  ? CANVAS_UNPUSHED_NODE_FILL
                                  : CANVAS_NODE_FILL,
                                baseStroke: clusterLocalSyntheticStroke(clusterHasUncommitted, clusterHasStash),
                                checkoutAccent: clusterCheckoutAccent,
                                isUserSelected:
                                  mainClusterHasSelectedCommit ||
                                  (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                dashed: clusterHasUncommitted || clusterHasStash,
                                isUncommitted: clusterHasUncommitted,
                                isStash: clusterHasStash,
                              })
                            )}
                          </g>
                        );
                      })}
                    </g>
                  )}

                  {/* Top-most label overlay so labels are always above all rectangle layers. */}
                  <g style={{ pointerEvents: 'none' }}>
                    <g>
                      {(() => {
                        const orderedActiveBranches = orderedActiveBranchesForLayer({
                          includeSelectedPriority: false,
                        });

                        return orderedActiveBranches.flatMap((b) => {
                          const {
                            commitDotClusters,
                            branchEndDotIndex,
                            uniqueAheadCount,
                          } = getBranchRenderLayout(b);

                          return commitDotClusters.map((cluster) => {
                            const { realCommitEntries, renderEntries } = resolveBranchClusterEntries(cluster);
                            const count = renderEntries.length;
                            const clusterKey = branchClusterKey(b.name, cluster);
                            const memberKeys = branchClusterMemberKeys(b.name, cluster);
                            const clusterHasBranchTip =
                              branchEndDotIndex != null &&
                              cluster.entries.some((entry) => entry.item.index === branchEndDotIndex);
                            const clusterHasPrimaryCheckoutHead =
                              checkedOutHeadSha != null &&
                              cluster.entries.some((entry) => {
                                const commit = entry.item.commit;
                                if (commit && commit.kind !== 'branch-created') {
                                  return (
                                    shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                                    shaMatchesGitRef(commit.sha, checkedOutHeadSha)
                                  );
                                }
                                if (checkedOutBranchName === b.name && branchEndDotIndex === entry.item.index) {
                                  return shaMatchesGitRef(b.headSha, checkedOutHeadSha);
                                }
                                return false;
                              });
                            const clusterHasOtherWorktreeHead = cluster.entries.some((entry) => {
                              const commit = entry.item.commit;
                              if (commit && commit.kind !== 'branch-created') {
                                return otherWorktreeMatchesBranchCommit(b.name, commit.fullSha, commit.sha ?? '');
                              }
                              if (branchEndDotIndex === entry.item.index) {
                                return otherWorktreeMatchesBranchCommit(
                                  b.name,
                                  b.headSha,
                                  b.headSha.slice(0, 7),
                                );
                              }
                              return false;
                            });
                            const clusterCheckoutAccent = clusterHasPrimaryCheckoutHead
                              ? 'primary'
                              : clusterHasOtherWorktreeHead
                                ? 'other'
                                : 'none';
                            const clusterHasSelectedCommit =
                              cluster.entries.some((entry) => {
                                const commitSha = entry.item.commit?.fullSha;
                                return !!commitSha && selectedCommitShaSet.has(commitSha);
                              });
                            const clusterHasSelectedHead =
                              clusterHasBranchTip &&
                              selectedBranchNameSet.has(b.name);
                            const clusterIsCheckoutAccent = clusterCheckoutAccent;
                            const clusterIsSelected = clusterHasSelectedCommit || clusterHasSelectedHead;
                            const preferredAnchorEntry = branchPreferredAnchorEntry(
                              cluster,
                              realCommitEntries,
                              branchEndDotIndex,
                            );
                            const animatedAnchor = resolveAnimatedClumpAnchor(
                              clusterKey,
                              { x: preferredAnchorEntry.x, y: preferredAnchorEntry.y },
                              memberKeys
                            );
                            const anchorX = animatedAnchor.x;
                            const anchorY = animatedAnchor.y;

                            if (count <= 1) {
                              const commitEntry = renderEntries[0] ?? cluster.entries[cluster.entries.length - 1];
                              const commit = commitEntry.item.commit;
                              const rectSize = commitRectSize(scaledNodeSize);
                              const singleTitleText = fitNodeFrameTitle(
                                b.name,
                                commit?.sha ?? commit?.fullSha ?? b.headSha,
                                rectSize.width,
                              );
                              const accentOutlineOnlyForLabel =
                                (!commit && uniqueAheadCount <= 0) ||
                                (commit?.kind === 'uncommitted' && !commit?.message?.trim());

                              return (
                                <text
                                  key={`branch-label-overlay-${clusterKey}`}
                                  {...((commit?.kind === 'uncommitted' || !!(commit && isStashCommitLike(commit))) ? { 'data-drag-label-id': commit?.fullSha } : {})}
                                  x={anchorX - rectSize.width / 2 + CANVAS_NODE_STROKE_INSET + nodeFrameLabelInsetX}
                                  y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                                  textAnchor="start"
                                  fill={getNodeFrameTitleColor(
                                    clusterKey,
                                    clusterIsCheckoutAccent,
                                    clusterIsSelected,
                                    commit?.kind === 'uncommitted',
                                    !!(commit && isStashCommitLike(commit)),
                                    accentOutlineOnlyForLabel,
                                  )}
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
                            const { isExpanded, phase, phaseEased } = canExpandCluster
                              ? resolveClumpPhase(expanded)
                              : { isExpanded: false, phase: 'collapsed' as const, phaseEased: 0 };
                            const isCollapsing = isExpanded && phase === 'collapsing';

                            if (!isExpanded || isCollapsing) {
                              const rectSize = nodeRectSize(count);
                              const clumpCountText = stackCountLabel(count);
                              const latestCommit = renderEntries[renderEntries.length - 1]?.item.commit;
                              const latestLabel =
                                latestCommit?.kind === 'uncommitted'
                                  ? 'Uncommited Changes'
                                  : latestCommit && isStashCommitLike(latestCommit)
                                    ? shortShaLabel(latestCommit.fullSha)
                                    : (latestCommit?.sha ?? latestCommit?.fullSha ?? b.headSha);
                              const clumpTitleText = fitNodeFrameTitle(
                                b.name,
                                latestLabel,
                                rectSize.width,
                                clumpCountText,
                              );
                              const accentOutlineOnlyForClumpLabel =
                                latestCommit?.kind === 'uncommitted' && !latestCommit?.message?.trim();

                              return (
                                <g
                                  key={`branch-label-overlay-${clusterKey}`}
                                  opacity={1}
                                >
                                  <text
                                    x={anchorX + rectSize.width / 2 - CANVAS_NODE_STROKE_INSET - nodeFrameLabelRightInsetX}
                                    y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                                    textAnchor="end"
                                    fontSize={nodeFrameLabelFontSize}
                                    fill={getNodeFrameTitleColor(
                                      clusterKey,
                                      clusterIsCheckoutAccent,
                                      clusterIsSelected,
                                      latestCommit?.kind === 'uncommitted',
                                      !!latestCommit && isStashCommitLike(latestCommit),
                                      accentOutlineOnlyForClumpLabel,
                                    )}
                                    fontWeight={NODE_FRAME_LABEL_WEIGHT}
                                    pointerEvents="none"
                                  >
                                    {clumpCountText}
                                  </text>
                                  <text
                                    x={anchorX - rectSize.width / 2 + CANVAS_NODE_STROKE_INSET + nodeFrameLabelInsetX}
                                    y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                                    textAnchor="start"
                                    fill={getNodeFrameTitleColor(
                                      clusterKey,
                                      clusterIsCheckoutAccent,
                                      clusterIsSelected,
                                      latestCommit?.kind === 'uncommitted',
                                      !!latestCommit && isStashCommitLike(latestCommit),
                                      accentOutlineOnlyForClumpLabel,
                                    )}
                                    fontSize={nodeFrameLabelFontSize}
                                    fontWeight={NODE_FRAME_LABEL_WEIGHT}
                                    pointerEvents="none"
                                  >
                                    {clumpTitleText}
                                  </text>
                                </g>
                              );
                            }

                            const localRect = commitRectSize(scaledNodeSize, 0);
                            const topExpandedEntry = renderEntries.reduce(
                              (top, entry) => {
                                const isBetter = isHorizontal ? entry.x > top.x : entry.y < top.y;
                                return isBetter ? entry : top;
                              },
                              renderEntries[0]
                            );
                            return (
                              <g key={`branch-label-overlay-${clusterKey}`}>
                                {renderEntries.map((entry) => {
                                  const commit = entry.item.commit;
                                  if (!commit?.fullSha) return null;

                                  const memberPose = interpolateExpandedEntryPose(
                                    { x: anchorX, y: anchorY },
                                    { x: entry.x, y: entry.y },
                                    phase,
                                    phaseEased,
                                  );

                                  return (
                                    <g
                                      key={`branch-label-overlay:${b.name}:${commit.fullSha}`}
                                      transform={`translate(${memberPose.x} ${memberPose.y})`}
                                      style={clumpAnimStyleForPhase(phase)}
                                      opacity={memberPose.opacity}
                                    >
                                      <g transform={`scale(${memberPose.scale})`}>
                                        <text
                                          x={-localRect.width / 2 + CANVAS_NODE_STROKE_INSET + nodeFrameLabelInsetX}
                                          y={-localRect.height / 2 - nodeFrameLabelGap}
                                          textAnchor="start"
                                          fill={getNodeFrameTitleColor(
                                            `branch-commit:${b.name}:${commit.fullSha}`,
                                            mergeCheckoutAccent(
                                              checkedOutHeadSha != null &&
                                                (shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                                                  shaMatchesGitRef(commit.sha, checkedOutHeadSha)),
                                              b.name,
                                              commit.fullSha,
                                              commit.sha,
                                            ),
                                            selectedCommitShaSet.has(commit.fullSha),
                                            commit.kind === 'uncommitted',
                                            isStashCommitLike(commit),
                                          )}
                                          fontSize={nodeFrameLabelFontSize}
                                          fontWeight={NODE_FRAME_LABEL_WEIGHT}
                                          pointerEvents="none"
                                        >
                                          {fitNodeFrameTitle(
                                            b.name,
                                            commit.kind === 'uncommitted'
                                              ? 'Uncommited Changes'
                                              : isStashCommitLike(commit)
                                                ? shortShaLabel(commit.fullSha)
                                                : (commit.sha ?? commit.fullSha),
                                            localRect.width,
                                            undefined,
                                            entry === topExpandedEntry
                                          )}
                                        </text>
                                      </g>
                                    </g>
                                  );
                                })}
                              </g>
                            );
                          });
                        });
                      })()}
                    </g>

                    {!mainIsUnifiedRender && (
                      <g style={{ opacity: mainTimelineOpacity, transition: 'opacity 0.15s' }}>
                        {mainDirectClusters.map((clusterLayout) => {
                          const {
                            cluster,
                            count,
                            last,
                            clusterKey,
                            memberKeys,
                            preferredAnchorX,
                            preferredAnchorY,
                          } = clusterLayout;
                          const motion = resolveClusterMotion(
                            clusterKey,
                            { x: preferredAnchorX, y: preferredAnchorY },
                            memberKeys,
                            count > 1,
                          );
                          const isExpanded = motion.isExpanded;
                          const phase = motion.phase;
                          const phaseEased = motion.phaseEased;
                          const isCollapsing = isExpanded && phase === 'collapsing';
                          const anchorX = motion.anchorX;
                          const anchorY = motion.anchorY;
                          const mainClusterHasPrimaryCheckout =
                            checkedOutHeadSha != null &&
                            cluster.entries.some((entry) => {
                              const commit = entry.item;
                              return (
                                shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                                shaMatchesGitRef(commit.sha, checkedOutHeadSha)
                              );
                            });
                          const mainClusterHasOtherWorktree = cluster.entries.some((entry) => {
                            const c = entry.item;
                            return otherWorktreeMatchesBranchCommit(defaultBranch, c.fullSha, c.sha);
                          });
                          const mainClusterCheckoutAccent = mainClusterHasPrimaryCheckout
                            ? 'primary'
                            : mainClusterHasOtherWorktree
                              ? 'other'
                              : 'none';
                          const mainClusterIsSelected =
                            cluster.entries.some((entry) => selectedCommitShaSet.has(entry.item.fullSha)) ||
                            selectedBranchNameSet.has(defaultBranch);

                          if (count === 1) {
                            const rectSize = commitRectSize(scaledNodeSize);
                            const singleTitleText = fitNodeFrameTitle(
                              defaultBranch,
                              last.kind === 'uncommitted'
                                ? 'Uncommited Changes'
                                : isStashCommitLike(last)
                                  ? shortShaLabel(last.fullSha)
                                  : last.sha ?? last.fullSha,
                              rectSize.width,
                            );
                            return (
                              <text
                                key={`main-label-overlay-${clusterKey}`}
                                {...((last.kind === 'uncommitted' || isStashCommitLike(last)) ? { 'data-drag-label-id': last.fullSha } : {})}
                                x={anchorX - rectSize.width / 2 + CANVAS_NODE_STROKE_INSET + nodeFrameLabelInsetX}
                                y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                                textAnchor="start"
                                fill={getNodeFrameTitleColor(
                                  clusterKey,
                                  mainClusterCheckoutAccent,
                                  mainClusterIsSelected,
                                  last.kind === 'uncommitted',
                                  isStashCommitLike(last),
                                )}
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
                            last.kind === 'uncommitted'
                              ? 'Uncommited Changes'
                              : isStashCommitLike(last)
                                ? shortShaLabel(last.fullSha)
                                : last.sha ?? last.fullSha,
                            clusterRectSize.width,
                            clumpCountText,
                          );
                          if (isExpanded && !isCollapsing) {
                            const localRect = commitRectSize(scaledNodeSize, 0);
                            const topEntryForLabels = cluster.entries.reduce(
                              (top, entry) => {
                                const isBetter = isHorizontal ? entry.x > top.x : entry.y < top.y;
                                return isBetter ? entry : top;
                              },
                              cluster.entries[0]
                            );
                            return (
                              <g key={`main-label-overlay-${clusterKey}`}>
                                {cluster.entries.map((entry) => {
                                  const c = entry.item;
                                  const memberPose = interpolateExpandedEntryPose(
                                    { x: anchorX, y: anchorY },
                                    { x: entry.x, y: entry.y },
                                    phase,
                                    phaseEased,
                                  );
                                  return (
                                    <g
                                      key={`main-label-overlay:${c.fullSha}`}
                                      transform={`translate(${memberPose.x} ${memberPose.y})`}
                                      style={clumpAnimStyleForPhase(phase)}
                                      opacity={memberPose.opacity}
                                    >
                                      <g transform={`scale(${memberPose.scale})`}>
                                        <text
                                          x={-localRect.width / 2 + CANVAS_NODE_STROKE_INSET + nodeFrameLabelInsetX}
                                          y={-localRect.height / 2 - nodeFrameLabelGap}
                                          textAnchor="start"
                                          fill={getNodeFrameTitleColor(
                                            `direct:${c.fullSha}`,
                                            mergeCheckoutAccent(
                                              checkedOutHeadSha != null &&
                                                (shaMatchesGitRef(c.fullSha, checkedOutHeadSha) ||
                                                  shaMatchesGitRef(c.sha, checkedOutHeadSha)),
                                              defaultBranch,
                                              c.fullSha,
                                              c.sha,
                                            ),
                                            selectedCommitShaSet.has(c.fullSha),
                                            c.kind === 'uncommitted',
                                            isStashCommitLike(c),
                                          )}
                                          fontSize={nodeFrameLabelFontSize}
                                          fontWeight={NODE_FRAME_LABEL_WEIGHT}
                                          pointerEvents="none"
                                        >
                                          {fitNodeFrameTitle(
                                            defaultBranch,
                                            c.kind === 'uncommitted'
                                              ? 'Uncommited Changes'
                                              : isStashCommitLike(c)
                                                ? shortShaLabel(c.fullSha)
                                                : c.sha ?? c.fullSha,
                                            localRect.width,
                                            undefined,
                                            entry === topEntryForLabels
                                          )}
                                        </text>
                                      </g>
                                    </g>
                                  );
                                })}
                              </g>
                            );
                          }
                          return (
                            <g
                              key={`main-label-overlay-${clusterKey}`}
                              opacity={1}
                            >
                              {(!isExpanded || isCollapsing) && (
                                <text
                                  x={anchorX + clusterRectSize.width / 2 - CANVAS_NODE_STROKE_INSET - nodeFrameLabelRightInsetX}
                                  y={anchorY - clusterRectSize.height / 2 - nodeFrameLabelGap}
                                  textAnchor="end"
                                  fontSize={nodeFrameLabelFontSize}
                                  fill={getNodeFrameTitleColor(
                                    clusterKey,
                                    mainClusterCheckoutAccent,
                                    mainClusterIsSelected,
                                    last.kind === 'uncommitted',
                                    isStashCommitLike(last),
                                  )}
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
                                fill={getNodeFrameTitleColor(
                                  clusterKey,
                                  mainClusterCheckoutAccent,
                                  mainClusterIsSelected,
                                  last.kind === 'uncommitted',
                                  isStashCommitLike(last),
                                )}
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
                    )}
                  </g>

                  {/* Top-most collapse controls so carets are never occluded by node layers. */}
                  <g>
                    {!mainIsUnifiedRender && mainDirectClusters.map((clusterLayout) => {
                      const { cluster, count, clusterKey, clusterHasMainTip, clusterCheckoutAccent, clusterHasSelectedCommit } = clusterLayout;
                      const expanded = expandedClumps.get(clusterKey);
                      const { isExpanded, phase } = resolveClumpPhase(expanded);
                      if (count <= 1 || !isExpanded || phase !== 'expanded') return null;

                      const localRect = commitRectSize(scaledNodeSize, 0);
                      const collapseIconSize = nodeFrameCollapseIconSize;
                      const collapseHitSize = worldPx(16);
                      const collapseStrokeWidth = 1;
                      const topExpandedEntry = cluster.entries.reduce(
                        (top, entry) => {
                          const isBetter = isHorizontal ? entry.x > top.x : entry.y < top.y;
                          return isBetter ? entry : top;
                        },
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
                            stroke={getNodeFrameTitleColor(
                              clusterKey,
                              clusterCheckoutAccent,
                              clusterHasSelectedCommit || (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                            )}
                            strokeWidth={collapseStrokeWidth}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            vectorEffect="non-scaling-stroke"
                          />
                        </g>
                      );
                    })}

                    {renderBranches.flatMap((b) => {
                      const { commitDotClusters, branchEndDotIndex } = getBranchRenderLayout(b);
                      return commitDotClusters.map((cluster) => {
                        const { renderEntries } = resolveBranchClusterEntries(cluster);
                        const count = renderEntries.length;
                        const clusterKey = branchClusterKey(b.name, cluster);
                        const canExpandCluster = renderEntries.length > 1;
                        const expanded = canExpandCluster ? expandedClumps.get(clusterKey) : undefined;
                        const { isExpanded, phase } = canExpandCluster
                          ? resolveClumpPhase(expanded)
                          : { isExpanded: false, phase: 'collapsed' as const };
                        if (count <= 1 || !isExpanded || phase !== 'expanded') return null;
                        const caretClusterHasBranchTip =
                          branchEndDotIndex != null &&
                          cluster.entries.some((entry) => entry.item.index === branchEndDotIndex);
                        const caretClusterHasPrimaryCheckout =
                          checkedOutHeadSha != null &&
                          cluster.entries.some((entry) => {
                            const commit = entry.item.commit;
                            if (commit && commit.kind !== 'branch-created') {
                              return shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) || shaMatchesGitRef(commit.sha, checkedOutHeadSha);
                            }
                            if (checkedOutBranchName === b.name && branchEndDotIndex === entry.item.index) {
                              return shaMatchesGitRef(b.headSha, checkedOutHeadSha);
                            }
                            return false;
                          });
                        const caretClusterHasOtherWorktree = cluster.entries.some((entry) => {
                          const commit = entry.item.commit;
                          if (commit && commit.kind !== 'branch-created') {
                            return otherWorktreeMatchesBranchCommit(b.name, commit.fullSha, commit.sha ?? '');
                          }
                          if (branchEndDotIndex === entry.item.index) {
                            return otherWorktreeMatchesBranchCommit(
                              b.name,
                              b.headSha,
                              b.headSha.slice(0, 7),
                            );
                          }
                          return false;
                        });
                        const caretClusterCheckoutAccent = caretClusterHasPrimaryCheckout
                          ? 'primary'
                          : caretClusterHasOtherWorktree
                            ? 'other'
                            : 'none';
                        const caretClusterHasSelectedCommit =
                          cluster.entries.some((entry) => {
                            const commitSha = entry.item.commit?.fullSha;
                            return !!commitSha && selectedCommitShaSet.has(commitSha);
                          });
                        const caretClusterIsSelected =
                          caretClusterHasSelectedCommit ||
                          (caretClusterHasBranchTip &&
                            selectedBranchNameSet.has(b.name));

                        const localRect = commitRectSize(scaledNodeSize, 0);
                        const collapseIconSize = nodeFrameCollapseIconSize;
                        const collapseHitSize = worldPx(16);
                        const collapseStrokeWidth = 1;
                        const topExpandedEntry = renderEntries.reduce(
                          (top, entry) => {
                            const isBetter = isHorizontal ? entry.x > top.x : entry.y < top.y;
                            return isBetter ? entry : top;
                          },
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
                              stroke={getNodeFrameTitleColor(clusterKey, caretClusterCheckoutAccent, caretClusterIsSelected)}
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

                </g>
              </g>
            </g>
          </svg>
        </div>
        {marqueeRect && (
          <div
            className="absolute pointer-events-none z-40"
            style={{
              left: marqueeRect.left,
              top: marqueeRect.top,
              width: marqueeRect.width,
              height: marqueeRect.height,
              border: `${CANVAS_NODE_STROKE_WIDTH}px solid ${USER_SELECTION_STROKE}`,
              borderRadius: 0,
              backgroundColor: 'transparent',
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

        {/* Empty state removed as per user request */}
      </div>

      {/* Bottom chrome: timeline controls — absolute so it stays inside the map
          container and respects visibility:hidden when the diff view is shown. */}
      <div
        data-map-ui
        className="absolute bottom-6 left-6 right-6 z-50 flex flex-col gap-2 pointer-events-none [&_button]:pointer-events-auto"
        onMouseDownCapture={(event) => {
          if ((event.target as Element | null)?.closest('button')) {
            event.stopPropagation();
          }
        }}
      >

        {/* Controls row */}
        <div
          className="pointer-events-none flex items-center justify-between gap-4"
          style={{
            opacity: isLoading || !controlsReady ? 0 : 1,
            transition: 'opacity 0.4s ease',
          }}
        >
          <div className="flex items-center gap-2 min-w-0">
            {(() => {
              const canCommit = !hasSelection && !!onCommitLocalChanges && !commitDisabled;
              const canStage = !hasSelection && !!onStageAllChanges && !commitDisabled;
              const canStash = !hasSelection && !!onStashLocalChanges && !stashDisabled;
              const canPushSelected = resolvedSelectedPushTargets.length > 0 && !!onPushCommitTargets;
              const canPushAll = !hasSelection && !!onPushAllBranches && pushableRemoteBranchCount >= 2 && !canCommit;
              const canPushCurrent = !hasSelection && !!onPushCurrentBranch && canPushCurrentBranch && !canCommit && !canPushAll;

              type GitPrimaryAction =
                | { kind: 'commit'; label: string; title: string; run: () => void }
                | { kind: 'push-selected'; label: string; title: string; run: () => void }
                | { kind: 'push-all'; label: string; title: string; run: () => void }
                | { kind: 'push-current'; label: string; title: string; run: () => void }
                | { kind: 'none'; label: string; title: string; run: () => void };

              const primaryAction: GitPrimaryAction =
                canCommit
                  ? { kind: 'commit', label: commitInProgress ? 'Committing…' : 'Commit', title: 'Stage all changes and commit with your message', run: () => setCommitDialogOpen(true) }
                  : canPushSelected
                    ? { kind: 'push-selected', label: pushInProgress ? 'Pushing...' : selectedPushLabel, title: selectedPushTitle, run: () => void handlePushSelectedTargets() }
                    : canPushAll
                      ? { kind: 'push-all', label: pushInProgress ? 'Pushing...' : 'Push all', title: 'Push every local branch that still has commits to send', run: () => void onPushAllBranches?.() }
                      : canPushCurrent
                        ? { kind: 'push-current', label: pushInProgress ? 'Pushing...' : pushCurrentBranchLabel, title: 'Push the branch that is currently checked out', run: () => void onPushCurrentBranch?.() }
                        : { kind: 'none', label: '', title: 'Open git actions menu', run: openGitActionMenu };

              const anyActionDisabled =
                pushInProgress || mergeInProgress || commitInProgress || stashInProgress || stageInProgress;

              const hasPossibleGitAction =
                canPushSelected || canPushAll || canPushCurrent || canCommit || canStash || canStage;

              if (!hasPossibleGitAction) return null;

              return (
                <div ref={gitActionMenuRef} className="relative shrink-0 pointer-events-auto">
                  <div className="inline-flex rounded-full border border-border bg-card overflow-hidden">
                    <button
                      type="button"
                      onClick={primaryAction.run}
                      disabled={anyActionDisabled || primaryAction.kind === 'none'}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                      title={primaryAction.title}
                      aria-label={primaryAction.title}
                    >
                      {primaryAction.kind === 'commit' && (
                        <GitCommitHorizontal className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      )}
                      {primaryAction.label}
                    </button>
                    <button
                      type="button"
                      onClick={toggleGitActionMenu}
                      disabled={anyActionDisabled}
                      className="inline-flex items-center px-2 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                      aria-haspopup="menu"
                      aria-expanded={gitActionMenuOpen}
                      title="Open git actions menu"
                      aria-label="Open git actions menu"
                    >
                      <ChevronDown className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    </button>
                  </div>

                  <AnimatePresence>
                    {gitActionMenuOpen && (
                      <motion.div
                        role="menu"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={DROPDOWN_SPRING_VARIANTS}
                        className="absolute bottom-full left-0 mb-2 min-w-[260px] rounded-xl border border-border bg-card/95 backdrop-blur-sm p-2 z-[60] origin-bottom-left transform-gpu"
                      >
                      <div className="flex flex-col gap-1">
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            closeGitActionMenu();
                            void handlePushSelectedTargets();
                          }}
                          disabled={anyActionDisabled || !canPushSelected}
                          className="w-full text-left rounded-lg px-2 py-1.5 text-xs text-foreground hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          title={selectedPushTitle}
                          aria-label={selectedPushTitle}
                        >
                          {selectedPushLabel}
                        </button>

                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            closeGitActionMenu();
                            void onPushAllBranches?.();
                          }}
                          disabled={anyActionDisabled || !canPushAll}
                          className="w-full text-left rounded-lg px-2 py-1.5 text-xs text-foreground hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Push every local branch that still has commits to send"
                          aria-label="Push all branches"
                        >
                          Push all
                        </button>

                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            closeGitActionMenu();
                            void onPushCurrentBranch?.();
                          }}
                          disabled={anyActionDisabled || !canPushCurrent}
                          className="w-full text-left rounded-lg px-2 py-1.5 text-xs text-foreground hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Push the branch that is currently checked out"
                          aria-label="Push current branch"
                        >
                          {pushCurrentBranchLabel}
                        </button>

                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            closeGitActionMenu();
                            setCommitDialogOpen(true);
                          }}
                          disabled={anyActionDisabled || !canCommit}
                          className="w-full text-left rounded-lg px-2 py-1.5 text-xs text-foreground hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Stage all changes and commit with your message"
                          aria-label="Commit local changes"
                        >
                          Commit…
                        </button>

                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            closeGitActionMenu();
                            void onStashLocalChanges?.();
                          }}
                          disabled={anyActionDisabled || !canStash}
                          className="w-full text-left rounded-lg px-2 py-1.5 text-xs text-foreground hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Stash local changes (tracked and untracked)"
                          aria-label="Stash local changes"
                        >
                          Stash
                        </button>

                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            closeGitActionMenu();
                            void onStageAllChanges?.();
                          }}
                          disabled={anyActionDisabled || !canStage}
                          className="w-full text-left rounded-lg px-2 py-1.5 text-xs text-foreground hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Stage all changes (git add -A)"
                          aria-label="Stage all changes"
                        >
                          Stage all
                        </button>
                      </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })()}
            {!hasSelection &&
              worktrees.length > 0 &&
              (onRemoveWorktree || onSwitchToWorktree) && (
              <div ref={worktreeMenuRef} className="relative shrink-0 pointer-events-auto">
                <button
                  type="button"
                  onClick={toggleWorktreeMenu}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card pl-3 pr-2 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent"
                  aria-expanded={worktreeMenuOpen}
                  aria-haspopup="menu"
                  title="Git worktrees: additional checkouts of this repository"
                  aria-label={`${worktrees.length} ${worktrees.length === 1 ? 'worktree' : 'worktrees'}, menu`}
                >
                  <span>
                    {worktrees.length} {worktrees.length === 1 ? 'Worktree' : 'Worktrees'}
                  </span>
                  <ChevronDown
                    className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
                    aria-hidden
                  />
                </button>
                <AnimatePresence>
                  {worktreeMenuOpen && (
                    <motion.div
                      role="menu"
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={DROPDOWN_SPRING_VARIANTS}
                      className="absolute bottom-full left-0 mb-2 min-w-[280px] max-w-[min(100vw-3rem,420px)] rounded-xl border border-border bg-card/95 backdrop-blur-sm p-2 z-[60] origin-bottom-left transform-gpu"
                    >
                    <ul className="flex flex-col gap-1 max-h-52 overflow-y-auto">
                      {worktrees.map((wt) => (
                        <li
                          key={wt.path}
                          className="flex items-start gap-2 rounded-lg px-2 py-1.5 text-xs text-foreground hover:bg-muted/50 transition-colors"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="font-medium truncate" title={wt.path}>
                              {!isOtherWorktree(wt) ? 'This window' : worktreeShortLabel(wt.path)}
                            </div>
                            <div className="text-muted-foreground truncate">
                              {wt.branchName ?? 'detached'} · {wt.headSha.slice(0, 7)}
                              {wt.isPrunable && (
                                <span className="ml-1 text-amber-600 dark:text-amber-400">prunable</span>
                              )}
                            </div>
                            {wt.pathExists === false && (
                              <p className="text-[10px] text-amber-600 dark:text-amber-400 mt-1 leading-snug">
                                Folder was removed; Git still lists this worktree. Remove here or run{' '}
                                <span className="font-mono">git worktree prune</span> in the repository.
                              </p>
                            )}
                          </div>
                          {isOtherWorktree(wt) && (
                            <div className="flex shrink-0 items-center gap-1">
                              {onSwitchToWorktree && (
                                <button
                                  type="button"
                                  role="menuitem"
                                  className="rounded-lg border border-border px-2 py-1 text-xs font-medium transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                                  disabled={
                                    removeWorktreeInProgress || wt.pathExists === false
                                  }
                                  title={
                                    wt.pathExists === false
                                      ? 'Folder missing — remove the worktree or run git worktree prune'
                                      : 'Open this repository in this window'
                                  }
                                  aria-label={`Switch app to worktree ${worktreeShortLabel(wt.path)}`}
                                  onClick={() => {
                                    closeWorktreeMenu();
                                    void onSwitchToWorktree(wt.path);
                                  }}
                                >
                                  Switch
                                </button>
                              )}
                              {onRemoveWorktree && (
                                <button
                                  type="button"
                                  role="menuitem"
                                  className="rounded-lg border border-border px-2 py-1 text-xs font-medium transition-colors hover:bg-accent disabled:opacity-50"
                                  disabled={removeWorktreeInProgress}
                                  title={
                                    wt.isPrunable
                                      ? 'Remove with --force (stale or broken worktree)'
                                      : 'Remove worktree'
                                  }
                                  aria-label={`Remove worktree ${worktreeShortLabel(wt.path)}`}
                                  onClick={() => void onRemoveWorktree(wt.path, wt.isPrunable)}
                                >
                                  {removeWorktreeInProgress ? '…' : 'Remove'}
                                </button>
                              )}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
            {/* push-through selection is now in the Git actions dropdown */}
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
                          className={`px-2 py-1 rounded-full text-xs leading-none select-none transition-colors ${isActiveTarget
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
            <div className="flex items-center gap-1 shrink-0 bg-card border border-border rounded-full p-1">
              <button
                onClick={() => handleOrientationChange('vertical')}
                className={`px-2.5 py-1 rounded-full text-xs leading-none select-none transition-colors ${orientation === 'vertical'
                  ? 'bg-primary/10 text-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                title="Timeline runs top to bottom"
              >
                Vertical
              </button>
              <button
                onClick={() => handleOrientationChange('horizontal')}
                className={`px-2.5 py-1 rounded-full text-xs leading-none select-none transition-colors ${orientation === 'horizontal'
                  ? 'bg-primary/10 text-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                title="Timeline runs left to right"
              >
                Horizontal
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Node drag: drop-zone column highlights ─────────────────────────────── */}
      {nodeDragDisplay && (() => {
        const projection = selectionProjectionRef.current;
        const cameraScale = getCameraScale(zoomRef.current, projection.isHorizontal);
        const highlights = branchHeadTargetsRef.current
          .filter((t) => moveBackCandidateBranchNamesRef.current.has(t.branchName))
          .map((t) => {
            const centerX =
              panRef.current.x +
              projection.graphOffsetX +
              (projection.graphContentTranslateX + t.point.x) * cameraScale.x;
            return { branchName: t.branchName, centerX };
          });
        if (highlights.length === 0) return null;
        return (
          <>
            {highlights.map((h) => (
              <div
                key={h.branchName}
                style={{
                  position: 'absolute',
                  left: h.centerX - 44,
                  top: 0,
                  width: 88,
                  bottom: 0,
                  background: `${CHECKED_OUT_SELECTION_STROKE}18`,
                  borderLeft: `1.5px dashed ${CHECKED_OUT_SELECTION_STROKE}55`,
                  borderRight: `1.5px dashed ${CHECKED_OUT_SELECTION_STROKE}55`,
                  pointerEvents: 'none',
                  zIndex: 6,
                }}
              />
            ))}
            {highlights.map((h) => (
              <div
                key={`${h.branchName}-label`}
                style={{
                  position: 'absolute',
                  left: h.centerX - 52,
                  top: 16,
                  width: 104,
                  pointerEvents: 'none',
                  zIndex: 7,
                }}
                className="text-center"
              >
                <span className="inline-block rounded-lg border border-border/60 bg-card/90 backdrop-blur-sm px-2 py-1 text-[10px] leading-tight text-muted-foreground shadow-sm">
                  Drop to move back
                  <br />
                  <span className="font-medium text-foreground">{h.branchName}</span>
                </span>
              </div>
            ))}
          </>
        );
      })()}


      {/* ── New branch name dialog (triggered by node drag) ─────────────────────── */}
      {newBranchDialogForNode && (
        <div
          className="absolute inset-0 z-[70] flex items-center justify-center bg-background/70 backdrop-blur-sm p-4"
          onClick={() => {
            if (!createBranchFromNodeInProgress) setNewBranchDialogForNode(null);
          }}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="new-branch-dialog-title"
            className="w-full max-w-sm rounded-2xl border border-border bg-card shadow-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p id="new-branch-dialog-title" className="text-sm font-medium text-foreground">
              {newBranchDialogForNode.stashIndex !== undefined ? 'Move stash to new branch' : 'Move changes to new branch'}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {newBranchDialogForNode.stashIndex !== undefined
                ? "A new branch will be created at the stash's base commit and the stash will be applied as uncommitted changes."
                : "A new branch will be created at the current HEAD. Your uncommitted changes will follow."}
            </p>
            <label
              htmlFor="new-branch-name-input"
              className="mt-3 block text-[10px] uppercase tracking-wide text-muted-foreground font-medium"
            >
              Branch name
            </label>
            <input
              id="new-branch-name-input"
              ref={newBranchInputForNodeRef}
              type="text"
              value={newBranchNameForNode}
              onChange={(e) => setNewBranchNameForNode(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && newBranchNameForNode.trim() && !createBranchFromNodeInProgress) {
                  void (async () => {
                    const name = newBranchNameForNode.trim();
                    const nodeId = newBranchDialogForNode.nodeId;
                    setNewBranchDialogForNode(null);
                    await onCreateBranchFromNode?.(nodeId, name);
                  })();
                }
                if (e.key === 'Escape' && !createBranchFromNodeInProgress) {
                  setNewBranchDialogForNode(null);
                }
              }}
              disabled={createBranchFromNodeInProgress}
              placeholder="e.g. feature/my-changes"
              autoComplete="off"
              spellCheck={false}
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 font-mono"
            />
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  if (!createBranchFromNodeInProgress) setNewBranchDialogForNode(null);
                }}
                disabled={createBranchFromNodeInProgress}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  const name = newBranchNameForNode.trim();
                  if (!name || createBranchFromNodeInProgress) return;
                  const nodeId = newBranchDialogForNode.nodeId;
                  setNewBranchDialogForNode(null);
                  void onCreateBranchFromNode?.(nodeId, name);
                }}
                disabled={createBranchFromNodeInProgress || !newBranchNameForNode.trim()}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
              >
                {createBranchFromNodeInProgress ? 'Creating…' : 'Create branch'}
              </button>
            </div>
          </div>
        </div>
      )}

      {commitDialogOpen && (
        <div
          className="absolute inset-0 z-[70] flex items-center justify-center bg-background/70 backdrop-blur-sm p-4"
          onClick={() => {
            if (!commitInProgress) setCommitDialogOpen(false);
          }}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="commit-dialog-title"
            className="w-full max-w-md rounded-2xl border border-border bg-card shadow-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p id="commit-dialog-title" className="text-sm font-medium text-foreground">
              Create commit
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Stages all changes in the repository, then commits on your current HEAD.
            </p>
            <label
              htmlFor="commit-message-input"
              className="mt-3 block text-[10px] uppercase tracking-wide text-muted-foreground font-medium"
            >
              Commit message
            </label>
            <textarea
              id="commit-message-input"
              ref={commitMessageRef}
              value={commitMessageDraft}
              onChange={(e) => setCommitMessageDraft(e.target.value)}
              onKeyDown={handleCommitMessageKeyDown}
              rows={4}
              disabled={commitInProgress}
              placeholder="Describe your changes"
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y min-h-[5rem] disabled:opacity-50"
            />
            <p className="mt-1 text-[10px] text-muted-foreground">
              ⌘ Enter or Ctrl+Enter to commit
            </p>
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  if (!commitInProgress) setCommitDialogOpen(false);
                }}
                disabled={commitInProgress}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => void handleConfirmCommit()}
                disabled={commitInProgress || !commitMessageDraft.trim()}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
              >
                {commitInProgress ? 'Committing…' : 'Commit'}
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteConfirmOpen && (
        <div className="absolute inset-0 z-[70] flex items-center justify-center bg-background/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-card shadow-lg p-4">
            <p className="text-sm font-medium text-foreground">
              are you sure you want to delete these elements?
            </p>
            <div className="mt-2 flex flex-col gap-1.5">
              {deleteSelectionItems.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-border/50 bg-card px-2.5 py-1.5 text-xs text-muted-foreground leading-5"
                >
                  {item}
                </div>
              ))}
            </div>
            {selectedDeletableBranchNames.length > 0 && (
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Any linked Git worktree that still has one of these branches checked out is removed first, then the branch
                ref is deleted, then <span className="font-mono">git worktree prune</span> runs.
              </p>
            )}
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                onClick={() => setDeleteConfirmOpen(false)}
                disabled={deleteInProgress}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={() => void handleConfirmDeleteSelection()}
                disabled={deleteInProgress || deletableSelectionCount === 0}
                className="rounded-lg bg-red-50 dark:bg-red-900/20 px-3 py-1.5 text-xs font-medium text-red-600 dark:text-red-400 transition-colors hover:bg-red-50/80 dark:hover:bg-red-900/30 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {deleteInProgress ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Lineage debug panel ── */}
      <div
        className={`fixed left-4 top-14 bottom-6 w-[520px] flex flex-col bg-card/90 backdrop-blur-sm rounded-2xl border border-border shadow-lg z-40 transition-all duration-300 ease-in-out ${
          showLineageDebug ? 'translate-x-0 opacity-100' : 'translate-x-[calc(-100%-2rem)] opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 shrink-0">
          <span className="text-sm font-medium text-foreground">Commit Lineage</span>
          <button
            onClick={() => setShowLineageDebug(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-2 font-mono text-[11px] leading-relaxed">
          {(() => {
            const sha7 = (sha: string): string => {
              if (sha === 'WORKING_TREE') return '*uncommitted*';
              if (sha.startsWith('STASH:')) return `*stash:${sha.slice('STASH:'.length)}*`;
              return /^[0-9a-f]{7,40}$/i.test(sha) ? sha.slice(0, 7) : sha;
            };

            // Build a lookup: which branch heads got merged, and into which merge commit
            const mergedHeadToMergeCommit = new Map<string, { mergeSha: string; targetBranch: string; prNumber: number | null }>();
            for (const node of sortedNodes) {
              const mergedParents = node.parentShas?.slice(1) ?? [];
              for (const parentSha of mergedParents) {
                if (parentSha) {
                  mergedHeadToMergeCommit.set(parentSha, {
                    mergeSha: node.fullSha,
                    targetBranch: node.targetBranch ?? defaultBranch,
                    prNumber: node.prNumber,
                  });
                }
              }
            }

            // Build a lookup: which main-line commits are merge commits, and what branches merged into them
            const mergeInfoByMainSha = new Map<string, { mergedShas: string[]; mergedBranches: string[] }>();
            for (const node of sortedNodes) {
              const mergedParents = node.parentShas?.slice(1) ?? [];
              if (mergedParents.length === 0) continue;
              const mergedBranches: string[] = [];
              for (const parentSha of mergedParents) {
                const branch = mergedBranchByHeadSha.get(parentSha);
                if (branch) mergedBranches.push(branch.name);
              }
              mergeInfoByMainSha.set(node.fullSha, {
                mergedShas: mergedParents,
                mergedBranches,
              });
            }

            // Build a lookup: which commits on which branches are fork points for child branches
            const forkAnnotations = new Map<string, string[]>(); // "branchName::sha" -> child branch names
            const addForkAnnotation = (branchName: string, sha: string, childName: string) => {
              const key = `${branchName}::${sha}`;
              const existing = forkAnnotations.get(key) ?? [];
              existing.push(childName);
              forkAnnotations.set(key, existing);
            };

            // For each active branch, find which parent commit it forked from
            for (const branch of activeBranches) {
              const parentName = renderParentBranchName(branch);
              const forkSha = branch.divergedFromSha ?? branch.createdFromSha;
              if (forkSha) {
                addForkAnnotation(parentName, forkSha, branch.name);
              }
            }

            type BranchLine = {
              name: string;
              fromLabel: string | null; // e.g. "from abc1234 on main"
              commits: Array<{
                sha: string;
                annotations: string[]; // e.g. "(merge from branch-x)", "(fork → branch-y)"
              }>;
              mergedTo: string | null; // e.g. "merged to abc1234 on main"
              debugLayout?: {
                forkY: number;
                startX: number;
                lanePosX: number;
                parentName: string;
                forkTimeX: number;
                createdFromSha: string;
                divergedFromSha: string;
                commitXCreated: number | null;
                commitXDiverged: number | null;
              };
            };

            const lines: BranchLine[] = [];

            // === Main branch ===
            {
              const commits: BranchLine['commits'] = [];
              for (const commit of sortedDirectCommits) {
                const annotations: string[] = [];

                // Check if this is a merge commit
                const mergeInfo = mergeInfoByMainSha.get(commit.fullSha);
                if (mergeInfo) {
                  if (mergeInfo.mergedBranches.length > 0) {
                    annotations.push(`merge from ${mergeInfo.mergedBranches.join(', ')}`);
                  } else {
                    annotations.push(`merge from ${mergeInfo.mergedShas.map(sha7).join(', ')}`);
                  }
                }

                // Check if child branches forked here
                const forkKey = `${defaultBranch}::${commit.fullSha}`;
                const forkedChildren = forkAnnotations.get(forkKey);
                if (forkedChildren && forkedChildren.length > 0) {
                  annotations.push(`fork → ${forkedChildren.join(', ')}`);
                }

                commits.push({ sha: commit.fullSha, annotations });
              }
              lines.push({ name: defaultBranch, fromLabel: null, commits, mergedTo: null });
            }

            // === Active branches ===
            for (const branch of activeBranches) {
              const parentName = renderParentBranchName(branch);
              const forkSha = branch.divergedFromSha ?? branch.createdFromSha;
              const fromLabel = forkSha
                ? `from ${sha7(forkSha)} on ${parentName}`
                : `from ${parentName}`;

              const previews = sortedConcreteBranchPreviews(branch.name);
              const commits: BranchLine['commits'] = [];

              for (const commit of previews) {
                const annotations: string[] = [];

                // Check if child branches forked here
                const forkKey = `${branch.name}::${commit.fullSha}`;
                const forkedChildren = forkAnnotations.get(forkKey);
                if (forkedChildren && forkedChildren.length > 0) {
                  annotations.push(`fork → ${forkedChildren.join(', ')}`);
                }

                commits.push({ sha: commit.fullSha, annotations });
              }

              // Check if this branch was merged
              let mergedTo: string | null = null;
              const isMerged = branch.commitsAhead === 0 && !freshCopyBranchNames.has(branch.name);
              if (isMerged) {
                const mergeTarget = mergedHeadToMergeCommit.get(branch.headSha);
                if (mergeTarget) {
                  mergedTo = `merged to ${sha7(mergeTarget.mergeSha)} on ${mergeTarget.targetBranch}${
                    mergeTarget.prNumber != null ? ` (PR #${mergeTarget.prNumber})` : ''
                  }`;
                } else {
                  mergedTo = `merged to ${parentName}`;
                }
              }

              lines.push({
                name: branch.name,
                fromLabel,
                commits,
                mergedTo,
                // Debug: actual layout values
                debugLayout: (() => {
                  const layout = getBranchRenderLayout(branch);
                  const timing = branchTimingByName.get(branch.name);
                  return {
                    forkY: Math.round(layout.forkY),
                    startX: Math.round(layout.startX),
                    lanePosX: Math.round(layout.lanePosX),
                    parentName: timing?.parentName ?? '?',
                    forkTimeX: Math.round(timing?.forkTimeX ?? 0),
                    createdFromSha: branch.createdFromSha?.slice(0, 7) ?? 'null',
                    divergedFromSha: branch.divergedFromSha?.slice(0, 7) ?? 'null',
                    commitXCreated: branch.createdFromSha ? commitXForSha(branch.createdFromSha) : null,
                    commitXDiverged: branch.divergedFromSha ? commitXForSha(branch.divergedFromSha) : null,
                  };
                })(),
              });
            }

            return (
              <div className="space-y-0.5 px-4 py-2 select-text">
                {lines.map((line) => (
                  <div key={line.name} className="py-2 border-b border-border/30">
                    <div className="flex items-baseline gap-1 flex-wrap">
                      {/* Branch name */}
                      <span className="text-foreground font-semibold shrink-0">{line.name}</span>
                      {/* From label */}
                      {line.fromLabel && (
                        <span className="text-muted-foreground/50 shrink-0">({line.fromLabel})</span>
                      )}
                      <span className="text-muted-foreground/40 shrink-0">:</span>
                    </div>

                    {/* Commit chain */}
                    <div className="mt-1 text-muted-foreground leading-relaxed break-all">
                      {line.commits.length === 0 ? (
                        <span className="text-muted-foreground/40 italic">no preview commits</span>
                      ) : (
                        line.commits.map((commit, i) => (
                          <span key={commit.sha}>
                            {i > 0 && (
                              <span className="text-muted-foreground/30 mx-0.5">{' > '}</span>
                            )}
                            <span className="text-foreground">{sha7(commit.sha)}</span>
                            {commit.annotations.map((anno, j) => (
                              <span key={j} className="text-amber-600 dark:text-amber-400">
                                ({anno})
                              </span>
                            ))}
                          </span>
                        ))
                      )}
                      {/* Merged-to suffix */}
                      {line.mergedTo && (
                        <>
                          <span className="text-muted-foreground/30 mx-0.5">{' → '}</span>
                          <span className="text-green-600 dark:text-green-400">{line.mergedTo}</span>
                        </>
                      )}
                    </div>
                    {/* Debug layout values */}
                    {line.debugLayout && (
                      <div className="mt-1 text-[10px] text-blue-600 dark:text-blue-400">
                        forkY={line.debugLayout.forkY} startX={line.debugLayout.startX} laneX={line.debugLayout.lanePosX} parent={line.debugLayout.parentName} forkTimeX={line.debugLayout.forkTimeX} created={line.debugLayout.createdFromSha} diverged={line.debugLayout.divergedFromSha} cX={line.debugLayout.commitXCreated ?? 'null'} dX={line.debugLayout.commitXDiverged ?? 'null'}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            );
          })()}
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
