import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import {
  applyWorktreeDraftMessagesToPreviews,
  buildWorktreeDraftDisplayMap,
  draftNeedsRegeneration,
  hasAiCommitMessageReady,
  resolveAiCommitMessageForCommit,
  formatWorktreeSummaryFallback,
  hashWorktreeSummary,
  resolvePreparedCommitMessage,
  resolvePreparedStashMessage,
  resolvePreviousCommitTitleForRegeneration,
  resolvePreviousStashTitleForRegeneration,
  resolveWorktreeDraftDisplayLabel,
  WORKTREE_SUMMARY_STATUS_MARKER,
} from './worktreeDraftMessages';
import {
  readPersistedWorktreeDraft,
  removePersistedWorktreeDraft,
  writePersistedWorktreeDraft,
} from './worktreeDraftStorage';

describe('worktreeDraftMessages', () => {
  it('hashes summaries deterministically', () => {
    const summary = ' file.ts | 2 ++\n--- status ---\n M file.ts';
    expect(hashWorktreeSummary(summary)).toBe(hashWorktreeSummary(summary));
    expect(hashWorktreeSummary(summary)).not.toBe(hashWorktreeSummary(`${summary}\nextra`));
  });

  it('formats fallback labels from git status', () => {
    const summary = [
      WORKTREE_SUMMARY_STATUS_MARKER,
      ' M src/App.tsx',
      ' M components/grid/MapGrid.tsx',
      '?? README.md',
    ].join('\n');
    expect(formatWorktreeSummaryFallback(summary)).toBe('Update App.tsx and 2 others');
  });

  it('formats fallback from a single changed file', () => {
    const summary = [
      ' src/foo.ts | 4 +++--',
      ' 1 file changed, 4 insertions(+), 2 deletions(-)',
      WORKTREE_SUMMARY_STATUS_MARKER,
      ' M src/foo.ts',
    ].join('\n');
    expect(formatWorktreeSummaryFallback(summary)).toBe('Update foo.ts');
  });

  it('uses Building on the node while ai message is missing', () => {
    expect(resolveWorktreeDraftDisplayLabel({
      status: 'pending',
      message: '',
      fallbackLabel: 'Update foo.ts',
    })).toBe('Building');
    expect(resolveWorktreeDraftDisplayLabel({
      status: 'ready',
      message: 'Add feature',
      fallbackLabel: 'Update foo.ts',
    })).toBe('Add feature');
  });

  it('shows stale ai titles while regen is pending after tree changes', () => {
    expect(resolveWorktreeDraftDisplayLabel({
      status: 'pending',
      message: 'Add feature',
      fallbackLabel: 'Update foo.ts',
    })).toBe('Add feature');
  });

  it('passes prior titles for regen when tree drifted', () => {
    const stale = {
      status: 'pending' as const,
      commitMessage: 'Add grid drafts',
      stashMessage: 'WIP grid drafts',
      summaryFingerprint: 'new',
      messageFingerprint: 'old',
      fallbackLabel: 'Update foo.ts',
    };
    expect(resolvePreviousCommitTitleForRegeneration(stale)).toBe('Add grid drafts');
    expect(resolvePreviousStashTitleForRegeneration(stale)).toBe('WIP grid drafts');
    expect(resolvePreviousCommitTitleForRegeneration({
      ...stale,
      messageFingerprint: 'new',
      status: 'ready',
    })).toBeUndefined();
  });

  it('detects when a draft needs regeneration', () => {
    expect(draftNeedsRegeneration({
      status: 'ready',
      commitMessage: 'Add feature',
      stashMessage: 'WIP feature',
      summaryFingerprint: 'abc',
      messageFingerprint: 'abc',
      fallbackLabel: 'Update foo.ts',
    })).toBe(false);
    expect(draftNeedsRegeneration({
      status: 'pending',
      commitMessage: 'Add feature',
      stashMessage: 'WIP feature',
      summaryFingerprint: 'new',
      messageFingerprint: 'old',
      fallbackLabel: 'Update foo.ts',
    })).toBe(true);
  });

  it('requires ready ai title for commit wait flow', () => {
    expect(hasAiCommitMessageReady({
      status: 'ready',
      commitMessage: 'Add feature',
      stashMessage: 'WIP',
      summaryFingerprint: 'abc',
      messageFingerprint: 'abc',
      fallbackLabel: 'Update foo.ts',
    })).toBe(true);
    expect(resolveAiCommitMessageForCommit({
      status: 'pending',
      commitMessage: '',
      stashMessage: '',
      summaryFingerprint: 'abc',
      messageFingerprint: '',
      fallbackLabel: 'Update foo.ts',
    })).toBeNull();
    expect(resolveAiCommitMessageForCommit({
      status: 'ready',
      commitMessage: 'Add feature',
      stashMessage: 'WIP',
      summaryFingerprint: 'new',
      messageFingerprint: 'old',
      fallbackLabel: 'Update foo.ts',
    })).toBeNull();
  });

  it('resolves prepared commit and stash messages with fallback', () => {
    const pending = {
      status: 'pending' as const,
      commitMessage: '',
      stashMessage: '',
      summaryFingerprint: 'abc',
      messageFingerprint: '',
      fallbackLabel: 'Update foo.ts',
    };
    expect(resolvePreparedCommitMessage(pending)).toBe('Update foo.ts');
    expect(resolvePreparedStashMessage(pending)).toBe('WIP: Update foo.ts');
    expect(resolvePreparedCommitMessage({
      ...pending,
      status: 'ready',
      commitMessage: 'Add feature',
      stashMessage: 'WIP feature',
      messageFingerprint: 'abc',
    })).toBe('Add feature');
    expect(resolvePreparedCommitMessage({
      status: 'pending',
      commitMessage: 'Old title',
      stashMessage: 'Old stash',
      summaryFingerprint: 'new',
      messageFingerprint: 'old',
      fallbackLabel: 'Update foo.ts',
    })).toBe('Update foo.ts');
  });

  it('builds display map for dirty worktrees even before ai is ready', () => {
    const map = buildWorktreeDraftDisplayMap(
      {},
      { 'WORKING_TREE:abc': '/repo/wt-a' },
      ['WORKING_TREE:abc'],
    );
    expect(map.get('WORKING_TREE:abc')).toEqual({
      status: 'pending',
      message: '',
      fallbackLabel: 'Uncommitted changes',
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
          messageFingerprint: 'abc',
          fallbackLabel: 'Update foo.ts',
        },
      },
      { 'WORKING_TREE:abc': '/repo/wt-a' },
    );
    expect(next.main?.[0]?.message).toBe('Draft title');
  });

  it('applies Building to uncommitted previews when ai is pending without text', () => {
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
          status: 'pending',
          commitMessage: '',
          stashMessage: '',
          summaryFingerprint: 'abc',
          messageFingerprint: '',
          fallbackLabel: 'Update foo.ts',
        },
      },
      { 'WORKING_TREE:abc': '/repo/wt-a' },
    );
    expect(next.main?.[0]?.message).toBe('Building');
  });
});

describe('worktreeDraftStorage', () => {
  beforeEach(() => {
    vi.stubGlobal('localStorage', {
      store: new Map<string, string>(),
      getItem(key: string) {
        return this.store.get(key) ?? null;
      },
      setItem(key: string, value: string) {
        this.store.set(key, value);
      },
      removeItem(key: string) {
        this.store.delete(key);
      },
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('persists and reloads drafts across sessions', () => {
    const entry = {
      status: 'ready' as const,
      commitMessage: 'Add feature',
      stashMessage: 'WIP feature',
      summaryFingerprint: 'abc123',
      messageFingerprint: 'abc123',
      fallbackLabel: 'Update foo.ts',
    };
    writePersistedWorktreeDraft('/repo/wt-a', entry);
    expect(readPersistedWorktreeDraft('/repo/wt-a')).toEqual(entry);
    removePersistedWorktreeDraft('/repo/wt-a');
    expect(readPersistedWorktreeDraft('/repo/wt-a')).toBeNull();
  });
});
