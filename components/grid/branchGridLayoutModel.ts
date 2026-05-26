import {
  isWorkingTreeCommitId,
  isWorktreeLaneBranchName,
  shaMatches as worktreeShaMatches,
  worktreeSessionCoversEmptyBranch,
  type WorktreeSession,
} from '../../lib/worktreeSessions';
import type { Branch } from '../../types';
import type { BranchCommitPreview } from '../../types';
import type { CheckedOutRef } from '../../types';
import type { DirectCommit } from '../../types';
import type { MergeNode } from '../../types';
import {
  branchBaseCommit,
  CARD_HEIGHT,
  CARD_BODY_TOP_OFFSET,
  CARD_HEADER_HEIGHT,
  CARD_WIDTH,
  type CommitItem,
  type Connector,
  type Node,
  type VisualCommit,
  LEFT_PADDING,
  TOP_PADDING,
  COLUMN_WIDTH,
  type NodePositionOverrides,
  nodeForCommitSha,
  orderByLineage,
  renderableBranchPreviews,
  ROW_GAP,
  ROW_HEIGHT,
  sortByDateThenSha,
  toCommit,
} from './LayoutGrid';
import type { Lane } from './LayoutGrid';
import { computeMergeConnectorAnchors, computeParentChildConnectorAnchors } from './branchGridConnectorAnchors';
import { getNodePositionOverride, migrateNodePositionOverridesForCommits } from './nodePositionOverrides';
/** Sync with MapGrid GRID_ZOOM_MAX — row pitch is authored in this render space. */
export const GRID_LAYOUT_RENDER_ZOOM = 2.25;

export type GridCluster = { branchName: string; key: string; commitIds: string[]; leadId: string; count: number };

export type ConnectorDecisionRow = {
  id: string;
  kind: 'branch' | 'ancestry' | 'merge';
  parent: string;
  child: string;
  rendered: boolean;
  reason: string;
};

export type MergeDestination = {
  sourceCommitSha: string;
  sourceBranchName: string;
  mergeCommitSha: string;
  targetCommitSha: string;
  targetBranchName: string;
};

export type BranchGridLayoutModel = {
  branchByName: Map<string, Branch>;
  laneByName: Map<string, Lane>;
  mainCommits: CommitItem[];
  branchCommitsByLane: Map<string, CommitItem[]>;
  branchPreviewSets: Map<string, BranchCommitPreview[]>;
  allCommits: VisualCommit[];
  clustersByBranch: Map<string, GridCluster[]>;
  clusterKeyByCommitId: Map<string, string>;
  clusterKeyBySha: Map<string, string[]>;
  leadByClusterKey: Map<string, string>;
  /** Chronologically first commit in each multi-commit clump (clump caret when expanded). */
  firstByClusterKey: Map<string, string>;
  clusterCounts: Map<string, number>;
  debugRows: string[];
  branchDebugRows: string[];
  nodes: Node[];
  normalizedSearchQuery: string;
  matchingNodes: Node[];
  matchingNodeIds: Set<string>;
  focusedNode: Node | null;
  checkedOutClusterKey: string | null;
  defaultCollapsedClumps: Set<string>;
  visibleCommitsList: VisualCommit[];
  renderNodes: Node[];
  visibleNodesBySha: Map<string, Node[]>;
  visibleNodeByClusterKey: Map<string, Node>;
  pointFormatter: (x: number, y: number) => string;
  contentWidth: number;
  contentHeight: number;
  connectors: Connector[];
  mergeConnectors: Connector[];
  connectorDecisions: ConnectorDecisionRow[];
  nodeWarnings: Map<string, string[]>;
  connectorParentShas: Set<string>;
  branchStartShas: Set<string>;
  branchOffNodeShas: Set<string>;
  crossBranchOutgoingShas: Set<string>;
  commitIdsWithRenderedAncestry: Set<string>;
  branchBaseCommitByName: Map<string, CommitItem>;
  firstBranchCommitByName: Map<string, CommitItem>;
  mergeDestinations: MergeDestination[];
  mergeTargetBranchesBySourceBranchAndCommitSha: Map<string, Map<string, Set<string>>>;
};

export type BranchGridLayoutInput = {
  branches: Branch[];
  mergeNodes: MergeNode[];
  directCommits: DirectCommit[];
  unpushedDirectCommits: DirectCommit[];
  unpushedCommitShasByBranch?: Record<string, string[]>;
  defaultBranch: string;
  branchCommitPreviews: Record<string, BranchCommitPreview[]>;
  branchParentByName?: Record<string, string | null>;
  branchUniqueAheadCounts: Record<string, number>;
  manuallyOpenedClumps: Set<string>;
  manuallyClosedClumps: Set<string>;
  isDebugOpen: boolean;
  gridSearchQuery: string;
  gridFocusSha: string | null;
  checkedOutRef: CheckedOutRef | null;
  worktreeSessions?: WorktreeSession[];
  /** `vertical`: newest above; `horizontal`: newest to the right (default). */
  orientation?: 'vertical' | 'horizontal';
  nodePositionOverrides?: NodePositionOverrides;
};


const SHARED_ROW_MAX_TIME_DELTA_MS = 60 * 60 * 1000;
const SHARED_ROW_BRANCH_SIBLING_MAX_TIME_DELTA_MS = 60 * 60 * 1000;
const safeTimeMs = (value: string | null | undefined): number => {
  const time = value ? new Date(value).getTime() : Number.NaN;
  return Number.isFinite(time) ? time : Number.NEGATIVE_INFINITY;
};
const shasMatch = (left: string | null | undefined, right: string | null | undefined): boolean => {
  if (!left || !right) return false;
  return left === right || left.startsWith(right) || right.startsWith(left);
};

function findCommitMetaInRepo(
  sha: string,
  directCommits: DirectCommit[],
  branchCommitPreviews: Record<string, BranchCommitPreview[]>,
): { parentSha: string | null; date: string; author: string } | null {
  const direct = directCommits.find(
    (commit) => shasMatch(commit.fullSha, sha) || shasMatch(commit.sha, sha),
  );
  if (direct) {
    return {
      parentSha: direct.parentSha ?? direct.parentShas?.[0] ?? null,
      date: direct.date,
      author: direct.author,
    };
  }
  const preview = Object.values(branchCommitPreviews)
    .flat()
    .find((commit) => shasMatch(commit.fullSha, sha) || shasMatch(commit.sha, sha));
  if (preview) {
    return {
      parentSha: preview.parentSha ?? preview.parentShas?.[0] ?? null,
      date: preview.date,
      author: preview.author,
    };
  }
  return null;
}

const isWorktreeGraphNode = (commit: { id: string; kind?: string | null }): boolean =>
  commit.kind === 'uncommitted' || isWorkingTreeCommitId(commit.id);

const commitMatchesSha = (commit: VisualCommit, sha: string | null | undefined): boolean => {
  if (!sha) return false;
  return shasMatch(commit.id, sha) || shasMatch(commit.id.slice(0, 7), sha);
};

const pickRightmostRenderNode = (nodes: Node[]): Node | null =>
  nodes.reduce<Node | null>(
    (best, node) => (!best || node.row > best.row ? node : best),
    null,
  );

/** Visible parent tile for a worktree — match by SHA across lanes (HEAD may stay on `main` while the session lane is `main (local)`). */
const findWorktreeAnchorParentRenderNode = (
  renderNodes: Node[],
  worktree: VisualCommit,
  checkedOutRef: CheckedOutRef | null,
  defaultBranch: string,
): Node | null => {
  const isRenderableParent = (node: Node): boolean => !isWorktreeGraphNode(node.commit);
  const checkoutHead = checkedOutRef?.headSha ?? null;

  if (
    worktree.parentSha
    && checkoutHead
    && !isWorkingTreeCommitId(checkoutHead)
    && worktreeShaMatches(worktree.parentSha, checkoutHead)
  ) {
    const tipMatches = renderNodes.filter(
      (node) => isRenderableParent(node) && commitMatchesSha(node.commit, checkoutHead),
    );
    const laneBranch = worktree.branchName ?? checkedOutRef?.branchName ?? null;
    const localLane = `${defaultBranch} (local)`;
    for (const lane of [laneBranch, localLane, defaultBranch]) {
      if (!lane) continue;
      const onLane = tipMatches.filter((node) => node.commit.branchName === lane);
      const onPreferredLane = pickRightmostRenderNode(onLane);
      if (onPreferredLane) return onPreferredLane;
    }
    const head = pickRightmostRenderNode(tipMatches);
    if (head) return head;
  }

  if (worktree.parentSha) {
    const parentMatches = renderNodes.filter(
      (node) => isRenderableParent(node) && commitMatchesSha(node.commit, worktree.parentSha),
    );
    const laneBranch = worktree.branchName ?? checkedOutRef?.branchName ?? null;
    const onWorktreeLane = laneBranch
      ? parentMatches.filter((node) => node.commit.branchName === laneBranch)
      : [];
    const parent = pickRightmostRenderNode(
      onWorktreeLane.length > 0 ? onWorktreeLane : parentMatches,
    );
    if (parent) return parent;
  }

  if (checkoutHead && !isWorkingTreeCommitId(checkoutHead)) {
    const headMatches = renderNodes.filter(
      (node) => isRenderableParent(node) && commitMatchesSha(node.commit, checkoutHead),
    );
    const laneBranch = worktree.branchName ?? checkedOutRef?.branchName ?? null;
    const localLane = `${defaultBranch} (local)`;
    for (const lane of [laneBranch, localLane, defaultBranch]) {
      if (!lane) continue;
      const onLane = headMatches.filter((node) => node.commit.branchName === lane);
      const onPreferredLane = pickRightmostRenderNode(onLane);
      if (onPreferredLane) return onPreferredLane;
    }
    const head = pickRightmostRenderNode(headMatches);
    if (head) return head;
  }

  return null;
};

/** Final pass: anchor each worktree to its visible parent tile (same lane, one step right). */
const pinWorktreeNodesToLayout = (
  isHorizontal: boolean,
  renderNodes: Node[],
  columnByCommitVisualId: Map<string, number>,
  checkedOutRef: CheckedOutRef | null,
  defaultBranch: string,
  timelineRowLeadOffset: number,
  zoomAwareTimelinePitch: number,
  zoomAwareLanePitch: number,
  maxResolvedRow: number,
  nodePositionOverrides: NodePositionOverrides,
): void => {
  const worktrees = renderNodes
    .filter((node) => isWorktreeGraphNode(node.commit))
    .sort((left, right) => left.commit.visualId.localeCompare(right.commit.visualId));
  const usedLaneColumnsByParentRow = new Map<string, Set<number>>();

  for (const node of worktrees) {
    if (getNodePositionOverride(nodePositionOverrides, node.commit)) continue;
    const parentNode = findWorktreeAnchorParentRenderNode(renderNodes, node.commit, checkedOutRef, defaultBranch);
    if (!parentNode) continue;
    const worktree = node.commit;
    const parentKey = `${parentNode.row}:${parentNode.column}`;
    const usedLaneColumns = usedLaneColumnsByParentRow.get(parentKey) ?? new Set<number>();

    if (isHorizontal) {
      node.row = parentNode.row + 1;
      let targetColumn = parentNode.column + 1;
      while (usedLaneColumns.has(targetColumn)) targetColumn += 1;
      usedLaneColumns.add(targetColumn);
      usedLaneColumnsByParentRow.set(parentKey, usedLaneColumns);
      node.column = targetColumn;
      node.x = LEFT_PADDING + (timelineRowLeadOffset + node.row - 1) * zoomAwareTimelinePitch;
      node.y = TOP_PADDING + node.column * zoomAwareLanePitch;
      columnByCommitVisualId.set(node.commit.visualId, node.column);
      continue;
    }
    node.row = Math.max(node.row, parentNode.row + 1);
    node.column = parentNode.column + 1;
    node.x = LEFT_PADDING + node.column * COLUMN_WIDTH;
    node.y = TOP_PADDING + (maxResolvedRow - node.row) * zoomAwareTimelinePitch;
    columnByCommitVisualId.set(node.commit.visualId, node.column);
  }
};

const isEmptyBranchHeadCommit = (commit: VisualCommit): boolean => commit.id.startsWith('BRANCH_HEAD:');

const isStashGraphCommit = (commit: VisualCommit): boolean =>
  commit.kind === 'stash' || commit.id.startsWith('STASH:');

const isSyntheticForkChild = (commit: VisualCommit): boolean =>
  isEmptyBranchHeadCommit(commit)
  || isStashGraphCommit(commit)
  || commit.kind === 'branch-created';

const commitsShareCollapseCluster = (
  left: VisualCommit,
  right: VisualCommit,
  clusterKeyByCommitId: Map<string, string>,
): boolean => {
  const leftCluster = clusterKeyByCommitId.get(left.visualId) ?? null;
  const rightCluster = clusterKeyByCommitId.get(right.visualId) ?? null;
  return leftCluster != null && leftCluster === rightCluster;
};

const isClusterClumpOpen = (
  clusterKey: string,
  manuallyOpenedClumps: Set<string>,
  defaultCollapsedClumps: Set<string>,
  manuallyClosedClumps: Set<string>,
): boolean =>
  manuallyOpenedClumps.has(clusterKey) ||
  (!defaultCollapsedClumps.has(clusterKey) && !manuallyClosedClumps.has(clusterKey));

const nodesShareOpenClump = (
  left: Node,
  right: Node,
  clusterKeyByCommitId: Map<string, string>,
  clusterCounts: Map<string, number>,
  isClumpOpen: (clusterKey: string) => boolean,
): boolean => {
  const clusterKey = clusterKeyByCommitId.get(left.commit.visualId) ?? null;
  if (!clusterKey || clusterKey !== clusterKeyByCommitId.get(right.commit.visualId)) return false;
  if ((clusterCounts.get(clusterKey) ?? 1) <= 1) return false;
  return isClumpOpen(clusterKey);
};

const resolveOpenClumpSharedRow = (
  rowByVisualId: Map<string, number>,
  clusterCommits: VisualCommit[],
  leadVisualId: string | undefined,
): number => {
  if (leadVisualId) {
    const leadRow = rowByVisualId.get(leadVisualId);
    if (leadRow != null) return leadRow;
  }
  return Math.max(...clusterCommits.map((commit) => rowByVisualId.get(commit.visualId) ?? 1));
};

/** Remap row indices to 1..n so clumps that shared a row do not leave empty timeline bands. */
const compactTimelineRows = (
  rowByVisualId: Map<string, number>,
  commits: VisualCommit[],
): void => {
  const usedRows = [...new Set(commits.map((commit) => rowByVisualId.get(commit.visualId) ?? 1))].sort(
    (left, right) => left - right,
  );
  const remap = new Map(usedRows.map((row, index) => [row, index + 1] as const));
  for (const commit of commits) {
    const row = rowByVisualId.get(commit.visualId) ?? 1;
    rowByVisualId.set(commit.visualId, remap.get(row) ?? row);
  }
};

/** Dense 1..n row indices for visible render nodes (after collision passes may leave gaps). */
const compactRenderNodeTimelineRows = (nodes: Node[]): number => {
  if (nodes.length === 0) return 0;
  const usedRows = [...new Set(nodes.map((node) => node.row))].sort((left, right) => left - right);
  const remap = new Map(usedRows.map((row, index) => [row, index + 1] as const));
  for (const node of nodes) {
    node.row = remap.get(node.row) ?? node.row;
  }
  return Math.max(...nodes.map((node) => node.row));
};

const syncRenderNodeTimelineCoordinates = (
  nodes: Node[],
  isHorizontal: boolean,
  maxResolvedRow: number,
  timelineRowLeadOffset: number,
  zoomAwareTimelinePitch: number,
  zoomAwareLanePitch: number,
  hasPositionOverride: (commit: VisualCommit) => boolean,
): void => {
  for (const node of nodes) {
    if (hasPositionOverride(node.commit)) continue;
    if (isHorizontal) {
      node.x = LEFT_PADDING + (timelineRowLeadOffset + node.row - 1) * zoomAwareTimelinePitch;
      node.y = TOP_PADDING + node.column * zoomAwareLanePitch;
      continue;
    }
    node.x = LEFT_PADDING + node.column * COLUMN_WIDTH;
    node.y = TOP_PADDING + (maxResolvedRow - node.row) * zoomAwareTimelinePitch;
  }
};

type AllocateRowsClusterContext = {
  clusterKeyByCommitId: Map<string, string>;
  clusterCounts: Map<string, number>;
};

/** Every clump occupies one timeline row (collapsed or open); members stack on that row. */
const applyClusterSingleTimelineRow = (
  rowByVisualId: Map<string, number>,
  commits: VisualCommit[],
  clusterKeyByCommitId: Map<string, string>,
  leadByClusterKey: Map<string, string>,
  clusterCounts: Map<string, number>,
): void => {
  for (const [clusterKey, count] of clusterCounts.entries()) {
    if (count <= 1) continue;
    const clusterCommits = commits.filter(
      (commit) => clusterKeyByCommitId.get(commit.visualId) === clusterKey,
    );
    if (clusterCommits.length <= 1) continue;
    const sharedRow = resolveOpenClumpSharedRow(
      rowByVisualId,
      clusterCommits,
      leadByClusterKey.get(clusterKey),
    );
    for (const commit of clusterCommits) {
      rowByVisualId.set(commit.visualId, sharedRow);
    }
  }
};

const syncOpenClumpNodePositions = (
  nodes: Node[],
  clusterKeyByCommitId: Map<string, string>,
  leadByClusterKey: Map<string, string>,
  clusterCounts: Map<string, number>,
  isClumpOpen: (clusterKey: string) => boolean,
  isHorizontal: boolean,
  timelineRowLeadOffset: number,
  zoomAwareTimelinePitch: number,
  maxResolvedRow: number,
): void => {
  for (const [clusterKey, count] of clusterCounts.entries()) {
    if (count <= 1) continue;
    const clusterNodes = nodes.filter(
      (node) => clusterKeyByCommitId.get(node.commit.visualId) === clusterKey,
    );
    if (clusterNodes.length <= 1) continue;
    const rowByVisualId = new Map(clusterNodes.map((node) => [node.commit.visualId, node.row] as const));
    const sharedRow = resolveOpenClumpSharedRow(
      rowByVisualId,
      clusterNodes.map((node) => node.commit),
      leadByClusterKey.get(clusterKey),
    );
    for (const node of clusterNodes) {
      node.row = sharedRow;
      if (isHorizontal) {
        node.x = LEFT_PADDING + (timelineRowLeadOffset + sharedRow - 1) * zoomAwareTimelinePitch;
        continue;
      }
      node.y = TOP_PADDING + (maxResolvedRow - sharedRow) * zoomAwareTimelinePitch;
    }
  }
};

const isMultiCommitClusterMember = (
  commit: VisualCommit,
  clusterKeyByCommitId: Map<string, string>,
  clusterCounts: Map<string, number>,
): string | null => {
  const clusterKey = clusterKeyByCommitId.get(commit.visualId) ?? null;
  if (!clusterKey) return null;
  if ((clusterCounts.get(clusterKey) ?? 1) <= 1) return null;
  return clusterKey;
};

const sortClumpCommitsChronologically = (commits: VisualCommit[]): VisualCommit[] =>
  [...commits].sort(
    (left, right) =>
      safeTimeMs(left.date) - safeTimeMs(right.date)
      || left.id.localeCompare(right.id)
      || left.visualId.localeCompare(right.visualId),
  );

/** Block lane indices [baseColumn, baseColumn + span - 1] for a multi-commit clump. */
const registerClumpLaneSpan = (
  occupantsByLaneColumn: Map<number, VisualCommit[]>,
  leadCommit: VisualCommit,
  baseColumn: number,
  span: number,
): void => {
  for (let column = baseColumn; column < baseColumn + span; column += 1) {
    const occupants = occupantsByLaneColumn.get(column) ?? [];
    if (!occupants.some((occupant) => occupant.visualId === leadCommit.visualId)) {
      occupants.push(leadCommit);
    }
    occupantsByLaneColumn.set(column, occupants);
  }
};

/** After lane assignment: non-lead clump members share the lead column until render fan-out. */
const applyClumpStoredLaneColumns = (
  commits: VisualCommit[],
  clusterKeyByCommitId: Map<string, string>,
  clusterCounts: Map<string, number>,
  leadByClusterKey: Map<string, string>,
  columnByCommitVisualId: Map<string, number>,
): void => {
  for (const [clusterKey, count] of clusterCounts.entries()) {
    if (count <= 1) continue;
    const leadVisualId = leadByClusterKey.get(clusterKey);
    if (!leadVisualId) continue;
    const leadColumn = columnByCommitVisualId.get(leadVisualId);
    if (leadColumn == null) continue;
    const members = commits.filter((commit) => clusterKeyByCommitId.get(commit.visualId) === clusterKey);
    for (const member of members) {
      columnByCommitVisualId.set(member.visualId, leadColumn);
    }
  }
};

/** Collapsed: all members at owner column. Open: owner column + adjacent lanes for older members. */
const applyClumpRenderColumnLayout = (
  commits: VisualCommit[],
  clusterKeyByCommitId: Map<string, string>,
  clusterCounts: Map<string, number>,
  leadByClusterKey: Map<string, string>,
  clumpOwnerColumnByClusterKey: Map<string, number>,
  columnByCommitVisualId: Map<string, number>,
  isClumpOpen: (clusterKey: string) => boolean,
): void => {
  for (const [clusterKey, count] of clusterCounts.entries()) {
    if (count <= 1) continue;
    const leadVisualId = leadByClusterKey.get(clusterKey);
    if (!leadVisualId) continue;
    const ownerColumn = clumpOwnerColumnByClusterKey.get(clusterKey);
    if (ownerColumn == null) continue;
    const members = sortClumpCommitsChronologically(
      commits.filter((commit) => clusterKeyByCommitId.get(commit.visualId) === clusterKey),
    );
    if (!isClumpOpen(clusterKey)) {
      for (const member of members) {
        columnByCommitVisualId.set(member.visualId, ownerColumn);
      }
      continue;
    }
    // Oldest at owner column; lead (newest) at the bottom/right of the band.
    let column = ownerColumn;
    for (const member of members) {
      columnByCommitVisualId.set(member.visualId, column);
      column += 1;
    }
  }
};

/** After column compaction, re-anchor the clump band start (owner column). */
const syncClumpOwnerColumnsFromLeadNodes = (
  renderNodes: Node[],
  clusterKeyByCommitId: Map<string, string>,
  clusterCounts: Map<string, number>,
  leadByClusterKey: Map<string, string>,
  clumpOwnerColumnByClusterKey: Map<string, number>,
  isClumpOpen: (clusterKey: string) => boolean,
): void => {
  for (const [clusterKey, count] of clusterCounts.entries()) {
    if (count <= 1) continue;
    const leadVisualId = leadByClusterKey.get(clusterKey);
    if (!leadVisualId) continue;
    const memberNodes = renderNodes.filter(
      (node) => clusterKeyByCommitId.get(node.commit.visualId) === clusterKey,
    );
    if (memberNodes.length === 0) continue;
    if (!isClumpOpen(clusterKey)) {
      const leadNode = memberNodes.find((node) => node.commit.visualId === leadVisualId);
      if (leadNode != null) clumpOwnerColumnByClusterKey.set(clusterKey, leadNode.column);
      continue;
    }
    const bandStartColumn = Math.min(...memberNodes.map((node) => node.column));
    clumpOwnerColumnByClusterKey.set(clusterKey, bandStartColumn);
  }
};

const finalizeClumpRenderLayout = (
  renderNodes: Node[],
  commits: VisualCommit[],
  clusterKeyByCommitId: Map<string, string>,
  clusterCounts: Map<string, number>,
  leadByClusterKey: Map<string, string>,
  clumpOwnerColumnByClusterKey: Map<string, number>,
  columnByCommitVisualId: Map<string, number>,
  isClumpOpen: (clusterKey: string) => boolean,
  isHorizontal: boolean,
  maxResolvedRow: number,
  timelineRowLeadOffset: number,
  zoomAwareTimelinePitch: number,
  zoomAwareLanePitch: number,
): void => {
  applyClumpRenderColumnLayout(
    commits,
    clusterKeyByCommitId,
    clusterCounts,
    leadByClusterKey,
    clumpOwnerColumnByClusterKey,
    columnByCommitVisualId,
    isClumpOpen,
  );
  for (const node of renderNodes) {
    if (isWorktreeGraphNode(node.commit)) continue;
    const clusterKey = clusterKeyByCommitId.get(node.commit.visualId);
    if (!clusterKey || (clusterCounts.get(clusterKey) ?? 1) <= 1) continue;
    const column = columnByCommitVisualId.get(node.commit.visualId);
    if (column == null) continue;
    node.column = column;
    if (isHorizontal) {
      node.y = TOP_PADDING + column * zoomAwareLanePitch;
      continue;
    }
    node.x = LEFT_PADDING + column * COLUMN_WIDTH;
    node.y = TOP_PADDING + (maxResolvedRow - node.row) * zoomAwareTimelinePitch;
  }
};

/** Horizontal layout: lane Y is always column × pitch (never cluster-lead relative Y). */
const syncHorizontalLaneYFromColumn = (
  nodes: Node[],
  zoomAwareLanePitch: number,
): void => {
  for (const node of nodes) {
    node.y = TOP_PADDING + node.column * zoomAwareLanePitch;
  }
};

/** Drop lane indices that only belonged to hidden (e.g. collapsed-clump) commits. */
const compactVisibleLaneColumns = (
  nodes: Node[],
  columnByCommitVisualId: Map<string, number>,
  isHorizontal: boolean,
  zoomAwareLanePitch: number,
): void => {
  if (nodes.length === 0) return;
  const sortedUsedColumns = [...new Set(nodes.map((node) => node.column))].sort((left, right) => left - right);
  const compactColumnByLayoutColumn = new Map(
    sortedUsedColumns.map((column, index) => [column, index] as const),
  );
  for (const node of nodes) {
    const compactColumn = compactColumnByLayoutColumn.get(node.column) ?? node.column;
    node.column = compactColumn;
    columnByCommitVisualId.set(node.commit.visualId, compactColumn);
    if (isHorizontal) {
      node.y = TOP_PADDING + compactColumn * zoomAwareLanePitch;
      continue;
    }
    node.x = LEFT_PADDING + compactColumn * COLUMN_WIDTH;
  }
};

/** Resolve same (row, column) slot conflicts; different rows may share a lane index. */
const enforceExclusiveRenderLaneColumns = (
  nodes: Node[],
  clusterKeyByCommitId: Map<string, string>,
  clusterCounts: Map<string, number>,
  columnByCommitVisualId: Map<string, number>,
  isHorizontal: boolean,
  zoomAwareLanePitch: number,
  hasPositionOverride: (commit: VisualCommit) => boolean,
): void => {
  const ordered = [...nodes].sort((left, right) => {
    if (left.column !== right.column) return left.column - right.column;
    if (left.row !== right.row) return left.row - right.row;
    return left.commit.visualId.localeCompare(right.commit.visualId);
  });
  for (const node of ordered) {
    if (hasPositionOverride(node.commit)) continue;
    if (isWorktreeGraphNode(node.commit)) continue;
    const clusterKey = clusterKeyByCommitId.get(node.commit.visualId) ?? null;
    if (clusterKey && (clusterCounts.get(clusterKey) ?? 1) > 1) continue;
    let column = node.column;
    while (
      nodes.some(
        (other) =>
          other !== node
          && other.column === column
          && other.row === node.row
          && !commitsShareCollapseCluster(node.commit, other.commit, clusterKeyByCommitId),
      )
    ) {
      column += 1;
    }
    if (column === node.column) continue;
    node.column = column;
    columnByCommitVisualId.set(node.commit.visualId, column);
    if (isHorizontal) {
      node.y = TOP_PADDING + column * zoomAwareLanePitch;
    } else {
      node.x = LEFT_PADDING + column * COLUMN_WIDTH;
    }
  }
};

const isAdjacentWorktreePair = (
  isHorizontal: boolean,
  left: Node,
  right: Node,
): boolean => {
  const leftIsWorktree = isWorktreeGraphNode(left.commit);
  const rightIsWorktree = isWorktreeGraphNode(right.commit);
  if (leftIsWorktree === rightIsWorktree) return false;
  const worktreeNode = leftIsWorktree ? left : right;
  const parentNode = leftIsWorktree ? right : left;
  const parentSha = worktreeNode.commit.parentSha;
  if (!parentSha) return false;
  if (
    !worktreeShaMatches(parentSha, parentNode.commit.id)
    && !worktreeShaMatches(parentSha, parentNode.commit.id.slice(0, 7))
  ) {
    return false;
  }
  if (isHorizontal) {
    if (worktreeNode.row !== parentNode.row + 1) return false;
    return worktreeNode.column >= parentNode.column;
  }
  return worktreeNode.row > parentNode.row && worktreeNode.column === parentNode.column + 1;
};

const isWorktreeSiblingPair = (left: Node, right: Node): boolean => {
  if (!isWorktreeGraphNode(left.commit) || !isWorktreeGraphNode(right.commit)) return false;
  const leftParent = left.commit.parentSha;
  const rightParent = right.commit.parentSha;
  if (!leftParent || !rightParent) return false;
  if (!shasMatch(leftParent, rightParent)) return false;
  return left.row === right.row && left.column !== right.column;
};

const isAdjacentAnchoredLanePair = (
  left: Node,
  right: Node,
): boolean => {
  const leftIsSyntheticForkChild = isSyntheticForkChild(left.commit);
  const rightIsSyntheticForkChild = isSyntheticForkChild(right.commit);
  if (leftIsSyntheticForkChild === rightIsSyntheticForkChild) return false;
  const childNode = leftIsSyntheticForkChild ? left : right;
  const parentNode = leftIsSyntheticForkChild ? right : left;
  const parentSha = childNode.commit.parentSha;
  if (!parentSha) return false;
  if (
    !shasMatch(parentSha, parentNode.commit.id)
    && !shasMatch(parentSha, parentNode.commit.id.slice(0, 7))
  ) {
    return false;
  }
  return childNode.row > parentNode.row && childNode.column > parentNode.column;
};

function isEmptyPlaceholderBranch(
  branch: Branch,
  branchUniqueAheadCounts: Record<string, number>,
): boolean {
  const uniqueAhead = Object.prototype.hasOwnProperty.call(branchUniqueAheadCounts, branch.name)
    ? branchUniqueAheadCounts[branch.name] ?? 0
    : null;
  if (uniqueAhead != null) return branch.commitsAhead <= 0 && uniqueAhead <= 0;
  return branch.commitsAhead <= 0;
}

function branchHasConcreteVisibleCommit(
  visibleCommitByVisualId: Map<string, VisualCommit>,
  branchName: string,
): boolean {
  return Array.from(visibleCommitByVisualId.values()).some(
    (commit) =>
      commit.branchName === branchName &&
      commit.kind !== 'branch-created' &&
      !commit.id.startsWith('BRANCH_HEAD:'),
  );
}

const setVisibleBranchCommit = (
  visibleCommitByVisualId: Map<string, VisualCommit>,
  visualCommit: VisualCommit,
): void => {
  const visualId = visualCommit.visualId || `${visualCommit.branchName}:${visualCommit.id}`;
  visibleCommitByVisualId.set(visualId, { ...visualCommit, visualId });
};

/** Synthetic lane tip when a branch has no unique commits (e.g. worktree-agents at an older commit). */
function buildEmptyBranchLaneCommit(
  branch: Branch,
  directCommits: DirectCommit[],
  branchCommitPreviews: Record<string, BranchCommitPreview[]>,
): CommitItem | null {
  const laneTipSha =
    branch.headSha ||
    branch.createdFromSha ||
    branch.divergedFromSha ||
    branch.presidesFromSha ||
    null;
  if (!laneTipSha) return null;

  const forkPointSha =
    branch.divergedFromSha ??
    branch.createdFromSha ??
    branch.presidesFromSha ??
    laneTipSha;

  const tipMeta = findCommitMetaInRepo(laneTipSha, directCommits, branchCommitPreviews);
  const forkMeta =
    forkPointSha !== laneTipSha
      ? findCommitMetaInRepo(forkPointSha, directCommits, branchCommitPreviews)
      : tipMeta;

  // Connect from the fork/tip commit on the parent line (merge-base or branch head), not HEAD's first parent.
  const parentSha = forkPointSha;

  const forkDateFromDirect = directCommits.find(
    (commit) => shasMatch(commit.fullSha, forkPointSha) || shasMatch(commit.sha, forkPointSha),
  )?.date;
  const forkDateFromPreview =
    !forkDateFromDirect
      ? Object.values(branchCommitPreviews)
          .flat()
          .find((commit) => shasMatch(commit.fullSha, forkPointSha) || shasMatch(commit.sha, forkPointSha))?.date
      : undefined;
  const anchorParentDate =
    forkDateFromDirect ?? forkDateFromPreview ?? forkMeta?.date ?? tipMeta?.date ?? null;
  const forkTimeMs = safeTimeMs(anchorParentDate ?? undefined);
  const tipTimeMs = safeTimeMs(
    tipMeta?.date ?? branch.lastCommitDate ?? branch.createdDate ?? branch.divergedFromDate,
  );
  // Match the fork parent commit's time so row assignment stays adjacent to the branch-off point.
  const placeholderTimeMs = Number.isFinite(forkTimeMs)
    ? forkTimeMs
    : Number.isFinite(tipTimeMs)
      ? tipTimeMs
      : safeTimeMs(branch.createdDate ?? branch.divergedFromDate ?? branch.lastCommitDate);

  return {
    id: `BRANCH_HEAD:${branch.name}:${laneTipSha}`,
    branchName: branch.name,
    message: '',
    author: tipMeta?.author ?? branch.lastCommitAuthor,
    date:
      anchorParentDate ??
      (Number.isFinite(placeholderTimeMs)
        ? new Date(placeholderTimeMs).toISOString()
        : branch.lastCommitDate),
    parentSha,
    clusterKey: null,
    childShas: [],
    kind: 'branch-created',
  };
}

const registerForkParentSha = (
  forkParentShas: Set<string>,
  parentSha: string,
  resolveKnownShas: (sha: string) => string[],
): void => {
  forkParentShas.add(parentSha);
  for (const knownSha of resolveKnownShas(parentSha)) forkParentShas.add(knownSha);
};

const isForkPointParentSha = (
  parentSha: string | null | undefined,
  forkParentShas: Set<string>,
  resolveKnownShas: (sha: string) => string[],
): boolean => {
  if (!parentSha) return false;
  if (forkParentShas.has(parentSha)) return true;
  return resolveKnownShas(parentSha).some((knownSha) => forkParentShas.has(knownSha));
};

/** Parents with direct children spanning multiple lanes (true branch forks). */
const collectForkPointParentShas = (
  directChildShasByParentSha: Map<string, Set<string>>,
  commitColumnsBySha: Map<string, Set<number>>,
  resolveKnownShas: (sha: string) => string[],
): Set<string> => {
  const forkParentShas = new Set<string>();
  for (const [parentSha, childIds] of directChildShasByParentSha) {
    if (childIds.size < 2) continue;
    const columns = new Set<number>();
    for (const childId of childIds) {
      for (const column of commitColumnsBySha.get(childId) ?? []) columns.add(column);
    }
    if (columns.size < 2) continue;
    registerForkParentSha(forkParentShas, parentSha, resolveKnownShas);
  }
  return forkParentShas;
};

const isLayoutSyntheticCommit = (commit: VisualCommit): boolean =>
  commit.kind === 'branch-created'
  || commit.kind === 'stash'
  || isEmptyBranchHeadCommit(commit);

/** One fork tip per branch lane — the earliest concrete commit on that branch off the parent. */
const forkTipCommitsByParentSha = (
  commits: VisualCommit[],
  resolveKnownShas: (sha: string) => string[],
): Map<string, VisualCommit[]> => {
  const directChildrenByParentSha = new Map<string, VisualCommit[]>();
  for (const commit of commits) {
    if (!commit.parentSha || isWorktreeGraphNode(commit) || isLayoutSyntheticCommit(commit)) continue;
    const parentKey = resolveKnownShas(commit.parentSha)[0] ?? commit.parentSha;
    const list = directChildrenByParentSha.get(parentKey) ?? [];
    list.push(commit);
    directChildrenByParentSha.set(parentKey, list);
  }

  const tipsByParentSha = new Map<string, VisualCommit[]>();
  for (const [parentSha, children] of directChildrenByParentSha) {
    const tipsByBranch = new Map<string, VisualCommit>();
    for (const child of children) {
      const existing = tipsByBranch.get(child.branchName);
      if (!existing) {
        tipsByBranch.set(child.branchName, child);
        continue;
      }
      const childTime = safeTimeMs(child.date);
      const existingTime = safeTimeMs(existing.date);
      if (childTime < existingTime || (childTime === existingTime && child.id.localeCompare(existing.id) < 0)) {
        tipsByBranch.set(child.branchName, child);
      }
    }
    tipsByParentSha.set(parentSha, Array.from(tipsByBranch.values()));
  }
  return tipsByParentSha;
};

/**
 * Merge fork siblings onto one timeline row. Cross-lane forks ignore timestamps and clump
 * membership so layout stays stable across push/sync when dates change.
 */
const coalesceForkSiblingRows = (
  commits: VisualCommit[],
  rowByVisualId: Map<string, number>,
  columnByCommitVisualId: Map<string, number>,
  rowBySha: Map<string, number[]>,
  resolveKnownShas: (sha: string) => string[],
  forkParentShas: Set<string>,
): void => {
  const forkTipsByParentSha = forkTipCommitsByParentSha(commits, resolveKnownShas);

  const recordChildRow = (commit: VisualCommit, row: number): void => {
    rowByVisualId.set(commit.visualId, row);
    const existingRows = rowBySha.get(commit.id) ?? [];
    if (existingRows.length === 0) rowBySha.set(commit.id, [row]);
    else rowBySha.set(commit.id, [...existingRows.slice(0, -1), row]);
  };

  const assignGroupRow = (children: VisualCommit[], floorRow: number): void => {
    const columnsInGroup = new Set(
      children.map((member) => columnByCommitVisualId.get(member.visualId) ?? 0),
    );
    if (columnsInGroup.size < children.length) return;
    const targetRow = Math.max(
      floorRow,
      ...children.map((member) => rowByVisualId.get(member.visualId) ?? 1),
    );
    for (const member of children) recordChildRow(member, targetRow);
  };

  for (const [parentSha, children] of forkTipsByParentSha) {
    if (children.length < 2) continue;
    const parentRows = resolveKnownShas(parentSha).flatMap((knownParentSha) => rowBySha.get(knownParentSha) ?? []);
    const floorRow = parentRows.length > 0 ? Math.max(...parentRows) + 1 : 1;
    if (isForkPointParentSha(parentSha, forkParentShas, resolveKnownShas)) {
      assignGroupRow(children, floorRow);
      continue;
    }

    const sortedChildren = [...children].sort(
      (left, right) =>
        safeTimeMs(left.date) - safeTimeMs(right.date) || left.id.localeCompare(right.id),
    );
    let group: VisualCommit[] = [];
    let groupAnchorTime = Number.NaN;
    const flushGroup = (): void => {
      if (group.length < 2) {
        group = [];
        groupAnchorTime = Number.NaN;
        return;
      }
      assignGroupRow(group, floorRow);
      group = [];
      groupAnchorTime = Number.NaN;
    };

    for (const child of sortedChildren) {
      const childTime = safeTimeMs(child.date);
      const canJoinGroup =
        group.length === 0
        || (
          Number.isFinite(childTime)
          && Number.isFinite(groupAnchorTime)
          && Math.abs(childTime - groupAnchorTime) <= SHARED_ROW_BRANCH_SIBLING_MAX_TIME_DELTA_MS
        );
      if (!canJoinGroup) {
        flushGroup();
        group = [child];
        groupAnchorTime = childTime;
        continue;
      }
      if (group.length === 0) groupAnchorTime = childTime;
      group.push(child);
    }
    flushGroup();
  }
};

function allocateRowsByColumnAndTime(
  commits: VisualCommit[],
  columnByCommitVisualId: Map<string, number>,
  extraParentShasByCommitId: Map<string, Set<string>> = new Map(),
  /** Merge commits: second (and further) parents treated as strict row floors so merges sit after merged tips. */
  mergeSecondParentsForStrictRows?: Map<string, Set<string>>,
  clusterContext?: AllocateRowsClusterContext,
): Map<string, number> {
  if (commits.length === 0) return new Map();
  // Use strict chronological ordering first; lineage constraints are still enforced by the
  // pending/dependency pass below before each commit can be assigned.
  const orderedCommits = [...commits].sort((a, b) => {
    const timeDelta = safeTimeMs(a.date) - safeTimeMs(b.date);
    if (timeDelta !== 0) return timeDelta;
    if (a.id !== b.id) return a.id.localeCompare(b.id);
    return a.visualId.localeCompare(b.visualId);
  });
  const commitById = new Map(commits.map((commit) => [commit.id, commit] as const));
  const childShasByParentSha = new Map<string, Set<string>>();
  const directChildShasByParentSha = new Map<string, Set<string>>();
  for (const commit of commits) {
    const directParentSha = commit.parentSha ?? null;
    if (directParentSha) {
      const children = childShasByParentSha.get(directParentSha) ?? new Set<string>();
      children.add(commit.id);
      childShasByParentSha.set(directParentSha, children);
      const directChildren = directChildShasByParentSha.get(directParentSha) ?? new Set<string>();
      directChildren.add(commit.id);
      directChildShasByParentSha.set(directParentSha, directChildren);
    }
    for (const extraParentSha of extraParentShasByCommitId.get(commit.id) ?? []) {
      if (!extraParentSha) continue;
      const children = childShasByParentSha.get(extraParentSha) ?? new Set<string>();
      children.add(commit.id);
      childShasByParentSha.set(extraParentSha, children);
    }
  }
  const rowByVisualId = new Map<string, number>();
  const occupiedRowsByRow = new Map<number, Array<{ visualId: string; sha: string; column: number; time: number; forkParentSha: string | null }>>();
  const childRowsByParentSha = new Map<string, number[]>();
  const sharedRowBlockedByBranchLine = new Set<number>();
  const commitColumnsBySha = new Map<string, Set<number>>();
  const strictParentShasByCommitId = new Map<string, Set<string>>();
  const lineageParentShasByCommitId = new Map<string, Set<string>>();
  for (const commit of commits) {
    const column = columnByCommitVisualId.get(commit.visualId) ?? 0;
    const columnSet = commitColumnsBySha.get(commit.id) ?? new Set<number>();
    columnSet.add(column);
    commitColumnsBySha.set(commit.id, columnSet);
    const strictParentShas = new Set<string>();
    if (commit.parentSha) strictParentShas.add(commit.parentSha);
    for (const mergeParentSha of mergeSecondParentsForStrictRows?.get(commit.id) ?? []) {
      if (mergeParentSha) strictParentShas.add(mergeParentSha);
    }
    strictParentShasByCommitId.set(commit.visualId, strictParentShas);
    const lineageParentShas = new Set<string>(strictParentShas);
    for (const extraParentSha of extraParentShasByCommitId.get(commit.id) ?? []) {
      if (extraParentSha) lineageParentShas.add(extraParentSha);
    }
    lineageParentShasByCommitId.set(commit.visualId, lineageParentShas);
  }
  const allKnownShas = new Set<string>(Array.from(commitColumnsBySha.keys()));
  const allKnownShasList = Array.from(allKnownShas);
  const rowBySha = new Map<string, number[]>();
  const resolveKnownShas = (sha: string): string[] => {
    const matches: string[] = [];
    for (const knownSha of allKnownShasList) {
      if (shasMatch(knownSha, sha)) matches.push(knownSha);
    }
    return matches;
  };
  const forkParentShas = collectForkPointParentShas(
    directChildShasByParentSha,
    commitColumnsBySha,
    resolveKnownShas,
  );
  const lineageParentsByKnownSha = new Map<string, Set<string>>();
  for (const knownSha of allKnownShasList) {
    lineageParentsByKnownSha.set(knownSha, new Set<string>());
  }
  for (const commit of commits) {
    const commitKnownShas = resolveKnownShas(commit.id);
    if (commitKnownShas.length === 0) continue;
    const lineageParents = lineageParentShasByCommitId.get(commit.visualId) ?? new Set<string>();
    const resolvedLineageParents = new Set<string>();
    for (const parentSha of lineageParents) {
      for (const resolvedParentSha of resolveKnownShas(parentSha)) {
        resolvedLineageParents.add(resolvedParentSha);
      }
    }
    for (const knownSha of commitKnownShas) {
      const parents = lineageParentsByKnownSha.get(knownSha) ?? new Set<string>();
      for (const resolvedParentSha of resolvedLineageParents) parents.add(resolvedParentSha);
      lineageParentsByKnownSha.set(knownSha, parents);
    }
  }
  const ancestorMemo = new Map<string, Set<string>>();
  const collectAncestors = (sha: string, visiting = new Set<string>()): Set<string> => {
    const cached = ancestorMemo.get(sha);
    if (cached) return cached;
    if (visiting.has(sha)) return new Set<string>();
    visiting.add(sha);
    const parents = lineageParentsByKnownSha.get(sha) ?? new Set<string>();
    const ancestors = new Set<string>();
    for (const parent of parents) {
      ancestors.add(parent);
      for (const ancestor of collectAncestors(parent, visiting)) ancestors.add(ancestor);
    }
    visiting.delete(sha);
    ancestorMemo.set(sha, ancestors);
    return ancestors;
  };
  const areLineageRelated = (leftSha: string, rightSha: string): boolean => {
    if (shasMatch(leftSha, rightSha)) return true;
    const leftKnownShas = resolveKnownShas(leftSha);
    const rightKnownShas = resolveKnownShas(rightSha);
    for (const leftKnownSha of leftKnownShas) {
      const leftAncestors = collectAncestors(leftKnownSha);
      for (const rightKnownSha of rightKnownShas) {
        if (leftAncestors.has(rightKnownSha)) return true;
      }
    }
    for (const rightKnownSha of rightKnownShas) {
      const rightAncestors = collectAncestors(rightKnownSha);
      for (const leftKnownSha of leftKnownShas) {
        if (rightAncestors.has(leftKnownSha)) return true;
      }
    }
    return false;
  };
  const clusterRowByKey = new Map<string, number>();
  const clusterKeyFor = (commit: VisualCommit): string | null =>
    clusterContext?.clusterKeyByCommitId.get(commit.visualId) ?? null;
  const clusterMemberCount = (clusterKey: string | null): number => {
    if (!clusterKey || !clusterContext) return 1;
    return clusterContext.clusterCounts.get(clusterKey) ?? 1;
  };
  const isMultiCommitCluster = (clusterKey: string | null): boolean =>
    clusterMemberCount(clusterKey) > 1;

  let nextRow = 1;
  const recordCommitRow = (
    commit: VisualCommit,
    assignedRow: number,
    parentShas: Set<string>,
  ): void => {
    for (const parentSha of parentShas) {
      const existingRowsForParent = childRowsByParentSha.get(parentSha) ?? [];
      existingRowsForParent.push(assignedRow);
      childRowsByParentSha.set(parentSha, existingRowsForParent);
    }
    const rowsForSha = rowBySha.get(commit.id) ?? [];
    rowsForSha.push(assignedRow);
    rowBySha.set(commit.id, rowsForSha);
  };

  const assignCommit = (commit: VisualCommit, parentShas: Set<string>) => {
    const commitColumn = columnByCommitVisualId.get(commit.visualId) ?? 0;
    const forkParentSha = commit.parentSha ?? null;
    const commitParentIsForkPoint = isForkPointParentSha(forkParentSha, forkParentShas, resolveKnownShas);
    const parentRows = Array.from(parentShas).flatMap((parentSha) =>
      resolveKnownShas(parentSha).flatMap((knownParentSha) => rowBySha.get(knownParentSha) ?? []),
    );
    const minimumAllowedRow = parentRows.length > 0 ? Math.max(...parentRows) + 1 : 1;
    const childShas = directChildShasByParentSha.get(commit.id) ?? new Set<string>();
    const childColumns = Array.from(childShas).flatMap((childSha) => Array.from(commitColumnsBySha.get(childSha) ?? []));
    const hasCrossColumnChild = childColumns.some((column) => column !== commitColumn);
    const commitTime = new Date(commit.date).getTime();
    const rowCursorStart = Math.max(minimumAllowedRow, 1);
    let assignedRow: number | null = null;
    if (isWorktreeGraphNode(commit)) {
      assignedRow = Math.max(minimumAllowedRow, nextRow);
    }
    const tryAssignSharedRow = (candidateRow: number): boolean => {
      const rowOccupants = occupiedRowsByRow.get(candidateRow) ?? [];
      if (rowOccupants.length === 0) return false;
      if (hasCrossColumnChild) return false;
      if (sharedRowBlockedByBranchLine.has(candidateRow)) return false;
      const lineageParentShas = lineageParentShasByCommitId.get(commit.visualId) ?? new Set<string>();
      const hasParentChildConflict = rowOccupants.some((occupant) => {
        if (areLineageRelated(commit.id, occupant.sha)) return true;
        const currentIsDirectLineageChild = Array.from(lineageParentShas).some((parentSha) => shasMatch(parentSha, occupant.sha));
        return currentIsDirectLineageChild;
      });
      if (hasParentChildConflict) return false;
      const laneCollision = rowOccupants.some((occupant) => occupant.column === commitColumn);
      if (laneCollision) return false;
      const withinSharedWindow = rowOccupants.every((occupant) => {
        const isForkSibling =
          !!forkParentSha &&
          !!occupant.forkParentSha &&
          shasMatch(forkParentSha, occupant.forkParentSha);
        if (isForkSibling && commitParentIsForkPoint) return true;
        if (!Number.isFinite(commitTime)) return false;
        if (!Number.isFinite(occupant.time)) return false;
        const allowedDeltaMs = isForkSibling
          ? SHARED_ROW_BRANCH_SIBLING_MAX_TIME_DELTA_MS
          : SHARED_ROW_MAX_TIME_DELTA_MS;
        return Math.abs(occupant.time - commitTime) <= allowedDeltaMs;
      });
      if (!withinSharedWindow) return false;
      assignedRow = candidateRow;
      return true;
    };
    for (let candidateRow = rowCursorStart; !isWorktreeGraphNode(commit) && candidateRow < nextRow; candidateRow += 1) {
      if (tryAssignSharedRow(candidateRow)) break;
    }
    if (assignedRow == null && forkParentSha && !isWorktreeGraphNode(commit)) {
      const siblingRows = [...occupiedRowsByRow.keys()]
        .filter((candidateRow) => candidateRow >= rowCursorStart)
        .filter((candidateRow) =>
          (occupiedRowsByRow.get(candidateRow) ?? []).some(
            (occupant) => occupant.forkParentSha && shasMatch(occupant.forkParentSha, forkParentSha),
          ),
        )
        .sort((left, right) => left - right);
      for (const candidateRow of siblingRows) {
        if (tryAssignSharedRow(candidateRow)) break;
      }
    }
    if (assignedRow == null) assignedRow = Math.max(minimumAllowedRow, nextRow);
    rowByVisualId.set(commit.visualId, assignedRow);
    if (assignedRow >= nextRow) nextRow = assignedRow + 1;
    const occupied = occupiedRowsByRow.get(assignedRow) ?? [];
    occupied.push({
      visualId: commit.visualId,
      sha: commit.id,
      column: commitColumn,
      time: commitTime,
      forkParentSha,
    });
    occupiedRowsByRow.set(assignedRow, occupied);
    if (hasCrossColumnChild) sharedRowBlockedByBranchLine.add(assignedRow);
    recordCommitRow(commit, assignedRow, parentShas);
  };

  for (const commit of orderedCommits) {
    const parentShas = strictParentShasByCommitId.get(commit.visualId) ?? new Set<string>();
    const clusterKey = clusterKeyFor(commit);
    if (isMultiCommitCluster(clusterKey)) {
      const existingClusterRow = clusterRowByKey.get(clusterKey!);
      if (existingClusterRow != null) {
        rowByVisualId.set(commit.visualId, existingClusterRow);
        recordCommitRow(commit, existingClusterRow, parentShas);
        continue;
      }
    }
    assignCommit(commit, parentShas);
    if (isMultiCommitCluster(clusterKey)) {
      const assignedRow = rowByVisualId.get(commit.visualId);
      if (assignedRow != null) clusterRowByKey.set(clusterKey!, assignedRow);
    }
  }
  // Final hard invariant: direct children must be strictly after direct parents.
  const maxPasses = Math.max(1, orderedCommits.length * 2);
  for (let pass = 0; pass < maxPasses; pass += 1) {
    let changed = false;
    for (const commit of orderedCommits) {
      const clusterKey = clusterKeyFor(commit);
      if (isMultiCommitCluster(clusterKey)) {
        const clusterRow = clusterRowByKey.get(clusterKey!);
        if (clusterRow != null) {
          const currentRow = rowByVisualId.get(commit.visualId) ?? 1;
          if (currentRow !== clusterRow) {
            rowByVisualId.set(commit.visualId, clusterRow);
            const existingRows = rowBySha.get(commit.id) ?? [];
            if (existingRows.length === 0) rowBySha.set(commit.id, [clusterRow]);
            else rowBySha.set(commit.id, [...existingRows.slice(0, -1), clusterRow]);
            changed = true;
          }
        }
        continue;
      }
      const parentShas = strictParentShasByCommitId.get(commit.visualId) ?? new Set<string>();
      if (parentShas.size === 0) continue;
      const currentRow = rowByVisualId.get(commit.visualId) ?? 1;
      let minRow = 1;
      for (const parentSha of parentShas) {
        const parentRows = resolveKnownShas(parentSha).flatMap((knownParentSha) => rowBySha.get(knownParentSha) ?? []);
        if (parentRows.length > 0) minRow = Math.max(minRow, Math.max(...parentRows) + 1);
      }
      if (currentRow < minRow) {
        rowByVisualId.set(commit.visualId, minRow);
        const existingRows = rowBySha.get(commit.id) ?? [];
        if (existingRows.length === 0) rowBySha.set(commit.id, [minRow]);
        else rowBySha.set(commit.id, [...existingRows.slice(0, -1), minRow]);
        changed = true;
      }
    }
    if (!changed) break;
  }
  coalesceForkSiblingRows(
    commits,
    rowByVisualId,
    columnByCommitVisualId,
    rowBySha,
    resolveKnownShas,
    forkParentShas,
  );
  for (let pass = 0; pass < maxPasses; pass += 1) {
    let changed = false;
    for (const commit of orderedCommits) {
      const parentShas = strictParentShasByCommitId.get(commit.visualId) ?? new Set<string>();
      if (parentShas.size === 0) continue;
      const currentRow = rowByVisualId.get(commit.visualId) ?? 1;
      let minRow = 1;
      for (const parentSha of parentShas) {
        const parentRows = resolveKnownShas(parentSha).flatMap((knownParentSha) => rowBySha.get(knownParentSha) ?? []);
        if (parentRows.length > 0) minRow = Math.max(minRow, Math.max(...parentRows) + 1);
      }
      if (currentRow < minRow) {
        rowByVisualId.set(commit.visualId, minRow);
        const existingRows = rowBySha.get(commit.id) ?? [];
        if (existingRows.length === 0) rowBySha.set(commit.id, [minRow]);
        else rowBySha.set(commit.id, [...existingRows.slice(0, -1), minRow]);
        changed = true;
      }
    }
    if (!changed) break;
  }
  // Row index increases toward descendants. Pixel mapping in `computeBranchGridLayout`:
  // vertical inverts this row index (newer above); horizontal keeps it direct (newer right).
  return rowByVisualId;
}

function ensureBranchLaneRepresentation(
  branches: Branch[],
  defaultBranch: string,
  branchCommitsByLane: Map<string, CommitItem[]>,
  visibleCommitByVisualId: Map<string, VisualCommit>,
  directCommits: DirectCommit[],
  branchCommitPreviews: Record<string, BranchCommitPreview[]>,
  branchUniqueAheadCounts: Record<string, number>,
  worktreeSessions: WorktreeSession[],
): void {
  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    if (isWorktreeLaneBranchName(branch.name)) continue;
    if (worktreeSessionCoversEmptyBranch(worktreeSessions, branch)) continue;
    if (branchHasConcreteVisibleCommit(visibleCommitByVisualId, branch.name)) continue;
    const existingPlaceholder = Array.from(visibleCommitByVisualId.values()).find(
      (commit) =>
        commit.branchName === branch.name &&
        (commit.kind === 'branch-created' || commit.id.startsWith('BRANCH_HEAD:')),
    );
    if (existingPlaceholder) continue;
    const lanePlaceholder =
      branchCommitsByLane.get(branch.name)?.find((commit) => commit.kind === 'branch-created') ??
      buildEmptyBranchLaneCommit(branch, directCommits, branchCommitPreviews);
    if (!lanePlaceholder) continue;
    const visualId = `${branch.name}:${lanePlaceholder.id}`;
    visibleCommitByVisualId.set(visualId, {
      ...lanePlaceholder,
      branchName: branch.name,
      visualId,
    });
    if (!branchCommitsByLane.has(branch.name)) {
      branchCommitsByLane.set(branch.name, [lanePlaceholder]);
    }
  }
}

export function computeBranchGridLayout(input: BranchGridLayoutInput): BranchGridLayoutModel {
  const {
    branches,
    mergeNodes,
    directCommits,
    unpushedDirectCommits,
    unpushedCommitShasByBranch = {},
    defaultBranch,
    branchCommitPreviews,
    branchParentByName = {},
    branchUniqueAheadCounts,
    manuallyOpenedClumps,
    manuallyClosedClumps,
    isDebugOpen,
    gridSearchQuery,
    gridFocusSha,
    checkedOutRef,
    worktreeSessions = [],
    orientation = 'horizontal',
    nodePositionOverrides = {},
  } = input;
  const isHorizontal = orientation === 'horizontal';

  const branchByName = new Map(branches.map((branch) => [branch.name, branch]));

  const mainCommits = orderByLineage([
    ...mergeNodes.map((node) => ({
      id: node.fullSha,
      branchName: defaultBranch,
      message: node.prTitle ?? node.sha,
      author: '',
      date: node.date,
      parentSha: node.parentShas?.[0] ?? null,
      parentShas: node.parentShas ?? [],
    })),
    ...(branchCommitPreviews[defaultBranch] ?? []).map((commit) => toCommit(defaultBranch, commit)),
    ...directCommits.map((commit) => toCommit(commit.branch || '', commit)),
    ...unpushedDirectCommits.map((commit) => toCommit(commit.branch || '', commit)),
  ]);

  const branchCommitsByLane = new Map<string, CommitItem[]>();
  const branchPreviewSets = new Map<string, BranchCommitPreview[]>();
  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const branchPreviews = renderableBranchPreviews(branch.name, branchUniqueAheadCounts, branchCommitPreviews);
    branchPreviewSets.set(branch.name, branchPreviews);
    if (isWorktreeLaneBranchName(branch.name)) {
      const commits = sortByDateThenSha(branchPreviews.map((commit) => toCommit(branch.name, commit)));
      if (commits.length > 0) {
        branchCommitsByLane.set(branch.name, commits);
      }
      continue;
    }
    if (isEmptyPlaceholderBranch(branch, branchUniqueAheadCounts)) {
      if (worktreeSessionCoversEmptyBranch(worktreeSessions, branch)) {
        const commits = sortByDateThenSha(branchPreviews.map((commit) => toCommit(branch.name, commit)));
        if (commits.length > 0) {
          branchCommitsByLane.set(branch.name, commits);
        }
        continue;
      }
      const syntheticBranchNode = buildEmptyBranchLaneCommit(branch, directCommits, branchCommitPreviews);
      if (syntheticBranchNode) {
        branchCommitsByLane.set(branch.name, [syntheticBranchNode]);
      }
      continue;
    }
    const commits = sortByDateThenSha(branchPreviews.map((commit) => toCommit(branch.name, commit)));
    if (commits.length > 0) {
      branchCommitsByLane.set(branch.name, commits);
      continue;
    }
    if (worktreeSessionCoversEmptyBranch(worktreeSessions, branch)) {
      continue;
    }
    const syntheticBranchNode = buildEmptyBranchLaneCommit(branch, directCommits, branchCommitPreviews);
    if (!syntheticBranchNode) continue;
    branchCommitsByLane.set(branch.name, [syntheticBranchNode]);
  }

  const mainCommitShas = new Set<string>(mainCommits.map((commit) => commit.id));
  const oldestMainCommit = [...mainCommits].sort((a, b) => safeTimeMs(a.date) - safeTimeMs(b.date) || a.id.localeCompare(b.id))[0] ?? null;
  const branchCommitShasByName = new Map<string, Set<string>>(
    Array.from(branchCommitsByLane.entries()).map(([branchName, commits]) => [
      branchName,
      new Set(commits.map((commit) => commit.id)),
    ] as const)
  );
  const branchBaseCommitByName = new Map<string, CommitItem>();
  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const baseCommit = branchBaseCommit(branch.name, branchCommitPreviews, branchUniqueAheadCounts);
    if (baseCommit) {
      branchBaseCommitByName.set(branch.name, baseCommit);
      continue;
    }
    const syntheticBaseCommit = branchCommitsByLane.get(branch.name)?.[0];
    if (syntheticBaseCommit) {
      branchBaseCommitByName.set(branch.name, syntheticBaseCommit);
    }
  }
  const branchReceivingCommitByName = new Map<string, CommitItem>();
  for (const [branchName, commits] of branchCommitsByLane.entries()) {
    const firstConcreteCommit = commits.find((commit) => commit.kind !== 'branch-created');
    if (firstConcreteCommit) branchReceivingCommitByName.set(branchName, firstConcreteCommit);
  }
  const firstBranchCommitByName = new Map<string, CommitItem>();
  for (const [branchName, commits] of branchCommitsByLane.entries()) {
    const concreteCommits = commits.filter((commit) => commit.kind !== 'branch-created');
    const commitsToInspect = concreteCommits.length > 0 ? concreteCommits : commits;
    const firstCommit = commitsToInspect[0] ?? null;
    if (firstCommit) firstBranchCommitByName.set(branchName, firstCommit);
  }
  const branchStartParentShaByName = new Map<string, string>();
  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const firstBranchCommit = firstBranchCommitByName.get(branch.name) ?? null;
    const baseParentSha = branchBaseCommitByName.get(branch.name)?.parentSha ?? null;
    const metadataForkSha =
      branch.presidesFromSha ?? branch.divergedFromSha ?? branch.createdFromSha ?? branch.headSha ?? null;
    const firstParentSha = firstBranchCommit?.parentSha ?? null;
    const branchStartParentSha = firstParentSha ?? baseParentSha ?? metadataForkSha;
    if (branchStartParentSha) branchStartParentShaByName.set(branch.name, branchStartParentSha);
  }

  const resolveBranchStartParentName = (branch: Branch): string => {
    const declaredParent = branchParentByName[branch.name] ?? null;
    const hasConcreteParent =
      declaredParent &&
      declaredParent !== defaultBranch &&
      declaredParent !== branch.name &&
      branchByName.has(declaredParent);
    if (!hasConcreteParent) return declaredParent ?? '';

    const forkSha =
      branchStartParentShaByName.get(branch.name)
      ?? branch.presidesFromSha
      ?? branch.divergedFromSha
      ?? branch.createdFromSha;
    if (forkSha) {
      const declaredParentCommitShas = branchCommitShasByName.get(declaredParent) ?? new Set<string>();
      if (declaredParentCommitShas.has(forkSha)) return declaredParent;
    }

    const forkAnchor = branchBaseCommitByName.get(branch.name)?.parentSha ?? null;
    if (forkAnchor) {
      const declaredParentCommitShas = branchCommitShasByName.get(declaredParent) ?? new Set<string>();
      if (declaredParentCommitShas.has(forkAnchor)) return declaredParent;
    }

    return declaredParent;
  };

  const resolveBranchStartSha = (branch: Branch): string | null => {
    const childBaseCommit = branchBaseCommitByName.get(branch.name);
    const forkSha =
      branchStartParentShaByName.get(branch.name)
      ?? childBaseCommit?.parentSha
      ?? branch.presidesFromSha
      ?? branch.divergedFromSha
      ?? branch.createdFromSha
      ?? null;
    if (!branch.parentBranch && !forkSha) return null;
    if (!forkSha) return null;
    const parentName = resolveBranchStartParentName(branch);
    if (parentName === defaultBranch) {
      if (mainCommitShas.has(forkSha)) return forkSha;
      const childParentSha = childBaseCommit?.parentSha ?? null;
      if (childParentSha && mainCommitShas.has(childParentSha)) return childParentSha;
      return oldestMainCommit?.id ?? childParentSha ?? forkSha;
    }
    if (mainCommitShas.has(forkSha)) return forkSha;
    return forkSha;
  };
  const blueStartShaForBranch = (branch: Branch): string | null => resolveBranchStartSha(branch);

  // Seed from backend direct commits; branch lane ingest below adds per-lane copies for shared SHAs.
  const visibleCommitByVisualId = new Map<string, VisualCommit>();
  for (const commit of [...directCommits, ...unpushedDirectCommits]) {
    const visualCommit: VisualCommit = {
      ...toCommit(commit.branch || '', commit),
      visualId: `${commit.branch || ''}:${commit.fullSha}`,
    };
    visibleCommitByVisualId.set(visualCommit.visualId, visualCommit);
  }
  const insertVisibleCommitIfMissing = (commit: VisualCommit) => {
    setVisibleBranchCommit(visibleCommitByVisualId, commit);
  };

  const branchCommitShaSets = new Map<string, Set<string>>(
    Array.from(branchCommitsByLane.entries()).map(([branchName, commits]) => [
      branchName,
      new Set(commits.map((commit) => commit.id)),
    ] as const)
  );
  const branchCommitShaUnion = new Set<string>();
  for (const shaSet of branchCommitShaSets.values()) {
    for (const sha of shaSet) branchCommitShaUnion.add(sha);
  }
  for (const commit of mainCommits) {
    if (commit.branchName !== defaultBranch && branchCommitShaUnion.has(commit.id)) continue;
    insertVisibleCommitIfMissing({ ...commit, visualId: `${commit.branchName}:${commit.id}` });
  }
  const checkedOutBranchName = checkedOutRef?.branchName ?? null;
  const sessionBranchesWithPriority = (() => {
    if (worktreeSessions.length > 0) {
      const current = worktreeSessions.filter((session) => session.isCurrent && session.branchName);
      const others = worktreeSessions
        .filter((session) => !session.isCurrent && session.branchName)
        .sort((left, right) => left.path.localeCompare(right.path));
      const seen = new Set<string>();
      const ordered: string[] = [];
      for (const session of [...current, ...others]) {
        const name = session.branchName!;
        if (seen.has(name)) continue;
        seen.add(name);
        ordered.push(name);
      }
      return ordered;
    }
    return checkedOutBranchName ? [checkedOutBranchName] : [];
  })();
  const checkedOutBranchNameSet = new Set(sessionBranchesWithPriority);
  const ingestBranchLaneCommits = (branchName: string, commits: CommitItem[]) => {
    for (const commit of commits) {
      const visualCommit: VisualCommit = { ...commit, branchName, visualId: `${branchName}:${commit.id}` };
      setVisibleBranchCommit(visibleCommitByVisualId, visualCommit);
    }
  };
  for (const [branchName, commits] of branchCommitsByLane.entries()) {
    if (checkedOutBranchNameSet.has(branchName)) continue;
    ingestBranchLaneCommits(branchName, commits);
  }
  // Checked-out branch lanes ingest last so WORKING_TREE parents resolve on the correct lane.
  for (const branchName of sessionBranchesWithPriority) {
    const preferredCommits = branchCommitsByLane.get(branchName);
    if (preferredCommits) ingestBranchLaneCommits(branchName, preferredCommits);
  }
  // Branch previews often keep only the first parent; restore full merge parent lists per lane.
  for (const node of mergeNodes) {
    const sha = node.fullSha;
    if (!sha) continue;
    const ps = node.parentShas ?? [];
    if (ps.length <= 1) continue;
    for (const [visualId, existing] of visibleCommitByVisualId.entries()) {
      if (!shasMatch(existing.id, sha)) continue;
      visibleCommitByVisualId.set(visualId, {
        ...existing,
        parentSha: ps[0] ?? existing.parentSha ?? null,
        parentShas: ps,
      });
    }
  }
  ensureBranchLaneRepresentation(
    branches,
    defaultBranch,
    branchCommitsByLane,
    visibleCommitByVisualId,
    directCommits,
    branchCommitPreviews,
    branchUniqueAheadCounts,
    worktreeSessions,
  );
  const visibleCommits: VisualCommit[] = Array.from(visibleCommitByVisualId.values());

  const allCommits = [...visibleCommits].sort((a, b) => safeTimeMs(a.date) - safeTimeMs(b.date) || a.id.localeCompare(b.id));
  const commitShasByBranchName = new Map<string, Set<string>>();
  for (const commit of allCommits) {
    const existing = commitShasByBranchName.get(commit.branchName) ?? new Set<string>();
    existing.add(commit.id);
    commitShasByBranchName.set(commit.branchName, existing);
  }
  const branchHasCommitSha = (branchName: string, sha: string): boolean => {
    const knownShas = commitShasByBranchName.get(branchName);
    if (!knownShas || knownShas.size === 0) return false;
    for (const knownSha of knownShas) {
      if (shasMatch(knownSha, sha)) return true;
    }
    return false;
  };
  const resolveSourceBranchName = (sourceSha: string, targetBranchName: string): string => {
    const directMatches = Array.from(commitShasByBranchName.entries())
      .filter(([branchName]) => branchName !== targetBranchName)
      .filter(([, commitShas]) => Array.from(commitShas).some((knownSha) => shasMatch(knownSha, sourceSha)))
      .map(([branchName]) => branchName);
    if (directMatches.length > 0) return directMatches.sort()[0]!;
    return sourceSha.slice(0, 7);
  };
  const mergeDestinations: MergeDestination[] = [];
  const mergeTargetBranchesBySourceBranchAndCommitSha = new Map<string, Map<string, Set<string>>>();
  const mergeParentShasByMergeSha = new Map<string, Set<string>>();
  for (const mergeNode of mergeNodes) {
    const mergeSha = mergeNode.fullSha;
    const targetBranchName = mergeNode.targetBranch;
    const targetCommitSha = mergeNode.targetCommitSha;
    if (!mergeSha || !targetBranchName || !targetCommitSha) continue;
    if (!branchHasCommitSha(targetBranchName, targetCommitSha)) continue;
    const mergedParentShas = (mergeNode.parentShas ?? []).slice(1).filter(
      (parentSha): parentSha is string => !!parentSha && !shasMatch(parentSha, mergeSha),
    );
    if (mergedParentShas.length === 0) continue;
    const existing = mergeParentShasByMergeSha.get(mergeSha) ?? new Set<string>();
    for (const parentSha of mergedParentShas) {
      existing.add(parentSha);
      const sourceBranchName = resolveSourceBranchName(parentSha, targetBranchName);
      mergeDestinations.push({
        sourceCommitSha: parentSha,
        sourceBranchName,
        mergeCommitSha: mergeSha,
        targetCommitSha,
        targetBranchName,
      });
      const byCommitSha = mergeTargetBranchesBySourceBranchAndCommitSha.get(sourceBranchName) ?? new Map<string, Set<string>>();
      const targetBranches = byCommitSha.get(parentSha) ?? new Set<string>();
      targetBranches.add(targetBranchName);
      byCommitSha.set(parentSha, targetBranches);
      mergeTargetBranchesBySourceBranchAndCommitSha.set(sourceBranchName, byCommitSha);
    }
    mergeParentShasByMergeSha.set(mergeSha, existing);
  }
  const branchStartAncestorByBranch = new Map<string, string>();
  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const branchStartSha = resolveBranchStartSha(branch);
    if (branchStartSha) branchStartAncestorByBranch.set(branch.name, branchStartSha);
  }
  const extraParentShasByCommitId = new Map<string, Set<string>>();
  for (const commit of allCommits) {
    const mergeParentShas = mergeParentShasByMergeSha.get(commit.id);
    if (mergeParentShas && mergeParentShas.size > 0) {
      const set = extraParentShasByCommitId.get(commit.id) ?? new Set<string>();
      for (const parentSha of mergeParentShas) set.add(parentSha);
      extraParentShasByCommitId.set(commit.id, set);
    }
    if (commit.branchName === defaultBranch) continue;
    const branchStartAncestorSha = branchStartAncestorByBranch.get(commit.branchName);
    if (!branchStartAncestorSha || branchStartAncestorSha === commit.id) continue;
    const set = extraParentShasByCommitId.get(commit.id) ?? new Set<string>();
    set.add(branchStartAncestorSha);
    extraParentShasByCommitId.set(commit.id, set);
  }
  const commitById = new Map<string, VisualCommit>();
  for (const commit of allCommits) {
    commitById.set(commit.id, commit);
  }
  const childShasByParentSha = new Map<string, Set<string>>();
  for (const commit of allCommits) {
    if (commit.parentSha) {
      const children = childShasByParentSha.get(commit.parentSha) ?? new Set<string>();
      children.add(commit.id);
      childShasByParentSha.set(commit.parentSha, children);
    }
    for (const extraParentSha of extraParentShasByCommitId.get(commit.id) ?? []) {
      if (!extraParentSha) continue;
      const children = childShasByParentSha.get(extraParentSha) ?? new Set<string>();
      children.add(commit.id);
      childShasByParentSha.set(extraParentSha, children);
    }
  }
  const childShasByCommitId = new Map<string, string[]>();
  for (const [parentSha, childShas] of childShasByParentSha.entries()) {
    childShasByCommitId.set(parentSha, Array.from(childShas));
  }
  const specialClusterChildKinds = new Set<NonNullable<VisualCommit['kind']>>(['branch-created', 'stash']);
  const boundaryShaByCommitId = new Set<string>();
  const findCommitBySha = (sha: string | null | undefined): VisualCommit | null => {
    if (!sha) return null;
    const resolved = allCommits.find(
      (commit) => shasMatch(commit.id, sha) || shasMatch(commit.visualId.split(':').slice(1).join(':'), sha),
    );
    return resolved ?? null;
  };
  /** Resolve a commit on a specific lane (SHA can exist on multiple branches after global de-dupe). */
  const findCommitByShaSameBranch = (sha: string | null | undefined, branchName: string): VisualCommit | null => {
    if (!sha) return null;
    return (
      allCommits.find(
        (commit) =>
          commit.branchName === branchName &&
          (shasMatch(commit.id, sha) || shasMatch(commit.visualId.split(':').slice(1).join(':'), sha)),
      ) ?? null
    );
  };
  for (const commit of allCommits) {
    if (commit.parentSha) {
      const parentCommit = findCommitBySha(commit.parentSha);
      const parentIsBoundary = !!parentCommit && boundaryShaByCommitId.has(parentCommit.visualId);
      if (parentCommit && (commit.kind === 'stash' || commit.kind === 'branch-created' || parentIsBoundary)) {
        boundaryShaByCommitId.add(parentCommit.visualId);
      }
    }
    const childShas = childShasByParentSha.get(commit.id) ?? new Set<string>();
    const realChildShas = Array.from(childShas).filter((sha) => {
      const child = commitById.get(sha);
      return !child || !isWorktreeGraphNode(child);
    });
    if (
      realChildShas.length > 1 ||
      Array.from(childShas)
        .map((sha) => commitById.get(sha))
        .some((child) => child != null && child.kind != null && specialClusterChildKinds.has(child.kind))
    ) {
      boundaryShaByCommitId.add(commit.visualId);
    }
  }
  const allCommitsWithClusters: VisualCommit[] = allCommits.map((commit) => ({
    ...commit,
    childShas: childShasByCommitId.get(commit.id) ?? commit.childShas ?? [],
  }));
  /** Fork-anchored time for cluster segmentation and provisional rows — not for lane column order. */
  const effectiveCommitTime = (commit: VisualCommit): number => {
    if (isWorktreeGraphNode(commit) && commit.parentSha) {
      const parent = findCommitBySha(commit.parentSha);
      if (parent) {
        const parentTime = safeTimeMs(parent.date);
        if (Number.isFinite(parentTime)) return parentTime;
      }
    }
    if (
      commit.parentSha
      && (commit.kind === 'branch-created' || isStashGraphCommit(commit))
    ) {
      const parent = findCommitBySha(commit.parentSha);
      if (parent) {
        const parentTime = safeTimeMs(parent.date);
        if (Number.isFinite(parentTime)) return parentTime + 1;
      }
    }
    const time = safeTimeMs(commit.date);
    return Number.isFinite(time) ? time : Number.POSITIVE_INFINITY;
  };
  /** Single-pass lane order: real dates, with synthetics at or just after their anchor parent. */
  const laneAssignmentSortTime = (commit: VisualCommit): number => {
    const selfMs = safeTimeMs(commit.date);
    const selfTime = Number.isFinite(selfMs) ? selfMs : Number.POSITIVE_INFINITY;
    if (!isSyntheticForkChild(commit) || !commit.parentSha) return selfTime;
    const parent = findCommitBySha(commit.parentSha);
    if (!parent) return selfTime;
    const parentMs = safeTimeMs(parent.date);
    if (!Number.isFinite(parentMs)) return selfTime;
    return Math.max(selfTime, parentMs + 1);
  };
  const provisionalColumnByCommitVisualId = new Map<string, number>(
    allCommitsWithClusters.map((commit) => [commit.visualId, 0] as const),
  );
  const provisionalRowByVisualId = allocateRowsByColumnAndTime(
    allCommitsWithClusters,
    provisionalColumnByCommitVisualId,
    extraParentShasByCommitId,
    mergeParentShasByMergeSha,
  );
  const commitsByBranch = new Map<string, VisualCommit[]>();
  for (const commit of allCommitsWithClusters) {
    const list = commitsByBranch.get(commit.branchName) ?? [];
    list.push(commit);
    commitsByBranch.set(commit.branchName, list);
  }
  const clustersByBranch = new Map<string, GridCluster[]>();
  const clusterKeyByCommitId = new Map<string, string>();
  const clusterKeyBySha = new Map<string, string[]>();
  const leadByClusterKey = new Map<string, string>();
  const firstByClusterKey = new Map<string, string>();
  const clusterCounts = new Map<string, number>();
  const buildClustersForBranch = (branchName: string, commits: VisualCommit[]): GridCluster[] => {
    if (commits.length === 0) return [];
    const ordered = [...commits].sort((a, b) => {
      const aRow = provisionalRowByVisualId.get(a.visualId) ?? Number.MAX_SAFE_INTEGER;
      const bRow = provisionalRowByVisualId.get(b.visualId) ?? Number.MAX_SAFE_INTEGER;
      if (aRow !== bRow) return aRow - bRow;
      return effectiveCommitTime(a) - effectiveCommitTime(b) || a.id.localeCompare(b.id);
    });
    const entriesByKey = new Map<string, VisualCommit[]>();
    let currentKey: string | null = null;
    let segmentIndex = 0;
    const clusterBoundaryKind = (commit: VisualCommit): string => {
      // Working tree is never merged into a real-commit clump — it always gets own segment.
      if (commit.kind === 'uncommitted') return 'uncommitted';
      if (commit.kind === 'stash') return 'stash';
      if (commit.kind === 'branch-created') return 'branch-created';
      const sessionTip = worktreeSessions.find(
        (session) =>
          session.headSha &&
          shasMatch(commit.id, session.headSha) &&
          (!session.branchName || commit.branchName === session.branchName),
      );
      if (sessionTip) return 'checked-out-tip';
      const checkedOutBranch = checkedOutRef?.branchName ?? null;
      const checkedOutHead = checkedOutRef?.headSha ?? null;
      if (
        checkedOutBranch &&
        checkedOutHead &&
        commit.branchName === checkedOutBranch &&
        shasMatch(commit.id, checkedOutHead)
      ) {
        return 'checked-out-tip';
      }
      return 'commit';
    };
    let previousBoundaryKind: string | null = null;
    for (const commit of ordered) {
      const isHiddenSyntheticChild = commit.kind === 'branch-created' || commit.kind === 'stash';
      const isBoundary = boundaryShaByCommitId.has(commit.visualId);
      if (isHiddenSyntheticChild) {
        continue;
      }
      const mergeParentCount = mergeParentShasByMergeSha.get(commit.id)?.size ?? 0;
      const parentShasForMerge = commit.parentShas?.length
        ? commit.parentShas
        : commit.parentSha
          ? [commit.parentSha]
          : [];
      const isMergeCommit = parentShasForMerge.length > 1 || mergeParentCount > 0;
      if (isMergeCommit) {
        currentKey = null;
      }
      const boundaryKind = clusterBoundaryKind(commit);
      const shouldReset = 
        !currentKey || 
        (previousBoundaryKind != null && (
          // Always reset if either is a special non-commit kind
          previousBoundaryKind === 'uncommitted' || boundaryKind === 'uncommitted' ||
          previousBoundaryKind === 'stash' || boundaryKind === 'stash' ||
          previousBoundaryKind === 'branch-created' || boundaryKind === 'branch-created' ||
          // Reset if transitioning from a checked-out-tip to anything else
          previousBoundaryKind === 'checked-out-tip'
        ));

      if (shouldReset) {
        segmentIndex += 1;
        currentKey = `cluster:${branchName}:segment:${segmentIndex}`;
      }
      const list = entriesByKey.get(currentKey) ?? [];
      list.push(commit);
      entriesByKey.set(currentKey, list);
      if (isBoundary) {
        currentKey = null;
      }
      previousBoundaryKind = boundaryKind;
    }
    const clusters: GridCluster[] = [];
    for (const [key, chunk] of entriesByKey.entries()) {
      if (chunk.length === 0) continue;
      const lead = [...chunk].sort((a, b) => {
        const aRow = provisionalRowByVisualId.get(a.visualId) ?? Number.MIN_SAFE_INTEGER;
        const bRow = provisionalRowByVisualId.get(b.visualId) ?? Number.MIN_SAFE_INTEGER;
        if (aRow !== bRow) return bRow - aRow;
        return effectiveCommitTime(b) - effectiveCommitTime(a) || b.id.localeCompare(a.id);
      })[0]!;
      const leadId = lead.visualId;
      const first = [...chunk].sort(
        (left, right) =>
          effectiveCommitTime(left) - effectiveCommitTime(right) || left.id.localeCompare(right.id),
      )[0]!;
      const firstId = first.visualId;
      const clusterVm = { branchName, key, commitIds: chunk.map((commit) => commit.visualId), leadId, count: chunk.length };
      clusters.push(clusterVm);
      const previousCount = clusterCounts.get(key) ?? 0;
      if (!leadByClusterKey.has(key)) {
        leadByClusterKey.set(key, leadId);
      } else {
        const currentLeadId = leadByClusterKey.get(key)!;
        const currentLead = commitById.get(currentLeadId.split(':').slice(1).join(':'));
        if (currentLead) {
          const currentLeadRow = provisionalRowByVisualId.get(currentLead.visualId) ?? Number.MIN_SAFE_INTEGER;
          const nextLeadRow = provisionalRowByVisualId.get(leadId) ?? Number.MIN_SAFE_INTEGER;
          if (nextLeadRow > currentLeadRow) leadByClusterKey.set(key, leadId);
        }
      }
      if (!firstByClusterKey.has(key)) {
        firstByClusterKey.set(key, firstId);
      } else {
        const currentFirstId = firstByClusterKey.get(key)!;
        const currentFirst = commits.find((candidate) => candidate.visualId === currentFirstId);
        if (currentFirst && effectiveCommitTime(first) < effectiveCommitTime(currentFirst)) {
          firstByClusterKey.set(key, firstId);
        }
      }
      clusterCounts.set(key, Math.max(previousCount, chunk.length));
      for (const id of clusterVm.commitIds) {
        clusterKeyByCommitId.set(id, key);
        const sha = id.split(':').slice(1).join(':');
        const keys = clusterKeyBySha.get(sha) ?? [];
        if (!keys.includes(key)) keys.push(key);
        clusterKeyBySha.set(sha, keys);
      }
    }
    return clusters;
  };
  for (const [branchName, commits] of commitsByBranch.entries()) {
    clustersByBranch.set(branchName, buildClustersForBranch(branchName, commits));
  }
  const clusterByKey = new Map<string, GridCluster>();
  for (const clusters of clustersByBranch.values()) {
    for (const cluster of clusters) clusterByKey.set(cluster.key, cluster);
  }
  const rootCommitByClusterKey = new Map<string, VisualCommit>();
  const clusterParentShasForCommit = (commit: VisualCommit): string[] => {
    const parents = new Set<string>();
    if (commit.parentSha) parents.add(commit.parentSha);
    // Only use real merge lineage for clump/lane parenting; exclude synthetic branch-start ancestry edges.
    for (const mergeParentSha of mergeParentShasByMergeSha.get(commit.id) ?? []) {
      if (mergeParentSha) parents.add(mergeParentSha);
    }
    return Array.from(parents);
  };
  for (const cluster of clusterByKey.values()) {
    const members = cluster.commitIds
      .map((id) => allCommitsWithClusters.find((commit) => commit.visualId === id) ?? null)
      .filter((commit): commit is VisualCommit => commit != null);
    if (members.length === 0) continue;
    const root = members.find((commit) => {
      const parentKeys = clusterParentShasForCommit(commit).flatMap((parentSha) => clusterKeyBySha.get(parentSha) ?? []);
      if (parentKeys.length === 0) return true;
      return parentKeys.every((parentKey) => parentKey !== cluster.key);
    }) ?? members[0]!;
    if (root) rootCommitByClusterKey.set(cluster.key, root);
  }
  const clusterTipRowByKey = new Map<string, number>();
  for (const [clusterKey, cluster] of clusterByKey.entries()) {
    const tipRow = Math.max(
      Number.NEGATIVE_INFINITY,
      ...cluster.commitIds.map((id) => provisionalRowByVisualId.get(id) ?? Number.NEGATIVE_INFINITY),
    );
    clusterTipRowByKey.set(clusterKey, Number.isFinite(tipRow) ? tipRow : Number.NEGATIVE_INFINITY);
  }
  const parentClusterByClusterKey = new Map<string, string | null>();
  for (const [clusterKey, rootCommit] of rootCommitByClusterKey.entries()) {
    const candidateParentKeys = clusterParentShasForCommit(rootCommit)
      .flatMap((parentSha) => clusterKeyBySha.get(parentSha) ?? [])
      .filter((key) => key !== clusterKey);
    if (candidateParentKeys.length === 0) {
      parentClusterByClusterKey.set(clusterKey, null);
      continue;
    }
    const rootRow = provisionalRowByVisualId.get(rootCommit.visualId) ?? Number.POSITIVE_INFINITY;
    const parentClusterKey = [...candidateParentKeys].sort((left, right) => {
      const leftTip = clusterTipRowByKey.get(left) ?? Number.NEGATIVE_INFINITY;
      const rightTip = clusterTipRowByKey.get(right) ?? Number.NEGATIVE_INFINITY;
      const leftDelta = leftTip <= rootRow ? rootRow - leftTip : Number.POSITIVE_INFINITY;
      const rightDelta = rightTip <= rootRow ? rootRow - rightTip : Number.POSITIVE_INFINITY;
      if (leftDelta !== rightDelta) return leftDelta - rightDelta;
      if (leftTip !== rightTip) return rightTip - leftTip;
      return left.localeCompare(right);
    })[0] ?? null;
    parentClusterByClusterKey.set(clusterKey, parentClusterKey);
  }
  const childClustersByParent = new Map<string | null, string[]>();
  const appendChildCluster = (parentKey: string | null, childKey: string) => {
    const list = childClustersByParent.get(parentKey) ?? [];
    list.push(childKey);
    childClustersByParent.set(parentKey, list);
  };
  for (const key of clusterByKey.keys()) appendChildCluster(parentClusterByClusterKey.get(key) ?? null, key);
  const clusterSortRank = (key: string): number => {
    const commit = rootCommitByClusterKey.get(key);
    if (!commit) return Number.POSITIVE_INFINITY;
    const time = effectiveCommitTime(commit);
    return Number.isFinite(time) ? time : Number.POSITIVE_INFINITY;
  };
  const clusterSortRowTieBreak = (key: string): number => {
    const commit = rootCommitByClusterKey.get(key);
    if (!commit) return Number.POSITIVE_INFINITY;
    const row = provisionalRowByVisualId.get(commit.visualId);
    return row ?? Number.POSITIVE_INFINITY;
  };
  for (const [parent, childKeys] of childClustersByParent.entries()) {
    childKeys.sort((left, right) => {
      const rowDelta = clusterSortRank(left) - clusterSortRank(right);
      if (rowDelta !== 0) return rowDelta;
      const tieBreak = clusterSortRowTieBreak(left) - clusterSortRowTieBreak(right);
      if (tieBreak !== 0) return tieBreak;
      return left.localeCompare(right);
    });
    childClustersByParent.set(parent, childKeys);
  }
  const columnByCommitVisualId = new Map<string, number>();
  const clumpOwnerColumnByClusterKey = new Map<string, number>();
  const occupantsByLaneColumn = new Map<number, VisualCommit[]>();
  const registerLaneColumn = (commit: VisualCommit, column: number): void => {
    columnByCommitVisualId.set(commit.visualId, column);
    const occupants = occupantsByLaneColumn.get(column) ?? [];
    occupants.push(commit);
    occupantsByLaneColumn.set(column, occupants);
  };
  const canShareLaneColumn = (left: VisualCommit, right: VisualCommit): boolean => {
    const leftCluster = clusterKeyByCommitId.get(left.visualId) ?? null;
    const rightCluster = clusterKeyByCommitId.get(right.visualId) ?? null;
    return leftCluster != null && leftCluster === rightCluster;
  };
  const clumpLaneSpan = (clusterKey: string | null): number =>
    clusterKey ? clusterCounts.get(clusterKey) ?? 1 : 1;
  const clumpLeadColumn = (clusterKey: string): number | null => {
    const leadVisualId = leadByClusterKey.get(clusterKey);
    if (!leadVisualId) return null;
    const column = columnByCommitVisualId.get(leadVisualId);
    return column ?? null;
  };
  const projectedLaneColumnMemo = new Map<string, number>();
  const projectedLaneColumn = (commit: VisualCommit, visiting = new Set<string>()): number => {
    const assigned = columnByCommitVisualId.get(commit.visualId);
    if (assigned != null) return assigned;
    const memoized = projectedLaneColumnMemo.get(commit.visualId);
    if (memoized != null) return memoized;
    const clusterKey = clusterKeyByCommitId.get(commit.visualId) ?? null;
    const span = clumpLaneSpan(clusterKey);
    if (clusterKey && span > 1) {
      const leadColumn = clumpLeadColumn(clusterKey);
      if (leadColumn != null) {
        projectedLaneColumnMemo.set(commit.visualId, leadColumn);
        return leadColumn;
      }
    }
    if (visiting.has(commit.visualId)) return 0;
    visiting.add(commit.visualId);
    const column = !commit.parentSha
      ? 0
      : Math.max(
          0,
          ...(() => {
            const sameBranchParents = allCommitsWithClusters.filter(
              (candidate) =>
                candidate.branchName === commit.branchName &&
                shasMatch(candidate.id, commit.parentSha!),
            );
            const parents = sameBranchParents.length > 0
              ? sameBranchParents
              : allCommitsWithClusters.filter((candidate) => shasMatch(candidate.id, commit.parentSha!));
            return parents.map((parent) => projectedLaneColumn(parent, visiting) + 1);
          })(),
        );
    visiting.delete(commit.visualId);
    projectedLaneColumnMemo.set(commit.visualId, column);
    return column;
  };
  const parentMinimumLaneColumn = (commit: VisualCommit): number => {
    if (!commit.parentSha) return 0;
    const sameBranchParents = allCommitsWithClusters.filter(
      (candidate) =>
        candidate.branchName === commit.branchName &&
        shasMatch(candidate.id, commit.parentSha!),
    );
    const parents = sameBranchParents.length > 0
      ? sameBranchParents
      : allCommitsWithClusters.filter((candidate) => shasMatch(candidate.id, commit.parentSha!));
    if (parents.length === 0) return 0;
    return Math.max(
      ...parents.map((parent) => {
        const parentClusterKey = clusterKeyByCommitId.get(parent.visualId) ?? null;
        const parentSpan = clumpLaneSpan(parentClusterKey);
        if (parentClusterKey && parentSpan > 1) {
          const leadColumn = clumpLeadColumn(parentClusterKey);
          if (leadColumn != null) return leadColumn + parentSpan;
        }
        return projectedLaneColumn(parent) + 1;
      }),
    );
  };
  const findLaneColumn = (commit: VisualCommit, minColumn: number): number => {
    let candidate = minColumn;
    const maxColumn = minColumn + allCommitsWithClusters.length + 8;
    while (candidate <= maxColumn) {
      const occupants = occupantsByLaneColumn.get(candidate) ?? [];
      if (occupants.every((occupant) => canShareLaneColumn(commit, occupant))) return candidate;
      candidate += 1;
    }
    return maxColumn;
  };
  const commitsInLaneOrder = [...allCommitsWithClusters].sort(
    (left, right) =>
      laneAssignmentSortTime(left) - laneAssignmentSortTime(right)
      || left.id.localeCompare(right.id)
      || left.visualId.localeCompare(right.visualId),
  );
  for (const commit of commitsInLaneOrder) {
    const clusterKey = clusterKeyByCommitId.get(commit.visualId) ?? null;
    const span = clumpLaneSpan(clusterKey);
    if (clusterKey && span > 1) {
      const leadVisualId = leadByClusterKey.get(clusterKey);
      if (leadVisualId && commit.visualId !== leadVisualId) continue;
    }
    const column = findLaneColumn(commit, parentMinimumLaneColumn(commit));
    registerLaneColumn(commit, column);
    if (clusterKey && span > 1) {
      clumpOwnerColumnByClusterKey.set(clusterKey, column);
      registerClumpLaneSpan(occupantsByLaneColumn, commit, column, span);
    }
  }
  applyClumpStoredLaneColumns(
    allCommitsWithClusters,
    clusterKeyByCommitId,
    clusterCounts,
    leadByClusterKey,
    columnByCommitVisualId,
  );
  const clusterColumnByKey = new Map<string, number>(clumpOwnerColumnByClusterKey);
  const lanes: Lane[] = Array.from(clusterColumnByKey.entries())
    .map(([key, column]) => ({
      name: key,
      column,
      parentName: parentClusterByClusterKey.get(key) ?? null,
    }))
    .sort((a, b) => a.column - b.column || a.name.localeCompare(b.name));
  const laneByName = new Map(lanes.map((lane) => [lane.name, lane] as const));
  const allRowByVisualId = allocateRowsByColumnAndTime(
    allCommitsWithClusters,
    columnByCommitVisualId,
    extraParentShasByCommitId,
    mergeParentShasByMergeSha,
    { clusterKeyByCommitId, clusterCounts },
  );
  applyClusterSingleTimelineRow(
    allRowByVisualId,
    allCommitsWithClusters,
    clusterKeyByCommitId,
    leadByClusterKey,
    clusterCounts,
  );
  compactTimelineRows(allRowByVisualId, allCommitsWithClusters);
  const commitBySha = new Map<string, VisualCommit>();
  for (const commit of allCommitsWithClusters) {
    commitBySha.set(commit.id, commit);
  }
  const resolveCommitLabel = (sha: string | null | undefined): string => {
    if (!sha) return 'none';
    const resolved = Array.from(commitBySha.values()).find(
      (commit) => shasMatch(commit.id, sha) || shasMatch(commit.id.slice(0, 7), sha) || shasMatch(sha, commit.id),
    );
    if (!resolved) return sha.slice(0, 7);
    return `${resolved.id.slice(0, 7)} ${resolved.branchName}`;
  };

  const debugRows = isDebugOpen
    ? [
        'Lane rows (expected):',
        ...[...lanes]
          .sort((a, b) => a.column - b.column || a.name.localeCompare(b.name))
          .map((lane) => `  row=${lane.column} branch=${lane.name} parent=${lane.parentName ?? 'none'}`),
        '',
        ...branches.flatMap((branch) => {
          const previews = branchCommitPreviews[branch.name] ?? [];
          const concretePreviews = [...(branchPreviewSets.get(branch.name) ?? [])].reverse();
          const renderedPreviewIds = new Set((branchCommitsByLane.get(branch.name) ?? []).map((commit) => commit.id));
          const childCommit = concretePreviews.find((commit) => !commit.parentSha || !concretePreviews.some((candidate) => shasMatch(candidate.fullSha, commit.parentSha ?? ''))) ?? concretePreviews[0] ?? null;
          const parentCommitSha = childCommit?.parentSha ?? branchStartParentShaByName.get(branch.name) ?? null;
          return [
            `Branch ${branch.name}`,
            `  ahead=${branchUniqueAheadCounts[branch.name] ?? 0} previews=${concretePreviews.length} rendered=${renderedPreviewIds.size}`,
            `  db parent commit=${resolveCommitLabel(parentCommitSha)}`,
            `  db child commit=${childCommit ? `${childCommit.fullSha.slice(0, 7)} ${branch.name}` : 'none'}`,
            ...concretePreviews.map((commit) => {
              const status = renderedPreviewIds.has(commit.fullSha) ? 'visible' : 'hidden';
              const reason = renderedPreviewIds.has(commit.fullSha) ? 'kept by render set' : 'dropped by render set';
              return `  ${status} ${commit.fullSha.slice(0, 7)} ${commit.message} [${reason}]`;
            }),
            previews.length === 0 ? '  no preview data' : null,
          ].filter((line): line is string => line != null);
        }),
      ]
    : [];
  const branchDebugRows = isDebugOpen
    ? Array.from(branchCommitsByLane.entries()).map(([branchName, commits]) => {
        return [
          `Branch debug ${branchName}`,
          ...commits.map((commit) => `  ${commit.id.slice(0, 7)} ${commit.message}`),
        ].join('\n');
      })
    : [];


  const rowByVisualId = allRowByVisualId;
  const zoomAwareRowGapPreview = ROW_GAP / GRID_LAYOUT_RENDER_ZOOM;
  const zoomAwareLabelBandPreview = 20 / GRID_LAYOUT_RENDER_ZOOM;
  const previewTimelinePitch = isHorizontal
    ? CARD_WIDTH + zoomAwareRowGapPreview + zoomAwareLabelBandPreview
    : ROW_HEIGHT + zoomAwareRowGapPreview + zoomAwareLabelBandPreview;
  const previewLanePitch = isHorizontal ? ROW_HEIGHT + zoomAwareRowGapPreview + zoomAwareLabelBandPreview : COLUMN_WIDTH;
  const maxPreviewRow = Math.max(0, ...allCommitsWithClusters.map((commit) => rowByVisualId.get(commit.visualId) ?? 1));
  const nodes: Node[] = allCommitsWithClusters.map((commit) => {
    const row = rowByVisualId.get(commit.visualId) ?? 1;
    const column = columnByCommitVisualId.get(commit.visualId) ?? 0;
    if (isHorizontal) {
      return {
        commit,
        row,
        column,
        x: LEFT_PADDING + (row - 1) * previewTimelinePitch,
        y: TOP_PADDING + column * previewLanePitch,
      };
    }
    return {
      commit,
      row,
      column,
      x: LEFT_PADDING + column * COLUMN_WIDTH,
      y: TOP_PADDING + (maxPreviewRow - row) * previewTimelinePitch,
    };
  });
  const normalizedNodePositionOverrides = migrateNodePositionOverridesForCommits(nodePositionOverrides, allCommitsWithClusters);
  const applyNodeOverrides = (node: Node): Node => {
    const override = getNodePositionOverride(normalizedNodePositionOverrides, node.commit);
    if (!override) return node;
    return { ...node, x: override.x, y: override.y };
  };
  const overriddenNodes = nodes.map(applyNodeOverrides);
  const normalizedSearchQuery = gridSearchQuery.trim().toLowerCase();
  const matchingNodes = normalizedSearchQuery
    ? overriddenNodes.filter((node) => {
        const sha = node.commit.id.toLowerCase();
        const shortSha = node.commit.id.slice(0, 7).toLowerCase();
        const message = node.commit.message.toLowerCase();
        const branchName = node.commit.branchName.toLowerCase();
        return sha.includes(normalizedSearchQuery) || shortSha.includes(normalizedSearchQuery) || message.includes(normalizedSearchQuery) || branchName.includes(normalizedSearchQuery);
      })
    : overriddenNodes;
  const focusedNode = gridFocusSha ? overriddenNodes.find((node) => node.commit.id === gridFocusSha) ?? null : null;
  const matchingNodeIds = new Set(matchingNodes.map((node) => node.commit.id));


  const checkedOutSha = checkedOutRef?.headSha ?? null;
  const checkedOutClusterKey = (() => {
    const checkedOutBranchName = checkedOutRef?.branchName ?? null;
    if (!checkedOutSha || !checkedOutBranchName) return null;
    const directKey = clusterKeyByCommitId.get(`${checkedOutBranchName}:${checkedOutSha}`);
    if (directKey) return directKey;
    for (const [visualId, clusterKey] of clusterKeyByCommitId.entries()) {
      const colon = visualId.indexOf(':');
      if (colon <= 0) continue;
      const branch = visualId.slice(0, colon);
      const shaPart = visualId.slice(colon + 1);
      if (branch !== checkedOutBranchName) continue;
      if (shasMatch(shaPart, checkedOutSha)) return clusterKey;
    }
    return null;
  })();
  const defaultCollapsedClumps = new Set<string>();
  for (const [clusterKey, count] of clusterCounts.entries()) {
    if (count > 1 && clusterKey !== checkedOutClusterKey) defaultCollapsedClumps.add(clusterKey);
  }


  const visibleCommitsList = [...allCommits].filter((commit) => {
    const clusterKey = clusterKeyByCommitId.get(commit.visualId);
    if (!clusterKey) return true;
    const leadId = leadByClusterKey.get(clusterKey);
    const count = clusterCounts.get(clusterKey) ?? 1;
    const isOpen =
      manuallyOpenedClumps.has(clusterKey) ||
      (!defaultCollapsedClumps.has(clusterKey) && !manuallyClosedClumps.has(clusterKey));
    return count <= 1 || isOpen || leadId === commit.visualId;
  });
  const isClumpOpen = (clusterKey: string): boolean =>
    isClusterClumpOpen(clusterKey, manuallyOpenedClumps, defaultCollapsedClumps, manuallyClosedClumps);
  const visibleRows = new Map<string, number>();
  for (const commit of visibleCommitsList) {
    visibleRows.set(commit.visualId, allRowByVisualId.get(commit.visualId) ?? 1);
  }
  applyClumpRenderColumnLayout(
    allCommitsWithClusters,
    clusterKeyByCommitId,
    clusterCounts,
    leadByClusterKey,
    clumpOwnerColumnByClusterKey,
    columnByCommitVisualId,
    isClumpOpen,
  );
  const zoomAwareRowGap = ROW_GAP / GRID_LAYOUT_RENDER_ZOOM;
  const zoomAwareLabelBand = 20 / GRID_LAYOUT_RENDER_ZOOM;
  const zoomAwareTimelinePitch = isHorizontal
    ? CARD_WIDTH + zoomAwareRowGap + zoomAwareLabelBand
    : ROW_HEIGHT + zoomAwareRowGap + zoomAwareLabelBand;
  const zoomAwareLanePitch = isHorizontal ? ROW_HEIGHT + zoomAwareRowGap + zoomAwareLabelBand : COLUMN_WIDTH;
  const maxAllRowForHorizontalAnchor = Math.max(0, ...allCommits.map((commit) => allRowByVisualId.get(commit.visualId) ?? 1));
  const maxVisibleRowForVertical = Math.max(0, ...visibleCommitsList.map((commit) => visibleRows.get(commit.visualId) ?? 1));
  let timelineRowLeadOffset = Math.max(0, maxAllRowForHorizontalAnchor - maxVisibleRowForVertical);
  const renderNodesRaw: Node[] = visibleCommitsList.map((commit) => {
    const row = visibleRows.get(commit.visualId) ?? 1;
    const column = columnByCommitVisualId.get(commit.visualId) ?? 0;
    if (isHorizontal) {
      return {
        commit,
        row,
        column,
        x: LEFT_PADDING + (timelineRowLeadOffset + row - 1) * zoomAwareTimelinePitch,
        y: TOP_PADDING + column * zoomAwareLanePitch,
      };
    }
    return {
      commit,
      row,
      column,
      x: LEFT_PADDING + column * COLUMN_WIDTH,
      y: TOP_PADDING + (maxVisibleRowForVertical - row) * zoomAwareTimelinePitch,
    };
  });
  // Hard guard against visual collisions: each rendered row/column slot must be unique.
  const renderNodes = [...renderNodesRaw]
    .sort((a, b) => {
      if (a.row !== b.row) return a.row - b.row;
      if (a.column !== b.column) return a.column - b.column;
      return a.commit.visualId.localeCompare(b.commit.visualId);
    })
    .map((node) => ({ ...node }));
  let maxResolvedRow = Math.max(0, ...renderNodes.map((node) => node.row));
  syncOpenClumpNodePositions(
    renderNodes,
    clusterKeyByCommitId,
    leadByClusterKey,
    clusterCounts,
    isClumpOpen,
    isHorizontal,
    timelineRowLeadOffset,
    zoomAwareTimelinePitch,
    maxResolvedRow,
  );
  const occupiedSlots = new Set<string>();
  for (const node of renderNodes) {
    const openClumpKey = isMultiCommitClusterMember(
      node.commit,
      clusterKeyByCommitId,
      clusterCounts,
    );
    const leadVisualId = openClumpKey ? leadByClusterKey.get(openClumpKey) : null;
    if (openClumpKey && leadVisualId && node.commit.visualId !== leadVisualId) {
      continue;
    }
    let candidateRow = node.row;
    let slotKey = `${node.column}:${candidateRow}`;
    while (occupiedSlots.has(slotKey)) {
      candidateRow += 1;
      slotKey = `${node.column}:${candidateRow}`;
    }
    node.row = candidateRow;
    occupiedSlots.add(slotKey);
  }
  maxResolvedRow = Math.max(0, ...renderNodes.map((node) => node.row));
  syncOpenClumpNodePositions(
    renderNodes,
    clusterKeyByCommitId,
    leadByClusterKey,
    clusterCounts,
    isClumpOpen,
    isHorizontal,
    timelineRowLeadOffset,
    zoomAwareTimelinePitch,
    maxResolvedRow,
  );
  for (const node of renderNodes) {
    if (isHorizontal) {
      node.x = LEFT_PADDING + (timelineRowLeadOffset + node.row - 1) * zoomAwareTimelinePitch;
      node.y = TOP_PADDING + node.column * zoomAwareLanePitch;
      continue;
    }
    node.x = LEFT_PADDING + node.column * COLUMN_WIDTH;
    node.y = TOP_PADDING + (maxResolvedRow - node.row) * zoomAwareTimelinePitch;
  }
  const nodeBoxHeight = CARD_BODY_TOP_OFFSET + CARD_HEIGHT + 4;
  const boxesOverlap = (left: Node, right: Node): boolean => {
    const leftX2 = left.x + CARD_WIDTH;
    const leftY2 = left.y + nodeBoxHeight;
    const rightX2 = right.x + CARD_WIDTH;
    const rightY2 = right.y + nodeBoxHeight;
    return left.x < rightX2 && leftX2 > right.x && left.y < rightY2 && leftY2 > right.y;
  };
  const placedNodes: Node[] = [];
  for (const node of renderNodes) {
    if (isWorktreeGraphNode(node.commit)) {
      placedNodes.push(node);
      continue;
    }
    // Same timeline row is shared across lanes (horizontal: same x, different y). Bounding boxes can
    // intersect between lanes even when layout is intentional — bumping row here consumed a timeline
    // slot on one lane only, leaving a visible "empty row" before HEAD / uncommitted.
    const maxRowBump = renderNodes.length + maxResolvedRow + 8;
    while (
      node.row <= maxRowBump
      && placedNodes.some((placed) => {
        if (placed.column !== node.column) return false;
        if (!boxesOverlap(node, placed)) return false;
        if (isAdjacentWorktreePair(isHorizontal, node, placed)) return false;
        if (isWorktreeSiblingPair(node, placed)) return false;
        if (isAdjacentAnchoredLanePair(node, placed)) return false;
        if (nodesShareOpenClump(node, placed, clusterKeyByCommitId, clusterCounts, isClumpOpen)) return false;
        return true;
      })
    ) {
      if (isHorizontal) {
        node.row += 1;
        node.x = LEFT_PADDING + (timelineRowLeadOffset + node.row - 1) * zoomAwareTimelinePitch;
      } else {
        node.row += 1;
        node.y = TOP_PADDING + (maxResolvedRow - node.row) * zoomAwareTimelinePitch;
      }
    }
    placedNodes.push(node);
  }
  syncOpenClumpNodePositions(
    renderNodes,
    clusterKeyByCommitId,
    leadByClusterKey,
    clusterCounts,
    isClumpOpen,
    isHorizontal,
    timelineRowLeadOffset,
    zoomAwareTimelinePitch,
    maxResolvedRow,
  );
  maxResolvedRow = compactRenderNodeTimelineRows(renderNodes);
  timelineRowLeadOffset = 0;
  syncRenderNodeTimelineCoordinates(
    renderNodes,
    isHorizontal,
    maxResolvedRow,
    timelineRowLeadOffset,
    zoomAwareTimelinePitch,
    zoomAwareLanePitch,
    (commit) => !!getNodePositionOverride(normalizedNodePositionOverrides, commit),
  );
  syncOpenClumpNodePositions(
    renderNodes,
    clusterKeyByCommitId,
    leadByClusterKey,
    clusterCounts,
    isClumpOpen,
    isHorizontal,
    timelineRowLeadOffset,
    zoomAwareTimelinePitch,
    maxResolvedRow,
  );
  enforceExclusiveRenderLaneColumns(
    renderNodes,
    clusterKeyByCommitId,
    clusterCounts,
    columnByCommitVisualId,
    isHorizontal,
    zoomAwareLanePitch,
    (commit) => !!getNodePositionOverride(normalizedNodePositionOverrides, commit),
  );
  compactVisibleLaneColumns(renderNodes, columnByCommitVisualId, isHorizontal, zoomAwareLanePitch);
  syncClumpOwnerColumnsFromLeadNodes(
    renderNodes,
    clusterKeyByCommitId,
    clusterCounts,
    leadByClusterKey,
    clumpOwnerColumnByClusterKey,
    isClumpOpen,
  );
  const movedLeadByClusterKey = new Map<string, { node: Node; x: number; y: number }>();
  for (const node of renderNodes) {
    const clusterKey = clusterKeyByCommitId.get(node.commit.visualId);
    if (!clusterKey) continue;
    if (leadByClusterKey.get(clusterKey) !== node.commit.visualId) continue;
    const override = getNodePositionOverride(normalizedNodePositionOverrides, node.commit);
    if (!override) continue;
    movedLeadByClusterKey.set(clusterKey, { node, x: override.x, y: override.y });
  }
  for (const node of renderNodes) {
    const override = getNodePositionOverride(normalizedNodePositionOverrides, node.commit);
    if (override) {
      node.x = override.x;
      node.y = override.y;
      continue;
    }
    const clusterKey = clusterKeyByCommitId.get(node.commit.visualId);
    const movedLead = clusterKey ? movedLeadByClusterKey.get(clusterKey) : null;
    if (!movedLead) continue;
    if (isHorizontal) {
      // Signed row delta: layout x grows with row (newer to the right). Using only max(0, leadRow - row)
      // collapsed the offset when node.row > lead.row (e.g. working tree newer than a stale lead row),
      // stacking cards and overlapping absolutely positioned labels.
      // Lane Y stays column × pitch for every node so stashes/placeholders never share a band with main.
      node.x = movedLead.x + (node.row - movedLead.node.row) * zoomAwareTimelinePitch;
      continue;
    }
    node.x = movedLead.x + (node.column - movedLead.node.column) * COLUMN_WIDTH;
    // Vertical: y = TOP_PADDING + (maxResolvedRow - row) * pitch → larger row = smaller y (newer above).
    node.y = movedLead.y - (node.row - movedLead.node.row) * zoomAwareTimelinePitch;
  }
  maxResolvedRow = Math.max(0, ...renderNodes.map((node) => node.row));
  finalizeClumpRenderLayout(
    renderNodes,
    allCommitsWithClusters,
    clusterKeyByCommitId,
    clusterCounts,
    leadByClusterKey,
    clumpOwnerColumnByClusterKey,
    columnByCommitVisualId,
    isClumpOpen,
    isHorizontal,
    maxResolvedRow,
    timelineRowLeadOffset,
    zoomAwareTimelinePitch,
    zoomAwareLanePitch,
  );
  syncHorizontalLaneYFromColumn(
    renderNodes.filter((node) => !getNodePositionOverride(normalizedNodePositionOverrides, node.commit)),
    zoomAwareLanePitch,
  );
  pinWorktreeNodesToLayout(
    isHorizontal,
    renderNodes,
    columnByCommitVisualId,
    checkedOutRef,
    defaultBranch,
    timelineRowLeadOffset,
    zoomAwareTimelinePitch,
    zoomAwareLanePitch,
    maxResolvedRow,
    normalizedNodePositionOverrides,
  );
  const visibleNodesBySha = new Map<string, Node[]>();
  for (const node of renderNodes) {
    const list = visibleNodesBySha.get(node.commit.id) ?? [];
    list.push(node);
    visibleNodesBySha.set(node.commit.id, list);
  }
  const visibleNodeByClusterKey = new Map<string, Node>();
  for (const node of renderNodes) {
    const clusterKey = clusterKeyByCommitId.get(node.commit.visualId);
    if (!clusterKey) continue;
    const current = visibleNodeByClusterKey.get(clusterKey);
    // Vertical: newer above; cluster tip is top-most. Horizontal: newer right; tip is right-most.
    if (!current || (isHorizontal ? node.x > current.x : node.y < current.y)) visibleNodeByClusterKey.set(clusterKey, node);
  }
  const pointFormatter = (x: number, y: number) => `${x.toFixed(1)} ${y.toFixed(1)}`;
  const maxVisibleRow = Math.max(0, ...renderNodes.map((node) => node.row));
  const maxLaneColumn = Math.max(0, ...renderNodes.map((node) => node.column));
  const renderedMaxX = Math.max(0, ...renderNodes.map((node) => node.x + CARD_WIDTH));
  const renderedMaxY = Math.max(0, ...renderNodes.map((node) => node.y + CARD_BODY_TOP_OFFSET + CARD_HEIGHT));
  const contentWidth = Math.max(
    isHorizontal
      ? LEFT_PADDING * 2 + Math.max(0, maxVisibleRow - 1) * zoomAwareTimelinePitch + CARD_WIDTH + CARD_HEADER_HEIGHT + zoomAwareLabelBand
      : LEFT_PADDING * 2 + (maxLaneColumn + 1) * COLUMN_WIDTH,
    renderedMaxX + LEFT_PADDING,
  );
  const contentHeight = Math.max(
    isHorizontal
      ? TOP_PADDING * 2 + maxLaneColumn * zoomAwareLanePitch + CARD_HEIGHT + CARD_HEADER_HEIGHT + zoomAwareLabelBand
      : TOP_PADDING * 2 + Math.max(0, maxVisibleRow - 1) * zoomAwareTimelinePitch + CARD_HEIGHT + CARD_HEADER_HEIGHT + zoomAwareLabelBand,
    renderedMaxY + TOP_PADDING,
  );

  const connectors: Connector[] = [];
  const branchZIndexByName = new Map<string, number>(
    branches.map((branch) => {
      const time = new Date(branch.createdDate ?? branch.divergedFromDate ?? branch.lastCommitDate).getTime();
      return [branch.name, Number.isFinite(time) ? time : 0] as const;
    }),
  );
  const branchConnectorZIndex = (branchName: string): number => branchZIndexByName.get(branchName) ?? 0;
  const connectorDecisions: ConnectorDecisionRow[] = [];
  const pushConnectorDecision = (row: ConnectorDecisionRow) => {
    if (!isDebugOpen) return;
    connectorDecisions.push(row);
  };
  /** Commit SHAs that participate in a rendered ancestry (or branch-chain) connector (for "Broken ancestry" styling). */
  const commitIdsWithRenderedAncestry = new Set<string>();
  const nodeWarnings = new Map<string, string[]>();
  const addNodeWarning = (sha: string, message: string) => {
    const list = nodeWarnings.get(sha) ?? [];
    if (!list.includes(message)) list.push(message);
    nodeWarnings.set(sha, list);
  };
  const connectorParentShas = new Set<string>();
  const branchStartShas = new Set<string>();
  const branchOffNodeShas = new Set<string>();
  const isClusterCollapsed = (clusterKey: string): boolean =>
    (clusterCounts.get(clusterKey) ?? 1) > 1 && !isClumpOpen(clusterKey);
  // Blue highlights are driven by branch-off metadata, not by connector usage.
  const nodeForConnectorTipSha = (sha: string | null | undefined, preferredBranchName?: string): Node | null => {
    if (!sha) return null;
    const visibleNode = nodeForCommitSha(visibleNodesBySha, sha, preferredBranchName);
    if (visibleNode) return visibleNode;
    const exactRenderedNode = renderNodes.find(
      (candidate) =>
        shasMatch(candidate.commit.id, sha) &&
        (!preferredBranchName || candidate.commit.branchName === preferredBranchName),
    );
    if (exactRenderedNode) return exactRenderedNode;
    const clusterKey =
      clusterKeyByCommitId.get(`${preferredBranchName ?? defaultBranch}:${sha}`) ??
      clusterKeyByCommitId.get(sha);
    if (!clusterKey) return null;
    const clusterNodes = renderNodes.filter(
      (candidate) => clusterKeyByCommitId.get(candidate.commit.visualId) === clusterKey,
    );
    const forkNodeInCluster = clusterNodes.find((candidate) => shasMatch(candidate.commit.id, sha));
    if (forkNodeInCluster) return forkNodeInCluster;
    if (isClusterCollapsed(clusterKey)) {
      return visibleNodeByClusterKey.get(clusterKey) ?? null;
    }
    const clusterLeadId = leadByClusterKey.get(clusterKey);
    if (clusterLeadId) {
      const leadNode = renderNodes.find((candidate) => candidate.commit.visualId === clusterLeadId);
      if (leadNode && shasMatch(leadNode.commit.id, sha)) return leadNode;
    }
    return null;
  };
  const connectorKeySet = new Set<string>();
  for (const branch of branches) {
    const branchStartSha = blueStartShaForBranch(branch);
    if (branchStartSha) branchStartShas.add(branchStartSha);
    const forkSha = branchStartParentShaByName.get(branch.name) ?? null;
    if (forkSha) branchOffNodeShas.add(forkSha);
  }
  const resolveConnectorNode = (commit: VisualCommit): Node | null => {
    const directNode = nodeForConnectorTipSha(commit.id, commit.branchName);
    if (directNode) return directNode;
    const clusterKey = clusterKeyByCommitId.get(commit.visualId);
    if (!clusterKey) return null;
    const leadId = leadByClusterKey.get(clusterKey);
    if (!leadId) return null;
    return (
      renderNodes.find((candidate) => candidate.commit.visualId === leadId)
      ?? visibleNodeByClusterKey.get(clusterKey)
      ?? null
    );
  };

  const resolveChildNodeForSha = (sha: string | null | undefined, preferredBranchName?: string): Node | null => {
    if (!sha) return null;
    return nodeForCommitSha(visibleNodesBySha, sha, preferredBranchName);
  };

  const isConnectorBranching = (parentNode: Node, childNode: Node): boolean => {
    if (parentNode.column !== childNode.column) return true;
    if (!isHorizontal) return false;
    return parentNode.commit.branchName !== childNode.commit.branchName;
  };

  const resolveParentNode = (parentSha: string, preferredBranchName: string): Node | null => {
    return nodeForCommitSha(visibleNodesBySha, parentSha, preferredBranchName);
  };

  const resolveNodeForSha = (sha: string | null | undefined, preferredBranchName?: string): Node | null => {
    return resolveChildNodeForSha(sha, preferredBranchName);
  };

  const mergeConnectors: Connector[] = [];
  const mergeConnectorGeometryKeySet = new Set<string>();
  for (const destination of mergeDestinations) {
    const mergeTarget =
      nodeForConnectorTipSha(destination.targetCommitSha, destination.targetBranchName) ?? null;
    if (!mergeTarget) {
      pushConnectorDecision({
        id: `merge:${destination.mergeCommitSha}:${destination.sourceCommitSha}:target`,
        kind: 'merge',
        parent: destination.sourceCommitSha,
        child: destination.targetCommitSha,
        rendered: false,
        reason: 'missing merge target node',
      });
      continue;
    }
    const parentSha = destination.sourceCommitSha;
    const decisionId = `merge:${destination.mergeCommitSha}:${parentSha ?? 'unknown'}`;
    if (!parentSha || shasMatch(parentSha, destination.targetCommitSha)) {
      pushConnectorDecision({
        id: decisionId,
        kind: 'merge',
        parent: parentSha ?? 'unknown',
        child: destination.targetCommitSha,
        rendered: false,
        reason: !parentSha ? 'missing merged parent sha' : 'merged parent equals merge target sha',
      });
      continue;
    }
    const sourceNode = nodeForCommitSha(visibleNodesBySha, parentSha) ?? null;
    if (!sourceNode) {
      pushConnectorDecision({
        id: decisionId,
        kind: 'merge',
        parent: parentSha,
        child: destination.targetCommitSha,
        rendered: false,
        reason: 'missing merge parent node',
      });
      continue;
    }
    if (sourceNode.commit.id === mergeTarget.commit.id) {
      pushConnectorDecision({
        id: decisionId,
        kind: 'merge',
        parent: sourceNode.commit.id,
        child: mergeTarget.commit.id,
        rendered: false,
        reason: 'merge parent and target resolve to same node',
      });
      continue;
    }
    const anchors = computeMergeConnectorAnchors(isHorizontal, sourceNode, mergeTarget);
    const { fromX, fromY, fromFace, toX, toY, toFace } = anchors;
    const geometryKey = `${fromX.toFixed(2)}:${fromY.toFixed(2)}:${toX.toFixed(2)}:${toY.toFixed(2)}`;
    if (mergeConnectorGeometryKeySet.has(geometryKey)) {
      pushConnectorDecision({
        id: decisionId,
        kind: 'merge',
        parent: sourceNode.commit.id,
        child: mergeTarget.commit.id,
        rendered: false,
        reason: 'duplicate merge connector geometry',
      });
      continue;
    }
    mergeConnectorGeometryKeySet.add(geometryKey);
    mergeConnectors.push({
      id: decisionId,
      fromX,
      fromY,
      toX,
      toY,
      fromFace,
      toFace,
      zIndex: branchConnectorZIndex(sourceNode.commit.branchName),
      fromCommitVisualId: sourceNode.commit.visualId,
      toCommitVisualId: mergeTarget.commit.visualId,
      connectorEdgeKind: 'merge',
    });
    pushConnectorDecision({
      id: decisionId,
      kind: 'merge',
      parent: sourceNode.commit.id,
      child: mergeTarget.commit.id,
      rendered: true,
      reason: `merge connector rendered to ${destination.targetBranchName}`,
    });
  }

  const crossBranchOutgoingShas = new Set<string>();
  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const branchBaseCommit = branchBaseCommitByName.get(branch.name);
    if (!branchBaseCommit) continue;
    const parentName = resolveBranchStartParentName(branch);
    const receivingCommit = branchReceivingCommitByName.get(branch.name) ?? branchBaseCommit;
    const immediateParentSha = receivingCommit.parentSha ?? branchStartParentShaByName.get(branch.name) ?? null;
    const preferredParentBranchName =
      immediateParentSha
        ? (commitById.get(immediateParentSha)?.branchName ?? parentName)
        : parentName;
    const parentNode = immediateParentSha
      ? (
        nodeForConnectorTipSha(immediateParentSha, preferredParentBranchName)
        ?? resolveParentNode(immediateParentSha, preferredParentBranchName)
      )
      : null;
    const childNode = resolveNodeForSha(receivingCommit.id, branch.name) ?? resolveConnectorNode(receivingCommit as VisualCommit);
    if (!parentNode || !childNode || parentNode.commit.id === childNode.commit.id) {
      const parentClusterKey = clusterKeyByCommitId.get(`${branch.name}:${branchBaseCommit.id}`);
      const childClusterKey = clusterKeyByCommitId.get(`${branch.name}:${receivingCommit.id}`);
      const parentClusterDefaultOpen = !!parentClusterKey && !defaultCollapsedClumps.has(parentClusterKey);
      const childClusterDefaultOpen = !!childClusterKey && !defaultCollapsedClumps.has(childClusterKey);
      const parentHiddenByClump = !!parentClusterKey
        && !manuallyOpenedClumps.has(parentClusterKey)
        && (parentClusterDefaultOpen ? manuallyClosedClumps.has(parentClusterKey) : true);
      const childHiddenByClump = !!childClusterKey
        && !manuallyOpenedClumps.has(childClusterKey)
        && (childClusterDefaultOpen ? manuallyClosedClumps.has(childClusterKey) : true);
      if (!parentNode && !parentHiddenByClump) {
        addNodeWarning(childNode?.commit.id ?? branchBaseCommit.id, 'Missing parent node');
      }
      if (!childNode && !childHiddenByClump) {
        addNodeWarning(branchBaseCommit.id, 'Missing child node');
      }
      pushConnectorDecision({
        id: `branch:${parentNode?.commit.id ?? 'null'}->${childNode?.commit.id ?? 'null'}`,
        kind: 'branch',
        parent: parentNode?.commit.id ?? 'null',
        child: childNode?.commit.id ?? 'null',
        rendered: false,
        reason: !parentNode ? 'missing parent node' : !childNode ? 'missing child node' : 'parent and child are the same node',
      });
      continue;
    }
    const redundantWithDirectAncestry =
      receivingCommit.kind !== 'branch-created'
      && !!receivingCommit.parentSha
      && shasMatch(receivingCommit.parentSha, parentNode.commit.id);
    if (redundantWithDirectAncestry) {
      pushConnectorDecision({
        id: `branch:${parentNode.commit.id}->${childNode.commit.id}`,
        kind: 'branch',
        parent: parentNode.commit.id,
        child: childNode.commit.id,
        rendered: false,
        reason: 'redundant with direct ancestry connector',
      });
      continue;
    }
    const key = `branch:${parentNode.commit.id}->${childNode.commit.id}`;
    if (connectorKeySet.has(key)) {
      pushConnectorDecision({
        id: key,
        kind: 'branch',
        parent: parentNode.commit.id,
        child: childNode.commit.id,
        rendered: false,
        reason: 'duplicate connector key',
      });
      continue;
    }
    connectorKeySet.add(key);
    connectorParentShas.add(parentNode.commit.id);
    const isBranching = isConnectorBranching(parentNode, childNode);
    if (parentNode.commit.branchName !== childNode.commit.branchName) {
      crossBranchOutgoingShas.add(parentNode.commit.id);
    }
    const anchors = computeParentChildConnectorAnchors(isHorizontal, true, parentNode, childNode);
    connectors.push({
      id: key,
      fromX: anchors.fromX,
      fromY: anchors.fromY,
      toX: anchors.toX,
      toY: anchors.toY,
      fromFace: anchors.fromFace,
      toFace: anchors.toFace,
      zIndex: branchConnectorZIndex(childNode.commit.branchName),
      fromCommitVisualId: parentNode.commit.visualId,
      toCommitVisualId: childNode.commit.visualId,
      useBranchFeedAnchors: true,
      connectorEdgeKind: 'branch',
    });
    pushConnectorDecision({
      id: key,
      kind: 'branch',
      parent: parentNode.commit.id,
      child: childNode.commit.id,
      rendered: true,
      reason: isBranching ? 'branch connector rendered' : isHorizontal ? 'horizontal connector rendered' : 'vertical connector rendered',
    });
  }

  for (const commit of allCommits) {
    const childNode = resolveConnectorNode(commit);
    if (!childNode) continue;
    const parentSha = commit.parentSha ?? null;
    if (!parentSha) continue;
    const parentNode =
      nodeForConnectorTipSha(parentSha, commit.branchName)
      ?? resolveParentNode(parentSha, commit.branchName);
    if (!parentNode) {
      const parentClusterKey =
        clusterKeyByCommitId.get(`${commit.branchName}:${parentSha}`) ?? clusterKeyByCommitId.get(parentSha);
      const parentClusterDefaultOpen = !!parentClusterKey && !defaultCollapsedClumps.has(parentClusterKey);
      const parentHiddenByClump = !!parentClusterKey
        && !manuallyOpenedClumps.has(parentClusterKey)
        && (parentClusterDefaultOpen ? manuallyClosedClumps.has(parentClusterKey) : true);
      if (!parentHiddenByClump) {
        addNodeWarning(commit.id, 'Missing parent node');
      }
      pushConnectorDecision({
        id: `${commit.visualId}->${parentSha}`,
        kind: 'ancestry',
        parent: parentSha,
        child: commit.id,
        rendered: false,
        reason: 'missing parent node',
      });
      continue;
    }
    if (childNode.commit.id === parentNode.commit.id) {
      addNodeWarning(childNode.commit.id, 'Parent and child resolve to the same node');
      pushConnectorDecision({
        id: `${parentNode.commit.id}->${childNode.commit.id}`,
        kind: 'ancestry',
        parent: parentNode.commit.id,
        child: childNode.commit.id,
        rendered: false,
        reason: 'parent and child are the same node',
      });
      continue;
    }
    const key = `${commit.branchName}:${parentNode.commit.visualId ?? parentNode.commit.id}->${childNode.commit.visualId}`;
    if (connectorKeySet.has(key)) {
      addNodeWarning(parentNode.commit.id, 'Duplicate connector key');
      addNodeWarning(childNode.commit.id, 'Duplicate connector key');
      pushConnectorDecision({
        id: key,
        kind: 'ancestry',
        parent: parentNode.commit.id,
        child: childNode.commit.id,
        rendered: false,
        reason: 'duplicate connector key',
      });
      continue;
    }
    connectorKeySet.add(key);
    connectorParentShas.add(parentNode.commit.id);
    const isBranching = isConnectorBranching(parentNode, childNode);
    const anchors = computeParentChildConnectorAnchors(isHorizontal, false, parentNode, childNode);
    connectors.push({
      id: key,
      fromX: anchors.fromX,
      fromY: anchors.fromY,
      toX: anchors.toX,
      toY: anchors.toY,
      fromFace: anchors.fromFace,
      toFace: anchors.toFace,
      zIndex: branchConnectorZIndex(childNode.commit.branchName),
      fromCommitVisualId: parentNode.commit.visualId,
      toCommitVisualId: childNode.commit.visualId,
      useBranchFeedAnchors: false,
      connectorEdgeKind: 'ancestry',
    });
    pushConnectorDecision({
      id: key,
      kind: 'ancestry',
      parent: parentNode.commit.id,
      child: childNode.commit.id,
      rendered: true,
      reason: isBranching ? 'ancestry connector rendered' : isHorizontal ? 'horizontal ancestry rendered' : 'vertical ancestry rendered',
    });
    commitIdsWithRenderedAncestry.add(parentNode.commit.id);
    commitIdsWithRenderedAncestry.add(childNode.commit.id);
  }

  const nodesByBranch = new Map<string, Node[]>();
  for (const node of renderNodes) {
    const list = nodesByBranch.get(node.commit.branchName) ?? [];
    list.push(node);
    nodesByBranch.set(node.commit.branchName, list);
  }
  for (const [branchName, branchNodes] of nodesByBranch.entries()) {
    if (branchNodes.length < 2) continue;
    const orderedBranchNodes = [...branchNodes].sort((a, b) => {
      if (a.row !== b.row) return a.row - b.row;
      return safeTimeMs(a?.commit?.date ?? null) - safeTimeMs(b?.commit?.date ?? null)
        || (a?.commit?.id ?? '').localeCompare(b?.commit?.id ?? '');
    });
    for (let index = 1; index < orderedBranchNodes.length; index += 1) {
      const parentNode = orderedBranchNodes[index - 1]!;
      const childNode = orderedBranchNodes[index]!;
      if (parentNode.commit.id === childNode.commit.id) continue;
      // This is a fallback pass. If the child's real parent is resolvable,
      // avoid adding an extra synthetic chain connector.
      const realParentSha = childNode.commit.parentSha ?? null;
      if (realParentSha) {
        const resolvedRealParent = resolveParentNode(realParentSha, childNode.commit.branchName);
        if (resolvedRealParent) continue;
      }
      const key = `chain:${branchName}:${parentNode.commit.id}->${childNode.commit.id}`;
      if (connectorKeySet.has(key)) {
        addNodeWarning(parentNode.commit.id, 'Duplicate branch chain connector');
        addNodeWarning(childNode.commit.id, 'Duplicate branch chain connector');
        pushConnectorDecision({
          id: key,
          kind: 'ancestry',
          parent: parentNode.commit.id,
          child: childNode.commit.id,
          rendered: false,
          reason: 'duplicate branch chain key',
        });
        continue;
      }
      connectorKeySet.add(key);
      const anchors = computeParentChildConnectorAnchors(isHorizontal, false, parentNode, childNode);
      connectors.push({
        id: key,
        fromX: anchors.fromX,
        fromY: anchors.fromY,
        toX: anchors.toX,
        toY: anchors.toY,
        fromFace: anchors.fromFace,
        toFace: anchors.toFace,
        zIndex: branchConnectorZIndex(childNode.commit.branchName),
        fromCommitVisualId: parentNode.commit.visualId,
        toCommitVisualId: childNode.commit.visualId,
        useBranchFeedAnchors: false,
        connectorEdgeKind: 'chain',
      });
      pushConnectorDecision({
        id: key,
        kind: 'ancestry',
        parent: parentNode.commit.id,
        child: childNode.commit.id,
        rendered: true,
        reason: 'branch chain rendered',
      });
      commitIdsWithRenderedAncestry.add(parentNode.commit.id);
      commitIdsWithRenderedAncestry.add(childNode.commit.id);
    }
  }


  return {
    branchByName,
    laneByName,
    mainCommits,
    branchCommitsByLane,
    branchPreviewSets,
    allCommits,
    clustersByBranch,
    clusterKeyByCommitId,
    clusterKeyBySha,
    leadByClusterKey,
    firstByClusterKey,
    clusterCounts,
    debugRows,
    branchDebugRows,
    nodes,
    normalizedSearchQuery,
    matchingNodes,
    matchingNodeIds,
    focusedNode,
    checkedOutClusterKey,
    defaultCollapsedClumps,
    visibleCommitsList,
    renderNodes,
    visibleNodesBySha,
    visibleNodeByClusterKey,
    pointFormatter,
    contentWidth,
    contentHeight,
    connectors,
    mergeConnectors,
    connectorDecisions,
    nodeWarnings,
    connectorParentShas,
    branchStartShas,
    branchOffNodeShas,
    crossBranchOutgoingShas,
    commitIdsWithRenderedAncestry,
    branchBaseCommitByName,
    firstBranchCommitByName,
    mergeDestinations,
    mergeTargetBranchesBySourceBranchAndCommitSha,
  };
}
