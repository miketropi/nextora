/**
 * Front-end entry (compiled to assets/js/main.js).
 * Add interactive behavior for child themes here.
 */

import { initArticleShare } from "./lib/article-share";
import { initCommentTiptap } from "./lib/comment-tiptap";
import { initHeaderNavigation } from "./header-nav";
import { attachModalGlobals, initModals } from "./lib/modal";
import { initSpotlightSearch } from "./lib/spotlight-search";

const root = document.documentElement;
root.classList.add("nextora-js");

initHeaderNavigation();
initModals();
attachModalGlobals();
initSpotlightSearch();
initArticleShare();
initCommentTiptap();
