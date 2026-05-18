export type MapGridBackgroundActivity = {
  id: string;
  label: string;
  active: boolean;
  detail: string;
  startedAt: number | null;
  lastPulseAt: number | null;
  pulseCount: number;
};

type Listener = () => void;

const activities = new Map<string, MapGridBackgroundActivity>();
const listeners = new Set<Listener>();
const recentPulses: Array<{ id: string; label: string; detail: string; at: number }> = [];
const MAX_RECENT_PULSES = 8;

const notify = () => {
  for (const listener of listeners) listener();
};

const upsert = (id: string, patch: Partial<MapGridBackgroundActivity> & Pick<MapGridBackgroundActivity, 'label'>) => {
  const now = performance.now();
  const prev = activities.get(id);
  const next: MapGridBackgroundActivity = {
    id,
    label: patch.label,
    active: patch.active ?? prev?.active ?? false,
    detail: patch.detail ?? prev?.detail ?? '',
    startedAt: patch.active ? (prev?.active ? prev.startedAt : now) : patch.active === false ? null : (prev?.startedAt ?? null),
    lastPulseAt: patch.lastPulseAt ?? prev?.lastPulseAt ?? null,
    pulseCount: patch.pulseCount ?? prev?.pulseCount ?? 0,
  };
  if (patch.active === false) next.startedAt = null;
  activities.set(id, next);
  notify();
};

/** Mark a long-running background task on/off. */
export const setMapGridBackgroundActivity = (
  id: string,
  label: string,
  active: boolean,
  detail = '',
) => {
  upsert(id, { label, active, detail });
};

/** Short-lived work (cull tick, connector redraw, etc.). */
export const pulseMapGridBackgroundActivity = (
  id: string,
  label: string,
  detail = '',
) => {
  const now = performance.now();
  const prev = activities.get(id);
  upsert(id, {
    label,
    active: true,
    detail,
    lastPulseAt: now,
    pulseCount: (prev?.pulseCount ?? 0) + 1,
  });
  recentPulses.unshift({ id, label, detail, at: now });
  if (recentPulses.length > MAX_RECENT_PULSES) recentPulses.length = MAX_RECENT_PULSES;
  window.setTimeout(() => {
    const entry = activities.get(id);
    if (!entry || entry.lastPulseAt !== now) return;
    upsert(id, { label, active: false, detail: entry.detail, lastPulseAt: now });
  }, 120);
  notify();
};

export const subscribeMapGridBackgroundActivity = (listener: Listener): (() => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const getMapGridBackgroundActivities = (): MapGridBackgroundActivity[] =>
  [...activities.values()].sort((a, b) => a.label.localeCompare(b.label));

export const getMapGridBackgroundRecentPulses = () => [...recentPulses];
