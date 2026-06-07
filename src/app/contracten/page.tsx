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
  title: "Contracten en aansprakelijkheid | LOGOS LEGAL",
  description:
    "Juridische zekerheid door helder advies en strategische begeleiding. Bescherm uw belangen met afdwingbare overeenkomsten.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contracten en aansprakelijkheid" },
];

const checkItems = [
  "Het opstellen, beoordelen en onderhandelen van op maat gemaakte contracten",
  "Adviseren over aansprakelijkheid, schade en risicobeheer",
  "U vertegenwoordigen bij geschillen en juridische procedures",
];

const benefits = [
  {
    title: "Voorkom kostbare geschillen",
    description:
      "Goed opgestelde contracten en duidelijke afspraken helpen u misverstanden, financiële verliezen en juridische procedures te voorkomen.",
  },
  {
    title: "Beheer risico's effectief",
    description:
      "Wij signaleren mogelijke aansprakelijkheden vroegtijdig, zodat u proactief kunt handelen en uw zakelijke of persoonlijke belangen kunt beschermen.",
  },
  {
    title: "Zorg voor afdwingbare overeenkomsten",
    description:
      "Onze juridische expertise zorgt ervoor dat uw contracten voldoen aan de wet- en regelgeving, praktisch uitvoerbaar zijn en afdwingbaar blijven bij geschillen.",
  },
];

export default function ContractenPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Contracten en aansprakelijkheid"
        subtitle="Juridische zekerheid door helder advies en strategische begeleiding."
      />
      <Breadcrumb items={breadcrumbItems} />

      <PracticeAreaIntro
        heading={
          <>
            <span className="text-brand-blue">Gemoedsrust</span> door duidelijke
            afspraken en slimme{" "}
            <span className="text-brand-blue">juridische strategieën</span>
          </>
        }
        subheading="Leg uw afspraken vast met duidelijkheid en vertrouwen."
        checkItems={checkItems}
        summary="Wij maken complexe juridische vraagstukken eenvoudig en direct toepasbaar."
        ctaLabel="Praat met Linda"
        ctaHref="/contact"
        imageSrc="/images/contracten/hero.png"
        imageAlt="LOGOS LEGAL contracten en aansprakelijkheid advies"
        contactName="Linda"
        contactImageSrc="/images/shared/linda-cutout.png"
      />

      <BenefitsSection
        heading={
          <>
            Bescherm uw <span className="text-brand-blue">belangen</span>
          </>
        }
        benefits={benefits}
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
        imageSrc="/images/contracten/benefits.png"
        imageAlt="Ondertekenen van een contract"
        quote={{
          text: "Working with LOGOS LEGAL was a game changer for our patent dispute.",
          author: "Laura Chen",
          role: "Managing Director",
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
            Risico omzetten in <span className="text-brand-blue">zekerheid</span>
          </>
        }
        paragraphs={[
          "Bij Logos Legal stellen wij niet alleen contracten op of beoordelen wij deze, wij zorgen ervoor dat zij daadwerkelijk aansluiten op uw behoeften en uw rechten beschermen. Van handelsovereenkomsten tot algemene voorwaarden: wij anticiperen op mogelijke geschillen, adviseren over aansprakelijkheidskwesties en bieden praktische begeleiding voor elke situatie.",
          "Onze unieke aanpak combineert grondige juridische analyse met pragmatische, oplossingsgerichte strategieën. Dit betekent dat u inzicht krijgt in risico's, concrete stappen ontvangt om conflicten te voorkomen en kunt rekenen op sterke bijstand wanneer geschillen ontstaan, zodat uw onderneming of persoonlijke belangen altijd goed beschermd blijven.",
        ]}
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
        imagePrimary="/images/contracten/challenge-1.png"
        imageSecondary="/images/contracten/challenge-2.png"
        imageAlt="Contracten en aansprakelijkheid begeleiding"
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

      <FaqSection defaultCategory="contracten" />

      <ExpertiseCarousel />

      <Footer />
    </>
  );
}
