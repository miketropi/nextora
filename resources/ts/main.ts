/**
 * Front-end entry (compiled to assets/js/main.js).
 * Add interactive behavior for child themes here.
 */

import { initArticleShare } from "./lib/article-share";
import { initCommentTiptap } from "./lib/comment-tiptap";
import { attachScrollAnimationGlobals, initScrollAnimations } from "./lib/scroll-animations";
import { initHeaderSticky } from "./header-sticky";
import { initHeaderNavigation } from "./header-nav";
import { bindHeaderMiniCartAfterAjaxAdd, mountHeaderMiniCartPortalToBody } from "./mini-cart-portal";
import { attachModalGlobals, initModals } from "./lib/modal";
import { initSpotlightSearch } from "./lib/spotlight-search";
import { mountSpotlightSearchPortalToBody } from "./spotlight-search-portal";

const root = document.documentElement;
root.classList.add("nextora-js");

initHeaderSticky();
initHeaderNavigation();
mountHeaderMiniCartPortalToBody();
mountSpotlightSearchPortalToBody();
initModals();
bindHeaderMiniCartAfterAjaxAdd();
attachModalGlobals();
initSpotlightSearch();
initArticleShare();
initCommentTiptap();
attachScrollAnimationGlobals();
initScrollAnimations();