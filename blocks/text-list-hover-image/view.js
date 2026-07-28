"use strict";
(() => {
  // blocks/text-list-hover-image/view.ts
  var INITED_ATTR = "data-nextora-thli-inited";
  var REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var SUPPORTS_HOVER = window.matchMedia("(hover: hover)").matches;
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }
  function recalcContainerPos(state) {
    const rect = state.root.getBoundingClientRect();
    state.containerLeft = rect.left;
    state.containerTop = rect.top;
  }
  function initTextListHoverImageRoot(root) {
    if (root.hasAttribute(INITED_ATTR)) return;
    root.setAttribute(INITED_ATTR, "1");
    if (REDUCED_MOTION || !SUPPORTS_HOVER) {
      root.classList.add("is-visible");
      return;
    }
    const hoverImage = root.querySelector(
      ".nextora-text-list-hover-image__hover-image"
    );
    const hoverImgs = Array.from(
      root.querySelectorAll(".nextora-text-list-hover-image__hover-img")
    );
    if (!hoverImage || hoverImgs.length === 0) {
      initTextListHoverImageScrollAnimation(root);
      return;
    }
    const state = {
      root,
      hoverImage,
      hoverImgs,
      containerLeft: 0,
      containerTop: 0,
      imageHeight: 0,
      mouseX: 0,
      mouseY: 0,
      smoothX: 0,
      smoothY: 0,
      isVisible: false,
      hoveredIndex: null,
      raf: null
    };
    recalcContainerPos(state);
    state.imageHeight = hoverImage.offsetHeight || 180;
    window.addEventListener("scroll", () => recalcContainerPos(state), { passive: true });
    window.addEventListener("resize", () => {
      recalcContainerPos(state);
      state.imageHeight = hoverImage.offsetHeight || 180;
    }, { passive: true });
    hoverImage.style.willChange = "transform, opacity";
    const items = Array.from(
      root.querySelectorAll(".nextora-text-list-hover-image__item")
    );
    root.addEventListener("mousemove", (e) => {
      recalcContainerPos(state);
      state.mouseX = e.clientX - state.containerLeft;
      state.mouseY = e.clientY - state.containerTop;
    });
    items.forEach((item, index) => {
      item.addEventListener("mouseenter", () => {
        state.hoveredIndex = index;
        state.isVisible = true;
        item.classList.add("nextora-thli--hover");
        hoverImage.classList.add("nextora-thli--visible");
        hoverImgs.forEach((img) => {
          const idx = parseInt(img.getAttribute("data-thli-index") ?? "", 10);
          if (idx === index) {
            img.classList.add("nextora-thli--active");
          } else {
            img.classList.remove("nextora-thli--active");
          }
        });
      });
      item.addEventListener("mouseleave", () => {
        state.hoveredIndex = null;
        state.isVisible = false;
        item.classList.remove("nextora-thli--hover");
        hoverImage.classList.remove("nextora-thli--visible");
      });
    });
    function animate() {
      state.smoothX = lerp(state.smoothX, state.mouseX, 0.15);
      state.smoothY = lerp(state.smoothY, state.mouseY, 0.15);
      const tx = state.smoothX + 20;
      const ty = state.smoothY - 100;
      state.hoverImage.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      state.hoverImage.style.left = `${state.containerLeft}px`;
      state.hoverImage.style.top = `${state.containerTop}px`;
      state.raf = requestAnimationFrame(animate);
    }
    state.raf = requestAnimationFrame(animate);
    initTextListHoverImageScrollAnimation(root);
  }
  function initTextListHoverImageScrollAnimation(root) {
    if (root.getAttribute("data-nextora-scroll-reveal") !== "1") return;
    if (root.classList.contains("is-visible")) return;
    if (REDUCED_MOTION) {
      root.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
      }
    );
    observer.observe(root);
  }
  function initAllTextListHoverImage() {
    document.querySelectorAll(".wp-block-nextora-text-list-hover-image").forEach((root) => initTextListHoverImageRoot(root));
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAllTextListHoverImage);
  } else {
    initAllTextListHoverImage();
  }
  window.addEventListener("nextora-text-list-hover-image-reinit", () => {
    document.querySelectorAll(".wp-block-nextora-text-list-hover-image").forEach((root) => {
      if (root.hasAttribute(INITED_ATTR)) {
        root.removeAttribute(INITED_ATTR);
      }
      initTextListHoverImageRoot(root);
    });
  });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidmlldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBUZXh0IExpc3QgSG92ZXIgSW1hZ2UgXHUyMDE0IGZyb250LWVuZCBKYXZhU2NyaXB0XG4gKiBIb3ZlciBpbWFnZSBmb2xsb3dzIGN1cnNvciB3aXRoIHNtb290aCBsZXJwLiBTY3JvbGwgYW5pbWF0aW9uIHZpYSBJbnRlcnNlY3Rpb25PYnNlcnZlci5cbiAqL1xuXG5jb25zdCBJTklURURfQVRUUiA9ICdkYXRhLW5leHRvcmEtdGhsaS1pbml0ZWQnO1xuY29uc3QgUkVEVUNFRF9NT1RJT04gPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKS5tYXRjaGVzO1xuY29uc3QgU1VQUE9SVFNfSE9WRVIgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKGhvdmVyOiBob3ZlciknKS5tYXRjaGVzO1xuXG5mdW5jdGlvbiBsZXJwKGE6IG51bWJlciwgYjogbnVtYmVyLCB0OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gYSArIChiIC0gYSkgKiB0O1xufVxuXG5pbnRlcmZhY2UgQmxvY2tTdGF0ZSB7XG4gIHJvb3Q6IEhUTUxFbGVtZW50O1xuICBob3ZlckltYWdlOiBIVE1MRWxlbWVudDtcbiAgaG92ZXJJbWdzOiBIVE1MRWxlbWVudFtdO1xuICBjb250YWluZXJMZWZ0OiBudW1iZXI7XG4gIGNvbnRhaW5lclRvcDogbnVtYmVyO1xuICBpbWFnZUhlaWdodDogbnVtYmVyO1xuICBtb3VzZVg6IG51bWJlcjtcbiAgbW91c2VZOiBudW1iZXI7XG4gIHNtb290aFg6IG51bWJlcjtcbiAgc21vb3RoWTogbnVtYmVyO1xuICBpc1Zpc2libGU6IGJvb2xlYW47XG4gIGhvdmVyZWRJbmRleDogbnVtYmVyIHwgbnVsbDtcbiAgcmFmOiBudW1iZXIgfCBudWxsO1xufVxuXG5mdW5jdGlvbiByZWNhbGNDb250YWluZXJQb3Moc3RhdGU6IEJsb2NrU3RhdGUpOiB2b2lkIHtcbiAgY29uc3QgcmVjdCA9IHN0YXRlLnJvb3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHN0YXRlLmNvbnRhaW5lckxlZnQgPSByZWN0LmxlZnQ7XG4gIHN0YXRlLmNvbnRhaW5lclRvcCA9IHJlY3QudG9wO1xufVxuXG5mdW5jdGlvbiBpbml0VGV4dExpc3RIb3ZlckltYWdlUm9vdChyb290OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICBpZiAocm9vdC5oYXNBdHRyaWJ1dGUoSU5JVEVEX0FUVFIpKSByZXR1cm47XG4gIHJvb3Quc2V0QXR0cmlidXRlKElOSVRFRF9BVFRSLCAnMScpO1xuXG4gIGlmIChSRURVQ0VEX01PVElPTiB8fCAhU1VQUE9SVFNfSE9WRVIpIHtcbiAgICByb290LmNsYXNzTGlzdC5hZGQoJ2lzLXZpc2libGUnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBob3ZlckltYWdlID0gcm9vdC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcbiAgICAnLm5leHRvcmEtdGV4dC1saXN0LWhvdmVyLWltYWdlX19ob3Zlci1pbWFnZScsXG4gICk7XG4gIGNvbnN0IGhvdmVySW1ncyA9IEFycmF5LmZyb20oXG4gICAgcm9vdC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLm5leHRvcmEtdGV4dC1saXN0LWhvdmVyLWltYWdlX19ob3Zlci1pbWcnKSxcbiAgKTtcblxuICBpZiAoIWhvdmVySW1hZ2UgfHwgaG92ZXJJbWdzLmxlbmd0aCA9PT0gMCkge1xuICAgIGluaXRUZXh0TGlzdEhvdmVySW1hZ2VTY3JvbGxBbmltYXRpb24ocm9vdCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc3RhdGU6IEJsb2NrU3RhdGUgPSB7XG4gICAgcm9vdCxcbiAgICBob3ZlckltYWdlLFxuICAgIGhvdmVySW1ncyxcbiAgICBjb250YWluZXJMZWZ0OiAwLFxuICAgIGNvbnRhaW5lclRvcDogMCxcbiAgICBpbWFnZUhlaWdodDogMCxcbiAgICBtb3VzZVg6IDAsXG4gICAgbW91c2VZOiAwLFxuICAgIHNtb290aFg6IDAsXG4gICAgc21vb3RoWTogMCxcbiAgICBpc1Zpc2libGU6IGZhbHNlLFxuICAgIGhvdmVyZWRJbmRleDogbnVsbCxcbiAgICByYWY6IG51bGwsXG4gIH07XG5cbiAgcmVjYWxjQ29udGFpbmVyUG9zKHN0YXRlKTtcbiAgc3RhdGUuaW1hZ2VIZWlnaHQgPSBob3ZlckltYWdlLm9mZnNldEhlaWdodCB8fCAxODA7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHJlY2FsY0NvbnRhaW5lclBvcyhzdGF0ZSksIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICByZWNhbGNDb250YWluZXJQb3Moc3RhdGUpO1xuICAgIHN0YXRlLmltYWdlSGVpZ2h0ID0gaG92ZXJJbWFnZS5vZmZzZXRIZWlnaHQgfHwgMTgwO1xuICB9LCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgaG92ZXJJbWFnZS5zdHlsZS53aWxsQ2hhbmdlID0gJ3RyYW5zZm9ybSwgb3BhY2l0eSc7XG5cbiAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKFxuICAgIHJvb3QucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLXRleHQtbGlzdC1ob3Zlci1pbWFnZV9faXRlbScpLFxuICApO1xuXG4gIHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICByZWNhbGNDb250YWluZXJQb3Moc3RhdGUpO1xuICAgIHN0YXRlLm1vdXNlWCA9IGUuY2xpZW50WCAtIHN0YXRlLmNvbnRhaW5lckxlZnQ7XG4gICAgc3RhdGUubW91c2VZID0gZS5jbGllbnRZIC0gc3RhdGUuY29udGFpbmVyVG9wO1xuICB9KTtcblxuICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgIHN0YXRlLmhvdmVyZWRJbmRleCA9IGluZGV4O1xuICAgICAgc3RhdGUuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbmV4dG9yYS10aGxpLS1ob3ZlcicpO1xuICAgICAgaG92ZXJJbWFnZS5jbGFzc0xpc3QuYWRkKCduZXh0b3JhLXRobGktLXZpc2libGUnKTtcblxuICAgICAgaG92ZXJJbWdzLmZvckVhY2goKGltZykgPT4ge1xuICAgICAgICBjb25zdCBpZHggPSBwYXJzZUludChpbWcuZ2V0QXR0cmlidXRlKCdkYXRhLXRobGktaW5kZXgnKSA/PyAnJywgMTApO1xuICAgICAgICBpZiAoaWR4ID09PSBpbmRleCkge1xuICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCduZXh0b3JhLXRobGktLWFjdGl2ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCduZXh0b3JhLXRobGktLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgIHN0YXRlLmhvdmVyZWRJbmRleCA9IG51bGw7XG4gICAgICBzdGF0ZS5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbmV4dG9yYS10aGxpLS1ob3ZlcicpO1xuICAgICAgaG92ZXJJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCduZXh0b3JhLXRobGktLXZpc2libGUnKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYW5pbWF0ZSgpOiB2b2lkIHtcbiAgICBzdGF0ZS5zbW9vdGhYID0gbGVycChzdGF0ZS5zbW9vdGhYLCBzdGF0ZS5tb3VzZVgsIDAuMTUpO1xuICAgIHN0YXRlLnNtb290aFkgPSBsZXJwKHN0YXRlLnNtb290aFksIHN0YXRlLm1vdXNlWSwgMC4xNSk7XG5cbiAgICBjb25zdCB0eCA9IHN0YXRlLnNtb290aFggKyAyMDtcbiAgICBjb25zdCB0eSA9IHN0YXRlLnNtb290aFkgLSAxMDA7XG5cbiAgICBzdGF0ZS5ob3ZlckltYWdlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3R4fXB4LCAke3R5fXB4LCAwKWA7XG4gICAgc3RhdGUuaG92ZXJJbWFnZS5zdHlsZS5sZWZ0ID0gYCR7c3RhdGUuY29udGFpbmVyTGVmdH1weGA7XG4gICAgc3RhdGUuaG92ZXJJbWFnZS5zdHlsZS50b3AgPSBgJHtzdGF0ZS5jb250YWluZXJUb3B9cHhgO1xuXG4gICAgc3RhdGUucmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9XG5cbiAgc3RhdGUucmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuXG4gIGluaXRUZXh0TGlzdEhvdmVySW1hZ2VTY3JvbGxBbmltYXRpb24ocm9vdCk7XG59XG5cbmZ1bmN0aW9uIGluaXRUZXh0TGlzdEhvdmVySW1hZ2VTY3JvbGxBbmltYXRpb24ocm9vdDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgaWYgKHJvb3QuZ2V0QXR0cmlidXRlKCdkYXRhLW5leHRvcmEtc2Nyb2xsLXJldmVhbCcpICE9PSAnMScpIHJldHVybjtcbiAgaWYgKHJvb3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy12aXNpYmxlJykpIHJldHVybjtcblxuICBpZiAoUkVEVUNFRF9NT1RJT04pIHtcbiAgICByb290LmNsYXNzTGlzdC5hZGQoJ2lzLXZpc2libGUnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpO1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHtcbiAgICAgIHRocmVzaG9sZDogMC4xNSxcbiAgICAgIHJvb3RNYXJnaW46ICcwcHggMHB4IC00MHB4IDBweCcsXG4gICAgfSxcbiAgKTtcblxuICBvYnNlcnZlci5vYnNlcnZlKHJvb3QpO1xufVxuXG5mdW5jdGlvbiBpbml0QWxsVGV4dExpc3RIb3ZlckltYWdlKCk6IHZvaWQge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLndwLWJsb2NrLW5leHRvcmEtdGV4dC1saXN0LWhvdmVyLWltYWdlJylcbiAgICAuZm9yRWFjaCgocm9vdCkgPT4gaW5pdFRleHRMaXN0SG92ZXJJbWFnZVJvb3Qocm9vdCkpO1xufVxuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0QWxsVGV4dExpc3RIb3ZlckltYWdlKTtcbn0gZWxzZSB7XG4gIGluaXRBbGxUZXh0TGlzdEhvdmVySW1hZ2UoKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ25leHRvcmEtdGV4dC1saXN0LWhvdmVyLWltYWdlLXJlaW5pdCcsICgpID0+IHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy53cC1ibG9jay1uZXh0b3JhLXRleHQtbGlzdC1ob3Zlci1pbWFnZScpXG4gICAgLmZvckVhY2goKHJvb3QpID0+IHtcbiAgICAgIGlmIChyb290Lmhhc0F0dHJpYnV0ZShJTklURURfQVRUUikpIHtcbiAgICAgICAgcm9vdC5yZW1vdmVBdHRyaWJ1dGUoSU5JVEVEX0FUVFIpO1xuICAgICAgfVxuICAgICAgaW5pdFRleHRMaXN0SG92ZXJJ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
