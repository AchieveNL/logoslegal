import { Link } from "@/i18n/routing";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  href: string;
}

export default async function TeamGrid() {
  const t = await getTranslations("teamGrid");

  const team: TeamMember[] = [
    {
      name: "Babi Azar",
      role: t("roles.babiAzar"),
      image: "/images/team/babi-azar.png",
      href: "/over-ons/babi-azar",
    },
    {
      name: "Arzu Yandere",
      role: t("roles.arzuYandere"),
      image: "/images/team/arzu-yandere.png",
      href: "/over-ons/arzu-yandere",
    },
    {
      name: "Pejman Salim",
      role: t("roles.pejmanSalim"),
      image: "/images/team/pejman-salim.png",
      href: "/over-ons/pejman-salim",
    },
    {
      name: "Anil Ramdas",
      role: t("roles.anilRamdas"),
      image: "/images/team/anil-ramdas.png",
      href: "/over-ons/anil-ramdas",
    },
  ];

  return (
    <section className="relative w-full bg-brand-blue-light py-16 md:py-24 overflow-hidden">
      {/* Blue wave texture (same asset as footer/CTA), masked so the PNG's
          lines render in brand blue, concentrated top-right and fading toward
          the cards — matching the Figma. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-brand-blue opacity-60"
          style={{
            WebkitMaskImage: "url('/images/waves/team-wave.svg')",
            maskImage: "url('/images/waves/team-wave.svg')",
            WebkitMaskSize: "cover",
            maskSize: "cover",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "right top",
            maskPosition: "right top",
          }}
        />
        {/* Fade: transparent at top-right, solid section bg toward bottom-left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom left, rgba(240,245,255,0) 0%, rgba(240,245,255,0.15) 30%, #F0F5FF 78%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="font-raleway font-bold text-[32px] md:text-[56px] leading-none tracking-normal text-center text-[#002B58]">
            {t("headingPre")}{" "}
            <span className="text-brand-blue">{t("headingHighlight")}</span>
          </h2>
          <p className="mt-4 font-raleway font-medium text-base md:text-[24px] leading-none tracking-normal text-center text-[#292D32]">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <Link
              key={member.name}
              href={member.href}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden bg-brand-blue/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-brand-blue flex items-center justify-center shadow-sm transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="rotate-45">
                    <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-4 font-poppins font-semibold text-[24px] leading-none tracking-normal text-[#002B58]">
                {member.name}
              </h3>
              <p className="mt-2 font-poppins font-medium text-[16px] leading-none tracking-normal text-[#002B58]">
                {member.role}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
