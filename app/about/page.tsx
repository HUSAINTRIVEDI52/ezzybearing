import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/siteConfig";
import { 
  ShieldCheck, 
  Target, 
  Award, 
  MapPin, 
  PhoneCall, 
  MessageSquare, 
  Truck, 
  CheckCircle2, 
  Building2, 
  Boxes,
  Users,
  Compass,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - EZZI Bearing Suppliers | Manmad, Maharashtra",
  description: "Learn about EZZI Bearing Suppliers, stockist of SKF, TATA, XNO, DSF bearings and hand tools in Manmad, Maharashtra. Founded on Quality, Precision, and Trust.",
  keywords: [
    "about ezzi bearing suppliers",
    "shabbir sakriwala manmad",
    "ammar sakriwala bearing",
    "bearing stockist bohari compound manmad",
    "bearing supplier maharashtra"
  ]
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F4F6FA] pb-24 text-[#1A2536]">
      {/* Hero Header */}
      <div className="bg-[#0B1B3D] text-white pt-8 pb-14 border-b border-[#C9962B]/20 relative overflow-hidden">
        <div className="absolute inset-0 watermark-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "About Us", href: "/about" }
            ]}
          />

          <div className="mt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#C9962B]/10 border border-[#C9962B]/30 text-[#E4B94F] text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <span>{siteConfig.tagline}</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              About EZZI Bearing Suppliers
            </h1>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              Headquartered at Bohri Compound in the strategic railway transit hub of Manmad, Maharashtra, EZZI Bearing Suppliers provides industrial plants, workshops, and fleet operators with all types of bearing solutions under one roof.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello Ammar bhai, I am reading about EZZI Bearing Suppliers and would like to connect.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl min-h-[44px] bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-bold text-sm transition-all shadow-md active:scale-95"
                aria-label="Connect on WhatsApp with EZZI Bearing Suppliers"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:+91${siteConfig.contacts[0].phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl min-h-[44px] bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/20 transition-all active:scale-95"
                aria-label="Call EZZI trade desk"
              >
                <PhoneCall className="w-4 h-4 text-[#E4B94F]" />
                <span>Call {siteConfig.contacts[0].phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-16">
        {/* Company Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C9962B] uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Our Story &amp; Purpose</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1B3D] uppercase tracking-tight">
              Rooted in Manmad, Delivering Across India
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                EZZI Bearing Suppliers was established to solve a critical challenge faced by machine workshops, agricultural operators, and manufacturing units: prompt access to authentic, accurately dimensioned bearings without long supply delays.
              </p>
              <p>
                Operating from Burhani Complex, Bohri Compound in Manmad, we sit directly beside one of Western India's most prominent railway junctions. This strategic location enables our team to quickly dispatch critical bearings via Central Railway parcel vans and premier road transport networks directly to industrial clusters in Nashik, Pune, Mumbai, Jalgaon, Dhule, Madhya Pradesh, and across all states in India.
              </p>
            </div>

            <div className="pt-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1B3D] mb-3">
                Core Mission:
              </h3>
              <p className="p-4 rounded-xl bg-white border border-slate-200 text-slate-700 text-sm font-sans italic border-l-4 border-l-[#C9962B]">
                &ldquo;To provide transparent, rapid, and genuine bearing solutions that eliminate machinery downtime for Indian manufacturers, farmers, and transport operators.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Highlights Card with Warehouse Image */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-soft">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
              <Image
                src="/images/warehouse-depot.jpg"
                alt="EZZI Bearing Suppliers central warehouse and distribution depot in Manmad, Maharashtra"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[10px] font-mono text-[#E4B94F] uppercase tracking-wider block font-bold">
                  Bohri Compound Depot
                </span>
                <span className="font-heading font-extrabold text-base uppercase">
                  Central Warehouse Logistics Hub
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="font-heading font-bold text-xl text-[#0B1B3D] uppercase mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#C9962B]" />
                <span>Operations Snapshot</span>
              </h3>
            <div className="space-y-3 font-mono text-xs text-slate-600">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-400">Head Office:</span>
                <span className="font-bold text-[#0B1B3D] text-right">Burhani Complex, Manmad</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-400">District / State:</span>
                <span className="font-bold text-[#0B1B3D]">Nashik, Maharashtra</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-400">Inventory Breadth:</span>
                <span className="font-bold text-[#0B1B3D]">198+ Ready Product Series</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-400">Stockist Brands:</span>
                <span className="font-bold text-[#0B1B3D]">SKF, TATA, XNO, DSF</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-400">Service Area:</span>
                <span className="font-bold text-emerald-600">All India Delivery</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-400">Dispatch Speed:</span>
                <span className="font-bold text-[#C9962B]">Same Day / 24 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* The Three Pillars: Quality, Precision, Trust */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C9962B] block mb-1">
              Guiding Principles
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-[#0B1B3D] uppercase tracking-tight">
              Quality • Precision • Trust
            </h2>
            <p className="mt-2 text-slate-500 text-sm font-sans">
              The three core values represented on our visiting card that steer every order and client partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-[#0B1B3D] text-[#E4B94F] flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-xl text-[#0B1B3D] uppercase mb-2">
                Quality
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                We stock only inspected bearings manufactured to rigorous metallurgical standards. Each bearing features tested hardness, refined raceway finishes, and resilient cages to withstand demanding industrial stress.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-[#0B1B3D] text-[#E4B94F] flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-xl text-[#0B1B3D] uppercase mb-2">
                Precision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                In rolling elements, fractions of a millimeter define equipment life. We supply verified standard and C3 radial clearances, precise bore-to-outer diameter ratios, and correct contact angles for reliable fits.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-[#0B1B3D] text-[#E4B94F] flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-xl text-[#0B1B3D] uppercase mb-2">
                Trust
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Our business is built upon long-term relationships with mechanics, fleet managers, plant engineers, and dealers who rely on honest stock counts, transparent pricing, and dependable delivery timelines.
              </p>
            </div>
          </div>
        </div>

        {/* What We Supply */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-soft">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C9962B] block mb-1">
              Comprehensive Catalogue
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0B1B3D] uppercase tracking-tight">
              What We Supply Under One Roof
            </h2>
            <p className="mt-2 text-slate-500 text-sm font-sans">
              From heavy plant gearboxes to small precision motors, our Manmad inventory covers:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#F4F6FA] border border-slate-200">
              <h4 className="font-bold text-[#0B1B3D] text-sm uppercase mb-2">Ball Bearings</h4>
              <p className="text-slate-600 font-sans text-xs">
                Deep groove ball bearings (6000, 6200, 6300 series), double rubber seal (2RS), metal shields (ZZ), and snap ring grooves (NR).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F4F6FA] border border-slate-200">
              <h4 className="font-bold text-[#0B1B3D] text-sm uppercase mb-2">Tapered Roller Bearings</h4>
              <p className="text-slate-600 font-sans text-xs">
                Metric 30200, 30300, 32200 series and matched inch cone &amp; cup sets for vehicle hubs, differentials, and industrial speed reducers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F4F6FA] border border-slate-200">
              <h4 className="font-bold text-[#0B1B3D] text-sm uppercase mb-2">Automotive Hubs &amp; Clutch</h4>
              <p className="text-slate-600 font-sans text-xs">
                Clutch release assemblies (T101, T119, T126, T138), Generation-1 sealed wheel hub bearings (BAH series), and special WRB rollers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F4F6FA] border border-slate-200">
              <h4 className="font-bold text-[#0B1B3D] text-sm uppercase mb-2">Pillow &amp; Plummer Blocks</h4>
              <p className="text-slate-600 font-sans text-xs">
                Mounted cast iron pillow blocks (UCP), four-bolt flange units (UCF), two-bolt flange units (UCFL), and heavy split plummer housings.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F4F6FA] border border-slate-200">
              <h4 className="font-bold text-[#0B1B3D] text-sm uppercase mb-2">Spherical &amp; Cylindrical Rollers</h4>
              <p className="text-slate-600 font-sans text-xs">
                Heavy-capacity 22200 and NU series rollers for vibratory screens, quarry crushers, continuous casting rolls, and sugar mill drives.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F4F6FA] border border-slate-200">
              <h4 className="font-bold text-[#0B1B3D] text-sm uppercase mb-2">Industrial Hand Tools &amp; Accessories</h4>
              <p className="text-slate-600 font-sans text-xs">
                Bearing pullers, precision mounting tools, grease fittings, retaining rings, and maintenance accessories for mechanical workshops.
              </p>
            </div>
          </div>
        </div>

        {/* Team & Contact Block */}
        <div className="bg-[#0B1B3D] text-white rounded-2xl p-8 sm:p-10 border border-[#C9962B]/30 relative overflow-hidden">
          <div className="absolute inset-0 watermark-pattern opacity-10 pointer-events-none" />
          <div className="relative z-10">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E4B94F] block mb-1">
                Leadership &amp; Trade Contacts
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                Connect Directly with the Owners
              </h2>
              <p className="mt-2 text-slate-300 text-sm font-sans">
                At EZZI Bearing Suppliers, you speak directly with experienced trade decision makers who understand part cross-references and immediate procurement needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Shabbir Sakriwala */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-heading font-black text-2xl text-white uppercase">
                        Shabbir Sakriwala
                      </h3>
                      <span className="text-xs font-mono text-[#E4B94F] block">
                        Managing Partner • Trade &amp; Procurement
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#C9962B]/20 border border-[#C9962B] flex items-center justify-center text-[#E4B94F] font-heading font-bold text-lg">
                      SS
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 font-sans mb-6">
                    Specializing in bulk orders, OEM brand verification, technical cross-references, and industrial contract supply.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                  <a
                    href="tel:9272395247"
                    className="flex-1 py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-bold border border-white/20 flex items-center justify-center gap-2 transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#E4B94F]" />
                    <span>Call 92723 95247</span>
                  </a>
                  <a
                    href="https://wa.me/919272395247?text=Hello%20Shabbir%20bhai,%20I%20would%20like%20to%20enquire%20about%20bearings."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Ammar Sakriwala */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-heading font-black text-2xl text-white uppercase">
                        Ammar Sakriwala
                      </h3>
                      <span className="text-xs font-mono text-[#E4B94F] block">
                        Partner • Depot Operations &amp; Logistics
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#C9962B]/20 border border-[#C9962B] flex items-center justify-center text-[#E4B94F] font-heading font-bold text-lg">
                      AS
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 font-sans mb-6">
                    Managing daily parcel dispatches, express railway cargo handovers, order packaging, and inventory stock tracking.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                  <a
                    href="tel:8830721850"
                    className="flex-1 py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-bold border border-white/20 flex items-center justify-center gap-2 transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#E4B94F]" />
                    <span>Call 88307 21850</span>
                  </a>
                  <a
                    href="https://wa.me/918830721850?text=Hello%20Ammar%20bhai,%20I%20would%20like%20to%20enquire%20about%20bearing%20delivery."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
