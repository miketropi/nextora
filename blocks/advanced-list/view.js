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
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidmlldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBBZHZhbmNlZCBMaXN0IFx1MjAxNCBmcm9udC1lbmQgSmF2YVNjcmlwdFxuICovXG5cbmZ1bmN0aW9uIGluaXRBZHZhbmNlZExpc3RTY3JvbGxBbmltYXRpb24oKSB7XG4gIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53cC1ibG9jay1uZXh0b3JhLWFkdmFuY2VkLWxpc3RbZGF0YS1uZXh0b3JhLXNjcm9sbC1yZXZlYWw9XCIxXCJdJyk7XG4gIFxuICBpZiAoIWJsb2Nrcy5sZW5ndGgpIHJldHVybjtcbiAgXG4gIC8vIENoZWNrIGZvciByZWR1Y2VkIG1vdGlvbiBwcmVmZXJlbmNlXG4gIGNvbnN0IHByZWZlcnNSZWR1Y2VkTW90aW9uID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJykubWF0Y2hlcztcbiAgXG4gIGlmIChwcmVmZXJzUmVkdWNlZE1vdGlvbikge1xuICAgIC8vIFNraXAgYW5pbWF0aW9uIGlmIHVzZXIgcHJlZmVycyByZWR1Y2VkIG1vdGlvblxuICAgIGJsb2Nrcy5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgLy8gVXNlIEludGVyc2VjdGlvbiBPYnNlcnZlciBmb3Igc2Nyb2xsIGFuaW1hdGlvblxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpO1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpOyAvLyBPbmx5IGFuaW1hdGUgb25jZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHtcbiAgICAgIHRocmVzaG9sZDogMC4yLFxuICAgICAgcm9vdE1hcmdpbjogJzBweCAwcHggLTUwcHggMHB4JyxcbiAgICB9XG4gICk7XG4gIFxuICBibG9ja3MuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGJsb2NrKTtcbiAgfSk7XG59XG5cbi8vIEluaXRpYWxpemUgb24gRE9NIHJlYWR5XG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0QWR2YW5jZWRMaXN0U2Nyb2xsQW5pbWF0aW9uKTtcbn0gZWxzZSB7XG4gIGluaXRBZHZhbmNlZExpc3RTY3JvbGxBbmltYXRpb24oKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7OztBQUlBLFdBQVMsa0NBQWtDO0FBQ3pDLFVBQU0sU0FBUyxTQUFTLGlCQUFpQixpRUFBaUU7QUFFMUcsUUFBSSxDQUFDLE9BQU8sT0FBUTtBQUdwQixVQUFNLHVCQUF1QixPQUFPLFdBQVcsa0NBQWtDLEVBQUU7QUFFbkYsUUFBSSxzQkFBc0I7QUFFeEIsYUFBTyxRQUFRLENBQUMsVUFBVTtBQUN4QixjQUFNLFVBQVUsSUFBSSxZQUFZO0FBQUEsTUFDbEMsQ0FBQztBQUNEO0FBQUEsSUFDRjtBQUdBLFVBQU0sV0FBVyxJQUFJO0FBQUEsTUFDbkIsQ0FBQyxZQUFZO0FBQ1gsZ0JBQVEsUUFBUSxDQUFDLFVBQVU7QUFDekIsY0FBSSxNQUFNLGdCQUFnQjtBQUN4QixrQkFBTSxPQUFPLFVBQVUsSUFBSSxZQUFZO0FBQ3ZDLHFCQUFTLFVBQVUsTUFBTSxNQUFNO0FBQUEsVUFDakM7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQUEsTUFDQTtBQUFBLFFBQ0UsV0FBVztBQUFBLFFBQ1gsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxJQUNGO0FBRUEsV0FBTyxRQUFRLENBQUMsVUFBVTtBQUN4QixlQUFTLFFBQVEsS0FBSztBQUFBLElBQ3hCLENBQUM7QUFBQSxFQUNIO0FBR0EsTUFBSSxTQUFTLGVBQWUsV0FBVztBQUNyQyxhQUFTLGlCQUFpQixvQkFBb0IsK0JBQStCO0FBQUEsRUFDL0UsT0FBTztBQUNMLG9DQUFnQztBQUFBLEVBQ2xDOyIsCiAgIm5hbWVzIjogW10KfQo=
