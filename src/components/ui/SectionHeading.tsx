interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2
        className={`font-raleway font-bold text-4xl md:text-[56px] leading-tight ${
          light ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 font-poppins text-lg md:text-2xl font-medium ${
            light ? "text-white/90" : "text-brand-dark/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
