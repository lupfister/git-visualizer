import type { BranchCommitPreview } from '../types';
import { isWorkingTreeCommitId } from '../lib/worktreeSessions';

/** Wait after the last detected working-tree change before calling AI. */
export const WORKTREE_DRAFT_DEBOUNCE_MS = 6000;

export const WORKTREE_SUMMARY_STATUS_MARKER = '--- status ---';

export const DEFAULT_DIRTY_WORKTREE_FALLBACK = 'Uncommitted changes';

/** Shown on dirty worktree nodes while the AI title is not ready yet. */
export const DIRTY_WORKTREE_BUILDING_LABEL = 'Building';

export type WorktreeDraftStatus = 'idle' | 'pending' | 'ready' | 'error';

export type WorktreeDraftEntry = {
  status: WorktreeDraftStatus;
  commitMessage: string;
  stashMessage: string;
  /** Fingerprint of the current working tree (from git summary). */
  summaryFingerprint: string;
  /** Fingerprint the AI titles were generated for; may lag during regen. */
  messageFingerprint: string;
  fallbackLabel: string;
};

export type WorktreeDraftDisplay = {
  status: WorktreeDraftStatus;
  message: string;
  fallbackLabel: string;
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

const basenameFromPath = (path: string): string => {
  const normalized = path.replace(/\\/g, '/');
  const parts = normalized.split('/');
  return parts[parts.length - 1] || path;
};

const parseStatusFileNames = (statusSection: string): string[] => {
  const names: string[] = [];
  for (const rawLine of statusSection.split('\n')) {
    const line = rawLine.replace(/\r$/, '');
    if (line.length < 4) continue;
    const path = line.replace(/^.{2}\s+/, '').trim();
    if (!path) continue;
    let normalizedPath = path;
    if (normalizedPath.startsWith('"') && normalizedPath.endsWith('"')) {
      normalizedPath = normalizedPath.slice(1, -1);
    }
    names.push(basenameFromPath(normalizedPath));
  }
  return names;
};

/** Short git-derived label for dirty nodes before AI titles are ready. */
export const formatWorktreeSummaryFallback = (summary: string): string => {
  const trimmed = summary.trim();
  if (!trimmed) return DEFAULT_DIRTY_WORKTREE_FALLBACK;

  const statusMarkerIndex = trimmed.indexOf(WORKTREE_SUMMARY_STATUS_MARKER);
  const statusSection = statusMarkerIndex >= 0
    ? trimmed.slice(statusMarkerIndex + WORKTREE_SUMMARY_STATUS_MARKER.length).trim()
    : '';
  const statSection = statusMarkerIndex >= 0
    ? trimmed.slice(0, statusMarkerIndex).trim()
    : trimmed;

  const fileNames = [...new Set(parseStatusFileNames(statusSection))].sort((left, right) =>
    left.localeCompare(right),
  );
  if (fileNames.length === 1) return `Update ${fileNames[0]}`;
  if (fileNames.length === 2) return `Update ${fileNames[0]} and ${fileNames[1]}`;
  if (fileNames.length > 2) return `Update ${fileNames[0]} and ${fileNames.length - 1} others`;

  const statLines = statSection.split('\n').map((line) => line.trim()).filter(Boolean);
  const summaryLine = statLines.find((line) => /files? changed/.test(line));
  const fileStatLine = statLines.find((line) => line.includes('|'));
  if (fileStatLine) {
    const filePart = fileStatLine.split('|')[0]?.trim();
    if (filePart) return `Update ${basenameFromPath(filePart)}`;
  }
  if (summaryLine) return summaryLine;

  return DEFAULT_DIRTY_WORKTREE_FALLBACK;
};

export const resolveWorktreeDraftDisplayLabel = (display: WorktreeDraftDisplay): string => {
  const aiMessage = display.message.trim();
  if (aiMessage) return aiMessage;
  return DIRTY_WORKTREE_BUILDING_LABEL;
};

export const resolvePreparedCommitMessage = (entry: WorktreeDraftEntry | undefined): string | null => {
  if (!entry) return null;
  const aiMessage = entry.commitMessage.trim();
  const messageMatchesTree = entry.messageFingerprint === entry.summaryFingerprint;
  if (aiMessage && messageMatchesTree && (entry.status === 'ready' || entry.status === 'pending')) {
    return aiMessage;
  }
  const fallback = entry.fallbackLabel.trim();
  return fallback || null;
};

export const resolvePreparedStashMessage = (entry: WorktreeDraftEntry | undefined): string | null => {
  if (!entry) return null;
  const aiMessage = (entry.stashMessage || entry.commitMessage).trim();
  const messageMatchesTree = entry.messageFingerprint === entry.summaryFingerprint;
  if (aiMessage && messageMatchesTree && (entry.status === 'ready' || entry.status === 'pending')) {
    return aiMessage;
  }
  const fallback = entry.fallbackLabel.trim();
  if (!fallback) return null;
  return fallback.startsWith('WIP:') ? fallback : `WIP: ${fallback}`;
};

export const draftNeedsRegeneration = (entry: WorktreeDraftEntry | undefined): boolean => {
  if (!entry) return true;
  if (entry.messageFingerprint !== entry.summaryFingerprint) return true;
  if (entry.status === 'error') return true;
  if (entry.status === 'ready' && entry.commitMessage.trim()) return false;
  return entry.status !== 'ready';
};

/** Prior AI title to pass as context when the working tree changed since it was written. */
export const resolvePreviousCommitTitleForRegeneration = (
  entry: WorktreeDraftEntry | undefined,
): string | undefined => {
  if (!entry) return undefined;
  const title = entry.commitMessage.trim();
  if (!title) return undefined;
  if (entry.messageFingerprint === entry.summaryFingerprint && entry.status === 'ready') {
    return undefined;
  }
  return title;
};

export const resolvePreviousStashTitleForRegeneration = (
  entry: WorktreeDraftEntry | undefined,
): string | undefined => {
  if (!entry) return undefined;
  const title = (entry.stashMessage || entry.commitMessage).trim();
  if (!title) return undefined;
  if (entry.messageFingerprint === entry.summaryFingerprint && entry.status === 'ready') {
    return undefined;
  }
  return title;
};

export const buildWorktreeDraftDisplayMap = (
  draftsByPath: Readonly<Record<string, WorktreeDraftEntry>>,
  pathByWorkingTreeId: Readonly<Record<string, string>>,
  dirtyWorkingTreeIds: readonly string[] = [],
): ReadonlyMap<string, WorktreeDraftDisplay> => {
  const map = new Map<string, WorktreeDraftDisplay>();

  for (const workingTreeId of dirtyWorkingTreeIds) {
    const path = pathByWorkingTreeId[workingTreeId];
    if (!path) continue;
    const entry = draftsByPath[path];
    map.set(workingTreeId, {
      status: entry?.status ?? 'pending',
      message: entry?.commitMessage.trim() ?? '',
      fallbackLabel: entry?.fallbackLabel.trim() || DEFAULT_DIRTY_WORKTREE_FALLBACK,
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
      const message = draft ? resolveWorktreeDraftDisplayLabel({
        status: draft.status,
        message: draft.commitMessage.trim(),
        fallbackLabel: draft.fallbackLabel,
      }) : '';
      if (message === preview.message.trim()) return preview;
      branchChanged = true;
      return { ...preview, message };
    });
    if (branchChanged) changed = true;
    next[branchName] = branchChanged ? mapped : branchPreviews;
  }
  return changed ? next : previews;
};
