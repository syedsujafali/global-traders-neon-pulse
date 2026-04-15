import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Mitchell",
    role: "CEO, SteelWorks Inc.",
    text: "Global Traders transformed our supply chain. Their reliability and quality are unmatched in the industry.",
    initials: "JM",
    color: "from-neon-green to-neon-blue",
  },
  {
    name: "Anika Patel",
    role: "Director, GreenCycle",
    text: "Their e-waste management solutions helped us achieve our sustainability goals two years ahead of schedule.",
    initials: "AP",
    color: "from-neon-blue to-neon-orange",
  },
  {
    name: "Marcus Chen",
    role: "VP, Pacific Metals",
    text: "We've been partnering with Global Traders for 8 years. Exceptional service and competitive pricing every time.",
    initials: "MC",
    color: "from-neon-orange to-neon-green",
  },
];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-sm tracking-widest text-neon-blue uppercase">
            Testimonials
          </span>
          <h2 className="mb-16 text-4xl font-black md:text-5xl">
            What Our <span className="text-gradient-neon">Clients</span> Say
          </h2>
        </motion.div>

        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              className="glass-card rounded-3xl p-10 md:p-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="mx-auto mb-6 h-8 w-8 text-neon-green opacity-50" />
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground italic">
                "{testimonials[idx].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${testimonials[idx].color}`}
                >
                  <span className="text-sm font-bold text-primary-foreground">
                    {testimonials[idx].initials}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground">{testimonials[idx].name}</p>
                  <p className="text-sm text-neon-green">{testimonials[idx].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === idx ? "w-8 bg-primary" : "w-2 bg-muted"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
