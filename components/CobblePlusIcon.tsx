import type { CSSProperties } from 'react';
import { cn } from './grid/mapGridUtils';

const COBBLE_PLUS_ICON_URL = "/cobble-plus.svg?v=20260702-2";

const cobblePlusMaskStyle: CSSProperties = {
  WebkitMask: `url('${COBBLE_PLUS_ICON_URL}') center / contain no-repeat`,
  mask: `url('${COBBLE_PLUS_ICON_URL}') center / contain no-repeat`,
};

export default function CobblePlusIcon({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn('inline-block h-4 w-4 shrink-0 bg-current', className)}
      style={cobblePlusMaskStyle}
    />
  );
}
