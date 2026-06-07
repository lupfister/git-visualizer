import { useEffect, useRef, useState } from 'react';
import { PanelRightClose, Trash2 } from 'lucide-react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';
import type { TerminalSession } from '../types';
import { readTerminalSession, resizeTerminalSession, saveTerminalAttachment, writeTerminalSession } from '../lib/terminal';
import { cn } from './grid/mapGridUtils';

type Props = {
  session: TerminalSession | null;
  onClose: () => void;
  onTerminate: (id: string) => void;
  onSessionChange: (session: TerminalSession) => void;
};

const blobToBase64 = (blob: Blob): Promise<string> => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = () => reject(reader.error);
  reader.onload = () => resolve(String(reader.result).split(',', 2)[1] ?? '');
  reader.readAsDataURL(blob);
});

const shellQuote = (value: string): string => `'${value.split("'").join("'\\''")}'`;

export default function TerminalPanel({ session, onClose, onTerminate, onSessionChange }: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const terminalRef = useRef<Terminal | null>(null);
  const renderedOutputRef = useRef('');
  const [width, setWidth] = useState(560);
  const [entered, setEntered] = useState(false);

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
      void readTerminalSession(session.id).then((result) => {
        if (disposed) return;
        onSessionChange(result.session);
        const previous = renderedOutputRef.current;
        if (result.output.startsWith(previous)) {
          terminal.write(result.output.slice(previous.length));
        } else if (result.output !== previous) {
          terminal.reset();
          terminal.write(result.output);
        }
        renderedOutputRef.current = result.output;
      }).catch(() => undefined);
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

  return (
    <aside
      className={cn(
        'relative flex h-full min-h-0 shrink-0 flex-col border-l border-border bg-background transition-[opacity,transform] duration-200 ease-out',
        entered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2',
      )}
      style={{ width }}
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[-5px] top-0 z-20 w-2 cursor-col-resize"
        onPointerDown={(event) => {
          const startX = event.clientX;
          const startWidth = width;
          const move = (moveEvent: PointerEvent) => setWidth(Math.max(320, Math.min(window.innerWidth * 0.65, startWidth + startX - moveEvent.clientX)));
          const stop = () => {
            window.removeEventListener('pointermove', move);
            window.removeEventListener('pointerup', stop);
          };
          window.addEventListener('pointermove', move);
          window.addEventListener('pointerup', stop);
        }}
      />
      <header className="flex h-10 shrink-0 items-center gap-2 border-b border-border/50 px-2">
        <span className="min-w-0 flex-1 truncate text-xs font-medium text-foreground">{session.label}</span>
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
          <PanelRightClose className="h-3.5 w-3.5 shrink-0" />
        </button>
      </header>
      <div ref={hostRef} className="min-h-0 flex-1 overflow-hidden p-2" />
    </aside>
  );
}
