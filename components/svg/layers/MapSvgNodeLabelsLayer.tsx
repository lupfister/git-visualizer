type MapSvgNodeLabelsLayerProps = {
  orderedActiveBranchesForLayer: (options: { includeSelectedPriority: boolean }) => any[];
  getBranchRenderLayout: (branch: any) => any;
  resolveBranchClusterEntries: (cluster: any) => { realCommitEntries: any[]; renderEntries: any[] };
  branchClusterKey: (branchName: string, cluster: any) => string;
  branchClusterMemberKeys: (branchName: string, cluster: any) => string[];
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
  commitRectSize: (size: number, inset?: number) => { width: number; height: number };
  scaledNodeSize: number;
  fitNodeFrameTitle: (
    branchName: string,
    sha: string | undefined | null,
    rectWidth: number,
    rightText?: string,
    reserveIconWidth?: boolean,
    includeBranchForUncommitted?: boolean,
  ) => string;
  isStashCommitLike: (commit: any) => boolean;
  canvasNodeStrokeInset: number;
  nodeFrameLabelInsetX: number;
  nodeFrameLabelGap: number;
  getNodeFrameTitleColor: (
    nodeKey: string,
    checkoutAccent?: any,
    isUserSelected?: boolean,
    isUncommitted?: boolean,
    isStash?: boolean,
    accentOutlineOnly?: boolean,
  ) => string;
  nodeFrameLabelFontSize: number;
  nodeFrameLabelWeight: number;
  expandedClumps: Map<string, any>;
  resolveClumpPhase: (expandedState?: any) => {
    isExpanded: boolean;
    phase: 'collapsed' | 'expanding' | 'expanded' | 'collapsing';
    phaseEased: number;
  };
  nodeRectSize: (count: number) => { width: number; height: number };
  stackCountLabel: (count: number) => string;
  shortShaLabel: (sha?: string | null) => string;
  isHorizontal: boolean;
  interpolateExpandedEntryPose: (
    anchor: { x: number; y: number },
    entry: { x: number; y: number },
    phase: 'collapsed' | 'expanding' | 'expanded' | 'collapsing',
    phaseEased: number,
  ) => { x: number; y: number; opacity: number; scale: number };
  clumpAnimStyleForPhase: (phase: 'collapsed' | 'expanding' | 'expanded' | 'collapsing') => any;
  mergeCheckoutAccent: (
    isPrimaryCheckout: boolean,
    branchName: string,
    fullSha: string,
    shortSha: string,
  ) => any;
  defaultBranch: string;
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
  nodeFrameLabelRightInsetX: number;
};

export function MapSvgNodeLabelsLayer({
  orderedActiveBranchesForLayer,
  getBranchRenderLayout,
  resolveBranchClusterEntries,
  branchClusterKey,
  branchClusterMemberKeys,
  checkedOutHeadSha,
  checkedOutBranchName,
  shaMatchesGitRef,
  otherWorktreeMatchesBranchCommit,
  selectedCommitShaSet,
  selectedBranchNameSet,
  branchPreferredAnchorEntry,
  resolveAnimatedClumpAnchor,
  commitRectSize,
  scaledNodeSize,
  fitNodeFrameTitle,
  isStashCommitLike,
  canvasNodeStrokeInset,
  nodeFrameLabelInsetX,
  nodeFrameLabelGap,
  getNodeFrameTitleColor,
  nodeFrameLabelFontSize,
  nodeFrameLabelWeight,
  expandedClumps,
  resolveClumpPhase,
  nodeRectSize,
  stackCountLabel,
  shortShaLabel,
  isHorizontal,
  interpolateExpandedEntryPose,
  clumpAnimStyleForPhase,
  mergeCheckoutAccent,
  defaultBranch,
  mainIsUnifiedRender,
  mainTimelineOpacity,
  mainDirectClusters,
  resolveClusterMotion,
  nodeFrameLabelRightInsetX,
}: MapSvgNodeLabelsLayerProps) {
  const orderedActiveBranches = orderedActiveBranchesForLayer({
    includeSelectedPriority: false,
  });

  return (
    <g style={{ pointerEvents: 'none' }}>
      <g>
        {orderedActiveBranches.flatMap((b) => {
          const {
            commitDotClusters,
            branchEndDotIndex,
            uniqueAheadCount,
          } = getBranchRenderLayout(b);

          return commitDotClusters.map((cluster: any) => {
            const { realCommitEntries, renderEntries } = resolveBranchClusterEntries(cluster);
            const count = renderEntries.length;
            const clusterKey = branchClusterKey(b.name, cluster);
            const memberKeys = branchClusterMemberKeys(b.name, cluster);
            const clusterHasBranchTip =
              branchEndDotIndex != null &&
              cluster.entries.some((entry: any) => entry.item.index === branchEndDotIndex);
            const clusterHasPrimaryCheckoutHead =
              checkedOutHeadSha != null &&
              cluster.entries.some((entry: any) => {
                const commit = entry.item.commit;
                if (commit && commit.kind !== 'branch-created') {
                  return (
                    shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                    shaMatchesGitRef(commit.sha, checkedOutHeadSha)
                  );
                }
                if (checkedOutBranchName === b.name && branchEndDotIndex === entry.item.index) {
                  return shaMatchesGitRef(b.headSha, checkedOutHeadSha);
                }
                return false;
              });
            const clusterHasOtherWorktreeHead = cluster.entries.some((entry: any) => {
              const commit = entry.item.commit;
              if (commit && commit.kind !== 'branch-created') {
                return otherWorktreeMatchesBranchCommit(b.name, commit.fullSha, commit.sha ?? '');
              }
              if (branchEndDotIndex === entry.item.index) {
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
              clusterHasBranchTip &&
              selectedBranchNameSet.has(b.name);
            const clusterIsCheckoutAccent = clusterCheckoutAccent;
            const clusterIsSelected = clusterHasSelectedCommit || clusterHasSelectedHead;
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

            if (count <= 1) {
              const commitEntry = renderEntries[0] ?? cluster.entries[cluster.entries.length - 1];
              const commit = commitEntry.item.commit;
              const rectSize = commitRectSize(scaledNodeSize);
              const singleTitleText = fitNodeFrameTitle(
                b.name,
                commit?.sha ?? commit?.fullSha ?? b.headSha,
                rectSize.width,
              );
              const accentOutlineOnlyForLabel =
                (!commit && uniqueAheadCount <= 0) ||
                (commit?.kind === 'uncommitted' && !commit?.message?.trim());

              return (
                <text
                  key={`branch-label-overlay-${clusterKey}`}
                  {...((commit?.kind === 'uncommitted' || !!(commit && isStashCommitLike(commit))) ? { 'data-drag-label-id': commit?.fullSha } : {})}
                  x={anchorX - rectSize.width / 2 + canvasNodeStrokeInset + nodeFrameLabelInsetX}
                  y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                  textAnchor="start"
                  fill={getNodeFrameTitleColor(
                    clusterKey,
                    clusterIsCheckoutAccent,
                    clusterIsSelected,
                    commit?.kind === 'uncommitted',
                    !!(commit && isStashCommitLike(commit)),
                    accentOutlineOnlyForLabel,
                  )}
                  fontSize={nodeFrameLabelFontSize}
                  fontWeight={nodeFrameLabelWeight}
                  pointerEvents="none"
                >
                  {singleTitleText}
                </text>
              );
            }

            const canExpandCluster = renderEntries.length > 1;
            const expanded = canExpandCluster ? expandedClumps.get(clusterKey) : undefined;
            const { isExpanded, phase, phaseEased } = canExpandCluster
              ? resolveClumpPhase(expanded)
              : { isExpanded: false, phase: 'collapsed' as const, phaseEased: 0 };
            const isCollapsing = isExpanded && phase === 'collapsing';

            if (!isExpanded || isCollapsing) {
              const rectSize = nodeRectSize(count);
              const clumpCountText = stackCountLabel(count);
              const latestCommit = renderEntries[renderEntries.length - 1]?.item.commit;
              const latestLabel =
                latestCommit?.kind === 'uncommitted'
                  ? 'Uncommited Changes'
                  : latestCommit && isStashCommitLike(latestCommit)
                    ? shortShaLabel(latestCommit.fullSha)
                    : (latestCommit?.sha ?? latestCommit?.fullSha ?? b.headSha);
              const clumpTitleText = fitNodeFrameTitle(
                b.name,
                latestLabel,
                rectSize.width,
                clumpCountText,
              );
              const accentOutlineOnlyForClumpLabel =
                latestCommit?.kind === 'uncommitted' && !latestCommit?.message?.trim();

              return (
                <g
                  key={`branch-label-overlay-${clusterKey}`}
                  opacity={1}
                >
                  <text
                    x={anchorX + rectSize.width / 2 - canvasNodeStrokeInset - nodeFrameLabelRightInsetX}
                    y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                    textAnchor="end"
                    fontSize={nodeFrameLabelFontSize}
                    fill={getNodeFrameTitleColor(
                      clusterKey,
                      clusterIsCheckoutAccent,
                      clusterIsSelected,
                      latestCommit?.kind === 'uncommitted',
                      !!latestCommit && isStashCommitLike(latestCommit),
                      accentOutlineOnlyForClumpLabel,
                    )}
                    fontWeight={nodeFrameLabelWeight}
                    pointerEvents="none"
                  >
                    {clumpCountText}
                  </text>
                  <text
                    x={anchorX - rectSize.width / 2 + canvasNodeStrokeInset + nodeFrameLabelInsetX}
                    y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                    textAnchor="start"
                    fill={getNodeFrameTitleColor(
                      clusterKey,
                      clusterIsCheckoutAccent,
                      clusterIsSelected,
                      latestCommit?.kind === 'uncommitted',
                      !!latestCommit && isStashCommitLike(latestCommit),
                      accentOutlineOnlyForClumpLabel,
                    )}
                    fontSize={nodeFrameLabelFontSize}
                    fontWeight={nodeFrameLabelWeight}
                    pointerEvents="none"
                  >
                    {clumpTitleText}
                  </text>
                </g>
              );
            }

            const localRect = commitRectSize(scaledNodeSize, 0);
            const topExpandedEntry = renderEntries.reduce(
              (top: any, entry: any) => {
                const isBetter = isHorizontal ? entry.x > top.x : entry.y < top.y;
                return isBetter ? entry : top;
              },
              renderEntries[0],
            );
            return (
              <g key={`branch-label-overlay-${clusterKey}`}>
                {renderEntries.map((entry: any) => {
                  const commit = entry.item.commit;
                  if (!commit?.fullSha) return null;

                  const memberPose = interpolateExpandedEntryPose(
                    { x: anchorX, y: anchorY },
                    { x: entry.x, y: entry.y },
                    phase,
                    phaseEased,
                  );

                  return (
                    <g
                      key={`branch-label-overlay:${b.name}:${commit.fullSha}`}
                      transform={`translate(${memberPose.x} ${memberPose.y})`}
                      style={clumpAnimStyleForPhase(phase)}
                      opacity={memberPose.opacity}
                    >
                      <g transform={`scale(${memberPose.scale})`}>
                        <text
                          x={-localRect.width / 2 + canvasNodeStrokeInset + nodeFrameLabelInsetX}
                          y={-localRect.height / 2 - nodeFrameLabelGap}
                          textAnchor="start"
                          fill={getNodeFrameTitleColor(
                            `branch-commit:${b.name}:${commit.fullSha}`,
                            mergeCheckoutAccent(
                              checkedOutHeadSha != null &&
                                (shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                                  shaMatchesGitRef(commit.sha, checkedOutHeadSha)),
                              b.name,
                              commit.fullSha,
                              commit.sha,
                            ),
                            selectedCommitShaSet.has(commit.fullSha),
                            commit.kind === 'uncommitted',
                            isStashCommitLike(commit),
                          )}
                          fontSize={nodeFrameLabelFontSize}
                          fontWeight={nodeFrameLabelWeight}
                          pointerEvents="none"
                        >
                          {fitNodeFrameTitle(
                            b.name,
                            commit.kind === 'uncommitted'
                              ? 'Uncommited Changes'
                              : isStashCommitLike(commit)
                                ? shortShaLabel(commit.fullSha)
                                : (commit.sha ?? commit.fullSha),
                            localRect.width,
                            undefined,
                            entry === topExpandedEntry,
                          )}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </g>
            );
          });
        })}
      </g>

      {!mainIsUnifiedRender && (
        <g style={{ opacity: mainTimelineOpacity, transition: 'opacity 0.15s' }}>
          {mainDirectClusters.map((clusterLayout) => {
            const {
              cluster,
              count,
              last,
              clusterKey,
              memberKeys,
              preferredAnchorX,
              preferredAnchorY,
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
            const isCollapsing = isExpanded && phase === 'collapsing';
            const anchorX = motion.anchorX;
            const anchorY = motion.anchorY;
            const mainClusterHasPrimaryCheckout =
              checkedOutHeadSha != null &&
              cluster.entries.some((entry: any) => {
                const commit = entry.item;
                return (
                  shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                  shaMatchesGitRef(commit.sha, checkedOutHeadSha)
                );
              });
            const mainClusterHasOtherWorktree = cluster.entries.some((entry: any) => {
              const c = entry.item;
              return otherWorktreeMatchesBranchCommit(defaultBranch, c.fullSha, c.sha);
            });
            const mainClusterCheckoutAccent = mainClusterHasPrimaryCheckout
              ? 'primary'
              : mainClusterHasOtherWorktree
                ? 'other'
                : 'none';
            const mainClusterIsSelected =
              cluster.entries.some((entry: any) => selectedCommitShaSet.has(entry.item.fullSha)) ||
              selectedBranchNameSet.has(defaultBranch);

            if (count === 1) {
              const rectSize = commitRectSize(scaledNodeSize);
              const singleTitleText = fitNodeFrameTitle(
                defaultBranch,
                last.kind === 'uncommitted'
                  ? 'Uncommited Changes'
                  : isStashCommitLike(last)
                    ? shortShaLabel(last.fullSha)
                    : last.sha ?? last.fullSha,
                rectSize.width,
              );
              return (
                <text
                  key={`main-label-overlay-${clusterKey}`}
                  {...((last.kind === 'uncommitted' || isStashCommitLike(last)) ? { 'data-drag-label-id': last.fullSha } : {})}
                  x={anchorX - rectSize.width / 2 + canvasNodeStrokeInset + nodeFrameLabelInsetX}
                  y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                  textAnchor="start"
                  fill={getNodeFrameTitleColor(
                    clusterKey,
                    mainClusterCheckoutAccent,
                    mainClusterIsSelected,
                    last.kind === 'uncommitted',
                    isStashCommitLike(last),
                  )}
                  fontSize={nodeFrameLabelFontSize}
                  fontWeight={nodeFrameLabelWeight}
                  pointerEvents="none"
                >
                  {singleTitleText}
                </text>
              );
            }

            const clusterRectSize = nodeRectSize(count);
            const clumpCountText = stackCountLabel(count);
            const clumpTitleText = fitNodeFrameTitle(
              defaultBranch,
              last.kind === 'uncommitted'
                ? 'Uncommited Changes'
                : isStashCommitLike(last)
                  ? shortShaLabel(last.fullSha)
                  : last.sha ?? last.fullSha,
              clusterRectSize.width,
              clumpCountText,
            );
            if (isExpanded && !isCollapsing) {
              const localRect = commitRectSize(scaledNodeSize, 0);
              const topEntryForLabels = cluster.entries.reduce(
                (top: any, entry: any) => {
                  const isBetter = isHorizontal ? entry.x > top.x : entry.y < top.y;
                  return isBetter ? entry : top;
                },
                cluster.entries[0],
              );
              return (
                <g key={`main-label-overlay-${clusterKey}`}>
                  {cluster.entries.map((entry: any) => {
                    const c = entry.item;
                    const memberPose = interpolateExpandedEntryPose(
                      { x: anchorX, y: anchorY },
                      { x: entry.x, y: entry.y },
                      phase,
                      phaseEased,
                    );
                    return (
                      <g
                        key={`main-label-overlay:${c.fullSha}`}
                        transform={`translate(${memberPose.x} ${memberPose.y})`}
                        style={clumpAnimStyleForPhase(phase)}
                        opacity={memberPose.opacity}
                      >
                        <g transform={`scale(${memberPose.scale})`}>
                          <text
                            x={-localRect.width / 2 + canvasNodeStrokeInset + nodeFrameLabelInsetX}
                            y={-localRect.height / 2 - nodeFrameLabelGap}
                            textAnchor="start"
                            fill={getNodeFrameTitleColor(
                              `direct:${c.fullSha}`,
                              mergeCheckoutAccent(
                                checkedOutHeadSha != null &&
                                  (shaMatchesGitRef(c.fullSha, checkedOutHeadSha) ||
                                    shaMatchesGitRef(c.sha, checkedOutHeadSha)),
                                defaultBranch,
                                c.fullSha,
                                c.sha,
                              ),
                              selectedCommitShaSet.has(c.fullSha),
                              c.kind === 'uncommitted',
                              isStashCommitLike(c),
                            )}
                            fontSize={nodeFrameLabelFontSize}
                            fontWeight={nodeFrameLabelWeight}
                            pointerEvents="none"
                          >
                            {fitNodeFrameTitle(
                              defaultBranch,
                              c.kind === 'uncommitted'
                                ? 'Uncommited Changes'
                                : isStashCommitLike(c)
                                  ? shortShaLabel(c.fullSha)
                                  : c.sha ?? c.fullSha,
                              localRect.width,
                              undefined,
                              entry === topEntryForLabels,
                            )}
                          </text>
                        </g>
                      </g>
                    );
                  })}
                </g>
              );
            }
            return (
              <g
                key={`main-label-overlay-${clusterKey}`}
                opacity={1}
              >
                {(!isExpanded || isCollapsing) && (
                  <text
                    x={anchorX + clusterRectSize.width / 2 - canvasNodeStrokeInset - nodeFrameLabelRightInsetX}
                    y={anchorY - clusterRectSize.height / 2 - nodeFrameLabelGap}
                    textAnchor="end"
                    fontSize={nodeFrameLabelFontSize}
                    fill={getNodeFrameTitleColor(
                      clusterKey,
                      mainClusterCheckoutAccent,
                      mainClusterIsSelected,
                      last.kind === 'uncommitted',
                      isStashCommitLike(last),
                    )}
                    fontWeight={nodeFrameLabelWeight}
                    pointerEvents="none"
                  >
                    {clumpCountText}
                  </text>
                )}
                <text
                  x={anchorX - clusterRectSize.width / 2 + canvasNodeStrokeInset + nodeFrameLabelInsetX}
                  y={anchorY - clusterRectSize.height / 2 - nodeFrameLabelGap}
                  textAnchor="start"
                  fill={getNodeFrameTitleColor(
                    clusterKey,
                    mainClusterCheckoutAccent,
                    mainClusterIsSelected,
                    last.kind === 'uncommitted',
                    isStashCommitLike(last),
                  )}
                  fontSize={nodeFrameLabelFontSize}
                  fontWeight={nodeFrameLabelWeight}
                  pointerEvents="none"
                >
                  {clumpTitleText}
                </text>
              </g>
            );
          })}
        </g>
      )}
    </g>
  );
}
