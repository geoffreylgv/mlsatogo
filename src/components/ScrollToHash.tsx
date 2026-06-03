import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Router-aware scrolling for the single-page sections.
 * - Navigating to a "/#section" link scrolls that section into view, even when
 *   coming from another route (e.g. /members), without a full page reload.
 * - Navigating to a plain route with no hash resets scroll to the top.
 */
export function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    const id = hash.slice(1);
    // Wait a frame so the target section is mounted after a route change.
    const raf = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
    return () => cancelAnimationFrame(raf);
  }, [hash, pathname]);

  return null;
}
