import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SectionHeading, GlassCard } from "../components/UI";
import { Tabs, Modal } from "../components/Interactive";

export const ArchitecturePage = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const components = [
    {
      id: "data-layer",
      name: "Data Layer",
      description:
        "Open-Meteo API, GeoJSON, Historical Records, SQLite Database",
      details:
        "Comprehensive data collection from multiple sources including real-time weather APIs, geographic data, and historical flood records stored in SQLite.",
      technologies: ["Open-Meteo API", "GeoJSON", "SQLite", "CSV Data"],
    },
    {
      id: "processing",
      name: "Processing Layer",
      description: "Data Cleaning, Feature Engineering, Data Normalization",
      details:
        "Processes raw data, extracts relevant features, normalizes values, and prepares data for machine learning models.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    },
    {
      id: "ml",
      name: "ML Models",
      description: "Random Forest, Neural Networks, Ensemble Learning",
      details:
        "Multiple machine learning models trained on historical data to predict flood risks with high accuracy.",
      technologies: ["scikit-learn", "TensorFlow", "XGBoost"],
    },
    {
      id: "backend",
      name: "Backend API",
      description: "FastAPI, RESTful Endpoints, Business Logic",
      details:
        "Exposes ML predictions through RESTful APIs, handles requests, and manages alert generation.",
      technologies: ["FastAPI", "Python 3.11", "Uvicorn"],
    },
    {
      id: "frontend",
      name: "Frontend",
      description: "React Dashboard, Real-time Visualization, Interactive Maps",
      details:
        "Beautiful, responsive web interface for real-time monitoring, data visualization, and user interaction.",
      technologies: ["React 19", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: "database",
      name: "Database",
      description: "SQLite Storage, Alert History, User Data",
      details:
        "Persistent storage for historical predictions, alerts, and system data for audit trails.",
      technologies: ["SQLite", "SQL Queries"],
    },
  ];

  const architectureLayers = [
    {
      label: "Presentation",
      items: ["React Dashboard", "Map Visualization", "Analytics Dashboard"],
      color: "from-cyan-glow",
    },
    {
      label: "API Layer",
      items: ["FastAPI", "REST Endpoints", "WebSocket"],
      color: "from-ocean-teal",
    },
    {
      label: "Business Logic",
      items: ["Prediction Engine", "Alert Generator", "Data Processor"],
      color: "from-accent-amber",
    },
    {
      label: "Data Layer",
      items: ["SQLite DB", "Cache", "File Storage"],
      color: "from-cyan-glow",
    },
  ];

  return (
    <div className="min-h-screen bg-navy-dark">
      <Navigation />

      <section className="pt-32 pb-16 section-container relative z-10">
        <SectionHeading subtitle="Deep dive into our system architecture">
          System Architecture
        </SectionHeading>

        {/* Architecture Layers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gradient mb-8">
            Layered Architecture
          </h3>

          <div className="space-y-4">
            {architectureLayers.map((layer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`glass-effect p-6 rounded-xl border-l-4 border-gradient-to-b ${layer.color}`}
              >
                <h4 className="text-lg font-bold text-cyan-glow mb-3">
                  {layer.label} Layer
                </h4>
                <div className="flex flex-wrap gap-3">
                  {layer.items.map((item, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full bg-white/10 text-mist-white text-sm hover:bg-white/20 transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Components Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gradient mb-8">
            System Components
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((comp, i) => (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedComponent(comp)}
                whileHover={{ y: -8 }}
                className="glass-effect p-6 rounded-xl cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-cyan-glow group-hover:text-accent-amber transition">
                    {comp.name}
                  </h4>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-glow to-ocean-teal"></div>
                </div>
                <p className="text-sm text-mist-white/70">{comp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Data Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl mb-16"
        >
          <h3 className="text-2xl font-bold text-gradient mb-8">
            Data Flow Pipeline
          </h3>

          <div className="overflow-x-auto">
            <div className="flex items-center justify-between gap-4 min-w-max p-4">
              {[
                { label: "Data Sources", icon: "📊" },
                { label: "Processing", icon: "⚙️" },
                { label: "ML Models", icon: "🤖" },
                { label: "Predictions", icon: "🔮" },
                { label: "API", icon: "🔌" },
                { label: "Dashboard", icon: "📈" },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-ocean-teal/30 to-cyan-glow/30 border border-cyan-glow/50 flex items-center justify-center text-2xl hover:shadow-lg hover:shadow-cyan-glow/30 transition">
                      {step.icon}
                    </div>
                    <p className="text-xs text-mist-white/60 mt-2 text-center">
                      {step.label}
                    </p>
                  </motion.div>

                  {i < 5 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="w-12 h-1 bg-gradient-to-r from-cyan-glow to-transparent origin-left"
                    ></motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gradient mb-8">
            Complete Tech Stack
          </h3>

          <Tabs
            tabs={[
              {
                label: "🎨 Frontend",
                content: (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "React 19", desc: "Modern UI library" },
                      { name: "Vite", desc: "Ultra-fast build tool" },
                      { name: "Tailwind CSS", desc: "Utility-first styling" },
                      { name: "Framer Motion", desc: "Smooth animations" },
                      { name: "React Router", desc: "Client-side routing" },
                    ].map((tech, i) => (
                      <div
                        key={i}
                        className="p-4 border border-white/10 rounded-lg hover:border-cyan-glow/50 transition"
                      >
                        <p className="font-semibold text-cyan-glow">
                          {tech.name}
                        </p>
                        <p className="text-xs text-mist-white/60">
                          {tech.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                label: "⚙️ Backend",
                content: (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "FastAPI", desc: "Modern API framework" },
                      { name: "Python 3.11", desc: "Programming language" },
                      { name: "SQLite", desc: "Database storage" },
                      { name: "Uvicorn", desc: "ASGI server" },
                    ].map((tech, i) => (
                      <div
                        key={i}
                        className="p-4 border border-white/10 rounded-lg hover:border-ocean-teal/50 transition"
                      >
                        <p className="font-semibold text-ocean-teal">
                          {tech.name}
                        </p>
                        <p className="text-xs text-mist-white/60">
                          {tech.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                label: "🤖 ML & Data",
                content: (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "scikit-learn", desc: "ML algorithms" },
                      { name: "Pandas", desc: "Data processing" },
                      { name: "NumPy", desc: "Numerical computing" },
                      { name: "Random Forest", desc: "Ensemble learning" },
                    ].map((tech, i) => (
                      <div
                        key={i}
                        className="p-4 border border-white/10 rounded-lg hover:border-accent-amber/50 transition"
                      >
                        <p className="font-semibold text-accent-amber">
                          {tech.name}
                        </p>
                        <p className="text-xs text-mist-white/60">
                          {tech.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                ),
              },
            ]}
          />
        </motion.div>
      </section>

      {/* Component Details Modal */}
      <Modal
        isOpen={!!selectedComponent}
        onClose={() => setSelectedComponent(null)}
        title={selectedComponent?.name}
      >
        <div className="space-y-4">
          <p className="text-mist-white/80">{selectedComponent?.details}</p>
          <div>
            <p className="text-sm text-mist-white/60 mb-3 font-semibold">
              Technologies Used:
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedComponent?.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-cyan-glow/20 text-cyan-glow text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      <Footer />
    </div>
  );
};
