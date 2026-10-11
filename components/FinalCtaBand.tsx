import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Phone, MessageSquare, MapPin, ExternalLink, Clock } from "lucide-react";

export function FinalCtaBand() {
  const ammar = siteConfig.contacts[0];
  const shabbir = siteConfig.contacts[1];

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `EZZI Bearing Suppliers, Burhani Complex, Opp. Post Office, Bohri Compound, Manmad - 423104, Maharashtra, India`
  )}`;

  return (
    <section className="py-20 bg-[#F4F6FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1B3D] text-white rounded-2xl p-8 sm:p-12 border-2 border-[#C9962B] shadow-lift watermark-pattern relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold text-[#E4B94F] uppercase tracking-wider block mb-2">
                READY DEPOT STOCK • PAN-INDIA DISPATCH
              </span>

              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight mb-4">
                Need Fast Bearing Availability &amp; Wholesale Rates?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base font-sans mb-8 max-w-xl leading-relaxed">
                Speak directly with Ammar Sakriwala or Shabbir Sakriwala. Share your part numbers and quantities for an immediate official quotation.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello Ammar bhai, I want to inquire about bearing stock availability.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-7 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-heading font-extrabold text-base uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-md active:scale-95"
                >
                  <MessageSquare className="w-5 h-5 fill-slate-950 stroke-none" />
                  <span>Instant WhatsApp Enquiry</span>
                </a>

                <a
                  href={`tel:+91${ammar.phone}`}
                  className="py-4 px-7 rounded-xl bg-[#132752] hover:bg-[#183060] border border-[#C9962B]/50 text-white font-heading font-extrabold text-base uppercase tracking-wider flex items-center gap-2 transition-all hover-lift"
                >
                  <Phone className="w-5 h-5 text-[#E4B94F]" />
                  <span>Call +91 {ammar.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Mini Contact & Depot Map Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#132752] border border-[#C9962B]/40 rounded-xl p-6 shadow-soft space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-heading font-bold text-sm text-[#E4B94F] uppercase tracking-wider">
                    Physical Stock Depot
                  </span>
                  <span className="text-[10px] font-mono bg-[#0B1B3D] px-2 py-0.5 rounded text-emerald-400 font-bold border border-emerald-500/30">
                    Open Mon - Sat
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E4B94F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-heading font-extrabold text-white text-base block uppercase">
                      EZZI Bearing Suppliers
                    </span>
                    <p className="text-xs text-slate-300 font-sans mt-0.5 leading-relaxed">
                      {siteConfig.address}
                    </p>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#E4B94F] hover:underline mt-2"
                    >
                      <span>Open Location on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C9962B]" />
                    <span>09:00 AM - 08:30 PM</span>
                  </div>
                  <span className="text-[#E4B94F] font-bold">24/7 Breakdown WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCtaBand;
