import { invoke } from './timedInvoke';
import type {
  Branch,
  CheckedOutRef,
  DirectCommit,
  RepoMutationOutcome,
} from '../types';
import type { FingerprintParts } from './fingerprintDiff';
import {
  outcomeFromBranchMetadataSync,
  outcomeFromCheckout,
  outcomeFromCommitData,
} from './repoMutationPatches';

export type RepoGraphDelta = {
  fingerprint: string;
  checkedOutRef: CheckedOutRef;
  branches: Branch[];
  changedBranches: Array<{
    name: string;
    oldHeadSha: string | null;
    newHeadSha: string;
    newCommits: DirectCommit[];
  }>;
  removedBranches: string[];
  unpushedCommitShasByBranch: Record<string, string[]>;
  requiresFullRefresh: boolean;
};

const existingCommitShas = (snapshot: {
  directCommits: DirectCommit[];
  branchCommitPreviews: Record<string, Array<{ fullSha: string }>>;
}): Set<string> => {
  const shas = new Set<string>();
  for (const commit of snapshot.directCommits) {
    shas.add(commit.fullSha);
  }
  for (const previews of Object.values(snapshot.branchCommitPreviews)) {
    for (const preview of previews) {
      shas.add(preview.fullSha);
    }
  }
  return shas;
};

export async function fetchRepoGraphDelta(
  repoPath: string,
  storedBranchRefSig: string | null | undefined,
): Promise<RepoGraphDelta | null> {
  return invoke<RepoGraphDelta>('get_repo_graph_delta', {
    repoPath,
    storedBranchRefSig: storedBranchRefSig ?? null,
  }).catch(() => null);
}

export function buildGraphDeltaOutcomes(
  delta: RepoGraphDelta,
  snapshot: {
    directCommits: DirectCommit[];
    branchCommitPreviews: Record<string, Array<{ fullSha: string }>>;
    checkedOutRef: CheckedOutRef | null;
    defaultBranch: string;
  },
  stored: FingerprintParts | null,
): RepoMutationOutcome[] | null {
  if (delta.requiresFullRefresh) return null;

  const knownShas = existingCommitShas(snapshot);
  const outcomes: RepoMutationOutcome[] = [];

  for (const changed of delta.changedBranches) {
    const commitsOldestFirst = [...changed.newCommits].reverse();
    for (const commit of commitsOldestFirst) {
      if (knownShas.has(commit.fullSha)) continue;
      if (commit.parentShas.length > 1) return null;
      knownShas.add(commit.fullSha);
      outcomes.push(
        outcomeFromCommitData({
          branchName: commit.branch,
          fullSha: commit.fullSha,
          sha: commit.sha,
          message: commit.message,
          author: commit.author,
          date: commit.date,
          parentSha: commit.parentSha,
          parentShas: commit.parentShas,
          checkedOutRef: delta.checkedOutRef,
        }),
      );
    }
  }

  const branchUniqueAheadCounts = Object.fromEntries(
    delta.branches.map((branch) => [branch.name, Math.max(0, branch.commitsAhead)]),
  ) as Record<string, number>;

  outcomes.push(
    outcomeFromBranchMetadataSync({
      branches: delta.branches,
      defaultBranch: snapshot.defaultBranch,
      removedBranchNames: delta.removedBranches,
      unpushedCommitShasByBranch: delta.unpushedCommitShasByBranch,
      branchUniqueAheadCounts,
      checkedOutRef: delta.checkedOutRef,
    }),
  );

  const previousRef = snapshot.checkedOutRef;
  const checkoutChanged =
    previousRef?.branchName !== delta.checkedOutRef.branchName
    || previousRef?.headSha !== delta.checkedOutRef.headSha
    || previousRef?.hasUncommittedChanges !== delta.checkedOutRef.hasUncommittedChanges;
  if (checkoutChanged) {
    outcomes.push(outcomeFromCheckout(delta.checkedOutRef));
  }

  if (outcomes.length === 0 && stored) return null;
  return outcomes;
}
