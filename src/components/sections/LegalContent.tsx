export interface LegalBlock {
  /** Optional section sub-heading */
  heading?: string;
  /** One or more body paragraphs */
  paragraphs?: string[];
  /** Optional bulleted list */
  list?: string[];
}

interface LegalContentProps {
  blocks: LegalBlock[];
}

export default function LegalContent({ blocks }: LegalContentProps) {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[960px] mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-10">
          {blocks.map((block, i) => (
            <div key={i} className="flex flex-col gap-4">
              {block.heading && (
                <h2 className="font-raleway font-bold text-[26px] md:text-[32px] leading-tight tracking-normal text-[#002B58]">
                  {block.heading}
                </h2>
              )}

              {block.paragraphs?.map((para, j) => (
                <p
                  key={j}
                  className="font-poppins font-medium text-base md:text-[18px] leading-relaxed tracking-normal text-[#292D32]"
                >
                  {para}
                </p>
              ))}

              {block.list && (
                <ul className="flex flex-col gap-3 pl-1">
                  {block.list.map((item, k) => (
                    <li key={k} className="flex items-start gap-3">
                      <span className="shrink-0 mt-2 w-2 h-2 rounded-full bg-brand-blue" />
                      <span className="font-poppins font-medium text-base md:text-[18px] leading-relaxed tracking-normal text-[#292D32]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
