type Rgb = { r: number; g: number; b: number };

const clampByte = (value: number): number =>
  Math.max(0, Math.min(255, Math.round(value)));

const parseHexColor = (input: string): Rgb | null => {
  const trimmed = input.trim();
  const hex = trimmed.startsWith('#') ? trimmed.slice(1) : trimmed;
  if (hex.length === 3) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    if ([r, g, b].some(Number.isNaN)) return null;
    return { r, g, b };
  }
  if (hex.length === 6) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    if ([r, g, b].some(Number.isNaN)) return null;
    return { r, g, b };
  }
  return null;
};

const rgbToHex = ({ r, g, b }: Rgb): string => {
  const toHex = (channel: number) => clampByte(channel).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

/** Mix base color toward white in sRGB (matches CSS `color-mix(in srgb, …)`). */
export const lumMixToResolvedColor = (baseFill: string, mix: number): string => {
  if (mix < 0.003) {
    return baseFill;
  }
  const base = parseHexColor(baseFill);
  if (!base) {
    return baseFill;
  }
  const t = Math.max(0, Math.min(1, mix));
  return rgbToHex({
    r: base.r + (255 - base.r) * t,
    g: base.g + (255 - base.g) * t,
    b: base.b + (255 - base.b) * t,
  });
};

/** CSS `color-mix` string for live DOM (supports `var(--token)` bases). */
export const lumMixToFillCss = (baseFill: string, mix: number): string => {
  if (mix < 0.003) {
    return baseFill;
  }
  const basePct = (1 - mix) * 100;
  const whitePct = mix * 100;
  return `color-mix(in srgb, ${baseFill} ${basePct}%, white ${whitePct}%)`;
};
