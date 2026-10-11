import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Bulk & Wholesale Orders | Delivery Across India",
  description: "Bulk and wholesale bearing orders welcome at EZZI Bearing Suppliers. Stockist of SKF, TATA, XNO, and DSF. Delivery across India.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/bulk-orders`,
  },
  openGraph: {
    title: `Bulk & Wholesale Orders | ${siteConfig.name}`,
    description: "Bulk and wholesale bearing orders welcome at EZZI Bearing Suppliers. Delivery across India.",
    url: `${siteConfig.siteUrl}/bulk-orders`,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Bulk & Wholesale Orders | ${siteConfig.name}`,
    description: "Bulk and wholesale bearing orders welcome at EZZI Bearing Suppliers. Delivery across India.",
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
