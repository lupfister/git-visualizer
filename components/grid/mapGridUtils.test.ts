import { describe, expect, it } from 'vitest';
import { formatRemoteCommitHeaderLabel, formatWorktreeNodeHeaderLabel } from './mapGridUtils';

describe('formatWorktreeNodeHeaderLabel', () => {
  it('uses branch name when clean', () => {
    expect(
      formatWorktreeNodeHeaderLabel({
        path: '/repo/.worktrees/feature-wt',
        branchName: 'cursor-sdk',
        hasUncommittedChanges: false,
        isCurrent: false,
      }),
    ).toBe('cursor-sdk');
  });

  it('keeps branch label unchanged when dirty', () => {
    expect(
      formatWorktreeNodeHeaderLabel({
        path: '/repo/.worktrees/feature-wt',
        branchName: 'cursor-sdk',
        hasUncommittedChanges: true,
        isCurrent: false,
      }),
    ).toBe('cursor-sdk');
  });

  it('shows detached when session has no branch ref', () => {
    expect(
      formatWorktreeNodeHeaderLabel({
        path: '/repo/test1',
        branchName: null,
        hasUncommittedChanges: false,
        isCurrent: false,
      }),
    ).toBe('detached');
  });

  it('labels the primary checkout with its branch name', () => {
    expect(
      formatWorktreeNodeHeaderLabel({
        path: '/Users/luca/cursor/git-visualizer',
        branchName: 'main',
        hasUncommittedChanges: false,
        isCurrent: true,
      }),
    ).toBe('main');
  });
});

describe('formatRemoteCommitHeaderLabel', () => {
  it('matches worktree header pattern with Origin source and branch/sha', () => {
    expect(
      formatRemoteCommitHeaderLabel(
        'cursor/commit-app-previews-7896',
        'c131b6f10b7737b2974df51887149d9127b2a648',
      ),
    ).toBe('Origin • cursor/commit-app-previews-7896/c131b6f');
  });
});
