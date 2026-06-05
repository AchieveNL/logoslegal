interface Review {
  quote: string;
  author: string;
}

const reviews: Review[] = [
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
      "Dhr Pejman Salim, zijn geduld is een schoolvoorbeeld, weet te handelen met rechtvaardigheid. Dhr kent de wetten en werkt zeer nauwkeurig. Dhr zijn werk is goed en toont empathie. U bent op je gemak bij hem.",
    author: "Sabrina C.",
  },
  {
    quote:
      "Ik ben heel dankbaar voor de hulp van mijn advocaat mr. Salim. Hij heeft echt kennis van zaken, vooral als het gaat om de toeslagenaffaire. Hij nam de tijd om alles goed uit te leggen en stond altijd voor me klaar. Dankzij zijn inzet en deskundigheid voel ik me eindelijk serieus genomen. Een advocaat met een hart voor zijn cliënten – echt een aanrader!",
    author: "A.M SJRo",
  },
  {
    quote:
      "Mr. Salim is een goede advocaat met verstand van zaken, hanteert een slimme tactiek en heeft goede resultaten voor bijstand in strafrecht en de toeslagenaffaire. Zeer tevreden tot nu toe.",
    author: "Maria HT",
  },
  {
    quote:
      "Zeer professioneel. Zeer tevreden, raad ze zeker aan. Ze hebben me te woord gestaan en goed verdedigd tegenover de overheid. Bel ze maar.",
    author: "Cheryl Koperberg",
  },
];

function QuoteMark() {
  return (
    <svg width="44" height="40" viewBox="0 0 75 69" fill="none" className="text-brand-blue-dark">
      <path
        d="M0 68.832V41.832C0 35.4987 1.11111 29.332 3.33333 23.332C5.72222 17.1654 9.16667 11.4987 13.6667 6.33203L27.6667 15.332C23.8333 19.832 21 24.4987 19.1667 29.332C17.5 34.1654 16.6667 39.1654 16.6667 44.332H31.6667V68.832H0ZM43.3333 68.832V41.832C43.3333 35.4987 44.4444 29.332 46.6667 23.332C49.0556 17.1654 52.5 11.4987 57 6.33203L71 15.332C67.1667 19.832 64.3333 24.4987 62.5 29.332C60.8333 34.1654 60 39.1654 60 44.332H75V68.832H43.3333Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function TestimonialsGrid() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-24">
        <div className="text-center mb-12">
          <h2 className="font-raleway font-bold text-[26px] md:text-[36px] leading-[1.25] text-brand-dark">
            Wat onze <span className="text-brand-blue">cliënten</span> zeggen
          </h2>
          <p className="mt-4 font-poppins text-base text-brand-dark/60">
            Echte ervaringen van cliënten die wij hebben ondersteund
          </p>
        </div>

        {/* Masonry layout via CSS columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="mb-6 break-inside-avoid bg-brand-blue-light rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <QuoteMark />
              <blockquote className="mt-6 font-poppins text-base text-brand-dark/70 leading-relaxed">
                {review.quote}
              </blockquote>
              <p className="mt-6 font-poppins font-bold text-base text-brand-blue">
                {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
