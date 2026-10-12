"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import {
  Phone,
  MessageSquare,
  MapPin,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Sparkles
} from "lucide-react";

export function BusinessCardShowcase() {
  const [addressCopied, setAddressCopied] = useState(false);
  const shabbir = siteConfig.contacts.primary;
  const ammar = siteConfig.contacts.secondary;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(siteConfig.address);
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 2500);
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${siteConfig.name}, ${siteConfig.address}`
  )}`;

  return (
    <section id="why-ezzi" className="py-20 bg-[#F4F6FA] border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Diamond Motif */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9962B]/10 border border-[#C9962B]/30 text-[#C9962B] font-mono text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BUSINESS DETAILS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#0B1B3D] uppercase tracking-tight">
            Direct Contacts
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
            <span className="text-[#C9962B] text-xs">◆</span>
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
          </div>

          <p className="text-sm sm:text-base text-slate-600 font-sans">
            Connect directly with Shabbir and Ammar for quotes, bulk orders, and bearing enquiries.
          </p>
        </div>

        {/* The Digital Visiting Card (Navy & Gold Container) */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-[#0B1B3D] text-white p-6 sm:p-10 border-2 border-[#C9962B] shadow-lift overflow-hidden watermark-pattern">
            {/* Top Bar of Visiting Card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#C9962B]/40">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo-white.svg"
                  alt={siteConfig.name}
                  width={240}
                  height={56}
                  className="h-12 w-auto object-contain"
                />
              </div>

              {/* Tagline Badge */}
              <div className="px-4 py-2 rounded-xl bg-[#132752] border border-[#C9962B]/50 self-start sm:self-auto">
                <span className="text-xs font-heading font-bold text-[#E4B94F] tracking-widest uppercase block">
                  {siteConfig.tagline}
                </span>
              </div>
            </div>

            {/* Slogan */}
            <div className="my-5 py-3 px-4 rounded-xl bg-[#132752] border border-[#C9962B]/40 text-center">
              <p className="text-sm sm:text-base font-heading font-bold text-[#E4B94F] tracking-wider uppercase">
                &ldquo;{siteConfig.slogan}&rdquo;
              </p>
            </div>

            {/* 4 Value Pillars from Visiting Card */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-6">
              {siteConfig.valuePillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-3.5 rounded-xl bg-[#07122A] border border-white/10 text-center flex flex-col justify-between"
                >
                  <span className="text-xs font-heading font-extrabold text-white uppercase block">
                    {pillar.title}
                  </span>
                  <span className="text-[11px] font-mono text-[#E4B94F] mt-1 block">
                    {pillar.subtitle}
                  </span>
                  <span className="text-[10px] text-slate-300 mt-1 block leading-tight">
                    {pillar.description}
                  </span>
                </div>
              ))}
            </div>

            {/* Stockist Brands Banner */}
            {/* <div className="p-3 rounded-xl bg-[#132752] border border-[#C9962B]/30 my-4 text-center"> */}
            {/* <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 block mb-1"> */}
            {/* Stockist of SKF, TATA, XNO, DSF: */}
            {/* </span> */}
            {/* <p className="text-xs font-mono font-bold text-[#E4B94F]"> */}
            {/* XNO • DSF • SKF • TATA • BALL &amp; ROLLER TAPER BEARINGS • HAND TOOLS */}
            {/* </p> */}
            {/* </div> */}

            {/* Contacts & Address Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#C9962B]/40">
              {/* Left Column: Direct Phone Contacts */}
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#E4B94F] font-bold block">
                  Direct Contacts:
                </span>

                {/* Shabbir Sakriwala */}
                <div className="p-3.5 rounded-xl bg-[#132752] border border-[#C9962B]/30 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-heading font-extrabold text-white uppercase">
                      {shabbir.name}
                    </h4>
                    <a
                      href={`tel:${shabbir.phoneClean}`}
                      className="text-xs font-mono font-bold text-[#E4B94F] hover:underline mt-0.5 block"
                    >
                      {shabbir.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`tel:${shabbir.phoneClean}`}
                      className="p-2 rounded-lg bg-[#0B1B3D] hover:bg-black text-[#E4B94F] transition-colors"
                      title="Call Shabbir Sakriwala"
                      aria-label="Call Shabbir Sakriwala"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://wa.me/${shabbir.whatsappClean}?text=${encodeURIComponent("Hello EZZI Bearing Suppliers, I am contacting you via your website for a quote.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#25D366] text-slate-950 transition-colors"
                      title="WhatsApp"
                      aria-label="WhatsApp Shabbir Sakriwala"
                    >
                      <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none" />
                    </a>
                  </div>
                </div>

                {/* Ammar Sakriwala */}
                <div className="p-3.5 rounded-xl bg-[#132752] border border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-heading font-extrabold text-white uppercase">
                      {ammar.name}
                    </h4>
                    <a
                      href={`tel:${ammar.phoneClean}`}
                      className="text-xs font-mono font-bold text-[#E4B94F] hover:underline mt-0.5 block"
                    >
                      {ammar.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`tel:${ammar.phoneClean}`}
                      className="p-2 rounded-lg bg-[#0B1B3D] hover:bg-black text-[#E4B94F] transition-colors"
                      title="Call Ammar"
                      aria-label="Call Ammar Sakriwala"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://wa.me/${ammar.whatsappClean}?text=${encodeURIComponent("Hello EZZI Bearing Suppliers, I am contacting you via your website for a quote.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#25D366] text-slate-950 transition-colors"
                      title="WhatsApp"
                      aria-label="WhatsApp Ammar Sakriwala"
                    >
                      <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 pl-1">
                  <Mail className="w-4 h-4 text-[#E4B94F]" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                    {siteConfig.displayEmail || "ezzybearing@gmail.com"}
                  </a>
                </div>
              </div>

              {/* Right Column: Physical Address */}
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#E4B94F] font-bold block">
                  Address &amp; Location:
                </span>

                <div className="p-4 rounded-xl bg-[#132752] border border-white/10 space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#E4B94F] shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-200 leading-relaxed font-sans">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                {/* Address Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyAddress}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#0B1B3D] border border-[#C9962B]/50 hover:border-[#E4B94F] text-xs font-mono text-slate-200 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                  >
                    {addressCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#132752] border border-[#C9962B]/50 hover:border-[#E4B94F] text-xs font-mono text-[#E4B94F] flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View Map</span>
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

export default BusinessCardShowcase;
