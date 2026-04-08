"use strict";
(() => {
  // resources/ts/header-nav.ts
  function initHeaderNavigation() {
  }

  // resources/ts/lib/modal.ts
  var FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
  var OPEN_CLASS = "nextora-modal--open";
  var OPEN_ATTR = "data-nextora-modal-open";
  var ROOT_ATTR = "data-nextora-modal";
  var SURFACE_ATTR = "data-nextora-modal-surface";
  var DISMISS_ATTR = "data-nextora-modal-dismiss";
  var stack = [];
  var scrollLocked = false;
  function getCloseLabel() {
    return window.nextoraModal?.closeLabel?.trim() || "Close dialog";
  }
  function getFocusable(container) {
    return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
      (el) => el.offsetParent !== null || el === document.activeElement
    );
  }
  function lockScroll(lock) {
    const doc = document.documentElement;
    if (lock) {
      if (!scrollLocked) {
        const y = window.scrollY;
        doc.dataset.nextoraModalScrollY = String(y);
        doc.style.setProperty("--nextora-modal-scroll-y", `-${y}px`);
        doc.classList.add("nextora-modal-scroll-lock");
        scrollLocked = true;
      }
    } else if (scrollLocked && stack.length === 0) {
      const y = Number(doc.dataset.nextoraModalScrollY || 0);
      doc.classList.remove("nextora-modal-scroll-lock");
      doc.style.removeProperty("--nextora-modal-scroll-y");
      delete doc.dataset.nextoraModalScrollY;
      window.scrollTo(0, y);
      scrollLocked = false;
    }
  }
  function isModalRoot(el) {
    return el instanceof HTMLElement && el.hasAttribute(ROOT_ATTR);
  }
  function findModalRoot(el) {
    let n = el;
    while (n) {
      if (isModalRoot(n)) {
        return n;
      }
      n = n.parentElement;
    }
    return null;
  }
  function setStackZIndex() {
    stack.forEach((entry, i) => {
      entry.root.style.zIndex = String(1050 + i);
    });
  }
  function trapFocus(e, surface) {
    if (e.key !== "Tab") {
      return;
    }
    const nodes = getFocusable(surface);
    if (nodes.length === 0) {
      return;
    }
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    const active = document.activeElement;
    if (e.shiftKey) {
      if (active === first || !surface.contains(active)) {
        e.preventDefault();
        last.focus();
      }
    } else if (active === last) {
      e.preventDefault();
      first.focus();
    }
  }
  function openModal(root2) {
    if (!root2.hasAttribute(ROOT_ATTR) || root2.classList.contains(OPEN_CLASS)) {
      return;
    }
    const surface = root2.querySelector(`[${SURFACE_ATTR}]`) ?? root2.querySelector(".nextora-modal__surface");
    if (!surface || surface.getAttribute("role") !== "dialog") {
      return;
    }
    const previousFocus = document.activeElement;
    root2.removeAttribute("hidden");
    root2.removeAttribute("aria-hidden");
    const onKeyDown = (e) => {
      if (e.key === "Escape" && stack[stack.length - 1]?.root === root2) {
        e.preventDefault();
        closeModal(root2);
        return;
      }
      trapFocus(e, surface);
    };
    stack.push({ root: root2, previousFocus, onKeyDown });
    document.addEventListener("keydown", onKeyDown, true);
    lockScroll(true);
    setStackZIndex();
    requestAnimationFrame(() => {
      root2.classList.add(OPEN_CLASS);
      const focusables = getFocusable(surface);
      const toFocus = focusables[0] ?? surface;
      toFocus.focus();
      root2.dispatchEvent(
        new CustomEvent("nextora:modalopen", {
          bubbles: true,
          detail: { root: root2 }
        })
      );
    });
  }
  function closeModal(root2, afterClose) {
    const top = stack[stack.length - 1];
    const target = root2 ?? top?.root;
    if (!target || !target.classList.contains(OPEN_CLASS)) {
      return;
    }
    if (root2 !== void 0 && top && root2 !== top.root) {
      return;
    }
    const idx = stack.findIndex((e) => e.root === target);
    if (idx === -1) {
      return;
    }
    const entry = stack[idx];
    let finished = false;
    const finish = () => {
      if (finished) {
        return;
      }
      finished = true;
      target.dispatchEvent(
        new CustomEvent("nextora:modalclose", {
          bubbles: true,
          detail: { root: target }
        })
      );
      target.removeEventListener("transitionend", onTransitionEnd);
      document.removeEventListener("keydown", entry.onKeyDown, true);
      stack.splice(idx, 1);
      setStackZIndex();
      target.classList.remove(OPEN_CLASS);
      target.setAttribute("hidden", "");
      target.setAttribute("aria-hidden", "true");
      lockScroll(false);
      if (entry.previousFocus instanceof HTMLElement && document.contains(entry.previousFocus)) {
        entry.previousFocus.focus();
      }
      afterClose?.();
    };
    const onTransitionEnd = (ev) => {
      if (ev.target === target && ev.propertyName === "opacity") {
        finish();
      }
    };
    target.addEventListener("transitionend", onTransitionEnd);
    window.setTimeout(finish, 380);
    target.classList.remove(OPEN_CLASS);
  }
  function openModalById(id) {
    const clean = id.replace(/^#/, "");
    const el = document.getElementById(clean);
    if (el instanceof HTMLElement && el.hasAttribute(ROOT_ATTR)) {
      openModal(el);
      return true;
    }
    return false;
  }
  function openModalDialog(options) {
    const closeOnBackdrop = options.closeOnBackdrop !== false;
    const id = `nextora-modal-${Math.random().toString(36).slice(2, 11)}`;
    const titleId = `${id}-title`;
    const root2 = document.createElement("div");
    root2.className = `nextora-modal${options.wrapClass ? ` ${options.wrapClass}` : ""}`;
    root2.setAttribute(ROOT_ATTR, "");
    root2.setAttribute("aria-hidden", "true");
    root2.setAttribute("hidden", "");
    const scrim = document.createElement("div");
    scrim.className = "nextora-modal__scrim";
    scrim.tabIndex = -1;
    if (closeOnBackdrop) {
      scrim.setAttribute(DISMISS_ATTR, "");
    }
    const surface = document.createElement("div");
    surface.className = "nextora-modal__surface nextora-modal__surface--sm";
    surface.setAttribute(SURFACE_ATTR, "");
    surface.setAttribute("role", "dialog");
    surface.setAttribute("aria-modal", "true");
    surface.setAttribute("aria-labelledby", titleId);
    surface.tabIndex = -1;
    const header = document.createElement("header");
    header.className = "nextora-modal__header";
    const h2 = document.createElement("h2");
    h2.className = "nextora-modal__title";
    h2.id = titleId;
    h2.textContent = options.title;
    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "nextora-modal__close";
    closeBtn.setAttribute(DISMISS_ATTR, "");
    closeBtn.setAttribute("aria-label", getCloseLabel());
    closeBtn.innerHTML = '<span class="nextora-modal__close-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg></span>';
    header.append(h2, closeBtn);
    const bodyEl = document.createElement("div");
    bodyEl.className = "nextora-modal__body";
    if (typeof options.body === "string") {
      bodyEl.innerHTML = options.body;
    } else {
      bodyEl.append(options.body);
    }
    surface.append(header, bodyEl);
    if (options.footer !== void 0) {
      const foot = document.createElement("footer");
      foot.className = "nextora-modal__footer";
      if (typeof options.footer === "string") {
        foot.innerHTML = options.footer;
      } else {
        foot.append(options.footer);
      }
      surface.append(foot);
    }
    root2.append(scrim, surface);
    document.body.append(root2);
    openModal(root2);
    return {
      close: () => {
        closeModal(root2, () => {
          root2.remove();
        });
      }
    };
  }
  function onDocumentClick(e) {
    const t = e.target;
    if (!(t instanceof Element)) {
      return;
    }
    const openBtn = t.closest(`[${OPEN_ATTR}]`);
    if (openBtn instanceof HTMLElement) {
      const id = openBtn.getAttribute(OPEN_ATTR);
      if (id) {
        e.preventDefault();
        openModalById(id);
      }
      return;
    }
    const dismiss = t.closest(`[${DISMISS_ATTR}]`);
    if (dismiss instanceof HTMLElement) {
      const modal = findModalRoot(dismiss);
      if (modal && modal.classList.contains(OPEN_CLASS)) {
        e.preventDefault();
        closeModal(modal);
      }
    }
  }
  function initModals() {
    document.addEventListener("click", onDocumentClick);
  }
  function attachModalGlobals() {
    window.nextoraOpenModal = openModalById;
    window.nextoraOpenModalDialog = openModalDialog;
    window.nextoraCloseModal = closeModal;
  }

  // resources/ts/lib/spotlight-search.ts
  function cfg() {
    const c = window.nextoraSpotlight;
    if (!c?.restUrl) {
      return null;
    }
    return c;
  }
  function formatTitle(raw) {
    if (typeof raw === "string") {
      return raw;
    }
    if (raw && typeof raw === "object") {
      const r = raw.rendered ?? raw.raw;
      if (typeof r === "string") {
        const d = document.createElement("div");
        d.innerHTML = r;
        return (d.textContent || "").trim();
      }
    }
    return "";
  }
  function subtypeLabel(sub, c) {
    if (sub === "post") {
      return c.typePost;
    }
    if (sub === "page") {
      return c.typePage;
    }
    return c.typeOther;
  }
  function formatDisplayPath(rawUrl) {
    try {
      const u = new URL(rawUrl, window.location.origin);
      let p = decodeURIComponent(u.pathname || "/");
      if (p.length > 1 && p.endsWith("/")) {
        p = p.slice(0, -1);
      }
      p = p.replace(/^\/+/, "");
      return p === "" ? "/" : p;
    } catch {
      return "";
    }
  }
  function truncateMiddle(str, max) {
    if (str.length <= max) {
      return str;
    }
    const keep = max - 1;
    const head = Math.ceil(keep / 2);
    const tail = Math.floor(keep / 2);
    return `${str.slice(0, head)}\u2026${str.slice(-tail)}`;
  }
  function spotlightIconSvg(subtype) {
    const stroke = 'xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
    if (subtype === "page") {
      return `<svg ${stroke}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18M9 21V9"/></svg>`;
    }
    if (subtype === "post") {
      return `<svg ${stroke}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h6"/></svg>`;
    }
    return `<svg ${stroke}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`;
  }
  function debounce(fn, ms) {
    let t;
    return (...args) => {
      if (t) {
        clearTimeout(t);
      }
      t = setTimeout(() => {
        t = void 0;
        fn(...args);
      }, ms);
    };
  }
  function initSpotlightSearch() {
    const config = cfg();
    if (!config) {
      return;
    }
    const roots = document.querySelectorAll("[data-nextora-spotlight]");
    roots.forEach((form) => bindSpotlightForm(form, config));
  }
  function bindSpotlightForm(form, config) {
    if (!(form instanceof HTMLFormElement)) {
      return;
    }
    const input = form.querySelector('input[name="s"]');
    const resultsEl = form.querySelector("[data-spotlight-results]");
    const statusEl = form.querySelector("[data-spotlight-status]");
    const spinnerEl = form.querySelector("[data-spotlight-spinner]");
    const hintEl = form.querySelector("[data-spotlight-hint]");
    const emptyEl = form.querySelector("[data-spotlight-empty]");
    if (!input || !resultsEl) {
      return;
    }
    let abort = null;
    let items = [];
    let activeIndex = -1;
    const setLoading = (on) => {
      spinnerEl?.toggleAttribute("hidden", !on);
      form.classList.toggle("nextora-spotlight--loading", on);
    };
    const setStatus = (text, hide = false) => {
      if (!statusEl) {
        return;
      }
      if (hide || text === "") {
        statusEl.textContent = "";
        statusEl.setAttribute("hidden", "");
        return;
      }
      statusEl.textContent = text;
      statusEl.removeAttribute("hidden");
    };
    const clearResults = () => {
      resultsEl.innerHTML = "";
      resultsEl.setAttribute("hidden", "");
      input.setAttribute("aria-expanded", "false");
      input.removeAttribute("aria-activedescendant");
      items = [];
      activeIndex = -1;
      emptyEl?.setAttribute("hidden", "");
      if (emptyEl) {
        emptyEl.textContent = "";
      }
    };
    const renderResults = (list) => {
      clearResults();
      if (list.length === 0) {
        if (emptyEl) {
          emptyEl.textContent = config.noResults;
          emptyEl.removeAttribute("hidden");
        }
        setStatus("", true);
        return;
      }
      resultsEl.removeAttribute("hidden");
      input.setAttribute("aria-expanded", "true");
      const ul = document.createElement("ul");
      ul.className = "nextora-spotlight__list";
      ul.setAttribute("role", "presentation");
      list.forEach((hit, i) => {
        const title = formatTitle(hit.title);
        const url = hit.url;
        const sub = hit.subtype || hit.type || "";
        const pathRaw = formatDisplayPath(url);
        const pathShown = truncateMiddle(pathRaw, 52);
        const li = document.createElement("li");
        li.className = "nextora-spotlight__item";
        li.style.setProperty("--nextora-spotlight-i", String(i));
        const a = document.createElement("a");
        a.className = "nextora-spotlight__link";
        a.href = url;
        a.setAttribute("role", "option");
        a.setAttribute("aria-selected", "false");
        a.id = `${input.id}-opt-${i}`;
        const thumb = document.createElement("span");
        thumb.className = "nextora-spotlight__thumb";
        thumb.innerHTML = spotlightIconSvg(sub);
        const stack2 = document.createElement("span");
        stack2.className = "nextora-spotlight__stack";
        const titleEl = document.createElement("span");
        titleEl.className = "nextora-spotlight__title";
        titleEl.textContent = title;
        const meta = document.createElement("span");
        meta.className = "nextora-spotlight__meta";
        const typeEl = document.createElement("span");
        typeEl.className = "nextora-spotlight__type";
        typeEl.textContent = subtypeLabel(sub, config);
        if (pathShown !== "") {
          const sep = document.createElement("span");
          sep.className = "nextora-spotlight__sep";
          sep.textContent = "\xB7";
          const pathEl = document.createElement("span");
          pathEl.className = "nextora-spotlight__path";
          pathEl.textContent = pathShown;
          meta.append(typeEl, sep, pathEl);
        } else {
          meta.append(typeEl);
        }
        stack2.append(titleEl, meta);
        a.append(thumb, stack2);
        li.append(a);
        ul.append(li);
        items.push({ el: a, url });
        a.addEventListener("mouseenter", () => {
          applyActive(i);
        });
      });
      resultsEl.append(ul);
      setStatus("", true);
    };
    const applyActive = (next) => {
      if (items.length === 0) {
        return;
      }
      const clamped = Math.max(0, Math.min(next, items.length - 1));
      activeIndex = clamped;
      items.forEach(({ el }, i) => {
        const on = i === clamped;
        el.setAttribute("aria-selected", on ? "true" : "false");
        el.classList.toggle("nextora-spotlight__link--active", on);
      });
      if (clamped >= 0 && items[clamped]) {
        input.setAttribute("aria-activedescendant", items[clamped].el.id);
      } else {
        input.removeAttribute("aria-activedescendant");
      }
    };
    const runFetch = async (q) => {
      const query = q.trim();
      if (query.length < config.minQueryLength) {
        clearResults();
        setStatus("", true);
        setLoading(false);
        hintEl?.removeAttribute("hidden");
        return;
      }
      hintEl?.setAttribute("hidden", "");
      if (abort) {
        abort.abort();
      }
      abort = new AbortController();
      const { signal } = abort;
      setLoading(true);
      setStatus(config.loading, false);
      const params = new URLSearchParams({
        search: query,
        per_page: String(config.perPage)
      });
      try {
        const res = await fetch(`${config.restUrl}?${params.toString()}`, {
          signal,
          credentials: "same-origin",
          headers: { Accept: "application/json" }
        });
        if (!res.ok) {
          throw new Error(String(res.status));
        }
        const data = await res.json();
        if (signal.aborted) {
          return;
        }
        renderResults(Array.isArray(data) ? data : []);
      } catch (e) {
        if (e.name === "AbortError") {
          return;
        }
        clearResults();
        if (emptyEl) {
          emptyEl.textContent = config.error;
          emptyEl.removeAttribute("hidden");
        }
        setStatus("", true);
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };
    const debouncedFetch = debounce((q) => {
      void runFetch(q);
    }, Math.max(80, config.debounceMs));
    input.addEventListener("input", () => {
      debouncedFetch(input.value);
    });
    input.addEventListener("keydown", (e) => {
      if (!resultsEl.hasAttribute("hidden") && items.length > 0) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          applyActive(activeIndex < 0 ? 0 : activeIndex + 1);
          return;
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          applyActive(activeIndex <= 0 ? items.length - 1 : activeIndex - 1);
          return;
        }
        if (e.key === "Enter" && activeIndex >= 0) {
          e.preventDefault();
          window.location.href = items[activeIndex].url;
          return;
        }
      }
    });
    form.addEventListener("submit", (e) => {
      if (activeIndex >= 0 && items[activeIndex]) {
        e.preventDefault();
        window.location.href = items[activeIndex].url;
      }
    });
    const resetUi = () => {
      if (abort) {
        abort.abort();
        abort = null;
      }
      input.value = "";
      clearResults();
      setStatus("", true);
      setLoading(false);
      hintEl?.removeAttribute("hidden");
    };
    const modalRoot = form.closest("[data-nextora-modal]");
    if (modalRoot) {
      modalRoot.addEventListener(
        "nextora:modalopen",
        () => {
          requestAnimationFrame(() => {
            input.focus();
            input.select();
          });
        },
        { passive: true }
      );
      modalRoot.addEventListener("nextora:modalclose", resetUi, { passive: true });
    }
    if (hintEl && config.keyboardHint && !hintEl.querySelector(".nextora-spotlight__kbd-hint")) {
      const kbd = document.createElement("span");
      kbd.className = "nextora-spotlight__kbd-hint";
      kbd.textContent = ` ${config.keyboardHint}`;
      hintEl.appendChild(kbd);
    }
  }

  // resources/ts/main.ts
  var root = document.documentElement;
  root.classList.add("nextora-js");
  initHeaderNavigation();
  initModals();
  attachModalGlobals();
  initSpotlightSearch();
})();
