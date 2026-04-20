import React from 'react';

type MapSvgCanvasShellProps = {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  cameraRef: React.RefObject<HTMLDivElement | null>;
  svgRef: React.RefObject<SVGSVGElement | null>;
  zoomLayerRef: React.RefObject<SVGGElement | null>;
  contentLayerRef: React.RefObject<SVGGElement | null>;
  onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  className: string;
  canvasWidth: number;
  canvasHeight: number;
  isOrientationSwitchFading: boolean;
  isResizeSettling: boolean;
  orientationSwitchFadeMs: number;
  svgWidth: number;
  svgHeight: number;
  drawReady: boolean;
  enableTimelineIntroAnimations: boolean;
  animationsLocked: boolean;
  layerCameraScale: { x: number; y: number };
  graphOffsetX: number;
  graphOffsetY: number;
  timelineCanvasVisible: boolean;
  holdTimelineForInitialCenter: boolean;
  initialRevealFadeMs: number;
  svgAreaBg: string;
  graphContentTranslateX: number;
  graphContentTranslateY: number;
  children: React.ReactNode;
};

export function MapSvgCanvasShell({
  scrollRef,
  cameraRef,
  svgRef,
  zoomLayerRef,
  contentLayerRef,
  onMouseDown,
  className,
  canvasWidth,
  canvasHeight,
  isOrientationSwitchFading,
  isResizeSettling,
  orientationSwitchFadeMs,
  svgWidth,
  svgHeight,
  drawReady,
  enableTimelineIntroAnimations,
  animationsLocked,
  layerCameraScale,
  graphOffsetX,
  graphOffsetY,
  timelineCanvasVisible,
  holdTimelineForInitialCenter,
  initialRevealFadeMs,
  svgAreaBg,
  graphContentTranslateX,
  graphContentTranslateY,
  children,
}: MapSvgCanvasShellProps) {
  return (
    <div
      ref={scrollRef}
      onMouseDown={onMouseDown}
      className={className}
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
          transition: isResizeSettling ? 'none' : `opacity ${orientationSwitchFadeMs}ms ease-out`,
        }}
      >
        <svg
          ref={svgRef}
          width={svgWidth}
          height={svgHeight}
          className={[
            'branch-map-svg',
            drawReady && enableTimelineIntroAnimations ? 'timeline-ready' : '',
            animationsLocked ? 'timeline-static' : '',
          ].filter(Boolean).join(' ')}
          style={{
            '--camera-scale': String(layerCameraScale.x),
            minWidth: svgWidth,
            display: 'block',
            position: 'absolute',
            left: graphOffsetX,
            top: graphOffsetY,
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
              transition: `opacity ${initialRevealFadeMs}ms cubic-bezier(0.22, 1, 0.36, 1)`,
              pointerEvents: holdTimelineForInitialCenter ? 'none' : 'auto',
            }}
          >
            <rect
              x={0}
              y={0}
              width={svgWidth}
              height={svgHeight}
              fill={svgAreaBg}
              style={{ pointerEvents: 'none' }}
            />
            <g transform={`translate(${graphContentTranslateX} ${graphContentTranslateY})`}>
              <g ref={contentLayerRef}>{children}</g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
