import type { LucideIconNode } from '../advanced-icon/types';

let cachedIcons: LucideIconEntry[] | null = null;

export interface LucideIconEntry {
  name: string;
  nodes: LucideIconNode[];
}

export async function loadIconCatalog(): Promise<LucideIconEntry[]> {
  if (cachedIcons) {
    return cachedIcons;
  }

  const iconsUrl = window.nextoraIconBlock?.iconsUrl ?? '';
  if (!iconsUrl) {
    return [];
  }

  const response = await fetch(iconsUrl);
  if (!response.ok) {
    return [];
  }

  const data = (await response.json()) as LucideIconEntry[];
  cachedIcons = Array.isArray(data) ? data : [];
  return cachedIcons;
}
