/**
 * Front-end entry (compiled to assets/js/main.js).
 * Add interactive behavior for child themes here.
 */

import { initArticleShare } from "./lib/article-share";
import { initCommentTiptap } from "./lib/comment-tiptap";
import { attachScrollAnimationGlobals, initScrollAnimations } from "./lib/scroll-animations";
import { initHeaderSticky } from "./header-sticky";
import { initHeaderNavigation } from "./header-nav";
import { initHeaderFollowUs } from "./header-follow-us";
import { bindHeaderMiniCartAfterAjaxAdd, mountHeaderMiniCartPortalToBody } from "./mini-cart-portal";
import { attachModalGlobals, initModals } from "./lib/modal";
import { initSpotlightSearch } from "./lib/spotlight-search";
import { mountSpotlightSearchPortalToBody } from "./spotlight-search-portal";
import { mountAdvancedButtonModalPortalToBody } from "./advanced-button-modal-portal";

function bootNextora(): void {
	document.documentElement.classList.add("nextora-js");

	initHeaderSticky();
	initHeaderNavigation();
	initHeaderFollowUs();
	mountHeaderMiniCartPortalToBody();
	mountSpotlightSearchPortalToBody();
	mountAdvancedButtonModalPortalToBody();
	initModals();
	bindHeaderMiniCartAfterAjaxAdd();
	attachModalGlobals();
	initSpotlightSearch();
	initArticleShare();
	initCommentTiptap();
	attachScrollAnimationGlobals();
	initScrollAnimations();
}

// Scripts may print in <head> on some views — wait for <body> before DOM queries / listeners.
if (document.readyState === "loading" || !document.body) {
	document.addEventListener("DOMContentLoaded", bootNextora, { once: true });
} else {
	bootNextora();
}