import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { MessageSquare, ArrowRight, ShieldCheck, Award, Package, Clock, Phone, Sparkles } from "lucide-react";

export function Hero() {
  const shabbir = siteConfig.contacts[0];

  return (
    <section className="relative bg-[#0B1B3D] text-white pt-14 pb-20 overflow-hidden watermark-pattern border-b border-[#C9962B]/30">
      {/* Decorative Gear SVG Watermark in Corner */}
      <div className="absolute -right-20 -bottom-20 w-[420px] h-[420px] pointer-events-none opacity-[0.05] text-white">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4" strokeDasharray="8 4" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="14" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7">
            {/* Stockist Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132752] border border-[#C9962B]/50 text-[#E4B94F] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E4B94F] animate-pulse" />
              <span>STOCKIST • SKF • TATA • XNO • DSF</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-5 uppercase">
              All Types of <span className="text-[#E4B94F]">Bearing Solutions</span> Under <span className="underline decoration-[#C9962B] decoration-4 underline-offset-8">One Roof</span>
            </h1>

            {/* Subline */}
            <div className="flex items-center gap-3 my-4">
              <span className="h-px w-10 bg-[#C9962B]" />
              <span className="font-heading text-lg sm:text-xl font-bold uppercase tracking-widest text-[#E4B94F]">
                {siteConfig.tagline}
              </span>
              <span className="text-[#C9962B]">◆</span>
            </div>

            <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed mb-8 font-sans">
              Authorised stockist of SKF, TATA, XNO, and DSF ball &amp; roller bearings with all-India express delivery.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello EZZI Bearing Suppliers, I would like to get a quote on WhatsApp.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-heading font-bold text-sm uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-lg active:scale-95"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Get a Quote on WhatsApp</span>
              </a>

              {/* Browse Catalogue */}
              <Link
                href="/products"
                className="py-3.5 px-6 rounded-xl bg-[#132752] hover:bg-[#183060] border border-[#C9962B]/50 text-white font-heading font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-all hover-lift"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4 text-[#E4B94F]" />
              </Link>
            </div>
          </div>

          {/* Hero Right Visual: One large clean bearing image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#C9962B]/40 shadow-2xl group bg-[#132752]">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/hero-bearing.jpg"
                  alt="SKF TATA XNO DSF industrial precision ball and roller bearings - EZZI Bearing Suppliers"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] via-transparent to-transparent opacity-50" />
              </div>
            </div>
          </div>
        </div>

        {/* Trust Strip: Premium Quality, Trusted Brands, Wide Range of Bearings, Reliable Service */}
        <div className="mt-12 pt-8 border-t border-[#C9962B]/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#132752]/70 border border-[#C9962B]/25 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#C9962B]/15 border border-[#C9962B]/40 flex items-center justify-center text-[#E4B94F] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                  Premium Quality
                </h4>
                <p className="text-[11px] text-slate-300 font-sans">
                  Genuine industrial-grade bearings
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#132752]/70 border border-[#C9962B]/25 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#C9962B]/15 border border-[#C9962B]/40 flex items-center justify-center text-[#E4B94F] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                  Trusted Brands
                </h4>
                <p className="text-[11px] text-slate-300 font-sans">
                  SKF, TATA, XNO, DSF
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#132752]/70 border border-[#C9962B]/25 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#C9962B]/15 border border-[#C9962B]/40 flex items-center justify-center text-[#E4B94F] shrink-0">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                  Wide Range of Bearings
                </h4>
                <p className="text-[11px] text-slate-300 font-sans">
                  Deep groove, tapered, spherical &amp; more
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#132752]/70 border border-[#C9962B]/25 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#C9962B]/15 border border-[#C9962B]/40 flex items-center justify-center text-[#E4B94F] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                  Reliable Service
                </h4>
                <p className="text-[11px] text-slate-300 font-sans">
                  Prompt support &amp; pan-India dispatch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
