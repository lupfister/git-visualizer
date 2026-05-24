import { describe, expect, it } from 'vitest';
import type { Branch, BranchCommitPreview } from '../../types';
import {
  isEmptyBranchPlaceholder,
  parseDeletableEmptyBranchFromCommitId,
} from './mapDeleteTarget';

const makeBranch = (name: string, commitsAhead: number): Branch => ({
  name,
  commitsAhead,
  commitsBehind: 0,
  lastCommitDate: '2024-01-01T00:00:00Z',
  lastCommitAuthor: 'test',
  status: 'fresh',
  remoteSyncStatus: 'local-only',
  unpushedCommits: 0,
  headSha: 'abc1234567890',
});

describe('mapDeleteTarget', () => {
  const defaultBranch = 'main';
  const branchByName = new Map<string, Branch>([
    [defaultBranch, makeBranch(defaultBranch, 1)],
    ['cursor-sdk', makeBranch('cursor-sdk', 0)],
    ['feature', makeBranch('feature', 2)],
  ]);
  const emptyPreviews: Record<string, BranchCommitPreview[]> = {
    'cursor-sdk': [],
  };

  it('allows deleting empty branch placeholder nodes', () => {
    expect(
      parseDeletableEmptyBranchFromCommitId(
        'BRANCH_HEAD:cursor-sdk:abc1234567890',
        defaultBranch,
        branchByName,
        { 'cursor-sdk': 0 },
        emptyPreviews,
      ),
    ).toBe('cursor-sdk');
  });

  it('rejects default branch and branches with unique commits', () => {
    expect(
      parseDeletableEmptyBranchFromCommitId(
        'BRANCH_HEAD:main:abc1234567890',
        defaultBranch,
        branchByName,
        {},
        {},
      ),
    ).toBeNull();
    expect(
      parseDeletableEmptyBranchFromCommitId(
        'BRANCH_HEAD:feature:abc1234567890',
        defaultBranch,
        branchByName,
        { feature: 2 },
        {
          feature: [
            {
              fullSha: 'deadbeef',
              sha: 'deadbee',
              message: 'commit',
              author: 'a',
              date: '2024-01-02T00:00:00Z',
              kind: 'commit',
            },
          ],
        },
      ),
    ).toBeNull();
  });

  it('detects empty placeholders from branch metadata', () => {
    expect(isEmptyBranchPlaceholder('cursor-sdk', branchByName, { 'cursor-sdk': 0 }, emptyPreviews)).toBe(
      true,
    );
    expect(isEmptyBranchPlaceholder('feature', branchByName, { feature: 1 }, {})).toBe(false);
  });
});
