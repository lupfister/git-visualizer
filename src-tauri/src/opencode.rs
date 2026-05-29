use std::io::Read;
use std::net::{SocketAddr, TcpStream};
use std::path::{Path, PathBuf};
use std::process::{Command, Stdio};
use std::time::{Duration, Instant};

const MAX_PROMPT_CHARS: usize = 8_000;
const MAX_GENERATION_ATTEMPTS: u32 = 3;
const RETRY_DELAY_MS: u64 = 400;
const MAX_MESSAGE_CHARS: usize = 72;
const MAX_MESSAGE_WORDS: usize = 12;
const MIN_MESSAGE_LEN: usize = 6;
const OPENCODE_TIMEOUT: Duration = Duration::from_secs(90);
const OPENCODE_ATTACH_URL: &str = "http://127.0.0.1:4096";

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

fn compose_title_prompt(base: &str, summary: &str, previous_title: Option<&str>) -> String {
    let mut prompt = base.to_string();
    if let Some(previous) = previous_title.map(str::trim).filter(|value| !value.is_empty()) {
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
    "OpenCode CLI not found. Install with: npm i -g opencode-ai".to_string()
}

fn opencode_server_available() -> bool {
    let addr: SocketAddr = "127.0.0.1:4096".parse().unwrap();
    TcpStream::connect_timeout(&addr, Duration::from_millis(250)).is_ok()
}

fn truncate_summary(summary: &str) -> String {
    if summary.len() <= MAX_PROMPT_CHARS {
        return summary.to_string();
    }
    format!(
        "{}\n\n[summary truncated]",
        &summary[..MAX_PROMPT_CHARS]
    )
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
    let trimmed = text.trim();
    if trimmed.len() < MIN_MESSAGE_LEN || trimmed.len() > MAX_MESSAGE_CHARS {
        return true;
    }
    if trimmed.ends_with(':') {
        return true;
    }
    if trimmed.split_whitespace().count() > MAX_MESSAGE_WORDS {
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
    let trimmed = text.trim();
    if trimmed.len() <= MAX_MESSAGE_CHARS {
        return trimmed.to_string();
    }
    let mut end = MAX_MESSAGE_CHARS;
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
    candidate.split('\n').next().unwrap_or("").trim().to_string()
}

fn sanitize_title(raw: &str, empty_label: &str) -> Result<String, String> {
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
        .map(|line| clamp_message(&line))
        .filter(|line| !line.is_empty())
        .collect();

    if candidates.is_empty() {
        candidates.push(clamp_message(&normalize_line(&cleaned)));
    }

    candidates.sort_by_key(|line| line.len());

    for candidate in candidates {
        if is_unacceptable_message(&candidate) {
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
    use super::{is_unacceptable_message, sanitize_title};

    #[test]
    fn keeps_short_plain_message() {
        let message = sanitize_title("Fix unpushed commit detection", "commit message").expect("ok");
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
                    return Err(
                        "OpenCode timed out. Use Write commit or try again.".to_string(),
                    );
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
    let detail = if detail.is_empty() { out.trim() } else { detail };
    Err(if detail.is_empty() {
        "OpenCode failed to generate a message.".to_string()
    } else {
        format!("OpenCode failed: {detail}")
    })
}

fn run_opencode_title(
    binary: &Path,
    repo_path: &str,
    prompt: &str,
) -> Result<String, String> {
    let attach = opencode_server_available();

    let mut args: Vec<&str> = vec!["run", "--dir", repo_path];
    if attach {
        args.push("--attach");
        args.push(OPENCODE_ATTACH_URL);
    }
    args.push("--dangerously-skip-permissions");
    args.push(prompt);

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
        match run_opencode_title(&binary, repo_path, &prompt) {
            Ok(raw) => match sanitize_title(&raw, empty_label) {
                Ok(message) if !is_unacceptable_message(&message) => return Ok(message),
                Ok(_) => {
                    last_error =
                        format!("OpenCode returned meta text instead of a {empty_label}.");
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
