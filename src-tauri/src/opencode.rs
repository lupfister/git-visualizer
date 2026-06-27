use std::io::Read;
use std::path::{Path, PathBuf};
use std::process::{Command, Stdio};
use std::sync::{Mutex, OnceLock};
use std::time::{Duration, Instant};

const MAX_PROMPT_CHARS: usize = 8_000;
const RETRY_DELAY_MS: u64 = 300;
const MAX_MESSAGE_CHARS: usize = 72;
const MAX_TERMINAL_MESSAGE_CHARS: usize = 40;
const MAX_MESSAGE_WORDS: usize = 12;
const MAX_TERMINAL_MESSAGE_WORDS: usize = 8;
const MIN_MESSAGE_LEN: usize = 6;
const MIN_TERMINAL_MESSAGE_LEN: usize = 3;
const OPENCODE_TIMEOUT: Duration = Duration::from_secs(25);
const MODEL_CACHE_TTL: Duration = Duration::from_secs(600);
const MAX_TITLE_MODEL_ATTEMPTS: usize = 8;
/// Minimum CLI version — 1.15.x had broken big-pickle routing; keep OpenCode up to date.
const OPENCODE_MIN_VERSION: (u32, u32, u32) = (1, 16, 0);

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

const SQUASH_TITLE_PROMPT: &str = "\
You write git squash commit messages.\n\
\n\
Rules:\n\
- Output a clear commit title (at most 72 characters) on the first line.\n\
- Add a blank line, followed by a bulleted list or a few short paragraphs summarizing the logical changes and combined intent of all squashed commits.\n\
- High-level purpose only — do not list trivial files, paths, or boilerplate.\n\
- No preamble, explanation, quotes, or markdown code blocks.\n";

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
    if let Some(hint) = process_hint
        .map(str::trim)
        .filter(|value| !value.is_empty())
    {
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

fn parse_opencode_version(raw: &str) -> Option<(u32, u32, u32)> {
    let digits: Vec<u32> = raw
        .split('.')
        .filter_map(|part| {
            part.chars()
                .take_while(|ch| ch.is_ascii_digit())
                .collect::<String>()
                .parse()
                .ok()
        })
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

static TITLE_MODEL_CACHE: OnceLock<Mutex<Option<(Instant, Vec<String>)>>> = OnceLock::new();

fn parse_models_from_output(raw: &str) -> Vec<String> {
    strip_ansi(raw)
        .lines()
        .map(str::trim)
        .filter(|line| !line.is_empty())
        .filter(|line| line.contains('/'))
        .filter(|line| !line.starts_with('{'))
        .map(str::to_string)
        .collect()
}

fn rank_title_model(model: &str) -> (u8, u8, u8, String) {
    let (provider, id) = model.split_once('/').unwrap_or(("", model));
    let provider_rank = if provider == "opencode" { 0 } else { 1 };
    let free_rank = if id.contains("-free") { 0 } else { 1 };
    let speed_rank = if id.contains("flash") {
        0
    } else if id.contains("mini") || id.contains("mimo") || id.contains("nano") {
        1
    } else {
        2
    };
    (provider_rank, free_rank, speed_rank, id.to_string())
}

fn sort_title_models(mut models: Vec<String>) -> Vec<String> {
    models.sort_by_key(|model| rank_title_model(model));
    models.dedup();
    models
}

fn list_title_models(binary: &Path, refresh: bool) -> Result<Vec<String>, String> {
    ensure_opencode_version(binary)?;

    let mut args = vec!["models", "--pure"];
    if refresh {
        args.push("--refresh");
    }

    let output = Command::new(binary)
        .args(&args)
        .stdin(Stdio::null())
        .stdout(Stdio::piped())
        .stderr(Stdio::piped())
        .output()
        .map_err(|e| format!("Failed to list OpenCode models: {e}"))?;

    if !output.status.success() {
        let detail = String::from_utf8_lossy(&output.stderr).trim().to_string();
        return Err(if detail.is_empty() {
            "Failed to list OpenCode models.".to_string()
        } else {
            format!("Failed to list OpenCode models: {detail}")
        });
    }

    let stdout = String::from_utf8_lossy(&output.stdout);
    let models = sort_title_models(parse_models_from_output(&stdout));
    if models.is_empty() {
        return Err(
            "OpenCode returned no models. Connect a provider with: opencode providers".to_string(),
        );
    }
    Ok(models)
}

fn resolve_title_models(binary: &Path, force_refresh: bool) -> Result<Vec<String>, String> {
    let cache = TITLE_MODEL_CACHE.get_or_init(|| Mutex::new(None));
    let mut guard = cache
        .lock()
        .map_err(|_| "OpenCode model cache lock poisoned.".to_string())?;

    if !force_refresh {
        if let Some((fetched_at, models)) = guard.as_ref() {
            if fetched_at.elapsed() < MODEL_CACHE_TTL && !models.is_empty() {
                return Ok(models.clone());
            }
        }
    }

    let models = list_title_models(binary, true)?;
    *guard = Some((Instant::now(), models.clone()));
    Ok(models)
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
    is_unacceptable_message_with_limits(text, MIN_MESSAGE_LEN, MAX_MESSAGE_CHARS, MAX_MESSAGE_WORDS)
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
        is_unacceptable_message, is_unacceptable_terminal_message, parse_models_from_output,
        parse_opencode_version, rank_title_model, redact_terminal_secrets, sanitize_terminal_title,
        sanitize_title, sort_title_models, version_at_least,
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

    #[test]
    fn parses_models_from_cli_output() {
        let raw = "\u{1b}[92mModels cache refreshed\u{1b}[0m\nopencode/big-pickle\nopencode/deepseek-v4-flash-free\n";
        let models = parse_models_from_output(raw);
        assert_eq!(models.len(), 2);
        assert!(models.contains(&"opencode/big-pickle".to_string()));
    }

    #[test]
    fn prefers_free_opencode_models() {
        let models = sort_title_models(vec![
            "opencode/big-pickle".to_string(),
            "opencode/deepseek-v4-flash-free".to_string(),
            "anthropic/claude-haiku-4-5".to_string(),
        ]);
        assert_eq!(models[0], "opencode/deepseek-v4-flash-free");
        assert_eq!(models[1], "opencode/big-pickle");
        assert_eq!(models[2], "anthropic/claude-haiku-4-5");
    }

    #[test]
    fn ranks_flash_models_before_heavier_free_models() {
        let (_, _, flash_rank, _) = rank_title_model("opencode/deepseek-v4-flash-free");
        let (_, _, mimo_rank, _) = rank_title_model("opencode/mimo-v2.5-free");
        assert!(flash_rank <= mimo_rank);
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

fn run_opencode_prompt(
    binary: &Path,
    repo_path: &str,
    model: &str,
    prompt: &str,
) -> Result<String, String> {
    ensure_opencode_version(binary)?;

    let inline_args = [
        "run",
        "--dir",
        repo_path,
        "--dangerously-skip-permissions",
        "--pure",
        "-m",
        model,
        prompt,
    ];
    run_opencode(binary, repo_path, &inline_args)
}

fn run_opencode_for_title(
    binary: &Path,
    repo_path: &str,
    command: &str,
    model: &str,
    prompt: &str,
) -> Result<String, String> {
    ensure_opencode_version(binary)?;

    let command_args = [
        "run",
        "--dir",
        repo_path,
        "--command",
        command,
        "--dangerously-skip-permissions",
        "--pure",
        "-m",
        model,
    ];
    match run_opencode(binary, repo_path, &command_args) {
        Ok(raw) if !raw.trim().is_empty() => Ok(raw),
        _ => {
            let inline_args = [
                "run",
                "--dir",
                repo_path,
                "--dangerously-skip-permissions",
                "--pure",
                "-m",
                model,
                prompt,
            ];
            run_opencode(binary, repo_path, &inline_args)
        }
    }
}

fn try_title_models<F>(
    binary: &Path,
    repo_path: &str,
    models: &[String],
    mut attempt: F,
) -> Result<String, String>
where
    F: FnMut(&Path, &str, &str) -> Result<String, String>,
{
    let mut last_error = String::from("OpenCode did not return a usable title.");
    for (index, model) in models.iter().take(MAX_TITLE_MODEL_ATTEMPTS).enumerate() {
        match attempt(binary, repo_path, model) {
            Ok(raw) => return Ok(raw),
            Err(err) => last_error = err,
        }
        if index + 1 < models.len().min(MAX_TITLE_MODEL_ATTEMPTS) {
            std::thread::sleep(Duration::from_millis(RETRY_DELAY_MS * (index as u64 + 1)));
        }
    }
    Err(last_error)
}

fn generate_title_with_retries(
    repo: &Path,
    summary: &str,
    command: &str,
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
    let mut models = resolve_title_models(&binary, false)?;
    let mut refreshed = false;

    loop {
        let attempt_error =
            match try_title_models(&binary, repo_path, &models, |binary, repo_path, model| {
                run_opencode_for_title(binary, repo_path, command, model, &prompt)
            }) {
                Ok(raw) => match sanitize_title(&raw, empty_label) {
                    Ok(message) if !is_unacceptable_message(&message) => return Ok(message),
                    Ok(_) => format!("OpenCode returned meta text instead of a {empty_label}."),
                    Err(err) => err,
                },
                Err(err) => err,
            };

        if !refreshed {
            refreshed = true;
            models = resolve_title_models(&binary, true)?;
            continue;
        }

        return Err(format!(
            "Failed to generate a {failure_label} after trying {} model(s). {attempt_error}",
            models.len().min(MAX_TITLE_MODEL_ATTEMPTS)
        ));
    }
}

pub fn generate_commit_message(
    repo: &Path,
    summary: &str,
    previous_title: Option<&str>,
) -> Result<String, String> {
    generate_title_with_retries(
        repo,
        summary,
        "commit",
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
        "stash",
        STASH_TITLE_PROMPT,
        previous_title,
        "stash message",
        "stash message",
    )
}

pub fn generate_squash_message(repo: &Path, summary: &str) -> Result<String, String> {
    let repo_path = repo
        .to_str()
        .ok_or_else(|| "Repository path is not valid UTF-8.".to_string())?;

    if summary.trim().is_empty() {
        return Err("No commits to describe.".to_string());
    }

    let binary = resolve_opencode_binary()?;
    let prompt = compose_title_prompt(SQUASH_TITLE_PROMPT, summary, None);
    let mut models = resolve_title_models(&binary, false)?;
    let mut refreshed = false;

    loop {
        let attempt_error =
            match try_title_models(&binary, repo_path, &models, |binary, repo_path, model| {
                run_opencode_prompt(binary, repo_path, model, &prompt)
            }) {
                Ok(raw) => match sanitize_squash_message(&raw) {
                    Ok(message) if !is_unacceptable_squash_message(&message) => return Ok(message),
                    Ok(_) => "OpenCode returned meta text instead of a squash message.".to_string(),
                    Err(err) => err,
                },
                Err(err) => err,
            };

        if !refreshed {
            refreshed = true;
            models = resolve_title_models(&binary, true)?;
            continue;
        }

        return Err(format!(
            "Failed to generate a squash message after trying {} model(s). {attempt_error}",
            models.len().min(MAX_TITLE_MODEL_ATTEMPTS)
        ));
    }
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
    let mut models = resolve_title_models(&binary, false)?;
    let mut refreshed = false;

    loop {
        let attempt_error =
            match try_title_models(&binary, repo_path, &models, |binary, repo_path, model| {
                run_opencode_prompt(binary, repo_path, model, &prompt)
            }) {
                Ok(raw) => match sanitize_terminal_title(&raw, "terminal title") {
                    Ok(message) if !is_unacceptable_terminal_message(&message) => {
                        return Ok(message)
                    }
                    Ok(_) => "OpenCode returned meta text instead of a terminal title.".to_string(),
                    Err(err) => err,
                },
                Err(err) => err,
            };

        if !refreshed {
            refreshed = true;
            models = resolve_title_models(&binary, true)?;
            continue;
        }

        return Err(format!(
            "Failed to generate a terminal title after trying {} model(s). {attempt_error}",
            models.len().min(MAX_TITLE_MODEL_ATTEMPTS)
        ));
    }
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
    if label == "Squash message" {
        if is_unacceptable_squash_message(trimmed) {
            return Err(format!(
                "{label} is invalid or looks like AI preamble. Try again."
            ));
        }
    } else {
        if is_unacceptable_message(trimmed) {
            return Err(format!(
                "{label} is too long or looks like AI preamble. Use Write commit or try again."
            ));
        }
    }
    Ok(())
}

pub fn is_unacceptable_squash_message(text: &str) -> bool {
    let trimmed = text.trim();
    if trimmed.len() < 6 || trimmed.len() > 1200 {
        return true;
    }
    if trimmed.split_whitespace().count() > 200 {
        return true;
    }
    let lower = trimmed.to_lowercase();
    const MARKERS: &[&str] = &[
        "returned empty",
        "returned this",
        "failed to generate",
        "generation task",
    ];
    MARKERS.iter().any(|marker| lower.contains(marker))
}

pub fn sanitize_squash_message(raw: &str) -> Result<String, String> {
    let cleaned = strip_ansi(raw)
        .replace("```", "")
        .replace("\"", "")
        .replace("'", "")
        .trim()
        .to_string();
    if cleaned.is_empty() {
        return Err("OpenCode returned an empty squash message.".to_string());
    }
    if is_unacceptable_squash_message(&cleaned) {
        return Err("OpenCode returned unacceptable squash message.".to_string());
    }
    Ok(cleaned)
}
