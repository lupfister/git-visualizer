import { describe, expect, it } from 'vitest';
import { buildEnsureCommitAppPreviewOpts, isPreviewEligibleCommitKey } from './commitAppPreviewKey';
import type { DirectCommit, GitStashEntry, WorktreeInfo } from '../types';

const baseDirectCommit: DirectCommit = {
  fullSha: 'abc123def4567890abc123def4567890abc12345',
  sha: 'abc123d',
  branch: 'main',
  message: 'Fix layout',
  author: 'dev',
  date: '2026-01-01T00:00:00Z',
  parentSha: 'parent1234567890parent1234567890parent123456',
  parentShas: ['parent1234567890parent1234567890parent123456'],
  childShas: [],
};

describe('commitAppPreviewKey', () => {
  it('skips branch placeholders and empty branch heads', () => {
    expect(isPreviewEligibleCommitKey('BRANCH_HEAD:feature', 'branch-created')).toBe(false);
    expect(isPreviewEligibleCommitKey('deadbeef', 'branch-created')).toBe(false);
    expect(isPreviewEligibleCommitKey('deadbeef', 'commit')).toBe(true);
  });

  it('builds worktree preview opts for the current checkout', () => {
    const worktrees: WorktreeInfo[] = [
      {
        path: '/repo',
        pathExists: true,
        headSha: 'headsha1234567890headsha1234567890headsha12',
        branchName: 'main',
        parentSha: null,
        isCurrent: true,
        isPrunable: false,
        hasUncommittedChanges: true,
      },
    ];

    const opts = buildEnsureCommitAppPreviewOpts({
      commitKey: 'WORKING_TREE',
      repoPath: '/repo',
      directCommits: [baseDirectCommit],
      worktrees,
      stashes: [],
      checkedOutRef: {
        branchName: 'main',
        headSha: 'headsha1234567890headsha1234567890headsha12',
        hasUncommittedChanges: true,
      },
    });

    expect(opts).toMatchObject({
      kind: 'uncommitted',
      worktreePath: '/repo',
      worktreeHasUncommitted: true,
    });
  });

  it('builds stash preview opts from stash key', () => {
    const stashes: GitStashEntry[] = [
      {
        index: 0,
        baseSha: 'stashbase1234567890stashbase1234567890stashbas',
        createdAt: '2026-01-01T00:00:00Z',
        message: 'wip',
      },
    ];

    const opts = buildEnsureCommitAppPreviewOpts({
      commitKey: 'STASH:0',
      repoPath: '/repo',
      directCommits: [],
      worktrees: [],
      stashes,
      checkedOutRef: null,
    });

    expect(opts).toMatchObject({
      kind: 'stash',
      stashIndex: 0,
      stashBaseSha: 'stashbase1234567890stashbase1234567890stashbas',
    });
  });

  it('builds normal commit preview opts from direct commits', () => {
    const opts = buildEnsureCommitAppPreviewOpts({
      commitKey: baseDirectCommit.fullSha,
      repoPath: '/repo',
      directCommits: [baseDirectCommit],
      worktrees: [],
      stashes: [],
      checkedOutRef: null,
    });

    expect(opts).toMatchObject({
      fullSha: baseDirectCommit.fullSha,
      parentSha: baseDirectCommit.parentSha,
      kind: 'commit',
      branchName: 'main',
    });
  });
});
