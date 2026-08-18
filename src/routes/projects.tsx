import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PROJECTS, COMPLETED_PROJECTS } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import logo from "@/assets/kzn-logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";

const FILTERS = ["All", "Commercial", "Residential", "Industrial"] as const;

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects & Portfolio | KZN Electrical" },
      { name: "description", content: "Selected electrical projects delivered by KZN Electrical across Durban, Ballito, Mt Edgecombe and greater KwaZulu-Natal." },
      { property: "og:title", content: "Projects | KZN Electrical" },
      { property: "og:description", content: "From R 1m fit-outs to R 42m MV reticulation — see our recent work." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list = useMemo(() => PROJECTS.filter((p) => filter === "All" || p.sector === filter), [filter]);

  return (
    <>
      <PageHero eyebrow="Selected work" title="Projects" subtitle="A snapshot of recent installations across KwaZulu-Natal." />

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                filter === f
                  ? "bg-electric text-background border-electric"
                  : "border-border text-muted-foreground hover:border-electric/50 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative aspect-[5/6] rounded-xl overflow-hidden bg-surface-elevated border border-border hover:border-electric/40 transition"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-electric/15 via-transparent to-transparent" />
                <div className="absolute inset-0 grain opacity-50" />
                <div className="absolute top-6 left-6">
                  <span className="px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] rounded-full bg-electric/10 border border-electric/30 text-electric">{p.sector}</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display font-bold text-xl leading-tight">{p.name}</h3>
                  <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                    <span>{p.location}</span>
                    <span>{p.year}</span>
                  </div>
                  <div className="mt-1 text-lg font-semibold text-electric">{p.value}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <Reveal>
          <div className="border-t border-border pt-16">
            <div className="text-xs uppercase tracking-[0.25em] text-electric font-medium mb-4">Archive</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">Completed Projects</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              A full record of completed contracts delivered across KwaZulu-Natal.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMPLETED_PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={Math.min(i * 0.03, 0.3)}>
              <article className="group h-full rounded-xl overflow-hidden bg-surface-elevated border border-border hover:border-electric/40 transition">
                <div className="relative aspect-[16/10] flex items-center justify-center overflow-hidden bg-gradient-to-br from-electric/10 via-transparent to-transparent">
                  {p.image ? (
                    <img src={p.image} alt={p.name} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" />
                  ) : (
                    <img src={logo} alt="KZN Electrical" loading="lazy" className="h-16 w-auto opacity-40 transition group-hover:opacity-70" />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold leading-snug">{p.name}</h3>
                  <div className="mt-3 flex items-center justify-between gap-3 text-sm">
                    <span className="text-muted-foreground">{p.location ?? "KwaZulu-Natal"}</span>
                    <span className="font-semibold text-electric">{p.value}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
