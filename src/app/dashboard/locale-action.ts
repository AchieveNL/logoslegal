"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { DASH_LOCALE_COOKIE, type DashLocale } from "@/lib/dashboard-i18n";

export async function setDashboardLocale(locale: DashLocale) {
  const store = await cookies();
  store.set(DASH_LOCALE_COOKIE, locale, {
    path: "/dashboard",
    maxAge: 60 * 60 * 24 * 365,
  });
  revalidatePath("/dashboard", "layout");
}
