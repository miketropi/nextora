// @ts-nocheck
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
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

export default function HeaderEdit({ attributes, setAttributes }) {
  const {
    useSiteLogo,
    logoType,
    logoImageUrl,
    logoText,
    logoWidth,
    logoLink,
    menuId,
    menuLocation,
    menuDepth,
    showSearch,
    searchMode,
    showMiniCart,
    showMyAccount,
    myAccountIconOnly,
    showSearchMobile,
    showCartMobile,
    innerMaxWidth,
    innerMaxWidthCustom,
    innerRowPadding,
    stickyHeader,
    stickyStyle,
    showBottomBorder,
    bottomBorderColor,
  } = attributes;

  const menus = useSelect(
    (select) => select(coreStore).getEntityRecords('root', 'menu', { per_page: -1, context: 'view' }) ?? [],
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

  const paddingHelp = __(
    'Use theme spacing sizes (e.g. 1rem, var(--wp--preset--spacing--10)) or px/em/% . Leave empty for no padding on that side.',
    'nextora'
  );

  const innerPad = useMemo(() => {
    const p = innerRowPadding && typeof innerRowPadding === 'object' ? innerRowPadding : {};
    const side = (k) => {
      const v = p[k];
      if (v === undefined || v === null || v === '') {
        return '';
      }
      return String(v);
    };
    return {
      top: side('top'),
      right: side('right'),
      bottom: side('bottom'),
      left: side('left'),
    };
  }, [innerRowPadding]);

  const mergeInnerRowPadding = (partial) => {
    const base = {
      top: '',
      right: '',
      bottom: '',
      left: '',
      ...innerPad,
    };
    const norm = (v) => (v === undefined || v === null || v === '' ? '' : String(v));
    const next = { ...base };
    for (const [k, v] of Object.entries(partial || {})) {
      if (['top', 'right', 'bottom', 'left'].includes(k)) {
        next[k] = norm(v);
      }
    }
    setAttributes({ innerRowPadding: next });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Logo', 'nextora')} initialOpen>
          <ToggleControl
            label={__('Use site logo (Customizer)', 'nextora')}
            checked={useSiteLogo}
            onChange={(v) => setAttributes({ useSiteLogo: v })}
          />
          {!useSiteLogo && (
            <>
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
                          <img src={logoImageUrl} alt="" style={{ maxWidth: logoWidth, height: 'auto' }} />
                        ) : null}
                        <Button variant="secondary" onClick={open}>
                          {logoImageUrl ? __('Replace logo image', 'nextora') : __('Upload logo image', 'nextora')}
                        </Button>
                      </div>
                    )}
                  />
                </MediaUploadCheck>
              ) : (
                <TextControl
                  label={__('Logo text', 'nextora')}
                  value={logoText}
                  onChange={(v) => setAttributes({ logoText: v })}
                />
              )}
              <RangeControl
                label={__('Logo max width (px)', 'nextora')}
                value={logoWidth}
                onChange={(v) => setAttributes({ logoWidth: v })}
                min={40}
                max={400}
              />
            </>
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
        </PanelBody>

        <PanelBody title={__('Layout', 'nextora')} initialOpen={false}>
          <SelectControl
            label={__('Inner max width', 'nextora')}
            value={innerMaxWidth || ''}
            options={[
              { label: __('None (use full width of block)', 'nextora'), value: '' },
              { label: __('Content size (theme layout)', 'nextora'), value: 'content' },
              { label: __('Wide size (theme layout)', 'nextora'), value: 'wide' },
              { label: __('Custom…', 'nextora'), value: 'custom' },
            ]}
            onChange={(v) =>
              setAttributes({ innerMaxWidth: v, innerMaxWidthCustom: v === 'custom' ? innerMaxWidthCustom : '' })
            }
            help={__(
              'Content and wide follow theme.json → settings.layout (contentSize / wideSize), matching core layout widths. Block wide/full alignment and padding still apply to the header band.',
              'nextora'
            )}
          />
          {innerMaxWidth === 'custom' && (
            <TextControl
              label={__('Custom max-width', 'nextora')}
              value={innerMaxWidthCustom}
              onChange={(v) => setAttributes({ innerMaxWidthCustom: v })}
              help={__('Examples: 1200px, 80rem, min(100%, 80rem). Unsafe values are ignored.', 'nextora')}
            />
          )}
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
            onChange={(v) => setAttributes({ menuDepth: v })}
            min={1}
            max={8}
            help={__('How many levels of nested items to output in the menu tree.', 'nextora')}
          />
        </PanelBody>
      </InspectorControls>

      <InspectorControls group="styles">
        <PanelBody title={__('Inner row', 'nextora')} initialOpen>
          <p className="components-base-control__label" style={{ marginBottom: '0.5rem' }}>
            {__('Horizontal padding (left & right)', 'nextora')}
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              alignItems: 'flex-start',
            }}
          >
            <TextControl
              label={__('Left', 'nextora')}
              value={innerPad.left}
              onChange={(v) => mergeInnerRowPadding({ left: v })}
            />
            <TextControl
              label={__('Right', 'nextora')}
              value={innerPad.right}
              onChange={(v) => mergeInnerRowPadding({ right: v })}
            />
          </div>
          <div style={{ marginTop: '0.35rem', marginBottom: '0.85rem' }}>
            <Button
              variant="link"
              isSmall
              onClick={() => mergeInnerRowPadding({ left: '', right: '' })}
            >
              {__('Clear horizontal padding', 'nextora')}
            </Button>
            <p className="components-help-text" style={{ marginTop: '0.35rem' }}>
              {paddingHelp}
            </p>
          </div>

          <p className="components-base-control__label" style={{ marginBottom: '0.5rem' }}>
            {__('Vertical padding (top & bottom)', 'nextora')}
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              alignItems: 'flex-start',
            }}
          >
            <TextControl
              label={__('Top', 'nextora')}
              value={innerPad.top}
              onChange={(v) => mergeInnerRowPadding({ top: v })}
            />
            <TextControl
              label={__('Bottom', 'nextora')}
              value={innerPad.bottom}
              onChange={(v) => mergeInnerRowPadding({ bottom: v })}
            />
          </div>
          <div style={{ marginTop: '0.35rem' }}>
            <Button
              variant="link"
              isSmall
              onClick={() => mergeInnerRowPadding({ top: '', bottom: '' })}
            >
              {__('Clear vertical padding', 'nextora')}
            </Button>
            <p className="components-help-text" style={{ marginTop: '0.35rem' }}>
              {paddingHelp}
            </p>
          </div>
          <p className="components-help-text" style={{ marginTop: '0.75rem' }}>
            {__(
              'Applies to the inner flex row (logo, menu, actions). Block padding under Dimensions still affects the outer header band.',
              'nextora'
            )}
          </p>
        </PanelBody>
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
          <ServerSideRender block={metadata.name} attributes={attributes} />
        </Disabled>
      </div>
    </>
  );
}
