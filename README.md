# Electric Elegance Builder

Here's a comprehensive prompt you can paste directly into Lovable.dev:

---

**Prompt for Lovable.dev:**

Build a complete, modern, premium website for **KZN Electrical** (https://www.kznelectrical.co.za/) — an electrical services company based in KwaZulu-Natal, South Africa. Pull ALL branding, colors, logos, service imagery, team photos, and project photos directly from the existing site. This must feel like a multi-million rand corporate site, not a small business template.

## DESIGN DIRECTION

- **Style:** Dark, sleek, premium — think high-end industrial/energy sector. Deep navy/charcoal backgrounds with electric blue or amber/gold accents (match their existing brand palette exactly as found on their site).

- **Typography:** Bold, modern sans-serif headings (Inter or Outfit), clean readable body text.

- **Imagery:** Use EVERY image from their current site — hero banners, service photos, project galleries, team images, logo, certifications/badges. Do NOT use placeholder images.

- **Layout:** Full-width sections, generous whitespace, asymmetric grids where appropriate, large typography moments.

## ANIMATIONS (BUTTERY SMOOTH — TOP PRIORITY)

- Use **Framer Motion** for all animations

- **Hero:** Staggered text reveal (each word or line slides up with spring physics), background image with a slow Ken Burns zoom effect, floating particles or subtle electrical spark/arc animations

- **Scroll-triggered animations:** Every section fades and slides in on scroll (use `whileInView`), with staggered children for grid items

- **Service cards:** 3D tilt effect on hover (subtle perspective shift), glowing border animation on hover matching brand accent color

- **Page transitions:** Smooth crossfade or slide transitions between pages using Framer Motion `AnimatePresence`

- **Navigation:** Sticky navbar that morphs/shrinks on scroll with a blur backdrop, mobile menu with staggered link reveals

- **Buttons:** Magnetic hover effect (button subtly follows cursor), scale + glow on hover

- **Counters/Stats:** Animated number counting when they scroll into view

- **Testimonials:** Auto-scrolling carousel with smooth momentum, pause on hover

- **Project gallery:** Image hover zoom with overlay slide-up, maybe a masonry or filtered grid with layout animation when filters change

- **Scroll progress indicator:** Thin accent-colored bar at the very top of the viewport

- **Parallax:** Subtle parallax on select background images

- **Cursor:** Custom cursor or cursor follower with electric/energy effect (optional but would be premium)

## PAGE STRUCTURE (EACH SERVICE GETS ITS OWN PAGE FOR SEO)

### 1. HOME PAGE (`/`)

- **Hero Section:** Full-screen with background image from their site, animated headline ("Professional Electrical Solutions in KwaZulu-Natal"), subtitle, dual CTAs ("Get a Free Quote" + "Our Services"), scroll-down indicator

- **Trust Bar:** Scrolling marquee of certifications, affiliations, years of experience, areas served

- **About Snippet:** Brief intro with image, "Learn More" link to full About page

- **Services Overview:** Grid of service cards (icon + title + short description), each linking to its dedicated page

- **Why Choose Us:** Animated counter stats (Years Experience, Projects Completed, Happy Clients, 24/7 Availability) with icons

- **Featured Projects:** Showcase 3-4 projects with images from their site, hover effects, "View All Projects" link

- **Testimonials:** Carousel of client reviews

- **Areas Served:** Map or styled list of areas in KZN they cover (Durban, Pietermaritzburg, Ballito, Umhlanga, etc.)

- **CTA Banner:** Bold full-width section — "Ready to Start Your Project?" with contact button

- **Footer:** Full footer with logo, quick links, services links, contact info, social icons, compliance badges

### 2. ABOUT PAGE (`/about`)

- Hero with parallax background image from their site

- Company story with scroll-reveal text blocks

- Mission & Vision with animated icons

- Team section with photos from their site (if available), hover card flips or reveals

- Certifications & compliance badges with animated entrance

- Values grid with icons and descriptions

### 3. INDIVIDUAL SERVICE PAGES (each at `/services/[service-slug]`):

**a. Electrical Installations** (`/services/electrical-installations`)

- Hero with relevant image, breadcrumb navigation

- Detailed service description

- Types of installations offered (residential, commercial, industrial)

- Process section (step-by-step with animated timeline)

- Related project gallery

- FAQ accordion

- CTA to contact/quote

**b. Electrical Repairs & Maintenance** (`/services/electrical-repairs-maintenance`)

- Same structure as above, tailored content

- Emergency repair callout banner with pulsing animation

- Maintenance plans/packages section

**c. Compliance Certificates (CoC)** (`/services/compliance-certificates`)

- Explain what a CoC is and why it's legally required in SA

- Their CoC process

- Importance section with warning/attention styling

- FAQ about compliance

**d. Solar Installations** (`/services/solar-installations`)

- Hero with solar project image from their site

- Benefits of solar (animated icon grid)

- Systems they offer (grid-tied, off-grid, hybrid)

- Process timeline

- Featured solar projects with images

- ROI/savings calculator or visual

- CTA for site assessment

**e. Generator Installations** (`/services/generator-installations`)

- Types of generators (diesel, petrol, standby, backup)

- Sizing guide section

- Installation process

- Maintenance services

- Project gallery

**f. Electric Fencing & Security** (`/services/electric-fencing-security`)

- Electric fencing options

- CCTV & access control (if they offer it)

- Compliance with SA law

- Security package options

**g. Lighting Solutions** (`/services/lighting-solutions`)

- Residential lighting

- Commercial/industrial lighting

- LED upgrades & energy efficiency

- Landscape & outdoor lighting

- Smart lighting

**h. Data & Network Cabling** (`/services/data-network-cabling`)

- Structured cabling

- Fiber optics

- Network design

- CCTV cabling

*(Add or remove service pages based on what's actually on their site — check the navigation at https://www.kznelectrical.co.za/ and create a page for EVERY service listed there.)*

### 4. PROJECTS/PORTFOLIO PAGE (`/projects`)

- Filterable grid (by service type, sector: residential/commercial/industrial)

- Layout animation when filtering

- Each project card: image, title, location, service type, hover to reveal details

- Lightbox or modal for project details with multiple images

### 5. CONTACT PAGE (`/contact`)

- Split layout: contact form on one side, info + map on other

- Animated form fields (floating labels, focus animations)

- Contact details with icons (phone, email, physical address, operating hours)

- Embedded Google Maps showing their location in KZN

- Emergency callout banner ("Need an electrician urgently? Call now!")

- Social media links

### 6. QUOTE REQUEST PAGE (`/quote`)

- Multi-step form with progress bar animation

- Step 1: Personal details

- Step 2: Service selection (with icons)

- Step 3: Project details (property type, description, urgency)

- Step 4: Review & submit

- Smooth step transitions

## SEO REQUIREMENTS

- Each page must have: unique `<title>`, `<meta description>`, `<h1>`, proper heading hierarchy (`<h2>`, `<h3>`), Open Graph tags, and structured data (JSON-LD for LocalBusiness, Service, FAQPage where applicable)

- Schema markup for each service page using the `Service` schema type

- `LocalBusiness` schema on every page with their actual NAP (Name, Address, Phone) data from the site

- Clean semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`)

- Proper `<title>` format: `Service Name | KZN Electrical - KwaZulu-Natal Electricians`

- Alt text on ALL images using their actual service descriptions

- Internal linking between related service pages

- Breadcrumb navigation with BreadcrumbList schema

## TECHNICAL REQUIREMENTS

- React + TypeScript + Tailwind CSS + Framer Motion

- React Router for page navigation with `AnimatePresence` page transitions

- Fully responsive (mobile-first)

- Smooth scroll behavior

- Image optimization (use their actual image URLs from the site, or suggest downloading and using local assets)

- Performance: lazy load images, minimize layout shifts

- Accessibility: proper ARIA labels, focus states, keyboard navigation, skip-to-content link

- Dark mode as default (matching the premium dark aesthetic)

## CONTENT

- Use ALL actual content/text from https://www.kznelectrical.co.za/ — do not make up service descriptions, use what's on their real site

- If content is thin on a service page, expand slightly but keep it accurate to what an electrical company in KZN would offer

- Use their real phone number, email, address, and social links from the site

- Use their real company registration details if displayed

## CRITICAL REMINDERS

- Do NOT use generic placeholder images — reference and use images from https://www.kznelectrical.co.za/

- Every animation must be smooth (60fps target) — use `will-change`, `transform` only, avoid animating `width`/`height`/`top`/`left`

- The site must feel PREMIUM — like a R50k+ website, not a free template

- Mobile experience must be equally impressive with touch-friendly interactions

- All service pages must exist as separate routes, not accordions or tabs on one page

---

**Pro tips for getting the best result from Lovable:**

1. **Paste this in chunks** — Lovable handles long prompts better when you build iteratively. Start with the Home page + design direction + animations, then say "Now add the About page", then "Now add each service page one by one."

2. **If images don't pull** from the URL, you'll need to manually provide image URLs. Right-click images on their site, copy image addresses, and feed them to Lovable like: *"Use this hero image: https://www.kznelectrical.co.za/wp-content/uploads/xyz.jpg"*

3. **After the initial build**, iterate with prompts like:

   - "Make the animations smoother, add spring physics to the card hovers"

   - "Add a custom cursor with an electric glow effect"

   - "Make the service page timeline more visual with connecting lines and animated dots"

   - "Add a scroll progress bar at the top"

   - "Make the mobile menu more dramatic with staggered animations"

4. **For the service pages**, if Lovable tries to put them all on one page, firmly redirect: *"No — each service must be its own separate page at /services/[slug] with its own route, not a section on one page."*

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://kznelectricaltest.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/65a96b6f-d2b8-4c9c-9f99-56fa32253bdd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
