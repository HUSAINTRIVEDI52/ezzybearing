"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Product, CategoryInfo } from "@/lib/products";
import { siteConfig, getProductWhatsAppUrl } from "@/lib/siteConfig";
import { useRfq } from "@/lib/rfqContext";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { 
  Search, 
  SlidersHorizontal, 
  LayoutGrid, 
  Table as TableIcon, 
  MessageSquare, 
  Plus, 
  Check, 
  RotateCcw,
  ChevronDown,
  Layers,
  Sparkles
} from "lucide-react";

interface ProductCatalogueProps {
  initialProducts: Product[];
  categories: CategoryInfo[];
}

const ITEMS_PER_PAGE = 24;

export function ProductCatalogue({ initialProducts, categories }: ProductCatalogueProps) {
  const { addItem, isInRfq } = useRfq();

  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedClearance, setSelectedClearance] = useState("all");
  const [minBore, setMinBore] = useState("");
  const [maxBore, setMaxBore] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Filtered products calculation
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((p) => {
      // Search term
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesPart = p.partNumber.toLowerCase().includes(q);
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesCategory = p.categoryName.toLowerCase().includes(q);
        const matchesBrands = p.brands.some(b => b.toLowerCase().includes(q));
        const matchesDimensions = `${p.d}x${p.D}x${p.B}`.includes(q) || `${p.d}` === q;
        const matchesApps = p.popularApplications.some(a => a.toLowerCase().includes(q));
        if (!matchesPart && !matchesName && !matchesCategory && !matchesBrands && !matchesDimensions && !matchesApps) {
          return false;
        }
      }

      // Category
      if (selectedCategory !== "all" && p.category !== selectedCategory) {
        return false;
      }

      // Clearance
      if (selectedClearance !== "all") {
        if (!p.clearance) return false;
        if (selectedClearance === "C3" && !p.clearance.includes("C3")) return false;
        if (selectedClearance === "CN" && !p.clearance.includes("CN") && !p.clearance.includes("Normal")) return false;
      }

      // Bore Min
      if (minBore && !isNaN(Number(minBore))) {
        if (p.d < Number(minBore)) return false;
      }

      // Bore Max
      if (maxBore && !isNaN(Number(maxBore))) {
        if (p.d > Number(maxBore)) return false;
      }

      return true;
    });
  }, [initialProducts, searchQuery, selectedCategory, selectedClearance, minBore, maxBore]);

  // Reset pagination when filter changes
  useEffect(() => {
    setDisplayCount(ITEMS_PER_PAGE);
  }, [searchQuery, selectedCategory, selectedClearance, minBore, maxBore]);

  const visibleProducts = useMemo(() => {
    return filteredProducts.slice(0, displayCount);
  }, [filteredProducts, displayCount]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedClearance("all");
    setMinBore("");
    setMaxBore("");
    setDisplayCount(ITEMS_PER_PAGE);
  };

  const hasActiveFilters = searchQuery !== "" || 
    selectedCategory !== "all" || 
    selectedClearance !== "all" || 
    minBore !== "" || 
    maxBore !== "";

  return (
    <section id="catalogue" className="py-16 bg-[#F4F6FA] border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9962B]/10 border border-[#C9962B]/30 text-[#C9962B] font-mono text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>LIVE READY STOCK INVENTORY • 193 PRODUCT SERIES</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#0B1B3D] uppercase tracking-tight">
              B2B Bearing Catalogue &amp; Technical Directory
            </h2>

            <div className="flex items-center gap-3 my-2">
              <span className="h-px w-10 bg-[#C9962B]/40"></span>
              <span className="text-[#C9962B] text-xs">◆</span>
              <span className="h-px w-10 bg-[#C9962B]/40"></span>
            </div>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-sans">
              Search by part number (e.g. <strong className="text-[#0B1B3D] font-mono">30208</strong>, <strong className="text-[#0B1B3D] font-mono">6205</strong>, <strong className="text-[#0B1B3D] font-mono">32220</strong>) or filter by category and brand for instant WhatsApp wholesale quotations.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-soft text-right">
              <span className="block text-[11px] font-mono text-slate-500">Inventory Status</span>
              <span className="font-heading font-bold text-emerald-600 text-sm flex items-center gap-1.5 justify-end uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Ready Depot Stock
              </span>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 mb-8 shadow-soft space-y-4">
          {/* Main Search Input & View Toggle */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search bearing part number, bore (mm), brand (SKF, TATA, XNO), or application..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F4F6FA] border border-slate-300 text-sm text-[#0B1B3D] placeholder-slate-400 focus:outline-none focus:border-[#C9962B] focus:ring-1 focus:ring-[#C9962B] transition-all font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 hover:text-[#0B1B3D]"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFiltersMobile(!showFiltersMobile)}
                className="sm:hidden flex-1 py-3 px-4 rounded-xl bg-[#F4F6FA] border border-slate-300 text-xs font-mono text-[#0B1B3D] flex items-center justify-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#C9962B]" />
                <span>Filters {hasActiveFilters && "(Active)"}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showFiltersMobile ? "rotate-180" : ""}`} />
              </button>

              {/* View Toggle (Grid / Table) */}
              <div className="flex items-center bg-[#F4F6FA] p-1 rounded-xl border border-slate-200">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid"
                      ? "bg-[#0B1B3D] text-[#E4B94F]"
                      : "text-slate-500 hover:text-[#0B1B3D]"
                  }`}
                  title="Grid View"
                  aria-label="Grid view"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "table"
                      ? "bg-[#0B1B3D] text-[#E4B94F]"
                      : "text-slate-500 hover:text-[#0B1B3D]"
                  }`}
                  title="Engineering Table View"
                  aria-label="Table view"
                >
                  <TableIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Expanded Filter Row */}
          <div className={`${showFiltersMobile ? "block" : "hidden sm:block"} pt-3 border-t border-slate-200 space-y-4`}>
            {/* Category Chips */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                  Bearing Type / Classification
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Showing {filteredProducts.length} matched series
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-1">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedCategory === "all"
                      ? "bg-[#0B1B3D] text-[#E4B94F] font-bold shadow-sm"
                      : "bg-[#F4F6FA] border border-slate-200 text-slate-700 hover:border-[#C9962B]"
                  }`}
                >
                  All Types ({initialProducts.length})
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                      selectedCategory === cat.id
                        ? "bg-[#C9962B] text-white font-bold shadow-sm"
                        : "bg-[#F4F6FA] border border-slate-200 text-slate-700 hover:border-[#C9962B]"
                    }`}
                  >
                    {cat.shortName} ({cat.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Clearance and Bore Dimension Range */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">

              <div>
                <label className="block text-xs font-mono text-slate-600 font-semibold mb-1">
                  Internal Clearance
                </label>
                <select
                  value={selectedClearance}
                  onChange={(e) => setSelectedClearance(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#F4F6FA] border border-slate-300 text-xs font-mono text-[#0B1B3D] focus:outline-none focus:border-[#C9962B]"
                >
                  <option value="all">All Clearances</option>
                  <option value="CN">CN (Normal Radial Clearance)</option>
                  <option value="C3">C3 (Elevated / High Heat)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 font-semibold mb-1">
                  Min Bore d (mm)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 20"
                  value={minBore}
                  onChange={(e) => setMinBore(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#F4F6FA] border border-slate-300 text-xs font-mono text-[#0B1B3D] focus:outline-none focus:border-[#C9962B]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 font-semibold mb-1">
                  Max Bore d (mm)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 100"
                  value={maxBore}
                  onChange={(e) => setMaxBore(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#F4F6FA] border border-slate-300 text-xs font-mono text-[#0B1B3D] focus:outline-none focus:border-[#C9962B]"
                />
              </div>
            </div>

            {/* Reset Filters Bar */}
            {hasActiveFilters && (
              <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                <span className="text-xs font-mono text-slate-500">
                  Showing {filteredProducts.length} of {initialProducts.length} bearings
                </span>
                <button
                  onClick={handleResetFilters}
                  className="text-xs font-mono text-[#C9962B] font-bold hover:underline flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset all filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content Listing (Grid or Table) */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white border-2 border-dashed border-[#C9962B]/40 rounded-2xl p-8 sm:p-12 text-center my-6 shadow-soft">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-[#C9962B]/30 flex items-center justify-center text-[#C9962B] mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1B3D] uppercase mb-2">
              No match? Send us the bearing number on WhatsApp
            </h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6 font-sans leading-relaxed">
              We stock hundreds of additional industrial bearings, heavy machine series, and non-standard sizes at our Manmad depot that may not be listed in this quick finder. Send your part number directly to our trade desk!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  `Hello Ammar bhai, I searched for "${searchQuery || "bearing"}" in your quick finder. Please check if you have this in stock at your Manmad depot.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl min-h-[44px] bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-heading font-extrabold text-sm uppercase tracking-wider shadow-md active:scale-95 w-full sm:w-auto"
                aria-label="Send part number on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none" />
                <span>Send Part Number on WhatsApp</span>
              </a>
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl min-h-[44px] bg-[#F4F6FA] border border-slate-300 text-xs font-mono font-bold text-slate-700 hover:text-black w-full sm:w-auto"
                aria-label="Reset search filters"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset Filters</span>
              </button>
            </div>
          </div>
        ) : viewMode === "grid" ? (
          /* GRID VIEW */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setSelectedProductForModal}
              />
            ))}
          </div>
        ) : (
          /* TABLE VIEW */
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="bg-[#0B1B3D] text-[#E4B94F] uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-bold">Part Number</th>
                    <th className="py-3.5 px-4 font-bold">Type</th>
                    <th className="py-3.5 px-4 font-bold">d (Bore)</th>
                    <th className="py-3.5 px-4 font-bold">D (OD)</th>
                    <th className="py-3.5 px-4 font-bold">B (Width)</th>
                    <th className="py-3.5 px-4 font-bold">Stockist Brands</th>
                    <th className="py-3.5 px-4 font-bold">Clearance</th>
                    <th className="py-3.5 px-4 font-bold text-right">Wholesale RFQ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {visibleProducts.map((p) => {
                    const inRfq = isInRfq(p.id);
                    const waUrl = getProductWhatsAppUrl(p);

                    return (
                      <tr 
                        key={p.id}
                        className="hover:bg-[#F4F6FA] transition-colors"
                      >
                        <td className="py-3.5 px-4 font-bold text-[#0B1B3D] whitespace-nowrap">
                          <button
                            onClick={() => setSelectedProductForModal(p)}
                            className="text-left hover:text-[#C9962B] transition-colors font-heading text-base font-extrabold"
                          >
                            {p.partNumber}
                          </button>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap">
                          {p.categoryName}
                        </td>
                        <td className="py-3.5 px-4 text-slate-800 font-semibold">{p.dimensionsVerified ? `${p.d} mm` : "—"}</td>
                        <td className="py-3.5 px-4 text-slate-800 font-semibold">{p.dimensionsVerified ? `${p.D} mm` : "—"}</td>
                        <td className="py-3.5 px-4 text-slate-800 font-semibold">{p.dimensionsVerified ? `${p.B} mm` : "—"}</td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span className="font-bold text-[#0B1B3D]">{p.brands.join(", ")}</span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap">
                          {p.clearance}
                        </td>
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => setSelectedProductForModal(p)}
                              className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px]"
                              title="Quick View Specs"
                            >
                              Specs
                            </button>
                            <button
                              onClick={() => addItem(p)}
                              className={`p-1.5 rounded transition-colors ${
                                inRfq 
                                  ? "bg-emerald-600 text-white"
                                  : "bg-[#0B1B3D] text-[#E4B94F] hover:bg-[#132752]"
                              }`}
                              title={inRfq ? "In Quote Sheet" : "Add to Quote Sheet"}
                              aria-label="Add to quote sheet"
                            >
                              {inRfq ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                            </button>
                            <a
                              href={waUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded bg-[#25D366] text-slate-950 hover:bg-[#1EBE5D] transition-colors"
                              title="Instant WhatsApp RFQ"
                              aria-label="Inquire on WhatsApp"
                            >
                              <MessageSquare className="w-3.5 h-3.5 fill-slate-950 stroke-none" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Load More & Pagination Controls */}
        {filteredProducts.length > displayCount && (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setDisplayCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filteredProducts.length))}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0B1B3D] hover:bg-[#132752] text-[#E4B94F] font-heading font-extrabold text-sm uppercase tracking-wider shadow-md hover-lift transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4 text-[#E4B94F]" />
              <span>Load More Bearings (+{Math.min(ITEMS_PER_PAGE, filteredProducts.length - displayCount)} items)</span>
            </button>

            <button
              onClick={() => setDisplayCount(filteredProducts.length)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-black font-heading font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-soft"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C9962B]" />
              <span>Show All {filteredProducts.length} Items</span>
            </button>
          </div>
        )}

        {/* Footer info pill */}
        <div className="mt-8 text-center text-xs font-mono text-slate-500">
          Showing {visibleProducts.length} of {filteredProducts.length} bearings • All items authentic OEM with ready stock at Manmad Depot
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
      />
    </section>
  );
}

export default ProductCatalogue;
