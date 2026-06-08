"use client";

import { useState } from "react";

interface QA {
  question: string;
  answer: string;
}

interface Category {
  id: string;
  label: string;
  items: QA[];
}

const categories: Category[] = [
  {
    id: "algemeen",
    label: "Algemeen",
    items: [
      {
        question: "Wie kan advies inwinnen bij Logos Legal?",
        answer:
          "Particulieren, bedrijven en organisaties kunnen advies inwinnen bij Logos Legal. Wij staan zowel cliënten bij met persoonlijke juridische vraagstukken als ondernemingen en instellingen met complexe en strategische zaken.",
      },
      {
        question: "Hoe kan ik contact opnemen met Logos Legal?",
        answer:
          "U kunt contact met ons opnemen via telefoon, e-mail of het contactformulier op onze website. Ons team reageert zo spoedig mogelijk om uw situatie en de vervolgstappen te bespreken.",
      },
      {
        question: "Wat kan ik verwachten tijdens een eerste consult",
        answer:
          "Tijdens het eerste consult analyseren wij uw situatie, brengen wij de belangrijkste juridische aandachtspunten in kaart en bespreken wij mogelijke strategieën. U krijgt inzicht in uw positie, risico's en de beschikbare opties.",
      },
      {
        question: "Hoe zijn de juridische kosten opgebouwd?",
        answer:
          "Onze tarieven zijn afhankelijk van de aard en complexiteit van de zaak. Wij bieden vooraf duidelijkheid en bespreken de toepasselijke tariefstructuur, zoals een vast tarief of een uurtarief.",
      },
      {
        question: "Kan Logos Legal ondersteunen bij internationale zaken?",
        answer:
          "Ja, Logos Legal heeft ervaring met internationale zaken, waaronder grensoverschrijdende geschillen, uitlevering en procedures bij internationale rechtbanken.",
      },
    ],
  },
  {
    id: "contracten",
    label: "Contracten en aansprakelijkheid",
    items: [
      {
        question: "Met welke soorten contracten kan Logos Legal helpen?",
        answer:
          "Logos Legal ondersteunt bij uiteenlopende contracten, waaronder handelsovereenkomsten, koop- en verkoopovereenkomsten en algemene voorwaarden. Wij zorgen ervoor dat uw contracten juridisch sterk en in lijn met uw belangen zijn.",
      },
      {
        question: "Kunt u een bestaand contract beoordelen of aanpassen?",
        answer:
          "Ja, wij kunnen bestaande contracten beoordelen, analyseren en waar nodig aanpassen om risico's te signaleren, bepalingen te verduidelijken en uw juridische positie te versterken.",
      },
      {
        question: "Wat moet ik doen als de andere partij een contract schendt?",
        answer:
          "Bij een contractbreuk is het belangrijk om uw rechten en mogelijke maatregelen te beoordelen, zoals nakoming afdwingen, de overeenkomst ontbinden of schadevergoeding vorderen. Wij begeleiden u hierin en ondernemen indien nodig juridische stappen.",
      },
      {
        question: "Wanneer ben ik aansprakelijk voor schade?",
        answer:
          "U kunt aansprakelijk worden gesteld als u uw contractuele verplichtingen niet nakomt of als u een onrechtmatige daad pleegt die schade veroorzaakt. Wij beoordelen uw situatie en adviseren over risico's, verantwoordelijkheden en mogelijke verweren.",
      },
      {
        question:
          "Kan Logos Legal mij vertegenwoordigen bij aansprakelijkheidsgeschillen?",
        answer:
          "Ja, wij staan cliënten bij in aansprakelijkheidsgeschillen, zowel in onderhandelingen als in gerechtelijke procedures, met als doel een gunstig resultaat te behalen.",
      },
    ],
  },
  {
    id: "arbeidsrecht",
    label: "Arbeidsrecht",
    items: [
      {
        question: "Wanneer moet een arbeidsovereenkomst schriftelijk worden vastgelegd?",
        answer:
          "Een arbeidsovereenkomst hoeft niet altijd schriftelijk te worden vastgelegd, maar bepaalde bepalingen—zoals een tijdelijk contract, proeftijd of concurrentiebeding—moeten wel schriftelijk worden vastgelegd om geldig te zijn. Wij zorgen ervoor dat uw overeenkomsten aan alle wettelijke eisen voldoen.",
      },
      {
        question: "Wat zijn mijn rechten bij ontslag?",
        answer:
          "Uw rechten hangen af van het type contract en de reden van ontslag. In veel gevallen moet een werkgever een formele procedure volgen en is toestemming van het UWV of de rechter vereist. U kunt daarnaast recht hebben op een opzegtermijn of een vergoeding.",
      },
      {
        question: "Hoe moet een werkgever omgaan met langdurig ziekteverzuim?",
        answer:
          "Werkgevers zijn verplicht om actief te werken aan re-integratie en gedurende een bepaalde periode (een deel van) het loon door te betalen. Zowel werkgever als werknemer hebben hierin verplichtingen. Wij adviseren over naleving en risicobeheersing gedurende het traject.",
      },
      {
        question: "Kunnen arbeidsvoorwaarden tijdens het contract worden gewijzigd?",
        answer:
          "Wijzigingen in arbeidsvoorwaarden zijn alleen onder bepaalde omstandigheden toegestaan, bijvoorbeeld wanneer dit vooraf is overeengekomen of wanneer er een zwaarwegend bedrijfsbelang is. Wij beoordelen of wijzigingen juridisch gerechtvaardigd zijn en hoe deze correct kunnen worden doorgevoerd.",
      },
      {
        question: "Wat kan ik doen bij een arbeidsconflict?",
        answer:
          "Het is belangrijk om arbeidsconflicten tijdig aan te pakken om escalatie te voorkomen. Oplossingen kunnen bestaan uit mediation, onderhandeling of juridische stappen. Wij begeleiden u naar een effectieve en juridisch verantwoorde oplossing.",
      },
    ],
  },
  {
    id: "onderwijsrecht",
    label: "Onderwijsrecht",
    items: [
      {
        question: "Wat omvat het onderwijsrecht?",
        answer:
          "Het onderwijsrecht omvat meerdere rechtsgebieden, waaronder arbeidsrecht, governance, medezeggenschap en aansprakelijkheid binnen onderwijsinstellingen. Het ziet zowel op de interne organisatie als op externe juridische verplichtingen.",
      },
      {
        question: "Who can seek advice on education law?",
        answer:
          "Schoolbesturen, raden van toezicht, medezeggenschapsraden, docenten, studenten en ouders kunnen advies inwinnen. Wij staan zowel instellingen als individuen bij in juridische vraagstukken binnen het onderwijs.",
      },
      {
        question: "Kan Logos Legal ondersteunen bij fusies of herstructureringen van scholen?",
        answer:
          "Ja, wij bieden juridische begeleiding bij fusies, herstructureringen en wijzigingen in de governancestructuur. Wij zorgen ervoor dat alle juridische, organisatorische en regelgevende aspecten zorgvuldig worden meegenomen.",
      },
      {
        question: "Wat zijn de wettelijke vereisten voor medezeggenschap in het onderwijs?",
        answer:
          "Onderwijsinstellingen zijn verplicht om medezeggenschapsraden te betrekken bij belangrijke besluiten die personeel, studenten en beleid raken. Wij adviseren over naleving en bieden ondersteuning bij geschillen.",
      },
      {
        question: "Bieden jullie trainingen aan voor onderwijsinstellingen?",
        answer:
          "Ja, wij verzorgen in-company trainingen en workshops voor schoolbesturen, raden van toezicht en medezeggenschapsraden, gericht op praktische juridische kennis en actuele ontwikkelingen.",
      },
    ],
  },
  {
    id: "criminal",
    label: "(Financial) Criminal Law",
    items: [
      {
        question: "Wat valt onder (financieel) strafrecht?",
        answer:
          "Het (financieel) strafrecht omvat strafbare feiten zoals fraude, witwassen, corruptie en andere economische delicten. Het is van toepassing op zowel particulieren als ondernemingen.",
      },
      {
        question: "Wanneer heb ik een strafrechtadvocaat nodig?",
        answer:
          "Zodra u wordt verdacht van een strafbaar feit of wordt benaderd door opsporingsinstanties, is het raadzaam direct juridisch advies in te winnen. Vroegtijdige bijstand kan een grote invloed hebben op de uitkomst van uw zaak.",
      },
      {
        question: "Wat moet ik doen als ik word opgeroepen voor verhoor?",
        answer:
          "Het is belangrijk om vooraf juridisch advies in te winnen en u goed voor te bereiden. U heeft het recht om te zwijgen en om bijstand van een advocaat te krijgen tijdens het verhoor.",
      },
      {
        question: "Kan Logos Legal mij bijstaan in internationale strafzaken?",
        answer:
          "Ja, wij hebben ervaring met internationale strafzaken, waaronder uitlevering, rechtshulpverzoeken en procedures bij internationale rechtbanken.",
      },
      {
        question: "Wat zijn de mogelijke gevolgen van een veroordeling?",
        answer:
          "De gevolgen kunnen variëren van boetes en taakstraffen tot gevangenisstraf en reputatieschade. Wij zetten ons in om de impact te beperken en streven naar het best mogelijke resultaat.",
      },
    ],
  },
  {
    id: "human-rights",
    label: "Human Rights",
    items: [
      {
        question: "Wat omvat het mensenrechtenrecht?",
        answer:
          "Het mensenrechtenrecht beschermt fundamentele rechten en vrijheden, zoals vrijheid van meningsuiting, het verbod op discriminatie en het recht op een eerlijk proces. Het is van toepassing op zowel individuen als organisaties.",
      },
      {
        question: "Wie kan ondersteuning krijgen bij mensenrechtenkwesties?",
        answer:
          "Individuen, NGO's en organisaties die te maken hebben met schendingen van fundamentele rechten kunnen ondersteuning krijgen. Wij richten ons met name op zaken met een grote maatschappelijke of persoonlijke impact.",
      },
      {
        question: "Behandelt Logos Legal pro bono zaken?",
        answer:
          "Ja, onze advocaten besteden een deel van hun tijd aan pro bono- of toevoegingszaken, met name wanneer toegang tot juridische bijstand beperkt is door financiële omstandigheden.",
      },
      {
        question: "Kunt u ondersteunen bij internationale mensenrechtenzaken?",
        answer:
          "Ja, wij bieden ondersteuning bij internationale kwesties, waaronder zaken met betrekking tot mensenrechtenschendingen, internationale misdrijven en procedures bij internationale rechtbanken.",
      },
      {
        question: "Hoe wordt bepaald of een zaak wordt aangenomen?",
        answer:
          "Vanwege beperkte capaciteit worden zaken beoordeeld op basis van factoren zoals urgentie, impact en beschikbare middelen. Wij maken per aanvraag een zorgvuldige afweging.",
      },
    ],
  },
];

interface FaqItemProps {
  item: QA;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ item, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-brand-gray/60 py-6">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 text-left"
      >
        <h3 className="font-raleway font-bold text-xl md:text-[24px] text-[#002B58]">
          {item.question}
        </h3>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`shrink-0 mt-1 text-brand-blue transition-transform ${
            isOpen ? "" : "rotate-180"
          }`}
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <p className="mt-4 font-poppins font-medium text-base md:text-[24px] text-[#292D32] leading-snug pr-10">
          {item.answer}
        </p>
      )}
    </div>
  );
}

interface FaqSectionProps {
  defaultCategory?: string;
}

export default function FaqSection({ defaultCategory = "algemeen" }: FaqSectionProps) {
  const [activeId, setActiveId] = useState(defaultCategory);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const active =
    categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-24">
        <div className="text-center mb-10">
          <h2 className="font-raleway font-bold text-[32px] md:text-[56px] leading-none text-[#002B58]">
            Veelgestelde <span className="text-brand-blue">Vragen</span>
          </h2>
          <p className="mt-4 font-poppins font-medium text-lg md:text-[24px] text-[#292D32]">
            De meest gestelde vragen over Logos Legal.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveId(cat.id);
                setOpenIndex(0);
              }}
              className={`font-poppins font-medium text-base h-16 px-5 rounded-2xl inline-flex items-center transition-colors ${
                cat.id === activeId
                  ? "bg-gradient-to-r from-[#087AEC] to-[#56A5F4] text-white shadow-lg shadow-brand-blue/20"
                  : "text-[#002B58] hover:text-brand-blue"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="max-w-[1446px] mx-auto">
          {active.items.map((item, i) => (
            <FaqItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
