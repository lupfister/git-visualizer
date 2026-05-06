import { useEffect, useMemo, useRef } from 'react';
import type { MouseEvent, RefObject, WheelEvent } from 'react';
import type { ConnectorFace, Node } from '../LayoutGrid';
import type { GpuFrameInput, WebGLRenderMetrics } from './types';

type Props = {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  mapPadHostRef: RefObject<HTMLDivElement | null>;
  transformLayerRef: RefObject<HTMLDivElement | null>;
  contentWidth: number;
  contentHeight: number;
  onWheel: (event: WheelEvent<HTMLDivElement>) => void;
  onMouseDown: (event: MouseEvent<HTMLDivElement>) => void;
  frameInput: GpuFrameInput;
  lineStrokeWidth: number;
  cullConnectorPath: (connector: { id: string; fromX: number; fromY: number; toX: number; toY: number; fromFace?: ConnectorFace; toFace?: ConnectorFace }) => boolean;
  displayZoom: number;
  onRenderMetrics?: (metrics: WebGLRenderMetrics) => void;
  renderNodes: Node[];
  onNodeClick: (event: { shiftKey: boolean; metaKey: boolean; ctrlKey: boolean; detail: number }, node: Node) => void;
};

type GLProgramBundle = {
  rectProgram: WebGLProgram;
  lineProgram: WebGLProgram;
  textProgram: WebGLProgram;
  pickProgram: WebGLProgram;
};

type AttrLoc = {
  rectPos: number;
  rectColor: number;
  linePos: number;
  lineColor: number;
  textPos: number;
  textUv: number;
  textColor: number;
  pickPos: number;
  pickColor: number;
};

type UniformLoc = {
  rectRes: WebGLUniformLocation | null;
  lineRes: WebGLUniformLocation | null;
  textRes: WebGLUniformLocation | null;
  textTex: WebGLUniformLocation | null;
  pickRes: WebGLUniformLocation | null;
};

type GLCtx = {
  gl: WebGL2RenderingContext;
  programs: GLProgramBundle;
  attrs: AttrLoc;
  uniforms: UniformLoc;
  rectVao: WebGLVertexArrayObject;
  lineVao: WebGLVertexArrayObject;
  textVao: WebGLVertexArrayObject;
  pickVao: WebGLVertexArrayObject;
  rectBuffer: WebGLBuffer;
  lineBuffer: WebGLBuffer;
  textBuffer: WebGLBuffer;
  pickBuffer: WebGLBuffer;
  pickFbo: WebGLFramebuffer;
  pickTexture: WebGLTexture;
  pickDepth: WebGLRenderbuffer;
  glyphTexture: WebGLTexture;
  glyphMeta: Map<string, { u0: number; v0: number; u1: number; v1: number; w: number }>;
  pickColorToNode: Map<number, Node>;
};

function compileShader(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader {
  const shader = gl.createShader(type);
  if (!shader) throw new Error('Failed to create shader');
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader) ?? 'shader compile failed';
    gl.deleteShader(shader);
    throw new Error(info);
  }
  return shader;
}

function createProgram(gl: WebGL2RenderingContext, vsSrc: string, fsSrc: string): WebGLProgram {
  const vs = compileShader(gl, gl.VERTEX_SHADER, vsSrc);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, fsSrc);
  const program = gl.createProgram();
  if (!program) throw new Error('Failed to create program');
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program) ?? 'program link failed';
    gl.deleteProgram(program);
    throw new Error(info);
  }
  return program;
}

function mkPrograms(gl: WebGL2RenderingContext): GLProgramBundle {
  const baseVS = `#version 300 es\nin vec2 aPos;\nin vec4 aColor;\nuniform vec2 uRes;\nout vec4 vColor;\nvoid main(){\n  vec2 zero = aPos / uRes;\n  vec2 clip = zero * 2.0 - 1.0;\n  gl_Position = vec4(clip * vec2(1.0, -1.0), 0.0, 1.0);\n  vColor = aColor;\n}`;
  const baseFS = `#version 300 es\nprecision mediump float;\nin vec4 vColor;\nout vec4 outColor;\nvoid main(){ outColor = vColor; }`;

  const textVS = `#version 300 es\nin vec2 aPos;\nin vec2 aUv;\nin vec4 aColor;\nuniform vec2 uRes;\nout vec2 vUv;\nout vec4 vColor;\nvoid main(){\n  vec2 zero = aPos / uRes;\n  vec2 clip = zero * 2.0 - 1.0;\n  gl_Position = vec4(clip * vec2(1.0, -1.0), 0.0, 1.0);\n  vUv = aUv;\n  vColor = aColor;\n}`;
  const textFS = `#version 300 es\nprecision mediump float;\nin vec2 vUv;\nin vec4 vColor;\nuniform sampler2D uTex;\nout vec4 outColor;\nvoid main(){\n  float a = texture(uTex, vUv).r;\n  outColor = vec4(vColor.rgb, vColor.a * a);\n}`;

  return {
    rectProgram: createProgram(gl, baseVS, baseFS),
    lineProgram: createProgram(gl, baseVS, baseFS),
    pickProgram: createProgram(gl, baseVS, baseFS),
    textProgram: createProgram(gl, textVS, textFS),
  };
}

function createGlyphAtlas(gl: WebGL2RenderingContext): { texture: WebGLTexture; meta: Map<string, { u0: number; v0: number; u1: number; v1: number; w: number }> } {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_/:@. ,()[]{}+#*';
  const cellW = 18;
  const cellH = 24;
  const cols = 16;
  const rows = Math.ceil(chars.length / cols);
  const width = cols * cellW;
  const height = rows * cellH;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Failed to create atlas context');

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = '#fff';
  ctx.font = '14px Space Grotesk, sans-serif';
  ctx.textBaseline = 'middle';

  const meta = new Map<string, { u0: number; v0: number; u1: number; v1: number; w: number }>();
  for (let i = 0; i < chars.length; i += 1) {
    const ch = chars[i]!;
    const cx = (i % cols) * cellW;
    const cy = Math.floor(i / cols) * cellH;
    ctx.fillText(ch, cx + 2, cy + cellH / 2 + 1);
    const tm = ctx.measureText(ch);
    meta.set(ch, {
      u0: cx / width,
      v0: cy / height,
      u1: (cx + cellW) / width,
      v1: (cy + cellH) / height,
      w: Math.max(6, tm.width),
    });
  }

  const texture = gl.createTexture();
  if (!texture) throw new Error('Failed to create glyph texture');
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.R8, gl.RED, gl.UNSIGNED_BYTE, canvas);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  return { texture, meta };
}

function pushRect(arr: number[], x: number, y: number, w: number, h: number, r: number, g: number, b: number, a: number): void {
  const x2 = x + w;
  const y2 = y + h;
  arr.push(x, y, r, g, b, a, x2, y, r, g, b, a, x, y2, r, g, b, a, x, y2, r, g, b, a, x2, y, r, g, b, a, x2, y2, r, g, b, a);
}

function pushLine(arr: number[], x1: number, y1: number, x2: number, y2: number, width: number, r: number, g: number, b: number, a: number): void {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  if (len < 0.001) return;
  const nx = -dy / len;
  const ny = dx / len;
  const hw = width * 0.5;
  const ax = x1 + nx * hw;
  const ay = y1 + ny * hw;
  const bx = x1 - nx * hw;
  const by = y1 - ny * hw;
  const cx = x2 + nx * hw;
  const cy = y2 + ny * hw;
  const dx2 = x2 - nx * hw;
  const dy2 = y2 - ny * hw;
  arr.push(ax, ay, r, g, b, a, bx, by, r, g, b, a, cx, cy, r, g, b, a, cx, cy, r, g, b, a, bx, by, r, g, b, a, dx2, dy2, r, g, b, a);
}

function nodeColor(node: { colorIndex: number; stateFlags: number }): [number, number, number, number] {
  if (node.colorIndex === 1) return [0.16, 0.36, 0.78, 1];
  if (node.colorIndex === 2) return [0.34, 0.34, 0.34, 1];
  if (node.colorIndex === 3) return [0.17, 0.3, 0.49, 1];
  if (node.colorIndex === 4) return [0.24, 0.24, 0.24, 1];
  return [0.12, 0.13, 0.15, 1];
}

function borderColor(node: { stateFlags: number }): [number, number, number, number] {
  if (node.stateFlags & (1 << 2)) return [0.35, 0.55, 0.9, 1];
  if (node.stateFlags & (1 << 0)) return [0.75, 0.75, 0.75, 1];
  if (node.stateFlags & (1 << 3)) return [0.37, 0.53, 0.75, 1];
  return [0.38, 0.41, 0.46, 1];
}

function ensureCtx(ref: { current: GLCtx | null }, canvas: HTMLCanvasElement): GLCtx {
  if (ref.current) return ref.current;
  const gl = canvas.getContext('webgl2', { alpha: true, antialias: true, premultipliedAlpha: true });
  if (!gl) throw new Error('WebGL2 unavailable');

  const programs = mkPrograms(gl);
  const attrs: AttrLoc = {
    rectPos: gl.getAttribLocation(programs.rectProgram, 'aPos'),
    rectColor: gl.getAttribLocation(programs.rectProgram, 'aColor'),
    linePos: gl.getAttribLocation(programs.lineProgram, 'aPos'),
    lineColor: gl.getAttribLocation(programs.lineProgram, 'aColor'),
    textPos: gl.getAttribLocation(programs.textProgram, 'aPos'),
    textUv: gl.getAttribLocation(programs.textProgram, 'aUv'),
    textColor: gl.getAttribLocation(programs.textProgram, 'aColor'),
    pickPos: gl.getAttribLocation(programs.pickProgram, 'aPos'),
    pickColor: gl.getAttribLocation(programs.pickProgram, 'aColor'),
  };
  const uniforms: UniformLoc = {
    rectRes: gl.getUniformLocation(programs.rectProgram, 'uRes'),
    lineRes: gl.getUniformLocation(programs.lineProgram, 'uRes'),
    textRes: gl.getUniformLocation(programs.textProgram, 'uRes'),
    textTex: gl.getUniformLocation(programs.textProgram, 'uTex'),
    pickRes: gl.getUniformLocation(programs.pickProgram, 'uRes'),
  };

  const rectVao = gl.createVertexArray();
  const lineVao = gl.createVertexArray();
  const textVao = gl.createVertexArray();
  const pickVao = gl.createVertexArray();
  const rectBuffer = gl.createBuffer();
  const lineBuffer = gl.createBuffer();
  const textBuffer = gl.createBuffer();
  const pickBuffer = gl.createBuffer();
  const pickFbo = gl.createFramebuffer();
  const pickTexture = gl.createTexture();
  const pickDepth = gl.createRenderbuffer();
  if (!rectVao || !lineVao || !textVao || !pickVao || !rectBuffer || !lineBuffer || !textBuffer || !pickBuffer || !pickFbo || !pickTexture || !pickDepth) {
    throw new Error('Failed to allocate WebGL resources');
  }

  const { texture: glyphTexture, meta: glyphMeta } = createGlyphAtlas(gl);

  ref.current = {
    gl,
    programs,
    attrs,
    uniforms,
    rectVao,
    lineVao,
    textVao,
    pickVao,
    rectBuffer,
    lineBuffer,
    textBuffer,
    pickBuffer,
    pickFbo,
    pickTexture,
    pickDepth,
    glyphTexture,
    glyphMeta,
    pickColorToNode: new Map(),
  };

  return ref.current;
}

function compareConnectorDrawOrder(
  left: { id: string; fromY: number; toY: number; zIndex: number },
  right: { id: string; fromY: number; toY: number; zIndex: number },
): number {
  const byAge = right.zIndex - left.zIndex;
  if (byAge !== 0) return byAge;
  const leftTopY = Math.min(left.fromY, left.toY);
  const rightTopY = Math.min(right.fromY, right.toY);
  const byTopY = leftTopY - rightTopY;
  if (byTopY !== 0) return byTopY;
  return left.id.localeCompare(right.id);
}

function pickColorFromId(id: number): [number, number, number] {
  return [((id >> 16) & 255) / 255, ((id >> 8) & 255) / 255, (id & 255) / 255];
}

function pickIdFromColor(data: Uint8Array): number {
  return (data[0] << 16) | (data[1] << 8) | data[2];
}

function uploadAndDraw(glc: GLCtx, frameInput: GpuFrameInput, displayZoom: number, lineStrokeWidth: number): { bufferMs: number; uploadMs: number; drawMs: number } {
  const t0 = performance.now();
  const gl = glc.gl;

  const nodeFill: number[] = [];
  const nodeBorder: number[] = [];
  const pickRects: number[] = [];
  glc.pickColorToNode.clear();

  const visibleNodes = frameInput.nodes;
  for (let i = 0; i < visibleNodes.length; i += 1) {
    const node = visibleNodes[i]!;
    const fill = nodeColor(node);
    const border = borderColor(node);
    pushRect(nodeFill, node.x, node.y, node.w, node.h, fill[0], fill[1], fill[2], fill[3]);
    const bw = Math.max(1, 1.5 / displayZoom);
    pushRect(nodeBorder, node.x, node.y, node.w, bw, border[0], border[1], border[2], 1);
    pushRect(nodeBorder, node.x, node.y + node.h - bw, node.w, bw, border[0], border[1], border[2], 1);
    pushRect(nodeBorder, node.x, node.y, bw, node.h, border[0], border[1], border[2], 1);
    pushRect(nodeBorder, node.x + node.w - bw, node.y, bw, node.h, border[0], border[1], border[2], 1);

    const pickId = i + 1;
    const pc = pickColorFromId(pickId);
    pushRect(pickRects, node.x, node.y, node.w, node.h, pc[0], pc[1], pc[2], 1);
  }

  const lineVerts: number[] = [];
  const allConnectors = [
    ...frameInput.mergeConnectors,
    ...frameInput.connectors,
  ].sort(compareConnectorDrawOrder);
  for (const connector of allConnectors) {
    pushLine(lineVerts, connector.fromX, connector.fromY, connector.toX, connector.toY, Math.max(1, lineStrokeWidth), 0.42, 0.45, 0.5, 1);
  }

  const textVerts: number[] = [];
  for (const node of visibleNodes) {
    const label = `${node.id.slice(0, 7)}`;
    let x = node.x + 10;
    const y = node.y + 16;
    for (const ch of label) {
      const gm = glc.glyphMeta.get(ch) ?? glc.glyphMeta.get(' ');
      if (!gm) continue;
      const w = Math.max(6, gm.w);
      const h = 16;
      const x2 = x + w;
      const y2 = y + h;
      const r = 0.88;
      const g = 0.9;
      const b = 0.93;
      const a = 0.95;
      textVerts.push(
        x, y, gm.u0, gm.v0, r, g, b, a,
        x2, y, gm.u1, gm.v0, r, g, b, a,
        x, y2, gm.u0, gm.v1, r, g, b, a,
        x, y2, gm.u0, gm.v1, r, g, b, a,
        x2, y, gm.u1, gm.v0, r, g, b, a,
        x2, y2, gm.u1, gm.v1, r, g, b, a,
      );
      x += w - 2;
    }
  }

  const bufferMs = performance.now() - t0;
  const up0 = performance.now();

  const rectData = new Float32Array([...nodeFill, ...nodeBorder]);
  const lineData = new Float32Array(lineVerts);
  const textData = new Float32Array(textVerts);
  const pickData = new Float32Array(pickRects);

  gl.bindBuffer(gl.ARRAY_BUFFER, glc.rectBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, rectData, gl.DYNAMIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, glc.lineBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, lineData, gl.DYNAMIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, glc.textBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, textData, gl.DYNAMIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, glc.pickBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, pickData, gl.DYNAMIC_DRAW);

  const uploadMs = performance.now() - up0;

  const d0 = performance.now();
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.useProgram(glc.programs.lineProgram);
  gl.uniform2f(glc.uniforms.lineRes, frameInput.contentWidth, frameInput.contentHeight);
  gl.bindVertexArray(glc.lineVao);
  gl.bindBuffer(gl.ARRAY_BUFFER, glc.lineBuffer);
  gl.enableVertexAttribArray(glc.attrs.linePos);
  gl.vertexAttribPointer(glc.attrs.linePos, 2, gl.FLOAT, false, 24, 0);
  gl.enableVertexAttribArray(glc.attrs.lineColor);
  gl.vertexAttribPointer(glc.attrs.lineColor, 4, gl.FLOAT, false, 24, 8);
  gl.drawArrays(gl.TRIANGLES, 0, lineData.length / 6);

  gl.useProgram(glc.programs.rectProgram);
  gl.uniform2f(glc.uniforms.rectRes, frameInput.contentWidth, frameInput.contentHeight);
  gl.bindVertexArray(glc.rectVao);
  gl.bindBuffer(gl.ARRAY_BUFFER, glc.rectBuffer);
  gl.enableVertexAttribArray(glc.attrs.rectPos);
  gl.vertexAttribPointer(glc.attrs.rectPos, 2, gl.FLOAT, false, 24, 0);
  gl.enableVertexAttribArray(glc.attrs.rectColor);
  gl.vertexAttribPointer(glc.attrs.rectColor, 4, gl.FLOAT, false, 24, 8);
  gl.drawArrays(gl.TRIANGLES, 0, rectData.length / 6);

  gl.useProgram(glc.programs.textProgram);
  gl.uniform2f(glc.uniforms.textRes, frameInput.contentWidth, frameInput.contentHeight);
  gl.uniform1i(glc.uniforms.textTex, 0);
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, glc.glyphTexture);
  gl.bindVertexArray(glc.textVao);
  gl.bindBuffer(gl.ARRAY_BUFFER, glc.textBuffer);
  gl.enableVertexAttribArray(glc.attrs.textPos);
  gl.vertexAttribPointer(glc.attrs.textPos, 2, gl.FLOAT, false, 32, 0);
  gl.enableVertexAttribArray(glc.attrs.textUv);
  gl.vertexAttribPointer(glc.attrs.textUv, 2, gl.FLOAT, false, 32, 8);
  gl.enableVertexAttribArray(glc.attrs.textColor);
  gl.vertexAttribPointer(glc.attrs.textColor, 4, gl.FLOAT, false, 32, 16);
  gl.drawArrays(gl.TRIANGLES, 0, textData.length / 8);

  gl.useProgram(glc.programs.pickProgram);
  gl.uniform2f(glc.uniforms.pickRes, frameInput.contentWidth, frameInput.contentHeight);
  gl.bindFramebuffer(gl.FRAMEBUFFER, glc.pickFbo);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.bindVertexArray(glc.pickVao);
  gl.bindBuffer(gl.ARRAY_BUFFER, glc.pickBuffer);
  gl.enableVertexAttribArray(glc.attrs.pickPos);
  gl.vertexAttribPointer(glc.attrs.pickPos, 2, gl.FLOAT, false, 24, 0);
  gl.enableVertexAttribArray(glc.attrs.pickColor);
  gl.vertexAttribPointer(glc.attrs.pickColor, 4, gl.FLOAT, false, 24, 8);
  gl.drawArrays(gl.TRIANGLES, 0, pickData.length / 6);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  const drawMs = performance.now() - d0;
  return { bufferMs, uploadMs, drawMs };
}

function setupPickFramebuffer(glc: GLCtx, width: number, height: number): void {
  const gl = glc.gl;
  gl.bindTexture(gl.TEXTURE_2D, glc.pickTexture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

  gl.bindRenderbuffer(gl.RENDERBUFFER, glc.pickDepth);
  gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);

  gl.bindFramebuffer(gl.FRAMEBUFFER, glc.pickFbo);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, glc.pickTexture, 0);
  gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, glc.pickDepth);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
}

export default function MapGridWebGLCanvas({
  scrollContainerRef,
  mapPadHostRef,
  transformLayerRef,
  contentWidth,
  contentHeight,
  onWheel,
  onMouseDown,
  frameInput,
  lineStrokeWidth,
  cullConnectorPath,
  displayZoom,
  onRenderMetrics,
  renderNodes,
  onNodeClick,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glRef = useRef<GLCtx | null>(null);
  const visibleRenderNodes = useMemo(() => {
    const visibleIds = new Set(frameInput.nodes.map((node) => node.visualId));
    return renderNodes.filter((node) => visibleIds.has(node.commit.visualId));
  }, [frameInput.nodes, renderNodes]);

  const visibleConnectors = useMemo(() => {
    const connectors = frameInput.connectors.filter(cullConnectorPath).sort(compareConnectorDrawOrder);
    const mergeConnectors = frameInput.mergeConnectors.filter(cullConnectorPath).sort(compareConnectorDrawOrder);
    return { connectors, mergeConnectors };
  }, [frameInput.connectors, frameInput.mergeConnectors, cullConnectorPath]);

  const culledFrameInput = useMemo(
    () => ({
      ...frameInput,
      connectors: visibleConnectors.connectors,
      mergeConnectors: visibleConnectors.mergeConnectors,
    }),
    [frameInput, visibleConnectors],
  );

  useEffect(() => {
    const start = performance.now();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const glc = ensureCtx(glRef, canvas);
    const gl = glc.gl;
    const ratio = window.devicePixelRatio || 1;
    const width = Math.max(1, Math.floor(contentWidth * ratio));
    const height = Math.max(1, Math.floor(contentHeight * ratio));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${contentWidth}px`;
      canvas.style.height = `${contentHeight}px`;
      setupPickFramebuffer(glc, width, height);
    }
    gl.viewport(0, 0, width, height);

    glc.pickColorToNode.clear();
    for (let i = 0; i < visibleRenderNodes.length; i += 1) {
      glc.pickColorToNode.set(i + 1, visibleRenderNodes[i]!);
    }

    const { bufferMs, uploadMs, drawMs } = uploadAndDraw(glc, culledFrameInput, displayZoom, lineStrokeWidth);
    onRenderMetrics?.({
      layoutMs: 0,
      bufferMs,
      uploadMs,
      drawMs,
      frameMs: performance.now() - start,
      nodeCount: culledFrameInput.nodes.length,
      connectorCount: culledFrameInput.connectors.length + culledFrameInput.mergeConnectors.length,
    });
  }, [contentWidth, contentHeight, culledFrameInput, displayZoom, lineStrokeWidth, onRenderMetrics, visibleRenderNodes]);

  const handleCanvasClick = (event: MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const glc = glRef.current;
    if (!canvas || !glc) return;
    const rect = canvas.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const ratio = window.devicePixelRatio || 1;
    const px = Math.floor((event.clientX - rect.left) * ratio);
    const py = Math.floor((rect.height - (event.clientY - rect.top)) * ratio);

    const gl = glc.gl;
    const pixel = new Uint8Array(4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, glc.pickFbo);
    gl.readPixels(px, py, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    const pickId = pickIdFromColor(pixel);
    const hit = glc.pickColorToNode.get(pickId) ?? null;
    if (!hit) return;
    event.stopPropagation();
    onNodeClick(
      {
        shiftKey: event.shiftKey,
        metaKey: event.metaKey,
        ctrlKey: event.ctrlKey,
        detail: event.detail,
      },
      hit,
    );
  };

  return (
    <div ref={scrollContainerRef} className="flex-1 min-h-0 overflow-hidden" onWheel={onWheel} onMouseDown={onMouseDown}>
      <div ref={mapPadHostRef} className="relative min-w-full bg-background p-2.5" style={{ width: contentWidth, minWidth: '100%', height: contentHeight }}>
        <div ref={transformLayerRef} className="absolute left-0 top-0" style={{ width: contentWidth, height: contentHeight, transformOrigin: 'top left' }}>
          <canvas ref={canvasRef} className="absolute inset-0 z-20" onClick={handleCanvasClick} />
        </div>
      </div>
    </div>
  );
}
