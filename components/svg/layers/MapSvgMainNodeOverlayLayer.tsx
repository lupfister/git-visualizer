import { isRectVisible } from '../core/MapSvg.utils';

type MapSvgMainNodeOverlayLayerProps = {
  mainIsUnifiedRender: boolean;
  mainTimelineOpacity: number;
  mainDirectClusters: any[];
  resolveClusterMotion: (
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
  interpolateExpandedEntryPose: (
    anchor: { x: number; y: number },
    entry: { x: number; y: number },
    phase: 'collapsed' | 'expanding' | 'expanded' | 'collapsing',
    phaseEased: number,
  ) => { x: number; y: number; opacity: number; scale: number };
  clumpAnimStyleForPhase: (phase: 'collapsed' | 'expanding' | 'expanded' | 'collapsing') => any;
  isStashCommitLike: (commit: any) => boolean;
  isCommitUnpushed: (fullSha: string, sha?: string) => boolean;
  commitRectSize: (size: number, inset?: number) => { width: number; height: number };
  nodeRectSize: (count: number) => { width: number; height: number };
  scaledNodeSize: number;
  renderCommitNodeRect: (args: any) => any;
  fmtTooltipDate: (dateStr: string) => string;
  fmtClumpDateRange: (firstDate: string, lastDate: string) => string;
  canvasUnpushedNodeFill: string;
  canvasNodeFill: string;
  stashOrUncommittedBaseStroke: (isStash: boolean, isUncommitted: boolean) => string;
  clusterLocalSyntheticStroke: (clusterHasUncommitted: boolean, clusterHasStash: boolean) => string;
  selectedBranchNameSet: Set<string>;
  defaultBranch: string;
  selectedCommitShaSet: Set<string>;
  mergeCheckoutAccent: (
    isPrimaryCheckout: boolean,
    branchName: string,
    fullSha: string,
    shortSha: string,
  ) => any;
  checkedOutHeadSha: string | null;
  shaMatchesGitRef: (a?: string, b?: string) => boolean;
  latestMainCommitSha?: string;
  visibleWorldBounds: { minX: number; maxX: number; minY: number; maxY: number } | null;
};

export function MapSvgMainNodeOverlayLayer({
  mainIsUnifiedRender,
  mainTimelineOpacity,
  mainDirectClusters,
  resolveClusterMotion,
  interpolateExpandedEntryPose,
  clumpAnimStyleForPhase,
  isStashCommitLike,
  isCommitUnpushed,
  commitRectSize,
  nodeRectSize,
  scaledNodeSize,
  renderCommitNodeRect,
  fmtTooltipDate,
  fmtClumpDateRange,
  canvasUnpushedNodeFill,
  canvasNodeFill,
  stashOrUncommittedBaseStroke,
  clusterLocalSyntheticStroke,
  selectedBranchNameSet,
  defaultBranch,
  selectedCommitShaSet,
  mergeCheckoutAccent,
  checkedOutHeadSha,
  shaMatchesGitRef,
  latestMainCommitSha,
  visibleWorldBounds,
}: MapSvgMainNodeOverlayLayerProps) {
  if (mainIsUnifiedRender) return null;

  return (
    <g data-map-layer="overlay" style={{ opacity: mainTimelineOpacity, transition: 'opacity 0.15s', pointerEvents: 'none' }}>
      {mainDirectClusters.map((clusterLayout) => {
        const {
          cluster,
          count,
          clusterKey,
          memberKeys,
          preferredAnchorX,
          preferredAnchorY,
          clusterHasMainTip,
          clusterCheckoutAccent,
          clusterHasSelectedCommit: mainClusterHasSelectedCommit,
          clusterHasUncommitted,
          clusterHasStash,
          clusterHasUnpushed,
        } = clusterLayout;
        const motion = resolveClusterMotion(
          clusterKey,
          { x: preferredAnchorX, y: preferredAnchorY },
          memberKeys,
          count > 1,
        );
        const isExpanded = motion.isExpanded;
        const phase = motion.phase;
        const phaseEased = motion.phaseEased;
        const anchorX = motion.anchorX;
        const anchorY = motion.anchorY;
        if (count === 1) {
          const singleMainCommit = cluster.entries[0]?.item;
          const isUncommittedCommit =
            singleMainCommit?.fullSha === 'WORKING_TREE' ||
            singleMainCommit?.kind === 'uncommitted';
          const isStashCommit = singleMainCommit ? isStashCommitLike(singleMainCommit) : false;
          const isUnpushedCommit = singleMainCommit
            ? isCommitUnpushed(singleMainCommit.fullSha, singleMainCommit.sha)
            : false;
          const rectSize = commitRectSize(scaledNodeSize);
          if (!isRectVisible(visibleWorldBounds, {
            x: anchorX - rectSize.width / 2,
            y: anchorY - rectSize.height / 2,
            width: rectSize.width,
            height: rectSize.height,
          })) {
            return null;
          }
          return (
            <g
              key={`main-direct-overlay-${clusterKey}`}
              {...((isUncommittedCommit || isStashCommit) ? { 'data-drag-id': singleMainCommit?.fullSha } : {})}
            >
              {renderCommitNodeRect({
                nodeKey: clusterKey,
                centerX: anchorX,
                centerY: anchorY,
                rectSize,
                innerText: isUncommittedCommit || isStashCommit ? undefined : singleMainCommit?.message,
                footerMetaAuthor: `@${singleMainCommit?.author ?? 'unknown'}`,
                footerMetaDate: singleMainCommit?.date ? fmtTooltipDate(singleMainCommit.date) : 'Unknown date',
                fill: isStashCommit || isUncommittedCommit || isUnpushedCommit
                  ? canvasUnpushedNodeFill
                  : canvasNodeFill,
                baseStroke: stashOrUncommittedBaseStroke(isStashCommit, isUncommittedCommit),
                checkoutAccent: clusterCheckoutAccent,
                isUserSelected:
                  mainClusterHasSelectedCommit ||
                  (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                dashed: isUncommittedCommit || isStashCommit,
                isUncommitted: isUncommittedCommit,
                isStash: isStashCommit,
              })}
            </g>
          );
        }

        const clusterRectSize = nodeRectSize(count);
        const localRect = commitRectSize(scaledNodeSize, 0);
        if (!isRectVisible(visibleWorldBounds, {
          x: anchorX - clusterRectSize.width / 2,
          y: anchorY - clusterRectSize.height / 2,
          width: clusterRectSize.width,
          height: clusterRectSize.height,
        })) {
          return null;
        }
        return (
          <g key={`main-direct-overlay-${clusterKey}`}>
            {isExpanded ? (
              <>
                {cluster.entries.map((entry: any) => {
                  const c = entry.item;
                  if (!isRectVisible(visibleWorldBounds, {
                    x: entry.x - localRect.width / 2,
                    y: entry.y - localRect.height / 2,
                    width: localRect.width,
                    height: localRect.height,
                  })) return null;
                  const memberPose = interpolateExpandedEntryPose(
                    { x: anchorX, y: anchorY },
                    { x: entry.x, y: entry.y },
                    phase,
                    phaseEased,
                  );
                  const commitKey = `direct:${c.fullSha}`;
                  const isUncommittedCommit =
                    c.fullSha === 'WORKING_TREE' || c.kind === 'uncommitted';
                  const isStashCommit = isStashCommitLike(c);
                  const isUnpushedCommit = isCommitUnpushed(c.fullSha, c.sha);
                  const commitCheckoutAccent = mergeCheckoutAccent(
                    checkedOutHeadSha != null &&
                      (shaMatchesGitRef(c.fullSha, checkedOutHeadSha) ||
                        shaMatchesGitRef(c.sha, checkedOutHeadSha)),
                    defaultBranch,
                    c.fullSha,
                    c.sha,
                  );

                  return (
                    <g
                      key={`main-direct-overlay:${c.fullSha}`}
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
                          innerText: isUncommittedCommit || isStashCommit ? undefined : c.message,
                          footerMetaAuthor: `@${c.author}`,
                          footerMetaDate: fmtTooltipDate(c.date),
                          fill: isStashCommit || isUncommittedCommit || isUnpushedCommit
                            ? canvasUnpushedNodeFill
                            : canvasNodeFill,
                          baseStroke: stashOrUncommittedBaseStroke(isStashCommit, isUncommittedCommit),
                          checkoutAccent: commitCheckoutAccent,
                          isUserSelected:
                            selectedCommitShaSet.has(c.fullSha) ||
                            (clusterHasMainTip &&
                              selectedBranchNameSet.has(defaultBranch) &&
                              c.fullSha === latestMainCommitSha),
                          dashed: isUncommittedCommit || isStashCommit,
                          isUncommitted: isUncommittedCommit,
                          isStash: isStashCommit,
                        })}
                      </g>
                    </g>
                  );
                })}
              </>
            ) : (
              renderCommitNodeRect({
                nodeKey: clusterKey,
                centerX: anchorX,
                centerY: anchorY,
                rectSize: clusterRectSize,
                innerText: (() => {
                  const last = cluster.entries[cluster.entries.length - 1]?.item;
                  if (!last) return undefined;
                  if (
                    last.fullSha === 'WORKING_TREE' ||
                    last.kind === 'uncommitted' ||
                    isStashCommitLike(last)
                  ) {
                    return undefined;
                  }
                  return last.message;
                })(),
                footerMetaAuthor: (() => {
                  const latestAuthor =
                    cluster.entries[cluster.entries.length - 1]?.item.author ?? 'unknown';
                  return `@${latestAuthor}`;
                })(),
                footerMetaDate: (() => {
                  const firstDate = cluster.entries[0]?.item.date ?? '';
                  const lastDate = cluster.entries[cluster.entries.length - 1]?.item.date ?? '';
                  return fmtClumpDateRange(firstDate, lastDate);
                })(),
                fill: clusterHasStash || clusterHasUncommitted || clusterHasUnpushed
                  ? canvasUnpushedNodeFill
                  : canvasNodeFill,
                baseStroke: clusterLocalSyntheticStroke(clusterHasUncommitted, clusterHasStash),
                checkoutAccent: clusterCheckoutAccent,
                isUserSelected:
                  mainClusterHasSelectedCommit ||
                  (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                dashed: clusterHasUncommitted || clusterHasStash,
                isUncommitted: clusterHasUncommitted,
                isStash: clusterHasStash,
              })
            )}
          </g>
        );
      })}
    </g>
  );
}
