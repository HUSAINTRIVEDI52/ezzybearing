"use client";

import React from "react";
import { siteConfig } from "@/lib/siteConfig";
import { useRfq } from "@/lib/rfqContext";
import { Phone, MessageSquare, FileSpreadsheet } from "lucide-react";

export function MobileBottomDock() {
  const { totalItems, openDrawer } = useRfq();
  const contact = siteConfig.contacts.primary; // Shabbir Sakriwala

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B1B3D]/95 backdrop-blur-lg border-t border-[#C9962B]/30 py-2 px-4 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2 items-center max-w-md mx-auto">
        {/* 1. Call Button */}
        <a
          href={`tel:${contact.phoneClean}`}
          className="flex flex-col items-center justify-center min-h-[48px] py-1 text-slate-200 hover:text-[#E4B94F] transition-colors rounded-xl active:bg-white/10 touch-manipulation"
          aria-label={`Call ${contact.name}`}
        >
          <div className="w-8 h-8 rounded-full bg-[#132752] border border-[#C9962B]/40 flex items-center justify-center text-[#E4B94F]">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-mono mt-1 font-bold text-white">Call</span>
        </a>

        {/* 2. WhatsApp Button */}
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello EZZI Bearing Suppliers, I want to inquire about bearing availability.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[48px] py-1 text-emerald-400 hover:text-emerald-300 transition-colors rounded-xl active:bg-white/10 touch-manipulation"
          aria-label="Chat on WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-[#25D366] text-slate-950 flex items-center justify-center shadow-sm">
            <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none" />
          </div>
          <span className="text-[11px] font-mono mt-1 font-bold text-[#25D366]">WhatsApp</span>
        </a>

        {/* 3. Quote (n) Button */}
        <button
          onClick={openDrawer}
          className="relative flex flex-col items-center justify-center min-h-[48px] py-1 text-slate-200 hover:text-[#E4B94F] transition-colors rounded-xl active:bg-white/10 touch-manipulation"
          aria-label={`Open Quote Sheet (${totalItems} items)`}
        >
          <div className="w-8 h-8 rounded-full bg-[#132752] border border-[#C9962B]/40 flex items-center justify-center text-[#E4B94F] relative">
            <FileSpreadsheet className="w-4 h-4 text-[#E4B94F]" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C9962B] text-slate-950 font-mono font-black text-[10px] flex items-center justify-center shadow-md">
                {totalItems}
              </span>
            )}
          </div>
          <span className="text-[11px] font-mono mt-1 font-bold text-white">
            Quote ({totalItems})
          </span>
        </button>
      </div>
    </div>
  );
}

export default MobileBottomDock;
