import re
import sys

def process_file(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # 1. Remove getCameraScale definition and usage
    content = re.sub(
        r'function getCameraScale.*?\{.*?\n.*?return\s*\{\s*x:\s*1,\s*y:\s*1\s*\};\s*\n?.*?\}',
        '',
        content,
        flags=re.DOTALL
    )
    # Actually wait, maybe it wasn't returning 1,1 before.
    content = re.sub(
        r'function getCameraScale.*?\{.*?return.*?\}',
        '',
        content,
        flags=re.DOTALL
    )
    
    # Remove variables usages:
    content = content.replace(" * cameraScale.x", "")
    content = content.replace(" * cameraScale.y", "")
    content = content.replace(" * layerCameraScale.x", "")
    content = content.replace(" * layerCameraScale.y", "")
    content = re.sub(r'const cameraScale\s*=\s*getCameraScale[^;]*;\s*', '', content)
    content = re.sub(r'const layerCameraScale\s*=\s*getCameraScale[^;]*;\s*', '', content)
    content = content.replace("panRef.current.x +", "")
    content = content.replace("panRef.current.y +", "")
    
    # Let's remove blocks of useEffect containing drag and panning.
    # Look for the space+drag useEffect:
    content = re.sub(
        r'  // Space\+drag \(or middle mouse drag\) panning.*?\n  \}, \[isPanning\]\);\n',
        '',
        content,
        flags=re.DOTALL
    )
    
    # Look for hard guard useEffect:
    # "  // Hard guard: when interacting with overlay UI... window.removeEventListener('wheel', onWheelCapture, true); }; }, []);"
    content = re.sub(
        r'  // Hard guard: when interacting with overlay UI.*?\n  \}, \[\]\);\n',
        '',
        content,
        flags=re.DOTALL
    )

    # Stabilize pan layout effect:
    # useLayoutEffect(() => {
    #   const previous = graphProjectionRef.current;
    # ...
    #   applyCamera(stabilizedPan, zoomRef.current, true, true);
    # ... }, [ ...isHorizontal, ]);
    
    # To remove it safely, let's find the useLayoutEffect containing "applyCamera(stabilizedPan"
    content = re.sub(
        r'  useLayoutEffect\(\(\) => \{\n    const previous = graphProjectionRef\.current;.*?applyCamera\(stabilizedPan.*?\n  \}\, \[.*?isHorizontal,\n  \]\);\n',
        '',
        content,
        flags=re.DOTALL
    )
    
    # The scrollRequest useEffect 
    #   // Scroll timeline to the requested branch.*?} \], \[ .*?\]\);
    content = re.sub(
        r'  // Scroll timeline to the requested branch.*?focusScrollCancelRef\.current\?\.(\(\));.*?\}\, \[\n    scrollRequest,.*?mapTopInset,\n  \]\);\n',
        '',
        content,
        flags=re.DOTALL
    )
    
    # Center checked-out commit effect
    #   // Center the checked-out commit in the viewport when data first appears.
    # This one has scheduleTimelineReveal(); which we need. So I shouldn't just remove the whole effect.
    
    # Remove zoom variables if any
    content = content.replace(" / zoomRef.current", "")
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
        
    print("Cleaned camera variables and hooks.")

process_file("/Users/luca/cursor/git-visualizer/components/BranchMap.tsx")
