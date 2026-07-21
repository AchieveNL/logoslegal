"use client";

import { useLayoutEffect, useRef, useState } from "react";

interface QA {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  items: QA[];
}

interface FaqItemProps {
  item: QA;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ item, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-brand-gray/60 py-6">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 text-left"
      >
        <h3
          className={`font-raleway font-bold text-xl md:text-[24px] transition-colors duration-300 ${
            isOpen ? "text-brand-blue" : "text-[#002B58]"
          }`}
        >
          {item.question}
        </h3>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`shrink-0 mt-1 text-brand-blue transition-transform ${
            isOpen ? "" : "rotate-180"
          }`}
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`mt-4 font-poppins font-medium text-base md:text-[24px] text-[#292D32] leading-snug pr-10 transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

interface Props {
  categories: FaqCategory[];
  defaultCategory: string;
  heading: React.ReactNode;
  subtitle: string;
}

export default function FaqSectionClient({
  categories,
  defaultCategory,
  heading,
  subtitle,
}: Props) {
  const [activeId, setActiveId] = useState(defaultCategory);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [pill, setPill] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  // Slide the active pill to the current tab (remeasure on resize/wrap).
  useLayoutEffect(() => {
    const measure = () => {
      const el = tabRefs.current[activeId];
      if (el) {
        setPill({
          left: el.offsetLeft,
          top: el.offsetTop,
          width: el.offsetWidth,
          height: el.offsetHeight,
        });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeId]);

  const active = categories.find((c) => c.id === activeId) ?? categories[0];
  if (!active) return null;

  return (
    <section className="w-full bg-white pt-16 md:pt-24 pb-8 md:pb-12">
      <div className="max-w-container mx-auto px-6 md:px-24">
        <div className="text-center mb-10">
          <h2 className="font-raleway font-bold text-[32px] md:text-[56px] leading-none text-[#002B58]">
            {heading}
          </h2>
          <p className="mt-4 font-poppins font-medium text-lg md:text-[24px] text-[#292D32]">
            {subtitle}
          </p>
        </div>

        {/* Category tabs — gradient pill slides between tabs */}
        <div className="relative flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12">
          {pill && (
            <span
              aria-hidden="true"
              className="absolute z-0 rounded-2xl bg-gradient-to-r from-[#087AEC] to-[#56A5F4] shadow-lg shadow-brand-blue/20 transition-all duration-500 ease-[cubic-bezier(0.34,1.2,0.4,1)]"
              style={{
                left: pill.left,
                top: pill.top,
                width: pill.width,
                height: pill.height,
              }}
            />
          )}
          {categories.map((cat) => (
            <button
              key={cat.id}
              ref={(el) => {
                tabRefs.current[cat.id] = el;
              }}
              onClick={() => {
                setActiveId(cat.id);
                setOpenIndex(null);
              }}
              className={`relative z-10 font-poppins font-medium text-base h-16 px-5 rounded-2xl inline-flex items-center transition-colors duration-300 ${
                cat.id === activeId
                  ? "text-white"
                  : "text-[#002B58] hover:text-brand-blue hover:bg-brand-blue-light"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion — re-keyed per category so switching fades the list in */}
        <div key={active.id} className="max-w-[1446px] mx-auto page-enter">
          {active.items.map((item, i) => (
            <FaqItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
