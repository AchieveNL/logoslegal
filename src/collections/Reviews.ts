import type { CollectionConfig } from "payload";

export const Reviews: CollectionConfig = {
  slug: "reviews",
  admin: {
    useAsTitle: "author",
    defaultColumns: ["author", "role", "visible", "updatedAt"],
    description: "Klantbeoordelingen in de testimonial-secties.",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "quote",
      type: "textarea",
      required: true,
      localized: true,
    },
    {
      name: "author",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
      localized: true,
    },
    {
      name: "visible",
      type: "checkbox",
      defaultValue: true,
    },
  ],
};
