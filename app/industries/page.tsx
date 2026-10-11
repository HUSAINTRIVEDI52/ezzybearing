import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getIndustries } from "@/lib/products";
import { siteConfig } from "@/lib/siteConfig";
import { 
  Building2, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  Boxes, 
  PhoneCall,
  Sparkles,
  Layers,
  Wrench,
  Factory
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries Served - Bearing Solutions",
  description: "Specialized bearing solutions for automotive, agriculture, textile, cement, steel, sugar, material handling, and general engineering industries across India.",
  keywords: [
    "automotive bearings",
    "agricultural bearings",
    "sugar mill bearings",
    "cement plant bearings",
    "textile machine bearings",
    "steel mill bearings maharashtra"
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/industries`,
  },
  openGraph: {
    title: `Industries Served | ${siteConfig.name}`,
    description: "Specialized bearing solutions for automotive, agriculture, textile, cement, steel, sugar, and heavy manufacturing.",
    url: `${siteConfig.siteUrl}/industries`,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Industries Served | ${siteConfig.name}`,
    description: "Specialized bearing solutions for automotive, agriculture, textile, cement, steel, sugar, and heavy manufacturing.",
    images: ["/og-image.png"],
  },
};

export default function IndustriesPage() {
  const industries = getIndustries();

  return (
    <div className="min-h-screen bg-[#F4F6FA] pb-24 text-[#1A2536]">
      {/* Header Banner */}
      <div className="bg-[#0B1B3D] text-white pt-8 pb-14 border-b border-[#C9962B]/20 relative overflow-hidden">
        <div className="absolute inset-0 watermark-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Industries", href: "/industries" }
            ]}
          />

          <div className="mt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#C9962B]/10 border border-[#C9962B]/30 text-[#E4B94F] text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <span>Engineered For Demanding Sectors</span>
              <span className="text-slate-500">•</span>
              <span>All-India Supply</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              Industries Served
            </h1>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              Every operating environment poses distinct thermal, load, and contamination demands. Discover how our Manmad bearing inventory supports eight core industrial and agricultural sectors with tailored rolling element solutions.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello Ammar bhai, I want to inquire about bearing solutions for our industrial application.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl min-h-[44px] bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-bold text-sm transition-all shadow-md active:scale-95"
                aria-label="Discuss industry bearing needs on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none" />
                <span>Discuss Industry Needs on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="space-y-12">
          {industries.map((ind, index) => {
            const indWaUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Hello EZZI Bearing Suppliers, I need bearings for the ${ind.name} industry. Key requirements: ___. Delivery city: ___.`)}`;

            return (
              <div
                key={ind.id}
                id={ind.id}
                className="bg-white border border-slate-200 hover:border-[#C9962B] rounded-2xl p-8 sm:p-10 shadow-soft transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Title & Description */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded bg-[#0B1B3D] text-[#E4B94F]">
                        Sector 0{index + 1}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {ind.id.toUpperCase()}
                      </span>
                    </div>

                    <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0B1B3D] tracking-tight uppercase">
                      {ind.name}
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                      {ind.description}
                    </p>

                    {/* Applications List */}
                    <div className="pt-2">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#C9962B]" />
                        <span>Key Machinery &amp; Applications:</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-600">
                        {ind.applications.map((app, aIdx) => (
                          <div key={aIdx} className="flex items-center gap-2 p-2 rounded-lg bg-[#F4F6FA] border border-slate-100">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Regional Supply Advantage */}
                    <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs font-mono text-amber-900 flex items-start gap-2.5">
                      <Factory className="w-4 h-4 text-[#C9962B] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-950 block">Manmad Hub Logistics Advantage:</span>
                        <span className="text-amber-800">{ind.hubAdvantage}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Suited Bearing Types & CTAs */}
                  <div className="lg:col-span-5 bg-[#F4F6FA] border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-6">
                    <div>
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1B3D] mb-3 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#C9962B]" />
                        <span>Suited Bearing Types &amp; Series:</span>
                      </h3>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {ind.keyBearings.map((part) => (
                          <Link
                            key={part}
                            href={`/products?q=${encodeURIComponent(part)}`}
                            className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:border-[#C9962B] hover:text-[#C9962B] text-xs font-mono font-bold text-[#0B1B3D] transition-colors shadow-sm"
                          >
                            #{part}
                          </Link>
                        ))}
                      </div>

                      <p className="text-xs text-slate-500 font-sans leading-relaxed">
                        Available in SKF, TATA, XNO, and DSF specifications with regular and C3 clearance options for high thermal resistance.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200 space-y-2">
                      <a
                        href={indWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Enquire for {ind.name}</span>
                      </a>
                      
                      <Link
                        href="/products"
                        className="w-full py-2.5 px-4 rounded-xl bg-white border border-slate-300 hover:border-[#C9962B] text-[#0B1B3D] hover:text-[#C9962B] font-mono text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>Search Inventory</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
