import type { Branch } from '../../types';
import type { BranchCommitPreview } from '../../types';
import type { CheckedOutRef } from '../../types';
import type { DirectCommit } from '../../types';
import type { MergeNode } from '../../types';
import {
  branchBaseCommit,
  buildMergeOrthogonalPath,
  CARD_HEIGHT,
  CARD_HEADER_HEIGHT,
  CARD_WIDTH,
  type CommitItem,
  type Connector,
  type Node,
  type VisualCommit,
  LEFT_PADDING,
  TOP_PADDING,
  COLUMN_WIDTH,
  nodeForCommitSha,
  orderByLineage,
  renderableBranchPreviews,
  ROW_GAP,
  ROW_HEIGHT,
  toCommit,
} from './LayoutGrid';
import type { Lane } from './LayoutGrid';

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
  mergeConnectors: Array<{ id: string; path: string; fromX: number; fromY: number; toX: number; toY: number; zIndex: number }>;
  connectorDecisions: ConnectorDecisionRow[];
  nodeWarnings: Map<string, string[]>;
  connectorParentShas: Set<string>;
  branchStartShas: Set<string>;
  branchOffNodeShas: Set<string>;
  crossBranchOutgoingShas: Set<string>;
  commitIdsWithRenderedAncestry: Set<string>;
  branchBaseCommitByName: Map<string, CommitItem>;
};

export type BranchGridLayoutInput = {
  lanes: Lane[];
  branches: Branch[];
  mergeNodes: MergeNode[];
  directCommits: DirectCommit[];
  unpushedDirectCommits: DirectCommit[];
  defaultBranch: string;
  branchCommitPreviews: Record<string, BranchCommitPreview[]>;
  branchUniqueAheadCounts: Record<string, number>;
  manuallyOpenedClumps: Set<string>;
  manuallyClosedClumps: Set<string>;
  isDebugOpen: boolean;
  gridSearchQuery: string;
  gridFocusSha: string | null;
  checkedOutRef: CheckedOutRef | null;
};


const GRID_CONNECTOR_CORNER_RADIUS_PX = 18;
const GRID_INCOMING_GAP_PX = 0;
const GRID_MERGE_TARGET_GAP_PX = 0;
const SHARED_ROW_MAX_TIME_DELTA_MS = 30 * 60 * 1000;
const SHARED_ROW_BRANCH_SIBLING_MAX_TIME_DELTA_MS = 24 * 60 * 60 * 1000;
function allocateRowsByColumnAndTime(
  commits: VisualCommit[],
  laneByName: Map<string, Lane>,
  extraParentShasByCommitId: Map<string, Set<string>> = new Map(),
): Map<string, number> {
  if (commits.length === 0) return new Map();
  const shasMatch = (left: string | null | undefined, right: string | null | undefined): boolean => {
    if (!left || !right) return false;
    return left === right || left.startsWith(right) || right.startsWith(left);
  };
  // Use lineage-first ordering (parent before child) before row assignment.
  const orderedCommits = orderByLineage(commits);
  const childShasByParentSha = new Map<string, Set<string>>();
  for (const commit of commits) {
    const directParentSha = commit.parentSha ?? null;
    if (directParentSha) {
      const children = childShasByParentSha.get(directParentSha) ?? new Set<string>();
      children.add(commit.id);
      childShasByParentSha.set(directParentSha, children);
    }
    for (const extraParentSha of extraParentShasByCommitId.get(commit.id) ?? []) {
      if (!extraParentSha) continue;
      const children = childShasByParentSha.get(extraParentSha) ?? new Set<string>();
      children.add(commit.id);
      childShasByParentSha.set(extraParentSha, children);
    }
  }
  const rowByVisualId = new Map<string, number>();
  const occupiedRowsByRow = new Map<number, Array<{ visualId: string; sha: string; column: number; time: number; branchEntryParentSha: string | null }>>();
  const childRowsByParentSha = new Map<string, number[]>();
  const sharedRowBlockedByBranchLine = new Set<number>();
  const branchCommitShasByName = new Map<string, Set<string>>();
  const commitColumnsBySha = new Map<string, Set<number>>();
  const strictParentShasByCommitId = new Map<string, Set<string>>();
  const lineageParentShasByCommitId = new Map<string, Set<string>>();
  for (const commit of commits) {
    const set = branchCommitShasByName.get(commit.branchName) ?? new Set<string>();
    set.add(commit.id);
    branchCommitShasByName.set(commit.branchName, set);
    const column = laneByName.get(commit.branchName)?.column ?? 0;
    const columnSet = commitColumnsBySha.get(commit.id) ?? new Set<number>();
    columnSet.add(column);
    commitColumnsBySha.set(commit.id, columnSet);
    const strictParentShas = new Set<string>();
    if (commit.parentSha) strictParentShas.add(commit.parentSha);
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
  let nextRow = 1;
  const assignCommit = (commit: VisualCommit, parentShas: Set<string>) => {
    const commitColumn = laneByName.get(commit.branchName)?.column ?? 0;
    const branchCommitShas = branchCommitShasByName.get(commit.branchName) ?? new Set<string>();
    const parentInSameBranch = !!commit.parentSha && branchCommitShas.has(commit.parentSha);
    const branchEntryParentSha = !parentInSameBranch && commit.parentSha ? commit.parentSha : null;
    const parentRows = Array.from(parentShas).flatMap((parentSha) =>
      resolveKnownShas(parentSha).flatMap((knownParentSha) => rowBySha.get(knownParentSha) ?? []),
    );
    const minimumAllowedRow = parentRows.length > 0 ? Math.max(...parentRows) + 1 : 1;
    const childShas = childShasByParentSha.get(commit.id) ?? new Set<string>();
    const childColumns = Array.from(childShas).flatMap((childSha) => Array.from(commitColumnsBySha.get(childSha) ?? []));
    const hasCrossColumnChild = childColumns.some((column) => column !== commitColumn);
    const commitTime = new Date(commit.date).getTime();
    const rowCursorStart = Math.max(minimumAllowedRow, 1);
    let assignedRow: number | null = null;
    for (let candidateRow = rowCursorStart; candidateRow < nextRow; candidateRow += 1) {
      const rowOccupants = occupiedRowsByRow.get(candidateRow) ?? [];
      if (rowOccupants.length === 0) continue;
      if (hasCrossColumnChild) continue;
      if (sharedRowBlockedByBranchLine.has(candidateRow)) continue;
      const lineageParentShas = lineageParentShasByCommitId.get(commit.visualId) ?? new Set<string>();
      const hasParentChildConflict = rowOccupants.some((occupant) => {
        if (areLineageRelated(commit.id, occupant.sha)) return true;
        const currentIsDirectLineageChild = Array.from(lineageParentShas).some((parentSha) => shasMatch(parentSha, occupant.sha));
        return currentIsDirectLineageChild;
      });
      if (hasParentChildConflict) continue;
      const laneCollision = rowOccupants.some((occupant) => occupant.column === commitColumn);
      if (laneCollision) continue;
      if (!Number.isFinite(commitTime)) continue;
      const withinSharedWindow = rowOccupants.every(
        (occupant) => {
          if (!Number.isFinite(occupant.time)) return false;
          const isSiblingBranchEntry =
            !!branchEntryParentSha &&
            !!occupant.branchEntryParentSha &&
            branchEntryParentSha === occupant.branchEntryParentSha;
          const allowedDeltaMs = isSiblingBranchEntry
            ? SHARED_ROW_BRANCH_SIBLING_MAX_TIME_DELTA_MS
            : SHARED_ROW_MAX_TIME_DELTA_MS;
          return Math.abs(occupant.time - commitTime) <= allowedDeltaMs;
        },
      );
      if (!withinSharedWindow) continue;
      assignedRow = candidateRow;
      break;
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
      branchEntryParentSha,
    });
    occupiedRowsByRow.set(assignedRow, occupied);
    if (hasCrossColumnChild) sharedRowBlockedByBranchLine.add(assignedRow);
    for (const parentSha of parentShas) {
      const existingRowsForParent = childRowsByParentSha.get(parentSha) ?? [];
      existingRowsForParent.push(assignedRow);
      childRowsByParentSha.set(parentSha, existingRowsForParent);
    }
    const rowsForSha = rowBySha.get(commit.id) ?? [];
    rowsForSha.push(assignedRow);
    rowBySha.set(commit.id, rowsForSha);
  };

  let pending = [...orderedCommits];
  while (pending.length > 0) {
    const nextPending: VisualCommit[] = [];
    let progressed = false;
    for (const commit of pending) {
      const parentShas = strictParentShasByCommitId.get(commit.visualId) ?? new Set<string>();
      const unresolvedInGraphParent = Array.from(parentShas).some(
        (parentSha) => resolveKnownShas(parentSha).some((knownParentSha) => (rowBySha.get(knownParentSha)?.length ?? 0) === 0),
      );
      if (unresolvedInGraphParent) {
        nextPending.push(commit);
        continue;
      }
      assignCommit(commit, parentShas);
      progressed = true;
    }
    if (!progressed) {
      const forcedCommit = nextPending.shift();
      if (!forcedCommit) break;
      assignCommit(forcedCommit, strictParentShasByCommitId.get(forcedCommit.visualId) ?? new Set<string>());
    }
    pending = nextPending;
  }
  const maxAssignedRow = Math.max(0, ...Array.from(rowByVisualId.values()));
  if (maxAssignedRow <= 1) return rowByVisualId;
  const invertedRowByVisualId = new Map<string, number>();
  for (const [visualId, row] of rowByVisualId.entries()) {
    invertedRowByVisualId.set(visualId, maxAssignedRow - row + 1);
  }
  return invertedRowByVisualId;
}

function clusterByForkPoints<T>(
  entries: Array<{ item: T }>,
  forkIndices: Set<number>,
): Array<{ entries: Array<{ item: T }> }> {
  if (entries.length === 0) return [];
  const effectiveForkIndices = new Set(
    Array.from(forkIndices).filter((index) => index >= 0 && index < entries.length)
  );
  const clusters: Array<{ entries: Array<{ item: T }> }> = [];
  let current: Array<{ item: T }> = [];
  const flush = () => {
    if (current.length === 0) return;
    clusters.push({ entries: current });
    current = [];
  };
  for (let i = 0; i < entries.length; i += 1) {
    current.push(entries[i]);
    if (effectiveForkIndices.has(i)) flush();
  }
  flush();
  return clusters;
}

function splitClusterEntriesByAdjacentRows<T extends { visualId: string }>(
  entries: Array<{ item: T }>,
  rowByVisualId: Map<string, number>,
): Array<Array<{ item: T }>> {
  if (entries.length === 0) return [];
  const chunks: Array<Array<{ item: T }>> = [];
  let current: Array<{ item: T }> = [];
  let previousRow: number | null = null;

  const flush = () => {
    if (current.length === 0) return;
    chunks.push(current);
    current = [];
  };

  for (const entry of entries) {
    const row = rowByVisualId.get(entry.item.visualId);
    const isAdjacent = row != null && previousRow != null && Math.abs(row - previousRow) === 1;
    if (current.length > 0 && !isAdjacent) flush();
    current.push(entry);
    previousRow = row ?? null;
  }

  flush();
  return chunks;
}

export function computeBranchGridLayout(input: BranchGridLayoutInput): BranchGridLayoutModel {
  const {
    lanes,
    branches,
    mergeNodes,
    directCommits,
    unpushedDirectCommits,
    defaultBranch,
    branchCommitPreviews,
    branchUniqueAheadCounts,
    manuallyOpenedClumps,
    manuallyClosedClumps,
    isDebugOpen,
    gridSearchQuery,
    gridFocusSha,
    checkedOutRef,
  } = input;

  const branchByName = new Map(branches.map((branch) => [branch.name, branch]));
  const laneByName = new Map(lanes.map((lane) => [lane.name, lane] as const));

  const mainCommits = orderByLineage([
    ...mergeNodes.map((node) => ({
      id: node.fullSha,
      branchName: defaultBranch,
      message: node.prTitle ?? node.sha,
      author: '',
      date: node.date,
      parentSha: node.parentShas?.[0] ?? null,
    })),
    ...(branchCommitPreviews[defaultBranch] ?? []).map((commit) => toCommit(defaultBranch, commit)),
    ...directCommits.map((commit) => toCommit(defaultBranch, commit)),
    ...unpushedDirectCommits.map((commit) => toCommit(defaultBranch, commit)),
  ]);

  const branchCommitsByLane = new Map<string, CommitItem[]>();
  const branchPreviewSets = new Map<string, BranchCommitPreview[]>();
  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const branchPreviews = renderableBranchPreviews(branch.name, branchUniqueAheadCounts, branchCommitPreviews);
    branchPreviewSets.set(branch.name, branchPreviews);
    const commits = orderByLineage(branchPreviews.map((commit) => toCommit(branch.name, commit)));
    if (commits.length > 0) {
      branchCommitsByLane.set(branch.name, commits);
      continue;
    }
    const forkSha = branch.presidesFromSha ?? branch.divergedFromSha ?? branch.createdFromSha ?? null;
    if (!forkSha) continue;
    const syntheticBranchNode: CommitItem = {
      id: `BRANCH_HEAD:${branch.name}:${forkSha}`,
      branchName: branch.name,
      message: `Branch ${branch.name}`,
      author: branch.lastCommitAuthor,
      date: branch.createdDate ?? branch.divergedFromDate ?? branch.lastCommitDate,
      parentSha: null,
      kind: 'branch-created',
    };
    branchCommitsByLane.set(branch.name, [syntheticBranchNode]);
  }

  const mainCommitShas = new Set<string>(mainCommits.map((commit) => commit.id));
  const oldestMainCommit = [...mainCommits].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime() || a.id.localeCompare(b.id))[0] ?? null;
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
      const forkSha = branch.presidesFromSha ?? branch.divergedFromSha ?? branch.createdFromSha ?? null;
      branchBaseCommitByName.set(branch.name, {
        ...syntheticBaseCommit,
        parentSha: forkSha,
      });
    }
  }
  const branchReceivingCommitByName = new Map<string, CommitItem>();
  for (const [branchName, commits] of branchCommitsByLane.entries()) {
    const firstConcreteCommit = commits.find((commit) => commit.kind !== 'branch-created');
    if (firstConcreteCommit) branchReceivingCommitByName.set(branchName, firstConcreteCommit);
  }

  const resolveBranchStartParentName = (branch: Branch): string => {
    const declaredParent = branch.parentBranch;
    const hasConcreteParent =
      declaredParent &&
      declaredParent !== defaultBranch &&
      declaredParent !== branch.name &&
      branchByName.has(declaredParent);
    if (!hasConcreteParent) return declaredParent ?? defaultBranch;

    const forkSha = branch.presidesFromSha ?? branch.divergedFromSha ?? branch.createdFromSha;
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
    const forkSha = branch.presidesFromSha ?? branch.divergedFromSha ?? branch.createdFromSha ?? childBaseCommit?.parentSha ?? null;
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

  const structuralBlueBoundaryShas = new Set<string>();
  for (const branch of branches) {
    const blueSha = blueStartShaForBranch(branch);
    if (blueSha) structuralBlueBoundaryShas.add(blueSha);
    const forkSha = branch.presidesFromSha ?? branch.divergedFromSha ?? branch.createdFromSha ?? null;
    if (forkSha) structuralBlueBoundaryShas.add(forkSha);
  }

  const visibleCommits: VisualCommit[] = [];
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
    if (branchCommitShaUnion.has(commit.id)) continue;
    visibleCommits.push({ ...commit, visualId: `${defaultBranch}:${commit.id}` });
  }
  for (const [branchName, commits] of branchCommitsByLane.entries()) {
    for (const commit of commits) {
      visibleCommits.push({ ...commit, visualId: `${branchName}:${commit.id}` });
    }
  }

  const allCommits = [...visibleCommits].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime() || a.id.localeCompare(b.id));
  const mergeParentShasByMergeSha = new Map<string, Set<string>>();
  for (const mergeNode of mergeNodes) {
    const mergeSha = mergeNode.fullSha;
    if (!mergeSha) continue;
    const mergedParentShas = (mergeNode.parentShas ?? []).filter((parentSha): parentSha is string => !!parentSha && parentSha !== mergeSha);
    if (mergedParentShas.length === 0) continue;
    const existing = mergeParentShasByMergeSha.get(mergeSha) ?? new Set<string>();
    for (const parentSha of mergedParentShas) existing.add(parentSha);
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
  const allRowByVisualId = allocateRowsByColumnAndTime(allCommits, laneByName, extraParentShasByCommitId);
  const commitsByBranch = new Map<string, VisualCommit[]>();
  for (const commit of allCommits) {
    const list = commitsByBranch.get(commit.branchName) ?? [];
    list.push(commit);
    commitsByBranch.set(commit.branchName, list);
  }
  /** One pass over `branches` — avoids O(|branches| × |commitsByBranch|) filters inside clustering. */
  const childBranchesByParentName = new Map<string, Branch[]>();
  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const parentName = resolveBranchStartParentName(branch);
    const bucket = childBranchesByParentName.get(parentName) ?? [];
    bucket.push(branch);
    childBranchesByParentName.set(parentName, bucket);
  }
  const clustersByBranch = new Map<string, GridCluster[]>();
  const clusterKeyByCommitId = new Map<string, string>();
  const clusterKeyBySha = new Map<string, string[]>();
  const leadByClusterKey = new Map<string, string>();
  const clusterCounts = new Map<string, number>();
  const checkedOutHeadSha = checkedOutRef?.headSha ?? null;
  const checkedOutBranchName = checkedOutRef?.branchName ?? null;
  const matchesCheckedOutCommit = (branchName: string, commitSha: string): boolean => {
    if (!checkedOutHeadSha) return false;
    if (checkedOutBranchName && checkedOutBranchName !== branchName) return false;
    return commitSha === checkedOutHeadSha || commitSha.startsWith(checkedOutHeadSha) || checkedOutHeadSha.startsWith(commitSha);
  };
  const buildClustersForBranch = (branchName: string, commits: VisualCommit[]): GridCluster[] => {
    if (commits.length === 0) return [];
    const ordered = [...commits].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime() || a.id.localeCompare(b.id));
    const forkIdx = new Set<number>();
    const branchChildBranches = childBranchesByParentName.get(branchName) ?? [];
    if (branchChildBranches.length > 0) {
      const branchTimes = ordered.map((commit) => new Date(commit.date).getTime());
      branchChildBranches.forEach((child) => {
        const childForkSha = child.presidesFromSha ?? child.divergedFromSha ?? child.createdFromSha ?? null;
        if (childForkSha) {
          const bySha = ordered.findIndex((commit) =>
            commit.id === childForkSha ||
            commit.id.startsWith(childForkSha) ||
            childForkSha.startsWith(commit.id)
          );
          if (bySha >= 0) {
            forkIdx.add(bySha);
            return;
          }
        }
        const childForkTime = new Date(child.divergedFromDate ?? child.createdDate ?? child.lastCommitDate).getTime();
        if (!Number.isFinite(childForkTime) || branchTimes.length === 0) return;
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
        const idx = bestPastIndex >= 0 ? bestPastIndex : bestFutureIndex;
        if (idx >= 0) forkIdx.add(idx);
      });
    }
    ordered.forEach((commit, index) => {
      if (structuralBlueBoundaryShas.has(commit.id)) {
        if (index < ordered.length - 1) forkIdx.add(index);
      }
      if (commit.kind === 'uncommitted' || commit.kind === 'stash' || commit.id === 'WORKING_TREE' || commit.id.startsWith('STASH:')) {
        // `clusterByForkPoints` flushes after pushing the current entry, so add a fork
        // on both sides to keep uncommitted/stash commits out of neighboring clumps.
        if (index > 0) forkIdx.add(index - 1);
        forkIdx.add(index);
      }
      if (matchesCheckedOutCommit(branchName, commit.id)) {
        // Keep the checked-out commit independent and prevent it from merging into neighboring clumps.
        if (index > 0) forkIdx.add(index - 1);
        forkIdx.add(index);
      }
    });
    const clusterEntries = clusterByForkPoints(
      ordered.map((commit) => ({ item: commit })),
      forkIdx,
    );
    const clusters: GridCluster[] = [];
    clusterEntries.forEach((cluster, clusterIndex) => {
      const rowAdjacentChunks = splitClusterEntriesByAdjacentRows(cluster.entries, allRowByVisualId);
      rowAdjacentChunks.forEach((rowAdjacentChunk, adjacentChunkIndex) => {
        const chunk = rowAdjacentChunk.map((entry) => entry.item);
        if (chunk.length === 0) return;
        const key = `grid-clump-${branchName}-${chunk[0].id}-${chunk[chunk.length - 1].id}-${clusterIndex}-${adjacentChunkIndex}`;
        const leadId = chunk[chunk.length - 1].visualId;
        const clusterVm = { branchName, key, commitIds: chunk.map((commit) => commit.visualId), leadId, count: chunk.length };
        clusters.push(clusterVm);
        leadByClusterKey.set(key, leadId);
        clusterCounts.set(key, chunk.length);
        for (const id of clusterVm.commitIds) {
          clusterKeyByCommitId.set(id, key);
          const sha = id.split(':').slice(1).join(':');
          const keys = clusterKeyBySha.get(sha) ?? [];
          if (!keys.includes(key)) keys.push(key);
          clusterKeyBySha.set(sha, keys);
        }
      });
    });
    return clusters;
  };
  for (const [branchName, commits] of commitsByBranch.entries()) {
    clustersByBranch.set(branchName, buildClustersForBranch(branchName, commits));
  }

  const debugRows = isDebugOpen
    ? branches.flatMap((branch) => {
        const previews = branchCommitPreviews[branch.name] ?? [];
        const concretePreviews = [...(branchPreviewSets.get(branch.name) ?? [])].reverse();
        const renderedPreviewIds = new Set((branchCommitsByLane.get(branch.name) ?? []).map((commit) => commit.id));
        return [
          `Branch ${branch.name}`,
          `  ahead=${branchUniqueAheadCounts[branch.name] ?? 0} previews=${concretePreviews.length} rendered=${renderedPreviewIds.size}`,
          ...concretePreviews.map((commit) => {
            const status = renderedPreviewIds.has(commit.fullSha) ? 'visible' : 'hidden';
            const reason = renderedPreviewIds.has(commit.fullSha) ? 'kept by render set' : 'dropped by render set';
            return `  ${status} ${commit.fullSha.slice(0, 7)} ${commit.message} [${reason}]`;
          }),
          previews.length === 0 ? '  no preview data' : null,
        ].filter((line): line is string => line != null);
      })
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
  const nodes: Node[] = allCommits.map((commit) => {
    const lane = laneByName.get(commit.branchName);
    const row = rowByVisualId.get(commit.visualId) ?? 1;
    return { commit, row, column: lane?.column ?? 0, x: LEFT_PADDING + (lane?.column ?? 0) * COLUMN_WIDTH, y: TOP_PADDING + (row - 1) * (ROW_HEIGHT + ROW_GAP) };
  });
  const normalizedSearchQuery = gridSearchQuery.trim().toLowerCase();
  const matchingNodes = normalizedSearchQuery
    ? nodes.filter((node) => {
        const sha = node.commit.id.toLowerCase();
        const shortSha = node.commit.id.slice(0, 7).toLowerCase();
        const message = node.commit.message.toLowerCase();
        const branchName = node.commit.branchName.toLowerCase();
        return sha.includes(normalizedSearchQuery) || shortSha.includes(normalizedSearchQuery) || message.includes(normalizedSearchQuery) || branchName.includes(normalizedSearchQuery);
      })
    : nodes;
  const focusedNode = gridFocusSha ? nodes.find((node) => node.commit.id === gridFocusSha) ?? null : null;
  const matchingNodeIds = new Set(matchingNodes.map((node) => node.commit.id));


  const checkedOutSha = checkedOutRef?.headSha ?? null;
  const checkedOutClusterKey = (() => {
    const checkedOutBranchName = checkedOutRef?.branchName ?? null;
    if (!checkedOutSha || !checkedOutBranchName) return null;
    return clusterKeyByCommitId.get(`${checkedOutBranchName}:${checkedOutSha}`) ?? null;
  })();
  const defaultCollapsedClumps = new Set<string>();
  for (const clusters of clustersByBranch.values()) {
    for (const cluster of clusters) {
      if (cluster.count > 1 && cluster.key !== checkedOutClusterKey) defaultCollapsedClumps.add(cluster.key);
    }
  }


  const visibleCommitsList = [...allCommits].reverse().filter((commit) => {
    const clusterKey = clusterKeyByCommitId.get(commit.visualId);
    if (!clusterKey) return true;
    const leadId = leadByClusterKey.get(clusterKey);
    const count = clusterCounts.get(clusterKey) ?? 1;
    const isOpen =
      manuallyOpenedClumps.has(clusterKey) ||
      (!defaultCollapsedClumps.has(clusterKey) && !manuallyClosedClumps.has(clusterKey));
    return count <= 1 || isOpen || leadId === commit.visualId;
  });
  const visibleRows = allocateRowsByColumnAndTime(visibleCommitsList, laneByName, extraParentShasByCommitId);
  const zoomAwareRowGap = ROW_GAP / GRID_LAYOUT_RENDER_ZOOM;
  const zoomAwareLabelBand = 20 / GRID_LAYOUT_RENDER_ZOOM;
  const zoomAwareRowPitch = ROW_HEIGHT + zoomAwareRowGap + zoomAwareLabelBand;
  const renderNodes: Node[] = visibleCommitsList.map((commit) => {
    const lane = laneByName.get(commit.branchName);
    const row = visibleRows.get(commit.visualId) ?? 1;
    return {
      commit,
      row,
      column: lane?.column ?? 0,
      x: LEFT_PADDING + (lane?.column ?? 0) * COLUMN_WIDTH,
      y: TOP_PADDING + (row - 1) * zoomAwareRowPitch,
    };
  });
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
    if (!current || node.y < current.y) visibleNodeByClusterKey.set(clusterKey, node);
  }
  const pointFormatter = (x: number, y: number) => `${x.toFixed(1)} ${y.toFixed(1)}`;
  const contentWidth = LEFT_PADDING * 2 + (Math.max(0, ...lanes.map((lane) => lane.column)) + 1) * COLUMN_WIDTH;
  const maxVisibleRow = Math.max(0, ...renderNodes.map((node) => node.row));
  const contentHeight = TOP_PADDING * 2 + Math.max(0, maxVisibleRow - 1) * zoomAwareRowPitch + CARD_HEIGHT + CARD_HEADER_HEIGHT + zoomAwareLabelBand;

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
  // Blue highlights are driven by branch-off metadata, not by connector usage.
  const nodeForConnectorTipSha = (sha: string | null | undefined, preferredBranchName?: string): Node | null => {
    if (!sha) return null;
    const visibleNode = nodeForCommitSha(visibleNodesBySha, sha, preferredBranchName);
    if (visibleNode) return visibleNode;
    const clusterKey = clusterKeyByCommitId.get(`${preferredBranchName ?? defaultBranch}:${sha}`) ?? clusterKeyByCommitId.get(sha);
    if (!clusterKey) return null;
    return visibleNodeByClusterKey.get(clusterKey) ?? null;
  };
  const connectorKeySet = new Set<string>();
  for (const branch of branches) {
    const branchStartSha = blueStartShaForBranch(branch);
    if (branchStartSha) branchStartShas.add(branchStartSha);
    const forkSha = branch.presidesFromSha ?? branch.divergedFromSha ?? branch.createdFromSha ?? null;
    if (forkSha) branchOffNodeShas.add(forkSha);
  }
  const resolveConnectorNode = (commit: VisualCommit): Node | null => {
    const directNode = nodeForConnectorTipSha(commit.id, commit.branchName);
    if (directNode) return directNode;
    const clusterKey = clusterKeyByCommitId.get(commit.visualId);
    if (!clusterKey) return null;
    const leadId = leadByClusterKey.get(clusterKey);
    if (!leadId) return null;
    return renderNodes.find((candidate) => candidate.commit.id === leadId) ?? null;
  };

  const resolveChildNodeForSha = (sha: string | null | undefined, preferredBranchName?: string): Node | null => {
    if (!sha) return null;
    return nodeForCommitSha(visibleNodesBySha, sha, preferredBranchName);
  };

  const getIncomingAnchor = (node: Node): { x: number; y: number } => ({
    x: node.x + CARD_WIDTH / 2,
    y: node.y + CARD_HEIGHT + GRID_INCOMING_GAP_PX,
  });

  const getOutgoingAnchor = (node: Node, isBranching: boolean): { x: number; y: number } => ({
    x: isBranching ? node.x + CARD_WIDTH : node.x + CARD_WIDTH / 2,
    y: isBranching ? node.y + CARD_HEIGHT / 2 : node.y,
  });

  const resolveParentNode = (parentSha: string, preferredBranchName: string): Node | null => {
    return nodeForCommitSha(visibleNodesBySha, parentSha, preferredBranchName);
  };

  const resolveNodeForSha = (sha: string | null | undefined, preferredBranchName?: string): Node | null => {
    return resolveChildNodeForSha(sha, preferredBranchName);
  };

  const mergeConnectors: Array<{ id: string; path: string; fromX: number; fromY: number; toX: number; toY: number; zIndex: number }> = [];
  for (const mergeNode of mergeNodes) {
    const mergeTargetBranch = mergeNode.targetBranch ?? defaultBranch;
    const mergeTarget =
      nodeForConnectorTipSha(mergeNode.fullSha, mergeTargetBranch) ??
      visibleNodesBySha.get(mergeNode.fullSha)?.[0] ??
      null;
    if (!mergeTarget) {
      pushConnectorDecision({
        id: `merge:${mergeNode.fullSha}:target`,
        kind: 'merge',
        parent: mergeNode.parentShas?.[1] ?? 'unknown',
        child: mergeNode.fullSha,
        rendered: false,
        reason: 'missing merge target node',
      });
      continue;
    }
    const mergedParents = mergeNode.parentShas?.slice(1) ?? [];
    if (mergedParents.length === 0) {
      pushConnectorDecision({
        id: `merge:${mergeNode.fullSha}:parents`,
        kind: 'merge',
        parent: 'unknown',
        child: mergeNode.fullSha,
        rendered: false,
        reason: 'no merged parent shas',
      });
      continue;
    }
    for (const parentSha of mergedParents) {
      const decisionId = `merge:${mergeNode.fullSha}:${parentSha ?? 'unknown'}`;
      if (!parentSha || parentSha === mergeNode.fullSha) {
        pushConnectorDecision({
          id: decisionId,
          kind: 'merge',
          parent: parentSha ?? 'unknown',
          child: mergeNode.fullSha,
          rendered: false,
          reason: !parentSha ? 'missing merged parent sha' : 'merged parent equals merge sha',
        });
        continue;
      }
      const sourceNode = nodeForCommitSha(visibleNodesBySha, parentSha) ?? null;
      if (!sourceNode) {
        pushConnectorDecision({
          id: decisionId,
          kind: 'merge',
          parent: parentSha,
          child: mergeNode.fullSha,
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
      mergeConnectors.push({
        id: decisionId,
        fromX: sourceNode.x + CARD_WIDTH / 2,
        fromY: sourceNode.y,
        toX: mergeTarget.x + CARD_WIDTH - GRID_MERGE_TARGET_GAP_PX,
        toY: mergeTarget.y + CARD_HEIGHT / 2,
        zIndex: branchConnectorZIndex(sourceNode.commit.branchName),
        path: buildMergeOrthogonalPath({
          laneX: sourceNode.x + CARD_WIDTH / 2,
          tipY: sourceNode.y,
          mergeX: mergeTarget.x + CARD_WIDTH - GRID_MERGE_TARGET_GAP_PX,
          mergeY: mergeTarget.y + CARD_HEIGHT / 2,
          cornerR: GRID_CONNECTOR_CORNER_RADIUS_PX,
          pointFormatter,
        }),
      });
      pushConnectorDecision({
        id: decisionId,
        kind: 'merge',
        parent: sourceNode.commit.id,
        child: mergeTarget.commit.id,
        rendered: true,
        reason: `merge connector rendered to ${mergeTargetBranch}`,
      });
    }
  }

  const crossBranchOutgoingShas = new Set<string>();
  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const branchBaseCommit = branchBaseCommitByName.get(branch.name);
    if (!branchBaseCommit) continue;
    const parentName = resolveBranchStartParentName(branch);
    const parentNode = resolveParentNode(branchBaseCommit.parentSha ?? branch.divergedFromSha ?? branch.createdFromSha ?? '', parentName);
    const receivingCommit = branchReceivingCommitByName.get(branch.name) ?? branchBaseCommit;
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
    const isBranching = parentNode.column !== childNode.column;
    if (parentNode.commit.branchName !== childNode.commit.branchName) {
      crossBranchOutgoingShas.add(parentNode.commit.id);
    }
    const sourceAnchor = getOutgoingAnchor(parentNode, isBranching);
    const targetAnchor = getIncomingAnchor(childNode);
    connectors.push({
      id: key,
      fromX: sourceAnchor.x,
      fromY: sourceAnchor.y,
      toX: targetAnchor.x,
      toY: targetAnchor.y,
      zIndex: branchConnectorZIndex(childNode.commit.branchName),
    });
    pushConnectorDecision({
      id: key,
      kind: 'branch',
      parent: parentNode.commit.id,
      child: childNode.commit.id,
      rendered: true,
      reason: isBranching ? 'branch connector rendered' : 'vertical connector rendered',
    });
  }

  for (const node of renderNodes) {
    const parentSha = node.commit.parentSha ?? null;
    if (!parentSha) continue;
    const parentNode = resolveParentNode(parentSha, node.commit.branchName);
    if (!parentNode) {
      const parentClusterKey = clusterKeyByCommitId.get(`${node.commit.branchName}:${parentSha}`) ?? clusterKeyByCommitId.get(parentSha);
      const parentClusterDefaultOpen = !!parentClusterKey && !defaultCollapsedClumps.has(parentClusterKey);
      const parentHiddenByClump = !!parentClusterKey
        && !manuallyOpenedClumps.has(parentClusterKey)
        && (parentClusterDefaultOpen ? manuallyClosedClumps.has(parentClusterKey) : true);
      if (!parentHiddenByClump) {
        addNodeWarning(node.commit.id, 'Missing parent node');
      }
      pushConnectorDecision({
        id: `${node.commit.visualId}->${parentSha}`,
        kind: 'ancestry',
        parent: parentSha,
        child: node.commit.id,
        rendered: false,
        reason: 'missing parent node',
      });
      continue;
    }
    const childNode = node;
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
    const key = `${node.commit.branchName}:${parentNode.commit.visualId ?? parentNode.commit.id}->${childNode.commit.visualId}`;
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
    const isBranching = parentNode.column !== childNode.column;
    const sourceAnchor = getOutgoingAnchor(parentNode, isBranching);
    const targetAnchor = getIncomingAnchor(childNode);
    connectors.push({
      id: key,
      fromX: sourceAnchor.x,
      fromY: sourceAnchor.y,
      toX: targetAnchor.x,
      toY: targetAnchor.y,
      zIndex: branchConnectorZIndex(childNode.commit.branchName),
    });
    pushConnectorDecision({
      id: key,
      kind: 'ancestry',
      parent: parentNode.commit.id,
      child: childNode.commit.id,
      rendered: true,
      reason: isBranching ? 'ancestry connector rendered' : 'vertical ancestry rendered',
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
      const aTime = Number.isFinite(new Date(a?.commit?.date ?? '').getTime()) ? new Date(a.commit.date).getTime() : 0;
      const bTime = Number.isFinite(new Date(b?.commit?.date ?? '').getTime()) ? new Date(b.commit.date).getTime() : 0;
      return aTime - bTime || (a?.commit?.id ?? '').localeCompare(b?.commit?.id ?? '');
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
      const isBranching = parentNode.column !== childNode.column;
      const sourceAnchor = getOutgoingAnchor(parentNode, isBranching);
      const targetAnchor = getIncomingAnchor(childNode);
      connectors.push({
        id: key,
        fromX: sourceAnchor.x,
        fromY: sourceAnchor.y,
        toX: targetAnchor.x,
        toY: targetAnchor.y,
        zIndex: branchConnectorZIndex(childNode.commit.branchName),
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
  };
}
