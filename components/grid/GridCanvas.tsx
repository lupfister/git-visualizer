import { useEffect, useRef } from 'react';
import type { Connector, Node } from './LayoutGrid';
import { CARD_BODY_TOP_OFFSET, CARD_HEIGHT, CARD_WIDTH } from './LayoutGrid';

const GRID_WHEEL_PAN_SENSITIVITY = 2;
const GRID_WHEEL_ZOOM_SENSITIVITY = 0.025;
const GRID_SPRING_STIFFNESS = 0.16;
const GRID_SPRING_DAMPING = 0.86;
const GRID_SETTLE_DELTA = 0.002;
const GRID_SETTLE_VELOCITY = 0.008;

type Props = {
  nodes: Node[];
  connectors: Connector[];
  mergeConnectors: Array<{ id: string; path: string; fromX: number; fromY: number; toX: number; toY: number }>;
  viewportWidth: number;
  viewportHeight: number;
  panX: number;
  panY: number;
  zoom: number;
  onViewportChange?: (viewport: { panX: number; panY: number; zoom: number }) => void;
  searchQuery: string;
  matchingNodeIds: Set<string>;
  focusedNodeId: string | null;
  clusterKeyByCommitId: Map<string, string>;
  leadByClusterKey: Map<string, string>;
  clusterCounts: Map<string, number>;
  defaultCollapsedClumps: Set<string>;
  manuallyOpenedClumps: Set<string>;
  checkedOutClusterKey: string | null;
  connectorParentShas: Set<string>;
  branchOffNodeShas: Set<string>;
  branchStartShas: Set<string>;
  crossBranchOutgoingShas: Set<string>;
  branchBaseCommitIds: Set<string>;
  nodeWarnings: Map<string, string[]>;
  onToggleCluster?: (clusterKey: string) => void;
};

function drawRoundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const radius = Math.max(0, Math.min(r, w / 2, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function drawText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number) {
  if (ctx.measureText(text).width <= maxWidth) {
    ctx.fillText(text, x, y);
    return;
  }
  let truncated = text;
  while (truncated.length > 1 && ctx.measureText(`${truncated}…`).width > maxWidth) {
    truncated = truncated.slice(0, -1);
  }
  ctx.fillText(`${truncated}…`, x, y);
}

function drawPath(ctx: CanvasRenderingContext2D, path: string) {
  const commands = path.match(/[MLQ][^MLQ]+/g) ?? [];
  ctx.beginPath();
  for (const command of commands) {
    const type = command[0];
    const nums = command.slice(1).trim().split(/\s+/).map(Number);
    if (type === 'M') ctx.moveTo(nums[0], nums[1]);
    if (type === 'L') ctx.lineTo(nums[0], nums[1]);
    if (type === 'Q') ctx.quadraticCurveTo(nums[0], nums[1], nums[2], nums[3]);
  }
  ctx.stroke();
}

export default function GridCanvas(props: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const targetRef = useRef({ panX: props.panX, panY: props.panY, zoom: props.zoom });
  const currentRef = useRef({ panX: props.panX, panY: props.panY, zoom: props.zoom });
  const velocityRef = useRef({ panX: 0, panY: 0, zoom: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const cursorX = event.clientX - rect.left;
      const cursorY = event.clientY - rect.top;
      const target = targetRef.current;
      const current = currentRef.current;
      if (event.ctrlKey || event.metaKey) {
        const nextZoom = Math.max(0.45, Math.min(2.25, target.zoom * Math.exp(-event.deltaY * GRID_WHEEL_ZOOM_SENSITIVITY)));
        const worldX = (cursorX - current.panX) / current.zoom;
        const worldY = (cursorY - current.panY) / current.zoom;
        const nextViewport = {
          panX: cursorX - worldX * nextZoom,
          panY: cursorY - worldY * nextZoom,
          zoom: nextZoom,
        };
        targetRef.current = nextViewport;
        currentRef.current = nextViewport;
        velocityRef.current = { panX: 0, panY: 0, zoom: 0 };
        props.onViewportChange?.(nextViewport);
        return;
      }
      const nextViewport = {
        ...target,
        panX: target.panX - event.deltaX * GRID_WHEEL_PAN_SENSITIVITY,
        panY: target.panY - event.deltaY * GRID_WHEEL_PAN_SENSITIVITY,
      };
      targetRef.current = nextViewport;
      currentRef.current = nextViewport;
      velocityRef.current.panX = 0;
      velocityRef.current.panY = 0;
      props.onViewportChange?.(nextViewport);
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      canvas.setPointerCapture(event.pointerId);
      const start = targetRef.current;
      const move = (moveEvent: PointerEvent) => {
        const nextViewport = {
          ...targetRef.current,
          panX: start.panX + (moveEvent.clientX - event.clientX),
          panY: start.panY + (moveEvent.clientY - event.clientY),
        };
        targetRef.current = nextViewport;
        currentRef.current = nextViewport;
        velocityRef.current.panX = 0;
        velocityRef.current.panY = 0;
        props.onViewportChange?.(nextViewport);
      };
      const up = (upEvent: PointerEvent) => {
        if (upEvent.pointerId !== event.pointerId) return;
        canvas.releasePointerCapture(event.pointerId);
        canvas.removeEventListener('pointermove', move);
        canvas.removeEventListener('pointerup', up);
        canvas.removeEventListener('pointercancel', up);
      };
      canvas.addEventListener('pointermove', move);
      canvas.addEventListener('pointerup', up);
      canvas.addEventListener('pointercancel', up);
    };
    canvas.addEventListener('wheel', handleWheel, { passive: false });
    canvas.addEventListener('pointerdown', handlePointerDown);
    return () => {
      canvas.removeEventListener('wheel', handleWheel);
      canvas.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [props.onViewportChange]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    const render = () => {
      const viewportWidth = Math.max(1, props.viewportWidth || window.innerWidth);
      const viewportHeight = Math.max(1, props.viewportHeight || window.innerHeight);
      const dpr = Math.max(1, window.devicePixelRatio || 1);

      canvas.width = Math.max(1, Math.floor(viewportWidth * dpr));
      canvas.height = Math.max(1, Math.floor(viewportHeight * dpr));
      canvas.style.width = `${viewportWidth}px`;
      canvas.style.height = `${viewportHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, viewportWidth, viewportHeight);

      const rootStyles = getComputedStyle(document.documentElement);
      const connectorColor = rootStyles.getPropertyValue('--foreground').trim() || '#e6e6e6';
      const cardFill = rootStyles.getPropertyValue('--card').trim() || '#171717';
      const labelColor = rootStyles.getPropertyValue('--muted-foreground').trim() || '#a3a3a3';
      const primaryColor = rootStyles.getPropertyValue('--primary').trim() || '#3b82f6';
      const borderColor = rootStyles.getPropertyValue('--border').trim() || '#404040';
      const backgroundColor = rootStyles.getPropertyValue('--background').trim() || '#09090b';
      const errorColor = '#ef4444';
      const warningColor = '#f59e0b';

      const target = targetRef.current;
      const current = currentRef.current;
      const velocity = velocityRef.current;
      velocity.panX = (velocity.panX + (target.panX - current.panX) * GRID_SPRING_STIFFNESS) * GRID_SPRING_DAMPING;
      velocity.panY = (velocity.panY + (target.panY - current.panY) * GRID_SPRING_STIFFNESS) * GRID_SPRING_DAMPING;
      velocity.zoom = (velocity.zoom + (target.zoom - current.zoom) * GRID_SPRING_STIFFNESS) * GRID_SPRING_DAMPING;
      const next = {
        panX: current.panX + velocity.panX,
        panY: current.panY + velocity.panY,
        zoom: current.zoom + velocity.zoom,
      };
      currentRef.current = next;

      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.font = '500 14px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, viewportWidth, viewportHeight);
      ctx.save();
      ctx.translate(next.panX, next.panY);
      ctx.scale(next.zoom, next.zoom);

      for (const connector of props.mergeConnectors) {
        ctx.strokeStyle = 'rgba(255,255,255,0.8)';
        drawPath(ctx, connector.path);
        ctx.strokeStyle = connectorColor;
        ctx.lineWidth = 2.5;
        drawPath(ctx, connector.path);
      }
      for (const connector of props.connectors) {
        ctx.strokeStyle = 'rgba(255,255,255,0.8)';
        ctx.lineWidth = 4;
        drawPath(ctx, connector.path);
        ctx.strokeStyle = connectorColor;
        ctx.lineWidth = 2.5;
        drawPath(ctx, connector.path);
      }

      for (const node of props.nodes) {
        const clusterKey = props.clusterKeyByCommitId.get(node.commit.visualId);
        const isFocused = props.focusedNodeId === node.commit.id;
        const isMatched = props.searchQuery.length > 0 && props.matchingNodeIds.has(node.commit.id);
        const isTop = clusterKey ? props.leadByClusterKey.get(clusterKey) === node.commit.id : false;
        const clumpCount = clusterKey ? props.clusterCounts.get(clusterKey) ?? 1 : 1;
        const isOpen = clusterKey ? clusterKey === props.checkedOutClusterKey || props.manuallyOpenedClumps.has(clusterKey) || !props.defaultCollapsedClumps.has(clusterKey) : false;
        const warnings = props.nodeWarnings.get(node.commit.id) ?? [];
        const hasError = warnings.length > 0;

        ctx.save();
        if (props.searchQuery && !isMatched) ctx.globalAlpha = 0.18;
        if (isFocused) {
          ctx.shadowColor = 'rgba(59,130,246,0.18)';
          ctx.shadowBlur = 10;
        }
        drawRoundedRect(ctx, node.x, node.y, CARD_WIDTH, CARD_BODY_TOP_OFFSET + CARD_HEIGHT, 12);
        ctx.fillStyle = cardFill;
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = hasError ? errorColor : borderColor;
        if (props.branchOffNodeShas.has(node.commit.id) || props.branchStartShas.has(node.commit.id) || props.crossBranchOutgoingShas.has(node.commit.id)) {
          ctx.strokeStyle = primaryColor;
          ctx.lineWidth = 2;
        } else if (props.connectorParentShas.has(node.commit.id)) {
          ctx.strokeStyle = labelColor;
        } else if (props.branchBaseCommitIds.has(node.commit.id)) {
          ctx.strokeStyle = warningColor;
          ctx.lineWidth = 2;
        }
        ctx.stroke();

        ctx.fillStyle = '#a3a3a3';
        ctx.font = '500 14px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
        ctx.fillText(`${node.commit.branchName}/${node.commit.id.slice(0, 7)}`, node.x, node.y - 8);

        ctx.fillStyle = '#d4d4d4';
        drawText(ctx, isTop && clumpCount > 1 ? `${node.commit.message}${isOpen ? '' : ` +${clumpCount - 1}`}` : node.commit.message, node.x + 12, node.y + 30, CARD_WIDTH - 24);

        ctx.font = '500 12px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
        ctx.fillStyle = '#a3a3a3';
        ctx.fillText(`@${node.commit.author}`, node.x + 12, node.y + CARD_HEIGHT - 18);
        ctx.textAlign = 'right';
        ctx.fillText(new Date(node.commit.date).toLocaleString('en-US', { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' }), node.x + CARD_WIDTH - 12, node.y + CARD_HEIGHT - 18);
        ctx.textAlign = 'start';

        if (isMatched) {
          ctx.fillStyle = 'rgba(59,130,246,0.12)';
          drawRoundedRect(ctx, node.x + 12, node.y + 14, 84, 22, 999);
          ctx.fill();
          ctx.fillStyle = labelColor;
          ctx.fillText('Search result', node.x + 22, node.y + 30);
        }
        if (hasError) {
          ctx.fillStyle = errorColor;
          ctx.fillText('Broken ancestry', node.x + 12, node.y + 58);
        }
        ctx.restore();
      }

      ctx.restore();

      const settled =
        Math.abs(target.panX - next.panX) < GRID_SETTLE_DELTA &&
        Math.abs(target.panY - next.panY) < GRID_SETTLE_DELTA &&
        Math.abs(target.zoom - next.zoom) < 0.0005 &&
        Math.abs(velocity.panX) < GRID_SETTLE_VELOCITY &&
        Math.abs(velocity.panY) < GRID_SETTLE_VELOCITY &&
        Math.abs(velocity.zoom) < 0.0005;

      if (!settled) {
        raf = window.requestAnimationFrame(render);
      } else {
        currentRef.current = target;
        velocityRef.current = { panX: 0, panY: 0, zoom: 0 };
      }
    };

    raf = window.requestAnimationFrame(render);
    return () => window.cancelAnimationFrame(raf);
  }, [
    props.viewportWidth,
    props.viewportHeight,
    props.nodes,
    props.connectors,
    props.mergeConnectors,
    props.searchQuery,
    props.matchingNodeIds,
    props.focusedNodeId,
    props.clusterKeyByCommitId,
    props.leadByClusterKey,
    props.clusterCounts,
    props.defaultCollapsedClumps,
    props.manuallyOpenedClumps,
    props.checkedOutClusterKey,
    props.connectorParentShas,
    props.branchOffNodeShas,
    props.branchStartShas,
    props.crossBranchOutgoingShas,
    props.branchBaseCommitIds,
    props.nodeWarnings,
  ]);

  return <canvas ref={canvasRef} className="block absolute left-0 top-0" style={{ cursor: 'grab' }} />;
}
