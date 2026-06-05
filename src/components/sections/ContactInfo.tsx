import Image from "next/image";

interface ContactInfoProps {
  name: string;
  greeting: string;
  phone: string;
  imageSrc: string;
}

export default function ContactInfo({
  name,
  greeting,
  phone,
  imageSrc,
}: ContactInfoProps) {
  // Highlight the contact person's name (e.g. "Linda") in blue within the greeting.
  const [before, after] = greeting.includes(name)
    ? greeting.split(name)
    : [greeting, ""];

  return (
    <div className="relative bg-white rounded-2xl p-8 md:p-10 overflow-hidden min-h-[360px] md:min-h-[400px] shadow-[0_10px_40px_-12px_rgba(2,18,43,0.12)] ring-1 ring-brand-dark/5">
      {/* subtle wave decoration — many slim lines, faded toward the left */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.12]">
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <defs>
              <pattern
                id="lindaWaves"
                x="0"
                y="0"
                width="160"
                height="6"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(-3)"
              >
                <path d="M0 4 Q40 1.5 80 4 T160 4" stroke="#087AEC" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lindaWaves)" />
          </svg>
        </div>
        {/* fade the waves out toward the bottom-left, like the footer */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 45%, #FFFFFF 85%)",
          }}
        />
      </div>

      {/* Text */}
      <div className="relative z-10 max-w-[58%] md:max-w-[360px]">
        <h3 className="font-raleway font-bold text-[26px] md:text-[34px] leading-[1.15] text-[#0A2540]">
          {before}
          {after !== "" || greeting.includes(name) ? (
            <span className="text-brand-blue">{name}</span>
          ) : null}
          {after}
        </h3>

        <p className="mt-6 font-poppins font-bold text-base text-[#0A2540]">
          Via telefoon
        </p>
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="mt-3 inline-flex items-center gap-4 bg-gradient-to-r from-[#0A2540] to-brand-blue-dark text-white rounded-xl px-8 h-16 font-poppins font-bold text-lg md:text-xl hover:opacity-95 transition-opacity"
        >
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
            <path
              d="M29.3333 22.56V26.56C29.3348 26.9314 29.2589 27.2992 29.1103 27.6399C28.9618 27.9806 28.7437 28.2869 28.4701 28.5389C28.1964 28.7909 27.8731 28.9832 27.5213 29.1033C27.1694 29.2233 26.7966 29.2686 26.4267 29.2364C22.3239 28.7904 18.3827 27.4124 14.8933 25.2C11.6422 23.184 8.89555 20.4373 6.88 17.1864C4.70658 13.6815 3.32833 9.72157 2.89334 5.60003C2.86124 5.23134 2.90615 4.85981 3.02527 4.50904C3.14439 4.15826 3.33529 3.83571 3.58562 3.56229C3.83594 3.28886 4.14032 3.07035 4.47917 2.92081C4.81803 2.77126 5.18412 2.69384 5.55334 2.6934H9.55334C10.2053 2.68695 10.8379 2.91585 11.3355 3.33862C11.833 3.76138 12.1618 4.34911 12.2613 4.99336C12.4465 6.28003 12.7837 7.54003 13.2667 8.7467C13.4442 9.19003 13.4949 9.67527 13.4129 10.1464C13.331 10.6174 13.1199 11.0554 12.8 11.4133L11.12 13.0934C12.9861 16.3963 15.6304 19.0407 18.9333 20.9067L20.6133 19.2267C20.9713 18.9067 21.4093 18.6957 21.8803 18.6137C22.3514 18.5318 22.8366 18.5824 23.28 18.76C24.4867 19.243 25.7467 19.5802 27.0333 19.7654C27.6846 19.866 28.2779 20.2002 28.7019 20.7059C29.1259 21.2115 29.3508 21.8534 29.3333 22.56Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {phone}
        </a>
      </div>

      {/* Image */}
      <Image
        src={imageSrc}
        alt={name}
        width={392}
        height={496}
        className="hidden sm:block absolute right-[-140px] bottom-0 z-10 w-auto h-[94%] object-contain object-right-bottom pointer-events-none select-none"
      />
    </div>
  );
}
