/** SVG path `d` for rounded elbow connectors (content space). */
export function buildRoundedElbowPath(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  cornerR: number,
  pointFormatter: (x: number, y: number) => string,
  tipGap = 0,
): string {
  const finalY = toY - Math.sign(toY - fromY || 1) * tipGap;
  const corner = Math.max(0, Math.min(cornerR, Math.abs(toX - fromX), Math.abs(toY - fromY)));
  if (corner < 0.5) {
    return [
      `M ${pointFormatter(fromX, fromY)}`,
      `L ${pointFormatter(toX, fromY)}`,
      `L ${pointFormatter(toX, finalY)}`,
    ].join(' ');
  }
  const horizontalDir = toX >= fromX ? 1 : -1;
  const verticalDir = toY >= fromY ? 1 : -1;
  const preTurnX = toX - horizontalDir * corner;
  const postTurnY = finalY - verticalDir * corner;
  return [
    `M ${pointFormatter(fromX, fromY)}`,
    `L ${pointFormatter(preTurnX, fromY)}`,
    `Q ${pointFormatter(toX, fromY)} ${pointFormatter(toX, fromY + verticalDir * corner)}`,
    `L ${pointFormatter(toX, postTurnY)}`,
    `L ${pointFormatter(toX, finalY)}`,
  ].join(' ');
}

/** Same as {@link buildRoundedElbowPath} but runs vertical then horizontal (mirror geometry). */
export function buildRoundedElbowPathVerticalFirst(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  cornerR: number,
  pointFormatter: (x: number, y: number) => string,
  tipGap = 0,
): string {
  const finalX = toX - Math.sign(toX - fromX || 1) * tipGap;
  const corner = Math.max(0, Math.min(cornerR, Math.abs(toX - fromX), Math.abs(toY - fromY)));
  if (corner < 0.5) {
    return [
      `M ${pointFormatter(fromX, fromY)}`,
      `L ${pointFormatter(fromX, toY)}`,
      `L ${pointFormatter(finalX, toY)}`,
    ].join(' ');
  }
  const horizontalDir = toX >= fromX ? 1 : -1;
  const verticalDir = toY >= fromY ? 1 : -1;
  const preTurnY = toY - verticalDir * corner;
  const postTurnX = finalX - horizontalDir * corner;
  return [
    `M ${pointFormatter(fromX, fromY)}`,
    `L ${pointFormatter(fromX, preTurnY)}`,
    `Q ${pointFormatter(fromX, toY)} ${pointFormatter(fromX + horizontalDir * corner, toY)}`,
    `L ${pointFormatter(postTurnX, toY)}`,
    `L ${pointFormatter(finalX, toY)}`,
  ].join(' ');
}

/** For left-to-right timelines: use vertical-first elbows when the dominant offset is vertical. */
export function shouldUseVerticalFirstElbow(fromX: number, fromY: number, toX: number, toY: number): boolean {
  return Math.abs(toY - fromY) > Math.abs(toX - fromX);
}

export function buildChevronArrowHead(
  tipX: number,
  tipY: number,
  pointFormatter: (x: number, y: number) => string,
  direction: 'up' | 'down' | 'left' | 'right' = 'down',
  size = 14,
  tipYOffset = 0,
): string {
  const y = tipY + tipYOffset;
  const wingLength = size * 0.6;
  const wingSpread = size * 0.45;
  if (direction === 'right') {
    return [
      `M ${pointFormatter(tipX, y)}`,
      `L ${pointFormatter(tipX - wingLength, y - wingSpread)}`,
      `M ${pointFormatter(tipX, y)}`,
      `L ${pointFormatter(tipX - wingLength, y + wingSpread)}`,
    ].join(' ');
  }
  if (direction === 'left') {
    return [
      `M ${pointFormatter(tipX, y)}`,
      `L ${pointFormatter(tipX + wingLength, y - wingSpread)}`,
      `M ${pointFormatter(tipX, y)}`,
      `L ${pointFormatter(tipX + wingLength, y + wingSpread)}`,
    ].join(' ');
  }
  if (direction === 'up') {
    return [
      `M ${pointFormatter(tipX, y)}`,
      `L ${pointFormatter(tipX - wingSpread, y + wingLength)}`,
      `M ${pointFormatter(tipX, y)}`,
      `L ${pointFormatter(tipX + wingSpread, y + wingLength)}`,
    ].join(' ');
  }
  return [
    `M ${pointFormatter(tipX, y)}`,
    `L ${pointFormatter(tipX - wingSpread, y - wingLength)}`,
    `M ${pointFormatter(tipX, y)}`,
    `L ${pointFormatter(tipX + wingSpread, y - wingLength)}`,
  ].join(' ');
}
