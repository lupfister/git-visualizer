import { describe, expect, it } from 'vitest';
import type { Node } from './LayoutGrid';
import { buildMapGridCardSlotAssignments } from './MapGridCardVirtualizer';

const node = (visualId: string, x: number, y: number): Node => ({
  commit: {
    id: visualId,
    visualId,
    branchName: 'main',
    message: visualId,
    author: 'test',
    date: '2024-01-01T00:00:00Z',
    parentSha: null,
  },
  row: 1,
  column: 0,
  x,
  y,
});

describe('buildMapGridCardSlotAssignments', () => {
  it('uses projected positions for every opened clump node', () => {
    const first = node('main:first', 100, 200);
    const lead = node('main:lead', 100, 300);
    const assignments = buildMapGridCardSlotAssignments(
      2,
      [first, lead],
      {},
      {
        'main:first': { x: 900, y: 900 },
        'main:lead': { x: 800, y: 800 },
      },
      0,
      0,
      [],
      new Set([first.commit.visualId, lead.commit.visualId]),
    );

    expect(assignments.map(({ cardLeft, cardTop }) => [cardLeft, cardTop])).toEqual([
      [100, 200],
      [100, 300],
    ]);
  });
});
