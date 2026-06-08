import Image from "next/image";
import type { ReactNode } from "react";

interface AdvocaatBackgroundProps {
  heading: ReactNode;
  intro: ReactNode;
  checks: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function AdvocaatBackground({
  heading,
  intro,
  checks,
  imageSrc,
  imageAlt,
}: AdvocaatBackgroundProps) {
  return (
    <section className="relative z-10 w-full pt-16 md:pt-24 pb-0">
      <div className="max-w-[1768px] mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_700px] gap-12 lg:gap-x-10 items-start">
          {/* Left: text + checklist */}
          <div className="max-w-[836px]">
            <h2 className="font-raleway font-bold text-[40px] md:text-[56px] leading-none tracking-normal text-[#002B58]">
              {heading}
            </h2>
            <p className="mt-6 font-poppins font-medium text-base md:text-[24px] leading-snug tracking-normal text-[#292D32]">
              {intro}
            </p>
            <hr className="my-8 border-brand-gray" />
            <ul className="flex flex-col gap-6">
              {checks.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-1">
                    <circle cx="12" cy="12" r="11" stroke="#087AEC" strokeWidth="2" />
                    <path d="M7 12.5L10.5 16L17 9" stroke="#087AEC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-poppins font-medium text-base md:text-[20px] leading-relaxed tracking-normal text-black">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: portrait */}
          <div className="relative w-full lg:w-[700px] lg:justify-self-end h-[480px] md:h-[640px] lg:h-[886px] rounded-[32px] overflow-hidden bg-brand-blue/10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
