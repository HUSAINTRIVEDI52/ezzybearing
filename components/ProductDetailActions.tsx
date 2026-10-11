"use client";

import React, { useState } from "react";
import { Product } from "@/lib/products";
import { siteConfig } from "@/lib/siteConfig";
import { useRfq } from "@/lib/rfqContext";
import { 
  WhatsAppRecipient, 
  buildWhatsAppLink, 
  buildProductQuoteMessage 
} from "@/lib/whatsapp";
import { WhatsAppRecipientSelector } from "@/components/WhatsAppRecipientSelector";
import { MessageSquare, Plus, Check, Phone, Share2 } from "lucide-react";

interface ProductDetailActionsProps {
  product: Product;
}

export function ProductDetailActions({ product }: ProductDetailActionsProps) {
  const { addItem, isInRfq, openDrawer } = useRfq();
  const inRfq = isInRfq(product.id);
  const [recipient, setRecipient] = useState<WhatsAppRecipient>("ammar");
  const shabbir = siteConfig.contacts[0];

  const whatsappUrl = buildWhatsAppLink(
    buildProductQuoteMessage(product, "Product Detail Page"),
    recipient
  );

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: `${product.partNumber} Bearing Specification`,
        text: `Check out ${product.partNumber} bearing specification from EZZI Bearing Suppliers, Manmad`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Product link copied to clipboard!");
    }
  };

  return (
    <div className="space-y-3.5">
      {/* Recipient Number Selector (Ammar Default vs Shabbir) */}
      <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl p-2 px-3">
        <span className="text-xs font-mono font-bold text-slate-700">Message Representative:</span>
        <WhatsAppRecipientSelector
          selected={recipient}
          onChange={setRecipient}
          compact
        />
      </div>

      {/* Primary WhatsApp RFQ Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full min-h-[48px] py-4 px-6 rounded-xl font-heading font-extrabold text-sm uppercase tracking-wider bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 flex items-center justify-center gap-3 transition-all shadow-md active:scale-95 focus-visible:ring-2 focus-visible:ring-[#C9962B]"
        aria-label={`Get instant WhatsApp price quote for ${product.partNumber}`}
      >
        <MessageSquare className="w-5 h-5 fill-slate-950 stroke-none" />
        <span>Instant WhatsApp Price &amp; Stock Quote</span>
      </a>

      {/* Secondary Actions Row */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => {
            addItem(product);
            openDrawer();
          }}
          className={`min-h-[44px] py-3 px-4 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 border transition-all focus-visible:ring-2 focus-visible:ring-[#C9962B] ${
            inRfq
              ? "bg-emerald-600 text-white border-emerald-600"
              : "bg-white border-slate-300 text-[#0B1B3D] hover:border-[#C9962B]"
          }`}
          aria-label={inRfq ? `${product.partNumber} is in Quote Sheet. Click to view.` : `Add ${product.partNumber} to Quote Sheet`}
        >
          {inRfq ? (
            <>
              <Check className="w-4 h-4" />
              <span>In Quote Sheet (View)</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              <span>Add to Quote Sheet</span>
            </>
          )}
        </button>

        <a
          href={`tel:+91${shabbir.phone}`}
          className="min-h-[44px] py-3 px-4 rounded-xl font-mono text-xs text-[#0B1B3D] bg-white border border-slate-300 hover:border-[#C9962B] flex items-center justify-center gap-2 transition-colors font-bold focus-visible:ring-2 focus-visible:ring-[#C9962B]"
          aria-label={`Call trade desk at ${shabbir.phone}`}
        >
          <Phone className="w-4 h-4 text-[#C9962B]" />
          <span>Call Trade Desk</span>
        </a>
      </div>

      <button
        onClick={handleShare}
        className="w-full min-h-[44px] py-2.5 rounded-xl text-xs font-mono text-slate-600 hover:text-black flex items-center justify-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-[#C9962B]"
        aria-label={`Share ${product.partNumber} bearing specification link`}
      >
        <Share2 className="w-3.5 h-3.5" />
        <span>Share Bearing Spec Sheet</span>
      </button>
    </div>
  );
}

export default ProductDetailActions;
