import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AboutIntro from "@/components/sections/AboutIntro";
import WhyLogos from "@/components/sections/WhyLogos";
import CoreValues from "@/components/sections/CoreValues";
import TeamGrid from "@/components/sections/TeamGrid";
import ExpertiseCarousel from "@/components/sections/ExpertiseCarousel";
import CTABanner from "@/components/sections/CTABanner";

export async function generateMetadata(
  props: {
    params: Promise<{ locale: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;

  const {
    locale
  } = params;

  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function OverOnsPage(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;

  const {
    locale
  } = params;

  unstable_setRequestLocale(locale);
  const t = await getTranslations("about");
  const tCta = await getTranslations("cta");
  const tNav = await getTranslations("nav");

  const breadcrumbItems = [
    { label: tNav("home"), href: "/" },
    { label: tNav("aboutUs") },
  ];

  const stats = t.raw("intro.stats") as { value: string; label: string }[];

  return (
    <>
      <Navbar />

      <HeroBanner title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <Breadcrumb items={breadcrumbItems} />

      <AboutIntro
        heading={t("intro.heading")}
        paragraph={t("intro.paragraph")}
        phone="+31 85 20 30 155"
        phoneLabel={tCta("callNow")}
        imageSrc="/images/over-ons/hero.jpg"
        imageAlt={t("intro.imageAlt")}
        stats={stats}
      />

      <WhyLogos
        heading={
          <>
            {t("why.headingPre")}{" "}
            <span className="text-brand-blue">{t("why.headingHighlight")}</span>
          </>
        }
        paragraphs={t.raw("why.paragraphs") as string[]}
        ctaLabel={tCta("contactUs")}
        ctaHref="/contact"
        imageSrc="/images/over-ons/why.png"
        imageAlt={t("why.imageAlt")}
      />

      <CoreValues />

      <TeamGrid />

      <ExpertiseCarousel />

      <CTABanner
        heading={t("cta.heading")}
        subtitle={t("cta.subtitle")}
        ctaLabel={tCta("contactUs")}
        ctaHref="/contact"
      />

      <Footer />
    </>
  );
}
