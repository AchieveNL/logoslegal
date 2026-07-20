import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["nl", "en"],
  defaultLocale: "nl",
  // Dutch stays at "/", English lives under "/en"
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

// Locale-aware drop-in replacements for next/link and next/navigation
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
