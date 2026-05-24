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

export function classifyFingerprintDiff(
  stored: FingerprintParts | null,
  current: FingerprintParts,
):
  | { kind: 'none' }
  | { kind: 'full' }
  | { kind: 'patch'; segments: FingerprintPatchSegment[] } {
  if (!stored) return { kind: 'full' };
  if (stored.defaultBranch !== current.defaultBranch) return { kind: 'full' };
  if (stored.headSha !== current.headSha) return { kind: 'full' };
  if (stored.branchRefSig !== current.branchRefSig) return { kind: 'full' };

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

  if (segments.length === 0) return { kind: 'none' };
  return { kind: 'patch', segments };
}
