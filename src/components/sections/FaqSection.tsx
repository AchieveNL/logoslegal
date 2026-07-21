import { getLocale, getTranslations } from "next-intl/server";
import { getPayload, isCmsConfigured } from "@/lib/payload";
import FaqSectionClient, { type FaqCategory } from "./FaqSectionClient";

interface FaqSectionProps {
  defaultCategory?: string;
}

/* Server wrapper: pulls FAQ items from the CMS (per locale), keeps the
   category labels + headings in the translation files, and hands everything
   to the interactive client component. */
export default async function FaqSection({
  defaultCategory = "algemeen",
}: FaqSectionProps) {
  const locale = await getLocale();
  const t = await getTranslations("faq");

  const rawCategories = t.raw("categories") as FaqCategory[];
  const labels = rawCategories.map(({ id, label }) => ({ id, label }));

  // Items from the CMS; falls back to the static content when the
  // database is not configured.
  let categories: FaqCategory[];
  try {
    if (!isCmsConfigured()) throw new Error("cms-offline");
    const payload = await getPayload();
    const { docs } = await payload.find({
      collection: "faqs",
      locale: locale as "nl" | "en",
      limit: 300,
      sort: "order",
    });
    categories = labels
      .map(({ id, label }) => ({
        id,
        label,
        items: docs
          .filter((d) => d.category === id)
          .map((d) => ({ question: d.question, answer: d.answer })),
      }))
      .filter((c) => c.items.length > 0);
  } catch {
    categories = rawCategories;
  }

  if (categories.length === 0) return null;

  return (
    <FaqSectionClient
      categories={categories}
      defaultCategory={defaultCategory}
      subtitle={t("subtitle")}
      heading={t.rich("heading", {
        blue: (chunks) => <span className="text-brand-blue">{chunks}</span>,
      })}
    />
  );
}
