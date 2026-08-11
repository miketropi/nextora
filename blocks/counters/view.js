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
    return Number.isInteger(target) ? String(Math.round(value)) : value.toFixed(1);
  }
  function animateCounter(el, duration, easing) {
    const target = parseFloat(el.dataset.nextoraCountersValue ?? "") || 0;
    const suffix = el.dataset.nextoraCountersSuffix ?? "";
    const prefix = el.dataset.nextoraCountersPrefix ?? "";
    const easeFn = EASINGS[easing] ?? EASINGS.easeOutCubic;
    const start = performance.now();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidmlldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IHt9O1xuXG4vKipcbiAqIENvdW50LXVwIGFuaW1hdGlvbiBmb3IgYG5leHRvcmEvY291bnRlcnNgIChmcm9udCBlbmQpLlxuICovXG5jb25zdCBST09UX1NFTEVDVE9SID1cblx0Jy53cC1ibG9jay1uZXh0b3JhLWNvdW50ZXJzW2RhdGEtbmV4dG9yYS1jb3VudGVycy1jb3VudC11cD1cIjFcIl06bm90KFtkYXRhLW5leHRvcmEtY291bnRlcnMtY291bnQtaW5pdD1cIjFcIl0pJztcblxudHlwZSBFYXNpbmdOYW1lID0gJ2xpbmVhcicgfCAnZWFzZU91dEN1YmljJyB8ICdlYXNlT3V0RXhwbyc7XG5cbmNvbnN0IEVBU0lOR1M6IFJlY29yZDxFYXNpbmdOYW1lLCAodDogbnVtYmVyKSA9PiBudW1iZXI+ID0ge1xuXHRsaW5lYXI6ICh0KSA9PiB0LFxuXHRlYXNlT3V0Q3ViaWM6ICh0KSA9PiAxIC0gKDEgLSB0KSAqKiAzLFxuXHRlYXNlT3V0RXhwbzogKHQpID0+ICh0ID09PSAxID8gMSA6IDEgLSAyICoqICgtMTAgKiB0KSksXG59O1xuXG5mdW5jdGlvbiBwcmVmZXJzUmVkdWNlZE1vdGlvbigpOiBib29sZWFuIHtcblx0cmV0dXJuIChcblx0XHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdHdpbmRvdy5tYXRjaE1lZGlhPy4oJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJykubWF0Y2hlcyA9PT0gdHJ1ZVxuXHQpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZSh2YWx1ZTogbnVtYmVyLCB0YXJnZXQ6IG51bWJlcik6IHN0cmluZyB7XG5cdHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHRhcmdldCkgPyBTdHJpbmcoTWF0aC5yb3VuZCh2YWx1ZSkpIDogdmFsdWUudG9GaXhlZCgxKTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZUNvdW50ZXIoXG5cdGVsOiBIVE1MRWxlbWVudCxcblx0ZHVyYXRpb246IG51bWJlcixcblx0ZWFzaW5nOiBFYXNpbmdOYW1lLFxuKTogdm9pZCB7XG5cdGNvbnN0IHRhcmdldCA9IHBhcnNlRmxvYXQoZWwuZGF0YXNldC5uZXh0b3JhQ291bnRlcnNWYWx1ZSA/PyAnJykgfHwgMDtcblx0Y29uc3Qgc3VmZml4ID0gZWwuZGF0YXNldC5uZXh0b3JhQ291bnRlcnNTdWZmaXggPz8gJyc7XG5cdGNvbnN0IHByZWZpeCA9IGVsLmRhdGFzZXQubmV4dG9yYUNvdW50ZXJzUHJlZml4ID8/ICcnO1xuXHRjb25zdCBlYXNlRm4gPSBFQVNJTkdTW2Vhc2luZ10gPz8gRUFTSU5HUy5lYXNlT3V0Q3ViaWM7XG5cdGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cblx0Y29uc3QgdGljayA9IChub3c6IG51bWJlcik6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4oKG5vdyAtIHN0YXJ0KSAvIGR1cmF0aW9uLCAxKTtcblx0XHRjb25zdCBjdXJyZW50ID0gZWFzZUZuKHByb2dyZXNzKSAqIHRhcmdldDtcblx0XHRlbC50ZXh0Q29udGVudCA9IHByZWZpeCArIGZvcm1hdFZhbHVlKGN1cnJlbnQsIHRhcmdldCkgKyBzdWZmaXg7XG5cdFx0aWYgKHByb2dyZXNzIDwgMSkge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuXHRcdH1cblx0fTtcblxuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG59XG5cbmZ1bmN0aW9uIHJ1bkNvdW50VXAod3JhcHBlcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcblx0aWYgKHByZWZlcnNSZWR1Y2VkTW90aW9uKCkpIHtcblx0XHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1uZXh0b3JhLWNvdW50ZXJzLWNvdW50LWluaXQnLCAnMScpO1xuXHRcdHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbmV4dG9yYS1jb3VudGVycy0tcmVhZHknKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBkdXJhdGlvbiA9IHBhcnNlSW50KHdyYXBwZXIuZGF0YXNldC5uZXh0b3JhQ291bnRlcnNEdXJhdGlvbiA/PyAnMjAwMCcsIDEwKSB8fCAyMDAwO1xuXHRjb25zdCBlYXNpbmdSYXcgPSB3cmFwcGVyLmRhdGFzZXQubmV4dG9yYUNvdW50ZXJzRWFzaW5nID8/ICdlYXNlT3V0Q3ViaWMnO1xuXHRjb25zdCBlYXNpbmc6IEVhc2luZ05hbWUgPVxuXHRcdGVhc2luZ1JhdyBpbiBFQVNJTkdTID8gKGVhc2luZ1JhdyBhcyBFYXNpbmdOYW1lKSA6ICdlYXNlT3V0Q3ViaWMnO1xuXG5cdHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLWNvdW50ZXJzX19udW1iZXJbZGF0YS1uZXh0b3JhLWNvdW50ZXJzLXZhbHVlXScpLmZvckVhY2goXG5cdFx0KGVsKSA9PiB7XG5cdFx0XHRhbmltYXRlQ291bnRlcihlbCwgZHVyYXRpb24sIGVhc2luZyk7XG5cdFx0fSxcblx0KTtcblxuXHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1uZXh0b3JhLWNvdW50ZXJzLWNvdW50LWluaXQnLCAnMScpO1xuXHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ25leHRvcmEtY291bnRlcnMtLXJlYWR5Jyk7XG59XG5cbmZ1bmN0aW9uIGluaXRSb290KHdyYXBwZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdGlmICh3cmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1uZXh0b3JhLWNvdW50ZXJzLWNvdW50LWluaXQnKSA9PT0gJzEnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHByZWZlcnNSZWR1Y2VkTW90aW9uKCkpIHtcblx0XHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1uZXh0b3JhLWNvdW50ZXJzLWNvdW50LWluaXQnLCAnMScpO1xuXHRcdHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbmV4dG9yYS1jb3VudGVycy0tcmVhZHknKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcblx0XHQoZW50cmllcywgb2JzKSA9PiB7XG5cdFx0XHRlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG5cdFx0XHRcdGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cnVuQ291bnRVcCh3cmFwcGVyKTtcblx0XHRcdFx0b2JzLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHR7IHRocmVzaG9sZDogMC4zIH0sXG5cdCk7XG5cblx0b2JzZXJ2ZXIub2JzZXJ2ZSh3cmFwcGVyKTtcbn1cblxuZnVuY3Rpb24gaW5pdEFsbCgpOiB2b2lkIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oUk9PVF9TRUxFQ1RPUikuZm9yRWFjaChpbml0Um9vdCk7XG59XG5cbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRBbGwpO1xufSBlbHNlIHtcblx0aW5pdEFsbCgpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7O0FBS0EsTUFBTSxnQkFDTDtBQUlELE1BQU0sVUFBcUQ7QUFBQSxJQUMxRCxRQUFRLENBQUMsTUFBTTtBQUFBLElBQ2YsY0FBYyxDQUFDLE1BQU0sS0FBSyxJQUFJLE1BQU07QUFBQSxJQUNwQyxhQUFhLENBQUMsTUFBTyxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sTUFBTTtBQUFBLEVBQ3BEO0FBRUEsV0FBUyx1QkFBZ0M7QUFDeEMsV0FDQyxPQUFPLFdBQVcsZUFDbEIsT0FBTyxhQUFhLGtDQUFrQyxFQUFFLFlBQVk7QUFBQSxFQUV0RTtBQUVBLFdBQVMsWUFBWSxPQUFlLFFBQXdCO0FBQzNELFdB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
