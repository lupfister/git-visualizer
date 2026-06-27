import { accentCssVars } from '../../lib/worktreeSessions';
import type { WorktreeSession } from '../../lib/worktreeSessions';
import { cn } from './mapGridUtils';
import { GitBranchPlus, GitCommitHorizontal } from 'lucide-react';

type Props = {
  commitDialogOpen: boolean;
  commitDialogSummary: string;
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
  onNewBranchNameChange: (value: string) => void;
  onNewBranchDialogClose: () => void;
  onNewBranchConfirm: () => void;
  createBranchFromNodeInProgress: boolean;
  createNewWorktree: boolean;
  onCreateNewWorktreeChange: (value: boolean) => void;
  newWorktreeName?: string;
  onNewWorktreeNameChange?: (value: string) => void;
  selectedNodeContextText: string | null;
  isWorktreeSelected?: boolean;
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
  commitDialogSummary,
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
  onNewBranchNameChange,
  onNewBranchDialogClose,
  onNewBranchConfirm,
  createBranchFromNodeInProgress,
  createNewWorktree,
  onCreateNewWorktreeChange,
  newWorktreeName = '',
  onNewWorktreeNameChange,
  selectedNodeContextText,
  isWorktreeSelected,
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
            <p className="mt-1 text-xs text-muted-foreground">{commitDialogSummary}</p>
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
                  strokeWidth={1}
                  className={cn('mr-1.5 h-4 w-4 shrink-0', commitInProgress && 'toolbar-action-shimmer__lucide')}
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
                className="rounded-lg bg-[var(--destructive-bg)] px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-[var(--destructive-bg-hover)] disabled:cursor-not-allowed disabled:opacity-50"
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
            <p className="text-sm font-medium text-foreground">
              {selectedNodeContextText ? 'Create branch from selection' : 'Create new root branch'}
            </p>
            
            <p className="mt-2 text-xs text-muted-foreground">
              {selectedNodeContextText || 'Creates an orphan branch with unrelated history.'}
            </p>

            <input
              value={newBranchName}
              onChange={(event) => onNewBranchNameChange(event.target.value)}
              placeholder="feature/my-changes"
              className="mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />

            {!isWorktreeSelected && (
              <label className="mt-4 flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={createNewWorktree}
                  onChange={(event) => onCreateNewWorktreeChange(event.target.checked)}
                  className="h-4 w-4 rounded border-border bg-background text-primary focus:ring-primary/20 accent-primary"
                />
                <span className="text-xs text-foreground font-medium">
                  Create a new worktree with this branch
                </span>
              </label>
            )}

            {!isWorktreeSelected && createNewWorktree && (
              <div className="mt-4">
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">
                  Worktree Folder Name
                </p>
                <input
                  value={newWorktreeName}
                  onChange={(event) => onNewWorktreeNameChange?.(event.target.value)}
                  placeholder="my-worktree-folder"
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
            )}

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
                  (createNewWorktree && !isWorktreeSelected && !newWorktreeName.trim()) ||
                  createBranchFromNodeInProgress
                }
                className={cn(
                  'inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted',
                  'disabled:cursor-not-allowed disabled:opacity-50',
                )}
              >
                <GitBranchPlus strokeWidth={1} className="mr-1.5 h-4 w-4 shrink-0" />
                {createBranchFromNodeInProgress ? 'Creating...' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
