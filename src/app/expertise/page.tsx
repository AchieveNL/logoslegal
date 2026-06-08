import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ExpertiseOverview from "@/components/sections/ExpertiseOverview";
import TeamGrid from "@/components/sections/TeamGrid";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Expertise | LOGOS LEGAL",
  description:
    "Onze expertise strekt zich uit over diverse rechtsgebieden: arbeidsrecht, contracten- en aansprakelijkheidsrecht, onderwijsrecht, financieel strafrecht en mensenrechten.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Expertise" },
];

export default function ExpertisePage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Onze expertise"
        subtitle="Een team van toegewijde juridische professionals, gericht op excellentie en het succes van cliënten."
      />
      <Breadcrumb items={breadcrumbItems} />

      <ExpertiseOverview />

      <TeamGrid />

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
