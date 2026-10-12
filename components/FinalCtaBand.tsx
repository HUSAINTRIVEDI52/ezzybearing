import React from "react";
import { siteConfig } from "@/lib/siteConfig";
import { Phone, MessageSquare, MapPin, ExternalLink } from "lucide-react";

export function FinalCtaBand() {
  const shabbir = siteConfig.contacts.primary;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `EZZI Bearing Suppliers, Burhani Complex, Opp. Post Office, Bohri Compound, Manmad - 423104, Maharashtra, India`
  )}`;

  return (
    <section className="py-14 lg:py-20 bg-[#0B1B3D] text-white border-t-2 border-[#C9962B]/30 watermark-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono font-bold text-[#E4B94F] uppercase tracking-wider block mb-2">
              DELIVERY ACROSS INDIA
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight mb-3">
              Need Bearing Availability &amp; Wholesale Rates?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-sans mb-6 max-w-xl leading-relaxed">
              Share your required part numbers and quantities for a quotation. Bulk orders welcome.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello EZZI Bearing Suppliers, I want to enquire about bearing availability.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-heading font-extrabold text-sm uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-md active:scale-95"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950 stroke-none" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href={`tel:${shabbir.phoneClean}`}
                className="py-3.5 px-6 rounded-xl bg-[#132752] hover:bg-[#183060] border border-[#C9962B]/50 text-white font-heading font-extrabold text-sm uppercase tracking-wider flex items-center gap-2 transition-all hover-lift"
              >
                <Phone className="w-4 h-4 text-[#E4B94F]" />
                <span>Call {shabbir.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Address & Google Maps link */}
          <div className="lg:col-span-5">
            <div className="bg-[#132752] border border-[#C9962B]/40 rounded-xl p-6 shadow-soft space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E4B94F] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-extrabold text-white text-base block uppercase">
                    EZZI Bearing Suppliers
                  </h3>
                  <p className="text-xs text-slate-300 font-sans mt-1 leading-relaxed">
                    {siteConfig.address}
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#E4B94F] hover:underline mt-3"
                  >
                    <span>Open Location on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
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
