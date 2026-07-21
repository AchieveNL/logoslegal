import type { CollectionConfig } from "payload";

export const Faqs: CollectionConfig = {
  slug: "faqs",
  admin: {
    useAsTitle: "question",
    defaultColumns: ["question", "category", "updatedAt"],
    description: "Veelgestelde vragen, per categorie.",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Algemeen", value: "algemeen" },
        { label: "Contracten en aansprakelijkheid", value: "contracten" },
        { label: "Arbeidsrecht", value: "arbeidsrecht" },
        { label: "Onderwijsrecht", value: "onderwijsrecht" },
        { label: "(Financieel) strafrecht", value: "criminal" },
        { label: "Mensenrechten", value: "human-rights" },
      ],
    },
    {
      name: "question",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "answer",
      type: "textarea",
      required: true,
      localized: true,
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: {
        description: "Lagere nummers komen eerst binnen de categorie.",
      },
    },
  ],
};
