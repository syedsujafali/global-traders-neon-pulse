import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Visual */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="glass-card neon-glow-blue relative aspect-square overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-neon" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl">🌍</span>
            </div>
          </div>
          <motion.div
            className="glass-card absolute -right-6 -bottom-6 rounded-2xl px-6 py-4 neon-glow-green"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <p className="text-3xl font-black text-gradient-neon">15+</p>
            <p className="text-xs text-muted-foreground">Years Experience</p>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-block text-sm tracking-widest text-neon-blue uppercase">About Us</span>
          <h2 className="mb-6 text-4xl font-black md:text-5xl">
            Building a <span className="text-gradient-neon">Sustainable</span> Future
          </h2>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Global Traders is a premier trading company specializing in metal scrap, e-waste, 
            and industrial surplus materials. With operations spanning across continents, 
            we bridge the gap between waste and value.
          </p>
          <p className="mb-8 text-muted-foreground leading-relaxed">
            Our commitment to sustainability drives every transaction. We ensure that recyclable 
            materials find their way back into the production cycle, reducing environmental impact 
            while delivering exceptional value to our partners.
          </p>
          <div className="flex gap-8">
            {[{ n: "50+", l: "Countries" }, { n: "2K+", l: "Partners" }, { n: "98%", l: "Satisfaction" }].map((s, i) => (
              <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}>
                <p className="text-2xl font-black text-gradient-neon">{s.n}</p>
                <p className="text-xs text-muted-foreground">{s.l}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
