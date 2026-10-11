"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import { buildWhatsAppLink, buildProductQuoteMessage } from "@/lib/whatsapp";
import { getImagePath, getBearingAltText } from "@/lib/images";
import { useRfq } from "@/lib/rfqContext";
import { MessageSquare, Plus, Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onOpenQuickView?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, isInRfq } = useRfq();
  const inRfq = isInRfq(product.id);
  const waUrl = buildWhatsAppLink(buildProductQuoteMessage(product, "Product Catalogue"), "ammar");
  const productHref = `/products/${product.category}/${product.slug || product.id}`;

  return (
    <div className="bg-white border border-slate-200/90 hover:border-[#C9962B] rounded-xl p-4 sm:p-5 transition-all shadow-soft hover-lift flex flex-col justify-between relative group">
      <div>
        {/* Product Image Thumbnail */}
        <Link
          href={productHref}
          className="block relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-3 bg-[#F4F6FA] border border-slate-200 group-hover:border-[#C9962B]/50 transition-colors"
        >
          <Image
            src={product.image || getImagePath(product.category)}
            alt={getBearingAltText({ partNumber: product.partNumber, name: product.name, categoryName: product.categoryName })}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Article Number (Specs Link) & Bearing Type */}
        <div className="mb-4">
          <Link
            href={productHref}
            className="hover:text-[#C9962B] transition-colors"
            title={`View specs for ${product.partNumber}`}
          >
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0B1B3D] tracking-tight uppercase break-words line-clamp-2">
              {product.partNumber}
            </h3>
          </Link>
          <span className="text-xs font-semibold text-slate-500 block mt-0.5">
            {product.categoryName}
          </span>
        </div>
      </div>

      {/* Card Actions: ONE gold Request Quote button + small + Add to enquiry button */}
      <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[42px] px-3 rounded-lg bg-[#C9962B] hover:bg-[#b38320] text-[#0B1B3D] font-heading font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95"
          title={`Request Quote for ${product.partNumber}`}
          aria-label={`Request Quote for ${product.partNumber}`}
        >
          <MessageSquare className="w-3.5 h-3.5 fill-[#0B1B3D] stroke-none" />
          <span>Request Quote</span>
        </a>

        <button
          onClick={() => addItem(product)}
          className={`min-h-[42px] px-2.5 rounded-lg border text-xs font-mono font-bold flex items-center justify-center gap-1 transition-all ${
            inRfq
              ? "bg-[#0B1B3D] text-[#E4B94F] border-[#0B1B3D]"
              : "bg-white border-slate-300 text-slate-700 hover:border-[#0B1B3D] hover:text-[#0B1B3D]"
          }`}
          title={inRfq ? "In enquiry" : "Add to enquiry"}
          aria-label={inRfq ? `${product.partNumber} added to enquiry` : `Add ${product.partNumber} to enquiry`}
        >
          {inRfq ? <Check className="w-3.5 h-3.5 text-[#E4B94F]" /> : <Plus className="w-3.5 h-3.5" />}
          <span className="text-[11px] font-sans">{inRfq ? "Added" : "Enquiry"}</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
