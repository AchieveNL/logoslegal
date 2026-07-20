import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

const ArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="rotate-45">
    <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default async function HomeCTA({ contactHref = "/contact" }: { contactHref?: string }) {
  const t = await getTranslations("homeCta");
  const tCta = await getTranslations("cta");

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
              {t("headingPre")}{" "}
              <span className="text-brand-blue">{t("headingHighlight")}</span>{" "}
              {t("headingPost")}
            </h2>
            <Link
              href={contactHref}
              className="btn-gradient shrink-0 gap-2 h-16 px-9 rounded-xl text-lg"
            >
              {tCta("directContact")}
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
