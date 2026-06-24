# Git Visualizer - Test Worktree

A native desktop app for exploring local git repositories as a spatial branch map. Open one or more repos, pan across commits and branches, manage worktrees and stashes, and run everyday git operations directly from the canvas.

Built with **refined minimalism** in mind — clean surfaces, smooth motion, and a map that stays readable even on large histories.

## What it does

- **Branch grid map** — custom SVG layout (no React Flow) that shows branches, merges, worktrees, and uncommitted changes on one pannable canvas
- **Multi-repo projects** — keep several local repositories in the sidebar and switch between them
- **Worktree-aware** — linked checkouts appear on the map with their own uncommitted state
- **Git from the map** — checkout, commit, stage, stash, push, delete branches, create branches from nodes, and more
- **Live sync** — filesystem watching and background fingerprinting keep the map in step with external git activity
- **GitHub integration** — optional remote sync, open PRs, and push status via the [`gh`](https://cli.github.com/) CLI
- **OpenCode commit titles** — optional AI-generated commit and stash messages when the [OpenCode](https://opencode.ai/) CLI is available

## Stack

| Layer | Tech |
| --- | --- |
| Shell | [Tauri 2](https://v2.tauri.app/) (Rust) |
| UI | React 19, TypeScript, Tailwind CSS 4, Framer Motion |
| Bundler | Vite |
| Git | Local `git` CLI via Rust backend |
| GitHub | `gh` CLI |
| Persistence | SQLite snapshots + browser localStorage for layout prefs |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/)
- [Rust](https://www.rust-lang.org/tools/install) (for Tauri)
- `git` on your `PATH`
- Optional: [`gh`](https://cli.github.com/) for GitHub features, [`opencode`](https://opencode.ai/) for AI commit titles

### Install

```bash
pnpm install
```

### Run / preview the app

```bash
pnpm tauri dev
```

This is the primary way to preview Git Visualizer. It starts the Vite dev server and opens the native desktop window.

`pnpm dev` runs the Vite frontend alone on port 1420 — useful for UI-only work, but it does **not** include Tauri APIs, git commands, or the native shell.

### Other scripts

```bash
pnpm build          # Production frontend build
pnpm tauri build    # Build the desktop app bundle
pnpm test           # Run Vitest
pnpm test:packages  # Test workspace packages
pnpm dev:studio     # Pattern Studio dev server (separate app)
```

## Monorepo

This repo is a pnpm workspace:

- **`src/`** — main Tauri frontend (`App.tsx`, sync orchestration, visual state)
- **`components/grid/`** — branch map canvas, layout engine, and map interactions
- **`src-tauri/`** — Rust backend (git, GitHub, OpenCode, SQLite, file watching)
- **`packages/tile-pattern-core`** — procedural tile pattern generation
- **`packages/tile-pattern-export`** — PNG/SVG export helpers
- **`apps/pattern-studio`** — standalone pattern preview and export tool

## GitHub auth

Git Visualizer uses the GitHub CLI, not a `GITHUB_PAT` env var. Install `gh`, then authenticate from the app or run:

```bash
gh auth login
```

## OpenCode (optional)

For AI-generated commit and stash titles, install the **latest** OpenCode CLI (1.16+ recommended):

```bash
npm i -g opencode-ai@latest
opencode --version
```

Git Visualizer calls OpenCode directly for AI titles. Models are discovered at runtime via `opencode models --refresh` (cached for 10 minutes), preferring free OpenCode Zen models when available.

The app also ships OpenCode command templates in `.opencode/commands/`.

## License

Private — see repository owner for usage terms.
