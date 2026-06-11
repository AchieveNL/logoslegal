import type { Metadata } from "next";
import { Raleway, Poppins, Roboto, Caveat, Inter } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/util/MotionProvider";
import SmoothScroll from "@/components/util/SmoothScroll";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LOGOS LEGAL | Betrokken, Strategisch en Innovatief",
  description:
    "LOGOS LEGAL biedt deskundige juridische begeleiding op het gebied van arbeidsrecht, contractenrecht, onderwijsrecht en meer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${raleway.variable} ${poppins.variable} ${roboto.variable} ${caveat.variable} ${inter.variable} font-poppins antialiased`}
      >
        {children}
        <SmoothScroll />
        <MotionProvider />
      </body>
    </html>
  );
}
