import { Loader2 } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { MouseEvent as ReactMouseEvent, WheelEvent as ReactWheelEvent } from 'react';
import type {
  Branch,
  BranchCommitPreview,
  BranchPromptMeta,
  CheckedOutRef,
  DirectCommit,
  MergeNode,
  OpenPR,
  WorktreeInfo,
} from '../types';
import CanvasLineLayer from './CanvasLineLayer';
import HtmlNodeLayer from './HtmlNodeLayer';
import { buildBranchScene, buildSceneSignature } from './branchScene/buildBranchScene';
import type { BranchSceneModel, CameraState, SceneEdge, SceneNode, ScenePoint } from './branchScene/types';

type OrientationMode = 'vertical' | 'horizontal';

type BranchMapCanvasHtmlProps = {
  branches: Branch[];
  mergeNodes: MergeNode[];
  directCommits?: DirectCommit[];
  defaultBranch: string;
  onCommitClick?: (target: { commitSha: string; branchName?: string }) => void;
  branchPromptMeta?: Record<string, BranchPromptMeta>;
  branchCommitPreviews?: Record<string, BranchCommitPreview[]>;
  branchUniqueAheadCounts?: Record<string, number>;
  openPRs?: OpenPR[];
  isLoading?: boolean;
  checkedOutRef?: CheckedOutRef | null;
  worktrees?: WorktreeInfo[];
  orientation?: OrientationMode;
  onPerfSample?: (sample: {
    sceneBuildMs: number;
    totalNodes: number;
    visibleNodes: number;
    edges: number;
  }) => void;
};

const ZOOM_MIN = 0.4;
const ZOOM_MAX = 2.8;
const ZOOM_WHEEL_FACTOR = 0.0018;

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function projectPointForOrientation(point: ScenePoint, orientation: OrientationMode): ScenePoint {
  if (orientation === 'vertical') return point;
  return { x: point.y, y: point.x };
}

function projectSceneForOrientation(scene: BranchSceneModel, orientation: OrientationMode): BranchSceneModel {
  if (orientation === 'vertical') return scene;
  const nodes = scene.nodes.map((node) => ({
    ...node,
    x: node.y,
    y: node.x,
    width: node.height,
    height: node.width,
  }));
  const edges: SceneEdge[] = scene.edges.map((edge) => ({
    ...edge,
    points: edge.points.map((pt) => projectPointForOrientation(pt, orientation)),
  }));
  const hitRegions = scene.hitRegions.map((region) => ({
    ...region,
    x: region.y,
    y: region.x,
    width: region.height,
    height: region.width,
  }));
  let minX = Number.POSITIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;
  nodes.forEach((node) => {
    minX = Math.min(minX, node.x);
    minY = Math.min(minY, node.y);
    maxX = Math.max(maxX, node.x + node.width);
    maxY = Math.max(maxY, node.y + node.height);
  });
  edges.forEach((edge) => {
    edge.points.forEach((pt) => {
      minX = Math.min(minX, pt.x);
      minY = Math.min(minY, pt.y);
      maxX = Math.max(maxX, pt.x);
      maxY = Math.max(maxY, pt.y);
    });
  });
  if (!Number.isFinite(minX)) {
    minX = 0;
    minY = 0;
    maxX = 100;
    maxY = 100;
  }
  return {
    ...scene,
    nodes,
    edges,
    hitRegions,
    bounds: {
      minX,
      minY,
      maxX,
      maxY,
      width: Math.max(1, maxX - minX),
      height: Math.max(1, maxY - minY),
    },
  };
}

export default function BranchMapCanvasHtml({
  branches,
  mergeNodes,
  directCommits = [],
  defaultBranch,
  onCommitClick,
  branchCommitPreviews = {},
  branchUniqueAheadCounts = {},
  isLoading = false,
  orientation = 'vertical',
  onPerfSample,
}: BranchMapCanvasHtmlProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [spaceHeld, setSpaceHeld] = useState(false);
  const [isPanning, setIsPanning] = useState(false);
  const [isMarqueeSelecting, setIsMarqueeSelecting] = useState(false);
  const [marqueeRect, setMarqueeRect] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [selectedCommitShas, setSelectedCommitShas] = useState<string[]>([]);
  const [selectedBranchNames, setSelectedBranchNames] = useState<string[]>([]);
  const [camera, setCamera] = useState<CameraState>({
    x: 24,
    y: 24,
    zoom: 1,
    viewportWidth: 0,
    viewportHeight: 0,
  });
  const hasUserMovedCameraRef = useRef(false);
  const panStartRef = useRef<{
    x: number;
    y: number;
    panX: number;
    panY: number;
  } | null>(null);
  const marqueeStartRef = useRef<{
    x: number;
    y: number;
    additive: boolean;
  } | null>(null);

  const sceneSignature = useMemo(
    () =>
      buildSceneSignature({
        branches,
        defaultBranch,
        directCommits,
        mergeNodes,
        branchCommitPreviews,
        branchUniqueAheadCounts,
      }),
    [
      branches,
      defaultBranch,
      directCommits,
      mergeNodes,
      branchCommitPreviews,
      branchUniqueAheadCounts,
    ]
  );

  const sceneBuild = useMemo(() => {
    const startedAt = performance.now();
    const built = buildBranchScene({
      branches,
      defaultBranch,
      directCommits,
      mergeNodes,
      branchCommitPreviews,
      branchUniqueAheadCounts,
    });
    const projected = projectSceneForOrientation(built, orientation);
    return {
      scene: projected,
      buildMs: performance.now() - startedAt,
    };
  }, [
    sceneSignature,
    branches,
    defaultBranch,
    directCommits,
    mergeNodes,
    branchCommitPreviews,
    branchUniqueAheadCounts,
    orientation,
  ]);

  useEffect(() => {
    const element = viewportRef.current;
    if (!element) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      const width = Math.round(entry.contentRect.width);
      const height = Math.round(entry.contentRect.height);
      setViewport({ width, height });
      setCamera((current) => ({
        ...current,
        viewportWidth: width,
        viewportHeight: height,
      }));
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (viewport.width <= 0 || viewport.height <= 0) return;
    if (hasUserMovedCameraRef.current) return;
    const scene = sceneBuild.scene;
    const targetZoom = clamp(
      Math.min(
        viewport.width / Math.max(1, scene.bounds.width),
        viewport.height / Math.max(1, scene.bounds.height)
      ) * 0.88,
      ZOOM_MIN,
      1
    );
    const centerX = scene.bounds.minX + scene.bounds.width / 2;
    const centerY = scene.bounds.minY + scene.bounds.height / 2;
    setCamera((current) => ({
      ...current,
      zoom: targetZoom,
      x: viewport.width / 2 - centerX * targetZoom,
      y: viewport.height / 2 - centerY * targetZoom,
    }));
  }, [viewport.width, viewport.height, sceneBuild.scene]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') setSpaceHeld(true);
    };
    const onKeyUp = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        setSpaceHeld(false);
        setIsPanning(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  useEffect(() => {
    if (!onPerfSample) return;
    const worldViewport = {
      x: (-camera.x / Math.max(camera.zoom, 0.0001)),
      y: (-camera.y / Math.max(camera.zoom, 0.0001)),
      width: camera.viewportWidth / Math.max(camera.zoom, 0.0001),
      height: camera.viewportHeight / Math.max(camera.zoom, 0.0001),
    };
    const visibleNodes = sceneBuild.scene.nodes.filter((node) => (
      node.x < worldViewport.x + worldViewport.width &&
      node.x + node.width > worldViewport.x &&
      node.y < worldViewport.y + worldViewport.height &&
      node.y + node.height > worldViewport.y
    )).length;
    onPerfSample({
      sceneBuildMs: sceneBuild.buildMs,
      totalNodes: sceneBuild.scene.nodes.length,
      visibleNodes,
      edges: sceneBuild.scene.edges.length,
    });
  }, [camera, onPerfSample, sceneBuild]);

  const onWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    hasUserMovedCameraRef.current = true;
    const bounds = viewportRef.current?.getBoundingClientRect();
    const screenX = event.clientX - (bounds?.left ?? 0);
    const screenY = event.clientY - (bounds?.top ?? 0);
    if (event.ctrlKey || event.metaKey) {
      setCamera((current) => {
        const nextZoom = clamp(
          current.zoom * Math.exp(-event.deltaY * ZOOM_WHEEL_FACTOR),
          ZOOM_MIN,
          ZOOM_MAX
        );
        const worldX = (screenX - current.x) / current.zoom;
        const worldY = (screenY - current.y) / current.zoom;
        return {
          ...current,
          zoom: nextZoom,
          x: screenX - worldX * nextZoom,
          y: screenY - worldY * nextZoom,
        };
      });
      return;
    }
    setCamera((current) => ({
      ...current,
      x: current.x - event.deltaX,
      y: current.y - event.deltaY,
    }));
  };

  const onMouseDown = (event: ReactMouseEvent<HTMLDivElement>) => {
    const canPan = event.button === 1 || (event.button === 0 && spaceHeld);
    if (!canPan) return;
    event.preventDefault();
    hasUserMovedCameraRef.current = true;
    panStartRef.current = {
      x: event.clientX,
      y: event.clientY,
      panX: camera.x,
      panY: camera.y,
    };
    setIsPanning(true);
  };

  const applyMarqueeSelection = (
    rect: { left: number; top: number; width: number; height: number },
    additive: boolean
  ) => {
    const zoom = Math.max(camera.zoom, 0.0001);
    const worldRect = {
      x: (rect.left - camera.x) / zoom,
      y: (rect.top - camera.y) / zoom,
      width: rect.width / zoom,
      height: rect.height / zoom,
    };
    const commitHits: string[] = [];
    const branchHits = new Set<string>();
    sceneBuild.scene.nodes.forEach((node) => {
      const overlaps = (
        node.x < worldRect.x + worldRect.width &&
        node.x + node.width > worldRect.x &&
        node.y < worldRect.y + worldRect.height &&
        node.y + node.height > worldRect.y
      );
      if (!overlaps) return;
      commitHits.push(node.commitSha);
      if (node.isBranchHead) branchHits.add(node.branchName);
    });
    setSelectedCommitShas((previous) => (
      additive ? Array.from(new Set([...previous, ...commitHits])) : Array.from(new Set(commitHits))
    ));
    setSelectedBranchNames((previous) => (
      additive ? Array.from(new Set([...previous, ...Array.from(branchHits)])) : Array.from(branchHits)
    ));
  };

  const beginMarqueeSelection = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    if (event.target !== event.currentTarget) return;
    const bounds = viewportRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    marqueeStartRef.current = { x, y, additive: event.shiftKey };
    setMarqueeRect({ left: x, top: y, width: 0, height: 0 });
    setIsMarqueeSelecting(true);
  };

  useEffect(() => {
    if (!isPanning) return;
    const onMouseMove = (event: MouseEvent) => {
      const start = panStartRef.current;
      if (!start) return;
      const dx = event.clientX - start.x;
      const dy = event.clientY - start.y;
      setCamera((current) => ({
        ...current,
        x: start.panX + dx,
        y: start.panY + dy,
      }));
    };
    const onMouseUp = () => {
      panStartRef.current = null;
      setIsPanning(false);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isPanning]);

  useEffect(() => {
    if (!isMarqueeSelecting) return;
    const onMouseMove = (event: MouseEvent) => {
      const start = marqueeStartRef.current;
      const bounds = viewportRef.current?.getBoundingClientRect();
      if (!start || !bounds) return;
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const left = Math.min(start.x, x);
      const top = Math.min(start.y, y);
      const width = Math.abs(x - start.x);
      const height = Math.abs(y - start.y);
      setMarqueeRect({ left, top, width, height });
      if (width > 1 && height > 1) {
        applyMarqueeSelection({ left, top, width, height }, start.additive);
      }
    };
    const onMouseUp = () => {
      const start = marqueeStartRef.current;
      if (start && marqueeRect && marqueeRect.width > 1 && marqueeRect.height > 1) {
        applyMarqueeSelection(marqueeRect, start.additive);
      } else if (!start?.additive) {
        setSelectedCommitShas([]);
        setSelectedBranchNames([]);
      }
      marqueeStartRef.current = null;
      setMarqueeRect(null);
      setIsMarqueeSelecting(false);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isMarqueeSelecting, marqueeRect, camera.x, camera.y, camera.zoom, sceneBuild.scene.nodes]);

  const handleNodeClick = (node: SceneNode, event: ReactMouseEvent<HTMLButtonElement>) => {
    if (event.shiftKey) {
      setSelectedCommitShas((previous) => (
        previous.includes(node.commitSha)
          ? previous.filter((sha) => sha !== node.commitSha)
          : [...previous, node.commitSha]
      ));
      if (node.isBranchHead) {
        setSelectedBranchNames((previous) => (
          previous.includes(node.branchName)
            ? previous.filter((name) => name !== node.branchName)
            : [...previous, node.branchName]
        ));
      }
    } else {
      setSelectedCommitShas([node.commitSha]);
      setSelectedBranchNames(node.isBranchHead ? [node.branchName] : []);
    }

    const shouldCheckout = event.metaKey || event.ctrlKey || event.detail >= 2;
    if (shouldCheckout) {
      onCommitClick?.({
        commitSha: node.commitSha,
        branchName: node.isBranchHead ? node.branchName : undefined,
      });
    }
  };

  return (
    <div
      ref={viewportRef}
      className={`relative h-full overflow-hidden select-none touch-none ${isPanning ? 'cursor-grabbing' : spaceHeld ? 'cursor-grab' : 'cursor-default'}`}
      onWheel={onWheel}
      onMouseDown={(event) => {
        if (event.button === 0 && !spaceHeld) {
          beginMarqueeSelection(event);
          return;
        }
        onMouseDown(event);
      }}
    >
      <CanvasLineLayer
        scene={sceneBuild.scene}
        camera={camera}
        className="absolute inset-0"
      />
      <HtmlNodeLayer
        scene={sceneBuild.scene}
        camera={camera}
        selectedCommitShas={new Set(selectedCommitShas)}
        selectedBranchNames={new Set(selectedBranchNames)}
        hoveredNodeId={hoveredNodeId}
        onNodeClick={handleNodeClick}
        onNodeMouseEnter={(node) => setHoveredNodeId(node.id)}
        onNodeMouseLeave={() => setHoveredNodeId(null)}
      />

      <div className="absolute top-3 left-3 z-20 pointer-events-none">
        <span className="inline-flex items-center rounded-full border border-border bg-card/90 px-3 py-1 text-[10px] uppercase tracking-wide text-muted-foreground shadow-sm">
          Canvas + HTML (Experimental)
        </span>
      </div>

      {isLoading && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <Loader2 className="size-6 shrink-0 animate-spin text-muted-foreground" aria-hidden />
        </div>
      )}
      {marqueeRect && (
        <div
          className="absolute pointer-events-none border border-border bg-primary/10 z-30"
          style={{
            left: marqueeRect.left,
            top: marqueeRect.top,
            width: marqueeRect.width,
            height: marqueeRect.height,
          }}
        />
      )}
    </div>
  );
}
