import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-white py-4 px-6 md:px-24"
    >
      <ol className="flex items-center gap-1 text-base font-poppins font-medium text-brand-dark">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1">
            {index > 0 && (
              <span className="text-brand-dark/50 mx-1">/</span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-brand-dark/70 hover:text-brand-blue transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-brand-blue">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
