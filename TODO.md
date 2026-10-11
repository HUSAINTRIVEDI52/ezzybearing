# Claims Awaiting Owner Confirmation & Feature Flags (TODO)

This document tracks all unverified claims that were removed or rewritten across the **EZZI Bearing Suppliers** codebase.

Only facts directly confirmed by the owner are active on the website:
- **Company Name:** EZZI Bearing Suppliers
- **Address:** Burhani Complex, Opp. Post Office, Near Bohri Masjid, Bohri Compound, Manmad - 423104, Maharashtra, India
- **Partners / Contacts:** Ammar Sakriwala (+91 88307 21850) & Shabbir Sakriwala (+91 92723 95247)
- **Brands Stocked:** SKF, TATA, XNO, DSF
- **Business Scope:** "Ball & Roller Taper Bearing, Hand Tools etc."
- **Slogan:** "All types of bearing solutions under one roof"
- **Tagline:** Quality • Precision • Trust
- **Logistics:** Delivery across India / all-India delivery
- **Order Types:** Bulk and wholesale orders welcome
- **Products:** 193 verified items from the official Excel catalogue

---

## How to Re-Enable Confirmed Claims

In [`/lib/siteConfig.ts`](file:///c:/Users/husai/OneDrive/Documents/Ammarbhai/lib/siteConfig.ts), toggle the corresponding flag from `false` to `true` under `siteFlags`:

```typescript
export const siteFlags = {
  showAuthorizedDistributor: false,      // Set to true if authorized stockist certificate is confirmed
  showGstInvoices: false,                // Set to true if official GST invoices are provided
  showSameDayDispatch: false,            // Set to true if same-day dispatch is guaranteed
  showYearsInBusiness: false,            // Set to true if exact years in business (e.g. 25+ years) is confirmed
  showEmergencySupport: false,           // Set to true if 24/7 breakdown support is available
  showLogisticsPartners: false,          // Set to true if V-Trans, TCI Freight, Safexpress contracts are confirmed
  showClientIndustryClaims: false,       // Set to true if direct supply to specific mills/clusters is confirmed
  showGuaranteedAuthenticClaims: false,  // Set to true if factory test certs / inspection reports are provided
};
```

---

## Inventory of Removed Claims

### 1. Authorised / Official Stockist Claims
- **Flag:** `siteFlags.showAuthorizedDistributor`
- **Removed Claims:**
  - "Authorised / Authorized / Official stockist"
  - "Official Stockist Brands"
  - "As stated on our official visiting card credential"
  - "Authorised Distribution & Stockist Portfolio"
- **Current Replacement Wording:**
  - *"Stockist of SKF, TATA, XNO, DSF"*
  - *"All types of bearing solutions under one roof"*
- **Affected Locations:** Header, Hero badge, BrandStrip, Footer, Brands page, About page, Metadata, JSON-LD schema, Contact page.

### 2. 100% Genuine, Zero Counterfeit & Direct OEM Claims
- **Flag:** `siteFlags.showGuaranteedAuthenticClaims`
- **Removed Claims:**
  - "100% genuine"
  - "100% Guaranteed Factory Sealed & Authentic Stock"
  - "Zero counterfeit risk"
  - "Direct OEM supply chain"
  - "OEM packaging, laser-etched serials, test certificates"
  - "Inspection Reports"
  - "Certified Industrial Stock" / "Certified stock"
  - "Verified Engineering Specifications"
  - "Factory Sealed Box"
  - "Authentic manufacturer authorized pipelines. Zero counterfeit guarantee."
- **Current Replacement Wording:**
  - *"Quality • Precision • Trust"*
  - *"Stockist of SKF, TATA, XNO, DSF. Bulk orders and delivery across India."*
- **Affected Locations:** Hero badges, Why Choose Ezzi, Trust strip, Product detail pages, Product quick modal, RFQ drawer, About page, FAQ section, Meta descriptions.

### 3. Years in Business & Family-Run Claims
- **Flag:** `siteFlags.showYearsInBusiness`
- **Removed Claims:**
  - "Over 25 Years of Trust"
  - "25+ Years Industrial Heritage"
  - "Family-run enterprise"
- **Current Replacement Wording:**
  - Replaced with core motto: *"Quality • Precision • Trust"* and *"All types of bearing solutions under one roof"*.
- **Affected Locations:** Trust strip, About page story, Home page value pillars, FAQ.

### 4. Dispatch Speeds, Overnight & Breakdown Timing Claims
- **Flag:** `siteFlags.showSameDayDispatch` & `siteFlags.showEmergencySupport`
- **Removed Claims:**
  - "Same-day dispatch / packing"
  - "24hr express"
  - "Within 24 Hours"
  - "Overnight parcel dispatch"
  - "Quotes within 30 minutes"
  - "Emergency breakdown stock/support"
  - "Seasonal breakdown support"
  - "24/7 Breakdown WhatsApp" / "24/7 on-call"
  - "Immediate Dispatch (Breakdown)" default selection
- **Current Replacement Wording:**
  - *"Delivery across India"*
  - *"Send us your bearing number for a quote"*
  - Standard inquiry options: *"Standard Requirement"*, *"Bulk Order Inquiry"*, *"Price Check & Comparison"*
- **Affected Locations:** Hero trust points, RFQ form urgency selector, Business hours widget, Contact page, Product modal footer, Bulk orders page.

### 5. Ready Stock & Inventory Quantities
- **Removed Claims:**
  - "Ready Stock" / "Depot Ready" / "Ready Dispatch" / "Manmad Stock"
  - "Physical inventory"
  - "198+ ready series" / "Over 198+"
  - "Complete Bearing Inventory ready for immediate dispatch"
- **Current Replacement Wording:**
  - *"Enquire for availability"*
  - *"Bearing Range & Catalogue (193 Series)"*
  - *"Browse our full range"*
- **Affected Locations:** Product catalog headers, Quick part finder search badges, Category header pills, Product cards, Meta tags.

### 6. Logistics Hub, Highways & Specific Transport Operators
- **Flag:** `siteFlags.showLogisticsPartners`
- **Removed Claims:**
  - "Manmad Junction Central Railway Cargo Hub"
  - "NH-753J / NH-160 highway corridor"
  - "Transit Node: Central Railway Parcel / V-Trans / TCI"
  - "Direct highway transport corridor"
  - Specific partner references: "V-Trans", "TCI Freight", "Safexpress", "Delhivery"
  - "Walking distance from Manmad Central Railway junction"
- **Current Replacement Wording:**
  - *"Delivery across India"*
  - *"Burhani Complex, Manmad • Delivery across India"*
- **Affected Locations:** About page logistics cards, Bulk orders logistics section, Why Choose Ezzi section, Privacy policy, Contact page map details, Footer.

### 7. Customer Locations & Specific Mill Supply Claims
- **Flag:** `siteFlags.showClientIndustryClaims`
- **Removed Claims:**
  - "Supplying textile clusters across Malegaon, Dhule, Surat, Ichalkaranji"
  - "Dedicated support to Nashik, Ahmednagar, Dhule, Jalgaon, Solapur sugar factories"
  - "Tata, Leyland, Mahindra" fleet claims
  - "Extensive wholesale stock for ... farm equipment manufacturers"
  - "Direct depot supply for sugar factories and commercial transport fleets"
- **Current Replacement Wording:**
  - Industries section now strictly describes bearing **types** commonly used in those industrial sectors (e.g. "Commonly uses deep groove ball bearings and cylindrical roller bearings"), without claiming current supply relationships.
- **Affected Locations:** Industries page, Home page IndustriesServed component, Products category overview descriptions, Blog posts.

### 8. GST Invoices & Commercial Tax Claims
- **Flag:** `siteFlags.showGstInvoices`
- **Removed Claims:**
  - "Tailored procurement pricing, GST invoices"
  - "Official GST invoices provided with every shipment"
  - "GSTIN compliance documentation"
- **Current Replacement Wording:**
  - Replaced in FAQ with: *"Which brands can I request? Stockist of SKF, TATA, XNO, and DSF."*
  - Removed GST requirement from standard WhatsApp enquiry builders.
- **Affected Locations:** FAQ section, Privacy policy, WhatsApp template messages.

### 9. Non-Stocked Brands (TIMKEN / FAG) & Per-Product Brand Chips
- **Removed Claims:**
  - Brand references to TIMKEN and FAG on product pages and brand filters.
  - Per-product brand chips (SKF / TATA / XNO / DSF) removed from product cards and product detail pages because the Excel catalogue does not assign brand-specific SKUs.
- **Current Replacement Wording:**
  - *"Available in the brands we stock. Ask for your preferred brand."*
- **Affected Locations:** ProductCard, ProductModal, Product detail page (`/products/[category]/[slug]`), RfqDrawer item cards.

### 10. Brand Card Origin & Tier Labels
- **Removed Labels:**
  - "Sweden / India", "India / Global" origin tags
  - "High OEM", "Tier OEM", "Heavy OEM", "High Value" tier badges
- **Current Replacement Wording:**
  - Brand cards keep only the brand name (SKF, TATA, XNO, DSF) and a neutral one-line technical description.
- **Affected Locations:** Brands page (`/brands`), Home BrandStrip component.

---

## Meta Description & Open Graph Rewrites

- **Previous Wording:**
  `"Ready stock with same-day dispatch across India"`
- **Current Wording:**
  `"EZZI Bearing Suppliers, Manmad. Stockist of SKF, TATA, XNO and DSF ball and roller bearings, tapered roller bearings and hand tools. Bulk orders and delivery across India. Get a quote on WhatsApp."`
- **Updated Locations:**
  - [`/lib/siteConfig.ts`](file:///c:/Users/husai/OneDrive/Documents/Ammarbhai/lib/siteConfig.ts) (`seoDescription`)
  - [`/app/layout.tsx`](file:///c:/Users/husai/OneDrive/Documents/Ammarbhai/app/layout.tsx) (`metadata.description`, `openGraph.description`, `twitter.description`, JSON-LD schema)
  - [`/app/page.tsx`](file:///c:/Users/husai/OneDrive/Documents/Ammarbhai/app/page.tsx)
  - [`/index.html`](file:///c:/Users/husai/OneDrive/Documents/Ammarbhai/index.html)
