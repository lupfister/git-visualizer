import { cn, GRID_LOOSE_CABLE_STORAGE_KEY } from './mapGridUtils';

type Props = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  looseCableConnectors: boolean;
  onLooseCableConnectorsChange: (enabled: boolean) => void;
  visibleBounds: { left: number; top: number; right: number; bottom: number } | null;
  renderedNodeCount: number;
  totalNodeCount: number;
  renderedMergeConnectorCount: number;
  totalMergeConnectorCount: number;
  renderedConnectorCount: number;
  totalConnectorCount: number;
  mapGridCullViewportInsetScreenPx: number;
  debugRows: string[];
  branchDebugRows: string[];
  connectorDecisions: Array<{
    rendered: boolean;
    kind: 'branch' | 'ancestry' | 'merge';
    parent: string;
    child: string;
    reason: string;
  }>;
};

export default function MapGridDebugPanel({
  isOpen,
  onToggle,
  onClose,
  looseCableConnectors,
  onLooseCableConnectorsChange,
  visibleBounds,
  renderedNodeCount,
  totalNodeCount,
  renderedMergeConnectorCount,
  totalMergeConnectorCount,
  renderedConnectorCount,
  totalConnectorCount,
  mapGridCullViewportInsetScreenPx,
  debugRows,
  branchDebugRows,
  connectorDecisions,
}: Props) {
  return (
    <>
      <div className="pointer-events-none absolute bottom-4 right-4 z-[10000] flex items-end gap-2">
        <button
          type="button"
          onClick={onToggle}
          className={cn(
            'pointer-events-auto inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors',
            isOpen
              ? 'border-primary/30 bg-primary/10 text-primary'
              : 'border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground',
          )}
        >
          Debug
        </button>
      </div>
      {isOpen ? (
        <div className="absolute bottom-14 right-4 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-foreground">Commit debug</p>
              <p className="text-xs text-muted-foreground">Rendered branch summaries and connector decisions</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              Close
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3">
            <label className="mb-3 flex cursor-pointer items-start gap-2 rounded-lg border border-border/40 bg-muted/15 px-3 py-2.5">
              <input
                type="checkbox"
                checked={looseCableConnectors}
                onChange={(event) => onLooseCableConnectorsChange(event.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <span>
                <span className="block text-sm font-medium text-foreground">Loose cable connectors</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  Smooth cubic paths instead of elbows. Persists in localStorage (
                  <code className="rounded bg-muted/50 px-1 py-0.5 text-[10px]">{GRID_LOOSE_CABLE_STORAGE_KEY}</code>
                  ). Optional URL flag:{' '}
                  <code className="rounded bg-muted/50 px-1 py-0.5 text-[10px]">?looseCables=1</code>
                </span>
              </span>
            </label>
            <pre className="whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground">
              {[
                `Cull viewport (inset ${mapGridCullViewportInsetScreenPx}px screen/side): ${visibleBounds ? `${(visibleBounds.right - visibleBounds.left).toFixed(0)} x ${(visibleBounds.bottom - visibleBounds.top).toFixed(0)} content px` : 'unavailable'}`,
                `Rendered nodes: ${renderedNodeCount} / ${totalNodeCount}`,
                `Rendered merge connectors: ${renderedMergeConnectorCount} / ${totalMergeConnectorCount}`,
                `Rendered connectors: ${renderedConnectorCount} / ${totalConnectorCount}`,
                '',
                ...debugRows,
                ...branchDebugRows,
                '',
                ...connectorDecisions.map((decision) => `${decision.rendered ? 'rendered' : 'skipped'} [${decision.kind}] ${decision.parent.slice(0, 7)} -> ${decision.child.slice(0, 7)} (${decision.reason})`),
              ].join('\n')}
            </pre>
          </div>
        </div>
      ) : null}
    </>
  );
}
