import { memo, useEffect, useRef, useState } from 'react';
import { Terminal, X } from 'lucide-react';
import { getProjectPreviewLogTail } from '../lib/git';

type PreviewTerminalPanelProps = {
  repoPath: string | null;
  active: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStop: () => void;
};

const MAX_LOG_CHARS = 64 * 1024;

function PreviewTerminalPanel({
  repoPath,
  active,
  open,
  onOpenChange,
  onStop,
}: PreviewTerminalPanelProps) {
  const [logs, setLogs] = useState('');
  const logRef = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    if (!open || !active || !repoPath) {
      if (!open) setLogs('');
      return;
    }

    let disposed = false;
    const load = () => {
      void getProjectPreviewLogTail(repoPath)
        .then((tail) => {
          if (disposed) return;
          setLogs((current) => {
            const next = tail.logs.slice(-MAX_LOG_CHARS);
            return current === next ? current : next;
          });
        })
        .catch(() => undefined);
    };

    load();
    const intervalId = window.setInterval(load, 500);
    return () => {
      disposed = true;
      window.clearInterval(intervalId);
    };
  }, [active, open, repoPath]);

  useEffect(() => {
    const node = logRef.current;
    if (!node) return;
    node.scrollTop = node.scrollHeight;
  }, [logs]);

  if (!active) return null;

  return (
    <div className="pointer-events-none absolute bottom-4 right-4 z-[85] w-[min(34rem,calc(100vw-2rem))]">
      <div className="pointer-events-auto overflow-hidden rounded-2xl border border-border bg-card/95 shadow-lg backdrop-blur-sm">
        <div className="flex items-center justify-between gap-3 border-b border-border/50 px-3 py-2">
          <button
            type="button"
            onClick={() => onOpenChange(!open)}
            className="inline-flex min-w-0 items-center gap-2 rounded-lg px-1 py-0.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Terminal className="h-4 w-4 shrink-0" />
            <span className="truncate">Preview running</span>
          </button>
          <div className="flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              onClick={onStop}
              className="rounded-lg border border-border bg-background px-2 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              Stop
            </button>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted"
              aria-label="Hide preview terminal"
            >
              <X className="h-3.5 w-3.5 shrink-0" />
            </button>
          </div>
        </div>
        {open ? (
          <pre
            ref={logRef}
            className="max-h-72 min-h-32 overflow-auto bg-background p-3 font-mono text-[11px] leading-5 text-muted-foreground"
          >
            {logs || 'Waiting for preview output...'}
          </pre>
        ) : null}
      </div>
    </div>
  );
}

export default memo(PreviewTerminalPanel);
