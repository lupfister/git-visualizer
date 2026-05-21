use std::io::Read;
use std::net::{SocketAddr, TcpStream};
use std::path::{Path, PathBuf};
use std::process::{Command, Stdio};
use std::time::{Duration, Instant};

const MAX_DIFF_CHARS: usize = 80_000;
const MAX_GENERATION_ATTEMPTS: u32 = 5;
const RETRY_DELAY_MS: u64 = 500;
const MIN_MESSAGE_LEN: usize = 8;
const OPENCODE_TIMEOUT: Duration = Duration::from_secs(120);
const OPENCODE_ATTACH_URL: &str = "http://127.0.0.1:4096";

const INLINE_COMMIT_PROMPT: &str = "Write one simple grammatical sentence describing what changed in this diff.\n\
Output only that sentence — no preamble, quotes, markdown, file lists, or labels.\n\n\
Diff:\n";

const INLINE_STASH_PROMPT: &str = "Write one simple grammatical sentence describing what is being stashed in this diff.\n\
Output only that sentence — no preamble, quotes, markdown, file lists, or labels.\n\n\
Diff:\n";

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

fn truncate_diff(diff: &str) -> String {
    if diff.len() <= MAX_DIFF_CHARS {
        return diff.to_string();
    }
    format!(
        "{}\n\n[diff truncated at {} chars]",
        &diff[..MAX_DIFF_CHARS],
        MAX_DIFF_CHARS
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

fn extract_quoted_strings(text: &str) -> Vec<String> {
    let mut quoted = Vec::new();
    let chars: Vec<char> = text.chars().collect();
    let mut index = 0;
    while index < chars.len() {
        let quote = chars[index];
        if quote != '"' && quote != '\'' {
            index += 1;
            continue;
        }
        index += 1;
        let start = index;
        while index < chars.len() && chars[index] != quote {
            if chars[index] == '\\' && index + 1 < chars.len() {
                index += 1;
            }
            index += 1;
        }
        if index < chars.len() {
            let value: String = chars[start..index].iter().collect();
            let trimmed = value.trim();
            if !trimmed.is_empty() {
                quoted.push(trimmed.to_string());
            }
        }
        index += 1;
    }
    quoted
}

fn strip_meta_prefix(text: &str) -> String {
    let lower = text.to_lowercase();
    let meta_markers = [
        "the task returned this commit message for the uncommitted changes:",
        "the task returned this stash message for the uncommitted changes:",
        "the task returned this commit message:",
        "the task returned this stash message:",
        "the task returned",
        "the agent generated the commit message:",
        "the agent generated a commit message:",
        "the agent generated the stash message:",
        "the agent generated a stash message:",
        "i generated the commit message:",
        "i generated the stash message:",
        "here is the commit message:",
        "here is the stash message:",
        "here's the commit message:",
        "here's the stash message:",
        "generated commit message:",
        "generated stash message:",
        "proposed commit message:",
        "proposed stash message:",
        "commit message:",
        "stash message:",
        "message:",
        "commit:",
        "stash:",
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
    if trimmed.len() < MIN_MESSAGE_LEN {
        return true;
    }
    if trimmed.ends_with(':') {
        return true;
    }

    let lower = trimmed.to_lowercase();
    const MARKERS: &[&str] = &[
        "returned empty output",
        "returned this commit message",
        "returned this stash message",
        "the task returned",
        "no commit message was produced",
        "no stash message was produced",
        "no message was produced",
        "failed to generate",
        "could not generate",
        "unable to generate",
        "generation task",
        "commit message generation",
        "stash message generation",
        "for the uncommitted changes",
        "uncommitted changes:",
        "the diff shows",
        "files changed:",
        "nothing else to output",
        "output only",
        "imperative mood",
        " more files",
        " more file",
        "update local changes",
    ];
    MARKERS.iter().any(|marker| lower.contains(marker))
}

fn normalize_line(line: &str) -> String {
    let mut candidate = strip_meta_prefix(line);
    let quoted = extract_quoted_strings(&candidate);
    if quoted.len() == 1 {
        candidate = quoted[0].clone();
    } else if quoted.len() > 1 {
        candidate = quoted
            .into_iter()
            .max_by_key(|value| value.len())
            .unwrap_or(candidate);
    }
    candidate = strip_markdown(&candidate);
    candidate = candidate
        .trim_matches('"')
        .trim_matches('\'')
        .trim()
        .to_string();
    candidate.split('\n').next().unwrap_or("").trim().to_string()
}

fn sanitize_single_line_message(raw: &str, empty_label: &str) -> Result<String, String> {
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
        .collect();

    if candidates.is_empty() {
        candidates.push(normalize_line(&cleaned));
    }

    candidates.sort_by_key(|b| std::cmp::Reverse(b.len()));

    for mut candidate in candidates {
        if candidate.ends_with('.') && candidate.len() > 3 {
            let words: Vec<&str> = candidate.split_whitespace().collect();
            if words.len() > 12 {
                candidate = candidate.trim_end_matches('.').to_string();
            }
        }

        if candidate.is_empty() || is_unacceptable_message(&candidate) {
            continue;
        }

        if candidate.contains('\n') {
            candidate = candidate.replace('\n', " ");
        }

        return Ok(candidate);
    }

    Err(format!(
        "OpenCode returned meta text instead of a {empty_label}."
    ))
}

#[cfg(test)]
mod tests {
    use super::{is_unacceptable_message, sanitize_single_line_message};

    #[test]
    fn strips_agent_meta_wrapper_and_markdown() {
        let raw = r#"The agent generated the commit message: **"Add auto-commit support with AI-generated commit messages"**."#;
        let message =
            sanitize_single_line_message(raw, "commit message").expect("message");
        assert_eq!(
            message,
            "Add auto-commit support with AI-generated commit messages"
        );
    }

    #[test]
    fn keeps_plain_message() {
        let raw = "Fix commit button loading state";
        let message =
            sanitize_single_line_message(raw, "commit message").expect("message");
        assert_eq!(message, "Fix commit button loading state");
    }

    #[test]
    fn rejects_failure_meta_message() {
        let raw = "The commit message generation task returned empty output — no commit message was produced. The diff shows three files changed.";
        let err = sanitize_single_line_message(raw, "commit message").unwrap_err();
        assert!(err.contains("meta text"));
        assert!(is_unacceptable_message(raw));
    }

    #[test]
    fn rejects_task_returned_preamble_only() {
        let raw = "The task returned this commit message for the uncommitted changes:";
        let err = sanitize_single_line_message(raw, "commit message").unwrap_err();
        assert!(err.contains("meta text"));
        assert!(is_unacceptable_message(raw));
    }

    #[test]
    fn picks_substantive_line_after_preamble() {
        let raw = "The task returned this commit message for the uncommitted changes:\n\nFix unpushed commit detection";
        let message =
            sanitize_single_line_message(raw, "commit message").expect("message");
        assert_eq!(message, "Fix unpushed commit detection");
    }

}

fn run_opencode(
    binary: &Path,
    repo_path: &str,
    args: &[&str],
) -> Result<String, String> {
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
                        "OpenCode timed out while generating a message. Try again or enter one manually."
                            .to_string(),
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

fn run_opencode_once(
    binary: &Path,
    repo_path: &str,
    command: &str,
    inline_prompt_prefix: &str,
    truncated_diff: &str,
) -> Result<String, String> {
    let attach = opencode_server_available();

    let mut command_args: Vec<&str> = vec!["run", "--dir", repo_path, "--command", command];
    if attach {
        command_args.push("--attach");
        command_args.push(OPENCODE_ATTACH_URL);
    }
    command_args.push("--dangerously-skip-permissions");

    let command_result = run_opencode(binary, repo_path, &command_args);
    let raw = match command_result {
        Ok(text) if !text.trim().is_empty() => text,
        _ => {
            let prompt = format!("{inline_prompt_prefix}{truncated_diff}");
            let mut inline_args: Vec<&str> = vec!["run", "--dir", repo_path];
            if attach {
                inline_args.push("--attach");
                inline_args.push(OPENCODE_ATTACH_URL);
            }
            inline_args.push("--dangerously-skip-permissions");
            inline_args.push(prompt.as_str());
            run_opencode(binary, repo_path, &inline_args)?
        }
    };

    Ok(raw)
}

fn generate_message_with_retries(
    repo: &Path,
    diff: &str,
    command: &str,
    inline_prompt_prefix: &str,
    empty_label: &str,
    failure_label: &str,
) -> Result<String, String> {
    let repo_path = repo
        .to_str()
        .ok_or_else(|| "Repository path is not valid UTF-8.".to_string())?;

    if diff.trim().is_empty() {
        return Err("No local changes to describe.".to_string());
    }

    let binary = resolve_opencode_binary()?;
    let truncated = truncate_diff(diff);
    let mut last_error = String::from("OpenCode did not return a usable message.");

    for attempt in 1..=MAX_GENERATION_ATTEMPTS {
        match run_opencode_once(
            &binary,
            repo_path,
            command,
            inline_prompt_prefix,
            &truncated,
        ) {
            Ok(raw) => match sanitize_single_line_message(&raw, empty_label) {
                Ok(message) if !is_unacceptable_message(&message) => return Ok(message),
                Ok(_) => {
                    last_error = format!(
                        "OpenCode returned meta text instead of a {empty_label}."
                    );
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

pub fn generate_commit_message(repo: &Path, diff: &str) -> Result<String, String> {
    generate_message_with_retries(
        repo,
        diff,
        "commit",
        INLINE_COMMIT_PROMPT,
        "commit message",
        "commit message",
    )
}

pub fn generate_stash_message(repo: &Path, diff: &str) -> Result<String, String> {
    generate_message_with_retries(
        repo,
        diff,
        "stash",
        INLINE_STASH_PROMPT,
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
            "{label} looks like AI preamble, not a real description. Use Write commit or try again."
        ));
    }
    Ok(())
}
