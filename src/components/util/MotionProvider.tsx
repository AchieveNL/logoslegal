"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide scroll-reveal.
 *
 * Renders nothing. On mount (and on every route change) it scans the page for
 * `section` elements and, for those that start below the fold, applies a hidden
 * `.reveal` state and reveals them with an IntersectionObserver as they scroll
 * into view.
 *
 * Above-the-fold sections are left untouched so the LCP element is never hidden
 * and there is no flash. Honors `prefers-reduced-motion` (does nothing).
 */
export default function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    // Wait a frame so the freshly-navigated DOM is laid out before measuring.
    const raf = requestAnimationFrame(() => {
      const viewportH = window.innerHeight;
      const sections = document.querySelectorAll<HTMLElement>(
        "section, [data-reveal]"
      );

      sections.forEach((el) => {
        if (el.classList.contains("reveal") || el.classList.contains("in-view")) {
          return;
        }
        // Only animate sections that begin below the fold — keeps the hero /
        // LCP content visible immediately.
        if (el.getBoundingClientRect().top > viewportH * 0.9) {
          el.classList.add("reveal");
          observer.observe(el);
        }
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
