import { describe, expect, it } from 'vitest';
import type { Branch, DirectCommit, WorktreeInfo } from '../types';
import { computeBranchGridLayout } from '../components/grid/branchGridLayoutModel';
import { injectWorktreeUncommittedPreviews } from './injectWorktreeUncommitted';
import { buildWorktreeSessions, isWorktreeLaneBranchName } from './worktreeSessions';

/** Reproduces cobble/test1 detached at 452ea41 while main is at tip. */
describe('detached worktree test1', () => {
  const headSha = '452ea418bde4f57d834b0ef5b2be8ef79389d24b';
  const tipSha = '2a5578755c1632b2d63650b0ddfa4851de37759f';
  const parentSha = '5d65b8a8021b90a53c1b3aa4824c62e7b39f4d9f';

  const worktrees: WorktreeInfo[] = [
    {
      path: '/Users/luca/cursor/cobble',
      pathExists: true,
      headSha: tipSha,
      branchName: 'main',
      parentSha: headSha,
      isCurrent: true,
      isPrunable: false,
      hasUncommittedChanges: false,
    },
    {
      path: '/Users/luca/cursor/cobble/test1',
      pathExists: true,
      headSha,
      branchName: null,
      parentSha,
      isCurrent: false,
      isPrunable: false,
      hasUncommittedChanges: false,
    },
  ];

  const directCommits: DirectCommit[] = [
    {
      fullSha: tipSha,
      sha: tipSha.slice(0, 7),
      branch: 'main',
      message: 'tip',
      author: 'test',
      date: '2026-01-01T00:00:00Z',
      parentSha: headSha,
      parentShas: [headSha],
    },
    {
      fullSha: headSha,
      sha: headSha.slice(0, 7),
      branch: 'main',
      message: 'merge',
      author: 'test',
      date: '2025-01-01T00:00:00Z',
      parentSha,
      parentShas: [parentSha],
    },
  ];

  const branches: Branch[] = [{
    name: 'main',
    commitsAhead: 6,
    commitsBehind: 0,
    lastCommitDate: '2026-01-01T00:00:00Z',
    lastCommitAuthor: 'test',
    status: 'fresh',
    remoteSyncStatus: 'local-only',
    unpushedCommits: 0,
    headSha: tipSha,
  }];

  it('injects detached worktree on a dedicated Worktree lane, not only on main', () => {
    const sessions = buildWorktreeSessions(worktrees, '/Users/luca/cursor/cobble');
    const test1Session = sessions.find((session) => session.path.endsWith('/test1'));
    expect(test1Session?.branchName).toBeNull();

    const injected = injectWorktreeUncommittedPreviews({
      sessions,
      branches,
      branchCommitPreviews: { main: [] },
      branchUniqueAheadCounts: { main: 6 },
      directCommits,
      defaultBranch: 'main',
    });

    const test1Lane = Object.keys(injected.branchCommitPreviews).find(isWorktreeLaneBranchName);
    expect(test1Lane).toBeDefined();
    const test1Node = injected.branchCommitPreviews[test1Lane!]?.find((preview) => preview.kind === 'uncommitted');
    expect(test1Node?.fullSha).toBe(test1Session!.workingTreeId);
    expect(injected.branches.some((branch) => branch.name === test1Lane)).toBe(true);

    const layout = computeBranchGridLayout({
      branches: injected.branches,
      mergeNodes: [],
      directCommits,
      unpushedDirectCommits: [],
      defaultBranch: 'main',
      branchCommitPreviews: injected.branchCommitPreviews,
      branchParentByName: {
        main: null,
        [test1Lane!]: 'main',
      },
      branchUniqueAheadCounts: injected.branchUniqueAheadCounts,
      manuallyOpenedClumps: new Set(),
      manuallyClosedClumps: new Set(),
      isDebugOpen: false,
      gridSearchQuery: '',
      gridFocusSha: null,
      checkedOutRef: null,
      worktreeSessions: sessions,
      orientation: 'horizontal',
    });

    expect(layout.renderNodes.some((node) => node.commit.id.startsWith('BRANCH_HEAD:'))).toBe(false);
    const test1Render = layout.renderNodes.find((node) => node.commit.id === test1Session!.workingTreeId);
    const parentNode = layout.renderNodes.find((node) => node.commit.id === headSha);
    expect(test1Render).toBeDefined();
    expect(parentNode).toBeDefined();
    expect(test1Render!.commit.branchName).toBe(test1Lane);
    expect(test1Render!.row).toBe(parentNode!.row + 1);
    expect(test1Render!.column).toBeGreaterThan(parentNode!.column);
  });
});
