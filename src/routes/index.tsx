import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Award, Clock, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-city.jpg";
import fleetAsset from "@/assets/fleet-aerial.jpg.asset.json";
import anniversaryVehicle from "@/assets/anniversary-vehicle.jpg.asset.json";
import teamVehicles from "@/assets/team-vehicles.jpg.asset.json";
import teamGazebo from "@/assets/team-gazebo.jpg.asset.json";
import anniversaryBoard from "@/assets/anniversary-board.jpg.asset.json";
import { SERVICES, PROJECTS, SITE } from "@/lib/site-data";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "KZN Electrical | Master Electricians in KwaZulu-Natal Since 1997" },
      { name: "description", content: "Industrial, commercial and residential electrical contractors. Solar, generators, UPS, thermal imaging and CoC inspections across Durban and greater KZN." },
      { property: "og:title", content: "KZN Electrical | Master Electricians in KwaZulu-Natal" },
      { property: "og:description", content: "Certified electrical contractors serving Durban and greater KwaZulu-Natal since 1997." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  const heroWords = "Powering KwaZulu-Natal".split(" ");
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.45 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={heroImg} alt="" className="size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric/30 bg-electric/5 text-xs uppercase tracking-[0.2em] text-electric"
          >
            <span className="size-1.5 rounded-full bg-electric animate-pulse" />
            Established 1997 · ECA Registered
          </motion.div>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight max-w-5xl">
            {heroWords.map((w, i) => (
              <motion.span
                key={i}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-4"
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-electric"
            >
              for 28 years.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Industrial, commercial and residential electrical contractors delivering safe,
            certified installations from Durban to Mthatha. Trusted on projects from R 1m
            to R 42m+.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/quote" className="group px-6 py-3.5 rounded-md bg-electric text-background font-semibold inline-flex items-center gap-2 hover:shadow-glow transition-all">
              Get a Free Quote
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
            <Link to="/services" className="px-6 py-3.5 rounded-md border border-border hover:border-electric/60 hover:bg-electric/5 font-semibold transition">
              Our Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
          >
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ChevronDown className="size-6" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FLEET BANNER */}
      <section className="relative">
        <Reveal>
          <div className="relative h-[42vh] min-h-[340px] max-h-[560px] overflow-hidden border-y border-border">
            <img
              src={fleetAsset.url}
              alt="Aerial view of the KwaZulu-Natal Electrical branded vehicle fleet and team"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="relative max-w-7xl mx-auto px-6 h-full flex items-end pb-10">
              <div className="max-w-xl">
                <div className="text-xs uppercase tracking-[0.25em] text-electric font-medium mb-3">Our fleet</div>
                <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
                  A professional team. A large branded fleet. One trusted standard.
                </h2>
                <p className="mt-4 text-sm md:text-base text-muted-foreground">
                  Fully-equipped vehicles and qualified electricians on the road across KwaZulu-Natal — every day, since 1997.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION — 25+ YEARS OF EXCELLENCE */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-electric font-medium mb-4">Trusted since 1997</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.05] tracking-tight">
              Over 25 Years of <span className="text-electric">Electrical Excellence</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              For more than two decades, KwaZulu Natal Electrical has delivered professional
              electrical solutions across residential, commercial and industrial sectors throughout
              KwaZulu-Natal.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every installation is tested, certified and signed off by a registered Master
              Installation Electrician — the same standard our founders set in 1997.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="px-5 py-3 rounded-md border border-border hover:border-electric/60 hover:bg-electric/5 text-sm font-semibold transition inline-flex items-center gap-2">
                Our Story <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[18px] overflow-hidden shadow-elegant border border-border"
            >
              <img
                src={anniversaryVehicle.url}
                alt="25 Years 1997–2022 anniversary emblem on a KwaZulu Natal Electrical company vehicle"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover bg-white"
              />
              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute top-5 left-5 rounded-full px-4 py-2 bg-background/70 backdrop-blur-md border border-electric/30 shadow-glow"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-electric font-semibold">Established 1997</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 }}
                className="absolute bottom-5 right-5 rounded-xl px-4 py-3 bg-background/80 backdrop-blur-md border border-electric/30 shadow-glow"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-electric font-semibold">25+ Years</div>
                <div className="text-xs text-foreground font-medium">of Experience</div>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* SECTION — MEET OUR TEAM */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <div className="text-xs uppercase tracking-[0.25em] text-electric font-medium mb-3">Our people</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight tracking-tight">
              The People Behind KwaZulu Natal Electrical
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our company is built on experienced electricians, tight-knit teamwork and quality
              workmanship — the kind of standard that only shows up on site when the people carrying
              it care about the work.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-[18px] overflow-hidden shadow-elegant border border-border"
          >
            <img
              src={teamVehicles.url}
              alt="KwaZulu Natal Electrical team members in branded workwear standing beside a line of company bakkies"
              loading="lazy"
              className="w-full aspect-[16/8] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </Reveal>

        <Stagger className="mt-8 grid sm:grid-cols-3 gap-4">
          {[
            { title: "Experienced Team", body: "Master Installation Electricians and long-serving crews." },
            { title: "Qualified Electricians", body: "Every installation certified to the latest SANS standards." },
            { title: "Customer Focused", body: "Clear communication from first quote to final sign-off." },
          ].map((c) => (
            <motion.div key={c.title} variants={itemVariants} className="p-6 rounded-2xl bg-surface border border-border hover:border-electric/40 hover:bg-surface-elevated transition">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-electric shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">{c.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.body}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </section>

      {/* SECTION — COMPANY CULTURE */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal delay={0.1} className="lg:order-2">
            <div className="text-xs uppercase tracking-[0.25em] text-electric font-medium mb-4">Company culture</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.05] tracking-tight">
              A Company Built on <span className="text-electric">Relationships</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We value teamwork, long-term customer relationships and dependable service. Many of
              our clients have been with us for the better part of two decades — because the same
              people who quoted the job are the ones who show up on site.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Investing in our team is investing in the standard our clients rely on.
            </p>
          </Reveal>

          <Reveal className="lg:order-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[18px] overflow-hidden shadow-elegant border border-border"
            >
              <img
                src={teamGazebo.url}
                alt="The full KwaZulu Natal Electrical team gathered under the branded 25 year anniversary gazebo"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* SECTION — CUSTOMER TRUST */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-[24px] overflow-hidden border border-electric/20 bg-gradient-to-br from-surface-elevated via-surface to-surface p-8 md:p-14">
          <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
          <div className="relative grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
            <Reveal className="lg:col-span-3">
              <div className="text-xs uppercase tracking-[0.25em] text-electric font-medium mb-4">Customer trust</div>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.05] tracking-tight">
                Trusted by Customers for More Than <span className="text-electric">Two Decades</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our 25-year anniversary celebration brought together customers, suppliers and
                partners who signed a commemorative board with messages recognising our commitment
                to quality service.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                It's more than a keepsake — it's a wall of proof of the long-standing relationships
                that built this company.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-2">
              <motion.div
                initial={{ rotate: -2 }}
                whileHover={{ rotate: 0, scale: 1.03 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[18px] overflow-hidden shadow-elegant border border-border bg-white"
              >
                <img
                  src={anniversaryBoard.url}
                  alt="Close-up of the KwaZulu Natal Electrical 25 year anniversary board signed by customers, suppliers and partners"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-xl px-4 py-2.5 bg-background/80 backdrop-blur-md border border-electric/30 shadow-glow">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-electric font-semibold">Signed by clients & partners</div>
                    <div className="text-xs text-foreground font-medium">25 Year Anniversary · 1997–2022</div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <section className="border-y border-border bg-surface/50 overflow-hidden">
        <div className="py-6">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap"
          >
            {[...SITE.memberships, ...SITE.areas, ...SITE.memberships, ...SITE.areas].map((m, i) => (
              <span key={i} className="text-sm uppercase tracking-[0.25em] text-muted-foreground flex items-center gap-12">
                {m}
                <span className="size-1 rounded-full bg-electric/40" />
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-electric font-medium mb-3">What we do</div>
              <h2 className="text-4xl sm:text-5xl font-display font-bold max-w-2xl">A full-spectrum electrical contractor.</h2>
            </div>
            <Link to="/services" className="text-electric hover:underline inline-flex items-center gap-2 font-medium">
              All services <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {SERVICES.map((s) => (
            <motion.div key={s.slug} variants={itemVariants}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group block p-8 bg-surface hover:bg-surface-elevated transition-all h-full relative"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent opacity-0 group-hover:opacity-100 transition" />
                <Zap className="size-7 text-electric mb-6" />
                <h3 className="text-xl font-display font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-electric opacity-0 group-hover:opacity-100 transition">
                  Learn more <ArrowRight className="size-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </Stagger>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-surface/40">
        <div className="max-w-7xl mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: Clock, n: 28, suffix: "+", label: "Years in business" },
            { icon: Award, n: 500, suffix: "+", label: "Projects delivered" },
            { icon: Shield, n: 100, suffix: "%", label: "CoC certified" },
            { icon: Zap, n: 24, suffix: "/7", label: "Emergency response" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div>
                <s.icon className="size-6 text-electric mb-4" />
                <div className="text-5xl font-display font-bold text-foreground">
                  <Counter to={s.n} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-electric font-medium mb-3">Selected work</div>
              <h2 className="text-4xl sm:text-5xl font-display font-bold">Recent projects.</h2>
            </div>
            <Link to="/projects" className="text-electric hover:underline inline-flex items-center gap-2 font-medium">
              Full portfolio <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROJECTS.slice(0, 4).map((p) => (
            <motion.div key={p.name} variants={itemVariants}>
              <div className="group relative aspect-[4/5] rounded-lg overflow-hidden bg-surface-elevated border border-border hover:border-electric/40 transition">
                <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-transparent" />
                <div className="absolute inset-0 grain opacity-50" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-electric mb-2">{p.sector}</div>
                  <h3 className="font-display font-semibold text-lg leading-tight">{p.name}</h3>
                  <div className="mt-3 text-xs text-muted-foreground flex justify-between">
                    <span>{p.location}</span>
                    <span>{p.year}</span>
                  </div>
                  <div className="mt-1 text-sm font-semibold text-electric">{p.value}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </section>

      {/* AREAS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <Reveal>
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.25em] text-electric font-medium mb-3">Areas served</div>
            <h2 className="text-4xl sm:text-5xl font-display font-bold">Across KwaZulu-Natal.</h2>
          </div>
        </Reveal>
        <Stagger className="flex flex-wrap justify-center gap-3">
          {SITE.areas.map((a) => (
            <motion.span variants={itemVariants} key={a} className="px-5 py-2.5 rounded-full border border-border bg-surface text-sm hover:border-electric/60 hover:text-electric transition">
              {a}
            </motion.span>
          ))}
        </Stagger>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden p-12 md:p-20 bg-gradient-to-br from-surface-elevated via-surface to-surface border border-electric/20 glow-border">
            <div className="absolute inset-0 grain" />
            <div className="relative max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                Ready to start <span className="text-electric">your project?</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Get a no-obligation quote from KwaZulu-Natal's most trusted electrical contractor.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/quote" className="px-6 py-3.5 rounded-md bg-electric text-background font-semibold inline-flex items-center gap-2 hover:shadow-glow transition">
                  Request a Quote <ArrowRight className="size-4" />
                </Link>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="px-6 py-3.5 rounded-md border border-border hover:border-electric/60 font-semibold transition">
                  Call {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
