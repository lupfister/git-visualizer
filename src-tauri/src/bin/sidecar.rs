fn main() {
    if let Err(err) = git_visualizer_lib::run_sidecar_stdio() {
        eprintln!("sidecar error: {err}");
        std::process::exit(1);
    }
}
