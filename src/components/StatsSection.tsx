import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-5xl font-black text-gradient-neon md:text-6xl">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 50000, suffix: "+", label: "Tons Recycled" },
  { value: 2500, suffix: "+", label: "Clients Served" },
  { value: 50, suffix: "+", label: "Countries Reached" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export default function StatsSection() {
  return (
    <section id="stats" className="relative px-6 py-32">
      <div className="glass-card mx-auto max-w-7xl rounded-3xl p-12 neon-glow-green md:p-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} className="text-center"
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Counter target={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
