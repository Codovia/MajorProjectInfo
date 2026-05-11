import { motion } from "framer-motion";
import { GradientText, AnimatedButton, ParticleBackground } from "./UI";

export const Hero = ({ onExplore }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />

      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ocean-teal/10 rounded-full filter blur-3xl animate-drift"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-glow/10 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-amber/5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Rain/water effect lines */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-cyan-glow/30 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="premium-heading mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Predict. Warn. <GradientText>Protect.</GradientText>
          </motion.h1>

          <motion.p
            className="premium-subheading max-w-2xl mx-auto mb-12 text-mist-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Advanced AI-powered flood prediction and early warning system for
            Karnataka. Real-time risk assessment, district monitoring, and
            intelligent alerts to save lives and protect communities.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <AnimatedButton onClick={onExplore}>Explore System</AnimatedButton>
          <AnimatedButton
            variant="secondary"
            onClick={() =>
              document
                .getElementById("architecture")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            See Architecture
          </AnimatedButton>
          <AnimatedButton
            variant="secondary"
            onClick={() =>
              document
                .getElementById("features")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View Features
          </AnimatedButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-glow rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-cyan-glow rounded-full mt-2"
              animate={{ y: [0, 8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
