interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  variant?: "light" | "dark" | "plain";
}

export default function TestimonialCard({
  quote,
  author,
  role,
  variant = "light",
}: TestimonialCardProps) {
  const bgClass =
    variant === "dark"
      ? "bg-brand-dark"
      : variant === "plain"
        ? "bg-white shadow-[0_10px_40px_-12px_rgba(2,18,43,0.12)] ring-1 ring-brand-dark/5"
        : "bg-brand-blue-light";
  const markColor = variant === "dark" ? "text-brand-blue" : "text-brand-blue-dark";
  const textColor = variant === "dark" ? "text-white/85" : "text-brand-dark/70";
  const authorColor = variant === "dark" ? "text-white" : "text-brand-blue";
  const roleColor = variant === "dark" ? "text-white/60" : "text-brand-dark/60";

  return (
    <div className={`${bgClass} rounded-2xl p-8 md:p-12 flex flex-col items-center text-center`}>
      {/* Quote Icon */}
      <svg
        width="58"
        height="53"
        viewBox="0 0 75 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`mb-8 ${markColor}`}
      >
        <path
          d="M0 68.832V41.832C0 35.4987 1.11111 29.332 3.33333 23.332C5.72222 17.1654 9.16667 11.4987 13.6667 6.33203L27.6667 15.332C23.8333 19.832 21 24.4987 19.1667 29.332C17.5 34.1654 16.6667 39.1654 16.6667 44.332H31.6667V68.832H0ZM43.3333 68.832V41.832C43.3333 35.4987 44.4444 29.332 46.6667 23.332C49.0556 17.1654 52.5 11.4987 57 6.33203L71 15.332C67.1667 19.832 64.3333 24.4987 62.5 29.332C60.8333 34.1654 60 39.1654 60 44.332H75V68.832H43.3333Z"
          fill="currentColor"
        />
      </svg>

      <blockquote
        className={`font-poppins font-medium text-[16px] md:text-[19px] leading-[1.5] mb-8 ${textColor}`}
      >
        {quote}
      </blockquote>

      <div>
        <p className={`font-poppins font-bold text-lg ${authorColor}`}>{author}</p>
        <p className={`font-poppins text-sm mt-1 ${roleColor}`}>{role}</p>
      </div>
    </div>
  );
}
