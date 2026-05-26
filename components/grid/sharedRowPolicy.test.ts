import { describe, expect, it } from 'vitest';
import {
  SHARED_ROW_BRANCH_SIBLING_FORK_POINT_MAX_TIME_DELTA_MS,
  SHARED_ROW_BRANCH_SIBLING_MAX_TIME_DELTA_MS,
  SHARED_ROW_MAX_TIME_DELTA_MS,
  branchSiblingSharedRowMaxDeltaMs,
  commitsAreForkSiblings,
  isForkPointParentSha,
  localDivergenceLaneBranchName,
  sharedRowMaxDeltaMs,
} from './sharedRowPolicy';

describe('sharedRowPolicy', () => {
  const resolveKnownShas = (sha: string): string[] => [sha];

  it('names local-divergence lane from default branch', () => {
    expect(localDivergenceLaneBranchName('main')).toBe('main (local)');
  });

  it('detects fork-point parents from the fork set', () => {
    const forkParentShas = new Set(['parentsha']);
    expect(isForkPointParentSha('parentsha', forkParentShas, resolveKnownShas)).toBe(true);
    expect(isForkPointParentSha('other', forkParentShas, resolveKnownShas)).toBe(false);
  });

  it('requires resolvable parent for fork siblings', () => {
    const emptyResolve = (): string[] => [];
    expect(commitsAreForkSiblings('a', 'a', emptyResolve)).toBe(false);
    expect(commitsAreForkSiblings('a', 'a', resolveKnownShas)).toBe(true);
    expect(commitsAreForkSiblings('a', 'b', resolveKnownShas)).toBe(false);
  });

  it('uses wider window at fork points for branch siblings', () => {
    const forkParentShas = new Set(['fork']);
    expect(branchSiblingSharedRowMaxDeltaMs('fork', forkParentShas, resolveKnownShas)).toBe(
      SHARED_ROW_BRANCH_SIBLING_FORK_POINT_MAX_TIME_DELTA_MS,
    );
    expect(branchSiblingSharedRowMaxDeltaMs('other', forkParentShas, resolveKnownShas)).toBe(
      SHARED_ROW_BRANCH_SIBLING_MAX_TIME_DELTA_MS,
    );
  });

  it('picks unrelated vs sibling windows for row sharing', () => {
    const forkParentShas = new Set(['fork']);
    expect(sharedRowMaxDeltaMs('fork', 'fork', forkParentShas, resolveKnownShas)).toBe(
      SHARED_ROW_BRANCH_SIBLING_FORK_POINT_MAX_TIME_DELTA_MS,
    );
    expect(sharedRowMaxDeltaMs('fork', 'other', forkParentShas, resolveKnownShas)).toBe(
      SHARED_ROW_MAX_TIME_DELTA_MS,
    );
  });
});
