import type { CSSProperties } from 'react';

export type FocalPoint = {
  x: number;
  y: number;
};

export type BackgroundImageSize = 'cover' | 'contain' | 'tile';

export type BackgroundImageStyleInput = {
  imageUrl: string;
  focalPoint?: FocalPoint | null;
  size?: string;
  customSize?: string;
  repeat?: boolean;
};

const DEFAULT_FOCAL_POINT: FocalPoint = { x: 0.5, y: 0.5 };

export function normalizeFocalPoint(value?: FocalPoint | null): FocalPoint {
  const x = typeof value?.x === 'number' ? value.x : DEFAULT_FOCAL_POINT.x;
  const y = typeof value?.y === 'number' ? value.y : DEFAULT_FOCAL_POINT.y;

  return {
    x: Math.max(0, Math.min(1, x)),
    y: Math.max(0, Math.min(1, y)),
  };
}

export function normalizeBackgroundImageSize(value?: string): BackgroundImageSize {
  if (value === 'contain' || value === 'tile') {
    return value;
  }

  return 'cover';
}

export function buildBackgroundImageStyles({
  imageUrl,
  focalPoint,
  size = 'cover',
  customSize = '',
  repeat = false,
}: BackgroundImageStyleInput): CSSProperties {
  const point = normalizeFocalPoint(focalPoint);
  const normalizedSize = normalizeBackgroundImageSize(size);

  let backgroundSize = 'cover';
  let backgroundRepeat = 'no-repeat';

  if (normalizedSize === 'contain') {
    backgroundSize = 'contain';
  } else if (normalizedSize === 'tile') {
    const trimmed = customSize.trim();
    backgroundSize = trimmed || 'auto';
    backgroundRepeat = repeat ? 'repeat' : 'no-repeat';
  }

  return {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `${point.x * 100}% ${point.y * 100}%`,
    backgroundSize,
    backgroundRepeat,
  };
}
