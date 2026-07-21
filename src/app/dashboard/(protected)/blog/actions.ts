"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getPayload } from "@/lib/payload";

export interface LocalizedBlogFields {
  title: string;
  excerpt: string;
  body: string;
}

export interface BlogInput {
  slug: string;
  author: string;
  publishedDate: string;
  coverId: string | number | null;
  status: "draft" | "published";
  nl: LocalizedBlogFields;
  en: LocalizedBlogFields;
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

export async function createBlogPost(input: BlogInput) {
  const payload = await requireUser();
  const doc = await payload.create({
    collection: "blog-posts",
    locale: "nl",
    data: {
      slug: input.slug,
      author: input.author,
      publishedDate: input.publishedDate,
      cover: input.coverId as never,
      title: input.nl.title,
      excerpt: input.nl.excerpt,
      body: input.nl.body,
      _status: input.status,
    },
  });
  if (input.en.title || input.en.excerpt || input.en.body) {
    await payload.update({
      collection: "blog-posts",
      id: doc.id,
      locale: "en",
      data: {
        title: input.en.title,
        excerpt: input.en.excerpt,
        body: input.en.body,
      },
    });
  }
  revalidateSite();
  redirect("/dashboard/blog");
}

export async function updateBlogPost(id: string | number, input: BlogInput) {
  const payload = await requireUser();
  await payload.update({
    collection: "blog-posts",
    id,
    locale: "nl",
    data: {
      slug: input.slug,
      author: input.author,
      publishedDate: input.publishedDate,
      cover: input.coverId as never,
      title: input.nl.title,
      excerpt: input.nl.excerpt,
      body: input.nl.body,
      _status: input.status,
    },
  });
  await payload.update({
    collection: "blog-posts",
    id,
    locale: "en",
    data: {
      title: input.en.title,
      excerpt: input.en.excerpt,
      body: input.en.body,
    },
  });
  revalidateSite();
  redirect("/dashboard/blog");
}

export async function deleteBlogPost(id: string | number) {
  const payload = await requireUser();
  await payload.delete({ collection: "blog-posts", id });
  revalidateSite();
  revalidatePath("/dashboard/blog");
}
