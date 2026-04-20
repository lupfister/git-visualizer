import type React from 'react';
import { isRectVisible } from '../core/MapSvg.utils';

type MapSvgBranchNodeOverlayLayerProps = {
  orderedActiveBranchesForLayer: (options: { includeSelectedPriority: boolean }) => any[];
  getBranchRenderLayout: (branch: any) => any;
  focusedErrorBranch?: { name?: string } | null;
  unpushedLaneStrokeVisualComp: number;
  resolveBranchClusterEntries: (cluster: any) => { realCommitEntries: any[]; renderEntries: any[] };
  branchClusterKey: (branchName: string, cluster: any) => string;
  branchClusterMemberKeys: (branchName: string, cluster: any) => string[];
  branchPreferredAnchorEntry: (
    cluster: any,
    realCommitEntries: any[],
    branchEndDotIndex: number | null,
  ) => { x: number; y: number };
  resolveAnimatedClumpAnchor: (
    clusterKey: string,
    target: { x: number; y: number },
    memberKeys: readonly string[],
  ) => { x: number; y: number };
  canvasUnpushedNodeFill: string;
  canvasNodeFill: string;
  canvasNodeStrokeWidth: number;
  checkedOutHeadSha: string | null;
  checkedOutBranchName: string | null;
  shaMatchesGitRef: (a?: string, b?: string) => boolean;
  otherWorktreeMatchesBranchCommit: (
    branchName: string,
    commitFullSha: string,
    commitSha: string,
  ) => boolean;
  selectedCommitShaSet: Set<string>;
  selectedBranchNameSet: Set<string>;
  isStashCommitLike: (commit: any) => boolean;
  isCommitUnpushed: (fullSha: string, sha?: string) => boolean;
  commitRectSize: (size: number, inset?: number) => { width: number; height: number };
  scaledNodeSize: number;
  renderCommitNodeShapeRect: (args: {
    x: number;
    y: number;
    width: number;
    height: number;
    fill: string;
    stroke: string;
    strokeWidth: number;
    dashed?: boolean;
  }) => React.ReactNode;
  getNodeFillColor: (
    nodeKey: string,
    baseFill?: string,
    checkoutAccent?: any,
    isUserSelected?: boolean,
    accentOutlineOnly?: boolean,
  ) => string;
  getNodeStrokeColor: (
    nodeKey: string,
    baseStroke?: string,
    checkoutAccent?: any,
    isUserSelected?: boolean,
    accentOutlineOnly?: boolean,
  ) => string;
  localUnpushedGray: string;
  renderCommitNodeRect: (args: any) => React.ReactNode;
  fmtTooltipDate: (dateStr: string) => string;
  stashOrUncommittedBaseStroke: (isStash: boolean, isUncommitted: boolean) => string;
  expandedClumps: Map<string, any>;
  resolveClumpPhase: (expandedState?: any) => {
    isExpanded: boolean;
    phase: 'collapsed' | 'expanding' | 'expanded' | 'collapsing';
    phaseEased: number;
  };
  nodeRectSize: (count: number) => { width: number; height: number };
  clusterLocalSyntheticStroke: (clusterHasUncommitted: boolean, clusterHasStash: boolean) => string;
  fmtClumpDateRange: (firstDate: string, lastDate: string) => string;
  mergeCheckoutAccent: (
    isPrimaryCheckout: boolean,
    branchName: string,
    fullSha: string,
    shortSha: string,
  ) => any;
  interpolateExpandedEntryPose: (
    anchor: { x: number; y: number },
    entry: { x: number; y: number },
    phase: 'collapsed' | 'expanding' | 'expanded' | 'collapsing',
    phaseEased: number,
  ) => { x: number; y: number; opacity: number; scale: number };
  clumpAnimStyleForPhase: (phase: 'collapsed' | 'expanding' | 'expanded' | 'collapsing') => any;
  visibleWorldBounds: { minX: number; maxX: number; minY: number; maxY: number } | null;
};

export function MapSvgBranchNodeOverlayLayer({
  orderedActiveBranchesForLayer,
  getBranchRenderLayout,
  focusedErrorBranch,
  unpushedLaneStrokeVisualComp,
  resolveBranchClusterEntries,
  branchClusterKey,
  branchClusterMemberKeys,
  branchPreferredAnchorEntry,
  resolveAnimatedClumpAnchor,
  canvasUnpushedNodeFill,
  canvasNodeFill,
  canvasNodeStrokeWidth,
  checkedOutHeadSha,
  checkedOutBranchName,
  shaMatchesGitRef,
  otherWorktreeMatchesBranchCommit,
  selectedCommitShaSet,
  selectedBranchNameSet,
  isStashCommitLike,
  isCommitUnpushed,
  commitRectSize,
  scaledNodeSize,
  renderCommitNodeShapeRect,
  getNodeFillColor,
  getNodeStrokeColor,
  localUnpushedGray,
  renderCommitNodeRect,
  fmtTooltipDate,
  stashOrUncommittedBaseStroke,
  expandedClumps,
  resolveClumpPhase,
  nodeRectSize,
  clusterLocalSyntheticStroke,
  fmtClumpDateRange,
  mergeCheckoutAccent,
  interpolateExpandedEntryPose,
  clumpAnimStyleForPhase,
  visibleWorldBounds,
}: MapSvgBranchNodeOverlayLayerProps) {
  const orderedActiveBranches = orderedActiveBranchesForLayer({
    includeSelectedPriority: false,
  });

  return (
    <g data-map-layer="overlay" style={{ pointerEvents: 'none' }}>
      {orderedActiveBranches.flatMap((b) => {
        const {
          uniqueAheadCount,
          branchEndDotIndex,
          localCommitDotIndices,
          fullBranchShouldUseLocalGray,
          commitDotClusters,
        } = getBranchRenderLayout(b);
        const isFocusedError = focusedErrorBranch?.name === b.name;
        const strokeWidth = isFocusedError ? 1 : 0.75;
        const unpushedStrokeWidth = strokeWidth + unpushedLaneStrokeVisualComp;

        return commitDotClusters.map((cluster: any) => {
          const { realCommitEntries, renderEntries } = resolveBranchClusterEntries(cluster);
          const count = renderEntries.length;
          const clusterKey = branchClusterKey(b.name, cluster);
          const memberKeys = branchClusterMemberKeys(b.name, cluster);
          const preferredAnchorEntry = branchPreferredAnchorEntry(
            cluster,
            realCommitEntries,
            branchEndDotIndex,
          );
          const animatedAnchor = resolveAnimatedClumpAnchor(
            clusterKey,
            { x: preferredAnchorEntry.x, y: preferredAnchorEntry.y },
            memberKeys,
          );
          const anchorX = animatedAnchor.x;
          const anchorY = animatedAnchor.y;
          const dotShouldUseCanvasFill =
            fullBranchShouldUseLocalGray ||
            cluster.entries.every((entry: any) => localCommitDotIndices.has(entry.item.index));
          const dotFill = dotShouldUseCanvasFill ? canvasUnpushedNodeFill : canvasNodeFill;
          const dotStrokeWidth = canvasNodeStrokeWidth;
          const dotStrokeInset = dotStrokeWidth / 2;
          const clusterHasPrimaryCheckoutHead =
            checkedOutHeadSha != null &&
            cluster.entries.some((entry: any) => {
              const idx = entry.item.index;
              const commit = entry.item.commit;
              if (commit && commit.kind !== 'branch-created') {
                return (
                  shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                  shaMatchesGitRef(commit.sha, checkedOutHeadSha)
                );
              }
              if (checkedOutBranchName === b.name && branchEndDotIndex === idx) {
                return shaMatchesGitRef(b.headSha, checkedOutHeadSha);
              }
              return false;
            });
          const clusterHasOtherWorktreeHead = cluster.entries.some((entry: any) => {
            const idx = entry.item.index;
            const commit = entry.item.commit;
            if (commit && commit.kind !== 'branch-created') {
              return otherWorktreeMatchesBranchCommit(b.name, commit.fullSha, commit.sha ?? '');
            }
            if (branchEndDotIndex === idx) {
              return otherWorktreeMatchesBranchCommit(
                b.name,
                b.headSha,
                b.headSha.slice(0, 7),
              );
            }
            return false;
          });
          const clusterCheckoutAccent = clusterHasPrimaryCheckoutHead
            ? 'primary'
            : clusterHasOtherWorktreeHead
              ? 'other'
              : 'none';
          const clusterHasSelectedCommit =
            cluster.entries.some((entry: any) => {
              const commitSha = entry.item.commit?.fullSha;
              return !!commitSha && selectedCommitShaSet.has(commitSha);
            });
          const clusterHasSelectedHead =
            branchEndDotIndex != null &&
            cluster.entries.some((entry: any) => entry.item.index === branchEndDotIndex) &&
            selectedBranchNameSet.has(b.name);

          if (count <= 1) {
            const commitEntry = renderEntries[0] ?? cluster.entries[cluster.entries.length - 1];
            const commit = commitEntry.item.commit;
            const isNonCommitPlaceholder = !commit && uniqueAheadCount <= 0;
            const isUncommittedCommit = commit?.kind === 'uncommitted';
            const isStashCommit = commit ? isStashCommitLike(commit) : false;
            const isLocalCommit =
              !isNonCommitPlaceholder && localCommitDotIndices.has(commitEntry.item.index);
            const isUnpushedCommit =
              !!commit &&
              !isUncommittedCommit &&
              !isStashCommit &&
              isCommitUnpushed(commit.fullSha, commit.sha);
            const rectSize = commitRectSize(scaledNodeSize);
            if (!isRectVisible(visibleWorldBounds, {
              x: anchorX - rectSize.width / 2,
              y: anchorY - rectSize.height / 2,
              width: rectSize.width,
              height: rectSize.height,
            })) {
              return null;
            }
            const isGhostRect = isNonCommitPlaceholder;
            const ghostRectStrokeWidth = unpushedStrokeWidth;

            return (
              <g
                key={`branch-overlay-${clusterKey}`}
                {...((isUncommittedCommit || isStashCommit) ? { 'data-drag-id': commit?.fullSha } : {})}
              >
                {isGhostRect ? (
                  renderCommitNodeShapeRect({
                    x: anchorX - rectSize.width / 2 + dotStrokeInset,
                    y: anchorY - rectSize.height / 2 + dotStrokeInset,
                    width: rectSize.width - dotStrokeWidth,
                    height: rectSize.height - dotStrokeWidth,
                    fill: getNodeFillColor(
                      clusterKey,
                      dotFill,
                      clusterCheckoutAccent,
                      clusterHasSelectedCommit || clusterHasSelectedHead,
                      true,
                    ),
                    stroke: getNodeStrokeColor(
                      clusterKey,
                      localUnpushedGray,
                      clusterCheckoutAccent,
                      clusterHasSelectedCommit || clusterHasSelectedHead,
                      true,
                    ),
                    strokeWidth: ghostRectStrokeWidth,
                    dashed: true,
                  })
                ) : renderCommitNodeRect({
                  nodeKey: clusterKey,
                  centerX: anchorX,
                  centerY: anchorY,
                  rectSize,
                  innerText: isUncommittedCommit || isStashCommit ? undefined : commit?.message,
                  footerMetaAuthor: `@${commit?.author ?? b.lastCommitAuthor}`,
                  footerMetaDate: fmtTooltipDate(commit?.date ?? b.lastCommitDate),
                  fill: isStashCommit || isUncommittedCommit || isLocalCommit || isUnpushedCommit
                    ? canvasUnpushedNodeFill
                    : dotFill,
                  baseStroke: stashOrUncommittedBaseStroke(isStashCommit, !!isUncommittedCommit),
                  checkoutAccent: clusterCheckoutAccent,
                  isUserSelected: clusterHasSelectedCommit || clusterHasSelectedHead,
                  strokeWidth: dotStrokeWidth,
                  strokeInset: dotStrokeInset,
                  dashed: !!(isUncommittedCommit || isStashCommit),
                  isUncommitted: !!isUncommittedCommit,
                  isStash: isStashCommit,
                })}
              </g>
            );
          }

          const canExpandCluster = renderEntries.length > 1;
          const clusterHasUncommitted = renderEntries.some(
            (entry: any) =>
              entry.item.commit?.kind === 'uncommitted' ||
              entry.item.commit?.fullSha === 'WORKING_TREE',
          );
          const clusterHasStash = renderEntries.some(
            (entry: any) => !!entry.item.commit && isStashCommitLike(entry.item.commit),
          );
          const clusterHasLocalCommits = renderEntries.some((entry: any) =>
            localCommitDotIndices.has(entry.item.index),
          );
          const clusterHasUnpushedCommits = renderEntries.some((entry: any) => {
            const c = entry.item.commit;
            if (!c || c.kind === 'uncommitted' || c.fullSha === 'WORKING_TREE') return false;
            if (isStashCommitLike(c)) return false;
            return isCommitUnpushed(c.fullSha, c.sha);
          });
          const expanded = canExpandCluster ? expandedClumps.get(clusterKey) : undefined;
          const { isExpanded, phase, phaseEased } = canExpandCluster
            ? resolveClumpPhase(expanded)
            : { isExpanded: false, phase: 'collapsed' as const, phaseEased: 0 };

          if (!isExpanded) {
            const rectSize = nodeRectSize(count);
            return (
              <g key={`branch-overlay-${clusterKey}`}>
                {renderCommitNodeRect({
                  nodeKey: clusterKey,
                  centerX: anchorX,
                  centerY: anchorY,
                  rectSize,
                  innerText: (() => {
                    const last = renderEntries[renderEntries.length - 1]?.item.commit;
                    if (!last) return undefined;
                    if (
                      last.kind === 'uncommitted' ||
                      last.fullSha === 'WORKING_TREE' ||
                      isStashCommitLike(last)
                    ) {
                      return undefined;
                    }
                    return last.message;
                  })(),
                  footerMetaAuthor: (() => {
                    const latestAuthor =
                      renderEntries[renderEntries.length - 1]?.item.commit?.author ?? b.lastCommitAuthor;
                    return `@${latestAuthor}`;
                  })(),
                  footerMetaDate: (() => {
                    const firstDate = renderEntries[0]?.item.commit?.date ?? b.lastCommitDate;
                    const lastDate = renderEntries[renderEntries.length - 1]?.item.commit?.date ?? b.lastCommitDate;
                    return fmtClumpDateRange(firstDate, lastDate);
                  })(),
                  fill: clusterHasStash || clusterHasUncommitted || clusterHasLocalCommits || clusterHasUnpushedCommits
                    ? canvasUnpushedNodeFill
                    : dotFill,
                  baseStroke: clusterLocalSyntheticStroke(clusterHasUncommitted, clusterHasStash),
                  checkoutAccent: clusterCheckoutAccent,
                  isUserSelected: clusterHasSelectedCommit || clusterHasSelectedHead,
                  strokeWidth: dotStrokeWidth,
                  strokeInset: dotStrokeInset,
                  dashed: clusterHasUncommitted || clusterHasStash,
                  isUncommitted: clusterHasUncommitted,
                  isStash: clusterHasStash,
                })}
              </g>
            );
          }

          const localRect = commitRectSize(scaledNodeSize, 0);
          if (!isRectVisible(visibleWorldBounds, {
            x: anchorX - localRect.width / 2,
            y: anchorY - localRect.height / 2,
            width: localRect.width,
            height: localRect.height,
          })) {
            return null;
          }

          return (
            <g key={`branch-overlay-${clusterKey}`}>
              {renderEntries.map((entry: any) => {
                const commit = entry.item.commit;
                if (!commit?.fullSha) return null;
                if (!isRectVisible(visibleWorldBounds, {
                  x: entry.x - localRect.width / 2,
                  y: entry.y - localRect.height / 2,
                  width: localRect.width,
                  height: localRect.height,
                })) return null;
                const commitCheckoutAccent = mergeCheckoutAccent(
                  checkedOutHeadSha != null &&
                    (shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                      shaMatchesGitRef(commit.sha, checkedOutHeadSha)),
                  b.name,
                  commit.fullSha,
                  commit.sha,
                );

                const memberPose = interpolateExpandedEntryPose(
                  { x: anchorX, y: anchorY },
                  { x: entry.x, y: entry.y },
                  phase,
                  phaseEased,
                );
                const commitKey = `branch-commit:${b.name}:${commit.fullSha}`;
                const isUncommittedCommit = commit.kind === 'uncommitted';
                const isStashCommit = isStashCommitLike(commit);
                const isLocalCommit = localCommitDotIndices.has(entry.item.index);
                const isUnpushedCommit =
                  !isUncommittedCommit &&
                  !isStashCommit &&
                  isCommitUnpushed(commit.fullSha, commit.sha);

                return (
                  <g
                    key={`branch-overlay-${commitKey}`}
                    transform={`translate(${memberPose.x} ${memberPose.y})`}
                    style={clumpAnimStyleForPhase(phase)}
                    opacity={memberPose.opacity}
                  >
                    <g transform={`scale(${memberPose.scale})`}>
                      {renderCommitNodeRect({
                        nodeKey: commitKey,
                        centerX: 0,
                        centerY: 0,
                        rectSize: localRect,
                        innerText:
                          isUncommittedCommit || isStashCommit ? undefined : commit.message,
                        footerMetaAuthor: `@${commit.author ?? b.lastCommitAuthor}`,
                        footerMetaDate: fmtTooltipDate(commit.date ?? b.lastCommitDate),
                        fill: isStashCommit || isUncommittedCommit || isLocalCommit || isUnpushedCommit
                          ? canvasUnpushedNodeFill
                          : dotFill,
                        baseStroke: stashOrUncommittedBaseStroke(isStashCommit, isUncommittedCommit),
                        checkoutAccent: commitCheckoutAccent,
                        isUserSelected:
                          selectedCommitShaSet.has(commit.fullSha) ||
                          (clusterHasSelectedHead && commit.fullSha === b.headSha),
                        strokeWidth: dotStrokeWidth,
                        strokeInset: dotStrokeInset,
                        dashed: isUncommittedCommit || isStashCommit,
                        isUncommitted: isUncommittedCommit,
                        isStash: isStashCommit,
                      })}
                    </g>
                  </g>
                );
              })}
            </g>
          );
        });
      })}
    </g>
  );
}
