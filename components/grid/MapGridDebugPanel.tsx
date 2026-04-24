type Props = {
  isOpen: boolean;
  onClose: () => void;
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
  onClose,
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
      {isOpen ? (
        <div className="absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm">
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
