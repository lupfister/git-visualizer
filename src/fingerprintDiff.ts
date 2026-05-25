export type FingerprintParts = {
  defaultBranch: string;
  headSha: string;
  upstreamSha: string;
  hasUncommittedChanges: boolean;
  branchRefSig: string;
  worktreeSig: string;
  stashSig: string;
};

export type FingerprintPatchSegment = 'dirty' | 'stash' | 'worktree' | 'upstream';

export type GraphDeltaScope = 'head' | 'branches' | 'full-graph';

export type BranchRefEntry = {
  headSha: string;
  commitsAhead: number;
  unpushedCommits: number;
  remoteSyncStatus: string;
};

export function parseRepoFingerprint(raw: string | null | undefined): FingerprintParts | null {
  if (!raw) return null;
  const parts = raw.split('@@');
  if (parts.length < 7) return null;
  return {
    defaultBranch: parts[0] ?? '',
    headSha: parts[1] ?? '',
    upstreamSha: parts[2] ?? '',
    hasUncommittedChanges: parts[3] === '1',
    branchRefSig: parts[4] ?? '',
    worktreeSig: parts[5] ?? '',
    stashSig: parts[6] ?? '',
  };
}

export function parseBranchRefSig(sig: string): Map<string, BranchRefEntry> {
  const map = new Map<string, BranchRefEntry>();
  for (const entry of sig.split('|').filter(Boolean)) {
    const [name, headSha, commitsAhead, unpushedCommits, remoteSyncStatus] = entry.split(':');
    if (!name || !headSha) continue;
    map.set(name, {
      headSha,
      commitsAhead: Number(commitsAhead) || 0,
      unpushedCommits: Number(unpushedCommits) || 0,
      remoteSyncStatus: remoteSyncStatus ?? 'unknown',
    });
  }
  return map;
}

export function formatBranchRefSig(
  branches: Array<{
    name: string;
    headSha: string;
    commitsAhead: number;
    unpushedCommits: number;
    remoteSyncStatus: string;
  }>,
): string {
  return branches
    .map(
      (branch) =>
        `${branch.name}:${branch.headSha}:${branch.commitsAhead}:${branch.unpushedCommits}:${branch.remoteSyncStatus}`,
    )
    .join('|');
}

export function classifyFingerprintDiff(
  stored: FingerprintParts | null,
  current: FingerprintParts,
):
  | { kind: 'none' }
  | { kind: 'graphDelta'; scope: GraphDeltaScope; segments?: FingerprintPatchSegment[] }
  | { kind: 'patch'; segments: FingerprintPatchSegment[] } {
  if (!stored) {
    return { kind: 'graphDelta', scope: 'full-graph' };
  }

  const segments: FingerprintPatchSegment[] = [];
  if (stored.hasUncommittedChanges !== current.hasUncommittedChanges) {
    segments.push('dirty');
  }
  if (stored.stashSig !== current.stashSig) {
    segments.push('stash');
  }
  if (stored.worktreeSig !== current.worktreeSig) {
    segments.push('worktree');
  }
  if (stored.upstreamSha !== current.upstreamSha) {
    segments.push('upstream');
  }

  const defaultBranchChanged = stored.defaultBranch !== current.defaultBranch;
  const headChanged = stored.headSha !== current.headSha;
  const branchRefChanged = stored.branchRefSig !== current.branchRefSig;

  if (defaultBranchChanged) {
    return {
      kind: 'graphDelta',
      scope: 'full-graph',
      segments: segments.length > 0 ? segments : undefined,
    };
  }

  if (headChanged || branchRefChanged) {
    let scope: GraphDeltaScope;
    if (headChanged && branchRefChanged) scope = 'full-graph';
    else if (headChanged) scope = 'head';
    else scope = 'branches';
    return {
      kind: 'graphDelta',
      scope,
      segments: segments.length > 0 ? segments : undefined,
    };
  }

  if (segments.length === 0) return { kind: 'none' };
  return { kind: 'patch', segments };
}

export function formatRepoFingerprint(parts: FingerprintParts): string {
  return [
    parts.defaultBranch,
    parts.headSha,
    parts.upstreamSha,
    parts.hasUncommittedChanges ? '1' : '0',
    parts.branchRefSig,
    parts.worktreeSig,
    parts.stashSig,
  ].join('@@');
}

export function withRepoFingerprintDirty(
  fingerprint: string,
  hasUncommittedChanges: boolean,
): string | null {
  const parts = parseRepoFingerprint(fingerprint);
  if (!parts) return null;
  return formatRepoFingerprint({ ...parts, hasUncommittedChanges });
}

export function withRepoFingerprintUpstream(
  fingerprint: string,
  upstreamSha: string,
): string | null {
  const parts = parseRepoFingerprint(fingerprint);
  if (!parts) return null;
  return formatRepoFingerprint({ ...parts, upstreamSha });
}
