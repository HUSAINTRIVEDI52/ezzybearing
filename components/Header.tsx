"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";
import { useRfq } from "@/lib/rfqContext";
import { Phone, Menu, X, FileText, ArrowRight } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const { totalItems, openDrawer } = useRfq();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const ammar = siteConfig.contacts[0];
  const shabbir = siteConfig.contacts[1];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-[#0B1B3D] text-white border-b border-[#C9962B]/25 transition-all duration-300 shadow-md ${
          isScrolled ? "py-2 shadow-xl" : "py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo-white.svg"
              alt={`${siteConfig.name} - Quality Precision Trust`}
              width={220}
              height={50}
              priority
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? "h-10" : "h-11 sm:h-12"
              }`}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Brands", href: "/brands" },
              { label: "About", href: "/about" },
              { label: "Industries", href: "/industries" },
              { label: "Contact", href: "/contact" },
            ].map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`transition-colors py-1 relative group font-sans ${
                    isActive ? "text-[#E4B94F] font-semibold" : "text-slate-200 hover:text-[#E4B94F]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#C9962B] transition-all duration-200 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Click to Call on Mobile */}
            <a
              href={`tel:+91${ammar.phone}`}
              className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-[#132752] text-[#E4B94F] border border-[#C9962B]/30 hover:bg-[#183060] transition-colors focus-visible:ring-2 focus-visible:ring-[#C9962B]"
              title={`Call ${ammar.name}`}
              aria-label="Call Ammar"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Quote Sheet Basket Trigger */}
            <button
              onClick={openDrawer}
              className="relative min-h-[44px] min-w-[44px] px-3 py-2 rounded-xl bg-[#132752] hover:bg-[#183060] border border-[#C9962B]/40 text-white flex items-center justify-center gap-1.5 transition-all focus-visible:ring-2 focus-visible:ring-[#C9962B]"
              title="Open Quote Sheet / BOM"
              aria-label={`View RFQ Sheet (${totalItems} items)`}
            >
              <FileText className="w-4 h-4 text-[#E4B94F]" />
              <span className="text-xs font-mono font-bold hidden sm:inline">RFQ</span>
              {totalItems > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#C9962B] text-slate-950 font-mono text-[10px] font-extrabold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Gold Request a Quote Button */}
            <Link
              href="/request-quote"
              className="min-h-[44px] px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#C9962B] hover:bg-[#E4B94F] text-slate-950 font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#C9962B]"
            >
              <span>Request a Quote</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-slate-200 hover:text-white hover:bg-[#132752] transition-colors focus-visible:ring-2 focus-visible:ring-[#C9962B]"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-in panel */}
          <div className="relative z-10 w-full max-w-xs bg-[#0B1B3D] text-white h-full shadow-2xl flex flex-col justify-between p-6 border-l border-[#C9962B]/30">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#C9962B]/20">
                <Image
                  src="/logo-white.svg"
                  alt={siteConfig.name}
                  width={180}
                  height={42}
                  className="h-9 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#132752] focus-visible:ring-2 focus-visible:ring-[#C9962B]"
                  aria-label="Close mobile menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-2 py-6">
                {[
                  { label: "Home", href: "/" },
                  { label: "Products & Catalogue", href: "/products" },
                  { label: "Brands We Stock", href: "/brands" },
                  { label: "About EZZI", href: "/about" },
                  { label: "Industries Served", href: "/industries" },
                  { label: "Bulk Orders & Freight", href: "/bulk-orders" },
                  { label: "Technical Blog", href: "/blog" },
                  { label: "Contact Us", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading font-extrabold text-lg uppercase tracking-wider text-slate-200 hover:text-[#E4B94F] flex items-center justify-between min-h-[44px] py-2 px-1 border-b border-white/5 focus-visible:ring-2 focus-visible:ring-[#C9962B]"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#C9962B]" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="space-y-3 pt-4 border-t border-[#C9962B]/20">
              <Link
                href="/request-quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[44px] py-3 rounded-xl bg-[#C9962B] text-slate-950 font-heading font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-95 focus-visible:ring-2 focus-visible:ring-[#C9962B]"
              >
                <span>Request a Quote</span>
              </Link>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello Ammar bhai, I want to inquire about bearing stock availability.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] py-3 rounded-xl bg-[#25D366] text-slate-950 font-heading font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-95 focus-visible:ring-2 focus-visible:ring-[#C9962B]"
                aria-label="Chat on WhatsApp about bearing availability"
              >
                <span>Chat on WhatsApp</span>
              </a>

              <p className="text-center text-[11px] font-mono text-slate-400 pt-1">
                Call: +91 {ammar.phone} / +91 {shabbir.phone}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
