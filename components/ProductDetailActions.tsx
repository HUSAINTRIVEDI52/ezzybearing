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
import { MessageSquare, Plus, Check, Phone, Share2 } from "lucide-react";

interface ProductDetailActionsProps {
  product: Product;
}

export function ProductDetailActions({ product }: ProductDetailActionsProps) {
  const { addItem, isInRfq, openDrawer } = useRfq();
  const inRfq = isInRfq(product.id);
  const [copied, setCopied] = useState(false);
  const contact = siteConfig.contacts.primary;

  const whatsappUrl = buildWhatsAppLink(
    buildProductQuoteMessage(product, "Product Detail Page"),
    "ammar"
  );

  const handleShare = async () => {
    if (typeof window === "undefined") return;
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${product.partNumber} Bearing | ${siteConfig.name}`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="space-y-3.5">
      {/* Primary WhatsApp RFQ Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full min-h-[48px] py-4 px-6 rounded-xl font-heading font-extrabold text-sm uppercase tracking-wider bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-95 focus-visible:ring-2 focus-visible:ring-[#C9962B]"
        aria-label={`Request Quote on WhatsApp for ${product.partNumber}`}
      >
        <MessageSquare className="w-5 h-5 fill-slate-950 stroke-none" />
        <span>Request Quote on WhatsApp</span>
      </a>

      {/* Secondary Actions: Call & Enquiry List */}
      <div className="grid grid-cols-2 gap-3">
        <a
          href={`tel:+91${contact.phone}`}
          className="min-h-[44px] py-3 px-4 rounded-xl font-mono text-xs text-[#0B1B3D] bg-white border border-slate-300 hover:border-[#0B1B3D] flex items-center justify-center gap-2 transition-colors font-bold focus-visible:ring-2 focus-visible:ring-[#C9962B]"
          aria-label={`Call trade desk at +91 ${contact.phone}`}
        >
          <Phone className="w-4 h-4 text-[#C9962B]" />
          <span>Call Trade Desk</span>
        </a>

        <button
          onClick={() => {
            addItem(product);
            openDrawer();
          }}
          className={`min-h-[44px] py-3 px-4 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 border transition-all focus-visible:ring-2 focus-visible:ring-[#C9962B] ${
            inRfq
              ? "bg-[#0B1B3D] text-[#E4B94F] border-[#0B1B3D]"
              : "bg-white border-slate-300 text-slate-700 hover:border-[#0B1B3D]"
          }`}
          aria-label={inRfq ? `${product.partNumber} added to enquiry list` : `Add ${product.partNumber} to enquiry list`}
        >
          {inRfq ? (
            <>
              <Check className="w-4 h-4 text-[#E4B94F]" />
              <span>In Enquiry List</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              <span>+ Add to Enquiry</span>
            </>
          )}
        </button>
      </div>

      {/* Quantity & City Note */}
      <p className="text-xs text-slate-500 font-mono text-center pt-1">
        Mention required quantity and delivery city on WhatsApp for an accurate quote.
      </p>

      {/* Share Page URL */}
      <div className="text-center pt-1">
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-[#0B1B3D] transition-colors"
          aria-label="Share page URL"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>{copied ? "Page URL copied to clipboard!" : "Share Page URL"}</span>
        </button>
      </div>
    </div>
  );
}

export default ProductDetailActions;
