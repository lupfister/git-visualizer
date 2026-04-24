import type { WorktreeInfo } from '../../types';
import type { BranchGridViewProps } from './LayoutGrid';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
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
  canCreateRootBranch: boolean;
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
  stashInProgress,
  stashDisabled,
  pushInProgress,
  deleteInProgress,
  createBranchFromNodeInProgress,
  onCommitLocalChanges,
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
  canCreateRootBranch,
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
  const [actionMenuOpen, setActionMenuOpen] = useState(false);
  const controlClassName =
    'inline-flex h-7 items-center rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50';
  const canCommit = !!onCommitLocalChanges && !commitDisabled && !hasSelection && !commitInProgress;
  const canPushCurrent = !!onPushCurrentBranch && canPushCurrentBranch && !hasSelection && !pushInProgress;
  const canPushSelected = !!onPushCommitTargets && selectedPushTargets.length > 0 && !pushInProgress;
  const canPushAll = !!onPushAllBranches && pushableRemoteBranchCount >= 2 && !hasSelection && !pushInProgress;
  const canStash = !!onStashLocalChanges && !stashDisabled && !hasSelection && !stashInProgress;
  const pushSelectedLabel = 'Push Selected...';
  const primaryAction =
    canCommit
      ? {
          label: commitInProgress ? 'Committing...' : 'Commit',
          run: () => setCommitDialogOpen(true),
          disabled: !canCommit,
        }
      : canPushCurrent
        ? {
            label: pushInProgress ? 'Pushing...' : pushCurrentBranchLabel,
            run: () => void onPushCurrentBranch?.(),
            disabled: !canPushCurrent,
          }
        : canPushSelected
          ? {
              label: pushSelectedLabel,
              run: () => void onPushCommitTargets?.(selectedPushTargets.map((target) => ({ branchName: target.branchName, targetSha: target.targetSha }))),
              disabled: !canPushSelected,
            }
          : null;

  return (
    <div className="pointer-events-none absolute bottom-2.5 left-2.5 right-2.5 z-[70] flex flex-wrap items-center gap-2">
      <div className="pointer-events-auto relative inline-flex items-stretch rounded-md bg-background border border-border/60">
        <button
          type="button"
          onClick={() => {
            if (!primaryAction) return;
            primaryAction.run();
          }}
          disabled={!primaryAction || primaryAction.disabled}
          className={cn(controlClassName, 'rounded-r-none border-0 bg-transparent hover:bg-accent')}
        >
          {primaryAction?.label ?? 'No action'}
        </button>
        <button
          type="button"
          onClick={() => setActionMenuOpen((open: boolean) => !open)}
          disabled={!primaryAction}
          aria-haspopup="menu"
          aria-expanded={actionMenuOpen}
          className={cn(controlClassName, 'rounded-l-none border-0 bg-transparent hover:bg-accent')}
          title="More actions"
        >
          <ChevronDown className="h-3.5 w-3.5 shrink-0" />
        </button>
        {actionMenuOpen && primaryAction ? (
          <div className="absolute bottom-full left-0 mb-2 min-w-56 overflow-hidden rounded-md border border-border/60 bg-background p-1">
            <button
              type="button"
              onClick={() => {
                setActionMenuOpen(false);
                setCommitDialogOpen(true);
              }}
              disabled={!canCommit}
              className={cn(controlClassName, 'w-full justify-start rounded-md border-0 bg-transparent px-2', !canCommit && 'text-muted-foreground opacity-50')}
            >
              {commitInProgress ? 'Committing...' : 'Commit'}
            </button>
            <button
              type="button"
              onClick={() => {
                setActionMenuOpen(false);
                void onPushCurrentBranch?.();
              }}
              disabled={!canPushCurrent}
              className={cn(controlClassName, 'w-full justify-start rounded-md border-0 bg-transparent px-2', !canPushCurrent && 'text-muted-foreground opacity-50')}
            >
              {pushInProgress ? 'Pushing...' : pushCurrentBranchLabel}
            </button>
            <button
              type="button"
              onClick={() => {
                setActionMenuOpen(false);
                void onPushCommitTargets?.(selectedPushTargets.map((target) => ({ branchName: target.branchName, targetSha: target.targetSha })));
              }}
              disabled={!canPushSelected}
              className={cn(controlClassName, 'w-full justify-start rounded-md border-0 bg-transparent px-2', !canPushSelected && 'text-muted-foreground opacity-50')}
              title={selectedPushLabel}
            >
              {pushSelectedLabel}
            </button>
            <button
              type="button"
              onClick={() => {
                setActionMenuOpen(false);
                void onPushAllBranches?.();
              }}
              disabled={!canPushAll}
              className={cn(controlClassName, 'w-full justify-start rounded-md border-0 bg-transparent px-2', !canPushAll && 'text-muted-foreground opacity-50')}
            >
              Push all
            </button>
            <button
              type="button"
              onClick={() => {
                setActionMenuOpen(false);
                void onStashLocalChanges?.();
              }}
              disabled={!canStash}
              className={cn(controlClassName, 'w-full justify-start rounded-md border-0 bg-transparent px-2', !canStash && 'text-muted-foreground opacity-50')}
            >
              {stashInProgress ? 'Stashing...' : 'Stash'}
            </button>
          </div>
        ) : null}
      </div>

      {deletableSelectionCount > 0 ? (
        <button type="button" onClick={() => setDeleteConfirmOpen(true)} disabled={!onDeleteSelection || deleteInProgress} className={cn(controlClassName, 'bg-background text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20')}>
            {deleteInProgress ? 'Deleting...' : 'Delete selection'}
        </button>
      ) : null}
      <button type="button" onClick={() => setNewBranchDialogOpen(true)} disabled={(!onCreateBranchFromNode && !canCreateRootBranch) || createBranchFromNodeInProgress} className={cn(controlClassName, 'bg-background')}>
          {createBranchFromNodeInProgress ? 'Creating...' : 'Create Branch'}
      </button>

      {selectedVisibleCommitShas.length > 1 && selectedCommitTargetOption.options.length > 0 && selectedCommitTargetOption.targetBranch && onMergeRefsIntoBranch ? (
        <div className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border/60 bg-card/95 px-2 py-1">
          <span className="px-1 text-[11px] font-medium text-muted-foreground">merge to</span>
          {selectedCommitTargetOption.options.map((option) => {
            const isActive = option.targetBranch === selectedCommitTargetOption.targetBranch;
            return (
              <button
                key={`merge-${option.targetBranch}`}
                type="button"
                onClick={() => setMergeTargetCommitSha(option.targetSha)}
                className={cn(
                  'rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium transition-colors',
                  isActive ? 'bg-card text-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                )}
              >
                {option.targetBranch}
              </button>
            );
          })}
          <button type="button" onClick={() => void onMergeRefsIntoBranch(selectedCommitTargetOption.sources, selectedCommitTargetOption.targetBranch!)} disabled={selectedCommitTargetOption.sources.length === 0 || mergeInProgress} className="rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50">
            {mergeInProgress ? 'Merging...' : 'Confirm'}
          </button>
        </div>
      ) : null}

      {worktrees.length > 0 && (onSwitchToWorktree || onRemoveWorktree) ? (
        <div className="pointer-events-auto relative">
          <button type="button" onClick={() => setWorktreeMenuOpen((open) => !open)} className={controlClassName}>
            {worktrees.length} {worktrees.length === 1 ? 'Worktree' : 'Worktrees'}
          </button>
          {worktreeMenuOpen ? (
            <div className="absolute bottom-full left-0 mb-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border/60 bg-card p-2">
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
                        <button type="button" onClick={() => { setWorktreeMenuOpen(false); void onSwitchToWorktree(worktree.path); }} disabled={removeWorktreeInProgress || worktree.pathExists === false} className="rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50">
                          Switch
                        </button>
                      ) : null}
                      {onRemoveWorktree ? (
                        <button type="button" onClick={() => void onRemoveWorktree(worktree.path, worktree.isPrunable)} disabled={removeWorktreeInProgress} className="rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50">
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
