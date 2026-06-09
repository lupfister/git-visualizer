#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    if std::env::args().any(|argument| argument == "--terminal-host") {
        let _ = git_visualizer_lib::run_terminal_host();
        return;
    }
    git_visualizer_lib::run();
}
