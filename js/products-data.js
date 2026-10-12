/**
 * EZZI BEARING SUPPLIERS - Master Catalogue Database
 * Location: Burhani Complex, Opp. Post Office, Near Bohri Masjid, Manmad - 423104
 * Contacts: Shabbir Sakriwala (+91 92723 95247) | Ammar Sakriwala (+91 88307 21850)
 * Email: sales.ezzybearing@gmail.com
 * Total Live SKUs: 193 Genuine Products from Filled Inventory
 */

const BEARING_CATEGORIES = [
  {
    "id": "deep-groove-ball",
    "name": "Deep Groove Ball Bearings",
    "shortName": "Ball Bearings",
    "code": "DGBB",
    "icon": "ball-bearing",
    "description": "Universal radial ball bearings for electric motors, pumps, transmissions, and light conveyors.",
    "commonSeries": "6000, 6200, 6300, Miniature (608, 626) Series",
    "featuredBadge": "Fast Mover",
    "count": 63
  },
  {
    "id": "tapered-roller",
    "name": "Tapered Roller Bearings",
    "shortName": "Taper Roller",
    "code": "TRB",
    "icon": "taper-roller",
    "description": "Heavy-duty tapered rollers handling combined steep radial and thrust loads in gearboxes and differentials.",
    "commonSeries": "30200, 30300, 32200, 32300 Series",
    "featuredBadge": "High Shock",
    "count": 46
  },
  {
    "id": "taper-cone-cup",
    "name": "Tapered Roller Bearing Cone & Cup Sets",
    "shortName": "Cone & Cup Sets",
    "code": "TRB-SET",
    "icon": "cone-cup",
    "description": "Matched inch and metric cup and cone bearing sets for tractor hubs, trailer axles, and commercial vehicles.",
    "commonSeries": "LM 44649/10, 387/382, 399/394, 535/532 Series",
    "featuredBadge": "Matched Sets",
    "count": 32
  },
  {
    "id": "clutch-release-thrust",
    "name": "Clutch Release / Thrust Bearings",
    "shortName": "Clutch & Thrust",
    "code": "CRB-TB",
    "icon": "clutch",
    "description": "Automotive clutch release bearing assemblies and pure axial thrust ball bearings for commercial vehicles.",
    "commonSeries": "T101, T119, T138(TR), 51107, 51108, 51207, 51208",
    "featuredBadge": "Commercial Fleet",
    "count": 14
  },
  {
    "id": "wheel-hub",
    "name": "Wheel & Hub Bearings",
    "shortName": "Wheel & Hub",
    "code": "WHB",
    "icon": "wheel",
    "description": "Integrated automotive wheel hub units (BAH) and heavy duty wheel/roller bearings (WRB).",
    "commonSeries": "BAH0031, BAH0036, 1005 WRB, 3520 WRB, 16007 WRB",
    "featuredBadge": "Wheel Hub",
    "count": 14
  },
  {
    "id": "angular-contact-four-point",
    "name": "Angular Contact & Four-Point Bearings",
    "shortName": "Angular & 4-Point",
    "code": "AC-4P",
    "icon": "angular-contact",
    "description": "Double row angular contact and four-point contact bearings for combined radial and thrust loads.",
    "commonSeries": "33005, 33010, 33013, 33019, QJ 208, QJ 309, QJ 311",
    "featuredBadge": "Bidirectional",
    "count": 10
  },
  {
    "id": "cylindrical-spherical-roller",
    "name": "Cylindrical & Spherical Roller Bearings",
    "shortName": "Cylindrical & Spherical",
    "code": "CRB-SRB",
    "icon": "cylindrical-roller",
    "description": "High radial capacity cylindrical roller bearings and self-aligning spherical roller bearings.",
    "commonSeries": "NU 209, NU 309, NU 2209, OC 2207",
    "featuredBadge": "Heavy Industrial",
    "count": 4
  },
  {
    "id": "needle-roller",
    "name": "Needle Roller Bearings",
    "shortName": "Needle Roller",
    "code": "NRB",
    "icon": "needle-roller",
    "description": "High load capacity compact needle roller bearings for automotive transmissions and gearboxes.",
    "commonSeries": "TX 44SC, TX 2143SC, TX 53INT",
    "featuredBadge": "Compact Radial",
    "count": 3
  },
  {
    "id": "belt-tensioner-idler",
    "name": "Belt Tensioner & Idler Bearings",
    "shortName": "Tensioner & Idler",
    "code": "TIB",
    "icon": "tensioner",
    "description": "Automotive belt tensioner and idler bearing assemblies for engine timing and accessory drives.",
    "commonSeries": "VKM 76870, VKM 76871",
    "featuredBadge": "Engine Drives",
    "count": 2
  },
  {
    "id": "special-application",
    "name": "Special Application Bearings",
    "shortName": "Special Application",
    "code": "SAB",
    "icon": "special-app",
    "description": "Specialized automotive and custom equipment bearings engineered for proprietary machinery.",
    "commonSeries": "Custom Automotive & Machine Series",
    "featuredBadge": "Special Duty",
    "count": 5
  }

];

const BRANDS_STOCKED = [
  {
    "name": "SKF",
    "country": "Sweden / India",
    "tier": "Premium Global",
    "description": "Global benchmark in bearing technology, precision tolerances, and extended fatigue life.",
    "popularSeries": [
      "6205",
      "6305",
      "30208",
      "NU 309"
    ],
    "badge": "Premium OEM"
  },
  {
    "name": "TATA",
    "country": "India",
    "tier": "Heavy Automotive & Industrial",
    "description": "Rugged, high-reliability bearings trusted across Indian commercial vehicles and heavy agro machinery.",
    "popularSeries": [
      "6204",
      "32208",
      "LM 44649/10",
      "T138(TR)"
    ],
    "badge": "Heavy Duty"
  },
  {
    "name": "XNO",
    "country": "Industrial Quality",
    "tier": "Value Industrial",
    "description": "Cost-effective, dependable bearings for high-volume replacement and standard industrial duties.",
    "popularSeries": [
      "6004",
      "6206",
      "30205",
      "32210"
    ],
    "badge": "High Value"
  },
  {
    "name": "DSF",
    "country": "Precision Engineering",
    "tier": "Standard Industrial",
    "description": "Precision rolling components offering reliable performance for general machinery and workshop use.",
    "popularSeries": [
      "6002",
      "6203",
      "6308",
      "51108"
    ],
    "badge": "Industrial Grade"
  }
];

const INDUSTRIES_SERVED = [
  {
    "id": "automotive",
    "name": "Automotive & Commercial Vehicles",
    "keyBearings": [
      "30208",
      "32210",
      "LM 44649/10",
      "T138(TR)",
      "BAH0031"
    ]
  },
  {
    "id": "agriculture",
    "name": "Agriculture & Farm Machinery",
    "keyBearings": [
      "6204",
      "6205",
      "30205",
      "32208",
      "6208-2N"
    ]
  },
  {
    "id": "textile",
    "name": "Textile Machinery & Spindles",
    "keyBearings": [
      "608",
      "626",
      "6002",
      "6202",
      "6203"
    ]
  },
  {
    "id": "cement",
    "name": "Cement Plants & Quarry Crushers",
    "keyBearings": [
      "32309",
      "32311",
      "32220",
      "30310",
      "OC 2207"
    ]
  },
  {
    "id": "steel",
    "name": "Steel Mills & Heavy Fabrication",
    "keyBearings": [
      "NU 309",
      "NU 209",
      "30310",
      "32218",
      "32220"
    ]
  },
  {
    "id": "sugar",
    "name": "Sugar Mills & Distilleries",
    "keyBearings": [
      "OC 2207",
      "32218",
      "32311",
      "32220",
      "30215"
    ]
  },
  {
    "id": "material-handling",
    "name": "Material Handling & Conveyors",
    "keyBearings": [
      "1005  WRB",
      "3520  WRB",
      "16007  WRB",
      "6308",
      "NU 2209"
    ]
  },
  {
    "id": "general-engineering",
    "name": "General Engineering & Machine Shops",
    "keyBearings": [
      "6004",
      "6206",
      "6305",
      "51108",
      "QJ 208"
    ]
  }
];

const BEARING_PRODUCTS = [
  {
    "id": "ezzi-001-30203",
    "partNumber": "30203",
    "name": "Tapered Roller Bearing 30203",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 17,
    "D": 40,
    "B": 13.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30203. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30203",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-002-30204",
    "partNumber": "30204",
    "name": "Tapered Roller Bearing 30204",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 20,
    "D": 47,
    "B": 15.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30204. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30204",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-003-30206",
    "partNumber": "30206",
    "name": "Tapered Roller Bearing 30206",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 30,
    "D": 62,
    "B": 17.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30206. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30206",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-004-30207",
    "partNumber": "30207",
    "name": "Tapered Roller Bearing 30207",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 35,
    "D": 72,
    "B": 18.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30207. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30207",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-005-30208",
    "partNumber": "30208",
    "name": "Tapered Roller Bearing 30208",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 40,
    "D": 80,
    "B": 19.75,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30208. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30208",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-006-30209",
    "partNumber": "30209",
    "name": "Tapered Roller Bearing 30209",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 45,
    "D": 85,
    "B": 20.75,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30209. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30209",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-007-30210",
    "partNumber": "30210",
    "name": "Tapered Roller Bearing 30210",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 50,
    "D": 90,
    "B": 21.75,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30210. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30210",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-008-30211",
    "partNumber": "30211",
    "name": "Tapered Roller Bearing 30211",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 55,
    "D": 100,
    "B": 22.75,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30211. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30211",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-009-30212",
    "partNumber": "30212",
    "name": "Tapered Roller Bearing 30212",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 60,
    "D": 110,
    "B": 23.75,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30212. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30212",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-010-30213",
    "partNumber": "30213",
    "name": "Tapered Roller Bearing 30213",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 65,
    "D": 120,
    "B": 24.75,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30213. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30213",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-011-30214",
    "partNumber": "30214",
    "name": "Tapered Roller Bearing 30214",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 70,
    "D": 125,
    "B": 26.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30214. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30214",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-012-30215",
    "partNumber": "30215",
    "name": "Tapered Roller Bearing 30215",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 75,
    "D": 130,
    "B": 27.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30215. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30215",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-013-30205",
    "partNumber": "30205",
    "name": "Tapered Roller Bearing 30205",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 25,
    "D": 52,
    "B": 16.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30205. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30205",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-014-30304",
    "partNumber": "30304",
    "name": "Tapered Roller Bearing 30304",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 20,
    "D": 52,
    "B": 16.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30304. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30304",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-015-30302",
    "partNumber": "30302",
    "name": "Tapered Roller Bearing 30302",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 15,
    "D": 42,
    "B": 14.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30302. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30302",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-016-30305",
    "partNumber": "30305",
    "name": "Tapered Roller Bearing 30305",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 25,
    "D": 62,
    "B": 18.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30305. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30305",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-017-30306",
    "partNumber": "30306",
    "name": "Tapered Roller Bearing 30306",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 30,
    "D": 72,
    "B": 20.75,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30306. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30306",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-018-30307",
    "partNumber": "30307",
    "name": "Tapered Roller Bearing 30307",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 35,
    "D": 80,
    "B": 22.75,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30307. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30307",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-019-30308",
    "partNumber": "30308",
    "name": "Tapered Roller Bearing 30308",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 40,
    "D": 90,
    "B": 25.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30308. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30308",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-020-30309",
    "partNumber": "30309",
    "name": "Tapered Roller Bearing 30309",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 45,
    "D": 100,
    "B": 27.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30309. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30309",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-021-30312",
    "partNumber": "30312",
    "name": "Tapered Roller Bearing 30312",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 60,
    "D": 130,
    "B": 33.5,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 30312. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "30312",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-022-33019",
    "partNumber": "33019",
    "name": "Double Row Angular Contact Bearing 33019",
    "category": "angular-contact-four-point",
    "categoryName": "Angular Contact & Four-Point Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 95,
    "D": 145,
    "B": 37,
    "dimensionsVerified": true,
    "popularApplications": [
      "Angular Contact & Four-Point Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Double Row Angular Contact Bearing 33019. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "33019",
    "image": "/images/angular-contact.jpg"
  },
  {
    "id": "ezzi-023-33111",
    "partNumber": "33111",
    "name": "Double Row Angular Contact Bearing 33111",
    "category": "angular-contact-four-point",
    "categoryName": "Angular Contact & Four-Point Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Angular Contact & Four-Point Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Double Row Angular Contact Bearing 33111. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "33111",
    "image": "/images/angular-contact.jpg"
  },
  {
    "id": "ezzi-024-33010",
    "partNumber": "33010",
    "name": "Double Row Angular Contact Bearing 33010",
    "category": "angular-contact-four-point",
    "categoryName": "Angular Contact & Four-Point Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 50,
    "D": 80,
    "B": 24,
    "dimensionsVerified": true,
    "popularApplications": [
      "Angular Contact & Four-Point Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Double Row Angular Contact Bearing 33010. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "33010",
    "image": "/images/angular-contact.jpg"
  },
  {
    "id": "ezzi-025-33214",
    "partNumber": "33214",
    "name": "Double Row Angular Contact Bearing 33214",
    "category": "angular-contact-four-point",
    "categoryName": "Angular Contact & Four-Point Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Angular Contact & Four-Point Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Double Row Angular Contact Bearing 33214. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "33214",
    "image": "/images/angular-contact.jpg"
  },
  {
    "id": "ezzi-026-33215",
    "partNumber": "33215",
    "name": "Double Row Angular Contact Bearing 33215",
    "category": "angular-contact-four-point",
    "categoryName": "Angular Contact & Four-Point Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Angular Contact & Four-Point Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Double Row Angular Contact Bearing 33215. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "33215",
    "image": "/images/angular-contact.jpg"
  },
  {
    "id": "ezzi-027-33013",
    "partNumber": "33013",
    "name": "Double Row Angular Contact Bearing 33013",
    "category": "angular-contact-four-point",
    "categoryName": "Angular Contact & Four-Point Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 65,
    "D": 100,
    "B": 27,
    "dimensionsVerified": true,
    "popularApplications": [
      "Angular Contact & Four-Point Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Double Row Angular Contact Bearing 33013. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "33013",
    "image": "/images/angular-contact.jpg"
  },
  {
    "id": "ezzi-028-32305",
    "partNumber": "32305",
    "name": "Tapered Roller Bearing 32305",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 25,
    "D": 62,
    "B": 25.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32305. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32305",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-029-32306",
    "partNumber": "32306",
    "name": "Tapered Roller Bearing 32306",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 30,
    "D": 72,
    "B": 28.75,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32306. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32306",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-030-32307",
    "partNumber": "32307",
    "name": "Tapered Roller Bearing 32307",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 35,
    "D": 80,
    "B": 32.75,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32307. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32307",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-031-32308",
    "partNumber": "32308",
    "name": "Tapered Roller Bearing 32308",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 40,
    "D": 90,
    "B": 35.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32308. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32308",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-032-32309",
    "partNumber": "32309",
    "name": "Tapered Roller Bearing 32309",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 45,
    "D": 100,
    "B": 38.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32309. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32309",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-033-32311",
    "partNumber": "32311",
    "name": "Tapered Roller Bearing 32311",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 55,
    "D": 120,
    "B": 45.5,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32311. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32311",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-034-32206",
    "partNumber": "32206",
    "name": "Tapered Roller Bearing 32206",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 30,
    "D": 62,
    "B": 21.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32206. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32206",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-035-32207",
    "partNumber": "32207",
    "name": "Tapered Roller Bearing 32207",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 35,
    "D": 72,
    "B": 24.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32207. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32207",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-036-32208",
    "partNumber": "32208",
    "name": "Tapered Roller Bearing 32208",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 40,
    "D": 80,
    "B": 24.75,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32208. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32208",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-037-32209",
    "partNumber": "32209",
    "name": "Tapered Roller Bearing 32209",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 45,
    "D": 85,
    "B": 24.75,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32209. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32209",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-038-32210",
    "partNumber": "32210",
    "name": "Tapered Roller Bearing 32210",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 50,
    "D": 90,
    "B": 24.75,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32210. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32210",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-039-32211",
    "partNumber": "32211",
    "name": "Tapered Roller Bearing 32211",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 55,
    "D": 100,
    "B": 26.75,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32211. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32211",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-040-32212",
    "partNumber": "32212",
    "name": "Tapered Roller Bearing 32212",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 60,
    "D": 110,
    "B": 29.75,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32212. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32212",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-041-32213",
    "partNumber": "32213",
    "name": "Tapered Roller Bearing 32213",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 65,
    "D": 120,
    "B": 32.75,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32213. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32213",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-042-32214",
    "partNumber": "32214",
    "name": "Tapered Roller Bearing 32214",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 70,
    "D": 125,
    "B": 33.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32214. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32214",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-043-32215",
    "partNumber": "32215",
    "name": "Tapered Roller Bearing 32215",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 75,
    "D": 130,
    "B": 33.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32215. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32215",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-044-32216",
    "partNumber": "32216",
    "name": "Tapered Roller Bearing 32216",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 80,
    "D": 140,
    "B": 35.25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32216. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32216",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-045-32217",
    "partNumber": "32217",
    "name": "Tapered Roller Bearing 32217",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 85,
    "D": 150,
    "B": 38.5,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32217. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32217",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-046-32218",
    "partNumber": "32218",
    "name": "Tapered Roller Bearing 32218",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 90,
    "D": 160,
    "B": 42.5,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32218. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32218",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-047-32220",
    "partNumber": "32220",
    "name": "Tapered Roller Bearing 32220",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 100,
    "D": 180,
    "B": 49,
    "dimensionsVerified": true,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32220. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32220",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-048-3984-327",
    "partNumber": "3984/327",
    "name": "Tapered Roller Bearing Cone & Cup Set 3984/327",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 3984/327. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "3984-327",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-049-09067-09195",
    "partNumber": "09067/09195",
    "name": "Tapered Roller Bearing Cone & Cup Set 09067/09195",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 09067/09195. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "09067-09195",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-050-6379-6320",
    "partNumber": "6379/6320",
    "name": "Tapered Roller Bearing Cone & Cup Set 6379/6320",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 6379/6320. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6379-6320",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-051-50kw-3720",
    "partNumber": "50KW/3720",
    "name": "Tapered Roller Bearing Cone & Cup Set 50KW/3720",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 50KW/3720. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "50kw-3720",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-052-306497",
    "partNumber": "306497",
    "name": "Special Application Bearing 306497",
    "category": "special-application",
    "categoryName": "Special Application Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Special Application Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Special Application Bearing 306497. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "306497",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-053-509043",
    "partNumber": "509043",
    "name": "Special Application Bearing 509043",
    "category": "special-application",
    "categoryName": "Special Application Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Special Application Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Special Application Bearing 509043. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "509043",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-054-387-382",
    "partNumber": "387/382",
    "name": "Tapered Roller Bearing Cone & Cup Set 387/382",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 387/382. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "387-382",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-055-399-394",
    "partNumber": "399/394",
    "name": "Tapered Roller Bearing Cone & Cup Set 399/394",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 399/394. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "399-394",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-056-414-418",
    "partNumber": "414/418",
    "name": "Tapered Roller Bearing Cone & Cup Set 414/418",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 414/418. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "414-418",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-057-462-453",
    "partNumber": "462/453",
    "name": "Tapered Roller Bearing Cone & Cup Set 462/453",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 462/453. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "462-453",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-058-482-472",
    "partNumber": "482/472",
    "name": "Tapered Roller Bearing Cone & Cup Set 482/472",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 482/472. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "482-472",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-059-535-532",
    "partNumber": "535/532",
    "name": "Tapered Roller Bearing Cone & Cup Set 535/532",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 535/532. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "535-532",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-060-539-532",
    "partNumber": "539/532",
    "name": "Tapered Roller Bearing Cone & Cup Set 539/532",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 539/532. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "539-532",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-061-566-563",
    "partNumber": "566/563",
    "name": "Tapered Roller Bearing Cone & Cup Set 566/563",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 566/563. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "566-563",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-062-567-563",
    "partNumber": "567/563",
    "name": "Tapered Roller Bearing Cone & Cup Set 567/563",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 567/563. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "567-563",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-063-580-572",
    "partNumber": "580/572",
    "name": "Tapered Roller Bearing Cone & Cup Set 580/572",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 580/572. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "580-572",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-064-683-672",
    "partNumber": "683/672",
    "name": "Tapered Roller Bearing Cone & Cup Set 683/672",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 683/672. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "683-672",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-065-3982-3920",
    "partNumber": "3982/3920",
    "name": "Tapered Roller Bearing Cone & Cup Set 3982/3920",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 3982/3920. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "3982-3920",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-066-3585-3525",
    "partNumber": "3585/3525",
    "name": "Tapered Roller Bearing Cone & Cup Set 3585/3525",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 3585/3525. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "3585-3525",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-067-11590-11520",
    "partNumber": "11590/11520",
    "name": "Tapered Roller Bearing Cone & Cup Set 11590/11520",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 11590/11520. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "11590-11520",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-068-11949-910",
    "partNumber": "11949/910",
    "name": "Tapered Roller Bearing Cone & Cup Set 11949/910",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 11949/910. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "11949-910",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-069-12649-12610",
    "partNumber": "12649/12610",
    "name": "Tapered Roller Bearing Cone & Cup Set 12649/12610",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 12649/12610. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "12649-12610",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-070-15123-15245",
    "partNumber": "15123/15245",
    "name": "Tapered Roller Bearing Cone & Cup Set 15123/15245",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 15123/15245. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "15123-15245",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-071-24780-24720",
    "partNumber": "24780/24720",
    "name": "Tapered Roller Bearing Cone & Cup Set 24780/24720",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 24780/24720. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "24780-24720",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-072-25577-25523",
    "partNumber": "25577/25523",
    "name": "Tapered Roller Bearing Cone & Cup Set 25577/25523",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 25577/25523. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "25577-25523",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-073-25877-25821",
    "partNumber": "25877/25821",
    "name": "Tapered Roller Bearing Cone & Cup Set 25877/25821",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 25877/25821. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "25877-25821",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-074-48548-10",
    "partNumber": "48548/10",
    "name": "Tapered Roller Bearing Cone & Cup Set 48548/10",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 48548/10. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "48548-10",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-075-501349-10",
    "partNumber": "501349/10",
    "name": "Tapered Roller Bearing Cone & Cup Set 501349/10",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 501349/10. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "501349-10",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-076-603049-11",
    "partNumber": "603049/11",
    "name": "Tapered Roller Bearing Cone & Cup Set 603049/11",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 603049/11. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "603049-11",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-077-1988-1922",
    "partNumber": "1988/1922",
    "name": "Tapered Roller Bearing Cone & Cup Set 1988/1922",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 1988/1922. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "1988-1922",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-078-67048-10",
    "partNumber": "67048/10",
    "name": "Tapered Roller Bearing Cone & Cup Set 67048/10",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 67048/10. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "67048-10",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-079-603249-10",
    "partNumber": "603249/10",
    "name": "Tapered Roller Bearing Cone & Cup Set 603249/10",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set 603249/10. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "603249-10",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-080-626",
    "partNumber": "626",
    "name": "Deep Groove Ball Bearing 626",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 6,
    "D": 19,
    "B": 6,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 626. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "626",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-081-629",
    "partNumber": "629",
    "name": "Deep Groove Ball Bearing 629",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 9,
    "D": 26,
    "B": 8,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 629. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "629",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-082-606",
    "partNumber": "606",
    "name": "Deep Groove Ball Bearing 606",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 6,
    "D": 17,
    "B": 6,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 606. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "606",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-083-607",
    "partNumber": "607",
    "name": "Deep Groove Ball Bearing 607",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 7,
    "D": 19,
    "B": 6,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 607. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "607",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-084-608",
    "partNumber": "608",
    "name": "Deep Groove Ball Bearing 608",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 8,
    "D": 22,
    "B": 7,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 608. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "608",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-085-609",
    "partNumber": "609",
    "name": "Deep Groove Ball Bearing 609",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 9,
    "D": 24,
    "B": 7,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 609. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "609",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-086-698",
    "partNumber": "698",
    "name": "Deep Groove Ball Bearing 698",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 8,
    "D": 19,
    "B": 6,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 698. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "698",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-087-6000",
    "partNumber": "6000",
    "name": "Deep Groove Ball Bearing 6000",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 10,
    "D": 26,
    "B": 8,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6000. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6000",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-088-6001",
    "partNumber": "6001",
    "name": "Deep Groove Ball Bearing 6001",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 12,
    "D": 28,
    "B": 8,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6001. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6001",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-089-6002",
    "partNumber": "6002",
    "name": "Deep Groove Ball Bearing 6002",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 15,
    "D": 32,
    "B": 9,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6002. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6002",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-090-6003",
    "partNumber": "6003",
    "name": "Deep Groove Ball Bearing 6003",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 17,
    "D": 35,
    "B": 10,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6003. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6003",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-091-6004",
    "partNumber": "6004",
    "name": "Deep Groove Ball Bearing 6004",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 20,
    "D": 42,
    "B": 12,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6004. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6004",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-092-6005",
    "partNumber": "6005",
    "name": "Deep Groove Ball Bearing 6005",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 25,
    "D": 47,
    "B": 12,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6005. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6005",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-093-6006",
    "partNumber": "6006",
    "name": "Deep Groove Ball Bearing 6006",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 30,
    "D": 55,
    "B": 13,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6006. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6006",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-094-6007",
    "partNumber": "6007",
    "name": "Deep Groove Ball Bearing 6007",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 35,
    "D": 62,
    "B": 14,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6007. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6007",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-095-6008",
    "partNumber": "6008",
    "name": "Deep Groove Ball Bearing 6008",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 40,
    "D": 68,
    "B": 15,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6008. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6008",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-096-6009",
    "partNumber": "6009",
    "name": "Deep Groove Ball Bearing 6009",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 45,
    "D": 75,
    "B": 16,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6009. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6009",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-097-6010",
    "partNumber": "6010",
    "name": "Deep Groove Ball Bearing 6010",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 50,
    "D": 80,
    "B": 16,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6010. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6010",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-098-6011",
    "partNumber": "6011",
    "name": "Deep Groove Ball Bearing 6011",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 55,
    "D": 90,
    "B": 18,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6011. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6011",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-099-6200",
    "partNumber": "6200",
    "name": "Deep Groove Ball Bearing 6200",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 10,
    "D": 30,
    "B": 9,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6200. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6200",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-100-6201",
    "partNumber": "6201",
    "name": "Deep Groove Ball Bearing 6201",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 12,
    "D": 32,
    "B": 10,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6201. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6201",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-101-6202",
    "partNumber": "6202",
    "name": "Deep Groove Ball Bearing 6202",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 15,
    "D": 35,
    "B": 11,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6202. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6202",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-102-6203",
    "partNumber": "6203",
    "name": "Deep Groove Ball Bearing 6203",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 17,
    "D": 40,
    "B": 12,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6203. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6203",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-103-6204",
    "partNumber": "6204",
    "name": "Deep Groove Ball Bearing 6204",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 20,
    "D": 47,
    "B": 14,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6204. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6204",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-104-6205",
    "partNumber": "6205",
    "name": "Deep Groove Ball Bearing 6205",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 25,
    "D": 52,
    "B": 15,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6205. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6205",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-105-6206",
    "partNumber": "6206",
    "name": "Deep Groove Ball Bearing 6206",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 30,
    "D": 62,
    "B": 16,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6206. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6206",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-106-6207",
    "partNumber": "6207",
    "name": "Deep Groove Ball Bearing 6207",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 35,
    "D": 72,
    "B": 17,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6207. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6207",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-107-6208",
    "partNumber": "6208",
    "name": "Deep Groove Ball Bearing 6208",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 40,
    "D": 80,
    "B": 18,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6208. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6208",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-108-6209",
    "partNumber": "6209",
    "name": "Deep Groove Ball Bearing 6209",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 45,
    "D": 85,
    "B": 19,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6209. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6209",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-109-6210",
    "partNumber": "6210",
    "name": "Deep Groove Ball Bearing 6210",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 50,
    "D": 90,
    "B": 20,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6210. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6210",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-110-6211",
    "partNumber": "6211",
    "name": "Deep Groove Ball Bearing 6211",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 55,
    "D": 100,
    "B": 21,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6211. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6211",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-111-6212",
    "partNumber": "6212",
    "name": "Deep Groove Ball Bearing 6212",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 60,
    "D": 110,
    "B": 22,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6212. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6212",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-112-6213",
    "partNumber": "6213",
    "name": "Deep Groove Ball Bearing 6213",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 65,
    "D": 120,
    "B": 23,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6213. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6213",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-113-6214",
    "partNumber": "6214",
    "name": "Deep Groove Ball Bearing 6214",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 70,
    "D": 125,
    "B": 24,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6214. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6214",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-114-6215",
    "partNumber": "6215",
    "name": "Deep Groove Ball Bearing 6215",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 75,
    "D": 130,
    "B": 25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6215. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6215",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-115-6300",
    "partNumber": "6300",
    "name": "Deep Groove Ball Bearing 6300",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 10,
    "D": 35,
    "B": 11,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6300. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6300",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-116-6301",
    "partNumber": "6301",
    "name": "Deep Groove Ball Bearing 6301",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 12,
    "D": 37,
    "B": 12,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6301. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6301",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-117-6302",
    "partNumber": "6302",
    "name": "Deep Groove Ball Bearing 6302",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 15,
    "D": 42,
    "B": 13,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6302. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6302",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-118-6303",
    "partNumber": "6303",
    "name": "Deep Groove Ball Bearing 6303",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 17,
    "D": 47,
    "B": 14,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6303. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6303",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-119-6304",
    "partNumber": "6304",
    "name": "Deep Groove Ball Bearing 6304",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 20,
    "D": 52,
    "B": 15,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6304. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6304",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-120-6305",
    "partNumber": "6305",
    "name": "Deep Groove Ball Bearing 6305",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 25,
    "D": 62,
    "B": 17,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6305. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6305",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-121-6306",
    "partNumber": "6306",
    "name": "Deep Groove Ball Bearing 6306",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 30,
    "D": 72,
    "B": 19,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6306. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6306",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-122-6307",
    "partNumber": "6307",
    "name": "Deep Groove Ball Bearing 6307",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 35,
    "D": 80,
    "B": 21,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6307. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6307",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-123-6308",
    "partNumber": "6308",
    "name": "Deep Groove Ball Bearing 6308",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 40,
    "D": 90,
    "B": 23,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6308. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6308",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-124-6309",
    "partNumber": "6309",
    "name": "Deep Groove Ball Bearing 6309",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 45,
    "D": 100,
    "B": 25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6309. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6309",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-125-6310",
    "partNumber": "6310",
    "name": "Deep Groove Ball Bearing 6310",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 50,
    "D": 110,
    "B": 27,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6310. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6310",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-126-6311",
    "partNumber": "6311",
    "name": "Deep Groove Ball Bearing 6311",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 55,
    "D": 120,
    "B": 29,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6311. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6311",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-127-6312",
    "partNumber": "6312",
    "name": "Deep Groove Ball Bearing 6312",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 60,
    "D": 130,
    "B": 31,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6312. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6312",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-128-6313",
    "partNumber": "6313",
    "name": "Deep Groove Ball Bearing 6313",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 65,
    "D": 140,
    "B": 33,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6313. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6313",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-129-6314",
    "partNumber": "6314",
    "name": "Deep Groove Ball Bearing 6314",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 70,
    "D": 150,
    "B": 35,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6314. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6314",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-130-6315",
    "partNumber": "6315",
    "name": "Deep Groove Ball Bearing 6315",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 75,
    "D": 160,
    "B": 37,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 6315. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6315",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-131-6305-2n",
    "partNumber": "6305-2N",
    "name": "Deep Groove Ball Bearing (Snap Ring) 6305-2N",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 25,
    "D": 62,
    "B": 17,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing (Snap Ring) 6305-2N. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6305-2n",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-132-6307-2n",
    "partNumber": "6307-2N",
    "name": "Deep Groove Ball Bearing (Snap Ring) 6307-2N",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 35,
    "D": 80,
    "B": 21,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing (Snap Ring) 6307-2N. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6307-2n",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-133-6308-2n",
    "partNumber": "6308-2N",
    "name": "Deep Groove Ball Bearing (Snap Ring) 6308-2N",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 40,
    "D": 90,
    "B": 23,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing (Snap Ring) 6308-2N. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6308-2n",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-134-6208-2n",
    "partNumber": "6208-2N",
    "name": "Deep Groove Ball Bearing (Snap Ring) 6208-2N",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 40,
    "D": 80,
    "B": 18,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing (Snap Ring) 6208-2N. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6208-2n",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-135-6306n",
    "partNumber": "6306N",
    "name": "Deep Groove Ball Bearing (Snap Ring) 6306N",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 30,
    "D": 72,
    "B": 19,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing (Snap Ring) 6306N. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6306n",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-136-6310n",
    "partNumber": "6310N",
    "name": "Deep Groove Ball Bearing (Snap Ring) 6310N",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 50,
    "D": 110,
    "B": 27,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing (Snap Ring) 6310N. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6310n",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-137-6309n",
    "partNumber": "6309N",
    "name": "Deep Groove Ball Bearing (Snap Ring) 6309N",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 45,
    "D": 100,
    "B": 25,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing (Snap Ring) 6309N. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6309n",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-138-6210n",
    "partNumber": "6210N",
    "name": "Deep Groove Ball Bearing (Snap Ring) 6210N",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 50,
    "D": 90,
    "B": 20,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing (Snap Ring) 6210N. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6210n",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-139-6212n",
    "partNumber": "6212N",
    "name": "Deep Groove Ball Bearing (Snap Ring) 6212N",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 60,
    "D": 110,
    "B": 22,
    "dimensionsVerified": true,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing (Snap Ring) 6212N. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "6212n",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-140-qj-209",
    "partNumber": "QJ 209",
    "name": "Four-Point Contact Ball Bearing QJ 209",
    "category": "angular-contact-four-point",
    "categoryName": "Angular Contact & Four-Point Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Angular Contact & Four-Point Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Four-Point Contact Ball Bearing QJ 209. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "qj-209",
    "image": "/images/angular-contact.jpg"
  },
  {
    "id": "ezzi-141-qj-309",
    "partNumber": "QJ 309",
    "name": "Four-Point Contact Ball Bearing QJ 309",
    "category": "angular-contact-four-point",
    "categoryName": "Angular Contact & Four-Point Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Angular Contact & Four-Point Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Four-Point Contact Ball Bearing QJ 309. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "qj-309",
    "image": "/images/angular-contact.jpg"
  },
  {
    "id": "ezzi-142-nu-309",
    "partNumber": "NU 309",
    "name": "Cylindrical Roller Bearing NU 309",
    "category": "cylindrical-spherical-roller",
    "categoryName": "Cylindrical & Spherical Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Cylindrical & Spherical Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Cylindrical Roller Bearing NU 309. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "nu-309",
    "image": "/images/cylindrical-roller.jpg"
  },
  {
    "id": "ezzi-143-nu-209",
    "partNumber": "NU 209",
    "name": "Cylindrical Roller Bearing NU 209",
    "category": "cylindrical-spherical-roller",
    "categoryName": "Cylindrical & Spherical Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Cylindrical & Spherical Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Cylindrical Roller Bearing NU 209. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "nu-209",
    "image": "/images/cylindrical-roller.jpg"
  },
  {
    "id": "ezzi-144-nu-2209",
    "partNumber": "NU 2209",
    "name": "Cylindrical Roller Bearing NU 2209",
    "category": "cylindrical-spherical-roller",
    "categoryName": "Cylindrical & Spherical Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Cylindrical & Spherical Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Cylindrical Roller Bearing NU 2209. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "nu-2209",
    "image": "/images/cylindrical-roller.jpg"
  },
  {
    "id": "ezzi-145-qj-308",
    "partNumber": "QJ 308",
    "name": "Four-Point Contact Ball Bearing QJ 308",
    "category": "angular-contact-four-point",
    "categoryName": "Angular Contact & Four-Point Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Angular Contact & Four-Point Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Four-Point Contact Ball Bearing QJ 308. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "qj-308",
    "image": "/images/angular-contact.jpg"
  },
  {
    "id": "ezzi-146-wj-209",
    "partNumber": "WJ 209",
    "name": "Special Application Bearing WJ 209",
    "category": "special-application",
    "categoryName": "Special Application Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Special Application Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Special Application Bearing WJ 209. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "wj-209",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-147-wj-309",
    "partNumber": "WJ 309",
    "name": "Special Application Bearing WJ 309",
    "category": "special-application",
    "categoryName": "Special Application Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Special Application Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Special Application Bearing WJ 309. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "wj-309",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-148-bah0031",
    "partNumber": "BAH0031",
    "name": "Automotive Hub Bearing BAH0031",
    "category": "wheel-hub",
    "categoryName": "Wheel & Hub Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Wheel & Hub Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Automotive Hub Bearing BAH0031. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "bah0031",
    "image": "/images/wheel-hub.jpg"
  },
  {
    "id": "ezzi-149-bah0036",
    "partNumber": "BAH0036",
    "name": "Automotive Hub Bearing BAH0036",
    "category": "wheel-hub",
    "categoryName": "Wheel & Hub Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Wheel & Hub Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Automotive Hub Bearing BAH0036. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "bah0036",
    "image": "/images/wheel-hub.jpg"
  },
  {
    "id": "ezzi-150-bah0052",
    "partNumber": "BAH0052",
    "name": "Automotive Hub Bearing BAH0052",
    "category": "wheel-hub",
    "categoryName": "Wheel & Hub Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Wheel & Hub Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Automotive Hub Bearing BAH0052. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "bah0052",
    "image": "/images/wheel-hub.jpg"
  },
  {
    "id": "ezzi-151-bah0087",
    "partNumber": "BAH0087",
    "name": "Automotive Hub Bearing BAH0087",
    "category": "wheel-hub",
    "categoryName": "Wheel & Hub Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Wheel & Hub Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Automotive Hub Bearing BAH0087. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "bah0087",
    "image": "/images/wheel-hub.jpg"
  },
  {
    "id": "ezzi-152-bah0104",
    "partNumber": "BAH0104",
    "name": "Automotive Hub Bearing BAH0104",
    "category": "wheel-hub",
    "categoryName": "Wheel & Hub Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Wheel & Hub Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Automotive Hub Bearing BAH0104. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "bah0104",
    "image": "/images/wheel-hub.jpg"
  },
  {
    "id": "ezzi-153-62-28",
    "partNumber": "62/28",
    "name": "Deep Groove Ball Bearing 62/28",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 62/28. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "62-28",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-154-62-22",
    "partNumber": "62/22",
    "name": "Deep Groove Ball Bearing 62/22",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 62/22. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "62-22",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-155-63-22",
    "partNumber": "63/22",
    "name": "Deep Groove Ball Bearing 63/22",
    "category": "deep-groove-ball",
    "categoryName": "Deep Groove Ball Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Deep Groove Ball Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Deep Groove Ball Bearing 63/22. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "63-22",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-156-32005",
    "partNumber": "32005",
    "name": "Tapered Roller Bearing 32005",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32005. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32005",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-157-320-32",
    "partNumber": "320/32",
    "name": "Tapered Roller Bearing 320/32",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 320/32. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "320-32",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-158-32204",
    "partNumber": "32204",
    "name": "Tapered Roller Bearing 32204",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32204. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32204",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-159-tx-44sc",
    "partNumber": "TX 44SC",
    "name": "Needle Roller Bearing TX 44SC",
    "category": "needle-roller",
    "categoryName": "Needle Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Needle Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Needle Roller Bearing TX 44SC. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "tx-44sc",
    "image": "/images/needle-roller.jpg"
  },
  {
    "id": "ezzi-160-tx-2143sc",
    "partNumber": "TX 2143SC",
    "name": "Needle Roller Bearing TX 2143SC",
    "category": "needle-roller",
    "categoryName": "Needle Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Needle Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Needle Roller Bearing TX 2143SC. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "tx-2143sc",
    "image": "/images/needle-roller.jpg"
  },
  {
    "id": "ezzi-161-tx-53int",
    "partNumber": "TX 53INT",
    "name": "Needle Roller Bearing TX 53INT",
    "category": "needle-roller",
    "categoryName": "Needle Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Needle Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Needle Roller Bearing TX 53INT. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "tx-53int",
    "image": "/images/needle-roller.jpg"
  },
  {
    "id": "ezzi-162-oc-2207",
    "partNumber": "OC 2207",
    "name": "Spherical Roller Bearing OC 2207",
    "category": "cylindrical-spherical-roller",
    "categoryName": "Cylindrical & Spherical Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Cylindrical & Spherical Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Spherical Roller Bearing OC 2207. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "oc-2207",
    "image": "/images/spherical-roller.jpg"
  },
  {
    "id": "ezzi-163-bth-1238-296045",
    "partNumber": "BTH-1238 (296045)",
    "name": "Tapered Roller Bearing BTH-1238 (296045)",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing BTH-1238 (296045). Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "bth-1238-296045",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-164-32004",
    "partNumber": "32004",
    "name": "Tapered Roller Bearing 32004",
    "category": "tapered-roller",
    "categoryName": "Tapered Roller Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing 32004. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "32004",
    "image": "/images/tapered-roller.jpg"
  },
  {
    "id": "ezzi-165-33005",
    "partNumber": "33005",
    "name": "Double Row Angular Contact Bearing 33005",
    "category": "angular-contact-four-point",
    "categoryName": "Angular Contact & Four-Point Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 25,
    "D": 47,
    "B": 17,
    "dimensionsVerified": true,
    "popularApplications": [
      "Angular Contact & Four-Point Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Double Row Angular Contact Bearing 33005. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "33005",
    "image": "/images/angular-contact.jpg"
  },
  {
    "id": "ezzi-166-98205-wrb",
    "partNumber": "98205  WRB",
    "name": "Wheel / Roller Bearing 98205  WRB",
    "category": "wheel-hub",
    "categoryName": "Wheel & Hub Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Wheel & Hub Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Wheel / Roller Bearing 98205  WRB. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "98205-wrb",
    "image": "/images/wheel-hub.jpg"
  },
  {
    "id": "ezzi-167-16007-wrb",
    "partNumber": "16007  WRB",
    "name": "Wheel / Roller Bearing 16007  WRB",
    "category": "wheel-hub",
    "categoryName": "Wheel & Hub Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Wheel & Hub Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Wheel / Roller Bearing 16007  WRB. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "16007-wrb",
    "image": "/images/wheel-hub.jpg"
  },
  {
    "id": "ezzi-168-1838001-wrb",
    "partNumber": "1838001  WRB",
    "name": "Wheel / Roller Bearing 1838001  WRB",
    "category": "wheel-hub",
    "categoryName": "Wheel & Hub Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Wheel & Hub Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Wheel / Roller Bearing 1838001  WRB. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "1838001-wrb",
    "image": "/images/wheel-hub.jpg"
  },
  {
    "id": "ezzi-169-1838002-wrb",
    "partNumber": "1838002  WRB",
    "name": "Wheel / Roller Bearing 1838002  WRB",
    "category": "wheel-hub",
    "categoryName": "Wheel & Hub Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Wheel & Hub Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Wheel / Roller Bearing 1838002  WRB. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "1838002-wrb",
    "image": "/images/wheel-hub.jpg"
  },
  {
    "id": "ezzi-170-3520-wrb",
    "partNumber": "3520 WRB",
    "name": "Wheel / Roller Bearing 3520 WRB",
    "category": "wheel-hub",
    "categoryName": "Wheel & Hub Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Wheel & Hub Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Wheel / Roller Bearing 3520 WRB. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "3520-wrb",
    "image": "/images/wheel-hub.jpg"
  },
  {
    "id": "ezzi-171-1005-wrb",
    "partNumber": "1005  WRB",
    "name": "Wheel / Roller Bearing 1005  WRB",
    "category": "wheel-hub",
    "categoryName": "Wheel & Hub Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Wheel & Hub Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Wheel / Roller Bearing 1005  WRB. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "1005-wrb",
    "image": "/images/wheel-hub.jpg"
  },
  {
    "id": "ezzi-172-613963-wrb",
    "partNumber": "613963  WRB",
    "name": "Wheel / Roller Bearing 613963  WRB",
    "category": "wheel-hub",
    "categoryName": "Wheel & Hub Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Wheel & Hub Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Wheel / Roller Bearing 613963  WRB. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "613963-wrb",
    "image": "/images/wheel-hub.jpg"
  },
  {
    "id": "ezzi-173-253815-wrb",
    "partNumber": "253815  WRB",
    "name": "Wheel / Roller Bearing 253815  WRB",
    "category": "wheel-hub",
    "categoryName": "Wheel & Hub Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Wheel & Hub Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Wheel / Roller Bearing 253815  WRB. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "253815-wrb",
    "image": "/images/wheel-hub.jpg"
  },
  {
    "id": "ezzi-174-vkm-76870",
    "partNumber": "VKM 76870",
    "name": "Belt Tensioner / Idler Bearing VKM 76870",
    "category": "belt-tensioner-idler",
    "categoryName": "Belt Tensioner & Idler Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Belt Tensioner & Idler Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Belt Tensioner / Idler Bearing VKM 76870. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "vkm-76870",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-175-vkm-76871",
    "partNumber": "VKM 76871",
    "name": "Belt Tensioner / Idler Bearing VKM 76871",
    "category": "belt-tensioner-idler",
    "categoryName": "Belt Tensioner & Idler Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Belt Tensioner & Idler Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Belt Tensioner / Idler Bearing VKM 76871. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "vkm-76871",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-176-dac-3668",
    "partNumber": "DAC 3668",
    "name": "Double Row Angular Contact Wheel Bearing DAC 3668",
    "category": "wheel-hub",
    "categoryName": "Wheel & Hub Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Wheel & Hub Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Double Row Angular Contact Wheel Bearing DAC 3668. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "dac-3668",
    "image": "/images/wheel-hub.jpg"
  },
  {
    "id": "ezzi-177-57410",
    "partNumber": "57410",
    "name": "Special Application Bearing 57410",
    "category": "special-application",
    "categoryName": "Special Application Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Special Application Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Special Application Bearing 57410. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "57410",
    "image": "/images/deep-groove-ball.jpg"
  },
  {
    "id": "ezzi-178-lm-44649-10",
    "partNumber": "LM 44649/10",
    "name": "Tapered Roller Bearing Cone & Cup Set LM 44649/10",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set LM 44649/10. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "lm-44649-10",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-179-lm-11749-10",
    "partNumber": "LM 11749/10",
    "name": "Tapered Roller Bearing Cone & Cup Set LM 11749/10",
    "category": "taper-cone-cup",
    "categoryName": "Tapered Roller Bearing Cone & Cup Sets",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Tapered Roller Bearing Cone & Cup Sets",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Tapered Roller Bearing Cone & Cup Set LM 11749/10. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "lm-11749-10",
    "image": "/images/cone-cup-set.jpg"
  },
  {
    "id": "ezzi-180-51107",
    "partNumber": "51107",
    "name": "Thrust Ball Bearing 51107",
    "category": "clutch-release-thrust",
    "categoryName": "Clutch Release / Thrust Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 35,
    "D": 52,
    "B": 12,
    "dimensionsVerified": true,
    "popularApplications": [
      "Clutch Release / Thrust Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Thrust Ball Bearing 51107. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "51107",
    "image": "/images/thrust-bearing.jpg"
  },
  {
    "id": "ezzi-181-51108",
    "partNumber": "51108",
    "name": "Thrust Ball Bearing 51108",
    "category": "clutch-release-thrust",
    "categoryName": "Clutch Release / Thrust Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 40,
    "D": 60,
    "B": 13,
    "dimensionsVerified": true,
    "popularApplications": [
      "Clutch Release / Thrust Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Thrust Ball Bearing 51108. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "51108",
    "image": "/images/thrust-bearing.jpg"
  },
  {
    "id": "ezzi-182-51207",
    "partNumber": "51207",
    "name": "Thrust Ball Bearing 51207",
    "category": "clutch-release-thrust",
    "categoryName": "Clutch Release / Thrust Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 35,
    "D": 62,
    "B": 18,
    "dimensionsVerified": true,
    "popularApplications": [
      "Clutch Release / Thrust Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Thrust Ball Bearing 51207. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "51207",
    "image": "/images/thrust-bearing.jpg"
  },
  {
    "id": "ezzi-183-51208",
    "partNumber": "51208",
    "name": "Thrust Ball Bearing 51208",
    "category": "clutch-release-thrust",
    "categoryName": "Clutch Release / Thrust Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 40,
    "D": 68,
    "B": 19,
    "dimensionsVerified": true,
    "popularApplications": [
      "Clutch Release / Thrust Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Thrust Ball Bearing 51208. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "51208",
    "image": "/images/thrust-bearing.jpg"
  },
  {
    "id": "ezzi-184-t126",
    "partNumber": "T126",
    "name": "Clutch Release / Thrust Bearing T126",
    "category": "clutch-release-thrust",
    "categoryName": "Clutch Release / Thrust Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Clutch Release / Thrust Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Clutch Release / Thrust Bearing T126. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "t126",
    "image": "/images/clutch-release.jpg"
  },
  {
    "id": "ezzi-185-t138-tr",
    "partNumber": "T138(TR)",
    "name": "Clutch Release / Thrust Bearing T138(TR)",
    "category": "clutch-release-thrust",
    "categoryName": "Clutch Release / Thrust Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Clutch Release / Thrust Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Clutch Release / Thrust Bearing T138(TR). Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "t138-tr",
    "image": "/images/clutch-release.jpg"
  },
  {
    "id": "ezzi-186-t138-os",
    "partNumber": "T138(OS)",
    "name": "Clutch Release / Thrust Bearing T138(OS)",
    "category": "clutch-release-thrust",
    "categoryName": "Clutch Release / Thrust Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Clutch Release / Thrust Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Clutch Release / Thrust Bearing T138(OS). Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "t138-os",
    "image": "/images/clutch-release.jpg"
  },
  {
    "id": "ezzi-187-t144-tr",
    "partNumber": "T144(TR)",
    "name": "Clutch Release / Thrust Bearing T144(TR)",
    "category": "clutch-release-thrust",
    "categoryName": "Clutch Release / Thrust Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Clutch Release / Thrust Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Clutch Release / Thrust Bearing T144(TR). Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "t144-tr",
    "image": "/images/clutch-release.jpg"
  },
  {
    "id": "ezzi-188-t144-os",
    "partNumber": "T144(OS)",
    "name": "Clutch Release / Thrust Bearing T144(OS)",
    "category": "clutch-release-thrust",
    "categoryName": "Clutch Release / Thrust Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Clutch Release / Thrust Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Clutch Release / Thrust Bearing T144(OS). Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "t144-os",
    "image": "/images/clutch-release.jpg"
  },
  {
    "id": "ezzi-189-t151-tr",
    "partNumber": "T151(TR)",
    "name": "Clutch Release / Thrust Bearing T151(TR)",
    "category": "clutch-release-thrust",
    "categoryName": "Clutch Release / Thrust Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Clutch Release / Thrust Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Clutch Release / Thrust Bearing T151(TR). Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "t151-tr",
    "image": "/images/clutch-release.jpg"
  },
  {
    "id": "ezzi-190-t151-os",
    "partNumber": "T151(OS)",
    "name": "Clutch Release / Thrust Bearing T151(OS)",
    "category": "clutch-release-thrust",
    "categoryName": "Clutch Release / Thrust Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Clutch Release / Thrust Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Clutch Release / Thrust Bearing T151(OS). Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "t151-os",
    "image": "/images/clutch-release.jpg"
  },
  {
    "id": "ezzi-191-t101",
    "partNumber": "T101",
    "name": "Clutch Release / Thrust Bearing T101",
    "category": "clutch-release-thrust",
    "categoryName": "Clutch Release / Thrust Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Clutch Release / Thrust Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Clutch Release / Thrust Bearing T101. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "t101",
    "image": "/images/clutch-release.jpg"
  },
  {
    "id": "ezzi-192-t119",
    "partNumber": "T119",
    "name": "Clutch Release / Thrust Bearing T119",
    "category": "clutch-release-thrust",
    "categoryName": "Clutch Release / Thrust Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Clutch Release / Thrust Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Clutch Release / Thrust Bearing T119. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "t119",
    "image": "/images/clutch-release.jpg"
  },
  {
    "id": "ezzi-193-t149",
    "partNumber": "T149",
    "name": "Clutch Release / Thrust Bearing T149",
    "category": "clutch-release-thrust",
    "categoryName": "Clutch Release / Thrust Bearings",
    "brands": [
      "SKF",
      "TATA",
      "XNO",
      "DSF"
    ],
    "d": 0,
    "D": 0,
    "B": 0,
    "dimensionsVerified": false,
    "popularApplications": [
      "Clutch Release / Thrust Bearings",
      "Automotive & Industrial Machinery"
    ],
    "stockLocation": "Manmad Depot (Warehouse Ready)",
    "badge": "",
    "description": "Clutch Release / Thrust Bearing T149. Authentic industrial stock available at EZZI Bearing Suppliers, Manmad depot. Direct wholesale supply across Maharashtra and pan-India with express dispatch.",
    "slug": "t149",
    "image": "/images/clutch-release.jpg"
  }
];

const CatalogService = {
  getAllProducts: () => BEARING_PRODUCTS,
  getCategories: () => BEARING_CATEGORIES,
  getBrands: () => BRANDS_STOCKED,
  getIndustries: () => INDUSTRIES_SERVED,
  getProductById: (id) => BEARING_PRODUCTS.find(p => p.id === id)
};

if (typeof window !== "undefined") {
  window.EZZI_DATA = {
    BEARING_CATEGORIES,
    BRANDS_STOCKED,
    INDUSTRIES_SERVED,
    BEARING_PRODUCTS,
    CatalogService
  };
}
