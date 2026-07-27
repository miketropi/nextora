import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from '@wordpress/block-editor';
import {
  PanelBody,
  SelectControl,
  ToggleControl,
  TextControl,
} from '@wordpress/components';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const TYPE_OPTIONS = [
  { label: __('Info', 'nextora'), value: 'info' },
  { label: __('Success', 'nextora'), value: 'success' },
  { label: __('Warning', 'nextora'), value: 'warning' },
  { label: __('Error', 'nextora'), value: 'error' },
];

const ICONS: Record<string, string> = {
  info: 'ℹ',
  success: '✓',
  warning: '⚠',
  error: '✕',
};

const TYPE_ICON_COLORS: Record<string, string> = {
  info: '#2563eb',
  success: '#16a34a',
  warning: '#d97706',
  error: '#dc2626',
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function NotificationsEdit({ attributes, setAttributes }: any) {
  const message = attributes.message as string;
  const type = attributes.type as string;
  const showIcon = attributes.showIcon as boolean;
  const dismissible = attributes.dismissible as boolean;
  const linkUrl = attributes.linkUrl as string;
  const linkText = attributes.linkText as string;

  const accentColor = TYPE_ICON_COLORS[type] || TYPE_ICON_COLORS.info;

  const blockProps = useBlockProps({
    className: `nextora-notif nextora-notif--${type}`,
    style: {
      '--nextora-notif-accent': accentColor,
    } as React.CSSProperties,
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Settings', 'nextora')} initialOpen>
          <SelectControl
            label={__('Type', 'nextora')}
            value={type}
            options={TYPE_OPTIONS}
            onChange={(v) => setAttributes({ type: v })}
          />
          <ToggleControl
            label={__('Show icon', 'nextora')}
            checked={showIcon}
            onChange={(v) => setAttributes({ showIcon: v })}
          />
          <ToggleControl
            label={__('Dismissible', 'nextora')}
            help={__('Add a close button. Dismissal is remembered for 24 hours.', 'nextora')}
            checked={dismissible}
            onChange={(v) => setAttributes({ dismissible: v })}
          />
        </PanelBody>
        <PanelBody title={__('Link', 'nextora')} initialOpen={false}>
          <TextControl
            label={__('Link URL', 'nextora')}
            value={linkUrl}
            onChange={(v) => setAttributes({ linkUrl: v })}
            placeholder="https://"
          />
          <TextControl
            label={__('Link text', 'nextora')}
            value={linkText}
            onChange={(v) => setAttributes({ linkText: v })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        {showIcon && (
          <span className="nextora-notif__icon" aria-hidden="true">
            {ICONS[type] || ICONS.info}
          </span>
        )}
        <div className="nextora-notif__body">
          <RichText
            tagName="p"
            className="nextora-notif__message"
            value={message}
            onChange={(v) => setAttributes({ message: v })}
            placeholder={__('Notification message…', 'nextora')}
            allowedFormats={['core/bold', 'core/italic', 'core/link']}
          />
          {linkUrl && linkText && (
            <a
              href={linkUrl}
              className="nextora-notif__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkText}
            </a>
          )}
        </div>
        {dismissible && (
          <button
            type="button"
            className="nextora-notif__close"
            aria-label={__('Dismiss', 'nextora')}
            tabIndex={-1}
          >
            ✕
          </button>
        )}
      </div>
    </>
  );
}
