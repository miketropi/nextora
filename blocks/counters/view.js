"use strict";
(() => {
  // blocks/counters/view.ts
  var ROOT_SELECTOR = '.wp-block-nextora-counters[data-nextora-counters-count-up="1"]:not([data-nextora-counters-count-init="1"])';
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
  function initRoot(wrapper) {
    if (wrapper.getAttribute("data-nextora-counters-count-init") === "1") {
      return;
    }
    if (prefersReducedMotion()) {
      wrapper.querySelectorAll(".nextora-counters__number[data-nextora-counters-value]").forEach(setFinalValue);
      wrapper.setAttribute("data-nextora-counters-count-init", "1");
      wrapper.classList.add("nextora-counters--ready");
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          runCountUp(wrapper);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(wrapper);
  }
  function initAll() {
    document.querySelectorAll(ROOT_SELECTOR).forEach(initRoot);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidmlldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IHt9O1xuXG4vKipcbiAqIENvdW50LXVwIGFuaW1hdGlvbiBmb3IgYG5leHRvcmEvY291bnRlcnNgIChmcm9udCBlbmQpLlxuICovXG5jb25zdCBST09UX1NFTEVDVE9SID1cblx0Jy53cC1ibG9jay1uZXh0b3JhLWNvdW50ZXJzW2RhdGEtbmV4dG9yYS1jb3VudGVycy1jb3VudC11cD1cIjFcIl06bm90KFtkYXRhLW5leHRvcmEtY291bnRlcnMtY291bnQtaW5pdD1cIjFcIl0pJztcblxudHlwZSBFYXNpbmdOYW1lID0gJ2xpbmVhcicgfCAnZWFzZU91dEN1YmljJyB8ICdlYXNlT3V0RXhwbyc7XG5cbmNvbnN0IEVBU0lOR1M6IFJlY29yZDxFYXNpbmdOYW1lLCAodDogbnVtYmVyKSA9PiBudW1iZXI+ID0ge1xuXHRsaW5lYXI6ICh0KSA9PiB0LFxuXHRlYXNlT3V0Q3ViaWM6ICh0KSA9PiAxIC0gKDEgLSB0KSAqKiAzLFxuXHRlYXNlT3V0RXhwbzogKHQpID0+ICh0ID09PSAxID8gMSA6IDEgLSAyICoqICgtMTAgKiB0KSksXG59O1xuXG5mdW5jdGlvbiBwcmVmZXJzUmVkdWNlZE1vdGlvbigpOiBib29sZWFuIHtcblx0cmV0dXJuIChcblx0XHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdHdpbmRvdy5tYXRjaE1lZGlhPy4oJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJykubWF0Y2hlcyA9PT0gdHJ1ZVxuXHQpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZSh2YWx1ZTogbnVtYmVyLCB0YXJnZXQ6IG51bWJlcik6IHN0cmluZyB7XG5cdGNvbnN0IHJvdW5kZWQgPSBOdW1iZXIuaXNJbnRlZ2VyKHRhcmdldCkgPyBNYXRoLnJvdW5kKHZhbHVlKSA6IHZhbHVlO1xuXHRyZXR1cm4gcm91bmRlZC50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG5cdFx0bWF4aW11bUZyYWN0aW9uRGlnaXRzOiBOdW1iZXIuaXNJbnRlZ2VyKHRhcmdldCkgPyAwIDogMSxcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHNldEZpbmFsVmFsdWUoZWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdGNvbnN0IHRhcmdldCA9IE1hdGguYWJzKHBhcnNlRmxvYXQoZWwuZGF0YXNldC5uZXh0b3JhQ291bnRlcnNWYWx1ZSA/PyAnJykgfHwgMCk7XG5cdGNvbnN0IHN1ZmZpeCA9IGVsLmRhdGFzZXQubmV4dG9yYUNvdW50ZXJzU3VmZml4ID8/ICcnO1xuXHRjb25zdCBwcmVmaXggPSBlbC5kYXRhc2V0Lm5leHRvcmFDb3VudGVyc1ByZWZpeCA/PyAnJztcblx0ZWwudGV4dENvbnRlbnQgPSBwcmVmaXggKyBmb3JtYXRWYWx1ZSh0YXJnZXQsIHRhcmdldCkgKyBzdWZmaXg7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVDb3VudGVyKFxuXHRlbDogSFRNTEVsZW1lbnQsXG5cdGR1cmF0aW9uOiBudW1iZXIsXG5cdGVhc2luZzogRWFzaW5nTmFtZSxcbik6IHZvaWQge1xuXHRjb25zdCB0YXJnZXQgPSBNYXRoLmFicyhwYXJzZUZsb2F0KGVsLmRhdGFzZXQubmV4dG9yYUNvdW50ZXJzVmFsdWUgPz8gJycpIHx8IDApO1xuXHRjb25zdCBzdWZmaXggPSBlbC5kYXRhc2V0Lm5leHRvcmFDb3VudGVyc1N1ZmZpeCA/PyAnJztcblx0Y29uc3QgcHJlZml4ID0gZWwuZGF0YXNldC5uZXh0b3JhQ291bnRlcnNQcmVmaXggPz8gJyc7XG5cdGNvbnN0IGVhc2VGbiA9IEVBU0lOR1NbZWFzaW5nXSA/PyBFQVNJTkdTLmVhc2VPdXRDdWJpYztcblx0Y29uc3Qgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcblx0ZWwudGV4dENvbnRlbnQgPSBwcmVmaXggKyBmb3JtYXRWYWx1ZSgwLCB0YXJnZXQpICsgc3VmZml4O1xuXG5cdGNvbnN0IHRpY2sgPSAobm93OiBudW1iZXIpOiB2b2lkID0+IHtcblx0XHRjb25zdCBwcm9ncmVzcyA9IE1hdGgubWluKChub3cgLSBzdGFydCkgLyBkdXJhdGlvbiwgMSk7XG5cdFx0Y29uc3QgY3VycmVudCA9IGVhc2VGbihwcm9ncmVzcykgKiB0YXJnZXQ7XG5cdFx0ZWwudGV4dENvbnRlbnQgPSBwcmVmaXggKyBmb3JtYXRWYWx1ZShjdXJyZW50LCB0YXJnZXQpICsgc3VmZml4O1xuXHRcdGlmIChwcm9ncmVzcyA8IDEpIHtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcblx0XHR9XG5cdH07XG5cblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xufVxuXG5mdW5jdGlvbiBydW5Db3VudFVwKHdyYXBwZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdGlmIChwcmVmZXJzUmVkdWNlZE1vdGlvbigpKSB7XG5cdFx0d3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLm5leHRvcmEtY291bnRlcnNfX251bWJlcltkYXRhLW5leHRvcmEtY291bnRlcnMtdmFsdWVdJykuZm9yRWFjaChzZXRGaW5hbFZhbHVlKTtcblx0XHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1uZXh0b3JhLWNvdW50ZXJzLWNvdW50LWluaXQnLCAnMScpO1xuXHRcdHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbmV4dG9yYS1jb3VudGVycy0tcmVhZHknKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBkdXJhdGlvbiA9IHBhcnNlSW50KHdyYXBwZXIuZGF0YXNldC5uZXh0b3JhQ291bnRlcnNEdXJhdGlvbiA/PyAnMjAwMCcsIDEwKSB8fCAyMDAwO1xuXHRjb25zdCBlYXNpbmdSYXcgPSB3cmFwcGVyLmRhdGFzZXQubmV4dG9yYUNvdW50ZXJzRWFzaW5nID8/ICdlYXNlT3V0Q3ViaWMnO1xuXHRjb25zdCBlYXNpbmc6IEVhc2luZ05hbWUgPVxuXHRcdGVhc2luZ1JhdyBpbiBFQVNJTkdTID8gKGVhc2luZ1JhdyBhcyBFYXNpbmdOYW1lKSA6ICdlYXNlT3V0Q3ViaWMnO1xuXG5cdHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLWNvdW50ZXJzX19udW1iZXJbZGF0YS1uZXh0b3JhLWNvdW50ZXJzLXZhbHVlXScpLmZvckVhY2goXG5cdFx0KGVsKSA9PiB7XG5cdFx0XHRhbmltYXRlQ291bnRlcihlbCwgZHVyYXRpb24sIGVhc2luZyk7XG5cdFx0fSxcblx0KTtcblxuXHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1uZXh0b3JhLWNvdW50ZXJzLWNvdW50LWluaXQnLCAnMScpO1xuXHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ25leHRvcmEtY291bnRlcnMtLXJlYWR5Jyk7XG59XG5cbmZ1bmN0aW9uIGluaXRSb290KHdyYXBwZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdGlmICh3cmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1uZXh0b3JhLWNvdW50ZXJzLWNvdW50LWluaXQnKSA9PT0gJzEnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHByZWZlcnNSZWR1Y2VkTW90aW9uKCkpIHtcblx0XHR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS1jb3VudGVyc19fbnVtYmVyW2RhdGEtbmV4dG9yYS1jb3VudGVycy12YWx1ZV0nKS5mb3JFYWNoKHNldEZpbmFsVmFsdWUpO1xuXHRcdHdyYXBwZXIuc2V0QXR0cmlidXRlKCdkYXRhLW5leHRvcmEtY291bnRlcnMtY291bnQtaW5pdCcsICcxJyk7XG5cdFx0d3JhcHBlci5jbGFzc0xpc3QuYWRkKCduZXh0b3JhLWNvdW50ZXJzLS1yZWFkeScpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuXHRcdChlbnRyaWVzLCBvYnMpID0+IHtcblx0XHRcdGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcblx0XHRcdFx0aWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRydW5Db3VudFVwKHdyYXBwZXIpO1xuXHRcdFx0XHRvYnMudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdHsgdGhyZXNob2xkOiAwLjMgfSxcblx0KTtcblxuXHRvYnNlcnZlci5vYnNlcnZlKHdyYXBwZXIpO1xufVxuXG5mdW5jdGlvbiBpbml0QWxsKCk6IHZvaWQge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihST09UX1NFTEVDVE9SKS5mb3JFYWNoKGluaXRSb290KTtcbn1cblxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdEFsbCk7XG59IGVsc2Uge1xuXHRpbml0QWxsKCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7QUFLQSxNQUFNLGdCQUNMO0FBSUQsTUFBTSxVQUFxRDtBQUFBLElBQzFELFFBQVEsQ0FBQyxNQUFNO0FBQUEsSUFDZixjQUFjLENBQUMsTUFBTSxLQUFLLElBQUksTUFBTTtBQUFBLElBQ3BDLGFBQWEsQ0FBQyxNQUFPLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxNQUFNO0FBQUEsRUFDcEQ7QUFFQSxXQUFTLHVCQUFnQztBQUN4QyxXQUNDLE9BQU8sV0FBVyxlQUNsQixPQUFPLGFBQWEsa0NBQWtDLEVBQUUsWUFBWTtBQUFBLEVBRXRFO0FBRUEsV0FBUyxZQUFZLE9BQWUsUUFBd0I7QUFDM0QsVUFBTSxVQUFVLE9BQU8sVUFBVSxNQUFNLElBQUksS0FBSyxNQUFNLEtBQUssSUFBSTtBQUMvRCxXQUFPLFFBQVEsZUFBZSxTQUFTO0FBQUEsTUFDdEMsdUJBQXVCLE9BQU8sVUFBVSxNQUFNLElBQUksSUFBSTtBQUFBLElBQ3ZELENBQUM7QUFBQSxFQUNGO0FBRUEsV0FBUyxj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
