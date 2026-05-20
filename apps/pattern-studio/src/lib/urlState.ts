import type { TilePatternColorPresetId } from '@git-visualizer/tile-pattern-core';

export type StudioUrlState = {
  seed: string;
  preset: TilePatternColorPresetId | 'custom';
  shapeFill: string;
  width: number;
  height: number;
  displayZoom: number;
};

const parseIntParam = (value: string | null, fallback: number): number => {
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

const parseFloatParam = (value: string | null, fallback: number): number => {
  if (!value) return fallback;
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

export const readStudioUrlState = (fallback: StudioUrlState): StudioUrlState => {
  if (typeof window === 'undefined') return fallback;
  const params = new URLSearchParams(window.location.search);
  const presetParam = params.get('preset');
  const preset =
    presetParam === 'default' ||
    presetParam === 'checked' ||
    presetParam === 'select' ||
    presetParam === 'remote' ||
    presetParam === 'custom'
      ? presetParam
      : fallback.preset;

  const width =
    parseIntParam(params.get('w'), 0) ||
    parseIntParam(params.get('lw'), 0) ||
    parseIntParam(params.get('ew'), 0) ||
    fallback.width;
  const height =
    parseIntParam(params.get('h'), 0) ||
    parseIntParam(params.get('lh'), 0) ||
    parseIntParam(params.get('eh'), 0) ||
    fallback.height;

  return {
    seed: params.get('seed') ?? fallback.seed,
    preset,
    shapeFill: params.get('fill') ?? fallback.shapeFill,
    width,
    height,
    displayZoom: parseFloatParam(params.get('zoom'), fallback.displayZoom),
  };
};

export const writeStudioUrlState = (state: StudioUrlState): void => {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams();
  params.set('seed', state.seed);
  params.set('preset', state.preset);
  params.set('fill', state.shapeFill);
  params.set('w', String(state.width));
  params.set('h', String(state.height));
  params.set('zoom', String(state.displayZoom));
  const next = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState(null, '', next);
};

export const randomSeed = (): string =>
  Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 6);
