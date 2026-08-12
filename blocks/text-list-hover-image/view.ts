export {};

/**
 * Text List Hover Image — front-end JavaScript
 * Hover image follows cursor with smooth lerp. Scroll animation via IntersectionObserver.
 */

const INITED_ATTR = 'data-nextora-thli-inited';
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const SUPPORTS_HOVER = window.matchMedia('(hover: hover)').matches;

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

interface BlockState {
  root: HTMLElement;
  hoverImage: HTMLElement;
  hoverImgs: HTMLElement[];
  containerLeft: number;
  containerTop: number;
  imageHeight: number;
  mouseX: number;
  mouseY: number;
  smoothX: number;
  smoothY: number;
  isVisible: boolean;
  hoveredIndex: number | null;
  raf: number | null;
}

function recalcContainerPos(state: BlockState): void {
  const rect = state.root.getBoundingClientRect();
  state.containerLeft = rect.left;
  state.containerTop = rect.top;
}

function initTextListHoverImageRoot(root: HTMLElement): void {
  if (root.hasAttribute(INITED_ATTR)) return;
  root.setAttribute(INITED_ATTR, '1');

  if (REDUCED_MOTION || !SUPPORTS_HOVER) {
    root.classList.add('is-visible');
    return;
  }

  const hoverImage = root.querySelector<HTMLElement>(
    '.nextora-text-list-hover-image__hover-image',
  );
  const hoverImgs = Array.from(
    root.querySelectorAll<HTMLElement>('.nextora-text-list-hover-image__hover-img'),
  );

  if (!hoverImage || hoverImgs.length === 0) {
    initTextListHoverImageScrollAnimation(root);
    return;
  }

  const state: BlockState = {
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
    raf: null,
  };

  recalcContainerPos(state);
  state.imageHeight = hoverImage.offsetHeight || 180;

  window.addEventListener('scroll', () => recalcContainerPos(state), { passive: true });
  window.addEventListener('resize', () => {
    recalcContainerPos(state);
    state.imageHeight = hoverImage.offsetHeight || 180;
  }, { passive: true });

  hoverImage.style.willChange = 'transform, opacity';

  const items = Array.from(
    root.querySelectorAll<HTMLElement>('.nextora-text-list-hover-image__item'),
  );

  root.addEventListener('mousemove', (e) => {
    recalcContainerPos(state);
    state.mouseX = e.clientX - state.containerLeft;
    state.mouseY = e.clientY - state.containerTop;
  });

  items.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      state.hoveredIndex = index;
      state.isVisible = true;
      item.classList.add('nextora-thli--hover');
      hoverImage.classList.add('nextora-thli--visible');

      hoverImgs.forEach((img) => {
        const idx = parseInt(img.getAttribute('data-thli-index') ?? '', 10);
        if (idx === index) {
          img.classList.add('nextora-thli--active');
        } else {
          img.classList.remove('nextora-thli--active');
        }
      });
    });

    item.addEventListener('mouseleave', () => {
      state.hoveredIndex = null;
      state.isVisible = false;
      item.classList.remove('nextora-thli--hover');
      hoverImage.classList.remove('nextora-thli--visible');
    });
  });

  function animate(): void {
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

function initTextListHoverImageScrollAnimation(root: HTMLElement): void {
  if (root.getAttribute('data-nextora-scroll-reveal') !== '1') return;
  if (root.classList.contains('is-visible')) return;

  if (REDUCED_MOTION) {
    root.classList.add('is-visible');
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    },
  );

  observer.observe(root);
}

function initAllTextListHoverImage(): void {
  document
    .querySelectorAll<HTMLElement>('.wp-block-nextora-text-list-hover-image')
    .forEach((root) => initTextListHoverImageRoot(root));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllTextListHoverImage);
} else {
  initAllTextListHoverImage();
}

window.addEventListener('nextora-text-list-hover-image-reinit', () => {
  document
    .querySelectorAll<HTMLElement>('.wp-block-nextora-text-list-hover-image')
    .forEach((root) => {
      if (root.hasAttribute(INITED_ATTR)) {
        root.removeAttribute(INITED_ATTR);
      }
      initTextListHoverImageRoot(root);
    });
});
