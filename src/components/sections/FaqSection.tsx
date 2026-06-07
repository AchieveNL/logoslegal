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
        question: "Hoe kan ik een afspraak maken met Logos Legal?",
        answer:
          "U kunt telefonisch contact opnemen of het contactformulier op deze pagina invullen. Wij nemen zo snel mogelijk contact met u op om een afspraak in te plannen.",
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
        question: "Bij welke onderwijsrechtelijke kwesties kan Logos Legal helpen?",
        answer:
          "Wij adviseren onderwijsinstellingen en onderwijsprofessionals over toelating, schorsing, medezeggenschap, arbeidsrechtelijke kwesties en geschillen met leerlingen of ouders.",
      },
    ],
  },
  {
    id: "criminal",
    label: "(Financial) Criminal Law",
    items: [
      {
        question: "When should I contact a lawyer in a criminal investigation?",
        answer:
          "As early as possible. Engaging counsel at the start of an investigation protects your rights and helps shape the outcome. We provide strategic defence in financial and general criminal matters.",
      },
    ],
  },
  {
    id: "human-rights",
    label: "Human Rights",
    items: [
      {
        question: "What kind of human rights cases does Logos Legal handle?",
        answer:
          "We assist individuals and organisations with cases involving fundamental rights, discrimination, and procedures before national and international bodies.",
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
