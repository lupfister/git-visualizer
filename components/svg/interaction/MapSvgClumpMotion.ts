import type { ExpandedClumpState } from '../core/MapSvg.types';
import { clamp01, easeInOutCubic } from '../core/MapSvg.utils';

export function resolveClumpPhaseCore(expandedState?: ExpandedClumpState): {
  isExpanded: boolean;
  phase: ExpandedClumpState['phase'];
  phaseEased: number;
} {
  const isExpanded = expandedState?.isExpanded ?? false;
  const phase = expandedState?.phase ?? 'collapsed';
  const phaseProgress = phase === 'collapsed'
    ? 0
    : phase === 'expanded'
      ? 1
      : clamp01(expandedState?.phaseProgress ?? (phase === 'collapsing' ? 1 : 0));
  const phaseEased = phase === 'collapsing' ? 1 - phaseProgress : phaseProgress;
  return { isExpanded, phase, phaseEased };
}

export function resolveClusterMotionCore(args: {
  clusterKey: string;
  defaultAnchor: { x: number; y: number };
  memberKeys: string[];
  canExpandCluster?: boolean;
  expandedState?: ExpandedClumpState;
  resolveAnimatedClumpAnchor: (
    clusterKey: string,
    defaultAnchor: { x: number; y: number },
    memberKeys: string[],
  ) => { x: number; y: number };
}): {
  anchorX: number;
  anchorY: number;
  isExpanded: boolean;
  phase: ExpandedClumpState['phase'];
  phaseEased: number;
} {
  const {
    clusterKey,
    defaultAnchor,
    memberKeys,
    canExpandCluster = true,
    expandedState,
    resolveAnimatedClumpAnchor,
  } = args;

  const animatedAnchor = resolveAnimatedClumpAnchor(
    clusterKey,
    defaultAnchor,
    memberKeys,
  );
  const { isExpanded, phase, phaseEased } = resolveClumpPhaseCore(expandedState);
  return {
    anchorX: animatedAnchor.x,
    anchorY: animatedAnchor.y,
    isExpanded: canExpandCluster ? isExpanded : false,
    phase: canExpandCluster ? phase : 'collapsed',
    phaseEased: canExpandCluster ? phaseEased : 0,
  };
}

export function interpolateExpandedEntryPoseCore(args: {
  anchor: { x: number; y: number };
  entry: { x: number; y: number };
  phase: ExpandedClumpState['phase'];
  phaseEased: number;
}): { x: number; y: number; opacity: number; scale: number } {
  const {
    anchor,
    entry,
    phase,
    phaseEased,
  } = args;

  const to = { x: entry.x, y: entry.y };
  const from = { x: anchor.x, y: anchor.y };
  const at = phase === 'collapsing'
    ? { x: to.x + (from.x - to.x) * phaseEased, y: to.y + (from.y - to.y) * phaseEased }
    : phase === 'expanding'
      ? { x: from.x + (to.x - from.x) * phaseEased, y: from.y + (to.y - from.y) * phaseEased }
      : phase === 'collapsed'
        ? from
        : to;
  const opacity = phase === 'collapsed' ? 0 : 1;
  const scale = phase === 'collapsing'
    ? (() => {
        const t = clamp01(phaseEased);
        const shallow = 0.032;
        const dipEnd = 0.38;
        if (t < dipEnd) {
          const u = t / dipEnd;
          const easeOut = 1 - Math.pow(1 - u, 3);
          return 1 - shallow * easeOut;
        }
        const u = (t - dipEnd) / (1 - dipEnd);
        const low = 1 - shallow;
        return low + (1 - low) * easeInOutCubic(clamp01(u));
      })()
    : phase === 'expanding'
      ? 0.96 + 0.04 * phaseEased
      : phase === 'collapsed'
        ? 0.96
        : 1;
  return { x: at.x, y: at.y, opacity, scale };
}
