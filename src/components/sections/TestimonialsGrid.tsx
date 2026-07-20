import Image from "next/image";
import { getTranslations } from "next-intl/server";

interface Review {
  quote: string;
  author: string;
}

function QuoteMark() {
  return (
    <Image
      src="/images/shared/quote-mark.svg"
      alt=""
      width={56}
      height={57}
      unoptimized
    />
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="shrink-0 w-[320px] md:w-[500px] h-[420px] md:h-[480px] bg-brand-blue-light rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center">
      <QuoteMark />
      <blockquote className="mt-6 font-poppins text-base md:text-lg text-[#514D4D] leading-relaxed">
        {review.quote}
      </blockquote>
      <p className="mt-6 font-poppins font-bold text-base md:text-lg text-brand-blue">
        {review.author}
      </p>
    </div>
  );
}

function MarqueeRow({
  reviews,
  direction,
}: {
  reviews: Review[];
  direction: "left" | "right";
}) {
  // Duplicate the list so the translate animation loops seamlessly.
  const items = [...reviews, ...reviews];
  return (
    <div className="group relative overflow-hidden">
      <div
        className={`flex w-max gap-6 ${
          direction === "right"
            ? "animate-marquee-right"
            : "animate-marquee-left"
        } group-hover:[animation-play-state:paused]`}
      >
        {items.map((review, i) => (
          <ReviewCard key={`${review.author}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export default async function TestimonialsGrid() {
  const t = await getTranslations("testimonials");
  // Top row — scrolls to the right; bottom row — scrolls to the left
  const reviewsTop = t.raw("reviewsTop") as Review[];
  const reviewsBottom = t.raw("reviewsBottom") as Review[];

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-container mx-auto px-6 md:px-24">
        <div className="text-center mb-12">
          <h2 className="font-raleway font-bold text-[32px] md:text-[56px] leading-none text-[#002B58] max-w-[1020px] mx-auto">
            {t("headingPre")} <span className="text-brand-blue">{t("headingHighlight")}</span> {t("headingPost")}
          </h2>
          <p className="mt-4 font-poppins font-medium text-lg md:text-[24px] text-[#292D32]">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Two infinite marquee rows — top scrolls right, bottom scrolls left */}
      <div className="flex flex-col gap-6">
        <MarqueeRow reviews={reviewsTop} direction="right" />
        <MarqueeRow reviews={reviewsBottom} direction="left" />
      </div>
    </section>
  );
}
