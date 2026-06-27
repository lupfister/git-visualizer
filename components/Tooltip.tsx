import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';
import { cn } from './grid/mapGridUtils';

interface TooltipProps {
  label: string;
  children: ReactNode;
  /** Delay in ms before showing. Default: 600 */
  delay?: number;
  /** Where the tooltip appears relative to the trigger. Default: 'top' */
  side?: 'top' | 'bottom';
  className?: string;
}

/**
 * Portal-based tooltip styled to match the map-grid control buttons:
 * bg-background, border-border, text-foreground.
 * Renders at document.body via createPortal so overflow:hidden never clips it.
 */
export function Tooltip({ label, children, delay = 600, side = 'top', className }: TooltipProps) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback(() => {
    timerRef.current = setTimeout(() => {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();
      setPos({
        x: rect.left + rect.width / 2,
        y: side === 'top' ? rect.top : rect.bottom,
      });
    }, delay);
  }, [delay, side]);

  const hide = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setPos(null);
  }, []);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  // Gap between the arrow tip and the trigger element
  const ARROW_H = 7;
  const GAP = 5;

  const bubbleStyle: React.CSSProperties = pos
    ? {
        position: 'fixed',
        left: pos.x,
        transform: 'translateX(-50%)',
        zIndex: 9999,
        pointerEvents: 'none',
        ...(side === 'top'
          ? { bottom: `calc(100vh - ${pos.y}px + ${GAP + ARROW_H}px)` }
          : { top: pos.y + GAP + ARROW_H }),
      }
    : {};

  return (
    <div
      ref={triggerRef}
      className={cn('relative inline-flex', className)}
      onMouseEnter={show}
      onMouseLeave={hide}
      onPointerDown={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}

      {pos &&
        createPortal(
          <div
            role="tooltip"
            style={bubbleStyle}
            className="relative whitespace-nowrap rounded-md border border-border bg-background px-2 py-0.5 text-[11px] font-medium leading-5 text-foreground"
          >
            {label}
            <Arrow side={side} height={ARROW_H} />
          </div>,
          document.body,
        )}
    </div>
  );
}

// SVG arrow: avoids all the z-index / border-bleed issues of CSS-only approaches.
// A `polygon` fill masks the bubble's border at the junction; a `polyline` draws
// only the two visible diagonal edges.
function Arrow({ side, height }: { side: 'top' | 'bottom'; height: number }) {
  const W = 14;
  const H = height;
  const cx = W / 2;

  const svgStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'block',
    overflow: 'visible',
    // Extend fill 1px into the bubble so it fully covers the border line
    ...(side === 'top'
      ? { top: `calc(100% - 1px)` }
      : { bottom: `calc(100% - 1px)` }),
  };

  if (side === 'top') {
    // Arrow points DOWN (bubble is above trigger)
    return (
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden style={svgStyle}>
        {/* Fill extends 2px above origin + 1px each side to cover stroke endpoint bleed */}
        <polygon points={`-1,-2 ${W + 1},-2 ${cx},${H}`} fill="var(--background)" />
        {/* Only the two diagonal sides */}
        <polyline
          points={`0,0 ${cx},${H} ${W},0`}
          fill="none"
          stroke="var(--border)"
          strokeWidth="1"
          strokeLinejoin="round"
          strokeLinecap="butt"
        />
      </svg>
    );
  }

  // Arrow points UP (bubble is below trigger)
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden style={svgStyle}>
      <polygon points={`-1,${H + 2} ${W + 1},${H + 2} ${cx},0`} fill="var(--background)" />
      <polyline
        points={`0,${H} ${cx},0 ${W},${H}`}
        fill="none"
        stroke="var(--border)"
        strokeWidth="1"
        strokeLinejoin="round"
        strokeLinecap="butt"
      />
    </svg>
  );
}
