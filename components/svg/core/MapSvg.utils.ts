import { layoutWithLines, prepareWithSegments } from '@chenglou/pretext';
import type { DirectCommit } from '../../../types';
import {
  BRANCH_MAP_SVG_FONT_FAMILY,
  CANVAS_NODE_STROKE,
  CANVAS_STASH_NODE_STROKE,
  CHECKED_OUT_SELECTION_STROKE,
  CLUMP_COUNT_MAX,
} from './MapSvg.constants';
import type {
  BranchClusterEntries,
  BranchClusterViewModel,
  CommitEntryItem,
  LineageCommitLike,
  MainClusterViewModel,
  MarkerCluster,
  MarkerEntry,
  VisibleWorldBounds,
} from './MapSvg.types';

export function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function getCameraScale(zoomValue: number, _horizontal: boolean): { x: number; y: number } {
  return { x: zoomValue, y: zoomValue };
}

export function getVisibleWorldBounds(args: {
  viewportWidth: number;
  viewportHeight: number;
  topInset: number;
  panX: number;
  panY: number;
  zoom: number;
  graphOffsetX: number;
  graphOffsetY: number;
  graphContentTranslateX: number;
  graphContentTranslateY: number;
  paddingPx?: number;
}): VisibleWorldBounds | null {
  const {
    viewportWidth,
    viewportHeight,
    topInset,
    panX,
    panY,
    zoom,
    graphOffsetX,
    graphOffsetY,
    graphContentTranslateX,
    graphContentTranslateY,
    paddingPx = 0,
  } = args;
  if (viewportWidth <= 0 || viewportHeight <= 0 || zoom <= 0) return null;
  const scale = getCameraScale(zoom, false);
  const paddingWorld = paddingPx / Math.max(scale.x, 0.0001);
  const minScreenX = 0;
  const maxScreenX = viewportWidth;
  const minScreenY = Math.max(0, topInset);
  const maxScreenY = viewportHeight;
  const minX = (minScreenX - graphOffsetX - panX) / scale.x - graphContentTranslateX - paddingWorld;
  const maxX = (maxScreenX - graphOffsetX - panX) / scale.x - graphContentTranslateX + paddingWorld;
  const minY = (minScreenY - graphOffsetY - panY) / scale.y - graphContentTranslateY - paddingWorld;
  const maxY = (maxScreenY - graphOffsetY - panY) / scale.y - graphContentTranslateY + paddingWorld;
  return { minX, maxX, minY, maxY };
}

export function isPointVisible(bounds: VisibleWorldBounds | null, x: number, y: number): boolean {
  if (!bounds) return true;
  return x >= bounds.minX && x <= bounds.maxX && y >= bounds.minY && y <= bounds.maxY;
}

export function isRectVisible(
  bounds: VisibleWorldBounds | null,
  rect: { x: number; y: number; width: number; height: number },
): boolean {
  if (!bounds) return true;
  const rectMinX = rect.x;
  const rectMaxX = rect.x + rect.width;
  const rectMinY = rect.y;
  const rectMaxY = rect.y + rect.height;
  return !(
    rectMaxX < bounds.minX ||
    rectMinX > bounds.maxX ||
    rectMaxY < bounds.minY ||
    rectMinY > bounds.maxY
  );
}

export function isSegmentVisible(
  bounds: VisibleWorldBounds | null,
  start: { x: number; y: number },
  end: { x: number; y: number },
): boolean {
  if (!bounds) return true;
  const minX = Math.min(start.x, end.x);
  const maxX = Math.max(start.x, end.x);
  const minY = Math.min(start.y, end.y);
  const maxY = Math.max(start.y, end.y);
  return !(
    maxX < bounds.minX ||
    minX > bounds.maxX ||
    maxY < bounds.minY ||
    minY > bounds.maxY
  );
}

export function buildStraightPath(
  start: { x: number; y: number },
  end: { x: number; y: number },
  pointFormatter: (x: number, y: number) => string,
): string {
  return `M ${pointFormatter(start.x, start.y)} L ${pointFormatter(end.x, end.y)}`;
}

export function smoothValueTo(
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

export function fmtRelativeDate(dateStr: string): string {
  const diffDays = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
  if (diffDays === 0) return 'today';
  if (diffDays === 1) return 'yesterday';
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  return `${Math.floor(diffDays / 30)}mo ago`;
}

export function fmtTooltipDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit',
  });
}

export function fmtClumpDateRange(startStr: string, endStr: string): string {
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
  }

  const d2Str = d2.toLocaleDateString('en-US', options);
  return `${d1Str} → ${d2Str}`;
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

export function getPreparedPretext(text: string, font: string) {
  const cacheKey = `${font}::${text}`;
  const cached = pretextPreparedCache.get(cacheKey);
  if (cached) return cached;
  const prepared = prepareWithSegments(text, font);
  pretextPreparedCache.set(cacheKey, prepared);
  prunePretextPreparedCache();
  return prepared;
}

export function estimateSvgTextWidth(text: string, fontSize = 10): number {
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

export function shaMatchesGitRef(a: string | undefined | null, b: string | undefined | null): boolean {
  if (!a || !b) return false;
  return a === b || a.startsWith(b) || b.startsWith(a);
}

export function truncatePrompt(text: string, max = 90): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max)}…`;
}

function compareByDateThenSha<T extends LineageCommitLike>(a: T, b: T): number {
  const aTime = new Date(a.date).getTime();
  const bTime = new Date(b.date).getTime();
  const aFinite = Number.isFinite(aTime);
  const bFinite = Number.isFinite(bTime);
  if (aFinite && bFinite && aTime !== bTime) return aTime - bTime;
  if (aFinite !== bFinite) return aFinite ? -1 : 1;
  return a.fullSha.localeCompare(b.fullSha);
}

export function orderByLineage<T extends LineageCommitLike>(items: T[]): T[] {
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

export function pruneForkSplitIndices(
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

export function isStashCommitLike(commit: { kind?: string; fullSha?: string }): boolean {
  return commit.kind === 'stash' || (commit.fullSha?.startsWith('STASH:') ?? false);
}

export function isSyntheticLocalCommit(commit: { kind?: string; fullSha?: string }): boolean {
  return (
    commit.fullSha === 'WORKING_TREE' ||
    commit.kind === 'uncommitted' ||
    isStashCommitLike(commit)
  );
}

export function stashOrUncommittedBaseStroke(isStash: boolean, isUncommitted: boolean): string {
  if (isStash) return CANVAS_STASH_NODE_STROKE;
  if (isUncommitted) return CHECKED_OUT_SELECTION_STROKE;
  return CANVAS_NODE_STROKE;
}

export function clusterLocalSyntheticStroke(clusterHasUncommitted: boolean, clusterHasStash: boolean): string {
  if (clusterHasUncommitted) return CHECKED_OUT_SELECTION_STROKE;
  if (clusterHasStash) return CANVAS_STASH_NODE_STROKE;
  return CANVAS_NODE_STROKE;
}

export function splitIndicesAroundUncommitted<T>(
  entries: T[],
  isUncommitted: (entry: T) => boolean,
): Set<number> {
  const splits = new Set<number>();
  entries.forEach((entry, index) => {
    if (!isUncommitted(entry)) return;
    if (index > 0) splits.add(index - 1);
    if (index < entries.length - 1) splits.add(index);
  });
  return splits;
}

export function clusterByForkPoints<T>(
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

export function resolveBranchClusterEntries(
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

export function branchClusterKey(
  branchName: string,
  cluster: MarkerCluster<CommitEntryItem>,
): string {
  const firstEntry = cluster.entries[0];
  const lastEntry = cluster.entries[cluster.entries.length - 1];
  return `commit-clump-${branchName}-${firstEntry.item.index}-${lastEntry.item.index}`;
}

export function branchClusterMemberKeys(
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

export function branchPreferredAnchorEntry(
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

export function buildBranchClusterViewModel(
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

export function mainClusterKey(
  cluster: MarkerCluster<DirectCommit>,
): string {
  const first = cluster.entries[0].item;
  const last = cluster.entries[cluster.entries.length - 1].item;
  return `direct-clump-${first.fullSha}-${last.fullSha}`;
}

export function mainClusterMemberKeys(
  cluster: MarkerCluster<DirectCommit>,
): string[] {
  return cluster.entries.map((entry) => `direct:${entry.item.fullSha}`);
}

export function buildMainClusterViewModel(
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

export function clumpCountLabel(count: number): string {
  return count > CLUMP_COUNT_MAX ? `${CLUMP_COUNT_MAX}+` : String(count);
}

export function nodeLabelFontSize(nodeSize: number, count: number): number {
  const base = Math.max(9, Math.min(12, nodeSize * 0.46));
  if (count >= 100) return Math.max(7.5, base - 2.5);
  if (count >= 10) return Math.max(8.25, base - 1.75);
  return base;
}

export function promptMarkerPath(centerX: number, centerY: number, size: number): string {
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

export function collapsedClumpHitRect(
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

export function layoutTextWithLines(prepared: ReturnType<typeof prepareWithSegments>, width: number, lineHeight: number) {
  return layoutWithLines(prepared, width, lineHeight);
}
