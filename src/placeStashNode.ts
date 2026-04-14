import type { Branch, BranchCommitPreview, DirectCommit, GitStashEntry } from '../types';

export type StashGraphState = {
  branches: Branch[];
  directCommits: DirectCommit[];
  branchCommitPreviews: Record<string, BranchCommitPreview[]>;
  branchUniqueAheadCounts: Record<string, number>;
};

const shaMatches = (left?: string | null, right?: string | null): boolean => {
  if (!left || !right) return false;
  return left === right || left.startsWith(right) || right.startsWith(left);
};

type LaneRef = { name: string; headSha: string; isDefault: boolean };

/**
 * Places one stash node using the same lane rules as the uncommitted-changes synthetic node.
 */
export function placeStashNode(
  stash: GitStashEntry,
  branches: Branch[],
  directCommits: DirectCommit[],
  branchCommitPreviews: Record<string, BranchCommitPreview[]>,
  branchUniqueAheadCounts: Record<string, number>,
  defaultBranch: string,
): StashGraphState {
  const anchorSha = stash.baseSha;
  const stashId = `STASH:${stash.index}`;
  const stashTitle = `Stash ${stash.index + 1}`;
  const latestMainDirectCommitSha = directCommits[0]?.fullSha ?? null;

  const allLanes: LaneRef[] = [
    { name: defaultBranch, headSha: latestMainDirectCommitSha ?? '', isDefault: true },
    ...branches.map((b) => ({ name: b.name, headSha: b.headSha, isDefault: false })),
  ];

  const tipMatchedLanes = anchorSha
    ? allLanes.filter((lane) => shaMatches(lane.headSha, anchorSha))
    : [];
  const targetLane =
    tipMatchedLanes.find((lane) => lane.isDefault) ?? tipMatchedLanes[0];
  const isOnLaneTip = !!(
    targetLane &&
    anchorSha &&
    shaMatches(targetLane.headSha, anchorSha)
  );
  const targetBranch =
    targetLane && !targetLane.isDefault ? branches.find((b) => b.name === targetLane.name) : undefined;

  const anchorCommitDate = (() => {
    if (!anchorSha) return null;
    const matchingDirectCommit = directCommits.find(
      (commit) =>
        shaMatches(commit.fullSha, anchorSha) ||
        shaMatches(commit.sha, anchorSha),
    );
    if (matchingDirectCommit?.date) return matchingDirectCommit.date;
    if (targetBranch) {
      const matchingPreviewCommit = (branchCommitPreviews[targetBranch.name] ?? []).find(
        (commit) =>
          shaMatches(commit.fullSha, anchorSha) ||
          shaMatches(commit.sha, anchorSha),
      );
      if (matchingPreviewCommit?.date) return matchingPreviewCommit.date;
    }
    return null;
  })();

  const anchorCommitTimeMs = anchorCommitDate ? new Date(anchorCommitDate).getTime() : Number.NaN;
  const nowTimeMs = Date.now();
  const stashTimeMs = Number.isFinite(anchorCommitTimeMs)
    ? Math.max(nowTimeMs, anchorCommitTimeMs + 1 + stash.index)
    : nowTimeMs + stash.index;
  const stashDate = new Date(stashTimeMs).toISOString();

  const trimmedMessage = stash.message.trim();
  const stashNode: BranchCommitPreview = {
    fullSha: stashId,
    sha: stashTitle,
    parentSha: anchorSha,
    message: trimmedMessage || stashTitle,
    author: 'You',
    date: stashDate,
    kind: 'stash',
  };
  const stashDirectCommit: DirectCommit = {
    fullSha: stashId,
    sha: stashTitle,
    parentSha: anchorSha,
    message: trimmedMessage || stashTitle,
    author: 'You',
    date: stashDate,
    kind: 'stash',
  };

  if (isOnLaneTip && targetLane?.isDefault) {
    return {
      branches,
      branchCommitPreviews,
      branchUniqueAheadCounts,
      directCommits: [...directCommits, stashDirectCommit],
    };
  }

  if (isOnLaneTip && targetBranch) {
    const nextBranches = branches.map((b) => {
      if (b.name === targetBranch.name) {
        return {
          ...b,
          commitsAhead: b.commitsAhead + 1,
          unpushedCommits: b.unpushedCommits + 1,
          lastCommitDate: stashDate,
          headSha: stashId,
        };
      }
      return b;
    });
    return {
      branches: nextBranches,
      directCommits,
      branchCommitPreviews: {
        ...branchCommitPreviews,
        [targetBranch.name]: [stashNode, ...(branchCommitPreviews[targetBranch.name] || [])],
      },
      branchUniqueAheadCounts: {
        ...branchUniqueAheadCounts,
        [targetBranch.name]:
          Math.max(
            0,
            (Object.prototype.hasOwnProperty.call(branchUniqueAheadCounts, targetBranch.name)
              ? branchUniqueAheadCounts[targetBranch.name]
              : targetBranch.commitsAhead) ?? 0,
          ) + 1,
      },
    };
  }

  const fakeBranchName = `*Stash:${stash.index}`;
  const fakeBranch: Branch = {
    name: fakeBranchName,
    commitsAhead: 1,
    commitsBehind: 0,
    lastCommitDate: stashDate,
    lastCommitAuthor: 'You',
    status: 'fresh',
    remoteSyncStatus: 'local-only',
    unpushedCommits: 1,
    headSha: stashId,
    divergedFromSha: anchorSha ?? undefined,
    parentBranch: targetLane?.name || defaultBranch,
  };

  return {
    branches: [fakeBranch, ...branches],
    directCommits,
    branchCommitPreviews: {
      ...branchCommitPreviews,
      [fakeBranchName]: [stashNode],
    },
    branchUniqueAheadCounts: {
      ...branchUniqueAheadCounts,
      [fakeBranchName]: 1,
    },
  };
}

export function foldStashNodesIntoGraph(
  stashes: GitStashEntry[],
  branches: Branch[],
  directCommits: DirectCommit[],
  branchCommitPreviews: Record<string, BranchCommitPreview[]>,
  branchUniqueAheadCounts: Record<string, number>,
  defaultBranch: string,
): StashGraphState {
  const ordered = [...stashes].sort((a, b) => a.index - b.index);
  let state: StashGraphState = {
    branches,
    directCommits,
    branchCommitPreviews,
    branchUniqueAheadCounts,
  };
  for (const stash of ordered) {
    state = placeStashNode(
      stash,
      state.branches,
      state.directCommits,
      state.branchCommitPreviews,
      state.branchUniqueAheadCounts,
      defaultBranch,
    );
  }
  return state;
}
