import { commitRectSize } from './LayoutSvg';

export const LEFT_PAD = 0;
export const RIGHT_PAD = 0;
export const NODE_SIZE = 24;
export const CORNER_R = 20;
export const BRANCH_HIT_STROKE_WIDTH = 48;
export const BRANCH_HIT_END_INSET = 10;

export const ZOOM_DEFAULT = 2;
export const ZOOM_MIN = 2;
export const ZOOM_MAX = 30;
export const ZOOM_WHEEL_EXP_SENSITIVITY = 0.0025;
export const ZOOM_WHEEL_DELTA_MAX_PX = 180;
export const CAMERA_UI_SYNC_MS = 24;
export const RESIZE_SETTLE_MS = 140;
export const CANVAS_PAD_X = 0;
export const CANVAS_PAD_Y = 0;
export const MATCH_SVG_ASPECT_TO_VIEWPORT = true;
export const SVG_LAYOUT_TAIL_X = 0;
export const SVG_LAYOUT_TAIL_Y = 0;
export const GRID_VIEW_PAD_X = 0;
export const SVG_CONTENT_PADDING_BASE = 0;
export const SVG_CONTENT_PADDING_VIEWPORT_REF_MIN = 360;
export const SVG_CONTENT_PADDING_MAX = 0;
export const SVG_AREA_BG = 'transparent';
export const TIME_SCALE_DEFAULT = 0.5;

export const GRID_NODE_RECT = commitRectSize(NODE_SIZE, 0);
export const GRID_CELL_GAP = 8;
export const GRID_ROW_GAP = GRID_NODE_RECT.height + GRID_CELL_GAP;
export const GRID_LANE_WIDTH = GRID_NODE_RECT.width + GRID_CELL_GAP;
export const GRID_LANE_OFFSET_X = 0;
export const BRANCH_COLUMN_REUSE_TIME_GAP_FACTOR = 0.35;
export const GRID_ROW_SHARE_TIME_TOLERANCE_FACTOR = 0.52;
export const GRID_ROUTE_CORNER_R = 9;
export const GRID_MERGE_EVENT_ROW_NUDGE = 0.001;

export const LOCAL_UNPUSHED_GRAY = '#E0E0E0';
export const CANVAS_NEUTRAL_GRAY = '#E0E0E0';
export const CANVAS_NEUTRAL_GRAY_HOVER = '#7CB0F8';
export const CANVAS_NODE_FILL = '#F5F5F5';
export const HOVER_NODE_FILL = '#F0F6FE';
export const CANVAS_UNPUSHED_NODE_FILL = '#FAFAF9';
export const CANVAS_UNPUSHED_NODE_FILL_HEX = '#FAFAF9';
export const CANVAS_STASH_NODE_STROKE = '#D4A82A';
export const STASH_LABEL_TEXT = '#B8860B';
export const CANVAS_NODE_STROKE = '#E0E0E0';
export const CANVAS_NODE_STROKE_WIDTH = 1;
export const CANVAS_NODE_STROKE_INSET = CANVAS_NODE_STROKE_WIDTH / 2;
export const COMMIT_NODE_CORNER_RADIUS = 6;
export const DEBUG_SHOW_BRANCH_HIT_AREAS = false;
export const DEBUG_BRANCH_HIT_AREA_COLOR = '#ef4444';
export const DEBUG_BRANCH_HIT_AREA_OPACITY = 0.25;
export const UNPUSHED_LANE_STROKE_VISUAL_COMP = 0.15;
export const CLUMP_COUNT_MAX = 99;
export const CHECKED_OUT_AHEAD_OFFSET_WORLD = 120;
export const CHECKED_OUT_SELECTION_STROKE = '#5EB9ED';
export const CHECKED_OUT_SELECTION_FILL = '#EDF7FD';
export const CHECKED_OUT_SELECTION_HOVER_STROKE = '#64A1F7';
export const WORKTREE_OTHER_STROKE = '#0F9489';
export const WORKTREE_OTHER_FILL = '#E6FAF7';
export const WORKTREE_OTHER_HOVER_STROKE = '#0D7D72';
export const WORKTREE_OTHER_TITLE = '#0B6B63';
export const WORKTREE_OTHER_INNER_TEXT = '#0B5C56';
export const USER_SELECTION_STROKE = '#3D8AF5';
export const USER_SELECTION_FILL = '#E7F0FE';
export const CHECKED_OUT_PULSE_MS = 1800;
export const INITIAL_CENTER_SETTLE_MS = CHECKED_OUT_PULSE_MS;
export const INITIAL_REVEAL_FADE_MS = CHECKED_OUT_PULSE_MS;
export const ENABLE_TIMELINE_INTRO_ANIMATIONS = false;
export const ENABLE_NODE_PUSH_DEBUG_LABEL = false;
export const DROPDOWN_SPRING_VARIANTS = {
  closed: {
    opacity: 0,
    y: 12,
    scale: 0.95,
    transition: { type: 'spring', stiffness: 1520, damping: 40, mass: 0.24 },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 2560, damping: 42, mass: 0.2 },
  },
} as const;
export const BRANCH_MAP_SVG_FONT_FAMILY = 'system-ui, -apple-system, sans-serif';
export const ORIENTATION_SWITCH_FADE_MS = 140;

export const COMMIT_TOOLTIP_PREVIEW_MAX = 120;
export const COMMIT_CLUSTER_PREVIEW_MAX = 90;
export const PROMPT_TOOLTIP_PREVIEW_MAX = 120;
export const PROMPT_CLUSTER_PREVIEW_MAX = 90;
