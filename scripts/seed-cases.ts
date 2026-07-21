/* Migrates the 4 original hardcoded cases into the CMS (both locales),
   uploading their images to MinIO. Skips slugs that already exist.
   Run: npx payload run scripts/seed-cases.ts */
import path from "path";
import { fileURLToPath } from "url";
import { getPayload } from "payload";
import config from "../src/payload.config";
import nlCases from "../messages/nl/cases.json";
import enCases from "../messages/en/cases.json";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const img = (file: string) =>
  path.resolve(dirname, "../public/images/cases", file);

const SEED = [
  {
    slug: "onmiddellijke-vrijlating-meldplichtstatus",
    category: "mensenrechten",
    image: img("meldplichtstatus.png"),
    index: 0,
  },
  {
    slug: "boete-overtreding-rookverbod",
    category: "contracten",
    image: img("no-smoking.png"),
    index: 1,
  },
  {
    slug: "vordering-overdracht-aandelen",
    category: "contracten",
    image: img("aandelen.png"),
    index: 2,
  },
  {
    slug: "incidentele-vordering-tussenkomst",
    category: "mensenrechten",
    image: img("rechtbank.png"),
    index: 3,
  },
] as const;

const run = async () => {
  const payload = await getPayload({ config });
  const nlItems = nlCases.casesList.items;
  const enItems = enCases.casesList.items;

  for (const seed of SEED) {
    const existing = await payload.find({
      collection: "cases",
      where: { slug: { equals: seed.slug } },
      limit: 1,
    });
    if (existing.totalDocs > 0) {
      console.log(`skip (exists): ${seed.slug}`);
      continue;
    }

    const nl = nlItems[seed.index];
    const en = enItems[seed.index];

    // Upload the image only when object storage is configured; otherwise
    // seed the case without an image (the site renders a placeholder).
    let imageId: number | undefined;
    if (process.env.S3_ENDPOINT && process.env.S3_ACCESS_KEY) {
      const media = await payload.create({
        collection: "media",
        filePath: seed.image,
        data: { alt: nl.title },
      });
      imageId = media.id as number;
    }

    const doc = await payload.create({
      collection: "cases",
      locale: "nl",
      data: {
        slug: seed.slug,
        category: seed.category,
        image: imageId,
        title: nl.title,
        summary: nl.description,
        body: `<p>${nl.description}</p>`,
        _status: "published",
      },
    });

    await payload.update({
      collection: "cases",
      id: doc.id,
      locale: "en",
      data: {
        title: en.title,
        summary: en.description,
        body: `<p>${en.description}</p>`,
      },
    });

    console.log(`created: ${seed.slug}`);
  }

  console.log("done");
  process.exit(0);
};

run();
