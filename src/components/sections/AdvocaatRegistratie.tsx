import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface AdvocaatRegistratieProps {
  heading: ReactNode;
  paragraph: string;
  email: string;
  phone: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
}

const ArrowUpRight = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="rotate-45">
    <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function AdvocaatRegistratie({
  heading,
  paragraph,
  email,
  phone,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref,
}: AdvocaatRegistratieProps) {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1768px] mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_700px] gap-12 lg:gap-x-10 items-center">
          {/* Left: text */}
          <div className="max-w-[836px]">
            <h2 className="font-raleway font-bold text-[36px] md:text-[56px] leading-tight tracking-normal text-[#002B58]">
              {heading}
            </h2>
            <p className="mt-6 max-w-[688px] font-poppins font-medium text-base md:text-[24px] leading-snug tracking-normal text-[#292D32]">
              {paragraph}
            </p>
            <hr className="my-8 border-brand-gray" />
            <div className="flex flex-wrap items-center gap-4 font-poppins font-medium text-base md:text-[18px] text-[#292D32]">
              <a href={`mailto:${email}`} className="hover:text-brand-blue transition-colors">
                {email}
              </a>
              <span className="text-brand-gray">|</span>
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-brand-blue transition-colors">
                {phone}
              </a>
            </div>
            <Link
              href={ctaHref}
              className="mt-8 inline-flex items-center justify-center gap-2.5 self-start px-10 h-[72px] rounded-2xl bg-brand-blue text-white font-poppins font-bold text-[24px] leading-none tracking-normal hover:bg-brand-blue-dark transition-colors"
            >
              {ctaLabel}
              <ArrowUpRight />
            </Link>
          </div>

          {/* Right: image */}
          <div className="relative w-full lg:w-[700px] lg:justify-self-end h-[480px] md:h-[640px] lg:h-[886px] rounded-[32px] overflow-hidden bg-brand-blue/10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
