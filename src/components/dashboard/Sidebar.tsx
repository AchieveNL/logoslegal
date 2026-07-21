"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDashIntl } from "@/components/dashboard/DashIntl";
import { setDashboardLocale } from "@/app/dashboard/locale-action";
import type { DashLocale } from "@/lib/dashboard-i18n";

const icons = {
  overview: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  cases: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  blog: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  reviews: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6L12 16.8 6.6 19.6l1.1-6L3.2 9.4l6.1-.8L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  faqs: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9.5 9.3a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .8-1 1.4v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="16.8" r="0.3" fill="currentColor" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
};

function NavContent({
  userName,
  onNavigate,
}: {
  userName: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { t, locale } = useDashIntl();
  const [pending, startTransition] = useTransition();

  const navItems = [
    { label: t.nav.overview, href: "/dashboard", exact: true, icon: icons.overview },
    { label: t.nav.cases, href: "/dashboard/cases", icon: icons.cases },
    { label: t.nav.blog, href: "/dashboard/blog", icon: icons.blog },
    { label: t.nav.reviews, href: "/dashboard/reviews", icon: icons.reviews },
    { label: t.nav.faqs, href: "/dashboard/faqs", icon: icons.faqs },
  ];

  const switchLocale = (l: DashLocale) => {
    if (l !== locale) startTransition(() => setDashboardLocale(l));
  };

  const logout = async () => {
    await fetch("/api/users/logout", { method: "POST", credentials: "include" });
    router.push("/dashboard/login");
    router.refresh();
  };

  return (
    <div className="flex flex-col h-full">
      <Link href="/dashboard" className="mb-10 px-2 hidden lg:block" onClick={onNavigate}>
        <Image src="/images/shared/logo.svg" alt="LOGOS LEGAL" width={148} height={45} priority unoptimized />
      </Link>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`flex items-center gap-3 h-12 px-4 rounded-xl font-poppins font-semibold text-base transition-colors ${
                active
                  ? "bg-gradient-to-r from-[#087AEC] to-[#56A5F4] text-white shadow-lg shadow-brand-blue/20"
                  : "text-[#002B58] hover:bg-brand-blue-light hover:text-brand-blue"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Language switcher */}
      <div className="mt-8">
        <p className="px-4 mb-2 font-poppins text-xs font-bold uppercase tracking-wide text-brand-dark/40">
          {t.nav.language}
        </p>
        <div className="flex gap-2 px-2">
          {(["nl", "en"] as const).map((l) => (
            <button
              key={l}
              type="button"
              disabled={pending}
              onClick={() => switchLocale(l)}
              className={`h-10 flex-1 rounded-lg font-poppins font-semibold text-sm transition-colors ${
                locale === l
                  ? "bg-gradient-to-r from-[#087AEC] to-[#56A5F4] text-white shadow"
                  : "bg-brand-blue-light text-[#002B58] hover:text-brand-blue"
              }`}
            >
              {l === "nl" ? "🇳🇱 NL" : "🇬🇧 EN"}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-8 border-t border-brand-gray/50">
        <p className="px-4 mb-3 font-poppins text-sm text-brand-dark/60 truncate">{userName}</p>
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full h-12 px-4 rounded-xl font-poppins font-semibold text-base text-[#002B58] hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t.nav.logout}
        </button>
      </div>
    </div>
  );
}

export default function Sidebar({ userName }: { userName: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <header className="lg:hidden sticky top-0 z-40 flex items-center justify-between bg-white border-b border-brand-gray/50 px-4 h-16">
        <Link href="/dashboard">
          <Image src="/images/shared/logo.svg" alt="LOGOS LEGAL" width={110} height={33} priority unoptimized />
        </Link>
        <button
          onClick={() => setOpen(true)}
          aria-label="Menu"
          className="flex flex-col gap-1.5 p-2"
        >
          <span className="block w-6 h-0.5 bg-brand-dark" />
          <span className="block w-6 h-0.5 bg-brand-dark" />
          <span className="block w-6 h-0.5 bg-brand-dark" />
        </button>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute left-0 top-0 bottom-0 w-[300px] max-w-[85vw] bg-white px-6 py-6 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <Image src="/images/shared/logo.svg" alt="LOGOS LEGAL" width={120} height={36} unoptimized />
              <button
                onClick={() => setOpen(false)}
                aria-label="Sluiten"
                className="w-9 h-9 rounded-lg hover:bg-brand-blue-light text-[#002B58] font-bold"
              >
                ✕
              </button>
            </div>
            <NavContent userName={userName} onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-[280px] shrink-0 min-h-screen bg-white border-r border-brand-gray/50 px-6 py-8 sticky top-0 max-h-screen overflow-y-auto">
        <NavContent userName={userName} />
      </aside>
    </>
  );
}
