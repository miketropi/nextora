/**
 * Paint CSS linear / radial gradients onto a canvas mask layer.
 */

const SECTION_BG_VAR = '--nextora-ac-section-bg';

type GradientStop = {
  color: string;
  offset: number;
};

function splitTopLevelCommas(value: string): string[] {
  const parts: string[] = [];
  let current = '';
  let depth = 0;

  for (const char of value) {
    if (char === '(') {
      depth += 1;
    } else if (char === ')') {
      depth -= 1;
    }

    if (char === ',' && depth === 0) {
      if (current.trim()) {
        parts.push(current.trim());
      }
      current = '';
    } else {
      current += char;
    }
  }

  if (current.trim()) {
    parts.push(current.trim());
  }

  return parts;
}

function resolveCssColor(color: string): string {
  const trimmed = color.trim();
  if (!trimmed) {
    return 'rgb(251, 247, 240)';
  }

  const probe = document.createElement('span');
  probe.style.color = trimmed;
  document.body.appendChild(probe);
  const resolved = getComputedStyle(probe).color;
  probe.remove();

  return resolved || 'rgb(251, 247, 240)';
}

function parseStop(stop: string, index: number, total: number): GradientStop | null {
  const trimmed = stop.trim();
  if (!trimmed) {
    return null;
  }

  const offsetMatch = trimmed.match(/\s+(-?\d*\.?\d+)(%|px)\s*$/);
  let color = trimmed;
  let offset: number;

  if (offsetMatch && offsetMatch.index !== undefined) {
    color = trimmed.slice(0, offsetMatch.index).trim();
    offset =
      offsetMatch[2] === 'px'
        ? 0
        : Math.max(0, Math.min(1, Number(offsetMatch[1]) / 100));
  } else {
    offset = total <= 1 ? 0 : index / (total - 1);
  }

  if (!color) {
    return null;
  }

  return { color: resolveCssColor(color), offset };
}

function parseStops(stopsPart: string): GradientStop[] {
  const rawStops = splitTopLevelCommas(stopsPart);
  const stops = rawStops
    .map((stop, index) => parseStop(stop, index, rawStops.length))
    .filter((stop): stop is GradientStop => stop !== null);

  if (!stops.length) {
    return [];
  }

  if (stops.length === 1) {
    stops.push({ color: stops[0].color, offset: 1 });
  }

  return stops;
}

function parseLinearAngle(token: string): number {
  const trimmed = token.trim().toLowerCase();

  if (trimmed.endsWith('deg')) {
    return Number.parseFloat(trimmed);
  }

  if (trimmed.endsWith('turn')) {
    return Number.parseFloat(trimmed) * 360;
  }

  if (trimmed.endsWith('rad')) {
    return (Number.parseFloat(trimmed) * 180) / Math.PI;
  }

  const directionMap: Record<string, number> = {
    'to top': 0,
    'to right': 90,
    'to bottom': 180,
    'to left': 270,
    'to top right': 45,
    'to right top': 45,
    'to bottom right': 135,
    'to right bottom': 135,
    'to bottom left': 225,
    'to left bottom': 225,
    'to top left': 315,
    'to left top': 315,
  };

  return directionMap[trimmed] ?? 180;
}

function linearGradientLine(angleDeg: number, width: number, height: number) {
  const angle = ((angleDeg % 360) + 360) % 360;
  const radians = ((angle - 90) * Math.PI) / 180;
  const centerX = width / 2;
  const centerY = height / 2;
  const length = Math.sqrt(width * width + height * height) / 2;

  return {
    x0: centerX - Math.cos(radians) * length,
    y0: centerY - Math.sin(radians) * length,
    x1: centerX + Math.cos(radians) * length,
    y1: centerY + Math.sin(radians) * length,
  };
}

function paintLinearGradient(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  css: string,
): boolean {
  const match = css.match(/^linear-gradient\((.+)\)$/i);
  if (!match) {
    return false;
  }

  const parts = splitTopLevelCommas(match[1]);
  if (parts.length < 2) {
    return false;
  }

  const angle = parseLinearAngle(parts[0]);
  const stops = parseStops(parts.slice(1).join(', '));
  if (!stops.length) {
    return false;
  }

  const line = linearGradientLine(angle, width, height);
  const gradient = ctx.createLinearGradient(line.x0, line.y0, line.x1, line.y1);
  stops.forEach((stop) => gradient.addColorStop(stop.offset, stop.color));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  return true;
}

function paintRadialGradient(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  css: string,
): boolean {
  const match = css.match(/^radial-gradient\((.+)\)$/i);
  if (!match) {
    return false;
  }

  const parts = splitTopLevelCommas(match[1]);
  if (!parts.length) {
    return false;
  }

  let atX = 0.5;
  let atY = 0.5;
  let stopsPart = parts.join(', ');

  const shapePrefix = parts[0].toLowerCase();
  if (shapePrefix.startsWith('circle') || shapePrefix.startsWith('ellipse')) {
    const atMatch = parts[0].match(/\bat\s+([\d.]+%?)\s+([\d.]+%?)/i);
    if (atMatch) {
      atX = atMatch[1].endsWith('%') ? Number.parseFloat(atMatch[1]) / 100 : 0.5;
      atY = atMatch[2].endsWith('%') ? Number.parseFloat(atMatch[2]) / 100 : 0.5;
    }
    stopsPart = parts.slice(1).join(', ');
  }

  const stops = parseStops(stopsPart);
  if (!stops.length) {
    return false;
  }

  const centerX = width * atX;
  const centerY = height * atY;
  const radius = Math.max(width, height) / 2;
  const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
  stops.forEach((stop) => gradient.addColorStop(stop.offset, stop.color));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  return true;
}

export function resolveSectionGradientCss(root: HTMLElement): string {
  const fromVar = getComputedStyle(root).getPropertyValue(SECTION_BG_VAR).trim();
  if (fromVar && /gradient\(/i.test(fromVar)) {
    return fromVar;
  }

  const fill = root.querySelector<HTMLElement>('.nextora-advanced-container__hover-mask-fill');
  if (fill) {
    const backgroundImage = getComputedStyle(fill).backgroundImage;
    if (backgroundImage && backgroundImage !== 'none' && /gradient\(/i.test(backgroundImage)) {
      return backgroundImage;
    }
  }

  return '';
}

export function paintGradientMask(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  gradientCss: string,
): boolean {
  const normalized = gradientCss.replace(/\s+/g, ' ').trim();
  if (!normalized) {
    return false;
  }

  ctx.globalCompositeOperation = 'source-over';

  if (paintLinearGradient(ctx, width, height, normalized)) {
    return true;
  }

  if (paintRadialGradient(ctx, width, height, normalized)) {
    return true;
  }

  return false;
}
