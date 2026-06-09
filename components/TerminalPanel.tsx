import { useEffect, useRef, useState } from 'react';
import { PanelBottom, PanelBottomClose, PanelRight, PanelRightClose, Trash2 } from 'lucide-react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';
import type { TerminalSession } from '../types';
import { readTerminalSession, resizeTerminalSession, saveTerminalAttachment, terminalSessionMetadataEqual, writeTerminalSession } from '../lib/terminal';
import { cn } from './grid/mapGridUtils';

export type TerminalPanelPlacement = 'right' | 'bottom';

const TERMINAL_PANEL_WIDTH_STORAGE_KEY = 'git-visualizer:terminal-panel-width';
const TERMINAL_PANEL_HEIGHT_STORAGE_KEY = 'git-visualizer:terminal-panel-height';
const DEFAULT_TERMINAL_PANEL_WIDTH = 560;
const DEFAULT_TERMINAL_PANEL_HEIGHT = 280;

type Props = {
  session: TerminalSession | null;
  placement: TerminalPanelPlacement;
  onPlacementChange: (placement: TerminalPanelPlacement) => void;
  onClose: () => void;
  onTerminate: (id: string) => void;
  onSessionChange: (session: TerminalSession) => void;
};

const readStoredPanelSize = (key: string, fallback: number, min: number): number => {
  try {
    const parsed = Number(window.localStorage.getItem(key));
    if (!Number.isFinite(parsed) || parsed < min) return fallback;
    return parsed;
  } catch {
    return fallback;
  }
};

const blobToBase64 = (blob: Blob): Promise<string> => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = () => reject(reader.error);
  reader.onload = () => resolve(String(reader.result).split(',', 2)[1] ?? '');
  reader.readAsDataURL(blob);
});

const shellQuote = (value: string): string => `'${value.split("'").join("'\\''")}'`;

const applyTerminalOutput = (
  terminal: Terminal,
  renderedOutputRef: { current: string },
  next: string,
): void => {
  const previous = renderedOutputRef.current;
  if (next === previous) return;

  // Out-of-order poll: ignore stale reads that are strict prefixes of what we already rendered.
  if (next.length < previous.length && previous.startsWith(next)) {
    return;
  }

  if (next.startsWith(previous)) {
    terminal.write(next.slice(previous.length));
    renderedOutputRef.current = next;
    return;
  }

  const trimmedAtHost = previous.length > next.length && previous.endsWith(next);
  if (trimmedAtHost) {
    terminal.reset();
    terminal.write(next);
    renderedOutputRef.current = next;
    return;
  }

  // Non-monotonic update without a host trim — likely a stale read; skip to avoid xterm flash.
  if (next.length < previous.length) {
    return;
  }

  terminal.reset();
  terminal.write(next);
  renderedOutputRef.current = next;
};

const GENERIC_TERMINAL_LABEL = /^Terminal \d+$/;
const LABEL_STABILIZE_MS = 1200;

const terminalPanelLabel = (session: TerminalSession): string => {
  if (session.kind !== 'preview') return session.label;
  if (session.previewUrl) {
    try {
      return new URL(session.previewUrl).port;
    } catch {
      return 'Preview';
    }
  }
  return 'Preview';
};

export default function TerminalPanel({
  session,
  placement,
  onPlacementChange,
  onClose,
  onTerminate,
  onSessionChange,
}: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const terminalRef = useRef<Terminal | null>(null);
  const renderedOutputRef = useRef('');
  const sessionMetaRef = useRef<TerminalSession | null>(session);
  const refreshInFlightRef = useRef(false);
  const refreshQueuedRef = useRef(false);
  const [headerLabel, setHeaderLabel] = useState(() => (session ? terminalPanelLabel(session) : ''));
  const stableHeaderLabelRef = useRef(headerLabel);

  useEffect(() => {
    if (!session) return;
    const next = terminalPanelLabel(session);
    if (next === stableHeaderLabelRef.current) return;
    if (GENERIC_TERMINAL_LABEL.test(next) && !GENERIC_TERMINAL_LABEL.test(stableHeaderLabelRef.current)) {
      return;
    }
    const timeout = window.setTimeout(() => {
      stableHeaderLabelRef.current = next;
      setHeaderLabel(next);
    }, LABEL_STABILIZE_MS);
    return () => window.clearTimeout(timeout);
  }, [session?.id, session?.label, session?.kind, session?.previewUrl]);
  const [width, setWidth] = useState(() => readStoredPanelSize(TERMINAL_PANEL_WIDTH_STORAGE_KEY, DEFAULT_TERMINAL_PANEL_WIDTH, 320));
  const [height, setHeight] = useState(() => readStoredPanelSize(TERMINAL_PANEL_HEIGHT_STORAGE_KEY, DEFAULT_TERMINAL_PANEL_HEIGHT, 160));
  const [entered, setEntered] = useState(false);
  const isBottom = placement === 'bottom';

  useEffect(() => {
    sessionMetaRef.current = session;
  }, [session]);

  useEffect(() => {
    try {
      window.localStorage.setItem(TERMINAL_PANEL_WIDTH_STORAGE_KEY, String(width));
    } catch {
      // ignore storage failures
    }
  }, [width]);

  useEffect(() => {
    try {
      window.localStorage.setItem(TERMINAL_PANEL_HEIGHT_STORAGE_KEY, String(height));
    } catch {
      // ignore storage failures
    }
  }, [height]);

  useEffect(() => {
    if (!session) {
      setEntered(false);
      return;
    }
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => {
      cancelAnimationFrame(frame);
      setEntered(false);
    };
  }, [session?.id]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !session) return;
    const terminal = new Terminal({
      cursorBlink: true,
      convertEol: true,
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
      fontSize: 12,
      scrollback: 10000,
      theme: {
        background: getComputedStyle(document.documentElement).getPropertyValue('--background').trim(),
        foreground: getComputedStyle(document.documentElement).getPropertyValue('--foreground').trim(),
        cursor: getComputedStyle(document.documentElement).getPropertyValue('--foreground').trim(),
      },
    });
    const fit = new FitAddon();
    terminal.loadAddon(fit);
    terminal.open(host);
    fit.fit();
    terminal.focus();
    terminalRef.current = terminal;
    renderedOutputRef.current = '';

    const dataDisposable = terminal.onData((data) => {
      void writeTerminalSession(session.id, data);
    });
    const handlePaste = (event: ClipboardEvent) => {
      const files = Array.from(event.clipboardData?.files ?? []).filter((file) =>
        file.type.startsWith('image/') || file.type.startsWith('video/'),
      );
      if (files.length === 0) return;
      event.preventDefault();
      event.stopPropagation();
      void Promise.all(files.map(async (file, index) => {
        const fallbackName = file.type.startsWith('video/') ? `video-${index + 1}` : `image-${index + 1}`;
        return saveTerminalAttachment(file.name || fallbackName, file.type, await blobToBase64(file));
      })).then((paths) => writeTerminalSession(session.id, `${paths.map(shellQuote).join(' ')} `));
    };
    host.addEventListener('paste', handlePaste, true);
    const resize = () => {
      fit.fit();
      void resizeTerminalSession(session.id, terminal.cols, terminal.rows);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);

    let disposed = false;
    const refresh = () => {
      if (refreshInFlightRef.current) {
        refreshQueuedRef.current = true;
        return;
      }
      refreshInFlightRef.current = true;
      void readTerminalSession(session.id).then((result) => {
        if (disposed) return;
        const terminal = terminalRef.current;
        if (!terminal) return;

        applyTerminalOutput(terminal, renderedOutputRef, result.output);

        const latestMeta = sessionMetaRef.current;
        if (latestMeta && !terminalSessionMetadataEqual(latestMeta, result.session)) {
          sessionMetaRef.current = result.session;
          onSessionChange(result.session);
        }
      }).catch(() => undefined).finally(() => {
        refreshInFlightRef.current = false;
        if (!disposed && refreshQueuedRef.current) {
          refreshQueuedRef.current = false;
          refresh();
        }
      });
    };
    refresh();
    const interval = window.setInterval(refresh, 100);
    return () => {
      disposed = true;
      window.clearInterval(interval);
      observer.disconnect();
      host.removeEventListener('paste', handlePaste, true);
      dataDisposable.dispose();
      terminal.dispose();
      terminalRef.current = null;
    };
  }, [onSessionChange, session?.id]);

  if (!session) return null;

  const handleTogglePlacement = () => {
    onPlacementChange(isBottom ? 'right' : 'bottom');
  };

  return (
    <aside
      className={cn(
        'relative flex min-h-0 shrink-0 flex-col bg-background transition-[opacity,transform] duration-200 ease-out',
        isBottom
          ? 'w-full border-t border-border'
          : 'h-full border-l border-border',
        entered
          ? 'opacity-100 translate-x-0 translate-y-0'
          : isBottom
            ? 'opacity-0 translate-y-2'
            : 'opacity-0 translate-x-2',
      )}
      style={isBottom ? { height } : { width }}
    >
      {isBottom ? (
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-[-5px] z-20 h-2 cursor-row-resize"
          onPointerDown={(event) => {
            const startY = event.clientY;
            const startHeight = height;
            const move = (moveEvent: PointerEvent) => setHeight(
              Math.max(160, Math.min(window.innerHeight * 0.65, startHeight + startY - moveEvent.clientY)),
            );
            const stop = () => {
              window.removeEventListener('pointermove', move);
              window.removeEventListener('pointerup', stop);
            };
            window.addEventListener('pointermove', move);
            window.addEventListener('pointerup', stop);
          }}
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-[-5px] top-0 z-20 w-2 cursor-col-resize"
          onPointerDown={(event) => {
            const startX = event.clientX;
            const startWidth = width;
            const move = (moveEvent: PointerEvent) => setWidth(
              Math.max(320, Math.min(window.innerWidth * 0.65, startWidth + startX - moveEvent.clientX)),
            );
            const stop = () => {
              window.removeEventListener('pointermove', move);
              window.removeEventListener('pointerup', stop);
            };
            window.addEventListener('pointermove', move);
            window.addEventListener('pointerup', stop);
          }}
        />
      )}
      <header className="flex h-10 shrink-0 items-center gap-2 border-b border-border/50 px-2">
        <span className="min-w-0 flex-1 truncate text-xs font-medium text-foreground">{headerLabel}</span>
        <button
          type="button"
          onClick={handleTogglePlacement}
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label={isBottom ? 'Move terminal to right panel' : 'Move terminal to bottom panel'}
          title={isBottom ? 'Move to right panel' : 'Move to bottom panel'}
        >
          {isBottom ? (
            <PanelRight className="h-3.5 w-3.5 shrink-0" />
          ) : (
            <PanelBottom className="h-3.5 w-3.5 shrink-0" />
          )}
        </button>
        <button
          type="button"
          onClick={() => onTerminate(session.id)}
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Terminate terminal"
          title="Terminate terminal"
        >
          <Trash2 className="h-3.5 w-3.5 shrink-0" />
        </button>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Hide terminal panel"
          title="Hide terminal panel"
        >
          {isBottom ? (
            <PanelBottomClose className="h-3.5 w-3.5 shrink-0" />
          ) : (
            <PanelRightClose className="h-3.5 w-3.5 shrink-0" />
          )}
        </button>
      </header>
      <div ref={hostRef} className="min-h-0 flex-1 overflow-hidden p-2" />
    </aside>
  );
}
