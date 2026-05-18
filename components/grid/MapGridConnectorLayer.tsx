import { memo, useLayoutEffect } from 'react';
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
};

const MapGridConnectorPath = memo(
  function MapGridConnectorPath({ connector, cornerRadiusPx, strokeWidth, pathCache }: MapGridConnectorPathProps) {
    const d = getOrBuildConnectorPathD(pathCache, connector, cornerRadiusPx);
    return (
      <path
        d={d}
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
    connectorGeometryCacheKey(prev.connector, prev.cornerRadiusPx) ===
      connectorGeometryCacheKey(next.connector, next.cornerRadiusPx),
);

export type MapGridConnectorLayerProps = {
  mergeConnectors: readonly ConnectorPathCacheInput[];
  connectors: readonly ConnectorPathCacheInput[];
  contentWidth: number;
  contentHeight: number;
  cornerRadiusPx: number;
  strokeWidth: number;
  pathCache: Map<string, ConnectorPathCacheEntry>;
};

export const MapGridConnectorLayer = memo(function MapGridConnectorLayer({
  mergeConnectors,
  connectors,
  contentWidth,
  contentHeight,
  cornerRadiusPx,
  strokeWidth,
  pathCache,
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
      className="pointer-events-none absolute inset-0 z-0 overflow-visible text-muted"
      width={contentWidth}
      height={contentHeight}
      aria-hidden="true"
    >
      {mergeConnectors.map((connector) => (
        <MapGridConnectorPath
          key={`merge:${connectorGeometryCacheKey(connector, cornerRadiusPx)}`}
          connector={connector}
          cornerRadiusPx={cornerRadiusPx}
          strokeWidth={strokeWidth}
          pathCache={pathCache}
        />
      ))}
      {connectors.map((connector) => (
        <MapGridConnectorPath
          key={connectorGeometryCacheKey(connector, cornerRadiusPx)}
          connector={connector}
          cornerRadiusPx={cornerRadiusPx}
          strokeWidth={strokeWidth}
          pathCache={pathCache}
        />
      ))}
    </svg>
  );
});
