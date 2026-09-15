"use strict";
(() => {
  // blocks/advanced-list/view.ts
  function initAdvancedListScrollAnimation() {
    const blocks = document.querySelectorAll('.wp-block-nextora-advanced-list[data-nextora-scroll-reveal="1"]');
    if (!blocks.length) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      blocks.forEach((block) => {
        block.classList.add("is-visible");
      });
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
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
      }
    );
    blocks.forEach((block) => {
      observer.observe(block);
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAdvancedListScrollAnimation);
  } else {
    initAdvancedListScrollAnimation();
  }
  window.addEventListener("nextora-advanced-list-reinit", () => {
    initAdvancedListScrollAnimation();
    document.querySelectorAll('.wp-block-nextora-advanced-list[data-nextora-scroll-reveal="1"]').forEach((el) => {
      if (el.closest(".nextora-primary-nav-portal__mount")) {
        el.classList.add("is-visible");
      }
    });
  });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidmlldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBBZHZhbmNlZCBMaXN0IFx1MjAxNCBmcm9udC1lbmQgSmF2YVNjcmlwdFxuICovXG5cbmZ1bmN0aW9uIGluaXRBZHZhbmNlZExpc3RTY3JvbGxBbmltYXRpb24oKSB7XG4gIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53cC1ibG9jay1uZXh0b3JhLWFkdmFuY2VkLWxpc3RbZGF0YS1uZXh0b3JhLXNjcm9sbC1yZXZlYWw9XCIxXCJdJyk7XG4gIFxuICBpZiAoIWJsb2Nrcy5sZW5ndGgpIHJldHVybjtcbiAgXG4gIC8vIENoZWNrIGZvciByZWR1Y2VkIG1vdGlvbiBwcmVmZXJlbmNlXG4gIGNvbnN0IHByZWZlcnNSZWR1Y2VkTW90aW9uID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJykubWF0Y2hlcztcbiAgXG4gIGlmIChwcmVmZXJzUmVkdWNlZE1vdGlvbikge1xuICAgIC8vIFNraXAgYW5pbWF0aW9uIGlmIHVzZXIgcHJlZmVycyByZWR1Y2VkIG1vdGlvblxuICAgIGJsb2Nrcy5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgLy8gVXNlIEludGVyc2VjdGlvbiBPYnNlcnZlciBmb3Igc2Nyb2xsIGFuaW1hdGlvblxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpO1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpOyAvLyBPbmx5IGFuaW1hdGUgb25jZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHtcbiAgICAgIHRocmVzaG9sZDogMC4yLFxuICAgICAgcm9vdE1hcmdpbjogJzBweCAwcHggLTUwcHggMHB4JyxcbiAgICB9XG4gICk7XG4gIFxuICBibG9ja3MuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGJsb2NrKTtcbiAgfSk7XG59XG5cbi8vIEluaXRpYWxpemUgb24gRE9NIHJlYWR5XG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0QWR2YW5jZWRMaXN0U2Nyb2xsQW5pbWF0aW9uKTtcbn0gZWxzZSB7XG4gIGluaXRBZHZhbmNlZExpc3RTY3JvbGxBbmltYXRpb24oKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ25leHRvcmEtYWR2YW5jZWQtbGlzdC1yZWluaXQnLCAoKSA9PiB7XG4gIGluaXRBZHZhbmNlZExpc3RTY3JvbGxBbmltYXRpb24oKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy53cC1ibG9jay1uZXh0b3JhLWFkdmFuY2VkLWxpc3RbZGF0YS1uZXh0b3JhLXNjcm9sbC1yZXZlYWw9XCIxXCJdJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpZiAoZWwuY2xvc2VzdCgnLm5leHRvcmEtcHJpbWFyeS1uYXYtcG9ydGFsX19tb3VudCcpKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJyk7XG4gICAgfVxuICB9KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7O0FBSUEsV0FBUyxrQ0FBa0M7QUFDekMsVUFBTSxTQUFTLFNBQVMsaUJBQWlCLGlFQUFpRTtBQUUxRyxRQUFJLENBQUMsT0FBTyxPQUFRO0FBR3BCLFVBQU0sdUJBQXVCLE9BQU8sV0FBVyxrQ0FBa0MsRUFBRTtBQUVuRixRQUFJLHNCQUFzQjtBQUV4QixhQUFPLFFBQVEsQ0FBQyxVQUFVO0FBQ3hCLGNBQU0sVUFBVSxJQUFJLFlBQVk7QUFBQSxNQUNsQyxDQUFDO0FBQ0Q7QUFBQSxJQUNGO0FBR0EsVUFBTSxXQUFXLElBQUk7QUFBQSxNQUNuQixDQUFDLFlBQVk7QUFDWCxnQkFBUSxRQUFRLENBQUMsVUFBVTtBQUN6QixjQUFJLE1BQU0sZ0JBQWdCO0FBQ3hCLGtCQUFNLE9BQU8sVUFBVSxJQUFJLFlBQVk7QUFDdkMscUJBQVMsVUFBVSxNQUFNLE1BQU07QUFBQSxVQUNqQztBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxNQUNBO0FBQUEsUUFDRSxXQUFXO0FBQUEsUUFDWCxZQUFZO0FBQUEsTUFDZDtBQUFBLElBQ0Y7QUFFQSxXQUFPLFFBQVEsQ0FBQyxVQUFVO0FBQ3hCLGVBQVMsUUFBUSxLQUFLO0FBQUEsSUFDeEIsQ0FBQztBQUFBLEVBQ0g7QUFHQSxNQUFJLFNBQVMsZUFBZSxXQUFXO0FBQ3JDLGFBQVMsaUJBQWlCLG9CQUFvQiwrQkFBK0I7QUFBQSxFQUMvRSxPQUFPO0FBQ0wsb0NBQWdDO0FBQUEsRUFDbEM7QUFFQSxTQUFPLGlCQUFpQixnQ0FBZ0MsTUFBTTtBQUM1RCxvQ0FBZ0M7QUFDaEMsYUFBUyxpQkFBOEIsaUVBQWlFLEVBQUUsUUFBUSxDQUFDLE9BQU87QUFDeEgsVUFBSSxHQUFHLFFBQVEsb0NBQW9DLEdBQUc7QUFDcEQsV0FBRyxVQUFVLElBQUksWUFBWTtBQUFBLE1BQy9CO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
