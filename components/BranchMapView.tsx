import { Branch, BranchCommitPreview, BranchPromptMeta, CheckedOutRef, DirectCommit, MergeNode, OpenPR, WorktreeInfo } from '../types';
import BranchMap from './BranchMap';
import BranchGroupView from './BranchGroupView';

export type ViewMode = 'time' | 'status' | 'creator';

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
  view?: ViewMode;
  isLoading?: boolean;
  scrollRequest?: { branch: Branch; seq: number } | null;
  focusedErrorBranch?: Branch | null;
  checkedOutRef?: CheckedOutRef | null;

  /** Height of overlay UI above the map (px); improves aspect + padding vs. full window. */
  mapTopInsetPx?: number;
  onMergeRefsIntoBranch?: (sourceRefs: string[], targetBranch: string) => Promise<void> | void;
  mergeInProgress?: boolean;
  onPushAllBranches?: () => Promise<void> | void;
  onPushCurrentBranch?: () => Promise<void> | void;
  onPushCommitTargets?: (targets: Array<{ branchName: string; targetSha: string }>) => Promise<void> | void;
  pushInProgress?: boolean;
  onDeleteSelection?: (targets: {
    branchNames: string[];
    discardUncommittedChanges: boolean;
    stashIndices?: number[];
  }) => Promise<void> | void;
  deleteInProgress?: boolean;
  worktrees?: WorktreeInfo[];
  /** Directory the app is using (must match worktree list paths for “current” vs “other”). */
  currentRepoPath?: string;
  onRemoveWorktree?: (worktreePath: string, force: boolean) => Promise<void> | void;
  removeWorktreeInProgress?: boolean;
  /** Cmd/Ctrl+click or double-click a teal (other worktree) commit to target that worktree directory in the app. */
  onSwitchToWorktree?: (worktreePath: string) => void | Promise<void>;
  onStashLocalChanges?: () => Promise<void> | void;
  stashInProgress?: boolean;
  stashDisabled?: boolean;
  onCommitLocalChanges?: (message: string) => Promise<boolean>;
  commitInProgress?: boolean;
  commitDisabled?: boolean;
}

export default function BranchMapView({
  branches,
  mergeNodes,
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
}: Props) {
  // Determine active vs inactive error branches
  const openPRBranchNames = new Set(openPRs.map(p => p.branchName));
  const ACTIVE_MS = 14 * 86400000;
  const viewNow = Date.now();
  function isBranchActive(b: Branch): boolean {
    return openPRBranchNames.has(b.name) || viewNow - new Date(b.lastCommitDate).getTime() <= ACTIVE_MS;
  }

  const staleBranches = branches
    .filter(b => b.status === 'stale' && isBranchActive(b))
    .sort((a, b) => new Date(b.lastCommitDate).getTime() - new Date(a.lastCommitDate).getTime());
  return (
    <div className="h-full flex flex-col">
      {view === 'time' ? (
        <div className="flex-1 min-h-0">
          <BranchMap
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
            view={view}
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
          />
        </div>
      ) : (
        <div className="flex-1 min-h-0 px-4 pb-8 overflow-y-auto">
          <BranchGroupView
            view={view}
            branches={branches}
            defaultBranch={defaultBranch}
            branchUniqueAheadCounts={branchUniqueAheadCounts}
          />
        </div>
      )}
    </div>
  );
}
