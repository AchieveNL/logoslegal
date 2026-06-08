import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ContactSection from "@/components/sections/ContactSection";
import ContactLocation from "@/components/sections/ContactLocation";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Contact | LOGOS LEGAL",
  description:
    "Neem contact op met LOGOS LEGAL. Wij staan klaar om u te helpen met uw juridische vraagstukken — bel ons of stuur een bericht via het contactformulier.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Contact" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Neem contact met ons op"
        subtitle="Een team van toegewijde juridische professionals dat zich inzet voor excellentie en het succes van cliënten."
      />
      <Breadcrumb items={breadcrumbItems} />

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

      <ContactLocation />

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
