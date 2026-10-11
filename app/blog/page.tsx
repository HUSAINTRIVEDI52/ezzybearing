import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAllPosts } from "@/lib/blog";
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  User, 
  Tag, 
  Sparkles,
  MessageSquare
} from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Industrial Bearing Knowledge Hub & Guides | EZZI Bearing Suppliers",
  description: "Expert engineering articles, part number decoding guides, and practical bearing selection tips from EZZI Bearing Suppliers, Manmad.",
  keywords: [
    "bearing engineering blog",
    "bearing number decoding",
    "bearing maintenance guide",
    "how to select industrial bearings"
  ]
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#F4F6FA] pb-24 text-[#1A2536]">
      {/* Hero Banner */}
      <div className="bg-[#0B1B3D] text-white pt-8 pb-14 border-b border-[#C9962B]/20 relative overflow-hidden">
        <div className="absolute inset-0 watermark-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Blog & Guides", href: "/blog" }
            ]}
          />

          <div className="mt-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#C9962B]/10 border border-[#C9962B]/30 text-[#E4B94F] text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <span>Technical Knowledge Hub</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              Bearing Insights &amp; Guides
            </h1>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              Practical guides written for maintenance managers, mechanics, and procurement engineers to maximize equipment reliability and avoid costly machine downtime.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-slate-200 hover:border-[#C9962B] rounded-2xl p-7 shadow-soft hover-lift transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-[#C9962B]/10 text-[#C9962B] font-bold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h2 className="font-heading font-extrabold text-xl text-[#0B1B3D] group-hover:text-[#C9962B] transition-colors uppercase leading-snug">
                    {post.title}
                  </h2>
                </Link>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-3 font-sans leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#C9962B]" />
                  <span>{post.author}</span>
                </span>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#0B1B3D] group-hover:text-[#C9962B] transition-colors"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9962B] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Technical Questions Callout */}
        <div className="mt-16 bg-[#0B1B3D] text-white rounded-2xl p-8 border border-[#C9962B]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E4B94F] block mb-1">
              Have a Specific Technical Application?
            </span>
            <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-white">
              Ask our Bearing Specialists in Manmad
            </h3>
            <p className="text-xs text-slate-300 font-sans mt-1">
              Send your motor or machine operating specifications for personalized bearing selection advice.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20EZZI%20Bearing%20Suppliers,%20I%20have%20a%20technical%20question%20regarding%20bearing%20selection.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consult on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
