"use client";

import { useTransition } from "react";
import { useDashIntl } from "@/components/dashboard/DashIntl";
import { deleteReview, toggleReviewVisible } from "./actions";

export function ReviewRowActions({
  id,
  visible,
  mode,
}: {
  id: string | number;
  visible: boolean;
  mode: "toggle" | "delete";
}) {
  const { t } = useDashIntl();
  const [pending, startTransition] = useTransition();

  if (mode === "toggle") {
    return (
      <button
        type="button"
        disabled={pending}
        onClick={() => startTransition(() => toggleReviewVisible(id, !visible))}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          visible ? "bg-brand-blue" : "bg-brand-gray"
        }`}
        aria-pressed={visible}
        title={visible ? t.reviews.visibleOn : t.reviews.visibleOff}
      >
        <span
          className={`inline-block h-4 w-4 rounded-full bg-white shadow transform transition-transform ${
            visible ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    );
  }

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        if (confirm(t.reviews.confirmDelete)) {
          startTransition(() => deleteReview(id));
        }
      }}
      className="h-9 px-4 rounded-lg font-poppins text-sm font-semibold text-red-600 hover:bg-red-50 inline-flex items-center transition-colors"
    >
      {pending ? "..." : t.table.delete}
    </button>
  );
}
