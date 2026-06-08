import { describe, expect, it } from 'vitest';
import type { Branch, BranchCommitPreview, DirectCommit } from '../../types';
import { buildWorktreeSessions } from '../../lib/worktreeSessions';
import type { WorktreeInfo } from '../../types';
import { injectWorktreeUncommittedPreviews } from '../../lib/injectWorktreeUncommitted';
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
    expect(worktreeNode!.column).toBeGreaterThan(parentNode!.column);
    expect(worktreeNode!.commit.date).toBe(parentDate);
  });

  it('draws only an incoming connector from the checkout parent to the worktree node', () => {
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

    const worktreeId = sessions[0]!.workingTreeId;
    const worktreeVisualId = layout.renderNodes.find((node) => node.commit.id === worktreeId)?.commit.visualId;
    const parentVisualId = layout.renderNodes.find((node) => node.commit.id === tipSha)?.commit.visualId;
    expect(worktreeVisualId).toBeDefined();
    expect(parentVisualId).toBeDefined();

    const incoming = layout.connectors.filter((connector) => connector.toCommitVisualId === worktreeVisualId);
    const outgoing = layout.connectors.filter((connector) => connector.fromCommitVisualId === worktreeVisualId);
    const mergeOutgoing = layout.mergeConnectors.filter(
      (connector) => connector.fromCommitVisualId === worktreeVisualId,
    );

    expect(incoming.some((connector) => connector.fromCommitVisualId === parentVisualId)).toBe(true);
    expect(outgoing).toHaveLength(0);
    expect(mergeOutgoing).toHaveLength(0);
  });

  it('steps the primary worktree one timeline slot right when it shares the parent lane', () => {
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
        branch: defaultBranch,
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
    const mainTipNode = layout.nodes.find(
      (node) => node.commit.id === tipSha && node.commit.branchName === 'main',
    );
    expect(worktreeNode).toBeDefined();
    expect(mainTipNode).toBeDefined();
    expect(worktreeNode!.row).toBe(mainTipNode!.row + 1);
    expect(worktreeNode!.column).toBeGreaterThan(mainTipNode!.column);
    expect(worktreeNode!.y).toBeGreaterThan(mainTipNode!.y);
  });

  it('keeps primary worktree on the checkout lane when HEAD is only visible as a collapsed clump lead', () => {
    const defaultBranch = 'main';
    const parentDate = '2024-06-01T12:00:00Z';
    const olderSha = 'cccccccccccccccccccccccccccccccccccccccc';
    const branches = [makeBranch(defaultBranch, tipSha, 2)];
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
        fullSha: olderSha,
        sha: olderSha.slice(0, 7),
        branch: defaultBranch,
        message: 'older',
        author: 'test',
        date: '2024-05-15T12:00:00Z',
        parentSha: mainSha,
        parentShas: [mainSha],
      },
      {
        fullSha: tipSha,
        sha: tipSha.slice(0, 7),
        branch: defaultBranch,
        message: 'tip',
        author: 'test',
        date: parentDate,
        parentSha: olderSha,
        parentShas: [olderSha],
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
      unpushedDirectCommits: directCommits.slice(1),
      defaultBranch,
      branchCommitPreviews: {
        main: [directCommits[1]!, directCommits[2]!, worktreePreview],
      },
      branchParentByName: { main: null },
      branchUniqueAheadCounts: { main: 2 },
      unpushedCommitShasByBranch: { main: [olderSha, tipSha] },
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
    const headLeadNode = layout.renderNodes.find((node) => node.commit.id === tipSha);
    expect(worktreeNode).toBeDefined();
    expect(headLeadNode).toBeDefined();
    expect(worktreeNode!.column).toBeGreaterThan(headLeadNode!.column);
    expect(worktreeNode!.row).toBe(headLeadNode!.row + 1);
    expect(worktreeNode!.y).toBeGreaterThan(headLeadNode!.y);
  });

  it('pins primary worktree to HEAD on main when session lane is main (local) but parentSha is on main', () => {
    const defaultBranch = 'main';
    const localBranch = `${defaultBranch} (local)`;
    const parentDate = '2024-06-01T12:00:00Z';
    const branches = [
      makeBranch(defaultBranch, tipSha, 0),
      {
        ...makeBranch(localBranch, tipSha, 1),
        parentBranch: defaultBranch,
        remoteSyncStatus: 'unpushed' as const,
      },
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
    const sessions = buildWorktreeSessions(
      [wt({ path: '/repo', branchName: localBranch, headSha: tipSha, isCurrent: true })],
      '/repo',
      { branchName: localBranch, headSha: tipSha, hasUncommittedChanges: true },
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
        main: [directCommits[1]!],
        [localBranch]: [worktreePreview],
      },
      branchParentByName: { main: null, [localBranch]: defaultBranch },
      branchUniqueAheadCounts: { main: 0, [localBranch]: 1 },
      unpushedCommitShasByBranch: { [localBranch]: [tipSha] },
      manuallyOpenedClumps: new Set(),
      manuallyClosedClumps: new Set(),
      isDebugOpen: false,
      gridSearchQuery: '',
      gridFocusSha: null,
      checkedOutRef: { branchName: localBranch, headSha: tipSha, hasUncommittedChanges: true },
      worktreeSessions: sessions,
      orientation: 'horizontal',
    });

    const worktreeNode = layout.renderNodes.find((node) => node.commit.id === sessions[0]!.workingTreeId);
    const headNode = layout.renderNodes.find(
      (node) => node.commit.id === tipSha && node.commit.branchName === defaultBranch,
    );
    expect(worktreeNode).toBeDefined();
    expect(headNode).toBeDefined();
    expect(worktreeNode!.column).toBeGreaterThan(headNode!.column);
    expect(worktreeNode!.row).toBe(headNode!.row + 1);
    expect(worktreeNode!.y).toBeGreaterThan(headNode!.y);
  });

  it('keeps worktree on branch lane when session branch name differs from layout branch', () => {
    const defaultBranch = 'main';
    const localBranch = `${defaultBranch} (local)`;
    const parentDate = '2024-06-01T12:00:00Z';
    const branches = [
      makeBranch(defaultBranch, tipSha, 0),
      { ...makeBranch(localBranch, tipSha, 1), parentBranch: defaultBranch, remoteSyncStatus: 'unpushed' as const },
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
    const worktreePreview: BranchCommitPreview = {
      fullSha: 'WORKING_TREE',
      sha: 'uncommitted',
      parentSha: tipSha,
      message: '',
      author: 'You',
      date: parentDate,
      kind: 'uncommitted',
    };
    const layoutInputs = {
      branches,
      mergeNodes: [],
      directCommits,
      unpushedDirectCommits: [],
      defaultBranch,
      branchCommitPreviews: {
        main: [directCommits[1]!],
        [localBranch]: [worktreePreview],
      },
      branchParentByName: { main: null, [localBranch]: defaultBranch },
      branchUniqueAheadCounts: { main: 0, [localBranch]: 1 },
      unpushedCommitShasByBranch: { [localBranch]: [tipSha] },
      manuallyOpenedClumps: new Set<string>(),
      manuallyClosedClumps: new Set<string>(),
      isDebugOpen: false,
      gridSearchQuery: '',
      gridFocusSha: null,
      checkedOutRef: { branchName: localBranch, headSha: tipSha, hasUncommittedChanges: false },
      orientation: 'horizontal' as const,
    };
    const alignedSessions = buildWorktreeSessions(
      [wt({ path: '/repo', branchName: localBranch, headSha: tipSha, isCurrent: true })],
      '/repo',
      { branchName: localBranch, headSha: tipSha, hasUncommittedChanges: false },
    );
    const misalignedSessions = buildWorktreeSessions(
      [wt({ path: '/repo', branchName: defaultBranch, headSha: tipSha, isCurrent: true })],
      '/repo',
      { branchName: defaultBranch, headSha: tipSha, hasUncommittedChanges: false },
    );
    const aligned = computeBranchGridLayout({
      ...layoutInputs,
      worktreeSessions: alignedSessions,
    });
    const misaligned = computeBranchGridLayout({
      ...layoutInputs,
      worktreeSessions: misalignedSessions,
    });
    const alignedNode = aligned.renderNodes.find((node) => node.commit.id === 'WORKING_TREE');
    const misalignedNode = misaligned.renderNodes.find((node) => node.commit.id === 'WORKING_TREE');
    const headNode = aligned.renderNodes.find(
      (node) => node.commit.id === tipSha && node.commit.branchName === defaultBranch,
    );
    expect(alignedNode).toBeDefined();
    expect(misalignedNode).toBeDefined();
    expect(headNode).toBeDefined();
    expect(alignedNode!.column).toBeGreaterThan(headNode!.column);
    expect(misalignedNode!.column).toBeGreaterThan(headNode!.column);
  });

  it('keeps primary detached worktree below the child-branch tip when another worktree dirties that branch', () => {
    const cursorBranch = 'cursor/2ae24b52-agent';
    const olderSha = 'cccccccccccccccccccccccccccccccccccccccc';
    const parentDate = '2024-06-01T12:00:00Z';
    const directCommits: DirectCommit[] = [
      {
        fullSha: mainSha,
        sha: mainSha.slice(0, 7),
        branch: 'main',
        message: 'root',
        author: 'test',
        date: '2024-05-01T12:00:00Z',
        parentSha: null,
        parentShas: [],
      },
      {
        fullSha: olderSha,
        sha: olderSha.slice(0, 7),
        branch: 'main',
        message: 'older',
        author: 'test',
        date: '2024-05-15T12:00:00Z',
        parentSha: mainSha,
        parentShas: [mainSha],
      },
      {
        fullSha: tipSha,
        sha: tipSha.slice(0, 7),
        branch: 'main',
        message: 'tip',
        author: 'test',
        date: parentDate,
        parentSha: olderSha,
        parentShas: [olderSha],
      },
    ];
    const sessions = buildWorktreeSessions(
      [
        wt({
          path: '/repo',
          branchName: null,
          headSha: tipSha,
          parentSha: olderSha,
          isCurrent: true,
          hasUncommittedChanges: true,
        }),
        wt({ path: '/repo/wt-090a', branchName: cursorBranch, headSha: tipSha }),
      ],
      '/repo',
      { branchName: null, headSha: tipSha, hasUncommittedChanges: true, parentSha: olderSha },
    );
    const injected = injectWorktreeUncommittedPreviews({
      sessions,
      branches: [
        makeBranch('main', tipSha, 2),
        makeBranch(cursorBranch, tipSha, 2),
      ],
      branchCommitPreviews: {
        main: [directCommits[1]!, directCommits[2]!],
        [cursorBranch]: [directCommits[1]!, directCommits[2]!],
      },
      branchUniqueAheadCounts: { main: 2, [cursorBranch]: 2 },
      directCommits,
      defaultBranch: 'main',
    });
    const worktreeLane = injected.branches.find((branch) => branch.name.startsWith('Worktree · '));
    expect(worktreeLane?.parentBranch).toBe(cursorBranch);

    const layout = computeBranchGridLayout({
      branches: injected.branches,
      mergeNodes: [],
      directCommits,
      unpushedDirectCommits: directCommits.slice(1),
      unpushedCommitShasByBranch: { main: [olderSha, tipSha], [cursorBranch]: [olderSha, tipSha] },
      defaultBranch: 'main',
      branchCommitPreviews: injected.branchCommitPreviews,
      branchParentByName: {
        main: null,
        [cursorBranch]: 'main',
        ...(worktreeLane ? { [worktreeLane.name]: worktreeLane.parentBranch ?? null } : {}),
      },
      branchUniqueAheadCounts: injected.branchUniqueAheadCounts,
      manuallyOpenedClumps: new Set(),
      manuallyClosedClumps: new Set(),
      isDebugOpen: false,
      gridSearchQuery: '',
      gridFocusSha: null,
      checkedOutRef: { branchName: null, headSha: tipSha, hasUncommittedChanges: true, parentSha: olderSha },
      worktreeSessions: sessions,
      orientation: 'horizontal',
    });

    const primaryId = sessions.find((session) => session.isCurrent)!.workingTreeId;
    const worktreeNode = layout.renderNodes.find((node) => node.commit.id === primaryId);
    const parentNode = layout.renderNodes.find(
      (node) => node.commit.id === tipSha && node.commit.branchName === cursorBranch,
    );
    expect(worktreeNode?.commit.branchName.startsWith('Worktree · ')).toBe(true);
    expect(worktreeNode).toBeDefined();
    expect(parentNode).toBeDefined();
    expect(worktreeNode!.row).toBeGreaterThan(parentNode!.row);
    expect(worktreeNode!.column).toBeGreaterThan(parentNode!.column);
    expect(worktreeNode!.y).toBeGreaterThan(parentNode!.y);
    const usedRows = [...new Set(layout.renderNodes.map((node) => node.row))].sort((a, b) => a - b);
    expect(usedRows).toEqual(usedRows.map((_, index) => index + 1));
  });
});
