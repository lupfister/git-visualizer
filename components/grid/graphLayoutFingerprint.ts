/** Cheap rolling hash over commit SHAs — O(n), no sort. */
export const hashCommitShaList = (commits: ReadonlyArray<{ fullSha: string }>): string => {
  if (commits.length === 0) return '0:0';
  let hash = commits.length;
  for (const commit of commits) {
    const sha = commit.fullSha;
    for (let index = 0; index < sha.length; index += 1) {
      hash = (Math.imul(hash, 31) + sha.charCodeAt(index)) | 0;
    }
  }
  return `${commits.length}:${hash >>> 0}`;
};

export const buildGraphLayoutFingerprint = (parts: {
  layoutEpoch: number;
  defaultBranch: string;
  checkedOutBranch: string;
  checkedOutHead: string;
  worktreeSessionSignature: string;
  branchRowsSignature: string;
  directCommitFingerprint: string;
  unpushedCommitFingerprint: string;
  mergeNodesSignature: string;
}): string =>
  [
    'layout-v15-fingerprint',
    parts.layoutEpoch,
    parts.defaultBranch,
    parts.checkedOutBranch,
    parts.checkedOutHead,
    parts.worktreeSessionSignature,
    parts.branchRowsSignature,
    parts.directCommitFingerprint,
    parts.unpushedCommitFingerprint,
    parts.mergeNodesSignature,
  ].join('@@');
