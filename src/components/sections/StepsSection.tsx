import Image from "next/image";

interface Step {
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  {
    title: "Door middel van analyse",
    description:
      "We beginnen met een uitgebreide beoordeling van uw juridische situatie, waarbij we alle relevante informatie verzamelen en uw doelen en zorgen in kaart brengen.",
    icon: "/images/steps/analyse.svg",
  },
  {
    title: "Strategische planning",
    description:
      "Wij ontwikkelen een op maat gemaakte juridische strategie die aansluit bij uw doelstellingen, waarbij wij alle mogelijke aanpakken en hun gevolgen zorgvuldig afwegen.",
    icon: "/images/steps/planning.svg",
  },
  {
    title: "Krachtige vertegenwoordiging",
    description:
      "Wij behartigen uw belangen met overtuiging, zowel in onderhandelingen, gerechtelijke procedures als administratieve procedures.",
    icon: "/images/steps/vertegenwoordiging.svg",
  },
];

export default function StepsSection() {
  return (
    <section className="w-full bg-brand-blue-light py-16 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center max-w-[1080px] mx-auto">
          <h2 className="font-raleway font-bold text-[32px] md:text-[56px] leading-none text-[#002B58]">
            <span className="text-brand-blue">3 eenvoudige stappen</span> om het
            probleem van uw klant <span className="text-brand-blue">op te lossen</span>
          </h2>
          <p className="mt-4 font-raleway text-lg md:text-[24px] text-black">
            Deze principes sturen onze werkwijze en bepalen hoe wij onze cliënten
            bedienen.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="w-full max-w-[496px] min-h-[380px] mx-auto bg-white rounded-[28px] px-4 py-12 flex flex-col items-center justify-center text-center shadow-[0_20px_50px_-24px_rgba(2,18,43,0.18)]"
            >
              <div className="mb-8">
                <Image src={step.icon} alt="" width={56} height={56} unoptimized />
              </div>
              <h3
                className={`font-raleway font-bold text-[26px] md:text-[32px] leading-tight text-[#323377] mb-3 ${
                  i === 0 ? "md:whitespace-nowrap" : ""
                }`}
              >
                {step.title}
              </h3>
              <p className="font-poppins font-medium text-base leading-relaxed text-[#514D4D] w-full">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
