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

export type CableFace = 'left' | 'right' | 'top' | 'bottom';

const LOOSE_CABLE_AXIS_EPS = 8;
/** When both legs are at least this long (px), use a soft orthogonal elbow instead of one diagonal cubic. */
const LOOSE_CABLE_DIAG_MIN = 44;
/** Visual radius target for loose-cable elbow corners. */
const LOOSE_CABLE_CORNER_RADIUS = 120;

type LooseCableGeo =
  | { kind: 'line' }
  | { kind: 'chord'; c1x: number; c1y: number; c2x: number; c2y: number }
  | {
      kind: 'elbowH';
      cx: number;
      cy: number;
      s1c1x: number;
      s1c1y: number;
      s1c2x: number;
      s1c2y: number;
      s2c1x: number;
      s2c1y: number;
      s2c2x: number;
      s2c2y: number;
    }
  | {
      kind: 'elbowV';
      cx: number;
      cy: number;
      s1c1x: number;
      s1c1y: number;
      s1c2x: number;
      s1c2y: number;
      s2c1x: number;
      s2c1y: number;
      s2c2x: number;
      s2c2y: number;
    };

const axisFromFace = (face: CableFace | undefined): 'h' | 'v' | null => {
  if (face === 'left' || face === 'right') return 'h';
  if (face === 'top' || face === 'bottom') return 'v';
  return null;
};

function looseCableGeometry(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  fromFace?: CableFace,
  toFace?: CableFace,
): LooseCableGeo {
  const dx = toX - fromX;
  const dy = toY - fromY;
  const adx = Math.abs(dx);
  const ady = Math.abs(dy);
  const len = Math.hypot(dx, dy);
  if (len < 0.5) return { kind: 'line' };

  const sdx = dx >= 0 ? 1 : -1;
  const sdy = dy >= 0 ? 1 : -1;

  // Nearly axis-aligned: single chord-aligned cubic (soft “straight” run).
  if (Math.min(adx, ady) < LOOSE_CABLE_AXIS_EPS) {
    const ux = dx / len;
    const uy = dy / len;
    const pull = Math.min(240, Math.max(56, len * 0.42));
    return {
      kind: 'chord',
      c1x: fromX + ux * pull,
      c1y: fromY + uy * pull,
      c2x: toX - ux * pull,
      c2y: toY - uy * pull,
    };
  }

  // Strong diagonal: two cubics with a rounded elbow (horizontal-first or vertical-first).
  if (Math.min(adx, ady) < LOOSE_CABLE_DIAG_MIN) {
    const ux = dx / len;
    const uy = dy / len;
    const pull = Math.min(240, Math.max(56, len * 0.42));
    return {
      kind: 'chord',
      c1x: fromX + ux * pull,
      c1y: fromY + uy * pull,
      c2x: toX - ux * pull,
      c2y: toY - uy * pull,
    };
  }

  const hPull1 = Math.min(160, adx * 0.42);
  const hPull2 = Math.min(100, adx * 0.22);
  const vPull1 = Math.min(120, ady * 0.32);
  const vPull2 = Math.min(160, ady * 0.42);

  const fromAxis = axisFromFace(fromFace);
  const toAxis = axisFromFace(toFace);
  const verticalFirst =
    (fromAxis === 'v' && toAxis === 'h') ||
    (fromAxis === 'v' && toAxis == null && ady >= adx) ||
    (fromAxis == null && toAxis === 'h' && ady >= adx) ||
    (fromAxis === 'v' && toAxis === 'v') ||
    (fromAxis == null && toAxis == null && ady > adx);
  if (!verticalFirst) {
    const cx = toX;
    const cy = fromY;
    return {
      kind: 'elbowH',
      cx,
      cy,
      s1c1x: fromX + sdx * hPull1,
      s1c1y: fromY,
      s1c2x: cx - sdx * hPull2,
      s1c2y: cy,
      s2c1x: cx,
      s2c1y: cy + sdy * vPull1,
      s2c2x: toX,
      s2c2y: toY - sdy * vPull2,
    };
  }

  const cx = fromX;
  const cy = toY;
  return {
    kind: 'elbowV',
    cx,
    cy,
    s1c1x: fromX,
    s1c1y: fromY + sdy * vPull2,
    s1c2x: cx,
    s1c2y: cy - sdy * vPull1,
    s2c1x: cx + sdx * hPull1,
    s2c1y: cy,
    s2c2x: toX - sdx * hPull2,
    s2c2y: toY,
  };
}

/** All points whose axis-aligned bounding box contains the loose cable path (for viewport cull). */
export function looseCablePathHullPoints(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  fromFace?: CableFace,
  toFace?: CableFace,
): Array<{ x: number; y: number }> {
  const g = looseCableGeometry(fromX, fromY, toX, toY, fromFace, toFace);
  if (g.kind === 'line') {
    return [
      { x: fromX, y: fromY },
      { x: toX, y: toY },
    ];
  }
  if (g.kind === 'chord') {
    return [
      { x: fromX, y: fromY },
      { x: toX, y: toY },
      { x: g.c1x, y: g.c1y },
      { x: g.c2x, y: g.c2y },
    ];
  }
  if (g.kind === 'elbowH') {
    return [
      { x: fromX, y: fromY },
      { x: toX, y: toY },
      { x: g.cx, y: g.cy },
      { x: g.s1c1x, y: g.s1c1y },
      { x: g.s1c2x, y: g.s1c2y },
      { x: g.s2c1x, y: g.s2c1y },
      { x: g.s2c2x, y: g.s2c2y },
    ];
  }
  return [
    { x: fromX, y: fromY },
    { x: toX, y: toY },
    { x: g.cx, y: g.cy },
    { x: g.s1c1x, y: g.s1c1y },
    { x: g.s1c2x, y: g.s1c2y },
    { x: g.s2c1x, y: g.s2c1y },
    { x: g.s2c2x, y: g.s2c2y },
  ];
}

/**
 * Loose cables: soft cubics, with a smooth horizontal/vertical elbow when both Δx and Δy are large
 * (avoids long pure diagonals while staying curved, not rigid grid elbows).
 */
export function buildLooseCablePath(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  pointFormatter: (x: number, y: number) => string,
  fromFace?: CableFace,
  toFace?: CableFace,
): string {
  const g = looseCableGeometry(fromX, fromY, toX, toY, fromFace, toFace);
  if (g.kind === 'line') {
    return [`M ${pointFormatter(fromX, fromY)}`, `L ${pointFormatter(toX, toY)}`].join(' ');
  }
  if (g.kind === 'chord') {
    return [
      `M ${pointFormatter(fromX, fromY)}`,
      `C ${pointFormatter(g.c1x, g.c1y)} ${pointFormatter(g.c2x, g.c2y)} ${pointFormatter(toX, toY)}`,
    ].join(' ');
  }
  if (g.kind === 'elbowH') {
    const cornerR = Math.max(8, Math.min(LOOSE_CABLE_CORNER_RADIUS, Math.abs(toX - fromX) * 0.48, Math.abs(toY - fromY) * 0.48));
    const hDir = toX >= fromX ? 1 : -1;
    const vDir = toY >= fromY ? 1 : -1;
    const preCornerX = g.cx - hDir * cornerR;
    const postCornerY = g.cy + vDir * cornerR;
    return [
      `M ${pointFormatter(fromX, fromY)}`,
      `C ${pointFormatter(g.s1c1x, g.s1c1y)} ${pointFormatter(preCornerX - hDir * cornerR * 0.5, g.cy)} ${pointFormatter(preCornerX, g.cy)}`,
      `Q ${pointFormatter(g.cx, g.cy)} ${pointFormatter(g.cx, postCornerY)}`,
      `C ${pointFormatter(g.cx, postCornerY + vDir * cornerR * 0.5)} ${pointFormatter(g.s2c2x, g.s2c2y)} ${pointFormatter(toX, toY)}`,
    ].join(' ');
  }
  const cornerR = Math.max(8, Math.min(LOOSE_CABLE_CORNER_RADIUS, Math.abs(toX - fromX) * 0.48, Math.abs(toY - fromY) * 0.48));
  const hDir = toX >= fromX ? 1 : -1;
  const vDir = toY >= fromY ? 1 : -1;
  const preCornerY = g.cy - vDir * cornerR;
  const postCornerX = g.cx + hDir * cornerR;
  return [
    `M ${pointFormatter(fromX, fromY)}`,
    `C ${pointFormatter(g.s1c1x, g.s1c1y)} ${pointFormatter(g.cx, preCornerY - vDir * cornerR * 0.5)} ${pointFormatter(g.cx, preCornerY)}`,
    `Q ${pointFormatter(g.cx, g.cy)} ${pointFormatter(postCornerX, g.cy)}`,
    `C ${pointFormatter(postCornerX + hDir * cornerR * 0.5, g.cy)} ${pointFormatter(g.s2c2x, g.s2c2y)} ${pointFormatter(toX, toY)}`,
  ].join(' ');
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
