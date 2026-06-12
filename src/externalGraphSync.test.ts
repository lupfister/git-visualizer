import { describe, expect, it } from 'vitest';
import type { Branch, CheckedOutRef, RepoVisualSnapshot } from '../types';
import { parseRepoFingerprint } from './fingerprintDiff';
import { buildGraphDeltaOutcomes } from './externalGraphSync';
import { applyMutationPatch, outcomeFromBranchMetadataSync, outcomeFromCommitData } from './repoMutationPatches';

const checkedOutRef: CheckedOutRef = {
  branchName: 'main',
  headSha: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
  hasUncommittedChanges: false,
  parentSha: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
};

const baseSnapshot = (): RepoVisualSnapshot => ({
  path: '/repo',
  name: 'repo',
  defaultBranch: 'main',
  branches: [
    {
      name: 'main',
      commitsAhead: 1,
      commitsBehind: 0,
      lastCommitDate: '2024-06-01T12:00:00Z',
      lastCommitAuthor: 'test',
      status: 'fresh',
      remoteSyncStatus: 'local-only',
      unpushedCommits: 1,
      headSha: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    },
  ],
  mergeNodes: [],
  directCommits: [
    {
      fullSha: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      sha: 'aaaaaaa',
      branch: 'main',
      message: 'root',
      author: 'test',
      date: '2024-05-01T12:00:00Z',
      parentSha: null,
      parentShas: [],
    },
  ],
  unpushedDirectCommits: [],
  mergeTargetBranchByCommitSha: {},
  unpushedCommitShasByBranch: { main: ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'] },
  checkedOutRef,
  worktrees: [],
  stashes: [],
  branchCommitPreviews: {
    main: [
      {
        fullSha: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sha: 'aaaaaaa',
        parentSha: null,
        message: 'root',
        author: 'test',
        date: '2024-05-01T12:00:00Z',
        kind: 'commit',
      },
    ],
  },
  branchParentByName: { main: null },
  laneByBranch: {},
  branchUniqueAheadCounts: { main: 1 },
  loaded: true,
  cacheSchemaVersion: 1,
  updatedAtMs: 0,
});

describe('buildGraphDeltaOutcomes', () => {
  it('builds commit and branch metadata outcomes for a new head commit', () => {
    const newSha = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
    const outcomes = buildGraphDeltaOutcomes(
      {
        fingerprint: 'fp',
        checkedOutRef,
        branches: [
          {
            name: 'main',
            commitsAhead: 2,
            commitsBehind: 0,
            lastCommitDate: '2024-06-02T12:00:00Z',
            lastCommitAuthor: 'agent',
            status: 'fresh',
            remoteSyncStatus: 'unpushed',
            unpushedCommits: 2,
            headSha: newSha,
          } satisfies Branch,
        ],
        changedBranches: [
          {
            name: 'main',
            oldHeadSha: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            newHeadSha: newSha,
            newCommits: [
              {
                fullSha: newSha,
                sha: 'bbbbbbb',
                branch: 'main',
                message: 'agent commit',
                author: 'agent',
                date: '2024-06-02T12:00:00Z',
                parentSha: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                parentShas: ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'],
                childShas: [],
              },
            ],
          },
        ],
        removedBranches: [],
        unpushedCommitShasByBranch: { main: [newSha, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'] },
        requiresFullRefresh: false,
      },
      baseSnapshot(),
      parseRepoFingerprint('main@@aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@@up@@0@@main:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa:1:0:local-only@@wt@@stash')!,
    );

    expect(outcomes).not.toBeNull();
    expect(outcomes!.some((outcome) => outcome.kind === 'commit')).toBe(true);
    expect(outcomes!.some((outcome) => outcome.kind === 'branchMetadataSync')).toBe(true);

    let snapshot = baseSnapshot();
    for (const outcome of outcomes!) {
      snapshot = applyMutationPatch(snapshot, outcome);
    }
    expect(snapshot.directCommits.some((commit) => commit.fullSha === newSha)).toBe(true);
    expect(snapshot.branches.find((branch) => branch.name === 'main')?.headSha).toBe(newSha);
    expect(snapshot.checkedOutRef?.headSha).toBe(newSha);
  });

  it('returns null when merge commits require full refresh', () => {
    const outcomes = buildGraphDeltaOutcomes(
      {
        fingerprint: 'fp',
        checkedOutRef,
        branches: [],
        changedBranches: [],
        removedBranches: [],
        unpushedCommitShasByBranch: {},
        requiresFullRefresh: true,
      },
      baseSnapshot(),
      null,
    );
    expect(outcomes).toBeNull();
  });
});

describe('patchBranchMetadataSync', () => {
  it('removes deleted branch previews', () => {
    const snapshot = {
      ...baseSnapshot(),
      branchCommitPreviews: {
        ...baseSnapshot().branchCommitPreviews,
        feature: [],
      },
      branches: [
        ...baseSnapshot().branches,
        {
          name: 'feature',
          commitsAhead: 1,
          commitsBehind: 0,
          lastCommitDate: '2024-06-01T12:00:00Z',
          lastCommitAuthor: 'test',
          status: 'fresh' as const,
          remoteSyncStatus: 'local-only' as const,
          unpushedCommits: 0,
          headSha: 'cccccccccccccccccccccccccccccccccccccccc',
        },
      ],
    };
    const next = applyMutationPatch(
      snapshot,
      outcomeFromBranchMetadataSync({
        branches: baseSnapshot().branches,
        defaultBranch: 'main',
        removedBranchNames: ['feature'],
        unpushedCommitShasByBranch: { main: [] },
        branchUniqueAheadCounts: { main: 1 },
        checkedOutRef,
      }),
    );
    expect(next.branchCommitPreviews.feature).toBeUndefined();
    expect(next.branches.some((branch) => branch.name === 'feature')).toBe(false);
  });
});

describe('external commit patch', () => {
  it('links parent to child for agent commits', () => {
    const parentSha = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    const newSha = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
    const next = applyMutationPatch(
      baseSnapshot(),
      outcomeFromCommitData({
        branchName: 'main',
        fullSha: newSha,
        sha: 'bbbbbbb',
        message: 'agent commit',
        author: 'agent',
        date: '2024-06-02T12:00:00Z',
        parentSha,
        parentShas: [parentSha],
        checkedOutRef,
      }),
    );
    const parent = next.directCommits.find((commit) => commit.fullSha === parentSha);
    expect(parent?.childShas).toContain(newSha);
  });
});
