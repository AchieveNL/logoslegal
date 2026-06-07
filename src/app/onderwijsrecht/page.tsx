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
  title: "Onderwijsrecht | LOGOS LEGAL",
  description:
    "Zelfverzekerde besluitvorming door multidisciplinaire juridische begeleiding. Strategische ondersteuning voor scholen, besturen en onderwijsprofessionals.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Onderwijsrecht" },
];

const checkItems = [
  "Adviseren over fusies, reorganisaties en wijzigingen in governance",
  "Begeleiden van arbeidsrechtelijke en beleidsmatige vraagstukken binnen scholen",
  "Trainingen voor besturen, raden van toezicht en personeel",
];

const benefits = [
  {
    title: "Voorkom juridische en bestuurlijke risico's",
    description:
      "Proactief advies helpt scholen conflicten, boetes van toezichthouders en organisatorische inefficiënties te voorkomen.",
  },
  {
    title: "Stroomlijn complexe processen",
    description:
      "Begeleiding bij fusies, reorganisaties en financiering zorgt voor soepele overgangen en besluitvorming die voldoet aan wet- en regelgeving.",
  },
  {
    title: "Ondersteun onderwijsprofessionals en belanghebbenden",
    description:
      "Duidelijk beleid en gestructureerde procedures bevorderen vertrouwen, transparantie en sterke werkrelaties.",
  },
];

export default function OnderwijsrechtPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Onderwijsrecht"
        subtitle="Zelfverzekerde besluitvorming door multidisciplinaire juridische begeleiding."
      />
      <Breadcrumb items={breadcrumbItems} />

      <PracticeAreaIntro
        heading={
          <>
            <span className="text-brand-blue">
              Strategische juridische begeleiding
            </span>{" "}
            voor scholen, besturen en onderwijsprofessionals
          </>
        }
        subheading="Met vertrouwen navigeren binnen het onderwijs."
        checkItems={checkItems}
        summary="Wij vertalen complex onderwijsrecht naar praktische en direct toepasbare adviezen."
        ctaLabel="Praat met Linda"
        ctaHref="/contact"
        imageSrc="/images/onderwijsrecht/hero.png"
        imageAlt="LOGOS LEGAL onderwijsrecht advies"
        contactName="Linda"
        contactImageSrc="/images/shared/linda-cutout.png"
      />

      <BenefitsSection
        heading={
          <>
            Zorg voor <span className="text-brand-blue">naleving</span> en{" "}
            <span className="text-brand-blue">sterk bestuur</span>
          </>
        }
        benefits={benefits}
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
        imageSrc="/images/onderwijsrecht/benefits.png"
        imageAlt="Onderwijsrechtelijke begeleiding"
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
            Complexe onderwijsuitdagingen omzetten in{" "}
            <span className="text-brand-blue">helderheid</span>
          </>
        }
        paragraphs={[
          "Bij Logos Legal bieden wij meer dan standaard juridisch advies. Wij analyseren de structuur van uw organisatie, signaleren uitdagingen en bieden concrete begeleiding op het gebied van governance, beleid, arbeidsvraagstukken en financiering. Door multidisciplinaire expertise te combineren met praktische strategieën, helpen wij scholen, besturen en onderwijsprofessionals om weloverwogen en conforme beslissingen te nemen, terwijl risico's en verstoringen tot een minimum worden beperkt.",
        ]}
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
        imagePrimary="/images/onderwijsrecht/challenge-1.png"
        imageSecondary="/images/onderwijsrecht/challenge-2.png"
        imageAlt="Onderwijsrechtelijke begeleiding"
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

      <FaqSection defaultCategory="onderwijsrecht" />

      <ExpertiseCarousel />

      <Footer />
    </>
  );
}
