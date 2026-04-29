import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useRef } from 'react';

type Props = {
  query: string;
  onQueryChange: (value: string) => void;
  resultCount: number | null;
  resultIndex: number | null;
  onJump: (direction: 1 | -1) => void;
};

export default function MapSearchBar({
  query,
  onQueryChange,
  resultCount,
  resultIndex,
  onJump,
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="window-no-drag flex h-7 w-[12rem] shrink-0 items-center gap-2 rounded-full border border-border bg-background pl-1.5 pr-2.5">
      <Search className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
      <input
        ref={inputRef}
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        onBlur={(event) => {
          const relatedTarget = event.relatedTarget as HTMLElement | null;
          if (
            relatedTarget?.closest('button, a, input, textarea, select, [contenteditable="true"]')
          ) {
            return;
          }
          window.setTimeout(() => {
            inputRef.current?.focus();
          }, 0);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            onJump(1);
          }
        }}
        placeholder="Search"
        className="min-w-0 flex-1 bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"
      />
      {resultCount != null && resultCount > 0 ? (
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium tabular-nums text-foreground">
            {(resultIndex ?? 0) + 1}/{resultCount}
          </span>
          <button
            type="button"
            onClick={() => onJump(-1)}
            className="inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Previous search result"
            title="Previous result"
          >
            <ChevronUp className="h-4 w-4 shrink-0" />
          </button>
          <button
            type="button"
            onClick={() => onJump(1)}
            className="inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Next search result"
            title="Next result"
          >
            <ChevronDown className="h-4 w-4 shrink-0" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
