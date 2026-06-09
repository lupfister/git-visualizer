import { describe, expect, it } from 'vitest';
import {
  REPO_SYNC_INTERVALS_HIDDEN,
  REPO_SYNC_INTERVALS_VISIBLE,
  resolveRepoSyncIntervals,
} from './repoSyncScheduler';

describe('resolveRepoSyncIntervals', () => {
  it('uses fast intervals when the document is visible', () => {
    expect(resolveRepoSyncIntervals(false)).toEqual(REPO_SYNC_INTERVALS_VISIBLE);
  });

  it('uses slower intervals when the document is hidden', () => {
    expect(resolveRepoSyncIntervals(true)).toEqual(REPO_SYNC_INTERVALS_HIDDEN);
    expect(REPO_SYNC_INTERVALS_HIDDEN.reconcileMs).toBe(30_000);
    expect(REPO_SYNC_INTERVALS_HIDDEN.repairMs).toBe(180_000);
  });
});

describe('repo sync cadence', () => {
  it('reconciles once per second and repairs less frequently', () => {
    expect(REPO_SYNC_INTERVALS_VISIBLE.reconcileMs).toBe(1_000);
    expect(REPO_SYNC_INTERVALS_VISIBLE.repairMs).toBeGreaterThan(REPO_SYNC_INTERVALS_VISIBLE.reconcileMs);
  });
});
