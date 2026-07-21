import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import LegalContent, { type LegalBlock } from "@/components/sections/LegalContent";

export async function generateMetadata(
  props: {
    params: Promise<{ locale: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;

  const {
    locale
  } = params;

  const t = await getTranslations({
    locale,
    namespace: "legalPages.algemeneVoorwaarden.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AlgemeneVoorwaardenPage(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;

  const {
    locale
  } = params;

  unstable_setRequestLocale(locale);
  const t = await getTranslations("legalPages.algemeneVoorwaarden");
  const tNav = await getTranslations("nav");

  const breadcrumbItems = [
    { label: tNav("home"), href: "/" },
    { label: t("breadcrumb") },
  ];

  const blocks = t.raw("blocks") as LegalBlock[];

  return (
    <>
      <Navbar />

      <HeroBanner title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <Breadcrumb items={breadcrumbItems} />

      <LegalContent blocks={blocks} />

      <Footer />
    </>
  );
}
