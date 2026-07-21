import { notFound } from "next/navigation";
import { getPayload } from "@/lib/payload";
import { getDashMessages } from "@/lib/dashboard-i18n";
import { PageHeading } from "@/components/dashboard/ui";
import CaseForm from "@/components/dashboard/CaseForm";
import { updateCase, type CaseInput } from "../actions";

export default async function EditCasePage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const payload = await getPayload();
  const { messages: t } = await getDashMessages();

  const [nlDoc, enDoc] = await Promise.all([
    payload
      .findByID({ collection: "cases", id, locale: "nl", draft: true, depth: 1 })
      .catch(() => null),
    payload
      .findByID({ collection: "cases", id, locale: "en", draft: true, depth: 0, fallbackLocale: "none" as never })
      .catch(() => null),
  ]);

  if (!nlDoc) notFound();

  const image = typeof nlDoc.image === "object" && nlDoc.image !== null ? nlDoc.image : null;

  const boundUpdate = async (input: CaseInput) => {
    "use server";
    await updateCase(id, input);
  };

  return (
    <>
      <PageHeading title={t.cases.editTitle} highlight={t.cases.editHighlight} />
      <CaseForm
        submitLabel={t.form.publishChanges}
        onSubmit={boundUpdate}
        initial={{
          slug: nlDoc.slug,
          category: nlDoc.category,
          imageId: image?.id ?? null,
          imageUrl: image?.url ?? null,
          nl: {
            title: nlDoc.title || "",
            summary: nlDoc.summary || "",
            body: nlDoc.body || "",
          },
          en: {
            title: enDoc?.title || "",
            summary: enDoc?.summary || "",
            body: enDoc?.body || "",
          },
        }}
      />
    </>
  );
}
