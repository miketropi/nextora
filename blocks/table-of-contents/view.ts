/**
 * nextora/table-of-contents — front-end view script.
 *
 * Scans a configurable container for headings, builds a nested TOC list,
 * applies GSAP-powered scroll-spy with smooth active-state transitions,
 * and handles smooth-scroll clicks.
 */
import gsap from 'gsap';

export {};

const INIT_ATTR = 'data-nextora-toc-inited';

interface TocItem {
  el: HTMLElement;
  level: number;
  id: string;
  text: string;
  children: TocItem[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// ---------------------------------------------------------------------------
// Build nested tree from flat heading list
// ---------------------------------------------------------------------------

function buildTree(headings: { el: HTMLElement; level: number; id: string; text: string }[]): TocItem[] {
  const out: TocItem[] = [];
  const stack: TocItem[] = [];

  for (const h of headings) {
    const node: TocItem = { ...h, children: [] };

    while (stack.length && stack[stack.length - 1].level >= h.level) {
      stack.pop();
    }

    if (!stack.length) {
      out.push(node);
    } else {
      stack[stack.length - 1].children.push(node);
    }

    stack.push(node);
  }

  return out;
}

// ---------------------------------------------------------------------------
// Render TOC list DOM from tree
// ---------------------------------------------------------------------------

function renderList(tree: TocItem[], listEl: HTMLOListElement | HTMLUListElement, baseLevel: number): void {
  for (const item of tree) {
    const li = document.createElement('li');
    const depth = Math.max(0, item.level - baseLevel);
    li.className = `nextora-toc__item nextora-toc__item--h${item.level} nextora-toc__item--depth-${depth}`;

    const a = document.createElement('a');
    a.className = 'nextora-toc__link';
    a.href = `#${item.id}`;
    a.textContent = item.text;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(item.id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', `#${item.id}`);
      }
    });

    li.appendChild(a);

    if (item.children.length > 0) {
      const childList = document.createElement(listEl.tagName.toLowerCase()) as HTMLOListElement | HTMLUListElement;
      childList.className = 'nextora-toc__list';
      renderList(item.children, childList, baseLevel);
      li.appendChild(childList);
    }

    listEl.appendChild(li);
  }
}

// ---------------------------------------------------------------------------
// GSAP-powered scroll-spy
// ---------------------------------------------------------------------------

const ACTIVE_BORDER_COLOR = 'var(--wp--preset--color--primary, currentColor)';
const INACTIVE_BORDER_COLOR = 'transparent';

function setupScrollSpy(root: HTMLElement, headingEls: HTMLElement[]): void {
  const links = root.querySelectorAll<HTMLAnchorElement>('.nextora-toc__link');
  if (!links.length) return;

  const idToLink = new Map<string, HTMLAnchorElement>();
  const idToItem = new Map<string, HTMLElement>();

  for (const link of links) {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const id = href.slice(1);
      idToLink.set(id, link);
      idToItem.set(id, link.parentElement as HTMLElement);
    }
  }

  let activeId: string | null = null;
  const reduceMotion = prefersReducedMotion();

  function deactivate(id: string): void {
    const item = idToItem.get(id);
    const link = idToLink.get(id);
    if (!item || !link) return;

    gsap.killTweensOf([item, link]);

    if (reduceMotion) {
      item.classList.remove('is-active');
      return;
    }

    gsap.to(item, {
      borderLeftColor: INACTIVE_BORDER_COLOR,
      duration: 0.25,
      ease: 'power2.out',
    });
    gsap.to(link, {
      opacity: 0.62,
      fontWeight: '400',
      duration: 0.25,
      ease: 'power2.out',
    });
  }

  function activate(id: string): void {
    const item = idToItem.get(id);
    const link = idToLink.get(id);
    if (!item || !link) return;

    gsap.killTweensOf([item, link]);

    if (reduceMotion) {
      item.classList.add('is-active');
      return;
    }

    // Animate left border to primary color
    gsap.to(item, {
      borderLeftColor: ACTIVE_BORDER_COLOR,
      duration: 0.3,
      ease: 'power2.out',
    });
    // Subtle background pulse
    gsap.fromTo(
      item,
      { backgroundColor: 'rgba(0,0,0,0)' },
      {
        backgroundColor: 'rgba(0,0,0,0.025)',
        duration: 0.35,
        ease: 'power2.out',
      },
    );
    // Fade link to full opacity + medium weight
    gsap.to(link, {
      opacity: 1,
      fontWeight: '500',
      duration: 0.3,
      ease: 'power2.out',
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id && id !== activeId) {
            if (activeId) deactivate(activeId);
            activate(id);
            activeId = id;
          }
          break;
        }
      }
    },
    {
      rootMargin: '-10% 0px -70% 0px',
      threshold: 0,
    },
  );

  for (const el of headingEls) {
    observer.observe(el);
  }
}

// ---------------------------------------------------------------------------
// Entrance animation
// ---------------------------------------------------------------------------

function animateEntrance(root: HTMLElement): void {
  if (prefersReducedMotion()) return;

  gsap.from(root, {
    opacity: 0,
    y: 16,
    duration: 0.55,
    ease: 'power3.out',
    delay: 0.15,
  });
}

// ---------------------------------------------------------------------------
// Collapsible toggle
// ---------------------------------------------------------------------------

function setupCollapsible(root: HTMLElement): void {
  const toggle = root.querySelector<HTMLButtonElement>('.nextora-toc__toggle');
  const nav = root.querySelector<HTMLElement>('.nextora-toc__nav');

  if (!toggle || !nav) return;

  // Collapse/expand with GSAP for smooth height animation
  const reduceMotion = prefersReducedMotion();

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));

    if (reduceMotion) {
      nav.hidden = !expanded;
      return;
    }

    if (expanded) {
      // Collapse
      gsap.to(nav, {
        height: 0,
        opacity: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => {
          nav.hidden = true;
        },
      });
    } else {
      // Expand — measure natural height first
      nav.hidden = false;
      const naturalHeight = nav.scrollHeight;
      gsap.fromTo(
        nav,
        { height: 0, opacity: 0 },
        {
          height: naturalHeight,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            gsap.set(nav, { height: 'auto', clearProps: 'height' });
          },
        },
      );
    }
  });
}

// ---------------------------------------------------------------------------
// Main init per root
// ---------------------------------------------------------------------------

function initRoot(root: HTMLElement): void {
  if (root.getAttribute(INIT_ATTR) === '1') return;
  root.setAttribute(INIT_ATTR, '1');

  const selector = root.getAttribute('data-nextora-toc-selector') || '.wp-block-post-content';
  const listStyle = root.getAttribute('data-nextora-toc-list-style') || 'ul';
  const levelsRaw = root.getAttribute('data-nextora-toc-levels') || '[1,2,3,4,5,6]';
  const collapsible = root.getAttribute('data-nextora-toc-collapsible') === '1';

  let levels: number[];
  try {
    levels = JSON.parse(levelsRaw) as number[];
  } catch {
    levels = [1, 2, 3, 4, 5, 6];
  }

  const container = document.querySelector<HTMLElement>(selector);
  if (!container) return;

  // Collect headings
  const headingSelector = levels.map((l) => `h${l}`).join(',');
  const headingEls = Array.from(container.querySelectorAll<HTMLElement>(headingSelector));

  if (!headingEls.length) return;

  // Ensure each heading has an id
  const headings = headingEls.map((el) => {
    let id = el.id;
    if (!id) {
      id = slugify(el.textContent || 'heading');
      let suffix = 0;
      let candidate = id;
      while (document.getElementById(candidate)) {
        suffix++;
        candidate = `${id}-${suffix}`;
      }
      id = candidate;
      el.id = id;
    }
    return {
      el,
      level: parseInt(el.tagName.slice(1), 10),
      id,
      text: el.textContent?.trim() || '',
    };
  });

  const tree = buildTree(headings);
  if (!tree.length) return;

  // Find the list element
  const listEl: HTMLOListElement | HTMLUListElement | null = root.querySelector('.nextora-toc__list') as HTMLOListElement | HTMLUListElement | null;
  if (!listEl) return;

  // Render
  renderList(tree, listEl, tree[0].level);

  // Entrance animation
  animateEntrance(root);

  // Scroll-spy
  setupScrollSpy(root, headingEls);

  // Collapsible
  if (collapsible) {
    setupCollapsible(root);
  }
}

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------

function boot(): void {
  document.querySelectorAll<HTMLElement>('.nextora-toc').forEach(initRoot);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
