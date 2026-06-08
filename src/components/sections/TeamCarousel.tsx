"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Member {
  name: string;
  role: string;
  image: string;
}

const members: Member[] = [
  { name: "Pejman Salim", role: "Advocaat", image: "/images/team/pejman-salim.png" },
  { name: "Arzu Yandere", role: "Advocaat", image: "/images/team/arzu-yandere.png" },
  { name: "Babi Azar", role: "Advocaat", image: "/images/team/babi-azar.png" },
  { name: "Anil Ramdas", role: "Advocaat", image: "/images/team/anil-ramdas.png" },
];

export default function TeamCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Measure after layout settles (fonts/images can shift widths).
    const raf = requestAnimationFrame(updateArrows);
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
      ro.disconnect();
    };
  }, [updateArrows]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center">
          {/* Left: quote + signature (fixed-width, never collapses) */}
          <div className="lg:w-[440px] lg:shrink-0">
            <h2 className="font-raleway font-bold text-[30px] md:text-[40px] leading-[1.25] text-[#002B58]">
              Onze{" "}
              <span className="text-brand-blue">&lsquo;out-of-the-box&rsquo; aanpak</span>{" "}
              is de kracht van Logos Legal en vergroot de kans op een{" "}
              <span className="text-brand-blue">gunstige uitkomst.</span>
            </h2>
            <p className="mt-8 font-caveat font-medium text-[40px] md:text-[48px] leading-none text-[#292D32]">
              Arzu Yandere
            </p>
          </div>

          {/* Right: scrollable carousel (min-w-0 lets it scroll instead of
              expanding the row and squeezing the text column) */}
          <div className="min-w-0 lg:flex-1">
            <div
              ref={scrollRef}
              role="region"
              aria-label="Teamleden"
              tabIndex={0}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {members.map((m) => (
                <article
                  key={m.name}
                  data-card
                  className="relative shrink-0 snap-start w-[240px] sm:w-[260px] md:w-[280px] aspect-[280/340] rounded-[20px] overflow-hidden bg-brand-blue/10"
                >
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                  <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-[#002B58] py-3.5 text-center">
                    <p className="font-poppins font-semibold text-lg text-white leading-none">
                      {m.name}
                    </p>
                    <p className="mt-1.5 font-poppins text-sm text-white/80 leading-none">
                      {m.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Prev / next */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={() => scroll("left")}
                aria-label="Vorige teamleden"
                aria-disabled={!canScrollLeft}
                className={`w-11 h-11 rounded-full border border-brand-dark/30 text-brand-dark flex items-center justify-center transition-all hover:border-brand-blue hover:text-brand-blue ${
                  canScrollLeft ? "opacity-100" : "opacity-30"
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Volgende teamleden"
                aria-disabled={!canScrollRight}
                className={`w-11 h-11 rounded-full border border-brand-dark/30 text-brand-dark flex items-center justify-center transition-all hover:border-brand-blue hover:text-brand-blue ${
                  canScrollRight ? "opacity-100" : "opacity-30"
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
