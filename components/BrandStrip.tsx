"use client";

import React from "react";
import { siteConfig } from "@/lib/siteConfig";
import { ShieldCheck, Award, CheckCircle2, MessageSquare } from "lucide-react";

export function BrandStrip() {
  const brands = siteConfig.stockistBrands;

  return (
    <section id="brands" className="py-16 bg-[#0B1B3D] text-white watermark-pattern border-y border-[#C9962B]/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Diamond Motif */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#132752] border border-[#C9962B]/40 text-[#E4B94F] font-mono text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>OFFICIAL STOCKIST BRANDS • 100% GENUINE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight">
            Authorised Distribution &amp; Stockist Portfolio
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <span className="h-px w-12 bg-[#C9962B]/60"></span>
            <span className="text-[#E4B94F] text-xs">◆</span>
            <span className="h-px w-12 bg-[#C9962B]/60"></span>
          </div>

          <p className="text-slate-300 text-sm sm:text-base font-sans">
            As stated on our official visiting card credential, we maintain ready stock of <strong className="text-white">XNO, DSF, SKF, and TATA</strong> for heavy mills, automotive fleets, and farm machinery.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {brands.map((b) => {
            const waBrandUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              `Hello Ammar bhai, I want to inquire about genuine ${b.name} bearings in stock at your Manmad depot. Please share details.`
            )}`;

            return (
              <div
                key={b.name}
                className="group p-5 rounded-xl bg-[#132752] border border-[#C9962B]/30 hover:border-[#E4B94F] transition-all hover-lift flex flex-col justify-between shadow-soft"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-[#0B1B3D] text-slate-300 border border-white/5">
                      {b.origin}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#E4B94F]" title="Ready Stock" />
                  </div>

                  <h3 className="text-2xl font-heading font-extrabold text-white group-hover:text-[#E4B94F] transition-colors tracking-wide uppercase">
                    {b.name}
                  </h3>

                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {b.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#E4B94F] font-bold">
                    {b.tier.split(" ")[0]} OEM
                  </span>
                  <a
                    href={waBrandUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-slate-950 transition-colors"
                    title={`Inquire about ${b.name}`}
                    aria-label={`Inquire about ${b.name}`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Assurance Strip */}
        <div className="mt-10 p-5 rounded-xl bg-[#132752] border border-[#C9962B]/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C9962B]/20 border border-[#C9962B]/50 flex items-center justify-center text-[#E4B94F] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-heading font-extrabold text-white uppercase tracking-wider">
                100% Guaranteed Factory Sealed &amp; Authentic Stock
              </h4>
              <p className="text-xs text-slate-300">
                All bearings supplied with OEM packaging, laser-etched serials, and test certificates.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#E4B94F]" />
              <span>Inspection Reports</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#E4B94F]" />
              <span>GST Tax Invoices</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#E4B94F]" />
              <span>Bulk Freight Packaging</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandStrip;
