import { describe, expect, it } from 'vitest';
import {
  assignNodePositionOverride,
  assignNodePositionPreview,
  canonicalizeNodePositionOverridesForCommits,
  getNodePositionOverride,
  getStableNodePositionKey,
  migrateNodePositionOverridesForCommits,
  laneBranchNamesForPositionOverrides,
  migrateWorkingTreeOverrideToNewHead,
} from './nodePositionOverrides';
import { LEGACY_WORKING_TREE_ID } from '../../lib/worktreeSessions';
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

  it('resolves persisted overrides for worktree tiles via stable keys', () => {
    const worktree = commit({
      id: 'WORKING_TREE',
      visualId: 'main:WORKING_TREE',
      kind: 'uncommitted',
      sha: 'uncommitted',
    });
    const overrides: NodePositionOverrides = {
      'stable:working-tree:current': { x: 999, y: 888 },
      'main:WORKING_TREE': { x: 777, y: 666 },
    };

    expect(getNodePositionOverride(overrides, worktree)).toEqual({ x: 999, y: 888 });
  });

  it('collects lane branch names for override migration', () => {
    expect(
      laneBranchNamesForPositionOverrides({
        defaultBranch: 'main',
        commitBranchName: 'feature',
        checkedOutBranchName: 'main',
        extraBranchNames: ['cursor-sdk'],
      }),
    ).toEqual(['feature', 'main', 'cursor-sdk', 'main (local)']);
  });

  it('moves working-tree drag position to new HEAD and clears worktree overrides on commit', () => {
    const overrides: NodePositionOverrides = {
      WORKING_TREE: { x: 100, y: 200 },
      'main:WORKING_TREE': { x: 100, y: 200 },
      'stable:working-tree:current': { x: 100, y: 200 },
      'stable:sha:oldhead': { x: 1, y: 2 },
    };

    const migrated = migrateWorkingTreeOverrideToNewHead(
      overrides,
      'newsha1',
      LEGACY_WORKING_TREE_ID,
      ['main', 'main (local)'],
    );

    expect(getNodePositionOverride(migrated, { id: 'newsha1', visualId: 'main:newsha1' })).toEqual({
      x: 100,
      y: 200,
    });
    expect(getNodePositionOverride(migrated, { id: 'newsha1', visualId: 'main (local):newsha1' })).toEqual({
      x: 100,
      y: 200,
    });
    expect(getNodePositionOverride(migrated, {
      id: 'WORKING_TREE',
      visualId: 'main:WORKING_TREE',
      kind: 'uncommitted',
    })).toBeUndefined();
    expect(migrated['stable:working-tree:current']).toBeUndefined();
    expect(migrated['stable:sha:oldhead']).toEqual({ x: 1, y: 2 });
  });

  it('migrates when the worktree override only exists on a local-divergence lane visual id', () => {
    const overrides: NodePositionOverrides = {
      'main (local):WORKING_TREE': { x: 50, y: 60 },
    };

    const migrated = migrateWorkingTreeOverrideToNewHead(
      overrides,
      'newsha1',
      LEGACY_WORKING_TREE_ID,
      ['main', 'main (local)'],
    );

    expect(getNodePositionOverride(migrated, { id: 'newsha1', visualId: 'main (local):newsha1' })).toEqual({
      x: 50,
      y: 60,
    });
    expect(migrated['main (local):WORKING_TREE']).toBeUndefined();
  });

  it('does not migrate when the worktree was never dragged', () => {
    const overrides: NodePositionOverrides = {
      'stable:sha:existing': { x: 1, y: 2 },
    };

    const migrated = migrateWorkingTreeOverrideToNewHead(
      overrides,
      'newsha1',
      LEGACY_WORKING_TREE_ID,
      ['main'],
    );

    expect(migrated).toBe(overrides);
    expect(migrated['stable:sha:existing']).toEqual({ x: 1, y: 2 });
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
