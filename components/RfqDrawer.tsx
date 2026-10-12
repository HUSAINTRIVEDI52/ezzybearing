"use client";

import React, { useState } from "react";
import { useRfq } from "@/lib/rfqContext";
import { siteConfig } from "@/lib/siteConfig";
import { 
  buildWhatsAppLink, 
  buildBOMEnquiryMessage 
} from "@/lib/whatsapp";
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  MessageSquare, 
  Copy, 
  Check, 
  FileSpreadsheet, 
  ShieldCheck, 
  ArrowRight
} from "lucide-react";

export function RfqDrawer() {
  const { 
    items, 
    totalItems, 
    removeItem, 
    updateQuantity, 
    clearRfq, 
    isDrawerOpen, 
    closeDrawer 
  } = useRfq();

  const recipient = "ammar";
  const [copied, setCopied] = useState(false);
  const [buyerCompany, setBuyerCompany] = useState("");
  const [buyerCity, setBuyerCity] = useState("");

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    if (isDrawerOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDrawerOpen, closeDrawer]);

  if (!isDrawerOpen) return null;

  // Custom WhatsApp URL
  const customWhatsappUrl = () => {
    if (items.length === 0) return "#";
    const mapped = items.map((item) => ({
      partNumber: item.product.partNumber,
      categoryName: item.product.categoryName,
      dimensions: `${item.product.d}x${item.product.D}x${item.product.B} mm`,
      brands: item.product.brands,
      quantity: item.quantity,
    }));
    const message = buildBOMEnquiryMessage(
      mapped, 
      { company: buyerCompany, city: buyerCity }, 
      "BOM Quote Sheet Drawer"
    );
    return buildWhatsAppLink(message, recipient);
  };

  const handleCopyBOM = () => {
    if (items.length === 0) return;
    const text = items.map((item, idx) => 
      `${idx + 1}. Part: ${item.product.partNumber} | Size: ${item.product.d}x${item.product.D}x${item.product.B} mm | Qty: ${item.quantity}`
    ).join("\n");

    const fullSummary = `EZZI BEARING SUPPLIERS - RFQ BOM\n--------------------------------------\n${text}\n--------------------------------------\nSupplier: ${siteConfig.name}, Manmad\nWhatsApp: +91 ${siteConfig.whatsappNumber}`;

    navigator.clipboard.writeText(fullSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-sm">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={closeDrawer} aria-label="Close RFQ Drawer background" />

      {/* Drawer Container */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="rfq-drawer-title"
        className="relative z-10 w-full max-w-lg bg-white border-l border-slate-200 shadow-2xl flex flex-col h-full"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#0B1B3D] text-white border-b border-[#C9962B]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#C9962B]/20 border border-[#C9962B]/40 flex items-center justify-center text-[#E4B94F]">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h2 id="rfq-drawer-title" className="text-base font-heading font-extrabold uppercase text-white tracking-wide">
                Bearing Quote Sheet (BOM)
              </h2>
              <p className="text-xs text-slate-300 font-mono">
                {totalItems} {totalItems === 1 ? "item" : "items"} selected for quotation
              </p>
            </div>
          </div>
          <button
            onClick={closeDrawer}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-slate-300 hover:text-white rounded-lg hover:bg-[#132752] transition-colors focus-visible:ring-2 focus-visible:ring-[#C9962B]"
            aria-label="Close quote drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#F4F6FA] border border-slate-200 flex items-center justify-center text-[#C9962B] mb-4">
              <FileSpreadsheet className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-extrabold text-[#0B1B3D] uppercase mb-1">
              Your Quote Sheet is Empty
            </h3>
            <p className="text-xs text-slate-500 max-w-xs mb-6 font-sans">
              Browse our 193 bearing catalogue and click &ldquo;+ Add to RFQ&rdquo; to build a multi-item Bill of Materials for quotation.
            </p>
            <button
              onClick={closeDrawer}
              className="px-6 py-3 rounded-xl bg-[#0B1B3D] hover:bg-[#132752] text-[#E4B94F] font-heading font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-md"
            >
              <span>Browse Catalogue</span>
              <ArrowRight className="w-4 h-4 text-[#E4B94F]" />
            </button>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F4F6FA]">
              {items.map((item) => (
                <div 
                  key={item.product.id}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-soft"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-extrabold text-xl text-[#0B1B3D] uppercase">
                          {item.product.partNumber}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F6FA] border border-slate-200 text-slate-700 font-bold">
                          {item.product.d}x{item.product.D}x{item.product.B}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {item.product.categoryName}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1 italic">
                        Enquire for availability
                      </p>
                    </div>

                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                      title="Remove item"
                      aria-label={`Remove ${item.product.partNumber} from quote`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-100">
                    <span className="text-xs font-mono text-slate-500 font-semibold">Order Quantity:</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:border-[#C9962B] active:scale-95 transition-all"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-10 text-center font-mono font-bold text-sm text-[#0B1B3D]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:border-[#C9962B] active:scale-95 transition-all"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-mono text-slate-500 ml-1">pcs</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Optional Buyer Info Input */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-soft space-y-3 mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold block">
                    Direct Contact:
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B1B3D] text-[#E4B94F] text-xs font-mono font-bold shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Ammar Sakriwala</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Company / Shop Name"
                    value={buyerCompany}
                    onChange={(e) => setBuyerCompany(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#F4F6FA] border border-slate-300 text-xs text-[#0B1B3D] placeholder-slate-400 focus:outline-none focus:border-[#C9962B]"
                  />
                  <input
                    type="text"
                    placeholder="Delivery City / Town"
                    value={buyerCity}
                    onChange={(e) => setBuyerCity(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#F4F6FA] border border-slate-300 text-xs text-[#0B1B3D] placeholder-slate-400 focus:outline-none focus:border-[#C9962B]"
                  />
                </div>
              </div>

              {/* Stockist Assurance Note */}
              <div className="p-3.5 rounded-lg bg-[#C9962B]/10 border border-[#C9962B]/30 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#C9962B] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 leading-snug">
                  Bulk orders and delivery across India. Send your bearing requirements for a direct quote.
                </p>
              </div>
            </div>

            {/* Footer / Submit Buttons */}
            <div className="p-4 bg-white border-t border-slate-200 space-y-2.5">
              <a
                href={customWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 rounded-xl font-heading font-extrabold text-sm uppercase tracking-wider bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none" />
                <span>Send {items.length} Items to WhatsApp RFQ</span>
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyBOM}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#F4F6FA] border border-slate-300 hover:border-[#C9962B] text-slate-700 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">BOM Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy BOM for Email</span>
                    </>
                  )}
                </button>

                <button
                  onClick={clearRfq}
                  className="py-2.5 px-3 rounded-xl bg-[#F4F6FA] border border-slate-300 hover:text-red-600 font-mono text-xs text-slate-500 flex items-center justify-center gap-1 transition-colors"
                  title="Clear all items"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default RfqDrawer;
