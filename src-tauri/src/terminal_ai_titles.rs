use std::{
    collections::HashMap,
    path::Path,
    sync::{
        atomic::{AtomicBool, Ordering},
        Mutex, OnceLock,
    },
    thread,
    time::Instant,
};

use crate::opencode;
use crate::terminal_host::{
    self, compute_output_fingerprint, extract_output_tail_for_ai, output_has_meaningful_content,
    TerminalSession, OUTPUT_IDLE, AI_TITLE_TICK,
};

struct SessionTrack {
    last_fingerprint: String,
    last_change: Instant,
    in_flight: AtomicBool,
}

static SESSION_TRACKS: OnceLock<Mutex<HashMap<String, SessionTrack>>> = OnceLock::new();

pub fn start_terminal_ai_title_loop() {
    thread::spawn(|| loop {
        thread::sleep(AI_TITLE_TICK);
        tick_terminal_ai_titles();
    });
}

fn tracks() -> &'static Mutex<HashMap<String, SessionTrack>> {
    SESSION_TRACKS.get_or_init(|| Mutex::new(HashMap::new()))
}

fn process_hint_from_session(session: &TerminalSession) -> Option<String> {
    let label = session.label.trim();
    if label.starts_with("Terminal ") {
        return None;
    }
    if let Some((head, tail)) = label.rsplit_once(' ') {
        if !tail.is_empty() && tail.chars().all(|character| character.is_ascii_digit()) {
            return Some(head.to_string());
        }
    }
    None
}

fn tick_terminal_ai_titles() {
    let sessions = match terminal_host::list_sessions() {
        Ok(sessions) => sessions,
        Err(_) => return,
    };

    let active_ids = sessions
        .iter()
        .map(|session| session.id.clone())
        .collect::<Vec<_>>();

    if let Ok(mut guard) = tracks().lock() {
        guard.retain(|session_id, _| active_ids.iter().any(|id| id == session_id));
    }

    for session in sessions {
        if session.kind != "shell" || session.status != "running" {
            continue;
        }
        maybe_generate_for_session(session);
    }
}

fn maybe_generate_for_session(session: TerminalSession) {
    let Ok((refreshed, output)) = terminal_host::read_session(session.id.clone()) else {
        return;
    };
    let output_bytes = output.as_bytes();
    if !refreshed.has_recognized_output || !output_has_meaningful_content(output_bytes) {
        return;
    }

    let process_hint = process_hint_from_session(&refreshed);
    let fingerprint =
        compute_output_fingerprint(output_bytes, process_hint.as_deref());

    let idle_ok = {
        let Ok(mut guard) = tracks().lock() else {
            return;
        };
        let track = guard.entry(session.id.clone()).or_insert_with(|| SessionTrack {
            last_fingerprint: fingerprint.clone(),
            last_change: Instant::now(),
            in_flight: AtomicBool::new(false),
        });
        if track.last_fingerprint != fingerprint {
            track.last_fingerprint = fingerprint.clone();
            track.last_change = Instant::now();
        }
        track.last_change.elapsed() >= OUTPUT_IDLE
    };
    if !idle_ok {
        return;
    }

    if refreshed.ai_label_fingerprint.as_deref() == Some(fingerprint.as_str()) {
        return;
    }

    let Ok(guard) = tracks().lock() else {
        return;
    };
    let Some(track) = guard.get(&session.id) else {
        return;
    };
    if track
        .in_flight
        .compare_exchange(false, true, Ordering::AcqRel, Ordering::Relaxed)
        .is_err()
    {
        return;
    }

    let session_id = session.id.clone();
    let worktree_path = session.worktree_path.clone();
    let previous_title = refreshed.ai_label.clone();
    let summary = extract_output_tail_for_ai(output_bytes);
    let process_hint = process_hint.clone();
    let fingerprint = fingerprint.clone();

    thread::spawn(move || {
        let result = opencode::generate_terminal_title(
            Path::new(&worktree_path),
            &summary,
            process_hint.as_deref(),
            previous_title.as_deref(),
        );

        if let Ok(title) = result {
            let _ = terminal_host::set_session_ai_label(
                session_id.clone(),
                title,
                fingerprint.clone(),
            );
        }

        if let Ok(guard) = tracks().lock() {
            if let Some(track) = guard.get(&session_id) {
                track.in_flight.store(false, Ordering::Relaxed);
            }
        }
    });
}
