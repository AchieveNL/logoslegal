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
  title: "Babi Azar | LOGOS LEGAL",
  description:
    "Babi Azar — advocaat bestuursrecht. Opleiding, expertise en specialismen van Babi Azar bij LOGOS LEGAL.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Babi Azar" },
];

const checks = [
  "Focus binnen het bestuursrecht op sociaal zekerheidsrecht, asiel- en vluchtelingenrecht en regulier vreemdelingenrecht.",
  "Achtergrond in de wiskunde met een sterk analytische en gestructureerde werkwijze.",
  "In 2009 afgestudeerd in bestuurs- en privaatrecht aan de Radboud Universiteit.",
  "Ruime ervaring opgedaan bij diverse advocatenkantoren en binnen zijn eigen praktijk, Azar Legal.",
];

const expertiseParagraphs = [
  "Babi richt zich voornamelijk op rechtsgebieden waarin de impact op het dagelijks leven van cliënten groot is. Binnen het bestuursrecht staat hij veelal cliënten bij in hun verhouding tot de overheid, vaak in kwetsbare posities. Daarnaast behandelt hij zaken op het gebied van familierecht, huurrecht en arbeidsrecht, waar juridische en persoonlijke belangen nauw samenkomen. Sinds maart 2026 is Babi verbonden aan Logos Legal, waar hij zijn opgebouwde expertise inzet voor uiteenlopende complexe juridische vraagstukken.",
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

export default function BabiAzarPage() {
  return (
    <>
      <Navbar />

      <HeroBanner title="Babi Azar" subtitle="Advocaat bestuursrecht" />
      <Breadcrumb items={breadcrumbItems} />

      <AdvocaatBackground
        heading={
          <>
            Opleiding, specialisaties <span className="text-brand-blue">en ervaring</span>
          </>
        }
        intro="Gespecialiseerd in bestuursrecht, familierecht, huurrecht en arbeidsrecht."
        checks={checks}
        imageSrc="/images/team/babi-azar/portrait.png"
        imageAlt="Babi Azar"
      />

      <AdvocaatStory
        imageSrc="/images/team/babi-azar/meeting.png"
        imageAlt="Babi Azar in gesprek"
        quote="Ik hecht waarde aan heldere communicatie en een zorgvuldige behandeling van iedere zaak"
        name="Babi Azar"
        role="Advocaat"
        expertiseHeading={
          <>
            Expertise en <span className="text-brand-blue">juridische aanpak</span>
          </>
        }
        expertiseParagraphs={expertiseParagraphs}
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
      />

      <AdvocaatRegistratie
        heading={
          <>
            Werkwijze en
            <br />
            <span className="text-brand-blue">persoonlijke benadering</span>
          </>
        }
        paragraph="Zijn werkwijze kenmerkt zich door een combinatie van analytisch vermogen en persoonlijke betrokkenheid. Babi hecht veel waarde aan heldere communicatie en een zorgvuldige behandeling van iedere zaak. Met zijn ervaring en opgebouwde expertise treedt hij doelgericht en doordacht op, met als uitgangspunt het behalen van het best mogelijke resultaat voor zijn cliënten."
        email="babi.azar@logoslegal.nl"
        phone="+31 85 20 30 155"
        imageSrc="/images/team/babi-azar/consult-bw.png"
        imageAlt="Babi Azar aan het werk"
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
            Babi&apos;s <span className="text-brand-blue">specialisme</span>
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
