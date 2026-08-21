/** Lightweight DOM text splitter (no GSAP SplitText dependency). */

export type SplitTextMode = "words" | "chars";

export type SplitTextResult = {
	words: HTMLElement[];
	chars: HTMLElement[];
	revert: () => void;
};

const splitState = new WeakMap<HTMLElement, SplitTextResult>();

function wrapWord(text: string): HTMLElement {
	const span = document.createElement("span");
	span.className = "nextora-split-word";
	span.style.display = "inline-block";
	span.textContent = text;
	return span;
}

function wrapChar(char: string): HTMLElement {
	const span = document.createElement("span");
	span.className = "nextora-split-char";
	span.style.display = "inline-block";
	span.textContent = char;
	return span;
}

function splitTextNode(textNode: Text, mode: SplitTextMode, words: HTMLElement[], chars: HTMLElement[]): void {
	const text = textNode.textContent ?? "";
	const parts = text.split(/(\s+)/);
	const fragment = document.createDocumentFragment();

	for (const part of parts) {
		if (!part) {
			continue;
		}

		if (/^\s+$/.test(part)) {
			fragment.appendChild(document.createTextNode(part));
			continue;
		}

		const wordEl = wrapWord(part);
		words.push(wordEl);

		if (mode === "chars") {
			const wordFragment = document.createDocumentFragment();
			for (const char of part) {
				const charEl = wrapChar(char);
				chars.push(charEl);
				wordFragment.appendChild(charEl);
			}
			wordEl.textContent = "";
			wordEl.appendChild(wordFragment);
		}

		fragment.appendChild(wordEl);
	}

	textNode.parentNode?.replaceChild(fragment, textNode);
}

/**
 * Split visible text in an element into word and/or char spans.
 * Reverts any previous split on the same element before re-splitting.
 */
export function splitElementText(element: HTMLElement, mode: SplitTextMode): SplitTextResult {
	revertElementTextSplit(element);

	const originalHtml = element.innerHTML;
	const words: HTMLElement[] = [];
	const chars: HTMLElement[] = [];

	const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
		acceptNode(node) {
			const parent = node.parentElement;
			if (!parent || parent.closest(".nextora-split-word, .nextora-split-char")) {
				return NodeFilter.FILTER_REJECT;
			}

			return node.textContent?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
		},
	});

	const textNodes: Text[] = [];
	let current = walker.nextNode();
	while (current) {
		textNodes.push(current as Text);
		current = walker.nextNode();
	}

	textNodes.forEach((textNode) => splitTextNode(textNode, mode, words, chars));

	const result: SplitTextResult = {
		words,
		chars,
		revert: () => {
			element.innerHTML = originalHtml;
			splitState.delete(element);
		},
	};

	splitState.set(element, result);
	return result;
}

/** Restore original markup if this element was split earlier. */
export function revertElementTextSplit(element: HTMLElement): void {
	splitState.get(element)?.revert();
}
