"use strict";
(() => {
  // blocks/value-cards/view.ts
  var tiltStates = [];
  var globalModal = null;
  var lastFocusedCard = null;
  var modalOpenClass = "nextora-value-cards__modal-overlay--open";
  function prefersReducedMotion() {
    return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;
  }
  function isTouchDevice() {
    return typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }
  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }
  function getCSSVar(el, name, fallback) {
    const val = getComputedStyle(el).getPropertyValue(name).trim();
    if (!val) return fallback;
    const num = parseFloat(val);
    return Number.isNaN(num) ? fallback : num;
  }
  function getViewportTiltMultiplier() {
    if (typeof window === "undefined") return 0;
    const w = window.innerWidth;
    if (w < 768) return 0;
    if (w < 1024) return 0.5;
    return 1;
  }
  function isMobileViewport() {
    return typeof window !== "undefined" && window.innerWidth < 768;
  }
  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }
  function createTilt(card) {
    if (prefersReducedMotion() || isTouchDevice()) {
      return;
    }
    const multiplier = getViewportTiltMultiplier();
    if (multiplier === 0) return;
    const container = card.closest(".nextora-value-cards");
    const rawMaxTilt = container ? getCSSVar(container, "--nextora-value-cards-max-tilt", 12) : 12;
    const maxTilt = rawMaxTilt * multiplier;
    const hoverScale = container ? getCSSVar(container, "--nextora-value-cards-hover-scale", 1.06) : 1.06;
    const rawRotation = parseFloat(card.getAttribute("data-rotation") || "0") || 0;
    const defaultRotation = rawRotation * multiplier;
    const onMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const relX = e.clientX - centerX;
      const relY = e.clientY - centerY;
      const normX = clamp(relX / (rect.width / 2), -1, 1);
      const normY = clamp(relY / (rect.height / 2), -1, 1);
      const tiltX = normY * -maxTilt;
      const tiltY = normX * maxTilt;
      card.style.transform = `perspective(var(--nextora-value-cards-perspective, 1000px)) rotateX(${tiltX}deg) rotateY(${tiltY}deg) rotateZ(${defaultRotation}deg) scale(${hoverScale})`;
    };
    const onMouseLeave = () => {
      const container2 = card.closest(".nextora-value-cards");
      const dur = container2 ? getComputedStyle(container2).getPropertyValue("--nextora-value-cards-transition-duration").trim() || "0.45s" : "0.45s";
      card.style.transition = `transform ${dur} cubic-bezier(0.2, 0.8, 0.2, 1)`;
      card.style.transform = `perspective(var(--nextora-value-cards-perspective, 1000px)) rotateX(0deg) rotateY(0deg) rotateZ(${defaultRotation}deg) scale(1)`;
      const onTransitionEnd = () => {
        card.style.transition = "";
        card.removeEventListener("transitionend", onTransitionEnd);
      };
      card.addEventListener("transitionend", onTransitionEnd, { once: true });
    };
    const onMouseEnter = () => {
      card.style.transition = "";
    };
    card.addEventListener("mouseenter", onMouseEnter);
    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", onMouseLeave);
    card.style.transform = `perspective(var(--nextora-value-cards-perspective, 1000px)) rotateX(0deg) rotateY(0deg) rotateZ(${defaultRotation}deg) scale(1)`;
    tiltStates.push({
      card,
      maxTilt,
      hoverScale,
      defaultRotation,
      boundMouseMove: onMouseMove,
      boundMouseLeave: onMouseLeave,
      boundMouseEnter: onMouseEnter
    });
  }
  function destroyTilt(card) {
    const idx = tiltStates.findIndex((s) => s.card === card);
    if (idx === -1) return;
    const state = tiltStates[idx];
    card.removeEventListener("mousemove", state.boundMouseMove);
    card.removeEventListener("mouseleave", state.boundMouseLeave);
    card.removeEventListener("mouseenter", state.boundMouseEnter);
    card.style.transform = "";
    card.style.transition = "";
    tiltStates.splice(idx, 1);
  }
  function initCards(container = document) {
    container.querySelectorAll(".nextora-value-cards__card").forEach((card) => {
      if (tiltStates.some((s) => s.card === card)) return;
      createTilt(card);
    });
  }
  function destroyAll() {
    while (tiltStates.length > 0) {
      destroyTilt(tiltStates[0].card);
    }
  }
  var FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"]), video[controls], audio[controls]';
  function getFocusableElements(container) {
    const els = container.querySelectorAll(FOCUSABLE_SELECTOR);
    return Array.from(els).filter((el) => {
      if (el.hidden) return false;
      const style = getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") return false;
      let parent = el.parentElement;
      while (parent && parent !== container) {
        if (parent.hidden) return false;
        parent = parent.parentElement;
      }
      return true;
    });
  }
  function trapFocus(modal, e) {
    if (e.key !== "Tab") return;
    const focusable = getFocusableElements(modal);
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
  function lockBodyScroll() {
    const scrollbarWidth = getScrollbarWidth();
    document.documentElement.style.setProperty("--ncvc-scrollbar-width", `${scrollbarWidth}px`);
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
  }
  function unlockBodyScroll() {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }
  function getOrCreateModal() {
    if (globalModal) return globalModal;
    const overlay = document.createElement("div");
    overlay.className = "nextora-value-cards__modal-overlay";
    overlay.setAttribute("aria-hidden", "true");
    const dialog = document.createElement("div");
    dialog.className = "nextora-value-cards__modal";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-labelledby", "nextora-value-cards__modal-title");
    const closeBtn = document.createElement("button");
    closeBtn.className = "nextora-value-cards__modal-close";
    closeBtn.type = "button";
    closeBtn.setAttribute("aria-label", "Close dialog");
    closeBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
    closeBtn.addEventListener("click", closeCardModal);
    const mediaContainer = document.createElement("div");
    mediaContainer.className = "nextora-value-cards__modal-media";
    const titleEl = document.createElement("h2");
    titleEl.className = "nextora-value-cards__modal-title";
    titleEl.id = "nextora-value-cards__modal-title";
    const descEl = document.createElement("p");
    descEl.className = "nextora-value-cards__modal-description";
    dialog.appendChild(closeBtn);
    dialog.appendChild(mediaContainer);
    dialog.appendChild(titleEl);
    dialog.appendChild(descEl);
    overlay.appendChild(dialog);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeCardModal();
      }
    });
    overlay.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeCardModal();
        return;
      }
      trapFocus(dialog, e);
    });
    document.body.appendChild(overlay);
    globalModal = { overlay, dialog, closeBtn, mediaContainer, titleEl, descEl };
    return globalModal;
  }
  function openCardModal(card) {
    const modal = getOrCreateModal();
    const title = card.getAttribute("data-vc-title") || "";
    const description = card.getAttribute("data-vc-description") || "";
    const mediaType = card.getAttribute("data-vc-media-type") || "image";
    const mediaUrl = card.getAttribute("data-vc-media-url") || "";
    const videoPosterUrl = card.getAttribute("data-vc-video-poster-url") || "";
    modal.titleEl.textContent = title;
    modal.descEl.textContent = description;
    modal.mediaContainer.innerHTML = "";
    if (mediaUrl) {
      if (mediaType === "video") {
        const video = document.createElement("video");
        video.src = mediaUrl;
        video.controls = true;
        video.playsInline = true;
        video.className = "nextora-value-cards__modal-media-element";
        if (videoPosterUrl) {
          video.poster = videoPosterUrl;
        }
        modal.mediaContainer.appendChild(video);
      } else {
        const img = document.createElement("img");
        img.src = mediaUrl;
        img.alt = title;
        img.className = "nextora-value-cards__modal-media-element";
        img.loading = "lazy";
        modal.mediaContainer.appendChild(img);
      }
    }
    lastFocusedCard = card;
    lockBodyScroll();
    modal.overlay.style.display = "flex";
    modal.overlay.setAttribute("aria-hidden", "false");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        modal.overlay.classList.add(modalOpenClass);
        modal.closeBtn.focus();
      });
    });
  }
  function closeCardModal() {
    if (!globalModal) return;
    globalModal.overlay.classList.remove(modalOpenClass);
    globalModal.overlay.setAttribute("aria-hidden", "true");
    const video = globalModal.mediaContainer.querySelector("video");
    if (video) {
      video.pause();
    }
    const onTransitionEnd = () => {
      globalModal.overlay.style.display = "none";
      globalModal.overlay.removeEventListener("transitionend", onTransitionEnd);
      if (lastFocusedCard) {
        lastFocusedCard.focus({ preventScroll: true });
        lastFocusedCard = null;
      }
      unlockBodyScroll();
    };
    globalModal.overlay.addEventListener("transitionend", onTransitionEnd, { once: true });
    setTimeout(() => {
      if (globalModal && !globalModal.overlay.classList.contains(modalOpenClass)) {
        globalModal.overlay.style.display = "none";
        unlockBodyScroll();
      }
    }, 400);
  }
  function attachCardClickListeners(container = document) {
    container.querySelectorAll(".nextora-value-cards__card").forEach((card) => {
      if (card.dataset.vcModalBound === "1") return;
      card.dataset.vcModalBound = "1";
      card.addEventListener("click", () => {
        openCardModal(card);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openCardModal(card);
        }
      });
      if (!card.hasAttribute("tabindex")) {
        card.setAttribute("tabindex", "0");
      }
      if (!card.getAttribute("role")) {
        card.setAttribute("role", "button");
      }
      if (!card.getAttribute("aria-label")) {
        const title = card.getAttribute("data-vc-title") || "Card";
        card.setAttribute("aria-label", `Open ${title}`);
      }
    });
  }
  var ENTRANCE_STAGGER_MS = 120;
  var ENTRANCE_CLASS = "nextora-value-cards__card--revealed";
  function initScrollReveal(container) {
    const deck = container.querySelector(".nextora-value-cards__deck");
    if (!deck) return;
    const cards = Array.from(
      deck.querySelectorAll(".nextora-value-cards__card")
    );
    if (cards.length === 0) return;
    if (cards[0].classList.contains(ENTRANCE_CLASS)) return;
    if (prefersReducedMotion()) {
      for (const card of cards) {
        card.classList.add(ENTRANCE_CLASS);
      }
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        for (let i = 0; i < cards.length; i++) {
          const delay = i * ENTRANCE_STAGGER_MS;
          setTimeout(() => {
            cards[i].classList.add(ENTRANCE_CLASS);
          }, delay);
        }
        observer.disconnect();
      },
      { rootMargin: "0px 0px -50px 0px", threshold: 0 }
    );
    observer.observe(deck);
  }
  var resizeTimeout = null;
  function onViewportResize() {
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (isMobileViewport()) {
        destroyAll();
      } else {
        destroyAll();
        initCards(document);
      }
    }, 200);
  }
  function reinit() {
    initCards(document);
    attachCardClickListeners(document);
  }
  function run() {
    const containers = document.querySelectorAll(".nextora-value-cards");
    for (const el of containers) {
      el.classList.add("nextora-value-cards--animate");
    }
    if (prefersReducedMotion()) {
      for (const el of containers) {
        el.classList.add("nextora-value-cards--reduced-motion");
        initScrollReveal(el);
      }
      attachCardClickListeners(document);
      return;
    }
    if (isTouchDevice()) {
      for (const el of containers) {
        el.classList.add("nextora-value-cards--touch");
        initScrollReveal(el);
      }
      attachCardClickListeners(document);
      return;
    }
    initCards(document);
    attachCardClickListeners(document);
    for (const el of containers) {
      initScrollReveal(el);
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }
  window.addEventListener("nextora-value-cards-reinit", () => {
    destroyAll();
    reinit();
  });
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.addEventListener("change", (e) => {
    if (e.matches) {
      destroyAll();
      document.querySelectorAll(".nextora-value-cards").forEach((el) => {
        el.classList.add("nextora-value-cards--reduced-motion");
      });
    } else {
      document.querySelectorAll(".nextora-value-cards").forEach((el) => {
        el.classList.remove("nextora-value-cards--reduced-motion");
      });
      reinit();
      document.querySelectorAll(".nextora-value-cards").forEach((el) => {
        initScrollReveal(el);
      });
    }
  });
  window.addEventListener("resize", onViewportResize, { passive: true });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidmlldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBWYWx1ZSBDYXJkcyBcdTIwMTQgdmFuaWxsYSBKUyAzRCB0aWx0IGVuZ2luZSArIGNsaWNrLXRvLW1vZGFsIChubyBHU0FQKS5cbiAqXG4gKiBPbiBtb3VzZW1vdmU6IGNhbGN1bGF0ZSB0aWx0WC90aWx0WSBiYXNlZCBvbiBjdXJzb3IgcG9zaXRpb24gcmVsYXRpdmUgdG9cbiAqIGNhcmQgY2VudGVyLCBhcHBseSBzY2FsZStyb3RhdGVYK3JvdGF0ZVkrcm90YXRlWiB0cmFuc2Zvcm1zLlxuICogT24gbW91c2VsZWF2ZTogcmVzZXQgdG8gZGVmYXVsdCByb3RhdGlvbi5cbiAqIE9uIGNsaWNrOiBvcGVuIGEgbW9kYWwgd2l0aCB0aGUgZnVsbCBjYXJkIGNvbnRlbnQuXG4gKlxuICogUmVzcG9uc2l2ZTpcbiAqICAgRGVza3RvcCAoPjEwMjNweCkgXHUyMDE0IGZ1bGwgdGlsdCArIHJvdGF0aW9uXG4gKiAgIFRhYmxldCAoNzY4LTEwMjNweCkgXHUyMDE0IDUwJSB0aWx0ICsgcmVkdWNlZCByb3RhdGlvblxuICogICBNb2JpbGUgKDw3NjhweCkgXHUyMDE0IG5vIDNEIHRpbHQsIHZlcnRpY2FsIHN0YWNrLCB0YXAtdG8tb3BlbiBtb2RhbFxuICpcbiAqIEhvbm9ycyBwcmVmZXJzLXJlZHVjZWQtbW90aW9uIChzdGF0aWMpIGFuZCB0b3VjaCBkZXZpY2VzIChubyB0aWx0KS5cbiAqL1xuXG5leHBvcnQge307XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogVHlwZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuaW50ZXJmYWNlIFRpbHRTdGF0ZSB7XG5cdGNhcmQ6IEhUTUxFbGVtZW50O1xuXHRtYXhUaWx0OiBudW1iZXI7XG5cdGhvdmVyU2NhbGU6IG51bWJlcjtcblx0ZGVmYXVsdFJvdGF0aW9uOiBudW1iZXI7XG5cdGJvdW5kTW91c2VNb3ZlOiAoZTogTW91c2VFdmVudCkgPT4gdm9pZDtcblx0Ym91bmRNb3VzZUxlYXZlOiAoKSA9PiB2b2lkO1xuXHRib3VuZE1vdXNlRW50ZXI6IChlOiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgTW9kYWxFbGVtZW50cyB7XG5cdG92ZXJsYXk6IEhUTUxEaXZFbGVtZW50O1xuXHRkaWFsb2c6IEhUTUxEaXZFbGVtZW50O1xuXHRjbG9zZUJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cdG1lZGlhQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcblx0dGl0bGVFbDogSFRNTEhlYWRpbmdFbGVtZW50O1xuXHRkZXNjRWw6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIEdsb2JhbHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmNvbnN0IHRpbHRTdGF0ZXM6IFRpbHRTdGF0ZVtdID0gW107XG5sZXQgZ2xvYmFsTW9kYWw6IE1vZGFsRWxlbWVudHMgfCBudWxsID0gbnVsbDtcbmxldCBsYXN0Rm9jdXNlZENhcmQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5sZXQgbW9kYWxPcGVuQ2xhc3MgPSAnbmV4dG9yYS12YWx1ZS1jYXJkc19fbW9kYWwtb3ZlcmxheS0tb3Blbic7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogVXRpbGl0aWVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZnVuY3Rpb24gcHJlZmVyc1JlZHVjZWRNb3Rpb24oKTogYm9vbGVhbiB7XG5cdHJldHVybiAoXG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHR3aW5kb3cubWF0Y2hNZWRpYT8uKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpLm1hdGNoZXMgPT09IHRydWVcblx0KTtcbn1cblxuZnVuY3Rpb24gaXNUb3VjaERldmljZSgpOiBib29sZWFuIHtcblx0cmV0dXJuIChcblx0XHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdCgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMClcblx0KTtcbn1cblxuZnVuY3Rpb24gY2xhbXAodmFsOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG5cdHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSk7XG59XG5cbmZ1bmN0aW9uIGdldENTU1ZhcihlbDogSFRNTEVsZW1lbnQsIG5hbWU6IHN0cmluZywgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG5cdGNvbnN0IHZhbCA9IGdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUobmFtZSkudHJpbSgpO1xuXHRpZiAoIXZhbCkgcmV0dXJuIGZhbGxiYWNrO1xuXHRjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbCk7XG5cdHJldHVybiBOdW1iZXIuaXNOYU4obnVtKSA/IGZhbGxiYWNrIDogbnVtO1xufVxuXG4vKiogUmV0dXJucyAxLjAgZm9yIGRlc2t0b3AsIDAuNSBmb3IgdGFibGV0LCAwIGZvciBtb2JpbGUgKG5vIHRpbHQpLiAqL1xuZnVuY3Rpb24gZ2V0Vmlld3BvcnRUaWx0TXVsdGlwbGllcigpOiBudW1iZXIge1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAwO1xuXHRjb25zdCB3ID0gd2luZG93LmlubmVyV2lkdGg7XG5cdGlmICh3IDwgNzY4KSByZXR1cm4gMDtcblx0aWYgKHcgPCAxMDI0KSByZXR1cm4gMC41O1xuXHRyZXR1cm4gMS4wO1xufVxuXG4vKiogVHJ1ZSB3aGVuIHRoZSBjdXJyZW50IHZpZXdwb3J0IGlzIG1vYmlsZSAoPDc2OHB4KS4gKi9cbmZ1bmN0aW9uIGlzTW9iaWxlVmlld3BvcnQoKTogYm9vbGVhbiB7XG5cdHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2ODtcbn1cblxuLyoqIFNjcm9sbGJhciB3aWR0aCBjb21wZW5zYXRpb24gZm9yIGJvZHktc2Nyb2xsIGxvY2suICovXG5mdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aCgpOiBudW1iZXIge1xuXHRyZXR1cm4gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogM0QgVGlsdCBlbmdpbmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZnVuY3Rpb24gY3JlYXRlVGlsdChjYXJkOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRpZiAocHJlZmVyc1JlZHVjZWRNb3Rpb24oKSB8fCBpc1RvdWNoRGV2aWNlKCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBtdWx0aXBsaWVyID0gZ2V0Vmlld3BvcnRUaWx0TXVsdGlwbGllcigpO1xuXHRpZiAobXVsdGlwbGllciA9PT0gMCkgcmV0dXJuOyAvLyBtb2JpbGUgXHUyMDE0IG5vIHRpbHRcblxuXHRjb25zdCBjb250YWluZXIgPSBjYXJkLmNsb3Nlc3Q8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS12YWx1ZS1jYXJkcycpO1xuXHRjb25zdCByYXdNYXhUaWx0ID0gY29udGFpbmVyID8gZ2V0Q1NTVmFyKGNvbnRhaW5lciwgJy0tbmV4dG9yYS12YWx1ZS1jYXJkcy1tYXgtdGlsdCcsIDEyKSA6IDEyO1xuXHRjb25zdCBtYXhUaWx0ID0gcmF3TWF4VGlsdCAqIG11bHRpcGxpZXI7XG5cdGNvbnN0IGhvdmVyU2NhbGUgPSBjb250YWluZXIgPyBnZXRDU1NWYXIoY29udGFpbmVyLCAnLS1uZXh0b3JhLXZhbHVlLWNhcmRzLWhvdmVyLXNjYWxlJywgMS4wNikgOiAxLjA2O1xuXHRjb25zdCByYXdSb3RhdGlvbiA9IHBhcnNlRmxvYXQoY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRpb24nKSB8fCAnMCcpIHx8IDA7XG5cdGNvbnN0IGRlZmF1bHRSb3RhdGlvbiA9IHJhd1JvdGF0aW9uICogbXVsdGlwbGllcjtcblxuXHRjb25zdCBvbk1vdXNlTW92ZSA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgcmVjdCA9IGNhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0Y29uc3QgY2VudGVyWCA9IHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyO1xuXHRcdGNvbnN0IGNlbnRlclkgPSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMjtcblx0XHRjb25zdCByZWxYID0gZS5jbGllbnRYIC0gY2VudGVyWDtcblx0XHRjb25zdCByZWxZID0gZS5jbGllbnRZIC0gY2VudGVyWTtcblxuXHRcdGNvbnN0IG5vcm1YID0gY2xhbXAocmVsWCAvIChyZWN0LndpZHRoIC8gMiksIC0xLCAxKTtcblx0XHRjb25zdCBub3JtWSA9IGNsYW1wKHJlbFkgLyAocmVjdC5oZWlnaHQgLyAyKSwgLTEsIDEpO1xuXG5cdFx0Y29uc3QgdGlsdFggPSBub3JtWSAqIC1tYXhUaWx0O1xuXHRcdGNvbnN0IHRpbHRZID0gbm9ybVggKiBtYXhUaWx0O1xuXG5cdFx0Y2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBgcGVyc3BlY3RpdmUodmFyKC0tbmV4dG9yYS12YWx1ZS1jYXJkcy1wZXJzcGVjdGl2ZSwgMTAwMHB4KSkgcm90YXRlWCgke3RpbHRYfWRlZykgcm90YXRlWSgke3RpbHRZfWRlZykgcm90YXRlWigke2RlZmF1bHRSb3RhdGlvbn1kZWcpIHNjYWxlKCR7aG92ZXJTY2FsZX0pYDtcblx0fTtcblxuXHRjb25zdCBvbk1vdXNlTGVhdmUgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY2FyZC5jbG9zZXN0PEhUTUxFbGVtZW50PignLm5leHRvcmEtdmFsdWUtY2FyZHMnKTtcblx0XHRjb25zdCBkdXIgPSBjb250YWluZXJcblx0XHRcdD8gZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpLmdldFByb3BlcnR5VmFsdWUoJy0tbmV4dG9yYS12YWx1ZS1jYXJkcy10cmFuc2l0aW9uLWR1cmF0aW9uJykudHJpbSgpIHx8ICcwLjQ1cydcblx0XHRcdDogJzAuNDVzJztcblx0XHRjYXJkLnN0eWxlLnRyYW5zaXRpb24gPSBgdHJhbnNmb3JtICR7ZHVyfSBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSlgO1xuXHRcdGNhcmQuc3R5bGUudHJhbnNmb3JtID0gYHBlcnNwZWN0aXZlKHZhcigtLW5leHRvcmEtdmFsdWUtY2FyZHMtcGVyc3BlY3RpdmUsIDEwMDBweCkpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKCR7ZGVmYXVsdFJvdGF0aW9ufWRlZykgc2NhbGUoMSlgO1xuXG5cdFx0Y29uc3Qgb25UcmFuc2l0aW9uRW5kID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0Y2FyZC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG5cdFx0XHRjYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBvblRyYW5zaXRpb25FbmQpO1xuXHRcdH07XG5cdFx0Y2FyZC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgb25UcmFuc2l0aW9uRW5kLCB7IG9uY2U6IHRydWUgfSk7XG5cdH07XG5cblx0Y29uc3Qgb25Nb3VzZUVudGVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNhcmQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuXHR9O1xuXG5cdGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG9uTW91c2VFbnRlcik7XG5cdGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuXHRjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBvbk1vdXNlTGVhdmUpO1xuXG5cdC8vIEFwcGx5IGluaXRpYWwgc3RhdGljIHJvdGF0aW9uXG5cdGNhcmQuc3R5bGUudHJhbnNmb3JtID0gYHBlcnNwZWN0aXZlKHZhcigtLW5leHRvcmEtdmFsdWUtY2FyZHMtcGVyc3BlY3RpdmUsIDEwMDBweCkpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKCR7ZGVmYXVsdFJvdGF0aW9ufWRlZykgc2NhbGUoMSlgO1xuXG5cdHRpbHRTdGF0ZXMucHVzaCh7XG5cdFx0Y2FyZCxcblx0XHRtYXhUaWx0LFxuXHRcdGhvdmVyU2NhbGUsXG5cdFx0ZGVmYXVsdFJvdGF0aW9uLFxuXHRcdGJvdW5kTW91c2VNb3ZlOiBvbk1vdXNlTW92ZSxcblx0XHRib3VuZE1vdXNlTGVhdmU6IG9uTW91c2VMZWF2ZSxcblx0XHRib3VuZE1vdXNlRW50ZXI6IG9uTW91c2VFbnRlcixcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lUaWx0KGNhcmQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdGNvbnN0IGlkeCA9IHRpbHRTdGF0ZXMuZmluZEluZGV4KChzKSA9PiBzLmNhcmQgPT09IGNhcmQpO1xuXHRpZiAoaWR4ID09PSAtMSkgcmV0dXJuO1xuXG5cdGNvbnN0IHN0YXRlID0gdGlsdFN0YXRlc1tpZHhdO1xuXHRjYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHN0YXRlLmJvdW5kTW91c2VNb3ZlKTtcblx0Y2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc3RhdGUuYm91bmRNb3VzZUxlYXZlKTtcblx0Y2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgc3RhdGUuYm91bmRNb3VzZUVudGVyKTtcblx0Y2FyZC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcblx0Y2FyZC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG5cdHRpbHRTdGF0ZXMuc3BsaWNlKGlkeCwgMSk7XG59XG5cbmZ1bmN0aW9uIGluaXRDYXJkcyhjb250YWluZXI6IEVsZW1lbnQgfCBEb2N1bWVudCA9IGRvY3VtZW50KTogdm9pZCB7XG5cdGNvbnRhaW5lclxuXHRcdC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLm5leHRvcmEtdmFsdWUtY2FyZHNfX2NhcmQnKVxuXHRcdC5mb3JFYWNoKChjYXJkKSA9PiB7XG5cdFx0XHRpZiAodGlsdFN0YXRlcy5zb21lKChzKSA9PiBzLmNhcmQgPT09IGNhcmQpKSByZXR1cm47XG5cdFx0XHRjcmVhdGVUaWx0KGNhcmQpO1xuXHRcdH0pO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95QWxsKCk6IHZvaWQge1xuXHR3aGlsZSAodGlsdFN0YXRlcy5sZW5ndGggPiAwKSB7XG5cdFx0ZGVzdHJveVRpbHQodGlsdFN0YXRlc1swXS5jYXJkKTtcblx0fVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIENsaWNrLXRvLU1vZGFsIHN5c3RlbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmNvbnN0IEZPQ1VTQUJMRV9TRUxFQ1RPUiA9XG5cdCdhW2hyZWZdLCBidXR0b246bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGlucHV0Om5vdChbZGlzYWJsZWRdKSwgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSwgW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pLCB2aWRlb1tjb250cm9sc10sIGF1ZGlvW2NvbnRyb2xzXSc7XG5cbmZ1bmN0aW9uIGdldEZvY3VzYWJsZUVsZW1lbnRzKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudFtdIHtcblx0Y29uc3QgZWxzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KEZPQ1VTQUJMRV9TRUxFQ1RPUik7XG5cdHJldHVybiBBcnJheS5mcm9tKGVscykuZmlsdGVyKChlbCkgPT4ge1xuXHRcdGlmIChlbC5oaWRkZW4pIHJldHVybiBmYWxzZTtcblx0XHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXHRcdGlmIChzdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHwgc3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHJldHVybiBmYWxzZTtcblx0XHQvLyBDaGVjayBpZiBhbnkgYW5jZXN0b3IgaXMgaGlkZGVuXG5cdFx0bGV0IHBhcmVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZWwucGFyZW50RWxlbWVudDtcblx0XHR3aGlsZSAocGFyZW50ICYmIHBhcmVudCAhPT0gY29udGFpbmVyKSB7XG5cdFx0XHRpZiAocGFyZW50LmhpZGRlbikgcmV0dXJuIGZhbHNlO1xuXHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gdHJhcEZvY3VzKG1vZGFsOiBIVE1MRWxlbWVudCwgZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuXHRpZiAoZS5rZXkgIT09ICdUYWInKSByZXR1cm47XG5cblx0Y29uc3QgZm9jdXNhYmxlID0gZ2V0Rm9jdXNhYmxlRWxlbWVudHMobW9kYWwpO1xuXHRpZiAoZm9jdXNhYmxlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG5cdGNvbnN0IGZpcnN0ID0gZm9jdXNhYmxlWzBdO1xuXHRjb25zdCBsYXN0ID0gZm9jdXNhYmxlW2ZvY3VzYWJsZS5sZW5ndGggLSAxXTtcblxuXHRpZiAoZS5zaGlmdEtleSkge1xuXHRcdGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBmaXJzdCkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0bGFzdC5mb2N1cygpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbGFzdCkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Zmlyc3QuZm9jdXMoKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbG9ja0JvZHlTY3JvbGwoKTogdm9pZCB7XG5cdGNvbnN0IHNjcm9sbGJhcldpZHRoID0gZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLW5jdmMtc2Nyb2xsYmFyLXdpZHRoJywgYCR7c2Nyb2xsYmFyV2lkdGh9cHhgKTtcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXHRpZiAoc2Nyb2xsYmFyV2lkdGggPiAwKSB7XG5cdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtzY3JvbGxiYXJXaWR0aH1weGA7XG5cdH1cbn1cblxuZnVuY3Rpb24gdW5sb2NrQm9keVNjcm9sbCgpOiB2b2lkIHtcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuXHRkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xufVxuXG5mdW5jdGlvbiBnZXRPckNyZWF0ZU1vZGFsKCk6IE1vZGFsRWxlbWVudHMge1xuXHRpZiAoZ2xvYmFsTW9kYWwpIHJldHVybiBnbG9iYWxNb2RhbDtcblxuXHQvLyBPdmVybGF5XG5cdGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0b3ZlcmxheS5jbGFzc05hbWUgPSAnbmV4dG9yYS12YWx1ZS1jYXJkc19fbW9kYWwtb3ZlcmxheSc7XG5cdG92ZXJsYXkuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cblx0Ly8gRGlhbG9nXG5cdGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkaWFsb2cuY2xhc3NOYW1lID0gJ25leHRvcmEtdmFsdWUtY2FyZHNfX21vZGFsJztcblx0ZGlhbG9nLnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcblx0ZGlhbG9nLnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsICd0cnVlJyk7XG5cdGRpYWxvZy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsICduZXh0b3JhLXZhbHVlLWNhcmRzX19tb2RhbC10aXRsZScpO1xuXG5cdC8vIENsb3NlIGJ1dHRvblxuXHRjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRjbG9zZUJ0bi5jbGFzc05hbWUgPSAnbmV4dG9yYS12YWx1ZS1jYXJkc19fbW9kYWwtY2xvc2UnO1xuXHRjbG9zZUJ0bi50eXBlID0gJ2J1dHRvbic7XG5cdGNsb3NlQnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdDbG9zZSBkaWFsb2cnKTtcblx0Y2xvc2VCdG4uaW5uZXJIVE1MID1cblx0XHQnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PGxpbmUgeDE9XCIxOFwiIHkxPVwiNlwiIHgyPVwiNlwiIHkyPVwiMThcIj48L2xpbmU+PGxpbmUgeDE9XCI2XCIgeTE9XCI2XCIgeDI9XCIxOFwiIHkyPVwiMThcIj48L2xpbmU+PC9zdmc+Jztcblx0Y2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUNhcmRNb2RhbCk7XG5cblx0Ly8gTWVkaWEgY29udGFpbmVyXG5cdGNvbnN0IG1lZGlhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG1lZGlhQ29udGFpbmVyLmNsYXNzTmFtZSA9ICduZXh0b3JhLXZhbHVlLWNhcmRzX19tb2RhbC1tZWRpYSc7XG5cblx0Ly8gVGl0bGVcblx0Y29uc3QgdGl0bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cdHRpdGxlRWwuY2xhc3NOYW1lID0gJ25leHRvcmEtdmFsdWUtY2FyZHNfX21vZGFsLXRpdGxlJztcblx0dGl0bGVFbC5pZCA9ICduZXh0b3JhLXZhbHVlLWNhcmRzX19tb2RhbC10aXRsZSc7XG5cblx0Ly8gRGVzY3JpcHRpb25cblx0Y29uc3QgZGVzY0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRkZXNjRWwuY2xhc3NOYW1lID0gJ25leHRvcmEtdmFsdWUtY2FyZHNfX21vZGFsLWRlc2NyaXB0aW9uJztcblxuXHQvLyBBc3NlbWJsZVxuXHRkaWFsb2cuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXHRkaWFsb2cuYXBwZW5kQ2hpbGQobWVkaWFDb250YWluZXIpO1xuXHRkaWFsb2cuYXBwZW5kQ2hpbGQodGl0bGVFbCk7XG5cdGRpYWxvZy5hcHBlbmRDaGlsZChkZXNjRWwpO1xuXHRvdmVybGF5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG5cblx0Ly8gQ2xpY2sgb3ZlcmxheSB0byBjbG9zZVxuXHRvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIHtcblx0XHRcdGNsb3NlQ2FyZE1vZGFsKCk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBLZXlib2FyZCBoYW5kbGVyXG5cdG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG5cdFx0aWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y2xvc2VDYXJkTW9kYWwoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dHJhcEZvY3VzKGRpYWxvZywgZSk7XG5cdH0pO1xuXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cdGdsb2JhbE1vZGFsID0geyBvdmVybGF5LCBkaWFsb2csIGNsb3NlQnRuLCBtZWRpYUNvbnRhaW5lciwgdGl0bGVFbCwgZGVzY0VsIH07XG5cdHJldHVybiBnbG9iYWxNb2RhbDtcbn1cblxuZnVuY3Rpb24gb3BlbkNhcmRNb2RhbChjYXJkOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRjb25zdCBtb2RhbCA9IGdldE9yQ3JlYXRlTW9kYWwoKTtcblxuXHQvLyBFeHRyYWN0IGRhdGEgZnJvbSBjYXJkXG5cdGNvbnN0IHRpdGxlID0gY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmMtdGl0bGUnKSB8fCAnJztcblx0Y29uc3QgZGVzY3JpcHRpb24gPSBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS12Yy1kZXNjcmlwdGlvbicpIHx8ICcnO1xuXHRjb25zdCBtZWRpYVR5cGUgPSBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS12Yy1tZWRpYS10eXBlJykgfHwgJ2ltYWdlJztcblx0Y29uc3QgbWVkaWFVcmwgPSBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS12Yy1tZWRpYS11cmwnKSB8fCAnJztcblx0Y29uc3QgdmlkZW9Qb3N0ZXJVcmwgPSBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS12Yy12aWRlby1wb3N0ZXItdXJsJykgfHwgJyc7XG5cblx0Ly8gUG9wdWxhdGUgbW9kYWxcblx0bW9kYWwudGl0bGVFbC50ZXh0Q29udGVudCA9IHRpdGxlO1xuXHRtb2RhbC5kZXNjRWwudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuXHQvLyBCdWlsZCBtZWRpYVxuXHRtb2RhbC5tZWRpYUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblx0aWYgKG1lZGlhVXJsKSB7XG5cdFx0aWYgKG1lZGlhVHlwZSA9PT0gJ3ZpZGVvJykge1xuXHRcdFx0Y29uc3QgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuXHRcdFx0dmlkZW8uc3JjID0gbWVkaWFVcmw7XG5cdFx0XHR2aWRlby5jb250cm9scyA9IHRydWU7XG5cdFx0XHR2aWRlby5wbGF5c0lubGluZSA9IHRydWU7XG5cdFx0XHR2aWRlby5jbGFzc05hbWUgPSAnbmV4dG9yYS12YWx1ZS1jYXJkc19fbW9kYWwtbWVkaWEtZWxlbWVudCc7XG5cdFx0XHRpZiAodmlkZW9Qb3N0ZXJVcmwpIHtcblx0XHRcdFx0dmlkZW8ucG9zdGVyID0gdmlkZW9Qb3N0ZXJVcmw7XG5cdFx0XHR9XG5cdFx0XHRtb2RhbC5tZWRpYUNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWRlbyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdFx0aW1nLnNyYyA9IG1lZGlhVXJsO1xuXHRcdFx0aW1nLmFsdCA9IHRpdGxlO1xuXHRcdFx0aW1nLmNsYXNzTmFtZSA9ICduZXh0b3JhLXZhbHVlLWNhcmRzX19tb2RhbC1tZWRpYS1lbGVtZW50Jztcblx0XHRcdGltZy5sb2FkaW5nID0gJ2xhenknO1xuXHRcdFx0bW9kYWwubWVkaWFDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblx0XHR9XG5cdH1cblxuXHQvLyBTdG9yZSByZWZlcmVuY2UgdG8gcmVzdG9yZSBmb2N1cyBsYXRlclxuXHRsYXN0Rm9jdXNlZENhcmQgPSBjYXJkO1xuXG5cdC8vIExvY2sgYm9keSBzY3JvbGxcblx0bG9ja0JvZHlTY3JvbGwoKTtcblxuXHQvLyBTaG93XG5cdG1vZGFsLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcblx0bW9kYWwub3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cblx0Ly8gVHJpZ2dlciBhbmltYXRpb24gb24gbmV4dCBmcmFtZVxuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHRtb2RhbC5vdmVybGF5LmNsYXNzTGlzdC5hZGQobW9kYWxPcGVuQ2xhc3MpO1xuXHRcdFx0Ly8gRm9jdXMgdGhlIGNsb3NlIGJ1dHRvblxuXHRcdFx0bW9kYWwuY2xvc2VCdG4uZm9jdXMoKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlQ2FyZE1vZGFsKCk6IHZvaWQge1xuXHRpZiAoIWdsb2JhbE1vZGFsKSByZXR1cm47XG5cblx0Z2xvYmFsTW9kYWwub3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKG1vZGFsT3BlbkNsYXNzKTtcblx0Z2xvYmFsTW9kYWwub3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuXHQvLyBQYXVzZSBhbnkgcGxheWluZyB2aWRlb1xuXHRjb25zdCB2aWRlbyA9IGdsb2JhbE1vZGFsLm1lZGlhQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJyk7XG5cdGlmICh2aWRlbykge1xuXHRcdHZpZGVvLnBhdXNlKCk7XG5cdH1cblxuXHQvLyBXYWl0IGZvciB0cmFuc2l0aW9uLCB0aGVuIGhpZGVcblx0Y29uc3Qgb25UcmFuc2l0aW9uRW5kID0gKCk6IHZvaWQgPT4ge1xuXHRcdGdsb2JhbE1vZGFsIS5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0Z2xvYmFsTW9kYWwhLm92ZXJsYXkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIG9uVHJhbnNpdGlvbkVuZCk7XG5cblx0XHQvLyBSZXN0b3JlIGZvY3VzXG5cdFx0aWYgKGxhc3RGb2N1c2VkQ2FyZCkge1xuXHRcdFx0bGFzdEZvY3VzZWRDYXJkLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcblx0XHRcdGxhc3RGb2N1c2VkQ2FyZCA9IG51bGw7XG5cdFx0fVxuXG5cdFx0Ly8gVW5sb2NrIGJvZHkgc2Nyb2xsXG5cdFx0dW5sb2NrQm9keVNjcm9sbCgpO1xuXHR9O1xuXG5cdGdsb2JhbE1vZGFsLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIG9uVHJhbnNpdGlvbkVuZCwgeyBvbmNlOiB0cnVlIH0pO1xuXG5cdC8vIEZhbGxiYWNrOiBpZiB0cmFuc2l0aW9uZW5kIGRvZXNuJ3QgZmlyZSAoZS5nLiBwcmVmZXJzLXJlZHVjZWQtbW90aW9uKSxcblx0Ly8gY2xlYW4gdXAgYWZ0ZXIgYSB0aW1lb3V0XG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGlmIChnbG9iYWxNb2RhbCAmJiAhZ2xvYmFsTW9kYWwub3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMobW9kYWxPcGVuQ2xhc3MpKSB7XG5cdFx0XHRnbG9iYWxNb2RhbC5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR1bmxvY2tCb2R5U2Nyb2xsKCk7XG5cdFx0fVxuXHR9LCA0MDApO1xufVxuXG5mdW5jdGlvbiBhdHRhY2hDYXJkQ2xpY2tMaXN0ZW5lcnMoY29udGFpbmVyOiBFbGVtZW50IHwgRG9jdW1lbnQgPSBkb2N1bWVudCk6IHZvaWQge1xuXHRjb250YWluZXJcblx0XHQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLXZhbHVlLWNhcmRzX19jYXJkJylcblx0XHQuZm9yRWFjaCgoY2FyZCkgPT4ge1xuXHRcdFx0Ly8gQXZvaWQgZG91YmxlLWF0dGFjaFxuXHRcdFx0aWYgKGNhcmQuZGF0YXNldC52Y01vZGFsQm91bmQgPT09ICcxJykgcmV0dXJuO1xuXHRcdFx0Y2FyZC5kYXRhc2V0LnZjTW9kYWxCb3VuZCA9ICcxJztcblxuXHRcdFx0Y2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0b3BlbkNhcmRNb2RhbChjYXJkKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBLZXlib2FyZDogRW50ZXIvU3BhY2UgdG8gb3BlblxuXHRcdFx0Y2FyZC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdFx0aWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5ID09PSAnICcpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0b3BlbkNhcmRNb2RhbChjYXJkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIE1ha2UgY2FyZHMgZm9jdXNhYmxlIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uXG5cdFx0XHRpZiAoIWNhcmQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG5cdFx0XHRcdGNhcmQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWNhcmQuZ2V0QXR0cmlidXRlKCdyb2xlJykpIHtcblx0XHRcdFx0Y2FyZC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWNhcmQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcblx0XHRcdFx0Y29uc3QgdGl0bGUgPSBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS12Yy10aXRsZScpIHx8ICdDYXJkJztcblx0XHRcdFx0Y2FyZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBgT3BlbiAke3RpdGxlfWApO1xuXHRcdFx0fVxuXHRcdH0pO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIFNjcm9sbC10cmlnZ2VyZWQgZW50cmFuY2UgYW5pbWF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmNvbnN0IEVOVFJBTkNFX1NUQUdHRVJfTVMgPSAxMjA7XG5jb25zdCBFTlRSQU5DRV9DTEFTUyA9ICduZXh0b3JhLXZhbHVlLWNhcmRzX19jYXJkLS1yZXZlYWxlZCc7XG5cbmZ1bmN0aW9uIGluaXRTY3JvbGxSZXZlYWwoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRjb25zdCBkZWNrID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS12YWx1ZS1jYXJkc19fZGVjaycpO1xuXHRpZiAoIWRlY2spIHJldHVybjtcblxuXHRjb25zdCBjYXJkcyA9IEFycmF5LmZyb20oXG5cdFx0ZGVjay5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLm5leHRvcmEtdmFsdWUtY2FyZHNfX2NhcmQnKSxcblx0KTtcblx0aWYgKGNhcmRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG5cdC8vIEFscmVhZHkgcmV2ZWFsZWQgKHJlLWluaXQgc2tpcHBlZClcblx0aWYgKGNhcmRzWzBdLmNsYXNzTGlzdC5jb250YWlucyhFTlRSQU5DRV9DTEFTUykpIHJldHVybjtcblxuXHRpZiAocHJlZmVyc1JlZHVjZWRNb3Rpb24oKSkge1xuXHRcdC8vIE5vIGFuaW1hdGlvbiBcdTIwMTQgcmV2ZWFsIGluc3RhbnRseVxuXHRcdGZvciAoY29uc3QgY2FyZCBvZiBjYXJkcykge1xuXHRcdFx0Y2FyZC5jbGFzc0xpc3QuYWRkKEVOVFJBTkNFX0NMQVNTKTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG5cdFx0KGVudHJpZXMpID0+IHtcblx0XHRcdGlmICghZW50cmllc1swXS5pc0ludGVyc2VjdGluZykgcmV0dXJuO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGRlbGF5ID0gaSAqIEVOVFJBTkNFX1NUQUdHRVJfTVM7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGNhcmRzW2ldLmNsYXNzTGlzdC5hZGQoRU5UUkFOQ0VfQ0xBU1MpO1xuXHRcdFx0XHR9LCBkZWxheSk7XG5cdFx0XHR9XG5cblx0XHRcdG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHR9LFxuXHRcdHsgcm9vdE1hcmdpbjogJzBweCAwcHggLTUwcHggMHB4JywgdGhyZXNob2xkOiAwIH0sXG5cdCk7XG5cblx0b2JzZXJ2ZXIub2JzZXJ2ZShkZWNrKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBWaWV3cG9ydC1yZXNpemUgaGFuZGxlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5sZXQgcmVzaXplVGltZW91dDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsID0gbnVsbDtcbmZ1bmN0aW9uIG9uVmlld3BvcnRSZXNpemUoKTogdm9pZCB7XG5cdGlmIChyZXNpemVUaW1lb3V0KSBjbGVhclRpbWVvdXQocmVzaXplVGltZW91dCk7XG5cdHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRpZiAoaXNNb2JpbGVWaWV3cG9ydCgpKSB7XG5cdFx0XHQvLyBEZXN0cm95IGFsbCB0aWx0IG9uIG1vYmlsZVxuXHRcdFx0ZGVzdHJveUFsbCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBSZWJ1aWxkIHRpbHQgd2l0aCB0aGUgY29ycmVjdCBtdWx0aXBsaWVyXG5cdFx0XHRkZXN0cm95QWxsKCk7XG5cdFx0XHRpbml0Q2FyZHMoZG9jdW1lbnQpO1xuXHRcdH1cblx0fSwgMjAwKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBJbml0IC8gcmVpbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5mdW5jdGlvbiByZWluaXQoKTogdm9pZCB7XG5cdGluaXRDYXJkcyhkb2N1bWVudCk7XG5cdGF0dGFjaENhcmRDbGlja0xpc3RlbmVycyhkb2N1bWVudCk7XG59XG5cbmZ1bmN0aW9uIHJ1bigpOiB2b2lkIHtcblx0Y29uc3QgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS12YWx1ZS1jYXJkcycpO1xuXG5cdC8vIEVuYWJsZSBlbnRyYW5jZSBhbmltYXRpb24gKGNhcmRzIGhpZGRlbiB1bnRpbCByZXZlYWxlZClcblx0Zm9yIChjb25zdCBlbCBvZiBjb250YWluZXJzKSB7XG5cdFx0ZWwuY2xhc3NMaXN0LmFkZCgnbmV4dG9yYS12YWx1ZS1jYXJkcy0tYW5pbWF0ZScpO1xuXHR9XG5cblx0aWYgKHByZWZlcnNSZWR1Y2VkTW90aW9uKCkpIHtcblx0XHRmb3IgKGNvbnN0IGVsIG9mIGNvbnRhaW5lcnMpIHtcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ25leHRvcmEtdmFsdWUtY2FyZHMtLXJlZHVjZWQtbW90aW9uJyk7XG5cdFx0XHRpbml0U2Nyb2xsUmV2ZWFsKGVsKTtcblx0XHR9XG5cdFx0YXR0YWNoQ2FyZENsaWNrTGlzdGVuZXJzKGRvY3VtZW50KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoaXNUb3VjaERldmljZSgpKSB7XG5cdFx0Zm9yIChjb25zdCBlbCBvZiBjb250YWluZXJzKSB7XG5cdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCduZXh0b3JhLXZhbHVlLWNhcmRzLS10b3VjaCcpO1xuXHRcdFx0aW5pdFNjcm9sbFJldmVhbChlbCk7XG5cdFx0fVxuXHRcdGF0dGFjaENhcmRDbGlja0xpc3RlbmVycyhkb2N1bWVudCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aW5pdENhcmRzKGRvY3VtZW50KTtcblx0YXR0YWNoQ2FyZENsaWNrTGlzdGVuZXJzKGRvY3VtZW50KTtcblxuXHRmb3IgKGNvbnN0IGVsIG9mIGNvbnRhaW5lcnMpIHtcblx0XHRpbml0U2Nyb2xsUmV2ZWFsKGVsKTtcblx0fVxufVxuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBydW4sIHsgb25jZTogdHJ1ZSB9KTtcbn0gZWxzZSB7XG5cdHJ1bigpO1xufVxuXG4vLyBQdWJsaWMgQVBJIGZvciBleHRlcm5hbCByZS1pbml0aWFsaXphdGlvblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ25leHRvcmEtdmFsdWUtY2FyZHMtcmVpbml0JywgKCkgPT4ge1xuXHRkZXN0cm95QWxsKCk7XG5cdHJlaW5pdCgpO1xufSk7XG5cbi8vIFJlZHVjZWQtbW90aW9uIHByZWZlcmVuY2UgY2hhbmdlc1xud2luZG93Lm1hdGNoTWVkaWE/LignKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKT8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcblx0aWYgKGUubWF0Y2hlcykge1xuXHRcdGRlc3Ryb3lBbGwoKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLm5leHRvcmEtdmFsdWUtY2FyZHMnKS5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnbmV4dG9yYS12YWx1ZS1jYXJkcy0tcmVkdWNlZC1tb3Rpb24nKTtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLm5leHRvcmEtdmFsdWUtY2FyZHMnKS5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnbmV4dG9yYS12YWx1ZS1jYXJkcy0tcmVkdWNlZC1tb3Rpb24nKTtcblx0XHR9KTtcblx0XHRyZWluaXQoKTtcblx0XHQvLyBSZS1ydW4gZW50cmFuY2UgcmV2ZWFsIGZvciBjb250YWluZXJzIHRoYXQgbWF5IGFscmVhZHkgYmUgdmlzaWJsZVxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS12YWx1ZS1jYXJkcycpLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0XHRpbml0U2Nyb2xsUmV2ZWFsKGVsKTtcblx0XHR9KTtcblx0fVxufSk7XG5cbi8vIFZpZXdwb3J0IHJlc2l6ZSBmb3IgcmVzcG9uc2l2ZSB0aWx0XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25WaWV3cG9ydFJlc2l6ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7O0FBNkNBLE1BQU0sYUFBMEIsQ0FBQztBQUNqQyxNQUFJLGNBQW9DO0FBQ3hDLE1BQUksa0JBQXNDO0FBQzFDLE1BQUksaUJBQWlCO0FBTXJCLFdBQVMsdUJBQWdDO0FBQ3hDLFdBQ0MsT0FBTyxXQUFXLGVBQ2xCLE9BQU8sYUFBYSxrQ0FBa0MsRUFBRSxZQUFZO0FBQUEsRUFFdEU7QUFFQSxXQUFTLGdCQUF5QjtBQUNqQyxXQUNDLE9BQU8sV0FBVyxnQkFDakIsa0JBQWtCLFVBQVUsVUFBVSxpQkFBaUI7QUFBQSxFQUUxRDtBQUVBLFdBQVMsTUFBTSxLQUFhLEtBQWEsS0FBcUI7QUFDN0QsV0FBTyxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUM7QUFBQSxFQUN4QztBQUVBLFdBQVMsVUFBVSxJQUFpQixNQUFjLFVBQTBCO0FBQzNFLFVBQU0sTUFBTSxpQkFBaUIsRUFBRSxFQUFFLGlCQUFpQixJQUFJLEVBQUUsS0FBSztBQUM3RCxRQUFJLENBQUMsSUFBSyxRQUFPO0FBQ2pCLFVBQU0sTUFBTSxXQUFXLEdBQUc7QUFDMUIsV0FBTyxPQUFPLE1BQU0sR0FBRyxJQUFJLFdBQVc7QUFBQSxFQUN2QztBQUdBLFdBQVMsNEJBQW9DO0FBQzVDLFFBQUksT0FBTyxXQUFXLFlBQWEsUUFBTztBQUMxQyxVQUFNLElBQUksT0FBTztBQUNqQixRQUFJLElBQUksSUFBSyxRQUFPO0FBQ3BCLFFBQUksSUFBSSxLQUFNLFFBQU87QUFDckIsV0FBTztBQUFBLEVBQ1I7QUFHQSxXQUFTLG1CQUE0QjtBQUNwQyxXQUFPLE9BQU8sV0FBVyxlQUFlLE9BQU8sYUFBYTtBQUFBLEVBQzdEO0FBR0EsV0FBUyxvQkFBNEI7QUFDcEMsV0FBTyxPQUFPLGFBQWEsU0FBUyxnQkFBZ0I7QUFBQSxFQUNyRDtBQU1BLFdBQVMsV0FBVyxNQUF5QjtBQUM1QyxRQUFJLHFCQUFxQixLQUFLLGNBQWMsR0FBRztBQUM5QztBQUFBLElBQ0Q7QUFFQSxVQUFNLGFBQWEsMEJBQTBCO0FBQzdDLFFBQUksZUFBZSxFQUFHO0FBRXRCLFVBQU0sWUFBWSxLQUFLLFFBQXFCLHNCQUFzQjtBQUNsRSxVQUFNLGFBQWEsWUFBWSxVQUFVLFdBQVcsa0NBQWtDLEVBQUUsSUFBSTtBQUM1RixVQUFNLFVBQVUsYUFBYTtBQUM3QixVQUFNLGFBQWEsWUFBWSxVQUFVLFdBQVcscUNBQXFDLElBQUksSUFBSTtBQUNqRyxVQUFNLGNBQWMsV0FBVyxLQUFLLGFBQWEsZUFBZSxLQUFLLEdBQUcsS0FBSztBQUM3RSxVQUFNLGtCQUFrQixjQUFjO0FBRXRDLFVBQU0sY0FBYyxDQUFDLE1BQXdCO0FBQzVDLFlBQU0sT0FBTyxLQUFLLHNCQUFzQjtBQUN4QyxZQUFNLFVBQVUsS0FBSyxPQUFPLEtBQUssUUFBUTtBQUN6QyxZQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssU0FBUztBQUN6QyxZQUFNLE9BQU8sRUFBRSxVQUFVO0FBQ3pCLFlBQU0sT0FBTyxFQUFFLFVBQVU7QUFFekIsWUFBTSxRQUFRLE1BQU0sUUFBUSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUM7QUFDbEQsWUFBTSxRQUFRLE1BQU0sUUFBUSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUM7QUFFbkQsWUFBTSxRQUFRLFFBQVEsQ0FBQztBQUN2QixZQUFNLFFBQVEsUUFBUTtBQUV0QixXQUFLLE1BQU0sWUFBWSx1RUFBdUUsS0FBSyxnQkFBZ0IsS0FBSyxnQkFBZ0IsZUFBZSxjQUFjLFVBQVU7QUFBQSxJQUNoTDtBQUVBLFVBQU0sZUFBZSxNQUFZO0FBQ2hDLFlBQU1BLGFBQVksS0FBSyxRQUFxQixzQkFBc0I7QUFDbEUsWUFBTSxNQUFNQSxhQUNULGlCQUFpQkEsVUFBUyxFQUFFLGlCQUFpQiwyQ0FBMkMsRUFBRSxLQUFLLEtBQUssVUFDcEc7QUFDSCxXQUFLLE1BQU0sYUFBYSxhQUFhLEdBQUc7QUFDeEMsV0FBSyxNQUFNLFlBQVksbUdBQW1HLGVBQWU7QUFFekksWUFBTSxrQkFBa0IsTUFBWTtBQUNuQyxhQUFLLE1BQU0sYUFBYTtBQUN4QixhQUFLLG9CQUFvQixpQkFBaUIsZUFBZTtBQUFBLE1BQzFEO0FBQ0EsV0FBSyxpQkFBaUIsaUJBQWlCLGlCQUFpQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQUEsSUFDdkU7QUFFQSxVQUFNLGVBQWUsTUFBWTtBQUNoQyxXQUFLLE1BQU0sYUFBYTtBQUFBLElBQ3pCO0FBRUEsU0FBSyxpQkFBaUIsY0FBYyxZQUFZO0FBQ2hELFNBQUssaUJBQWlCLGFBQWEsV0FBVztBQUM5QyxTQUFLLGlCQUFpQixjQUFjLFlBQVk7QUFHaEQsU0FBSyxNQUFNLFlBQVksbUdBQW1HLGVBQWU7QUFFekksZUFBVyxLQUFLO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0EsZ0JBQWdCO0FBQUEsTUFDaEIsaUJBQWlCO0FBQUEsTUFDakIsaUJBQWlCO0FBQUEsSUFDbEIsQ0FBQztBQUFBLEVBQ0Y7QUFFQSxXQUFTLFlBQVksTUFBeUI7QUFDN0MsVUFBTSxNQUFNLFdBQVcsVUFBVSxDQUFDLE1BQU0sRUFBRSxTQUFTLElBQUk7QUFDdkQsUUFBSSxRQUFRLEdBQUk7QUFFaEIsVUFBTSxRQUFRLFdBQVcsR0FBRztBQUM1QixTQUFLLG9CQUFvQixhQUFhLE1BQU0sY0FBYztBQUMxRCxTQUFLLG9CQUFvQixjQUFjLE1BQU0sZUFBZTtBQUM1RCxTQUFLLG9CQUFvQixjQUFjLE1BQU0sZUFBZTtBQUM1RCxTQUFLLE1BQU0sWUFBWTtBQUN2QixTQUFLLE1BQU0sYUFBYTtBQUN4QixlQUFXLE9BQU8sS0FBSyxDQUFDO0FBQUEsRUFDekI7QUFFQSxXQUFTLFVBQVUsWUFBZ0MsVUFBZ0I7QUFDbEUsY0FDRSxpQkFBOEIsNEJBQTRCLEVBQzFELFFBQVEsQ0FBQyxTQUFTO0FBQ2xCLFVBQUksV0FBVyxLQUFLLENBQUMsTUFBTSxFQUFFLFNBQVMsSUFBSSxFQUFHO0FBQzdDLGlCQUFXLElBQUk7QUFBQSxJQUNoQixDQUFDO0FBQUEsRUFDSDtBQUVBLFdBQVMsYUFBbUI7QUFDM0IsV0FBTyxXQUFXLFNBQVMsR0FBRztBQUM3QixrQkFBWSxXQUFXLENBQUMsRUFBRSxJQUFJO0FBQUEsSUFDL0I7QUFBQSxFQUNEO0FBTUEsTUFBTSxxQkFDTDtBQUVELFdBQVMscUJBQXFCLFdBQXVDO0FBQ3BFLFVBQU0sTUFBTSxVQUFVLGlCQUE4QixrQkFBa0I7QUFDdEUsV0FBTyxNQUFNLEtBQUssR0FBRyxFQUFFLE9BQU8sQ0FBQyxPQUFPO0FBQ3JDLFVBQUksR0FBRyxPQUFRLFFBQU87QUFDdEIsWUFBTSxRQUFRLGlCQUFpQixFQUFFO0FBQ2pDLFVBQUksTUFBTSxZQUFZLFVBQVUsTUFBTSxlQUFlLFNBQVUsUUFBTztBQUV0RSxVQUFJLFNBQTZCLEdBQUc7QUFDcEMsYUFBTyxVQUFVLFdBQVcsV0FBVztBQUN0QyxZQUFJLE9BQU8sT0FBUSxRQUFPO0FBQzFCLGlCQUFTLE9BQU87QUFBQSxNQUNqQjtBQUNBLGFBQU87QUFBQSxJQUNSLENBQUM7QUFBQSxFQUNGO0FBRUEsV0FBUyxVQUFVLE9BQW9CLEdBQXdCO0FBQzlELFFBQUksRUFBRSxRQUFRLE1BQU87QUFFckIsVUFBTSxZQUFZLHFCQUFxQixLQUFLO0FBQzVDLFFBQUksVUFBVSxXQUFXLEVBQUc7QUFFNUIsVUFBTSxRQUFRLFVBQVUsQ0FBQztBQUN6QixVQUFNLE9BQU8sVUFBVSxVQUFVLFNBQVMsQ0FBQztBQUUzQyxRQUFJLEVBQUUsVUFBVTtBQUNmLFVBQUksU0FBUyxrQkFBa0IsT0FBTztBQUNyQyxVQUFFLGVBQWU7QUFDakIsYUFBSyxNQUFNO0FBQUEsTUFDWjtBQUFBLElBQ0QsT0FBTztBQUNOLFVBQUksU0FBUyxrQkFBa0IsTUFBTTtBQUNwQyxVQUFFLGVBQWU7QUFDakIsY0FBTSxNQUFNO0FBQUEsTUFDYjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBRUEsV0FBUyxpQkFBdUI7QUFDL0IsVUFBTSxpQkFBaUIsa0JBQWtCO0FBQ3pDLGFBQVMsZ0JBQWdCLE1BQU0sWUFBWSwwQkFBMEIsR0FBRyxjQUFjLElBQUk7QUFDMUYsYUFBUyxLQUFLLE1BQU0sV0FBVztBQUMvQixRQUFJLGlCQUFpQixHQUFHO0FBQ3ZCLGVBQVMsS0FBSyxNQUFNLGVBQWUsR0FBRyxjQUFjO0FBQUEsSUFDckQ7QUFBQSxFQUNEO0FBRUEsV0FBUyxtQkFBeUI7QUFDakMsYUFBUyxLQUFLLE1BQU0sV0FBVztBQUMvQixhQUFTLEtBQUssTUFBTSxlQUFlO0FBQUEsRUFDcEM7QUFFQSxXQUFTLG1CQUFrQztBQUMxQyxRQUFJLFlBQWEsUUFBTztBQUd4QixVQUFNLFVBQVUsU0FBUyxjQUFjLEtBQUs7QUFDNUMsWUFBUSxZQUFZO0FBQ3BCLFlBQVEsYUFBYSxlQUFlLE1BQU07QUFHMUMsVUFBTSxTQUFTLFNBQVMsY0FBYyxLQUFLO0FBQzNDLFdBQU8sWUFBWTtBQUNuQixXQUFPLGFBQWEsUUFBUSxRQUFRO0FBQ3BDLFdBQU8sYUFBYSxjQUFjLE1BQU07QUFDeEMsV0FBTyxhQUFhLG1CQUFtQixrQ0FBa0M7QUFHekUsVUFBTSxXQUFXLFNBQVMsY0FBYyxRQUFRO0FBQ2hELGFBQVMsWUFBWTtBQUNyQixhQUFTLE9BQU87QUFDaEIsYUFBUyxhQUFhLGNBQWMsY0FBYztBQUNsRCxhQUFTLFlBQ1I7QUFDRCxhQUFTLGlCQUFpQixTQUFTLGNBQWM7QUFHakQsVUFBTSxpQkFBaUIsU0FBUyxjQUFjLEtBQUs7QUFDbkQsbUJBQWUsWUFBWTtBQUczQixVQUFNLFVBQVUsU0FBUyxjQUFjLElBQUk7QUFDM0MsWUFBUSxZQUFZO0FBQ3BCLFlBQVEsS0FBSztBQUdiLFVBQU0sU0FBUyxTQUFTLGNBQWMsR0FBRztBQUN6QyxXQUFPLFlBQVk7QUFHbkIsV0FBTyxZQUFZLFFBQVE7QUFDM0IsV0FBTyxZQUFZLGNBQWM7QUFDakMsV0FBTyxZQUFZLE9BQU87QUFDMUIsV0FBTyxZQUFZLE1BQU07QUFDekIsWUFBUSxZQUFZLE1BQU07QUFHMUIsWUFBUSxpQkFBaUIsU0FBUyxDQUFDLE1BQU07QUFDeEMsVUFBSSxFQUFFLFdBQVcsU0FBUztBQUN6Qix1QkFBZTtBQUFBLE1BQ2hCO0FBQUEsSUFDRCxDQUFDO0FBR0QsWUFBUSxpQkFBaUIsV0FBVyxDQUFDLE1BQU07QUFDMUMsVUFBSSxFQUFFLFFBQVEsVUFBVTtBQUN2QixVQUFFLGVBQWU7QUFDakIsdUJBQWU7QUFDZjtBQUFBLE1BQ0Q7QUFDQSxnQkFBVSxRQUFRLENBQUM7QUFBQSxJQUNwQixDQUFDO0FBRUQsYUFBUyxLQUFLLFlBQVksT0FBTztBQUNqQyxrQkFBYyxFQUFFLFNBQVMsUUFBUSxVQUFVLGdCQUFnQixTQUFTLE9BQU87QUFDM0UsV0FBTztBQUFBLEVBQ1I7QUFFQSxXQUFTLGNBQWMsTUFBeUI7QUFDL0MsVUFBTSxRQUFRLGlCQUFpQjtBQUcvQixVQUFNLFFBQVEsS0FBSyxhQUFhLGVBQWUsS0FBSztBQUNwRCxVQUFNLGNBQWMsS0FBSyxhQUFhLHFCQUFxQixLQUFLO0FBQ2hFLFVBQU0sWUFBWSxLQUFLLGFBQWEsb0JBQW9CLEtBQUs7QUFDN0QsVUFBTSxXQUFXLEtBQUssYUFBYSxtQkFBbUIsS0FBSztBQUMzRCxVQUFNLGlCQUFpQixLQUFLLGFBQWEsMEJBQTBCLEtBQUs7QUFHeEUsVUFBTSxRQUFRLGNBQWM7QUFDNUIsVUFBTSxPQUFPLGNBQWM7QUFHM0IsVUFBTSxlQUFlLFlBQVk7QUFDakMsUUFBSSxVQUFVO0FBQ2IsVUFBSSxjQUFjLFNBQVM7QUFDMUIsY0FBTSxRQUFRLFNBQVMsY0FBYyxPQUFPO0FBQzVDLGNBQU0sTUFBTTtBQUNaLGNBQU0sV0FBVztBQUNqQixjQUFNLGNBQWM7QUFDcEIsY0FBTSxZQUFZO0FBQ2xCLFlBQUksZ0JBQWdCO0FBQ25CLGdCQUFNLFNBQVM7QUFBQSxRQUNoQjtBQUNBLGNBQU0sZUFBZSxZQUFZLEtBQUs7QUFBQSxNQUN2QyxPQUFPO0FBQ04sY0FBTSxNQUFNLFNBQVMsY0FBYyxLQUFLO0FBQ3hDLFlBQUksTUFBTTtBQUNWLFlBQUksTUFBTTtBQUNWLFlBQUksWUFBWTtBQUNoQixZQUFJLFVBQVU7QUFDZCxjQUFNLGVBQWUsWUFBWSxHQUFHO0FBQUEsTUFDckM7QUFBQSxJQUNEO0FBR0Esc0JBQWtCO0FBR2xCLG1CQUFlO0FBR2YsVUFBTSxRQUFRLE1BQU0sVUFBVTtBQUM5QixVQUFNLFFBQVEsYUFBYSxlQUFlLE9BQU87QUFHakQsMEJBQXNCLE1BQU07QUFDM0IsNEJBQXNCLE1BQU07QUFDM0IsY0FBTSxRQUFRLFVBQVUsSUFBSSxjQUFjO0FBRTFDLGNBQU0sU0FBUyxNQUFNO0FBQUEsTUFDdEIsQ0FBQztBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0Y7QUFFQSxXQUFTLGlCQUF1QjtBQUMvQixRQUFJLENBQUMsWUFBYTtBQUVsQixnQkFBWSxRQUFRLFVBQVUsT0FBTyxjQUFjO0FBQ25ELGdCQUFZLFFBQVEsYUFBYSxlQUFlLE1BQU07QUFHdEQsVUFBTSxRQUFRLFlBQVksZUFBZSxjQUFjLE9BQU87QUFDOUQsUUFBSSxPQUFPO0FBQ1YsWUFBTSxNQUFNO0FBQUEsSUFDYjtBQUdBLFVBQU0sa0JBQWtCLE1BQVk7QUFDbkMsa0JBQWEsUUFBUSxNQUFNLFVBQVU7QUFDckMsa0JBQWEsUUFBUSxvQkFBb0IsaUJBQWlCLGVBQWU7QUFHekUsVUFBSSxpQkFBaUI7QUFDcEIsd0JBQWdCLE1BQU0sRUFBRSxlQUFlLEtBQUssQ0FBQztBQUM3QywwQkFBa0I7QUFBQSxNQUNuQjtBQUdBLHVCQUFpQjtBQUFBLElBQ2xCO0FBRUEsZ0JBQVksUUFBUSxpQkFBaUIsaUJBQWlCLGlCQUFpQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBSXJGLGVBQVcsTUFBTTtBQUNoQixVQUFJLGVBQWUsQ0FBQyxZQUFZLFFBQVEsVUFBVSxTQUFTLGNBQWMsR0FBRztBQUMzRSxvQkFBWSxRQUFRLE1BQU0sVUFBVTtBQUNwQyx5QkFBaUI7QUFBQSxNQUNsQjtBQUFBLElBQ0QsR0FBRyxHQUFHO0FBQUEsRUFDUDtBQUVBLFdBQVMseUJBQXlCLFlBQWdDLFVBQWdCO0FBQ2pGLGNBQ0UsaUJBQThCLDRCQUE0QixFQUMxRCxRQUFRLENBQUMsU0FBUztBQUVsQixVQUFJLEtBQUssUUFBUSxpQkFBaUIsSUFBSztBQUN2QyxXQUFLLFFBQVEsZUFBZTtBQUU1QixXQUFLLGlCQUFpQixTQUFTLE1BQU07QUFDcEMsc0JBQWMsSUFBSTtBQUFBLE1BQ25CLENBQUM7QUFHRCxXQUFLLGlCQUFpQixXQUFXLENBQUMsTUFBTTtBQUN2QyxZQUFJLEVBQUUsUUFBUSxXQUFXLEVBQUUsUUFBUSxLQUFLO0FBQ3ZDLFlBQUUsZUFBZTtBQUNqQix3QkFBYyxJQUFJO0FBQUEsUUFDbkI7QUFBQSxNQUNELENBQUM7QUFHRCxVQUFJLENBQUMsS0FBSyxhQUFhLFVBQVUsR0FBRztBQUNuQyxhQUFLLGFBQWEsWUFBWSxHQUFHO0FBQUEsTUFDbEM7QUFDQSxVQUFJLENBQUMsS0FBSyxhQUFhLE1BQU0sR0FBRztBQUMvQixhQUFLLGFBQWEsUUFBUSxRQUFRO0FBQUEsTUFDbkM7QUFDQSxVQUFJLENBQUMsS0FBSyxhQUFhLFlBQVksR0FBRztBQUNyQyxjQUFNLFFBQVEsS0FBSyxhQUFhLGVBQWUsS0FBSztBQUNwRCxhQUFLLGFBQWEsY0FBYyxRQUFRLEtBQUssRUFBRTtBQUFBLE1BQ2hEO0FBQUEsSUFDRCxDQUFDO0FBQUEsRUFDSDtBQU1BLE1BQU0sc0JBQXNCO0FBQzVCLE1BQU0saUJBQWlCO0FBRXZCLFdBQVMsaUJBQWlCLFdBQThCO0FBQ3ZELFVBQU0sT0FBTyxVQUFVLGNBQTJCLDRCQUE0QjtBQUM5RSxRQUFJLENBQUMsS0FBTTtBQUVYLFVBQU0sUUFBUSxNQUFNO0FBQUEsTUFDbkIsS0FBSyxpQkFBOEIsNEJBQTRCO0FBQUEsSUFDaEU7QUFDQSxRQUFJLE1BQU0sV0FBVyxFQUFHO0FBR3hCLFFBQUksTUFBTSxDQUFDLEVBQUUsVUFBVSxTQUFTLGNBQWMsRUFBRztBQUVqRCxRQUFJLHFCQUFxQixHQUFHO0FBRTNCLGlCQUFXLFFBQVEsT0FBTztBQUN6QixhQUFLLFVBQVUsSUFBSSxjQUFjO0FBQUEsTUFDbEM7QUFDQTtBQUFBLElBQ0Q7QUFFQSxVQUFNLFdBQVcsSUFBSTtBQUFBLE1BQ3BCLENBQUMsWUFBWTtBQUNaLFlBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxlQUFnQjtBQUVoQyxpQkFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUN0QyxnQkFBTSxRQUFRLElBQUk7QUFDbEIscUJBQVcsTUFBTTtBQUNoQixrQkFBTSxDQUFDLEVBQUUsVUFBVSxJQUFJLGNBQWM7QUFBQSxVQUN0QyxHQUFHLEtBQUs7QUFBQSxRQUNUO0FBRUEsaUJBQVMsV0FBVztBQUFBLE1BQ3JCO0FBQUEsTUFDQSxFQUFFLFlBQVkscUJBQXFCLFdBQVcsRUFBRTtBQUFBLElBQ2pEO0FBRUEsYUFBUyxRQUFRLElBQUk7QUFBQSxFQUN0QjtBQU1BLE1BQUksZ0JBQXNEO0FBQzFELFdBQVMsbUJBQXlCO0FBQ2pDLFFBQUksY0FBZSxjQUFhLGFBQWE7QUFDN0Msb0JBQWdCLFdBQVcsTUFBTTtBQUNoQyxVQUFJLGlCQUFpQixHQUFHO0FBRXZCLG1CQUFXO0FBQUEsTUFDWixPQUFPO0FBRU4sbUJBQVc7QUFDWCxrQkFBVSxRQUFRO0FBQUEsTUFDbkI7QUFBQSxJQUNELEdBQUcsR0FBRztBQUFBLEVBQ1A7QUFNQSxXQUFTLFNBQWU7QUFDdkIsY0FBVSxRQUFRO0FBQ2xCLDZCQUF5QixRQUFRO0FBQUEsRUFDbEM7QUFFQSxXQUFTLE1BQVk7QUFDcEIsVUFBTSxhQUFhLFNBQVMsaUJBQThCLHNCQUFzQjtBQUdoRixlQUFXLE1BQU0sWUFBWTtBQUM1QixTQUFHLFVBQVUsSUFBSSw4QkFBOEI7QUFBQSxJQUNoRDtBQUVBLFFBQUkscUJBQXFCLEdBQUc7QUFDM0IsaUJBQVcsTUFBTSxZQUFZO0FBQzVCLFdBQUcsVUFBVSxJQUFJLHFDQUFxQztBQUN0RCx5QkFBaUIsRUFBRTtBQUFBLE1BQ3BCO0FBQ0EsK0JBQXlCLFFBQVE7QUFDakM7QUFBQSxJQUNEO0FBRUEsUUFBSSxjQUFjLEdBQUc7QUFDcEIsaUJBQVcsTUFBTSxZQUFZO0FBQzVCLFdBQUcsVUFBVSxJQUFJLDRCQUE0QjtBQUM3Qyx5QkFBaUIsRUFBRTtBQUFBLE1BQ3BCO0FBQ0EsK0JBQXlCLFFBQVE7QUFDakM7QUFBQSxJQUNEO0FBRUEsY0FBVSxRQUFRO0FBQ2xCLDZCQUF5QixRQUFRO0FBRWpDLGVBQVcsTUFBTSxZQUFZO0FBQzVCLHVCQUFpQixFQUFFO0FBQUEsSUFDcEI7QUFBQSxFQUNEO0FBRUEsTUFBSSxTQUFTLGVBQWUsV0FBVztBQUN0QyxhQUFTLGlCQUFpQixvQkFBb0IsS0FBSyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQUEsRUFDbEUsT0FBTztBQUNOLFFBQUk7QUFBQSxFQUNMO0FBR0EsU0FBTyxpQkFBaUIsOEJBQThCLE1BQU07QUFDM0QsZUFBVztBQUNYLFdBQU87QUFBQSxFQUNSLENBQUM7QUFHRCxTQUFPLGFBQWEsa0NBQWtDLEdBQUcsaUJBQWlCLFVBQVUsQ0FBQyxNQUFNO0FBQzFGLFFBQUksRUFBRSxTQUFTO0FBQ2QsaUJBQVc7QUFDWCxlQUFTLGlCQUE4QixzQkFBc0IsRUFBRSxRQUFRLENBQUMsT0FBTztBQUM5RSxXQUFHLFVBQVUsSUFBSSxxQ0FBcUM7QUFBQSxNQUN2RCxDQUFDO0FBQUEsSUFDRixPQUFPO0FBQ04sZUFBUyxpQkFBOEIsc0JBQXNCLEVBQUUsUUFBUSxDQUFDLE9BQU87QUFDOUUsV0FBRyxVQUFVLE9BQU8scUNBQXFDO0FBQUEsTUFDMUQsQ0FBQztBQUNELGFBQU87QUFFUCxlQUFTLGlCQUE4QixzQkFBc0IsRUFBRSxRQUFRLENBQUMsT0FBTztBQUM5RSx5QkFBaUIsRUFBRTtBQUFBLE1BQ3BCLENBQUM7QUFBQSxJQUNGO0FBQUEsRUFDRCxDQUFDO0FBR0QsU0FBTyxpQkFBaUIsVUFBVSxrQkFBa0IsRUFBRSxTQUFTLEtBQUssQ0FBQzsiLAogICJuYW1lcyI6IFsiY29udGFpbmVyIl0KfQo=
