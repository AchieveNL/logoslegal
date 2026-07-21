"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getPayload } from "@/lib/payload";

export interface FaqInput {
  category: string;
  order: number;
  nl: { question: string; answer: string };
  en: { question: string; answer: string };
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

export async function createFaq(input: FaqInput) {
  const payload = await requireUser();
  const doc = await payload.create({
    collection: "faqs",
    locale: "nl",
    data: {
      category: input.category as never,
      order: input.order,
      question: input.nl.question,
      answer: input.nl.answer,
    },
  });
  if (input.en.question || input.en.answer) {
    await payload.update({
      collection: "faqs",
      id: doc.id,
      locale: "en",
      data: { question: input.en.question, answer: input.en.answer },
    });
  }
  revalidateSite();
  redirect("/dashboard/faqs");
}

export async function updateFaq(id: string | number, input: FaqInput) {
  const payload = await requireUser();
  await payload.update({
    collection: "faqs",
    id,
    locale: "nl",
    data: {
      category: input.category as never,
      order: input.order,
      question: input.nl.question,
      answer: input.nl.answer,
    },
  });
  await payload.update({
    collection: "faqs",
    id,
    locale: "en",
    data: { question: input.en.question, answer: input.en.answer },
  });
  revalidateSite();
  redirect("/dashboard/faqs");
}

export async function deleteFaq(id: string | number) {
  const payload = await requireUser();
  await payload.delete({ collection: "faqs", id });
  revalidateSite();
  revalidatePath("/dashboard/faqs");
}
