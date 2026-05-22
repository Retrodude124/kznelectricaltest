import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, Phone } from "lucide-react";
import { SERVICES, SITE, type Service } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): { service: Service } => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service | KZN Electrical" }] };
    return {
      meta: [
        { title: `${s.title} | KZN Electrical - KwaZulu-Natal Electricians` },
        { name: "description", content: s.short },
        { property: "og:title", content: `${s.title} | KZN Electrical` },
        { property: "og:description", content: s.short },
        { property: "og:url", content: `/services/${s.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.description,
            provider: { "@type": "ElectricalContractor", name: SITE.fullName },
            areaServed: SITE.areas,
          }),
        },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow="Service" title={service.title} subtitle={service.short} />

      <section className="max-w-5xl mx-auto px-6 pb-12">
        <Reveal>
          <nav className="text-xs text-muted-foreground mb-12 flex gap-2">
            <Link to="/" className="hover:text-electric">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-electric">Services</Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </nav>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <Reveal>
              <p className="text-lg leading-relaxed text-muted-foreground">{service.description}</p>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">What's included</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 p-4 rounded-lg bg-surface border border-border">
                      <Check className="size-5 text-electric shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Our process</h2>
                <ol className="space-y-4">
                  {["Site assessment & quote", "Design & material schedule", "Installation by certified team", "Testing, commissioning & CoC"].map((step, i) => (
                    <li key={step} className="flex gap-4 p-5 rounded-lg bg-surface border border-border">
                      <span className="size-9 shrink-0 rounded-full bg-electric/10 border border-electric/30 text-electric font-display font-bold flex items-center justify-center">{i + 1}</span>
                      <span className="pt-1.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            {service.faqs.length > 0 && (
              <Reveal>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-6">FAQs</h2>
                  <div className="space-y-2">
                    {service.faqs.map((f, i) => <Faq key={i} q={f.q} a={f.a} />)}
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          <aside className="lg:col-span-1">
            <Reveal>
              <div className="sticky top-28 p-8 rounded-xl bg-surface border border-electric/20 glow-border">
                <div className="text-xs uppercase tracking-[0.25em] text-electric mb-3">Get started</div>
                <h3 className="text-2xl font-display font-bold leading-tight">Request a quote for {service.title.toLowerCase()}.</h3>
                <p className="mt-4 text-sm text-muted-foreground">No obligation. We respond within one working day.</p>
                <Link to="/quote" className="mt-6 w-full px-5 py-3 rounded-md bg-electric text-background font-semibold inline-flex justify-center items-center gap-2 hover:shadow-glow transition">
                  Get a Quote <ArrowRight className="size-4" />
                </Link>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="mt-3 w-full px-5 py-3 rounded-md border border-border hover:border-electric/60 font-medium inline-flex justify-center items-center gap-2 transition">
                  <Phone className="size-4" /> {SITE.phone}
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* RELATED */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <Reveal>
          <h2 className="text-2xl font-display font-bold mb-8">Related services</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4).map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="block p-6 bg-surface hover:bg-surface-elevated transition group">
              <h3 className="font-display font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-electric opacity-0 group-hover:opacity-100 transition">View <ArrowRight className="size-3" /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg bg-surface border border-border overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full p-5 flex items-center justify-between text-left">
        <span className="font-medium">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }}><ChevronDown className="size-5 text-electric" /></motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
