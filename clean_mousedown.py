import re

path = "/Users/luca/cursor/git-visualizer/components/BranchMap.tsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Remove the canPan block
content = re.sub(
    r'    const canPan = e\.button === 1 \|\| \(e\.button === 0 && spacePressedRef\.current\);\n    if \(canPan && scrollRef\.current\) \{.*?\n      return;\n    \}',
    '',
    content,
    flags=re.DOTALL
)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Cleaned handleCanvasMouseDown.")
