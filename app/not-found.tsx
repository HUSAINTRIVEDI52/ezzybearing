import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Search, MessageSquare, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello EZZI Bearing Suppliers, I was searching for a bearing on your website but could not find it. Please check availability for me."
  )}`;

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-[#F4F6FA] text-center">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-3xl p-8 shadow-soft">
        <div className="w-16 h-16 rounded-2xl bg-[#0B1B3D] text-[#E4B94F] flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Search className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-[#C9962B] font-bold block mb-2">
          ERROR 404 • PAGE NOT FOUND
        </span>

        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1B3D] uppercase mb-3">
          Bearing Part Number Not Found
        </h1>

        <p className="text-xs text-slate-500 font-sans leading-relaxed mb-8">
          The bearing part number or page you requested is not listed in our standard catalogue. We stock additional sizes across SKF, TATA, XNO, and DSF. Enquire for availability on WhatsApp.
        </p>

        <div className="space-y-3">
          <Link
            href="/products"
            className="w-full py-3.5 px-4 rounded-xl bg-[#0B1B3D] hover:bg-slate-800 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-[#E4B94F]" />
            <span>Browse Full 193 Product Catalog</span>
          </Link>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Inquire Part on WhatsApp</span>
          </a>

          <Link
            href="/"
            className="w-full py-2.5 px-4 rounded-xl text-xs font-mono text-slate-500 hover:text-[#0B1B3D] flex items-center justify-center gap-1.5 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
