import { describe, expect, it } from 'vitest';
import { formatWorktreeLayoutSignature, formatWorktreeSyncSignature } from './worktreeSignature';
import type { WorktreeInfo } from '../types';

describe('worktree dirty sync signatures', () => {
  it('detects linked worktree dirty changes in sync signature', () => {
    const clean: WorktreeInfo[] = [
      {
        path: '/repo',
        pathExists: true,
        headSha: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        branchName: 'main',
        parentSha: null,
        isCurrent: true,
        isPrunable: false,
        hasUncommittedChanges: false,
      },
      {
        path: '/repo/wt-a',
        pathExists: true,
        headSha: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
        branchName: 'feature',
        parentSha: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        isCurrent: false,
        isPrunable: false,
        hasUncommittedChanges: false,
      },
    ];
    const dirty: WorktreeInfo[] = [
      clean[0]!,
      { ...clean[1]!, hasUncommittedChanges: true },
    ];
    expect(formatWorktreeSyncSignature(clean)).not.toBe(formatWorktreeSyncSignature(dirty));
  });
});

describe('worktree layout signatures', () => {
  const main: WorktreeInfo = {
    path: '/repo',
    pathExists: true,
    headSha: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    branchName: 'main',
    parentSha: null,
    isCurrent: true,
    isPrunable: false,
    hasUncommittedChanges: false,
  };
  const linked: WorktreeInfo = {
    path: '/repo/wt-a',
    pathExists: true,
    headSha: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    branchName: 'feature',
    parentSha: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    isCurrent: false,
    isPrunable: false,
    hasUncommittedChanges: false,
  };

  it('changes when a linked worktree is added', () => {
    expect(formatWorktreeLayoutSignature([main])).not.toBe(formatWorktreeLayoutSignature([main, linked]));
  });

  it('ignores dirty-state-only changes', () => {
    expect(formatWorktreeLayoutSignature([main, linked])).toBe(
      formatWorktreeLayoutSignature([main, { ...linked, hasUncommittedChanges: true }]),
    );
  });
});
