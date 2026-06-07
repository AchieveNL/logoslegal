interface HeroBannerProps {
  title: string;
  subtitle: string;
}

export default function HeroBanner({ title, subtitle }: HeroBannerProps) {
  return (
    <section className="relative w-full bg-brand-blue overflow-hidden">
      {/* Wave texture (same as the CTA banner) */}
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

      <div className="relative max-w-container mx-auto px-6 md:px-24 py-16 md:py-24 text-center">
        <h1 className="font-raleway font-bold text-4xl md:text-[56px] text-white leading-tight">
          {title}
        </h1>
        <p className="mt-4 font-poppins font-medium text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
