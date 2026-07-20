"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";

function RequiredMark() {
  return (
    <span className="text-brand-blue" aria-hidden="true">
      *
    </span>
  );
}

export default function ContactForm() {
  const t = useTranslations("contactForm");
  const tCta = useTranslations("cta");
  const caseTypes = t.raw("caseTypes") as string[];
  const uid = useId();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown on outside click or Escape.
  useEffect(() => {
    if (!dropdownOpen) return;
    const onPointer = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdownOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [dropdownOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, caseType: selectedCase });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fieldClass =
    "w-full h-[72px] border border-[#292D32] rounded-lg px-5 font-poppins text-base text-brand-dark focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 focus:outline-none transition-[border-color,box-shadow]";
  const labelClass =
    "absolute -top-2.5 left-4 bg-white px-2 font-poppins text-sm font-bold text-[#002B58] z-10";

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col gap-7" noValidate>
      {/* Name */}
      <div className="relative">
        <label htmlFor={`${uid}-name`} className={labelClass}>
          {t("name")} <RequiredMark />
        </label>
        <input
          id={`${uid}-name`}
          type="text"
          name="name"
          required
          aria-required="true"
          value={formData.name}
          onChange={handleChange}
          className={fieldClass}
        />
      </div>

      {/* Email */}
      <div className="relative">
        <label htmlFor={`${uid}-email`} className={labelClass}>
          {t("email")} <RequiredMark />
        </label>
        <input
          id={`${uid}-email`}
          type="email"
          name="email"
          required
          aria-required="true"
          value={formData.email}
          onChange={handleChange}
          className={fieldClass}
        />
      </div>

      {/* Phone */}
      <div className="relative">
        <label htmlFor={`${uid}-phone`} className={labelClass}>
          {t("phone")}
        </label>
        <input
          id={`${uid}-phone`}
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={fieldClass}
        />
      </div>

      {/* Type of case dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setDropdownOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
          className="w-full h-[72px] border border-[#292D32] rounded-lg px-5 font-poppins text-base text-left flex items-center justify-between focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 focus:outline-none transition-[border-color,box-shadow]"
        >
          <span className={selectedCase ? "text-brand-dark" : "text-brand-dark/60"}>
            {selectedCase || t("caseType")}
          </span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className={`text-brand-blue transition-transform duration-200 ${
              dropdownOpen ? "rotate-180" : ""
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

        {dropdownOpen && (
          <ul
            role="listbox"
            aria-label={t("caseType")}
            className="absolute top-full left-0 w-full mt-1 bg-white border border-[#292D32] rounded-lg shadow-lg z-20 py-2 overflow-hidden"
          >
            {caseTypes.map((type) => {
              const selected = selectedCase === type;
              return (
                <li key={type} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCase(type);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-5 py-2 font-poppins text-base transition-colors hover:bg-brand-blue-light ${
                      selected ? "text-brand-blue" : "text-brand-dark"
                    }`}
                  >
                    {type}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Message — flex-1 so it absorbs any leftover card height */}
      <div className="relative flex-1 flex min-h-[186px]">
        <label htmlFor={`${uid}-message`} className={labelClass}>
          {t("message")}
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t("messagePlaceholder")}
          className="w-full min-h-[186px] border border-[#292D32] rounded-lg px-5 py-4 font-poppins text-base text-brand-dark placeholder:text-brand-dark/40 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 focus:outline-none transition-[border-color,box-shadow] resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn-gradient group w-full h-[72px] text-lg rounded-lg gap-2.5"
      >
        {tCta("send")}
        <svg
          width="22"
          height="22"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
          className="rotate-45 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
      </button>
    </form>
  );
}
