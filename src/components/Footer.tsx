import { motion } from "framer-motion";

const footerLinks = {
  Company: ["About", "Careers", "Press", "Blog"],
  Services: ["Metal Scrap", "E-Waste", "Surplus", "Consulting"],
  Support: ["Contact", "FAQ", "Privacy", "Terms"],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/30 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <span className="mb-4 block text-xl font-black tracking-wider text-gradient-neon">GLOBAL TRADERS</span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Redefining global trade through sustainable practices and innovative solutions.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-bold text-foreground">{title}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l}>
                    <motion.a href="#" className="text-sm text-muted-foreground transition-colors hover:text-neon-green"
                      whileHover={{ x: 4 }}>{l}</motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border/30 pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Global Traders. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
