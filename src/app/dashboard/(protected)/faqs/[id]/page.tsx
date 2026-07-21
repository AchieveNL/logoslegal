import { notFound } from "next/navigation";
import { getPayload } from "@/lib/payload";
import { getDashMessages } from "@/lib/dashboard-i18n";
import { PageHeading } from "@/components/dashboard/ui";
import FaqForm from "@/components/dashboard/FaqForm";
import { updateFaq, type FaqInput } from "../actions";

export default async function EditFaqPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const payload = await getPayload();
  const { messages: t } = await getDashMessages();

  const [nlDoc, enDoc] = await Promise.all([
    payload.findByID({ collection: "faqs", id, locale: "nl" }).catch(() => null),
    payload
      .findByID({ collection: "faqs", id, locale: "en", fallbackLocale: "none" as never })
      .catch(() => null),
  ]);

  if (!nlDoc) notFound();

  const boundUpdate = async (input: FaqInput) => {
    "use server";
    await updateFaq(id, input);
  };

  return (
    <>
      <PageHeading title={t.faqs.editTitle} highlight={t.faqs.editHighlight} />
      <FaqForm
        submitLabel={t.form.saveChanges}
        onSubmit={boundUpdate}
        initial={{
          category: nlDoc.category,
          order: nlDoc.order ?? 0,
          nl: { question: nlDoc.question || "", answer: nlDoc.answer || "" },
          en: { question: enDoc?.question || "", answer: enDoc?.answer || "" },
        }}
      />
    </>
  );
}
