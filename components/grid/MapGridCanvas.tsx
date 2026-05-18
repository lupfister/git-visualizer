import { memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, Dispatch, MouseEvent, MutableRefObject, ReactNode, RefObject, SetStateAction, WheelEvent } from 'react';
import { CARD_BODY_TOP_OFFSET, CARD_HEIGHT, CARD_WIDTH, CONNECTOR_COLOR } from './LayoutGrid';
import {
  applyPersistedPathStrings,
  collectPathStringsForPersistence,
  type ConnectorPathCacheEntry,
} from './mapGridConnectorPathCache';
import { MapGridConnectorLayer } from './MapGridConnectorLayer';
import {
  pulseMapGridBackgroundActivity,
  setMapGridBackgroundActivity,
} from './mapGridBackgroundActivity';
import {
  buildConnectorPathCacheScopeKey,
  computeConnectorLayoutDigest,
  mergePersistedConnectorPaths,
  readPersistedConnectorPaths,
} from './mapGridConnectorPathPersistence';
import { buildMapGridCardSlotAssignments, computeMapGridCardSlotCount } from './MapGridCardVirtualizer';
import {
  cn,
  computeMapGridInvZoom,
  computeViewportCullBounds,
} from './mapGridUtils';
import type { ConnectorFace, Node, NodePositionOverrides } from './LayoutGrid';
import type { MapGridCameraState } from './useMapGridCamera';
import { getNodePositionOverride } from './nodePositionOverrides';

const EMPTY_NODE_POSITION_OVERRIDES: NodePositionOverrides = {};
const EMPTY_DRAG_PREVIEW: Record<string, { x: number; y: number }> = {};
const EMPTY_ADJUSTED_ANCHOR_MAP = new Map<string, { x: number; y: number }>();

type MapGridCommitWrapperProps = {
  fadeIn: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onPointerDown?: React.PointerEventHandler<HTMLDivElement>;
  onPointerMove?: React.PointerEventHandler<HTMLDivElement>;
  onPointerUp?: React.PointerEventHandler<HTMLDivElement>;
  onPointerCancel?: React.PointerEventHandler<HTMLDivElement>;
  dataCommitCard?: string;
  children: ReactNode;
};

/*
 * Non-animating cards must NOT declare any `transition` (or any other
 * layer-promoting property) — WebKit otherwise promotes every visible card
 * into its own composition layer and pan composite cost scales linearly
 * with card count. Only the brief cluster open/close fade window pays for a
 * transition and a 0→1 opacity ramp.
 *
 * We keep this as a single component (rather than swapping components on
 * `fadeIn`) so the underlying <div> is reused and we don't unmount/remount
 * the entire card subtree when the fade animation ends.
 */
function MapGridCommitWrapper({
  fadeIn,
  className,
  style,
  onClick,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
  dataCommitCard,
  children,
}: MapGridCommitWrapperProps) {
  const [opaque, setOpaque] = useState(!fadeIn);
  useLayoutEffect(() => {
    if (!fadeIn) {
      setOpaque(true);
      return;
    }
    setOpaque(false);
    let innerRaf: number | null = null;
    const outerRaf = requestAnimationFrame(() => {
      innerRaf = requestAnimationFrame(() => setOpaque(true));
    });
    return () => {
      cancelAnimationFrame(outerRaf);
      if (innerRaf != null) cancelAnimationFrame(innerRaf);
    };
  }, [fadeIn]);
  const fadeStyle: CSSProperties | undefined = fadeIn
    ? { opacity: opaque ? 1 : 0, transition: 'opacity 240ms ease-out' }
    : undefined;
  return (
    <div
      className={className}
      data-commit-card={dataCommitCard}
      onClick={onClick}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      style={fadeStyle ? { ...style, ...fadeStyle } : style}
    >
      {children}
    </div>
  );
}

const COMMIT_DATE_FORMATTER = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
});

const CARD_LAYOUT_HEIGHT = CARD_BODY_TOP_OFFSET + CARD_HEIGHT + 4;

type CommitCardProps = {
  node: Node;
  cardLeft: number;
  cardTop: number;
  displayZoom: number;
  commitCornerRadiusPx: number;
  lineStrokeWidth: number;
  labelTopPx: number;
  selectedShaSet: Set<string>;
  normalizedSearchQuery: string;
  matchingNodeIds: Set<string>;
  focusedCommitId: string | null;
  manuallyOpenedClumps: Set<string>;
  manuallyClosedClumps: Set<string>;
  defaultCollapsedClumps: Set<string>;
  leadByClusterKey: Map<string, string>;
  clusterKeyByCommitId: Map<string, string>;
  clusterCounts: Map<string, number>;
  openingClumpAnimations: Set<string>;
  commitIdsWithRenderedAncestry: Set<string>;
  nodeWarnings: Map<string, string[]>;
  connectorParentShas: Set<string>;
  branchStartShas: Set<string>;
  branchOffNodeShas: Set<string>;
  crossBranchOutgoingShas: Set<string>;
  branchBaseCommitByName: Map<string, { id: string } | undefined>;
  branchStartAccentClass: string;
  connectorParentAccentClass: string;
  unpushedCommitShasSetByBranch: Map<string, Set<string>>;
  remoteCommitShas: Set<string>;
  checkedOutHeadSha: string | null;
  onCommitCardClick: (event: MouseEvent, node: Node) => void;
  onNodePointerDown: (event: React.PointerEvent<HTMLDivElement>, node: Node) => void;
  onNodePointerMove: (event: React.PointerEvent<HTMLDivElement>) => void;
  onNodePointerUp: (event: React.PointerEvent<HTMLDivElement>) => void;
  onClusterToggle: (clusterKey: string) => void;
  /** Skip search-hit scale transform during camera motion (reduces compositor layers). */
  suppressSearchMatchScale?: boolean;
};

const MapGridCommitCard = memo(function MapGridCommitCard({
  node,
  cardLeft,
  cardTop,
  displayZoom,
  commitCornerRadiusPx,
  lineStrokeWidth,
  labelTopPx,
  selectedShaSet,
  normalizedSearchQuery,
  matchingNodeIds,
  focusedCommitId,
  manuallyOpenedClumps,
  manuallyClosedClumps,
  defaultCollapsedClumps,
  leadByClusterKey,
  clusterKeyByCommitId,
  clusterCounts,
  openingClumpAnimations,
  commitIdsWithRenderedAncestry,
  nodeWarnings,
  connectorParentShas,
  branchStartShas,
  branchOffNodeShas,
  crossBranchOutgoingShas,
  branchBaseCommitByName,
  branchStartAccentClass,
  connectorParentAccentClass,
  unpushedCommitShasSetByBranch,
  remoteCommitShas,
  checkedOutHeadSha,
  onCommitCardClick,
  onNodePointerDown,
  onNodePointerMove,
  onNodePointerUp,
  onClusterToggle,
  suppressSearchMatchScale = false,
}: CommitCardProps) {
  const commitId = node.commit.id;
  const visualId = node.commit.visualId;
  const branchName = node.commit.branchName;
  const clusterKey = clusterKeyByCommitId.get(visualId) ?? null;
  const isClusterOpen = clusterKey
    ? manuallyOpenedClumps.has(clusterKey) ||
      (!defaultCollapsedClumps.has(clusterKey) && !manuallyClosedClumps.has(clusterKey))
    : false;
  const isClusterLead = clusterKey ? leadByClusterKey.get(clusterKey) === visualId : false;
  const shouldAnimateOpeningClump =
    clusterKey != null && isClusterOpen && !isClusterLead && openingClumpAnimations.has(clusterKey);
  const clumpCount = clusterKey ? clusterCounts.get(clusterKey) ?? 1 : 1;
  const hasRenderedAncestry = commitIdsWithRenderedAncestry.has(commitId);
  const nodeWarningsForCard = nodeWarnings.get(commitId) ?? [];
  const showDataShapeError = nodeWarningsForCard.length > 0 && !hasRenderedAncestry;
  const isSelectedCommit = selectedShaSet.has(commitId);
  const isLocalUncommitted = commitId === 'WORKING_TREE' || node.commit.kind === 'uncommitted';
  const isStashedCommit = node.commit.kind === 'stash' || commitId.startsWith('STASH:');
  const isEmptyBranchNode = node.commit.kind === 'branch-created' && commitId.startsWith('BRANCH_HEAD:');
  const isUnpushedCommit =
    isLocalUncommitted || (unpushedCommitShasSetByBranch.get(branchName)?.has(commitId) ?? false);
  const isExplicitRemoteCommit = node.commit.isRemote === true;
  const isRemoteCommit =
    !isLocalUncommitted &&
    !isUnpushedCommit &&
    (isExplicitRemoteCommit || remoteCommitShas.has(commitId));
  const isCheckedOutHeadNode =
    !isLocalUncommitted && checkedOutHeadSha != null && commitId === checkedOutHeadSha;
  const isFocused = focusedCommitId === commitId;
  const isSearchActive = !!normalizedSearchQuery;
  const isSearchMatch = isSearchActive && matchingNodeIds.has(commitId);
  const warningsTitle = nodeWarningsForCard.join('\n');
  const borderAccentClass =
    branchOffNodeShas.has(commitId) ||
    branchStartShas.has(commitId) ||
    crossBranchOutgoingShas.has(commitId)
      ? branchStartAccentClass
      : connectorParentShas.has(commitId)
        ? connectorParentAccentClass
        : branchBaseCommitByName.get(branchName)?.id === commitId
          ? 'border-amber-500'
          : showDataShapeError
            ? 'border-red-500'
            : '';
  const stashIndexMatch = /^STASH:(\d+)$/.exec(node.commit.id);
  const stashHeaderLabel = stashIndexMatch ? `Stash ${Number.parseInt(stashIndexMatch[1], 10) + 1}` : null;
  const stashBodyMessage = isStashedCommit
    ? (node.commit.message.trim() && node.commit.message.trim() !== 'git-visualizer'
        ? node.commit.message
        : 'Stashed changes')
    : node.commit.message;

  const isCheckedOutCommit = isLocalUncommitted || isCheckedOutHeadNode;
  const hideCheckedOutOutline = isCheckedOutHeadNode && !isSelectedCommit;
  const checkedOutAccentActive = isCheckedOutCommit && !isSelectedCommit;
  const remoteAccentActive = isRemoteCommit && !checkedOutAccentActive && !isSelectedCommit;

  const selectedCommitTextClass = checkedOutAccentActive
    ? 'text-checked'
    : remoteAccentActive
      ? 'text-remote'
      : isSelectedCommit
        ? 'text-select'
        : 'text-foreground';
  const selectedCommitTextStyle: CSSProperties | undefined = checkedOutAccentActive
    ? { color: 'var(--checked)' }
    : remoteAccentActive
      ? { color: 'var(--remote)' }
      : isSelectedCommit
        ? { color: 'var(--select)' }
        : undefined;
  const focusedCommitBorderColor = selectedCommitTextStyle?.color ?? 'var(--foreground)';
  const commitBorderColor = hideCheckedOutOutline
    ? 'transparent'
    : isFocused
      ? focusedCommitBorderColor
      : remoteAccentActive
        ? 'var(--remote)'
        : isSelectedCommit
          ? 'var(--select)'
          : CONNECTOR_COLOR;
  const nodeBorderWidth = isStashedCommit || isEmptyBranchNode || isLocalUncommitted
    ? 1.25 / displayZoom
    : lineStrokeWidth;
  const isDashedOutline = isStashedCommit || isLocalUncommitted || isEmptyBranchNode;
  const dashedStrokeDasharray = `${12 / displayZoom} ${6 / displayZoom}`;
  const dashedStrokeInset = nodeBorderWidth / 2;
  const dashedOutlinePath = useMemo(
    () => `M ${dashedStrokeInset} ${dashedStrokeInset} H ${CARD_WIDTH - dashedStrokeInset - commitCornerRadiusPx} Q ${CARD_WIDTH - dashedStrokeInset} ${dashedStrokeInset} ${CARD_WIDTH - dashedStrokeInset} ${dashedStrokeInset + commitCornerRadiusPx} V ${176 - dashedStrokeInset - commitCornerRadiusPx} Q ${CARD_WIDTH - dashedStrokeInset} ${176 - dashedStrokeInset} ${CARD_WIDTH - dashedStrokeInset - commitCornerRadiusPx} ${176 - dashedStrokeInset} H ${dashedStrokeInset + commitCornerRadiusPx} Q ${dashedStrokeInset} ${176 - dashedStrokeInset} ${dashedStrokeInset} ${176 - dashedStrokeInset - commitCornerRadiusPx} V ${dashedStrokeInset}`,
    [commitCornerRadiusPx, dashedStrokeInset],
  );
  const unpushedCommitTextStyle: CSSProperties | undefined =
    isUnpushedCommit && !checkedOutAccentActive && !isSelectedCommit
      ? { color: 'var(--muted-foreground)' }
      : undefined;
  const cardTextStyle = selectedCommitTextStyle ?? unpushedCommitTextStyle;

  const wrapperClassName = cn(
    'group absolute z-20',
    isSearchActive && !isSearchMatch ? 'opacity-10' : '',
    isSearchActive && isSearchMatch && !suppressSearchMatchScale ? 'scale-[1.01]' : '',
    isFocused ? 'z-30' : '',
  );

  const headerLabel = isStashedCommit && stashHeaderLabel
    ? stashHeaderLabel
    : node.commit.branchName
      ? `${node.commit.branchName}/${node.commit.id.slice(0, 7)}`
      : node.commit.id.slice(0, 7);

  const bodyMessage = isClusterLead && isClusterOpen
    ? stashBodyMessage
    : isClusterLead && clumpCount > 1
      ? `${stashBodyMessage} +${clumpCount - 1}`
      : stashBodyMessage;

  const handleClick = (event: MouseEvent) => onCommitCardClick(event, node);
  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => onNodePointerDown(event, node);
  const handleClusterButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    if (!clusterKey) return;
    onClusterToggle(clusterKey);
  };
  const scaledTextStyle: CSSProperties = {
    fontSize: 'calc(0.875rem * var(--map-inv-zoom, 1))',
    lineHeight: 1,
    ...cardTextStyle,
  };
  const scaledBodyTextStyle: CSSProperties = {
    fontSize: 'calc(0.875rem * var(--map-inv-zoom, 1))',
    lineHeight: 1.25,
    ...cardTextStyle,
  };
  const scaledBodyInsetStyle: CSSProperties = {
    padding: 'calc(0.5rem * var(--map-inv-zoom, 1)) calc(0.625rem * var(--map-inv-zoom, 1))',
  };
  const scaledMetaTopStyle: CSSProperties = {
    paddingTop: 'calc(1.25rem * var(--map-inv-zoom, 1))',
    gap: 'calc(1rem * var(--map-inv-zoom, 1))',
  };

  return (
    <MapGridCommitWrapper
      fadeIn={shouldAnimateOpeningClump}
      dataCommitCard="true"
      className={wrapperClassName}
      style={{
        left: cardLeft,
        top: cardTop,
        width: CARD_WIDTH,
        height: CARD_LAYOUT_HEIGHT,
        overflow: 'visible',
        contain: 'layout style',
      }}
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onPointerMove={onNodePointerMove}
      onPointerUp={onNodePointerUp}
      onPointerCancel={onNodePointerUp}
    >
      {isDashedOutline ? (
        <svg
          className="pointer-events-none absolute inset-0 z-20 overflow-visible"
          aria-hidden="true"
          viewBox={`0 0 ${CARD_WIDTH} 176`}
          preserveAspectRatio="none"
        >
          <path
            d={dashedOutlinePath}
            fill="none"
            stroke={commitBorderColor}
            strokeWidth={nodeBorderWidth}
            strokeDasharray={dashedStrokeDasharray}
            strokeLinecap="butt"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      <div className="absolute left-0 z-30 w-full" style={{ top: `${labelTopPx}px` }}>
        <div className="flex min-w-0 items-baseline justify-between gap-2 bg-transparent pb-0">
          <div
            className={cn(
              'min-w-0 flex-1 font-normal',
              selectedCommitTextClass,
              displayZoom <= 0.5 ? 'overflow-hidden text-ellipsis whitespace-nowrap' : 'break-words whitespace-normal',
            )}
            style={scaledTextStyle}
          >
            {headerLabel}
          </div>
          {isClusterLead && clumpCount > 1 ? (
            <button
              type="button"
              onMouseDown={(event) => {
                event.stopPropagation();
              }}
              onClick={handleClusterButtonClick}
              className={cn('inline-flex self-start items-center bg-transparent p-0 font-normal leading-none', selectedCommitTextClass)}
              style={scaledTextStyle}
            >
              {isClusterOpen ? (
                <span className="-translate-x-[1px] translate-y-[2px] leading-none" style={{ fontSize: 'calc(1rem * var(--map-inv-zoom, 1))' }}>⌃</span>
              ) : (
                `+${clumpCount - 1}`
              )}
            </button>
          ) : null}
        </div>
      </div>
      <div className={cn(
          'absolute left-0 h-[176px] w-full cursor-grab overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50 active:cursor-grabbing',
          checkedOutAccentActive && !isUnpushedCommit && !isStashedCommit && !isEmptyBranchNode
            ? 'bg-checked-muted'
            : remoteAccentActive && !isStashedCommit && !isEmptyBranchNode
              ? 'bg-remote-muted'
              : isSelectedCommit && !isUnpushedCommit && !isStashedCommit && !isEmptyBranchNode
                ? 'bg-select-muted'
                : isUnpushedCommit
                  ? 'bg-background'
                  : isStashedCommit || isEmptyBranchNode
                    ? 'bg-transparent'
                    : 'bg-muted',
          isDashedOutline ? 'border-solid' : '',
          borderAccentClass,
        )}
        style={{
          top: 0,
          borderWidth: hideCheckedOutOutline ? 0 : `${nodeBorderWidth}px`,
          borderColor: isDashedOutline || hideCheckedOutOutline ? 'transparent' : commitBorderColor,
          borderTopLeftRadius: 0,
          borderTopRightRadius: `${commitCornerRadiusPx}px`,
          borderBottomRightRadius: `${commitCornerRadiusPx}px`,
          borderBottomLeftRadius: `${commitCornerRadiusPx}px`,
          contain: 'layout paint style',
        }}
      >
        <div className="relative z-10 flex h-full min-h-0 flex-col" style={scaledBodyInsetStyle}>
          <div className="min-h-0 flex-1">
            <div
              className={cn(
                'max-w-[38rem] select-text font-normal tracking-tight text-foreground',
                selectedCommitTextClass,
                displayZoom <= 0.5 ? 'overflow-hidden text-ellipsis whitespace-nowrap' : 'break-words whitespace-normal',
              )}
              data-selectable-text="true"
              style={scaledBodyTextStyle}
            >
              {bodyMessage}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              {showDataShapeError ? (
                <span
                  className="inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-foreground dark:bg-red-900/20 dark:text-foreground"
                  title={warningsTitle}
                >
                  Broken ancestry
                </span>
              ) : null}
            </div>
          </div>
          {displayZoom > 0.5 && !isStashedCommit ? (
            <div className="mt-auto flex items-end justify-between" style={scaledMetaTopStyle}>
              <div
                className={cn('select-text font-normal', selectedCommitTextClass)}
                data-selectable-text="true"
                style={scaledTextStyle}
              >
                @{node.commit.author}
              </div>
              <div
                className={cn('select-text font-normal', selectedCommitTextClass)}
                data-selectable-text="true"
                style={scaledTextStyle}
              >
                {COMMIT_DATE_FORMATTER.format(new Date(node.commit.date))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </MapGridCommitWrapper>
  );
});

type RenderConnector = {
  id: string;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  zIndex: number;
  fromFace?: ConnectorFace;
  toFace?: ConnectorFace;
};

function anchorForFace(x: number, y: number, face?: ConnectorFace): { x: number; y: number } {
  switch (face) {
    case 'left':
      return { x, y: y + CARD_HEIGHT / 2 };
    case 'right':
      return { x: x + CARD_WIDTH, y: y + CARD_HEIGHT / 2 };
    case 'top':
      return { x: x + CARD_WIDTH / 2, y };
    case 'bottom':
      return { x: x + CARD_WIDTH / 2, y: y + CARD_HEIGHT };
    case 'mid-h':
      return { x: x + CARD_WIDTH / 2, y: y + CARD_HEIGHT / 2 };
    default:
      return { x: x + CARD_WIDTH / 2, y: y + CARD_HEIGHT / 2 };
  }
}

const CONNECTOR_FACES: ReadonlyArray<ConnectorFace> = ['left', 'right', 'top', 'bottom', 'mid-h'];

function adjustedAnchorKey(face: ConnectorFace, x: number, y: number): string {
  return `${face}:${Math.round(x)}:${Math.round(y)}`;
}

type Props = {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  mapPadHostRef: RefObject<HTMLDivElement | null>;
  transformLayerRef: RefObject<HTMLDivElement | null>;
  renderedCameraRef: RefObject<MapGridCameraState>;
  isMarqueeSelecting: boolean;
  contentWidth: number;
  contentHeight: number;
  isCameraMovingRef: MutableRefObject<boolean>;
  panEpoch: number;
  cameraRenderTick: number;
  viewportClientSize: { width: number; height: number } | null;
  onWheel: (event: WheelEvent<HTMLDivElement>) => void;
  onMouseDown: (event: MouseEvent<HTMLDivElement>) => void;
  onNodePointerDown: (event: React.PointerEvent<HTMLDivElement>, node: Node) => void;
  onNodePointerMove: (event: React.PointerEvent<HTMLDivElement>) => void;
  onNodePointerUp: (event: React.PointerEvent<HTMLDivElement>) => void;
  labelTopPx: number;
  displayZoom: number;
  selectedVisibleCommitShas: string[];
  normalizedSearchQuery: string;
  matchingNodeIds: Set<string>;
  focusedNode: Node | null;
  visibleRenderNodes: Node[];
  layoutNodes: Node[];
  manuallyOpenedClumps: Set<string>;
  manuallyClosedClumps: Set<string>;
  defaultCollapsedClumps: Set<string>;
  leadByClusterKey: Map<string, string>;
  clusterKeyByCommitId: Map<string, string>;
  clusterCounts: Map<string, number>;
  commitIdsWithRenderedAncestry: Set<string>;
  nodeWarnings: Map<string, string[]>;
  connectorParentShas: Set<string>;
  branchStartShas: Set<string>;
  branchOffNodeShas: Set<string>;
  crossBranchOutgoingShas: Set<string>;
  branchBaseCommitByName: Map<string, { id: string } | undefined>;
  branchStartAccentClass: string;
  connectorParentAccentClass: string;
  commitCornerRadiusPx: number;
  lineStrokeWidth: number;
  connectors: Array<{ id: string; fromX: number; fromY: number; toX: number; toY: number; zIndex: number; fromFace?: ConnectorFace; toFace?: ConnectorFace }>;
  mergeConnectors: Array<{ id: string; fromX: number; fromY: number; toX: number; toY: number; zIndex: number; fromFace?: ConnectorFace; toFace?: ConnectorFace }>;
  cullConnectorPath: (connector: { id: string; fromX: number; fromY: number; toX: number; toY: number; fromFace?: ConnectorFace; toFace?: ConnectorFace }) => boolean;
  flushCameraReactTick: () => void;
  setManuallyOpenedClumps: Dispatch<SetStateAction<Set<string>>>;
  setManuallyClosedClumps: Dispatch<SetStateAction<Set<string>>>;
  onCommitCardClick: (event: MouseEvent, node: Node) => void;
  unpushedCommitShasSetByBranch: Map<string, Set<string>>;
  remoteCommitShas: Set<string>;
  checkedOutHeadSha: string | null;
  orientation?: 'vertical' | 'horizontal';
  dragPreviewByNodeId?: Record<string, { x: number; y: number }>;
  nodePositionOverrides?: Record<string, { x: number; y: number }>;
  connectorPathCacheScopeBase: string;
};

const PAN_STABLE_CONNECTOR_PROPS = new Set<keyof Props>(['connectors', 'mergeConnectors', 'cameraRenderTick']);

function areMapGridCanvasPropsEqual(prev: Readonly<Props>, next: Readonly<Props>) {
  const keepConnectorRefsFrozen = prev.isCameraMovingRef.current && next.isCameraMovingRef.current;
  for (const key of Object.keys(prev) as Array<keyof Props>) {
    if (keepConnectorRefsFrozen && PAN_STABLE_CONNECTOR_PROPS.has(key)) continue;
    if (prev[key] !== next[key]) return false;
  }
  for (const key of Object.keys(next) as Array<keyof Props>) {
    if (key in prev) continue;
    if (keepConnectorRefsFrozen && PAN_STABLE_CONNECTOR_PROPS.has(key)) continue;
    return false;
  }
  return true;
}

const MapGridCanvas = memo(function MapGridCanvas({
  scrollContainerRef,
  mapPadHostRef,
  transformLayerRef,
  renderedCameraRef,
  isMarqueeSelecting,
  contentWidth,
  contentHeight,
  isCameraMovingRef,
  panEpoch,
  cameraRenderTick: _cameraRenderTick,
  viewportClientSize,
  onWheel,
  onMouseDown,
  onNodePointerDown,
  onNodePointerMove,
  onNodePointerUp,
  labelTopPx,
  displayZoom,
  selectedVisibleCommitShas,
  normalizedSearchQuery,
  matchingNodeIds,
  focusedNode,
  visibleRenderNodes,
  layoutNodes,
  manuallyOpenedClumps,
  manuallyClosedClumps,
  defaultCollapsedClumps,
  leadByClusterKey,
  clusterKeyByCommitId,
  clusterCounts,
  commitIdsWithRenderedAncestry,
  nodeWarnings,
  connectorParentShas,
  branchStartShas,
  branchOffNodeShas,
  crossBranchOutgoingShas,
  branchBaseCommitByName,
  branchStartAccentClass,
  connectorParentAccentClass,
  commitCornerRadiusPx,
  lineStrokeWidth,
  connectors,
  mergeConnectors,
  cullConnectorPath,
  flushCameraReactTick,
  setManuallyOpenedClumps,
  setManuallyClosedClumps,
  onCommitCardClick,
  unpushedCommitShasSetByBranch,
  remoteCommitShas,
  checkedOutHeadSha,
  dragPreviewByNodeId = EMPTY_DRAG_PREVIEW,
  nodePositionOverrides = EMPTY_NODE_POSITION_OVERRIDES,
  connectorPathCacheScopeBase,
}: Props) {
  const [openingClumpAnimations, setOpeningClumpAnimations] = useState<Set<string>>(new Set());
  const connectorPath2dCacheRef = useRef<Map<string, ConnectorPathCacheEntry>>(new Map());
  const connectorPersistScopeRef = useRef<string | null>(null);
  const openClumpsLastFrameRef = useRef<Set<string> | null>(null);

  const selectedShaSet = useMemo(() => new Set(selectedVisibleCommitShas), [selectedVisibleCommitShas]);

  useEffect(() => {
    const currentlyOpenClumps = new Set<string>();
    clusterCounts.forEach((_, clusterKey) => {
      const isClusterOpen =
        manuallyOpenedClumps.has(clusterKey) ||
        (!defaultCollapsedClumps.has(clusterKey) && !manuallyClosedClumps.has(clusterKey));
      if (isClusterOpen) currentlyOpenClumps.add(clusterKey);
    });

    const previousOpenClumps = openClumpsLastFrameRef.current;
    if (previousOpenClumps == null) {
      openClumpsLastFrameRef.current = currentlyOpenClumps;
      return;
    }

    const newlyOpenedClumps: string[] = [];
    currentlyOpenClumps.forEach((clusterKey) => {
      if (!previousOpenClumps.has(clusterKey)) newlyOpenedClumps.push(clusterKey);
    });

    if (newlyOpenedClumps.length > 0) {
      setOpeningClumpAnimations((prev) => {
        const next = new Set(prev);
        newlyOpenedClumps.forEach((clusterKey) => next.add(clusterKey));
        return next;
      });

      const timeoutHandle = window.setTimeout(() => {
        setOpeningClumpAnimations((prev) => {
          const next = new Set(prev);
          newlyOpenedClumps.forEach((clusterKey) => next.delete(clusterKey));
          return next;
        });
      }, 260);

      openClumpsLastFrameRef.current = currentlyOpenClumps;
      return () => {
        window.clearTimeout(timeoutHandle);
      };
    }

    openClumpsLastFrameRef.current = currentlyOpenClumps;
  }, [clusterCounts, defaultCollapsedClumps, manuallyClosedClumps, manuallyOpenedClumps]);

  const handleClusterToggle = useCallback((clusterKey: string) => {
    const isDefaultOpen = !defaultCollapsedClumps.has(clusterKey);
    if (isDefaultOpen) {
      setManuallyOpenedClumps((prev) => {
        if (!prev.has(clusterKey)) return prev;
        const next = new Set(prev);
        next.delete(clusterKey);
        return next;
      });
      setManuallyClosedClumps((prev) => {
        const next = new Set(prev);
        if (next.has(clusterKey)) next.delete(clusterKey);
        else next.add(clusterKey);
        return next;
      });
    } else {
      setManuallyClosedClumps((prev) => {
        if (!prev.has(clusterKey)) return prev;
        const next = new Set(prev);
        next.delete(clusterKey);
        return next;
      });
      setManuallyOpenedClumps((prev) => {
        const next = new Set(prev);
        if (next.has(clusterKey)) next.delete(clusterKey);
        else next.add(clusterKey);
        return next;
      });
    }
    flushCameraReactTick();
  }, [defaultCollapsedClumps, setManuallyOpenedClumps, setManuallyClosedClumps, flushCameraReactTick]);

  const adjustedAnchorByOriginalKey = useMemo(() => {
    const overrideKeys = Object.keys(nodePositionOverrides);
    const dragKeys = Object.keys(dragPreviewByNodeId);
    if (overrideKeys.length === 0 && dragKeys.length === 0) return EMPTY_ADJUSTED_ANCHOR_MAP;
    const map = new Map<string, { x: number; y: number }>();
    for (const node of layoutNodes) {
      const persistedOverride = getNodePositionOverride(nodePositionOverrides, node.commit);
      const dragPreview = dragPreviewByNodeId[node.commit.visualId];
      const effectiveX = dragPreview?.x ?? persistedOverride?.x ?? node.x;
      const effectiveY = dragPreview?.y ?? persistedOverride?.y ?? node.y;
      if (Math.abs(effectiveX - node.x) < 0.001 && Math.abs(effectiveY - node.y) < 0.001) continue;
      for (const face of CONNECTOR_FACES) {
        const orig = anchorForFace(node.x, node.y, face);
        const next = anchorForFace(effectiveX, effectiveY, face);
        map.set(adjustedAnchorKey(face, orig.x, orig.y), next);
      }
    }
    return map;
  }, [layoutNodes, nodePositionOverrides, dragPreviewByNodeId]);

  const adjustEndpoint = useCallback(
    (endpointX: number, endpointY: number, face: ConnectorFace | undefined): { x: number; y: number } => {
      if (!face || adjustedAnchorByOriginalKey.size === 0) return { x: endpointX, y: endpointY };
      const next = adjustedAnchorByOriginalKey.get(adjustedAnchorKey(face, endpointX, endpointY));
      return next ?? { x: endpointX, y: endpointY };
    },
    [adjustedAnchorByOriginalKey],
  );

  const buildVisibleConnectors = useCallback(
    (
      source: Array<{
        id: string;
        fromX: number;
        fromY: number;
        toX: number;
        toY: number;
        zIndex: number;
        fromFace?: ConnectorFace;
        toFace?: ConnectorFace;
      }>,
      cull: (connector: {
        id: string;
        fromX: number;
        fromY: number;
        toX: number;
        toY: number;
        fromFace?: ConnectorFace;
        toFace?: ConnectorFace;
      }) => boolean,
    ): RenderConnector[] => {
      const filtered = source.filter(cull);
      return filtered.map((connector) => {
        const from = adjustEndpoint(connector.fromX, connector.fromY, connector.fromFace);
        const to = adjustEndpoint(connector.toX, connector.toY, connector.toFace);
        return { ...connector, fromX: from.x, fromY: from.y, toX: to.x, toY: to.y };
      });
    },
    [adjustEndpoint],
  );

  const visibleMergeConnectors = useMemo(
    () => buildVisibleConnectors(mergeConnectors, cullConnectorPath),
    [mergeConnectors, cullConnectorPath, buildVisibleConnectors, panEpoch],
  );

  const visibleConnectors = useMemo(
    () => buildVisibleConnectors(connectors, cullConnectorPath),
    [connectors, cullConnectorPath, buildVisibleConnectors, panEpoch],
  );

  const connectorsForPathCache = useMemo(() => {
    const admitAll = () => true;
    return [
      ...buildVisibleConnectors(mergeConnectors, admitAll),
      ...buildVisibleConnectors(connectors, admitAll),
    ];
  }, [mergeConnectors, connectors, buildVisibleConnectors]);

  const connectorPathCacheScopeKey = useMemo(() => {
    const digest = computeConnectorLayoutDigest(connectorsForPathCache, commitCornerRadiusPx);
    return buildConnectorPathCacheScopeKey(connectorPathCacheScopeBase, digest, commitCornerRadiusPx);
  }, [connectorsForPathCache, commitCornerRadiusPx, connectorPathCacheScopeBase]);

  const flushConnectorPathCachePersist = useCallback(() => {
    if (isCameraMovingRef.current) return;
    const scopeKey = connectorPersistScopeRef.current;
    if (!scopeKey) return;
    const entries = collectPathStringsForPersistence(
      connectorPath2dCacheRef.current,
      connectorsForPathCache,
      commitCornerRadiusPx,
    );
    const count = Object.keys(entries).length;
    if (count === 0) return;
    setMapGridBackgroundActivity('connector-idb-write', 'Connector cache save (IDB)', true, `${count} paths`);
    void mergePersistedConnectorPaths(scopeKey, entries).finally(() => {
      setMapGridBackgroundActivity('connector-idb-write', 'Connector cache save (IDB)', false);
    });
  }, [commitCornerRadiusPx, connectorsForPathCache, isCameraMovingRef]);

  useEffect(() => {
    connectorPersistScopeRef.current = connectorPathCacheScopeKey;
    let cancelled = false;
    setMapGridBackgroundActivity('connector-idb-read', 'Connector cache load (IDB)', true);

    void readPersistedConnectorPaths(connectorPathCacheScopeKey).then((entries) => {
      if (cancelled) return;
      const applied = applyPersistedPathStrings(connectorPath2dCacheRef.current, entries);
      setMapGridBackgroundActivity(
        'connector-idb-read',
        'Connector cache load (IDB)',
        false,
        `${applied} paths hydrated`,
      );
    });

    return () => {
      cancelled = true;
      setMapGridBackgroundActivity('connector-idb-read', 'Connector cache load (IDB)', false);
    };
  }, [connectorPathCacheScopeKey]);

  useEffect(() => {
    const handlePageHide = () => flushConnectorPathCachePersist();
    window.addEventListener('pagehide', handlePageHide);
    return () => {
      window.removeEventListener('pagehide', handlePageHide);
      flushConnectorPathCachePersist();
    };
  }, [flushConnectorPathCachePersist]);

  useEffect(() => {
    if (isCameraMovingRef.current) return;
    const count = visibleMergeConnectors.length + visibleConnectors.length;
    pulseMapGridBackgroundActivity('connector-draw', 'Connector SVG update', `${count} paths`);
  }, [panEpoch, visibleMergeConnectors, visibleConnectors, isCameraMovingRef]);

  const stickyCardSlotOrderRef = useRef<string[]>([]);

  const cardSlotAssignments = useMemo(() => {
    const viewportW = viewportClientSize?.width ?? 0;
    const viewportH = viewportClientSize?.height ?? 0;
    const slotCount = computeMapGridCardSlotCount(viewportW, viewportH, displayZoom);
    const camera = renderedCameraRef.current;
    const bounds = computeViewportCullBounds(viewportW, viewportH, camera);
    const centerX = bounds ? (bounds.left + bounds.right) / 2 : 0;
    const centerY = bounds ? (bounds.top + bounds.bottom) / 2 : 0;
    const panStable = isCameraMovingRef.current;

    const assignments = buildMapGridCardSlotAssignments(
      slotCount,
      visibleRenderNodes,
      dragPreviewByNodeId,
      nodePositionOverrides,
      centerX,
      centerY,
      panStable ? stickyCardSlotOrderRef.current : [],
    );

    if (panStable) {
      stickyCardSlotOrderRef.current = assignments.map((assignment) => assignment.node.commit.visualId);
    } else {
      stickyCardSlotOrderRef.current = [];
    }

    return assignments;
  }, [
    visibleRenderNodes,
    viewportClientSize,
    displayZoom,
    panEpoch,
    dragPreviewByNodeId,
    nodePositionOverrides,
    renderedCameraRef,
    isCameraMovingRef,
  ]);

  const suppressSearchMatchScale = isCameraMovingRef.current;

  return (
    <div
      ref={scrollContainerRef}
      className="relative flex-1 min-h-0 overflow-hidden"
      style={{ cursor: isMarqueeSelecting ? 'crosshair' : 'default' }}
      onWheel={onWheel}
      onMouseDown={onMouseDown}
    >
      <div
        ref={mapPadHostRef}
        className="relative min-w-full bg-background p-2.5"
        style={{ width: contentWidth, minWidth: '100%', height: contentHeight }}
      >
        <div
          ref={transformLayerRef}
          className="absolute left-0 top-0 z-20"
          style={{
            width: contentWidth,
            height: contentHeight,
            transformOrigin: 'top left' as const,
            // layout + style only: `paint` containment clips descendants that paint above y=0
            // (commit labels use negative `top`), which cropped the first row’s header text.
            contain: 'layout style' as const,
            '--map-inv-zoom': `${computeMapGridInvZoom(displayZoom)}`,
          } as CSSProperties}
        >
          <MapGridConnectorLayer
            mergeConnectors={visibleMergeConnectors}
            connectors={visibleConnectors}
            contentWidth={contentWidth}
            contentHeight={contentHeight}
            cornerRadiusPx={commitCornerRadiusPx}
            strokeWidth={lineStrokeWidth}
            pathCache={connectorPath2dCacheRef.current}
          />
          {cardSlotAssignments.map((assignment) => {
            const { node, cardLeft, cardTop } = assignment;
            return (
              <MapGridCommitCard
                key={node.commit.visualId}
                node={node}
                cardLeft={cardLeft}
                cardTop={cardTop}
                displayZoom={displayZoom}
                commitCornerRadiusPx={commitCornerRadiusPx}
                lineStrokeWidth={lineStrokeWidth}
                labelTopPx={labelTopPx}
                selectedShaSet={selectedShaSet}
                normalizedSearchQuery={normalizedSearchQuery}
                matchingNodeIds={matchingNodeIds}
                focusedCommitId={focusedNode?.commit.id ?? null}
                manuallyOpenedClumps={manuallyOpenedClumps}
                manuallyClosedClumps={manuallyClosedClumps}
                defaultCollapsedClumps={defaultCollapsedClumps}
                leadByClusterKey={leadByClusterKey}
                clusterKeyByCommitId={clusterKeyByCommitId}
                clusterCounts={clusterCounts}
                openingClumpAnimations={openingClumpAnimations}
                commitIdsWithRenderedAncestry={commitIdsWithRenderedAncestry}
                nodeWarnings={nodeWarnings}
                connectorParentShas={connectorParentShas}
                branchStartShas={branchStartShas}
                branchOffNodeShas={branchOffNodeShas}
                crossBranchOutgoingShas={crossBranchOutgoingShas}
                branchBaseCommitByName={branchBaseCommitByName}
                branchStartAccentClass={branchStartAccentClass}
                connectorParentAccentClass={connectorParentAccentClass}
                unpushedCommitShasSetByBranch={unpushedCommitShasSetByBranch}
                remoteCommitShas={remoteCommitShas}
                checkedOutHeadSha={checkedOutHeadSha}
                onCommitCardClick={onCommitCardClick}
                onNodePointerDown={onNodePointerDown}
                onNodePointerMove={onNodePointerMove}
                onNodePointerUp={onNodePointerUp}
                onClusterToggle={handleClusterToggle}
                suppressSearchMatchScale={suppressSearchMatchScale}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}, areMapGridCanvasPropsEqual);

export default MapGridCanvas;
