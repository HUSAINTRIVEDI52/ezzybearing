"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Product, CategoryInfo, getAllProducts, getCategories } from "@/lib/products";
import { siteConfig } from "@/lib/siteConfig";
import { ProductCard } from "@/components/ProductCard";
import { 
  Search, 
  SlidersHorizontal, 
  RotateCcw,
  X,
  MessageSquare
} from "lucide-react";

interface ProductsDirectoryProps {
  initialProducts?: Product[];
  categories?: CategoryInfo[];
}

const ITEMS_PER_PAGE = 24;

export function ProductsDirectory({ 
  initialProducts = getAllProducts(), 
  categories = getCategories() 
}: ProductsDirectoryProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // URL state initialization
  const urlQuery = searchParams.get("q") || "";
  const urlCategory = searchParams.get("category") || "all";
  const urlSort = searchParams.get("sort") || "az";

  const [searchQuery, setSearchQuery] = useState(urlQuery);
  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [sortBy, setSortBy] = useState(urlSort);
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Active filter count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (searchQuery.trim()) count++;
    if (selectedCategory !== "all") count++;
    return count;
  }, [searchQuery, selectedCategory]);

  const hasActiveFilters = activeFilterCount > 0;

  // Synchronize state to URL query string
  const updateUrlParams = useCallback((newParams: Record<string, string>) => {
    const current = new URLSearchParams(searchParams.toString());
    Object.entries(newParams).forEach(([k, v]) => {
      if (!v || v === "all" || (k === "sort" && v === "az")) {
        current.delete(k);
      } else {
        current.set(k, v);
      }
    });
    router.replace(`${pathname}?${current.toString()}`, { scroll: false });
  }, [pathname, router, searchParams]);

  // Handle Search Input Change
  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    updateUrlParams({ q: val });
  };

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    updateUrlParams({ category: catId });
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    updateUrlParams({ sort });
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortBy("az");
    setDisplayCount(ITEMS_PER_PAGE);
    router.replace(pathname, { scroll: false });
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    let result = initialProducts.filter((p) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesPart = p.partNumber.toLowerCase().includes(q);
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesCategory = p.categoryName.toLowerCase().includes(q);
        if (!matchesPart && !matchesName && !matchesCategory) return false;
      }

      if (selectedCategory !== "all" && p.category !== selectedCategory) return false;

      return true;
    });

    // Sorting
    result.sort((a, b) => {
      if (sortBy === "az") {
        return a.partNumber.localeCompare(b.partNumber, undefined, { numeric: true });
      }
      if (sortBy === "za") {
        return b.partNumber.localeCompare(a.partNumber, undefined, { numeric: true });
      }
      if (sortBy === "category") {
        return a.categoryName.localeCompare(b.categoryName);
      }
      return 0;
    });

    return result;
  }, [initialProducts, searchQuery, selectedCategory, sortBy]);

  useEffect(() => {
    setDisplayCount(ITEMS_PER_PAGE);
  }, [searchQuery, selectedCategory, sortBy]);

  const visibleProducts = useMemo(() => {
    return filteredProducts.slice(0, displayCount);
  }, [filteredProducts, displayCount]);

  return (
    <div className="py-6 sm:py-8 bg-[#F4F6FA] min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sticky Mobile Search & Filter Toolbar */}
        <div className="lg:hidden sticky top-14 sm:top-16 z-30 bg-[#F4F6FA]/95 backdrop-blur-md py-2.5 mb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search article number..."
                className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-white border border-slate-300 text-base text-[#0B1B3D] placeholder-slate-400 focus:outline-none focus:border-[#C9962B] font-mono shadow-sm min-h-[44px]"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-black min-h-[36px] min-w-[36px] flex items-center justify-center"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <button
              onClick={() => setMobileFilterOpen(true)}
              className="min-h-[44px] px-3.5 rounded-xl bg-white border border-slate-300 text-xs font-mono font-bold text-[#0B1B3D] flex items-center gap-1.5 shadow-sm active:bg-slate-50 shrink-0"
              aria-label={`Open filters (${activeFilterCount} active)`}
            >
              <SlidersHorizontal className="w-4 h-4 text-[#C9962B]" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#C9962B] text-slate-950 font-bold text-[11px] flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1B3D] uppercase tracking-tight">
              Industrial Bearing Catalogue
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-sans">
              Showing <strong className="text-[#0B1B3D] font-mono">{filteredProducts.length}</strong> bearing series in our catalogue.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="px-3 py-2 rounded-xl bg-white border border-slate-300 text-xs font-mono text-[#0B1B3D] focus:outline-none focus:border-[#C9962B] min-h-[40px]"
            >
              <option value="az">Part No. (A to Z)</option>
              <option value="za">Part No. (Z to A)</option>
              <option value="category">Category</option>
            </select>
          </div>
        </div>

        {/* Layout Grid (Left Sidebar + Content) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* DESKTOP LEFT FILTER SIDEBAR */}
          <aside className="hidden lg:block lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-6 shadow-soft space-y-6 sticky top-24">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="font-heading font-extrabold text-lg text-[#0B1B3D] uppercase flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#C9962B]" />
                <span>Filters</span>
              </span>
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="text-xs font-mono text-[#C9962B] font-bold hover:underline flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Search Input in Sidebar */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                Article No. / Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="e.g. 6205, 30208..."
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#F4F6FA] border border-slate-300 text-sm text-[#0B1B3D] placeholder-slate-400 focus:outline-none focus:border-[#C9962B] font-mono min-h-[44px]"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                Bearing Category
              </label>
              <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
                <button
                  onClick={() => handleCategoryChange("all")}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between transition-colors min-h-[36px] ${
                    selectedCategory === "all"
                      ? "bg-[#0B1B3D] text-[#E4B94F] font-bold"
                      : "text-slate-700 hover:bg-[#F4F6FA]"
                  }`}
                >
                  <span>All Categories</span>
                  <span className="text-[11px] opacity-75">{initialProducts.length}</span>
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between transition-colors min-h-[36px] ${
                      selectedCategory === cat.id
                        ? "bg-[#C9962B] text-white font-bold"
                        : "text-slate-700 hover:bg-[#F4F6FA]"
                    }`}
                  >
                    <span className="truncate pr-2">{cat.name}</span>
                    <span className="text-[11px] opacity-75">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* MAIN PRODUCT LISTING AREA */}
          <main className="lg:col-span-9 space-y-6">
            {/* Content Display: 1 column on 360px phones, responsive grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white border-2 border-dashed border-[#C9962B]/40 rounded-2xl p-8 sm:p-12 text-center shadow-soft">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-[#C9962B]/30 flex items-center justify-center text-[#C9962B] mx-auto mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1B3D] uppercase mb-2">
                  No match found
                </h3>
                <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6 font-sans leading-relaxed">
                  We stock additional industrial bearings and non-standard sizes in Manmad. Send your part number directly to our team on WhatsApp!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      `Hello EZZI Bearing Suppliers, I searched your catalogue for "${searchQuery || "bearing"}" and want to enquire for availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl min-h-[44px] bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-bold text-sm transition-all shadow-md active:scale-95 w-full sm:w-auto"
                    aria-label="Send bearing part number on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none" />
                    <span>Send Part Number on WhatsApp</span>
                  </a>
                  <button
                    onClick={handleResetFilters}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl min-h-[44px] bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-bold transition-all w-full sm:w-auto"
                    aria-label="Reset catalogue filters"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset Search Filters</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                {visibleProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}

            {/* Load More Pagination */}
            {visibleProducts.length < filteredProducts.length && (
              <div className="text-center pt-6">
                <button
                  onClick={() => setDisplayCount((prev) => prev + ITEMS_PER_PAGE)}
                  className="px-8 py-3.5 rounded-xl bg-white border-2 border-slate-300 hover:border-[#0B1B3D] text-[#0B1B3D] font-heading font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all min-h-[44px]"
                >
                  Load More Bearings ({visibleProducts.length} of {filteredProducts.length})
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* MOBILE BOTTOM SHEET FILTER */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="relative z-10 w-full max-h-[85vh] bg-white rounded-t-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Sheet Header */}
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#C9962B]" />
                <h3 className="font-heading font-extrabold text-base text-[#0B1B3D] uppercase">
                  Catalogue Filters
                </h3>
                {activeFilterCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-[#C9962B]/20 text-[#0B1B3D] text-xs font-mono font-bold">
                    {activeFilterCount} active
                  </span>
                )}
              </div>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-slate-500 hover:text-black rounded-lg"
                aria-label="Close filters sheet"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Filters Content */}
            <div className="p-5 space-y-5 overflow-y-auto max-h-[calc(85vh-140px)]">
              {/* Category */}
              <div>
                <label className="block text-xs font-mono uppercase font-bold text-slate-600 mb-2">
                  Category
                </label>
                <div className="space-y-1.5 max-h-48 overflow-y-auto">
                  <button
                    onClick={() => handleCategoryChange("all")}
                    className={`w-full min-h-[44px] text-left px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between ${
                      selectedCategory === "all" ? "bg-[#0B1B3D] text-[#E4B94F] font-bold" : "text-slate-700 bg-slate-50"
                    }`}
                  >
                    <span>All Categories</span>
                    <span>{initialProducts.length}</span>
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => handleCategoryChange(c.id)}
                      className={`w-full min-h-[44px] text-left px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between ${
                        selectedCategory === c.id ? "bg-[#C9962B] text-white font-bold" : "text-slate-700 bg-slate-50"
                      }`}
                    >
                      <span className="truncate pr-2">{c.name}</span>
                      <span>{c.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-xs font-mono uppercase font-bold text-slate-600 mb-2">
                  Sort Order
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="w-full min-h-[44px] px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-sm font-mono text-[#0B1B3D]"
                >
                  <option value="az">Article Number (A to Z)</option>
                  <option value="za">Article Number (Z to A)</option>
                  <option value="category">Category</option>
                </select>
              </div>
            </div>

            {/* Sheet Footer with Apply Button & Reset */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center gap-3">
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs font-mono font-bold text-slate-700 hover:text-black"
                >
                  Reset
                </button>
              )}
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 min-h-[44px] py-3 rounded-xl bg-[#0B1B3D] text-[#E4B94F] font-heading font-extrabold text-xs uppercase tracking-wider flex items-center justify-center shadow-md active:scale-95"
              >
                Apply Filters ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsDirectory;
