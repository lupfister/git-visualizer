import { startTransition, useCallback, useLayoutEffect, useRef, useState } from 'react';
import type { MutableRefObject, RefObject, WheelEvent } from 'react';
import {
  CAMERA_ZOOM_INTERPOLATION,
  GRID_RENDER_ZOOM,
  GRID_ZOOM_DEFAULT,
  GRID_ZOOM_WHEEL_SENSITIVITY,
  MAP_GRID_CAMERA_PAN_REACT_THROTTLE_MS,
  MAP_GRID_INNER_PADDING_PX,
  ZOOM_SETTLE_EPSILON,
  clampZoom,
} from './mapGridUtils';

type Params = {
  mapPadHostRef: RefObject<HTMLDivElement | null>;
  transformLayerRef: RefObject<HTMLDivElement | null>;
  isEnabled?: boolean;
  onUserCameraChange?: () => void;
  cameraStorageScopeKey?: string;
};

export type MapGridCameraState = { panX: number; panY: number; zoom: number };
const CAMERA_STORAGE_KEY_PREFIX = 'git-visualizer:map-grid-camera:';
const CAMERA_MAX_ABS_PAN_PX = 200_000;

export function useMapGridCamera({
  mapPadHostRef,
  transformLayerRef,
  isEnabled = true,
  onUserCameraChange,
  cameraStorageScopeKey,
}: Params) {
  const panRef = useRef({ x: 0, y: 0 });
  const zoomRef = useRef(GRID_ZOOM_DEFAULT);
  const zoomAnchorRef = useRef<{
    anchorX: number;
    anchorY: number;
    worldX: number;
    worldY: number;
  } | null>(null);
  const renderedCameraRef = useRef<MapGridCameraState>({ panX: 0, panY: 0, zoom: GRID_ZOOM_DEFAULT });
  const cameraFrameRef = useRef<number | null>(null);
  const renderedZoomRef = useRef(GRID_ZOOM_DEFAULT);
  const interactionIdleTimeoutRef = useRef<number | null>(null);
  const [isCameraMoving, setIsCameraMoving] = useState(false);
  const [renderedZoom, setRenderedZoom] = useState(GRID_ZOOM_DEFAULT);
  const [cameraRenderTick, setCameraRenderTick] = useState(0);
  const panReactTrailingTimeoutRef = useRef<number | null>(null);
  const lastCameraPanReactEmitRef = useRef(0);
  const isInteractionActiveRef = useRef(false);

  const getCameraStorageKey = useCallback(() => {
    const scope = cameraStorageScopeKey?.trim() || window.location.pathname;
    return `${CAMERA_STORAGE_KEY_PREFIX}${scope}`;
  }, [cameraStorageScopeKey]);

  const persistCamera = useCallback((camera: MapGridCameraState) => {
    try {
      window.localStorage.setItem(getCameraStorageKey(), JSON.stringify(camera));
    } catch {}
  }, [getCameraStorageKey]);

  const getTransformLayerOriginScreen = useCallback((): { x: number; y: number } | null => {
    const host = mapPadHostRef.current;
    if (!host) return null;
    const hr = host.getBoundingClientRect();
    const cs = getComputedStyle(host);
    const bl = Number.parseFloat(cs.borderLeftWidth) || 0;
    const bt = Number.parseFloat(cs.borderTopWidth) || 0;
    const pl = Number.parseFloat(cs.paddingLeft) || MAP_GRID_INNER_PADDING_PX;
    const pt = Number.parseFloat(cs.paddingTop) || MAP_GRID_INNER_PADDING_PX;
    return { x: hr.left + bl + pl, y: hr.top + bt + pt };
  }, [mapPadHostRef]);

  const flushCameraReactTick = useCallback(() => {
    if (panReactTrailingTimeoutRef.current != null) {
      window.clearTimeout(panReactTrailingTimeoutRef.current);
      panReactTrailingTimeoutRef.current = null;
    }
    startTransition(() => {
      setCameraRenderTick((tick) => tick + 1);
    });
    lastCameraPanReactEmitRef.current = performance.now();
  }, []);

  const applyRenderedCamera = useCallback((
    nextPanX: number,
    nextPanY: number,
    nextZoom: number,
    options?: { emitTick?: boolean },
  ) => {
    const prev = renderedCameraRef.current;
    const nextCamera = { panX: nextPanX, panY: nextPanY, zoom: nextZoom };
    renderedCameraRef.current = nextCamera;
    const layer = transformLayerRef.current;
    if (layer) {
      layer.style.transform = `translate3d(${nextPanX}px, ${nextPanY}px, 0) scale(${nextZoom / GRID_RENDER_ZOOM})`;
    }
    if (Math.abs(renderedZoomRef.current - nextZoom) > ZOOM_SETTLE_EPSILON) {
      renderedZoomRef.current = nextZoom;
      setRenderedZoom(nextZoom);
    }

    if (options?.emitTick === false) return;

    const zoomChanged = Math.abs(nextZoom - prev.zoom) > ZOOM_SETTLE_EPSILON;
    if (zoomChanged) {
      if (!isInteractionActiveRef.current) flushCameraReactTick();
      return;
    }

    const now = performance.now();
    const elapsed = now - lastCameraPanReactEmitRef.current;
    if (elapsed >= MAP_GRID_CAMERA_PAN_REACT_THROTTLE_MS) {
      flushCameraReactTick();
      return;
    }
    if (panReactTrailingTimeoutRef.current != null) {
      window.clearTimeout(panReactTrailingTimeoutRef.current);
    }
    panReactTrailingTimeoutRef.current = window.setTimeout(() => {
      panReactTrailingTimeoutRef.current = null;
      flushCameraReactTick();
    }, MAP_GRID_CAMERA_PAN_REACT_THROTTLE_MS - elapsed);
  }, [flushCameraReactTick, transformLayerRef]);

  const stepCameraRef: MutableRefObject<(() => void) | null> = useRef(null);
  const scheduleCameraFrame = useCallback(() => {
    if (cameraFrameRef.current != null || !stepCameraRef.current) return;
    cameraFrameRef.current = window.requestAnimationFrame(stepCameraRef.current);
  }, []);

  const markCameraInteraction = useCallback(() => {
    isInteractionActiveRef.current = true;
    setIsCameraMoving(true);
    if (interactionIdleTimeoutRef.current != null) {
      window.clearTimeout(interactionIdleTimeoutRef.current);
    }
    interactionIdleTimeoutRef.current = window.setTimeout(() => {
      interactionIdleTimeoutRef.current = null;
      isInteractionActiveRef.current = false;
      setIsCameraMoving(false);
      flushCameraReactTick();
      persistCamera(renderedCameraRef.current);
    }, 90);
  }, [flushCameraReactTick, persistCamera]);

  const syncCamera = useCallback((nextPanX: number, nextPanY: number, nextZoom: number) => {
    if (!isEnabled) return;
    panRef.current = { x: nextPanX, y: nextPanY };
    zoomRef.current = nextZoom;
    markCameraInteraction();
    scheduleCameraFrame();
  }, [isEnabled, markCameraInteraction, scheduleCameraFrame]);

  stepCameraRef.current = () => {
    cameraFrameRef.current = null;
    const rendered = renderedCameraRef.current;
    const targetPanX = panRef.current.x;
    const targetPanY = panRef.current.y;
    const targetZoom = zoomRef.current;
    const zoomAnchor = zoomAnchorRef.current;
    const nextZoom =
      Math.abs(targetZoom - rendered.zoom) <= ZOOM_SETTLE_EPSILON
        ? targetZoom
        : rendered.zoom + (targetZoom - rendered.zoom) * CAMERA_ZOOM_INTERPOLATION;
    const nextPanX = zoomAnchor != null ? zoomAnchor.anchorX - zoomAnchor.worldX * (nextZoom / GRID_RENDER_ZOOM) : targetPanX;
    const nextPanY = zoomAnchor != null ? zoomAnchor.anchorY - zoomAnchor.worldY * (nextZoom / GRID_RENDER_ZOOM) : targetPanY;

    if (zoomAnchor != null && Math.abs(nextZoom - targetZoom) <= ZOOM_SETTLE_EPSILON) {
      zoomAnchorRef.current = null;
    }

    applyRenderedCamera(nextPanX, nextPanY, nextZoom);

    if (nextPanX !== targetPanX || nextPanY !== targetPanY || nextZoom !== targetZoom) {
      if (stepCameraRef.current) {
        cameraFrameRef.current = window.requestAnimationFrame(stepCameraRef.current);
      }
    } else {
      flushCameraReactTick();
    }
  };

  const zoomToPoint = useCallback((clientX: number, clientY: number, nextZoom: number) => {
    if (!isEnabled) return;
    const targetZoom = clampZoom(nextZoom);
    const currentPanX = panRef.current.x;
    const currentPanY = panRef.current.y;
    const currentZoom = zoomRef.current;
    const origin = getTransformLayerOriginScreen();
    if (!origin) {
      syncCamera(currentPanX, currentPanY, targetZoom);
      return;
    }
    const anchorX = clientX - origin.x;
    const anchorY = clientY - origin.y;
    const scaleBefore = currentZoom / GRID_RENDER_ZOOM;
    const scaleAfter = targetZoom / GRID_RENDER_ZOOM;
    const worldX = (anchorX - currentPanX) / scaleBefore;
    const worldY = (anchorY - currentPanY) / scaleBefore;
    const nextPanX = anchorX - worldX * scaleAfter;
    const nextPanY = anchorY - worldY * scaleAfter;
    zoomAnchorRef.current = { anchorX, anchorY, worldX, worldY };
    syncCamera(nextPanX, nextPanY, targetZoom);
  }, [getTransformLayerOriginScreen, isEnabled, syncCamera]);

  const handleWheel = useCallback((event: WheelEvent<HTMLDivElement>) => {
    if (!isEnabled) return;
    event.preventDefault();
    if (event.ctrlKey || event.metaKey) {
      onUserCameraChange?.();
      const factor = Math.exp(-event.deltaY * GRID_ZOOM_WHEEL_SENSITIVITY);
      zoomToPoint(event.clientX, event.clientY, zoomRef.current * factor);
      return;
    }
    onUserCameraChange?.();
    zoomAnchorRef.current = null;
    // Interrupt any in-flight zoom interpolation so pan takes effect immediately.
    markCameraInteraction();
    const rendered = renderedCameraRef.current;
    panRef.current = { x: rendered.panX, y: rendered.panY };
    zoomRef.current = rendered.zoom;
    const nextPanX = rendered.panX - event.deltaX;
    const nextPanY = rendered.panY - event.deltaY;
    panRef.current = { x: nextPanX, y: nextPanY };
    applyRenderedCamera(nextPanX, nextPanY, rendered.zoom);
  }, [applyRenderedCamera, isEnabled, markCameraInteraction, onUserCameraChange, zoomToPoint]);

  useLayoutEffect(() => {
    if (!isEnabled) return;
    let initial: MapGridCameraState = { panX: 0, panY: 0, zoom: GRID_ZOOM_DEFAULT };
    try {
      const raw = window.localStorage.getItem(getCameraStorageKey());
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<MapGridCameraState>;
        if (
          typeof parsed.panX === 'number' &&
          Number.isFinite(parsed.panX) &&
          Math.abs(parsed.panX) <= CAMERA_MAX_ABS_PAN_PX &&
          typeof parsed.panY === 'number' &&
          Number.isFinite(parsed.panY) &&
          Math.abs(parsed.panY) <= CAMERA_MAX_ABS_PAN_PX &&
          typeof parsed.zoom === 'number' &&
          Number.isFinite(parsed.zoom)
        ) {
          initial = { panX: parsed.panX, panY: parsed.panY, zoom: clampZoom(parsed.zoom) };
        }
      }
    } catch {}
    panRef.current = { x: initial.panX, y: initial.panY };
    zoomRef.current = initial.zoom;
    applyRenderedCamera(initial.panX, initial.panY, initial.zoom, { emitTick: false });
    return () => {
      if (interactionIdleTimeoutRef.current != null) window.clearTimeout(interactionIdleTimeoutRef.current);
      if (cameraFrameRef.current != null) window.cancelAnimationFrame(cameraFrameRef.current);
      if (panReactTrailingTimeoutRef.current != null) {
        window.clearTimeout(panReactTrailingTimeoutRef.current);
        panReactTrailingTimeoutRef.current = null;
      }
      persistCamera(renderedCameraRef.current);
    };
  }, [applyRenderedCamera, getCameraStorageKey, isEnabled, persistCamera]);

  return {
    isCameraMoving,
    renderedZoom,
    cameraRenderTick,
    renderedCameraRef,
    interactionIdleTimeoutRef,
    getTransformLayerOriginScreen,
    flushCameraReactTick,
    syncCamera,
    handleWheel,
  };
}
