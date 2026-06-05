interface CheckItemProps {
  text: string;
}

export default function CheckItem({ text }: CheckItemProps) {
  return (
    <div className="flex items-start gap-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 mt-0.5"
      >
        <circle cx="12" cy="12" r="11" stroke="#087AEC" strokeWidth="2" />
        <path
          d="M7 12.5L10.5 16L17 9"
          stroke="#087AEC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="font-poppins text-lg leading-relaxed text-brand-dark">
        {text}
      </p>
    </div>
  );
}
