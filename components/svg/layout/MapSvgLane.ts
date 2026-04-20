import { commitRectSize } from './LayoutSvg';
import type { Branch } from '../../../types';
import type {
  AnchorPoint,
  BranchRenderLayout,
  CommitEntryItem,
  LaneAnchor,
  LaneSegment,
  MarkerCluster,
  MarkerEntry,
} from '../core/MapSvg.types';
import { buildBranchClusterViewModel, branchClusterKey, branchClusterMemberKeys, branchPreferredAnchorEntry, resolveBranchClusterEntries, shaMatchesGitRef } from '../core/MapSvg.utils';

export function dedupeLaneAnchors(anchors: LaneAnchor[]): LaneAnchor[] {
  return anchors.filter((anchor, index) => {
    const previous = anchors[index - 1];
    if (!previous) return true;
    return Math.abs(previous.x - anchor.x) > 0.5 || Math.abs(previous.y - anchor.y) > 0.5;
  });
}

export function buildLaneSegments(anchors: LaneAnchor[]): LaneSegment[] {
  const deduped = dedupeLaneAnchors(anchors);
  const segments: LaneSegment[] = [];
  for (let index = 1; index < deduped.length; index += 1) {
    segments.push({ start: deduped[index - 1], end: deduped[index] });
  }
  return segments;
}

export function trimLaneSegment(segment: LaneSegment): { start: { x: number; y: number }; end: { x: number; y: number } } | null {
  const dx = segment.end.x - segment.start.x;
  const dy = segment.end.y - segment.start.y;
  const distance = Math.hypot(dx, dy);
  if (!Number.isFinite(distance) || distance < 0.5) return null;
  const ux = dx / distance;
  const uy = dy / distance;
  const trimStart = Math.min(segment.start.trimRadius, Math.max(0, distance / 2 - 0.25));
  const trimEnd = Math.min(segment.end.trimRadius, Math.max(0, distance / 2 - 0.25));
  return {
    start: {
      x: segment.start.x + ux * trimStart,
      y: segment.start.y + uy * trimStart,
    },
    end: {
      x: segment.end.x - ux * trimEnd,
      y: segment.end.y - uy * trimEnd,
    },
  };
}

type ClusterMotionResolver = (
  clusterKey: string,
  defaultAnchor: { x: number; y: number },
  memberKeys: string[],
  canExpandCluster?: boolean,
) => {
  anchorX: number;
  anchorY: number;
  isExpanded: boolean;
  phase: 'collapsed' | 'expanding' | 'expanded' | 'collapsing';
  phaseEased: number;
};

type EntryPoseInterpolator = (
  anchor: { x: number; y: number },
  entry: { x: number; y: number },
  phase: 'collapsed' | 'expanding' | 'expanded' | 'collapsing',
  phaseEased: number,
) => { x: number; y: number; opacity: number; scale: number };

export function buildMainLaneAnchors(args: {
  mainDirectClusters: Array<{
    clusterKey: string;
    preferredAnchorX: number;
    preferredAnchorY: number;
    memberKeys: string[];
    count: number;
  }>;
  resolveClusterMotion: ClusterMotionResolver;
  unprojectPoint: (x: number, y: number) => { x: number; y: number };
  scaledNodeSize: number;
}): LaneAnchor[] {
  const { mainDirectClusters, resolveClusterMotion, unprojectPoint, scaledNodeSize } = args;
  return dedupeLaneAnchors(
    mainDirectClusters.map((clusterLayout) => {
      const motion = resolveClusterMotion(
        clusterLayout.clusterKey,
        { x: clusterLayout.preferredAnchorX, y: clusterLayout.preferredAnchorY },
        clusterLayout.memberKeys,
        clusterLayout.count > 1,
      );
      const anchor = unprojectPoint(motion.anchorX, motion.anchorY);
      const rectSize = commitRectSize(scaledNodeSize, 0);
      return {
        x: anchor.x,
        y: anchor.y,
        trimRadius: rectSize.height / 2,
        key: clusterLayout.clusterKey,
      };
    })
  );
}

export function buildBranchLaneAnchors(args: {
  branch: Branch;
  layout: BranchRenderLayout;
  resolveClusterMotion: ClusterMotionResolver;
  interpolateExpandedEntryPose: EntryPoseInterpolator;
  unprojectPoint: (x: number, y: number) => { x: number; y: number };
  baseLaneTrimRadius: number;
  scaledNodeSize: number;
}): LaneAnchor[] {
  const {
    branch,
    layout,
    resolveClusterMotion,
    interpolateExpandedEntryPose,
    unprojectPoint,
    baseLaneTrimRadius,
    scaledNodeSize,
  } = args;

  const anchors: LaneAnchor[] = [];
  for (const cluster of layout.commitDotClusters) {
    const { realCommitEntries, renderEntries } = resolveBranchClusterEntries(cluster);
    const count = renderEntries.length;
    if (count <= 0) continue;
    const clusterKey = branchClusterKey(branch.name, cluster);
    const memberKeys = branchClusterMemberKeys(branch.name, cluster);
    const preferredAnchorEntry = branchPreferredAnchorEntry(
      cluster,
      realCommitEntries,
      layout.branchEndDotIndex,
    );
    const motion = resolveClusterMotion(
      clusterKey,
      { x: preferredAnchorEntry.x, y: preferredAnchorEntry.y },
      memberKeys,
      count > 1,
    );
    if (!motion.isExpanded || count <= 1 || motion.phase === 'collapsed') {
      const collapsedCanonical = unprojectPoint(motion.anchorX, motion.anchorY);
      const rectSize = commitRectSize(scaledNodeSize, 0);
      anchors.push({
        x: collapsedCanonical.x,
        y: collapsedCanonical.y,
        trimRadius: rectSize.height / 2,
        key: clusterKey,
      });
      continue;
    }
    renderEntries.forEach((entry) => {
      const memberPose = interpolateExpandedEntryPose(
        { x: motion.anchorX, y: motion.anchorY },
        { x: entry.x, y: entry.y },
        motion.phase,
        motion.phaseEased,
      );
      const memberCanonical = unprojectPoint(memberPose.x, memberPose.y);
      anchors.push({
        x: memberCanonical.x,
        y: memberCanonical.y,
        trimRadius: baseLaneTrimRadius,
        key: `${clusterKey}:${entry.item.index}`,
      });
    });
  }
  return dedupeLaneAnchors(anchors);
}

export function resolveBranchHeadProjectedPoint(args: {
  branch: Branch;
  layout: BranchRenderLayout;
  renderedBranchAnchorByBranchAndSha: Map<string, AnchorPoint>;
  projectPoint: (x: number, y: number) => { x: number; y: number };
  resolveClusterMotion: ClusterMotionResolver;
  interpolateExpandedEntryPose: EntryPoseInterpolator;
}): { x: number; y: number } {
  const {
    branch,
    layout,
    renderedBranchAnchorByBranchAndSha,
    projectPoint,
    resolveClusterMotion,
    interpolateExpandedEntryPose,
  } = args;

  let renderedHeadAnchor = renderedBranchAnchorByBranchAndSha.get(`${branch.name}\0${branch.headSha}`);
  if (!renderedHeadAnchor) {
    for (const [key, anchor] of renderedBranchAnchorByBranchAndSha.entries()) {
      const sep = key.indexOf('\0');
      if (sep < 0) continue;
      const keyBranch = key.slice(0, sep);
      const keySha = key.slice(sep + 1);
      if (keyBranch === branch.name && shaMatchesGitRef(keySha, branch.headSha)) {
        renderedHeadAnchor = anchor;
        break;
      }
    }
  }
  if (renderedHeadAnchor) {
    return projectPoint(renderedHeadAnchor.x, renderedHeadAnchor.y);
  }

  const resolveEntryPose = (
    cluster: MarkerCluster<CommitEntryItem>,
    entry: MarkerEntry<CommitEntryItem>,
  ): { x: number; y: number } => {
    const vm = buildBranchClusterViewModel(branch.name, cluster, layout.branchEndDotIndex);
    const motion = resolveClusterMotion(
      vm.clusterKey,
      { x: vm.preferredAnchorEntry.x, y: vm.preferredAnchorEntry.y },
      vm.memberKeys,
      vm.canExpandCluster,
    );
    if (!motion.isExpanded || vm.count <= 1 || motion.phase === 'collapsed') {
      return { x: motion.anchorX, y: motion.anchorY };
    }
    const memberPose = interpolateExpandedEntryPose(
      { x: motion.anchorX, y: motion.anchorY },
      { x: entry.x, y: entry.y },
      motion.phase,
      motion.phaseEased,
    );
    return { x: memberPose.x, y: memberPose.y };
  };

  for (const cluster of layout.commitDotClusters) {
    const shaEntry = cluster.entries.find((entry) =>
      shaMatchesGitRef(entry.item.commit?.fullSha, branch.headSha) ||
      shaMatchesGitRef(entry.item.commit?.sha, branch.headSha)
    );
    if (shaEntry) return resolveEntryPose(cluster, shaEntry);
  }

  if (layout.branchEndDotIndex != null) {
    for (const cluster of layout.commitDotClusters) {
      const indexEntry = cluster.entries.find(
        (entry) => entry.item.index === layout.branchEndDotIndex
      );
      if (!indexEntry) continue;
      return resolveEntryPose(cluster, indexEntry);
    }
  }

  let fallbackCluster: MarkerCluster<CommitEntryItem> | null = null;
  let fallbackEntry: MarkerEntry<CommitEntryItem> | null = null;
  for (const cluster of layout.commitDotClusters) {
    for (const entry of cluster.entries) {
      if (!fallbackEntry || entry.item.index > fallbackEntry.item.index) {
        fallbackEntry = entry;
        fallbackCluster = cluster;
      }
    }
  }
  if (fallbackCluster && fallbackEntry) {
    return resolveEntryPose(fallbackCluster, fallbackEntry);
  }
  return projectPoint(layout.lanePosX, layout.branchLineTipY);
}
