import { COLUMN_WIDTH, LEFT_PADDING, TOP_PADDING, type Node, type VisualCommit } from './LayoutGrid';

const safeTimeMs = (value: string | null | undefined): number => {
  const time = value ? new Date(value).getTime() : Number.NaN;
  return Number.isFinite(time) ? time : Number.NEGATIVE_INFINITY;
};

export const sortClumpCommitsChronologically = (commits: VisualCommit[]): VisualCommit[] =>
  [...commits].sort(
    (left, right) =>
      safeTimeMs(left.date) - safeTimeMs(right.date)
      || left.id.localeCompare(right.id)
      || left.visualId.localeCompare(right.visualId),
  );

export const isMultiClump = (
  clusterKey: string | undefined,
  clusterCounts: Map<string, number>,
): boolean => !!clusterKey && (clusterCounts.get(clusterKey) ?? 1) > 1;

export const clumpLaneSpan = (count: number, isOpen: boolean): number => (isOpen ? count : 1);

export const isClumpLeadCommit = (
  commit: VisualCommit,
  clusterKeyByCommitId: Map<string, string>,
  clusterCounts: Map<string, number>,
  leadByClusterKey: Map<string, string>,
): boolean => {
  const clusterKey = clusterKeyByCommitId.get(commit.visualId);
  if (!isMultiClump(clusterKey, clusterCounts)) return true;
  return leadByClusterKey.get(clusterKey!) === commit.visualId;
};

export const parentSharesClump = (
  childVisualId: string,
  parentVisualId: string,
  clusterKeyByCommitId: Map<string, string>,
  clusterCounts: Map<string, number>,
): boolean => {
  const childKey = clusterKeyByCommitId.get(childVisualId);
  if (!isMultiClump(childKey, clusterCounts)) return false;
  return clusterKeyByCommitId.get(parentVisualId) === childKey;
};

export type DeriveClumpMemberLayoutInput = {
  clusterKey: string;
  row: number;
  ownerColumn: number;
  isOpen: boolean;
  leadVisualId: string;
  commits: VisualCommit[];
  clusterKeyByCommitId: Map<string, string>;
  rowByVisualId: Map<string, number>;
  columnByCommitVisualId: Map<string, number>;
};

/** Lead anchors row + owner column; members inherit (same row, band columns when open). */
export const deriveClumpMemberLayout = ({
  clusterKey,
  row,
  ownerColumn,
  isOpen,
  leadVisualId,
  commits,
  clusterKeyByCommitId,
  rowByVisualId,
  columnByCommitVisualId,
}: DeriveClumpMemberLayoutInput): void => {
  const members = sortClumpCommitsChronologically(
    commits.filter((commit) => clusterKeyByCommitId.get(commit.visualId) === clusterKey),
  );
  if (members.length === 0) return;

  for (const member of members) {
    rowByVisualId.set(member.visualId, row);
  }

  if (!isOpen) {
    for (const member of members) {
      columnByCommitVisualId.set(member.visualId, ownerColumn);
    }
    return;
  }

  const nonLeadMembers = members.filter((member) => member.visualId !== leadVisualId);
  let column = ownerColumn;
  for (const member of nonLeadMembers) {
    columnByCommitVisualId.set(member.visualId, column);
    column += 1;
  }
  columnByCommitVisualId.set(leadVisualId, ownerColumn + members.length - 1);
};

export type DeriveAllClumpsInput = {
  commits: VisualCommit[];
  clusterKeyByCommitId: Map<string, string>;
  clusterCounts: Map<string, number>;
  leadByClusterKey: Map<string, string>;
  clumpOwnerColumnByClusterKey: Map<string, number>;
  rowByVisualId: Map<string, number>;
  columnByCommitVisualId: Map<string, number>;
  isClumpOpen: (clusterKey: string) => boolean;
};

export const deriveAllClumpsFromOwners = ({
  commits,
  clusterKeyByCommitId,
  clusterCounts,
  leadByClusterKey,
  clumpOwnerColumnByClusterKey,
  rowByVisualId,
  columnByCommitVisualId,
  isClumpOpen,
}: DeriveAllClumpsInput): void => {
  for (const [clusterKey, count] of clusterCounts.entries()) {
    if (count <= 1) continue;
    const leadVisualId = leadByClusterKey.get(clusterKey);
    const ownerColumn = clumpOwnerColumnByClusterKey.get(clusterKey);
    if (!leadVisualId || ownerColumn == null) continue;
    const row = rowByVisualId.get(leadVisualId) ?? 1;
    deriveClumpMemberLayout({
      clusterKey,
      row,
      ownerColumn,
      isOpen: isClumpOpen(clusterKey),
      leadVisualId,
      commits,
      clusterKeyByCommitId,
      rowByVisualId,
      columnByCommitVisualId,
    });
  }
};

export const effectiveLayoutParentColumn = (
  parent: VisualCommit,
  clusterKeyByCommitId: Map<string, string>,
  clusterCounts: Map<string, number>,
  leadByClusterKey: Map<string, string>,
  clumpOwnerColumnByClusterKey: Map<string, number>,
  columnByCommitVisualId: Map<string, number>,
  isClumpOpen: (clusterKey: string) => boolean,
): number => {
  const clusterKey = clusterKeyByCommitId.get(parent.visualId);
  const count = clusterKey ? clusterCounts.get(clusterKey) ?? 1 : 1;
  if (!isMultiClump(clusterKey, clusterCounts)) {
    return columnByCommitVisualId.get(parent.visualId) ?? -1;
  }
  const ownerColumn =
    clumpOwnerColumnByClusterKey.get(clusterKey!)
    ?? columnByCommitVisualId.get(leadByClusterKey.get(clusterKey!) ?? '')
    ?? columnByCommitVisualId.get(parent.visualId)
    ?? -1;
  const span = clumpLaneSpan(count, isClumpOpen(clusterKey!));
  return ownerColumn + span - 1;
};

export const syncClumpCoordinatesToRenderNodes = (
  renderNodes: Node[],
  clusterKeyByCommitId: Map<string, string>,
  clusterCounts: Map<string, number>,
  columnByCommitVisualId: Map<string, number>,
  isHorizontal: boolean,
  maxResolvedRow: number,
  zoomAwareTimelinePitch: number,
  zoomAwareLanePitch: number,
): void => {
  for (const node of renderNodes) {
    const clusterKey = clusterKeyByCommitId.get(node.commit.visualId);
    if (!clusterKey || (clusterCounts.get(clusterKey) ?? 1) <= 1) continue;
    const column = columnByCommitVisualId.get(node.commit.visualId);
    if (column == null) continue;
    node.column = column;
    if (isHorizontal) {
      node.y = TOP_PADDING + column * zoomAwareLanePitch;
      continue;
    }
    node.x = LEFT_PADDING + column * COLUMN_WIDTH;
    node.y = TOP_PADDING + (maxResolvedRow - node.row) * zoomAwareTimelinePitch;
  }
};
