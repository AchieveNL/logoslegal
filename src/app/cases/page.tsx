import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CasesIntro from "@/components/sections/CasesIntro";
import CasesListGrid from "@/components/sections/CasesListGrid";
import TestimonialsGrid from "@/components/sections/TestimonialsGrid";
import ExpertiseCarousel from "@/components/sections/ExpertiseCarousel";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Cases | LOGOS LEGAL",
  description:
    "Onze zaken geven inzicht in hoe wij complexe juridische vraagstukken omzetten in heldere oplossingen: van strategisch advies tot procederen.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Cases" },
];

export default function CasesPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Onze cases"
        subtitle="Een team van toegewijde juridische professionals, gericht op excellentie en het succes van cliënten."
      />
      <Breadcrumb items={breadcrumbItems} />

      <CasesIntro
        paragraph="Onderscheidend, out-of-the-box, nieuwsgierig en maatschappelijk betrokken, maar bovenal met jarenlange ervaring en expertise."
        phone="+31 85 20 30 155"
        phoneLabel="Bel nu"
      />

      <CasesListGrid />

      <TestimonialsGrid />

      <ExpertiseCarousel />

      <CTABanner
        heading="Klaar om samen te werken met ons deskundige juridische team?"
        subtitle="Plan vandaag nog een consult in en ontdek hoe wij u kunnen ondersteunen bij uw juridische behoeften."
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
      />

      <Footer />
    </>
  );
}
