import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AboutIntro from "@/components/sections/AboutIntro";
import WhyLogos from "@/components/sections/WhyLogos";
import CoreValues from "@/components/sections/CoreValues";
import TeamGrid from "@/components/sections/TeamGrid";
import ExpertiseCarousel from "@/components/sections/ExpertiseCarousel";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Over ons | LOGOS LEGAL",
  description:
    "Een team van toegewijde juridische professionals, gericht op excellentie en het succes van cliënten.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Over ons" },
];

const stats = [
  { value: "500+", label: "Zaken gewonnen" },
  { value: "18+", label: "Jaren ervaring" },
  { value: "1000+", label: "Tevreden klanten" },
];

export default function OverOnsPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Over Logos Legal"
        subtitle="Een team van toegewijde juridische professionals, gericht op excellentie en het succes van cliënten."
      />
      <Breadcrumb items={breadcrumbItems} />

      <AboutIntro
        heading="Toegewijd, strategisch en innovatief"
        paragraph="Onderscheidend, out-of-the-box, nieuwsgierig en maatschappelijk betrokken, maar bovenal met jarenlange ervaring en expertise. Onze advocaten zijn gespecialiseerd in strafrecht, arbeidsrecht, onderwijsrecht, contract- en aansprakelijkheidsrecht, medezeggenschapsrecht en mensenrechten."
        phone="+31 85 20 30 155"
        phoneLabel="Bel nu"
        imageSrc="/images/over-ons/hero.jpg"
        imageAlt="Het team van LOGOS LEGAL in gesprek"
        stats={stats}
      />

      <WhyLogos
        heading={
          <>
            Wat maakt werken met Logos Legal zo{" "}
            <span className="text-brand-blue">bijzonder?</span>
          </>
        }
        paragraphs={[
          "Onze ondernemingsrechtpraktijk biedt uitgebreide juridische dienstverlening aan bedrijven van elke omvang, van startups tot multinationale ondernemingen. Onze ondernemingsrechtpraktijk biedt uitgebreide juridische dienstverlening aan bedrijven van elke omvang, van startups tot multinationale ondernemingen. Onze ondernemingsrechtpraktijk biedt uitgebreide juridische dienstverlening aan bedrijven van elke omvang, van startups tot multinationale ondernemingen.",
        ]}
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
        imageSrc="/images/over-ons/why.png"
        imageAlt="Advocaat van LOGOS LEGAL in gesprek met een cliënt"
      />

      <CoreValues />

      <TeamGrid />

      <ExpertiseCarousel />

      <CTABanner
        heading="Klaar om samen te werken met ons deskundige juridische team?"
        subtitle="Plan vandaag nog een consult in en ontdek hoe wij u kunnen helpen met uw juridische vraagstukken."
        ctaLabel="Contact opnemen"
        ctaHref="/contact"
      />

      <Footer />
    </>
  );
}
