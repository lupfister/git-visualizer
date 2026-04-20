import React, { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { Branch, BranchCommitPreview, DirectCommit, MergeNode, WorktreeInfo } from '../../../types';
import {
  buildBranchOrthogonalPath,
  buildMergeOrthogonalPath,
  commitRectSize,
} from '../layout/LayoutSvg';
import {
  BRANCH_HIT_STROKE_WIDTH,
  BRANCH_COLUMN_REUSE_TIME_GAP_FACTOR,
  BRANCH_MAP_SVG_FONT_FAMILY,
  CAMERA_UI_SYNC_MS,
  CANVAS_NEUTRAL_GRAY,
  CANVAS_NEUTRAL_GRAY_HOVER,
  CANVAS_NODE_FILL,
  CANVAS_NODE_STROKE,
  CANVAS_NODE_STROKE_INSET,
  CANVAS_NODE_STROKE_WIDTH,
  CANVAS_PAD_X,
  CANVAS_PAD_Y,
  CANVAS_UNPUSHED_NODE_FILL,
  CANVAS_UNPUSHED_NODE_FILL_HEX,
  CHECKED_OUT_AHEAD_OFFSET_WORLD,
  CHECKED_OUT_SELECTION_FILL,
  CHECKED_OUT_SELECTION_HOVER_STROKE,
  CHECKED_OUT_SELECTION_STROKE,
  COMMIT_CLUSTER_PREVIEW_MAX,
  COMMIT_NODE_CORNER_RADIUS,
  COMMIT_TOOLTIP_PREVIEW_MAX,
  CORNER_R,
  DEBUG_BRANCH_HIT_AREA_COLOR,
  DEBUG_BRANCH_HIT_AREA_OPACITY,
  DEBUG_SHOW_BRANCH_HIT_AREAS,
  DROPDOWN_SPRING_VARIANTS,
  ENABLE_NODE_PUSH_DEBUG_LABEL,
  ENABLE_TIMELINE_INTRO_ANIMATIONS,
  GRID_LANE_OFFSET_X,
  GRID_LANE_WIDTH,
  GRID_MERGE_EVENT_ROW_NUDGE,
  GRID_NODE_RECT,
  GRID_ROUTE_CORNER_R,
  GRID_ROW_SHARE_TIME_TOLERANCE_FACTOR,
  GRID_VIEW_PAD_X,
  HOVER_NODE_FILL,
  INITIAL_CENTER_SETTLE_MS,
  INITIAL_REVEAL_FADE_MS,
  LEFT_PAD,
  LOCAL_UNPUSHED_GRAY,
  MATCH_SVG_ASPECT_TO_VIEWPORT,
  NODE_SIZE,
  ORIENTATION_SWITCH_FADE_MS,
  PROMPT_CLUSTER_PREVIEW_MAX,
  PROMPT_TOOLTIP_PREVIEW_MAX,
  RESIZE_SETTLE_MS,
  RIGHT_PAD,
  STASH_LABEL_TEXT,
  SVG_AREA_BG,
  SVG_CONTENT_PADDING_BASE,
  SVG_CONTENT_PADDING_MAX,
  SVG_CONTENT_PADDING_VIEWPORT_REF_MIN,
  SVG_LAYOUT_TAIL_X,
  SVG_LAYOUT_TAIL_Y,
  TIME_SCALE_DEFAULT,
  UNPUSHED_LANE_STROKE_VISUAL_COMP,
  USER_SELECTION_FILL,
  USER_SELECTION_STROKE,
  WORKTREE_OTHER_FILL,
  WORKTREE_OTHER_HOVER_STROKE,
  WORKTREE_OTHER_INNER_TEXT,
  WORKTREE_OTHER_STROKE,
  WORKTREE_OTHER_TITLE,
  ZOOM_DEFAULT,
  ZOOM_MAX,
  ZOOM_MIN,
  ZOOM_WHEEL_DELTA_MAX_PX,
  ZOOM_WHEEL_EXP_SENSITIVITY,
} from './MapSvg.constants';
import {
  AnchorPoint,
  BranchHeadTarget,
  BranchLineGeometryState,
  BranchMapProps,
  BranchRenderLayout,
  ClampMode,
  ClumpAnchorState,
  ExpandedClumpState,
  MarqueeRect,
  MarkerCluster,
  MarkerEntry,
  NodeDragState,
  OrientationMode,
  CheckoutAccent,
} from './MapSvg.types';
import {
  buildBranchClusterViewModel,
  buildMainClusterViewModel,
  branchClusterKey,
  branchClusterMemberKeys,
  branchPreferredAnchorEntry,
  buildStraightPath,
  clamp01,
  clumpCountLabel,
  clusterByForkPoints,
  clusterLocalSyntheticStroke,
  collapsedClumpHitRect,
  estimateSvgTextWidth,
  fmtClumpDateRange,
  fmtRelativeDate,
  fmtTooltipDate,
  getCameraScale,
  getPreparedPretext,
  isStashCommitLike,
  isSyntheticLocalCommit,
  nodeLabelFontSize,
  orderByLineage,
  promptMarkerPath,
  pruneForkSplitIndices,
  resolveBranchClusterEntries,
  shaMatchesGitRef,
  smoothValueTo,
  splitIndicesAroundUncommitted,
  stashOrUncommittedBaseStroke,
  truncatePrompt,
} from './MapSvg.utils';
import { computeBranchRenderLayout } from '../layout/MapSvgGraphLayout';
import {
  buildBranchLaneAnchors,
  buildLaneSegments,
  buildMainLaneAnchors,
  resolveBranchHeadProjectedPoint,
  trimLaneSegment,
} from '../layout/MapSvgGraphLayout';
import {
  findOtherWorktreeByHeadSha as findOtherWorktreeByHeadShaInList,
  findOtherWorktreeForCommit as findOtherWorktreeForCommitInList,
  findWorktreeWithBranchCheckedOut as findWorktreeWithBranchCheckedOutInList,
  isOtherWorktree as isOtherWorktreeInList,
  isSelectedLaneBranch as isSelectedLaneBranchInList,
  mergeCheckoutAccent as mergeCheckoutAccentInList,
  otherWorktreeMatchesBranchCommit as otherWorktreeMatchesBranchCommitInList,
  worktreeShortLabel,
} from '../interaction/MapSvgWorktreeSemantics';
import {
  applyMarqueeSelection as applyMarqueeSelectionCore,
  beginMarqueeSelection as beginMarqueeSelectionCore,
  beginNodeDrag as beginNodeDragCore,
  getMarqueeSelectionContext as getMarqueeSelectionContextCore,
  handleCommitNodeClick as handleCommitNodeClickCore,
  normalizeMarqueeRect,
} from '../hooks/useMapSvgInteraction';
import {
  applyCameraCore,
  applyZoomAtCore,
  clampPanCore,
  normalizeWheelDeltaPx as normalizeWheelDeltaPxCore,
  paintCameraCore,
  syncUiStateCore,
} from '../hooks/useMapSvgCamera';
import {
  fitNodeFrameTitleCore,
  getNodeFillColorCore,
  getNodeFrameInnerTextColorCore,
  getNodeFrameTitleColorCore,
  getNodeStrokeColorCore,
  renderCommitNodeRectCore,
  renderCommitNodeShapeRectCore,
  trimTextToWidthCore,
  wrapNodeFrameMessageCore,
} from '../nodes/MapSvgNodeFrame';
import { MapSvgCanvasShell } from '../layers/MapSvgCanvasShell';
import { MapSvgCanvasLayerStack } from '../layers/MapSvgCanvasLayerStack';
import { MapSvgActionOverlays } from '../layers/MapSvgActionOverlays';
import { buildSelectionOps } from '../interaction/MapSvgSelectionOps';
import {
  interpolateExpandedEntryPoseCore,
  resolveClumpPhaseCore,
  resolveClusterMotionCore,
} from '../interaction/MapSvgClumpMotion';
import { normalizeMapSvgProps } from './MapSvgPublicSurface';
import { useMapSvgState } from '../hooks/useMapSvgState';

export default function BranchMap(props: BranchMapProps) {
  const {
    branches,
    mergeNodes,
    directCommits,
    unpushedDirectCommits,
    unpushedCommitShasByBranch,
    defaultBranch,
    onCommitClick,
    branchPromptMeta,
    branchCommitPreviews,
    branchUniqueAheadCounts,
    staleBranches,
    openPRs,
    isLoading,
    scrollRequest,
    focusedErrorBranch,
    checkedOutRef,
    mapTopInsetPx,
    onMergeRefsIntoBranch,
    mergeInProgress,
    onPushAllBranches,
    onPushCurrentBranch,
    onPushCommitTargets,
    pushInProgress,
    onDeleteSelection,
    deleteInProgress,
    worktrees,
    currentRepoPath,
    onRemoveWorktree,
    removeWorktreeInProgress,
    onSwitchToWorktree,
    onStashLocalChanges,
    stashInProgress,
    stashDisabled,
    onCommitLocalChanges,
    commitInProgress,
    commitDisabled,
    onStageAllChanges,
    stageInProgress,
    onCreateBranchFromNode,
    createBranchFromNodeInProgress,
    onMoveNodeBackToBranch,
    controlledOrientation,
  } = normalizeMapSvgProps(props);
  const {
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
    setClumpAnimationTick,
    clumpAnchorStateRef,
    clumpMemberAnchorStateRef,
    branchLineGeometryStateRef,
    stableHorizontalMaxRowRef,
    stableHorizontalMirrorRef,
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
  } = useMapSvgState({
    controlledOrientation,
    deleteInProgress,
    onCreateBranchFromNode,
    onMoveNodeBackToBranch,
  });

  function handleCommitNodeClick(
    event: React.MouseEvent,
    commitSha?: string,
    branchName?: string,
  ) {
    handleCommitNodeClickCore({
      event,
      commitSha,
      branchName,
      clearTransientHoverState,
      freshCopyBranchNames,
      onSwitchToWorktree,
      findOtherWorktreeForCommit,
      findWorktreeWithBranchCheckedOut,
      findOtherWorktreeByHeadSha,
      setSelectedBranchNames,
      setSelectedCommitShas,
      setMergeTargetCommitSha,
      onCommitClick,
    });
  }

  function clearTransientHoverState() {
    setHoveredBranch(null);
    handleNodeHoverLeave();
    setTooltip(null);
  }

  function getMarqueeSelectionContext() {
    return getMarqueeSelectionContextCore({
      selectionProjection: selectionProjectionRef.current,
      zoom: zoomRef.current,
      scaledNodeSize,
    });
  }

  function applyMarqueeSelection(nextRect: MarqueeRect, additive: boolean) {
    applyMarqueeSelectionCore({
      nextRect,
      additive,
      branchTargets: branchHeadTargetsRef.current,
      commitTargets: commitSelectionTargetsRef.current,
      pan: panRef.current,
      context: getMarqueeSelectionContext(),
      baseSelection: marqueeBaseSelectionRef.current,
      setSelectedBranchNames,
      setSelectedCommitShas,
      setMergeTargetCommitSha,
    });
  }

  function beginMarqueeSelection(event: React.MouseEvent<HTMLDivElement>, additive: boolean) {
    beginMarqueeSelectionCore({
      event,
      additive,
      container: scrollRef.current,
      selectedBranchNames,
      selectedCommitShas,
      marqueeDragRef,
      marqueeBaseSelectionRef,
      setTooltip: setTooltip as React.Dispatch<React.SetStateAction<unknown>>,
      setMarqueeRect,
      setIsMarqueeSelecting,
    });
  }

  function beginNodeDrag(e: React.MouseEvent, nodeId: string, _worldX: number, _worldY: number) {
    beginNodeDragCore({
      event: e,
      nodeId,
      scrollContainer: scrollRef.current,
      svg: svgRef.current,
      branches,
      checkedOutRef,
      onCreateBranchFromNode,
      onMoveNodeBackToBranch,
      nodeDragRef,
    });
  }

  function clearTimelineRevealTimer() {
    if (timelineRevealStartTimeoutRef.current !== null) {
      clearTimeout(timelineRevealStartTimeoutRef.current);
      timelineRevealStartTimeoutRef.current = null;
    }
    if (timelineRevealDoneTimeoutRef.current !== null) {
      clearTimeout(timelineRevealDoneTimeoutRef.current);
      timelineRevealDoneTimeoutRef.current = null;
    }
  }

  function scheduleTimelineReveal(delayMs = INITIAL_CENTER_SETTLE_MS) {
    if (!ENABLE_TIMELINE_INTRO_ANIMATIONS) {
      clearTimelineRevealTimer();
      setTimelineRevealPhase('done');
      setTimelineRevealReady(true);
      setHasInitialRevealDone(true);
      return;
    }
    clearTimelineRevealTimer();
    setTimelineRevealReady(false);
    setTimelineRevealPhase('hidden');
    timelineRevealStartTimeoutRef.current = window.setTimeout(() => {
      timelineRevealStartTimeoutRef.current = null;
      setTimelineRevealPhase('fading');
      timelineRevealDoneTimeoutRef.current = window.setTimeout(() => {
        timelineRevealDoneTimeoutRef.current = null;
        setTimelineRevealPhase('done');
        setTimelineRevealReady(true);
        setHasInitialRevealDone(true);
      }, INITIAL_REVEAL_FADE_MS);
    }, delayMs);
  }

  function markUserMovedCamera() {
    hasUserMovedCameraRef.current = true;
    clearTimelineRevealTimer();
    setTimelineRevealPhase('done');
    setTimelineRevealReady(true);
    setHasInitialRevealDone(true);
  }

  const openPRBranchNames = useMemo(
    () => new Set(openPRs.map((p) => p.branchName)),
    [openPRs]
  );
  const localBranchCount = useMemo(
    () => branches.filter((b) => b.name !== defaultBranch).length,
    [branches, defaultBranch]
  );
  const hasTimelineSeedData =
    mergeNodes.length > 0 || directCommits.length > 0 || localBranchCount > 0;

  // Trigger draw-in animations when timeline data first arrives (not on mount),
  // so the timeline always animates in even when the map view is shown before data loads.
  const hadDataRef = useRef(false);
  useEffect(() => {
    // Reset when data is cleared (new repo selected) so animations retrigger.
    if (!hasTimelineSeedData) {
      hadDataRef.current = false;
      setDrawReady(false);
      setAnimationsLocked(true);
      return;
    }
    if (hadDataRef.current) return;
    hadDataRef.current = true;

    if (!ENABLE_TIMELINE_INTRO_ANIMATIONS) {
      setDrawReady(true);
      setAnimationsLocked(true);
      return;
    }

    // Use a cancelled flag so React StrictMode's cleanup can invalidate the
    // first invocation's callbacks before the second invocation schedules its own.
    let cancelled = false;
    let id1: number, id2: number;
    id1 = requestAnimationFrame(() => {
      if (cancelled) return;
      id2 = requestAnimationFrame(() => {
        if (cancelled) return;
        setDrawReady(true);
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(id1);
      cancelAnimationFrame(id2);
      // Reset so the re-invocation (StrictMode second mount) can trigger normally.
      hadDataRef.current = false;
    };
  }, [hasTimelineSeedData]);

  useLayoutEffect(() => {
    zoomRef.current = zoom;
    zoomStateRef.current = zoom;
    paintCamera(panRef.current, zoomRef.current);
  }, [zoom]);

  function resolveAnimatedClumpAnchor(
    clusterKey: string,
    target: AnchorPoint,
    memberKeys: readonly string[]
  ): AnchorPoint {
    const clumpAnchorStates = clumpAnchorStateRef.current;
    const clumpMemberAnchorStates = clumpMemberAnchorStateRef.current;
    const existing = clumpAnchorStates.get(clusterKey);
    const state: ClumpAnchorState = existing
      ? {
        ...existing,
        targetX: target.x,
        targetY: target.y,
        lastSeenRender: clumpRenderId,
      }
      : {
        x: target.x,
        y: target.y,
        targetX: target.x,
        targetY: target.y,
        lastSeenRender: clumpRenderId,
      };
    clumpAnchorStates.set(clusterKey, state);
    for (const memberKey of memberKeys) {
      const existingMember = clumpMemberAnchorStates.get(memberKey);
      clumpMemberAnchorStates.set(memberKey, existingMember
        ? {
          ...existingMember,
          lastSeenRender: clumpRenderId,
        }
        : {
          x: target.x,
          y: target.y,
          lastSeenRender: clumpRenderId,
        });
    }
    return { x: state.x, y: state.y };
  }

  function resolveAnimatedBranchLineGeometry(
    branchKey: string,
    target: {
      startX: number;
      forkY: number;
      lanePosX: number;
      tipY: number;
      mergeTargetX: number | null;
      mergeTargetY: number | null;
      localSegmentStartY: number | null;
    },
  ): {
    startX: number;
    forkY: number;
    lanePosX: number;
    tipY: number;
    mergeTargetX: number | null;
    mergeTargetY: number | null;
    localSegmentStartY: number | null;
  } {
    const states = branchLineGeometryStateRef.current;
    const existing = states.get(branchKey);
    const state: BranchLineGeometryState = existing
      ? {
        ...existing,
        targetStartX: target.startX,
        targetForkY: target.forkY,
        targetLanePosX: target.lanePosX,
        targetTipY: target.tipY,
        targetMergeTargetX: target.mergeTargetX,
        targetMergeTargetY: target.mergeTargetY,
        targetLocalSegmentStartY: target.localSegmentStartY,
        lastSeenRender: clumpRenderId,
      }
      : {
        startX: target.startX,
        targetStartX: target.startX,
        forkY: target.forkY,
        targetForkY: target.forkY,
        lanePosX: target.lanePosX,
        targetLanePosX: target.lanePosX,
        tipY: target.tipY,
        targetTipY: target.tipY,
        mergeTargetX: target.mergeTargetX,
        targetMergeTargetX: target.mergeTargetX,
        mergeTargetY: target.mergeTargetY,
        targetMergeTargetY: target.mergeTargetY,
        localSegmentStartY: target.localSegmentStartY,
        targetLocalSegmentStartY: target.localSegmentStartY,
        lastSeenRender: clumpRenderId,
        createdAtRender: clumpRenderId,
      };
    states.set(branchKey, state);
    return {
      startX: state.startX,
      forkY: state.forkY,
      lanePosX: state.lanePosX,
      tipY: state.tipY,
      mergeTargetX: state.mergeTargetX,
      mergeTargetY: state.mergeTargetY,
      localSegmentStartY: state.localSegmentStartY,
    };
  }

  useEffect(() => {
    const clumpAnchorStates = clumpAnchorStateRef.current;
    const clumpMemberAnchorStates = clumpMemberAnchorStateRef.current;
    const branchLineStates = branchLineGeometryStateRef.current;

    const clumpMotionActive = Array.from(expandedClumps.values()).some(
      (s) => s.phase === 'expanding' || s.phase === 'collapsing',
    );
    /** Match lane/connector motion to clump transitions (grid targets jump faster than 0.26 can follow). */
    const motionLerp = clumpMotionActive ? 0.55 : 0.26;

    for (const [key, state] of clumpAnchorStates.entries()) {
      if (state.lastSeenRender !== clumpRenderId) {
        clumpAnchorStates.delete(key);
      }
    }
    for (const [key, state] of clumpMemberAnchorStates.entries()) {
      if (state.lastSeenRender !== clumpRenderId) {
        clumpMemberAnchorStates.delete(key);
      }
    }
    for (const [key, state] of branchLineStates.entries()) {
      if (state.lastSeenRender !== clumpRenderId) {
        branchLineStates.delete(key);
      }
    }

    const reduceMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let snapped = false;
    let shouldContinue = false;
    for (const [, state] of clumpAnchorStates.entries()) {
      if (reduceMotion) {
        if (state.x !== state.targetX || state.y !== state.targetY) {
          state.x = state.targetX;
          state.y = state.targetY;
          snapped = true;
        }
        continue;
      }
      const dx = state.targetX - state.x;
      const dy = state.targetY - state.y;
      if (Math.abs(dx) <= 0.08 && Math.abs(dy) <= 0.08) {
        if (state.x !== state.targetX || state.y !== state.targetY) {
          state.x = state.targetX;
          state.y = state.targetY;
          snapped = true;
        }
        continue;
      }
      state.x += dx * motionLerp;
      state.y += dy * motionLerp;
      shouldContinue = true;
    }
    const animateNumeric = (
      current: number,
      target: number,
      onUpdate: (value: number) => void,
    ) => {
      const delta = target - current;
      if (Math.abs(delta) <= 0.08) {
        if (current !== target) {
          onUpdate(target);
          snapped = true;
        }
        return;
      }
      if (reduceMotion) {
        onUpdate(target);
        snapped = true;
        return;
      }
      onUpdate(current + delta * motionLerp);
      shouldContinue = true;
    };
    const animateNullableNumeric = (
      current: number | null,
      target: number | null,
      onUpdate: (value: number | null) => void,
    ) => {
      if (target == null) {
        if (current != null) {
          onUpdate(null);
          snapped = true;
        }
        return;
      }
      if (current == null) {
        onUpdate(target);
        snapped = true;
        return;
      }
      animateNumeric(current, target, onUpdate);
    };
    for (const [, state] of branchLineStates.entries()) {
      // Branch lines created very recently (within 2 renders) should snap to
      // corrected positions instead of animating.  This prevents the visual
      // glitch where incomplete initial data produces a wrong fork Y that then
      // visibly lerps to the correct position.
      const isNewlyCreated = clumpRenderId - state.createdAtRender <= 2;
      if (isNewlyCreated) {
        const forkDelta = Math.abs(state.forkY - state.targetForkY);
        const tipDelta = Math.abs(state.tipY - state.targetTipY);
        const startDelta = Math.abs(state.startX - state.targetStartX);
        const laneDelta = Math.abs(state.lanePosX - state.targetLanePosX);
        if (forkDelta > 0.5 || tipDelta > 0.5 || startDelta > 0.5 || laneDelta > 0.5) {
          state.startX = state.targetStartX;
          state.forkY = state.targetForkY;
          state.lanePosX = state.targetLanePosX;
          state.tipY = state.targetTipY;
          state.mergeTargetX = state.targetMergeTargetX;
          state.mergeTargetY = state.targetMergeTargetY;
          state.localSegmentStartY = state.targetLocalSegmentStartY;
          snapped = true;
          continue;
        }
      }
      animateNumeric(state.startX, state.targetStartX, (value) => { state.startX = value; });
      animateNumeric(state.forkY, state.targetForkY, (value) => { state.forkY = value; });
      animateNumeric(state.lanePosX, state.targetLanePosX, (value) => { state.lanePosX = value; });
      animateNumeric(state.tipY, state.targetTipY, (value) => { state.tipY = value; });
      animateNullableNumeric(
        state.mergeTargetX,
        state.targetMergeTargetX,
        (value) => { state.mergeTargetX = value; },
      );
      animateNullableNumeric(
        state.mergeTargetY,
        state.targetMergeTargetY,
        (value) => { state.mergeTargetY = value; },
      );
      animateNullableNumeric(
        state.localSegmentStartY,
        state.targetLocalSegmentStartY,
        (value) => { state.localSegmentStartY = value; },
      );
    }
    if (snapped) {
      setClumpAnimationTick((v) => v + 1);
      return;
    }
    if (!shouldContinue) return;
    const rafId = requestAnimationFrame(() => {
      setClumpAnimationTick((v) => v + 1);
    });
    return () => cancelAnimationFrame(rafId);
  }, [expandedClumps, clumpRenderId]);

  useEffect(() => {
    drawReadyRef.current = drawReady;
  }, [drawReady]);

  useEffect(() => {
    animationsLockedRef.current = animationsLocked;
    setTimelineStaticClass(animationsLocked);
  }, [animationsLocked]);

  useLayoutEffect(() => {
    panRef.current = pan;
    if (!isPanning) {
      targetPanRef.current = pan;
    }
    paintCamera(panRef.current, zoomRef.current);
  }, [pan, isPanning]);

  const CAMERA_CONTENT_PAD = 0;

  function clampPan(
    next: { x: number; y: number },
    zoomValue = zoomRef.current,
    mode: ClampMode = 'hard'
  ) {
    return clampPanCore({
      next,
      zoomValue,
      mode,
      cameraBounds: cameraBoundsRef.current,
      finiteWorld: finiteWorldBoundsRef.current,
      centerable: centerableCommitBoundsRef.current,
      cameraContentPad: CAMERA_CONTENT_PAD,
    });
  }

  function paintCamera(nextPan = panRef.current, _nextZoom = zoomRef.current) {
    paintCameraCore({
      cameraEl: cameraRef.current,
      svgEl: svgRef.current,
      zoomLayerEl: zoomLayerRef.current,
      nextPan,
      nextZoom: _nextZoom,
      isHorizontal,
      zoomStableTextEls: zoomStableTextElsRef.current,
      zoomStableRectEls: zoomStableRectElsRef.current,
    });
  }

  useLayoutEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    zoomStableTextElsRef.current = Array.from(svg.querySelectorAll<SVGTextElement>('text[data-base-font-size]'));
    zoomStableRectElsRef.current = Array.from(svg.querySelectorAll<SVGRectElement>('rect[data-base-rx]'));
  });

  function flushCameraPaint() {
    const pending = pendingCameraRef.current;
    if (!pending) return;
    pendingCameraRef.current = null;
    paintCamera(pending.pan, pending.zoom);
  }

  function scheduleCameraPaint() {
    if (cameraPaintRafRef.current !== null) return;
    cameraPaintRafRef.current = requestAnimationFrame(() => {
      cameraPaintRafRef.current = null;
      flushCameraPaint();
    });
  }

  function stopCameraPaint() {
    if (cameraPaintRafRef.current !== null) {
      cancelAnimationFrame(cameraPaintRafRef.current);
      cameraPaintRafRef.current = null;
    }
    flushCameraPaint();
  }

  function setTimelineStaticClass(locked: boolean) {
    const svg = svgRef.current;
    if (!svg) return;
    if (locked) {
      svg.classList.add('timeline-static');
    } else {
      svg.classList.remove('timeline-static');
    }
  }

  function syncUiState(force = false, immediate = false) {
    syncUiStateCore({
      force,
      immediate,
      cameraUiSyncMs: CAMERA_UI_SYNC_MS,
      lastUiSyncRef,
      zoomRef,
      zoomStateRef,
      setZoom,
      panRef,
      setPan,
    });
  }

  function applyCamera(
    nextPan: { x: number; y: number },
    nextZoom = zoomRef.current,
    forceUiSync = false,
    immediateUiSync = false
  ) {
    applyCameraCore({
      nextPan,
      nextZoom,
      panRef,
      targetPanRef,
      zoomRef,
      pendingCameraRef,
      stopCameraPaint,
      scheduleCameraPaint,
      syncUiState,
      forceUiSync,
      immediateUiSync,
    });
  }

  useEffect(() => {
    // Fast Refresh keeps hook state between edits. If zoom constants change,
    // snap stale zoom values into the active range so updates are visible.
    const clampedZoom = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, zoomRef.current));
    if (Math.abs(clampedZoom - zoomRef.current) < 0.0001) return;
    const nextPan = clampPan(panRef.current, clampedZoom, 'hard');
    applyCamera(nextPan, clampedZoom, true, true);
  }, [viewportSize.width, viewportSize.height]);

  function normalizeWheelDeltaPx(delta: number, deltaMode: number, pageSizePx: number): number {
    return normalizeWheelDeltaPxCore(delta, deltaMode, pageSizePx);
  }

  type ZoomUiSyncMode = 'none' | 'deferred' | 'immediate';

  function scheduleZoomUiSync(immediate = false) {
    if (immediate) {
      if (zoomUiSyncTimeoutRef.current !== null) {
        clearTimeout(zoomUiSyncTimeoutRef.current);
        zoomUiSyncTimeoutRef.current = null;
      }
      syncUiState(true, true);
      return;
    }
    if (zoomUiSyncTimeoutRef.current !== null) {
      clearTimeout(zoomUiSyncTimeoutRef.current);
    }
    zoomUiSyncTimeoutRef.current = window.setTimeout(() => {
      zoomUiSyncTimeoutRef.current = null;
      syncUiState(true, true);
    }, 90);
  }

  function lockAnimationsIfReady() {
    if (!drawReadyRef.current || animationsLockedRef.current) return;
    animationsLockedRef.current = true;
    // Synchronously lock before camera transform changes to avoid WebKit replaying intro animations.
    setTimelineStaticClass(true);
    setAnimationsLocked(true);
  }

  function stopPanSmoothing() {
    if (panUiSyncTimeoutRef.current !== null) {
      clearTimeout(panUiSyncTimeoutRef.current);
      panUiSyncTimeoutRef.current = null;
    }
  }

  function stopWheelInertia() {
    stopPanSmoothing();
  }

  function schedulePanUiSync() {
    if (panUiSyncTimeoutRef.current !== null) {
      clearTimeout(panUiSyncTimeoutRef.current);
    }
    panUiSyncTimeoutRef.current = window.setTimeout(() => {
      panUiSyncTimeoutRef.current = null;
      syncUiState(true, true);
    }, 70);
  }

  function stopZoomAnimation(forceUiSync = true) {
    if (zoomUiSyncTimeoutRef.current !== null) {
      clearTimeout(zoomUiSyncTimeoutRef.current);
      zoomUiSyncTimeoutRef.current = null;
    }
    if (forceUiSync) {
      syncUiState(true, true);
    }
  }

  function flushPendingZoomUiSync() {
    if (zoomUiSyncTimeoutRef.current === null) return;
    clearTimeout(zoomUiSyncTimeoutRef.current);
    zoomUiSyncTimeoutRef.current = null;
    syncUiState(true, true);
  }

  // Keep controls available regardless of intro-reveal state.
  useEffect(() => {
    setControlsReady(true);
  }, []);

  // In WebKit, repeated ancestor transform updates can occasionally restart SVG
  // stroke-dash animations. Keep them locked when intro animations are disabled.
  useEffect(() => {
    if (!drawReady) {
      setAnimationsLocked(true);
      return;
    }
    if (!ENABLE_TIMELINE_INTRO_ANIMATIONS) {
      setAnimationsLocked(true);
      return;
    }
    const id = setTimeout(() => setAnimationsLocked(true), 2800);
    return () => clearTimeout(id);
  }, [drawReady]);

  function applyZoomAt(
    point: { x: number; y: number },
    nextZoomRaw: number,
    uiSyncMode: ZoomUiSyncMode = 'none'
  ): boolean {
    lockAnimationsIfReady();
    return applyZoomAtCore({
      point,
      nextZoomRaw,
      zoomMin: ZOOM_MIN,
      zoomMax: ZOOM_MAX,
      currentZoom: zoomRef.current,
      currentPan: panRef.current,
      graphOffset: graphOffsetRef.current,
      isHorizontal,
      clampPan,
      stopPanSmoothing,
      applyCamera,
      uiSyncMode,
      lastContinuousZoomTsRef,
      scheduleZoomUiSync,
    });
  }

  // Wheel behavior:
  // - Ctrl/Cmd + wheel: zoom toward cursor
  // - plain wheel: inertial pan in both axes
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Always zoom to the cursor position within the viewport.
    const zoomAnchorForClientPoint = (clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const onWheel = (e: WheelEvent) => {
      const topElementAtPointer = document.elementFromPoint(e.clientX, e.clientY);
      if (topElementAtPointer?.closest('[data-map-ui]')) {
        return;
      }
      e.preventDefault();
      lastPointerClientRef.current = { x: e.clientX, y: e.clientY };
      lockAnimationsIfReady();
      focusScrollCancelRef.current?.();
      focusScrollCancelRef.current = null;
      markUserMovedCamera();

      if (e.ctrlKey || e.metaKey) {
        stopWheelInertia();
        stopPanSmoothing();
        setTooltip(null);
        const point = zoomAnchorForClientPoint(e.clientX, e.clientY);
        const pixelDeltaY = normalizeWheelDeltaPx(e.deltaY, e.deltaMode, el.clientHeight);
        const clampedDeltaY = Math.max(-ZOOM_WHEEL_DELTA_MAX_PX, Math.min(ZOOM_WHEEL_DELTA_MAX_PX, pixelDeltaY));
        const zoomFactor = Math.exp(-clampedDeltaY * ZOOM_WHEEL_EXP_SENSITIVITY);
        if (!Number.isFinite(zoomFactor) || Math.abs(zoomFactor - 1) < 0.0001) return;
        applyZoomAt(point, zoomRef.current * zoomFactor, 'deferred');
        return;
      }

      flushPendingZoomUiSync();
      const nextPan = clampPan({
        x: panRef.current.x - e.deltaX,
        y: panRef.current.y - e.deltaY,
      }, zoomRef.current, 'hard');
      applyCamera(nextPan, zoomRef.current);
      schedulePanUiSync();
    };

    const onGestureStart = (evt: Event) => {
      const e = evt as Event & { scale?: number; clientX?: number; clientY?: number };
      if (e.clientX != null && e.clientY != null) {
        const topElementAtPointer = document.elementFromPoint(e.clientX, e.clientY);
        if (topElementAtPointer?.closest('[data-map-ui]')) {
          return;
        }
      }
      e.preventDefault();
      lockAnimationsIfReady();
      stopWheelInertia();
      stopPanSmoothing();
      setTooltip(null);
      markUserMovedCamera();
      gestureZoomBaseRef.current = zoomRef.current;
      const rect = el.getBoundingClientRect();
      const lastPointer = lastPointerClientRef.current;
      const cx = e.clientX ?? lastPointer?.x ?? rect.left + rect.width / 2;
      const cy = e.clientY ?? lastPointer?.y ?? rect.top + rect.height / 2;
      gesturePointRef.current = zoomAnchorForClientPoint(cx, cy);
    };

    const onGestureChange = (evt: Event) => {
      const e = evt as Event & { scale?: number };
      e.preventDefault();
      const point = gesturePointRef.current;
      const scale = e.scale;
      if (!point || scale == null || !Number.isFinite(scale)) return;
      applyZoomAt(point, gestureZoomBaseRef.current * scale, 'deferred');
    };

    const onGestureEnd = (evt: Event) => {
      evt.preventDefault();
      gesturePointRef.current = null;
      scheduleZoomUiSync(true);
    };

    const onPointerMove = (e: PointerEvent) => {
      lastPointerClientRef.current = { x: e.clientX, y: e.clientY };
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('pointermove', onPointerMove, { passive: true });
    el.addEventListener('gesturestart', onGestureStart as EventListener, { passive: false });
    el.addEventListener('gesturechange', onGestureChange as EventListener, { passive: false });
    el.addEventListener('gestureend', onGestureEnd as EventListener, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('gesturestart', onGestureStart as EventListener);
      el.removeEventListener('gesturechange', onGestureChange as EventListener);
      el.removeEventListener('gestureend', onGestureEnd as EventListener);
    };
  }, []);

  // Keep wheel inertia and RAF loops cleaned up.
  useEffect(() => {
    return () => {
      focusScrollCancelRef.current?.();
      focusScrollCancelRef.current = null;
      if (orientationSwitchFadeTimeoutRef.current !== null) {
        clearTimeout(orientationSwitchFadeTimeoutRef.current);
        orientationSwitchFadeTimeoutRef.current = null;
      }
      if (orientationAutoCenterRafRef.current !== null) {
        cancelAnimationFrame(orientationAutoCenterRafRef.current);
        orientationAutoCenterRafRef.current = null;
      }
      if (resizeRafRef.current !== null) {
        cancelAnimationFrame(resizeRafRef.current);
        resizeRafRef.current = null;
      }
      if (resizeSettleTimeoutRef.current !== null) {
        clearTimeout(resizeSettleTimeoutRef.current);
        resizeSettleTimeoutRef.current = null;
      }
      stopCameraPaint();
      stopZoomAnimation();
      stopWheelInertia();
      stopPanSmoothing();
    };
  }, []);

  // Track viewport size for camera clamping + layout.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scheduleResizeSettled = () => {
      if (resizeSettleTimeoutRef.current !== null) {
        clearTimeout(resizeSettleTimeoutRef.current);
      }
      setIsResizeSettling(true);
      resizeSettleTimeoutRef.current = window.setTimeout(() => {
        resizeSettleTimeoutRef.current = null;
        setIsResizeSettling(false);
      }, RESIZE_SETTLE_MS);
    };

    const updateSize = () => {
      if (resizeRafRef.current !== null) return;
      resizeRafRef.current = requestAnimationFrame(() => {
        resizeRafRef.current = null;
        const rect = el.getBoundingClientRect();
        const next = {
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        };
        const prev = lastViewportRef.current;
        if (prev.width === next.width && prev.height === next.height) return;
        lastViewportRef.current = next;
        setViewportSize(next);
        scheduleResizeSettled();
      });
    };

    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(el);
    return () => {
      ro.disconnect();
      if (resizeRafRef.current !== null) {
        cancelAnimationFrame(resizeRafRef.current);
        resizeRafRef.current = null;
      }
      if (resizeSettleTimeoutRef.current !== null) {
        clearTimeout(resizeSettleTimeoutRef.current);
        resizeSettleTimeoutRef.current = null;
      }
    };
  }, []);

  // Space+drag (or middle mouse drag) panning, interrupting all inertial motion.
  useEffect(() => {
    if (!isPanning) return;
    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - panStartRef.current.x;
      const dy = e.clientY - panStartRef.current.y;
      const nextPan = clampPan({
        x: panStartRef.current.panX + dx,
        y: panStartRef.current.panY + dy,
      }, zoomRef.current, 'hard');
      applyCamera(nextPan, zoomRef.current);
    };
    const onUp = () => {
      isPanningRef.current = false;
      setIsPanning(false);
      const settledPan = clampPan(panRef.current, zoomRef.current, 'hard');
      applyCamera(settledPan, zoomRef.current);
      syncUiState(true);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [isPanning]);

  useEffect(() => {
    deleteConfirmOpenRef.current = deleteConfirmOpen;
  }, [deleteConfirmOpen]);

  useEffect(() => {
    if (!commitDialogOpen) return;
    const id = requestAnimationFrame(() => {
      commitMessageRef.current?.focus();
    });
    return () => cancelAnimationFrame(id);
  }, [commitDialogOpen]);

  useEffect(() => {
    if (!commitDialogOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        if (!commitInProgress) {
          setCommitDialogOpen(false);
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [commitDialogOpen, commitInProgress]);

  useEffect(() => {
    deleteInProgressRef.current = deleteInProgress;
  }, [deleteInProgress]);

  useEffect(() => {
    onCreateBranchFromNodeRef.current = onCreateBranchFromNode;
  }, [onCreateBranchFromNode]);

  useEffect(() => {
    onMoveNodeBackToBranchRef.current = onMoveNodeBackToBranch;
  }, [onMoveNodeBackToBranch]);

  useEffect(() => {
    function findMoveBackBranch(screenX: number): string | null {
      const candidates = moveBackCandidateBranchNamesRef.current;
      if (candidates.size === 0) return null;
      const projection = selectionProjectionRef.current;
      const cameraScale = getCameraScale(zoomRef.current, projection.isHorizontal);
      for (const target of branchHeadTargetsRef.current) {
        if (!candidates.has(target.branchName)) continue;
        const centerX =
          panRef.current.x +
          projection.graphOffsetX +
          (projection.graphContentTranslateX + target.point.x) * cameraScale.x;
        if (Math.abs(screenX - centerX) <= 56) return target.branchName;
      }
      return null;
    }

    const onMouseMove = (e: MouseEvent) => {
      const drag = nodeDragRef.current;
      if (!drag || drag.isDone) return;
      const dx = e.clientX - drag.startClientX;
      const dy = e.clientY - drag.startClientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const wasDragging = drag.isDragging;
      const isDragging = wasDragging || dist > 6;
      nodeDragRef.current = { ...drag, currentClientX: e.clientX, currentClientY: e.clientY, isDragging };
      if (!isDragging) return;

      // Move the actual SVG element imperatively — world units = screen delta / zoom
      if (drag.nodeElement) {
        const worldDx = dx / zoomRef.current;
        const worldDy = dy / zoomRef.current;
        drag.nodeElement.setAttribute('transform', `translate(${worldDx} ${worldDy})`);
      }

      const cursorContainerX = e.clientX - drag.containerLeft;
      const nextMoveBack = findMoveBackBranch(cursorContainerX);
      const actionText = nextMoveBack ? `→ ${nextMoveBack}` : '→ New branch';

      if (!wasDragging) {
        // First drag frame: hide the external label and inject action text inside the moved <g>
        if (drag.nodeLabelElement) {
          drag.nodeLabelElement.style.opacity = '0';
          // Inject a cloned <text> into the moved <g> with action text + same styling
          if (drag.nodeElement) {
            const injected = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            injected.setAttribute('x', drag.nodeLabelElement.getAttribute('x') ?? '0');
            injected.setAttribute('y', drag.nodeLabelElement.getAttribute('y') ?? '0');
            injected.setAttribute('text-anchor', drag.nodeLabelElement.getAttribute('text-anchor') ?? 'start');
            injected.setAttribute('fill', drag.nodeLabelElement.getAttribute('fill') ?? '#47AFEB');
            injected.setAttribute('font-size', drag.nodeLabelElement.getAttribute('font-size') ?? '');
            injected.setAttribute('font-weight', drag.nodeLabelElement.getAttribute('font-weight') ?? '');
            injected.setAttribute('font-family', drag.nodeLabelElement.getAttribute('font-family') ?? '');
            injected.setAttribute('text-rendering', 'geometricPrecision');
            injected.setAttribute('pointer-events', 'none');
            injected.setAttribute('data-action-text', 'true');
            injected.textContent = actionText;
            drag.nodeElement.appendChild(injected);
          }
        }
      } else {
        // Subsequent frames: only update the text if it changed
        const injected = drag.nodeElement?.querySelector<SVGTextElement>('[data-action-text]');
        if (injected && injected.textContent !== actionText) injected.textContent = actionText;
      }

      // Only trigger a React re-render when drop-zone highlights need updating
      setNodeDragDisplay((prev) => {
        if (prev && prev.hoveringMoveBackBranch === nextMoveBack) return prev;
        return { cursorX: cursorContainerX, cursorY: e.clientY - drag.containerTop, nodeId: drag.nodeId, hoveringMoveBackBranch: nextMoveBack };
      });
    };

    const resetNodeDrag = (drag: NodeDragState) => {
      // Reset the SVG element's transform so it snaps back to its original position
      drag.nodeElement?.removeAttribute('transform');
      // Remove the injected action text and restore the original label
      drag.nodeElement?.querySelector('[data-action-text]')?.remove();
      if (drag.nodeLabelElement) drag.nodeLabelElement.style.removeProperty('opacity');
      nodeDragRef.current = null;
      setNodeDragDisplay(null);
    };

    const onMouseUp = (e: MouseEvent) => {
      const drag = nodeDragRef.current;
      if (!drag || drag.isDone) return;
      const wasDragging = drag.isDragging;
      resetNodeDrag(drag);
      if (!wasDragging) return;

      const container = scrollRef.current;
      if (!container) return;
      const bounds = container.getBoundingClientRect();
      const cursorContainerX = e.clientX - bounds.left;

      const moveBackBranch = findMoveBackBranch(cursorContainerX);
      if (moveBackBranch && onMoveNodeBackToBranchRef.current) {
        void onMoveNodeBackToBranchRef.current(drag.nodeId, moveBackBranch);
        return;
      }

      if (onCreateBranchFromNodeRef.current) {
        setNewBranchDialogForNode({ nodeId: drag.nodeId, stashIndex: drag.stashIndex });
        setNewBranchNameForNode('');
        setTimeout(() => newBranchInputForNodeRef.current?.focus(), 60);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const drag = nodeDragRef.current;
      if (e.key === 'Escape' && drag) {
        resetNodeDrag(drag);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('keydown', onKeyDown, { capture: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('keydown', onKeyDown, { capture: true });
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const isEditable = (el: EventTarget | null) => {
      if (!(el instanceof Element)) return false;
      if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) return true;
      return (el as HTMLElement).isContentEditable;
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (isEditable(e.target)) return;

      // Zoom shortcuts disabled.

      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (
          deletableSelectionCountRef.current > 0 &&
          !deleteConfirmOpenRef.current &&
          !deleteInProgressRef.current
        ) {
          e.preventDefault();
          setDeleteConfirmOpen(true);
        }
        return;
      }

      if (e.code !== 'Space') return;
      e.preventDefault();
      spacePressedRef.current = true;
      setSpaceHeld(true);
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code !== 'Space') return;
      spacePressedRef.current = false;
      setSpaceHeld(false);
      if (isPanningRef.current) {
        isPanningRef.current = false;
        setIsPanning(false);
        syncUiState(true);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  useEffect(() => {
    isPanningRef.current = isPanning;
  }, [isPanning]);

  // Hard guard: when interacting with overlay UI, never allow map gesture handlers
  // (including wheel inertia or drag-pan) to keep moving the canvas.
  useEffect(() => {
    const stopActivePan = () => {
      if (!isPanningRef.current) return;
      isPanningRef.current = false;
      setIsPanning(false);
      const settledPan = clampPan(panRef.current, zoomRef.current, 'hard');
      applyCamera(settledPan, zoomRef.current);
      syncUiState(true);
    };

    const shouldBlockMapGestures = (target: EventTarget | null): boolean => {
      if (!(target instanceof Element)) return false;
      return !!target.closest('[data-map-ui]');
    };

    const onPointerLikeDownCapture = (event: MouseEvent | PointerEvent) => {
      if (!shouldBlockMapGestures(event.target)) return;
      stopWheelInertia();
      stopPanSmoothing();
      stopActivePan();
      event.stopPropagation();
    };

    const onWheelCapture = (event: WheelEvent) => {
      if (!shouldBlockMapGestures(event.target)) return;
      stopWheelInertia();
      stopPanSmoothing();
      stopActivePan();
      event.preventDefault();
      event.stopPropagation();
    };

    window.addEventListener('mousedown', onPointerLikeDownCapture, true);
    window.addEventListener('pointerdown', onPointerLikeDownCapture, true);
    window.addEventListener('wheel', onWheelCapture, { capture: true, passive: false });
    return () => {
      window.removeEventListener('mousedown', onPointerLikeDownCapture, true);
      window.removeEventListener('pointerdown', onPointerLikeDownCapture, true);
      window.removeEventListener('wheel', onWheelCapture, true);
    };
  }, []);

  useEffect(() => {
    const hadCompletedReveal = hasInitialRevealDone;
    hasAutoCenteredRef.current = false;
    autoCenterSignatureRef.current = null;
    // Preserve manual camera intent across orientation switches to prevent
    // jumpy recenter/layout shifts after the user has already panned.
    // Orientation switches should not replay the intro loader/fog.
    // Keep reveal state "done" once content has been shown at least once.
    if (!hadCompletedReveal) {
      clearTimelineRevealTimer();
      setTimelineRevealPhase('hidden');
      setTimelineRevealReady(false);
      setHasInitialRevealDone(false);
      return;
    }
    clearTimelineRevealTimer();
    setTimelineRevealPhase('done');
    setTimelineRevealReady(true);
    setHasInitialRevealDone(true);
  }, [orientation]);

  useEffect(() => {
    if (!isMarqueeSelecting) return;
    const onMove = (event: MouseEvent) => {
      const container = scrollRef.current;
      const drag = marqueeDragRef.current;
      if (!container || !drag) return;
      const bounds = container.getBoundingClientRect();
      drag.currentX = event.clientX - bounds.left;
      drag.currentY = event.clientY - bounds.top;
      if (Math.abs(drag.currentX - drag.startX) > 2 || Math.abs(drag.currentY - drag.startY) > 2) {
        drag.moved = true;
      }
      const nextRect = normalizeMarqueeRect(drag);
      setMarqueeRect(nextRect);
      if (drag.moved && nextRect.width > 1 && nextRect.height > 1) {
        applyMarqueeSelection(nextRect, drag.additive);
      } else if (!drag.additive) {
        setSelectedBranchNames([]);
        setSelectedCommitShas([]);
        setMergeTargetCommitSha(null);
      }
    };
    const onUp = () => {
      const drag = marqueeDragRef.current;
      if (!drag) {
        setIsMarqueeSelecting(false);
        setMarqueeRect(null);
        return;
      }
      const nextRect = normalizeMarqueeRect(drag);
      if (drag.moved && nextRect.width > 1 && nextRect.height > 1) {
        applyMarqueeSelection(nextRect, drag.additive);
      } else if (!drag.additive) {
        setSelectedBranchNames([]);
        setSelectedCommitShas([]);
        setMergeTargetCommitSha(null);
      }
      marqueeDragRef.current = null;
      setMarqueeRect(null);
      setIsMarqueeSelecting(false);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [isMarqueeSelecting]);

  function handleCanvasMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    const topElementAtPointer = document.elementFromPoint(e.clientX, e.clientY);
    if (topElementAtPointer?.closest('[data-map-ui]')) {
      return;
    }
    const target = e.target as Element | null;
    // Never start canvas gestures from UI controls.
    if (target?.closest('button, input, textarea, select, [role="button"], a')) {
      return;
    }
    const clickedBackground =
      target === scrollRef.current ||
      target === svgRef.current ||
      !!(target instanceof HTMLDivElement && target.parentElement === scrollRef.current);
    const canPan = e.button === 1 || (e.button === 0 && spacePressedRef.current);
    if (canPan && scrollRef.current) {
      e.preventDefault();
      markUserMovedCamera();
      lockAnimationsIfReady();
      focusScrollCancelRef.current?.();
      focusScrollCancelRef.current = null;
      flushPendingZoomUiSync();
      stopWheelInertia();
      targetPanRef.current = panRef.current;
      panStartRef.current = {
        x: e.clientX,
        y: e.clientY,
        panX: targetPanRef.current.x,
        panY: targetPanRef.current.y,
      };
      isPanningRef.current = true;
      setIsPanning(true);
      return;
    }
    if (e.button === 0 && clickedBackground) {
      e.preventDefault();
      clearTransientHoverState();
      beginMarqueeSelection(e, e.shiftKey);
      return;
    }
  }

  async function handleMergeSourcesIntoTarget(sourceRefs: string[], targetBranch: string) {
    if (!onMergeRefsIntoBranch || mergeInProgress) return;
    await onMergeRefsIntoBranch(sourceRefs, targetBranch);
    setSelectedCommitShas([]);
    setSelectedBranchNames([]);
    setMergeTargetCommitSha(null);
  }

  const openGitActionMenu = () => setGitActionMenuOpen(true);
  const closeGitActionMenu = () => setGitActionMenuOpen(false);
  const toggleGitActionMenu = () => setGitActionMenuOpen((open) => !open);
  const closeWorktreeMenu = () => setWorktreeMenuOpen(false);
  const toggleWorktreeMenu = () => setWorktreeMenuOpen((open) => !open);

  // Close error panel on outside click
  useEffect(() => {
    if (!errorPanelOpen) return;
    const handler = (e: MouseEvent) => {
      if (!errorPanelRef.current?.contains(e.target as Node)) setErrorPanelOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [errorPanelOpen]);

  // Close git action menu on outside click
  useEffect(() => {
    if (!gitActionMenuOpen) return;
    const handler = (e: MouseEvent) => {
      if (!gitActionMenuRef.current?.contains(e.target as Node)) closeGitActionMenu();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [gitActionMenuOpen]);

  // Close worktree menu on outside click
  useEffect(() => {
    if (!worktreeMenuOpen) return;
    const handler = (e: MouseEvent) => {
      if (!worktreeMenuRef.current?.contains(e.target as Node)) closeWorktreeMenu();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [worktreeMenuOpen]);

  // ── Active branches (time-only map) ───────────────────────────────────────
  const activeBranches = useMemo(
    () =>
      branches
        .filter((b) => b.name !== defaultBranch)
        .sort((a, b) => new Date(b.lastCommitDate).getTime() - new Date(a.lastCommitDate).getTime()),
    [branches, defaultBranch]
  );
  const selectableBranchNameSet = useMemo(
    () => new Set<string>([defaultBranch, ...activeBranches.map((b) => b.name)]),
    [activeBranches, defaultBranch]
  );
  const activeBranchNameSignature = useMemo(
    () => Array.from(selectableBranchNameSet).sort().join('\u0000'),
    [selectableBranchNameSet]
  );
  const branchByName = useMemo(
    () => new Map(activeBranches.map((b) => [b.name, b])),
    [activeBranches]
  );
  const sortedConcreteBranchPreviewsByName = useMemo(() => {
    const byName = new Map<string, BranchCommitPreview[]>();
    for (const [branchName, previews] of Object.entries(branchCommitPreviews)) {
      const concrete = previews.filter((commit) => commit.kind !== 'branch-created');
      byName.set(branchName, orderByLineage(concrete));
    }
    return byName;
  }, [branchCommitPreviews]);
  const branchAheadCountByName = useMemo(() => {
    const byName = new Map<string, number>();
    for (const branch of activeBranches) {
      if (Object.prototype.hasOwnProperty.call(branchUniqueAheadCounts, branch.name)) {
        byName.set(branch.name, branchUniqueAheadCounts[branch.name] ?? 0);
        continue;
      }
      const previews = sortedConcreteBranchPreviewsByName.get(branch.name) ?? [];
      byName.set(branch.name, previews.length);
    }
    return byName;
  }, [activeBranches, branchUniqueAheadCounts, sortedConcreteBranchPreviewsByName]);
  const renderableBranchPreviewsByName = useMemo(() => {
    const byName = new Map<string, BranchCommitPreview[]>();
    for (const branch of activeBranches) {
      const previews = sortedConcreteBranchPreviewsByName.get(branch.name) ?? [];
      const uniqueAhead = branchAheadCountByName.get(branch.name) ?? 0;
      if (uniqueAhead <= 0) {
        byName.set(branch.name, []);
        continue;
      }
      if (previews.length <= uniqueAhead) {
        byName.set(branch.name, previews);
        continue;
      }
      // Keep the latest N entries that correspond to unique commits ahead.
      byName.set(branch.name, previews.slice(previews.length - uniqueAhead));
    }
    return byName;
  }, [activeBranches, branchAheadCountByName, sortedConcreteBranchPreviewsByName]);

  useEffect(() => {
    setSelectedBranchNames((prev) => prev.filter((name) => selectableBranchNameSet.has(name)));
  }, [activeBranchNameSignature, selectableBranchNameSet]);

  // Detect fresh-copy branches (worktrees): when multiple branches share the
  // exact same HEAD SHA, all but the oldest are fresh copies with no unique
  // commits and must not inherit merge nodes or other parent-branch artifacts.
  // Phase 1: same-head-sibling detection among active branches.
  // Phase 2 (after mergeNodeByMergedHeadSha) adds commitsAhead===0-with-no-merge-node.
  const sameHeadSiblingNames = useMemo(() => {
    const headShaGroups = new Map<string, Branch[]>();
    for (const b of activeBranches) {
      if (!b.headSha) continue;
      const group = headShaGroups.get(b.headSha) ?? [];
      group.push(b);
      headShaGroups.set(b.headSha, group);
    }
    const names = new Set<string>();
    for (const group of headShaGroups.values()) {
      if (group.length < 2) continue;
      const sorted = [...group].sort((a, b) => {
        const aDate = a.createdDate ?? a.divergedFromDate ?? a.lastCommitDate;
        const bDate = b.createdDate ?? b.divergedFromDate ?? b.lastCommitDate;
        const dateDiff = aDate.localeCompare(bDate);
        if (dateDiff !== 0) return dateDiff;
        return a.name.localeCompare(b.name);
      });
      for (let i = 1; i < sorted.length; i += 1) {
        names.add(sorted[i].name);
      }
    }
    return names;
  }, [activeBranches]);
  const freshCopyBranchNames = new Set(sameHeadSiblingNames);

  function renderParentBranchName(branch: Branch): string {
    return (!branch.parentBranch || branch.parentBranch === branch.name)
      ? defaultBranch
      : branch.parentBranch;
  }

  const protectedMainForkShas = useMemo(
    () =>
      new Set<string>(
        activeBranches
          .filter((b) => renderParentBranchName(b) === defaultBranch)
          .flatMap((b) => [b.createdFromSha, b.divergedFromSha].filter((sha): sha is string => !!sha))
      ),
    [activeBranches, defaultBranch]
  );

  const childBranchesByParent = useMemo(() => {
    const byParent = new Map<string, Branch[]>();
    activeBranches.forEach((branch) => {
      const effectiveParent = renderParentBranchName(branch);
      const existing = byParent.get(effectiveParent) ?? [];
      existing.push(branch);
      byParent.set(effectiveParent, existing);
    });
    return byParent;
  }, [activeBranches, defaultBranch]);

  function branchPreviewIndexForChildFork(
    previews: BranchCommitPreview[],
    branchTimes: number[],
    child: Branch
  ): number {
    const childForkSha = child.divergedFromSha;
    if (childForkSha) {
      const bySha = previews.findIndex((preview) =>
        preview.fullSha === childForkSha ||
        preview.sha === childForkSha ||
        preview.fullSha.startsWith(childForkSha) ||
        childForkSha.startsWith(preview.fullSha) ||
        preview.sha.startsWith(childForkSha) ||
        childForkSha.startsWith(preview.sha)
      );
      if (bySha >= 0) return bySha;
    }
    const childForkTime = new Date(child.divergedFromDate ?? child.createdDate ?? child.lastCommitDate).getTime();
    if (!Number.isFinite(childForkTime) || branchTimes.length === 0) return -1;
    const firstTime = branchTimes[0];
    const lastTime = branchTimes[branchTimes.length - 1];
    if (childForkTime <= firstTime) return 0;
    if (childForkTime >= lastTime) return branchTimes.length - 1;

    // Prefer anchoring to the latest parent commit at-or-before the fork time.
    // Only fall forward when the visible preview window has no past match.
    let bestPastIndex = -1;
    let bestPastDelta = Number.POSITIVE_INFINITY;
    let bestFutureIndex = -1;
    let bestFutureDelta = Number.POSITIVE_INFINITY;
    for (let index = 0; index < branchTimes.length; index += 1) {
      const time = branchTimes[index];
      if (!Number.isFinite(time)) continue;
      if (time <= childForkTime) {
        const delta = childForkTime - time;
        if (delta < bestPastDelta) {
          bestPastDelta = delta;
          bestPastIndex = index;
        }
      } else {
        const delta = time - childForkTime;
        if (delta < bestFutureDelta) {
          bestFutureDelta = delta;
          bestFutureIndex = index;
        }
      }
    }
    if (bestPastIndex >= 0) return bestPastIndex;
    return bestFutureIndex;
  }

  // ── Animation delays ───────────────────────────────────────────────────────
  const MAIN_DRAW_MS = 1400;
  const STAGGER_MS = 70;
  const INFO_OFFSET = 600; // ms after arc starts drawing before info fades in

  const branchDelayMs = useMemo(
    () =>
      new Map<string, number>(
        [...activeBranches]
          .sort((a, b) => new Date(b.lastCommitDate).getTime() - new Date(a.lastCommitDate).getTime())
          .map((b, i) => [b.name, MAIN_DRAW_MS + i * STAGGER_MS] as [string, number])
      ),
    [activeBranches]
  );

  const reserveMergeRows = false;

  const leftPad = LEFT_PAD;
  const rightPad = RIGHT_PAD;
  const cornerR = CORNER_R;

  // ── Build a date → X mapping ─────────────────────────────────────────────
  // Simple and deterministic timeline mapping:
  // - `regular`: true time-proportional spacing.
  // - `bounded`: time-aware spacing with per-gap clamping.
  // Both modes preserve chronology and use the same anchor timestamps.
  const IDEAL_EVENT_GAP = Math.max(8, 40 * TIME_SCALE_DEFAULT);
  const GRID_EVENT_GAP = gridEventGap;

  const sortedNodes = useMemo(
    () => [...mergeNodes].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    [mergeNodes]
  );
  const mergeHeadTargetKey = (targetBranch: string, mergedHeadSha: string): string =>
    `${targetBranch}::${mergedHeadSha}`;
  const { mergeNodeByMergedHeadSha, mergeNodeByMergedHeadAndTarget } = useMemo(() => {
    const byMergedHeadSha = new Map<string, MergeNode>();
    const byMergedHeadAndTarget = new Map<string, MergeNode>();
    for (const node of sortedNodes) {
      const mergedParents = node.parentShas?.slice(1) ?? [];
      const targetBranch = node.targetBranch ?? defaultBranch;
      for (const parentSha of mergedParents) {
        if (parentSha && !byMergedHeadSha.has(parentSha)) {
          byMergedHeadSha.set(parentSha, node);
        }
        const targetedKey = mergeHeadTargetKey(targetBranch, parentSha);
        if (parentSha && !byMergedHeadAndTarget.has(targetedKey)) {
          byMergedHeadAndTarget.set(targetedKey, node);
        }
      }
    }
    return {
      mergeNodeByMergedHeadSha: byMergedHeadSha,
      mergeNodeByMergedHeadAndTarget: byMergedHeadAndTarget,
    };
  }, [defaultBranch, sortedNodes]);
  // Phase 2: branches with commitsAhead===0 that have no merge node are fresh
  // branches from the default branch (not genuinely merged).
  for (const b of activeBranches) {
    const hasChildBranches = (childBranchesByParent.get(b.name)?.length ?? 0) > 0;
    if (
      b.commitsAhead === 0 &&
      b.headSha &&
      !mergeNodeByMergedHeadSha.has(b.headSha) &&
      !hasChildBranches
    ) {
      freshCopyBranchNames.add(b.name);
    }
  }

  const mergedBranchByHeadSha = new Map<string, Branch>();
  for (const branch of activeBranches) {
    if (branch.commitsAhead === 0 && branch.headSha && !freshCopyBranchNames.has(branch.name)) {
      mergedBranchByHeadSha.set(branch.headSha, branch);
    }
  }
  const sortedDirectCommits = useMemo(() => orderByLineage(directCommits), [directCommits]);
  const defaultBranchFromData = branches.find((branch) => branch.name === defaultBranch);
  const defaultBranchRenderBranch: Branch = defaultBranchFromData ?? {
    name: defaultBranch,
    commitsAhead: Math.max(0, sortedDirectCommits.length - 1),
    commitsBehind: 0,
    lastCommitDate: sortedDirectCommits[sortedDirectCommits.length - 1]?.date ?? new Date().toISOString(),
    lastCommitAuthor: sortedDirectCommits[sortedDirectCommits.length - 1]?.author ?? 'unknown',
    status: 'fresh',
    remoteSyncStatus: 'on-github',
    unpushedCommits: 0,
    headSha: sortedDirectCommits[sortedDirectCommits.length - 1]?.fullSha ?? 'WORKING_TREE',
  };
  const renderBranches = [defaultBranchRenderBranch, ...activeBranches];
  const directCommitShaSet = new Set<string>(sortedDirectCommits.map((commit) => commit.fullSha));
  const mainMergeCommitShas = new Set<string>(
    sortedNodes
      .map((node) => node.fullSha)
      .filter((sha) => directCommitShaSet.has(sha))
  );
  const forcedVisibleMainShas = new Set<string>();
  const latestMainDirectCommitSha = sortedDirectCommits[sortedDirectCommits.length - 1]?.fullSha;
  if (latestMainDirectCommitSha) {
    forcedVisibleMainShas.add(latestMainDirectCommitSha);
  }
  if (checkedOutRef?.headSha) {
    const checkedOutOnMain = sortedDirectCommits.find((commit) =>
      shaMatchesGitRef(commit.fullSha, checkedOutRef.headSha)
    );
    if (checkedOutOnMain?.fullSha) {
      forcedVisibleMainShas.add(checkedOutOnMain.fullSha);
    }
  }
  const forcedMainSplitIndices = new Set<number>();
  const mainCommitSplitIndices = (() => {
    const splits = new Set<number>();
    if (sortedDirectCommits.length <= 1) return splits;

    for (let index = 0; index < sortedDirectCommits.length; index += 1) {
      const commit = sortedDirectCommits[index];
      const prev = index > 0 ? sortedDirectCommits[index - 1] : null;

      if (index > 0 && prev && commit.parentSha && commit.parentSha !== prev.fullSha) {
        splits.add(index - 1);
      }

      if (mainMergeCommitShas.has(commit.fullSha)) {
        // Merge-in commits join the clump with newer (toward-HEAD) work: split
        // before the merge so prior history stays separate, but do not split
        // after the merge (merge + newer commits share one clump).
        if (index < sortedDirectCommits.length - 1) {
          if (index > 0) {
            const splitBefore = index - 1;
            splits.add(splitBefore);
            forcedMainSplitIndices.add(splitBefore);
          }
        }
        // When merge is HEAD, omit split-before so it rolls into the preceding clump.
      }

      if (protectedMainForkShas.has(commit.fullSha) && index < sortedDirectCommits.length - 1) {
        splits.add(index);
      }

      // Keep the latest/checked-out main commit visible instead of hidden in a clump.
      if (forcedVisibleMainShas.has(commit.fullSha) && index > 0) {
        const mergeAtHead =
          mainMergeCommitShas.has(commit.fullSha) && index === sortedDirectCommits.length - 1;
        if (!mergeAtHead) {
          const splitBefore = index - 1;
          splits.add(splitBefore);
          forcedMainSplitIndices.add(splitBefore);
        }
      }
    }

    return splits;
  })();

  type TimelineEvent = { key: string; t: number; kind: 'merge' | 'direct' | 'branch' };
  const directTimelineEvents: TimelineEvent[] = sortedDirectCommits.map((c) => ({
    key: `direct:${c.fullSha}`,
    t: new Date(c.date).getTime(),
    kind: 'direct' as const,
  }));
  const directTimelineTimes = new Set<number>(directTimelineEvents.map((event) => event.t));
  const mergeNudgeCountByRawTime = new Map<number, number>();
  const mergeEventTimeByFullSha = new Map<string, number>();

  sortedNodes.forEach((m) => {
    const rawTime = new Date(m.date).getTime();
    const mergeCommitIsOnMain = directCommitShaSet.has(m.fullSha);
    let eventTime = rawTime;
    if (!mergeCommitIsOnMain && directTimelineTimes.has(rawTime)) {
      const bumpIndex = (mergeNudgeCountByRawTime.get(rawTime) ?? 0) + 1;
      mergeNudgeCountByRawTime.set(rawTime, bumpIndex);
      eventTime = rawTime + bumpIndex * GRID_MERGE_EVENT_ROW_NUDGE;
    }
    if (!mergeCommitIsOnMain) {
      const mergedParents = m.parentShas?.slice(1) ?? [];
      for (const parentSha of mergedParents) {
        const mergedBranch = mergedBranchByHeadSha.get(parentSha);
        if (!mergedBranch) continue;
        const branchHeadTime = new Date(mergedBranch.lastCommitDate).getTime();
        if (!Number.isFinite(branchHeadTime)) continue;
        eventTime = Math.max(eventTime, branchHeadTime + GRID_MERGE_EVENT_ROW_NUDGE);
      }
    }
    mergeEventTimeByFullSha.set(m.fullSha, eventTime);
  });

  const hasActiveClumpTransition = Array.from(expandedClumps.values()).some(
    (state) => state.phase === 'expanding' || state.phase === 'collapsing'
  );
  const nowMsForHorizontalRowPin = Date.now();
  const hasPinnedHorizontalRowOffset = Array.from(expandedClumps.values()).some(
    (state) =>
      (((state.isExpanded ?? false) && state.phase !== 'collapsed') ||
        ((state.rowReleaseAt ?? 0) > nowMsForHorizontalRowPin))
  );

  // ── Grid: build clumps first, derive rows from them ────────────────
  type GridClump = {
    lane: string;
    shas: string[];
    earliestTime: number;
    latestTime: number;
    rowIndex: number;
    key: string;
    slotIndices?: number[];
  };
  const gridClumps: GridClump[] = [];
  const gridRowBySha = new Map<string, number>();
  const gridRowByBranchSha = new Map<string, number>();
  const gridRowByBranchSlot = new Map<string, number>();
  let claimedGridRowTimes: number[] = [];

  function branchShaRowKey(branchName: string, sha: string): string {
    return `${branchName}::${sha}`;
  }
  function branchSlotRowKey(branchName: string, slotIndex: number): string {
    return `${branchName}::slot:${slotIndex}`;
  }
  {
    const mainForkIdx = new Set<number>();
    const mainPreviewCommits = sortedDirectCommits.map((commit) => ({
      ...commit,
      kind:
        commit.kind === 'stash'
          ? 'stash'
          : commit.kind === 'uncommitted'
            ? 'uncommitted'
            : 'commit',
    } as BranchCommitPreview));
    const mainChildBranches = childBranchesByParent.get(defaultBranch) ?? [];
    if (mainChildBranches.length > 0 && mainPreviewCommits.length > 0) {
      const mainBranchTimes = mainPreviewCommits.map((commit) => new Date(commit.date).getTime());
      mainChildBranches.forEach((child) => {
        const idx = branchPreviewIndexForChildFork(mainPreviewCommits, mainBranchTimes, child);
        if (idx >= 0) mainForkIdx.add(idx);
      });
    }

    {
      let buf: string[] = [];
      let slotBuf: number[] = [];
      let tFirst = 0;
      let tLast = 0;
      let startIdx = 0;
      const mainUncommittedSplitIndices = splitIndicesAroundUncommitted(
        sortedDirectCommits,
        (commit) => isSyntheticLocalCommit(commit)
      );
      const mainAllocatorSplitIndices = new Set<number>([
        ...mainForkIdx,
        ...mainCommitSplitIndices,
        ...mainUncommittedSplitIndices,
      ]);
      const mainAllocatorPreserveSplitIndices = new Set<number>([
        ...mainForkIdx,
        ...forcedMainSplitIndices,
        ...mainUncommittedSplitIndices,
      ]);
      const effectiveMainForkIdx = pruneForkSplitIndices(
        sortedDirectCommits.length,
        mainAllocatorSplitIndices,
        mainAllocatorPreserveSplitIndices,
      );
      const flush = (endIdx: number) => {
        if (buf.length === 0) return;
        gridClumps.push({
          lane: 'main',
          shas: [...buf],
          earliestTime: tFirst,
          latestTime: tLast,
          rowIndex: -1,
          key: `commit-clump-${defaultBranch}-${startIdx}-${endIdx}`,
          slotIndices: [...slotBuf],
        });
        buf = [];
        slotBuf = [];
      };
      sortedDirectCommits.forEach((c, i) => {
        const commitTime = new Date(c.date).getTime();
        if (buf.length === 0) startIdx = i;
        if (buf.length === 0) tFirst = commitTime;
        tLast = commitTime;
        buf.push(c.fullSha);
        slotBuf.push(i);
        if (effectiveMainForkIdx.has(i)) flush(i);
      });
      flush(sortedDirectCommits.length - 1);
    }

    activeBranches.forEach((branch) => {
      const previews = renderableBranchPreviews(branch);
      const uniqueAhead = branchAheadCount(branch);
      if (previews.length === 0) {
        // Reserve rows for synthetic/placeholder branch nodes so they do not
        // collapse onto shared rows with other markers.
        const fallbackCount = Math.max(1, uniqueAhead);
        const t = new Date(branch.lastCommitDate).getTime();
        gridClumps.push({
          lane: branch.name,
          shas: [],
          earliestTime: t,
          latestTime: t,
          rowIndex: -1,
          key: `commit-clump-${branch.name}-synthetic`,
          slotIndices: Array.from({ length: fallbackCount }, (_, index) => index),
        });
        return;
      }
      const branchTimes = previews.map((c) => new Date(c.date).getTime());
      const forkIdx = new Set<number>();
      (childBranchesByParent.get(branch.name) ?? []).forEach((child) => {
        const idx = branchPreviewIndexForChildFork(previews, branchTimes, child);
        if (idx >= 0) forkIdx.add(idx);
      });
      const branchUncommittedSplitIndices = splitIndicesAroundUncommitted(
        previews,
        (commit) => isSyntheticLocalCommit(commit)
      );
      const branchAllocatorSplitIndices = new Set<number>([
        ...forkIdx,
        ...branchUncommittedSplitIndices,
      ]);
      const branchAllocatorPreserveSplitIndices = new Set<number>([
        ...forkIdx,
        ...branchUncommittedSplitIndices,
      ]);
      const effectiveForkIdx = pruneForkSplitIndices(
        previews.length,
        branchAllocatorSplitIndices,
        branchAllocatorPreserveSplitIndices,
      );
      let buf: string[] = [];
      let slotBuf: number[] = [];
      let tFirst = 0;
      let tLast = 0;
      let startIdx = 0;
      const flushBranch = (endIdx: number) => {
        if (buf.length === 0) return;
        gridClumps.push({
          lane: branch.name,
          shas: [...buf],
          earliestTime: tFirst,
          latestTime: tLast,
          rowIndex: -1,
          key: `commit-clump-${branch.name}-${startIdx}-${endIdx}`,
          slotIndices: [...slotBuf],
        });
        buf = [];
        slotBuf = [];
      };
      previews.forEach((c, i) => {
        const commitTime = new Date(c.date).getTime();
        if (buf.length === 0) { startIdx = i; }
        if (buf.length === 0) tFirst = commitTime;
        tLast = commitTime;
        buf.push(c.fullSha);
        slotBuf.push(i);
        if (effectiveForkIdx.has(i)) { flushBranch(i); }
      });
      flushBranch(previews.length - 1);
    });

    if (reserveMergeRows) {
      sortedNodes.forEach((node) => {
        if (directCommitShaSet.has(node.fullSha)) return;
        const t = mergeEventTimeByFullSha.get(node.fullSha) ?? new Date(node.date).getTime();
        gridClumps.push({
          lane: 'main-merge',
          shas: [node.fullSha],
          earliestTime: t,
          latestTime: t,
          rowIndex: -1,
          key: `merge-row-${node.fullSha}`,
        });
      });
    }

    gridClumps.sort((a, b) => {
      const latestDiff = a.latestTime - b.latestTime;
      if (latestDiff !== 0) return latestDiff;
      const earliestDiff = a.earliestTime - b.earliestTime;
      if (earliestDiff !== 0) return earliestDiff;
      return a.key.localeCompare(b.key);
    });

    const rowByEntity = new Map<string, number>();
    const rowTimeByIndex = new Map<number, number>();
    const rowLanesByIndex = new Map<number, Set<string>>();
    const rowExclusiveByIndex = new Map<number, boolean>();
    let nextRowIndex = 0;
    const rowShareTolerance = GRID_EVENT_GAP * GRID_ROW_SHARE_TIME_TOLERANCE_FACTOR;
    const registerRowUsage = (
      row: number,
      lane: string,
      options: { exclusive: boolean; rowTime: number },
    ) => {
      const existingLanes = rowLanesByIndex.get(row);
      if (existingLanes) {
        existingLanes.add(lane);
      } else {
        rowLanesByIndex.set(row, new Set([lane]));
      }
      const existingTime = rowTimeByIndex.get(row);
      rowTimeByIndex.set(
        row,
        existingTime == null || !Number.isFinite(existingTime)
          ? options.rowTime
          : Math.max(existingTime, options.rowTime),
      );
      if (options.exclusive) {
        rowExclusiveByIndex.set(row, true);
      } else if (!rowExclusiveByIndex.has(row)) {
        rowExclusiveByIndex.set(row, false);
      }
    };
    const claimRow = (
      entityKey: string,
      rowTime: number,
      options: { lane: string; allowShare: boolean; exclusive: boolean },
    ): number => {
      const existing = rowByEntity.get(entityKey);
      if (existing != null) {
        registerRowUsage(existing, options.lane, { exclusive: options.exclusive, rowTime });
        return existing;
      }

      let claimed: number | null = null;
      if (options.allowShare && Number.isFinite(rowShareTolerance) && rowShareTolerance > 0) {
        let bestCandidate: { row: number; timeDelta: number; laneCount: number } | null = null;
        for (let row = 0; row < nextRowIndex; row += 1) {
          if (rowExclusiveByIndex.get(row)) continue;
          const lanes = rowLanesByIndex.get(row);
          if (lanes?.has(options.lane)) continue;
          const existingTime = rowTimeByIndex.get(row);
          if (existingTime == null || !Number.isFinite(existingTime)) continue;
          const timeDelta = Math.abs(existingTime - rowTime);
          if (timeDelta > rowShareTolerance) continue;
          const laneCount = lanes?.size ?? 0;
          if (
            bestCandidate == null ||
            timeDelta < bestCandidate.timeDelta ||
            (timeDelta === bestCandidate.timeDelta && laneCount < bestCandidate.laneCount)
          ) {
            bestCandidate = { row, timeDelta, laneCount };
          }
        }
        if (bestCandidate) {
          claimed = bestCandidate.row;
        }
      }

      if (claimed == null) {
        claimed = nextRowIndex;
        nextRowIndex += 1;
      }
      rowByEntity.set(entityKey, claimed);
      registerRowUsage(claimed, options.lane, { exclusive: options.exclusive, rowTime });
      return claimed;
    };

    const nowMs = Date.now();
    for (const clump of gridClumps) {
      const expandedState = expandedClumps.get(clump.key);
      const shouldReserveExpandedRows =
        ((expandedState?.isExpanded ?? false) &&
          expandedState?.phase !== 'collapsed' &&
          expandedState?.phase !== 'collapsing') ||
        ((expandedState?.rowReleaseAt ?? 0) > nowMs);
      const assignShaRow = (sha: string, row: number) => {
        if (clump.lane === 'main' || clump.lane === 'main-merge') {
          gridRowBySha.set(sha, row);
        } else {
          gridRowByBranchSha.set(branchShaRowKey(clump.lane, sha), row);
        }
      };
      const assignSlotRow = (slotIndex: number, row: number) => {
        if (clump.lane === 'main' || clump.lane === 'main-merge') return;
        gridRowByBranchSlot.set(branchSlotRowKey(clump.lane, slotIndex), row);
      };

      if (shouldReserveExpandedRows && (clump.shas.length > 1 || (clump.slotIndices?.length ?? 0) > 1)) {
        const memberCount = Math.max(clump.shas.length, clump.slotIndices?.length ?? 0);
        let firstRow: number | null = null;
        for (let i = 0; i < memberCount; i += 1) {
          const sha = clump.shas[i];
          const slotIndex = clump.slotIndices?.[i];
          const rowTime = clump.latestTime + i;
          const fallbackEntityKey = `clump-member:${clump.key}:${i}`;
          const entityKey = (() => {
            if (clump.lane === 'main' || clump.lane === 'main-merge') {
              return sha ? `main-sha:${sha}` : fallbackEntityKey;
            }
            if (sha) return `branch-sha:${clump.lane}:${sha}`;
            if (slotIndex != null) return `branch-slot:${clump.lane}:${slotIndex}`;
            return fallbackEntityKey;
          })();
          const claimedRow = claimRow(entityKey, rowTime, {
            lane: clump.lane,
            allowShare: false,
            exclusive: true,
          });
          if (firstRow == null) firstRow = claimedRow;
          if (sha) assignShaRow(sha, claimedRow);
          if (slotIndex != null) assignSlotRow(slotIndex, claimedRow);
        }
        clump.rowIndex = firstRow ?? claimRow(`clump:${clump.key}`, clump.latestTime, {
          lane: clump.lane,
          allowShare: false,
          exclusive: true,
        });
      } else {
        // For collapsed branch clumps, prefer the older edge of the clump window so
        // sibling branches that fork around the same point can share rows even when
        // their head commit times drift apart.
        const shareRowTime =
          clump.lane === 'main' || clump.lane === 'main-merge'
            ? clump.latestTime
            : clump.earliestTime;
        const clumpRow = claimRow(`clump:${clump.key}`, shareRowTime, {
          lane: clump.lane,
          allowShare: true,
          exclusive: false,
        });
        clump.rowIndex = clumpRow;
        clump.shas.forEach((sha) => { assignShaRow(sha, clumpRow); });
        clump.slotIndices?.forEach((slotIndex) => { assignSlotRow(slotIndex, clumpRow); });
      }
    }

    const rowTimes: number[] = [];
    for (let i = 0; i < nextRowIndex; i += 1) {
      rowTimes.push(rowTimeByIndex.get(i) ?? 0);
    }

    // Ensure child branch clumps are always allocated above their parent fork segment.
    // This is a structural layout rule (allocator-level), not a render-time clamp.
    const shiftBranchRowsToFloor = (
      branchName: string,
      floorRowExclusive: number,
      options?: { exactOffset?: boolean; avoidDisplacingOthers?: boolean },
    ): boolean => {
      const slotPrefix = `${branchName}::slot:`;
      const shaPrefix = `${branchName}::`;
      const slotEntries = Array.from(gridRowByBranchSlot.entries())
        .filter(([key]) => key.startsWith(slotPrefix));
      const shaEntries = Array.from(gridRowByBranchSha.entries())
        .filter(([key]) => key.startsWith(shaPrefix));
      const clumpRows = gridClumps
        .filter((clump) => clump.lane === branchName && Number.isFinite(clump.rowIndex))
        .map((clump) => clump.rowIndex);
      const allRows = [
        ...slotEntries.map(([, row]) => row),
        ...shaEntries.map(([, row]) => row),
        ...clumpRows,
      ].filter((row) => Number.isFinite(row));
      if (allRows.length === 0) return false;
      const minRow = Math.min(...allRows);
      const floorRow = floorRowExclusive + 1;
      if (!Number.isFinite(floorRow)) return false;

      const exactOffset = options?.exactOffset ?? false;
      const avoidDisplacingOthers = options?.avoidDisplacingOthers ?? false;
      let delta = exactOffset
        ? floorRow - minRow
        : Math.max(0, floorRow - minRow);
      if (delta < -minRow) delta = -minRow;
      // If already at-or-above the floor, do not run collision displacement.
      // Allow legitimate shared rows for sibling branches with matching timing.
      if (delta === 0) return false;
      const currentRows = Array.from(new Set(allRows)).sort((a, b) => a - b);
      const occupiedRowsByOthers = (): Set<number> => {
        const occupied = new Set<number>();
        gridRowBySha.forEach((row) => {
          if (Number.isFinite(row)) occupied.add(row);
        });
        gridRowByBranchSlot.forEach((row, key) => {
          if (key.startsWith(slotPrefix)) return;
          if (Number.isFinite(row)) occupied.add(row);
        });
        gridRowByBranchSha.forEach((row, key) => {
          if (key.startsWith(shaPrefix)) return;
          if (Number.isFinite(row)) occupied.add(row);
        });
        gridClumps.forEach((clump) => {
          if (clump.lane === branchName) return;
          if (Number.isFinite(clump.rowIndex)) occupied.add(clump.rowIndex);
        });
        return occupied;
      };
      const shiftOtherRowsAtOrAbove = (thresholdRow: number) => {
        gridRowBySha.forEach((row, key) => {
          if (!Number.isFinite(row) || row < thresholdRow) return;
          gridRowBySha.set(key, row + 1);
        });
        gridRowByBranchSlot.forEach((row, key) => {
          if (key.startsWith(slotPrefix)) return;
          if (!Number.isFinite(row) || row < thresholdRow) return;
          gridRowByBranchSlot.set(key, row + 1);
        });
        gridRowByBranchSha.forEach((row, key) => {
          if (key.startsWith(shaPrefix)) return;
          if (!Number.isFinite(row) || row < thresholdRow) return;
          gridRowByBranchSha.set(key, row + 1);
        });
        gridClumps.forEach((clump) => {
          if (clump.lane === branchName || !Number.isFinite(clump.rowIndex) || clump.rowIndex < thresholdRow) return;
          clump.rowIndex += 1;
        });
        const fallbackTime =
          rowTimes[Math.min(Math.max(0, thresholdRow), Math.max(0, rowTimes.length - 1))] ?? 0;
        rowTimes.splice(thresholdRow, 0, fallbackTime);
      };
      if (!avoidDisplacingOthers) {
        for (let guard = 0; guard < 2000; guard += 1) {
          const occupied = occupiedRowsByOthers();
          const collisions = currentRows
            .map((row) => row + delta)
            .filter((row) => occupied.has(row));
          if (collisions.length === 0) break;
          const firstCollision = Math.min(...collisions);
          shiftOtherRowsAtOrAbove(firstCollision);
        }
      }
      slotEntries.forEach(([key, row]) => {
        gridRowByBranchSlot.set(key, row + delta);
      });
      shaEntries.forEach(([key, row]) => {
        gridRowByBranchSha.set(key, row + delta);
      });
      gridClumps.forEach((clump) => {
        if (clump.lane !== branchName || !Number.isFinite(clump.rowIndex)) return;
        clump.rowIndex += delta;
      });

      allRows.forEach((oldRow) => {
        const newRow = oldRow + delta;
        if (newRow < 0) return;
        const oldTime = rowTimes[oldRow] ?? 0;
        if (newRow >= rowTimes.length) {
          rowTimes.length = newRow + 1;
        }
        const existing = rowTimes[newRow];
        rowTimes[newRow] =
          existing == null
            ? oldTime
            : Math.max(existing, oldTime);
      });

      return true;
    };

    const parentAnchorRowForBranch = (branch: Branch): number | null => {
      const parentName = renderParentBranchName(branch);
      if (!parentName || parentName === branch.name) return null;
      if (parentName === defaultBranch) {
        // Lightweight anchor for synthetic/main-parent branches: pin to the fork SHA row
        // when available, without scanning/splitting main previews.
        const forkSha = branch.divergedFromSha ?? branch.createdFromSha;
        if (!forkSha) return null;
        const row = gridRowBySha.get(forkSha);
        return row == null || !Number.isFinite(row) ? null : row;
      }
      const parentBranch = branchByName.get(parentName);
      if (!parentBranch) return null;
      const parentPreviews = renderableBranchPreviews(parentBranch);
      if (parentPreviews.length === 0) return null;
      const parentTimes = parentPreviews.map((commit) => new Date(commit.date).getTime());
      const forkIndex = branchPreviewIndexForChildFork(parentPreviews, parentTimes, branch);
      if (forkIndex < 0) return null;
      const parentForkIndices = new Set<number>();
      (childBranchesByParent.get(parentName) ?? []).forEach((child) => {
        const idx = branchPreviewIndexForChildFork(parentPreviews, parentTimes, child);
        if (idx >= 0) parentForkIndices.add(idx);
      });
      const parentSegment = findSegmentForIndex(parentPreviews.length, parentForkIndices, forkIndex);
      if (!parentSegment) return null;
      // Use the actual fork-point row (time-aligned) rather than the parent clump's
      // collapsed anchor row, which can be significantly newer and force children too high.
      const forkPreview = parentPreviews[forkIndex];
      const anchorRow =
        gridRowByBranchSlot.get(branchSlotRowKey(parentName, forkIndex)) ??
        (forkPreview?.fullSha
          ? gridRowByBranchSha.get(branchShaRowKey(parentName, forkPreview.fullSha))
          : undefined) ??
        (() => {
          const fallbackSlotIndex = parentSegment.end;
          const fallbackPreview = parentPreviews[fallbackSlotIndex];
          return (
            gridRowByBranchSlot.get(branchSlotRowKey(parentName, fallbackSlotIndex)) ??
            (fallbackPreview?.fullSha
              ? gridRowByBranchSha.get(branchShaRowKey(parentName, fallbackPreview.fullSha))
              : undefined)
          );
        })();
      return anchorRow == null || !Number.isFinite(anchorRow) ? null : anchorRow;
    };

    const branchDepthCache = new Map<string, number>();
    const branchDepth = (branchName: string, visiting = new Set<string>()): number => {
      const cached = branchDepthCache.get(branchName);
      if (cached != null) return cached;
      if (visiting.has(branchName)) return Number.MAX_SAFE_INTEGER;
      visiting.add(branchName);
      const branch = branchByName.get(branchName);
      if (!branch) {
        branchDepthCache.set(branchName, 0);
        return 0;
      }
      const parentName = renderParentBranchName(branch);
      if (!parentName || parentName === defaultBranch || parentName === branchName || !branchByName.has(parentName)) {
        branchDepthCache.set(branchName, 1);
        return 1;
      }
      const depth = 1 + branchDepth(parentName, visiting);
      branchDepthCache.set(branchName, depth);
      return depth;
    };

    const syntheticBranchNames = new Set(
      activeBranches
        .filter((branch) => renderableBranchPreviews(branch).length === 0)
        .map((branch) => branch.name),
    );

    // Iterate to settle cascaded parent->child constraints across nested branches.
    for (let pass = 0; pass < activeBranches.length; pass += 1) {
      let changed = false;
      const parentAnchorRowCache = new Map<string, number | null>();
      const cachedParentAnchorRowForBranch = (branch: Branch): number | null => {
        const cached = parentAnchorRowCache.get(branch.name);
        if (cached !== undefined) return cached;
        const computed = parentAnchorRowForBranch(branch);
        parentAnchorRowCache.set(branch.name, computed);
        return computed;
      };
      const branchShiftOrder = [...activeBranches].sort((a, b) => {
        const depthDiff = branchDepth(a.name) - branchDepth(b.name);
        if (depthDiff !== 0) return depthDiff;
        const floorDiff =
          (cachedParentAnchorRowForBranch(a) ?? Number.NEGATIVE_INFINITY) -
          (cachedParentAnchorRowForBranch(b) ?? Number.NEGATIVE_INFINITY);
        if (floorDiff !== 0) return floorDiff;
        const forkDiff = branchForkMs(a) - branchForkMs(b);
        if (forkDiff !== 0) return forkDiff;
        const createdDiff = branchCreatedMs(a) - branchCreatedMs(b);
        if (createdDiff !== 0) return createdDiff;
        return a.name.localeCompare(b.name);
      });
      for (const branch of branchShiftOrder) {
        const isSynthetic = syntheticBranchNames.has(branch.name);
        const isMainParent = renderParentBranchName(branch) === defaultBranch;
        const parentAnchorRow = parentAnchorRowForBranch(branch);
        if (parentAnchorRow == null) continue;
        changed = shiftBranchRowsToFloor(branch.name, parentAnchorRow, {
          // Empty/synthetic branches (no concrete commits) should sit at a stable
          // one-row offset from the parent anchor.
          // Keep main-parent synthetic branches on a soft floor so siblings can
          // still share the same collapsed row when timing is close.
          exactOffset:
            syntheticBranchNames.has(branch.name) &&
            renderParentBranchName(branch) !== defaultBranch,
          // For synthetic branches off main, enforce parent+1 floor without
          // displacing unrelated rows; this preserves shared-row collapsing.
          avoidDisplacingOthers: isSynthetic && isMainParent,
        }) || changed;
      }
      if (!changed) break;
    }

    // Densify row indices to only rows that actually back visible commit markers.
    // This prevents "phantom" timeline rows reserved by transient/internal clumps
    // from creating blank bands in the rendered map.
    const usedRows = new Set<number>();
    const includeRow = (row: number | undefined | null) => {
      if (row == null || !Number.isFinite(row)) return;
      usedRows.add(row);
    };

    // Keep only rows that back currently visible clump markers.
    // Collapsed clumps keep one row, expanded clumps keep one row per visible member.
    const rowForClumpMember = (clump: GridClump, memberIndex: number): number | undefined => {
      const sha = clump.shas[memberIndex];
      const slotIndex = clump.slotIndices?.[memberIndex];
      if (clump.lane === 'main' || clump.lane === 'main-merge') {
        return sha ? gridRowBySha.get(sha) : undefined;
      }
      if (sha) {
        return gridRowByBranchSha.get(branchShaRowKey(clump.lane, sha));
      }
      if (slotIndex != null) {
        return gridRowByBranchSlot.get(branchSlotRowKey(clump.lane, slotIndex));
      }
      return undefined;
    };

    const nowMsForUsedRows = Date.now();
    gridClumps.forEach((clump) => {
      const expandedState = expandedClumps.get(clump.key);
      const shouldReserveExpandedRows =
        ((expandedState?.isExpanded ?? false) &&
          expandedState?.phase !== 'collapsed' &&
          expandedState?.phase !== 'collapsing') ||
        ((expandedState?.rowReleaseAt ?? 0) > nowMsForUsedRows);
      const memberCount = Math.max(clump.shas.length, clump.slotIndices?.length ?? 0);

      if (shouldReserveExpandedRows && memberCount > 1) {
        let includedAnyMember = false;
        for (let memberIndex = 0; memberIndex < memberCount; memberIndex += 1) {
          const memberRow = rowForClumpMember(clump, memberIndex);
          if (memberRow == null || !Number.isFinite(memberRow)) continue;
          includeRow(memberRow);
          includedAnyMember = true;
        }
        if (!includedAnyMember) includeRow(clump.rowIndex);
        return;
      }
      includeRow(clump.rowIndex);
    });

    if (hasActiveClumpTransition) {
      // Keep row indices stable while clumps are mid-transition so connected
      // branch paths don't appear to "recalculate" against a shifting grid.
      claimedGridRowTimes = rowTimes;
    } else if (usedRows.size === 0) {
      claimedGridRowTimes = rowTimes;
    } else {
      const denseRows = Array.from(usedRows).sort((a, b) => a - b);
      const denseRowByOld = new Map<number, number>();
      denseRows.forEach((row, index) => {
        denseRowByOld.set(row, index);
      });

      const remapRows = (map: Map<string, number>) => {
        const entries = Array.from(map.entries());
        map.clear();
        entries.forEach(([key, row]) => {
          const nextRow = denseRowByOld.get(row);
          if (nextRow == null) return;
          map.set(key, nextRow);
        });
      };

      remapRows(gridRowBySha);
      remapRows(gridRowByBranchSha);
      remapRows(gridRowByBranchSlot);
      claimedGridRowTimes = denseRows.map((row) => rowTimes[row] ?? 0);
    }
  }

  const gridRowTimes = (() => {
    return claimedGridRowTimes;
  })();

  const currentMaxGridRow = Math.max(0, gridRowTimes.length - 1);
  if (
    !isHorizontal ||
    !hasPinnedHorizontalRowOffset ||
    stableHorizontalMaxRowRef.current == null
  ) {
    stableHorizontalMaxRowRef.current = currentMaxGridRow;
  }
  const pinnedHorizontalMaxRow = stableHorizontalMaxRowRef.current ?? currentMaxGridRow;
  const horizontalRowShiftX = (isHorizontal && hasPinnedHorizontalRowOffset)
    ? (pinnedHorizontalMaxRow - currentMaxGridRow) * GRID_EVENT_GAP
    : 0;
  const shiftedLeftPad = leftPad + horizontalRowShiftX;
  const gridRowToX = (row: number): number => shiftedLeftPad + row * GRID_EVENT_GAP;

  const gridEventPoints = gridRowTimes.map((time, index) => ({ t: time, x: gridRowToX(index) }));

  const allAnchorTimes = gridRowTimes;

  const anchorXs: number[] = [];
  if (gridEventPoints.length > 0) {
    anchorXs.push(...gridEventPoints.map((point) => point.x));
  } else if (allAnchorTimes.length > 0) {
    anchorXs.push(shiftedLeftPad);
    for (let i = 1; i < allAnchorTimes.length; i += 1) {
      anchorXs.push(anchorXs[i - 1] + IDEAL_EVENT_GAP);
    }
  }

  function xForTimestamp(t: number): number {
    if (gridEventPoints.length > 0) {
      if (!Number.isFinite(t)) return gridEventPoints[0]?.x ?? shiftedLeftPad;
      // Preserve chronology: anchor to the latest row at-or-before the target
      // timestamp. Only fall forward when nothing exists in the past.
      let bestPast: { t: number; x: number } | null = null;
      let bestFuture: { t: number; x: number } | null = null;
      for (const point of gridEventPoints) {
        if (point.t <= t) {
          if (
            bestPast == null ||
            point.t > bestPast.t ||
            (point.t === bestPast.t && point.x > bestPast.x)
          ) {
            bestPast = point;
          }
        } else if (
          bestFuture == null ||
          point.t < bestFuture.t ||
          (point.t === bestFuture.t && point.x < bestFuture.x)
        ) {
          bestFuture = point;
        }
      }
      return bestPast?.x ?? bestFuture?.x ?? (gridEventPoints[0]?.x ?? shiftedLeftPad);
    }
    if (!Number.isFinite(t) || allAnchorTimes.length === 0) return shiftedLeftPad;
    let lo = 0;
    let hi = allAnchorTimes.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (allAnchorTimes[mid] < t) lo = mid + 1;
      else hi = mid;
    }
    if (lo <= 0) return shiftedLeftPad - IDEAL_EVENT_GAP * 2;
    if (lo >= allAnchorTimes.length) {
      const endX = anchorXs[anchorXs.length - 1] ?? leftPad;
      return endX + IDEAL_EVENT_GAP * 2;
    }
    return anchorXs[lo] ?? shiftedLeftPad + lo * IDEAL_EVENT_GAP;
  }

  function gridXForSha(sha: string): number | undefined {
    if (!gridRowBySha) return undefined;
    const row = gridRowBySha.get(sha);
    if (row == null) return undefined;
    return gridRowToX(row);
  }

  function gridXForBranchSha(branchName: string, sha: string): number | undefined {
    const branchRow = gridRowByBranchSha.get(branchShaRowKey(branchName, sha));
    if (branchRow != null) return gridRowToX(branchRow);
    return gridXForSha(sha);
  }

  function gridXForBranchSlot(branchName: string, slotIndex: number): number | undefined {
    const branchRow = gridRowByBranchSlot.get(branchSlotRowKey(branchName, slotIndex));
    if (branchRow == null) return undefined;
    return gridRowToX(branchRow);
  }

  const nodeXByFullSha = new Map<string, number>(
    sortedNodes.map((m) => [
      m.fullSha,
      gridXForSha(m.fullSha) ?? xForTimestamp(new Date(m.date).getTime()),
    ])
  );
  const directXByFullSha = new Map<string, number>(
    sortedDirectCommits.map((c) => [
      c.fullSha,
      gridXForSha(c.fullSha) ?? xForTimestamp(new Date(c.date).getTime()),
    ])
  );
  const forcedMergeJunctionXBySha = new Map<string, number>();

  function mergeJunctionTimeX(mergeNode: MergeNode): number {
    // Prefer forced grid placement (one row above merged branch source),
    // otherwise use the actual main-line commit coordinate for the merge SHA.
    return forcedMergeJunctionXBySha.get(mergeNode.fullSha) ??
      directXByFullSha.get(mergeNode.fullSha) ??
      nodeXByFullSha.get(mergeNode.fullSha) ??
      timeToX(mergeNode.date);
  }
  const mainEndX = gridEventPoints[gridEventPoints.length - 1]?.x ?? leftPad;
  const mainCommitXs = [
    ...sortedNodes.map((m) => nodeXByFullSha.get(m.fullSha) ?? leftPad),
    ...sortedDirectCommits.map((c) => directXByFullSha.get(c.fullSha) ?? leftPad),
  ];
  const latestMainCommitX = mainCommitXs.length > 0 ? Math.max(...mainCommitXs) : mainEndX;
  const mainActiveEndX = Math.min(mainEndX, latestMainCommitX);

  function timeToX(dateStr: string): number {
    return xForTimestamp(new Date(dateStr).getTime());
  }

  const mainCommitXBySha = new Map<string, number>([
    ...sortedDirectCommits.map((c) => [c.fullSha, directXByFullSha.get(c.fullSha) ?? timeToX(c.date)] as [string, number]),
    ...sortedNodes.map((m) => [m.fullSha, nodeXByFullSha.get(m.fullSha) ?? timeToX(m.date)] as [string, number]),
  ]);

  function commitXForSha(sha?: string): number | null {
    if (!sha) return null;
    const exact = mainCommitXBySha.get(sha);
    if (typeof exact === 'number') return exact;
    const direct = sortedDirectCommits.find((c) => c.fullSha.startsWith(sha));
    if (direct) return directXByFullSha.get(direct.fullSha) ?? timeToX(direct.date);
    const merge = sortedNodes.find((m) => m.fullSha.startsWith(sha));
    if (merge) return nodeXByFullSha.get(merge.fullSha) ?? timeToX(merge.date);
    return null;
  }

  function branchCommitXForSha(branchName: string, sha?: string): number | null {
    if (!sha) return null;
    const b = branchByName.get(branchName);
    if (!b) return null;

    const renderable = renderableBranchPreviews(b);
    const exact = renderable.find((commit) => commit.fullSha === sha || commit.sha === sha);
    if (exact) return gridXForBranchSha(branchName, exact.fullSha) ?? timeToX(exact.date);
    const prefix = renderable.find(
      (commit) =>
        commit.fullSha.startsWith(sha) ||
        sha.startsWith(commit.fullSha) ||
        commit.sha.startsWith(sha) ||
        sha.startsWith(commit.sha)
    );
    if (prefix) return gridXForBranchSha(branchName, prefix.fullSha) ?? timeToX(prefix.date);

    // If the sha wasn't found in the explicitly rendered commits of this branch,
    // we assume this branch is either a fresh copy (no unique commits) or the
    // fork happened before its unique history. If it's an empty placeholder,
    // Force it to anchor directly to its visual box (slot 0).
    const isPlaceholder = renderable.length === 0;
    if (isPlaceholder) {
      const slotX = gridXForBranchSlot(branchName, 0);
      if (slotX != null) return slotX;
    }

    return null;
  }

  const mainCommitAnchors = [
    ...sortedDirectCommits.map((commit) => ({
      t: new Date(commit.date).getTime(),
      x: directXByFullSha.get(commit.fullSha) ?? timeToX(commit.date),
    })),
    ...(reserveMergeRows
      ? sortedNodes.map((node) => ({
        t: new Date(node.date).getTime(),
        x: nodeXByFullSha.get(node.fullSha) ?? timeToX(node.date),
      }))
      : []),
  ].filter((anchor) => Number.isFinite(anchor.t) && Number.isFinite(anchor.x));

  function snapToMainCommitX(dateStr?: string): number | null {
    if (!dateStr || mainCommitAnchors.length === 0) return null;
    const target = new Date(dateStr).getTime();
    if (!Number.isFinite(target)) return null;
    let bestPast: { delta: number; x: number } | null = null;
    let bestFuture: { delta: number; x: number } | null = null;
    for (const anchor of mainCommitAnchors) {
      if (anchor.t <= target) {
        const delta = target - anchor.t;
        if (!bestPast || delta < bestPast.delta) bestPast = { delta, x: anchor.x };
      } else {
        const delta = anchor.t - target;
        if (!bestFuture || delta < bestFuture.delta) bestFuture = { delta, x: anchor.x };
      }
    }
    return bestPast?.x ?? bestFuture?.x ?? null;
  }

  function snapToBranchCommitX(branchName: string, dateStr?: string): number | null {
    if (!dateStr) return null;
    const branch = branchByName.get(branchName);
    const commits = branch ? renderableBranchPreviews(branch) : sortedConcreteBranchPreviews(branchName);
    if (commits.length === 0) return null;
    const target = new Date(dateStr).getTime();
    if (!Number.isFinite(target)) return null;
    let bestPast: { delta: number; x: number } | null = null;
    let bestFuture: { delta: number; x: number } | null = null;
    for (const commit of commits) {
      const commitTime = new Date(commit.date).getTime();
      if (!Number.isFinite(commitTime)) continue;
      const commitX = gridXForBranchSha(branchName, commit.fullSha) ?? timeToX(commit.date);
      if (commitTime <= target) {
        const delta = target - commitTime;
        if (!bestPast || delta < bestPast.delta) bestPast = { delta, x: commitX };
      } else {
        const delta = commitTime - target;
        if (!bestFuture || delta < bestFuture.delta) bestFuture = { delta, x: commitX };
      }
    }
    return bestPast?.x ?? bestFuture?.x ?? null;
  }

  function findSegmentForIndex(
    entryCount: number,
    forkIndices: Set<number>,
    targetIndex: number,
    preserveSplitIndices?: Set<number>,
  ): { start: number; end: number } | null {
    if (entryCount <= 0 || targetIndex < 0 || targetIndex >= entryCount) return null;
    const effectiveForkIndices = Array.from(pruneForkSplitIndices(entryCount, forkIndices, preserveSplitIndices))
      .sort((a, b) => a - b);
    let start = 0;
    for (const split of effectiveForkIndices) {
      const end = Math.min(split, entryCount - 1);
      if (targetIndex >= start && targetIndex <= end) return { start, end };
      start = end + 1;
    }
    if (targetIndex >= start && targetIndex <= entryCount - 1) {
      return { start, end: entryCount - 1 };
    }
    return null;
  }

  function collapsedParentClumpAnchorX(branch: Branch, parentName: string): number | null {
    if (!parentName || parentName === branch.name) return null;

    const parentPreviews: BranchCommitPreview[] = parentName === defaultBranch
      ? sortedDirectCommits.map((commit) => ({
        ...commit,
        kind:
        commit.kind === 'stash'
          ? 'stash'
          : commit.kind === 'uncommitted'
            ? 'uncommitted'
            : 'commit',
      } as BranchCommitPreview))
      : (() => {
        const parentBranch = branchByName.get(parentName);
        if (!parentBranch) return [];
        return renderableBranchPreviews(parentBranch);
      })();
    if (parentPreviews.length <= 1) return null;

    const parentTimes = parentPreviews.map((commit) => new Date(commit.date).getTime());
    const forkIndex = branchPreviewIndexForChildFork(parentPreviews, parentTimes, branch);
    if (forkIndex < 0) return null;

    const parentForkIndices = new Set<number>();
    (childBranchesByParent.get(parentName) ?? []).forEach((child) => {
      const idx = branchPreviewIndexForChildFork(parentPreviews, parentTimes, child);
      if (idx >= 0) parentForkIndices.add(idx);
    });

    // For the default branch, include the same additional split indices that
    // the grid allocator uses (merge commits, parent-sha breaks, forced-visible
    // commits, uncommitted markers). Without these, pruneForkSplitIndices may
    // compute different segment boundaries than the actual rendered clumps,
    // causing fork points to be incorrectly lifted to a later clump anchor.
    const combinedSplitIndices = parentName === defaultBranch
      ? new Set<number>([...parentForkIndices, ...mainCommitSplitIndices])
      : parentForkIndices;
    const preserveSplitIndices =
      parentName === defaultBranch
        ? new Set<number>([...parentForkIndices, ...forcedMainSplitIndices])
        : parentForkIndices;

    const parentSegment = findSegmentForIndex(parentPreviews.length, combinedSplitIndices, forkIndex, preserveSplitIndices);
    if (!parentSegment) return null;
    const { start: segmentStart, end: segmentEnd } = parentSegment;
    const segmentLength = segmentEnd - segmentStart + 1;
    if (segmentLength <= 1) return null;
    // If the fork is already on the visible clump anchor commit, no lift needed.
    if (forkIndex >= segmentEnd) return null;

    const clumpKey = `commit-clump-${parentName}-${segmentStart}-${segmentEnd}`;
    const expandedState = expandedClumps.get(clumpKey);
    const parentClumpIsExpanded =
      (expandedState?.isExpanded ?? false) &&
      expandedState?.phase !== 'collapsed';
    if (parentClumpIsExpanded) return null;

    const anchorSlotIndex = segmentEnd;
    const anchorPreview = parentPreviews[anchorSlotIndex];
    const anchorX = parentName === defaultBranch
      ? (
        anchorPreview?.fullSha
          ? (
            directXByFullSha.get(anchorPreview.fullSha) ??
            nodeXByFullSha.get(anchorPreview.fullSha) ??
            timeToX(anchorPreview.date)
          )
          : undefined
      )
      : (
        gridXForBranchSlot(parentName, anchorSlotIndex) ??
        (anchorPreview?.fullSha
          ? gridXForBranchSha(parentName, anchorPreview.fullSha)
          : undefined)
      );
    if (anchorX == null) return null;
    return anchorX;
  }

  function collapsedParentClumpLiftedForkX(branch: Branch, parentName: string): number | null {
    return collapsedParentClumpAnchorX(branch, parentName);
  }

  function collapsedParentClumpLiftedTipX(branch: Branch, parentName: string): number | null {
    const anchorX = collapsedParentClumpAnchorX(branch, parentName);
    if (anchorX == null) return null;
    return anchorX + GRID_EVENT_GAP;
  }

  function branchCreatedDate(b: Branch): string {
    return b.createdDate ?? b.divergedFromDate ?? b.lastCommitDate;
  }

  function branchCreatedMs(b: Branch): number {
    const t = new Date(branchCreatedDate(b)).getTime();
    return Number.isFinite(t) ? t : Number.POSITIVE_INFINITY;
  }

  function branchForkMs(b: Branch): number {
    const t = new Date(b.divergedFromDate ?? b.createdDate ?? b.lastCommitDate).getTime();
    return Number.isFinite(t) ? t : Number.POSITIVE_INFINITY;
  }

  function branchEarliestPreviewDate(branchName: string): string | null {
    const branch = branchByName.get(branchName);
    if (!branch) return null;
    const previews = renderableBranchPreviews(branch);
    return previews[0]?.date ?? null;
  }

  type BranchTiming = {
    parentName: string;
    forkTimeX: number;
    tipTimeX: number;
    mergeNodeTimeX: number | null;
    maxTimeX: number;
    isFreshCopy: boolean;
    isMergedBranch: boolean;
  };

  const branchTimingByName = new Map<string, BranchTiming>();

  function branchHeadTimeX(branch: Branch): number {
    const byBranchSha = branch.headSha ? branchCommitXForSha(branch.name, branch.headSha) : null;
    if (byBranchSha != null) return byBranchSha;
    const byMainSha = commitXForSha(branch.headSha);
    if (byMainSha != null) return byMainSha;
    const byBranchDate = snapToBranchCommitX(branch.name, branch.lastCommitDate);
    if (byBranchDate != null) return byBranchDate;
    const byMainDate = snapToMainCommitX(branch.lastCommitDate);
    if (byMainDate != null) return byMainDate;
    return timeToX(branch.lastCommitDate);
  }

  function branchForkTimeX(branch: Branch, parentName: string, visiting: Set<string>): number {
    const hasParentBranch =
      parentName !== defaultBranch &&
      parentName !== branch.name &&
      branchByName.has(parentName);

    if (!hasParentBranch) {
      const createdAnchor =
        commitXForSha(branch.divergedFromSha) ??
        commitXForSha(branch.createdFromSha);
      if (createdAnchor != null) return createdAnchor;

      const earliestPreviewDate = branchEarliestPreviewDate(branch.name);
      const snapMain =
        snapToMainCommitX(branch.divergedFromDate ?? branch.createdDate) ??
        snapToMainCommitX(earliestPreviewDate ?? branch.createdDate);
      if (snapMain != null) return snapMain;
    } else {
      const byParentSha = branchCommitXForSha(parentName, branch.divergedFromSha);
      if (byParentSha != null) return byParentSha;

      const byParentDate = snapToBranchCommitX(parentName, branch.divergedFromDate ?? branch.createdDate);
      if (byParentDate != null) return byParentDate;

      // The declared parent branch doesn't contain the fork SHA or a matching
      // date.  Before falling back to the parent's tip (which can be wildly
      // wrong for branches forked from main that git metadata erroneously
      // attributes to a sibling branch), try resolving the fork commit on main.
      const mainFallback =
        commitXForSha(branch.divergedFromSha) ??
        commitXForSha(branch.createdFromSha);
      if (mainFallback != null) return mainFallback;

      const snapMainFallback =
        snapToMainCommitX(branch.divergedFromDate ?? branch.createdDate);
      if (snapMainFallback != null) return snapMainFallback;

      const parentTiming = branchTimingWithVisited(parentName, visiting);
      return parentTiming.tipTimeX;
    }

    return timeToX(branch.divergedFromDate ?? branch.createdDate ?? branch.lastCommitDate);
  }

  function resolveMergeNodeForBranch(branch: Branch, parentName: string): MergeNode | undefined {
    const headSha = branch.headSha;
    if (!headSha) return undefined;
    const targeted = mergeNodeByMergedHeadAndTarget.get(mergeHeadTargetKey(parentName, headSha));
    if (targeted) return targeted;
    return mergeNodeByMergedHeadSha.get(headSha);
  }

  function branchTimingWithVisited(branchName: string, visiting: Set<string>): BranchTiming {
    const cached = branchTimingByName.get(branchName);
    if (cached) return cached;

    const branch = branchByName.get(branchName);
    if (!branch) {
      const fallbackDate =
        activeBranches[activeBranches.length - 1]?.lastCommitDate ??
        activeBranches[0]?.lastCommitDate ??
        new Date().toISOString();
      const fallbackTimeX = timeToX(fallbackDate);
      const fallback: BranchTiming = {
        parentName: defaultBranch,
        forkTimeX: fallbackTimeX,
        tipTimeX: fallbackTimeX,
        mergeNodeTimeX: null,
        maxTimeX: fallbackTimeX,
        isFreshCopy: false,
        isMergedBranch: false,
      };
      return fallback;
    }

    if (visiting.has(branch.name)) {
      const cycleHeadX = branchHeadTimeX(branch);
      const cycleFallback: BranchTiming = {
        parentName: defaultBranch,
        forkTimeX: Math.max(timeToX(branchCreatedDate(branch)), cycleHeadX - GRID_EVENT_GAP),
        tipTimeX: cycleHeadX,
        mergeNodeTimeX: null,
        maxTimeX: cycleHeadX,
        isFreshCopy: freshCopyBranchNames.has(branch.name),
        isMergedBranch: false,
      };
      branchTimingByName.set(branch.name, cycleFallback);
      return cycleFallback;
    }

    visiting.add(branch.name);
    const parentName = renderParentBranchName(branch);
    const forkTimeX = branchForkTimeX(branch, parentName, visiting);
    const minTipTimeXFromCollapsedParent = collapsedParentClumpLiftedTipX(branch, parentName);
    const tipTimeX = Math.max(
      branchHeadTimeX(branch),
      forkTimeX,
      minTipTimeXFromCollapsedParent ?? Number.NEGATIVE_INFINITY,
    );
    const isFreshCopy = freshCopyBranchNames.has(branch.name);
    const isMergedBranch = branch.commitsAhead === 0 && !isFreshCopy;
    const mergeNodeForBranch = isMergedBranch
      ? resolveMergeNodeForBranch(branch, parentName)
      : undefined;
    const mergeNodeTimeX = mergeNodeForBranch ? mergeJunctionTimeX(mergeNodeForBranch) : null;
    const timing: BranchTiming = {
      parentName,
      forkTimeX,
      tipTimeX,
      mergeNodeTimeX,
      maxTimeX: mergeNodeTimeX != null ? Math.max(tipTimeX, mergeNodeTimeX) : tipTimeX,
      isFreshCopy,
      isMergedBranch,
    };
    visiting.delete(branch.name);
    branchTimingByName.set(branch.name, timing);
    return timing;
  }

  function branchTiming(branch: Branch): BranchTiming {
    return branchTimingWithVisited(branch.name, new Set<string>());
  }

  function branchForkX(branch: Branch): number {
    return branchTiming(branch).forkTimeX;
  }

  function branchTipX(branch: Branch): number {
    return branchTiming(branch).tipTimeX;
  }

  for (const branch of activeBranches) {
    if (branch.commitsAhead !== 0) continue;
    if (freshCopyBranchNames.has(branch.name)) continue;
    const parentName = renderParentBranchName(branch);
    const mergeNode = resolveMergeNodeForBranch(branch, parentName);
    if (!mergeNode) continue;
    const baseMergeX =
      directXByFullSha.get(mergeNode.fullSha) ??
      nodeXByFullSha.get(mergeNode.fullSha) ??
      timeToX(mergeNode.date);
    const minMergeX = branchTipX(branch) + GRID_EVENT_GAP;
    const forcedMergeX = Math.max(baseMergeX, minMergeX);
    forcedMergeJunctionXBySha.set(mergeNode.fullSha, forcedMergeX);
    // Keep merge-node rendering aligned with forced merge junction placement.
    nodeXByFullSha.set(mergeNode.fullSha, forcedMergeX);
    directXByFullSha.set(mergeNode.fullSha, forcedMergeX);
    mainCommitXBySha.set(mergeNode.fullSha, forcedMergeX);
  }

  function branchAheadCount(b: Branch): number {
    return branchAheadCountByName.get(b.name) ?? 0;
  }

  function sortedConcreteBranchPreviews(branchName: string): BranchCommitPreview[] {
    return sortedConcreteBranchPreviewsByName.get(branchName) ?? [];
  }

  function renderableBranchPreviews(branch: Branch): BranchCommitPreview[] {
    return renderableBranchPreviewsByName.get(branch.name) ?? [];
  }

  // Canonical (logical) layout uses vertical time; orientation projection swaps
  // axes when needed, and mirrors horizontal time so left=past, right=future.
  const MAIN_LEFT_PAD = 0;
  const MAIN_TOP_PAD = 0;
  const mainX = MAIN_LEFT_PAD;
  const timelineMinX = leftPad;
  const timelineMaxX = activeBranches.reduce(
    (max, b) => Math.max(max, branchTipX(b)),
    mainEndX
  ) + GRID_EVENT_GAP;
  const timelineSpanY = Math.max(1, timelineMaxX - timelineMinX);
  const mainStartY = MAIN_TOP_PAD + timelineSpanY; // oldest
  function timeCoordToY(timeCoordX: number): number {
    return mainStartY - (timeCoordX - timelineMinX);
  }
  const mainEndY = timeCoordToY(mainEndX); // newest anchor on main
  const mainActiveEndY = timeCoordToY(mainActiveEndX);

  const mapTopInset = Math.max(0, mapTopInsetPx);
  const layoutViewportW = viewportSize.width;
  const layoutViewportH = Math.max(1, viewportSize.height - mapTopInset);
  const viewportMinDim = Math.min(layoutViewportW, layoutViewportH);
  const svgContentPadding =
    layoutViewportW > 0 && layoutViewportH > 0
      ? Math.min(
        SVG_CONTENT_PADDING_MAX,
        Math.round(
          SVG_CONTENT_PADDING_BASE *
          Math.max(1, viewportMinDim / SVG_CONTENT_PADDING_VIEWPORT_REF_MIN)
        )
      )
      : SVG_CONTENT_PADDING_BASE;

  // Vertical extent of grid rows in Y (half node above/below row centers). Used to keep
  // guide and viewport bounds aligned to full node cells instead of center lines.
  const gridHalfHForBounds = GRID_NODE_RECT.height / 2;
  const gridRowYExtent =
    gridEventPoints.length > 0
      ? (() => {
        const ys = gridEventPoints.map((p) => timeCoordToY(p.x)).filter(Number.isFinite);
        if (ys.length === 0) return null;
        const minC = Math.min(...ys);
        const maxC = Math.max(...ys);
        return { minY: minC - gridHalfHForBounds, maxY: maxC + gridHalfHForBounds };
      })()
      : null;

  const logicalTimelineHeight = gridRowYExtent
    ? Math.max(
      mainStartY + SVG_LAYOUT_TAIL_Y,
      gridRowYExtent.maxY - Math.min(0, gridRowYExtent.minY),
    ) + 2 * svgContentPadding
    : mainStartY + SVG_LAYOUT_TAIL_Y + 2 * svgContentPadding;

  if (
    !isHorizontal ||
    !hasPinnedHorizontalRowOffset ||
    stableHorizontalMirrorRef.current == null
  ) {
    stableHorizontalMirrorRef.current = logicalTimelineHeight;
  }
  const horizontalProjectionMirrorX = (isHorizontal && hasPinnedHorizontalRowOffset)
    ? stableHorizontalMirrorRef.current
    : logicalTimelineHeight;
  function projectPoint(x: number, y: number): { x: number; y: number } {
    return isHorizontal
      ? { x: horizontalProjectionMirrorX - y, y: x }
      : { x, y };
  }

  function pathCoord(x: number, y: number): string {
    const projected = projectPoint(x, y);
    return `${projected.x} ${projected.y}`;
  }

  function unprojectPoint(x: number, y: number): { x: number; y: number } {
    return isHorizontal
      ? { x: y, y: horizontalProjectionMirrorX - x }
      : { x, y };
  }

  // ── Branch columns self-create on first use ────────────────────────────────
  // Each branch claims its own column lazily, biased to parent+1 when parent
  // is visible. Columns are reused only when branch time-ranges are separated.
  const BRANCH_LANE_MIN_SEPARATION_X = Math.max(1, GRID_EVENT_GAP * BRANCH_COLUMN_REUSE_TIME_GAP_FACTOR);
  const laneWidth = gridLaneWidth;
  const laneOffsetX = GRID_LANE_OFFSET_X;
  const branchColumnByName = new Map<string, number>();
  const columnIntervals = new Map<number, Array<{ start: number; end: number }>>();

  function intervalsConflict(startA: number, endA: number, startB: number, endB: number): boolean {
    return !(
      startA - endB >= BRANCH_LANE_MIN_SEPARATION_X ||
      startB - endA >= BRANCH_LANE_MIN_SEPARATION_X
    );
  }

  function columnHasConflict(column: number, start: number, end: number): boolean {
    const intervals = columnIntervals.get(column) ?? [];
    return intervals.some((interval) => intervalsConflict(start, end, interval.start, interval.end));
  }

  function claimBranchColumnWithVisited(branchName: string, visiting: Set<string>): number {
    const cached = branchColumnByName.get(branchName);
    if (typeof cached === 'number') return cached;
    const branch = branchByName.get(branchName);
    if (!branch) return 0;
    const timing = branchTiming(branch);
    const branchStart = timing.forkTimeX;
    const branchEnd = timing.maxTimeX;

    if (visiting.has(branchName)) {
      let cycleColumn = 0;
      while (columnHasConflict(cycleColumn, branchStart, branchEnd)) cycleColumn += 1;
      const intervals = columnIntervals.get(cycleColumn) ?? [];
      intervals.push({ start: branchStart, end: branchEnd });
      columnIntervals.set(cycleColumn, intervals);
      branchColumnByName.set(branchName, cycleColumn);
      return cycleColumn;
    }

    visiting.add(branchName);
    const renderParent = branch.parentBranch ?? timing.parentName;
    const hasVisibleParent =
      renderParent != null &&
      renderParent !== defaultBranch &&
      renderParent !== branch.name &&
      branchByName.has(renderParent);
    const minColumn = hasVisibleParent
      ? claimBranchColumnWithVisited(renderParent, visiting) + 1
      : 0;

    let column = minColumn;
    while (columnHasConflict(column, branchStart, branchEnd)) column += 1;

    const intervals = columnIntervals.get(column) ?? [];
    intervals.push({ start: branchStart, end: branchEnd });
    columnIntervals.set(column, intervals);
    branchColumnByName.set(branchName, column);
    visiting.delete(branchName);
    return column;
  }

  [...activeBranches]
    .sort((a, b) => {
      const createdDiff = branchCreatedMs(a) - branchCreatedMs(b);
      if (createdDiff !== 0) return createdDiff;
      const startDiff = branchForkX(a) - branchForkX(b);
      if (startDiff !== 0) return startDiff;
      return a.name.localeCompare(b.name);
    })
    .forEach((branch) => {
      claimBranchColumnWithVisited(branch.name, new Set<string>());
    });

  function laneBaseX(b: Branch): number {
    const column = branchColumnByName.get(b.name) ?? claimBranchColumnWithVisited(b.name, new Set<string>());
    return mainX + laneWidth * (column + 1) + laneOffsetX;
  }

  const laneBaseXByBranch = new Map<string, number>(
    activeBranches.map((b) => [b.name, laneBaseX(b)])
  );

  const laneXByBranch = new Map<string, number>(
    activeBranches.map((branch) => {
      const baseLaneX = laneBaseXByBranch.get(branch.name) ?? laneBaseX(branch);
      return [branch.name, baseLaneX];
    })
  );

  function laneX(b: Branch): number {
    return laneXByBranch.get(b.name) ?? laneBaseX(b);
  }

  function resolveBranchStartParentName(b: Branch): string {
    const declaredParent = branchTiming(b).parentName;
    const hasConcreteParent =
      declaredParent &&
      declaredParent !== defaultBranch &&
      declaredParent !== b.name &&
      branchByName.has(declaredParent);
    if (!hasConcreteParent) return defaultBranch;

    const forkSha = b.divergedFromSha ?? b.createdFromSha;
    if (forkSha) {
      const forkOnParent = branchCommitXForSha(declaredParent, forkSha) != null;
      if (forkOnParent) return declaredParent;
      const forkOnMain = commitXForSha(forkSha) != null;
      if (forkOnMain) return defaultBranch;
    }

    const forkX = branchForkX(b);
    const forkDate = b.divergedFromDate ?? b.createdDate ?? b.lastCommitDate;
    const parentForkByDate = snapToBranchCommitX(declaredParent, forkDate);
    const mainForkByDate = snapToMainCommitX(forkDate);
    if (mainForkByDate != null && parentForkByDate == null) {
      return defaultBranch;
    }
    if (mainForkByDate != null && parentForkByDate != null) {
      const mainDelta = Math.abs(mainForkByDate - forkX);
      const parentDelta = Math.abs(parentForkByDate - forkX);
      if (mainDelta + GRID_EVENT_GAP * 0.15 < parentDelta) {
        return defaultBranch;
      }
    }
    const parentTiming = branchTimingWithVisited(declaredParent, new Set<string>());
    // If a branch forks before the declared parent even exists on-screen,
    // anchor from main to avoid detached connector starts.
    if (forkX < parentTiming.forkTimeX - GRID_EVENT_GAP * 0.5) {
      return defaultBranch;
    }

    return declaredParent;
  }

  function branchStartX(b: Branch): number {
    const startParent = resolveBranchStartParentName(b);
    if (startParent === defaultBranch) return mainX;
    const parentX = laneXByBranch.get(startParent);
    return typeof parentX === 'number' ? parentX : mainX;
  }

  let hasCommitCenterCanonicalBounds = false;
  let commitCenterCanonicalMinX = 0;
  let commitCenterCanonicalMaxX = 0;
  let commitCenterCanonicalMinY = 0;
  let commitCenterCanonicalMaxY = 0;

  function includeCommitCenterCanonical(x: number, y: number) {
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;
    if (!hasCommitCenterCanonicalBounds) {
      hasCommitCenterCanonicalBounds = true;
      commitCenterCanonicalMinX = x;
      commitCenterCanonicalMaxX = x;
      commitCenterCanonicalMinY = y;
      commitCenterCanonicalMaxY = y;
      return;
    }
    commitCenterCanonicalMinX = Math.min(commitCenterCanonicalMinX, x);
    commitCenterCanonicalMaxX = Math.max(commitCenterCanonicalMaxX, x);
    commitCenterCanonicalMinY = Math.min(commitCenterCanonicalMinY, y);
    commitCenterCanonicalMaxY = Math.max(commitCenterCanonicalMaxY, y);
  }

  const seenMainCommitShas = new Set<string>();
  for (const commit of sortedDirectCommits) {
    const timeCoordX = directXByFullSha.get(commit.fullSha) ?? timeToX(commit.date);
    includeCommitCenterCanonical(mainX, timeCoordToY(timeCoordX));
    seenMainCommitShas.add(commit.fullSha);
  }
  if (reserveMergeRows) {
    for (const node of sortedNodes) {
      if (seenMainCommitShas.has(node.fullSha)) continue;
      const timeCoordX = nodeXByFullSha.get(node.fullSha) ?? timeToX(node.date);
      includeCommitCenterCanonical(mainX, timeCoordToY(timeCoordX));
    }
  }
  for (const branch of activeBranches) {
    const lanePosX = laneXByBranch.get(branch.name);
    if (typeof lanePosX !== 'number' || !Number.isFinite(lanePosX)) continue;
    const commitTipTimeX = branchTipX(branch);
    const uniqueAhead = branchAheadCount(branch);
    const previews = renderableBranchPreviews(branch);
    const minCommitTimeX = branchForkX(branch);
    const maxCommitTimeX = Math.max(minCommitTimeX, commitTipTimeX);
    includeCommitCenterCanonical(lanePosX, timeCoordToY(minCommitTimeX));
    includeCommitCenterCanonical(lanePosX, timeCoordToY(maxCommitTimeX));
    if (previews.length > 0) {
      for (const preview of previews) {
        const timeCoordX =
          gridXForBranchSha(branch.name, preview.fullSha) ?? timeToX(preview.date);
        includeCommitCenterCanonical(lanePosX, timeCoordToY(timeCoordX));
      }
      continue;
    }
    const syntheticCount = Math.max(0, uniqueAhead);
    for (let slot = 0; slot < syntheticCount; slot += 1) {
      const timeCoordX =
        gridXForBranchSlot(branch.name, slot) ?? timeToX(branch.lastCommitDate);
      includeCommitCenterCanonical(lanePosX, timeCoordToY(timeCoordX));
    }
  }

  // Lane geometry (used for grid width — see below).
  const laneXsForBounds = [mainX, ...Array.from(laneXByBranch.values())];
  const minLaneXForBounds = Math.min(...laneXsForBounds);
  const maxLaneXForBounds = Math.max(...laneXsForBounds);
  const gridHalfWForBounds = GRID_LANE_WIDTH / 2;
  /** Right edge of the lane column strip (grid columns + row lines should match this). */
  const gridLaneExtentMaxX = maxLaneXForBounds + gridHalfWForBounds;

  // Left edge can be < 0 when mainX is 0: lane cells extend to minLaneX - laneHalf. Do not
  // clamp to 0 or the clip slices the left half of the left column (same idea as Y below).
  const graphExtentMinX = Math.min(timelineMinX, minLaneXForBounds - gridHalfWForBounds);

  // Use `tightGridXSpan` for SVG width so row lines match lane columns.
  const tightGridXSpan = gridLaneExtentMaxX - graphExtentMinX;
  const logicalSvgWidth = tightGridXSpan + 2 * svgContentPadding + rightPad + SVG_LAYOUT_TAIL_X;

  const logicalSvgHeight = logicalTimelineHeight;
  const contentSvgWidth = isHorizontal
    ? Math.max(logicalSvgHeight, horizontalProjectionMirrorX)
    : logicalSvgWidth;
  const contentSvgHeight = isHorizontal ? logicalSvgWidth : logicalSvgHeight;
  let svgWidth = contentSvgWidth;
  let svgHeight = contentSvgHeight;
  if (
    MATCH_SVG_ASPECT_TO_VIEWPORT &&
    layoutViewportW > 0 &&
    layoutViewportH > 0 &&
    contentSvgWidth > 0 &&
    contentSvgHeight > 0
  ) {
    const winAr = layoutViewportW / layoutViewportH;
    const contentAr = contentSvgWidth / contentSvgHeight;
    if (contentAr > winAr) {
      svgHeight = contentSvgWidth / winAr;
    } else {
      svgWidth = contentSvgHeight * winAr;
    }
  }
  const canvasWidth = svgWidth + CANVAS_PAD_X * 2;
  const canvasHeight = svgHeight + CANVAS_PAD_Y * 2;
  const graphOffsetX = (canvasWidth - svgWidth) / 2;
  const graphOffsetY = (canvasHeight - svgHeight) / 2;
  graphOffsetRef.current = { x: graphOffsetX, y: graphOffsetY };
  cameraBoundsRef.current = {
    viewportW: viewportSize.width,
    viewportH: viewportSize.height,
    viewportTopInset: mapTopInset,
    canvasWidth,
    canvasHeight,
    svgWidth,
    svgHeight,
    graphOffsetX,
    graphOffsetY,
    isHorizontal,
  };

  // Center finite graph content inside the SVG viewBox so empty padding is even on all sides.
  const yPadSymmetric = 0;

  let minXWorldForBounds: number;
  let maxXWorldForBounds: number;
  let minYWorldForBounds: number;
  let maxYWorldForBounds: number;

  {
    const tightMinX = graphExtentMinX - GRID_VIEW_PAD_X;
    const tightMaxX = gridLaneExtentMaxX + GRID_VIEW_PAD_X;
    minXWorldForBounds = tightMinX - svgContentPadding;
    maxXWorldForBounds = tightMaxX + svgContentPadding;
    if (gridRowYExtent) {
      minYWorldForBounds = gridRowYExtent.minY - yPadSymmetric - svgContentPadding;
      maxYWorldForBounds = gridRowYExtent.maxY + yPadSymmetric + svgContentPadding;
    } else {
      minYWorldForBounds = Math.max(0, mainEndY - yPadSymmetric) - svgContentPadding;
      maxYWorldForBounds = Math.min(logicalSvgHeight, mainStartY + yPadSymmetric) + svgContentPadding;
    }
  }
  const projectedContentBounds = isHorizontal
    ? {
      minX: horizontalProjectionMirrorX - maxYWorldForBounds,
      maxX: horizontalProjectionMirrorX - minYWorldForBounds,
      minY: minXWorldForBounds,
      maxY: maxXWorldForBounds,
    }
    : {
      minX: minXWorldForBounds,
      maxX: maxXWorldForBounds,
      minY: minYWorldForBounds,
      maxY: maxYWorldForBounds,
    };
  const contentBBoxW = projectedContentBounds.maxX - projectedContentBounds.minX;
  const contentBBoxH = projectedContentBounds.maxY - projectedContentBounds.minY;
  const graphContentTranslateX =
    contentBBoxW > 0 && Number.isFinite(contentBBoxW)
      ? (svgWidth - contentBBoxW) / 2 - projectedContentBounds.minX
      : 0;
  const graphContentTranslateY =
    contentBBoxH > 0 && Number.isFinite(contentBBoxH)
      ? (svgHeight - contentBBoxH) / 2 - projectedContentBounds.minY
      : 0;
  selectionProjectionRef.current = {
    graphOffsetX,
    graphOffsetY,
    graphContentTranslateX,
    graphContentTranslateY,
    isHorizontal,
  };
  // Compute which branches can accept a "move back" drop: any branch sharing the
  // current HEAD sha (other than the currently checked-out branch itself).
  {
    const currentHeadSha = checkedOutRef?.headSha ?? null;
    const currentBranch = checkedOutRef?.branchName ?? null;
    if (currentHeadSha && currentBranch && checkedOutRef?.hasUncommittedChanges) {
      const candidates = new Set<string>();
      for (const b of activeBranches) {
        if (b.name !== currentBranch && b.headSha === currentHeadSha) candidates.add(b.name);
      }
      const mainHeadSha = sortedDirectCommits[sortedDirectCommits.length - 1]?.fullSha ?? null;
      if (mainHeadSha && mainHeadSha === currentHeadSha && defaultBranch !== currentBranch) {
        candidates.add(defaultBranch);
      }
      moveBackCandidateBranchNamesRef.current = candidates;
    } else {
      moveBackCandidateBranchNamesRef.current = new Set();
    }
  }
  const projectedCommitCenterBounds = hasCommitCenterCanonicalBounds
    ? (isHorizontal
      ? {
        minX: horizontalProjectionMirrorX - commitCenterCanonicalMaxY,
        maxX: horizontalProjectionMirrorX - commitCenterCanonicalMinY,
        minY: commitCenterCanonicalMinX,
        maxY: commitCenterCanonicalMaxX,
      }
      : {
        minX: commitCenterCanonicalMinX,
        maxX: commitCenterCanonicalMaxX,
        minY: commitCenterCanonicalMinY,
        maxY: commitCenterCanonicalMaxY,
      })
    : null;
  finiteWorldBoundsRef.current = {
    minX: projectedContentBounds.minX + graphContentTranslateX,
    maxX: projectedContentBounds.maxX + graphContentTranslateX,
    minY: projectedContentBounds.minY + graphContentTranslateY,
    maxY: projectedContentBounds.maxY + graphContentTranslateY,
    measured: true,
  };
  centerableCommitBoundsRef.current = projectedCommitCenterBounds
    ? {
      minX: projectedCommitCenterBounds.minX + graphContentTranslateX,
      maxX: projectedCommitCenterBounds.maxX + graphContentTranslateX,
      minY: projectedCommitCenterBounds.minY + graphContentTranslateY,
      maxY: projectedCommitCenterBounds.maxY + graphContentTranslateY,
      measured: true,
    }
    : {
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      measured: false,
    };
  const centerableCommitBoundsDep = projectedCommitCenterBounds
    ? `${projectedCommitCenterBounds.minX}:${projectedCommitCenterBounds.maxX}:${projectedCommitCenterBounds.minY}:${projectedCommitCenterBounds.maxY}`
    : 'none';

  useEffect(() => {
    if (viewportSize.width <= 0 || viewportSize.height <= 0) return;
    syncUiState(true, true);
  }, [
    viewportSize.width,
    viewportSize.height,
    canvasWidth,
    canvasHeight,
    svgWidth,
    svgHeight,
    graphOffsetX,
    graphOffsetY,
    isHorizontal,
    graphContentTranslateX,
    graphContentTranslateY,
    mapTopInset,
    centerableCommitBoundsDep,
  ]);

  useLayoutEffect(() => {
    const previous = graphProjectionRef.current;
    const next = {
      graphOffsetX,
      graphOffsetY,
      graphContentTranslateX,
      graphContentTranslateY,
      initialized: true,
    };
    if (!previous.initialized) {
      graphProjectionRef.current = next;
      return;
    }
    if (!hasUserMovedCameraRef.current) {
      graphProjectionRef.current = next;
      return;
    }

    const deltaGraphOffsetX = next.graphOffsetX - previous.graphOffsetX;
    const deltaGraphOffsetY = next.graphOffsetY - previous.graphOffsetY;
    const cameraScale = getCameraScale(zoomRef.current, isHorizontal);
    const deltaTranslatePxX = (next.graphContentTranslateX - previous.graphContentTranslateX) * cameraScale.x;
    const deltaTranslatePxY = (next.graphContentTranslateY - previous.graphContentTranslateY) * cameraScale.y;
    const correctionX = deltaGraphOffsetX + deltaTranslatePxX;
    const correctionY = deltaGraphOffsetY + deltaTranslatePxY;
    graphProjectionRef.current = next;

    if (Math.abs(correctionX) < 0.01 && Math.abs(correctionY) < 0.01) return;
    const stabilizedPan = clampPan(
      {
        x: panRef.current.x - correctionX,
        y: panRef.current.y - correctionY,
      },
      zoomRef.current,
      'hard'
    );
    if (
      Math.abs(stabilizedPan.x - panRef.current.x) < 0.01 &&
      Math.abs(stabilizedPan.y - panRef.current.y) < 0.01
    ) return;
    applyCamera(stabilizedPan, zoomRef.current, true, true);
  }, [
    graphOffsetX,
    graphOffsetY,
    graphContentTranslateX,
    graphContentTranslateY,
    isHorizontal,
  ]);

  const checkedOutBranchName = checkedOutRef?.branchName ?? null;
  const checkedOutHeadSha = checkedOutRef?.headSha ?? null;
  const checkedOutParentSha = checkedOutRef?.parentSha ?? null;
  const checkedOutHasUncommittedChanges = checkedOutRef?.hasUncommittedChanges ?? false;
  const checkedOutIsDetached = !checkedOutBranchName;

  function branchPreviewContainsSha(branchName: string, sha: string): boolean {
    const previews = branchCommitPreviews[branchName] ?? [];
    return previews.some((commit) =>
      commit.fullSha === sha ||
      commit.sha === sha ||
      commit.fullSha.startsWith(sha) ||
      sha.startsWith(commit.fullSha) ||
      commit.sha.startsWith(sha) ||
      sha.startsWith(commit.sha)
    );
  }

  function isOtherWorktree(wt: WorktreeInfo): boolean {
    return isOtherWorktreeInList(wt, currentRepoPath);
  }

  function otherWorktreeMatchesBranchCommit(
    branchName: string,
    commitFullSha: string,
    commitSha: string,
  ): boolean {
    return otherWorktreeMatchesBranchCommitInList({
      branchName,
      commitFullSha,
      commitSha,
      worktrees,
      currentRepoPath,
      branchPreviewContainsSha,
      branchByName,
      defaultBranch,
      sortedDirectCommits,
    });
  }

  function findOtherWorktreeForCommit(
    branchName: string,
    commitFullSha: string,
    commitSha: string,
  ): WorktreeInfo | null {
    return findOtherWorktreeForCommitInList({
      branchName,
      commitFullSha,
      commitSha,
      worktrees,
      currentRepoPath,
      branchPreviewContainsSha,
      branchByName,
      defaultBranch,
      sortedDirectCommits,
    });
  }

  /** Other worktree has this branch checked out (same branch ref cannot be checked out twice). */
  function findWorktreeWithBranchCheckedOut(branchName: string): WorktreeInfo | null {
    return findWorktreeWithBranchCheckedOutInList(branchName, worktrees, currentRepoPath);
  }

  /** Match by HEAD sha only (when click handlers omit branchName). */
  function findOtherWorktreeByHeadSha(commitFullSha: string, commitShortSha: string): WorktreeInfo | null {
    return findOtherWorktreeByHeadShaInList(commitFullSha, commitShortSha, worktrees, currentRepoPath);
  }

  function mergeCheckoutAccent(
    isPrimaryCheckout: boolean,
    branchName: string,
    fullSha: string,
    shortSha: string,
  ): CheckoutAccent {
    return mergeCheckoutAccentInList({
      isPrimaryCheckout,
      branchName,
      fullSha,
      shortSha,
      worktrees,
      currentRepoPath,
      branchPreviewContainsSha,
      branchByName,
      defaultBranch,
      sortedDirectCommits,
    });
  }

  function isSelectedLaneBranch(branch: Branch): boolean {
    return isSelectedLaneBranchInList({
      branch,
      checkedOutBranchName,
      checkedOutHeadSha,
      branchPreviewContainsSha,
    });
  }

  function checkedOutPointForSha(sha: string): { x: number; y: number } | null {
    const directX = directXByFullSha.get(sha);
    if (typeof directX === 'number') {
      return { x: mainX, y: timeCoordToY(directX) };
    }

    const mergeX = nodeXByFullSha.get(sha);
    if (typeof mergeX === 'number') {
      return { x: mainX, y: timeCoordToY(mergeX) };
    }

    const branchesByShaAll = activeBranches.filter((b) => b.headSha === sha);
    const preferredHeadBranches = branchesByShaAll.filter((b) => branchAheadCount(b) > 0);
    const branchesBySha = preferredHeadBranches.length > 0
      ? preferredHeadBranches
      : branchesByShaAll;
    if (branchesBySha.length > 0) {
      const branchBySha = (() => {
        if (branchesBySha.length === 1) return branchesBySha[0];
        if (checkedOutParentSha) {
          const byParent = branchesBySha.find((b) =>
            branchPreviewContainsSha(b.name, checkedOutParentSha)
          );
          if (byParent) return byParent;
        }
        return [...branchesBySha].sort((a, b) => {
          const laneAX = laneXByBranch.get(a.name) ?? mainX;
          const laneBX = laneXByBranch.get(b.name) ?? mainX;
          if (laneAX !== laneBX) return laneAX - laneBX;
          return a.name.localeCompare(b.name);
        })[0];
      })();
      return {
        x: laneXByBranch.get(branchBySha.name) ?? mainX,
        y: timeCoordToY(branchTipX(branchBySha)),
      };
    }

    return null;
  }

  const checkedOutIndicatorLocal = (() => {
    if (checkedOutBranchName === defaultBranch) {
      if (checkedOutHeadSha) {
        const headPoint = checkedOutPointForSha(checkedOutHeadSha);
        if (headPoint) return headPoint;
      }
      return { x: mainX, y: mainActiveEndY };
    }

    if (checkedOutBranchName && checkedOutBranchName !== defaultBranch) {
      const branch = branchByName.get(checkedOutBranchName);
      if (branch) {
        return {
          x: laneXByBranch.get(branch.name) ?? mainX,
          y: timeCoordToY(branchTipX(branch)),
        };
      }
    }

    if (checkedOutHeadSha) {
      const headPoint = checkedOutPointForSha(checkedOutHeadSha);
      if (headPoint) return headPoint;

      if (checkedOutIsDetached && checkedOutParentSha) {
        const parentPoint = checkedOutPointForSha(checkedOutParentSha);
        if (parentPoint) return parentPoint;
      }
    }

    return null;
  })();
  const checkedOutMatchesKnownBranchTip = (() => {
    const checkedOutAnchorSha = checkedOutHeadSha ?? checkedOutParentSha ?? null;
    if (!checkedOutIndicatorLocal) return false;
    const epsilon = 0.5;
    const isMainTipAnchor =
      Math.abs(checkedOutIndicatorLocal.x - mainX) <= epsilon &&
      Math.abs(checkedOutIndicatorLocal.y - mainActiveEndY) <= epsilon;
    if (isMainTipAnchor) return true;

    for (const branch of activeBranches) {
      const branchTipPoint = {
        x: laneXByBranch.get(branch.name) ?? mainX,
        y: timeCoordToY(branchTipX(branch)),
      };
      const samePoint =
        Math.abs(checkedOutIndicatorLocal.x - branchTipPoint.x) <= epsilon &&
        Math.abs(checkedOutIndicatorLocal.y - branchTipPoint.y) <= epsilon;
      if (samePoint) return true;
    }

    // Keep a SHA fallback for cases where coordinates are unavailable/ambiguous.
    if (!checkedOutAnchorSha) return false;
    return (
      (latestMainDirectCommitSha ? shaMatchesGitRef(latestMainDirectCommitSha, checkedOutAnchorSha) : false) ||
      activeBranches.some((branch) => shaMatchesGitRef(branch.headSha, checkedOutAnchorSha))
    );
  })();
  const shouldOffsetDetachedUncommittedIndicator =
    checkedOutHasUncommittedChanges &&
    checkedOutIsDetached &&
    !checkedOutMatchesKnownBranchTip;

  const checkedOutDisplayIndicatorLocal = checkedOutIndicatorLocal
    ? {
      x: (() => {
        if (!shouldOffsetDetachedUncommittedIndicator) {
          return checkedOutIndicatorLocal.x;
        }
        const lanePositions = Array.from(
          new Set<number>([mainX, ...Array.from(laneXByBranch.values())])
        ).sort((a, b) => a - b);
        if (lanePositions.length <= 1) {
          return mainX + laneWidth + 40;
        }

        let nearestLane = lanePositions[0];
        let nearestDistance = Math.abs(checkedOutIndicatorLocal.x - nearestLane);
        for (const lanePos of lanePositions.slice(1)) {
          const distance = Math.abs(checkedOutIndicatorLocal.x - lanePos);
          if (distance < nearestDistance) {
            nearestLane = lanePos;
            nearestDistance = distance;
          }
        }

        const nextLane = lanePositions.find((lanePos) => lanePos > nearestLane + 0.5);
        if (typeof nextLane === 'number') return nextLane;
        return nearestLane + laneWidth;
      })(),
      y: checkedOutIndicatorLocal.y + (
        shouldOffsetDetachedUncommittedIndicator
          ? -CHECKED_OUT_AHEAD_OFFSET_WORLD
          : 0
      ),
    }
    : null;
  const checkedOutAnchorTarget = checkedOutDisplayIndicatorLocal ?? checkedOutIndicatorLocal;
  const checkedOutAnchor = checkedOutAnchorTarget
    ? {
      x: projectPoint(checkedOutAnchorTarget.x, checkedOutAnchorTarget.y).x,
      y: projectPoint(checkedOutAnchorTarget.x, checkedOutAnchorTarget.y).y,
    }
    : null;

  // Center the checked-out commit in the viewport when data first appears.
  useEffect(() => {
    if (!hasTimelineSeedData) {
      hasAutoCenteredRef.current = false;
      autoCenterSignatureRef.current = null;
      hasUserMovedCameraRef.current = false;
      pendingOrientationAutoCenterRef.current = false;
      clearTimelineRevealTimer();
      setTimelineRevealPhase('hidden');
      setTimelineRevealReady(false);
      setHasInitialRevealDone(false);
      return;
    }
    const forceOrientationAutoCenter = pendingOrientationAutoCenterRef.current;
    if (!forceOrientationAutoCenter && hasUserMovedCameraRef.current) return;
    if (viewportSize.width <= 0 || viewportSize.height <= 0) return;
    if (!hasInitialRevealDone && timelineRevealPhase === 'fading') return;
    // During orientation switches and hydration there are brief windows where
    // checkout anchor resolution lags behind layout. Do not block reveal/camera
    // on that transient state; center using a fallback first, then this effect
    // will recenter again once the real checkout anchor resolves.
    const zoomValue = zoomRef.current;
    const fallbackCenter = {
      x: svgWidth / 2,
      y: svgHeight / 2,
    };
    const target = checkedOutAnchor
      ? {
        x: checkedOutAnchor.x + graphContentTranslateX,
        y: checkedOutAnchor.y + graphContentTranslateY,
      }
      : fallbackCenter;
    const signature = [
      Math.round(target.x * 10) / 10,
      Math.round(target.y * 10) / 10,
      Math.round(viewportSize.width),
      Math.round(viewportSize.height),
      Math.round(mapTopInset),
      Math.round(zoomValue * 1000) / 1000,
    ].join('|');
    if (hasAutoCenteredRef.current && autoCenterSignatureRef.current === signature) return;
    const scale = getCameraScale(zoomValue, isHorizontal);
    const visibleCenterY = (mapTopInset + viewportSize.height) / 2;
    const nextPan = clampPan(
      {
        x: viewportSize.width / 2 - graphOffsetX - target.x * scale.x,
        y: visibleCenterY - graphOffsetY - target.y * scale.y,
      },
      zoomValue,
      'hard'
    );
    if (forceOrientationAutoCenter) {
      if (orientationAutoCenterRafRef.current !== null) {
        cancelAnimationFrame(orientationAutoCenterRafRef.current);
      }
      orientationAutoCenterRafRef.current = requestAnimationFrame(() => {
        orientationAutoCenterRafRef.current = null;
        applyCamera(nextPan, zoomValue, true);
      });
    } else {
      applyCamera(nextPan, zoomValue, true);
    }
    hasAutoCenteredRef.current = true;
    autoCenterSignatureRef.current = signature;
    pendingOrientationAutoCenterRef.current = false;
    const revealAlreadyScheduled =
      timelineRevealStartTimeoutRef.current !== null || timelineRevealDoneTimeoutRef.current !== null;
    if (!hasInitialRevealDone && timelineRevealPhase === 'hidden' && !revealAlreadyScheduled) {
      scheduleTimelineReveal();
    }
  }, [
    hasTimelineSeedData,
    hasInitialRevealDone,
    timelineRevealPhase,
    viewportSize.width,
    viewportSize.height,
    graphOffsetX,
    graphOffsetY,
    svgWidth,
    svgHeight,
    checkedOutAnchor?.x,
    checkedOutAnchor?.y,
    checkedOutRef?.branchName,
    checkedOutRef?.headSha,
    checkedOutRef?.parentSha,
    checkedOutRef?.hasUncommittedChanges,
    graphContentTranslateX,
    graphContentTranslateY,
    mapTopInset,
  ]);

  // Scroll timeline to the requested branch. Set flashingName briefly so the arc
  // starts bright red, then CSS stroke transition fades it to the settled lighter red.
  useEffect(() => {
    if (!scrollRequest) return;
    if (isHorizontal ? viewportSize.width <= 0 : viewportSize.height <= 0) return;
    markUserMovedCamera();
    const { branch } = scrollRequest;
    const focusTime = branch.divergedFromDate
      ? timeToX(branch.divergedFromDate)
      : timeToX(branch.lastCommitDate);
    const focusLaneX = laneXByBranch.get(branch.name) ?? mainX;
    const projected = projectPoint(focusLaneX, timeCoordToY(focusTime));
    const viewportSpan = isHorizontal ? layoutViewportW : layoutViewportH;
    const axisGraphOffset = isHorizontal ? graphOffsetX : graphOffsetY;
    const scalePair = getCameraScale(zoomRef.current, isHorizontal);
    const axisScale = Math.max(isHorizontal ? scalePair.x : scalePair.y, 0.0001);
    const axisSvgSize = isHorizontal ? svgWidth : svgHeight;
    const visibleWorldSpan = viewportSpan / axisScale;
    const axisCoord = isHorizontal
      ? projected.x + graphContentTranslateX
      : projected.y + graphContentTranslateY;
    const targetWorldStart = Math.max(
      0,
      Math.min(Math.max(0, axisSvgSize - visibleWorldSpan), axisCoord - visibleWorldSpan / 2)
    );
    const clampedTargetPan = clampPan(
      isHorizontal
        ? { x: -axisGraphOffset - targetWorldStart * axisScale, y: targetPanRef.current.y }
        : { x: targetPanRef.current.x, y: -axisGraphOffset - targetWorldStart * axisScale },
      zoomRef.current,
      'hard'
    );

    focusScrollCancelRef.current?.();
    focusScrollCancelRef.current = smoothValueTo(
      isHorizontal ? panRef.current.x : panRef.current.y,
      isHorizontal ? clampedTargetPan.x : clampedTargetPan.y,
      600,
      (value) => {
        const next = clampPan(
          isHorizontal
            ? { x: value, y: targetPanRef.current.y }
            : { x: targetPanRef.current.x, y: value },
          zoomRef.current,
          'hard'
        );
        applyCamera(next, zoomRef.current);
      }
    );
    setFlashingName(branch.name);
    const t = setTimeout(() => setFlashingName(null), 700);
    return () => {
      clearTimeout(t);
      focusScrollCancelRef.current?.();
      focusScrollCancelRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    scrollRequest,
    viewportSize.width,
    viewportSize.height,
    graphOffsetX,
    graphOffsetY,
    canvasWidth,
    canvasHeight,
    isHorizontal,
    graphContentTranslateX,
    graphContentTranslateY,
    mapTopInset,
  ]);

  useEffect(() => {
    return () => {
      clearTimelineRevealTimer();
    };
  }, []);

  useEffect(() => {
    return () => {
      for (const frameId of clumpCleanupTimersRef.current.values()) {
        window.cancelAnimationFrame(frameId);
      }
      clumpCleanupTimersRef.current.clear();
    };
  }, []);

  const worldUnitsPerScreenPx = 1 / Math.max(layerCameraScale.x, 0.0001);
  const worldPx = (px: number) => px * worldUnitsPerScreenPx;
  const NODE_FRAME_LABEL_FONT_PX = 12;
  const NODE_FRAME_LABEL_TOP_GAP_PX = 2.5;
  const NODE_FRAME_LABEL_LEFT_INSET_PX = 0;
  const NODE_FRAME_LABEL_RIGHT_INSET_PX = 0;
  const NODE_FRAME_LABEL_PAIR_GAP_PX = 2;
  const NODE_FRAME_MESSAGE_INSET_X_PX = 8;
  const NODE_FRAME_MESSAGE_INSET_TOP_PX = 6.5;
  const NODE_FRAME_MESSAGE_INSET_BOTTOM_PX = 8;
  const NODE_FRAME_PADDING_ZOOM_GAIN_MAX = 3.0;
  const NODE_FRAME_MESSAGE_FONT_PX = 12;
  const NODE_FRAME_FOOTER_META_PAIR_GAP_PX = 8;
  const NODE_FRAME_FOOTER_META_ZOOM_MIN = 3.5;
  const NODE_FRAME_MESSAGE_RENDER_OFFSET_Y_PX = 0;
  /** Branch name / sha / stack count row above each node — slightly darker than default rect stroke for legibility. */
  const NODE_FRAME_BRANCH_TITLE_COLOR = '#B3B3B3';
  /** Commit message inside the rectangle keeps the legacy neutral when idle. */
  const NODE_FRAME_INNER_TEXT_COLOR = '#7C736D';
  const NODE_FRAME_LABEL_WEIGHT = 400;
  const nodeFrameLabelFontSize = worldPx(NODE_FRAME_LABEL_FONT_PX);
  const nodeFrameLabelGap = worldPx(NODE_FRAME_LABEL_TOP_GAP_PX);
  const nodeFrameLabelInsetX = worldPx(NODE_FRAME_LABEL_LEFT_INSET_PX);
  const nodeFrameLabelRightInsetX = worldPx(NODE_FRAME_LABEL_RIGHT_INSET_PX);
  const nodeFrameLabelPairGap = worldPx(NODE_FRAME_LABEL_PAIR_GAP_PX);
  const nodeFramePaddingZoomProgress = clamp01(
    (zoom - ZOOM_DEFAULT) / Math.max(1, ZOOM_MAX - ZOOM_DEFAULT),
  );
  const nodeFramePaddingZoomFactor = 1 + nodeFramePaddingZoomProgress * NODE_FRAME_PADDING_ZOOM_GAIN_MAX;
  const nodeFrameMessageInsetX = worldPx(NODE_FRAME_MESSAGE_INSET_X_PX * nodeFramePaddingZoomFactor);
  const nodeFrameMessageInsetTop = worldPx(NODE_FRAME_MESSAGE_INSET_TOP_PX * nodeFramePaddingZoomFactor);
  const nodeFrameMessageInsetBottom = worldPx(
    NODE_FRAME_MESSAGE_INSET_BOTTOM_PX * nodeFramePaddingZoomFactor,
  );
  const nodeFrameMessageFontSize = worldPx(NODE_FRAME_MESSAGE_FONT_PX);
  const nodeFrameFooterMetaPairGap = worldPx(NODE_FRAME_FOOTER_META_PAIR_GAP_PX);
  const nodeFrameMessageRenderOffsetY = worldPx(NODE_FRAME_MESSAGE_RENDER_OFFSET_Y_PX);
  const nodeFrameCollapseIconSize = worldPx(12);
  const shortShaLabel = (sha?: string | null): string => {
    if (!sha) return '-------';
    if (sha === 'WORKING_TREE') return 'Uncommited Changes';
    if (sha.startsWith('STASH:')) {
      const n = parseInt(sha.slice('STASH:'.length), 10);
      return Number.isFinite(n) ? `Stash ${n + 1}` : 'Stash';
    }
    // Only abbreviate real commit SHAs. Keep human-readable synthetic labels intact.
    return /^[0-9a-f]{7,40}$/i.test(sha) ? sha.slice(0, 7) : sha;
  };
  const stackCountLabel = (count: number): string => `x${clumpCountLabel(count)}`;
  const trimTextToWidth = (text: string, maxWidth: number, fontSize = nodeFrameLabelFontSize): string => {
    return trimTextToWidthCore({
      text,
      maxWidth,
      fontSize,
      estimateSvgTextWidth,
    });
  };
  const fitNodeFrameTitle = (
    branchName: string,
    sha: string | undefined | null,
    rectWidth: number,
    rightText?: string,
    reserveIconWidth = false,
    includeBranchForUncommitted = branchName !== defaultBranch,
  ): string => {
    return fitNodeFrameTitleCore({
      branchName,
      sha,
      rectWidth,
      rightText,
      reserveIconWidth,
      includeBranchForUncommitted,
      defaultBranch,
      shortShaLabel,
      nodeFrameLabelFontSize,
      nodeFrameLabelPairGap,
      nodeFrameCollapseIconSize,
      nodeFrameLabelInsetX,
      nodeFrameLabelRightInsetX,
      estimateSvgTextWidth,
      trimTextToWidth,
    });
  };
  const wrapNodeFrameMessage = (
    message: string | undefined | null,
    rectSize: ReturnType<typeof commitRectSize>,
    strokeWidth: number,
  ): { lines: string[]; fontSize: number; lineHeight: number } => {
    return wrapNodeFrameMessageCore({
      message,
      rectSize,
      strokeWidth,
      nodeFrameMessageInsetX,
      nodeFrameMessageInsetTop,
      nodeFrameMessageInsetBottom,
      nodeFrameMessageFontSize,
      branchMapSvgFontFamily: BRANCH_MAP_SVG_FONT_FAMILY,
      trimTextToWidth,
      estimateSvgTextWidth,
      getPreparedPretext,
    });
  };
  const scaledNodeSize = NODE_SIZE;
  const nodeRectSize = (_count: number) => commitRectSize(scaledNodeSize, 0);
  // Keep interaction hit areas consistent in screen pixels across zoom levels.
  const scaledHoverHitSize = worldPx(20);
  // Branch hover lines use vector-effect: non-scaling-stroke, so this should
  // stay in screen px (not inverse-scaled by zoom) to avoid oversized hitboxes when zoomed out.
  const branchHitStrokeWidth = BRANCH_HIT_STROKE_WIDTH;
  const drawPathArcClass = (!ENABLE_TIMELINE_INTRO_ANIMATIONS || animationsLocked) ? undefined : 'draw-path-arc';
  const drawPathMainClass = drawPathArcClass;
  const fadeInInfoClass = (!ENABLE_TIMELINE_INTRO_ANIMATIONS || animationsLocked) ? undefined : 'fade-in-info';
  const mainTimelineOpacity = 1;
  const timelineCanvasVisible = timelineRevealPhase !== 'hidden';
  const holdTimelineForInitialCenter =
    isLoading || (!hasInitialRevealDone && hasTimelineSeedData && timelineRevealPhase !== 'done' && !hasUserMovedCameraRef.current);

  function resolveClumpPhase(expandedState?: ExpandedClumpState): {
    isExpanded: boolean;
    phase: ExpandedClumpState['phase'];
    phaseEased: number;
  } {
    return resolveClumpPhaseCore(expandedState);
  }
  function resolveClusterMotion(
    clusterKey: string,
    defaultAnchor: { x: number; y: number },
    memberKeys: string[],
    canExpandCluster = true,
  ): {
    anchorX: number;
    anchorY: number;
    isExpanded: boolean;
    phase: ExpandedClumpState['phase'];
    phaseEased: number;
  } {
    return resolveClusterMotionCore({
      clusterKey,
      defaultAnchor,
      memberKeys,
      canExpandCluster,
      expandedState: canExpandCluster ? expandedClumps.get(clusterKey) : undefined,
      resolveAnimatedClumpAnchor,
    });
  }
  function interpolateExpandedEntryPose(
    anchor: { x: number; y: number },
    entry: { x: number; y: number },
    phase: ExpandedClumpState['phase'],
    phaseEased: number,
  ): { x: number; y: number; opacity: number; scale: number } {
    return interpolateExpandedEntryPoseCore({
      anchor,
      entry,
      phase,
      phaseEased,
    });
  }
  const getNodeStrokeColor = (
    nodeKey: string,
    baseStroke = CANVAS_NODE_STROKE,
    checkoutAccent: CheckoutAccent = 'none',
    isUserSelected = false,
    accentOutlineOnly = false,
  ) => {
    return getNodeStrokeColorCore({
      hoveredNodeStrokeKey,
      nodeKey,
      baseStroke,
      checkoutAccent,
      isUserSelected,
      accentOutlineOnly,
      colors: {
        userSelectionStroke: USER_SELECTION_STROKE,
        neutralHoverStroke: CANVAS_NEUTRAL_GRAY_HOVER,
        checkedOutHoverStroke: CHECKED_OUT_SELECTION_HOVER_STROKE,
        checkedOutStroke: CHECKED_OUT_SELECTION_STROKE,
        worktreeHoverStroke: WORKTREE_OTHER_HOVER_STROKE,
        worktreeStroke: WORKTREE_OTHER_STROKE,
      },
    });
  };
  const getNodeFillColor = (
    nodeKey: string,
    baseFill = CANVAS_NODE_FILL,
    checkoutAccent: CheckoutAccent = 'none',
    isUserSelected = false,
    accentOutlineOnly = false,
  ) => {
    return getNodeFillColorCore({
      hoveredNodeStrokeKey,
      nodeKey,
      baseFill,
      checkoutAccent,
      isUserSelected,
      accentOutlineOnly,
      colors: {
        userSelectionFill: USER_SELECTION_FILL,
        hoverFill: HOVER_NODE_FILL,
        checkedOutFill: CHECKED_OUT_SELECTION_FILL,
        worktreeFill: WORKTREE_OTHER_FILL,
        unpushedFill: CANVAS_UNPUSHED_NODE_FILL_HEX,
      },
      unpushedFillAliases: [
        CANVAS_UNPUSHED_NODE_FILL,
        CANVAS_UNPUSHED_NODE_FILL_HEX.toLowerCase(),
      ],
    });
  };
  const getNodeFrameTitleColor = (
    nodeKey: string,
    checkoutAccent: CheckoutAccent = 'none',
    isUserSelected = false,
    isUncommitted = false,
    isStash = false,
    accentOutlineOnly = false,
  ) => {
    return getNodeFrameTitleColorCore({
      hoveredNodeStrokeKey,
      nodeKey,
      checkoutAccent,
      isUserSelected,
      isUncommitted,
      isStash,
      accentOutlineOnly,
      colors: {
        user: '#257BF3',
        hover: '#64A1F7',
        checkedOut: '#47AFEB',
        worktreeHover: WORKTREE_OTHER_HOVER_STROKE,
        worktreeTitle: WORKTREE_OTHER_TITLE,
        stash: STASH_LABEL_TEXT,
        base: NODE_FRAME_BRANCH_TITLE_COLOR,
      },
    });
  };
  const getNodeFrameInnerTextColor = (
    nodeKey: string,
    checkoutAccent: CheckoutAccent = 'none',
    isUserSelected = false,
    isUncommitted = false,
    isStash = false,
    accentOutlineOnly = false,
  ) => {
    return getNodeFrameInnerTextColorCore({
      hoveredNodeStrokeKey,
      nodeKey,
      checkoutAccent,
      isUserSelected,
      isUncommitted,
      isStash,
      accentOutlineOnly,
      colors: {
        user: '#257BF3',
        hover: '#64A1F7',
        checkedOut: '#47AFEB',
        worktreeHover: WORKTREE_OTHER_HOVER_STROKE,
        worktreeInner: WORKTREE_OTHER_INNER_TEXT,
        stash: STASH_LABEL_TEXT,
        base: NODE_FRAME_INNER_TEXT_COLOR,
      },
    });
  };
  const branchLaneHitPointerEvents: React.CSSProperties['pointerEvents'] =
    hoveredNodeStrokeKey != null ? 'none' : 'stroke';
  function handleNodeHoverEnter(nodeKey: string, branchName?: string) {
    setHoveredNodeStrokeKey(nodeKey);
    setHoveredNodeBranchName(branchName ?? null);
  }
  function handleNodeHoverLeave() {
    setHoveredNodeStrokeKey(null);
    setHoveredNodeBranchName(null);
  }
  function clearMainBranchHover() {
    setHoveredBranch((current) => (current === defaultBranch ? null : current));
  }
  function renderCommitNodeShapeRect({
    x,
    y,
    width,
    height,
    baseRadius = COMMIT_NODE_CORNER_RADIUS,
    fill,
    stroke,
    strokeWidth = CANVAS_NODE_STROKE_WIDTH,
    dashed = false,
  }: {
    x: number;
    y: number;
    width: number;
    height: number;
    baseRadius?: number;
    fill: string;
    stroke: string;
    strokeWidth?: number;
    dashed?: boolean;
  }) {
    return renderCommitNodeShapeRectCore({
      x,
      y,
      width,
      height,
      baseRadius,
      fill,
      stroke,
      strokeWidth,
      dashed,
      layerCameraScaleX: layerCameraScale.x,
    });
  }
  function renderCommitNodeRect({
    nodeKey,
    centerX,
    centerY,
    rectSize,
    fill,
    baseStroke,
    checkoutAccent = 'none' as CheckoutAccent,
    isUserSelected = false,
    strokeWidth = CANVAS_NODE_STROKE_WIDTH,
    strokeInset = strokeWidth / 2,
    dashed = false,
    cursor = undefined,
    innerText,
    footerMetaAuthor,
    footerMetaDate,
    isUncommitted = false,
    isStash = false,
    accentOutlineOnly: accentOutlineOnlyProp = false,
  }: {
    nodeKey: string;
    centerX: number;
    centerY: number;
    rectSize: ReturnType<typeof commitRectSize>;
    fill: string;
    baseStroke: string;
    checkoutAccent?: CheckoutAccent;
    isUserSelected?: boolean;
    strokeWidth?: number;
    strokeInset?: number;
    dashed?: boolean;
    cursor?: React.CSSProperties['cursor'];
    innerText?: string;
    footerMetaAuthor?: string;
    footerMetaDate?: string;
    isUncommitted?: boolean;
    isStash?: boolean;
    /** Ghost / empty uncommitted: transparent fill; checkout accent only on stroke. */
    accentOutlineOnly?: boolean;
  }) {
    return renderCommitNodeRectCore({
      nodeKey,
      centerX,
      centerY,
      rectSize,
      fill,
      baseStroke,
      checkoutAccent,
      isUserSelected,
      strokeWidth,
      strokeInset,
      dashed,
      cursor,
      innerText,
      footerMetaAuthor,
      footerMetaDate,
      isUncommitted,
      isStash,
      accentOutlineOnly: accentOutlineOnlyProp,
      shouldShowFooterMeta: zoom >= NODE_FRAME_FOOTER_META_ZOOM_MIN,
      wrapNodeFrameMessage: (message, size, width) =>
        wrapNodeFrameMessage(message, { ...size, radius: 0 }, width),
      trimTextToWidth,
      estimateSvgTextWidth,
      nodeFrameMessageInsetX,
      nodeFrameMessageInsetTop,
      nodeFrameMessageInsetBottom,
      nodeFrameFooterMetaPairGap,
      nodeFrameMessageFontSize,
      nodeFrameMessageRenderOffsetY,
      nodeFrameLabelWeight: NODE_FRAME_LABEL_WEIGHT,
      branchMapSvgFontFamily: BRANCH_MAP_SVG_FONT_FAMILY,
      showNodePushDebugLabel: ENABLE_NODE_PUSH_DEBUG_LABEL,
      worldPx,
      frameColors: {
        title: NODE_FRAME_BRANCH_TITLE_COLOR,
        inner: NODE_FRAME_INNER_TEXT_COLOR,
      },
      getNodeFillColor: ({
        nodeKey: nodeFillKey,
        baseFill,
        checkoutAccent: fillAccent,
        isUserSelected: fillSelected,
        accentOutlineOnly: fillAccentOutlineOnly,
      }) =>
        getNodeFillColor(
          nodeFillKey,
          baseFill,
          fillAccent,
          fillSelected,
          fillAccentOutlineOnly,
        ),
      getNodeStrokeColor: ({
        nodeKey: nodeStrokeKey,
        baseStroke: strokeBase,
        checkoutAccent: strokeAccent,
        isUserSelected: strokeSelected,
        accentOutlineOnly: strokeAccentOutlineOnly,
      }) =>
        getNodeStrokeColor(
          nodeStrokeKey,
          strokeBase,
          strokeAccent,
          strokeSelected,
          strokeAccentOutlineOnly,
        ),
      getNodeFrameInnerTextColor: ({
        nodeKey: nodeTextKey,
        checkoutAccent: textAccent,
        isUserSelected: textSelected,
        isUncommitted: textUncommitted,
        isStash: textStash,
        accentOutlineOnly: textAccentOutlineOnly,
      }) =>
        getNodeFrameInnerTextColor(
          nodeTextKey,
          textAccent,
          textSelected,
          textUncommitted,
          textStash,
          textAccentOutlineOnly,
        ),
      renderCommitNodeShapeRect,
      commitNodeCornerRadius: COMMIT_NODE_CORNER_RADIUS,
      unpushedFillAliases: [
        CANVAS_UNPUSHED_NODE_FILL,
        CANVAS_UNPUSHED_NODE_FILL_HEX.toLowerCase(),
      ],
    });
  }
  const branchRenderLayoutCache = new Map<string, BranchRenderLayout>();
  function getBranchRenderLayoutCtx() {
    return {
      MAIN_DRAW_MS,
      defaultBranch,
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
    };
  }

  function getBranchRenderLayout(b: Branch): BranchRenderLayout {
    const cached = branchRenderLayoutCache.get(b.name);
    if (cached) return cached;
    const layout = computeBranchRenderLayout(b, getBranchRenderLayoutCtx());
    branchRenderLayoutCache.set(b.name, layout);
    return layout;
  }
  const clumpAnimStyleForPhase = (phase: ExpandedClumpState['phase']): React.CSSProperties => {
    void phase;
    return {
      willChange: 'transform, opacity',
    };
  };
  const hoveredNodeBranchLineage = (() => {
    if (!hoveredNodeBranchName) return new Set<string>();
    const lineage = new Set<string>();
    const visited = new Set<string>();
    let currentBranchName: string | null = hoveredNodeBranchName;
    while (currentBranchName && !visited.has(currentBranchName)) {
      visited.add(currentBranchName);
      if (currentBranchName === defaultBranch) break;
      const branch = branchByName.get(currentBranchName);
      if (!branch) break;
      lineage.add(currentBranchName);
      const parentName = renderParentBranchName(branch);
      if (!parentName || parentName === currentBranchName || parentName === defaultBranch) break;
      currentBranchName = parentName;
    }
    return lineage;
  })();
  function branchUsesLocalGrayStroke(branch: Branch): boolean {
    return getBranchRenderLayout(branch).fullBranchShouldUseLocalGray;
  }

  function branchStrokeLayerPriority(
    branch: Branch,
    options: { includeSelectedPriority: boolean },
  ): number {
    if (options.includeSelectedPriority && selectedBranchNameSet.has(branch.name)) return 5;
    if (hoveredBranch === branch.name || isNodeLineageHovered(branch.name)) return 4;
    if (isSelectedLaneBranch(branch)) return 3;
    if (focusedErrorBranch?.name === branch.name) return 2;
    return branchUsesLocalGrayStroke(branch) ? 0 : 1;
  }

  function orderedActiveBranchesForLayer(options: { includeSelectedPriority: boolean }): Branch[] {
    return [...renderBranches].sort(
      (a, b) => branchStrokeLayerPriority(a, options) - branchStrokeLayerPriority(b, options)
    );
  }
  const mainIsUnifiedRender = renderBranches.some((branch) => branch.name === defaultBranch);
  const isNodeLineageHovered = (branchName: string): boolean => hoveredNodeBranchLineage.has(branchName);

  const toggleClumpExpanded = (clumpKey: string) => {
    clearTransientHoverState();
    markUserMovedCamera();
    const existing = expandedClumps.get(clumpKey);
    const isExpanded = existing?.isExpanded ?? false;

    const existingAnimationFrame = clumpCleanupTimersRef.current.get(clumpKey);
    if (existingAnimationFrame != null) {
      window.cancelAnimationFrame(existingAnimationFrame);
      clumpCleanupTimersRef.current.delete(clumpKey);
    }

    if (isExpanded) {
      // Collapse while rows start compacting shortly after collapse begins,
      // so surrounding content moves during the same motion window.
      const collapseStartedAt = Date.now();
      const collapseLerp = 0.26;
      let collapseProgress = existing?.phaseProgress ?? 1;
      // Keep expanded rows briefly during collapse so member travel remains visible,
      // then release rows early enough that lane motion still feels synced.
      const rowReleaseAt = collapseStartedAt + 80;
      setExpandedClumps((prev) => {
        const next = new Map(prev);
        next.set(clumpKey, {
          isExpanded: true,
          phase: 'collapsing',
          phaseStartedAt: collapseStartedAt,
          phaseProgress: collapseProgress,
          rowReleaseAt,
        });
        return next;
      });

      // Drive per-frame exponential interpolation until clump fully collapses.
      const collapseTick = () => {
        collapseProgress += (0 - collapseProgress) * collapseLerp;
        const done = Math.abs(collapseProgress) <= 0.004;
        setExpandedClumps((prev) => {
          const next = new Map(prev);
          if (done) {
            next.delete(clumpKey);
            return next;
          }
          const current = next.get(clumpKey);
          if (!current) return prev;
          next.set(clumpKey, {
            ...current,
            isExpanded: true,
            phase: 'collapsing',
            phaseStartedAt: collapseStartedAt,
            phaseProgress: collapseProgress,
            rowReleaseAt,
          });
          return next;
        });
        setClumpAnimationTick((v) => v + 1);
        if (done) {
          clumpCleanupTimersRef.current.delete(clumpKey);
          return;
        }
        const frameId = window.requestAnimationFrame(collapseTick);
        clumpCleanupTimersRef.current.set(clumpKey, frameId);
      };
      const frameId = window.requestAnimationFrame(collapseTick);
      clumpCleanupTimersRef.current.set(clumpKey, frameId);
      return;
    }

    const expandStartedAt = Date.now();
    const expandLerp = 0.26;
    let expandProgress = existing?.phaseProgress ?? 0;
    setExpandedClumps((prev) => {
      const next = new Map(prev);
      next.set(clumpKey, {
        isExpanded: true,
        phase: 'expanding',
        phaseStartedAt: expandStartedAt,
        phaseProgress: expandProgress,
        rowReleaseAt: undefined,
      });
      return next;
    });

    // Drive per-frame exponential interpolation until clump fully expands.
    const expandTick = () => {
      expandProgress += (1 - expandProgress) * expandLerp;
      const done = Math.abs(1 - expandProgress) <= 0.004;
      setExpandedClumps((prev) => {
        const next = new Map(prev);
        const current = next.get(clumpKey);
        if (!current) return prev;
        if (done) {
          next.set(clumpKey, {
            isExpanded: true,
            phase: 'expanded',
            phaseStartedAt: expandStartedAt,
            phaseProgress: 1,
            rowReleaseAt: undefined,
          });
          return next;
        }
        next.set(clumpKey, {
          ...current,
          isExpanded: true,
          phase: 'expanding',
          phaseStartedAt: expandStartedAt,
          phaseProgress: expandProgress,
          rowReleaseAt: undefined,
        });
        return next;
      });
      setClumpAnimationTick((v) => v + 1);
      if (done) {
        clumpCleanupTimersRef.current.delete(clumpKey);
        return;
      }
      const frameId = window.requestAnimationFrame(expandTick);
      clumpCleanupTimersRef.current.set(clumpKey, frameId);
    };
    const frameId = window.requestAnimationFrame(expandTick);
    clumpCleanupTimersRef.current.set(clumpKey, frameId);
  };

  // Seed the unified unpushed SHA set with direct-commit data (main branch),
  // falling back to the count-based slice if the explicit list is empty.
  const fallbackMainUnpushedCommits = (() => {
    const explicitUnpushed = Math.max(0, defaultBranchFromData?.unpushedCommits ?? 0);
    if (explicitUnpushed === 0) return [];
    return sortedDirectCommits.slice(-explicitUnpushed);
  })();
  const effectiveUnpushedDirectCommits =
    unpushedDirectCommits.length > 0 ? unpushedDirectCommits : fallbackMainUnpushedCommits;

  // Single source of truth: every unpushed SHA from every branch merged into one set.
  const allUnpushedShas = new Set<string>(
    [
      ...effectiveUnpushedDirectCommits.flatMap((c) => [c.fullSha, c.sha].filter(Boolean)),
      ...Object.values(unpushedCommitShasByBranch).flat().map((sha) => sha.trim()).filter(Boolean),
    ]
  );
  const isCommitUnpushed = (fullSha: string, sha?: string): boolean => {
    if (allUnpushedShas.has(fullSha)) return true;
    if (sha && allUnpushedShas.has(sha)) return true;
    for (const candidate of allUnpushedShas) {
      if (shaMatchesGitRef(candidate, fullSha)) return true;
      if (sha && shaMatchesGitRef(candidate, sha)) return true;
    }
    return false;
  };

  type MainDirectClusterLayout = {
    cluster: MarkerCluster<DirectCommit>;
    clusterKey: string;
    count: number;
    first: DirectCommit;
    last: DirectCommit;
    memberKeys: string[];
    preferredAnchorX: number;
    preferredAnchorY: number;
    clusterHasMainTip: boolean;
    clusterCheckoutAccent: CheckoutAccent;
    clusterHasSelectedCommit: boolean;
    clusterHasUncommitted: boolean;
    clusterHasStash: boolean;
    clusterHasUnpushed: boolean;
  };
  const mainLayout = getBranchRenderLayout(defaultBranchRenderBranch);
  const latestMainCommitSha = sortedDirectCommits[sortedDirectCommits.length - 1]?.fullSha;
  const selectedCommitShaRawSet = new Set(selectedCommitShas);
  const mainDirectClusters: MainDirectClusterLayout[] = mainLayout.commitDotClusters
    .map((cluster) => {
      const vm = buildBranchClusterViewModel(defaultBranch, cluster, mainLayout.branchEndDotIndex);
      const directEntries: MarkerEntry<DirectCommit>[] = vm.renderEntries
        .map((entry) => {
          const commit = entry.item.commit;
          if (!commit) return null;
          return { x: entry.x, y: entry.y, item: commit as DirectCommit };
        })
        .filter((entry): entry is MarkerEntry<DirectCommit> => entry != null);

      if (directEntries.length === 0) return null;

      const directCluster: MarkerCluster<DirectCommit> = {
        x: cluster.x,
        y: cluster.y,
        entries: directEntries,
      };
      const mainVm = buildMainClusterViewModel(directCluster);
      return {
        cluster: mainVm.cluster,
        clusterKey: vm.clusterKey,
        count: vm.count,
        first: mainVm.first,
        last: mainVm.last,
        memberKeys: vm.memberKeys,
        preferredAnchorX: vm.preferredAnchorEntry.x,
        preferredAnchorY: vm.preferredAnchorEntry.y,
        clusterHasMainTip: directEntries.some(
          (entry) => entry.item.fullSha === latestMainCommitSha
        ),
        clusterCheckoutAccent: (() => {
          const clusterHasPrimaryCheckoutHead =
            checkedOutHeadSha != null &&
            directEntries.some((entry) => shaMatchesGitRef(entry.item.fullSha, checkedOutHeadSha));
          const clusterHasOtherWorktreeHead = directEntries.some((entry) =>
            otherWorktreeMatchesBranchCommit(defaultBranch, entry.item.fullSha, entry.item.sha),
          );
          return clusterHasPrimaryCheckoutHead
            ? 'primary'
            : clusterHasOtherWorktreeHead
              ? 'other'
              : 'none';
        })(),
        clusterHasSelectedCommit:
          directEntries.some((entry) => selectedCommitShaRawSet.has(entry.item.fullSha)),
        clusterHasUncommitted: directEntries.some(
          (entry) =>
            entry.item.fullSha === 'WORKING_TREE' || entry.item.kind === 'uncommitted',
        ),
        clusterHasStash: directEntries.some((entry) => isStashCommitLike(entry.item)),
        clusterHasUnpushed: directEntries.some((entry) => isCommitUnpushed(entry.item.fullSha, entry.item.sha)),
      };
    })
    .filter((cluster): cluster is MainDirectClusterLayout => cluster != null);
  const renderedMainAnchorByCommitSha = (() => {
    const anchors = new Map<string, AnchorPoint>();
    for (const cluster of mainLayout.commitDotClusters) {
      const vm = buildBranchClusterViewModel(defaultBranch, cluster, mainLayout.branchEndDotIndex);
      const motion = resolveClusterMotion(
        vm.clusterKey,
        { x: vm.preferredAnchorEntry.x, y: vm.preferredAnchorEntry.y },
        vm.memberKeys,
        vm.canExpandCluster,
      );
      const collapsedCanonical = unprojectPoint(motion.anchorX, motion.anchorY);
      if (!motion.isExpanded || vm.count <= 1) {
        vm.renderEntries.forEach((entry) => {
          const sha = entry.item.commit?.fullSha;
          if (!sha) return;
          anchors.set(sha, collapsedCanonical);
        });
        continue;
      }

      vm.renderEntries.forEach((entry) => {
        const sha = entry.item.commit?.fullSha;
        if (!sha) return;
        const memberPose = interpolateExpandedEntryPose(
          { x: motion.anchorX, y: motion.anchorY },
          { x: entry.x, y: entry.y },
          motion.phase,
          motion.phaseEased,
        );
        anchors.set(sha, unprojectPoint(memberPose.x, memberPose.y));
      });
    }
    return anchors;
  })();
  const renderedBranchAnchorByBranchAndSha = (() => {
    const anchors = new Map<string, AnchorPoint>();
    for (const branch of activeBranches) {
      const layout = getBranchRenderLayout(branch);
      for (const cluster of layout.commitDotClusters) {
        const vm = buildBranchClusterViewModel(branch.name, cluster, layout.branchEndDotIndex);
        const motion = resolveClusterMotion(
          vm.clusterKey,
          { x: vm.preferredAnchorEntry.x, y: vm.preferredAnchorEntry.y },
          vm.memberKeys,
          vm.canExpandCluster,
        );
        const collapsedCanonical = unprojectPoint(motion.anchorX, motion.anchorY);
        if (!motion.isExpanded || vm.count <= 1) {
          vm.renderEntries.forEach((entry) => {
            const sha = entry.item.commit?.fullSha;
            if (!sha) return;
            anchors.set(`${branch.name}\0${sha}`, collapsedCanonical);
          });
          continue;
        }

        vm.renderEntries.forEach((entry) => {
          const sha = entry.item.commit?.fullSha;
          if (!sha) return;
          const memberPose = interpolateExpandedEntryPose(
            { x: motion.anchorX, y: motion.anchorY },
            { x: entry.x, y: entry.y },
            motion.phase,
            motion.phaseEased,
          );
          anchors.set(`${branch.name}\0${sha}`, unprojectPoint(memberPose.x, memberPose.y));
        });
      }
    }
    return anchors;
  })();
  const baseLaneTrimRadius = commitRectSize(scaledNodeSize, 0).height / 2;
  const mainLaneAnchors = buildMainLaneAnchors({
    mainDirectClusters,
    resolveClusterMotion,
    unprojectPoint,
    scaledNodeSize,
  });
  const mainLaneSegments = buildLaneSegments(mainLaneAnchors);
  // Clumps are closed by default; no checked-out auto-expansion.

  const branchHeadTargets: BranchHeadTarget[] = [
    ...renderBranches.map((branch) => {
      const layout = getBranchRenderLayout(branch);
      return {
        branchName: branch.name,
        headSha: branch.headSha,
        point: resolveBranchHeadProjectedPoint({
          branch,
          layout,
          renderedBranchAnchorByBranchAndSha,
          projectPoint,
          resolveClusterMotion,
          interpolateExpandedEntryPose,
        }),
      };
    }),
  ];
  branchHeadTargetsRef.current = branchHeadTargets;
  const {
    commitSelectionTargets,
    selectedVisibleCommitShas,
    selectedCommitShaSet,
    selectedBranchNameSet,
    commitMergeTargetOptions,
    selectedCommitTargetOption,
    targetBranchForSelectedCommit,
    commitMergeSources,
    pushableRemoteBranchCount,
    canPushCurrentBranch,
    resolvedSelectedPushTargets,
    hasSelection,
    selectedDeletableBranchNames,
    hasSelectedUncommittedChanges,
    selectedStashIndices,
    deletableSelectionCount,
    deleteSelectionItems,
    pushCurrentBranchLabel,
    selectedPushLabel,
    selectedPushTitle,
  } = buildSelectionOps({
    renderedMainAnchorByCommitSha,
    activeBranches,
    getBranchRenderLayout,
    branchHeadTargets,
    projectPoint,
    selectedCommitShas,
    selectedBranchNames,
    renderBranches,
    directCommits,
    defaultBranch,
    checkedOutBranchName,
    checkedOutHeadSha,
    selectableBranchNameSet,
    mergeTargetCommitSha,
    checkedOutIsDetached,
    unpushedDirectCommits,
    branchCommitPreviews,
    freshCopyBranchNames,
  });
  commitSelectionTargetsRef.current = commitSelectionTargets;
  deletableSelectionCountRef.current = deletableSelectionCount;

  async function handlePushSelectedTargets() {
    if (!onPushCommitTargets || pushInProgress || resolvedSelectedPushTargets.length === 0) return;
    await onPushCommitTargets(resolvedSelectedPushTargets.map(({ branchName, targetSha }) => ({ branchName, targetSha })));
    setSelectedCommitShas([]);
    setSelectedBranchNames([]);
    setMergeTargetCommitSha(null);
  }

  async function handleConfirmDeleteSelection() {
    if (!onDeleteSelection || deleteInProgress || deletableSelectionCount === 0) return;
    await onDeleteSelection({
      branchNames: selectedDeletableBranchNames,
      discardUncommittedChanges: hasSelectedUncommittedChanges,
      stashIndices: selectedStashIndices.length > 0 ? selectedStashIndices : undefined,
    });
    setDeleteConfirmOpen(false);
    setSelectedCommitShas([]);
    setSelectedBranchNames([]);
    setMergeTargetCommitSha(null);
  }

  async function handleConfirmCommit() {
    if (!onCommitLocalChanges || commitInProgress) return;
    const ok = await onCommitLocalChanges(commitMessageDraft);
    if (ok) {
      setCommitMessageDraft('');
      setCommitDialogOpen(false);
    }
  }

  const handleCommitMessageKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      void handleConfirmCommit();
    }
  };

  const previousOrientationRef = useRef<OrientationMode>(orientation);
  useEffect(() => {
    if (previousOrientationRef.current === orientation) return;
    previousOrientationRef.current = orientation;
    if (orientationSwitchFadeTimeoutRef.current !== null) {
      clearTimeout(orientationSwitchFadeTimeoutRef.current);
      orientationSwitchFadeTimeoutRef.current = null;
    }
    setIsOrientationSwitchFading(true);
    pendingOrientationAutoCenterRef.current = true;
    orientationSwitchFadeTimeoutRef.current = window.setTimeout(() => {
      orientationSwitchFadeTimeoutRef.current = null;
      setIsOrientationSwitchFading(false);
    }, ORIENTATION_SWITCH_FADE_MS);
  }, [orientation]);

  const nodeDragHighlights = (() => {
    if (!nodeDragDisplay || isResizeSettling) return [] as Array<{ branchName: string; centerX: number }>;
    const projection = selectionProjectionRef.current;
    const cameraScale = getCameraScale(zoomRef.current, projection.isHorizontal);
    return branchHeadTargetsRef.current
      .filter((target) => moveBackCandidateBranchNamesRef.current.has(target.branchName))
      .map((target) => {
        const centerX =
          panRef.current.x +
          projection.graphOffsetX +
          (projection.graphContentTranslateX + target.point.x) * cameraScale.x;
        return { branchName: target.branchName, centerX };
      });
  })();

  const cancelNewBranchDialog = () => {
    if (!createBranchFromNodeInProgress) setNewBranchDialogForNode(null);
  };

  const submitNewBranchDialog = () => {
    const name = newBranchNameForNode.trim();
    if (!name || createBranchFromNodeInProgress || !newBranchDialogForNode) return;
    const nodeId = newBranchDialogForNode.nodeId;
    setNewBranchDialogForNode(null);
    void onCreateBranchFromNode?.(nodeId, name);
  };

  const cancelCommitDialog = () => {
    if (!commitInProgress) setCommitDialogOpen(false);
  };

  const getBranchTimingSummary = (branchName: string) => {
    const timing = branchTimingByName.get(branchName);
    if (!timing) return null;
    return { parentName: timing.parentName, forkTimeX: timing.forkTimeX };
  };

  const checkedOutConnectorLayerProps = {
    checkedOutHasUncommittedChanges,
    checkedOutDisplayIndicatorLocal,
    checkedOutIndicatorLocal,
    cornerR,
    pathCoord,
    stroke: CANVAS_NEUTRAL_GRAY,
  };

  const branchNodeOverlayLayerProps = {
    orderedActiveBranchesForLayer,
    getBranchRenderLayout,
    focusedErrorBranch,
    unpushedLaneStrokeVisualComp: UNPUSHED_LANE_STROKE_VISUAL_COMP,
    resolveBranchClusterEntries,
    branchClusterKey,
    branchClusterMemberKeys,
    branchPreferredAnchorEntry,
    resolveAnimatedClumpAnchor,
    canvasUnpushedNodeFill: CANVAS_UNPUSHED_NODE_FILL,
    canvasNodeFill: CANVAS_NODE_FILL,
    canvasNodeStrokeWidth: CANVAS_NODE_STROKE_WIDTH,
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
    localUnpushedGray: LOCAL_UNPUSHED_GRAY,
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
  };

  const mainNodeOverlayLayerProps = {
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
    canvasUnpushedNodeFill: CANVAS_UNPUSHED_NODE_FILL,
    canvasNodeFill: CANVAS_NODE_FILL,
    stashOrUncommittedBaseStroke,
    clusterLocalSyntheticStroke,
    selectedBranchNameSet,
    defaultBranch,
    selectedCommitShaSet,
    mergeCheckoutAccent,
    checkedOutHeadSha,
    shaMatchesGitRef,
    latestMainCommitSha,
  };

  const nodeLabelsLayerProps = {
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
    canvasNodeStrokeInset: CANVAS_NODE_STROKE_INSET,
    nodeFrameLabelInsetX,
    nodeFrameLabelGap,
    getNodeFrameTitleColor,
    nodeFrameLabelFontSize,
    nodeFrameLabelWeight: NODE_FRAME_LABEL_WEIGHT,
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
  };

  const collapseControlsLayerProps = {
    mainIsUnifiedRender,
    mainDirectClusters,
    expandedClumps,
    resolveClumpPhase,
    commitRectSize,
    scaledNodeSize,
    nodeFrameCollapseIconSize,
    worldPx,
    isHorizontal,
    canvasNodeStrokeInset: CANVAS_NODE_STROKE_INSET,
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
  };

  const bottomChromeProps = {
    marqueeRect,
    isResizeSettling,
    canvasNodeStrokeWidth: CANVAS_NODE_STROKE_WIDTH,
    userSelectionStroke: USER_SELECTION_STROKE,
    holdTimelineForInitialCenter,
    timelineRevealPhase,
    initialRevealFadeMs: INITIAL_REVEAL_FADE_MS,
    isLoading,
    controlsReady,
    hasSelection,
    onCommitLocalChanges,
    commitDisabled,
    onStageAllChanges,
    onStashLocalChanges,
    stashDisabled,
    resolvedSelectedPushTargets,
    onPushCommitTargets,
    onPushAllBranches,
    pushableRemoteBranchCount,
    onPushCurrentBranch,
    canPushCurrentBranch,
    pushInProgress,
    mergeInProgress,
    commitInProgress,
    stashInProgress,
    stageInProgress,
    selectedPushLabel,
    selectedPushTitle,
    handlePushSelectedTargets,
    pushCurrentBranchLabel,
    openGitActionMenu,
    closeGitActionMenu,
    toggleGitActionMenu,
    gitActionMenuOpen,
    gitActionMenuRef,
    dropdownSpringVariants: DROPDOWN_SPRING_VARIANTS,
    setCommitDialogOpen,
    worktrees,
    onRemoveWorktree,
    onSwitchToWorktree,
    worktreeMenuRef,
    worktreeMenuOpen,
    toggleWorktreeMenu,
    closeWorktreeMenu,
    isOtherWorktree,
    worktreeShortLabel,
    removeWorktreeInProgress,
    selectedVisibleCommitShas,
    commitMergeTargetOptions,
    selectedCommitTargetOption,
    targetBranchForSelectedCommit,
    setMergeTargetCommitSha,
    handleMergeSourcesIntoTarget,
    commitMergeSources,
  };

  const overlaysLayerProps = {
    nodeDragHighlights,
    checkedOutSelectionStroke: CHECKED_OUT_SELECTION_STROKE,
    newBranchDialogForNode,
    createBranchFromNodeInProgress,
    newBranchInputForNodeRef,
    newBranchNameForNode,
    setNewBranchNameForNode,
    onCancelNewBranchDialog: cancelNewBranchDialog,
    onSubmitNewBranchDialog: submitNewBranchDialog,
    commitDialogOpen,
    commitInProgress,
    commitMessageRef,
    commitMessageDraft,
    setCommitMessageDraft,
    onCommitMessageKeyDown: handleCommitMessageKeyDown,
    onCancelCommitDialog: cancelCommitDialog,
    onConfirmCommit: () => void handleConfirmCommit(),
    deleteConfirmOpen,
    deleteSelectionItems,
    selectedDeletableBranchNames,
    deleteInProgress,
    deletableSelectionCount,
    onCancelDeleteConfirm: () => setDeleteConfirmOpen(false),
    onConfirmDeleteSelection: () => void handleConfirmDeleteSelection(),
    showLineageDebug,
    onCloseLineageDebug: () => setShowLineageDebug(false),
    sortedNodes,
    defaultBranch,
    mergedBranchByHeadSha,
    activeBranches,
    sortedDirectCommits,
    renderParentBranchName,
    sortedConcreteBranchPreviews,
    freshCopyBranchNames,
    getBranchRenderLayout,
    getBranchTimingSummary,
    commitXForSha,
    errorPanelRef,
    errorPanelOpen,
    onCloseErrorPanel: () => setErrorPanelOpen(false),
    staleBranches,
    fmtRelativeDate,
  };

  return (
    <div className="relative h-full">
      <MapSvgCanvasShell
        scrollRef={scrollRef}
        cameraRef={cameraRef}
        svgRef={svgRef}
        zoomLayerRef={zoomLayerRef}
        contentLayerRef={contentLayerRef}
        onMouseDown={handleCanvasMouseDown}
        className={`w-full h-full overflow-hidden branch-map-scroll relative select-none touch-none ${nodeDragDisplay ? 'cursor-grabbing' : isPanning ? 'cursor-grabbing' : spaceHeld ? 'cursor-grab' : 'cursor-default'}`}
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        isOrientationSwitchFading={isOrientationSwitchFading}
        isResizeSettling={isResizeSettling}
        orientationSwitchFadeMs={ORIENTATION_SWITCH_FADE_MS}
        svgWidth={svgWidth}
        svgHeight={svgHeight}
        drawReady={drawReady}
        enableTimelineIntroAnimations={ENABLE_TIMELINE_INTRO_ANIMATIONS}
        animationsLocked={animationsLocked}
        layerCameraScale={layerCameraScale}
        graphOffsetX={graphOffsetX}
        graphOffsetY={graphOffsetY}
        timelineCanvasVisible={timelineCanvasVisible}
        holdTimelineForInitialCenter={holdTimelineForInitialCenter}
        initialRevealFadeMs={INITIAL_REVEAL_FADE_MS}
        svgAreaBg={SVG_AREA_BG}
        graphContentTranslateX={graphContentTranslateX}
        graphContentTranslateY={graphContentTranslateY}
      >

                  {/* ── Grid background (table-like lanes) ── */}

                  {/* ── Main timeline + merge nodes ── */}
                  <g
                    style={{ opacity: mainTimelineOpacity, transition: 'opacity 0.15s' }}
                    onMouseEnter={() => setHoveredBranch(defaultBranch)}
                    onMouseLeave={() => clearMainBranchHover()}
                  >
                    {!mainIsUnifiedRender && (
                      <>
                        {mainLaneSegments.map((segment) => {
                          const trimmed = trimLaneSegment(segment);
                          if (!trimmed) return null;
                          return (
                            <path
                              key={`main-hit:${segment.start.key}:${segment.end.key}`}
                              d={buildStraightPath(trimmed.start, trimmed.end, pathCoord)}
                              fill="none"
                              stroke="transparent"
                              strokeWidth={branchHitStrokeWidth}
                              style={{ pointerEvents: branchLaneHitPointerEvents }}
                            />
                          );
                        })}
                        {mainLaneSegments.map((segment) => {
                          const trimmed = trimLaneSegment(segment);
                          if (!trimmed) return null;
                          return (
                            <path
                              key={`main-segment:${segment.start.key}:${segment.end.key}`}
                              d={buildStraightPath(trimmed.start, trimmed.end, pathCoord)}
                              fill="none"
                              stroke={CANVAS_NEUTRAL_GRAY}
                              strokeWidth={0.75}
                              pathLength={1}
                              className={drawPathMainClass}
                              style={{
                                '--delay': `${MAIN_DRAW_MS}ms`,
                              } as React.CSSProperties}
                            />
                          );
                        })}

                        <g className={fadeInInfoClass} style={{ '--delay': `${MAIN_DRAW_MS + INFO_OFFSET}ms` } as React.CSSProperties}>
                          {/* Direct commits */}
                          {mainDirectClusters.map((clusterLayout) => {
                            const {
                              cluster,
                              count,
                              first,
                              last,
                              clusterKey,
                              clusterHasMainTip,
                              clusterCheckoutAccent,
                              clusterHasSelectedCommit,
                              memberKeys,
                              preferredAnchorX,
                              preferredAnchorY,
                            } = clusterLayout;
                            const countLabel = stackCountLabel(count);
                            const motion = resolveClusterMotion(
                              clusterKey,
                              { x: preferredAnchorX, y: preferredAnchorY },
                              memberKeys,
                              count > 1,
                            );
                            const anchorX = motion.anchorX;
                            const anchorY = motion.anchorY;

                            if (count === 1) {
                              const c = last;
                              const isUncommittedCommit =
                                c.fullSha === 'WORKING_TREE' || c.kind === 'uncommitted';
                              const isStashCommit = isStashCommitLike(c);
                              const isUnpushedCommit = isCommitUnpushed(c.fullSha, c.sha);
                              const label = truncatePrompt(c.message, COMMIT_TOOLTIP_PREVIEW_MAX);
                              const rectSize = commitRectSize(scaledNodeSize);
                              const mainSingleHitPad = worldPx(6);
                              const mainSingleHit = collapsedClumpHitRect(anchorX, anchorY, rectSize, mainSingleHitPad);
                              return (
                                <g key={clusterKey}>
                                  <g
                                    style={{
                                      pointerEvents: 'none',
                                      opacity: (isUncommittedCommit || isStashCommit) && nodeDragDisplay?.nodeId === c.fullSha ? 0 : 1,
                                    }}
                                  >
                                    {renderCommitNodeShapeRect({
                                      x: anchorX - rectSize.width / 2 + CANVAS_NODE_STROKE_INSET,
                                      y: anchorY - rectSize.height / 2 + CANVAS_NODE_STROKE_INSET,
                                      width: rectSize.width - CANVAS_NODE_STROKE_WIDTH,
                                      height: rectSize.height - CANVAS_NODE_STROKE_WIDTH,
                                      fill: getNodeFillColor(
                                        clusterKey,
                                        isStashCommit || isUncommittedCommit || isUnpushedCommit
                                          ? CANVAS_UNPUSHED_NODE_FILL
                                          : CANVAS_NODE_FILL,
                                        clusterCheckoutAccent,
                                        clusterHasSelectedCommit || (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                      ),
                                      stroke: getNodeStrokeColor(
                                        clusterKey,
                                        stashOrUncommittedBaseStroke(isStashCommit, isUncommittedCommit),
                                        clusterCheckoutAccent,
                                        clusterHasSelectedCommit || (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                      ),
                                      strokeWidth: CANVAS_NODE_STROKE_WIDTH,
                                      dashed: isUncommittedCommit || isStashCommit,
                                    })}
                                  </g>
                                  <rect
                                    x={mainSingleHit.x}
                                    y={mainSingleHit.y}
                                    width={mainSingleHit.width}
                                    height={mainSingleHit.height}
                                    fill="transparent"
                                    style={{ cursor: (isUncommittedCommit || isStashCommit) && onCreateBranchFromNode ? 'grab' : 'pointer' }}
                                    onMouseDown={(event) => {
                                      if ((isUncommittedCommit || isStashCommit) && onCreateBranchFromNode) {
                                        beginNodeDrag(event, c.fullSha, anchorX, anchorY);
                                      }
                                    }}
                                    onClick={(event) =>
                                      handleCommitNodeClick(
                                        event,
                                        c.fullSha,
                                        clusterHasMainTip ? defaultBranch : undefined,
                                      )
                                    }
                                    onDoubleClick={(event) => event.stopPropagation()}
                                    onMouseEnter={() => {
                                      setHoveredBranch(defaultBranch);
                                      handleNodeHoverEnter(clusterKey, defaultBranch);
                                      setTooltip({
                                        x: anchorX,
                                        y: anchorY,
                                        lines: [
                                          isStashCommit
                                            ? shortShaLabel(c.fullSha)
                                            : isUncommittedCommit
                                              ? 'Uncommited Changes'
                                              : `Commit ${c.sha}`,
                                          label,
                                          `@${c.author} · ${fmtTooltipDate(c.date)}`,
                                        ],
                                        avatarFallback: c.author?.charAt(0).toUpperCase() || '?',
                                      });
                                    }}
                                    onMouseLeave={() => {
                                      handleNodeHoverLeave();
                                      clearMainBranchHover();
                                      setTooltip(null);
                                    }}
                                  />
                                </g>
                              );
                            }

                            const isExpanded = motion.isExpanded;
                            const phase = motion.phase;
                            const phaseEased = motion.phaseEased;
                            const rectSize = nodeRectSize(count);
                            const localRect = commitRectSize(scaledNodeSize, 0);

                            const rangeLine = fmtClumpDateRange(first.date, last.date);
                            const latestCommitMessage = last.message
                              ? truncatePrompt(last.message, COMMIT_CLUSTER_PREVIEW_MAX)
                              : 'on main';
                            // Main-node visuals are authored in the dedicated overlay to keep branch
                            // connectors behind them; keep this base layer for interaction only.
                            const renderCollapsedVisualInBase = false;

                            return (
                              <g key={clusterKey}>
                                {/* Collapsed: draw one clump node. Expanded: animate members out. */}
                                {!isExpanded && renderCollapsedVisualInBase && (
                                  <g style={{ pointerEvents: 'none' }}>
                                    {renderCommitNodeShapeRect({
                                      x: anchorX - rectSize.width / 2 + CANVAS_NODE_STROKE_INSET,
                                      y: anchorY - rectSize.height / 2 + CANVAS_NODE_STROKE_INSET,
                                      width: rectSize.width - CANVAS_NODE_STROKE_WIDTH,
                                      height: rectSize.height - CANVAS_NODE_STROKE_WIDTH,
                                      fill: getNodeFillColor(
                                        clusterKey,
                                        CANVAS_NODE_FILL,
                                        clusterCheckoutAccent,
                                        clusterHasSelectedCommit || (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                      ),
                                      stroke: getNodeStrokeColor(
                                        clusterKey,
                                        CANVAS_NODE_STROKE,
                                        clusterCheckoutAccent,
                                        clusterHasSelectedCommit || (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                      ),
                                      strokeWidth: CANVAS_NODE_STROKE_WIDTH,
                                    })}
                                    <text
                                      x={anchorX + rectSize.width / 2 - nodeFrameLabelRightInsetX}
                                      y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                                      textAnchor="end"
                                      fontSize={nodeFrameLabelFontSize}
                                      fill={getNodeFrameTitleColor(
                                        clusterKey,
                                        clusterCheckoutAccent,
                                        clusterHasSelectedCommit || (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                      )}
                                      fontWeight={NODE_FRAME_LABEL_WEIGHT}
                                      pointerEvents="none"
                                    >
                                      {countLabel}
                                    </text>
                                  </g>
                                )}

                                {/* Collapsed-only overlay hit target (on top) so clicks never fall through. */}
                                {!isExpanded && (() => {
                                  const pad = worldPx(6);
                                  const hit = collapsedClumpHitRect(
                                    anchorX,
                                    anchorY,
                                    rectSize,
                                    pad
                                  );
                                  return (
                                    <rect
                                      x={hit.x}
                                      y={hit.y}
                                      width={hit.width}
                                      height={hit.height}
                                      fill="transparent"
                                      style={{ cursor: 'pointer' }}
                                      onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                                      onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        toggleClumpExpanded(clusterKey);
                                      }}
                                      onDoubleClick={(event) => {
                                        event.preventDefault();
                                        event.stopPropagation();
                                      }}
                                      onMouseEnter={() => {
                                        setHoveredBranch(defaultBranch);
                                        handleNodeHoverEnter(clusterKey, defaultBranch);
                                        setTooltip({
                                          x: anchorX,
                                          y: anchorY,
                                          lines: [`${count} commits`, latestCommitMessage, `and ${count - 1} more commits`, `@${last.author} · ${rangeLine}`],
                                          avatarFallback: last.author?.charAt(0).toUpperCase() || '?',
                                        });
                                      }}
                                      onMouseLeave={() => {
                                        handleNodeHoverLeave();
                                        clearMainBranchHover();
                                        setTooltip(null);
                                      }}
                                    />
                                  );
                                })()}

                                {isExpanded && (
                                  <g>
                                    {cluster.entries.map((entry) => {
                                      const c = entry.item;
                                      const label = truncatePrompt(c.message, COMMIT_TOOLTIP_PREVIEW_MAX);
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
                                        checkedOutHeadSha != null && shaMatchesGitRef(c.fullSha, checkedOutHeadSha),
                                        defaultBranch,
                                        c.fullSha,
                                        c.sha,
                                      );
                                      return (
                                        <g
                                          key={commitKey}
                                          transform={`translate(${memberPose.x} ${memberPose.y})`}
                                          style={{ ...clumpAnimStyleForPhase(phase), pointerEvents: phase === 'expanded' ? 'auto' : 'none' }}
                                          opacity={memberPose.opacity}
                                        >
                                          <g transform={`scale(${memberPose.scale})`}>
                                            <g
                                              style={{ cursor: 'pointer' }}
                                              onClick={(event) =>
                                                handleCommitNodeClick(
                                                  event,
                                                  c.fullSha,
                                                  clusterHasMainTip && c.fullSha === latestMainCommitSha
                                                    ? defaultBranch
                                                    : undefined,
                                                )
                                              }
                                              onDoubleClick={(event) => event.stopPropagation()}
                                              onMouseEnter={() => {
                                                setHoveredBranch(defaultBranch);
                                                handleNodeHoverEnter(commitKey, defaultBranch);
                                                setTooltip({
                                                  x: entry.x,
                                                  y: entry.y,
                                                  lines: [
                                                    isStashCommit
                                                      ? shortShaLabel(c.fullSha)
                                                      : isUncommittedCommit
                                                        ? 'Uncommited Changes'
                                                        : `Commit ${c.sha}`,
                                                    label,
                                                    `@${c.author} · ${fmtTooltipDate(c.date)}`,
                                                  ],
                                                  avatarFallback: c.author?.charAt(0).toUpperCase() || '?',
                                                });
                                              }}
                                              onMouseLeave={() => {
                                                handleNodeHoverLeave();
                                                clearMainBranchHover();
                                                setTooltip(null);
                                              }}
                                            >
                                              {renderCommitNodeShapeRect({
                                                x: -localRect.width / 2 + CANVAS_NODE_STROKE_INSET,
                                                y: -localRect.height / 2 + CANVAS_NODE_STROKE_INSET,
                                                width: localRect.width - CANVAS_NODE_STROKE_WIDTH,
                                                height: localRect.height - CANVAS_NODE_STROKE_WIDTH,
                                                fill: getNodeFillColor(
                                                  commitKey,
                                                  isStashCommit || isUncommittedCommit || isUnpushedCommit
                                                    ? CANVAS_UNPUSHED_NODE_FILL
                                                    : CANVAS_NODE_FILL,
                                                  commitCheckoutAccent,
                                                  selectedCommitShaSet.has(c.fullSha) ||
                                                    (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                                ),
                                                stroke: getNodeStrokeColor(
                                                  commitKey,
                                                  stashOrUncommittedBaseStroke(isStashCommit, isUncommittedCommit),
                                                  commitCheckoutAccent,
                                                  selectedCommitShaSet.has(c.fullSha) ||
                                                  (clusterHasMainTip &&
                                                    selectedBranchNameSet.has(defaultBranch) &&
                                                    c.fullSha === latestMainCommitSha),
                                                ),
                                                strokeWidth: CANVAS_NODE_STROKE_WIDTH,
                                                dashed: isUncommittedCommit || isStashCommit,
                                              })}
                                            </g>
                                          </g>
                                        </g>
                                      );
                                    })}
                                  </g>
                                )}
                              </g>
                            );
                          })}
                          {(() => {
                            const mainPromptMarkers = [...(branchPromptMeta[defaultBranch]?.markers ?? [])]
                              .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
                            const promptEntries: MarkerEntry<{ marker: typeof mainPromptMarkers[number]; index: number }>[] =
                              mainPromptMarkers.map((marker, markerIndex) => {
                                const markerPoint = projectPoint(
                                  mainX,
                                  timeCoordToY(timeToX(marker.timestamp))
                                );
                                return {
                                  x: markerPoint.x,
                                  y: markerPoint.y,
                                  item: { marker, index: markerIndex },
                                };
                              });
                            const clusters = clusterByForkPoints(promptEntries, new Set<number>());
                            return clusters.map((cluster) => {
                              const count = cluster.entries.length;
                              const firstEntry = cluster.entries[0];
                              const lastEntry = cluster.entries[count - 1];
                              const clusterKey = `main-prompt-clump-${defaultBranch}-${firstEntry.item.index}-${lastEntry.item.index}`;
                              const memberKeys = cluster.entries.map((entry) => `prompt:${defaultBranch}:slot-${entry.item.index}`);
                              const animatedAnchor = resolveAnimatedClumpAnchor(
                                clusterKey,
                                { x: cluster.x, y: cluster.y },
                                memberKeys
                              );
                              const anchorX = animatedAnchor.x;
                              const anchorY = animatedAnchor.y;
                              const markerSize =
                                scaledNodeSize;
                              const markerPath = promptMarkerPath(anchorX, anchorY, markerSize);
                              const hitSize = scaledHoverHitSize;
                              const markerStrokeWidth = 1.2;
                              const label = count > 1 ? clumpCountLabel(count) : '';
                              const labelFontSize = nodeLabelFontSize(scaledNodeSize, count);

                              if (count === 1) {
                                const marker = lastEntry.item.marker;
                                return (
                                  <g key={clusterKey}>
                                    <g style={{ pointerEvents: 'none' }}>
                                      <path
                                        d={markerPath}
                                        fill="var(--background)"
                                        stroke="#14b8a6"
                                        strokeWidth={markerStrokeWidth}
                                        strokeLinejoin="round"
                                      />
                                    </g>
                                    <rect
                                      x={anchorX - hitSize / 2}
                                      y={anchorY - hitSize / 2}
                                      width={hitSize}
                                      height={hitSize}
                                      fill="transparent"
                                      style={{ cursor: 'pointer' }}
                                      onMouseEnter={() =>
                                        setTooltip({
                                          x: anchorX,
                                          y: anchorY,
                                          lines: [
                                            'Prompt',
                                            truncatePrompt(marker.prompt, PROMPT_TOOLTIP_PREVIEW_MAX),
                                            `${marker.agent} · ${fmtTooltipDate(marker.timestamp)}`,
                                          ],
                                        })
                                      }
                                      onMouseLeave={() => setTooltip(null)}
                                    />
                                  </g>
                                );
                              }

                              const firstDate = firstEntry.item.marker.timestamp;
                              const lastDate = lastEntry.item.marker.timestamp;
                              const dateRangeLabel = fmtClumpDateRange(firstDate, lastDate);
                              const latestPrompt = truncatePrompt(lastEntry.item.marker.prompt, PROMPT_CLUSTER_PREVIEW_MAX);
                              return (
                                <g key={clusterKey}>
                                  <g style={{ pointerEvents: 'none' }}>
                                    <path
                                      d={markerPath}
                                      fill="var(--background)"
                                      stroke="#14b8a6"
                                      strokeWidth={markerStrokeWidth}
                                      strokeLinejoin="round"
                                    />
                                    <text
                                      x={anchorX}
                                      y={anchorY}
                                      textAnchor="middle"
                                      dominantBaseline="middle"
                                      fill="#14b8a6"
                                      fontWeight={700}
                                      style={{
                                        fontVariantNumeric: 'tabular-nums',
                                        fontSize: `${labelFontSize / Math.max(layerCameraScale.x, 0.0001)}px`,
                                      }}
                                      data-base-font-size={labelFontSize}
                                    >
                                      {label}
                                    </text>
                                  </g>
                                  <rect
                                    x={anchorX - hitSize / 2}
                                    y={anchorY - hitSize / 2}
                                    width={hitSize}
                                    height={hitSize}
                                    fill="transparent"
                                    style={{ cursor: 'pointer' }}
                                    onMouseEnter={() =>
                                      setTooltip({
                                        x: anchorX,
                                        y: anchorY,
                                        lines: [`${count} prompts`, latestPrompt, `and ${count - 1} more prompts`, `${lastEntry.item.marker.agent} · ${dateRangeLabel}`],
                                      })
                                    }
                                    onMouseLeave={() => setTooltip(null)}
                                  />
                                </g>
                              );
                            });
                          })()}

                        </g>
                      </>
                    )}
                  </g>

                  {/* ── Active branches ── */}
                  <g>
                    {(() => {
                      const orderedActiveBranches = orderedActiveBranchesForLayer({
                        includeSelectedPriority: true,
                      });

                      return orderedActiveBranches.map((b) => {
                        const {
                          uniqueAheadCount,
                          branchEndDotIndex,
                          localCommitDotIndices,
                          fullBranchShouldUseLocalGray,
                          hasUncommittedPreview,
                          localSegmentStartY,
                          commitDotClusters,
                          promptMarkerClusters,
                          brDelay,
                          showClockIcon,
                          clockPoint,
                          forkY,
                          startX,
                          mergeTargetX,
                          mergeTargetY,
                        } = getBranchRenderLayout(b);
                        const layout = getBranchRenderLayout(b);
                        const branchLaneAnchors = buildBranchLaneAnchors({
                          branch: b,
                          layout,
                          resolveClusterMotion,
                          interpolateExpandedEntryPose,
                          unprojectPoint,
                          baseLaneTrimRadius,
                          scaledNodeSize,
                        });
                        const branchLaneSegments = buildLaneSegments(branchLaneAnchors);
                        const firstLaneAnchor = branchLaneAnchors[0];
                        const lastLaneAnchor = branchLaneAnchors[branchLaneAnchors.length - 1];
                        const renderedBranchHead = resolveBranchHeadProjectedPoint({
                          branch: b,
                          layout,
                          renderedBranchAnchorByBranchAndSha,
                          projectPoint,
                          resolveClusterMotion,
                          interpolateExpandedEntryPose,
                        });
                        const renderedBranchHeadCanonical = unprojectPoint(renderedBranchHead.x, renderedBranchHead.y);
                        const animatedLine = resolveAnimatedBranchLineGeometry(`branch-line:${b.name}`, {
                          startX,
                          forkY,
                          lanePosX: renderedBranchHeadCanonical.x,
                          tipY: renderedBranchHeadCanonical.y,
                          mergeTargetX,
                          mergeTargetY,
                          localSegmentStartY: localSegmentStartY ?? null,
                        });
                        const routeCornerR = GRID_ROUTE_CORNER_R;
                        const forkConnectorTip = firstLaneAnchor ?? {
                          x: animatedLine.lanePosX,
                          y: animatedLine.tipY,
                          trimRadius: baseLaneTrimRadius,
                          key: `${b.name}:fallback-tip`,
                        };
                        const forkConnectorPath = buildBranchOrthogonalPath({
                          startX: animatedLine.startX,
                          forkY: animatedLine.forkY,
                          laneX: forkConnectorTip.x,
                          tipY: forkConnectorTip.y - forkConnectorTip.trimRadius,
                          cornerR: routeCornerR,
                          pointFormatter: pathCoord,
                        });
                        const hitForkConnectorPath = buildBranchOrthogonalPath({
                          startX: animatedLine.startX,
                          forkY: animatedLine.forkY,
                          laneX: forkConnectorTip.x,
                          tipY: forkConnectorTip.y,
                          cornerR: routeCornerR,
                          pointFormatter: pathCoord,
                        });
                        const mergeBackPath =
                          animatedLine.mergeTargetY != null &&
                            animatedLine.mergeTargetX != null &&
                            Math.abs(animatedLine.lanePosX - animatedLine.mergeTargetX) > 0.5
                            ? buildMergeOrthogonalPath({
                              laneX: lastLaneAnchor?.x ?? animatedLine.lanePosX,
                              tipY: (lastLaneAnchor?.y ?? animatedLine.tipY) - (lastLaneAnchor?.trimRadius ?? baseLaneTrimRadius),
                              mergeX: animatedLine.mergeTargetX,
                              mergeY: animatedLine.mergeTargetY,
                              cornerR: routeCornerR,
                              pointFormatter: pathCoord,
                            })
                            : null;
                        const strokeWidth = 0.75;
                        const strokeColor = CANVAS_NEUTRAL_GRAY;
                        const unpushedStrokeWidth = strokeWidth + UNPUSHED_LANE_STROKE_VISUAL_COMP;
                        const unpushedLaneDasharray = `${Math.max(1, unpushedStrokeWidth)} ${Math.max(2, unpushedStrokeWidth * 1.8)}`;
                        const isEmptyBranch = uniqueAheadCount <= 0;
                        const shouldDashLocalLane = hasUncommittedPreview || isEmptyBranch;
                        const branchGroupOpacity = 1;

                        return (
                          <g
                            key={b.name}
                            onMouseEnter={() => setHoveredBranch(b.name)}
                            onMouseLeave={() => setHoveredBranch(null)}
                            style={{ opacity: branchGroupOpacity, transition: 'opacity 0.15s' }}
                          >
                            {/* Invisible wide hit target to make hover/click easier on thin SVG strokes */}
                            <path
                              d={hitForkConnectorPath}
                              fill="none"
                              stroke={DEBUG_SHOW_BRANCH_HIT_AREAS ? DEBUG_BRANCH_HIT_AREA_COLOR : 'transparent'}
                              strokeOpacity={DEBUG_SHOW_BRANCH_HIT_AREAS ? DEBUG_BRANCH_HIT_AREA_OPACITY : undefined}
                              strokeWidth={branchHitStrokeWidth}
                              strokeLinecap="butt"
                              style={{
                                pointerEvents: branchLaneHitPointerEvents,
                                cursor: isEmptyBranch ? 'pointer' : undefined,
                              }}
                              onClick={(event) => {
                                if (!isEmptyBranch) return;
                                handleCommitNodeClick(event, b.headSha, b.name);
                              }}
                              onDoubleClick={(event) => event.stopPropagation()}
                            />
                            {branchLaneSegments.map((segment) => {
                              const trimmed = trimLaneSegment(segment);
                              if (!trimmed) return null;
                              return (
                                <path
                                  key={`branch-hit:${segment.start.key}:${segment.end.key}`}
                                  d={buildStraightPath(trimmed.start, trimmed.end, pathCoord)}
                                  fill="none"
                                  stroke={DEBUG_SHOW_BRANCH_HIT_AREAS ? DEBUG_BRANCH_HIT_AREA_COLOR : 'transparent'}
                                  strokeOpacity={DEBUG_SHOW_BRANCH_HIT_AREAS ? DEBUG_BRANCH_HIT_AREA_OPACITY : undefined}
                                  strokeWidth={branchHitStrokeWidth}
                                  strokeLinecap="butt"
                                  style={{
                                    pointerEvents: branchLaneHitPointerEvents,
                                    cursor: isEmptyBranch ? 'pointer' : undefined,
                                  }}
                                  onClick={(event) => {
                                    if (!isEmptyBranch) return;
                                    handleCommitNodeClick(event, b.headSha, b.name);
                                  }}
                                  onDoubleClick={(event) => event.stopPropagation()}
                                />
                              );
                            })}

                            {/* Branch path — draws in. key="arc" keeps the DOM node stable so the
                      CSS animation is never restarted when sibling elements change. */}
                            <path
                              key="arc"
                              d={forkConnectorPath}
                              fill="none"
                              stroke={strokeColor}
                              strokeWidth={fullBranchShouldUseLocalGray ? unpushedStrokeWidth : strokeWidth}
                              strokeDasharray={fullBranchShouldUseLocalGray && shouldDashLocalLane ? unpushedLaneDasharray : undefined}
                              strokeLinecap={fullBranchShouldUseLocalGray && shouldDashLocalLane ? 'round' : undefined}
                              pathLength={fullBranchShouldUseLocalGray ? undefined : 1}
                              className={drawPathArcClass}
                              style={{
                                '--delay': `${brDelay}ms`,
                              } as React.CSSProperties}
                            />
                            {branchLaneSegments.map((segment) => {
                              const trimmed = trimLaneSegment(segment);
                              if (!trimmed) return null;
                              return (
                                <path
                                  key={`branch-segment:${segment.start.key}:${segment.end.key}`}
                                  d={buildStraightPath(trimmed.start, trimmed.end, pathCoord)}
                                  fill="none"
                                  stroke={fullBranchShouldUseLocalGray ? CANVAS_NEUTRAL_GRAY : strokeColor}
                                  strokeWidth={fullBranchShouldUseLocalGray ? unpushedStrokeWidth : strokeWidth}
                                  strokeDasharray={fullBranchShouldUseLocalGray && shouldDashLocalLane ? unpushedLaneDasharray : undefined}
                                  strokeLinecap={fullBranchShouldUseLocalGray && shouldDashLocalLane ? 'round' : undefined}
                                  pathLength={fullBranchShouldUseLocalGray ? undefined : 1}
                                  className={drawPathArcClass}
                                  style={{
                                    '--delay': `${brDelay}ms`,
                                  } as React.CSSProperties}
                                />
                              );
                            })}
                            {mergeBackPath && (
                              <path
                                d={mergeBackPath}
                                fill="none"
                                stroke={strokeColor}
                                strokeWidth={fullBranchShouldUseLocalGray ? unpushedStrokeWidth : strokeWidth}
                                strokeDasharray={fullBranchShouldUseLocalGray && shouldDashLocalLane ? unpushedLaneDasharray : undefined}
                                strokeLinecap={fullBranchShouldUseLocalGray && shouldDashLocalLane ? 'round' : undefined}
                                className={drawPathArcClass}
                                style={{
                                  '--delay': `${brDelay}ms`,
                                } as React.CSSProperties}
                              />
                            )}
                            {!fullBranchShouldUseLocalGray && localSegmentStartY != null && (
                              <path
                                d={`M ${pathCoord(animatedLine.lanePosX, animatedLine.localSegmentStartY ?? animatedLine.tipY)} L ${pathCoord(lastLaneAnchor?.x ?? animatedLine.lanePosX, (lastLaneAnchor?.y ?? animatedLine.tipY) - (lastLaneAnchor?.trimRadius ?? baseLaneTrimRadius))}`}
                                fill="none"
                                stroke={CANVAS_NEUTRAL_GRAY}
                                strokeWidth={unpushedStrokeWidth}
                                strokeDasharray={shouldDashLocalLane ? unpushedLaneDasharray : undefined}
                                strokeLinecap={shouldDashLocalLane ? 'round' : undefined}
                                className={drawPathArcClass}
                                style={{
                                  '--delay': `${brDelay}ms`,
                                } as React.CSSProperties}
                              />
                            )}

                            {/* Branch info — fades in as arc draws */}
                            <g className={fadeInInfoClass} style={{ '--delay': `${brDelay + INFO_OFFSET}ms` } as React.CSSProperties}>
                              {/* Prompt marker visuals render below commit nodes so branch dots stay on top. */}
                              {promptMarkerClusters.map((cluster) => {
                                const count = cluster.entries.length;
                                const firstEntry = cluster.entries[0];
                                const lastEntry = cluster.entries[count - 1];
                                const clusterKey = `prompt-clump-${b.name}-${firstEntry.item.index}-${lastEntry.item.index}`;
                                const memberKeys = cluster.entries.map((entry) => `prompt:${b.name}:slot-${entry.item.index}`);
                                const animatedAnchor = resolveAnimatedClumpAnchor(
                                  clusterKey,
                                  { x: cluster.x, y: cluster.y },
                                  memberKeys
                                );
                                const anchorX = animatedAnchor.x;
                                const anchorY = animatedAnchor.y;
                                const markerSize =
                                  scaledNodeSize;
                                const markerPath = promptMarkerPath(anchorX, anchorY, markerSize);
                                const markerStrokeWidth = 1.2;
                                const label = count > 1 ? clumpCountLabel(count) : '';
                                const labelFontSize = nodeLabelFontSize(scaledNodeSize, count);

                                return (
                                  <g key={`${clusterKey}-visual`} style={{ pointerEvents: 'none' }}>
                                    <path
                                      d={markerPath}
                                      fill="var(--background)"
                                      stroke="#14b8a6"
                                      strokeWidth={markerStrokeWidth}
                                      strokeLinejoin="round"
                                    />
                                    {count > 1 && (
                                      <text
                                        x={anchorX}
                                        y={anchorY}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        fill="#14b8a6"
                                        fontWeight={700}
                                        style={{
                                          fontVariantNumeric: 'tabular-nums',
                                          fontSize: `${labelFontSize / Math.max(layerCameraScale.x, 0.0001)}px`,
                                        }}
                                        data-base-font-size={labelFontSize}
                                      >
                                        {label}
                                      </text>
                                    )}
                                  </g>
                                );
                              })}

                              {/* Commit markers along branch */}
                              {commitDotClusters.map((cluster) => {
                                const vm = buildBranchClusterViewModel(b.name, cluster, branchEndDotIndex);
                                const motion = resolveClusterMotion(
                                  vm.clusterKey,
                                  { x: vm.preferredAnchorEntry.x, y: vm.preferredAnchorEntry.y },
                                  vm.memberKeys,
                                  vm.canExpandCluster,
                                );
                                const anchorX = motion.anchorX;
                                const anchorY = motion.anchorY;
                                const dotShouldUseCanvasFill =
                                  fullBranchShouldUseLocalGray ||
                                  cluster.entries.every((entry) => localCommitDotIndices.has(entry.item.index));
                                const dotFill = dotShouldUseCanvasFill ? CANVAS_UNPUSHED_NODE_FILL : CANVAS_NODE_FILL;
                                const dotStrokeWidth = CANVAS_NODE_STROKE_WIDTH;
                                const dotStrokeInset = dotStrokeWidth / 2;
                                const dotStrokeDasharray = undefined;
                                const clusterHasBranchTip =
                                  branchEndDotIndex != null &&
                                  cluster.entries.some((entry) => entry.item.index === branchEndDotIndex);
                                const clusterHasPrimaryCheckoutHead =
                                  checkedOutHeadSha != null &&
                                  cluster.entries.some((entry) => {
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
                                const clusterHasOtherWorktreeHead = cluster.entries.some((entry) => {
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
                                  cluster.entries.some((entry) => {
                                    const commitSha = entry.item.commit?.fullSha;
                                    return !!commitSha && selectedCommitShaSet.has(commitSha);
                                  });
                                const clusterHasSelectedHead =
                                  clusterHasBranchTip &&
                                  selectedBranchNameSet.has(b.name);

                                if (vm.count <= 1) {
                                  const commitEntry = vm.renderEntries[0] ?? cluster.entries[cluster.entries.length - 1];
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
                                  const targetCommitSha = commit?.fullSha ?? b.headSha;
                                  const tooltipAuthor = commit?.author ?? b.lastCommitAuthor;
                                  const tooltipDate = commit?.date ?? b.lastCommitDate;
                                  const tooltipSha = commit?.sha ?? b.headSha?.slice(0, 7) ?? '-------';
                                  const tooltipTitle = isStashCommit
                                    ? shortShaLabel(commit?.fullSha)
                                    : isUncommittedCommit
                                      ? 'Uncommited changes'
                                      : `Commit ${tooltipSha}`;
                                  const tooltipMessage = commit?.message;
                                  const showBranchAvatar = !!(
                                    commit &&
                                    b.lastCommitAuthorAvatar &&
                                    commit.author === b.lastCommitAuthor
                                  );
                                  const rectSize = commitRectSize(scaledNodeSize);
                                  const isGhostRect = isNonCommitPlaceholder;
                                  const ghostRectStrokeWidth = unpushedStrokeWidth;
                                  const singleCommitHitPad = worldPx(6);
                                  const singleCommitHit = collapsedClumpHitRect(
                                    anchorX,
                                    anchorY,
                                    rectSize,
                                    singleCommitHitPad,
                                  );
                                  return (
                                    <g key={vm.clusterKey}>
                                      <g
                                        style={{
                                          pointerEvents: 'none',
                                          opacity: (isUncommittedCommit || isStashCommit) && nodeDragDisplay?.nodeId === targetCommitSha ? 0 : 1,
                                        }}
                                      >
                                        {renderCommitNodeShapeRect({
                                          x: anchorX - rectSize.width / 2 + dotStrokeInset,
                                          y: anchorY - rectSize.height / 2 + dotStrokeInset,
                                          width: rectSize.width - dotStrokeWidth,
                                          height: rectSize.height - dotStrokeWidth,
                                          fill: getNodeFillColor(
                                            vm.clusterKey,
                                            isStashCommit || isUncommittedCommit || isLocalCommit || isUnpushedCommit
                                              ? CANVAS_UNPUSHED_NODE_FILL
                                              : dotFill,
                                            clusterCheckoutAccent,
                                            clusterHasSelectedCommit || clusterHasSelectedHead,
                                            isGhostRect,
                                          ),
                                          stroke: getNodeStrokeColor(
                                            vm.clusterKey,
                                            isGhostRect
                                              ? LOCAL_UNPUSHED_GRAY
                                              : stashOrUncommittedBaseStroke(isStashCommit, !!isUncommittedCommit),
                                            clusterCheckoutAccent,
                                            clusterHasSelectedCommit || clusterHasSelectedHead,
                                            isGhostRect,
                                          ),
                                          strokeWidth: isGhostRect ? ghostRectStrokeWidth : dotStrokeWidth,
                                          dashed: isGhostRect || isUncommittedCommit || isStashCommit,
                                        })}
                                      </g>
                                      <rect
                                        x={singleCommitHit.x}
                                        y={singleCommitHit.y}
                                        width={singleCommitHit.width}
                                        height={singleCommitHit.height}
                                        fill="transparent"
                                        style={{ cursor: (isUncommittedCommit || isStashCommit) && onCreateBranchFromNode ? 'grab' : 'pointer' }}
                                        onMouseDown={(event) => {
                                          if ((isUncommittedCommit || isStashCommit) && onCreateBranchFromNode) {
                                            beginNodeDrag(event, targetCommitSha, anchorX, anchorY);
                                          }
                                        }}
                                        onClick={(event) => {
                                          if (isNonCommitPlaceholder) {
                                            handleCommitNodeClick(event, b.headSha, b.name);
                                            return;
                                          }
                                          handleCommitNodeClick(
                                            event,
                                            targetCommitSha,
                                            clusterHasBranchTip ? b.name : undefined,
                                          );
                                        }}
                                        onDoubleClick={(event) => event.stopPropagation()}
                                        onMouseEnter={() => {
                                          handleNodeHoverEnter(vm.clusterKey, b.name);
                                          setTooltip({
                                            x: anchorX,
                                            y: anchorY,
                                            lines: isNonCommitPlaceholder
                                              ? [
                                                `No unique commits`,
                                                `Branch ${b.name}`,
                                                `Click to check out this branch`,
                                              ]
                                              : [
                                                tooltipTitle,
                                                tooltipMessage
                                                  ? truncatePrompt(tooltipMessage, COMMIT_TOOLTIP_PREVIEW_MAX)
                                                  : `@${tooltipAuthor}`,
                                                `@${tooltipAuthor} · ${fmtTooltipDate(tooltipDate)}`,
                                              ],
                                            avatarUrl:
                                              !isNonCommitPlaceholder && showBranchAvatar
                                                ? b.lastCommitAuthorAvatar
                                                : undefined,
                                            avatarFallback:
                                              !isNonCommitPlaceholder
                                                ? (tooltipAuthor?.charAt(0).toUpperCase() || '?')
                                                : undefined,
                                          });
                                        }}
                                        onMouseLeave={() => {
                                          handleNodeHoverLeave();
                                          setTooltip(null);
                                        }}
                                      />
                                    </g>
                                  );
                                }

                                const firstRealEntry = vm.renderEntries[0] ?? cluster.entries[0];
                                const lastRealEntry = vm.renderEntries[vm.renderEntries.length - 1] ?? cluster.entries[cluster.entries.length - 1];
                                const firstDate = firstRealEntry.item.commit?.date ?? b.lastCommitDate;
                                const lastDate = lastRealEntry.item.commit?.date ?? b.lastCommitDate;
                                const dateRangeLabel = fmtClumpDateRange(firstDate, lastDate);
                                const latestAuthor = lastRealEntry.item.commit?.author ?? b.lastCommitAuthor;
                                const latestCommitMessage = lastRealEntry.item.commit?.message
                                  ? truncatePrompt(lastRealEntry.item.commit.message, COMMIT_CLUSTER_PREVIEW_MAX)
                                  : `on ${b.name}`;

                                const showClumpAvatar = !!(
                                  b.lastCommitAuthorAvatar &&
                                  latestAuthor === b.lastCommitAuthor
                                );

                                const clusterHasUncommitted = vm.renderEntries.some(
                                  (entry) =>
                                    entry.item.commit?.kind === 'uncommitted' ||
                                    entry.item.commit?.fullSha === 'WORKING_TREE',
                                );
                                const clusterHasStash = vm.renderEntries.some(
                                  (entry) =>
                                    !!entry.item.commit && isStashCommitLike(entry.item.commit),
                                );
                                const clusterHasLocalCommits = vm.renderEntries.some((entry) =>
                                  localCommitDotIndices.has(entry.item.index)
                                );
                                const clusterHasUnpushedCommits = vm.renderEntries.some((entry) => {
                                  const c = entry.item.commit;
                                  if (!c || c.kind === 'uncommitted' || c.fullSha === 'WORKING_TREE') return false;
                                  if (isStashCommitLike(c)) return false;
                                  return isCommitUnpushed(c.fullSha, c.sha);
                                });
                                const isExpanded = motion.isExpanded;
                                const phase = motion.phase;
                                const phaseEased = motion.phaseEased;
                                const rectSize = nodeRectSize(vm.count);
                                // Expanded members represent single commits in grid layout.
                                const localRect = commitRectSize(scaledNodeSize, 0);

                                return (
                                  <g key={vm.clusterKey}>
                                    {!isExpanded && (
                                      <g style={{ pointerEvents: 'none' }}>
                                        {renderCommitNodeShapeRect({
                                          x: anchorX - rectSize.width / 2 + dotStrokeInset,
                                          y: anchorY - rectSize.height / 2 + dotStrokeInset,
                                          width: rectSize.width - dotStrokeWidth,
                                          height: rectSize.height - dotStrokeWidth,
                                          fill: getNodeFillColor(
                                            vm.clusterKey,
                                            clusterHasStash || clusterHasLocalCommits || clusterHasUnpushedCommits
                                              ? CANVAS_UNPUSHED_NODE_FILL
                                              : dotFill,
                                            clusterCheckoutAccent,
                                            clusterHasSelectedCommit || clusterHasSelectedHead,
                                          ),
                                          stroke: getNodeStrokeColor(
                                            vm.clusterKey,
                                            clusterLocalSyntheticStroke(clusterHasUncommitted, clusterHasStash),
                                            clusterCheckoutAccent,
                                            clusterHasSelectedCommit || clusterHasSelectedHead,
                                          ),
                                          strokeWidth: dotStrokeWidth,
                                          dashed: clusterHasUncommitted || clusterHasStash || !!dotStrokeDasharray,
                                        })}
                                      </g>
                                    )}

                                    {/* Collapsed-only overlay hit target (on top) so clicks never fall through. */}
                                    {!isExpanded && (() => {
                                      const pad = worldPx(6);
                                      const hit = collapsedClumpHitRect(
                                        anchorX,
                                        anchorY,
                                        rectSize,
                                        pad
                                      );
                                      return (
                                        <rect
                                          x={hit.x}
                                          y={hit.y}
                                          width={hit.width}
                                          height={hit.height}
                                          fill="transparent"
                                          style={{ cursor: vm.canExpandCluster ? 'pointer' : 'default' }}
                                          onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                                          onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                                          onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            if (vm.canExpandCluster) toggleClumpExpanded(vm.clusterKey);
                                          }}
                                          onDoubleClick={(event) => {
                                            event.preventDefault();
                                            event.stopPropagation();
                                          }}
                                          onMouseEnter={() => {
                                            handleNodeHoverEnter(vm.clusterKey, b.name);
                                            setTooltip({
                                              x: anchorX,
                                              y: anchorY,
                                              lines: [`${vm.count} commits`, latestCommitMessage, `and ${vm.count - 1} more commits`, `@${latestAuthor} · ${dateRangeLabel}`],
                                              avatarUrl: showClumpAvatar ? b.lastCommitAuthorAvatar : undefined,
                                              avatarFallback: latestAuthor?.charAt(0).toUpperCase() || '?',
                                            });
                                          }}
                                          onMouseLeave={() => {
                                            handleNodeHoverLeave();
                                            setTooltip(null);
                                          }}
                                        />
                                      );
                                    })()}

                                    {isExpanded && (
                                      <g>
                                        {vm.renderEntries.map((entry) => {
                                          const commit = entry.item.commit;
                                          if (!commit?.fullSha) return null;
                                          const commitCheckoutAccent = mergeCheckoutAccent(
                                            checkedOutHeadSha != null &&
                                              (shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                                                shaMatchesGitRef(commit.sha, checkedOutHeadSha)),
                                            b.name,
                                            commit.fullSha,
                                            commit.sha,
                                          );
                                          const tooltipAuthor = commit.author ?? b.lastCommitAuthor;
                                          const tooltipDate = commit.date ?? b.lastCommitDate;
                                          const tooltipSha = commit.sha ?? commit.fullSha.slice(0, 7);
                                          const tooltipMessage = commit.message;
                                          const isUncommittedCommit = commit.kind === 'uncommitted';
                                          const isStashCommit = isStashCommitLike(commit);
                                          const isLocalCommit = localCommitDotIndices.has(entry.item.index);
                                          const tooltipTitle = isStashCommit
                                            ? `${shortShaLabel(commit.fullSha)} — ⌘-click or double-click to restore`
                                            : isUncommittedCommit
                                              ? 'Uncommited changes'
                                              : `Commit ${tooltipSha}`;

                                          const memberPose = interpolateExpandedEntryPose(
                                            { x: anchorX, y: anchorY },
                                            { x: entry.x, y: entry.y },
                                            phase,
                                            phaseEased,
                                          );
                                          const commitKey = `branch-commit:${b.name}:${commit.fullSha}`;

                                          return (
                                            <g
                                              key={commitKey}
                                              transform={`translate(${memberPose.x} ${memberPose.y})`}
                                              style={{ ...clumpAnimStyleForPhase(phase), pointerEvents: phase === 'expanded' ? 'auto' : 'none' }}
                                              opacity={memberPose.opacity}
                                            >
                                              <g transform={`scale(${memberPose.scale})`}>
                                                <g
                                                  style={{ cursor: 'pointer' }}
                                                  onClick={(event) =>
                                                    handleCommitNodeClick(
                                                      event,
                                                      commit.fullSha,
                                                      clusterHasBranchTip && commit.fullSha === b.headSha
                                                        ? b.name
                                                        : undefined,
                                                    )
                                                  }
                                                  onDoubleClick={(event) => event.stopPropagation()}
                                                  onMouseEnter={() => {
                                                    handleNodeHoverEnter(commitKey, b.name);
                                                    setTooltip({
                                                      x: entry.x,
                                                      y: entry.y,
                                                      lines: [
                                                        tooltipTitle,
                                                        tooltipMessage
                                                          ? truncatePrompt(tooltipMessage, COMMIT_TOOLTIP_PREVIEW_MAX)
                                                          : `@${tooltipAuthor}`,
                                                        `@${tooltipAuthor} · ${fmtTooltipDate(tooltipDate)}`,
                                                      ],
                                                      avatarFallback: tooltipAuthor?.charAt(0).toUpperCase() || '?',
                                                    });
                                                  }}
                                                  onMouseLeave={() => {
                                                    handleNodeHoverLeave();
                                                    setTooltip(null);
                                                  }}
                                                >
                                                  {renderCommitNodeShapeRect({
                                                    x: -localRect.width / 2 + dotStrokeInset,
                                                    y: -localRect.height / 2 + dotStrokeInset,
                                                    width: localRect.width - dotStrokeWidth,
                                                    height: localRect.height - dotStrokeWidth,
                                                    fill: getNodeFillColor(
                                                      commitKey,
                                                      isLocalCommit ? CANVAS_UNPUSHED_NODE_FILL : dotFill,
                                                      commitCheckoutAccent,
                                                      selectedCommitShaSet.has(commit.fullSha) ||
                                                      (clusterHasSelectedHead && commit.fullSha === b.headSha),
                                                    ),
                                                    stroke: getNodeStrokeColor(
                                                      commitKey,
                                                      isUncommittedCommit ? CHECKED_OUT_SELECTION_STROKE : CANVAS_NODE_STROKE,
                                                      commitCheckoutAccent,
                                                      selectedCommitShaSet.has(commit.fullSha) ||
                                                      (clusterHasSelectedHead && commit.fullSha === b.headSha),
                                                    ),
                                                    strokeWidth: dotStrokeWidth,
                                                    dashed: isUncommittedCommit || !!dotStrokeDasharray,
                                                  })}
                                                </g>
                                              </g>
                                            </g>
                                          );
                                        })}
                                      </g>
                                    )}
                                  </g>
                                );
                              })}
                              {/* Prompt marker hit areas stay on top so hover remains easy. */}
                              {promptMarkerClusters.map((cluster) => {
                                const count = cluster.entries.length;
                                const firstEntry = cluster.entries[0];
                                const lastEntry = cluster.entries[count - 1];
                                const clusterKey = `prompt-clump-${b.name}-${firstEntry.item.index}-${lastEntry.item.index}`;
                                const memberKeys = cluster.entries.map((entry) => `prompt:${b.name}:slot-${entry.item.index}`);
                                const animatedAnchor = resolveAnimatedClumpAnchor(
                                  clusterKey,
                                  { x: cluster.x, y: cluster.y },
                                  memberKeys
                                );
                                const anchorX = animatedAnchor.x;
                                const anchorY = animatedAnchor.y;
                                const hitSize = scaledHoverHitSize;

                                if (count === 1) {
                                  const marker = lastEntry.item.marker;
                                  return (
                                    <g key={`${clusterKey}-hit`}>
                                      <rect
                                        x={anchorX - hitSize / 2}
                                        y={anchorY - hitSize / 2}
                                        width={hitSize}
                                        height={hitSize}
                                        fill="transparent"
                                        style={{ cursor: 'pointer' }}
                                        onMouseEnter={() =>
                                          setTooltip({
                                            x: anchorX,
                                            y: anchorY,
                                            lines: [
                                              'Prompt',
                                              truncatePrompt(marker.prompt, PROMPT_TOOLTIP_PREVIEW_MAX),
                                              `${marker.agent} · ${fmtTooltipDate(marker.timestamp)}`,
                                            ],
                                          })
                                        }
                                        onMouseLeave={() => setTooltip(null)}
                                      />
                                    </g>
                                  );
                                }

                                const firstDate = firstEntry.item.marker.timestamp;
                                const lastDate = lastEntry.item.marker.timestamp;
                                const dateRangeLabel = fmtClumpDateRange(firstDate, lastDate);
                                const latestPrompt = truncatePrompt(lastEntry.item.marker.prompt, PROMPT_CLUSTER_PREVIEW_MAX);
                                return (
                                  <g key={`${clusterKey}-hit`}>
                                    <rect
                                      x={anchorX - hitSize / 2}
                                      y={anchorY - hitSize / 2}
                                      width={hitSize}
                                      height={hitSize}
                                      fill="transparent"
                                      style={{ cursor: 'pointer' }}
                                      onMouseEnter={() =>
                                        setTooltip({
                                          x: anchorX,
                                          y: anchorY,
                                          lines: [`${count} prompts`, latestPrompt, `and ${count - 1} more prompts`, `${lastEntry.item.marker.agent} · ${dateRangeLabel}`],
                                        })
                                      }
                                      onMouseLeave={() => setTooltip(null)}
                                    />
                                  </g>
                                );
                              })}
                              {showClockIcon && (
                                <g style={{ pointerEvents: 'none' }}>
                                  <circle cx={clockPoint.x} cy={clockPoint.y} r={4.2} stroke={CANVAS_NEUTRAL_GRAY} strokeWidth={1.2} fill="none" />
                                  <line x1={clockPoint.x} y1={clockPoint.y - 2.9} x2={clockPoint.x} y2={clockPoint.y} stroke={CANVAS_NEUTRAL_GRAY} strokeWidth={1.2} strokeLinecap="round" />
                                  <line x1={clockPoint.x} y1={clockPoint.y} x2={clockPoint.x + 2.3} y2={clockPoint.y + 1.5} stroke={CANVAS_NEUTRAL_GRAY} strokeWidth={1.2} strokeLinecap="round" />
                                </g>
                              )}
                            </g>

                            {/* Status labels are conflict-aware upstream; conflict indicator was removed. */}
                          </g>
                        );
                      });
                    })()}
                  </g>

                  <MapSvgCanvasLayerStack
                    checkedOutConnectorLayerProps={checkedOutConnectorLayerProps}
                    branchNodeOverlayLayerProps={branchNodeOverlayLayerProps}
                    mainNodeOverlayLayerProps={mainNodeOverlayLayerProps}
                    nodeLabelsLayerProps={nodeLabelsLayerProps}
                    collapseControlsLayerProps={collapseControlsLayerProps}
                  />
      </MapSvgCanvasShell>
      <MapSvgActionOverlays
        bottomChromeProps={bottomChromeProps}
        overlaysLayerProps={overlaysLayerProps}
      />
    </div>
  );
}
