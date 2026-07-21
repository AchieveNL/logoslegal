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
import type { BlogInput, LocalizedBlogFields } from "@/app/dashboard/(protected)/blog/actions";

const emptyLocale: LocalizedBlogFields = { title: "", excerpt: "", body: "" };

interface Props {
  initial?: Partial<BlogInput> & { coverUrl?: string | null };
  onSubmit: (input: BlogInput) => Promise<void>;
  submitLabel: string;
  mediaReady?: boolean;
}

export default function BlogForm({ initial, onSubmit, submitLabel, mediaReady = true }: Props) {
  const { t } = useDashIntl();
  const [locale, setLocale] = useState<"nl" | "en">("nl");
  const [slug, setSlug] = useState(initial?.slug || "");
  const [author, setAuthor] = useState(initial?.author || "");
  const [publishedDate, setPublishedDate] = useState(
    (initial?.publishedDate || new Date().toISOString()).slice(0, 10)
  );
  const [cover, setCover] = useState<{ id: string | number; url: string } | null>(
    initial?.coverId && initial?.coverUrl
      ? { id: initial.coverId, url: initial.coverUrl }
      : null
  );
  const [nl, setNl] = useState<LocalizedBlogFields>({ ...emptyLocale, ...initial?.nl });
  const [en, setEn] = useState<LocalizedBlogFields>({ ...emptyLocale, ...initial?.en });
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const current = locale === "nl" ? nl : en;
  const setCurrent = (patch: Partial<LocalizedBlogFields>) =>
    locale === "nl" ? setNl({ ...nl, ...patch }) : setEn({ ...en, ...patch });

  const submit = (status: "draft" | "published") => {
    if (!nl.title.trim() || !nl.excerpt.trim() || !nl.body.trim()) {
      setError(t.form.errRequiredNlBlog);
      setLocale("nl");
      return;
    }
    if (!slug.trim() || !author.trim()) {
      setError(t.form.errSlugAuthor);
      return;
    }
    if (mediaReady && !cover) {
      setError(t.form.errCover);
      return;
    }
    setError(null);
    startTransition(async () => {
      await onSubmit({
        slug: slug.trim().toLowerCase().replace(/\s+/g, "-"),
        author: author.trim(),
        publishedDate,
        coverId: cover?.id ?? null,
        status,
        nl,
        en,
      });
    });
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8 items-start">
      <Card className="p-8">
        <div className="flex items-center justify-between mb-8">
          <LocaleTabs locale={locale} onChange={setLocale} />
          <span className="font-poppins text-sm text-brand-dark/50">
            {locale === "nl" ? t.form.nlContent : t.form.enContent}
          </span>
        </div>

        <div className="flex flex-col gap-7">
          <div className="relative">
            <Label htmlFor="b-title">
              {t.form.title} {locale === "nl" && <span className="text-brand-blue">*</span>}
            </Label>
            <input
              id="b-title"
              value={current.title}
              onChange={(e) => setCurrent({ title: e.target.value })}
              className={fieldClass}
            />
          </div>

          <div className="relative">
            <Label htmlFor="b-excerpt">
              {t.form.excerpt} {locale === "nl" && <span className="text-brand-blue">*</span>}
            </Label>
            <textarea
              id="b-excerpt"
              value={current.excerpt}
              onChange={(e) => setCurrent({ excerpt: e.target.value })}
              className={textareaClass}
            />
          </div>

          <div>
            <p className="mb-2 font-poppins text-sm font-bold text-[#002B58]">
              {t.form.articleBody} {locale === "nl" && <span className="text-brand-blue">*</span>}
            </p>
            <RichTextEditor
              value={current.body}
              onChange={(body) => setCurrent({ body })}
            />
          </div>
        </div>
      </Card>

      <div className="flex flex-col gap-6">
        <Card className="p-6 flex flex-col gap-7">
          <div className="relative">
            <Label htmlFor="b-slug">{t.form.slug} <span className="text-brand-blue">*</span></Label>
            <input
              id="b-slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="nieuwe-wetgeving-2026"
              className={fieldClass}
            />
          </div>

          <div className="relative">
            <Label htmlFor="b-author">{t.form.author} <span className="text-brand-blue">*</span></Label>
            <input
              id="b-author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Pejman Salim"
              className={fieldClass}
            />
          </div>

          <div className="relative">
            <Label htmlFor="b-date">{t.form.publishedDate}</Label>
            <input
              id="b-date"
              type="date"
              value={publishedDate}
              onChange={(e) => setPublishedDate(e.target.value)}
              className={fieldClass}
            />
          </div>

          <div>
            <p className="mb-2 font-poppins text-sm font-bold text-[#002B58]">
              {t.form.cover} <span className="text-brand-blue">*</span>
            </p>
            <ImageUpload value={cover} onChange={setCover} enabled={mediaReady} />
          </div>
        </Card>

        {error && <p className="font-poppins text-sm text-red-600 px-2">{error}</p>}

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
