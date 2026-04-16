import { motion } from "framer-motion";
import { Wrench, Recycle, Factory, Zap } from "lucide-react";

const services = [
  {
    title: "Metal Scrap Trading",
    desc: "Premium ferrous and non-ferrous metal scrap sourcing and trading across global markets.",
    image: "/metal_scrap_trading.png",
    icon: Wrench,
    glow: "neon-glow-green",
    color: "text-neon-green",
  },
  {
    title: "E-Waste Management",
    desc: "Certified electronic waste processing with environmentally responsible recycling methods.",
    image: "/e_waste_management.png",
    icon: Recycle,
    glow: "neon-glow-blue",
    color: "text-neon-blue",
  },
  {
    title: "Industrial Surplus",
    desc: "Connecting buyers with quality industrial surplus materials at competitive prices.",
    image: "/industrial_surplus.png",
    icon: Factory,
    glow: "neon-glow-orange",
    color: "text-neon-orange",
  },
  {
    title: "Electrical Scrap",
    desc: "Specialized recovery of valuable materials from electrical components and systems.",
    image: "/electrical_scrap.png",
    icon: Zap,
    glow: "neon-glow-green",
    color: "text-neon-green",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative px-4 sm:px-6 py-16 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-sm tracking-widest text-neon-green uppercase">
            What We Do
          </span>
          <h2 className="text-4xl font-black md:text-5xl">
            Our <span className="text-gradient-neon">Services</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="glass-card group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <motion.div
                  className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/80 backdrop-blur-sm ${s.glow}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <s.icon className={`h-6 w-6 ${s.color}`} strokeWidth={1.5} />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
