import { SectionHeading, StatCard, GlassCard } from "./UI";
import { motion } from "framer-motion";

export const ProblemAndNeed = () => {
  const stats = [
    { icon: "🌊", label: "Flood Incidents (2015-2023)", value: "156+" },
    { icon: "💔", label: "Lives Lost", value: "2,400+" },
    { icon: "🏘️", label: "Families Displaced", value: "450K+" },
    { icon: "💰", label: "Economic Loss (₹)", value: "₹15B+" },
  ];

  return (
    <section className="section-container relative z-10">
      <SectionHeading subtitle="Why Karnataka Needs Intelligent Flood Prediction">
        The Monsoon Challenge
      </SectionHeading>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} delay={i * 0.1} />
        ))}
      </div>

      {/* Problem Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12"
      >
        <div className="glass-effect p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-cyan-glow mb-4">
            🌍 The Crisis
          </h3>
          <p className="text-mist-white/80 leading-relaxed mb-4">
            Karnataka faces recurrent monsoon flooding that devastates
            agriculture, infrastructure, and lives. Climate change intensifies
            rainfall patterns, making traditional prediction methods inadequate.
          </p>
          <ul className="space-y-3 text-mist-white/70">
            <li className="flex items-start gap-3">
              <span className="text-cyan-glow mt-1">✓</span>
              <span>Unpredictable rainfall patterns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-glow mt-1">✓</span>
              <span>Late or missing flood warnings</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-glow mt-1">✓</span>
              <span>No district-level risk assessment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-glow mt-1">✓</span>
              <span>Limited real-time monitoring</span>
            </li>
          </ul>
        </div>

        <div className="glass-effect p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-accent-amber mb-4">
            💡 Our Solution
          </h3>
          <p className="text-mist-white/80 leading-relaxed mb-4">
            An intelligent, data-driven early warning system that combines
            machine learning, real-time weather data, and topographic analysis
            for predictive flood risk assessment.
          </p>
          <ul className="space-y-3 text-mist-white/70">
            <li className="flex items-start gap-3">
              <span className="text-accent-amber mt-1">✓</span>
              <span>24-72 hour advance warnings</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-amber mt-1">✓</span>
              <span>District-level flood risk prediction</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-amber mt-1">✓</span>
              <span>Real-time rainfall and terrain analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-amber mt-1">✓</span>
              <span>Actionable safety recommendations</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Impact Highlight */}
      <GlassCard className="p-8 border-cyan-glow/30 border-l-4" delay={0.2}>
        <p className="text-lg text-mist-white/80">
          <span className="text-cyan-glow font-bold">
            Early Warning Systems Save Lives:
          </span>{" "}
          A 24-hour advance flood warning can reduce casualties by up to 30% and
          property damage by 50%. Our system empowers communities with time to
          act.
        </p>
      </GlassCard>
    </section>
  );
};
