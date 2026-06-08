interface CasesIntroProps {
  paragraph: string;
  phone: string;
  phoneLabel: string;
}

export default function CasesIntro({ paragraph, phone, phoneLabel }: CasesIntroProps) {
  return (
    <section className="w-full bg-white">
      <div className="max-w-container mx-auto px-6 md:px-12 py-16 md:py-28 text-center">
        <h1 className="font-raleway font-bold text-[48px] md:text-[104px] leading-none tracking-normal text-center">
          <span className="text-brand-blue">Toegewijd,</span>{" "}
          <span className="text-[#002B58]">strategisch en</span>{" "}
          <span className="text-brand-blue">innovatief</span>
        </h1>
        <p className="mt-6 mx-auto max-w-[960px] font-poppins font-medium text-base md:text-[24px] leading-relaxed tracking-normal text-center text-[#292D32]">
          {paragraph}
        </p>
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="mt-10 inline-flex items-center justify-center gap-2.5 w-[320px] max-w-full h-[80px] rounded-2xl bg-brand-blue text-white font-poppins font-bold text-[24px] leading-none tracking-normal hover:bg-brand-blue-dark transition-colors"
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
    </section>
  );
}
