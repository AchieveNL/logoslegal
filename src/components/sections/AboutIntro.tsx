import Image from "next/image";

interface Stat {
  value: string;
  label: string;
}

interface AboutIntroProps {
  heading: string;
  paragraph: string;
  phone: string;
  phoneLabel: string;
  imageSrc: string;
  imageAlt: string;
  stats: Stat[];
}

export default function AboutIntro({
  heading,
  paragraph,
  phone,
  phoneLabel,
  imageSrc,
  imageAlt,
  stats,
}: AboutIntroProps) {
  return (
    <section className="w-full bg-brand-blue-light py-12 md:py-16">
      {/* Frame 916 notch — rounded rect (1536x900) with the bottom-right corner
          carved out for the stats card. Normalized to the element box so it scales. */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="hero-notch" clipPathUnits="objectBoundingBox">
            <path d="M0.97917 0C0.99067 0 1 0.01592 1 0.03556V0.78333C1 0.80297 0.99067 0.81889 0.97917 0.81889H0.58854C0.57703 0.81889 0.56771 0.83481 0.56771 0.85444V0.96444C0.56771 0.98408 0.55838 1 0.54688 1H0.02083C0.00933 1 0 0.98408 0 0.96444V0.03556C0 0.01592 0.00933 0 0.02083 0H0.97917Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="relative">
          {/* Image card with overlaid text — Figma Frame 916 ratio 1536 x 900.
              On lg+ the notch clip carves the bottom-right; below lg it's a plain
              rounded rect and the stats card stacks underneath. */}
          <div className="relative overflow-hidden h-[560px] rounded-[32px] lg:h-auto lg:aspect-[1536/900] lg:rounded-none lg:[clip-path:url(#hero-notch)]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-[center_3%]"
              sizes="100vw"
              priority
            />
            {/* Left-side darkening for legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/40 to-transparent" />

            <div className="relative z-10 flex flex-col justify-center h-full max-w-[640px] lg:max-w-[840px] p-8 md:p-16">
              <h2 className="font-roboto font-medium text-[44px] md:text-[72px] lg:text-[104px] leading-none tracking-normal text-white">
                {heading}
              </h2>
              <p className="mt-6 font-poppins font-medium text-base md:text-xl lg:text-[24px] leading-none tracking-normal text-white/90 max-w-[560px] lg:max-w-[740px]">
                {paragraph}
              </p>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="mt-8 inline-flex items-center justify-center gap-3 self-start w-[320px] max-w-full h-16 bg-gradient-to-r from-[#0A2540] to-brand-blue-dark text-white rounded-xl font-poppins font-bold text-lg hover:opacity-95 transition-opacity"
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
                {phoneLabel}
              </a>
            </div>
          </div>

          {/* Stats — stacks below on mobile, sits inside the Frame 916 notch
              (bottom-right) on lg+. No card background; numbers/labels only. */}
          <div className="relative mt-6 lg:mt-0 lg:absolute lg:right-[1.2%] lg:bottom-[2.67%] lg:w-[41%] lg:h-[12.8%] z-20 px-8 lg:px-[1%] py-4 lg:py-0 flex items-center justify-between gap-6 lg:gap-[2%]">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-poppins font-bold text-[40px] text-brand-blue leading-none">
                  {stat.value}
                </p>
                <p className="mt-2 font-poppins text-[20px] text-brand-dark/70 leading-tight whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
