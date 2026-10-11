import React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What bearing brands do you stock?",
    answer: "We are stockists of SKF, TATA, XNO, and DSF. Our inventory covers deep groove ball bearings, tapered roller bearings, cylindrical rollers, clutch release bearings, and specialized industrial units."
  },
  {
    question: "How can I get a price quotation?",
    answer: "You can search your bearing article number on our website and click 'Request Quote' to send an enquiry directly via WhatsApp, or call our trade desk. Please mention your required quantity and delivery city."
  },
  {
    question: "Where are you located and how do you ship orders?",
    answer: "Our depot is located at Burhani Complex, Opp. Post Office, Bohri Compound, Manmad - 423104 (Dist. Nashik, Maharashtra). We dispatch orders across Maharashtra and pan-India via express transport and parcel services."
  },
  {
    question: "Do you handle bulk and wholesale orders?",
    answer: "Yes. We supply wholesale quantities for industrial plants, sugar factories, automotive workshops, and fleet operators with standard GST invoices and secure industrial packaging."
  },
  {
    question: "Are the bearings genuine?",
    answer: "Yes. All bearings are sourced through authorized manufacturer pipelines and supplied in original manufacturer packaging."
  },
  {
    question: "Can I enquire for bearing sizes not shown on the website?",
    answer: "Yes. If you need a size or series not listed in our online catalogue, send us the part number or sample dimensions (bore x outer diameter x width) on WhatsApp, and we will check availability."
  }
];

export function FaqSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-14 lg:py-20 bg-white border-t border-slate-200 scroll-mt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9962B]/10 border border-[#C9962B]/30 text-[#C9962B] font-mono text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1B3D] uppercase tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
            <span className="text-[#C9962B] text-xs">◆</span>
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
          </div>

          <p className="text-sm text-slate-600 font-sans">
            Clear information about stock availability, logistics, brand authenticity, and ordering.
          </p>
        </div>

        {/* Accordion Items - Native semantic details so all 6 answers exist in initial HTML */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <details
              key={idx}
              open={idx === 0}
              className="group border border-slate-200 rounded-xl overflow-hidden bg-[#F4F6FA] transition-all shadow-soft"
            >
              <summary className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-heading font-extrabold text-base sm:text-lg uppercase text-[#0B1B3D] hover:text-[#C9962B] cursor-pointer list-none select-none transition-colors">
                <span>{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-[#C9962B] shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-200/80 bg-white">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
