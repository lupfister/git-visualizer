import type { BranchCommitPreview } from '../types';
import { isWorkingTreeCommitId } from '../lib/worktreeSessions';

/** Wait after the last detected working-tree change before calling AI. */
export const WORKTREE_DRAFT_DEBOUNCE_MS = 6000;

export type WorktreeDraftStatus = 'idle' | 'pending' | 'ready' | 'error';

export type WorktreeDraftEntry = {
  status: WorktreeDraftStatus;
  commitMessage: string;
  stashMessage: string;
  summaryFingerprint: string;
};

export type WorktreeDraftDisplay = {
  status: WorktreeDraftStatus;
  message: string;
};

export const hashWorktreeSummary = (summary: string): string => {
  const normalized = summary.trim();
  if (!normalized) return '';
  let hash = 2166136261;
  for (let index = 0; index < normalized.length; index += 1) {
    hash ^= normalized.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
};

export const buildWorktreeDraftDisplayMap = (
  draftsByPath: Readonly<Record<string, WorktreeDraftEntry>>,
  pathByWorkingTreeId: Readonly<Record<string, string>>,
): ReadonlyMap<string, WorktreeDraftDisplay> => {
  const map = new Map<string, WorktreeDraftDisplay>();
  for (const [workingTreeId, path] of Object.entries(pathByWorkingTreeId)) {
    const entry = draftsByPath[path];
    if (!entry || entry.status === 'idle') continue;
    map.set(workingTreeId, {
      status: entry.status,
      message: entry.commitMessage.trim(),
    });
  }
  return map;
};

export const applyWorktreeDraftMessagesToPreviews = (
  previews: Record<string, BranchCommitPreview[]>,
  draftsByPath: Readonly<Record<string, WorktreeDraftEntry>>,
  pathByWorkingTreeId: Readonly<Record<string, string>>,
): Record<string, BranchCommitPreview[]> => {
  let changed = false;
  const next: Record<string, BranchCommitPreview[]> = {};
  for (const [branchName, branchPreviews] of Object.entries(previews)) {
    let branchChanged = false;
    const mapped = branchPreviews.map((preview) => {
      if (!isWorkingTreeCommitId(preview.fullSha)) return preview;
      const path = pathByWorkingTreeId[preview.fullSha];
      if (!path) return preview;
      const draft = draftsByPath[path];
      const message = draft?.status === 'ready' ? draft.commitMessage.trim() : '';
      if (message === preview.message.trim()) return preview;
      branchChanged = true;
      return { ...preview, message };
    });
    if (branchChanged) changed = true;
    next[branchName] = branchChanged ? mapped : branchPreviews;
  }
  return changed ? next : previews;
};
