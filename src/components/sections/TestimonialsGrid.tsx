import Image from "next/image";

interface Review {
  quote: string;
  author: string;
}

// Top row — scrolls to the right
const reviewsTop: Review[] = [
  {
    quote:
      "Geweldige advocaat, een echte aanrader, zeer professioneel. Ik raad dit kantoor aan al mijn vrienden aan. Vrienden van mij hadden dit kantoor ook aan mij aanbevolen. Ik ben enorm geholpen door deze advocaten. Bel ze gerust, u zult er geen spijt van krijgen!",
    author: "Cheryl Hammond",
  },
  {
    quote: "Best lawyer in town!",
    author: "De Koorndijk",
  },
  {
    quote:
      "Dhr Pejman Salim staat mij bij en geduld is een schone zaak, Dhr Salim weet te handelen en gaat voor rechtvaardigheid. Dhr Salim kent de wetten en werkt zeer nauwkeurig. Blij dat ik heb ontmoet, ondanks dat Dhr zijn werk goed doet, leeft hij mee en toont empathie. Dhr Salim stelt je op je gemak, Bedankt.",
    author: "Sabrina Coenraad",
  },
  {
    quote: "Quality, Professionalism, Value",
    author: "Sander Blauw",
  },
  {
    quote:
      "Ik ben heel dankbaar voor de hulp van mijn advocaat mr. Salim. Hij heeft echt kennis van zaken, vooral als het gaat om de toeslagenaffaire. Hij nam de tijd om alles goed uit te leggen en stond altijd voor me klaar. Dankzij zijn inzet en deskundigheid voel ik me eindelijk serieus genomen. Een advocaat met een hart voor zijn cliënten – echt een aanrader!",
    author: "A.M SJRo",
  },
];

// Bottom row — scrolls to the left
const reviewsBottom: Review[] = [
  {
    quote:
      "Mr. Salim is een goede advocaat met verstand van zaken, hanteert een slimme tactiek en heeft goede resultaten voor bijstand in strafrecht en de toeslagenaffaire. Zeer tevreden tot nu toe.",
    author: "Maria HT",
  },
  {
    quote:
      "Zeer professioneel. Zeer tevreden. Ik raad ze zeker aan. Ze hebben mij te woord gestaan en goed verdedigd tegenover de overheid. Bel ze maar.",
    author: "Cheryl Koperberg",
  },
  {
    quote:
      "Hij heeft mij goed geholpen en nog steeds gelukkig voor mij en mijn gezin.",
    author: "Justin jennifer Pathuis",
  },
  {
    quote: "Goed advocaten. Zeer tevreden.",
    author: "Bjorn Sjoerdsma",
  },
  {
    quote:
      "Zeer aan te raden! Goede kennis over vele zaken, denken echt met je mee en pakken onrecht goed aan. Mr Salim legt alles heel goed en duidelijk uit. Vriendelijk en met t hart op de goede plek. Hier kun je gerust van zijn dat je echt wordt geholpen.",
    author: "Huseyin Acar",
  },
];

function QuoteMark() {
  return (
    <Image
      src="/images/shared/quote-mark.svg"
      alt=""
      width={56}
      height={57}
      unoptimized
    />
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="shrink-0 w-[320px] md:w-[500px] h-[420px] md:h-[480px] bg-brand-blue-light rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center">
      <QuoteMark />
      <blockquote className="mt-6 font-poppins text-base md:text-lg text-[#514D4D] leading-relaxed">
        {review.quote}
      </blockquote>
      <p className="mt-6 font-poppins font-bold text-base md:text-lg text-brand-blue">
        {review.author}
      </p>
    </div>
  );
}

function MarqueeRow({
  reviews,
  direction,
}: {
  reviews: Review[];
  direction: "left" | "right";
}) {
  // Duplicate the list so the translate animation loops seamlessly.
  const items = [...reviews, ...reviews];
  return (
    <div className="group relative overflow-hidden">
      <div
        className={`flex w-max gap-6 ${
          direction === "right"
            ? "animate-marquee-right"
            : "animate-marquee-left"
        } group-hover:[animation-play-state:paused]`}
      >
        {items.map((review, i) => (
          <ReviewCard key={`${review.author}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsGrid() {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-container mx-auto px-6 md:px-24">
        <div className="text-center mb-12">
          <h2 className="font-raleway font-bold text-[32px] md:text-[56px] leading-none text-[#002B58] max-w-[1020px] mx-auto">
            Wat onze <span className="text-brand-blue">cliënten</span> zeggen
          </h2>
          <p className="mt-4 font-poppins font-medium text-lg md:text-[24px] text-[#292D32]">
            Echte ervaringen van cliënten die wij hebben ondersteund
          </p>
        </div>
      </div>

      {/* Two infinite marquee rows — top scrolls right, bottom scrolls left */}
      <div className="flex flex-col gap-6">
        <MarqueeRow reviews={reviewsTop} direction="right" />
        <MarqueeRow reviews={reviewsBottom} direction="left" />
      </div>
    </section>
  );
}
