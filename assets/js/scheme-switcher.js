/**
 * Color scheme switcher — floating bubble UI.
 *
 * Reads window.NEXTORA_SCHEMES (injected server-side), renders scheme
 * options in a popup panel, overrides --wp--preset--color--* as inline
 * styles on <html>, persists via localStorage.
 */
( function () {
	'use strict';

	var schemes = window.NEXTORA_SCHEMES || {};
	var root = document.documentElement;
	var STORAGE_KEY = 'nextora-color-scheme';

	var switcher = document.querySelector( '[data-nextora-scheme-switcher]' );
	if ( ! switcher ) {
		return;
	}

	var trigger = switcher.querySelector( '.scheme-switcher__trigger' );
	var panel   = switcher.querySelector( '.scheme-switcher__panel' );

	/**
	 * Build the scheme option buttons inside the panel.
	 * "Default" is always first; each scheme from NEXTORA_SCHEMES follows.
	 */
	function buildPanel() {
		var frag = document.createDocumentFragment();

		// "Default" reset option.
		var defaultBtn = document.createElement( 'button' );
		defaultBtn.type = 'button';
		defaultBtn.dataset.scheme = 'default';
		defaultBtn.textContent = 'Default';

		frag.appendChild( defaultBtn );

		// Named schemes.
		Object.keys( schemes ).forEach( function ( slug ) {
			var btn = document.createElement( 'button' );
			btn.type = 'button';
			btn.dataset.scheme = slug;
			btn.textContent = schemes[ slug ].title;
			frag.appendChild( btn );
		} );

		panel.appendChild( frag );
	}

	buildPanel();

	/**
	 * Apply a named scheme: override CSS vars on <html> and persist.
	 *
	 * @param {string} slug
	 * @return {boolean}
	 */
	function applyScheme( slug ) {
		var scheme = schemes[ slug ];
		if ( ! scheme ) {
			return false;
		}
		clearInlineVars();
		Object.keys( scheme.colors ).forEach( function ( colorSlug ) {
			root.style.setProperty(
				'--wp--preset--color--' + colorSlug,
				scheme.colors[ colorSlug ]
			);
		} );
		try {
			localStorage.setItem( STORAGE_KEY, slug );
		} catch ( e ) { /* storage unavailable — still works for this view */ }
		updatePressedState( slug );
		return true;
	}

	/** Remove ALL inline colour overrides from <html>. */
	function clearInlineVars() {
		Object.keys( schemes ).forEach( function ( slug ) {
			Object.keys( schemes[ slug ].colors ).forEach( function ( colorSlug ) {
				root.style.removeProperty( '--wp--preset--color--' + colorSlug );
			} );
		} );
	}

	/** Reset to theme defaults: remove overrides + stored choice. */
	function resetScheme() {
		clearInlineVars();
		try {
			localStorage.removeItem( STORAGE_KEY );
		} catch ( e ) {}
		updatePressedState( 'default' );
	}

	/**
	 * Mark the active scheme button in the panel.
	 *
	 * @param {string} activeSlug
	 */
	function updatePressedState( activeSlug ) {
		panel.querySelectorAll( '[data-scheme]' ).forEach( function ( el ) {
			el.setAttribute(
				'aria-pressed',
				el.dataset.scheme === activeSlug ? 'true' : 'false'
			);
		} );
	}

	// ------------------------------------------------------------------
	//  Panel open / close
	// ------------------------------------------------------------------

	function openPanel() {
		panel.classList.add( 'is-open' );
		trigger.setAttribute( 'aria-expanded', 'true' );
	}

	function closePanel() {
		panel.classList.remove( 'is-open' );
		trigger.setAttribute( 'aria-expanded', 'false' );
	}

	function togglePanel() {
		if ( panel.classList.contains( 'is-open' ) ) {
			closePanel();
		} else {
			openPanel();
		}
	}

	// ------------------------------------------------------------------
	//  Bootstrap — restore saved choice, signal active state
	// ------------------------------------------------------------------

	var saved = null;
	try {
		saved = localStorage.getItem( STORAGE_KEY );
	} catch ( e ) {}

	if ( saved && schemes[ saved ] ) {
		applyScheme( saved );
	} else {
		updatePressedState( 'default' );
	}

	root.classList.add( 'has-scheme-switcher' );

	// ------------------------------------------------------------------
	//  Event listeners
	// ------------------------------------------------------------------

	trigger.addEventListener( 'click', function ( e ) {
		e.stopPropagation();
		togglePanel();
	} );

	// Close when clicking outside the switcher.
	document.addEventListener( 'click', function ( e ) {
		if ( panel.classList.contains( 'is-open' ) && ! switcher.contains( e.target ) ) {
			closePanel();
		}
	} );

	// Close on Escape, then return focus to trigger.
	document.addEventListener( 'keydown', function ( e ) {
		if ( e.key === 'Escape' && panel.classList.contains( 'is-open' ) ) {
			closePanel();
			trigger.focus();
		}
	} );

	// Scheme selection inside the panel.
	panel.addEventListener( 'click', function ( e ) {
		var btn = e.target.closest( '[data-scheme]' );
		if ( ! btn ) {
			return;
		}
		var slug = btn.dataset.scheme;
		if ( slug === 'default' ) {
			resetScheme();
		} else {
			applyScheme( slug );
		}
		closePanel();
	} );
} )();
