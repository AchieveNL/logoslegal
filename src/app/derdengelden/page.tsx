import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ChecklistSections, {
  type ChecklistSection,
} from "@/components/sections/ChecklistSections";

export const metadata: Metadata = {
  title: "Derdengelden | LOGOS LEGAL",
  description:
    "Zorgvuldige en conforme afhandeling van gelden van derden via Stichting Derdengelden bij LOGOS LEGAL.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Derdengelden" },
];

const sections: ChecklistSection[] = [
  {
    heading: "Zorgvuldige en conforme afhandeling van gelden van derden.",
    paragraph:
      "Bij Pejman Law houden we gelden van derden zo kort mogelijk onder onze controle via Stichting Derdengelden Pejman Law. Alle ontvangen gelden en bijbehorende transacties worden met de grootste zorg, transparantie en in overeenstemming met de geldende regelgeving behandeld.",
    items: [
      "De status van ontvangen gelden en eventuele betalingsregelingen zijn duidelijk gedocumenteerd in de administratie- en dossierdossiers.",
      "Geld dat door derden wordt uitbetaald, wordt pas aan de rechtmatige begunstigde overgemaakt zodra de omstandigheden dit toelaten.",
      "Geldmiddelen mogen nooit worden gebruikt voor doeleinden die in strijd zijn met hun beoogde doel of bestemming.",
    ],
  },
  {
    heading: "Transparante omgang met gelden van derden",
    paragraph:
      "Pejman Law ensures that third-party funds are transferred directly to the rightful beneficiary whenever possible. When necessary, funds are processed through Stichting Derdengelden Pejman Law and handled in full compliance with applicable regulations.",
    items: [
      "Er worden duidelijke instructies gegeven voor geldovermakingen naar derden.",
      "Ontvangen gelden op de kantoorrekening worden onmiddellijk overgemaakt.",
      "Elke transactie wordt afzonderlijk geregistreerd en gedocumenteerd.",
      "De documenten bevatten betalingsgegevens, begunstigde en de behandelend advocaat.",
      "Alle handelingen worden transparant en zorgvuldig uitgevoerd.",
    ],
  },
  {
    heading: (
      <>
        Geautoriseerd gebruik en betaling{" "}
        <span className="text-brand-blue">van gelden van derden</span>
      </>
    ),
    paragraph:
      "Een advocaat mag alleen gelden van derden gebruiken om een factuur te voldoen als dit schriftelijk is overeengekomen met de rechtmatige begunstigde. Alle betalingen van gelden van derden zijn onderworpen aan strikte autorisatieprocedures en wettelijke voorschriften.",
    items: [
      "Schriftelijke toestemming is vereist voordat gelden kunnen worden gebruikt voor de betaling van facturen.",
      "Het recht om de gelden te gebruiken vervalt indien de factuur binnen een redelijke termijn wordt betwist.",
      "Elk gebruik van gelden voor de betaling van facturen wordt schriftelijk bevestigd aan de begunstigde.",
      "Betalingen van derden vereisen dubbele elektronische autorisatie.",
      "Elke betalingstransactie moet door ten minste twee bevoegde personen worden goedgekeurd.",
    ],
  },
  {
    heading: (
      <>
        De bestuurders van de stichting{" "}
        <span className="text-brand-blue">derdengelden zijn:</span>
      </>
    ),
    items: ["Pejman Salim", "Arzu Yandere"],
  },
];

const closing =
  "Op grond van deze registratie zijn advocaten verplicht elk kalenderjaar volgens de normen van de Nederlandse orde van advocaten tien opleidingspunten te behalen op ieder geregistreerd hoofdrechtsgebied.";

export default function DerdengeldenPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Derdengelden"
        subtitle="Geregistreerde juridische specialisaties"
      />
      <Breadcrumb items={breadcrumbItems} />

      <ChecklistSections sections={sections} closing={closing} />

      <Footer />
    </>
  );
}
