import { useEffect, useState } from '@wordpress/element';
import { LucideSvgPreview } from '../advanced-icon/lucide-preview';
import type { LucideIconNode } from '../advanced-icon/types';
import { loadIconCatalog } from './icon-catalog';

export interface EditorIconProps {
  iconName: string;
  iconSize: number;
  strokeWidth?: number;
}

export default function AdvancedListEditorIcon({
  iconName,
  iconSize,
  strokeWidth = 2,
}: EditorIconProps) {
  const [iconNodes, setIconNodes] = useState<LucideIconNode[] | null>(null);

  useEffect(() => {
    let active = true;
    loadIconCatalog().then((icons) => {
      if (!active) {
        return;
      }
      const found = icons.find((icon) => icon.name === iconName);
      setIconNodes(found?.nodes ?? null);
    });

    return () => {
      active = false;
    };
  }, [iconName]);

  if (!iconNodes) {
    return <span className="nextora-advanced-list__icon-fallback" aria-hidden="true" />;
  }

  return (
    <LucideSvgPreview
      nodes={iconNodes}
      size={iconSize}
      color="currentColor"
      strokeWidth={strokeWidth}
    />
  );
}
