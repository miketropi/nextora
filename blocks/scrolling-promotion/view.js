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
    imgs.forEach((img) => {
      if (img.loading === "lazy") {
        img.loading = "eager";
      }
    });
    const imagePromises = imgs.map(
      (img) => new Promise((resolve) => {
        if (img.complete && img.naturalWidth > 0) {
          resolve();
          return;
        }
        if (typeof img.decode === "function") {
          img.decode().then(() => resolve()).catch(() => resolve());
          return;
        }
        const done = () => {
          img.removeEventListener("load", done);
          img.removeEventListener("error", done);
          resolve();
        };
        img.addEventListener("load", done, { once: true });
        img.addEventListener("error", done, { once: true });
      })
    );
    const timeoutPromise = new Promise((resolve) => {
      setTimeout(resolve, 600);
    });
    return Promise.race([Promise.all(imagePromises).then(() => void 0), timeoutPromise]);
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
    const loopWidth = primary.offsetWidth || primary.getBoundingClientRect().width;
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
    let lastWidth = Math.round(track.getBoundingClientRect().width);
    const observer = new ResizeObserver((entries) => {
      if (prefersReducedMotion()) {
        return;
      }
      for (const entry of entries) {
        const newWidth = Math.round(entry.contentRect.width);
        if (newWidth === lastWidth || newWidth === 0) {
          continue;
        }
        lastWidth = newWidth;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          fillScrollingPromotionMarquee(root);
        });
      }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFycXVlZS1sb29wLnRzIiwgInZpZXcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogRmlsbCBtYXJxdWVlIGhhbHZlcyBzbyBlYWNoIHNpZGUgaXMgYXQgbGVhc3QgYXMgd2lkZSBhcyB0aGUgdHJhY2sgKG5vIGdhcHMgd2hlbiBmZXcgaXRlbXMpLlxuICovXG5cbmNvbnN0IFBSSU1BUllfSEFMRl9TRUxFQ1RPUiA9ICdbZGF0YS1uZXh0b3JhLW1hcnF1ZWUtaGFsZj1cInByaW1hcnlcIl0nO1xuY29uc3QgRFVQTElDQVRFX0hBTEZfU0VMRUNUT1IgPSAnW2RhdGEtbmV4dG9yYS1tYXJxdWVlLWhhbGY9XCJkdXBsaWNhdGVcIl0nO1xuY29uc3QgVFJBQ0tfU0VMRUNUT1IgPSAnLm5leHRvcmEtc2Nyb2xsaW5nLXByb21vdGlvbl9fdHJhY2snO1xuY29uc3QgTE9PUF9XSURUSF9QUk9QRVJUWSA9ICctLW5leHRvcmEtbWFycXVlZS1sb29wLXdpZHRoJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZlcnNSZWR1Y2VkTW90aW9uKCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gKFxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0d2luZG93Lm1hdGNoTWVkaWE/LignKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKS5tYXRjaGVzID09PSB0cnVlXG5cdCk7XG59XG5cbmZ1bmN0aW9uIHdoZW5JbWFnZXNSZWFkeShyb290OiBIVE1MRWxlbWVudCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBpbWdzID0gWy4uLnJvb3QucXVlcnlTZWxlY3RvckFsbDxIVE1MSW1hZ2VFbGVtZW50PignaW1nJyldO1xuXHRpZiAoaW1ncy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdH1cblxuXHRpbWdzLmZvckVhY2goKGltZykgPT4ge1xuXHRcdGlmIChpbWcubG9hZGluZyA9PT0gJ2xhenknKSB7XG5cdFx0XHRpbWcubG9hZGluZyA9ICdlYWdlcic7XG5cdFx0fVxuXHR9KTtcblxuXHRjb25zdCBpbWFnZVByb21pc2VzID0gaW1ncy5tYXAoXG5cdFx0KGltZykgPT5cblx0XHRcdG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcdGlmIChpbWcuY29tcGxldGUgJiYgaW1nLm5hdHVyYWxXaWR0aCA+IDApIHtcblx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0eXBlb2YgaW1nLmRlY29kZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGltZy5kZWNvZGUoKVxuXHRcdFx0XHRcdFx0LnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuXHRcdFx0XHRcdFx0LmNhdGNoKCgpID0+IHJlc29sdmUoKSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGRvbmUgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBkb25lKTtcblx0XHRcdFx0XHRpbWcucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBkb25lKTtcblx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZG9uZSwgeyBvbmNlOiB0cnVlIH0pO1xuXHRcdFx0XHRpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBkb25lLCB7IG9uY2U6IHRydWUgfSk7XG5cdFx0XHR9KSxcblx0KTtcblxuXHRjb25zdCB0aW1lb3V0UHJvbWlzZSA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG5cdFx0c2V0VGltZW91dChyZXNvbHZlLCA2MDApO1xuXHR9KTtcblxuXHRyZXR1cm4gUHJvbWlzZS5yYWNlKFtQcm9taXNlLmFsbChpbWFnZVByb21pc2VzKS50aGVuKCgpID0+IHVuZGVmaW5lZCksIHRpbWVvdXRQcm9taXNlXSk7XG59XG5cbmZ1bmN0aW9uIGZpbGxIYWxmKGhhbGY6IEhUTUxFbGVtZW50LCBtaW5XaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdGxldCB0ZW1wbGF0ZSA9IGhhbGYuZGF0YXNldC5uZXh0b3JhTWFycXVlZVRlbXBsYXRlID8/ICcnO1xuXHRpZiAoJycgPT09IHRlbXBsYXRlKSB7XG5cdFx0dGVtcGxhdGUgPSBoYWxmLmlubmVySFRNTC50cmltKCk7XG5cdFx0aWYgKCcnID09PSB0ZW1wbGF0ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRoYWxmLmRhdGFzZXQubmV4dG9yYU1hcnF1ZWVUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHR9IGVsc2Uge1xuXHRcdGhhbGYuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG5cdH1cblxuXHRsZXQgc2FmZXR5ID0gMDtcblx0d2hpbGUgKGhhbGYuc2Nyb2xsV2lkdGggPCBtaW5XaWR0aCAmJiBzYWZldHkgPCA2NCkge1xuXHRcdGhhbGYuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0ZW1wbGF0ZSk7XG5cdFx0c2FmZXR5ICs9IDE7XG5cdH1cbn1cblxuZnVuY3Rpb24gc3luY0R1cGxpY2F0ZUhhbGYocHJpbWFyeTogSFRNTEVsZW1lbnQsIGR1cGxpY2F0ZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcblx0ZHVwbGljYXRlLmlubmVySFRNTCA9IHByaW1hcnkuaW5uZXJIVE1MO1xuXHRkdXBsaWNhdGUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG59XG5cbmZ1bmN0aW9uIHN5bmNMb29wV2lkdGgoaW5uZXI6IEhUTUxFbGVtZW50LCBwcmltYXJ5OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRjb25zdCBsb29wV2lkdGggPSBwcmltYXJ5Lm9mZnNldFdpZHRoIHx8IHByaW1hcnkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG5cblx0aWYgKGxvb3BXaWR0aCA+IDApIHtcblx0XHRpbm5lci5zdHlsZS5zZXRQcm9wZXJ0eShMT09QX1dJRFRIX1BST1BFUlRZLCBgJHtsb29wV2lkdGh9cHhgKTtcblx0fVxufVxuXG4vKipcbiAqIEV4cGFuZCBtYXJxdWVlIGhhbHZlcyB0byBmaWxsIHRoZSB0cmFjaywgdGhlbiBzeW5jIHRoZSBkdXBsaWNhdGUgaGFsZiBmb3Igc2VhbWxlc3MgQ1NTIGxvb3AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWxsU2Nyb2xsaW5nUHJvbW90aW9uTWFycXVlZShyb290OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRjb25zdCB0cmFjayA9IHJvb3QucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oVFJBQ0tfU0VMRUNUT1IpO1xuXHRjb25zdCBwcmltYXJ5ID0gcm9vdC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihQUklNQVJZX0hBTEZfU0VMRUNUT1IpO1xuXHRjb25zdCBkdXBsaWNhdGUgPSByb290LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KERVUExJQ0FURV9IQUxGX1NFTEVDVE9SKTtcblx0Y29uc3QgaW5uZXIgPSB0cmFjaz8ucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLXNjcm9sbGluZy1wcm9tb3Rpb25fX2lubmVyJyk7XG5cblx0aWYgKCF0cmFjayB8fCAhcHJpbWFyeSB8fCAhZHVwbGljYXRlIHx8ICFpbm5lcikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChwcmVmZXJzUmVkdWNlZE1vdGlvbigpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbWluV2lkdGggPSBNYXRoLm1heCh0cmFjay5jbGllbnRXaWR0aCwgMSk7XG5cdGZpbGxIYWxmKHByaW1hcnksIG1pbldpZHRoKTtcblx0c3luY0R1cGxpY2F0ZUhhbGYocHJpbWFyeSwgZHVwbGljYXRlKTtcblx0c3luY0xvb3BXaWR0aChpbm5lciwgcHJpbWFyeSk7XG59XG5cbi8qKlxuICogSWRlbXBvdGVudCBpbml0IGZvciBvbmUgbWFycXVlZSByb290IChmcm9udCBlbmQgb3IgZWRpdG9yIGFuaW1hdGlvbiBwcmV2aWV3KS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRTY3JvbGxpbmdQcm9tb3Rpb25NYXJxdWVlKHJvb3Q6IEhUTUxFbGVtZW50KTogUHJvbWlzZTx2b2lkPiB7XG5cdGlmIChyb290LmRhdGFzZXQubmV4dG9yYU1hcnF1ZWVSZWFkeSA9PT0gJzEnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXdhaXQgd2hlbkltYWdlc1JlYWR5KHJvb3QpO1xuXHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5mb250cz8ucmVhZHkpIHtcblx0XHRhd2FpdCBkb2N1bWVudC5mb250cy5yZWFkeTtcblx0fVxuXHRmaWxsU2Nyb2xsaW5nUHJvbW90aW9uTWFycXVlZShyb290KTtcblx0cm9vdC5kYXRhc2V0Lm5leHRvcmFNYXJxdWVlUmVhZHkgPSAnMSc7XG5cdHJvb3QuY2xhc3NMaXN0LmFkZCgnbmV4dG9yYS1zY3JvbGxpbmctcHJvbW90aW9uLS1yZWFkeScpO1xufVxuIiwgIi8qKlxuICogU2Nyb2xsaW5nIHByb21vdGlvbiBcdTIwMTQgZmlsbCBtYXJxdWVlIGxvb3Agb24gdGhlIGZyb250IGVuZCB3aGVuIGNvbnRlbnQgaXMgbmFycm93ZXIgdGhhbiB0aGUgdHJhY2suXG4gKi9cbmltcG9ydCB7XG5cdGZpbGxTY3JvbGxpbmdQcm9tb3Rpb25NYXJxdWVlLFxuXHRpbml0U2Nyb2xsaW5nUHJvbW90aW9uTWFycXVlZSxcblx0cHJlZmVyc1JlZHVjZWRNb3Rpb24sXG59IGZyb20gJy4vbWFycXVlZS1sb29wJztcblxuY29uc3QgUk9PVF9TRUxFQ1RPUiA9XG5cdCcubmV4dG9yYS1zY3JvbGxpbmctcHJvbW90aW9uOm5vdChbZGF0YS1uZXh0b3JhLW1hcnF1ZWUtcmVhZHldKSc7XG5cbmZ1bmN0aW9uIG9ic2VydmVSZXNpemUocm9vdDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcblx0Y29uc3QgdHJhY2sgPSByb290LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS1zY3JvbGxpbmctcHJvbW90aW9uX190cmFjaycpO1xuXHRpZiAoIXRyYWNrIHx8IHR5cGVvZiBSZXNpemVPYnNlcnZlciA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgZnJhbWUgPSAwO1xuXHRsZXQgbGFzdFdpZHRoID0gTWF0aC5yb3VuZCh0cmFjay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCk7XG5cblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRpZiAocHJlZmVyc1JlZHVjZWRNb3Rpb24oKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcblx0XHRcdGNvbnN0IG5ld1dpZHRoID0gTWF0aC5yb3VuZChlbnRyeS5jb250ZW50UmVjdC53aWR0aCk7XG5cdFx0XHRpZiAobmV3V2lkdGggPT09IGxhc3RXaWR0aCB8fCBuZXdXaWR0aCA9PT0gMCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGxhc3RXaWR0aCA9IG5ld1dpZHRoO1xuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuXHRcdFx0ZnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0XHRmaWxsU2Nyb2xsaW5nUHJvbW90aW9uTWFycXVlZShyb290KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG5cblx0b2JzZXJ2ZXIub2JzZXJ2ZSh0cmFjayk7XG59XG5cbmZ1bmN0aW9uIGluaXRJbihjb250YWluZXI6IFBhcmVudE5vZGUgPSBkb2N1bWVudCk6IHZvaWQge1xuXHRjb250YWluZXIucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oUk9PVF9TRUxFQ1RPUikuZm9yRWFjaCgocm9vdCkgPT4ge1xuXHRcdHZvaWQgaW5pdFNjcm9sbGluZ1Byb21vdGlvbk1hcnF1ZWUocm9vdCkudGhlbigoKSA9PiB7XG5cdFx0XHRvYnNlcnZlUmVzaXplKHJvb3QpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaW5pdEFsbCgpOiB2b2lkIHtcblx0aW5pdEluKGRvY3VtZW50KTtcbn1cblxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdEFsbCwgeyBvbmNlOiB0cnVlIH0pO1xufSBlbHNlIHtcblx0aW5pdEFsbCgpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7O0FBSUEsTUFBTSx3QkFBd0I7QUFDOUIsTUFBTSwwQkFBMEI7QUFDaEMsTUFBTSxpQkFBaUI7QUFDdkIsTUFBTSxzQkFBc0I7QUFFckIsV0FBUyx1QkFBZ0M7QUFDL0MsV0FDQyxPQUFPLFdBQVcsZUFDbEIsT0FBTyxhQUFhLGtDQUFrQyxFQUFFLFlBQVk7QUFBQSxFQUV0RTtBQUVBLFdBQVMsZ0JBQWdCLE1BQWtDO0FBQzFELFVBQU0sT0FBTyxDQUFDLEdBQUcsS0FBSyxpQkFBbUMsS0FBSyxDQUFDO0FBQy9ELFFBQUksS0FBSyxXQUFXLEdBQUc7QUFDdEIsYUFBTyxRQUFRLFFBQVE7QUFBQSxJQUN4QjtBQUVBLFNBQUssUUFBUSxDQUFDLFFBQVE7QUFDckIsVUFBSSxJQUFJLFlBQVksUUFBUTtBQUMzQixZQUFJLFVBQVU7QUFBQSxNQUNmO0FBQUEsSUFDRCxDQUFDO0FBRUQsVUFBTSxnQkFBZ0IsS0FBSztBQUFBLE1BQzFCLENBQUMsUUFDQSxJQUFJLFFBQWMsQ0FBQyxZQUFZO0FBQzlCLFlBQUksSUFBSSxZQUFZLElBQUksZUFBZSxHQUFHO0FBQ3pDLGtCQUFRO0FBQ1I7QUFBQSxRQUNEO0FBQ0EsWUFBSSxPQUFPLElBQUksV0FBVyxZQUFZO0FBQ3JDLGNBQUksT0FBTyxFQUNULEtBQUssTUFBTSxRQUFR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
