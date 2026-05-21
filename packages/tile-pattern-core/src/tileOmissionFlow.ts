import {
  TILE_PATTERN_DEFAULT_DISPLAY_ZOOM,
  TILE_PATTERN_MIN_DISPLAY_ZOOM,
  TILE_DEFAULT_OMISSION_RATE,
  TILE_OMISSION_ANIMATION_STEP_MS,
  TILE_OMISSION_FADE_IN_MS,
  TILE_OMISSION_FADE_OUT_DELAY_MS,
  TILE_OMISSION_FADE_OUT_MS,
} from './constants';
import { createMulberry32, fnv1a32 } from './prng';

const clamp01 = (value: number): number => Math.max(0, Math.min(1, value));

const easeOutCubic = (t: number): number => {
  const x = clamp01(t);
  return 1 - (1 - x) ** 3;
};

export type OmissionTransition =
  | { kind: 'fade-out'; startMs: number; fromPresence: number }
  | { kind: 'fade-in'; startMs: number; fromPresence: number };

export const omissionTransitionDurationMs = (transition: OmissionTransition): number =>
  transition.kind === 'fade-out'
    ? TILE_OMISSION_FADE_OUT_DELAY_MS + TILE_OMISSION_FADE_OUT_MS
    : TILE_OMISSION_FADE_IN_MS;

export const isOmissionTransitionComplete = (
  transition: OmissionTransition,
  elapsedMs: number,
): boolean => elapsedMs >= omissionTransitionDurationMs(transition);

export const presenceAtOmissionTransition = (
  transition: OmissionTransition,
  elapsedMs: number,
): number => {
  const from = transition.fromPresence;
  if (transition.kind === 'fade-out') {
    if (elapsedMs < TILE_OMISSION_FADE_OUT_DELAY_MS) {
      return from;
    }
    const fadeElapsed = elapsedMs - TILE_OMISSION_FADE_OUT_DELAY_MS;
    if (fadeElapsed < TILE_OMISSION_FADE_OUT_MS) {
      return from * (1 - easeOutCubic(fadeElapsed / TILE_OMISSION_FADE_OUT_MS));
    }
    return 0;
  }
  if (elapsedMs < TILE_OMISSION_FADE_IN_MS) {
    return from + (1 - from) * easeOutCubic(elapsedMs / TILE_OMISSION_FADE_IN_MS);
  }
  return 1;
};

export const presenceAtOmissionTransitionEnd = (transition: OmissionTransition): number =>
  transition.kind === 'fade-out' ? 0 : 1;

export const computeTileOmissionCheckerWeight = (displayZoom: number): number => {
  const highZoom = 0.85;
  const lowZoom = TILE_PATTERN_MIN_DISPLAY_ZOOM;
  const minWeight = 0.12;
  if (!Number.isFinite(displayZoom) || displayZoom >= highZoom) {
    return minWeight;
  }
  if (displayZoom <= lowZoom) {
    return 1;
  }
  const t = (highZoom - displayZoom) / (highZoom - lowZoom);
  return minWeight + clamp01(t) * (1 - minWeight);
};

/** One noisy omission keyframe (checkerboard-biased, seed-stable per epoch). */
export const isTileOmittedAt = (
  seed: string,
  col: number,
  row: number,
  displayZoom = TILE_PATTERN_DEFAULT_DISPLAY_ZOOM,
  omissionRate = TILE_DEFAULT_OMISSION_RATE,
  omissionAnimEpoch = 0,
): boolean => {
  const random = createMulberry32(
    fnv1a32(`${seed}|${col}|${row}|omit|${omissionAnimEpoch}`),
  );
  const phase = fnv1a32(`${seed}|omit-checker|${omissionAnimEpoch}`) % 2;
  const onChecker = (col + row + phase) % 2 === 0;
  const checkerWeight = computeTileOmissionCheckerWeight(displayZoom);
  const checkerOmitProb = Math.min(1, omissionRate * 2);
  const r = random();

  if (r < checkerWeight) {
    return onChecker && random() < checkerOmitProb;
  }

  const r2 = random();
  const bias = 0.24 * (1 - checkerWeight);
  const threshold = onChecker
    ? Math.min(1, omissionRate + bias)
    : Math.max(0, omissionRate - bias);
  return r2 < threshold;
};

const isTilePresence = (presence: number): boolean => presence >= 0.5;
const isGapPresence = (presence: number): boolean => presence < 0.5;

const keyframeOmitted = (
  seed: string,
  col: number,
  row: number,
  displayZoom: number,
  omissionRate: number,
  keyframe: number,
): boolean => isTileOmittedAt(seed, col, row, displayZoom, omissionRate, keyframe);

export const applyOmissionBoundary = (
  presence: number,
  active: OmissionTransition | null,
  was: boolean,
  now: boolean,
  boundaryMs: number,
): { presence: number; active: OmissionTransition | null } => {
  if (active) {
    const elapsed = boundaryMs - active.startMs;
    const nextPresence = presenceAtOmissionTransition(active, elapsed);
    if (isOmissionTransitionComplete(active, elapsed)) {
      active = null;
      presence = nextPresence;
    } else {
      if (!was && now && isTilePresence(nextPresence)) {
        return {
          presence: nextPresence,
          active: { kind: 'fade-out', startMs: boundaryMs, fromPresence: nextPresence },
        };
      }
      if (was && !now && isGapPresence(nextPresence)) {
        return {
          presence: nextPresence,
          active: { kind: 'fade-in', startMs: boundaryMs, fromPresence: nextPresence },
        };
      }
      if (!was && now && isGapPresence(nextPresence)) {
        return { presence: 0, active: null };
      }
      if (was && !now && isTilePresence(nextPresence)) {
        return { presence: 1, active: null };
      }
      return { presence: nextPresence, active };
    }
  }

  if (!was && now) {
    if (isTilePresence(presence)) {
      return {
        presence,
        active: { kind: 'fade-out', startMs: boundaryMs, fromPresence: presence },
      };
    }
    return { presence: 0, active: null };
  }

  if (was && !now) {
    if (isGapPresence(presence)) {
      return {
        presence,
        active: { kind: 'fade-in', startMs: boundaryMs, fromPresence: presence },
      };
    }
    return { presence: 1, active: null };
  }

  return { presence: now ? 0 : 1, active: null };
};

/**
 * Tile visibility (1 = visible, 0 = gap) for a single cell.
 * Prefer `createTileOmissionSampler` when updating many cells per frame.
 */
export const computeTileOmissionPresence = (
  seed: string,
  col: number,
  row: number,
  displayZoom = TILE_PATTERN_DEFAULT_DISPLAY_ZOOM,
  animTimeMs = 0,
  omissionRate = TILE_DEFAULT_OMISSION_RATE,
): number => {
  const stepMs = TILE_OMISSION_ANIMATION_STEP_MS;
  if (stepMs <= 0 || animTimeMs <= 0) {
    return keyframeOmitted(seed, col, row, displayZoom, omissionRate, 0) ? 0 : 1;
  }

  let presence = keyframeOmitted(seed, col, row, displayZoom, omissionRate, 0) ? 0 : 1;
  let active: OmissionTransition | null = null;
  const lastKeyframe = Math.ceil(animTimeMs / stepMs) + 2;

  for (let keyframe = 1; keyframe <= lastKeyframe; keyframe++) {
    const boundaryMs = (keyframe - 1) * stepMs;

    if (animTimeMs < boundaryMs) {
      if (active) {
        return presenceAtOmissionTransition(active, animTimeMs - active.startMs);
      }
      return presence;
    }

    const was = keyframeOmitted(seed, col, row, displayZoom, omissionRate, keyframe - 1);
    const now = keyframeOmitted(seed, col, row, displayZoom, omissionRate, keyframe);
    const next = applyOmissionBoundary(presence, active, was, now, boundaryMs);
    presence = next.presence;
    active = next.active;
  }

  if (active) {
    return presenceAtOmissionTransition(active, animTimeMs - active.startMs);
  }

  const epoch = Math.floor(animTimeMs / stepMs);
  return keyframeOmitted(seed, col, row, displayZoom, omissionRate, epoch + 1) ? 0 : 1;
};
