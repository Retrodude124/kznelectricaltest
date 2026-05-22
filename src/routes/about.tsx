import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { SITE } from "@/lib/site-data";
import { Award, Users, Target, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us | KZN Electrical - Trusted Electricians Since 1997" },
      { name: "description", content: "Established in 1997, KwaZulu-Natal Electrical is a registered ECA member delivering safe, innovative electrical solutions across KZN." },
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

      <section className="max-w-5xl mx-auto px-6 pb-24 grid gap-16">
        <Reveal>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We ensure a productive working environment, in which we develop the individual skills and capabilities of our staff —
              all for the benefit of you, our client. From small residential projects to multi-million rand industrial reticulation,
              the same standard of safety, certification and craftsmanship applies.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Target, title: "Mission", body: "Meet our clients' needs through innovation, service excellence and uncompromising safety." },
              { icon: Users, title: "People", body: "We invest in our team — apprentices grow into qualified electricians who carry our standard." },
              { icon: ShieldCheck, title: "Safety", body: "Every installation is tested, certified and signed off by a registered Master Installation Electrician." },
              { icon: Award, title: "Quality", body: "From R 1m residential to R 42m+ MV reticulation, our quality bar is the same." },
            ].map((v) => (
              <div key={v.title} className="p-8 rounded-xl bg-surface border border-border">
                <v.icon className="size-7 text-electric mb-5" />
                <h3 className="font-display text-xl font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="p-8 rounded-xl bg-surface-elevated border border-border">
            <div className="text-xs uppercase tracking-[0.25em] text-electric mb-4">Memberships & registrations</div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {SITE.memberships.map((m) => (
                <li key={m} className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-electric" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
