import { describe, expect, it } from 'vitest';
import type { CheckedOutRef, RepoVisualSnapshot } from '../types';
import { shouldBlockIncomingSnapshotApply, shouldRejectRegressionFromProtectedHead } from './postCommitSnapshotGuard';

const guardSha = '9c6d9cbe200eeff55d6112a73bf30784cefa17f2';
const mergeSha = 'edf80750eafbd4c3fbfef839f396b4bdb33ccc20';
const olderSha = '76ab805700000000000000000000000000000000';

const checkedOutRef = (branchName: string, headSha: string): CheckedOutRef => ({
  branchName,
  headSha,
  hasUncommittedChanges: false,
  parentSha: null,
});

const snapshotWithHead = (branchName: string, headSha: string, extraShas: string[] = []): RepoVisualSnapshot => ({
  path: '/repo',
  name: 'repo',
  defaultBranch: 'main',
  branches: [],
  mergeNodes: [],
  directCommits: [headSha, ...extraShas].map((fullSha) => ({
    fullSha,
    sha: fullSha.slice(0, 7),
    branch: branchName,
    message: 'commit',
    author: 'test',
    date: '2024-06-01T12:00:00Z',
    parentSha: null,
    parentShas: [],
  })),
  unpushedDirectCommits: [],
  mergeTargetBranchByCommitSha: {},
  unpushedCommitShasByBranch: {},
  checkedOutRef: checkedOutRef(branchName, headSha),
  worktrees: [],
  stashes: [],
  branchCommitPreviews: {},
  branchParentByName: {},
  laneByBranch: {},
  branchUniqueAheadCounts: {},
  loaded: true,
  cacheSchemaVersion: 1,
  updatedAtMs: 0,
});

describe('shouldRejectRegressionFromProtectedHead', () => {
  it('rejects a same-branch head regression behind the guarded tip', () => {
    const live = snapshotWithHead('layout-overhaul-1', guardSha);
    expect(
      shouldRejectRegressionFromProtectedHead(live, guardSha, olderSha, 'layout-overhaul-1'),
    ).toBe(true);
  });

  it('allows an external checkout or merge that moves to another branch', () => {
    const live = snapshotWithHead('layout-overhaul-1', guardSha);
    const incoming = snapshotWithHead('main', mergeSha, [guardSha]);
    expect(
      shouldRejectRegressionFromProtectedHead(
        live,
        guardSha,
        incoming.checkedOutRef?.headSha ?? null,
        incoming.checkedOutRef?.branchName ?? null,
      ),
    ).toBe(false);
  });
});

describe('shouldBlockIncomingSnapshotApply', () => {
  it('blocks an incoming snapshot that is missing the guarded post-commit head', () => {
    const live = snapshotWithHead('layout-overhaul-1', guardSha);
    const incoming = snapshotWithHead('layout-overhaul-1', olderSha);
    expect(shouldBlockIncomingSnapshotApply(live, incoming, guardSha)).toBe(true);
  });

  it('does not block a merge snapshot that advances main while guarding a feature tip', () => {
    const live = snapshotWithHead('layout-overhaul-1', guardSha);
    const incoming = snapshotWithHead('main', mergeSha, [guardSha]);
    expect(shouldBlockIncomingSnapshotApply(live, incoming, guardSha)).toBe(false);
  });
});
