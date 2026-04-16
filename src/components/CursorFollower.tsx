import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const sprX = useSpring(mouseX, springConfig);
  const sprY = useSpring(mouseY, springConfig);

  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(isTouchDevice);
    if (isTouchDevice) return;
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [mouseX, mouseY, visible, isTouch]);

  if (isTouch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-6 w-6 rounded-full"
      style={{
        background: "radial-gradient(circle, oklch(0.80 0.22 150 / 60%), transparent 70%)",
        filter: "blur(2px)",
        x: sprX,
        y: sprY,
        opacity: visible ? 1 : 0,
      }}
    />
  );
}
