import { describe, expect, it } from 'vitest';
import type { VisualCommit } from './LayoutGrid';
import {
  clumpLaneSpan,
  clumpLayoutReservationSpan,
  deriveClumpMemberLayout,
} from './clumpLayout';

const makeCommit = (visualId: string, date: string): VisualCommit => ({
  id: visualId.split(':')[1] ?? visualId,
  branchName: visualId.split(':')[0] ?? 'main',
  message: visualId,
  author: 'test',
  date,
  parentSha: null,
  visualId,
});

describe('clumpLayout', () => {
  it('spans one lane when collapsed and count when open', () => {
    expect(clumpLaneSpan(3, false)).toBe(1);
    expect(clumpLaneSpan(3, true)).toBe(3);
  });

  it('reserves one lane in the column pass', () => {
    expect(clumpLayoutReservationSpan(3)).toBe(1);
  });

  it('keeps open clump columns on the owner until render expansion', () => {
    const clusterKey = 'cluster:feature:segment:1';
    const commits = [
      makeCommit('feature:aaaa', '2024-01-01T00:00:00Z'),
      makeCommit('feature:bbbb', '2024-01-02T00:00:00Z'),
      makeCommit('feature:cccc', '2024-01-03T00:00:00Z'),
    ];
    const clusterKeyByCommitId = new Map(commits.map((commit) => [commit.visualId, clusterKey]));
    const rowByVisualId = new Map<string, number>();
    const columnByCommitVisualId = new Map<string, number>();

    deriveClumpMemberLayout({
      clusterKey,
      row: 3,
      ownerColumn: 2,
      isOpen: true,
      leadVisualId: 'feature:cccc',
      commits,
      clusterKeyByCommitId,
      rowByVisualId,
      columnByCommitVisualId,
    });

    expect(columnByCommitVisualId.get('feature:aaaa')).toBe(2);
    expect(columnByCommitVisualId.get('feature:bbbb')).toBe(2);
    expect(columnByCommitVisualId.get('feature:cccc')).toBe(2);
    expect(new Set(commits.map((commit) => rowByVisualId.get(commit.visualId)))).toEqual(new Set([3]));
  });

  it('orders clump rows chronologically, independent of lead', () => {
    const clusterKey = 'cluster:feature:segment:1';
    const commits = [
      makeCommit('feature:newest', '2024-01-03T00:00:00Z'),
      makeCommit('feature:oldest', '2024-01-01T00:00:00Z'),
      makeCommit('feature:middle', '2024-01-02T00:00:00Z'),
    ];
    const clusterKeyByCommitId = new Map(commits.map((commit) => [commit.visualId, clusterKey]));
    const rowByVisualId = new Map<string, number>();
    const columnByCommitVisualId = new Map<string, number>();

    deriveClumpMemberLayout({
      clusterKey,
      row: 4,
      ownerColumn: 5,
      isOpen: true,
      leadVisualId: 'feature:middle',
      commits,
      clusterKeyByCommitId,
      rowByVisualId,
      columnByCommitVisualId,
    });

    expect(columnByCommitVisualId.get('feature:oldest')).toBe(5);
    expect(columnByCommitVisualId.get('feature:middle')).toBe(5);
    expect(columnByCommitVisualId.get('feature:newest')).toBe(5);
  });

  it('derives collapsed clump at owner column only', () => {
    const clusterKey = 'cluster:feature:segment:1';
    const commits = [
      makeCommit('feature:aaaa', '2024-01-01T00:00:00Z'),
      makeCommit('feature:bbbb', '2024-01-03T00:00:00Z'),
    ];
    const clusterKeyByCommitId = new Map(commits.map((commit) => [commit.visualId, clusterKey]));
    const rowByVisualId = new Map<string, number>();
    const columnByCommitVisualId = new Map<string, number>();

    deriveClumpMemberLayout({
      clusterKey,
      row: 3,
      ownerColumn: 2,
      isOpen: false,
      leadVisualId: 'feature:bbbb',
      commits,
      clusterKeyByCommitId,
      rowByVisualId,
      columnByCommitVisualId,
    });

    for (const commit of commits) {
      expect(columnByCommitVisualId.get(commit.visualId)).toBe(2);
      expect(rowByVisualId.get(commit.visualId)).toBe(3);
    }
  });
});
