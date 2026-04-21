import type { WorktreeInfo } from '../../types';
import type { BranchGridViewProps } from './LayoutGrid';
import { cn, isOtherWorktree, worktreeShortLabel } from './mapGridUtils';

type PushTarget = {
  branchName: string;
  targetSha: string;
  commitCount: number;
};

type SelectedCommitTargetOption = {
  options: Array<{ targetSha: string; targetBranch: string; sourceRefs: string[] }>;
  targetBranch: string | null;
  sources: string[];
};

type Props = {
  selectedVisibleCommitShas: string[];
  commitInProgress: boolean;
  commitDisabled: boolean;
  stageInProgress: boolean;
  stashInProgress: boolean;
  stashDisabled: boolean;
  pushInProgress: boolean;
  deleteInProgress: boolean;
  createBranchFromNodeInProgress: boolean;
  onCommitLocalChanges?: BranchGridViewProps['onCommitLocalChanges'];
  onStageAllChanges?: (() => boolean | void | Promise<void> | Promise<boolean>) | undefined;
  onStashLocalChanges?: BranchGridViewProps['onStashLocalChanges'];
  onPushCurrentBranch?: BranchGridViewProps['onPushCurrentBranch'];
  onPushAllBranches?: BranchGridViewProps['onPushAllBranches'];
  onPushCommitTargets?: BranchGridViewProps['onPushCommitTargets'];
  onDeleteSelection?: BranchGridViewProps['onDeleteSelection'];
  onCreateBranchFromNode?: BranchGridViewProps['onCreateBranchFromNode'];
  onMergeRefsIntoBranch?: BranchGridViewProps['onMergeRefsIntoBranch'];
  selectedPushTargets: PushTarget[];
  selectedPushLabel: string;
  canPushCurrentBranch: boolean;
  pushCurrentBranchLabel: string;
  pushableRemoteBranchCount: number;
  deletableSelectionCount: number;
  selectedCommitCanCreateBranch: boolean;
  selectedCommitTargetOption: SelectedCommitTargetOption;
  mergeInProgress: boolean;
  mergeTargetCommitSha: string | null;
  setMergeTargetCommitSha: (sha: string | null) => void;
  worktrees: WorktreeInfo[];
  currentRepoPath?: string;
  worktreeMenuOpen: boolean;
  setWorktreeMenuOpen: (open: boolean | ((open: boolean) => boolean)) => void;
  onSwitchToWorktree?: BranchGridViewProps['onSwitchToWorktree'];
  onRemoveWorktree?: BranchGridViewProps['onRemoveWorktree'];
  removeWorktreeInProgress: boolean;
  setCommitDialogOpen: (open: boolean) => void;
  setDeleteConfirmOpen: (open: boolean) => void;
  setNewBranchDialogOpen: (open: boolean) => void;
};

export default function MapGridControls({
  selectedVisibleCommitShas,
  commitInProgress,
  commitDisabled,
  stageInProgress,
  stashInProgress,
  stashDisabled,
  pushInProgress,
  deleteInProgress,
  createBranchFromNodeInProgress,
  onCommitLocalChanges,
  onStageAllChanges,
  onStashLocalChanges,
  onPushCurrentBranch,
  onPushAllBranches,
  onPushCommitTargets,
  onDeleteSelection,
  onCreateBranchFromNode,
  onMergeRefsIntoBranch,
  selectedPushTargets,
  selectedPushLabel,
  canPushCurrentBranch,
  pushCurrentBranchLabel,
  pushableRemoteBranchCount,
  deletableSelectionCount,
  selectedCommitCanCreateBranch,
  selectedCommitTargetOption,
  mergeInProgress,
  setMergeTargetCommitSha,
  worktrees,
  currentRepoPath,
  worktreeMenuOpen,
  setWorktreeMenuOpen,
  onSwitchToWorktree,
  onRemoveWorktree,
  removeWorktreeInProgress,
  setCommitDialogOpen,
  setDeleteConfirmOpen,
  setNewBranchDialogOpen,
}: Props) {
  const hasSelection = selectedVisibleCommitShas.length > 0;

  return (
    <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-[70] flex flex-wrap items-center gap-2">
      <div className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm">
        <button type="button" onClick={() => setCommitDialogOpen(true)} disabled={!onCommitLocalChanges || commitDisabled || hasSelection || commitInProgress} className="rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50">
          {commitInProgress ? 'Committing...' : 'Commit'}
        </button>
        <button type="button" onClick={() => void onStageAllChanges?.()} disabled={!onStageAllChanges || commitDisabled || hasSelection || stageInProgress} className="rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50">
          {stageInProgress ? 'Staging...' : 'Stage all'}
        </button>
        <button type="button" onClick={() => void onStashLocalChanges?.()} disabled={!onStashLocalChanges || stashDisabled || hasSelection || stashInProgress} className="rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50">
          {stashInProgress ? 'Stashing...' : 'Stash'}
        </button>
        <button type="button" onClick={() => void onPushCurrentBranch?.()} disabled={!onPushCurrentBranch || !canPushCurrentBranch || hasSelection || pushInProgress} className="rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50">
          {pushInProgress ? 'Pushing...' : pushCurrentBranchLabel}
        </button>
        <button type="button" onClick={() => void onPushAllBranches?.()} disabled={!onPushAllBranches || pushableRemoteBranchCount < 2 || hasSelection || pushInProgress} className="rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50">
          Push all
        </button>
        <button type="button" onClick={() => void onPushCommitTargets?.(selectedPushTargets.map((target) => ({ branchName: target.branchName, targetSha: target.targetSha })))} disabled={!onPushCommitTargets || selectedPushTargets.length === 0 || pushInProgress} className="rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50" title={selectedPushTargets.length > 0 ? selectedPushLabel : 'Select commits to push'}>
          {selectedPushTargets.length > 0 ? selectedPushLabel : 'Push selected'}
        </button>
        <button type="button" onClick={() => setDeleteConfirmOpen(true)} disabled={!onDeleteSelection || deletableSelectionCount === 0 || deleteInProgress} className="rounded-lg px-2.5 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20 disabled:cursor-not-allowed disabled:opacity-50">
          {deleteInProgress ? 'Deleting...' : 'Delete selection'}
        </button>
        <button type="button" onClick={() => setNewBranchDialogOpen(true)} disabled={!onCreateBranchFromNode || !selectedCommitCanCreateBranch || createBranchFromNodeInProgress} className="rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50">
          {createBranchFromNodeInProgress ? 'Creating...' : 'Create branch'}
        </button>
      </div>

      {selectedVisibleCommitShas.length > 1 && selectedCommitTargetOption.options.length > 0 && selectedCommitTargetOption.targetBranch && onMergeRefsIntoBranch ? (
        <div className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm">
          <span className="px-1 text-xs font-medium text-muted-foreground">merge to</span>
          {selectedCommitTargetOption.options.map((option) => {
            const isActive = option.targetBranch === selectedCommitTargetOption.targetBranch;
            return (
              <button
                key={`merge-${option.targetBranch}`}
                type="button"
                onClick={() => setMergeTargetCommitSha(option.targetSha)}
                className={cn(
                  'rounded-full px-2.5 py-1 text-xs font-medium transition-colors',
                  isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                )}
              >
                {option.targetBranch}
              </button>
            );
          })}
          <button type="button" onClick={() => void onMergeRefsIntoBranch(selectedCommitTargetOption.sources, selectedCommitTargetOption.targetBranch!)} disabled={selectedCommitTargetOption.sources.length === 0 || mergeInProgress} className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50">
            {mergeInProgress ? 'Merging...' : 'Confirm'}
          </button>
        </div>
      ) : null}

      {worktrees.length > 0 && (onSwitchToWorktree || onRemoveWorktree) ? (
        <div className="pointer-events-auto relative">
          <button type="button" onClick={() => setWorktreeMenuOpen((open) => !open)} className="rounded-full border border-border bg-card/95 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-accent">
            {worktrees.length} {worktrees.length === 1 ? 'Worktree' : 'Worktrees'}
          </button>
          {worktreeMenuOpen ? (
            <div className="absolute bottom-full left-0 mb-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border bg-card p-2">
              {worktrees.map((worktree) => (
                <div key={worktree.path} className="mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30">
                  <div className="min-w-0">
                    <div className="truncate text-xs font-medium text-foreground" title={worktree.path}>
                      {isOtherWorktree(worktree, currentRepoPath) ? worktreeShortLabel(worktree.path) : 'This window'}
                    </div>
                    <div className="truncate text-[11px] text-muted-foreground">
                      {worktree.branchName ?? 'detached'} • {worktree.headSha.slice(0, 7)}
                    </div>
                  </div>
                  {isOtherWorktree(worktree, currentRepoPath) ? (
                    <div className="flex items-center gap-1">
                      {onSwitchToWorktree ? (
                        <button type="button" onClick={() => { setWorktreeMenuOpen(false); void onSwitchToWorktree(worktree.path); }} disabled={removeWorktreeInProgress || worktree.pathExists === false} className="rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50">
                          Switch
                        </button>
                      ) : null}
                      {onRemoveWorktree ? (
                        <button type="button" onClick={() => void onRemoveWorktree(worktree.path, worktree.isPrunable)} disabled={removeWorktreeInProgress} className="rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50">
                          {removeWorktreeInProgress ? '...' : 'Remove'}
                        </button>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
