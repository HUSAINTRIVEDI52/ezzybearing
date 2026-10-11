import React from "react";
import { Package, Truck, MessageSquare, Award, ShoppingBag } from "lucide-react";

export function WhyChooseEzzi() {
  const cards = [
    {
      icon: <Package className="w-6 h-6 text-[#C9962B]" />,
      title: "Wide Range",
      description: "Comprehensive catalogue of ball and roller bearings in standard and specialized industrial sizes."
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-[#0B1B3D]" />,
      title: "Bulk & Wholesale Orders",
      description: "Competitive wholesale pricing and dedicated trade order handling."
    },
    {
      icon: <Truck className="w-6 h-6 text-[#C9962B]" />,
      title: "Delivery Across India",
      description: "Reliable freight and parcel dispatch arranged to destinations across India."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[#0B1B3D]" />,
      title: "Quotes on WhatsApp",
      description: "Direct trade assistance. Send us your bearing number for pricing and availability."
    }
  ];

  return (
    <section className="py-14 lg:py-20 bg-[#F4F6FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Diamond Motif */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1B3D]/5 border border-slate-300 text-[#0B1B3D] font-mono text-xs font-bold mb-3">
            <Award className="w-3.5 h-3.5 text-[#C9962B]" />
            <span>TRADE ADVANTAGES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1B3D] uppercase tracking-tight">
            Why Choose EZZI
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
            <span className="text-[#C9962B] text-xs">◆</span>
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
          </div>

          <p className="text-sm text-slate-600 font-sans">
            Built on Quality, Precision, and Trust — supplying bearing solutions with reliable service.
          </p>
        </div>

        {/* 4 Cards Only Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200/90 hover:border-[#C9962B] rounded-xl p-6 shadow-soft hover-lift transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F4F6FA] border border-slate-200 flex items-center justify-center mb-4">
                  {c.icon}
                </div>
                <h3 className="font-heading font-extrabold text-xl text-[#0B1B3D] uppercase tracking-wide mb-2">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseEzzi;
