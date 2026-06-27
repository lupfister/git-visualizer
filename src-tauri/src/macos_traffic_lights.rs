//! Keeps macOS traffic lights at the configured inset position.
//!
//! macOS re-layouts title bar controls when the screen-recording indicator appears,
//! the window title/theme changes, or other system UI is injected into the title bar.
//! Re-applying the inset on a throttled schedule and on window events keeps them stable.

use std::sync::atomic::{AtomicU64, Ordering};
use std::time::{Duration, SystemTime, UNIX_EPOCH};

use objc2_app_kit::{NSWindow, NSWindowButton};
use tauri::{AppHandle, Manager, RunEvent, Runtime, WebviewWindow, WindowEvent};

pub const TRAFFIC_LIGHT_X: f64 = 16.0;
pub const TRAFFIC_LIGHT_Y: f64 = 25.0;

const REAPPLY_INTERVAL: Duration = Duration::from_millis(500);

fn inset_traffic_lights(window: &NSWindow, x: f64, y: f64) {
    let Some(close) = window.standardWindowButton(NSWindowButton::CloseButton) else {
        return;
    };
    let Some(miniaturize) = window.standardWindowButton(NSWindowButton::MiniaturizeButton) else {
        return;
    };
    let Some(zoom) = window.standardWindowButton(NSWindowButton::ZoomButton) else {
        return;
    };

    let Some(close_superview) = (unsafe { close.superview() }) else {
        return;
    };
    let Some(title_bar_container) = (unsafe { close_superview.superview() }) else {
        return;
    };

    let close_rect = close.frame();
    let title_bar_frame_height = close_rect.size.height + y;
    let mut title_bar_rect = title_bar_container.frame();
    title_bar_rect.size.height = title_bar_frame_height;
    title_bar_rect.origin.y = window.frame().size.height - title_bar_frame_height;
    title_bar_container.setFrame(title_bar_rect);

    let space_between = miniaturize.frame().origin.x - close_rect.origin.x;
    for (index, button) in [close, miniaturize, zoom].into_iter().enumerate() {
        let mut rect = button.frame();
        rect.origin.x = x + (index as f64 * space_between);
        button.setFrameOrigin(rect.origin);
    }
}

pub fn reapply_for_window<R: Runtime>(window: &WebviewWindow<R>) {
    let _ = window.with_webview(|webview| {
        let ns_window = webview.ns_window().cast::<NSWindow>();
        if ns_window.is_null() {
            return;
        }

        // AppKit objects are only safe to touch from the main thread. The
        // callers in this module schedule re-application from the main thread;
        // keep this unsafe block as small as possible and bail out if Tauri has
        // already torn the native window down.
        unsafe {
            inset_traffic_lights(&*ns_window, TRAFFIC_LIGHT_X, TRAFFIC_LIGHT_Y);
        }
    });
}

pub fn set_window_opacity<R: Runtime>(window: &WebviewWindow<R>, alpha: f64) -> Result<(), String> {
    let clamped_alpha = alpha.clamp(0.0, 1.0);
    window
        .with_webview(move |webview| {
            let ns_window = webview.ns_window().cast::<NSWindow>();
            if ns_window.is_null() {
                return;
            }

            unsafe {
                (&*ns_window).setAlphaValue(clamped_alpha);
            }
        })
        .map_err(|error| format!("Failed to set window opacity: {error}"))
}

fn should_reapply_now() -> bool {
    static LAST_REAPPLY_MS: AtomicU64 = AtomicU64::new(0);

    let now_ms = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_millis() as u64;
    let last_ms = LAST_REAPPLY_MS.load(Ordering::Relaxed);
    if now_ms.saturating_sub(last_ms) < REAPPLY_INTERVAL.as_millis() as u64 {
        return false;
    }
    LAST_REAPPLY_MS.store(now_ms, Ordering::Relaxed);
    true
}

pub fn install<R: Runtime>(window: &WebviewWindow<R>) {
    reapply_for_window(window);

    let window_for_events = window.clone();
    window.on_window_event(move |event| {
        let should_reapply = matches!(
            event,
            WindowEvent::Resized(_)
                | WindowEvent::Moved(_)
                | WindowEvent::Focused(true)
                | WindowEvent::ThemeChanged(_)
                | WindowEvent::ScaleFactorChanged { .. }
        );
        if should_reapply {
            reapply_for_window(&window_for_events);
        }
    });
}

pub fn schedule_reapply_after_screen_capture<R: Runtime>(app: &AppHandle<R>) {
    reapply_for_main_window_on_main_thread(app);

    let app_handle = app.clone();
    std::thread::spawn(move || {
        for delay in [Duration::from_millis(250), Duration::from_secs(1)] {
            std::thread::sleep(delay);
            reapply_for_main_window_on_main_thread(&app_handle);
        }
    });
}

fn reapply_for_main_window_on_main_thread<R: Runtime>(app: &AppHandle<R>) {
    let app_handle = app.clone();
    let _ = app.run_on_main_thread(move || {
        reapply_for_main_window(&app_handle);
    });
}

fn reapply_for_main_window<R: Runtime>(app: &AppHandle<R>) {
    if let Some(window) = app.get_webview_window("main") {
        reapply_for_window(&window);
    }
}

pub fn init_plugin<R: tauri::Runtime>() -> tauri::plugin::TauriPlugin<R> {
    tauri::plugin::Builder::<R, ()>::new("traffic-light-guard")
        .on_event(|app, event| {
            if matches!(event, RunEvent::MainEventsCleared) && should_reapply_now() {
                if let Some(window) = app.get_webview_window("main") {
                    reapply_for_window(&window);
                }
            }
        })
        .build()
}
