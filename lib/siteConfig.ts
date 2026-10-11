/**
 * EZZI BEARING SUPPLIERS - Master Site Configuration
 * Location: /lib/siteConfig.ts
 * 
 * Central configuration file for all site-wide business details,
 * contacts, stockist brands, SEO parameters, and WhatsApp automations.
 * Edit this file to update contacts, addresses, or brand details across the entire site.
 */

export interface ContactPersonSimple {
  name: string;
  phone: string;
}

export interface ContactPersonFull {
  name: string;
  role: string;
  phone: string;
  phoneClean: string;
  whatsappClean: string;
}

export const siteConfig = {
  name: "EZZI Bearing Suppliers",
  tagline: "Quality • Precision • Trust",
  subtitle: "Stockist of SKF, TATA, XNO, DSF, Ball & Roller Taper Bearings, Hand Tools & more",
  slogan: "All types of bearing solutions under one roof.",
  contacts: Object.assign(
    [
      { name: "Ammar Sakriwala",   phone: "8830721850" },
      { name: "Shabbir Sakriwala", phone: "9272395247" }
    ],
    {
      primary: {
        name: "Ammar Sakriwala",
        role: "Partner & Operations",
        phone: "+91 88307 21850",
        phoneClean: "+918830721850",
        whatsappClean: "918830721850"
      },
      secondary: {
        name: "Shabbir Sakriwala",
        role: "Managing Partner",
        phone: "+91 92723 95247",
        phoneClean: "+919272395247",
        whatsappClean: "919272395247"
      },
      generalPhone: "+91 88307 21850",
      email: "sales.ezzybearing@gmail.com"
    }
  ),
  whatsappNumber: "918830721850",   // primary WhatsApp number (country code, no +) - Ammar Sakriwala (default POC)
  email: "sales.ezzybearing@gmail.com",
  address: Object.assign(
    "Burhani Complex, Opp. Post Office, Near Bohri Masjid, Bohri Compound, Manmad - 423104, Maharashtra, India",
    {
      complex: "Burhani Complex",
      landmark: "Opp. Post Office, Near Bohri Masjid",
      compound: "Bohri Compound",
      city: "Manmad",
      pincode: "423104",
      district: "Nashik",
      state: "Maharashtra",
      country: "India",
      fullFormatted: "Burhani Complex, Opp. Post Office, Near Bohri Masjid, Bohri Compound, Manmad - 423104, Maharashtra, India"
    }
  ),
  serviceArea: "All over India",
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://ezzybearing.vercel.app").replace(/\/$/, ""),
  brands: ["SKF", "TATA", "XNO", "DSF"],

  // Extended properties and helpers for UI components, SEO, and navigation
  siteName: "EZZI Bearing Suppliers",
  siteLegalName: "EZZI Bearing Suppliers (Stockist)",
  shortName: "EZZI Bearings",
  stockistSubtitle: "Stockist of SKF, TATA, XNO, DSF, Ball & Roller Taper Bearings, Hand Tools & more",
  seoDescription: "Authorized stockist & supplier of SKF, TATA, XNO, DSF ball and tapered roller bearings in Manmad, Maharashtra. Same-day dispatch across India.",
  keywords: [
    "bearing stockist",
    "bearing supplier",
    "SKF bearings",
    "TATA bearings",
    "XNO bearings",
    "DSF bearings",
    "Manmad",
    "Nashik",
    "Maharashtra",
    "tapered roller bearing",
    "deep groove ball bearing",
    "sugar mill bearings",
    "automotive bearings",
    "hand tools"
  ],
  geo: {
    latitude: 20.2544,
    longitude: 74.4378
  },
  businessHours: {
    days: "Monday - Saturday",
    time: "09:00 AM - 08:30 PM",
    emergencySupport: "24/7 Emergency Breakdown Support"
  },
  stockistBrands: [
    {
      name: "XNO",
      tier: "High Performance Industrial",
      origin: "India / Global",
      tagline: "Engineered deep groove ball & roller bearings",
      certified: true
    },
    {
      name: "DSF",
      tier: "Precision Automotive & Machinery",
      origin: "India",
      tagline: "High reliability wheel hub & tapered roller assemblies",
      certified: true
    },
    {
      name: "SKF",
      tier: "Tier 1 Global Premium",
      origin: "Sweden / India",
      tagline: "World benchmark for precision & long service life",
      certified: true
    },
    {
      name: "TATA",
      tier: "Heavy Industry & Fleet OEM",
      origin: "India",
      tagline: "High-durability bearings for commercial vehicles & crushers",
      certified: true
    }
  ],
  valuePillars: [
    {
      title: "PREMIUM QUALITY",
      subtitle: "100% Genuine Stock",
      description: "Direct manufacturer pipeline for SKF, TATA, XNO, DSF. Zero counterfeit risk ensuring machine safety.",
      icon: "award"
    },
    {
      title: "TRUSTED BRANDS",
      subtitle: "Industry Benchmarks",
      description: "OEM approved brands providing proven durability, exact tolerances, and mill test certificates.",
      icon: "shield-check"
    },
    {
      title: "WIDE RANGE IN STOCK",
      subtitle: "198+ Ready Product Series",
      description: "Ball bearings, tapered roller sets, clutch release units, snap ring series, and hand tools.",
      icon: "package"
    },
    {
      title: "RELIABLE SERVICE",
      subtitle: "Over 25 Years of Trust",
      description: "Personalized trade assistance, same-day packing, and 24-48 hour dispatch across India.",
      icon: "truck"
    }
  ],
  logistics: {
    dispatchTime: "Within 24 Hours",
    railwayAdvantage: "Manmad Junction Central Railway Parcel Cargo Depot for rapid dispatch to Mumbai, Pune, Nagpur, MP & Gujarat",
    partners: ["V-Trans", "TCI Freight", "Safexpress", "Delhivery", "Indian Railways Parcel Cargo", "Local Roadways"]
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Brands", href: "/brands" },
    { label: "About", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Bulk Orders", href: "/bulk-orders" },
    { label: "Contact", href: "/contact" }
  ]
};

/**
 * Generates an instant WhatsApp RFQ link for a single bearing product
 */
export function getProductWhatsAppUrl(product: {
  partNumber: string;
  name?: string;
  categoryName?: string;
}): string {
  const text = `Hello EZZI Bearing Suppliers, I would like a quote for: ${product.partNumber} - ${product.name || product.categoryName || 'Bearing'}. Quantity: ___. Delivery city: ___.`;

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates an instant WhatsApp RFQ link for a multi-item Bill of Materials (BOM)
 */
export function getMultiItemWhatsAppUrl(items: {
  partNumber: string;
  dimensions: string;
  brands: string;
  quantity: number;
}[]): string {
  if (items.length === 0) return "#";

  const itemsText = items.map((item, idx) => 
    `${idx + 1}. *${item.partNumber}* (${item.dimensions}) - Brands: ${item.brands} | Qty: ${item.quantity} pcs`
  ).join("\n");

  const text = 
`*BULK RFQ: EZZI BEARING SUPPLIERS (Manmad Depot)*
--------------------------------------
*Bearing Bill of Materials (BOM):*

${itemsText}

--------------------------------------
*Procurement Details:*
• Company / Workshop Name: 
• Delivery City & State: 
• GSTIN (Optional): 
• Urgency (Routine Stock / Breakdown Urgent): 

Please provide wholesale quotation & dispatch ETA.`;

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates an instant WhatsApp enquiry link for a bearing category
 */
export function getCategoryWhatsAppUrl(categoryName: string): string {
  const text = `Hello EZZI Bearing Suppliers, I would like to enquire about your ${categoryName} inventory. Required sizes/series: ___. Delivery city: ___.`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
