import { getRequestConfig } from "next-intl/server";
import type { AbstractIntlMessages } from "next-intl";
import { routing } from "./routing";

// Message files are split per domain so they stay reviewable.
// Every file contributes top-level namespaces (must be unique across files).
const DOMAINS = [
  "common",
  "home",
  "expertise",
  "practice",
  "about",
  "cases",
  "contact",
  "faq",
  "legal",
] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as never)) {
    locale = routing.defaultLocale;
  }

  const messages: AbstractIntlMessages = {};
  for (const domain of DOMAINS) {
    Object.assign(
      messages,
      (await import(`../../messages/${locale}/${domain}.json`)).default
    );
  }

  return { locale, messages };
});
