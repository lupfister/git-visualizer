import { describe, expect, it } from 'vitest';
import {
  assignNodePositionOverride,
  assignNodePositionPreview,
  canonicalizeNodePositionOverridesForCommits,
  getNodePositionOverride,
  getStableNodePositionKey,
  migrateNodePositionOverridesForCommits,
} from './nodePositionOverrides';
import type { NodePositionOverrides, VisualCommit } from './LayoutGrid';

const commit = (overrides: Partial<VisualCommit> = {}): VisualCommit => ({
  id: 'abc123',
  visualId: 'feature:abc123',
  branchName: 'feature',
  message: 'Commit',
  author: 'User',
  date: '2026-01-01T00:00:00.000Z',
  ...overrides,
});

describe('node position override keys', () => {
  it('writes all durable aliases for persisted drag positions', () => {
    const overrides: NodePositionOverrides = {};
    const target = commit();

    assignNodePositionOverride(overrides, target, { x: 10, y: 20 });

    expect(overrides[target.id]).toEqual({ x: 10, y: 20 });
    expect(overrides[target.visualId]).toEqual({ x: 10, y: 20 });
    expect(overrides[getStableNodePositionKey(target)]).toEqual({ x: 10, y: 20 });
  });

  it('uses visual keys only for transient drag previews', () => {
    const overrides: NodePositionOverrides = {};
    const target = commit();

    assignNodePositionPreview(overrides, target, { x: 12, y: 24 });

    expect(overrides[target.visualId]).toEqual({ x: 12, y: 24 });
    expect(overrides[getStableNodePositionKey(target)]).toBeUndefined();
  });

  it('finds old branch-qualified keys after branch identity changes', () => {
    const target = commit({ visualId: 'renamed:abc123', branchName: 'renamed' });
    const overrides: NodePositionOverrides = {
      'feature:abc123': { x: 50, y: 75 },
    };

    expect(getNodePositionOverride(overrides, target)).toEqual({ x: 50, y: 75 });
  });

  it('migrates legacy visual keys to stable keys', () => {
    const target = commit({ visualId: 'renamed:abc123', branchName: 'renamed' });
    const migrated = migrateNodePositionOverridesForCommits(
      { 'feature:abc123': { x: 50, y: 75 } },
      [target],
    );

    expect(migrated[getStableNodePositionKey(target)]).toEqual({ x: 50, y: 75 });
  });

  it('canonicalizes mixed persisted data down to current durable aliases for visible commits', () => {
    const first = commit();
    const second = commit({ id: 'def456', visualId: 'main:def456', branchName: 'main' });

    const canonical = canonicalizeNodePositionOverridesForCommits(
      {
        'feature:abc123': { x: 10, y: 20 },
        'stable:sha:def456': { x: 30, y: 40 },
        'orphan:999': { x: 50, y: 60 },
      },
      [first, second],
    );

    expect(canonical).toEqual({
      [first.id]: { x: 10, y: 20 },
      [first.visualId]: { x: 10, y: 20 },
      [getStableNodePositionKey(first)]: { x: 10, y: 20 },
      [second.id]: { x: 30, y: 40 },
      [second.visualId]: { x: 30, y: 40 },
      [getStableNodePositionKey(second)]: { x: 30, y: 40 },
    });
  });
});
