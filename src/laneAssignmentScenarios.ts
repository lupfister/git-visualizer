import { buildLanes } from '../components/grid/LayoutGrid';
import type { Branch, BranchCommitPreview } from '../types';

function assertEqual(actual: unknown, expected: unknown, message: string): void {
  if (actual !== expected) throw new Error(`${message}: expected ${String(expected)}, got ${String(actual)}`);
}

function laneMap(lanes: Array<{ name: string; column: number }>): Record<string, number> {
  return Object.fromEntries(lanes.map((lane) => [lane.name, lane.column]));
}

function makeBranch(name: string, parentBranch: string | undefined, start: string, end: string): Branch {
  return {
    name,
    parentBranch,
    commitsAhead: 1,
    commitsBehind: 0,
    createdDate: start,
    divergedFromDate: start,
    lastCommitDate: end,
    lastCommitAuthor: 'tester',
    status: 'fresh',
    remoteSyncStatus: 'on-github',
    unpushedCommits: 0,
    headSha: `${name}-head`,
  };
}

function makeCommit(
  fullSha: string,
  parentSha: string | null,
  date: string,
  kind: BranchCommitPreview['kind'] = 'commit',
): BranchCommitPreview {
  return {
    fullSha,
    sha: fullSha.slice(0, 7),
    parentSha,
    parentShas: parentSha ? [parentSha] : [],
    childShas: [],
    message: fullSha,
    author: 'tester',
    date,
    kind,
  };
}

function runLaneAssignmentScenarios(): void {
  const defaultBranch = 'main';
  const branches: Branch[] = [
    makeBranch('main', undefined, '2024-01-01T00:00:00Z', '2024-01-10T00:00:00Z'),
    makeBranch('A', 'main', '2024-01-02T00:00:00Z', '2024-01-03T00:00:00Z'),
    makeBranch('B', 'A', '2024-01-03T06:00:00Z', '2024-01-04T00:00:00Z'),
    makeBranch('C', 'B', '2024-01-04T06:00:00Z', '2024-01-05T00:00:00Z'),
    makeBranch('D', 'main', '2024-02-01T00:00:00Z', '2024-02-02T00:00:00Z'),
  ];
  const previews: Record<string, BranchCommitPreview[]> = {
    A: [makeCommit('A1', 'm1', '2024-01-02T01:00:00Z')],
    B: [makeCommit('B1', 'A1', '2024-01-03T08:00:00Z')],
    C: [makeCommit('C1', 'B1', '2024-01-04T08:00:00Z')],
    D: [makeCommit('D1', 'm2', '2024-02-01T01:00:00Z')],
  };
  const lanes = laneMap(buildLanes(branches, defaultBranch, previews));
  assertEqual(lanes.main, 0, 'main lane');
  assertEqual(lanes.A, 1, 'A lane');
  assertEqual(lanes.B, 2, 'B lane');
  assertEqual(lanes.C, 3, 'C lane');
  assertEqual(lanes.D, 4, 'D lane');

  const siblingOnlyBranches: Branch[] = [
    makeBranch('main', undefined, '2024-01-01T00:00:00Z', '2024-01-10T00:00:00Z'),
    makeBranch('A', 'main', '2024-01-02T00:00:00Z', '2024-01-03T00:00:00Z'),
    makeBranch('D', 'main', '2024-02-01T00:00:00Z', '2024-02-02T00:00:00Z'),
  ];
  const siblingLanes = laneMap(buildLanes(siblingOnlyBranches, defaultBranch, previews));
  assertEqual(siblingLanes.A, 1, 'sibling A lane');
  assertEqual(siblingLanes.D, 2, 'sibling D lane');

  const mixedRoots: Branch[] = [
    ...branches,
    makeBranch('X', undefined, '2024-02-03T00:00:00Z', '2024-02-04T00:00:00Z'),
  ];
  const mixedLanes = laneMap(buildLanes(mixedRoots, defaultBranch, previews));
  assertEqual(typeof mixedLanes.X, 'number', 'detached root branch receives lane');

  const cyclicBranches: Branch[] = [
    makeBranch('main', undefined, '2024-01-01T00:00:00Z', '2024-01-10T00:00:00Z'),
    makeBranch('E', 'F', '2024-01-02T00:00:00Z', '2024-01-03T00:00:00Z'),
    makeBranch('F', 'E', '2024-01-02T00:00:00Z', '2024-01-03T00:00:00Z'),
  ];
  const cyclicLanes = buildLanes(cyclicBranches, defaultBranch, {});
  assertEqual(cyclicLanes.length, 3, 'cyclic parent metadata should not crash');
}

runLaneAssignmentScenarios();
