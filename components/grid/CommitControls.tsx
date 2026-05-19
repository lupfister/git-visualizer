import type { WorktreeInfo } from '../../types';
import type { BranchGridViewProps } from './LayoutGrid';
import ToolbarActionContent from './ToolbarActionContent';
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
  compactLabels?: boolean;
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
  onAutoCommitLocalChanges?: BranchGridViewProps['onAutoCommitLocalChanges'];
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
  hideMergeControls?: boolean;
};

export default function CommitControls({
  compactLabels = false,
  selectedVisibleCommitShas,
  commitInProgress,
  commitDisabled,
  stashInProgress,
  stashDisabled,
  pushInProgress,
  hasUncommittedChanges,
  createBranchFromNodeInProgress,
  onCommitLocalChanges,
  onAutoCommitLocalChanges,
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
  hideMergeControls = false,
}: Props) {
  const hasSelection = selectedVisibleCommitShas.length > 0;
  const hasWorkingTreeSelection =
    selectedVisibleCommitShas.length > 0 &&
    selectedVisibleCommitShas.every((sha) => sha === 'WORKING_TREE');
  const [actionMenuOpen, setActionMenuOpen] = useState(false);
  const actionMenuRef = useRef<HTMLDivElement | null>(null);
  const worktreeMenuRef = useRef<HTMLDivElement | null>(null);
  const controlClassName =
    'inline-flex h-7 items-center rounded-md border border-border bg-background px-2 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50';

  const showCommitAsPrimary =
    !!(onAutoCommitLocalChanges ?? onCommitLocalChanges) &&
    hasUncommittedChanges &&
    !commitDisabled &&
    (!hasSelection || hasWorkingTreeSelection);

  const showPushCurrentAsPrimary =
    !showCommitAsPrimary &&
    !!onPushCurrentBranch &&
    canPushCurrentBranch &&
    !hasSelection;

  const showPushSelectedAsPrimary =
    !showCommitAsPrimary &&
    !showPushCurrentAsPrimary &&
    !!onPushCommitTargets &&
    selectedPushTargets.length > 0;

  const showPushCurrentInMenu = !!onPushCurrentBranch && canPushCurrentBranch && !hasSelection;
  const showPushSelectedInMenu = !!onPushCommitTargets && selectedPushTargets.length > 0;
  const showPushAllInMenu = !!onPushAllBranches && pushableRemoteBranchCount >= 2 && !hasSelection;
  const showStashInMenu = !!onStashLocalChanges && !stashDisabled && !hasSelection;
  const pushSelectedLabel = 'Push Selected...';

  const primaryAction = showCommitAsPrimary
    ? {
        label: 'Commit',
        icon: 'commit' as const,
        run: () => {
          if (onAutoCommitLocalChanges) {
            void onAutoCommitLocalChanges();
            return;
          }
          setCommitDialogOpen(true);
        },
        disabled: commitDisabled || commitInProgress,
        loading: commitInProgress,
      }
    : showPushCurrentAsPrimary
      ? {
          label: pushCurrentBranchLabel,
          icon: 'push-branch' as const,
          run: () => void onPushCurrentBranch?.(),
          disabled: pushInProgress,
          loading: pushInProgress,
        }
      : showPushSelectedAsPrimary
        ? {
            label: pushSelectedLabel,
            icon: 'push-selected' as const,
            run: () =>
              void onPushCommitTargets?.(
                selectedPushTargets.map((target) => ({
                  branchName: target.branchName,
                  targetSha: target.targetSha,
                })),
              ),
            disabled: pushInProgress,
            loading: pushInProgress,
          }
        : null;

  const menuButtonClassName = (enabled: boolean, loading: boolean) =>
    cn(
      controlClassName,
      'w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted',
      !enabled && 'text-foreground opacity-50',
      loading && 'pointer-events-none',
    );

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
        <div ref={actionMenuRef} className="relative inline-flex h-7 items-stretch rounded-md border border-border bg-background">
          <button
            type="button"
            onClick={() => {
              if (!primaryAction) return;
              primaryAction.run();
            }}
            disabled={!primaryAction || primaryAction.disabled}
            aria-busy={primaryAction?.loading ? true : undefined}
            className={cn(controlClassName, 'h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-muted')}
          >
            {primaryAction ? (
              <ToolbarActionContent
                icon={primaryAction.icon}
                label={primaryAction.label}
                loading={primaryAction.loading}
                compactLabels={compactLabels}
              />
            ) : (
              <ToolbarActionContent icon="commit" label="Commit" compactLabels={compactLabels} />
            )}
          </button>
          <button
            type="button"
            onClick={() => setActionMenuOpen((open: boolean) => !open)}
            disabled={!primaryAction || primaryAction.disabled}
            aria-haspopup="menu"
            aria-expanded={actionMenuOpen}
            className={cn(controlClassName, 'h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-muted')}
            title="More actions"
          >
            <ChevronDown className="h-4 w-4 shrink-0" />
          </button>
          {actionMenuOpen && primaryAction ? (
            <div className="absolute left-[-1px] top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border bg-background p-1">
              {onCommitLocalChanges ? (
                <button
                  type="button"
                  onClick={() => {
                    setActionMenuOpen(false);
                    setCommitDialogOpen(true);
                  }}
                  disabled={!showCommitAsPrimary || commitInProgress}
                  aria-busy={commitInProgress ? true : undefined}
                  className={menuButtonClassName(showCommitAsPrimary, commitInProgress)}
                >
                  <ToolbarActionContent
                    icon="commit"
                    label="Write commit"
                    loading={commitInProgress}
                    iconClassName="mr-1.5"
                  />
                </button>
              ) : null}
              {showPushCurrentInMenu ? (
                <button
                  type="button"
                  onClick={() => {
                    setActionMenuOpen(false);
                    void onPushCurrentBranch?.();
                  }}
                  disabled={pushInProgress}
                  aria-busy={pushInProgress ? true : undefined}
                  className={menuButtonClassName(true, pushInProgress)}
                >
                  <ToolbarActionContent
                    icon="push-branch"
                    label={pushCurrentBranchLabel}
                    loading={pushInProgress}
                    iconClassName="mr-1.5"
                  />
                </button>
              ) : null}
              {showPushSelectedInMenu ? (
                <button
                  type="button"
                  onClick={() => {
                    setActionMenuOpen(false);
                    void onPushCommitTargets?.(
                      selectedPushTargets.map((target) => ({
                        branchName: target.branchName,
                        targetSha: target.targetSha,
                      })),
                    );
                  }}
                  disabled={pushInProgress}
                  aria-busy={pushInProgress ? true : undefined}
                  className={menuButtonClassName(true, pushInProgress)}
                  title={selectedPushLabel}
                >
                  <ToolbarActionContent
                    icon="push-selected"
                    label={pushSelectedLabel}
                    loading={pushInProgress}
                    iconClassName="mr-1.5"
                  />
                </button>
              ) : null}
              {showPushAllInMenu ? (
                <button
                  type="button"
                  onClick={() => {
                    setActionMenuOpen(false);
                    void onPushAllBranches?.();
                  }}
                  disabled={pushInProgress}
                  aria-busy={pushInProgress ? true : undefined}
                  className={menuButtonClassName(true, pushInProgress)}
                >
                  <ToolbarActionContent
                    icon="push-all"
                    label="Push all"
                    loading={pushInProgress}
                    iconClassName="mr-1.5"
                  />
                </button>
              ) : null}
              {showStashInMenu ? (
                <button
                  type="button"
                  onClick={() => {
                    setActionMenuOpen(false);
                    void onStashLocalChanges?.();
                  }}
                  disabled={stashInProgress}
                  aria-busy={stashInProgress ? true : undefined}
                  className={menuButtonClassName(true, stashInProgress)}
                >
                  <ToolbarActionContent
                    icon="stash"
                    label="Stash"
                    loading={stashInProgress}
                    iconClassName="mr-1.5"
                  />
                </button>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="flex w-fit flex-nowrap items-center gap-[9px]">
          <button
            type="button"
            onClick={() => setNewBranchDialogOpen(true)}
            disabled={createBranchFromNodeInProgress}
            className={cn(
              controlClassName,
              'pointer-events-auto relative z-10 !bg-background !border-border hover:!bg-muted',
              compactLabels ? 'w-7 justify-center px-0' : '',
            )}
          >
            <GitBranchPlus className={cn('h-[14px] w-[14px] shrink-0', compactLabels ? '' : 'mr-1.5')} />
            {!compactLabels ? (createBranchFromNodeInProgress ? 'Creating...' : 'Branch') : null}
          </button>
        </div>

        {!hideMergeControls && selectedVisibleCommitShas.length > 1 && selectedCommitTargetOption.options.length > 0 && selectedCommitTargetOption.targetBranch && onMergeRefsIntoBranch ? (
          <div className="pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border bg-background px-2 py-1">
          <span className="px-1 text-[11px] font-medium text-foreground">Merge to</span>
          {selectedCommitTargetOption.options.map((option) => {
            const isActive = option.targetBranch === selectedCommitTargetOption.targetBranch;
            return (
              <button
                key={`merge-${option.targetBranch}`}
                type="button"
                onClick={() => setMergeTargetCommitSha(option.targetSha)}
                className={cn(
                  'rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors',
                  isActive ? 'bg-background text-foreground' : 'text-foreground hover:bg-muted hover:text-foreground',
                )}
              >
                {option.targetBranch}
              </button>
            );
          })}
          <button type="button" onClick={() => void onMergeRefsIntoBranch(selectedCommitTargetOption.sources, selectedCommitTargetOption.targetBranch!)} disabled={selectedCommitTargetOption.sources.length === 0 || mergeInProgress} className="rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50">
            <GitMerge className="mr-1 inline h-3 w-3 shrink-0 align-text-bottom" />
            {mergeInProgress ? 'Merging...' : 'Confirm'}
          </button>
          </div>
        ) : null}

        {worktrees.length > 0 && (onSwitchToWorktree || onRemoveWorktree) ? (
          <div ref={worktreeMenuRef} className="pointer-events-auto relative">
            <button type="button" onClick={() => setWorktreeMenuOpen((open) => !open)} className={cn(controlClassName, '!bg-background !border-border hover:!bg-muted')}>
              <FolderGit2 className="mr-1.5 h-[14px] w-[14px] shrink-0" />
              {worktrees.length}
              {!compactLabels ? ` ${worktrees.length === 1 ? 'Worktree' : 'Worktrees'}` : null}
            </button>
            {worktreeMenuOpen ? (
              <div className="absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-md border border-border bg-background p-1">
                {worktrees.map((worktree) => (
                  <div key={worktree.path} className="mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30">
                    <div className="min-w-0">
                      <div className="truncate text-xs font-medium text-foreground" title={worktree.path}>
                        {isOtherWorktree(worktree, currentRepoPath) ? worktreeShortLabel(worktree.path) : 'This window'}
                      </div>
                      <div className="truncate text-[11px] text-foreground">
                        {worktree.branchName ?? 'detached'} • {worktree.headSha.slice(0, 7)}
                      </div>
                    </div>
                    {isOtherWorktree(worktree, currentRepoPath) ? (
                      <div className="flex items-center gap-1">
                        {onSwitchToWorktree ? (
                          <button type="button" onClick={() => { setWorktreeMenuOpen(false); void onSwitchToWorktree(worktree.path); }} disabled={removeWorktreeInProgress || worktree.pathExists === false} className="rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50">
                            Switch
                          </button>
                        ) : null}
                        {onRemoveWorktree ? (
                          <button type="button" onClick={() => void onRemoveWorktree(worktree.path, worktree.isPrunable)} disabled={removeWorktreeInProgress} className="rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50">
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
