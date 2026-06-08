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
  title: "Anil Ramdas | LOGOS LEGAL",
  description:
    "Anil Ramdas — advocaat in internationaal strafrecht. Opleiding, expertise en specialismen van Anil Ramdas bij LOGOS LEGAL.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Anil Ramdas" },
];

const checks = [
  "Studie economie en rechten aan de Erasmus Universiteit Rotterdam en de Katholieke Universiteit Tilburg.",
  "Veertien jaar werkzaam geweest als zelfstandig ondernemer binnen de juridische praktijk.",
  "Sinds 2019 werkzaam in samenwerking met Pejman Salim binnen Logos Legal.",
  "Brede ervaring in complexe civiele en strafrechtelijke zaken met een strategische aanpak.",
];

const expertiseParagraphs = [
  "Met meer dan twintig jaar ervaring weet Anil van de hoed en de rand op het gebied van civiel en strafrecht. Hij is graag nauw betrokken bij zijn cliënten en wil niet alleen inzicht hebben in de zaak, maar ook in de persoon erachter. Dankzij zijn scherpe analytische vermogen weet hij zaken tactisch en strategisch neer te zetten. Zijn aanpak kenmerkt zich door betrokkenheid, doordachtheid en een sterke focus op het behalen van het best mogelijke resultaat.",
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

export default function AnilRamdasPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Anil Ramdas"
        subtitle="Advocaat in Internationaal strafrecht"
      />
      <Breadcrumb items={breadcrumbItems} />

      <AdvocaatBackground
        heading={
          <>
            Opleiding, specialisaties <span className="text-brand-blue">en ervaring</span>
          </>
        }
        intro="Gespecialiseerd in civiel recht en strafrecht met meer dan 20 jaar praktijkervaring."
        checks={checks}
        imageSrc="/images/team/anil-ramdas/portrait.png"
        imageAlt="Anil Ramdas"
      />

      <AdvocaatStory
        imageSrc="/images/team/anil-ramdas/meeting.png"
        imageAlt="Anil Ramdas in gesprek"
        quote="Ik ben graag nauw betrokken bij mijn cliënten"
        name="Anil Ramdas"
        role="Advocaat"
        expertiseHeading={
          <>
            Expertise <span className="text-brand-blue">en werkwijze</span>
          </>
        }
        expertiseParagraphs={expertiseParagraphs}
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
      />

      <AdvocaatRegistratie
        heading={
          <>
            Persoonlijkheid,
            <br />
            <span className="text-brand-blue">registratie en ontwikkeling</span>
          </>
        }
        paragraph="Anil wordt door collega's en cliënten omschreven als integer, deskundig en zorgvuldig. Hij beschikt over veel ervaring en inhoudelijke kennis en staat bekend als een echte teamplayer. Anil Ramdas heeft in het rechtsgebiedenregister van de Nederlandse orde van advocaten de rechtsgebieden strafrecht en civiel recht geregistreerd. Op grond van deze registratie is hij verplicht elk kalenderjaar volgens de normen van de Nederlandse Orde van Advocaten tien opleidingspunten te behalen op beide geregistreerde hoofdrechtsgebieden. In zijn spaarzame vrije tijd leest Anil graag, waarbij zijn interesse vooral uitgaat naar vakinhoudelijke literatuur binnen de advocatuur."
        email="anil.ramdas@logoslegal.nl"
        phone="+31 85 20 30 155"
        imageSrc="/images/team/anil-ramdas/consult-bw.png"
        imageAlt="Anil Ramdas"
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
            Anil&apos;s <span className="text-brand-blue">specialisme</span>
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
