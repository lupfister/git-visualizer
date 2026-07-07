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
    && (
      (hydratedLayoutModel?.allCommits.length ?? 0) === 0
      || (hydratedLayoutModel?.renderNodes.length ?? 0) === 0
    )
    && hasGraphSourceData;
  const layoutLooksEmptyButShouldNot = (model: BranchGridLayoutModel | null): boolean =>
    Boolean(model)
    && ((model?.allCommits.length ?? 0) === 0 || (model?.renderNodes.length ?? 0) === 0)
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
    if (
      fromCache
      && !layoutLooksEmptyButShouldNot(fromCache)
      && layoutModelHasWorkingTree(fromCache) === hasWorktreeNodes
    ) {
      markLayoutCacheHit('memory');
      return { model: fromCache, source: 'memory' };
    }
  }
  if (sharedGridLayoutCacheKey) {
    const fromCache = layoutModelCacheRef.current.get(sharedGridLayoutCacheKey);
    if (
      fromCache
      && !layoutLooksEmptyButShouldNot(fromCache)
      && layoutModelHasWorkingTree(fromCache) === hasWorktreeNodes
    ) {
      markLayoutCacheHit('memory');
      return { model: fromCache, source: 'memory' };
    }
  }
  return { model: null, source: 'needs-compute' };
};

const buildLayoutComputeKey = (
  sharedGridLayoutCacheKey: string | null,
  gridFocusSha: string | null,
): string | null => {
  if (!sharedGridLayoutCacheKey) return null;
  return `${sharedGridLayoutCacheKey}::focus:${gridFocusSha ?? ''}`;
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
  const lastGoodStorageKeyRef = useRef<string | null>(null);
  const lastGoodGraphSignatureRef = useRef<string | null>(null);
  const lastGoodRepoPathRef = useRef<string | null>(null);
  const lastServedComputeKeyRef = useRef<string | null>(null);
  const [asyncLayout, setAsyncLayout] = useState<{
    computeKey: string | null;
    model: BranchGridLayoutModel;
  } | null>(null);
  const jobIdRef = useRef(0);

  const layoutComputeKey = useMemo(
    () => buildLayoutComputeKey(sharedGridLayoutCacheKey, layoutRevisionForView.gridFocusSha),
    [layoutRevisionForView.gridFocusSha, sharedGridLayoutCacheKey],
  );

  const resolved = useMemo(() => {
    const cached = resolveCachedLayoutModel(
      layoutRevisionForView,
      sharedGridLayoutCacheKey,
      hydratedLayoutModel,
      hydratedLayoutKey,
      mapLoading,
      layoutModelCacheRef,
    );
    if (cached.source !== 'needs-compute' && layoutComputeKey) {
      lastServedComputeKeyRef.current = layoutComputeKey;
    }
    return cached;
  }, [
    layoutRevisionForView,
    sharedGridLayoutCacheKey,
    hydratedLayoutModel,
    hydratedLayoutKey,
    mapLoading,
    layoutModelCacheRef,
    layoutComputeKey,
  ]);

  const layoutInput = useMemo(
    () => buildBranchGridLayoutInput(layoutRevisionForView),
    [layoutRevisionForView],
  );

  const immediateLayoutModel = useMemo(() => {
    if (resolved.source !== 'needs-compute') return null;
    if (lastGoodModelRef.current.allCommits.length === 0) return null;
    if (lastGoodGraphSignatureRef.current !== layoutRevisionForView.graphLayoutSignature) return null;
    return computeBranchGridLayoutWithPerf(layoutInput);
  }, [layoutInput, layoutRevisionForView.graphLayoutSignature, resolved.source]);

  useEffect(() => {
    if (resolved.source !== 'needs-compute') {
      setAsyncLayout(null);
      if (resolved.model && layoutComputeKey) {
        lastServedComputeKeyRef.current = layoutComputeKey;
      }
      return undefined;
    }

    const jobId = jobIdRef.current + 1;
    jobIdRef.current = jobId;

    if (immediateLayoutModel) {
      if (sharedGridLayoutCacheKey) {
        layoutModelCacheRef.current.set(sharedGridLayoutCacheKey, immediateLayoutModel);
      }
      if (layoutComputeKey) {
        lastServedComputeKeyRef.current = layoutComputeKey;
      }
      startTransition(() => {
        setAsyncLayout({ computeKey: layoutComputeKey, model: immediateLayoutModel });
      });
      return undefined;
    }

    const worker = getLayoutWorker();

    const applyModel = (model: BranchGridLayoutModel) => {
      if (jobId !== jobIdRef.current) return;
      if (sharedGridLayoutCacheKey) {
        layoutModelCacheRef.current.set(sharedGridLayoutCacheKey, model);
      }
      if (layoutComputeKey) {
        lastServedComputeKeyRef.current = layoutComputeKey;
      }
      startTransition(() => {
        setAsyncLayout({ computeKey: layoutComputeKey, model });
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
  }, [layoutComputeKey, resolved.source, layoutInput, immediateLayoutModel]);

  const asyncLayoutModel = asyncLayout?.computeKey === layoutComputeKey ? asyncLayout.model : null;
  const isSameRepo =
    layoutRevisionForView.repoPath &&
    lastGoodRepoPathRef.current === layoutRevisionForView.repoPath;
  const layoutModel =
    asyncLayoutModel
    ?? immediateLayoutModel
    ?? resolved.model
    ?? (
      isSameRepo
      && lastGoodModelRef.current.allCommits.length > 0
        ? lastGoodModelRef.current
        : EMPTY_LAYOUT_MODEL
    );

  if (resolved.model || asyncLayoutModel) {
    lastGoodModelRef.current = layoutModel;
    lastGoodStorageKeyRef.current = sharedGridLayoutCacheKey;
    lastGoodGraphSignatureRef.current = layoutRevisionForView.graphLayoutSignature ?? null;
    lastGoodRepoPathRef.current = layoutRevisionForView.repoPath ?? null;
  } else if (sharedGridLayoutCacheKey !== lastGoodStorageKeyRef.current) {
    lastGoodStorageKeyRef.current = sharedGridLayoutCacheKey;
    lastServedComputeKeyRef.current = null;
  }
  return layoutModel;
};
