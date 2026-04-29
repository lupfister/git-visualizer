import type { WorktreeInfo } from '../../types';
import type { BranchGridViewProps } from './LayoutGrid';
import { ChevronDown, FolderGit2, GitBranchPlus, GitMerge } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
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
  hasUncommittedChanges: boolean;
  createBranchFromNodeInProgress: boolean;
  onCommitLocalChanges?: BranchGridViewProps['onCommitLocalChanges'];
  onStageAllChanges?: (() => boolean | void | Promise<void> | Promise<boolean>) | undefined;
  onStashLocalChanges?: BranchGridViewProps['onStashLocalChanges'];
  onPushCurrentBranch?: BranchGridViewProps['onPushCurrentBranch'];
  onPushAllBranches?: BranchGridViewProps['onPushAllBranches'];
  onPushCommitTargets?: BranchGridViewProps['onPushCommitTargets'];
  onMergeRefsIntoBranch?: BranchGridViewProps['onMergeRefsIntoBranch'];
  selectedPushTargets: PushTarget[];
  selectedPushLabel: string;
  canPushCurrentBranch: boolean;
  pushCurrentBranchLabel: string;
  pushableRemoteBranchCount: number;
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
  setNewBranchDialogOpen: (open: boolean) => void;
};

export default function CommitControls({
  selectedVisibleCommitShas,
  commitInProgress,
  commitDisabled,
  stashInProgress,
  stashDisabled,
  pushInProgress,
  hasUncommittedChanges,
  createBranchFromNodeInProgress,
  onCommitLocalChanges,
  onStashLocalChanges,
  onPushCurrentBranch,
  onPushAllBranches,
  onPushCommitTargets,
  onMergeRefsIntoBranch,
  selectedPushTargets,
  selectedPushLabel,
  canPushCurrentBranch,
  pushCurrentBranchLabel,
  pushableRemoteBranchCount,
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
  setNewBranchDialogOpen,
}: Props) {
  const hasSelection = selectedVisibleCommitShas.length > 0;
  const hasWorkingTreeSelection =
    selectedVisibleCommitShas.length > 0 &&
    selectedVisibleCommitShas.every((sha) => sha === 'WORKING_TREE');
  const [actionMenuOpen, setActionMenuOpen] = useState(false);
  const actionMenuRef = useRef<HTMLDivElement | null>(null);
  const worktreeMenuRef = useRef<HTMLDivElement | null>(null);
  const controlClassName =
    'inline-flex h-7 items-center rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50';
  const canCommit = !!onCommitLocalChanges && hasUncommittedChanges && !commitDisabled && !commitInProgress && (!hasSelection || hasWorkingTreeSelection);
  const canPushCurrent = !!onPushCurrentBranch && canPushCurrentBranch && !hasSelection && !pushInProgress;
  const canPushSelected = !!onPushCommitTargets && selectedPushTargets.length > 0 && !pushInProgress;
  const canPushAll = !!onPushAllBranches && pushableRemoteBranchCount >= 2 && !hasSelection && !pushInProgress;
  const canStash = !!onStashLocalChanges && !stashDisabled && !hasSelection && !stashInProgress;
  const pushSelectedLabel = 'Push Selected...';
  const primaryAction =
    canCommit
      ? {
          label: commitInProgress ? 'Committing...' : 'Commit',
          iconSrc: '/icon-commit.svg',
          run: () => setCommitDialogOpen(true),
          disabled: !canCommit,
        }
      : canPushCurrent
        ? {
            label: pushInProgress ? 'Pushing...' : pushCurrentBranchLabel,
            iconSrc: '/icon-pushBranch.svg',
            run: () => void onPushCurrentBranch?.(),
            disabled: !canPushCurrent,
          }
        : canPushSelected
          ? {
              label: pushSelectedLabel,
              iconSrc: '/icon-pushSelected.svg',
              run: () => void onPushCommitTargets?.(selectedPushTargets.map((target) => ({ branchName: target.branchName, targetSha: target.targetSha }))),
              disabled: !canPushSelected,
            }
          : null;

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (actionMenuRef.current?.contains(target)) return;
      if (worktreeMenuRef.current?.contains(target)) return;
      setActionMenuOpen(false);
      setWorktreeMenuOpen(false);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    return () => window.removeEventListener('pointerdown', handlePointerDown);
  }, [setWorktreeMenuOpen]);

  const toolbar = (
    <div className="window-no-drag pointer-events-none z-[60] flex w-full justify-start">
      <div className="pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]">
        <div ref={actionMenuRef} className="relative inline-flex h-7 items-stretch rounded-md border border-border/60 bg-card/95">
          <button
            type="button"
            onClick={() => {
              if (!primaryAction) return;
              primaryAction.run();
            }}
            disabled={!primaryAction || primaryAction.disabled}
            className={cn(controlClassName, 'h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-accent')}
          >
            <span className="inline-flex items-center gap-1.5">
              <img src={primaryAction?.iconSrc ?? '/icon-commit.svg'} alt="" aria-hidden="true" className="h-4.5 w-4.5 shrink-0" />
              <span>{primaryAction?.label ?? 'Commit'}</span>
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActionMenuOpen((open: boolean) => !open)}
            disabled={!primaryAction}
            aria-haspopup="menu"
            aria-expanded={actionMenuOpen}
            className={cn(controlClassName, 'h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-accent')}
            title="More actions"
          >
            <ChevronDown className="h-3.5 w-3.5 shrink-0" />
          </button>
          {actionMenuOpen && primaryAction ? (
            <div className="absolute left-[-1px] top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border/60 bg-card p-1">
              <button
                type="button"
                onClick={() => {
                  setActionMenuOpen(false);
                  setCommitDialogOpen(true);
                }}
                disabled={!canCommit}
                className={cn(controlClassName, 'w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2', !canCommit && 'text-muted-foreground opacity-50')}
              >
                <img src="/icon-commit.svg" alt="" aria-hidden="true" className="mr-1.5 h-4.5 w-4.5 shrink-0" />
                {commitInProgress ? 'Committing...' : 'Commit'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setActionMenuOpen(false);
                  void onPushCurrentBranch?.();
                }}
                disabled={!canPushCurrent}
                className={cn(controlClassName, 'w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2', !canPushCurrent && 'text-muted-foreground opacity-50')}
              >
                <img src="/icon-pushBranch.svg" alt="" aria-hidden="true" className="mr-1.5 h-4.5 w-4.5 shrink-0" />
                {pushInProgress ? 'Pushing...' : pushCurrentBranchLabel}
              </button>
              <button
                type="button"
                onClick={() => {
                  setActionMenuOpen(false);
                  void onPushCommitTargets?.(selectedPushTargets.map((target) => ({ branchName: target.branchName, targetSha: target.targetSha })));
                }}
                disabled={!canPushSelected}
                className={cn(controlClassName, 'w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2', !canPushSelected && 'text-muted-foreground opacity-50')}
                title={selectedPushLabel}
              >
                <img src="/icon-pushSelected.svg" alt="" aria-hidden="true" className="mr-1.5 h-4.5 w-4.5 shrink-0" />
                {pushSelectedLabel}
              </button>
              <button
                type="button"
                onClick={() => {
                  setActionMenuOpen(false);
                  void onPushAllBranches?.();
                }}
                disabled={!canPushAll}
                className={cn(controlClassName, 'w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2', !canPushAll && 'text-muted-foreground opacity-50')}
              >
                <img src="/icon-pushAll.svg" alt="" aria-hidden="true" className="mr-1.5 h-4.5 w-4.5 shrink-0" />
                Push all
              </button>
              <button
                type="button"
                onClick={() => {
                  setActionMenuOpen(false);
                  void onStashLocalChanges?.();
                }}
                disabled={!canStash}
                className={cn(controlClassName, 'w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2', !canStash && 'text-muted-foreground opacity-50')}
              >
                <img src="/icon-stash.svg" alt="" aria-hidden="true" className="mr-1.5 h-4.5 w-4.5 shrink-0" />
                {stashInProgress ? 'Stashing...' : 'Stash'}
              </button>
            </div>
          ) : null}
        </div>

        <div className="flex w-fit flex-nowrap items-center gap-[9px]">
          <button
            type="button"
            onClick={() => setNewBranchDialogOpen(true)}
            disabled={createBranchFromNodeInProgress}
            className={cn(controlClassName, 'pointer-events-auto relative z-10 bg-background')}
          >
            <GitBranchPlus className="mr-1.5 h-3.5 w-3.5 shrink-0" />
            {createBranchFromNodeInProgress ? 'Creating...' : 'New Branch'}
          </button>
        </div>

        {selectedVisibleCommitShas.length > 1 && selectedCommitTargetOption.options.length > 0 && selectedCommitTargetOption.targetBranch && onMergeRefsIntoBranch ? (
          <div className="pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border/60 bg-card/95 px-2 py-1">
          <span className="px-1 text-[11px] font-medium text-muted-foreground">Merge to</span>
          {selectedCommitTargetOption.options.map((option) => {
            const isActive = option.targetBranch === selectedCommitTargetOption.targetBranch;
            return (
              <button
                key={`merge-${option.targetBranch}`}
                type="button"
                onClick={() => setMergeTargetCommitSha(option.targetSha)}
                className={cn(
                  'rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors',
                  isActive ? 'bg-card text-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                )}
              >
                {option.targetBranch}
              </button>
            );
          })}
          <button type="button" onClick={() => void onMergeRefsIntoBranch(selectedCommitTargetOption.sources, selectedCommitTargetOption.targetBranch!)} disabled={selectedCommitTargetOption.sources.length === 0 || mergeInProgress} className="rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50">
            <GitMerge className="mr-1 inline h-3 w-3 shrink-0 align-text-bottom" />
            {mergeInProgress ? 'Merging...' : 'Confirm'}
          </button>
          </div>
        ) : null}

        {worktrees.length > 0 && (onSwitchToWorktree || onRemoveWorktree) ? (
          <div ref={worktreeMenuRef} className="pointer-events-auto relative">
            <button type="button" onClick={() => setWorktreeMenuOpen((open) => !open)} className={controlClassName}>
              <FolderGit2 className="mr-1.5 h-3.5 w-3.5 shrink-0" />
              {worktrees.length} {worktrees.length === 1 ? 'Worktree' : 'Worktrees'}
            </button>
            {worktreeMenuOpen ? (
              <div className="absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-md border border-border/60 bg-card p-1">
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
    </div>
  );

  return toolbar;
}
