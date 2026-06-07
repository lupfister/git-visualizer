import type { Branch, BranchCommitPreview, CheckedOutRef, DirectCommit, MergeNode } from '../../types';
import type { WorktreeSession } from '../../lib/worktreeSessions';
import type { NodePositionOverrides } from './LayoutGrid';
import type { BranchGridLayoutInput } from './branchGridLayoutModel';
import type { WorkerBranchGridLayoutInput } from './branchGridLayoutWorker';

export type BranchGridLayoutRevision = {
  branchesForLayout: Branch[];
  mergeNodes: MergeNode[];
  enrichedDirectCommits: DirectCommit[];
  enrichedUnpushedDirectCommits: DirectCommit[];
  unpushedCommitShasByBranch: Record<string, string[]>;
  defaultBranch: string;
  enrichedBranchCommitPreviews: Record<string, BranchCommitPreview[]>;
  enrichedBranchParentByName: Record<string, string | null>;
  enrichedBranchUniqueAheadCounts: Record<string, number>;
  manuallyOpenedGridClumps: Set<string>;
  manuallyClosedGridClumps: Set<string>;
  gridFocusSha: string | null;
  visualCheckedOutRef: CheckedOutRef | null;
  worktreeSessions: WorktreeSession[];
  mapGridOrientation: 'vertical' | 'horizontal';
  nodePositionOverrides: NodePositionOverrides;
};

export const buildBranchGridLayoutInput = (
  revision: BranchGridLayoutRevision,
): BranchGridLayoutInput => ({
  branches: revision.branchesForLayout,
  mergeNodes: revision.mergeNodes,
  directCommits: revision.enrichedDirectCommits,
  unpushedDirectCommits: revision.enrichedUnpushedDirectCommits,
  unpushedCommitShasByBranch: revision.unpushedCommitShasByBranch,
  defaultBranch: revision.defaultBranch,
  branchCommitPreviews: revision.enrichedBranchCommitPreviews,
  branchParentByName: revision.enrichedBranchParentByName,
  branchUniqueAheadCounts: revision.enrichedBranchUniqueAheadCounts,
  manuallyOpenedClumps: revision.manuallyOpenedGridClumps,
  manuallyClosedClumps: revision.manuallyClosedGridClumps,
  isDebugOpen: false,
  gridSearchQuery: '',
  gridFocusSha: revision.gridFocusSha,
  checkedOutRef: revision.visualCheckedOutRef ?? null,
  worktreeSessions: revision.worktreeSessions,
  orientation: revision.mapGridOrientation,
  nodePositionOverrides: revision.nodePositionOverrides,
  graphLayoutSignature: revision.graphLayoutSignature,
});

export const toWorkerBranchGridLayoutInput = (
  input: BranchGridLayoutInput,
): WorkerBranchGridLayoutInput => ({
  ...input,
  manuallyOpenedClumps: [...input.manuallyOpenedClumps],
  manuallyClosedClumps: [...input.manuallyClosedClumps],
});
