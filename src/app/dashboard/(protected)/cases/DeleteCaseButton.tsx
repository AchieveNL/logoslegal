"use client";

import { useTransition } from "react";
import { useDashIntl } from "@/components/dashboard/DashIntl";
import { deleteCase } from "./actions";

export function DeleteCaseButton({ id }: { id: string | number }) {
  const { t } = useDashIntl();
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        if (confirm(t.cases.confirmDelete)) {
          startTransition(() => deleteCase(id));
        }
      }}
      className="h-9 px-4 rounded-lg font-poppins text-sm font-semibold text-red-600 hover:bg-red-50 inline-flex items-center transition-colors"
    >
      {pending ? "..." : t.table.delete}
    </button>
  );
}
