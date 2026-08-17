/**
 * Color & font scheme switcher — floating popover UI.
 *
 * Reads `window.NEXTORA_THEME_OPTIONS` (injected server-side), renders color
 * swatches and font presets in a popover, overrides
 * `--wp--preset--color--*` (colors) and `--nextora-font-body/heading`
 * (fonts) as inline styles on `<html>`, persists to localStorage, and
 * supports `?theme=<slug>&color=<slug>&font=<slug>` URL params.
 */
( function () {
	'use strict';

	var OPTIONS = window.NEXTORA_THEME_OPTIONS || {};
	var COLOR_PRESETS = OPTIONS.colorPresets || {};
	var FONT_PRESETS = OPTIONS.fontPresets || {};
	var THEMES = OPTIONS.themes || {};
	var FONTS = OPTIONS.fonts || {};
	var CONFIG = OPTIONS.config || {};
	var INITIAL = CONFIG.initial || {};
	var SECTIONS = CONFIG.sections || {};

	var STORAGE_KEY = 'nextora-scheme-preferences';
	var LEGACY_STORAGE_KEY = 'nextora-color-scheme';

	var root = document.documentElement;

	var switcher = document.querySelector( '[data-nextora-scheme-switcher]' );
	if ( ! switcher ) {
		return;
	}

	var trigger = switcher.querySelector( '.scheme-switcher__trigger' );
	var popover = switcher.querySelector( '.scheme-switcher__popover' );
	var closeBtn = switcher.querySelector( '.scheme-switcher__close' );
	var colorList = switcher.querySelector( '[data-scheme-color-list]' );
	var fontList = switcher.querySelector( '[data-scheme-font-list]' );
	var themeList = switcher.querySelector( '[data-scheme-theme-list]' );
	var copyBtn = switcher.querySelector( '[data-scheme-copy-link]' );
	var resetBtn = switcher.querySelector( '[data-scheme-reset]' );

	var state = {
		theme: null,
		color: null,
		font: null,
	};

	/* ------------------------------------------------------------------
	 * Color application
	 * ------------------------------------------------------------------ */

	function clearColorOverrides() {
		Object.keys( COLOR_PRESETS ).forEach( function ( slug ) {
			Object.keys( COLOR_PRESETS[ slug ].colors || {} ).forEach( function ( colorSlug ) {
				root.style.removeProperty( '--wp--preset--color--' + colorSlug );
			} );
		} );
	}

	function applyColor( slug ) {
		var preset = COLOR_PRESETS[ slug ];
		if ( ! preset ) {
			return false;
		}

		clearColorOverrides();

		Object.keys( preset.colors ).forEach( function ( colorSlug ) {
			root.style.setProperty(
				'--wp--preset--color--' + colorSlug,
				preset.colors[ colorSlug ]
			);
		} );

		state.theme = null;
		state.color = slug;
		return true;
	}

	function resetColor() {
		clearColorOverrides();
		state.theme = null;
		state.color = null;
	}

	/* ------------------------------------------------------------------
	 * Font application
	 * ------------------------------------------------------------------ */

	function clearFontOverrides() {
		root.style.removeProperty( '--nextora-font-body' );
		root.style.removeProperty( '--nextora-font-heading' );
	}

	function applyFont( slug ) {
		var preset = FONT_PRESETS[ slug ];
		if ( ! preset ) {
			return false;
		}

		clearFontOverrides();

		var body = FONTS[ preset.body ];
		var heading = FONTS[ preset.heading ] || body;

		if ( body ) {
			root.style.setProperty( '--nextora-font-body', body.family );
		}
		if ( heading ) {
			root.style.setProperty( '--nextora-font-heading', heading.family );
		}

		state.theme = null;
		state.font = slug;
		return true;
	}

	function resetFont() {
		clearFontOverrides();
		state.theme = null;
		state.font = null;
	}

	/* ------------------------------------------------------------------
	 * Theme application (bundled color + font)
	 * ------------------------------------------------------------------ */

	function applyTheme( slug ) {
		var theme = THEMES[ slug ];
		if ( ! theme ) {
			return false;
		}

		clearColorOverrides();
		clearFontOverrides();

		Object.keys( theme.colors || {} ).forEach( function ( colorSlug ) {
			root.style.setProperty( '--wp--preset--color--' + colorSlug, theme.colors[ colorSlug ] );
		} );

		if ( theme.body ) {
			root.style.setProperty( '--nextora-font-body', theme.body );
		}
		if ( theme.heading ) {
			root.style.setProperty( '--nextora-font-heading', theme.heading );
		}

		state.theme = slug;
		state.color = null;
		state.font = null;
		return true;
	}

	function resetTheme() {
		clearColorOverrides();
		clearFontOverrides();
		state.theme = null;
		state.color = null;
		state.font = null;
	}

	/* ------------------------------------------------------------------
	 * Persistence (localStorage + URL params)
	 * ------------------------------------------------------------------ */

	function readStorage() {
		var stored = null;
		try {
			stored = localStorage.getItem( STORAGE_KEY );
		} catch ( e ) {}

		var prefs = null;
		if ( stored ) {
			try {
				prefs = JSON.parse( stored );
			} catch ( e ) {
				prefs = null;
			}
		}

		// One-time migration from the legacy single color key.
		if ( ! prefs ) {
			var legacy = null;
			try {
				legacy = localStorage.getItem( LEGACY_STORAGE_KEY );
			} catch ( e ) {}

			if ( legacy ) {
				prefs = { color: legacy, font: null };
				try {
					localStorage.removeItem( LEGACY_STORAGE_KEY );
				} catch ( e ) {}
			}
		}

		return prefs && typeof prefs === 'object' ? prefs : {};
	}

	function save() {
		try {
			localStorage.setItem(
				STORAGE_KEY,
				JSON.stringify( { v: 3, theme: state.theme, color: state.color, font: state.font } )
			);
			localStorage.removeItem( LEGACY_STORAGE_KEY );
		} catch ( e ) { /* storage unavailable — still works for this view */ }
	}

	function bootstrap() {
		var prefs = readStorage();
		var params = new URLSearchParams( window.location.search );
		var urlTheme = params.get( 'theme' );
		var urlColor = params.get( 'color' );
		var urlFont = params.get( 'font' );

		var theme = urlTheme && THEMES[ urlTheme ]
			? urlTheme
			: ( prefs.theme && THEMES[ prefs.theme ]
				? prefs.theme
				: ( INITIAL.theme && THEMES[ INITIAL.theme ] ? INITIAL.theme : null ) );

		var appliedFromUrl = Boolean(
			( urlTheme && THEMES[ urlTheme ] ) ||
			( urlColor && COLOR_PRESETS[ urlColor ] ) ||
			( urlFont && FONT_PRESETS[ urlFont ] )
		);

		if ( theme ) {
			applyTheme( theme );
		} else {
			// URL wins over storage; storage wins over config initial; initial wins over theme default.
			var color = urlColor && COLOR_PRESETS[ urlColor ]
				? urlColor
				: ( prefs.color && COLOR_PRESETS[ prefs.color ]
					? prefs.color
					: ( INITIAL.color && COLOR_PRESETS[ INITIAL.color ] ? INITIAL.color : null ) );

			var font = urlFont && FONT_PRESETS[ urlFont ]
				? urlFont
				: ( prefs.font && FONT_PRESETS[ prefs.font ]
					? prefs.font
					: ( INITIAL.font && FONT_PRESETS[ INITIAL.font ] ? INITIAL.font : null ) );

			if ( color ) {
				applyColor( color );
			}
			if ( font ) {
				applyFont( font );
			}
		}

		// Persist only when the URL carried a valid choice (shared links); a
		// config `initial` fallback must not be saved as a user choice.
		if ( appliedFromUrl ) {
			save();
		}

		updateUI();
	}

	/* ------------------------------------------------------------------
	 * UI construction
	 * ------------------------------------------------------------------ */

	function makeSwatch( slug, title, colors ) {
		var btn = document.createElement( 'button' );
		btn.type = 'button';
		btn.className = 'scheme-switcher__option';
		btn.dataset.schemeColor = slug;
		btn.setAttribute( 'aria-pressed', 'false' );

		var preview = document.createElement( 'span' );
		preview.className = 'scheme-switcher__swatch';
		preview.setAttribute( 'aria-hidden', 'true' );

		[ 'base', 'primary', 'contrast' ].forEach( function ( colorSlug ) {
			if ( colors && colors[ colorSlug ] ) {
				var dot = document.createElement( 'span' );
				dot.className = 'scheme-switcher__dot';
				dot.style.backgroundColor = colors[ colorSlug ];
				preview.appendChild( dot );
			}
		} );

		var label = document.createElement( 'span' );
		label.className = 'scheme-switcher__label';
		label.textContent = title;

		btn.appendChild( preview );
		btn.appendChild( label );
		return btn;
	}

	function makeFontOption( slug, preset ) {
		var btn = document.createElement( 'button' );
		btn.type = 'button';
		btn.className = 'scheme-switcher__option';
		btn.dataset.schemeFont = slug;
		btn.setAttribute( 'aria-pressed', 'false' );

		var body = FONTS[ preset.body ];
		if ( body ) {
			btn.style.fontFamily = body.family;
		}

		var preview = document.createElement( 'span' );
		preview.className = 'scheme-switcher__font-preview';
		preview.setAttribute( 'aria-hidden', 'true' );
		preview.textContent = 'Aa';

		var label = document.createElement( 'span' );
		label.className = 'scheme-switcher__label';
		label.textContent = preset.title;

		btn.appendChild( preview );
		btn.appendChild( label );
		return btn;
	}

	function makeThemeOption( slug, theme ) {
		var btn = document.createElement( 'button' );
		btn.type = 'button';
		btn.className = 'scheme-switcher__option';
		btn.dataset.schemeTheme = slug;
		btn.setAttribute( 'aria-pressed', 'false' );

		if ( theme.body ) {
			btn.style.fontFamily = theme.body;
		}

		var preview = document.createElement( 'span' );
		preview.className = 'scheme-switcher__swatch';
		preview.setAttribute( 'aria-hidden', 'true' );

		[ 'base', 'primary', 'contrast' ].forEach( function ( colorSlug ) {
			if ( theme.colors && theme.colors[ colorSlug ] ) {
				var dot = document.createElement( 'span' );
				dot.className = 'scheme-switcher__dot';
				dot.style.backgroundColor = theme.colors[ colorSlug ];
				preview.appendChild( dot );
			}
		} );

		var label = document.createElement( 'span' );
		label.className = 'scheme-switcher__label';
		label.textContent = theme.title;

		btn.appendChild( preview );
		btn.appendChild( label );
		return btn;
	}

	function buildUI() {
		var themeFrag = document.createDocumentFragment();
		if ( ! ( SECTIONS.themes && SECTIONS.themes.showDefault === false ) ) {
			themeFrag.appendChild( makeThemeOption( 'default', { title: 'Default', colors: null, body: null } ) );
		}
		Object.keys( THEMES ).forEach( function ( slug ) {
			themeFrag.appendChild( makeThemeOption( slug, THEMES[ slug ] ) );
		} );
		themeList.appendChild( themeFrag );

		var colorFrag = document.createDocumentFragment();
		if ( ! ( SECTIONS.colors && SECTIONS.colors.showDefault === false ) ) {
			colorFrag.appendChild( makeSwatch( 'default', 'Default', null ) );
		}
		Object.keys( COLOR_PRESETS ).forEach( function ( slug ) {
			colorFrag.appendChild( makeSwatch( slug, COLOR_PRESETS[ slug ].title, COLOR_PRESETS[ slug ].colors ) );
		} );
		colorList.appendChild( colorFrag );

		var fontFrag = document.createDocumentFragment();
		if ( ! ( SECTIONS.fonts && SECTIONS.fonts.showDefault === false ) ) {
			fontFrag.appendChild( makeFontOption( 'default', { title: 'Default', body: 'sans', heading: 'sans' } ) );
		}
		Object.keys( FONT_PRESETS ).forEach( function ( slug ) {
			fontFrag.appendChild( makeFontOption( slug, FONT_PRESETS[ slug ] ) );
		} );
		fontList.appendChild( fontFrag );
	}

	function applySectionVisibility() {
		if ( ( SECTIONS.themes && SECTIONS.themes.enabled === false ) || ! Object.keys( THEMES ).length ) {
			var themeSection = themeList.closest( '[data-scheme-section]' );
			if ( themeSection ) {
				themeSection.remove();
			}
		}

		if ( SECTIONS.colors && SECTIONS.colors.enabled === false ) {
			var colorSection = colorList.closest( '[data-scheme-section]' );
			if ( colorSection ) {
				colorSection.remove();
			}
		}

		if ( SECTIONS.fonts && SECTIONS.fonts.enabled === false ) {
			var fontSection = fontList.closest( '[data-scheme-section]' );
			if ( fontSection ) {
				fontSection.remove();
			}
		}
	}

	function updateUI() {
		themeList.querySelectorAll( '[data-scheme-theme]' ).forEach( function ( el ) {
			var slug = el.dataset.schemeTheme;
			var active = slug === 'default' ? ! state.theme : slug === state.theme;
			el.setAttribute( 'aria-pressed', active ? 'true' : 'false' );
		} );

		colorList.querySelectorAll( '[data-scheme-color]' ).forEach( function ( el ) {
			var slug = el.dataset.schemeColor;
			var active = slug === 'default' ? ! state.color : slug === state.color;
			el.setAttribute( 'aria-pressed', active ? 'true' : 'false' );
		} );

		fontList.querySelectorAll( '[data-scheme-font]' ).forEach( function ( el ) {
			var slug = el.dataset.schemeFont;
			var active = slug === 'default' ? ! state.font : slug === state.font;
			el.setAttribute( 'aria-pressed', active ? 'true' : 'false' );
		} );
	}

	/* ------------------------------------------------------------------
	 * Popover open / close + focus management
	 * ------------------------------------------------------------------ */

	function getFocusable() {
		return Array.prototype.slice.call(
			popover.querySelectorAll( 'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])' )
		).filter( function ( el ) {
			return el.offsetParent !== null;
		} );
	}

	function openPopover() {
		popover.classList.add( 'is-open' );
		popover.setAttribute( 'aria-hidden', 'false' );
		trigger.setAttribute( 'aria-expanded', 'true' );

		var focusable = getFocusable();
		if ( focusable.length ) {
			focusable[ 0 ].focus();
		}
	}

	function closePopover() {
		popover.classList.remove( 'is-open' );
		popover.setAttribute( 'aria-hidden', 'true' );
		trigger.setAttribute( 'aria-expanded', 'false' );
		trigger.focus();
	}

	function togglePopover() {
		if ( popover.classList.contains( 'is-open' ) ) {
			closePopover();
		} else {
			openPopover();
		}
	}

	function trapFocus( e ) {
		if ( e.key !== 'Tab' || ! popover.classList.contains( 'is-open' ) ) {
			return;
		}

		var focusable = getFocusable();
		if ( ! focusable.length ) {
			return;
		}

		var first = focusable[ 0 ];
		var last = focusable[ focusable.length - 1 ];

		if ( e.shiftKey && document.activeElement === first ) {
			e.preventDefault();
			last.focus();
		} else if ( ! e.shiftKey && document.activeElement === last ) {
			e.preventDefault();
			first.focus();
		}
	}

	/* ------------------------------------------------------------------
	 * Share link (copy ?color=…&font=…)
	 * ------------------------------------------------------------------ */

	function buildShareUrl() {
		var url = new URL( window.location.href );

		if ( state.theme ) {
			url.searchParams.set( 'theme', state.theme );
		} else {
			url.searchParams.delete( 'theme' );
		}

		if ( state.color ) {
			url.searchParams.set( 'color', state.color );
		} else {
			url.searchParams.delete( 'color' );
		}

		if ( state.font ) {
			url.searchParams.set( 'font', state.font );
		} else {
			url.searchParams.delete( 'font' );
		}

		return url.toString();
	}

	function flash( label ) {
		var original = copyBtn.textContent;
		copyBtn.textContent = label;
		copyBtn.classList.add( 'is-flashed' );
		window.setTimeout( function () {
			copyBtn.textContent = original;
			copyBtn.classList.remove( 'is-flashed' );
		}, 1400 );
	}

	function fallbackCopy( text ) {
		var ta = document.createElement( 'textarea' );
		ta.value = text;
		ta.setAttribute( 'readonly', '' );
		ta.style.position = 'fixed';
		ta.style.top = '-9999px';
		document.body.appendChild( ta );
		ta.select();
		try {
			document.execCommand( 'copy' );
		} catch ( e ) {}
		document.body.removeChild( ta );
	}

	function copyLink() {
		var url = buildShareUrl();
		var done = function () {
			flash( copyBtn.dataset.copiedLabel || 'Copied!' );
		};

		if ( navigator.clipboard && navigator.clipboard.writeText ) {
			navigator.clipboard.writeText( url ).then( done ).catch( function () {
				fallbackCopy( url );
				done();
			} );
		} else {
			fallbackCopy( url );
			done();
		}
	}

	/* ------------------------------------------------------------------
	 * Wire up
	 * ------------------------------------------------------------------ */

	buildUI();
	applySectionVisibility();

	trigger.addEventListener( 'click', function ( e ) {
		e.stopPropagation();
		togglePopover();
	} );

	if ( closeBtn ) {
		closeBtn.addEventListener( 'click', closePopover );
	}

	document.addEventListener( 'click', function ( e ) {
		if ( popover.classList.contains( 'is-open' ) && ! switcher.contains( e.target ) ) {
			closePopover();
		}
	} );

	document.addEventListener( 'keydown', function ( e ) {
		if ( e.key === 'Escape' && popover.classList.contains( 'is-open' ) ) {
			closePopover();
		}
		trapFocus( e );
	} );

	colorList.addEventListener( 'click', function ( e ) {
		var btn = e.target.closest( '[data-scheme-color]' );
		if ( ! btn ) {
			return;
		}

		var slug = btn.dataset.schemeColor;
		if ( slug === 'default' ) {
			resetColor();
		} else {
			applyColor( slug );
		}

		save();
		updateUI();
	} );

	themeList.addEventListener( 'click', function ( e ) {
		var btn = e.target.closest( '[data-scheme-theme]' );
		if ( ! btn ) {
			return;
		}

		var slug = btn.dataset.schemeTheme;
		if ( slug === 'default' ) {
			resetTheme();
		} else {
			applyTheme( slug );
		}

		save();
		updateUI();
	} );

	fontList.addEventListener( 'click', function ( e ) {
		var btn = e.target.closest( '[data-scheme-font]' );
		if ( ! btn ) {
			return;
		}

		var slug = btn.dataset.schemeFont;
		if ( slug === 'default' ) {
			resetFont();
		} else {
			applyFont( slug );
		}

		save();
		updateUI();
	} );

	if ( resetBtn ) {
		resetBtn.addEventListener( 'click', function () {
			resetTheme();
			save();
			updateUI();
		} );
	}

	if ( copyBtn ) {
		copyBtn.addEventListener( 'click', copyLink );
	}

	root.classList.add( 'has-scheme-switcher' );

	bootstrap();
} )();
