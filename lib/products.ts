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
  dynamicLoad: string;
  staticLoad: string;
  limitingSpeed: string;
  weight: string;
  cage: string;
  clearance: string;
  sealType: string;
  popularApplications: string[];
  stockLocation: string;
  badge: string;
  description: string;
  slug?: string;
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
  slug: slugify(p.partNumber),
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
    seoIntro: "Deep groove ball bearings are the most versatile and widely utilized rolling bearing family across Indian manufacturing plants, agro pumps, and automotive machinery. Engineered with uninterrupted deep raceway grooves that conform closely with precision steel balls, they accommodate high-speed radial loads and moderate axial thrust in both directions. At EZZI Bearing Suppliers, we maintain ready stock across standard clearance (CN), C3 thermal margin, double rubber contact seals (2RS), and metal dust shields (ZZ) from SKF, TATA, XNO, and DSF at our Manmad hub.",
    aboutType: "Deep groove ball bearings feature a simple, non-separable design capable of operating at very high rotational velocities with low friction and minimal maintenance requirements.",
    typicalApplications: ["Electric Motors & Centrifugal Pumps", "Automotive Alternators & Starters", "Textile Spinning Frames", "Agricultural Monoblock Pumps", "Conveyor Rollers"]
  },
  {
    id: "tapered-roller",
    name: "Metric Tapered Roller Bearings",
    shortName: "Taper Roller",
    code: "TRB",
    icon: "taper-roller",
    description: "Heavy-duty tapered rollers handling combined steep radial and thrust loads in gearboxes and differentials.",
    commonSeries: "30200, 30300, 32000, 32200, 32300 Series",
    featuredBadge: "High Shock",
    count: PRODUCTS.filter((p) => p.category === "tapered-roller").length,
    seoIntro: "Metric tapered roller bearings are engineered specifically to absorb severe simultaneous radial forces and heavy unidirectional thrust loads common in heavy vehicle wheel axles, industrial gear reducers, and sugar mill transmission boxes. Their tapered inner cone, outer cup, and precision rollers converge at a common apex on the bearing axis to guarantee pure rolling motion without skidding. EZZI Bearing Suppliers is a trusted stockist supplying verified metric taper series across Nashik, Pune, Mumbai, MP, and pan-India.",
    aboutType: "Tapered roller bearings are separable assemblies consisting of an inner ring with roller and cage assembly (cone) and an outer ring (cup). Internal clearance is set during mounting.",
    typicalApplications: ["Commercial Vehicle Wheel Hubs", "Industrial Gearbox Reducers", "Agricultural Tractor Transmissions", "Quarry Jaw Crushers", "Rolling Mill Pinion Stands"]
  },
  {
    id: "taper-cone-cup",
    name: "Tapered Roller Cone & Cup Sets",
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
    id: "snap-ring-ball",
    name: "Ball Bearings with Snap Ring",
    shortName: "Snap Ring Series",
    code: "DGBB-NR",
    icon: "snap-ring",
    description: "Deep groove ball bearings with outer ring locating snap ring groove for simplified automotive transmission mounting.",
    commonSeries: "6208-2N, 6210N, 6305-2N, 6308-2N Series",
    featuredBadge: "Automotive Gear",
    count: PRODUCTS.filter((p) => p.category === "snap-ring-ball").length,
    seoIntro: "Bearings with outer ring snap ring grooves (NR / 2N) simplify automotive gearbox assembly by providing a positive axial stop directly against the transmission housing wall. This compact design eliminates the need for machined retaining shoulders and external lock nuts, saving housing space and assembly labor in commercial vehicle gearboxes.",
    aboutType: "These bearings integrate an annular groove in the outer ring fitted with an external snap ring, offering simplified axial location inside compact casings.",
    typicalApplications: ["Automotive Manual Transmissions", "Tractor Countershafts", "Compact Industrial Reducers", "Power Take-Off (PTO) Units"]
  },
  {
    id: "clutch-release",
    name: "Clutch Release & Thrust Bearings",
    shortName: "Clutch Bearings",
    code: "CRB-AUTO",
    icon: "clutch",
    description: "Automotive clutch release bearing assemblies for Tata, Leyland, Mahindra, and heavy commercial vehicles.",
    commonSeries: "T101, T119, T126, T138(TR), T144(OS), T151(TR)",
    featuredBadge: "Commercial Fleet",
    count: PRODUCTS.filter((p) => p.category === "clutch-release").length,
    seoIntro: "Automotive clutch release bearings are specialized angular contact and thrust units engineered to absorb severe axial disengagement pressure when depressing the vehicle clutch pedal. Built with high-temperature synthetic grease and durable contact seals, our clutch series supports heavy transport fleets, agricultural tractors, and light commercial vehicles.",
    aboutType: "Clutch release assemblies feature self-aligning bearing rings and specialized guide sleeves to prevent pedal pulsation and clutch drag.",
    typicalApplications: ["Tata & Ashok Leyland Heavy Trucks", "Mahindra Utility Vehicles", "Eicher & Swaraj Tractors", "Earthmoving Plant Clutches"]
  },
  {
    id: "angular-contact",
    name: "Double Row Angular Contact",
    shortName: "Angular Contact",
    code: "ACBB",
    icon: "angular-contact",
    description: "Double row bearings for combined radial and bidirectional thrust loads in wheel hubs and compressors.",
    commonSeries: "33005, 33010, 33013, 33019, 33111, 33214, DAC 3668",
    featuredBadge: "Bidirectional",
    count: PRODUCTS.filter((p) => p.category === "angular-contact").length,
    seoIntro: "Double row angular contact ball bearings correspond design-wise to two single row angular contact bearings arranged back-to-back, taking up less axial space. They accommodate heavy radial loads and tilting moments as well as bidirectional axial loads across screw compressors, centrifugal pumps, and automotive wheel hubs.",
    aboutType: "Features a steep contact angle that provides rigid shaft support and high axial thrust capacity in both directions.",
    typicalApplications: ["Centrifugal Slurry Pumps", "Screw Air Compressors", "Industrial Gear Drives", "Automotive Driven Wheels"]
  },
  {
    id: "wheel-roller",
    name: "Wheel & Roller Bearings (WRB)",
    shortName: "Wheel / WRB",
    code: "WRB",
    icon: "wheel",
    description: "Specialized automotive wheel bearings and material handling industrial roller components.",
    commonSeries: "1005 WRB, 3520 WRB, 16007 WRB, 98205 WRB",
    featuredBadge: "Special WRB",
    count: PRODUCTS.filter((p) => p.category === "wheel-roller").length,
    seoIntro: "Wheel and roller bearings (WRB series) are tailored for rigorous material handling conveyors, overhead crane track wheels, and vehicle wheel assemblies where rolling components withstand abrasive road grit, continuous rotation, and wash-down moisture.",
    aboutType: "Reinforced roller cages and heavy-duty outer races engineered for high impact wheel and conveyor track contact.",
    typicalApplications: ["Overhead Crane Trolleys", "Sugar Mill Cane Table Rollers", "Mining Conveyor Idlers", "Special Purpose Vehicles"]
  },
  {
    id: "automotive-hub",
    name: "Automotive Hub Bearings (BAH)",
    shortName: "Hub Units",
    code: "HUB",
    icon: "hub",
    description: "Integrated passenger and commercial vehicle wheel hub bearing units with multi-lip sealing.",
    commonSeries: "BAH0031, BAH0036, BAH0052, BAH0087, BAH0104",
    featuredBadge: "Wheel Hub",
    count: PRODUCTS.filter((p) => p.category === "automotive-hub").length,
    seoIntro: "Generation-1 sealed wheel hub bearings (BAH series) feature pre-greased, pre-adjusted double row ball or taper roller geometry sealed for life. Designed to eliminate manual wheel bearing adjustment during brake maintenance, BAH units reduce service downtime for passenger and commercial vehicle fleets.",
    aboutType: "Hermetically sealed wheel hub units pre-set with factory preload, high performance grease, and integrated multi-lip dust seals.",
    typicalApplications: ["Passenger Vehicle Front Wheels", "Light Commercial Vans", "SUV Rear Axles", "Fleet Maintenance Units"]
  },
  {
    id: "pillow-block",
    name: "Pillow & Plummer Block Units",
    shortName: "Pillow Blocks",
    code: "UCP/UCF",
    icon: "pillow-block",
    description: "Mounted cast iron housings for conveyors, sugar mills, elevators, and agricultural processing equipment.",
    commonSeries: "UCP 205, UCP 208, UCF 208, UCFL 206",
    featuredBadge: "Ready Mount",
    count: PRODUCTS.filter((p) => p.category === "pillow-block").length,
    seoIntro: "Mounted bearing units consist of an insert ball bearing with a sphered outer ring mounted inside rigid cast iron pillow block (UCP), four-bolt flange (UCF), or two-bolt flange (UCFL) housings. Self-aligning capability compensates for initial shaft deflection on long conveyors and agricultural machines.",
    aboutType: "Cast iron rigid housings featuring grease lubrication fittings and self-aligning insert bearings secured by set-screws.",
    typicalApplications: ["Bucket Elevators & Screw Feeders", "Grain Cleaning Mills", "Sugar Mill Bagasse Conveyors", "Stone Crusher Discharge Belts"]
  },
  {
    id: "spherical-roller",
    name: "Spherical Roller Bearings",
    shortName: "Spherical Roller",
    code: "SRB",
    icon: "spherical-roller",
    description: "Heavy industrial self-aligning bearings for sugar crushers, cement mills, vibrating screens, and heavy drives.",
    commonSeries: "22220-E, 22222-EK/C3, 22318-CC, OC 2207",
    featuredBadge: "Mill & Heavy",
    count: PRODUCTS.filter((p) => p.category === "spherical-roller").length,
    seoIntro: "Spherical roller bearings are the ultimate workhorses of heavy industry. Featuring two rows of symmetrical barrel-shaped rollers running in a common sphered outer ring raceway, they accommodate severe radial shock loads while self-aligning against heavy shaft misalignments common in sugar mills, cement crushers, and vibrating screens across Maharashtra and MP.",
    aboutType: "Two rows of barrel rollers and a spherical raceway allowing continuous self-alignment without inducing edge stresses.",
    typicalApplications: ["Sugar Cane Crushers & Mill Rolls", "Cement Rotary Kiln Drives", "Vibrating De-watering Screens", "Thermal Power Plant Pulverizers"]
  },
  {
    id: "cylindrical-roller",
    name: "Cylindrical Roller Bearings",
    shortName: "Cylindrical Roller",
    code: "CRB",
    icon: "cylindrical-roller",
    description: "High radial capacity bearings for locomotive traction motors, compressors, and high speed pumps.",
    commonSeries: "NU 209, NU 309, NU 2209",
    featuredBadge: "Traction Motor",
    count: PRODUCTS.filter((p) => p.category === "cylindrical-roller").length,
    seoIntro: "Cylindrical roller bearings provide exceptional radial load capacity and high-speed operation. Modified line contact between rollers and raceways prevents stress concentrations, while separable inner and outer rings simplify mounting in electric traction motors and heavy industrial pumps.",
    aboutType: "Precision ground rollers in line contact with hardened rings, providing the highest radial capacity for a given envelope size.",
    typicalApplications: ["Railway Traction Motors", "Centrifugal Multistage Pumps", "Heavy Reciprocating Compressors", "Industrial Gear Reducers"]
  },
  {
    id: "thrust-bearings",
    name: "Thrust Ball Bearings",
    shortName: "Thrust Bearings",
    code: "TB",
    icon: "thrust-bearing",
    description: "Pure axial load components for vehicle kingpins, crane swivels, and vertical machine spindles.",
    commonSeries: "51107, 51108, 51207, 51208",
    featuredBadge: "Pure Axial",
    count: PRODUCTS.filter((p) => p.category === "thrust-bearings").length,
    seoIntro: "Thrust ball bearings consist of shaft washers, housing washers, and ball and cage thrust assemblies designed exclusively for sustaining pure axial loads in vertical machine spindles, crane hooks, vehicle kingpins, and low-speed swivel tables.",
    aboutType: "Separable components designed exclusively for pure axial loading. Radial loads must not be applied.",
    typicalApplications: ["Heavy Crane Hooks & Swivels", "Vertical Drilling Spindles", "Commercial Vehicle Kingpins", "Hydraulic Press Platforms"]
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
    description: "Robust deep groove ball bearings, snap ring series, pillow blocks, and tapered sets for tractor transmissions, rotavators, threshers, and monoblock water pumps.",
    keyBearings: ["6204", "6205", "30205", "UCP 205", "6208-2N"],
    hubAdvantage: "Extensive wholesale stock for agricultural tractor mechanics and farm equipment manufacturers across Maharashtra.",
    applications: ["Tractor Gearboxes & PTOs", "Rotavator Rotor Shafts", "Centrifugal Water Pumps", "Grain Threshers & Harvesters"]
  },
  {
    id: "textile",
    name: "Textile Machinery & Spindles",
    icon: "layers",
    description: "High-speed precision miniature and deep groove ball bearings engineered for low-friction spinning frames, winding drums, looms, and texturing machines.",
    keyBearings: ["608", "626", "6002", "6202-2RS", "6203-ZZ"],
    hubAdvantage: "Supplying textile spinning clusters across Malegaon, Dhule, Surat, and Ichalkaranji.",
    applications: ["High Speed Spindle Bolsters", "Draw Frame Tension Rollers", "Winding Machine Drums", "Circular Knitting Heads"]
  },
  {
    id: "cement",
    name: "Cement Plants & Quarry Crushers",
    icon: "hammer",
    description: "Ultra heavy-duty spherical roller bearings, vibratory screen series, and plummer blocks built to withstand extreme dust, high temperatures, and shock.",
    keyBearings: ["32309", "32311", "22220-E", "32220", "UCP 208"],
    hubAdvantage: "Emergency breakdown stock dispatched within 24 hours to cement mills and stone quarries.",
    applications: ["Jaw & Cone Crusher Shafts", "Vibrating Sizing Screens", "Raw Mill Rollers", "Clinker Conveyors"]
  },
  {
    id: "steel",
    name: "Steel Mills & Heavy Fabrication",
    icon: "shield",
    description: "High-capacity cylindrical and spherical roller bearings engineered for continuous casting lines, mill pinion stands, and hot rolling conveyors.",
    keyBearings: ["NU 309", "22222-EK/C3", "30310", "32218"],
    hubAdvantage: "High load rating C3 clearance stock ready for severe thermal gradient environments.",
    applications: ["Rolling Mill Roll Necks", "Continuous Casting Guide Rollers", "Hot Billet Transfer Tables", "Heavy Slag Cranes"]
  },
  {
    id: "sugar",
    name: "Sugar Mills & Distilleries",
    icon: "factory",
    description: "Heavy spherical roller bearings for cane crushers, mill roll journals, centrifugals, bagasse belt conveyors, and turbine drives during crushing season.",
    keyBearings: ["22220-E", "22222-EK/C3", "32218", "32311", "UCP 208"],
    hubAdvantage: "Dedicated seasonal breakdown support across Nashik, Ahmednagar, Dhule, Jalgaon, and Solapur sugar factories.",
    applications: ["Cane Preparation Shredders", "Crushing Mill Roll Journals", "Centrifugal Sugar Baskets", "Bagasse Boiler Conveyors"]
  },
  {
    id: "material-handling",
    name: "Material Handling & Conveyors",
    icon: "box",
    description: "Mounted pillow blocks (UCP/UCF), take-up units, WRB wheel roller bearings, and deep groove bearings for bulk conveyor systems, elevators, and overhead cranes.",
    keyBearings: ["UCP 205", "UCF 208", "1005 WRB", "3520 WRB", "6308-2RS"],
    hubAdvantage: "Comprehensive inventory of mounted housings, insert bearings, and replacement rollers.",
    applications: ["Trough Belt Idlers", "Bucket Elevator Head Pulleys", "Overhead Traveling Crane Wheels", "Screw Feeder Shafts"]
  },
  {
    id: "general-engineering",
    name: "General Engineering & Machine Shops",
    icon: "wrench",
    description: "Complete catalogue of ball bearings, taper sets, thrust washers, and industrial hand tools for general machinery, maintenance workshops, and fabrication units.",
    keyBearings: ["6004", "6206", "6305", "51108", "QJ 209"],
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
  "22220-E",
  "LM 44649/10",
  "UCP 205"
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
