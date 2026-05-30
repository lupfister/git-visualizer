use std::process::Command;

pub fn open_preview_url(url: &str) -> Result<(), String> {
    open_url_in_default_browser(url)
}

pub fn focus_preview_url(url: &str) -> Result<(), String> {
    open_preview_url(url)
}

fn open_url_in_default_browser(url: &str) -> Result<(), String> {
    #[cfg(target_os = "macos")]
    {
        return Command::new("open")
            .arg(url)
            .spawn()
            .map(|_| ())
            .map_err(|e| format!("Failed to open preview in default browser: {e}"));
    }

    #[cfg(target_os = "linux")]
    {
        return Command::new("xdg-open")
            .arg(url)
            .spawn()
            .map(|_| ())
            .map_err(|e| format!("Failed to open preview in default browser: {e}"));
    }

    #[cfg(target_os = "windows")]
    {
        return Command::new("cmd")
            .args(["/C", "start", "", url])
            .spawn()
            .map(|_| ())
            .map_err(|e| format!("Failed to open preview in default browser: {e}"));
    }

    #[cfg(not(any(target_os = "macos", target_os = "linux", target_os = "windows")))]
    {
        let _ = url;
        Err("Opening preview in the default browser is not supported on this platform".to_string())
    }
}
