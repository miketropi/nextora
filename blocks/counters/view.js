"use strict";
(() => {
  // blocks/counters/view.ts
  var ROOT_SELECTOR = '.wp-block-nextora-counters[data-nextora-counters-count-up="1"]';
  var EASINGS = {
    linear: (t) => t,
    easeOutCubic: (t) => 1 - (1 - t) ** 3,
    easeOutExpo: (t) => t === 1 ? 1 : 1 - 2 ** (-10 * t)
  };
  function prefersReducedMotion() {
    return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;
  }
  function formatValue(value, target) {
    const rounded = Number.isInteger(target) ? Math.round(value) : value;
    return rounded.toLocaleString("en-US", {
      maximumFractionDigits: Number.isInteger(target) ? 0 : 1
    });
  }
  function setFinalValue(el) {
    const target = Math.abs(parseFloat(el.dataset.nextoraCountersValue ?? "") || 0);
    const suffix = el.dataset.nextoraCountersSuffix ?? "";
    const prefix = el.dataset.nextoraCountersPrefix ?? "";
    el.textContent = prefix + formatValue(target, target) + suffix;
  }
  function isElementVisible(el) {
    if (!el.isConnected) {
      return false;
    }
    if (el.offsetWidth === 0 && el.offsetHeight === 0) {
      return false;
    }
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    return rect.bottom > 0 && rect.right > 0 && rect.top < windowHeight && rect.left < windowWidth;
  }
  function animateCounter(el, duration, easing) {
    const target = Math.abs(parseFloat(el.dataset.nextoraCountersValue ?? "") || 0);
    const suffix = el.dataset.nextoraCountersSuffix ?? "";
    const prefix = el.dataset.nextoraCountersPrefix ?? "";
    const easeFn = EASINGS[easing] ?? EASINGS.easeOutCubic;
    const start = performance.now();
    el.textContent = prefix + formatValue(0, target) + suffix;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = easeFn(progress) * target;
      el.textContent = prefix + formatValue(current, target) + suffix;
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
  }
  function runCountUp(wrapper) {
    if (prefersReducedMotion()) {
      wrapper.querySelectorAll(".nextora-counters__number[data-nextora-counters-value]").forEach(setFinalValue);
      wrapper.setAttribute("data-nextora-counters-count-init", "1");
      wrapper.classList.add("nextora-counters--ready");
      return;
    }
    const duration = parseInt(wrapper.dataset.nextoraCountersDuration ?? "2000", 10) || 2e3;
    const easingRaw = wrapper.dataset.nextoraCountersEasing ?? "easeOutCubic";
    const easing = easingRaw in EASINGS ? easingRaw : "easeOutCubic";
    wrapper.querySelectorAll(".nextora-counters__number[data-nextora-counters-value]").forEach(
      (el) => {
        animateCounter(el, duration, easing);
      }
    );
    wrapper.setAttribute("data-nextora-counters-count-init", "1");
    wrapper.classList.add("nextora-counters--ready");
  }
  function initRoot(wrapper, force = false) {
    if (!force && wrapper.getAttribute("data-nextora-counters-count-init") === "1") {
      return;
    }
    if (prefersReducedMotion()) {
      wrapper.querySelectorAll(".nextora-counters__number[data-nextora-counters-value]").forEach(setFinalValue);
      wrapper.setAttribute("data-nextora-counters-count-init", "1");
      wrapper.classList.add("nextora-counters--ready");
      return;
    }
    if (isElementVisible(wrapper)) {
      runCountUp(wrapper);
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            runCountUp(wrapper);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(wrapper);
  }
  function reinitAll(scope = document) {
    scope.querySelectorAll(ROOT_SELECTOR).forEach((wrapper) => {
      if (wrapper.closest(".nextora-primary-nav-portal")) {
        if (isElementVisible(wrapper)) {
          runCountUp(wrapper);
        } else {
          wrapper.removeAttribute("data-nextora-counters-count-init");
          initRoot(wrapper);
        }
      } else {
        if (wrapper.getAttribute("data-nextora-counters-count-init") !== "1") {
          initRoot(wrapper);
        }
      }
    });
  }
  function initAll() {
    document.querySelectorAll(
      '.wp-block-nextora-counters[data-nextora-counters-count-up="1"]:not([data-nextora-counters-count-init="1"])'
    ).forEach((el) => initRoot(el));
  }
  window.nextoraReinitCounters = () => reinitAll();
  window.nextoraRunCounter = runCountUp;
  window.addEventListener("nextora-counters-reinit", () => {
    reinitAll();
  });
  document.addEventListener(
    "click",
    (e) => {
      const target = e.target instanceof Element ? e.target : null;
      if (!target) return;
      if (target.closest(
        ".beplus-vmn-toggle, .nextora-submenu-toggle, .beplus-vmn-tab-container__tab, [data-nextora-nav-toggle], [data-nextora-accordion-toggle]"
      )) {
        [50, 150, 300, 500].forEach((delay) => {
          window.setTimeout(() => {
            reinitAll();
          }, delay);
        });
      }
    },
    { passive: true }
  );
  var scrollThrottle = null;
  var onScrollCheck = () => {
    if (scrollThrottle !== null) return;
    scrollThrottle = window.setTimeout(() => {
      scrollThrottle = null;
      document.querySelectorAll(
        '.wp-block-nextora-counters[data-nextora-counters-count-up="1"]:not([data-nextora-counters-count-init="1"])'
      ).forEach((el) => {
        if (isElementVisible(el)) {
          runCountUp(el);
        }
      });
    }, 120);
  };
  window.addEventListener("scroll", onScrollCheck, { passive: true });
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidmlldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IHt9O1xuXG4vKipcbiAqIENvdW50LXVwIGFuaW1hdGlvbiBmb3IgYG5leHRvcmEvY291bnRlcnNgIChmcm9udCBlbmQpLlxuICovXG5jb25zdCBST09UX1NFTEVDVE9SID1cblx0Jy53cC1ibG9jay1uZXh0b3JhLWNvdW50ZXJzW2RhdGEtbmV4dG9yYS1jb3VudGVycy1jb3VudC11cD1cIjFcIl0nO1xuXG50eXBlIEVhc2luZ05hbWUgPSAnbGluZWFyJyB8ICdlYXNlT3V0Q3ViaWMnIHwgJ2Vhc2VPdXRFeHBvJztcblxuY29uc3QgRUFTSU5HUzogUmVjb3JkPEVhc2luZ05hbWUsICh0OiBudW1iZXIpID0+IG51bWJlcj4gPSB7XG5cdGxpbmVhcjogKHQpID0+IHQsXG5cdGVhc2VPdXRDdWJpYzogKHQpID0+IDEgLSAoMSAtIHQpICoqIDMsXG5cdGVhc2VPdXRFeHBvOiAodCkgPT4gKHQgPT09IDEgPyAxIDogMSAtIDIgKiogKC0xMCAqIHQpKSxcbn07XG5cbmZ1bmN0aW9uIHByZWZlcnNSZWR1Y2VkTW90aW9uKCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gKFxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0d2luZG93Lm1hdGNoTWVkaWE/LignKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKS5tYXRjaGVzID09PSB0cnVlXG5cdCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKHZhbHVlOiBudW1iZXIsIHRhcmdldDogbnVtYmVyKTogc3RyaW5nIHtcblx0Y29uc3Qgcm91bmRlZCA9IE51bWJlci5pc0ludGVnZXIodGFyZ2V0KSA/IE1hdGgucm91bmQodmFsdWUpIDogdmFsdWU7XG5cdHJldHVybiByb3VuZGVkLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcblx0XHRtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IE51bWJlci5pc0ludGVnZXIodGFyZ2V0KSA/IDAgOiAxLFxuXHR9KTtcbn1cblxuZnVuY3Rpb24gc2V0RmluYWxWYWx1ZShlbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcblx0Y29uc3QgdGFyZ2V0ID0gTWF0aC5hYnMocGFyc2VGbG9hdChlbC5kYXRhc2V0Lm5leHRvcmFDb3VudGVyc1ZhbHVlID8/ICcnKSB8fCAwKTtcblx0Y29uc3Qgc3VmZml4ID0gZWwuZGF0YXNldC5uZXh0b3JhQ291bnRlcnNTdWZmaXggPz8gJyc7XG5cdGNvbnN0IHByZWZpeCA9IGVsLmRhdGFzZXQubmV4dG9yYUNvdW50ZXJzUHJlZml4ID8/ICcnO1xuXHRlbC50ZXh0Q29udGVudCA9IHByZWZpeCArIGZvcm1hdFZhbHVlKHRhcmdldCwgdGFyZ2V0KSArIHN1ZmZpeDtcbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50VmlzaWJsZShlbDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcblx0aWYgKCFlbC5pc0Nvbm5lY3RlZCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRpZiAoZWwub2Zmc2V0V2lkdGggPT09IDAgJiYgZWwub2Zmc2V0SGVpZ2h0ID09PSAwKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0Y29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cdGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuXHRyZXR1cm4gKFxuXHRcdHJlY3QuYm90dG9tID4gMCAmJlxuXHRcdHJlY3QucmlnaHQgPiAwICYmXG5cdFx0cmVjdC50b3AgPCB3aW5kb3dIZWlnaHQgJiZcblx0XHRyZWN0LmxlZnQgPCB3aW5kb3dXaWR0aFxuXHQpO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlQ291bnRlcihcblx0ZWw6IEhUTUxFbGVtZW50LFxuXHRkdXJhdGlvbjogbnVtYmVyLFxuXHRlYXNpbmc6IEVhc2luZ05hbWUsXG4pOiB2b2lkIHtcblx0Y29uc3QgdGFyZ2V0ID0gTWF0aC5hYnMocGFyc2VGbG9hdChlbC5kYXRhc2V0Lm5leHRvcmFDb3VudGVyc1ZhbHVlID8/ICcnKSB8fCAwKTtcblx0Y29uc3Qgc3VmZml4ID0gZWwuZGF0YXNldC5uZXh0b3JhQ291bnRlcnNTdWZmaXggPz8gJyc7XG5cdGNvbnN0IHByZWZpeCA9IGVsLmRhdGFzZXQubmV4dG9yYUNvdW50ZXJzUHJlZml4ID8/ICcnO1xuXHRjb25zdCBlYXNlRm4gPSBFQVNJTkdTW2Vhc2luZ10gPz8gRUFTSU5HUy5lYXNlT3V0Q3ViaWM7XG5cdGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cdGVsLnRleHRDb250ZW50ID0gcHJlZml4ICsgZm9ybWF0VmFsdWUoMCwgdGFyZ2V0KSArIHN1ZmZpeDtcblxuXHRjb25zdCB0aWNrID0gKG5vdzogbnVtYmVyKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbigobm93IC0gc3RhcnQpIC8gZHVyYXRpb24sIDEpO1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBlYXNlRm4ocHJvZ3Jlc3MpICogdGFyZ2V0O1xuXHRcdGVsLnRleHRDb250ZW50ID0gcHJlZml4ICsgZm9ybWF0VmFsdWUoY3VycmVudCwgdGFyZ2V0KSArIHN1ZmZpeDtcblx0XHRpZiAocHJvZ3Jlc3MgPCAxKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG5cdFx0fVxuXHR9O1xuXG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcbn1cblxuZnVuY3Rpb24gcnVuQ291bnRVcCh3cmFwcGVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRpZiAocHJlZmVyc1JlZHVjZWRNb3Rpb24oKSkge1xuXHRcdHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLWNvdW50ZXJzX19udW1iZXJbZGF0YS1uZXh0b3JhLWNvdW50ZXJzLXZhbHVlXScpLmZvckVhY2goc2V0RmluYWxWYWx1ZSk7XG5cdFx0d3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dG9yYS1jb3VudGVycy1jb3VudC1pbml0JywgJzEnKTtcblx0XHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ25leHRvcmEtY291bnRlcnMtLXJlYWR5Jyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZHVyYXRpb24gPSBwYXJzZUludCh3cmFwcGVyLmRhdGFzZXQubmV4dG9yYUNvdW50ZXJzRHVyYXRpb24gPz8gJzIwMDAnLCAxMCkgfHwgMjAwMDtcblx0Y29uc3QgZWFzaW5nUmF3ID0gd3JhcHBlci5kYXRhc2V0Lm5leHRvcmFDb3VudGVyc0Vhc2luZyA/PyAnZWFzZU91dEN1YmljJztcblx0Y29uc3QgZWFzaW5nOiBFYXNpbmdOYW1lID1cblx0XHRlYXNpbmdSYXcgaW4gRUFTSU5HUyA/IChlYXNpbmdSYXcgYXMgRWFzaW5nTmFtZSkgOiAnZWFzZU91dEN1YmljJztcblxuXHR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS1jb3VudGVyc19fbnVtYmVyW2RhdGEtbmV4dG9yYS1jb3VudGVycy12YWx1ZV0nKS5mb3JFYWNoKFxuXHRcdChlbCkgPT4ge1xuXHRcdFx0YW5pbWF0ZUNvdW50ZXIoZWwsIGR1cmF0aW9uLCBlYXNpbmcpO1xuXHRcdH0sXG5cdCk7XG5cblx0d3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dG9yYS1jb3VudGVycy1jb3VudC1pbml0JywgJzEnKTtcblx0d3JhcHBlci5jbGFzc0xpc3QuYWRkKCduZXh0b3JhLWNvdW50ZXJzLS1yZWFkeScpO1xufVxuXG5mdW5jdGlvbiBpbml0Um9vdCh3cmFwcGVyOiBIVE1MRWxlbWVudCwgZm9yY2UgPSBmYWxzZSk6IHZvaWQge1xuXHRpZiAoIWZvcmNlICYmIHdyYXBwZXIuZ2V0QXR0cmlidXRlKCdkYXRhLW5leHRvcmEtY291bnRlcnMtY291bnQtaW5pdCcpID09PSAnMScpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAocHJlZmVyc1JlZHVjZWRNb3Rpb24oKSkge1xuXHRcdHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLWNvdW50ZXJzX19udW1iZXJbZGF0YS1uZXh0b3JhLWNvdW50ZXJzLXZhbHVlXScpLmZvckVhY2goc2V0RmluYWxWYWx1ZSk7XG5cdFx0d3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dG9yYS1jb3VudGVycy1jb3VudC1pbml0JywgJzEnKTtcblx0XHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ25leHRvcmEtY291bnRlcnMtLXJlYWR5Jyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGlzRWxlbWVudFZpc2libGUod3JhcHBlcikpIHtcblx0XHRydW5Db3VudFVwKHdyYXBwZXIpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuXHRcdChlbnRyaWVzLCBvYnMpID0+IHtcblx0XHRcdGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcblx0XHRcdFx0aWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuXHRcdFx0XHRcdHJ1bkNvdW50VXAod3JhcHBlcik7XG5cdFx0XHRcdFx0b2JzLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdHsgdGhyZXNob2xkOiAwLjA1IH0sXG5cdCk7XG5cblx0b2JzZXJ2ZXIub2JzZXJ2ZSh3cmFwcGVyKTtcbn1cblxuZnVuY3Rpb24gcmVpbml0QWxsKHNjb3BlOiBQYXJlbnROb2RlID0gZG9jdW1lbnQpOiB2b2lkIHtcblx0c2NvcGUucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oUk9PVF9TRUxFQ1RPUikuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xuXHRcdGlmICh3cmFwcGVyLmNsb3Nlc3QoJy5uZXh0b3JhLXByaW1hcnktbmF2LXBvcnRhbCcpKSB7XG5cdFx0XHRpZiAoaXNFbGVtZW50VmlzaWJsZSh3cmFwcGVyKSkge1xuXHRcdFx0XHRydW5Db3VudFVwKHdyYXBwZXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d3JhcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbmV4dG9yYS1jb3VudGVycy1jb3VudC1pbml0Jyk7XG5cdFx0XHRcdGluaXRSb290KHdyYXBwZXIpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAod3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dG9yYS1jb3VudGVycy1jb3VudC1pbml0JykgIT09ICcxJykge1xuXHRcdFx0XHRpbml0Um9vdCh3cmFwcGVyKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBpbml0QWxsKCk6IHZvaWQge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50Pihcblx0XHQnLndwLWJsb2NrLW5leHRvcmEtY291bnRlcnNbZGF0YS1uZXh0b3JhLWNvdW50ZXJzLWNvdW50LXVwPVwiMVwiXTpub3QoW2RhdGEtbmV4dG9yYS1jb3VudGVycy1jb3VudC1pbml0PVwiMVwiXSknXG5cdCkuZm9yRWFjaCgoZWwpID0+IGluaXRSb290KGVsKSk7XG59XG5cbi8vIEdsb2JhbCBob29rc1xuaW50ZXJmYWNlIE5leHRvcmFDb3VudGVyc0dsb2JhbCB7XG5cdG5leHRvcmFSZWluaXRDb3VudGVycz86ICgpID0+IHZvaWQ7XG5cdG5leHRvcmFSdW5Db3VudGVyPzogKGVsOiBIVE1MRWxlbWVudCkgPT4gdm9pZDtcbn1cbih3aW5kb3cgYXMgdW5rbm93biBhcyBOZXh0b3JhQ291bnRlcnNHbG9iYWwpLm5leHRvcmFSZWluaXRDb3VudGVycyA9ICgpID0+IHJlaW5pdEFsbCgpO1xuKHdpbmRvdyBhcyB1bmtub3duIGFzIE5leHRvcmFDb3VudGVyc0dsb2JhbCkubmV4dG9yYVJ1bkNvdW50ZXIgPSBydW5Db3VudFVwO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbmV4dG9yYS1jb3VudGVycy1yZWluaXQnLCAoKSA9PiB7XG5cdHJlaW5pdEFsbCgpO1xufSk7XG5cbi8vIFN0YWdnZXJlZCBjaGVjayBvbiB1c2VyIGludGVyYWN0aW9uIChvcGVuaW5nIGFjY29yZGlvbnMsIHN3aXRjaGluZyB0YWJzLCBjbGlja2luZyBtZW51IHRvZ2dsZXMpXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHQnY2xpY2snLFxuXHQoZSkgPT4ge1xuXHRcdGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCA/IGUudGFyZ2V0IDogbnVsbDtcblx0XHRpZiAoIXRhcmdldCkgcmV0dXJuO1xuXHRcdGlmIChcblx0XHRcdHRhcmdldC5jbG9zZXN0KFxuXHRcdFx0XHQnLmJlcGx1cy12bW4tdG9nZ2xlLCAubmV4dG9yYS1zdWJtZW51LXRvZ2dsZSwgLmJlcGx1cy12bW4tdGFiLWNvbnRhaW5lcl9fdGFiLCBbZGF0YS1uZXh0b3JhLW5hdi10b2dnbGVdLCBbZGF0YS1uZXh0b3JhLWFjY29yZGlvbi10b2dnbGVdJ1xuXHRcdFx0KVxuXHRcdCkge1xuXHRcdFx0WzUwLCAxNTAsIDMwMCwgNTAwXS5mb3JFYWNoKChkZWxheSkgPT4ge1xuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0cmVpbml0QWxsKCk7XG5cdFx0XHRcdH0sIGRlbGF5KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblx0eyBwYXNzaXZlOiB0cnVlIH0sXG4pO1xuXG4vLyBDaGVjayBvbiBzY3JvbGwgKGUuZy4gaW5zaWRlIHNjcm9sbGFibGUgbW9iaWxlIGRyYXdlciBwYW5lbClcbmxldCBzY3JvbGxUaHJvdHRsZTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5jb25zdCBvblNjcm9sbENoZWNrID0gKCkgPT4ge1xuXHRpZiAoc2Nyb2xsVGhyb3R0bGUgIT09IG51bGwpIHJldHVybjtcblx0c2Nyb2xsVGhyb3R0bGUgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0c2Nyb2xsVGhyb3R0bGUgPSBudWxsO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFxuXHRcdFx0Jy53cC1ibG9jay1uZXh0b3JhLWNvdW50ZXJzW2RhdGEtbmV4dG9yYS1jb3VudGVycy1jb3VudC11cD1cIjFcIl06bm90KFtkYXRhLW5leHRvcmEtY291bnRlcnMtY291bnQtaW5pdD1cIjFcIl0pJ1xuXHRcdCkuZm9yRWFjaCgoZWwpID0+IHtcblx0XHRcdGlmIChpc0VsZW1lbnRWaXNpYmxlKGVsKSkge1xuXHRcdFx0XHRydW5Db3VudFVwKGVsKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSwgMTIwKTtcbn07XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGxDaGVjaywgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0QWxsKTtcbn0gZWxzZSB7XG5cdGluaXRBbGwoKTtcbn1cblxuIl0sCiAgIm1hcHBpbmdzIjogIjs7O0FBS0EsTUFBTSxnQkFDTDtBQUlELE1BQU0sVUFBcUQ7QUFBQSxJQUMxRCxRQUFRLENBQUMsTUFBTTtBQUFBLElBQ2YsY0FBYyxDQUFDLE1BQU0sS0FBSyxJQUFJLE1BQU07QUFBQSxJQUNwQyxhQUFhLENBQUMsTUFBTyxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sTUFBTTtBQUFBLEVBQ3BEO0FBRUEsV0FBUyx1QkFBZ0M7QUFDeEMsV0FDQyxPQUFPLFdBQVcsZUFDbEIsT0FBTyxhQUFhLGtDQUFrQyxFQUFFLFlBQVk7QUFBQSxFQUV0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
