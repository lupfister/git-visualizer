import { describe, expect, it } from 'vitest';
import type { Branch, DirectCommit } from '../../types';
import { computeBranchGridLayout } from './branchGridLayoutModel';

const rootA = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const rootB = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
const childOnA = 'cccccccccccccccccccccccccccccccccccccccc';

const makeBranch = (name: string, headSha: string): Branch => ({
  name,
  commitsAhead: 0,
  commitsBehind: 0,
  lastCommitDate: '2024-06-02T12:00:00Z',
  lastCommitAuthor: 'test',
  status: 'fresh',
  remoteSyncStatus: 'synced',
  unpushedCommits: 0,
  headSha,
  parentBranch: 'main',
});

describe('computeBranchGridLayout root lane assignment', () => {
  it('places a branch root beside its declared parent branch when its parent commit is not rendered', () => {
    const defaultBranch = 'main';
    const hiddenParentSha = 'dddddddddddddddddddddddddddddddddddddddd';
    const branchTipSha = 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
    const branches = [
      makeBranch(defaultBranch, childOnA),
      { ...makeBranch('feature', branchTipSha), parentBranch: defaultBranch, divergedFromSha: hiddenParentSha },
    ];
    const layout = computeBranchGridLayout({
      branches,
      mergeNodes: [],
      directCommits: [
        {
          fullSha: rootA,
          sha: rootA.slice(0, 7),
          branch: defaultBranch,
          message: 'root main',
          author: 'test',
          date: '2024-05-01T12:00:00Z',
          parentSha: null,
          parentShas: [],
        },
        {
          fullSha: childOnA,
          sha: childOnA.slice(0, 7),
          branch: defaultBranch,
          message: 'main tip',
          author: 'test',
          date: '2024-06-01T12:00:00Z',
          parentSha: rootA,
          parentShas: [rootA],
        },
        {
          fullSha: branchTipSha,
          sha: branchTipSha.slice(0, 7),
          branch: 'feature',
          message: 'feature tip',
          author: 'test',
          date: '2024-06-02T12:00:00Z',
          parentSha: hiddenParentSha,
          parentShas: [hiddenParentSha],
        },
      ],
      unpushedDirectCommits: [],
      defaultBranch,
      branchCommitPreviews: { main: [], feature: [] },
      branchParentByName: { main: null, feature: defaultBranch },
      branchUniqueAheadCounts: { main: 1, feature: 1 },
      manuallyOpenedClumps: new Set(),
      manuallyClosedClumps: new Set(),
      isDebugOpen: false,
      gridSearchQuery: '',
      gridFocusSha: null,
      checkedOutRef: null,
      orientation: 'horizontal',
    });

    const mainNodes = layout.renderNodes.filter((node) => node.commit.branchName === defaultBranch);
    const featureNode = layout.renderNodes.find((node) => node.commit.id === branchTipSha);
    expect(mainNodes.length).toBeGreaterThan(0);
    expect(featureNode).toBeDefined();
    expect(featureNode!.column).toBe(Math.max(...mainNodes.map((node) => node.column)) + 1);
  });

  it('places unrelated root branches in separate columns', () => {
    const defaultBranch = 'main';
    const branches = [
      makeBranch(defaultBranch, childOnA),
      makeBranch('orphan', rootB),
    ];
    const directCommits: DirectCommit[] = [
      {
        fullSha: rootA,
        sha: rootA.slice(0, 7),
        branch: defaultBranch,
        message: 'root main',
        author: 'test',
        date: '2024-05-01T12:00:00Z',
        parentSha: null,
        parentShas: [],
      },
      {
        fullSha: childOnA,
        sha: childOnA.slice(0, 7),
        branch: defaultBranch,
        message: 'child',
        author: 'test',
        date: '2024-06-01T12:00:00Z',
        parentSha: rootA,
        parentShas: [rootA],
      },
      {
        fullSha: rootB,
        sha: rootB.slice(0, 7),
        branch: 'orphan',
        message: 'root orphan',
        author: 'test',
        date: '2024-06-02T12:00:00Z',
        parentSha: null,
        parentShas: [],
      },
    ];

    const layout = computeBranchGridLayout({
      branches,
      mergeNodes: [],
      directCommits,
      unpushedDirectCommits: [],
      defaultBranch,
      branchCommitPreviews: { main: [], orphan: [] },
      branchParentByName: { main: null, orphan: null },
      branchUniqueAheadCounts: { main: 1, orphan: 0 },
      manuallyOpenedClumps: new Set(),
      manuallyClosedClumps: new Set(),
      isDebugOpen: false,
      gridSearchQuery: '',
      gridFocusSha: null,
      checkedOutRef: { branchName: defaultBranch, sha: childOnA },
      orientation: 'horizontal',
    });

    const mainRoot = layout.nodes.find((node) => node.commit.id === rootA);
    const orphanRoot = layout.nodes.find((node) => node.commit.id === rootB);
    expect(mainRoot).toBeDefined();
    expect(orphanRoot).toBeDefined();
    expect(orphanRoot!.column).toBeGreaterThan(mainRoot!.column);
  });
});
