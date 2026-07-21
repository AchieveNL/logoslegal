/* Migrates the hardcoded FAQ items (6 categories × 5 Q&A) into the CMS.
   Skips when faqs already exist.
   Run: npx tsx --env-file=.env.local scripts/seed-faqs.ts */
import { getPayload } from "payload";
import config from "../src/payload.config";
import nlFaq from "../messages/nl/faq.json";
import enFaq from "../messages/en/faq.json";

interface Cat {
  id: string;
  label: string;
  items: { question: string; answer: string }[];
}

const run = async () => {
  const payload = await getPayload({ config });

  const existing = await payload.count({ collection: "faqs" });
  if (existing.totalDocs > 0) {
    console.log(`skip: ${existing.totalDocs} faqs already exist`);
    process.exit(0);
  }

  const nlCats = nlFaq.faq.categories as Cat[];
  const enCats = enFaq.faq.categories as Cat[];

  for (const nlCat of nlCats) {
    const enCat = enCats.find((c) => c.id === nlCat.id);
    for (let i = 0; i < nlCat.items.length; i++) {
      const nl = nlCat.items[i];
      const en = enCat?.items[i] || nl;

      const doc = await payload.create({
        collection: "faqs",
        locale: "nl",
        data: {
          category: nlCat.id as never,
          question: nl.question,
          answer: nl.answer,
          order: i,
        },
      });
      await payload.update({
        collection: "faqs",
        id: doc.id,
        locale: "en",
        data: { question: en.question, answer: en.answer },
      });
    }
    console.log(`seeded category: ${nlCat.id} (${nlCat.items.length})`);
  }

  console.log("done");
  process.exit(0);
};

run();
