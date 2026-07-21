import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import RechtsgebiedenRegister, {
  type RegisterEntry,
} from "@/components/sections/RechtsgebiedenRegister";

const entryImages = [
  "/images/rechtsgebiedenregister/pejman-salim.png",
  "/images/rechtsgebiedenregister/arzu-yandere.png",
  "/images/rechtsgebiedenregister/babi-azar.png",
  "/images/rechtsgebiedenregister/anil-ramdas.png",
];

export async function generateMetadata(
  props: {
    params: Promise<{ locale: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;

  const {
    locale
  } = params;

  const t = await getTranslations({
    locale,
    namespace: "legalPages.rechtsgebiedenregister.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RechtsgebiedenregisterPage(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;

  const {
    locale
  } = params;

  unstable_setRequestLocale(locale);
  const t = await getTranslations("legalPages.rechtsgebiedenregister");
  const tNav = await getTranslations("nav");

  const breadcrumbItems = [
    { label: tNav("home"), href: "/" },
    { label: t("breadcrumb") },
  ];

  const entries: RegisterEntry[] = (
    t.raw("entries") as Omit<RegisterEntry, "image">[]
  ).map((entry, i) => ({
    ...entry,
    image: entryImages[i],
  }));

  return (
    <>
      <Navbar />

      <HeroBanner title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <Breadcrumb items={breadcrumbItems} />

      <RechtsgebiedenRegister entries={entries} closing={t("closing")} />

      <Footer />
    </>
  );
}
