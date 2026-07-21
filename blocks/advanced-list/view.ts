/**
 * Advanced List — front-end JavaScript
 */

function initAdvancedListScrollAnimation() {
  const blocks = document.querySelectorAll('.wp-block-nextora-advanced-list[data-nextora-scroll-reveal="1"]');
  
  if (!blocks.length) return;
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    // Skip animation if user prefers reduced motion
    blocks.forEach((block) => {
      block.classList.add('is-visible');
    });
    return;
  }
  
  // Use Intersection Observer for scroll animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    }
  );
  
  blocks.forEach((block) => {
    observer.observe(block);
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAdvancedListScrollAnimation);
} else {
  initAdvancedListScrollAnimation();
}

window.addEventListener('nextora-advanced-list-reinit', () => {
  initAdvancedListScrollAnimation();
  document.querySelectorAll<HTMLElement>('.wp-block-nextora-advanced-list[data-nextora-scroll-reveal="1"]').forEach((el) => {
    if (el.closest('.nextora-primary-nav-portal__mount')) {
      el.classList.add('is-visible');
    }
  });
});
