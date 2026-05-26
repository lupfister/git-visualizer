import {
  COLUMN_WIDTH,
  LEFT_PADDING,
  TOP_PADDING,
  type Node,
  type NodePositionOverrides,
  type VisualCommit,
} from './LayoutGrid';
import { getNodePositionOverride } from './nodePositionOverrides';

export type OverrideLayoutMetrics = {
  isHorizontal: boolean;
  timelineRowLeadOffset: number;
  zoomAwareTimelinePitch: number;
  zoomAwareLanePitch: number;
  maxResolvedRow: number;
};

const shasMatch = (left: string | null | undefined, right: string | null | undefined): boolean => {
  if (!left || !right) return false;
  return left === right || left.startsWith(right) || right.startsWith(left);
};

/** Snap a dragged pixel position to the nearest logical row/column for layout math. */
export const inferLayoutIndicesFromOverride = (
  x: number,
  y: number,
  metrics: OverrideLayoutMetrics,
): { row: number; column: number } => {
  const { isHorizontal, timelineRowLeadOffset, zoomAwareTimelinePitch, zoomAwareLanePitch, maxResolvedRow } =
    metrics;
  if (isHorizontal) {
    const row =
      zoomAwareTimelinePitch > 0
        ? Math.max(
            1,
            Math.round((x - LEFT_PADDING) / zoomAwareTimelinePitch - timelineRowLeadOffset + 1),
          )
        : 1;
    const column =
      zoomAwareLanePitch > 0
        ? Math.max(0, Math.round((y - TOP_PADDING) / zoomAwareLanePitch))
        : 0;
    return { row, column };
  }
  const column =
    COLUMN_WIDTH > 0 ? Math.max(0, Math.round((x - LEFT_PADDING) / COLUMN_WIDTH)) : 0;
  const row =
    zoomAwareTimelinePitch > 0
      ? Math.max(
          1,
          Math.round(maxResolvedRow - (y - TOP_PADDING) / zoomAwareTimelinePitch),
        )
      : 1;
  return { row, column };
};

const parentShasForCommit = (commit: VisualCommit): string[] => {
  const shas = new Set<string>();
  if (commit.parentSha) shas.add(commit.parentSha);
  for (const parent of commit.parentShas ?? []) {
    if (parent) shas.add(parent);
  }
  return [...shas];
};

const renderedParentNodesFor = (child: Node, renderNodes: Node[]): Node[] => {
  const parentShas = parentShasForCommit(child.commit);
  if (parentShas.length === 0) return [];
  const seen = new Set<string>();
  const matches: Node[] = [];
  for (const candidate of renderNodes) {
    if (seen.has(candidate.commit.visualId)) continue;
    if (!parentShas.some((parentSha) => shasMatch(candidate.commit.id, parentSha))) continue;
    seen.add(candidate.commit.visualId);
    matches.push(candidate);
  }
  if (matches.length <= 1) return matches;
  const sameBranch = matches.filter((candidate) => candidate.commit.branchName === child.commit.branchName);
  return sameBranch.length > 0 ? sameBranch : matches;
};

type LayoutIndex = { row: number; column: number };

/**
 * After automatic layout, align logical row/column indices with drag overrides and push
 * descendants by the same delta so children stay below/right of a moved parent.
 */
export const propagateOverrideRelativeLayout = ({
  renderNodes,
  overrides,
  metrics,
}: {
  renderNodes: Node[];
  overrides: NodePositionOverrides;
  metrics: OverrideLayoutMetrics;
}): void => {
  if (renderNodes.length === 0) return;

  const baselineByVisualId = new Map<string, LayoutIndex>(
    renderNodes.map((node) => [node.commit.visualId, { row: node.row, column: node.column }] as const),
  );
  const effectiveByVisualId = new Map<string, LayoutIndex>();

  for (const node of renderNodes) {
    const override = getNodePositionOverride(overrides, node.commit);
    if (!override) continue;
    const indices = inferLayoutIndicesFromOverride(override.x, override.y, metrics);
    effectiveByVisualId.set(node.commit.visualId, indices);
    node.row = indices.row;
    node.column = indices.column;
  }

  const sortedNodes = [...renderNodes].sort((left, right) => {
    const leftRow = baselineByVisualId.get(left.commit.visualId)?.row ?? 1;
    const rightRow = baselineByVisualId.get(right.commit.visualId)?.row ?? 1;
    if (leftRow !== rightRow) return leftRow - rightRow;
    return left.commit.visualId.localeCompare(right.commit.visualId);
  });

  for (const node of sortedNodes) {
    if (effectiveByVisualId.has(node.commit.visualId)) continue;

    const adjustedParents = renderedParentNodesFor(node, renderNodes)
      .map((parent) => {
        const effective = effectiveByVisualId.get(parent.commit.visualId);
        if (!effective) return null;
        const baseline = baselineByVisualId.get(parent.commit.visualId);
        if (!baseline) return null;
        return { effective, baseline };
      })
      .filter((entry): entry is { effective: LayoutIndex; baseline: LayoutIndex } => entry != null);

    if (adjustedParents.length === 0) continue;

    const childBaseline = baselineByVisualId.get(node.commit.visualId) ?? { row: node.row, column: node.column };
    let targetRow = childBaseline.row;
    let targetColumn = childBaseline.column;

    for (const { effective, baseline } of adjustedParents) {
      const deltaRow = effective.row - baseline.row;
      const deltaColumn = effective.column - baseline.column;
      targetRow = Math.max(targetRow, childBaseline.row + deltaRow, effective.row + 1);
      targetColumn = Math.max(targetColumn, childBaseline.column + deltaColumn);
    }

    const next: LayoutIndex = { row: targetRow, column: targetColumn };
    effectiveByVisualId.set(node.commit.visualId, next);
    node.row = next.row;
    node.column = next.column;
  }
};
