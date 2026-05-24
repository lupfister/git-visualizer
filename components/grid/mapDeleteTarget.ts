import type { Branch, BranchCommitPreview } from '../../types';

export const parseBranchHeadBranchName = (commitId: string): string | null => {
  const match = /^BRANCH_HEAD:([^:]+):/.exec(commitId);
  return match?.[1] ?? null;
};

export const isEmptyBranchPlaceholder = (
  branchName: string,
  branchByName: Map<string, Branch>,
  branchUniqueAheadCounts: Record<string, number>,
  branchCommitPreviews: Record<string, BranchCommitPreview[]>,
): boolean => {
  const branch = branchByName.get(branchName);
  if (!branch) return false;
  const concretePreviewCount = (branchCommitPreviews[branchName] ?? []).filter(
    (preview) => preview.kind !== 'branch-created',
  ).length;
  if (branch.commitsAhead > 0 || concretePreviewCount > 0) return false;
  const uniqueAhead = branchUniqueAheadCounts[branchName];
  if (uniqueAhead != null && uniqueAhead > 0) return false;
  return true;
};

export const parseDeletableEmptyBranchFromCommitId = (
  commitId: string,
  defaultBranch: string,
  branchByName: Map<string, Branch>,
  branchUniqueAheadCounts: Record<string, number>,
  branchCommitPreviews: Record<string, BranchCommitPreview[]>,
): string | null => {
  const branchName = parseBranchHeadBranchName(commitId);
  if (!branchName || branchName === defaultBranch) return null;
  if (!isEmptyBranchPlaceholder(branchName, branchByName, branchUniqueAheadCounts, branchCommitPreviews)) {
    return null;
  }
  return branchName;
};
