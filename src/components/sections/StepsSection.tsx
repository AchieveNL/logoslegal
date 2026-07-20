import Image from "next/image";
import { getTranslations } from "next-intl/server";

interface Step {
  title: string;
  description: string;
  icon: string;
}

export default async function StepsSection() {
  const t = await getTranslations("steps");
  const steps = t.raw("items") as Step[];

  return (
    <section className="w-full bg-brand-blue-light py-16 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center max-w-[1080px] mx-auto">
          <h2 className="font-raleway font-bold text-[32px] md:text-[56px] leading-none text-[#002B58]">
            <span className="text-brand-blue">{t("headingHighlight1")}</span>{" "}
            {t("headingMid")}{" "}
            <span className="text-brand-blue">{t("headingHighlight2")}</span>
          </h2>
          <p className="mt-4 font-raleway text-lg md:text-[24px] text-black">
            {t("subtitle")}
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
