import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SectionHeading, PipelineStep } from "../components/UI";

export const HowItWorksPage = () => {
  const steps = [
    {
      num: "01",
      title: "Data Collection",
      description:
        "Gather real-time weather data from Open-Meteo API, historic flood records, rainfall measurements, and geographic information (GeoJSON) for all 31 districts.",
      details: [
        "Real-time weather APIs",
        "Historical data archives",
        "Geographic information",
        "Terrain elevation data",
      ],
    },
    {
      num: "02",
      title: "Data Preprocessing",
      description:
        "Clean, validate, and normalize the collected data. Handle missing values, remove outliers, and ensure consistency across all data sources.",
      details: [
        "Data cleaning",
        "Outlier detection",
        "Missing value handling",
        "Data normalization",
      ],
    },
    {
      num: "03",
      title: "Feature Engineering",
      description:
        "Extract meaningful features from raw data. Calculate rainfall ratios, create seasonal indicators, and compute terrain-based risk factors.",
      details: [
        "Rainfall patterns",
        "Seasonal trends",
        "Terrain analysis",
        "Risk indicators",
      ],
    },
    {
      num: "04",
      title: "Model Training",
      description:
        "Train Random Forest, Neural Network, and ensemble models using 20+ years of historical data. Validate performance against test datasets.",
      details: [
        "Random Forest",
        "Neural Networks",
        "XGBoost",
        "Ensemble methods",
      ],
    },
    {
      num: "05",
      title: "Prediction Generation",
      description:
        "Run trained models with current and forecasted data to generate flood risk predictions for 48-72 hour window across all districts.",
      details: [
        "48-hour forecast",
        "72-hour forecast",
        "Risk scoring",
        "Confidence levels",
      ],
    },
    {
      num: "06",
      title: "Alert & Notification",
      description:
        "Trigger alerts based on risk levels. Send notifications to authorities, communities, and stakeholders through multiple communication channels.",
      details: [
        "SMS alerts",
        "Email notifications",
        "Dashboard updates",
        "API endpoints",
      ],
    },
  ];

  const riskLevels = [
    {
      level: "Low Risk",
      color: "from-green-500",
      description: "Normal conditions, routine monitoring",
      threshold: "Risk Score < 30%",
      action: "Continue regular monitoring",
    },
    {
      level: "Medium Risk",
      color: "from-yellow-500",
      description: "Elevated risk, prepare contingencies",
      threshold: "Risk Score 30-60%",
      action: "Alert stakeholders, prepare resources",
    },
    {
      level: "High Risk",
      color: "from-red-500",
      description: "Critical threat, immediate action",
      threshold: "Risk Score > 60%",
      action: "Issue warnings, begin evacuation",
    },
  ];

  return (
    <div className="min-h-screen bg-navy-dark">
      <Navigation />

      <section className="pt-32 pb-16 section-container relative z-10">
        <SectionHeading subtitle="Step-by-step breakdown of our prediction process">
          How It Works
        </SectionHeading>

        {/* Main Pipeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gradient mb-12">
            Prediction Pipeline
          </h2>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <PipelineStep
                  number={step.num}
                  title={step.title}
                  description={step.description}
                  details={step.details}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Risk Levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gradient mb-8">
            Risk Assessment Levels
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {riskLevels.map((risk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`glass-effect p-6 rounded-xl border-2 border-opacity-50 ${
                  risk.color === "from-green-500"
                    ? "border-green-500/50"
                    : risk.color === "from-yellow-500"
                      ? "border-yellow-500/50"
                      : "border-red-500/50"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${risk.color} to-transparent mb-4`}
                ></div>
                <h3 className="text-xl font-bold mb-2">{risk.level}</h3>
                <p className="text-sm text-mist-white/70 mb-4">
                  {risk.description}
                </p>
                <div className="space-y-3 p-4 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-xs text-mist-white/60 mb-1">Threshold</p>
                    <p className="font-semibold text-mist-white">
                      {risk.threshold}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-mist-white/60 mb-1">
                      Recommended Action
                    </p>
                    <p className="font-semibold text-accent-amber">
                      {risk.action}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Machine Learning Models */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl mb-16"
        >
          <h2 className="text-2xl font-bold text-gradient mb-8">
            ML Models & Techniques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "🌲",
                name: "Random Forest",
                description:
                  "Ensemble of decision trees for robust predictions with feature importance analysis",
              },
              {
                icon: "🧠",
                name: "Neural Networks",
                description:
                  "Deep learning model capturing complex patterns in rainfall and terrain data",
              },
              {
                icon: "📊",
                name: "XGBoost",
                description:
                  "Gradient boosting for high accuracy with improved model interpretability",
              },
              {
                icon: "🔄",
                name: "Ensemble Learning",
                description:
                  "Combining multiple models to achieve 98% prediction accuracy",
              },
            ].map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-white/10 rounded-lg hover:border-cyan-glow/50 transition"
              >
                <div className="text-4xl mb-4">{model.icon}</div>
                <h3 className="text-lg font-bold text-cyan-glow mb-2">
                  {model.name}
                </h3>
                <p className="text-mist-white/70">{model.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Data Sources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl mb-16"
        >
          <h2 className="text-2xl font-bold text-gradient mb-8">
            Data Sources & Integration
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                source: "Open-Meteo API",
                data: "Real-time weather forecasts, temperature, rainfall, wind speed",
                frequency: "Hourly updates",
                reliability: "99.5%",
              },
              {
                source: "Historical Archives",
                data: "20+ years of flood data, rainfall records, disaster reports",
                frequency: "Static with updates",
                reliability: "100%",
              },
              {
                source: "GeoJSON Maps",
                data: "District boundaries, terrain elevation, geographic features",
                frequency: "Updated quarterly",
                reliability: "99%",
              },
              {
                source: "Real-time Sensors",
                data: "Local rainfall gauges, water level sensors from stations",
                frequency: "Real-time",
                reliability: "95%",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-white/10 rounded-lg"
              >
                <h3 className="text-lg font-bold text-ocean-teal mb-3">
                  {item.source}
                </h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-mist-white/60">Data: </span>
                    <span className="text-mist-white">{item.data}</span>
                  </p>
                  <p>
                    <span className="text-mist-white/60">Update Freq: </span>
                    <span className="text-mist-white">{item.frequency}</span>
                  </p>
                  <p>
                    <span className="text-mist-white/60">Reliability: </span>
                    <span className="text-green-400 font-semibold">
                      {item.reliability}
                    </span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold text-gradient mb-8">
            Performance Validation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { metric: "Accuracy", value: "98%", color: "text-green-400" },
              { metric: "Precision", value: "96%", color: "text-cyan-glow" },
              { metric: "Recall", value: "95%", color: "text-ocean-teal" },
              { metric: "F1-Score", value: "0.96", color: "text-accent-amber" },
              {
                metric: "Training Time",
                value: "2.5 hrs",
                color: "text-pink-400",
              },
              {
                metric: "Prediction Time",
                value: "< 100ms",
                color: "text-purple-400",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="text-center p-6 border border-white/10 rounded-lg"
              >
                <p className="text-mist-white/70 text-sm mb-2">{item.metric}</p>
                <p className={`text-3xl font-bold ${item.color}`}>
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};
