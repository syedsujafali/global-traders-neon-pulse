import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Collect", desc: "We source materials from industries and partners worldwide.", icon: "📦" },
  { step: "02", title: "Sort", desc: "Advanced sorting and grading ensures premium quality materials.", icon: "🔍" },
  { step: "03", title: "Trade", desc: "Connecting the right buyers with the right materials globally.", icon: "🤝" },
  { step: "04", title: "Deliver", desc: "Reliable logistics ensure timely delivery to any destination.", icon: "🚀" },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-sm tracking-widest text-neon-orange uppercase">How It Works</span>
          <h2 className="text-4xl font-black md:text-5xl">
            Our <span className="text-gradient-neon">Process</span>
          </h2>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-4">
          {/* Connection line */}
          <div className="absolute top-16 right-12 left-12 hidden h-0.5 bg-gradient-to-r from-neon-green via-neon-blue to-neon-orange opacity-30 md:block" />

          {steps.map((s, i) => (
            <motion.div key={s.step} className="relative text-center"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }}>
              <motion.div
                className="glass-card mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full neon-glow-blue"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <span className="text-5xl">{s.icon}</span>
              </motion.div>
              <span className="mb-2 block text-xs font-bold tracking-widest text-neon-green">{s.step}</span>
              <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
