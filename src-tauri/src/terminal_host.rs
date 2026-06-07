use portable_pty::{native_pty_system, CommandBuilder, MasterPty, PtySize};
use serde::{Deserialize, Serialize};
use std::{
    collections::HashMap,
    fs,
    io::{BufRead, BufReader, Read, Write},
    os::unix::{
        net::{UnixListener, UnixStream},
        process::CommandExt,
    },
    path::PathBuf,
    process::{Command, Stdio},
    sync::{
        atomic::{AtomicU64, Ordering},
        Arc, Mutex,
    },
    thread,
    time::{Duration, SystemTime, UNIX_EPOCH},
};

const MAX_OUTPUT_BYTES: usize = 2 * 1024 * 1024;
static SESSION_COUNTER: AtomicU64 = AtomicU64::new(1);

#[derive(Clone, Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TerminalSession {
    pub id: String,
    pub project_path: String,
    pub worktree_path: String,
    pub kind: String,
    pub label: String,
    pub command: String,
    pub cols: u16,
    pub rows: u16,
    pub status: String,
    pub target_id: Option<String>,
    pub target_kind: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(tag = "action", rename_all = "camelCase")]
enum HostRequest {
    List,
    Create { session: TerminalSession },
    Read { id: String },
    Write { id: String, data: String },
    Resize { id: String, cols: u16, rows: u16 },
    SetLabel { id: String, label: String },
    Terminate { id: String },
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct HostResponse {
    ok: bool,
    error: Option<String>,
    sessions: Option<Vec<TerminalSession>>,
    session: Option<TerminalSession>,
    output: Option<String>,
}

impl HostResponse {
    fn ok() -> Self {
        Self {
            ok: true,
            error: None,
            sessions: None,
            session: None,
            output: None,
        }
    }

    fn error(error: impl Into<String>) -> Self {
        Self {
            ok: false,
            error: Some(error.into()),
            sessions: None,
            session: None,
            output: None,
        }
    }
}

struct LiveSession {
    metadata: Mutex<TerminalSession>,
    master: Mutex<Box<dyn MasterPty + Send>>,
    writer: Mutex<Box<dyn Write + Send>>,
    child: Mutex<Box<dyn portable_pty::Child + Send + Sync>>,
    output: Arc<Mutex<Vec<u8>>>,
}

type Sessions = Arc<Mutex<HashMap<String, Arc<LiveSession>>>>;

fn host_root() -> Result<PathBuf, String> {
    let base = dirs::data_local_dir()
        .or_else(dirs::cache_dir)
        .ok_or_else(|| "Unable to resolve terminal host data directory".to_string())?;
    Ok(base.join("git-visualizer").join("terminal-host"))
}

fn socket_path() -> Result<PathBuf, String> {
    Ok(host_root()?.join("host.sock"))
}

fn metadata_path() -> Result<PathBuf, String> {
    Ok(host_root()?.join("sessions.json"))
}

fn persist_metadata(sessions: &Sessions) {
    let Ok(path) = metadata_path() else { return };
    let Ok(guard) = sessions.lock() else { return };
    let values = guard
        .values()
        .filter_map(|session| session.metadata.lock().ok().map(|value| value.clone()))
        .collect::<Vec<_>>();
    drop(guard);
    if let Ok(raw) = serde_json::to_vec_pretty(&values) {
        let _ = fs::write(path, raw);
    }
}

fn generate_session_id() -> String {
    let millis = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_millis();
    let counter = SESSION_COUNTER.fetch_add(1, Ordering::Relaxed);
    format!("terminal-{millis}-{counter}")
}

fn spawn_session(
    mut metadata: TerminalSession,
    sessions: &Sessions,
) -> Result<TerminalSession, String> {
    if metadata.id.is_empty() {
        metadata.id = generate_session_id();
    }
    let pty = native_pty_system()
        .openpty(PtySize {
            rows: metadata.rows.max(2),
            cols: metadata.cols.max(2),
            pixel_width: 0,
            pixel_height: 0,
        })
        .map_err(|error| format!("Failed to create terminal: {error}"))?;

    let mut command = CommandBuilder::new("zsh");
    if metadata.command.trim().is_empty() {
        command.arg("-l");
    } else {
        command.args(["-lc", &metadata.command]);
    }
    command.cwd(&metadata.worktree_path);
    command.env("TERM", "xterm-256color");
    command.env("BROWSER", "none");
    command.env("NO_OPEN", "1");
    let child = pty
        .slave
        .spawn_command(command)
        .map_err(|error| format!("Failed to start terminal: {error}"))?;
    let mut reader = pty
        .master
        .try_clone_reader()
        .map_err(|error| format!("Failed to attach terminal output: {error}"))?;
    let writer = pty
        .master
        .take_writer()
        .map_err(|error| format!("Failed to attach terminal input: {error}"))?;
    let output = Arc::new(Mutex::new(Vec::<u8>::new()));
    let output_for_reader = output.clone();
    thread::spawn(move || {
        let mut buffer = [0_u8; 8192];
        while let Ok(count) = reader.read(&mut buffer) {
            if count == 0 {
                break;
            }
            let Ok(mut accumulated) = output_for_reader.lock() else {
                break;
            };
            accumulated.extend_from_slice(&buffer[..count]);
            if accumulated.len() > MAX_OUTPUT_BYTES {
                let remove = accumulated.len() - MAX_OUTPUT_BYTES;
                accumulated.drain(..remove);
            }
        }
    });

    metadata.status = "running".to_string();
    let session = Arc::new(LiveSession {
        metadata: Mutex::new(metadata.clone()),
        master: Mutex::new(pty.master),
        writer: Mutex::new(writer),
        child: Mutex::new(child),
        output,
    });
    sessions
        .lock()
        .map_err(|_| "Terminal session state is unavailable".to_string())?
        .insert(metadata.id.clone(), session);
    persist_metadata(sessions);
    Ok(metadata)
}

fn refresh_status(session: &Arc<LiveSession>) -> TerminalSession {
    let (exited, process_id) = session
        .child
        .lock()
        .ok()
        .map(|mut child| {
            (
                child.try_wait().ok().flatten().is_some(),
                child.process_id(),
            )
        })
        .unwrap_or((true, None));
    let mut metadata = session.metadata.lock().expect("terminal metadata lock");
    if exited {
        metadata.status = "exited".to_string();
    }
    let mut response_metadata = metadata.clone();
    if !exited && response_metadata.kind == "shell" {
        if let Some(command) = process_id.and_then(detect_foreground_command) {
            response_metadata.label = format!("{} ({})", response_metadata.label, command);
        }
    }
    response_metadata
}

fn detect_foreground_command(root_pid: u32) -> Option<String> {
    let output = Command::new("ps")
        .args(["-axo", "pid=,ppid=,state=,command="])
        .output()
        .ok()?;
    detect_foreground_command_from_ps(root_pid, &String::from_utf8_lossy(&output.stdout))
}

fn detect_foreground_command_from_ps(root_pid: u32, raw: &str) -> Option<String> {
    let mut children = HashMap::<u32, Vec<(u32, String)>>::new();
    for line in raw.lines() {
        let mut parts = line.split_whitespace();
        let Some(pid) = parts.next().and_then(|value| value.parse::<u32>().ok()) else {
            continue;
        };
        let Some(parent) = parts.next().and_then(|value| value.parse::<u32>().ok()) else {
            continue;
        };
        let state = parts.next().unwrap_or_default();
        if state.starts_with('Z') {
            continue;
        }
        children
            .entry(parent)
            .or_default()
            .push((pid, parts.collect::<Vec<_>>().join(" ")));
    }

    let mut stack = vec![(root_pid, 0_usize)];
    let mut best: Option<(usize, usize, String)> = None;
    while let Some((parent, depth)) = stack.pop() {
        for (pid, command) in children.get(&parent).into_iter().flatten() {
            let next_depth = depth + 1;
            stack.push((*pid, next_depth));
            let Some((priority, label)) = terminal_process_label(command) else {
                continue;
            };
            if best
                .as_ref()
                .is_none_or(|current| (priority, next_depth) > (current.0, current.1))
            {
                best = Some((priority, next_depth, label));
            }
        }
    }
    best.map(|(_, _, label)| label)
}

fn terminal_process_label(command: &str) -> Option<(usize, String)> {
    let lower = command.to_ascii_lowercase();
    for (needle, label) in [
        ("opencode", "OpenCode"),
        ("claude", "Claude"),
        ("codex", "Codex"),
        ("gemini", "Gemini"),
        ("aider", "Aider"),
    ] {
        if lower.contains(needle) {
            return Some((100, label.to_string()));
        }
    }

    let executable = command.split_whitespace().next()?;
    let name = PathBuf::from(executable)
        .file_name()?
        .to_string_lossy()
        .trim_start_matches('-')
        .to_string();
    if name.is_empty()
        || matches!(
            name.as_str(),
            "zsh" | "bash" | "sh" | "fish" | "login" | "node" | "nodejs" | "env" | "script"
        )
    {
        return None;
    }
    Some((1, name))
}

fn handle_request(request: HostRequest, sessions: &Sessions) -> HostResponse {
    match request {
        HostRequest::List => {
            let Ok(guard) = sessions.lock() else {
                return HostResponse::error("Terminal session state is unavailable");
            };
            let mut values = guard.values().map(refresh_status).collect::<Vec<_>>();
            values.sort_by(|left, right| left.id.cmp(&right.id));
            let mut response = HostResponse::ok();
            response.sessions = Some(values);
            response
        }
        HostRequest::Create { session } => match spawn_session(session, sessions) {
            Ok(session) => {
                let mut response = HostResponse::ok();
                response.session = Some(session);
                response
            }
            Err(error) => HostResponse::error(error),
        },
        HostRequest::Read { id } => {
            let session = sessions
                .lock()
                .ok()
                .and_then(|values| values.get(&id).cloned());
            let Some(session) = session else {
                return HostResponse::error("Terminal session not found");
            };
            let output = session
                .output
                .lock()
                .map(|bytes| String::from_utf8_lossy(&bytes).to_string())
                .unwrap_or_default();
            let mut response = HostResponse::ok();
            response.session = Some(refresh_status(&session));
            response.output = Some(output);
            response
        }
        HostRequest::Write { id, data } => {
            let session = sessions
                .lock()
                .ok()
                .and_then(|values| values.get(&id).cloned());
            let Some(session) = session else {
                return HostResponse::error("Terminal session not found");
            };
            match session
                .writer
                .lock()
                .map_err(|_| "Terminal input is unavailable".to_string())
                .and_then(|mut writer| {
                    writer
                        .write_all(data.as_bytes())
                        .and_then(|_| writer.flush())
                        .map_err(|error| error.to_string())
                }) {
                Ok(()) => HostResponse::ok(),
                Err(error) => HostResponse::error(error),
            }
        }
        HostRequest::Resize { id, cols, rows } => {
            let session = sessions
                .lock()
                .ok()
                .and_then(|values| values.get(&id).cloned());
            let Some(session) = session else {
                return HostResponse::error("Terminal session not found");
            };
            let result = session
                .master
                .lock()
                .map_err(|_| "Terminal resize is unavailable".to_string())
                .and_then(|master| {
                    master
                        .resize(PtySize {
                            rows: rows.max(2),
                            cols: cols.max(2),
                            pixel_width: 0,
                            pixel_height: 0,
                        })
                        .map_err(|error| error.to_string())
                });
            if result.is_ok() {
                if let Ok(mut metadata) = session.metadata.lock() {
                    metadata.cols = cols;
                    metadata.rows = rows;
                }
                persist_metadata(sessions);
                HostResponse::ok()
            } else {
                HostResponse::error(result.unwrap_err())
            }
        }
        HostRequest::SetLabel { id, label } => {
            let session = sessions
                .lock()
                .ok()
                .and_then(|values| values.get(&id).cloned());
            let Some(session) = session else {
                return HostResponse::error("Terminal session not found");
            };
            if let Ok(mut metadata) = session.metadata.lock() {
                metadata.label = label;
            }
            persist_metadata(sessions);
            HostResponse::ok()
        }
        HostRequest::Terminate { id } => {
            let session = sessions
                .lock()
                .ok()
                .and_then(|mut values| values.remove(&id));
            let Some(session) = session else {
                return HostResponse::error("Terminal session not found");
            };
            if let Ok(mut child) = session.child.lock() {
                let _ = child.kill();
                let _ = child.wait();
            }
            persist_metadata(sessions);
            HostResponse::ok()
        }
    }
}

fn handle_connection(stream: UnixStream, sessions: Sessions) {
    let Ok(reader_stream) = stream.try_clone() else {
        return;
    };
    let mut reader = BufReader::new(reader_stream);
    let mut raw = String::new();
    if reader.read_line(&mut raw).is_err() {
        return;
    }
    let response = match serde_json::from_str::<HostRequest>(&raw) {
        Ok(request) => handle_request(request, &sessions),
        Err(error) => HostResponse::error(format!("Invalid terminal host request: {error}")),
    };
    if let Ok(mut payload) = serde_json::to_vec(&response) {
        payload.push(b'\n');
        let mut stream = stream;
        let _ = stream.write_all(&payload);
    }
}

pub fn run_terminal_host() -> Result<(), String> {
    let root = host_root()?;
    fs::create_dir_all(&root)
        .map_err(|error| format!("Failed to create terminal host directory: {error}"))?;
    let socket = socket_path()?;
    if socket.exists() {
        if UnixStream::connect(&socket).is_ok() {
            return Ok(());
        }
        let _ = fs::remove_file(&socket);
    }
    let listener = UnixListener::bind(&socket)
        .map_err(|error| format!("Failed to bind terminal host: {error}"))?;
    let sessions: Sessions = Arc::new(Mutex::new(HashMap::new()));
    for stream in listener.incoming().flatten() {
        let sessions = sessions.clone();
        thread::spawn(move || handle_connection(stream, sessions));
    }
    Ok(())
}

fn send_request(request: HostRequest) -> Result<HostResponse, String> {
    let socket = socket_path()?;
    let connect = || UnixStream::connect(&socket);
    let mut stream = match connect() {
        Ok(stream) => stream,
        Err(_) => {
            let executable = std::env::current_exe().map_err(|error| error.to_string())?;
            let mut command = Command::new(executable);
            command
                .arg("--terminal-host")
                .stdin(Stdio::null())
                .stdout(Stdio::null())
                .stderr(Stdio::null());
            #[cfg(unix)]
            command.process_group(0);
            command
                .spawn()
                .map_err(|error| format!("Failed to start terminal host: {error}"))?;
            let mut connected = None;
            for _ in 0..40 {
                thread::sleep(Duration::from_millis(50));
                if let Ok(stream) = connect() {
                    connected = Some(stream);
                    break;
                }
            }
            connected.ok_or_else(|| "Terminal host did not become available".to_string())?
        }
    };
    let mut payload = serde_json::to_vec(&request).map_err(|error| error.to_string())?;
    payload.push(b'\n');
    stream
        .write_all(&payload)
        .map_err(|error| error.to_string())?;
    let mut reader = BufReader::new(stream);
    let mut raw = String::new();
    reader
        .read_line(&mut raw)
        .map_err(|error| error.to_string())?;
    let response: HostResponse = serde_json::from_str(&raw).map_err(|error| error.to_string())?;
    if response.ok {
        Ok(response)
    } else {
        Err(response
            .error
            .unwrap_or_else(|| "Terminal host request failed".to_string()))
    }
}

pub fn list_sessions() -> Result<Vec<TerminalSession>, String> {
    Ok(send_request(HostRequest::List)?
        .sessions
        .unwrap_or_default())
}

pub fn create_session(session: TerminalSession) -> Result<TerminalSession, String> {
    send_request(HostRequest::Create { session })?
        .session
        .ok_or_else(|| "Terminal host did not return a session".to_string())
}

pub fn read_session(id: String) -> Result<(TerminalSession, String), String> {
    let response = send_request(HostRequest::Read { id })?;
    Ok((
        response
            .session
            .ok_or_else(|| "Terminal host did not return a session".to_string())?,
        response.output.unwrap_or_default(),
    ))
}

pub fn write_session(id: String, data: String) -> Result<(), String> {
    send_request(HostRequest::Write { id, data }).map(|_| ())
}

pub fn resize_session(id: String, cols: u16, rows: u16) -> Result<(), String> {
    send_request(HostRequest::Resize { id, cols, rows }).map(|_| ())
}

pub fn set_session_label(id: String, label: String) -> Result<(), String> {
    send_request(HostRequest::SetLabel { id, label }).map(|_| ())
}

pub fn terminate_session(id: String) -> Result<(), String> {
    send_request(HostRequest::Terminate { id }).map(|_| ())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn spawned_session_captures_output_and_terminates() {
        let sessions: Sessions = Arc::new(Mutex::new(HashMap::new()));
        let session = spawn_session(
            TerminalSession {
                id: String::new(),
                project_path: "/tmp".to_string(),
                worktree_path: "/tmp".to_string(),
                kind: "shell".to_string(),
                label: "Terminal 1".to_string(),
                command: "printf terminal-host-test".to_string(),
                cols: 80,
                rows: 24,
                status: "running".to_string(),
                target_id: None,
                target_kind: None,
            },
            &sessions,
        )
        .expect("spawn terminal");
        let mut captured = false;
        for _ in 0..20 {
            thread::sleep(Duration::from_millis(100));
            let response = handle_request(
                HostRequest::Read {
                    id: session.id.clone(),
                },
                &sessions,
            );
            assert!(response.ok);
            if response
                .output
                .unwrap_or_default()
                .contains("terminal-host-test")
            {
                captured = true;
                break;
            }
        }
        assert!(captured);
        assert!(handle_request(HostRequest::Terminate { id: session.id }, &sessions).ok);
    }

    #[test]
    fn detects_cli_agent_behind_node_wrapper() {
        let ps = "\
100 1 S /bin/zsh -l
101 100 S node /opt/homebrew/lib/node_modules/@openai/codex/bin/codex.js
102 101 S /opt/homebrew/lib/node_modules/@openai/codex/vendor/codex
";
        assert_eq!(
            detect_foreground_command_from_ps(100, ps),
            Some("Codex".to_string())
        );
    }

    #[test]
    fn detects_arbitrary_foreground_command_but_ignores_shells() {
        let ps = "\
100 1 S /bin/zsh -l
101 100 S pnpm dev
";
        assert_eq!(
            detect_foreground_command_from_ps(100, ps),
            Some("pnpm".to_string())
        );
        assert_eq!(detect_foreground_command_from_ps(101, ps), None);
    }

}
