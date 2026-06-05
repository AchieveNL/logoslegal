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
}: PracticeAreaIntroProps) {
  return (
    <section className="relative w-full bg-white">
      <div className="relative max-w-container mx-auto px-6 md:px-24 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="flex flex-col gap-7 pt-4">
            <div>
              <h2 className="font-raleway font-bold text-[28px] md:text-[36px] leading-[1.2] text-brand-dark">
                {heading}
              </h2>
              <p className="mt-5 font-poppins text-base md:text-lg font-medium text-brand-dark/70">
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

            <p className="font-poppins text-base font-semibold text-brand-blue-dark leading-relaxed">
              {summary}
            </p>

            {/* CTA with contact person inside a light box */}
            <div className="relative mt-4">
              {contactName && contactImageSrc ? (
                <div className="relative w-fit flex items-center bg-brand-blue-light rounded-2xl py-4 pl-4 pr-4 md:pr-[200px] min-h-[112px]">
                  <Button href={ctaHref} variant="primary">
                    {ctaLabel}
                  </Button>
                  <Image
                    src={contactImageSrc}
                    alt={contactName}
                    width={170}
                    height={215}
                    className="hidden md:block absolute right-5 bottom-0 object-contain object-bottom pointer-events-none select-none"
                  />
                </div>
              ) : (
                <Button href={ctaHref} variant="primary">
                  {ctaLabel}
                </Button>
              )}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[360px] md:h-[640px] rounded-2xl overflow-hidden bg-brand-gray/40">
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
