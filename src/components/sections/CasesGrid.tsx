import { Link } from "@/i18n/routing";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const ArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="rotate-45">
    <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default async function CasesGrid({ allCasesHref = "/cases" }: { allCasesHref?: string }) {
  const t = await getTranslations("homeCases");
  const tCta = await getTranslations("cta");

  return (
    <section className="w-full bg-brand-blue-light py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-raleway font-bold text-[32px] md:text-[56px] leading-none tracking-normal text-[#002B58]">
            {t("headingPre")} <span className="text-brand-blue">{t("headingHighlight")}</span>
          </h2>
          <p className="mt-3 font-poppins font-medium text-base md:text-[20px] text-brand-dark/70">
            {t("subtitle")}
          </p>
        </div>

        {/* Bento panel */}
        <div className="bg-white rounded-[28px] p-4 md:p-5 shadow-[0_20px_60px_-30px_rgba(2,18,43,0.2)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.85fr_1fr_1fr] lg:grid-rows-[340px_525px] gap-4">
            {/* Card A — tall left */}
            <article className="relative lg:row-span-2 rounded-[32px] overflow-hidden min-h-[420px] lg:min-h-0">
              <Image src="/images/cases/zelfmelder.png" alt={t("cardA.title")} fill className="object-cover object-[center_20%]" sizes="(max-width:1024px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/25" />
              <div className="absolute inset-0 flex flex-col p-7 text-white">
                <h3 className="font-poppins font-bold text-[32px] md:text-[40px] leading-tight tracking-normal max-w-[520px]">
                  {t("cardA.title")}
                </h3>
                <p className="mt-24 lg:mt-36 font-poppins font-semibold text-[24px] leading-relaxed tracking-normal text-white/90 max-w-[560px]">
                  {t("cardA.description")}
                </p>
                <Link
                  href={allCasesHref}
                  className="btn-gradient mt-auto gap-2 self-start h-12 px-7 rounded-xl"
                >
                  {t("cardA.cta")}
                  <ArrowUpRight />
                </Link>
              </div>
            </article>

            {/* Card B */}
            <article className="relative rounded-[32px] overflow-hidden min-h-[220px]">
              <Image src="/images/cases/aandelen.png" alt={t("cardB.title")} fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
              <h3 className="absolute inset-0 flex items-center px-6 font-poppins font-bold text-[32px] md:text-[40px] leading-none tracking-normal text-white">
                {t("cardB.title")}
              </h3>
            </article>

            {/* Card C */}
            <article className="relative rounded-[32px] overflow-hidden min-h-[220px]">
              <Image src="/images/cases/rookverbod.png" alt={t("cardC.title")} fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
              <h3 className="absolute inset-0 flex items-center px-6 font-poppins font-bold text-[32px] md:text-[40px] leading-none tracking-normal text-white">
                {t("cardC.title")}
              </h3>
            </article>

            {/* Card D — wide bottom-right */}
            <article className="relative lg:col-span-2 rounded-[32px] overflow-hidden min-h-[260px]">
              <Image src="/images/cases/tussenkomst.png" alt={t("cardD.title")} fill className="object-cover" sizes="(max-width:1024px) 100vw, 66vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col p-7 text-white">
                <h3 className="font-poppins font-bold text-[30px] md:text-[40px] leading-none tracking-normal">
                  {t("cardD.title")}
                </h3>
                <p className="mt-4 font-poppins font-semibold text-[24px] leading-relaxed tracking-normal text-white/90">
                  {t("cardD.description")}{" "}
                  <Link href={allCasesHref} className="underline underline-offset-2 hover:text-white">
                    {t("cardD.readMore")}
                  </Link>
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* All cases button */}
        <div className="flex justify-center mt-12">
          <Link
            href={allCasesHref}
            className="btn-gradient gap-2.5 h-[80px] px-12 rounded-2xl text-[24px] leading-none tracking-normal"
          >
            {tCta("viewAllCases")}
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
