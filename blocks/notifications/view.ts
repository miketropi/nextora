/**
 * nextora/notifications — front-end view script.
 *
 * Handles dismiss with GSAP slide-up + fade-out animation.
 * Dismissal state is persisted in localStorage for 24 hours.
 */
import gsap from 'gsap';

export {};

const DISMISS_ATTR = 'data-nextora-notif-dismiss';
const STORAGE_PREFIX = 'nextora-notif-dismissed-';
const TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

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

function isDismissed(id: string): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + id);
    if (!raw) return false;
    const data = JSON.parse(raw);
    return Date.now() < data.expires;
  } catch {
    return false;
  }
}

function setDismissed(id: string): void {
  try {
    localStorage.setItem(
      STORAGE_PREFIX + id,
      JSON.stringify({ expires: Date.now() + TTL_MS }),
    );
  } catch {
    // Storage full or unavailable — silently ignore
  }
}

// ---------------------------------------------------------------------------
// Dismiss animation
// ---------------------------------------------------------------------------

function dismissBanner(banner: HTMLElement, btn: HTMLButtonElement): void {
  const id = btn.getAttribute(DISMISS_ATTR);
  if (!id) return;

  if (prefersReducedMotion()) {
    banner.style.display = 'none';
  } else {
    gsap.to(banner, {
      height: 0,
      opacity: 0,
      marginTop: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        banner.style.display = 'none';
      },
    });
  }

  setDismissed(id);
}

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------

function boot(): void {
  document
    .querySelectorAll<HTMLButtonElement>(`[${DISMISS_ATTR}]`)
    .forEach((btn) => {
      const id = btn.getAttribute(DISMISS_ATTR);
      if (!id) return;

      // Check if previously dismissed
      const banner = btn.closest<HTMLElement>('.nextora-notif');
      if (!banner) return;

      if (isDismissed(id)) {
        banner.style.display = 'none';
        return;
      }

      btn.addEventListener('click', () => dismissBanner(banner, btn));
    });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
