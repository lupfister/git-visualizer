import { Branch, BranchCommitPreview, BranchPromptMeta, CheckedOutRef, DirectCommit, MergeNode, OpenPR, WorktreeInfo } from '../../types';
import type { Dispatch, SetStateAction } from 'react';
import BranchGridMap from './MapGrid';
import type { BranchGridLayoutModel } from './branchGridLayoutModel';
import type { WorktreeDraftDisplay } from '../../src/worktreeDraftMessages';
import type { Node, NodePositionOverrides } from './LayoutGrid';
import type { PreviewTarget } from '../../lib/git';

export type ViewMode = 'time' | 'grid';
export type OrientationMode = 'horizontal';

interface Props {
  branches: Branch[];
  mergeNodes: MergeNode[];
  directCommits?: DirectCommit[];
  unpushedDirectCommits?: DirectCommit[];
  unpushedCommitShasByBranch?: Record<string, string[]>;
  openPRs?: OpenPR[];
  defaultBranch: string;
  onCommitClick?: (target: {
    commitSha: string;
    branchName?: string;
    worktreePath: string;
  }) => void | Promise<void>;
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
  isSyncing?: boolean;
  scrollRequest?: { branch: Branch; seq: number } | null;
  focusedErrorBranch?: Branch | null;
  checkedOutRef?: CheckedOutRef | null;
  mapTopInsetPx?: number;
  onMergeRefsIntoBranch?: (sourceRefs: string[], targetBranch: string) => Promise<void> | void;
  mergeInProgress?: boolean;
  onPushAllBranches?: () => Promise<void> | void;
  onPushCurrentBranch?: (targetPath?: string) => Promise<void> | void;
  onCreateTerminal?: (projectPath: string, worktreePath: string) => void;
  onCreateWorktree?: (projectPath: string, branchOrCommit?: string) => void;
  onPushCommitTargets?: (targets: Array<{ branchName: string; targetSha: string }>) => Promise<void> | void;
  pushInProgress?: boolean;
  onSquashCommitRange?: (target: { branchName: string; commitShas: string[] }) => Promise<void> | void;
  squashInProgress?: boolean;
  onDeleteSelection?: (targets: {
    branchNames: string[];
    discardUncommittedChanges: boolean;
    discardUncommittedWorktreePaths?: string[];
    removeWorktrees?: Array<{ path: string; force: boolean }>;
    stashIndices?: number[];
  }) => Promise<void> | void;
  deleteInProgress?: boolean;
  worktrees?: WorktreeInfo[];
  currentRepoPath?: string;
  onStashLocalChanges?: (worktreePaths: string[]) => Promise<void> | void;
  stashInProgress?: boolean;
  stashDisabled?: boolean;
  onCommitLocalChanges?: (message: string, worktreePaths: string[]) => Promise<boolean>;
  onAutoCommitLocalChanges?: (worktreePaths: string[]) => Promise<boolean>;
  commitInProgress?: boolean;
  commitDisabled?: boolean;
  onStageAllChanges?: () => Promise<boolean> | Promise<void> | boolean | void;
  stageInProgress?: boolean;
  onCreateBranchFromNode?: (nodeId: string, branchName: string, worktreePath?: string | null) => Promise<void>;
  onCreateGeneratedBranch?: (worktreePath: string, branchName: string) => Promise<void>;
  onCreateRootBranch?: (branchName: string, worktreePath?: string | null) => Promise<void>;
  createBranchFromNodeInProgress?: boolean;
  isMutationBusy?: boolean;
  onMoveNodeBackToBranch?: (targetBranchName: string) => Promise<void>;
  isDebugOpen?: boolean;
  onDebugClose?: () => void;
  debugRows?: string[];
  orientation?: OrientationMode;
  onInteractionChange?: (isInteracting: boolean) => void;
  onPreviewNode?: (target: PreviewTarget, nodeId: string) => Promise<void> | void;
  previewInProgress?: boolean;
  previewedNodeId?: string | null;
  previewedWorktreeNodeIds?: string[];
  terminalCountByWorkingTreeId?: Readonly<Record<string, number>>;
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
    setIsGridDebugOpen: (open: boolean | ((open: boolean) => boolean)) => void;
    githubAuthMessage: string | null;
    commitSwitchFeedback: { kind: 'success' | 'error'; message: string } | null;
    isCommitSwitchFeedbackVisible: boolean;
  };
  blockMapInteraction?: boolean;
  blockMapDisplay?: boolean;
  mapReadyEpoch?: number;
  onMapReadyForDisplay?: (epoch: number) => void;
  nodePositionOverrides?: NodePositionOverrides;
  onNodePositionOverridesChange?: (overrides: NodePositionOverrides) => void;
  worktreeDraftByWorkingTreeId?: ReadonlyMap<string, WorktreeDraftDisplay>;
  onNodeDoubleClick?: (node: Node) => void;
  onShowContextMenu?: (
    event: React.MouseEvent,
    type: 'project' | 'worktree' | 'worktree-plus' | 'commit' | 'stash' | 'empty-branch',
    projectPath: string,
    worktreePath?: string,
    worktree?: WorktreeInfo,
    commitSha?: string,
    commitLabel?: string,
    commitText?: string,
    branchName?: string
  ) => void;
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
  isSyncing = false,
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
  onSquashCommitRange,
  squashInProgress = false,
  onDeleteSelection,
  deleteInProgress = false,
  worktrees = [],
  currentRepoPath,
  onStashLocalChanges,
  stashInProgress = false,
  stashDisabled = false,
  onCommitLocalChanges,
  onAutoCommitLocalChanges,
  commitInProgress = false,
  commitDisabled = false,
  onStageAllChanges,
  stageInProgress = false,
  onCreateBranchFromNode,
  onCreateGeneratedBranch,
  onCreateRootBranch,
  onCreateTerminal,
  onCreateWorktree,
  createBranchFromNodeInProgress = false,
  isMutationBusy = false,
  onMoveNodeBackToBranch,
  isDebugOpen = false,
  onDebugClose,
  debugRows,
  orientation = 'horizontal',
  onInteractionChange,
  onPreviewNode,
  previewInProgress = false,
  previewedNodeId = null,
  previewedWorktreeNodeIds = [],
  terminalCountByWorkingTreeId = {},
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
  nodePositionOverrides,
  onNodePositionOverridesChange,
  worktreeDraftByWorkingTreeId,
  onNodeDoubleClick,
  onShowContextMenu,
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
            onNodeDoubleClick={onNodeDoubleClick}
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
            isSyncing={isSyncing}
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
            onSquashCommitRange={onSquashCommitRange}
            squashInProgress={squashInProgress}
            onDeleteSelection={onDeleteSelection}
            worktrees={worktrees}
            currentRepoPath={currentRepoPath}
            onStashLocalChanges={onStashLocalChanges}
            stashInProgress={stashInProgress}
            stashDisabled={stashDisabled}
            onCommitLocalChanges={onCommitLocalChanges}
            onAutoCommitLocalChanges={onAutoCommitLocalChanges}
            commitInProgress={commitInProgress}
            commitDisabled={commitDisabled}
            onStageAllChanges={onStageAllChanges}
            stageInProgress={stageInProgress}
            onCreateBranchFromNode={onCreateBranchFromNode}
            onCreateGeneratedBranch={onCreateGeneratedBranch}
            onCreateRootBranch={onCreateRootBranch}
            onCreateTerminal={onCreateTerminal}
            onCreateWorktree={onCreateWorktree}
            createBranchFromNodeInProgress={createBranchFromNodeInProgress}
            isMutationBusy={isMutationBusy}
            onMoveNodeBackToBranch={onMoveNodeBackToBranch}
            isDebugOpen={isDebugOpen}
            onDebugClose={onDebugClose}
            debugRows={debugRows}
            orientation={orientation}
            onInteractionChange={onInteractionChange}
            onPreviewNode={onPreviewNode}
            previewInProgress={previewInProgress}
            previewedNodeId={previewedNodeId}
            previewedWorktreeNodeIds={previewedWorktreeNodeIds}
            terminalCountByWorkingTreeId={terminalCountByWorkingTreeId}
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
            nodePositionOverrides={nodePositionOverrides}
            onNodePositionOverridesChange={onNodePositionOverridesChange}
            worktreeDraftByWorkingTreeId={worktreeDraftByWorkingTreeId}
            onShowContextMenu={onShowContextMenu}
          />
        </div>
      ) : view === 'grid' ? (
        <div className="flex-1 min-h-0 overflow-hidden">
          <BranchGridMap
            branches={branches}
            mergeNodes={mergeNodes}
            directCommits={directCommits}
            unpushedDirectCommits={unpushedDirectCommits}
            unpushedCommitShasByBranch={unpushedCommitShasByBranch}
            openPRs={openPRs}
            defaultBranch={defaultBranch}
            onCommitClick={onCommitClick}
            onNodeDoubleClick={onNodeDoubleClick}
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
            isSyncing={isSyncing}
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
            onStashLocalChanges={onStashLocalChanges}
            stashInProgress={stashInProgress}
            stashDisabled={stashDisabled}
            onCommitLocalChanges={onCommitLocalChanges}
            onAutoCommitLocalChanges={onAutoCommitLocalChanges}
            commitInProgress={commitInProgress}
            commitDisabled={commitDisabled}
            onStageAllChanges={onStageAllChanges}
            stageInProgress={stageInProgress}
            onCreateBranchFromNode={onCreateBranchFromNode}
            onCreateGeneratedBranch={onCreateGeneratedBranch}
            onCreateRootBranch={onCreateRootBranch}
            onCreateTerminal={onCreateTerminal}
            onCreateWorktree={onCreateWorktree}
            createBranchFromNodeInProgress={createBranchFromNodeInProgress}
            isMutationBusy={isMutationBusy}
            onMoveNodeBackToBranch={onMoveNodeBackToBranch}
            isDebugOpen={isDebugOpen}
            onDebugClose={onDebugClose}
            debugRows={debugRows}
            orientation={orientation}
            onInteractionChange={onInteractionChange}
            onPreviewNode={onPreviewNode}
            previewInProgress={previewInProgress}
            previewedNodeId={previewedNodeId}
            previewedWorktreeNodeIds={previewedWorktreeNodeIds}
            terminalCountByWorkingTreeId={terminalCountByWorkingTreeId}
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
            nodePositionOverrides={nodePositionOverrides}
            onNodePositionOverridesChange={onNodePositionOverridesChange}
            worktreeDraftByWorkingTreeId={worktreeDraftByWorkingTreeId}
            onShowContextMenu={onShowContextMenu}
          />
        </div>
      ) : null}
    </div>
  );
}
