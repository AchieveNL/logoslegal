import Button from "@/components/ui/Button";

interface CTABannerProps {
  heading: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function CTABanner({
  heading,
  subtitle,
  ctaLabel,
  ctaHref,
}: CTABannerProps) {
  return (
    <section className="relative w-full bg-brand-blue py-16 md:py-24 overflow-hidden">
      {/* Wave texture (same as the footer) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: "url('/images/shared/footer-waves.png')",
          backgroundSize: "auto 100%",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 max-w-container mx-auto px-6 md:px-24 text-center">
        <h2 className="font-raleway font-bold text-3xl md:text-[56px] leading-none text-white mb-4 max-w-[1178px] mx-auto">
          {heading}
        </h2>
        {subtitle && (
          <p className="font-poppins text-lg md:text-[24px] text-white mb-10 max-w-[1000px] mx-auto">
            {subtitle}
          </p>
        )}
        <Button href={ctaHref} variant="secondary" className="mx-auto">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
