import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    description: "Afbeeldingen voor cases, blog en reviews.",
  },
  access: {
    read: () => true,
  },
  upload: {
    mimeTypes: ["image/*"],
    imageSizes: [
      { name: "thumbnail", width: 480 },
      { name: "card", width: 1024 },
      { name: "hero", width: 1920 },
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      localized: true,
    },
  ],
};
