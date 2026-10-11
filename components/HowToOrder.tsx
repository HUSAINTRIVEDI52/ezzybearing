import React from "react";
import Link from "next/link";
import { Search, MessageSquare, Truck, ArrowRight } from "lucide-react";

export function HowToOrder() {
  const steps = [
    {
      num: "01",
      icon: <Search className="w-6 h-6 text-[#C9962B]" />,
      title: "Find Your Bearing",
      desc: "Search by article number or browse categories to select the required bearing types and specifications."
    },
    {
      num: "02",
      icon: <MessageSquare className="w-6 h-6 text-[#0B1B3D]" />,
      title: "Send WhatsApp Enquiry",
      desc: "Send an enquiry directly on WhatsApp with your required part numbers, preferred brands, and quantities."
    },
    {
      num: "03",
      icon: <Truck className="w-6 h-6 text-[#C9962B]" />,
      title: "Receive Quote & Delivery",
      desc: "Receive wholesale rates and availability confirmation with express parcel dispatch across India."
    }
  ];

  return (
    <section className="py-14 lg:py-20 bg-[#F4F6FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1B3D]/5 border border-slate-300 text-[#0B1B3D] font-mono text-xs font-bold mb-3">
            <span>PROCUREMENT PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1B3D] uppercase tracking-tight">
            How to Order
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
            <span className="text-[#C9962B] text-xs">◆</span>
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
          </div>

          <p className="text-sm text-slate-600 font-sans">
            Direct, simple bearing procurement for workshops, industrial plants, and commercial fleets.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 hover:border-[#C9962B] rounded-xl p-6 shadow-soft hover-lift transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-extrabold text-3xl text-[#0B1B3D]/30">
                    {s.num}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-[#F4F6FA] border border-slate-200 flex items-center justify-center">
                    {s.icon}
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-xl text-[#0B1B3D] uppercase tracking-wide mb-2">
                  {s.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0B1B3D] hover:bg-[#132752] text-[#E4B94F] font-heading font-extrabold text-xs uppercase tracking-wider shadow-sm hover-lift transition-all"
          >
            <span>Start by Browsing Products</span>
            <ArrowRight className="w-4 h-4 text-[#E4B94F]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HowToOrder;
