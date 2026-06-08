import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AdvocaatBackground from "@/components/sections/AdvocaatBackground";
import AdvocaatStory from "@/components/sections/AdvocaatStory";
import AdvocaatRegistratie from "@/components/sections/AdvocaatRegistratie";
import AdvocaatSpecialisme from "@/components/sections/AdvocaatSpecialisme";
import CTABanner from "@/components/sections/CTABanner";
import TeamGrid from "@/components/sections/TeamGrid";

export const metadata: Metadata = {
  title: "Arzu Yandere | LOGOS LEGAL",
  description:
    "Arzu Yandere — advocaat onderwijsrecht & arbeidsrecht. Opleiding, expertise, trainingen en specialismen van Arzu Yandere bij LOGOS LEGAL.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Arzu Yandere" },
];

const checks = [
  "Ruim negen jaar actief binnen de advocatuur met focus op complexe onderwijs- en arbeidsrechtelijke vraagstukken.",
  "Advisering en procesvoering voor schoolbesturen, raden van toezicht, werkgevers en werknemers.",
  "Gespecialiseerd in financieel strafrecht in combinatie met civiel recht.",
  "In 2024 afgeronde postacademische opleiding Arbeidsrecht aan de Grotius Academie.",
];

const expertiseParagraphs = [
  "Arzu studeerde aan de Erasmus Universiteit te Rotterdam en werd na bijna zeven jaar als jurist bij ISBO te hebben gewerkt in 2016 als advocaat beëdigd. Voordat ze zich aansloot bij Dworkin Law, de voorganger van Logos Legal, werkte ze als advocaat bij verschillende advocatenkantoren in Den Haag en Amsterdam. Dankzij haar jarenlange kennis en ervaring wordt Arzu regelmatig gevraagd om incompany cursussen en trainingen te verzorgen. Deze hebben onder andere betrekking op arbeidsongeschiktheid en verzuimbegeleiding, rechtspositie van werknemers, medezeggenschap en governance. Voor E-WISE ontwikkelde zij de cursussen Dossieropbouw bij disfunctioneren en Onderwijsrecht: informatieverstrekking aan ouders en derden. Arzu is voorzitter van de Vereniging voor Onderwijsrecht en lid van diverse arbeidsrechtelijke verenigingen, waaronder de specialisatievereniging VAAN (Vereniging Arbeidsrechtadvocaten Nederland).",
];

const specialismeItems = [
  {
    iconSrc: "/images/specialisme/civiele-procedures.svg",
    title: "Civiele procedures en contracten",
    description:
      "Het oplossen van contractuele geschillen, aansprakelijkheidskwesties en schadeclaims, vaak in samenwerking met het Burgerlijk Wetboek.",
  },
  {
    iconSrc: "/images/specialisme/arbeidsrecht.svg",
    title: "Arbeidsrecht",
    description:
      "Het vertegenwoordigen van werkgevers of werknemers in zaken betreffende ontslag, arbeidsovereenkomsten en arbeidsconflicten.",
  },
  {
    iconSrc: "/images/specialisme/ondernemingsrecht.svg",
    title: "Ondernemings- en handelsrecht",
    description:
      "Het behandelen van bedrijfsgeschillen, aandeelhoudersconflicten, fusies en overnames (M&A) en bedrijfsherstructureringen.",
  },
  {
    iconSrc: "/images/specialisme/huurrecht.svg",
    title: "Huurrecht",
    description:
      "Assisting with rental agreements, evictions, and housing disputes (with a focus on high tenant protection).",
  },
];

export default function ArzuYanderePage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Arzu Yandere"
        subtitle="Advocaat onderwijsrecht & arbeidsrecht"
      />
      <Breadcrumb items={breadcrumbItems} />

      <AdvocaatBackground
        heading={
          <>
            Opleiding, specialisaties <span className="text-brand-blue">en ervaring</span>
          </>
        }
        intro="Gespecialiseerd in onderwijsrecht en arbeidsrecht met meer dan 16 jaar ervaring."
        checks={checks}
        imageSrc="/images/team/arzu-yandere/portrait.png"
        imageAlt="Arzu Yandere"
      />

      <AdvocaatStory
        imageSrc="/images/team/arzu-yandere/meeting.png"
        imageAlt="Arzu Yandere aan het werk"
        quote="Met hart voor de zaak zet ik mijn kennis en ervaring op dit moment op ambitieuze wijze in voor Logos Legal"
        name="Arzu Yandere"
        role="Advocaat"
        expertiseHeading={
          <>
            Expertise, trainingen en{" "}
            <span className="text-brand-blue">maatschappelijke betrokkenheid</span>
          </>
        }
        expertiseParagraphs={expertiseParagraphs}
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
      />

      <AdvocaatRegistratie
        heading={
          <>
            Werkwijze, registratie en
            <br />
            <span className="text-brand-blue">persoonlijkheid</span>
          </>
        }
        paragraph="Met hart voor de zaak zet Arzu haar kennis en ervaring op ambitieuze wijze in voor Logos Legal. Zij wordt gewaardeerd door collega's en cliënten vanwege haar betrokkenheid, georganiseerdheid, professionaliteit, haar systematische manier van werken en haar vermogen om snel te schakelen. Arzu heeft in het rechtsgebiedenregister van de Nederlandse orde van advocaten de rechtsgebieden onderwijsrecht en arbeidsrecht geregistreerd. Op grond van deze registratie is zij verplicht elk kalenderjaar volgens de normen van de Nederlandse Orde van Advocaten tien opleidingspunten te behalen op beide geregistreerde hoofdrechtsgebieden. In haar vrije tijd houdt Arzu zich graag bezig met koken en het ontwerpen en maken van kleding."
        email="arzu.yandere@logoslegal.nl"
        phone="+31 85 20 30 155"
        imageSrc="/images/team/arzu-yandere/consult-bw.png"
        imageAlt="Arzu Yandere in gesprek"
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
      />

      <CTABanner
        heading="Klaar om samen te werken met ons deskundige juridische team?"
        subtitle="Plan vandaag nog een consult in en ontdek hoe wij u kunnen ondersteunen bij uw juridische behoeften."
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
      />

      <AdvocaatSpecialisme
        heading={
          <>
            Arzu&apos;s <span className="text-brand-blue">specialisme</span>
          </>
        }
        subtitle="Brede juridische expertise met focus op effectieve oplossingen"
        items={specialismeItems}
      />

      <TeamGrid />

      <Footer />
    </>
  );
}
