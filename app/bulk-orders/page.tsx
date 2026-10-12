"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/siteConfig";
import { 
  buildWhatsAppLink, 
  buildBulkEnquiryMessage, 
  WhatsAppRecipient, 
  DEFAULT_RECIPIENT, 
  WHATSAPP_CONTACTS 
} from "@/lib/whatsapp";
import { WhatsAppRecipientSelector } from "@/components/WhatsAppRecipientSelector";
import { 
  Truck, 
  Boxes, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare, 
  PhoneCall, 
  Building2, 
  Clock, 
  Layers,
  Sparkles,
  MapPin,
  Send
} from "lucide-react";

export default function BulkOrdersPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    city: "",
    partNumbers: "",
    estimatedQuantity: "",
    message: "",
  });

  const [recipient, setRecipient] = useState<WhatsAppRecipient>(DEFAULT_RECIPIENT);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.city) {
      alert("Please fill in your name, phone number, and city.");
      return;
    }

    const message = buildBulkEnquiryMessage(formData, "Wholesale & Bulk Orders Portal");
    const waUrl = buildWhatsAppLink(message, recipient);
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F6FA] pb-24 text-[#1A2536]">
      {/* Header Banner */}
      <div className="bg-[#0B1B3D] text-white pt-8 pb-14 border-b border-[#C9962B]/20 relative overflow-hidden">
        <div className="absolute inset-0 watermark-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Bulk Orders & Delivery", href: "/bulk-orders" }
            ]}
          />

          <div className="mt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#C9962B]/10 border border-[#C9962B]/30 text-[#E4B94F] text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <span>B2B Wholesale &amp; Fleet Procurement</span>
              <span className="text-slate-500">•</span>
              <span>All-India Delivery</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              Bulk Orders &amp; Delivery Across India
            </h1>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              Bulk and wholesale orders welcome for workshops, machine operators, and retailers with delivery across India.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={buildWhatsAppLink("Hello EZZI Bearing Suppliers, I would like to enquire about bulk bearing orders.", recipient)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl min-h-[44px] bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-bold text-sm transition-all shadow-md active:scale-95"
                aria-label="Enquire bulk order on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none" />
                <span>Enquire on WhatsApp ({WHATSAPP_CONTACTS[recipient].name.split(" ")[0]})</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-16">
        {/* Top 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] text-[#E4B94F] flex items-center justify-center mb-4">
              <Boxes className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-[#0B1B3D] uppercase mb-1">
              Bulk Orders Welcome
            </h3>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              Competitive pricing structures for wholesale quantities across SKF, TATA, XNO, and DSF brands.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] text-[#E4B94F] flex items-center justify-center mb-4">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-[#0B1B3D] uppercase mb-1">
              Delivery Across India
            </h3>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              Dependable transport and courier delivery arranged across Maharashtra and all states in India.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] text-[#E4B94F] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-[#0B1B3D] uppercase mb-1">
              Secure Packaging
            </h3>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              Bearings are packaged securely to prevent damage and contamination during transit.
            </p>
          </div>
        </div>

        {/* Main Grid: Logistics Process & Wholesale Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Logistics Process Details (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-soft">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C9962B] block mb-2">
                Order Process
              </span>
              <h2 className="font-heading font-extrabold text-2xl text-[#0B1B3D] uppercase mb-4">
                How We Handle Orders
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0B1B3D] text-[#E4B94F] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#0B1B3D] uppercase">
                      Send Part Numbers &amp; Quantities
                    </h4>
                    <p className="text-xs text-slate-600 font-sans mt-1 leading-relaxed">
                      Send your required bearing numbers and quantities on WhatsApp or via our enquiry form.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0B1B3D] text-[#E4B94F] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#0B1B3D] uppercase">
                      Quotation &amp; Availability
                    </h4>
                    <p className="text-xs text-slate-600 font-sans mt-1 leading-relaxed">
                      We check availability across our brands (SKF, TATA, XNO, DSF) and provide pricing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0B1B3D] text-[#E4B94F] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#0B1B3D] uppercase">
                      Packaging &amp; Delivery Across India
                    </h4>
                    <p className="text-xs text-slate-600 font-sans mt-1 leading-relaxed">
                      Orders are packed securely and handed over for delivery with transport details shared with you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Transport Logistics Note */}
              <div className="mt-8 pt-6 border-t border-slate-100 font-mono text-xs">
                <span className="font-bold text-slate-700 block mb-2 uppercase">
                  Delivery Coverage:
                </span>
                <p className="text-slate-600 font-sans text-xs">
                  We arrange delivery across India. Enquire for availability and transport options.
                </p>
              </div>
            </div>

            {/* Direct Phone Assistance Strip */}
            <div className="p-6 rounded-2xl bg-[#0B1B3D] text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#E4B94F] uppercase tracking-wider block">
                  Have Questions?
                </span>
                <span className="font-heading font-bold text-lg text-white block">
                  Speak Directly with Our Team
                </span>
                <span className="text-xs text-slate-300 font-mono">
                  +91 {siteConfig.contacts[0].phone}
                </span>
              </div>
              <a
                href={`tel:${siteConfig.contacts[0].phone}`}
                className="px-4 py-2.5 rounded-xl bg-[#C9962B] text-[#0B1B3D] font-bold text-xs uppercase font-mono hover:bg-[#E4B94F] transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>

          {/* Right Column: Wholesale & Bulk Enquiry Form (6 Cols) */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-soft">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C9962B] block mb-2">
              Instant WhatsApp Transmission
            </span>
            <h2 className="font-heading font-extrabold text-2xl text-[#0B1B3D] uppercase mb-2">
              Wholesale &amp; Bulk RFQ Form
            </h2>
            <p className="text-xs text-slate-500 font-sans mb-6">
              Fill in your requirements below. Clicking submit will automatically open WhatsApp with your formatted bill of materials for immediate rate confirmation.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>WhatsApp enquiry initiated! If WhatsApp didn't open, please click below.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#C9962B] font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                    Mobile / WhatsApp No. *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9822012345"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#C9962B] font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                    Company / Workshop (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Patel Auto Spares / Sugar Mill"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#C9962B] font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                    Delivery City &amp; State *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Pune, Maharashtra"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#C9962B] font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                  Required Bearing Part Numbers &amp; Sizes *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.partNumbers}
                  onChange={(e) => setFormData({ ...formData, partNumbers: e.target.value })}
                  placeholder="e.g. 6205-2RS (100 pcs), 32208 (50 pcs), SKF or TATA preferred"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#C9962B] font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                  Estimated Quantity / Order Frequency
                </label>
                <input
                  type="text"
                  value={formData.estimatedQuantity}
                  onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                  placeholder="e.g. 150 pieces total / Monthly requirement"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#C9962B] font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                  Additional Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Preferred brand or specific requirements"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#C9962B] font-sans"
                />
              </div>

              {/* WhatsApp Recipient Selector */}
              <div className="pt-2">
                <WhatsAppRecipientSelector 
                  selected={recipient} 
                  onChange={setRecipient} 
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-heading font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Submit Wholesale RFQ to {WHATSAPP_CONTACTS[recipient].name.split(" ")[0]}</span>
              </button>

              <p className="text-[11px] font-mono text-center text-slate-400">
                🔒 Direct transmission to {WHATSAPP_CONTACTS[recipient].name} ({WHATSAPP_CONTACTS[recipient].phone}). No data saved on external servers.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
