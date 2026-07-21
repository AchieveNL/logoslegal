/* Migrates the hardcoded testimonial quotes into the Reviews collection
   (both locales). Skips when reviews already exist.
   Run: npx tsx --env-file=.env.local scripts/seed-reviews.ts */
import { getPayload } from "payload";
import config from "../src/payload.config";
import nlExpertise from "../messages/nl/expertise.json";
import enExpertise from "../messages/en/expertise.json";

interface Item {
  quote: string;
  author: string;
}

const run = async () => {
  const payload = await getPayload({ config });

  const existing = await payload.count({ collection: "reviews" });
  if (existing.totalDocs > 0) {
    console.log(`skip: ${existing.totalDocs} reviews already exist`);
    process.exit(0);
  }

  const nlItems: Item[] = [
    ...(nlExpertise.testimonials.reviewsTop as Item[]),
    ...(nlExpertise.testimonials.reviewsBottom as Item[]),
  ];
  const enItems: Item[] = [
    ...(enExpertise.testimonials.reviewsTop as Item[]),
    ...(enExpertise.testimonials.reviewsBottom as Item[]),
  ];

  for (let i = 0; i < nlItems.length; i++) {
    const nl = nlItems[i];
    const en = enItems[i] || nl;

    const doc = await payload.create({
      collection: "reviews",
      locale: "nl",
      data: {
        author: nl.author,
        quote: nl.quote,
        visible: true,
      },
    });
    await payload.update({
      collection: "reviews",
      id: doc.id,
      locale: "en",
      data: { quote: en.quote },
    });
    console.log(`created review: ${nl.author}`);
  }

  console.log("done");
  process.exit(0);
};

run();
