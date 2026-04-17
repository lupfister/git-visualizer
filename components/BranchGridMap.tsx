import {
  branchBaseCommit,
  branchDepth,
  branchParentName,
  buildLanes,
  CARD_HEIGHT,
  CARD_WIDTH,
  commitKeyWithFallback,
  CONNECTOR_COLOR,
  LEFT_PADDING,
  nodeForCommitSha,
  orderByLineage,
  renderableBranchPreviews,
  ROW_GAP,
  ROW_HEIGHT,
  sortByTimeDesc,
  timeAgo,
  toCommit,
  type BranchGridViewProps,
  type CommitItem,
  type Connector,
  type Node,
  type VisualCommit,
  TOP_PADDING,
  COLUMN_WIDTH,
} from './branchGridLayout';

export default function BranchGridMap({
  branches,
  directCommits = [],
  unpushedDirectCommits = [],
  defaultBranch,
  branchCommitPreviews = {},
  branchUniqueAheadCounts = {},
}: BranchGridViewProps) {
  const lanes = buildLanes(branches, defaultBranch);
  const branchByName = new Map(branches.map((branch) => [branch.name, branch]));
  const laneByName = new Map(lanes.map((lane) => [lane.name, lane] as const));

  const mainCommits = orderByLineage([
    ...directCommits.map((commit) => toCommit(defaultBranch, commit)),
    ...unpushedDirectCommits.map((commit) => toCommit(defaultBranch, commit)),
  ]);

  const branchCommitsByLane = new Map<string, CommitItem[]>();
  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const branchPreviews = renderableBranchPreviews(branch.name, branchUniqueAheadCounts, branchCommitPreviews);
    const commits = orderByLineage(branchPreviews.map((commit) => toCommit(branch.name, commit)));
    if (commits.length > 0) branchCommitsByLane.set(branch.name, commits);
  }

  const branchBaseCommitByName = new Map<string, CommitItem>();
  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const baseCommit = branchBaseCommit(branch.name, branchCommitPreviews, branchUniqueAheadCounts);
    if (baseCommit) branchBaseCommitByName.set(branch.name, baseCommit);
  }

  const ownership = new Map<string, string>();
  const candidates = new Map<string, Set<string>>();
  const addCandidate = (branchName: string, commit: CommitItem) => {
    const key = commitKeyWithFallback(commit);
    if (!key) return;
    const set = candidates.get(key) ?? new Set<string>();
    set.add(branchName);
    candidates.set(key, set);
  };

  for (const commit of mainCommits) addCandidate(defaultBranch, commit);
  for (const [branchName, commits] of branchCommitsByLane.entries()) {
    for (const commit of commits) addCandidate(branchName, commit);
  }

  const branchDepthByName = new Map<string, number>(
    branches.map((branch) => [branch.name, branchDepth(branch, branchByName, defaultBranch)])
  );

  const forkAnchorShas = new Set<string>();
  for (const baseCommit of branchBaseCommitByName.values()) {
    const parentSha = baseCommit.parentSha ?? null;
    if (!parentSha) continue;
    forkAnchorShas.add(parentSha);
  }

  const chooseOwner = (branchNames: Iterable<string>): string | null => {
    let best: string | null = null;
    let bestDepth = Number.NEGATIVE_INFINITY;
    for (const branchName of branchNames) {
      const depth = branchName === defaultBranch ? 0 : (branchDepthByName.get(branchName) ?? 1);
      if (depth > bestDepth) {
        bestDepth = depth;
        best = branchName;
      } else if (depth === bestDepth && best != null && branchName.localeCompare(best) < 0) {
        best = branchName;
      }
    }
    return best;
  };

  for (const [sha, branchNames] of candidates.entries()) {
    const owner = forkAnchorShas.has(sha) ? defaultBranch : chooseOwner(branchNames);
    if (owner) ownership.set(sha, owner);
  }

  const visibleCommits: VisualCommit[] = [];
  for (const commit of mainCommits) {
    if (ownership.get(commit.id) !== defaultBranch) continue;
    visibleCommits.push({ ...commit, visualId: `${defaultBranch}:${commit.id}` });
  }
  for (const [branchName, commits] of branchCommitsByLane.entries()) {
    for (const commit of commits) {
      if (ownership.get(commit.id) !== branchName) continue;
      visibleCommits.push({ ...commit, visualId: `${branchName}:${commit.id}` });
    }
  }

  const allCommits = sortByTimeDesc(visibleCommits);
  if (allCommits.length === 0) {
    return (
      <div className="rounded-xl border border-border/50 bg-muted/30 shadow-inner flex items-center justify-center py-20">
        <p className="text-sm text-muted-foreground">No commits to render</p>
      </div>
    );
  }

  const rowByVisualId = new Map<string, number>(allCommits.map((commit, index) => [commit.visualId, index + 1] as const));
  const nodes: Node[] = allCommits.map((commit) => {
    const lane = laneByName.get(commit.branchName);
    const row = rowByVisualId.get(commit.visualId) ?? 1;
    return { commit, row, column: lane?.column ?? 0, x: LEFT_PADDING + (lane?.column ?? 0) * COLUMN_WIDTH, y: TOP_PADDING + (row - 1) * (ROW_HEIGHT + ROW_GAP) };
  });

  const nodesBySha = new Map<string, Node[]>();
  for (const node of nodes) {
    const list = nodesBySha.get(node.commit.id) ?? [];
    list.push(node);
    nodesBySha.set(node.commit.id, list);
  }

  const contentWidth = LEFT_PADDING * 2 + (Math.max(0, ...lanes.map((lane) => lane.column)) + 1) * COLUMN_WIDTH;
  const contentHeight = TOP_PADDING * 2 + Math.max(0, allCommits.length - 1) * (ROW_HEIGHT + ROW_GAP) + CARD_HEIGHT;

  const connectors: Connector[] = [];
  const connectorParentShas = new Set<string>();
  for (const branch of branches) {
    const parentName = branchParentName(branch, branchByName, defaultBranch);
    if (!parentName) continue;
    const childBaseCommit = branchBaseCommitByName.get(branch.name);
    const childNode = nodeForCommitSha(nodesBySha, childBaseCommit?.id, branch.name);
    const parentNode = nodeForCommitSha(nodesBySha, childBaseCommit?.parentSha ?? null, parentName);
    if (!childNode || !parentNode) continue;
    connectorParentShas.add(parentNode.commit.id);
    connectors.push({ id: `${parentName}->${branch.name}`, fromX: parentNode.x + CARD_WIDTH, fromY: parentNode.y + CARD_HEIGHT / 2, toX: childNode.x, toY: childNode.y + CARD_HEIGHT / 2 });
  }

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div className="overflow-auto">
        <div className="relative min-w-max p-2.5" style={{ width: contentWidth, height: contentHeight }}>
          {nodes.map((node) => (
            <div
              key={node.commit.id}
              className={`absolute z-20 rounded-xl bg-card p-1.5 shadow-sm overflow-hidden border ${connectorParentShas.has(node.commit.id) ? 'border-blue-500 ring-2 ring-blue-500/20' : branchBaseCommitByName.get(node.commit.branchName)?.id === node.commit.id ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-border/50'}`}
              style={{ left: node.x, top: node.y, width: CARD_WIDTH, height: CARD_HEIGHT }}
            >
              <p className="text-sm font-medium text-foreground truncate">{node.commit.message}</p>
              <p className="mt-0.5 text-xs text-muted-foreground truncate">{node.commit.branchName} · {timeAgo(node.commit.date)}</p>
            </div>
          ))}
          <svg className="pointer-events-none absolute inset-0 z-30" width={contentWidth} height={contentHeight} viewBox={`0 0 ${contentWidth} ${contentHeight}`} aria-hidden="true">
            <defs>
              <marker id="branch-grid-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L8,4 L0,8 z" fill={CONNECTOR_COLOR} />
              </marker>
            </defs>
            {connectors.map((connector) => {
              const elbowX = connector.fromX + Math.sign(connector.toX - connector.fromX) * Math.min(30, Math.abs(connector.toX - connector.fromX) / 2);
              return <path key={connector.id} d={`M ${connector.fromX} ${connector.fromY} C ${elbowX} ${connector.fromY}, ${elbowX} ${connector.toY}, ${connector.toX} ${connector.toY}`} fill="none" stroke={CONNECTOR_COLOR} strokeWidth="1.5" markerEnd="url(#branch-grid-arrow)" />;
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}
