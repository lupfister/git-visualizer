import { cn } from './mapGridUtils';
import type { OrientationMode } from './MapViewGrid';

type Props = {
  orientation: OrientationMode;
  onOrientationChange: (orientation: OrientationMode) => void;
};

const iconGitOrientation = '/icon-GitOrientation.svg';

export default function MapOrientationToggle({ orientation, onOrientationChange }: Props) {
  const nextOrientation = orientation === 'horizontal' ? 'vertical' : 'horizontal';

  return (
    <button
      type="button"
      onClick={() => onOrientationChange(nextOrientation)}
      className={cn(
        'window-no-drag inline-flex h-7 items-center gap-1.5 rounded-md border border-border/60 bg-card pl-1.5 pr-2 py-1 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      )}
      aria-label={`Rotate view to ${nextOrientation}`}
      title="Rotate View"
    >
      <span className="relative size-4 shrink-0">
        <span
          aria-hidden="true"
          className={cn(
            'absolute inset-0 bg-muted-foreground transition-transform duration-300 ease-in-out',
            orientation === 'vertical' && 'rotate-[-90deg]',
          )}
          style={{
            WebkitMaskImage: `url(${iconGitOrientation})`,
            WebkitMaskPosition: 'center',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: 'contain',
            maskImage: `url(${iconGitOrientation})`,
            maskPosition: 'center',
            maskRepeat: 'no-repeat',
            maskSize: 'contain',
          }}
        />
      </span>
      <span className="whitespace-nowrap text-[12px] font-normal leading-none text-muted-foreground">
        Rotate View
      </span>
    </button>
  );
}
