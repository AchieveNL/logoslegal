import type { ReactNode } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

interface WhyLogosProps {
  heading: ReactNode;
  paragraphs: string[];
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
}

export default function WhyLogos({
  heading,
  paragraphs,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
}: WhyLogosProps) {
  return (
    <section className="w-full bg-brand-blue-light py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: image — Figma ratio 720 x 702, top-aligned with the heading */}
          <div className="relative w-full aspect-[720/702] lg:max-w-[720px] rounded-[32px] overflow-hidden bg-brand-blue/10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: content */}
          <div className="flex flex-col">
            <h2 className="font-raleway font-bold text-[36px] md:text-[56px] leading-none tracking-normal text-[#21468B]">
              {heading}
            </h2>
            <div className="mt-6 flex flex-col gap-5">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-poppins font-medium text-base md:text-[22px] leading-relaxed tracking-normal text-[#292D32]"
                >
                  {p}
                </p>
              ))}
            </div>
            <Button href={ctaHref} variant="primary" className="self-start mt-8">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
