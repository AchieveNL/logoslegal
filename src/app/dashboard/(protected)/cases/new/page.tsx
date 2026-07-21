import { getDashMessages } from "@/lib/dashboard-i18n";
import { PageHeading } from "@/components/dashboard/ui";
import CaseForm from "@/components/dashboard/CaseForm";
import { createCase } from "../actions";

export default async function NewCasePage() {
  const { messages: t } = await getDashMessages();
  return (
    <>
      <PageHeading title={t.cases.newTitle} highlight={t.cases.newHighlight} />
      <CaseForm onSubmit={createCase} submitLabel={t.form.publish} />
    </>
  );
}
