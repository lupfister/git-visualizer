import { describe, expect, it } from 'vitest';
import type { Branch } from '../types';
import { injectWorktreeUncommittedPreviews } from './injectWorktreeUncommitted';
import { buildWorktreeSessions } from './worktreeSessions';
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
  hasUncommittedChanges: true,
  ...overrides,
});

describe('injectWorktreeUncommittedPreviews', () => {
  it('injects distinct working tree nodes for two dirty worktrees', () => {
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
    const uncommitted = allPreviews.filter((preview) => preview.kind === 'uncommitted');
    expect(uncommitted).toHaveLength(2);
    expect(new Set(uncommitted.map((preview) => preview.fullSha)).size).toBe(2);
    expect(uncommitted.some((preview) => preview.fullSha === 'WORKING_TREE')).toBe(true);
    expect(uncommitted.some((preview) => preview.fullSha.startsWith('WORKING_TREE:'))).toBe(true);
  });
});
