export type SceneNodeKind =
  | 'main-commit'
  | 'branch-commit'
  | 'branch-head-placeholder'
  | 'prompt-marker';

export type SceneEdgeKind =
  | 'main-lane'
  | 'branch-lane'
  | 'branch-fork'
  | 'branch-merge';

export type SceneHitRegionType = 'node';

export type ScenePoint = {
  x: number;
  y: number;
};

export type SceneBounds = {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  width: number;
  height: number;
};

export type SceneNode = {
  id: string;
  kind: SceneNodeKind;
  branchName: string;
  commitSha: string;
  shortSha: string;
  title: string;
  subtitle: string;
  x: number;
  y: number;
  width: number;
  height: number;
  count: number;
  isBranchHead: boolean;
  isSynthetic: boolean;
  zIndex: number;
};

export type SceneEdge = {
  id: string;
  kind: SceneEdgeKind;
  branchName: string;
  points: ScenePoint[];
};

export type SceneHitRegion = {
  id: string;
  type: SceneHitRegionType;
  nodeId: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

export type BranchSceneModel = {
  nodes: SceneNode[];
  edges: SceneEdge[];
  hitRegions: SceneHitRegion[];
  bounds: SceneBounds;
  rows: number;
  lanes: number;
};

export type CameraState = {
  x: number;
  y: number;
  zoom: number;
  viewportWidth: number;
  viewportHeight: number;
};

