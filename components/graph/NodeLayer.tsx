import type { PositionedNode } from './graphLayout';
import { NODE_HEIGHT, NODE_WIDTH } from './graphLayout';

type NodeLayerProps = {
  nodes: PositionedNode[];
  selectedIds: Set<string>;
  checkedOutSha?: string | null;
  laneHighlight?: string | null;
  onNodeClick: (node: PositionedNode, additive: boolean) => void;
  onNodeHover: (node: PositionedNode | null) => void;
};

export default function NodeLayer({
  nodes,
  selectedIds,
  checkedOutSha,
  laneHighlight,
  onNodeClick,
  onNodeHover,
}: NodeLayerProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {nodes.map((node) => {
        const selected = selectedIds.has(node.id);
        const isCheckedOut = checkedOutSha && checkedOutSha === node.sha;
        const laneMuted = laneHighlight != null && laneHighlight !== node.laneId;

        return (
          <button
            key={node.id}
            type="button"
            className="absolute pointer-events-auto rounded-md border text-left px-2 py-1 overflow-hidden"
            style={{
              left: node.x - NODE_WIDTH / 2,
              top: node.y - NODE_HEIGHT / 2,
              width: NODE_WIDTH,
              height: NODE_HEIGHT,
              borderColor: isCheckedOut ? '#0ea5e9' : selected ? '#3b82f6' : '#d1d5db',
              background: isCheckedOut ? '#e0f2fe' : selected ? '#dbeafe' : '#f9fafb',
              opacity: laneMuted ? 0.35 : 1,
              transition: 'opacity 120ms ease, border-color 120ms ease, background-color 120ms ease',
            }}
            onMouseEnter={() => onNodeHover(node)}
            onMouseLeave={() => onNodeHover(null)}
            onClick={(event) => onNodeClick(node, event.metaKey || event.ctrlKey)}
          >
            <div className="text-[11px] font-mono text-slate-700 leading-tight truncate">{node.sha.slice(0, 7)}</div>
            <div className="text-[11px] text-slate-900 leading-tight truncate">{node.label || '(no message)'}</div>
          </button>
        );
      })}
    </div>
  );
}
