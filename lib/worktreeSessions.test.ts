import { describe, expect, it } from 'vitest';
import type { WorktreeInfo } from '../types';
import type { Branch } from '../types';
import {
  buildWorktreeAccentByCommitId,
  buildWorktreeAccentLookups,
  buildWorktreeSessions,
  isWorkingTreeCommitId,
  resolveBranchCheckoutAccent,
  resolveCommitAccent,
  selectedUncommittedSessions,
  sessionMatchesBranchCheckout,
  stripEmptyBranchPlaceholdersForWorktreeSessions,
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

  it('buildWorktreeAccentLookups colors each checked-out branch', () => {
    const sessions = buildWorktreeSessions(
      [
        baseWorktree({ path: '/repo/wt-b', headSha: 'bbbbbbbbbbbb', branchName: 'feature', isCurrent: false }),
        baseWorktree({ path: '/repo', headSha: 'aaaaaaaaaaaa', branchName: 'main', isCurrent: true }),
      ],
      '/repo',
    );
    const lookups = buildWorktreeAccentLookups(sessions);
    expect(resolveBranchCheckoutAccent('main', 'aaaaaaaaaaaa', lookups)).toBe('checked');
    expect(resolveBranchCheckoutAccent('feature', 'bbbbbbbbbbbb', lookups)).toBe('worktree-violet');
    expect(resolveBranchCheckoutAccent('other', undefined, lookups)).toBeNull();
  });

  it('buildWorktreeAccentByCommitId skips BRANCH_HEAD when a worktree session covers that branch', () => {
    const headSha = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
    const sessions = buildWorktreeSessions(
      [
        baseWorktree({ path: '/repo/wt-b', headSha, branchName: 'cursor-sdk', isCurrent: false }),
        baseWorktree({ path: '/repo', headSha: 'aaaaaaaaaaaa', branchName: 'main', isCurrent: true }),
      ],
      '/repo',
    );
    const map = buildWorktreeAccentByCommitId(sessions, [`BRANCH_HEAD:cursor-sdk:${headSha}`]);
    expect(map.get(`BRANCH_HEAD:cursor-sdk:${headSha}`)).toBeUndefined();
    expect(map.get(sessions.find((session) => session.branchName === 'cursor-sdk')!.workingTreeId)).toBe('worktree-violet');
    expect(map.get('WORKING_TREE')).toBe('checked');
  });

  it('selectedUncommittedSessions only returns dirty selected sessions', () => {
    const sessions = buildWorktreeSessions(
      [
        baseWorktree({ path: '/repo', headSha: 'aaaaaaaaaaaa', branchName: 'main', isCurrent: true, hasUncommittedChanges: true }),
        baseWorktree({ path: '/repo/wt-b', headSha: 'bbbbbbbbbbbb', branchName: 'feature', isCurrent: false, hasUncommittedChanges: false }),
      ],
      '/repo',
    );
    const dirtyOther = sessions.find((session) => session.branchName === 'feature')!;
    const selected = selectedUncommittedSessions(sessions, ['WORKING_TREE', dirtyOther.workingTreeId]);
    expect(selected).toHaveLength(1);
    expect(selected[0]?.isCurrent).toBe(true);
  });

  it('stripEmptyBranchPlaceholdersForWorktreeSessions removes BRANCH_HEAD when session covers branch', () => {
    const branch: Branch = {
      name: 'feature',
      commitsAhead: 0,
      commitsBehind: 0,
      lastCommitDate: '2024-01-01T00:00:00Z',
      lastCommitAuthor: 'You',
      status: 'fresh',
      remoteSyncStatus: 'local-only',
      unpushedCommits: 0,
      headSha: 'bbbbbbbbbbbb2222',
    };
    const sessions = buildWorktreeSessions(
      [baseWorktree({ path: '/repo/wt', branchName: 'feature', headSha: 'bbbbbbbbbbbb2222', isCurrent: false })],
      '/repo',
    );
    const previews = {
      feature: [
        {
          fullSha: 'BRANCH_HEAD:feature:bbbbbbbbbbbb2222',
          sha: 'empty',
          parentSha: 'aaaaaaaaaaaa1111',
          message: '',
          author: 'You',
          date: '2024-01-01T00:00:00Z',
          kind: 'stash',
        },
        {
          fullSha: 'WORKING_TREE:abc',
          sha: 'uncommitted',
          parentSha: 'bbbbbbbbbbbb2222',
          message: '',
          author: 'You',
          date: '2024-01-01T00:00:00Z',
          kind: 'uncommitted',
        },
      ],
    };
    const stripped = stripEmptyBranchPlaceholdersForWorktreeSessions(sessions, [branch], previews);
    expect(stripped.feature?.some((preview) => preview.fullSha.startsWith('BRANCH_HEAD:'))).toBe(false);
    expect(stripped.feature?.some((preview) => preview.kind === 'uncommitted')).toBe(true);
    expect(sessionMatchesBranchCheckout(sessions[0]!, branch)).toBe(true);
  });

  it('buildWorktreeAccentByCommitId maps working tree id only, not head sha', () => {
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
    expect(map.get('head1111111111')).toBeUndefined();
    expect(map.get('WORKING_TREE')).toBe('checked');
  });
});
