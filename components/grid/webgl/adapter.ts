import { CARD_BODY_TOP_OFFSET, CARD_HEIGHT, CARD_WIDTH, type Node } from '../LayoutGrid';
import type {
  GpuConnectorRecord,
  GpuFrameInput,
  GpuNodeRecord,
  NodeFilter,
  NodeStateContext,
} from './types';

const NODE_STATE = {
  selected: 1 << 0,
  focused: 1 << 1,
  checkedOut: 1 << 2,
  remote: 1 << 3,
  unpushed: 1 << 4,
  searchMatch: 1 << 5,
} as const;

function toColorIndex(flags: number): number {
  if (flags & NODE_STATE.checkedOut) return 1;
  if (flags & NODE_STATE.selected) return 2;
  if (flags & NODE_STATE.remote) return 3;
  if (flags & NODE_STATE.unpushed) return 4;
  return 0;
}

function nodeFlags(node: Node, state: NodeStateContext): number {
  let flags = 0;
  if (state.selectedVisibleCommitShas.includes(node.commit.id)) flags |= NODE_STATE.selected;
  if (state.focusedCommitId === node.commit.id) flags |= NODE_STATE.focused;
  if (state.checkedOutHeadSha && state.checkedOutHeadSha === node.commit.id) flags |= NODE_STATE.checkedOut;
  if (state.remoteCommitShas.has(node.commit.id)) flags |= NODE_STATE.remote;
  if (state.unpushedCommitShasSetByBranch.get(node.commit.branchName)?.has(node.commit.id)) flags |= NODE_STATE.unpushed;
  if (state.normalizedSearchQuery && state.matchingNodeIds.has(node.commit.id)) flags |= NODE_STATE.searchMatch;
  return flags;
}

export function buildGpuFrameInput(
  renderNodes: Node[],
  connectors: GpuConnectorRecord[],
  mergeConnectors: GpuConnectorRecord[],
  shouldRenderNode: NodeFilter,
  nodeState: NodeStateContext,
  contentWidth: number,
  contentHeight: number,
): GpuFrameInput {
  const visibleNodes = renderNodes.filter(shouldRenderNode);
  const nodes: GpuNodeRecord[] = visibleNodes.map((node) => {
    const stateFlags = nodeFlags(node, nodeState);
    return {
      id: node.commit.id,
      visualId: node.commit.visualId,
      x: node.x,
      y: node.y,
      w: CARD_WIDTH,
      h: CARD_HEIGHT + CARD_BODY_TOP_OFFSET,
      stateFlags,
      colorIndex: toColorIndex(stateFlags),
    };
  });

  return {
    nodes,
    connectors,
    mergeConnectors,
    contentWidth,
    contentHeight,
  };
}
