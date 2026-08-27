import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { PageHero } from "@/components/site/PageHero";
import { SITE } from "@/lib/site-data";
import { Award, Users, Target, ShieldCheck } from "lucide-react";
import fleetAsset from "@/assets/fleet-aerial.jpg";
import anniversaryAsset from "@/assets/anniversary-25.jpg";
import giftboxAsset from "@/assets/branded-giftbox.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us | KZN Electrical - Trusted Electricians Since 1997" },
      { name: "description", content: "Established in 1997, KwaZulu-Natal Electrical is a registered ECA member delivering safe, innovative electrical solutions across KZN with a large professional fleet." },
      { property: "og:title", content: "About KZN Electrical" },
      { property: "og:description", content: "Established 1997. ECA & ECB registered. Master Installation Electricians serving KwaZulu-Natal." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="About us"
        subtitle="Established in 1997, KwaZulu-Natal Electrical has been meeting our clients' needs through innovation and service excellence for nearly three decades."
      />

      {/* Split story + image collage */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* LEFT — Story */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-electric font-medium mb-4">Est. 1997</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.05] tracking-tight">
                Powering KwaZulu-Natal <span className="text-electric">for over 28 years.</span>
              </h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                From small residential jobs to multi-million rand industrial reticulation, the same
                standard of safety, certification and craftsmanship applies. We invest in our people,
                our fleet and our systems — so the standard our founders set in 1997 still walks onto
                every site today.
              </p>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Every installation is tested, certified and signed off by a registered Master
                Installation Electrician. That's the trust our clients across Durban, Pietermaritzburg
                and greater KZN have relied on for nearly three decades.
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {SITE.memberships.slice(0, 4).map((m) => (
                  <span key={m} className="text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-border text-muted-foreground">
                    {m.replace(/\(.*\)/, "").trim()}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT — Image collage */}
          <div className="relative">
            <Reveal>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl overflow-hidden border border-border shadow-elegant"
              >
                <img
                  src={fleetAsset}
                  alt="Aerial photograph of the KwaZulu-Natal Electrical branded vehicle fleet lined up on a field with team members"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </Reveal>

            <div className="mt-6 grid grid-cols-2 gap-6">
              <Reveal delay={0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-2xl overflow-hidden border border-border shadow-elegant -translate-y-4"
                >
                  <img
                    src={anniversaryAsset}
                    alt="25 Years anniversary emblem 1997–2022 on a KwaZulu-Natal Electrical company vehicle"
                    loading="lazy"
                    className="w-full aspect-square object-cover bg-white"
                  />
                  {/* Glass badge */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="rounded-xl px-3 py-2 bg-background/70 backdrop-blur-md border border-electric/30 shadow-glow">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-electric font-semibold">25+ Years</div>
                      <div className="text-xs text-foreground font-medium leading-tight">of Excellence</div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>

              <Reveal delay={0.2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-2xl overflow-hidden border border-border shadow-elegant translate-y-4"
                >
                  <img
                    src={giftboxAsset}
                    alt="Custom laser-cut wooden KwaZulu-Natal Electrical branded gift boxes showing attention to brand detail"
                    loading="lazy"
                    className="w-full aspect-square object-cover"
                  />
                </motion.div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* STAT CARDS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: <><Counter to={25} suffix="+" /></>, label: "Years of Experience", sub: "Trusted across KwaZulu-Natal" },
            { value: <Counter to={1997} />, label: "Established", sub: "Nearly three decades strong" },
            { value: "Professional", label: "Qualified Electrical Team", sub: "Master Installation Electricians" },
            { value: "Commercial & Residential", label: "Projects Across KZN", sub: "From R 1m to R 42m+" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="h-full p-6 rounded-2xl bg-surface border border-border hover:border-electric/40 hover:bg-surface-elevated transition-all">
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight tabular-nums">
                  {s.value}
                </div>
                <div className="mt-4 text-sm font-semibold text-foreground">{s.label}</div>
                <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Target, title: "Mission", body: "Meet our clients' needs through innovation, service excellence and uncompromising safety." },
              { icon: Users, title: "People", body: "We invest in our team — apprentices grow into qualified electricians who carry our standard." },
              { icon: ShieldCheck, title: "Safety", body: "Every installation is tested, certified and signed off by a registered Master Installation Electrician." },
              { icon: Award, title: "Quality", body: "From R 1m residential to R 42m+ MV reticulation, our quality bar is the same." },
            ].map((v) => (
              <div key={v.title} className="p-8 rounded-2xl bg-surface border border-border">
                <v.icon className="size-7 text-electric mb-5" />
                <h3 className="font-display text-xl font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
