import { Renderer, Program, Triangle, Mesh } from 'ogl';

type RaysOrigin =
  | 'top-center'
  | 'top-left'
  | 'top-right'
  | 'right'
  | 'left'
  | 'bottom-center'
  | 'bottom-right'
  | 'bottom-left';

interface LightRaysConfig {
  origin: RaysOrigin;
  color: string;
  speed: number;
  spread: number;
  length: number;
  pulsating: boolean;
  fadeDistance: number;
  saturation: number;
  followMouse: boolean;
  mouseInfluence: number;
  noiseAmount: number;
  distortion: number;
}

const resolveColorToRgb = (raw: string): [number, number, number] => {
  if (!raw) return [1, 1, 1];

  if (raw.startsWith('var(')) {
    const el = document.createElement('div');
    el.style.color = raw;
    el.style.display = 'none';
    document.body.appendChild(el);
    const computed = getComputedStyle(el).color;
    document.body.removeChild(el);
    return hexToRgb(rgbToHex(computed));
  }

  if (raw.startsWith('rgb')) {
    return hexToRgb(rgbToHex(raw));
  }

  return hexToRgb(raw);
};

const rgbToHex = (rgb: string): string => {
  const m = rgb.match(/[\d.]+/g);
  if (!m || m.length < 3) return '#ffffff';
  const r = parseInt(m[0], 10);
  const g = parseInt(m[1], 10);
  const b = parseInt(m[2], 10);
  return '#' + [r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('');
};

const hexToRgb = (hex: string): [number, number, number] => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255] : [1, 1, 1];
};

const getAnchorAndDir = (
  origin: RaysOrigin,
  w: number,
  h: number,
): { anchor: [number, number]; dir: [number, number] } => {
  const outside = 0.2;
  switch (origin) {
    case 'top-left':
      return { anchor: [0, -outside * h], dir: [0, 1] };
    case 'top-right':
      return { anchor: [w, -outside * h], dir: [0, 1] };
    case 'left':
      return { anchor: [-outside * w, 0.5 * h], dir: [1, 0] };
    case 'right':
      return { anchor: [(1 + outside) * w, 0.5 * h], dir: [-1, 0] };
    case 'bottom-left':
      return { anchor: [0, (1 + outside) * h], dir: [0, -1] };
    case 'bottom-center':
      return { anchor: [0.5 * w, (1 + outside) * h], dir: [0, -1] };
    case 'bottom-right':
      return { anchor: [w, (1 + outside) * h], dir: [0, -1] };
    default: // top-center
      return { anchor: [0.5 * w, -outside * h], dir: [0, 1] };
  }
};

const vert = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const frag = `precision highp float;

uniform float iTime;
uniform vec2  iResolution;
uniform vec2  rayPos;
uniform vec2  rayDir;
uniform vec3  raysColor;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform vec2  mousePos;
uniform float mouseInfluence;
uniform float noiseAmount;
uniform float distortion;

varying vec2 vUv;

float noise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord,
                  float seedA, float seedB, float speed) {
  vec2 sourceToCoord = coord - raySource;
  vec2 dirNorm = normalize(sourceToCoord);
  float cosAngle = dot(dirNorm, rayRefDirection);
  float distortedAngle = cosAngle + distortion * sin(iTime * 2.0 + length(sourceToCoord) * 0.01) * 0.2;
  float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));
  float distance = length(sourceToCoord);
  float maxDistance = iResolution.x * rayLength;
  float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);
  float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
  float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;
  float baseStrength = clamp(
    (0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) +
    (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)),
    0.0, 1.0
  );
  return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
}

void main() {
  vec2 coord = vec2(gl_FragCoord.x, iResolution.y - gl_FragCoord.y);

  vec2 finalRayDir = rayDir;
  if (mouseInfluence > 0.0) {
    vec2 mouseScreenPos = mousePos * iResolution.xy;
    vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
    finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
  }

  vec4 rays1 = vec4(1.0) * rayStrength(rayPos, finalRayDir, coord, 36.2214, 21.11349, 1.5 * raysSpeed);
  vec4 rays2 = vec4(1.0) * rayStrength(rayPos, finalRayDir, coord, 22.3991, 18.0234, 1.1 * raysSpeed);

  gl_FragColor = rays1 * 0.7 + rays2 * 0.6;

  if (noiseAmount > 0.0) {
    float n = noise(coord * 0.01 + iTime * 0.1);
    gl_FragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
  }

  float brightness = 1.0 - (coord.y / iResolution.y);
  gl_FragColor.x *= 0.1 + brightness * 0.8;
  gl_FragColor.y *= 0.3 + brightness * 0.6;
  gl_FragColor.z *= 0.5 + brightness * 0.5;

  if (saturation != 1.0) {
    float gray = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
    gl_FragColor.rgb = mix(vec3(gray), gl_FragColor.rgb, saturation);
  }

  gl_FragColor.rgb *= raysColor;
}`;

export class LightRays {
  private container: HTMLElement;
  private config: LightRaysConfig;
  private renderer: Renderer | null = null;
  private mesh: Mesh | null = null;
  private animationId: number | null = null;
  private mouse = { x: 0.5, y: 0.5 };
  private smoothMouse = { x: 0.5, y: 0.5 };
  private uniforms: Record<string, { value: number[] | number }> | null = null;
  private onMouseMove: ((e: MouseEvent) => void) | null = null;
  private onResize: (() => void) | null = null;
  private destroyed = false;

  constructor(container: HTMLElement, config: LightRaysConfig) {
    this.container = container;
    this.config = config;
    this.init();
  }

  private init(): void {
    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: true,
    });
    this.renderer = renderer;

    const gl = renderer.gl;
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.position = 'absolute';
    gl.canvas.style.top = '0';
    gl.canvas.style.left = '0';
    gl.canvas.style.pointerEvents = 'none';

    this.container.appendChild(gl.canvas);

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: [1, 1] },
      rayPos: { value: [0, 0] },
      rayDir: { value: [0, 1] },
      raysColor: { value: resolveColorToRgb(this.config.color) },
      raysSpeed: { value: this.config.speed },
      lightSpread: { value: this.config.spread },
      rayLength: { value: this.config.length },
      pulsating: { value: this.config.pulsating ? 1.0 : 0.0 },
      fadeDistance: { value: this.config.fadeDistance },
      saturation: { value: this.config.saturation },
      mousePos: { value: [0.5, 0.5] },
      mouseInfluence: { value: this.config.mouseInfluence },
      noiseAmount: { value: this.config.noiseAmount },
      distortion: { value: this.config.distortion },
    };
    this.uniforms = uniforms;

    const geometry = new Triangle(gl);
    const program = new Program(gl, { vertex: vert, fragment: frag, uniforms });
    const mesh = new Mesh(gl, { geometry, program });
    this.mesh = mesh;

    const updatePlacement = () => {
      if (!this.container || !this.renderer || this.destroyed) return;
      this.renderer.dpr = Math.min(window.devicePixelRatio, 2);
      const { clientWidth: wCSS, clientHeight: hCSS } = this.container;
      this.renderer.setSize(wCSS, hCSS);
      const dpr = this.renderer.dpr;
      const w = wCSS * dpr;
      const h = hCSS * dpr;
      uniforms.iResolution.value = [w, h];
      const { anchor, dir } = getAnchorAndDir(this.config.origin, w, h);
      uniforms.rayPos.value = anchor;
      uniforms.rayDir.value = dir;
    };

    this.onResize = updatePlacement;
    window.addEventListener('resize', updatePlacement);
    updatePlacement();

    const loop = (t: number) => {
      if (this.destroyed || !this.renderer || !this.uniforms || !this.mesh) return;
      this.uniforms.iTime.value = t * 0.001;
      if (this.config.followMouse && this.config.mouseInfluence > 0) {
        const s = 0.92;
        this.smoothMouse.x = this.smoothMouse.x * s + this.mouse.x * (1 - s);
        this.smoothMouse.y = this.smoothMouse.y * s + this.mouse.y * (1 - s);
        this.uniforms.mousePos.value = [this.smoothMouse.x, this.smoothMouse.y];
      }
      try {
        this.renderer.render({ scene: this.mesh });
        this.animationId = requestAnimationFrame(loop);
      } catch {
        return;
      }
    };

    this.animationId = requestAnimationFrame(loop);

    if (this.config.followMouse) {
      this.onMouseMove = (e: MouseEvent) => {
        const rect = this.container.getBoundingClientRect();
        this.mouse.x = (e.clientX - rect.left) / (rect.width || 1);
        this.mouse.y = (e.clientY - rect.top) / (rect.height || 1);
      };
      window.addEventListener('mousemove', this.onMouseMove);
    }
  }

  destroy(): void {
    this.destroyed = true;
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    if (this.onResize) {
      window.removeEventListener('resize', this.onResize);
    }
    if (this.onMouseMove) {
      window.removeEventListener('mousemove', this.onMouseMove);
    }
    if (this.renderer) {
      try {
        const ext = this.renderer.gl.getExtension('WEBGL_lose_context');
        if (ext) ext.loseContext();
        const canvas = this.renderer.gl.canvas;
        if (canvas && canvas.parentNode) {
          canvas.parentNode.removeChild(canvas);
        }
      } catch {
        // ignore cleanup errors
      }
      this.renderer = null;
    }
    this.mesh = null;
    this.uniforms = null;
  }
}

export function initLightRays(root: HTMLElement): LightRays | null {
  const container = root.querySelector<HTMLElement>('.nextora-advanced-container__light-rays');
  if (!container) return null;

  const raw = root.getAttribute('data-nextora-ac-light-rays');
  if (!raw) return null;

  let config: Record<string, unknown>;
  try {
    config = JSON.parse(raw);
  } catch {
    return null;
  }

  const n = (v: unknown, fallback: number): number => {
    if (typeof v === 'number' && !isNaN(v)) return v;
    if (typeof v === 'string' && v !== '') {
      const parsed = parseFloat(v);
      if (!isNaN(parsed)) return parsed;
    }
    return fallback;
  };

  const parsed: LightRaysConfig = {
    origin: (String(config.origin) as RaysOrigin) || 'top-center',
    color: String(config.color || ''),
    speed: n(config.speed, 1),
    spread: n(config.spread, 0.5),
    length: n(config.length, 1),
    pulsating: Boolean(config.pulsating),
    fadeDistance: n(config.fadeDistance, 1),
    saturation: n(config.saturation, 1),
    followMouse: Boolean(config.followMouse),
    mouseInfluence: n(config.mouseInfluence, 0.3),
    noiseAmount: n(config.noiseAmount, 0.05),
    distortion: n(config.distortion, 0.05),
  };

  return new LightRays(container, parsed);
}
