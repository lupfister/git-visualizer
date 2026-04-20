export {
  getNodeFillColorCore,
  getNodeFrameInnerTextColorCore,
  getNodeFrameTitleColorCore,
  getNodeStrokeColorCore,
  renderCommitNodeRectCore,
  renderCommitNodeShapeRectCore,
} from './MapSvgNodeRender';

import { layoutWithLines } from '@chenglou/pretext';

export function trimTextToWidthCore(args: {
  text: string;
  maxWidth: number;
  fontSize: number;
  estimateSvgTextWidth: (text: string, fontSize?: number) => number;
}) {
  const { text, maxWidth, fontSize, estimateSvgTextWidth } = args;
  if (maxWidth <= 0) return '';
  if (estimateSvgTextWidth(text, fontSize) <= maxWidth) return text;
  const ellipsis = '…';
  const ellipsisWidth = estimateSvgTextWidth(ellipsis, fontSize);
  if (ellipsisWidth > maxWidth) return '';
  let lo = 0;
  let hi = text.length;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    const candidate = `${text.slice(0, mid)}${ellipsis}`;
    if (estimateSvgTextWidth(candidate, fontSize) <= maxWidth) {
      lo = mid;
    } else {
      hi = mid - 1;
    }
  }
  if (lo <= 0) return ellipsis;
  return `${text.slice(0, lo)}${ellipsis}`;
}

export function fitNodeFrameTitleCore(args: {
  branchName: string;
  sha: string | undefined | null;
  rectWidth: number;
  rightText?: string;
  reserveIconWidth?: boolean;
  includeBranchForUncommitted?: boolean;
  defaultBranch: string;
  shortShaLabel: (sha?: string | null) => string;
  nodeFrameLabelFontSize: number;
  nodeFrameLabelPairGap: number;
  nodeFrameCollapseIconSize: number;
  nodeFrameLabelInsetX: number;
  nodeFrameLabelRightInsetX: number;
  estimateSvgTextWidth: (text: string, fontSize?: number) => number;
  trimTextToWidth: (text: string, maxWidth: number, fontSize?: number) => string;
}) {
  const {
    branchName,
    sha,
    rectWidth,
    rightText,
    reserveIconWidth = false,
    includeBranchForUncommitted = branchName !== args.defaultBranch,
    shortShaLabel,
    nodeFrameLabelFontSize,
    nodeFrameLabelPairGap,
    nodeFrameCollapseIconSize,
    nodeFrameLabelInsetX,
    nodeFrameLabelRightInsetX,
    trimTextToWidth,
  } = args;

  const shaLabel = shortShaLabel(sha);
  const isUncommittedLabel = sha === 'WORKING_TREE' || shaLabel === 'Uncommited Changes';
  const isStashLabel = sha?.startsWith('STASH:');
  const fullLabel = isStashLabel
    ? includeBranchForUncommitted
      ? `${branchName}/${shaLabel}`
      : shaLabel
    : isUncommittedLabel
      ? includeBranchForUncommitted
        ? `${branchName}/Uncommited Changes`
        : 'Uncommited Changes'
      : `${branchName}/${shaLabel}`;
  let rightContentWidth = 0;
  if (rightText) {
    rightContentWidth = args.estimateSvgTextWidth(rightText, nodeFrameLabelFontSize) + nodeFrameLabelPairGap;
  } else if (reserveIconWidth) {
    rightContentWidth = nodeFrameCollapseIconSize + nodeFrameLabelPairGap;
  }
  const availableTitleWidth =
    rectWidth - nodeFrameLabelInsetX - nodeFrameLabelRightInsetX - rightContentWidth;
  if (availableTitleWidth <= 0) return '';
  return trimTextToWidth(fullLabel, availableTitleWidth);
}

export function wrapNodeFrameMessageCore(args: {
  message: string | undefined | null;
  rectSize: { width: number; height: number };
  strokeWidth: number;
  nodeFrameMessageInsetX: number;
  nodeFrameMessageInsetTop: number;
  nodeFrameMessageInsetBottom: number;
  nodeFrameMessageFontSize: number;
  branchMapSvgFontFamily: string;
  trimTextToWidth: (text: string, maxWidth: number, fontSize?: number) => string;
  estimateSvgTextWidth: (text: string, fontSize?: number) => number;
  getPreparedPretext: (text: string, font: string) => any;
}) {
  const {
    message,
    rectSize,
    strokeWidth,
    nodeFrameMessageInsetX,
    nodeFrameMessageInsetTop,
    nodeFrameMessageInsetBottom,
    nodeFrameMessageFontSize,
    branchMapSvgFontFamily,
    trimTextToWidth,
    estimateSvgTextWidth,
    getPreparedPretext,
  } = args;
  const label = message?.trim().replace(/\\s+/g, ' ');
  const availableWidth = Math.max(
    0,
    rectSize.width - strokeWidth - nodeFrameMessageInsetX * 2,
  );
  const availableHeight =
    rectSize.height - strokeWidth - nodeFrameMessageInsetTop - nodeFrameMessageInsetBottom;
  if (!label || availableWidth <= 0 || availableHeight <= 0) {
    return { lines: [], fontSize: 0, lineHeight: 0 };
  }

  const fontSize = nodeFrameMessageFontSize;
  const lineHeight = fontSize * 1.08;
  const maxLines = Math.max(1, Math.floor(availableHeight / lineHeight));
  if (maxLines <= 0) return { lines: [], fontSize, lineHeight };
  try {
    const prepared = getPreparedPretext(
      label,
      `400 ${fontSize}px ${branchMapSvgFontFamily}`,
    );
    const wrapped = layoutWithLines(prepared, availableWidth, lineHeight);
    const fullLines = wrapped.lines
      .map((line: { text: string }) => line.text.trim())
      .filter((line: string) => line.length > 0)
      .map((line: string) => trimTextToWidth(line, availableWidth, fontSize));
    if (fullLines.length <= maxLines) return { lines: fullLines, fontSize, lineHeight };

    const lines = fullLines.slice(0, maxLines);
    const overflow = fullLines.slice(maxLines).join(' ').trim();
    const lastLineSource = overflow
      ? `${lines[maxLines - 1]} ${overflow}`.trim()
      : lines[maxLines - 1];
    lines[maxLines - 1] = trimTextToWidth(lastLineSource, availableWidth, fontSize);
    return { lines, fontSize, lineHeight };
  } catch {
    const lines: string[] = [];
    let remaining = label;
    const fitLine = (text: string, truncate = false): { line: string; rest: string } => {
      const source = text.trimStart();
      if (!source) return { line: '', rest: '' };
      if (truncate) return { line: trimTextToWidth(source, availableWidth, fontSize), rest: '' };
      if (estimateSvgTextWidth(source, fontSize) <= availableWidth) return { line: source, rest: '' };
      let lo = 1;
      let hi = source.length;
      while (lo < hi) {
        const mid = Math.ceil((lo + hi) / 2);
        const candidate = source.slice(0, mid);
        if (estimateSvgTextWidth(candidate, fontSize) <= availableWidth) {
          lo = mid;
        } else {
          hi = mid - 1;
        }
      }
      let end = lo;
      const boundary = source.slice(0, end).lastIndexOf(' ');
      if (boundary > 0) end = boundary;
      const line = source.slice(0, Math.max(1, end)).trim();
      const rest = source.slice(Math.max(1, end)).trimStart();
      return { line: line || source.slice(0, Math.max(1, lo)), rest };
    };
    for (let lineIndex = 0; lineIndex < maxLines; lineIndex += 1) {
      if (!remaining) break;
      const isLast = lineIndex === maxLines - 1;
      const { line, rest } = fitLine(remaining, isLast);
      if (!line) break;
      lines.push(line);
      remaining = rest;
      if (!remaining) break;
    }
    return { lines, fontSize, lineHeight };
  }
}
