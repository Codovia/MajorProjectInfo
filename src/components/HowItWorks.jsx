import { SectionHeading, PipelineStep } from "./UI";
import { motion } from "framer-motion";

export const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Data Collection",
      description:
        "Gather weather data, rainfall records, and district information",
    },
    {
      number: 2,
      title: "Preprocessing",
      description: "Clean, normalize, and prepare data for analysis",
    },
    {
      number: 3,
      title: "Feature Engineering",
      description: "Extract meaningful patterns and geographic features",
    },
    {
      number: 4,
      title: "ML Processing",
      description: "Apply trained models for risk prediction",
    },
    {
      number: 5,
      title: "Prediction",
      description: "Generate flood risk forecasts and scores",
    },
    {
      number: 6,
      title: "Visualization",
      description: "Display insights on interactive dashboard",
    },
  ];

  return (
    <section className="section-container relative z-10">
      <SectionHeading subtitle="From Data to Actionable Intelligence">
        How the System Works
      </SectionHeading>

      {/* Pipeline Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
        {steps.map((step, i) => (
          <PipelineStep
            key={i}
            number={step.number}
            title={step.title}
            description={step.description}
            delay={i * 0.1}
            isLast={i === steps.length - 1}
          />
        ))}
      </div>

      {/* Process Flow Diagram */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass-effect p-8 rounded-2xl"
      >
        <div className="bg-gradient-to-r from-ocean-teal/10 via-transparent to-cyan-glow/10 rounded-lg p-6 min-h-64 flex items-center justify-center relative overflow-hidden">
          {/* Animated flow lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="flowGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(34, 211, 238, 0)" />
                <stop offset="50%" stopColor="rgba(34, 211, 238, 0.5)" />
                <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
              </linearGradient>
            </defs>
            <motion.line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="url(#flowGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
              viewport={{ once: true }}
            />
          </svg>

          <div className="relative z-10 text-center">
            <p className="text-lg text-mist-white/70 mb-2">
              <span className="text-cyan-glow font-semibold">
                Real-time Data
              </span>{" "}
              →
              <span className="text-accent-amber font-semibold">
                {" "}
                Processing
              </span>{" "}
              →<span className="text-cyan-glow font-semibold"> Prediction</span>
            </p>
            <p className="text-sm text-mist-white/50">
              Complete pipeline executes in minutes for continuous monitoring
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
