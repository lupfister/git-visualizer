import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  TILE_PATTERN_ASPECT_PRESETS,
  TILE_PATTERN_COLOR_PRESETS,
  TILE_PATTERN_MIN_DISPLAY_ZOOM,
  buildTilePatternScene,
  type TilePatternColorPresetId,
} from '@cobble/tile-pattern-core';
import {
  buildExportFilename,
  downloadPng,
  downloadSvg,
} from '@cobble/tile-pattern-export';
import { PatternPreview } from './components/PatternPreview';
import { SizeControls } from './components/SizeControls';
import { cn } from './lib/cn';
import { randomSeed, readStudioUrlState, writeStudioUrlState, type StudioUrlState } from './lib/urlState';

const DEFAULT_STATE: StudioUrlState = {
  seed: 'demo-seed',
  preset: 'default',
  shapeFill: TILE_PATTERN_COLOR_PRESETS.default.shapeFill,
  width: TILE_PATTERN_ASPECT_PRESETS[0].width,
  height: TILE_PATTERN_ASPECT_PRESETS[0].height,
  displayZoom: 1,
};

const App = () => {
  const [state, setState] = useState<StudioUrlState>(() => readStudioUrlState(DEFAULT_STATE));
  const [previewBg, setPreviewBg] = useState<'transparent' | 'background' | 'checkerboard'>('checkerboard');
  const [exportFormat, setExportFormat] = useState<'png' | 'svg'>('png');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    writeStudioUrlState(state);
  }, [state]);

  const scene = useMemo(
    () =>
      buildTilePatternScene({
        seed: state.seed,
        width: state.width,
        height: state.height,
        displayZoom: state.displayZoom,
        shapeFill: state.shapeFill,
      }),
    [state.seed, state.width, state.height, state.displayZoom, state.shapeFill],
  );

  const updateState = useCallback((patch: Partial<StudioUrlState>) => {
    setState((previous) => ({ ...previous, ...patch }));
  }, []);

  const handlePresetChange = (presetId: TilePatternColorPresetId) => {
    const preset = TILE_PATTERN_COLOR_PRESETS[presetId];
    updateState({
      preset: presetId,
      shapeFill: preset.shapeFill,
    });
  };

  const handleSizeChange = useCallback(
    (width: number, height: number) => {
      updateState({ width, height });
    },
    [updateState],
  );

  const handleExport = async () => {
    setIsExporting(true);
    setStatusMessage(null);
    try {
      const filename = buildExportFilename(
        state.seed,
        state.width,
        state.height,
        exportFormat,
      );
      if (exportFormat === 'png') {
        await downloadPng(scene, {
          exportWidth: state.width,
          exportHeight: state.height,
          filename,
        });
      } else {
        downloadSvg(scene, { filename });
      }
      setStatusMessage(`Downloaded ${filename}`);
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : 'Export failed');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="shrink-0 border-b border-border/50 px-6 py-4">
        <h1 className="text-lg font-semibold">Pattern Studio</h1>
        <p className="mt-0.5 text-sm text-muted-foreground">
          Export commit-node tile patterns as PNG or SVG
        </p>
      </header>

      <div className="flex min-h-0 flex-1 flex-col gap-4 p-6 lg:flex-row">
        <aside className="flex w-full shrink-0 flex-col gap-4 overflow-y-auto lg:w-80">
          <section className="rounded-xl border border-border/50 bg-card p-4">
            <h2 className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              Seed
            </h2>
            <div className="mt-2 flex gap-2">
              <input
                type="text"
                value={state.seed}
                onChange={(event) => updateState({ seed: event.target.value })}
                className="min-w-0 flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                aria-label="Pattern seed"
              />
              <button
                type="button"
                onClick={() => updateState({ seed: randomSeed() })}
                className="shrink-0 rounded-lg border border-border px-3 py-2 text-sm transition-colors hover:bg-accent"
              >
                Random
              </button>
            </div>
          </section>

          <section className="rounded-xl border border-border/50 bg-card p-4">
            <h2 className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              Colors
            </h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {(Object.keys(TILE_PATTERN_COLOR_PRESETS) as TilePatternColorPresetId[]).map(
                (presetId) => (
                  <button
                    key={presetId}
                    type="button"
                    onClick={() => handlePresetChange(presetId)}
                    className={cn(
                      'rounded-lg border px-3 py-2 text-xs transition-colors',
                      state.preset === presetId
                        ? 'border-primary/40 bg-primary/10 text-primary'
                        : 'border-border text-muted-foreground hover:bg-accent',
                    )}
                  >
                    {TILE_PATTERN_COLOR_PRESETS[presetId].label}
                  </button>
                ),
              )}
              <button
                type="button"
                onClick={() => updateState({ preset: 'custom' })}
                className={cn(
                  'rounded-lg border px-3 py-2 text-xs transition-colors',
                  state.preset === 'custom'
                    ? 'border-primary/40 bg-primary/10 text-primary'
                    : 'border-border text-muted-foreground hover:bg-accent',
                )}
              >
                Custom
              </button>
            </div>
            <label className="mt-3 flex items-center gap-3 text-sm">
              <span className="text-muted-foreground">Shape fill</span>
              <input
                type="color"
                value={state.shapeFill}
                onChange={(event) =>
                  updateState({ preset: 'custom', shapeFill: event.target.value })
                }
                className="h-9 w-12 cursor-pointer rounded border border-border bg-transparent"
                aria-label="Shape fill color"
              />
              <input
                type="text"
                value={state.shapeFill}
                onChange={(event) =>
                  updateState({ preset: 'custom', shapeFill: event.target.value })
                }
                className="min-w-0 flex-1 rounded-lg border border-border bg-background px-2 py-1.5 font-mono text-xs"
                spellCheck={false}
              />
            </label>
          </section>

          <section className="rounded-xl border border-border/50 bg-card p-4">
            <h2 className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              Size
            </h2>
            <SizeControls
              width={state.width}
              height={state.height}
              onSizeChange={handleSizeChange}
            />
            <label className="mt-3 block text-sm">
              <span className="flex justify-between text-muted-foreground">
                <span>Density</span>
                <span className="font-mono text-xs">{state.displayZoom.toFixed(2)}</span>
              </span>
              <input
                type="range"
                min={TILE_PATTERN_MIN_DISPLAY_ZOOM}
                max={2.25}
                step={0.01}
                value={state.displayZoom}
                onChange={(event) => updateState({ displayZoom: Number(event.target.value) })}
                className="mt-1 w-full"
                aria-label="Pattern density"
              />
            </label>
          </section>

          <section className="rounded-xl border border-border/50 bg-card p-4">
            <h2 className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              Preview background
            </h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {(['checkerboard', 'transparent', 'background'] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setPreviewBg(mode)}
                  className={cn(
                    'rounded-lg border px-3 py-2 text-xs capitalize transition-colors',
                    previewBg === mode
                      ? 'border-primary/40 bg-primary/10 text-primary'
                      : 'border-border text-muted-foreground hover:bg-accent',
                  )}
                >
                  {mode}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-border/50 bg-card p-4">
            <h2 className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              Export
            </h2>
            <div className="mt-2 flex gap-2">
              {(['png', 'svg'] as const).map((format) => (
                <button
                  key={format}
                  type="button"
                  onClick={() => setExportFormat(format)}
                  className={cn(
                    'rounded-lg border px-3 py-2 text-xs uppercase transition-colors',
                    exportFormat === format
                      ? 'border-primary/40 bg-primary/10 text-primary'
                      : 'border-border text-muted-foreground hover:bg-accent',
                  )}
                >
                  {format}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={handleExport}
              disabled={isExporting}
              className="mt-3 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {isExporting ? 'Exporting…' : `Download ${state.width}×${state.height}`}
            </button>
            {statusMessage ? (
              <p className="mt-2 text-xs text-muted-foreground" aria-live="polite">
                {statusMessage}
              </p>
            ) : null}
          </section>
        </aside>

        <main className="min-h-[320px] min-w-0 flex-1 lg:min-h-0">
          <PatternPreview scene={scene} backgroundMode={previewBg} className="h-full min-h-[320px]" />
        </main>
      </div>
    </div>
  );
};

export default App;
