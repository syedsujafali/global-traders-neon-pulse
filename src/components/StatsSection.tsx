import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { BarChart3, Users, Globe, ThumbsUp } from "lucide-react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    let startTime: number | null = null;
    let animId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl font-black text-gradient-neon sm:text-5xl md:text-6xl">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 50000, suffix: "+", label: "Tons Recycled", icon: BarChart3 },
  { value: 2500, suffix: "+", label: "Clients Served", icon: Users },
  { value: 50, suffix: "+", label: "Countries Reached", icon: Globe },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: ThumbsUp },
];

export default function StatsSection() {
  return (
    <section id="stats" className="relative px-4 sm:px-6 py-16 md:py-32">
      <div className="glass-card mx-auto max-w-7xl rounded-3xl p-5 sm:p-12 md:p-16 neon-glow-green">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <s.icon className="mx-auto mb-4 h-6 w-6 text-neon-green" strokeWidth={1.5} />
              <Counter target={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
