import type { ReactNode } from "react";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PracticeAreaIntro from "@/components/sections/PracticeAreaIntro";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CTABanner from "@/components/sections/CTABanner";
import ChallengeSection from "@/components/sections/ChallengeSection";
import StepsSection from "@/components/sections/StepsSection";
import TestimonialsGrid from "@/components/sections/TestimonialsGrid";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import ExpertiseCarousel from "@/components/sections/ExpertiseCarousel";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "practice.arbeidsrecht.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ArbeidsrechtPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("practice.arbeidsrecht");
  const tCta = await getTranslations("cta");
  const tAreas = await getTranslations("expertiseAreas");

  const blue = (chunks: ReactNode) => (
    <span className="text-brand-blue">{chunks}</span>
  );

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.aboutUs"), href: "/over-ons" },
    { label: tAreas("arbeidsrecht") },
  ];

  const checkItems = t.raw("intro.checkItems") as string[];

  const benefits = t.raw("benefits.items") as {
    title: string;
    description: string;
  }[];

  return (
    <>
      <Navbar />

      <HeroBanner
        title={tAreas("arbeidsrecht")}
        subtitle={t("hero.subtitle")}
      />
      <Breadcrumb items={breadcrumbItems} />

      <PracticeAreaIntro
        heading={t.rich("intro.heading", { blue })}
        subheading={t("intro.subheading")}
        checkItems={checkItems}
        summary={t("intro.summary")}
        ctaLabel={t("intro.ctaLabel")}
        ctaHref="/contact"
        imageSrc="/images/arbeidsrecht/hero.png"
        imageAlt={t("intro.imageAlt")}
        contactName="Linda"
        contactImageSrc="/images/shared/linda-cutout.png"
      />

      <BenefitsSection
        heading={t.rich("benefits.heading", { blue })}
        benefits={benefits}
        ctaLabel={tCta("contactUs")}
        ctaHref="/contact"
        imageSrc="/images/arbeidsrecht/benefits.png"
        imageAlt={t("benefits.imageAlt")}
        quote={
          t.raw("benefits.quote") as {
            text: string;
            author: string;
            role: string;
          }
        }
      />

      <CTABanner
        heading={t("ctaBanner.heading")}
        subtitle={t("ctaBanner.subtitle")}
        ctaLabel={tCta("contactUs")}
        ctaHref="/contact"
      />

      <ChallengeSection
        heading={t.rich("challenge.heading", { blue })}
        paragraphs={t.raw("challenge.paragraphs") as string[]}
        ctaLabel={tCta("contactUs")}
        ctaHref="/contact"
        imagePrimary="/images/arbeidsrecht/challenge-1.png"
        imageSecondary="/images/arbeidsrecht/challenge-2.png"
        imageAlt={t("challenge.imageAlt")}
      />

      <StepsSection />

      <TestimonialsGrid />

      <ContactSection
        heading={t.rich("contact.heading", { blue })}
        subheading={t("contact.subheading")}
        contactName="Linda"
        contactGreeting={t("contact.greeting")}
        contactPhone="+31 85 20 30 155"
        contactWhatsapp="+31 6 25 199 747"
        contactImageSrc="/images/shared/linda-cutout.png"
        testimonial={
          t.raw("contact.testimonial") as {
            quote: string;
            author: string;
            role: string;
          }
        }
      />

      <FaqSection defaultCategory="arbeidsrecht" />

      <ExpertiseCarousel />

      <Footer />
    </>
  );
}
