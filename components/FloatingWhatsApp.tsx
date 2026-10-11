"use client";

import React, { useState } from "react";
import { 
  WhatsAppRecipient, 
  WHATSAPP_CONTACTS, 
  DEFAULT_RECIPIENT, 
  buildWhatsAppLink, 
  buildGeneralEnquiryMessage 
} from "@/lib/whatsapp";
import { MessageSquare, X, ChevronUp, UserCheck } from "lucide-react";

export function FloatingWhatsApp() {
  const [selectedRecipient, setSelectedRecipient] = useState<WhatsAppRecipient>(DEFAULT_RECIPIENT);
  const [showMenu, setShowMenu] = useState(false);

  const activeContact = WHATSAPP_CONTACTS[selectedRecipient];
  const mainWaUrl = buildWhatsAppLink(
    buildGeneralEnquiryMessage("Site Navigation"),
    selectedRecipient
  );

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5">
      {/* Contact Switcher Menu Popup */}
      {showMenu && (
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xl w-72 mb-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#0B1B3D] uppercase">Select Trade Desk</span>
            </div>
            <button
              onClick={() => setShowMenu(false)}
              className="text-slate-400 hover:text-black p-1 rounded-md"
              aria-label="Close trade desk selector"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2">
            {/* Ammar Sakriwala (Default) */}
            <a
              href={buildWhatsAppLink("Hello Ammar bhai, I want to check bearing stock availability.", "ammar")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setSelectedRecipient("ammar")}
              className={`p-2.5 rounded-xl border flex items-center justify-between transition-all min-h-[44px] ${
                selectedRecipient === "ammar"
                  ? "border-[#25D366] bg-emerald-50 text-[#0B1B3D]"
                  : "border-slate-200 hover:bg-slate-50 text-slate-700"
              }`}
              aria-label="Chat with Ammar Sakriwala (Default Sales Desk)"
            >
              <div>
                <div className="font-heading font-extrabold text-sm flex items-center gap-1.5">
                  <span>Ammar Sakriwala</span>
                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-200 text-emerald-900">
                    Default
                  </span>
                </div>
                <p className="text-[11px] font-mono text-slate-500">Sales &amp; Stock Desk • 8830721850</p>
              </div>
              <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            </a>

            {/* Shabbir Sakriwala */}
            <a
              href={buildWhatsAppLink("Hello Shabbir bhai, I want to check bearing stock availability.", "shabbir")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setSelectedRecipient("shabbir")}
              className={`p-2.5 rounded-xl border flex items-center justify-between transition-all min-h-[44px] ${
                selectedRecipient === "shabbir"
                  ? "border-[#25D366] bg-emerald-50 text-[#0B1B3D]"
                  : "border-slate-200 hover:bg-slate-50 text-slate-700"
              }`}
              aria-label="Chat with Shabbir Sakriwala (Senior Partner)"
            >
              <div>
                <div className="font-heading font-extrabold text-sm">
                  Shabbir Sakriwala
                </div>
                <p className="text-[11px] font-mono text-slate-500">Senior Partner • 9272395247</p>
              </div>
              <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Bar */}
      <div className="flex items-center gap-2">
        {/* Toggle Selector Pill */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="bg-white/95 backdrop-blur-md border border-slate-200 px-3 py-2 rounded-full shadow-lift text-xs font-mono font-bold text-[#0B1B3D] hover:border-[#C9962B] transition-all flex items-center gap-2 min-h-[44px]"
          aria-label="Choose WhatsApp contact"
          aria-expanded={showMenu}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Chat with {activeContact.name.split(" ")[0]}</span>
          <ChevronUp className={`w-3.5 h-3.5 transition-transform ${showMenu ? "rotate-180" : ""}`} />
        </button>

        {/* Floating Action Button */}
        <a
          href={mainWaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 flex items-center justify-center shadow-lift hover:scale-105 active:scale-95 transition-all min-h-[44px] min-w-[44px] focus-visible:ring-2 focus-visible:ring-[#C9962B]"
          aria-label={`Chat on WhatsApp with ${activeContact.name}`}
        >
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 group-hover:opacity-100" />
          <MessageSquare className="relative z-10 w-7 h-7 fill-slate-950 stroke-none" />
        </a>
      </div>
    </div>
  );
}

export default FloatingWhatsApp;
