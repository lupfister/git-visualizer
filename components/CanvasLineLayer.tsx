import { useEffect, useRef } from 'react';
import type { BranchSceneModel, CameraState, SceneEdge } from './branchScene/types';

type CanvasLineLayerProps = {
  scene: BranchSceneModel;
  camera: CameraState;
  className?: string;
};

function resolveCssColor(el: HTMLElement, variableName: string, fallback: string): string {
  const value = getComputedStyle(el).getPropertyValue(variableName).trim();
  return value || fallback;
}

function strokeForEdge(edge: SceneEdge, line: string, muted: string, accent: string): string {
  if (edge.kind === 'branch-merge') return accent;
  if (edge.kind === 'branch-fork') return muted;
  return line;
}

export default function CanvasLineLayer({
  scene,
  camera,
  className,
}: CanvasLineLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const width = Math.max(1, Math.round(camera.viewportWidth));
    const height = Math.max(1, Math.round(camera.viewportHeight));
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const border = resolveCssColor(parent, '--border', '#E7E5E0');
    const muted = resolveCssColor(parent, '--muted-foreground', '#78716C');
    const primary = resolveCssColor(parent, '--primary', '#1C1917');

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(
      camera.zoom * dpr,
      0,
      0,
      camera.zoom * dpr,
      camera.x * dpr,
      camera.y * dpr
    );
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    scene.edges.forEach((edge) => {
      if (edge.points.length < 2) return;
      const [first, ...rest] = edge.points;
      ctx.beginPath();
      ctx.moveTo(first.x, first.y);
      rest.forEach((pt) => ctx.lineTo(pt.x, pt.y));
      ctx.strokeStyle = strokeForEdge(edge, border, muted, primary);
      ctx.lineWidth = edge.kind === 'branch-merge' ? 1.4 : 1;
      if (edge.kind === 'branch-fork') {
        ctx.setLineDash([2, 3]);
      } else {
        ctx.setLineDash([]);
      }
      ctx.stroke();
    });
  }, [scene, camera]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden
    />
  );
}

