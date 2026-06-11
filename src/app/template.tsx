"use client";

import { useEffect, useState } from "react";

// Module-scoped: false on the very first load, true thereafter. Persists across
// client navigations (the module stays loaded even though this template
// re-mounts per route).
let hasNavigated = false;

/**
 * Wraps each route. Plays a subtle fade-up on client navigations, but NOT on
 * the initial server load — so the first paint (LCP) is instant.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const [animate] = useState(() => hasNavigated);

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return <div className={animate ? "page-enter" : undefined}>{children}</div>;
}
