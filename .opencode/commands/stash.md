---
description: Generate a simple one-sentence git stash message for uncommitted changes
subtask: true
---

Write one simple grammatical sentence describing what is being stashed.

Output only that sentence — no preamble, explanation, quotes, markdown, file lists, or labels.

Uncommitted diff:
!`git diff HEAD --no-color`

Status:
!`git status --short --untracked-files=normal`
