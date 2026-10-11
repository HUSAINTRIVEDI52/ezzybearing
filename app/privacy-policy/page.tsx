import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/siteConfig";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and B2B communication transparency guidelines for EZZI Bearing Suppliers, Manmad.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/privacy-policy`,
  },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description: "Privacy policy and B2B communication transparency guidelines for EZZI Bearing Suppliers, Manmad.",
    url: `${siteConfig.siteUrl}/privacy-policy`,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Privacy Policy | ${siteConfig.name}`,
    description: "Privacy policy and B2B communication transparency guidelines for EZZI Bearing Suppliers, Manmad.",
    images: ["/og-image.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F4F6FA] pb-24 text-[#1A2536]">
      {/* Hero Banner */}
      <div className="bg-[#0B1B3D] text-white pt-8 pb-14 border-b border-[#C9962B]/20 relative overflow-hidden">
        <div className="absolute inset-0 watermark-pattern opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Privacy Policy", href: "/privacy-policy" }
            ]}
          />

          <div className="mt-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#C9962B]/10 border border-[#C9962B]/30 text-[#E4B94F] text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <span>B2B Transparency &amp; Data Ethics</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
              Privacy Policy
            </h1>
            <p className="mt-2 text-slate-300 text-sm font-sans">
              Last updated: October 2026. How EZZI Bearing Suppliers handles client RFQs and communications.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-soft space-y-8 font-sans text-slate-700 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading font-extrabold text-2xl text-[#0B1B3D] uppercase flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#C9962B]" />
              <span>1. Zero Online Database Architecture</span>
            </h2>
            <p>
              EZZI Bearing Suppliers operates this website as an informational digital catalogue and direct WhatsApp Request-for-Quote (RFQ) bridge. We do not operate a user registration database, customer accounts, payment gateway storage, or credit card collection systems on this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-extrabold text-2xl text-[#0B1B3D] uppercase flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#C9962B]" />
              <span>2. Direct WhatsApp Communication</span>
            </h2>
            <p>
              When you submit a quote request or click an RFQ link, your required part numbers and contact details are prefilled into WhatsApp and transmitted directly to our partners (Shabbir Sakriwala and Ammar Sakriwala). This communication is subject to WhatsApp's standard end-to-end encryption protocols.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-extrabold text-2xl text-[#0B1B3D] uppercase flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#C9962B]" />
              <span>3. Information We Collect</span>
            </h2>
            <p>
              We only receive information that you voluntarily communicate to us during commercial transactions, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm font-mono">
              <li>Name and contact phone/WhatsApp number</li>
              <li>Company or workshop name</li>
              <li>Delivery address, city, and state for transport waybills</li>
              <li>Billing and delivery details</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-extrabold text-2xl text-[#0B1B3D] uppercase flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#C9962B]" />
              <span>4. Data Use &amp; Confidentiality</span>
            </h2>
            <p>
              Your contact and purchase inquiry data is strictly used for quotation fulfillment, parcel logistics coordination with freight and transport carriers for delivery across India. We never sell, rent, or trade client information to third-party marketing brokers.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-200">
            <h3 className="font-heading font-bold text-lg text-[#0B1B3D] uppercase">
              Questions Regarding Privacy?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              Contact our partners directly at: EZZI Bearing Suppliers, Burhani Complex, Opp. Post Office, Near Bohri Masjid, Bohri Compound, Manmad - 423104, Maharashtra, India. Email: <a href={`mailto:${siteConfig.email}`} className="text-[#0B1B3D] font-bold hover:underline">{siteConfig.email}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
