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
  type ConnectorFace,
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
  mergeConnectors: Array<{ id: string; fromX: number; fromY: number; toX: number; toY: number; zIndex: number; fromFace?: ConnectorFace; toFace?: ConnectorFace }>;
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
  lanes: Lane[];
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
  /** `vertical`: newest above; `horizontal`: newest to the right (default). */
  orientation?: 'vertical' | 'horizontal';
  nodePositionOverrides?: NodePositionOverrides;
};


const GRID_INCOMING_GAP_PX = 0;
const GRID_MERGE_TARGET_GAP_PX = 0;
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

function allocateRowsByColumnAndTime(
  commits: VisualCommit[],
  columnByCommitVisualId: Map<string, number>,
  extraParentShasByCommitId: Map<string, Set<string>> = new Map(),
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
  const stashRowByParentSha = new Map<string, number>();
  const sharedRowBlockedByBranchLine = new Set<number>();
  const branchCommitShasByName = new Map<string, Set<string>>();
  const commitColumnsBySha = new Map<string, Set<number>>();
  const strictParentShasByCommitId = new Map<string, Set<string>>();
  const lineageParentShasByCommitId = new Map<string, Set<string>>();
  for (const commit of commits) {
    const set = branchCommitShasByName.get(commit.branchName) ?? new Set<string>();
    set.add(commit.id);
    branchCommitShasByName.set(commit.branchName, set);
    const column = columnByCommitVisualId.get(commit.visualId) ?? 0;
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
    const commitColumn = columnByCommitVisualId.get(commit.visualId) ?? 0;
    const branchCommitShas = branchCommitShasByName.get(commit.branchName) ?? new Set<string>();
    const parentInSameBranch = !!commit.parentSha && branchCommitShas.has(commit.parentSha);
    const branchEntryParentSha = !parentInSameBranch && commit.parentSha ? commit.parentSha : null;
    const parentRows = Array.from(parentShas).flatMap((parentSha) =>
      resolveKnownShas(parentSha).flatMap((knownParentSha) => rowBySha.get(knownParentSha) ?? []),
    );
    const forcedImmediateChildRow = (() => {
      if (parentRows.length === 0) return null;
      if (commit.kind === 'stash' && commit.parentSha) {
        const siblingStashRow = stashRowByParentSha.get(commit.parentSha);
        if (siblingStashRow != null) return siblingStashRow;
        const target = Math.max(...parentRows) + 1;
        stashRowByParentSha.set(commit.parentSha, target);
        return target;
      }
      if (commit.kind === 'branch-created') return Math.max(...parentRows) + 1;
      return null;
    })();
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
    if (forcedImmediateChildRow != null) assignedRow = forcedImmediateChildRow;
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

  for (const commit of orderedCommits) {
    const parentShas = strictParentShasByCommitId.get(commit.visualId) ?? new Set<string>();
    assignCommit(commit, parentShas);
  }
  // Final hard invariant: direct children must be strictly after direct parents.
  const maxPasses = Math.max(1, orderedCommits.length * 2);
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
  // Final stash sibling invariant: same-parent stashes stay on the same row (parent + 1 intent).
  const stashCommitsByParentSha = new Map<string, VisualCommit[]>();
  for (const commit of orderedCommits) {
    if (commit.kind !== 'stash' || !commit.parentSha) continue;
    const list = stashCommitsByParentSha.get(commit.parentSha) ?? [];
    list.push(commit);
    stashCommitsByParentSha.set(commit.parentSha, list);
  }
  for (const [parentSha, stashCommits] of stashCommitsByParentSha.entries()) {
    if (stashCommits.length < 2) continue;
    const parentRows = resolveKnownShas(parentSha).flatMap((knownParentSha) => rowBySha.get(knownParentSha) ?? []);
    const targetRowFromParent = parentRows.length > 0 ? Math.max(...parentRows) + 1 : null;
    const existingRows = stashCommits.map((commit) => rowByVisualId.get(commit.visualId) ?? 1);
    const targetRow = targetRowFromParent ?? Math.min(...existingRows);
    for (const stashCommit of stashCommits) {
      rowByVisualId.set(stashCommit.visualId, targetRow);
      rowBySha.set(stashCommit.id, [targetRow]);
    }
  }
  // Row index increases toward descendants. Pixel mapping in `computeBranchGridLayout`:
  // vertical inverts this row index (newer above); horizontal keeps it direct (newer right).
  return rowByVisualId;
}

export function computeBranchGridLayout(input: BranchGridLayoutInput): BranchGridLayoutModel {
  const {
    lanes: _branchLanes,
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
    const commits = sortByDateThenSha(branchPreviews.map((commit) => toCommit(branch.name, commit)));
    if (commits.length > 0) {
      branchCommitsByLane.set(branch.name, commits);
      continue;
    }
    const forkSha = branch.presidesFromSha ?? branch.divergedFromSha ?? branch.createdFromSha ?? null;
    if (!forkSha) continue;
    const forkDateFromDirect = directCommits.find((commit) => shasMatch(commit.fullSha, forkSha) || shasMatch(commit.sha, forkSha))?.date;
    const forkDateFromPreview = forkDateFromDirect
      ? null
      : Object.values(branchCommitPreviews).flat().find((commit) => shasMatch(commit.fullSha, forkSha) || shasMatch(commit.sha, forkSha))?.date;
    const syntheticBranchNode: CommitItem = {
      id: `BRANCH_HEAD:${branch.name}:${forkSha}`,
      branchName: branch.name,
      message: `Branch ${branch.name}`,
      author: branch.lastCommitAuthor,
      date: forkDateFromDirect ?? forkDateFromPreview ?? branch.createdDate ?? branch.divergedFromDate ?? branch.lastCommitDate,
      parentSha: forkSha,
      clusterKey: null,
      childShas: [],
      kind: 'branch-created',
    };
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
    const metadataForkSha = branch.presidesFromSha ?? branch.divergedFromSha ?? branch.createdFromSha ?? null;
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

  // Canonical source of truth: backend-assigned direct commits (already de-duplicated by SHA).
  const canonicalCommitBySha = new Map<string, VisualCommit>();
  for (const commit of [...directCommits, ...unpushedDirectCommits]) {
    const visualCommit: VisualCommit = {
      ...toCommit(commit.branch || '', commit),
      visualId: `${commit.branch || ''}:${commit.fullSha}`,
    };
    canonicalCommitBySha.set(commit.fullSha, visualCommit);
  }

  const visibleCommitBySha = new Map<string, VisualCommit>(canonicalCommitBySha);
  const insertVisibleCommitIfMissing = (commit: VisualCommit) => {
    if (visibleCommitBySha.has(commit.id)) return;
    visibleCommitBySha.set(commit.id, commit);
  };
  const unpushedCommitShasByBranchSet = new Map(
    Object.entries(unpushedCommitShasByBranch).map(([branchName, shas]) => [branchName, new Set(shas)] as const),
  );

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
    insertVisibleCommitIfMissing({ ...commit, visualId: `${commit.branchName}:${commit.id}` });
  }
  for (const [branchName, commits] of branchCommitsByLane.entries()) {
    for (const commit of commits) {
      insertVisibleCommitIfMissing({ ...commit, visualId: `${branchName}:${commit.id}` });
    }
  }
  const visibleCommits: VisualCommit[] = Array.from(visibleCommitBySha.values()).map((commit) => ({
    ...commit,
    visualId: `${commit.branchName}:${commit.id}`,
  }));

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
  const childShasByParentSha = new Map<string, Set<string>>();
  const commitById = new Map<string, VisualCommit>();
  for (const commit of allCommits) {
    commitById.set(commit.id, commit);
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
  for (const commit of allCommits) {
    if (commit.parentSha) {
      const parentCommit = findCommitBySha(commit.parentSha);
      const parentIsBoundary = !!parentCommit && boundaryShaByCommitId.has(parentCommit.visualId);
      if (parentCommit && (commit.kind === 'stash' || commit.kind === 'branch-created' || parentIsBoundary)) {
        boundaryShaByCommitId.add(parentCommit.visualId);
      }
    }
    const childShas = childShasByParentSha.get(commit.id) ?? new Set<string>();
    if (
      childShas.size > 1 ||
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
  const effectiveCommitTime = (commit: VisualCommit): number => {
    if (commit.kind === 'stash' && commit.parentSha) {
      const parent = findCommitBySha(commit.parentSha);
      if (parent) {
        const parentTime = safeTimeMs(parent.date);
        if (Number.isFinite(parentTime)) return parentTime + 1;
      }
    }
    const time = safeTimeMs(commit.date);
    return Number.isFinite(time) ? time : Number.POSITIVE_INFINITY;
  };
  const provisionalColumnByCommitVisualId = new Map<string, number>(
    allCommitsWithClusters.map((commit) => [commit.visualId, 0] as const),
  );
  const provisionalRowByVisualId = allocateRowsByColumnAndTime(
    allCommitsWithClusters,
    provisionalColumnByCommitVisualId,
    extraParentShasByCommitId,
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
      if (commit.kind === 'uncommitted') return 'uncommitted';
      if (commit.kind === 'stash') return 'stash';
      if (commit.kind === 'branch-created') return 'branch-created';
      const branchUnpushedShas = unpushedCommitShasByBranchSet.get(commit.branchName);
      return branchUnpushedShas?.has(commit.id) ? 'unpushed' : 'pushed';
    };
    let previousBoundaryKind: string | null = null;
    for (const commit of ordered) {
      const isSyntheticBoundaryChild = commit.kind === 'branch-created';
      const isBoundary = boundaryShaByCommitId.has(commit.visualId);
      if (isSyntheticBoundaryChild) {
        continue;
      }
      const boundaryKind = clusterBoundaryKind(commit);
      if (!currentKey || (previousBoundaryKind != null && previousBoundaryKind !== boundaryKind)) {
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
  const clusterColumnByKey = new Map<string, number>();
  Array.from(clusterByKey.keys())
    .sort((left, right) => {
      const rankDelta = clusterSortRank(left) - clusterSortRank(right);
      if (rankDelta !== 0) return rankDelta;
      const rowDelta = clusterSortRowTieBreak(left) - clusterSortRowTieBreak(right);
      if (rowDelta !== 0) return rowDelta;
      return left.localeCompare(right);
    })
    .forEach((clusterKey, column) => clusterColumnByKey.set(clusterKey, column));
  const lanes: Lane[] = Array.from(clusterColumnByKey.entries())
    .map(([key, column]) => ({
      name: key,
      column,
      parentName: parentClusterByClusterKey.get(key) ?? null,
    }))
    .sort((a, b) => a.column - b.column || a.name.localeCompare(b.name));
  const laneByName = new Map(lanes.map((lane) => [lane.name, lane] as const));
  const columnByCommitVisualId = new Map<string, number>();
  const firstSyntheticColumn = Math.max(0, ...Array.from(clusterColumnByKey.values())) + 1;
  for (const commit of allCommitsWithClusters) {
    const clusterKey = clusterKeyByCommitId.get(commit.visualId);
    columnByCommitVisualId.set(
      commit.visualId,
      clusterKey ? (clusterColumnByKey.get(clusterKey) ?? firstSyntheticColumn) : firstSyntheticColumn,
    );
  }
  // Invariant: synthetic branch children must be after their parent lane, never before.
  const syntheticKinds = new Set<NonNullable<VisualCommit['kind']>>(['branch-created']);
  const syntheticLaneGapMs = 60 * 60 * 1000;
  const syntheticWindowFor = (commit: VisualCommit): { start: number; end: number } => {
    const center = safeTimeMs(commit.date);
    if (!Number.isFinite(center)) return { start: Number.NEGATIVE_INFINITY, end: Number.POSITIVE_INFINITY };
    return { start: center - syntheticLaneGapMs, end: center + syntheticLaneGapMs };
  };
  const overlapsWindow = (left: { start: number; end: number }, right: { start: number; end: number }): boolean =>
    !(left.end < right.start || right.end < left.start);
  const baseOccupiedByColumn = new Map<number, Array<{ start: number; end: number }>>();
  for (const other of allCommitsWithClusters) {
    const column = columnByCommitVisualId.get(other.visualId);
    if (column == null) continue;
    const list = baseOccupiedByColumn.get(column) ?? [];
    list.push(syntheticWindowFor(other));
    baseOccupiedByColumn.set(column, list);
  }
  const findFreeSyntheticColumn = (
    commit: VisualCommit,
    minColumn: number,
  ): number => {
    const targetWindow = syntheticWindowFor(commit);
    const maxOccupiedColumn = Math.max(minColumn, ...Array.from(baseOccupiedByColumn.keys()));
    const searchEnd = maxOccupiedColumn + 1;
    let contiguousCollisionTop = minColumn - 1;
    let seenGap = false;
    let firstFreeAfterContiguous: number | null = null;
    let candidate = minColumn;
    while (candidate <= searchEnd) {
      const collisions = (baseOccupiedByColumn.get(candidate) ?? []).some((window) => overlapsWindow(window, targetWindow));
      if (collisions && !seenGap) {
        contiguousCollisionTop = candidate;
      } else if (!collisions) {
        seenGap = true;
        if (firstFreeAfterContiguous == null && candidate > contiguousCollisionTop) {
          firstFreeAfterContiguous = candidate;
        }
      }
      candidate += 1;
    }
    return firstFreeAfterContiguous ?? (contiguousCollisionTop + 1);
  };
  for (const commit of allCommitsWithClusters) {
    if (!commit.kind || !syntheticKinds.has(commit.kind)) continue;
    const parentSha = commit.parentSha ?? null;
    if (!parentSha) continue;
    const parentColumns = allCommitsWithClusters
      .filter((candidate) => shasMatch(candidate.id, parentSha))
      .map((candidate) => columnByCommitVisualId.get(candidate.visualId))
      .filter((value): value is number => value != null);
    if (parentColumns.length === 0) continue;
    let minimumColumn = Math.max(...parentColumns) + 1;
    const resolvedColumn = findFreeSyntheticColumn(commit, minimumColumn);
    columnByCommitVisualId.set(commit.visualId, resolvedColumn);
  }
  const allRowByVisualId = allocateRowsByColumnAndTime(
    allCommitsWithClusters,
    columnByCommitVisualId,
    extraParentShasByCommitId,
  );
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
  const applyNodeOverrides = (node: Node): Node => {
    const override = nodePositionOverrides[node.commit.visualId] ?? nodePositionOverrides[node.commit.id];
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
    return clusterKeyByCommitId.get(`${checkedOutBranchName}:${checkedOutSha}`) ?? null;
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
  const visibleRows = allocateRowsByColumnAndTime(visibleCommitsList, columnByCommitVisualId, extraParentShasByCommitId);
  const zoomAwareRowGap = ROW_GAP / GRID_LAYOUT_RENDER_ZOOM;
  const zoomAwareLabelBand = 20 / GRID_LAYOUT_RENDER_ZOOM;
  const zoomAwareTimelinePitch = isHorizontal
    ? CARD_WIDTH + zoomAwareRowGap + zoomAwareLabelBand
    : ROW_HEIGHT + zoomAwareRowGap + zoomAwareLabelBand;
  const zoomAwareLanePitch = isHorizontal ? ROW_HEIGHT + zoomAwareRowGap + zoomAwareLabelBand : COLUMN_WIDTH;
  const maxAllRowForHorizontalAnchor = Math.max(0, ...allCommits.map((commit) => allRowByVisualId.get(commit.visualId) ?? 1));
  const maxVisibleRowForVertical = Math.max(0, ...visibleCommitsList.map((commit) => visibleRows.get(commit.visualId) ?? 1));
  const horizontalRightAnchorRowOffset = Math.max(0, maxAllRowForHorizontalAnchor - maxVisibleRowForVertical);
  const renderNodesRaw: Node[] = visibleCommitsList.map((commit) => {
    const row = visibleRows.get(commit.visualId) ?? 1;
    const column = columnByCommitVisualId.get(commit.visualId) ?? 0;
    if (isHorizontal) {
      return {
        commit,
        row,
        column,
        x: LEFT_PADDING + (horizontalRightAnchorRowOffset + row - 1) * zoomAwareTimelinePitch,
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
  const occupiedSlots = new Set<string>();
  for (const node of renderNodes) {
    let candidateRow = node.row;
    let slotKey = `${node.column}:${candidateRow}`;
    while (occupiedSlots.has(slotKey)) {
      candidateRow += 1;
      slotKey = `${node.column}:${candidateRow}`;
    }
    node.row = candidateRow;
    occupiedSlots.add(slotKey);
  }
  const maxResolvedRow = Math.max(0, ...renderNodes.map((node) => node.row));
  for (const node of renderNodes) {
    if (isHorizontal) {
      node.x = LEFT_PADDING + (horizontalRightAnchorRowOffset + node.row - 1) * zoomAwareTimelinePitch;
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
    while (placedNodes.some((placed) => boxesOverlap(node, placed))) {
      if (isHorizontal) {
        node.row += 1;
        node.x = LEFT_PADDING + (horizontalRightAnchorRowOffset + node.row - 1) * zoomAwareTimelinePitch;
      } else {
        node.row += 1;
        node.y = TOP_PADDING + (maxResolvedRow - node.row) * zoomAwareTimelinePitch;
      }
    }
    placedNodes.push(node);
  }
  const movedLeadByClusterKey = new Map<string, { node: Node; x: number; y: number }>();
  for (const node of renderNodes) {
    const clusterKey = clusterKeyByCommitId.get(node.commit.visualId);
    if (!clusterKey) continue;
    if (leadByClusterKey.get(clusterKey) !== node.commit.visualId) continue;
    const override = nodePositionOverrides[node.commit.visualId] ?? nodePositionOverrides[node.commit.id];
    if (!override) continue;
    movedLeadByClusterKey.set(clusterKey, { node, x: override.x, y: override.y });
  }
  for (const node of renderNodes) {
    const override = nodePositionOverrides[node.commit.visualId] ?? nodePositionOverrides[node.commit.id];
    if (override) {
      node.x = override.x;
      node.y = override.y;
      continue;
    }
    const clusterKey = clusterKeyByCommitId.get(node.commit.visualId);
    const movedLead = clusterKey ? movedLeadByClusterKey.get(clusterKey) : null;
    if (!movedLead) continue;
    if (isHorizontal) {
      node.x = movedLead.x - Math.max(0, movedLead.node.row - node.row) * zoomAwareTimelinePitch;
      node.y = movedLead.y + (node.column - movedLead.node.column) * zoomAwareLanePitch;
      continue;
    }
    node.x = movedLead.x + (node.column - movedLead.node.column) * COLUMN_WIDTH;
    node.y = movedLead.y + Math.max(0, movedLead.node.row - node.row) * zoomAwareTimelinePitch;
  }
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
  const maxLaneColumn = Math.max(0, ...Array.from(columnByCommitVisualId.values()));
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
    return renderNodes.find((candidate) => candidate.commit.id === leadId) ?? null;
  };

  const resolveChildNodeForSha = (sha: string | null | undefined, preferredBranchName?: string): Node | null => {
    if (!sha) return null;
    return nodeForCommitSha(visibleNodesBySha, sha, preferredBranchName);
  };

  const getIncomingAnchor = (node: Node, _parentNode: Node | null): { x: number; y: number; face: ConnectorFace } => {
    if (!isHorizontal) {
      return { x: node.x + CARD_WIDTH / 2, y: node.y + CARD_HEIGHT + GRID_INCOMING_GAP_PX, face: 'bottom' };
    }
    // Left edge at mid-height: same-lane ancestry and cross-lane branch/merge feeders both approach along X
    // (avoids top-ingress + bottom-egress arcs that bulge the wrong way vs a vertical drop then horizontal run).
    return { x: node.x - GRID_INCOMING_GAP_PX, y: node.y + CARD_HEIGHT / 2, face: 'left' };
  };

  const getBranchIncomingAnchor = (node: Node): { x: number; y: number; face: ConnectorFace } => {
    if (!isHorizontal) {
      return { x: node.x + CARD_WIDTH / 2, y: node.y + CARD_HEIGHT + GRID_INCOMING_GAP_PX, face: 'bottom' };
    }
    return { x: node.x - GRID_INCOMING_GAP_PX, y: node.y + CARD_HEIGHT / 2, face: 'left' };
  };

  /** Lanes can share a column when time ranges do not overlap — column alone misses cross-branch links in horizontal mode. */
  const isConnectorBranching = (parentNode: Node, childNode: Node): boolean => {
    if (parentNode.column !== childNode.column) return true;
    if (!isHorizontal) return false;
    return parentNode.commit.branchName !== childNode.commit.branchName;
  };

  const getOutgoingAnchor = (node: Node, isBranching: boolean, childNode: Node | null): { x: number; y: number; face: ConnectorFace } => {
    if (!isHorizontal) {
      return {
        x: isBranching ? node.x + CARD_WIDTH : node.x + CARD_WIDTH / 2,
        y: isBranching ? node.y + CARD_HEIGHT / 2 : node.y,
        face: isBranching ? 'right' : 'top',
      };
    }
    if (!isBranching) {
      return { x: node.x + CARD_WIDTH + GRID_INCOMING_GAP_PX, y: node.y + CARD_HEIGHT / 2, face: 'right' };
    }
    // Reused lane column (non-overlapping time ranges): same `column` as parent but different branch — fork in time, not sideways on the row.
    if (childNode && childNode.column === node.column && childNode.commit.branchName !== node.commit.branchName) {
      if (childNode.x > node.x) {
        return { x: node.x + CARD_WIDTH / 2, y: node.y + CARD_HEIGHT + GRID_INCOMING_GAP_PX, face: 'bottom' };
      }
      if (childNode.x < node.x) {
        return { x: node.x + CARD_WIDTH / 2, y: node.y - GRID_INCOMING_GAP_PX, face: 'top' };
      }
    }
    if (!childNode || childNode.column === node.column) {
      return { x: node.x + CARD_WIDTH + GRID_INCOMING_GAP_PX, y: node.y + CARD_HEIGHT / 2, face: 'right' };
    }
    if (childNode.column > node.column) {
      return { x: node.x + CARD_WIDTH / 2, y: node.y + CARD_HEIGHT + GRID_INCOMING_GAP_PX, face: 'bottom' };
    }
    return { x: node.x + CARD_WIDTH / 2, y: node.y - GRID_INCOMING_GAP_PX, face: 'top' };
  };

  const getBranchOutgoingAnchor = (node: Node): { x: number; y: number; face: ConnectorFace } => {
    if (!isHorizontal) {
      return { x: node.x + CARD_WIDTH, y: node.y + CARD_HEIGHT / 2, face: 'right' };
    }
    return { x: node.x + CARD_WIDTH / 2, y: node.y + CARD_HEIGHT + GRID_INCOMING_GAP_PX, face: 'bottom' };
  };

  const resolveParentNode = (parentSha: string, preferredBranchName: string): Node | null => {
    return nodeForCommitSha(visibleNodesBySha, parentSha, preferredBranchName);
  };

  const resolveNodeForSha = (sha: string | null | undefined, preferredBranchName?: string): Node | null => {
    return resolveChildNodeForSha(sha, preferredBranchName);
  };

  const mergeConnectors: Array<{ id: string; fromX: number; fromY: number; toX: number; toY: number; zIndex: number; fromFace?: ConnectorFace; toFace?: ConnectorFace }> = [];
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
      let fromX: number;
      let fromY: number;
      let fromFace: ConnectorFace;
      const toX = isHorizontal ? mergeTarget.x + CARD_WIDTH / 2 : mergeTarget.x + CARD_WIDTH - GRID_MERGE_TARGET_GAP_PX;
      const toY = isHorizontal ? mergeTarget.y + CARD_HEIGHT + GRID_MERGE_TARGET_GAP_PX : mergeTarget.y + CARD_HEIGHT / 2;
      const toFace: ConnectorFace = isHorizontal ? 'bottom' : 'right';
      if (!isHorizontal) {
        fromX = sourceNode.x + CARD_WIDTH / 2;
        fromY = sourceNode.y;
        fromFace = 'top';
      } else {
        fromX = sourceNode.x + CARD_WIDTH + GRID_MERGE_TARGET_GAP_PX;
        fromY = sourceNode.y + CARD_HEIGHT / 2;
        fromFace = 'right';
      }
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
    const sourceAnchor = getBranchOutgoingAnchor(parentNode);
    const targetAnchor = getBranchIncomingAnchor(childNode);
    connectors.push({
      id: key,
      fromX: sourceAnchor.x,
      fromY: sourceAnchor.y,
      toX: targetAnchor.x,
      toY: targetAnchor.y,
      fromFace: sourceAnchor.face,
      toFace: targetAnchor.face,
      zIndex: branchConnectorZIndex(childNode.commit.branchName),
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
    const sourceAnchor = getOutgoingAnchor(parentNode, isBranching, childNode);
    const targetAnchor = getIncomingAnchor(childNode, parentNode);
    connectors.push({
      id: key,
      fromX: sourceAnchor.x,
      fromY: sourceAnchor.y,
      toX: targetAnchor.x,
      toY: targetAnchor.y,
      fromFace: sourceAnchor.face,
      toFace: targetAnchor.face,
      zIndex: branchConnectorZIndex(childNode.commit.branchName),
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
      const isBranching = isConnectorBranching(parentNode, childNode);
      const sourceAnchor = getOutgoingAnchor(parentNode, isBranching, childNode);
      const targetAnchor = getIncomingAnchor(childNode, parentNode);
      connectors.push({
        id: key,
        fromX: sourceAnchor.x,
        fromY: sourceAnchor.y,
        toX: targetAnchor.x,
        toY: targetAnchor.y,
        fromFace: sourceAnchor.face,
        toFace: targetAnchor.face,
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
    firstBranchCommitByName,
    mergeDestinations,
    mergeTargetBranchesBySourceBranchAndCommitSha,
  };
}
