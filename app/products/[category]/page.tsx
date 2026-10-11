import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductCard } from "@/components/ProductCard";
import { getCategories, getCategoryById, getProductsByCategory } from "@/lib/products";
import { siteConfig, getCategoryWhatsAppUrl } from "@/lib/siteConfig";
import { getImagePath, getBearingAltText } from "@/lib/images";
import { 
  CheckCircle2, 
  MessageSquare, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  PhoneCall,
  Sparkles,
  Boxes
} from "lucide-react";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((cat) => ({
    category: cat.id,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const cat = getCategoryById(params.category);
  if (!cat) {
    return {
      title: "Category Not Found",
    };
  }

  const title = `${cat.name} Stockist & Wholesale Supplier`;
  const fullPageTitle = `${cat.name} Stockist & Wholesale Supplier | ${siteConfig.name}`;
  const canonicalUrl = `${siteConfig.siteUrl}/products/${cat.id}`;
  const description = `${cat.seoIntro?.slice(0, 155)}... Genuine SKF, TATA, XNO, DSF stock in Manmad with all-India express delivery.`;

  return {
    title,
    description,
    keywords: [
      cat.name,
      `${cat.shortName} stockist`,
      `${cat.code} bearings`,
      "bearing supplier maharashtra",
      "bearing wholesale india",
      "skf tata bearings manmad"
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
          alt: `${cat.name} - ${siteConfig.name}`,
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

export default function CategoryPage({ params }: CategoryPageProps) {
  const cat = getCategoryById(params.category);
  if (!cat) {
    notFound();
  }

  const products = getProductsByCategory(params.category);
  const allCategories = getCategories();
  const relatedCategories = allCategories
    .filter((c) => c.id !== cat.id)
    .slice(0, 4);

  const categoryWaUrl = getCategoryWhatsAppUrl(cat.name);

  return (
    <div className="min-h-screen bg-[#F4F6FA] pb-24 text-[#1A2536]">
      {/* Category Hero / Header */}
      <div className="bg-[#0B1B3D] text-white pt-8 pb-12 border-b border-[#C9962B]/20 relative overflow-hidden">
        <div className="absolute inset-0 watermark-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              { label: cat.name, href: `/products/${cat.id}` }
            ]}
          />

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#C9962B]/10 border border-[#C9962B]/30 text-[#E4B94F] text-xs font-mono font-bold tracking-wider uppercase mb-3">
                <span>{cat.code} Series</span>
                <span className="text-slate-500">•</span>
                <span>{products.length} Items in Inventory</span>
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
                {cat.name}
              </h1>
              
              {/* 80 to 150 words of original SEO intro copy */}
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-sans">
                {cat.seoIntro}
              </p>

              {/* Highlights & CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={categoryWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire {cat.shortName} via WhatsApp</span>
                </a>
                <a
                  href={`tel:${siteConfig.contacts[0].phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/20 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#E4B94F]" />
                  <span>Call Desk ({siteConfig.contacts[0].phone})</span>
                </a>
              </div>
            </div>

            {/* Right Card: Category Image & Applications */}
            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm shadow-soft">
              <div className="relative w-full aspect-[16/10] bg-slate-900 border-b border-white/10">
                <Image
                  src={getImagePath(cat.id)}
                  alt={getBearingAltText({ categoryName: cat.name })}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E4B94F] mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C9962B]" />
                  <span>Typical Applications</span>
                </h3>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                {(cat.typicalApplications || [
                  "Industrial Transmissions & Gear Reducers",
                  "Heavy Agricultural Machinery",
                  "Electric Motors & Pumps",
                  "Conveyor Systems & Material Handling"
                ]).map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E4B94F] shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-400">
                <span>Stockist brands: </span>
                <span className="text-white font-bold">{siteConfig.brands.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Results Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 mb-8 gap-3">
          <div>
            <h2 className="font-heading font-extrabold text-2xl text-[#0B1B3D] uppercase tracking-tight">
              In-Stock {cat.shortName} ({products.length})
            </h2>
            <p className="text-xs font-mono text-slate-500 mt-0.5">
              Showing all verified part numbers available from our Manmad warehouse.
            </p>
          </div>
          <Link
            href="/products"
            className="text-xs font-mono font-bold text-[#0B1B3D] hover:text-[#C9962B] inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View All 198+ Bearings in Main Directory</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C9962B]" />
          </Link>
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
            <Boxes className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="font-heading font-bold text-xl text-[#0B1B3D] uppercase">
              Custom Sourcing Available
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 font-sans">
              We frequently stock non-standard sizes in this series. Send your required part number on WhatsApp for instant pricing.
            </p>
            <a
              href={categoryWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        )}

        {/* About this bearing type technical summary */}
        {cat.aboutType && (
          <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-8 shadow-soft">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C9962B] uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>Engineering Insight</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-[#0B1B3D] uppercase mb-3">
              About {cat.name}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-4xl">
              {cat.aboutType}
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100 font-mono text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C9962B]" />
                <span>100% Genuine Inspected Bearings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Ready Stock for Immediate Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <Boxes className="w-4 h-4 text-[#0B1B3D]" />
                <span>Bulk Wholesale Discounts Available</span>
              </div>
            </div>
          </div>
        )}

        {/* Related Categories Row */}
        <div className="mt-16">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
            <h3 className="font-heading font-extrabold text-2xl text-[#0B1B3D] uppercase tracking-tight">
              Related Categories
            </h3>
            <Link
              href="/#categories"
              className="text-xs font-mono font-bold text-[#0B1B3D] hover:text-[#C9962B] inline-flex items-center gap-1 transition-colors"
            >
              <span>All 12 Categories</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C9962B]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedCategories.map((relCat) => (
              <Link
                key={relCat.id}
                href={`/products/${relCat.id}`}
                className="bg-white border border-slate-200 hover:border-[#C9962B] rounded-xl p-5 shadow-soft hover-lift transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C9962B] bg-[#C9962B]/10 px-2 py-0.5 rounded">
                      {relCat.code}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {relCat.count} items
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#0B1B3D] group-hover:text-[#C9962B] transition-colors uppercase">
                    {relCat.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                    {relCat.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-[#0B1B3D] group-hover:text-[#C9962B]">
                  <span>Explore Series</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9962B] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
