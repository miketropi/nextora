/**
 * WebGL water ripples — no jQuery, closely mirrored from
 * sirxemic/jquery.ripples v0.6.3 (MIT).
 */

export interface RipplesConfig {
  resolution: number;
  dropRadius: number;
  perturbance: number;
  interactive: boolean;
  imageUrl: string | null;
}

const DEFAULTS: RipplesConfig = {
  resolution: 256,
  dropRadius: 20,
  perturbance: 0.03,
  interactive: true,
  imageUrl: null,
};

/* ------------------------------------------------------------------ */
/*  Module-scoped utils                                               */
/* ------------------------------------------------------------------ */

function isPercentage(s: string): boolean {
  return s.charAt(s.length - 1) === '%';
}

function translateBackgroundPosition(value: string): string[] {
  const parts = value.split(' ');
  if (parts.length === 1) {
    switch (value) {
      case 'center': return ['50%', '50%'];
      case 'top': return ['50%', '0'];
      case 'bottom': return ['50%', '100%'];
      case 'left': return ['0', '50%'];
      case 'right': return ['100%', '50%'];
      default: return [value, '50%'];
    }
  }
  return parts.map((p) => {
    switch (p) {
      case 'center': return '50%';
      case 'top': case 'left': return '0';
      case 'right': case 'bottom': return '100%';
      default: return p;
    }
  });
}

function extractUrl(value: string): string | null {
  const m = /url\(["']?([^"']*)["']?\)/.exec(value);
  return m ? m[1] : null;
}

function isDataUri(url: string): boolean {
  return /^data:/.test(url);
}

function createImageData(width: number, height: number): ImageData {
  try {
    return new ImageData(width, height);
  } catch {
    const c = document.createElement('canvas');
    return c.getContext('2d')!.createImageData(width, height);
  }
}

const transparentPixels = createImageData(32, 32);

/* ------------------------------------------------------------------ */
/*  WebGL config detection                                            */
/* ------------------------------------------------------------------ */

interface GlConfig {
  type: number;
  arrayType: Float32ArrayConstructor | null;
  linearSupport: boolean;
  extensions: string[];
}

function loadGlConfig(): GlConfig | null {
  const canvas = document.createElement('canvas');
  const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
  if (!gl) return null;

  const extensions: Record<string, unknown> = {};
  [
    'OES_texture_float',
    'OES_texture_half_float',
    'OES_texture_float_linear',
    'OES_texture_half_float_linear',
  ].forEach((name) => {
    const ext = gl.getExtension(name);
    if (ext) extensions[name] = ext;
  });

  if (!extensions.OES_texture_float) return null;

  const configs: GlConfig[] = [
    {
      type: gl.FLOAT,
      arrayType: Float32Array,
      linearSupport: 'OES_texture_float_linear' in extensions,
      extensions: (() => {
        const arr = ['OES_texture_float'];
        if ('OES_texture_float_linear' in extensions) arr.push('OES_texture_float_linear');
        return arr;
      })(),
    },
  ];

  if (extensions.OES_texture_half_float) {
    const HF = (extensions.OES_texture_half_float as { HALF_FLOAT_OES: number }).HALF_FLOAT_OES;
    configs.push({
      type: HF,
      arrayType: null,
      linearSupport: 'OES_texture_half_float_linear' in extensions,
      extensions: (() => {
        const arr = ['OES_texture_half_float'];
        if ('OES_texture_half_float_linear' in extensions) arr.push('OES_texture_half_float_linear');
        return arr;
      })(),
    });
  }

  const texture = gl.createTexture();
  const framebuffer = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  let found: GlConfig | null = null;
  for (const cfg of configs) {
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 32, 32, 0, gl.RGBA, cfg.type, null);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE) {
      found = cfg;
      break;
    }
  }

  gl.deleteTexture(texture);
  gl.deleteFramebuffer(framebuffer);
  return found;
}

const glConfig = loadGlConfig();

/* ------------------------------------------------------------------ */
/*  Shader compilation                                                */
/* ------------------------------------------------------------------ */

function compileShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Ripples shader compile error:', gl.getShaderInfoLog(shader));
    throw new Error('compile error: ' + gl.getShaderInfoLog(shader));
  }
  return shader;
}

interface GlProgram {
  id: WebGLProgram;
  locations: Record<string, WebGLUniformLocation | null>;
  uniforms: Record<string, Float32Array>;
}

function createProgram(
  gl: WebGLRenderingContext,
  vertSrc: string,
  fragSrc: string,
): GlProgram {
  const id = gl.createProgram()!;
  gl.attachShader(id, compileShader(gl, gl.VERTEX_SHADER, vertSrc));
  gl.attachShader(id, compileShader(gl, gl.FRAGMENT_SHADER, fragSrc));
  gl.linkProgram(id);
  if (!gl.getProgramParameter(id, gl.LINK_STATUS)) {
    console.error('Ripples program link error:', gl.getProgramInfoLog(id));
    throw new Error('link error: ' + gl.getProgramInfoLog(id));
  }

  gl.useProgram(id);
  gl.enableVertexAttribArray(0);

  const locations: Record<string, WebGLUniformLocation | null> = {};
  const uniforms: Record<string, Float32Array> = {};
  const regex = /uniform (\w+) (\w+)/g;
  const combined = vertSrc + fragSrc;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(combined)) !== null) {
    locations[match[2]] = gl.getUniformLocation(id, match[2]);
  }

  return { id, locations, uniforms };
}

function bindTexture(gl: WebGLRenderingContext, texture: WebGLTexture, unit: number): void {
  gl.activeTexture(gl.TEXTURE0 + unit);
  gl.bindTexture(gl.TEXTURE_2D, texture);
}

/* ================================================================== */
/*  Ripples class                                                     */
/* ================================================================== */

export class Ripples {
  private el: HTMLElement;
  private listenerEl: HTMLElement;
  private config: RipplesConfig;
  private canvas: HTMLCanvasElement;
  private gl: WebGLRenderingContext;

  private textures: WebGLTexture[] = [];
  private framebuffers: WebGLFramebuffer[] = [];
  private bufferWriteIndex = 0;
  private bufferReadIndex = 1;
  private textureDelta: Float32Array;

  private quad: WebGLBuffer;
  private backgroundTexture!: WebGLTexture;
  private dropProgram!: GlProgram;
  private updateProgram!: GlProgram;
  private renderProgram!: GlProgram;

  private backgroundWidth = 0;
  private backgroundHeight = 0;
  private imageSource: string | null = null;
  private originalCssBackgroundImage = '';
  private originalInlineCss = '';

  private visible = true;
  private running = true;
  private destroyed = false;
  private animationId: number | null = null;
  private rainTimer: ReturnType<typeof setInterval> | null = null;

  private onMouseMove: ((e: MouseEvent) => void) | null = null;
  private onMouseDown: ((e: MouseEvent) => void) | null = null;
  private onTouch: ((e: TouchEvent) => void) | null = null;
  private onResize: (() => void) | null = null;

  constructor(el: HTMLElement, options: Partial<RipplesConfig> = {}, listenerEl?: HTMLElement) {
    if (!glConfig) {
      throw new Error(
        'WebGL / OES_texture_float not supported — ripples disabled.',
      );
    }

    this.el = el;
    this.listenerEl = listenerEl || el;
    this.config = { ...DEFAULTS, ...options };

    const canvas = document.createElement('canvas');
    canvas.width = el.clientWidth || 1;
    canvas.height = el.clientHeight || 1;
    canvas.style.cssText =
      'position:absolute;left:0;top:0;width:100%;height:100%;z-index:-1';
    this.canvas = canvas;

    el.appendChild(canvas);

    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) throw new Error('WebGL context failed');
    this.gl = gl;

    glConfig.extensions.forEach((name) => gl.getExtension(name));

    this.textureDelta = new Float32Array([
      1 / this.config.resolution,
      1 / this.config.resolution,
    ]);

    // Ripple simulation textures (ping-pong)
    const arrayType = glConfig.arrayType;
    const res = this.config.resolution;
    const textureData = arrayType
      ? new arrayType(res * res * 4)
      : null;

    for (let i = 0; i < 2; i++) {
      const t = gl.createTexture()!;
      const fb = gl.createFramebuffer()!;
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
      gl.bindTexture(gl.TEXTURE_2D, t);
      const filter = glConfig.linearSupport ? gl.LINEAR : gl.NEAREST;
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(
        gl.TEXTURE_2D, 0, gl.RGBA,
        this.config.resolution, this.config.resolution,
        0, gl.RGBA, glConfig.type, textureData,
      );
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D, t, 0,
      );
      this.textures.push(t);
      this.framebuffers.push(fb);
    }

    // Quad buffer
    this.quad = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.quad);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]),
      gl.STATIC_DRAW,
    );

    this.initShaders();
    this.initBackgroundTexture();
    this.setTransparentTexture();
    this.loadImage();

    gl.clearColor(0, 0, 0, 0);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    if (this.config.interactive) {
      this.setupPointerEvents();
    }

    // Resize
    this.onResize = () => this.updateSize();
    window.addEventListener('resize', this.onResize);

    // Animation loop
    const loop = () => {
      if (!this.destroyed) {
        this.step();
        this.animationId = requestAnimationFrame(loop);
      }
    };
    this.animationId = requestAnimationFrame(loop);

    if (this.config.interactive) {
      this.startRain(2000);
    }
  }

  /* --------------- Shaders (exact original) --------------- */

  private initShaders(): void {
    const gl = this.gl;

    const vert = [
      'attribute vec2 vertex;',
      'varying vec2 coord;',
      'void main() {',
      '  coord = vertex * 0.5 + 0.5;',
      '  gl_Position = vec4(vertex, 0.0, 1.0);',
      '}',
    ].join('\n');

    this.dropProgram = createProgram(gl, vert, [
      'precision highp float;',
      'const float PI = 3.141592653589793;',
      'uniform sampler2D texture;',
      'uniform vec2 center;',
      'uniform float radius;',
      'uniform float strength;',
      'varying vec2 coord;',
      'void main() {',
      '  vec4 info = texture2D(texture, coord);',
      '  float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);',
      '  drop = 0.5 - cos(drop * PI) * 0.5;',
      '  info.r += drop * strength;',
      '  gl_FragColor = info;',
      '}',
    ].join('\n'));

    this.updateProgram = createProgram(gl, vert, [
      'precision highp float;',
      'uniform sampler2D texture;',
      'uniform vec2 delta;',
      'varying vec2 coord;',
      'void main() {',
      '  vec4 info = texture2D(texture, coord);',
      '  vec2 dx = vec2(delta.x, 0.0);',
      '  vec2 dy = vec2(0.0, delta.y);',
      '  float average = (',
      '    texture2D(texture, coord - dx).r +',
      '    texture2D(texture, coord - dy).r +',
      '    texture2D(texture, coord + dx).r +',
      '    texture2D(texture, coord + dy).r',
      '  ) * 0.25;',
      '  info.g += (average - info.r) * 2.0;',
      '  info.g *= 0.995;',
      '  info.r += info.g;',
      '  gl_FragColor = info;',
      '}',
    ].join('\n'));
    gl.uniform2fv(this.updateProgram.locations.delta, this.textureDelta);

    this.renderProgram = createProgram(gl, [
      'precision highp float;',
      'attribute vec2 vertex;',
      'uniform vec2 topLeft;',
      'uniform vec2 bottomRight;',
      'uniform vec2 containerRatio;',
      'varying vec2 ripplesCoord;',
      'varying vec2 backgroundCoord;',
      'void main() {',
      '  backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);',
      '  backgroundCoord.y = 1.0 - backgroundCoord.y;',
      '  ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;',
      '  gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);',
      '}',
    ].join('\n'), [
      'precision highp float;',
      'uniform sampler2D samplerBackground;',
      'uniform sampler2D samplerRipples;',
      'uniform vec2 delta;',
      'uniform float perturbance;',
      'varying vec2 ripplesCoord;',
      'varying vec2 backgroundCoord;',
      'void main() {',
      '  float height = texture2D(samplerRipples, ripplesCoord).r;',
      '  float heightX = texture2D(samplerRipples, vec2(ripplesCoord.x + delta.x, ripplesCoord.y)).r;',
      '  float heightY = texture2D(samplerRipples, vec2(ripplesCoord.x, ripplesCoord.y + delta.y)).r;',
      '  vec3 dx = vec3(delta.x, heightX - height, 0.0);',
      '  vec3 dy = vec3(0.0, heightY - height, delta.y);',
      '  vec2 offset = -normalize(cross(dy, dx)).xz;',
      '  float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);',
      '  gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;',
      '}',
    ].join('\n'));
    gl.uniform2fv(this.renderProgram.locations.delta, this.textureDelta);
  }

  /* --------------- Background texture --------------- */

  private initBackgroundTexture(): void {
    const gl = this.gl;
    this.backgroundTexture = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, this.backgroundTexture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  }

  private setTransparentTexture(): void {
    const gl = this.gl;
    gl.bindTexture(gl.TEXTURE_2D, this.backgroundTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, transparentPixels);
  }

  private loadImage(): void {
    const newSource =
      this.config.imageUrl ||
      extractUrl(this.originalCssBackgroundImage) ||
      extractUrl(getComputedStyle(this.el).backgroundImage);

    if (newSource === this.imageSource) return;
    this.imageSource = newSource || null;

    if (!this.imageSource) {
      this.setTransparentTexture();
      return;
    }

    const img = new Image();
    img.onload = () => {
      if (this.destroyed) return;
      const g = this.gl;
      function isPow2(x: number): boolean { return (x & (x - 1)) === 0; }
      const wrap = isPow2(img.width) && isPow2(img.height) ? g.REPEAT : g.CLAMP_TO_EDGE;
      g.bindTexture(g.TEXTURE_2D, this.backgroundTexture);
      g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, wrap);
      g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, wrap);
      g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, g.RGBA, g.UNSIGNED_BYTE, img);
      this.backgroundWidth = img.width;
      this.backgroundHeight = img.height;
      this.hideCssBackground();
    };
    img.onerror = () => {
      if (!this.destroyed) this.setTransparentTexture();
    };
    img.crossOrigin = isDataUri(this.imageSource) ? null : 'anonymous';
    img.src = this.imageSource;
  }

  private hideCssBackground(): void {
    const inline = this.el.style.backgroundImage;
    if (inline === 'none') return;
    this.originalInlineCss = inline;
    this.originalCssBackgroundImage = getComputedStyle(this.el).backgroundImage;
    this.el.style.backgroundImage = 'none';
  }

  private restoreCssBackground(): void {
    this.el.style.backgroundImage = this.originalInlineCss || '';
  }

  /* --------------- Events --------------- */

  private setupPointerEvents(): void {
    const pointerOk = () => this.visible && this.running && this.config.interactive;

    const dropAt = (pointer: { clientX: number; clientY: number }, big: boolean) => {
      if (!pointerOk()) return;
      const rect = this.el.getBoundingClientRect();
      this.drop(
        pointer.clientX - rect.left,
        pointer.clientY - rect.top,
        this.config.dropRadius * (big ? 1.2 : 1),
        big ? 0.08 : 0.01,
      );
    };

    this.onMouseMove = (e: MouseEvent) => dropAt(e, false);
    this.onMouseDown = (e: MouseEvent) => dropAt(e, true);

    this.onTouch = (e: TouchEvent) => {
      const touches = e.changedTouches;
      for (let i = 0; i < touches.length; i++) {
        if (!pointerOk()) return;
        const t = touches[i];
        const rect = this.el.getBoundingClientRect();
        this.drop(
          t.clientX - rect.left,
          t.clientY - rect.top,
          this.config.dropRadius * 0.5,
          0.01,
        );
      }
    };

    this.listenerEl.addEventListener('mousemove', this.onMouseMove, { passive: true });
    this.listenerEl.addEventListener('mousedown', this.onMouseDown, { passive: true });
    this.listenerEl.addEventListener('touchmove', this.onTouch, { passive: true });
    this.listenerEl.addEventListener('touchstart', this.onTouch, { passive: true });
  }

  /* --------------- Core loop --------------- */

  private step(): void {
    if (!this.visible) return;
    this.computeTextureBoundaries();
    if (this.running) this.update();
    this.render();
  }

  /* --------------- Compute background UV bounds --------------- */

  private computeTextureBoundaries(): void {
    const el = this.el;
    const bgSize = getComputedStyle(el).backgroundSize;
    const bgPos = translateBackgroundPosition(getComputedStyle(el).backgroundPosition);
    const rect = el.getBoundingClientRect();

    let bgW = this.backgroundWidth;
    let bgH = this.backgroundHeight;

    if (bgSize === 'cover') {
      const s = Math.max(rect.width / bgW, rect.height / bgH);
      bgW *= s;
      bgH *= s;
    } else if (bgSize === 'contain') {
      const s = Math.min(rect.width / bgW, rect.height / bgH);
      bgW *= s;
      bgH *= s;
    } else {
      const sp = bgSize.split(' ');
      let sW = sp[0] || 'auto';
      let sH = sp[1] || sW;
      if (isPercentage(sW)) bgW = rect.width * parseFloat(sW) / 100;
      else if (sW !== 'auto') bgW = parseFloat(sW);
      if (isPercentage(sH)) bgH = rect.height * parseFloat(sH) / 100;
      else if (sH !== 'auto') bgH = parseFloat(sH);
      if (sW === 'auto' && sH === 'auto') { bgW = this.backgroundWidth; bgH = this.backgroundHeight; }
      else if (sW === 'auto') bgW = this.backgroundWidth * (bgH / this.backgroundHeight);
      else if (sH === 'auto') bgH = this.backgroundHeight * (bgW / this.backgroundWidth);
    }

    let bgX = bgPos[0];
    let bgY = bgPos[1];
    if (isPercentage(bgX)) bgX = String(rect.left + (rect.width - bgW) * parseFloat(bgX) / 100);
    else bgX = String(rect.left + parseFloat(bgX));
    if (isPercentage(bgY)) bgY = String(rect.top + (rect.height - bgH) * parseFloat(bgY) / 100);
    else bgY = String(rect.top + parseFloat(bgY));

    const numX = parseFloat(bgX);
    const numY = parseFloat(bgY);

    this.renderProgram.uniforms.topLeft = new Float32Array([
      (rect.left - numX) / bgW,
      (rect.top - numY) / bgH,
    ]);
    this.renderProgram.uniforms.bottomRight = new Float32Array([
      this.renderProgram.uniforms.topLeft[0] + rect.width / bgW,
      this.renderProgram.uniforms.topLeft[1] + rect.height / bgH,
    ]);

    const maxSide = Math.max(this.canvas.width, this.canvas.height);
    this.renderProgram.uniforms.containerRatio = new Float32Array([
      this.canvas.width / maxSide,
      this.canvas.height / maxSide,
    ]);
  }

  /* --------------- Draw quad --------------- */

  private drawQuad(): void {
    const gl = this.gl;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.quad);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
  }

  /* --------------- Render --------------- */

  private render(): void {
    const gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);

    gl.enable(gl.BLEND);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.useProgram(this.renderProgram.id);

    bindTexture(gl, this.backgroundTexture, 0);
    bindTexture(gl, this.textures[0], 1);

    gl.uniform1f(this.renderProgram.locations.perturbance, this.config.perturbance);
    gl.uniform2fv(this.renderProgram.locations.topLeft, this.renderProgram.uniforms.topLeft);
    gl.uniform2fv(this.renderProgram.locations.bottomRight, this.renderProgram.uniforms.bottomRight);
    gl.uniform2fv(this.renderProgram.locations.containerRatio, this.renderProgram.uniforms.containerRatio);
    gl.uniform1i(this.renderProgram.locations.samplerBackground, 0);
    gl.uniform1i(this.renderProgram.locations.samplerRipples, 1);

    this.drawQuad();
    gl.disable(gl.BLEND);
  }

  /* --------------- Update wave simulation --------------- */

  private update(): void {
    const gl = this.gl;
    gl.viewport(0, 0, this.config.resolution, this.config.resolution);

    gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]);
    bindTexture(gl, this.textures[this.bufferReadIndex], 0);
    gl.useProgram(this.updateProgram.id);

    this.drawQuad();
    this.swapBuffers();
  }

  private swapBuffers(): void {
    this.bufferWriteIndex = 1 - this.bufferWriteIndex;
    this.bufferReadIndex = 1 - this.bufferReadIndex;
  }

  /* --------------- Public: drop a ripple --------------- */

  drop(x: number, y: number, radius: number, strength: number): void {
    const gl = this.gl;
    const elW = this.el.clientWidth || 1;
    const elH = this.el.clientHeight || 1;
    const longestSide = Math.max(elW, elH);

    const pos = new Float32Array([
      (2 * x - elW) / longestSide,
      (elH - 2 * y) / longestSide,
    ]);

    gl.viewport(0, 0, this.config.resolution, this.config.resolution);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]);
    bindTexture(gl, this.textures[this.bufferReadIndex], 0);
    gl.useProgram(this.dropProgram.id);
    gl.uniform2fv(this.dropProgram.locations.center, pos);
    gl.uniform1f(this.dropProgram.locations.radius, radius / longestSide);
    gl.uniform1f(this.dropProgram.locations.strength, strength);
    this.drawQuad();
    this.swapBuffers();
  }

  /* --------------- Resize --------------- */

  private updateSize(): void {
    const w = this.el.clientWidth;
    const h = this.el.clientHeight;
    if (w !== this.canvas.width || h !== this.canvas.height) {
      this.canvas.width = w;
      this.canvas.height = h;
    }
  }

  /* --------------- Auto rain (periodic random drops) --------------- */

  startRain(intervalMs: number): void {
    if (this.rainTimer) return;
    this.rainTimer = setInterval(() => {
      if (this.destroyed || document.hidden) return;
      const w = this.el.clientWidth || 1;
      const h = this.el.clientHeight || 1;
      const x = Math.random() * w;
      const y = Math.random() * h;
      const radius = 25;
      const strength = 0.02 + Math.random() * 0.02;
      this.drop(x, y, radius, strength);
    }, intervalMs);
  }

  stopRain(): void {
    if (this.rainTimer) {
      clearInterval(this.rainTimer);
      this.rainTimer = null;
    }
  }

  /* --------------- Destroy --------------- */

  destroy(): void {
    this.destroyed = true;
    this.stopRain();
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }

    if (this.onMouseMove) this.listenerEl.removeEventListener('mousemove', this.onMouseMove);
    if (this.onMouseDown) this.listenerEl.removeEventListener('mousedown', this.onMouseDown);
    if (this.onTouch) {
      this.listenerEl.removeEventListener('touchmove', this.onTouch);
      this.listenerEl.removeEventListener('touchstart', this.onTouch);
    }
    if (this.onResize) window.removeEventListener('resize', this.onResize);

    this.restoreCssBackground();

    if (this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }

    const ext = this.gl.getExtension('WEBGL_lose_context');
    if (ext) (ext as { loseContext: () => void }).loseContext();
  }
}

/* ------------------------------------------------------------------ */
/*  Initialiser for advanced-container                                */
/* ------------------------------------------------------------------ */

export function initRipples(root: HTMLElement): null {
  const bg = root.querySelector<HTMLElement>('.nextora-advanced-container__bg');
  if (!bg) return null;

  const raw = root.getAttribute('data-nextora-ac-ripples');
  if (!raw) return null;

  let cfg: Record<string, unknown>;
  try { cfg = JSON.parse(raw); } catch { return null; }

  const n = (v: unknown, fallback: number): number => {
    if (typeof v === 'number' && !isNaN(v)) return v;
    return fallback;
  };

  try {
    new Ripples(bg, {
      resolution: n(cfg.resolution, 256),
      dropRadius: n(cfg.dropRadius, 20),
      perturbance: n(cfg.perturbance, 0.03),
      interactive: cfg.interactive !== false,
      imageUrl: null,
    }, root);
  } catch {
    // WebGL not available — silently skip
  }
  return null;
}
