import React from "react";
import { Package, Truck, ShieldCheck, Clock, BadgeCheck, Award } from "lucide-react";

export function WhyChooseEzzi() {
  const cards = [
    {
      icon: <Package className="w-7 h-7 text-[#C9962B]" />,
      title: "Wide Range in Ready Stock",
      description: "Over 198+ bearing series in physical inventory at our Manmad depot, ranging from miniature ball bearings to heavy sugar mill spherical rollers."
    },
    {
      icon: <BadgeCheck className="w-7 h-7 text-[#0B1B3D]" />,
      title: "Bulk & Wholesale Orders",
      description: "Tailored procurement pricing, GST invoices, and dedicated batch packing for manufacturing plants, sugar mills, and commercial workshops."
    },
    {
      icon: <Truck className="w-7 h-7 text-[#C9962B]" />,
      title: "All-India Rapid Delivery",
      description: "Strategic location at Manmad Junction Central Railway Cargo Hub ensures same-day packing and rapid overnight parcel dispatch across India."
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#0B1B3D]" />,
      title: "100% Genuine Products",
      description: "Direct OEM supply chain pipeline for SKF, TATA, XNO, and DSF. Zero counterfeit risk ensuring machine safety and long life."
    },
    {
      icon: <Clock className="w-7 h-7 text-[#C9962B]" />,
      title: "Quick Quotes on WhatsApp",
      description: "No tedious inquiry forms or delayed emails. Share your part numbers and receive wholesale quotes within 30 minutes."
    },
    {
      icon: <Award className="w-7 h-7 text-[#0B1B3D]" />,
      title: "Over 25 Years of Trust",
      description: "Family-run stockist backed by deep technical expertise. Personalized assistance from Shabbir Sakriwala and Ammar Sakriwala."
    }
  ];

  return (
    <section className="py-20 bg-[#F4F6FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Diamond Motif */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1B3D]/5 border border-slate-300 text-[#0B1B3D] font-mono text-xs font-bold mb-3">
            <Award className="w-3.5 h-3.5 text-[#C9962B]" />
            <span>TRADE ADVANTAGES</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#0B1B3D] uppercase tracking-tight">
            Why Industry Leaders Choose EZZI
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
            <span className="text-[#C9962B] text-xs">◆</span>
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
          </div>

          <p className="text-sm sm:text-base text-slate-600 font-sans">
            Built on Quality, Precision, and Trust — supplying authentic bearing solutions with reliable service across India.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200/90 hover:border-[#C9962B] rounded-xl p-6 shadow-soft hover-lift transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F4F6FA] border border-slate-200 flex items-center justify-center mb-4">
                {c.icon}
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[#0B1B3D] uppercase tracking-wide mb-2">
                {c.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseEzzi;
