import type { ReactNode } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

interface ChallengeSectionProps {
  heading: ReactNode;
  paragraphs: string[];
  ctaLabel: string;
  ctaHref: string;
  imagePrimary: string;
  imageSecondary: string;
  imageAlt: string;
}

export default function ChallengeSection({
  heading,
  paragraphs,
  ctaLabel,
  ctaHref,
  imagePrimary,
  imageSecondary,
  imageAlt,
}: ChallengeSectionProps) {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            <h2 className="font-raleway font-bold text-[34px] md:text-[56px] leading-none text-[#002B58] max-w-[685px]">
              {heading}
            </h2>
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-poppins font-medium text-lg md:text-[24px] leading-tight text-[#292D32] max-w-[594px]"
              >
                {p}
              </p>
            ))}
            <div className="pt-2">
              <Button href={ctaHref} variant="primary" className="self-start">
                {ctaLabel}
              </Button>
            </div>
          </div>

          {/* Right: two overlapping images */}
          <div className="relative h-[480px] md:h-[680px]">
            <div className="absolute top-0 right-0 w-[78%] max-w-[630px] aspect-[630/460] rounded-[32px] overflow-hidden bg-brand-blue/10">
              <Image
                src={imagePrimary}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[78%] max-w-[630px] aspect-[630/460] rounded-[32px] overflow-hidden bg-brand-blue/10 ring-8 ring-white shadow-xl">
              <Image
                src={imageSecondary}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
