import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PORTFOLIO, type PortfolioProject, type ProjectCategory } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import logo from "@/assets/kzn-logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { X, MapPin, ArrowRight } from "lucide-react";

const ORDER: ProjectCategory[] = ["Domestic", "Commercial", "Industrial", "Generators", "Other"];

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects & Portfolio | KZN Electrical" },
      { name: "description", content: "Electrical projects delivered by KwaZulu-Natal Electrical across Durban, Ballito, Mt Edgecombe and greater KwaZulu-Natal." },
      { property: "og:title", content: "Projects | KZN Electrical" },
      { property: "og:description", content: "From fit-outs to R 42m MV reticulation — a portfolio of completed electrical contracts." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function Projects() {
  const categories = useMemo(
    () => ["All", ...ORDER.filter((c) => PORTFOLIO.some((p) => p.category === c))] as const,
    [],
  );
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<PortfolioProject | null>(null);

  const list = useMemo(
    () => PORTFOLIO.filter((p) => filter === "All" || p.category === filter),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Projects"
        subtitle="A portfolio of electrical contracts completed across KwaZulu-Natal."
      />

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] font-medium border transition ${
                filter === f
                  ? "bg-electric text-background border-electric"
                  : "border-border text-muted-foreground hover:border-electric/50 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.article
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-border bg-surface-elevated shadow-[0_10px_40px_-24px_rgba(0,0,0,0.9)] transition hover:border-electric/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-electric/10 via-transparent to-transparent">
                  {p.photos[0] ? (
                    <img
                      src={p.photos[0]}
                      alt={`${p.name} — electrical installation by KwaZulu-Natal Electrical`}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={500}
                      className="size-full object-cover transition duration-700 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex size-full items-center justify-center">
                      <img src={logo} alt="KZN Electrical" loading="lazy" className="h-20 w-auto object-contain opacity-30 transition group-hover:opacity-55" />
                    </div>
                  )}
                  <span className="absolute left-4 top-4 rounded-full border border-electric/30 bg-background/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-electric backdrop-blur">
                    {p.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold leading-snug">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                  <div className="mt-4 flex items-center justify-between gap-3 text-sm">
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="size-3.5 text-electric/70" />
                      {p.location ?? "KwaZulu-Natal"}
                    </span>
                    {p.value ? <span className="font-semibold text-electric">{p.value}</span> : null}
                  </div>

                  <button
                    onClick={() => setActive(p)}
                    className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.18em] text-foreground transition hover:border-electric/60 hover:text-electric"
                  >
                    View project
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal>
          <p className="mt-12 max-w-2xl text-sm text-muted-foreground">
            Project photography is being added as it is supplied — cards currently carrying the KZN emblem are awaiting
            their genuine site photographs.
          </p>
        </Reveal>
      </section>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}

function ProjectModal({ project, onClose }: { project: PortfolioProject | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-background/85 p-4 backdrop-blur-md sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.name}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="my-auto w-full max-w-3xl overflow-hidden rounded-[18px] border border-border bg-surface-elevated"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-electric/10 via-transparent to-transparent">
              {project.photos[0] ? (
                <img
                  src={project.photos[0]}
                  alt={`${project.name} — electrical work by KwaZulu-Natal Electrical`}
                  className="size-full object-cover"
                />
              ) : (
                <div className="flex size-full items-center justify-center">
                  <img src={logo} alt="KZN Electrical" className="h-28 w-auto object-contain opacity-30" />
                </div>
              )}
              <button
                onClick={onClose}
                aria-label="Close project"
                className="absolute right-4 top-4 rounded-full border border-border bg-background/70 p-2 text-muted-foreground backdrop-blur transition hover:text-electric"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <span className="text-[10px] uppercase tracking-[0.25em] text-electric">{project.category}</span>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{project.name}</h2>

              <dl className="mt-5 grid gap-4 sm:grid-cols-3">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Location</dt>
                  <dd className="mt-1 text-sm">{project.location ?? "KwaZulu-Natal"}</dd>
                </div>
                {project.value ? (
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Contract value</dt>
                    <dd className="mt-1 text-sm font-semibold text-electric">{project.value}</dd>
                  </div>
                ) : null}
                {project.year ? (
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Year</dt>
                    <dd className="mt-1 text-sm">{project.year}</dd>
                  </div>
                ) : null}
              </dl>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

              {project.photos.length > 1 ? (
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {project.photos.slice(1).map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${project.name} photograph ${i + 2}`}
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-[14px] object-cover"
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
