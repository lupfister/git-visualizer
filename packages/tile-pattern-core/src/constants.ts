/** Commit card logical size in the map grid (layout units). */
export const COMMIT_CARD_WIDTH = 540;
export const COMMIT_CARD_HEIGHT = 176;

/** Matches `GRID_ZOOM_MIN / GRID_RENDER_ZOOM` in mapGridUtils. */
export const TILE_PATTERN_MIN_DISPLAY_ZOOM = 0.45 / 2.25;

export const TILE_PATTERN_DEFAULT_DISPLAY_ZOOM = 1;

export const TILE_PATTERN_DEFAULT_CLIP_INSET = 1.5;

export const TILE_COLS_BASE = 26;
export const TILE_ROWS_BASE = 9;
export const TILE_COLS_MIN = 5;
export const TILE_COLS_MAX = 52;
export const TILE_ROWS_MIN = 2;
export const TILE_ROWS_MAX = 18;

export const TILE_SHAPE_GAP_FLOOR = 0.55;
export const TILE_SHAPE_GAP_RATIO = 0.078;
export const TILE_CORNER_RADIUS_FRACTION = 0.5;
export const TILE_LUM_MIX_MAX = 0.5;
/** Share of tiles omitted on pushed / remote cards (static gaps when not animated). */
export const TILE_DEFAULT_OMISSION_RATE = 0.3;
/** Share of tiles omitted on working-tree and stash cards (animated). */
export const TILE_UNCOMMITTED_OMISSION_RATE = 0.7;
/** Ms between working-tree omission keyframes (interpolated in between). */
export const TILE_OMISSION_ANIMATION_STEP_MS = 250;
/** Ms after a tile is omitted in the pattern before fade-out begins (tile stays fully visible). */
export const TILE_OMISSION_FADE_OUT_DELAY_MS = 500;
/** Ms to fade tiles out once the delay elapses (may exceed STEP_MS; not capped to one step). */
export const TILE_OMISSION_FADE_OUT_MS = 500;
/** Ms to fade tiles in when a step restores them (shorter than fade-out). */
export const TILE_OMISSION_FADE_IN_MS = 250;

export const MAX_EXPORT_EDGE_PX = 8192;
