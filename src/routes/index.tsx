import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroSplash from "../components/IntroSplash";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import ProcessSection from "../components/ProcessSection";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";
import CursorFollower from "../components/CursorFollower";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Global Traders | Premium Trading Solutions" },
      { name: "description", content: "Global Traders - Leading global trade solutions for metal scrap, e-waste management, and industrial surplus. Sustainable, reliable, premium." },
      { property: "og:title", content: "Global Traders | Premium Trading Solutions" },
      { property: "og:description", content: "Redefining global trade for the future through sustainable recycling and innovative waste management." },
    ],
  }),
});

function Index() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <CursorFollower />
      <AnimatePresence>
        {showIntro && (
          <motion.div key="intro" exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <IntroSplash onComplete={() => setTimeout(() => setShowIntro(false), 500)} />
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <ParticlesBackground />
          <Navbar />
          <main className="relative z-10">
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <ProcessSection />
            <StatsSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
