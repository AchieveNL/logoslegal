import Image from "next/image";

export interface RegisterEntry {
  firstName: string;
  lastName: string;
  intro: string;
  items: string[];
  image: string;
}

interface RechtsgebiedenRegisterProps {
  entries: RegisterEntry[];
  closing: string;
}

const Check = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
    <circle cx="12" cy="12" r="11" stroke="#087AEC" strokeWidth="2" />
    <path d="M7 12.5L10.5 16L17 9" stroke="#087AEC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function RechtsgebiedenRegister({
  entries,
  closing,
}: RechtsgebiedenRegisterProps) {
  return (
    <section className="w-full">
      {entries.map((entry, i) => {
        const blueBand = i % 2 === 1;
        const imageRight = i % 2 === 0;
        return (
          <div key={`${entry.lastName}-${i}`} className={blueBand ? "bg-brand-blue-light" : "bg-white"}>
            <div className="max-w-[1728px] mx-auto px-6 md:px-24 py-12 md:py-16">
              <div
                className={`flex flex-col lg:flex-row gap-10 lg:gap-16 lg:justify-between ${
                  imageRight ? "items-start" : "items-start lg:items-center"
                }`}
              >
                {/* Text */}
                <div className={`${imageRight ? "lg:order-1" : "lg:order-2"} w-full lg:w-[940px]`}>
                  <h2 className="font-raleway font-bold text-[40px] md:text-[56px] leading-none tracking-normal text-[#002B58]">
                    <span className="text-brand-blue">{entry.firstName}</span> {entry.lastName}
                  </h2>
                  <p className="mt-5 font-poppins font-medium text-base md:text-[24px] leading-snug tracking-normal text-[#292D32]">
                    {entry.intro}
                  </p>
                  <hr className="my-6 border-brand-gray" />
                  <ul className="flex flex-col gap-4">
                    {entry.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check />
                        <span className="font-poppins font-medium text-base md:text-[16px] leading-snug tracking-normal text-[#002B58]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image — overlaps slightly into the adjacent band */}
                <div
                  className={`${
                    imageRight ? "lg:order-2" : "lg:order-1"
                  } relative z-10 w-full lg:w-[540px] shrink-0`}
                >
                  <div
                    className={`relative w-full lg:w-[540px] aspect-[540/622] lg:aspect-auto lg:h-[622px] ${
                      i === 0 ? "lg:-mb-28" : ""
                    } rounded-[32px] overflow-hidden bg-brand-blue/10`}
                  >
                    <Image
                      src={entry.image}
                      alt={`${entry.firstName} ${entry.lastName}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 540px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Closing note */}
      <div className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-20">
          <p className="max-w-[1200px] font-poppins font-medium text-[28px] md:text-[56px] leading-snug tracking-normal text-[#002B58]">
            {closing}
          </p>
        </div>
      </div>
    </section>
  );
}
