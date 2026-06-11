import type { ReactNode } from "react";

export interface ChecklistSection {
  heading: ReactNode;
  paragraph?: string;
  items: string[];
  /** Optional plain lines rendered below the list, after a divider */
  extra?: string[];
}

interface ChecklistSectionsProps {
  sections: ChecklistSection[];
  closing?: string;
}

const Check = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
    <circle cx="12" cy="12" r="11" stroke="#087AEC" strokeWidth="2" />
    <path d="M7 12.5L10.5 16L17 9" stroke="#087AEC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ChecklistSections({
  sections,
  closing,
}: ChecklistSectionsProps) {
  return (
    <section className="w-full">
      {sections.map((section, i) => (
        <div key={i} className={i % 2 === 1 ? "bg-brand-blue-light" : "bg-white"}>
          <div data-reveal className="max-w-[1408px] mx-auto px-6 md:px-12 py-14 md:py-20">
            <h2 className="font-poppins font-bold text-[32px] md:text-[48px] leading-tight tracking-normal text-[#002B58]">
              {section.heading}
            </h2>

            {section.paragraph && (
              <p className="mt-5 max-w-[1200px] font-poppins font-medium text-base md:text-[18px] leading-relaxed tracking-normal text-[#292D32]">
                {section.paragraph}
              </p>
            )}

            <hr className="my-8 border-brand-gray" />

            <ul className="flex flex-col gap-4">
              {section.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <Check />
                  <span className="font-poppins font-medium text-base md:text-[18px] leading-relaxed tracking-normal text-[#292D32]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {section.extra && (
              <>
                <hr className="my-8 border-brand-gray" />
                <div className="flex flex-col gap-3">
                  {section.extra.map((line, j) => (
                    <p
                      key={j}
                      className="font-poppins font-medium text-base md:text-[18px] leading-relaxed tracking-normal text-[#292D32]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      ))}

      {closing && (
        <div className="bg-white">
          <div data-reveal className="max-w-[1408px] mx-auto px-6 md:px-12 py-12 md:py-20">
            <p className="max-w-[1200px] font-poppins font-medium text-[28px] md:text-[56px] leading-snug tracking-normal text-[#002B58]">
              {closing}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
