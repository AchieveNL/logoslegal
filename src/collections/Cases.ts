import type { CollectionConfig } from "payload";

export const Cases: CollectionConfig = {
  slug: "cases",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "_status", "updatedAt"],
    description: "Rechtszaken getoond op de cases-pagina en de homepage.",
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
      admin: {
        description: "URL-deel, bijv. 'boete-rookverbod' (zonder spaties).",
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Arbeidsrecht", value: "arbeidsrecht" },
        { label: "Contracten en aansprakelijkheid", value: "contracten" },
        { label: "Onderwijsrecht", value: "onderwijsrecht" },
        { label: "Financieel strafrecht", value: "financieelStrafrecht" },
        { label: "Mensenrechten", value: "mensenrechten" },
      ],
    },
    {
      name: "summary",
      type: "textarea",
      required: true,
      localized: true,
      admin: {
        description: "Korte samenvatting voor de kaart in het overzicht.",
      },
    },
    {
      // Rich text stored as sanitized HTML, produced by the dashboard's TipTap editor.
      name: "body",
      type: "textarea",
      localized: true,
      admin: {
        description: "Volledige tekst voor de detailpagina.",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
