import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import LegalContent, { type LegalBlock } from "@/components/sections/LegalContent";

export const metadata: Metadata = {
  title: "Klachtenregeling | LOGOS LEGAL",
  description: "De klachtenregeling van LOGOS LEGAL.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Klachtenregeling" },
];

const blocks: LegalBlock[] = [
  {
    paragraphs: [
      "Plaats hier de tekst van de klachtenregeling.",
    ],
  },
];

export default function KlachtenregelingPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Klachtenregeling"
        subtitle="Hoe wij omgaan met klachten over onze dienstverlening."
      />
      <Breadcrumb items={breadcrumbItems} />

      <LegalContent blocks={blocks} />

      <Footer />
    </>
  );
}
