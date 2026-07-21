"use client";

import { useState, useTransition } from "react";
import {
  Card,
  fieldClass,
  Label,
  LocaleTabs,
  textareaClass,
} from "@/components/dashboard/ui";
import RichTextEditor from "@/components/dashboard/RichTextEditor";
import ImageUpload from "@/components/dashboard/ImageUpload";
import { useDashIntl } from "@/components/dashboard/DashIntl";
import type { CaseInput, LocalizedCaseFields } from "@/app/dashboard/(protected)/cases/actions";

const CATEGORIES = [
  { value: "arbeidsrecht", label: "Arbeidsrecht" },
  { value: "contracten", label: "Contracten en aansprakelijkheid" },
  { value: "onderwijsrecht", label: "Onderwijsrecht" },
  { value: "financieelStrafrecht", label: "Financieel strafrecht" },
  { value: "mensenrechten", label: "Mensenrechten" },
];

const emptyLocale: LocalizedCaseFields = { title: "", summary: "", body: "" };

interface Props {
  initial?: Partial<CaseInput> & { imageUrl?: string | null };
  onSubmit: (input: CaseInput) => Promise<void>;
  submitLabel: string;
  mediaReady?: boolean;
}

export default function CaseForm({ initial, onSubmit, submitLabel, mediaReady = true }: Props) {
  const { t } = useDashIntl();
  const [locale, setLocale] = useState<"nl" | "en">("nl");
  const [slug, setSlug] = useState(initial?.slug || "");
  const [category, setCategory] = useState(initial?.category || CATEGORIES[0].value);
  const [image, setImage] = useState<{ id: string | number; url: string } | null>(
    initial?.imageId && initial?.imageUrl
      ? { id: initial.imageId, url: initial.imageUrl }
      : null
  );
  const [nl, setNl] = useState<LocalizedCaseFields>({ ...emptyLocale, ...initial?.nl });
  const [en, setEn] = useState<LocalizedCaseFields>({ ...emptyLocale, ...initial?.en });
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const current = locale === "nl" ? nl : en;
  const setCurrent = (patch: Partial<LocalizedCaseFields>) =>
    locale === "nl" ? setNl({ ...nl, ...patch }) : setEn({ ...en, ...patch });

  const submit = (status: "draft" | "published") => {
    if (!nl.title.trim() || !nl.summary.trim()) {
      setError(t.form.errRequiredNl);
      setLocale("nl");
      return;
    }
    if (!slug.trim()) {
      setError(t.form.errSlug);
      return;
    }
    if (mediaReady && !image) {
      setError(t.form.errImage);
      return;
    }
    setError(null);
    startTransition(async () => {
      await onSubmit({
        slug: slug.trim().toLowerCase().replace(/\s+/g, "-"),
        category,
        imageId: image?.id ?? null,
        status,
        nl,
        en,
      });
    });
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8 items-start">
      {/* Left: localized content */}
      <Card className="p-8">
        <div className="flex items-center justify-between mb-8">
          <LocaleTabs locale={locale} onChange={setLocale} />
          <span className="font-poppins text-sm text-brand-dark/50">
            {locale === "nl" ? t.form.nlContent : t.form.enContent}
          </span>
        </div>

        <div className="flex flex-col gap-7">
          <div className="relative">
            <Label htmlFor="title">{t.form.title} {locale === "nl" && <span className="text-brand-blue">*</span>}</Label>
            <input
              id="title"
              value={current.title}
              onChange={(e) => setCurrent({ title: e.target.value })}
              className={fieldClass}
            />
          </div>

          <div className="relative">
            <Label htmlFor="summary">
              {t.form.summary} {locale === "nl" && <span className="text-brand-blue">*</span>}
            </Label>
            <textarea
              id="summary"
              value={current.summary}
              onChange={(e) => setCurrent({ summary: e.target.value })}
              className={textareaClass}
            />
          </div>

          <div>
            <p className="mb-2 font-poppins text-sm font-bold text-[#002B58]">
              {t.form.body}
            </p>
            <RichTextEditor
              value={current.body}
              onChange={(body) => setCurrent({ body })}
            />
          </div>
        </div>
      </Card>

      {/* Right: shared settings */}
      <div className="flex flex-col gap-6">
        <Card className="p-6 flex flex-col gap-7">
          <div className="relative">
            <Label htmlFor="slug">{t.form.slug} <span className="text-brand-blue">*</span></Label>
            <input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="boete-rookverbod"
              className={fieldClass}
            />
          </div>

          <div className="relative">
            <Label htmlFor="category">{t.form.category}</Label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={fieldClass}
            >
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="mb-2 font-poppins text-sm font-bold text-[#002B58]">
              {t.form.image} <span className="text-brand-blue">*</span>
            </p>
            <ImageUpload value={image} onChange={setImage} enabled={mediaReady} />
          </div>
        </Card>

        {error && (
          <p className="font-poppins text-sm text-red-600 px-2">{error}</p>
        )}

        <div className="flex flex-col gap-3">
          <button
            type="button"
            disabled={pending}
            onClick={() => submit("published")}
            className="btn-gradient h-[56px] rounded-xl text-base"
          >
            {pending ? t.form.busy : submitLabel}
          </button>
          <button
            type="button"
            disabled={pending}
            onClick={() => submit("draft")}
            className="btn-fx h-[56px] rounded-xl border-2 border-[#002B58] text-[#002B58] font-poppins font-bold text-base bg-white shadow-none hover:shadow-none hover:bg-[#002B58] hover:text-white inline-flex items-center justify-center"
          >
            {t.form.saveDraft}
          </button>
        </div>
      </div>
    </div>
  );
}
