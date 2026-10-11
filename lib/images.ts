/**
 * EZZI BEARING SUPPLIERS - Central Image Configuration
 * Location: /lib/images.ts
 * 
 * Master imageKey -> image path mapping for category-level product photography,
 * hero graphics, and depot imagery. The depot owner can replace any photograph
 * by simply dropping a new file with the same name into /public/images/.
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
  "clutch-release": "/images/clutch-release.jpg",
  "automotive-hub": "/images/wheel-hub.jpg",
  "pillow-block": "/images/pillow-block.jpg",
  "spherical-roller": "/images/spherical-roller.jpg",
  "cylindrical-roller": "/images/cylindrical-roller.jpg",
  "thrust-bearings": "/images/thrust-bearing.jpg",
  "angular-contact": "/images/angular-contact.jpg",
  "snap-ring-ball": "/images/deep-groove-ball.jpg",
  "wheel-roller": "/images/tapered-roller.jpg",
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
 * Generates descriptive, SEO-optimized image alt text
 * e.g., "SKF deep groove ball bearing 6205 - EZZI Bearing Suppliers"
 */
export function getBearingAltText(item: {
  partNumber?: string;
  name?: string;
  categoryName?: string;
  brand?: string;
}): string {
  const brand = item.brand || "Genuine";
  const part = item.partNumber ? ` ${item.partNumber}` : "";
  const name = item.name || item.categoryName || "Bearing";
  return `${brand} ${name}${part} - EZZI Bearing Suppliers Manmad`;
}
