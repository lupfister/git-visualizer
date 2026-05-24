import { describe, expect, it } from 'vitest';
import type { Branch } from '../types';
import { injectWorktreeUncommittedPreviews } from './injectWorktreeUncommitted';
import { buildWorktreeSessions, isEmptyBranchGraphPlaceholder } from './worktreeSessions';
import type { WorktreeInfo } from '../types';

const branch = (name: string, headSha: string): Branch => ({
  name,
  commitsAhead: 0,
  commitsBehind: 0,
  lastCommitDate: '2024-01-01T00:00:00Z',
  lastCommitAuthor: 'You',
  status: 'fresh',
  remoteSyncStatus: 'local-only',
  unpushedCommits: 0,
  headSha,
});

const wt = (overrides: Partial<WorktreeInfo>): WorktreeInfo => ({
  path: '/repo',
  pathExists: true,
  headSha: 'abc1234567890abcdef',
  branchName: 'main',
  parentSha: null,
  isCurrent: true,
  isPrunable: false,
  hasUncommittedChanges: false,
  ...overrides,
});

describe('injectWorktreeUncommittedPreviews', () => {
  it('injects distinct working tree nodes for two dirty worktrees', () => {
    const worktrees = [
      wt({ path: '/repo', branchName: 'main', headSha: 'aaaaaaaaaaaa1111', isCurrent: true, hasUncommittedChanges: true }),
      wt({
        path: '/repo/wt-feature',
        branchName: 'feature',
        headSha: 'bbbbbbbbbbbb2222',
        isCurrent: false,
        hasUncommittedChanges: true,
      }),
    ];
    const sessions = buildWorktreeSessions(worktrees, '/repo');
    const result = injectWorktreeUncommittedPreviews({
      sessions,
      branches: [branch('main', 'aaaaaaaaaaaa1111'), branch('feature', 'bbbbbbbbbbbb2222')],
      branchCommitPreviews: {},
      branchUniqueAheadCounts: {},
      directCommits: [],
      defaultBranch: 'main',
    });
    const allPreviews = Object.values(result.branchCommitPreviews).flat();
    const worktreeNodes = allPreviews.filter((preview) => preview.kind === 'uncommitted');
    expect(worktreeNodes).toHaveLength(2);
    expect(new Set(worktreeNodes.map((preview) => preview.fullSha)).size).toBe(2);
    expect(worktreeNodes.some((preview) => preview.fullSha === 'WORKING_TREE')).toBe(true);
    expect(worktreeNodes.some((preview) => preview.fullSha.startsWith('WORKING_TREE:'))).toBe(true);
    expect(result.branches.find((b) => b.name === 'feature')?.headSha).toMatch(/^WORKING_TREE:/);
  });

  it('injects worktree nodes for clean worktrees without mutating branch headSha', () => {
    const worktrees = [
      wt({ path: '/repo', branchName: 'main', headSha: 'aaaaaaaaaaaa1111', isCurrent: true }),
      wt({
        path: '/repo/wt-feature',
        branchName: 'feature',
        headSha: 'bbbbbbbbbbbb2222',
        isCurrent: false,
      }),
    ];
    const sessions = buildWorktreeSessions(worktrees, '/repo');
    const result = injectWorktreeUncommittedPreviews({
      sessions,
      branches: [branch('main', 'aaaaaaaaaaaa1111'), branch('feature', 'bbbbbbbbbbbb2222')],
      branchCommitPreviews: {},
      branchUniqueAheadCounts: {},
      directCommits: [],
      defaultBranch: 'main',
    });
    const allPreviews = Object.values(result.branchCommitPreviews).flat();
    const worktreeNodes = allPreviews.filter((preview) => preview.kind === 'uncommitted');
    expect(worktreeNodes).toHaveLength(2);
    expect(result.branches.find((b) => b.name === 'main')?.headSha).toBe('aaaaaaaaaaaa1111');
    expect(result.branches.find((b) => b.name === 'feature')?.headSha).toBe('bbbbbbbbbbbb2222');
  });

  it('strips empty branch placeholder when injecting worktree on same branch', () => {
    const headSha = 'bbbbbbbbbbbb2222';
    const worktrees = [
      wt({ path: '/repo/wt', branchName: 'feature', headSha, isCurrent: false }),
    ];
    const sessions = buildWorktreeSessions(worktrees, '/repo');
    const result = injectWorktreeUncommittedPreviews({
      sessions,
      branches: [branch('feature', headSha)],
      branchCommitPreviews: {
        feature: [
          {
            fullSha: `BRANCH_HEAD:feature:${headSha}`,
            sha: 'empty',
            parentSha: 'aaaaaaaaaaaa1111',
            message: '',
            author: 'You',
            date: '2024-01-01T00:00:00Z',
            kind: 'stash',
          },
        ],
      },
      branchUniqueAheadCounts: {},
      directCommits: [],
      defaultBranch: 'main',
    });
    const featurePreviews = result.branchCommitPreviews.feature ?? [];
    expect(featurePreviews.some((preview) => isEmptyBranchGraphPlaceholder(preview))).toBe(false);
    expect(featurePreviews.some((preview) => preview.kind === 'uncommitted')).toBe(true);
  });
});
