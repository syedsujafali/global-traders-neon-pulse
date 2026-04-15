import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-6 w-6 rounded-full"
      style={{
        background: "radial-gradient(circle, oklch(0.80 0.22 150 / 60%), transparent 70%)",
        filter: "blur(2px)",
      }}
      animate={{ x: pos.x - 12, y: pos.y - 12, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.5 }}
    />
  );
}
