/**
 * Tiptap rich text for the WordPress comment field (#comment sync).
 */

import { Editor } from "@tiptap/core";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import {
	Bold,
	Code,
	createElement as lucideCreateSvg,
	Italic,
	Link,
	Quote,
	Strikethrough,
	type IconNode,
} from "lucide";

const MAX_LEN = 65525;

function toolbarIcon(node: IconNode): SVGElement {
	return lucideCreateSvg(node, {
		class: "nextora-tiptap-toolbar__icon-svg",
		width: 20,
		height: 20,
		"aria-hidden": "true",
	}) as SVGElement;
}

/** Lucide icon nodes (ISC) — rendered at 20×20 in the toolbar. */
const TIPTAP_ICONS = {
	bold: Bold,
	italic: Italic,
	strike: Strikethrough,
	code: Code,
	quote: Quote,
	link: Link,
} as const;

/** One editor mount (host + synced textarea + optional toolbar shell). */
export type CommentTiptapMountConfig = {
	hostId: string;
	textareaSelector: string;
	labelId: string;
	toolbarSelector: string;
};

const DEFAULT_MOUNT: CommentTiptapMountConfig = {
	hostId: "nextora-tiptap-host",
	textareaSelector: "textarea#comment",
	labelId: "nextora-comment-field-label",
	toolbarSelector: ".nextora-tiptap-toolbar",
};

declare global {
	interface Window {
		nextoraComments?: {
			toolbarLabel?: string;
			toolBold?: string;
			toolBoldHint?: string;
			toolItalic?: string;
			toolItalicHint?: string;
			toolStrike?: string;
			toolStrikeHint?: string;
			toolCode?: string;
			toolCodeHint?: string;
			toolQuote?: string;
			toolQuoteHint?: string;
			toolLink?: string;
			toolLinkHint?: string;
			linkPromptTitle?: string;
			linkPromptDefault?: string;
		};
		/** Populated by {@see nextora_get_comment_tiptap_js_config()} in PHP; filter `nextora_comment_tiptap_js_config`. */
		nextoraCommentTiptap?: {
			mounts?: Partial<CommentTiptapMountConfig>[];
		};
		/** Clear a mounted Tiptap surface by host element id (e.g. contact form reset). */
		nextoraClearTiptapHost?: (hostId: string) => void;
		/** Mount one Tiptap surface (contact form fallback when PHP mounts miss). */
		nextoraMountTiptapConfig?: (config: Partial<CommentTiptapMountConfig>) => void;
		/** Re-scan contact forms and mount any pending message editors. */
		nextoraMountContactFormTiptap?: () => void;
		/** Flush editor HTML into the synced textarea before REST submit. */
		nextoraSyncTiptapHost?: (hostId: string) => void;
	}
}

function syncTextarea(textarea: HTMLTextAreaElement, editor: Editor): void {
	if (editor.isEmpty) {
		textarea.value = "";
		return;
	}
	let html = editor.getHTML();
	if (html.length > MAX_LEN) {
		html = html.slice(0, MAX_LEN);
	}
	textarea.value = html;
}

function buildToolbar(editor: Editor): HTMLElement {
	const i18n = window.nextoraComments ?? {};
	const bar = document.createElement("div");
	bar.className = "nextora-tiptap-toolbar";
	bar.setAttribute("role", "toolbar");
	bar.setAttribute(
		"aria-label",
		i18n.toolbarLabel ?? "Comment formatting",
	);

	type BtnSpec = {
		format: string;
		iconKey: keyof typeof TIPTAP_ICONS;
		isActive: () => boolean;
		run: () => void;
		ariaLabel: string;
		title: string;
	};

	const specs: BtnSpec[] = [
		{
			format: "bold",
			iconKey: "bold",
			isActive: () => editor.isActive("bold"),
			run: () => editor.chain().focus().toggleBold().run(),
			ariaLabel: i18n.toolBold ?? "Bold",
			title: i18n.toolBoldHint ?? "Bold (Ctrl+B)",
		},
		{
			format: "italic",
			iconKey: "italic",
			isActive: () => editor.isActive("italic"),
			run: () => editor.chain().focus().toggleItalic().run(),
			ariaLabel: i18n.toolItalic ?? "Italic",
			title: i18n.toolItalicHint ?? "Italic (Ctrl+I)",
		},
		{
			format: "strike",
			iconKey: "strike",
			isActive: () => editor.isActive("strike"),
			run: () => editor.chain().focus().toggleStrike().run(),
			ariaLabel: i18n.toolStrike ?? "Strikethrough",
			title: i18n.toolStrikeHint ?? "Strikethrough",
		},
		{
			format: "code",
			iconKey: "code",
			isActive: () => editor.isActive("code"),
			run: () => editor.chain().focus().toggleCode().run(),
			ariaLabel: i18n.toolCode ?? "Inline code",
			title: i18n.toolCodeHint ?? "Inline code",
		},
		{
			format: "blockquote",
			iconKey: "quote",
			isActive: () => editor.isActive("blockquote"),
			run: () => editor.chain().focus().toggleBlockquote().run(),
			ariaLabel: i18n.toolQuote ?? "Blockquote",
			title: i18n.toolQuoteHint ?? "Blockquote",
		},
	];

	const groupMarks = document.createElement("div");
	groupMarks.className = "nextora-tiptap-toolbar__group";
	const buttons: HTMLButtonElement[] = [];

	for (const spec of specs) {
		const b = document.createElement("button");
		b.type = "button";
		b.className = "nextora-tiptap-toolbar__btn";
		b.dataset.format = spec.format;
		b.replaceChildren(toolbarIcon(TIPTAP_ICONS[spec.iconKey]));
		b.setAttribute("aria-label", spec.ariaLabel);
		b.title = spec.title;
		b.addEventListener("click", () => {
			spec.run();
		});
		b.setAttribute("aria-pressed", "false");
		groupMarks.append(b);
		buttons.push(b);
	}

	const groupInsert = document.createElement("div");
	groupInsert.className =
		"nextora-tiptap-toolbar__group nextora-tiptap-toolbar__group--end";

	const linkBtn = document.createElement("button");
	linkBtn.type = "button";
	linkBtn.className = "nextora-tiptap-toolbar__btn";
	linkBtn.dataset.format = "link";
	linkBtn.replaceChildren(toolbarIcon(TIPTAP_ICONS.link));
	linkBtn.setAttribute("aria-label", i18n.toolLink ?? "Link");
	linkBtn.title = i18n.toolLinkHint ?? i18n.linkPromptTitle ?? "Link";
	linkBtn.setAttribute("aria-pressed", "false");
	linkBtn.addEventListener("click", () => {
		const prev = editor.getAttributes("link").href as string | undefined;
		const def =
			prev && typeof prev === "string"
				? prev
				: (i18n.linkPromptDefault ?? "https://");
		const url = window.prompt(i18n.linkPromptTitle ?? "URL", def);
		if (url === null) {
			return;
		}
		const t = url.trim();
		if (t === "") {
			editor.chain().focus().extendMarkRange("link").unsetLink().run();
			return;
		}
		editor.chain().focus().extendMarkRange("link").setLink({ href: t }).run();
	});
	groupInsert.append(linkBtn);

	bar.append(groupMarks, groupInsert);

	const syncPressed = (): void => {
		for (let i = 0; i < specs.length; i++) {
			const on = specs[i].isActive();
			const el = buttons[i];
			el.setAttribute("aria-pressed", on ? "true" : "false");
			el.classList.toggle("is-active", on);
		}
		const linkOn = editor.isActive("link");
		linkBtn.setAttribute("aria-pressed", linkOn ? "true" : "false");
		linkBtn.classList.toggle("is-active", linkOn);
	};

	editor.on("transaction", syncPressed);
	syncPressed();

	return bar;
}

const mountedHosts = new WeakSet<HTMLElement>();

type TiptapMountEntry = {
	editor: Editor;
	textarea: HTMLTextAreaElement;
};

const mountRegistry = new Map<string, TiptapMountEntry>();

function resolveMounts(): CommentTiptapMountConfig[] {
	const raw = window.nextoraCommentTiptap?.mounts;
	const mounts =
		raw && raw.length > 0
			? raw.map((partial) => ({ ...DEFAULT_MOUNT, ...partial }))
			: [DEFAULT_MOUNT];

	return mounts.filter(
		(config) => document.getElementById(config.hostId) instanceof HTMLElement,
	);
}

function mountCommentTiptap(config: CommentTiptapMountConfig): void {
	const host = document.getElementById(config.hostId);
	const textarea = document.querySelector<HTMLTextAreaElement>(
		config.textareaSelector,
	);
	if (!host || !textarea || !(host instanceof HTMLElement)) {
		return;
	}
	if (mountedHosts.has(host)) {
		return;
	}

	const label = config.labelId
		? document.getElementById(config.labelId)
		: null;
	const placeholder = host.dataset.placeholder ?? "";

	const shell = host.parentElement;
	const toolbarMount =
		shell?.querySelector<HTMLElement>(config.toolbarSelector) ??
		shell?.querySelector<HTMLElement>(".nextora-tiptap-toolbar") ??
		null;

	const editorAttrs: Record<string, string> = {
		class:
			"nextora-tiptap-prose min-h-[9rem] max-w-none px-3 py-2.5 text-sm leading-relaxed text-contrast outline-none focus:outline-none",
		tabindex: "0",
		role: "textbox",
		"aria-multiline": "true",
	};
	if (label) {
		editorAttrs["aria-labelledby"] = config.labelId;
	}

	const editor = new Editor({
		element: host,
		injectCSS: true,
		extensions: [
			StarterKit.configure({
				heading: false,
				bulletList: false,
				orderedList: false,
				listItem: false,
				listKeymap: false,
				codeBlock: false,
				horizontalRule: false,
				underline: false,
				link: {
					openOnClick: false,
					autolink: true,
					protocols: ["http", "https", "mailto"],
					HTMLAttributes: {
						rel: "nofollow noopener noreferrer",
						class: "text-primary underline",
					},
				},
			}),
			Placeholder.configure({
				placeholder,
			}),
		],
		content: textarea.value.trim() ? textarea.value : "",
		editorProps: {
			attributes: editorAttrs,
		},
		onUpdate: () => syncTextarea(textarea, editor),
		onCreate: () => syncTextarea(textarea, editor),
	});

	mountedHosts.add(host);
	mountRegistry.set(config.hostId, { editor, textarea });

	if (toolbarMount) {
		toolbarMount.replaceChildren();
		toolbarMount.append(buildToolbar(editor));
	}

	label?.addEventListener("click", () => {
		editor.commands.focus();
	});

	const form = textarea.closest("form");
	// Contact forms validate via blocks/contact-form/view.ts — do not intercept submit.
	if (form && !form.hasAttribute("data-nextora-contact-form")) {
		form.addEventListener(
			"submit",
			(e) => {
				syncTextarea(textarea, editor);
				if (editor.isEmpty) {
					e.preventDefault();
					editor.commands.focus();
				}
			},
			{ capture: true },
		);
	}
}

function attachTiptapGlobals(): void {
	window.nextoraClearTiptapHost = (hostId: string): void => {
		const entry = mountRegistry.get(hostId);
		if (!entry) {
			return;
		}
		entry.editor.commands.clearContent(true);
		syncTextarea(entry.textarea, entry.editor);
	};

	window.nextoraSyncTiptapHost = (hostId: string): void => {
		const entry = mountRegistry.get(hostId);
		if (!entry) {
			return;
		}
		syncTextarea(entry.textarea, entry.editor);
	};

	window.nextoraMountTiptapConfig = (
		partial: Partial<CommentTiptapMountConfig>,
	): void => {
		mountCommentTiptap({ ...DEFAULT_MOUNT, ...partial });
	};
}

/**
 * Mount contact-form message fields from DOM (does not rely on PHP mount list).
 */
function mountContactFormTiptapFromDom(): void {
	document
		.querySelectorAll<HTMLFormElement>('form[data-nextora-contact-form="1"]')
		.forEach((form) => {
			const host = form.querySelector<HTMLElement>(".nextora-tiptap-host[id]");
			const textarea = form.querySelector<HTMLTextAreaElement>(
				'textarea[name="message"]',
			);
			const label = form.querySelector<HTMLElement>(
				'[id^="nextora-contact-form-message-label-"]',
			);
			if (!host?.id || !textarea?.id || mountedHosts.has(host)) {
				return;
			}

			mountCommentTiptap({
				hostId: host.id,
				textareaSelector: `#${CSS.escape(textarea.id)}`,
				labelId: label?.id ?? "",
				toolbarSelector: ".nextora-tiptap-toolbar",
			});
		});
}

function bootCommentTiptap(): void {
	attachTiptapGlobals();

	for (const config of resolveMounts()) {
		mountCommentTiptap(config);
	}

	mountContactFormTiptapFromDom();
	window.nextoraMountContactFormTiptap = mountContactFormTiptapFromDom;

	// Block view.js may register after main.js on the same page — retry briefly.
	for (const delay of [0, 50, 150, 400]) {
		window.setTimeout(mountContactFormTiptapFromDom, delay);
	}
}

/**
 * Mounts Tiptap for each entry in `window.nextoraCommentTiptap.mounts` (from PHP),
 * or the default Nextora comment form selectors when unset.
 */
export function initCommentTiptap(): void {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", bootCommentTiptap);
		return;
	}

	bootCommentTiptap();
}
