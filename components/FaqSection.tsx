"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What bearing brands do you stock at your Manmad depot?",
    answer: "We are stockists of SKF, TATA, XNO, and DSF. We provide deep groove ball bearings, metric tapered rollers, clutch release bearings, snap ring units, spherical rollers, and industrial hand tools."
  },
  {
    question: "How do I get an instant price quotation for a bearing part number?",
    answer: "Simply search your bearing article number in our live catalogue, click 'WhatsApp Quote', and send the prefilled message directly to our trade desk (+91 92723 95247). You can also use our 'Quote Sheet (BOM)' feature to select multiple bearings and send a combined enquiry in one click."
  },
  {
    question: "Where is your depot located and how fast is delivery across India?",
    answer: "Our central depot is located at Burhani Complex, Opp. Post Office, Bohri Compound, Manmad - 423104 (Dist. Nashik, Maharashtra). Situated directly at Manmad Junction Central Railway Cargo Hub, orders are packed same-day and dispatched via Express Railway Parcel and road freight (V-Trans, TCI Freight, Safexpress, Delhivery) across Maharashtra, MP, Gujarat, and pan-India within 24 to 48 hours."
  },
  {
    question: "Do you supply bulk orders and emergency breakdown requirements for sugar mills?",
    answer: "Yes. We specialize in bulk seasonal orders and emergency breakdown deliveries for sugar factories, stone quarries, cement plants, and transport fleets across Western Maharashtra and central India. Contact Shabbir Sakriwala or Ammar Sakriwala directly for prioritized dispatch."
  },
  {
    question: "Are all products genuine and supplied with official GST invoices?",
    answer: "Yes, 100%. All bearings are sourced through verified manufacturer pipelines in factory-sealed OEM packaging with laser-etched serials, complete with tax-compliant GST invoices."
  },
  {
    question: "Can I request pricing for non-standard bearing sizes not listed on the website?",
    answer: "Yes. Our physical Manmad inventory includes hundreds of specialized sizes and heavy duty units. Contact our WhatsApp desk with your sample dimensions (bore x OD x width) or vehicle model, and we will cross-reference the exact replacement."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

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
    <section className="py-20 bg-white border-t border-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9962B]/10 border border-[#C9962B]/30 text-[#C9962B] font-mono text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#0B1B3D] uppercase tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
            <span className="text-[#C9962B] text-xs">◆</span>
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
          </div>

          <p className="text-sm text-slate-600 font-sans">
            Everything you need to know about stock availability, logistics, brand authenticity, and ordering.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all shadow-soft bg-[#F4F6FA]"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-heading font-extrabold text-lg sm:text-xl uppercase text-[#0B1B3D] hover:text-[#C9962B] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C9962B] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-200/80 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
