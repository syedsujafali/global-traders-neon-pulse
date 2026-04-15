import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Parallax background elements */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, var(--neon-green), transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, var(--neon-blue), transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, var(--neon-orange), transparent 70%)", filter: "blur(60px)" }} />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-block rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-xs tracking-widest text-muted-foreground uppercase"
        >
          ⚡ Leading Global Trade Solutions
        </motion.div>

        <motion.h1
          className="mb-6 text-5xl leading-tight font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-foreground">Redefining </span>
          <span className="text-gradient-neon">Global Trade</span>
          <br />
          <span className="text-foreground">for the Future</span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We connect industries worldwide through sustainable recycling, premium scrap trading,
          and innovative waste management solutions.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px oklch(0.80 0.22 150 / 40%)" }}
            whileTap={{ scale: 0.95 }}
          >
            Start Trading
          </motion.a>
          <motion.a
            href="#services"
            className="rounded-xl border border-border bg-secondary/30 px-8 py-3.5 text-sm font-semibold text-foreground"
            whileHover={{ scale: 1.05, borderColor: "oklch(0.70 0.22 250 / 50%)" }}
            whileTap={{ scale: 0.95 }}
          >
            Our Services →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
