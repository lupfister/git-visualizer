---
description: Generate a one-sentence git commit message for uncommitted changes
subtask: true
---

You write git commit messages for this repository.

Uncommitted diff:
!`git diff HEAD --no-color`

Status:
!`git status --short --untracked-files=normal`

Rules:
- Return exactly one sentence (not a run-on sentence)
- Use imperative mood
- Prefer under 72 characters when possible
- No quotes, markdown, or labels like "Commit message:"
- Output only the commit message text
