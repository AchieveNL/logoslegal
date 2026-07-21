import type { Metadata } from "next";
import { Raleway, Poppins } from "next/font/google";
import "../globals.css";
import { getDashMessages } from "@/lib/dashboard-i18n";
import { DashIntlProvider } from "@/components/dashboard/DashIntl";

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
  title: "Dashboard — LOGOS LEGAL",
  robots: { index: false, follow: false },
};

export default async function DashboardRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { locale, messages } = await getDashMessages();

  return (
    <html lang={locale}>
      <body
        className={`${raleway.variable} ${poppins.variable} dashboard-body font-poppins antialiased bg-brand-blue-light min-h-screen`}
      >
        <DashIntlProvider locale={locale} messages={messages}>
          {children}
        </DashIntlProvider>
      </body>
    </html>
  );
}
