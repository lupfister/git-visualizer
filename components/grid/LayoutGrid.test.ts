import { describe, expect, it } from 'vitest';
import type { Branch } from '../../types';
import { lanesFromStoredColumns } from './LayoutGrid';

const branch = (name: string, parentBranch?: string): Branch => ({
  name,
  parentBranch,
} as Branch);

describe('lanesFromStoredColumns', () => {
  it('rejects stored columns where a child does not follow its parent', () => {
    const branches = [branch('main'), branch('feature', 'main'), branch('nested', 'feature')];
    const parents = { main: null, feature: 'main', nested: 'feature' };

    expect(lanesFromStoredColumns(branches, 'main', parents, {
      main: 0,
      feature: 1,
      nested: 1,
    })).toBeNull();
  });
});
