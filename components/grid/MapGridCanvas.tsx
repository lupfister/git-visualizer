import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties, Dispatch, MouseEvent, ReactNode, RefObject, SetStateAction, WheelEvent } from 'react';
import { buildMergeOrthogonalPath, CARD_BODY_TOP_OFFSET, CARD_HEIGHT, CARD_WIDTH, CONNECTOR_COLOR } from './LayoutGrid';
import { buildRoundedElbowPath } from './gridPathUtils';
import { cn } from './mapGridUtils';
import type { Node } from './LayoutGrid';

function MapGridCommitWrapper({
  fadeIn,
  className,
  style,
  onClick,
  dataCommitCard,
  children,
}: {
  fadeIn: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
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
  labelTopPx: number;
  inverseZoomStyle: CSSProperties;
  displayZoom: number;
  selectedVisibleCommitShas: string[];
  iconScaleStyle: CSSProperties;
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
  connectorCornerRadiusPx: number;
  pointFormatter: (x: number, y: number) => string;
  connectors: Array<{ id: string; fromX: number; fromY: number; toX: number; toY: number; zIndex: number }>;
  mergeConnectors: Array<{ id: string; fromX: number; fromY: number; toX: number; toY: number; zIndex: number }>;
  cullConnectorPath: (connector: { id: string; fromX: number; fromY: number; toX: number; toY: number }) => boolean;
  flushCameraReactTick: () => void;
  setManuallyOpenedClumps: Dispatch<SetStateAction<Set<string>>>;
  setManuallyClosedClumps: Dispatch<SetStateAction<Set<string>>>;
  onCommitCardClick: (event: MouseEvent, node: Node) => void;
  unpushedCommitShasSetByBranch: Map<string, Set<string>>;
  checkedOutHeadSha: string | null;
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
  labelTopPx,
  inverseZoomStyle,
  displayZoom,
  selectedVisibleCommitShas,
  iconScaleStyle,
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
  connectorCornerRadiusPx,
  pointFormatter,
  connectors,
  mergeConnectors,
  cullConnectorPath,
  flushCameraReactTick,
  setManuallyOpenedClumps,
  setManuallyClosedClumps,
  onCommitCardClick,
  unpushedCommitShasSetByBranch,
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

  return (
    <div
      ref={scrollContainerRef}
      className="flex-1 min-h-0 overflow-hidden"
      style={{ cursor: isMarqueeSelecting ? 'crosshair' : 'default' }}
    >
      <div
        ref={mapPadHostRef}
        className="relative min-w-full bg-[#FAFAF9] p-2.5"
        onWheel={onWheel}
        onMouseDown={onMouseDown}
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
          {renderNodes.filter((node) => shouldRenderNode(node)).map((node) => {
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
            const isUnpushedCommit =
              isLocalUncommitted ||
              (unpushedCommitShasSetByBranch.get(node.commit.branchName)?.has(node.commit.id) ?? false);
            const isCheckedOutCommit = isLocalUncommitted || (checkedOutHeadSha != null && node.commit.id === checkedOutHeadSha);
            const checkedOutAccentActive = isCheckedOutCommit && !isSelectedCommit;
            const selectedCommitTextClass = checkedOutAccentActive
              ? 'text-[#38BDF2]'
              : isSelectedCommit
                ? 'text-[#158EFC]'
                : 'text-muted-foreground';
            const selectedCommitTextStyle = checkedOutAccentActive
              ? { color: '#38BDF2' }
              : isSelectedCommit
                ? { color: '#158EFC' }
                : undefined;
            return (
              <MapGridCommitWrapper
                key={node.commit.visualId}
                fadeIn={shouldAnimateOpeningClump}
                dataCommitCard="true"
                className={cn(
                  'group absolute z-20 cursor-pointer',
                  normalizedSearchQuery && !matchingNodeIds.has(node.commit.id)
                    ? isCameraMoving
                      ? 'opacity-10'
                      : 'opacity-10 blur-[0.5px]'
                    : '',
                  normalizedSearchQuery && matchingNodeIds.has(node.commit.id) ? 'scale-[1.01]' : '',
                  focusedNode?.commit.id === node.commit.id ? 'z-30 scale-[1.015]' : '',
                )}
                style={{ left: node.x, top: node.y, width: CARD_WIDTH, height: CARD_BODY_TOP_OFFSET + CARD_HEIGHT + 4, overflow: 'visible' }}
                onClick={(event) => onCommitCardClick(event, node)}
              >
                <div className="absolute left-0 w-full" style={{ ...inverseZoomStyle, top: `${labelTopPx}px` }}>
                  <div className="flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0">
                    <div
                      className={cn(
                        'min-w-0 h-4 flex-1 text-sm font-medium leading-none',
                        selectedCommitTextClass,
                        displayZoom <= 0.5 ? 'overflow-hidden text-ellipsis whitespace-nowrap' : 'break-words whitespace-normal',
                      )}
                      style={selectedCommitTextStyle}
                    >
                      {node.commit.branchName}/{node.commit.id.slice(0, 7)}
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
                        className={cn('inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none', selectedCommitTextClass)}
                        style={selectedCommitTextStyle}
                      >
                        {isClusterOpen ? (
                          <span className="-translate-x-[1px] translate-y-[2px] text-base leading-none">⌃</span>
                        ) : (
                          `x${clumpCount}`
                        )}
                      </button>
                    ) : null}
                  </div>
                </div>
                <div className={cn(
                    'absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50',
                    checkedOutAccentActive && !isUnpushedCommit && !isStashedCommit
                      ? 'bg-[#EBF7FE]'
                      : isSelectedCommit && !isUnpushedCommit && !isStashedCommit
                        ? 'bg-[#E5F0FF]'
                        : isUnpushedCommit || isStashedCommit
                          ? 'bg-transparent'
                          : 'bg-[#F5F5F5]',
                    isStashedCommit || isLocalUncommitted ? 'border-dashed' : '',
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
                    borderWidth: `${(isStashedCommit || isLocalUncommitted) ? lineStrokeWidth * (2 / 1.5) : lineStrokeWidth}px`,
                    borderColor: checkedOutAccentActive ? '#38BDF2' : isSelectedCommit ? '#158EFC' : CONNECTOR_COLOR,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: `${commitCornerRadiusPx}px`,
                    borderBottomRightRadius: `${commitCornerRadiusPx}px`,
                    borderBottomLeftRadius: `${commitCornerRadiusPx}px`,
                  }}
                >
                  <div className="flex h-full min-h-0 flex-col px-2.5 py-2" style={inverseZoomStyle}>
                    <div className="min-h-0 flex-1">
                      <div
                        className={cn(
                          'max-w-[38rem] text-sm font-medium leading-tight tracking-tight text-muted-foreground',
                          selectedCommitTextClass,
                          displayZoom <= 0.5 ? 'overflow-hidden text-ellipsis whitespace-nowrap' : 'break-words whitespace-normal',
                        )}
                        style={selectedCommitTextStyle}
                      >
                        {isTop && isClusterOpen
                          ? node.commit.message
                          : isTop && clumpCount > 1
                            ? `${node.commit.message} +${clumpCount - 1}`
                            : node.commit.message}
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-1.5">
                        {showDataShapeError ? (
                          <span
                            className="inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground"
                            title={nodeWarningsForCard.join('\n')}
                          >
                            Broken ancestry
                          </span>
                        ) : null}
                      </div>
                    </div>
                    {displayZoom > 0.5 ? (
                      <div className="mt-auto flex items-end justify-between gap-4 pt-5">
                        <div className={cn('text-sm font-medium', selectedCommitTextClass)} style={selectedCommitTextStyle}>
                          @{node.commit.author}
                        </div>
                        <div className={cn('text-sm font-medium', selectedCommitTextClass)} style={selectedCommitTextStyle}>
                          {new Date(node.commit.date).toLocaleString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: '2-digit',
                          })}
                        </div>
                      </div>
                    ) : null}
                    {focusedNode?.commit.id === node.commit.id && normalizedSearchQuery ? (
                      <div className="absolute left-5 top-4 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground" style={iconScaleStyle}>
                        Search result
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
              const path = buildMergeOrthogonalPath({
                laneX: connector.fromX,
                tipY: connector.fromY,
                mergeX: connector.toX,
                mergeY: connector.toY,
                cornerR: connectorCornerRadiusPx,
                pointFormatter,
              });
              return (
                <path key={connector.id} d={path} fill="none" stroke={CONNECTOR_COLOR} strokeWidth={lineStrokeWidth} strokeLinecap="round" strokeLinejoin="round" />
              );
            })}
            {sortedVisibleConnectors.map((connector) => {
              const path = buildRoundedElbowPath(
                connector.fromX,
                connector.fromY,
                connector.toX,
                connector.toY,
                connectorCornerRadiusPx,
                pointFormatter,
                0,
              );
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
