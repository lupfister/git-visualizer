import { cn } from './mapGridUtils';
import type { OrientationMode } from './MapViewGrid';

type Props = {
  compactLabels?: boolean;
  orientation: OrientationMode;
  onOrientationChange: (orientation: OrientationMode) => void;
};

const iconGitOrientation = '/icon-GitOrientation.svg';

export default function MapOrientationToggle({ compactLabels = false, orientation, onOrientationChange }: Props) {
  const nextOrientation = orientation === 'horizontal' ? 'vertical' : 'horizontal';

  return (
    <button
      type="button"
      onClick={() => onOrientationChange(nextOrientation)}
      className={cn(
        'window-no-drag inline-flex h-7 items-center rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        compactLabels ? 'w-7 justify-center px-0' : 'gap-1.5 pl-1.5 pr-2 py-1',
      )}
      aria-label={`Rotate view to ${nextOrientation}`}
      title="Rotate View"
    >
      <span className="relative size-4 shrink-0">
        <span
          aria-hidden="true"
          className={cn(
            'absolute inset-0 bg-current transition-transform duration-300 ease-in-out',
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
      {!compactLabels ? (
        <span className="whitespace-nowrap text-[12px] font-normal leading-none text-foreground transition-colors">
          Rotate View
        </span>
      ) : null}
    </button>
  );
}
