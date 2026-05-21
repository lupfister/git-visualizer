import {
  TILE_OMISSION_ANIMATION_STEP_MS,
  TILE_PATTERN_DEFAULT_DISPLAY_ZOOM,
} from './constants';
import {
  applyOmissionBoundary,
  isTileOmittedAt,
  presenceAtOmissionTransition,
  type OmissionTransition,
} from './tileOmissionFlow';

const keyframeOmitted = (
  seed: string,
  col: number,
  row: number,
  displayZoom: number,
  omissionRate: number,
  keyframe: number,
): boolean => isTileOmittedAt(seed, col, row, displayZoom, omissionRate, keyframe);

export type TileOmissionSampler = {
  /** Write per-cell presence (0–1) into `out` (length cols × rows). */
  sample: (animTimeMs: number, out: Float32Array) => void;
};

/**
 * Incremental omission sampler: advances keyframes lazily (O(cells) per new step),
 * `sample()` is O(cells) with no per-frame keyframe replay from t=0.
 */
export const createTileOmissionSampler = (
  seed: string,
  cols: number,
  rows: number,
  displayZoom = TILE_PATTERN_DEFAULT_DISPLAY_ZOOM,
  omissionRate: number,
): TileOmissionSampler => {
  const cellCount = cols * rows;
  const presence = new Float32Array(cellCount);
  const active: (OmissionTransition | null)[] = new Array(cellCount).fill(null);
  let builtThroughEpoch = 0;
  const stepMs = TILE_OMISSION_ANIMATION_STEP_MS;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const index = row * cols + col;
      presence[index] = keyframeOmitted(seed, col, row, displayZoom, omissionRate, 0) ? 0 : 1;
    }
  }

  const ensureBuiltThrough = (animTimeMs: number): void => {
    const targetEpoch = animTimeMs <= 0 ? 0 : Math.floor(animTimeMs / stepMs) + 1;
    while (builtThroughEpoch < targetEpoch) {
      builtThroughEpoch += 1;
      const boundaryMs = (builtThroughEpoch - 1) * stepMs;
      const keyframe = builtThroughEpoch;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const index = row * cols + col;
          const was = keyframeOmitted(seed, col, row, displayZoom, omissionRate, keyframe - 1);
          const now = keyframeOmitted(seed, col, row, displayZoom, omissionRate, keyframe);
          const next = applyOmissionBoundary(presence[index], active[index], was, now, boundaryMs);
          presence[index] = next.presence;
          active[index] = next.active;
        }
      }
    }
  };

  return {
    sample(animTimeMs: number, out: Float32Array): void {
      if (out.length < cellCount) {
        return;
      }
      if (stepMs <= 0 || animTimeMs <= 0) {
        out.set(presence);
        return;
      }

      ensureBuiltThrough(animTimeMs);

      for (let index = 0; index < cellCount; index++) {
        const transition = active[index];
        out[index] = transition
          ? presenceAtOmissionTransition(transition, animTimeMs - transition.startMs)
          : presence[index];
      }
    },
  };
};
