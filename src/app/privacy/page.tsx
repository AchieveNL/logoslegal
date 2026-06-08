import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ChecklistSections, {
  type ChecklistSection,
} from "@/components/sections/ChecklistSections";

export const metadata: Metadata = {
  title: "Privacyverklaring | LOGOS LEGAL",
  description:
    "Privacyverklaring van LOGOS LEGAL: hoe wij persoonsgegevens verwerken in overeenstemming met de AVG.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Privacyverklaring" },
];

const sections: ChecklistSection[] = [
  {
    heading: (
      <>
        1. Algemene <span className="text-brand-blue">privacybeginselen</span>
      </>
    ),
    paragraph:
      "Logos Legal respecteert uw persoonsgegevens en zorgt ervoor dat alle informatie die u ons verstrekt of die wij op andere wijze verkrijgen, vertrouwelijk wordt behandeld. Persoonsgegevens omvatten alle informatie die betrekking heeft op een identificeerbare persoon. Deze verklaring legt uit hoe wij voldoen aan de informatieverplichtingen van de AVG (Algemene Verordening Gegevensbescherming).",
    items: [
      "Persoonsgegevens worden vertrouwelijk en zorgvuldig behandeld.",
      "Includes all information that can identify a person directly or indirectly",
      "De verwerking vindt plaats in overeenstemming met de AVG.",
      "Gebruikers worden geïnformeerd over hoe en waarom gegevens worden verwerkt.",
      "Gegevensbescherming is een kernprincipe van Logos Legal.",
    ],
  },
  {
    heading: (
      <>
        2. Gegevensbescherming is een{" "}
        <span className="text-brand-blue">kernprincipe van Logos Legal.</span>
      </>
    ),
    paragraph:
      "Logos Legal verwerkt persoonsgegevens als verwerkingsverantwoordelijke om juridische diensten te verlenen, diensten te verbeteren en met cliënten te communiceren. Gegevens worden uitsluitend gebruikt voor duidelijk omschreven en rechtmatige doeleinden die verband houden met onze juridische praktijk.",
    items: [
      "Verantwoordelijke voor de gegevensverwerking: Logos Legal",
      "Gebruikt voor juridische dienstverlening en het uitvoeren van contracten.",
      "Ondersteunt communicatie en klantcontact.",
      "Verbetert de kwaliteit van de dienstverlening en de bedrijfsvoering.",
      "Omvat marketing-, wervings- en nalevingsdoeleinden.",
    ],
  },
  {
    heading: (
      <>
        3. Verwerkte <span className="text-brand-blue">persoonsgegevens</span>
      </>
    ),
    paragraph:
      "Wij verwerken persoonsgegevens die noodzakelijk zijn voor de uitvoering van onze juridische dienstverlening, waaronder identificatie-, contact- en dossiergerelateerde informatie. In sommige gevallen kunnen, afhankelijk van de aard van de juridische kwestie of wettelijke verplichtingen, aanvullende gevoelige gegevens worden verwerkt.",
    items: [
      "Identiteits- en contactgegevens (naam, adres, e-mail, telefoonnummer)",
      "Identificatiegegevens (ID-nummer, BSN, verblijfsstatus)",
      "Juridische informatie met betrekking tot de zaak, indien nodig.",
      "Website- en technische gegevens (IP-adres, browser, apparaat)",
      "Gevoelige gegevens worden alleen verstrekt wanneer dit nodig is voor juridische dienstverlening.",
    ],
  },
  {
    heading: (
      <>
        4. Juridische grondslagen{" "}
        <span className="text-brand-blue">voor verwerking</span>
      </>
    ),
    paragraph:
      "Persoonsgegevens worden alleen verwerkt wanneer daar een wettelijke grondslag voor bestaat, zoals beschreven in artikel 6 van de AVG. Dit omvat wettelijke verplichtingen, contractuele noodzaak, toestemming of een gerechtvaardigd belang.",
    items: [
      "Wettelijke verplichting",
      "Uitvoering van een contract",
      "Uitdrukkelijke toestemming van de betrokkene",
      "Legitiem zakelijk belang",
      "Gevoelige gegevens worden alleen verstrekt wanneer dit nodig is voor juridische dienstverlening.",
    ],
  },
  {
    heading: (
      <>
        5. Delen, beveiliging <span className="text-brand-blue">en bewaren</span>
      </>
    ),
    paragraph:
      "Persoonsgegevens worden alleen met derden gedeeld wanneer dit noodzakelijk is voor de dienstverlening of om aan wettelijke verplichtingen te voldoen. Er worden passende beveiligingsmaatregelen getroffen en gegevens worden niet langer bewaard dan nodig of wettelijk vereist.",
    items: [
      "Alleen gedeeld wanneer dit nodig is voor juridische dienstverlening.",
      "Tot de derden behoren IT-leveranciers en juridische experts.",
      "Gegevens worden beschermd door middel van technische en organisatorische maatregelen.",
      "De bewaartermijn is afhankelijk van wettelijke en operationele noodzaak.",
      "De standaard bewaartermijn voor vragen is maximaal 5 jaar.",
    ],
  },
  {
    heading: (
      <>
        6. Rechten, cookies <span className="text-brand-blue">en contact</span>
      </>
    ),
    paragraph:
      "Personen hebben het recht om hun gegevens in te zien, te corrigeren, te beperken of te verwijderen. De website gebruikt functionele en analytische cookies, waaronder Google Analytics, om de prestaties te verbeteren. Sociale media en tools van derden kunnen ook cookies plaatsen.",
    items: [
      "Rechten: toegang, correctie, verwijdering, beperking, bezwaar",
      "Voor aanvragen kan identiteitsverificatie vereist zijn.",
      "Cookies worden gebruikt voor functionaliteit en analyse.",
      "Google Analytics helpt de websiteprestaties te verbeteren.",
    ],
    extra: [
      "Contact: contact@logoslegal.nl",
      "Postbus 22036, 1100 CA Amsterdam",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Privacyverklaring"
        subtitle="Geregistreerde juridische specialisaties"
      />
      <Breadcrumb items={breadcrumbItems} />

      <ChecklistSections sections={sections} />

      <Footer />
    </>
  );
}
