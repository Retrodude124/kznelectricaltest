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
