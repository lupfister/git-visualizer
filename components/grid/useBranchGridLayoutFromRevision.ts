import { useEffect, useMemo, useRef, useState, startTransition, type MutableRefObject } from 'react';
import type { BranchGridLayoutModel } from './branchGridLayoutModel';
import {
  buildBranchGridLayoutInput,
  toWorkerBranchGridLayoutInput,
  type BranchGridLayoutRevision,
} from './branchGridLayoutInput';
import { computeBranchGridLayoutWithPerf, markLayoutCacheHit } from './branchGridLayoutPerf';
import type {
  BranchGridLayoutWorkerRequest,
  BranchGridLayoutWorkerResponse,
} from './branchGridLayoutWorker';
import { hydrateBranchGridLayoutModel } from './layoutSnapshot';
import { layoutModelHasWorkingTree } from './workingTreeLayout';

type LayoutResolveSource = 'hydrated' | 'memory' | 'needs-compute';

const EMPTY_LAYOUT_MODEL: BranchGridLayoutModel = {
  branchByName: new Map(),
  laneByName: new Map(),
  mainCommits: [],
  branchCommitsByLane: new Map(),
  branchPreviewSets: new Map(),
  allCommits: [],
  clustersByBranch: new Map(),
  clusterKeyByCommitId: new Map(),
  clusterKeyBySha: new Map(),
  leadByClusterKey: new Map(),
  firstByClusterKey: new Map(),
  clusterCounts: new Map(),
  debugRows: [],
  branchDebugRows: [],
  nodes: [],
  normalizedSearchQuery: '',
  matchingNodes: [],
  matchingNodeIds: new Set(),
  focusedNode: null,
  checkedOutClusterKey: null,
  defaultCollapsedClumps: new Set(),
  visibleCommitsList: [],
  renderNodes: [],
  visibleNodesBySha: new Map(),
  visibleNodeByClusterKey: new Map(),
  pointFormatter: () => '',
  contentWidth: 0,
  contentHeight: 0,
  connectors: [],
  mergeConnectors: [],
  connectorDecisions: [],
  nodeWarnings: new Map(),
  connectorParentShas: new Set(),
  branchStartShas: new Set(),
  branchOffNodeShas: new Set(),
  crossBranchOutgoingShas: new Set(),
  commitIdsWithRenderedAncestry: new Set(),
  branchBaseCommitByName: new Map(),
  firstBranchCommitByName: new Map(),
  mergeDestinations: [],
  mergeTargetBranchesBySourceBranchAndCommitSha: new Map(),
};

let sharedLayoutWorker: Worker | null = null;

const getLayoutWorker = (): Worker | null => {
  if (typeof Worker === 'undefined') return null;
  if (sharedLayoutWorker) return sharedLayoutWorker;
  try {
    sharedLayoutWorker = new Worker(new URL('./branchGridLayoutWorker.ts', import.meta.url), {
      type: 'module',
    });
    return sharedLayoutWorker;
  } catch {
    return null;
  }
};

const resolveCachedLayoutModel = (
  revision: BranchGridLayoutRevision,
  sharedGridLayoutCacheKey: string | null,
  hydratedLayoutModel: BranchGridLayoutModel | null,
  hydratedLayoutKey: string | null,
  mapLoading: boolean,
  layoutModelCacheRef: MutableRefObject<Map<string, BranchGridLayoutModel>>,
): { model: BranchGridLayoutModel | null; source: LayoutResolveSource } => {
  const hasWorktreeNodes = revision.worktreeSessions.length > 0;
  const hasGraphSourceData =
    revision.branchesForLayout.length > 0
    || revision.enrichedDirectCommits.length > 0
    || revision.enrichedUnpushedDirectCommits.length > 0;
  const hydratedLooksEmptyButShouldNot =
    Boolean(hydratedLayoutModel)
    && (hydratedLayoutModel?.allCommits.length ?? 0) === 0
    && hasGraphSourceData;
  const hydratedHasWorkingTree = layoutModelHasWorkingTree(hydratedLayoutModel);
  const canReuseHydratedLayout = hydratedHasWorkingTree === hasWorktreeNodes;

  if (
    sharedGridLayoutCacheKey
    && hydratedLayoutKey === sharedGridLayoutCacheKey
    && hydratedLayoutModel
    && !hydratedLooksEmptyButShouldNot
    && canReuseHydratedLayout
  ) {
    markLayoutCacheHit('hydrated');
    return { model: hydratedLayoutModel, source: 'hydrated' };
  }
  if (mapLoading && sharedGridLayoutCacheKey) {
    const fromCache = layoutModelCacheRef.current.get(sharedGridLayoutCacheKey) ?? null;
    if (fromCache && layoutModelHasWorkingTree(fromCache) === hasWorktreeNodes) {
      markLayoutCacheHit('memory');
      return { model: fromCache, source: 'memory' };
    }
  }
  if (sharedGridLayoutCacheKey) {
    const fromCache = layoutModelCacheRef.current.get(sharedGridLayoutCacheKey);
    if (fromCache && layoutModelHasWorkingTree(fromCache) === hasWorktreeNodes) {
      markLayoutCacheHit('memory');
      return { model: fromCache, source: 'memory' };
    }
  }
  return { model: null, source: 'needs-compute' };
};

export const useBranchGridLayoutFromRevision = (params: {
  layoutRevisionForView: BranchGridLayoutRevision;
  sharedGridLayoutCacheKey: string | null;
  hydratedLayoutModel: BranchGridLayoutModel | null;
  hydratedLayoutKey: string | null;
  mapLoading: boolean;
  layoutModelCacheRef: MutableRefObject<Map<string, BranchGridLayoutModel>>;
}): BranchGridLayoutModel => {
  const {
    layoutRevisionForView,
    sharedGridLayoutCacheKey,
    hydratedLayoutModel,
    hydratedLayoutKey,
    mapLoading,
    layoutModelCacheRef,
  } = params;

  const lastGoodModelRef = useRef<BranchGridLayoutModel>(EMPTY_LAYOUT_MODEL);
  const lastGoodCacheKeyRef = useRef<string | null>(null);
  const [asyncLayoutModel, setAsyncLayoutModel] = useState<BranchGridLayoutModel | null>(null);
  const jobIdRef = useRef(0);

  const resolved = useMemo(
    () =>
      resolveCachedLayoutModel(
        layoutRevisionForView,
        sharedGridLayoutCacheKey,
        hydratedLayoutModel,
        hydratedLayoutKey,
        mapLoading,
        layoutModelCacheRef,
      ),
    [
      layoutRevisionForView,
      sharedGridLayoutCacheKey,
      hydratedLayoutModel,
      hydratedLayoutKey,
      mapLoading,
      layoutModelCacheRef,
    ],
  );

  const layoutInput = useMemo(
    () => buildBranchGridLayoutInput(layoutRevisionForView),
    [layoutRevisionForView],
  );

  useEffect(() => {
    if (resolved.source !== 'needs-compute') {
      setAsyncLayoutModel(null);
      return undefined;
    }

    const jobId = jobIdRef.current + 1;
    jobIdRef.current = jobId;
    const worker = getLayoutWorker();

    const applyModel = (model: BranchGridLayoutModel) => {
      if (jobId !== jobIdRef.current) return;
      startTransition(() => {
        setAsyncLayoutModel(model);
      });
    };

    if (worker) {
      const handleMessage = (event: MessageEvent<BranchGridLayoutWorkerResponse>) => {
        if (event.data.jobId !== jobId) return;
        if (!event.data.ok) {
          console.warn('branch grid layout worker failed:', event.data.error);
          applyModel(computeBranchGridLayoutWithPerf(layoutInput));
          return;
        }
        applyModel(hydrateBranchGridLayoutModel(event.data.serialized));
      };
      worker.addEventListener('message', handleMessage);
      const request: BranchGridLayoutWorkerRequest = {
        jobId,
        input: toWorkerBranchGridLayoutInput(layoutInput),
      };
      worker.postMessage(request);
      return () => {
        worker.removeEventListener('message', handleMessage);
      };
    }

    applyModel(computeBranchGridLayoutWithPerf(layoutInput));
    return undefined;
  }, [resolved.source, layoutInput]);

  const layoutModel =
    resolved.model
    ?? asyncLayoutModel
    ?? (
      sharedGridLayoutCacheKey && lastGoodCacheKeyRef.current === sharedGridLayoutCacheKey
        ? lastGoodModelRef.current
        : EMPTY_LAYOUT_MODEL
    );

  if (resolved.model || asyncLayoutModel) {
    lastGoodModelRef.current = layoutModel;
    lastGoodCacheKeyRef.current = sharedGridLayoutCacheKey;
  } else if (sharedGridLayoutCacheKey !== lastGoodCacheKeyRef.current) {
    lastGoodModelRef.current = EMPTY_LAYOUT_MODEL;
    lastGoodCacheKeyRef.current = sharedGridLayoutCacheKey;
  }
  return layoutModel;
};
