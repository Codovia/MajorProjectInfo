import { SectionHeading, AnimatedCounter, GlassCard } from "./UI";
import { motion } from "framer-motion";

export const ResultsAndImpact = () => {
  const metrics = [
    { label: "Prediction Accuracy", value: 98, suffix: "%" },
    { label: "Districts Covered", value: 31, suffix: "" },
    { label: "Response Time", value: 24, suffix: "-72 hrs" },
    { label: "Live Monitoring", value: 365, suffix: "days/yr" },
  ];

  const impacts = [
    {
      icon: "💚",
      title: "Lives Saved",
      description:
        "Early warnings enable timely evacuation and preparation, reducing casualties by up to 30%.",
    },
    {
      icon: "🏢",
      title: "Asset Protection",
      description:
        "Advanced notice allows communities to secure property and reduce damage by 50%.",
    },
    {
      icon: "🌱",
      title: "Agricultural Impact",
      description:
        "Farmers can harvest early and protect crops, preserving livelihoods.",
    },
    {
      icon: "🤝",
      title: "Community Resilience",
      description:
        "Empowers communities with data-driven decisions and coordinated response.",
    },
  ];

  return (
    <section className="section-container relative z-10">
      <SectionHeading subtitle="Measurable Impact Through Advanced Technology">
        Results & Impact
      </SectionHeading>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-effect p-8 text-center rounded-xl hover:shadow-lg hover:shadow-cyan-glow/30 transition-all"
          >
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
              <AnimatedCounter
                value={metric.value}
                duration={2.5}
                suffix={metric.suffix}
              />
            </div>
            <p className="text-mist-white/70">{metric.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Impact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {impacts.map((impact, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="glass-effect p-8 rounded-xl border border-white/10 hover:border-cyan-glow/30 transition-all"
          >
            <div className="text-4xl mb-4">{impact.icon}</div>
            <h3 className="text-xl font-bold text-cyan-glow mb-3">
              {impact.title}
            </h3>
            <p className="text-mist-white/70 leading-relaxed">
              {impact.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Model Performance */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass-effect p-8 rounded-2xl border border-cyan-glow/30"
      >
        <h3 className="text-2xl font-bold text-gradient mb-8">
          🎯 Model Performance Metrics
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              label: "Accuracy",
              value: "98%",
              color: "from-cyan-glow to-ocean-teal",
            },
            {
              label: "Precision",
              value: "96%",
              color: "from-ocean-teal to-accent-amber",
            },
            {
              label: "Recall",
              value: "95%",
              color: "from-accent-amber to-cyan-glow",
            },
          ].map((metric, i) => (
            <div key={i} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="transform -rotate-90 w-full h-full">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="rgba(34, 211, 238, 0.1)"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    strokeWidth="8"
                    stroke={
                      metric.value === "98%"
                        ? "url(#grad1)"
                        : metric.value === "96%"
                          ? "url(#grad2)"
                          : "url(#grad3)"
                    }
                    strokeDasharray={`${2 * Math.PI * 56 * (parseInt(metric.value) / 100)} ${2 * Math.PI * 56}`}
                    initial={{ strokeDasharray: `0 ${2 * Math.PI * 56}` }}
                    whileInView={{
                      strokeDasharray: `${2 * Math.PI * 56 * (parseInt(metric.value) / 100)} ${2 * Math.PI * 56}`,
                    }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                  />
                  <defs>
                    <linearGradient
                      id="grad1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient
                      id="grad2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                    <linearGradient
                      id="grad3"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-2xl font-bold text-gradient">
                    {metric.value}
                  </div>
                </div>
              </div>
              <p className="text-mist-white/70 font-semibold">{metric.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
