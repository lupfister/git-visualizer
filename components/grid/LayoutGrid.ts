export type AnchorPoint = { x: number; y: number };
type PointFormatter = (x: number, y: number) => string;
type BranchPathInput = { startX: number; forkY: number; laneX: number; tipY: number; cornerR: number; pointFormatter: PointFormatter };
type MergePathInput = { laneX: number; tipY: number; mergeX: number; mergeY: number; cornerR: number; pointFormatter: PointFormatter };

export function buildBranchOrthogonalPath({ startX, forkY, laneX, tipY, cornerR, pointFormatter }: BranchPathInput): string {
  if (Math.abs(startX - laneX) < 0.5) return `M ${pointFormatter(laneX, forkY)} L ${pointFormatter(laneX, tipY)}`;
  const horizontalDir = laneX > startX ? 1 : -1;
  const verticalDir = tipY >= forkY ? 1 : -1;
  const corner = Math.max(0, Math.min(cornerR, Math.abs(laneX - startX), Math.abs(tipY - forkY)));
  if (corner < 0.5) return [`M ${pointFormatter(startX, forkY)}`, `L ${pointFormatter(laneX, forkY)}`, `L ${pointFormatter(laneX, tipY)}`].join(' ');
  const preTurnX = laneX - horizontalDir * corner;
  const postTurnY = forkY + verticalDir * corner;
  return [`M ${pointFormatter(startX, forkY)}`, `L ${pointFormatter(preTurnX, forkY)}`, `Q ${pointFormatter(laneX, forkY)} ${pointFormatter(laneX, postTurnY)}`, `L ${pointFormatter(laneX, tipY)}`].join(' ');
}

export function buildMergeOrthogonalPath({ laneX, tipY, mergeX, mergeY, cornerR, pointFormatter }: MergePathInput): string {
  if (Math.abs(mergeY - tipY) < 0.5) return `M ${pointFormatter(laneX, tipY)} L ${pointFormatter(mergeX, mergeY)}`;
  const horizontalDir = mergeX >= laneX ? 1 : -1;
  const corner = Math.max(0, Math.min(cornerR, Math.abs(mergeY - tipY), Math.abs(mergeX - laneX)));
  if (corner < 0.5) return [`M ${pointFormatter(laneX, tipY)}`, `L ${pointFormatter(laneX, mergeY)}`, `L ${pointFormatter(mergeX, mergeY)}`].join(' ');
  const preTurnY = mergeY - Math.sign(mergeY - tipY) * corner;
  const cornerX = laneX + horizontalDir * corner;
  return [`M ${pointFormatter(laneX, tipY)}`, `L ${pointFormatter(laneX, preTurnY)}`, `Q ${pointFormatter(laneX, mergeY)} ${pointFormatter(cornerX, mergeY)}`, `L ${pointFormatter(mergeX, mergeY)}`].join(' ');
}

export function commitRectSize(baseNodeSize: number, clusterBoost = 0): { width: number; height: number; radius: number } {
  const height = Math.max(8, baseNodeSize - 2 + clusterBoost);
  const width = height * 3;
  const radius = 0;
  return { width, height, radius };
}

// Grid-side copies of the data/layout helpers used by the canvas view.
import { Branch, BranchCommitPreview, DirectCommit, MergeNode } from '../../types';

export type BranchGridViewProps = {
  [key: string]: any;
  branches: Branch[];
  directCommits?: DirectCommit[];
  unpushedDirectCommits?: DirectCommit[];
  mergeNodes?: MergeNode[];
  defaultBranch: string;
  branchCommitPreviews?: Record<string, BranchCommitPreview[]>;
  branchParentByName?: Record<string, string | null>;
  branchUniqueAheadCounts?: Record<string, number>;
  unpushedCommitShasByBranch?: Record<string, string[]>;
  openPRs?: import('../../types').OpenPR[];
  onCommitClick?: (target: { commitSha: string; branchName?: string }) => void;
  onLoadMore?: () => void;
  view?: string;
  staleBranches?: Branch[];
  isLoading?: boolean;
  scrollRequest?: { branch: Branch; seq: number } | null;
  focusedErrorBranch?: Branch | null;
  checkedOutRef?: import('../../types').CheckedOutRef | null;
  mapTopInsetPx?: number;
  onMergeRefsIntoBranch?: (sourceRefs: string[], targetBranch: string) => Promise<void> | void;
  mergeInProgress?: boolean;
  onPushAllBranches?: () => Promise<void> | void;
  onPushCurrentBranch?: () => Promise<void> | void;
  onPushCommitTargets?: (targets: Array<{ branchName: string; targetSha: string }>) => Promise<void> | void;
  pushInProgress?: boolean;
  onDeleteSelection?: (targets: { branchNames: string[]; discardUncommittedChanges: boolean; stashIndices?: number[] }) => Promise<void> | void;
  deleteInProgress?: boolean;
  worktrees?: import('../../types').WorktreeInfo[];
  currentRepoPath?: string;
  onRemoveWorktree?: (worktreePath: string, force: boolean) => Promise<void> | void;
  removeWorktreeInProgress?: boolean;
  onSwitchToWorktree?: (worktreePath: string) => void | Promise<void>;
  onStashLocalChanges?: () => Promise<void> | void;
  stashInProgress?: boolean;
  stashDisabled?: boolean;
  onCommitLocalChanges?: (message: string) => Promise<boolean>;
  commitInProgress?: boolean;
  commitDisabled?: boolean;
  onStageAllChanges?: () => Promise<boolean> | Promise<void> | boolean | void;
  stageInProgress?: boolean;
  onCreateBranchFromNode?: (nodeId: string, branchName: string) => Promise<void>;
  onCreateRootBranch?: (branchName: string) => Promise<void>;
  createBranchFromNodeInProgress?: boolean;
  onMoveNodeBackToBranch?: (targetBranchName: string) => Promise<void>;
  isDebugOpen?: boolean;
  onDebugClose?: () => void;
  orientation?: 'vertical' | 'horizontal';
  onInteractionChange?: (isInteracting: boolean) => void;
};

export type NodePositionOverride = { x: number; y: number };
export type NodePositionOverrides = Record<string, NodePositionOverride>;

export type CommitItem = {
  id: string;
  branchName: string;
  message: string;
  author: string;
  date: string;
  parentSha?: string | null;
  parentShas?: string[];
  childShas?: string[];
  clusterKey?: string | null;
  kind?: BranchCommitPreview['kind'] | DirectCommit['kind'];
};

export type VisualCommit = CommitItem & { visualId: string };
export type Lane = { name: string; column: number; parentName: string | null };
export type Node = { commit: VisualCommit; row: number; column: number; x: number; y: number };
export type ConnectorFace = 'left' | 'right' | 'top' | 'bottom';
export type Connector = { id: string; fromX: number; fromY: number; toX: number; toY: number; zIndex: number; fromFace?: ConnectorFace; toFace?: ConnectorFace };

export const BRANCH_COLUMN_REUSE_TIME_GAP_FACTOR = 3.7;
export const ROW_HEIGHT = 200;
export const ROW_GAP = 240;
export const CARD_WIDTH = 540;
export const CARD_HEIGHT = 176;
export const CARD_HEADER_HEIGHT = 32;
export const CARD_BODY_TOP_OFFSET = 20;
export const COLUMN_GAP = ROW_GAP / 2;
export const COLUMN_WIDTH = CARD_WIDTH + COLUMN_GAP;
export const TOP_PADDING = 18;
export const LEFT_PADDING = 18;
export const CONNECTOR_COLOR = '#E6E6E6';

export function timeAgo(dateStr: string) {
  const s = (Date.now() - new Date(dateStr).getTime()) / 1000;
  if (s < 60) return 'just now';
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  if (s < 86400 * 30) return `${Math.floor(s / 86400)}d ago`;
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function branchTime(branch: Branch): { start: number; end: number } {
  return { start: new Date(branch.createdDate ?? branch.divergedFromDate ?? branch.lastCommitDate).getTime(), end: new Date(branch.lastCommitDate).getTime() };
}

export function toCommit(branchName: string, commit: BranchCommitPreview | DirectCommit): CommitItem {
  const resolvedBranchName = 'branch' in commit && commit.branch ? commit.branch : branchName;
  return {
    id: commit.fullSha,
    branchName: resolvedBranchName,
    message: commit.message,
    author: commit.author,
    date: commit.date,
    parentSha: commit.parentSha,
    parentShas: 'parentShas' in commit ? (commit.parentShas ?? []) : (commit.parentSha ? [commit.parentSha] : []),
    childShas: 'childShas' in commit ? (commit.childShas ?? []) : [],
    clusterKey: 'clusterKey' in commit ? (commit.clusterKey ?? null) : null,
    kind: commit.kind,
  };
}

export function commitKey(item: { id?: string; fullSha?: string }): string { return item.id ?? item.fullSha ?? ''; }
export function compareByDateThenSha(a: { id?: string; fullSha?: string; date: string }, b: { id?: string; fullSha?: string; date: string }): number { const d = new Date(a.date).getTime() - new Date(b.date).getTime(); return d !== 0 ? d : commitKey(a).localeCompare(commitKey(b)); }
export function sortByDateThenSha<T extends { id?: string; fullSha?: string; date: string }>(items: T[]): T[] { return [...items].sort(compareByDateThenSha); }
export function orderByLineage<T extends { id?: string; fullSha?: string; parentSha?: string | null; parentShas?: string[]; date: string }>(items: T[]): T[] { if (items.length <= 1) return [...items]; const bySha = new Map(items.map((item) => [commitKey(item), item])); const inDegree = new Map<string, number>(); const childrenByParent = new Map<string, T[]>(); items.forEach((item) => inDegree.set(commitKey(item), 0)); for (const item of items) { const parentShas = (item.parentShas ?? []).length > 0 ? (item.parentShas ?? []) : (item.parentSha ? [item.parentSha] : []); for (const parentSha of parentShas) { if (!parentSha || !bySha.has(parentSha)) continue; const itemKey = commitKey(item); inDegree.set(itemKey, (inDegree.get(itemKey) ?? 0) + 1); const children = childrenByParent.get(parentSha) ?? []; children.push(item); childrenByParent.set(parentSha, children); } } for (const children of childrenByParent.values()) children.sort(compareByDateThenSha); const ready = items.filter((item) => (inDegree.get(commitKey(item)) ?? 0) === 0).sort(compareByDateThenSha); const ordered: T[] = []; const seen = new Set<string>(); while (ready.length > 0) { const next = ready.shift()!; const nextKey = commitKey(next); if (seen.has(nextKey)) continue; seen.add(nextKey); ordered.push(next); for (const child of childrenByParent.get(nextKey) ?? []) { const childKey = commitKey(child); const remainingParents = (inDegree.get(childKey) ?? 0) - 1; inDegree.set(childKey, remainingParents); if (remainingParents === 0) ready.push(child); } ready.sort(compareByDateThenSha); } return ordered.length === items.length ? ordered : [...ordered, ...items.filter((item) => !seen.has(commitKey(item))).sort(compareByDateThenSha)]; }
export function branchAheadCount(branchName: string, branchUniqueAheadCounts: Record<string, number>, branchCommitPreviews: Record<string, BranchCommitPreview[]>): number { if (Object.prototype.hasOwnProperty.call(branchUniqueAheadCounts, branchName)) return Math.max(0, branchUniqueAheadCounts[branchName] ?? 0); const previews = branchCommitPreviews[branchName]; if (previews != null) return previews.filter((preview) => preview.kind !== 'branch-created').length; return 0; }
export function sortedConcreteBranchPreviews(branchName: string, branchCommitPreviews: Record<string, BranchCommitPreview[]>): BranchCommitPreview[] { return sortByDateThenSha((branchCommitPreviews[branchName] ?? []).filter((commit) => commit.kind !== 'branch-created')); }
export function renderableBranchPreviews(branchName: string, _branchUniqueAheadCounts: Record<string, number>, branchCommitPreviews: Record<string, BranchCommitPreview[]>): BranchCommitPreview[] { return sortedConcreteBranchPreviews(branchName, branchCommitPreviews); }
export function commitKeyWithFallback(commit: { id?: string; fullSha?: string }): string { return commit.id ?? commit.fullSha ?? ''; }
export function sortByTimeDesc<T extends { date: string }>(commits: T[]): T[] { return [...commits].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); }
export function branchParentName(branch: Branch, byName: Map<string, Branch>, defaultBranch: string): string | null { const declared = branch.parentBranch; if (!declared || declared === branch.name || (declared !== defaultBranch && !byName.has(declared))) return null; return declared === defaultBranch ? defaultBranch : declared; }
export function branchDepth(branch: Branch, byName: Map<string, Branch>, defaultBranch: string, visiting = new Set<string>()): number { if (visiting.has(branch.name)) return Number.MAX_SAFE_INTEGER; visiting.add(branch.name); const parentName = branchParentName(branch, byName, defaultBranch); if (!parentName || parentName === defaultBranch || parentName === branch.name || !byName.has(parentName)) { visiting.delete(branch.name); return 1; } const parent = byName.get(parentName); if (!parent) { visiting.delete(branch.name); return 1; } const depth = 1 + branchDepth(parent, byName, defaultBranch, visiting); visiting.delete(branch.name); return depth; }
export function newestCommit(commits: CommitItem[]): CommitItem | null { return commits.length === 0 ? null : [...commits].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0] ?? null; }
export function nearestCommitByDate(commits: CommitItem[], dateStr?: string): CommitItem | null { if (!dateStr || commits.length === 0) return newestCommit(commits); const target = new Date(dateStr).getTime(); if (!Number.isFinite(target)) return newestCommit(commits); let bestPast: { delta: number; commit: CommitItem } | null = null; let bestFuture: { delta: number; commit: CommitItem } | null = null; for (const commit of commits) { const commitTime = new Date(commit.date).getTime(); if (!Number.isFinite(commitTime)) continue; if (commitTime <= target) { const delta = target - commitTime; if (!bestPast || delta < bestPast.delta) bestPast = { delta, commit }; } else { const delta = commitTime - target; if (!bestFuture || delta < bestFuture.delta) bestFuture = { delta, commit }; } } return bestPast?.commit ?? bestFuture?.commit ?? newestCommit(commits); }
export function nodeForCommitSha(nodesBySha: Map<string, Node[]>, sha?: string | null, preferredBranchName?: string): Node | null { if (!sha) return null; const nodes = nodesBySha.get(sha) ?? []; if (nodes.length === 0) return null; if (preferredBranchName) { const preferred = nodes.find((node) => node.commit.branchName === preferredBranchName); if (preferred) return preferred; } return nodes[0] ?? null; }
export function branchBaseCommit(branchName: string, branchCommitPreviews: Record<string, BranchCommitPreview[]>, branchUniqueAheadCounts: Record<string, number>): CommitItem | null { const previews = renderableBranchPreviews(branchName, branchUniqueAheadCounts, branchCommitPreviews); if (previews.length === 0) return null; const commits = previews.map((commit) => toCommit(branchName, commit)); const bySha = new Set(commits.map((commit) => commit.id)); const forkSha = commits[0]?.parentSha ?? null; const branchForkSha = commits.find((commit) => commit.kind === 'branch-created')?.id ?? null; const forkDate = commits[0]?.date; const lineBase = commits.find((commit) => { if (branchForkSha && commit.id === branchForkSha) return true; if (forkSha && commit.id === forkSha) return true; return !commit.parentSha || !bySha.has(commit.parentSha); }); if (lineBase) return lineBase; return nearestCommitByDate(commits, forkDate ?? undefined) ?? commits[0] ?? null; }
/** Parent commit on the forked-from line: `parentSha` of the branch-root commit (first commit whose parent is not on this branch). */
export function branchRootParentSha(
  branch: Branch,
  defaultBranch: string,
  branchCommitPreviews: Record<string, BranchCommitPreview[]>,
): string | null {
  if (branch.name === defaultBranch) return null;
  const previews = sortedConcreteBranchPreviews(branch.name, branchCommitPreviews);
  if (previews.length > 0) {
    const commits = previews.map((preview) => toCommit(branch.name, preview));
    const commitShas = new Set(commits.map((commit) => commit.id));
    const rootCommit =
      commits.find((commit) => !commit.parentSha || !commitShas.has(commit.parentSha)) ?? commits[0] ?? null;
    if (rootCommit?.parentSha) return rootCommit.parentSha;
  }
  return branch.presidesFromSha ?? branch.divergedFromSha ?? branch.createdFromSha ?? null;
}
export function buildLanes(
  branches: Branch[],
  defaultBranch: string,
  branchCommitPreviews: Record<string, BranchCommitPreview[]> = {},
  branchParentByName: Record<string, string | null> = {},
): Lane[] {
  const ROOT_GROUP_GUTTER_COLUMNS = 1;
  const byName = new Map(branches.map((branch) => [branch.name, branch]));
  const children = new Map<string, Branch[]>();
  const firstConcreteCommitTimeByBranch = new Map<string, number>();
  for (const branch of branches) {
    const previews = branchCommitPreviews[branch.name] ?? [];
    const firstConcreteCommitTime = previews
      .filter((preview) => preview.kind !== 'branch-created')
      .map((preview) => new Date(preview.date).getTime())
      .filter((time) => Number.isFinite(time))
      .sort((a, b) => a - b)[0];
    if (firstConcreteCommitTime != null) firstConcreteCommitTimeByBranch.set(branch.name, firstConcreteCommitTime);
  }
  const branchColumnStartTime = (branch: Branch): number => {
    const firstConcreteCommitTime = firstConcreteCommitTimeByBranch.get(branch.name);
    if (firstConcreteCommitTime != null) return firstConcreteCommitTime;
    return branchTime(branch).start;
  };
  const resolveLaneParentName = (branch: Branch): string | null => {
    const mappedParent = branchParentByName[branch.name] ?? null;
    if (mappedParent && mappedParent !== branch.name && (mappedParent === defaultBranch || byName.has(mappedParent))) {
      return mappedParent;
    }
    if (branch.name === defaultBranch) return null;
    if (
      branch.parentBranch &&
      branch.parentBranch !== branch.name &&
      (branch.parentBranch === defaultBranch || byName.has(branch.parentBranch))
    ) {
      return branch.parentBranch;
    }
    return null;
  };
  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const parentName = resolveLaneParentName(branch) ?? defaultBranch;
    const list = children.get(parentName) ?? [];
    list.push(branch);
    children.set(parentName, list);
  }
  for (const list of children.values()) {
    list.sort((a, b) => branchColumnStartTime(a) - branchColumnStartTime(b) || a.name.localeCompare(b.name));
  }

  const laneByName = new Map<string, Lane>();
  const lanes: Lane[] = [];
  const laneDepthByName = new Map<string, number>();
  const columnIntervals = new Map<number, Array<{ start: number; end: number }>>();
  const commitTimeBySha = new Map<string, number>();
  for (const previews of Object.values(branchCommitPreviews)) {
    for (const preview of previews) {
      const time = new Date(preview.date).getTime();
      if (!Number.isFinite(time)) continue;
      if (preview.fullSha) commitTimeBySha.set(preview.fullSha, time);
      if (preview.sha) commitTimeBySha.set(preview.sha, time);
    }
  }
  const normalizeInterval = (start: number, end: number): { start: number; end: number } => ({
    start: Math.min(start, end),
    end: Math.max(start, end),
  });
  const intervalsForBranchInColumn = (branch: Branch): Array<{ start: number; end: number }> => {
    const branchSpan = normalizeInterval(branchColumnStartTime(branch), branchTime(branch).end);
    const intervals = [branchSpan];
    const branchStart = branchSpan.start;
    const forkSha = branchRootParentSha(branch, defaultBranch, branchCommitPreviews);
    const forkTimeFromCommit = forkSha ? commitTimeBySha.get(forkSha) : undefined;
    const forkTimeFromMetadata = new Date(branch.divergedFromDate ?? branch.createdDate ?? branch.lastCommitDate).getTime();
    const forkTime = Number.isFinite(forkTimeFromCommit ?? NaN)
      ? (forkTimeFromCommit as number)
      : Number.isFinite(forkTimeFromMetadata)
        ? forkTimeFromMetadata
        : null;
    if (forkTime == null) return intervals;
    const verticalSpan = normalizeInterval(forkTime, branchStart);
    if (verticalSpan.start !== verticalSpan.end) intervals.push(verticalSpan);
    return intervals;
  };
  const minGapMs = Math.max(1, 6 * 60 * 60 * 1000 * BRANCH_COLUMN_REUSE_TIME_GAP_FACTOR);
  const overlapsWithGap = (left: { start: number; end: number }, right: { start: number; end: number }): boolean =>
    !(left.start - right.end >= minGapMs || right.start - left.end >= minGapMs);
  const conflicts = (column: number, candidateIntervals: Array<{ start: number; end: number }>): boolean =>
    candidateIntervals.some((candidate) =>
      (columnIntervals.get(column) ?? []).some((existing) => overlapsWithGap(candidate, existing)),
    );
  const resolveLaneDepth = (branchName: string, visiting = new Set<string>()): number => {
    const cached = laneDepthByName.get(branchName);
    if (cached != null) return cached;
    if (visiting.has(branchName)) return 1;
    visiting.add(branchName);
    const branch = byName.get(branchName);
    if (!branch || branchName === defaultBranch) {
      visiting.delete(branchName);
      laneDepthByName.set(branchName, 0);
      return 0;
    }
    const parentName = resolveLaneParentName(branch);
    const depth = parentName ? resolveLaneDepth(parentName, visiting) + 1 : 1;
    visiting.delete(branchName);
    laneDepthByName.set(branchName, depth);
    return depth;
  };

  const claimColumn = (branchName: string, visiting = new Set<string>()): number => {
    const cached = laneByName.get(branchName);
    if (cached) return cached.column;
    if (visiting.has(branchName)) return 0;
    visiting.add(branchName);
    const branch = byName.get(branchName);
    if (!branch) {
      visiting.delete(branchName);
      return 0;
    }
    if (branchName === defaultBranch) {
      const lane = { name: branchName, column: 0, parentName: null };
      laneByName.set(branchName, lane);
      lanes.push(lane);
      const claimedIntervals = intervalsForBranchInColumn(branch);
      columnIntervals.set(0, [...(columnIntervals.get(0) ?? []), ...claimedIntervals]);
      visiting.delete(branchName);
      return 0;
    }
    const resolvedParentName = resolveLaneParentName(branch);
    const parentName =
      resolvedParentName && !visiting.has(resolvedParentName)
        ? resolvedParentName
        : null;
    const parentColumn = parentName ? claimColumn(parentName, visiting) : 0;
    const nestingFloorColumn = Math.max(1, resolveLaneDepth(branchName));
    const minColumn = Math.max(parentName ? parentColumn + 1 : 1, nestingFloorColumn);
    const claimedIntervals = intervalsForBranchInColumn(branch);
    let column = minColumn;
    while (conflicts(column, claimedIntervals)) column += 1;
    const lane = { name: branchName, column, parentName };
    laneByName.set(branchName, lane);
    lanes.push(lane);
    columnIntervals.set(column, [...(columnIntervals.get(column) ?? []), ...claimedIntervals]);
    visiting.delete(branchName);
    return column;
  };

  claimColumn(defaultBranch);
  const unclaimedBranches = branches
    .filter((branch) => !laneByName.has(branch.name))
    .sort((a, b) => branchColumnStartTime(a) - branchColumnStartTime(b) || a.name.localeCompare(b.name));
  const attachedBranches = unclaimedBranches.filter((branch) => resolveLaneParentName(branch) != null);
  const detachedRootBranches = unclaimedBranches.filter((branch) => resolveLaneParentName(branch) == null);
  for (const branch of attachedBranches) claimColumn(branch.name);

  let detachedRootColumnCursor = Math.max(0, ...lanes.map((lane) => lane.column)) + ROOT_GROUP_GUTTER_COLUMNS + 1;
  for (const branch of detachedRootBranches) {
    const claimedIntervals = intervalsForBranchInColumn(branch);
    let column = detachedRootColumnCursor;
    while (conflicts(column, claimedIntervals)) column += 1;
    const lane = { name: branch.name, column, parentName: null };
    laneByName.set(branch.name, lane);
    lanes.push(lane);
    columnIntervals.set(column, [...(columnIntervals.get(column) ?? []), ...claimedIntervals]);
    detachedRootColumnCursor = column + 1;
  }

  return lanes.sort((a, b) => a.column - b.column || a.name.localeCompare(b.name));
}

export function lanesFromStoredColumns(
  branches: Branch[],
  defaultBranch: string,
  branchParentByName: Record<string, string | null>,
  laneByBranch: Record<string, number>,
): Lane[] | null {
  const byName = new Map(branches.map((branch) => [branch.name, branch]));
  const resolveParentName = (branch: Branch): string | null => {
    const mappedParent = branchParentByName[branch.name] ?? null;
    if (mappedParent && mappedParent !== branch.name && (mappedParent === defaultBranch || byName.has(mappedParent))) {
      return mappedParent;
    }
    if (branch.name === defaultBranch) return null;
    if (
      branch.parentBranch &&
      branch.parentBranch !== branch.name &&
      (branch.parentBranch === defaultBranch || byName.has(branch.parentBranch))
    ) {
      return branch.parentBranch;
    }
    return null;
  };
  const entries: Lane[] = [];
  for (const branch of branches) {
    const column = laneByBranch[branch.name];
    if (column == null || !Number.isFinite(column)) return null;
    entries.push({
      name: branch.name,
      column,
      parentName: resolveParentName(branch),
    });
  }
  if (!entries.some((lane) => lane.name === defaultBranch && lane.column === 0)) return null;
  return entries.sort((a, b) => a.column - b.column || a.name.localeCompare(b.name));
}
