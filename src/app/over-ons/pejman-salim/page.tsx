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
  title: "Pejman Salim | LOGOS LEGAL",
  description:
    "Pejman Salim — advocaat in internationaal strafrecht. Opleiding, ervaring, expertise en specialismen van Pejman Salim bij LOGOS LEGAL.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Pejman Salim" },
];

const checks = [
  "Oprichter en bestuurder van diverse mensenrechten- en belangenorganisaties op nationaal en internationaal niveau.",
  "Sinds 2014 werkzaam als advocaat met brede ervaring binnen het civiel- en strafrecht.",
  "Gespecialiseerd in financieel strafrecht in combinatie met civiel recht.",
  "Achtergrond in burgerlijk recht en erfrecht binnen de Amsterdamse advocatuur.",
  "In 2024 afgeronde postacademische opleiding Onderneming en Aansprakelijkheid aan de Grotius Academie.",
];

const expertiseParagraphs = [
  "Van civiele zaken tegen de overheid tot aan met een zaak het hele huurrecht op zijn kop zetten. Pejman is van vele markten thuis, maar zijn proceszaken hebben met elkaar gemeen dat ze complex zijn. Zo werkt hij het liefst: diep inhoudelijk en wetenschappelijk ingesteld.",
  "Wanneer Pejman in een zaak bijt, laat hij niet meer los en doet hij alles wat binnen zijn mogelijkheden ligt om de zaak tot een goed einde te brengen, bij voorkeur op een creatieve wijze. Zijn collega's en cliënten omschrijven hem als scherp, betrokken, oplossingsgericht, zeer deskundig en als een advocaat met enorm veel kennis. Zijn zaken halen regelmatig het nieuws, onder meer zijn baanbrekende werk voor gedupeerden van de toeslagenaffaire.",
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

export default function PejmanSalimPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Pejman Salim"
        subtitle="Advocaat in Internationaal strafrecht"
      />
      <Breadcrumb items={breadcrumbItems} />

      <AdvocaatBackground
        heading={
          <>
            Opleiding, ervaring <span className="text-brand-blue">en achtergrond</span>
          </>
        }
        intro="Ben jij een complexe proceszaak? Want Pejman Salim zou zich er volledig in vastbijten — en ik eerlijk gezegd ook."
        checks={checks}
        imageSrc="/images/team/pejman-salim/portrait.png"
        imageAlt="Pejman Salim"
      />

      <AdvocaatStory
        imageSrc="/images/team/pejman-salim/meeting.png"
        imageAlt="Pejman Salim aan het werk"
        quote="Wanneer ik in een zaak bijt, laat ik niet meer los"
        name="Pejman Salim"
        role="Advocaat"
        expertiseHeading={
          <>
            Expertise, <span className="text-brand-blue">aanpak en resultaten</span>
          </>
        }
        expertiseParagraphs={expertiseParagraphs}
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
      />

      <AdvocaatRegistratie
        heading={
          <>
            Registratie, ontwikkeling
            <br />
            <span className="text-brand-blue">en betrokkenheid</span>
          </>
        }
        paragraph="Pejman heeft in het rechtsgebiedenregister van de Nederlandse orde van advocaten de rechtsgebieden strafrecht, algemene praktijk burgerlijk recht en ondernemingsrecht geregistreerd. Op grond van deze registratie is hij verplicht elk kalenderjaar volgens de normen van de Nederlandse Orde van Advocaten tien opleidingspunten te behalen op ieder geregistreerd hoofdrechtsgebied. Pejman volgt de politieke actualiteit op de voet. Hij werkte als acteur voor film en theater, en is nog altijd graag in het theater te vinden."
        email="pejman.salim@logoslegal.nl"
        phone="+31 85 20 30 155"
        imageSrc="/images/team/pejman-salim/consult-bw.png"
        imageAlt="Pejman Salim in gesprek"
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
            Pejman&apos;s <span className="text-brand-blue">specialisme</span>
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
