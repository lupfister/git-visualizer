import re

path = "/Users/luca/cursor/git-visualizer/components/BranchMap.tsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace block where `applyCamera(...)` is called inside the center-commit effect
content = re.sub(
    r'    if \(forceOrientationAutoCenter\).*?    \} else \{\n      applyCamera\(nextPan, zoomValue, true\);\n    \}',
    '',
    content,
    flags=re.DOTALL
)

# Also remove any hasUserMovedCameraRef conditions
content = content.replace(" && !hasUserMovedCameraRef.current", "")
content = content.replace("!forceOrientationAutoCenter && hasUserMovedCameraRef.current", "false")
content = content.replace("hasUserMovedCameraRef.current = false;", "")

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Removed remaining applyCamera references.")
