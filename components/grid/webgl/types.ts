import type { ConnectorFace, Node } from '../LayoutGrid';

export type GpuRenderMode = 'legacy' | 'webgl-hybrid';

export type GpuNodeRecord = {
  id: string;
  visualId: string;
  x: number;
  y: number;
  w: number;
  h: number;
  stateFlags: number;
  colorIndex: number;
};

export type GpuConnectorRecord = {
  id: string;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  zIndex: number;
  fromFace?: ConnectorFace;
  toFace?: ConnectorFace;
};

export type GpuFrameInput = {
  nodes: GpuNodeRecord[];
  connectors: GpuConnectorRecord[];
  mergeConnectors: GpuConnectorRecord[];
  contentWidth: number;
  contentHeight: number;
};

export type WebGLRenderMetrics = {
  layoutMs: number;
  bufferMs: number;
  uploadMs: number;
  drawMs: number;
  frameMs: number;
  nodeCount: number;
  connectorCount: number;
};

export type NodeStateContext = {
  selectedVisibleCommitShas: string[];
  focusedCommitId: string | null;
  matchingNodeIds: Set<string>;
  normalizedSearchQuery: string;
  checkedOutHeadSha: string | null;
  remoteCommitShas: Set<string>;
  unpushedCommitShasSetByBranch: Map<string, Set<string>>;
};

export type NodeFilter = (node: Node) => boolean;
