import { describe, expect, it } from 'vitest';
import {
  COMMIT_CARD_HEIGHT,
  COMMIT_CARD_WIDTH,
  TILE_DEFAULT_OMISSION_RATE,
  TILE_UNCOMMITTED_OMISSION_RATE,
  TILE_OMISSION_ANIMATION_STEP_MS,
  TILE_OMISSION_FADE_IN_MS,
  TILE_OMISSION_FADE_OUT_DELAY_MS,
  TILE_OMISSION_FADE_OUT_MS,
  TILE_PATTERN_MIN_DISPLAY_ZOOM,
} from './constants';
import {
  computeTileGridLayout,
  computeTileOmissionPresence,
  createTileOmissionSampler,
  isTileOmittedAt,
  pickGridCounts,
  tileEdgeGaps,
} from './layout';

describe('computeTileGridLayout', () => {
  it('keeps cells square at commit card size', () => {
    const layout = computeTileGridLayout({
      seed: 'test',
      width: COMMIT_CARD_WIDTH,
      height: COMMIT_CARD_HEIGHT,
      displayZoom: 1,
    });
    expect(Math.abs(layout.cellW - layout.cellH)).toBeLessThan(0.35);
  });

  it('keeps cells square at 16:9 export size', () => {
    const layout = computeTileGridLayout({
      seed: 'test',
      width: 1920,
      height: 1080,
      displayZoom: 1,
    });
    const relativeDelta = Math.abs(layout.cellW - layout.cellH) / layout.cellW;
    expect(relativeDelta).toBeLessThan(0.02);
  });

  it('matches horizontal and vertical edge gaps', () => {
    const layout = computeTileGridLayout({
      seed: 'test',
      width: 1920,
      height: 1080,
      displayZoom: 1,
    });
    const gaps = tileEdgeGaps(layout);
    expect(Math.abs(gaps.horizontal - gaps.vertical)).toBeLessThan(0.25);
  });

  it('matches edge gaps on square studio aspect ratio', () => {
    const layout = computeTileGridLayout({
      seed: 'test',
      width: 540,
      height: 540,
      displayZoom: 1,
    });
    const gaps = tileEdgeGaps(layout);
    expect(Math.abs(gaps.horizontal - gaps.vertical)).toBeLessThan(0.25);
    expect(Math.abs(layout.cellW - layout.cellH)).toBeLessThan(0.25);
  });

  it('reaches two rows at minimum display zoom via counterscale', () => {
    const { rows } = pickGridCounts(
      COMMIT_CARD_WIDTH,
      COMMIT_CARD_HEIGHT,
      TILE_PATTERN_MIN_DISPLAY_ZOOM,
    );
    expect(rows).toBe(2);
  });

  it('reduces row count gradually as display zoom decreases', () => {
    const zoomLevels = [1, 0.75, 0.5, 0.35, TILE_PATTERN_MIN_DISPLAY_ZOOM];
    const rowCounts = zoomLevels.map(
      (displayZoom) =>
        pickGridCounts(COMMIT_CARD_WIDTH, COMMIT_CARD_HEIGHT, displayZoom).rows,
    );
    for (let index = 1; index < rowCounts.length; index++) {
      expect(rowCounts[index]).toBeLessThanOrEqual(rowCounts[index - 1]!);
    }
    expect(rowCounts[0]).toBeGreaterThan(rowCounts[rowCounts.length - 1]!);
  });

  it('omission keyframes are near the configured rate', () => {
    const seed = 'keyframe-rate';
    let omitted = 0;
    let total = 0;
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 18; col++) {
        if (isTileOmittedAt(seed, col, row, 1, TILE_DEFAULT_OMISSION_RATE, 0)) {
          omitted++;
        }
        total++;
      }
    }
    const rate = omitted / total;
    expect(rate).toBeGreaterThan(0.22);
    expect(rate).toBeLessThan(0.48);
  });

  it('sampler matches single-cell presence computation', () => {
    const seed = 'sampler-parity';
    const cols = 12;
    const rows = 8;
    const sampler = createTileOmissionSampler(seed, cols, rows, 1, TILE_DEFAULT_OMISSION_RATE);
    const sampled = new Float32Array(cols * rows);
    const times = [0, 40, 200, 450, 900, 1400];

    for (const animTimeMs of times) {
      sampler.sample(animTimeMs, sampled);
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const index = row * cols + col;
          expect(sampled[index]).toBeCloseTo(
            computeTileOmissionPresence(seed, col, row, 1, animTimeMs, TILE_DEFAULT_OMISSION_RATE),
            5,
          );
        }
      }
    }
  });

  it('uncommitted omission rate is higher than default', () => {
    const seed = 'uncommitted-rate';
    const rateFor = (omissionRate: number) => {
      let omitted = 0;
      let total = 0;
      for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 18; col++) {
          if (isTileOmittedAt(seed, col, row, 1, omissionRate, 0)) {
            omitted++;
          }
          total++;
        }
      }
      return omitted / total;
    };
    expect(rateFor(TILE_UNCOMMITTED_OMISSION_RATE)).toBeGreaterThan(
      rateFor(TILE_DEFAULT_OMISSION_RATE),
    );
  });

  it('presence interpolates between keyframes over a step', () => {
    const seed = 'keyframe-blend';
    let foundTransition = false;
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 12; col++) {
        const atStart = computeTileOmissionPresence(seed, col, row, 1, 0);
        const atEnd = computeTileOmissionPresence(
          seed,
          col,
          row,
          1,
          TILE_OMISSION_ANIMATION_STEP_MS,
        );
        const atMid = computeTileOmissionPresence(
          seed,
          col,
          row,
          1,
          TILE_OMISSION_ANIMATION_STEP_MS / 2,
        );
        if (Math.abs(atStart - atEnd) > 0.05 && atMid > 0.08 && atMid < 0.92) {
          foundTransition = true;
          break;
        }
      }
      if (foundTransition) break;
    }
    expect(foundTransition).toBe(true);
  });

  it('presence fades out slowly and fades in quickly between keyframes', () => {
    const seed = 'keyframe-asym';
    let fadeCell: { col: number; row: number; epoch: number } | null = null;
    let popCell: { col: number; row: number; epoch: number } | null = null;

    const fadeMidOffset =
      TILE_OMISSION_FADE_OUT_DELAY_MS + TILE_OMISSION_FADE_OUT_MS / 2;

    for (let epoch = 1; epoch < 12; epoch++) {
      for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 16; col++) {
          const was = isTileOmittedAt(seed, col, row, 1, TILE_DEFAULT_OMISSION_RATE, epoch - 1);
          const now = isTileOmittedAt(seed, col, row, 1, TILE_DEFAULT_OMISSION_RATE, epoch);
          if (!was && now && fadeCell == null) {
            const fadeStart = (epoch - 1) * TILE_OMISSION_ANIMATION_STEP_MS;
            if (
              computeTileOmissionPresence(seed, col, row, 1, fadeStart + fadeMidOffset) < 0.85
            ) {
              fadeCell = { col, row, epoch };
            }
          }
          if (was && !now && popCell == null) {
            popCell = { col, row, epoch };
          }
        }
      }
    }

    expect(fadeCell).not.toBeNull();
    expect(popCell).not.toBeNull();

    const fade = fadeCell!;
    const pop = popCell!;
    const fadeIntervalStart = (fade.epoch - 1) * TILE_OMISSION_ANIMATION_STEP_MS;
    expect(computeTileOmissionPresence(seed, fade.col, fade.row, 1, fadeIntervalStart)).toBe(1);
    expect(
      computeTileOmissionPresence(
        seed,
        fade.col,
        fade.row,
        1,
        fadeIntervalStart +
          TILE_OMISSION_FADE_OUT_DELAY_MS +
          TILE_OMISSION_FADE_OUT_MS / 2,
      ),
    ).toBeLessThan(0.85);

    const popIntervalStart = (pop.epoch - 1) * TILE_OMISSION_ANIMATION_STEP_MS;
    expect(computeTileOmissionPresence(seed, pop.col, pop.row, 1, popIntervalStart)).toBe(0);
    expect(
      computeTileOmissionPresence(seed, pop.col, pop.row, 1, popIntervalStart + 40),
    ).toBeGreaterThan(0.08);
    const midFadeIn = computeTileOmissionPresence(
      seed,
      pop.col,
      pop.row,
      1,
      popIntervalStart + TILE_OMISSION_FADE_IN_MS / 2,
    );
    expect(midFadeIn).toBeGreaterThan(0.05);
    expect(midFadeIn).toBeLessThan(0.95);

    let completeFadeInMs = -1;
    for (let ms = 1; ms <= TILE_OMISSION_FADE_IN_MS; ms++) {
      if (
        computeTileOmissionPresence(seed, pop.col, pop.row, 1, popIntervalStart + ms) >= 0.99
      ) {
        completeFadeInMs = ms;
        break;
      }
    }
    expect(completeFadeInMs).toBeGreaterThan(0);
    expect(completeFadeInMs).toBeLessThanOrEqual(TILE_OMISSION_FADE_IN_MS);
  });

  it('holds full presence during fade-out delay after omission', () => {
    const seed = 'fade-out-delay';
    let fadeCell: { col: number; row: number; epoch: number } | null = null;
    const delayEpochs =
      Math.ceil(TILE_OMISSION_FADE_OUT_DELAY_MS / TILE_OMISSION_ANIMATION_STEP_MS) + 1;
    for (let epoch = 1; epoch < 8; epoch++) {
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 12; col++) {
          const was = isTileOmittedAt(seed, col, row, 1, undefined, epoch - 1);
          const now = isTileOmittedAt(seed, col, row, 1, undefined, epoch);
          if (!was && now && fadeCell == null) {
            let popsDuringDelay = false;
            for (let later = epoch + 1; later <= epoch + delayEpochs; later++) {
              const wasLater = isTileOmittedAt(seed, col, row, 1, undefined, later - 1);
              const nowLater = isTileOmittedAt(seed, col, row, 1, undefined, later);
              if (wasLater && !nowLater) {
                popsDuringDelay = true;
                break;
              }
            }
            if (!popsDuringDelay) {
              fadeCell = { col, row, epoch };
            }
          }
        }
      }
    }
    expect(fadeCell).not.toBeNull();
    const fade = fadeCell!;
    const omittedStart = (fade.epoch - 1) * TILE_OMISSION_ANIMATION_STEP_MS;
    if (TILE_OMISSION_FADE_OUT_DELAY_MS > 0) {
      expect(
        computeTileOmissionPresence(
          seed,
          fade.col,
          fade.row,
          1,
          omittedStart + TILE_OMISSION_FADE_OUT_DELAY_MS / 2,
        ),
      ).toBe(1);
    }
    expect(
      computeTileOmissionPresence(
        seed,
        fade.col,
        fade.row,
        1,
        omittedStart +
          TILE_OMISSION_FADE_OUT_DELAY_MS +
          TILE_OMISSION_FADE_OUT_MS / 2,
      ),
    ).toBeLessThan(0.85);
  });

  it('fade-out uses the full delay and duration window', () => {
    const seed = 'fade-out-duration';
    let fadeCell: { col: number; row: number; epoch: number } | null = null;
    const endMsOffset =
      TILE_OMISSION_FADE_OUT_DELAY_MS + TILE_OMISSION_FADE_OUT_MS;

    for (let epoch = 1; epoch < 12; epoch++) {
      for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 16; col++) {
          const was = isTileOmittedAt(seed, col, row, 1, undefined, epoch - 1);
          const now = isTileOmittedAt(seed, col, row, 1, undefined, epoch);
          if (!was && now && fadeCell == null) {
            const fadeStart = (epoch - 1) * TILE_OMISSION_ANIMATION_STEP_MS;
            if (computeTileOmissionPresence(seed, col, row, 1, fadeStart + endMsOffset) === 0) {
              fadeCell = { col, row, epoch };
            }
          }
        }
      }
      if (fadeCell) break;
    }

    expect(fadeCell).not.toBeNull();
    const fade = fadeCell!;
    const fadeStart = (fade.epoch - 1) * TILE_OMISSION_ANIMATION_STEP_MS;
    expect(
      computeTileOmissionPresence(
        seed,
        fade.col,
        fade.row,
        1,
        fadeStart + TILE_OMISSION_FADE_OUT_DELAY_MS / 2,
      ),
    ).toBe(1);
    expect(
      computeTileOmissionPresence(seed, fade.col, fade.row, 1, fadeStart + endMsOffset),
    ).toBe(0);
  });

  it('does not fade out cells that are already gaps', () => {
    const seed = 'already-gap';
    let gapCell: { col: number; row: number } | null = null;
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 12; col++) {
        if (
          isTileOmittedAt(seed, col, row, 1, undefined, 0) &&
          isTileOmittedAt(seed, col, row, 1, undefined, 1)
        ) {
          gapCell = { col, row };
          break;
        }
      }
      if (gapCell) break;
    }
    expect(gapCell).not.toBeNull();
    const { col, row } = gapCell!;
    expect(computeTileOmissionPresence(seed, col, row, 1, 0)).toBe(0);
    expect(computeTileOmissionPresence(seed, col, row, 1, TILE_OMISSION_ANIMATION_STEP_MS)).toBe(
      0,
    );
  });

  it('does not fade in cells that already have a tile', () => {
    const seed = 'already-tile';
    let tileCell: { col: number; row: number } | null = null;
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 12; col++) {
        if (
          !isTileOmittedAt(seed, col, row, 1, undefined, 0) &&
          !isTileOmittedAt(seed, col, row, 1, undefined, 1)
        ) {
          tileCell = { col, row };
          break;
        }
      }
      if (tileCell) break;
    }
    expect(tileCell).not.toBeNull();
    const { col, row } = tileCell!;
    expect(computeTileOmissionPresence(seed, col, row, 1, 0)).toBe(1);
    expect(computeTileOmissionPresence(seed, col, row, 1, TILE_OMISSION_ANIMATION_STEP_MS)).toBe(1);
  });

  it('omission keyframes differ across epochs', () => {
    const seed = 'keyframe-shift';
    let foundDiff = false;
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 12; col++) {
        if (
          isTileOmittedAt(seed, col, row, 1, undefined, 0) !==
          isTileOmittedAt(seed, col, row, 1, undefined, 3)
        ) {
          foundDiff = true;
          break;
        }
      }
      if (foundDiff) break;
    }
    expect(foundDiff).toBe(true);
  });

  it('tile omission is checkerboard-biased more at low display zoom', () => {
    const seed = 'checker-bias';
    const neighborMismatchRate = (displayZoom: number) => {
      let mismatches = 0;
      let total = 0;
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 14; col++) {
          const here = isTileOmittedAt(seed, col, row, displayZoom, undefined, 0);
          const east = isTileOmittedAt(seed, col + 1, row, displayZoom, undefined, 0);
          const south = isTileOmittedAt(seed, col, row + 1, displayZoom, undefined, 0);
          if (here !== east) mismatches++;
          if (here !== south) mismatches++;
          total += 2;
        }
      }
      return mismatches / total;
    };

    expect(neighborMismatchRate(TILE_PATTERN_MIN_DISPLAY_ZOOM)).toBeGreaterThan(
      neighborMismatchRate(1),
    );
    expect(neighborMismatchRate(TILE_PATTERN_MIN_DISPLAY_ZOOM)).toBeGreaterThan(0.55);
  });

  it('bright lum profile yields higher average tile luminance than default', () => {
    const defaultLayout = computeTileGridLayout({
      seed: 'lum-compare',
      width: COMMIT_CARD_WIDTH,
      height: COMMIT_CARD_HEIGHT,
      displayZoom: 1,
      lumMixProfile: 'default',
    });
    const brightLayout = computeTileGridLayout({
      seed: 'lum-compare',
      width: COMMIT_CARD_WIDTH,
      height: COMMIT_CARD_HEIGHT,
      displayZoom: 1,
      lumMixProfile: 'bright',
    });
    const avg = (cells: typeof defaultLayout.cells) =>
      cells.reduce((sum, cell) => sum + cell.baseLumMix, 0) / cells.length;
    const brightShare = (cells: typeof defaultLayout.cells) =>
      cells.filter((cell) => cell.baseLumMix >= 0.16).length / cells.length;

    expect(avg(brightLayout.cells)).toBeGreaterThan(avg(defaultLayout.cells));
    expect(brightShare(brightLayout.cells)).toBeGreaterThan(brightShare(defaultLayout.cells));
  });

  it('reduces column count gradually as display zoom decreases', () => {
    const zoomLevels = [1, 0.75, 0.5, 0.35, TILE_PATTERN_MIN_DISPLAY_ZOOM];
    const colCounts = zoomLevels.map(
      (displayZoom) =>
        pickGridCounts(COMMIT_CARD_WIDTH, COMMIT_CARD_HEIGHT, displayZoom).cols,
    );
    for (let index = 1; index < colCounts.length; index++) {
      expect(colCounts[index]).toBeLessThanOrEqual(colCounts[index - 1]!);
    }
  });
});
