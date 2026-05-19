use std::io::Read;
use std::net::{SocketAddr, TcpStream};
use std::path::{Path, PathBuf};
use std::process::{Command, Stdio};
use std::time::{Duration, Instant};

const MAX_DIFF_CHARS: usize = 80_000;
const OPENCODE_TIMEOUT: Duration = Duration::from_secs(120);
const OPENCODE_ATTACH_URL: &str = "http://127.0.0.1:4096";

const INLINE_COMMIT_PROMPT: &str = "Output ONLY the raw git commit message text — nothing else.\n\
No preamble (never say \"the agent generated\" or similar). No quotes. No markdown. One sentence, imperative mood.\n\n\
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
        "the agent generated the commit message:",
        "the agent generated a commit message:",
        "i generated the commit message:",
        "here is the commit message:",
        "here's the commit message:",
        "generated commit message:",
        "proposed commit message:",
        "commit message:",
        "message:",
        "commit:",
    ];
    for marker in meta_markers {
        if let Some(index) = lower.find(marker) {
            return text[index + marker.len()..].trim().to_string();
        }
    }
    text.trim().to_string()
}

fn sanitize_commit_message(raw: &str) -> Result<String, String> {
    let cleaned = strip_ansi(raw).replace("```", "").trim().to_string();

    let first_line = cleaned
        .lines()
        .map(str::trim)
        .find(|line| !line.is_empty())
        .unwrap_or("")
        .to_string();

    let mut candidate = strip_meta_prefix(&first_line);
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
    candidate = candidate.trim_matches('"').trim_matches('\'').trim().to_string();
    candidate = candidate.split('\n').next().unwrap_or("").trim().to_string();

    if candidate.ends_with('.') && candidate.len() > 3 {
        let words: Vec<&str> = candidate.split_whitespace().collect();
        if words.len() > 12 {
            candidate = candidate.trim_end_matches('.').to_string();
        }
    }

    if candidate.is_empty() {
        return Err("OpenCode returned an empty commit message.".to_string());
    }

    if candidate.contains('\n') {
        candidate = candidate.replace('\n', " ");
    }

    Ok(candidate)
}

#[cfg(test)]
mod tests {
    use super::sanitize_commit_message;

    #[test]
    fn strips_agent_meta_wrapper_and_markdown() {
        let raw = r#"The agent generated the commit message: **"Add auto-commit support with AI-generated commit messages"**."#;
        let message = sanitize_commit_message(raw).expect("message");
        assert_eq!(
            message,
            "Add auto-commit support with AI-generated commit messages"
        );
    }

    #[test]
    fn keeps_plain_message() {
        let raw = "Fix commit button loading state";
        let message = sanitize_commit_message(raw).expect("message");
        assert_eq!(message, "Fix commit button loading state");
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
                        "OpenCode timed out while generating a commit message. Try Write commit."
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
        "OpenCode failed to generate a commit message.".to_string()
    } else {
        format!("OpenCode failed: {detail}")
    })
}

pub fn generate_commit_message(repo: &Path, diff: &str) -> Result<String, String> {
    let repo_path = repo
        .to_str()
        .ok_or_else(|| "Repository path is not valid UTF-8.".to_string())?;

    if diff.trim().is_empty() {
        return Err("No local changes to describe.".to_string());
    }

    let binary = resolve_opencode_binary()?;
    let truncated = truncate_diff(diff);
    let attach = opencode_server_available();

    let mut command_args: Vec<&str> = vec!["run", "--dir", repo_path, "--command", "commit"];
    if attach {
        command_args.push("--attach");
        command_args.push(OPENCODE_ATTACH_URL);
    }
    command_args.push("--dangerously-skip-permissions");

    let command_result = run_opencode(&binary, repo_path, &command_args);
    let raw = match command_result {
        Ok(text) if !text.trim().is_empty() => text,
        _ => {
            let prompt = format!("{INLINE_COMMIT_PROMPT}{truncated}");
            let mut inline_args: Vec<&str> = vec!["run", "--dir", repo_path];
            if attach {
                inline_args.push("--attach");
                inline_args.push(OPENCODE_ATTACH_URL);
            }
            inline_args.push("--dangerously-skip-permissions");
            inline_args.push(prompt.as_str());
            run_opencode(&binary, repo_path, &inline_args)?
        }
    };

    sanitize_commit_message(&raw)
}
