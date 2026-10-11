/**
 * EZZI BEARING SUPPLIERS - Master WhatsApp Automation & Deep Link Utility
 * Location: /lib/whatsapp.ts
 *
 * Centralizes WhatsApp deep-link generation across the site.
 * Provides recipient routing between Ammar Sakriwala (default) and Shabbir Sakriwala,
 * and attaches structured B2B page context for higher quotation conversion.
 */

import { siteConfig } from "./siteConfig";

export type WhatsAppRecipient = "ammar" | "shabbir";

export interface ContactInfo {
  id: WhatsAppRecipient;
  name: string;
  phone: string;
  whatsappNumber: string;
  role: string;
}

export const WHATSAPP_CONTACTS: Record<WhatsAppRecipient, ContactInfo> = {
  ammar: {
    id: "ammar",
    name: "Ammar Sakriwala",
    phone: "8830721850",
    whatsappNumber: "918830721850",
    role: "Partner & Operations"
  },
  shabbir: {
    id: "shabbir",
    name: "Shabbir Sakriwala",
    phone: "9272395247",
    whatsappNumber: "919272395247",
    role: "Senior Partner & Wholesale Trade"
  }
};

export const DEFAULT_RECIPIENT: WhatsAppRecipient = "ammar";

/**
 * Core link generator:
 * https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}
 */
export function buildWhatsAppLink(
  message: string,
  recipient: WhatsAppRecipient = DEFAULT_RECIPIENT
): string {
  const contact = WHATSAPP_CONTACTS[recipient] || WHATSAPP_CONTACTS[DEFAULT_RECIPIENT];
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Single Bearing Product Quote Message with rich B2B context
 */
export function buildProductQuoteMessage(
  product: {
    partNumber: string;
    name?: string;
    categoryName?: string;
    brands?: string[];
    d?: number;
    D?: number;
    B?: number;
  },
  pageContext: string = "Product Page"
): string {
  const size = product.d && product.D && product.B 
    ? `\n• Dimensions: ${product.d} x ${product.D} x ${product.B} mm`
    : "";
  const brands = product.brands?.length 
    ? `\n• Preferred Brands: ${product.brands.join(", ")}`
    : "";

  return (
`*BEARING QUOTATION REQUEST*
----------------------------------------
• Part Number: *${product.partNumber}*
• Category: ${product.name || product.categoryName || "Industrial Bearing"}${size}${brands}
• Required Quantity: ___ pcs
• Delivery Location: ___ (City/State)
----------------------------------------
_Ref: EZZI Bearing Suppliers [${pageContext}]_
Please check availability and send quotation.`
  );
}

/**
 * Consolidated Multi-Item BOM Enquiry Message
 */
export function buildBOMEnquiryMessage(
  items: {
    partNumber: string;
    categoryName?: string;
    dimensions?: string;
    brands?: string[];
    quantity: number;
  }[],
  details?: {
    company?: string;
    city?: string;
  },
  pageContext: string = "BOM Quote Drawer"
): string {
  if (items.length === 0) return "";

  const itemsList = items
    .map((item, idx) => {
      const dim = item.dimensions ? ` (${item.dimensions})` : "";
      return `${idx + 1}. *${item.partNumber}*${dim} — Qty: ${item.quantity} pcs`;
    })
    .join("\n");

  return (
`*MULTI-ITEM BEARING RFQ (BOM)*
----------------------------------------
*Required Bearings (${items.length} line items):*
${itemsList}

----------------------------------------
*Buyer Details:*
• Company / Shop: ${details?.company || "Not specified"}
• Delivery City & State: ${details?.city || "Maharashtra / All-India"}
----------------------------------------
_Source: EZZI Bearing Suppliers [${pageContext}]_
Please confirm availability and delivery schedule.`
  );
}

/**
 * Quote Request Form Submission Message
 */
export function buildQuoteFormMessage(
  formData: {
    name: string;
    phone: string;
    company?: string;
    city: string;
    bearingNumbers: string;
    quantity?: string;
    message?: string;
  },
  pageContext: string = "Quote Request Portal"
): string {
  return (
`*NEW BEARING QUOTE REQUEST*
----------------------------------------
• *Buyer Name:* ${formData.name}
• *Mobile:* ${formData.phone}
• *Company / Firm:* ${formData.company || "Individual / Workshop"}
• *Delivery City/State:* ${formData.city}
• *Bearing Numbers / Description:*
${formData.bearingNumbers}
• *Required Quantity:* ${formData.quantity || "Please quote"}
${formData.message ? `• *Additional Notes:* ${formData.message}\n` : ""}----------------------------------------
_Ref: EZZI Bearing Suppliers [${pageContext}]_
Please send quotation.`
  );
}

/**
 * Wholesale & Bulk Freight Procurement Form Message
 */
export function buildBulkEnquiryMessage(
  formData: {
    name: string;
    phone: string;
    company?: string;
    city: string;
    partNumbers?: string;
    estimatedQuantity?: string;
    message?: string;
  },
  pageContext: string = "Bulk Orders Portal"
): string {
  return (
`*WHOLESALE & BULK BEARING PROCUREMENT*
----------------------------------------
• *Contact Person:* ${formData.name}
• *Mobile Number:* ${formData.phone}
• *Company / Firm:* ${formData.company || "Wholesale Buyer"}
• *Destination City:* ${formData.city}
• *Required Series / Part Numbers:*
${formData.partNumbers || "Refer to message"}
• *Estimated Volume:* ${formData.estimatedQuantity || "Standard Packing"}
${formData.message ? `• *Special Instructions:* ${formData.message}\n` : ""}----------------------------------------
_Ref: EZZI Bearing Suppliers [${pageContext}]_
Please provide bulk quotation and delivery schedule.`
  );
}

/**
 * General Site Page Enquiry Message
 */
export function buildGeneralEnquiryMessage(
  pageTitle: string,
  customQuery?: string
): string {
  const query = customQuery 
    ? `\nI have a specific requirement: "${customQuery}"`
    : `\nI am browsing your catalog and would like to enquire about bearing availability.`;

  return (
`Hello EZZI Bearing Suppliers,
${query}

_Page Reference: ${pageTitle}_
Please connect me with your sales desk.`
  );
}
