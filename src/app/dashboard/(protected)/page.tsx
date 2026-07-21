import Link from "next/link";
import { getPayload } from "@/lib/payload";
import { getDashMessages } from "@/lib/dashboard-i18n";
import { Card, PageHeading } from "@/components/dashboard/ui";

export default async function DashboardOverviewPage() {
  const payload = await getPayload();
  const { messages: t } = await getDashMessages();

  const [cases, blog, reviews] = await Promise.all([
    payload.count({ collection: "cases" }),
    payload.count({ collection: "blog-posts" }),
    payload.count({ collection: "reviews" }),
  ]);

  const stats = [
    { label: t.overview.cases, count: cases.totalDocs, href: "/dashboard/cases", cta: t.overview.manageCases },
    { label: t.overview.blog, count: blog.totalDocs, href: "/dashboard/blog", cta: t.overview.manageBlog },
    { label: t.overview.reviews, count: reviews.totalDocs, href: "/dashboard/reviews", cta: t.overview.manageReviews },
  ];

  return (
    <>
      <PageHeading title={t.overview.title} highlight={t.overview.titleHighlight} />
      <p className="font-poppins text-brand-dark/70 -mt-4 mb-10 max-w-[640px]">
        {t.overview.intro}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px]">
        {stats.map((s) => (
          <Card key={s.label} className="p-8 flex flex-col">
            <span className="font-raleway font-bold text-[56px] leading-none text-brand-blue">
              {s.count}
            </span>
            <span className="mt-2 font-poppins font-semibold text-lg text-[#002B58]">
              {s.label}
            </span>
            <Link
              href={s.href}
              className="mt-6 inline-flex items-center gap-2 font-poppins font-bold text-brand-blue hover:text-brand-blue-dark transition-colors"
            >
              {s.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="rotate-45">
                <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
}
