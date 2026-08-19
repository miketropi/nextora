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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidmlldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IHt9O1xuXG4vKipcbiAqIFRleHQgTGlzdCBIb3ZlciBJbWFnZSBcdTIwMTQgZnJvbnQtZW5kIEphdmFTY3JpcHRcbiAqIEhvdmVyIGltYWdlIGZvbGxvd3MgY3Vyc29yIHdpdGggc21vb3RoIGxlcnAuIFNjcm9sbCBhbmltYXRpb24gdmlhIEludGVyc2VjdGlvbk9ic2VydmVyLlxuICovXG5cbmNvbnN0IElOSVRFRF9BVFRSID0gJ2RhdGEtbmV4dG9yYS10aGxpLWluaXRlZCc7XG5jb25zdCBSRURVQ0VEX01PVElPTiA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpLm1hdGNoZXM7XG5jb25zdCBTVVBQT1JUU19IT1ZFUiA9IHdpbmRvdy5tYXRjaE1lZGlhKCcoaG92ZXI6IGhvdmVyKScpLm1hdGNoZXM7XG5cbmZ1bmN0aW9uIGxlcnAoYTogbnVtYmVyLCBiOiBudW1iZXIsIHQ6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBhICsgKGIgLSBhKSAqIHQ7XG59XG5cbmludGVyZmFjZSBCbG9ja1N0YXRlIHtcbiAgcm9vdDogSFRNTEVsZW1lbnQ7XG4gIGhvdmVySW1hZ2U6IEhUTUxFbGVtZW50O1xuICBob3ZlckltZ3M6IEhUTUxFbGVtZW50W107XG4gIGNvbnRhaW5lckxlZnQ6IG51bWJlcjtcbiAgY29udGFpbmVyVG9wOiBudW1iZXI7XG4gIGltYWdlSGVpZ2h0OiBudW1iZXI7XG4gIG1vdXNlWDogbnVtYmVyO1xuICBtb3VzZVk6IG51bWJlcjtcbiAgc21vb3RoWDogbnVtYmVyO1xuICBzbW9vdGhZOiBudW1iZXI7XG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcbiAgaG92ZXJlZEluZGV4OiBudW1iZXIgfCBudWxsO1xuICByYWY6IG51bWJlciB8IG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlY2FsY0NvbnRhaW5lclBvcyhzdGF0ZTogQmxvY2tTdGF0ZSk6IHZvaWQge1xuICBjb25zdCByZWN0ID0gc3RhdGUucm9vdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgc3RhdGUuY29udGFpbmVyTGVmdCA9IHJlY3QubGVmdDtcbiAgc3RhdGUuY29udGFpbmVyVG9wID0gcmVjdC50b3A7XG59XG5cbmZ1bmN0aW9uIGluaXRUZXh0TGlzdEhvdmVySW1hZ2VSb290KHJvb3Q6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gIGlmIChyb290Lmhhc0F0dHJpYnV0ZShJTklURURfQVRUUikpIHJldHVybjtcbiAgcm9vdC5zZXRBdHRyaWJ1dGUoSU5JVEVEX0FUVFIsICcxJyk7XG5cbiAgaWYgKFJFRFVDRURfTU9USU9OIHx8ICFTVVBQT1JUU19IT1ZFUikge1xuICAgIHJvb3QuY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGhvdmVySW1hZ2UgPSByb290LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFxuICAgICcubmV4dG9yYS10ZXh0LWxpc3QtaG92ZXItaW1hZ2VfX2hvdmVyLWltYWdlJyxcbiAgKTtcbiAgY29uc3QgaG92ZXJJbWdzID0gQXJyYXkuZnJvbShcbiAgICByb290LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS10ZXh0LWxpc3QtaG92ZXItaW1hZ2VfX2hvdmVyLWltZycpLFxuICApO1xuXG4gIGlmICghaG92ZXJJbWFnZSB8fCBob3ZlckltZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgaW5pdFRleHRMaXN0SG92ZXJJbWFnZVNjcm9sbEFuaW1hdGlvbihyb290KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzdGF0ZTogQmxvY2tTdGF0ZSA9IHtcbiAgICByb290LFxuICAgIGhvdmVySW1hZ2UsXG4gICAgaG92ZXJJbWdzLFxuICAgIGNvbnRhaW5lckxlZnQ6IDAsXG4gICAgY29udGFpbmVyVG9wOiAwLFxuICAgIGltYWdlSGVpZ2h0OiAwLFxuICAgIG1vdXNlWDogMCxcbiAgICBtb3VzZVk6IDAsXG4gICAgc21vb3RoWDogMCxcbiAgICBzbW9vdGhZOiAwLFxuICAgIGlzVmlzaWJsZTogZmFsc2UsXG4gICAgaG92ZXJlZEluZGV4OiBudWxsLFxuICAgIHJhZjogbnVsbCxcbiAgfTtcblxuICByZWNhbGNDb250YWluZXJQb3Moc3RhdGUpO1xuICBzdGF0ZS5pbWFnZUhlaWdodCA9IGhvdmVySW1hZ2Uub2Zmc2V0SGVpZ2h0IHx8IDE4MDtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4gcmVjYWxjQ29udGFpbmVyUG9zKHN0YXRlKSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIHJlY2FsY0NvbnRhaW5lclBvcyhzdGF0ZSk7XG4gICAgc3RhdGUuaW1hZ2VIZWlnaHQgPSBob3ZlckltYWdlLm9mZnNldEhlaWdodCB8fCAxODA7XG4gIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICBob3ZlckltYWdlLnN0eWxlLndpbGxDaGFuZ2UgPSAndHJhbnNmb3JtLCBvcGFjaXR5JztcblxuICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oXG4gICAgcm9vdC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLm5leHRvcmEtdGV4dC1saXN0LWhvdmVyLWltYWdlX19pdGVtJyksXG4gICk7XG5cbiAgcm9vdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgIHJlY2FsY0NvbnRhaW5lclBvcyhzdGF0ZSk7XG4gICAgc3RhdGUubW91c2VYID0gZS5jbGllbnRYIC0gc3RhdGUuY29udGFpbmVyTGVmdDtcbiAgICBzdGF0ZS5tb3VzZVkgPSBlLmNsaWVudFkgLSBzdGF0ZS5jb250YWluZXJUb3A7XG4gIH0pO1xuXG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgc3RhdGUuaG92ZXJlZEluZGV4ID0gaW5kZXg7XG4gICAgICBzdGF0ZS5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCduZXh0b3JhLXRobGktLWhvdmVyJyk7XG4gICAgICBob3ZlckltYWdlLmNsYXNzTGlzdC5hZGQoJ25leHRvcmEtdGhsaS0tdmlzaWJsZScpO1xuXG4gICAgICBob3ZlckltZ3MuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkeCA9IHBhcnNlSW50KGltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGhsaS1pbmRleCcpID8/ICcnLCAxMCk7XG4gICAgICAgIGlmIChpZHggPT09IGluZGV4KSB7XG4gICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ25leHRvcmEtdGhsaS0tYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoJ25leHRvcmEtdGhsaS0tYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgc3RhdGUuaG92ZXJlZEluZGV4ID0gbnVsbDtcbiAgICAgIHN0YXRlLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCduZXh0b3JhLXRobGktLWhvdmVyJyk7XG4gICAgICBob3ZlckltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ25leHRvcmEtdGhsaS0tdmlzaWJsZScpO1xuICAgIH0pO1xuICB9KTtcblxuICBmdW5jdGlvbiBhbmltYXRlKCk6IHZvaWQge1xuICAgIHN0YXRlLnNtb290aFggPSBsZXJwKHN0YXRlLnNtb290aFgsIHN0YXRlLm1vdXNlWCwgMC4xNSk7XG4gICAgc3RhdGUuc21vb3RoWSA9IGxlcnAoc3RhdGUuc21vb3RoWSwgc3RhdGUubW91c2VZLCAwLjE1KTtcblxuICAgIGNvbnN0IHR4ID0gc3RhdGUuc21vb3RoWCArIDIwO1xuICAgIGNvbnN0IHR5ID0gc3RhdGUuc21vb3RoWSAtIDEwMDtcblxuICAgIHN0YXRlLmhvdmVySW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dHh9cHgsICR7dHl9cHgsIDApYDtcbiAgICBzdGF0ZS5ob3ZlckltYWdlLnN0eWxlLmxlZnQgPSBgJHtzdGF0ZS5jb250YWluZXJMZWZ0fXB4YDtcbiAgICBzdGF0ZS5ob3ZlckltYWdlLnN0eWxlLnRvcCA9IGAke3N0YXRlLmNvbnRhaW5lclRvcH1weGA7XG5cbiAgICBzdGF0ZS5yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH1cblxuICBzdGF0ZS5yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG5cbiAgaW5pdFRleHRMaXN0SG92ZXJJbWFnZVNjcm9sbEFuaW1hdGlvbihyb290KTtcbn1cblxuZnVuY3Rpb24gaW5pdFRleHRMaXN0SG92ZXJJbWFnZVNjcm9sbEFuaW1hdGlvbihyb290OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICBpZiAocm9vdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dG9yYS1zY3JvbGwtcmV2ZWFsJykgIT09ICcxJykgcmV0dXJuO1xuICBpZiAocm9vdC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLXZpc2libGUnKSkgcmV0dXJuO1xuXG4gIGlmIChSRURVQ0VEX01PVElPTikge1xuICAgIHJvb3QuY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJyk7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAge1xuICAgICAgdGhyZXNob2xkOiAwLjE1LFxuICAgICAgcm9vdE1hcmdpbjogJzBweCAwcHggLTQwcHggMHB4JyxcbiAgICB9LFxuICApO1xuXG4gIG9ic2VydmVyLm9ic2VydmUocm9vdCk7XG59XG5cbmZ1bmN0aW9uIGluaXRBbGxUZXh0TGlzdEhvdmVySW1hZ2UoKTogdm9pZCB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcud3AtYmxvY2stbmV4dG9yYS10ZXh0LWxpc3QtaG92ZXItaW1hZ2UnKVxuICAgIC5mb3JFYWNoKChyb290KSA9PiBpbml0VGV4dExpc3RIb3ZlckltYWdlUm9vdChyb290KSk7XG59XG5cbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRBbGxUZXh0TGlzdEhvdmVySW1hZ2UpO1xufSBlbHNlIHtcbiAgaW5pdEFsbFRleHRMaXN0SG92ZXJJbWFnZSgpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbmV4dG9yYS10ZXh0LWxpc3QtaG92ZXItaW1hZ2UtcmVpbml0JywgKCkgPT4ge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLndwLWJsb2NrLW5leHRvcmEtdGV4dC1saXN0LWhvdmVyLWltYWdlJylcbiAgICAuZm9yRWFjaCgocm9vdCkgPT4ge1xuICAgICAgaWYgKHJvb3QuaGFzQXR0cmlidXRlKElOSVRFRF9BVFRSKSkge1xuICAgICAgICByb290LnJlbW92ZUF0dHJpYnV0ZShJTklURURfQVRUUik7XG4gICAgICB9XG4gICAgICBpbml0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
