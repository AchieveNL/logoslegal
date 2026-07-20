import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ContactSection from "@/components/sections/ContactSection";
import ContactLocation from "@/components/sections/ContactLocation";
import CTABanner from "@/components/sections/CTABanner";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "contactPage.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("contactPage");
  const tCta = await getTranslations("cta");

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.contact") },
  ];

  return (
    <>
      <Navbar />

      <HeroBanner title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <Breadcrumb items={breadcrumbItems} />

      <ContactSection
        heading={t.rich("heading", {
          blue: (chunks) => <span className="text-brand-blue">{chunks}</span>,
        })}
        subheading={t("subheading")}
        contactName="Linda"
        contactGreeting={t("greeting")}
        contactPhone="+31 85 20 30 155"
        contactWhatsapp="+31 6 25 199 747"
        contactImageSrc="/images/shared/linda-cutout.png"
        testimonial={{
          quote: t("testimonial.quote"),
          author: t("testimonial.author"),
          role: t("testimonial.role"),
        }}
      />

      <ContactLocation />

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
