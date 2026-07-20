import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AdvocaatBackground from "@/components/sections/AdvocaatBackground";
import AdvocaatStory from "@/components/sections/AdvocaatStory";
import AdvocaatRegistratie from "@/components/sections/AdvocaatRegistratie";
import AdvocaatSpecialisme from "@/components/sections/AdvocaatSpecialisme";
import CTABanner from "@/components/sections/CTABanner";
import TeamGrid from "@/components/sections/TeamGrid";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: "advocates.arzuYandere",
  });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

const specialismeIcons = [
  "/images/specialisme/civiele-procedures.svg",
  "/images/specialisme/arbeidsrecht.svg",
  "/images/specialisme/ondernemingsrecht.svg",
  "/images/specialisme/huurrecht.svg",
];

export default async function ArzuYanderePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("advocates.arzuYandere");
  const tShared = await getTranslations("advocates.shared");
  const tCta = await getTranslations("cta");
  const tNav = await getTranslations("nav");

  const breadcrumbItems = [
    { label: tNav("home"), href: "/" },
    { label: tNav("aboutUs"), href: "/over-ons" },
    { label: "Arzu Yandere" },
  ];

  const checks = t.raw("background.checks") as string[];

  const expertiseParagraphs = t.raw("story.paragraphs") as string[];

  const specialismeItems = (
    tShared.raw("specialisme.items") as { title: string; description: string }[]
  ).map((item, index) => ({ ...item, iconSrc: specialismeIcons[index] }));

  return (
    <>
      <Navbar />

      <HeroBanner title="Arzu Yandere" subtitle={t("hero.subtitle")} />
      <Breadcrumb items={breadcrumbItems} />

      <AdvocaatBackground
        heading={
          <>
            {t("background.headingPre")}{" "}
            <span className="text-brand-blue">
              {t("background.headingHighlight")}
            </span>
          </>
        }
        intro={t("background.intro")}
        checks={checks}
        imageSrc="/images/team/arzu-yandere/portrait.png"
        imageAlt={t("background.imageAlt")}
      />

      <AdvocaatStory
        imageSrc="/images/team/arzu-yandere/meeting.png"
        imageAlt={t("story.imageAlt")}
        quote={t("story.quote")}
        name="Arzu Yandere"
        role={t("story.role")}
        expertiseHeading={
          <>
            {t("story.expertiseHeadingPre")}{" "}
            <span className="text-brand-blue">
              {t("story.expertiseHeadingHighlight")}
            </span>
          </>
        }
        expertiseParagraphs={expertiseParagraphs}
        ctaLabel={tCta("contactUs")}
        ctaHref="/contact"
      />

      <AdvocaatRegistratie
        heading={
          <>
            {t("registratie.headingLine1")}
            <br />
            <span className="text-brand-blue">
              {t("registratie.headingHighlight")}
            </span>
          </>
        }
        paragraph={t("registratie.paragraph")}
        email="arzu.yandere@logoslegal.nl"
        phone="+31 85 20 30 155"
        imageSrc="/images/team/arzu-yandere/consult-bw.png"
        imageAlt={t("registratie.imageAlt")}
        ctaLabel={tCta("contactUs")}
        ctaHref="/contact"
      />

      <CTABanner
        heading={tShared("cta.heading")}
        subtitle={tShared("cta.subtitle")}
        ctaLabel={tCta("contactUs")}
        ctaHref="/contact"
      />

      <AdvocaatSpecialisme
        heading={
          <>
            Arzu&apos;s{" "}
            <span className="text-brand-blue">
              {tShared("specialisme.headingHighlight")}
            </span>
          </>
        }
        subtitle={tShared("specialisme.subtitle")}
        items={specialismeItems}
      />

      <TeamGrid />

      <Footer />
    </>
  );
}
