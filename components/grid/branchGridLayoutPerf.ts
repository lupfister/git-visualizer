import { computeBranchGridLayout, type BranchGridLayoutInput, type BranchGridLayoutModel } from './branchGridLayoutModel';

const isDev = typeof import.meta !== 'undefined' && Boolean(import.meta.env?.DEV);

let layoutCacheHitCount = 0;
let layoutComputeCount = 0;

export const getBranchGridLayoutPerfCounters = () => ({
  cacheHits: layoutCacheHitCount,
  computes: layoutComputeCount,
});

export const markLayoutCacheHit = (kind: 'memory' | 'hydrated' | 'persisted') => {
  if (!isDev) return;
  layoutCacheHitCount += 1;
  performance.mark(`branch-grid-layout-cache-${kind}`);
  console.debug('[branch-grid-layout] cache hit', kind, { cacheHits: layoutCacheHitCount });
};

export const markLayoutComputeScheduled = (nodeCount: number) => {
  if (!isDev) return;
  layoutComputeCount += 1;
  performance.mark('branch-grid-layout-scheduled');
  console.debug('[branch-grid-layout] compute scheduled', { nodeCount, computes: layoutComputeCount });
};

export const computeBranchGridLayoutWithPerf = (
  input: BranchGridLayoutInput,
): BranchGridLayoutModel => {
  const nodeEstimate =
    input.directCommits.length
    + input.unpushedDirectCommits.length
    + input.branches.length;
  if (isDev) {
    markLayoutComputeScheduled(nodeEstimate);
    performance.mark('branch-grid-layout-start');
  }
  const model = computeBranchGridLayout(input);
  if (isDev) {
    performance.mark('branch-grid-layout-end');
    try {
      performance.measure(
        'branch-grid-layout',
        'branch-grid-layout-start',
        'branch-grid-layout-end',
      );
      const measure = performance.getEntriesByName('branch-grid-layout').at(-1);
      console.debug('[branch-grid-layout] compute done', {
        durationMs: measure?.duration?.toFixed(1),
        renderNodes: model.renderNodes.length,
        allCommits: model.allCommits.length,
      });
    } catch {
      // ignore measure failures
    }
  }
  return model;
};
