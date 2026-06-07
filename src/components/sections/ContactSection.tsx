import type { ReactNode } from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import TestimonialCard from "./TestimonialCard";

interface ContactSectionProps {
  heading: ReactNode;
  subheading: string;
  contactName: string;
  contactGreeting: string;
  contactPhone: string;
  contactWhatsapp?: string;
  contactImageSrc: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export default function ContactSection({
  heading,
  subheading,
  contactName,
  contactGreeting,
  contactPhone,
  contactImageSrc,
  testimonial,
}: ContactSectionProps) {
  return (
    <section className="w-full bg-brand-blue-light py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-24">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="font-raleway font-bold text-[32px] md:text-[56px] leading-none text-[#002B58]">
            {heading}
          </h2>
          <p className="mt-3 font-poppins font-medium text-lg md:text-[24px] text-black">
            {subheading}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_10px_40px_-12px_rgba(2,18,43,0.12)] ring-1 ring-brand-dark/5">
            <ContactForm />
          </div>

          {/* Right: Contact Info + Testimonial */}
          <div className="flex flex-col gap-8">
            <ContactInfo
              name={contactName}
              greeting={contactGreeting}
              phone={contactPhone}
              imageSrc={contactImageSrc}
            />

            {testimonial && (
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                variant="plain"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
