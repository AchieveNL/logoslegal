import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ChecklistSections, {
  type ChecklistSection,
} from "@/components/sections/ChecklistSections";

export const metadata: Metadata = {
  title: "Disclaimer | LOGOS LEGAL",
  description:
    "Disclaimer van LOGOS LEGAL over het gebruik van en de aansprakelijkheid voor deze website.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Disclaimer" },
];

const sections: ChecklistSection[] = [
  {
    heading: (
      <>
        Website <span className="text-brand-blue">Disclaimer</span>
      </>
    ),
    paragraph:
      "Deze website is met grote zorg en aandacht samengesteld door Logos Legal. Ondanks voortdurende inspanningen om de informatie actueel, volledig en correct te houden, kan het voorkomen dat de gepubliceerde informatie onvolledig of onjuist is. Aan de inhoud van deze website kunnen geen rechten worden ontleend.",
    items: [
      "De website is zorgvuldig samengesteld door Logos Legal",
      "Er wordt gestreefd naar correcte en volledige informatie",
      "Onjuistheden of onvolledigheden kunnen voorkomen",
      "Aan de verstrekte informatie kunnen geen rechten worden ontleend",
      "Eventuele fouten worden zo snel mogelijk gecorrigeerd zodra deze bekend zijn",
    ],
  },
  {
    heading: (
      <>
        Website Gebruik <span className="text-brand-blue">en Aansprakelijkheid</span>
      </>
    ),
    paragraph:
      "Wij kunnen niet garanderen dat deze website altijd naar behoren functioneert of volledig vrij is van fouten. Hoewel wij de website van tijd tot tijd kunnen actualiseren, zijn wij daartoe niet verplicht en behouden wij ons het recht voor om de toegang tot de website te wijzigen, te beperken of de website geheel te sluiten.",
    items: [
      "De website kan fouten bevatten of niet altijd naar verwachting functioneren",
      "Er is geen verplichting om de website voortdurend te actualiseren",
      "Wij behouden ons het recht voor om toegang tot de website te wijzigen of te beperken",
      "De website kan op elk moment (gedeeltelijk of volledig) worden gesloten",
      "Wij zijn niet aansprakelijk voor directe of indirecte schade door gebruik van de website",
      "Wij zijn niet aansprakelijk voor informatie die via de website wordt verstrekt",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Disclaimer"
        subtitle="Geregistreerde juridische specialisaties"
      />
      <Breadcrumb items={breadcrumbItems} />

      <ChecklistSections sections={sections} />

      <Footer />
    </>
  );
}
