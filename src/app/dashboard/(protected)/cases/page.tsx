import Link from "next/link";
import { getPayload } from "@/lib/payload";
import { getDashMessages } from "@/lib/dashboard-i18n";
import { Card, PageHeading } from "@/components/dashboard/ui";
import { DeleteCaseButton } from "./DeleteCaseButton";

const CATEGORY_LABELS: Record<string, { nl: string; en: string }> = {
  arbeidsrecht: { nl: "Arbeidsrecht", en: "Employment law" },
  contracten: { nl: "Contracten", en: "Contracts" },
  onderwijsrecht: { nl: "Onderwijsrecht", en: "Education law" },
  financieelStrafrecht: { nl: "Financieel strafrecht", en: "Financial criminal law" },
  mensenrechten: { nl: "Mensenrechten", en: "Human rights" },
};

export default async function DashboardCasesPage() {
  const payload = await getPayload();
  const { locale, messages: t } = await getDashMessages();

  const { docs } = await payload.find({
    collection: "cases",
    locale: "nl",
    draft: true,
    limit: 100,
    sort: "-updatedAt",
  });

  return (
    <>
      <PageHeading
        title={t.cases.title}
        action={
          <Link href="/dashboard/cases/new" className="btn-gradient h-[52px] px-7 rounded-xl text-base">
            {t.cases.new}
          </Link>
        }
      />

      <Card className="overflow-hidden">
        {docs.length === 0 ? (
          <p className="p-10 font-poppins text-brand-dark/60">{t.cases.empty}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-brand-gray/50 text-left">
                  <th className="px-6 md:px-8 py-4 font-poppins font-bold text-sm text-[#002B58]">{t.table.title}</th>
                  <th className="px-4 py-4 font-poppins font-bold text-sm text-[#002B58]">{t.table.category}</th>
                  <th className="px-4 py-4 font-poppins font-bold text-sm text-[#002B58]">{t.table.status}</th>
                  <th className="px-4 py-4" />
                </tr>
              </thead>
              <tbody>
                {docs.map((doc) => (
                  <tr key={doc.id} className="border-b border-brand-gray/30 last:border-0 hover:bg-brand-blue-light/40 transition-colors">
                    <td className="px-6 md:px-8 py-4">
                      <Link
                        href={`/dashboard/cases/${doc.id}`}
                        className="font-poppins font-semibold text-[#002B58] hover:text-brand-blue transition-colors"
                      >
                        {doc.title || t.table.untitled}
                      </Link>
                    </td>
                    <td className="px-4 py-4 font-poppins text-sm text-brand-dark/70 whitespace-nowrap">
                      {CATEGORY_LABELS[doc.category]?.[locale] || doc.category}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex h-7 items-center px-3 rounded-full font-poppins text-xs font-semibold whitespace-nowrap ${
                          doc._status === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {doc._status === "published" ? t.table.published : t.table.draft}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className="inline-flex items-center gap-2">
                        <Link
                          href={`/dashboard/cases/${doc.id}`}
                          className="h-9 px-4 rounded-lg font-poppins text-sm font-semibold text-brand-blue hover:bg-brand-blue-light inline-flex items-center transition-colors"
                        >
                          {t.table.edit}
                        </Link>
                        <DeleteCaseButton id={doc.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </>
  );
}
