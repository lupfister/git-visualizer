import { describe, expect, it } from 'vitest';
import type { RepoVisualSnapshot } from '../types';
import {
  applyMutationPatch,
  outcomeFromBranchMetadataSync,
  outcomeFromPush,
  outcomeFromStashDrop,
  outcomeFromStashDrops,
} from './repoMutationPatches';

function baseSnapshot(overrides: Partial<RepoVisualSnapshot> = {}): RepoVisualSnapshot {
  return {
    path: '/repo',
    name: 'repo',
    defaultBranch: 'main',
    branches: [
      {
        name: 'main',
        commitsAhead: 0,
        commitsBehind: 0,
        lastCommitDate: '2024-01-01T00:00:00Z',
        lastCommitAuthor: 'dev',
        status: 'fresh',
        remoteSyncStatus: 'on-github',
        unpushedCommits: 0,
        headSha: 'aaa1111',
      },
      {
        name: 'feature',
        commitsAhead: 1,
        commitsBehind: 0,
        lastCommitDate: '2024-01-02T00:00:00Z',
        lastCommitAuthor: 'dev',
        status: 'fresh',
        remoteSyncStatus: 'unpushed',
        unpushedCommits: 1,
        headSha: 'bbb2222',
      },
    ],
    mergeNodes: [],
    directCommits: [
      {
        fullSha: 'aaa1111',
        sha: 'aaa1111',
        parentSha: null,
        parentShas: [],
        childShas: ['bbb2222'],
        branch: 'main',
        message: 'root',
        author: 'dev',
        date: '2024-01-01T00:00:00Z',
      },
      {
        fullSha: 'bbb2222',
        sha: 'bbb2222',
        parentSha: 'aaa1111',
        parentShas: ['aaa1111'],
        childShas: [],
        branch: 'feature',
        message: 'feature work',
        author: 'dev',
        date: '2024-01-02T00:00:00Z',
      },
    ],
    unpushedDirectCommits: [
      {
        fullSha: 'bbb2222',
        sha: 'bbb2222',
        parentSha: 'aaa1111',
        parentShas: ['aaa1111'],
        childShas: [],
        branch: 'feature',
        message: 'feature work',
        author: 'dev',
        date: '2024-01-02T00:00:00Z',
      },
    ],
    mergeTargetBranchByCommitSha: {},
    unpushedCommitShasByBranch: {
      main: [],
      feature: ['bbb2222'],
    },
    checkedOutRef: {
      branchName: 'feature',
      headSha: 'bbb2222',
      hasUncommittedChanges: false,
    },
    worktrees: [],
    stashes: [
      { index: 0, baseSha: 'aaa1111', createdAt: '2024-01-03T00:00:00Z', message: 'wip' },
      { index: 1, baseSha: 'bbb2222', createdAt: '2024-01-04T00:00:00Z', message: 'older' },
    ],
    branchCommitPreviews: {
      main: [
        {
          fullSha: 'aaa1111',
          sha: 'aaa1111',
          parentSha: null,
          parentShas: [],
          childShas: ['bbb2222'],
          message: 'root',
          author: 'dev',
          date: '2024-01-01T00:00:00Z',
        },
      ],
      feature: [
        {
          fullSha: 'bbb2222',
          sha: 'bbb2222',
          parentSha: 'aaa1111',
          parentShas: ['aaa1111'],
          childShas: [],
          message: 'feature work',
          author: 'dev',
          date: '2024-01-02T00:00:00Z',
        },
      ],
    },
    branchParentByName: { feature: 'main' },
    laneByBranch: { main: 0, feature: 1 },
    branchUniqueAheadCounts: { feature: 1 },
    loaded: true,
    cacheSchemaVersion: 1,
    updatedAtMs: 1,
    ...overrides,
  };
}

describe('applyMutationPatch stashDrop', () => {
  it('removes stash by index and reindexes remaining entries', () => {
    const next = applyMutationPatch(baseSnapshot(), outcomeFromStashDrop(0));
    expect(next.stashes).toHaveLength(1);
    expect(next.stashes[0]?.index).toBe(0);
    expect(next.stashes[0]?.message).toBe('older');
  });

  it('removes multiple stashes and reindexes', () => {
    const next = applyMutationPatch(baseSnapshot(), outcomeFromStashDrops([1, 0]));
    expect(next.stashes).toHaveLength(0);
  });
});

describe('applyMutationPatch push', () => {
  it('clears unpushed metadata for pushed branches', () => {
    const next = applyMutationPatch(baseSnapshot(), outcomeFromPush(['feature']));
    const feature = next.branches.find((branch) => branch.name === 'feature');
    expect(feature?.unpushedCommits).toBe(0);
    expect(feature?.commitsAhead).toBe(1);
    expect(feature?.remoteSyncStatus).toBe('on-github');
    expect(next.unpushedCommitShasByBranch.feature).toEqual([]);
    expect(next.unpushedDirectCommits).toHaveLength(0);
    expect(next.branchUniqueAheadCounts.feature).toBe(1);
  });

  it('clears unpushed commits on pushed branches when sha map was stale', () => {
    const next = applyMutationPatch(
      baseSnapshot({
        unpushedCommitShasByBranch: {
          main: [],
          feature: [],
        },
      }),
      outcomeFromPush(['feature']),
    );
    expect(next.unpushedDirectCommits).toHaveLength(0);
  });
});

describe('applyMutationPatch branchMetadataSync', () => {
  it('reconciles unpushedDirectCommits from branch sha map', () => {
    const next = applyMutationPatch(baseSnapshot(), outcomeFromBranchMetadataSync({
      branches: baseSnapshot().branches.map((branch) => (
        branch.name === 'feature'
          ? { ...branch, commitsAhead: 0, unpushedCommits: 0, remoteSyncStatus: 'on-github' as const }
          : branch
      )),
      defaultBranch: 'main',
      removedBranchNames: [],
      unpushedCommitShasByBranch: { main: [], feature: [] },
      branchUniqueAheadCounts: { feature: 0 },
      checkedOutRef: baseSnapshot().checkedOutRef,
    }));
    expect(next.unpushedDirectCommits).toHaveLength(0);
  });

  it('uses explicit unpushedDirectCommits when provided', () => {
    const next = applyMutationPatch(baseSnapshot(), outcomeFromBranchMetadataSync({
      branches: baseSnapshot().branches,
      defaultBranch: 'main',
      removedBranchNames: [],
      unpushedCommitShasByBranch: { main: [], feature: ['bbb2222'] },
      unpushedDirectCommits: baseSnapshot().unpushedDirectCommits,
      branchUniqueAheadCounts: { feature: 1 },
      checkedOutRef: baseSnapshot().checkedOutRef,
      layoutTopologyChanged: false,
    }));
    expect(next.unpushedDirectCommits).toHaveLength(1);
  });

  it('preserves remote-only branches when local metadata sync omits them', () => {
    const remoteBranch = {
      name: 'cursor/commit-app-previews-7896',
      commitsAhead: 1,
      commitsBehind: 0,
      lastCommitDate: '2024-01-03T00:00:00Z',
      lastCommitAuthor: 'dev',
      status: 'fresh' as const,
      remoteSyncStatus: 'on-github' as const,
      unpushedCommits: 0,
      headSha: 'c131b6f10b7737b2974df51887149d9127b2a648',
      parentBranch: 'main',
    };
    const snapshot = baseSnapshot({
      branches: [...baseSnapshot().branches, remoteBranch],
      directCommits: [
        ...baseSnapshot().directCommits,
        {
          fullSha: 'c131b6f10b7737b2974df51887149d9127b2a648',
          sha: 'c131b6f1',
          parentSha: 'aaa1111',
          parentShas: ['aaa1111'],
          childShas: [],
          branch: remoteBranch.name,
          message: 'Add static app preview screenshots per commit',
          author: 'dev',
          date: '2024-01-03T00:00:00Z',
          kind: 'commit',
          isRemote: true,
        },
      ],
      branchCommitPreviews: {
        ...baseSnapshot().branchCommitPreviews,
        [remoteBranch.name]: [{
          fullSha: 'c131b6f10b7737b2974df51887149d9127b2a648',
          sha: 'c131b6f1',
          parentSha: 'aaa1111',
          message: 'Add static app preview screenshots per commit',
          author: 'dev',
          date: '2024-01-03T00:00:00Z',
          kind: 'commit',
          isRemote: true,
        }],
      },
      branchUniqueAheadCounts: {
        feature: 1,
        [remoteBranch.name]: 1,
      },
      branchParentByName: {
        main: null,
        feature: 'main',
        [remoteBranch.name]: 'main',
      },
    });

    const next = applyMutationPatch(snapshot, outcomeFromBranchMetadataSync({
      branches: baseSnapshot().branches,
      defaultBranch: 'main',
      removedBranchNames: [],
      unpushedCommitShasByBranch: { main: [], feature: [] },
      branchUniqueAheadCounts: { feature: 1 },
      checkedOutRef: baseSnapshot().checkedOutRef,
    }));

    expect(next.branches.some((branch) => branch.name === remoteBranch.name)).toBe(true);
    expect(next.branchCommitPreviews[remoteBranch.name]).toHaveLength(1);
    expect(next.branchUniqueAheadCounts[remoteBranch.name]).toBe(1);
    expect(next.directCommits.some((commit) => commit.fullSha === remoteBranch.headSha)).toBe(true);
  });
});

describe('applyMutationPatch commit', () => {
  it('adds a commit node and updates branch head', () => {
    const next = applyMutationPatch(baseSnapshot({
      worktrees: [{
        path: '/repo',
        pathExists: true,
        headSha: 'bbb2222',
        branchName: 'feature',
        parentSha: 'aaa1111',
        isCurrent: true,
        isPrunable: false,
        hasUncommittedChanges: false,
      }],
    }), {
      kind: 'commit',
      layoutTopologyChanged: true,
      commit: {
        checkedOutRef: {
          branchName: 'feature',
          headSha: 'ccc3333',
          hasUncommittedChanges: false,
        },
        branchName: 'feature',
        fullSha: 'ccc3333fullsha000000000000000000000000',
        sha: 'ccc3333',
        message: 'new commit',
        author: 'dev',
        date: '2024-01-05T00:00:00Z',
        parentSha: 'bbb2222',
        parentShas: ['bbb2222'],
      },
    });

    expect(next.directCommits.some((commit) => commit.fullSha.startsWith('ccc3333'))).toBe(true);
    expect(next.branches.find((branch) => branch.name === 'feature')?.headSha.startsWith('ccc3333')).toBe(true);
    expect(next.unpushedCommitShasByBranch.feature).toContain('ccc3333fullsha000000000000000000000000');
    expect(next.worktrees.find((worktree) => worktree.isCurrent)?.headSha).toBe('ccc3333');
    expect(next.branchCommitPreviews.feature?.some((commit) => commit.fullSha.startsWith('ccc3333'))).toBe(true);
    expect(next.branchCommitPreviews.main?.some((commit) => commit.fullSha.startsWith('ccc3333'))).toBe(false);
  });
});

describe('applyMutationPatch branchDelete', () => {
  it('filters deleted branches and related graph data', () => {
    const next = applyMutationPatch(baseSnapshot(), {
      kind: 'branchDelete',
      layoutTopologyChanged: true,
      deletedBranches: ['feature'],
      checkedOutRef: {
        branchName: 'main',
        headSha: 'aaa1111',
        hasUncommittedChanges: false,
      },
    });

    expect(next.branches.some((branch) => branch.name === 'feature')).toBe(false);
    expect(next.directCommits.some((commit) => commit.branch === 'feature')).toBe(false);
    expect(next.checkedOutRef?.branchName).toBe('main');
  });
});

describe('applyMutationPatch markDirty', () => {
  it('flags checked out ref and current worktree as dirty', () => {
    const next = applyMutationPatch(baseSnapshot(), {
      kind: 'markDirty',
      layoutTopologyChanged: false,
      checkedOutRef: {
        branchName: 'feature',
        headSha: 'bbb2222',
        hasUncommittedChanges: true,
      },
    });
    expect(next.checkedOutRef?.hasUncommittedChanges).toBe(true);
  });
});
