"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedBearings } from "@/lib/products";
import { siteConfig } from "@/lib/siteConfig";
import { buildWhatsAppLink, buildProductQuoteMessage } from "@/lib/whatsapp";
import { getImagePath, getBearingAltText } from "@/lib/images";
import { useRfq } from "@/lib/rfqContext";
import { MessageSquare, Plus, Check, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export function FeaturedBearings() {
  const featured = getFeaturedBearings();
  const { addItem, isInRfq } = useRfq();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-14 lg:py-20 bg-[#F4F6FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#C9962B] bg-[#C9962B]/10 border border-[#C9962B]/30 px-3.5 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HIGH DEMAND INDUSTRIAL SIZES</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B1B3D] uppercase tracking-tight">
              Featured &amp; Popular Bearings
            </h2>
            <p className="text-slate-600 text-sm mt-1 font-sans">
              Frequently requested bearing series ready for dispatch across India.
            </p>
          </div>

          {/* Scroll Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-xl border border-slate-300 hover:border-[#0B1B3D] text-[#0B1B3D] bg-white hover:bg-slate-50 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-xl border border-slate-300 hover:border-[#0B1B3D] text-[#0B1B3D] bg-white hover:bg-slate-50 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <Link
              href="/products"
              className="ml-2 px-4 py-2.5 rounded-xl bg-[#0B1B3D] text-[#E4B94F] font-heading font-extrabold text-xs uppercase tracking-wider hover:bg-[#132752] transition-colors"
            >
              Browse Full Range
            </Link>
          </div>
        </div>

        {/* Horizontally Scrollable Row */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 pt-1 scroll-smooth no-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {featured.map((p) => {
            const inRfq = isInRfq(p.id);
            const waUrl = buildWhatsAppLink(buildProductQuoteMessage(p, "Featured Bearings"), "ammar");
            const productHref = `/products/${p.category}/${p.slug || p.id}`;

            return (
              <div
                key={p.id}
                style={{ scrollSnapAlign: "start" }}
                className="w-72 shrink-0 bg-white border border-slate-200/90 hover:border-[#C9962B] rounded-xl p-4 sm:p-5 shadow-soft hover-lift transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Product Category Image Thumbnail */}
                  <Link
                    href={productHref}
                    className="block relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-3 bg-[#F4F6FA] border border-slate-200 group-hover:border-[#C9962B]/50 transition-colors"
                  >
                    <Image
                      src={p.image || getImagePath(p.category)}
                      alt={getBearingAltText({ partNumber: p.partNumber, name: p.name, categoryName: p.categoryName })}
                      fill
                      sizes="280px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  {/* Part Number (Specs Link) & Category */}
                  <div className="mb-4">
                    <Link
                      href={productHref}
                      className="hover:text-[#C9962B] transition-colors"
                      title={`View specs for ${p.partNumber}`}
                    >
                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0B1B3D] uppercase tracking-tight break-words line-clamp-2">
                        {p.partNumber}
                      </h3>
                    </Link>
                    <span className="text-xs font-semibold text-slate-500 block mt-0.5">
                      {p.categoryName}
                    </span>
                  </div>
                </div>

                {/* Simplified Card Actions: ONE gold Request Quote button + small Add to enquiry button */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-h-[42px] px-3 rounded-lg bg-[#C9962B] hover:bg-[#b38320] text-[#0B1B3D] font-heading font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95"
                    title={`Request Quote for ${p.partNumber}`}
                    aria-label={`Request Quote for ${p.partNumber}`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-[#0B1B3D] stroke-none" />
                    <span>Request Quote</span>
                  </a>

                  <button
                    onClick={() => addItem(p)}
                    className={`min-h-[42px] px-2.5 rounded-lg border text-xs font-mono font-bold flex items-center justify-center gap-1 transition-all ${
                      inRfq
                        ? "bg-[#0B1B3D] text-[#E4B94F] border-[#0B1B3D]"
                        : "bg-white border-slate-300 text-slate-700 hover:border-[#0B1B3D] hover:text-[#0B1B3D]"
                    }`}
                    title={inRfq ? "In enquiry" : "Add to enquiry"}
                    aria-label={inRfq ? `${p.partNumber} added to enquiry` : `Add ${p.partNumber} to enquiry`}
                  >
                    {inRfq ? <Check className="w-3.5 h-3.5 text-[#E4B94F]" /> : <Plus className="w-3.5 h-3.5" />}
                    <span className="text-[11px] font-sans">{inRfq ? "Added" : "Enquiry"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedBearings;
