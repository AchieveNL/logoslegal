import Image from "next/image";

interface Stat {
  value: string;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  { value: "15+", label: "Jaren ervaring", icon: "/images/home/stats/ervaring.svg" },
  { value: "4.8/5", label: "Google reviews", icon: "/images/home/stats/reviews.svg" },
  { value: "100%", label: "Advocaat-cliëntprivilege", icon: "/images/home/stats/privilege.svg" },
  { value: "500+", label: "Succesvol behandelde zaken", icon: "/images/home/stats/zaken.svg" },
];

interface HomeHeroProps {
  phone: string;
  imageSrc: string;
  imageAlt: string;
}

export default function HomeHero({ phone, imageSrc, imageAlt }: HomeHeroProps) {
  return (
    <section className="w-full bg-white">
      <div className="relative z-10 max-w-container mx-auto px-6 md:px-12 pt-10 md:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_720px] gap-10 lg:gap-12 items-start">
          {/* Left: copy */}
          <div className="max-w-[680px]">
            <h1 className="font-raleway font-bold text-[52px] md:text-[80px] leading-[1.02] tracking-normal">
              <span className="text-brand-blue">Betrokken,</span>
              <br />
              <span className="text-[#002B58]">Strategisch</span>{" "}
              <span className="text-brand-blue">en</span>
              <br />
              <span className="text-brand-blue">Innovatief</span>
            </h1>
            <p className="mt-7 font-poppins font-medium text-base md:text-[24px] leading-[1.5] tracking-normal text-[#292D32] max-w-[600px]">
              Onderscheidend, out of the box, nieuwsgierig en maatschappelijk
              betrokken, met jarenlange ervaring en expertise. Onze juristen zijn
              gespecialiseerd in strafrecht, arbeidsrecht, onderwijsrecht,
              contracten en aansprakelijkheidsrecht, medezeggenschap en
              mensenrechten.
            </p>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="mt-9 inline-flex items-center justify-center gap-3 h-16 px-10 rounded-2xl bg-gradient-to-r from-[#0A2540] to-brand-blue-dark text-white font-poppins font-bold text-lg hover:opacity-95 transition-opacity"
            >
              <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                <path
                  d="M29.3333 22.56V26.56C29.3348 26.9314 29.2589 27.2992 29.1103 27.6399C28.9618 27.9806 28.7437 28.2869 28.4701 28.5389C28.1964 28.7909 27.8731 28.9832 27.5213 29.1033C27.1694 29.2233 26.7966 29.2686 26.4267 29.2364C22.3239 28.7904 18.3827 27.4124 14.8933 25.2C11.6422 23.184 8.89555 20.4373 6.88 17.1864C4.70658 13.6815 3.32833 9.72157 2.89334 5.60003C2.86124 5.23134 2.90615 4.85981 3.02527 4.50904C3.14439 4.15826 3.33529 3.83571 3.58562 3.56229C3.83594 3.28886 4.14032 3.07035 4.47917 2.92081C4.81803 2.77126 5.18412 2.69384 5.55334 2.6934H9.55334C10.2053 2.68695 10.8379 2.91585 11.3355 3.33862C11.833 3.76138 12.1618 4.34911 12.2613 4.99336C12.4465 6.28003 12.7837 7.54003 13.2667 8.7467C13.4442 9.19003 13.4949 9.67527 13.4129 10.1464C13.331 10.6174 13.1199 11.0554 12.8 11.4133L11.12 13.0934C12.9861 16.3963 15.6304 19.0407 18.9333 20.9067L20.6133 19.2267C20.9713 18.9067 21.4093 18.6957 21.8803 18.6137C22.3514 18.5318 22.8366 18.5824 23.28 18.76C24.4867 19.243 25.7467 19.5802 27.0333 19.7654C27.6846 19.866 28.2779 20.2002 28.7019 20.7059C29.1259 21.2115 29.3508 21.8534 29.3333 22.56Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Bel ons direct
            </a>
          </div>

          {/* Right: image */}
          <div className="relative w-full aspect-[720/940] lg:aspect-auto lg:w-[720px] lg:h-[940px] rounded-[28px] overflow-hidden bg-brand-blue/10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>

      {/* Stats band — pulled up so the hero image overlaps its wavy top */}
      <div className="relative mt-12 lg:-mt-28 bg-brand-blue-light overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mix-blend-multiply"
          style={{
            backgroundImage: "url('/images/shared/wave.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-container mx-auto px-6 md:px-12 pt-10 lg:pt-44 pb-10 lg:pb-14">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            <h2 className="shrink-0 font-inter font-bold text-[26px] md:text-[32px] leading-none tracking-normal text-[#002B58]">
              Daarom kies je
              <br />
              voor <span className="text-brand-blue">Logos Legal</span>
            </h2>
            <div className="flex-1 grid grid-cols-2 gap-6 lg:flex lg:items-center lg:justify-between lg:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <Image
                    src={stat.icon}
                    alt=""
                    width={80}
                    height={80}
                    unoptimized
                    className="shrink-0 w-20 h-20"
                  />
                  <div>
                    <p className="font-inter font-bold text-[28px] md:text-[32px] leading-none tracking-normal text-brand-blue">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 font-inter font-medium text-[12px] leading-none tracking-normal text-[#002B58]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
