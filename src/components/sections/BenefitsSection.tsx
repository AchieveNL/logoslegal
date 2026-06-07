import type { ReactNode } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export interface Benefit {
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  heading: ReactNode;
  benefits: Benefit[];
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export default function BenefitsSection({
  heading,
  benefits,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
  quote,
}: BenefitsSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Light band behind the image-top + testimonial */}
      <div className="absolute top-0 left-0 w-full h-[300px] md:h-[570px] bg-brand-blue-light" />
      <div className="relative z-10 max-w-container mx-auto px-6 md:px-24 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image only — Figma: 700×720, radius 32 */}
          <div className="relative w-full lg:max-w-[700px] lg:mt-28 aspect-[700/720] rounded-[32px] overflow-hidden bg-brand-blue/10 ring-1 ring-brand-blue/30">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: Quote + Content */}
          <div className="flex flex-col">
            {/* Quote — vertically centered within the grey band */}
            {quote && (
              <div className="relative flex flex-col justify-center lg:min-h-[474px] max-w-[700px]">
                <p className="font-poppins font-bold italic text-2xl md:text-[36px] leading-snug text-brand-dark">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <div className="mt-5">
                  <p className="font-poppins font-bold text-xl text-brand-blue">
                    {quote.author}
                  </p>
                  <p className="font-poppins text-base text-brand-dark/60">
                    {quote.role}
                  </p>
                </div>
              </div>
            )}

            <h2 className="mt-12 lg:mt-10 font-raleway font-bold text-[34px] md:text-[56px] leading-[1.1] text-brand-dark">
              {heading}
            </h2>

            <div className="mt-7 flex flex-col gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex flex-col gap-3 max-w-[700px]">
                  <h3 className="font-poppins font-medium text-[26px] md:text-[32px] text-[#002B58]">
                    {benefit.title}
                  </h3>
                  <p className="font-poppins text-lg md:text-[24px] leading-[1.4] text-[#292D32]">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <Button href={ctaHref} variant="primary" className="self-start mt-[72px]">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
