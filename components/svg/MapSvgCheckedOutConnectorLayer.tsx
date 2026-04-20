type Point = { x: number; y: number };

type MapSvgCheckedOutConnectorLayerProps = {
  checkedOutHasUncommittedChanges: boolean;
  checkedOutDisplayIndicatorLocal: Point | null;
  checkedOutIndicatorLocal: Point | null;
  cornerR: number;
  pathCoord: (x: number, y: number) => string;
  stroke: string;
};

export function MapSvgCheckedOutConnectorLayer({
  checkedOutHasUncommittedChanges,
  checkedOutDisplayIndicatorLocal,
  checkedOutIndicatorLocal,
  cornerR,
  pathCoord,
  stroke,
}: MapSvgCheckedOutConnectorLayerProps) {
  if (!checkedOutHasUncommittedChanges || !checkedOutDisplayIndicatorLocal || !checkedOutIndicatorLocal) {
    return null;
  }

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
        stroke={stroke}
        strokeWidth={0.75}
        pathLength={1}
        vectorEffect="non-scaling-stroke"
      />
    </g>
  );
}
