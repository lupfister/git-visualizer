/**
 * Pure connector anchor math shared by {@link ./branchGridLayoutModel} and live drag recabling.
 */
import { CARD_HEIGHT, CARD_WIDTH, type ConnectorFace, type Node } from './LayoutGrid';

const GRID_INCOMING_GAP_PX = 0;
const GRID_MERGE_TARGET_GAP_PX = 0;
const CONNECTOR_HORIZONTAL_ROW_ALIGN_EPS_PX = 22;
const CONNECTOR_CHILD_SIDE_FROM_PARENT_CENTER_EPS_PX = 12;

export type ConnectorAnchorPair = {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  fromFace: ConnectorFace;
  toFace: ConnectorFace;
};

const isConnectorBranching = (isHorizontal: boolean, parentNode: Node, childNode: Node): boolean => {
  if (parentNode.column !== childNode.column) return true;
  if (!isHorizontal) return false;
  return parentNode.commit.branchName !== childNode.commit.branchName;
};

const horizontalIncomingAnchorFromParent = (
  node: Node,
  parentNode: Node | null,
): { x: number; y: number; face: ConnectorFace } => {
  if (!parentNode) {
    return { x: node.x - GRID_INCOMING_GAP_PX, y: node.y + CARD_HEIGHT / 2, face: 'left' };
  }
  const dy = node.y - parentNode.y;
  if (Math.abs(dy) < CONNECTOR_HORIZONTAL_ROW_ALIGN_EPS_PX) {
    return { x: node.x - GRID_INCOMING_GAP_PX, y: node.y + CARD_HEIGHT / 2, face: 'left' };
  }
  if (dy > 0) {
    const parentCx = parentNode.x + CARD_WIDTH / 2;
    const childCx = node.x + CARD_WIDTH / 2;
    if (childCx - parentCx > CONNECTOR_CHILD_SIDE_FROM_PARENT_CENTER_EPS_PX) {
      return { x: node.x - GRID_INCOMING_GAP_PX, y: node.y + CARD_HEIGHT / 2, face: 'left' };
    }
    if (parentCx - childCx > CONNECTOR_CHILD_SIDE_FROM_PARENT_CENTER_EPS_PX) {
      return { x: node.x + CARD_WIDTH + GRID_INCOMING_GAP_PX, y: node.y + CARD_HEIGHT / 2, face: 'right' };
    }
    return { x: node.x + CARD_WIDTH / 2, y: node.y - GRID_INCOMING_GAP_PX, face: 'top' };
  }
  return { x: node.x + CARD_WIDTH / 2, y: node.y + CARD_HEIGHT + GRID_INCOMING_GAP_PX, face: 'bottom' };
};

const getIncomingAnchor = (isHorizontal: boolean, node: Node, parentNode: Node | null): { x: number; y: number; face: ConnectorFace } => {
  if (!isHorizontal) {
    return { x: node.x + CARD_WIDTH / 2, y: node.y + CARD_HEIGHT + GRID_INCOMING_GAP_PX, face: 'bottom' };
  }
  return horizontalIncomingAnchorFromParent(node, parentNode);
};

const getBranchIncomingAnchor = (isHorizontal: boolean, node: Node, parentNode: Node | null): { x: number; y: number; face: ConnectorFace } => {
  if (!isHorizontal) {
    return { x: node.x + CARD_WIDTH / 2, y: node.y + CARD_HEIGHT + GRID_INCOMING_GAP_PX, face: 'bottom' };
  }
  return horizontalIncomingAnchorFromParent(node, parentNode);
};

const getOutgoingAnchor = (
  isHorizontal: boolean,
  node: Node,
  isBranching: boolean,
  childNode: Node | null,
): { x: number; y: number; face: ConnectorFace } => {
  if (!isHorizontal) {
    return {
      x: isBranching ? node.x + CARD_WIDTH : node.x + CARD_WIDTH / 2,
      y: isBranching ? node.y + CARD_HEIGHT / 2 : node.y,
      face: isBranching ? 'right' : 'top',
    };
  }
  if (!isBranching) {
    if (!childNode) {
      return { x: node.x + CARD_WIDTH + GRID_INCOMING_GAP_PX, y: node.y + CARD_HEIGHT / 2, face: 'right' };
    }
    const dy = childNode.y - node.y;
    if (Math.abs(dy) < CONNECTOR_HORIZONTAL_ROW_ALIGN_EPS_PX) {
      return { x: node.x + CARD_WIDTH + GRID_INCOMING_GAP_PX, y: node.y + CARD_HEIGHT / 2, face: 'right' };
    }
    if (dy > 0) {
      return { x: node.x + CARD_WIDTH / 2, y: node.y + CARD_HEIGHT + GRID_INCOMING_GAP_PX, face: 'bottom' };
    }
    const parentCx = node.x + CARD_WIDTH / 2;
    const parentCy = node.y + CARD_HEIGHT / 2;
    const childCx = childNode.x + CARD_WIDTH / 2;
    const dx = childCx - parentCx;
    if (dx > CONNECTOR_CHILD_SIDE_FROM_PARENT_CENTER_EPS_PX || dx < -CONNECTOR_CHILD_SIDE_FROM_PARENT_CENTER_EPS_PX) {
      return { x: parentCx, y: parentCy, face: 'mid-h' };
    }
    return { x: parentCx, y: node.y - GRID_INCOMING_GAP_PX, face: 'top' };
  }
  if (childNode && childNode.column === node.column && childNode.commit.branchName !== node.commit.branchName) {
    if (childNode.x > node.x) {
      return { x: node.x + CARD_WIDTH / 2, y: node.y + CARD_HEIGHT + GRID_INCOMING_GAP_PX, face: 'bottom' };
    }
    if (childNode.x < node.x) {
      return { x: node.x + CARD_WIDTH / 2, y: node.y - GRID_INCOMING_GAP_PX, face: 'top' };
    }
  }
  if (!childNode || childNode.column === node.column) {
    if (childNode && Math.abs(childNode.y - node.y) >= CONNECTOR_HORIZONTAL_ROW_ALIGN_EPS_PX) {
      if (childNode.y > node.y) {
        return { x: node.x + CARD_WIDTH / 2, y: node.y + CARD_HEIGHT + GRID_INCOMING_GAP_PX, face: 'bottom' };
      }
      return { x: node.x + CARD_WIDTH / 2, y: node.y - GRID_INCOMING_GAP_PX, face: 'top' };
    }
    return { x: node.x + CARD_WIDTH + GRID_INCOMING_GAP_PX, y: node.y + CARD_HEIGHT / 2, face: 'right' };
  }
  if (childNode.column > node.column) {
    if (childNode.y + CONNECTOR_HORIZONTAL_ROW_ALIGN_EPS_PX < node.y) {
      const parentCx = node.x + CARD_WIDTH / 2;
      const parentCy = node.y + CARD_HEIGHT / 2;
      const childCx = childNode.x + CARD_WIDTH / 2;
      const dx = childCx - parentCx;
      if (dx > CONNECTOR_CHILD_SIDE_FROM_PARENT_CENTER_EPS_PX || dx < -CONNECTOR_CHILD_SIDE_FROM_PARENT_CENTER_EPS_PX) {
        return { x: parentCx, y: parentCy, face: 'mid-h' };
      }
      return { x: parentCx, y: node.y - GRID_INCOMING_GAP_PX, face: 'top' };
    }
    return { x: node.x + CARD_WIDTH / 2, y: node.y + CARD_HEIGHT + GRID_INCOMING_GAP_PX, face: 'bottom' };
  }
  if (childNode.y + CONNECTOR_HORIZONTAL_ROW_ALIGN_EPS_PX < node.y) {
    const parentCx = node.x + CARD_WIDTH / 2;
    const parentCy = node.y + CARD_HEIGHT / 2;
    const childCx = childNode.x + CARD_WIDTH / 2;
    const dx = childCx - parentCx;
    if (dx > CONNECTOR_CHILD_SIDE_FROM_PARENT_CENTER_EPS_PX || dx < -CONNECTOR_CHILD_SIDE_FROM_PARENT_CENTER_EPS_PX) {
      return { x: parentCx, y: parentCy, face: 'mid-h' };
    }
  }
  return { x: node.x + CARD_WIDTH / 2, y: node.y - GRID_INCOMING_GAP_PX, face: 'top' };
};

const getBranchOutgoingAnchor = (isHorizontal: boolean, node: Node): { x: number; y: number; face: ConnectorFace } => {
  if (!isHorizontal) {
    return { x: node.x + CARD_WIDTH, y: node.y + CARD_HEIGHT / 2, face: 'right' };
  }
  return { x: node.x + CARD_WIDTH / 2, y: node.y + CARD_HEIGHT + GRID_INCOMING_GAP_PX, face: 'bottom' };
};

/** Ancestry / synthetic chain (`useBranchFeedAnchors: false`) or branch-feed (`true`). */
export function computeParentChildConnectorAnchors(
  isHorizontal: boolean,
  useBranchFeedAnchors: boolean,
  parentNode: Node,
  childNode: Node,
): ConnectorAnchorPair {
  if (useBranchFeedAnchors) {
    const s = getBranchOutgoingAnchor(isHorizontal, parentNode);
    const t = getBranchIncomingAnchor(isHorizontal, childNode, parentNode);
    return { fromX: s.x, fromY: s.y, fromFace: s.face, toX: t.x, toY: t.y, toFace: t.face };
  }
  const isBranching = isConnectorBranching(isHorizontal, parentNode, childNode);
  const s = getOutgoingAnchor(isHorizontal, parentNode, isBranching, childNode);
  const t = getIncomingAnchor(isHorizontal, childNode, parentNode);
  return { fromX: s.x, fromY: s.y, fromFace: s.face, toX: t.x, toY: t.y, toFace: t.face };
}

export function computeMergeConnectorAnchors(isHorizontal: boolean, sourceNode: Node, mergeTarget: Node): ConnectorAnchorPair {
  if (!isHorizontal) {
    return {
      fromX: sourceNode.x + CARD_WIDTH / 2,
      fromY: sourceNode.y,
      fromFace: 'top',
      toX: mergeTarget.x + CARD_WIDTH - GRID_MERGE_TARGET_GAP_PX,
      toY: mergeTarget.y + CARD_HEIGHT / 2,
      toFace: 'right',
    };
  }
  return {
    fromX: sourceNode.x + CARD_WIDTH + GRID_MERGE_TARGET_GAP_PX,
    fromY: sourceNode.y + CARD_HEIGHT / 2,
    fromFace: 'right',
    toX: mergeTarget.x + CARD_WIDTH / 2,
    toY: mergeTarget.y - GRID_MERGE_TARGET_GAP_PX,
    toFace: 'top',
  };
}
