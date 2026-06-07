import { describe, expect, it } from 'vitest';
import type { TerminalSession, WorktreeInfo } from '../types';
import { previewLabel, visibleNestedSessions, worktreeRefLabel } from './DenseBranchSidebar';

const session = (overrides: Partial<TerminalSession>): TerminalSession => ({
  id: 'terminal-1',
  projectPath: '/repo',
  worktreePath: '/repo',
  kind: 'shell',
  label: 'Terminal 1',
  command: '',
  cols: 80,
  rows: 24,
  status: 'running',
  targetId: null,
  targetKind: null,
  ...overrides,
});

describe('worktree sidebar model', () => {
  it('formats branch and short sha for worktrees', () => {
    expect(worktreeRefLabel({
      path: '/repo',
      pathExists: true,
      headSha: 'abcdefg123',
      branchName: 'main',
      parentSha: null,
      isCurrent: true,
      isPrunable: false,
    } satisfies WorktreeInfo)).toBe('main/abcdefg');
  });

  it('shows running worktree previews and all shell sessions, but not commit previews', () => {
    const values = visibleNestedSessions([
      session({ id: 'shell' }),
      session({ id: 'preview', kind: 'preview', targetKind: 'worktree' }),
      session({ id: 'stopped-preview', kind: 'preview', targetKind: 'worktree', status: 'exited' }),
      session({ id: 'commit-preview', kind: 'preview', targetKind: 'commit' }),
    ], '/repo');
    expect(values.map((value) => value.id)).toEqual(['shell', 'preview']);
  });

  it('labels high-level commit previews with branch and sha', () => {
    expect(previewLabel({
      path: '/repo',
      name: 'repo',
      branches: [],
      worktrees: [],
      branchCommitPreviews: {
        feature: [{ fullSha: 'abcdefg123', sha: 'abcdefg', message: 'x', author: 'a', date: '2026-01-01' }],
      },
    }, session({ kind: 'preview', targetKind: 'commit', targetId: 'abcdefg123' }))).toBe('Preview · feature/abcdefg');
  });
});
