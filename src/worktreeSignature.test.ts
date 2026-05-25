import { describe, expect, it } from 'vitest';
import { formatWorktreeSyncSignature } from './worktreeSignature';
import type { WorktreeInfo } from '../types';

const worktree = (overrides: Partial<WorktreeInfo> = {}): WorktreeInfo => ({
  path: '/repo',
  pathExists: true,
  headSha: 'abc1234',
  branchName: 'main',
  parentSha: null,
  isCurrent: true,
  isPrunable: false,
  hasUncommittedChanges: false,
  ...overrides,
});

describe('formatWorktreeSyncSignature', () => {
  it('includes head sha and branch name in stable sorted order', () => {
    const signature = formatWorktreeSyncSignature([
      worktree({ path: '/repo-b', branchName: 'feature', headSha: 'def5678' }),
      worktree({ path: '/repo-a', branchName: 'main', headSha: 'abc1234' }),
    ]);
    expect(signature).toBe(
      '/repo-a:abc1234:main:0|/repo-b:def5678:feature:0',
    );
  });

  it('marks dirty worktrees', () => {
    const signature = formatWorktreeSyncSignature([
      worktree({ hasUncommittedChanges: true }),
    ]);
    expect(signature).toBe('/repo:abc1234:main:1');
  });
});
