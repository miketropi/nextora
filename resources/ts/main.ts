/**
 * Front-end entry (compiled to assets/js/main.js).
 * Add interactive behavior for child themes here.
 */

import { initArticleShare } from "./lib/article-share";
import { initCommentTiptap } from "./lib/comment-tiptap";
import { initHeaderSticky } from "./header-sticky";
import { initHeaderNavigation } from "./header-nav";
import { bindHeaderMiniCartAfterAjaxAdd, mountHeaderMiniCartPortalToBody } from "./mini-cart-portal";
import { attachModalGlobals, initModals } from "./lib/modal";
import { initSpotlightSearch } from "./lib/spotlight-search";

const root = document.documentElement;
root.classList.add("nextora-js");

initHeaderSticky(); 
initHeaderNavigation();
mountHeaderMiniCartPortalToBody();
initModals();
bindHeaderMiniCartAfterAjaxAdd();
attachModalGlobals(); 
initSpotlightSearch();
initArticleShare();
initCommentTiptap();