import Link from "next/link";
import Image from "next/image";

const ArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="rotate-45">
    <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function CasesGrid({ allCasesHref = "/cases" }: { allCasesHref?: string }) {
  return (
    <section className="w-full bg-brand-blue-light py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-raleway font-bold text-[32px] md:text-[56px] leading-none tracking-normal text-[#002B58]">
            Afgeronde <span className="text-brand-blue">zaken</span>
          </h2>
          <p className="mt-3 font-poppins font-medium text-base md:text-[20px] text-brand-dark/70">
            Een selectie van resultaten en trajecten waarin wij het verschil maakten.
          </p>
        </div>

        {/* Bento panel */}
        <div className="bg-white rounded-[28px] p-4 md:p-5 shadow-[0_20px_60px_-30px_rgba(2,18,43,0.2)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.85fr_1fr_1fr] lg:grid-rows-[340px_525px] gap-4">
            {/* Card A — tall left */}
            <article className="relative lg:row-span-2 rounded-[32px] overflow-hidden min-h-[420px] lg:min-h-0">
              <Image src="/images/cases/zelfmelder.png" alt="Onmiddellijk vrijlaten en toekenning status zelfmelder" fill className="object-cover object-[center_20%]" sizes="(max-width:1024px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/25" />
              <div className="absolute inset-0 flex flex-col p-7 text-white">
                <h3 className="font-poppins font-bold text-[32px] md:text-[40px] leading-tight tracking-normal max-w-[520px]">
                  Onmiddellijk vrijlaten en toekenning status zelfmelder
                </h3>
                <p className="mt-24 lg:mt-36 font-poppins font-semibold text-[24px] leading-relaxed tracking-normal text-white/90 max-w-[560px]">
                  In een kort geding aangespannen door Pejman Salim, heeft de
                  voorzieningenrechter een oordeel geveld over de toepassing van de
                  Wet herziening tenuitvoerlegging van strafrechtelijke beslissingen
                  (Wet USB) en heeft de onmiddellijke vrijlating van de veroordeelde
                  en toekenning status zelfmelder bevolen.
                </p>
                <Link
                  href={allCasesHref}
                  className="mt-auto inline-flex items-center justify-center gap-2 self-start h-12 px-7 rounded-xl bg-gradient-to-r from-[#0A2540] to-brand-blue-dark text-white font-poppins font-bold hover:opacity-95 transition-opacity"
                >
                  Learn More
                  <ArrowUpRight />
                </Link>
              </div>
            </article>

            {/* Card B */}
            <article className="relative rounded-[32px] overflow-hidden min-h-[220px]">
              <Image src="/images/cases/aandelen.png" alt="Vordering overdracht aandelen" fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
              <h3 className="absolute inset-0 flex items-center px-6 font-poppins font-bold text-[32px] md:text-[40px] leading-none tracking-normal text-white">
                Vordering overdracht aandelen
              </h3>
            </article>

            {/* Card C */}
            <article className="relative rounded-[32px] overflow-hidden min-h-[220px]">
              <Image src="/images/cases/rookverbod.png" alt="Boete rookverbod" fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
              <h3 className="absolute inset-0 flex items-center px-6 font-poppins font-bold text-[32px] md:text-[40px] leading-none tracking-normal text-white">
                Boete rookverbod
              </h3>
            </article>

            {/* Card D — wide bottom-right */}
            <article className="relative lg:col-span-2 rounded-[32px] overflow-hidden min-h-[260px]">
              <Image src="/images/cases/tussenkomst.png" alt="Incidentele vordering tot tussenkomst" fill className="object-cover" sizes="(max-width:1024px) 100vw, 66vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col p-7 text-white">
                <h3 className="font-poppins font-bold text-[30px] md:text-[40px] leading-none tracking-normal">
                  Incidentele vordering tot tussenkomst | ex artikel 217 Rv
                </h3>
                <p className="mt-4 font-poppins font-semibold text-[24px] leading-relaxed tracking-normal text-white/90">
                  Een persoon die geen onderdeel is van een lopende procedure kan met
                  succes een vordering tot tussenkomst indienen indien hij voldoet aan
                  twee voorwaarden: (i) hij moet voldoende belang hebben om zich te
                  mengen in de procedure in verband met eventuele nadelige gevolgen die
                  hij zal ondervinden als gevolg van de uitspraak in de hoofdzaak, en
                  (ii) hij moet stellen dat hij een zelfstandige vordering wenst in te
                  stellen in de hoofdzaak{" "}
                  <Link href={allCasesHref} className="underline underline-offset-2 hover:text-white">
                    Lees meer...
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
            className="inline-flex items-center justify-center gap-2.5 h-[80px] px-12 rounded-2xl bg-gradient-to-r from-[#0A2540] to-brand-blue-dark text-white font-poppins font-bold text-[24px] leading-none tracking-normal hover:opacity-95 transition-opacity"
          >
            Bekijk alle cases
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
