// @ts-nocheck
import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  URLInput,
} from '@wordpress/block-editor';
import { useMemo } from '@wordpress/element';
import {
  Disabled,
  PanelBody,
  ToggleControl,
  TextControl,
  RangeControl,
  SelectControl,
  Notice,
  Button,
  ColorPalette,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';

const DEFAULT_FOLLOW_US_SOCIALS = [
  { network: 'instagram', url: '', enabled: true },
  { network: 'facebook', url: '', enabled: true },
  { network: 'pinterest', url: '', enabled: true },
  { network: 'youtube', url: '', enabled: true },
  { network: 'tiktok', url: '', enabled: true },
  { network: 'x', url: '', enabled: true },
];

const FOLLOW_US_SOCIAL_LABELS = {
  instagram: __('Instagram', 'nextora'),
  facebook: __('Facebook', 'nextora'),
  pinterest: __('Pinterest', 'nextora'),
  youtube: __('YouTube', 'nextora'),
  tiktok: __('TikTok', 'nextora'),
  x: __('X', 'nextora'),
};

export default function HeaderEdit({ attributes, setAttributes }) {
  const {
    logoType,
    logoImageUrl,
    logoImageUrlMobile,
    logoText,
    logoWidth,
    logoWidthMobile,
    logoLink,
    menuId,
    menuLocation,
    menuDepth,
    showFollowUs,
    showFollowUsMobile,
    followUsLabel,
    followUsSupportText,
    followUsEmail,
    followUsPhone,
    followUsContactButtonText,
    followUsContactButtonUrl,
    followUsContactButtonTarget,
    followUsSocials,
    showSearch,
    searchMode,
    showMiniCart,
    showMyAccount,
    myAccountIconOnly,
    showSearchMobile,
    showCartMobile,
    showCtaButton,
    ctaButtonText,
    ctaButtonUrl,
    ctaButtonTarget,
    ctaButtonStyle,
    showCtaButtonMobile,
    stickyHeader,
    stickyStyle,
    showBottomBorder,
    bottomBorderColor,
    headerLayout,
    innerMaxWidth,
  } = attributes;

  const menus = useSelect(
    (select) => select(coreStore).getEntityRecords('root', 'menu', { per_page: -1, context: 'view' }) ?? [],
    []
  );

  const siteTitle = useSelect(
    (select) => {
      const site = select(coreStore).getEntityRecord('root', 'site');
      return typeof site?.title === 'string' ? site.title : '';
    },
    []
  );

  const menuOptions = [
    { label: __('— Theme location fallback —', 'nextora'), value: 0 },
    ...(Array.isArray(menus)
      ? menus.map((m) => ({ label: m.name || `#${m.id}`, value: m.id }))
      : []),
  ];

  const themeColorPaletteRaw = useSelect((select) => {
    try {
      const s = select('core/block-editor').getSettings() ?? {};
      if (Array.isArray(s.colors) && s.colors.length) {
        return s.colors;
      }
      if (Array.isArray(s.color?.palette)) {
        return s.color.palette;
      }
    } catch {
      /* getSettings unavailable in some editor contexts */
    }
    return [];
  }, []);

  const themeColorPalette = useMemo(() => {
    if (!Array.isArray(themeColorPaletteRaw)) {
      return [];
    }
    return themeColorPaletteRaw.filter(
      (c) =>
        c &&
        typeof c === 'object' &&
        typeof (c.color ?? c.value) === 'string'
    );
  }, [themeColorPaletteRaw]);

  const blockProps = useBlockProps({
    className: 'nextora-header-block--editor',
  });

  const desktopLogoWidth =
    typeof logoWidth === 'number' && logoWidth > 0 ? logoWidth : 150;
  const mobileLogoWidth =
    typeof logoWidthMobile === 'number' && logoWidthMobile > 0
      ? logoWidthMobile
      : desktopLogoWidth;

  const followUsSocialRows = useMemo(() => {
    const raw = Array.isArray(followUsSocials) ? followUsSocials : DEFAULT_FOLLOW_US_SOCIALS;
    const byNetwork = {};
    raw.forEach((row) => {
      if (row && typeof row === 'object' && typeof row.network === 'string') {
        byNetwork[row.network] = row;
      }
    });
    return DEFAULT_FOLLOW_US_SOCIALS.map(
      (fallback) => byNetwork[fallback.network] ?? fallback
    );
  }, [followUsSocials]);

  const updateFollowUsSocial = (network, patch) => {
    const next = followUsSocialRows.map((row) =>
      row.network === network ? { ...row, ...patch } : row
    );
    setAttributes({ followUsSocials: next });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Logo', 'nextora')} initialOpen>
          <p className="components-help-text" style={{ marginTop: 0 }}>
            {__(
              'Image: uses the logo uploaded below (saved on this block), or the site title when none is set. Text: uses the text below (defaults to the site title when empty). Optional mobile logo and max width apply below 768px.',
              'nextora'
            )}
          </p>
          <SelectControl
            label={__('Logo type', 'nextora')}
            value={logoType}
            options={[
              { label: __('Image', 'nextora'), value: 'image' },
              { label: __('Text', 'nextora'), value: 'text' },
            ]}
            onChange={(v) => setAttributes({ logoType: v })}
          />
          {logoType === 'image' ? (
            <>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) =>
                    setAttributes({ logoImageId: media.id, logoImageUrl: media.url || '' })
                  }
                  allowedTypes={['image']}
                  value={attributes.logoImageId || 0}
                  render={({ open }) => (
                    <div className="nextora-header-block__editor-media">
                      {logoImageUrl ? (
                        <img
                          src={logoImageUrl}
                          alt=""
                          style={{ maxWidth: desktopLogoWidth, height: 'auto' }}
                        />
                      ) : null}
                      <Button variant="secondary" onClick={open}>
                        {logoImageUrl ? __('Replace logo image', 'nextora') : __('Upload logo image', 'nextora')}
                      </Button>
                    </div>
                  )}
                />
              </MediaUploadCheck>
              <RangeControl
                label={__('Logo max width (px)', 'nextora')}
                value={desktopLogoWidth}
                onChange={(v) => setAttributes({ logoWidth: v ?? 150 })}
                min={40}
                max={400}
                help={__('Applies to the main logo image from 768px up.', 'nextora')}
              />
              <p className="components-base-control__label" style={{ marginTop: '1rem' }}>
                {__('Mobile logo (optional)', 'nextora')}
              </p>
              <p className="components-help-text" style={{ marginTop: 0 }}>
                {__(
                  'Shown below 768px. When empty, the main logo is used instead.',
                  'nextora'
                )}
              </p>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) =>
                    setAttributes({
                      logoImageIdMobile: media.id,
                      logoImageUrlMobile: media.url || '',
                    })
                  }
                  allowedTypes={['image']}
                  value={attributes.logoImageIdMobile || 0}
                  render={({ open }) => (
                    <div className="nextora-header-block__editor-media">
                      {logoImageUrlMobile ? (
                        <img
                          src={logoImageUrlMobile}
                          alt=""
                          style={{ maxWidth: mobileLogoWidth, height: 'auto' }}
                        />
                      ) : null}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <Button variant="secondary" onClick={open}>
                          {logoImageUrlMobile
                            ? __('Replace mobile logo', 'nextora')
                            : __('Upload mobile logo', 'nextora')}
                        </Button>
                        {logoImageUrlMobile ? (
                          <Button
                            variant="tertiary"
                            isDestructive
                            onClick={() =>
                              setAttributes({
                                logoImageIdMobile: 0,
                                logoImageUrlMobile: '',
                              })
                            }
                          >
                            {__('Remove mobile logo', 'nextora')}
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  )}
                />
              </MediaUploadCheck>
              <RangeControl
                label={__('Logo max width mobile (px)', 'nextora')}
                value={mobileLogoWidth}
                onChange={(v) => setAttributes({ logoWidthMobile: v ?? 0 })}
                min={40}
                max={400}
                help={__(
                  'Below 768px. Starts at the desktop value until you change it.',
                  'nextora'
                )}
              />
            </>
          ) : (
            <TextControl
              label={__('Logo text', 'nextora')}
              value={logoText}
              onChange={(v) => setAttributes({ logoText: v })}
              placeholder={siteTitle || undefined}
              help={__(
                'Leave empty to use the site title on the front end.',
                'nextora'
              )}
            />
          )}
          <TextControl
            label={__('Home link (optional)', 'nextora')}
            value={logoLink}
            onChange={(v) => setAttributes({ logoLink: v })}
            help={__('Leave empty to use the site home URL.', 'nextora')}
          />
        </PanelBody>

        <PanelBody title={__('Navigation', 'nextora')} initialOpen>
          {(!menus || menus.length === 0) && (
            <Notice status="warning" isDismissible={false}>
              {__('Create a menu under Appearance → Menus (or Editor → Navigation) first.', 'nextora')}
            </Notice>
          )}
          <SelectControl
            label={__('Menu', 'nextora')}
            value={menuId}
            options={menuOptions}
            onChange={(v) => setAttributes({ menuId: parseInt(v, 10) || 0 })}
            help={__(
              'Pick a specific menu, or use the fallback location when nothing is selected.',
              'nextora'
            )}
          />
          <SelectControl
            label={__('Fallback location', 'nextora')}
            value={menuLocation}
            options={[
              { label: __('Primary', 'nextora'), value: 'primary' },
              { label: __('Footer', 'nextora'), value: 'footer' },
            ]}
            onChange={(v) => setAttributes({ menuLocation: v })}
            help={__('Used when no menu is chosen above.', 'nextora')}
          />
        </PanelBody>

        <PanelBody title={__('Icons & utilities', 'nextora')} initialOpen>
          <ToggleControl
            label={__('Follow Us', 'nextora')}
            checked={showFollowUs}
            onChange={(v) => setAttributes({ showFollowUs: v })}
            help={__(
              'Shows a dropdown before the search icon with social links, contact details, and a Contact Us button.',
              'nextora'
            )}
          />
          {showFollowUs && (
            <>
              <ToggleControl
                label={__('Show Follow Us in header bar on small screens', 'nextora')}
                checked={showFollowUsMobile}
                onChange={(v) => setAttributes({ showFollowUsMobile: v })}
                help={__(
                  'When off, Follow Us appears inside the mobile menu instead of the header bar.',
                  'nextora'
                )}
              />
              <TextControl
                label={__('Trigger label', 'nextora')}
                value={followUsLabel}
                onChange={(v) => setAttributes({ followUsLabel: v ?? '' })}
                placeholder={__('Follow Us', 'nextora')}
              />
              <TextControl
                label={__('Support text', 'nextora')}
                value={followUsSupportText}
                onChange={(v) => setAttributes({ followUsSupportText: v ?? '' })}
                placeholder={__("We're here to help! Reach out anytime.", 'nextora')}
              />
              <p className="components-base-control__label" style={{ marginTop: '1rem' }}>
                {__('Social links', 'nextora')}
              </p>
              {followUsSocialRows.map((row) => (
                <div key={row.network} style={{ marginBottom: '0.75rem' }}>
                  <ToggleControl
                    label={FOLLOW_US_SOCIAL_LABELS[row.network] ?? row.network}
                    checked={!!row.enabled}
                    onChange={(v) => updateFollowUsSocial(row.network, { enabled: v })}
                  />
                  {row.enabled ? (
                    <URLInput
                      value={row.url || ''}
                      onChange={(url) => updateFollowUsSocial(row.network, { url: url ?? '' })}
                    />
                  ) : null}
                </div>
              ))}
              <TextControl
                label={__('Email', 'nextora')}
                value={followUsEmail}
                onChange={(v) => setAttributes({ followUsEmail: v ?? '' })}
                placeholder="hello@example.com"
                type="email"
              />
              <TextControl
                label={__('Phone', 'nextora')}
                value={followUsPhone}
                onChange={(v) => setAttributes({ followUsPhone: v ?? '' })}
                placeholder="+1 (555) 000-0000"
              />
              <TextControl
                label={__('Contact Us button text', 'nextora')}
                value={followUsContactButtonText}
                onChange={(v) => setAttributes({ followUsContactButtonText: v ?? '' })}
                placeholder={__('Contact Us', 'nextora')}
              />
              <p className="components-base-control__label">{__('Contact Us button URL', 'nextora')}</p>
              <URLInput
                value={followUsContactButtonUrl}
                onChange={(url) => setAttributes({ followUsContactButtonUrl: url ?? '' })}
              />
              <ToggleControl
                label={__('Open Contact Us in new tab', 'nextora')}
                checked={followUsContactButtonTarget}
                onChange={(v) => setAttributes({ followUsContactButtonTarget: v })}
              />
            </>
          )}

          <ToggleControl
            label={__('Search', 'nextora')}
            checked={showSearch}
            onChange={(v) => setAttributes({ showSearch: v })}
          />
          {showSearch && (
            <>
              <SelectControl
                label={__('Search style', 'nextora')}
                value={searchMode}
                options={[
                  { label: __('Modal (live spotlight)', 'nextora'), value: 'spotlight' },
                  { label: __('Simple form', 'nextora'), value: 'simple' },
                ]}
                onChange={(v) => setAttributes({ searchMode: v })}
              />
              <p className="components-help-text" style={{ marginBottom: '0.75rem' }}>
                {__(
                  'Modal copy and labels use the theme defaults. Add the Spotlight search block elsewhere or use developer hooks to change them.',
                  'nextora'
                )}
              </p>
            </>
          )}
          <ToggleControl
            label={__('Show search on small screens', 'nextora')}
            checked={showSearchMobile}
            onChange={(v) => setAttributes({ showSearchMobile: v })}
            disabled={!showSearch}
          />

          <p className="components-help-text" style={{ margin: '1rem 0 0.35rem' }}>
            {__('WooCommerce (when active)', 'nextora')}
          </p>
          <ToggleControl
            label={__('Shopping cart', 'nextora')}
            checked={showMiniCart}
            onChange={(v) => setAttributes({ showMiniCart: v })}
            help={__(
              'Uses the official WooCommerce Mini-Cart block (drawer and live cart updates).',
              'nextora',
            )}
          />
          <ToggleControl
            label={__('My account', 'nextora')}
            checked={showMyAccount}
            onChange={(v) => setAttributes({ showMyAccount: v })}
          />
          <ToggleControl
            label={__('Account: icon only', 'nextora')}
            checked={myAccountIconOnly}
            onChange={(v) => setAttributes({ myAccountIconOnly: v })}
            disabled={!showMyAccount}
          />
          <ToggleControl
            label={__('Show cart on small screens', 'nextora')}
            checked={showCartMobile}
            onChange={(v) => setAttributes({ showCartMobile: v })}
            disabled={!showMiniCart}
          />

          <p className="components-help-text" style={{ margin: '1rem 0 0.35rem' }}>
            {__('Call to action', 'nextora')}
          </p>
          <ToggleControl
            label={__('Show CTA button', 'nextora')}
            checked={showCtaButton}
            onChange={(v) => setAttributes({ showCtaButton: v })}
            help={__(
              'Appears after the utility icons (search, cart, account).',
              'nextora',
            )}
          />
          {showCtaButton && (
            <>
              <TextControl
                label={__('Button text', 'nextora')}
                value={ctaButtonText}
                onChange={(v) => setAttributes({ ctaButtonText: v ?? '' })}
                placeholder={__('Get started', 'nextora')}
              />
              <p className="components-base-control__label">{__('Button URL', 'nextora')}</p>
              <URLInput
                value={ctaButtonUrl}
                onChange={(url) => setAttributes({ ctaButtonUrl: url ?? '' })}
              />
              <ToggleControl
                label={__('Open in new tab', 'nextora')}
                checked={ctaButtonTarget}
                onChange={(v) => setAttributes({ ctaButtonTarget: v })}
              />
              <SelectControl
                label={__('Button style', 'nextora')}
                value={ctaButtonStyle}
                options={[
                  { label: __('Solid', 'nextora'), value: 'solid' },
                  { label: __('Outline', 'nextora'), value: 'outline' },
                ]}
                onChange={(v) => setAttributes({ ctaButtonStyle: v || 'solid' })}
              />
              <ToggleControl
                label={__('Show CTA on small screens', 'nextora')}
                checked={showCtaButtonMobile}
                onChange={(v) => setAttributes({ showCtaButtonMobile: v })}
              />
            </>
          )}
        </PanelBody>

        <PanelBody title={__('Layout', 'nextora')} initialOpen={false}>
          <SelectControl
            label={__('Header layout', 'nextora')}
            value={headerLayout}
            options={[
              {
                label: __('Logo left · menu & icons right', 'nextora'),
                value: 'logo-nav-end',
              },
              {
                label: __('Logo left · menu center · icons right', 'nextora'),
                value: 'logo-nav-center',
              },
              {
                label: __('Menu left · logo center · icons right', 'nextora'),
                value: 'nav-start-logo-center',
              },
              {
                label: __('Two rows (logo & icons, then menu)', 'nextora'),
                value: 'two-row',
              },
            ]}
            onChange={(v) => setAttributes({ headerLayout: v })}
            help={__(
              'Wide layouts use the grid from 768px up. On smaller screens the bar stays compact: logo, utilities, and the menu button.',
              'nextora'
            )}
          />
          <TextControl
            label={__('Inner max width', 'nextora')}
            value={innerMaxWidth}
            onChange={(v) => setAttributes({ innerMaxWidth: v })}
            help={__(
              'Optional. Sets max-width only on the header content wrapper (.nextora-header-block__inner), e.g. 1200px, 75rem, or var(--wp--style--global--wide-size). Centers that row; background on the block is unchanged. Leave empty for no limit.',
              'nextora'
            )}
            autoComplete="off"
          />
          <ToggleControl
            label={__('Sticky header', 'nextora')}
            checked={stickyHeader}
            onChange={(v) => setAttributes({ stickyHeader: v })}
          />
          {stickyHeader && (
            <SelectControl
              label={__('When sticky', 'nextora')}
              value={stickyStyle}
              options={[
                { label: __('Always pinned', 'nextora'), value: 'always' },
                { label: __('Show when scrolling up', 'nextora'), value: 'scroll-up' },
              ]}
              onChange={(v) => setAttributes({ stickyStyle: v })}
              help={__(
                'Scroll-up hides the bar while reading downward and brings it back when scrolling up.',
                'nextora'
              )}
            />
          )}
        </PanelBody>

        <PanelBody title={__('Advanced', 'nextora')} initialOpen={false}>
          <RangeControl
            label={__('Submenu depth', 'nextora')}
            value={menuDepth}
            onChange={(v) => setAttributes({ menuDepth: v ?? 4 })}
            min={1}
            max={8}
            help={__('How many levels of nested items to output in the menu tree.', 'nextora')}
          />
        </PanelBody>
      </InspectorControls>

      <InspectorControls group="styles">
        <PanelBody title={__('Bottom border', 'nextora')} initialOpen>
          <ToggleControl
            label={__('Show border line', 'nextora')}
            checked={showBottomBorder}
            onChange={(v) => setAttributes({ showBottomBorder: v })}
            help={__('Draws a line along the bottom of the header band.', 'nextora')}
          />
          {showBottomBorder && (
            <>
              <p className="components-base-control__label" style={{ marginBottom: '0.5rem' }}>
                {__('Border color', 'nextora')}
              </p>
              <ColorPalette
                colors={themeColorPalette}
                value={bottomBorderColor || ''}
                onChange={(c) =>
                  setAttributes({ bottomBorderColor: typeof c === 'string' && c ? c : '' })
                }
              />
            </>
          )}
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <Disabled>
          <ServerSideRender
            key={[
              logoType,
              logoImageUrl,
              logoImageUrlMobile,
              desktopLogoWidth,
              mobileLogoWidth,
              showFollowUs,
              followUsLabel,
              followUsSupportText,
              followUsEmail,
              followUsPhone,
              followUsContactButtonText,
              followUsContactButtonUrl,
              JSON.stringify(followUsSocialRows),
            ].join('|')}
            block={metadata.name}
            attributes={attributes}
            httpMethod="POST"
          />
        </Disabled>
      </div>
    </>
  );
}
