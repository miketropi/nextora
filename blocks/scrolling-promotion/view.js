"use strict";
(() => {
  // blocks/scrolling-promotion/marquee-loop.ts
  var PRIMARY_HALF_SELECTOR = '[data-nextora-marquee-half="primary"]';
  var DUPLICATE_HALF_SELECTOR = '[data-nextora-marquee-half="duplicate"]';
  var TRACK_SELECTOR = ".nextora-scrolling-promotion__track";
  var LOOP_WIDTH_PROPERTY = "--nextora-marquee-loop-width";
  function prefersReducedMotion() {
    return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;
  }
  function whenImagesReady(root) {
    const imgs = [...root.querySelectorAll("img")];
    if (imgs.length === 0) {
      return Promise.resolve();
    }
    return Promise.all(
      imgs.map(
        (img) => new Promise((resolve) => {
          if (img.complete) {
            resolve();
            return;
          }
          const done = () => {
            img.removeEventListener("load", done);
            img.removeEventListener("error", done);
            resolve();
          };
          img.addEventListener("load", done);
          img.addEventListener("error", done);
        })
      )
    ).then(() => void 0);
  }
  function fillHalf(half, minWidth) {
    let template = half.dataset.nextoraMarqueeTemplate ?? "";
    if ("" === template) {
      template = half.innerHTML.trim();
      if ("" === template) {
        return;
      }
      half.dataset.nextoraMarqueeTemplate = template;
    } else {
      half.innerHTML = template;
    }
    let safety = 0;
    while (half.scrollWidth < minWidth && safety < 64) {
      half.insertAdjacentHTML("beforeend", template);
      safety += 1;
    }
  }
  function syncDuplicateHalf(primary, duplicate) {
    duplicate.innerHTML = primary.innerHTML;
    duplicate.setAttribute("aria-hidden", "true");
  }
  function syncLoopWidth(inner, primary) {
    const loopWidth = primary.getBoundingClientRect().width;
    if (loopWidth > 0) {
      inner.style.setProperty(LOOP_WIDTH_PROPERTY, `${loopWidth}px`);
    }
  }
  function fillScrollingPromotionMarquee(root) {
    const track = root.querySelector(TRACK_SELECTOR);
    const primary = root.querySelector(PRIMARY_HALF_SELECTOR);
    const duplicate = root.querySelector(DUPLICATE_HALF_SELECTOR);
    const inner = track?.querySelector(".nextora-scrolling-promotion__inner");
    if (!track || !primary || !duplicate || !inner) {
      return;
    }
    if (prefersReducedMotion()) {
      return;
    }
    const minWidth = Math.max(track.clientWidth, 1);
    fillHalf(primary, minWidth);
    syncDuplicateHalf(primary, duplicate);
    syncLoopWidth(inner, primary);
  }
  async function initScrollingPromotionMarquee(root) {
    if (root.dataset.nextoraMarqueeReady === "1") {
      return;
    }
    await whenImagesReady(root);
    if (typeof document !== "undefined" && document.fonts?.ready) {
      await document.fonts.ready;
    }
    fillScrollingPromotionMarquee(root);
    root.dataset.nextoraMarqueeReady = "1";
    root.classList.add("nextora-scrolling-promotion--ready");
  }

  // blocks/scrolling-promotion/view.ts
  var ROOT_SELECTOR = ".nextora-scrolling-promotion:not([data-nextora-marquee-ready])";
  function observeResize(root) {
    const track = root.querySelector(".nextora-scrolling-promotion__track");
    if (!track || typeof ResizeObserver === "undefined") {
      return;
    }
    let frame = 0;
    const observer = new ResizeObserver(() => {
      if (prefersReducedMotion()) {
        return;
      }
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        delete root.dataset.nextoraMarqueeReady;
        root.classList.remove("nextora-scrolling-promotion--ready");
        void initScrollingPromotionMarquee(root);
      });
    });
    observer.observe(track);
  }
  function initIn(container = document) {
    container.querySelectorAll(ROOT_SELECTOR).forEach((root) => {
      void initScrollingPromotionMarquee(root).then(() => {
        observeResize(root);
      });
    });
  }
  function initAll() {
    initIn(document);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll, { once: true });
  } else {
    initAll();
  }
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFycXVlZS1sb29wLnRzIiwgInZpZXcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogRmlsbCBtYXJxdWVlIGhhbHZlcyBzbyBlYWNoIHNpZGUgaXMgYXQgbGVhc3QgYXMgd2lkZSBhcyB0aGUgdHJhY2sgKG5vIGdhcHMgd2hlbiBmZXcgaXRlbXMpLlxuICovXG5cbmNvbnN0IFBSSU1BUllfSEFMRl9TRUxFQ1RPUiA9ICdbZGF0YS1uZXh0b3JhLW1hcnF1ZWUtaGFsZj1cInByaW1hcnlcIl0nO1xuY29uc3QgRFVQTElDQVRFX0hBTEZfU0VMRUNUT1IgPSAnW2RhdGEtbmV4dG9yYS1tYXJxdWVlLWhhbGY9XCJkdXBsaWNhdGVcIl0nO1xuY29uc3QgVFJBQ0tfU0VMRUNUT1IgPSAnLm5leHRvcmEtc2Nyb2xsaW5nLXByb21vdGlvbl9fdHJhY2snO1xuY29uc3QgTE9PUF9XSURUSF9QUk9QRVJUWSA9ICctLW5leHRvcmEtbWFycXVlZS1sb29wLXdpZHRoJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZlcnNSZWR1Y2VkTW90aW9uKCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gKFxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0d2luZG93Lm1hdGNoTWVkaWE/LignKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKS5tYXRjaGVzID09PSB0cnVlXG5cdCk7XG59XG5cbmZ1bmN0aW9uIHdoZW5JbWFnZXNSZWFkeShyb290OiBIVE1MRWxlbWVudCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBpbWdzID0gWy4uLnJvb3QucXVlcnlTZWxlY3RvckFsbDxIVE1MSW1hZ2VFbGVtZW50PignaW1nJyldO1xuXHRpZiAoaW1ncy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdH1cblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0aW1ncy5tYXAoXG5cdFx0XHQoaW1nKSA9PlxuXHRcdFx0XHRuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XHRcdGlmIChpbWcuY29tcGxldGUpIHtcblx0XHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgZG9uZSA9ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgZG9uZSk7XG5cdFx0XHRcdFx0XHRpbWcucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBkb25lKTtcblx0XHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZG9uZSk7XG5cdFx0XHRcdFx0aW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZG9uZSk7XG5cdFx0XHRcdH0pLFxuXHRcdCksXG5cdCkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xufVxuXG5mdW5jdGlvbiBmaWxsSGFsZihoYWxmOiBIVE1MRWxlbWVudCwgbWluV2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRsZXQgdGVtcGxhdGUgPSBoYWxmLmRhdGFzZXQubmV4dG9yYU1hcnF1ZWVUZW1wbGF0ZSA/PyAnJztcblx0aWYgKCcnID09PSB0ZW1wbGF0ZSkge1xuXHRcdHRlbXBsYXRlID0gaGFsZi5pbm5lckhUTUwudHJpbSgpO1xuXHRcdGlmICgnJyA9PT0gdGVtcGxhdGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aGFsZi5kYXRhc2V0Lm5leHRvcmFNYXJxdWVlVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblx0fSBlbHNlIHtcblx0XHRoYWxmLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuXHR9XG5cblx0bGV0IHNhZmV0eSA9IDA7XG5cdHdoaWxlIChoYWxmLnNjcm9sbFdpZHRoIDwgbWluV2lkdGggJiYgc2FmZXR5IDwgNjQpIHtcblx0XHRoYWxmLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpO1xuXHRcdHNhZmV0eSArPSAxO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHN5bmNEdXBsaWNhdGVIYWxmKHByaW1hcnk6IEhUTUxFbGVtZW50LCBkdXBsaWNhdGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdGR1cGxpY2F0ZS5pbm5lckhUTUwgPSBwcmltYXJ5LmlubmVySFRNTDtcblx0ZHVwbGljYXRlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xufVxuXG5mdW5jdGlvbiBzeW5jTG9vcFdpZHRoKGlubmVyOiBIVE1MRWxlbWVudCwgcHJpbWFyeTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcblx0Y29uc3QgbG9vcFdpZHRoID0gcHJpbWFyeS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcblxuXHRpZiAobG9vcFdpZHRoID4gMCkge1xuXHRcdGlubmVyLnN0eWxlLnNldFByb3BlcnR5KExPT1BfV0lEVEhfUFJPUEVSVFksIGAke2xvb3BXaWR0aH1weGApO1xuXHR9XG59XG5cbi8qKlxuICogRXhwYW5kIG1hcnF1ZWUgaGFsdmVzIHRvIGZpbGwgdGhlIHRyYWNrLCB0aGVuIHN5bmMgdGhlIGR1cGxpY2F0ZSBoYWxmIGZvciBzZWFtbGVzcyBDU1MgbG9vcC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbGxTY3JvbGxpbmdQcm9tb3Rpb25NYXJxdWVlKHJvb3Q6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdGNvbnN0IHRyYWNrID0gcm9vdC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihUUkFDS19TRUxFQ1RPUik7XG5cdGNvbnN0IHByaW1hcnkgPSByb290LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFBSSU1BUllfSEFMRl9TRUxFQ1RPUik7XG5cdGNvbnN0IGR1cGxpY2F0ZSA9IHJvb3QucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oRFVQTElDQVRFX0hBTEZfU0VMRUNUT1IpO1xuXHRjb25zdCBpbm5lciA9IHRyYWNrPy5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLm5leHRvcmEtc2Nyb2xsaW5nLXByb21vdGlvbl9faW5uZXInKTtcblxuXHRpZiAoIXRyYWNrIHx8ICFwcmltYXJ5IHx8ICFkdXBsaWNhdGUgfHwgIWlubmVyKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHByZWZlcnNSZWR1Y2VkTW90aW9uKCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBtaW5XaWR0aCA9IE1hdGgubWF4KHRyYWNrLmNsaWVudFdpZHRoLCAxKTtcblx0ZmlsbEhhbGYocHJpbWFyeSwgbWluV2lkdGgpO1xuXHRzeW5jRHVwbGljYXRlSGFsZihwcmltYXJ5LCBkdXBsaWNhdGUpO1xuXHRzeW5jTG9vcFdpZHRoKGlubmVyLCBwcmltYXJ5KTtcbn1cblxuLyoqXG4gKiBJZGVtcG90ZW50IGluaXQgZm9yIG9uZSBtYXJxdWVlIHJvb3QgKGZyb250IGVuZCBvciBlZGl0b3IgYW5pbWF0aW9uIHByZXZpZXcpLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdFNjcm9sbGluZ1Byb21vdGlvbk1hcnF1ZWUocm9vdDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKHJvb3QuZGF0YXNldC5uZXh0b3JhTWFycXVlZVJlYWR5ID09PSAnMScpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhd2FpdCB3aGVuSW1hZ2VzUmVhZHkocm9vdCk7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmZvbnRzPy5yZWFkeSkge1xuXHRcdGF3YWl0IGRvY3VtZW50LmZvbnRzLnJlYWR5O1xuXHR9XG5cdGZpbGxTY3JvbGxpbmdQcm9tb3Rpb25NYXJxdWVlKHJvb3QpO1xuXHRyb290LmRhdGFzZXQubmV4dG9yYU1hcnF1ZWVSZWFkeSA9ICcxJztcblx0cm9vdC5jbGFzc0xpc3QuYWRkKCduZXh0b3JhLXNjcm9sbGluZy1wcm9tb3Rpb24tLXJlYWR5Jyk7XG59XG4iLCAiLyoqXG4gKiBTY3JvbGxpbmcgcHJvbW90aW9uIFx1MjAxNCBmaWxsIG1hcnF1ZWUgbG9vcCBvbiB0aGUgZnJvbnQgZW5kIHdoZW4gY29udGVudCBpcyBuYXJyb3dlciB0aGFuIHRoZSB0cmFjay5cbiAqL1xuaW1wb3J0IHsgaW5pdFNjcm9sbGluZ1Byb21vdGlvbk1hcnF1ZWUsIHByZWZlcnNSZWR1Y2VkTW90aW9uIH0gZnJvbSAnLi9tYXJxdWVlLWxvb3AnO1xuXG5jb25zdCBST09UX1NFTEVDVE9SID1cblx0Jy5uZXh0b3JhLXNjcm9sbGluZy1wcm9tb3Rpb246bm90KFtkYXRhLW5leHRvcmEtbWFycXVlZS1yZWFkeV0pJztcblxuZnVuY3Rpb24gb2JzZXJ2ZVJlc2l6ZShyb290OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRjb25zdCB0cmFjayA9IHJvb3QucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLXNjcm9sbGluZy1wcm9tb3Rpb25fX3RyYWNrJyk7XG5cdGlmICghdHJhY2sgfHwgdHlwZW9mIFJlc2l6ZU9ic2VydmVyID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBmcmFtZSA9IDA7XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHtcblx0XHRpZiAocHJlZmVyc1JlZHVjZWRNb3Rpb24oKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZSk7XG5cdFx0ZnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0ZGVsZXRlIHJvb3QuZGF0YXNldC5uZXh0b3JhTWFycXVlZVJlYWR5O1xuXHRcdFx0cm9vdC5jbGFzc0xpc3QucmVtb3ZlKCduZXh0b3JhLXNjcm9sbGluZy1wcm9tb3Rpb24tLXJlYWR5Jyk7XG5cdFx0XHR2b2lkIGluaXRTY3JvbGxpbmdQcm9tb3Rpb25NYXJxdWVlKHJvb3QpO1xuXHRcdH0pO1xuXHR9KTtcblxuXHRvYnNlcnZlci5vYnNlcnZlKHRyYWNrKTtcbn1cblxuZnVuY3Rpb24gaW5pdEluKGNvbnRhaW5lcjogUGFyZW50Tm9kZSA9IGRvY3VtZW50KTogdm9pZCB7XG5cdGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihST09UX1NFTEVDVE9SKS5mb3JFYWNoKChyb290KSA9PiB7XG5cdFx0dm9pZCBpbml0U2Nyb2xsaW5nUHJvbW90aW9uTWFycXVlZShyb290KS50aGVuKCgpID0+IHtcblx0XHRcdG9ic2VydmVSZXNpemUocm9vdCk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBpbml0QWxsKCk6IHZvaWQge1xuXHRpbml0SW4oZG9jdW1lbnQpO1xufVxuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0QWxsLCB7IG9uY2U6IHRydWUgfSk7XG59IGVsc2Uge1xuXHRpbml0QWxsKCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7QUFJQSxNQUFNLHdCQUF3QjtBQUM5QixNQUFNLDBCQUEwQjtBQUNoQyxNQUFNLGlCQUFpQjtBQUN2QixNQUFNLHNCQUFzQjtBQUVyQixXQUFTLHVCQUFnQztBQUMvQyxXQUNDLE9BQU8sV0FBVyxlQUNsQixPQUFPLGFBQWEsa0NBQWtDLEVBQUUsWUFBWTtBQUFBLEVBRXRFO0FBRUEsV0FBUyxnQkFBZ0IsTUFBa0M7QUFDMUQsVUFBTSxPQUFPLENBQUMsR0FBRyxLQUFLLGlCQUFtQyxLQUFLLENBQUM7QUFDL0QsUUFBSSxLQUFLLFdBQVcsR0FBRztBQUN0QixhQUFPLFFBQVEsUUFBUTtBQUFBLElBQ3hCO0FBRUEsV0FBTyxRQUFRO0FBQUEsTUFDZCxLQUFLO0FBQUEsUUFDSixDQUFDLFFBQ0EsSUFBSSxRQUFjLENBQUMsWUFBWTtBQUM5QixjQUFJLElBQUksVUFBVTtBQUNqQixvQkFB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
