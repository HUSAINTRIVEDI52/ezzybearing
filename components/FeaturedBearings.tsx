"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product, getFeaturedBearings } from "@/lib/products";
import { siteConfig, getProductWhatsAppUrl } from "@/lib/siteConfig";
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
    <section className="py-16 bg-white border-t border-slate-200">
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
              Fastest-moving series in ready stock at our Manmad depot with same-day packing.
            </p>
          </div>

          {/* Scroll Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-xl border border-slate-300 hover:border-[#0B1B3D] text-[#0B1B3D] hover:bg-[#F4F6FA] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-xl border border-slate-300 hover:border-[#0B1B3D] text-[#0B1B3D] hover:bg-[#F4F6FA] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <Link
              href="/products"
              className="ml-2 px-4 py-2.5 rounded-xl bg-[#0B1B3D] text-[#E4B94F] font-heading font-extrabold text-xs uppercase tracking-wider hover:bg-[#132752] transition-colors"
            >
              View All 198+
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
            const waUrl = getProductWhatsAppUrl(p);

            return (
              <div
                key={p.id}
                style={{ scrollSnapAlign: "start" }}
                className="w-72 shrink-0 bg-[#F4F6FA] border border-slate-200/90 hover:border-[#C9962B] rounded-xl p-5 shadow-soft hover-lift transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-white text-[#C9962B] border border-slate-200 px-2 py-0.5 rounded">
                      {p.badge || "FAST MOVER"}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-600 font-bold">
                      Depot Ready
                    </span>
                  </div>

                  {/* Product Category Image Thumbnail */}
                  <Link href={`/products/${p.category}/${p.slug}`} className="block relative w-full aspect-[16/10] rounded-lg overflow-hidden my-2 bg-white border border-slate-200 group-hover:border-[#C9962B]/50 transition-colors">
                    <Image
                      src={getImagePath(p.category)}
                      alt={getBearingAltText({ partNumber: p.partNumber, name: p.name, categoryName: p.categoryName })}
                      fill
                      sizes="280px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  {/* Part Number & Category */}
                  <Link href={`/products/${p.category}/${p.slug}`} className="hover:text-[#C9962B] transition-colors">
                    <h3 className="font-heading font-extrabold text-2xl text-[#0B1B3D] uppercase tracking-tight mt-1">
                      {p.partNumber}
                    </h3>
                  </Link>
                  <span className="text-xs text-slate-500 font-semibold block mb-3 line-clamp-1">
                    {p.categoryName}
                  </span>

                  {/* Dimensions Box */}
                  <div className="bg-white border border-slate-200 rounded-lg p-2.5 text-center font-mono text-xs mb-3">
                    <span className="text-slate-400 block text-[10px]">d x D x B</span>
                    <span className="font-bold text-[#0B1B3D]">
                      {p.d} x {p.D} x {p.B} mm
                    </span>
                  </div>

                  {/* Brands */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {p.brands.map((b) => (
                      <span key={b} className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-white text-[#0B1B3D] border border-slate-200">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-heading font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-slate-950 stroke-none" />
                    <span>WhatsApp Quote</span>
                  </a>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => addItem(p)}
                      className={`flex-1 py-2 px-2.5 rounded-lg font-mono text-xs font-bold border transition-all flex items-center justify-center gap-1 ${
                        inRfq
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-white border-slate-300 text-[#0B1B3D] hover:border-[#C9962B]"
                      }`}
                    >
                      {inRfq ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>In RFQ</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>+ Quote Sheet</span>
                        </>
                      )}
                    </button>

                    <Link
                      href={`/products/${p.category}/${p.slug}`}
                      className="py-2 px-3 rounded-lg bg-white border border-slate-300 text-xs font-mono font-semibold text-[#0B1B3D] hover:border-[#0B1B3D] hover:text-[#C9962B] transition-colors"
                    >
                      Specs
                    </Link>
                  </div>
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
