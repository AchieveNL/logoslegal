"use client";

import { useRef } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ExpertiseCard {
  title: string;
  description: string;
  href: string;
  image: string;
}

export default function ExpertiseCarousel() {
  const t = useTranslations("expertiseCarousel");
  const tCta = useTranslations("cta");
  const cards = t.raw("cards") as ExpertiseCard[];
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white pt-8 md:pt-12 pb-12 md:pb-16">
      <div className="max-w-container mx-auto px-6 md:px-24">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-raleway font-bold text-[32px] md:text-[56px] leading-none text-[#002B58] md:whitespace-nowrap">
              {t("headingPre")} <span className="text-brand-blue">{t("headingHighlight")}</span>
            </h2>
            <p className="mt-4 max-w-[800px] font-poppins font-medium text-lg md:text-[24px] text-[#292D32]">
              {t("subtitle")}
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              aria-label={t("prevLabel")}
              className="w-12 h-12 rounded-lg bg-brand-gray/40 text-brand-dark flex items-center justify-center hover:bg-brand-gray transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label={t("nextLabel")}
              className="w-12 h-12 rounded-lg bg-brand-blue text-white flex items-center justify-center hover:bg-brand-blue-dark transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((card) => (
            <article
              key={card.title}
              className="relative shrink-0 snap-start w-[300px] md:w-[380px] h-[460px] rounded-2xl overflow-hidden"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="380px"
              />
              {/* Blue tint at 30% + bottom darkening for text legibility */}
              <div className="absolute inset-0 bg-brand-blue/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-7 text-white">
                <h3 className="font-raleway font-bold text-2xl leading-tight mb-3">
                  {card.title}
                </h3>
                <p className="font-poppins text-sm text-white/85 leading-relaxed mb-5 line-clamp-4">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="btn-fx inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-poppins font-bold text-base px-6 h-12 rounded-button hover:bg-brand-blue-dark"
                >
                  {tCta("readMore")}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="rotate-45">
                    <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
