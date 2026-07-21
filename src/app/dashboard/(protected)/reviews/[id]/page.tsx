import { notFound } from "next/navigation";
import { getPayload } from "@/lib/payload";
import { getDashMessages } from "@/lib/dashboard-i18n";
import { PageHeading } from "@/components/dashboard/ui";
import ReviewForm from "@/components/dashboard/ReviewForm";
import { updateReview, type ReviewInput } from "../actions";

export default async function EditReviewPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const payload = await getPayload();
  const { messages: t } = await getDashMessages();

  const [nlDoc, enDoc] = await Promise.all([
    payload
      .findByID({ collection: "reviews", id, locale: "nl" })
      .catch(() => null),
    payload
      .findByID({ collection: "reviews", id, locale: "en", fallbackLocale: "none" as never })
      .catch(() => null),
  ]);

  if (!nlDoc) notFound();

  const boundUpdate = async (input: ReviewInput) => {
    "use server";
    await updateReview(id, input);
  };

  return (
    <>
      <PageHeading title={t.reviews.editTitle} highlight={t.reviews.editHighlight} />
      <ReviewForm
        submitLabel={t.form.saveChanges}
        onSubmit={boundUpdate}
        initial={{
          author: nlDoc.author,
          visible: Boolean(nlDoc.visible),
          nl: { quote: nlDoc.quote || "", role: nlDoc.role || "" },
          en: { quote: enDoc?.quote || "", role: enDoc?.role || "" },
        }}
      />
    </>
  );
}
