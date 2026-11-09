import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets the window scroll to the top whenever the route changes, so a new
 * page doesn't open at the previous page's scroll offset. Skipped when the
 * navigation targets a section (a location hash or `state.scrollTo`), which
 * the destination page scrolls to itself.
 */
export function RouteScrollReset() {
  const { pathname, hash, state } = useLocation();

  useLayoutEffect(() => {
    if (hash || state?.scrollTo) return;
    // "instant" overrides any CSS `scroll-behavior: smooth` on the root.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, state]);

  return null;
}
