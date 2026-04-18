import { useEffect, useLayoutEffect, useRef } from 'react';
import {
  branchBaseCommit,
  branchAheadCount,
  buildLanes,
  CARD_HEIGHT,
  CARD_WIDTH,
  commitKeyWithFallback,
  CONNECTOR_COLOR,
  LEFT_PADDING,
  nodeForCommitSha,
  orderByLineage,
  renderableBranchPreviews,
  sortedConcreteBranchPreviews,
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
} from './LayoutGrid';
import type { Branch } from '../../types';
import type { BranchCommitPreview } from '../../types';

export default function BranchGridMap({
  branches,
  directCommits = [],
  unpushedDirectCommits = [],
  defaultBranch,
  branchCommitPreviews = {},
  branchUniqueAheadCounts = {},
  gridSearchQuery = '',
  gridSearchJumpToken = 0,
  gridFocusSha = null,
  onGridSearchResultCountChange,
  onGridSearchFocusChange,
}: BranchGridViewProps) {
  const cardRefs = useRef(new Map<string, HTMLDivElement | null>());
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const lanes = buildLanes(branches, defaultBranch);
  const branchByName = new Map(branches.map((branch) => [branch.name, branch]));
  const laneByName = new Map(lanes.map((lane) => [lane.name, lane] as const));

  const mainCommits = orderByLineage([
    ...directCommits.map((commit) => toCommit(defaultBranch, commit)),
    ...unpushedDirectCommits.map((commit) => toCommit(defaultBranch, commit)),
  ]);

  const branchCommitsByLane = new Map<string, CommitItem[]>();
  const branchPreviewSets = new Map<string, BranchCommitPreview[]>();
  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const branchPreviews = renderableBranchPreviews(branch.name, branchUniqueAheadCounts, branchCommitPreviews);
    branchPreviewSets.set(branch.name, branchPreviews);
    const commits = orderByLineage(branchPreviews.map((commit) => toCommit(branch.name, commit)));
    if (commits.length > 0) branchCommitsByLane.set(branch.name, commits);
  }

  const mainCommitShas = new Set<string>(mainCommits.map((commit) => commit.id));
  const branchCommitShasByName = new Map<string, Set<string>>(
    Array.from(branchCommitsByLane.entries()).map(([branchName, commits]) => [
      branchName,
      new Set(commits.map((commit) => commit.id)),
    ] as const)
  );

  const branchBaseCommitByName = new Map<string, CommitItem>();
  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const baseCommit = branchBaseCommit(branch.name, branchCommitPreviews, branchUniqueAheadCounts);
    if (baseCommit) branchBaseCommitByName.set(branch.name, baseCommit);
  }

  const resolveBranchStartParentName = (branch: Branch): string => {
    const declaredParent = branch.parentBranch;
    const hasConcreteParent =
      declaredParent &&
      declaredParent !== defaultBranch &&
      declaredParent !== branch.name &&
      branchByName.has(declaredParent);
    if (!hasConcreteParent) return defaultBranch;

    const forkSha = branch.divergedFromSha ?? branch.createdFromSha;
    if (forkSha) {
      const declaredParentCommitShas = branchCommitShasByName.get(declaredParent) ?? new Set<string>();
      if (declaredParentCommitShas.has(forkSha)) return declaredParent;
      if (mainCommitShas.has(forkSha)) return defaultBranch;
    }

    const forkAnchor = branchBaseCommitByName.get(branch.name)?.parentSha ?? null;
    if (forkAnchor) {
      const declaredParentCommitShas = branchCommitShasByName.get(declaredParent) ?? new Set<string>();
      if (declaredParentCommitShas.has(forkAnchor)) return declaredParent;
      if (mainCommitShas.has(forkAnchor)) return defaultBranch;
    }

    return declaredParent;
  };

  const resolveBranchStartSha = (branch: Branch): string | null => {
    const childBaseCommit = branchBaseCommitByName.get(branch.name);
    const forkSha = branch.divergedFromSha ?? branch.createdFromSha ?? childBaseCommit?.parentSha ?? null;
    if (!forkSha) return null;
    const parentName = resolveBranchStartParentName(branch);
    if (parentName === defaultBranch) {
      return mainCommitShas.has(forkSha) ? forkSha : null;
    }
    const parentCommitShas = branchCommitShasByName.get(parentName) ?? new Set<string>();
    return parentCommitShas.has(forkSha) ? forkSha : null;
  };

  const visibleCommits: VisualCommit[] = [];
  const branchCommitShaSets = new Map<string, Set<string>>(
    Array.from(branchCommitsByLane.entries()).map(([branchName, commits]) => [
      branchName,
      new Set(commits.map((commit) => commit.id)),
    ] as const)
  );
  const branchCommitShaUnion = new Set<string>();
  for (const shaSet of branchCommitShaSets.values()) {
    for (const sha of shaSet) branchCommitShaUnion.add(sha);
  }
  for (const commit of mainCommits) {
    if (branchCommitShaUnion.has(commit.id)) continue;
    visibleCommits.push({ ...commit, visualId: `${defaultBranch}:${commit.id}` });
  }
  for (const [branchName, commits] of branchCommitsByLane.entries()) {
    for (const commit of commits) {
      visibleCommits.push({ ...commit, visualId: `${branchName}:${commit.id}` });
    }
  }

  const allCommits = sortByTimeDesc(visibleCommits);
  const debugRows = branches.flatMap((branch) => {
    const previews = branchCommitPreviews[branch.name] ?? [];
    const concretePreviews = sortedConcreteBranchPreviews(branch.name, branchCommitPreviews);
    const renderedPreviewIds = new Set((branchPreviewSets.get(branch.name) ?? []).map((commit) => commit.fullSha));
    return [
      `Branch ${branch.name}`,
      `  ahead=${branchAheadCount(branch.name, branchUniqueAheadCounts, branchCommitPreviews)} previews=${concretePreviews.length} rendered=${renderedPreviewIds.size}`,
      ...concretePreviews.map((commit) => {
        const status = renderedPreviewIds.has(commit.fullSha) ? 'visible' : 'hidden';
        const reason =
          commit.kind === 'branch-created'
            ? 'branch-created'
            : renderedPreviewIds.size === 0
              ? 'no visible previews'
              : renderedPreviewIds.has(commit.fullSha)
                ? 'kept by uniqueAhead slice'
                : 'dropped by uniqueAhead slice';
        return `  ${status} ${commit.fullSha.slice(0, 7)} ${commit.message} [${reason}]`;
      }),
      previews.length === 0 ? '  no preview data' : null,
    ].filter((line): line is string => line != null);
  });
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
  const normalizedSearchQuery = gridSearchQuery.trim().toLowerCase();
  const matchingNodes = normalizedSearchQuery
    ? nodes.filter((node) => {
        const sha = node.commit.id.toLowerCase();
        const shortSha = node.commit.id.slice(0, 7).toLowerCase();
        const message = node.commit.message.toLowerCase();
        const branchName = node.commit.branchName.toLowerCase();
        return sha.includes(normalizedSearchQuery) || shortSha.includes(normalizedSearchQuery) || message.includes(normalizedSearchQuery) || branchName.includes(normalizedSearchQuery);
      })
    : nodes;
  const focusedNode = gridFocusSha ? nodes.find((node) => node.commit.id === gridFocusSha) ?? null : null;

  useEffect(() => {
    onGridSearchResultCountChange?.(normalizedSearchQuery ? matchingNodes.length : null);
  }, [matchingNodes.length, normalizedSearchQuery, onGridSearchResultCountChange]);

  useEffect(() => {
    if (!normalizedSearchQuery) {
      onGridSearchFocusChange?.(null);
      return;
    }
    const firstMatch = matchingNodes[0]?.commit.id ?? null;
    onGridSearchFocusChange?.(firstMatch);
  }, [matchingNodes, normalizedSearchQuery, onGridSearchFocusChange]);

  useLayoutEffect(() => {
    if (!gridFocusSha) return;
    const el = cardRefs.current.get(gridFocusSha);
    if (!el) return;
    const container = scrollContainerRef.current;
    if (!container) {
      el.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
      return;
    }
    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const nextTop = container.scrollTop + (elRect.top - containerRect.top) - (containerRect.height / 2) + (elRect.height / 2);
    const nextLeft = container.scrollLeft + (elRect.left - containerRect.left) - (containerRect.width / 2) + (elRect.width / 2);
    container.scrollTo({ top: Math.max(0, nextTop), left: Math.max(0, nextLeft), behavior: 'smooth' });
  }, [gridFocusSha, gridSearchJumpToken]);

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
  const branchStartShas = new Set<string>();
  for (const branch of branches) {
    const parentName = resolveBranchStartParentName(branch);
    if (!parentName) continue;
    const childBaseCommit = branchBaseCommitByName.get(branch.name);
    const childNode = nodeForCommitSha(nodesBySha, childBaseCommit?.id, branch.name);
    const parentNode = nodeForCommitSha(nodesBySha, childBaseCommit?.parentSha ?? null, parentName);
    const branchStartSha = resolveBranchStartSha(branch);
    if (branchStartSha) branchStartShas.add(branchStartSha);
    if (!childNode || !parentNode) continue;
    connectorParentShas.add(parentNode.commit.id);
    connectors.push({ id: `${parentName}->${branch.name}`, fromX: parentNode.x + CARD_WIDTH, fromY: parentNode.y + CARD_HEIGHT / 2, toX: childNode.x, toY: childNode.y + CARD_HEIGHT / 2 });
  }

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div ref={scrollContainerRef} className="overflow-auto">
        <div className="relative min-w-max p-2.5" style={{ width: contentWidth, height: contentHeight }}>
          {nodes.map((node) => (
            <div
              key={node.commit.id}
              ref={(el) => {
                cardRefs.current.set(node.commit.id, el);
              }}
              className={`absolute z-20 rounded-xl bg-card p-1.5 shadow-sm overflow-hidden border transition-all duration-200 ${branchStartShas.has(node.commit.id) || connectorParentShas.has(node.commit.id) ? 'border-blue-500 ring-2 ring-blue-500/20' : branchBaseCommitByName.get(node.commit.branchName)?.id === node.commit.id ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-border/50'} ${normalizedSearchQuery && !matchingNodes.some((match) => match.commit.id === node.commit.id) ? 'opacity-10 blur-[0.5px]' : ''} ${normalizedSearchQuery && matchingNodes.some((match) => match.commit.id === node.commit.id) ? 'ring-2 ring-primary/30 border-primary/70 shadow-md scale-[1.02]' : ''} ${focusedNode?.commit.id === node.commit.id ? 'z-30 ring-4 ring-primary/30 border-primary shadow-lg scale-[1.03]' : ''}`}
              style={{ left: node.x, top: node.y, width: CARD_WIDTH, height: CARD_HEIGHT }}
            >
              {focusedNode?.commit.id === node.commit.id && normalizedSearchQuery ? (
                <div className="mb-1 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
                  Search result
                </div>
              ) : null}
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
      <details className="border-t border-border/50 bg-muted/30 px-4 py-3">
        <summary className="cursor-pointer text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
          Commit debug
        </summary>
        <pre className="mt-3 whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground">
          {debugRows.join('\n')}
        </pre>
      </details>
    </div>
  );
}
