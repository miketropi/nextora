/**
 * Front-end entry (compiled to assets/js/main.js).
 * Add interactive behavior for child themes here.
 */

import { initHeaderNavigation } from "./header-nav";

const root = document.documentElement;
root.classList.add("nextora-js");

initHeaderNavigation();
