import { describe, expect, it } from 'vitest';
import type { RepoVisualSnapshot } from '../types';
import {
  branchHeadDigestFromSnapshot,
  branchRefDigestFromSnapshot,
  isLiteBranchHeadDigest,
  isRepoSnapshotBehindPeek,
} from './repoSyncPeek';
import { formatWorktreeSyncSignature } from './worktreeSignature';

const baseSha = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const nextSha = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';

function snapshot(overrides: Partial<RepoVisualSnapshot> = {}): RepoVisualSnapshot {
  return {
    path: '/repo',
    name: 'repo',
    defaultBranch: 'main',
    branches: [
      {
        name: 'main',
        commitsAhead: 1,
        commitsBehind: 0,
        lastCommitDate: '2026-01-01T00:00:00Z',
        lastCommitAuthor: 'Luca',
        status: 'fresh',
        remoteSyncStatus: 'unpushed',
        unpushedCommits: 1,
        headSha: baseSha,
      },
    ],
    mergeNodes: [],
    directCommits: [
      {
        fullSha: baseSha,
        sha: baseSha.slice(0, 7),
        branch: 'main',
        message: 'base',
        author: 'Luca',
        date: '2026-01-01T00:00:00Z',
        parentSha: null,
        parentShas: [],
        childShas: [],
      },
    ],
    unpushedDirectCommits: [
      {
        fullSha: baseSha,
        sha: baseSha.slice(0, 7),
        branch: 'main',
        message: 'base',
        author: 'Luca',
        date: '2026-01-01T00:00:00Z',
        parentSha: null,
        parentShas: [],
        childShas: [],
      },
    ],
    mergeTargetBranchByCommitSha: {},
    unpushedCommitShasByBranch: { main: [baseSha] },
    checkedOutRef: {
      branchName: 'main',
      headSha: baseSha,
      parentSha: null,
      hasUncommittedChanges: true,
    },
    worktrees: [
      {
        path: '/repo',
        pathExists: true,
        headSha: baseSha,
        branchName: 'main',
        parentSha: null,
        isCurrent: true,
        isPrunable: false,
        hasUncommittedChanges: true,
      },
    ],
    stashes: [],
    branchCommitPreviews: { main: [{ fullSha: baseSha, sha: baseSha.slice(0, 7), message: 'base', author: 'Luca', date: '2026-01-01T00:00:00Z' }] },
    branchUniqueAheadCounts: { main: 1 },
    branchParentByName: {},
    laneByBranch: {},
    loaded: true,
    cacheSchemaVersion: 1,
    updatedAtMs: 0,
    ...overrides,
  };
}

function peekFor(snapshotValue: RepoVisualSnapshot, overrides: Partial<ReturnType<typeof parseParts>> = {}) {
  const parts = {
    headSha: snapshotValue.checkedOutRef?.headSha ?? '',
    dirty: snapshotValue.checkedOutRef?.hasUncommittedChanges ? '1' : '0',
    branchRefDigest: branchHeadDigestFromSnapshot(snapshotValue),
    worktreeSig: formatWorktreeSyncSignature(snapshotValue.worktrees),
    stashSig: '',
    headUnpushedCount: String(snapshotValue.unpushedDirectCommits.length),
    remoteHeadsDigest: 'remote-a',
    ...overrides,
  };
  return {
    signature: [
      parts.headSha,
      parts.dirty,
      parts.branchRefDigest,
      parts.worktreeSig,
      parts.stashSig,
      parts.headUnpushedCount,
      parts.remoteHeadsDigest,
    ].join('@@'),
  };
}

function parseParts() {
  return {
    headSha: '',
    dirty: '',
    branchRefDigest: '',
    worktreeSig: '',
    stashSig: '',
    headUnpushedCount: '',
    remoteHeadsDigest: '',
  };
}

describe('isRepoSnapshotBehindPeek', () => {
  it('treats dirty clear plus new HEAD as behind', () => {
    const current = snapshot();
    expect(isRepoSnapshotBehindPeek(current, peekFor(current, { headSha: nextSha, dirty: '0' }))).toBe(true);
  });

  it('treats a missing graph commit as behind even when checked-out ref moved', () => {
    const current = snapshot({
      checkedOutRef: { branchName: 'main', headSha: nextSha, parentSha: baseSha, hasUncommittedChanges: false },
    });
    expect(isRepoSnapshotBehindPeek(current, peekFor(current, { headSha: nextSha, dirty: '0' }))).toBe(true);
  });

  it('treats push status changes as behind', () => {
    const current = snapshot();
    const pushed = snapshot({
      branches: [{ ...current.branches[0], commitsAhead: 0, unpushedCommits: 0, remoteSyncStatus: 'on-github' }],
      unpushedDirectCommits: [],
      unpushedCommitShasByBranch: { main: [] },
    });
    expect(isRepoSnapshotBehindPeek(current, peekFor(pushed))).toBe(true);
  });

  it('treats worktree dirty/head changes as behind', () => {
    const current = snapshot();
    const cleanWorktree = snapshot({
      worktrees: [{ ...current.worktrees[0], hasUncommittedChanges: false }],
    });
    expect(isRepoSnapshotBehindPeek(current, peekFor(cleanWorktree))).toBe(true);
  });

  it('does not report behind when snapshot matches peek', () => {
    const current = snapshot();
    expect(isRepoSnapshotBehindPeek(current, peekFor(current))).toBe(false);
  });

  it('detects lite branch head digest format', () => {
    expect(isLiteBranchHeadDigest('main:abc|feature:def')).toBe(true);
    expect(isLiteBranchHeadDigest('main:abc:1:0:0:on-github:')).toBe(false);
  });

  it('compares legacy full branch digest when peek uses old format', () => {
    const current = snapshot();
    const legacyPeek = {
      signature: [
        current.checkedOutRef?.headSha ?? '',
        '1',
        branchRefDigestFromSnapshot(current),
        formatWorktreeSyncSignature(current.worktrees),
        '',
        String(current.unpushedDirectCommits.length),
        'remote-a',
      ].join('@@'),
    };
    expect(isRepoSnapshotBehindPeek(current, legacyPeek)).toBe(false);
  });
});
