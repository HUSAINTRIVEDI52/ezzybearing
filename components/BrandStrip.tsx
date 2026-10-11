"use client";

import React from "react";
import { siteConfig } from "@/lib/siteConfig";
import { MessageSquare, Award } from "lucide-react";

export function BrandStrip() {
  const brands = [
    {
      name: "SKF",
      tagline: "Global leader in precision ball and roller bearings.",
    },
    {
      name: "TATA",
      tagline: "Trusted Indian manufacturer for automotive and industrial bearings.",
    },
    {
      name: "XNO",
      tagline: "High-performance roller bearings for demanding machinery.",
    },
    {
      name: "DSF",
      tagline: "Reliable metric taper roller and industrial bearings.",
    },
  ];

  const waBrandUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello EZZI Bearing Suppliers, I would like to enquire about brand availability and quotes."
  )}`;

  return (
    <section id="brands" className="py-14 lg:py-20 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1B3D]/5 border border-slate-200 text-[#0B1B3D] font-mono text-xs font-bold mb-3">
            <Award className="w-3.5 h-3.5 text-[#C9962B]" />
            <span>STOCKIST OF SKF, TATA, XNO, DSF</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1B3D] uppercase tracking-tight">
            Brands We Stock
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
            <span className="text-[#C9962B] text-xs">◆</span>
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
          </div>

          <p className="text-slate-600 text-sm font-sans">
            Stockist of SKF, TATA, XNO, and DSF bearings for industrial and automotive applications.
          </p>
        </div>

        {/* Four Brand Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {brands.map((b) => (
            <div
              key={b.name}
              className="p-6 rounded-xl bg-[#F4F6FA] border border-slate-200 hover:border-[#C9962B] transition-all hover-lift flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-heading font-extrabold text-[#0B1B3D] tracking-wide uppercase mb-2">
                  {b.name}
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {b.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Single Enquire Button */}
        <div className="mt-8 text-center">
          <a
            href={waBrandUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0B1B3D] hover:bg-[#132752] text-[#E4B94F] font-heading font-extrabold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#E4B94F]" />
            <span>Enquire for Brands</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default BrandStrip;
