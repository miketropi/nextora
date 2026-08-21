import type { CSSProperties } from 'react';
import { buildBackgroundImageStyles, normalizeBackgroundImageSize } from './background-styles';

type HoverRevealImageOptions = {
  imageUrl: string;
  focalPoint: { x: number; y: number };
  size: string;
  customSize: string;
  repeat: boolean;
};

export function buildHoverRevealImageStyles(options: HoverRevealImageOptions): CSSProperties | undefined {
  if (!options.imageUrl.trim()) {
    return undefined;
  }

  return buildBackgroundImageStyles({
    imageUrl: options.imageUrl,
    focalPoint: options.focalPoint,
    size: normalizeBackgroundImageSize(options.size),
    customSize: options.customSize,
    repeat: options.repeat,
  });
}
