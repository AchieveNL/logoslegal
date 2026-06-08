import Link from "next/link";
import Image from "next/image";

interface ExpertiseRow {
  title: string;
  subtitle: string;
  href: string;
  image: string;
}

const rows: ExpertiseRow[] = [
  {
    title: "Contracten en aansprakelijkheid",
    subtitle: "Gemoedsrust door duidelijke afspraken en slimme juridische strategieën.",
    href: "/contracten",
    image: "/images/expertise/contracten.png",
  },
  {
    title: "Arbeidsrecht",
    subtitle: "Zorg voor naleving en duidelijkheid in iedere arbeidskwestie.",
    href: "/arbeidsrecht",
    image: "/images/expertise/arbeidsrecht.jpg",
  },
  {
    title: "Onderwijsrecht",
    subtitle: "Met vertrouwen navigeren binnen het onderwijs.",
    href: "/onderwijsrecht",
    image: "/images/expertise/onderwijsrecht.jpg",
  },
  {
    title: "Financieel strafrecht",
    subtitle:
      "Uw rechten beschermen met proactieve en oplossingsgerichte verdedigingsstrategieën.",
    href: "/financieel-strafrecht",
    image: "/images/expertise/financieel-strafrecht.jpg",
  },
  {
    title: "Mensenrechten",
    subtitle:
      "Ons kantoor adviseert ondernemers en particulieren bij juridische vraagstukken en biedt ondersteuning op het gebied van fundamentele rechten en kwetsbare personen.",
    href: "/mensenrechten",
    image: "/images/expertise/mensenrechten.jpg",
  },
];

const checks = [
  "Een team van toegewijde juridische professionals",
  "Voor het bieden van uitzonderlijke service en ondersteuning.",
  "Wij streven naar excellentie in elke zaak die wij behandelen.",
  "Onze expertise strekt zich uit over diverse rechtsgebieden, waardoor wij u breed en volledig kunnen ondersteunen.",
  "Klanttevredenheid is onze hoogste prioriteit en vormt de basis voor al onze beslissingen.",
];

const ArrowUpRight = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="rotate-45">
    <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ExpertiseOverview() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_832px] gap-12 items-start">
          {/* Left: intro + checklist */}
          <div className="max-w-[760px]">
            <h2 className="font-raleway font-bold text-[36px] md:text-[56px] leading-none tracking-normal text-brand-blue">
              Onze expertise
            </h2>
            <p className="mt-5 max-w-[620px] font-poppins font-medium text-base md:text-[24px] leading-relaxed tracking-normal text-[#292D32]">
              Onze ondernemingsrechtpraktijk biedt uitgebreide juridische
              dienstverlening aan bedrijven van elke omvang, van startups tot
              multinationale ondernemingen.
            </p>
            <hr className="my-8 border-brand-gray" />
            <ul className="flex flex-col gap-5">
              {checks.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-1">
                    <circle cx="12" cy="12" r="11" stroke="#087AEC" strokeWidth="2" />
                    <path d="M7 12.5L10.5 16L17 9" stroke="#087AEC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-poppins font-medium text-[20px] leading-relaxed tracking-normal text-black">
                    {text.startsWith("Klanttevredenheid") ? (
                      <>
                        Klanttevredenheid is onze hoogste prioriteit en vormt de
                        <br />
                        basis voor al onze beslissingen.
                      </>
                    ) : (
                      text
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: expertise rows */}
          <div className="flex flex-col gap-4">
            {rows.map((row) => (
              <Link
                key={row.title}
                href={row.href}
                className="group flex items-center gap-2.5 w-full min-h-[96px] bg-brand-blue-light rounded-lg p-2"
              >
                <div className="relative w-[152px] h-[80px] shrink-0 rounded-lg overflow-hidden bg-brand-blue/10">
                  <Image
                    src={row.image}
                    alt={row.title}
                    fill
                    className="object-cover"
                    sizes="152px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-poppins font-semibold text-[20px] md:text-[24px] leading-tight tracking-normal text-[#002B58]">
                    {row.title}
                  </h3>
                  <p className="mt-1.5 font-poppins font-medium text-[14px] leading-snug tracking-normal text-[#292D32]">
                    {row.subtitle}
                  </p>
                </div>
                <span className="shrink-0 w-[72px] h-[72px] rounded-lg bg-brand-blue text-white flex items-center justify-center group-hover:bg-brand-blue-dark transition-colors">
                  <ArrowUpRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
