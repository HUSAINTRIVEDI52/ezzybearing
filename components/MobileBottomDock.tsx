"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { useRfq } from "@/lib/rfqContext";
import { Phone, MessageSquare, FileSpreadsheet, Search } from "lucide-react";

export function MobileBottomDock() {
  const { totalItems, openDrawer } = useRfq();
  const contact = siteConfig.contacts[0];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 py-2 px-3 shadow-2xl">
      <div className="grid grid-cols-4 gap-1 items-center">
        {/* Call Button */}
        <a
          href={`tel:+91${contact.phone}`}
          className="flex flex-col items-center justify-center min-h-[48px] py-1 text-slate-700 hover:text-[#0B1B3D] transition-colors focus-visible:ring-2 focus-visible:ring-[#C9962B] rounded-lg touch-manipulation"
          aria-label={`Call EZZI Bearings at ${contact.phone}`}
        >
          <div className="w-8 h-8 rounded-full bg-[#F4F6FA] border border-slate-200 flex items-center justify-center text-[#0B1B3D]">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono mt-1 font-semibold text-slate-800">Call Now</span>
        </a>

        {/* Search Catalogue */}
        <Link
          href="/#catalogue"
          className="flex flex-col items-center justify-center min-h-[48px] py-1 text-slate-700 hover:text-[#0B1B3D] transition-colors focus-visible:ring-2 focus-visible:ring-[#C9962B] rounded-lg touch-manipulation"
          aria-label="Search bearing catalog"
        >
          <div className="w-8 h-8 rounded-full bg-[#F4F6FA] border border-slate-200 flex items-center justify-center text-[#C9962B]">
            <Search className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono mt-1 font-semibold text-slate-800">Catalog</span>
        </Link>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello Ammar bhai, I want to inquire about bearing stock availability.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[48px] py-1 text-emerald-800 transition-colors focus-visible:ring-2 focus-visible:ring-[#C9962B] rounded-lg touch-manipulation"
          aria-label="Chat on WhatsApp with EZZI Bearings"
        >
          <div className="w-8 h-8 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-emerald-700">
            <MessageSquare className="w-4 h-4 fill-[#25D366] stroke-none" />
          </div>
          <span className="text-[10px] font-mono mt-1 font-bold text-emerald-800">WhatsApp</span>
        </a>

        {/* RFQ Sheet Drawer Button */}
        <button
          onClick={openDrawer}
          className="relative flex flex-col items-center justify-center min-h-[48px] py-1 text-slate-700 hover:text-[#0B1B3D] transition-colors focus-visible:ring-2 focus-visible:ring-[#C9962B] rounded-lg touch-manipulation"
          aria-label={`Open Quote Sheet (${totalItems} items)`}
        >
          <div className="w-8 h-8 rounded-full bg-[#F4F6FA] border border-slate-200 flex items-center justify-center text-[#0B1B3D]">
            <FileSpreadsheet className="w-4 h-4 text-[#C9962B]" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-3.5 w-4 h-4 rounded-full bg-[#C9962B] text-slate-950 font-mono font-bold text-[10px] flex items-center justify-center shadow-md">
                {totalItems}
              </span>
            )}
          </div>
          <span className="text-[10px] font-mono mt-1 font-semibold text-slate-800">Quote ({totalItems})</span>
        </button>
      </div>
    </div>
  );
}

export default MobileBottomDock;
