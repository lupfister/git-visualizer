export type TileCornerRadii = {
  tl: number;
  tr: number;
  br: number;
  bl: number;
};

export const TILE_SHAPE_KINDS = [
  'rect',
  'teardrop',
  'halfMoonRight',
  'halfMoonBottom',
  'circle',
] as const;

export type TileShapeKind = (typeof TILE_SHAPE_KINDS)[number];

export const cornerRadiiForShape = (kind: TileShapeKind, cornerRadius: number): TileCornerRadii => {
  const sharp = 0;
  const round = cornerRadius;

  switch (kind) {
    case 'teardrop':
      return { tl: sharp, tr: round, br: round, bl: round };
    case 'halfMoonRight':
      return { tl: sharp, tr: round, br: round, bl: sharp };
    case 'halfMoonBottom':
      return { tl: sharp, tr: sharp, br: round, bl: round };
    case 'rect':
    default:
      return { tl: sharp, tr: sharp, br: sharp, bl: sharp };
  }
};

export const applyCardAnchorCornerRadii = (
  radii: TileCornerRadii,
  col: number,
  row: number,
  cols: number,
  rows: number,
  cornerRadius: number,
): TileCornerRadii => {
  const round = cornerRadius;
  const isBottomLeftCell = col === 0 && row === rows - 1;
  const isBottomRightCell = col === cols - 1 && row === rows - 1;
  const isTopRightCell = col === cols - 1 && row === 0;

  return {
    tl: 0,
    tr: isTopRightCell ? round : radii.tr,
    br: isBottomRightCell ? round : radii.br,
    bl: isBottomLeftCell ? round : radii.bl,
  };
};

export const isCardAnchorCornerCell = (
  col: number,
  row: number,
  cols: number,
  rows: number,
): boolean =>
  (col === 0 && row === rows - 1) ||
  (col === cols - 1 && row === rows - 1) ||
  (col === cols - 1 && row === 0);

export const buildRoundedRectPath = (
  x: number,
  y: number,
  width: number,
  height: number,
  radii: TileCornerRadii,
): string => {
  const cap = Math.min(width, height) / 2;
  const tl = Math.min(radii.tl, cap);
  const tr = Math.min(radii.tr, cap);
  const br = Math.min(radii.br, cap);
  const bl = Math.min(radii.bl, cap);
  const right = x + width;
  const bottom = y + height;
  const parts: string[] = [`M ${x + tl} ${y}`, `H ${right - tr}`];

  if (tr > 0) {
    parts.push(`A ${tr} ${tr} 0 0 1 ${right} ${y + tr}`);
  } else {
    parts.push(`L ${right} ${y}`);
  }

  parts.push(`V ${bottom - br}`);

  if (br > 0) {
    parts.push(`A ${br} ${br} 0 0 1 ${right - br} ${bottom}`);
  } else {
    parts.push(`L ${right} ${bottom}`);
  }

  parts.push(`H ${x + bl}`);

  if (bl > 0) {
    parts.push(`A ${bl} ${bl} 0 0 1 ${x} ${bottom - bl}`);
  } else {
    parts.push(`L ${x} ${bottom}`);
  }

  parts.push(`V ${y + tl}`);

  if (tl > 0) {
    parts.push(`A ${tl} ${tl} 0 0 1 ${x + tl} ${y}`);
  }

  parts.push('Z');
  return parts.join(' ');
};
