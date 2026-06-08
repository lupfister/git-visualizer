import { describe, expect, it } from 'vitest';
import { formatWorktreeSyncSignature, formatWorktreeSessionLayoutSignature } from './worktreeSignature';
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

const tipSha = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';

describe('resolveWorktreeAnchorBranchName', () => {
  it('prefers a child branch over default when detached at a shared tip sha', async () => {
    const { resolveWorktreeAnchorBranchName } = await import('../lib/worktreeSessions');
    const branch = resolveWorktreeAnchorBranchName(
      {
        path: '/repo',
        pathExists: true,
        branchName: null,
        headSha: tipSha,
        parentSha: 'older',
        hasUncommittedChanges: true,
        isCurrent: true,
        accentToken: 'checked',
        workingTreeId: 'WORKING_TREE',
      },
      [
        { name: 'main', headSha: tipSha, parentBranch: null },
        { name: 'cursor/feature', headSha: tipSha, parentBranch: 'main' },
      ],
      'main',
    );
    expect(branch).toBe('cursor/feature');
  });

  it('still resolves the child branch when its head was replaced by a worktree id', async () => {
    const { resolveWorktreeAnchorBranchName } = await import('../lib/worktreeSessions');
    const branch = resolveWorktreeAnchorBranchName(
      {
        path: '/repo',
        pathExists: true,
        branchName: null,
        headSha: tipSha,
        parentSha: 'older',
        hasUncommittedChanges: true,
        isCurrent: true,
        accentToken: 'checked',
        workingTreeId: 'WORKING_TREE',
      },
      [
        { name: 'main', headSha: tipSha, parentBranch: null },
        { name: 'cursor/feature', headSha: 'WORKING_TREE:abc', parentBranch: 'main' },
      ],
      'main',
      {
        'cursor/feature': [{ fullSha: tipSha }],
      },
    );
    expect(branch).toBe('cursor/feature');
  });
});

describe('formatWorktreeSessionLayoutSignature', () => {
  it('includes parent anchor for layout cache keys', () => {
    const signature = formatWorktreeSessionLayoutSignature([
      {
        path: '/repo-a',
        pathExists: true,
        branchName: 'feature',
        headSha: 'def5678',
        parentSha: 'abc1234',
        hasUncommittedChanges: false,
        isCurrent: false,
        accentToken: 'worktree-violet',
        workingTreeId: 'WORKING_TREE:abc',
      },
    ]);
    expect(signature).toBe('/repo-a:def5678:abc1234:feature');
  });
});
