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

function appendChildShaToCommit(
  commit: BranchCommitPreview | DirectCommit,
  childSha: string,
): BranchCommitPreview | DirectCommit {
  const nextChildShas = [...(commit.childShas ?? [])];
  if (!nextChildShas.includes(childSha)) nextChildShas.push(childSha);
  return {
    ...commit,
    childShas: nextChildShas,
  };
}

function linkChildToParent(
  directCommits: DirectCommit[],
  branchCommitPreviews: Record<string, BranchCommitPreview[]>,
  parentSha: string | null | undefined,
  childSha: string,
  targetBranchName: string | null,
  defaultBranch: string,
): {
  directCommits: DirectCommit[];
  branchCommitPreviews: Record<string, BranchCommitPreview[]>;
} {
  if (!parentSha) return { directCommits, branchCommitPreviews };

  const nextDirectCommits = directCommits.map((commit) =>
    shaMatches(commit.fullSha, parentSha) || shaMatches(commit.sha, parentSha)
      ? (appendChildShaToCommit(commit, childSha) as DirectCommit)
      : commit,
  );

  const nextBranchCommitPreviews = Object.fromEntries(
    Object.entries(branchCommitPreviews).map(([branchName, previews]) => [
      branchName,
      previews.map((commit) =>
        (branchName === targetBranchName || branchName === defaultBranch) &&
        (shaMatches(commit.fullSha, parentSha) || shaMatches(commit.sha, parentSha))
          ? (appendChildShaToCommit(commit, childSha) as BranchCommitPreview)
          : commit,
      ),
    ]),
  );

  return {
    directCommits: nextDirectCommits,
    branchCommitPreviews: nextBranchCommitPreviews,
  };
}

/** Branch that owns an anchor commit on the graph (stash + empty-branch placeholders use this for lane +1). */
export function resolveAnchorOwningBranchName(
  anchorSha: string | null | undefined,
  directCommits: DirectCommit[],
  branchCommitPreviews: Record<string, BranchCommitPreview[]>,
  defaultBranch: string,
): string | null {
  if (!anchorSha) return null;
  const matchesSha = (value?: string | null): boolean => shaMatches(value, anchorSha);

  const inDirectCommits = directCommits.some((commit) => matchesSha(commit.fullSha) || matchesSha(commit.sha));
  if (inDirectCommits) return defaultBranch;

  for (const [branchName, previews] of Object.entries(branchCommitPreviews)) {
    const onBranch = previews.some((commit) => matchesSha(commit.fullSha) || matchesSha(commit.sha));
    if (onBranch) return branchName;
  }
  return null;
}

/**
 * Places one stash node on its own synthetic lane so stash history never sits on the parent branch lane.
 */
export function placeStashNode(
  stash: GitStashEntry,
  branches: Branch[],
  directCommits: DirectCommit[],
  branchCommitPreviews: Record<string, BranchCommitPreview[]>,
  branchUniqueAheadCounts: Record<string, number>,
  defaultBranch: string,
  hasUncommittedChanges = false,
): StashGraphState {
  const anchorSha = stash.baseSha;
  const stashId = `STASH:${stash.index}`;
  const stashTitle = `Stash ${stash.index + 1}`;
  const anchorOwningBranchName = resolveAnchorOwningBranchName(
    anchorSha,
    directCommits,
    branchCommitPreviews,
    defaultBranch,
  );
  const anchorCommitDate = (() => {
    if (!anchorSha) return null;
    const matchingDirectCommit = directCommits.find(
      (commit) =>
        shaMatches(commit.fullSha, anchorSha) ||
        shaMatches(commit.sha, anchorSha),
    );
    if (matchingDirectCommit?.date) return matchingDirectCommit.date;
    if (anchorOwningBranchName && !hasUncommittedChanges) {
      const matchingPreviewCommit = (branchCommitPreviews[anchorOwningBranchName] ?? []).find(
        (commit) => shaMatches(commit.fullSha, anchorSha) || shaMatches(commit.sha, anchorSha),
      );
      if (matchingPreviewCommit?.date) return matchingPreviewCommit.date;
    }
    return null;
  })();

  const stashCreatedAtMs = new Date(stash.createdAt).getTime();
  const anchorCommitTimeMs = anchorCommitDate ? new Date(anchorCommitDate).getTime() : Number.NaN;
  const nowTimeMs = Date.now();
  const stashTimeMs = Number.isFinite(stashCreatedAtMs)
    ? stashCreatedAtMs
    : Number.isFinite(anchorCommitTimeMs)
      ? Math.max(nowTimeMs, anchorCommitTimeMs + 1 + stash.index)
      : nowTimeMs + stash.index;
  const stashDate = new Date(stashTimeMs).toISOString();

  const trimmedMessage = stash.message.trim();
  const stashNode: BranchCommitPreview = {
    fullSha: stashId,
    sha: stashTitle,
    parentSha: anchorSha,
    clusterKey: null,
    childShas: [],
    message: trimmedMessage || stashTitle,
    author: 'You',
    date: stashDate,
    kind: 'stash',
  };

  const fakeBranchName = `Stash ${stash.index + 1}`;
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
    parentBranch: anchorOwningBranchName || defaultBranch,
  };

  const linked = linkChildToParent(
    directCommits,
    branchCommitPreviews,
    anchorSha,
    stashId,
    fakeBranchName,
    defaultBranch,
  );

  return {
    branches: [fakeBranch, ...branches],
    directCommits: linked.directCommits,
    branchCommitPreviews: {
      ...linked.branchCommitPreviews,
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
  hasUncommittedChanges = false,
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
      hasUncommittedChanges,
    );
  }
  return state;
}

const isStashLaneBranchName = (branchName: string): boolean => /^Stash \d+$/.test(branchName);

const findCommitMetaInRepo = (
  sha: string,
  directCommits: DirectCommit[],
  branchCommitPreviews: Record<string, BranchCommitPreview[]>,
): { date?: string; author?: string } | null => {
  const inDirect = directCommits.find(
    (commit) => shaMatches(commit.fullSha, sha) || shaMatches(commit.sha, sha),
  );
  if (inDirect) return { date: inDirect.date, author: inDirect.author };
  for (const previews of Object.values(branchCommitPreviews)) {
    const match = previews.find(
      (commit) => shaMatches(commit.fullSha, sha) || shaMatches(commit.sha, sha),
    );
    if (match) return { date: match.date, author: match.author };
  }
  return null;
};

const isEmptyBranchForPlaceholderFold = (
  branch: Branch,
  branchUniqueAheadCounts: Record<string, number>,
  branchCommitPreviews: Record<string, BranchCommitPreview[]>,
  defaultBranch: string,
): boolean => {
  if (branch.name === defaultBranch) return false;
  if (isStashLaneBranchName(branch.name)) return false;
  const previews = branchCommitPreviews[branch.name] ?? [];
  if (previews.some((preview) => preview.fullSha.startsWith('BRANCH_HEAD:'))) return false;
  const uniqueAhead = Object.prototype.hasOwnProperty.call(branchUniqueAheadCounts, branch.name)
    ? branchUniqueAheadCounts[branch.name] ?? 0
    : null;
  if (uniqueAhead != null && uniqueAhead > 0) return false;
  if (branch.commitsAhead > 0) return false;
  const concretePreviews = previews.filter(
    (preview) => preview.kind !== 'branch-created' && !preview.fullSha.startsWith('BRANCH_HEAD:'),
  );
  return concretePreviews.length === 0;
};

/**
 * Places one empty branch on its own lane (same graph fold as stashes) so placeholders never share a column.
 */
export function placeEmptyBranchPlaceholder(
  branch: Branch,
  branches: Branch[],
  directCommits: DirectCommit[],
  branchCommitPreviews: Record<string, BranchCommitPreview[]>,
  branchUniqueAheadCounts: Record<string, number>,
  defaultBranch: string,
  laneIndex = 0,
): StashGraphState {
  const laneTipSha =
    branch.headSha ||
    branch.createdFromSha ||
    branch.divergedFromSha ||
    branch.presidesFromSha ||
    null;
  if (!laneTipSha) {
    return { branches, directCommits, branchCommitPreviews, branchUniqueAheadCounts };
  }

  const forkPointSha =
    branch.divergedFromSha ??
    branch.createdFromSha ??
    branch.presidesFromSha ??
    laneTipSha;
  const anchorSha = forkPointSha;
  const placeholderId = `BRANCH_HEAD:${branch.name}:${laneTipSha}`;
  const anchorOwningBranchName = resolveAnchorOwningBranchName(
    anchorSha,
    directCommits,
    branchCommitPreviews,
    defaultBranch,
  );

  const forkMeta = findCommitMetaInRepo(forkPointSha, directCommits, branchCommitPreviews);
  const anchorParentDate = forkMeta?.date ?? branch.lastCommitDate ?? null;
  const forkTimeMs = anchorParentDate ? new Date(anchorParentDate).getTime() : Number.NaN;
  const nowTimeMs = Date.now();
  const placeholderTimeMs = Number.isFinite(forkTimeMs)
    ? Math.max(nowTimeMs, forkTimeMs + 1 + laneIndex)
    : nowTimeMs + laneIndex;
  const placeholderDate = new Date(placeholderTimeMs).toISOString();

  const placeholderNode: BranchCommitPreview = {
    fullSha: placeholderId,
    sha: 'empty',
    parentSha: anchorSha,
    clusterKey: null,
    childShas: [],
    message: '',
    author: forkMeta?.author ?? branch.lastCommitAuthor,
    date: placeholderDate,
    kind: 'stash',
  };

  const linked = linkChildToParent(
    directCommits,
    branchCommitPreviews,
    anchorSha,
    placeholderId,
    branch.name,
    defaultBranch,
  );

  return {
    branches: branches.map((candidate) =>
      candidate.name === branch.name
        ? {
            ...candidate,
            parentBranch: anchorOwningBranchName || candidate.parentBranch || defaultBranch,
          }
        : candidate,
    ),
    directCommits: linked.directCommits,
    branchCommitPreviews: {
      ...linked.branchCommitPreviews,
      [branch.name]: [placeholderNode],
    },
    branchUniqueAheadCounts: {
      ...branchUniqueAheadCounts,
      [branch.name]: 1,
    },
  };
}

export function foldEmptyBranchPlaceholdersIntoGraph(
  branches: Branch[],
  directCommits: DirectCommit[],
  branchCommitPreviews: Record<string, BranchCommitPreview[]>,
  branchUniqueAheadCounts: Record<string, number>,
  defaultBranch: string,
): StashGraphState {
  let state: StashGraphState = {
    branches,
    directCommits,
    branchCommitPreviews,
    branchUniqueAheadCounts,
  };
  let laneIndex = 0;
  for (const branch of branches) {
    if (
      !isEmptyBranchForPlaceholderFold(
        branch,
        state.branchUniqueAheadCounts,
        state.branchCommitPreviews,
        defaultBranch,
      )
    ) {
      continue;
    }
    state = placeEmptyBranchPlaceholder(
      branch,
      state.branches,
      state.directCommits,
      state.branchCommitPreviews,
      state.branchUniqueAheadCounts,
      defaultBranch,
      laneIndex,
    );
    laneIndex += 1;
  }
  return state;
}
