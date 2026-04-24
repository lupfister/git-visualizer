import { cn } from './mapGridUtils';
import type { OrientationMode } from './MapViewGrid';

type Props = {
  orientation: OrientationMode;
  onOrientationChange: (orientation: OrientationMode) => void;
};

export default function MapOrientationToggle({ orientation, onOrientationChange }: Props) {
  return (
    <div
      className="flex shrink-0 rounded-full border border-border/60 bg-muted/20 p-0.5"
      role="radiogroup"
      aria-label="Commit map layout"
    >
      <button
        type="button"
        role="radio"
        aria-checked={orientation === 'horizontal'}
        tabIndex={0}
        onClick={() => onOrientationChange('horizontal')}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            event.preventDefault();
            onOrientationChange('vertical');
          }
        }}
        className={cn(
          'rounded-full px-2.5 h-7 text-[11px] font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          orientation === 'horizontal'
            ? 'border border-border/60 bg-card text-foreground'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        Horizontal
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={orientation === 'vertical'}
        tabIndex={0}
        onClick={() => onOrientationChange('vertical')}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            event.preventDefault();
            onOrientationChange('horizontal');
          }
        }}
        className={cn(
          'rounded-full px-2.5 h-7 text-[11px] font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          orientation === 'vertical'
            ? 'border border-border/60 bg-card text-foreground'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        Vertical
      </button>
    </div>
  );
}
