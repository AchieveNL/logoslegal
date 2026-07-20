import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CasesIntro from "@/components/sections/CasesIntro";
import CasesListGrid from "@/components/sections/CasesListGrid";
import TestimonialsGrid from "@/components/sections/TestimonialsGrid";
import ExpertiseCarousel from "@/components/sections/ExpertiseCarousel";
import CTABanner from "@/components/sections/CTABanner";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "casesPage.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function CasesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("casesPage");
  const tCta = await getTranslations("cta");

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.aboutUs"), href: "/over-ons" },
    { label: t("breadcrumb.cases") },
  ];

  return (
    <>
      <Navbar />

      <HeroBanner title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <Breadcrumb items={breadcrumbItems} />

      <CasesIntro
        paragraph={t("intro.paragraph")}
        phone="+31 85 20 30 155"
        phoneLabel={tCta("callNow")}
      />

      <CasesListGrid />

      <TestimonialsGrid />

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
