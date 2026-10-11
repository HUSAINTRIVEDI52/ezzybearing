"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, ShieldCheck } from "lucide-react";
import { CATEGORIES, getAllProducts, Product } from "@/lib/products";
import { siteConfig } from "@/lib/siteConfig";

export function QuickPartFinder() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [brand, setBrand] = useState("all");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const allProducts = useMemo(() => getAllProducts(), []);

  // Compute live suggestions matching query
  const suggestions = useMemo(() => {
    if (!query.trim() || query.length < 2) return [];
    const q = query.toLowerCase().trim();
    return allProducts
      .filter((p) => {
        const matchesPart = p.partNumber.toLowerCase().includes(q);
        const matchesDimensions = `${p.d}x${p.D}x${p.B}`.includes(q) || `${p.d}` === q;
        const matchesName = p.name.toLowerCase().includes(q);
        return matchesPart || matchesDimensions || matchesName;
      })
      .slice(0, 6);
  }, [allProducts, query]);

  // Click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (category !== "all") params.set("category", category);
    if (brand !== "all") params.set("brand", brand);
    router.push(`/products?${params.toString()}`);
  };

  return (
    <section className="relative -mt-10 mb-14 z-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-[#C9962B]/30 rounded-2xl p-6 sm:p-8 shadow-lift">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <h2 className="font-heading font-extrabold text-2xl text-[#0B1B3D] uppercase tracking-wide flex items-center gap-2">
              <Search className="w-5 h-5 text-[#C9962B]" />
              <span>Quick Bearing Finder (198+ Ready Products)</span>
            </h2>

            <div className="text-xs text-slate-500 font-sans">
              Popular Searches:{" "}
              {["6205", "32208", "LM 44649/10", "T138(TR)", "NU 309"].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => {
                    setQuery(p);
                    router.push(`/products?q=${encodeURIComponent(p)}`);
                  }}
                  className="font-mono font-semibold text-[#0B1B3D] hover:text-[#C9962B] hover:underline mx-1 bg-[#F4F6FA] border border-slate-200 px-2 py-0.5 rounded-md transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSearchSubmit} className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5">
            {/* Search Input with Live Suggestions */}
            <div className="lg:col-span-6 relative">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder="Search by bearing number, e.g. 6205 or 32208..."
                  className="w-full h-12 bg-[#F4F6FA] border border-slate-300 rounded-xl pl-11 pr-4 text-sm text-[#0B1B3D] placeholder-slate-400 focus:outline-none focus:border-[#C9962B] focus:ring-1 focus:ring-[#C9962B] transition-colors font-mono"
                />
              </div>

              {/* Live Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-2xl z-50 overflow-hidden divide-y divide-slate-100">
                  <div className="px-3.5 py-1.5 bg-[#F4F6FA] text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                    <span>Live Suggestions ({suggestions.length})</span>
                    <span className="text-[#C9962B]">Press Enter to search all</span>
                  </div>

                  {suggestions.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.category}/${p.slug}`}
                      onClick={() => setShowSuggestions(false)}
                      className="px-4 py-3 flex items-center justify-between hover:bg-[#F4F6FA] transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-heading font-extrabold text-lg text-[#0B1B3D] group-hover:text-[#C9962B] uppercase">
                          {p.partNumber}
                        </span>
                        <span className="text-xs text-slate-500 font-sans line-clamp-1">
                          {p.categoryName} • {p.d}x{p.D}x{p.B} mm
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C9962B]/10 text-[#C9962B] font-bold">
                          {p.brands.join('/')}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#C9962B] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Category Select */}
            <div className="lg:col-span-3">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full h-12 bg-[#F4F6FA] border border-slate-300 rounded-xl px-4 text-sm text-[#0B1B3D] focus:outline-none focus:border-[#C9962B] transition-colors"
              >
                <option value="all">All Categories</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name} ({cat.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Brand Select */}
            <div className="lg:col-span-2">
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full h-12 bg-[#F4F6FA] border border-slate-300 rounded-xl px-4 text-sm text-[#0B1B3D] focus:outline-none focus:border-[#C9962B] transition-colors font-semibold"
              >
                <option value="all">All Brands</option>
                {siteConfig.brands.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="lg:col-span-1">
              <button
                type="submit"
                className="w-full h-12 min-h-[44px] bg-[#0B1B3D] hover:bg-[#132752] text-[#E4B94F] border border-[#C9962B]/50 font-heading font-extrabold text-base uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#C9962B]"
                title="Search Products"
                aria-label="Search bearings catalogue"
              >
                <Search className="w-5 h-5 text-[#E4B94F]" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default QuickPartFinder;
