import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Scrolls the window to the top on every route change, so new pages
 * always open at (0, 0) instead of inheriting the previous scroll
 * position. Skipped when the URL has a hash (#section) so in-page
 * anchor links keep scrolling to their target as normal.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;

    const root = document.documentElement;
    const prevBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.style.scrollBehavior = prevBehavior;
  }, [pathname, hash]);

  return null;
}
