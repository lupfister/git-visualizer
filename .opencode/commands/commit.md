---
description: Generate a one-sentence git commit message for uncommitted changes
subtask: true
---

Output ONLY the raw git commit message — a single sentence in imperative mood.

Never include preamble, explanation, or meta text (e.g. never say "the agent generated").
Never use quotes, markdown, or labels.

Uncommitted diff:
!`git diff HEAD --no-color`

Status:
!`git status --short --untracked-files=normal`
