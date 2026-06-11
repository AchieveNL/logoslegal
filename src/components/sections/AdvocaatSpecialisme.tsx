import type { ReactNode } from "react";
import Image from "next/image";

export interface SpecialismeItem {
  iconSrc: string;
  title: string;
  description: string;
}

interface AdvocaatSpecialismeProps {
  heading: ReactNode;
  subtitle: string;
  items: SpecialismeItem[];
}

export default function AdvocaatSpecialisme({
  heading,
  subtitle,
  items,
}: AdvocaatSpecialismeProps) {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1728px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-raleway font-bold text-[36px] md:text-[56px] leading-none tracking-normal text-[#002B58]">
            {heading}
          </h2>
          <p className="mt-4 font-poppins font-medium text-base md:text-[20px] leading-relaxed tracking-normal text-[#292D32]">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="hover-lift flex flex-col items-center justify-center text-center bg-brand-blue-light rounded-[32px] w-full max-w-[372px] mx-auto h-[400px] px-6"
            >
              <span className="w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center">
                <Image
                  src={item.iconSrc}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                  unoptimized
                />
              </span>
              <h3 className="mt-6 font-raleway font-bold text-[32px] leading-none tracking-normal text-[#323377]">
                {item.title}
              </h3>
              <p className="mt-4 font-poppins font-medium text-[16px] leading-snug tracking-normal text-[#514D4D]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
