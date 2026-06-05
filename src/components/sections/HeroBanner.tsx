interface HeroBannerProps {
  title: string;
  subtitle: string;
}

export default function HeroBanner({ title, subtitle }: HeroBannerProps) {
  return (
    <section className="relative w-full bg-brand-blue overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 60px)",
          }}
        />
      </div>
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(80deg, rgb(8, 122, 236) 0%, rgba(8, 122, 236, 0) 100%)",
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
