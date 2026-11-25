import { FontSizePicker } from '@wordpress/block-editor';
import { BaseControl } from '@wordpress/components';
import { useLayoutEffect, useRef } from '@wordpress/element';

const BlockFontSizePicker = FontSizePicker as unknown as React.ComponentType<{
	fontSizes: Array<{ name: string; slug: string; size: string | number }>;
	value: string | undefined;
	valueMode: 'slug' | 'literal';
	onChange: (value: string | number | undefined, selectedItem?: { slug?: string }) => void;
}>;

/** Keep the native picker header and its accessible name in sync. */
export default function LabeledFontSizePicker({ label, ...props }: React.ComponentProps<typeof BlockFontSizePicker> & { label: string }) {
	const root = useRef<HTMLDivElement>(null);
	useLayoutEffect(() => {
		const element = root.current;
		if (!element) return;
		// WordPress does not expose a header-label prop. Preserve the native
		// label ID so the fieldset's aria-labelledby remains valid.
		const updateLabel = () => {
			const header = element.querySelector('.components-font-size-picker__header > :first-child');
			if (header && header.textContent !== label) header.textContent = label;
		};
		updateLabel();
		const observer = new MutationObserver(updateLabel);
		observer.observe(element, { childList: true, subtree: true, characterData: true });
		return () => observer.disconnect();
	}, [label]);
	return <BaseControl><div ref={root}><BlockFontSizePicker {...props} /></div></BaseControl>;
}
