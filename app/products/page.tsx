import React, { Suspense } from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductsDirectory } from "@/components/ProductsDirectory";
import { ProductGridSkeleton } from "@/components/ProductSkeleton";
import { siteConfig } from "@/lib/siteConfig";
import { MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Bearing Catalogue & Part Number Finder | EZZI Bearing Suppliers",
  description: "Browse 193 industrial ball bearings, metric tapered rollers, clutch release assemblies, and wheel hub units. Delivery across India. Enquire for availability.",
  keywords: [
    "bearing catalogue india",
    "bearing part number search",
    "industrial bearing stockist",
    "manmad bearing supplier",
    "tapered roller bearing catalogue",
    "deep groove ball bearing stockist"
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/products`,
  },
  openGraph: {
    title: `Industrial Bearing Catalogue | ${siteConfig.name}`,
    description: "Browse 193 industrial ball bearings, metric tapered rollers, clutch release assemblies, and wheel hub units.",
    url: `${siteConfig.siteUrl}/products`,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Industrial Bearing Catalogue | ${siteConfig.name}`,
    description: "Browse 193 industrial ball bearings, metric tapered rollers, clutch release assemblies, and wheel hub units.",
    images: ["/og-image.png"],
  },
};

import { getAllProducts, getCategories } from "@/lib/products";

export default function ProductsPage() {
  const products = getAllProducts();
  const categories = getCategories();

  return (
    <div className="min-h-screen bg-[#F4F6FA] pb-24">
      {/* Top Banner & Breadcrumbs */}
      <div className="bg-[#0B1B3D] text-white pt-8 pb-10 border-b border-[#C9962B]/20 relative overflow-hidden">
        <div className="absolute inset-0 watermark-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" }
            ]}
          />
          <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#C9962B]/10 border border-[#C9962B]/30 text-[#E4B94F] text-xs font-mono font-bold tracking-wider uppercase mb-2">
                <span>All-India Delivery</span>
                <span className="text-slate-400">•</span>
                <span>Manmad</span>
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white uppercase">
                Bearing Range & Catalogue
              </h1>
              <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">
                Catalogue of ball bearings, metric tapered rollers, automotive wheel hubs, and clutch release units. Get a quote via WhatsApp or multi-item enquiry sheet.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello Ammar bhai, I would like to enquire about bearings from your catalogue.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl min-h-[44px] bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-bold text-sm transition-all shadow-md active:scale-95"
                aria-label="Enquire via WhatsApp about full bearing catalogue"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none" />
                <span>Enquire via WhatsApp</span>
              </a>

              <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-slate-300 border border-slate-700 rounded-lg p-3 bg-white/5">
                <div>
                  <span className="text-[#E4B94F] font-bold block text-base font-heading">193</span>
                  <span>Part Numbers</span>
                </div>
                <div className="h-8 w-px bg-slate-700" />
                <div>
                  <span className="text-[#E4B94F] font-bold block text-base font-heading">10</span>
                  <span>Categories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Directory content with Suspense for URL search params */}
      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="h-10 w-64 bg-slate-200 rounded-lg animate-pulse mb-8" />
            <ProductGridSkeleton count={9} />
          </div>
        }
      >
        <ProductsDirectory initialProducts={products} categories={categories} />
      </Suspense>
    </div>
  );
}
