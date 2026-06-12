import { cn } from './mapGridUtils';

export type ToolbarMaskIcon = 'commit' | 'push-branch' | 'push-selected' | 'push-all' | 'stash' | 'preview' | 'branch' | 'terminal';

type Props = {
  icon: ToolbarMaskIcon;
  label?: string;
  loading?: boolean;
  compactLabels?: boolean;
  iconClassName?: string;
};

export default function ToolbarActionContent({
  icon,
  label,
  loading = false,
  compactLabels = false,
  iconClassName,
}: Props) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        aria-hidden
        className={cn(
          'toolbar-mask-icon',
          `toolbar-mask-icon--${icon}`,
          iconClassName,
          loading && 'toolbar-action-shimmer__icon',
        )}
      />
      {!compactLabels && label ? (
        <span className={cn(loading && 'toolbar-action-shimmer__text')}>{label}</span>
      ) : null}
    </span>
  );
}
