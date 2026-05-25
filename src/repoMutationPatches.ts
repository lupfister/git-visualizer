import { stripWorkingTreeFromPreviews } from '../lib/injectWorktreeUncommitted';
import { isWorkingTreeCommitId } from '../lib/worktreeSessions';
import type {
  Branch,
  BranchCommitPreview,
  CheckedOutRef,
  DirectCommit,
  GitStashEntry,
  RepoMutationOutcome,
  RepoVisualSnapshot,
  WorktreeInfo,
} from '../types';

function touchSnapshot(snapshot: RepoVisualSnapshot): RepoVisualSnapshot {
  return {
    ...snapshot,
    updatedAtMs: Date.now(),
    loaded: true,
  };
}

function clearWorktreeDirtyFlags(worktrees: WorktreeInfo[]): WorktreeInfo[] {
  return worktrees.map((worktree) =>
    worktree.isCurrent ? { ...worktree, hasUncommittedChanges: false } : worktree,
  );
}

function syncCurrentWorktreeFromCheckedOutRef(
  worktrees: WorktreeInfo[],
  checkedOutRef: CheckedOutRef | null | undefined,
): WorktreeInfo[] {
  if (!checkedOutRef) return worktrees;
  return worktrees.map((worktree) => {
    if (!worktree.isCurrent) return worktree;
    return {
      ...worktree,
      headSha: checkedOutRef.headSha,
      branchName: checkedOutRef.branchName ?? worktree.branchName,
      parentSha: checkedOutRef.parentSha ?? worktree.parentSha ?? null,
      hasUncommittedChanges: checkedOutRef.hasUncommittedChanges,
    };
  });
}

function reindexStashesAfterRemoval(stashes: GitStashEntry[], removedIndices: number[]): GitStashEntry[] {
  const removed = new Set(removedIndices);
  return stashes
    .filter((stash) => !removed.has(stash.index))
    .map((stash, index) => ({ ...stash, index }));
}

function appendChildSha<T extends { fullSha: string; childShas?: string[] }>(commit: T, childSha: string): T {
  const childShas = [...(commit.childShas ?? [])];
  if (!childShas.includes(childSha)) childShas.push(childSha);
  return { ...commit, childShas };
}

function linkParentToChild(
  snapshot: RepoVisualSnapshot,
  parentSha: string | null | undefined,
  childSha: string,
  branchName: string,
): Pick<RepoVisualSnapshot, 'directCommits' | 'branchCommitPreviews'> {
  if (!parentSha) {
    return {
      directCommits: snapshot.directCommits,
      branchCommitPreviews: snapshot.branchCommitPreviews,
    };
  }

  const directCommits = snapshot.directCommits.map((commit) =>
    commit.fullSha === parentSha ? appendChildSha(commit, childSha) : commit,
  );

  const branchCommitPreviews = Object.fromEntries(
    Object.entries(snapshot.branchCommitPreviews).map(([branch, previews]) => [
      branch,
      previews.map((preview) =>
        preview.fullSha === parentSha ? appendChildSha(preview, childSha) : preview,
      ),
    ]),
  ) as Record<string, BranchCommitPreview[]>;

  if (!branchCommitPreviews[branchName]) {
    branchCommitPreviews[branchName] = [];
  }

  return { directCommits, branchCommitPreviews };
}

function patchBranchForPush(branch: Branch): Branch {
  return {
    ...branch,
    commitsAhead: 0,
    unpushedCommits: 0,
    remoteSyncStatus: branch.remoteSyncStatus === 'local-only' ? 'local-only' : 'on-github',
    status: branch.status === 'unknown' ? 'unknown' : 'fresh',
  };
}

function syncUnpushedDirectCommits(
  unpushedDirectCommits: DirectCommit[],
  unpushedCommitShasByBranch: Record<string, string[]>,
): DirectCommit[] {
  const allowedShas = new Set(Object.values(unpushedCommitShasByBranch).flat());
  return unpushedDirectCommits.filter((commit) => allowedShas.has(commit.fullSha));
}

function patchCommit(snapshot: RepoVisualSnapshot, commit: RepoMutationOutcome & { kind: 'commit' }): RepoVisualSnapshot {
  const { branchName, fullSha, sha, message, author, date, parentSha, parentShas, checkedOutRef } = commit.commit;
  const parentShaValue = parentSha ?? parentShas[0] ?? null;

  const newDirectCommit: DirectCommit = {
    fullSha,
    sha,
    parentSha: parentShaValue,
    parentShas,
    childShas: [],
    branch: branchName,
    message,
    author,
    date,
    kind: 'commit',
  };

  const linked = linkParentToChild(snapshot, parentShaValue, fullSha, branchName);
  const directCommits = [...linked.directCommits, newDirectCommit];

  const newPreview: BranchCommitPreview = {
    fullSha,
    sha,
    parentSha: parentShaValue,
    parentShas,
    childShas: [],
    message,
    author,
    date,
    kind: 'commit',
  };

  const branchCommitPreviews = { ...linked.branchCommitPreviews };
  branchCommitPreviews[branchName] = [...(branchCommitPreviews[branchName] ?? []), newPreview];
  if (branchName !== snapshot.defaultBranch) {
    const defaultPreviews = branchCommitPreviews[snapshot.defaultBranch] ?? [];
    if (!defaultPreviews.some((preview) => preview.fullSha === fullSha)) {
      branchCommitPreviews[snapshot.defaultBranch] = [...defaultPreviews, newPreview];
    }
  }

  const branches = snapshot.branches.map((branch) => {
    if (branch.name !== branchName) return branch;
    return {
      ...branch,
      headSha: fullSha,
      lastCommitDate: date,
      lastCommitAuthor: author,
      commitsAhead: branch.commitsAhead + 1,
      unpushedCommits: branch.unpushedCommits + 1,
      remoteSyncStatus: branch.remoteSyncStatus === 'local-only' ? 'local-only' : 'unpushed',
    } satisfies Branch;
  });

  const unpushedDirectCommits = [...snapshot.unpushedDirectCommits, newDirectCommit];
  const unpushedCommitShasByBranch = {
    ...snapshot.unpushedCommitShasByBranch,
    [branchName]: [...(snapshot.unpushedCommitShasByBranch[branchName] ?? []), fullSha],
  };

  const branchUniqueAheadCounts = {
    ...snapshot.branchUniqueAheadCounts,
    [branchName]: (snapshot.branchUniqueAheadCounts[branchName] ?? 0) + 1,
  };

  const cleanedBranches = !checkedOutRef.hasUncommittedChanges
    ? branches.map((branch) => (
      isWorkingTreeCommitId(branch.headSha)
        ? {
            ...branch,
            headSha: branch.name === branchName ? fullSha : (checkedOutRef.headSha || branch.headSha),
          }
        : branch
    ))
    : branches;
  return touchSnapshot({
    ...snapshot,
    checkedOutRef,
    branches: cleanedBranches,
    directCommits,
    branchCommitPreviews,
    unpushedDirectCommits,
    unpushedCommitShasByBranch,
    branchUniqueAheadCounts,
    worktrees: syncCurrentWorktreeFromCheckedOutRef(
      clearWorktreeDirtyFlags(snapshot.worktrees),
      checkedOutRef,
    ),
  });
}

function patchStashPush(
  snapshot: RepoVisualSnapshot,
  outcome: RepoMutationOutcome & { kind: 'stashPush' },
): RepoVisualSnapshot {
  const reindexed = snapshot.stashes.map((stash) => ({ ...stash, index: stash.index + 1 }));
  const stashes = [{ ...outcome.stash, index: 0 }, ...reindexed];
  return touchSnapshot({
    ...snapshot,
    stashes,
    checkedOutRef: outcome.checkedOutRef,
    worktrees: syncCurrentWorktreeFromCheckedOutRef(
      clearWorktreeDirtyFlags(snapshot.worktrees),
      outcome.checkedOutRef,
    ),
  });
}

function patchStashDrop(
  snapshot: RepoVisualSnapshot,
  outcome: RepoMutationOutcome & { kind: 'stashDrop' },
): RepoVisualSnapshot {
  return touchSnapshot({
    ...snapshot,
    stashes: reindexStashesAfterRemoval(snapshot.stashes, outcome.removedIndices),
  });
}

function patchStashRestore(
  snapshot: RepoVisualSnapshot,
  outcome: RepoMutationOutcome & { kind: 'stashRestore' },
): RepoVisualSnapshot {
  const stashes = reindexStashesAfterRemoval(snapshot.stashes, [outcome.removedIndex]);
  return touchSnapshot({
    ...snapshot,
    stashes,
    checkedOutRef: outcome.checkedOutRef,
    worktrees: syncCurrentWorktreeFromCheckedOutRef(snapshot.worktrees, outcome.checkedOutRef),
  });
}

function patchPush(snapshot: RepoVisualSnapshot, outcome: RepoMutationOutcome & { kind: 'push' }): RepoVisualSnapshot {
  const pushed = new Set(outcome.pushedBranchNames);
  const branches = snapshot.branches.map((branch) =>
    pushed.has(branch.name) ? patchBranchForPush(branch) : branch,
  );

  const unpushedCommitShasByBranch = { ...snapshot.unpushedCommitShasByBranch };
  for (const branchName of outcome.pushedBranchNames) {
    unpushedCommitShasByBranch[branchName] = [];
  }

  const pushedShas = new Set<string>();
  for (const branchName of outcome.pushedBranchNames) {
    for (const sha of snapshot.unpushedCommitShasByBranch[branchName] ?? []) {
      pushedShas.add(sha);
    }
  }

  const unpushedDirectCommits = snapshot.unpushedDirectCommits.filter((commit) => {
    const branchRemaining = unpushedCommitShasByBranch[commit.branch] ?? [];
    if (pushed.has(commit.branch)) {
      return branchRemaining.includes(commit.fullSha);
    }
    return !pushedShas.has(commit.fullSha);
  });

  const branchUniqueAheadCounts = { ...snapshot.branchUniqueAheadCounts };
  for (const branchName of outcome.pushedBranchNames) {
    branchUniqueAheadCounts[branchName] = 0;
  }

  return touchSnapshot({
    ...snapshot,
    branches,
    unpushedCommitShasByBranch,
    unpushedDirectCommits,
    branchUniqueAheadCounts,
  });
}

function patchBranchDelete(
  snapshot: RepoVisualSnapshot,
  outcome: RepoMutationOutcome & { kind: 'branchDelete' },
): RepoVisualSnapshot {
  const deleted = new Set(outcome.deletedBranches);
  const removedWorktrees = new Set(outcome.removedWorktreePaths ?? []);

  const branches = snapshot.branches.filter((branch) => !deleted.has(branch.name));
  const directCommits = snapshot.directCommits.filter((commit) => !deleted.has(commit.branch));
  const unpushedDirectCommits = snapshot.unpushedDirectCommits.filter((commit) => !deleted.has(commit.branch));

  const branchCommitPreviews = Object.fromEntries(
    Object.entries(snapshot.branchCommitPreviews).filter(([branchName]) => !deleted.has(branchName)),
  ) as Record<string, BranchCommitPreview[]>;

  const unpushedCommitShasByBranch = Object.fromEntries(
    Object.entries(snapshot.unpushedCommitShasByBranch).filter(([branchName]) => !deleted.has(branchName)),
  ) as Record<string, string[]>;

  const branchParentByName = Object.fromEntries(
    Object.entries(snapshot.branchParentByName).filter(([branchName]) => !deleted.has(branchName)),
  ) as Record<string, string | null>;

  const laneByBranch = Object.fromEntries(
    Object.entries(snapshot.laneByBranch).filter(([branchName]) => !deleted.has(branchName)),
  ) as Record<string, number>;

  const branchUniqueAheadCounts = Object.fromEntries(
    Object.entries(snapshot.branchUniqueAheadCounts).filter(([branchName]) => !deleted.has(branchName)),
  ) as Record<string, number>;

  let checkedOutRef = outcome.checkedOutRef ?? snapshot.checkedOutRef;
  if (outcome.discardedUncommittedChanges && checkedOutRef) {
    checkedOutRef = { ...checkedOutRef, hasUncommittedChanges: false };
  }

  const worktrees = snapshot.worktrees
    .filter((worktree) => !removedWorktrees.has(worktree.path))
    .map((worktree) =>
      outcome.discardedUncommittedChanges && worktree.isCurrent
        ? { ...worktree, hasUncommittedChanges: false }
        : worktree,
    );

  return touchSnapshot({
    ...snapshot,
    branches,
    directCommits,
    unpushedDirectCommits,
    branchCommitPreviews,
    unpushedCommitShasByBranch,
    branchParentByName,
    laneByBranch,
    branchUniqueAheadCounts,
    checkedOutRef,
    worktrees,
  });
}

function patchCheckout(
  snapshot: RepoVisualSnapshot,
  outcome: RepoMutationOutcome & { kind: 'checkout' },
): RepoVisualSnapshot {
  return touchSnapshot({
    ...snapshot,
    checkedOutRef: outcome.checkedOutRef,
    worktrees: syncCurrentWorktreeFromCheckedOutRef(snapshot.worktrees, outcome.checkedOutRef),
  });
}

function patchDiscardDirty(
  snapshot: RepoVisualSnapshot,
  outcome: RepoMutationOutcome & { kind: 'discardDirty' },
): RepoVisualSnapshot {
  const checkedOutRef = outcome.checkedOutRef;
  const branches = snapshot.branches.map((branch) => (
    isWorkingTreeCommitId(branch.headSha) && branch.name === checkedOutRef.branchName
      ? { ...branch, headSha: checkedOutRef.headSha }
      : branch
  ));
  return touchSnapshot({
    ...snapshot,
    checkedOutRef,
    branches,
    branchCommitPreviews: stripWorkingTreeFromPreviews(snapshot.branchCommitPreviews),
    worktrees: syncCurrentWorktreeFromCheckedOutRef(
      clearWorktreeDirtyFlags(snapshot.worktrees),
      checkedOutRef,
    ),
  });
}

function patchMarkDirty(
  snapshot: RepoVisualSnapshot,
  outcome: RepoMutationOutcome & { kind: 'markDirty' },
): RepoVisualSnapshot {
  return touchSnapshot({
    ...snapshot,
    checkedOutRef: outcome.checkedOutRef,
    worktrees: syncCurrentWorktreeFromCheckedOutRef(snapshot.worktrees, outcome.checkedOutRef),
  });
}

function patchStashSync(
  snapshot: RepoVisualSnapshot,
  outcome: RepoMutationOutcome & { kind: 'stashSync' },
): RepoVisualSnapshot {
  return touchSnapshot({
    ...snapshot,
    stashes: outcome.stashes,
  });
}

function patchWorktreeSync(
  snapshot: RepoVisualSnapshot,
  outcome: RepoMutationOutcome & { kind: 'worktreeSync' },
): RepoVisualSnapshot {
  return touchSnapshot({
    ...snapshot,
    worktrees: outcome.worktrees,
  });
}

function patchUpstreamSync(
  snapshot: RepoVisualSnapshot,
  outcome: RepoMutationOutcome & { kind: 'upstreamSync' },
): RepoVisualSnapshot {
  return touchSnapshot({
    ...snapshot,
    checkedOutRef: outcome.checkedOutRef,
    worktrees: syncCurrentWorktreeFromCheckedOutRef(snapshot.worktrees, outcome.checkedOutRef),
  });
}

function patchWorktreeRemove(
  snapshot: RepoVisualSnapshot,
  outcome: RepoMutationOutcome & { kind: 'worktreeRemove' },
): RepoVisualSnapshot {
  const normalizedTarget = outcome.worktreePath.replace(/\/+$/, '');
  return touchSnapshot({
    ...snapshot,
    worktrees: snapshot.worktrees.filter(
      (worktree) => worktree.path.replace(/\/+$/, '') !== normalizedTarget,
    ),
  });
}

function patchBranchMetadataSync(
  snapshot: RepoVisualSnapshot,
  outcome: RepoMutationOutcome & { kind: 'branchMetadataSync' },
): RepoVisualSnapshot {
  const removed = new Set(outcome.removedBranchNames);
  const branchCommitPreviews = Object.fromEntries(
    Object.entries(snapshot.branchCommitPreviews).filter(([branchName]) => !removed.has(branchName)),
  ) as Record<string, BranchCommitPreview[]>;
  const unpushedCommitShasByBranch = {
    ...snapshot.unpushedCommitShasByBranch,
    ...outcome.unpushedCommitShasByBranch,
  };
  for (const branchName of outcome.removedBranchNames) {
    delete unpushedCommitShasByBranch[branchName];
  }
  const laneByBranch = Object.fromEntries(
    Object.entries(snapshot.laneByBranch).filter(([branchName]) => !removed.has(branchName)),
  ) as Record<string, number>;
  const branchParentByName = Object.fromEntries(
    Object.entries(snapshot.branchParentByName).filter(([branchName]) => !removed.has(branchName)),
  ) as Record<string, string | null>;

  return touchSnapshot({
    ...snapshot,
    defaultBranch: outcome.defaultBranch,
    branches: outcome.branches,
    branchCommitPreviews,
    unpushedCommitShasByBranch,
    unpushedDirectCommits: outcome.unpushedDirectCommits
      ?? syncUnpushedDirectCommits(snapshot.unpushedDirectCommits, unpushedCommitShasByBranch),
    branchUniqueAheadCounts: outcome.branchUniqueAheadCounts,
    checkedOutRef: outcome.checkedOutRef,
    laneByBranch,
    branchParentByName,
    worktrees: syncCurrentWorktreeFromCheckedOutRef(snapshot.worktrees, outcome.checkedOutRef),
  });
}

export function applyMutationPatch(
  snapshot: RepoVisualSnapshot,
  outcome: RepoMutationOutcome,
): RepoVisualSnapshot {
  switch (outcome.kind) {
    case 'commit':
      return patchCommit(snapshot, outcome);
    case 'stashPush':
      return patchStashPush(snapshot, outcome);
    case 'stashDrop':
      return patchStashDrop(snapshot, outcome);
    case 'stashRestore':
      return patchStashRestore(snapshot, outcome);
    case 'push':
      return patchPush(snapshot, outcome);
    case 'branchDelete':
      return patchBranchDelete(snapshot, outcome);
    case 'checkout':
      return patchCheckout(snapshot, outcome);
    case 'discardDirty':
      return patchDiscardDirty(snapshot, outcome);
    case 'markDirty':
      return patchMarkDirty(snapshot, outcome);
    case 'stashSync':
      return patchStashSync(snapshot, outcome);
    case 'worktreeSync':
      return patchWorktreeSync(snapshot, outcome);
    case 'upstreamSync':
      return patchUpstreamSync(snapshot, outcome);
    case 'worktreeRemove':
      return patchWorktreeRemove(snapshot, outcome);
    case 'branchMetadataSync':
      return patchBranchMetadataSync(snapshot, outcome);
    case 'fullRefresh':
      return snapshot;
    default: {
      const _exhaustive: never = outcome;
      return _exhaustive;
    }
  }
}

export function outcomeFromCommitData(data: import('../types').CommitMutationData): RepoMutationOutcome {
  return {
    kind: 'commit',
    layoutTopologyChanged: true,
    commit: data,
  };
}

export function outcomeFromStashPush(data: import('../types').StashPushMutationData): RepoMutationOutcome {
  return {
    kind: 'stashPush',
    layoutTopologyChanged: true,
    stash: data.stash,
    checkedOutRef: data.checkedOutRef,
  };
}

export function outcomeFromStashDrop(removedIndex: number): RepoMutationOutcome {
  return {
    kind: 'stashDrop',
    layoutTopologyChanged: true,
    removedIndices: [removedIndex],
  };
}

export function outcomeFromStashDrops(removedIndices: number[]): RepoMutationOutcome {
  return {
    kind: 'stashDrop',
    layoutTopologyChanged: true,
    removedIndices,
  };
}

export function outcomeFromStashRestore(data: import('../types').StashRestoreMutationData): RepoMutationOutcome {
  return {
    kind: 'stashRestore',
    layoutTopologyChanged: true,
    removedIndex: data.removedIndex,
    checkedOutRef: data.checkedOutRef,
  };
}

export function outcomeFromPush(pushedBranchNames: string[]): RepoMutationOutcome {
  return {
    kind: 'push',
    layoutTopologyChanged: false,
    pushedBranchNames,
  };
}

export function outcomeFromDeleteSelection(data: import('../types').DeleteSelectionMutationData): RepoMutationOutcome {
  return {
    kind: 'branchDelete',
    layoutTopologyChanged: true,
    deletedBranches: data.deletedBranches,
    checkedOutRef: data.checkedOutRef,
    removedWorktreePaths: data.removedWorktreePaths,
    discardedUncommittedChanges: data.discardedUncommittedChanges,
  };
}

export function outcomeFromCheckout(checkedOutRef: CheckedOutRef): RepoMutationOutcome {
  return {
    kind: 'checkout',
    layoutTopologyChanged: false,
    checkedOutRef,
  };
}

export function outcomeFromDiscardDirty(checkedOutRef: CheckedOutRef): RepoMutationOutcome {
  return {
    kind: 'discardDirty',
    layoutTopologyChanged: false,
    checkedOutRef,
  };
}

export function outcomeFromMarkDirty(checkedOutRef: CheckedOutRef): RepoMutationOutcome {
  return {
    kind: 'markDirty',
    layoutTopologyChanged: false,
    checkedOutRef,
  };
}

export function isDirtyOnlyMutationOutcomes(outcomes: RepoMutationOutcome[]): boolean {
  return outcomes.length > 0
    && outcomes.every((outcome) => outcome.kind === 'markDirty' || outcome.kind === 'discardDirty');
}

export function outcomeFromStashSync(stashes: GitStashEntry[]): RepoMutationOutcome {
  return {
    kind: 'stashSync',
    layoutTopologyChanged: true,
    stashes,
  };
}

export function outcomeFromWorktreeSync(worktrees: WorktreeInfo[]): RepoMutationOutcome {
  return {
    kind: 'worktreeSync',
    layoutTopologyChanged: true,
    worktrees,
  };
}

export function outcomeFromUpstreamSync(checkedOutRef: CheckedOutRef): RepoMutationOutcome {
  return {
    kind: 'upstreamSync',
    layoutTopologyChanged: false,
    checkedOutRef,
  };
}

export function outcomeFromWorktreeRemove(worktreePath: string): RepoMutationOutcome {
  return {
    kind: 'worktreeRemove',
    layoutTopologyChanged: true,
    worktreePath,
  };
}

export function outcomeFromBranchMetadataSync(data: {
  branches: Branch[];
  defaultBranch: string;
  removedBranchNames: string[];
  unpushedCommitShasByBranch: Record<string, string[]>;
  unpushedDirectCommits?: DirectCommit[];
  branchUniqueAheadCounts: Record<string, number>;
  checkedOutRef: CheckedOutRef | null;
  layoutTopologyChanged?: boolean;
}): RepoMutationOutcome {
  const { layoutTopologyChanged = true, ...rest } = data;
  return {
    kind: 'branchMetadataSync',
    layoutTopologyChanged,
    ...rest,
  };
}
