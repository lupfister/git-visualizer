import { useRef, useState } from 'react';
import {
  GRID_LANE_WIDTH,
  GRID_ROW_GAP,
  ZOOM_DEFAULT,
} from '../core/MapSvg.constants';
import {
  BranchHeadTarget,
  BranchLineGeometryState,
  ClumpAnchorState,
  ClumpMemberAnchorState,
  CommitSelectionTarget,
  ExpandedClumpState,
  MarqueeDragState,
  MarqueeRect,
  NodeDragDisplay,
  NodeDragState,
  OrientationMode,
  TooltipData,
} from '../core/MapSvg.types';
import { getCameraScale } from '../core/MapSvg.utils';

export function useMapSvgState(args: {
  controlledOrientation?: OrientationMode;
  deleteInProgress: boolean;
  onCreateBranchFromNode: ((nodeId: string, branchName: string) => Promise<void>) | undefined;
  onMoveNodeBackToBranch: ((nodeId: string, targetBranchName: string) => Promise<void>) | undefined;
}) {
  const {
    controlledOrientation,
    deleteInProgress,
    onCreateBranchFromNode,
    onMoveNodeBackToBranch,
  } = args;

  const [, setTooltip] = useState<TooltipData | null>(null);
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);
  const [hoveredNodeStrokeKey, setHoveredNodeStrokeKey] = useState<string | null>(null);
  const [hoveredNodeBranchName, setHoveredNodeBranchName] = useState<string | null>(null);
  const [expandedClumps, setExpandedClumps] = useState<Map<string, ExpandedClumpState>>(() => new Map());
  const [zoom, setZoom] = useState(ZOOM_DEFAULT);
  const [internalOrientation] = useState<OrientationMode>('vertical');
  const [isOrientationSwitchFading, setIsOrientationSwitchFading] = useState(false);

  const [showLineageDebug, setShowLineageDebug] = useState(false);
  const [selectedBranchNames, setSelectedBranchNames] = useState<string[]>([]);
  const [selectedCommitShas, setSelectedCommitShas] = useState<string[]>([]);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [commitDialogOpen, setCommitDialogOpen] = useState(false);
  const [commitMessageDraft, setCommitMessageDraft] = useState('');
  const commitMessageRef = useRef<HTMLTextAreaElement>(null);
  const [worktreeMenuOpen, setWorktreeMenuOpen] = useState(false);
  const worktreeMenuRef = useRef<HTMLDivElement>(null);
  const [gitActionMenuOpen, setGitActionMenuOpen] = useState(false);
  const gitActionMenuRef = useRef<HTMLDivElement>(null);
  const deleteConfirmOpenRef = useRef(false);
  const deleteInProgressRef = useRef(deleteInProgress);
  const deletableSelectionCountRef = useRef(0);
  const marqueeBaseSelectionRef = useRef<{ branchNames: string[]; commitShas: string[] }>({
    branchNames: [],
    commitShas: [],
  });
  const [mergeTargetCommitSha, setMergeTargetCommitSha] = useState<string | null>(null);
  const [isMarqueeSelecting, setIsMarqueeSelecting] = useState(false);
  const [marqueeRect, setMarqueeRect] = useState<MarqueeRect | null>(null);
  const [nodeDragDisplay, setNodeDragDisplay] = useState<NodeDragDisplay | null>(null);
  const [newBranchDialogForNode, setNewBranchDialogForNode] = useState<{ nodeId: string; stashIndex?: number } | null>(null);
  const [newBranchNameForNode, setNewBranchNameForNode] = useState('');
  const orientation = controlledOrientation ?? internalOrientation;
  const isHorizontal = orientation === 'horizontal';
  const gridEventGap = isHorizontal ? GRID_LANE_WIDTH : GRID_ROW_GAP;
  const gridLaneWidth = isHorizontal ? GRID_ROW_GAP : GRID_LANE_WIDTH;
  // WKWebView (Tauri) doesn't fire CSS animations on SVG elements inserted during
  // the initial paint. Defer animation classes by one rAF so they start post-paint.
  const [drawReady, setDrawReady] = useState(false);
  const [animationsLocked, setAnimationsLocked] = useState(true);
  // flashingName: branch in "bright" phase right after focus (clears after 700ms, triggering CSS stroke transition to lighter red)
  const [_flashingName, setFlashingName] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const zoomLayerRef = useRef<SVGGElement>(null);
  const zoomRef = useRef(zoom);
  const zoomStateRef = useRef(zoom);
  const lastContinuousZoomTsRef = useRef(0);
  const gestureZoomBaseRef = useRef(zoomRef.current);
  const gesturePointRef = useRef<{ x: number; y: number } | null>(null);
  const lastPointerClientRef = useRef<{ x: number; y: number } | null>(null);
  const zoomStableTextElsRef = useRef<SVGTextElement[]>([]);
  const zoomStableRectElsRef = useRef<SVGRectElement[]>([]);
  const panUiSyncTimeoutRef = useRef<number | null>(null);
  const zoomUiSyncTimeoutRef = useRef<number | null>(null);
  const cameraPaintRafRef = useRef<number | null>(null);
  const pendingCameraRef = useRef<{ pan: { x: number; y: number }; zoom: number } | null>(null);
  const lastPaintedZoomScaleRef = useRef<number | null>(null);
  const [, setClumpAnimationTick] = useState(0);
  const clumpAnchorStateRef = useRef<Map<string, ClumpAnchorState>>(new Map());
  const clumpMemberAnchorStateRef = useRef<Map<string, ClumpMemberAnchorState>>(new Map());
  const branchLineGeometryStateRef = useRef<Map<string, BranchLineGeometryState>>(new Map());
  const stableHorizontalMaxRowRef = useRef<number | null>(null);
  const stableHorizontalMirrorRef = useRef<number | null>(null);
  const clumpRenderCounterRef = useRef(0);
  clumpRenderCounterRef.current += 1;
  const clumpRenderId = clumpRenderCounterRef.current;
  const clumpCleanupTimersRef = useRef<Map<string, number>>(new Map());
  const graphOffsetRef = useRef({ x: 0, y: 0 });
  const graphProjectionRef = useRef({
    graphOffsetX: 0,
    graphOffsetY: 0,
    graphContentTranslateX: 0,
    graphContentTranslateY: 0,
    initialized: false,
  });
  const cameraBoundsRef = useRef({
    viewportW: 0,
    viewportH: 0,
    viewportTopInset: 0,
    canvasWidth: 0,
    canvasHeight: 0,
    svgWidth: 0,
    svgHeight: 0,
    graphOffsetX: 0,
    graphOffsetY: 0,
    isHorizontal: false,
  });
  const contentLayerRef = useRef<SVGGElement>(null);
  const finiteWorldBoundsRef = useRef({
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    measured: false,
  });
  const centerableCommitBoundsRef = useRef({
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    measured: false,
  });
  const panStartRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const panRef = useRef(pan);
  const targetPanRef = useRef(pan);
  const lastUiSyncRef = useRef(0);
  const [isPanning, setIsPanning] = useState(false);
  const isPanningRef = useRef(false);
  const [spaceHeld, setSpaceHeld] = useState(false);
  const spacePressedRef = useRef(false);
  const drawReadyRef = useRef(drawReady);
  const animationsLockedRef = useRef(animationsLocked);
  const focusScrollCancelRef = useRef<(() => void) | null>(null);
  const hasAutoCenteredRef = useRef(false);
  const autoCenterSignatureRef = useRef<string | null>(null);
  const hasUserMovedCameraRef = useRef(false);
  const pendingOrientationAutoCenterRef = useRef(false);
  const orientationSwitchFadeTimeoutRef = useRef<number | null>(null);
  const orientationAutoCenterRafRef = useRef<number | null>(null);
  const marqueeDragRef = useRef<MarqueeDragState | null>(null);
  const nodeDragRef = useRef<NodeDragState | null>(null);
  const newBranchInputForNodeRef = useRef<HTMLInputElement>(null);
  const onCreateBranchFromNodeRef = useRef(onCreateBranchFromNode);
  const onMoveNodeBackToBranchRef = useRef(onMoveNodeBackToBranch);
  const moveBackCandidateBranchNamesRef = useRef<Set<string>>(new Set());
  const branchHeadTargetsRef = useRef<BranchHeadTarget[]>([]);
  const commitSelectionTargetsRef = useRef<CommitSelectionTarget[]>([]);
  const selectionProjectionRef = useRef({
    graphOffsetX: 0,
    graphOffsetY: 0,
    graphContentTranslateX: 0,
    graphContentTranslateY: 0,
    isHorizontal: false,
  });

  const [, setTimelineRevealReady] = useState(false);
  const [timelineRevealPhase, setTimelineRevealPhase] = useState<'hidden' | 'fading' | 'done'>('hidden');
  const [hasInitialRevealDone, setHasInitialRevealDone] = useState(false);
  const timelineRevealStartTimeoutRef = useRef<number | null>(null);
  const timelineRevealDoneTimeoutRef = useRef<number | null>(null);

  // Bottom chrome controls visibility state
  const [controlsReady, setControlsReady] = useState(false);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const [isResizeSettling, setIsResizeSettling] = useState(false);
  const resizeRafRef = useRef<number | null>(null);
  const resizeSettleTimeoutRef = useRef<number | null>(null);
  const lastViewportRef = useRef({ width: 0, height: 0 });
  // Use zoomRef (not React `zoom` state) so transforms match paintCamera during throttled sync.
  // Otherwise re-renders can overwrite the <g> scale with a stale zoom and cause WKWebView glitches.
  const layerCameraScale = getCameraScale(zoomRef.current, isHorizontal);

  // Branch issues panel state
  const [errorPanelOpen, setErrorPanelOpen] = useState(false);
  const errorPanelRef = useRef<HTMLDivElement>(null);

  return {
    setTooltip,
    hoveredBranch,
    setHoveredBranch,
    hoveredNodeStrokeKey,
    setHoveredNodeStrokeKey,
    hoveredNodeBranchName,
    setHoveredNodeBranchName,
    expandedClumps,
    setExpandedClumps,
    zoom,
    setZoom,
    internalOrientation,
    isOrientationSwitchFading,
    setIsOrientationSwitchFading,
    showLineageDebug,
    setShowLineageDebug,
    selectedBranchNames,
    setSelectedBranchNames,
    selectedCommitShas,
    setSelectedCommitShas,
    deleteConfirmOpen,
    setDeleteConfirmOpen,
    commitDialogOpen,
    setCommitDialogOpen,
    commitMessageDraft,
    setCommitMessageDraft,
    commitMessageRef,
    worktreeMenuOpen,
    setWorktreeMenuOpen,
    worktreeMenuRef,
    gitActionMenuOpen,
    setGitActionMenuOpen,
    gitActionMenuRef,
    deleteConfirmOpenRef,
    deleteInProgressRef,
    deletableSelectionCountRef,
    marqueeBaseSelectionRef,
    mergeTargetCommitSha,
    setMergeTargetCommitSha,
    isMarqueeSelecting,
    setIsMarqueeSelecting,
    marqueeRect,
    setMarqueeRect,
    nodeDragDisplay,
    setNodeDragDisplay,
    newBranchDialogForNode,
    setNewBranchDialogForNode,
    newBranchNameForNode,
    setNewBranchNameForNode,
    orientation,
    isHorizontal,
    gridEventGap,
    gridLaneWidth,
    drawReady,
    setDrawReady,
    animationsLocked,
    setAnimationsLocked,
    _flashingName,
    setFlashingName,
    scrollRef,
    cameraRef,
    svgRef,
    zoomLayerRef,
    zoomRef,
    zoomStateRef,
    lastContinuousZoomTsRef,
    gestureZoomBaseRef,
    gesturePointRef,
    lastPointerClientRef,
    zoomStableTextElsRef,
    zoomStableRectElsRef,
    panUiSyncTimeoutRef,
    zoomUiSyncTimeoutRef,
    cameraPaintRafRef,
    pendingCameraRef,
    lastPaintedZoomScaleRef,
    setClumpAnimationTick,
    clumpAnchorStateRef,
    clumpMemberAnchorStateRef,
    branchLineGeometryStateRef,
    stableHorizontalMaxRowRef,
    stableHorizontalMirrorRef,
    clumpRenderCounterRef,
    clumpRenderId,
    clumpCleanupTimersRef,
    graphOffsetRef,
    graphProjectionRef,
    cameraBoundsRef,
    contentLayerRef,
    finiteWorldBoundsRef,
    centerableCommitBoundsRef,
    panStartRef,
    pan,
    setPan,
    panRef,
    targetPanRef,
    lastUiSyncRef,
    isPanning,
    setIsPanning,
    isPanningRef,
    spaceHeld,
    setSpaceHeld,
    spacePressedRef,
    drawReadyRef,
    animationsLockedRef,
    focusScrollCancelRef,
    hasAutoCenteredRef,
    autoCenterSignatureRef,
    hasUserMovedCameraRef,
    pendingOrientationAutoCenterRef,
    orientationSwitchFadeTimeoutRef,
    orientationAutoCenterRafRef,
    marqueeDragRef,
    nodeDragRef,
    newBranchInputForNodeRef,
    onCreateBranchFromNodeRef,
    onMoveNodeBackToBranchRef,
    moveBackCandidateBranchNamesRef,
    branchHeadTargetsRef,
    commitSelectionTargetsRef,
    selectionProjectionRef,
    setTimelineRevealReady,
    timelineRevealPhase,
    setTimelineRevealPhase,
    hasInitialRevealDone,
    setHasInitialRevealDone,
    timelineRevealStartTimeoutRef,
    timelineRevealDoneTimeoutRef,
    controlsReady,
    setControlsReady,
    viewportSize,
    setViewportSize,
    isResizeSettling,
    setIsResizeSettling,
    resizeRafRef,
    resizeSettleTimeoutRef,
    lastViewportRef,
    layerCameraScale,
    errorPanelOpen,
    setErrorPanelOpen,
    errorPanelRef,
  };
}
