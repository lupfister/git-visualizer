import { COMMIT_CARD_HEIGHT, COMMIT_CARD_WIDTH } from './constants';

export type TilePatternColorPresetId = 'default' | 'checked' | 'select' | 'remote';

export type TilePatternColorPreset = {
  id: TilePatternColorPresetId;
  label: string;
  shapeFill: string;
  hoverTint: string;
};

export const TILE_PATTERN_COLOR_PRESETS: Record<
  TilePatternColorPresetId,
  TilePatternColorPreset
> = {
  default: {
    id: 'default',
    label: 'Default',
    shapeFill: '#F2F2F2',
    hoverTint: '#57524d',
  },
  checked: {
    id: 'checked',
    label: 'Checked out',
    shapeFill: '#E8F7FC',
    hoverTint: '#38BDF2',
  },
  select: {
    id: 'select',
    label: 'Selected',
    shapeFill: '#E5F2FF',
    hoverTint: '#158EFC',
  },
  remote: {
    id: 'remote',
    label: 'Remote',
    shapeFill: '#F2ECFD',
    hoverTint: '#8B5CF6',
  },
};

export type AspectRatioPresetId = 'commit-card' | 'square' | '16:9' | '9:16' | 'custom';

export type AspectRatioPreset = {
  id: AspectRatioPresetId;
  label: string;
  width: number;
  height: number;
};

export const TILE_PATTERN_ASPECT_PRESETS: AspectRatioPreset[] = [
  {
    id: 'commit-card',
    label: 'Commit card',
    width: COMMIT_CARD_WIDTH,
    height: COMMIT_CARD_HEIGHT,
  },
  { id: 'square', label: 'Square (1:1)', width: 540, height: 540 },
  { id: '16:9', label: '16:9', width: 1920, height: 1080 },
  { id: '9:16', label: '9:16', width: 1080, height: 1920 },
];

/** Map preset CSS var names to color presets (git-visualizer commit cards). */
export const COMMIT_TILE_CSS_VAR_PRESETS: Record<
  string,
  TilePatternColorPresetId
> = {
  '--muted': 'default',
  '--checked-muted': 'checked',
  '--select-muted': 'select',
  '--remote-muted': 'remote',
};
