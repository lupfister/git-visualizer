import React, { memo, useMemo } from 'react';
import { X } from 'lucide-react';
import type { Branch, BranchCommitPreview, DirectCommit, MergeNode } from '../../../types';
import type { BranchRenderLayout } from '../core/MapSvg.types';

type NewBranchDialogState = {
  nodeId: string;
  stashIndex?: number;
};

type BranchTimingSummary = {
  parentName: string;
  forkTimeX: number;
};

type NodeDragHighlight = {
  branchName: string;
  centerX: number;
};

type Props = {
  nodeDragHighlights: NodeDragHighlight[];
  checkedOutSelectionStroke: string;

  newBranchDialogForNode: NewBranchDialogState | null;
  createBranchFromNodeInProgress: boolean;
  newBranchInputForNodeRef: React.RefObject<HTMLInputElement | null>;
  newBranchNameForNode: string;
  setNewBranchNameForNode: (value: string) => void;
  onCancelNewBranchDialog: () => void;
  onSubmitNewBranchDialog: () => void;

  commitDialogOpen: boolean;
  commitInProgress: boolean;
  commitMessageRef: React.RefObject<HTMLTextAreaElement | null>;
  commitMessageDraft: string;
  setCommitMessageDraft: (value: string) => void;
  onCommitMessageKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onCancelCommitDialog: () => void;
  onConfirmCommit: () => void;

  deleteConfirmOpen: boolean;
  deleteSelectionItems: string[];
  selectedDeletableBranchNames: string[];
  deleteInProgress: boolean;
  deletableSelectionCount: number;
  onCancelDeleteConfirm: () => void;
  onConfirmDeleteSelection: () => void;

  showLineageDebug: boolean;
  onCloseLineageDebug: () => void;
  sortedNodes: MergeNode[];
  defaultBranch: string;
  mergedBranchByHeadSha: Map<string, Branch>;
  activeBranches: Branch[];
  sortedDirectCommits: DirectCommit[];
  renderParentBranchName: (branch: Branch) => string;
  sortedConcreteBranchPreviews: (branchName: string) => BranchCommitPreview[];
  freshCopyBranchNames: Set<string>;
  getBranchRenderLayout: (branch: Branch) => BranchRenderLayout;
  getBranchTimingSummary: (branchName: string) => BranchTimingSummary | null;
  commitXForSha: (sha?: string) => number | null;

  errorPanelRef: React.RefObject<HTMLDivElement | null>;
  errorPanelOpen: boolean;
  onCloseErrorPanel: () => void;
  staleBranches: Branch[];
  fmtRelativeDate: (dateStr: string) => string;
};

type BranchLine = {
  name: string;
  fromLabel: string | null;
  commits: Array<{
    sha: string;
    annotations: string[];
  }>;
  mergedTo: string | null;
  debugLayout?: {
    forkY: number;
    startX: number;
    lanePosX: number;
    parentName: string;
    forkTimeX: number;
    createdFromSha: string;
    divergedFromSha: string;
    commitXCreated: number | null;
    commitXDiverged: number | null;
  };
};

function sha7(sha: string): string {
  if (sha === 'WORKING_TREE') return '*uncommitted*';
  if (sha.startsWith('STASH:')) return `*stash:${sha.slice('STASH:'.length)}*`;
  return /^[0-9a-f]{7,40}$/i.test(sha) ? sha.slice(0, 7) : sha;
}

function buildLineageLines(args: {
  sortedNodes: MergeNode[];
  defaultBranch: string;
  mergedBranchByHeadSha: Map<string, Branch>;
  activeBranches: Branch[];
  sortedDirectCommits: DirectCommit[];
  renderParentBranchName: (branch: Branch) => string;
  sortedConcreteBranchPreviews: (branchName: string) => BranchCommitPreview[];
  freshCopyBranchNames: Set<string>;
  getBranchRenderLayout: (branch: Branch) => BranchRenderLayout;
  getBranchTimingSummary: (branchName: string) => BranchTimingSummary | null;
  commitXForSha: (sha?: string) => number | null;
}): BranchLine[] {
  const {
    sortedNodes,
    defaultBranch,
    mergedBranchByHeadSha,
    activeBranches,
    sortedDirectCommits,
    renderParentBranchName,
    sortedConcreteBranchPreviews,
    freshCopyBranchNames,
    getBranchRenderLayout,
    getBranchTimingSummary,
    commitXForSha,
  } = args;

  const mergedHeadToMergeCommit = new Map<string, { mergeSha: string; targetBranch: string; prNumber: number | null }>();
  for (const node of sortedNodes) {
    const mergedParents = node.parentShas?.slice(1) ?? [];
    for (const parentSha of mergedParents) {
      if (!parentSha) continue;
      mergedHeadToMergeCommit.set(parentSha, {
        mergeSha: node.fullSha,
        targetBranch: node.targetBranch ?? defaultBranch,
        prNumber: node.prNumber,
      });
    }
  }

  const mergeInfoByMainSha = new Map<string, { mergedShas: string[]; mergedBranches: string[] }>();
  for (const node of sortedNodes) {
    const mergedParents = node.parentShas?.slice(1) ?? [];
    if (mergedParents.length === 0) continue;
    const mergedBranches: string[] = [];
    for (const parentSha of mergedParents) {
      const branch = mergedBranchByHeadSha.get(parentSha);
      if (branch) mergedBranches.push(branch.name);
    }
    mergeInfoByMainSha.set(node.fullSha, {
      mergedShas: mergedParents,
      mergedBranches,
    });
  }

  const forkAnnotations = new Map<string, string[]>();
  const addForkAnnotation = (branchName: string, sha: string, childName: string) => {
    const key = `${branchName}::${sha}`;
    const existing = forkAnnotations.get(key) ?? [];
    existing.push(childName);
    forkAnnotations.set(key, existing);
  };

  for (const branch of activeBranches) {
    const parentName = renderParentBranchName(branch);
    const forkSha = branch.divergedFromSha ?? branch.createdFromSha;
    if (forkSha) addForkAnnotation(parentName, forkSha, branch.name);
  }

  const lines: BranchLine[] = [];

  {
    const commits: BranchLine['commits'] = [];
    for (const commit of sortedDirectCommits) {
      const annotations: string[] = [];
      const mergeInfo = mergeInfoByMainSha.get(commit.fullSha);
      if (mergeInfo) {
        if (mergeInfo.mergedBranches.length > 0) {
          annotations.push(`merge from ${mergeInfo.mergedBranches.join(', ')}`);
        } else {
          annotations.push(`merge from ${mergeInfo.mergedShas.map(sha7).join(', ')}`);
        }
      }
      const forkKey = `${defaultBranch}::${commit.fullSha}`;
      const forkedChildren = forkAnnotations.get(forkKey);
      if (forkedChildren && forkedChildren.length > 0) {
        annotations.push(`fork → ${forkedChildren.join(', ')}`);
      }
      commits.push({ sha: commit.fullSha, annotations });
    }
    lines.push({ name: defaultBranch, fromLabel: null, commits, mergedTo: null });
  }

  for (const branch of activeBranches) {
    const parentName = renderParentBranchName(branch);
    const forkSha = branch.divergedFromSha ?? branch.createdFromSha;
    const fromLabel = forkSha ? `from ${sha7(forkSha)} on ${parentName}` : `from ${parentName}`;

    const previews = sortedConcreteBranchPreviews(branch.name);
    const commits: BranchLine['commits'] = [];
    for (const commit of previews) {
      const annotations: string[] = [];
      const forkKey = `${branch.name}::${commit.fullSha}`;
      const forkedChildren = forkAnnotations.get(forkKey);
      if (forkedChildren && forkedChildren.length > 0) {
        annotations.push(`fork → ${forkedChildren.join(', ')}`);
      }
      commits.push({ sha: commit.fullSha, annotations });
    }

    let mergedTo: string | null = null;
    const isMerged = branch.commitsAhead === 0 && !freshCopyBranchNames.has(branch.name);
    if (isMerged) {
      const mergeTarget = mergedHeadToMergeCommit.get(branch.headSha);
      if (mergeTarget) {
        mergedTo = `merged to ${sha7(mergeTarget.mergeSha)} on ${mergeTarget.targetBranch}${
          mergeTarget.prNumber != null ? ` (PR #${mergeTarget.prNumber})` : ''
        }`;
      } else {
        mergedTo = `merged to ${parentName}`;
      }
    }

    const layout = getBranchRenderLayout(branch);
    const timing = getBranchTimingSummary(branch.name);
    lines.push({
      name: branch.name,
      fromLabel,
      commits,
      mergedTo,
      debugLayout: {
        forkY: Math.round(layout.forkY),
        startX: Math.round(layout.startX),
        lanePosX: Math.round(layout.lanePosX),
        parentName: timing?.parentName ?? '?',
        forkTimeX: Math.round(timing?.forkTimeX ?? 0),
        createdFromSha: branch.createdFromSha?.slice(0, 7) ?? 'null',
        divergedFromSha: branch.divergedFromSha?.slice(0, 7) ?? 'null',
        commitXCreated: branch.createdFromSha ? commitXForSha(branch.createdFromSha) : null,
        commitXDiverged: branch.divergedFromSha ? commitXForSha(branch.divergedFromSha) : null,
      },
    });
  }

  return lines;
}

function MapSvgOverlaysLayerImpl({
  nodeDragHighlights,
  checkedOutSelectionStroke,
  newBranchDialogForNode,
  createBranchFromNodeInProgress,
  newBranchInputForNodeRef,
  newBranchNameForNode,
  setNewBranchNameForNode,
  onCancelNewBranchDialog,
  onSubmitNewBranchDialog,
  commitDialogOpen,
  commitInProgress,
  commitMessageRef,
  commitMessageDraft,
  setCommitMessageDraft,
  onCommitMessageKeyDown,
  onCancelCommitDialog,
  onConfirmCommit,
  deleteConfirmOpen,
  deleteSelectionItems,
  selectedDeletableBranchNames,
  deleteInProgress,
  deletableSelectionCount,
  onCancelDeleteConfirm,
  onConfirmDeleteSelection,
  showLineageDebug,
  onCloseLineageDebug,
  sortedNodes,
  defaultBranch,
  mergedBranchByHeadSha,
  activeBranches,
  sortedDirectCommits,
  renderParentBranchName,
  sortedConcreteBranchPreviews,
  freshCopyBranchNames,
  getBranchRenderLayout,
  getBranchTimingSummary,
  commitXForSha,
  errorPanelRef,
  errorPanelOpen,
  onCloseErrorPanel,
  staleBranches,
  fmtRelativeDate,
}: Props) {
  const lineageLines = useMemo(
    () =>
      buildLineageLines({
        sortedNodes,
        defaultBranch,
        mergedBranchByHeadSha,
        activeBranches,
        sortedDirectCommits,
        renderParentBranchName,
        sortedConcreteBranchPreviews,
        freshCopyBranchNames,
        getBranchRenderLayout,
        getBranchTimingSummary,
        commitXForSha,
      }),
    [
      sortedNodes,
      defaultBranch,
      mergedBranchByHeadSha,
      activeBranches,
      sortedDirectCommits,
      renderParentBranchName,
      sortedConcreteBranchPreviews,
      freshCopyBranchNames,
      getBranchRenderLayout,
      getBranchTimingSummary,
      commitXForSha,
    ],
  );

  return (
    <>
      {nodeDragHighlights.length > 0 && (
        <>
          {nodeDragHighlights.map((highlight) => (
            <div
              key={highlight.branchName}
              style={{
                position: 'absolute',
                left: highlight.centerX - 44,
                top: 0,
                width: 88,
                bottom: 0,
                background: `${checkedOutSelectionStroke}18`,
                borderLeft: `1.5px dashed ${checkedOutSelectionStroke}55`,
                borderRight: `1.5px dashed ${checkedOutSelectionStroke}55`,
                pointerEvents: 'none',
                zIndex: 6,
              }}
            />
          ))}
          {nodeDragHighlights.map((highlight) => (
            <div
              key={`${highlight.branchName}-label`}
              style={{
                position: 'absolute',
                left: highlight.centerX - 52,
                top: 16,
                width: 104,
                pointerEvents: 'none',
                zIndex: 7,
              }}
              className="text-center"
            >
              <span className="inline-block rounded-lg border border-border/60 bg-card/90 backdrop-blur-sm px-2 py-1 text-[10px] leading-tight text-muted-foreground shadow-sm">
                Drop to move back
                <br />
                <span className="font-medium text-foreground">{highlight.branchName}</span>
              </span>
            </div>
          ))}
        </>
      )}

      {newBranchDialogForNode && (
        <div
          className="absolute inset-0 z-[70] flex items-center justify-center bg-background/70 backdrop-blur-sm p-4"
          onClick={onCancelNewBranchDialog}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="new-branch-dialog-title"
            className="w-full max-w-sm rounded-2xl border border-border bg-card shadow-lg p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <p id="new-branch-dialog-title" className="text-sm font-medium text-foreground">
              {newBranchDialogForNode.stashIndex !== undefined ? 'Move stash to new branch' : 'Move changes to new branch'}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {newBranchDialogForNode.stashIndex !== undefined
                ? "A new branch will be created at the stash's base commit and the stash will be applied as uncommitted changes."
                : 'A new branch will be created at the current HEAD. Your uncommitted changes will follow.'}
            </p>
            <label
              htmlFor="new-branch-name-input"
              className="mt-3 block text-[10px] uppercase tracking-wide text-muted-foreground font-medium"
            >
              Branch name
            </label>
            <input
              id="new-branch-name-input"
              ref={newBranchInputForNodeRef}
              type="text"
              value={newBranchNameForNode}
              onChange={(event) => setNewBranchNameForNode(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && newBranchNameForNode.trim() && !createBranchFromNodeInProgress) {
                  onSubmitNewBranchDialog();
                }
                if (event.key === 'Escape' && !createBranchFromNodeInProgress) {
                  onCancelNewBranchDialog();
                }
              }}
              disabled={createBranchFromNodeInProgress}
              placeholder="e.g. feature/my-changes"
              autoComplete="off"
              spellCheck={false}
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 font-mono"
            />
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onCancelNewBranchDialog}
                disabled={createBranchFromNodeInProgress}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onSubmitNewBranchDialog}
                disabled={createBranchFromNodeInProgress || !newBranchNameForNode.trim()}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
              >
                {createBranchFromNodeInProgress ? 'Creating…' : 'Create branch'}
              </button>
            </div>
          </div>
        </div>
      )}

      {commitDialogOpen && (
        <div
          className="absolute inset-0 z-[70] flex items-center justify-center bg-background/70 backdrop-blur-sm p-4"
          onClick={onCancelCommitDialog}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="commit-dialog-title"
            className="w-full max-w-md rounded-2xl border border-border bg-card shadow-lg p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <p id="commit-dialog-title" className="text-sm font-medium text-foreground">
              Create commit
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Stages all changes in the repository, then commits on your current HEAD.
            </p>
            <label
              htmlFor="commit-message-input"
              className="mt-3 block text-[10px] uppercase tracking-wide text-muted-foreground font-medium"
            >
              Commit message
            </label>
            <textarea
              id="commit-message-input"
              ref={commitMessageRef}
              value={commitMessageDraft}
              onChange={(event) => setCommitMessageDraft(event.target.value)}
              onKeyDown={onCommitMessageKeyDown}
              rows={4}
              disabled={commitInProgress}
              placeholder="Describe your changes"
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y min-h-[5rem] disabled:opacity-50"
            />
            <p className="mt-1 text-[10px] text-muted-foreground">
              ⌘ Enter or Ctrl+Enter to commit
            </p>
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onCancelCommitDialog}
                disabled={commitInProgress}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onConfirmCommit}
                disabled={commitInProgress || !commitMessageDraft.trim()}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
              >
                {commitInProgress ? 'Committing…' : 'Commit'}
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteConfirmOpen && (
        <div className="absolute inset-0 z-[70] flex items-center justify-center bg-background/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-card shadow-lg p-4">
            <p className="text-sm font-medium text-foreground">
              are you sure you want to delete these elements?
            </p>
            <div className="mt-2 flex flex-col gap-1.5">
              {deleteSelectionItems.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-border/50 bg-card px-2.5 py-1.5 text-xs text-muted-foreground leading-5"
                >
                  {item}
                </div>
              ))}
            </div>
            {selectedDeletableBranchNames.length > 0 && (
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Any linked Git worktree that still has one of these branches checked out is removed first, then the branch
                ref is deleted, then <span className="font-mono">git worktree prune</span> runs.
              </p>
            )}
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                onClick={onCancelDeleteConfirm}
                disabled={deleteInProgress}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={onConfirmDeleteSelection}
                disabled={deleteInProgress || deletableSelectionCount === 0}
                className="rounded-lg bg-red-50 dark:bg-red-900/20 px-3 py-1.5 text-xs font-medium text-red-600 dark:text-red-400 transition-colors hover:bg-red-50/80 dark:hover:bg-red-900/30 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {deleteInProgress ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        className={`fixed left-4 top-14 bottom-6 w-[520px] flex flex-col bg-card/90 backdrop-blur-sm rounded-2xl border border-border shadow-lg z-40 transition-all duration-300 ease-in-out ${
          showLineageDebug ? 'translate-x-0 opacity-100' : 'translate-x-[calc(-100%-2rem)] opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 shrink-0">
          <span className="text-sm font-medium text-foreground">Commit Lineage</span>
          <button
            onClick={onCloseLineageDebug}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-2 font-mono text-[11px] leading-relaxed">
          <div className="space-y-0.5 px-4 py-2 select-text">
            {lineageLines.map((line) => (
              <div key={line.name} className="py-2 border-b border-border/30">
                <div className="flex items-baseline gap-1 flex-wrap">
                  <span className="text-foreground font-semibold shrink-0">{line.name}</span>
                  {line.fromLabel && (
                    <span className="text-muted-foreground/50 shrink-0">({line.fromLabel})</span>
                  )}
                  <span className="text-muted-foreground/40 shrink-0">:</span>
                </div>

                <div className="mt-1 text-muted-foreground leading-relaxed break-all">
                  {line.commits.length === 0 ? (
                    <span className="text-muted-foreground/40 italic">no preview commits</span>
                  ) : (
                    line.commits.map((commit, index) => (
                      <span key={commit.sha}>
                        {index > 0 && <span className="text-muted-foreground/30 mx-0.5">{' > '}</span>}
                        <span className="text-foreground">{sha7(commit.sha)}</span>
                        {commit.annotations.map((annotation, annotationIndex) => (
                          <span key={annotationIndex} className="text-amber-600 dark:text-amber-400">
                            ({annotation})
                          </span>
                        ))}
                      </span>
                    ))
                  )}
                  {line.mergedTo && (
                    <>
                      <span className="text-muted-foreground/30 mx-0.5">{' → '}</span>
                      <span className="text-green-600 dark:text-green-400">{line.mergedTo}</span>
                    </>
                  )}
                </div>
                {line.debugLayout && (
                  <div className="mt-1 text-[10px] text-blue-600 dark:text-blue-400">
                    forkY={line.debugLayout.forkY} startX={line.debugLayout.startX} laneX={line.debugLayout.lanePosX} parent={line.debugLayout.parentName} forkTimeX={line.debugLayout.forkTimeX} created={line.debugLayout.createdFromSha} diverged={line.debugLayout.divergedFromSha} cX={line.debugLayout.commitXCreated ?? 'null'} dX={line.debugLayout.commitXDiverged ?? 'null'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={errorPanelRef}
        className={`fixed right-4 top-14 bottom-6 w-72 flex flex-col bg-card/90 backdrop-blur-sm rounded-2xl border border-border shadow-lg z-40 transition-all duration-300 ease-in-out ${
          errorPanelOpen ? 'translate-x-0 opacity-100' : 'translate-x-[110%] opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 shrink-0">
          <span className="text-sm font-medium text-foreground">Branch issues</span>
          <button
            onClick={onCloseErrorPanel}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-2">
          {staleBranches.length > 0 && (
            <>
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium px-4 pt-3 pb-1">
                Stale branches
              </p>
              {staleBranches.map((branch) => (
                <div
                  key={branch.name}
                  className="flex items-start gap-2.5 px-4 py-2.5"
                >
                  <span className="mt-0.5 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-foreground truncate">{branch.name}</p>
                    <p className="text-[11px] text-muted-foreground">
                      {branch.lastCommitAuthor ? `${branch.lastCommitAuthor} · ` : ''}{fmtRelativeDate(branch.lastCommitDate)}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export const MapSvgOverlaysLayer = memo(MapSvgOverlaysLayerImpl);
