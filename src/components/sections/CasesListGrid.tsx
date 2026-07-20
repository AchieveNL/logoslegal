import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Image from "next/image";

interface CaseItem {
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const ArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="rotate-45">
    <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Images/links per card, in the same order as the "items" array in the messages.
const caseMedia = [
  { image: "/images/cases/meldplichtstatus.png", href: "/cases" },
  { image: "/images/cases/no-smoking.png", href: "/cases" },
  { image: "/images/cases/meldplichtstatus.png", href: "/cases" },
  { image: "/images/cases/rechtbank.png", href: "/cases" },
];

export default async function CasesListGrid() {
  const t = await getTranslations("casesList");
  const tAreas = await getTranslations("expertiseAreas");
  const tCta = await getTranslations("cta");

  const items = t.raw("items") as {
    categoryKey: string;
    title: string;
    description: string;
  }[];

  const cases: CaseItem[] = items.map((item, i) => ({
    category: tAreas(item.categoryKey),
    title: item.title,
    description: item.description,
    image: caseMedia[i].image,
    href: caseMedia[i].href,
  }));

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8">
        {/* Heading */}
        <div className="max-w-[640px] mb-12">
          <h2 className="font-raleway font-bold text-[36px] md:text-[56px] leading-none tracking-normal text-brand-blue">
            {t("heading")}
          </h2>
          <p className="mt-4 font-poppins font-medium text-base md:text-[24px] leading-relaxed tracking-normal text-[#292D32]">
            {t("paragraph")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <article
              key={`${c.title}-${i}`}
              className="hover-lift flex flex-col bg-brand-blue-light rounded-[24px] overflow-hidden lg:h-[1020px]"
            >
              <div className="relative w-full h-[260px] md:h-[360px] lg:h-[500px] shrink-0 bg-brand-blue/10">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col flex-1 px-6 md:px-8 pt-6 pb-8">
                <span className="self-start bg-white rounded-full px-4 py-2 font-poppins font-semibold text-sm text-brand-blue">
                  {c.category}
                </span>
                <h3 className="mt-5 font-poppins font-bold text-[26px] md:text-[32px] leading-tight tracking-normal text-brand-blue">
                  {c.title}
                </h3>
                <p className="mt-4 font-poppins font-semibold text-[20px] leading-relaxed tracking-normal text-[#002B58]">
                  {c.description}
                </p>
                <Link
                  href={c.href}
                  className="btn-fx mt-7 inline-flex items-center justify-center gap-2.5 self-start w-[260px] max-w-full h-[80px] rounded-2xl bg-brand-blue text-white font-poppins font-bold text-[24px] leading-none tracking-normal hover:bg-brand-blue-dark"
                >
                  {tCta("readMore")}
                  <ArrowUpRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
