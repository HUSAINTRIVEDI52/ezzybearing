"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/siteConfig";
import { 
  buildWhatsAppLink, 
  buildQuoteFormMessage, 
  WhatsAppRecipient, 
  DEFAULT_RECIPIENT, 
  WHATSAPP_CONTACTS 
} from "@/lib/whatsapp";
import { WhatsAppRecipientSelector } from "@/components/WhatsAppRecipientSelector";
import { 
  MessageSquare, 
  PhoneCall, 
  CheckCircle2, 
  ShieldCheck, 
  Send, 
  Clock, 
  MapPin, 
  HelpCircle,
  Sparkles
} from "lucide-react";

export default function RequestQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    city: "",
    bearingNumbers: "",
    quantity: "",
    message: "",
  });

  const [recipient, setRecipient] = useState<WhatsAppRecipient>(DEFAULT_RECIPIENT);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.city.trim()) {
      setErrorMsg("Please enter your delivery city or state.");
      return;
    }
    if (!formData.bearingNumbers.trim()) {
      setErrorMsg("Please provide at least one bearing part number or description.");
      return;
    }

    const message = buildQuoteFormMessage(formData, "Request a Quote Page");
    const waUrl = buildWhatsAppLink(message, recipient);
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F6FA] pb-24 text-[#1A2536]">
      {/* Hero Banner */}
      <div className="bg-[#0B1B3D] text-white pt-8 pb-14 border-b border-[#C9962B]/20 relative overflow-hidden">
        <div className="absolute inset-0 watermark-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Request a Quote", href: "/request-quote" }
            ]}
          />

          <div className="mt-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#C9962B]/10 border border-[#C9962B]/30 text-[#E4B94F] text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <span>Rapid B2B Price &amp; Stock Estimation</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              Request a Bearing Quote
            </h1>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              Provide your required part numbers or bearing specifications below. Our trade desk will calculate availability across SKF, TATA, XNO, and DSF and respond via WhatsApp within 15–30 minutes during business hours.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={buildWhatsAppLink("Hello, I want to request an instant bearing quote directly on WhatsApp.", recipient)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl min-h-[44px] bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-bold text-sm transition-all shadow-md active:scale-95"
                aria-label="Request quote directly on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none" />
                <span>Instant Quote on WhatsApp ({WHATSAPP_CONTACTS[recipient].name.split(" ")[0]})</span>
              </a>
              <span className="text-xs text-slate-300 font-mono hidden sm:inline">or fill the RFQ form below</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: The Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-soft">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-black text-2xl text-[#0B1B3D] uppercase">
                  Quote Request Sent!
                </h3>
                <p className="text-sm text-slate-600 font-sans max-w-md mx-auto">
                  Your WhatsApp application has opened with the formatted request. If it didn't open automatically, please click below.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 font-mono text-xs font-bold text-slate-700 hover:border-[#C9962B]"
                  >
                    Send Another Request
                  </button>
                  <a
                    href={`tel:${siteConfig.contacts[0].phone}`}
                    className="px-5 py-2.5 rounded-xl bg-[#0B1B3D] text-[#E4B94F] font-mono text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call To Confirm</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
                    ⚠️ {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Salim Merchant"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#C9962B] font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98220 12345"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#C9962B] font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                      Company / Workshop Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Precision Gears Pvt Ltd"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#C9962B] font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                      Delivery City / State *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Nashik, Maharashtra"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#C9962B] font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                    Bearing Number(s) or Description *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.bearingNumbers}
                    onChange={(e) => setFormData({ ...formData, bearingNumbers: e.target.value })}
                    placeholder="e.g. 6205-2RS, 32208, UCP 205, or bore 25mm OD 52mm"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#C9962B] font-mono"
                  />
                  <span className="text-[11px] font-mono text-slate-400 mt-1 block">
                    You can enter multiple bearing numbers separated by commas or lines.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                    Quantity Required
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 10 pieces / 1 carton / sample piece"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#C9962B] font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                    Additional Message / Brand Preference
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Please quote SKF and TATA options, urgent delivery required"
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
                  <span>Send Quote Request to {WHATSAPP_CONTACTS[recipient].name.split(" ")[0]}</span>
                </button>

                <p className="text-[11px] font-mono text-center text-slate-400">
                  🔒 No database storage. Transmitted directly to {WHATSAPP_CONTACTS[recipient].name} ({WHATSAPP_CONTACTS[recipient].phone}).
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Fallback "Or Call Us", Hours, & Stock Guarantee (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* "Or Call Us" Fallback Card */}
            <div className="bg-[#0B1B3D] text-white rounded-2xl p-8 border border-[#C9962B]/30 relative overflow-hidden">
              <div className="absolute inset-0 watermark-pattern opacity-10 pointer-events-none" />
              <div className="relative z-10">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E4B94F] block mb-2">
                  Prefer Direct Phone Support?
                </span>
                <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-white mb-2">
                  Call Our Trade Desk Directly
                </h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
                  For emergency breakdown replacements or complex mechanical dimensions, call our partners directly at our Manmad hub.
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <a
                    href={`tel:${siteConfig.contacts[0].phone}`}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <PhoneCall className="w-4 h-4 text-[#E4B94F]" />
                      <div>
                        <span className="font-bold block text-sm">{siteConfig.contacts[0].name}</span>
                        <span className="text-[10px] text-slate-400">Managing Partner</span>
                      </div>
                    </div>
                    <span className="text-[#E4B94F] font-bold">{siteConfig.contacts[0].phone}</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.contacts[1].phone}`}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <PhoneCall className="w-4 h-4 text-[#E4B94F]" />
                      <div>
                        <span className="font-bold block text-sm">{siteConfig.contacts[1].name}</span>
                        <span className="text-[10px] text-slate-400">Operations &amp; Logistics</span>
                      </div>
                    </div>
                    <span className="text-[#E4B94F] font-bold">{siteConfig.contacts[1].phone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Warehouse Dispatch Info Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft font-mono text-xs space-y-3">
              <h4 className="font-heading font-extrabold text-sm uppercase text-[#0B1B3D] tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C9962B]" />
                <span>Warehouse Address</span>
              </h4>
              <p className="text-slate-600 font-sans text-xs leading-relaxed">
                {siteConfig.address as unknown as string}
              </p>
              <div className="pt-2 border-t border-slate-100 text-slate-500 space-y-1">
                <div className="flex justify-between">
                  <span>Quotes Turnaround:</span>
                  <span className="text-[#0B1B3D] font-bold">15–30 Mins</span>
                </div>
                <div className="flex justify-between">
                  <span>Dispatch Node:</span>
                  <span className="text-[#0B1B3D] font-bold">Manmad Jn. / V-Trans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
