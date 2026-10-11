import React from "react";
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
