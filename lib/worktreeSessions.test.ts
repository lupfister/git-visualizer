import { describe, expect, it } from 'vitest';
import type { WorktreeInfo } from '../types';
import {
  buildWorktreeAccentByCommitId,
  buildWorktreeSessions,
  isWorkingTreeCommitId,
  resolveCommitAccent,
  workingTreeIdForPath,
} from './worktreeSessions';

const baseWorktree = (overrides: Partial<WorktreeInfo>): WorktreeInfo => ({
  path: '/repo',
  pathExists: true,
  headSha: 'abc1234567890',
  branchName: 'main',
  parentSha: null,
  isCurrent: false,
  isPrunable: false,
  hasUncommittedChanges: false,
  ...overrides,
});

describe('worktreeSessions', () => {
  it('assigns checked accent to current worktree and worktree-violet to first other', () => {
    const sessions = buildWorktreeSessions(
      [
        baseWorktree({ path: '/repo/wt-b', headSha: 'bbbbbbbbbbbb', branchName: 'feature', isCurrent: false }),
        baseWorktree({ path: '/repo', headSha: 'aaaaaaaaaaaa', branchName: 'main', isCurrent: true }),
      ],
      '/repo',
    );
    const current = sessions.find((session) => session.isCurrent);
    const other = sessions.find((session) => !session.isCurrent);
    expect(current?.accentToken).toBe('checked');
    expect(other?.accentToken).toBe('worktree-violet');
  });

  it('uses stable working tree ids', () => {
    expect(workingTreeIdForPath('/repo', true)).toBe('WORKING_TREE');
    expect(workingTreeIdForPath('/repo/wt-b', false)).toMatch(/^WORKING_TREE:/);
    expect(isWorkingTreeCommitId('WORKING_TREE')).toBe(true);
    expect(isWorkingTreeCommitId('WORKING_TREE:abc')).toBe(true);
    expect(isWorkingTreeCommitId('deadbeef')).toBe(false);
  });

  it('resolveCommitAccent prefers current on duplicate head sha', () => {
    const sessions = buildWorktreeSessions(
      [
        baseWorktree({ path: '/repo', headSha: 'same-sha-12345', branchName: 'main', isCurrent: true }),
        baseWorktree({ path: '/repo/wt-2', headSha: 'same-sha-12345', branchName: null, isCurrent: false }),
      ],
      '/repo',
    );
    expect(resolveCommitAccent('same-sha-12345', 'commit', sessions)).toBe('checked');
  });

  it('buildWorktreeAccentByCommitId maps head and working tree ids', () => {
    const sessions = buildWorktreeSessions(
      [
        baseWorktree({
          path: '/repo',
          headSha: 'head1111111111',
          branchName: 'main',
          isCurrent: true,
          hasUncommittedChanges: true,
        }),
      ],
      '/repo',
      { branchName: 'main', headSha: 'head1111111111', hasUncommittedChanges: true },
    );
    const map = buildWorktreeAccentByCommitId(sessions);
    expect(map.get('head1111111111')).toBe('checked');
    expect(map.get('WORKING_TREE')).toBe('checked');
  });
});
