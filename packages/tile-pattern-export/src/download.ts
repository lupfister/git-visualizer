import type { TilePatternScene } from '@cobble/tile-pattern-core';
import { canvasToPngBlob, renderSceneToCanvas } from './renderCanvas';
import { sceneToSvgString } from './sceneToSvg';

export type DownloadPngOptions = {
  exportWidth: number;
  exportHeight: number;
  filename: string;
  backgroundColor?: string | null;
};

export const downloadPng = async (
  scene: TilePatternScene,
  options: DownloadPngOptions,
): Promise<void> => {
  const canvas = renderSceneToCanvas(scene, options);
  const blob = await canvasToPngBlob(canvas);
  if (!blob) {
    throw new Error('PNG export failed');
  }
  triggerDownload(blob, options.filename);
};

export type DownloadSvgOptions = {
  filename: string;
  backgroundColor?: string | null;
};

export const downloadSvg = (scene: TilePatternScene, options: DownloadSvgOptions): void => {
  const svg = sceneToSvgString(scene, { backgroundColor: options.backgroundColor });
  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  triggerDownload(blob, options.filename);
};

const triggerDownload = (blob: Blob, filename: string): void => {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.rel = 'noopener';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
};

export const buildExportFilename = (
  seed: string,
  exportWidth: number,
  exportHeight: number,
  extension: 'png' | 'svg',
): string => {
  const seedSlug = seed.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 12) || 'pattern';
  return `pattern-${seedSlug}-${exportWidth}x${exportHeight}.${extension}`;
};
