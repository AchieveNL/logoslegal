import { getDashMessages } from "@/lib/dashboard-i18n";
import { PageHeading } from "@/components/dashboard/ui";
import BlogForm from "@/components/dashboard/BlogForm";
import { createBlogPost } from "../actions";

export default async function NewBlogPostPage() {
  const { messages: t } = await getDashMessages();
  return (
    <>
      <PageHeading title={t.blog.newTitle} highlight={t.blog.newHighlight} />
      <BlogForm onSubmit={createBlogPost} submitLabel={t.form.publish} />
    </>
  );
}
