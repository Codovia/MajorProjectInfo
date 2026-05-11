import { SectionHeading, GlassCard } from "./UI";
import { motion } from "framer-motion";

export const ProjectOverview = () => {
  const features = [
    {
      icon: "📍",
      title: "District-wise Prediction",
      desc: "Flood risk forecasting for all 31 districts",
    },
    {
      icon: "🌧️",
      title: "Rainfall Analysis",
      desc: "Real-time and forecast rainfall data processing",
    },
    {
      icon: "🗺️",
      title: "Map Visualization",
      desc: "Interactive GeoJSON-based risk mapping",
    },
    {
      icon: "⚠️",
      title: "Alert Generation",
      desc: "Automated intelligent alert system",
    },
  ];

  return (
    <section className="section-container relative z-10">
      <SectionHeading subtitle="Comprehensive Flood Intelligence for Every District">
        What We Build
      </SectionHeading>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <GlassCard className="p-10">
          <p className="text-lg text-mist-white/80 leading-relaxed mb-6">
            The{" "}
            <span className="text-cyan-glow font-semibold">
              Karnataka Flood Prediction and Early Warning System
            </span>{" "}
            is an end-to-end solution that leverages artificial intelligence,
            real-time weather data, and geographic information to predict flood
            risks and generate timely alerts.
          </p>

          <p className="text-mist-white/70 leading-relaxed">
            Our platform integrates Open-Meteo weather APIs for rainfall
            forecasting, processes geospatial data using GeoJSON, applies
            advanced machine learning models trained on historical flood
            patterns, and presents actionable intelligence through an intuitive
            dashboard. The system provides 24-72 hour advance warnings, enabling
            authorities and communities to prepare, evacuate safely, and
            mitigate disaster impacts.
          </p>
        </GlassCard>
      </motion.div>

      {/* Core Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="glass-effect p-6 rounded-xl text-center"
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-cyan-glow mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-mist-white/70">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
