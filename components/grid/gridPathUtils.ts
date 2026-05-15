import type { ConnectorFace } from './LayoutGrid';

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

export type CableFace = ConnectorFace;

const CONNECTOR_BUS_OUTSIDE_PX = 40;


const axisFromFace = (face: CableFace | undefined): 'h' | 'v' | null => {
  if (face === 'left' || face === 'right' || face === 'mid-h') return 'h';
  if (face === 'top' || face === 'bottom') return 'v';
  return null;
};

const isVerticalFace = (face: CableFace | undefined): face is 'top' | 'bottom' =>
  face === 'top' || face === 'bottom';

const isHorizontalFace = (face: CableFace | undefined): face is 'left' | 'right' | 'mid-h' =>
  face === 'left' || face === 'right' || face === 'mid-h';

const dedupeConsecutivePolylinePoints = (points: Array<{ x: number; y: number }>): Array<{ x: number; y: number }> => {
  const out: Array<{ x: number; y: number }> = [];
  for (const p of points) {
    const prev = out[out.length - 1];
    if (!prev || Math.abs(prev.x - p.x) >= 0.5 || Math.abs(prev.y - p.y) >= 0.5) out.push(p);
  }
  return out;
};

const trunkYOutsideForBottomBottom = (fromY: number, toY: number): number => Math.max(fromY, toY) + CONNECTOR_BUS_OUTSIDE_PX;

const trunkYOutsideForTopTop = (fromY: number, toY: number): number => Math.min(fromY, toY) - CONNECTOR_BUS_OUTSIDE_PX;

/**
 * Orthogonal polyline: prefers a single 90° bend (full “long” leg on the first axis, then one turn).
 * Same-face vertical pairs (bottom/bottom, top/top) need an outside jog (two bends).
 */
export function getMapGridConnectorPolyline(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  fromFace?: CableFace,
  toFace?: CableFace,
): Array<{ x: number; y: number }> {
  const adx = Math.abs(toX - fromX);
  const ady = Math.abs(toY - fromY);
  const raw: Array<{ x: number; y: number }> = [{ x: fromX, y: fromY }];

  if (isVerticalFace(fromFace) && isVerticalFace(toFace) && fromFace && toFace) {
    if (adx < 0.5) {
      raw.push({ x: toX, y: toY });
      return dedupeConsecutivePolylinePoints(raw);
    }
    if (fromFace === 'bottom' && toFace === 'bottom') {
      const trunkY = trunkYOutsideForBottomBottom(fromY, toY);
      raw.push({ x: fromX, y: trunkY }, { x: toX, y: trunkY }, { x: toX, y: toY });
      return dedupeConsecutivePolylinePoints(raw);
    }
    if (fromFace === 'top' && toFace === 'top') {
      const trunkY = trunkYOutsideForTopTop(fromY, toY);
      raw.push({ x: fromX, y: trunkY }, { x: toX, y: trunkY }, { x: toX, y: toY });
      return dedupeConsecutivePolylinePoints(raw);
    }
    // bottom↔top and other vertical pairs: one bend — run the full first leg, then turn.
    if (shouldUseVerticalFirstElbow(fromX, fromY, toX, toY)) {
      raw.push({ x: fromX, y: toY }, { x: toX, y: toY });
    } else {
      raw.push({ x: toX, y: fromY }, { x: toX, y: toY });
    }
    return dedupeConsecutivePolylinePoints(raw);
  }

  if (fromFace === 'mid-h' && (toFace === 'left' || toFace === 'right')) {
    if (ady < 0.5) {
      raw.push({ x: toX, y: toY });
      return dedupeConsecutivePolylinePoints(raw);
    }
    raw.push({ x: toX, y: fromY }, { x: toX, y: toY });
    return dedupeConsecutivePolylinePoints(raw);
  }

  if (
    isHorizontalFace(fromFace) &&
    isHorizontalFace(toFace) &&
    fromFace !== 'mid-h' &&
    toFace !== 'mid-h'
  ) {
    if (ady < 0.5) {
      raw.push({ x: toX, y: toY });
      return dedupeConsecutivePolylinePoints(raw);
    }
    if (shouldUseVerticalFirstElbow(fromX, fromY, toX, toY)) {
      raw.push({ x: fromX, y: toY }, { x: toX, y: toY });
    } else {
      raw.push({ x: toX, y: fromY }, { x: toX, y: toY });
    }
    return dedupeConsecutivePolylinePoints(raw);
  }

  const fromAxis = axisFromFace(fromFace);
  const toAxis = axisFromFace(toFace);
  if (fromAxis === 'h' && toAxis === 'v') {
    raw.push({ x: toX, y: fromY }, { x: toX, y: toY });
    return dedupeConsecutivePolylinePoints(raw);
  }
  if (fromAxis === 'v' && toAxis === 'h') {
    raw.push({ x: fromX, y: toY }, { x: toX, y: toY });
    return dedupeConsecutivePolylinePoints(raw);
  }

  if (adx < 0.5) {
    raw.push({ x: toX, y: toY });
    return dedupeConsecutivePolylinePoints(raw);
  }
  if (ady < 0.5) {
    raw.push({ x: toX, y: toY });
    return dedupeConsecutivePolylinePoints(raw);
  }

  if (shouldUseVerticalFirstElbow(fromX, fromY, toX, toY)) {
    raw.push({ x: fromX, y: toY }, { x: toX, y: toY });
    return dedupeConsecutivePolylinePoints(raw);
  }

  raw.push({ x: toX, y: fromY }, { x: toX, y: toY });
  return dedupeConsecutivePolylinePoints(raw);
}

const ORTH_EPS = 0.5;

const isHorizontalEdge = (a: { x: number; y: number }, b: { x: number; y: number }): boolean =>
  Math.abs(a.y - b.y) < ORTH_EPS && Math.abs(a.x - b.x) >= ORTH_EPS;

const isVerticalEdge = (a: { x: number; y: number }, b: { x: number; y: number }): boolean =>
  Math.abs(a.x - b.x) < ORTH_EPS && Math.abs(a.y - b.y) >= ORTH_EPS;

const axisLegLength = (from: { x: number; y: number }, to: { x: number; y: number }): number => {
  const dx = Math.abs(to.x - from.x);
  const dy = Math.abs(to.y - from.y);
  if (dx < ORTH_EPS) return dy;
  if (dy < ORTH_EPS) return dx;
  return Math.hypot(dx, dy);
};

/**
 * Rounds each 90° bend of an axis-aligned polyline with quadratic fillets (same geometry as
 * {@link buildRoundedElbowPath} / {@link buildRoundedElbowPathVerticalFirst}).
 */
export function buildRoundedOrthogonalPolylinePath(
  poly: ReadonlyArray<{ x: number; y: number }>,
  cornerR: number,
  pointFormatter: (x: number, y: number) => string,
): string {
  if (poly.length === 0) return '';
  if (poly.length === 1) return `M ${pointFormatter(poly[0].x, poly[0].y)}`;
  if (cornerR < 0.5) {
    let d = `M ${pointFormatter(poly[0].x, poly[0].y)}`;
    for (let i = 1; i < poly.length; i += 1) {
      d += ` L ${pointFormatter(poly[i].x, poly[i].y)}`;
    }
    return d;
  }

  let curX = poly[0].x;
  let curY = poly[0].y;
  let d = `M ${pointFormatter(curX, curY)}`;

  for (let i = 1; i < poly.length - 1; i += 1) {
    const prev = poly[i - 1];
    const B = poly[i];
    const next = poly[i + 1];

    const inH = isHorizontalEdge(prev, B);
    const inV = isVerticalEdge(prev, B);
    const outH = isHorizontalEdge(B, next);
    const outV = isVerticalEdge(B, next);

    const incomingLen = axisLegLength({ x: curX, y: curY }, B);
    const outgoingLen = axisLegLength(B, next);
    const is90 = (inH && outV) || (inV && outH);
    const c = is90 ? Math.max(0, Math.min(cornerR, incomingLen, outgoingLen)) : 0;

    if (c < 0.5) {
      d += ` L ${pointFormatter(B.x, B.y)}`;
      curX = B.x;
      curY = B.y;
      continue;
    }

    if (inH && outV) {
      const h = B.x >= prev.x ? 1 : -1;
      const v = next.y >= B.y ? 1 : -1;
      const pinX = B.x - h * c;
      const pinY = B.y;
      const poutX = B.x;
      const poutY = B.y + v * c;
      d += ` L ${pointFormatter(pinX, pinY)}`;
      d += ` Q ${pointFormatter(B.x, B.y)} ${pointFormatter(poutX, poutY)}`;
      curX = poutX;
      curY = poutY;
    } else {
      const v = B.y >= prev.y ? 1 : -1;
      const h = next.x >= B.x ? 1 : -1;
      const pinX = B.x;
      const pinY = B.y - v * c;
      const poutX = B.x + h * c;
      const poutY = B.y;
      d += ` L ${pointFormatter(pinX, pinY)}`;
      d += ` Q ${pointFormatter(B.x, B.y)} ${pointFormatter(poutX, poutY)}`;
      curX = poutX;
      curY = poutY;
    }
  }

  const last = poly[poly.length - 1];
  d += ` L ${pointFormatter(last.x, last.y)}`;
  return d;
}

export function buildMapGridConnectorPath(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  pointFormatter: (x: number, y: number) => string,
  fromFace?: CableFace,
  toFace?: CableFace,
  cornerRadiusContentPx = 0,
): string {
  const poly = getMapGridConnectorPolyline(fromX, fromY, toX, toY, fromFace, toFace);
  return buildRoundedOrthogonalPolylinePath(poly, cornerRadiusContentPx, pointFormatter);
}

/** Hull for viewport culling of {@link buildMapGridConnectorPath}. */
export function mapGridConnectorHullPoints(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  fromFace?: CableFace,
  toFace?: CableFace,
): Array<{ x: number; y: number }> {
  return getMapGridConnectorPolyline(fromX, fromY, toX, toY, fromFace, toFace);
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
