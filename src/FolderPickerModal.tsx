import { useState, useEffect, useRef, useCallback } from 'react';
import { invoke } from '@tauri-apps/api/core';

interface DirEntry {
  name: string;
  path: string;
  isDir: boolean;
  isRepo: boolean;
}

interface FolderPickerModalProps {
  onSelect: (path: string) => void;
  onClose: () => void;

}

export default function FolderPickerModal({
  onSelect,
  onClose,
}: FolderPickerModalProps) {
  const [query, setQuery] = useState('');
  const [currentDir, setCurrentDir] = useState('');
  const [entries, setEntries] = useState<DirEntry[]>([]);
  const [searchResults, setSearchResults] = useState<DirEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [homeDir, setHomeDir] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchRequestIdRef = useRef(0);

  const isSearching = query.length >= 2;

  useEffect(() => {
    invoke<string>('get_home_dir').then((dir) => {
      setHomeDir(dir);
      setCurrentDir(dir);
    });
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (currentDir && !isSearching) {
      loadDirectory(currentDir);
    }
  }, [currentDir, isSearching]);

  useEffect(() => {
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

    if (!query || query.length < 2) {
      setSearchResults([]);
      setSearching(false);
      searchRequestIdRef.current += 1;
      return;
    }

    setSearching(true);
    const requestId = searchRequestIdRef.current + 1;
    searchRequestIdRef.current = requestId;

    searchTimeoutRef.current = setTimeout(async () => {
      try {
        const depth = currentDir === homeDir ? 3 : 2;
        const results = await invoke<DirEntry[]>('search_directories', {
          path: currentDir,
          query,
          maxDepth: depth,
          limit: 15,
        });
        if (searchRequestIdRef.current !== requestId) return;
        setSearchResults(results);
        setSelectedIndex(0);
      } catch (e) {
        if (searchRequestIdRef.current !== requestId) return;
        console.error('Search failed:', e);
        setSearchResults([]);
      } finally {
        if (searchRequestIdRef.current !== requestId) return;
        setSearching(false);
      }
    }, 220);

    return () => {
      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    };
  }, [query, currentDir, homeDir]);

  useEffect(() => {
    if (!isSearching) setSelectedIndex(0);
  }, [entries, isSearching]);

  async function loadDirectory(path: string) {
    setLoading(true);
    setError(null);
    setActiveIndex(-1);
    try {
      const allEntries = await invoke<DirEntry[]>('list_directory', { path });
      setEntries(allEntries.filter((e) => e.isDir));
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setEntries([]);
    } finally {
      setLoading(false);
    }
  }

  const allItems = isSearching ? searchResults : entries;

  const navigateTo = useCallback((path: string) => {
    setQuery('');
    setCurrentDir(path);
  }, []);

  const navigateUp = useCallback(() => {
    if (currentDir === '/') return;
    const parent = currentDir.split('/').slice(0, -1).join('/') || '/';
    navigateTo(parent);
  }, [currentDir, navigateTo]);

  const navigateHome = useCallback(() => {
    if (homeDir) navigateTo(homeDir);
  }, [homeDir, navigateTo]);

  function openItem(item: DirEntry) {
    item.isRepo ? onSelect(item.path) : navigateTo(item.path);
  }

  function openActive() {
    const item = allItems[selectedIndex] ?? (activeIndex >= 0 ? allItems[activeIndex] : undefined);
    if (item) {
      openItem(item);
    } else {
      onSelect(currentDir);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      if (query) { setQuery(''); e.preventDefault(); }
      else { onClose(); e.preventDefault(); }
    } else if (e.key === 'Enter') {
      openActive();
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, allItems.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'ArrowLeft' && !isSearching) {
      e.preventDefault();
      navigateUp();
    } else if (e.key === 'ArrowRight' || e.key === 'Tab') {
      const item = allItems[selectedIndex];
      if (item) { e.preventDefault(); navigateTo(item.path); }
      else if (e.key === 'Tab') e.preventDefault();
    } else if (e.key === 'Backspace' && !query && !isSearching) {
      e.preventDefault();
      navigateUp();
    }
  }

  function handleBackdropClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) onClose();
  }

  function formatPath(path: string): string {
    if (homeDir && path.startsWith(homeDir)) return '~' + path.slice(homeDir.length);
    return path;
  }

  function getBreadcrumbs(path: string): { name: string; path: string }[] {
    const parts = path.split('/').filter(Boolean);
    const crumbs: { name: string; path: string }[] = [];
    let currentPath = '';
    for (const part of parts) {
      currentPath += '/' + part;
      crumbs.push({ name: part, path: currentPath });
    }
    return crumbs;
  }

  function highlightMatch(text: string, q: string): React.ReactNode {
    if (!q) return text;
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <mark className="bg-primary/20 text-primary rounded px-0.5">{text.slice(idx, idx + q.length)}</mark>
        {text.slice(idx + q.length)}
      </>
    );
  }

  const breadcrumbs = getBreadcrumbs(currentDir);

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-start justify-center z-50 pt-[12vh]"
      onClick={handleBackdropClick}
      onKeyDown={(e) => e.key === 'Escape' && onClose()}
    >
      <div
        className="bg-card rounded-xl shadow-lg flex flex-col overflow-hidden border border-border w-[520px] max-w-[90vw] max-h-[65vh]"
      >
        {/* Header with breadcrumbs */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border">
          <div className="flex-1 flex items-center gap-0.5 overflow-x-auto">
            <button
              className="flex items-center p-1.5 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors"
              onClick={navigateHome}
              title="Home (~)"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </button>
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.path} className="flex items-center">
                <svg className="w-3 h-3 text-muted-foreground mx-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <button
                  className={`px-1.5 py-1 hover:bg-accent rounded-lg text-sm whitespace-nowrap transition-colors ${
                    i === breadcrumbs.length - 1 ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => navigateTo(crumb.path)}
                >
                  {crumb.name}
                </button>
              </span>
            ))}
          </div>
          <button
            className="p-1.5 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            onClick={onClose}
            title="Close (Esc)"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Search input */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
          <div className={`flex items-center justify-center text-muted-foreground ${searching ? 'opacity-70' : ''}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-sm"
            placeholder="Search folders..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck={false}
          />
          {query && (
            <button
              className="p-1 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setQuery('')}
              title="Clear"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto py-1">
          {loading && !isSearching ? (
            <div className="py-6 text-center text-muted-foreground text-sm">Loading...</div>
          ) : error && !isSearching ? (
            <div className="py-6 text-center text-destructive text-sm">{error}</div>
          ) : (
            <>
              {isSearching ? (
                searchResults.length > 0 ? (
                  <>
                    <div className="flex items-center gap-1.5 px-4 py-2">
                      <svg className="w-3 h-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">Results</span>
                    </div>
                    {searchResults.map((entry, i) => (
                      <button
                        key={entry.path}
                        className={`w-full flex items-center gap-2.5 px-4 py-2 text-left text-sm transition-colors ${
                          i === activeIndex ? 'bg-primary/10' : i === selectedIndex ? 'bg-accent' : 'hover:bg-accent'
                        }`}
                        onClick={() => { setActiveIndex(i); setSelectedIndex(i); }}
                        onDoubleClick={() => openItem(entry)}
                        onMouseEnter={() => setSelectedIndex(i)}
                      >
                        <svg className={`w-4 h-4 flex-shrink-0 ${entry.isRepo ? 'text-blue-400' : 'text-muted-foreground'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {entry.isRepo ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                          )}
                        </svg>
                        <div className="flex-1 min-w-0">
                          <div className="truncate text-foreground">{highlightMatch(entry.name, query)}</div>
                          <div className="text-xs text-muted-foreground font-mono truncate">
                            {highlightMatch(formatPath(entry.path), query)}
                          </div>
                        </div>
                        <svg className="w-3.5 h-3.5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}
                  </>
                ) : !searching ? (
                  <div className="py-6 text-center text-muted-foreground text-sm">No matching folders</div>
                ) : null
              ) : entries.length > 0 ? (
                entries.map((entry, i) => (
                  <button
                    key={entry.path}
                    className={`w-full flex items-center gap-2.5 px-4 py-2 text-left text-sm transition-colors ${
                      i === activeIndex ? 'bg-primary/10' : i === selectedIndex ? 'bg-accent' : 'hover:bg-accent'
                    }`}
                    onClick={() => { setActiveIndex(i); setSelectedIndex(i); }}
                    onDoubleClick={() => openItem(entry)}
                    onMouseEnter={() => setSelectedIndex(i)}
                  >
                    <svg className={`w-4 h-4 flex-shrink-0 ${entry.isRepo ? 'text-blue-400' : 'text-muted-foreground'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {entry.isRepo ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      )}
                    </svg>
                    <span className="flex-1 truncate text-foreground">{entry.name}</span>
                    <svg className="w-3.5 h-3.5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))
              ) : !loading ? (
                <div className="py-6 text-center text-muted-foreground text-sm">Empty directory</div>
              ) : null}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-border bg-card/50">
          <span className="text-xs text-muted-foreground">
            <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5">↑↓</kbd> navigate
            <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5 ml-2">Enter</kbd> open
            <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5 ml-2">Tab</kbd> drill in
            <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5 ml-2">←</kbd> back
          </span>
          <button
            className="px-3 py-1.5 bg-primary text-primary-foreground hover:opacity-90 rounded-lg text-sm font-medium transition-opacity"
            onClick={openActive}
          >
            Open
          </button>
        </div>
      </div>
    </div>
  );
}
