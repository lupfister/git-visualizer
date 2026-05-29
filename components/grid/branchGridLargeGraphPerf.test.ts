import { describe, expect, it } from 'vitest';
import type { Branch, DirectCommit } from '../../types';
import { computeBranchGridLayout } from './branchGridLayoutModel';

describe('computeBranchGridLayout large graph perf', () => {
  it('completes within a loose CI time budget', () => {
    const defaultBranch = 'main';
    const commitCount = 120;
    const shas = Array.from({ length: commitCount }, (_, index) =>
      index.toString(16).padStart(40, 'a'));
    const directCommits: DirectCommit[] = shas.map((fullSha, index) => ({
      fullSha,
      sha: fullSha.slice(0, 7),
      branch: defaultBranch,
      message: `commit ${index}`,
      author: 'perf',
      date: `2024-01-${String((index % 27) + 1).padStart(2, '0')}T12:00:00Z`,
      parentSha: index === 0 ? null : shas[index - 1],
      parentShas: index === 0 ? [] : [shas[index - 1]],
      childShas: index === commitCount - 1 ? [] : [shas[index + 1]],
    }));
    const branches: Branch[] = [{
      name: defaultBranch,
      commitsAhead: commitCount,
      commitsBehind: 0,
      lastCommitDate: directCommits[commitCount - 1]?.date ?? '',
      lastCommitAuthor: 'perf',
      status: 'fresh',
      remoteSyncStatus: 'local-only',
      unpushedCommits: 0,
      headSha: shas[commitCount - 1],
      divergedFromSha: shas[0],
    }];

    const started = performance.now();
    const layout = computeBranchGridLayout({
      branches,
      mergeNodes: [],
      directCommits,
      unpushedDirectCommits: [],
      defaultBranch,
      branchCommitPreviews: { [defaultBranch]: [] },
      branchParentByName: { [defaultBranch]: null },
      branchUniqueAheadCounts: { [defaultBranch]: commitCount },
      manuallyOpenedClumps: new Set(),
      manuallyClosedClumps: new Set(),
      isDebugOpen: false,
      gridSearchQuery: '',
      gridFocusSha: null,
      checkedOutRef: null,
      orientation: 'horizontal',
    });
    const elapsedMs = performance.now() - started;

    expect(layout.renderNodes.length).toBeGreaterThan(0);
    expect(elapsedMs).toBeLessThan(45_000);
  });
});
