import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import LegalContent, { type LegalBlock } from "@/components/sections/LegalContent";

export const metadata: Metadata = {
  title: "Algemene voorwaarden | LOGOS LEGAL",
  description: "De algemene voorwaarden van LOGOS LEGAL.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Algemene voorwaarden" },
];

const blocks: LegalBlock[] = [
  {
    paragraphs: [
      "Plaats hier de tekst van de algemene voorwaarden.",
    ],
  },
];

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Algemene voorwaarden"
        subtitle="De voorwaarden die van toepassing zijn op onze dienstverlening."
      />
      <Breadcrumb items={breadcrumbItems} />

      <LegalContent blocks={blocks} />

      <Footer />
    </>
  );
}
