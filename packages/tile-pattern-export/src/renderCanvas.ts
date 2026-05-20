import type { TilePatternScene } from '@git-visualizer/tile-pattern-core';

export type RenderSceneOptions = {
  exportWidth: number;
  exportHeight: number;
  backgroundColor?: string | null;
};

const drawScene = (
  ctx: CanvasRenderingContext2D,
  scene: TilePatternScene,
  scaleX: number,
  scaleY: number,
) => {
  const { clipRect } = scene;
  ctx.save();
  ctx.beginPath();
  ctx.rect(
    clipRect.x * scaleX,
    clipRect.y * scaleY,
    clipRect.width * scaleX,
    clipRect.height * scaleY,
  );
  ctx.clip();

  for (const shape of scene.shapes) {
    if (shape.kind === 'circle') {
      ctx.beginPath();
      ctx.arc(shape.cx * scaleX, shape.cy * scaleY, shape.r * scaleX, 0, Math.PI * 2);
      ctx.fillStyle = shape.fill;
      ctx.fill();
      continue;
    }
    const path = new Path2D(shape.d);
    ctx.save();
    ctx.scale(scaleX, scaleY);
    ctx.fillStyle = shape.fill;
    ctx.fill(path);
    ctx.restore();
  }

  ctx.restore();
};

export const renderSceneToCanvas = (
  scene: TilePatternScene,
  options: RenderSceneOptions,
): HTMLCanvasElement => {
  const { exportWidth, exportHeight, backgroundColor } = options;
  const canvas = document.createElement('canvas');
  canvas.width = exportWidth;
  canvas.height = exportHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Could not acquire 2d canvas context');
  }

  if (backgroundColor) {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, exportWidth, exportHeight);
  }

  const scaleX = exportWidth / scene.logicalWidth;
  const scaleY = exportHeight / scene.logicalHeight;
  drawScene(ctx, scene, scaleX, scaleY);
  return canvas;
};

export const canvasToPngBlob = (canvas: HTMLCanvasElement): Promise<Blob | null> =>
  new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), 'image/png');
  });
