export type BackgroundAnimation =
  | 'ken-burns'
  | 'slow-zoom'
  | 'gentle-pan'
  | 'subtle-drift'
  | 'breathing';

export type BackgroundAnimationMeta = {
  value: BackgroundAnimation;
  /** i18n label — pass through __() in the editor. */
  label: string;
  /** i18n description shown under the effect picker. */
  description: string;
  baseDurationSeconds: number;
};

export const BACKGROUND_ANIMATION_CATALOG: BackgroundAnimationMeta[] = [
  {
    value: 'ken-burns',
    label: 'Zoom in with pan',
    description: 'Zooms in while drifting toward the top-left — classic documentary style.',
    baseDurationSeconds: 24,
  },
  {
    value: 'slow-zoom',
    label: 'Zoom in and out',
    description: 'Slowly scales larger, then eases back to the starting size in a loop.',
    baseDurationSeconds: 20,
  },
  {
    value: 'gentle-pan',
    label: 'Pan left and right',
    description: 'Slides horizontally across the frame, then returns smoothly.',
    baseDurationSeconds: 18,
  },
  {
    value: 'subtle-drift',
    label: 'Diagonal drift',
    description: 'Moves diagonally in a soft figure — good for wide hero photos.',
    baseDurationSeconds: 26,
  },
  {
    value: 'breathing',
    label: 'Gentle pulse',
    description: 'Very light scale pulse, like a slow breath — minimal and calm.',
    baseDurationSeconds: 16,
  },
];

const ALLOWED = BACKGROUND_ANIMATION_CATALOG.map((entry) => entry.value);

export const BACKGROUND_ANIMATION_SPEED_OPTIONS = [
  { label: 'Very slow', value: 1 },
  { label: 'Slow', value: 1.35 },
  { label: 'Normal', value: 1.75 },
  { label: 'Fast', value: 2.25 },
  { label: 'Very fast', value: 3 },
] as const;

export function normalizeBackgroundAnimationSpeed(value?: number): number {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return 1.75;
  }

  // Legacy tiers — bump up to the new scale.
  if (Math.abs(value - 0.5) < 0.001 || Math.abs(value - 0.75) < 0.001) {
    return 1;
  }

  return Math.max(1, Math.min(3.5, value));
}

export function normalizeBackgroundAnimation(value?: string): BackgroundAnimation {
  if (value && (ALLOWED as string[]).includes(value)) {
    return value as BackgroundAnimation;
  }

  return 'ken-burns';
}

export function getBackgroundAnimationMeta(value?: string): BackgroundAnimationMeta {
  const slug = normalizeBackgroundAnimation(value);
  return BACKGROUND_ANIMATION_CATALOG.find((entry) => entry.value === slug) ?? BACKGROUND_ANIMATION_CATALOG[0];
}

export function backgroundAnimationClassName(
  enabled: boolean,
  animation: string | undefined,
): string {
  if (!enabled) {
    return '';
  }

  return `nextora-advanced-container--bg-anim-${normalizeBackgroundAnimation(animation)}`;
}

export function backgroundAnimationStyleVars(
  enabled: boolean,
  animation: string | undefined,
  speed: number | undefined,
): Record<string, string> {
  if (!enabled) {
    return {};
  }

  const meta = getBackgroundAnimationMeta(animation);
  const normalizedSpeed = normalizeBackgroundAnimationSpeed(speed);

  return {
    '--nextora-ac-bg-anim-base-duration': `${meta.baseDurationSeconds}s`,
    '--nextora-ac-bg-anim-speed': String(normalizedSpeed),
  };
}
