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
  type ConnectorFace,
  type NodePositionOverrides,
  type Node,
} from './LayoutGrid';
import { computeBranchGridLayout } from './branchGridLayoutModel';
import type { BranchGridLayoutModel } from './branchGridLayoutModel';
import CommitControls from './CommitControls';
import MapGridCanvas from './MapGridCanvas';
import MapGridDebugPanel from './MapGridDebugPanel';
import MapGridDialogs from './MapGridDialogs';
import MapOrientationToggle from './MapOrientationToggle';
import MapSearchBar from './MapSearchBar';
import { useMapGridCamera } from './useMapGridCamera';
import { useMapGridSelection } from './useMapGridSelection';
import {
  GRID_COMMIT_CORNER_RADIUS_BASE_PX,
  GRID_RENDER_ZOOM,
  MAP_GRID_CULL_VIEWPORT_INSET_SCREEN_PX,
  MAP_GRID_INNER_PADDING_PX,
  buildCommitCullSpatialIndex,
  collectVisibleCommitIdsFromSpatialIndex,
  getViewportContentBoundsFromClientSize,
  isUsableOtherWorktree,
  looseCableConnectorIntersectsViewportBounds,
  shaMatchesGitRef,
  visibleCommitIdSetEquals,
  withCullInsetScreenPx,
} from './mapGridUtils';

type Props = BranchGridViewProps & {
  isDebugOpen?: boolean;
  onDebugClose?: () => void;
  gridHudProps?: {
    githubAuthStatus: { ghAvailable: boolean; authenticated: boolean } | null;
    githubAuthLoading: boolean;
    onGitHubAuthSetup: () => void;
    gridSearchQuery: string;
    setGridSearchQuery: (value: string) => void;
    gridSearchResultCount: number | null;
    gridSearchResultIndex: number | null;
    setGridSearchJumpDirection: (direction: 1 | -1) => void;
    setGridSearchJumpToken: (token: number | ((token: number) => number)) => void;
    mapGridOrientation: import('./MapViewGrid').OrientationMode;
    setMapGridOrientation: (orientation: import('./MapViewGrid').OrientationMode) => void;
    setIsGridDebugOpen: (open: boolean | ((open: boolean) => boolean)) => void;
    githubAuthMessage: string | null;
    commitSwitchFeedback: { kind: 'success' | 'error'; message: string } | null;
    isCommitSwitchFeedbackVisible: boolean;
  };
};

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
  isDebugOpen = false,
  onDebugClose,
  orientation = 'horizontal',
  branchCommitPreviews = {},
  branchParentByName = {},
  branchUniqueAheadCounts = {},
  gridSearchQuery = '',
  gridSearchJumpToken = 0,
  gridSearchJumpDirection = 1,
  gridFocusSha = null,
  checkedOutRef = null,
  onGridSearchResultCountChange,
  onGridSearchResultIndexChange,
  onGridSearchFocusChange,
  onInteractionChange,
  manuallyOpenedClumps: controlledManuallyOpenedClumps,
  manuallyClosedClumps: controlledManuallyClosedClumps,
  setManuallyOpenedClumps: controlledSetManuallyOpenedClumps,
  setManuallyClosedClumps: controlledSetManuallyClosedClumps,
  layoutModel: providedLayoutModel,
  gridHudProps,
}: Props) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  /** `p-2.5` wrapper: used to map pointer position to the transform layer origin (padding edge). */
  const mapPadHostRef = useRef<HTMLDivElement | null>(null);
  const transformLayerRef = useRef<HTMLDivElement | null>(null);
  const lastInteractionStateRef = useRef<boolean | null>(null);
  const lastSearchResultCountRef = useRef<number | null | undefined>(undefined);
  const lastSearchResultIndexRef = useRef<number | null | undefined>(undefined);
  const lastSearchFocusShaRef = useRef<string | null | undefined>(undefined);
  const lastHandledSearchJumpTokenRef = useRef<number>(0);
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
  const [nodePositionOverrides, setNodePositionOverrides] = useState<NodePositionOverrides>({});
  const suppressNextCommitClickRef = useRef(false);
  const dragNodeRef = useRef<{
    nodeId: string;
    startX: number;
    startY: number;
    baseX: number;
    baseY: number;
    moved: boolean;
    pendingX: number;
    pendingY: number;
  } | null>(null);
  const dragRafRef = useRef<number | null>(null);
  const manuallyOpenedClumps = controlledManuallyOpenedClumps ?? localManuallyOpenedClumps;
  const manuallyClosedClumps = controlledManuallyClosedClumps ?? localManuallyClosedClumps;
  const setManuallyOpenedClumps = controlledSetManuallyOpenedClumps ?? setLocalManuallyOpenedClumps;
  const setManuallyClosedClumps = controlledSetManuallyClosedClumps ?? setLocalManuallyClosedClumps;
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
    () => buildLanes(branches, defaultBranch, branchCommitPreviews, branchParentByName),
    [branches, defaultBranch, branchCommitPreviews, branchParentByName],
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
        branchParentByName,
        branchUniqueAheadCounts,
        manuallyOpenedClumps,
        manuallyClosedClumps,
        isDebugOpen,
        gridSearchQuery,
        gridFocusSha,
        checkedOutRef: checkedOutRef ?? null,
        orientation,
        nodePositionOverrides,
      }),
    [
      lanes,
      branches,
      mergeNodes,
      directCommits,
      unpushedDirectCommits,
      defaultBranch,
      branchCommitPreviews,
      branchParentByName,
      branchUniqueAheadCounts,
      manuallyOpenedClumps,
      manuallyClosedClumps,
      isDebugOpen,
      gridSearchQuery,
      gridFocusSha,
      checkedOutRef?.headSha ?? null,
      checkedOutRef?.branchName ?? null,
      orientation,
      nodePositionOverrides,
    ],
  );
  const hasNodeOverrides = Object.keys(nodePositionOverrides).length > 0;
  const layoutModel: BranchGridLayoutModel = hasNodeOverrides ? computedLayoutModel : (providedLayoutModel ?? computedLayoutModel);
  const debugLayoutModel: BranchGridLayoutModel = useMemo(
    () =>
      computeBranchGridLayout({
        lanes,
        branches,
        mergeNodes,
        directCommits,
        unpushedDirectCommits,
        defaultBranch,
        branchCommitPreviews,
        branchParentByName,
        branchUniqueAheadCounts,
        manuallyOpenedClumps,
        manuallyClosedClumps,
        isDebugOpen,
        gridSearchQuery,
        gridFocusSha,
        checkedOutRef: checkedOutRef ?? null,
        orientation,
        nodePositionOverrides,
      }),
    [
      lanes,
      branches,
      mergeNodes,
      directCommits,
      unpushedDirectCommits,
      defaultBranch,
      branchCommitPreviews,
      branchParentByName,
      branchUniqueAheadCounts,
      manuallyOpenedClumps,
      manuallyClosedClumps,
      isDebugOpen,
      gridSearchQuery,
      gridFocusSha,
      checkedOutRef?.headSha ?? null,
      checkedOutRef?.branchName ?? null,
      orientation,
      nodePositionOverrides,
    ],
  );

  const {
    allCommits,
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
  const hasUncommittedChanges = checkedOutRef?.hasUncommittedChanges ?? false;
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
      if (commit.branch) set.add(commit.branch);
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
  const focusedRenderNode = useMemo(() => {
    if (!gridFocusSha) return null;
    const candidates = renderNodes.filter((node) => node.commit.id === gridFocusSha);
    if (candidates.length === 0) return null;
    if (candidates.length === 1 || !focusedNode) return candidates[0];
    return candidates.reduce((best, candidate) => {
      const bestDistance = (best.x - focusedNode.x) ** 2 + (best.y - focusedNode.y) ** 2;
      const candidateDistance = (candidate.x - focusedNode.x) ** 2 + (candidate.y - focusedNode.y) ** 2;
      return candidateDistance < bestDistance ? candidate : best;
    });
  }, [gridFocusSha, renderNodes, focusedNode]);

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
    const next = isCameraMoving || isMarqueeSelecting;
    if (lastInteractionStateRef.current === next) return;
    lastInteractionStateRef.current = next;
    onInteractionChange?.(next);
  }, [isCameraMoving, isMarqueeSelecting, onInteractionChange]);

  useEffect(() => {
    const next = normalizedSearchQuery ? matchingNodes.length : null;
    if (lastSearchResultCountRef.current === next) return;
    lastSearchResultCountRef.current = next;
    onGridSearchResultCountChange?.(next);
  }, [matchingNodes.length, normalizedSearchQuery, onGridSearchResultCountChange]);

  useEffect(() => {
    const next =
      normalizedSearchQuery && gridFocusSha
        ? (() => {
            const index = matchingNodes.findIndex((node) => node.commit.id === gridFocusSha);
            return index >= 0 ? index : null;
          })()
        : null;
    if (lastSearchResultIndexRef.current === next) return;
    lastSearchResultIndexRef.current = next;
    onGridSearchResultIndexChange?.(next);
  }, [gridFocusSha, matchingNodes, normalizedSearchQuery, onGridSearchResultIndexChange]);

  const searchMatchedBranchHeadSha = useMemo(() => {
    if (!normalizedSearchQuery) return null;
    const query = normalizedSearchQuery;
    const branchNames = branches.map((branch) => branch.name);
    const exactBranchName = branchNames.find((branchName) => branchName.toLowerCase() === query);
    const startsWithBranchName =
      exactBranchName ?? branchNames.find((branchName) => branchName.toLowerCase().startsWith(query));
    const includesBranchName =
      startsWithBranchName ?? branchNames.find((branchName) => branchName.toLowerCase().includes(query));
    const matchedBranchName = includesBranchName;
    if (!matchedBranchName) return null;

    const matchedBranch = branches.find((branch) => branch.name === matchedBranchName) ?? null;
    if (matchedBranch?.headSha) return matchedBranch.headSha;

    const previews = branchCommitPreviews[matchedBranchName] ?? [];
    if (previews.length > 0) return previews[0]?.fullSha ?? null;

    if (matchedBranchName === defaultBranch) {
      return directCommits[0]?.fullSha ?? null;
    }
    return null;
  }, [normalizedSearchQuery, branches, branchCommitPreviews, defaultBranch, directCommits]);

  useEffect(() => {
    if (!normalizedSearchQuery) {
      lastHandledSearchJumpTokenRef.current = gridSearchJumpToken;
      if (lastSearchFocusShaRef.current === null) return;
      lastSearchFocusShaRef.current = null;
      onGridSearchFocusChange?.(null);
      return;
    }

    if (gridSearchJumpToken <= 0) return;
    if (lastHandledSearchJumpTokenRef.current === gridSearchJumpToken) return;
    lastHandledSearchJumpTokenRef.current = gridSearchJumpToken;

    let nextFocusSha: string | null;
    const currentIndex = gridFocusSha ? matchingNodes.findIndex((node) => node.commit.id === gridFocusSha) : -1;
    const nextIndex = matchingNodes.length > 0
      ? (currentIndex < 0
          ? 0
          : (currentIndex + gridSearchJumpDirection + matchingNodes.length) % matchingNodes.length)
      : -1;
    nextFocusSha = matchingNodes[nextIndex]?.commit.id ?? searchMatchedBranchHeadSha ?? null;
    if (lastSearchFocusShaRef.current === nextFocusSha) return;
    lastSearchFocusShaRef.current = nextFocusSha;
    onGridSearchFocusChange?.(nextFocusSha);
  }, [
    matchingNodes,
    normalizedSearchQuery,
    onGridSearchFocusChange,
    searchMatchedBranchHeadSha,
    gridSearchJumpToken,
    gridSearchJumpDirection,
  ]);

  useLayoutEffect(() => {
    if (!gridFocusSha) return;
    const viewport = scrollContainerRef.current;
    const focusNode = focusedRenderNode;
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
  }, [gridFocusSha, gridSearchJumpToken, focusedRenderNode, getTransformLayerOriginScreen, syncCamera, renderedCameraRef]);

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
  const cullConnectorPath = (connector: { id: string; fromX: number; fromY: number; toX: number; toY: number; fromFace?: ConnectorFace; toFace?: ConnectorFace }): boolean => {
    if (!visibleBounds) return true;
    const { fromX, fromY, toX, toY } = connector;
    return looseCableConnectorIntersectsViewportBounds(fromX, fromY, toX, toY, visibleBounds, connector.fromFace, connector.toFace);
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
      if (suppressNextCommitClickRef.current) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
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

  const handleNodePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>, node: Node) => {
      if (event.button !== 0) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest('[data-selectable-text="true"]')) return;
      if (target?.closest('button, a, input, textarea, select')) return;
      event.stopPropagation();
      event.preventDefault();
      suppressNextCommitClickRef.current = false;
      event.currentTarget.setPointerCapture(event.pointerId);
      const currentOverride = nodePositionOverrides[node.commit.visualId] ?? nodePositionOverrides[node.commit.id];
      dragNodeRef.current = {
        nodeId: node.commit.visualId,
        startX: event.clientX,
        startY: event.clientY,
        baseX: currentOverride?.x ?? node.x,
        baseY: currentOverride?.y ?? node.y,
        moved: false,
        pendingX: currentOverride?.x ?? node.x,
        pendingY: currentOverride?.y ?? node.y,
      };
      const flushDragPosition = () => {
        dragRafRef.current = null;
        const dragState = dragNodeRef.current;
        if (!dragState) return;
        setNodePositionOverrides((prev) => ({
          ...prev,
          [dragState.nodeId]: {
            x: dragState.pendingX,
            y: dragState.pendingY,
          },
        }));
      };
      const handleMove = (moveEvent: PointerEvent) => {
        const dragState = dragNodeRef.current;
        if (!dragState) return;
        const dragScale = renderedCameraRef.current.zoom / GRID_RENDER_ZOOM;
        const inverseScale = dragScale > 0 ? 1 / dragScale : 1;
        const deltaX = (moveEvent.clientX - dragState.startX) * inverseScale;
        const deltaY = (moveEvent.clientY - dragState.startY) * inverseScale;
        if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) dragState.moved = true;
        if (dragState.moved) suppressNextCommitClickRef.current = true;
        dragState.pendingX = dragState.baseX + deltaX;
        dragState.pendingY = dragState.baseY + deltaY;
        if (dragRafRef.current != null) return;
        dragRafRef.current = window.requestAnimationFrame(flushDragPosition);
      };
      const handleUp = () => {
        window.removeEventListener('pointermove', handleMove);
        window.removeEventListener('pointerup', handleUp);
        window.removeEventListener('pointercancel', handleUp);
        if (dragRafRef.current != null) {
          window.cancelAnimationFrame(dragRafRef.current);
          dragRafRef.current = null;
          flushDragPosition();
        }
        try {
          event.currentTarget.releasePointerCapture(event.pointerId);
        } catch {
          // Ignore if the pointer was already released.
        }
        const dragState = dragNodeRef.current;
        dragNodeRef.current = null;
        if (!dragState) return;
        window.setTimeout(() => {
          suppressNextCommitClickRef.current = false;
        }, 0);
      };
      window.addEventListener('pointermove', handleMove);
      window.addEventListener('pointerup', handleUp);
      window.addEventListener('pointercancel', handleUp);
    },
    [nodePositionOverrides],
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
      if (!onCreateBranchFromNode) return;
      const target = selectedVisibleCommitShas.length === 1
        ? selectedVisibleCommitShas[0]
        : checkedOutRef?.headSha ?? null;
      if (!target) return;
      if (
        !(
          target === 'WORKING_TREE' ||
          target.startsWith('STASH:') ||
          target === checkedOutRef?.headSha
        )
      ) return;
      await onCreateBranchFromNode(target, trimmed);
    }
    setNewBranchDialogOpen(false);
    setNewBranchName('');
    setNewBranchCreateMode('from-selected-node');
    setSelectedCommitShas([]);
    setMergeTargetCommitSha(null);
  }, [checkedOutRef?.headSha, newBranchCreateMode, newBranchName, onCreateBranchFromNode, onCreateRootBranch, selectedVisibleCommitShas]);

  const checkedOutCommitCanCreateBranch = Boolean(checkedOutRef?.headSha);
  const currentCheckedOutCommitCanCreateBranch =
    selectedVisibleCommitShas.length === 0 && checkedOutCommitCanCreateBranch;
  const selectedCommitCanCreateBranch =
    (selectedVisibleCommitShas.length === 1 &&
      (selectedVisibleCommitShas[0] === 'WORKING_TREE' || selectedVisibleCommitShas[0].startsWith('STASH:'))) ||
    currentCheckedOutCommitCanCreateBranch;
  const canCreateRootBranch = Boolean(onCreateRootBranch);

  useEffect(() => {
    if (!newBranchDialogOpen) return;
    if (!selectedCommitCanCreateBranch && !currentCheckedOutCommitCanCreateBranch && canCreateRootBranch) {
      setNewBranchCreateMode('new-root');
      return;
    }
    if (selectedCommitCanCreateBranch || currentCheckedOutCommitCanCreateBranch) {
      setNewBranchCreateMode('from-selected-node');
    }
  }, [canCreateRootBranch, currentCheckedOutCommitCanCreateBranch, newBranchDialogOpen, selectedCommitCanCreateBranch]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!onDeleteSelection) return;
      if (deleteConfirmOpen) return;
      if (selectedVisibleCommitShas.length === 0) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest('input, textarea, select, button, [contenteditable="true"]')) return;
      if (event.key !== 'Delete' && event.key !== 'Backspace') return;
      event.preventDefault();
      setDeleteConfirmOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [deleteConfirmOpen, onDeleteSelection, selectedVisibleCommitShas.length]);

  void [openPRs, onLoadMore, view, staleBranches, isLoading, scrollRequest, focusedErrorBranch, mapTopInsetPx, visibleNodesBySha, freshCopyBranchNames];

  return (
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-card">
      <MapGridDebugPanel
        isOpen={isDebugOpen}
        onClose={() => onDebugClose?.()}
        visibleBounds={visibleBounds}
        renderedNodeCount={renderedNodeCount}
        totalNodeCount={renderNodes.length}
        renderedMergeConnectorCount={renderedMergeConnectorCount}
        totalMergeConnectorCount={mergeConnectors.length}
        renderedConnectorCount={renderedConnectorCount}
        totalConnectorCount={connectors.length}
        mapGridCullViewportInsetScreenPx={MAP_GRID_CULL_VIEWPORT_INSET_SCREEN_PX}
        debugRows={debugLayoutModel.debugRows}
        branchDebugRows={debugLayoutModel.branchDebugRows}
        connectorDecisions={connectorDecisions}
      />
      {gridHudProps ? (
        <div className="pointer-events-none z-[70] flex w-full justify-between">
          <div className="window-no-drag pointer-events-auto ml-auto flex w-full max-w-[calc(100vw-116px)] flex-nowrap items-center justify-between gap-3 overflow-x-auto bg-red-500/20 p-2.25">
            <div className="flex min-w-0 flex-1 items-center">
              <CommitControls
                selectedVisibleCommitShas={selectedVisibleCommitShas}
                commitInProgress={commitInProgress}
                commitDisabled={commitDisabled}
                stageInProgress={stageInProgress}
                stashInProgress={stashInProgress}
                stashDisabled={stashDisabled}
                pushInProgress={pushInProgress}
                hasUncommittedChanges={hasUncommittedChanges}
                createBranchFromNodeInProgress={createBranchFromNodeInProgress}
                onCommitLocalChanges={onCommitLocalChanges}
                onStageAllChanges={onStageAllChanges ? () => void onStageAllChanges() : undefined}
                onStashLocalChanges={onStashLocalChanges}
                onPushCurrentBranch={onPushCurrentBranch}
                onPushAllBranches={onPushAllBranches}
                onPushCommitTargets={onPushCommitTargets}
                onMergeRefsIntoBranch={onMergeRefsIntoBranch}
                selectedPushTargets={selectedPushTargets}
                selectedPushLabel={selectedPushLabel}
                canPushCurrentBranch={canPushCurrentBranch}
                pushCurrentBranchLabel={pushCurrentBranchLabel}
                pushableRemoteBranchCount={pushableRemoteBranchCount}
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
                setNewBranchDialogOpen={setNewBranchDialogOpen}
              />
            </div>
            <div className="flex min-w-0 flex-1 items-center justify-center gap-2">
              <MapSearchBar
                query={gridHudProps.gridSearchQuery}
                onQueryChange={gridHudProps.setGridSearchQuery}
                resultCount={gridHudProps.gridSearchResultCount}
                resultIndex={gridHudProps.gridSearchResultIndex}
                onJump={(direction) => {
                  gridHudProps.setGridSearchJumpDirection(direction);
                  gridHudProps.setGridSearchJumpToken((token) => token + 1);
                }}
              />
            </div>
            <div className="flex min-w-0 flex-none items-center gap-2">
              <MapOrientationToggle
                orientation={gridHudProps.mapGridOrientation}
                onOrientationChange={gridHudProps.setMapGridOrientation}
              />
              <button
                type="button"
                onClick={() => gridHudProps.setIsGridDebugOpen((open) => !open)}
                className="inline-flex h-7 items-center rounded-md border border-border/60 bg-card px-2 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                Debug
              </button>
            </div>
          </div>
          <div className="pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5">
            {gridHudProps.githubAuthStatus?.ghAvailable && !gridHudProps.githubAuthStatus.authenticated ? (
              <button
                onClick={gridHudProps.onGitHubAuthSetup}
                disabled={gridHudProps.githubAuthLoading}
                className="window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
              >
                {gridHudProps.githubAuthLoading ? 'Connecting GitHub...' : 'Connect GitHub'}
              </button>
            ) : null}
            {gridHudProps.githubAuthStatus && !gridHudProps.githubAuthStatus.ghAvailable ? (
              <div className="window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm">
                <p className="shrink-0 text-[10px] font-medium text-muted-foreground">GitHub</p>
                <p className="max-w-36 truncate text-[11px] text-foreground/90">
                  Install `gh` for private PR data
                </p>
              </div>
            ) : null}
            {gridHudProps.githubAuthMessage ? (
              <div className="window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] text-muted-foreground backdrop-blur-sm">
                <p className="shrink-0 text-[10px] font-medium text-muted-foreground">GitHub</p>
                <p className="max-w-36 truncate text-[11px] text-foreground/90" title={gridHudProps.githubAuthMessage}>
                  {gridHudProps.githubAuthMessage}
                </p>
              </div>
            ) : null}
            {gridHudProps.commitSwitchFeedback ? (
              <div
                className={`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${
                  gridHudProps.isCommitSwitchFeedbackVisible ? 'opacity-100' : 'opacity-0'
                } ${
                  gridHudProps.commitSwitchFeedback.kind === 'error'
                    ? 'border-red-200/80 bg-red-50/95 text-red-700 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-300'
                    : 'border-blue-200/80 bg-blue-50/95 text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-300'
                }`}
                title={gridHudProps.commitSwitchFeedback.message}
              >
                <p className="shrink-0 text-[10px] font-medium opacity-70">
                  {gridHudProps.commitSwitchFeedback.kind === 'error' ? 'Alert' : 'Update'}
                </p>
                <p className="truncate text-[11px]">
                  {gridHudProps.commitSwitchFeedback.message}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
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
          onNodePointerDown={handleNodePointerDown}
          labelTopPx={labelTopPx}
          inverseZoomStyle={inverseZoomStyle}
          displayZoom={displayZoom}
          iconScaleStyle={iconScaleStyle}
          selectedVisibleCommitShas={selectedVisibleCommitShas}
          normalizedSearchQuery={normalizedSearchQuery}
          matchingNodeIds={matchingNodeIds}
          focusedNode={focusedRenderNode}
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
          pointFormatter={pointFormatter}
          connectors={connectors}
          mergeConnectors={mergeConnectors}
          cullConnectorPath={cullConnectorPath}
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
        currentCheckedOutCommitCanCreateBranch={currentCheckedOutCommitCanCreateBranch}
        createBranchFromNodeInProgress={createBranchFromNodeInProgress}
      />
    </div>
  );
}
