import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        ...(item.href ? { "item": item.href } : {})
      }))
    ]
  };

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-[#F4F6FA] border-b border-slate-200 text-xs font-mono">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto whitespace-nowrap text-slate-500">
        <Link href="/" className="hover:text-[#0B1B3D] flex items-center gap-1 transition-colors">
          <Home className="w-3.5 h-3.5 text-slate-400" />
          <span>Home</span>
        </Link>

        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {item.href ? (
              <Link href={item.href} className="hover:text-[#0B1B3D] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#0B1B3D] font-bold">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

export default Breadcrumbs;
