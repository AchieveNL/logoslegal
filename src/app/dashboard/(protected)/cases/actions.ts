"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getPayload } from "@/lib/payload";

export interface LocalizedCaseFields {
  title: string;
  summary: string;
  body: string;
}

export interface CaseInput {
  slug: string;
  category: string;
  imageId: string | number | null;
  status: "draft" | "published";
  nl: LocalizedCaseFields;
  en: LocalizedCaseFields;
}

async function requireUser() {
  const payload = await getPayload();
  const { user } = await payload.auth({ headers: await headers() });
  if (!user) redirect("/dashboard/login");
  return payload;
}

function revalidateSite() {
  revalidatePath("/", "layout");
}

export async function createCase(input: CaseInput) {
  const payload = await requireUser();
  const doc = await payload.create({
    collection: "cases",
    locale: "nl",
    data: {
      slug: input.slug,
      category: input.category as never,
      image: input.imageId as never,
      title: input.nl.title,
      summary: input.nl.summary,
      body: input.nl.body,
      _status: input.status,
    },
  });
  if (input.en.title || input.en.summary || input.en.body) {
    await payload.update({
      collection: "cases",
      id: doc.id,
      locale: "en",
      data: {
        title: input.en.title,
        summary: input.en.summary,
        body: input.en.body,
      },
    });
  }
  revalidateSite();
  redirect("/dashboard/cases");
}

export async function updateCase(id: string | number, input: CaseInput) {
  const payload = await requireUser();
  await payload.update({
    collection: "cases",
    id,
    locale: "nl",
    data: {
      slug: input.slug,
      category: input.category as never,
      image: input.imageId as never,
      title: input.nl.title,
      summary: input.nl.summary,
      body: input.nl.body,
      _status: input.status,
    },
  });
  await payload.update({
    collection: "cases",
    id,
    locale: "en",
    data: {
      title: input.en.title,
      summary: input.en.summary,
      body: input.en.body,
    },
  });
  revalidateSite();
  redirect("/dashboard/cases");
}

export async function deleteCase(id: string | number) {
  const payload = await requireUser();
  await payload.delete({ collection: "cases", id });
  revalidateSite();
  revalidatePath("/dashboard/cases");
}
