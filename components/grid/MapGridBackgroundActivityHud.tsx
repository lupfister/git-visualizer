import { useEffect, useState } from 'react';
import {
  getMapGridBackgroundActivities,
  getMapGridBackgroundRecentPulses,
  subscribeMapGridBackgroundActivity,
  type MapGridBackgroundActivity,
} from './mapGridBackgroundActivity';

const formatDuration = (startedAt: number | null): string => {
  if (startedAt == null) return '';
  const ms = performance.now() - startedAt;
  if (ms < 1000) return `${ms.toFixed(0)}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
};

const ActivityLine = ({ entry }: { entry: MapGridBackgroundActivity }) => {
  const [, setTick] = useState(0);
  useEffect(() => {
    if (!entry.active) return undefined;
    const id = window.setInterval(() => setTick((n) => n + 1), 200);
    return () => window.clearInterval(id);
  }, [entry.active]);

  const duration = entry.active ? formatDuration(entry.startedAt) : '';
  const pulse =
    !entry.active && entry.lastPulseAt != null
      ? `${((performance.now() - entry.lastPulseAt) / 1000).toFixed(1)}s ago`
      : '';

  return (
    <div className="flex gap-2 leading-tight">
      <span
        className={
          entry.active
            ? 'text-amber-600 dark:text-amber-400'
            : 'text-muted-foreground/50'
        }
        aria-hidden
      >
        {entry.active ? '●' : '○'}
      </span>
      <span className="min-w-0 flex-1">
        <span className="font-medium text-foreground">{entry.label}</span>
        {entry.detail ? <span className="text-muted-foreground"> — {entry.detail}</span> : null}
        {duration ? <span className="text-muted-foreground"> ({duration})</span> : null}
        {pulse && !entry.active ? <span className="text-muted-foreground"> · {pulse}</span> : null}
        {entry.pulseCount > 0 ? <span className="text-muted-foreground"> · ×{entry.pulseCount}</span> : null}
      </span>
    </div>
  );
};

export default function MapGridBackgroundActivityHud() {
  const [activities, setActivities] = useState<MapGridBackgroundActivity[]>([]);
  const [recentPulses, setRecent] = useState(getMapGridBackgroundRecentPulses());

  useEffect(() => {
    const sync = () => {
      setActivities(getMapGridBackgroundActivities());
      setRecent(getMapGridBackgroundRecentPulses());
    };
    sync();
    return subscribeMapGridBackgroundActivity(sync);
  }, []);

  const activeCount = activities.filter((a) => a.active).length;
  const active = activities.filter((a) => a.active);
  const idle = activities.filter((a) => !a.active && a.pulseCount > 0);

  return (
    <div
      className="pointer-events-none absolute bottom-3 left-3 z-[90] max-w-[min(26rem,calc(100%-1.5rem))] rounded-lg border border-border/80 bg-background/92 px-2.5 py-2 font-mono text-[10px] shadow-sm"
      aria-live="polite"
      aria-label="Map background activity"
    >
      <div className="mb-1.5 flex items-baseline justify-between gap-2 border-b border-border/50 pb-1">
        <span className="text-[11px] font-semibold text-foreground">Background</span>
        <span className="text-muted-foreground">{activeCount} active</span>
      </div>
      {active.length > 0 ? (
        <div className="space-y-0.5">
          {active.map((entry) => (
            <ActivityLine key={entry.id} entry={entry} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No active background tasks</p>
      )}
      {idle.length > 0 ? (
        <div className="mt-1.5 space-y-0.5 border-t border-border/40 pt-1">
          <p className="text-[9px] uppercase tracking-wide text-muted-foreground">Recent</p>
          {idle.slice(0, 6).map((entry) => (
            <ActivityLine key={entry.id} entry={entry} />
          ))}
        </div>
      ) : null}
      {recentPulses.length > 0 ? (
        <div className="mt-1.5 border-t border-border/40 pt-1">
          <p className="mb-0.5 text-[9px] uppercase tracking-wide text-muted-foreground">Pulses</p>
          {recentPulses.slice(0, 5).map((p) => (
            <div key={`${p.id}-${p.at}`} className="truncate text-muted-foreground">
              {p.label}
              {p.detail ? ` — ${p.detail}` : ''}
              <span> · {((performance.now() - p.at) / 1000).toFixed(1)}s</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
