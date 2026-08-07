"use strict";
(() => {
  // blocks/scrolling-promotion/marquee-loop.ts
  var PRIMARY_HALF_SELECTOR = '[data-nextora-marquee-half="primary"]';
  var DUPLICATE_HALF_SELECTOR = '[data-nextora-marquee-half="duplicate"]';
  var TRACK_SELECTOR = ".nextora-scrolling-promotion__track";
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
  function fillScrollingPromotionMarquee(root) {
    const track = root.querySelector(TRACK_SELECTOR);
    const primary = root.querySelector(PRIMARY_HALF_SELECTOR);
    const duplicate = root.querySelector(DUPLICATE_HALF_SELECTOR);
    if (!track || !primary || !duplicate) {
      return;
    }
    if (prefersReducedMotion()) {
      return;
    }
    const minWidth = Math.max(track.clientWidth, 1);
    fillHalf(primary, minWidth);
    syncDuplicateHalf(primary, duplicate);
  }
  async function initScrollingPromotionMarquee(root) {
    if (root.dataset.nextoraMarqueeReady === "1") {
      return;
    }
    await whenImagesReady(root);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFycXVlZS1sb29wLnRzIiwgInZpZXcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogRmlsbCBtYXJxdWVlIGhhbHZlcyBzbyBlYWNoIHNpZGUgaXMgYXQgbGVhc3QgYXMgd2lkZSBhcyB0aGUgdHJhY2sgKG5vIGdhcHMgd2hlbiBmZXcgaXRlbXMpLlxuICovXG5cbmNvbnN0IFBSSU1BUllfSEFMRl9TRUxFQ1RPUiA9ICdbZGF0YS1uZXh0b3JhLW1hcnF1ZWUtaGFsZj1cInByaW1hcnlcIl0nO1xuY29uc3QgRFVQTElDQVRFX0hBTEZfU0VMRUNUT1IgPSAnW2RhdGEtbmV4dG9yYS1tYXJxdWVlLWhhbGY9XCJkdXBsaWNhdGVcIl0nO1xuY29uc3QgVFJBQ0tfU0VMRUNUT1IgPSAnLm5leHRvcmEtc2Nyb2xsaW5nLXByb21vdGlvbl9fdHJhY2snO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlZmVyc1JlZHVjZWRNb3Rpb24oKTogYm9vbGVhbiB7XG5cdHJldHVybiAoXG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHR3aW5kb3cubWF0Y2hNZWRpYT8uKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpLm1hdGNoZXMgPT09IHRydWVcblx0KTtcbn1cblxuZnVuY3Rpb24gd2hlbkltYWdlc1JlYWR5KHJvb3Q6IEhUTUxFbGVtZW50KTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGltZ3MgPSBbLi4ucm9vdC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxJbWFnZUVsZW1lbnQ+KCdpbWcnKV07XG5cdGlmIChpbWdzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxuXG5cdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRpbWdzLm1hcChcblx0XHRcdChpbWcpID0+XG5cdFx0XHRcdG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGltZy5jb21wbGV0ZSkge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zdCBkb25lID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0aW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBkb25lKTtcblx0XHRcdFx0XHRcdGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGRvbmUpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0aW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBkb25lKTtcblx0XHRcdFx0XHRpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBkb25lKTtcblx0XHRcdFx0fSksXG5cdFx0KSxcblx0KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG59XG5cbmZ1bmN0aW9uIGZpbGxIYWxmKGhhbGY6IEhUTUxFbGVtZW50LCBtaW5XaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdGxldCB0ZW1wbGF0ZSA9IGhhbGYuZGF0YXNldC5uZXh0b3JhTWFycXVlZVRlbXBsYXRlID8/ICcnO1xuXHRpZiAoJycgPT09IHRlbXBsYXRlKSB7XG5cdFx0dGVtcGxhdGUgPSBoYWxmLmlubmVySFRNTC50cmltKCk7XG5cdFx0aWYgKCcnID09PSB0ZW1wbGF0ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRoYWxmLmRhdGFzZXQubmV4dG9yYU1hcnF1ZWVUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHR9IGVsc2Uge1xuXHRcdGhhbGYuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG5cdH1cblxuXHRsZXQgc2FmZXR5ID0gMDtcblx0d2hpbGUgKGhhbGYuc2Nyb2xsV2lkdGggPCBtaW5XaWR0aCAmJiBzYWZldHkgPCA2NCkge1xuXHRcdGhhbGYuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0ZW1wbGF0ZSk7XG5cdFx0c2FmZXR5ICs9IDE7XG5cdH1cbn1cblxuZnVuY3Rpb24gc3luY0R1cGxpY2F0ZUhhbGYocHJpbWFyeTogSFRNTEVsZW1lbnQsIGR1cGxpY2F0ZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcblx0ZHVwbGljYXRlLmlubmVySFRNTCA9IHByaW1hcnkuaW5uZXJIVE1MO1xuXHRkdXBsaWNhdGUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG59XG5cbi8qKlxuICogRXhwYW5kIG1hcnF1ZWUgaGFsdmVzIHRvIGZpbGwgdGhlIHRyYWNrLCB0aGVuIHN5bmMgdGhlIGR1cGxpY2F0ZSBoYWxmIGZvciBzZWFtbGVzcyBDU1MgbG9vcC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbGxTY3JvbGxpbmdQcm9tb3Rpb25NYXJxdWVlKHJvb3Q6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdGNvbnN0IHRyYWNrID0gcm9vdC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihUUkFDS19TRUxFQ1RPUik7XG5cdGNvbnN0IHByaW1hcnkgPSByb290LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFBSSU1BUllfSEFMRl9TRUxFQ1RPUik7XG5cdGNvbnN0IGR1cGxpY2F0ZSA9IHJvb3QucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oRFVQTElDQVRFX0hBTEZfU0VMRUNUT1IpO1xuXG5cdGlmICghdHJhY2sgfHwgIXByaW1hcnkgfHwgIWR1cGxpY2F0ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChwcmVmZXJzUmVkdWNlZE1vdGlvbigpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbWluV2lkdGggPSBNYXRoLm1heCh0cmFjay5jbGllbnRXaWR0aCwgMSk7XG5cdGZpbGxIYWxmKHByaW1hcnksIG1pbldpZHRoKTtcblx0c3luY0R1cGxpY2F0ZUhhbGYocHJpbWFyeSwgZHVwbGljYXRlKTtcbn1cblxuLyoqXG4gKiBJZGVtcG90ZW50IGluaXQgZm9yIG9uZSBtYXJxdWVlIHJvb3QgKGZyb250IGVuZCBvciBlZGl0b3IgYW5pbWF0aW9uIHByZXZpZXcpLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdFNjcm9sbGluZ1Byb21vdGlvbk1hcnF1ZWUocm9vdDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKHJvb3QuZGF0YXNldC5uZXh0b3JhTWFycXVlZVJlYWR5ID09PSAnMScpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhd2FpdCB3aGVuSW1hZ2VzUmVhZHkocm9vdCk7XG5cdGZpbGxTY3JvbGxpbmdQcm9tb3Rpb25NYXJxdWVlKHJvb3QpO1xuXHRyb290LmRhdGFzZXQubmV4dG9yYU1hcnF1ZWVSZWFkeSA9ICcxJztcblx0cm9vdC5jbGFzc0xpc3QuYWRkKCduZXh0b3JhLXNjcm9sbGluZy1wcm9tb3Rpb24tLXJlYWR5Jyk7XG59XG4iLCAiLyoqXG4gKiBTY3JvbGxpbmcgcHJvbW90aW9uIFx1MjAxNCBmaWxsIG1hcnF1ZWUgbG9vcCBvbiB0aGUgZnJvbnQgZW5kIHdoZW4gY29udGVudCBpcyBuYXJyb3dlciB0aGFuIHRoZSB0cmFjay5cbiAqL1xuaW1wb3J0IHsgaW5pdFNjcm9sbGluZ1Byb21vdGlvbk1hcnF1ZWUsIHByZWZlcnNSZWR1Y2VkTW90aW9uIH0gZnJvbSAnLi9tYXJxdWVlLWxvb3AnO1xuXG5jb25zdCBST09UX1NFTEVDVE9SID1cblx0Jy5uZXh0b3JhLXNjcm9sbGluZy1wcm9tb3Rpb246bm90KFtkYXRhLW5leHRvcmEtbWFycXVlZS1yZWFkeV0pJztcblxuZnVuY3Rpb24gb2JzZXJ2ZVJlc2l6ZShyb290OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRjb25zdCB0cmFjayA9IHJvb3QucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLXNjcm9sbGluZy1wcm9tb3Rpb25fX3RyYWNrJyk7XG5cdGlmICghdHJhY2sgfHwgdHlwZW9mIFJlc2l6ZU9ic2VydmVyID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBmcmFtZSA9IDA7XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHtcblx0XHRpZiAocHJlZmVyc1JlZHVjZWRNb3Rpb24oKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZSk7XG5cdFx0ZnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0ZGVsZXRlIHJvb3QuZGF0YXNldC5uZXh0b3JhTWFycXVlZVJlYWR5O1xuXHRcdFx0cm9vdC5jbGFzc0xpc3QucmVtb3ZlKCduZXh0b3JhLXNjcm9sbGluZy1wcm9tb3Rpb24tLXJlYWR5Jyk7XG5cdFx0XHR2b2lkIGluaXRTY3JvbGxpbmdQcm9tb3Rpb25NYXJxdWVlKHJvb3QpO1xuXHRcdH0pO1xuXHR9KTtcblxuXHRvYnNlcnZlci5vYnNlcnZlKHRyYWNrKTtcbn1cblxuZnVuY3Rpb24gaW5pdEluKGNvbnRhaW5lcjogUGFyZW50Tm9kZSA9IGRvY3VtZW50KTogdm9pZCB7XG5cdGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihST09UX1NFTEVDVE9SKS5mb3JFYWNoKChyb290KSA9PiB7XG5cdFx0dm9pZCBpbml0U2Nyb2xsaW5nUHJvbW90aW9uTWFycXVlZShyb290KS50aGVuKCgpID0+IHtcblx0XHRcdG9ic2VydmVSZXNpemUocm9vdCk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBpbml0QWxsKCk6IHZvaWQge1xuXHRpbml0SW4oZG9jdW1lbnQpO1xufVxuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0QWxsLCB7IG9uY2U6IHRydWUgfSk7XG59IGVsc2Uge1xuXHRpbml0QWxsKCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7QUFJQSxNQUFNLHdCQUF3QjtBQUM5QixN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
