import React from 'react';
import { MapSvgBottomChrome } from './MapSvgBottomChrome';
import { MapSvgOverlaysLayer } from './MapSvgOverlaysLayer';

type MapSvgActionOverlaysProps = {
  bottomChromeProps: React.ComponentProps<typeof MapSvgBottomChrome>;
  overlaysLayerProps: React.ComponentProps<typeof MapSvgOverlaysLayer>;
};

export function MapSvgActionOverlays({
  bottomChromeProps,
  overlaysLayerProps,
}: MapSvgActionOverlaysProps) {
  return (
    <>
      <MapSvgBottomChrome {...bottomChromeProps} />
      <MapSvgOverlaysLayer {...overlaysLayerProps} />
    </>
  );
}
