"use client";

import { createContext, useContext } from "react";
import type { DashLocale, DashMessages } from "@/lib/dashboard-i18n";

const Ctx = createContext<{ locale: DashLocale; messages: DashMessages } | null>(null);

export function DashIntlProvider({
  locale,
  messages,
  children,
}: {
  locale: DashLocale;
  messages: DashMessages;
  children: React.ReactNode;
}) {
  return <Ctx.Provider value={{ locale, messages }}>{children}</Ctx.Provider>;
}

/* Client-side hook: const { t, locale } = useDashIntl(); t.form.title */
export function useDashIntl() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useDashIntl outside DashIntlProvider");
  return { locale: ctx.locale, t: ctx.messages };
}
