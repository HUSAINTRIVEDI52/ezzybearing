import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/siteConfig";
import { 
  Clock, 
  User, 
  ArrowLeft, 
  MessageSquare, 
  Share2, 
  PhoneCall, 
  CheckCircle2, 
  BookOpen,
  ArrowRight
} from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const fullTitle = `${post.title} | ${siteConfig.name}`;
  const canonicalUrl = `${siteConfig.siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Knowledge Hub`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: post.excerpt,
      type: "article",
      url: canonicalUrl,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          type: "image/png",
          alt: `${post.title} - ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: post.excerpt,
      images: ["/og-image.png"],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== post.slug);

  return (
    <div className="min-h-screen bg-[#F4F6FA] pb-24 text-[#1A2536]">
      {/* Article Header */}
      <div className="bg-[#0B1B3D] text-white pt-8 pb-14 border-b border-[#C9962B]/20 relative overflow-hidden">
        <div className="absolute inset-0 watermark-pattern opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Blog & Guides", href: "/blog" },
              { label: post.title.slice(0, 32) + "...", href: `/blog/${post.slug}` }
            ]}
          />

          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-3">
              <span className="px-2.5 py-0.5 rounded bg-[#C9962B]/10 border border-[#C9962B]/30 text-[#E4B94F] font-bold uppercase">
                {post.category}
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                <span>By {post.author}</span>
              </span>
            </div>

            <h1 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0B1B3D] hover:text-[#C9962B] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Guides</span>
          </Link>
        </div>

        {/* Main Article Body */}
        <article className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-soft space-y-6 text-slate-700 font-sans leading-relaxed text-sm sm:text-base">
          {post.content.map((paragraph, idx) => {
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={idx} className="font-heading font-extrabold text-2xl text-[#0B1B3D] uppercase pt-4 pb-1 border-b border-slate-100">
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }

            if (paragraph.startsWith("| Parameter |")) {
              return (
                <div key={idx} className="overflow-x-auto my-6 font-mono text-xs">
                  <table className="w-full text-left border-collapse border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-[#0B1B3D] text-[#E4B94F]">
                      <tr>
                        <th className="p-3 border border-slate-700">Parameter</th>
                        <th className="p-3 border border-slate-700">Deep Groove Ball</th>
                        <th className="p-3 border border-slate-700">Tapered Roller</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-[#F4F6FA]">
                      <tr>
                        <td className="p-3 font-bold border border-slate-200">Contact Type</td>
                        <td className="p-3 border border-slate-200">Point Contact</td>
                        <td className="p-3 border border-slate-200">Line Contact</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold border border-slate-200">Speed Limit</td>
                        <td className="p-3 border border-slate-200">Very High (up to 15,000+ RPM)</td>
                        <td className="p-3 border border-slate-200">Moderate to High</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold border border-slate-200">Shock Resistance</td>
                        <td className="p-3 border border-slate-200">Moderate</td>
                        <td className="p-3 border border-slate-200">Outstanding</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold border border-slate-200">Axial Direction</td>
                        <td className="p-3 border border-slate-200">Bidirectional</td>
                        <td className="p-3 border border-slate-200">Unidirectional (Mounted in pairs)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold border border-slate-200">Typical Uses</td>
                        <td className="p-3 border border-slate-200">Electric motors, water pumps</td>
                        <td className="p-3 border border-slate-200">Truck hubs, differentials, sugar mills</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            }

            if (paragraph.startsWith("- ")) {
              return (
                <div key={idx} className="pl-4 border-l-2 border-[#C9962B] text-slate-700 text-sm py-0.5">
                  <p dangerouslySetInnerHTML={{ __html: paragraph.replace("- ", "").replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </div>
              );
            }

            return (
              <p
                key={idx}
                dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
              />
            );
          })}

          {/* End of article author signature */}
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-slate-500">
            <div>
              <span>Published by: </span>
              <span className="font-bold text-[#0B1B3D]">{post.author}</span>
              <span> • EZZI Bearing Suppliers, Manmad</span>
            </div>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello,%20I%20read%20your%20article%20on%20${encodeURIComponent(post.title)}%20and%20have%20a%20question.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-700 font-bold hover:underline"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Article on WhatsApp</span>
            </a>
          </div>
        </article>

        {/* Other Guides Row */}
        {otherPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="font-heading font-extrabold text-2xl text-[#0B1B3D] uppercase mb-6">
              More Engineering Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="bg-white border border-slate-200 hover:border-[#C9962B] rounded-xl p-6 shadow-soft hover-lift transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-[#C9962B] block mb-2">
                      {other.category}
                    </span>
                    <h4 className="font-heading font-bold text-lg text-[#0B1B3D] group-hover:text-[#C9962B] transition-colors uppercase leading-snug">
                      {other.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-sans line-clamp-2 mt-2">
                      {other.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-[#0B1B3D] group-hover:text-[#C9962B]">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C9962B]" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
