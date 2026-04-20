import React from 'react';
import { getCameraScale } from '../core/MapSvg.utils';
import type { ClampMode } from '../core/MapSvg.types';

export type CameraBounds = {
  viewportW: number;
  viewportH: number;
  viewportTopInset: number;
  canvasWidth: number;
  canvasHeight: number;
  svgWidth: number;
  svgHeight: number;
  graphOffsetX: number;
  graphOffsetY: number;
  isHorizontal: boolean;
};

export type WorldBounds = {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  measured: boolean;
};

export function clampPanCore(args: {
  next: { x: number; y: number };
  zoomValue: number;
  mode: ClampMode;
  cameraBounds: CameraBounds;
  finiteWorld: WorldBounds;
  centerable: WorldBounds;
  cameraContentPad?: number;
}) {
  const {
    next,
    zoomValue,
    mode,
    cameraBounds,
    finiteWorld,
    centerable,
    cameraContentPad = 0,
  } = args;

  function clampAxis(value: number, min: number, max: number): number {
    const lower = Math.min(min, max);
    const upper = Math.max(min, max);
    if (value >= lower && value <= upper) return value;
    const clamped = Math.max(lower, Math.min(upper, value));
    if (mode === 'soft') {
      const overshoot = value - clamped;
      const maxOvershoot = 48;
      return clamped + Math.max(-maxOvershoot, Math.min(maxOvershoot, overshoot * 0.18));
    }
    return clamped;
  }

  const {
    viewportW,
    viewportH,
    viewportTopInset,
    svgWidth: currentSvgWidth,
    svgHeight: currentSvgHeight,
    graphOffsetX: currentGraphOffsetX,
    graphOffsetY: currentGraphOffsetY,
    isHorizontal: currentIsHorizontal,
  } = cameraBounds;

  if (viewportW <= 0 || viewportH <= 0) return next;
  if (mode === 'none') return next;

  const scale = getCameraScale(zoomValue, currentIsHorizontal);
  const topInset = viewportTopInset ?? 0;
  const visibleH = Math.max(0, viewportH - topInset);

  const hasFinite = finiteWorld.measured;
  const hasCenterable = centerable.measured;

  let minXWorld = hasFinite ? finiteWorld.minX : 0;
  let maxXWorld = hasFinite ? finiteWorld.maxX : currentSvgWidth;
  let minYWorld = hasFinite ? finiteWorld.minY : 0;
  let maxYWorld = hasFinite ? finiteWorld.maxY : currentSvgHeight;

  if (hasCenterable) {
    const halfViewportWorldX = viewportW / Math.max(scale.x, 0.0001) / 2;
    const halfViewportWorldY = visibleH / Math.max(scale.y, 0.0001) / 2;
    minXWorld = centerable.minX - halfViewportWorldX;
    maxXWorld = centerable.maxX + halfViewportWorldX;
    minYWorld = centerable.minY - halfViewportWorldY;
    maxYWorld = centerable.maxY + halfViewportWorldY;
  }

  const sceneMinX = currentGraphOffsetX + minXWorld * scale.x - cameraContentPad;
  const sceneMaxX = currentGraphOffsetX + maxXWorld * scale.x + cameraContentPad;
  const sceneMinY = currentGraphOffsetY + minYWorld * scale.y - cameraContentPad;
  const sceneMaxY = currentGraphOffsetY + maxYWorld * scale.y + cameraContentPad;
  const xBounds = {
    min: viewportW - sceneMaxX,
    max: -sceneMinX,
  };
  const yBounds = {
    min: viewportH - sceneMaxY,
    max: topInset - sceneMinY,
  };

  return {
    x: clampAxis(next.x, xBounds.min, xBounds.max),
    y: clampAxis(next.y, yBounds.min, yBounds.max),
  };
}

export function paintCameraCore(args: {
  cameraEl: HTMLDivElement | null;
  svgEl: SVGSVGElement | null;
  zoomLayerEl: SVGGElement | null;
  nextPan: { x: number; y: number };
  nextZoom: number;
  isHorizontal: boolean;
  zoomStableTextEls: SVGTextElement[];
  zoomStableRectEls: SVGRectElement[];
  lastPaintedZoomScaleRef: React.MutableRefObject<number | null>;
}) {
  const {
    cameraEl,
    svgEl,
    zoomLayerEl,
    nextPan,
    nextZoom,
    isHorizontal,
    zoomStableTextEls,
    zoomStableRectEls,
    lastPaintedZoomScaleRef,
  } = args;
  if (!cameraEl) return;
  const cameraScale = getCameraScale(nextZoom, isHorizontal);
  cameraEl.style.transform = `translate3d(${nextPan.x}px, ${nextPan.y}px, 0)`;
  const lastScale = lastPaintedZoomScaleRef.current;
  if (lastScale == null || Math.abs(lastScale - cameraScale.x) > 0.0001) {
    lastPaintedZoomScaleRef.current = cameraScale.x;
    if (svgEl) {
      svgEl.style.setProperty('--camera-scale', String(cameraScale.x));
    }
    if (zoomLayerEl) {
      zoomLayerEl.setAttribute('transform', `scale(${cameraScale.x} ${cameraScale.y})`);
    }

    const inv = 1 / Math.max(cameraScale.x, 0.0001);
    for (const textEl of zoomStableTextEls) {
      const base = Number(textEl.dataset.baseFontSize);
      if (!Number.isFinite(base)) continue;
      textEl.style.fontSize = `${base * inv}px`;
    }
    for (const rectEl of zoomStableRectEls) {
      const base = Number(rectEl.dataset.baseRx);
      if (!Number.isFinite(base)) continue;
      rectEl.setAttribute('rx', String(base * inv));
    }
  }
}

export function syncUiStateCore(args: {
  force: boolean;
  immediate: boolean;
  cameraUiSyncMs: number;
  lastUiSyncRef: React.MutableRefObject<number>;
  zoomRef: React.MutableRefObject<number>;
  zoomStateRef: React.MutableRefObject<number>;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  panRef: React.MutableRefObject<{ x: number; y: number }>;
  setPan: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
}) {
  const {
    force,
    immediate,
    cameraUiSyncMs,
    lastUiSyncRef,
    zoomRef,
    zoomStateRef,
    setZoom,
    panRef,
    setPan,
  } = args;
  if (!force) return;
  const now = performance.now();
  if (!immediate) {
    const minInterval = cameraUiSyncMs;
    if (now - lastUiSyncRef.current < minInterval) return;
  }
  lastUiSyncRef.current = now;
  if (Math.abs(zoomRef.current - zoomStateRef.current) > 0.0001) {
    zoomStateRef.current = zoomRef.current;
    setZoom(zoomRef.current);
  }
  const nextPan = panRef.current;
  setPan((prev) => (
    Math.abs(prev.x - nextPan.x) < 0.1 && Math.abs(prev.y - nextPan.y) < 0.1
      ? prev
      : nextPan
  ));
}

export function applyCameraCore(args: {
  nextPan: { x: number; y: number };
  nextZoom: number;
  panRef: React.MutableRefObject<{ x: number; y: number }>;
  targetPanRef: React.MutableRefObject<{ x: number; y: number }>;
  zoomRef: React.MutableRefObject<number>;
  pendingCameraRef: React.MutableRefObject<{ pan: { x: number; y: number }; zoom: number } | null>;
  stopCameraPaint: () => void;
  scheduleCameraPaint: () => void;
  syncUiState: (force?: boolean, immediate?: boolean) => void;
  forceUiSync?: boolean;
  immediateUiSync?: boolean;
}) {
  const {
    nextPan,
    nextZoom,
    panRef,
    targetPanRef,
    zoomRef,
    pendingCameraRef,
    stopCameraPaint,
    scheduleCameraPaint,
    syncUiState,
    forceUiSync = false,
    immediateUiSync = false,
  } = args;

  panRef.current = nextPan;
  targetPanRef.current = nextPan;
  zoomRef.current = nextZoom;
  pendingCameraRef.current = { pan: nextPan, zoom: nextZoom };
  if (immediateUiSync) {
    stopCameraPaint();
  } else {
    scheduleCameraPaint();
  }
  syncUiState(forceUiSync, immediateUiSync);
}

export function normalizeWheelDeltaPx(delta: number, deltaMode: number, pageSizePx: number): number {
  if (deltaMode === WheelEvent.DOM_DELTA_LINE) return delta * 16;
  if (deltaMode === WheelEvent.DOM_DELTA_PAGE) return delta * Math.max(pageSizePx, 1);
  return delta;
}

export function applyZoomAtCore(args: {
  point: { x: number; y: number };
  nextZoomRaw: number;
  zoomMin: number;
  zoomMax: number;
  currentZoom: number;
  currentPan: { x: number; y: number };
  graphOffset: { x: number; y: number };
  isHorizontal: boolean;
  clampPan: (next: { x: number; y: number }, zoomValue: number, mode: ClampMode) => { x: number; y: number };
  stopPanSmoothing: () => void;
  applyCamera: (nextPan: { x: number; y: number }, nextZoom: number, forceUiSync?: boolean, immediateUiSync?: boolean) => void;
  uiSyncMode?: 'none' | 'deferred' | 'immediate';
  lastContinuousZoomTsRef: React.MutableRefObject<number>;
  scheduleZoomUiSync: () => void;
}) {
  const {
    point,
    nextZoomRaw,
    zoomMin,
    zoomMax,
    currentZoom,
    currentPan,
    graphOffset,
    isHorizontal,
    clampPan,
    stopPanSmoothing,
    applyCamera,
    uiSyncMode = 'none',
    lastContinuousZoomTsRef,
    scheduleZoomUiSync,
  } = args;

  const nextZoom = Math.max(zoomMin, Math.min(zoomMax, nextZoomRaw));
  if (!Number.isFinite(nextZoom) || nextZoom <= 0) return false;
  if (Math.abs(nextZoom - currentZoom) < 0.0001) return false;

  const currentScale = getCameraScale(currentZoom, isHorizontal);
  const nextScale = getCameraScale(nextZoom, isHorizontal);
  const worldX = (point.x - currentPan.x - graphOffset.x) / Math.max(currentScale.x, 0.0001);
  const worldY = (point.y - currentPan.y - graphOffset.y) / Math.max(currentScale.y, 0.0001);
  const nextPan = clampPan(
    {
      x: point.x - graphOffset.x - worldX * nextScale.x,
      y: point.y - graphOffset.y - worldY * nextScale.y,
    },
    nextZoom,
    'hard'
  );

  stopPanSmoothing();
  if (uiSyncMode === 'deferred') {
    lastContinuousZoomTsRef.current = performance.now();
  }
  if (uiSyncMode === 'immediate') {
    applyCamera(nextPan, nextZoom, true, true);
    return true;
  }

  applyCamera(nextPan, nextZoom, uiSyncMode === 'deferred');
  if (uiSyncMode === 'deferred') {
    scheduleZoomUiSync();
  }
  return true;
}
