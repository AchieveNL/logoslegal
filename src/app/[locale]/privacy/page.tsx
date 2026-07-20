import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ChecklistSections, {
  type ChecklistSection,
} from "@/components/sections/ChecklistSections";

interface ChecklistSectionMessage {
  heading: string;
  highlight?: string;
  paragraph?: string;
  items: string[];
  extra?: string[];
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: "legalPages.privacy.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PrivacyPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("legalPages.privacy");
  const tNav = await getTranslations("nav");

  const breadcrumbItems = [
    { label: tNav("home"), href: "/" },
    { label: t("breadcrumb") },
  ];

  const sections: ChecklistSection[] = (
    t.raw("sections") as ChecklistSectionMessage[]
  ).map((section) => ({
    heading: section.highlight ? (
      <>
        {section.heading}{" "}
        <span className="text-brand-blue">{section.highlight}</span>
      </>
    ) : (
      section.heading
    ),
    paragraph: section.paragraph,
    items: section.items,
    extra: section.extra,
  }));

  return (
    <>
      <Navbar />

      <HeroBanner title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <Breadcrumb items={breadcrumbItems} />

      <ChecklistSections sections={sections} />

      <Footer />
    </>
  );
}
