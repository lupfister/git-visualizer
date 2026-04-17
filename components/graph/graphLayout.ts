import type { GraphNode, GraphSnapshot } from '../../types';

export const LANE_WIDTH = 220;
export const ROW_HEIGHT = 56;
export const NODE_WIDTH = 180;
export const NODE_HEIGHT = 40;

export type PositionedNode = GraphNode & {
  laneIndex: number;
  x: number;
  y: number;
};

export function buildLaneIndex(snapshot: GraphSnapshot): Map<string, number> {
  const map = new Map<string, number>();
  snapshot.lanes.forEach((lane, index) => map.set(lane, index));
  return map;
}

export function positionNode(node: GraphNode, laneIndex: number): PositionedNode {
  return {
    ...node,
    laneIndex,
    x: laneIndex * LANE_WIDTH,
    y: node.row * ROW_HEIGHT,
  };
}

export function buildNodePositionMap(snapshot: GraphSnapshot): {
  positionedNodes: PositionedNode[];
  byId: Map<string, PositionedNode>;
} {
  const laneIndexMap = buildLaneIndex(snapshot);
  const positionedNodes = snapshot.nodes.map((node) => {
    const laneIndex = laneIndexMap.get(node.laneId) ?? 0;
    return positionNode(node, laneIndex);
  });

  return {
    positionedNodes,
    byId: new Map(positionedNodes.map((node) => [node.id, node])),
  };
}

export function contentBounds(snapshot: GraphSnapshot): {
  width: number;
  height: number;
} {
  return {
    width: Math.max(1, snapshot.lanes.length * LANE_WIDTH),
    height: Math.max(1, snapshot.rows * ROW_HEIGHT),
  };
}
