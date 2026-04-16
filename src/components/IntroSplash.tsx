import { motion, AnimatePresence } from "framer-motion";

const letters = "GLOBAL TRADERS".split("");

export default function IntroSplash({ onComplete }: { onComplete: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        onAnimationComplete={() => {}}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.20 0.05 250), oklch(0.13 0.02 260) 70%)",
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Glow orbs */}
        <motion.div
          className="absolute h-64 w-64 rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.80 0.22 150 / 20%), transparent 70%)",
          }}
          animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute h-48 w-48 rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.70 0.22 250 / 15%), transparent 70%)",
          }}
          animate={{ x: [80, -80, 80], y: [30, -60, 30] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          {/* Letter-by-letter text */}
          <div className="flex flex-wrap justify-center gap-1">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                 className="text-2xl font-black tracking-widest min-[360px]:text-3xl sm:text-6xl md:text-7xl lg:text-8xl"
                style={{
                  background:
                    "linear-gradient(90deg, var(--neon-green), var(--neon-blue), var(--neon-orange), var(--neon-green))",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  opacity: { delay: 0.3 + i * 0.06, duration: 0.4 },
                  y: { delay: 0.3 + i * 0.06, duration: 0.5, type: "spring" },
                  rotateX: { delay: 0.3 + i * 0.06, duration: 0.5 },
                  backgroundPosition: { delay: 1.2, duration: 3, repeat: Infinity, ease: "linear" },
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-sm tracking-[0.3em] text-muted-foreground uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Premium Trading Solutions
          </motion.p>

          {/* Loading bar */}
          <motion.div className="mt-4 h-0.5 rounded-full bg-muted" style={{ width: 200 }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, var(--neon-green), var(--neon-blue))" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
              onAnimationComplete={onComplete}
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
