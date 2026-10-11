"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { CATEGORIES } from "@/lib/products";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp,
  ExternalLink
} from "lucide-react";

export function Footer() {
  const ammar = siteConfig.contacts[0];
  const shabbir = siteConfig.contacts[1];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `EZZI Bearing Suppliers, Burhani Complex, Opp. Post Office, Bohri Compound, Manmad - 423104, Maharashtra, India`
  )}`;

  return (
    <footer className="bg-[#0B1B3D] text-slate-300 font-sans border-t-2 border-[#C9962B] watermark-pattern">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: About & Stockist Credentials (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-white.svg"
                alt={siteConfig.name}
                width={240}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-sm">
              All types of bearing solutions under one roof. Authorized stockist of SKF, TATA, XNO, DSF, and world-class bearings for sugar factories, automotive fleets, commercial trucks, agricultural machinery, and industrial plants across India.
            </p>

            <div className="p-3.5 rounded-xl bg-[#132752] border border-[#C9962B]/30 space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#E4B94F] block font-bold">
                Official Stockist Brands:
              </span>
              <p className="text-xs font-mono font-bold text-white">
                {siteConfig.brands.join(" • ")}
              </p>
            </div>
          </div>

          {/* Col 2: Bearing Types */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-extrabold uppercase tracking-wider text-[#E4B94F]">
              Bearing Categories
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/products/${cat.id}`} className="hover:text-[#E4B94F] transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-[#E4B94F] hover:underline">
                  View All Categories &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-extrabold uppercase tracking-wider text-[#E4B94F]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="/" className="hover:text-[#E4B94F] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#E4B94F] transition-colors">Product Directory</Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-[#E4B94F] transition-colors">Brands Portfolio</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E4B94F] transition-colors">About EZZI</Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#E4B94F] transition-colors">Industries Served</Link>
              </li>
              <li>
                <Link href="/bulk-orders" className="hover:text-[#E4B94F] transition-colors">Bulk Orders &amp; Delivery</Link>
              </li>
              <li>
                <Link href="/request-quote" className="hover:text-[#E4B94F] transition-colors">Request a Quote</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#E4B94F] transition-colors">Technical Articles</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#E4B94F] transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Depot Contacts & Map Link */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-extrabold uppercase tracking-wider text-[#E4B94F]">
              Trade Desk &amp; Depot
            </h4>
            <div className="space-y-2.5 text-xs font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E4B94F] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 block">
                    {siteConfig.address}
                  </span>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#E4B94F] hover:underline font-mono text-[11px] mt-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 font-mono">
                <Phone className="w-4 h-4 text-[#E4B94F] shrink-0" />
                <div>
                  <a href={`tel:+91${ammar.phone}`} className="text-white hover:text-[#E4B94F] block font-bold">
                    Ammar: +91 {ammar.phone}
                  </a>
                  <a href={`tel:+91${shabbir.phone}`} className="text-slate-300 hover:text-[#E4B94F] block font-bold">
                    Shabbir: +91 {shabbir.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 font-mono">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-slate-200 hover:text-white">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 pt-6 border-t border-[#C9962B]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved. Manmad, Nashik, Maharashtra.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#E4B94F]">
              Quality • Precision • Trust
            </span>
            <button
              onClick={scrollToTop}
              className="min-h-[44px] min-w-[44px] px-3 py-2 rounded-lg bg-[#132752] border border-[#C9962B]/30 text-slate-200 hover:text-white transition-colors flex items-center justify-center gap-1 focus-visible:ring-2 focus-visible:ring-[#C9962B]"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#E4B94F]" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
