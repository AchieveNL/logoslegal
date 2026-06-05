import type { Metadata } from "next";
import { Raleway, Poppins } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700", "800"],
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
        className={`${raleway.variable} ${poppins.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
