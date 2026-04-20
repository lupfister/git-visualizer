import type {
  Branch,
  BranchCommitPreview,
  BranchPromptMeta,
  CheckedOutRef,
  DirectCommit,
  MergeNode,
  OpenPR,
  WorktreeInfo,
} from '../../../types';
import type { AnchorPoint as LayoutAnchorPoint } from '../layout/LayoutSvg';

export type TooltipData = {
  x: number;
  y: number;
  lines: string[];
  avatarUrl?: string;
  avatarFallback?: string;
};

export type ClampMode = 'hard' | 'soft' | 'none';
export type OrientationMode = 'vertical' | 'horizontal';

export type MarkerEntry<T> = { x: number; y: number; item: T };
export type MarkerCluster<T> = { x: number; y: number; entries: MarkerEntry<T>[] };
export type CommitDot = { y: number; commit?: BranchCommitPreview };
export type CommitEntryItem = { index: number; commit?: BranchCommitPreview };
export type PromptEntryItem = { marker: NonNullable<BranchPromptMeta['markers']>[number]; index: number };

export type BranchHeadTarget = {
  branchName: string;
  headSha: string;
  point: { x: number; y: number };
};

export type CommitSelectionTarget = {
  commitSha: string;
  point: { x: number; y: number };
};

export type MarqueeDragState = {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  additive: boolean;
  moved: boolean;
};

export type MarqueeRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

export type NodeDragState = {
  nodeId: string;
  stashIndex?: number;
  parentBranchName: string | null;
  parentSha: string | null;
  containerLeft: number;
  containerTop: number;
  startClientX: number;
  startClientY: number;
  currentClientX: number;
  currentClientY: number;
  isDragging: boolean;
  isDone: boolean;
  nodeElement: SVGGElement | null;
  nodeLabelElement: SVGTextElement | null;
};

export type NodeDragDisplay = {
  cursorX: number;
  cursorY: number;
  nodeId: string;
  hoveringMoveBackBranch: string | null;
};

export type CheckoutAccent = 'none' | 'primary' | 'other';

export type BranchRenderLayout = {
  forkY: number;
  lanePosX: number;
  startX: number;
  isMergedBranch: boolean;
  isLocalBranch: boolean;
  mergeNodeTimeX: number | null;
  branchLineTipY: number;
  mergeBackPath: string | null;
  curvePath: string;
  hitCurvePath: string;
  hasPreviewData: boolean;
  visibleBranchCommits: BranchCommitPreview[];
  uniqueAheadCount: number;
  branchEndDotIndex: number | null;
  localCommitDotIndices: Set<number>;
  fullBranchShouldUseLocalGray: boolean;
  hasUncommittedPreview: boolean;
  localSegmentStartY: number | undefined;
  commitDotClusters: MarkerCluster<CommitEntryItem>[];
  promptMarkerClusters: MarkerCluster<PromptEntryItem>[];
  branchHasCheckedOutHead: boolean;
  brDelay: number;
  showClockIcon: boolean;
  namePoint: { x: number; y: number };
  clockPoint: { x: number; y: number };
  mergeTargetX: number | null;
  mergeTargetY: number | null;
};

export type AnchorPoint = LayoutAnchorPoint;

export type ClumpAnchorState = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  lastSeenRender: number;
};

export type ExpandedClumpState = {
  isExpanded: boolean;
  phase: 'collapsed' | 'expanding' | 'expanded' | 'collapsing';
  phaseStartedAt?: number;
  phaseProgress?: number;
  rowReleaseAt?: number;
};

export type ClumpMemberAnchorState = {
  x: number;
  y: number;
  lastSeenRender: number;
};

export type BranchLineGeometryState = {
  startX: number;
  targetStartX: number;
  forkY: number;
  targetForkY: number;
  lanePosX: number;
  targetLanePosX: number;
  tipY: number;
  targetTipY: number;
  mergeTargetX: number | null;
  targetMergeTargetX: number | null;
  mergeTargetY: number | null;
  targetMergeTargetY: number | null;
  localSegmentStartY: number | null;
  targetLocalSegmentStartY: number | null;
  lastSeenRender: number;
  createdAtRender: number;
};

export type LaneAnchor = {
  x: number;
  y: number;
  trimRadius: number;
  key: string;
};

export type LaneSegment = {
  start: LaneAnchor;
  end: LaneAnchor;
};

export type BranchClusterEntries = {
  realCommitEntries: MarkerEntry<CommitEntryItem>[];
  renderEntries: MarkerEntry<CommitEntryItem>[];
};

export type BranchClusterViewModel = {
  cluster: MarkerCluster<CommitEntryItem>;
  clusterKey: string;
  memberKeys: string[];
  realCommitEntries: MarkerEntry<CommitEntryItem>[];
  renderEntries: MarkerEntry<CommitEntryItem>[];
  preferredAnchorEntry: MarkerEntry<CommitEntryItem>;
  count: number;
  canExpandCluster: boolean;
};

export type MainClusterViewModel = {
  cluster: MarkerCluster<DirectCommit>;
  clusterKey: string;
  memberKeys: string[];
  first: DirectCommit;
  last: DirectCommit;
  count: number;
  canExpandCluster: boolean;
};

export type LineageCommitLike = {
  fullSha: string;
  parentSha?: string | null;
  date: string;
};

export interface BranchMapProps {
  branches: Branch[];
  mergeNodes: MergeNode[];
  directCommits?: DirectCommit[];
  unpushedDirectCommits?: DirectCommit[];
  unpushedCommitShasByBranch?: Record<string, string[]>;
  defaultBranch: string;
  onCommitClick?: (target: { commitSha: string; branchName?: string }) => void;
  onLoadMore?: () => void;
  branchPromptMeta?: Record<string, BranchPromptMeta>;
  branchCommitPreviews?: Record<string, BranchCommitPreview[]>;
  branchUniqueAheadCounts?: Record<string, number>;
  staleBranches?: Branch[];
  openPRs?: OpenPR[];
  isLoading?: boolean;
  scrollRequest?: { branch: Branch; seq: number } | null;
  focusedErrorBranch?: Branch | null;
  checkedOutRef?: CheckedOutRef | null;
  mapTopInsetPx?: number;
  onMergeRefsIntoBranch?: (sourceRefs: string[], targetBranch: string) => Promise<void> | void;
  mergeInProgress?: boolean;
  onPushAllBranches?: () => Promise<void> | void;
  onPushCurrentBranch?: () => Promise<void> | void;
  onPushCommitTargets?: (targets: Array<{ branchName: string; targetSha: string }>) => Promise<void> | void;
  pushInProgress?: boolean;
  onDeleteSelection?: (targets: {
    branchNames: string[];
    discardUncommittedChanges: boolean;
    stashIndices?: number[];
  }) => Promise<void> | void;
  deleteInProgress?: boolean;
  worktrees?: WorktreeInfo[];
  currentRepoPath?: string;
  onRemoveWorktree?: (worktreePath: string, force: boolean) => Promise<void> | void;
  removeWorktreeInProgress?: boolean;
  onSwitchToWorktree?: (worktreePath: string) => void | Promise<void>;
  onStashLocalChanges?: () => Promise<void> | void;
  stashInProgress?: boolean;
  stashDisabled?: boolean;
  onCommitLocalChanges?: (message: string) => Promise<boolean>;
  commitInProgress?: boolean;
  commitDisabled?: boolean;
  onStageAllChanges?: () => Promise<boolean> | Promise<void> | boolean | void;
  stageInProgress?: boolean;
  onCreateBranchFromNode?: (nodeId: string, branchName: string) => Promise<void>;
  createBranchFromNodeInProgress?: boolean;
  onMoveNodeBackToBranch?: (targetBranchName: string) => Promise<void>;
  orientation?: OrientationMode;
}
