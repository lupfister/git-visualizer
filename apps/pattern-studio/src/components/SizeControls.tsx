import { useCallback, useRef, useState } from 'react';
import {
  MAX_EXPORT_EDGE_PX,
  TILE_PATTERN_ASPECT_PRESETS,
  type AspectRatioPresetId,
} from '@git-visualizer/tile-pattern-core';
import { cn } from '../lib/cn';

type SizeControlsProps = {
  width: number;
  height: number;
  onSizeChange: (width: number, height: number) => void;
  onAspectPresetChange?: (presetId: AspectRatioPresetId) => void;
};

const clampDimension = (value: number): number =>
  Math.max(64, Math.min(MAX_EXPORT_EDGE_PX, Math.round(value)));

const parseDimensionDraft = (draft: string): number | null => {
  const trimmed = draft.trim();
  if (!trimmed) return null;
  const parsed = Number.parseInt(trimmed, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
};

const formatMegapixels = (width: number, height: number): string => {
  if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
    return '—';
  }
  return `${((width * height) / 1_000_000).toFixed(2)} MP`;
};

const detectAspectPreset = (width: number, height: number): AspectRatioPresetId => {
  const match = TILE_PATTERN_ASPECT_PRESETS.find(
    (preset) => preset.width === width && preset.height === height,
  );
  return match?.id ?? 'custom';
};

export const SizeControls = ({
  width,
  height,
  onSizeChange,
  onAspectPresetChange,
}: SizeControlsProps) => {
  const [widthDraft, setWidthDraft] = useState(String(width));
  const [heightDraft, setHeightDraft] = useState(String(height));
  const [aspectPreset, setAspectPreset] = useState<AspectRatioPresetId>(() =>
    detectAspectPreset(width, height),
  );
  const [lockAspect, setLockAspect] = useState(true);
  const aspectRatioRef = useRef(width / height);

  const syncDraftsFromSize = useCallback((nextWidth: number, nextHeight: number) => {
    setWidthDraft(String(nextWidth));
    setHeightDraft(String(nextHeight));
    aspectRatioRef.current = nextWidth / nextHeight;
  }, []);

  const applySize = useCallback(
    (nextWidth: number, nextHeight: number) => {
      const w = clampDimension(nextWidth);
      const h = clampDimension(nextHeight);
      aspectRatioRef.current = w / h;
      syncDraftsFromSize(w, h);
      onSizeChange(w, h);
    },
    [onSizeChange, syncDraftsFromSize],
  );

  const handleAspectPresetChange = (presetId: AspectRatioPresetId) => {
    setAspectPreset(presetId);
    onAspectPresetChange?.(presetId);
    if (presetId === 'custom') {
      setLockAspect(true);
      aspectRatioRef.current = width / height;
      return;
    }
    const preset = TILE_PATTERN_ASPECT_PRESETS.find((item) => item.id === presetId);
    if (!preset) return;
    setLockAspect(true);
    aspectRatioRef.current = preset.width / preset.height;
    applySize(preset.width, preset.height);
  };

  const commitWidth = () => {
    const parsed = parseDimensionDraft(widthDraft);
    if (parsed === null) {
      syncDraftsFromSize(width, height);
      return;
    }
    const w = clampDimension(parsed);
    const h = lockAspect
      ? clampDimension(Math.round(w / aspectRatioRef.current))
      : clampDimension(parseDimensionDraft(heightDraft) ?? height);
    setAspectPreset('custom');
    applySize(w, h);
  };

  const commitHeight = () => {
    const parsed = parseDimensionDraft(heightDraft);
    if (parsed === null) {
      syncDraftsFromSize(width, height);
      return;
    }
    const h = clampDimension(parsed);
    const w = lockAspect
      ? clampDimension(Math.round(h * aspectRatioRef.current))
      : clampDimension(parseDimensionDraft(widthDraft) ?? width);
    setAspectPreset('custom');
    applySize(w, h);
  };

  const previewWidth = parseDimensionDraft(widthDraft) ?? width;
  const previewHeight = parseDimensionDraft(heightDraft) ?? height;

  return (
    <>
      <label className="mt-2 block text-sm">
        <span className="text-muted-foreground">Aspect ratio</span>
        <select
          value={aspectPreset}
          onChange={(event) =>
            handleAspectPresetChange(event.target.value as AspectRatioPresetId)
          }
          className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
        >
          {TILE_PATTERN_ASPECT_PRESETS.map((preset) => (
            <option key={preset.id} value={preset.id}>
              {preset.label} ({preset.width}×{preset.height})
            </option>
          ))}
          <option value="custom">Custom</option>
        </select>
      </label>

      <div className="mt-3 flex items-end gap-2">
        <label className="min-w-0 flex-1 text-xs text-muted-foreground">
          Width (px)
          <input
            type="text"
            inputMode="numeric"
            value={widthDraft}
            onChange={(event) => setWidthDraft(event.target.value.replace(/[^\d]/g, ''))}
            onBlur={commitWidth}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.currentTarget.blur();
              }
            }}
            className="mt-1 w-full rounded-lg border border-border bg-background px-2 py-1.5 text-sm text-foreground tabular-nums"
            aria-label="Width in pixels"
          />
        </label>

        <button
          type="button"
          onClick={() => {
            const next = !lockAspect;
            setLockAspect(next);
            if (next) {
              aspectRatioRef.current = width / height;
            }
          }}
          className={cn(
            'mb-0.5 shrink-0 rounded-lg border px-2.5 py-2 text-xs transition-colors',
            lockAspect
              ? 'border-primary/40 bg-primary/10 text-primary'
              : 'border-border text-muted-foreground hover:bg-accent',
          )}
          aria-label={lockAspect ? 'Aspect ratio locked' : 'Aspect ratio unlocked'}
          aria-pressed={lockAspect}
          title={lockAspect ? 'Aspect ratio locked' : 'Aspect ratio unlocked'}
        >
          <span className="font-medium">{lockAspect ? 'Lock' : 'Free'}</span>
        </button>

        <label className="min-w-0 flex-1 text-xs text-muted-foreground">
          Height (px)
          <input
            type="text"
            inputMode="numeric"
            value={heightDraft}
            onChange={(event) => setHeightDraft(event.target.value.replace(/[^\d]/g, ''))}
            onBlur={commitHeight}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.currentTarget.blur();
              }
            }}
            className="mt-1 w-full rounded-lg border border-border bg-background px-2 py-1.5 text-sm text-foreground tabular-nums"
            aria-label="Height in pixels"
          />
        </label>
      </div>

      <p className="mt-2 text-xs text-muted-foreground">
        {formatMegapixels(previewWidth, previewHeight)}
        {lockAspect
          ? ` · ${(previewWidth / previewHeight).toFixed(3)}:1`
          : ''}
      </p>
    </>
  );
};
