import type { CSSProperties } from 'react';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	PanelColorSettings,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import type { ContactFormAttributes } from './types';

interface EditProps {
	attributes: ContactFormAttributes;
	setAttributes: (attrs: Partial<ContactFormAttributes>) => void;
}

const HEADING_LEVELS = [
	{ label: 'H2', value: '2' },
	{ label: 'H3', value: '3' },
	{ label: 'H4', value: '4' },
];

function clampHeading(level: number): number {
	return Math.max(2, Math.min(4, level));
}

function resolveColorVar(raw: string): string {
	const trimmed = raw.trim();
	if (!trimmed) {
		return '';
	}
	if (/^#[0-9a-f]{3,8}$/i.test(trimmed)) {
		return trimmed;
	}
	return `var(--wp--preset--color--${trimmed})`;
}

function FieldLabel({
	value,
	placeholder,
	required,
	onChange,
}: {
	value: string;
	placeholder: string;
	required?: boolean;
	onChange: (value: string) => void;
}) {
	return (
		<label className="nextora-contact-form__label">
			<RichText
				tagName="span"
				className="nextora-contact-form__label-text"
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				allowedFormats={[]}
			/>
			{required ? (
				<span className="nextora-contact-form__required" aria-hidden="true">
					*
				</span>
			) : null}
		</label>
	);
}

function InputPlaceholderPreview({
	value,
	placeholder,
	onChange,
}: {
	value: string;
	placeholder: string;
	onChange: (value: string) => void;
}) {
	return (
		<div className="nextora-contact-form__input nextora-contact-form__input-preview">
			<RichText
				tagName="span"
				className="nextora-contact-form__placeholder-text"
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				allowedFormats={[]}
			/>
		</div>
	);
}

export default function ContactFormEdit({ attributes, setAttributes }: EditProps) {
	const {
		heading = '',
		subheading = '',
		buttonLabel = '',
		adminEmail = '',
		adminEmailSubject = '',
		userEmailSubject = '',
		successMessage = '',
		headingLevel = 4,
		enablePhoneField = true,
		fullNameLabel = '',
		fullNamePlaceholder = '',
		phoneLabel = '',
		phonePlaceholder = '',
		emailLabel = '',
		emailPlaceholder = '',
		messageLabel = '',
		messagePlaceholder = '',
		enableRichTextMessage = true,
		showHeading = true,
		showDescription = true,
		enableScrollAnimation = true,
		enableRecaptcha = false,
		recaptchaSiteKey = '',
		recaptchaSecretKey = '',
		sectionBackgroundColor = '',
		buttonBackgroundColor = '',
		buttonTextColor = '',
	} = attributes;

	const level = clampHeading(headingLevel);
	const HeadingTag = `h${level}` as 'h2' | 'h3' | 'h4';
	const showPhone = enablePhoneField !== false;

	const styleVars: CSSProperties = {};
	const bg = resolveColorVar(sectionBackgroundColor);
	const btnBg = resolveColorVar(buttonBackgroundColor);
	const btnText = resolveColorVar(buttonTextColor);
	if (bg) {
		(styleVars as Record<string, string>)['--nextora-contact-form-bg'] = bg;
	}
	if (btnBg) {
		(styleVars as Record<string, string>)['--nextora-contact-form-btn-bg'] = btnBg;
	}
	if (btnText) {
		(styleVars as Record<string, string>)['--nextora-contact-form-btn-text'] = btnText;
	}

	const blockProps = useBlockProps({
		className: 'nextora-contact-form',
		style: Object.keys(styleVars).length > 0 ? styleVars : undefined,
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Content', 'nextora')} initialOpen>
					<ToggleControl
						label={__('Show heading', 'nextora')}
						checked={showHeading !== false}
						onChange={(value: boolean) => setAttributes({ showHeading: value })}
					/>
					{showHeading !== false ? (
						<SelectControl
							label={__('Heading level', 'nextora')}
							value={String(level)}
							options={HEADING_LEVELS}
							onChange={(value) =>
								setAttributes({ headingLevel: parseInt(value ?? '4', 10) || 4 })
							}
						/>
					) : null}
					<ToggleControl
						label={__('Show description', 'nextora')}
						checked={showDescription !== false}
						onChange={(value: boolean) => setAttributes({ showDescription: value })}
					/>
					<ToggleControl
						label={__('Show phone field', 'nextora')}
						checked={showPhone}
						onChange={(value: boolean) => setAttributes({ enablePhoneField: value })}
					/>
					<ToggleControl
						label={__('Rich text message', 'nextora')}
						help={__(
							'When enabled, visitors can format their message with bold, links, and more.',
							'nextora',
						)}
						checked={enableRichTextMessage !== false}
						onChange={(value: boolean) => setAttributes({ enableRichTextMessage: value })}
					/>
				</PanelBody>

				<PanelBody title={__('Email', 'nextora')} initialOpen={false}>
					<TextControl
						label={__('Admin email', 'nextora')}
						help={__(
							'Leave empty to use the site admin email. Submissions are always sent from server settings for this block instance.',
							'nextora',
						)}
						type="email"
						value={adminEmail}
						onChange={(value) => setAttributes({ adminEmail: value ?? '' })}
					/>
					<TextControl
						label={__('Admin email subject', 'nextora')}
						value={adminEmailSubject}
						onChange={(value) => setAttributes({ adminEmailSubject: value ?? '' })}
					/>
					<TextControl
						label={__('User email subject', 'nextora')}
						value={userEmailSubject}
						onChange={(value) => setAttributes({ userEmailSubject: value ?? '' })}
					/>
					<TextControl
						label={__('Success message', 'nextora')}
						value={successMessage}
						onChange={(value) => setAttributes({ successMessage: value ?? '' })}
					/>
				</PanelBody>

				<PanelColorSettings
					title={__('Colors', 'nextora')}
					colorSettings={[
						{
							value: sectionBackgroundColor,
							onChange: (value: string | undefined) =>
								setAttributes({ sectionBackgroundColor: value ?? '' }),
							label: __('Section background', 'nextora'),
						},
						{
							value: buttonBackgroundColor,
							onChange: (value: string | undefined) =>
								setAttributes({ buttonBackgroundColor: value ?? '' }),
							label: __('Button background', 'nextora'),
						},
						{
							value: buttonTextColor,
							onChange: (value: string | undefined) =>
								setAttributes({ buttonTextColor: value ?? '' }),
							label: __('Button text', 'nextora'),
						},
					]}
				/>

				<PanelBody title={__('Security', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Google reCAPTCHA v3', 'nextora')}
						help={__(
							'Add your Site Key and Secret Key from the Google reCAPTCHA admin console. The v3 badge appears when enabled.',
							'nextora',
						)}
						checked={enableRecaptcha === true}
						onChange={(value: boolean) => setAttributes({ enableRecaptcha: value })}
					/>
					{enableRecaptcha ? (
						<>
							<TextControl
								label={__('reCAPTCHA Site Key', 'nextora')}
								value={recaptchaSiteKey}
								onChange={(value) => setAttributes({ recaptchaSiteKey: value ?? '' })}
							/>
							<TextControl
								label={__('reCAPTCHA Secret Key', 'nextora')}
								type="password"
								value={recaptchaSecretKey}
								onChange={(value) => setAttributes({ recaptchaSecretKey: value ?? '' })}
								help={__(
									'Stored in block settings and verified server-side only.',
									'nextora',
								)}
							/>
						</>
					) : null}
				</PanelBody>

				<PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Animate on scroll', 'nextora')}
						help={__(
							'Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
							'nextora',
						)}
						checked={enableScrollAnimation !== false}
						onChange={(value: boolean) => setAttributes({ enableScrollAnimation: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				{showHeading !== false ? (
					<RichText
						tagName={HeadingTag}
						className="nextora-contact-form__heading"
						value={heading}
						onChange={(value: string) => setAttributes({ heading: value })}
						placeholder={__('Get In Touch', 'nextora')}
						allowedFormats={[]}
					/>
				) : null}
				{showDescription !== false ? (
					<RichText
						tagName="p"
						className="nextora-contact-form__subheading"
						value={subheading}
						onChange={(value: string) => setAttributes({ subheading: value })}
						placeholder={__(
							"We'd love to hear from you! If you have any questions",
							'nextora',
						)}
						allowedFormats={[]}
					/>
				) : null}

				<div
					className="nextora-contact-form__notice nextora-contact-form__notice--hidden"
					aria-hidden="true"
				/>

				<div className="nextora-form nextora-contact-form__fields">
					<div
						className={
							showPhone
								? 'nextora-contact-form__row nextora-contact-form__row--two-col'
								: 'nextora-contact-form__row'
						}
					>
						<div className="nextora-contact-form__field">
							<FieldLabel
								value={fullNameLabel}
								placeholder={__('Full Name', 'nextora')}
								required
								onChange={(value) => setAttributes({ fullNameLabel: value })}
							/>
							<InputPlaceholderPreview
								value={fullNamePlaceholder}
								placeholder={__('Enter your full name', 'nextora')}
								onChange={(value) => setAttributes({ fullNamePlaceholder: value })}
							/>
						</div>
						{showPhone ? (
							<div className="nextora-contact-form__field">
								<FieldLabel
									value={phoneLabel}
									placeholder={__('Phone Number', 'nextora')}
									onChange={(value) => setAttributes({ phoneLabel: value })}
								/>
								<InputPlaceholderPreview
									value={phonePlaceholder}
									placeholder={__('Enter your phone number', 'nextora')}
									onChange={(value) => setAttributes({ phonePlaceholder: value })}
								/>
							</div>
						) : null}
					</div>

					<div className="nextora-contact-form__field">
						<FieldLabel
							value={emailLabel}
							placeholder={__('Email', 'nextora')}
							required
							onChange={(value) => setAttributes({ emailLabel: value })}
						/>
						<InputPlaceholderPreview
							value={emailPlaceholder}
							placeholder={__('Enter your email address', 'nextora')}
							onChange={(value) => setAttributes({ emailPlaceholder: value })}
						/>
					</div>

					<div className="nextora-contact-form__field nextora-contact-form__field--message">
						<FieldLabel
							value={messageLabel}
							placeholder={__('Message', 'nextora')}
							required
							onChange={(value) => setAttributes({ messageLabel: value })}
						/>
						{enableRichTextMessage !== false ? (
							<div
								className="nextora-tiptap-shell nextora-contact-form__tiptap-shell"
								aria-hidden="true"
							>
								<div className="nextora-tiptap-toolbar nextora-contact-form__tiptap-toolbar-preview">
									<div className="nextora-tiptap-toolbar__group">
										{['bold', 'italic', 'strike', 'code', 'quote'].map((format) => (
											<span
												key={format}
												className="nextora-contact-form__tiptap-toolbar-chip"
												data-format={format}
											/>
										))}
									</div>
									<div className="nextora-tiptap-toolbar__group nextora-tiptap-toolbar__group--end">
										<span
											className="nextora-contact-form__tiptap-toolbar-chip nextora-contact-form__tiptap-toolbar-chip--link"
											data-format="link"
										/>
									</div>
								</div>
								<div className="nextora-contact-form__tiptap-host-preview">
									<RichText
										tagName="span"
										className="nextora-contact-form__placeholder-text"
										value={messagePlaceholder}
										onChange={(value: string) =>
											setAttributes({ messagePlaceholder: value })
										}
										placeholder={__('Your message', 'nextora')}
										allowedFormats={[]}
									/>
								</div>
							</div>
						) : (
							<div className="nextora-contact-form__textarea nextora-contact-form__textarea-preview">
								<RichText
									tagName="span"
									className="nextora-contact-form__placeholder-text"
									value={messagePlaceholder}
									onChange={(value: string) =>
										setAttributes({ messagePlaceholder: value })
									}
									placeholder={__('Your message', 'nextora')}
									allowedFormats={[]}
								/>
							</div>
						)}
					</div>

					<div className="nextora-contact-form__submit nextora-contact-form__submit-preview">
						<RichText
							tagName="span"
							className="nextora-contact-form__submit-label"
							value={buttonLabel}
							onChange={(value: string) => setAttributes({ buttonLabel: value })}
							placeholder={__('Send Message', 'nextora')}
							allowedFormats={[]}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
