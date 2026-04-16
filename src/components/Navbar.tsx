import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Services", "About", "Process", "Stats", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="glass-card fixed top-0 right-0 left-0 z-50 border-b border-border/30"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-black tracking-wider text-gradient-neon">
          GLOBAL TRADERS
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm tracking-wide text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {l}
            </a>
          ))}
          <motion.a
            href="#contact"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px oklch(0.80 0.22 150 / 40%)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="text-foreground md:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="glass-card border-t border-border/30 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {links.map((l, i) => (
                <motion.a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {l}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-primary py-3 text-center text-sm font-bold text-primary-foreground"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: links.length * 0.05 }}
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
