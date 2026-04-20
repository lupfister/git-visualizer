type MapSvgCollapseControlsLayerProps = {
  mainIsUnifiedRender: boolean;
  mainDirectClusters: any[];
  expandedClumps: Map<string, any>;
  resolveClumpPhase: (expandedState?: any) => { isExpanded: boolean; phase: string };
  commitRectSize: (size: number, inset?: number) => { width: number; height: number };
  scaledNodeSize: number;
  nodeFrameCollapseIconSize: number;
  worldPx: (px: number) => number;
  isHorizontal: boolean;
  canvasNodeStrokeInset: number;
  nodeFrameLabelRightInsetX: number;
  nodeFrameLabelGap: number;
  getNodeFrameTitleColor: (nodeKey: string, checkoutAccent?: any, isUserSelected?: boolean) => string;
  selectedBranchNameSet: Set<string>;
  defaultBranch: string;
  toggleClumpExpanded: (clumpKey: string) => void;
  renderBranches: any[];
  getBranchRenderLayout: (branch: any) => any;
  branchClusterKey: (branchName: string, cluster: any) => string;
  resolveBranchClusterEntries: (cluster: any) => { renderEntries: any[] };
  checkedOutHeadSha: string | null;
  shaMatchesGitRef: (a?: string, b?: string) => boolean;
  checkedOutBranchName: string | null;
  otherWorktreeMatchesBranchCommit: (
    branchName: string,
    commitFullSha: string,
    commitSha: string,
  ) => boolean;
  selectedCommitShaSet: Set<string>;
};

export function MapSvgCollapseControlsLayer({
  mainIsUnifiedRender,
  mainDirectClusters,
  expandedClumps,
  resolveClumpPhase,
  commitRectSize,
  scaledNodeSize,
  nodeFrameCollapseIconSize,
  worldPx,
  isHorizontal,
  canvasNodeStrokeInset,
  nodeFrameLabelRightInsetX,
  nodeFrameLabelGap,
  getNodeFrameTitleColor,
  selectedBranchNameSet,
  defaultBranch,
  toggleClumpExpanded,
  renderBranches,
  getBranchRenderLayout,
  branchClusterKey,
  resolveBranchClusterEntries,
  checkedOutHeadSha,
  shaMatchesGitRef,
  checkedOutBranchName,
  otherWorktreeMatchesBranchCommit,
  selectedCommitShaSet,
}: MapSvgCollapseControlsLayerProps) {
  return (
    <g data-map-layer="controls">
      {!mainIsUnifiedRender && mainDirectClusters.map((clusterLayout) => {
        const {
          cluster,
          count,
          clusterKey,
          clusterHasMainTip,
          clusterCheckoutAccent,
          clusterHasSelectedCommit,
        } = clusterLayout;
        const expanded = expandedClumps.get(clusterKey);
        const { isExpanded, phase } = resolveClumpPhase(expanded);
        if (count <= 1 || !isExpanded || phase !== 'expanded') return null;

        const localRect = commitRectSize(scaledNodeSize, 0);
        const collapseIconSize = nodeFrameCollapseIconSize;
        const collapseHitSize = worldPx(16);
        const collapseStrokeWidth = 1;
        const topExpandedEntry = cluster.entries.reduce(
          (top: any, entry: any) => {
            const isBetter = isHorizontal ? entry.x > top.x : entry.y < top.y;
            return isBetter ? entry : top;
          },
          cluster.entries[0],
        );
        const clumpCountAnchorX =
          topExpandedEntry.x + localRect.width / 2 - canvasNodeStrokeInset - nodeFrameLabelRightInsetX;
        const clumpCountAnchorY = topExpandedEntry.y - localRect.height / 2 - nodeFrameLabelGap;
        const collapseHitX = clumpCountAnchorX - collapseHitSize;
        const collapseHitY = clumpCountAnchorY - collapseHitSize + worldPx(3);
        const collapseCaretX = clumpCountAnchorX - collapseIconSize;
        const collapseCaretY = collapseHitY + (collapseHitSize - collapseIconSize) / 2;
        const collapseCaretNudgeX = worldPx(0.8);

        return (
          <g
            key={`main-collapse-control-${clusterKey}`}
            role="button"
            tabIndex={0}
            aria-label="Collapse commit stack"
            style={{ cursor: 'pointer' }}
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleClumpExpanded(clusterKey);
            }}
            onKeyDown={(e) => {
              if (e.key !== 'Enter' && e.key !== ' ') return;
              e.preventDefault();
              e.stopPropagation();
              toggleClumpExpanded(clusterKey);
            }}
          >
            <rect
              x={collapseHitX}
              y={collapseHitY}
              width={collapseHitSize}
              height={collapseHitSize}
              fill="rgba(0,0,0,0.001)"
              pointerEvents="all"
            />
            <path
              d={`M ${collapseCaretX + collapseCaretNudgeX + collapseIconSize * 0.16} ${collapseCaretY + collapseIconSize * 0.34} L ${collapseCaretX + collapseCaretNudgeX + collapseIconSize * 0.5} ${collapseCaretY + collapseIconSize * 0.66} L ${collapseCaretX + collapseCaretNudgeX + collapseIconSize * 0.84} ${collapseCaretY + collapseIconSize * 0.34}`}
              stroke={getNodeFrameTitleColor(
                clusterKey,
                clusterCheckoutAccent,
                clusterHasSelectedCommit || (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
              )}
              strokeWidth={collapseStrokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        );
      })}

      {renderBranches.flatMap((b) => {
        const { commitDotClusters, branchEndDotIndex } = getBranchRenderLayout(b);
        return commitDotClusters.map((cluster: any) => {
          const { renderEntries } = resolveBranchClusterEntries(cluster);
          const count = renderEntries.length;
          const clusterKey = branchClusterKey(b.name, cluster);
          const canExpandCluster = renderEntries.length > 1;
          const expanded = canExpandCluster ? expandedClumps.get(clusterKey) : undefined;
          const { isExpanded, phase } = canExpandCluster
            ? resolveClumpPhase(expanded)
            : { isExpanded: false, phase: 'collapsed' as const };
          if (count <= 1 || !isExpanded || phase !== 'expanded') return null;
          const caretClusterHasBranchTip =
            branchEndDotIndex != null &&
            cluster.entries.some((entry: any) => entry.item.index === branchEndDotIndex);
          const caretClusterHasPrimaryCheckout =
            checkedOutHeadSha != null &&
            cluster.entries.some((entry: any) => {
              const commit = entry.item.commit;
              if (commit && commit.kind !== 'branch-created') {
                return shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) || shaMatchesGitRef(commit.sha, checkedOutHeadSha);
              }
              if (checkedOutBranchName === b.name && branchEndDotIndex === entry.item.index) {
                return shaMatchesGitRef(b.headSha, checkedOutHeadSha);
              }
              return false;
            });
          const caretClusterHasOtherWorktree = cluster.entries.some((entry: any) => {
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
          const caretClusterCheckoutAccent = caretClusterHasPrimaryCheckout
            ? 'primary'
            : caretClusterHasOtherWorktree
              ? 'other'
              : 'none';
          const caretClusterHasSelectedCommit = cluster.entries.some((entry: any) => {
            const commitSha = entry.item.commit?.fullSha;
            return !!commitSha && selectedCommitShaSet.has(commitSha);
          });
          const caretClusterIsSelected =
            caretClusterHasSelectedCommit ||
            (caretClusterHasBranchTip && selectedBranchNameSet.has(b.name));

          const localRect = commitRectSize(scaledNodeSize, 0);
          const collapseIconSize = nodeFrameCollapseIconSize;
          const collapseHitSize = worldPx(16);
          const collapseStrokeWidth = 1;
          const topExpandedEntry = renderEntries.reduce(
            (top: any, entry: any) => {
              const isBetter = isHorizontal ? entry.x > top.x : entry.y < top.y;
              return isBetter ? entry : top;
            },
            renderEntries[0],
          );
          const clumpCountAnchorX =
            topExpandedEntry.x + localRect.width / 2 - canvasNodeStrokeInset - nodeFrameLabelRightInsetX;
          const clumpCountAnchorY = topExpandedEntry.y - localRect.height / 2 - nodeFrameLabelGap;
          const collapseHitX = clumpCountAnchorX - collapseHitSize;
          const collapseHitY = clumpCountAnchorY - collapseHitSize + worldPx(3);
          const collapseCaretX = clumpCountAnchorX - collapseIconSize;
          const collapseCaretY = collapseHitY + (collapseHitSize - collapseIconSize) / 2;
          const collapseCaretNudgeX = worldPx(0.8);

          return (
            <g
              key={`branch-collapse-control-${clusterKey}`}
              role="button"
              tabIndex={0}
              aria-label="Collapse commit stack"
              style={{ cursor: 'pointer' }}
              onPointerDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleClumpExpanded(clusterKey);
              }}
              onKeyDown={(e) => {
                if (e.key !== 'Enter' && e.key !== ' ') return;
                e.preventDefault();
                e.stopPropagation();
                toggleClumpExpanded(clusterKey);
              }}
            >
              <rect
                x={collapseHitX}
                y={collapseHitY}
                width={collapseHitSize}
                height={collapseHitSize}
                fill="rgba(0,0,0,0.001)"
                pointerEvents="all"
              />
              <path
                d={`M ${collapseCaretX + collapseCaretNudgeX + collapseIconSize * 0.16} ${collapseCaretY + collapseIconSize * 0.34} L ${collapseCaretX + collapseCaretNudgeX + collapseIconSize * 0.5} ${collapseCaretY + collapseIconSize * 0.66} L ${collapseCaretX + collapseCaretNudgeX + collapseIconSize * 0.84} ${collapseCaretY + collapseIconSize * 0.34}`}
                stroke={getNodeFrameTitleColor(clusterKey, caretClusterCheckoutAccent, caretClusterIsSelected)}
                strokeWidth={collapseStrokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          );
        });
      })}
    </g>
  );
}
