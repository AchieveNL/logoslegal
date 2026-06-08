import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import RechtsgebiedenRegister, {
  type RegisterEntry,
} from "@/components/sections/RechtsgebiedenRegister";

export const metadata: Metadata = {
  title: "Rechtsgebiedenregister | LOGOS LEGAL",
  description:
    "Geregistreerde juridische specialisaties van de advocaten van LOGOS LEGAL in het rechtsgebiedenregister van de Nederlandse orde van advocaten.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Rechtsgebiedenregister" },
];

const entries: RegisterEntry[] = [
  {
    firstName: "Pejman",
    lastName: "Salim",
    intro:
      "Pejman Salim heeft in het rechtsgebiedenregister van de Nederlandse orde van advocaten de volgende rechtsgebieden geregistreerd:",
    items: [
      "Algemene praktijk",
      "Strafrecht (Internationaal Strafrecht en uit- en overleveringszaken)",
    ],
    image: "/images/rechtsgebiedenregister/pejman-salim.png",
  },
  {
    firstName: "Arzu",
    lastName: "Yandere",
    intro:
      "Arzu Yandere heeft in het rechtsgebiedenregister van de Nederlandse orde van advocaten de volgende rechtsgebieden geregistreerd:",
    items: ["Onderwijsrecht", "Arbeidsrecht"],
    image: "/images/rechtsgebiedenregister/arzu-yandere.png",
  },
  {
    firstName: "Babi",
    lastName: "Azar",
    intro:
      "Babi Azar heeft in het rechtsgebiedenregister van de Nederlandse orde van advocaten de volgende rechtsgebieden geregistreerd:",
    items: [
      "Bestuursrecht",
      "Arbeidsrecht",
      "Personen- en Familierecht (Echtscheidingen, alimentatiezaken, omgangsregelingen, Jeugdbeschermingsrecht, Ouderschap en erkenning)",
      "Strafrecht",
    ],
    image: "/images/rechtsgebiedenregister/babi-azar.png",
  },
  {
    firstName: "Anil",
    lastName: "Ramdas",
    intro:
      "Anil Ramdas staat in het rechtsgebiedenregister van de Nederlandse orde van advocaten geregistreerd voor de volgende rechtsgebieden.",
    items: ["Personen- en Familierecht", "Strafrecht"],
    image: "/images/rechtsgebiedenregister/anil-ramdas.png",
  },
];

const closing =
  "Op grond van deze registratie zijn advocaten verplicht elk kalenderjaar volgens de normen van de Nederlandse orde van advocaten tien opleidingspunten te behalen op ieder geregistreerd hoofdrechtsgebied.";

export default function RechtsgebiedenregisterPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Rechtsgebiedenregister"
        subtitle="Geregistreerde juridische specialisaties"
      />
      <Breadcrumb items={breadcrumbItems} />

      <RechtsgebiedenRegister entries={entries} closing={closing} />

      <Footer />
    </>
  );
}
