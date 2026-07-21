import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/sections/HomeHero";
import ExpertiseGrid from "@/components/sections/ExpertiseGrid";
import TeamCarousel from "@/components/sections/TeamCarousel";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import CasesGrid from "@/components/sections/CasesGrid";
import HomeCTA from "@/components/sections/HomeCTA";

export async function generateMetadata(
  props: {
    params: Promise<{ locale: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;

  const {
    locale
  } = params;

  const t = await getTranslations({ locale, namespace: "home" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function Home(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;

  const {
    locale
  } = params;

  unstable_setRequestLocale(locale);
  const t = await getTranslations("home");

  return (
    <>
      <Navbar />

      <HomeHero
        phone="+31 85 20 30 155"
        imageSrc="/images/home/hero.png"
        imageAlt={t("heroImageAlt")}
      />

      <ExpertiseGrid contactHref="/contact" />

      <TeamCarousel />

      <ContactSection
        heading={
          <>
            {t("contactHeadingPre")}{" "}
            <span className="text-brand-blue">{t("contactHeadingHighlight")}</span>{" "}
            {t("contactHeadingPost")}
          </>
        }
        subheading={t("contactSubheading")}
        contactName="Linda"
        contactGreeting={t("contactGreeting")}
        contactPhone="+31 85 20 30 155"
        contactWhatsapp="+31 6 25 199 747"
        contactImageSrc="/images/shared/linda-cutout.png"
        testimonial={{
          quote: t("testimonial.quote"),
          author: t("testimonial.author"),
          role: t("testimonial.role"),
        }}
      />

      <FaqSection defaultCategory="algemeen" />

      <CasesGrid allCasesHref="/cases" />

      <HomeCTA contactHref="/contact" />

      <Footer />
    </>
  );
}
