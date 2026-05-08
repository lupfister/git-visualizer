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
const ORTHO_STUB_LEN = 30;
const ORTHO_CORNER_RADIUS = 18;

const faceOutwardUnit = (face: CableFace | undefined): { x: number; y: number } | null => {
  if (face === 'left') return { x: -1, y: 0 };
  if (face === 'right') return { x: 1, y: 0 };
  if (face === 'top') return { x: 0, y: -1 };
  if (face === 'bottom') return { x: 0, y: 1 };
  return null;
};

type Pt = { x: number; y: number };

function buildOrthogonalWaypoints(from: Pt, to: Pt, fromFace?: CableFace, toFace?: CableFace): Pt[] {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const adx = Math.abs(dx);
  const ady = Math.abs(dy);
  if (adx < LOOSE_CABLE_AXIS_EPS || ady < LOOSE_CABLE_AXIS_EPS) return [from, to];
  const fromOut = faceOutwardUnit(fromFace);
  const toOut = faceOutwardUnit(toFace);
  const candidates: Pt[][] = [
    [from, { x: to.x, y: from.y }, to], // horizontal-first
    [from, { x: from.x, y: to.y }, to], // vertical-first
  ];
  const score = (path: Pt[]): number => {
    let s = 0;
    for (let i = 0; i < path.length - 1; i += 1) s += Math.hypot(path[i + 1].x - path[i].x, path[i + 1].y - path[i].y);
    const first = { x: path[1].x - path[0].x, y: path[1].y - path[0].y };
    const last = { x: path[path.length - 1].x - path[path.length - 2].x, y: path[path.length - 1].y - path[path.length - 2].y };
    if (fromOut) {
      const dot = first.x * fromOut.x + first.y * fromOut.y;
      if (dot < 0) s += 5000;
      else if (Math.abs(dot) < 0.5) s += 4500;
    }
    if (toOut) {
      const dot = last.x * toOut.x + last.y * toOut.y;
      if (dot < 0) s += 5000;
      else if (Math.abs(dot) < 0.5) s += 4500;
    }
    return s;
  };
  return score(candidates[0]) < score(candidates[1]) ? candidates[0] : candidates[1];
}

function roundedOrthogonalPathFromWaypoints(points: Pt[], pointFormatter: (x: number, y: number) => string): string {
  if (points.length <= 1) return '';
  if (points.length === 2) return `M ${pointFormatter(points[0].x, points[0].y)} L ${pointFormatter(points[1].x, points[1].y)}`;

  const commands: string[] = [`M ${pointFormatter(points[0].x, points[0].y)}`];
  for (let i = 1; i < points.length - 1; i += 1) {
    const prev = points[i - 1];
    const cur = points[i];
    const next = points[i + 1];
    const inDx = cur.x - prev.x;
    const inDy = cur.y - prev.y;
    const outDx = next.x - cur.x;
    const outDy = next.y - cur.y;
    const inLen = Math.hypot(inDx, inDy);
    const outLen = Math.hypot(outDx, outDy);
    if (inLen < 0.5 || outLen < 0.5) {
      commands.push(`L ${pointFormatter(cur.x, cur.y)}`);
      continue;
    }
    const corner = Math.max(0, Math.min(ORTHO_CORNER_RADIUS, inLen * 0.48, outLen * 0.48));
    if (corner < 0.5) {
      commands.push(`L ${pointFormatter(cur.x, cur.y)}`);
      continue;
    }
    const inUx = inDx / inLen;
    const inUy = inDy / inLen;
    const outUx = outDx / outLen;
    const outUy = outDy / outLen;
    const entry = { x: cur.x - inUx * corner, y: cur.y - inUy * corner };
    const exit = { x: cur.x + outUx * corner, y: cur.y + outUy * corner };
    commands.push(`L ${pointFormatter(entry.x, entry.y)}`);
    commands.push(`Q ${pointFormatter(cur.x, cur.y)} ${pointFormatter(exit.x, exit.y)}`);
  }
  const last = points[points.length - 1];
  commands.push(`L ${pointFormatter(last.x, last.y)}`);
  return commands.join(' ');
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
  const fromOut = faceOutwardUnit(fromFace);
  const toOut = faceOutwardUnit(toFace);
  const stubLen = ORTHO_STUB_LEN;
  const fromStub = fromOut ? { x: fromX + fromOut.x * stubLen, y: fromY + fromOut.y * stubLen } : { x: fromX, y: fromY };
  const toStub = toOut ? { x: toX + toOut.x * stubLen, y: toY + toOut.y * stubLen } : { x: toX, y: toY };
  const waypoints = buildOrthogonalWaypoints(fromStub, toStub, fromFace, toFace);
  return [{ x: fromX, y: fromY }, { x: toX, y: toY }, fromStub, toStub, ...waypoints];
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
  const fromOut = faceOutwardUnit(fromFace);
  const toOut = faceOutwardUnit(toFace);
  const stubLen = ORTHO_STUB_LEN;
  const fromStub = fromOut ? { x: fromX + fromOut.x * stubLen, y: fromY + fromOut.y * stubLen } : { x: fromX, y: fromY };
  const toStub = toOut ? { x: toX + toOut.x * stubLen, y: toY + toOut.y * stubLen } : { x: toX, y: toY };
  const waypoints = buildOrthogonalWaypoints(fromStub, toStub, fromFace, toFace);
  const fullRoute: Pt[] = [{ x: fromX, y: fromY }, ...waypoints, { x: toX, y: toY }];
  return roundedOrthogonalPathFromWaypoints(fullRoute, pointFormatter);
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
