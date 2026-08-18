import { Link } from "@tanstack/react-router";
import { SITE, SERVICES } from "@/lib/site-data";
import logo from "@/assets/kzn-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
          <img
            src={logo}
            alt="KZN Electrical"
            loading="lazy"
            decoding="async"
            className="h-20 w-auto max-w-full object-contain object-center md:object-left opacity-90 [filter:drop-shadow(0_0_10px_rgba(120,180,255,0.10))] my-2"
          />
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Powering KwaZulu-Natal with safe, certified electrical solutions since 1997.
          </p>
        </div>


        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-electric font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="text-muted-foreground hover:text-foreground transition">
                  {s.title}
                </Link>
              </li>
            ))}
            <li><Link to="/services" className="text-electric hover:underline">View all →</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-electric font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
            <li><Link to="/projects" className="text-muted-foreground hover:text-foreground">Projects</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            <li><Link to="/quote" className="text-muted-foreground hover:text-foreground">Request a Quote</Link></li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {SITE.memberships.slice(0, 3).map((m) => (
              <span key={m} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-border text-muted-foreground">
                {m.replace(/\(.*\)/, "").trim()}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-electric font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-foreground">Tel: {SITE.phone}</a></li>
            <li>Fax: {SITE.fax}</li>
            <li><a href="mailto:office@kznelectrical.co.za" className="hover:text-foreground">office@kznelectrical.co.za</a></li>
            <li className="pt-2 leading-relaxed">{SITE.address.physical}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} KwaZulu-Natal Electrical. All rights reserved.</span>
          <span>Established 1997 · ECA · ECB · CIDB 6EB</span>
        </div>
      </div>
    </footer>
  );
}
