import { buildBranchOrthogonalPath, buildMergeOrthogonalPath, commitRectSize } from './LayoutSvg';
import {
  BRANCH_HIT_END_INSET,
  GRID_ROUTE_CORNER_R,
  NODE_SIZE,
} from '../core/MapSvg.constants';
import { clusterByForkPoints, isSyntheticLocalCommit, shaMatchesGitRef, splitIndicesAroundUncommitted } from '../core/MapSvg.utils';
import type {
  Branch,
  BranchCommitPreview,
  BranchPromptMeta,
  DirectCommit,
  MergeNode,
} from '../../../types';
import type {
  BranchRenderLayout,
  CommitEntryItem,
  MarkerEntry,
  PromptEntryItem,
} from '../core/MapSvg.types';

export type BranchRenderLayoutContext = {
  MAIN_DRAW_MS: number;
  defaultBranch: string;
  mainX: number;
  mainStartY: number;
  mainActiveEndY: number;
  mainEndX: number;
  isHorizontal: boolean;
  GRID_EVENT_GAP: number;
  sortedDirectCommits: DirectCommit[];
  directXByFullSha: Map<string, number>;
  childBranchesByParent: Map<string, Branch[]>;
  mainCommitSplitIndices: Set<number>;
  forcedMainSplitIndices: Set<number>;
  branchPromptMeta: Record<string, BranchPromptMeta>;
  checkedOutHeadSha: string | null;
  checkedOutBranchName: string | null;
  branchCommitPreviews: Record<string, BranchCommitPreview[]>;
  mergeNodeByMergedHeadSha: Map<string, MergeNode>;
  laneXByBranch: Map<string, number>;
  branchDelayMs: Map<string, number>;
  openPRBranchNames: Set<string>;
  freshCopyBranchNames: Set<string>;

  pathCoord: (x: number, y: number) => string;
  timeToX: (dateStr: string) => number;
  timeCoordToY: (timeCoordX: number) => number;
  projectPoint: (x: number, y: number) => { x: number; y: number };
  branchPreviewIndexForChildFork: (
    previews: BranchCommitPreview[],
    branchTimes: number[],
    child: Branch
  ) => number;
  isCommitUnpushed: (fullSha: string, sha?: string) => boolean;
  branchForkX: (branch: Branch) => number;
  laneX: (branch: Branch) => number;
  branchStartX: (branch: Branch) => number;
  renderParentBranchName: (branch: Branch) => string;
  collapsedParentClumpLiftedForkX: (branch: Branch, parentName: string) => number | null;
  branchAheadCount: (branch: Branch) => number;
  mergeJunctionTimeX: (mergeNode: MergeNode) => number;
  branchTipX: (branch: Branch) => number;
  gridXForBranchSlot: (branchName: string, slotIndex: number) => number | undefined;
  gridXForBranchSha: (branchName: string, sha: string) => number | undefined;
  renderableBranchPreviews: (branch: Branch) => BranchCommitPreview[];
};

const toRenderablePreview = (commit: DirectCommit): BranchCommitPreview => ({
  ...commit,
  kind:
    commit.kind === 'stash'
      ? 'stash'
      : commit.kind === 'uncommitted'
        ? 'uncommitted'
        : 'commit',
});

export function computeBranchRenderLayout(
  b: Branch,
  ctx: BranchRenderLayoutContext,
): BranchRenderLayout {
  const {
    defaultBranch,
    MAIN_DRAW_MS,
    mainX,
    mainStartY,
    mainActiveEndY,
    mainEndX,
    isHorizontal,
    GRID_EVENT_GAP,
    sortedDirectCommits,
    directXByFullSha,
    childBranchesByParent,
    mainCommitSplitIndices,
    forcedMainSplitIndices,
    branchPromptMeta,
    checkedOutHeadSha,
    checkedOutBranchName,
    branchCommitPreviews,
    mergeNodeByMergedHeadSha,
    laneXByBranch,
    branchDelayMs,
    openPRBranchNames,
    freshCopyBranchNames,
    pathCoord,
    timeToX,
    timeCoordToY,
    projectPoint,
    branchPreviewIndexForChildFork,
    isCommitUnpushed,
    branchForkX,
    laneX,
    branchStartX,
    renderParentBranchName,
    collapsedParentClumpLiftedForkX,
    branchAheadCount,
    mergeJunctionTimeX,
    branchTipX,
    gridXForBranchSlot,
    gridXForBranchSha,
    renderableBranchPreviews,
  } = ctx;

  if (b.name === defaultBranch) {
    const lanePosX = mainX;
    const startX = mainX;
    const forkY = mainStartY;
    const branchLineTipY = mainActiveEndY;
    const routeCornerR = GRID_ROUTE_CORNER_R;
    const curvePath = buildBranchOrthogonalPath({
      startX,
      forkY,
      laneX: lanePosX,
      tipY: branchLineTipY,
      cornerR: routeCornerR,
      pointFormatter: pathCoord,
    });
    const verticalDir = branchLineTipY >= forkY ? 1 : -1;
    const endTrim = Math.min(
      BRANCH_HIT_END_INSET,
      Math.max(0, Math.abs(branchLineTipY - forkY) - 1),
    );
    const hitCurvePath = buildBranchOrthogonalPath({
      startX,
      forkY,
      laneX: lanePosX,
      tipY: branchLineTipY - verticalDir * endTrim,
      cornerR: routeCornerR,
      pointFormatter: pathCoord,
    });

    const visibleBranchCommits = sortedDirectCommits.map(toRenderablePreview);
    const commitTimeXs = sortedDirectCommits.map(
      (commit) => directXByFullSha.get(commit.fullSha) ?? timeToX(commit.date)
    );
    const minCommitTimeX = commitTimeXs.length > 0 ? Math.min(...commitTimeXs) : mainEndX;
    const maxCommitTimeX = commitTimeXs.length > 0 ? Math.max(...commitTimeXs) : mainEndX;
    const commitDotEntries: MarkerEntry<CommitEntryItem>[] = sortedDirectCommits.map((commit, index) => {
      const timeCoordX = directXByFullSha.get(commit.fullSha) ?? timeToX(commit.date);
      const markerPoint = projectPoint(mainX, timeCoordToY(timeCoordX));
      return {
        x: markerPoint.x,
        y: markerPoint.y,
        item: {
          index,
          commit: toRenderablePreview(commit),
        },
      };
    });
    const mainForkIndices = new Set<number>();
    const mainChildBranches = childBranchesByParent.get(defaultBranch) ?? [];
    if (mainChildBranches.length > 0 && visibleBranchCommits.length > 0) {
      const branchTimes = visibleBranchCommits.map((commit) => new Date(commit.date).getTime());
      mainChildBranches.forEach((child) => {
        const idx = branchPreviewIndexForChildFork(visibleBranchCommits, branchTimes, child);
        if (idx >= 0) mainForkIndices.add(idx);
      });
    }
    const mainUncommittedSplitIndices = splitIndicesAroundUncommitted(
      commitDotEntries,
      (entry) =>
        !!entry.item.commit && isSyntheticLocalCommit(entry.item.commit)
    );
    const defaultBranchSplitIndices = new Set<number>([
      ...mainForkIndices,
      ...mainCommitSplitIndices,
      ...mainUncommittedSplitIndices,
    ]);
    const defaultBranchPreserveSplitIndices = new Set<number>([
      ...mainForkIndices,
      ...forcedMainSplitIndices,
      ...mainUncommittedSplitIndices,
    ]);
    const commitDotClusters = clusterByForkPoints(
      commitDotEntries,
      defaultBranchSplitIndices,
      defaultBranchPreserveSplitIndices,
    );

    const promptMarkersRaw = branchPromptMeta[defaultBranch]?.markers ?? [];
    const promptSeeds = [...promptMarkersRaw]
      .sort((a, bx) => new Date(a.timestamp).getTime() - new Date(bx.timestamp).getTime());
    const promptMarkers = promptSeeds.map((marker) => {
      const rawX = timeToX(marker.timestamp);
      const clampedX = Math.max(minCommitTimeX, Math.min(maxCommitTimeX, rawX));
      return {
        y: timeCoordToY(clampedX),
        marker,
      };
    });
    const promptMarkerEntries: MarkerEntry<PromptEntryItem>[] = promptMarkers.map(
      ({ y, marker }, markerIndex) => {
        const point = projectPoint(lanePosX, y);
        return {
          x: point.x,
          y: point.y,
          item: { marker, index: markerIndex },
        };
      }
    );
    const promptMarkerClusters = clusterByForkPoints(promptMarkerEntries, new Set<number>());
    const branchEndDotIndex = sortedDirectCommits.length > 0 ? sortedDirectCommits.length - 1 : null;
    const branchHasCheckedOutHead =
      checkedOutHeadSha != null &&
      sortedDirectCommits.some((commit) =>
        shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
        shaMatchesGitRef(commit.sha, checkedOutHeadSha)
      );
    const nameAnchor = projectPoint(lanePosX, forkY);
    const namePoint = { x: nameAnchor.x + (isHorizontal ? 24 : 20), y: nameAnchor.y + (isHorizontal ? -20 : -12) };
    const clockPoint = { x: namePoint.x + 10, y: namePoint.y };

    const mainLocalCommitDotIndices = new Set<number>(
      sortedDirectCommits
        .map((commit, index) => ({ commit, index }))
        .filter(({ commit }) => isCommitUnpushed(commit.fullSha, commit.sha))
        .map(({ index }) => index)
    );
    return {
      forkY,
      lanePosX,
      startX,
      isMergedBranch: false,
      isLocalBranch: mainLocalCommitDotIndices.size > 0,
      mergeNodeTimeX: null,
      branchLineTipY,
      mergeBackPath: null,
      curvePath,
      hitCurvePath,
      hasPreviewData: true,
      visibleBranchCommits,
      uniqueAheadCount: visibleBranchCommits.filter((commit) => commit.kind !== 'branch-created').length,
      branchEndDotIndex,
      localCommitDotIndices: mainLocalCommitDotIndices,
      fullBranchShouldUseLocalGray: false,
      hasUncommittedPreview: visibleBranchCommits.some(
        (commit) => commit.kind === 'uncommitted' || commit.kind === 'stash',
      ),
      localSegmentStartY: undefined,
      commitDotClusters,
      promptMarkerClusters,
      branchHasCheckedOutHead,
      brDelay: MAIN_DRAW_MS,
      showClockIcon: false,
      namePoint,
      clockPoint,
      mergeTargetX: null,
      mergeTargetY: null,
    };
  }

  const forkTimeX = branchForkX(b);
  const lanePosX = laneX(b);
  let startX = branchStartX(b);
  const parentName = renderParentBranchName(b);
  const liftedForkTimeX = collapsedParentClumpLiftedForkX(b, parentName);
  const effectiveForkTimeX = liftedForkTimeX != null ? Math.max(forkTimeX, liftedForkTimeX) : forkTimeX;

  if (Math.abs(lanePosX - startX) > 0.5) {
    const { width: rectW, height: rectH } = commitRectSize(NODE_SIZE);
    const logicalOffset = isHorizontal ? rectH / 2 : rectW / 2;
    const direction = lanePosX > startX ? 1 : -1;
    const laneDelta = Math.abs(lanePosX - startX);
    const safeOffset = Math.min(logicalOffset, Math.max(0, laneDelta - 0.5));
    startX += direction * safeOffset;
  }

  const isFreshCopy = freshCopyBranchNames.has(b.name);
  const isMergedBranch = b.commitsAhead === 0 && !isFreshCopy;
  const isLocalBranch = b.remoteSyncStatus !== 'on-github';
  const branchCommits = renderableBranchPreviews(b);
  const hasPreviewData = branchCommitPreviews[b.name] != null;
  const visibleBranchCommits = branchCommits;
  const hasUncommittedPreview = visibleBranchCommits.some(
    (commit) => commit.kind === 'uncommitted' || commit.kind === 'stash',
  );
  const uniqueAheadCount = branchAheadCount(b);
  const aheadCount = Math.max(0, uniqueAheadCount);
  const hasConcretePreviewCommits = visibleBranchCommits.length > 0;
  const shouldShowEmptyPlaceholder = !hasConcretePreviewCommits && uniqueAheadCount <= 0;
  const commitCount = Math.max(
    hasConcretePreviewCommits ? visibleBranchCommits.length : 0,
    aheadCount,
    shouldShowEmptyPlaceholder ? 1 : 0,
  );
  const mergeNodeForBranch = isMergedBranch
    ? mergeNodeByMergedHeadSha.get(b.headSha)
    : undefined;
  const mergeNodeTimeX = mergeNodeForBranch
    ? mergeJunctionTimeX(mergeNodeForBranch)
    : null;
  const baseTipTimeX = branchTipX(b);
  const tipTimeX = mergeNodeTimeX != null ? Math.max(baseTipTimeX, mergeNodeTimeX) : baseTipTimeX;
  const commitTipTimeX = isMergedBranch ? baseTipTimeX : tipTimeX;
  const commitTipY = timeCoordToY(commitTipTimeX);
  let branchLineTipY = commitTipY;
  if (!hasConcretePreviewCommits && commitCount > 0) {
    const placeholderTipX = gridXForBranchSlot(b.name, commitCount - 1);
    if (placeholderTipX != null) {
      branchLineTipY = timeCoordToY(Math.max(placeholderTipX, commitTipTimeX));
    }
  }
  const forkY = timeCoordToY(effectiveForkTimeX);
  const routeCornerR = GRID_ROUTE_CORNER_R;
  const maxAllowedMergeY = branchLineTipY - GRID_EVENT_GAP;
  const mergeTargetBranchName = mergeNodeForBranch?.targetBranch ?? parentName;
  const mergeTargetLaneX = mergeTargetBranchName === defaultBranch
    ? mainX
    : (laneXByBranch.get(mergeTargetBranchName) ?? (
      parentName === defaultBranch
        ? mainX
        : (laneXByBranch.get(parentName) ?? mainX)
    ));
  const fallbackMergeTarget = mergeNodeTimeX != null
    ? { x: mergeTargetLaneX, y: timeCoordToY(mergeNodeTimeX) }
    : null;
  const mergeTarget = (() => {
    const isUpward = (y: number): boolean => y <= maxAllowedMergeY;
    if (fallbackMergeTarget && isUpward(fallbackMergeTarget.y)) {
      return fallbackMergeTarget;
    }
    if (fallbackMergeTarget) {
      return { x: mergeTargetLaneX, y: maxAllowedMergeY };
    }
    return null;
  })();
  const mergeTargetX = mergeTarget?.x ?? mainX;
  const mergeTargetY = mergeTarget?.y ?? null;
  const hasMergeBackConnector =
    mergeTargetY != null && Math.abs(lanePosX - mergeTargetX) > 0.5;
  const mergeBackPath = (() => {
    if (!hasMergeBackConnector || mergeTargetY == null) return null;
    return buildMergeOrthogonalPath({
      laneX: lanePosX,
      tipY: branchLineTipY,
      mergeX: mergeTargetX,
      mergeY: mergeTargetY,
      cornerR: routeCornerR,
      pointFormatter: pathCoord,
    });
  })();
  const curvePath = buildBranchOrthogonalPath({
    startX,
    forkY,
    laneX: lanePosX,
    tipY: branchLineTipY,
    cornerR: routeCornerR,
    pointFormatter: pathCoord,
  });
  const horizontalDir = lanePosX >= startX ? 1 : -1;
  const verticalDir = branchLineTipY >= forkY ? 1 : -1;
  const startTrim = Math.min(
    BRANCH_HIT_END_INSET,
    Math.max(0, Math.abs(lanePosX - startX) - 1),
  );
  const endTrim = Math.min(
    BRANCH_HIT_END_INSET,
    Math.max(0, Math.abs(branchLineTipY - forkY) - 1),
  );
  const hitStartX = startX + horizontalDir * startTrim;
  const hitTipY = branchLineTipY - verticalDir * endTrim;
  const hitCurvePath = buildBranchOrthogonalPath({
    startX: hitStartX,
    forkY,
    laneX: lanePosX,
    tipY: hitTipY,
    cornerR: routeCornerR,
    pointFormatter: pathCoord,
  });

  const displayedCommits = hasConcretePreviewCommits
    ? [...visibleBranchCommits.slice(0, commitCount)]
    : [];
  const minCommitTimeX = forkTimeX;
  const maxCommitTimeX = Math.max(minCommitTimeX, commitTipTimeX);
  const commitItems: Array<BranchCommitPreview | undefined> = [
    ...displayedCommits,
    ...Array.from({ length: Math.max(0, commitCount - displayedCommits.length) }, () => undefined),
  ];
  const headCommitIndex = hasConcretePreviewCommits
    ? commitItems.findIndex((item) => item?.fullSha === b.headSha)
    : -1;
  const commitDots = commitItems.map((commit, index) => {
    const slotX = gridXForBranchSlot(b.name, index);
    const shaX = commit?.fullSha ? gridXForBranchSha(b.name, commit.fullSha) : undefined;
    const mappedX = slotX ?? shaX;
    const fallbackX = Math.max(
      minCommitTimeX,
      Math.min(maxCommitTimeX, timeToX(commit?.date ?? b.lastCommitDate))
    );
    const x = mappedX ?? fallbackX;
    return { y: timeCoordToY(x), commit };
  });
  const realCommitDotIndices = commitItems.reduce<number[]>((acc, item, index) => {
    if (item?.kind !== 'branch-created') acc.push(index);
    return acc;
  }, []);
  let branchEndDotIndex: number | null = null;
  if (realCommitDotIndices.length > 0) {
    const anchorIndex = headCommitIndex >= 0
      ? headCommitIndex
      : realCommitDotIndices[realCommitDotIndices.length - 1];
    branchEndDotIndex = anchorIndex;
  } else if (commitDots.length > 0) {
    branchEndDotIndex = commitDots.length - 1;
  }
  const targetLocalCommitCount = isLocalBranch
    ? (
      b.remoteSyncStatus === 'local-only'
        ? realCommitDotIndices.length
        : b.unpushedCommits
    )
    : 0;
  const boundedLocalCommitCount = Math.max(
    0,
    Math.min(targetLocalCommitCount, realCommitDotIndices.length),
  );
  const localCommitDotIndicesFromSha = new Set<number>(
    realCommitDotIndices.filter((index) => {
      const commit = commitItems[index];
      if (!commit?.fullSha) return false;
      return isCommitUnpushed(commit.fullSha, commit.sha ?? undefined);
    }),
  );
  const localCommitDotIndices = localCommitDotIndicesFromSha.size > 0
    ? localCommitDotIndicesFromSha
    : new Set(realCommitDotIndices.slice(realCommitDotIndices.length - boundedLocalCommitCount));
  const allBranchCommitsAreLocal =
    realCommitDotIndices.length > 0 &&
    boundedLocalCommitCount === realCommitDotIndices.length;
  const firstLocalDotIndex = localCommitDotIndices.size > 0
    ? Math.min(...Array.from(localCommitDotIndices))
    : null;
  const firstLocalCommitY = firstLocalDotIndex != null
    ? commitDots[firstLocalDotIndex]?.y
    : undefined;
  const previousCommittedIndex = firstLocalDotIndex != null
    ? (() => {
      const prior = realCommitDotIndices.filter((idx) => idx < firstLocalDotIndex);
      return prior.length > 0 ? prior[prior.length - 1] : undefined;
    })()
    : undefined;
  const localSegmentStartY =
    !allBranchCommitsAreLocal &&
      firstLocalCommitY != null &&
      previousCommittedIndex != null
      ? (
        (firstLocalCommitY + (commitDots[previousCommittedIndex]?.y ?? firstLocalCommitY)) / 2
      )
      : undefined;
  const fullBranchShouldUseLocalGray =
    isLocalBranch && (allBranchCommitsAreLocal || realCommitDotIndices.length === 0);
  const commitDotEntries: MarkerEntry<CommitEntryItem>[] =
    commitDots.map(({ y, commit }, index) => {
      const point = projectPoint(lanePosX, y);
      return {
        x: point.x,
        y: point.y,
        item: { index, commit },
      };
    });
  const branchForkIndices = new Set<number>();
  const branchChildBranches = childBranchesByParent.get(b.name) ?? [];
  if (branchChildBranches.length > 0) {
    const previews = renderableBranchPreviews(b);
    const branchTimes = previews.map((c) => new Date(c.date).getTime());
    branchChildBranches.forEach((child) => {
      const idx = branchPreviewIndexForChildFork(previews, branchTimes, child);
      if (idx >= 0) branchForkIndices.add(idx);
    });
  }
  const branchUncommittedSplitIndices = splitIndicesAroundUncommitted(
    commitDotEntries,
    (entry) =>
      !!entry.item.commit && isSyntheticLocalCommit(entry.item.commit)
  );
  const branchSplitIndices = new Set<number>([
    ...branchForkIndices,
    ...branchUncommittedSplitIndices,
  ]);
  const branchPreserveSplitIndices = new Set<number>([
    ...branchForkIndices,
    ...branchUncommittedSplitIndices,
  ]);
  const commitDotClusters = clusterByForkPoints(
    commitDotEntries,
    branchSplitIndices,
    branchPreserveSplitIndices,
  );

  const promptMarkersRaw = branchPromptMeta[b.name]?.markers ?? [];
  const promptSeeds = [...promptMarkersRaw]
    .sort((a, bx) => new Date(a.timestamp).getTime() - new Date(bx.timestamp).getTime());
  const promptMarkers = promptSeeds.map((marker) => {
    const rawX = timeToX(marker.timestamp);
    const x = Math.max(minCommitTimeX, Math.min(maxCommitTimeX, rawX));
    return {
      y: timeCoordToY(x),
      marker,
    };
  });
  const promptMarkerEntries: MarkerEntry<PromptEntryItem>[] =
    promptMarkers.map(({ y, marker }, markerIndex) => {
      const point = projectPoint(lanePosX, y);
      return {
        x: point.x,
        y: point.y,
        item: {
          marker,
          index: markerIndex,
        },
      };
    });
  const promptMarkerClusters = clusterByForkPoints(promptMarkerEntries, new Set<number>());

  const branchHasCheckedOutHead =
    checkedOutHeadSha != null &&
    (
      checkedOutBranchName
        ? checkedOutBranchName === b.name
        : (
          shaMatchesGitRef(b.headSha, checkedOutHeadSha) ||
          visibleBranchCommits.some((commit) =>
            shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
            shaMatchesGitRef(commit.sha, checkedOutHeadSha)
          )
        )
    );
  const brDelay = branchDelayMs.get(b.name) ?? 0;
  const hasOpenPR = openPRBranchNames.has(b.name);
  const daysSinceCommit = (Date.now() - new Date(b.lastCommitDate).getTime()) / 86400000;
  const showClockIcon = hasOpenPR && daysSinceCommit >= 60;
  const nameAnchor = projectPoint(lanePosX, forkY);
  const nameDx = isHorizontal ? 24 : 20;
  const nameDy = isHorizontal ? -20 : -12;
  const namePoint = { x: nameAnchor.x + nameDx, y: nameAnchor.y + nameDy };
  const clockPoint = { x: namePoint.x + 10, y: namePoint.y };

  return {
    forkY,
    lanePosX,
    startX,
    isMergedBranch,
    isLocalBranch,
    mergeNodeTimeX,
    branchLineTipY,
    mergeBackPath,
    curvePath,
    hitCurvePath,
    hasPreviewData,
    visibleBranchCommits,
    uniqueAheadCount,
    branchEndDotIndex,
    localCommitDotIndices,
    fullBranchShouldUseLocalGray,
    hasUncommittedPreview,
    localSegmentStartY,
    commitDotClusters,
    promptMarkerClusters,
    branchHasCheckedOutHead,
    brDelay,
    showClockIcon,
    namePoint,
    clockPoint,
    mergeTargetX,
    mergeTargetY,
  };
}
