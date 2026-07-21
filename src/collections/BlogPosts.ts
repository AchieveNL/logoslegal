import type { CollectionConfig } from "payload";

export const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "publishedDate", "_status", "updatedAt"],
    description: "Artikelen voor de blog.",
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      localized: true,
    },
    {
      // Rich text stored as sanitized HTML, produced by the dashboard's TipTap editor.
      name: "body",
      type: "textarea",
      required: true,
      localized: true,
    },
    {
      // Optional so posts can be managed while image storage is not yet set up.
      name: "cover",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "author",
      type: "text",
      required: true,
    },
    {
      name: "publishedDate",
      type: "date",
      required: true,
      admin: {
        date: { pickerAppearance: "dayOnly" },
      },
    },
  ],
};
