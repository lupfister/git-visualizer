import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { CARD_HEIGHT, CARD_WIDTH } from './LayoutGrid';
import { computeMapGridInvZoom, MAP_GRID_MIN_DISPLAY_ZOOM } from './mapGridUtils';

/**
 * Target density at `displayZoom === 1` (higher = smaller shapes vs the earlier 16×5 grid).
 * Actual `cols` / `rows` are rounded from counterscaled pitch so the grid always fills the card.
 */
const TILE_COLS_BASE = 26;
const TILE_ROWS_BASE = 9;

/**
 * Column clamp floor must stay low so at max zoom-out (`invZ` large) we are not forced
 * past the counterscaled column count — otherwise tiles shrink instead of tracking typography.
 */
const TILE_COLS_MIN = 5;
const TILE_COLS_MAX = 52;
const TILE_ROWS_MIN = 2;
const TILE_ROWS_MAX = 18;

/**
 * With square tiles sized from `min(cellW, cellH)`, gutters match only when cells are
 * roughly square. Search near the counterscaled column hint for `|cellW - cellH|` minimum.
 */
const pickColumnCountNearSquare = (columnHint: number, rowCount: number): number => {
  const lo = Math.max(TILE_COLS_MIN, columnHint - 10);
  const hi = Math.min(TILE_COLS_MAX, columnHint + 10);
  let best = columnHint;
  let bestDiff = Math.abs(CARD_WIDTH / columnHint - CARD_HEIGHT / rowCount);
  for (let candidate = lo; candidate <= hi; candidate++) {
    const diff = Math.abs(CARD_WIDTH / candidate - CARD_HEIGHT / rowCount);
    if (diff < bestDiff - 1e-9) {
      bestDiff = diff;
      best = candidate;
    } else if (Math.abs(diff - bestDiff) < 1e-9 && Math.abs(candidate - columnHint) < Math.abs(best - columnHint)) {
      best = candidate;
    }
  }
  return best;
};

const fnv1a32 = (value: string): number => {
  let hash = 2166136261 >>> 0;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

const createMulberry32 = (seed: number) => {
  let state = seed;
  return (): number => {
    state += 0x6d2b79f5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

type TileCornerRadii = {
  tl: number;
  tr: number;
  br: number;
  bl: number;
};

const TILE_SHAPE_KINDS = [
  'rect',
  'teardrop',
  'halfMoonRight',
  'halfMoonBottom',
  'circle',
] as const;

type TileShapeKind = (typeof TILE_SHAPE_KINDS)[number];

/** Uniform random shape per cell — stable for a given seed and grid position. */
const pickTileShapeKind = (seed: string, col: number, row: number): TileShapeKind => {
  const random = createMulberry32(fnv1a32(`${seed}|${col}|${row}|shape`));
  const index = Math.floor(random() * TILE_SHAPE_KINDS.length);
  return TILE_SHAPE_KINDS[index] ?? 'rect';
};

/** Max blend toward white — `baseFill` is the minimum brightness; tiles only get lighter. */
const TILE_LUM_MIX_MAX = 0.5;

/** Stable per-cell base luminance mix (0 = token floor). */
const pickTileBaseLumMix = (seed: string, col: number, row: number): number => {
  const random = createMulberry32(fnv1a32(`${seed}|${col}|${row}|lum`));
  const mix = random() * TILE_LUM_MIX_MAX;
  return mix < 0.003 ? 0 : mix;
};

const lumMixToFill = (baseFill: string, mix: number): string => {
  if (mix < 0.003) {
    return baseFill;
  }
  const basePct = (1 - mix) * 100;
  const whitePct = mix * 100;
  return `color-mix(in srgb, ${baseFill} ${basePct}%, white ${whitePct}%)`;
};

const BOOST_EPSILON = 0.006;
/** Overlay peak opacity at full boost (`darken` blend — even on mixed tile luminance). */
const HOVER_OVERLAY_MAX_OPACITY = 0.6;
/** Cursor-sized hit radius in card layout units. */
const CURSOR_RADIUS_LAYOUT = 12;
/** Target boost under cursor while hovering (sustained). */
const HOVER_CURSOR_CAP = 1;
/** Per-frame ease toward cursor target — keeps tiles lit under pointer. */
const HOVER_SUSTAIN_LERP = 0.14;
/** Light deposit on pointer move — builds a wispy trail. */
const HOVER_MOVE_DEPOSIT = 0.11;
/** Single fade rate — trail outside cursor while hovering, and full trail after leave. */
const HOVER_AMBIENT_DECAY = 0.985;

const cursorFalloff = (dist: number): number => {
  if (dist >= CURSOR_RADIUS_LAYOUT) {
    return 0;
  }
  const t = 1 - dist / CURSOR_RADIUS_LAYOUT;
  return t * t * (3 - 2 * t);
};

/** Opacity scales linearly with boost — same max on every tile at full strength. */
const boostToOverlayOpacity = (boost: number): number =>
  Math.max(0, Math.min(1, boost)) * HOVER_OVERLAY_MAX_OPACITY;

const addBoostAt = (
  boosts: Float32Array,
  cols: number,
  rows: number,
  col: number,
  row: number,
  amount: number,
): boolean => {
  if (amount <= 0 || col < 0 || row < 0 || col >= cols || row >= rows) {
    return false;
  }
  const index = row * cols + col;
  const next = Math.min(1, boosts[index] + amount);
  if (next <= boosts[index]) {
    return false;
  }
  boosts[index] = next;
  return true;
};

const sustainCursorBoosts = (
  boosts: Float32Array,
  cols: number,
  cells: TileCellSpec[],
  layoutX: number,
  layoutY: number,
): boolean => {
  let changed = false;

  for (const cell of cells) {
    const dist = Math.hypot(layoutX - cell.cx, layoutY - cell.cy);
    const falloff = cursorFalloff(dist);
    if (falloff <= 0) {
      continue;
    }
    const target = falloff * HOVER_CURSOR_CAP;
    const index = cell.row * cols + cell.col;
    const next = boosts[index] + (target - boosts[index]) * HOVER_SUSTAIN_LERP;
    if (Math.abs(next - boosts[index]) > 0.001) {
      boosts[index] = Math.min(1, next);
      changed = true;
    }
  }

  return changed;
};

const depositAtCursor = (
  boosts: Float32Array,
  cols: number,
  rows: number,
  cells: TileCellSpec[],
  layoutX: number,
  layoutY: number,
  amount: number,
): boolean => {
  let changed = false;

  for (const cell of cells) {
    const dist = Math.hypot(layoutX - cell.cx, layoutY - cell.cy);
    const falloff = cursorFalloff(dist);
    if (falloff <= 0) {
      continue;
    }
    if (addBoostAt(boosts, cols, rows, cell.col, cell.row, falloff * amount)) {
      changed = true;
    }
  }

  return changed;
};

type TileCellSpec = {
  key: string;
  col: number;
  row: number;
  cx: number;
  cy: number;
  baseLumMix: number;
  drawAsCircle: boolean;
  halfSize: number;
  pathD: string | null;
};

type TileGridLayout = {
  cols: number;
  rows: number;
  cellW: number;
  cellH: number;
  cells: TileCellSpec[];
};

const computeTileGridLayout = (seed: string, displayZoom: number): TileGridLayout => {
  const invZ = computeMapGridInvZoom(displayZoom);
  const nominalCellW = (CARD_WIDTH / TILE_COLS_BASE) * invZ;
  const nominalCellH = (CARD_HEIGHT / TILE_ROWS_BASE) * invZ;
  let cols = Math.min(
    TILE_COLS_MAX,
    Math.max(TILE_COLS_MIN, Math.round(CARD_WIDTH / nominalCellW)),
  );
  let rows = Math.min(
    TILE_ROWS_MAX,
    Math.max(TILE_ROWS_MIN, Math.round(CARD_HEIGHT / nominalCellH)),
  );
  if (displayZoom <= MAP_GRID_MIN_DISPLAY_ZOOM + 1e-6) {
    rows = 2;
  }
  cols = pickColumnCountNearSquare(cols, rows);
  const cellW = CARD_WIDTH / cols;
  const cellH = CARD_HEIGHT / rows;
  const minCell = Math.min(cellW, cellH);
  const gap = Math.max(TILE_SHAPE_GAP_FLOOR, minCell * TILE_SHAPE_GAP_RATIO);
  const shapeSize = Math.max(1.2, Math.min(cellW, cellH) - gap);
  const halfSize = shapeSize / 2;
  const cornerRadius = shapeSize * TILE_CORNER_RADIUS_FRACTION;
  const cells: TileCellSpec[] = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cx = (col + 0.5) * cellW;
      const cy = (row + 0.5) * cellH;
      const x = cx - halfSize;
      const y = cy - halfSize;
      const shapeKind = pickTileShapeKind(seed, col, row);
      const baseKind = shapeKind === 'circle' ? 'rect' : shapeKind;
      const radii = applyCardAnchorCornerRadii(
        cornerRadiiForShape(baseKind, cornerRadius),
        col,
        row,
        cols,
        rows,
        cornerRadius,
      );
      const drawAsCircle =
        shapeKind === 'circle' && !isCardAnchorCornerCell(col, row, cols, rows);

      cells.push({
        key: `${col}:${row}`,
        col,
        row,
        cx,
        cy,
        baseLumMix: pickTileBaseLumMix(seed, col, row),
        drawAsCircle,
        halfSize,
        pathD: drawAsCircle
          ? null
          : buildRoundedRectPath(x, y, shapeSize, shapeSize, radii),
      });
    }
  }

  return { cols, rows, cellW, cellH, cells };
};

const cornerRadiiForShape = (kind: TileShapeKind, cornerRadius: number): TileCornerRadii => {
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

/** Grid corner cells align with the card: BL/BR/TR outward corners rounded at 50%; TL stays sharp. */
const applyCardAnchorCornerRadii = (
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

const isCardAnchorCornerCell = (col: number, row: number, cols: number, rows: number): boolean =>
  (col === 0 && row === rows - 1) || (col === cols - 1 && row === rows - 1) || (col === cols - 1 && row === 0);

const buildRoundedRectPath = (
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

type CommitNodeTilePatternProps = {
  /** Stable per node so the motif does not flicker on re-render. */
  seed: string;
  /** Muted surface token without `var()`, e.g. `--checked-muted`. */
  shapeFillCssVar: string;
  /** Matches commit card body text color, e.g. `var(--checked)`. */
  hoverTintColor: string;
  /** Same pipeline as card typography (`--map-inv-zoom` source). */
  displayZoom: number;
};

export type CommitNodeTilePatternHandle = {
  /** Begin sustained hover (no trail decay while active). */
  startHover: () => void;
  /** Card-local layout coordinates (`0…CARD_WIDTH`, `0…CARD_HEIGHT`). */
  applyPointer: (layoutX: number, layoutY: number) => void;
  /** Pointer left the card — trail fades at the same rate as in-card cool-down. */
  endHover: () => void;
};

/** Min gutter in layout units; primary spacing is a fraction of cell size (screen-consistent). */
const TILE_SHAPE_GAP_FLOOR = 0.55;
const TILE_SHAPE_GAP_RATIO = 0.078;
/** Matches CSS `border-radius: 50%` on a square tile — quarter-circle per corner. */
const TILE_CORNER_RADIUS_FRACTION = 0.5;

/**
 * Grid of rects, teardrops, half-moons, and circles — random per cell; every tile’s top-left stays sharp;
 * the grid’s bottom-left, bottom-right, and top-right corner cells round their outward corner at 50%.
 */
export const CommitNodeTilePattern = memo(
  forwardRef<CommitNodeTilePatternHandle, CommitNodeTilePatternProps>(function CommitNodeTilePattern(
    { seed, shapeFillCssVar, hoverTintColor, displayZoom },
    ref,
  ) {
  const fillValue = `var(${shapeFillCssVar})`;
  const layout = useMemo(() => computeTileGridLayout(seed, displayZoom), [seed, displayZoom]);
  const layoutRef = useRef(layout);
  layoutRef.current = layout;

  const [boosts, setBoosts] = useState<Float32Array>(
    () => new Float32Array(layout.cols * layout.rows),
  );
  const boostsRef = useRef(boosts);
  boostsRef.current = boosts;
  const isHoveringRef = useRef(false);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number | null>(null);

  const stopHoverLoop = useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  useEffect(() => {
    const nextBoosts = new Float32Array(layout.cols * layout.rows);
    setBoosts(nextBoosts);
    isHoveringRef.current = false;
    pointerRef.current = null;
  }, [layout.cols, layout.rows]);

  const runHoverFrame = useCallback(() => {
    rafRef.current = null;
    const { cols, rows, cells, cellW, cellH } = layoutRef.current;
    const previous = boostsRef.current;
    const next = new Float32Array(previous);
    let dirty = false;
    let keepLooping = false;

    if (isHoveringRef.current && pointerRef.current) {
      const { x, y } = pointerRef.current;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const index = row * cols + col;
          if (next[index] <= BOOST_EPSILON) {
            continue;
          }
          const cx = (col + 0.5) * cellW;
          const cy = (row + 0.5) * cellH;
          if (Math.hypot(cx - x, cy - y) <= CURSOR_RADIUS_LAYOUT) {
            continue;
          }
          next[index] *= HOVER_AMBIENT_DECAY;
          dirty = true;
        }
      }
      if (sustainCursorBoosts(next, cols, cells, x, y)) {
        dirty = true;
      }
      keepLooping = true;
    } else {
      for (let i = 0; i < next.length; i++) {
        if (next[i] <= BOOST_EPSILON) {
          if (next[i] !== 0) {
            next[i] = 0;
            dirty = true;
          }
          continue;
        }
        next[i] *= HOVER_AMBIENT_DECAY;
        if (next[i] <= BOOST_EPSILON) {
          next[i] = 0;
        } else {
          keepLooping = true;
        }
        dirty = true;
      }
    }

    if (dirty) {
      setBoosts(next);
    }
    if (keepLooping) {
      rafRef.current = requestAnimationFrame(runHoverFrame);
    }
  }, [seed]);

  const ensureHoverLoop = useCallback(() => {
    if (rafRef.current != null) {
      return;
    }
    rafRef.current = requestAnimationFrame(runHoverFrame);
  }, [runHoverFrame]);

  useEffect(() => () => stopHoverLoop(), [stopHoverLoop]);

  useImperativeHandle(
    ref,
    () => ({
      startHover() {
        isHoveringRef.current = true;
        ensureHoverLoop();
      },
      applyPointer(layoutX: number, layoutY: number) {
        const { cells, cols, rows } = layoutRef.current;
        pointerRef.current = { x: layoutX, y: layoutY };
        isHoveringRef.current = true;

        setBoosts((previous) => {
          if (previous.length !== cells.length) {
            return previous;
          }
          const next = new Float32Array(previous);
          if (depositAtCursor(next, cols, rows, cells, layoutX, layoutY, HOVER_MOVE_DEPOSIT)) {
            return next;
          }
          return previous;
        });
        ensureHoverLoop();
      },
      endHover() {
        isHoveringRef.current = false;
        pointerRef.current = null;
        ensureHoverLoop();
      },
    }),
    [ensureHoverLoop, seed],
  );

  const { baseShapes, overlayShapes } = useMemo(() => {
    const base: ReactNode[] = [];
    const overlay: ReactNode[] = [];

    for (const cell of layout.cells) {
      const index = cell.row * layout.cols + cell.col;
      const hoverBoost = boosts[index] ?? 0;
      const restingFill = lumMixToFill(fillValue, cell.baseLumMix);
      const overlayOpacity = boostToOverlayOpacity(hoverBoost);
      const overlayStyle = { mixBlendMode: 'darken' as const };

      if (cell.drawAsCircle) {
        base.push(
          <circle
            key={`${cell.key}:base`}
            cx={cell.cx}
            cy={cell.cy}
            r={cell.halfSize}
            fill={restingFill}
            stroke="none"
          />,
        );
        if (overlayOpacity >= 0.008) {
          overlay.push(
            <circle
              key={`${cell.key}:fx`}
              cx={cell.cx}
              cy={cell.cy}
              r={cell.halfSize}
              fill={hoverTintColor}
              fillOpacity={overlayOpacity}
              stroke="none"
              style={overlayStyle}
            />,
          );
        }
        continue;
      }

      if (!cell.pathD) {
        continue;
      }

      base.push(<path key={`${cell.key}:base`} d={cell.pathD} fill={restingFill} stroke="none" />);
      if (overlayOpacity >= 0.008) {
        overlay.push(
          <path
            key={`${cell.key}:fx`}
            d={cell.pathD}
            fill={hoverTintColor}
            fillOpacity={overlayOpacity}
            stroke="none"
            style={overlayStyle}
          />,
        );
      }
    }

    return { baseShapes: base, overlayShapes: overlay };
  }, [boosts, fillValue, hoverTintColor, layout]);

  const patternClipId = `commit-tile-clip-${fnv1a32(seed)}`;
  const patternClipInset = 1.5;

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full [shape-rendering:geometricPrecision]"
      aria-hidden
      viewBox={`0 0 ${CARD_WIDTH} ${CARD_HEIGHT}`}
      preserveAspectRatio="none"
    >
      <defs>
        <clipPath id={patternClipId}>
          <rect
            x={patternClipInset}
            y={patternClipInset}
            width={CARD_WIDTH - patternClipInset * 2}
            height={CARD_HEIGHT - patternClipInset * 2}
          />
        </clipPath>
      </defs>
      <g clipPath={`url(#${patternClipId})`}>
        {baseShapes}
        {overlayShapes}
      </g>
    </svg>
  );
  }),
);
