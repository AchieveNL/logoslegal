import type { ReactNode } from "react";

interface Value {
  title: string;
  description: string;
  icon: ReactNode;
}

const values: Value[] = [
  {
    title: "Integriteit",
    description:
      "Wij hanteren de hoogste ethische normen in al onze interacties en juridische werkzaamheden, en waarborgen daarbij transparantie en eerlijkheid.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 49 49" fill="none">
        <path
          d="M24.3334 47.6667C27.3981 47.6705 30.4334 47.0686 33.2648 45.8958C36.0962 44.7229 38.668 43.0022 40.8323 40.8323C43.0022 38.668 44.7229 36.0962 45.8958 33.2648C47.0686 30.4334 47.6705 27.3981 47.6667 24.3334C47.6705 21.2686 47.0686 18.2334 45.8958 15.4019C44.7229 12.5705 43.0022 9.99872 40.8323 7.83435C38.668 5.66454 36.0962 3.94377 33.2648 2.77092C30.4334 1.59806 27.3981 0.996238 24.3334 1.00002C21.2686 0.996238 18.2334 1.59806 15.4019 2.77092C12.5705 3.94377 9.99872 5.66454 7.83435 7.83435C5.66454 9.99872 3.94377 12.5705 2.77092 15.4019C1.59806 18.2334 0.996238 21.2686 1.00002 24.3334C0.996238 27.3981 1.59806 30.4334 2.77092 33.2648C3.94377 36.0962 5.66454 38.668 7.83435 40.8323C9.99872 43.0022 12.5705 44.7229 15.4019 45.8958C18.2334 47.0686 21.2686 47.6705 24.3334 47.6667Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M15 24.3335L22 31.3335L36 17.3335"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Excellentie",
    description:
      "Wij streven naar uitmuntendheid in elk aspect van onze praktijk, van juridisch onderzoek tot het bepleiten van zaken in de rechtszaal.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 49 49" fill="none">
        <path
          d="M1.57026 26.916C0.746594 21.554 0.333594 18.8753 1.34859 16.4977C2.36126 14.1223 4.61059 12.496 9.10693 9.24567L12.4669 6.81667C18.0599 2.773 20.8576 0.75 24.0846 0.75C27.3116 0.75 30.1093 2.773 35.7023 6.81667L39.0623 9.24567C43.5586 12.496 45.8056 14.1223 46.8206 16.4977C47.8333 18.8753 47.4226 21.554 46.5989 26.9137L45.8966 31.487C44.7299 39.0843 44.1443 42.883 41.4189 45.151C38.6936 47.419 34.7106 47.4167 26.7423 47.4167H21.4246C13.4563 47.4167 9.47326 47.4167 6.74793 45.151C4.02259 42.883 3.43926 39.0843 2.27026 31.4847L1.57026 26.916Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.3345 27C25.1041 29.7697 28.7511 32.5837 28.7511 32.5837L33.7515 27.5833C33.7515 27.5833 30.9375 23.9363 28.1678 21.1667C25.3981 18.397 21.7511 15.583 21.7511 15.583L16.7508 20.5833C16.7508 20.5833 19.5648 24.2303 22.3345 27ZM22.3345 27L13.5845 35.75M34.5845 26.7503L27.9181 33.4167M22.5841 14.75L15.9178 21.4163"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Cliëntgericht",
    description:
      "Wij stellen de behoeften van onze cliënten voorop en bieden persoonlijke aandacht en op maat gemaakte juridische strategieën.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 56 56" fill="none">
        <path
          d="M28.0002 27.9998C34.4435 27.9998 39.6668 22.7765 39.6668 16.3332C39.6668 9.88985 34.4435 4.6665 28.0002 4.6665C21.5568 4.6665 16.3335 9.88985 16.3335 16.3332C16.3335 22.7765 21.5568 27.9998 28.0002 27.9998Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48.0432 51.3333C48.0432 42.3033 39.0599 35 27.9999 35C16.9399 35 7.95654 42.3033 7.95654 51.3333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Daadkrachtig",
    description:
      "Wij hechten waarde aan tijdige communicatie en snelle actie om de juridische kwesties van onze cliënten efficiënt aan te pakken.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
        <path
          d="M22 43C33.598 43 43 33.598 43 22C43 10.402 33.598 1 22 1C10.402 1 1 10.402 1 22C1 33.598 10.402 43 22 43Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M32.5 22.0002H22.5833C22.4286 22.0002 22.2803 21.9387 22.1709 21.8293C22.0615 21.7199 22 21.5715 22 21.4168V13.8335"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function CoreValues() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="text-center max-w-[900px] mx-auto">
          <h2 className="font-raleway font-bold text-[32px] md:text-[56px] leading-none tracking-normal text-center text-[#002B58]">
            Onze <span className="text-brand-blue">kernwaarden</span>
          </h2>
          <p className="mt-4 font-raleway font-medium text-base md:text-[24px] leading-none tracking-normal text-center text-black">
            Deze principes vormen de basis van onze werkwijze en bepalen hoe wij
            onze cliënten bedienen.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-brand-blue-light/60 rounded-[24px] px-7 py-10 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-brand-blue mb-6 shadow-sm">
                {value.icon}
              </div>
              <h3 className="font-raleway font-bold text-2xl md:text-[32px] leading-none tracking-normal text-center text-[#323377] mb-3">
                {value.title}
              </h3>
              <p className="font-poppins font-medium text-[16px] leading-relaxed tracking-normal text-center text-[#514D4D]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
