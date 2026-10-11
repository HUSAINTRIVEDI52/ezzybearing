import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/siteConfig";
import { 
  PhoneCall, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  AlertCircle, 
  Building2, 
  Navigation, 
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Manmad, Maharashtra",
  description: "Contact Shabbir and Ammar Sakriwala at EZZI Bearing Suppliers in Manmad. Call, WhatsApp, email, or visit our Burhani Complex warehouse in Bohri Compound.",
  keywords: [
    "contact ezzi bearing suppliers",
    "shabbir sakriwala phone",
    "ammar sakriwala contact",
    "bearing supplier manmad address",
    "bearing shop near bohri masjid manmad"
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact`,
  },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description: "Contact Shabbir and Ammar Sakriwala at EZZI Bearing Suppliers in Manmad. Call, WhatsApp, email, or visit our warehouse.",
    url: `${siteConfig.siteUrl}/contact`,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${siteConfig.name}`,
    description: "Contact Shabbir and Ammar Sakriwala at EZZI Bearing Suppliers in Manmad.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  const shabbir = siteConfig.contacts.primary;
  const ammar = siteConfig.contacts.secondary;

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14967.62569651532!2d74.520448!3d20.252445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc2c8f8b8e05cb%3A0xb2ce1e5138f71aa7!2sManmad%2C%20Maharashtra%20423104!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <div className="min-h-screen bg-[#F4F6FA] pb-24 text-[#1A2536]">
      {/* Hero Banner */}
      <div className="bg-[#0B1B3D] text-white pt-8 pb-14 border-b border-[#C9962B]/20 relative overflow-hidden">
        <div className="absolute inset-0 watermark-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Contact Us", href: "/contact" }
            ]}
          />

          <div className="mt-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#C9962B]/10 border border-[#C9962B]/30 text-[#E4B94F] text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <span>Trade Assistance &amp; Depot Inquiries</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              Get in Touch with EZZI
            </h1>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              Connect directly with our partners for product availability, quotations, and bulk order enquiries.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${ammar.whatsappClean}?text=${encodeURIComponent("Hello Ammar bhai, I want to inquire about bearing stock from your contact page.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl min-h-[44px] bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-bold text-sm transition-all shadow-md active:scale-95"
                aria-label={`Chat on WhatsApp with ${ammar.name}`}
              >
                <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none" />
                <span>Chat on WhatsApp ({ammar.phone})</span>
              </a>
              <a
                href={`tel:${shabbir.phoneClean}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl min-h-[44px] bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/20 transition-all active:scale-95"
                aria-label={`Call ${shabbir.name} at ${shabbir.phone}`}
              >
                <PhoneCall className="w-4 h-4 text-[#E4B94F]" />
                <span>Call Trade Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contacts & Address Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone & WhatsApp Contacts Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-soft space-y-6">
              <h2 className="font-heading font-extrabold text-2xl text-[#0B1B3D] uppercase tracking-tight flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-[#C9962B]" />
                <span>Direct Contact Personnel</span>
              </h2>

              {/* Shabbir Sakriwala (Managing Partner) */}
              <div className="p-4 rounded-xl bg-[#F4F6FA] border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-bold text-lg text-[#0B1B3D] uppercase">
                    {shabbir.name}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-[#C9962B]/10 text-[#C9962B] border border-[#C9962B]/20">
                    {shabbir.role}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-sans mb-3">
                  Wholesale procurement, brands stocked, and trade enquiries.
                </p>
                <div className="flex items-center gap-2 font-mono text-xs">
                  <a
                    href={`tel:${shabbir.phoneClean}`}
                    className="flex-1 py-2 px-3 rounded-lg bg-[#0B1B3D] hover:bg-slate-800 text-white font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#E4B94F]" />
                    <span>Call {shabbir.phone}</span>
                  </a>
                  <a
                    href={`https://wa.me/${shabbir.whatsappClean}?text=Hello%20Shabbir%20bhai,%20I%20have%20a%20bearing%20enquiry.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Ammar Sakriwala (Partner & Operations) */}
              <div className="p-4 rounded-xl bg-[#F4F6FA] border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-bold text-lg text-[#0B1B3D] uppercase">
                    {ammar.name}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-[#C9962B]/10 text-[#C9962B] border border-[#C9962B]/20">
                    {ammar.role}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-sans mb-3">
                  Operations, packaging, delivery across India, and order enquiries.
                </p>
                <div className="flex items-center gap-2 font-mono text-xs">
                  <a
                    href={`tel:${ammar.phoneClean}`}
                    className="flex-1 py-2 px-3 rounded-lg bg-[#0B1B3D] hover:bg-slate-800 text-white font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#E4B94F]" />
                    <span>Call {ammar.phone}</span>
                  </a>
                  <a
                    href={`https://wa.me/${ammar.whatsappClean}?text=Hello%20Ammar%20bhai,%20I%20have%20a%20dispatch%20enquiry.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Email & Floating Action */}
              <div className="pt-2 border-t border-slate-100 flex items-center gap-3 font-mono text-xs text-slate-600">
                <Mail className="w-4 h-4 text-[#C9962B] shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[10px]">Email Enquiries:</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-bold text-[#0B1B3D] hover:text-[#C9962B] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Store Hours Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-soft space-y-5">
              <h3 className="font-heading font-extrabold text-xl text-[#0B1B3D] uppercase tracking-tight flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C9962B]" />
                <span>Warehouse Location</span>
              </h3>

              <div className="font-sans text-sm text-slate-700 leading-relaxed space-y-1">
                <p className="font-bold text-[#0B1B3D]">EZZI BEARING SUPPLIERS</p>
                <p>Burhani Complex, Opp. Post Office</p>
                <p>Near Bohri Masjid, Bohri Compound</p>
                <p>Manmad - 423104, District Nashik</p>
                <p>Maharashtra, India</p>
              </div>

              {/* Business Hours */}
              <div className="p-4 rounded-xl bg-[#F4F6FA] border border-slate-200 text-slate-800 text-xs font-mono space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#0B1B3D]">
                  <Clock className="w-4 h-4 text-[#C9962B]" />
                  <span>Business Hours</span>
                </div>
                <div className="space-y-1 text-slate-700">
                  <div className="flex justify-between">
                    <span>Monday – Saturday:</span>
                    <span className="font-bold">09:00 AM – 08:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-bold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Google Maps External Direction Link */}
              <a
                href="https://maps.google.com/?q=Burhani+Complex+Bohri+Compound+Manmad+Maharashtra+423104"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0B1B3D] hover:text-[#C9962B] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C9962B]" />
                <span>Open in Google Maps Application</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C9962B]" />
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Map iframe & Quick Quote Card (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Embedded Google Map */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-soft overflow-hidden">
              <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-100 mb-3">
                <span className="text-xs font-mono font-bold text-[#0B1B3D] uppercase flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C9962B]" />
                  <span>Interactive Map: Bohri Compound, Manmad</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  PIN: 423104
                </span>
              </div>
              <div className="w-full h-[380px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative">
                <iframe
                  title="EZZI Bearing Suppliers Manmad Location Map"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <p className="text-[11px] font-mono text-slate-500 mt-3 px-2">
                📍 Situated near Bohri Masjid and Opposite the Post Office in Manmad.
              </p>
            </div>

            {/* Quick WhatsApp RFQ Callout Band */}
            <div className="bg-[#0B1B3D] text-white rounded-2xl p-8 border border-[#C9962B]/30 relative overflow-hidden">
              <div className="absolute inset-0 watermark-pattern opacity-10 pointer-events-none" />
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E4B94F] block mb-1">
                    Have an Immediate BOM to Quote?
                  </span>
                  <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-white">
                    Send Instant WhatsApp Enquiry
                  </h3>
                  <p className="mt-1 text-slate-300 text-xs font-sans">
                    Share a photo of your bearing sample, part number, or bill of materials.
                  </p>
                </div>

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20EZZI%20Bearing%20Suppliers,%20I%20would%20like%20to%20request%20a%20quote.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
