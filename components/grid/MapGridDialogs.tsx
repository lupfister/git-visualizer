import { accentCssVars } from '../../lib/worktreeSessions';
import type { WorktreeSession } from '../../lib/worktreeSessions';
import { cn } from './mapGridUtils';
import { GitBranchPlus, GitCommitHorizontal } from 'lucide-react';

type Props = {
  commitDialogOpen: boolean;
  commitMessageDraft: string;
  onCommitMessageDraftChange: (value: string) => void;
  onCommitDialogClose: () => void;
  onCommitConfirm: () => void;
  commitInProgress: boolean;
  deleteConfirmOpen: boolean;
  deleteSelectionItems: string[];
  onDeleteConfirmClose: () => void;
  onDeleteConfirm: () => void;
  deleteInProgress: boolean;
  deletableSelectionCount: number;
  newBranchDialogOpen: boolean;
  newBranchName: string;
  newBranchCreateMode: 'from-selected-node' | 'new-root';
  onNewBranchNameChange: (value: string) => void;
  onNewBranchCreateModeChange: (mode: 'from-selected-node' | 'new-root') => void;
  onNewBranchDialogClose: () => void;
  onNewBranchConfirm: () => void;
  selectedCommitCanCreateBranch: boolean;
  currentCheckedOutCommitCanCreateBranch: boolean;
  createBranchFromNodeInProgress: boolean;
  checkoutPickerOpen: boolean;
  checkoutPickerSummary: string;
  checkoutPickerWorktrees: Array<{ path: string; label: string; detail: string; session: WorktreeSession }>;
  checkoutPickerSelectedPath: string | null;
  onCheckoutPickerSelectPath: (path: string) => void;
  onCheckoutPickerClose: () => void;
  onCheckoutPickerConfirm: () => void;
};

export default function MapGridDialogs({
  commitDialogOpen,
  commitMessageDraft,
  onCommitMessageDraftChange,
  onCommitDialogClose,
  onCommitConfirm,
  commitInProgress,
  deleteConfirmOpen,
  deleteSelectionItems,
  onDeleteConfirmClose,
  onDeleteConfirm,
  deleteInProgress,
  deletableSelectionCount,
  newBranchDialogOpen,
  newBranchName,
  newBranchCreateMode,
  onNewBranchNameChange,
  onNewBranchCreateModeChange,
  onNewBranchDialogClose,
  onNewBranchConfirm,
  selectedCommitCanCreateBranch,
  currentCheckedOutCommitCanCreateBranch,
  createBranchFromNodeInProgress,
  checkoutPickerOpen,
  checkoutPickerSummary,
  checkoutPickerWorktrees,
  checkoutPickerSelectedPath,
  onCheckoutPickerSelectPath,
  onCheckoutPickerClose,
  onCheckoutPickerConfirm,
}: Props) {
  return (
    <>
      {commitDialogOpen ? (
        <div className="absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm" onClick={onCommitDialogClose}>
          <div className="w-full max-w-md rounded-2xl border border-border bg-background p-4" onClick={(event) => event.stopPropagation()}>
            <p className="text-sm font-medium text-foreground">Create commit</p>
            <p className="mt-1 text-xs text-muted-foreground">Stage all changes, then commit on current HEAD.</p>
            <textarea
              value={commitMessageDraft}
              onChange={(event) => onCommitMessageDraftChange(event.target.value)}
              onKeyDown={(event) => {
                if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
                  event.preventDefault();
                  onCommitConfirm();
                }
              }}
              rows={4}
              placeholder="Describe your changes"
              className="mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onCommitDialogClose}
                className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onCommitConfirm}
                disabled={!commitMessageDraft.trim() || commitInProgress}
                aria-busy={commitInProgress ? true : undefined}
                className="inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
              >
                <GitCommitHorizontal
                  className={cn('mr-1.5 h-3.5 w-3.5 shrink-0', commitInProgress && 'toolbar-action-shimmer__lucide')}
                />
                <span className={cn(commitInProgress && 'toolbar-action-shimmer__text')}>Commit</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {deleteConfirmOpen ? (
        <div className="absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm" onClick={onDeleteConfirmClose}>
          <div className="w-full max-w-md rounded-2xl border border-border bg-background p-4" onClick={(event) => event.stopPropagation()}>
            <p className="text-sm font-medium text-foreground">Delete selected items?</p>
            <div className="mt-3 space-y-1.5">
              {deleteSelectionItems.map((item) => (
                <div key={item} className="rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onDeleteConfirmClose}
                className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onDeleteConfirm}
                disabled={deletableSelectionCount === 0 || deleteInProgress}
                className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30"
              >
                {deleteInProgress ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {checkoutPickerOpen ? (
        <div
          className="absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm"
          onClick={onCheckoutPickerClose}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-border bg-background p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="text-sm font-medium text-foreground">Check out in worktree</p>
            <p className="mt-1 text-xs text-muted-foreground">{checkoutPickerSummary}</p>
            <p className="mt-2 text-[10px] uppercase tracking-wide text-muted-foreground font-medium">
              Worktree
            </p>
            <div className="mt-2 max-h-56 space-y-1.5 overflow-auto">
              {checkoutPickerWorktrees.map((entry) => {
                const accent = accentCssVars(entry.session.accentToken);
                const isSelected = checkoutPickerSelectedPath === entry.path;
                return (
                  <button
                    key={entry.path}
                    type="button"
                    onClick={() => onCheckoutPickerSelectPath(entry.path)}
                    className={cn(
                      'flex w-full items-start gap-2 rounded-lg border px-2.5 py-2 text-left transition-colors',
                      isSelected
                        ? 'border-border bg-primary/10'
                        : 'border-border/50 bg-muted/30 hover:bg-muted',
                    )}
                  >
                    <span
                      className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: accent.fg }}
                      aria-hidden
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-xs font-medium text-foreground">{entry.label}</span>
                      <span className="block truncate text-[11px] text-muted-foreground">{entry.detail}</span>
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onCheckoutPickerClose}
                className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onCheckoutPickerConfirm}
                disabled={!checkoutPickerSelectedPath}
                className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
              >
                Check out
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {newBranchDialogOpen ? (
        <div className="absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm" onClick={onNewBranchDialogClose}>
          <div className="w-full max-w-sm rounded-2xl border border-border bg-background p-4" onClick={(event) => event.stopPropagation()}>
            <p className="text-sm font-medium text-foreground">Create branch</p>
            <div className="mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1">
              <button
                type="button"
                onClick={() => onNewBranchCreateModeChange('from-selected-node')}
                className={cn(
                  'rounded-md px-2.5 py-1 text-xs font-medium transition-colors',
                  newBranchCreateMode === 'from-selected-node'
                    ? 'bg-background text-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                )}
              >
                From selection
              </button>
              <button
                type="button"
                onClick={() => onNewBranchCreateModeChange('new-root')}
                className={cn(
                  'rounded-md px-2.5 py-1 text-xs font-medium transition-colors',
                  newBranchCreateMode === 'new-root'
                    ? 'bg-background text-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                )}
              >
                New root
              </button>
            </div>
            {newBranchCreateMode === 'from-selected-node' ? (
              <p className="mt-2 text-xs text-muted-foreground">
                Creates from selected uncommitted changes or stash node.
              </p>
            ) : (
              <p className="mt-2 text-xs text-muted-foreground">
                Creates an orphan branch with unrelated history.
              </p>
            )}
            <input
              value={newBranchName}
              onChange={(event) => onNewBranchNameChange(event.target.value)}
              placeholder="feature/my-changes"
              className="mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onNewBranchDialogClose}
                className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onNewBranchConfirm}
                disabled={
                  !newBranchName.trim() ||
                  createBranchFromNodeInProgress ||
                  (
                    newBranchCreateMode === 'from-selected-node' &&
                    !selectedCommitCanCreateBranch &&
                    !currentCheckedOutCommitCanCreateBranch
                  )
                }
                className={cn(
                  'inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted',
                  'disabled:cursor-not-allowed disabled:opacity-50',
                )}
              >
                <GitBranchPlus className="mr-1.5 h-3.5 w-3.5 shrink-0" />
                {createBranchFromNodeInProgress ? 'Creating...' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
