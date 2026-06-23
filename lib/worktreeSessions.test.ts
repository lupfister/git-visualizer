import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { WorktreeInfo, Branch, BranchCommitPreview } from '../types';
import {
  buildWorktreeAccentByCommitId,
  buildWorktreeAccentLookups,
  buildWorktreeSessions,
  dirtyWorktreeSessions,
  isWorkingTreeCommitId,
  resolveBranchCheckoutAccent,
  resolveCommitAccent,
  selectedRemovableWorktreeSessions,
  selectedUncommittedSessions,
  selectedWorktreeSessions,
  sessionMatchesBranchCheckout,
  stripEmptyBranchPlaceholdersForWorktreeSessions,
  workingTreeIdForPath,
  persistWorktreeFocusSha,
  readPersistedWorktreeFocusSha,
  resolveActiveWorktreeFocusSha,
  resolveTerminalSessionFocusId,
  determineWorktreePromptDefaults,
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
  const storage = new Map<string, string>();

  beforeEach(() => {
    storage.clear();
    vi.stubGlobal('localStorage', {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => {
        storage.set(key, value);
      },
      removeItem: (key: string) => {
        storage.delete(key);
      },
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

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

  it('resolves active worktree focus from persistence then current session', () => {
    const sessions = buildWorktreeSessions(
      [
        baseWorktree({ path: '/repo/wt-b', headSha: 'bbbbbbbbbbbb', branchName: 'feature', isCurrent: false }),
        baseWorktree({ path: '/repo', headSha: 'aaaaaaaaaaaa', branchName: 'main', isCurrent: true }),
      ],
      '/repo',
    );
    const other = sessions.find((session) => !session.isCurrent)!;
    persistWorktreeFocusSha('/repo', other.workingTreeId);
    expect(readPersistedWorktreeFocusSha('/repo')).toBe(other.workingTreeId);
    expect(resolveActiveWorktreeFocusSha(sessions, '/repo')).toBe(other.workingTreeId);
    expect(resolveActiveWorktreeFocusSha(sessions, '/other-repo')).toBe(
      sessions.find((session) => session.isCurrent)!.workingTreeId,
    );
  });

  it('uses stable working tree ids', () => {
    expect(workingTreeIdForPath('/repo', true)).toBe('WORKING_TREE');
    expect(workingTreeIdForPath('/repo/wt-b', false)).toMatch(/^WORKING_TREE:/);
    expect(isWorkingTreeCommitId('WORKING_TREE')).toBe(true);
    expect(isWorkingTreeCommitId('WORKING_TREE:abc')).toBe(true);
    expect(isWorkingTreeCommitId('deadbeef')).toBe(false);
  });

  it('resolves terminal session focus ids from target or worktree path', () => {
    expect(resolveTerminalSessionFocusId({
      projectPath: '/repo',
      worktreePath: '/repo',
      targetId: null,
    })).toBe('WORKING_TREE');
    expect(resolveTerminalSessionFocusId({
      projectPath: '/repo',
      worktreePath: '/repo/wt-b',
      targetId: null,
    })).toMatch(/^WORKING_TREE:/);
    expect(resolveTerminalSessionFocusId({
      projectPath: '/repo',
      worktreePath: '/repo/wt-b',
      targetId: 'abc1234567890',
    })).toBe('abc1234567890');
  });

  it('prefers checkedOutRef head for the current worktree session', () => {
    const sessions = buildWorktreeSessions(
      [
        baseWorktree({
          path: '/repo',
          headSha: 'old-head-sha-000000000000000000000000',
          branchName: 'main',
          isCurrent: true,
        }),
      ],
      '/repo',
      {
        branchName: 'main',
        headSha: 'new-head-sha-111111111111111111111111',
        hasUncommittedChanges: false,
      },
    );
    expect(sessions[0]?.headSha).toBe('new-head-sha-111111111111111111111111');
  });

  it('prefers an explicit clean worktree flag over a stale checkedOutRef dirty flag', () => {
    const sessions = buildWorktreeSessions(
      [
        baseWorktree({
          path: '/repo',
          headSha: 'aaaaaaaaaaaa',
          branchName: 'main',
          isCurrent: true,
          hasUncommittedChanges: false,
        }),
      ],
      '/repo',
      {
        branchName: 'main',
        headSha: 'aaaaaaaaaaaa',
        hasUncommittedChanges: true,
      },
    );
    expect(sessions[0]?.hasUncommittedChanges).toBe(false);
  });

  it('uses checkedOutRef dirty when the worktree list omits a dirty flag', () => {
    const sessions = buildWorktreeSessions(
      [
        baseWorktree({
          path: '/repo',
          headSha: 'aaaaaaaaaaaa',
          branchName: 'main',
          isCurrent: true,
          hasUncommittedChanges: undefined,
        }),
      ],
      '/repo',
      {
        branchName: 'main',
        headSha: 'aaaaaaaaaaaa',
        hasUncommittedChanges: true,
      },
    );
    expect(sessions[0]?.hasUncommittedChanges).toBe(true);
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

  it('dirtyWorktreeSessions returns dirty linked worktrees with existing paths', () => {
    const sessions = buildWorktreeSessions(
      [
        baseWorktree({ path: '/repo', headSha: 'aaaaaaaaaaaa', branchName: 'main', isCurrent: true, hasUncommittedChanges: true }),
        baseWorktree({ path: '/repo/wt-b', headSha: 'bbbbbbbbbbbb', branchName: 'feature', isCurrent: false, hasUncommittedChanges: false }),
        baseWorktree({ path: '/repo/wt-c', headSha: 'cccccccccccc', branchName: 'other', isCurrent: false, hasUncommittedChanges: true }),
      ],
      '/repo',
    );
    const dirty = dirtyWorktreeSessions(sessions);
    expect(dirty.map((session) => session.branchName)).toEqual(['main', 'other']);
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

  it('selectedRemovableWorktreeSessions returns clean linked worktrees only', () => {
    const sessions = buildWorktreeSessions(
      [
        baseWorktree({ path: '/repo', headSha: 'aaaaaaaaaaaa', branchName: 'main', isCurrent: true, hasUncommittedChanges: true }),
        baseWorktree({ path: '/repo/wt-b', headSha: 'bbbbbbbbbbbb', branchName: 'feature', isCurrent: false, hasUncommittedChanges: false }),
        baseWorktree({ path: '/repo/wt-c', headSha: 'cccccccccccc', branchName: 'other', isCurrent: false, hasUncommittedChanges: true }),
      ],
      '/repo',
    );
    const cleanLinked = sessions.find((session) => session.branchName === 'feature')!;
    const dirtyLinked = sessions.find((session) => session.branchName === 'other')!;
    expect(selectedWorktreeSessions(sessions, ['WORKING_TREE', cleanLinked.workingTreeId, dirtyLinked.workingTreeId])).toHaveLength(3);
    expect(selectedRemovableWorktreeSessions(sessions, ['WORKING_TREE', cleanLinked.workingTreeId, dirtyLinked.workingTreeId])).toEqual([cleanLinked]);
    expect(selectedUncommittedSessions(sessions, ['WORKING_TREE', cleanLinked.workingTreeId, dirtyLinked.workingTreeId])).toHaveLength(2);
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
    const previews: Record<string, BranchCommitPreview[]> = {
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

  it('respects worktreeOrder when building worktree sessions and assigning accents', () => {
    const sessions = buildWorktreeSessions(
      [
        baseWorktree({ path: '/repo/wt-c', headSha: 'cccccccccccc', branchName: 'wt-c', isCurrent: false }),
        baseWorktree({ path: '/repo/wt-b', headSha: 'bbbbbbbbbbbb', branchName: 'wt-b', isCurrent: false }),
        baseWorktree({ path: '/repo', headSha: 'aaaaaaaaaaaa', branchName: 'main', isCurrent: true }),
      ],
      '/repo',
      null,
      ['/repo/wt-c', '/repo/wt-b']
    );
    const nonCurrent = sessions.filter((s) => !s.isCurrent);
    expect(nonCurrent[0]?.path).toBe('/repo/wt-c');
    expect(nonCurrent[0]?.accentToken).toBe('worktree-violet');
    expect(nonCurrent[1]?.path).toBe('/repo/wt-b');
    expect(nonCurrent[1]?.accentToken).toBe('worktree-amber');
  });

  describe('determineWorktreePromptDefaults', () => {
    const branches: Branch[] = [
      { name: 'main', headSha: 'aaaa' } as Branch,
      { name: 'feature', headSha: 'bbbb' } as Branch,
    ];

    it('returns esoteric folder name and disables create branch when resolved target is undefined', () => {
      const result = determineWorktreePromptDefaults(undefined, [], branches);
      expect(result.defaultFolderName).toBeTruthy();
      expect(result.defaultFolderName).not.toBe('main');
      expect(result.createBranch).toBe(true);
      expect(result.createBranchDisabled).toBe(true);
    });

    it('returns esoteric folder name and enables create branch toggle when resolved target is a SHA', () => {
      const result = determineWorktreePromptDefaults('bbbbbbbbbbbb', [], branches);
      expect(result.defaultFolderName).toBeTruthy();
      expect(result.createBranch).toBe(true);
      expect(result.createBranchDisabled).toBe(false);
    });

    it('requires creating a branch when resolved target is a stash ref', () => {
      const result = determineWorktreePromptDefaults('stash@{0}', [], branches);
      expect(result.defaultFolderName).toBeTruthy();
      expect(result.defaultFolderName).not.toBe('stash__0_');
      expect(result.createBranch).toBe(true);
      expect(result.createBranchDisabled).toBe(true);
    });

    it('returns branch name and defaults to checking out directly when branch is not checked out', () => {
      const result = determineWorktreePromptDefaults('feature', [], branches);
      expect(result.defaultFolderName).toBe('feature');
      expect(result.createBranch).toBe(false);
      expect(result.createBranchDisabled).toBe(false);
    });

    it('returns esoteric folder name and disables create branch when branch is already checked out', () => {
      const sortedWorktrees: WorktreeInfo[] = [
        baseWorktree({ path: '/repo', branchName: 'feature' }),
      ];
      const result = determineWorktreePromptDefaults('feature', sortedWorktrees, branches);
      expect(result.defaultFolderName).toBeTruthy();
      expect(result.defaultFolderName).not.toBe('feature');
      expect(result.createBranch).toBe(true);
      expect(result.createBranchDisabled).toBe(true);
    });

    it('returns esoteric folder name and enables create branch toggle when branch is not checked out but folder name conflicts', () => {
      const sortedWorktrees: WorktreeInfo[] = [
        baseWorktree({ path: '/repo/feature', branchName: 'main' }),
      ];
      const result = determineWorktreePromptDefaults('feature', sortedWorktrees, branches);
      expect(result.defaultFolderName).toBeTruthy();
      expect(result.defaultFolderName).not.toBe('feature');
      expect(result.createBranch).toBe(false);
      expect(result.createBranchDisabled).toBe(false);
    });
  });
});
