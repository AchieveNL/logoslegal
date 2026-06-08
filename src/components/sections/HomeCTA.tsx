import Link from "next/link";

const ArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="rotate-45">
    <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function HomeCTA({ contactHref = "/contact" }: { contactHref?: string }) {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden rounded-[32px] bg-brand-blue-light px-8 md:px-16 py-14 md:py-20">
          {/* Wave texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 mix-blend-multiply"
            style={{
              backgroundImage: "url('/images/shared/wave.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <h2 className="font-raleway font-bold text-[30px] md:text-[44px] leading-tight text-[#002B58] max-w-[640px]">
              Ontdek hoe wij u kunnen{" "}
              <span className="text-brand-blue">vertegenwoordigen</span> in uw
              aankomende rechtzaak!
            </h2>
            <Link
              href={contactHref}
              className="shrink-0 inline-flex items-center justify-center gap-2 h-16 px-9 rounded-xl bg-gradient-to-r from-[#0A2540] to-brand-blue-dark text-white font-poppins font-bold text-lg hover:opacity-95 transition-opacity"
            >
              Direct contact opnemen
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
