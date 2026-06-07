import { memo, useLayoutEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  connectorGeometryCacheKey,
  type ConnectorPathCacheEntry,
  type ConnectorPathCacheInput,
  getOrBuildConnectorPathD,
  trimConnectorPathCacheIfNeeded,
} from './mapGridConnectorPathCache';

type MapGridConnectorPathProps = {
  connector: ConnectorPathCacheInput;
  cornerRadiusPx: number;
  strokeWidth: number;
  pathCache: Map<string, ConnectorPathCacheEntry>;
  registerCameraTarget: (element: HTMLElement | SVGElement, layout?: { layoutX: number; layoutY: number }) => () => void;
};

const MapGridConnectorPath = memo(
  function MapGridConnectorPath({
    connector,
    cornerRadiusPx,
    strokeWidth,
    pathCache,
    registerCameraTarget,
  }: MapGridConnectorPathProps) {
    const d = getOrBuildConnectorPathD(pathCache, connector, cornerRadiusPx);
    const reduceMotion = useReducedMotion() ?? false;
    return (
      <motion.path
        ref={(element) => {
          if (!element) return;
          return registerCameraTarget(element);
        }}
        initial={false}
        animate={{ d }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    );
  },
  (prev, next) =>
    prev.strokeWidth === next.strokeWidth &&
    prev.cornerRadiusPx === next.cornerRadiusPx &&
    prev.registerCameraTarget === next.registerCameraTarget &&
    connectorGeometryCacheKey(prev.connector, prev.cornerRadiusPx) ===
      connectorGeometryCacheKey(next.connector, next.cornerRadiusPx),
);

export type MapGridConnectorLayerProps = {
  mergeConnectors: readonly ConnectorPathCacheInput[];
  connectors: readonly ConnectorPathCacheInput[];
  cornerRadiusPx: number;
  strokeWidth: number;
  pathCache: Map<string, ConnectorPathCacheEntry>;
  registerCameraTarget: (element: HTMLElement | SVGElement, layout?: { layoutX: number; layoutY: number }) => () => void;
};

export const MapGridConnectorLayer = memo(function MapGridConnectorLayer({
  mergeConnectors,
  connectors,
  cornerRadiusPx,
  strokeWidth,
  pathCache,
  registerCameraTarget,
}: MapGridConnectorLayerProps) {
  useLayoutEffect(() => {
    const activeKeys = new Set<string>();
    for (const connector of mergeConnectors) {
      activeKeys.add(connectorGeometryCacheKey(connector, cornerRadiusPx));
    }
    for (const connector of connectors) {
      activeKeys.add(connectorGeometryCacheKey(connector, cornerRadiusPx));
    }
    trimConnectorPathCacheIfNeeded(pathCache, activeKeys);
  }, [mergeConnectors, connectors, cornerRadiusPx, pathCache]);

  return (
    <svg
      className="pointer-events-none absolute left-0 top-0 z-0 overflow-visible text-border"
      width={0}
      height={0}
      aria-hidden="true"
    >
      {mergeConnectors.map((connector) => (
        <MapGridConnectorPath
          key={`merge:${connector.id}`}
          connector={connector}
          cornerRadiusPx={cornerRadiusPx}
          strokeWidth={strokeWidth}
          pathCache={pathCache}
          registerCameraTarget={registerCameraTarget}
        />
      ))}
      {connectors.map((connector) => (
        <MapGridConnectorPath
          key={connector.id}
          connector={connector}
          cornerRadiusPx={cornerRadiusPx}
          strokeWidth={strokeWidth}
          pathCache={pathCache}
          registerCameraTarget={registerCameraTarget}
        />
      ))}
    </svg>
  );
});
