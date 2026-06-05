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
          backgroundImage: "url('/images/footer-waves.png')",
          backgroundSize: "auto 100%",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 max-w-container mx-auto px-6 md:px-24 text-center">
        <h2 className="font-raleway font-bold text-3xl md:text-[48px] leading-tight text-white mb-4">
          {heading}
        </h2>
        {subtitle && (
          <p className="font-poppins text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
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
