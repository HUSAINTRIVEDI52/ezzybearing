import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { 
  getAllProducts, 
  getProductBySlug, 
  getCategoryById, 
  getRelatedProducts 
} from "@/lib/products";
import { siteConfig, getProductWhatsAppUrl } from "@/lib/siteConfig";
import { getImagePath, getBearingAltText } from "@/lib/images";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailActions } from "@/components/ProductDetailActions";
import { 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Layers, 
  ArrowLeft,
  PhoneCall,
  MessageSquare,
  Sparkles,
  Truck,
  Building2,
  FileText
} from "lucide-react";

interface ProductPageProps {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({
    category: p.category,
    slug: p.slug || p.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.category, params.slug);
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  // The title passed to the layout template (%s | EZZI Bearing Suppliers)
  const title = product.name;
  const fullPageTitle = `${product.name} | ${siteConfig.name}`;
  const canonicalUrl = `${siteConfig.siteUrl}/products/${product.category}/${product.slug || product.id}`;
  const description = `Buy authentic ${product.name} (${product.d}x${product.D}x${product.B} mm). In stock at EZZI Bearing Suppliers, Manmad with all-India express delivery.`;

  return {
    title,
    description,
    keywords: [
      product.partNumber,
      `bearing ${product.partNumber}`,
      `${product.partNumber} dimensions`,
      `${product.d}x${product.D}x${product.B} bearing`,
      ...product.brands.map((b) => `${b} ${product.partNumber}`),
      product.categoryName,
      "bearing stockist manmad",
      "industrial bearing supplier"
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullPageTitle,
      description,
      type: "website",
      url: canonicalUrl,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          type: "image/png",
          alt: `${product.name} - ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullPageTitle,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.category, params.slug);

  if (!product) {
    notFound();
  }

  const categoryInfo = getCategoryById(product.category);
  const relatedProducts = getRelatedProducts(product, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `${siteConfig.siteUrl}/logo.svg`,
    "description": product.description || `Industrial ${product.categoryName} part number ${product.partNumber}.`,
    "sku": product.partNumber,
    "mpn": product.partNumber,
    "brand": product.brands.map((b) => ({
      "@type": "Brand",
      "name": b,
    })),
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "100",
      "offerCount": "198",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": siteConfig.name,
      },
    },
  };

  return (
    <div className="py-8 bg-[#F4F6FA] min-h-screen text-[#1A2536]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: product.categoryName, href: `/products/${product.category}` },
            { label: product.partNumber, href: `/products/${product.category}/${product.slug}` },
          ]}
        />

        {/* Back navigation */}
        <div className="mt-4 mb-6">
          <Link
            href={`/products/${product.category}`}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0B1B3D] hover:text-[#C9962B] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to {product.categoryName}</span>
          </Link>
        </div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Visual Product Photo & Engineering Schematic */}
          <div className="lg:col-span-5 space-y-6">
            {/* Large Product Photography Card */}
            <div className="relative rounded-2xl bg-white border border-slate-200 p-4 shadow-soft overflow-hidden group">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#F4F6FA] border border-slate-100">
                <Image
                  src={getImagePath(product.category)}
                  alt={getBearingAltText({ partNumber: product.partNumber, name: product.name, categoryName: product.categoryName })}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Status Badges */}
              <div className="mt-3.5 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-[#C9962B]/10 text-[#C9962B] border border-[#C9962B]/30 text-xs font-mono font-bold">
                  {product.badge || "DEPOT READY"}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>In stock, enquire for availability</span>
                </span>
              </div>
            </div>

            {/* Geometric Dimensional Schematic Card */}
            <div className="relative rounded-2xl bg-white border border-slate-200 p-6 shadow-soft flex flex-col items-center justify-center text-center overflow-hidden">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                Dimensional Engineering Blueprint
              </span>

              {/* Geometric Engineering Schematic Graphic */}
              <div className="my-10 relative flex items-center justify-center">
                <div className="w-52 h-52 rounded-full border-4 border-dashed border-slate-300 flex items-center justify-center bg-[#F4F6FA] shadow-inner">
                  <div className="w-40 h-40 rounded-full border-2 border-[#0B1B3D]/30 flex items-center justify-center bg-white">
                    <div className="w-24 h-24 rounded-full border-2 border-[#C9962B]/60 flex items-center justify-center bg-[#F4F6FA]">
                      <div className="text-center">
                        <span className="text-[10px] font-mono text-slate-500 block">Bore (d)</span>
                        <span className="text-sm font-mono font-bold text-[#0B1B3D]">
                          {product.d} mm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* OD Marker */}
                <div className="absolute -top-3 bg-white px-2 py-0.5 border border-slate-200 rounded text-[10px] font-mono font-bold text-[#0B1B3D] shadow-sm">
                  OD (D): {product.D} mm
                </div>
                {/* Width Marker */}
                <div className="absolute -bottom-3 bg-white px-2 py-0.5 border border-slate-200 rounded text-[10px] font-mono font-bold text-[#0B1B3D] shadow-sm">
                  Width (B): {product.B} mm
                </div>
              </div>

              {/* Schematic Caption */}
              <p className="text-xs font-mono text-slate-500 mt-2">
                Engineering Dimensional Profile: {product.d} × {product.D} × {product.B} mm
              </p>

              {/* Verified Depot Stocking Badge */}
              <div className="mt-4 pt-4 border-t border-slate-100 w-full flex items-center justify-between text-xs font-mono text-slate-600">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C9962B]" />
                  <span>Manmad Warehouse</span>
                </span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Ready Dispatch</span>
                </span>
              </div>
            </div>

            {/* Quick Dispatch Guarantee Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft space-y-3 font-mono text-xs">
              <h4 className="font-heading font-extrabold text-sm uppercase text-[#0B1B3D] tracking-wider flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#C9962B]" />
                <span>Supply Chain Details</span>
              </h4>
              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Packaging:</span>
                  <span className="font-bold text-[#0B1B3D]">Factory Sealed Box / Poly Wrap</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Dispatch Window:</span>
                  <span className="font-bold text-[#0B1B3D]">Within 24 Hours</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Transit Node:</span>
                  <span className="font-bold text-[#0B1B3D]">Central Railway Parcel / V-Trans / TCI</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Coverage:</span>
                  <span className="font-bold text-[#0B1B3D]">Maharashtra &amp; Pan-India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Specs, Description & Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-soft">
              {/* Category Link */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Link
                  href={`/products/${product.category}`}
                  className="px-3 py-1 rounded bg-[#0B1B3D]/5 hover:bg-[#0B1B3D]/10 text-[#0B1B3D] border border-slate-200 text-xs font-mono font-bold tracking-wider uppercase transition-colors"
                >
                  {product.categoryName}
                </Link>
                <span className="text-xs font-mono text-slate-400">
                  Article: #{product.partNumber}
                </span>
              </div>

              {/* Product Heading */}
              <h1 className="font-heading font-black text-3xl sm:text-4xl text-[#0B1B3D] tracking-tight uppercase">
                {product.name}
              </h1>

              {/* Availability Note */}
              <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-600">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-bold text-slate-800">In stock, enquire for availability.</span>
                <span className="text-slate-400">•</span>
                <span>Immediate wholesale and retail quoting.</span>
              </div>

              {/* Short original description paragraph per product (generated from type + article number) */}
              <div className="mt-6 p-4 rounded-xl bg-[#F4F6FA] border border-slate-200 text-slate-700 text-sm leading-relaxed font-sans">
                {product.description || (
                  `The ${product.partNumber} is an industrial-grade ${product.categoryName.toLowerCase()} engineered for demanding radial and axial load duties across automotive gearboxes, pumps, electric motors, and manufacturing machinery. Sourced through authentic distribution channels, it offers precision tolerances, low frictional torque, and dependable operating life under continuous production environments.`
                )}
              </div>

              {/* Verified Dimensional Specs Table */}
              <div className="mt-6">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Verified Engineering Specifications
                </h3>
                <div className="grid grid-cols-3 gap-3 font-mono">
                  <div className="bg-[#F4F6FA] border border-slate-200 rounded-xl p-3 text-center">
                    <span className="text-[10px] text-slate-500 uppercase block">Inside Bore (d)</span>
                    <span className="text-lg font-bold text-[#0B1B3D]">{product.d}</span>
                    <span className="text-[10px] text-slate-500 block">mm</span>
                  </div>
                  <div className="bg-[#F4F6FA] border border-slate-200 rounded-xl p-3 text-center">
                    <span className="text-[10px] text-slate-500 uppercase block">Outside Dia (D)</span>
                    <span className="text-lg font-bold text-[#0B1B3D]">{product.D}</span>
                    <span className="text-[10px] text-slate-500 block">mm</span>
                  </div>
                  <div className="bg-[#F4F6FA] border border-slate-200 rounded-xl p-3 text-center">
                    <span className="text-[10px] text-slate-500 uppercase block">Width / Height (B)</span>
                    <span className="text-lg font-bold text-[#0B1B3D]">{product.B}</span>
                    <span className="text-[10px] text-slate-500 block">mm</span>
                  </div>
                </div>
              </div>

              {/* Stockist Brands Badges */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Stockist Brands Available:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {product.brands.map((brand) => (
                    <span
                      key={brand}
                      className="px-3 py-1.5 rounded-lg bg-white border-2 border-slate-200 text-[#0B1B3D] font-mono text-xs font-extrabold shadow-sm"
                    >
                      {brand}
                    </span>
                  ))}
                  <span className="text-xs font-mono text-slate-500 ml-2">
                    (Inquire for preferred brand pricing)
                  </span>
                </div>
              </div>

              {/* Action Buttons: Request a Quote & Call & Quote Sheet */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <ProductDetailActions product={product} />
              </div>
            </div>

            {/* Direct Phone Assistance Strip */}
            <div className="bg-[#0B1B3D] text-white rounded-2xl p-6 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#E4B94F] uppercase tracking-wider block">
                  Need Immediate Technical Support?
                </span>
                <h4 className="font-heading font-extrabold text-xl text-white mt-1">
                  Speak Directly with our Partners in Manmad
                </h4>
                <p className="text-xs text-slate-300 mt-1 font-sans">
                  Shabbir Sakriwala ({siteConfig.contacts[0].phone}) • Ammar Sakriwala ({siteConfig.contacts[1].phone})
                </p>
              </div>
              <a
                href={`tel:${siteConfig.contacts[0].phone}`}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#C9962B] hover:bg-[#E4B94F] text-[#0B1B3D] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Ammar Bhai</span>
              </a>
            </div>
          </div>
        </div>

        {/* General "About this bearing type" block per category with typical applications */}
        {categoryInfo && (
          <div className="mb-16 bg-white border border-slate-200 rounded-2xl p-8 shadow-soft">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C9962B] uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>Category Knowledge</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1B3D] uppercase mb-4">
              About {categoryInfo.name}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-4xl">
              {categoryInfo.aboutType || categoryInfo.seoIntro}
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1B3D] mb-3">
                Common Industrial Applications for {categoryInfo.shortName}:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs text-slate-600">
                {(categoryInfo.typicalApplications || [
                  "Gearboxes & Speed Reducers",
                  "Automotive Wheel Hubs",
                  "Agricultural Machinery",
                  "Conveyor Rollers & Motors"
                ]).map((app, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F4F6FA] border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Related Products Row */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div>
                <h3 className="font-heading font-extrabold text-2xl text-[#0B1B3D] uppercase tracking-tight">
                  Related Products in {product.categoryName}
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-0.5">
                  Complementary sizes frequently ordered together.
                </p>
              </div>
              <Link
                href={`/products/${product.category}`}
                className="text-xs font-mono font-bold text-[#0B1B3D] hover:text-[#C9962B] transition-colors"
              >
                <span>View All ({categoryInfo?.count || 0})</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
