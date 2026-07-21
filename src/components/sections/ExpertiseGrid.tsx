import { Link } from "@/i18n/routing";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

interface ExpertiseItem {
  title: string;
  description: string;
  href: string;
}

const ArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="rotate-45">
    <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Icons in the same order as the "expertiseGrid.items" message array.
const icons: ReactNode[] = [
  (
    <svg key="contracten" width="40" height="40" viewBox="0 0 24 24" fill="none">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 8h5M9 12h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M19.5 11.5l2 2-5 5-2.5.5.5-2.5 5-5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg key="arbeidsrecht" width="40" height="40" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 9.5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 12.5h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 14.5l-4 5M12 14.5l4 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="onderwijsrecht" width="40" height="40" viewBox="0 0 24 24" fill="none">
      <path d="M2.5 9L12 4.5 21.5 9 12 13.5 2.5 9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6.5 11v4.5c0 1 2.5 2.5 5.5 2.5s5.5-1.5 5.5-2.5V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.5 9v4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="financieel-strafrecht" width="40" height="40" viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="7" width="17" height="12.5" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 10v6.5M13.6 11.4a1.7 1.7 0 0 0-1.6-1 1.5 1.5 0 0 0-.3 3 1.6 1.6 0 0 1 .3 3 1.7 1.7 0 0 1-1.6-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg key="mensenrechten" width="40" height="40" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="9" r="1.9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.5 17.5c0-2.5 2-4.3 4.5-4.3s4.5 1.8 4.5 4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14.5 13.6c2.2.1 4 1.7 4 3.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
];

export default async function ExpertiseGrid({ contactHref = "/contact" }: { contactHref?: string }) {
  const t = await getTranslations("expertiseGrid");
  const tCta = await getTranslations("cta");
  const items = t.raw("items") as ExpertiseItem[];

  return (
    <section className="w-full bg-white pt-16 md:pt-24 pb-8 md:pb-12">
      <div className="max-w-[1608px] mx-auto px-6 md:px-12 lg:px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-raleway font-bold text-[32px] md:text-[56px] leading-none tracking-normal text-center text-[#002B58]">
            {t("headingPre")} <span className="text-brand-blue">{t("headingHighlight")}</span> {t("headingPost")}
          </h2>
          <p className="mt-3 font-poppins font-medium text-base md:text-[24px] leading-none tracking-normal text-center text-brand-dark/70">
            {t("subtitle")}
          </p>
        </div>

        {/* Grid: 5 expertise cards + 1 CTA cell */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col items-center text-center rounded-[24px] px-8 py-10 lg:h-[652px] ${
                i % 2 === 0 ? "bg-brand-blue-light" : "bg-white"
              }`}
            >
              <span className="text-[#1A1A1A] mb-5">{icons[i]}</span>
              <h3 className="font-poppins font-bold text-[28px] md:text-[32px] leading-tight tracking-normal text-center text-[#002B58] mb-5">
                {item.title}
              </h3>
              <p className="font-poppins font-semibold text-[20px] leading-normal tracking-normal text-center text-[#514D4D] mb-7">
                {item.description}
              </p>
              {item.href === "/mensenrechten" ? (
                <Link
                  href={item.href}
                  className="btn-fx mt-auto shrink-0 self-center inline-flex items-center justify-center gap-2.5 w-[320px] max-w-full h-[80px] rounded-2xl border-[3px] border-[#002B58] text-[#002B58] font-poppins font-bold text-[24px] leading-none tracking-normal shadow-none hover:shadow-none hover:bg-[#002B58] hover:text-white"
                >
                  {tCta("readMore")}
                  <ArrowUpRight />
                </Link>
              ) : (
                <Link
                  href={item.href}
                  className="mt-auto inline-flex items-center gap-2 self-center font-poppins font-bold text-[24px] leading-none tracking-normal text-[#002B58] hover:text-brand-blue transition-colors"
                >
                  {tCta("readMore")}
                  <ArrowUpRight />
                </Link>
              )}
            </div>
          ))}

          {/* CTA cell */}
          <div className="flex flex-col items-center justify-center text-center px-8 py-10 lg:h-[652px]">
            <span className="text-brand-blue mb-5">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 3v18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M5 7h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M7 4.5 17 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M5 7l-2.5 5.5h5L5 7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M19 7l-2.5 5.5h5L19 7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M9 21h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </span>
            <h3 className="font-poppins font-bold text-[32px] md:text-[40px] leading-none tracking-normal text-center text-[#002B58] mb-3">
              <span className="text-brand-blue">{t("ctaTitleHighlight")}</span> {t("ctaTitlePost")}
            </h3>
            <p className="font-poppins font-bold text-[20px] leading-relaxed tracking-normal text-center text-[#292D32] mb-8 max-w-[400px]">
              {t("ctaText")}
            </p>
            <Link
              href={contactHref}
              className="btn-gradient gap-2 h-14 px-8 rounded-xl"
            >
              {tCta("getInTouch")}
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
