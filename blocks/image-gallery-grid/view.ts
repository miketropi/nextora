/**
 * GSAP: layout-specific hover + scroll reveal for `nextora/image-gallery-grid` (front end).
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const INIT_ATTR = 'data-nextora-igg-gsap-init';

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function hasHover(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(hover: hover)').matches
  );
}

function getLayout(root: HTMLElement): 'bento' | 'editorial' | 'spotlight' | 'classic' {
  if (root.classList.contains('nextora-igg--layout-bento')) {
    return 'bento';
  }
  if (root.classList.contains('nextora-igg--layout-editorial')) {
    return 'editorial';
  }
  if (root.classList.contains('nextora-igg--layout-spotlight')) {
    return 'spotlight';
  }
  return 'classic';
}

function initScrollReveal(root: HTMLElement, layout: ReturnType<typeof getLayout>) {
  if (prefersReducedMotion()) {
    return;
  }
  const items = root.querySelectorAll<HTMLElement>('.nextora-igg__item');
  if (!items.length) {
    return;
  }

  if (layout === 'bento') {
    gsap.from(items, {
      opacity: 0,
      y: 36,
      scale: 0.94,
      rotation: 0.5,
      duration: 0.55,
      stagger: 0.07,
      ease: 'back.out(1.15)',
      scrollTrigger: {
        trigger: root,
        start: 'top 88%',
        once: true,
      },
    });
    return;
  }

  if (layout === 'editorial') {
    items.forEach((item, i) => {
      const fromX = i % 2 === 0 ? -28 : 28;
      gsap.fromTo(
        item,
        { opacity: 0, x: fromX },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            once: true,
          },
        },
      );
    });
  }
}

/** Bento: pop + “lift” + slightly add tile energy (scale img, lift li) */
function bindHoverBento(root: HTMLElement) {
  const items = root.querySelectorAll<HTMLElement>('.nextora-igg__item');
  items.forEach((item) => {
    const img = item.querySelector<HTMLElement>('.nextora-igg__img');
    if (!img) {
      return;
    }
    gsap.set(img, { transformOrigin: '50% 50%', force3D: true });

    const enter = () => {
      // Only animate img + item — keep CSS rotate() on .nextora-igg__media intact
      gsap.killTweensOf([img, item]);
      gsap.to(img, {
        scale: 1.09,
        filter: 'brightness(1.08) saturate(1.08)',
        duration: 0.45,
        ease: 'power2.out',
      });
      gsap.to(item, {
        y: -5,
        filter: 'drop-shadow(0 16px 28px rgba(0, 0, 0, 0.2))',
        duration: 0.4,
        ease: 'power2.out',
      });
    };
    const leave = () => {
      gsap.killTweensOf([img, item]);
      gsap.to(img, {
        scale: 1,
        filter: 'brightness(1) saturate(1)',
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(item, { y: 0, filter: 'none', duration: 0.45, ease: 'power2.out' });
    };
    item.addEventListener('mouseenter', enter);
    item.addEventListener('mouseleave', leave);
  });
}

/** Editorial: subtle, horizontal emphasis — not the same as bento’s pop */
function bindHoverEditorial(root: HTMLElement) {
  const items = root.querySelectorAll<HTMLElement>('.nextora-igg__item');
  items.forEach((item, i) => {
    const media = item.querySelector<HTMLElement>('.nextora-igg__media');
    const img = item.querySelector<HTMLElement>('.nextora-igg__img');
    if (!media || !img) {
      return;
    }
    const dir = i % 2 === 0 ? -1 : 1;
    gsap.set(img, { transformOrigin: '50% 50%', force3D: true });

    const enter = () => {
      gsap.killTweensOf([img, media, item]);
      gsap.to(img, {
        scale: 1.03,
        filter: 'brightness(1.04) contrast(1.02)',
        duration: 0.55,
        ease: 'power1.inOut',
      });
      gsap.to(item, {
        x: dir * 4,
        filter: 'drop-shadow(0 2px 12px rgba(0, 0, 0, 0.08))',
        duration: 0.5,
        ease: 'power2.out',
      });
    };
    const leave = () => {
      gsap.killTweensOf([img, media, item]);
      gsap.to(img, {
        scale: 1,
        filter: 'brightness(1) contrast(1)',
        duration: 0.55,
        ease: 'power1.inOut',
      });
      gsap.to(item, { x: 0, filter: 'none', duration: 0.5, ease: 'power2.out' });
    };
    item.addEventListener('mouseenter', enter);
    item.addEventListener('mouseleave', leave);
  });
}

/** Classic + spotlight: original lift + scale */
function bindHoverDefault(root: HTMLElement) {
  const items = root.querySelectorAll<HTMLElement>('.nextora-igg__item');
  items.forEach((item) => {
    const media = item.querySelector<HTMLElement>('.nextora-igg__media');
    const img = item.querySelector<HTMLElement>('.nextora-igg__img');
    if (!media || !img) {
      return;
    }
    gsap.set(img, { transformOrigin: '50% 50%', force3D: true });
    const enter = () => {
      gsap.killTweensOf([img, item]);
      gsap.to(img, {
        scale: 1.07,
        filter: 'brightness(1.06) saturate(1.05)',
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(item, {
        y: -3,
        filter: 'drop-shadow(0 12px 20px rgba(0, 0, 0, 0.16))',
        duration: 0.45,
        ease: 'power2.out',
      });
    };
    const leave = () => {
      gsap.killTweensOf([img, item]);
      gsap.to(img, {
        scale: 1,
        filter: 'brightness(1) saturate(1)',
        duration: 0.55,
        ease: 'power2.out',
      });
      gsap.to(item, { y: 0, filter: 'none', duration: 0.5, ease: 'power2.out' });
    };
    item.addEventListener('mouseenter', enter);
    item.addEventListener('mouseleave', leave);
  });
}

function initRoot(root: HTMLElement) {
  if (root.getAttribute(INIT_ATTR) === '1') {
    return;
  }
  root.setAttribute(INIT_ATTR, '1');

  const layout = getLayout(root);
  const items = root.querySelectorAll<HTMLElement>('.nextora-igg__item');
  if (!items.length) {
    return;
  }

  if (layout === 'bento' || layout === 'editorial') {
    initScrollReveal(root, layout);
  }

  if (!hasHover() || prefersReducedMotion()) {
    return;
  }
  if (layout === 'bento') {
    bindHoverBento(root);
  } else if (layout === 'editorial') {
    bindHoverEditorial(root);
  } else {
    bindHoverDefault(root);
  }
}

function boot() {
  document.querySelectorAll<HTMLElement>('.nextora-igg').forEach(initRoot);
  ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load' });
  ScrollTrigger.refresh();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}

window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
