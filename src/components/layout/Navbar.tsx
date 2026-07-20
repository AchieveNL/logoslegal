"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";

export default function Navbar() {
  const t = useTranslations("nav");
  const tExpertise = useTranslations("expertiseAreas");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const expertiseLinks = [
    { label: tExpertise("arbeidsrecht"), href: "/arbeidsrecht" },
    { label: tExpertise("contracten"), href: "/contracten" },
    { label: tExpertise("onderwijsrecht"), href: "/onderwijsrecht" },
    { label: tExpertise("financieelStrafrecht"), href: "/financieel-strafrecht" },
    { label: tExpertise("mensenrechten"), href: "/mensenrechten" },
  ];

  const navLinks = [
    { label: t("home"), href: "/" },
    { label: t("cases"), href: "/cases" },
    { label: t("aboutUs"), href: "/over-ons", hasDropdown: true },
    { label: t("expertise"), href: "/expertise", hasDropdown: true, isExpertise: true },
  ];

  const switchLocale = (next: "nl" | "en") => {
    if (next !== locale) {
      router.replace(pathname, { locale: next });
    }
  };

  return (
    <header className="bg-white w-full sticky top-0 z-50 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
      <div className="max-w-container mx-auto flex items-center justify-between px-6 md:px-24 h-[132px]">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/shared/logo.svg"
            alt="LOGOS LEGAL"
            width={148}
            height={45}
            className="h-12 w-auto md:h-14"
            priority
            unoptimized
          />
        </Link>

        {/* Language Switcher */}
        <div className="hidden md:flex items-center gap-6 ml-8 border border-brand-gray rounded-lg px-2 py-2">
          <button
            type="button"
            onClick={() => switchLocale("nl")}
            aria-label={t("switchToDutch")}
            aria-pressed={locale === "nl"}
          >
            <Image
              src="/images/shared/flag-nl.svg"
              alt={t("switchToDutch")}
              width={40}
              height={30}
              className={`rounded-sm cursor-pointer transition-opacity ${
                locale === "nl" ? "" : "opacity-60 hover:opacity-100"
              }`}
              unoptimized
            />
          </button>
          <button
            type="button"
            onClick={() => switchLocale("en")}
            aria-label={t("switchToEnglish")}
            aria-pressed={locale === "en"}
          >
            <Image
              src="/images/shared/flag-gb.svg"
              alt={t("switchToEnglish")}
              width={40}
              height={30}
              className={`rounded-sm cursor-pointer transition-opacity ${
                locale === "en" ? "" : "opacity-60 hover:opacity-100"
              }`}
              unoptimized
            />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12 flex-1 justify-center">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.isExpertise ? (
                <div
                  className={`flex items-center gap-1 ${
                    expertiseOpen ? "text-brand-blue" : "text-brand-dark"
                  }`}
                >
                  <Link
                    href={link.href}
                    className="font-poppins font-medium text-[24px] hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                  <button
                    onClick={() => setExpertiseOpen(!expertiseOpen)}
                    aria-label={t("showExpertiseMenu")}
                    aria-expanded={expertiseOpen}
                    className="hover:text-brand-blue transition-colors"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`transition-transform ${
                        expertiseOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="font-poppins font-medium text-[24px] text-brand-dark hover:text-brand-blue transition-colors"
                >
                  {link.label}
                </Link>
              )}

              {/* Expertise Dropdown */}
              {link.isExpertise && expertiseOpen && (
                <div className="absolute top-full left-0 mt-4 w-56 bg-white rounded-xl shadow-lg border border-brand-gray/30 p-4 flex flex-col gap-4">
                  {expertiseLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="font-poppins font-medium text-base text-brand-blue hover:text-brand-blue-dark transition-colors"
                      onClick={() => setExpertiseOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact CTA */}
        <Link
          href="/contact"
          className="btn-fx hidden lg:inline-flex items-center gap-2.5 bg-brand-blue-light text-brand-blue font-poppins font-bold text-[24px] px-12 h-[80px] rounded-button hover:bg-blue-100"
        >
          {t("contact")}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="rotate-45"
          >
            <path
              d="M16 6.66669L16 25.3334"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.3334 16L16.0001 6.66669L6.66675 16"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label={t("toggleMenu")}
        >
          <span
            className={`block w-7 h-0.5 bg-brand-dark transition-transform ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-brand-dark transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-brand-dark transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-brand-gray/30 px-6 py-8">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) =>
              link.isExpertise ? (
                <div key={link.label} className="flex flex-col gap-3">
                  <Link
                    href={link.href}
                    className="font-poppins font-medium text-xl text-brand-blue"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  <div className="flex flex-col gap-2 pl-4">
                    {expertiseLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="font-poppins text-base text-brand-dark/80 hover:text-brand-blue"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-poppins font-medium text-xl text-brand-dark hover:text-brand-blue"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            {/* Mobile language switcher */}
            <div className="flex items-center gap-4">
              <button type="button" onClick={() => switchLocale("nl")} aria-label={t("switchToDutch")}>
                <Image
                  src="/images/shared/flag-nl.svg"
                  alt={t("switchToDutch")}
                  width={36}
                  height={27}
                  className={`rounded-sm ${locale === "nl" ? "" : "opacity-60"}`}
                  unoptimized
                />
              </button>
              <button type="button" onClick={() => switchLocale("en")} aria-label={t("switchToEnglish")}>
                <Image
                  src="/images/shared/flag-gb.svg"
                  alt={t("switchToEnglish")}
                  width={36}
                  height={27}
                  className={`rounded-sm ${locale === "en" ? "" : "opacity-60"}`}
                  unoptimized
                />
              </button>
            </div>
            <Link
              href="/contact"
              className="btn-fx inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-poppins font-bold text-lg px-8 h-14 rounded-button"
              onClick={() => setMobileOpen(false)}
            >
              {t("contact")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
