import { Branch, BranchCommitPreview, BranchPromptMeta, CheckedOutRef, DirectCommit, MergeNode, OpenPR, WorktreeInfo } from '../types';
import BranchGroupView from './BranchGroupView';
import GitGraphView from './graph/GitGraphView';

export type ViewMode = 'time' | 'status' | 'creator';
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
  onStageAllChanges?: () => Promise<boolean> | Promise<void> | boolean | void;
  stageInProgress?: boolean;
  onCreateBranchFromNode?: (nodeId: string, branchName: string) => Promise<void>;
  createBranchFromNodeInProgress?: boolean;
  onMoveNodeBackToBranch?: (targetBranchName: string) => Promise<void>;
  orientation?: OrientationMode;
}

export default function BranchMapView({
  branches,
  defaultBranch,
  onCommitClick,
  branchUniqueAheadCounts = {},
  view = 'time',
  checkedOutRef = null,
  currentRepoPath,
}: Props) {
  return (
    <div className="h-full flex flex-col">
      {view === 'time' ? (
        <div className="flex-1 min-h-0">
          <GitGraphView
            repoPath={currentRepoPath}
            checkedOutHeadSha={checkedOutRef?.headSha}
            onCommitClick={onCommitClick}
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
