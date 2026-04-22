import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { BranchCommitPreview, WorktreeInfo } from '../../types';
import {
  buildLanes,
  CARD_HEIGHT,
  CARD_BODY_TOP_OFFSET,
  CARD_WIDTH,
  type BranchGridViewProps,
  type Node,
} from './LayoutGrid';
import { computeBranchGridLayout } from './branchGridLayoutModel';
import type { BranchGridLayoutModel } from './branchGridLayoutModel';
import MapGridCanvas from './MapGridCanvas';
import MapGridControls from './MapGridControls';
import MapGridDebugPanel from './MapGridDebugPanel';
import MapGridDialogs from './MapGridDialogs';
import { useMapGridCamera } from './useMapGridCamera';
import { useMapGridSelection } from './useMapGridSelection';
import {
  GRID_COMMIT_CORNER_RADIUS_BASE_PX,
  GRID_CONNECTOR_CORNER_RADIUS_BASE_PX,
  GRID_CONNECTOR_GAP_PX,
  GRID_RENDER_ZOOM,
  MAP_GRID_CULL_VIEWPORT_INSET_SCREEN_PX,
  MAP_GRID_INNER_PADDING_PX,
  buildCommitCullSpatialIndex,
  collectVisibleCommitIdsFromSpatialIndex,
  getViewportContentBoundsFromClientSize,
  isUsableOtherWorktree,
  mergeOrthogonalConnectorIntersectsViewportBounds,
  roundedElbowConnectorIntersectsViewportBounds,
  roundedElbowVerticalFirstConnectorIntersectsViewportBounds,
  shaMatchesGitRef,
  visibleCommitIdSetEquals,
  withCullInsetScreenPx,
} from './mapGridUtils';

export default function BranchGridMap({
  branches,
  mergeNodes = [],
  directCommits = [],
  unpushedDirectCommits = [],
  unpushedCommitShasByBranch = {},
  openPRs = [],
  defaultBranch,
  onCommitClick,
  onLoadMore,
  view,
  staleBranches = [],
  isLoading = false,
  scrollRequest,
  focusedErrorBranch,
  mapTopInsetPx = 0,
  onMergeRefsIntoBranch,
  mergeInProgress = false,
  onPushAllBranches,
  onPushCurrentBranch,
  onPushCommitTargets,
  pushInProgress = false,
  onDeleteSelection,
  deleteInProgress = false,
  worktrees = [],
  currentRepoPath,
  onRemoveWorktree,
  removeWorktreeInProgress = false,
  onSwitchToWorktree,
  onStashLocalChanges,
  stashInProgress = false,
  stashDisabled = false,
  onCommitLocalChanges,
  commitInProgress = false,
  commitDisabled = false,
  onStageAllChanges,
  stageInProgress = false,
  onCreateBranchFromNode,
  onCreateRootBranch,
  createBranchFromNodeInProgress = false,
  orientation = 'horizontal',
  branchCommitPreviews = {},
  branchUniqueAheadCounts = {},
  gridSearchQuery = '',
  gridSearchJumpToken = 0,
  gridFocusSha = null,
  checkedOutRef = null,
  onGridSearchResultCountChange,
  onGridSearchFocusChange,
  onInteractionChange,
  manuallyOpenedClumps: controlledManuallyOpenedClumps,
  manuallyClosedClumps: controlledManuallyClosedClumps,
  setManuallyOpenedClumps: controlledSetManuallyOpenedClumps,
  setManuallyClosedClumps: controlledSetManuallyClosedClumps,
  layoutModel: providedLayoutModel,
}: BranchGridViewProps) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  /** `p-2.5` wrapper: used to map pointer position to the transform layer origin (padding edge). */
  const mapPadHostRef = useRef<HTMLDivElement | null>(null);
  const transformLayerRef = useRef<HTMLDivElement | null>(null);
  const [worktreeMenuOpen, setWorktreeMenuOpen] = useState(false);
  const [commitDialogOpen, setCommitDialogOpen] = useState(false);
  const [commitMessageDraft, setCommitMessageDraft] = useState('');
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [newBranchDialogOpen, setNewBranchDialogOpen] = useState(false);
  const [newBranchName, setNewBranchName] = useState('');
  const [newBranchCreateMode, setNewBranchCreateMode] = useState<'from-selected-node' | 'new-root'>(
    'from-selected-node',
  );
  const [localManuallyOpenedClumps, setLocalManuallyOpenedClumps] = useState<Set<string>>(() => new Set());
  const [localManuallyClosedClumps, setLocalManuallyClosedClumps] = useState<Set<string>>(() => new Set());
  const manuallyOpenedClumps = controlledManuallyOpenedClumps ?? localManuallyOpenedClumps;
  const manuallyClosedClumps = controlledManuallyClosedClumps ?? localManuallyClosedClumps;
  const setManuallyOpenedClumps = controlledSetManuallyOpenedClumps ?? setLocalManuallyOpenedClumps;
  const setManuallyClosedClumps = controlledSetManuallyClosedClumps ?? setLocalManuallyClosedClumps;
  const [isDebugOpen, setIsDebugOpen] = useState(false);
  const [visibleNodeIds, setVisibleNodeIds] = useState<Set<string> | null>(null);
  const [viewportClientSize, setViewportClientSize] = useState<{ width: number; height: number } | null>(null);
  const {
    isCameraMoving,
    renderedZoom,
    cameraRenderTick,
    renderedCameraRef,
    interactionIdleTimeoutRef,
    getTransformLayerOriginScreen,
    flushCameraReactTick,
    syncCamera,
    handleWheel,
  } = useMapGridCamera({ mapPadHostRef, transformLayerRef });

  const lanes = useMemo(
    () => buildLanes(branches, defaultBranch, branchCommitPreviews),
    [branches, defaultBranch, branchCommitPreviews],
  );
  const computedLayoutModel = useMemo(
    () =>
      computeBranchGridLayout({
        lanes,
        branches,
        mergeNodes,
        directCommits,
        unpushedDirectCommits,
        defaultBranch,
        branchCommitPreviews,
        branchUniqueAheadCounts,
        manuallyOpenedClumps,
        manuallyClosedClumps,
        isDebugOpen,
        gridSearchQuery,
        gridFocusSha,
        checkedOutRef: checkedOutRef ?? null,
        orientation,
      }),
    [
      lanes,
      branches,
      mergeNodes,
      directCommits,
      unpushedDirectCommits,
      defaultBranch,
      branchCommitPreviews,
      branchUniqueAheadCounts,
      manuallyOpenedClumps,
      manuallyClosedClumps,
      isDebugOpen,
      gridSearchQuery,
      gridFocusSha,
      checkedOutRef?.headSha ?? null,
      checkedOutRef?.branchName ?? null,
      orientation,
    ],
  );
  const layoutModel: BranchGridLayoutModel = providedLayoutModel ?? computedLayoutModel;

  const {
    allCommits,
    debugRows,
    branchDebugRows,
    clusterKeyByCommitId,
    leadByClusterKey,
    clusterCounts,
    matchingNodes,
    matchingNodeIds,
    normalizedSearchQuery,
    focusedNode,
    defaultCollapsedClumps,
    renderNodes,
    visibleNodesBySha,
    contentWidth,
    contentHeight,
    connectors,
    mergeConnectors,
    connectorDecisions,
    nodeWarnings,
    commitIdsWithRenderedAncestry,
    connectorParentShas,
    branchStartShas,
    branchOffNodeShas,
    crossBranchOutgoingShas,
    branchBaseCommitByName,
    pointFormatter,
  } = layoutModel;

  const isGridSearchActive = Boolean(normalizedSearchQuery);

  const displayZoom = renderedZoom / GRID_RENDER_ZOOM;
  const inverseZoomStyle = useMemo(
    () => ({
      transform: `scale(${1 / displayZoom})`,
      transformOrigin: 'top left' as const,
      width: `${100 * displayZoom}%`,
      height: `${100 * displayZoom}%`,
    }),
    [displayZoom],
  );
  const labelTopPx = -(20 / displayZoom);

  const nodeByVisualId = useMemo(() => {
    const m = new Map<string, Node>();
    for (const node of renderNodes) {
      m.set(node.commit.visualId, node);
    }
    return m;
  }, [renderNodes]);

  const commitCullSpatialIndex = useMemo(
    () => buildCommitCullSpatialIndex(renderNodes, labelTopPx),
    [renderNodes, labelTopPx],
  );

  const shouldRenderNode = (node: Node) => {
    const commitId = node.commit.id;
    const visualId = node.commit.visualId;
    if (isGridSearchActive && matchingNodeIds.has(commitId)) return true;
    if (focusedNode?.commit.id === commitId) return true;
    if (visibleNodeIds === null) return true;
    if (!visibleNodeIds.has(visualId)) return false;
    const ck = clusterKeyByCommitId.get(visualId);
    if (ck) {
      const count = clusterCounts.get(ck) ?? 1;
      if (count > 1) {
        const clusterExpanded =
          manuallyOpenedClumps.has(ck) ||
          (!defaultCollapsedClumps.has(ck) && !manuallyClosedClumps.has(ck));
        if (clusterExpanded) return true;
      }
    }
    return true;
  };

  const lineStrokeWidth = 1.5 / displayZoom;
  const connectorCornerRadiusPx = GRID_CONNECTOR_CORNER_RADIUS_BASE_PX;
  const commitCornerRadiusPx = GRID_COMMIT_CORNER_RADIUS_BASE_PX / displayZoom;
  const iconScaleStyle = useMemo(
    () => ({
      transform: `scale(${1 / displayZoom})`,
      transformOrigin: 'center' as const,
    }),
    [displayZoom],
  );

  const connectorParentAccentClass =
    'border-slate-400/70';
  const branchStartAccentClass =
    'border-blue-500';

  const branchByName = useMemo(() => new Map(branches.map((branch) => [branch.name, branch])), [branches]);
  const freshCopyBranchNames = useMemo(
    () => new Set(branches.filter((branch) => branch.commitsAhead === 0 && !branch.name.startsWith('*')).map((branch) => branch.name)),
    [branches],
  );
  const commitShaToBranchNames = useMemo(() => {
    const map = new Map<string, Set<string>>();
    for (const node of renderNodes) {
      const set = map.get(node.commit.id) ?? new Set<string>();
      set.add(node.commit.branchName);
      map.set(node.commit.id, set);
    }
    for (const commit of directCommits) {
      const set = map.get(commit.fullSha) ?? new Set<string>();
      set.add(defaultBranch);
      map.set(commit.fullSha, set);
    }
    return map;
  }, [renderNodes, directCommits, defaultBranch]);
  const unpushedCommitShasSetByBranch = useMemo(
    () =>
      new Map(
        Object.entries(unpushedCommitShasByBranch).map(([branchName, shas]) => [branchName, new Set(shas)] as const),
      ),
    [unpushedCommitShasByBranch],
  );
  const handlePointerReleaseNoMarquee = useCallback(() => {
    void interactionIdleTimeoutRef.current;
    flushCameraReactTick();
  }, [flushCameraReactTick, interactionIdleTimeoutRef]);
  const {
    isMarqueeSelecting,
    marqueeRect,
    selectedCommitShas,
    setSelectedCommitShas,
    mergeTargetCommitSha,
    setMergeTargetCommitSha,
    startMarqueeDrag,
  } = useMapGridSelection({
    scrollContainerRef,
    renderedCameraRef,
    getTransformLayerOriginScreen,
    renderNodes,
    shouldRenderNode,
    onPointerReleaseNoMarquee: handlePointerReleaseNoMarquee,
  });
  const selectableCommitShaSet = useMemo(() => new Set(renderNodes.map((node) => node.commit.id)), [renderNodes]);
  const selectedVisibleCommitShas = useMemo(
    () => selectedCommitShas.filter((sha) => selectableCommitShaSet.has(sha)),
    [selectedCommitShas, selectableCommitShaSet],
  );
  const branchPreviewContainsSha = useCallback(
    (branchName: string, sha: string): boolean => {
      if (!sha) return false;
      const previews = branchCommitPreviews[branchName] ?? [];
      if (previews.some((preview) => shaMatchesGitRef(preview.fullSha, sha) || shaMatchesGitRef(preview.sha, sha))) return true;
      const branch = branchByName.get(branchName);
      if (branch?.headSha && shaMatchesGitRef(branch.headSha, sha)) return true;
      return false;
    },
    [branchCommitPreviews, branchByName],
  );
  const checkedOutBranchName = checkedOutRef?.branchName ?? null;
  const checkedOutHeadSha = checkedOutRef?.headSha ?? null;
  const checkedOutIsDetached = checkedOutBranchName == null;

  const findOtherWorktreeForCommit = useCallback(
    (branchName: string, commitFullSha: string, commitShortSha: string): WorktreeInfo | null => {
      for (const wt of worktrees) {
        if (!isUsableOtherWorktree(wt, currentRepoPath)) continue;
        if (wt.branchName) {
          if (wt.branchName === branchName && shaMatchesGitRef(wt.headSha, commitFullSha)) return wt;
          continue;
        }
        if (!shaMatchesGitRef(wt.headSha, commitFullSha) && !shaMatchesGitRef(wt.headSha, commitShortSha)) continue;
        if (wt.parentSha && branchPreviewContainsSha(branchName, wt.parentSha)) return wt;
        if (branchPreviewContainsSha(branchName, wt.headSha)) return wt;
        const branch = branchByName.get(branchName);
        if (branch && shaMatchesGitRef(branch.headSha, wt.headSha)) return wt;
        if (branchName === defaultBranch && directCommits.some((commit) => shaMatchesGitRef(commit.fullSha, wt.headSha))) {
          return wt;
        }
      }
      return null;
    },
    [worktrees, currentRepoPath, branchPreviewContainsSha, branchByName, defaultBranch, directCommits],
  );

  const findWorktreeWithBranchCheckedOut = useCallback(
    (branchName: string): WorktreeInfo | null => {
      for (const wt of worktrees) {
        if (!isUsableOtherWorktree(wt, currentRepoPath)) continue;
        if (wt.branchName === branchName) return wt;
      }
      return null;
    },
    [worktrees, currentRepoPath],
  );

  const findOtherWorktreeByHeadSha = useCallback(
    (commitFullSha: string, commitShortSha: string): WorktreeInfo | null => {
      for (const wt of worktrees) {
        if (!isUsableOtherWorktree(wt, currentRepoPath)) continue;
        if (shaMatchesGitRef(wt.headSha, commitFullSha) || shaMatchesGitRef(wt.headSha, commitShortSha)) return wt;
      }
      return null;
    },
    [worktrees, currentRepoPath],
  );

  const branchCandidatesForCommit = useCallback(
    (sha: string): string[] => Array.from(commitShaToBranchNames.get(sha) ?? []),
    [commitShaToBranchNames],
  );

  const selectedCommitTargetOption = useMemo(() => {
    const byBranch = new Map<string, { targetSha: string; targetBranch: string; sourceRefs: string[] }>();
    for (const targetSha of selectedVisibleCommitShas) {
      const candidates = branchCandidatesForCommit(targetSha);
      if (candidates.length === 0) continue;
      const targetBranch = candidates.find((name) => name !== defaultBranch) ?? candidates[0];
      const sourceRefs = selectedVisibleCommitShas
        .filter((sha) => sha !== targetSha)
        .filter((sha) => {
          const sourceCandidates = new Set(branchCandidatesForCommit(sha));
          return !sourceCandidates.has(targetBranch);
        });
      byBranch.set(targetBranch, { targetSha, targetBranch, sourceRefs });
    }
    const options = Array.from(byBranch.values());
    const explicit = mergeTargetCommitSha
      ? options.find((option) => option.targetSha === mergeTargetCommitSha || option.targetBranch === (branchCandidatesForCommit(mergeTargetCommitSha)[0] ?? ''))
      : null;
    const selected = explicit ?? options[options.length - 1] ?? null;
    return {
      options,
      selected,
      targetBranch: selected?.targetBranch ?? null,
      sources: selected?.sourceRefs ?? [],
    };
  }, [selectedVisibleCommitShas, branchCandidatesForCommit, defaultBranch, mergeTargetCommitSha]);

  const pushableBranchByName = useMemo(() => {
    const entries = [
      ...(checkedOutBranchName === defaultBranch
        ? [{ name: defaultBranch, headSha: checkedOutHeadSha ?? '', unpushedCommits: unpushedDirectCommits.length, remoteSyncStatus: 'unpushed' as const }]
        : []),
      ...branches,
    ]
      .filter(
        (branch) =>
          !branch.name.startsWith('*') &&
          branch.unpushedCommits > 0 &&
          branch.remoteSyncStatus !== 'on-github',
      )
      .map((branch) => [branch.name, branch] as const);
    return new Map(entries);
  }, [branches, checkedOutBranchName, checkedOutHeadSha, defaultBranch, unpushedDirectCommits.length]);

  const selectedPushTargets = useMemo(() => {
    const resolvePushBranch = (targetSha: string): string | null => {
      const candidates = branchCandidatesForCommit(targetSha).filter((branchName) => pushableBranchByName.has(branchName));
      if (candidates.length === 0) return null;
      if (candidates.length === 1) return candidates[0];
      if (checkedOutBranchName && candidates.includes(checkedOutBranchName)) return checkedOutBranchName;
      return candidates.find((name) => name !== defaultBranch) ?? candidates[0];
    };
    const commitPreviewListForBranch = (branchName: string): BranchCommitPreview[] => {
      if (branchName === defaultBranch) {
        return unpushedDirectCommits.map((commit) => ({
          fullSha: commit.fullSha,
          sha: commit.sha,
          parentSha: commit.parentSha ?? null,
          message: commit.message,
          author: commit.author,
          date: commit.date,
          kind: commit.kind ?? 'commit',
        }));
      }
      return branchCommitPreviews[branchName] ?? [];
    };
    const map = new Map<string, { branchName: string; targetSha: string; targetIndex: number; commitCount: number }>();
    for (const sha of selectedVisibleCommitShas) {
      const targetBranch = resolvePushBranch(sha);
      if (!targetBranch) continue;
      const branch = pushableBranchByName.get(targetBranch);
      if (!branch) continue;
      const unpushedPreviews = commitPreviewListForBranch(targetBranch).slice(0, branch.unpushedCommits);
      const targetIndex = unpushedPreviews.findIndex((commit) => commit.fullSha === sha);
      if (targetIndex === -1) continue;
      const existing = map.get(targetBranch);
      if (!existing || targetIndex < existing.targetIndex) {
        map.set(targetBranch, {
          branchName: targetBranch,
          targetSha: sha,
          targetIndex,
          commitCount: unpushedPreviews.length - targetIndex,
        });
      }
    }
    return Array.from(map.values());
  }, [
    selectedVisibleCommitShas,
    branchCandidatesForCommit,
    pushableBranchByName,
    checkedOutBranchName,
    defaultBranch,
    unpushedDirectCommits,
    branchCommitPreviews,
  ]);

  const selectedStashIndices = useMemo(
    () =>
      Array.from(
        new Set(
          selectedVisibleCommitShas
            .map((sha) => /^STASH:(\d+)$/.exec(sha))
            .filter((match): match is RegExpExecArray => !!match)
            .map((match) => parseInt(match[1], 10)),
        ),
      ).sort((a, b) => a - b),
    [selectedVisibleCommitShas],
  );
  const hasSelectedUncommittedChanges = selectedVisibleCommitShas.includes('WORKING_TREE');
  const deletableSelectionCount = (hasSelectedUncommittedChanges ? 1 : 0) + selectedStashIndices.length;
  const deleteSelectionItems = [
    ...(hasSelectedUncommittedChanges ? ['Uncommitted changes'] : []),
    ...selectedStashIndices.map((idx) => `Stash ${idx + 1}`),
  ];
  const pushableRemoteBranchCount = pushableBranchByName.size;
  const canPushCurrentBranch = !checkedOutIsDetached && !!checkedOutBranchName && pushableBranchByName.has(checkedOutBranchName);
  const pushCurrentBranchLabel = checkedOutBranchName ? `Push ${checkedOutBranchName}` : 'Push current branch';
  const selectedPushLabel = selectedPushTargets.length === 1
    ? selectedPushTargets[0].commitCount > 1
      ? `Push ${selectedPushTargets[0].commitCount} commits on ${selectedPushTargets[0].branchName}`
      : `Push ${selectedPushTargets[0].targetSha.slice(0, 7)} on ${selectedPushTargets[0].branchName}`
    : `Push ${selectedPushTargets.length} selected ranges`;

  useEffect(() => {
    onInteractionChange?.(isCameraMoving || isMarqueeSelecting);
  }, [isCameraMoving, isMarqueeSelecting, onInteractionChange]);

  useEffect(() => {
    onGridSearchResultCountChange?.(normalizedSearchQuery ? matchingNodes.length : null);
  }, [matchingNodes.length, normalizedSearchQuery, onGridSearchResultCountChange]);

  useEffect(() => {
    if (!normalizedSearchQuery) {
      onGridSearchFocusChange?.(null);
      return;
    }
    const firstMatch = matchingNodes[0]?.commit.id ?? null;
    onGridSearchFocusChange?.(firstMatch);
  }, [matchingNodes, normalizedSearchQuery, onGridSearchFocusChange]);

  useLayoutEffect(() => {
    if (!gridFocusSha) return;
    const viewport = scrollContainerRef.current;
    const focusNode = focusedNode;
    if (!viewport || !focusNode) return;
    const origin = getTransformLayerOriginScreen();
    if (!origin) return;
    const viewportRect = viewport.getBoundingClientRect();
    const targetZoom = renderedCameraRef.current.zoom;
    const scale = targetZoom / GRID_RENDER_ZOOM;
    const nodeCenterX = focusNode.x + CARD_WIDTH / 2;
    const nodeCenterY = focusNode.y + CARD_BODY_TOP_OFFSET + CARD_HEIGHT / 2;
    const targetScreenX = viewportRect.left + viewportRect.width / 2;
    const targetScreenY = viewportRect.top + viewportRect.height / 2;
    syncCamera(
      targetScreenX - origin.x - nodeCenterX * scale,
      targetScreenY - origin.y - nodeCenterY * scale,
      targetZoom,
    );
  }, [gridFocusSha, gridSearchJumpToken, focusedNode, getTransformLayerOriginScreen]);

  const viewportClientW = viewportClientSize?.width ?? scrollContainerRef.current?.clientWidth ?? 0;
  const viewportClientH = viewportClientSize?.height ?? scrollContainerRef.current?.clientHeight ?? 0;
  const rawVisibleBounds =
    viewportClientW > 0 && viewportClientH > 0
      ? getViewportContentBoundsFromClientSize(viewportClientW, viewportClientH, renderedCameraRef.current, {
          innerPaddingPx: MAP_GRID_INNER_PADDING_PX,
        })
      : null;
  const visibleBounds =
    rawVisibleBounds != null
      ? withCullInsetScreenPx(
          rawVisibleBounds,
          renderedCameraRef.current.zoom,
          MAP_GRID_CULL_VIEWPORT_INSET_SCREEN_PX,
        )
      : null;
  const cullConnectorPath = (connector: { id: string; fromX: number; fromY: number; toX: number; toY: number }): boolean => {
    if (!visibleBounds) return true;
    const { fromX, fromY, toX, toY } = connector;
    if (connector.id.startsWith('merge:')) {
      if (orientation === 'horizontal') {
        return roundedElbowConnectorIntersectsViewportBounds(
          fromX,
          fromY,
          toX,
          toY,
          connectorCornerRadiusPx,
          GRID_CONNECTOR_GAP_PX,
          visibleBounds,
        );
      }
      return mergeOrthogonalConnectorIntersectsViewportBounds(
        fromX,
        fromY,
        toX,
        toY,
        connectorCornerRadiusPx,
        visibleBounds,
      );
    }
    const useVerticalFirst = orientation === 'horizontal' && Math.abs(toY - fromY) > Math.abs(toX - fromX);
    if (useVerticalFirst) {
      return roundedElbowVerticalFirstConnectorIntersectsViewportBounds(
        fromX,
        fromY,
        toX,
        toY,
        connectorCornerRadiusPx,
        GRID_CONNECTOR_GAP_PX,
        visibleBounds,
      );
    }
    return roundedElbowConnectorIntersectsViewportBounds(
      fromX,
      fromY,
      toX,
      toY,
      connectorCornerRadiusPx,
      GRID_CONNECTOR_GAP_PX,
      visibleBounds,
    );
  };

  useLayoutEffect(() => {
    const viewport = scrollContainerRef.current;
    if (!viewport) return;
    if (viewport.clientWidth <= 0 || viewport.clientHeight <= 0) return;
    const w = viewport.clientWidth;
    const h = viewport.clientHeight;
    setViewportClientSize((prev) => (prev?.width === w && prev?.height === h ? prev : { width: w, height: h }));
    const rawBounds = getViewportContentBoundsFromClientSize(w, h, renderedCameraRef.current, {
      innerPaddingPx: MAP_GRID_INNER_PADDING_PX,
    });
    if (!rawBounds) {
      setVisibleNodeIds((prev) => (prev === null ? prev : null));
      return;
    }
    const bounds = withCullInsetScreenPx(
      rawBounds,
      renderedCameraRef.current.zoom,
      MAP_GRID_CULL_VIEWPORT_INSET_SCREEN_PX,
    );
    const nextVisible = collectVisibleCommitIdsFromSpatialIndex(
      commitCullSpatialIndex,
      bounds,
      nodeByVisualId,
      labelTopPx,
    );
    /* Expanded clumps: spatial cull rects use live zoom while row layout uses GRID_LAYOUT_RENDER_ZOOM — they
     * can disagree, so commits stay out of visibleNodeIds. Always allow laid-out commits for open
     * multi-commit clusters into the viewport set. */
    for (const node of renderNodes) {
      const ck = clusterKeyByCommitId.get(node.commit.visualId);
      if (!ck) continue;
      const count = clusterCounts.get(ck) ?? 1;
      if (count <= 1) continue;
      const clusterExpanded =
        manuallyOpenedClumps.has(ck) ||
        (!defaultCollapsedClumps.has(ck) && !manuallyClosedClumps.has(ck));
      if (clusterExpanded) nextVisible.add(node.commit.visualId);
    }
    setVisibleNodeIds((prev) => (visibleCommitIdSetEquals(prev, nextVisible) ? prev : nextVisible));
  }, [
    renderedZoom,
    gridSearchJumpToken,
    gridFocusSha,
    isCameraMoving,
    cameraRenderTick,
    manuallyOpenedClumps,
    manuallyClosedClumps,
    defaultCollapsedClumps,
    clusterKeyByCommitId,
    clusterCounts,
    renderNodes,
    viewportClientSize,
    commitCullSpatialIndex,
    nodeByVisualId,
    labelTopPx,
  ]);

  useLayoutEffect(() => {
    const viewport = scrollContainerRef.current;
    if (!viewport) return;
    const handleResize = () => {
      const w = viewport.clientWidth;
      const h = viewport.clientHeight;
      if (w <= 0 || h <= 0) return;
      setViewportClientSize((prev) => (prev?.width === w && prev?.height === h ? prev : { width: w, height: h }));
    };
    handleResize();
    const ro = new ResizeObserver(handleResize);
    ro.observe(viewport);
    return () => ro.disconnect();
  }, [allCommits.length]);

  const renderedNodeCount = renderNodes.filter((node) => shouldRenderNode(node)).length;
  const renderedMergeConnectorCount = mergeConnectors.filter((connector) => cullConnectorPath(connector)).length;
  const renderedConnectorCount = connectors.filter((connector) => cullConnectorPath(connector)).length;

  const handleCommitCardClick = useCallback(
    (event: React.MouseEvent, node: Node) => {
      event.stopPropagation();
      const commitSha = node.commit.id;
      if (event.shiftKey) {
        setSelectedCommitShas((prev) =>
          prev.includes(commitSha)
            ? prev.filter((sha) => sha !== commitSha)
            : [...prev, commitSha],
        );
        setMergeTargetCommitSha(commitSha);
      } else {
        setSelectedCommitShas((prev) => (prev.includes(commitSha) ? [] : [commitSha]));
        setMergeTargetCommitSha((current) => (current === commitSha ? null : commitSha));
      }

      const shouldCheckout = event.metaKey || event.ctrlKey || event.detail >= 2;
      if (!shouldCheckout) return;
      if (commitSha === 'WORKING_TREE') return;

      const shortSha = commitSha.length >= 40 ? commitSha.slice(0, 7) : commitSha;
      let otherWorktree: WorktreeInfo | null = null;
      if (node.commit.branchName) {
        otherWorktree = findOtherWorktreeForCommit(node.commit.branchName, commitSha, shortSha);
        if (!otherWorktree) {
          otherWorktree = findWorktreeWithBranchCheckedOut(node.commit.branchName);
        }
      } else {
        otherWorktree = findOtherWorktreeByHeadSha(commitSha, shortSha);
      }
      if (otherWorktree && onSwitchToWorktree) {
        void onSwitchToWorktree(otherWorktree.path);
        return;
      }
      onCommitClick?.({ commitSha });
    },
    [
      findOtherWorktreeByHeadSha,
      findOtherWorktreeForCommit,
      findWorktreeWithBranchCheckedOut,
      onCommitClick,
      onSwitchToWorktree,
    ],
  );

  const confirmCommit = useCallback(async () => {
    if (!onCommitLocalChanges) return;
    const ok = await onCommitLocalChanges(commitMessageDraft);
    if (ok) {
      setCommitDialogOpen(false);
      setCommitMessageDraft('');
    }
  }, [onCommitLocalChanges, commitMessageDraft]);

  const confirmDeleteSelection = useCallback(async () => {
    if (!onDeleteSelection) return;
    await onDeleteSelection({
      branchNames: [],
      discardUncommittedChanges: hasSelectedUncommittedChanges,
      stashIndices: selectedStashIndices,
    });
    setDeleteConfirmOpen(false);
    setSelectedCommitShas([]);
    setMergeTargetCommitSha(null);
  }, [onDeleteSelection, hasSelectedUncommittedChanges, selectedStashIndices]);

  const confirmCreateBranchFromSelection = useCallback(async () => {
    const trimmed = newBranchName.trim();
    if (!trimmed) return;
    if (newBranchCreateMode === 'new-root') {
      if (!onCreateRootBranch) return;
      await onCreateRootBranch(trimmed);
    } else {
      if (!onCreateBranchFromNode || selectedVisibleCommitShas.length !== 1) return;
      const target = selectedVisibleCommitShas[0];
      if (!(target === 'WORKING_TREE' || target.startsWith('STASH:'))) return;
      await onCreateBranchFromNode(target, trimmed);
    }
    setNewBranchDialogOpen(false);
    setNewBranchName('');
    setNewBranchCreateMode('from-selected-node');
    setSelectedCommitShas([]);
    setMergeTargetCommitSha(null);
  }, [newBranchCreateMode, newBranchName, onCreateBranchFromNode, onCreateRootBranch, selectedVisibleCommitShas]);

  const selectedCommitCanCreateBranch =
    selectedVisibleCommitShas.length === 1 &&
    (selectedVisibleCommitShas[0] === 'WORKING_TREE' || selectedVisibleCommitShas[0].startsWith('STASH:'));
  const canCreateRootBranch = Boolean(onCreateRootBranch);

  useEffect(() => {
    if (!newBranchDialogOpen) return;
    if (!selectedCommitCanCreateBranch && canCreateRootBranch) {
      setNewBranchCreateMode('new-root');
      return;
    }
    if (selectedCommitCanCreateBranch) {
      setNewBranchCreateMode('from-selected-node');
    }
  }, [canCreateRootBranch, newBranchDialogOpen, selectedCommitCanCreateBranch]);

  void [openPRs, onLoadMore, view, staleBranches, isLoading, scrollRequest, focusedErrorBranch, mapTopInsetPx, visibleNodesBySha, freshCopyBranchNames];

  return (
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden border border-border bg-card">
      <MapGridDebugPanel
        isOpen={isDebugOpen}
        onToggle={() => setIsDebugOpen((open) => !open)}
        onClose={() => setIsDebugOpen(false)}
        visibleBounds={visibleBounds}
        renderedNodeCount={renderedNodeCount}
        totalNodeCount={renderNodes.length}
        renderedMergeConnectorCount={renderedMergeConnectorCount}
        totalMergeConnectorCount={mergeConnectors.length}
        renderedConnectorCount={renderedConnectorCount}
        totalConnectorCount={connectors.length}
        mapGridCullViewportInsetScreenPx={MAP_GRID_CULL_VIEWPORT_INSET_SCREEN_PX}
        debugRows={debugRows}
        branchDebugRows={branchDebugRows}
        connectorDecisions={connectorDecisions}
      />
      {allCommits.length === 0 ? (
        <div className="flex flex-1 min-h-0 items-center justify-center py-20">
          <div className="rounded-xl border border-border/50 bg-muted/30 px-4 py-3">
            <p className="text-sm text-muted-foreground">No commits to render</p>
          </div>
        </div>
      ) : (
        <MapGridCanvas
          scrollContainerRef={scrollContainerRef}
          mapPadHostRef={mapPadHostRef}
          transformLayerRef={transformLayerRef}
          isMarqueeSelecting={isMarqueeSelecting}
          contentWidth={contentWidth}
          contentHeight={contentHeight}
          isCameraMoving={isCameraMoving}
          onWheel={handleWheel}
          onMouseDown={startMarqueeDrag}
          labelTopPx={labelTopPx}
          inverseZoomStyle={inverseZoomStyle}
          displayZoom={displayZoom}
          iconScaleStyle={iconScaleStyle}
          selectedVisibleCommitShas={selectedVisibleCommitShas}
          normalizedSearchQuery={normalizedSearchQuery}
          matchingNodeIds={matchingNodeIds}
          focusedNode={focusedNode}
          renderNodes={renderNodes}
          shouldRenderNode={shouldRenderNode}
          manuallyOpenedClumps={manuallyOpenedClumps}
          manuallyClosedClumps={manuallyClosedClumps}
          defaultCollapsedClumps={defaultCollapsedClumps}
          leadByClusterKey={leadByClusterKey}
          clusterKeyByCommitId={clusterKeyByCommitId}
          clusterCounts={clusterCounts}
          commitIdsWithRenderedAncestry={commitIdsWithRenderedAncestry}
          nodeWarnings={nodeWarnings}
          connectorParentShas={connectorParentShas}
          branchStartShas={branchStartShas}
          branchOffNodeShas={branchOffNodeShas}
          crossBranchOutgoingShas={crossBranchOutgoingShas}
          branchBaseCommitByName={branchBaseCommitByName}
          branchStartAccentClass={branchStartAccentClass}
          connectorParentAccentClass={connectorParentAccentClass}
          commitCornerRadiusPx={commitCornerRadiusPx}
          lineStrokeWidth={lineStrokeWidth}
          connectorCornerRadiusPx={connectorCornerRadiusPx}
          pointFormatter={pointFormatter}
          connectors={connectors}
          mergeConnectors={mergeConnectors}
          cullConnectorPath={cullConnectorPath}
          mapOrientation={orientation}
          flushCameraReactTick={flushCameraReactTick}
          setManuallyOpenedClumps={setManuallyOpenedClumps}
          setManuallyClosedClumps={setManuallyClosedClumps}
          onCommitCardClick={handleCommitCardClick}
          unpushedCommitShasSetByBranch={unpushedCommitShasSetByBranch}
          checkedOutHeadSha={checkedOutHeadSha}
        />
      )}

      {marqueeRect && isMarqueeSelecting ? (
        <div
          className="pointer-events-none absolute z-[60] border"
          style={{
            left: marqueeRect.left,
            top: marqueeRect.top,
            width: marqueeRect.width,
            height: marqueeRect.height,
            borderColor: '#068CFD',
            borderWidth: '1.5px',
            backgroundColor: 'transparent',
            borderRadius: 0,
          }}
        />
      ) : null}

      <MapGridControls
        selectedVisibleCommitShas={selectedVisibleCommitShas}
        commitInProgress={commitInProgress}
        commitDisabled={commitDisabled}
        stageInProgress={stageInProgress}
        stashInProgress={stashInProgress}
        stashDisabled={stashDisabled}
        pushInProgress={pushInProgress}
        deleteInProgress={deleteInProgress}
        createBranchFromNodeInProgress={createBranchFromNodeInProgress}
        onCommitLocalChanges={onCommitLocalChanges}
        onStageAllChanges={onStageAllChanges ? () => void onStageAllChanges() : undefined}
        onStashLocalChanges={onStashLocalChanges}
        onPushCurrentBranch={onPushCurrentBranch}
        onPushAllBranches={onPushAllBranches}
        onPushCommitTargets={onPushCommitTargets}
        onDeleteSelection={onDeleteSelection}
        onCreateBranchFromNode={onCreateBranchFromNode}
        onMergeRefsIntoBranch={onMergeRefsIntoBranch}
        selectedPushTargets={selectedPushTargets}
        selectedPushLabel={selectedPushLabel}
        canPushCurrentBranch={canPushCurrentBranch}
        pushCurrentBranchLabel={pushCurrentBranchLabel}
        pushableRemoteBranchCount={pushableRemoteBranchCount}
        deletableSelectionCount={deletableSelectionCount}
        canCreateRootBranch={canCreateRootBranch}
        selectedCommitTargetOption={selectedCommitTargetOption}
        mergeInProgress={mergeInProgress}
        mergeTargetCommitSha={mergeTargetCommitSha}
        setMergeTargetCommitSha={setMergeTargetCommitSha}
        worktrees={worktrees}
        currentRepoPath={currentRepoPath}
        worktreeMenuOpen={worktreeMenuOpen}
        setWorktreeMenuOpen={setWorktreeMenuOpen}
        onSwitchToWorktree={onSwitchToWorktree}
        onRemoveWorktree={onRemoveWorktree}
        removeWorktreeInProgress={removeWorktreeInProgress}
        setCommitDialogOpen={setCommitDialogOpen}
        setDeleteConfirmOpen={setDeleteConfirmOpen}
        setNewBranchDialogOpen={setNewBranchDialogOpen}
      />

      <MapGridDialogs
        commitDialogOpen={commitDialogOpen}
        commitMessageDraft={commitMessageDraft}
        onCommitMessageDraftChange={setCommitMessageDraft}
        onCommitDialogClose={() => setCommitDialogOpen(false)}
        onCommitConfirm={() => void confirmCommit()}
        commitInProgress={commitInProgress}
        deleteConfirmOpen={deleteConfirmOpen}
        deleteSelectionItems={deleteSelectionItems}
        onDeleteConfirmClose={() => setDeleteConfirmOpen(false)}
        onDeleteConfirm={() => void confirmDeleteSelection()}
        deleteInProgress={deleteInProgress}
        deletableSelectionCount={deletableSelectionCount}
        newBranchDialogOpen={newBranchDialogOpen}
        newBranchName={newBranchName}
        newBranchCreateMode={newBranchCreateMode}
        onNewBranchNameChange={setNewBranchName}
        onNewBranchCreateModeChange={setNewBranchCreateMode}
        onNewBranchDialogClose={() => setNewBranchDialogOpen(false)}
        onNewBranchConfirm={() => void confirmCreateBranchFromSelection()}
        selectedCommitCanCreateBranch={selectedCommitCanCreateBranch}
        createBranchFromNodeInProgress={createBranchFromNodeInProgress}
      />
    </div>
  );
}
