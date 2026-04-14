export type AnchorPoint = { x: number; y: number };

type PointFormatter = (x: number, y: number) => string;

type BranchPathInput = {
  startX: number;
  forkY: number;
  laneX: number;
  tipY: number;
  cornerR: number;
  pointFormatter: PointFormatter;
};

export function buildBranchOrthogonalPath({
  startX,
  forkY,
  laneX,
  tipY,
  cornerR,
  pointFormatter,
}: BranchPathInput): string {
  if (Math.abs(startX - laneX) < 0.5) {
    return `M ${pointFormatter(laneX, forkY)} L ${pointFormatter(laneX, tipY)}`;
  }

  const horizontalDir = laneX > startX ? 1 : -1;
  const verticalDir = tipY >= forkY ? 1 : -1;
  const corner = Math.max(0, Math.min(cornerR, Math.abs(laneX - startX), Math.abs(tipY - forkY)));
  if (corner < 0.5) {
    return [
      `M ${pointFormatter(startX, forkY)}`,
      `L ${pointFormatter(laneX, forkY)}`,
      `L ${pointFormatter(laneX, tipY)}`,
    ].join(' ');
  }
  const preTurnX = laneX - horizontalDir * corner;
  const postTurnY = forkY + verticalDir * corner;

  return [
    `M ${pointFormatter(startX, forkY)}`,
    `L ${pointFormatter(preTurnX, forkY)}`,
    `Q ${pointFormatter(laneX, forkY)} ${pointFormatter(laneX, postTurnY)}`,
    `L ${pointFormatter(laneX, tipY)}`,
  ].join(' ');
}

type MergePathInput = {
  laneX: number;
  tipY: number;
  mergeX: number;
  mergeY: number;
  cornerR: number;
  pointFormatter: PointFormatter;
};

export function buildMergeOrthogonalPath({
  laneX,
  tipY,
  mergeX,
  mergeY,
  cornerR,
  pointFormatter,
}: MergePathInput): string {
  if (Math.abs(mergeY - tipY) < 0.5) {
    return `M ${pointFormatter(laneX, tipY)} L ${pointFormatter(mergeX, mergeY)}`;
  }

  const horizontalDir = mergeX >= laneX ? 1 : -1;
  const corner = Math.max(0, Math.min(cornerR, Math.abs(mergeY - tipY), Math.abs(mergeX - laneX)));
  if (corner < 0.5) {
    return [
      `M ${pointFormatter(laneX, tipY)}`,
      `L ${pointFormatter(laneX, mergeY)}`,
      `L ${pointFormatter(mergeX, mergeY)}`,
    ].join(' ');
  }
  const preTurnY = mergeY - Math.sign(mergeY - tipY) * corner;
  const cornerX = laneX + horizontalDir * corner;

  return [
    `M ${pointFormatter(laneX, tipY)}`,
    `L ${pointFormatter(laneX, preTurnY)}`,
    `Q ${pointFormatter(laneX, mergeY)} ${pointFormatter(cornerX, mergeY)}`,
    `L ${pointFormatter(mergeX, mergeY)}`,
  ].join(' ');
}

export function commitRectSize(baseNodeSize: number, clusterBoost = 0): {
  width: number;
  height: number;
  radius: number;
} {
  const height = Math.max(8, baseNodeSize - 2 + clusterBoost);
  const width = height * 2;
  const radius = 0;
  return { width, height, radius };
}
