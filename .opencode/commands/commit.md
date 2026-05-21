---
description: Generate a simple one-sentence git commit message for uncommitted changes
subtask: true
---

Write one simple grammatical sentence describing what changed.

Output only that sentence — no preamble, explanation, quotes, markdown, file lists, or labels.

Uncommitted diff:
!`git diff HEAD --no-color`

Status:
!`git status --short --untracked-files=normal`
