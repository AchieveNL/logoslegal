import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import sanitizeHtml from "sanitize-html";
import { getTranslations } from "next-intl/server";
import { unstable_setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { getPayload } from "@/lib/payload";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/sections/CTABanner";

const CATEGORY_KEY: Record<string, string> = {
  arbeidsrecht: "arbeidsrecht",
  contracten: "contracten",
  onderwijsrecht: "onderwijsrecht",
  financieelStrafrecht: "financieelStrafrecht",
  mensenrechten: "mensenrechten",
};

async function findCase(slug: string, locale: string) {
  const payload = await getPayload();
  const { docs } = await payload.find({
    collection: "cases",
    locale: locale as "nl" | "en",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1,
  });
  return docs[0] ?? null;
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await props.params;
  const doc = await findCase(slug, locale);
  if (!doc) return {};
  return {
    title: `${doc.title} | LOGOS LEGAL`,
    description: doc.summary,
  };
}

export default async function CaseDetailPage(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await props.params;
  unstable_setRequestLocale(locale);

  const [doc, t, tAreas, tCta] = await Promise.all([
    findCase(slug, locale),
    getTranslations("casesPage"),
    getTranslations("expertiseAreas"),
    getTranslations("cta"),
  ]);

  if (!doc) notFound();

  const media = typeof doc.image === "object" && doc.image !== null ? doc.image : null;
  const bodyHtml = sanitizeHtml(doc.body || "", {
    allowedTags: ["h2", "h3", "p", "ul", "ol", "li", "blockquote", "a", "strong", "em", "br"],
    allowedAttributes: { a: ["href", "target", "rel"] },
  });

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.cases"), href: "/cases" },
    { label: doc.title },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />

      <article className="w-full bg-brand-blue-light">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-10 md:pt-16 pb-16 md:pb-24">
          {/* Category chip */}
          <span className="inline-flex bg-white rounded-full px-4 py-2 font-poppins font-semibold text-sm text-brand-blue">
            {tAreas(CATEGORY_KEY[doc.category] || "contracten")}
          </span>

          <h1 className="mt-5 font-raleway font-bold text-[34px] md:text-[56px] leading-tight tracking-normal text-[#002B58] max-w-[980px]">
            {doc.title}
          </h1>

          {/* Hero image */}
          {media?.url && (
            <div className="relative w-full h-[280px] md:h-[460px] lg:h-[560px] mt-10 rounded-[24px] overflow-hidden bg-brand-blue/10">
              <Image
                src={media.url}
                alt={media.alt || doc.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          )}

          {/* Summary lead */}
          <p className="mt-10 font-poppins font-semibold text-[20px] md:text-[24px] leading-relaxed text-[#002B58] max-w-[900px]">
            {doc.summary}
          </p>

          {/* Body */}
          {bodyHtml && (
            <div
              className="prose-editor mt-6 max-w-[900px] font-poppins text-base md:text-[20px] leading-relaxed text-[#292D32]"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          )}

          <Link
            href="/cases"
            className="btn-fx mt-12 inline-flex items-center justify-center gap-2.5 h-[64px] px-8 rounded-2xl bg-brand-blue text-white font-poppins font-bold text-lg hover:bg-brand-blue-dark"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="-rotate-135">
              <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t("backToCases")}
          </Link>
        </div>
      </article>

      <CTABanner
        heading={t("cta.heading")}
        subtitle={t("cta.subtitle")}
        ctaLabel={tCta("contactUs")}
        ctaHref="/contact"
      />
      <Footer />
    </>
  );
}
