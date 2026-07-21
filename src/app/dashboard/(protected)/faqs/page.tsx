import Link from "next/link";
import { getPayload } from "@/lib/payload";
import { getDashMessages } from "@/lib/dashboard-i18n";
import { Card, PageHeading } from "@/components/dashboard/ui";
import { DeleteFaqButton } from "./DeleteFaqButton";

const CATEGORY_LABELS: Record<string, string> = {
  algemeen: "Algemeen",
  contracten: "Contracten",
  arbeidsrecht: "Arbeidsrecht",
  onderwijsrecht: "Onderwijsrecht",
  criminal: "(Fin.) strafrecht",
  "human-rights": "Mensenrechten",
};

export default async function DashboardFaqsPage() {
  const payload = await getPayload();
  const { messages: t } = await getDashMessages();

  const { docs } = await payload.find({
    collection: "faqs",
    locale: "nl",
    limit: 300,
    sort: ["category", "order"],
  });

  return (
    <>
      <PageHeading
        title={t.faqs.title}
        action={
          <Link href="/dashboard/faqs/new" className="btn-gradient h-[52px] px-7 rounded-xl text-base">
            {t.faqs.new}
          </Link>
        }
      />

      <Card className="overflow-hidden">
        {docs.length === 0 ? (
          <p className="p-10 font-poppins text-brand-dark/60">{t.faqs.empty}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-brand-gray/50 text-left">
                  <th className="px-6 md:px-8 py-4 font-poppins font-bold text-sm text-[#002B58]">{t.faqs.question}</th>
                  <th className="px-4 py-4 font-poppins font-bold text-sm text-[#002B58]">{t.table.category}</th>
                  <th className="px-4 py-4" />
                </tr>
              </thead>
              <tbody>
                {docs.map((doc) => (
                  <tr key={doc.id} className="border-b border-brand-gray/30 last:border-0 hover:bg-brand-blue-light/40 transition-colors">
                    <td className="px-6 md:px-8 py-4 max-w-[520px]">
                      <Link
                        href={`/dashboard/faqs/${doc.id}`}
                        className="font-poppins font-semibold text-[#002B58] hover:text-brand-blue transition-colors line-clamp-2"
                      >
                        {doc.question}
                      </Link>
                    </td>
                    <td className="px-4 py-4 font-poppins text-sm text-brand-dark/70 whitespace-nowrap">
                      {CATEGORY_LABELS[doc.category] || doc.category}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className="inline-flex items-center gap-2">
                        <Link
                          href={`/dashboard/faqs/${doc.id}`}
                          className="h-9 px-4 rounded-lg font-poppins text-sm font-semibold text-brand-blue hover:bg-brand-blue-light inline-flex items-center transition-colors"
                        >
                          {t.table.edit}
                        </Link>
                        <DeleteFaqButton id={doc.id} />
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
