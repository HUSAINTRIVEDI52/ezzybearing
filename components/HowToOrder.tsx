import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Search, MessageSquare, Truck, ArrowRight } from "lucide-react";

export function HowToOrder() {
  const steps = [
    {
      num: "01",
      icon: <Search className="w-6 h-6 text-[#C9962B]" />,
      title: "Find Your Bearing",
      desc: "Use our instant part finder or browse categories to select the exact article numbers, types, and dimensions required for your machine."
    },
    {
      num: "02",
      icon: <MessageSquare className="w-6 h-6 text-[#25D366]" />,
      title: "Send WhatsApp Enquiry",
      desc: "Click WhatsApp Quote or add multiple bearings to your Quote Sheet (BOM). Your requirement message formats automatically."
    },
    {
      num: "03",
      icon: <Truck className="w-6 h-6 text-[#C9962B]" />,
      title: "Receive Quote & Delivery",
      desc: "Receive wholesale rates, brand options, and dispatch ETA within 30 minutes. Orders packed same-day for express delivery across India."
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9962B]/10 border border-[#C9962B]/30 text-[#C9962B] font-mono text-xs font-bold mb-3">
            <span>FAST 3-STEP PROCUREMENT</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#0B1B3D] uppercase tracking-tight">
            How to Get a Quote &amp; Order
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
            <span className="text-[#C9962B] text-xs">◆</span>
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
          </div>

          <p className="text-sm sm:text-base text-slate-600 font-sans">
            Direct, fast B2B bearing sourcing designed for purchase managers, engineers, and workshop mechanics.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#F4F6FA] border border-slate-200 rounded-xl p-8 shadow-soft hover-lift transition-all relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading font-extrabold text-4xl text-[#0B1B3D]/30">
                    {s.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    {s.icon}
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-[#0B1B3D] uppercase tracking-wide mb-3">
                  {s.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs font-mono font-bold text-[#C9962B]">
                Step {idx + 1} of 3
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B1B3D] hover:bg-[#132752] text-[#E4B94F] font-heading font-extrabold text-base uppercase tracking-wider shadow-md hover-lift transition-all"
          >
            <span>Start by Browsing Products</span>
            <ArrowRight className="w-5 h-5 text-[#E4B94F]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HowToOrder;
