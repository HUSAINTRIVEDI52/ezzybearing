"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/products";
import { useRfq } from "@/lib/rfqContext";
import { 
  WhatsAppRecipient, 
  buildWhatsAppLink, 
  buildProductQuoteMessage 
} from "@/lib/whatsapp";
import { WhatsAppRecipientSelector } from "@/components/WhatsAppRecipientSelector";
import { 
  X, 
  MessageSquare, 
  Plus, 
  Check, 
  ShieldCheck, 
  ExternalLink, 
  Gauge, 
  Scale, 
  Zap, 
  Layers, 
  MapPin 
} from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const { addItem, isInRfq } = useRfq();
  const [recipient, setRecipient] = useState<WhatsAppRecipient>("ammar");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const inRfq = isInRfq(product.id);
  const whatsappUrl = buildWhatsAppLink(
    buildProductQuoteMessage(product, "Product Quick View Modal"),
    recipient
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} aria-label="Close modal background" />

      {/* Modal Dialog */}
      <div 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-title"
        className="relative z-10 w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B1B3D] text-white border-b border-[#C9962B]/30">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded bg-[#C9962B]/20 text-[#E4B94F] border border-[#C9962B]/40">
              {product.badge || "IN STOCK"}
            </span>
            <span className="text-xs text-slate-300 font-mono">
              Category: {product.categoryName}
            </span>
          </div>
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-[#132752] transition-colors focus-visible:ring-2 focus-visible:ring-[#C9962B]"
            aria-label="Close product quick view modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6 text-[#1A2536]">
          {/* Main Title & Stock info */}
          <div>
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <h2 id="modal-title" className="text-3xl font-heading font-extrabold text-[#0B1B3D] uppercase tracking-tight">
                {product.partNumber}
              </h2>
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Ready Depot Stock • Manmad
              </span>
            </div>
            <p className="text-sm text-slate-600 mt-1">{product.name}</p>
          </div>

          {/* Quick Dimensions Strip */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#F4F6FA] border border-slate-200">
            <div className="text-center">
              <span className="block text-xs font-mono text-slate-500">Bore (d)</span>
              <span className="text-lg font-heading font-extrabold text-[#0B1B3D]">{product.d} <span className="text-xs font-normal text-slate-500">mm</span></span>
            </div>
            <div className="text-center border-x border-slate-200">
              <span className="block text-xs font-mono text-slate-500">Outer Dia (D)</span>
              <span className="text-lg font-heading font-extrabold text-[#0B1B3D]">{product.D} <span className="text-xs font-normal text-slate-500">mm</span></span>
            </div>
            <div className="text-center">
              <span className="block text-xs font-mono text-slate-500">Width (B)</span>
              <span className="text-lg font-heading font-extrabold text-[#0B1B3D]">{product.B} <span className="text-xs font-normal text-slate-500">mm</span></span>
            </div>
          </div>

          {/* Brands Available */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block mb-2">
              Stockist Brands Ready for Dispatch
            </label>
            <div className="flex flex-wrap gap-2">
              {product.brands.map((b) => (
                <span 
                  key={b}
                  className="px-3 py-1 text-xs font-mono font-bold rounded-md bg-[#0B1B3D] text-[#E4B94F] border border-[#C9962B]/30 inline-flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E4B94F]" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Engineering Specs */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block mb-2">
              Technical Specifications
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-[#F4F6FA] border border-slate-200">
                <span className="text-slate-500 flex items-center gap-1 mb-1">
                  <Gauge className="w-3 h-3 text-[#C9962B]" /> Dynamic Load (Cr)
                </span>
                <span className="text-[#0B1B3D] font-bold">{product.dynamicLoad || "Standard"}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#F4F6FA] border border-slate-200">
                <span className="text-slate-500 flex items-center gap-1 mb-1">
                  <Layers className="w-3 h-3 text-[#C9962B]" /> Static Load (Cor)
                </span>
                <span className="text-[#0B1B3D] font-bold">{product.staticLoad || "Standard"}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#F4F6FA] border border-slate-200">
                <span className="text-slate-500 flex items-center gap-1 mb-1">
                  <Zap className="w-3 h-3 text-[#C9962B]" /> Limiting Speed
                </span>
                <span className="text-[#0B1B3D] font-bold">{product.limitingSpeed || "Standard"}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#F4F6FA] border border-slate-200">
                <span className="text-slate-500 flex items-center gap-1 mb-1">
                  <Scale className="w-3 h-3 text-slate-400" /> Weight (approx)
                </span>
                <span className="text-[#0B1B3D] font-bold">{product.weight || "N/A"}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#F4F6FA] border border-slate-200">
                <span className="text-slate-500 block mb-1">Clearance</span>
                <span className="text-[#0B1B3D] font-bold">{product.clearance || "Normal (CN)"}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#F4F6FA] border border-slate-200">
                <span className="text-slate-500 block mb-1">Cage &amp; Seal</span>
                <span className="text-[#0B1B3D] font-bold">{product.cage || "Steel"} • {product.sealType}</span>
              </div>
            </div>
          </div>

          {/* Applications */}
          {product.popularApplications && product.popularApplications.length > 0 && (
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1.5">
                Common Industrial &amp; Fleet Uses
              </label>
              <div className="flex flex-wrap gap-1.5">
                {product.popularApplications.map((app, i) => (
                  <span key={i} className="px-2.5 py-1 rounded text-xs bg-[#F4F6FA] text-slate-700 border border-slate-200 font-medium">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <p className="text-xs text-slate-600 leading-relaxed bg-[#F4F6FA] p-3.5 rounded-lg border border-slate-200">
            {product.description}
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <MapPin className="w-3.5 h-3.5 text-[#C9962B]" />
            <span>Dispatched directly from Burhani Complex, Manmad • Same day packing</span>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="p-4 bg-[#F4F6FA] border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 min-h-[44px] py-3.5 px-4 rounded-xl font-heading font-extrabold text-xs uppercase tracking-wider bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 focus-visible:ring-2 focus-visible:ring-[#C9962B]"
            aria-label={`Get instant WhatsApp quote for ${product.partNumber}`}
          >
            <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none" />
            <span>Instant WhatsApp Price Quote</span>
          </a>

          <button
            onClick={() => addItem(product)}
            className={`w-full sm:w-auto min-h-[44px] px-5 py-3.5 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 border transition-all focus-visible:ring-2 focus-visible:ring-[#C9962B] ${
              inRfq
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white border-slate-300 text-[#0B1B3D] hover:border-[#C9962B]"
            }`}
            aria-label={inRfq ? `${product.partNumber} is in Quote Sheet` : `Add ${product.partNumber} to Quote Sheet`}
          >
            {inRfq ? (
              <>
                <Check className="w-4 h-4" />
                <span>In Quote Sheet</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Add to Quote Sheet</span>
              </>
            )}
          </button>

          <Link
            href={`/products/${product.category}/${product.slug || product.id}`}
            onClick={onClose}
            className="w-full sm:w-auto min-h-[44px] px-4 py-3.5 rounded-xl font-mono text-xs text-[#0B1B3D] hover:text-[#8F6510] border border-slate-300 bg-white flex items-center justify-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-[#C9962B]"
            aria-label={`Full specification page for ${product.partNumber}`}
          >
            <span>Full Spec Page</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C9962B]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
