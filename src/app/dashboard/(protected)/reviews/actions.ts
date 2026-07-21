"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getPayload } from "@/lib/payload";

export interface ReviewInput {
  author: string;
  visible: boolean;
  nl: { quote: string; role: string };
  en: { quote: string; role: string };
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

export async function createReview(input: ReviewInput) {
  const payload = await requireUser();
  const doc = await payload.create({
    collection: "reviews",
    locale: "nl",
    data: {
      author: input.author,
      visible: input.visible,
      quote: input.nl.quote,
      role: input.nl.role,
    },
  });
  if (input.en.quote || input.en.role) {
    await payload.update({
      collection: "reviews",
      id: doc.id,
      locale: "en",
      data: { quote: input.en.quote, role: input.en.role },
    });
  }
  revalidateSite();
  redirect("/dashboard/reviews");
}

export async function updateReview(id: string | number, input: ReviewInput) {
  const payload = await requireUser();
  await payload.update({
    collection: "reviews",
    id,
    locale: "nl",
    data: {
      author: input.author,
      visible: input.visible,
      quote: input.nl.quote,
      role: input.nl.role,
    },
  });
  await payload.update({
    collection: "reviews",
    id,
    locale: "en",
    data: { quote: input.en.quote, role: input.en.role },
  });
  revalidateSite();
  redirect("/dashboard/reviews");
}

export async function deleteReview(id: string | number) {
  const payload = await requireUser();
  await payload.delete({ collection: "reviews", id });
  revalidateSite();
  revalidatePath("/dashboard/reviews");
}

export async function toggleReviewVisible(id: string | number, visible: boolean) {
  const payload = await requireUser();
  await payload.update({ collection: "reviews", id, data: { visible } });
  revalidateSite();
  revalidatePath("/dashboard/reviews");
}
