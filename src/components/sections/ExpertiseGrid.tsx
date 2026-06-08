import Link from "next/link";
import type { ReactNode } from "react";

interface ExpertiseItem {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}

const ArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="rotate-45">
    <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const items: ExpertiseItem[] = [
  {
    title: "Contracten- en aansprakelijkheidsrecht",
    href: "/contracten",
    description:
      "Wij helpen bij het opstellen, beoordelen en onderhandelen van contracten die zijn afgestemd op uw behoeften. Van handelsafspraken tot algemene voorwaarden zorgen wij voor duidelijkheid en naleving. Daarnaast adviseren wij over aansprakelijkheidskwesties, waaronder geschillen, schade en vertegenwoordiging in juridische procedures.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 8h5M9 12h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M19.5 11.5l2 2-5 5-2.5.5.5-2.5 5-5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Arbeidsrecht",
    href: "/arbeidsrecht",
    description:
      "Wij adviseren zowel werkgevers als werknemers over alle aspecten van het arbeidsrecht — van het opstellen van contracten tot het oplossen van arbeidsconflicten. Onze diensten omvatten onder andere ziekteverzuim, contractwijzigingen, ontslag en meer. Daarnaast bieden wij in-company trainingen en praktische juridische ondersteuning om kostbare geschillen te voorkomen.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 9.5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M6 12.5h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 14.5l-4 5M12 14.5l4 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Onderwijsrecht",
    href: "/onderwijsrecht",
    description:
      "Het onderwijsrecht omvat meerdere rechtsgebieden, waaronder arbeidsrecht, governance en aansprakelijkheid. Wij bieden strategisch advies en juridische ondersteuning bij onder andere fusies, herstructureringen, bestuurswijzigingen, medezeggenschap en bekostiging. Daarnaast verzorgen wij trainingen voor schoolbesturen, raden van toezicht en medezeggenschapsraden.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M2.5 9L12 4.5 21.5 9 12 13.5 2.5 9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M6.5 11v4.5c0 1 2.5 2.5 5.5 2.5s5.5-1.5 5.5-2.5V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.5 9v4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Financieel strafrecht",
    href: "/financieel-strafrecht",
    description:
      "Of u nu te maken heeft met ernstige strafzaken of economische delicten, onze advocaten bieden proactieve en deskundige verdediging. Wij behandelen ook internationale zaken, waaronder uitlevering, grensoverschrijdende criminaliteit en procedures bij internationale rechtbanken. Daarnaast adviseren wij NGO's over vervolgings- en onderzoeksopties in internationale strafzaken.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="3.5" y="7" width="17" height="12.5" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 10v6.5M13.6 11.4a1.7 1.7 0 0 0-1.6-1 1.5 1.5 0 0 0-.3 3 1.6 1.6 0 0 1 .3 3 1.7 1.7 0 0 1-1.6-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Mensenrechten",
    href: "/mensenrechten",
    description:
      "Onze advocaten zetten zich in voor pro bono zaken en ondersteunen particulieren en organisaties met beperkte middelen, met name op het gebied van mensenrechten, vrijheid van meningsuiting, discriminatie en internationale misdrijven. Daarnaast staan wij mensen in kwetsbare situaties bij binnen civiele, bestuursrechtelijke en strafrechtelijke kwesties. Vanwege beperkte capaciteit kan een selectie van zaken worden gemaakt.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="9" r="1.9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4.5 17.5c0-2.5 2-4.3 4.5-4.3s4.5 1.8 4.5 4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M14.5 13.6c2.2.1 4 1.7 4 3.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ExpertiseGrid({ contactHref = "/contact" }: { contactHref?: string }) {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1608px] mx-auto px-6 md:px-12 lg:px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-raleway font-bold text-[32px] md:text-[56px] leading-none tracking-normal text-center text-[#002B58]">
            Onze <span className="text-brand-blue">juridisch</span> expertise
          </h2>
          <p className="mt-3 font-poppins font-medium text-base md:text-[24px] leading-none tracking-normal text-center text-brand-dark/70">
            Jarenlange ervaring
          </p>
        </div>

        {/* Grid: 5 expertise cards + 1 CTA cell */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col items-center text-center rounded-[24px] px-8 py-10 lg:h-[652px] ${
                i % 2 === 0 ? "bg-brand-blue-light" : "bg-white"
              }`}
            >
              <span className="text-[#1A1A1A] mb-5">{item.icon}</span>
              <h3 className="font-poppins font-bold text-[28px] md:text-[32px] leading-tight tracking-normal text-center text-[#002B58] mb-5">
                {item.title}
              </h3>
              <p className="font-poppins font-semibold text-[20px] leading-relaxed tracking-normal text-center text-[#514D4D] mb-7">
                {item.description}
              </p>
              {item.title === "Mensenrechten" ? (
                <Link
                  href={item.href}
                  className="mt-auto self-center inline-flex items-center justify-center gap-2.5 w-[320px] max-w-full h-[80px] rounded-2xl border-2 border-[#002B58] text-[#002B58] font-poppins font-bold text-[24px] leading-none tracking-normal hover:bg-[#002B58] hover:text-white transition-colors"
                >
                  Lees meer
                  <ArrowUpRight />
                </Link>
              ) : (
                <Link
                  href={item.href}
                  className="mt-auto inline-flex items-center gap-2 self-center font-poppins font-bold text-[24px] leading-none tracking-normal text-[#002B58] hover:text-brand-blue transition-colors"
                >
                  Lees meer
                  <ArrowUpRight />
                </Link>
              )}
            </div>
          ))}

          {/* CTA cell */}
          <div className="flex flex-col items-center justify-center text-center px-8 py-10 lg:h-[652px]">
            <span className="text-brand-blue mb-5">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 3v18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M5 7h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M7 4.5 17 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M5 7l-2.5 5.5h5L5 7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M19 7l-2.5 5.5h5L19 7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M9 21h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </span>
            <h3 className="font-poppins font-bold text-[32px] md:text-[40px] leading-none tracking-normal text-center text-[#002B58] mb-3">
              <span className="text-brand-blue">Professionele</span> hulp nodig?
            </h3>
            <p className="font-poppins font-bold text-[20px] leading-relaxed tracking-normal text-center text-[#292D32] mb-8 max-w-[400px]">
              Neem contact met ons op en laten we samenwerken
            </p>
            <Link
              href={contactHref}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-gradient-to-r from-[#0A2540] to-brand-blue-dark text-white font-poppins font-bold hover:opacity-95 transition-opacity"
            >
              Neem contact op
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
