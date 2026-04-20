import React from 'react';
import { MapSvgCheckedOutConnectorLayer } from './MapSvgCheckedOutConnectorLayer';
import { MapSvgBranchNodeOverlayLayer } from './MapSvgBranchNodeOverlayLayer';
import { MapSvgMainNodeOverlayLayer } from './MapSvgMainNodeOverlayLayer';
import { MapSvgNodeLabelsLayer } from './MapSvgNodeLabelsLayer';
import { MapSvgCollapseControlsLayer } from './MapSvgCollapseControlsLayer';

type MapSvgCanvasLayerStackProps = {
  checkedOutConnectorLayerProps: React.ComponentProps<typeof MapSvgCheckedOutConnectorLayer>;
  branchNodeOverlayLayerProps: React.ComponentProps<typeof MapSvgBranchNodeOverlayLayer>;
  mainNodeOverlayLayerProps: React.ComponentProps<typeof MapSvgMainNodeOverlayLayer>;
  nodeLabelsLayerProps: React.ComponentProps<typeof MapSvgNodeLabelsLayer>;
  collapseControlsLayerProps: React.ComponentProps<typeof MapSvgCollapseControlsLayer>;
};

export function MapSvgCanvasLayerStack({
  checkedOutConnectorLayerProps,
  branchNodeOverlayLayerProps,
  mainNodeOverlayLayerProps,
  nodeLabelsLayerProps,
  collapseControlsLayerProps,
}: MapSvgCanvasLayerStackProps) {
  return (
    <>
      <MapSvgCheckedOutConnectorLayer {...checkedOutConnectorLayerProps} />

      {/* Branch commit node overlay so branch connectors/lanes never render over branch rectangles. */}
      <MapSvgBranchNodeOverlayLayer {...branchNodeOverlayLayerProps} />

      {/* Main commit node overlay so branch connectors never render over main clumps. */}
      <MapSvgMainNodeOverlayLayer {...mainNodeOverlayLayerProps} />

      {/* Top-most label overlay so labels are always above all rectangle layers. */}
      <MapSvgNodeLabelsLayer {...nodeLabelsLayerProps} />

      {/* Top-most collapse controls so carets are never occluded by node layers. */}
      <MapSvgCollapseControlsLayer {...collapseControlsLayerProps} />
    </>
  );
}
