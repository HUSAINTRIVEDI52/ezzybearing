import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CATEGORIES, CategoryInfo } from "@/lib/products";
import { getImagePath, getBearingAltText } from "@/lib/images";
import { ArrowRight, Layers } from "lucide-react";

interface CategoryGridProps {
  onSelectCategory?: (categoryId: string) => void;
  categories?: CategoryInfo[];
}

export function CategoryGrid({ onSelectCategory, categories = CATEGORIES }: CategoryGridProps) {
  return (
    <section id="categories" className="py-16 bg-[#F4F6FA] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Diamond Motif */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#8F6510] bg-[#C9962B]/10 border border-[#C9962B]/30 px-3.5 py-1 rounded-full mb-3">
            <Layers className="w-3.5 h-3.5 text-[#8F6510]" />
            <span>PRODUCT CLASSIFICATIONS</span>
          </div>

          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-[#0B1B3D] uppercase tracking-tight mb-2">
            Explore Bearing Categories
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <span className="h-px w-12 bg-[#C9962B]/40"></span>
            <span className="text-[#C9962B] text-xs">◆</span>
            <span className="h-px w-12 bg-[#C9962B]/40"></span>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From deep groove ball bearings and metric tapered rollers to clutch release units, 
            snap ring series, and wheel hub bearings — find the exact component for your application.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const cardContent = (
              <>
                <div>
                  {/* Category Image Thumbnail */}
                  <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-4 bg-[#F4F6FA] border border-slate-200 group-hover:border-[#C9962B]/50 transition-colors">
                    <Image
                      src={getImagePath(cat.id)}
                      alt={getBearingAltText({ categoryName: cat.name })}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Header: Short Code & Count Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[#8F6510] bg-[#C9962B]/10 px-2.5 py-1 rounded-md border border-[#C9962B]/20">
                      {cat.code}
                    </span>
                    <span className="text-xs font-mono font-semibold text-slate-600">
                      {cat.count} items
                    </span>
                  </div>

                  {/* Category Title */}
                  <h3 className="font-heading font-extrabold text-xl text-[#0B1B3D] group-hover:text-[#8F6510] transition-colors uppercase leading-tight mb-2">
                    {cat.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {cat.description}
                  </p>

                  {/* Common Series */}
                  <div className="text-[11px] font-mono text-slate-600 bg-[#F4F6FA] p-2.5 rounded-lg border border-slate-200">
                    <span className="font-bold text-[#0B1B3D] block mb-0.5">Key Series:</span>
                    <span className="line-clamp-1">{cat.commonSeries}</span>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-heading font-bold text-[#0B1B3D] group-hover:text-[#8F6510] uppercase tracking-wider">
                  <span>Browse Category</span>
                  <ArrowRight className="w-4 h-4 text-[#8F6510] group-hover:translate-x-1 transition-transform" />
                </div>
              </>
            );

            if (onSelectCategory) {
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className="text-left bg-white border border-slate-200/90 hover:border-[#C9962B] rounded-xl p-6 shadow-soft hover-lift transition-all group flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-[#C9962B]"
                >
                  {cardContent}
                </button>
              );
            }

            return (
              <Link
                key={cat.id}
                href={`/products/${cat.id}`}
                className="bg-white border border-slate-200/90 hover:border-[#C9962B] rounded-xl p-6 shadow-soft hover-lift transition-all group flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-[#C9962B]"
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CategoryGrid;
