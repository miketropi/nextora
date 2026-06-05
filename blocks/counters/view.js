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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidmlldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBDb3VudC11cCBhbmltYXRpb24gZm9yIGBuZXh0b3JhL2NvdW50ZXJzYCAoZnJvbnQgZW5kKS5cbiAqL1xuY29uc3QgUk9PVF9TRUxFQ1RPUiA9XG5cdCcud3AtYmxvY2stbmV4dG9yYS1jb3VudGVyc1tkYXRhLW5leHRvcmEtY291bnRlcnMtY291bnQtdXA9XCIxXCJdOm5vdChbZGF0YS1uZXh0b3JhLWNvdW50ZXJzLWNvdW50LWluaXQ9XCIxXCJdKSc7XG5cbnR5cGUgRWFzaW5nTmFtZSA9ICdsaW5lYXInIHwgJ2Vhc2VPdXRDdWJpYycgfCAnZWFzZU91dEV4cG8nO1xuXG5jb25zdCBFQVNJTkdTOiBSZWNvcmQ8RWFzaW5nTmFtZSwgKHQ6IG51bWJlcikgPT4gbnVtYmVyPiA9IHtcblx0bGluZWFyOiAodCkgPT4gdCxcblx0ZWFzZU91dEN1YmljOiAodCkgPT4gMSAtICgxIC0gdCkgKiogMyxcblx0ZWFzZU91dEV4cG86ICh0KSA9PiAodCA9PT0gMSA/IDEgOiAxIC0gMiAqKiAoLTEwICogdCkpLFxufTtcblxuZnVuY3Rpb24gcHJlZmVyc1JlZHVjZWRNb3Rpb24oKTogYm9vbGVhbiB7XG5cdHJldHVybiAoXG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHR3aW5kb3cubWF0Y2hNZWRpYT8uKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpLm1hdGNoZXMgPT09IHRydWVcblx0KTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUodmFsdWU6IG51bWJlciwgdGFyZ2V0OiBudW1iZXIpOiBzdHJpbmcge1xuXHRyZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0YXJnZXQpID8gU3RyaW5nKE1hdGgucm91bmQodmFsdWUpKSA6IHZhbHVlLnRvRml4ZWQoMSk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVDb3VudGVyKFxuXHRlbDogSFRNTEVsZW1lbnQsXG5cdGR1cmF0aW9uOiBudW1iZXIsXG5cdGVhc2luZzogRWFzaW5nTmFtZSxcbik6IHZvaWQge1xuXHRjb25zdCB0YXJnZXQgPSBwYXJzZUZsb2F0KGVsLmRhdGFzZXQubmV4dG9yYUNvdW50ZXJzVmFsdWUgPz8gJycpIHx8IDA7XG5cdGNvbnN0IHN1ZmZpeCA9IGVsLmRhdGFzZXQubmV4dG9yYUNvdW50ZXJzU3VmZml4ID8/ICcnO1xuXHRjb25zdCBwcmVmaXggPSBlbC5kYXRhc2V0Lm5leHRvcmFDb3VudGVyc1ByZWZpeCA/PyAnJztcblx0Y29uc3QgZWFzZUZuID0gRUFTSU5HU1tlYXNpbmddID8/IEVBU0lOR1MuZWFzZU91dEN1YmljO1xuXHRjb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG5cdGNvbnN0IHRpY2sgPSAobm93OiBudW1iZXIpOiB2b2lkID0+IHtcblx0XHRjb25zdCBwcm9ncmVzcyA9IE1hdGgubWluKChub3cgLSBzdGFydCkgLyBkdXJhdGlvbiwgMSk7XG5cdFx0Y29uc3QgY3VycmVudCA9IGVhc2VGbihwcm9ncmVzcykgKiB0YXJnZXQ7XG5cdFx0ZWwudGV4dENvbnRlbnQgPSBwcmVmaXggKyBmb3JtYXRWYWx1ZShjdXJyZW50LCB0YXJnZXQpICsgc3VmZml4O1xuXHRcdGlmIChwcm9ncmVzcyA8IDEpIHtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcblx0XHR9XG5cdH07XG5cblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xufVxuXG5mdW5jdGlvbiBydW5Db3VudFVwKHdyYXBwZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdGlmIChwcmVmZXJzUmVkdWNlZE1vdGlvbigpKSB7XG5cdFx0d3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dG9yYS1jb3VudGVycy1jb3VudC1pbml0JywgJzEnKTtcblx0XHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ25leHRvcmEtY291bnRlcnMtLXJlYWR5Jyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZHVyYXRpb24gPSBwYXJzZUludCh3cmFwcGVyLmRhdGFzZXQubmV4dG9yYUNvdW50ZXJzRHVyYXRpb24gPz8gJzIwMDAnLCAxMCkgfHwgMjAwMDtcblx0Y29uc3QgZWFzaW5nUmF3ID0gd3JhcHBlci5kYXRhc2V0Lm5leHRvcmFDb3VudGVyc0Vhc2luZyA/PyAnZWFzZU91dEN1YmljJztcblx0Y29uc3QgZWFzaW5nOiBFYXNpbmdOYW1lID1cblx0XHRlYXNpbmdSYXcgaW4gRUFTSU5HUyA/IChlYXNpbmdSYXcgYXMgRWFzaW5nTmFtZSkgOiAnZWFzZU91dEN1YmljJztcblxuXHR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS1jb3VudGVyc19fbnVtYmVyW2RhdGEtbmV4dG9yYS1jb3VudGVycy12YWx1ZV0nKS5mb3JFYWNoKFxuXHRcdChlbCkgPT4ge1xuXHRcdFx0YW5pbWF0ZUNvdW50ZXIoZWwsIGR1cmF0aW9uLCBlYXNpbmcpO1xuXHRcdH0sXG5cdCk7XG5cblx0d3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dG9yYS1jb3VudGVycy1jb3VudC1pbml0JywgJzEnKTtcblx0d3JhcHBlci5jbGFzc0xpc3QuYWRkKCduZXh0b3JhLWNvdW50ZXJzLS1yZWFkeScpO1xufVxuXG5mdW5jdGlvbiBpbml0Um9vdCh3cmFwcGVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRpZiAod3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dG9yYS1jb3VudGVycy1jb3VudC1pbml0JykgPT09ICcxJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChwcmVmZXJzUmVkdWNlZE1vdGlvbigpKSB7XG5cdFx0d3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dG9yYS1jb3VudGVycy1jb3VudC1pbml0JywgJzEnKTtcblx0XHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ25leHRvcmEtY291bnRlcnMtLXJlYWR5Jyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG5cdFx0KGVudHJpZXMsIG9icykgPT4ge1xuXHRcdFx0ZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuXHRcdFx0XHRpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJ1bkNvdW50VXAod3JhcHBlcik7XG5cdFx0XHRcdG9icy51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0eyB0aHJlc2hvbGQ6IDAuMyB9LFxuXHQpO1xuXG5cdG9ic2VydmVyLm9ic2VydmUod3JhcHBlcik7XG59XG5cbmZ1bmN0aW9uIGluaXRBbGwoKTogdm9pZCB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFJPT1RfU0VMRUNUT1IpLmZvckVhY2goaW5pdFJvb3QpO1xufVxuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0QWxsKTtcbn0gZWxzZSB7XG5cdGluaXRBbGwoKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7OztBQUdBLE1BQU0sZ0JBQ0w7QUFJRCxNQUFNLFVBQXFEO0FBQUEsSUFDMUQsUUFBUSxDQUFDLE1BQU07QUFBQSxJQUNmLGNBQWMsQ0FBQyxNQUFNLEtBQUssSUFBSSxNQUFNO0FBQUEsSUFDcEMsYUFBYSxDQUFDLE1BQU8sTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLE1BQU07QUFBQSxFQUNwRDtBQUVBLFdBQVMsdUJBQWdDO0FBQ3hDLFdBQ0MsT0FBTyxXQUFXLGVBQ2xCLE9BQU8sYUFBYSxrQ0FBa0MsRUFBRSxZQUFZO0FBQUEsRUFFdEU7QUFFQSxXQUFTLFlBQVksT0FBZSxRQUF3QjtBQUMzRCxXQUFPLE9BQU8sVUFBVSxNQUFNLElBQUksT0FBTyxLQUFLLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxRQUFRLENBQUM7QUFBQSxFQUM5RTtBQUVBLFdBQVMsZUFDUixJQUNBLFVBQ0EsUUFDTztBQUNQLFVBQU0sU0FBUyxXQUFXLEdBQUcsUUFBUSx3QkFBd0IsRUFBRSxLQUFLO0FBQ3BFLFVBQU0sU0FBUyxHQUFHLFFBQVEseUJBQXlCO0FBQ25ELFVBQU0sU0FBUyxHQUFHLFFBQVEseUJBQXlCO0FBQ25ELFVBQU0sU0FBUyxRQUFRLE1BQU0sS0FBSyxRQUFRO0FBQzFDLFVBQU0sUUFBUSxZQUFZLElBQUk7QUFFOUIsVUFBTSxPQUFPLENBQUMsUUFBc0I7QUFDbkMsWUFBTSxXQUFXLEtBQUssS0FBSyxNQUFNLFNBQVMsVUFBVSxDQUFDO0FBQ3JELFlBQU0sVUFBVSxPQUFPLFFBQVEsSUFBSTtBQUNuQyxTQUFHLGNBQWMsU0FBUyxZQUFZLFNBQVMsTUFBTSxJQUFJO0FBQ3pELFVBQUksV0FBVyxHQUFHO0FBQ2pCLDhCQUFzQixJQUFJO0FBQUEsTUFDM0I7QUFBQSxJQUNEO0FBRUEsMEJBQXNCLElBQUk7QUFBQSxFQUMzQjtBQUVBLFdBQVMsV0FBVyxTQUE0QjtBQUMvQyxRQUFJLHFCQUFxQixHQUFHO0FBQzNCLGNBQVEsYUFBYSxvQ0FBb0MsR0FBRztBQUM1RCxjQUFRLFVBQVUsSUFBSSx5QkFBeUI7QUFDL0M7QUFBQSxJQUNEO0FBRUEsVUFBTSxXQUFXLFNBQVMsUUFBUSxRQUFRLDJCQUEyQixRQUFRLEVBQUUsS0FBSztBQUNwRixVQUFNLFlBQVksUUFBUSxRQUFRLHlCQUF5QjtBQUMzRCxVQUFNLFNBQ0wsYUFBYSxVQUFXLFlBQTJCO0FBRXBELFlBQVEsaUJBQThCLHdEQUF3RCxFQUFFO0FBQUEsTUFDL0YsQ0FBQyxPQUFPO0FBQ1AsdUJBQWUsSUFBSSxVQUFVLE1BQU07QUFBQSxNQUNwQztBQUFBLElBQ0Q7QUFFQSxZQUFRLGFBQWEsb0NBQW9DLEdBQUc7QUFDNUQsWUFBUSxVQUFVLElBQUkseUJBQXlCO0FBQUEsRUFDaEQ7QUFFQSxXQUFTLFNBQVMsU0FBNEI7QUFDN0MsUUFBSSxRQUFRLGFBQWEsa0NBQWtDLE1BQU0sS0FBSztBQUNyRTtBQUFBLElBQ0Q7QUFFQSxRQUFJLHFCQUFxQixHQUFHO0FBQzNCLGNBQVEsYUFBYSxvQ0FBb0MsR0FBRztBQUM1RCxjQUFRLFVBQVUsSUFBSSx5QkFBeUI7QUFDL0M7QUFBQSxJQUNEO0FBRUEsVUFBTSxXQUFXLElBQUk7QUFBQSxNQUNwQixDQUFDLFNBQVMsUUFBUTtBQUNqQixnQkFBUSxRQUFRLENBQUMsVUFBVTtBQUMxQixjQUFJLENBQUMsTUFBTSxnQkFBZ0I7QUFDMUI7QUFBQSxVQUNEO0FBQ0EscUJBQVcsT0FBTztBQUNsQixjQUFJLFVBQVUsTUFBTSxNQUFNO0FBQUEsUUFDM0IsQ0FBQztBQUFBLE1BQ0Y7QUFBQSxNQUNBLEVBQUUsV0FBVyxJQUFJO0FBQUEsSUFDbEI7QUFFQSxhQUFTLFFBQVEsT0FBTztBQUFBLEVBQ3pCO0FBRUEsV0FBUyxVQUFnQjtBQUN4QixhQUFTLGlCQUE4QixhQUFhLEVBQUUsUUFBUSxRQUFRO0FBQUEsRUFDdkU7QUFFQSxNQUFJLFNBQVMsZUFBZSxXQUFXO0FBQ3RDLGFBQVMsaUJBQWlCLG9CQUFvQixPQUFPO0FBQUEsRUFDdEQsT0FBTztBQUNOLFlBQVE7QUFBQSxFQUNUOyIsCiAgIm5hbWVzIjogW10KfQo=
