import type { MouseEvent } from 'react';
import type { BranchSceneModel, CameraState, SceneNode } from './branchScene/types';

const CULL_OVERSCAN_WORLD = 220;

type HtmlNodeLayerProps = {
  scene: BranchSceneModel;
  camera: CameraState;
  selectedCommitShas: Set<string>;
  selectedBranchNames: Set<string>;
  hoveredNodeId: string | null;
  onNodeClick: (node: SceneNode, event: MouseEvent<HTMLButtonElement>) => void;
  onNodeMouseEnter: (node: SceneNode) => void;
  onNodeMouseLeave: () => void;
};

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

function intersects(a: { x: number; y: number; width: number; height: number }, b: {
  x: number;
  y: number;
  width: number;
  height: number;
}): boolean {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

export default function HtmlNodeLayer({
  scene,
  camera,
  selectedCommitShas,
  selectedBranchNames,
  hoveredNodeId,
  onNodeClick,
  onNodeMouseEnter,
  onNodeMouseLeave,
}: HtmlNodeLayerProps) {
  const zoom = Math.max(0.2, camera.zoom);
  const worldViewport = {
    x: (-camera.x / zoom) - CULL_OVERSCAN_WORLD,
    y: (-camera.y / zoom) - CULL_OVERSCAN_WORLD,
    width: (camera.viewportWidth / zoom) + CULL_OVERSCAN_WORLD * 2,
    height: (camera.viewportHeight / zoom) + CULL_OVERSCAN_WORLD * 2,
  };
  const visibleNodes = scene.nodes.filter((node) => {
    const keepForState =
      selectedCommitShas.has(node.commitSha) ||
      selectedBranchNames.has(node.branchName) ||
      hoveredNodeId === node.id;
    if (keepForState) return true;
    return intersects(
      {
        x: node.x,
        y: node.y,
        width: node.width,
        height: node.height,
      },
      worldViewport
    );
  });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute left-0 top-0"
        style={{
          transform: `translate(${camera.x}px, ${camera.y}px) scale(${zoom})`,
          transformOrigin: 'top left',
          width: scene.bounds.width,
          height: scene.bounds.height,
          pointerEvents: 'none',
        }}
      >
        {visibleNodes.map((node) => {
          const isSelected =
            selectedCommitShas.has(node.commitSha) ||
            (node.isBranchHead && selectedBranchNames.has(node.branchName));
          const isHovered = hoveredNodeId === node.id;
          return (
            <button
              key={node.id}
              type="button"
              className={cn(
                'absolute rounded-lg border bg-card shadow-sm transition-colors text-left pointer-events-auto',
                'hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30',
                isSelected && 'bg-primary/10 border-border',
                isHovered && 'bg-muted'
              )}
              style={{
                left: node.x,
                top: node.y,
                width: node.width,
                height: node.height,
                zIndex: node.zIndex,
                padding: '8px 10px',
              }}
              onClick={(event) => onNodeClick(node, event)}
              onMouseEnter={() => onNodeMouseEnter(node)}
              onMouseLeave={onNodeMouseLeave}
              title={node.title}
              aria-label={`${node.branchName} ${node.shortSha}`}
            >
              <span className="block text-[10px] uppercase tracking-wide text-muted-foreground font-medium truncate">
                {node.branchName}/{node.shortSha}
              </span>
              <span className="block text-sm text-foreground leading-tight truncate">
                {node.title || 'Commit'}
              </span>
              <span className="block text-xs text-muted-foreground truncate">
                {node.subtitle}
              </span>
              {node.count > 1 && (
                <span className="absolute right-2 top-2 inline-flex min-w-5 items-center justify-center rounded-full bg-muted px-1 text-[10px] text-muted-foreground">
                  {node.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
