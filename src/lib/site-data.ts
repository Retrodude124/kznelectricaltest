import ashton2 from "@/assets/ashton-sports-hall-2.jpg.asset.json";
import ashton8 from "@/assets/ashton-sports-hall-8.jpg.asset.json";
import ashton13 from "@/assets/ashton-sports-hall-13.jpg.asset.json";
import ashton15 from "@/assets/ashton-sports-hall-15.jpg.asset.json";
import clover47 from "@/assets/clover-IMG-20220228-WA0047.jpg.asset.json";
import clover53 from "@/assets/clover-IMG-20220228-WA0053.jpg.asset.json";
import clover57 from "@/assets/clover-IMG-20220228-WA0057.jpg.asset.json";
import hirschPlantRoom from "@/assets/hirsch-plant-room.jpg.asset.json";
import westvilleGirls from "@/assets/westville-girls-enclosure.jpg.asset.json";
import elaleni7 from "@/assets/elaleni-7.png.asset.json";
import elaleni8 from "@/assets/elaleni-8.png.asset.json";
import elaleni9 from "@/assets/elaleni-9.png.asset.json";
import elaleni10 from "@/assets/elaleni-10.png.asset.json";
import lupa14 from "@/assets/lupa-14.png.asset.json";
import lupa11 from "@/assets/lupa-11.png.asset.json";
import lupa13 from "@/assets/lupa-13.png.asset.json";
import lupa12 from "@/assets/lupa-12.png.asset.json";
import lgCornubia1 from "@/assets/lg-cornubia-1.jpg.asset.json";
import lgCornubia2 from "@/assets/lg-cornubia-2.jpg.asset.json";
import eden2 from "@/assets/eden-2.jpg.asset.json";
import eden3 from "@/assets/eden-3.jpg.asset.json";
import eden4 from "@/assets/eden-4.jpg.asset.json";
import eden5 from "@/assets/eden-5.jpg.asset.json";
import kwadukuza1 from "@/assets/kwadukuza-1.jpg.asset.json";
import kwadukuza2 from "@/assets/kwadukuza-2.jpg.asset.json";
import kwadukuza3 from "@/assets/kwadukuza-3.jpg.asset.json";
import kwadukuza4 from "@/assets/kwadukuza-4.jpg.asset.json";
import kwadukuza5 from "@/assets/kwadukuza-5.jpg.asset.json";
import crompton1 from "@/assets/crompton-1.jpg.asset.json";
import crompton2 from "@/assets/crompton-2.jpg.asset.json";
import crompton3 from "@/assets/crompton-3.jpg.asset.json";
import crompton4 from "@/assets/crompton-4.jpg.asset.json";
import ballito1 from "@/assets/ballito-1.jpg.asset.json";
import ballito2 from "@/assets/ballito-2.jpg.asset.json";
import ballito3 from "@/assets/ballito-3.jpg.asset.json";
import ballito4 from "@/assets/ballito-4.jpg.asset.json";
import ballito5 from "@/assets/ballito-5.jpg.asset.json";
import ballito6 from "@/assets/ballito-6.jpg.asset.json";
import promenade1 from "@/assets/promenade-1.jpg.asset.json";
import promenade2 from "@/assets/promenade-2.jpg.asset.json";
import promenade3 from "@/assets/promenade-3.jpg.asset.json";
import promenade4 from "@/assets/promenade-4.jpg.asset.json";
import promenade5 from "@/assets/promenade-5.jpg.asset.json";
import promenade6 from "@/assets/promenade-6.jpg.asset.json";



export const SITE = {
  name: "KZN Electrical",
  fullName: "KwaZulu-Natal Electrical",
  tagline: "Powering KwaZulu-Natal Since 1997",
  established: 1997,
  phone: "031 564 8340",
  fax: "031 564 8038",
  address: {
    physical: "Unit J, Nandi Park, 34 Brickworks Way, Briardene, 4051",
    postal: "P.O. Box 50810, Musgrave, 4062",
  },
  contacts: [
    { name: "Glen", phone: "083 309 9149", email: "glen@kznelectrical.co.za" },
    { name: "Craig", phone: "082 458 8353", email: "craig@kznelectrical.co.za" },
  ],
  departments: [
    { label: "Tenders", email: "tenders@kznelectrical.co.za" },
    { label: "Accounts", email: "accounts@kznelectrical.co.za" },
    { label: "Office", email: "office@kznelectrical.co.za" },
    { label: "Stores", email: "stores@kznelectrical.co.za" },
    { label: "Admin", email: "admin@kznelectrical.co.za" },
  ],
  memberships: [
    "Electrical Contractors Association (ECA)",
    "Electrical Contractors Board (ECB)",
    "BEE Level 5",
    "CIDB 6EB",
    "Compensation Fund",
  ],
  areas: ["Durban", "Umhlanga", "Ballito", "Pietermaritzburg", "Mt Edgecombe", "Queensburgh", "Avoca", "Emberton", "Mthatha"],
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  highlights: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "domestic-electrical",
    title: "Domestic Electrical",
    short: "Residential installations, rewires and certified repairs for homes across KZN.",
    description:
      "From single-room rewires to full new-build installations, our qualified electricians deliver safe, code-compliant residential work. Every job is signed off with the documentation you need.",
    highlights: ["New-build wiring", "Distribution boards & upgrades", "Geyser & appliance circuits", "CoC inspections & repairs"],
    faqs: [
      { q: "Do you issue a Certificate of Compliance?", a: "Yes — every installation is tested and signed off by a registered Master Installation Electrician." },
      { q: "Do you handle emergency callouts?", a: "We respond to residential emergencies across the greater Durban metro." },
    ],
  },
  {
    slug: "commercial-electrical",
    title: "Commercial Electrical",
    short: "Office, retail and hospitality electrical fit-outs delivered on programme.",
    description:
      "We deliver commercial electrical installations for retail centres, office parks, restaurants and hospitality groups — from first-fix to energised handover, integrated with your contractors and tenants.",
    highlights: ["Tenant fit-outs", "Lighting & power distribution", "Standby & UPS integration", "Maintenance contracts"],
    faqs: [
      { q: "Can you work after hours?", a: "Yes — most retail and hospitality work is staged outside trading hours to avoid disruption." },
      { q: "Are you CIDB graded?", a: "Yes — CIDB 6EB, with current ECA and ECB membership." },
    ],
  },
  {
    slug: "industrial-electrical",
    title: "Industrial Electrical",
    short: "Plant, factory and warehouse electrical engineering at any scale.",
    description:
      "Heavy-current industrial installations, MV/LV reticulation, motor control centres and switchgear — engineered, installed and tested to SANS 10142 by our industrial division.",
    highlights: ["MV & LV reticulation", "Motor control centres", "Switchgear & substations", "Factory expansions"],
    faqs: [
      { q: "Do you do MV work?", a: "Yes — we have completed MV reticulation projects up to multi-million rand value, including Clover MV Reticulation in Queensburgh." },
    ],
  },
  {
    slug: "thermal-imaging",
    title: "Thermal Imaging",
    short: "Predictive maintenance scans that catch hot spots before they fail.",
    description:
      "Non-invasive infrared inspections of distribution boards, switchgear, motors and busbars. We deliver an annotated report with severity ratings and recommended remediation.",
    highlights: ["DB & MCC scans", "Severity-rated reports", "Insurance-ready documentation", "Annual scan contracts"],
    faqs: [
      { q: "How often should we scan?", a: "Most insurers require an annual scan on critical switchgear; high-load environments benefit from six-monthly scans." },
    ],
  },
  {
    slug: "electrical-recordings-reports",
    title: "Electrical Recordings & Reports",
    short: "Power quality logging, energy audits and engineering reports.",
    description:
      "We log voltage, current, harmonics and power factor over time to diagnose tripping, equipment damage and high consumption — then deliver a clear engineering report with recommendations.",
    highlights: ["Power quality logging", "Energy audits", "Harmonics analysis", "Engineering reports"],
    faqs: [
      { q: "How long is a typical recording?", a: "A standard recording runs 7 days to capture a full operational cycle." },
    ],
  },
  {
    slug: "generator-installations",
    title: "Generator Installations",
    short: "Standby and backup generator installations sized to your load.",
    description:
      "Diesel and petrol standby generator installations with changeover panels, AMF controllers and full commissioning. We size, install, certify and maintain.",
    highlights: ["Load sizing", "Changeover & AMF panels", "Bulk fuel & day tanks", "Service contracts"],
    faqs: [
      { q: "Do you size the generator for us?", a: "Yes — we audit your load profile and recommend the right kVA rating with headroom for future expansion." },
    ],
  },
  {
    slug: "solar-installations",
    title: "Solar Installations",
    short: "Grid-tied, hybrid and off-grid PV solutions for homes and business.",
    description:
      "Turnkey solar PV — site assessment, system design, NRS-compliant installation and commissioning. We work with leading inverter and battery brands and deliver utility-compliant grid-tied systems.",
    highlights: ["Grid-tied & hybrid systems", "Lithium battery storage", "NRS 097 compliant", "Monitoring & service"],
    faqs: [
      { q: "Will my system work in load shedding?", a: "Hybrid and off-grid systems with battery storage keep essential loads running through outages." },
    ],
  },
  {
    slug: "inverter-installations",
    title: "Inverter Installations",
    short: "Battery backup inverter systems for uninterrupted power.",
    description:
      "Standalone inverter and battery installations for homes and offices that need backup without solar — sized to your essential loads and installed with a safe AC changeover.",
    highlights: ["Essential-load sizing", "Lithium battery options", "Safe AC changeover", "Future solar-ready"],
    faqs: [
      { q: "Can I add solar later?", a: "Yes — we install hybrid-capable inverters so solar panels can be added without replacing the system." },
    ],
  },
  {
    slug: "ups-installations",
    title: "UPS Installations",
    short: "Uninterruptible power supplies for servers, comms and critical loads.",
    description:
      "Online and line-interactive UPS systems for data centres, comms rooms and medical environments — including battery replacements, monitoring and preventive maintenance.",
    highlights: ["Online double-conversion UPS", "Battery replacements", "Remote monitoring", "Preventive maintenance"],
    faqs: [
      { q: "Do you service existing UPS systems?", a: "Yes — we service most major brands and supply replacement battery sets." },
    ],
  },
  {
    slug: "data-cabling",
    title: "Data & Network Cabling",
    short: "Structured Cat5e, Cat6 and fibre cabling for offices and sites.",
    description:
      "Structured cabling installations to TIA/EIA standards — Cat5e, Cat6, Cat6A and fibre backbones, complete with patch panels, labelling and certification.",
    highlights: ["Cat5e, Cat6, Cat6A", "Fibre backbones", "Cable certification", "Rack & patch panel builds"],
    faqs: [
      { q: "Do you certify the cabling?", a: "Yes — installations can be certified with calibrated test equipment and a full report per run." },
    ],
  },
];

export type Project = {
  name: string;
  location: string;
  value: string;
  year: number;
  sector: "Commercial" | "Residential" | "Industrial";
};

export const PROJECTS: Project[] = [
  { name: "Clover MV Reticulation", location: "Queensburgh", value: "R 42 350 000", year: 2020, sector: "Industrial" },
  { name: "Kindlewood MV", location: "Mt Edgecombe", value: "R 14 200 000", year: 2018, sector: "Residential" },
  { name: "Emberton Phase 2", location: "Emberton", value: "R 8 780 000", year: 2020, sector: "Residential" },
  { name: "Elaleni Forrest View", location: "Ballito", value: "R 4 800 000", year: 2020, sector: "Residential" },
  { name: "Cambridge West Street", location: "Durban", value: "R 4 350 000", year: 2020, sector: "Commercial" },
  { name: "Mthatha DC Spar", location: "Mthatha", value: "R 4 120 000", year: 2020, sector: "Commercial" },
  { name: "Point Water Sports Club", location: "Durban", value: "R 2 380 000", year: 2020, sector: "Commercial" },
  { name: "Pick & Pay Workshop", location: "Durban", value: "R 2 260 000", year: 2020, sector: "Commercial" },
  { name: "Clover LV Phase 1", location: "Queensburgh", value: "R 2 250 000", year: 2020, sector: "Industrial" },
  { name: "Lupa Bakery", location: "Avoca", value: "R 1 200 000", year: 2020, sector: "Commercial" },
  { name: "Northside Ballito", location: "Ballito", value: "R 965 000", year: 2020, sector: "Residential" },
];

export type CompletedProject = {
  name: string;
  location?: string;
  value: string;
  image?: string;
};

/** Portfolio categories used by the Projects filter. */
export type ProjectCategory = "Domestic" | "Commercial" | "Industrial" | "Generators" | "Other";

export type PortfolioProject = {
  slug: string;
  name: string;
  category: ProjectCategory;
  location?: string;
  value?: string;
  year?: number;
  description: string;
  /** Genuine KZN Electrical photographs for this project. Empty until real photos are supplied. */
  photos: string[];
};

const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/**
 * Photograph registry. Add genuine KZN Electrical project photographs here,
 * keyed by project slug, e.g. { "durban-country-club-revamp": [img1, img2] }.
 * No stock or AI imagery — cards fall back to the KZN emblem until real photos exist.
 */
export const PROJECT_PHOTOS: Record<string, string[]> = {
  "ashton-new-sports-hall": [
    ashton2.url,
    ashton13.url,
    ashton8.url,
    ashton15.url,
  ],
  "clover-queensburgh": [clover53.url, clover47.url, clover57.url],
  "hirsch": [hirschPlantRoom.url],
  "westville-girls": [westvilleGirls.url],
  "elaleni-forrest-view": [elaleni10.url, elaleni7.url, elaleni8.url, elaleni9.url],
  "lupa-bakery": [lupa14.url, lupa11.url, lupa13.url, lupa12.url],
  "lg-cornubia": [lgCornubia1.url, lgCornubia2.url],
  "eden-garden-private-hospital": [eden5.url, eden4.url, eden2.url, eden3.url],
  "durban-point-promenade": [promenade5.url, promenade6.url, promenade1.url, promenade2.url, promenade3.url, promenade4.url],
  "ballito-lifestyle-centre-re-development": [ballito2.url, ballito3.url, ballito1.url, ballito4.url, ballito6.url, ballito5.url],
  "life-the-crompton-hospital": [crompton4.url, crompton3.url, crompton1.url, crompton2.url],
  "kwadukuza-private-hospital": [kwadukuza1.url, kwadukuza3.url, kwadukuza2.url, kwadukuza5.url, kwadukuza4.url],
};



const CATEGORY_FROM_SECTOR: Record<Project["sector"], ProjectCategory> = {
  Residential: "Domestic",
  Commercial: "Commercial",
  Industrial: "Industrial",
};



/** Completed projects archive (originally listed on kznelectrical.co.za/ProjectGallery). */
export const COMPLETED_PROJECTS: CompletedProject[] = [
  { name: "Bishops Court Office Park", value: "R 1 740 000.00" },
  { name: "Briardene Minifactory Development", value: "R 3 000 000.00" },
  { name: "Buffels Draai Landfill Site", value: "R 500 000.00" },
  { name: "D & A Timbers New Warehouse", value: "R 800 000.00" },
  { name: "DSW Toti Transfer Station Revamp", value: "R 180 000.00" },
  { name: "Durban Country Club – Revamp", value: "R 5 000 000.00" },
  { name: "Durban International Airport Carpark Lighting", value: "R 250 000.00" },
  { name: "Elangeni Office Block", value: "R 850 000.00" },
  { name: "Forest Creek Electrical and Telkom Reticulation", value: "R 280 000.00" },
  { name: "GM Motor Dealership", value: "R 1 200 000.00" },
  { name: "Hirsch", location: "KZN – Pietermaritzburg", value: "R 2 000 000.00" },
  { name: "Izinga Ridge Gatehouses", value: "R 110 000.00" },
  { name: "New Classroom Block – George Campbell High School", value: "R 27 000.00" },
  { name: "Plantations ±150 Houses", value: "R 6 750 000.00" },
  { name: "Sabex Office Blocks", value: "R 1 300 000.00" },
  { name: "Thompsons Extension", value: "R 460 000.00" },
  { name: "Thomsons Office Block", value: "R 1 500 000.00" },
  { name: "Universal Printing Main Office Revamp", value: "R 200 000.00" },
  { name: "Voltex Briardene", value: "R 800 000.00" },
  { name: "Westbrooke Beach Club (Phase 1)", value: "R 900 000.00" },
  { name: "Westville Girls", location: "KZN – Westville", value: "R 300 000.00" },
];

/**
 * Recently completed projects, as listed on the original
 * kznelectrical.co.za/ProjectGallery "Recently Completed Projects" page.
 * Photographs are added to PROJECT_PHOTOS by slug as they become available.
 */
const RECENTLY_COMPLETED: Array<{
  name: string;
  category: ProjectCategory;
  location?: string;
  value: string;
  year: number;
  description?: string;
}> = [
  { name: "Ballito Lifestyle Centre Re-Development", category: "Commercial", location: "KZN – Durban", value: "R 10 000 000.00", year: 2018, description: "Full electrical re-development of the Ballito Lifestyle Centre — retail distribution, feature and architectural lighting, tenant metering and common-area reticulation." },
  { name: "Cambridge Warwick", category: "Commercial", location: "Durban", value: "R 5 700 000.00", year: 2019, description: "Electrical installation for the Cambridge Food store in Warwick, Durban — LV distribution, refrigeration power, lighting and shopfloor reticulation." },
  { name: "Durban Point Promenade", category: "Commercial", location: "Durban", value: "R 7 800 000.00", year: 2019, description: "Public realm electrical works along the Durban Point Promenade — street and amenity lighting, feeder reticulation and distribution kiosks." },
  { name: "Eden Garden Private Hospital", category: "Commercial", location: "KZN – Durban", value: "R 21 400 000.00", year: 2018, description: "Complete hospital electrical installation — essential and non-essential distribution, generator changeover, theatre isolated power, nurse-call containment and full lighting." },
  { name: "Glass House Revamp", category: "Commercial", location: "Umhlanga", value: "R 2 640 000.00", year: 2019, description: "Electrical revamp of the Glass House offices in Umhlanga — new distribution boards, LED lighting throughout, small power and data containment." },
  { name: "Kwadukuza Private Hospital", category: "Commercial", location: "KZN – Durban", value: "R 8 400 000.00", year: 2017, description: "Hospital electrical installation at Kwadukuza — essential supply distribution, generator backup, ward and theatre lighting, and external site lighting." },
  { name: "LG Cornubia", category: "Industrial", location: "Cornubia", value: "R 12 875 000.00", year: 2020, description: "Industrial electrical installation for the LG facility in Cornubia — MV/LV distribution, high-bay warehouse lighting, plant power and external reticulation." },
  { name: "Life The Crompton Hospital", category: "Commercial", location: "KZN – Durban", value: "R 1 000 000.00", year: 2017, description: "Electrical works at Life The Crompton Hospital — ward and corridor lighting upgrades, distribution board work and essential power reticulation." },
  { name: "Massbuild – Builders Trade Depot", category: "Commercial", location: "KZN – Durban", value: "R 6 500 000.00", year: 2017, description: "Full electrical installation for the Builders Trade Depot — yard and warehouse high-bay lighting, trade counter power, LV distribution and site reticulation." },
  { name: "Netcare St Augustine's Hospital", category: "Commercial", location: "KZN – Durban", value: "R 2 000 000.00", year: 2017, description: "Electrical installation and upgrades at Netcare St Augustine's Hospital — ward lighting, bedhead services power, and essential supply distribution." },
  { name: "Pick & Pay Arbour Crossing", category: "Commercial", location: "Amanzimtoti", value: "R 2 050 000.00", year: 2020, description: "Retail electrical installation at Pick n Pay Arbour Crossing — refrigeration power, LED shopfloor lighting and distribution boards." },
  { name: "Pick & Pay Midway Mall", category: "Commercial", location: "Durban", value: "R 5 430 000.00", year: 2020, description: "Retail electrical installation at Pick n Pay Midway Mall — LV distribution, refrigeration and plant power, and full shopfloor lighting." },
  { name: "Pick n Pay Christian Village Hillcrest", category: "Commercial", location: "Hillcrest", value: "R 2 900 000.00", year: 2016, description: "Retail store electrical installation at Christian Village, Hillcrest — refrigeration power, shopfloor and back-of-house lighting, and distribution." },
  { name: "Verigreen Office Building", category: "Commercial", location: "Pinetown", value: "R 2 050 000.00", year: 2019, description: "Office building electrical installation in Pinetown — distribution boards, LED office lighting, small power, and data containment." },
  { name: "Zululami Moyana Units", category: "Domestic", location: "Sheffield Beach", value: "R 950 000.00", year: 2020, description: "Residential electrical installation for the Moyana units at Zululami Luxury Coastal Estate — unit reticulation, distribution boards and lighting." },
];

/** Unified portfolio used by /projects — recent contracts plus the completed archive. */
export const PORTFOLIO: PortfolioProject[] = [
  {
    slug: "ashton-new-sports-hall",
    name: "Ashton Sports Hall",
    category: "Commercial",
    location: "Ballito",
    value: "R 1 020 000.00",
    year: 2019,
    description:
      "Complete electrical installation for the sports hall at Ashton International College, Ballito — feature cove and downlighting to the main hall, DMX-controlled hall lighting with dedicated switching and dimmer panel, distribution boards, stairwell step lighting and full power reticulation.",
    photos: PROJECT_PHOTOS["ashton-new-sports-hall"] ?? [],
  },
  {
    slug: "clover-queensburgh",
    name: "Clover Queensburgh",
    category: "Industrial",
    location: "Queensburgh",
    year: 2022,
    description:
      "Industrial electrical installation at the Clover dairy plant in Queensburgh — LV switchgear and distribution panels, cable tray and containment reticulation, process area power and high-bay lighting throughout the production and packing halls. Completed 2022.",
    photos: PROJECT_PHOTOS["clover-queensburgh"] ?? [],
  },
  ...RECENTLY_COMPLETED.map((p) => {
    const slug = slugify(p.name);
    return {
      slug,
      name: p.name,
      category: p.category,
      location: p.location,
      value: p.value,
      year: p.year,
      description:
        p.description ??
        `Electrical installation contract completed in ${p.location ?? "KwaZulu-Natal"} in ${p.year}.`,
      photos: PROJECT_PHOTOS[slug] ?? [],
    } satisfies PortfolioProject;
  }),


  ...PROJECTS.map((p) => {
    const slug = slugify(p.name);
    return {
      slug,
      name: p.name,
      category: CATEGORY_FROM_SECTOR[p.sector],
      location: p.location,
      value: p.value,
      year: p.year,
      description: `${p.sector} electrical installation contract delivered in ${p.location}, KwaZulu-Natal.`,
      photos: PROJECT_PHOTOS[slug] ?? [],
    } satisfies PortfolioProject;
  }),
  ...COMPLETED_PROJECTS.map((p) => {
    const slug = slugify(p.name);
    return {
      slug,
      name: p.name,
      category: "Other" as ProjectCategory,
      location: p.location,
      value: p.value,
      description: "Completed electrical contract delivered by KwaZulu-Natal Electrical.",
      photos: PROJECT_PHOTOS[slug] ?? [],
    } satisfies PortfolioProject;
  }),
];
