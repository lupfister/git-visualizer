import React from 'react';
import { commitRectSize } from './LayoutSvg';
import type { Branch, WorktreeInfo } from '../../types';
import type {
  BranchHeadTarget,
  CommitSelectionTarget,
  MarqueeDragState,
  MarqueeRect,
  NodeDragState,
} from './MapSvg.types';
import { getCameraScale } from './MapSvg.utils';

export function normalizeMarqueeRect(drag: MarqueeDragState): MarqueeRect {
  const left = Math.min(drag.startX, drag.currentX);
  const top = Math.min(drag.startY, drag.currentY);
  const width = Math.abs(drag.currentX - drag.startX);
  const height = Math.abs(drag.currentY - drag.startY);
  return { left, top, width, height };
}

type SelectionProjection = {
  graphOffsetX: number;
  graphOffsetY: number;
  graphContentTranslateX: number;
  graphContentTranslateY: number;
  isHorizontal: boolean;
};

type SelectionContext = {
  projection: SelectionProjection;
  cameraScale: { x: number; y: number };
  halfWidthPx: number;
  halfHeightPx: number;
  hitPaddingPx: number;
};

export function getMarqueeSelectionContext(args: {
  selectionProjection: SelectionProjection;
  zoom: number;
  scaledNodeSize: number;
}): SelectionContext {
  const { selectionProjection, zoom, scaledNodeSize } = args;
  const cameraScale = getCameraScale(zoom, selectionProjection.isHorizontal);
  const nodeRect = commitRectSize(scaledNodeSize);
  return {
    projection: selectionProjection,
    cameraScale,
    halfWidthPx: (nodeRect.width / 2) * cameraScale.x,
    halfHeightPx: (nodeRect.height / 2) * cameraScale.y,
    hitPaddingPx: 3,
  };
}

export function getMarqueeSelection<T extends { point: { x: number; y: number } }>(
  targets: T[],
  nextRect: MarqueeRect,
  pan: { x: number; y: number },
  context: SelectionContext,
  pickValue: (target: T) => string,
): string[] {
  const { projection, cameraScale, halfWidthPx, halfHeightPx, hitPaddingPx } = context;
  return targets
    .filter((target) => {
      const centerX =
        pan.x +
        projection.graphOffsetX +
        (projection.graphContentTranslateX + target.point.x) * cameraScale.x;
      const centerY =
        pan.y +
        projection.graphOffsetY +
        (projection.graphContentTranslateY + target.point.y) * cameraScale.y;
      const nodeLeft = centerX - halfWidthPx - hitPaddingPx;
      const nodeRight = centerX + halfWidthPx + hitPaddingPx;
      const nodeTop = centerY - halfHeightPx - hitPaddingPx;
      const nodeBottom = centerY + halfHeightPx + hitPaddingPx;
      return (
        nodeLeft <= nextRect.left + nextRect.width &&
        nodeRight >= nextRect.left &&
        nodeTop <= nextRect.top + nextRect.height &&
        nodeBottom >= nextRect.top
      );
    })
    .map(pickValue);
}

export function applyMarqueeSelection(args: {
  nextRect: MarqueeRect;
  additive: boolean;
  branchTargets: BranchHeadTarget[];
  commitTargets: CommitSelectionTarget[];
  pan: { x: number; y: number };
  context: SelectionContext;
  baseSelection: { branchNames: string[]; commitShas: string[] };
  setSelectedBranchNames: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedCommitShas: React.Dispatch<React.SetStateAction<string[]>>;
  setMergeTargetCommitSha: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const {
    nextRect,
    additive,
    branchTargets,
    commitTargets,
    pan,
    context,
    baseSelection,
    setSelectedBranchNames,
    setSelectedCommitShas,
    setMergeTargetCommitSha,
  } = args;

  const branchSelection = getMarqueeSelection(
    branchTargets,
    nextRect,
    pan,
    context,
    (target) => target.branchName,
  );
  const commitSelection = getMarqueeSelection(
    commitTargets,
    nextRect,
    pan,
    context,
    (target) => target.commitSha,
  );

  const nextBranchSelection = additive
    ? Array.from(new Set([...baseSelection.branchNames, ...branchSelection]))
    : branchSelection;
  const nextCommitSelection = additive
    ? Array.from(new Set([...baseSelection.commitShas, ...commitSelection]))
    : Array.from(new Set(commitSelection));

  setSelectedBranchNames(nextBranchSelection);
  setSelectedCommitShas(nextCommitSelection);
  if (!additive) {
    setMergeTargetCommitSha(commitSelection[commitSelection.length - 1] ?? null);
  }
}

export function beginMarqueeSelection(args: {
  event: React.MouseEvent<HTMLDivElement>;
  additive: boolean;
  container: HTMLDivElement | null;
  selectedBranchNames: string[];
  selectedCommitShas: string[];
  marqueeDragRef: React.MutableRefObject<MarqueeDragState | null>;
  marqueeBaseSelectionRef: React.MutableRefObject<{ branchNames: string[]; commitShas: string[] }>;
  setTooltip: React.Dispatch<React.SetStateAction<unknown>>;
  setMarqueeRect: React.Dispatch<React.SetStateAction<MarqueeRect | null>>;
  setIsMarqueeSelecting: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    event,
    additive,
    container,
    selectedBranchNames,
    selectedCommitShas,
    marqueeDragRef,
    marqueeBaseSelectionRef,
    setTooltip,
    setMarqueeRect,
    setIsMarqueeSelecting,
  } = args;
  if (!container) return;
  const bounds = container.getBoundingClientRect();
  const startX = event.clientX - bounds.left;
  const startY = event.clientY - bounds.top;
  marqueeDragRef.current = {
    startX,
    startY,
    currentX: startX,
    currentY: startY,
    additive,
    moved: false,
  };
  marqueeBaseSelectionRef.current = {
    branchNames: additive ? selectedBranchNames : [],
    commitShas: additive ? selectedCommitShas : [],
  };
  setTooltip(null);
  setMarqueeRect({ left: startX, top: startY, width: 0, height: 0 });
  setIsMarqueeSelecting(true);
}

export function beginNodeDrag(args: {
  event: React.MouseEvent;
  nodeId: string;
  scrollContainer: HTMLDivElement | null;
  svg: SVGSVGElement | null;
  branches: Branch[];
  checkedOutRef: { branchName?: string | null; headSha?: string | null } | null | undefined;
  onCreateBranchFromNode?: (nodeId: string, branchName: string) => Promise<void>;
  onMoveNodeBackToBranch?: (targetBranchName: string) => Promise<void>;
  nodeDragRef: React.MutableRefObject<NodeDragState | null>;
}) {
  const {
    event,
    nodeId,
    scrollContainer,
    svg,
    branches,
    checkedOutRef,
    onCreateBranchFromNode,
    onMoveNodeBackToBranch,
    nodeDragRef,
  } = args;

  if (!onCreateBranchFromNode && !onMoveNodeBackToBranch) return;
  event.stopPropagation();
  if (!scrollContainer) return;

  const bounds = scrollContainer.getBoundingClientRect();
  const stashMatch = /^STASH:(\d+)$/.exec(nodeId);
  const stashIndex = stashMatch ? parseInt(stashMatch[1], 10) : undefined;
  const parentBranchName =
    nodeId === 'WORKING_TREE'
      ? (checkedOutRef?.branchName ?? null)
      : stashMatch
        ? (branches.find((b) => b.name === `*Stash:${stashMatch[1]}`)?.parentBranch ?? null)
        : null;
  const parentSha =
    nodeId === 'WORKING_TREE'
      ? (checkedOutRef?.headSha ?? null)
      : stashMatch
        ? (branches.find((b) => b.name === `*Stash:${stashMatch[1]}`)?.divergedFromSha ?? null)
        : null;

  const nodeElement =
    svg?.querySelector<SVGGElement>(`[data-drag-id="${CSS.escape(nodeId)}"]`) ?? null;
  const nodeLabelElement =
    svg?.querySelector<SVGTextElement>(`[data-drag-label-id="${CSS.escape(nodeId)}"]`) ?? null;

  nodeDragRef.current = {
    nodeId,
    stashIndex,
    parentBranchName,
    parentSha,
    containerLeft: bounds.left,
    containerTop: bounds.top,
    startClientX: event.clientX,
    startClientY: event.clientY,
    currentClientX: event.clientX,
    currentClientY: event.clientY,
    isDragging: false,
    isDone: false,
    nodeElement,
    nodeLabelElement,
  };
}

export function handleCommitNodeClick(args: {
  event: React.MouseEvent;
  commitSha?: string;
  branchName?: string;
  clearTransientHoverState: () => void;
  freshCopyBranchNames: Set<string>;
  onSwitchToWorktree?: (worktreePath: string) => void | Promise<void>;
  findOtherWorktreeForCommit: (branchName: string, commitFullSha: string, commitSha: string) => WorktreeInfo | null;
  findWorktreeWithBranchCheckedOut: (branchName: string) => WorktreeInfo | null;
  findOtherWorktreeByHeadSha: (commitFullSha: string, commitShortSha: string) => WorktreeInfo | null;
  setSelectedBranchNames: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedCommitShas: React.Dispatch<React.SetStateAction<string[]>>;
  setMergeTargetCommitSha: React.Dispatch<React.SetStateAction<string | null>>;
  onCommitClick?: (target: { commitSha: string; branchName?: string }) => void;
}) {
  const {
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
  } = args;

  event.stopPropagation();
  clearTransientHoverState();
  const shouldCheckout = event.ctrlKey || event.metaKey || event.detail >= 2;

  if (shouldCheckout && commitSha && commitSha !== 'WORKING_TREE' && onSwitchToWorktree) {
    const shortSha = commitSha.length >= 40 ? commitSha.slice(0, 7) : commitSha;
    let otherWt: WorktreeInfo | null = null;
    if (branchName) {
      otherWt = findOtherWorktreeForCommit(branchName, commitSha, shortSha);
      if (!otherWt) {
        otherWt = findWorktreeWithBranchCheckedOut(branchName);
      }
    } else {
      otherWt = findOtherWorktreeByHeadSha(commitSha, shortSha);
    }
    if (otherWt) {
      void onSwitchToWorktree(otherWt.path);
      return;
    }
  }

  const isFreshCopyBranchSelection = !!(branchName && freshCopyBranchNames.has(branchName));
  if (branchName) {
    if (event.shiftKey) {
      setSelectedBranchNames((prev) =>
        prev.includes(branchName)
          ? prev.filter((name) => name !== branchName)
          : [...prev, branchName]
      );
    } else {
      setSelectedBranchNames([branchName]);
    }
  }

  if (!commitSha) return;
  if (isFreshCopyBranchSelection) {
    if (!event.shiftKey) {
      setSelectedCommitShas([]);
      setMergeTargetCommitSha(null);
    }
    if (shouldCheckout) {
      onCommitClick?.({ commitSha, branchName });
    }
    return;
  }

  setSelectedCommitShas((prev) => {
    if (event.shiftKey) {
      return prev.includes(commitSha)
        ? prev.filter((sha) => sha !== commitSha)
        : [...prev, commitSha];
    }
    return [commitSha];
  });
  setMergeTargetCommitSha(commitSha);
  if (!branchName && !event.shiftKey) {
    setSelectedBranchNames([]);
  }
  if (shouldCheckout) {
    onCommitClick?.({ commitSha, branchName });
  }
}
