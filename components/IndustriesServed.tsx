"use client";

import React from "react";
import Link from "next/link";
import { 
  Factory, 
  Truck, 
  Tractor, 
  Hammer, 
  Wrench, 
  Layers,
  ArrowRight
} from "lucide-react";

export function IndustriesServed() {
  const industries = [
    {
      id: "automotive-commercial",
      name: "Automotive & Fleets",
      icon: <Truck className="w-6 h-6 text-[#0B1B3D]" />,
      summary: "Commonly uses wheel hub, taper roller, and clutch release bearings.",
    },
    {
      id: "agriculture-agro",
      name: "Agriculture & Agro",
      icon: <Tractor className="w-6 h-6 text-[#C9962B]" />,
      summary: "Commonly uses deep groove ball bearings and taper roller bearings.",
    },
    {
      id: "textile",
      name: "Textile Machinery",
      icon: <Layers className="w-6 h-6 text-[#0B1B3D]" />,
      summary: "Commonly uses precision deep groove and miniature ball bearings.",
    },
    {
      id: "cement-quarry",
      name: "Cement & Heavy Industry",
      icon: <Hammer className="w-6 h-6 text-[#C9962B]" />,
      summary: "Commonly uses spherical roller and cylindrical roller bearings.",
    },
    {
      id: "steel",
      name: "Steel & Metal Processing",
      icon: <Factory className="w-6 h-6 text-[#0B1B3D]" />,
      summary: "Commonly uses heavy duty roller bearings and thrust bearings.",
    },
    {
      id: "sugar-mills",
      name: "Sugar Mills & Distilleries",
      icon: <Wrench className="w-6 h-6 text-[#C9962B]" />,
      summary: "Commonly uses spherical roller, cylindrical roller, and deep groove bearings.",
    },
  ];

  return (
    <section id="industries" className="py-14 lg:py-20 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Diamond Motif */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1B3D]/5 border border-slate-300 text-[#0B1B3D] font-mono text-xs font-bold mb-3">
            <Factory className="w-3.5 h-3.5 text-[#C9962B]" />
            <span>INDUSTRY APPLICATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1B3D] uppercase tracking-tight">
            Industries Served
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
            <span className="text-[#C9962B] text-xs">◆</span>
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
          </div>

          <p className="text-sm text-slate-600 font-sans">
            Tailored rolling element solutions for primary machinery and plant sectors across India.
          </p>
        </div>

        {/* 6 Simple Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <Link
              key={ind.id}
              href="/industries"
              className="bg-[#F4F6FA] border border-slate-200 hover:border-[#C9962B] rounded-xl p-6 shadow-soft hover-lift transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4">
                  {ind.icon}
                </div>

                <h3 className="text-xl font-heading font-extrabold text-[#0B1B3D] group-hover:text-[#C9962B] transition-colors mb-2 uppercase">
                  {ind.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {ind.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center gap-1 text-xs font-mono font-bold text-[#0B1B3D] group-hover:text-[#C9962B] transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesServed;
