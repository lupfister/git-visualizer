import type { BranchMapProps, OrientationMode } from './MapSvg.types';

export type MapSvgNormalizedProps = {
  branches: BranchMapProps['branches'];
  mergeNodes: BranchMapProps['mergeNodes'];
  directCommits: NonNullable<BranchMapProps['directCommits']>;
  unpushedDirectCommits: NonNullable<BranchMapProps['unpushedDirectCommits']>;
  unpushedCommitShasByBranch: NonNullable<BranchMapProps['unpushedCommitShasByBranch']>;
  defaultBranch: BranchMapProps['defaultBranch'];
  onCommitClick: BranchMapProps['onCommitClick'];
  branchPromptMeta: NonNullable<BranchMapProps['branchPromptMeta']>;
  branchCommitPreviews: NonNullable<BranchMapProps['branchCommitPreviews']>;
  branchUniqueAheadCounts: NonNullable<BranchMapProps['branchUniqueAheadCounts']>;
  staleBranches: NonNullable<BranchMapProps['staleBranches']>;
  openPRs: NonNullable<BranchMapProps['openPRs']>;
  isLoading: boolean;
  onInteractionChange: BranchMapProps['onInteractionChange'];
  scrollRequest: BranchMapProps['scrollRequest'];
  focusedErrorBranch: BranchMapProps['focusedErrorBranch'];
  checkedOutRef: BranchMapProps['checkedOutRef'];
  mapTopInsetPx: number;
  onMergeRefsIntoBranch: BranchMapProps['onMergeRefsIntoBranch'];
  mergeInProgress: boolean;
  onPushAllBranches: BranchMapProps['onPushAllBranches'];
  onPushCurrentBranch: BranchMapProps['onPushCurrentBranch'];
  onPushCommitTargets: BranchMapProps['onPushCommitTargets'];
  pushInProgress: boolean;
  onDeleteSelection: BranchMapProps['onDeleteSelection'];
  deleteInProgress: boolean;
  worktrees: NonNullable<BranchMapProps['worktrees']>;
  currentRepoPath: BranchMapProps['currentRepoPath'];
  onRemoveWorktree: BranchMapProps['onRemoveWorktree'];
  removeWorktreeInProgress: boolean;
  onSwitchToWorktree: BranchMapProps['onSwitchToWorktree'];
  onStashLocalChanges: BranchMapProps['onStashLocalChanges'];
  stashInProgress: boolean;
  stashDisabled: boolean;
  onCommitLocalChanges: BranchMapProps['onCommitLocalChanges'];
  commitInProgress: boolean;
  commitDisabled: boolean;
  onStageAllChanges: BranchMapProps['onStageAllChanges'];
  stageInProgress: boolean;
  onCreateBranchFromNode: BranchMapProps['onCreateBranchFromNode'];
  createBranchFromNodeInProgress: boolean;
  onMoveNodeBackToBranch: BranchMapProps['onMoveNodeBackToBranch'];
  controlledOrientation: BranchMapProps['orientation'] | undefined;
};

export function normalizeMapSvgProps(props: BranchMapProps): MapSvgNormalizedProps {
  return {
    branches: props.branches,
    mergeNodes: props.mergeNodes,
    directCommits: props.directCommits ?? [],
    unpushedDirectCommits: props.unpushedDirectCommits ?? [],
    unpushedCommitShasByBranch: props.unpushedCommitShasByBranch ?? {},
    defaultBranch: props.defaultBranch,
    onCommitClick: props.onCommitClick,
    branchPromptMeta: props.branchPromptMeta ?? {},
    branchCommitPreviews: props.branchCommitPreviews ?? {},
    branchUniqueAheadCounts: props.branchUniqueAheadCounts ?? {},
    staleBranches: props.staleBranches ?? [],
    openPRs: props.openPRs ?? [],
    isLoading: props.isLoading ?? false,
    onInteractionChange: props.onInteractionChange,
    scrollRequest: props.scrollRequest,
    focusedErrorBranch: props.focusedErrorBranch,
    checkedOutRef: props.checkedOutRef ?? null,
    mapTopInsetPx: props.mapTopInsetPx ?? 0,
    onMergeRefsIntoBranch: props.onMergeRefsIntoBranch,
    mergeInProgress: props.mergeInProgress ?? false,
    onPushAllBranches: props.onPushAllBranches,
    onPushCurrentBranch: props.onPushCurrentBranch,
    onPushCommitTargets: props.onPushCommitTargets,
    pushInProgress: props.pushInProgress ?? false,
    onDeleteSelection: props.onDeleteSelection,
    deleteInProgress: props.deleteInProgress ?? false,
    worktrees: props.worktrees ?? [],
    currentRepoPath: props.currentRepoPath,
    onRemoveWorktree: props.onRemoveWorktree,
    removeWorktreeInProgress: props.removeWorktreeInProgress ?? false,
    onSwitchToWorktree: props.onSwitchToWorktree,
    onStashLocalChanges: props.onStashLocalChanges,
    stashInProgress: props.stashInProgress ?? false,
    stashDisabled: props.stashDisabled ?? false,
    onCommitLocalChanges: props.onCommitLocalChanges,
    commitInProgress: props.commitInProgress ?? false,
    commitDisabled: props.commitDisabled ?? false,
    onStageAllChanges: props.onStageAllChanges,
    stageInProgress: props.stageInProgress ?? false,
    onCreateBranchFromNode: props.onCreateBranchFromNode,
    createBranchFromNodeInProgress: props.createBranchFromNodeInProgress ?? false,
    onMoveNodeBackToBranch: props.onMoveNodeBackToBranch,
    controlledOrientation: props.orientation as OrientationMode | undefined,
  };
}
