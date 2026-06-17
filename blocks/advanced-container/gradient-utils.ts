import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useMemo } from '@wordpress/element';

export type GradientPreset = {
  name: string;
  slug: string;
  gradient: string;
};

const FALLBACK_GRADIENTS: GradientPreset[] = [
  {
    name: __('Azure to Purple', 'nextora'),
    slug: 'azure-to-purple',
    gradient: 'linear-gradient(135deg, #12c2e9 0%, #c471ed 100%)',
  },
  {
    name: __('Soft Surface', 'nextora'),
    slug: 'soft-surface',
    gradient: 'linear-gradient(180deg, #ffffff 0%, #f4f4f4 100%)',
  },
  {
    name: __('Dark Depth', 'nextora'),
    slug: 'dark-depth',
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #525252 100%)',
  },
];

function normalizeGradientCss(value: string): string {
  return value.replace(/\s+/g, ' ').trim().toLowerCase();
}

function gradientPresetMatches(entry: GradientPreset, candidate: string): boolean {
  const normalized = candidate.trim().toLowerCase();
  if (entry.slug === normalized) {
    return true;
  }
  return normalizeGradientCss(entry.gradient) === normalizeGradientCss(normalized);
}

export function getMergedGradientEntries(currentGradients: GradientPreset[]): GradientPreset[] {
  const fromPhp = window.nextoraAdvancedContainerBlock?.gradientEntries ?? [];
  const seen = new Set<string>();
  const merged: GradientPreset[] = [];

  const push = (entry: GradientPreset): void => {
    if (!entry.slug || !entry.gradient) {
      return;
    }

    const key = `${entry.slug}|${normalizeGradientCss(entry.gradient)}`;
    if (seen.has(key)) {
      return;
    }

    seen.add(key);
    merged.push(entry);
  };

  for (const entry of currentGradients) {
    push(entry);
  }

  for (const entry of fromPhp) {
    push({
      name: entry.name ?? entry.slug,
      slug: entry.slug,
      gradient: entry.gradient,
    });
  }

  return merged;
}

/** Store preset slugs; keep custom linear/radial CSS as-is. */
export function normalizeGradientForStorage(
  value: string | undefined,
  gradients: GradientPreset[],
): string {
  if (!value) {
    return '';
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return '';
  }

  const presetMatch = trimmed.match(/^var:preset\|gradient\|([a-z0-9_-]+)$/i);
  if (presetMatch) {
    return presetMatch[1].toLowerCase();
  }

  const varMatch = trimmed.match(/^var\(\s*--wp--preset--gradient--([a-z0-9_-]+)\s*\)$/i);
  if (varMatch) {
    return varMatch[1].toLowerCase();
  }

  if (/^[a-z0-9-]+$/i.test(trimmed)) {
    const slug = trimmed.toLowerCase();
    if (gradients.some((entry) => entry.slug === slug)) {
      return slug;
    }
  }

  const preset = gradients.find((entry) => gradientPresetMatches(entry, trimmed));
  if (preset) {
    return preset.slug;
  }

  if (/^(linear|radial)-gradient\(/i.test(trimmed)) {
    return trimmed;
  }

  return '';
}

export function resolveGradientCss(stored: string, lookupGradients: GradientPreset[]): string {
  if (!stored) {
    return '';
  }

  const slug = normalizeGradientForStorage(stored, lookupGradients);
  if (!slug) {
    return '';
  }

  if (/^(linear|radial)-gradient\(/i.test(slug)) {
    return slug;
  }

  const preset = lookupGradients.find((entry) => entry.slug === slug);
  if (preset) {
    return preset.gradient;
  }

  return `var(--wp--preset--gradient--${slug})`;
}

export function gradientValueForPicker(
  stored: string,
  lookupGradients: GradientPreset[],
): string | null {
  const resolved = resolveGradientCss(stored, lookupGradients);
  return resolved || null;
}

export function useThemeGradients(): GradientPreset[] {
  const themeGradients = useSelect((select) => {
    try {
      const settings =
        (
          select('core/block-editor') as {
            getSettings?: () => {
              gradients?: GradientPreset[];
              color?: { gradients?: GradientPreset[] };
            };
          }
        ).getSettings?.() ?? {};
      if (Array.isArray(settings.gradients) && settings.gradients.length) {
        return settings.gradients;
      }
      if (Array.isArray(settings.color?.gradients) && settings.color.gradients.length) {
        return settings.color.gradients;
      }
    } catch {
      /* getSettings unavailable in some editor contexts */
    }
    return [];
  }, []);

  return useMemo(() => {
    if (!Array.isArray(themeGradients) || !themeGradients.length) {
      return FALLBACK_GRADIENTS;
    }

    const mapped = themeGradients
      .filter(
        (entry): entry is GradientPreset =>
          !!entry &&
          typeof entry === 'object' &&
          typeof entry.gradient === 'string' &&
          typeof entry.slug === 'string' &&
          typeof entry.name === 'string',
      )
      .map((entry) => ({
        name: entry.name,
        slug: entry.slug,
        gradient: entry.gradient,
      }));

    return mapped.length ? mapped : FALLBACK_GRADIENTS;
  }, [themeGradients]);
}
