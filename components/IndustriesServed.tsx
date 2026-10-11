"use client";

import React from "react";
import { INDUSTRIES } from "@/lib/products";
import { siteConfig } from "@/lib/siteConfig";
import { 
  Factory, 
  Truck, 
  Tractor, 
  Train, 
  Hammer, 
  Wrench, 
  MapPin, 
  MessageSquare 
} from "lucide-react";

export function IndustriesServed() {
  const getIcon = (id: string) => {
    switch (id) {
      case "sugar-mills": return <Factory className="w-6 h-6 text-[#C9962B]" />;
      case "automotive-commercial": return <Truck className="w-6 h-6 text-[#0B1B3D]" />;
      case "agriculture-agro": return <Tractor className="w-6 h-6 text-[#C9962B]" />;
      case "railways-logistics": return <Train className="w-6 h-6 text-[#0B1B3D]" />;
      case "cement-quarry": return <Hammer className="w-6 h-6 text-[#C9962B]" />;
      case "fabrication-tools": return <Wrench className="w-6 h-6 text-[#0B1B3D]" />;
      default: return <Factory className="w-6 h-6 text-[#C9962B]" />;
    }
  };

  return (
    <section id="industries" className="py-16 bg-[#F4F6FA] border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Diamond Motif */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1B3D]/5 border border-slate-300 text-[#0B1B3D] font-mono text-xs font-bold mb-3">
            <Factory className="w-3.5 h-3.5 text-[#C9962B]" />
            <span>HEAVY INDUSTRY &amp; FLEET SOLUTIONS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#0B1B3D] uppercase tracking-tight">
            Engineered For Western India&apos;s Core Industries
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
            <span className="text-[#C9962B] text-xs">◆</span>
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
          </div>

          <p className="text-sm sm:text-base text-slate-600 font-sans">
            From emergency breakdown bearings for sugar mill crushing seasons to high-mileage fleet wheel hub bearings and agricultural rotavator spares, we supply critical components on time.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => {
            const waIndustryUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              `Hello Ammar bhai, we have an inquiry for ${ind.name} bearings. Please share details and availability.`
            )}`;

            return (
              <div
                key={ind.id}
                className="bg-white border border-slate-200/90 hover:border-[#C9962B] rounded-xl p-6 shadow-soft hover-lift transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#F4F6FA] border border-slate-200">
                      {getIcon(ind.id)}
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Depot Ready
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading font-extrabold text-[#0B1B3D] mb-2 uppercase">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {ind.description}
                  </p>

                  {/* Typical Bearings */}
                  <div className="mb-4">
                    <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5 font-bold">
                      Frequent Series in Stock:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.keyBearings.map((kb) => (
                        <span 
                          key={kb} 
                          className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-[#F4F6FA] text-[#0B1B3D] border border-slate-200"
                        >
                          {kb}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hub Advantage & Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#C9962B] shrink-0" />
                    <span className="line-clamp-1">{ind.hubAdvantage}</span>
                  </div>
                  <a
                    href={waIndustryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 transition-colors shrink-0 ml-2"
                    title={`Inquire for ${ind.name}`}
                    aria-label={`Inquire for ${ind.name}`}
                  >
                    <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IndustriesServed;
