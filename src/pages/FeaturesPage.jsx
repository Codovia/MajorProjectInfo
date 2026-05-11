import { useState } from "react";
import { SectionHeading, FeatureCard, GlassCard } from "../components/UI";
import { FilterButton, Tabs, Modal } from "../components/Interactive";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

export const FeaturesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 1,
      category: "prediction",
      icon: "🔮",
      title: "Flood Risk Prediction",
      description:
        "ML models predict flood probability with high accuracy 24-72 hours in advance",
      details:
        "Uses historical data, current weather patterns, and terrain analysis to generate highly accurate predictions.",
      accuracy: "98%",
    },
    {
      id: 2,
      category: "weather",
      icon: "🌧️",
      title: "Rainfall Forecasting",
      description:
        "Real-time weather APIs provide detailed rainfall predictions",
      details:
        "Integrates with Open-Meteo API for continuous weather monitoring.",
      accuracy: "96%",
    },
    {
      id: 3,
      category: "monitoring",
      icon: "👁️",
      title: "District Monitoring",
      description: "Real-time monitoring of all 31 Karnataka districts",
      details:
        "Individual risk scores, status indicators, and trend analysis for each district.",
      accuracy: "97%",
    },
    {
      id: 4,
      category: "mapping",
      icon: "🗺️",
      title: "Interactive Risk Map",
      description: "Beautiful GeoJSON-based map visualization",
      details:
        "Color-coded risk levels, instant updates, and drill-down capabilities.",
      accuracy: "99%",
    },
    {
      id: 5,
      category: "alerts",
      icon: "🚨",
      title: "Smart Alerts System",
      description: "Automated alert generation with safety recommendations",
      details: "Customizable alert thresholds, SMS/Email/Web notifications.",
      accuracy: "95%",
    },
    {
      id: 6,
      category: "analytics",
      icon: "📊",
      title: "Performance Analytics",
      description:
        "Detailed model performance metrics and historical validation",
      details:
        "Accuracy tracking, precision/recall analysis, and trend visualization.",
      accuracy: "94%",
    },
  ];

  const categories = [
    { value: "all", label: "🎯 All Features" },
    { value: "prediction", label: "🔮 Prediction" },
    { value: "weather", label: "🌧️ Weather" },
    { value: "monitoring", label: "👁️ Monitoring" },
    { value: "mapping", label: "🗺️ Mapping" },
    { value: "alerts", label: "🚨 Alerts" },
    { value: "analytics", label: "📊 Analytics" },
  ];

  const filtered =
    selectedCategory === "all"
      ? features
      : features.filter((f) => f.category === selectedCategory);

  return (
    <div className="min-h-screen bg-navy-dark">
      <Navigation />

      <section className="pt-32 pb-16 section-container relative z-10">
        <SectionHeading subtitle="Explore all the powerful capabilities of our system">
          Advanced Features
        </SectionHeading>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((cat) => (
            <FilterButton
              key={cat.value}
              label={cat.label}
              isActive={selectedCategory === cat.value}
              onClick={() => setSelectedCategory(cat.value)}
            />
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filtered.map((feature, i) => (
            <motion.div
              key={feature.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedFeature(feature)}
              className="cursor-pointer"
            >
              <FeatureCard {...feature} delay={i * 0.05} />
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl mb-12"
        >
          <h3 className="text-2xl font-bold text-gradient mb-8">
            Feature Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-mist-white">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 text-cyan-glow">
                    Speed
                  </th>
                  <th className="text-center py-4 px-4 text-ocean-teal">
                    Accuracy
                  </th>
                  <th className="text-center py-4 px-4 text-accent-amber">
                    Coverage
                  </th>
                  <th className="text-center py-4 px-4 text-cyan-glow">
                    Reliability
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature) => (
                  <tr
                    key={feature.id}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="py-4 px-4 text-mist-white font-semibold">
                      {feature.title}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-cyan-glow/20 px-3 py-1 rounded-full text-cyan-glow text-xs">
                        Fast
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center text-ocean-teal font-bold">
                      {feature.accuracy}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-accent-amber"
                          ></div>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                        ✓ Reliable
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Feature Detail Modal */}
      <Modal
        isOpen={!!selectedFeature}
        onClose={() => setSelectedFeature(null)}
        title={selectedFeature?.title}
      >
        <div className="space-y-4">
          <p className="text-mist-white/80">{selectedFeature?.details}</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-effect p-4 rounded-lg">
              <p className="text-mist-white/60 text-sm mb-1">Accuracy</p>
              <p className="text-2xl font-bold text-gradient">
                {selectedFeature?.accuracy}
              </p>
            </div>
            <div className="glass-effect p-4 rounded-lg">
              <p className="text-mist-white/60 text-sm mb-1">Status</p>
              <p className="text-lg font-bold text-green-400">✓ Active</p>
            </div>
          </div>
        </div>
      </Modal>

      <Footer />
    </div>
  );
};
