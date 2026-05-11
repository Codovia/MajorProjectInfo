import { SectionHeading, GlassCard } from "./UI";
import { motion } from "framer-motion";

export const Architecture = () => {
  const components = [
    {
      category: "Frontend",
      items: ["React 19", "Vite", "Tailwind CSS", "Framer Motion"],
      color: "from-cyan-glow to-ocean-teal",
    },
    {
      category: "Backend",
      items: ["FastAPI", "Python", "SQLite"],
      color: "from-ocean-teal to-accent-amber",
    },
    {
      category: "ML Models",
      items: ["scikit-learn", "Random Forest", "Neural Networks"],
      color: "from-accent-amber to-cyan-glow",
    },
    {
      category: "Data Sources",
      items: ["Open-Meteo API", "GeoJSON", "Historical Records"],
      color: "from-cyan-glow to-ocean-teal",
    },
  ];

  return (
    <section id="architecture" className="section-container relative z-10">
      <SectionHeading subtitle="Enterprise-Grade System Architecture">
        Technical Architecture
      </SectionHeading>

      {/* Architecture Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {components.map((comp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className={`glass-effect p-6 rounded-xl border border-white/10 hover:border-cyan-glow/50 transition-all`}
          >
            <div
              className={`text-lg font-bold bg-gradient-to-r ${comp.color} bg-clip-text text-transparent mb-4`}
            >
              {comp.category}
            </div>
            <ul className="space-y-2">
              {comp.items.map((item, j) => (
                <li
                  key={j}
                  className="flex items-center gap-2 text-sm text-mist-white/70"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-glow"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* System Flow Diagram */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass-effect p-8 rounded-2xl overflow-x-auto"
      >
        <div className="min-w-max py-8 px-4">
          <div className="flex items-center justify-between gap-2 md:gap-6">
            {/* Data Collection */}
            <motion.div
              className="flex-shrink-0 w-32 h-20 rounded-lg bg-gradient-to-br from-ocean-teal/20 to-cyan-glow/20 border border-cyan-glow/50 flex items-center justify-center text-center p-2"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)",
              }}
            >
              <div className="text-xs font-semibold text-mist-white">
                Weather APIs
                <br />
                GeoJSON
                <br />
                Databases
              </div>
            </motion.div>

            <div className="w-8 h-1 bg-gradient-to-r from-cyan-glow/50 to-transparent"></div>

            {/* Processing */}
            <motion.div
              className="flex-shrink-0 w-32 h-20 rounded-lg bg-gradient-to-br from-accent-amber/20 to-ocean-teal/20 border border-accent-amber/50 flex items-center justify-center text-center p-2"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(251, 191, 36, 0.4)",
              }}
            >
              <div className="text-xs font-semibold text-mist-white">
                Data Processing
                <br />
                Feature Eng.
                <br />
                ML Models
              </div>
            </motion.div>

            <div className="w-8 h-1 bg-gradient-to-r from-accent-amber/50 to-transparent"></div>

            {/* Backend */}
            <motion.div
              className="flex-shrink-0 w-32 h-20 rounded-lg bg-gradient-to-br from-cyan-glow/20 to-ocean-teal/20 border border-cyan-glow/50 flex items-center justify-center text-center p-2"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)",
              }}
            >
              <div className="text-xs font-semibold text-mist-white">
                FastAPI
                <br />
                Prediction
                <br />
                Alerts
              </div>
            </motion.div>

            <div className="w-8 h-1 bg-gradient-to-r from-cyan-glow/50 to-transparent"></div>

            {/* Frontend */}
            <motion.div
              className="flex-shrink-0 w-32 h-20 rounded-lg bg-gradient-to-br from-ocean-teal/20 to-accent-amber/20 border border-ocean-teal/50 flex items-center justify-center text-center p-2"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
              }}
            >
              <div className="text-xs font-semibold text-mist-white">
                React
                <br />
                Dashboard
                <br />
                Visualization
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Key Integrations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <GlassCard className="p-6">
          <h3 className="text-lg font-bold text-cyan-glow mb-3">
            📡 Data Integration
          </h3>
          <p className="text-mist-white/70 text-sm">
            Open-Meteo API for real-time weather data, GeoJSON for geographic
            boundaries, SQLite for persistent storage, and historical flood
            records for model training.
          </p>
        </GlassCard>
        <GlassCard className="p-6">
          <h3 className="text-lg font-bold text-accent-amber mb-3">
            🚀 Deployment Stack
          </h3>
          <p className="text-mist-white/70 text-sm">
            Containerized FastAPI backend, responsive React frontend, automated
            ML pipeline, RESTful APIs, and scalable database architecture for
            production readiness.
          </p>
        </GlassCard>
      </div>
    </section>
  );
};
