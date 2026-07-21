import Link from "next/link";
import { getPayload } from "@/lib/payload";
import { getDashMessages } from "@/lib/dashboard-i18n";
import { Card, PageHeading } from "@/components/dashboard/ui";
import { ReviewRowActions } from "./ReviewRowActions";

export default async function DashboardReviewsPage() {
  const payload = await getPayload();
  const { messages: t } = await getDashMessages();

  const { docs } = await payload.find({
    collection: "reviews",
    locale: "nl",
    limit: 200,
    sort: "-updatedAt",
  });

  return (
    <>
      <PageHeading
        title={t.reviews.title}
        action={
          <Link href="/dashboard/reviews/new" className="btn-gradient h-[52px] px-7 rounded-xl text-base">
            {t.reviews.new}
          </Link>
        }
      />

      <Card className="overflow-hidden">
        {docs.length === 0 ? (
          <p className="p-10 font-poppins text-brand-dark/60">{t.reviews.empty}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-brand-gray/50 text-left">
                  <th className="px-6 md:px-8 py-4 font-poppins font-bold text-sm text-[#002B58]">{t.table.quote}</th>
                  <th className="px-4 py-4 font-poppins font-bold text-sm text-[#002B58]">{t.table.author}</th>
                  <th className="px-4 py-4 font-poppins font-bold text-sm text-[#002B58]">{t.table.visible}</th>
                  <th className="px-4 py-4" />
                </tr>
              </thead>
              <tbody>
                {docs.map((doc) => (
                  <tr key={doc.id} className="border-b border-brand-gray/30 last:border-0 hover:bg-brand-blue-light/40 transition-colors">
                    <td className="px-6 md:px-8 py-4 max-w-[420px]">
                      <Link
                        href={`/dashboard/reviews/${doc.id}`}
                        className="font-poppins text-sm text-[#002B58] hover:text-brand-blue transition-colors line-clamp-2"
                      >
                        &ldquo;{doc.quote}&rdquo;
                      </Link>
                    </td>
                    <td className="px-4 py-4 font-poppins text-sm font-semibold text-brand-dark/80 whitespace-nowrap">
                      {doc.author}
                    </td>
                    <td className="px-4 py-4">
                      <ReviewRowActions id={doc.id} visible={Boolean(doc.visible)} mode="toggle" />
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className="inline-flex items-center gap-2">
                        <Link
                          href={`/dashboard/reviews/${doc.id}`}
                          className="h-9 px-4 rounded-lg font-poppins text-sm font-semibold text-brand-blue hover:bg-brand-blue-light inline-flex items-center transition-colors"
                        >
                          {t.table.edit}
                        </Link>
                        <ReviewRowActions id={doc.id} visible={Boolean(doc.visible)} mode="delete" />
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
