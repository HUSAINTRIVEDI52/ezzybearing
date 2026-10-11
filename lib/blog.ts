export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  keywords: string[];
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-the-right-bearing",
    title: "How to Choose the Right Bearing: A Practical Guide for Industrial Engineers & Mechanics",
    excerpt: "Selecting the correct bearing type requires balancing radial vs. axial loads, operating speed, lubrication method, operating temperature, and shaft deflection tolerances.",
    category: "Technical Selection",
    readTime: "6 min read",
    date: "October 2026",
    author: "Shabbir Sakriwala",
    keywords: ["how to choose bearing", "bearing selection guide", "radial vs axial load", "bearing life calculation", "industrial bearing guide"],
    content: [
      "Selecting the ideal bearing for an industrial gearbox, pump, or machine spindle is one of the most critical decisions a plant maintenance engineer or mechanic makes. A miscalculated bearing choice leads to excessive operating temperatures, accelerated race fatigue, lubrication starvation, and catastrophic machinery shutdown.",
      "### 1. Determine Load Magnitude and Direction",
      "The primary criterion in bearing selection is the nature of applied mechanical forces: radial loads (perpendicular to the shaft axis) vs. axial/thrust loads (parallel to the shaft axis).",
      "- **Pure Radial Loads:** If the shaft experiences predominantly radial forces with minimal axial thrust (e.g. electric motor belt pulleys, centrifugal fan shafts), Deep Groove Ball Bearings (6000, 6200, 6300 series) or Cylindrical Roller Bearings (NU series) are appropriate.",
      "- **Combined Heavy Radial and Thrust Loads:** When simultaneous heavy radial forces and steep axial thrust occur (e.g. vehicle wheel hubs, bevel gear pinions), Metric Tapered Roller Bearings (30200, 32200 series) provide superior apex-converging geometry.",
      "- **Bidirectional Axial Loads with Radial Support:** Double Row Angular Contact ball bearings or paired single-row angular contact sets are ideal for high-speed pumps and screw compressors.",
      "### 2. Rotational Speed (RPM) and Limiting Velocities",
      "Rolling element geometry dictates permissible speed. Ball bearings have point contact between the rolling ball and raceway, generating minimal internal friction torque and permitting the highest rotational velocities. In contrast, roller bearings possess line contact; while they provide substantially higher static and dynamic load ratings, their permissible speed is naturally lower.",
      "Always verify the manufacturer's limiting speed rating against your machine's continuous shaft RPM, especially when switching between grease lubrication and forced oil circulation.",
      "### 3. Radial Internal Clearance: CN vs. C3",
      "A frequent failure mode in industrial electric motors and pump drives is premature bearing seizure caused by improper clearance selection. Standard clearance (Normal or CN) is engineered for ambient temperatures where thermal expansion of the inner ring is modest.",
      "In heavy motors, kiln conveyors, or continuous production lines where heat transfers through the shaft, a **C3 internal clearance** is essential. The additional radial play provides thermal margin, ensuring the rolling elements do not pinch against raceways when the inner ring expands under operational heat.",
      "### 4. Shielding and Sealing: ZZ vs. 2RS",
      "- **Metal Shields (ZZ / 2Z):** Non-contact steel dust shields ideal for clean indoor environments requiring high operating RPM with negligible friction.",
      "- **Rubber Contact Seals (2RS / 2RSH):** Nitrile rubber contact seals that physically seal against the inner ring shoulder. Critical for dusty quarry plants, agricultural rotavators, and washdown environments.",
      "### Summary & Expert Procurement",
      "When in doubt, get in touch with EZZI Bearing Suppliers, Manmad. We are a stockist of SKF, TATA, XNO, and DSF bearings, with delivery across India."
    ]
  },
  {
    slug: "deep-groove-vs-tapered-roller-bearings",
    title: "Deep Groove vs. Tapered Roller Bearings: Differences, Load Capacities & Applications",
    excerpt: "Understand the core engineering contrasts between deep groove ball bearings and metric tapered roller bearings, from raceway contact geometry to preload adjustments.",
    category: "Engineering Comparison",
    readTime: "5 min read",
    date: "October 2026",
    author: "Ammar Sakriwala",
    keywords: ["deep groove vs tapered roller", "ball bearing vs roller bearing", "tapered roller bearing advantages", "bearing comparison"],
    content: [
      "In the world of mechanical transmission, two bearing families dominate modern rotating equipment: **Deep Groove Ball Bearings (DGBB)** and **Tapered Roller Bearings (TRB)**. While both serve to reduce friction and support rotating shafts, their internal mechanics and load handling profiles differ profoundly.",
      "### 1. Raceway Contact Geometry: Point vs. Line Contact",
      "The defining architectural difference lies in rolling element contact:",
      "- **Deep Groove Ball Bearings:** Feature spherical steel balls seated within deep raceway grooves. The ball meets the raceway at a single point (under zero load) or a micro-ellipse (under elastic deformation). This point contact generates minimal frictional torque, allowing ball bearings to achieve exceptionally high speeds with minimal heat generation.",
      "- **Tapered Roller Bearings:** Feature truncated conical rollers running along tapered raceways. The rollers make straight line contact with both the inner cone and outer cup. Line contact distributes heavy loads across a significantly larger steel surface area, resulting in dramatically higher load carrying capacities.",
      "### 2. Axial Load Capability and Directionality",
      "- **DGBB:** While primarily radial units, the deep curvature of the raceways allows them to support moderate axial thrust in both directions simultaneously without modification.",
      "- **TRB:** Tapered rollers are designed specifically to support steep unidirectional axial thrust alongside heavy radial loads. Because radial force naturally produces an induced axial component due to the taper angle, tapered roller bearings are virtually always mounted in opposition (back-to-back or face-to-face) with a second bearing to handle bidirectional stability.",
      "### 3. Mounting Complexity & Adjustment",
      "- **Deep Groove Ball Bearings are non-separable.** They come pre-assembled with factory-defined internal clearance. Installation involves simply pressing the rings onto shaft and housing shoulders.",
      "- **Tapered Roller Bearings are separable.** The inner cone (with cage and rollers) separates cleanly from the outer cup. This enables simpler individual mounting, but requires precise manual end-play or preload adjustment during assembly using shims, locknuts, or threaded rings.",
      "### 4. Ideal Application Breakdown",
      "| Parameter | Deep Groove Ball (e.g. 6205) | Tapered Roller (e.g. 30208) |\n|---|---|---|\n| Contact Type | Point Contact | Line Contact |\n| Speed Limit | Very High (up to 15,000+ RPM) | Moderate to High |\n| Shock Resistance | Moderate | Outstanding |\n| Axial Direction | Bidirectional | Unidirectional (requires pair) |\n| Typical Uses | Electric motors, water pumps, alternators | Truck wheel hubs, gearboxes, industrial equipment |",
      "### Sourcing Bearings in Manmad",
      "EZZI Bearing Suppliers is a stockist of SKF, TATA, XNO, and DSF bearings in Manmad, with delivery across India."
    ]
  },
  {
    slug: "bearing-number-guide",
    title: "Bearing Part Number Guide: Decoding Standard Prefixes, Suffixes & Series Codes",
    excerpt: "Learn how to read any standard ISO bearing number (e.g. 6205-2RS-C3, 32208, NU 309). Decode bore codes, series identifiers, cage suffixes, and thermal clearances.",
    category: "Reference Guide",
    readTime: "7 min read",
    date: "October 2026",
    author: "Shabbir Sakriwala",
    keywords: ["bearing number guide", "how to read bearing number", "bearing code meaning", "bearing suffix 2rs zz c3", "bearing bore code"],
    content: [
      "To the untrained eye, a bearing designation like **6208-2RS-C3** or **NU 309 ECP** looks like a random sequence of letters and numbers. In reality, international standard ISO 15 establishes an elegant alphanumeric system that defines the bearing family, width series, diameter series, bore size, seals, cage metallurgy, and internal radial clearance.",
      "### 1. The Core Bearing Number Structure",
      "A standard bearing designation consists of three distinct blocks: **Prefix + Basic Designation + Suffix**.",
      "For example, in `6205-2RS-C3`:",
      "- `6`: Bearing Type Code (Deep Groove Ball Bearing)",
      "- `2`: Dimension Series (Light Duty Width/OD)",
      "- `05`: Bore Code (25 mm inside diameter)",
      "- `2RS`: Suffix (Double rubber contact seals)",
      "- `C3`: Suffix (Clearance greater than Normal)",
      "### 2. Identifying the Bearing Family (The First Digit/Letters)",
      "- **6**: Single row deep groove ball bearing (e.g. 6004, 6205, 6308)",
      "- **3**: Metric tapered roller bearing (e.g. 30208, 32210, 32309)",
      "- **2**: Spherical roller bearing (e.g. 22218)",
      "- **5**: Thrust ball bearing (e.g. 51105, 51208)",
      "- **NU / NJ / NUP**: Cylindrical roller bearing with varying inner/outer rib arrangements",
      "### 3. The ISO Bore Size Rule (Last Two Digits)",
      "For standard bearings with bore diameters of 20 mm and above, the last two digits multiplied by 5 gives the exact inner bore in millimeters:",
      "- `04`: 04 × 5 = **20 mm**",
      "- `05`: 05 × 5 = **25 mm**",
      "- `06`: 06 × 5 = **30 mm**",
      "- `07`: 07 × 5 = **35 mm**",
      "- `08`: 08 × 5 = **40 mm**",
      "- `09`: 09 × 5 = **45 mm**",
      "- `10`: 10 × 5 = **50 mm**",
      "**Special Exceptions (00 to 03):**",
      "- `00` = 10 mm",
      "- `01` = 12 mm",
      "- `02` = 15 mm",
      "- `03` = 17 mm",
      "### 4. Common Suffix Codes Decoded",
      "- **Sealing:** `Z` = One metal dust shield; `ZZ` or `2Z` = Double metal shields; `RS` = One rubber contact seal; `2RS` or `2RSH` = Double rubber contact seals.",
      "- **Clearance:** `CN` = Normal clearance (standard, usually omitted); `C3` = Greater than normal radial clearance for thermal expansion; `C4` = Extra large clearance for extreme heat.",
      "- **Cages:** `M` = Machined brass cage; `J` = Pressed sheet steel cage; `TN9` or `ECP` = Glass fiber reinforced polyamide cage.",
      "- **Locating:** `NR` or `2N` = Snap ring groove with snap ring on the outer ring.",
      "### Keep this Guide Handy in Your Workshop",
      "Save this reference for your next equipment overhaul. If your machine's stamped part number has worn away, send the measured shaft diameter and housing bore to EZZI Bearing Suppliers on WhatsApp for assistance."
    ]
  }
];

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
