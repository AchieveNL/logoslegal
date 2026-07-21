"use client";

import { useRef, useState } from "react";
import { useDashIntl } from "@/components/dashboard/DashIntl";

interface Props {
  /* Currently selected media doc (id + url), or null. */
  value: { id: string | number; url: string } | null;
  onChange: (media: { id: string | number; url: string } | null) => void;
}

export default function ImageUpload({ value, onChange }: Props) {
  const { t } = useDashIntl();
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const upload = async (file: File) => {
    setBusy(true);
    setError(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("_payload", JSON.stringify({ alt: file.name.replace(/\.[^.]+$/, "") }));
      const res = await fetch("/api/media", {
        method: "POST",
        credentials: "include",
        body: fd,
      });
      if (!res.ok) throw new Error(await res.text());
      const json = await res.json();
      onChange({ id: json.doc.id, url: json.doc.url });
    } catch {
      setError(t.upload.failed);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      {value ? (
        <div className="relative rounded-xl overflow-hidden border border-brand-gray/60">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value.url} alt="" className="w-full h-48 object-cover" />
          <div className="absolute top-3 right-3 flex gap-2">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="h-9 px-4 rounded-lg bg-white/95 font-poppins text-sm font-semibold text-[#002B58] hover:bg-white shadow"
            >
              {t.upload.replace}
            </button>
            <button
              type="button"
              onClick={() => onChange(null)}
              className="h-9 px-3 rounded-lg bg-white/95 font-poppins text-sm font-semibold text-red-600 hover:bg-white shadow"
            >
              ✕
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={busy}
          className="w-full h-48 rounded-xl border-2 border-dashed border-brand-blue/40 bg-brand-blue-light/50 hover:bg-brand-blue-light flex flex-col items-center justify-center gap-2 font-poppins text-brand-blue font-semibold transition-colors"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 16V4m0 0-4 4m4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 16v3a1.6 1.6 0 0 0 1.6 1.6h12.8A1.6 1.6 0 0 0 20 19v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {busy ? t.upload.uploading : t.upload.upload}
        </button>
      )}
      {error && <p className="mt-2 text-sm text-red-600 font-poppins">{error}</p>}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) upload(f);
          e.target.value = "";
        }}
      />
    </div>
  );
}
