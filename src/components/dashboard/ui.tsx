"use client";

/* Small shared UI atoms for the dashboard, styled like the public site. */

export const fieldClass =
  "w-full h-[56px] border border-[#292D32] rounded-lg px-5 font-poppins text-base text-brand-dark bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 focus:outline-none transition-[border-color,box-shadow]";

export const textareaClass =
  "w-full min-h-[120px] border border-[#292D32] rounded-lg px-5 py-4 font-poppins text-base text-brand-dark bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 focus:outline-none transition-[border-color,box-shadow] resize-y";

export function Label({
  htmlFor,
  children,
}: {
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="absolute -top-2.5 left-4 bg-white px-2 font-poppins text-sm font-bold text-[#002B58] z-10 rounded"
    >
      {children}
    </label>
  );
}

export function PageHeading({
  title,
  highlight,
  action,
}: {
  title: string;
  highlight?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
      <h1 className="font-raleway font-bold text-[32px] md:text-[40px] leading-none text-[#002B58]">
        {title} {highlight && <span className="text-brand-blue">{highlight}</span>}
      </h1>
      {action}
    </div>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`bg-white rounded-[24px] shadow-[0_10px_40px_-12px_rgba(2,18,43,0.12)] ring-1 ring-brand-dark/5 ${className}`}
    >
      {children}
    </div>
  );
}

export function LocaleTabs({
  locale,
  onChange,
}: {
  locale: "nl" | "en";
  onChange: (l: "nl" | "en") => void;
}) {
  return (
    <div className="inline-flex items-center gap-1 bg-brand-blue-light rounded-xl p-1">
      {(["nl", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onChange(l)}
          className={`h-10 px-5 rounded-lg font-poppins font-semibold text-sm transition-colors ${
            locale === l
              ? "bg-gradient-to-r from-[#087AEC] to-[#56A5F4] text-white shadow"
              : "text-[#002B58] hover:text-brand-blue"
          }`}
        >
          {l === "nl" ? "🇳🇱 Nederlands" : "🇬🇧 English"}
        </button>
      ))}
    </div>
  );
}
