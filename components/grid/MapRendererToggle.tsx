import { cn } from './mapGridUtils';
import type { GpuRenderMode } from './webgl/types';

type Props = {
  compactLabels?: boolean;
  mode: GpuRenderMode;
  onModeChange: (mode: GpuRenderMode) => void;
};

export default function MapRendererToggle({ compactLabels = false, mode, onModeChange }: Props) {
  const nextMode: GpuRenderMode = mode === 'legacy' ? 'webgl-hybrid' : 'legacy';
  return (
    <button
      type="button"
      onClick={() => onModeChange(nextMode)}
      className={cn(
        'window-no-drag inline-flex h-7 items-center rounded-md border border-border bg-background text-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        compactLabels ? 'w-7 justify-center px-0' : 'gap-1.5 px-2 py-1',
      )}
      aria-label={`Switch renderer to ${nextMode}`}
      title={mode === 'legacy' ? 'Renderer: Legacy' : 'Renderer: WebGL Hybrid'}
    >
      <span className="text-[12px] font-medium leading-none">{mode === 'legacy' ? 'SVG' : 'GL'}</span>
      {!compactLabels ? <span className="text-[12px] font-normal leading-none">Renderer</span> : null}
    </button>
  );
}
