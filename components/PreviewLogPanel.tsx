import { useEffect, useRef } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { cn } from './grid/mapGridUtils';

export type PreviewPanelState = {
  commitSha: string;
  shortSha: string;
  browserUrl: string | null;
};

type Props = {
  panel: PreviewPanelState;
  logText: string;
  isStarting: boolean;
  onClose: () => void;
  onOpenInBrowser: () => void;
};

export default function PreviewLogPanel({
  panel,
  logText,
  isStarting,
  onClose,
  onOpenInBrowser,
}: Props) {
  const logEndRef = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ block: 'end' });
  }, [logText]);

  return (
    <div
      className="pointer-events-auto fixed bottom-4 right-4 z-[90] flex h-[min(420px,calc(100vh-6rem))] w-[min(640px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 shadow-lg backdrop-blur-sm"
      role="dialog"
      aria-label={`Commit preview ${panel.shortSha}`}
    >
      <div className="flex items-center justify-between gap-2 border-b border-border/50 px-3 py-2">
        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground">Commit preview</p>
          <p className="truncate text-xs text-muted-foreground">
            {panel.browserUrl ?? `commit ${panel.shortSha} — watch terminal for URL`}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={onOpenInBrowser}
            disabled={isStarting}
            className="inline-flex h-7 items-center gap-1 rounded-lg border border-border px-2 text-xs font-medium text-foreground transition-colors hover:bg-muted disabled:opacity-50"
            title="Open dev server in default browser"
          >
            <ExternalLink className="h-3.5 w-3.5 shrink-0" />
            Browser
          </button>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Close preview panel"
          >
            <X className="h-4 w-4 shrink-0" />
          </button>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col bg-muted/20">
        <p className="shrink-0 px-3 pt-2 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
          Terminal
        </p>
        <pre
          ref={logEndRef}
          className={cn(
            'min-h-0 flex-1 overflow-auto px-3 pb-3 font-mono text-[11px] leading-relaxed text-foreground/90',
            (logText.length === 0 || isStarting) && 'text-muted-foreground italic',
          )}
        >
          {isStarting && logText.length === 0
            ? 'Checking out commit and starting dev server…'
            : logText || 'Waiting for output…'}
        </pre>
      </div>
    </div>
  );
}
