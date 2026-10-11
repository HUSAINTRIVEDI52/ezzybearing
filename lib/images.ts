/**
 * EZZI BEARING SUPPLIERS - Central Image Configuration
 * Location: /lib/images.ts
 * 
 * Master imageKey -> image path mapping for category-level product photography,
 * hero graphics, and depot imagery.
 */

export const PLACEHOLDER_IMAGE = "/images/bearing-placeholder.svg";

export const IMAGE_MAP: Record<string, string> = {
  // Global & Site Layout Imagery
  hero: "/images/hero-bearing.jpg",
  warehouse: "/images/warehouse-depot.jpg",
  about: "/images/warehouse-depot.jpg",

  // Category Level Product Photography
  "deep-groove-ball": "/images/deep-groove-ball.jpg",
  "tapered-roller": "/images/tapered-roller.jpg",
  "taper-cone-cup": "/images/cone-cup-set.jpg",
  "clutch-release-thrust": "/images/clutch-release.jpg",
  "clutch-release": "/images/clutch-release.jpg",
  "thrust-bearings": "/images/thrust-bearing.jpg",
  "wheel-hub": "/images/wheel-hub.jpg",
  "automotive-hub": "/images/wheel-hub.jpg",
  "angular-contact-four-point": "/images/angular-contact.jpg",
  "angular-contact": "/images/angular-contact.jpg",
  "cylindrical-spherical-roller": "/images/cylindrical-roller.jpg",
  "cylindrical-roller": "/images/cylindrical-roller.jpg",
  "spherical-roller": "/images/spherical-roller.jpg",
  "needle-roller": "/images/needle-roller.jpg",
  "belt-tensioner-idler": "/images/deep-groove-ball.jpg",
  "special-application": "/images/deep-groove-ball.jpg",
  "hand-tools": "/images/hand-tools.jpg",
  tools: "/images/hand-tools.jpg",
};

/**
 * Returns the resolved image path for a category or layout key,
 * falling back gracefully to the branded technical vector placeholder.
 */
export function getImagePath(key?: string): string {
  if (!key) return PLACEHOLDER_IMAGE;
  const normalizedKey = key.toLowerCase().trim();
  return IMAGE_MAP[normalizedKey] || PLACEHOLDER_IMAGE;
}

/**
 * Generates descriptive image alt text
 * e.g., "Tapered Roller Bearing 30208" (no "Genuine", no duplicate numbers)
 */
export function getBearingAltText(item: {
  partNumber?: string;
  name?: string;
  categoryName?: string;
  brand?: string;
}): string {
  if (item.name) {
    return item.name.replace(/^Genuine\s+/i, "").trim();
  }
  const baseCategory = (item.categoryName || "Bearing").replace(/s$/, "");
  if (item.partNumber) {
    if (baseCategory.includes(item.partNumber)) {
      return baseCategory;
    }
    return `${baseCategory} ${item.partNumber}`;
  }
  return item.categoryName || "Bearing";
}
