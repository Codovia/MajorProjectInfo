import { motion } from "framer-motion";
import { Hero } from "../components/Hero";
import { ProblemAndNeed } from "../components/ProblemAndNeed";
import { ProjectOverview } from "../components/ProjectOverview";
import { KeyFeatures } from "../components/KeyFeatures";
import { HowItWorks } from "../components/HowItWorks";
import { Architecture } from "../components/Architecture";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { TechStack } from "../components/TechStack";
import { ResultsAndImpact } from "../components/ResultsAndImpact";
import { FutureScope } from "../components/FutureScope";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  const handleExplore = () => {
    document
      .getElementById("problem-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-navy-dark overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-navy-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <motion.a
            href="/"
            className="text-xl font-bold text-gradient cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            🌊 Flood Prediction
          </motion.a>
          <motion.div className="flex gap-6">
            <a
              href="#features"
              className="text-mist-white/70 hover:text-cyan-glow transition-colors text-sm"
            >
              Features
            </a>
            <a
              href="#architecture"
              className="text-mist-white/70 hover:text-cyan-glow transition-colors text-sm"
            >
              Architecture
            </a>
            <a
              href="/team"
              className="text-mist-white/70 hover:text-cyan-glow transition-colors text-sm"
            >
              Team
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        <Hero onExplore={handleExplore} />
      </section>

      {/* Problem & Need */}
      <section
        id="problem-section"
        className="bg-gradient-to-b from-navy-dark to-navy-dark/90"
      >
        <ProblemAndNeed />
      </section>

      {/* Project Overview */}
      <section className="bg-navy-dark">
        <ProjectOverview />
      </section>

      {/* Key Features */}
      <section
        id="features"
        className="bg-gradient-to-b from-navy-dark to-navy-dark/90"
      >
        <KeyFeatures />
      </section>

      {/* How It Works */}
      <section className="bg-navy-dark">
        <HowItWorks />
      </section>

      {/* Architecture */}
      <section
        id="architecture"
        className="bg-gradient-to-b from-navy-dark to-navy-dark/90"
      >
        <Architecture />
      </section>

      {/* Project Showcase */}
      <section className="bg-navy-dark">
        <ProjectShowcase />
      </section>

      {/* Tech Stack */}
      <section className="bg-gradient-to-b from-navy-dark to-navy-dark/90">
        <TechStack />
      </section>

      {/* Results & Impact */}
      <section className="bg-navy-dark">
        <ResultsAndImpact />
      </section>

      {/* Future Scope */}
      <section className="bg-gradient-to-b from-navy-dark to-navy-dark/90">
        <FutureScope />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
