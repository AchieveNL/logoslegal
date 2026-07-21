import { notFound } from "next/navigation";
import { getPayload, isMediaConfigured } from "@/lib/payload";
import { getDashMessages } from "@/lib/dashboard-i18n";
import { PageHeading } from "@/components/dashboard/ui";
import BlogForm from "@/components/dashboard/BlogForm";
import { updateBlogPost, type BlogInput } from "../actions";

export default async function EditBlogPostPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const payload = await getPayload();
  const { messages: t } = await getDashMessages();

  const [nlDoc, enDoc] = await Promise.all([
    payload
      .findByID({ collection: "blog-posts", id, locale: "nl", draft: true, depth: 1 })
      .catch(() => null),
    payload
      .findByID({ collection: "blog-posts", id, locale: "en", draft: true, depth: 0, fallbackLocale: "none" as never })
      .catch(() => null),
  ]);

  if (!nlDoc) notFound();

  const cover = typeof nlDoc.cover === "object" && nlDoc.cover !== null ? nlDoc.cover : null;

  const boundUpdate = async (input: BlogInput) => {
    "use server";
    await updateBlogPost(id, input);
  };

  return (
    <>
      <PageHeading title={t.blog.editTitle} highlight={t.blog.editHighlight} />
      <BlogForm
        submitLabel={t.form.publishChanges}
        onSubmit={boundUpdate}
        mediaReady={isMediaConfigured()}
        initial={{
          slug: nlDoc.slug,
          author: nlDoc.author,
          publishedDate: nlDoc.publishedDate,
          coverId: cover?.id ?? null,
          coverUrl: cover?.url ?? null,
          nl: {
            title: nlDoc.title || "",
            excerpt: nlDoc.excerpt || "",
            body: nlDoc.body || "",
          },
          en: {
            title: enDoc?.title || "",
            excerpt: enDoc?.excerpt || "",
            body: enDoc?.body || "",
          },
        }}
      />
    </>
  );
}
