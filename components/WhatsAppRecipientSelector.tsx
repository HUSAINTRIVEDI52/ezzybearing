"use client";

import React from "react";
import { WhatsAppRecipient, WHATSAPP_CONTACTS } from "@/lib/whatsapp";

interface WhatsAppRecipientSelectorProps {
  selected: WhatsAppRecipient;
  onChange: (recipient: WhatsAppRecipient) => void;
  compact?: boolean;
  className?: string;
}

export function WhatsAppRecipientSelector({
  selected,
  onChange,
  compact = false,
  className = "",
}: WhatsAppRecipientSelectorProps) {
  const ammar = WHATSAPP_CONTACTS.ammar;
  const shabbir = WHATSAPP_CONTACTS.shabbir;

  if (compact) {
    return (
      <div className={`inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200 text-xs font-mono ${className}`}>
        <button
          type="button"
          onClick={() => onChange("ammar")}
          className={`px-3 py-1.5 rounded-lg transition-all min-h-[36px] flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#C9962B] ${
            selected === "ammar"
              ? "bg-[#0B1B3D] text-[#E4B94F] font-bold shadow-sm"
              : "text-slate-600 hover:text-black"
          }`}
          aria-pressed={selected === "ammar"}
          aria-label="Select Sales Desk as WhatsApp recipient"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Sales Desk (Default)</span>
        </button>
        <button
          type="button"
          onClick={() => onChange("shabbir")}
          className={`px-3 py-1.5 rounded-lg transition-all min-h-[36px] flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#C9962B] ${
            selected === "shabbir"
              ? "bg-[#0B1B3D] text-[#E4B94F] font-bold shadow-sm"
              : "text-slate-600 hover:text-black"
          }`}
          aria-pressed={selected === "shabbir"}
          aria-label="Select Wholesale Desk as WhatsApp recipient"
        >
          <span>Wholesale Desk</span>
        </button>
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
        Direct Trade Contact on WhatsApp:
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {/* Sales Desk (Default POC) */}
        <button
          type="button"
          onClick={() => onChange("ammar")}
          className={`p-3 rounded-xl border text-left transition-all min-h-[44px] flex items-center justify-between focus-visible:ring-2 focus-visible:ring-[#C9962B] ${
            selected === "ammar"
              ? "border-[#25D366] bg-emerald-50/70 ring-1 ring-[#25D366]"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
          aria-pressed={selected === "ammar"}
          aria-label="Direct to Sales Desk (Default POC)"
        >
          <div className="flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
              selected === "ammar" ? "bg-[#25D366] text-slate-950" : "bg-slate-100 text-slate-700"
            }`}>
              1
            </div>
            <div>
              <div className="font-heading font-extrabold text-sm text-[#0B1B3D] flex items-center gap-1.5">
                <span>Sales Desk</span>
                <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-200 text-emerald-900 uppercase">
                  Default
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-500">Quotations &amp; Dispatches • +91 {ammar.phone}</p>
            </div>
          </div>
          <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
            selected === "ammar" ? "border-[#25D366] bg-[#25D366]" : "border-slate-300"
          }`}>
            {selected === "ammar" && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
          </span>
        </button>

        {/* Wholesale Desk */}
        <button
          type="button"
          onClick={() => onChange("shabbir")}
          className={`p-3 rounded-xl border text-left transition-all min-h-[44px] flex items-center justify-between focus-visible:ring-2 focus-visible:ring-[#C9962B] ${
            selected === "shabbir"
              ? "border-[#25D366] bg-emerald-50/70 ring-1 ring-[#25D366]"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
          aria-pressed={selected === "shabbir"}
          aria-label="Direct to Wholesale Desk"
        >
          <div className="flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
              selected === "shabbir" ? "bg-[#25D366] text-slate-950" : "bg-slate-100 text-slate-700"
            }`}>
              2
            </div>
            <div>
              <div className="font-heading font-extrabold text-sm text-[#0B1B3D]">
                <span>Wholesale Desk</span>
              </div>
              <p className="text-[11px] font-mono text-slate-500">Bulk &amp; Trade • +91 {shabbir.phone}</p>
            </div>
          </div>
          <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
            selected === "shabbir" ? "border-[#25D366] bg-[#25D366]" : "border-slate-300"
          }`}>
            {selected === "shabbir" && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
          </span>
        </button>
      </div>
    </div>
  );
}

export default WhatsAppRecipientSelector;
