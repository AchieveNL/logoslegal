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
import type { FaqInput } from "@/app/dashboard/(protected)/faqs/actions";

const CATEGORIES = [
  { value: "algemeen", label: "Algemeen" },
  { value: "contracten", label: "Contracten en aansprakelijkheid" },
  { value: "arbeidsrecht", label: "Arbeidsrecht" },
  { value: "onderwijsrecht", label: "Onderwijsrecht" },
  { value: "criminal", label: "(Financieel) strafrecht" },
  { value: "human-rights", label: "Mensenrechten" },
];

interface Props {
  initial?: Partial<FaqInput>;
  onSubmit: (input: FaqInput) => Promise<void>;
  submitLabel: string;
}

export default function FaqForm({ initial, onSubmit, submitLabel }: Props) {
  const { t } = useDashIntl();
  const [locale, setLocale] = useState<"nl" | "en">("nl");
  const [category, setCategory] = useState(initial?.category || CATEGORIES[0].value);
  const [order, setOrder] = useState(initial?.order ?? 0);
  const [nl, setNl] = useState({
    question: initial?.nl?.question || "",
    answer: initial?.nl?.answer || "",
  });
  const [en, setEn] = useState({
    question: initial?.en?.question || "",
    answer: initial?.en?.answer || "",
  });
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const current = locale === "nl" ? nl : en;
  const setCurrent = (patch: Partial<{ question: string; answer: string }>) =>
    locale === "nl" ? setNl({ ...nl, ...patch }) : setEn({ ...en, ...patch });

  const submit = () => {
    if (!nl.question.trim() || !nl.answer.trim()) {
      setError(t.faqs.errRequiredNl);
      setLocale("nl");
      return;
    }
    setError(null);
    startTransition(async () => {
      await onSubmit({ category, order, nl, en });
    });
  };

  return (
    <div className="max-w-[860px]">
      <Card className="p-6 md:p-8 flex flex-col gap-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <LocaleTabs locale={locale} onChange={setLocale} />
          <span className="font-poppins text-sm text-brand-dark/50">
            {locale === "nl" ? t.form.nlContent : t.form.enContent}
          </span>
        </div>

        <div className="relative">
          <Label htmlFor="f-question">
            {t.faqs.question} {locale === "nl" && <span className="text-brand-blue">*</span>}
          </Label>
          <input
            id="f-question"
            value={current.question}
            onChange={(e) => setCurrent({ question: e.target.value })}
            className={fieldClass}
          />
        </div>

        <div className="relative">
          <Label htmlFor="f-answer">
            {t.faqs.answer} {locale === "nl" && <span className="text-brand-blue">*</span>}
          </Label>
          <textarea
            id="f-answer"
            value={current.answer}
            onChange={(e) => setCurrent({ answer: e.target.value })}
            className={textareaClass}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="relative">
            <Label htmlFor="f-category">{t.form.category}</Label>
            <select
              id="f-category"
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
          <div className="relative">
            <Label htmlFor="f-order">{t.faqs.orderField}</Label>
            <input
              id="f-order"
              type="number"
              value={order}
              onChange={(e) => setOrder(Number(e.target.value))}
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
