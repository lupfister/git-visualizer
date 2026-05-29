import { describe, expect, it } from 'vitest';
import {
  applyWorktreeDraftMessagesToPreviews,
  buildWorktreeDraftDisplayMap,
  hashWorktreeSummary,
} from './worktreeDraftMessages';

describe('worktreeDraftMessages', () => {
  it('hashes summaries deterministically', () => {
    const summary = ' file.ts | 2 ++\n--- status ---\n M file.ts';
    expect(hashWorktreeSummary(summary)).toBe(hashWorktreeSummary(summary));
    expect(hashWorktreeSummary(summary)).not.toBe(hashWorktreeSummary(`${summary}\nextra`));
  });

  it('builds display map for ready drafts', () => {
    const map = buildWorktreeDraftDisplayMap(
      {
        '/repo/wt-a': {
          status: 'ready',
          commitMessage: 'Add feature',
          stashMessage: 'WIP feature',
          summaryFingerprint: 'abc',
        },
      },
      { 'WORKING_TREE:abc': '/repo/wt-a' },
    );
    expect(map.get('WORKING_TREE:abc')).toEqual({
      status: 'ready',
      message: 'Add feature',
    });
  });

  it('applies ready draft messages to uncommitted previews', () => {
    const previews = {
      main: [{
        fullSha: 'WORKING_TREE:abc',
        sha: 'uncommitted',
        parentSha: 'deadbeef',
        message: '',
        author: 'You',
        date: '2026-01-01T00:00:00.000Z',
        kind: 'uncommitted' as const,
      }],
    };
    const next = applyWorktreeDraftMessagesToPreviews(
      previews,
      {
        '/repo/wt-a': {
          status: 'ready',
          commitMessage: 'Draft title',
          stashMessage: 'Draft stash',
          summaryFingerprint: 'abc',
        },
      },
      { 'WORKING_TREE:abc': '/repo/wt-a' },
    );
    expect(next.main?.[0]?.message).toBe('Draft title');
  });
});
