import { SectionHeading, FeatureCard } from "./UI";

export const FutureScope = () => {
  const features = [
    {
      icon: "📡",
      title: "Real-time Sensors",
      description:
        "IoT sensors for direct water level and weather monitoring across districts.",
    },
    {
      icon: "🏘️",
      title: "Taluk-Level Prediction",
      description:
        "Granular flood prediction at taluk and village levels for precise targeting.",
    },
    {
      icon: "📱",
      title: "SMS Alerts",
      description:
        "Direct SMS notifications to citizens without internet connectivity.",
    },
    {
      icon: "📲",
      title: "Mobile Application",
      description:
        "Native Android and iOS apps for on-the-go access to alerts and maps.",
    },
    {
      icon: "🏛️",
      title: "Government Integration",
      description:
        "Direct API integration with district administration systems for coordinated response.",
    },
    {
      icon: "🛰️",
      title: "Satellite & IoT Support",
      description:
        "Satellite imagery and advanced IoT sensor networks for enhanced predictions.",
    },
  ];

  return (
    <section className="section-container relative z-10">
      <SectionHeading subtitle="Expanding Capabilities for Greater Impact">
        Future Scope
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
};
