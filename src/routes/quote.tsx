import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SERVICES } from "@/lib/site-data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { sendEnquiry, ENQUIRY_SUCCESS } from "@/lib/send-enquiry";

export const Route = createFileRoute("/quote")({
  component: Quote,
  head: () => ({
    meta: [
      { title: "Request a Quote | KZN Electrical" },
      { name: "description", content: "Tell us about your project and we'll get back to you within one working day with a no-obligation quote." },
      { property: "og:title", content: "Request a Quote | KZN Electrical" },
      { property: "og:description", content: "Free, no-obligation electrical quote from KwaZulu-Natal's trusted contractor." },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
});

const STEPS = ["Your details", "Service", "Project", "Review"];

function Quote() {
  const [step, setStep] = useState(0);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const emptyForm = { name: "", company: "", email: "", phone: "", service: SERVICES[0].slug, propertyType: "Residential", urgency: "Standard", details: "" };
  const [form, setForm] = useState(emptyForm);
  const [hp, setHp] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    if (sending) return;
    setError(null);
    if (!form.name.trim() || !form.email.trim()) {
      setError("Please go back and provide your name and email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      setError("Please go back and enter a valid email address.");
      return;
    }
    setSending(true);
    try {
      const serviceTitle = SERVICES.find((s) => s.slug === form.service)?.title ?? form.service;
      await sendEnquiry("quote", { ...form, service: serviceTitle }, hp);
      setSubmittedName(form.name);
      setForm(emptyForm);
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHero eyebrow="Free quote" title="Request a quote" subtitle="Four quick steps. We respond within one working day." />

      <section className="max-w-2xl mx-auto px-6 pb-24">
        <div className="mb-8">
          <div className="flex justify-between text-xs uppercase tracking-wider text-muted-foreground mb-3">
            <span>Step {step + 1} of {STEPS.length}</span>
            <span>{STEPS[step]}</span>
          </div>
          <div className="h-1 bg-surface rounded-full overflow-hidden">
            <motion.div animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }} transition={{ duration: 0.5 }} className="h-full bg-electric" />
          </div>
        </div>

        <div className="p-8 rounded-xl bg-surface border border-border min-h-[400px]">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                <div className="size-16 rounded-full bg-electric/10 border border-electric/30 text-electric flex items-center justify-center mx-auto"><Check className="size-8" /></div>
                <h3 className="mt-6 text-2xl font-display font-bold">Quote request received</h3>
                <p className="mt-3 text-muted-foreground">Thanks {form.name || "—"}. We'll be in touch within one working day.</p>
              </motion.div>
            ) : (
              <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-5">
                {step === 0 && <>
                  <Input label="Full name" v={form.name} on={(v) => setForm({ ...form, name: v })} />
                  <Input label="Email" type="email" v={form.email} on={(v) => setForm({ ...form, email: v })} />
                  <Input label="Phone" v={form.phone} on={(v) => setForm({ ...form, phone: v })} />
                </>}
                {step === 1 && <>
                  <label className="block">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">Service required</span>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-electric">
                      {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                    </select>
                  </label>
                </>}
                {step === 2 && <>
                  <label className="block">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">Property type</span>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {["Residential", "Commercial", "Industrial"].map((t) => (
                        <button key={t} type="button" onClick={() => setForm({ ...form, propertyType: t })}
                          className={`px-3 py-3 rounded-md border text-sm font-medium transition ${form.propertyType === t ? "bg-electric text-background border-electric" : "border-border hover:border-electric/50"}`}>{t}</button>
                      ))}
                    </div>
                  </label>
                  <label className="block">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">Urgency</span>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {["Standard", "Soon", "Emergency"].map((t) => (
                        <button key={t} type="button" onClick={() => setForm({ ...form, urgency: t })}
                          className={`px-3 py-3 rounded-md border text-sm font-medium transition ${form.urgency === t ? "bg-electric text-background border-electric" : "border-border hover:border-electric/50"}`}>{t}</button>
                      ))}
                    </div>
                  </label>
                  <label className="block">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">Project details</span>
                    <textarea value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} rows={4} className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-electric" />
                  </label>
                </>}
                {step === 3 && <div className="space-y-3 text-sm">
                  <h3 className="text-xl font-display font-bold mb-4">Review</h3>
                  {Object.entries(form).map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 py-2 border-b border-border">
                      <span className="text-muted-foreground capitalize">{k.replace(/([A-Z])/g, " $1")}</span>
                      <span className="font-medium text-right">{v || "—"}</span>
                    </div>
                  ))}
                </div>}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!done && (
          <div className="mt-6 flex justify-between gap-3">
            <button onClick={back} disabled={step === 0} className="px-5 py-3 rounded-md border border-border disabled:opacity-30 inline-flex items-center gap-2">
              <ArrowLeft className="size-4" /> Back
            </button>
            {step < STEPS.length - 1 ? (
              <button onClick={next} className="px-6 py-3 rounded-md bg-electric text-background font-semibold inline-flex items-center gap-2">
                Continue <ArrowRight className="size-4" />
              </button>
            ) : (
              <button onClick={submit} disabled={state.submitting} className="px-6 py-3 rounded-md bg-electric text-background font-semibold inline-flex items-center gap-2 hover:shadow-glow transition disabled:opacity-60">
                {state.submitting ? "Sending…" : "Submit quote request"} <Check className="size-4" />
              </button>
            )}
          </div>
        )}
      </section>
    </>
  );
}

function Input({ label, v, on, type = "text" }: { label: string; v: string; on: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <input type={type} value={v} onChange={(e) => on(e.target.value)} className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-electric transition" />
    </label>
  );
}
