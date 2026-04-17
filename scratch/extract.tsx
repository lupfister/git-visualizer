  return (
    <div className="relative h-full">
      <div
        ref={scrollRef}
        onMouseDown={handleCanvasMouseDown}
        className={`w-full h-full overflow-hidden branch-map-scroll relative select-none touch-none ${nodeDragDisplay ? 'cursor-grabbing' : isPanning ? 'cursor-grabbing' : spaceHeld ? 'cursor-grab' : 'cursor-default'}`}
      >
        <div
          ref={cameraRef}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: canvasWidth,
            height: canvasHeight,
            transformOrigin: 'top left',
            willChange: isOrientationSwitchFading ? 'transform, opacity' : 'transform',
            opacity: isOrientationSwitchFading ? 0.9 : 1,
            transition: isResizeSettling ? 'none' : `opacity ${ORIENTATION_SWITCH_FADE_MS}ms ease-out`,
          }}
        >
          <div 
            ref={pannedContentRef} 
            className="absolute inset-0 pointer-events-none overflow-visible"
            style={{
              transform: `translate3d(${panRef.current.x}px, ${panRef.current.y}px, 0)`,
            }}
          >
            <svg
              ref={svgRef}
              width={svgWidth}
              height={svgHeight}
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className={cn(
                'block pointer-events-none select-none touch-none overflow-visible branch-map-svg',
                drawReady && ENABLE_TIMELINE_INTRO_ANIMATIONS && 'timeline-ready',
                animationsLocked && 'timeline-static',
                isOrientationSwitchFading && 'transition-opacity duration-300'
              )}
              style={{
                '--camera-scale': String(layerCameraScale.x),
                minWidth: svgWidth,
                display: 'block',
                position: 'absolute',
                left: 0,
                top: 0,
                transformOrigin: 'top left',
                transform: `translate3d(${graphOffsetX}px, ${graphOffsetY}px, 0)`,
                overflow: 'visible',
                willChange: isResizeSettling ? 'transform' : undefined,
              } as React.CSSProperties}
            >
            <defs>
              <filter id="tick-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#000" floodOpacity="0.08" />
              </filter>
            </defs>

            <g
              ref={zoomLayerRef}
              transform={`scale(${layerCameraScale.x} ${layerCameraScale.y})`}
              style={{
                opacity: timelineCanvasVisible ? 1 : 0,
                visibility: timelineCanvasVisible ? 'visible' : 'hidden',
                transition: `opacity ${INITIAL_REVEAL_FADE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
                pointerEvents: holdTimelineForInitialCenter ? 'none' : 'auto',
              }}
            >
              <rect
                x={0}
                y={0}
                width={svgWidth}
                height={svgHeight}
                fill={SVG_AREA_BG}
                style={{ pointerEvents: 'none' }}
              />
              <g transform={`translate(${graphContentTranslateX} ${graphContentTranslateY})`}>
                <g
                  ref={contentLayerRef}
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
                          {/* Main branch commits moved to HTML Grid Overlay */}
                          {null && mainDirectClusters.map((clusterLayout) => {
                            return null;
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
                          {/* Main branch prompt markers moved to HTML Grid Overlay */}
                          {null && clusters.map((cluster) => {
                            return null;
                          })}
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
                        const branchLaneAnchors = buildBranchLaneAnchors(b, layout);
                        const branchLaneSegments = buildLaneSegments(branchLaneAnchors);
                        const firstLaneAnchor = branchLaneAnchors[0];
                        const lastLaneAnchor = branchLaneAnchors[branchLaneAnchors.length - 1];
                        const renderedBranchHead = resolveBranchHeadProjectedPoint(b, layout);
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
                                        }}
                                      >
                                        {label}
                                      </text>
                                    )}
                                  </g>
                                );
                              })}

                              {/* Commit markers along branch moved to HTML Grid Overlay */}
                              {null && commitDotClusters.map((cluster) => {
                                return null;
                              })}
                              {/* Prompt marker hit areas stay on top so hover remains easy. */}
                              {/* Prompt marker hit areas moved to HTML Grid Overlay */}
                              {null && promptMarkerClusters.map((cluster) => {
                                return null;
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

                  {/* Checked-out connector line (render below node overlays). */}
                  {checkedOutHasUncommittedChanges && checkedOutDisplayIndicatorLocal && checkedOutIndicatorLocal && (() => {
                    const markerLocal = checkedOutDisplayIndicatorLocal;
                    const anchorLocal = checkedOutIndicatorLocal;
                    const hasHorizontalOffset = Math.abs(markerLocal.x - anchorLocal.x) > 0.5;
                    const hasVerticalOffset = Math.abs(markerLocal.y - anchorLocal.y) > 0.5;
                    const forkPath = (() => {
                      if (!hasHorizontalOffset || !hasVerticalOffset) return null;
                      const horizontalDir = markerLocal.x >= anchorLocal.x ? 1 : -1;
                      const verticalDir = markerLocal.y >= anchorLocal.y ? 1 : -1;
                      const bend = Math.min(
                        cornerR,
                        Math.abs(markerLocal.x - anchorLocal.x),
                        Math.abs(markerLocal.y - anchorLocal.y),
                      );
                      const preTurnX = markerLocal.x - horizontalDir * bend;
                      const turnY = anchorLocal.y + verticalDir * bend;
                      return `M ${pathCoord(anchorLocal.x, anchorLocal.y)} L ${pathCoord(preTurnX, anchorLocal.y)} Q ${pathCoord(markerLocal.x, anchorLocal.y)} ${pathCoord(markerLocal.x, turnY)} L ${pathCoord(markerLocal.x, markerLocal.y)}`;
                    })();
                    const straightPath = `M ${pathCoord(anchorLocal.x, anchorLocal.y)} L ${pathCoord(markerLocal.x, markerLocal.y)}`;
                    return (
                      <g style={{ pointerEvents: 'none' }}>
                        <path
                          d={forkPath ?? straightPath}
                          fill="none"
                          stroke={CANVAS_NEUTRAL_GRAY}
                          strokeWidth={0.75}
                          pathLength={1}
                          vectorEffect="non-scaling-stroke"
                        />
                      </g>
                    );
                  })()}

                  {/* Branch commit node overlay so branch connectors/lanes never render over branch rectangles. */}
                  <g style={{ pointerEvents: 'none' }}>
                    {(() => {
                      const orderedActiveBranches = orderedActiveBranchesForLayer({
                        includeSelectedPriority: false,
                      });

                      return orderedActiveBranches.flatMap((b) => {
                        const {
                          uniqueAheadCount,
                          branchEndDotIndex,
                          localCommitDotIndices,
                          fullBranchShouldUseLocalGray,
                          commitDotClusters,
                        } = getBranchRenderLayout(b);
                        const isFocusedError = focusedErrorBranch?.name === b.name;
                        const strokeWidth = isFocusedError ? 1 : 0.75;
                        const unpushedStrokeWidth = strokeWidth + UNPUSHED_LANE_STROKE_VISUAL_COMP;

                        return null && commitDotClusters.map((cluster) => {
                          const { realCommitEntries, renderEntries } = resolveBranchClusterEntries(cluster);
                          const count = renderEntries.length;
                          const clusterKey = branchClusterKey(b.name, cluster);
                          const memberKeys = branchClusterMemberKeys(b.name, cluster);
                          const preferredAnchorEntry = branchPreferredAnchorEntry(
                            cluster,
                            realCommitEntries,
                            branchEndDotIndex,
                          );
                          const animatedAnchor = resolveAnimatedClumpAnchor(
                            clusterKey,
                            { x: preferredAnchorEntry.x, y: preferredAnchorEntry.y },
                            memberKeys
                          );
                          const anchorX = animatedAnchor.x;
                          const anchorY = animatedAnchor.y;
                          const dotShouldUseCanvasFill =
                            fullBranchShouldUseLocalGray ||
                            cluster.entries.every((entry) => localCommitDotIndices.has(entry.item.index));
                          const dotFill = dotShouldUseCanvasFill ? CANVAS_UNPUSHED_NODE_FILL : CANVAS_NODE_FILL;
                          const dotStrokeWidth = CANVAS_NODE_STROKE_WIDTH;
                          const dotStrokeInset = dotStrokeWidth / 2;
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
                            branchEndDotIndex != null &&
                            cluster.entries.some((entry) => entry.item.index === branchEndDotIndex) &&
                            selectedBranchNameSet.has(b.name);

                          if (count <= 1) {
                            const commitEntry = renderEntries[0] ?? cluster.entries[cluster.entries.length - 1];
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
                            const rectSize = commitRectSize(scaledNodeSize);
                            const isGhostRect = isNonCommitPlaceholder;
                            const ghostRectStrokeWidth = unpushedStrokeWidth;

                            return (
                              <g
                                key={`branch-overlay-${clusterKey}`}
                                {...((isUncommittedCommit || isStashCommit) ? { 'data-drag-id': commit?.fullSha } : {})}
                              >
                                {isGhostRect ? (
                                  renderCommitNodeShapeRect({
                                    x: anchorX - rectSize.width / 2 + dotStrokeInset,
                                    y: anchorY - rectSize.height / 2 + dotStrokeInset,
                                    width: rectSize.width - dotStrokeWidth,
                                    height: rectSize.height - dotStrokeWidth,
                                    fill: getNodeFillColor(
                                      clusterKey,
                                      dotFill,
                                      clusterCheckoutAccent,
                                      clusterHasSelectedCommit || clusterHasSelectedHead,
                                      true,
                                    ),
                                    stroke: getNodeStrokeColor(
                                      clusterKey,
                                      LOCAL_UNPUSHED_GRAY,
                                      clusterCheckoutAccent,
                                      clusterHasSelectedCommit || clusterHasSelectedHead,
                                      true,
                                    ),
                                    strokeWidth: ghostRectStrokeWidth,
                                    dashed: true,
                                  })
                                ) : renderCommitNodeRect({
                                  nodeKey: clusterKey,
                                  centerX: anchorX,
                                  centerY: anchorY,
                                  rectSize,
                                  innerText: isUncommittedCommit || isStashCommit ? undefined : commit?.message,
                                  footerMetaAuthor: `@${commit?.author ?? b.lastCommitAuthor}`,
                                  footerMetaDate: fmtTooltipDate(commit?.date ?? b.lastCommitDate),
                                  fill: isStashCommit || isUncommittedCommit || isLocalCommit || isUnpushedCommit
                                    ? CANVAS_UNPUSHED_NODE_FILL
                                    : dotFill,
                                  baseStroke: stashOrUncommittedBaseStroke(isStashCommit, !!isUncommittedCommit),
                                  checkoutAccent: clusterCheckoutAccent,
                                  isUserSelected: clusterHasSelectedCommit || clusterHasSelectedHead,
                                  strokeWidth: dotStrokeWidth,
                                  strokeInset: dotStrokeInset,
                                  dashed: !!(isUncommittedCommit || isStashCommit),
                                  isUncommitted: !!isUncommittedCommit,
                                  isStash: isStashCommit,
                                })}
                              </g>
                            );
                          }

                          const canExpandCluster = renderEntries.length > 1;
                          const clusterHasUncommitted = renderEntries.some(
                            (entry) =>
                              entry.item.commit?.kind === 'uncommitted' ||
                              entry.item.commit?.fullSha === 'WORKING_TREE',
                          );
                          const clusterHasStash = renderEntries.some(
                            (entry) => !!entry.item.commit && isStashCommitLike(entry.item.commit),
                          );
                          const clusterHasLocalCommits = renderEntries.some((entry) =>
                            localCommitDotIndices.has(entry.item.index)
                          );
                          const clusterHasUnpushedCommits = renderEntries.some((entry) => {
                            const c = entry.item.commit;
                            if (!c || c.kind === 'uncommitted' || c.fullSha === 'WORKING_TREE') return false;
                            if (isStashCommitLike(c)) return false;
                            return isCommitUnpushed(c.fullSha, c.sha);
                          });
                          const expanded = canExpandCluster ? expandedClumps.get(clusterKey) : undefined;
                          const { isExpanded, phase, phaseEased } = canExpandCluster
                            ? resolveClumpPhase(expanded)
                            : { isExpanded: false, phase: 'collapsed' as const, phaseEased: 0 };

                          if (!isExpanded) {
                            const rectSize = nodeRectSize(count);
                            return (
                              <g key={`branch-overlay-${clusterKey}`}>
                                {renderCommitNodeRect({
                                  nodeKey: clusterKey,
                                  centerX: anchorX,
                                  centerY: anchorY,
                                  rectSize,
                                  innerText: (() => {
                                    const last = renderEntries[renderEntries.length - 1]?.item.commit;
                                    if (!last) return undefined;
                                    if (
                                      last.kind === 'uncommitted' ||
                                      last.fullSha === 'WORKING_TREE' ||
                                      isStashCommitLike(last)
                                    ) {
                                      return undefined;
                                    }
                                    return last.message;
                                  })(),
                                  footerMetaAuthor: (() => {
                                    const latestAuthor =
                                      renderEntries[renderEntries.length - 1]?.item.commit?.author ?? b.lastCommitAuthor;
                                    return `@${latestAuthor}`;
                                  })(),
                                  footerMetaDate: (() => {
                                    const firstDate = renderEntries[0]?.item.commit?.date ?? b.lastCommitDate;
                                    const lastDate = renderEntries[renderEntries.length - 1]?.item.commit?.date ?? b.lastCommitDate;
                                    return fmtClumpDateRange(firstDate, lastDate);
                                  })(),
                                  fill: clusterHasStash || clusterHasUncommitted || clusterHasLocalCommits || clusterHasUnpushedCommits
                                    ? CANVAS_UNPUSHED_NODE_FILL
                                    : dotFill,
                                  baseStroke: clusterLocalSyntheticStroke(clusterHasUncommitted, clusterHasStash),
                                  checkoutAccent: clusterCheckoutAccent,
                                  isUserSelected: clusterHasSelectedCommit || clusterHasSelectedHead,
                                  strokeWidth: dotStrokeWidth,
                                  strokeInset: dotStrokeInset,
                                  dashed: clusterHasUncommitted || clusterHasStash,
                                  isUncommitted: clusterHasUncommitted,
                                  isStash: clusterHasStash,
                                })}
                              </g>
                            );
                          }

                          const localRect = commitRectSize(scaledNodeSize, 0);

                          return (
                            <g key={`branch-overlay-${clusterKey}`}>
                              {renderEntries.map((entry) => {
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

                                const memberPose = interpolateExpandedEntryPose(
                                  { x: anchorX, y: anchorY },
                                  { x: entry.x, y: entry.y },
                                  phase,
                                  phaseEased,
                                );
                                const commitKey = `branch-commit:${b.name}:${commit.fullSha}`;
                                const isUncommittedCommit = commit.kind === 'uncommitted';
                                const isStashCommit = isStashCommitLike(commit);
                                const isLocalCommit = localCommitDotIndices.has(entry.item.index);
                                const isUnpushedCommit =
                                  !isUncommittedCommit &&
                                  !isStashCommit &&
                                  isCommitUnpushed(commit.fullSha, commit.sha);

                                return (
                                  <g
                                    key={`branch-overlay-${commitKey}`}
                                    transform={`translate(${memberPose.x} ${memberPose.y})`}
                                    style={clumpAnimStyleForPhase(phase)}
                                    opacity={memberPose.opacity}
                                  >
                                    <g transform={`scale(${memberPose.scale})`}>
                                      {renderCommitNodeRect({
                                        nodeKey: commitKey,
                                        centerX: 0,
                                        centerY: 0,
                                        rectSize: localRect,
                                        innerText:
                                          isUncommittedCommit || isStashCommit ? undefined : commit.message,
                                        footerMetaAuthor: `@${commit.author ?? b.lastCommitAuthor}`,
                                        footerMetaDate: fmtTooltipDate(commit.date ?? b.lastCommitDate),
                                        fill: isStashCommit || isUncommittedCommit || isLocalCommit || isUnpushedCommit
                                          ? CANVAS_UNPUSHED_NODE_FILL
                                          : dotFill,
                                        baseStroke: stashOrUncommittedBaseStroke(isStashCommit, isUncommittedCommit),
                                        checkoutAccent: commitCheckoutAccent,
                                        isUserSelected:
                                          selectedCommitShaSet.has(commit.fullSha) ||
                                          (clusterHasSelectedHead && commit.fullSha === b.headSha),
                                        strokeWidth: dotStrokeWidth,
                                        strokeInset: dotStrokeInset,
                                        dashed: isUncommittedCommit || isStashCommit,
                                        isUncommitted: isUncommittedCommit,
                                        isStash: isStashCommit,
                                      })}
                                    </g>
                                  </g>
                                );
                              })}
                            </g>
                          );
                        });
                      });
                    })()}
                  </g>

                  {/* Main commit node overlay so branch connectors never render over main clumps. */}
                  {!mainIsUnifiedRender && (
                    <g style={{ opacity: mainTimelineOpacity, transition: 'opacity 0.15s', pointerEvents: 'none' }}>
                      {mainDirectClusters.map((clusterLayout) => {
                        const {
                          cluster,
                          count,
                          clusterKey,
                          memberKeys,
                          preferredAnchorX,
                          preferredAnchorY,
                          clusterHasMainTip,
                          clusterCheckoutAccent,
                          clusterHasSelectedCommit: mainClusterHasSelectedCommit,
                          clusterHasUncommitted,
                          clusterHasStash,
                          clusterHasUnpushed,
                        } = clusterLayout;
                        const motion = resolveClusterMotion(
                          clusterKey,
                          { x: preferredAnchorX, y: preferredAnchorY },
                          memberKeys,
                          count > 1,
                        );
                        const isExpanded = motion.isExpanded;
                        const phase = motion.phase;
                        const phaseEased = motion.phaseEased;
                        const anchorX = motion.anchorX;
                        const anchorY = motion.anchorY;

                        if (count === 1) {
                          const singleMainCommit = cluster.entries[0]?.item;
                          const isUncommittedCommit =
                            singleMainCommit?.fullSha === 'WORKING_TREE' ||
                            singleMainCommit?.kind === 'uncommitted';
                          const isStashCommit = singleMainCommit ? isStashCommitLike(singleMainCommit) : false;
                          const isUnpushedCommit = singleMainCommit
                            ? isCommitUnpushed(singleMainCommit.fullSha, singleMainCommit.sha)
                            : false;
                          const rectSize = commitRectSize(scaledNodeSize);
                          return (
                            <g
                              key={`main-direct-overlay-${clusterKey}`}
                              {...((isUncommittedCommit || isStashCommit) ? { 'data-drag-id': singleMainCommit?.fullSha } : {})}
                            >
                              {renderCommitNodeRect({
                                nodeKey: clusterKey,
                                centerX: anchorX,
                                centerY: anchorY,
                                rectSize,
                                innerText: isUncommittedCommit || isStashCommit ? undefined : singleMainCommit?.message,
                                footerMetaAuthor: `@${singleMainCommit?.author ?? 'unknown'}`,
                                footerMetaDate: singleMainCommit?.date ? fmtTooltipDate(singleMainCommit.date) : 'Unknown date',
                                fill: isStashCommit || isUncommittedCommit || isUnpushedCommit
                                  ? CANVAS_UNPUSHED_NODE_FILL
                                  : CANVAS_NODE_FILL,
                                baseStroke: stashOrUncommittedBaseStroke(isStashCommit, isUncommittedCommit),
                                checkoutAccent: clusterCheckoutAccent,
                                isUserSelected:
                                  mainClusterHasSelectedCommit ||
                                  (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                dashed: isUncommittedCommit || isStashCommit,
                                isUncommitted: isUncommittedCommit,
                                isStash: isStashCommit,
                              })}
                            </g>
                          );
                        }

                        const clusterRectSize = nodeRectSize(count);
                        const localRect = commitRectSize(scaledNodeSize, 0);
                        return (
                          <g key={`main-direct-overlay-${clusterKey}`}>
                            {isExpanded ? (
                              <>
                                {cluster.entries.map((entry) => {
                                  const c = entry.item;
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
                                    checkedOutHeadSha != null &&
                                      (shaMatchesGitRef(c.fullSha, checkedOutHeadSha) ||
                                        shaMatchesGitRef(c.sha, checkedOutHeadSha)),
                                    defaultBranch,
                                    c.fullSha,
                                    c.sha,
                                  );

                                  return (
                                    <g
                                      key={`main-direct-overlay:${c.fullSha}`}
                                      transform={`translate(${memberPose.x} ${memberPose.y})`}
                                      style={clumpAnimStyleForPhase(phase)}
                                      opacity={memberPose.opacity}
                                    >
                                      <g transform={`scale(${memberPose.scale})`}>
                                        {renderCommitNodeRect({
                                          nodeKey: commitKey,
                                          centerX: 0,
                                          centerY: 0,
                                          rectSize: localRect,
                                          innerText: isUncommittedCommit || isStashCommit ? undefined : c.message,
                                          footerMetaAuthor: `@${c.author}`,
                                          footerMetaDate: fmtTooltipDate(c.date),
                                          fill: isStashCommit || isUncommittedCommit || isUnpushedCommit
                                            ? CANVAS_UNPUSHED_NODE_FILL
                                            : CANVAS_NODE_FILL,
                                          baseStroke: stashOrUncommittedBaseStroke(isStashCommit, isUncommittedCommit),
                                          checkoutAccent: commitCheckoutAccent,
                                          isUserSelected:
                                            selectedCommitShaSet.has(c.fullSha) ||
                                            (clusterHasMainTip &&
                                              selectedBranchNameSet.has(defaultBranch) &&
                                              c.fullSha === latestMainCommitSha),
                                          dashed: isUncommittedCommit || isStashCommit,
                                          isUncommitted: isUncommittedCommit,
                                          isStash: isStashCommit,
                                        })}
                                      </g>
                                    </g>
                                  );
                                })}
                              </>
                            ) : (
                              renderCommitNodeRect({
                                nodeKey: clusterKey,
                                centerX: anchorX,
                                centerY: anchorY,
                                rectSize: clusterRectSize,
                                innerText: (() => {
                                  const last = cluster.entries[cluster.entries.length - 1]?.item;
                                  if (!last) return undefined;
                                  if (
                                    last.fullSha === 'WORKING_TREE' ||
                                    last.kind === 'uncommitted' ||
                                    isStashCommitLike(last)
                                  ) {
                                    return undefined;
                                  }
                                  return last.message;
                                })(),
                                footerMetaAuthor: (() => {
                                  const latestAuthor =
                                    cluster.entries[cluster.entries.length - 1]?.item.author ?? 'unknown';
                                  return `@${latestAuthor}`;
                                })(),
                                footerMetaDate: (() => {
                                  const firstDate = cluster.entries[0]?.item.date ?? '';
                                  const lastDate = cluster.entries[cluster.entries.length - 1]?.item.date ?? '';
                                  return fmtClumpDateRange(firstDate, lastDate);
                                })(),
                                fill: clusterHasStash || clusterHasUncommitted || clusterHasUnpushed
                                  ? CANVAS_UNPUSHED_NODE_FILL
                                  : CANVAS_NODE_FILL,
                                baseStroke: clusterLocalSyntheticStroke(clusterHasUncommitted, clusterHasStash),
                                checkoutAccent: clusterCheckoutAccent,
                                isUserSelected:
                                  mainClusterHasSelectedCommit ||
                                  (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                                dashed: clusterHasUncommitted || clusterHasStash,
                                isUncommitted: clusterHasUncommitted,
                                isStash: clusterHasStash,
                              })
                            )}
                          </g>
                        );
                      })}
                    </g>
                  )}

                  {/* Top-most label overlay so labels are always above all rectangle layers. */}
                  <g style={{ pointerEvents: 'none' }}>
                    <g>
                      {(() => {
                        const orderedActiveBranches = orderedActiveBranchesForLayer({
                          includeSelectedPriority: false,
                        });

                        return orderedActiveBranches.flatMap((b) => {
                          const {
                            commitDotClusters,
                            branchEndDotIndex,
                            uniqueAheadCount,
                          } = getBranchRenderLayout(b);

                          return null && commitDotClusters.map((cluster) => {
                            const { realCommitEntries, renderEntries } = resolveBranchClusterEntries(cluster);
                            const count = renderEntries.length;
                            const clusterKey = branchClusterKey(b.name, cluster);
                            const memberKeys = branchClusterMemberKeys(b.name, cluster);
                            const clusterHasBranchTip =
                              branchEndDotIndex != null &&
                              cluster.entries.some((entry) => entry.item.index === branchEndDotIndex);
                            const clusterHasPrimaryCheckoutHead =
                              checkedOutHeadSha != null &&
                              cluster.entries.some((entry) => {
                                const commit = entry.item.commit;
                                if (commit && commit.kind !== 'branch-created') {
                                  return (
                                    shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                                    shaMatchesGitRef(commit.sha, checkedOutHeadSha)
                                  );
                                }
                                if (checkedOutBranchName === b.name && branchEndDotIndex === entry.item.index) {
                                  return shaMatchesGitRef(b.headSha, checkedOutHeadSha);
                                }
                                return false;
                              });
                            const clusterHasOtherWorktreeHead = cluster.entries.some((entry) => {
                              const commit = entry.item.commit;
                              if (commit && commit.kind !== 'branch-created') {
                                return otherWorktreeMatchesBranchCommit(b.name, commit.fullSha, commit.sha ?? '');
                              }
                              if (branchEndDotIndex === entry.item.index) {
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
                            const clusterIsCheckoutAccent = clusterCheckoutAccent;
                            const clusterIsSelected = clusterHasSelectedCommit || clusterHasSelectedHead;
                            const preferredAnchorEntry = branchPreferredAnchorEntry(
                              cluster,
                              realCommitEntries,
                              branchEndDotIndex,
                            );
                            const animatedAnchor = resolveAnimatedClumpAnchor(
                              clusterKey,
                              { x: preferredAnchorEntry.x, y: preferredAnchorEntry.y },
                              memberKeys
                            );
                            const anchorX = animatedAnchor.x;
                            const anchorY = animatedAnchor.y;

                            if (count <= 1) {
                              const commitEntry = renderEntries[0] ?? cluster.entries[cluster.entries.length - 1];
                              const commit = commitEntry.item.commit;
                              const rectSize = commitRectSize(scaledNodeSize);
                              const singleTitleText = fitNodeFrameTitle(
                                b.name,
                                commit?.sha ?? commit?.fullSha ?? b.headSha,
                                rectSize.width,
                              );
                              const accentOutlineOnlyForLabel =
                                (!commit && uniqueAheadCount <= 0) ||
                                (commit?.kind === 'uncommitted' && !commit?.message?.trim());

                              return (
                                <text
                                  key={`branch-label-overlay-${clusterKey}`}
                                  {...((commit?.kind === 'uncommitted' || !!(commit && isStashCommitLike(commit))) ? { 'data-drag-label-id': commit?.fullSha } : {})}
                                  x={anchorX - rectSize.width / 2 + CANVAS_NODE_STROKE_INSET + nodeFrameLabelInsetX}
                                  y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                                  textAnchor="start"
                                  fill={getNodeFrameTitleColor(
                                    clusterKey,
                                    clusterIsCheckoutAccent,
                                    clusterIsSelected,
                                    commit?.kind === 'uncommitted',
                                    !!(commit && isStashCommitLike(commit)),
                                    accentOutlineOnlyForLabel,
                                  )}
                                  fontSize={nodeFrameLabelFontSize}
                                  fontWeight={NODE_FRAME_LABEL_WEIGHT}
                                  pointerEvents="none"
                                >
                                  {singleTitleText}
                                </text>
                              );
                            }

                            const canExpandCluster = renderEntries.length > 1;
                            const expanded = canExpandCluster ? expandedClumps.get(clusterKey) : undefined;
                            const { isExpanded, phase, phaseEased } = canExpandCluster
                              ? resolveClumpPhase(expanded)
                              : { isExpanded: false, phase: 'collapsed' as const, phaseEased: 0 };
                            const isCollapsing = isExpanded && phase === 'collapsing';

                            if (!isExpanded || isCollapsing) {
                              const rectSize = nodeRectSize(count);
                              const clumpCountText = stackCountLabel(count);
                              const latestCommit = renderEntries[renderEntries.length - 1]?.item.commit;
                              const latestLabel =
                                latestCommit?.kind === 'uncommitted'
                                  ? 'Uncommited Changes'
                                  : latestCommit && isStashCommitLike(latestCommit)
                                    ? shortShaLabel(latestCommit.fullSha)
                                    : (latestCommit?.sha ?? latestCommit?.fullSha ?? b.headSha);
                              const clumpTitleText = fitNodeFrameTitle(
                                b.name,
                                latestLabel,
                                rectSize.width,
                                clumpCountText,
                              );
                              const accentOutlineOnlyForClumpLabel =
                                latestCommit?.kind === 'uncommitted' && !latestCommit?.message?.trim();

                              return (
                                <g
                                  key={`branch-label-overlay-${clusterKey}`}
                                  opacity={1}
                                >
                                  <text
                                    x={anchorX + rectSize.width / 2 - CANVAS_NODE_STROKE_INSET - nodeFrameLabelRightInsetX}
                                    y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                                    textAnchor="end"
                                    fontSize={nodeFrameLabelFontSize}
                                    fill={getNodeFrameTitleColor(
                                      clusterKey,
                                      clusterIsCheckoutAccent,
                                      clusterIsSelected,
                                      latestCommit?.kind === 'uncommitted',
                                      !!latestCommit && isStashCommitLike(latestCommit),
                                      accentOutlineOnlyForClumpLabel,
                                    )}
                                    fontWeight={NODE_FRAME_LABEL_WEIGHT}
                                    pointerEvents="none"
                                  >
                                    {clumpCountText}
                                  </text>
                                  <text
                                    x={anchorX - rectSize.width / 2 + CANVAS_NODE_STROKE_INSET + nodeFrameLabelInsetX}
                                    y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                                    textAnchor="start"
                                    fill={getNodeFrameTitleColor(
                                      clusterKey,
                                      clusterIsCheckoutAccent,
                                      clusterIsSelected,
                                      latestCommit?.kind === 'uncommitted',
                                      !!latestCommit && isStashCommitLike(latestCommit),
                                      accentOutlineOnlyForClumpLabel,
                                    )}
                                    fontSize={nodeFrameLabelFontSize}
                                    fontWeight={NODE_FRAME_LABEL_WEIGHT}
                                    pointerEvents="none"
                                  >
                                    {clumpTitleText}
                                  </text>
                                </g>
                              );
                            }

                            const localRect = commitRectSize(scaledNodeSize, 0);
                            const topExpandedEntry = renderEntries.reduce(
                              (top, entry) => {
                                const isBetter = isHorizontal ? entry.x > top.x : entry.y < top.y;
                                return isBetter ? entry : top;
                              },
                              renderEntries[0]
                            );
                            return (
                              <g key={`branch-label-overlay-${clusterKey}`}>
                                {renderEntries.map((entry) => {
                                  const commit = entry.item.commit;
                                  if (!commit?.fullSha) return null;

                                  const memberPose = interpolateExpandedEntryPose(
                                    { x: anchorX, y: anchorY },
                                    { x: entry.x, y: entry.y },
                                    phase,
                                    phaseEased,
                                  );

                                  return (
                                    <g
                                      key={`branch-label-overlay:${b.name}:${commit.fullSha}`}
                                      transform={`translate(${memberPose.x} ${memberPose.y})`}
                                      style={clumpAnimStyleForPhase(phase)}
                                      opacity={memberPose.opacity}
                                    >
                                      <g transform={`scale(${memberPose.scale})`}>
                                        <text
                                          x={-localRect.width / 2 + CANVAS_NODE_STROKE_INSET + nodeFrameLabelInsetX}
                                          y={-localRect.height / 2 - nodeFrameLabelGap}
                                          textAnchor="start"
                                          fill={getNodeFrameTitleColor(
                                            `branch-commit:${b.name}:${commit.fullSha}`,
                                            mergeCheckoutAccent(
                                              checkedOutHeadSha != null &&
                                                (shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                                                  shaMatchesGitRef(commit.sha, checkedOutHeadSha)),
                                              b.name,
                                              commit.fullSha,
                                              commit.sha,
                                            ),
                                            selectedCommitShaSet.has(commit.fullSha),
                                            commit.kind === 'uncommitted',
                                            isStashCommitLike(commit),
                                          )}
                                          fontSize={nodeFrameLabelFontSize}
                                          fontWeight={NODE_FRAME_LABEL_WEIGHT}
                                          pointerEvents="none"
                                        >
                                          {fitNodeFrameTitle(
                                            b.name,
                                            commit.kind === 'uncommitted'
                                              ? 'Uncommited Changes'
                                              : isStashCommitLike(commit)
                                                ? shortShaLabel(commit.fullSha)
                                                : (commit.sha ?? commit.fullSha),
                                            localRect.width,
                                            undefined,
                                            entry === topExpandedEntry
                                          )}
                                        </text>
                                      </g>
                                    </g>
                                  );
                                })}
                              </g>
                            );
                          });
                        });
                      })()}
                    </g>

                    {!mainIsUnifiedRender && (
                      <g style={{ opacity: mainTimelineOpacity, transition: 'opacity 0.15s' }}>
                        {mainDirectClusters.map((clusterLayout) => {
                          const {
                            cluster,
                            count,
                            last,
                            clusterKey,
                            memberKeys,
                            preferredAnchorX,
                            preferredAnchorY,
                          } = clusterLayout;
                          const motion = resolveClusterMotion(
                            clusterKey,
                            { x: preferredAnchorX, y: preferredAnchorY },
                            memberKeys,
                            count > 1,
                          );
                          const isExpanded = motion.isExpanded;
                          const phase = motion.phase;
                          const phaseEased = motion.phaseEased;
                          const isCollapsing = isExpanded && phase === 'collapsing';
                          const anchorX = motion.anchorX;
                          const anchorY = motion.anchorY;
                          const mainClusterHasPrimaryCheckout =
                            checkedOutHeadSha != null &&
                            cluster.entries.some((entry) => {
                              const commit = entry.item;
                              return (
                                shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) ||
                                shaMatchesGitRef(commit.sha, checkedOutHeadSha)
                              );
                            });
                          const mainClusterHasOtherWorktree = cluster.entries.some((entry) => {
                            const c = entry.item;
                            return otherWorktreeMatchesBranchCommit(defaultBranch, c.fullSha, c.sha);
                          });
                          const mainClusterCheckoutAccent = mainClusterHasPrimaryCheckout
                            ? 'primary'
                            : mainClusterHasOtherWorktree
                              ? 'other'
                              : 'none';
                          const mainClusterIsSelected =
                            cluster.entries.some((entry) => selectedCommitShaSet.has(entry.item.fullSha)) ||
                            selectedBranchNameSet.has(defaultBranch);

                          if (count === 1) {
                            const rectSize = commitRectSize(scaledNodeSize);
                            const singleTitleText = fitNodeFrameTitle(
                              defaultBranch,
                              last.kind === 'uncommitted'
                                ? 'Uncommited Changes'
                                : isStashCommitLike(last)
                                  ? shortShaLabel(last.fullSha)
                                  : last.sha ?? last.fullSha,
                              rectSize.width,
                            );
                            return (
                              <text
                                key={`main-label-overlay-${clusterKey}`}
                                {...((last.kind === 'uncommitted' || isStashCommitLike(last)) ? { 'data-drag-label-id': last.fullSha } : {})}
                                x={anchorX - rectSize.width / 2 + CANVAS_NODE_STROKE_INSET + nodeFrameLabelInsetX}
                                y={anchorY - rectSize.height / 2 - nodeFrameLabelGap}
                                textAnchor="start"
                                fill={getNodeFrameTitleColor(
                                  clusterKey,
                                  mainClusterCheckoutAccent,
                                  mainClusterIsSelected,
                                  last.kind === 'uncommitted',
                                  isStashCommitLike(last),
                                )}
                                fontSize={nodeFrameLabelFontSize}
                                fontWeight={NODE_FRAME_LABEL_WEIGHT}
                                pointerEvents="none"
                              >
                                {singleTitleText}
                              </text>
                            );
                          }

                          const clusterRectSize = nodeRectSize(count);
                          const clumpCountText = stackCountLabel(count);
                          const clumpTitleText = fitNodeFrameTitle(
                            defaultBranch,
                            last.kind === 'uncommitted'
                              ? 'Uncommited Changes'
                              : isStashCommitLike(last)
                                ? shortShaLabel(last.fullSha)
                                : last.sha ?? last.fullSha,
                            clusterRectSize.width,
                            clumpCountText,
                          );
                          if (isExpanded && !isCollapsing) {
                            const localRect = commitRectSize(scaledNodeSize, 0);
                            const topEntryForLabels = cluster.entries.reduce(
                              (top, entry) => {
                                const isBetter = isHorizontal ? entry.x > top.x : entry.y < top.y;
                                return isBetter ? entry : top;
                              },
                              cluster.entries[0]
                            );
                            return (
                              <g key={`main-label-overlay-${clusterKey}`}>
                                {cluster.entries.map((entry) => {
                                  const c = entry.item;
                                  const memberPose = interpolateExpandedEntryPose(
                                    { x: anchorX, y: anchorY },
                                    { x: entry.x, y: entry.y },
                                    phase,
                                    phaseEased,
                                  );
                                  return (
                                    <g
                                      key={`main-label-overlay:${c.fullSha}`}
                                      transform={`translate(${memberPose.x} ${memberPose.y})`}
                                      style={clumpAnimStyleForPhase(phase)}
                                      opacity={memberPose.opacity}
                                    >
                                      <g transform={`scale(${memberPose.scale})`}>
                                        <text
                                          x={-localRect.width / 2 + CANVAS_NODE_STROKE_INSET + nodeFrameLabelInsetX}
                                          y={-localRect.height / 2 - nodeFrameLabelGap}
                                          textAnchor="start"
                                          fill={getNodeFrameTitleColor(
                                            `direct:${c.fullSha}`,
                                            mergeCheckoutAccent(
                                              checkedOutHeadSha != null &&
                                                (shaMatchesGitRef(c.fullSha, checkedOutHeadSha) ||
                                                  shaMatchesGitRef(c.sha, checkedOutHeadSha)),
                                              defaultBranch,
                                              c.fullSha,
                                              c.sha,
                                            ),
                                            selectedCommitShaSet.has(c.fullSha),
                                            c.kind === 'uncommitted',
                                            isStashCommitLike(c),
                                          )}
                                          fontSize={nodeFrameLabelFontSize}
                                          fontWeight={NODE_FRAME_LABEL_WEIGHT}
                                          pointerEvents="none"
                                        >
                                          {fitNodeFrameTitle(
                                            defaultBranch,
                                            c.kind === 'uncommitted'
                                              ? 'Uncommited Changes'
                                              : isStashCommitLike(c)
                                                ? shortShaLabel(c.fullSha)
                                                : c.sha ?? c.fullSha,
                                            localRect.width,
                                            undefined,
                                            entry === topEntryForLabels
                                          )}
                                        </text>
                                      </g>
                                    </g>
                                  );
                                })}
                              </g>
                            );
                          }
                          return (
                            <g
                              key={`main-label-overlay-${clusterKey}`}
                              opacity={1}
                            >
                              {(!isExpanded || isCollapsing) && (
                                <text
                                  x={anchorX + clusterRectSize.width / 2 - CANVAS_NODE_STROKE_INSET - nodeFrameLabelRightInsetX}
                                  y={anchorY - clusterRectSize.height / 2 - nodeFrameLabelGap}
                                  textAnchor="end"
                                  fontSize={nodeFrameLabelFontSize}
                                  fill={getNodeFrameTitleColor(
                                    clusterKey,
                                    mainClusterCheckoutAccent,
                                    mainClusterIsSelected,
                                    last.kind === 'uncommitted',
                                    isStashCommitLike(last),
                                  )}
                                  fontWeight={NODE_FRAME_LABEL_WEIGHT}
                                  pointerEvents="none"
                                >
                                  {clumpCountText}
                                </text>
                              )}
                              <text
                                x={anchorX - clusterRectSize.width / 2 + CANVAS_NODE_STROKE_INSET + nodeFrameLabelInsetX}
                                y={anchorY - clusterRectSize.height / 2 - nodeFrameLabelGap}
                                textAnchor="start"
                                fill={getNodeFrameTitleColor(
                                  clusterKey,
                                  mainClusterCheckoutAccent,
                                  mainClusterIsSelected,
                                  last.kind === 'uncommitted',
                                  isStashCommitLike(last),
                                )}
                                fontSize={nodeFrameLabelFontSize}
                                fontWeight={NODE_FRAME_LABEL_WEIGHT}
                                pointerEvents="none"
                              >
                                {clumpTitleText}
                              </text>
                            </g>
                          );
                        })}
                      </g>
                    )}
                  </g>

                  {/* Top-most collapse controls so carets are never occluded by node layers. */}
                  <g>
                    {!mainIsUnifiedRender && mainDirectClusters.map((clusterLayout) => {
                      const { cluster, count, clusterKey, clusterHasMainTip, clusterCheckoutAccent, clusterHasSelectedCommit } = clusterLayout;
                      const expanded = expandedClumps.get(clusterKey);
                      const { isExpanded, phase } = resolveClumpPhase(expanded);
                      if (count <= 1 || !isExpanded || phase !== 'expanded') return null;

                      const localRect = commitRectSize(scaledNodeSize, 0);
                      const collapseIconSize = nodeFrameCollapseIconSize;
                      const collapseHitSize = worldPx(16);
                      const collapseStrokeWidth = 1;
                      const topExpandedEntry = cluster.entries.reduce(
                        (top, entry) => {
                          const isBetter = isHorizontal ? entry.x > top.x : entry.y < top.y;
                          return isBetter ? entry : top;
                        },
                        cluster.entries[0]
                      );
                      const clumpCountAnchorX =
                        topExpandedEntry.x + localRect.width / 2 - CANVAS_NODE_STROKE_INSET - nodeFrameLabelRightInsetX;
                      const clumpCountAnchorY = topExpandedEntry.y - localRect.height / 2 - nodeFrameLabelGap;
                      const collapseHitX = clumpCountAnchorX - collapseHitSize;
                      const collapseHitY = clumpCountAnchorY - collapseHitSize + worldPx(3);
                      // Keep caret right edge locked to the same anchor as count text ("end"-aligned).
                      const collapseCaretX = clumpCountAnchorX - collapseIconSize;
                      const collapseCaretY = collapseHitY + (collapseHitSize - collapseIconSize) / 2;
                      const collapseCaretNudgeX = worldPx(0.8);

                      return (
                        <g
                          key={`main-collapse-control-${clusterKey}`}
                          role="button"
                          tabIndex={0}
                          aria-label="Collapse commit stack"
                          style={{ cursor: 'pointer' }}
                          onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                          onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleClumpExpanded(clusterKey);
                          }}
                          onKeyDown={(e) => {
                            if (e.key !== 'Enter' && e.key !== ' ') return;
                            e.preventDefault();
                            e.stopPropagation();
                            toggleClumpExpanded(clusterKey);
                          }}
                        >
                          <rect
                            x={collapseHitX}
                            y={collapseHitY}
                            width={collapseHitSize}
                            height={collapseHitSize}
                            fill="rgba(0,0,0,0.001)"
                            pointerEvents="all"
                          />
                          <path
                            d={`M ${collapseCaretX + collapseCaretNudgeX + collapseIconSize * 0.16} ${collapseCaretY + collapseIconSize * 0.34} L ${collapseCaretX + collapseCaretNudgeX + collapseIconSize * 0.5} ${collapseCaretY + collapseIconSize * 0.66} L ${collapseCaretX + collapseCaretNudgeX + collapseIconSize * 0.84} ${collapseCaretY + collapseIconSize * 0.34}`}
                            stroke={getNodeFrameTitleColor(
                              clusterKey,
                              clusterCheckoutAccent,
                              clusterHasSelectedCommit || (clusterHasMainTip && selectedBranchNameSet.has(defaultBranch)),
                            )}
                            strokeWidth={collapseStrokeWidth}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            vectorEffect="non-scaling-stroke"
                          />
                        </g>
                      );
                    })}

                    {renderBranches.flatMap((b) => {
                      const { commitDotClusters, branchEndDotIndex } = getBranchRenderLayout(b);
                      return null && commitDotClusters.map((cluster) => {
                        const { renderEntries } = resolveBranchClusterEntries(cluster);
                        const count = renderEntries.length;
                        const clusterKey = branchClusterKey(b.name, cluster);
                        const canExpandCluster = renderEntries.length > 1;
                        const expanded = canExpandCluster ? expandedClumps.get(clusterKey) : undefined;
                        const { isExpanded, phase } = canExpandCluster
                          ? resolveClumpPhase(expanded)
                          : { isExpanded: false, phase: 'collapsed' as const };
                        if (count <= 1 || !isExpanded || phase !== 'expanded') return null;
                        const caretClusterHasBranchTip =
                          branchEndDotIndex != null &&
                          cluster.entries.some((entry) => entry.item.index === branchEndDotIndex);
                        const caretClusterHasPrimaryCheckout =
                          checkedOutHeadSha != null &&
                          cluster.entries.some((entry) => {
                            const commit = entry.item.commit;
                            if (commit && commit.kind !== 'branch-created') {
                              return shaMatchesGitRef(commit.fullSha, checkedOutHeadSha) || shaMatchesGitRef(commit.sha, checkedOutHeadSha);
                            }
                            if (checkedOutBranchName === b.name && branchEndDotIndex === entry.item.index) {
                              return shaMatchesGitRef(b.headSha, checkedOutHeadSha);
                            }
                            return false;
                          });
                        const caretClusterHasOtherWorktree = cluster.entries.some((entry) => {
                          const commit = entry.item.commit;
                          if (commit && commit.kind !== 'branch-created') {
                            return otherWorktreeMatchesBranchCommit(b.name, commit.fullSha, commit.sha ?? '');
                          }
                          if (branchEndDotIndex === entry.item.index) {
                            return otherWorktreeMatchesBranchCommit(
                              b.name,
                              b.headSha,
                              b.headSha.slice(0, 7),
                            );
                          }
                          return false;
                        });
                        const caretClusterCheckoutAccent = caretClusterHasPrimaryCheckout
                          ? 'primary'
                          : caretClusterHasOtherWorktree
                            ? 'other'
                            : 'none';
                        const caretClusterHasSelectedCommit =
                          cluster.entries.some((entry) => {
                            const commitSha = entry.item.commit?.fullSha;
                            return !!commitSha && selectedCommitShaSet.has(commitSha);
                          });
                        const caretClusterIsSelected =
                          caretClusterHasSelectedCommit ||
                          (caretClusterHasBranchTip &&
                            selectedBranchNameSet.has(b.name));

                        const localRect = commitRectSize(scaledNodeSize, 0);
                        const collapseIconSize = nodeFrameCollapseIconSize;
                        const collapseHitSize = worldPx(16);
                        const collapseStrokeWidth = 1;
                        const topExpandedEntry = renderEntries.reduce(
                          (top, entry) => {
                            const isBetter = isHorizontal ? entry.x > top.x : entry.y < top.y;
                            return isBetter ? entry : top;
                          },
                          renderEntries[0]
                        );
                        const clumpCountAnchorX =
                          topExpandedEntry.x + localRect.width / 2 - CANVAS_NODE_STROKE_INSET - nodeFrameLabelRightInsetX;
                        const clumpCountAnchorY = topExpandedEntry.y - localRect.height / 2 - nodeFrameLabelGap;
                        const collapseHitX = clumpCountAnchorX - collapseHitSize;
                        const collapseHitY = clumpCountAnchorY - collapseHitSize + worldPx(3);
                        // Keep caret right edge locked to the same anchor as count text ("end"-aligned).
                        const collapseCaretX = clumpCountAnchorX - collapseIconSize;
                        const collapseCaretY = collapseHitY + (collapseHitSize - collapseIconSize) / 2;
                        const collapseCaretNudgeX = worldPx(0.8);

                        return (
                        <g
                          key={`branch-collapse-control-${clusterKey}`}
                          role="button"
                          tabIndex={0}
                          aria-label="Collapse commit stack"
                          style={{ cursor: 'pointer' }}
                          onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                          onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                              toggleClumpExpanded(clusterKey);
                            }}
                            onKeyDown={(e) => {
                              if (e.key !== 'Enter' && e.key !== ' ') return;
                              e.preventDefault();
                              e.stopPropagation();
                              toggleClumpExpanded(clusterKey);
                            }}
                          >
                            <rect
                              x={collapseHitX}
                              y={collapseHitY}
                              width={collapseHitSize}
                              height={collapseHitSize}
                              fill="rgba(0,0,0,0.001)"
                              pointerEvents="all"
                            />
                            <path
                              d={`M ${collapseCaretX + collapseCaretNudgeX + collapseIconSize * 0.16} ${collapseCaretY + collapseIconSize * 0.34} L ${collapseCaretX + collapseCaretNudgeX + collapseIconSize * 0.5} ${collapseCaretY + collapseIconSize * 0.66} L ${collapseCaretX + collapseCaretNudgeX + collapseIconSize * 0.84} ${collapseCaretY + collapseIconSize * 0.34}`}
                              stroke={getNodeFrameTitleColor(clusterKey, caretClusterCheckoutAccent, caretClusterIsSelected)}
                              strokeWidth={collapseStrokeWidth}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                              vectorEffect="non-scaling-stroke"
                            />
                          </g>
                        );
                      });
                    })}
                        </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
