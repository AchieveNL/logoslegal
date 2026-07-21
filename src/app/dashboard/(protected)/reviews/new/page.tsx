import { getDashMessages } from "@/lib/dashboard-i18n";
import { PageHeading } from "@/components/dashboard/ui";
import ReviewForm from "@/components/dashboard/ReviewForm";
import { createReview } from "../actions";

export default async function NewReviewPage() {
  const { messages: t } = await getDashMessages();
  return (
    <>
      <PageHeading title={t.reviews.newTitle} highlight={t.reviews.newHighlight} />
      <ReviewForm onSubmit={createReview} submitLabel={t.form.save} />
    </>
  );
}
