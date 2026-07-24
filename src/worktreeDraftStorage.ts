import type { WorktreeDraftEntry } from './worktreeDraftMessages';

const STORAGE_PREFIX = 'cobble:worktree-draft:';
const STORAGE_SCHEMA_VERSION = 2;

export type PersistedWorktreeDraft = WorktreeDraftEntry & {
  updatedAt: number;
  schemaVersion: number;
};

const storage = (): Storage | null => {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
};

export const worktreeDraftStorageKey = (normalizedPath: string): string =>
  `${STORAGE_PREFIX}${normalizedPath}`;

const isWorktreeDraftEntry = (value: unknown): value is WorktreeDraftEntry => {
  if (!value || typeof value !== 'object') return false;
  const entry = value as Partial<WorktreeDraftEntry>;
  return (
    typeof entry.status === 'string'
    && typeof entry.commitMessage === 'string'
    && typeof entry.branchName === 'string'
    && typeof entry.stashMessage === 'string'
    && typeof entry.summaryFingerprint === 'string'
    && typeof entry.fallbackLabel === 'string'
    && typeof entry.messageFingerprint === 'string'
  );
};

export const readPersistedWorktreeDraft = (normalizedPath: string): WorktreeDraftEntry | null => {
  const store = storage();
  if (!store) return null;
  try {
    const raw = store.getItem(worktreeDraftStorageKey(normalizedPath));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<PersistedWorktreeDraft>;
    if (parsed.schemaVersion !== STORAGE_SCHEMA_VERSION) return null;
    if (!isWorktreeDraftEntry(parsed)) return null;
    return {
      status: parsed.status,
      commitMessage: parsed.commitMessage,
      branchName: parsed.branchName,
      stashMessage: parsed.stashMessage,
      summaryFingerprint: parsed.summaryFingerprint,
      messageFingerprint: parsed.messageFingerprint,
      fallbackLabel: parsed.fallbackLabel,
    };
  } catch {
    return null;
  }
};

export const writePersistedWorktreeDraft = (
  normalizedPath: string,
  entry: WorktreeDraftEntry,
): void => {
  const store = storage();
  if (!store) return;
  try {
    const payload: PersistedWorktreeDraft = {
      ...entry,
      updatedAt: Date.now(),
      schemaVersion: STORAGE_SCHEMA_VERSION,
    };
    store.setItem(worktreeDraftStorageKey(normalizedPath), JSON.stringify(payload));
  } catch {
    // ignore storage failures
  }
};

export const removePersistedWorktreeDraft = (normalizedPath: string): void => {
  const store = storage();
  if (!store) return;
  try {
    store.removeItem(worktreeDraftStorageKey(normalizedPath));
  } catch {
    // ignore storage failures
  }
};
