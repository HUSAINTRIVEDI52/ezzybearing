import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/siteConfig";
import { 
  ShieldCheck, 
  MessageSquare, 
  ArrowRight, 
  PhoneCall, 
  AlertCircle, 
  Boxes, 
  Sparkles,
  Layers,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bearing Brands Stocked - XNO, DSF, SKF, TATA",
  description: "Explore world-class bearing brands stocked at EZZI Bearing Suppliers in Manmad: XNO, DSF, SKF, and TATA. Instant WhatsApp price quotes and all-India dispatch.",
  keywords: [
    "skf bearings stockist",
    "tata bearings supplier",
    "xno bearings distributor",
    "dsf bearings dealer",
    "industrial bearing brands maharashtra"
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/brands`,
  },
  openGraph: {
    title: `Bearing Brands Stocked | ${siteConfig.name}`,
    description: "Explore world-class bearing brands stocked at EZZI Bearing Suppliers in Manmad: XNO, DSF, SKF, and TATA.",
    url: `${siteConfig.siteUrl}/brands`,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Bearing Brands Stocked | ${siteConfig.name}`,
    description: "Explore world-class bearing brands stocked at EZZI Bearing Suppliers in Manmad: XNO, DSF, SKF, and TATA.",
    images: ["/og-image.png"],
  },
};

const BRAND_PROFILES = [
  {
    name: "XNO",
    tagline: "Cost-Effective Industrial Precision Bearings",
    badge: "HIGH VALUE",
    color: "#0F766E",
    description: "XNO bearings deliver dependable radial and axial load capacity tailored for cost-effective plant maintenance, material handling conveyors, and general engineering machinery where consistent replacement performance and economical price points are essential.",
    typicalLines: ["Deep Groove Ball Series", "Tapered Roller Cup & Cone Sets", "Pillow Block Insert Bearings", "Industrial Hand Tools"],
    origin: "Commercial Standard",
    enquiryText: "Hello EZZI Bearing Suppliers, I would like a quote for XNO bearings. Part numbers: ___. Quantity: ___. Delivery city: ___."
  },
  {
    name: "DSF",
    tagline: "Rugged Commercial & Fleet Replacement Series",
    badge: "REPLACEMENT GRADE",
    color: "#7C2D12",
    description: "DSF offers a focused catalogue of automotive wheel bearings, commercial fleet taper roller bearings, and agricultural replacement units engineered for quick maintenance turnaround across transport workshops and rural farm implements.",
    typicalLines: ["Commercial Wheel Hub Bearings", "Metric Tapered Rollers", "Clutch Release Bearings", "Automotive Assemblies"],
    origin: "Commercial Standard",
    enquiryText: "Hello EZZI Bearing Suppliers, I would like a quote for DSF bearings. Part numbers: ___. Quantity: ___. Delivery city: ___."
  },
  {
    name: "SKF",
    tagline: "Swedish Precision & Global Industrial Standard",
    badge: "GLOBAL PREMIUM",
    color: "#0B1B3D",
    description: "SKF is a global pioneer in bearing technology, known for world-class steel quality, micro-machined raceways, and superior life expectancy across extreme operating conditions. Widely chosen for heavy industrial drives, high-speed electric motors, and mission-critical plant machinery.",
    typicalLines: ["Deep Groove Ball Bearings (Explorer Series)", "Spherical Roller Bearings", "Cylindrical Roller Bearings", "Pillow Block Housings"],
    origin: "Sweden / International",
    enquiryText: "Hello EZZI Bearing Suppliers, I would like a quote for SKF bearings. Part numbers: ___. Quantity: ___. Delivery city: ___."
  },
  {
    name: "TATA",
    tagline: "India's Trusted Heavy-Duty Engineering Icon",
    badge: "HEAVY INDUSTRY",
    color: "#1E3A8A",
    description: "TATA Bearings (a division of Tata Steel) is recognized across the Indian subcontinent for robust metallurgy and reliable performance under severe Indian operating conditions. Renowned in automotive axles, two/four-wheeler applications, and agricultural tractor transmissions.",
    typicalLines: ["Tapered Roller Bearings", "Ball Bearings for Automotive Hubs", "Clutch Release Bearings", "Farm Machinery Series"],
    origin: "India",
    enquiryText: "Hello EZZI Bearing Suppliers, I would like a quote for TATA bearings. Part numbers: ___. Quantity: ___. Delivery city: ___."
  }
];

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-[#F4F6FA] pb-24 text-[#1A2536]">
      {/* Header Banner */}
      <div className="bg-[#0B1B3D] text-white pt-8 pb-12 border-b border-[#C9962B]/20 relative overflow-hidden">
        <div className="absolute inset-0 watermark-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Brands", href: "/brands" }
            ]}
          />

          <div className="mt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#C9962B]/10 border border-[#C9962B]/30 text-[#E4B94F] text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <span>Verified Depot Stockist</span>
              <span className="text-slate-500">•</span>
              <span>All-India Supply</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              Brands We Stock
            </h1>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              At EZZI Bearing Suppliers, we maintain dependable warehouse inventory across internationally acclaimed and domestic bearing manufacturers. Whether you require premium precision or economical high-volume replacement units, we provide transparent stock information.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello Ammar bhai, I want to inquire about brand availability for SKF, TATA, XNO, and DSF bearings.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl min-h-[44px] bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-bold text-sm transition-all shadow-md active:scale-95"
                aria-label="Enquire brands on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none" />
                <span>Enquire Brands on WhatsApp</span>
              </a>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl min-h-[44px] bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/20 transition-all active:scale-95"
                aria-label="View full bearing catalogue"
              >
                <span>Browse Inventory</span>
                <ArrowRight className="w-4 h-4 text-[#E4B94F]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Brand Authenticity / Owner Confirmation Disclaimer */}
        <div className="mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-5 text-amber-900 flex items-start gap-3.5 shadow-sm">
          <AlertCircle className="w-5 h-5 text-[#C9962B] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm font-sans space-y-1">
            <p className="font-bold text-amber-950">
              Note on Brand Representation &amp; Authorisation:
            </p>
            <p className="text-amber-800 leading-relaxed">
              We stock and supply bearings manufactured by XNO, DSF, SKF, and TATA. Official brand dealership and authorised franchise certificates are subject to ongoing distributor agreements.
            </p>
          </div>
        </div>

        {/* Brand Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {BRAND_PROFILES.map((brand) => {
            const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(brand.enquiryText)}`;

            return (
              <div
                key={brand.name}
                className="bg-white border border-slate-200 hover:border-[#C9962B] rounded-2xl p-8 shadow-soft hover-lift transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Wordmark Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      {/* Styled Wordmark Badge (No copyright infringements) */}
                      <div className="w-16 h-16 rounded-xl bg-[#0B1B3D] text-white flex items-center justify-center font-heading font-black text-2xl tracking-wider border-2 border-[#C9962B]/40 group-hover:border-[#C9962B] transition-colors shadow-sm">
                        {brand.name}
                      </div>
                      <div>
                        <h2 className="font-heading font-black text-2xl text-[#0B1B3D] tracking-tight uppercase">
                          {brand.name}
                        </h2>
                        <span className="text-xs font-mono text-slate-500 block">
                          Origin: {brand.origin}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-[#C9962B]/10 text-[#C9962B] border border-[#C9962B]/20">
                      {brand.badge}
                    </span>
                  </div>

                  <p className="text-xs font-mono font-semibold text-[#C9962B] uppercase tracking-wider mb-2">
                    {brand.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans mb-6">
                    {brand.description}
                  </p>

                  {/* Typical Product Lines */}
                  <div className="bg-[#F4F6FA] border border-slate-200 rounded-xl p-4 mb-6">
                    <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#C9962B]" />
                      <span>Frequently Supplied Series:</span>
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-600">
                      {brand.typicalLines.map((line, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span className="truncate">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire {brand.name} on WhatsApp</span>
                  </a>
                  <Link
                    href={`/products?q=${encodeURIComponent(brand.name)}`}
                    className="w-full sm:w-auto py-3 px-4 rounded-xl bg-white border border-slate-300 hover:border-[#C9962B] text-[#0B1B3D] hover:text-[#C9962B] font-mono text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View Stock</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stockist Assurance Band */}
        <div className="bg-[#0B1B3D] text-white rounded-2xl p-8 sm:p-10 border border-[#C9962B]/30 relative overflow-hidden">
          <div className="absolute inset-0 watermark-pattern opacity-10 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E4B94F] block mb-1">
                Looking for Specific Part Numbers?
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                Send Your Bearing Bill of Materials (BOM)
              </h3>
              <p className="mt-2 text-slate-300 text-sm font-sans">
                Our team will verify real-time stock across SKF, TATA, XNO, and DSF, returning a consolidated quotation within minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <Link
                href="/request-quote"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#C9962B] hover:bg-[#E4B94F] text-[#0B1B3D] font-bold text-xs uppercase tracking-wider transition-all text-center"
              >
                Request Custom Quote
              </Link>
              <a
                href={`tel:${siteConfig.contacts[0].phone}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-bold border border-white/20 transition-all text-center flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#E4B94F]" />
                <span>Call ({siteConfig.contacts[0].phone})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
