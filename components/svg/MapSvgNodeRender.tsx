import React from 'react';
import type { CheckoutAccent } from './MapSvg.types';

export function getNodeStrokeColorCore(args: {
  hoveredNodeStrokeKey: string | null;
  nodeKey: string;
  baseStroke: string;
  checkoutAccent?: CheckoutAccent;
  isUserSelected?: boolean;
  accentOutlineOnly?: boolean;
  colors: {
    userSelectionStroke: string;
    neutralHoverStroke: string;
    checkedOutHoverStroke: string;
    checkedOutStroke: string;
    worktreeHoverStroke: string;
    worktreeStroke: string;
  };
}) {
  const {
    hoveredNodeStrokeKey,
    nodeKey,
    baseStroke,
    checkoutAccent = 'none',
    isUserSelected = false,
    accentOutlineOnly = false,
    colors,
  } = args;

  if (isUserSelected) return colors.userSelectionStroke;
  if (hoveredNodeStrokeKey === nodeKey) {
    if (accentOutlineOnly) return colors.neutralHoverStroke;
    if (checkoutAccent === 'primary') return colors.checkedOutHoverStroke;
    if (checkoutAccent === 'other') return colors.worktreeHoverStroke;
    return colors.neutralHoverStroke;
  }
  if (checkoutAccent === 'primary') return colors.checkedOutStroke;
  if (checkoutAccent === 'other') return colors.worktreeStroke;
  return baseStroke;
}

export function getNodeFillColorCore(args: {
  hoveredNodeStrokeKey: string | null;
  nodeKey: string;
  baseFill: string;
  checkoutAccent?: CheckoutAccent;
  isUserSelected?: boolean;
  accentOutlineOnly?: boolean;
  colors: {
    userSelectionFill: string;
    hoverFill: string;
    checkedOutFill: string;
    worktreeFill: string;
    unpushedFill: string;
  };
  unpushedFillAliases: string[];
}) {
  const {
    hoveredNodeStrokeKey,
    nodeKey,
    baseFill,
    checkoutAccent = 'none',
    isUserSelected = false,
    accentOutlineOnly = false,
    colors,
    unpushedFillAliases,
  } = args;

  const normalizedFill = baseFill.trim().toLowerCase();
  const isUnpushedFill = unpushedFillAliases.includes(normalizedFill);
  const retainNeutralSurfaceFill = accentOutlineOnly || isUnpushedFill;
  if (retainNeutralSurfaceFill) {
    return colors.unpushedFill;
  }
  if (isUserSelected) return colors.userSelectionFill;
  if (hoveredNodeStrokeKey === nodeKey) return colors.hoverFill;
  if (checkoutAccent === 'primary') return colors.checkedOutFill;
  if (checkoutAccent === 'other') return colors.worktreeFill;
  return baseFill;
}

export function getNodeFrameTitleColorCore(args: {
  hoveredNodeStrokeKey: string | null;
  nodeKey: string;
  checkoutAccent?: CheckoutAccent;
  isUserSelected?: boolean;
  isUncommitted?: boolean;
  isStash?: boolean;
  accentOutlineOnly?: boolean;
  colors: {
    user: string;
    hover: string;
    checkedOut: string;
    worktreeHover: string;
    worktreeTitle: string;
    stash: string;
    base: string;
  };
}) {
  const {
    hoveredNodeStrokeKey,
    nodeKey,
    checkoutAccent = 'none',
    isUserSelected = false,
    isUncommitted = false,
    isStash = false,
    accentOutlineOnly = false,
    colors,
  } = args;
  if (isUserSelected) return colors.user;
  if (hoveredNodeStrokeKey === nodeKey) {
    if (accentOutlineOnly) return colors.hover;
    if (checkoutAccent === 'primary') return colors.hover;
    if (checkoutAccent === 'other') return colors.worktreeHover;
    return colors.hover;
  }
  if (checkoutAccent === 'primary') return colors.checkedOut;
  if (checkoutAccent === 'other') return colors.worktreeTitle;
  if (isStash) return colors.stash;
  if (isUncommitted) return colors.checkedOut;
  return colors.base;
}

export function getNodeFrameInnerTextColorCore(args: {
  hoveredNodeStrokeKey: string | null;
  nodeKey: string;
  checkoutAccent?: CheckoutAccent;
  isUserSelected?: boolean;
  isUncommitted?: boolean;
  isStash?: boolean;
  accentOutlineOnly?: boolean;
  colors: {
    user: string;
    hover: string;
    checkedOut: string;
    worktreeHover: string;
    worktreeInner: string;
    stash: string;
    base: string;
  };
}) {
  const {
    hoveredNodeStrokeKey,
    nodeKey,
    checkoutAccent = 'none',
    isUserSelected = false,
    isUncommitted = false,
    isStash = false,
    accentOutlineOnly = false,
    colors,
  } = args;

  if (isUserSelected) return colors.user;
  if (hoveredNodeStrokeKey === nodeKey) {
    if (accentOutlineOnly) return colors.hover;
    if (checkoutAccent === 'primary') return colors.hover;
    if (checkoutAccent === 'other') return colors.worktreeHover;
    return colors.hover;
  }
  if (checkoutAccent === 'primary') return colors.checkedOut;
  if (checkoutAccent === 'other') return colors.worktreeInner;
  if (isStash) return colors.stash;
  if (isUncommitted) return colors.checkedOut;
  return colors.base;
}

export function renderCommitNodeShapeRectCore(args: {
  x: number;
  y: number;
  width: number;
  height: number;
  baseRadius: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
  dashed?: boolean;
  layerCameraScaleX: number;
}) {
  const {
    x,
    y,
    width,
    height,
    baseRadius,
    fill,
    stroke,
    strokeWidth,
    dashed = false,
    layerCameraScaleX,
  } = args;
  const zoomSafeScale = Math.max(layerCameraScaleX, 0.0001);
  const radius = Math.max(0, baseRadius / zoomSafeScale);
  return (
    <>
      <rect
        className="branch-map-commit-rect"
        x={x}
        y={y}
        width={width}
        height={height}
        data-base-rx={baseRadius}
        rx={radius}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? '3 3' : undefined}
        strokeLinecap={dashed ? 'round' : undefined}
        strokeLinejoin={dashed ? 'round' : undefined}
      />
      {radius > 0 && (
        <>
          <rect
            x={x}
            y={y}
            width={radius}
            height={radius}
            fill={fill}
            pointerEvents="none"
          />
          <path
            d={`M ${x + radius} ${y} L ${x} ${y} L ${x} ${y + radius}`}
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeDasharray={dashed ? '3 3' : undefined}
            strokeLinecap={dashed ? 'round' : undefined}
            strokeLinejoin={dashed ? 'round' : undefined}
            pointerEvents="none"
          />
        </>
      )}
    </>
  );
}

export function renderCommitNodeRectCore(args: {
  nodeKey: string;
  centerX: number;
  centerY: number;
  rectSize: { width: number; height: number };
  fill: string;
  baseStroke: string;
  checkoutAccent?: CheckoutAccent;
  isUserSelected?: boolean;
  strokeWidth: number;
  strokeInset: number;
  dashed?: boolean;
  cursor?: React.CSSProperties['cursor'];
  innerText?: string;
  footerMetaAuthor?: string;
  footerMetaDate?: string;
  isUncommitted?: boolean;
  isStash?: boolean;
  accentOutlineOnly?: boolean;
  shouldShowFooterMeta: boolean;
  wrapNodeFrameMessage: (message: string | undefined | null, rectSize: { width: number; height: number }, strokeWidth: number) => { lines: string[]; fontSize: number; lineHeight: number };
  trimTextToWidth: (text: string, maxWidth: number, fontSize?: number) => string;
  estimateSvgTextWidth: (text: string, fontSize?: number) => number;
  nodeFrameMessageInsetX: number;
  nodeFrameMessageInsetTop: number;
  nodeFrameMessageInsetBottom: number;
  nodeFrameFooterMetaPairGap: number;
  nodeFrameMessageFontSize: number;
  nodeFrameMessageRenderOffsetY: number;
  nodeFrameLabelWeight: number;
  branchMapSvgFontFamily: string;
  showNodePushDebugLabel: boolean;
  worldPx: (px: number) => number;
  frameColors: {
    title: string;
    inner: string;
  };
  getNodeFillColor: (args: { nodeKey: string; baseFill?: string; checkoutAccent?: CheckoutAccent; isUserSelected?: boolean; accentOutlineOnly?: boolean }) => string;
  getNodeStrokeColor: (args: { nodeKey: string; baseStroke?: string; checkoutAccent?: CheckoutAccent; isUserSelected?: boolean; accentOutlineOnly?: boolean }) => string;
  getNodeFrameInnerTextColor: (args: { nodeKey: string; checkoutAccent?: CheckoutAccent; isUserSelected?: boolean; isUncommitted?: boolean; isStash?: boolean; accentOutlineOnly?: boolean }) => string;
  renderCommitNodeShapeRect: (args: {
    x: number;
    y: number;
    width: number;
    height: number;
    baseRadius: number;
    fill: string;
    stroke: string;
    strokeWidth: number;
    dashed?: boolean;
  }) => React.ReactNode;
  commitNodeCornerRadius: number;
  unpushedFillAliases: string[];
}) {
  const {
    nodeKey,
    centerX,
    centerY,
    rectSize,
    fill,
    baseStroke,
    checkoutAccent = 'none',
    isUserSelected = false,
    strokeWidth,
    strokeInset,
    dashed = false,
    cursor,
    innerText,
    footerMetaAuthor,
    footerMetaDate,
    isUncommitted = false,
    isStash = false,
    accentOutlineOnly: accentOutlineOnlyProp = false,
    shouldShowFooterMeta,
    wrapNodeFrameMessage,
    trimTextToWidth,
    estimateSvgTextWidth,
    nodeFrameMessageInsetX,
    nodeFrameMessageInsetTop,
    nodeFrameMessageInsetBottom,
    nodeFrameFooterMetaPairGap,
    nodeFrameMessageFontSize,
    nodeFrameMessageRenderOffsetY,
    nodeFrameLabelWeight,
    branchMapSvgFontFamily,
    showNodePushDebugLabel,
    worldPx,
    getNodeFillColor,
    getNodeStrokeColor,
    getNodeFrameInnerTextColor,
    renderCommitNodeShapeRect,
    commitNodeCornerRadius,
    unpushedFillAliases,
  } = args;

  const wrappedInnerText = innerText?.trim()
    ? wrapNodeFrameMessage(innerText, rectSize, strokeWidth)
    : { lines: [], fontSize: 0, lineHeight: 0 };
  const trimmedFooterMetaAuthor = footerMetaAuthor?.trim();
  const trimmedFooterMetaDate = footerMetaDate?.trim();
  const footerMetaMaxWidth = Math.max(0, rectSize.width - strokeWidth - nodeFrameMessageInsetX * 2);
  const hasFooterMeta = !!trimmedFooterMetaAuthor && !!trimmedFooterMetaDate;
  const renderedFooterMetaDate = hasFooterMeta
    ? trimTextToWidth(trimmedFooterMetaDate, footerMetaMaxWidth * 0.65, nodeFrameMessageFontSize)
    : '';
  const footerMetaDateWidth = renderedFooterMetaDate
    ? estimateSvgTextWidth(renderedFooterMetaDate, nodeFrameMessageFontSize)
    : 0;
  const renderedFooterMetaAuthor = hasFooterMeta
    ? trimTextToWidth(
      trimmedFooterMetaAuthor,
      Math.max(0, footerMetaMaxWidth - footerMetaDateWidth - nodeFrameFooterMetaPairGap),
      nodeFrameMessageFontSize,
    )
    : '';

  const footerMetaTransitionStyle: React.CSSProperties = {
    opacity: shouldShowFooterMeta ? 1 : 0,
    filter: shouldShowFooterMeta ? 'blur(0px)' : 'blur(3px)',
    transition: 'opacity 180ms ease, filter 220ms ease',
  };

  const rectX = centerX - rectSize.width / 2 + strokeInset;
  const rectY = centerY - rectSize.height / 2 + strokeInset;
  const rectWidth = rectSize.width - strokeWidth;
  const rectHeight = rectSize.height - strokeWidth;
  const effectiveAccentOutlineOnly =
    accentOutlineOnlyProp || (isUncommitted && !isStash && !innerText?.trim());

  const nodeFill = getNodeFillColor({
    nodeKey,
    baseFill: fill,
    checkoutAccent,
    isUserSelected,
    accentOutlineOnly: effectiveAccentOutlineOnly,
  });
  const normalizedFill = fill.trim().toLowerCase();
  const isUnpushedFill = unpushedFillAliases.includes(normalizedFill);
  const pushDebugLabel = isUncommitted || isStash || isUnpushedFill ? 'unpushed' : 'pushed';
  const nodeStroke = getNodeStrokeColor({
    nodeKey,
    baseStroke,
    checkoutAccent,
    isUserSelected,
    accentOutlineOnly: effectiveAccentOutlineOnly,
  });

  return (
    <g style={cursor ? { cursor } : undefined}>
      {renderCommitNodeShapeRect({
        x: rectX,
        y: rectY,
        width: rectWidth,
        height: rectHeight,
        baseRadius: commitNodeCornerRadius,
        fill: nodeFill,
        stroke: nodeStroke,
        strokeWidth,
        dashed,
      })}
      {wrappedInnerText.lines.length > 0 && (
        <text
          x={centerX - rectSize.width / 2 + strokeInset + nodeFrameMessageInsetX}
          textAnchor="start"
          textRendering="geometricPrecision"
          fontFamily={branchMapSvgFontFamily}
          fill={getNodeFrameInnerTextColor({
            nodeKey,
            checkoutAccent,
            isUserSelected,
            isUncommitted,
            isStash,
            accentOutlineOnly: effectiveAccentOutlineOnly,
          })}
          fontWeight={nodeFrameLabelWeight}
          pointerEvents="none"
          fontSize={wrappedInnerText.fontSize}
          y={
            centerY -
            rectSize.height / 2 +
            strokeInset +
            nodeFrameMessageInsetTop +
            wrappedInnerText.fontSize +
            nodeFrameMessageRenderOffsetY
          }
        >
          {wrappedInnerText.lines.map((line, index) => (
            <tspan
              key={`${nodeKey}-line-${index}`}
              x={centerX - rectSize.width / 2 + strokeInset + nodeFrameMessageInsetX}
              dy={index === 0 ? 0 : wrappedInnerText.lineHeight}
            >
              {line}
            </tspan>
          ))}
        </text>
      )}
      {showNodePushDebugLabel && (
        <text
          x={rectX + nodeFrameMessageInsetX}
          y={rectY + nodeFrameMessageInsetTop - worldPx(4)}
          textAnchor="start"
          textRendering="geometricPrecision"
          fontFamily={branchMapSvgFontFamily}
          fill={pushDebugLabel === 'unpushed' ? '#47AFEB' : '#6B7280'}
          fontWeight={700}
          pointerEvents="none"
          fontSize={Math.max(7, worldPx(10))}
        >
          {pushDebugLabel} | fill={fill.slice(0, 7)} | base={nodeKey.slice(-7)}
        </text>
      )}
      {renderedFooterMetaAuthor && renderedFooterMetaDate && (
        <>
          <text
            x={centerX - rectSize.width / 2 + strokeInset + nodeFrameMessageInsetX}
            y={
              centerY +
              rectSize.height / 2 -
              strokeInset -
              nodeFrameMessageInsetBottom
            }
            textAnchor="start"
            textRendering="geometricPrecision"
            fontFamily={branchMapSvgFontFamily}
            fill={getNodeFrameInnerTextColor({
              nodeKey,
              checkoutAccent,
              isUserSelected,
              isUncommitted,
              isStash,
              accentOutlineOnly: effectiveAccentOutlineOnly,
            })}
            fontWeight={nodeFrameLabelWeight}
            pointerEvents="none"
            fontSize={nodeFrameMessageFontSize}
            style={footerMetaTransitionStyle}
          >
            {renderedFooterMetaAuthor}
          </text>
          <text
            x={centerX + rectSize.width / 2 - strokeInset - nodeFrameMessageInsetX}
            y={
              centerY +
              rectSize.height / 2 -
              strokeInset -
              nodeFrameMessageInsetBottom
            }
            textAnchor="end"
            textRendering="geometricPrecision"
            fontFamily={branchMapSvgFontFamily}
            fill={getNodeFrameInnerTextColor({
              nodeKey,
              checkoutAccent,
              isUserSelected,
              isUncommitted,
              isStash,
              accentOutlineOnly: effectiveAccentOutlineOnly,
            })}
            fontWeight={nodeFrameLabelWeight}
            pointerEvents="none"
            fontSize={nodeFrameMessageFontSize}
            style={footerMetaTransitionStyle}
          >
            {renderedFooterMetaDate}
          </text>
        </>
      )}
    </g>
  );
}
