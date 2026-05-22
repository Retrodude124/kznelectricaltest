import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Zap } from "lucide-react";
import { SERVICES } from "@/lib/site-data";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
  head: () => ({
    meta: [
      { title: "Electrical Services | KZN Electrical - KwaZulu-Natal" },
      { name: "description", content: "Full-service electrical contractor: domestic, commercial, industrial, solar, generators, UPS, thermal imaging, data cabling and CoC inspections." },
      { property: "og:title", content: "Our Services | KZN Electrical" },
      { property: "og:description", content: "From domestic rewires to MV reticulation — every electrical service you need from one certified team." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Services"
        subtitle="A complete electrical contracting capability — engineered, installed and certified by one team."
      />
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {SERVICES.map((s) => (
            <motion.div key={s.slug} variants={itemVariants}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group block p-8 bg-surface hover:bg-surface-elevated transition-all h-full"
              >
                <Zap className="size-7 text-electric mb-6" />
                <h3 className="text-xl font-display font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-electric font-medium">
                  Learn more <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </Stagger>
        <Reveal>
          <div className="mt-16 text-center text-muted-foreground text-sm">
            Don't see exactly what you need? <Link to="/contact" className="text-electric hover:underline">Get in touch</Link> — we likely do it.
          </div>
        </Reveal>
      </section>
    </>
  );
}
