import type { ReactNode } from "react";

interface Step {
  title: string;
  description: string;
  icon: ReactNode;
}

const steps: Step[] = [
  {
    title: "Door middel van analyse",
    description:
      "We beginnen met een uitgebreide beoordeling van uw juridische situatie, waarbij we alle relevante informatie verzamelen en uw doelen en zorgen in kaart brengen.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M8.5 12.5l2.2 2.2L15.5 10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Strategische planning",
    description:
      "Wij ontwikkelen een op maat gemaakte juridische strategie die aansluit bij uw doelstellingen, waarbij wij alle mogelijke aanpakken en hun gevolgen zorgvuldig afwegen.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 12.5l1.8 1.8 3.5-3.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Krachtige vertegenwoordiging",
    description:
      "Wij behartigen uw belangen met overtuiging, zowel in onderhandelingen, gerechtelijke procedures als administratieve procedures.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M3.5 18c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4M12.5 18c0-2.5 2-4 4.5-4s4 1.5 4 4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function StepsSection() {
  return (
    <section className="w-full bg-brand-blue-light py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-raleway font-bold text-[26px] md:text-[36px] leading-[1.25] text-brand-dark">
            <span className="text-brand-blue">3 eenvoudige stappen</span> om het
            probleem van uw klant <span className="text-brand-blue">op te lossen</span>
          </h2>
          <p className="mt-4 font-poppins text-base text-brand-dark/60">
            Deze principes sturen onze werkwijze en bepalen hoe wij onze cliënten
            bedienen.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm"
            >
              <div className="text-brand-blue mb-6">{step.icon}</div>
              <h3 className="font-raleway font-bold text-xl text-brand-blue-dark mb-3">
                {step.title}
              </h3>
              <p className="font-poppins text-sm text-brand-dark/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
