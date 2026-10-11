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

export const siteFlags = {
  // Feature flags for claims awaiting owner confirmation.
  // Re-enable in siteConfig if confirmed by owner.
  showAuthorizedDistributor: false,
  showGstInvoices: false,
  showSameDayDispatch: false,
  showYearsInBusiness: false,
  showEmergencySupport: false,
  showLogisticsPartners: false,
  showClientIndustryClaims: false,
  showGuaranteedAuthenticClaims: false,
};

export const siteConfig = {
  name: "EZZI Bearing Suppliers",
  tagline: "Quality • Precision • Trust",
  subtitle: "Stockist of SKF, TATA, XNO, DSF. Ball & Roller Taper Bearings, Hand Tools etc.",
  slogan: "All types of bearing solutions under one roof.",
  contacts: Object.assign(
    [
      { name: "Shabbir Sakriwala", phone: "9272395247" },
      { name: "Ammar Sakriwala",   phone: "8830721850" }
    ],
    {
      primary: {
        name: "Shabbir Sakriwala",
        role: "Managing Partner",
        phone: "+91 92723 95247",
        phoneClean: "+919272395247",
        whatsappClean: "919272395247"
      },
      secondary: {
        name: "Ammar Sakriwala",
        role: "Partner & Operations",
        phone: "+91 88307 21850",
        phoneClean: "+918830721850",
        whatsappClean: "918830721850"
      },
      generalPhone: "+91 92723 95247",
      email: "sales.ezzybearing@gmail.com"
    }
  ),
  whatsappNumber: "918830721850",   // default WhatsApp contact - Ammar Sakriwala
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
  siteLegalName: "EZZI Bearing Suppliers",
  shortName: "EZZI Bearings",
  stockistSubtitle: "Stockist of SKF, TATA, XNO, DSF. Ball & Roller Taper Bearings, Hand Tools etc.",
  seoDescription: "EZZI Bearing Suppliers, Manmad. Stockist of SKF, TATA, XNO and DSF ball and roller bearings, tapered roller bearings and hand tools. Bulk orders and delivery across India. Get a quote on WhatsApp.",
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
    "industrial bearings",
    "automotive bearings",
    "hand tools"
  ],
  geo: {
    latitude: 20.2544,
    longitude: 74.4378
  },
  businessHours: {
    days: "Monday - Saturday",
    time: "09:00 AM - 08:30 PM"
  },
  stockistBrands: [
    {
      name: "XNO",
      tagline: "Engineered deep groove ball and roller bearings."
    },
    {
      name: "DSF",
      tagline: "Precision wheel hub and tapered roller bearing assemblies."
    },
    {
      name: "SKF",
      tagline: "Industrial benchmark for ball, roller, and precision bearings."
    },
    {
      name: "TATA",
      tagline: "High-durability bearings for industrial machinery and commercial applications."
    }
  ],
  valuePillars: [
    {
      title: "PREMIUM QUALITY",
      subtitle: "Quality & Precision",
      description: "Stockist of SKF, TATA, XNO, and DSF bearings for diverse industrial and machinery needs.",
      icon: "award"
    },
    {
      title: "TRUSTED BRANDS",
      subtitle: "Established Benchmarks",
      description: "Reliable brands known for durability, precision fit, and dependable performance.",
      icon: "shield-check"
    },
    {
      title: "WIDE RANGE",
      subtitle: "Ball, Roller & Tools",
      description: "Ball bearings, tapered roller sets, clutch release units, wheel hub bearings, and hand tools.",
      icon: "package"
    },
    {
      title: "RELIABLE SERVICE",
      subtitle: "Delivery Across India",
      description: "Personalized trade assistance, bulk orders welcome, and delivery across India.",
      icon: "truck"
    }
  ],
  logistics: {
    coverage: "Delivery across India",
    dispatchNote: "Enquire for availability and dispatch details."
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
`*BULK RFQ: EZZI BEARING SUPPLIERS (Manmad)*
--------------------------------------
*Bearing Enquiry / Bill of Materials (BOM):*

${itemsText}

--------------------------------------
*Procurement Details:*
• Company / Workshop Name: 
• Delivery City & State: 
• Quantity / Requirements: 

Please provide quotation and availability.`;

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates an instant WhatsApp enquiry link for a bearing category
 */
export function getCategoryWhatsAppUrl(categoryName: string): string {
  const text = `Hello EZZI Bearing Suppliers, I would like to enquire about ${categoryName}. Required part numbers/sizes: ___. Delivery city: ___.`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
