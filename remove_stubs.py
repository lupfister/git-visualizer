import sys

def main():
    path = "/Users/luca/cursor/git-visualizer/components/BranchMap.tsx"
    with open(path, "r") as f:
        lines = f.readlines()
    
    # We want to remove lines 935 to 999 (0-indexed 934 to 998).
    # But wait, looking at the previous output:
    # 935:   const clampPan = (...args: any[]) => { void(args); return args[0]; };
    # 999:   void(setIsPanning); void(setSpaceHeld);
    
    # Let's find the indices dynamically to be safe.
    start_idx = -1
    end_idx = -1
    
    for i, line in enumerate(lines):
        if "const clampPan = " in line and "void(args)" in line and start_idx == -1:
            start_idx = i
        if "void(setIsPanning); void(setSpaceHeld);" in line and end_idx == -1:
            end_idx = i
            
    if start_idx != -1 and end_idx != -1:
        del lines[start_idx:end_idx+1]
        with open(path, "w") as f:
            f.writelines(lines)
        print(f"Removed lines {start_idx+1} to {end_idx+1}")
    else:
        print(f"Failed to find bounds. {start_idx} {end_idx}")

main()
