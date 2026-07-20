import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ExpertiseOverview from "@/components/sections/ExpertiseOverview";
import TeamGrid from "@/components/sections/TeamGrid";
import CTABanner from "@/components/sections/CTABanner";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "expertisePage" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function ExpertisePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("expertisePage");
  const tCta = await getTranslations("cta");

  const breadcrumbItems = [
    { label: t("breadcrumbHome"), href: "/" },
    { label: t("breadcrumbAbout"), href: "/over-ons" },
    { label: t("breadcrumbExpertise") },
  ];

  return (
    <>
      <Navbar />

      <HeroBanner title={t("heroTitle")} subtitle={t("heroSubtitle")} />
      <Breadcrumb items={breadcrumbItems} />

      <ExpertiseOverview />

      <TeamGrid />

      <CTABanner
        heading={t("ctaHeading")}
        subtitle={t("ctaSubtitle")}
        ctaLabel={tCta("contactUs")}
        ctaHref="/contact"
      />

      <Footer />
    </>
  );
}
