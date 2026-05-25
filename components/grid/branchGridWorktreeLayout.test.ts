import { describe, expect, it } from 'vitest';
import type { Branch, BranchCommitPreview, DirectCommit } from '../../types';
import { buildWorktreeSessions } from '../../lib/worktreeSessions';
import type { WorktreeInfo } from '../../types';
import { computeBranchGridLayout } from './branchGridLayoutModel';

const mainSha = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const tipSha = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';

const makeBranch = (name: string, headSha: string, commitsAhead: number, parentBranch?: string): Branch => ({
  name,
  commitsAhead,
  commitsBehind: 0,
  lastCommitDate: '2024-06-01T12:00:00Z',
  lastCommitAuthor: 'test',
  status: 'fresh',
  remoteSyncStatus: 'local-only',
  unpushedCommits: 0,
  headSha,
  parentBranch: parentBranch ?? 'main',
  divergedFromSha: mainSha,
});

const wt = (overrides: Partial<WorktreeInfo>): WorktreeInfo => ({
  path: '/repo/wt-feature',
  pathExists: true,
  headSha: tipSha,
  branchName: 'cursor-sdk',
  parentSha: mainSha,
  isCurrent: false,
  isPrunable: false,
  hasUncommittedChanges: false,
  ...overrides,
});

describe('computeBranchGridLayout worktree nodes', () => {
  it('renders worktree node to the right of parent without BRANCH_HEAD when session covers empty branch', () => {
    const defaultBranch = 'main';
    const parentDate = '2024-06-01T12:00:00Z';
    const branches = [
      makeBranch(defaultBranch, tipSha, 1),
      makeBranch('cursor-sdk', tipSha, 0),
    ];
    const directCommits: DirectCommit[] = [
      {
        fullSha: mainSha,
        sha: mainSha.slice(0, 7),
        branch: defaultBranch,
        message: 'root',
        author: 'test',
        date: '2024-05-01T12:00:00Z',
        parentSha: null,
        parentShas: [],
      },
      {
        fullSha: tipSha,
        sha: tipSha.slice(0, 7),
        branch: defaultBranch,
        message: 'tip',
        author: 'test',
        date: parentDate,
        parentSha: mainSha,
        parentShas: [mainSha],
      },
    ];
    const sessions = buildWorktreeSessions([wt({ path: '/repo/wt-feature' })], '/repo');
    const worktreePreview: BranchCommitPreview = {
      fullSha: sessions[0]!.workingTreeId,
      sha: 'uncommitted',
      parentSha: tipSha,
      message: '',
      author: 'You',
      date: parentDate,
      kind: 'uncommitted',
    };
    const layout = computeBranchGridLayout({
      branches,
      mergeNodes: [],
      directCommits,
      unpushedDirectCommits: [],
      defaultBranch,
      branchCommitPreviews: {
        main: [],
        'cursor-sdk': [worktreePreview],
      },
      branchParentByName: { main: null, 'cursor-sdk': 'main' },
      branchUniqueAheadCounts: { main: 1, 'cursor-sdk': 0 },
      manuallyOpenedClumps: new Set(),
      manuallyClosedClumps: new Set(),
      isDebugOpen: false,
      gridSearchQuery: '',
      gridFocusSha: null,
      checkedOutRef: null,
      worktreeSessions: sessions,
      orientation: 'horizontal',
    });

    expect(layout.renderNodes.some((node) => node.commit.id.startsWith('BRANCH_HEAD:cursor-sdk:'))).toBe(false);
    const worktreeNode = layout.renderNodes.find((node) => node.commit.id === sessions[0]!.workingTreeId);
    const parentNode = layout.renderNodes.find((node) => node.commit.id === tipSha);
    expect(worktreeNode).toBeDefined();
    expect(parentNode).toBeDefined();
    expect(worktreeNode!.row).toBe(parentNode!.row + 1);
    expect(worktreeNode!.column).toBe(parentNode!.column);
    expect(worktreeNode!.commit.date).toBe(parentDate);
  });

  it('keeps the primary worktree on the checked-out branch lane when the parent SHA is shared across lanes', () => {
    const defaultBranch = 'main';
    const parentDate = '2024-06-01T12:00:00Z';
    const branches = [
      makeBranch(defaultBranch, tipSha, 1),
      makeBranch('feature', tipSha, 1),
    ];
    const directCommits: DirectCommit[] = [
      {
        fullSha: mainSha,
        sha: mainSha.slice(0, 7),
        branch: defaultBranch,
        message: 'root',
        author: 'test',
        date: '2024-05-01T12:00:00Z',
        parentSha: null,
        parentShas: [],
      },
      {
        fullSha: tipSha,
        sha: tipSha.slice(0, 7),
        branch: 'feature',
        message: 'tip',
        author: 'test',
        date: parentDate,
        parentSha: mainSha,
        parentShas: [mainSha],
      },
    ];
    const sessions = buildWorktreeSessions(
      [wt({ path: '/repo', branchName: defaultBranch, headSha: tipSha, isCurrent: true })],
      '/repo',
      { branchName: defaultBranch, headSha: tipSha, hasUncommittedChanges: true },
    );
    const worktreePreview: BranchCommitPreview = {
      fullSha: sessions[0]!.workingTreeId,
      sha: 'uncommitted',
      parentSha: tipSha,
      message: '',
      author: 'You',
      date: parentDate,
      kind: 'uncommitted',
    };
    const layout = computeBranchGridLayout({
      branches,
      mergeNodes: [],
      directCommits,
      unpushedDirectCommits: [],
      defaultBranch,
      branchCommitPreviews: {
        main: [directCommits[1]!, worktreePreview],
        feature: [directCommits[1]!],
      },
      branchParentByName: { main: null, feature: 'main' },
      branchUniqueAheadCounts: { main: 1, feature: 1 },
      manuallyOpenedClumps: new Set(),
      manuallyClosedClumps: new Set(),
      isDebugOpen: false,
      gridSearchQuery: '',
      gridFocusSha: null,
      checkedOutRef: { branchName: defaultBranch, headSha: tipSha, hasUncommittedChanges: true },
      worktreeSessions: sessions,
      orientation: 'horizontal',
    });

    const worktreeNode = layout.renderNodes.find((node) => node.commit.id === sessions[0]!.workingTreeId);
    const mainRootNode = layout.renderNodes.find((node) => node.commit.id === mainSha);
    const featureTipNode = layout.renderNodes.find(
      (node) => node.commit.id === tipSha && node.commit.branchName === 'feature',
    );
    expect(worktreeNode).toBeDefined();
    expect(mainRootNode).toBeDefined();
    expect(featureTipNode).toBeDefined();
    expect(worktreeNode!.column).not.toBe(mainRootNode!.column);
    expect(worktreeNode!.column).toBe(featureTipNode!.column);
    expect(worktreeNode!.row).toBeGreaterThan(mainRootNode!.row);
  });
});
