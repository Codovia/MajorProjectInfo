import { SectionHeading, GlassCard } from "./UI";
import { motion } from "framer-motion";

export const ProjectShowcase = () => {
  const showcaseItems = [
    {
      title: "Live Dashboard",
      description:
        "Real-time risk assessment and monitoring across all districts",
      icon: "📊",
    },
    {
      title: "Prediction Panels",
      description: "Advanced ML predictions with confidence scores and trends",
      icon: "🔮",
    },
    {
      title: "District Insights",
      description:
        "Detailed analytics for each district with historical comparison",
      icon: "📍",
    },
    {
      title: "Interactive Maps",
      description:
        "Color-coded risk visualization with drill-down capabilities",
      icon: "🗺️",
    },
  ];

  return (
    <section className="section-container relative z-10">
      <SectionHeading subtitle="Advanced Intelligence Delivered in an Elegant Interface">
        Project Showcase
      </SectionHeading>

      {/* Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {showcaseItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass-effect p-8 rounded-2xl border border-white/10 hover:border-cyan-glow/30 transition-all group"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-cyan-glow mb-3">
              {item.title}
            </h3>
            <p className="text-mist-white/70 mb-4">{item.description}</p>

            {/* Placeholder Preview */}
            <div className="bg-gradient-to-br from-ocean-teal/10 to-cyan-glow/10 rounded-lg aspect-video flex items-center justify-center border border-white/5">
              <div className="text-center">
                <div className="text-4xl mb-2 opacity-50">📱</div>
                <p className="text-xs text-mist-white/50">Live Preview</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Dashboard Preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass-effect rounded-2xl p-8 border border-cyan-glow/30"
      >
        <h3 className="text-2xl font-bold text-gradient mb-6">
          🎯 Central Command Dashboard
        </h3>

        <div className="bg-gradient-to-br from-navy/50 to-navy-dark/50 rounded-lg p-6 aspect-video flex flex-col items-center justify-center border border-white/5 relative overflow-hidden">
          {/* Dashboard Grid Animation */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full grid grid-cols-4 grid-rows-4">
              {Array.from({ length: 16 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-cyan-glow"
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{
                    duration: 3,
                    delay: (i % 4) * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 text-center">
            <p className="text-3xl font-bold text-gradient mb-4">
              Live System Status
            </p>
            <div className="flex gap-6 justify-center text-sm">
              <div>
                <div className="text-2xl font-bold text-cyan-glow">31</div>
                <p className="text-mist-white/50">Districts</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-amber">98%</div>
                <p className="text-mist-white/50">Model Accuracy</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-ocean-teal">24/7</div>
                <p className="text-mist-white/50">Monitoring</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-mist-white/60 mt-4 text-sm">
          Real-time visualization with live weather data, prediction results,
          district status, and alert management
        </p>
      </motion.div>
    </section>
  );
};
