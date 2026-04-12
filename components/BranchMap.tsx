import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Loader2, X } from 'lucide-react';
import { Branch, BranchCommitPreview, BranchPromptMeta, CheckedOutRef, DirectCommit, MergeNode, OpenPR } from '../types';
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
const GRID_CELL_GAP = 5;
const GRID_ROW_GAP = GRID_NODE_RECT.height + GRID_CELL_GAP;
const GRID_LANE_WIDTH = GRID_NODE_RECT.width + GRID_CELL_GAP;
const GRID_LANE_OFFSET_X = 0;
const GRID_LANE_MIN_SEPARATION = GRID_ROW_GAP;
const GRID_ROUTE_CORNER_R = 9;
const GRID_MERGE_EVENT_ROW_NUDGE = 0.001;
const LOCAL_UNPUSHED_GRAY = '#E0E0E0';
const CANVAS_NEUTRAL_GRAY = '#E0E0E0';
const CANVAS_NEUTRAL_GRAY_HOVER = '#44403c';
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

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
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
  defaultBranch: string;
  onHoveredBranchChange?: (branchName: string | null) => void;
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
}

export default function BranchMap({
  branches,
  mergeNodes,
  directCommits = [],
  defaultBranch,
  onHoveredBranchChange,
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
}: BranchMapProps) {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);
  const [hoveredNodeStrokeKey, setHoveredNodeStrokeKey] = useState<string | null>(null);
  const [hoveredNodeBranchName, setHoveredNodeBranchName] = useState<string | null>(null);
  const [expandedClumps, setExpandedClumps] = useState<Map<string, ExpandedClumpState>>(() => new Map());
  const [zoom, setZoom] = useState(ZOOM_DEFAULT);
  const [orientation, setOrientation] = useState<OrientationMode>('vertical');

  const [showLineageDebug, setShowLineageDebug] = useState(false);
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
  const branchLineGeometryStateRef = useRef<Map<string, BranchLineGeometryState>>(new Map());
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
    clearTransientHoverState();
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
      onUpdate(current + delta * 0.26);
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
    for (const state of branchLineStates.values()) {
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
      kind: commit.kind === 'uncommitted' ? 'uncommitted' : 'commit',
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
        (commit) => commit.fullSha === 'WORKING_TREE' || commit.kind === 'uncommitted'
      );
      const mainAllocatorSplitIndices = new Set<number>([
        ...mainForkIdx,
        ...mainCommitSplitIndices,
        ...mainUncommittedSplitIndices,
      ]);
      const mainAllocatorPreserveSplitIndices = new Set<number>([
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
      const effectiveForkIdx = pruneForkSplitIndices(previews.length, forkIdx);
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
          const claimedRow = claimRow(entityKey, rowTime);
          if (firstRow == null) firstRow = claimedRow;
          if (sha) assignShaRow(sha, claimedRow);
          if (slotIndex != null) assignSlotRow(slotIndex, claimedRow);
        }
        clump.rowIndex = firstRow ?? claimRow(`clump:${clump.key}`, clump.latestTime);
      } else {
        const clumpRow = claimRow(`clump:${clump.key}`, clump.latestTime);
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

    if (usedRows.size === 0) {
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
        kind: commit.kind === 'uncommitted' ? 'uncommitted' : 'commit',
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
    const preserveSplitIndices = parentName === defaultBranch
      ? forcedMainSplitIndices
      : undefined;

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
  const NODE_FRAME_LABEL_TOP_GAP_PX = 1;
  const NODE_FRAME_LABEL_LEFT_INSET_PX = 0;
  const NODE_FRAME_LABEL_RIGHT_INSET_PX = 0;
  const NODE_FRAME_LABEL_PAIR_GAP_PX = 2;
  const NODE_FRAME_LABEL_COLOR = '#78716c';
  const NODE_FRAME_LABEL_WEIGHT = 400;
  const nodeFrameLabelFontSize = worldPx(NODE_FRAME_LABEL_FONT_PX);
  const nodeFrameLabelGap = worldPx(NODE_FRAME_LABEL_TOP_GAP_PX);
  const nodeFrameLabelInsetX = worldPx(NODE_FRAME_LABEL_LEFT_INSET_PX);
  const nodeFrameLabelRightInsetX = worldPx(NODE_FRAME_LABEL_RIGHT_INSET_PX);
  const nodeFrameLabelPairGap = worldPx(NODE_FRAME_LABEL_PAIR_GAP_PX);
  const nodeFrameCollapseIconSize = worldPx(12);
  const shortShaLabel = (sha?: string | null): string => {
    if (!sha) return '-------';
    if (sha === 'WORKING_TREE') return 'Uncommited Changes';
    // Only abbreviate real commit SHAs. Keep human-readable synthetic labels intact.
    return /^[0-9a-f]{7,40}$/i.test(sha) ? sha.slice(0, 7) : sha;
  };
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
  const drawPathArcClass = (!ENABLE_TIMELINE_INTRO_ANIMATIONS || animationsLocked) ? undefined : 'draw-path-arc';
  const drawPathMainClass = drawPathArcClass;
  const fadeInInfoClass = (!ENABLE_TIMELINE_INTRO_ANIMATIONS || animationsLocked) ? undefined : 'fade-in-info';
  const mainTimelineOpacity = 1;
  const timelineCanvasVisible = timelineRevealPhase !== 'hidden';
  const holdTimelineForInitialCenter =
    isLoading || (!hasInitialRevealDone && hasTimelineSeedData && timelineRevealPhase !== 'done' && !hasUserMovedCameraRef.current);

  const clumpExpandMs = 160;
  const clumpCollapseMs = 240;
  const clumpRowReleaseDelayMs = 24;
  const clumpExpandEasing = 'cubic-bezier(0.16, 1, 0.3, 1)';
  const clumpCollapseEasing = 'cubic-bezier(0.7, 0, 0.84, 0)';
  const clumpPhaseDurationMs = (phase: ExpandedClumpState['phase']): number =>
    phase === 'collapsing' ? clumpCollapseMs : clumpExpandMs;
  const clumpPhaseEasing = (phase: ExpandedClumpState['phase'], progress: number): number => {
    if (phase === 'collapsing') return 1 - easeOutCubic(1 - progress);
    if (phase === 'expanding') return easeOutCubic(progress);
    return progress;
  };
  function resolveClumpPhase(expandedState?: ExpandedClumpState): {
    isExpanded: boolean;
    phase: ExpandedClumpState['phase'];
    phaseEased: number;
  } {
    const isExpanded = expandedState?.isExpanded ?? false;
    const phase = expandedState?.phase ?? 'collapsed';
    const phaseStartedAtMs = expandedState?.phaseStartedAt ?? Date.now();
    const phaseDurationMs = clumpPhaseDurationMs(phase);
    const phaseProgress = phase === 'collapsed'
      ? 0
      : phase === 'expanded'
        ? 1
        : clamp01((Date.now() - phaseStartedAtMs) / phaseDurationMs);
    const phaseEased = phaseProgress <= 0
      ? 0
      : phaseProgress >= 1
        ? 1
        : clumpPhaseEasing(phase, phaseProgress);
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
    const opacity = phase === 'collapsing'
      ? 1 - phaseEased
      : phase === 'expanding'
        ? 1
        : phase === 'collapsed'
          ? 0
          : 1;
    const scale = phase === 'collapsing'
      ? (() => {
        // Collapse feel: shrink first, then rebound back to normal scale.
        if (phaseEased < 0.25) {
          const u = phaseEased / 0.25;
          return 1 - 0.04 * easeOutCubic(u);
        }
        const u = (phaseEased - 0.25) / 0.75;
        const rebound = 0.96 + 0.05 * easeOutCubic(u); // up to ~1.01
        return rebound - 0.01 * (u * u * u); // settle at 1.00
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
  function clearMainBranchHover() {
    setHoveredBranch((current) => (current === defaultBranch ? null : current));
  }
  function renderCommitNodeRect({
    nodeKey,
    centerX,
    centerY,
    rectSize,
    fill,
    baseStroke,
    isCheckedOutSelection = false,
    isUserSelected = false,
    strokeWidth = CANVAS_NODE_STROKE_WIDTH,
    strokeInset = strokeWidth / 2,
    dashed = false,
    cursor = undefined,
  }: {
    nodeKey: string;
    centerX: number;
    centerY: number;
    rectSize: ReturnType<typeof commitRectSize>;
    fill: string;
    baseStroke: string;
    isCheckedOutSelection?: boolean;
    isUserSelected?: boolean;
    strokeWidth?: number;
    strokeInset?: number;
    dashed?: boolean;
    cursor?: React.CSSProperties['cursor'];
  }) {
    return (
      <rect
        className="branch-map-commit-rect"
        x={centerX - rectSize.width / 2 + strokeInset}
        y={centerY - rectSize.height / 2 + strokeInset}
        width={rectSize.width - strokeWidth}
        height={rectSize.height - strokeWidth}
        data-base-rx={rectSize.radius}
        rx={rectSize.radius / Math.max(layerCameraScale.x, 0.0001)}
        fill={fill}
        stroke={getNodeStrokeColor(
          nodeKey,
          baseStroke,
          isCheckedOutSelection,
          isUserSelected,
        )}
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? '3 3' : undefined}
        strokeLinecap={dashed ? 'round' : undefined}
        strokeLinejoin={dashed ? 'round' : undefined}
        style={cursor ? { cursor } : undefined}
      />
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
        kind: commit.kind === 'uncommitted' ? 'uncommitted' : 'commit',
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
              kind: commit.kind === 'uncommitted' ? 'uncommitted' : 'commit',
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
        (entry) => entry.item.commit?.kind === 'uncommitted' || entry.item.commit?.fullSha === 'WORKING_TREE'
      );
      const defaultBranchSplitIndices = new Set<number>([
        ...mainForkIndices,
        ...mainCommitSplitIndices,
        ...mainUncommittedSplitIndices,
      ]);
      const defaultBranchPreserveSplitIndices = new Set<number>([
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

      const layout: BranchRenderLayout = {
        forkY,
        lanePosX,
        startX,
        isMergedBranch: false,
        isLocalBranch: false,
        mergeNodeTimeX: null,
        branchLineTipY,
        mergeBackPath: null,
        curvePath,
        hitCurvePath,
        hasPreviewData: true,
        visibleBranchCommits,
        uniqueAheadCount: visibleBranchCommits.filter((commit) => commit.kind !== 'branch-created').length,
        branchEndDotIndex,
        localCommitDotIndices: new Set<number>(),
        fullBranchShouldUseLocalGray: false,
        hasUncommittedPreview: visibleBranchCommits.some((commit) => commit.kind === 'uncommitted'),
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
    const hasUncommittedPreview = visibleBranchCommits.some((commit) => commit.kind === 'uncommitted');
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
    const branchUncommittedSplitIndices = splitIndicesAroundUncommitted(
      commitDotEntries,
      (entry) => entry.item.commit?.kind === 'uncommitted' || entry.item.commit?.fullSha === 'WORKING_TREE'
    );
    const branchSplitIndices = new Set<number>([
      ...branchForkIndices,
      ...branchUncommittedSplitIndices,
    ]);
    const commitDotClusters = clusterByForkPoints(
      commitDotEntries,
      branchSplitIndices,
      branchUncommittedSplitIndices,
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
    const phaseDurationMs = clumpPhaseDurationMs(phase);
    const phaseEasing = phase === 'collapsing' ? clumpCollapseEasing : clumpExpandEasing;
    return {
      transition: `transform ${phaseDurationMs}ms ${phaseEasing}, opacity ${phaseDurationMs}ms ${phaseEasing}`,
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

    const existingCleanupTimer = clumpCleanupTimersRef.current.get(clumpKey);
    if (existingCleanupTimer != null) {
      window.clearTimeout(existingCleanupTimer);
      clumpCleanupTimersRef.current.delete(clumpKey);
    }

    if (isExpanded) {
      // Collapse while rows start compacting shortly after collapse begins,
      // so surrounding content moves during the same motion window.
      const collapseStartedAt = Date.now();
      const rowReleaseAt = collapseStartedAt + clumpRowReleaseDelayMs;
      setExpandedClumps((prev) => {
        const next = new Map(prev);
        next.set(clumpKey, {
          isExpanded: true,
          phase: 'collapsing',
          phaseStartedAt: collapseStartedAt,
          rowReleaseAt,
        });
        return next;
      });

      // Drive re-renders so grid-row interpolation/fade stays smooth.
      const collapseTick = () => {
        const elapsed = Date.now() - collapseStartedAt;
        setClumpAnimationTick((v) => v + 1);
        if (elapsed < clumpCollapseMs) requestAnimationFrame(collapseTick);
      };
      requestAnimationFrame(collapseTick);

      const cleanupTimer = window.setTimeout(() => {
        setExpandedClumps((prev) => {
          const next = new Map(prev);
          next.delete(clumpKey);
          return next;
        });
        clumpCleanupTimersRef.current.delete(clumpKey);
      }, clumpCollapseMs);

      clumpCleanupTimersRef.current.set(clumpKey, cleanupTimer);
      return;
    }

    const expandStartedAt = Date.now();
    setExpandedClumps((prev) => {
      const next = new Map(prev);
      next.set(clumpKey, {
        isExpanded: true,
        phase: 'expanding',
        phaseStartedAt: expandStartedAt,
        rowReleaseAt: undefined,
      });
      return next;
    });

    // Drive re-renders while expanding so interpolation remains smooth.
    const expandTick = () => {
      const elapsed = Date.now() - expandStartedAt;
      setClumpAnimationTick((v) => v + 1);
      if (elapsed < clumpExpandMs) requestAnimationFrame(expandTick);
    };
    requestAnimationFrame(expandTick);

    const finalizeTimer = window.setTimeout(() => {
      setExpandedClumps((prev) => {
        const next = new Map(prev);
        const current = next.get(clumpKey);
        if (!current?.isExpanded) return prev;
        next.set(clumpKey, {
          isExpanded: true,
          phase: 'expanded',
          phaseStartedAt: expandStartedAt,
          rowReleaseAt: undefined,
        });
        return next;
      });
      clumpCleanupTimersRef.current.delete(clumpKey);
    }, clumpExpandMs);

    clumpCleanupTimersRef.current.set(clumpKey, finalizeTimer);
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
    clusterHasCheckedOutHead: boolean;
    clusterHasSelectedCommit: boolean;
    clusterHasUncommitted: boolean;
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
        clusterHasCheckedOutHead:
          checkedOutHeadSha != null &&
          directEntries.some((entry) => shaMatchesGitRef(entry.item.fullSha, checkedOutHeadSha)),
        clusterHasSelectedCommit:
          directEntries.some((entry) => selectedCommitShaRawSet.has(entry.item.fullSha)),
        clusterHasUncommitted:
          directEntries.some((entry) =>
            entry.item.fullSha === 'WORKING_TREE' || entry.item.kind === 'uncommitted'
          ),
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
  // Clumps are closed by default; no checked-out auto-expansion.

  function resolveBranchHeadProjectedPoint(branch: Branch, layout: BranchRenderLayout): { x: number; y: number } {
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


                  {/* ── Main timeline + merge nodes ── */}
                  <g
                    style={{ opacity: mainTimelineOpacity, transition: 'opacity 0.15s' }}
                    onMouseEnter={() => setHoveredBranch(defaultBranch)}
                    onMouseLeave={() => clearMainBranchHover()}
                  >
                    {!mainIsUnifiedRender && (
                      <>
                        <path
                          d={`M ${pathCoord(mainX, mainStartY)} L ${pathCoord(mainX, mainActiveEndY)}`}
                          fill="none"
                          stroke="transparent"
                          strokeWidth={branchHitStrokeWidth}
                          style={{ pointerEvents: branchLaneHitPointerEvents }}
                        />
                        {/* Use <path> not <line>: pathLength on <line> is SVG 2 only and unreliable in WKWebView */}
                        <path
                          d={`M ${pathCoord(mainX, mainStartY)} L ${pathCoord(mainX, mainActiveEndY)}`}
                          fill="none"
                          stroke={
                            selectedBranchNameSet.has(defaultBranch)
                              ? USER_SELECTION_STROKE
                              : (hoveredBranch === defaultBranch || hoveredNodeBranchName === defaultBranch)
                                ? CANVAS_NEUTRAL_GRAY_HOVER
                                : (
                                  checkedOutIndicatorLocal && Math.abs(checkedOutIndicatorLocal.x - mainX) < 0.5
                                    ? CHECKED_OUT_SELECTION_STROKE
                                    : CANVAS_NEUTRAL_GRAY
                                )
                          }
                          strokeWidth={1.5}
                          pathLength={1}
                          className={drawPathMainClass}
                          style={{
                            '--delay': `${MAIN_DRAW_MS}ms`,
                            transition: 'stroke 0.12s ease',
                          } as React.CSSProperties}
                        />

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
                              clusterHasCheckedOutHead,
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
                              const isUncommittedCommit = c.fullSha === 'WORKING_TREE';
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
                                    isUncommittedCommit ? CHECKED_OUT_SELECTION_STROKE : CANVAS_NODE_STROKE,
                                    clusterHasCheckedOutHead,
                                    clusterHasSelectedCommit || (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                  )}
                                  strokeWidth={CANVAS_NODE_STROKE_WIDTH}
                                  strokeDasharray={isUncommittedCommit ? '3 3' : undefined}
                                  strokeLinecap={isUncommittedCommit ? 'round' : undefined}
                                  strokeLinejoin={isUncommittedCommit ? 'round' : undefined}
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
                                        isUncommittedCommit ? 'Uncommited Changes' : `Commit ${c.sha}`,
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
                                      const isUncommittedCommit = c.fullSha === 'WORKING_TREE';
                                      const isCheckedOutCommit =
                                        checkedOutHeadSha != null && shaMatchesGitRef(c.fullSha, checkedOutHeadSha);
                                      return (
                                        <g
                                          key={commitKey}
                                          transform={`translate(${memberPose.x} ${memberPose.y})`}
                                          style={{ ...clumpAnimStyleForPhase(phase), pointerEvents: phase === 'expanded' ? 'auto' : 'none' }}
                                          opacity={memberPose.opacity}
                                        >
                                          <g transform={`scale(${memberPose.scale})`}>
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
                                                isUncommittedCommit ? CHECKED_OUT_SELECTION_STROKE : CANVAS_NODE_STROKE,
                                                isCheckedOutCommit,
                                                selectedCommitShaSet.has(c.fullSha) ||
                                                (clusterHasMainTip &&
                                                  selectedBranchNameSet.has(defaultBranch) &&
                                                  c.fullSha === latestMainCommitSha),
                                              )}
                                              strokeWidth={CANVAS_NODE_STROKE_WIDTH}
                                              strokeDasharray={isUncommittedCommit ? '3 3' : undefined}
                                              strokeLinecap={isUncommittedCommit ? 'round' : undefined}
                                              strokeLinejoin={isUncommittedCommit ? 'round' : undefined}
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
                                                    isUncommittedCommit ? 'Uncommited Changes' : `Commit ${c.sha}`,
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
                          hasPreviewData,
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
                          clockPoint,
                          forkY,
                          startX,
                          mergeTargetX,
                          mergeTargetY,
                        } = getBranchRenderLayout(b);
                        const renderedBranchHead = resolveBranchHeadProjectedPoint(b, getBranchRenderLayout(b));
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
                        const curvePath = buildBranchOrthogonalPath({
                          startX: animatedLine.startX,
                          forkY: animatedLine.forkY,
                          laneX: animatedLine.lanePosX,
                          tipY: animatedLine.tipY,
                          cornerR: routeCornerR,
                          pointFormatter: pathCoord,
                        });
                        const horizontalDir = animatedLine.lanePosX >= animatedLine.startX ? 1 : -1;
                        const verticalDir = animatedLine.tipY >= animatedLine.forkY ? 1 : -1;
                        const startTrim = Math.min(
                          BRANCH_HIT_END_INSET,
                          Math.max(0, Math.abs(animatedLine.lanePosX - animatedLine.startX) - 1),
                        );
                        const endTrim = Math.min(
                          BRANCH_HIT_END_INSET,
                          Math.max(0, Math.abs(animatedLine.tipY - animatedLine.forkY) - 1),
                        );
                        const hitCurvePath = buildBranchOrthogonalPath({
                          startX: animatedLine.startX + horizontalDir * startTrim,
                          forkY: animatedLine.forkY,
                          laneX: animatedLine.lanePosX,
                          tipY: animatedLine.tipY - verticalDir * endTrim,
                          cornerR: routeCornerR,
                          pointFormatter: pathCoord,
                        });
                        const mergeBackPath =
                          animatedLine.mergeTargetY != null &&
                            animatedLine.mergeTargetX != null &&
                            Math.abs(animatedLine.lanePosX - animatedLine.mergeTargetX) > 0.5
                            ? buildMergeOrthogonalPath({
                              laneX: animatedLine.lanePosX,
                              tipY: animatedLine.tipY,
                              mergeX: animatedLine.mergeTargetX,
                              mergeY: animatedLine.mergeTargetY,
                              cornerR: routeCornerR,
                              pointFormatter: pathCoord,
                            })
                            : null;
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
                              strokeDasharray={fullBranchShouldUseLocalGray && shouldDashLocalLane ? unpushedLaneDasharray : undefined}
                              strokeLinecap={fullBranchShouldUseLocalGray && shouldDashLocalLane ? 'round' : undefined}
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
                                strokeDasharray={fullBranchShouldUseLocalGray && shouldDashLocalLane ? unpushedLaneDasharray : undefined}
                                strokeLinecap={fullBranchShouldUseLocalGray && shouldDashLocalLane ? 'round' : undefined}
                                className={drawPathArcClass}
                                style={{
                                  '--delay': `${brDelay}ms`,
                                  transition: 'stroke 0.12s ease',
                                } as React.CSSProperties}
                              />
                            )}
                            {!fullBranchShouldUseLocalGray && localSegmentStartY != null && (
                              <path
                                d={`M ${pathCoord(animatedLine.lanePosX, animatedLine.localSegmentStartY ?? animatedLine.tipY)} L ${pathCoord(animatedLine.lanePosX, animatedLine.tipY)}`}
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

                                if (vm.count <= 1) {
                                  const commitEntry = vm.renderEntries[0] ?? cluster.entries[cluster.entries.length - 1];
                                  const commit = commitEntry.item.commit;
                                  const isNonCommitPlaceholder = !commit && uniqueAheadCount <= 0;
                                  const isUncommittedCommit = commit?.kind === 'uncommitted';
                                  const targetCommitSha = commit?.fullSha ?? b.headSha;
                                  const tooltipAuthor = commit?.author ?? b.lastCommitAuthor;
                                  const tooltipDate = commit?.date ?? b.lastCommitDate;
                                  const tooltipSha = commit?.sha ?? b.headSha?.slice(0, 7) ?? '-------';
                                  const tooltipTitle = isUncommittedCommit
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
                                  const ghostRectDasharray = unpushedLaneDasharray;
                                  return (
                                    <g key={vm.clusterKey}>
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
                                            vm.clusterKey,
                                            isGhostRect
                                              ? LOCAL_UNPUSHED_GRAY
                                              : isUncommittedCommit
                                                ? CHECKED_OUT_SELECTION_STROKE
                                                : CANVAS_NODE_STROKE,
                                            clusterHasCheckedOutHead,
                                            clusterHasSelectedCommit || clusterHasSelectedHead,
                                          )
                                        }
                                        strokeWidth={
                                          isGhostRect
                                            ? ghostRectStrokeWidth
                                            : dotStrokeWidth
                                        }
                                        strokeDasharray={
                                          isGhostRect
                                            ? ghostRectDasharray
                                            : isUncommittedCommit
                                              ? '3 3'
                                              : undefined
                                        }
                                        strokeLinecap={isGhostRect || isUncommittedCommit ? 'round' : undefined}
                                        strokeLinejoin={isGhostRect || isUncommittedCommit ? 'round' : undefined}
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
                                  (entry) => entry.item.commit?.kind === 'uncommitted'
                                );
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
                                            vm.clusterKey,
                                            clusterHasUncommitted ? CHECKED_OUT_SELECTION_STROKE : CANVAS_NODE_STROKE,
                                            clusterHasCheckedOutHead,
                                            clusterHasSelectedCommit || clusterHasSelectedHead,
                                          )}
                                          strokeWidth={dotStrokeWidth}
                                          strokeDasharray={clusterHasUncommitted ? '3 3' : dotStrokeDasharray}
                                          strokeLinecap={clusterHasUncommitted ? 'round' : undefined}
                                          strokeLinejoin={clusterHasUncommitted ? 'round' : undefined}
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
                                          const isCheckedOutCommit =
                                            checkedOutHeadSha != null &&
                                            (shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                                              shaMatchesGitRef(commit.sha, checkedOutHeadSha));
                                          const tooltipAuthor = commit.author ?? b.lastCommitAuthor;
                                          const tooltipDate = commit.date ?? b.lastCommitDate;
                                          const tooltipSha = commit.sha ?? commit.fullSha.slice(0, 7);
                                          const tooltipMessage = commit.message;
                                          const isUncommittedCommit = commit.kind === 'uncommitted';
                                          const tooltipTitle = isUncommittedCommit
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
                                                    isUncommittedCommit ? CHECKED_OUT_SELECTION_STROKE : CANVAS_NODE_STROKE,
                                                    isCheckedOutCommit,
                                                    selectedCommitShaSet.has(commit.fullSha) ||
                                                    (clusterHasSelectedHead && commit.fullSha === b.headSha),
                                                  )}
                                                  strokeWidth={dotStrokeWidth}
                                                  strokeDasharray={isUncommittedCommit ? '3 3' : dotStrokeDasharray}
                                                  strokeLinecap={isUncommittedCommit ? 'round' : undefined}
                                                  strokeLinejoin={isUncommittedCommit ? 'round' : undefined}
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
                                                />
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
                  <g style={{ pointerEvents: 'none' }}>
                    {(() => {
                      const orderedActiveBranches = orderedActiveBranchesForLayer({
                        includeSelectedPriority: false,
                      });

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
                            const commitEntry = renderEntries[0] ?? cluster.entries[cluster.entries.length - 1];
                            const commit = commitEntry.item.commit;
                            const isNonCommitPlaceholder = !commit && uniqueAheadCount <= 0;
                            const isUncommittedCommit = commit?.kind === 'uncommitted';
                            const rectSize = commitRectSize(scaledNodeSize);
                            const isGhostRect = isNonCommitPlaceholder;
                            const ghostRectStrokeWidth = unpushedStrokeWidth;
                            const ghostRectDasharray = unpushedLaneDasharray;

                            return (
                              <g key={`branch-overlay-${clusterKey}`}>
                                {isGhostRect ? (
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
                                      LOCAL_UNPUSHED_GRAY,
                                      clusterHasCheckedOutHead,
                                      clusterHasSelectedCommit || clusterHasSelectedHead,
                                    )}
                                    strokeWidth={ghostRectStrokeWidth}
                                    strokeDasharray={ghostRectDasharray}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                ) : renderCommitNodeRect({
                                  nodeKey: clusterKey,
                                  centerX: anchorX,
                                  centerY: anchorY,
                                  rectSize,
                                  fill: isUncommittedCommit ? CANVAS_UNPUSHED_NODE_FILL : dotFill,
                                  baseStroke: isUncommittedCommit
                                    ? CHECKED_OUT_SELECTION_STROKE
                                    : CANVAS_NODE_STROKE,
                                  isCheckedOutSelection: clusterHasCheckedOutHead,
                                  isUserSelected: clusterHasSelectedCommit || clusterHasSelectedHead,
                                  strokeWidth: dotStrokeWidth,
                                  strokeInset: dotStrokeInset,
                                  dashed: !!isUncommittedCommit,
                                })}
                              </g>
                            );
                          }

                          const canExpandCluster = renderEntries.length > 1;
                          const clusterHasUncommitted = renderEntries.some(
                            (entry) => entry.item.commit?.kind === 'uncommitted'
                          );
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
                                  fill: clusterHasUncommitted ? CANVAS_UNPUSHED_NODE_FILL : dotFill,
                                  baseStroke: clusterHasUncommitted
                                    ? CHECKED_OUT_SELECTION_STROKE
                                    : CANVAS_NODE_STROKE,
                                  isCheckedOutSelection: clusterHasCheckedOutHead,
                                  isUserSelected: clusterHasSelectedCommit || clusterHasSelectedHead,
                                  strokeWidth: dotStrokeWidth,
                                  strokeInset: dotStrokeInset,
                                  dashed: clusterHasUncommitted,
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
                                const isCheckedOutCommit =
                                  checkedOutHeadSha != null &&
                                  (shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                                    shaMatchesGitRef(commit.sha, checkedOutHeadSha));

                                const memberPose = interpolateExpandedEntryPose(
                                  { x: anchorX, y: anchorY },
                                  { x: entry.x, y: entry.y },
                                  phase,
                                  phaseEased,
                                );
                                const commitKey = `branch-commit:${b.name}:${commit.fullSha}`;
                                const isUncommittedCommit = commit.kind === 'uncommitted';

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
                                        fill: isUncommittedCommit ? CANVAS_UNPUSHED_NODE_FILL : dotFill,
                                        baseStroke: isUncommittedCommit
                                          ? CHECKED_OUT_SELECTION_STROKE
                                          : CANVAS_NODE_STROKE,
                                        isCheckedOutSelection: isCheckedOutCommit,
                                        isUserSelected:
                                          selectedCommitShaSet.has(commit.fullSha) ||
                                          (clusterHasSelectedHead && commit.fullSha === b.headSha),
                                        strokeWidth: dotStrokeWidth,
                                        strokeInset: dotStrokeInset,
                                        dashed: isUncommittedCommit,
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
                          clusterHasCheckedOutHead,
                          clusterHasSelectedCommit: mainClusterHasSelectedCommit,
                          clusterHasUncommitted,
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
                          const isUncommittedCommit = cluster.entries[0]?.item.fullSha === 'WORKING_TREE';
                          const rectSize = commitRectSize(scaledNodeSize);
                          return (
                            <g key={`main-direct-overlay-${clusterKey}`}>
                              {renderCommitNodeRect({
                                nodeKey: clusterKey,
                                centerX: anchorX,
                                centerY: anchorY,
                                rectSize,
                                fill: isUncommittedCommit ? CANVAS_UNPUSHED_NODE_FILL : CANVAS_NODE_FILL,
                                baseStroke: isUncommittedCommit
                                  ? CHECKED_OUT_SELECTION_STROKE
                                  : CANVAS_NODE_STROKE,
                                isCheckedOutSelection: clusterHasCheckedOutHead,
                                isUserSelected:
                                  mainClusterHasSelectedCommit ||
                                  (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                dashed: isUncommittedCommit,
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
                                  const isUncommittedCommit = c.fullSha === 'WORKING_TREE';
                                  const isCheckedOutCommit =
                                    checkedOutHeadSha != null &&
                                    (shaMatchesGitRef(c.fullSha, checkedOutHeadSha) ||
                                      shaMatchesGitRef(c.sha, checkedOutHeadSha));

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
                                          fill: isUncommittedCommit ? CANVAS_UNPUSHED_NODE_FILL : CANVAS_NODE_FILL,
                                          baseStroke: isUncommittedCommit
                                            ? CHECKED_OUT_SELECTION_STROKE
                                            : CANVAS_NODE_STROKE,
                                          isCheckedOutSelection: isCheckedOutCommit,
                                          isUserSelected:
                                            selectedCommitShaSet.has(c.fullSha) ||
                                            (clusterHasMainTip &&
                                              selectedBranchNameSet.has(defaultBranch) &&
                                              c.fullSha === latestMainCommitSha),
                                          dashed: isUncommittedCommit,
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
                                fill: clusterHasUncommitted ? CANVAS_UNPUSHED_NODE_FILL : CANVAS_NODE_FILL,
                                baseStroke: clusterHasUncommitted
                                  ? CHECKED_OUT_SELECTION_STROKE
                                  : CANVAS_NODE_STROKE,
                                isCheckedOutSelection: clusterHasCheckedOutHead,
                                isUserSelected:
                                  mainClusterHasSelectedCommit ||
                                  (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                dashed: clusterHasUncommitted,
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
                          } = getBranchRenderLayout(b);

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

                            if (count <= 1) {
                              const commitEntry = renderEntries[0] ?? cluster.entries[cluster.entries.length - 1];
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
                            const { isExpanded, phase, phaseEased } = canExpandCluster
                              ? resolveClumpPhase(expanded)
                              : { isExpanded: false, phase: 'collapsed' as const, phaseEased: 0 };
                            const isCollapsing = isExpanded && phase === 'collapsing';

                            if (!isExpanded || isCollapsing) {
                              const rectSize = nodeRectSize(count);
                              const clumpCountText = stackCountLabel(count);
                              const latestCommit = renderEntries[renderEntries.length - 1]?.item.commit;
                              const latestLabel = latestCommit?.kind === 'uncommitted'
                                ? 'Uncommited Changes'
                                : (latestCommit?.sha ?? latestCommit?.fullSha ?? b.headSha);
                              const clumpTitleText = fitNodeFrameTitle(
                                b.name,
                                latestLabel,
                                rectSize.width,
                                clumpCountText,
                              );

                              return (
                                <g
                                  key={`branch-label-overlay-${clusterKey}`}
                                  opacity={isCollapsing ? phaseEased : 1}
                                >
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
                                          fill={NODE_FRAME_LABEL_COLOR}
                                          fontSize={nodeFrameLabelFontSize}
                                          fontWeight={NODE_FRAME_LABEL_WEIGHT}
                                          pointerEvents="none"
                                        >
                                          {fitNodeFrameTitle(
                                            b.name,
                                            commit.kind === 'uncommitted'
                                              ? 'Uncommited Changes'
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
                          if (isExpanded && !isCollapsing) {
                            const localRect = commitRectSize(scaledNodeSize, 0);
                            const topEntryForLabels = cluster.entries.reduce(
                              (top, entry) => (entry.y < top.y ? entry : top),
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
                                    </g>
                                  );
                                })}
                              </g>
                            );
                          }
                          return (
                            <g
                              key={`main-label-overlay-${clusterKey}`}
                              opacity={isCollapsing ? phaseEased : 1}
                            >
                              {(!isExpanded || isCollapsing) && (
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
                    )}
                  </g>

                  {/* Top-most collapse controls so carets are never occluded by node layers. */}
                  <g>
                    {!mainIsUnifiedRender && mainDirectClusters.map((clusterLayout) => {
                      const { cluster, count, clusterKey } = clusterLayout;
                      const expanded = expandedClumps.get(clusterKey);
                      const { isExpanded, phase } = resolveClumpPhase(expanded);
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

                    {renderBranches.flatMap((b) => {
                      const { commitDotClusters } = getBranchRenderLayout(b);
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
          const linesCopy = [...tooltip.lines];
          linesCopy.shift(); // skip title (index 0)
          const meta = linesCopy.pop() || '';
          const subtitle = linesCopy[0] || '';
          const extra = linesCopy[1] || '';
          const avatarFallback = tooltip.avatarFallback || '?';
          const tooltipCompact = viewportSize.width < 420;
          const viewportPadX = tooltipCompact ? 18 : 8;
          const viewportPadTop = tooltipCompact ? 84 : 8;
          const viewportPadBottom = tooltipCompact ? 18 : 8;
          const availableTooltipW = Math.max(140, viewportSize.width - viewportPadX * 2);
          const tooltipMaxW = Math.min(tooltipCompact ? 260 : 320, availableTooltipW);
          const tooltipMinW = tooltipCompact ? 160 : 240;
          const tooltipW = Math.min(tooltipMaxW, Math.max(tooltipMinW, availableTooltipW));
          const tooltipAvatarSize = 20;
          const tooltipBodyGap = 8;
          const tooltipBodyPadX = 8;
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
          const extraLines = extra ? Math.max(1, Math.ceil(extra.length / estimatedCharsPerLine)) : 0;
          const metaLines = meta ? 1 : 0; // Metadata is now a single line split by justify-between
          const tooltipBodyH = Math.max(
            52,
            tooltipBodyPadY * 2 +
            Math.max(
              tooltipAvatarSize,
              (subtitleLines + extraLines + metaLines) * tooltipLineHeight +
              (extra ? 2 : 0) + // mt-0.5
              (meta ? 12 : 0)   // mt-3
            )
          );
          const tooltipH = Math.min(220, tooltipBodyH);
          const axisScale = isHorizontal ? liveCameraScale.x : liveCameraScale.y;
          const zoomAwareNodeClearance = Math.max(
            tooltipCompact ? 14 : 18,
            Math.round((scaledNodeSize * axisScale) / 2 + (tooltipCompact ? 6 : 8))
          );
          const gap = zoomAwareNodeClearance + (tooltipCompact ? 6 : 8);
          const nodeClearance = zoomAwareNodeClearance;
          const maxLeft = Math.max(viewportPadX, viewportSize.width - tooltipW - viewportPadX);
          const maxTop = Math.max(viewportPadTop, viewportSize.height - tooltipH - viewportPadBottom);
          const clampLeft = (left: number) => Math.min(maxLeft, Math.max(viewportPadX, left));
          const clampTop = (top: number) => Math.min(maxTop, Math.max(viewportPadTop, top));
          const candidatePositions = [
            { left: anchorX - tooltipW / 2, top: anchorY - tooltipH - gap }, // above (preferred)
            { left: anchorX + gap, top: anchorY - tooltipH }, // upper-right
            { left: anchorX - tooltipW - gap, top: anchorY - tooltipH }, // upper-left
            { left: anchorX - tooltipW / 2, top: anchorY + gap }, // below (fallback)
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
              className="absolute z-[120] rounded-[12px] border overflow-hidden pointer-events-none"
              style={{
                left,
                top,
                width: tooltipW,
                backgroundColor: CANVAS_NODE_FILL,
                borderColor: CANVAS_NODE_STROKE,
                borderWidth: CANVAS_NODE_STROKE_WIDTH,
              }}
            >
              <div
                style={{ padding: `${tooltipBodyPadY}px ${tooltipBodyPadX}px` }}
              >
                <div className="flex items-start gap-2">
                  <span
                    className="shrink-0 rounded-full overflow-hidden flex items-center justify-center text-[10px] font-medium leading-none text-muted-foreground"
                    style={{ width: tooltipAvatarSize, height: tooltipAvatarSize, backgroundColor: CANVAS_NODE_STROKE }}
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
                  <div className="min-w-0 flex flex-col">
                    {subtitle && (
                      <p
                        className="text-xs whitespace-normal break-words"
                        style={{ lineHeight: `${tooltipLineHeight}px`, color: '#171717' }}
                      >
                        {subtitle}
                      </p>
                    )}
                    {extra && (
                      <p
                        className="text-xs text-muted-foreground whitespace-normal break-words mt-0.5"
                        style={{ lineHeight: `${tooltipLineHeight}px` }}
                      >
                        {extra}
                      </p>
                    )}
                    {meta && (() => {
                      const dotIdx = meta.lastIndexOf(' · ');
                      if (dotIdx === -1) {
                        return (
                          <p
                            className="text-xs whitespace-normal break-words mt-3"
                            style={{ lineHeight: `${tooltipLineHeight}px`, color: NODE_FRAME_LABEL_COLOR }}
                          >
                            {meta}
                          </p>
                        );
                      }
                      const leftMeta = meta.slice(0, dotIdx);
                      const rightMeta = meta.slice(dotIdx + 3);
                      return (
                        <div
                          className="flex items-baseline justify-between gap-4 mt-3"
                          style={{ color: NODE_FRAME_LABEL_COLOR }}
                        >
                          <span className="text-xs truncate">{leftMeta}</span>
                          <span className="text-xs shrink-0 select-none">{rightMeta}</span>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Empty state removed as per user request */}
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

            <button
              onClick={() => setShowLineageDebug((prev) => !prev)}
              className={`flex items-center gap-1.5 shrink-0 border rounded-full px-3 py-1.5 text-xs select-none transition-colors ${
                showLineageDebug
                  ? 'bg-primary/10 border-primary/30 text-foreground'
                  : 'bg-card border-border text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
              title="Show commit lineage debug panel"
            >
              Lineage
            </button>
          </div>
        </div>
      </div>

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
