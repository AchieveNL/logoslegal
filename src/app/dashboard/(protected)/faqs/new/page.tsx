import { getDashMessages } from "@/lib/dashboard-i18n";
import { PageHeading } from "@/components/dashboard/ui";
import FaqForm from "@/components/dashboard/FaqForm";
import { createFaq } from "../actions";

export default async function NewFaqPage() {
  const { messages: t } = await getDashMessages();
  return (
    <>
      <PageHeading title={t.faqs.newTitle} highlight={t.faqs.newHighlight} />
      <FaqForm onSubmit={createFaq} submitLabel={t.form.save} />
    </>
  );
}
