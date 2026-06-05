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
  title: "Arbeidsrecht | LOGOS LEGAL",
  description:
    "Sterke arbeidsrechtelijke posities door praktische begeleiding en doortastend optreden. Bescherm uw medewerkers en organisatie.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Arbeidsrecht" },
];

const checkItems = [
  "Het opstellen, beoordelen en onderhandelen van arbeidsovereenkomsten",
  "Adviseren over kwesties zoals contractwijzigingen, ontslag en conflicten",
  "Incompany trainingen en praktische juridische ondersteuning om geschillen te voorkomen",
];

const benefits = [
  {
    title: "Voorkom kostbare geschillen",
    description:
      "Goed gestructureerde arbeidsovereenkomsten en deskundige begeleiding helpen u misverstanden te voorkomen, arbeidsconflicten te verminderen en het risico op kostbare juridische claims te beperken.",
  },
  {
    title: "Zorg voor naleving van wet- en regelgeving",
    description:
      "Zorg ervoor dat uw beleid en procedures aansluiten op arbeidswet- en regelgeving, van ziekteverzuim tot ontslag, zodat uw organisatie beschermd blijft tegen boetes en reputatieschade.",
  },
  {
    title: "Ondersteun uw medewerkers",
    description:
      "Door praktische adviezen, duidelijke procedures en transparante communicatie te bieden, bevordert u vertrouwen, verbetert u de werksfeer en creëert u een productievere en stabielere werkomgeving.",
  },
];

export default function ArbeidsrechtPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Arbeidsrecht"
        subtitle="Sterke arbeidsrechtelijke posities door praktische begeleiding en doortastend optreden."
      />
      <Breadcrumb items={breadcrumbItems} />

      <PracticeAreaIntro
        heading={
          <>
            <span className="text-brand-blue">Bescherm</span> uw medewerkers en
            organisatie met{" "}
            <span className="text-brand-blue">deskundige</span> juridische
            begeleiding
          </>
        }
        subheading="Zorg voor naleving en duidelijkheid in elke arbeidsrechtelijke kwestie."
        checkItems={checkItems}
        summary="Wij vertalen complex arbeidsrecht naar duidelijke, direct toepasbare oplossingen."
        ctaLabel="Praat met Linda"
        ctaHref="/contact"
        imageSrc="/images/practice-area-hero.png"
        imageAlt="LOGOS LEGAL arbeidsrecht advies"
        contactName="Linda"
        contactImageSrc="/images/linda-cutout.png"
      />

      <BenefitsSection
        heading={
          <>
            <span className="text-brand-blue">Bescherm</span> uw werkplek en uw
            mensen
          </>
        }
        benefits={benefits}
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
        imageSrc="/images/benefits-image.png"
        imageAlt="Juridische begeleiding op de werkplek"
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
            Arbeidsrechtelijke <span className="text-brand-blue">uitdagingen</span>{" "}
            omzetten in <span className="text-brand-blue">zekerheid</span>
          </>
        }
        paragraphs={[
          "Bij Logos Legal gaan wij verder dan standaard juridisch advies. Wij analyseren uw organisatie, signaleren mogelijke knelpunten en bieden praktische oplossingen die aansluiten op uw situatie. Of het nu gaat om het opstellen van contracten, het begeleiden van ziekteverzuim, het afhandelen van ontslag of het trainen van uw team, onze proactieve en oplossingsgerichte aanpak zorgt voor naleving, minimaliseert geschillen en versterkt de arbeidsverhoudingen.",
        ]}
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
        imagePrimary="/images/challenge-1.png"
        imageSecondary="/images/challenge-2.png"
        imageAlt="Arbeidsrechtelijke begeleiding"
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
        contactImageSrc="/images/linda-cutout.png"
        testimonial={{
          quote:
            "Samenwerken met Logos Legal was een keerpunt in ons octrooigeschil. Hun expertise in het intellectueel eigendomsrecht was gedurende het hele proces duidelijk zichtbaar, en zij behaalden een overwinning die niet alleen onze innovatie beschermde, maar ook onze marktpositie versterkte.",
          author: "Laura Chen",
          role: "Managing Director",
        }}
      />

      <FaqSection defaultCategory="arbeidsrecht" />

      <ExpertiseCarousel />

      <Footer />
    </>
  );
}
