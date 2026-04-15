# macos-native

Native macOS frontend (SwiftUI + AppKit canvas bridge) for git-visualizer.

## Current status

- SwiftUI app shell and baseline navigation
- AppKit-backed graph canvas view (`BranchGraphView`) embedded via `NSViewRepresentable`
- Rust sidecar JSON-RPC client with protocol version gating (`protocolVersion = 1`)
- Initial read-path wiring for repo/session graph data

## Build

1. Build Rust sidecar:

```bash
cd src-tauri
cargo build --bin sidecar
```

2. Build/run native app:

```bash
cd macos-native
swift build
swift run GitVisualizerNative
```

## Notes

- This is the migration foundation for the parallel cutover strategy.
- Full parity actions (merge/push/stash/commit/worktree UX flow parity) are staged next.
