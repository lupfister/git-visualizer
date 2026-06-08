import { describe, expect, it } from 'vitest';
import type { TerminalSession, WorktreeInfo } from '../types';
import { commitPreviewSessions, previewLabel, visibleNestedSessions, worktreeRefLabel } from './DenseBranchSidebar';

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

  it('shows persisted worktree previews and all shell sessions, but not commit previews', () => {
    const values = visibleNestedSessions([
      session({ id: 'shell' }),
      session({ id: 'preview', kind: 'preview', targetKind: 'worktree' }),
      session({ id: 'stopped-preview', kind: 'preview', targetKind: 'worktree', status: 'exited' }),
      session({ id: 'commit-preview', kind: 'preview', targetKind: 'commit' }),
    ], '/repo', 'WORKING_TREE');
    expect(values.map((value) => value.id)).toEqual(['shell', 'preview', 'stopped-preview']);
  });

  it('nests a worktree preview by target id when it runs from a generated preview checkout', () => {
    const values = visibleNestedSessions([
      session({
        id: 'worktree-preview',
        kind: 'preview',
        worktreePath: '/tmp/generated-preview',
        targetKind: 'worktree',
        targetId: 'WORKING_TREE:/repo-feature',
      }),
    ], '/repo-feature', 'WORKING_TREE:/repo-feature');
    expect(values.map((value) => value.id)).toEqual(['worktree-preview']);
  });

  it('keeps only one commit preview row, preferring the running session', () => {
    const values = commitPreviewSessions([
      session({ id: 'old-preview', kind: 'preview', targetKind: 'commit', targetId: '1111111', status: 'exited' }),
      session({ id: 'active-preview', kind: 'preview', targetKind: 'commit', targetId: '2222222', status: 'running' }),
    ]);
    expect(values.map((value) => value.id)).toEqual(['active-preview']);
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
