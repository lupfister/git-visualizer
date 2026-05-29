import type { BranchGridViewProps } from './LayoutGrid';
import { isWorkingTreeCommitId } from '../../lib/worktreeSessions';
import ToolbarActionContent from './ToolbarActionContent';
import { ChevronDown, GitBranchPlus, GitMerge } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { cn } from './mapGridUtils';

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
  createBranchFromNodeInProgress: boolean;
  onCommitLocalChanges?: BranchGridViewProps['onCommitLocalChanges'];
  onAutoCommitLocalChanges?: BranchGridViewProps['onAutoCommitLocalChanges'];
  onStageAllChanges?: (() => boolean | void | Promise<void> | Promise<boolean>) | undefined;
  onStashLocalChanges?: BranchGridViewProps['onStashLocalChanges'];
  onPushAllBranches?: BranchGridViewProps['onPushAllBranches'];
  onPushCommitTargets?: BranchGridViewProps['onPushCommitTargets'];
  onMergeRefsIntoBranch?: BranchGridViewProps['onMergeRefsIntoBranch'];
  selectedPushTargets: PushTarget[];
  selectedPushLabel: string;
  pushableRemoteBranchCount: number;
  selectedCommitTargetOption: SelectedCommitTargetOption;
  mergeInProgress: boolean;
  mergeTargetCommitSha: string | null;
  setMergeTargetCommitSha: (sha: string | null) => void;
  onWriteCommit?: () => void;
  setNewBranchDialogOpen: (open: boolean) => void;
  hideMergeControls?: boolean;
  dirtyWorktreePaths?: string[];
  selectedDirtyWorktreePaths?: string[];
  onOpenPreviewAuth?: () => void | Promise<void>;
  hasAuthLikePreviewFailures?: boolean;
};

export default function CommitControls({
  compactLabels = false,
  selectedVisibleCommitShas,
  commitInProgress,
  commitDisabled,
  stashInProgress,
  stashDisabled,
  pushInProgress,
  createBranchFromNodeInProgress,
  onCommitLocalChanges,
  onAutoCommitLocalChanges,
  onStashLocalChanges,
  onPushAllBranches,
  onPushCommitTargets,
  onMergeRefsIntoBranch,
  selectedPushTargets,
  selectedPushLabel,
  pushableRemoteBranchCount,
  selectedCommitTargetOption,
  mergeInProgress,
  setMergeTargetCommitSha,
  onWriteCommit,
  setNewBranchDialogOpen,
  hideMergeControls = false,
  dirtyWorktreePaths = [],
  selectedDirtyWorktreePaths = [],
  onOpenPreviewAuth,
  hasAuthLikePreviewFailures = false,
}: Props) {
  const hasSelection = selectedVisibleCommitShas.length > 0;
  const hasWorktreeSelection = selectedVisibleCommitShas.some((sha) => isWorkingTreeCommitId(sha));
  const hasAnyDirtyWorktrees = dirtyWorktreePaths.length > 0;
  const stashTargetPaths = selectedDirtyWorktreePaths;
  const canCommitAll = dirtyWorktreePaths.length > 0;
  const canCommitSelected = hasWorktreeSelection && selectedDirtyWorktreePaths.length > 0;
  const showCommitSelectedAsPrimary =
    !!onAutoCommitLocalChanges &&
    !commitDisabled &&
    canCommitSelected;
  const showCommitAllAsPrimary =
    !!onAutoCommitLocalChanges &&
    !commitDisabled &&
    canCommitAll &&
    !showCommitSelectedAsPrimary;
  const showCommitAsPrimary = showCommitAllAsPrimary || showCommitSelectedAsPrimary;
  const commitPrimaryLabel = showCommitSelectedAsPrimary ? 'Commit selected' : 'Commit all';
  const commitTargetPaths = showCommitSelectedAsPrimary ? selectedDirtyWorktreePaths : dirtyWorktreePaths;
  const [actionMenuOpen, setActionMenuOpen] = useState(false);
  const actionMenuRef = useRef<HTMLDivElement | null>(null);
  const controlClassName =
    'inline-flex h-7 items-center rounded-md border border-border bg-background px-2 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50';

  const showWriteCommitInMenu =
    !!onCommitLocalChanges &&
    !!onWriteCommit &&
    hasWorktreeSelection &&
    stashTargetPaths.length > 0;

  const showPushSelectedAsPrimary =
    !showCommitAsPrimary &&
    !!onPushCommitTargets &&
    selectedPushTargets.length > 0;

  const showPushSelectedInMenu = !!onPushCommitTargets && selectedPushTargets.length > 0;
  const showPushAllInMenu = !!onPushAllBranches && pushableRemoteBranchCount >= 2 && !hasSelection;
  const showStashInMenu =
    !!onStashLocalChanges &&
    !stashDisabled &&
    hasWorktreeSelection &&
    stashTargetPaths.length > 0;
  const pushSelectedLabel = 'Push Selected...';
  const showCommitAllInMenu =
    !!onAutoCommitLocalChanges &&
    !commitDisabled &&
    canCommitAll &&
    !showCommitAsPrimary;
  const hasActionsMenu =
    showWriteCommitInMenu ||
    showCommitAllInMenu ||
    showPushSelectedInMenu ||
    showPushAllInMenu ||
    showStashInMenu;

  const primaryAction = showCommitAsPrimary
    ? {
        label: commitPrimaryLabel,
        icon: 'commit' as const,
        run: () => {
          void onAutoCommitLocalChanges?.(commitTargetPaths);
        },
        disabled: commitDisabled || commitInProgress,
        loading: commitInProgress,
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

  const canOpenActionsMenu = Boolean(primaryAction) || hasActionsMenu;

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
      setActionMenuOpen(false);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    return () => window.removeEventListener('pointerdown', handlePointerDown);
  }, []);

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
              <ToolbarActionContent
                icon="commit"
                label={hasAnyDirtyWorktrees ? 'Commit all' : 'Commit'}
                compactLabels={compactLabels}
              />
            )}
          </button>
          <button
            type="button"
            onClick={() => setActionMenuOpen((open: boolean) => !open)}
            disabled={!canOpenActionsMenu || (primaryAction?.disabled ?? false)}
            aria-haspopup="menu"
            aria-expanded={actionMenuOpen}
            className={cn(controlClassName, 'h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-muted')}
            title="More actions"
          >
            <ChevronDown className="h-4 w-4 shrink-0" />
          </button>
          {actionMenuOpen && canOpenActionsMenu ? (
            <div className="absolute left-[-1px] top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border bg-background p-1">
              {showCommitAllInMenu ? (
                <button
                  type="button"
                  onClick={() => {
                    setActionMenuOpen(false);
                    void onAutoCommitLocalChanges?.(dirtyWorktreePaths);
                  }}
                  disabled={commitDisabled || commitInProgress}
                  aria-busy={commitInProgress ? true : undefined}
                  className={menuButtonClassName(!commitDisabled, commitInProgress)}
                >
                  <ToolbarActionContent
                    icon="commit"
                    label="Commit all"
                    loading={commitInProgress}
                    iconClassName="mr-1.5"
                  />
                </button>
              ) : null}
              {showWriteCommitInMenu ? (
                <button
                  type="button"
                  onClick={() => {
                    setActionMenuOpen(false);
                    onWriteCommit();
                  }}
                  disabled={commitInProgress}
                  aria-busy={commitInProgress ? true : undefined}
                  className={menuButtonClassName(true, commitInProgress)}
                >
                  <ToolbarActionContent
                    icon="commit"
                    label="Write commit"
                    loading={commitInProgress}
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
                    void onStashLocalChanges?.(stashTargetPaths);
                  }}
                  disabled={stashInProgress}
                  aria-busy={stashInProgress ? true : undefined}
                  className={menuButtonClassName(true, stashInProgress)}
                >
                  <ToolbarActionContent
                    icon="stash"
                    label="Stash selected..."
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
          {onOpenPreviewAuth ? (
            <button
              type="button"
              onClick={() => void onOpenPreviewAuth()}
              className={cn(
                controlClassName,
                'pointer-events-auto relative z-10 !bg-background !border-border hover:!bg-muted',
                hasAuthLikePreviewFailures ? 'border-amber-500/40 text-amber-600 dark:text-amber-400' : '',
                compactLabels ? 'max-w-[7rem] truncate' : '',
              )}
              title="Open the app in Chrome to log in; preview screenshots will reuse this session"
            >
              {!compactLabels ? 'Preview login' : 'Login'}
            </button>
          ) : null}
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
      </div>
    </div>
  );

  return toolbar;
}
