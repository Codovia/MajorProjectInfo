import { motion } from "framer-motion";
import { GradientText } from "./UI";

export const Footer = ({ teamInfo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10">
      {/* Wave divider */}
      <svg
        className="w-full h-24 text-navy-dark"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,50 Q360,0 720,50 T1440,50 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>

      <div className="bg-gradient-to-b from-navy-dark to-navy-dark/80 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          >
            {/* Project Info */}
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-2">
                Flood Prediction System
              </h3>
              <p className="text-mist-white/70 text-sm mb-4">
                Advanced AI-powered early warning for Karnataka
              </p>
              <div className="space-y-1 text-xs text-mist-white/60">
                <p>
                  <span className="text-cyan-glow font-semibold">College:</span>{" "}
                  [Your College Name]
                </p>
                <p>
                  <span className="text-cyan-glow font-semibold">
                    Academic Year:
                  </span>{" "}
                  2024-2025
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-mist-white mb-4">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#hero"
                    className="text-mist-white/70 hover:text-cyan-glow transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-mist-white/70 hover:text-cyan-glow transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#architecture"
                    className="text-mist-white/70 hover:text-cyan-glow transition-colors"
                  >
                    Architecture
                  </a>
                </li>
                <li>
                  <a
                    href="/team"
                    className="text-mist-white/70 hover:text-cyan-glow transition-colors"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-mist-white mb-4">
                Get In Touch
              </h4>
              <p className="text-sm text-mist-white/70 mb-2">Project Guide</p>
              <p className="text-sm text-mist-white/60 mb-4">Ranjani K</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-cyan-glow/50 flex items-center justify-center text-cyan-glow hover:bg-cyan-glow/10 transition-all"
                >
                  <span className="text-xs">📧</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-cyan-glow/50 flex items-center justify-center text-cyan-glow hover:bg-cyan-glow/10 transition-all"
                >
                  <span className="text-xs">🔗</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-white/10 my-8"></div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-mist-white/60"
          >
            <p>
              © {currentYear}{" "}
              <GradientText>Karnataka Flood Prediction System</GradientText>.
              All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cyan-glow transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cyan-glow transition-colors">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
