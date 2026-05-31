import { invoke } from '@tauri-apps/api/core';
import type { Branch, MergeNode } from '../types';

export interface RepoInfo {
  name: string;
  path: string;
}

export interface MergeNodesResponse {
  nodes: MergeNode[];
  hasMore: boolean;
}

export type PreviewTarget =
  | { kind: 'commit'; sha: string }
  | {
      kind: 'worktree';
      worktreePath: string;
      headSha: string;
      workingTreeId: string;
    };

export interface PreparePreviewTargetResult {
  previewPath: string;
  targetKind: 'commit' | 'worktree';
  effectiveHeadSha: string;
  overlayApplied: boolean;
  dependencyFilesChanged: boolean;
}

export interface ProjectPreviewConfig {
  installCommand: string;
  runCommand: string;
  lastConfirmedAt: number;
}

export interface ProjectPreviewResult {
  previewPath: string;
  targetId: string;
  url?: string | null;
  status: 'running' | 'exited' | 'installFailed';
  logs: string;
  previewMode: 'web' | 'native';
}

export interface ActiveProjectPreviewTarget {
  previewPath: string;
  targetId: string;
  targetKind: 'commit' | 'worktree';
  effectiveHeadSha: string;
  overlayApplied: boolean;
}

export interface ProjectPreviewLogTail {
  logs: string;
}

export async function getBranches(repoPath: string): Promise<Branch[]> {
  return invoke('get_branches', { repoPath });
}

export async function getMergeNodes(
  repoPath: string,
  branch: string,
  excludeRef: string | null,
  page: number,
  perPage: number
): Promise<MergeNodesResponse> {
  return invoke('get_merge_nodes', { repoPath, branch, excludeRef, page, perPage });
}

export async function getDefaultBranch(repoPath: string): Promise<string> {
  return invoke('get_default_branch', { repoPath });
}

export async function getRepoInfo(repoPath: string): Promise<RepoInfo> {
  return invoke('get_repo_info', { repoPath });
}

export async function preparePreviewTarget(
  repoPath: string,
  target: PreviewTarget
): Promise<PreparePreviewTargetResult> {
  return invoke('prepare_preview_target', { repoPath, target });
}

export async function detectProjectPreviewDefaults(repoPath: string): Promise<Omit<ProjectPreviewConfig, 'lastConfirmedAt'>> {
  return invoke('detect_project_preview_defaults', { repoPath });
}

export async function startProjectPreview(
  repoPath: string,
  target: PreviewTarget,
  config: ProjectPreviewConfig
): Promise<ProjectPreviewResult> {
  return invoke('start_project_preview', { repoPath, target, config });
}

export async function getProjectPreviewStatus(repoPath: string): Promise<ProjectPreviewResult | null> {
  return invoke('get_project_preview_status', { repoPath });
}

export async function getProjectPreviewLogTail(repoPath: string): Promise<ProjectPreviewLogTail> {
  return invoke('get_project_preview_log_tail', { repoPath });
}

export async function getActiveProjectPreviewTarget(repoPath: string): Promise<ActiveProjectPreviewTarget | null> {
  return invoke('get_active_project_preview_target', { repoPath });
}

export async function stopProjectPreview(repoPath: string): Promise<void> {
  return invoke('stop_project_preview', { repoPath });
}
