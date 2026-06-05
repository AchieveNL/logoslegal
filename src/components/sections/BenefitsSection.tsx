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
      <div className="absolute top-0 left-0 w-full h-[280px] md:h-[300px] bg-brand-blue-light" />
      <div className="relative z-10 max-w-container mx-auto px-6 md:px-24 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image only */}
          <div className="relative h-[340px] md:h-[560px] rounded-2xl overflow-hidden bg-brand-blue/10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: Quote + Content */}
          <div className="flex flex-col">
            {quote && (
              <div className="relative">
                <p className="font-raleway font-bold text-xl md:text-[26px] leading-snug text-brand-dark italic">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <div className="mt-4">
                  <p className="font-poppins font-bold text-lg text-brand-blue">
                    {quote.author}
                  </p>
                  <p className="font-poppins text-base text-brand-dark/60">
                    {quote.role}
                  </p>
                </div>
              </div>
            )}

            <h2 className="mt-12 md:mt-20 font-raleway font-bold text-[28px] md:text-[36px] leading-[1.2] text-brand-dark">
              {heading}
            </h2>

            <div className="mt-7 flex flex-col gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex flex-col gap-3">
                  <h3 className="font-poppins font-bold text-xl md:text-2xl text-brand-dark">
                    {benefit.title}
                  </h3>
                  <p className="font-poppins text-base md:text-lg text-brand-dark/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <Button href={ctaHref} variant="primary" className="self-start mt-4">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
