"use client";

import { useState, useTransition } from "react";
import {
  Card,
  fieldClass,
  Label,
  LocaleTabs,
  textareaClass,
} from "@/components/dashboard/ui";
import { useDashIntl } from "@/components/dashboard/DashIntl";
import type { ReviewInput } from "@/app/dashboard/(protected)/reviews/actions";

interface Props {
  initial?: Partial<ReviewInput>;
  onSubmit: (input: ReviewInput) => Promise<void>;
  submitLabel: string;
}

export default function ReviewForm({ initial, onSubmit, submitLabel }: Props) {
  const { t } = useDashIntl();
  const [locale, setLocale] = useState<"nl" | "en">("nl");
  const [author, setAuthor] = useState(initial?.author || "");
  const [visible, setVisible] = useState(initial?.visible ?? true);
  const [nl, setNl] = useState({ quote: initial?.nl?.quote || "", role: initial?.nl?.role || "" });
  const [en, setEn] = useState({ quote: initial?.en?.quote || "", role: initial?.en?.role || "" });
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const current = locale === "nl" ? nl : en;
  const setCurrent = (patch: Partial<{ quote: string; role: string }>) =>
    locale === "nl" ? setNl({ ...nl, ...patch }) : setEn({ ...en, ...patch });

  const submit = () => {
    if (!author.trim() || !nl.quote.trim()) {
      setError(t.form.errRequiredNlReview);
      setLocale("nl");
      return;
    }
    setError(null);
    startTransition(async () => {
      await onSubmit({ author: author.trim(), visible, nl, en });
    });
  };

  return (
    <div className="max-w-[760px]">
      <Card className="p-8 flex flex-col gap-7">
        <div className="flex items-center justify-between">
          <LocaleTabs locale={locale} onChange={setLocale} />
          <label className="flex items-center gap-2 font-poppins text-sm font-semibold text-[#002B58] cursor-pointer">
            <input
              type="checkbox"
              checked={visible}
              onChange={(e) => setVisible(e.target.checked)}
              className="w-4 h-4 accent-brand-blue"
            />
            {t.form.visibleOnSite}
          </label>
        </div>

        <div className="relative">
          <Label htmlFor="r-quote">
            {t.form.quoteField} {locale === "nl" && <span className="text-brand-blue">*</span>}
          </Label>
          <textarea
            id="r-quote"
            value={current.quote}
            onChange={(e) => setCurrent({ quote: e.target.value })}
            className={textareaClass}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="relative">
            <Label htmlFor="r-author">{t.form.author} <span className="text-brand-blue">*</span></Label>
            <input
              id="r-author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Laura Chen"
              className={fieldClass}
            />
          </div>
          <div className="relative">
            <Label htmlFor="r-role">{t.form.role}</Label>
            <input
              id="r-role"
              value={current.role}
              onChange={(e) => setCurrent({ role: e.target.value })}
              placeholder={locale === "nl" ? "Algemeen directeur" : "Managing Director"}
              className={fieldClass}
            />
          </div>
        </div>

        {error && <p className="font-poppins text-sm text-red-600">{error}</p>}

        <button
          type="button"
          disabled={pending}
          onClick={submit}
          className="btn-gradient h-[56px] rounded-xl text-base self-start px-10"
        >
          {pending ? t.form.busy : submitLabel}
        </button>
      </Card>
    </div>
  );
}
