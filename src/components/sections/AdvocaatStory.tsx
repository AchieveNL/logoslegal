import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface AdvocaatStoryProps {
  imageSrc: string;
  imageAlt: string;
  quote: string;
  name: string;
  role: string;
  expertiseHeading: ReactNode;
  expertiseParagraphs: string[];
  ctaLabel: string;
  ctaHref: string;
}

const ArrowUpRight = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="rotate-45">
    <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function AdvocaatStory({
  imageSrc,
  imageAlt,
  quote,
  name,
  role,
  expertiseHeading,
  expertiseParagraphs,
  ctaLabel,
  ctaHref,
}: AdvocaatStoryProps) {
  return (
    <section className="relative z-0 w-full bg-white">
      {/* Full-width light band behind the image-top + quote — lifted so the
          previous section's portrait overlaps on top of it */}
      <div className="absolute -top-14 left-0 w-full h-[376px] md:h-[576px] bg-brand-blue-light" />

      <div className="relative z-10 max-w-container mx-auto px-6 md:px-24 pt-0 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: meeting image — 700×720, pushed down to bridge the band */}
          <div className="relative w-full lg:max-w-[700px] lg:mt-28 aspect-[700/720] lg:aspect-auto lg:h-[720px] rounded-[32px] overflow-hidden bg-brand-blue/10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: quote (centered in band) + expertise */}
          <div className="flex flex-col max-w-[700px]">
            <div className="flex flex-col justify-center lg:min-h-[474px]">
              <p className="font-poppins font-bold italic text-[28px] md:text-[36px] leading-tight tracking-normal text-[#002B58]">
                &ldquo;{quote}&rdquo;
              </p>
              <p className="mt-6 font-poppins font-bold text-[20px] md:text-[24px] leading-none tracking-normal text-brand-blue">
                {name}
              </p>
              <p className="mt-2 font-poppins font-medium text-base leading-none tracking-normal text-[#292D32]">
                {role}
              </p>
            </div>

            <div className="mt-16 lg:mt-24 flex flex-col gap-8 lg:w-[700px] max-w-full">
              <h2 className="font-raleway font-bold text-[36px] md:text-[56px] leading-none tracking-normal text-[#002B58]">
                {expertiseHeading}
              </h2>
              <div className="flex flex-col gap-6">
                {expertiseParagraphs.map((para, i) => (
                  <p
                    key={i}
                    className="font-poppins font-medium text-base md:text-[24px] leading-snug tracking-normal text-[#292D32]"
                  >
                    {para}
                  </p>
                ))}
              </div>
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center gap-2.5 self-start px-10 h-[72px] rounded-2xl bg-brand-blue text-white font-poppins font-bold text-[24px] leading-none tracking-normal hover:bg-brand-blue-dark transition-colors"
              >
                {ctaLabel}
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
