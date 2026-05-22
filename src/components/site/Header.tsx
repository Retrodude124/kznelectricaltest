import { Link } from "@tanstack/react-router";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/kzn-logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 20));

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2 bg-background/80 backdrop-blur-xl border-b border-border" : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="KZN Electrical logo" className="h-10 w-auto bg-white/95 rounded p-1.5 transition group-hover:scale-105" />
            <div className="hidden sm:block leading-tight">
              <div className="text-xs uppercase tracking-[0.2em] text-electric font-medium">Est. 1997</div>
              <div className="text-sm font-semibold">KwaZulu-Natal Electrical</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative"
                activeProps={{ className: "px-4 py-2 text-sm font-medium text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {({ isActive }) => (
                  <>
                    {n.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute left-3 right-3 -bottom-px h-px bg-electric"
                      />
                    )}
                  </>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:0315648340" className="text-sm text-muted-foreground hover:text-electric transition flex items-center gap-2">
              <Phone className="size-4" /> 031 564 8340
            </a>
            <Link
              to="/quote"
              className="px-4 py-2 rounded-md text-sm font-semibold bg-electric text-background hover:shadow-glow transition-all"
            >
              Get a Quote
            </Link>
          </div>

          <button onClick={() => setOpen((v) => !v)} className="lg:hidden p-2 text-foreground" aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg lg:hidden pt-24 px-6"
        >
          <nav className="flex flex-col gap-2">
            {NAV.map((n, i) => (
              <motion.div
                key={n.to}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-2xl font-display font-semibold border-b border-border"
                >
                  {n.label}
                </Link>
              </motion.div>
            ))}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-6 px-6 py-4 rounded-md text-center font-semibold bg-electric text-background"
            >
              Get a Quote
            </Link>
          </nav>
        </motion.div>
      )}
    </>
  );
}
