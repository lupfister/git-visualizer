import type { TilePatternScene } from '@git-visualizer/tile-pattern-core';

type PatternPreviewProps = {
  scene: TilePatternScene;
  backgroundMode: 'transparent' | 'background' | 'checkerboard';
  className?: string;
};

export const PatternPreview = ({ scene, backgroundMode, className }: PatternPreviewProps) => {
  const { logicalWidth, logicalHeight, clipRect, clipPathId, shapes } = scene;

  const wrapperClass =
    backgroundMode === 'checkerboard'
      ? 'checkerboard'
      : backgroundMode === 'background'
        ? 'bg-background'
        : '';

  return (
    <div
      className={`flex h-full min-h-0 w-full items-center justify-center overflow-hidden rounded-xl border border-border/50 p-6 ${wrapperClass} ${className ?? ''}`}
    >
      <svg
        viewBox={`0 0 ${logicalWidth} ${logicalHeight}`}
        className="max-h-full max-w-full shadow-sm"
        style={{ aspectRatio: `${logicalWidth} / ${logicalHeight}` }}
        aria-hidden
      >
        <defs>
          <clipPath id={clipPathId}>
            <rect
              x={clipRect.x}
              y={clipRect.y}
              width={clipRect.width}
              height={clipRect.height}
            />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipPathId})`}>
          {shapes.map((shape, index) => {
            if (shape.kind === 'circle') {
              return (
                <circle
                  key={`${index}-c`}
                  cx={shape.cx}
                  cy={shape.cy}
                  r={shape.r}
                  fill={shape.fill}
                />
              );
            }
            return <path key={`${index}-p`} d={shape.d} fill={shape.fill} />;
          })}
        </g>
      </svg>
    </div>
  );
};
