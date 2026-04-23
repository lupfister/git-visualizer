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
  branchUniqueAheadCounts?: Record<string, number>;
  gridSearchQuery?: string;
  gridSearchJumpToken?: number;
  gridFocusSha?: string | null;
  onGridSearchResultCountChange?: (count: number | null) => void;
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
  onMoveNodeBackToBranch?: (targetBranchName: string) => Promise<void>;
  orientation?: OrientationMode;
  onInteractionChange?: (isInteracting: boolean) => void;
  manuallyOpenedClumps?: Set<string>;
  manuallyClosedClumps?: Set<string>;
  setManuallyOpenedClumps?: Dispatch<SetStateAction<Set<string>>>;
  setManuallyClosedClumps?: Dispatch<SetStateAction<Set<string>>>;
  layoutModel?: BranchGridLayoutModel;
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
  branchUniqueAheadCounts = {},
  gridSearchQuery = '',
  gridSearchJumpToken = 0,
  gridFocusSha = null,
  onGridSearchResultCountChange,
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
  deleteInProgress = false,
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
  onMoveNodeBackToBranch,
  orientation = 'horizontal',
  onInteractionChange,
  manuallyOpenedClumps,
  manuallyClosedClumps,
  setManuallyOpenedClumps,
  setManuallyClosedClumps,
  layoutModel,
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
            branchUniqueAheadCounts={branchUniqueAheadCounts}
            gridSearchQuery={gridSearchQuery}
            gridSearchJumpToken={gridSearchJumpToken}
            gridFocusSha={gridFocusSha}
            onGridSearchResultCountChange={onGridSearchResultCountChange}
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
            deleteInProgress={deleteInProgress}
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
            onMoveNodeBackToBranch={onMoveNodeBackToBranch}
            orientation={orientation}
            onInteractionChange={onInteractionChange}
            manuallyOpenedClumps={manuallyOpenedClumps}
            manuallyClosedClumps={manuallyClosedClumps}
            setManuallyOpenedClumps={setManuallyOpenedClumps}
            setManuallyClosedClumps={setManuallyClosedClumps}
            layoutModel={layoutModel}
          />
        </div>
      ) : view === 'grid' ? (
        <div className="flex-1 min-h-0 overflow-hidden">
          <BranchGridMap
            branches={branches}
            mergeNodes={mergeNodes}
            directCommits={directCommits}
            unpushedDirectCommits={unpushedDirectCommits}
            defaultBranch={defaultBranch}
            branchCommitPreviews={branchCommitPreviews}
            branchUniqueAheadCounts={branchUniqueAheadCounts}
            gridSearchQuery={gridSearchQuery}
            gridSearchJumpToken={gridSearchJumpToken}
            gridFocusSha={gridFocusSha}
            checkedOutRef={checkedOutRef}
            onGridSearchResultCountChange={onGridSearchResultCountChange}
            onGridSearchFocusChange={onGridSearchFocusChange}
            onInteractionChange={onInteractionChange}
            manuallyOpenedClumps={manuallyOpenedClumps}
            manuallyClosedClumps={manuallyClosedClumps}
            setManuallyOpenedClumps={setManuallyOpenedClumps}
            setManuallyClosedClumps={setManuallyClosedClumps}
            layoutModel={layoutModel}
            orientation={orientation}
          />
        </div>
      ) : null}
    </div>
  );
}
