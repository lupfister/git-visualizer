import { invoke } from '@tauri-apps/api/core';
import { isWorkingTreeCommitId } from './worktreeSessions';

export type PreviewStartResult = {
  shortSha: string;
  canonicalUrl: string;
  status: 'started' | 'already_running';
  previewUrl?: string | null;
  gatewayUrl?: string;
  logPath: string;
};

export type PreviewInfo = {
  fullSha: string;
  shortSha: string;
  canonicalUrl: string;
  previewUrl?: string | null;
  gatewayUrl?: string;
  logPath: string;
};

export type PreviewEligibility = {
  eligible: boolean;
  reason?: string | null;
};

export const formatPreviewUrl = (shortSha: string): string => `localhost:${shortSha}`;

export const isPreviewableCommitId = (commitId: string): boolean => {
  if (!commitId || isWorkingTreeCommitId(commitId)) return false;
  if (commitId.startsWith('STASH:')) return false;
  if (commitId.startsWith('BRANCH_HEAD:')) return false;
  return commitId.length >= 7;
};

export const ensureProjectPreviewWorktree = (repoPath: string): Promise<void> =>
  invoke('ensure_project_preview_worktree', { repoPath });

export const removeProjectPreviewWorktree = (repoPath: string): Promise<void> =>
  invoke('remove_project_preview_worktree', { repoPath });

export const getCommitPreviewEligibility = (
  repoPath: string,
  commitSha: string,
): Promise<PreviewEligibility> =>
  invoke<PreviewEligibility>('check_preview_eligibility', { repoPath, commitSha });

export const startCommitPreview = (
  repoPath: string,
  commitSha: string,
): Promise<PreviewStartResult> =>
  invoke<PreviewStartResult>('start_commit_preview', { repoPath, commitSha });

export const stopCommitPreview = (repoPath: string, commitSha: string): Promise<void> =>
  invoke('stop_commit_preview', { repoPath, commitSha });

export const listCommitPreviews = (repoPath: string): Promise<PreviewInfo[]> =>
  invoke<PreviewInfo[]>('list_commit_previews', { repoPath });

export const openCommitPreview = (repoPath: string, commitSha: string): Promise<void> =>
  invoke('open_commit_preview', { repoPath, commitSha });

export const readCommitPreviewLog = (
  repoPath: string,
  commitSha: string,
): Promise<string> => invoke<string>('read_commit_preview_log', { repoPath, commitSha });
