import { buildLanes } from '../components/grid/LayoutGrid';
import { computeBranchGridLayout, type BranchGridLayoutModel } from '../components/grid/branchGridLayoutModel';
import { injectWorktreeUncommittedPreviews } from '../lib/injectWorktreeUncommitted';
import { buildWorktreeSessions } from '../lib/worktreeSessions';
import type { Branch, BranchCommitPreview, CheckedOutRef, DirectCommit, GitStashEntry, MergeNode, WorktreeInfo } from '../types';
import { applyBranchParents } from '../lib/branchParents';
import { foldEmptyBranchPlaceholdersIntoGraph, foldStashNodesIntoGraph } from './placeStashNode';

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
  worktrees?: WorktreeInfo[];
  currentRepoPath?: string;
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
  worktrees = [],
  currentRepoPath,
  stashes,
  manuallyOpenedClumps = new Set<string>(),
  manuallyClosedClumps = new Set<string>(),
  gridSearchQuery = '',
  gridFocusSha = null,
  orientation = 'horizontal',
}: RepoVisualStateInput): RepoVisualState {
  const worktreeSessions = buildWorktreeSessions(worktrees, currentRepoPath, checkedOutRef);
  const anyDirty = worktreeSessions.some((session) => session.hasUncommittedChanges);

  const stashFolded = foldStashNodesIntoGraph(
    stashes,
    branches,
    directCommits,
    branchCommitPreviews,
    branchUniqueAheadCounts,
    defaultBranch,
    anyDirty,
  );

  const emptyBranchFolded = foldEmptyBranchPlaceholdersIntoGraph(
    stashFolded.branches,
    stashFolded.directCommits,
    stashFolded.branchCommitPreviews,
    stashFolded.branchUniqueAheadCounts,
    defaultBranch,
  );

  const injected = injectWorktreeUncommittedPreviews({
    sessions: worktreeSessions,
    branches: emptyBranchFolded.branches,
    branchCommitPreviews: emptyBranchFolded.branchCommitPreviews,
    branchUniqueAheadCounts: emptyBranchFolded.branchUniqueAheadCounts,
    directCommits: emptyBranchFolded.directCommits,
    defaultBranch,
  });

  const enrichedBranches = injected.branches;
  const enrichedBranchCommitPreviews = injected.branchCommitPreviews;
  const enrichedBranchUniqueAheadCounts = injected.branchUniqueAheadCounts;
  const enrichedDirectCommits = emptyBranchFolded.directCommits;

  const enrichedBranchParentByName: Record<string, string | null> = { ...branchParentByName };
  enrichedBranchParentByName[defaultBranch] = null;
  const branchesForLayout = applyBranchParents(enrichedBranches, enrichedBranchParentByName, defaultBranch);
  const sharedGridLanes = buildLanes(branchesForLayout, defaultBranch, enrichedBranchCommitPreviews, enrichedBranchParentByName);
  const sharedGridLayoutModel = computeBranchGridLayout({
    lanes: sharedGridLanes,
    branches: branchesForLayout,
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
    worktreeSessions,
    orientation,
  });

  return {
    enrichedBranches: branchesForLayout,
    enrichedBranchCommitPreviews,
    enrichedBranchUniqueAheadCounts,
    enrichedDirectCommits,
    sharedGridLayoutModel,
  };
}
