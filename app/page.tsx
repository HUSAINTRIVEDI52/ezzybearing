import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { Hero } from "@/components/Hero";
import { QuickPartFinder } from "@/components/QuickPartFinder";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedBearings } from "@/components/FeaturedBearings";
import { BrandStrip } from "@/components/BrandStrip";
import { WhyChooseEzzi } from "@/components/WhyChooseEzzi";
import { IndustriesServed } from "@/components/IndustriesServed";
import { HowToOrder } from "@/components/HowToOrder";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaBand } from "@/components/FinalCtaBand";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Stockist - SKF, TATA, XNO, DSF | Manmad`,
  description: siteConfig.seoDescription,
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: `${siteConfig.name} | Stockist - SKF, TATA, XNO, DSF | Manmad`,
    description: siteConfig.seoDescription,
    url: siteConfig.siteUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `${siteConfig.name} - Bearing Suppliers Manmad`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Stockist - SKF, TATA, XNO, DSF | Manmad`,
    description: siteConfig.seoDescription,
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <QuickPartFinder />
      <CategoryGrid />
      <FeaturedBearings />
      <BrandStrip />
      <WhyChooseEzzi />
      <IndustriesServed />
      <HowToOrder />
      <FaqSection />
      <FinalCtaBand />
    </div>
  );
}
