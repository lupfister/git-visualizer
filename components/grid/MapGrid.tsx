import {
  startTransition,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useId,
  useRef,
  useState,
} from 'react';
import { invoke } from '@tauri-apps/api/core';
import { getCurrentWindow } from '@tauri-apps/api/window';
import type { BranchCommitPreview, WorktreeInfo } from '../../types';
import {
  buildLanes,
  CARD_HEIGHT,
  CARD_BODY_TOP_OFFSET,
  CARD_WIDTH,
  LEFT_PADDING,
  ROW_GAP,
  ROW_HEIGHT,
  TOP_PADDING,
  type BranchGridViewProps,
  type ConnectorFace,
  type NodePositionOverrides,
  type Node,
} from './LayoutGrid';
import { GitMerge } from 'lucide-react';
import { computeBranchGridLayout, GRID_LAYOUT_RENDER_ZOOM } from './branchGridLayoutModel';
import { layoutModelHasWorkingTree, stripWorkingTreeFromLayoutModel } from './workingTreeLayout';
import type { BranchGridLayoutModel } from './branchGridLayoutModel';
import { connectorsWithEffectivePositions } from './mapGridLiveConnectors';
import {
  assignNodePositionOverride,
  assignNodePositionPreview,
  canonicalizeNodePositionOverridesForCommits,
  getNodePositionOverride,
} from './nodePositionOverrides';
import CommitControls from './CommitControls';
import { mergePanStableVisibleNodeIds, pickNearestVisibleVisualIds } from './MapGridCardVirtualizer';
import MapGridCanvas from './MapGridCanvas';
import MapGridDebugPanel from './MapGridDebugPanel';
import {
  pulseMapGridBackgroundActivity,
  setMapGridBackgroundActivity,
} from './mapGridBackgroundActivity';
import MapGridDialogs from './MapGridDialogs';
import MapSearchBar from './MapSearchBar';
import { useMapGridCamera } from './useMapGridCamera';
import { useMapGridSelection } from './useMapGridSelection';
import {
  buildWorktreeAccentByCommitId,
  buildWorktreeSessions,
  currentSessionWorkingTreeId,
  isWorkingTreeCommitId,
  selectedUncommittedSessions,
  type WorktreeSession,
} from '../../lib/worktreeSessions';
import { parseMapCheckoutTarget, type MapCheckoutTarget } from './mapCheckoutTarget';
import { parseDeletableEmptyBranchFromCommitId } from './mapDeleteTarget';
import {
  GRID_COMMIT_CORNER_RADIUS_BASE_PX,
  GRID_RENDER_ZOOM,
  MAP_GRID_CULL_VIEWPORT_INSET_SCREEN_PX,
  MAP_GRID_MAX_NODES_REMOVED_PER_FRAME,
  MAP_GRID_PAN_MAX_VISIBLE_EVICT_PER_TICK,
  mapGridMaxVisibleNodeRetain,
  mapGridPanAdmissionBudget,
  buildCommitCullSpatialIndex,
  collectVisibleCommitIdsFromSpatialIndex,
  computeViewportCullBounds,
  isOtherWorktree,
  isUsableOtherWorktree,
  normalizeRepoPathForCompare,
  looseCableConnectorIntersectsViewportBounds,
  shaMatchesGitRef,
  visibleCommitIdSetEquals,
  worktreeShortLabel,
} from './mapGridUtils';
import type { ViewportContentBounds } from './mapGridUtils';

function countStaleVisibleNodes(prev: Set<string>, target: Set<string>): number {
  let n = 0;
  for (const id of prev) {
    if (!target.has(id)) n++;
  }
  return n;
}

function pruneVisibleNodesTowardTarget(prev: Set<string>, target: Set<string>, maxRemove: number): Set<string> {
  const next = new Set(prev);
  let removed = 0;
  for (const id of prev) {
    if (target.has(id)) continue;
    next.delete(id);
    removed++;
    if (removed >= maxRemove) break;
  }
  for (const id of target) next.add(id);
  return next;
}

function MapGridLoadingState() {
  return (
    <div className="flex flex-1 min-h-0 items-center justify-center">
      <div
        role="status"
        aria-label="Loading commits"
        className="h-5 w-5 rounded-full border-2 border-border border-t-muted-foreground animate-spin"
      />
    </div>
  );
}

function MapGridBlockingOverlay() {
  return (
    <div className="pointer-events-auto absolute inset-0 z-[120] flex min-h-0 items-center justify-center bg-background/80">
      <div
        role="status"
        aria-label="Preparing map"
        className="h-5 w-5 rounded-full border-2 border-border border-t-muted-foreground animate-spin"
      />
    </div>
  );
}

function nodePositionOverridesEqual(left: NodePositionOverrides, right: NodePositionOverrides) {
  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length) return false;
  for (const key of leftKeys) {
    const leftPoint = left[key];
    const rightPoint = right[key];
    if (!rightPoint) return false;
    if (Math.abs(leftPoint.x - rightPoint.x) > 0.001) return false;
    if (Math.abs(leftPoint.y - rightPoint.y) > 0.001) return false;
  }
  return true;
}

const NODE_POSITIONS_STORAGE_KEY_PREFIX = 'git-visualizer:node-positions:';

function normalizeRepoPathForNodePositions(path: string): string {
  if (path === '/') return path;
  return path.replace(/\/+$/, '');
}

function nodePositionsStorageKey(repoPath: string): string {
  return `${NODE_POSITIONS_STORAGE_KEY_PREFIX}${encodeURIComponent(normalizeRepoPathForNodePositions(repoPath))}`;
}

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
    setIsGridDebugOpen: (open: boolean | ((open: boolean) => boolean)) => void;
    githubAuthMessage: string | null;
    commitSwitchFeedback: { kind: 'success' | 'error'; message: string } | null;
    isCommitSwitchFeedbackVisible: boolean;
  };
  blockMapInteraction?: boolean;
  blockMapDisplay?: boolean;
  mapReadyEpoch?: number;
  onMapReadyForDisplay?: (epoch: number) => void;
  nodePositionOverrides?: NodePositionOverrides;
  onNodePositionOverridesChange?: (overrides: NodePositionOverrides) => void;
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
  onAutoCommitLocalChanges,
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
  blockMapInteraction = false,
  blockMapDisplay = false,
  mapReadyEpoch = 0,
  onMapReadyForDisplay,
  nodePositionOverrides: controlledNodePositionOverrides,
  onNodePositionOverridesChange,
}: Props) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const hudToolbarRef = useRef<HTMLDivElement | null>(null);
  /** `p-2.5` wrapper: used to map pointer position to the transform layer origin (padding edge). */
  const mapPadHostRef = useRef<HTMLDivElement | null>(null);
  const lastSearchResultCountRef = useRef<number | null | undefined>(undefined);
  const lastSearchResultIndexRef = useRef<number | null | undefined>(undefined);
  const lastSearchFocusShaRef = useRef<string | null | undefined>(undefined);
  const lastHandledSearchJumpTokenRef = useRef<number>(0);
  const lastHandledViewportFocusRequestRef = useRef<string | null>(null);
  const [worktreeMenuOpen, setWorktreeMenuOpen] = useState(false);
  const [commitDialogOpen, setCommitDialogOpen] = useState(false);
  const [commitMessageDraft, setCommitMessageDraft] = useState('');
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [checkoutPickerOpen, setCheckoutPickerOpen] = useState(false);
  const [checkoutPickerTarget, setCheckoutPickerTarget] = useState<MapCheckoutTarget | null>(null);
  const [checkoutPickerSelectedPath, setCheckoutPickerSelectedPath] = useState<string | null>(null);
  const [newBranchDialogOpen, setNewBranchDialogOpen] = useState(false);
  const [newBranchName, setNewBranchName] = useState('');
  const [newBranchCreateMode, setNewBranchCreateMode] = useState<'from-selected-node' | 'new-root'>(
    'from-selected-node',
  );
  const [localManuallyOpenedClumps, setLocalManuallyOpenedClumps] = useState<Set<string>>(() => new Set());
  const [localManuallyClosedClumps, setLocalManuallyClosedClumps] = useState<Set<string>>(() => new Set());
  const [localNodePositionOverrides, setLocalNodePositionOverrides] = useState<NodePositionOverrides>({});
  const [optimisticNodePositionOverrides, setOptimisticNodePositionOverrides] = useState<NodePositionOverrides | null>(null);
  const nodePositionOverrides =
    optimisticNodePositionOverrides ?? controlledNodePositionOverrides ?? localNodePositionOverrides;
  const setNodePositionOverrides = useCallback(
    (nextOverrides: NodePositionOverrides) => {
      setLocalNodePositionOverrides(nextOverrides);
      if (controlledNodePositionOverrides != null) setOptimisticNodePositionOverrides(nextOverrides);
      onNodePositionOverridesChange?.(nextOverrides);
    },
    [controlledNodePositionOverrides, onNodePositionOverridesChange],
  );
  const [dragPreviewByNodeId, setDragPreviewByNodeId] = useState<NodePositionOverrides>({});
  const [, setActiveDragNodeIds] = useState<Set<string>>(() => new Set());
  const suppressNextCommitClickRef = useRef(false);
  const dragNodeRef = useRef<{
    nodeId: string;
    pointerId?: number;
    startX: number;
    startY: number;
    baseX: number;
    baseY: number;
    sourceLane: number;
    baseOverrides: NodePositionOverrides;
    baseNodes: Node[];
    groupNodes: Array<{ nodeId: string; commit: Node['commit']; baseX: number; baseY: number }>;
    moved: boolean;
    pendingX: number;
    pendingY: number;
  } | null>(null);
  const dragRafRef = useRef<number | null>(null);
  const manuallyOpenedClumps = controlledManuallyOpenedClumps ?? localManuallyOpenedClumps;
  const manuallyClosedClumps = controlledManuallyClosedClumps ?? localManuallyClosedClumps;
  const setManuallyOpenedClumps = controlledSetManuallyOpenedClumps ?? setLocalManuallyOpenedClumps;
  const setManuallyClosedClumps = controlledSetManuallyClosedClumps ?? setLocalManuallyClosedClumps;
  const [visibleNodeIds, setVisibleNodeIds] = useState<Set<string>>(() => new Set());
  const panAdmissionPendingRef = useRef<Set<string>>(new Set());
  const settlePrunePendingRef = useRef(false);
  const settlePruneTargetRef = useRef<Set<string> | null>(null);
  const settlePruneRafRef = useRef<number | null>(null);
  const visibleRenderNodesRef = useRef<Node[]>([]);
  const lastInteractionEmittedRef = useRef(false);
  const isMarqueeSelectingRef = useRef(false);
  const onRenderedCameraAppliedRef = useRef<() => void>(() => {});
  const onPanActiveChangeRef = useRef<(active: boolean) => void>(() => {});
  const [viewportClientSize, setViewportClientSize] = useState<{ width: number; height: number } | null>(null);
  const [isCompactHud, setIsCompactHud] = useState(false);
  const [hideSearchBar, setHideSearchBar] = useState(false);
  const autoRecoverRef = useRef<{ key: string; attempts: number } | null>(null);
  const mergeSliderScopeId = useId();

  const {
    isCameraMovingRef,
    panEpoch,
    renderedZoom,
    cameraRenderTick,
    renderedCameraRef,
    interactionIdleTimeoutRef,
    getTransformLayerOriginScreen,
    flushCameraReactTick,
    syncCamera,
    handleWheel,
    registerCameraTarget,
  } = useMapGridCamera({
    mapPadHostRef,
    isEnabled: !blockMapInteraction,
    cameraStorageScopeKey: `${currentRepoPath ?? '__no-repo__'}::${orientation}`,
    onRenderedCameraApplied: () => onRenderedCameraAppliedRef.current(),
    onPanActiveChange: (active) => onPanActiveChangeRef.current(active),
  });

  const lastReadyEpochReportedRef = useRef<number>(0);

  useEffect(() => {
    if (!optimisticNodePositionOverrides || !controlledNodePositionOverrides) return;
    if (!nodePositionOverridesEqual(optimisticNodePositionOverrides, controlledNodePositionOverrides)) return;
    setOptimisticNodePositionOverrides(null);
  }, [controlledNodePositionOverrides, optimisticNodePositionOverrides]);

  const worktreeSessions = useMemo(
    () => buildWorktreeSessions(worktrees, currentRepoPath, checkedOutRef ?? null),
    [worktrees, currentRepoPath, checkedOutRef],
  );
  const worktreeAccentByCommitId = useMemo(
    () => buildWorktreeAccentByCommitId(worktreeSessions),
    [worktreeSessions],
  );
  const currentWorkingTreeId = currentSessionWorkingTreeId(worktreeSessions);

  const checkoutPickerWorktrees = useMemo((): Array<{
    path: string;
    label: string;
    detail: string;
    session: WorktreeSession;
  }> => {
    const normalizedCurrent = currentRepoPath ? normalizeRepoPathForCompare(currentRepoPath) : null;
    return worktrees
      .filter((worktree) => worktree.pathExists !== false)
      .map((worktree) => {
        const normalizedPath = normalizeRepoPathForCompare(worktree.path);
        const session = worktreeSessions.find((entry) => entry.path === worktree.path)
          ?? worktreeSessions.find(
            (entry) => normalizeRepoPathForCompare(entry.path).toLowerCase() === normalizedPath.toLowerCase(),
          );
        if (!session) return null;
        const isCurrentWindow = normalizedCurrent
          ? normalizedPath === normalizedCurrent || normalizedPath.toLowerCase() === normalizedCurrent.toLowerCase()
          : !isOtherWorktree(worktree, currentRepoPath);
        const branchLabel = worktree.branchName ?? 'detached';
        const headLabel = worktree.headSha.slice(0, 7);
        return {
          path: worktree.path,
          label: isCurrentWindow ? 'This window' : worktreeShortLabel(worktree.path),
          detail: `${branchLabel} • ${headLabel}`,
          session,
        };
      })
      .filter((entry): entry is NonNullable<typeof entry> => entry != null)
      .sort((left, right) => {
        if (left.session.isCurrent !== right.session.isCurrent) {
          return left.session.isCurrent ? -1 : 1;
        }
        return left.label.localeCompare(right.label);
      });
  }, [worktrees, worktreeSessions, currentRepoPath]);

  const computedLayoutModel = useMemo(() => {
    const isDirty = worktreeSessions.some((session) => session.hasUncommittedChanges);
    const providedHasWorkingTree = layoutModelHasWorkingTree(providedLayoutModel ?? null);
    const previewsHaveWorkingTree = Object.values(branchCommitPreviews).some((previews) =>
      previews.some((preview) => isWorkingTreeCommitId(preview.fullSha) || preview.kind === 'uncommitted'),
    );
    const canUseProvidedLayout =
      providedLayoutModel &&
      Object.keys(nodePositionOverrides).length === 0 &&
      providedHasWorkingTree === isDirty &&
      previewsHaveWorkingTree === isDirty;
    if (canUseProvidedLayout) {
      return isDirty ? providedLayoutModel : stripWorkingTreeFromLayoutModel(providedLayoutModel);
    }
    const lanes = buildLanes(branches, defaultBranch, branchCommitPreviews, branchParentByName);
    return computeBranchGridLayout({
      lanes,
      branches,
      mergeNodes,
      directCommits,
      unpushedDirectCommits,
      unpushedCommitShasByBranch,
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
      worktreeSessions,
      orientation,
      nodePositionOverrides,
    });
  }, [
    providedLayoutModel,
    branches,
    mergeNodes,
    directCommits,
    unpushedDirectCommits,
    unpushedCommitShasByBranch,
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
    checkedOutRef?.hasUncommittedChanges ?? false,
    worktreeSessions,
    orientation,
    nodePositionOverrides,
  ]);
  const resolvedLayoutModel: BranchGridLayoutModel = computedLayoutModel;

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
  } = resolvedLayoutModel;

  const isHorizontalLayout = orientation === 'horizontal';
  const connectorsForView = useMemo(
    () => connectorsWithEffectivePositions(connectors, renderNodes, dragPreviewByNodeId, nodePositionOverrides, isHorizontalLayout),
    [connectors, renderNodes, dragPreviewByNodeId, nodePositionOverrides, isHorizontalLayout],
  );
  const mergeConnectorsForView = useMemo(
    () => connectorsWithEffectivePositions(mergeConnectors, renderNodes, dragPreviewByNodeId, nodePositionOverrides, isHorizontalLayout),
    [mergeConnectors, renderNodes, dragPreviewByNodeId, nodePositionOverrides, isHorizontalLayout],
  );

  const isGridSearchActive = Boolean(normalizedSearchQuery);

  const displayZoom = renderedZoom / GRID_RENDER_ZOOM;
  const snapMetrics = useMemo(() => {
    const zoomAwareRowGap = ROW_GAP / GRID_LAYOUT_RENDER_ZOOM;
    const zoomAwareLabelBand = 20 / GRID_LAYOUT_RENDER_ZOOM;
    return {
      timelinePitch: CARD_WIDTH + zoomAwareRowGap + zoomAwareLabelBand,
      lanePitch: ROW_HEIGHT + zoomAwareRowGap + zoomAwareLabelBand,
    };
  }, []);
  const laneFromY = useCallback(
    (y: number) => Math.max(0, Math.round((y - TOP_PADDING) / snapMetrics.lanePitch)),
    [snapMetrics.lanePitch],
  );
  const snapNodePosition = useCallback(
    (x: number, y: number) => {
      if (orientation !== 'horizontal') {
        return {
          x: LEFT_PADDING + Math.max(0, Math.round((x - LEFT_PADDING) / snapMetrics.lanePitch)) * snapMetrics.lanePitch,
          y: TOP_PADDING + Math.max(0, Math.round((y - TOP_PADDING) / snapMetrics.timelinePitch)) * snapMetrics.timelinePitch,
        };
      }
      return {
        x: LEFT_PADDING + Math.max(0, Math.round((x - LEFT_PADDING) / snapMetrics.timelinePitch)) * snapMetrics.timelinePitch,
        y: TOP_PADDING + laneFromY(y) * snapMetrics.lanePitch,
      };
    },
    [laneFromY, orientation, snapMetrics.lanePitch, snapMetrics.timelinePitch],
  );
  const avoidNodeCollisions = useCallback(
    (
      dragState: NonNullable<typeof dragNodeRef.current>,
      candidatePositions: NodePositionOverrides,
    ) => {
      const draggedNodeIds = new Set(dragState.groupNodes.map((groupNode) => groupNode.nodeId));
      const occupied = dragState.baseNodes
        .filter((node) => !draggedNodeIds.has(node.commit.visualId))
        .map((node) => {
          const override = getNodePositionOverride(dragState.baseOverrides, node.commit);
          return {
            x: override?.x ?? node.x,
            y: override?.y ?? node.y,
          };
        });
      const nodeBoxHeight = CARD_BODY_TOP_OFFSET + CARD_HEIGHT + 4;
      const overlaps = (
        left: { x: number; y: number },
        right: { x: number; y: number },
      ) =>
        left.x < right.x + CARD_WIDTH &&
        left.x + CARD_WIDTH > right.x &&
        left.y < right.y + nodeBoxHeight &&
        left.y + nodeBoxHeight > right.y;
      const candidateForGroup = (offset: number) =>
        dragState.groupNodes.map((groupNode) => {
          const point = getNodePositionOverride(candidatePositions, groupNode.commit);
          return {
            x: (point?.x ?? groupNode.baseX) + offset,
            y: point?.y ?? groupNode.baseY,
          };
        });

      let offset = 0;
      for (let attempt = 0; attempt < 200; attempt += 1) {
        const groupCandidates = candidateForGroup(offset);
        const hitsOccupied = groupCandidates.some((candidate) =>
          occupied.some((occupiedNode) => overlaps(candidate, occupiedNode)),
        );
        const hitsGroup = groupCandidates.some((candidate, index) =>
          groupCandidates.some((other, otherIndex) => otherIndex > index && overlaps(candidate, other)),
        );
        if (!hitsOccupied && !hitsGroup) break;
        offset += orientation === 'horizontal' ? snapMetrics.timelinePitch : snapMetrics.lanePitch;
      }
      if (offset === 0) return candidatePositions;
      const next = { ...candidatePositions };
      for (const groupNode of dragState.groupNodes) {
        const point = getNodePositionOverride(next, groupNode.commit);
        if (!point) continue;
        assignNodePositionOverride(next, groupNode.commit, { x: point.x + offset, y: point.y });
      }
      return next;
    },
    [orientation, snapMetrics.lanePitch, snapMetrics.timelinePitch],
  );

  const nodeByVisualId = useMemo(() => {
    const m = new Map<string, Node>();
    for (const node of renderNodes) {
      m.set(node.commit.visualId, node);
    }
    return m;
  }, [renderNodes]);

  const commitCullSpatialIndex = useMemo(
    () => buildCommitCullSpatialIndex(renderNodes),
    [renderNodes],
  );

  const visibleRenderNodes = useMemo(() => {
    return renderNodes.filter((node) => {
      const commitId = node.commit.id;
      const visualId = node.commit.visualId;
      if (isGridSearchActive && matchingNodeIds.has(commitId)) return true;
      if (focusedNode?.commit.id === commitId) return true;
      if (visibleNodeIds.size === 0) return false;
      if (!visibleNodeIds.has(visualId)) return false;
      return true;
    });
  }, [renderNodes, isGridSearchActive, matchingNodeIds, focusedNode, visibleNodeIds]);

  visibleRenderNodesRef.current = visibleRenderNodes;

  const lineStrokeWidth = 1.25 / displayZoom;
  const commitCornerRadiusPx = GRID_COMMIT_CORNER_RADIUS_BASE_PX / displayZoom;

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
  const remoteCommitShas = useMemo(() => {
    const localCommitShas = new Set<string>(directCommits.map((commit) => commit.fullSha));
    const remoteShas = new Set<string>();
    const addSha = (sha: string) => {
      if (!sha) return;
      remoteShas.add(sha);
      remoteShas.add(sha.slice(0, 7));
    };
    for (const branch of branches) {
      if (branch.commitsBehind <= 0) continue;
      const previews = branchCommitPreviews[branch.name] ?? [];
      for (const preview of previews) {
        if (preview.kind === 'branch-created' || preview.kind === 'uncommitted' || preview.kind === 'stash') continue;
        if (!localCommitShas.has(preview.fullSha)) addSha(preview.fullSha);
      }
      if (branch.headSha && !localCommitShas.has(branch.headSha)) addSha(branch.headSha);
    }
    return remoteShas;
  }, [branches, branchCommitPreviews, directCommits]);
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
    visibleRenderNodes,
    onPointerReleaseNoMarquee: handlePointerReleaseNoMarquee,
  });
  isMarqueeSelectingRef.current = isMarqueeSelecting;
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
    const isMergeableTargetBranch = (name: string) => !/^stash\b/i.test(name.trim());
    const byBranch = new Map<string, { targetSha: string; targetBranch: string; sourceRefs: string[] }>();
    for (const targetSha of selectedVisibleCommitShas) {
      const candidates = branchCandidatesForCommit(targetSha).filter(isMergeableTargetBranch);
      if (candidates.length === 0) continue;
      const targetBranch = candidates.find((name) => name !== defaultBranch) ?? candidates[0];
      const sourceRefs = selectedVisibleCommitShas
        .filter((sha) => sha !== targetSha)
        .filter((sha) => {
          const sourceCandidates = new Set(branchCandidatesForCommit(sha).filter(isMergeableTargetBranch));
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

  const hasNonMergeableSelection = useMemo(() => {
    const isMergeableTargetBranch = (name: string) => !/^stash\b/i.test(name.trim());
    return selectedVisibleCommitShas.some((sha) => {
      const candidates = branchCandidatesForCommit(sha);
      return candidates.length > 0 && candidates.filter(isMergeableTargetBranch).length === 0;
    });
  }, [selectedVisibleCommitShas, branchCandidatesForCommit]);

  const shouldShowMergeMenu =
    selectedVisibleCommitShas.length > 1 &&
    selectedCommitTargetOption.options.length > 0 &&
    !!selectedCommitTargetOption.targetBranch &&
    selectedCommitTargetOption.sources.length > 0 &&
    !hasNonMergeableSelection &&
    !!onMergeRefsIntoBranch;
  const [mergeSliderAnimate, setMergeSliderAnimate] = useState(false);
  useEffect(() => {
    if (shouldShowMergeMenu) setMergeSliderAnimate(false);
  }, [shouldShowMergeMenu, selectedVisibleCommitShas]);

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
  const uncommittedSessionsToDiscard = useMemo(
    () => selectedUncommittedSessions(worktreeSessions, selectedVisibleCommitShas),
    [worktreeSessions, selectedVisibleCommitShas],
  );
  const hasSelectedUncommittedChanges = uncommittedSessionsToDiscard.length > 0;
  const selectedDeletableBranchNames = useMemo(() => {
    const names: string[] = [];
    for (const commitId of selectedVisibleCommitShas) {
      const branchName = parseDeletableEmptyBranchFromCommitId(
        commitId,
        defaultBranch,
        branchByName,
        branchUniqueAheadCounts,
        branchCommitPreviews,
      );
      if (branchName) names.push(branchName);
    }
    return Array.from(new Set(names));
  }, [
    selectedVisibleCommitShas,
    defaultBranch,
    branchByName,
    branchUniqueAheadCounts,
    branchCommitPreviews,
  ]);
  const deletableSelectionCount =
    uncommittedSessionsToDiscard.length + selectedStashIndices.length + selectedDeletableBranchNames.length;
  const deleteSelectionItems = [
    ...selectedDeletableBranchNames.map((branchName) => `Branch ${branchName}`),
    ...uncommittedSessionsToDiscard.map((session) => (
      session.isCurrent
        ? 'Uncommitted changes'
        : `Uncommitted · ${worktreeShortLabel(session.path)}`
    )),
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

  const handleHeaderPointerDown = useCallback((event: React.PointerEvent<HTMLElement>) => {
    const target = event.target as HTMLElement | null;
    if (target?.closest('.window-no-drag, input, textarea, select, button, [contenteditable="true"]')) {
      return;
    }
    void getCurrentWindow().startDragging();
  }, []);

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
    const focusRequestKey = `${gridFocusSha}:${gridSearchJumpToken}`;
    if (lastHandledViewportFocusRequestRef.current === focusRequestKey) return;
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
    lastHandledViewportFocusRequestRef.current = focusRequestKey;
  }, [gridFocusSha, gridSearchJumpToken, focusedRenderNode, getTransformLayerOriginScreen, syncCamera, renderedCameraRef]);

  // Updated on every camera transform write so connector culling matches the viewport during pan.
  const visibleBoundsRef = useRef<ViewportContentBounds | null>(null);
  const nodeByVisualIdRef = useRef<Map<string, Node>>(new Map());
  nodeByVisualIdRef.current = nodeByVisualId;
  const cullViewportCenterRef = useRef({ x: 0, y: 0 });

  const syncVisibleBoundsFromCamera = useCallback(() => {
    const viewport = scrollContainerRef.current;
    if (!viewport || viewport.clientWidth <= 0 || viewport.clientHeight <= 0) return;
    const bounds = computeViewportCullBounds(
      viewport.clientWidth,
      viewport.clientHeight,
      renderedCameraRef.current,
    );
    if (bounds) visibleBoundsRef.current = bounds;
  }, [renderedCameraRef]);

  onRenderedCameraAppliedRef.current = syncVisibleBoundsFromCamera;

  const emitInteractionChange = useCallback(() => {
    const next = isCameraMovingRef.current || isMarqueeSelectingRef.current;
    if (lastInteractionEmittedRef.current === next) return;
    lastInteractionEmittedRef.current = next;
    setMapGridBackgroundActivity(
      'map-interaction',
      'Map interaction',
      next,
      next ? (isCameraMovingRef.current ? 'pan/zoom' : 'marquee') : 'idle',
    );
    onInteractionChange?.(next);
  }, [onInteractionChange]);

  const handlePanActiveChange = useCallback(
    (active: boolean) => {
      if (active) {
        panAdmissionPendingRef.current.clear();
      }
      emitInteractionChange();
    },
    [emitInteractionChange],
  );

  onPanActiveChangeRef.current = handlePanActiveChange;

  useEffect(() => {
    emitInteractionChange();
  }, [isMarqueeSelecting, emitInteractionChange]);

  const cullConnectorPath = useCallback(
    (connector: { id: string; fromX: number; fromY: number; toX: number; toY: number; fromFace?: ConnectorFace; toFace?: ConnectorFace }): boolean => {
      const vb = visibleBoundsRef.current;
      if (!vb) return true;
      const { fromX, fromY, toX, toY } = connector;
      const pad = 160;
      if (
        Math.max(fromX, toX) < vb.left - pad ||
        Math.min(fromX, toX) > vb.right + pad ||
        Math.max(fromY, toY) < vb.top - pad ||
        Math.min(fromY, toY) > vb.bottom + pad
      ) {
        return false;
      }
      return looseCableConnectorIntersectsViewportBounds(fromX, fromY, toX, toY, vb, connector.fromFace, connector.toFace);
    },
    // stable forever — reads visibleBoundsRef at call time
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const applyVisibleNodeCull = useCallback(() => {
    const viewport = scrollContainerRef.current;
    if (!viewport || viewport.clientWidth <= 0 || viewport.clientHeight <= 0) return;

    const bounds = computeViewportCullBounds(
      viewport.clientWidth,
      viewport.clientHeight,
      renderedCameraRef.current,
    );
    if (!bounds) {
      startTransition(() => {
        setVisibleNodeIds((prev) => (prev.size === 0 ? prev : new Set()));
      });
      return;
    }
    visibleBoundsRef.current = bounds;

    const displayZoomForCull = renderedCameraRef.current.zoom / GRID_RENDER_ZOOM;
    const labelTopForCull = -(20 / displayZoomForCull);

    const nextVisible = collectVisibleCommitIdsFromSpatialIndex(
      commitCullSpatialIndex,
      bounds,
      nodeByVisualId,
      labelTopForCull,
    );
    const centerX = (bounds.left + bounds.right) / 2;
    const centerY = (bounds.top + bounds.bottom) / 2;
    cullViewportCenterRef.current = { x: centerX, y: centerY };
    const visibleRetainCap = mapGridMaxVisibleNodeRetain(displayZoomForCull);
    const cappedVisible = pickNearestVisibleVisualIds(
      nextVisible,
      visibleRetainCap,
      nodeByVisualId,
      centerX,
      centerY,
    );
    for (const node of renderNodes) {
      if (!node.commit.id.startsWith('BRANCH_HEAD:')) continue;
      if (nextVisible.has(node.commit.visualId)) {
        cappedVisible.add(node.commit.visualId);
      }
    }

    if (isCameraMovingRef.current) {
      settlePrunePendingRef.current = false;
      settlePruneTargetRef.current = null;
      setMapGridBackgroundActivity('settle-prune', 'Visible-settle prune', false);
      if (settlePruneRafRef.current != null) {
        window.cancelAnimationFrame(settlePruneRafRef.current);
        settlePruneRafRef.current = null;
      }

      pulseMapGridBackgroundActivity(
        'spatial-cull',
        'Spatial cull tick',
        `${cappedVisible.size} visible`,
      );
      const admissionBudget = mapGridPanAdmissionBudget(displayZoomForCull);
      startTransition(() => {
        setVisibleNodeIds((prev) => {
          const next = mergePanStableVisibleNodeIds(
            prev,
            nextVisible,
            cappedVisible,
            admissionBudget,
            visibleRetainCap,
            MAP_GRID_PAN_MAX_VISIBLE_EVICT_PER_TICK,
            nodeByVisualId,
            centerX,
            centerY,
          );
          return visibleCommitIdSetEquals(prev, next) ? prev : next;
        });
      });
      return;
    }

    startTransition(() => {
      setVisibleNodeIds((prev) => {
        const pending = panAdmissionPendingRef.current;
        panAdmissionPendingRef.current.clear();

        let base = prev;
        if (base && pending.size > 0) {
          base = new Set(base);
          for (const id of pending) {
            if (cappedVisible.has(id)) base.add(id);
          }
        }

        if (visibleCommitIdSetEquals(base, cappedVisible)) {
          settlePrunePendingRef.current = false;
          settlePruneTargetRef.current = null;
          return base;
        }
        if (!base) {
          settlePrunePendingRef.current = false;
          settlePruneTargetRef.current = null;
          return cappedVisible;
        }

        const stale = countStaleVisibleNodes(base, cappedVisible);
        if (stale <= MAP_GRID_MAX_NODES_REMOVED_PER_FRAME) {
          settlePrunePendingRef.current = false;
          settlePruneTargetRef.current = null;
          return cappedVisible;
        }

        settlePrunePendingRef.current = true;
        settlePruneTargetRef.current = cappedVisible;
        setMapGridBackgroundActivity('settle-prune', 'Visible-settle prune', true, 'pruning toward viewport');
        return pruneVisibleNodesTowardTarget(base, cappedVisible, MAP_GRID_MAX_NODES_REMOVED_PER_FRAME);
      });
    });
  }, [commitCullSpatialIndex, isCameraMovingRef, nodeByVisualId, renderedCameraRef, renderNodes]);

  const spatialCullRafRef = useRef<number | null>(null);

  useEffect(() => {
    if (spatialCullRafRef.current != null) {
      window.cancelAnimationFrame(spatialCullRafRef.current);
    }
    spatialCullRafRef.current = window.requestAnimationFrame(() => {
      spatialCullRafRef.current = null;
      applyVisibleNodeCull();
    });
    return () => {
      if (spatialCullRafRef.current != null) {
        window.cancelAnimationFrame(spatialCullRafRef.current);
        spatialCullRafRef.current = null;
      }
    };
  }, [
    applyVisibleNodeCull,
    gridSearchJumpToken,
    gridFocusSha,
    cameraRenderTick,
    panEpoch,
    viewportClientSize,
  ]);

  useEffect(() => {
    if (isCameraMovingRef.current) return;

    if (!settlePrunePendingRef.current || settlePruneTargetRef.current == null) {
      setMapGridBackgroundActivity('settle-prune', 'Visible-settle prune', false);
      return;
    }
    if (settlePruneRafRef.current != null) return;

    settlePruneRafRef.current = window.requestAnimationFrame(() => {
      settlePruneRafRef.current = null;
      const target = settlePruneTargetRef.current;
      if (!target || !settlePrunePendingRef.current) return;

      setVisibleNodeIds((prev) => {
        if (!prev || visibleCommitIdSetEquals(prev, target)) {
          settlePrunePendingRef.current = false;
          settlePruneTargetRef.current = null;
          return prev ?? target;
        }
        const next = pruneVisibleNodesTowardTarget(prev, target, MAP_GRID_MAX_NODES_REMOVED_PER_FRAME);
        if (visibleCommitIdSetEquals(next, target)) {
          settlePrunePendingRef.current = false;
          settlePruneTargetRef.current = null;
        }
        return visibleCommitIdSetEquals(prev, next) ? prev : next;
      });
    });

    return () => {
      if (settlePruneRafRef.current != null) {
        window.cancelAnimationFrame(settlePruneRafRef.current);
        settlePruneRafRef.current = null;
      }
    };
  }, [panEpoch, visibleNodeIds]);

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

  const renderedNodeCount = isDebugOpen ? visibleRenderNodes.length : 0;
  const renderedMergeConnectorCount = isDebugOpen ? mergeConnectorsForView.filter((connector) => cullConnectorPath(connector)).length : 0;
  const renderedConnectorCount = isDebugOpen ? connectorsForView.filter((connector) => cullConnectorPath(connector)).length : 0;

  useLayoutEffect(() => {
    if (isLoading) return;
    if (blockMapInteraction) return;
    if (renderNodes.length === 0) return;
    if (visibleNodeIds.size > 0) {
      autoRecoverRef.current = null;
      return;
    }
    // Viewport culling can briefly report zero visible nodes while panning; recentering
    // during an active pan gesture reads as a teleport.
    if (isCameraMovingRef.current) return;

    const viewport = scrollContainerRef.current;
    if (!viewport || viewport.clientWidth <= 0 || viewport.clientHeight <= 0) return;
    const origin = getTransformLayerOriginScreen();
    if (!origin) return;

    const recoveryKey = `${mapReadyEpoch}:${renderNodes.length}:${contentWidth}:${contentHeight}`;
    const previousRecovery = autoRecoverRef.current;
    const attempts = previousRecovery?.key === recoveryKey ? previousRecovery.attempts + 1 : 1;
    autoRecoverRef.current = { key: recoveryKey, attempts };

    if (attempts >= 2) {
      // Safety valve: if culling still reports nothing after recentering, render all commits.
      setVisibleNodeIds(new Set(renderNodes.map((node) => node.commit.visualId)));
      return;
    }

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (const node of renderNodes) {
      minX = Math.min(minX, node.x);
      minY = Math.min(minY, node.y + CARD_BODY_TOP_OFFSET);
      maxX = Math.max(maxX, node.x + CARD_WIDTH);
      maxY = Math.max(maxY, node.y + CARD_BODY_TOP_OFFSET + CARD_HEIGHT);
    }
    if (!Number.isFinite(minX) || !Number.isFinite(minY) || !Number.isFinite(maxX) || !Number.isFinite(maxY)) return;
    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;
    const viewportRect = viewport.getBoundingClientRect();
    const targetZoom = renderedCameraRef.current.zoom;
    const scale = targetZoom / GRID_RENDER_ZOOM;
    const targetScreenX = viewportRect.left + viewportRect.width / 2;
    const targetScreenY = viewportRect.top + viewportRect.height / 2;
    syncCamera(
      targetScreenX - origin.x - centerX * scale,
      targetScreenY - origin.y - centerY * scale,
      targetZoom,
    );
  }, [
    isLoading,
    blockMapInteraction,
    renderNodes,
    visibleNodeIds,
    mapReadyEpoch,
    contentWidth,
    contentHeight,
    getTransformLayerOriginScreen,
    renderedCameraRef,
    syncCamera,
  ]);

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

      const checkoutTarget = parseMapCheckoutTarget(node);
      if (!checkoutTarget || !onCommitClick) return;

      if (checkoutPickerWorktrees.length <= 1) {
        const onlyPath = checkoutPickerWorktrees[0]?.path ?? currentRepoPath;
        if (!onlyPath) return;
        void onCommitClick({
          ...checkoutTarget,
          worktreePath: onlyPath,
        });
        return;
      }

      const defaultPath =
        checkoutPickerWorktrees.find((entry) => entry.session.isCurrent)?.path
        ?? checkoutPickerWorktrees[0]?.path
        ?? null;
      setCheckoutPickerTarget(checkoutTarget);
      setCheckoutPickerSelectedPath(defaultPath);
      setCheckoutPickerOpen(true);
    },
    [checkoutPickerWorktrees, currentRepoPath, onCommitClick],
  );

  const confirmCheckoutWorktree = useCallback(() => {
    if (!checkoutPickerTarget || !checkoutPickerSelectedPath || !onCommitClick) return;
    setCheckoutPickerOpen(false);
    void onCommitClick({
      ...checkoutPickerTarget,
      worktreePath: checkoutPickerSelectedPath,
    });
    setCheckoutPickerTarget(null);
    setCheckoutPickerSelectedPath(null);
  }, [checkoutPickerSelectedPath, checkoutPickerTarget, onCommitClick]);

  const buildSnappedDragOverrides = useCallback(
    (dragState: NonNullable<typeof dragNodeRef.current>) => {
      const snapped = snapNodePosition(dragState.pendingX, dragState.pendingY);
      const deltaX = dragState.pendingX - dragState.baseX;
      const deltaY = dragState.pendingY - dragState.baseY;
      const snapDeltaX = snapped.x - dragState.pendingX;
      const snapDeltaY = snapped.y - dragState.pendingY;
      const next: NodePositionOverrides = canonicalizeNodePositionOverridesForCommits(
        dragState.baseOverrides,
        dragState.baseNodes.map((node) => node.commit),
      );
      for (const groupNode of dragState.groupNodes) {
        assignNodePositionOverride(next, groupNode.commit, {
          x: groupNode.baseX + deltaX + snapDeltaX,
          y: groupNode.baseY + deltaY + snapDeltaY,
        });
      }
      return avoidNodeCollisions(dragState, next);
    },
    [avoidNodeCollisions, snapNodePosition],
  );

  const buildLiveDragPreviewOverrides = useCallback(
    (dragState: NonNullable<typeof dragNodeRef.current>) => {
      const deltaX = dragState.pendingX - dragState.baseX;
      const deltaY = dragState.pendingY - dragState.baseY;
      const next: NodePositionOverrides = {};
      for (const groupNode of dragState.groupNodes) {
        assignNodePositionPreview(next, groupNode.commit, {
          x: groupNode.baseX + deltaX,
          y: groupNode.baseY + deltaY,
        });
      }
      return next;
    },
    [],
  );

  const flushDragPosition = useCallback(() => {
    dragRafRef.current = null;
    const dragState = dragNodeRef.current;
    if (!dragState) return;
    setDragPreviewByNodeId(buildLiveDragPreviewOverrides(dragState));
  }, [buildLiveDragPreviewOverrides]);

  const updateDragPosition = useCallback(
    (clientX: number, clientY: number) => {
      const dragState = dragNodeRef.current;
      if (!dragState) return;
      const dragScale = renderedCameraRef.current.zoom / GRID_RENDER_ZOOM;
      const inverseScale = dragScale > 0 ? 1 / dragScale : 1;
      const deltaX = (clientX - dragState.startX) * inverseScale;
      const deltaY = (clientY - dragState.startY) * inverseScale;
      if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) dragState.moved = true;
      if (dragState.moved) suppressNextCommitClickRef.current = true;
      dragState.pendingX = dragState.baseX + deltaX;
      dragState.pendingY = dragState.baseY + deltaY;
      if (dragRafRef.current != null) return;
      dragRafRef.current = window.requestAnimationFrame(flushDragPosition);
    },
    [flushDragPosition, renderedCameraRef],
  );

  const persistNodePositionsDirectly = useCallback((nextOverrides: NodePositionOverrides) => {
    if (!currentRepoPath) return;
    const normalizedPath = normalizeRepoPathForNodePositions(currentRepoPath);
    const payloadJson = JSON.stringify(nextOverrides);
    try {
      window.localStorage.setItem(nodePositionsStorageKey(normalizedPath), payloadJson);
    } catch {
      // App-level persistence still attempts the Tauri write.
    }
    void invoke('store_repo_node_positions', {
      repoPath: normalizedPath,
      payloadJson,
    }).catch((error) => {
      console.error('Failed to directly save node positions:', error);
    });
  }, [currentRepoPath]);

  const endDrag = useCallback(() => {
    if (dragRafRef.current != null) {
      window.cancelAnimationFrame(dragRafRef.current);
      dragRafRef.current = null;
      flushDragPosition();
    }
    const dragState = dragNodeRef.current;
    if (dragState?.moved) {
      const nextOverrides = buildSnappedDragOverrides(dragState);
      setNodePositionOverrides(nextOverrides);
      persistNodePositionsDirectly(nextOverrides);
    }
    dragNodeRef.current = null;
    setActiveDragNodeIds(new Set());
    setDragPreviewByNodeId({});
    document.body.style.removeProperty('user-select');
    document.body.style.removeProperty('-webkit-user-select');
    window.setTimeout(() => {
      suppressNextCommitClickRef.current = false;
    }, 0);
  }, [buildSnappedDragOverrides, flushDragPosition, persistNodePositionsDirectly]);

  const handleNodePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>, node: Node) => {
      if (event.button !== 0) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest('button, a, input, textarea, select')) return;
      event.stopPropagation();
      event.preventDefault();
      window.getSelection()?.removeAllRanges();
      document.body.style.setProperty('user-select', 'none');
      document.body.style.setProperty('-webkit-user-select', 'none');
      suppressNextCommitClickRef.current = false;
      event.currentTarget.setPointerCapture(event.pointerId);
      const currentOverride = getNodePositionOverride(nodePositionOverrides, node.commit);
      const baseX = currentOverride?.x ?? node.x;
      const baseY = currentOverride?.y ?? node.y;
      const selectedCommitShaSet = new Set(selectedVisibleCommitShas);
      const shouldDragSelection = selectedCommitShaSet.size > 1 && selectedCommitShaSet.has(node.commit.id);
      const groupNodes = (shouldDragSelection
        ? renderNodes.filter((renderNode) => selectedCommitShaSet.has(renderNode.commit.id))
        : [node]
      ).map((groupNode) => {
        const groupOverride = getNodePositionOverride(nodePositionOverrides, groupNode.commit);
        return {
          nodeId: groupNode.commit.visualId,
          commit: groupNode.commit,
          baseX: groupOverride?.x ?? groupNode.x,
          baseY: groupOverride?.y ?? groupNode.y,
        };
      });
      setActiveDragNodeIds(new Set(groupNodes.map((groupNode) => groupNode.nodeId)));
      dragNodeRef.current = {
        nodeId: node.commit.visualId,
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        baseX,
        baseY,
        sourceLane: orientation === 'horizontal' ? laneFromY(baseY) : node.column,
        baseOverrides: nodePositionOverrides,
        baseNodes: renderNodes,
        groupNodes,
        moved: false,
        pendingX: baseX,
        pendingY: baseY,
      };
    },
    [laneFromY, nodePositionOverrides, orientation, renderNodes, selectedVisibleCommitShas],
  );

  const handleNodePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const dragState = dragNodeRef.current;
      if (!dragState) return;
      if (dragState.pointerId != null && dragState.pointerId !== event.pointerId) return;
      updateDragPosition(event.clientX, event.clientY);
    },
    [updateDragPosition],
  );

  const handleNodePointerUp = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const dragState = dragNodeRef.current;
      if (!dragState) return;
      if (dragState.pointerId != null && dragState.pointerId !== event.pointerId) return;
      try {
        event.currentTarget.releasePointerCapture(event.pointerId);
      } catch {
        // Ignore if pointer capture was already released.
      }
      endDrag();
    },
    [endDrag],
  );

  useEffect(() => {
    const handleWindowPointerMove = (event: PointerEvent) => {
      const dragState = dragNodeRef.current;
      if (!dragState) return;
      if (dragState.pointerId != null && dragState.pointerId !== event.pointerId) return;
      updateDragPosition(event.clientX, event.clientY);
    };
    const handleWindowPointerEnd = (event: PointerEvent) => {
      const dragState = dragNodeRef.current;
      if (!dragState) return;
      if (dragState.pointerId != null && dragState.pointerId !== event.pointerId) return;
      endDrag();
    };
    window.addEventListener('pointermove', handleWindowPointerMove);
    window.addEventListener('pointerup', handleWindowPointerEnd);
    window.addEventListener('pointercancel', handleWindowPointerEnd);
    return () => {
      window.removeEventListener('pointermove', handleWindowPointerMove);
      window.removeEventListener('pointerup', handleWindowPointerEnd);
      window.removeEventListener('pointercancel', handleWindowPointerEnd);
    };
  }, [endDrag, updateDragPosition]);

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
      branchNames: selectedDeletableBranchNames,
      discardUncommittedChanges: hasSelectedUncommittedChanges,
      discardUncommittedWorktreePaths: uncommittedSessionsToDiscard.map((session) => session.path),
      stashIndices: selectedStashIndices,
    });
    setDeleteConfirmOpen(false);
    setSelectedCommitShas([]);
    setMergeTargetCommitSha(null);
  }, [
    onDeleteSelection,
    hasSelectedUncommittedChanges,
    selectedStashIndices,
    uncommittedSessionsToDiscard,
    selectedDeletableBranchNames,
  ]);

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
          isWorkingTreeCommitId(target) ||
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
      (isWorkingTreeCommitId(selectedVisibleCommitShas[0]) || selectedVisibleCommitShas[0].startsWith('STASH:'))) ||
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
    const element = hudToolbarRef.current;
    if (!element) return;
    const compactThresholdPx = 640;
    const searchHideThresholdPx = 440;
    const update = () => {
      const width = element.getBoundingClientRect().width;
      setIsCompactHud(width < compactThresholdPx);
      setHideSearchBar(width < searchHideThresholdPx);
    };
    update();
    const observer = new ResizeObserver(() => update());
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!onDeleteSelection) return;
      if (deleteConfirmOpen) return;
      if (deletableSelectionCount === 0) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest('input, textarea, select, button, [contenteditable="true"]')) return;
      if (event.key !== 'Delete' && event.key !== 'Backspace') return;
      event.preventDefault();
      setDeleteConfirmOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [deleteConfirmOpen, deletableSelectionCount, onDeleteSelection]);

  void [openPRs, onLoadMore, view, staleBranches, isLoading, scrollRequest, focusedErrorBranch, mapTopInsetPx, visibleNodesBySha, freshCopyBranchNames];

  useLayoutEffect(() => {
    if (isLoading) return;
    if (blockMapInteraction) return;
    if (lastReadyEpochReportedRef.current === mapReadyEpoch) return;
    const rafId = window.requestAnimationFrame(() => {
      if (lastReadyEpochReportedRef.current === mapReadyEpoch) return;
      lastReadyEpochReportedRef.current = mapReadyEpoch;
      onMapReadyForDisplay?.(mapReadyEpoch);
    });
    return () => window.cancelAnimationFrame(rafId);
  }, [allCommits.length, isLoading, blockMapInteraction, mapReadyEpoch, onMapReadyForDisplay]);

  return (
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-background">
      <MapGridDebugPanel
        isOpen={isDebugOpen}
        onClose={() => onDebugClose?.()}
        visibleBounds={visibleBoundsRef.current}
        renderedNodeCount={renderedNodeCount}
        totalNodeCount={renderNodes.length}
        renderedMergeConnectorCount={renderedMergeConnectorCount}
        totalMergeConnectorCount={mergeConnectorsForView.length}
        renderedConnectorCount={renderedConnectorCount}
        totalConnectorCount={connectorsForView.length}
        mapGridCullViewportInsetScreenPx={MAP_GRID_CULL_VIEWPORT_INSET_SCREEN_PX}
        debugRows={resolvedLayoutModel.debugRows}
        branchDebugRows={resolvedLayoutModel.branchDebugRows}
        connectorDecisions={connectorDecisions}
      />
      {gridHudProps ? (
        <header
          data-tauri-drag-region
          onPointerDown={handleHeaderPointerDown}
          className="window-drag-region pointer-events-none absolute inset-x-0 top-0 z-[70] flex w-full select-none"
        >
          <div ref={hudToolbarRef} className="pointer-events-auto ml-auto flex w-full max-w-[calc(100vw-116px)] min-w-0 items-start justify-between gap-3 p-2.25 select-none">
              <div className="flex min-w-0 flex-nowrap items-center justify-start gap-3 overflow-visible">
                <CommitControls
                  compactLabels={isCompactHud}
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
                  onAutoCommitLocalChanges={onAutoCommitLocalChanges}
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
                  currentWorkingTreeId={currentWorkingTreeId}
                  hideMergeControls
                />
              </div>
            <div className="flex min-w-0 shrink-0 items-center justify-end gap-2">
              <div className="window-no-drag pointer-events-auto flex items-center gap-2">
                {!hideSearchBar ? (
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
                ) : null}
              </div>
            </div>
          </div>
          <div className="pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5">
            {gridHudProps.githubAuthStatus?.ghAvailable && !gridHudProps.githubAuthStatus.authenticated ? (
              <button
                onClick={gridHudProps.onGitHubAuthSetup}
                disabled={gridHudProps.githubAuthLoading}
                className="window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
              >
                {gridHudProps.githubAuthLoading ? 'Connecting GitHub...' : 'Connect GitHub'}
              </button>
            ) : null}
            {gridHudProps.githubAuthStatus && !gridHudProps.githubAuthStatus.ghAvailable ? (
              <div className="window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground">
                <p className="shrink-0 text-[10px] font-medium text-foreground">GitHub</p>
                <p className="max-w-36 truncate text-[11px] text-foreground/90">
                  Install `gh` for private PR data
                </p>
              </div>
            ) : null}
            {gridHudProps.githubAuthMessage ? (
              <div className="window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] text-foreground">
                <p className="shrink-0 text-[10px] font-medium text-foreground">GitHub</p>
                <p className="max-w-36 truncate text-[11px] text-foreground/90" title={gridHudProps.githubAuthMessage}>
                  {gridHudProps.githubAuthMessage}
                </p>
              </div>
            ) : null}
            {gridHudProps.commitSwitchFeedback ? (
              <div
                className={`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] transition-opacity duration-200 ${
                  gridHudProps.isCommitSwitchFeedbackVisible ? 'opacity-100' : 'opacity-0'
                } ${
                  gridHudProps.commitSwitchFeedback.kind === 'error'
                    ? 'border-red-500/25 bg-red-50/95 text-red-600 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-400'
                    : 'border-blue-500/25 bg-blue-50/95 text-blue-600 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400'
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
        </header>
      ) : null}
      {shouldShowMergeMenu ? (
        <div className="pointer-events-none absolute bottom-2.25 left-1/2 z-[80] -translate-x-1/2">
          <div className="pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-2.25">
            <div className="inline-flex h-7 items-center rounded-md border border-border bg-background/95 pl-[2px] pr-[4px]">
              <span className="px-2 text-[11px] font-medium text-foreground">Merge to...</span>
              <div className="relative inline-flex h-5 items-center rounded-[2px] bg-muted/30 p-0.5">
                <div className="absolute inset-0.5 overflow-hidden rounded-[1px]">
                  <div
                    className={`h-full rounded-[1px] bg-border ${mergeSliderAnimate ? 'transition-all duration-200 ease-in-out' : ''}`}
                    style={{
                      width: `var(--${mergeSliderScopeId}-active-width, 0px)`,
                      transform: `translateX(var(--${mergeSliderScopeId}-active-offset, 0px))`,
                    }}
                  />
                </div>
                {selectedCommitTargetOption.options.map((option) => {
                  const isActive = option.targetBranch === selectedCommitTargetOption.targetBranch;
                  return (
                    <button
                      key={`merge-${option.targetBranch}`}
                      type="button"
                      onClick={() => {
                        if (option.targetSha !== mergeTargetCommitSha) setMergeSliderAnimate(true);
                        setMergeTargetCommitSha(option.targetSha);
                      }}
                      ref={(node) => {
                        if (!node) return;
                        const parent = node.parentElement;
                        if (!parent) return;
                        if (!isActive) return;
                        const nodeRect = node.getBoundingClientRect();
                        const parentRect = parent.getBoundingClientRect();
                        parent.style.setProperty(`--${mergeSliderScopeId}-active-width`, `${nodeRect.width}px`);
                        parent.style.setProperty(`--${mergeSliderScopeId}-active-offset`, `${nodeRect.left - parentRect.left}px`);
                      }}
                      className={`relative z-10 h-4.5 px-2 text-[11px] font-medium transition-colors ${
                        isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {option.targetBranch}
                    </button>
                  );
                })}
              </div>
            </div>
            <button
              type="button"
              onClick={() =>
                void onMergeRefsIntoBranch(selectedCommitTargetOption.sources, selectedCommitTargetOption.targetBranch!)
              }
              disabled={selectedCommitTargetOption.sources.length === 0 || mergeInProgress}
              className="inline-flex h-7 items-center rounded-md border border-border bg-background px-2 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              <GitMerge className="mr-1.5 h-3.5 w-3.5 shrink-0" />
              {mergeInProgress ? 'Merging...' : 'Confirm'}
            </button>
          </div>
        </div>
      ) : null}
      {isLoading || allCommits.length === 0 ? (
        <MapGridLoadingState />
      ) : (
        <MapGridCanvas
          scrollContainerRef={scrollContainerRef}
          mapPadHostRef={mapPadHostRef}
          registerCameraTarget={registerCameraTarget}
          renderedCameraRef={renderedCameraRef}
          isMarqueeSelecting={isMarqueeSelecting}
          contentWidth={contentWidth}
          contentHeight={contentHeight}
          isCameraMovingRef={isCameraMovingRef}
          panEpoch={panEpoch}
          cameraRenderTick={cameraRenderTick}
          viewportClientSize={viewportClientSize}
          onWheel={handleWheel}
          onMouseDown={startMarqueeDrag}
          onNodePointerDown={handleNodePointerDown}
          onNodePointerMove={handleNodePointerMove}
          onNodePointerUp={handleNodePointerUp}
          displayZoom={displayZoom}
          selectedVisibleCommitShas={selectedVisibleCommitShas}
          normalizedSearchQuery={normalizedSearchQuery}
          matchingNodeIds={matchingNodeIds}
          focusedNode={focusedRenderNode}
          visibleRenderNodes={visibleRenderNodes}
          layoutNodes={renderNodes}
          manuallyOpenedClumps={manuallyOpenedClumps}
          manuallyClosedClumps={manuallyClosedClumps}
          defaultCollapsedClumps={defaultCollapsedClumps}
          leadByClusterKey={leadByClusterKey}
          clusterKeyByCommitId={clusterKeyByCommitId}
          clusterCounts={clusterCounts}
          commitIdsWithRenderedAncestry={commitIdsWithRenderedAncestry}
          nodeWarnings={nodeWarnings}
          commitCornerRadiusPx={commitCornerRadiusPx}
          lineStrokeWidth={lineStrokeWidth}
          connectors={connectorsForView}
          mergeConnectors={mergeConnectorsForView}
          cullConnectorPath={cullConnectorPath}
          flushCameraReactTick={flushCameraReactTick}
          setManuallyOpenedClumps={setManuallyOpenedClumps}
          setManuallyClosedClumps={setManuallyClosedClumps}
          onCommitCardClick={handleCommitCardClick}
          unpushedCommitShasSetByBranch={unpushedCommitShasSetByBranch}
          remoteCommitShas={remoteCommitShas}
          worktreeAccentByCommitId={worktreeAccentByCommitId}
          worktreeSessions={worktreeSessions}
          orientation={orientation}
          dragPreviewByNodeId={dragPreviewByNodeId}
          nodePositionOverrides={nodePositionOverrides}
          connectorPathCacheScopeBase={`${currentRepoPath ?? '__no-repo__'}::${orientation}`}
        />
      )}
      {blockMapDisplay ? <MapGridBlockingOverlay /> : null}

      {marqueeRect && isMarqueeSelecting ? (
        <div
          className="pointer-events-none absolute z-[60] border"
          style={{
            left: marqueeRect.left,
            top: marqueeRect.top,
            width: marqueeRect.width,
            height: marqueeRect.height,
            borderColor: 'var(--select)',
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
        checkoutPickerOpen={checkoutPickerOpen}
        checkoutPickerSummary={checkoutPickerTarget?.summary ?? ''}
        checkoutPickerWorktrees={checkoutPickerWorktrees}
        checkoutPickerSelectedPath={checkoutPickerSelectedPath}
        onCheckoutPickerSelectPath={setCheckoutPickerSelectedPath}
        onCheckoutPickerClose={() => {
          setCheckoutPickerOpen(false);
          setCheckoutPickerTarget(null);
          setCheckoutPickerSelectedPath(null);
        }}
        onCheckoutPickerConfirm={() => void confirmCheckoutWorktree()}
      />
    </div>
  );
}
