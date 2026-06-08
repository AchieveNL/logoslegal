import Link from "next/link";
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

const cases: CaseItem[] = [
  {
    category: "Mensenrechten",
    title: "Onmiddellijke vrijlating en toekenning van de meldplichtstatus",
    description:
      "In een kort geding aangespannen door Pejman Salim heeft de voorzieningenrechter geoordeeld over de toepassing van de Wet herziening ten nadele (USB-wet) en de onmiddellijke vrijlating van de veroordeelde, alsmede de toekenning van de meldplichtstatus, gelast.",
    image: "/images/cases/meldplichtstatus.png",
    href: "/cases",
  },
  {
    category: "Contracten en aansprakelijkheid",
    title: "Boete voor overtreding van het rookverbod",
    description:
      "Als cafés of restaurants hun klanten de mogelijkheid willen bieden om buiten te roken in een overdekte ruimte, moeten zij ervoor zorgen dat deze ruimte aan ten minste één zijde volledig open is, ongeacht de grootte van die zijde. Anders lopen zij het risico op een boete wegens het niet handhaven van het rookverbod.",
    image: "/images/cases/no-smoking.png",
    href: "/cases",
  },
  {
    category: "Mensenrechten",
    title: "Onmiddellijke vrijlating en toekenning van de meldplichtstatus",
    description:
      "In een kort geding aangespannen door Pejman Salim heeft de voorzieningenrechter geoordeeld over de toepassing van de Wet herziening ten nadele (USB-wet) en de onmiddellijke vrijlating van de veroordeelde, alsmede de toekenning van de meldplichtstatus, gelast.",
    image: "/images/cases/meldplichtstatus.png",
    href: "/cases",
  },
  {
    category: "Mensenrechten",
    title:
      "Incidentele vordering tot tussenkomst | op grond van artikel 217 van het Wetboek van Burgerlijke Rechtsvordering.",
    description:
      "Een persoon die geen partij is in een aanhangige procedure kan met succes een vordering tot tussenkomst instellen indien hij aan twee voorwaarden voldoet: (i) hij moet een voldoende belang hebben bij tussenkomst in de procedure, gelet op eventuele nadelige gevolgen.",
    image: "/images/cases/rechtbank.png",
    href: "/cases",
  },
];

export default function CasesListGrid() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8">
        {/* Heading */}
        <div className="max-w-[640px] mb-12">
          <h2 className="font-raleway font-bold text-[36px] md:text-[56px] leading-none tracking-normal text-brand-blue">
            Onze cases
          </h2>
          <p className="mt-4 font-poppins font-medium text-base md:text-[24px] leading-relaxed tracking-normal text-[#292D32]">
            Onze zaken geven inzicht in hoe wij complexe juridische vraagstukken
            omzetten in heldere oplossingen. Van strategisch advies tot procederen:
            elke zaak weerspiegelt onze toewijding aan resultaat, discretie en
            maatwerk.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <article
              key={`${c.title}-${i}`}
              className="flex flex-col bg-brand-blue-light rounded-[24px] overflow-hidden lg:h-[1020px]"
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
                  className="mt-7 inline-flex items-center justify-center gap-2.5 self-start w-[260px] max-w-full h-[80px] rounded-2xl bg-brand-blue text-white font-poppins font-bold text-[24px] leading-none tracking-normal hover:bg-brand-blue-dark transition-colors"
                >
                  Lees meer
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
