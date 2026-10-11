import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Bulk Orders & Pan-India Logistics",
  description: "Specialized wholesale case-lot rates, scheduled plant replenishments, and rapid railway cargo dispatch from Manmad.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/bulk-orders`,
  },
  openGraph: {
    title: `Bulk Orders & Freight | ${siteConfig.name}`,
    description: "Specialized wholesale case-lot rates and express railway cargo dispatch from Manmad.",
    url: `${siteConfig.siteUrl}/bulk-orders`,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Bulk Orders & Freight | ${siteConfig.name}`,
    description: "Specialized wholesale case-lot rates and express railway cargo dispatch from Manmad.",
    images: ["/og-image.png"],
  },
};

export default function BulkOrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
