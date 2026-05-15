import { buildLanes } from '../components/grid/LayoutGrid';
import { computeBranchGridLayout, type BranchGridLayoutModel } from '../components/grid/branchGridLayoutModel';
import type { Branch, BranchCommitPreview, CheckedOutRef, DirectCommit, GitStashEntry, MergeNode } from '../types';
import { foldStashNodesIntoGraph } from './placeStashNode';

type RepoVisualStateInput = {
  branches: Branch[];
  mergeNodes: MergeNode[];
  directCommits: DirectCommit[];
  unpushedDirectCommits: DirectCommit[];
  unpushedCommitShasByBranch?: Record<string, string[]>;
  defaultBranch: string;
  branchCommitPreviews: Record<string, BranchCommitPreview[]>;
  branchParentByName?: Record<string, string | null>;
  branchUniqueAheadCounts: Record<string, number>;
  checkedOutRef: CheckedOutRef | null;
  stashes: GitStashEntry[];
  manuallyOpenedClumps?: Set<string>;
  manuallyClosedClumps?: Set<string>;
  gridSearchQuery?: string;
  gridFocusSha?: string | null;
  orientation?: 'vertical' | 'horizontal';
};

export type RepoVisualState = {
  enrichedBranches: Branch[];
  enrichedBranchCommitPreviews: Record<string, BranchCommitPreview[]>;
  enrichedBranchUniqueAheadCounts: Record<string, number>;
  enrichedDirectCommits: DirectCommit[];
  sharedGridLayoutModel: BranchGridLayoutModel;
};

export function deriveRepoVisualState({
  branches,
  mergeNodes,
  directCommits,
  unpushedDirectCommits,
  unpushedCommitShasByBranch = {},
  defaultBranch,
  branchCommitPreviews,
  branchParentByName = {},
  branchUniqueAheadCounts,
  checkedOutRef,
  stashes,
  manuallyOpenedClumps = new Set<string>(),
  manuallyClosedClumps = new Set<string>(),
  gridSearchQuery = '',
  gridFocusSha = null,
  orientation = 'horizontal',
}: RepoVisualStateInput): RepoVisualState {
  const stashFolded = foldStashNodesIntoGraph(
    stashes,
    branches,
    directCommits,
    branchCommitPreviews,
    branchUniqueAheadCounts,
    defaultBranch,
    checkedOutRef?.hasUncommittedChanges ?? false,
  );

  let enrichedBranches = stashFolded.branches;
  let enrichedDirectCommits = stashFolded.directCommits;
  let enrichedBranchCommitPreviews = stashFolded.branchCommitPreviews;
  let enrichedBranchUniqueAheadCounts = stashFolded.branchUniqueAheadCounts;

  if (checkedOutRef?.hasUncommittedChanges) {
    const checkedOutAnchorSha = checkedOutRef.headSha || checkedOutRef.parentSha || null;
    const shaMatches = (left?: string | null, right?: string | null): boolean => {
      if (!left || !right) return false;
      return left === right || left.startsWith(right) || right.startsWith(left);
    };
    const targetBranch = checkedOutRef.branchName
      ? enrichedBranches.find((branch) => branch.name === checkedOutRef.branchName)
      : undefined;
    const anchorCommitDate = (() => {
      if (!checkedOutAnchorSha) return null;
      const matchingDirectCommit = enrichedDirectCommits.find((commit) => (
        shaMatches(commit.fullSha, checkedOutAnchorSha) ||
        shaMatches(commit.sha, checkedOutAnchorSha)
      ));
      if (matchingDirectCommit?.date) return matchingDirectCommit.date;
      if (targetBranch) {
        const matchingPreviewCommit = (enrichedBranchCommitPreviews[targetBranch.name] ?? []).find((commit) => (
          shaMatches(commit.fullSha, checkedOutAnchorSha) ||
          shaMatches(commit.sha, checkedOutAnchorSha)
        ));
        if (matchingPreviewCommit?.date) return matchingPreviewCommit.date;
      }
      return null;
    })();
    const anchorCommitTimeMs = anchorCommitDate ? new Date(anchorCommitDate).getTime() : Number.NaN;
    const nowTimeMs = Date.now();
    const uncommittedTimeMs = Number.isFinite(anchorCommitTimeMs)
      ? Math.max(nowTimeMs, anchorCommitTimeMs + 1)
      : nowTimeMs;
    const uncommittedDate = new Date(uncommittedTimeMs).toISOString();
    const uncommittedNode: BranchCommitPreview = {
      fullSha: 'WORKING_TREE',
      sha: 'Uncommited Changes',
      parentSha: checkedOutAnchorSha,
      message: 'Local uncommitted changes',
      author: 'You',
      date: uncommittedDate,
      kind: 'uncommitted',
    };
    if (targetBranch) {
      enrichedBranches = enrichedBranches.map((branch) => {
        if (branch.name === targetBranch.name) {
          return {
            ...branch,
            commitsAhead: branch.commitsAhead + 1,
            unpushedCommits: branch.unpushedCommits + 1,
            lastCommitDate: uncommittedDate,
            headSha: 'WORKING_TREE',
          };
        }
        return branch;
      });
      enrichedBranchCommitPreviews = {
        ...enrichedBranchCommitPreviews,
        [targetBranch.name]: [uncommittedNode, ...(enrichedBranchCommitPreviews[targetBranch.name] || [])],
      };
      enrichedBranchUniqueAheadCounts = {
        ...enrichedBranchUniqueAheadCounts,
        [targetBranch.name]: Math.max(
          0,
          (Object.prototype.hasOwnProperty.call(enrichedBranchUniqueAheadCounts, targetBranch.name)
            ? enrichedBranchUniqueAheadCounts[targetBranch.name]
            : targetBranch.commitsAhead) ?? 0,
        ) + 1,
      };
    } else {
      enrichedBranchCommitPreviews = {
        ...enrichedBranchCommitPreviews,
        [defaultBranch]: [uncommittedNode, ...(enrichedBranchCommitPreviews[defaultBranch] || [])],
      };
    }
  }

  const enrichedBranchParentByName: Record<string, string | null> = { ...branchParentByName };
  enrichedBranchParentByName[defaultBranch] = null;
  const sharedGridLanes = buildLanes(enrichedBranches, defaultBranch, enrichedBranchCommitPreviews, enrichedBranchParentByName);
  const sharedGridLayoutModel = computeBranchGridLayout({
    lanes: sharedGridLanes,
    branches: enrichedBranches,
    mergeNodes,
    directCommits: enrichedDirectCommits,
    unpushedDirectCommits,
    unpushedCommitShasByBranch,
    defaultBranch,
    branchCommitPreviews: enrichedBranchCommitPreviews,
    branchParentByName: enrichedBranchParentByName,
    branchUniqueAheadCounts: enrichedBranchUniqueAheadCounts,
    manuallyOpenedClumps,
    manuallyClosedClumps,
    isDebugOpen: false,
    gridSearchQuery,
    gridFocusSha,
    checkedOutRef,
    orientation,
  });

  return {
    enrichedBranches,
    enrichedBranchCommitPreviews,
    enrichedBranchUniqueAheadCounts,
    enrichedDirectCommits,
    sharedGridLayoutModel,
  };
}
