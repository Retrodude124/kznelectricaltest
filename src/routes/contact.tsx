import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site-data";
import { Phone, Mail, MapPin, Printer } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact | KZN Electrical - Durban Electricians" },
      { name: "description", content: "Get in touch with KZN Electrical. Tel 031 564 8340. Unit J, Nandi Park, 34 Brickworks Way, Briardene." },
      { property: "og:title", content: "Contact KZN Electrical" },
      { property: "og:description", content: "Call 031 564 8340 or email office@kznelectrical.co.za." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [state, handleSubmit] = useForm("xaqkrdgo");
  return (
    <>
      <PageHero eyebrow="Get in touch" title="Contact" subtitle="Reach our team for queries, quotes, accounts, tenders or our full list of client referrals." />

      <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-12">
        <Reveal>
          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-electric font-semibold mb-4">Main line</h3>
              <div className="space-y-3">
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 group">
                  <Phone className="size-5 text-electric" />
                  <span className="text-lg group-hover:text-electric transition">{SITE.phone}</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Printer className="size-5 text-electric" />
                  <span>Fax: {SITE.fax}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-electric font-semibold mb-4">Key contacts</h3>
              <div className="grid gap-3">
                {SITE.contacts.map((c) => (
                  <div key={c.name} className="p-4 rounded-lg bg-surface border border-border">
                    <div className="font-semibold">{c.name}</div>
                    <div className="mt-1 text-sm text-muted-foreground flex flex-wrap gap-x-4 gap-y-1">
                      <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="hover:text-electric">{c.phone}</a>
                      <a href={`mailto:${c.email}`} className="hover:text-electric">{c.email}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-electric font-semibold mb-4">Departments</h3>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                {SITE.departments.map((d) => (
                  <a key={d.email} href={`mailto:${d.email}`} className="flex items-center gap-2 p-3 rounded-lg bg-surface border border-border hover:border-electric/40 transition">
                    <Mail className="size-4 text-electric" />
                    <span className="font-medium">{d.label}:</span>
                    <span className="text-muted-foreground truncate">{d.email}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-electric font-semibold mb-4">Visit us</h3>
              <div className="p-5 rounded-lg bg-surface border border-border space-y-2 text-sm">
                <div className="flex items-start gap-3"><MapPin className="size-5 text-electric shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">{SITE.address.physical}</div>
                    <div className="text-muted-foreground mt-1">{SITE.address.postal}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {state.succeeded ? (
            <div className="p-8 rounded-xl bg-surface border border-border text-center">
              <h3 className="text-2xl font-display font-bold">Thanks — we'll be in touch</h3>
              <p className="mt-3 text-muted-foreground">Your enquiry has been sent. Our team responds within one working day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 rounded-xl bg-surface border border-border space-y-5">
              <h3 className="text-2xl font-display font-bold">Send an enquiry</h3>
              <div className="flex gap-4 text-sm">
                <label className="flex items-center gap-2"><input type="radio" name="enquiryType" value="Account" defaultChecked className="accent-electric" /> Account Enquiry</label>
                <label className="flex items-center gap-2"><input type="radio" name="enquiryType" value="Tender" className="accent-electric" /> Tender Enquiry</label>
              </div>
              <Field label="Full name" name="name" />
              <Field label="Email" name="email" type="email" />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400" />
              <Field label="Enquiry" name="message" textarea />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400" />
              <button type="submit" disabled={state.submitting} className="w-full px-5 py-3 rounded-md bg-electric text-background font-semibold hover:shadow-glow transition disabled:opacity-60">
                {state.submitting ? "Sending…" : "Send enquiry"}
              </button>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", textarea }: { label: string; name: string; type?: string; textarea?: boolean }) {
  const cls = "w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-electric transition";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} required rows={5} className={cls + " mt-2"} />
      ) : (
        <input id={name} name={name} type={type} required className={cls + " mt-2"} />
      )}
    </label>
  );
}
