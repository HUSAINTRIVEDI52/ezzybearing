"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import { buildWhatsAppLink, buildProductQuoteMessage } from "@/lib/whatsapp";
import { getImagePath, getBearingAltText } from "@/lib/images";
import { useRfq } from "@/lib/rfqContext";
import { MessageSquare, Plus, Check, ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onOpenQuickView?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

export function ProductCard({ product, onOpenQuickView, onQuickView }: ProductCardProps) {
  const { addItem, isInRfq } = useRfq();
  const inRfq = isInRfq(product.id);
  const waUrl = buildWhatsAppLink(buildProductQuoteMessage(product, "Product Catalogue Grid"), "ammar");

  const handleQuickView = () => {
    if (onQuickView) onQuickView(product);
    else if (onOpenQuickView) onOpenQuickView(product);
  };

  return (
    <div className="bg-white hover:bg-white border border-slate-200/90 hover:border-[#C9962B] rounded-xl p-4 sm:p-5 transition-all shadow-soft hover-lift flex flex-col justify-between relative group">
      <div>
        {/* Product Image Thumbnail */}
        <Link href={`/products/${product.category}/${product.slug || product.id}`} className="block relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-3 bg-[#F4F6FA] border border-slate-200 group-hover:border-[#C9962B]/50 transition-colors">
          <Image
            src={product.image || getImagePath(product.category)}
            alt={getBearingAltText({ partNumber: product.partNumber, name: product.name, categoryName: product.categoryName })}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Top Badge */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#C9962B]/10 text-[#C9962B] border border-[#C9962B]/30 px-2 py-0.5 rounded-md">
            {product.badge || "READY STOCK"}
          </span>
          <span className="text-[11px] font-mono text-emerald-600 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Manmad Stock
          </span>
        </div>

        {/* Part Number & Category */}
        <div className="mb-3">
          <Link href={`/products/${product.category}/${product.slug || product.id}`} className="hover:text-[#C9962B] transition-colors">
            <h3 className="font-heading font-extrabold text-2xl text-[#0B1B3D] tracking-tight uppercase">
              {product.partNumber}
            </h3>
          </Link>
          <span className="text-xs font-semibold text-slate-500 block mt-0.5">
            {product.categoryName}
          </span>
        </div>

        {/* Brands Available */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          <span className="text-[10px] font-mono text-slate-400">Brands:</span>
          {product.brands.map((b) => (
            <span key={b} className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#0B1B3D]/5 text-[#0B1B3D] border border-slate-200">
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Card Actions */}
      <div>
        <div className="grid grid-cols-5 gap-2 pt-2 border-t border-slate-100">
          {/* WhatsApp Quote Button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-4 min-h-[44px] bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-heading font-extrabold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-[#C9962B]"
            title={`Instant WhatsApp Price Quote for ${product.partNumber}`}
            aria-label={`Get WhatsApp Quote for ${product.partNumber}`}
          >
            <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none" />
            <span>WhatsApp Quote</span>
          </a>

          {/* Add to RFQ Button */}
          <button
            onClick={() => addItem(product)}
            className={`col-span-1 min-h-[44px] min-w-[44px] rounded-lg flex items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-[#C9962B] ${
              inRfq
                ? "bg-emerald-600 text-white"
                : "bg-[#0B1B3D] hover:bg-[#132752] text-[#E4B94F]"
            }`}
            title={inRfq ? "In Quote Sheet" : "Add to Multi-Item RFQ Sheet"}
            aria-label={inRfq ? `${product.partNumber} added to Quote Sheet` : `Add ${product.partNumber} to Quote Sheet`}
          >
            {inRfq ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </button>
        </div>

        {/* Bottom Details Links */}
        <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-100">
          <button
            onClick={handleQuickView}
            className="hover:text-[#8F6510] transition-colors min-h-[36px] py-1 inline-flex items-center"
            aria-label={`Quick specs for ${product.partNumber}`}
          >
            Quick Specs
          </button>
          <Link
            href={`/products/${product.category}/${product.slug || product.id}`}
            className="hover:text-[#8F6510] transition-colors inline-flex items-center gap-0.5 min-h-[36px] py-1"
            aria-label={`Full details page for ${product.partNumber}`}
          >
            <span>Full Page</span>
            <ArrowUpRight className="w-3 h-3 text-[#C9962B]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
