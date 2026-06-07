import Link from "next/link";
import Image from "next/image";

const menuLinks = [
  { label: "Over ons", href: "/over-ons" },
  { label: "Expertise", href: "/expertise" },
  { label: "Cases", href: "/cases" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
  { label: "Klachtenregeling", href: "/klachtenregeling" },
  { label: "Rechtsgebiedenregister", href: "/rechtsgebiedenregister" },
  { label: "Derdengelden", href: "/derdengelden" },
];

function ContactIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="shrink-0 w-9 h-9 rounded-full border border-white/40 flex items-center justify-center text-white">
      {children}
    </span>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-white text-brand-blue flex items-center justify-center hover:bg-brand-blue-light transition-colors"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white px-4 sm:px-6 lg:px-12 pb-10 pt-4">
      <div className="max-w-container mx-auto">
        <div className="relative overflow-hidden rounded-[32px] bg-brand-blue text-white px-8 md:px-14 py-12 md:py-14">
          {/* Wave texture (extracted from the Figma footer export), faded like the design */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0 opacity-[0.55]"
              style={{
                backgroundImage: "url('/images/shared/footer-waves.png')",
                backgroundSize: "auto 100%",
                backgroundRepeat: "repeat",
                backgroundPosition: "right top",
              }}
            />
            {/* Fade: transparent at top-right, solid blue toward bottom-left */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom left, rgba(8,122,236,0) 0%, rgba(8,122,236,0.1) 30%, #087AEC 80%)",
              }}
            />
          </div>

          <div className="relative z-10">
            {/* Logo (white version via filter) */}
            <Link href="/" className="inline-block">
              <Image
                src="/images/shared/logo.svg"
                alt="LOGOS LEGAL"
                width={148}
                height={45}
                className="h-12 w-auto md:h-14 [filter:brightness(0)_invert(1)]"
                unoptimized
              />
            </Link>

            <div className="mt-8 border-t border-white/25" />

            {/* Columns */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Menu */}
              <div>
                <h3 className="font-raleway font-bold text-[24px] md:text-[32px] mb-5">Menu</h3>
                <ul className="flex flex-col gap-4">
                  {menuLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-poppins text-[20px] text-white/85 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Juridisch */}
              <div>
                <h3 className="font-raleway font-bold text-[24px] md:text-[32px] mb-5">Juridisch</h3>
                <ul className="flex flex-col gap-4">
                  {legalLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-poppins text-[20px] text-white/85 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-raleway font-bold text-[24px] md:text-[32px] mb-5">Contact</h3>
                <ul className="flex flex-col gap-4 font-poppins text-[20px] text-white/85">
                  <li className="flex items-start gap-3">
                    <ContactIcon>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" stroke="currentColor" strokeWidth="1.6" />
                        <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </ContactIcon>
                    <span>
                      Emmy Andriessestraat 278
                      <br />
                      1087 ML, Amsterdam
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ContactIcon>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" stroke="currentColor" strokeWidth="1.6" />
                        <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </ContactIcon>
                    <span>
                      Oslo 3, 2993 LD
                      <br />
                      Barendrecht
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ContactIcon>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </ContactIcon>
                    <a href="tel:+31852030155" className="hover:text-white transition-colors">
                      +31 85 20 30 155
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <ContactIcon>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M4 7l8 5 8-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </ContactIcon>
                    <span className="flex flex-col">
                      <a href="mailto:contact@logoslegal.nl" className="hover:text-white transition-colors">
                        contact@logoslegal.nl
                      </a>
                      <a href="mailto:toeslagen@logoslegal.nl" className="hover:text-white transition-colors">
                        toeslagen@logoslegal.nl
                      </a>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Location */}
              <div>
                <h3 className="font-raleway font-bold text-[24px] md:text-[32px] mb-5">Location</h3>
                <div className="relative w-[234px] max-w-full aspect-[234/275]">
                  <Image
                    src="/images/shared/nl-map.svg"
                    alt="Kaart van Nederland met Amsterdam en Barendrecht"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-white/25" />

            {/* Bottom bar */}
            <div className="mt-6 flex flex-col lg:flex-row items-center justify-between gap-6">
              <p className="font-poppins font-bold text-xs text-white/90 order-1">
                Developed by Achieve.nl © 2026
              </p>

              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 order-3 lg:order-2">
                <Link href="/disclaimer" className="font-poppins text-[20px] text-white/85 hover:text-white transition-colors">
                  Disclamer
                </Link>
                <Link href="/privacy" className="font-poppins text-[20px] text-white/85 hover:text-white transition-colors">
                  Privacy Statement
                </Link>
                <span className="font-poppins text-[20px] text-white/85">2026 © Logos Legal</span>
              </div>

              <div className="flex items-center gap-3 order-2 lg:order-3">
                <SocialIcon href="https://linkedin.com" label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95s-2.08 1.4-2.08 2.85V21H9z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://linkedin.com" label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95s-2.08 1.4-2.08 2.85V21H9z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://instagram.com" label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                  </svg>
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
