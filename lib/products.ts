import productsData from "@/data/products.json";

export interface Product {
  id: string;
  partNumber: string;
  name: string;
  category: string;
  categoryName: string;
  brands: string[];
  d: number;
  D: number;
  B: number;
  dimensionsVerified: boolean;
  dynamicLoad?: string;
  staticLoad?: string;
  limitingSpeed?: string;
  weight?: string;
  cage?: string;
  clearance?: string;
  sealType?: string;
  popularApplications: string[];
  stockLocation: string;
  badge: string;
  description: string;
  slug?: string;
  image?: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  shortName: string;
  code: string;
  icon: string;
  description: string;
  commonSeries: string;
  featuredBadge: string;
  count: number;
  enquiryOnly?: boolean;
  seoIntro?: string;
  aboutType?: string;
  typicalApplications?: string[];
}

export interface IndustryInfo {
  id: string;
  name: string;
  icon: string;
  description: string;
  keyBearings: string[];
  hubAdvantage: string;
  applications: string[];
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const RAW_PRODUCTS: Product[] = productsData as Product[];

// Enrich all products with pre-computed slug
const PRODUCTS: Product[] = RAW_PRODUCTS.map((p) => ({
  ...p,
  slug: p.slug || slugify(p.partNumber),
}));

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "deep-groove-ball",
    name: "Deep Groove Ball Bearings",
    shortName: "Ball Bearings",
    code: "DGBB",
    icon: "ball-bearing",
    description: "Universal radial ball bearings for electric motors, pumps, transmissions, and light conveyors.",
    commonSeries: "6000, 6200, 6300, Miniature (608, 626) Series",
    featuredBadge: "Fast Mover",
    count: PRODUCTS.filter((p) => p.category === "deep-groove-ball").length,
    seoIntro: "Deep groove ball bearings are the most versatile and widely utilized rolling bearing family across Indian manufacturing plants, agro pumps, and automotive machinery. Engineered with uninterrupted deep raceway grooves that conform closely with precision steel balls, they accommodate high-speed radial loads and moderate axial thrust in both directions. At EZZI Bearing Suppliers, we maintain ready stock from SKF, TATA, XNO, and DSF at our Manmad hub.",
    aboutType: "Deep groove ball bearings feature a simple, non-separable design capable of operating at very high rotational velocities with low friction and minimal maintenance requirements.",
    typicalApplications: ["Electric Motors & Centrifugal Pumps", "Automotive Alternators & Starters", "Textile Spinning Frames", "Agricultural Monoblock Pumps", "Conveyor Rollers"]
  },
  {
    id: "tapered-roller",
    name: "Tapered Roller Bearings",
    shortName: "Taper Roller",
    code: "TRB",
    icon: "taper-roller",
    description: "Heavy-duty tapered rollers handling combined steep radial and thrust loads in gearboxes and differentials.",
    commonSeries: "30200, 30300, 32200, 32300 Series",
    featuredBadge: "High Shock",
    count: PRODUCTS.filter((p) => p.category === "tapered-roller").length,
    seoIntro: "Metric tapered roller bearings are engineered specifically to absorb severe simultaneous radial forces and heavy unidirectional thrust loads common in heavy vehicle wheel axles, industrial gear reducers, and sugar mill transmission boxes. Their tapered inner cone, outer cup, and precision rollers converge at a common apex on the bearing axis to guarantee pure rolling motion without skidding.",
    aboutType: "Tapered roller bearings are separable assemblies consisting of an inner ring with roller and cage assembly (cone) and an outer ring (cup). Internal clearance is set during mounting.",
    typicalApplications: ["Commercial Vehicle Wheel Hubs", "Industrial Gearbox Reducers", "Agricultural Tractor Transmissions", "Quarry Jaw Crushers", "Rolling Mill Pinion Stands"]
  },
  {
    id: "taper-cone-cup",
    name: "Tapered Roller Bearing Cone & Cup Sets",
    shortName: "Cone & Cup Sets",
    code: "TRB-SET",
    icon: "cone-cup",
    description: "Matched inch and metric cup and cone bearing sets for tractor hubs, trailer axles, and commercial vehicles.",
    commonSeries: "LM 44649/10, 387/382, 399/394, 535/532 Series",
    featuredBadge: "Matched Sets",
    count: PRODUCTS.filter((p) => p.category === "taper-cone-cup").length,
    seoIntro: "Matched cone and cup sets provide precision factory-paired rolling geometry for heavy automotive differentials, tractor front and rear steering spindles, and industrial haulage trailer axles. Sold as complete matched assemblies, they eliminate dimensional mismatch between cups and cones, reducing premature fatigue and ensuring consistent preload settings under shock loads.",
    aboutType: "Matched cone and cup sets are designed for applications requiring high precision axial location and high shock absorption in severe fleet duty.",
    typicalApplications: ["Tractor Front & Rear Hubs", "Heavy Commercial Trailer Axles", "Differential Pinion Bearings", "Forklift Mast Rollers"]
  },
  {
    id: "clutch-release-thrust",
    name: "Clutch Release / Thrust Bearings",
    shortName: "Clutch & Thrust",
    code: "CRB-TB",
    icon: "clutch",
    description: "Automotive clutch release bearing assemblies and pure axial thrust ball bearings for commercial vehicles and machinery.",
    commonSeries: "T101, T119, T138(TR), 51107, 51108, 51207, 51208",
    featuredBadge: "Commercial Fleet",
    count: PRODUCTS.filter((p) => p.category === "clutch-release-thrust").length,
    seoIntro: "Automotive clutch release bearings and thrust ball bearings are specialized angular contact and pure axial thrust units engineered to absorb severe axial disengagement and kingpin pressure. Built for heavy commercial transport fleets, agricultural tractors, machine tool spindles, and swivel mechanisms across Maharashtra and pan-India.",
    aboutType: "Clutch release assemblies feature self-aligning bearing rings and specialized guide sleeves to prevent pedal pulsation, while thrust ball bearings sustain pure axial thrust without radial deflection.",
    typicalApplications: ["Tata & Ashok Leyland Heavy Trucks", "Mahindra Commercial Fleets", "Tractor Transmissions", "Machine Tool Vertical Spindles", "Crane Hook Swivels"]
  },
  {
    id: "wheel-hub",
    name: "Wheel & Hub Bearings",
    shortName: "Wheel & Hub",
    code: "WHB",
    icon: "wheel",
    description: "Integrated automotive wheel hub units (BAH) and heavy duty wheel/roller bearings (WRB) for vehicles and conveyors.",
    commonSeries: "BAH0031, BAH0036, 1005 WRB, 3520 WRB, 16007 WRB",
    featuredBadge: "Wheel Hub",
    count: PRODUCTS.filter((p) => p.category === "wheel-hub").length,
    seoIntro: "Generation-1 sealed wheel hub bearings (BAH series) and specialized wheel & roller bearings (WRB series) feature precision double row geometry engineered for automotive wheel applications and rigorous material handling conveyor equipment.",
    aboutType: "Hermetically sealed wheel hub units pre-set with factory preload, high performance synthetic grease, and reinforced multi-lip dust shields.",
    typicalApplications: ["Passenger Vehicle Front Wheels", "Commercial Fleet Wheel Hubs", "Conveyor Track Wheels", "Overhead Crane Trolleys"]
  },
  {
    id: "angular-contact-four-point",
    name: "Angular Contact & Four-Point Bearings",
    shortName: "Angular & 4-Point",
    code: "AC-4P",
    icon: "angular-contact",
    description: "Double row angular contact and four-point contact ball bearings for combined radial and bidirectional thrust loads.",
    commonSeries: "33005, 33010, 33013, 33019, QJ 208, QJ 309, QJ 311",
    featuredBadge: "Bidirectional",
    count: PRODUCTS.filter((p) => p.category === "angular-contact-four-point").length,
    seoIntro: "Double row angular contact and four-point contact ball bearings accommodate heavy radial loads and steep bidirectional axial thrust in compact machine envelopes. Ideal for industrial pumps, compressors, and automotive pinion supports.",
    aboutType: "Engineered with steep contact angles providing rigid axial shaft location and high tilting moment rigidity.",
    typicalApplications: ["Centrifugal Slurry Pumps", "Screw Air Compressors", "Industrial Gear Drives", "Automotive Driven Axles"]
  },
  {
    id: "cylindrical-spherical-roller",
    name: "Cylindrical & Spherical Roller Bearings",
    shortName: "Cylindrical & Spherical",
    code: "CRB-SRB",
    icon: "cylindrical-roller",
    description: "High radial capacity cylindrical roller bearings for traction motors and heavy self-aligning spherical roller bearings.",
    commonSeries: "NU 209, NU 309, NU 2209, OC 2207",
    featuredBadge: "Heavy Industrial",
    count: PRODUCTS.filter((p) => p.category === "cylindrical-spherical-roller").length,
    seoIntro: "Cylindrical and spherical roller bearings provide exceptional heavy-duty radial load capability and self-aligning tolerance for severe industrial machinery, railway traction drives, and vibrating equipment.",
    aboutType: "Modified line contact between rollers and raceways prevents stress concentrations, while spherical raceways accommodate continuous angular misalignment.",
    typicalApplications: ["Railway Traction Motors", "Centrifugal Multistage Pumps", "Industrial Gear Reducers", "Sugar Mill Drives"]
  },
  {
    id: "needle-roller",
    name: "Needle Roller Bearings",
    shortName: "Needle Roller",
    code: "NRB",
    icon: "needle-roller",
    description: "Compact radial cross-section needle roller bearings with high dynamic load capacity for automotive gearboxes and drives.",
    commonSeries: "TX 44SC, TX 2143SC, TX 53INT",
    featuredBadge: "Compact Radial",
    count: PRODUCTS.filter((p) => p.category === "needle-roller").length,
    seoIntro: "Needle roller bearings feature cylindrical rollers with a high length-to-diameter ratio, delivering maximum load capacity within minimal radial installation space in automotive transmissions and compact reduction drives.",
    aboutType: "Precision ground needle rollers contained in hardened cages or drawn cup steel outer rings.",
    typicalApplications: ["Automotive Manual Transmissions", "Differential Planet Gears", "Power Take-Off Units", "Compact Speed Reducers"]
  },
  {
    id: "belt-tensioner-idler",
    name: "Belt Tensioner & Idler Bearings",
    shortName: "Tensioner & Idler",
    code: "TIB",
    icon: "tensioner",
    description: "Automotive belt tensioner and idler bearing assemblies for engine timing systems and serpentine accessory drives.",
    commonSeries: "VKM 76870, VKM 76871",
    featuredBadge: "Engine Drives",
    count: PRODUCTS.filter((p) => p.category === "belt-tensioner-idler").length,
    seoIntro: "Engine timing belt tensioners and auxiliary idler pulley assemblies ensure smooth power transmission, dampen vibration, and maintain optimal belt tension across passenger and commercial automotive fleets.",
    aboutType: "Sealed-for-life deep groove ball units with specialized outer pulley rings and high-temperature grease.",
    typicalApplications: ["Engine Timing Belt Drives", "Alternator Serpentine Belts", "Commercial Vehicle Water Pump Belts"]
  },
  {
    id: "special-application",
    name: "Special Application Bearings",
    shortName: "Special Application",
    code: "SAB",
    icon: "special-app",
    description: "Specialized automotive and custom equipment bearings engineered for proprietary machinery and unique mountings.",
    commonSeries: "Special Automotive & Machine Series",
    featuredBadge: "Special Duty",
    count: PRODUCTS.filter((p) => p.category === "special-application").length,
    seoIntro: "Special application bearings address specific dimensional and operational requirements in specialized automotive systems, agricultural equipment, and custom processing machinery.",
    aboutType: "Custom manufactured geometry engineered to meet proprietary OEM equipment specifications.",
    typicalApplications: ["Special Purpose Vehicles", "Custom Agricultural Machinery", "Industrial Processing Units"]
  },
  {
    id: "hand-tools",
    name: "Hand Tools (enquiry only)",
    shortName: "Hand Tools",
    code: "TOOLS",
    icon: "hand-tools",
    description: "Industrial bearing pullers, fitting tool sets, wrenches, and workshop maintenance equipment available upon enquiry.",
    commonSeries: "Mechanical Pullers, Fitting Tool Sets, Spanners",
    featuredBadge: "Enquiry Only",
    count: 0,
    enquiryOnly: true,
    seoIntro: "In addition to rolling bearings, EZZI Bearing Suppliers supplies industrial workshop tools, mechanical bearing pullers, and fitting sets upon enquiry to ensure safe, damage-free bearing installation and removal.",
    aboutType: "High quality forged steel workshop tools for mechanical maintenance and assembly.",
    typicalApplications: ["Bearing Extraction & Pulling", "Cold Mounting & Impact Fitting", "Workshop Maintenance"]
  }
];

export const INDUSTRIES: IndustryInfo[] = [
  {
    id: "automotive",
    name: "Automotive & Commercial Vehicles",
    icon: "truck",
    description: "High durability tapered roller bearings, wheel hub assemblies (BAH), and clutch release units for Tata, Leyland, Mahindra, trucks, buses, and light commercial vehicles.",
    keyBearings: ["30208", "32210", "LM 44649/10", "T138(TR)", "BAH0031"],
    hubAdvantage: "Direct highway transport corridor access on NH-753J / NH-160 for overnight fleet supply.",
    applications: ["Front & Rear Wheel Hubs", "Differential Pinion Shafts", "Clutch Release Mechanisms", "Gearbox Countershafts"]
  },
  {
    id: "agriculture",
    name: "Agriculture & Farm Machinery",
    icon: "tractor",
    description: "Robust deep groove ball bearings, snap ring series, and tapered sets for tractor transmissions, rotavators, threshers, and monoblock water pumps.",
    keyBearings: ["6204", "6205", "30205", "32208", "6208-2N"],
    hubAdvantage: "Extensive wholesale stock for agricultural tractor mechanics and farm equipment manufacturers across Maharashtra.",
    applications: ["Tractor Gearboxes & PTOs", "Rotavator Rotor Shafts", "Centrifugal Water Pumps", "Grain Threshers & Harvesters"]
  },
  {
    id: "textile",
    name: "Textile Machinery & Spindles",
    icon: "layers",
    description: "High-speed precision miniature and deep groove ball bearings engineered for low-friction spinning frames, winding drums, looms, and texturing machines.",
    keyBearings: ["608", "626", "6002", "6202", "6203"],
    hubAdvantage: "Supplying textile spinning clusters across Malegaon, Dhule, Surat, and Ichalkaranji.",
    applications: ["High Speed Spindle Bolsters", "Draw Frame Tension Rollers", "Winding Machine Drums", "Circular Knitting Heads"]
  },
  {
    id: "cement",
    name: "Cement Plants & Quarry Crushers",
    icon: "hammer",
    description: "Ultra heavy-duty tapered and spherical roller bearings built to withstand extreme dust, high temperatures, and shock loads.",
    keyBearings: ["32309", "32311", "32220", "30310", "OC 2207"],
    hubAdvantage: "Emergency breakdown stock dispatched within 24 hours to cement mills and stone quarries.",
    applications: ["Jaw & Cone Crusher Shafts", "Vibrating Sizing Screens", "Raw Mill Rollers", "Clinker Conveyors"]
  },
  {
    id: "steel",
    name: "Steel Mills & Heavy Fabrication",
    icon: "shield",
    description: "High-capacity cylindrical and tapered roller bearings engineered for continuous casting lines, mill pinion stands, and hot rolling conveyors.",
    keyBearings: ["NU 309", "NU 209", "30310", "32218", "32220"],
    hubAdvantage: "High load rating stock ready for severe thermal gradient environments.",
    applications: ["Rolling Mill Roll Necks", "Continuous Casting Guide Rollers", "Hot Billet Transfer Tables", "Heavy Slag Cranes"]
  },
  {
    id: "sugar",
    name: "Sugar Mills & Distilleries",
    icon: "factory",
    description: "Heavy spherical roller bearings for cane crushers, mill roll journals, centrifugals, and heavy drives during crushing season.",
    keyBearings: ["OC 2207", "32218", "32311", "32220", "30215"],
    hubAdvantage: "Dedicated seasonal breakdown support across Nashik, Ahmednagar, Dhule, Jalgaon, and Solapur sugar factories.",
    applications: ["Cane Preparation Shredders", "Crushing Mill Roll Journals", "Centrifugal Sugar Baskets", "Bagasse Boiler Conveyors"]
  },
  {
    id: "material-handling",
    name: "Material Handling & Conveyors",
    icon: "box",
    description: "Specialized WRB wheel roller bearings, cylindrical rollers, and deep groove bearings for bulk conveyor systems, elevators, and overhead cranes.",
    keyBearings: ["1005  WRB", "3520  WRB", "16007  WRB", "6308", "NU 2209"],
    hubAdvantage: "Comprehensive inventory of specialized track wheel and replacement conveyor rollers.",
    applications: ["Trough Belt Idlers", "Bucket Elevator Head Pulleys", "Overhead Traveling Crane Wheels", "Screw Feeder Shafts"]
  },
  {
    id: "general-engineering",
    name: "General Engineering & Machine Shops",
    icon: "wrench",
    description: "Complete catalogue of ball bearings, taper sets, thrust washers, and industrial hand tools for general machinery, maintenance workshops, and fabrication units.",
    keyBearings: ["6004", "6206", "6305", "51108", "QJ 208"],
    hubAdvantage: "One-stop shop offering all types of bearing solutions and tools under one roof.",
    applications: ["Lathe & Milling Spindles", "Industrial Reduction Gearboxes", "Hydraulic Power Units", "Workshop Tool Drives"]
  }
];

export const FEATURED_BEARING_NUMBERS = [
  "6205",
  "6305",
  "6206",
  "32208",
  "30208",
  "NU 309",
  "OC 2207",
  "LM 44649/10",
  "T138(TR)"
];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductBySlug(category: string, slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.category === category && p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getCategoryById(id: string): CategoryInfo | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);
}

export function getFeaturedBearings(): Product[] {
  return PRODUCTS.filter((p) => FEATURED_BEARING_NUMBERS.includes(p.partNumber));
}

export function getCategories(): CategoryInfo[] {
  return CATEGORIES;
}

export function getIndustries(): IndustryInfo[] {
  return INDUSTRIES;
}
