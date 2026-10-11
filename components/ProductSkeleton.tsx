import React from "react";

export function ProductCardSkeleton() {
  return (
    <div 
      className="bg-white border border-slate-200/90 rounded-xl p-4 sm:p-5 shadow-soft animate-pulse flex flex-col justify-between"
      role="status"
      aria-label="Loading product card"
    >
      <div>
        {/* Thumbnail Skeleton */}
        <div className="relative w-full aspect-[4/3] rounded-lg bg-slate-200 mb-3" />
        
        {/* Brand & Stock Skeleton */}
        <div className="flex items-center justify-between mb-2">
          <div className="h-4 w-16 bg-slate-200 rounded" />
          <div className="h-4 w-20 bg-slate-200 rounded" />
        </div>

        {/* Part Number & Category Skeleton */}
        <div className="h-7 w-3/4 bg-slate-200 rounded mb-2" />
        <div className="h-4 w-1/2 bg-slate-100 rounded mb-3" />

        {/* Dimensions Skeleton */}
        <div className="h-6 w-full bg-slate-100 rounded mb-4" />
      </div>

      {/* Action Buttons Skeleton */}
      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
        <div className="h-10 bg-slate-200 rounded-lg" />
        <div className="h-10 bg-slate-200 rounded-lg" />
      </div>
      <span className="sr-only">Loading product details...</span>
    </div>
  );
}

export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" aria-busy="true">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
