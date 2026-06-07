import type { ReactNode } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CheckItem from "@/components/ui/CheckItem";

interface PracticeAreaIntroProps {
  heading: ReactNode;
  subheading: string;
  checkItems: string[];
  summary: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  contactName?: string;
  contactImageSrc?: string;
  /** Desktop hero-image height class, e.g. "lg:h-[886px]". Defaults to 880px. */
  heroHeightClass?: string;
}

export default function PracticeAreaIntro({
  heading,
  subheading,
  checkItems,
  summary,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
  contactName,
  contactImageSrc,
  heroHeightClass = "lg:h-[880px]",
}: PracticeAreaIntroProps) {
  return (
    <section className="relative z-20 w-full bg-white">
      <div className="relative max-w-container mx-auto px-6 md:px-24 pt-16 md:pt-24 pb-8 md:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="flex flex-col gap-7 pt-4">
            <div>
              <h2 className="font-raleway font-bold text-[32px] md:text-[44px] leading-[1.15] text-brand-dark">
                {heading}
              </h2>
              <p className="mt-5 font-poppins text-lg md:text-[20px] font-medium text-[#292D32]">
                {subheading}
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 bg-brand-blue/20" />

            {/* Check Items */}
            <div className="flex flex-col gap-6">
              {checkItems.map((item) => (
                <CheckItem key={item} text={item} />
              ))}
            </div>

            <p className="font-poppins text-[20px] font-bold text-[#F36717] leading-tight max-w-[640px]">
              {summary}
            </p>

            {/* CTA with contact person inside a light box */}
            <div className="relative mt-4">
              {contactName && contactImageSrc ? (
                <div className="relative w-fit flex items-center bg-brand-blue-light rounded-2xl py-3 pl-4 pr-4 md:pr-[270px] min-h-[100px]">
                  <Button
                    href={ctaHref}
                    variant="primary"
                    className="w-[320px] justify-between !px-7"
                  >
                    {ctaLabel}
                  </Button>
                  <Image
                    src={contactImageSrc}
                    alt={contactName}
                    width={272}
                    height={344}
                    className="hidden md:block absolute right-[-20px] bottom-0 object-contain object-bottom pointer-events-none select-none"
                  />
                </div>
              ) : (
                <Button href={ctaHref} variant="primary">
                  {ctaLabel}
                </Button>
              )}
            </div>
          </div>

          {/* Right Image — Figma: 700×934, radius 32; bottom dips into the next (grey) band */}
          <div className={`relative z-10 w-full lg:ml-auto lg:max-w-[700px] h-[440px] ${heroHeightClass} lg:-mb-40 rounded-[32px] overflow-hidden bg-brand-gray/40 shadow-[0_24px_60px_-20px_rgba(8,122,236,0.35)] ring-1 ring-brand-blue/30`}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
