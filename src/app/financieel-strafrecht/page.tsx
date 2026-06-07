import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PracticeAreaIntro from "@/components/sections/PracticeAreaIntro";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CTABanner from "@/components/sections/CTABanner";
import ChallengeSection from "@/components/sections/ChallengeSection";
import StepsSection from "@/components/sections/StepsSection";
import TestimonialsGrid from "@/components/sections/TestimonialsGrid";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import ExpertiseCarousel from "@/components/sections/ExpertiseCarousel";

export const metadata: Metadata = {
  title: "Financieel strafrecht | LOGOS LEGAL",
  description:
    "Effectieve verdediging door strategisch inzicht en tijdige bijstand. Sterke vertegenwoordiging bij strafrechtelijke en financiële zaken.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Financieel strafrecht" },
];

const checkItems = [
  "Bijstand bij strafrechtelijke en financiële onderzoeken",
  "Internationale zaken, uitlevering en grensoverschrijdende kwesties",
  "Advies en vertegenwoordiging voor ngo's en organisaties",
];

const benefits = [
  {
    title: "Vermijd juridische valkuilen",
    description:
      "Strategisch advies beperkt uw blootstelling aan strafrechtelijke of financiële aansprakelijkheid.",
  },
  {
    title: "Navigeer door complexe zaken",
    description:
      "Ervaren begeleiding helpt bij het managen van onderzoeken, internationale procedures en compliancevraagstukken.",
  },
  {
    title: "Bescherm uw reputatie",
    description:
      "Sterke vertegenwoordiging en heldere strategieën beschermen uw persoonlijke of organisatorische reputatie.",
  },
];

export default function FinancieelStrafrechtPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Financieel strafrecht"
        subtitle="Effectieve verdediging door strategisch inzicht en tijdige bijstand."
      />
      <Breadcrumb items={breadcrumbItems} />

      <PracticeAreaIntro
        heading={
          <>
            <span className="text-brand-blue">Strategische verdediging</span>{" "}
            wanneer het er echt toe doet
          </>
        }
        subheading="Uw rechten beschermen met proactieve, oplossingsgerichte verdedigingsstrategieën."
        checkItems={checkItems}
        summary="Wij combineren strategisch inzicht met doortastend handelen om uw belangen te beschermen."
        ctaLabel="Praat met Linda"
        ctaHref="/contact"
        imageSrc="/images/financieel-strafrecht/hero.png"
        imageAlt="LOGOS LEGAL financieel strafrecht advies"
        contactName="Linda"
        contactImageSrc="/images/shared/linda-cutout.png"
        heroHeightClass="lg:h-[886px]"
      />

      <BenefitsSection
        heading={
          <>
            <span className="text-brand-blue">Bescherm</span> uw rechten en
            reputatie
          </>
        }
        benefits={benefits}
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
        imageSrc="/images/financieel-strafrecht/benefits.png"
        imageAlt="Strafrechtelijke verdediging"
        quote={{
          text: "Samenwerken met LOGOS LEGAL was een game-changer voor ons octrooigeschil.",
          author: "Laura Chen",
          role: "Algemeen directeur",
        }}
      />

      <CTABanner
        heading="Klaar om samen te werken met ons deskundige juridische team?"
        subtitle="Plan vandaag nog een consult in en ontdek hoe wij u kunnen ondersteunen bij uw juridische behoeften."
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
      />

      <ChallengeSection
        heading={
          <>
            Juridische uitdagingen omzetten in{" "}
            <span className="text-brand-blue">strategisch voordeel</span>
          </>
        }
        paragraphs={[
          "Bij Logos Legal handelen wij snel en doortastend om uw rechten te beschermen. Ons team analyseert elk detail, anticipeert op mogelijke risico's en ontwikkelt een heldere strategie voor strafrechtelijke of financiële zaken. Of het nu gaat om nationale onderzoeken, grensoverschrijdende kwesties of het adviseren van ngo's over complexe internationale misdrijven, wij combineren diepgaande expertise met praktische, oplossingsgerichte aanpakken om uw belangen in elke fase te verdedigen.",
        ]}
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
        imagePrimary="/images/financieel-strafrecht/challenge-1.png"
        imageSecondary="/images/financieel-strafrecht/challenge-2.png"
        imageAlt="Financieel strafrecht begeleiding"
      />

      <StepsSection />

      <TestimonialsGrid />

      <ContactSection
        heading={
          <>
            Wij horen <span className="text-brand-blue">graag</span> van u
          </>
        }
        subheading="Van 09:00 tot 17:00 uur, maandag tot en met vrijdag"
        contactName="Linda"
        contactGreeting="Hallo, ik ben Linda. Waarmee kan ik u vandaag helpen?"
        contactPhone="+31 85 20 30 155"
        contactWhatsapp="+31 6 25 199 747"
        contactImageSrc="/images/shared/linda-cutout.png"
        testimonial={{
          quote:
            "Samenwerken met Logos Legal was een keerpunt in ons octrooigeschil. Hun expertise in het intellectueel eigendomsrecht was gedurende het hele proces duidelijk zichtbaar, en zij behaalden een overwinning die niet alleen onze innovatie beschermde, maar ook onze marktpositie versterkte.",
          author: "Laura Chen",
          role: "Managing Director",
        }}
      />

      <FaqSection defaultCategory="criminal" />

      <ExpertiseCarousel />

      <Footer />
    </>
  );
}
