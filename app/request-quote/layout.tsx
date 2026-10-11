import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Request a Quote - Instant WhatsApp RFQ",
  description: "Request wholesale pricing for industrial ball and tapered roller bearings. Instant quotation dispatched via WhatsApp directly to our Manmad depot partners.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/request-quote`,
  },
  openGraph: {
    title: `Request a Quote | ${siteConfig.name}`,
    description: "Request wholesale pricing for industrial ball and tapered roller bearings with instant WhatsApp response.",
    url: `${siteConfig.siteUrl}/request-quote`,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Request a Quote | ${siteConfig.name}`,
    description: "Request wholesale pricing for industrial ball and tapered roller bearings with instant WhatsApp response.",
    images: ["/og-image.png"],
  },
};

export default function RequestQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
