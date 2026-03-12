#!/usr/bin/env python3
"""
Generate a macOS-friendly icon source with:
- superellipse ("squircle") corner geometry
- controllable smoothing (mapped to exponent)
- controllable live area size (overall icon footprint)
"""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image


ROOT = Path(__file__).resolve().parent
INPUT_PATH = ROOT / "source.png"
OUTPUT_PATH = ROOT / "source_padded.png"

# Requested target: ~60% squircle smoothing and slightly reduced footprint.
SMOOTHING = 0.60
LIVE_AREA = 844  # ~5% smaller than previous 888 inside a 1024x1024 canvas
CANVAS_SIZE = 1024
SUPERSAMPLE = 4


def smoothing_to_exponent(smoothing: float) -> float:
    """
    Map smoothing [0..1] to a superellipse exponent.
    0.0 -> 2.0 (circle-like)
    1.0 -> 6.0 (squarer corners)
    """
    clamped = max(0.0, min(1.0, smoothing))
    return 2.0 + clamped * 4.0


def build_squircle_mask(size: int, exponent: float, supersample: int) -> Image.Image:
    hi = size * supersample
    y, x = np.ogrid[:hi, :hi]
    center = (hi - 1) / 2.0
    a = center
    b = center
    value = (np.abs((x - center) / a) ** exponent) + (np.abs((y - center) / b) ** exponent)
    alpha = (value <= 1.0).astype(np.uint8) * 255
    return Image.fromarray(alpha, mode="L").resize((size, size), Image.Resampling.LANCZOS)


def main() -> None:
    source = Image.open(INPUT_PATH).convert("RGBA")
    exponent = smoothing_to_exponent(SMOOTHING)
    mask = build_squircle_mask(CANVAS_SIZE, exponent, SUPERSAMPLE)

    clipped = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE), (0, 0, 0, 0))
    clipped.paste(source, (0, 0), mask)

    scaled = clipped.resize((LIVE_AREA, LIVE_AREA), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE), (0, 0, 0, 0))
    offset = (CANVAS_SIZE - LIVE_AREA) // 2
    canvas.paste(scaled, (offset, offset), scaled)

    canvas.save(OUTPUT_PATH)
    print(f"wrote {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
