import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/sections/HomeHero";
import ExpertiseGrid from "@/components/sections/ExpertiseGrid";
import TeamCarousel from "@/components/sections/TeamCarousel";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import CasesGrid from "@/components/sections/CasesGrid";
import HomeCTA from "@/components/sections/HomeCTA";

export const metadata: Metadata = {
  title: "LOGOS LEGAL | Betrokken, Strategisch en Innovatief",
  description:
    "Onderscheidend, out of the box en maatschappelijk betrokken. Onze juristen zijn gespecialiseerd in strafrecht, arbeidsrecht, onderwijsrecht, contracten- en aansprakelijkheidsrecht, medezeggenschap en mensenrechten.",
};

export default function Home() {
  return (
    <>
      <Navbar />

      <HomeHero
        phone="+31 85 20 30 155"
        imageSrc="/images/home/hero.png"
        imageAlt="Juristen van LOGOS LEGAL in gesprek met een cliënt"
      />

      <ExpertiseGrid contactHref="/contact" />

      <TeamCarousel />

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

      <FaqSection defaultCategory="algemeen" />

      <CasesGrid allCasesHref="/cases" />

      <HomeCTA contactHref="/contact" />

      <Footer />
    </>
  );
}
