import {
  COMMIT_CARD_HEIGHT,
  COMMIT_CARD_WIDTH,
  TILE_PATTERN_DEFAULT_CLIP_INSET,
  TILE_PATTERN_DEFAULT_DISPLAY_ZOOM,
} from './constants';
import { lumMixToResolvedColor } from './color';
import { computeTileGridLayout } from './layout';
import { fnv1a32 } from './prng';

export type TilePatternCircleShape = {
  kind: 'circle';
  cx: number;
  cy: number;
  r: number;
  fill: string;
};

export type TilePatternPathShape = {
  kind: 'path';
  d: string;
  fill: string;
};

export type TilePatternShape = TilePatternCircleShape | TilePatternPathShape;

export type TilePatternScene = {
  seed: string;
  logicalWidth: number;
  logicalHeight: number;
  clipRect: { x: number; y: number; width: number; height: number };
  clipPathId: string;
  shapes: TilePatternShape[];
};

export type TilePatternConfig = {
  seed: string;
  width?: number;
  height?: number;
  displayZoom?: number;
  shapeFill: string;
  clipInset?: number;
};

export const buildTilePatternScene = ({
  seed,
  width = COMMIT_CARD_WIDTH,
  height = COMMIT_CARD_HEIGHT,
  displayZoom = TILE_PATTERN_DEFAULT_DISPLAY_ZOOM,
  shapeFill,
  clipInset = TILE_PATTERN_DEFAULT_CLIP_INSET,
}: TilePatternConfig): TilePatternScene => {
  const layout = computeTileGridLayout({ seed, width, height, displayZoom });
  const shapes: TilePatternShape[] = [];

  for (const cell of layout.cells) {
    const fill = lumMixToResolvedColor(shapeFill, cell.baseLumMix);
    if (cell.drawAsCircle) {
      shapes.push({
        kind: 'circle',
        cx: cell.cx,
        cy: cell.cy,
        r: cell.halfSize,
        fill,
      });
      continue;
    }
    if (!cell.pathD) {
      continue;
    }
    shapes.push({ kind: 'path', d: cell.pathD, fill });
  }

  return {
    seed,
    logicalWidth: width,
    logicalHeight: height,
    clipRect: {
      x: clipInset,
      y: clipInset,
      width: width - clipInset * 2,
      height: height - clipInset * 2,
    },
    clipPathId: `commit-tile-clip-${fnv1a32(seed)}`,
    shapes,
  };
};
