import { Branch, BranchCommitPreview, BranchPromptMeta, CheckedOutRef, DirectCommit, MergeNode, OpenPR, WorktreeInfo } from '../../types';
import type { Dispatch, SetStateAction } from 'react';
import BranchGridMap from './MapGrid';
import type { BranchGridLayoutModel } from './branchGridLayoutModel';

export type ViewMode = 'time' | 'grid';
export type OrientationMode = 'vertical' | 'horizontal';

interface Props {
  branches: Branch[];
  mergeNodes: MergeNode[];
  directCommits?: DirectCommit[];
  unpushedDirectCommits?: DirectCommit[];
  unpushedCommitShasByBranch?: Record<string, string[]>;
  openPRs?: OpenPR[];
  defaultBranch: string;
  onCommitClick?: (target: { commitSha: string; branchName?: string }) => void;
  onLoadMore?: () => void;
  githubAvailable?: boolean;
  branchPromptMeta?: Record<string, BranchPromptMeta>;
  branchCommitPreviews?: Record<string, BranchCommitPreview[]>;
  branchParentByName?: Record<string, string | null>;
  branchUniqueAheadCounts?: Record<string, number>;
  gridSearchQuery?: string;
  gridSearchJumpToken?: number;
  gridSearchJumpDirection?: 1 | -1;
  gridFocusSha?: string | null;
  onGridSearchResultCountChange?: (count: number | null) => void;
  onGridSearchResultIndexChange?: (index: number | null) => void;
  onGridSearchFocusChange?: (sha: string | null) => void;
  view?: ViewMode;
  isLoading?: boolean;
  scrollRequest?: { branch: Branch; seq: number } | null;
  focusedErrorBranch?: Branch | null;
  checkedOutRef?: CheckedOutRef | null;
  mapTopInsetPx?: number;
  onMergeRefsIntoBranch?: (sourceRefs: string[], targetBranch: string) => Promise<void> | void;
  mergeInProgress?: boolean;
  onPushAllBranches?: () => Promise<void> | void;
  onPushCurrentBranch?: () => Promise<void> | void;
  onPushCommitTargets?: (targets: Array<{ branchName: string; targetSha: string }>) => Promise<void> | void;
  pushInProgress?: boolean;
  onDeleteSelection?: (targets: { branchNames: string[]; discardUncommittedChanges: boolean; stashIndices?: number[] }) => Promise<void> | void;
  deleteInProgress?: boolean;
  worktrees?: WorktreeInfo[];
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
  isMutationBusy?: boolean;
  onMoveNodeBackToBranch?: (targetBranchName: string) => Promise<void>;
  isDebugOpen?: boolean;
  onDebugClose?: () => void;
  orientation?: OrientationMode;
  onInteractionChange?: (isInteracting: boolean) => void;
  manuallyOpenedClumps?: Set<string>;
  manuallyClosedClumps?: Set<string>;
  setManuallyOpenedClumps?: Dispatch<SetStateAction<Set<string>>>;
  setManuallyClosedClumps?: Dispatch<SetStateAction<Set<string>>>;
  layoutModel?: BranchGridLayoutModel;
  gridHudProps?: {
    githubAuthStatus: { ghAvailable: boolean; authenticated: boolean } | null;
    githubAuthLoading: boolean;
    onGitHubAuthSetup: () => void;
    gridSearchQuery: string;
    setGridSearchQuery: (value: string) => void;
    gridSearchResultCount: number | null;
    gridSearchResultIndex: number | null;
    setGridSearchJumpDirection: (direction: 1 | -1) => void;
    setGridSearchJumpToken: (token: number | ((token: number) => number)) => void;
    mapGridOrientation: OrientationMode;
    setMapGridOrientation: (orientation: OrientationMode) => void;
    setIsGridDebugOpen: (open: boolean | ((open: boolean) => boolean)) => void;
    githubAuthMessage: string | null;
    commitSwitchFeedback: { kind: 'success' | 'error'; message: string } | null;
    isCommitSwitchFeedbackVisible: boolean;
  };
  blockMapInteraction?: boolean;
  blockMapDisplay?: boolean;
  mapReadyEpoch?: number;
  onMapReadyForDisplay?: (epoch: number) => void;
}

export default function BranchGridMapView({
  branches,
  mergeNodes = [],
  directCommits = [],
  unpushedDirectCommits = [],
  unpushedCommitShasByBranch = {},
  openPRs = [],
  defaultBranch,
  onCommitClick,
  onLoadMore,
  branchPromptMeta = {},
  branchCommitPreviews = {},
  branchParentByName = {},
  branchUniqueAheadCounts = {},
  gridSearchQuery = '',
  gridSearchJumpToken = 0,
  gridSearchJumpDirection = 1,
  gridFocusSha = null,
  onGridSearchResultCountChange,
  onGridSearchResultIndexChange,
  onGridSearchFocusChange,
  view = 'time',
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
  onCreateRootBranch,
  createBranchFromNodeInProgress = false,
  isMutationBusy = false,
  onMoveNodeBackToBranch,
  isDebugOpen = false,
  onDebugClose,
  orientation = 'horizontal',
  onInteractionChange,
  manuallyOpenedClumps,
  manuallyClosedClumps,
  setManuallyOpenedClumps,
  setManuallyClosedClumps,
  layoutModel,
  gridHudProps,
  blockMapInteraction = false,
  blockMapDisplay = false,
  mapReadyEpoch = 0,
  onMapReadyForDisplay,
}: Props) {
  const openPRBranchNames = new Set(openPRs.map(p => p.branchName));
  const ACTIVE_MS = 14 * 86400000;
  const viewNow = Date.now();
  function isBranchActive(b: Branch): boolean {
    return openPRBranchNames.has(b.name) || viewNow - new Date(b.lastCommitDate).getTime() <= ACTIVE_MS;
  }
  const staleBranches = branches.filter(b => b.status === 'stale' && isBranchActive(b)).sort((a, b) => new Date(b.lastCommitDate).getTime() - new Date(a.lastCommitDate).getTime());
  return (
    <div className="h-full flex flex-col">
      {view === 'time' ? (
        <div className="flex-1 min-h-0">
          <BranchGridMap
            branches={branches}
            mergeNodes={mergeNodes}
            directCommits={directCommits}
            unpushedDirectCommits={unpushedDirectCommits}
            unpushedCommitShasByBranch={unpushedCommitShasByBranch}
            openPRs={openPRs}
            defaultBranch={defaultBranch}
            onCommitClick={onCommitClick}
            onLoadMore={onLoadMore}
            branchPromptMeta={branchPromptMeta}
            branchCommitPreviews={branchCommitPreviews}
            branchParentByName={branchParentByName}
            branchUniqueAheadCounts={branchUniqueAheadCounts}
            gridSearchQuery={gridSearchQuery}
            gridSearchJumpToken={gridSearchJumpToken}
            gridSearchJumpDirection={gridSearchJumpDirection}
            gridFocusSha={gridFocusSha}
            onGridSearchResultCountChange={onGridSearchResultCountChange}
            onGridSearchResultIndexChange={onGridSearchResultIndexChange}
            onGridSearchFocusChange={onGridSearchFocusChange}
            staleBranches={staleBranches}
            isLoading={isLoading}
            scrollRequest={scrollRequest}
            focusedErrorBranch={focusedErrorBranch}
            checkedOutRef={checkedOutRef}
            mapTopInsetPx={mapTopInsetPx}
            onMergeRefsIntoBranch={onMergeRefsIntoBranch}
            mergeInProgress={mergeInProgress}
            onPushAllBranches={onPushAllBranches}
            onPushCurrentBranch={onPushCurrentBranch}
            onPushCommitTargets={onPushCommitTargets}
            pushInProgress={pushInProgress}
            onDeleteSelection={onDeleteSelection}
            worktrees={worktrees}
            currentRepoPath={currentRepoPath}
            onRemoveWorktree={onRemoveWorktree}
            removeWorktreeInProgress={removeWorktreeInProgress}
            onSwitchToWorktree={onSwitchToWorktree}
            onStashLocalChanges={onStashLocalChanges}
            stashInProgress={stashInProgress}
            stashDisabled={stashDisabled}
            onCommitLocalChanges={onCommitLocalChanges}
            commitInProgress={commitInProgress}
            commitDisabled={commitDisabled}
            onStageAllChanges={onStageAllChanges}
            stageInProgress={stageInProgress}
            onCreateBranchFromNode={onCreateBranchFromNode}
            onCreateRootBranch={onCreateRootBranch}
            createBranchFromNodeInProgress={createBranchFromNodeInProgress}
            isMutationBusy={isMutationBusy}
            onMoveNodeBackToBranch={onMoveNodeBackToBranch}
            isDebugOpen={isDebugOpen}
            onDebugClose={onDebugClose}
            orientation={orientation}
            onInteractionChange={onInteractionChange}
            manuallyOpenedClumps={manuallyOpenedClumps}
            manuallyClosedClumps={manuallyClosedClumps}
            setManuallyOpenedClumps={setManuallyOpenedClumps}
            setManuallyClosedClumps={setManuallyClosedClumps}
            layoutModel={layoutModel}
            gridHudProps={gridHudProps}
            blockMapInteraction={blockMapInteraction}
            blockMapDisplay={blockMapDisplay}
            mapReadyEpoch={mapReadyEpoch}
            onMapReadyForDisplay={onMapReadyForDisplay}
          />
        </div>
      ) : view === 'grid' ? (
        <div className="flex-1 min-h-0 overflow-hidden">
          <BranchGridMap
            branches={branches}
            mergeNodes={mergeNodes}
            directCommits={directCommits}
            unpushedDirectCommits={unpushedDirectCommits}
            isLoading={isLoading}
            defaultBranch={defaultBranch}
            branchCommitPreviews={branchCommitPreviews}
            branchParentByName={branchParentByName}
            branchUniqueAheadCounts={branchUniqueAheadCounts}
            gridSearchQuery={gridSearchQuery}
            gridSearchJumpToken={gridSearchJumpToken}
            gridSearchJumpDirection={gridSearchJumpDirection}
            gridFocusSha={gridFocusSha}
            checkedOutRef={checkedOutRef}
            onGridSearchResultCountChange={onGridSearchResultCountChange}
            onGridSearchResultIndexChange={onGridSearchResultIndexChange}
            onGridSearchFocusChange={onGridSearchFocusChange}
            onInteractionChange={onInteractionChange}
            manuallyOpenedClumps={manuallyOpenedClumps}
            manuallyClosedClumps={manuallyClosedClumps}
            setManuallyOpenedClumps={setManuallyOpenedClumps}
            setManuallyClosedClumps={setManuallyClosedClumps}
            layoutModel={layoutModel}
            isDebugOpen={isDebugOpen}
            onDebugClose={onDebugClose}
            orientation={orientation}
            gridHudProps={gridHudProps}
            blockMapInteraction={blockMapInteraction}
            blockMapDisplay={blockMapDisplay}
            mapReadyEpoch={mapReadyEpoch}
            onMapReadyForDisplay={onMapReadyForDisplay}
          />
        </div>
      ) : null}
    </div>
  );
}
