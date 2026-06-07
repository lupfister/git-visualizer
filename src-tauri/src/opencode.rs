use std::io::Read;
use std::net::{SocketAddr, TcpStream};
use std::path::{Path, PathBuf};
use std::process::{Child, Command, Stdio};
use std::sync::{Mutex, OnceLock};
use std::time::{Duration, Instant};

const MAX_PROMPT_CHARS: usize = 8_000;
const MAX_GENERATION_ATTEMPTS: u32 = 3;
const RETRY_DELAY_MS: u64 = 400;
const MAX_MESSAGE_CHARS: usize = 72;
const MAX_TERMINAL_MESSAGE_CHARS: usize = 40;
const MAX_MESSAGE_WORDS: usize = 12;
const MAX_TERMINAL_MESSAGE_WORDS: usize = 8;
const MIN_MESSAGE_LEN: usize = 6;
const MIN_TERMINAL_MESSAGE_LEN: usize = 3;
const OPENCODE_TIMEOUT: Duration = Duration::from_secs(90);
/// Dedicated port so we never attach to a stale OpenCode Desktop / old CLI server on 4096.
const OPENCODE_SERVER_PORT: u16 = 47123;
/// Minimum CLI version — 1.15.x had broken big-pickle routing; keep OpenCode up to date.
const OPENCODE_MIN_VERSION: (u32, u32, u32) = (1, 16, 0);
/// OpenCode Zen free models — no API key or login required. See https://opencode.ai/docs/zen/
const OPENCODE_TITLE_MODELS: &[&str] = &[
    "opencode/deepseek-v4-flash-free",
    "opencode/minimax-m2.5-free",
    "opencode/big-pickle",
];

const COMMIT_TITLE_PROMPT: &str = "\
You write git commit titles only.\n\
\n\
Rules:\n\
- Output exactly one line, at most 72 characters\n\
- Imperative mood (Fix, Add, Remove, …)\n\
- High-level purpose only — never list files, paths, or per-hunk details\n\
- No preamble, explanation, quotes, markdown, or trailing colon\n";

const STASH_TITLE_PROMPT: &str = "\
You write git stash titles only.\n\
\n\
Rules:\n\
- Output exactly one line, at most 72 characters\n\
- Imperative mood (Stash, Save, …)\n\
- High-level purpose only — never list files, paths, or per-hunk details\n\
- No preamble, explanation, quotes, markdown, or trailing colon\n";

const TERMINAL_TITLE_PROMPT: &str = "\
You write short terminal session titles only.\n\
\n\
Rules:\n\
- Output exactly one line, at most 40 characters\n\
- Describe what the session is doing right now (task/intent)\n\
- No paths, file lists, shell prompts, or AI meta text\n\
- No quotes, markdown, or trailing colon\n";

fn compose_title_prompt(base: &str, summary: &str, previous_title: Option<&str>) -> String {
    let mut prompt = base.to_string();
    if let Some(previous) = previous_title
        .map(str::trim)
        .filter(|value| !value.is_empty())
    {
        prompt.push_str(
            "\nPrevious title (ongoing work in this worktree — write a fresh title for the diff below; \
             keep the same intent when still accurate, do not copy verbatim unless it still fits):\n",
        );
        prompt.push_str(previous);
        prompt.push('\n');
    }
    prompt.push_str("\nChanges:\n");
    prompt.push_str(&truncate_summary(summary));
    prompt
}

fn compose_terminal_title_prompt(
    summary: &str,
    process_hint: Option<&str>,
    previous_title: Option<&str>,
) -> String {
    let mut prompt = TERMINAL_TITLE_PROMPT.to_string();
    if let Some(hint) = process_hint.map(str::trim).filter(|value| !value.is_empty()) {
        prompt.push_str("\nForeground process: ");
        prompt.push_str(hint);
        prompt.push('\n');
    }
    if let Some(previous) = previous_title
        .map(str::trim)
        .filter(|value| !value.is_empty())
    {
        prompt.push_str(
            "\nPrevious title (ongoing session — write a fresh title for the context below; \
             keep the same intent when still accurate, do not copy verbatim unless it still fits):\n",
        );
        prompt.push_str(previous);
        prompt.push('\n');
    }
    prompt.push_str("\nTerminal context:\n");
    prompt.push_str(&truncate_summary(summary));
    prompt
}

pub fn redact_terminal_secrets(text: &str) -> String {
    text.lines()
        .map(|line| {
            let lower = line.to_ascii_lowercase();
            if lower.contains("password=")
                || lower.contains("token=")
                || lower.contains("secret=")
                || lower.contains("api_key=")
                || lower.contains("apikey=")
            {
                "[redacted]".to_string()
            } else {
                line.to_string()
            }
        })
        .collect::<Vec<_>>()
        .join("\n")
}

fn resolve_opencode_binary() -> Result<PathBuf, String> {
    let probe = if cfg!(windows) {
        Command::new("where").arg("opencode").output()
    } else {
        Command::new("which").arg("opencode").output()
    };

    match probe {
        Ok(output) if output.status.success() => {
            let path = String::from_utf8_lossy(&output.stdout)
                .lines()
                .next()
                .unwrap_or("")
                .trim()
                .to_string();
            if path.is_empty() {
                Err(opencode_missing_message())
            } else {
                Ok(PathBuf::from(path))
            }
        }
        _ => Err(opencode_missing_message()),
    }
}

fn opencode_missing_message() -> String {
    "OpenCode CLI not found. Install or update with: npm i -g opencode-ai@latest".to_string()
}

static OPENCODE_SERVER: OnceLock<Mutex<Option<Child>>> = OnceLock::new();

fn opencode_server_addr() -> SocketAddr {
    format!("127.0.0.1:{OPENCODE_SERVER_PORT}")
        .parse()
        .expect("valid opencode server addr")
}

fn opencode_attach_url() -> String {
    format!("http://127.0.0.1:{OPENCODE_SERVER_PORT}")
}

fn parse_opencode_version(raw: &str) -> Option<(u32, u32, u32)> {
    let digits: Vec<u32> = raw
        .split('.')
        .filter_map(|part| part.chars().take_while(|ch| ch.is_ascii_digit()).collect::<String>().parse().ok())
        .collect();
    match digits.as_slice() {
        [major, minor, patch] => Some((*major, *minor, *patch)),
        [major, minor] => Some((*major, *minor, 0)),
        _ => None,
    }
}

fn read_opencode_version(binary: &Path) -> Option<(u32, u32, u32)> {
    let output = Command::new(binary).arg("--version").output().ok()?;
    if !output.status.success() {
        return None;
    }
    let stdout = String::from_utf8_lossy(&output.stdout);
    let stderr = String::from_utf8_lossy(&output.stderr);
    parse_opencode_version(&stdout).or_else(|| parse_opencode_version(&stderr))
}

fn version_at_least(found: (u32, u32, u32), minimum: (u32, u32, u32)) -> bool {
    found.0 > minimum.0
        || (found.0 == minimum.0 && found.1 > minimum.1)
        || (found.0 == minimum.0 && found.1 == minimum.1 && found.2 >= minimum.2)
}

fn ensure_opencode_version(binary: &Path) -> Result<(), String> {
    let Some(version) = read_opencode_version(binary) else {
        return Ok(());
    };
    if version_at_least(version, OPENCODE_MIN_VERSION) {
        return Ok(());
    }
    Err(format!(
        "OpenCode {}.{}.{} is outdated (need {}.{}.{} or newer). Run: npm i -g opencode-ai@latest",
        version.0,
        version.1,
        version.2,
        OPENCODE_MIN_VERSION.0,
        OPENCODE_MIN_VERSION.1,
        OPENCODE_MIN_VERSION.2,
    ))
}

fn opencode_server_available() -> bool {
    TcpStream::connect_timeout(&opencode_server_addr(), Duration::from_millis(250)).is_ok()
}

fn kill_processes_on_port(port: u16) {
    #[cfg(unix)]
    {
        let Ok(output) = Command::new("lsof")
            .args(["-ti", &format!(":{port}")])
            .output()
        else {
            return;
        };
        if !output.status.success() {
            return;
        }
        let pids = String::from_utf8_lossy(&output.stdout);
        for pid in pids.split_whitespace() {
            let _ = Command::new("kill").arg(pid).status();
        }
        if !pids.trim().is_empty() {
            std::thread::sleep(Duration::from_millis(300));
        }
    }
}

fn ensure_opencode_server(binary: &Path) -> Result<(), String> {
    ensure_opencode_version(binary)?;

    let lock = OPENCODE_SERVER.get_or_init(|| Mutex::new(None));
    let mut guard = lock
        .lock()
        .map_err(|_| "OpenCode server lock poisoned.".to_string())?;

    if let Some(child) = guard.as_mut() {
        if child.try_wait().ok().flatten().is_some() {
            *guard = None;
        }
    }

    if guard.is_some() && opencode_server_available() {
        return Ok(());
    }

    if guard.is_some() {
        if let Some(mut child) = guard.take() {
            let _ = child.kill();
            let _ = child.wait();
        }
    }

    kill_processes_on_port(OPENCODE_SERVER_PORT);

    let child = Command::new(binary)
        .args([
            "serve",
            "--port",
            &OPENCODE_SERVER_PORT.to_string(),
            "--hostname",
            "127.0.0.1",
        ])
        .stdin(Stdio::null())
        .stdout(Stdio::null())
        .stderr(Stdio::null())
        .spawn()
        .map_err(|e| format!("Failed to start OpenCode server: {e}"))?;
    *guard = Some(child);

    for _ in 0..40 {
        if opencode_server_available() {
            return Ok(());
        }
        std::thread::sleep(Duration::from_millis(200));
    }

    Err(format!(
        "OpenCode server failed to start on {}.",
        opencode_attach_url()
    ))
}

fn truncate_summary(summary: &str) -> String {
    if summary.len() <= MAX_PROMPT_CHARS {
        return summary.to_string();
    }
    format!("{}\n\n[summary truncated]", &summary[..MAX_PROMPT_CHARS])
}

fn strip_ansi(text: &str) -> String {
    let mut out = String::with_capacity(text.len());
    let mut chars = text.chars().peekable();
    while let Some(ch) = chars.next() {
        if ch == '\u{1b}' {
            while let Some(&next) = chars.peek() {
                chars.next();
                if next.is_ascii_alphabetic() {
                    break;
                }
            }
            continue;
        }
        out.push(ch);
    }
    out
}

fn strip_markdown(text: &str) -> String {
    text.replace("**", "")
        .replace("__", "")
        .replace('`', "")
        .trim()
        .to_string()
}

fn strip_meta_prefix(text: &str) -> String {
    let lower = text.to_lowercase();
    let meta_markers = [
        "commit title:",
        "stash title:",
        "terminal title:",
        "session title:",
        "the task returned",
        "the agent generated",
        "here is the",
        "here's the",
        "generated commit",
        "generated stash",
        "proposed commit",
        "proposed stash",
        "commit message:",
        "stash message:",
        "message:",
    ];
    for marker in meta_markers {
        if let Some(index) = lower.find(marker) {
            return text[index + marker.len()..].trim().to_string();
        }
    }
    text.trim().to_string()
}

pub fn is_unacceptable_message(text: &str) -> bool {
    is_unacceptable_message_with_limits(
        text,
        MIN_MESSAGE_LEN,
        MAX_MESSAGE_CHARS,
        MAX_MESSAGE_WORDS,
    )
}

pub fn is_unacceptable_terminal_message(text: &str) -> bool {
    is_unacceptable_message_with_limits(
        text,
        MIN_TERMINAL_MESSAGE_LEN,
        MAX_TERMINAL_MESSAGE_CHARS,
        MAX_TERMINAL_MESSAGE_WORDS,
    )
}

fn is_unacceptable_message_with_limits(
    text: &str,
    min_len: usize,
    max_chars: usize,
    max_words: usize,
) -> bool {
    let trimmed = text.trim();
    if trimmed.len() < min_len || trimmed.len() > max_chars {
        return true;
    }
    if trimmed.ends_with(':') {
        return true;
    }
    if trimmed.split_whitespace().count() > max_words {
        return true;
    }
    if trimmed.contains('/') || trimmed.contains('\\') {
        return true;
    }

    let lower = trimmed.to_lowercase();
    const MARKERS: &[&str] = &[
        "returned empty",
        "returned this",
        "the task",
        "no commit message",
        "no stash message",
        "failed to generate",
        "generation task",
        "for the uncommitted",
        "uncommitted changes",
        "the diff",
        "diff shows",
        "files changed",
        "this covers",
        "covers the",
        "changes in the",
        "three changes",
        "following changes",
        "output only",
        " more files",
        " more file",
    ];
    MARKERS.iter().any(|marker| lower.contains(marker))
}

fn clamp_message(text: &str) -> String {
    clamp_message_with_limit(text, MAX_MESSAGE_CHARS)
}

fn clamp_message_with_limit(text: &str, max_chars: usize) -> String {
    let trimmed = text.trim();
    if trimmed.len() <= max_chars {
        return trimmed.to_string();
    }
    let mut end = max_chars;
    while end > 0 && !trimmed.is_char_boundary(end) {
        end -= 1;
    }
    let slice = trimmed[..end].trim_end();
    if let Some(space) = slice.rfind(' ') {
        slice[..space].trim().to_string()
    } else {
        slice.to_string()
    }
}

fn normalize_line(line: &str) -> String {
    let mut candidate = strip_meta_prefix(line);
    candidate = strip_markdown(&candidate);
    candidate = candidate
        .trim_matches('"')
        .trim_matches('\'')
        .trim_matches('.')
        .trim()
        .to_string();
    candidate
        .split('\n')
        .next()
        .unwrap_or("")
        .trim()
        .to_string()
}

fn sanitize_title(raw: &str, empty_label: &str) -> Result<String, String> {
    sanitize_title_with_limits(
        raw,
        empty_label,
        MAX_MESSAGE_CHARS,
        is_unacceptable_message,
        clamp_message,
    )
}

fn sanitize_terminal_title(raw: &str, empty_label: &str) -> Result<String, String> {
    sanitize_title_with_limits(
        raw,
        empty_label,
        MAX_TERMINAL_MESSAGE_CHARS,
        is_unacceptable_terminal_message,
        |text| clamp_message_with_limit(text, MAX_TERMINAL_MESSAGE_CHARS),
    )
}

fn sanitize_title_with_limits(
    raw: &str,
    empty_label: &str,
    _max_chars: usize,
    is_unacceptable: fn(&str) -> bool,
    clamp: fn(&str) -> String,
) -> Result<String, String> {
    let cleaned = strip_ansi(raw).replace("```", "").trim().to_string();
    if cleaned.is_empty() {
        return Err(format!("OpenCode returned an empty {empty_label}."));
    }

    let mut candidates: Vec<String> = cleaned
        .lines()
        .map(str::trim)
        .filter(|line| !line.is_empty())
        .map(normalize_line)
        .filter(|line| !line.is_empty())
        .map(|line| clamp(&line))
        .filter(|line| !line.is_empty())
        .collect();

    if candidates.is_empty() {
        candidates.push(clamp(&normalize_line(&cleaned)));
    }

    candidates.sort_by_key(|line| line.len());

    for candidate in candidates {
        if is_unacceptable(&candidate) {
            continue;
        }
        return Ok(candidate);
    }

    Err(format!(
        "OpenCode returned meta text instead of a {empty_label}."
    ))
}

#[cfg(test)]
mod tests {
    use super::{
        is_unacceptable_message, is_unacceptable_terminal_message, parse_opencode_version,
        redact_terminal_secrets, sanitize_terminal_title, sanitize_title, version_at_least,
    };

    #[test]
    fn parses_opencode_version() {
        assert_eq!(parse_opencode_version("1.16.2\n"), Some((1, 16, 2)));
        assert_eq!(parse_opencode_version("1.15.5"), Some((1, 15, 5)));
    }

    #[test]
    fn compares_opencode_versions() {
        assert!(version_at_least((1, 16, 0), (1, 16, 0)));
        assert!(version_at_least((1, 16, 2), (1, 16, 0)));
        assert!(!version_at_least((1, 15, 5), (1, 16, 0)));
    }

    #[test]
    fn keeps_short_plain_message() {
        let message =
            sanitize_title("Fix unpushed commit detection", "commit message").expect("ok");
        assert_eq!(message, "Fix unpushed commit detection");
    }

    #[test]
    fn rejects_run_on_summary() {
        let raw = "This covers the three changes in the diff: simplified prompt wording";
        assert!(is_unacceptable_message(raw));
        assert!(sanitize_title(raw, "commit message").is_err());
    }

    #[test]
    fn picks_shortest_valid_line() {
        let raw = "Here is a long explanation of every file that was edited in detail\nFix commit prompts";
        let message = sanitize_title(raw, "commit message").expect("ok");
        assert_eq!(message, "Fix commit prompts");
    }

    #[test]
    fn clamps_overlong_line() {
        let raw = "Add comprehensive validation and retry logic for OpenCode commit message generation pipeline";
        let message = sanitize_title(raw, "commit message").expect("ok");
        assert!(message.len() <= 72);
    }

    #[test]
    fn keeps_short_terminal_title() {
        let message = sanitize_terminal_title("Run test suite", "terminal title").expect("ok");
        assert_eq!(message, "Run test suite");
        assert!(message.len() <= 40);
    }

    #[test]
    fn rejects_overlong_terminal_title() {
        let raw = "Investigate and fix sidebar terminal label generation pipeline";
        assert!(is_unacceptable_terminal_message(raw));
    }

    #[test]
    fn redacts_secret_lines() {
        let raw = "export TOKEN=abc123\npnpm test";
        let redacted = redact_terminal_secrets(raw);
        assert!(redacted.contains("[redacted]"));
        assert!(redacted.contains("pnpm test"));
    }
}

fn run_opencode(binary: &Path, repo_path: &str, args: &[&str]) -> Result<String, String> {
    let mut child = Command::new(binary)
        .args(args)
        .current_dir(repo_path)
        .stdin(Stdio::null())
        .stdout(Stdio::piped())
        .stderr(Stdio::piped())
        .spawn()
        .map_err(|e| format!("Failed to run OpenCode: {e}"))?;

    let started = Instant::now();
    let status = loop {
        match child.try_wait() {
            Ok(Some(status)) => break status,
            Ok(None) => {
                if started.elapsed() > OPENCODE_TIMEOUT {
                    let _ = child.kill();
                    let _ = child.wait();
                    return Err("OpenCode timed out. Use Write commit or try again.".to_string());
                }
                std::thread::sleep(Duration::from_millis(200));
            }
            Err(e) => return Err(format!("Failed while waiting for OpenCode: {e}")),
        }
    };

    let mut stdout = child
        .stdout
        .take()
        .ok_or_else(|| "OpenCode stdout unavailable.".to_string())?;
    let mut stderr = child
        .stderr
        .take()
        .ok_or_else(|| "OpenCode stderr unavailable.".to_string())?;
    let mut out = String::new();
    let mut err = String::new();
    stdout
        .read_to_string(&mut out)
        .map_err(|e| format!("Failed to read OpenCode stdout: {e}"))?;
    stderr
        .read_to_string(&mut err)
        .map_err(|e| format!("Failed to read OpenCode stderr: {e}"))?;

    if status.success() {
        return Ok(out);
    }

    let detail = err.trim();
    let detail = if detail.is_empty() {
        out.trim()
    } else {
        detail
    };
    Err(if detail.is_empty() {
        "OpenCode failed to generate a message.".to_string()
    } else {
        format!("OpenCode failed: {detail}")
    })
}

fn run_opencode_title(
    binary: &Path,
    repo_path: &str,
    model: &str,
    prompt: &str,
) -> Result<String, String> {
    ensure_opencode_server(binary)?;

    let attach = opencode_attach_url();
    let args = [
        "run",
        "--dir",
        repo_path,
        "--attach",
        attach.as_str(),
        "--dangerously-skip-permissions",
        "--pure",
        "-m",
        model,
        prompt,
    ];

    run_opencode(binary, repo_path, &args)
}

fn generate_title_with_retries(
    repo: &Path,
    summary: &str,
    prompt_prefix: &str,
    previous_title: Option<&str>,
    empty_label: &str,
    failure_label: &str,
) -> Result<String, String> {
    let repo_path = repo
        .to_str()
        .ok_or_else(|| "Repository path is not valid UTF-8.".to_string())?;

    if summary.trim().is_empty() {
        return Err("No local changes to describe.".to_string());
    }

    let binary = resolve_opencode_binary()?;
    let prompt = compose_title_prompt(prompt_prefix, summary, previous_title);
    let mut last_error = String::from("OpenCode did not return a usable title.");

    for attempt in 1..=MAX_GENERATION_ATTEMPTS {
        let model = OPENCODE_TITLE_MODELS
            [(attempt as usize - 1) % OPENCODE_TITLE_MODELS.len()];
        match run_opencode_title(&binary, repo_path, model, &prompt) {
            Ok(raw) => match sanitize_title(&raw, empty_label) {
                Ok(message) if !is_unacceptable_message(&message) => return Ok(message),
                Ok(_) => {
                    last_error = format!("OpenCode returned meta text instead of a {empty_label}.");
                }
                Err(err) => last_error = err,
            },
            Err(err) => last_error = err,
        }

        if attempt < MAX_GENERATION_ATTEMPTS {
            std::thread::sleep(Duration::from_millis(RETRY_DELAY_MS * attempt as u64));
        }
    }

    Err(format!(
        "Failed to generate a {failure_label} after {MAX_GENERATION_ATTEMPTS} attempts. {last_error}"
    ))
}

pub fn generate_commit_message(
    repo: &Path,
    summary: &str,
    previous_title: Option<&str>,
) -> Result<String, String> {
    generate_title_with_retries(
        repo,
        summary,
        COMMIT_TITLE_PROMPT,
        previous_title,
        "commit message",
        "commit message",
    )
}

pub fn generate_stash_message(
    repo: &Path,
    summary: &str,
    previous_title: Option<&str>,
) -> Result<String, String> {
    generate_title_with_retries(
        repo,
        summary,
        STASH_TITLE_PROMPT,
        previous_title,
        "stash message",
        "stash message",
    )
}

fn generate_terminal_title_with_retries(
    repo: &Path,
    summary: &str,
    process_hint: Option<&str>,
    previous_title: Option<&str>,
) -> Result<String, String> {
    let repo_path = repo
        .to_str()
        .ok_or_else(|| "Repository path is not valid UTF-8.".to_string())?;

    if summary.trim().is_empty() {
        return Err("No terminal context to describe.".to_string());
    }

    let binary = resolve_opencode_binary()?;
    let prompt = compose_terminal_title_prompt(summary, process_hint, previous_title);
    let mut last_error = String::from("OpenCode did not return a usable title.");

    for attempt in 1..=MAX_GENERATION_ATTEMPTS {
        let model = OPENCODE_TITLE_MODELS
            [(attempt as usize - 1) % OPENCODE_TITLE_MODELS.len()];
        match run_opencode_title(&binary, repo_path, model, &prompt) {
            Ok(raw) => match sanitize_terminal_title(&raw, "terminal title") {
                Ok(message) if !is_unacceptable_terminal_message(&message) => return Ok(message),
                Ok(_) => {
                    last_error =
                        "OpenCode returned meta text instead of a terminal title.".to_string();
                }
                Err(err) => last_error = err,
            },
            Err(err) => last_error = err,
        }

        if attempt < MAX_GENERATION_ATTEMPTS {
            std::thread::sleep(Duration::from_millis(RETRY_DELAY_MS * attempt as u64));
        }
    }

    Err(format!(
        "Failed to generate a terminal title after {MAX_GENERATION_ATTEMPTS} attempts. {last_error}"
    ))
}

pub fn generate_terminal_title(
    repo: &Path,
    summary: &str,
    process_hint: Option<&str>,
    previous_title: Option<&str>,
) -> Result<String, String> {
    generate_terminal_title_with_retries(repo, summary, process_hint, previous_title)
}

pub fn validate_generated_message(message: &str, label: &str) -> Result<(), String> {
    let trimmed = message.trim();
    if trimmed.is_empty() {
        return Err(format!("{label} cannot be empty."));
    }
    if is_unacceptable_message(trimmed) {
        return Err(format!(
            "{label} is too long or looks like AI preamble. Use Write commit or try again."
        ));
    }
    Ok(())
}
