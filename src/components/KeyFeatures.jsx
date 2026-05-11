import { SectionHeading, FeatureCard } from "./UI";

export const KeyFeatures = () => {
  const features = [
    {
      icon: "🔮",
      title: "Flood Risk Prediction",
      description:
        "ML models predict flood probability with high accuracy 24-72 hours in advance using weather data and terrain analysis.",
    },
    {
      icon: "🌧️",
      title: "Rainfall Forecasting",
      description:
        "Integrates real-time weather APIs to provide detailed rainfall predictions and anomaly detection.",
    },
    {
      icon: "👁️",
      title: "District Monitoring",
      description:
        "Real-time monitoring of all 31 Karnataka districts with individual risk scores and status indicators.",
    },
    {
      icon: "🗺️",
      title: "Interactive Risk Map",
      description:
        "Beautiful GeoJSON-based map visualization with color-coded risk levels and instant updates.",
    },
    {
      icon: "🚨",
      title: "Smart Alerts System",
      description:
        "Automated alert generation with safety recommendations and evacuation guidance.",
    },
    {
      icon: "📊",
      title: "Performance Insights",
      description:
        "Detailed model performance metrics, accuracy reports, and historical validation data.",
    },
  ];

  return (
    <section id="features" className="section-container relative z-10">
      <SectionHeading subtitle="Powerful Capabilities Built for Emergency Response">
        Key Features
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
};
