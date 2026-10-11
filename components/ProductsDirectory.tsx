"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Product, CategoryInfo, getAllProducts, getCategories } from "@/lib/products";
import { siteConfig } from "@/lib/siteConfig";
import { 
  buildWhatsAppLink, 
  buildBOMEnquiryMessage, 
  buildProductQuoteMessage,
  WhatsAppRecipient, 
  DEFAULT_RECIPIENT, 
  WHATSAPP_CONTACTS 
} from "@/lib/whatsapp";
import { WhatsAppRecipientSelector } from "@/components/WhatsAppRecipientSelector";
import { getImagePath, getBearingAltText } from "@/lib/images";
import { useRfq } from "@/lib/rfqContext";
import { 
  Search, 
  SlidersHorizontal, 
  LayoutGrid, 
  List, 
  MessageSquare, 
  Plus, 
  Check, 
  RotateCcw,
  X,
  ArrowRight,
  Send,
  Sparkles,
  Layers
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
  const { addItem, isInRfq } = useRfq();

  // URL state initialization
  const urlQuery = searchParams.get("q") || "";
  const urlCategory = searchParams.get("category") || "all";
  const urlBrand = searchParams.get("brand") || "all";
  const urlSort = searchParams.get("sort") || "az";
  const urlView = (searchParams.get("view") as "grid" | "list") || "grid";

  const [searchQuery, setSearchQuery] = useState(urlQuery);
  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [selectedBrand, setSelectedBrand] = useState(urlBrand);
  const [sortBy, setSortBy] = useState(urlSort);
  const [viewMode, setViewMode] = useState<"grid" | "list">(urlView);
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Key B2B feature: Multi-select Enquiry List (array of product IDs)
  const [selectedForEnquiry, setSelectedForEnquiry] = useState<string[]>([]);
  const [recipient, setRecipient] = useState<WhatsAppRecipient>(DEFAULT_RECIPIENT);

  // Synchronize state to URL query string
  const updateUrlParams = useCallback((newParams: Record<string, string>) => {
    const current = new URLSearchParams(searchParams.toString());
    Object.entries(newParams).forEach(([k, v]) => {
      if (!v || v === "all" || (k === "sort" && v === "az") || (k === "view" && v === "grid")) {
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

  const handleBrandChange = (br: string) => {
    setSelectedBrand(br);
    updateUrlParams({ brand: br });
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    updateUrlParams({ sort });
  };

  const handleViewToggle = (view: "grid" | "list") => {
    setViewMode(view);
    updateUrlParams({ view });
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedBrand("all");
    setSortBy("az");
    setDisplayCount(ITEMS_PER_PAGE);
    router.replace(pathname, { scroll: false });
  };

  // Toggle selection for Multi-select Enquiry List
  const toggleEnquirySelection = (productId: string) => {
    setSelectedForEnquiry((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const selectAllVisible = () => {
    const visibleIds = visibleProducts.map((p) => p.id);
    setSelectedForEnquiry((prev) => Array.from(new Set([...prev, ...visibleIds])));
  };

  const clearEnquirySelection = () => {
    setSelectedForEnquiry([]);
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
      if (selectedBrand !== "all" && !p.brands.includes(selectedBrand)) return false;

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
  }, [initialProducts, searchQuery, selectedCategory, selectedBrand, sortBy]);

  useEffect(() => {
    setDisplayCount(ITEMS_PER_PAGE);
  }, [searchQuery, selectedCategory, selectedBrand, sortBy]);

  const visibleProducts = useMemo(() => {
    return filteredProducts.slice(0, displayCount);
  }, [filteredProducts, displayCount]);

  // Send consolidated WhatsApp enquiry for selected items
  const sendConsolidatedEnquiry = () => {
    if (selectedForEnquiry.length === 0) return;
    const selectedItems = initialProducts.filter((p) => selectedForEnquiry.includes(p.id));
    const bomItems = selectedItems.map((item) => ({
      partNumber: item.partNumber,
      categoryName: item.categoryName,
      dimensions: item.d && item.D && item.B ? `${item.d}x${item.D}x${item.B}mm` : undefined,
      brands: item.brands,
      quantity: 1,
    }));
    const message = buildBOMEnquiryMessage(
      bomItems,
      undefined,
      "Product Catalogue Directory Enquiry List"
    );
    const url = buildWhatsAppLink(message, recipient);
    window.open(url, "_blank");
  };

  const hasActiveFilters = searchQuery !== "" || selectedCategory !== "all" || selectedBrand !== "all";

  return (
    <div className="py-8 bg-[#F4F6FA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#0B1B3D] uppercase tracking-tight">
              Industrial Bearing Catalogue
            </h1>
            <p className="text-sm text-slate-600 mt-1 font-sans">
              Showing <strong className="text-[#0B1B3D] font-mono">{filteredProducts.length}</strong> authenticated bearing series available at our Manmad depot.
            </p>
          </div>

          {/* Quick Stats & Mobile Filter Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-mono font-bold text-[#0B1B3D] flex items-center gap-2 shadow-soft"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#C9962B]" />
              <span>Filters {hasActiveFilters && "(Active)"}</span>
            </button>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-white p-1 rounded-xl border border-slate-300 shadow-soft">
              <button
                onClick={() => handleViewToggle("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid" ? "bg-[#0B1B3D] text-[#E4B94F]" : "text-slate-500 hover:text-black"
                }`}
                title="Grid View"
                aria-label="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleViewToggle("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list" ? "bg-[#0B1B3D] text-[#E4B94F]" : "text-slate-500 hover:text-black"
                }`}
                title="List View"
                aria-label="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
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
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#F4F6FA] border border-slate-300 text-xs text-[#0B1B3D] placeholder-slate-400 focus:outline-none focus:border-[#C9962B] font-mono"
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
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between transition-colors ${
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
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between transition-colors ${
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

            {/* Brand Filter */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                Stockist Brands
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => handleBrandChange("all")}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between transition-colors ${
                    selectedBrand === "all"
                      ? "bg-[#0B1B3D] text-[#E4B94F] font-bold"
                      : "text-slate-700 hover:bg-[#F4F6FA]"
                  }`}
                >
                  <span>All Brands</span>
                </button>
                {siteConfig.brands.map((b) => (
                  <button
                    key={b}
                    onClick={() => handleBrandChange(b)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between transition-colors ${
                      selectedBrand === b
                        ? "bg-[#C9962B] text-white font-bold"
                        : "text-slate-700 hover:bg-[#F4F6FA]"
                    }`}
                  >
                    <span>{b}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                Sort Order
              </label>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-[#F4F6FA] border border-slate-300 text-xs font-mono text-[#0B1B3D] focus:outline-none focus:border-[#C9962B]"
              >
                <option value="az">Article Number (A to Z)</option>
                <option value="za">Article Number (Z to A)</option>
                <option value="category">Category</option>
              </select>
            </div>
          </aside>

          {/* MAIN PRODUCT LISTING AREA */}
          <main className="lg:col-span-9 space-y-6">
            {/* Top Toolbar: Selection Helper for Multi-Item RFQ */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-soft flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="text-slate-500">
                  Showing {visibleProducts.length} of {filteredProducts.length} bearings
                </span>
                {selectedForEnquiry.length > 0 && (
                  <span className="px-2.5 py-0.5 rounded-md bg-[#C9962B]/15 text-[#C9962B] font-bold">
                    {selectedForEnquiry.length} selected for enquiry
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <WhatsAppRecipientSelector 
                  compact 
                  selected={recipient} 
                  onChange={setRecipient} 
                />
                <button
                  onClick={selectAllVisible}
                  className="px-2.5 py-1 rounded bg-[#F4F6FA] border border-slate-300 hover:border-[#0B1B3D] text-slate-700"
                >
                  Select Visible
                </button>
                {selectedForEnquiry.length > 0 && (
                  <button
                    onClick={clearEnquirySelection}
                    className="px-2.5 py-1 rounded bg-[#F4F6FA] border border-slate-300 hover:text-red-600 text-slate-600"
                  >
                    Clear Selection
                  </button>
                )}
              </div>
            </div>

            {/* Content Display: Grid or List */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white border-2 border-dashed border-[#C9962B]/40 rounded-2xl p-8 sm:p-12 text-center shadow-soft">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-[#C9962B]/30 flex items-center justify-center text-[#C9962B] mx-auto mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1B3D] uppercase mb-2">
                  No match? Send us the bearing number on WhatsApp
                </h3>
                <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6 font-sans leading-relaxed">
                  We stock hundreds of additional industrial bearings, heavy machine series, and non-standard sizes at our Manmad depot that may not be displayed in this catalogue. Send your part number directly to our trade desk!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={buildWhatsAppLink(
                      `Hello, I searched your catalogue for "${searchQuery || "a specific bearing"}" and couldn't find an exact match. Do you have this part number or an equivalent in stock at your Manmad depot?`,
                      recipient
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl min-h-[44px] bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-bold text-sm transition-all shadow-md active:scale-95 w-full sm:w-auto"
                    aria-label="Send bearing part number on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none" />
                    <span>Send Part Number to {WHATSAPP_CONTACTS[recipient].name.split(" ")[0]}</span>
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
            ) : viewMode === "grid" ? (
              /* GRID VIEW */
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {visibleProducts.map((p) => {
                  const isSelected = selectedForEnquiry.includes(p.id);
                  const waUrl = buildWhatsAppLink(
                    buildProductQuoteMessage(p, "Catalogue Directory Grid"),
                    recipient
                  );

                  return (
                    <div
                      key={p.id}
                      className={`bg-white border rounded-xl p-5 shadow-soft hover-lift transition-all flex flex-col justify-between relative ${
                        isSelected ? "border-[#C9962B] ring-2 ring-[#C9962B]/30" : "border-slate-200 hover:border-[#C9962B]"
                      }`}
                    >
                      <div>
                        {/* Multi-Select Checkbox & Badge */}
                        <div className="flex items-center justify-between mb-2">
                          <label className="flex items-center gap-2 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => toggleEnquirySelection(p.id)}
                              className="w-4 h-4 rounded text-[#C9962B] focus:ring-[#C9962B] border-slate-300 cursor-pointer"
                            />
                            <span className="text-[11px] font-mono text-slate-500 font-semibold">
                              Select
                            </span>
                          </label>

                          <span className="text-[10px] font-mono font-bold uppercase bg-[#C9962B]/10 text-[#C9962B] px-2 py-0.5 rounded border border-[#C9962B]/20">
                            {p.badge || "IN STOCK"}
                          </span>
                        </div>

                        {/* Product Category Image Thumbnail */}
                        <Link href={`/products/${p.category}/${p.slug}`} className="block relative w-full aspect-[16/10] rounded-lg overflow-hidden my-2 bg-[#F4F6FA] border border-slate-200 group-hover:border-[#C9962B]/50 transition-colors">
                          <Image
                            src={p.image || getImagePath(p.category)}
                            alt={getBearingAltText({ partNumber: p.partNumber, name: p.name, categoryName: p.categoryName })}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </Link>

                        {/* Article No & Category */}
                        <div className="my-2">
                          <Link href={`/products/${p.category}/${p.slug}`} className="hover:text-[#C9962B] transition-colors">
                            <h3 className="font-heading font-extrabold text-2xl text-[#0B1B3D] uppercase tracking-tight">
                              {p.partNumber}
                            </h3>
                          </Link>
                          <span className="text-xs font-semibold text-slate-500 block mt-0.5">
                            {p.categoryName}
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed my-3 mb-4">
                          {p.description}
                        </p>
                      </div>

                      {/* Card Action Buttons */}
                      <div className="pt-3 border-t border-slate-100 space-y-2">
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-heading font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95"
                        >
                          <MessageSquare className="w-3.5 h-3.5 fill-slate-950 stroke-none" />
                          <span>Request a Quote</span>
                        </a>

                        <div className="flex items-center gap-2">
                          <Link
                            href={`/products/${p.category}/${p.slug}`}
                            className="flex-1 py-2 px-3 rounded-lg bg-[#F4F6FA] border border-slate-300 hover:border-[#0B1B3D] text-[#0B1B3D] text-xs font-heading font-bold uppercase tracking-wider text-center transition-colors"
                          >
                            View Details
                          </Link>

                          <button
                            onClick={() => addItem(p)}
                            className="p-2 rounded-lg bg-white border border-slate-300 hover:border-[#C9962B] text-slate-700 hover:text-[#0B1B3D]"
                            title="Add to Quote Sheet"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* LIST VIEW */
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-soft">
                <div className="divide-y divide-slate-100">
                  {visibleProducts.map((p) => {
                    const isSelected = selectedForEnquiry.includes(p.id);
                    const waUrl = buildWhatsAppLink(
                      buildProductQuoteMessage(p, "Catalogue Directory List"),
                      recipient
                    );

                    return (
                      <div
                        key={p.id}
                        className={`p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${
                          isSelected ? "bg-[#C9962B]/5" : "hover:bg-[#F4F6FA]"
                        }`}
                      >
                        <div className="flex items-start sm:items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleEnquirySelection(p.id)}
                            className="w-4 h-4 rounded text-[#C9962B] focus:ring-[#C9962B] border-slate-300 mt-1 sm:mt-0 cursor-pointer"
                          />

                          {/* Mini List Image Thumbnail */}
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-[#F4F6FA] border border-slate-200 hidden sm:block">
                            <Image
                              src={p.image || getImagePath(p.category)}
                              alt={getBearingAltText({ partNumber: p.partNumber, name: p.name, categoryName: p.categoryName })}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <Link href={`/products/${p.category}/${p.slug}`} className="font-heading font-extrabold text-xl text-[#0B1B3D] hover:text-[#C9962B] uppercase">
                                {p.partNumber}
                              </Link>
                            </div>
                            <p className="text-xs text-slate-500 font-sans line-clamp-1">
                              {p.name} • {p.categoryName}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                          <Link
                            href={`/products/${p.category}/${p.slug}`}
                            className="px-3 py-2 rounded-lg bg-[#F4F6FA] border border-slate-300 text-xs font-mono font-bold text-[#0B1B3D] hover:border-[#0B1B3D]"
                          >
                            Details
                          </Link>

                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg bg-[#25D366] text-slate-950 font-heading font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5"
                          >
                            <MessageSquare className="w-3.5 h-3.5 fill-slate-950 stroke-none" />
                            <span>Quote</span>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Pagination / Load More */}
            {filteredProducts.length > displayCount && (
              <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setDisplayCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filteredProducts.length))}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0B1B3D] text-[#E4B94F] font-heading font-extrabold text-sm uppercase tracking-wider hover:bg-[#132752] shadow-md flex items-center justify-center gap-2 transition-all hover-lift"
                >
                  <Plus className="w-4 h-4 text-[#E4B94F]" />
                  <span>Load More (+{Math.min(ITEMS_PER_PAGE, filteredProducts.length - displayCount)} items)</span>
                </button>

                <button
                  onClick={() => setDisplayCount(filteredProducts.length)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-700 font-heading font-bold text-sm uppercase tracking-wider hover:text-black shadow-soft"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C9962B] inline mr-1.5" />
                  Show All {filteredProducts.length} Items
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* FLOATING MULTI-SELECT ENQUIRY LIST BAR */}
      {selectedForEnquiry.length > 0 && (
        <div className="fixed bottom-20 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#0B1B3D] text-white px-5 py-3.5 rounded-2xl shadow-2xl border-2 border-[#C9962B] flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 animate-bounce-short">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="w-6 h-6 rounded-full bg-[#C9962B] text-slate-950 font-bold flex items-center justify-center text-xs">
              {selectedForEnquiry.length}
            </span>
            <span className="font-bold">items ticked for enquiry</span>
          </div>

          <WhatsAppRecipientSelector 
            compact 
            selected={recipient} 
            onChange={setRecipient} 
          />

          <div className="flex items-center gap-2">
            <button
              onClick={sendConsolidatedEnquiry}
              className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-heading font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send to {WHATSAPP_CONTACTS[recipient].name.split(" ")[0]} ({selectedForEnquiry.length})</span>
            </button>

            <button
              onClick={clearEnquirySelection}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#132752]"
              title="Clear selection"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* MOBILE BOTTOM SHEET FILTER DRAWER */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="relative z-10 w-full max-w-xs bg-white h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="font-heading font-extrabold text-xl text-[#0B1B3D] uppercase">
                  Catalogue Filters
                </span>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 text-slate-500 hover:text-black"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category */}
              <div className="py-4 border-b border-slate-200">
                <label className="block text-xs font-mono uppercase font-bold text-slate-500 mb-2">
                  Category
                </label>
                <div className="space-y-1 max-h-48 overflow-y-auto">
                  <button
                    onClick={() => { handleCategoryChange("all"); setMobileFilterOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 rounded text-xs font-mono ${
                      selectedCategory === "all" ? "bg-[#0B1B3D] text-[#E4B94F] font-bold" : "text-slate-700"
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => { handleCategoryChange(c.id); setMobileFilterOpen(false); }}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs font-mono ${
                        selectedCategory === c.id ? "bg-[#C9962B] text-white font-bold" : "text-slate-700"
                      }`}
                    >
                      {c.name} ({c.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand */}
              <div className="py-4 border-b border-slate-200">
                <label className="block text-xs font-mono uppercase font-bold text-slate-500 mb-2">
                  Brand
                </label>
                <div className="space-y-1">
                  <button
                    onClick={() => { handleBrandChange("all"); setMobileFilterOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 rounded text-xs font-mono ${
                      selectedBrand === "all" ? "bg-[#0B1B3D] text-[#E4B94F] font-bold" : "text-slate-700"
                    }`}
                  >
                    All Brands
                  </button>
                  {siteConfig.brands.map((b) => (
                    <button
                      key={b}
                      onClick={() => { handleBrandChange(b); setMobileFilterOpen(false); }}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs font-mono ${
                        selectedBrand === b ? "bg-[#C9962B] text-white font-bold" : "text-slate-700"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="py-4">
                <label className="block text-xs font-mono uppercase font-bold text-slate-500 mb-2">
                  Sort
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => { handleSortChange(e.target.value); setMobileFilterOpen(false); }}
                  className="w-full px-3 py-2 rounded-lg bg-[#F4F6FA] border border-slate-300 text-xs font-mono"
                >
                  <option value="az">Article Number (A to Z)</option>
                  <option value="za">Article Number (Z to A)</option>
                  <option value="category">Category</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => setMobileFilterOpen(false)}
              className="w-full py-3 rounded-xl bg-[#0B1B3D] text-[#E4B94F] font-heading font-extrabold text-xs uppercase"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsDirectory;
