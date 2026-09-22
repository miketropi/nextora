"use strict";
(() => {
  // blocks/vertical-showcase/view.ts
  var ROOT_SELECTOR = ".wp-block-nextora-vertical-showcase";
  var INITED_ATTRIBUTE = "data-nextora-vs-inited";
  var REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)");
  function initScrollReveal(root) {
    if (root.getAttribute("data-nextora-scroll-reveal") !== "1" || root.classList.contains("is-visible")) return;
    if (REDUCED_MOTION.matches || !("IntersectionObserver" in window)) {
      root.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        root.classList.add("is-visible");
        observer.disconnect();
      }
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    observer.observe(root);
  }
  function initRoot(root) {
    if (root.hasAttribute(INITED_ATTRIBUTE)) return;
    root.setAttribute(INITED_ATTRIBUTE, "1");
    root.classList.add("nextora-vertical-showcase--loading");
    initScrollReveal(root);
    const items = Array.from(root.querySelectorAll("[data-nextora-vs-index]"));
    const images = Array.from(root.querySelectorAll("[data-nextora-vs-image]"));
    const details = Array.from(root.querySelectorAll("[data-nextora-vs-detail]"));
    const prev = root.querySelector(".nextora-vertical-showcase__arrow--prev");
    const next = root.querySelector(".nextora-vertical-showcase__arrow--next");
    const gallery = root.querySelector(".nextora-vertical-showcase__gallery");
    if (items.length === 0) {
      root.classList.replace("nextora-vertical-showcase--loading", "nextora-vertical-showcase--ready");
      return;
    }
    let activeIndex = 0;
    let timer = null;
    let paused = false;
    const duration = Number(root.getAttribute("data-nextora-vs-autoplay") || 0);
    const stop = () => {
      if (timer !== null) {
        window.clearInterval(timer);
        timer = null;
      }
    };
    const start = () => {
      stop();
      if (duration > 0 && !REDUCED_MOTION.matches && !paused && items.length > 1) timer = window.setInterval(() => setActive(activeIndex + 1, 1), duration);
    };
    function setActive(index, direction) {
      activeIndex = (index + items.length) % items.length;
      items.forEach((item, itemIndex) => {
        const active = itemIndex === activeIndex;
        item.classList.remove("nextora-vertical-showcase__item--active");
        item.setAttribute("aria-selected", active ? "true" : "false");
        item.style.setProperty("--nextora-vs-direction", String(direction));
      });
      images.forEach((image, imageIndex) => {
        const active = imageIndex === activeIndex;
        image.classList.remove("nextora-vertical-showcase__image-layer--active");
        image.classList.toggle("nextora-vertical-showcase__image-layer--active", active);
        image.setAttribute("aria-hidden", active ? "false" : "true");
        image.style.setProperty("--nextora-vs-direction", String(direction));
      });
      details.forEach((detail) => {
        const active = Number(detail.dataset.nextoraVsDetail || -1) === activeIndex;
        detail.classList.toggle("nextora-vertical-showcase__detail-panel--active", active);
        detail.setAttribute("aria-hidden", active ? "false" : "true");
      });
      const activeItem = items[activeIndex];
      if (activeItem) void activeItem.offsetWidth;
      if (activeItem) activeItem.classList.add("nextora-vertical-showcase__item--active");
      start();
    }
    const pause = () => {
      paused = true;
      stop();
      root.classList.add("nextora-vertical-showcase--paused");
    };
    const resume = () => {
      paused = false;
      root.classList.remove("nextora-vertical-showcase--paused");
      start();
    };
    items.forEach((item) => item.addEventListener("click", () => setActive(Number(item.dataset.nextoraVsIndex || 0), Number(item.dataset.nextoraVsIndex || 0) >= activeIndex ? 1 : -1)));
    prev?.addEventListener("click", () => setActive(activeIndex - 1, -1));
    next?.addEventListener("click", () => setActive(activeIndex + 1, 1));
    gallery?.addEventListener("mouseenter", pause);
    gallery?.addEventListener("mouseleave", resume);
    gallery?.addEventListener("focusin", pause);
    gallery?.addEventListener("focusout", (event) => {
      if (!gallery.contains(event.relatedTarget)) resume();
    });
    setActive(0, 1);
    root.classList.replace("nextora-vertical-showcase--loading", "nextora-vertical-showcase--ready");
  }
  function initAll() {
    document.querySelectorAll(ROOT_SELECTOR).forEach(initRoot);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initAll, { once: true });
  else initAll();
  window.addEventListener("nextora-vertical-showcase-reinit", initAll);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidmlldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgUk9PVF9TRUxFQ1RPUiA9ICcud3AtYmxvY2stbmV4dG9yYS12ZXJ0aWNhbC1zaG93Y2FzZSc7XG5jb25zdCBJTklURURfQVRUUklCVVRFID0gJ2RhdGEtbmV4dG9yYS12cy1pbml0ZWQnO1xuY29uc3QgUkVEVUNFRF9NT1RJT04gPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKTtcblxuZnVuY3Rpb24gaW5pdFNjcm9sbFJldmVhbChyb290OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRpZiAocm9vdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dG9yYS1zY3JvbGwtcmV2ZWFsJykgIT09ICcxJyB8fCByb290LmNsYXNzTGlzdC5jb250YWlucygnaXMtdmlzaWJsZScpKSByZXR1cm47XG5cdGlmIChSRURVQ0VEX01PVElPTi5tYXRjaGVzIHx8ICEoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpKSB7XG5cdFx0cm9vdC5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0aWYgKGVudHJpZXMuc29tZSgoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKSkge1xuXHRcdFx0cm9vdC5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJyk7XG5cdFx0XHRvYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdFx0fVxuXHR9LCB7IHRocmVzaG9sZDogMC4xNSwgcm9vdE1hcmdpbjogJzBweCAwcHggLTQwcHggMHB4JyB9KTtcblx0b2JzZXJ2ZXIub2JzZXJ2ZShyb290KTtcbn1cblxuZnVuY3Rpb24gaW5pdFJvb3Qocm9vdDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcblx0aWYgKHJvb3QuaGFzQXR0cmlidXRlKElOSVRFRF9BVFRSSUJVVEUpKSByZXR1cm47XG5cdHJvb3Quc2V0QXR0cmlidXRlKElOSVRFRF9BVFRSSUJVVEUsICcxJyk7XG5cdHJvb3QuY2xhc3NMaXN0LmFkZCgnbmV4dG9yYS12ZXJ0aWNhbC1zaG93Y2FzZS0tbG9hZGluZycpO1xuXHRpbml0U2Nyb2xsUmV2ZWFsKHJvb3QpO1xuXG5cdGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShyb290LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdbZGF0YS1uZXh0b3JhLXZzLWluZGV4XScpKTtcblx0Y29uc3QgaW1hZ2VzID0gQXJyYXkuZnJvbShyb290LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdbZGF0YS1uZXh0b3JhLXZzLWltYWdlXScpKTtcblx0Y29uc3QgZGV0YWlscyA9IEFycmF5LmZyb20ocm9vdC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignW2RhdGEtbmV4dG9yYS12cy1kZXRhaWxdJykpO1xuXHRjb25zdCBwcmV2ID0gcm9vdC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PignLm5leHRvcmEtdmVydGljYWwtc2hvd2Nhc2VfX2Fycm93LS1wcmV2Jyk7XG5cdGNvbnN0IG5leHQgPSByb290LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KCcubmV4dG9yYS12ZXJ0aWNhbC1zaG93Y2FzZV9fYXJyb3ctLW5leHQnKTtcblx0Y29uc3QgZ2FsbGVyeSA9IHJvb3QucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLXZlcnRpY2FsLXNob3djYXNlX19nYWxsZXJ5Jyk7XG5cdGlmIChpdGVtcy5sZW5ndGggPT09IDApIHsgcm9vdC5jbGFzc0xpc3QucmVwbGFjZSgnbmV4dG9yYS12ZXJ0aWNhbC1zaG93Y2FzZS0tbG9hZGluZycsICduZXh0b3JhLXZlcnRpY2FsLXNob3djYXNlLS1yZWFkeScpOyByZXR1cm47IH1cblxuXHRsZXQgYWN0aXZlSW5kZXggPSAwO1xuXHRsZXQgdGltZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXHRsZXQgcGF1c2VkID0gZmFsc2U7XG5cdGNvbnN0IGR1cmF0aW9uID0gTnVtYmVyKHJvb3QuZ2V0QXR0cmlidXRlKCdkYXRhLW5leHRvcmEtdnMtYXV0b3BsYXknKSB8fCAwKTtcblxuXHRjb25zdCBzdG9wID0gKCkgPT4geyBpZiAodGltZXIgIT09IG51bGwpIHsgd2luZG93LmNsZWFySW50ZXJ2YWwodGltZXIpOyB0aW1lciA9IG51bGw7IH0gfTtcblx0Y29uc3Qgc3RhcnQgPSAoKSA9PiB7XG5cdFx0c3RvcCgpO1xuXHRcdGlmIChkdXJhdGlvbiA+IDAgJiYgIVJFRFVDRURfTU9USU9OLm1hdGNoZXMgJiYgIXBhdXNlZCAmJiBpdGVtcy5sZW5ndGggPiAxKSB0aW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiBzZXRBY3RpdmUoYWN0aXZlSW5kZXggKyAxLCAxKSwgZHVyYXRpb24pO1xuXHR9O1xuXHRmdW5jdGlvbiBzZXRBY3RpdmUoaW5kZXg6IG51bWJlciwgZGlyZWN0aW9uOiAxIHwgLTEpOiB2b2lkIHtcblx0XHRhY3RpdmVJbmRleCA9IChpbmRleCArIGl0ZW1zLmxlbmd0aCkgJSBpdGVtcy5sZW5ndGg7XG5cdFx0aXRlbXMuZm9yRWFjaCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBhY3RpdmUgPSBpdGVtSW5kZXggPT09IGFjdGl2ZUluZGV4O1xuXHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCduZXh0b3JhLXZlcnRpY2FsLXNob3djYXNlX19pdGVtLS1hY3RpdmUnKTtcblx0XHRcdGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgYWN0aXZlID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG5cdFx0XHRpdGVtLnN0eWxlLnNldFByb3BlcnR5KCctLW5leHRvcmEtdnMtZGlyZWN0aW9uJywgU3RyaW5nKGRpcmVjdGlvbikpO1xuXHRcdH0pO1xuXHRcdGltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW1hZ2VJbmRleCkgPT4ge1xuXHRcdFx0Y29uc3QgYWN0aXZlID0gaW1hZ2VJbmRleCA9PT0gYWN0aXZlSW5kZXg7XG5cdFx0XHRpbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCduZXh0b3JhLXZlcnRpY2FsLXNob3djYXNlX19pbWFnZS1sYXllci0tYWN0aXZlJyk7XG5cdFx0XHRpbWFnZS5jbGFzc0xpc3QudG9nZ2xlKCduZXh0b3JhLXZlcnRpY2FsLXNob3djYXNlX19pbWFnZS1sYXllci0tYWN0aXZlJywgYWN0aXZlKTtcblx0XHRcdGltYWdlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBhY3RpdmUgPyAnZmFsc2UnIDogJ3RydWUnKTtcblx0XHRcdGltYWdlLnN0eWxlLnNldFByb3BlcnR5KCctLW5leHRvcmEtdnMtZGlyZWN0aW9uJywgU3RyaW5nKGRpcmVjdGlvbikpO1xuXHRcdH0pO1xuXHRcdGRldGFpbHMuZm9yRWFjaCgoZGV0YWlsKSA9PiB7XG5cdFx0XHRjb25zdCBhY3RpdmUgPSBOdW1iZXIoZGV0YWlsLmRhdGFzZXQubmV4dG9yYVZzRGV0YWlsIHx8IC0xKSA9PT0gYWN0aXZlSW5kZXg7XG5cdFx0XHRkZXRhaWwuY2xhc3NMaXN0LnRvZ2dsZSgnbmV4dG9yYS12ZXJ0aWNhbC1zaG93Y2FzZV9fZGV0YWlsLXBhbmVsLS1hY3RpdmUnLCBhY3RpdmUpO1xuXHRcdFx0ZGV0YWlsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBhY3RpdmUgPyAnZmFsc2UnIDogJ3RydWUnKTtcblx0XHR9KTtcblx0XHQvLyBGb3JjZSBhIGZyZXNoIHByb2dyZXNzIGFuaW1hdGlvbiB3aGVuZXZlciB0aGUgYWN0aXZlIHJvdyBjaGFuZ2VzLCBpbmNsdWRpbmcgdGhlIGZpcnN0IHBhaW50LlxuXHRcdGNvbnN0IGFjdGl2ZUl0ZW0gPSBpdGVtc1thY3RpdmVJbmRleF07XG5cdFx0aWYgKGFjdGl2ZUl0ZW0pIHZvaWQgYWN0aXZlSXRlbS5vZmZzZXRXaWR0aDtcblx0XHRpZiAoYWN0aXZlSXRlbSkgYWN0aXZlSXRlbS5jbGFzc0xpc3QuYWRkKCduZXh0b3JhLXZlcnRpY2FsLXNob3djYXNlX19pdGVtLS1hY3RpdmUnKTtcblx0XHRzdGFydCgpO1xuXHR9XG5cdGNvbnN0IHBhdXNlID0gKCkgPT4geyBwYXVzZWQgPSB0cnVlOyBzdG9wKCk7IHJvb3QuY2xhc3NMaXN0LmFkZCgnbmV4dG9yYS12ZXJ0aWNhbC1zaG93Y2FzZS0tcGF1c2VkJyk7IH07XG5cdGNvbnN0IHJlc3VtZSA9ICgpID0+IHsgcGF1c2VkID0gZmFsc2U7IHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnbmV4dG9yYS12ZXJ0aWNhbC1zaG93Y2FzZS0tcGF1c2VkJyk7IHN0YXJ0KCk7IH07XG5cblx0aXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNldEFjdGl2ZShOdW1iZXIoaXRlbS5kYXRhc2V0Lm5leHRvcmFWc0luZGV4IHx8IDApLCBOdW1iZXIoaXRlbS5kYXRhc2V0Lm5leHRvcmFWc0luZGV4IHx8IDApID49IGFjdGl2ZUluZGV4ID8gMSA6IC0xKSkpO1xuXHRwcmV2Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNldEFjdGl2ZShhY3RpdmVJbmRleCAtIDEsIC0xKSk7XG5cdG5leHQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0QWN0aXZlKGFjdGl2ZUluZGV4ICsgMSwgMSkpO1xuXHRnYWxsZXJ5Py5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgcGF1c2UpO1xuXHRnYWxsZXJ5Py5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgcmVzdW1lKTtcblx0Z2FsbGVyeT8uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHBhdXNlKTtcblx0Z2FsbGVyeT8uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoZXZlbnQpID0+IHsgaWYgKCFnYWxsZXJ5LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQgYXMgTm9kZSB8IG51bGwpKSByZXN1bWUoKTsgfSk7XG5cdHNldEFjdGl2ZSgwLCAxKTtcblx0cm9vdC5jbGFzc0xpc3QucmVwbGFjZSgnbmV4dG9yYS12ZXJ0aWNhbC1zaG93Y2FzZS0tbG9hZGluZycsICduZXh0b3JhLXZlcnRpY2FsLXNob3djYXNlLS1yZWFkeScpO1xufVxuXG5mdW5jdGlvbiBpbml0QWxsKCk6IHZvaWQgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihST09UX1NFTEVDVE9SKS5mb3JFYWNoKGluaXRSb290KTsgfVxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRBbGwsIHsgb25jZTogdHJ1ZSB9KTsgZWxzZSBpbml0QWxsKCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbmV4dG9yYS12ZXJ0aWNhbC1zaG93Y2FzZS1yZWluaXQnLCBpbml0QWxsKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7OztBQUFBLE1BQU0sZ0JBQWdCO0FBQ3RCLE1BQU0sbUJBQW1CO0FBQ3pCLE1BQU0saUJBQWlCLE9BQU8sV0FBVyxrQ0FBa0M7QUFFM0UsV0FBUyxpQkFBaUIsTUFBeUI7QUFDbEQsUUFBSSxLQUFLLGFBQWEsNEJBQTRCLE1BQU0sT0FBTyxLQUFLLFVBQVUsU0FBUyxZQUFZLEVBQUc7QUFDdEcsUUFBSSxlQUFlLFdBQVcsRUFBRSwwQkFBMEIsU0FBUztBQUNsRSxXQUFLLFVBQVUsSUFBSSxZQUFZO0FBQy9CO0FBQUEsSUFDRDtBQUNBLFVBQU0sV0FBVyxJQUFJLHFCQUFxQixDQUFDLFlBQVk7QUFDdEQsVUFBSSxRQUFRLEtBQUssQ0FBQyxVQUFVLE1BQU0sY0FBYyxHQUFHO0FBQ2xELGFBQUssVUFBVSxJQUFJLFlBQVk7QUFDL0IsaUJBQVMsV0FBVztBQUFBLE1BQ3JCO0FBQUEsSUFDRCxHQUFHLEVBQUUsV0FBVyxNQUFNLFlBQVksb0JBQW9CLENB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
