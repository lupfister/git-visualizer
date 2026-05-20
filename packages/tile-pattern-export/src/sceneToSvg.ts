import type { TilePatternScene } from '@git-visualizer/tile-pattern-core';

const escapeXml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export const sceneToSvgString = (
  scene: TilePatternScene,
  options?: { backgroundColor?: string | null },
): string => {
  const { logicalWidth, logicalHeight, clipRect, clipPathId, shapes } = scene;
  const bg = options?.backgroundColor
    ? `<rect width="100%" height="100%" fill="${escapeXml(options.backgroundColor)}"/>`
    : '';

  const shapeMarkup = shapes
    .map((shape) => {
      if (shape.kind === 'circle') {
        return `<circle cx="${shape.cx}" cy="${shape.cy}" r="${shape.r}" fill="${escapeXml(shape.fill)}"/>`;
      }
      return `<path d="${escapeXml(shape.d)}" fill="${escapeXml(shape.fill)}"/>`;
    })
    .join('\n    ');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${logicalWidth} ${logicalHeight}" width="${logicalWidth}" height="${logicalHeight}">
  <defs>
    <clipPath id="${clipPathId}">
      <rect x="${clipRect.x}" y="${clipRect.y}" width="${clipRect.width}" height="${clipRect.height}"/>
    </clipPath>
  </defs>
  ${bg}
  <g clip-path="url(#${clipPathId})">
    ${shapeMarkup}
  </g>
</svg>`;
};
