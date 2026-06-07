import { describe, expect, it } from 'vitest';
import {
  REPO_SYNC_INTERVALS_HIDDEN,
  REPO_SYNC_INTERVALS_VISIBLE,
  REPO_SYNC_LANE_STAGGER_MS,
  resolveRepoSyncIntervals,
} from './repoSyncScheduler';

describe('resolveRepoSyncIntervals', () => {
  it('uses fast intervals when the document is visible', () => {
    expect(resolveRepoSyncIntervals(false)).toEqual(REPO_SYNC_INTERVALS_VISIBLE);
  });

  it('uses slower intervals when the document is hidden', () => {
    expect(resolveRepoSyncIntervals(true)).toEqual(REPO_SYNC_INTERVALS_HIDDEN);
    expect(REPO_SYNC_INTERVALS_HIDDEN.dirtyMs).toBe(30_000);
    expect(REPO_SYNC_INTERVALS_HIDDEN.peekMs).toBe(60_000);
    expect(REPO_SYNC_INTERVALS_HIDDEN.fullMs).toBe(180_000);
  });
});

describe('repo sync lane stagger', () => {
  it('offsets peek and full lanes after dirty on visible tab', () => {
    expect(REPO_SYNC_LANE_STAGGER_MS.dirty).toBe(0);
    expect(REPO_SYNC_LANE_STAGGER_MS.peek).toBeGreaterThan(0);
    expect(REPO_SYNC_LANE_STAGGER_MS.full).toBeGreaterThan(REPO_SYNC_LANE_STAGGER_MS.peek);
  });

  it('visible peek interval is faster than the old 30s head probe', () => {
    expect(REPO_SYNC_INTERVALS_VISIBLE.peekMs).toBeLessThan(30_000);
  });
});
