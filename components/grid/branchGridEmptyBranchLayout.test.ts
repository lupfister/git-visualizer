import { describe, expect, it } from 'vitest';
import type { Branch, DirectCommit } from '../../types';
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

describe('computeBranchGridLayout empty branch placeholders', () => {
  it('places BRANCH_HEAD one row ahead and one lane below the fork parent', () => {
    const defaultBranch = 'main';
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
        date: '2024-06-01T12:00:00Z',
        parentSha: mainSha,
        parentShas: [mainSha],
      },
    ];
    const branchCommitPreviews = { main: [], 'cursor-sdk': [] };
    const branchUniqueAheadCounts = { main: 1, 'cursor-sdk': 0 };
    const layout = computeBranchGridLayout({
      branches,
      mergeNodes: [],
      directCommits,
      unpushedDirectCommits: [],
      defaultBranch,
      branchCommitPreviews,
      branchParentByName: { main: null, 'cursor-sdk': 'main' },
      branchUniqueAheadCounts,
      manuallyOpenedClumps: new Set(),
      manuallyClosedClumps: new Set(),
      isDebugOpen: false,
      gridSearchQuery: '',
      gridFocusSha: null,
      checkedOutRef: null,
      orientation: 'horizontal',
    });

    const placeholderNode = layout.renderNodes.find((node) =>
      node.commit.id.startsWith('BRANCH_HEAD:cursor-sdk:'),
    );
    expect(placeholderNode).toBeDefined();

    const forkParentNode = layout.renderNodes.find(
      (node) => node.commit.branchName === defaultBranch && node.commit.id === mainSha,
    );
    expect(forkParentNode).toBeDefined();
    expect(placeholderNode!.row).toBeGreaterThan(forkParentNode!.row);
    expect(placeholderNode!.column).toBeGreaterThan(forkParentNode!.column);
    const sameSlot = layout.renderNodes.filter(
      (node) => node.row === placeholderNode!.row && node.column === placeholderNode!.column,
    );
    expect(sameSlot).toHaveLength(1);
    expect(placeholderNode!.commit.date).toBe(forkParentNode!.commit.date);
  });

  it('aligns placeholder with fork parent row when branch tip is an older commit', () => {
    const defaultBranch = 'main';
    const oldSha = 'cccccccccccccccccccccccccccccccccccccccc';
    const branches = [
      makeBranch(defaultBranch, tipSha, 2),
      makeBranch('worktree-agents', oldSha, 0),
    ];
    branches[1]!.divergedFromSha = mainSha;
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
        fullSha: oldSha,
        sha: oldSha.slice(0, 7),
        branch: defaultBranch,
        message: 'old',
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
        date: '2024-06-01T12:00:00Z',
        parentSha: oldSha,
        parentShas: [oldSha],
      },
    ];
    const branchCommitPreviews = { main: [], 'worktree-agents': [] };
    const branchUniqueAheadCounts = { main: 2, 'worktree-agents': 0 };

    const layout = computeBranchGridLayout({
      branches,
      mergeNodes: [],
      directCommits,
      unpushedDirectCommits: [],
      defaultBranch,
      branchCommitPreviews,
      branchParentByName: { main: null, 'worktree-agents': 'main' },
      branchUniqueAheadCounts,
      manuallyOpenedClumps: new Set(),
      manuallyClosedClumps: new Set(),
      isDebugOpen: false,
      gridSearchQuery: '',
      gridFocusSha: null,
      checkedOutRef: null,
      orientation: 'horizontal',
    });

    const placeholderNode = layout.renderNodes.find((node) =>
      node.commit.id.startsWith('BRANCH_HEAD:worktree-agents:'),
    );
    const forkNode = layout.renderNodes.find(
      (node) => node.commit.branchName === defaultBranch && node.commit.id === mainSha,
    );
    const tipNode = layout.renderNodes.find(
      (node) => node.commit.branchName === defaultBranch && node.commit.id === tipSha,
    );
    expect(placeholderNode).toBeDefined();
    expect(forkNode).toBeDefined();
    expect(tipNode).toBeDefined();
    expect(placeholderNode!.row).toBeGreaterThan(forkNode!.row);
    expect(placeholderNode!.column).toBeGreaterThan(forkNode!.column);
    expect(tipNode!.row).toBeGreaterThan(placeholderNode!.row);
    expect(placeholderNode!.commit.date).toBe(forkNode!.commit.date);
  });

  it('places stash nodes one row ahead and one lane below the anchor commit', () => {
    const defaultBranch = 'main';
    const stashId = 'STASH:0';
    const branches = [
      makeBranch(defaultBranch, tipSha, 1),
      {
        ...makeBranch('Stash 1', stashId, 1),
        parentBranch: defaultBranch,
        divergedFromSha: mainSha,
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
        date: '2024-06-01T12:00:00Z',
        parentSha: mainSha,
        parentShas: [mainSha],
      },
    ];
    const branchCommitPreviews = {
      main: [],
      'Stash 1': [
        {
          fullSha: stashId,
          sha: 'Stash 1',
          parentSha: mainSha,
          message: 'wip',
          author: 'You',
          date: '2024-05-01T12:00:00Z',
          kind: 'stash',
        },
      ],
    };
    const branchUniqueAheadCounts = { main: 1, 'Stash 1': 1 };

    const layout = computeBranchGridLayout({
      branches,
      mergeNodes: [],
      directCommits,
      unpushedDirectCommits: [],
      defaultBranch,
      branchCommitPreviews,
      branchParentByName: { main: null, 'Stash 1': 'main' },
      branchUniqueAheadCounts,
      manuallyOpenedClumps: new Set(),
      manuallyClosedClumps: new Set(),
      isDebugOpen: false,
      gridSearchQuery: '',
      gridFocusSha: null,
      checkedOutRef: null,
      orientation: 'horizontal',
    });

    const stashNode = layout.renderNodes.find((node) => node.commit.id === stashId);
    const anchorNode = layout.renderNodes.find(
      (node) => node.commit.branchName === defaultBranch && node.commit.id === mainSha,
    );
    expect(stashNode).toBeDefined();
    expect(anchorNode).toBeDefined();
    expect(stashNode!.row).toBeGreaterThan(anchorNode!.row);
    expect(stashNode!.column).toBeGreaterThan(anchorNode!.column);
    const sameSlot = layout.renderNodes.filter(
      (node) => node.row === stashNode!.row && node.column === stashNode!.column,
    );
    expect(sameSlot).toHaveLength(1);
    const mainLineNodes = layout.renderNodes.filter(
      (node) => node.commit.branchName === defaultBranch && node.commit.kind !== 'stash',
    );
    for (const mainNode of mainLineNodes) {
      expect(mainNode.column).not.toBe(stashNode!.column);
      expect(mainNode.y).not.toBe(stashNode!.y);
    }
  });

  it('keeps every commit in an open clump on one timeline row', () => {
    const defaultBranch = 'main';
    const unpushedA = 'cccccccccccccccccccccccccccccccccccccccc';
    const unpushedB = 'dddddddddddddddddddddddddddddddddddddddd';
    const unpushedC = 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
    const branches = [
      makeBranch(defaultBranch, tipSha, 1),
      makeBranch('feature', unpushedC, 3, defaultBranch),
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
        date: '2024-06-02T12:00:00Z',
        parentSha: mainSha,
        parentShas: [mainSha],
      },
    ];
    const unpushedDirectCommits: DirectCommit[] = [
      {
        fullSha: unpushedA,
        sha: unpushedA.slice(0, 7),
        branch: 'feature',
        message: 'first',
        author: 'test',
        date: '2024-06-03T10:00:00Z',
        parentSha: tipSha,
        parentShas: [tipSha],
      },
      {
        fullSha: unpushedB,
        sha: unpushedB.slice(0, 7),
        branch: 'feature',
        message: 'second',
        author: 'test',
        date: '2024-06-03T11:00:00Z',
        parentSha: unpushedA,
        parentShas: [unpushedA],
      },
      {
        fullSha: unpushedC,
        sha: unpushedC.slice(0, 7),
        branch: 'feature',
        message: 'third',
        author: 'test',
        date: '2024-06-03T12:00:00Z',
        parentSha: unpushedB,
        parentShas: [unpushedB],
      },
    ];
    const branchCommitPreviews = { main: [], feature: [] };
    const branchUniqueAheadCounts = { main: 1, feature: 3 };
    const baseInput = {
      branches,
      mergeNodes: [],
      directCommits,
      unpushedDirectCommits,
      unpushedCommitShasByBranch: {
        feature: [unpushedA, unpushedB, unpushedC],
      },
      defaultBranch,
      branchCommitPreviews,
      branchParentByName: { main: null, feature: 'main' },
      branchUniqueAheadCounts,
      manuallyClosedClumps: new Set<string>(),
      isDebugOpen: false,
      gridSearchQuery: '',
      gridFocusSha: null,
      checkedOutRef: null,
      orientation: 'horizontal' as const,
    };

    const collapsed = computeBranchGridLayout({
      ...baseInput,
      manuallyOpenedClumps: new Set<string>(),
    });
    const clusterKey = [...collapsed.clusterCounts.entries()].find(([, count]) => count > 1)?.[0];
    expect(clusterKey).toBeDefined();

    const opened = computeBranchGridLayout({
      ...baseInput,
      manuallyOpenedClumps: new Set([clusterKey!]),
    });
    const clumpNodes = opened.renderNodes.filter(
      (node) => opened.clusterKeyByCommitId.get(node.commit.visualId) === clusterKey,
    );
    expect(clumpNodes.length).toBeGreaterThan(1);
    expect(new Set(clumpNodes.map((node) => node.row)).size).toBe(1);

    const collapsedMaxRow = Math.max(...collapsed.renderNodes.map((node) => node.row));
    const openedMaxRow = Math.max(...opened.renderNodes.map((node) => node.row));
    expect(openedMaxRow).toBe(collapsedMaxRow);

    const openedRows = opened.renderNodes.map((node) => node.row);
    expect(Math.max(...openedRows)).toBe(new Set(openedRows).size);
  });

  it('interleaves stash lanes by date between fork parent and newer branch work', () => {
    const defaultBranch = 'main';
    const stashId = 'STASH:0';
    const unpushedA = 'cccccccccccccccccccccccccccccccccccccccc';
    const unpushedB = 'dddddddddddddddddddddddddddddddddddddddd';
    const unpushedC = 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
    const branches = [
      makeBranch(defaultBranch, tipSha, 1),
      makeBranch('feature', unpushedC, 3, defaultBranch),
      {
        ...makeBranch('Stash 1', stashId, 1),
        parentBranch: defaultBranch,
        divergedFromSha: mainSha,
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
        date: '2024-06-01T12:00:00Z',
        parentSha: mainSha,
        parentShas: [mainSha],
      },
    ];
    const unpushedDirectCommits: DirectCommit[] = [
      {
        fullSha: unpushedA,
        sha: unpushedA.slice(0, 7),
        branch: 'feature',
        message: 'first',
        author: 'test',
        date: '2024-06-10T10:00:00Z',
        parentSha: tipSha,
        parentShas: [tipSha],
      },
      {
        fullSha: unpushedB,
        sha: unpushedB.slice(0, 7),
        branch: 'feature',
        message: 'second',
        author: 'test',
        date: '2024-06-10T11:00:00Z',
        parentSha: unpushedA,
        parentShas: [unpushedA],
      },
      {
        fullSha: unpushedC,
        sha: unpushedC.slice(0, 7),
        branch: 'feature',
        message: 'third',
        author: 'test',
        date: '2024-06-10T12:00:00Z',
        parentSha: unpushedB,
        parentShas: [unpushedB],
      },
    ];
    const branchCommitPreviews = {
      main: [],
      feature: [],
      'Stash 1': [
        {
          fullSha: stashId,
          sha: 'Stash 1',
          parentSha: mainSha,
          message: 'wip',
          author: 'You',
          date: '2024-05-01T12:00:00Z',
          kind: 'stash',
        },
      ],
    };
    const layout = computeBranchGridLayout({
      branches,
      mergeNodes: [],
      directCommits,
      unpushedDirectCommits,
      unpushedCommitShasByBranch: {
        feature: [unpushedA, unpushedB, unpushedC],
      },
      defaultBranch,
      branchCommitPreviews,
      branchParentByName: { main: null, feature: 'main', 'Stash 1': 'main' },
      branchUniqueAheadCounts: { main: 1, feature: 3, 'Stash 1': 1 },
      manuallyOpenedClumps: new Set(),
      manuallyClosedClumps: new Set(),
      isDebugOpen: false,
      gridSearchQuery: '',
      gridFocusSha: null,
      checkedOutRef: null,
      orientation: 'vertical',
    });

    const stashNode = layout.renderNodes.find((node) => node.commit.id === stashId);
    const mainNode = layout.renderNodes.find((node) => node.commit.id === mainSha);
    const featureTipNode = layout.renderNodes.find((node) => node.commit.id === unpushedC);
    expect(stashNode).toBeDefined();
    expect(mainNode).toBeDefined();
    expect(featureTipNode).toBeDefined();
    expect(stashNode!.column).toBeGreaterThan(mainNode!.column);
    expect(stashNode!.column).toBeLessThan(featureTipNode!.column);
    expect(stashNode!.row).toBeGreaterThan(mainNode!.row);
    const maxColumn = Math.max(...layout.renderNodes.map((node) => node.column));
    expect(stashNode!.column).toBeLessThan(maxColumn);
  });
});
