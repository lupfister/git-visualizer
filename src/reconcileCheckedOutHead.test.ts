import { describe, expect, it } from 'vitest';
import type { CheckedOutRef, RepoQuickState, RepoVisualSnapshot } from '../types';
import {
  mergeCheckedOutRefWithQuickState,
  mergeSnapshotCheckedOutRefWithQuickState,
} from './reconcileCheckedOutHead';

const baseRef = (overrides: Partial<CheckedOutRef> = {}): CheckedOutRef => ({
  headSha: 'newcommitaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  branchName: 'main',
  hasUncommittedChanges: false,
  parentSha: 'parentbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
  ...overrides,
});

const quick = (overrides: Partial<RepoQuickState> = {}): RepoQuickState => ({
  repoPath: '/repo',
  headSha: 'oldheadcccccccccccccccccccccccccccccccccccc',
  upstreamSha: null,
  hasUncommittedChanges: true,
  ...overrides,
});

const snapshotWithHead = (headSha: string): RepoVisualSnapshot => ({
  path: '/repo',
  defaultBranch: 'main',
  checkedOutRef: baseRef({ headSha }),
  branches: [{ name: 'main', headSha, commitsAhead: 0, unpushedCommits: 0, remoteSyncStatus: 'on-github', status: 'fresh', lastCommitDate: '', lastCommitAuthor: '' }],
  mergeNodes: [],
  directCommits: [{
    fullSha: headSha,
    sha: headSha.slice(0, 7),
    parentSha: null,
    parentShas: [],
    childShas: [],
    branch: 'main',
    message: 'commit',
    author: 'a',
    date: '2024-01-01',
    kind: 'commit',
  }],
  unpushedDirectCommits: [],
  branchCommitPreviews: { main: [{
    fullSha: headSha,
    sha: headSha.slice(0, 7),
    parentSha: null,
    parentShas: [],
    childShas: [],
    message: 'commit',
    author: 'a',
    date: '2024-01-01',
    kind: 'commit',
  }] },
  unpushedCommitShasByBranch: {},
  branchParentByName: {},
  laneByBranch: {},
  branchUniqueAheadCounts: {},
  worktrees: [],
  stashes: [],
});

describe('mergeCheckedOutRefWithQuickState', () => {
  it('keeps clean post-commit head when quick state is still on the old dirty head', () => {
    const headSha = 'newcommitaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    const snapshot = snapshotWithHead(headSha);
    const merged = mergeCheckedOutRefWithQuickState(
      baseRef({ headSha, hasUncommittedChanges: false }),
      quick({ headSha: 'oldheadcccccccccccccccccccccccccccccccccccc', hasUncommittedChanges: true }),
      snapshot,
    );
    expect(merged.headSha).toBe(headSha);
    expect(merged.hasUncommittedChanges).toBe(false);
  });

  it('applies clean quick state when heads match after external discard', () => {
    const headSha = 'sharedheaddddddddddddddddddddddddddddddddddd';
    const snapshot = snapshotWithHead(headSha);
    const merged = mergeCheckedOutRefWithQuickState(
      baseRef({ headSha, hasUncommittedChanges: true }),
      quick({ headSha, hasUncommittedChanges: false }),
      snapshot,
    );
    expect(merged.hasUncommittedChanges).toBe(false);
  });

  it('shows dirty when snapshot is clean but git quick state is dirty at the same head', () => {
    const headSha = 'sharedheadeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
    const snapshot = snapshotWithHead(headSha);
    const merged = mergeCheckedOutRefWithQuickState(
      baseRef({ headSha, hasUncommittedChanges: false }),
      quick({ headSha, hasUncommittedChanges: true }),
      snapshot,
    );
    expect(merged.hasUncommittedChanges).toBe(true);
  });

  it('ignores stale dirty probe only for protected post-commit head', () => {
    const headSha = 'sharedheadffffffffffffffffffffffffffffffff';
    const snapshot = snapshotWithHead(headSha);
    const merged = mergeCheckedOutRefWithQuickState(
      baseRef({ headSha, hasUncommittedChanges: false }),
      quick({ headSha, hasUncommittedChanges: true }),
      snapshot,
      { protectedHeadSha: headSha },
    );
    expect(merged.hasUncommittedChanges).toBe(false);
  });
});

describe('mergeSnapshotCheckedOutRefWithQuickState', () => {
  it('preserves patched snapshot ref through merge', () => {
    const headSha = 'newcommitffffffffffffffffffffffffffffffff';
    const snapshot = snapshotWithHead(headSha);
    const merged = mergeSnapshotCheckedOutRefWithQuickState(
      { ...snapshot, checkedOutRef: baseRef({ headSha, hasUncommittedChanges: false }) },
      quick({ headSha: 'oldheadgggggggggggggggggggggggggggggggggg', hasUncommittedChanges: true }),
    );
    expect(merged.checkedOutRef?.headSha).toBe(headSha);
    expect(merged.checkedOutRef?.hasUncommittedChanges).toBe(false);
  });
});
