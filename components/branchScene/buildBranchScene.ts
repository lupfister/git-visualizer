import type { Branch, BranchCommitPreview, DirectCommit, MergeNode } from '../../types';
import type { BranchSceneModel, SceneEdge, SceneHitRegion, SceneNode, ScenePoint } from './types';

const MAIN_LANE_X = 0;
const LANE_GAP = 260;
const ROW_GAP = 96;
const NODE_WIDTH = 198;
const NODE_HEIGHT = 58;
const HIT_PAD = 6;
const BOUNDS_PAD = 120;

type BuildBranchSceneArgs = {
  branches: Branch[];
  defaultBranch: string;
  directCommits: DirectCommit[];
  mergeNodes: MergeNode[];
  branchCommitPreviews: Record<string, BranchCommitPreview[]>;
  branchUniqueAheadCounts: Record<string, number>;
};

function toTimestamp(value: string | undefined | null): number | null {
  if (!value) return null;
  const ts = new Date(value).getTime();
  return Number.isFinite(ts) ? ts : null;
}

function shortSha(sha: string): string {
  return sha.length > 7 ? sha.slice(0, 7) : sha;
}

function sortByDateThenSha<T extends { date: string; fullSha: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const at = toTimestamp(a.date) ?? 0;
    const bt = toTimestamp(b.date) ?? 0;
    if (at !== bt) return at - bt;
    return a.fullSha.localeCompare(b.fullSha);
  });
}

function rowForTimestamp(sortedRows: number[], ts: number): number {
  if (sortedRows.length === 0) return 0;
  let lo = 0;
  let hi = sortedRows.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const value = sortedRows[mid];
    if (value === ts) return mid;
    if (value < ts) lo = mid + 1;
    else hi = mid - 1;
  }
  const nextIdx = Math.min(sortedRows.length - 1, Math.max(0, lo));
  const prevIdx = Math.min(sortedRows.length - 1, Math.max(0, lo - 1));
  const nextDelta = Math.abs((sortedRows[nextIdx] ?? ts) - ts);
  const prevDelta = Math.abs((sortedRows[prevIdx] ?? ts) - ts);
  return prevDelta <= nextDelta ? prevIdx : nextIdx;
}

function point(x: number, y: number): ScenePoint {
  return { x, y };
}

export function buildSceneSignature(args: BuildBranchSceneArgs): string {
  const branchKey = args.branches
    .map((branch) => [
      branch.name,
      branch.headSha,
      branch.lastCommitDate,
      branch.parentBranch ?? '',
      branch.commitsAhead,
    ].join(':'))
    .join('|');
  const directKey = args.directCommits.map((commit) => commit.fullSha).join('|');
  const mergeKey = args.mergeNodes.map((node) => `${node.fullSha}:${node.parentShas.join(',')}`).join('|');
  const previewsKey = Object.entries(args.branchCommitPreviews)
    .map(([branchName, previews]) => `${branchName}=${previews.map((commit) => commit.fullSha).join(',')}`)
    .join('|');
  const aheadKey = Object.entries(args.branchUniqueAheadCounts)
    .map(([branchName, count]) => `${branchName}:${count}`)
    .join('|');
  return [args.defaultBranch, branchKey, directKey, mergeKey, previewsKey, aheadKey].join('::');
}

export function buildBranchScene({
  branches,
  defaultBranch,
  directCommits,
  mergeNodes,
  branchCommitPreviews,
  branchUniqueAheadCounts,
}: BuildBranchSceneArgs): BranchSceneModel {
  const activeBranches = branches
    .filter((branch) => branch.name !== defaultBranch)
    .sort((a, b) => {
      const at = toTimestamp(a.lastCommitDate) ?? 0;
      const bt = toTimestamp(b.lastCommitDate) ?? 0;
      if (at !== bt) return bt - at;
      return a.name.localeCompare(b.name);
    });

  const laneByBranch = new Map<string, number>();
  laneByBranch.set(defaultBranch, 0);
  activeBranches.forEach((branch, index) => {
    laneByBranch.set(branch.name, index + 1);
  });

  const timelineTimestamps: number[] = [];
  sortByDateThenSha(directCommits).forEach((commit) => {
    const ts = toTimestamp(commit.date);
    if (ts != null) timelineTimestamps.push(ts);
  });
  activeBranches.forEach((branch) => {
    const previews = (branchCommitPreviews[branch.name] ?? []).filter(
      (commit) => commit.kind !== 'branch-created'
    );
    previews.forEach((commit) => {
      const ts = toTimestamp(commit.date);
      if (ts != null) timelineTimestamps.push(ts);
    });
    const branchTs = toTimestamp(branch.lastCommitDate);
    if (branchTs != null) timelineTimestamps.push(branchTs);
  });
  const uniqueSortedRows = Array.from(new Set(timelineTimestamps)).sort((a, b) => a - b);

  const nodes: SceneNode[] = [];
  const edges: SceneEdge[] = [];
  const hitRegions: SceneHitRegion[] = [];
  const nodeByCommitSha = new Map<string, SceneNode>();
  const branchNodeLists = new Map<string, SceneNode[]>();

  const registerNode = (node: SceneNode) => {
    nodes.push(node);
    nodeByCommitSha.set(node.commitSha, node);
    const list = branchNodeLists.get(node.branchName) ?? [];
    list.push(node);
    branchNodeLists.set(node.branchName, list);
    hitRegions.push({
      id: `hit:${node.id}`,
      type: 'node',
      nodeId: node.id,
      x: node.x - HIT_PAD,
      y: node.y - HIT_PAD,
      width: node.width + HIT_PAD * 2,
      height: node.height + HIT_PAD * 2,
    });
  };

  const sortedMain = sortByDateThenSha(directCommits);
  sortedMain.forEach((commit, index) => {
    const lane = laneByBranch.get(defaultBranch) ?? 0;
    const laneX = lane * LANE_GAP + MAIN_LANE_X;
    const row = rowForTimestamp(uniqueSortedRows, toTimestamp(commit.date) ?? 0);
    const y = row * ROW_GAP;
    const node: SceneNode = {
      id: `node:${defaultBranch}:${commit.fullSha}`,
      kind: 'main-commit',
      branchName: defaultBranch,
      commitSha: commit.fullSha,
      shortSha: shortSha(commit.sha),
      title: commit.message,
      subtitle: `@${commit.author}`,
      x: laneX,
      y,
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
      count: 1,
      isBranchHead: index === sortedMain.length - 1,
      isSynthetic: commit.kind === 'uncommitted' || commit.kind === 'stash' || commit.fullSha === 'WORKING_TREE',
      zIndex: 20,
    };
    registerNode(node);
  });

  const addPolylineEdge = (edge: SceneEdge) => {
    if (edge.points.length < 2) return;
    edges.push(edge);
  };

  const mainNodes = branchNodeLists.get(defaultBranch) ?? [];
  for (let index = 1; index < mainNodes.length; index += 1) {
    const a = mainNodes[index - 1];
    const b = mainNodes[index];
    addPolylineEdge({
      id: `edge:main:${index - 1}:${index}`,
      kind: 'main-lane',
      branchName: defaultBranch,
      points: [
        point(a.x + a.width / 2, a.y + a.height / 2),
        point(b.x + b.width / 2, b.y + b.height / 2),
      ],
    });
  }

  activeBranches.forEach((branch) => {
    const lane = laneByBranch.get(branch.name) ?? 1;
    const laneX = lane * LANE_GAP + MAIN_LANE_X;
    const aheadCount = Object.prototype.hasOwnProperty.call(branchUniqueAheadCounts, branch.name)
      ? Math.max(0, branchUniqueAheadCounts[branch.name] ?? 0)
      : Math.max(0, branch.commitsAhead);
    const previewsRaw = (branchCommitPreviews[branch.name] ?? []).filter(
      (commit) => commit.kind !== 'branch-created'
    );
    const previews = sortByDateThenSha(previewsRaw);

    if (previews.length > 0) {
      previews.forEach((commit, index) => {
        const row = rowForTimestamp(uniqueSortedRows, toTimestamp(commit.date) ?? 0);
        const y = row * ROW_GAP;
        registerNode({
          id: `node:${branch.name}:${commit.fullSha}`,
          kind: 'branch-commit',
          branchName: branch.name,
          commitSha: commit.fullSha,
          shortSha: shortSha(commit.sha),
          title: commit.message,
          subtitle: `@${commit.author}`,
          x: laneX,
          y,
          width: NODE_WIDTH,
          height: NODE_HEIGHT,
          count: 1,
          isBranchHead: index === previews.length - 1,
          isSynthetic: commit.kind === 'uncommitted' || commit.kind === 'stash' || commit.fullSha === 'WORKING_TREE',
          zIndex: 30,
        });
      });
    } else if (aheadCount > 0) {
      const row = rowForTimestamp(uniqueSortedRows, toTimestamp(branch.lastCommitDate) ?? 0);
      const y = row * ROW_GAP;
      registerNode({
        id: `node:${branch.name}:placeholder`,
        kind: 'branch-head-placeholder',
        branchName: branch.name,
        commitSha: branch.headSha || `${branch.name}:placeholder`,
        shortSha: shortSha(branch.headSha || branch.name),
        title: branch.name,
        subtitle: `${aheadCount} pending commit${aheadCount === 1 ? '' : 's'}`,
        x: laneX,
        y,
        width: NODE_WIDTH,
        height: NODE_HEIGHT,
        count: Math.max(1, aheadCount),
        isBranchHead: true,
        isSynthetic: true,
        zIndex: 25,
      });
    }

    const branchNodes = (branchNodeLists.get(branch.name) ?? []).sort((a, b) => a.y - b.y);
    for (let index = 1; index < branchNodes.length; index += 1) {
      const a = branchNodes[index - 1];
      const b = branchNodes[index];
      addPolylineEdge({
        id: `edge:branch:${branch.name}:${index - 1}:${index}`,
        kind: 'branch-lane',
        branchName: branch.name,
        points: [
          point(a.x + a.width / 2, a.y + a.height / 2),
          point(b.x + b.width / 2, b.y + b.height / 2),
        ],
      });
    }

    if (branchNodes.length > 0) {
      const first = branchNodes[0];
      const forkTs = toTimestamp(branch.divergedFromDate ?? branch.createdDate ?? branch.lastCommitDate) ??
        toTimestamp(branch.lastCommitDate) ??
        0;
      const forkRow = rowForTimestamp(uniqueSortedRows, forkTs);
      const forkY = forkRow * ROW_GAP + NODE_HEIGHT / 2;
      const parentName = branch.parentBranch && laneByBranch.has(branch.parentBranch)
        ? branch.parentBranch
        : defaultBranch;
      const parentLane = laneByBranch.get(parentName) ?? 0;
      const parentX = parentLane * LANE_GAP + MAIN_LANE_X + NODE_WIDTH / 2;
      const branchCenterX = first.x + first.width / 2;
      const firstY = first.y + first.height / 2;
      addPolylineEdge({
        id: `edge:fork:${branch.name}`,
        kind: 'branch-fork',
        branchName: branch.name,
        points: [
          point(parentX, forkY),
          point(branchCenterX, forkY),
          point(branchCenterX, firstY),
        ],
      });
    }
  });

  const findSourceBranchForMerge = (node: MergeNode): string | null => {
    const mergedParentCandidates = node.parentShas.slice(1);
    if (mergedParentCandidates.length === 0) return null;
    for (const branch of activeBranches) {
      if (mergedParentCandidates.some((sha) => sha === branch.headSha || branch.headSha.startsWith(sha) || sha.startsWith(branch.headSha))) {
        return branch.name;
      }
      const previews = branchCommitPreviews[branch.name] ?? [];
      if (previews.some((commit) =>
        mergedParentCandidates.some((sha) => sha === commit.fullSha || commit.fullSha.startsWith(sha) || sha.startsWith(commit.fullSha))
      )) {
        return branch.name;
      }
    }
    return null;
  };

  mergeNodes.forEach((mergeNode) => {
    const targetMainNode =
      nodeByCommitSha.get(mergeNode.fullSha) ??
      mainNodes.find((node) =>
        node.commitSha === mergeNode.fullSha ||
        node.commitSha.startsWith(mergeNode.fullSha) ||
        mergeNode.fullSha.startsWith(node.commitSha)
      );
    if (!targetMainNode) return;
    const sourceBranch = findSourceBranchForMerge(mergeNode);
    if (!sourceBranch) return;
    const sourceNodes = (branchNodeLists.get(sourceBranch) ?? []).sort((a, b) => b.y - a.y);
    const source = sourceNodes[0];
    if (!source) return;
    const sx = source.x + source.width / 2;
    const sy = source.y + source.height / 2;
    const tx = targetMainNode.x + targetMainNode.width / 2;
    const ty = targetMainNode.y + targetMainNode.height / 2;
    addPolylineEdge({
      id: `edge:merge:${sourceBranch}:${mergeNode.fullSha}`,
      kind: 'branch-merge',
      branchName: sourceBranch,
      points: [point(sx, sy), point(sx, ty), point(tx, ty)],
    });
  });

  let minX = Number.POSITIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;
  const include = (x: number, y: number) => {
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  };
  nodes.forEach((node) => {
    include(node.x, node.y);
    include(node.x + node.width, node.y + node.height);
  });
  edges.forEach((edge) => {
    edge.points.forEach((pt) => include(pt.x, pt.y));
  });
  if (!Number.isFinite(minX) || !Number.isFinite(minY) || !Number.isFinite(maxX) || !Number.isFinite(maxY)) {
    minX = 0;
    minY = 0;
    maxX = NODE_WIDTH;
    maxY = NODE_HEIGHT;
  }
  minX -= BOUNDS_PAD;
  minY -= BOUNDS_PAD;
  maxX += BOUNDS_PAD;
  maxY += BOUNDS_PAD;

  return {
    nodes,
    edges,
    hitRegions,
    bounds: {
      minX,
      minY,
      maxX,
      maxY,
      width: Math.max(1, maxX - minX),
      height: Math.max(1, maxY - minY),
    },
    rows: uniqueSortedRows.length,
    lanes: 1 + activeBranches.length,
  };
}
