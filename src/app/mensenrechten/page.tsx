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
  title: "Mensenrechten | LOGOS LEGAL",
  description:
    "Het beschermen van fundamentele rechten door toegewijde belangenbehartiging en juridische expertise. Ondersteuning voor kwetsbare personen en ngo's.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Mensenrechten" },
];

const checkItems = [
  "Juridische bijstand bij mensenrechtenschendingen en discriminatie",
  "Belangenbehartiging in civiele, bestuursrechtelijke en strafrechtelijke zaken",
  "Pro bono- en pro-deo-ondersteuning voor kwetsbare personen en ngo's",
];

const benefits = [
  {
    title: "Bescherm uw rechten",
    description:
      "Juridische ondersteuning helpt individuen zich te verdedigen tegen discriminatie, schendingen van rechten of machtsmisbruik.",
  },
  {
    title: "Navigeer door complexe systemen",
    description:
      "Expertise in civiel-, bestuurs- en strafrecht zorgt voor een effectieve behandeling van gevoelige zaken.",
  },
  {
    title: "Toegang tot recht voor iedereen",
    description:
      "Pro bono en gerichte ondersteuning bieden kwetsbare personen en ngo's de begeleiding die zij nodig hebben om hun rechten te doen gelden.",
  },
];

export default function MensenrechtenPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Mensenrechten"
        subtitle="Het beschermen van fundamentele rechten door toegewijde belangenbehartiging en juridische expertise."
      />
      <Breadcrumb items={breadcrumbItems} />

      <PracticeAreaIntro
        heading={
          <>
            <span className="text-brand-blue">Rechtvaardigheid</span> voor
            iedereen, <span className="text-brand-blue">bescherming</span> wanneer
            het ertoe doet
          </>
        }
        subheading="Toegewijde juridische ondersteuning voor fundamentele rechten en kwetsbare personen."
        checkItems={checkItems}
        summary="Wij bieden praktische en toegewijde juridische oplossingen voor wie dat het meest nodig heeft."
        ctaLabel="Praat met Linda"
        ctaHref="/contact"
        imageSrc="/images/mensenrechten/hero.png"
        imageAlt="LOGOS LEGAL mensenrechten advies"
        contactName="Linda"
        contactImageSrc="/images/shared/linda-cutout.png"
      />

      <BenefitsSection
        heading={
          <>
            <span className="text-brand-blue">Bescherm</span> fundamentele{" "}
            <br className="hidden lg:block" />
            rechten en <span className="text-brand-blue">ondersteun</span>{" "}
            kwetsbare groepen
          </>
        }
        benefits={benefits}
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
        imageSrc="/images/mensenrechten/benefits.png"
        imageAlt="Mensenrechtelijke begeleiding"
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
            <span className="text-brand-blue">rechtvaardigheid</span>
          </>
        }
        paragraphs={[
          "Bij Logos Legal bieden wij proactieve en toegewijde juridische begeleiding aan personen en organisaties die te maken hebben met mensenrechtelijke vraagstukken. Wij analyseren elke situatie, anticiperen op obstakels en bieden heldere strategieën om rechten te beschermen en rechtvaardigheid te bereiken. Van discriminatie en civiele geschillen tot complexe internationale kwesties: wij combineren expertise, praktische oplossingen en betrokkenheid om kwetsbare cliënten in elke fase te ondersteunen.",
        ]}
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
        imagePrimary="/images/mensenrechten/challenge-1.png"
        imageSecondary="/images/mensenrechten/challenge-2.png"
        imageAlt="Mensenrechten begeleiding"
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

      <FaqSection defaultCategory="human-rights" />

      <ExpertiseCarousel />

      <Footer />
    </>
  );
}
