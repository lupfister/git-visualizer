import React from 'react';
import { ChevronDown, GitCommitHorizontal, Loader2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import type { WorktreeInfo } from '../../types';

type Props = {
  marqueeRect: { left: number; top: number; width: number; height: number } | null;
  isResizeSettling: boolean;
  canvasNodeStrokeWidth: number;
  userSelectionStroke: string;

  holdTimelineForInitialCenter: boolean;
  timelineRevealPhase: 'hidden' | 'visible' | 'fading' | 'done';
  initialRevealFadeMs: number;

  isLoading: boolean;
  controlsReady: boolean;

  hasSelection: boolean;
  onCommitLocalChanges?: ((message: string) => Promise<boolean> | boolean);
  commitDisabled: boolean;
  onStageAllChanges?: (() => Promise<void>) | (() => void);
  onStashLocalChanges?: (() => Promise<void>) | (() => void);
  stashDisabled: boolean;

  resolvedSelectedPushTargets: Array<{
    branchName: string;
    targetSha: string;
    targetIndex: number;
    commitCount: number;
  }>;
  onPushCommitTargets?: ((
    targets: Array<{ branchName: string; targetSha: string }>
  ) => Promise<void> | void);
  onPushAllBranches?: (() => Promise<void>) | (() => void);
  pushableRemoteBranchCount: number;
  onPushCurrentBranch?: (() => Promise<void>) | (() => void);
  canPushCurrentBranch: boolean;

  pushInProgress: boolean;
  mergeInProgress: boolean;
  commitInProgress: boolean;
  stashInProgress: boolean;
  stageInProgress: boolean;

  selectedPushLabel: string;
  selectedPushTitle: string;
  handlePushSelectedTargets: () => Promise<void> | void;
  pushCurrentBranchLabel: string;

  openGitActionMenu: () => void;
  closeGitActionMenu: () => void;
  toggleGitActionMenu: () => void;
  gitActionMenuOpen: boolean;
  gitActionMenuRef: React.RefObject<HTMLDivElement | null>;
  dropdownSpringVariants: any;
  setCommitDialogOpen: (open: boolean) => void;

  worktrees: WorktreeInfo[];
  onRemoveWorktree?: ((path: string, force: boolean) => Promise<void> | void);
  onSwitchToWorktree?: ((path: string) => Promise<void>) | ((path: string) => void);
  worktreeMenuRef: React.RefObject<HTMLDivElement | null>;
  worktreeMenuOpen: boolean;
  toggleWorktreeMenu: () => void;
  closeWorktreeMenu: () => void;
  isOtherWorktree: (wt: WorktreeInfo) => boolean;
  worktreeShortLabel: (path: string) => string;
  removeWorktreeInProgress: boolean;

  selectedVisibleCommitShas: string[];
  commitMergeTargetOptions: Array<{ targetBranch: string; targetSha: string }>;
  selectedCommitTargetOption: { targetBranch: string; targetSha: string } | null;
  targetBranchForSelectedCommit: string | null;
  setMergeTargetCommitSha: (sha: string | null) => void;
  handleMergeSourcesIntoTarget: (sources: string[], targetBranch: string) => Promise<void> | void;
  commitMergeSources: string[];
};

export function MapSvgBottomChrome({
  marqueeRect,
  isResizeSettling,
  canvasNodeStrokeWidth,
  userSelectionStroke,
  holdTimelineForInitialCenter,
  timelineRevealPhase,
  initialRevealFadeMs,
  isLoading,
  controlsReady,
  hasSelection,
  onCommitLocalChanges,
  commitDisabled,
  onStageAllChanges,
  onStashLocalChanges,
  stashDisabled,
  resolvedSelectedPushTargets,
  onPushCommitTargets,
  onPushAllBranches,
  pushableRemoteBranchCount,
  onPushCurrentBranch,
  canPushCurrentBranch,
  pushInProgress,
  mergeInProgress,
  commitInProgress,
  stashInProgress,
  stageInProgress,
  selectedPushLabel,
  selectedPushTitle,
  handlePushSelectedTargets,
  pushCurrentBranchLabel,
  openGitActionMenu,
  closeGitActionMenu,
  toggleGitActionMenu,
  gitActionMenuOpen,
  gitActionMenuRef,
  dropdownSpringVariants,
  setCommitDialogOpen,
  worktrees,
  onRemoveWorktree,
  onSwitchToWorktree,
  worktreeMenuRef,
  worktreeMenuOpen,
  toggleWorktreeMenu,
  closeWorktreeMenu,
  isOtherWorktree,
  worktreeShortLabel,
  removeWorktreeInProgress,
  selectedVisibleCommitShas,
  commitMergeTargetOptions,
  selectedCommitTargetOption,
  targetBranchForSelectedCommit,
  setMergeTargetCommitSha,
  handleMergeSourcesIntoTarget,
  commitMergeSources,
}: Props) {
  return (
    <>
      {marqueeRect && !isResizeSettling && (
        <div
          className="absolute pointer-events-none z-40"
          style={{
            left: marqueeRect.left,
            top: marqueeRect.top,
            width: marqueeRect.width,
            height: marqueeRect.height,
            border: `${canvasNodeStrokeWidth}px solid ${userSelectionStroke}`,
            borderRadius: 0,
            backgroundColor: 'transparent',
          }}
        />
      )}

      {holdTimelineForInitialCenter && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <Loader2 className="size-6 shrink-0 animate-spin text-muted-foreground" aria-hidden />
        </div>
      )}
      {holdTimelineForInitialCenter && timelineRevealPhase === 'fading' && (
        <div
          className="absolute inset-0 pointer-events-none branch-map-fog-recede"
          style={{ '--fog-duration': `${initialRevealFadeMs}ms` } as React.CSSProperties}
        />
      )}

      <div
        data-map-ui
        className="absolute bottom-6 left-6 right-6 z-50 flex flex-col gap-2 pointer-events-none [&_button]:pointer-events-auto"
        onMouseDownCapture={(event) => {
          if ((event.target as Element | null)?.closest('button')) {
            event.stopPropagation();
          }
        }}
      >
        <div
          className="pointer-events-none flex items-center justify-between gap-4"
          style={{
            opacity: isLoading || !controlsReady ? 0 : 1,
            transition: isResizeSettling ? 'none' : 'opacity 0.4s ease',
          }}
        >
          <div className="flex items-center gap-2 min-w-0">
            {(() => {
              const canCommit = !hasSelection && !!onCommitLocalChanges && !commitDisabled;
              const canStage = !hasSelection && !!onStageAllChanges && !commitDisabled;
              const canStash = !hasSelection && !!onStashLocalChanges && !stashDisabled;
              const canPushSelected = resolvedSelectedPushTargets.length > 0 && !!onPushCommitTargets;
              const canPushAll = !hasSelection && !!onPushAllBranches && pushableRemoteBranchCount >= 2 && !canCommit;
              const canPushCurrent = !hasSelection && !!onPushCurrentBranch && canPushCurrentBranch && !canCommit && !canPushAll;

              type GitPrimaryAction =
                | { kind: 'commit'; label: string; title: string; run: () => void }
                | { kind: 'push-selected'; label: string; title: string; run: () => void }
                | { kind: 'push-all'; label: string; title: string; run: () => void }
                | { kind: 'push-current'; label: string; title: string; run: () => void }
                | { kind: 'none'; label: string; title: string; run: () => void };

              const primaryAction: GitPrimaryAction =
                canCommit
                  ? {
                    kind: 'commit',
                    label: commitInProgress ? 'Committing…' : 'Commit',
                    title: 'Stage all changes and commit with your message',
                    run: () => setCommitDialogOpen(true),
                  }
                  : canPushSelected
                    ? {
                      kind: 'push-selected',
                      label: pushInProgress ? 'Pushing...' : selectedPushLabel,
                      title: selectedPushTitle,
                      run: () => void handlePushSelectedTargets(),
                    }
                    : canPushAll
                      ? {
                        kind: 'push-all',
                        label: pushInProgress ? 'Pushing...' : 'Push all',
                        title: 'Push every local branch that still has commits to send',
                        run: () => void onPushAllBranches?.(),
                      }
                      : canPushCurrent
                        ? {
                          kind: 'push-current',
                          label: pushInProgress ? 'Pushing...' : pushCurrentBranchLabel,
                          title: 'Push the branch that is currently checked out',
                          run: () => void onPushCurrentBranch?.(),
                        }
                        : {
                          kind: 'none',
                          label: '',
                          title: 'Open git actions menu',
                          run: openGitActionMenu,
                        };

              const anyActionDisabled =
                pushInProgress || mergeInProgress || commitInProgress || stashInProgress || stageInProgress;

              const hasPossibleGitAction =
                canPushSelected || canPushAll || canPushCurrent || canCommit || canStash || canStage;

              if (!hasPossibleGitAction) return null;

              return (
                <div ref={gitActionMenuRef} className="relative shrink-0 pointer-events-auto">
                  <div className="inline-flex rounded-full border border-border bg-card overflow-hidden">
                    <button
                      type="button"
                      onClick={primaryAction.run}
                      disabled={anyActionDisabled || primaryAction.kind === 'none'}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                      title={primaryAction.title}
                      aria-label={primaryAction.title}
                    >
                      {primaryAction.kind === 'commit' && (
                        <GitCommitHorizontal className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      )}
                      {primaryAction.label}
                    </button>
                    <button
                      type="button"
                      onClick={toggleGitActionMenu}
                      disabled={anyActionDisabled}
                      className="inline-flex items-center px-2 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                      aria-haspopup="menu"
                      aria-expanded={gitActionMenuOpen}
                      title="Open git actions menu"
                      aria-label="Open git actions menu"
                    >
                      <ChevronDown className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    </button>
                  </div>

                  <AnimatePresence>
                    {gitActionMenuOpen && (
                      <motion.div
                        role="menu"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={dropdownSpringVariants}
                        className="absolute bottom-full left-0 mb-2 min-w-[260px] rounded-xl border border-border bg-card/95 backdrop-blur-sm p-2 z-[60] origin-bottom-left transform-gpu"
                      >
                        <div className="flex flex-col gap-1">
                          <button
                            type="button"
                            role="menuitem"
                            onClick={() => {
                              closeGitActionMenu();
                              void handlePushSelectedTargets();
                            }}
                            disabled={anyActionDisabled || !canPushSelected}
                            className="w-full text-left rounded-lg px-2 py-1.5 text-xs text-foreground hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            title={selectedPushTitle}
                            aria-label={selectedPushTitle}
                          >
                            {selectedPushLabel}
                          </button>

                          <button
                            type="button"
                            role="menuitem"
                            onClick={() => {
                              closeGitActionMenu();
                              void onPushAllBranches?.();
                            }}
                            disabled={anyActionDisabled || !canPushAll}
                            className="w-full text-left rounded-lg px-2 py-1.5 text-xs text-foreground hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Push every local branch that still has commits to send"
                            aria-label="Push all branches"
                          >
                            Push all
                          </button>

                          <button
                            type="button"
                            role="menuitem"
                            onClick={() => {
                              closeGitActionMenu();
                              void onPushCurrentBranch?.();
                            }}
                            disabled={anyActionDisabled || !canPushCurrent}
                            className="w-full text-left rounded-lg px-2 py-1.5 text-xs text-foreground hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Push the branch that is currently checked out"
                            aria-label="Push current branch"
                          >
                            {pushCurrentBranchLabel}
                          </button>

                          <button
                            type="button"
                            role="menuitem"
                            onClick={() => {
                              closeGitActionMenu();
                              setCommitDialogOpen(true);
                            }}
                            disabled={anyActionDisabled || !canCommit}
                            className="w-full text-left rounded-lg px-2 py-1.5 text-xs text-foreground hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Stage all changes and commit with your message"
                            aria-label="Commit local changes"
                          >
                            Commit…
                          </button>

                          <button
                            type="button"
                            role="menuitem"
                            onClick={() => {
                              closeGitActionMenu();
                              void onStashLocalChanges?.();
                            }}
                            disabled={anyActionDisabled || !canStash}
                            className="w-full text-left rounded-lg px-2 py-1.5 text-xs text-foreground hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Stash local changes (tracked and untracked)"
                            aria-label="Stash local changes"
                          >
                            Stash
                          </button>

                          <button
                            type="button"
                            role="menuitem"
                            onClick={() => {
                              closeGitActionMenu();
                              void onStageAllChanges?.();
                            }}
                            disabled={anyActionDisabled || !canStage}
                            className="w-full text-left rounded-lg px-2 py-1.5 text-xs text-foreground hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Stage all changes (git add -A)"
                            aria-label="Stage all changes"
                          >
                            Stage all
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })()}

            {!hasSelection &&
              worktrees.length > 0 &&
              (onRemoveWorktree || onSwitchToWorktree) && (
                <div ref={worktreeMenuRef} className="relative shrink-0 pointer-events-auto">
                  <button
                    type="button"
                    onClick={toggleWorktreeMenu}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card pl-3 pr-2 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent"
                    aria-expanded={worktreeMenuOpen}
                    aria-haspopup="menu"
                    title="Git worktrees: additional checkouts of this repository"
                    aria-label={`${worktrees.length} ${worktrees.length === 1 ? 'worktree' : 'worktrees'}, menu`}
                  >
                    <span>
                      {worktrees.length} {worktrees.length === 1 ? 'Worktree' : 'Worktrees'}
                    </span>
                    <ChevronDown
                      className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence>
                    {worktreeMenuOpen && (
                      <motion.div
                        role="menu"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={dropdownSpringVariants}
                        className="absolute bottom-full left-0 mb-2 min-w-[280px] max-w-[min(100vw-3rem,420px)] rounded-xl border border-border bg-card/95 backdrop-blur-sm p-2 z-[60] origin-bottom-left transform-gpu"
                      >
                        <ul className="flex flex-col gap-1 max-h-52 overflow-y-auto">
                          {worktrees.map((wt) => (
                            <li
                              key={wt.path}
                              className="flex items-start gap-2 rounded-lg px-2 py-1.5 text-xs text-foreground hover:bg-muted/50 transition-colors"
                            >
                              <div className="min-w-0 flex-1">
                                <div className="font-medium truncate" title={wt.path}>
                                  {!isOtherWorktree(wt) ? 'This window' : worktreeShortLabel(wt.path)}
                                </div>
                                <div className="text-muted-foreground truncate">
                                  {wt.branchName ?? 'detached'} · {wt.headSha.slice(0, 7)}
                                  {wt.isPrunable && (
                                    <span className="ml-1 text-amber-600 dark:text-amber-400">prunable</span>
                                  )}
                                </div>
                                {wt.pathExists === false && (
                                  <p className="text-[10px] text-amber-600 dark:text-amber-400 mt-1 leading-snug">
                                    Folder was removed; Git still lists this worktree. Remove here or run{' '}
                                    <span className="font-mono">git worktree prune</span> in the repository.
                                  </p>
                                )}
                              </div>
                              {isOtherWorktree(wt) && (
                                <div className="flex shrink-0 items-center gap-1">
                                  {onSwitchToWorktree && (
                                    <button
                                      type="button"
                                      role="menuitem"
                                      className="rounded-lg border border-border px-2 py-1 text-xs font-medium transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                                      disabled={removeWorktreeInProgress || wt.pathExists === false}
                                      title={
                                        wt.pathExists === false
                                          ? 'Folder missing — remove the worktree or run git worktree prune'
                                          : 'Open this repository in this window'
                                      }
                                      aria-label={`Switch app to worktree ${worktreeShortLabel(wt.path)}`}
                                      onClick={() => {
                                        closeWorktreeMenu();
                                        void onSwitchToWorktree(wt.path);
                                      }}
                                    >
                                      Switch
                                    </button>
                                  )}
                                  {onRemoveWorktree && (
                                    <button
                                      type="button"
                                      role="menuitem"
                                      className="rounded-lg border border-border px-2 py-1 text-xs font-medium transition-colors hover:bg-accent disabled:opacity-50"
                                      disabled={removeWorktreeInProgress}
                                      title={
                                        wt.isPrunable
                                          ? 'Remove with --force (stale or broken worktree)'
                                          : 'Remove worktree'
                                      }
                                      aria-label={`Remove worktree ${worktreeShortLabel(wt.path)}`}
                                      onClick={() => void onRemoveWorktree(wt.path, wt.isPrunable)}
                                    >
                                      {removeWorktreeInProgress ? '…' : 'Remove'}
                                    </button>
                                  )}
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

            {selectedVisibleCommitShas.length > 1 &&
              commitMergeTargetOptions.length > 1 &&
              selectedCommitTargetOption &&
              targetBranchForSelectedCommit && (
                <div className="flex items-center gap-2 shrink-0 bg-card border border-border rounded-full pl-3 pr-1 py-1">
                  <span className="text-xs text-muted-foreground font-medium select-none">
                    merge to...
                  </span>
                  <div className="flex items-center gap-1.5">
                    {commitMergeTargetOptions.map((option) => {
                      const isActiveTarget = option.targetBranch === targetBranchForSelectedCommit;
                      return (
                        <button
                          key={`merge-target-${option.targetBranch}`}
                          onClick={() => setMergeTargetCommitSha(option.targetSha)}
                          className={`px-2 py-1 rounded-full text-xs leading-none select-none transition-colors ${
                            isActiveTarget
                              ? 'bg-primary/10 text-foreground'
                              : 'bg-muted/30 text-muted-foreground hover:bg-muted hover:text-foreground'
                          }`}
                          title={`Merge selected commits into ${option.targetBranch}`}
                        >
                          {option.targetBranch}
                        </button>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => void handleMergeSourcesIntoTarget(commitMergeSources, targetBranchForSelectedCommit)}
                    disabled={mergeInProgress || commitMergeSources.length === 0}
                    className="px-2.5 py-1 rounded-full text-xs leading-none select-none transition-opacity text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: userSelectionStroke }}
                    title={
                      commitMergeSources.length > 0
                        ? `Merge ${commitMergeSources.length} commits into ${targetBranchForSelectedCommit}`
                        : 'No eligible source commits to merge'
                    }
                  >
                    Confirm
                  </button>
                </div>
              )}
          </div>

          <div className="flex items-center justify-end gap-4" />
        </div>
      </div>
    </>
  );
}
