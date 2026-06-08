interface InfoCard {
  title: string;
  lines: string[];
  icon: "pin" | "mail" | "phone" | "clock";
}

const cards: InfoCard[] = [
  {
    title: "Vestiging Barendrecht",
    lines: ["Barendrecht branch, Oslo 3, Barendrecht"],
    icon: "pin",
  },
  {
    title: "Email",
    lines: ["Algemeen: info@logoslegal.nl", "Toeslagenaffaire: toeslagen@logoslegal.nl"],
    icon: "mail",
  },
  {
    title: "Telefoonnummer",
    lines: ["+31 85 20 30 155"],
    icon: "phone",
  },
  {
    title: "Kantooruren",
    lines: ["Monday - vrijdag: 09:00 - 17:00", "Zaterdag - Zondag: Gesloten"],
    icon: "clock",
  },
];

function CardIcon({ icon }: { icon: InfoCard["icon"] }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "white",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (icon) {
    case "pin":
      return (
        <svg {...common}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
  }
}

export default function ContactLocation() {
  return (
    <section className="w-full bg-brand-blue-light py-16 md:py-24">
      <div className="max-w-[1632px] mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-raleway font-bold text-[36px] md:text-[56px] leading-none tracking-normal text-brand-blue">
            Barendrecht
          </h2>
          <p className="mt-4 font-raleway font-medium text-base md:text-[24px] leading-relaxed tracking-normal text-black">
            U kunt ons bereiken via de volgende kanalen of ons kantoor bezoeken
            tijdens kantooruren.
          </p>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex items-center gap-5 bg-white rounded-xl p-2 min-h-[104px]"
            >
              <span className="shrink-0 w-[88px] h-[88px] rounded-xl bg-brand-blue flex items-center justify-center">
                <CardIcon icon={card.icon} />
              </span>
              <div className="min-w-0">
                <h3 className="font-poppins font-semibold text-[24px] leading-tight tracking-normal text-[#002B58]">
                  {card.title}
                </h3>
                {card.lines.map((line) => (
                  <p
                    key={line}
                    className="mt-1 font-poppins font-medium text-[14px] leading-snug tracking-normal text-[#292D32]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="mt-10 md:mt-12 w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden">
          <iframe
            title="Locatie LOGOS LEGAL — Barendrecht"
            src="https://www.google.com/maps?q=Oslo+3,+2993+LD+Barendrecht&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
