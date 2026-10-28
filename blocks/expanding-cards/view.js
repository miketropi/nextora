"use strict";
(() => {
  // blocks/expanding-cards/view.ts
  var INITED_ATTR = "data-nextora-excards-inited";
  var REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function initExpandingCardScroll(root) {
    root.classList.add("has-scroll-animation");
    if (REDUCED_MOTION) {
      root.classList.add("is-visible");
      return;
    }
    if (root.getAttribute("data-nextora-scroll-reveal") !== "1") {
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
  function initRoot(root) {
    if (root.hasAttribute(INITED_ATTR)) return;
    root.setAttribute(INITED_ATTR, "1");
    initExpandingCardScroll(root);
  }
  function initAll() {
    document.querySelectorAll(".wp-block-nextora-expanding-cards").forEach((root) => initRoot(root));
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
  window.addEventListener("nextora-expanding-cards-reinit", () => {
    document.querySelectorAll(".wp-block-nextora-expanding-cards").forEach((root) => {
      if (root.hasAttribute(INITED_ATTR)) {
        root.removeAttribute(INITED_ATTR);
      }
      initRoot(root);
    });
  });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidmlldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IHt9O1xuXG4vKipcbiAqIEV4cGFuZGluZyBDYXJkcyBcdTIwMTQgZnJvbnQtZW5kIHNjcm9sbCBhbmltYXRpb24uXG4gKiBVc2VzIEludGVyc2VjdGlvbk9ic2VydmVyIGZvciBzdGFnZ2VyZWQgY2FyZCByZXZlYWwuXG4gKi9cblxuY29uc3QgSU5JVEVEX0FUVFIgPSAnZGF0YS1uZXh0b3JhLWV4Y2FyZHMtaW5pdGVkJztcbmNvbnN0IFJFRFVDRURfTU9USU9OID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJykubWF0Y2hlcztcblxuZnVuY3Rpb24gaW5pdEV4cGFuZGluZ0NhcmRTY3JvbGwocm9vdDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgcm9vdC5jbGFzc0xpc3QuYWRkKCdoYXMtc2Nyb2xsLWFuaW1hdGlvbicpO1xuXG4gIGlmIChSRURVQ0VEX01PVElPTikge1xuICAgIHJvb3QuY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChyb290LmdldEF0dHJpYnV0ZSgnZGF0YS1uZXh0b3JhLXNjcm9sbC1yZXZlYWwnKSAhPT0gJzEnKSB7XG4gICAgcm9vdC5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2lzLXZpc2libGUnKTtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICB7XG4gICAgICB0aHJlc2hvbGQ6IDAuMTUsXG4gICAgICByb290TWFyZ2luOiAnMHB4IDBweCAtNDBweCAwcHgnLFxuICAgIH0sXG4gICk7XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShyb290KTtcbn1cblxuZnVuY3Rpb24gaW5pdFJvb3Qocm9vdDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgaWYgKHJvb3QuaGFzQXR0cmlidXRlKElOSVRFRF9BVFRSKSkgcmV0dXJuO1xuICByb290LnNldEF0dHJpYnV0ZShJTklURURfQVRUUiwgJzEnKTtcbiAgaW5pdEV4cGFuZGluZ0NhcmRTY3JvbGwocm9vdCk7XG59XG5cbmZ1bmN0aW9uIGluaXRBbGwoKTogdm9pZCB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcud3AtYmxvY2stbmV4dG9yYS1leHBhbmRpbmctY2FyZHMnKVxuICAgIC5mb3JFYWNoKChyb290KSA9PiBpbml0Um9vdChyb290KSk7XG59XG5cbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRBbGwpO1xufSBlbHNlIHtcbiAgaW5pdEFsbCgpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbmV4dG9yYS1leHBhbmRpbmctY2FyZHMtcmVpbml0JywgKCkgPT4ge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLndwLWJsb2NrLW5leHRvcmEtZXhwYW5kaW5nLWNhcmRzJylcbiAgICAuZm9yRWFjaCgocm9vdCkgPT4ge1xuICAgICAgaWYgKHJvb3QuaGFzQXR0cmlidXRlKElOSVRFRF9BVFRSKSkge1xuICAgICAgICByb290LnJlbW92ZUF0dHJpYnV0ZShJTklURURfQVRUUik7XG4gICAgICB9XG4gICAgICBpbml0Um9vdChyb290KTtcbiAgICB9KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7O0FBT0EsTUFBTSxjQUFjO0FBQ3BCLE1BQU0saUJBQWlCLE9BQU8sV0FBVyxrQ0FBa0MsRUFBRTtBQUU3RSxXQUFTLHdCQUF3QixNQUF5QjtBQUN4RCxTQUFLLFVBQVUsSUFBSSxzQkFBc0I7QUFFekMsUUFBSSxnQkFBZ0I7QUFDbEIsV0FBSyxVQUFVLElBQUksWUFBWTtBQUMvQjtBQUFBLElBQ0Y7QUFFQSxRQUFJLEtBQUssYUFBYSw0QkFBNEIsTUFBTSxLQUFLO0FBQzNELFdBQUssVUFBVSxJQUFJLFlBQVk7QUFDL0I7QUFBQSxJQUNGO0FBRUEsVUFBTSxXQUFXLElBQUk7QUFBQSxNQUNuQixDQUFDLFlBQVk7QUFDWCxnQkFBUSxRQUFRLENBQUMsVUFBVTtBQUN6QixjQUFJLE1BQU0sZ0JBQWdCO0FBQ3hCLGtCQUFNLE9BQU8sVUFBVSxJQUFJLFlBQVk7QUFDdkMscUJBQVMsVUFBVSxNQUFNLE1BQU07QUFBQSxVQUNqQztBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxNQUNBO0FBQUEsUUFDRSxXQUFXO0FBQUEsUUFDWCxZQUFZO0FBQUEsTUFDZDtBQUFBLElBQ0Y7QUFFQSxhQUFTLFFBQVEsSUFBSTtBQUFBLEVBQ3ZCO0FBRUEsV0FBUyxTQUFTLE1BQXlCO0FBQ3pDLFFBQUksS0FBSyxhQUFhLFdBQVcsRUFBRztBQUNwQyxTQUFLLGFBQWEsYUFBYSxHQUFHO0FBQ2xDLDRCQUF3QixJQUFJO0FBQUEsRUFDOUI7QUFFQSxXQUFTLFVBQWdCO0FBQ3ZCLGFBQ0csaUJBQThCLG1DQUFtQyxFQUNqRSxRQUFRLENBQUMsU0FBUyxTQUFTLElBQUksQ0FBQztBQUFBLEVBQ3JDO0FBRUEsTUFBSSxTQUFTLGVBQWUsV0FBVztBQUNyQyxhQUFTLGlCQUFpQixvQkFBb0IsT0FBTztBQUFBLEVBQ3ZELE9BQU87QUFDTCxZQUFRO0FBQUEsRUFDVjtBQUVBLFNBQU8saUJBQWlCLGtDQUFrQyxNQUFNO0FBQzlELGFBQ0csaUJBQThCLG1DQUFtQyxFQUNqRSxRQUFRLENBQUMsU0FBUztBQUNqQixVQUFJLEtBQUssYUFBYSxXQUFXLEdBQUc7QUFDbEMsYUFBSyxnQkFBZ0IsV0FBVztBQUFBLE1BQ2xDO0FBQ0EsZUFBUyxJQUFJO0FBQUEsSUFDZixDQUFDO0FBQUEsRUFDTCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
