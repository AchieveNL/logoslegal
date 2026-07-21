import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Cases } from "./collections/Cases";
import { BlogPosts } from "./collections/BlogPosts";
import { Reviews } from "./collections/Reviews";
import { Faqs } from "./collections/Faqs";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: " — LOGOS LEGAL",
    },
    avatar: "default",
  },
  collections: [Cases, BlogPosts, Reviews, Faqs, Media, Users],
  editor: lexicalEditor(),
  localization: {
    locales: [
      { label: "Nederlands", code: "nl" },
      { label: "English", code: "en" },
    ],
    defaultLocale: "nl",
    fallback: true,
  },
  secret: process.env.PAYLOAD_SECRET || "logos-dev-secret-change-me",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString:
        process.env.DATABASE_URL ||
        "postgresql://logos:logos@localhost:5432/logoslegal",
    },
  }),
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET || "logoslegal",
      config: {
        endpoint: process.env.S3_ENDPOINT || "http://localhost:9000",
        region: process.env.S3_REGION || "us-east-1",
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY || "minioadmin",
          secretAccessKey: process.env.S3_SECRET_KEY || "minioadmin",
        },
        // MinIO requires path-style URLs (bucket in the path, not the domain)
        forcePathStyle: true,
      },
    }),
  ],
});
