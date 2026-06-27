import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useRef, useState } from 'react';

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
  const prevQueryRef = useRef(query);
  const [draftQuery, setDraftQuery] = useState(() => query);
  if (query !== prevQueryRef.current) {
    prevQueryRef.current = query;
    setDraftQuery(query);
  }

  return (
    <div className="window-no-drag flex h-7 w-[12rem] shrink-0 items-center gap-2 rounded-full border border-border bg-background pl-1.5 pr-2.5">
      <Search strokeWidth={1.875} className="h-4 w-4 shrink-0 text-foreground" />
      <input
        ref={inputRef}
        value={draftQuery}
        onChange={(event) => {
          const nextQuery = event.target.value;
          setDraftQuery(nextQuery);
          window.clearTimeout(inputRef.current?.dataset.searchDebounceTimer ? Number(inputRef.current.dataset.searchDebounceTimer) : undefined);
          const timer = window.setTimeout(() => onQueryChange(nextQuery), 300);
          if (inputRef.current) inputRef.current.dataset.searchDebounceTimer = String(timer);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            window.clearTimeout(inputRef.current?.dataset.searchDebounceTimer ? Number(inputRef.current.dataset.searchDebounceTimer) : undefined);
            onQueryChange(draftQuery);
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
            className="inline-flex h-6 w-6 items-center justify-center rounded-md text-foreground transition-colors hover:text-foreground"
            aria-label="Previous search result"
            title="Previous result"
          >
            <ChevronUp strokeWidth={1.875} className="h-4 w-4 shrink-0" />
          </button>
          <button
            type="button"
            onClick={() => onJump(1)}
            className="inline-flex h-6 w-6 items-center justify-center rounded-md text-foreground transition-colors hover:text-foreground"
            aria-label="Next search result"
            title="Next result"
          >
            <ChevronDown strokeWidth={1.875} className="h-4 w-4 shrink-0" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
