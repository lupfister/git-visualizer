import { RemoteSyncStatus } from '../types';

const REMOTE_SYNC_CONFIG: Record<RemoteSyncStatus, { label: string; className: string }> = {
  'local-only': {
    label: 'Local only',
    className: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
  },
  unpushed: {
    label: 'Unpushed',
    className: 'bg-[var(--destructive-bg)] text-red-600',
  },
  'on-github': {
    label: 'On GitHub',
    className: 'bg-[var(--info-bg)] text-blue-600',
  },
};

export default function RemoteSyncBadge({
  status,
  unpushedCommits = 0,
  compact = false,
}: {
  status: RemoteSyncStatus;
  unpushedCommits?: number;
  compact?: boolean;
}) {
  const config = REMOTE_SYNC_CONFIG[status];
  const label =
    status === 'unpushed' && unpushedCommits > 0
      ? `${unpushedCommits} unpushed`
      : config.label;

  return (
    <span
      className={`inline-flex items-center rounded-full border border-border/50 font-medium ${compact ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-0.5 text-xs'} ${config.className}`}
    >
      {label}
    </span>
  );
}
