import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties, Dispatch, MouseEvent, ReactNode, RefObject, SetStateAction, WheelEvent } from 'react';
import { CARD_BODY_TOP_OFFSET, CARD_HEIGHT, CARD_WIDTH, CONNECTOR_COLOR } from './LayoutGrid';
import { buildLooseCablePath } from './gridPathUtils';
import { cn } from './mapGridUtils';
import type { ConnectorFace, Node } from './LayoutGrid';

function MapGridCommitWrapper({
  fadeIn,
  className,
  style,
  onClick,
  onPointerDown,
  dataCommitCard,
  children,
}: {
  fadeIn: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onPointerDown?: React.PointerEventHandler<HTMLDivElement>;
  dataCommitCard?: string;
  children: ReactNode;
}) {
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
  return (
    <div
      className={className}
      data-commit-card={dataCommitCard}
      onClick={onClick}
      onPointerDown={onPointerDown}
      style={{
        ...style,
        opacity: opaque ? 1 : 0,
        transition: fadeIn ? 'opacity 240ms ease-out' : undefined,
      }}
    >
      {children}
    </div>
  );
}

type Props = {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  mapPadHostRef: RefObject<HTMLDivElement | null>;
  transformLayerRef: RefObject<HTMLDivElement | null>;
  isMarqueeSelecting: boolean;
  contentWidth: number;
  contentHeight: number;
  isCameraMoving: boolean;
  onWheel: (event: WheelEvent<HTMLDivElement>) => void;
  onMouseDown: (event: MouseEvent<HTMLDivElement>) => void;
  onNodePointerDown: (event: React.PointerEvent<HTMLDivElement>, node: Node) => void;
  labelTopPx: number;
  inverseZoomStyle: CSSProperties;
  displayZoom: number;
  selectedVisibleCommitShas: string[];
  normalizedSearchQuery: string;
  matchingNodeIds: Set<string>;
  focusedNode: Node | null;
  renderNodes: Node[];
  shouldRenderNode: (node: Node) => boolean;
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
  pointFormatter: (x: number, y: number) => string;
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
};

export default function MapGridCanvas({
  scrollContainerRef,
  mapPadHostRef,
  transformLayerRef,
  isMarqueeSelecting,
  contentWidth,
  contentHeight,
  isCameraMoving,
  onWheel,
  onMouseDown,
  onNodePointerDown,
  labelTopPx,
  inverseZoomStyle,
  displayZoom,
  selectedVisibleCommitShas,
  normalizedSearchQuery,
  matchingNodeIds,
  focusedNode,
  renderNodes,
  shouldRenderNode,
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
  pointFormatter,
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
}: Props) {
  const [openingClumpAnimations, setOpeningClumpAnimations] = useState<Set<string>>(new Set());
  const openClumpsLastFrameRef = useRef<Set<string> | null>(null);

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

  const compareConnectorDrawOrder = (
    left: { id: string; fromY: number; toY: number; zIndex: number },
    right: { id: string; fromY: number; toY: number; zIndex: number },
  ): number => {
    // Newer branches draw first (behind older branches).
    const byAge = right.zIndex - left.zIndex;
    if (byAge !== 0) return byAge;
    // Higher connectors draw first to stay visually underneath lower ones.
    const leftTopY = Math.min(left.fromY, left.toY);
    const rightTopY = Math.min(right.fromY, right.toY);
    const byTopY = leftTopY - rightTopY;
    if (byTopY !== 0) return byTopY;
    return left.id.localeCompare(right.id);
  };
  const sortedVisibleMergeConnectors = mergeConnectors
    .filter((connector) => cullConnectorPath(connector))
    .sort(compareConnectorDrawOrder);
  const sortedVisibleConnectors = connectors
    .filter((connector) => cullConnectorPath(connector))
    .sort(compareConnectorDrawOrder);
  const visibleRenderNodes = renderNodes.filter((node) => shouldRenderNode(node));

  return (
    <div
      ref={scrollContainerRef}
      className="flex-1 min-h-0 overflow-hidden"
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
          className="absolute left-0 top-0"
          style={{
            width: contentWidth,
            height: contentHeight,
            transformOrigin: 'top left' as const,
            ...(isCameraMoving ? { willChange: 'transform' as const } : {}),
          }}
        >
          {visibleRenderNodes.map((node) => {
            const clusterKey = clusterKeyByCommitId.get(node.commit.visualId);
            const isClusterOpen = clusterKey
              ? manuallyOpenedClumps.has(clusterKey) || (!defaultCollapsedClumps.has(clusterKey) && !manuallyClosedClumps.has(clusterKey))
              : false;
            const isTop = clusterKey ? leadByClusterKey.get(clusterKey) === node.commit.visualId : false;
            const shouldAnimateOpeningClump =
              clusterKey != null && isClusterOpen && !isTop && openingClumpAnimations.has(clusterKey);
            const clumpCount = clusterKey ? clusterCounts.get(clusterKey) ?? 1 : 1;
            const hasRenderedAncestry = commitIdsWithRenderedAncestry.has(node.commit.id);
            const nodeWarningsForCard = nodeWarnings.get(node.commit.id) ?? [];
            const showDataShapeError = nodeWarningsForCard.length > 0 && !hasRenderedAncestry;
            const isSelectedCommit = selectedVisibleCommitShas.includes(node.commit.id);
            const isLocalUncommitted =
              node.commit.id === 'WORKING_TREE' || node.commit.kind === 'uncommitted';
            const isStashedCommit =
              node.commit.kind === 'stash' || node.commit.id.startsWith('STASH:');
            const stashIndexMatch = /^STASH:(\d+)$/.exec(node.commit.id);
            const stashHeaderLabel = stashIndexMatch ? `Stash:${stashIndexMatch[1]}` : null;
            const stashBodyMessage = isStashedCommit
              ? (node.commit.message.trim() && node.commit.message.trim() !== 'git-visualizer'
                  ? node.commit.message
                  : 'Stashed changes')
              : node.commit.message;
            const isEmptyBranchNode =
              node.commit.kind === 'branch-created' && node.commit.id.startsWith('BRANCH_HEAD:');
            const isUnpushedCommit =
              isLocalUncommitted ||
              (unpushedCommitShasSetByBranch.get(node.commit.branchName)?.has(node.commit.id) ?? false);
            const isExplicitRemoteCommit = node.commit.isRemote === true;
            const isRemoteCommit =
              !isLocalUncommitted &&
              !isUnpushedCommit &&
              (isExplicitRemoteCommit || remoteCommitShas.has(node.commit.id));
            const isCheckedOutCommit = isLocalUncommitted || (checkedOutHeadSha != null && node.commit.id === checkedOutHeadSha);
            const checkedOutAccentActive = isCheckedOutCommit && !isSelectedCommit;
            const remoteAccentActive = isRemoteCommit && !checkedOutAccentActive && !isSelectedCommit;
            const selectedCommitTextClass = checkedOutAccentActive
              ? 'text-checked'
              : remoteAccentActive
                ? 'text-remote'
              : isSelectedCommit
                ? 'text-select'
                : 'text-foreground';
            const selectedCommitTextStyle = checkedOutAccentActive
              ? { color: 'var(--checked)' }
              : remoteAccentActive
                ? { color: 'var(--remote)' }
              : isSelectedCommit
                ? { color: 'var(--select)' }
                : undefined;
            const focusedCommitBorderColor = selectedCommitTextStyle?.color ?? 'var(--foreground)';
            const commitBorderColor = focusedNode?.commit.id === node.commit.id
              ? focusedCommitBorderColor
              : checkedOutAccentActive
                ? 'var(--checked)'
                : remoteAccentActive
                  ? 'var(--remote)'
                : isSelectedCommit
                  ? 'var(--select)'
                  : CONNECTOR_COLOR;
            const nodeBorderWidth = lineStrokeWidth;
            const isDashedOutline = isStashedCommit || isLocalUncommitted || isEmptyBranchNode;
            const dashedStrokeDasharray = `${12 / displayZoom} ${6 / displayZoom}`;
            const dashedStrokeInset = nodeBorderWidth / 2;
            const dashedOutlinePath = `M ${dashedStrokeInset} ${dashedStrokeInset} H ${CARD_WIDTH - dashedStrokeInset - commitCornerRadiusPx} Q ${CARD_WIDTH - dashedStrokeInset} ${dashedStrokeInset} ${CARD_WIDTH - dashedStrokeInset} ${dashedStrokeInset + commitCornerRadiusPx} V ${176 - dashedStrokeInset - commitCornerRadiusPx} Q ${CARD_WIDTH - dashedStrokeInset} ${176 - dashedStrokeInset} ${CARD_WIDTH - dashedStrokeInset - commitCornerRadiusPx} ${176 - dashedStrokeInset} H ${dashedStrokeInset + commitCornerRadiusPx} Q ${dashedStrokeInset} ${176 - dashedStrokeInset} ${dashedStrokeInset} ${176 - dashedStrokeInset - commitCornerRadiusPx} V ${dashedStrokeInset}`;
            const unpushedCommitTextStyle = isUnpushedCommit && !checkedOutAccentActive && !isSelectedCommit
              ? { color: 'var(--muted-foreground)' }
              : undefined;
            return (
              <MapGridCommitWrapper
                key={node.commit.visualId}
                fadeIn={shouldAnimateOpeningClump}
                dataCommitCard="true"
                className={cn(
                  'group absolute z-20',
                  normalizedSearchQuery && !matchingNodeIds.has(node.commit.id)
                    ? isCameraMoving
                      ? 'opacity-10'
                      : 'opacity-10 blur-[0.5px]'
                    : '',
                  normalizedSearchQuery && matchingNodeIds.has(node.commit.id) ? 'scale-[1.01]' : '',
                  focusedNode?.commit.id === node.commit.id ? 'z-30' : '',
                )}
                style={{ left: node.x, top: node.y, width: CARD_WIDTH, height: CARD_BODY_TOP_OFFSET + CARD_HEIGHT + 4, overflow: 'visible' }}
                onClick={(event) => onCommitCardClick(event, node)}
                onPointerDown={(event) => onNodePointerDown(event, node)}
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
                <div className="absolute left-0 w-full" style={{ ...inverseZoomStyle, top: `${labelTopPx}px` }}>
                  <div className="flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0">
                    <div
                      className={cn(
                        'min-w-0 h-4 flex-1 text-sm font-normal leading-none',
                        selectedCommitTextClass,
                        displayZoom <= 0.5 ? 'overflow-hidden text-ellipsis whitespace-nowrap' : 'break-words whitespace-normal',
                      )}
                      style={selectedCommitTextStyle ?? unpushedCommitTextStyle}
                    >
                      {isStashedCommit && stashHeaderLabel
                        ? stashHeaderLabel
                      : node.commit.branchName
                        ? `${node.commit.branchName}/${node.commit.id.slice(0, 7)}`
                        : node.commit.id.slice(0, 7)}
                    </div>
                    {isTop && clumpCount > 1 ? (
                      <button
                        type="button"
                        onMouseDown={(event) => {
                          event.stopPropagation();
                        }}
                        onClick={(event) => {
                          event.stopPropagation();
                          event.preventDefault();
                          if (!clusterKey) return;
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
                        }}
                        className={cn('inline-flex self-start items-center bg-transparent p-0 text-sm font-normal leading-none', selectedCommitTextClass)}
                        style={selectedCommitTextStyle ?? unpushedCommitTextStyle}
                      >
                        {isClusterOpen ? (
                        <span className="-translate-x-[1px] translate-y-[2px] text-base leading-none">⌃</span>
                        ) : (
                          `+${clumpCount - 1}`
                        )}
                      </button>
                    ) : null}
                  </div>
                </div>
                <div className={cn(
                    'absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50',
                    checkedOutAccentActive && !isUnpushedCommit && !isStashedCommit && !isEmptyBranchNode
                    ? 'bg-checked-muted'
                    : remoteAccentActive && !isStashedCommit && !isEmptyBranchNode
                        ? 'bg-remote-muted'
                    : isSelectedCommit && !isUnpushedCommit && !isStashedCommit && !isEmptyBranchNode
                        ? 'bg-select-muted'
                        : isUnpushedCommit || isStashedCommit || isEmptyBranchNode
                          ? 'bg-transparent'
                          : 'bg-muted',
                    isDashedOutline ? 'border-solid' : '',
                    branchOffNodeShas.has(node.commit.id) ||
                    branchStartShas.has(node.commit.id) ||
                    crossBranchOutgoingShas.has(node.commit.id)
                      ? branchStartAccentClass
                      : connectorParentShas.has(node.commit.id)
                        ? connectorParentAccentClass
                      : branchBaseCommitByName.get(node.commit.branchName)?.id === node.commit.id
                        ? 'border-amber-500'
                        : showDataShapeError
                          ? 'border-red-500'
                          : '',
                    normalizedSearchQuery && matchingNodeIds.has(node.commit.id) && !isCameraMoving ? '' : '',
                  )}
                style={{
                  top: 0,
                  borderWidth: `${nodeBorderWidth}px`,
                  borderColor: isDashedOutline ? 'transparent' : commitBorderColor,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: `${commitCornerRadiusPx}px`,
                  borderBottomRightRadius: `${commitCornerRadiusPx}px`,
                  borderBottomLeftRadius: `${commitCornerRadiusPx}px`,
                }}
                >
                  <div className="relative z-10 flex h-full min-h-0 flex-col px-2.5 py-2" style={inverseZoomStyle}>
                    <div className="min-h-0 flex-1">
                      <div
                        className={cn(
                          'max-w-[38rem] select-text text-sm font-normal leading-tight tracking-tight text-foreground',
                          selectedCommitTextClass,
                          displayZoom <= 0.5 ? 'overflow-hidden text-ellipsis whitespace-nowrap' : 'break-words whitespace-normal',
                        )}
                        data-selectable-text="true"
                      style={selectedCommitTextStyle ?? unpushedCommitTextStyle}
                      >
                        {isTop && isClusterOpen
                          ? stashBodyMessage
                          : isTop && clumpCount > 1
                            ? `${stashBodyMessage} +${clumpCount - 1}`
                            : stashBodyMessage}
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-1.5">
                        {showDataShapeError ? (
                          <span
                            className="inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-foreground dark:bg-red-900/20 dark:text-foreground"
                            title={nodeWarningsForCard.join('\n')}
                          >
                            Broken ancestry
                          </span>
                        ) : null}
                      </div>
                    </div>
                    {displayZoom > 0.5 && !isStashedCommit ? (
                      <div className="mt-auto flex items-end justify-between gap-4 pt-5">
                        <div
                          className={cn('select-text text-sm font-normal', selectedCommitTextClass)}
                          data-selectable-text="true"
                          style={selectedCommitTextStyle ?? unpushedCommitTextStyle}
                        >
                          @{node.commit.author}
                        </div>
                        <div
                          className={cn('select-text text-sm font-normal', selectedCommitTextClass)}
                          data-selectable-text="true"
                          style={selectedCommitTextStyle ?? unpushedCommitTextStyle}
                        >
                          {new Date(node.commit.date).toLocaleString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: '2-digit',
                          })}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </MapGridCommitWrapper>
            );
          })}
          <svg
            className="pointer-events-none absolute inset-0 z-10"
            width={contentWidth}
            height={contentHeight}
            viewBox={`0 0 ${contentWidth} ${contentHeight}`}
            aria-hidden="true"
            overflow="visible"
            style={{ overflow: 'visible' }}
          >
            {sortedVisibleMergeConnectors.map((connector) => {
              const { fromX, fromY, toX, toY } = connector;
              const path = buildLooseCablePath(fromX, fromY, toX, toY, pointFormatter, connector.fromFace, connector.toFace);
              return (
                <path key={connector.id} d={path} fill="none" stroke={CONNECTOR_COLOR} strokeWidth={lineStrokeWidth} strokeLinecap="round" strokeLinejoin="round" />
              );
            })}
            {sortedVisibleConnectors.map((connector) => {
              const { fromX, fromY, toX, toY } = connector;
              const path = buildLooseCablePath(fromX, fromY, toX, toY, pointFormatter, connector.fromFace, connector.toFace);
              return (
                <path key={connector.id} d={path} fill="none" stroke={CONNECTOR_COLOR} strokeWidth={lineStrokeWidth} strokeLinecap="round" strokeLinejoin="round" />
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}
