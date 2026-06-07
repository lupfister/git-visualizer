use portable_pty::{native_pty_system, CommandBuilder, MasterPty, PtySize};
use serde::{Deserialize, Serialize};
use std::{
    collections::{HashMap, hash_map::DefaultHasher},
    fs,
    hash::{Hash, Hasher},
    io::{BufRead, BufReader, Read, Write},
    os::unix::{
        net::{UnixListener, UnixStream},
        process::CommandExt,
    },
    path::{Path, PathBuf},
    process::{Command, Stdio},
    sync::{
        atomic::{AtomicU64, Ordering},
        Arc, Mutex,
    },
    thread,
    time::{Duration, Instant, SystemTime, UNIX_EPOCH},
};

pub(crate) const OUTPUT_TAIL_BYTES: usize = 3 * 1024;
pub(crate) const OUTPUT_IDLE: Duration = Duration::from_secs(10);
pub(crate) const AI_TITLE_TICK: Duration = Duration::from_secs(2);
const OUTPUT_ACTIVE_WINDOW: Duration = Duration::from_millis(1200);
const OUTPUT_SETTLE_AFTER: Duration = Duration::from_secs(2);
const MAX_OUTPUT_BYTES: usize = 2 * 1024 * 1024;
const MIN_OUTPUT_ALPHA_CHARS: usize = 20;
const TERMINAL_HOST_PROTOCOL: u32 = 2;
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
    #[serde(default)]
    pub ai_label: Option<String>,
    #[serde(default)]
    pub ai_label_fingerprint: Option<String>,
    #[serde(default)]
    pub ai_label_at: Option<u64>,
    #[serde(default)]
    pub output_active: bool,
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
    SetAiLabel {
        id: String,
        ai_label: String,
        ai_label_fingerprint: String,
        ai_label_at: u64,
    },
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

struct OutputActivityState {
    last_fingerprint: String,
    last_fingerprint_change_at: Instant,
    settled: bool,
    last_active_at: Option<Instant>,
}

struct LiveSession {
    metadata: Mutex<TerminalSession>,
    master: Mutex<Box<dyn MasterPty + Send>>,
    writer: Mutex<Box<dyn Write + Send>>,
    child: Mutex<Box<dyn portable_pty::Child + Send + Sync>>,
    output: Arc<Mutex<Vec<u8>>>,
    output_activity: Mutex<OutputActivityState>,
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

fn load_persisted_metadata() -> Vec<TerminalSession> {
    let Ok(path) = metadata_path() else {
        return Vec::new();
    };
    let Ok(raw) = fs::read(&path) else {
        return Vec::new();
    };
    serde_json::from_slice(&raw).unwrap_or_default()
}

fn sync_session_counter_from(metadata: &[TerminalSession]) {
    for session in metadata {
        let Some(counter) = session
            .id
            .rsplit('-')
            .next()
            .and_then(|value| value.parse::<u64>().ok())
        else {
            continue;
        };
        SESSION_COUNTER.fetch_max(counter.saturating_add(1), Ordering::Relaxed);
    }
}

fn restore_persisted_sessions(sessions: &Sessions) {
    let persisted = load_persisted_metadata();
    if persisted.is_empty() {
        return;
    }
    sync_session_counter_from(&persisted);
    for mut metadata in persisted {
        if metadata.status != "running" || metadata.id.is_empty() {
            continue;
        }
        if metadata.kind != "shell" {
            continue;
        }
        if !PathBuf::from(&metadata.worktree_path).exists() {
            continue;
        }
        metadata.status = "running".to_string();
        metadata.output_active = false;
        let _ = spawn_session(metadata, sessions);
    }
}

fn exit_host_if_empty(sessions: &Sessions) {
    let is_empty = sessions
        .lock()
        .ok()
        .is_some_and(|guard| guard.is_empty());
    if !is_empty {
        return;
    }
    if let Ok(path) = metadata_path() {
        let _ = fs::write(path, b"[]");
    }
    if let Ok(socket) = socket_path() {
        let _ = fs::remove_file(&socket);
    }
    std::process::exit(0);
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
        output_activity: Mutex::new(OutputActivityState {
            last_fingerprint: String::new(),
            last_fingerprint_change_at: Instant::now(),
            settled: false,
            last_active_at: None,
        }),
    });
    sessions
        .lock()
        .map_err(|_| "Terminal session state is unavailable".to_string())?
        .insert(metadata.id.clone(), session);
    persist_metadata(sessions);
    Ok(metadata)
}

fn strip_ansi(input: &str) -> String {
    let mut result = String::with_capacity(input.len());
    let mut chars = input.chars().peekable();
    while let Some(c) = chars.next() {
        if c == '\x1b' {
            match chars.peek().copied() {
                Some('[') => {
                    chars.next();
                    for next in chars.by_ref() {
                        if next.is_ascii_alphabetic() {
                            break;
                        }
                    }
                }
                Some(']') => {
                    chars.next();
                    let mut prev = ' ';
                    for next in chars.by_ref() {
                        if next == '\x07' {
                            break;
                        }
                        if prev == '\x1b' && next == '\\' {
                            break;
                        }
                        prev = next;
                    }
                }
                _ => {
                    chars.next();
                }
            }
        } else if !c.is_control() || c == '\n' {
            result.push(c);
        }
    }
    result
}

pub fn extract_output_tail_for_ai(output_bytes: &[u8]) -> String {
    let start = output_bytes.len().saturating_sub(OUTPUT_TAIL_BYTES);
    let raw = String::from_utf8_lossy(&output_bytes[start..]);
    crate::opencode::redact_terminal_secrets(&strip_ansi(&raw))
}

pub fn compute_output_fingerprint(output_bytes: &[u8], process_hint: Option<&str>) -> String {
    let tail = extract_output_tail_for_ai(output_bytes);
    let mut hasher = DefaultHasher::new();
    tail.hash(&mut hasher);
    if let Some(hint) = process_hint {
        hint.hash(&mut hasher);
    }
    format!("{:x}", hasher.finish())
}

pub fn output_has_meaningful_content(output_bytes: &[u8]) -> bool {
    extract_output_tail_for_ai(output_bytes)
        .chars()
        .filter(|character| character.is_alphabetic())
        .count()
        >= MIN_OUTPUT_ALPHA_CHARS
}

fn terminal_number_from_label(label: &str) -> Option<u32> {
    label.strip_prefix("Terminal ")?.trim().parse().ok()
}

fn interim_display_label(process_name: Option<&str>, stored_label: &str) -> String {
    match (process_name, terminal_number_from_label(stored_label)) {
        (Some(name), Some(number)) => format!("{name} {number}"),
        (Some(name), None) => name.to_string(),
        _ => stored_label.to_string(),
    }
}

fn merge_display_label(
    metadata: &TerminalSession,
    process_name: Option<String>,
    current_fingerprint: &str,
) -> String {
    let ai_fresh = metadata.ai_label_fingerprint.as_deref() == Some(current_fingerprint)
        && metadata
            .ai_label
            .as_ref()
            .is_some_and(|label| !label.trim().is_empty());

    if ai_fresh {
        return metadata.ai_label.as_ref().expect("fresh ai label").clone();
    }

    interim_display_label(process_name.as_deref(), &metadata.label)
}

fn session_process_info(session: &Arc<LiveSession>, exited: bool) -> Option<(usize, String)> {
    if exited {
        return None;
    }
    let process_id = session
        .child
        .lock()
        .ok()
        .and_then(|child| child.process_id())?;
    detect_foreground_command(process_id)
}

fn output_content_fingerprint(output_bytes: &[u8]) -> String {
    compute_output_fingerprint(output_bytes, None)
}

fn refresh_output_active(session: &Arc<LiveSession>, output_bytes: &[u8], exited: bool) -> bool {
    if exited {
        return false;
    }

    let fingerprint = output_content_fingerprint(output_bytes);
    let Ok(mut activity) = session.output_activity.lock() else {
        return false;
    };

    if fingerprint != activity.last_fingerprint {
        activity.last_fingerprint = fingerprint;
        activity.last_fingerprint_change_at = Instant::now();
        if activity.settled {
            activity.last_active_at = Some(Instant::now());
        }
    } else if !activity.settled
        && activity.last_fingerprint_change_at.elapsed() >= OUTPUT_SETTLE_AFTER
    {
        activity.settled = true;
    }

    activity.settled
        && activity
            .last_active_at
            .is_some_and(|changed_at| changed_at.elapsed() < OUTPUT_ACTIVE_WINDOW)
}

fn refresh_status(session: &Arc<LiveSession>) -> TerminalSession {
    let (exited, _) = session
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

    let output_bytes = session
        .output
        .lock()
        .ok()
        .map(|buffer| buffer.clone())
        .unwrap_or_default();
    let process_info = session_process_info(session, exited);
    let process_name = process_info.as_ref().map(|(_, name)| name.clone());
    let current_fingerprint =
        compute_output_fingerprint(&output_bytes, process_name.as_deref());

    let mut response_metadata = metadata.clone();
    if response_metadata.kind == "shell" {
        response_metadata.label = merge_display_label(
            &metadata,
            process_name,
            &current_fingerprint,
        );
    }
    response_metadata.output_active = refresh_output_active(session, &output_bytes, exited);
    response_metadata
}

fn detect_foreground_command(root_pid: u32) -> Option<(usize, String)> {
    let output = Command::new("ps")
        .args(["-axo", "pid=,ppid=,state=,command="])
        .output()
        .ok()?;
    detect_foreground_command_from_ps(root_pid, &String::from_utf8_lossy(&output.stdout))
}

fn detect_foreground_command_from_ps(root_pid: u32, raw: &str) -> Option<(usize, String)> {
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
    best.map(|(priority, _, label)| (priority, label))
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
        HostRequest::SetAiLabel {
            id,
            ai_label,
            ai_label_fingerprint,
            ai_label_at,
        } => {
            let session = sessions
                .lock()
                .ok()
                .and_then(|values| values.get(&id).cloned());
            let Some(session) = session else {
                return HostResponse::error("Terminal session not found");
            };
            if let Ok(mut metadata) = session.metadata.lock() {
                metadata.ai_label = Some(ai_label);
                metadata.ai_label_fingerprint = Some(ai_label_fingerprint);
                metadata.ai_label_at = Some(ai_label_at);
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
            exit_host_if_empty(sessions);
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
    let protocol_path = root.join("protocol_version");
    let _ = fs::write(&protocol_path, TERMINAL_HOST_PROTOCOL.to_string());
    let sessions: Sessions = Arc::new(Mutex::new(HashMap::new()));
    restore_persisted_sessions(&sessions);
    for stream in listener.incoming().flatten() {
        let sessions = sessions.clone();
        thread::spawn(move || handle_connection(stream, sessions));
    }
    Ok(())
}

fn augment_path_for_subprocess(command: &mut Command) {
    if std::env::var_os("PATH").is_some() {
        return;
    }
    if let Ok(output) = Command::new("zsh").args(["-lc", "echo -n $PATH"]).output() {
        if output.status.success() {
            command.env(
                "PATH",
                String::from_utf8_lossy(&output.stdout).trim().to_string(),
            );
        }
    }
}

fn spawn_terminal_host_process(executable: &Path) -> Result<(), String> {
    let mut command = Command::new(executable);
    command
        .arg("--terminal-host")
        .stdin(Stdio::null())
        .stdout(Stdio::null())
        .stderr(Stdio::null());
    augment_path_for_subprocess(&mut command);
    #[cfg(unix)]
    command.process_group(0);
    command
        .spawn()
        .map_err(|error| format!("Failed to start terminal host: {error}"))?;
    Ok(())
}

fn send_request(request: HostRequest) -> Result<HostResponse, String> {
    let socket = socket_path()?;
    let connect = || UnixStream::connect(&socket);
    let mut stream = match connect() {
        Ok(stream) => stream,
        Err(_) => {
            let executable = std::env::current_exe().map_err(|error| error.to_string())?;
            spawn_terminal_host_process(&executable)?;
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

pub fn set_session_ai_label(
    id: String,
    ai_label: String,
    ai_label_fingerprint: String,
) -> Result<(), String> {
    let ai_label_at = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_millis() as u64;
    send_request(HostRequest::SetAiLabel {
        id,
        ai_label,
        ai_label_fingerprint,
        ai_label_at,
    })
    .map(|_| ())
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
                ai_label: None,
                ai_label_fingerprint: None,
                ai_label_at: None,
                output_active: false,
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
            Some((100, "Codex".to_string()))
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
            Some((1, "pnpm".to_string()))
        );
        assert_eq!(detect_foreground_command_from_ps(101, ps), None);
    }

    #[test]
    fn output_fingerprint_changes_when_tail_changes() {
        let first = compute_output_fingerprint(b"running unit tests now", Some("pnpm"));
        let second = compute_output_fingerprint(b"running unit tests now", Some("pnpm"));
        let third = compute_output_fingerprint(b"building release artifacts", Some("pnpm"));
        assert_eq!(first, second);
        assert_ne!(first, third);
    }

    #[test]
    fn merge_display_label_prefers_fresh_ai_title() {
        let metadata = TerminalSession {
            id: "terminal-1".to_string(),
            project_path: "/tmp".to_string(),
            worktree_path: "/tmp".to_string(),
            kind: "shell".to_string(),
            label: "Terminal 1".to_string(),
            command: String::new(),
            cols: 80,
            rows: 24,
            status: "running".to_string(),
            target_id: None,
            target_kind: None,
            ai_label: Some("Run test suite".to_string()),
            ai_label_fingerprint: Some("abc123".to_string()),
            ai_label_at: Some(1),
            output_active: false,
        };
        let merged = merge_display_label(
            &metadata,
            Some("OpenCode".to_string()),
            "abc123",
        );
        assert_eq!(merged, "Run test suite");
    }

    #[test]
    fn interim_display_label_uses_process_header_and_number() {
        assert_eq!(
            interim_display_label(Some("OpenCode"), "Terminal 1"),
            "OpenCode 1",
        );
        assert_eq!(
            interim_display_label(Some("pnpm"), "Terminal 2"),
            "pnpm 2",
        );
        assert_eq!(interim_display_label(None, "Terminal 1"), "Terminal 1");
    }

    #[test]
    fn merge_display_label_falls_back_when_ai_title_is_stale() {
        let metadata = TerminalSession {
            id: "terminal-1".to_string(),
            project_path: "/tmp".to_string(),
            worktree_path: "/tmp".to_string(),
            kind: "shell".to_string(),
            label: "Terminal 1".to_string(),
            command: String::new(),
            cols: 80,
            rows: 24,
            status: "running".to_string(),
            target_id: None,
            target_kind: None,
            ai_label: Some("Old task".to_string()),
            ai_label_fingerprint: Some("old".to_string()),
            ai_label_at: Some(1),
            output_active: false,
        };
        let merged = merge_display_label(
            &metadata,
            Some("pnpm".to_string()),
            "new",
        );
        assert_eq!(merged, "pnpm 1");
    }
}
