/**
 * Contact form — REST submit + status notices for `nextora/contact-form`.
 * Tiptap mounts via `initCommentTiptap()` in main.ts (not here).
 */

declare global {
	interface Window {
		nextoraClearTiptapHost?: (hostId: string) => void;
		grecaptcha?: {
			ready: (callback: () => void) => void;
			execute: (siteKey: string, options: { action: string }) => Promise<string>;
		};
	}
}

const FORM_SELECTOR = 'form[data-nextora-contact-form="1"]:not([data-nextora-contact-form-inited="1"])';

const EMPTY_MESSAGE_RE = /^(?:\s|<p>\s*<\/p>|<p>\s*<br\s*\/?>\s*<\/p>)*$/i;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactField = 'full_name' | 'email' | 'message';

interface RestPayload {
	success?: boolean;
	message?: string;
	code?: string;
	data?: {
		status?: number;
		fields?: string[];
	};
}

function prefersReducedMotion(): boolean {
	return (
		typeof window !== 'undefined' &&
		window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
	);
}

function isMessageEmpty(value: string): boolean {
	const trimmed = value.trim();
	if (trimmed === '') {
		return true;
	}
	return EMPTY_MESSAGE_RE.test(trimmed);
}

function isContactField(value: string): value is ContactField {
	return value === 'full_name' || value === 'email' || value === 'message';
}

function getFieldWrapper(form: HTMLFormElement, field: ContactField): HTMLElement | null {
	return form.querySelector<HTMLElement>(`[data-nextora-field="${field}"]`);
}

function clearFieldErrors(form: HTMLFormElement): void {
	form.querySelectorAll('.nextora-contact-form__field--error').forEach((wrapper) => {
		wrapper.classList.remove('nextora-contact-form__field--error');
		wrapper.querySelectorAll('[aria-invalid="true"]').forEach((control) => {
			control.removeAttribute('aria-invalid');
		});
	});
}

function setFieldErrors(form: HTMLFormElement, fields: ContactField[]): void {
	clearFieldErrors(form);
	const unique = [...new Set(fields)];
	for (const field of unique) {
		const wrapper = getFieldWrapper(form, field);
		if (!wrapper) {
			continue;
		}
		wrapper.classList.add('nextora-contact-form__field--error');
		const control = wrapper.querySelector<HTMLElement>(
			'input, textarea, .nextora-tiptap-shell',
		);
		control?.setAttribute('aria-invalid', 'true');
	}
}

function collectValidationErrors(
	fullName: string,
	email: string,
	message: string,
): ContactField[] {
	const fields: ContactField[] = [];
	if (!fullName) {
		fields.push('full_name');
	}
	if (!email) {
		fields.push('email');
	} else if (!EMAIL_RE.test(email)) {
		fields.push('email');
	}
	if (isMessageEmpty(message)) {
		fields.push('message');
	}
	return fields;
}

function resolveServerFieldErrors(
	payload: RestPayload,
	fullName: string,
	email: string,
	message: string,
): ContactField[] {
	const fromServer = payload.data?.fields ?? [];
	const resolved = fromServer.filter(isContactField);
	if (resolved.length > 0) {
		return resolved;
	}

	switch (payload.code) {
		case 'invalid_email':
			return ['email'];
		case 'missing_message':
			return ['message'];
		case 'missing_fields': {
			const inferred: ContactField[] = [];
			if (!fullName) {
				inferred.push('full_name');
			}
			if (!email) {
				inferred.push('email');
			}
			if (isMessageEmpty(message)) {
				inferred.push('message');
			}
			return inferred;
		}
		default:
			return [];
	}
}

function showNotice(
	notice: HTMLElement,
	message: string,
	type: 'success' | 'error',
): void {
	notice.textContent = message;
	notice.classList.remove(
		'nextora-contact-form__notice--hidden',
		'nextora-contact-form__notice--success',
		'nextora-contact-form__notice--error',
	);
	notice.classList.add(`nextora-contact-form__notice--${type}`);
	notice.setAttribute('role', 'status');
	notice.setAttribute('aria-live', 'polite');
}

function hideNotice(notice: HTMLElement): void {
	notice.textContent = '';
	notice.classList.add('nextora-contact-form__notice--hidden');
	notice.classList.remove(
		'nextora-contact-form__notice--success',
		'nextora-contact-form__notice--error',
	);
}

function getErrorMessage(form: HTMLFormElement, fallback: string): string {
	return form.dataset.errorMessage?.trim() || fallback;
}

function isTiptapHostMounted(host: HTMLElement): boolean {
	return host.querySelector('.ProseMirror') !== null;
}

/** Retry until Tiptap mounts (main.js may load after this script). */
function ensureContactFormTiptap(form: HTMLFormElement): void {
	const host = form.querySelector<HTMLElement>('.nextora-tiptap-host[id]');
	if (!host || isTiptapHostMounted(host)) {
		return;
	}

	if (typeof window.nextoraMountContactFormTiptap === 'function') {
		window.nextoraMountContactFormTiptap();
		return;
	}

	if (!host.id) {
		return;
	}

	const textarea = form.querySelector<HTMLTextAreaElement>('textarea[name="message"]');
	const label = form.querySelector<HTMLElement>('[id^="nextora-contact-form-message-label-"]');
	if (!textarea?.id || typeof window.nextoraMountTiptapConfig !== 'function') {
		return;
	}

	window.nextoraMountTiptapConfig({
		hostId: host.id,
		textareaSelector: `#${CSS.escape(textarea.id)}`,
		labelId: label?.id ?? '',
		toolbarSelector: '.nextora-tiptap-toolbar',
	});
}

function scheduleContactFormTiptapRetries(form: HTMLFormElement): void {
	const delays = [0, 50, 150, 400];
	for (const delay of delays) {
		window.setTimeout(() => {
			const host = form.querySelector<HTMLElement>('.nextora-tiptap-host[id]');
			if (!host || isTiptapHostMounted(host)) {
				return;
			}
			ensureContactFormTiptap(form);
		}, delay);
	}
}

function readMessageValue(
	form: HTMLFormElement,
	messageField: HTMLTextAreaElement | null,
): string {
	const host = form.querySelector<HTMLElement>('.nextora-tiptap-host[id]');
	if (host?.id && typeof window.nextoraSyncTiptapHost === 'function') {
		window.nextoraSyncTiptapHost(host.id);
	}

	return (messageField?.value ?? '').trim();
}

async function getRecaptchaToken(form: HTMLFormElement): Promise<string> {
	if (form.dataset.recaptcha !== '1') {
		return '';
	}

	const siteKey = form.dataset.recaptchaSiteKey?.trim() ?? '';
	if (!siteKey || !window.grecaptcha) {
		return '';
	}

	return new Promise((resolve, reject) => {
		window.grecaptcha?.ready(() => {
			window.grecaptcha
				?.execute(siteKey, { action: 'contact_form' })
				.then(resolve)
				.catch(reject);
		});
	});
}

function initScrollReveal(root: HTMLElement): void {
	if (prefersReducedMotion() || root.getAttribute('data-nextora-scroll-reveal') !== '1') {
		return;
	}
	if (root.getAttribute('data-nextora-contact-form-scroll-init') === '1') {
		return;
	}

	root.classList.add('nextora-contact-form--reveal-pending');
	root.setAttribute('data-nextora-contact-form-scroll-init', '1');

	const reveal = (): void => {
		root.classList.remove('nextora-contact-form--reveal-pending');
		root.classList.add('nextora-contact-form--reveal-ready');
	};

	if (typeof window.IntersectionObserver === 'function') {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						reveal();
						observer.disconnect();
					}
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
		);
		observer.observe(root);
		window.setTimeout(reveal, 1800);
	} else {
		reveal();
	}
}

function initContactForm(form: HTMLFormElement): void {
	const blockRoot = form.closest<HTMLElement>('.nextora-contact-form');
	// Notice is rendered as a sibling above the form in render.php — not inside <form>.
	const notice =
		blockRoot?.querySelector<HTMLElement>('.nextora-contact-form__notice') ?? null;
	const submitBtn = form.querySelector<HTMLButtonElement>('.nextora-contact-form__submit');
	const messageField = form.querySelector<HTMLTextAreaElement>('textarea[name="message"]');

	if (!notice || !submitBtn) {
		return;
	}

	form.setAttribute('data-nextora-contact-form-inited', '1');

	if (blockRoot) {
		initScrollReveal(blockRoot);
	}

	scheduleContactFormTiptapRetries(form);

	const restUrl = form.dataset.restUrl?.trim() ?? '';
	const nonce = form.dataset.nonce?.trim() ?? '';
	const sendingLabel = form.dataset.sendingLabel?.trim() || 'Sending…';
	const successMessage =
		form.dataset.successMessage?.trim() || 'Thank you! Your message has been sent.';
	const defaultError = getErrorMessage(form, 'Something went wrong. Please try again.');
	const requiredError =
		form.dataset.requiredError?.trim() || 'Please fill in all required fields.';
	const invalidEmailError =
		form.dataset.invalidEmailError?.trim() || 'Please enter a valid email address.';

	const defaultBtnLabel = submitBtn.textContent?.trim() || 'Send Message';

	const clearErrorsOnEdit = (): void => {
		clearFieldErrors(form);
	};

	form.addEventListener('input', clearErrorsOnEdit);
	form.addEventListener('focusin', clearErrorsOnEdit);

	form.addEventListener('submit', async (event) => {
		event.preventDefault();
		hideNotice(notice);
		clearFieldErrors(form);

		const fullName = (
			form.querySelector<HTMLInputElement>('input[name="full_name"]')?.value ?? ''
		).trim();
		const phone = (
			form.querySelector<HTMLInputElement>('input[name="phone"]')?.value ?? ''
		).trim();
		const email = (
			form.querySelector<HTMLInputElement>('input[name="email"]')?.value ?? ''
		).trim();
		const message = readMessageValue(form, messageField);
		const honeypot = (
			form.querySelector<HTMLInputElement>('input[name="company_website"]')?.value ?? ''
		).trim();

		if (honeypot !== '') {
			return;
		}

		const validationErrors = collectValidationErrors(fullName, email, message);
		if (validationErrors.length > 0) {
			setFieldErrors(form, validationErrors);
			const onlyInvalidEmail =
				validationErrors.length === 1 &&
				validationErrors[0] === 'email' &&
				fullName !== '' &&
				email !== '' &&
				!isMessageEmpty(message);
			showNotice(notice, onlyInvalidEmail ? invalidEmailError : requiredError, 'error');
			return;
		}

		if (!restUrl || !nonce) {
			showNotice(notice, defaultError, 'error');
			return;
		}

		submitBtn.disabled = true;
		submitBtn.textContent = sendingLabel;

		const instanceIndex = parseInt(form.dataset.instanceIndex ?? '0', 10) || 0;
		const postId = parseInt(form.dataset.postId ?? '0', 10) || 0;
		const configAdminEmail = form.dataset.adminEmail?.trim() ?? '';
		const configAdminEmailToken = form.dataset.adminEmailToken?.trim() ?? '';
		const configRecaptchaSiteKey = form.dataset.recaptchaSiteKey?.trim() ?? '';
		const configRecaptchaToken = form.dataset.recaptchaConfigToken?.trim() ?? '';

		let recaptchaToken = '';
		if (form.dataset.recaptcha === '1') {
			try {
				recaptchaToken = await getRecaptchaToken(form);
			} catch {
				showNotice(notice, defaultError, 'error');
				submitBtn.disabled = false;
				submitBtn.textContent = defaultBtnLabel;
				return;
			}
		}

		try {
			const response = await fetch(restUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					full_name: fullName,
					phone,
					email,
					message,
					_wpnonce: nonce,
					instance_index: instanceIndex,
					post_id: postId,
					config_admin_email: configAdminEmail,
					config_admin_email_token: configAdminEmailToken,
					config_recaptcha_site_key: configRecaptchaSiteKey,
					config_recaptcha_token: configRecaptchaToken,
					recaptcha_token: recaptchaToken,
				}),
			});

			let payload: RestPayload = {};
			try {
				payload = (await response.json()) as RestPayload;
			} catch {
				payload = {};
			}

			if (response.ok && payload.success) {
				showNotice(notice, payload.message?.trim() || successMessage, 'success');
				clearFieldErrors(form);
				form.reset();
				const tiptapHost = form.querySelector<HTMLElement>('.nextora-tiptap-host[id]');
				if (tiptapHost?.id && typeof window.nextoraClearTiptapHost === 'function') {
					window.nextoraClearTiptapHost(tiptapHost.id);
				} else if (messageField) {
					messageField.value = '';
				}
			} else {
				const errMsg =
					typeof payload.message === 'string' && payload.message.trim() !== ''
						? payload.message.trim()
						: defaultError;
				const serverFields = resolveServerFieldErrors(
					payload,
					fullName,
					email,
					message,
				);
				if (serverFields.length > 0) {
					setFieldErrors(form, serverFields);
				}
				showNotice(notice, errMsg, 'error');
			}
		} catch {
			showNotice(notice, defaultError, 'error');
		} finally {
			submitBtn.disabled = false;
			submitBtn.textContent = defaultBtnLabel;
		}
	});
}

function initAll(): void {
	document.querySelectorAll<HTMLFormElement>(FORM_SELECTOR).forEach((form) => {
		initContactForm(form);
	});
}

function bootContactForms(): void {
	// Run after initCommentTiptap (same event; main bundle registers first).
	initAll();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', bootContactForms);
} else {
	bootContactForms();
}

export {};
