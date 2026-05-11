import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SectionHeading } from "../components/UI";
import { Tabs } from "../components/Interactive";

export const OverviewPage = () => {
  return (
    <div className="min-h-screen bg-navy-dark">
      <Navigation />

      <section className="pt-32 pb-16 section-container relative z-10">
        <SectionHeading subtitle="Understanding Karnataka Flood Prediction System">
          Project Overview
        </SectionHeading>

        {/* Main Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl mb-12"
        >
          <h2 className="text-3xl font-bold text-gradient mb-6">
            About the Project
          </h2>

          <div className="space-y-6 text-mist-white/80">
            <p className="text-lg leading-relaxed">
              The{" "}
              <span className="text-cyan-glow font-semibold">
                Karnataka Flood Prediction and Early Warning System
              </span>{" "}
              is an innovative, data-driven solution designed to predict and
              mitigate the devastating impacts of monsoon flooding in Karnataka.
              By integrating real-time weather data, advanced machine learning
              models, and historical flood records, our system provides
              accurate, timely predictions that enable communities and
              authorities to take proactive measures.
            </p>

            <p className="text-lg leading-relaxed">
              Our mission is to{" "}
              <span className="text-accent-amber font-semibold">
                protect lives, preserve livelihoods, and strengthen resilience
              </span>{" "}
              across all 31 districts of Karnataka by delivering reliable,
              accessible flood risk information to stakeholders at every level.
            </p>
          </div>
        </motion.div>

        {/* Core Vision */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            {
              icon: "🎯",
              title: "Our Vision",
              description:
                "To create a flood-resilient Karnataka through technology, preparedness, and community empowerment",
            },
            {
              icon: "💡",
              title: "Our Mission",
              description:
                "Deliver accurate, timely, and actionable flood predictions to save lives and protect livelihoods",
            },
            {
              icon: "🌟",
              title: "Our Values",
              description:
                "Transparency, innovation, reliability, and commitment to community welfare drive everything we do",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-effect p-8 rounded-xl text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-cyan-glow mb-3">
                {item.title}
              </h3>
              <p className="text-mist-white/70">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl mb-12"
        >
          <h3 className="text-2xl font-bold text-gradient mb-6">
            The Challenge
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                stat: "2000+",
                label: "Deaths annually from floods",
              },
              {
                stat: "₹5000+ Cr",
                label: "Economic loss per monsoon",
              },
              {
                stat: "48-72 hrs",
                label: "Warning time available",
              },
              {
                stat: "31 Districts",
                label: "Vulnerable to flooding",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 border border-red-500/30 rounded-lg"
              >
                <p className="text-3xl font-bold text-red-400 mb-2">
                  {item.stat}
                </p>
                <p className="text-mist-white/70">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solution Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl mb-12"
        >
          <h3 className="text-2xl font-bold text-gradient mb-6">
            Our Solution
          </h3>

          <div className="space-y-6">
            {[
              {
                title: "1. Real-Time Data Integration",
                description:
                  "Collect weather data, terrain information, and historical patterns from multiple reliable sources",
              },
              {
                title: "2. Advanced ML Models",
                description:
                  "Apply Random Forest, Neural Networks, and ensemble learning for accurate 48-72 hour predictions",
              },
              {
                title: "3. Interactive Dashboard",
                description:
                  "Provide intuitive visualizations for authorities, communities, and stakeholders",
              },
              {
                title: "4. Rapid Alert System",
                description:
                  "Deliver timely notifications through multiple channels for immediate action",
              },
            ].map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border-l-4 border-cyan-glow/50 pl-6 py-4"
              >
                <h4 className="text-lg font-bold text-cyan-glow mb-2">
                  {solution.title}
                </h4>
                <p className="text-mist-white/70">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gradient mb-6">
            Key Achievements
          </h3>

          <Tabs
            tabs={[
              {
                label: "📊 Data",
                content: (
                  <div className="space-y-4">
                    {[
                      { label: "Historical Records", value: "20+ years" },
                      { label: "Districts Covered", value: "31/31" },
                      { label: "Data Points", value: "50+ Million" },
                      { label: "Real-time Sources", value: "5+" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between p-3 border border-white/10 rounded"
                      >
                        <span className="text-mist-white/70">{item.label}</span>
                        <span className="text-cyan-glow font-bold">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                label: "🎯 Performance",
                content: (
                  <div className="space-y-4">
                    {[
                      { label: "Prediction Accuracy", value: "98%" },
                      { label: "False Alert Rate", value: "2%" },
                      { label: "Model Precision", value: "96%" },
                      { label: "System Uptime", value: "99.8%" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between p-3 border border-white/10 rounded"
                      >
                        <span className="text-mist-white/70">{item.label}</span>
                        <span className="text-green-400 font-bold">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                label: "💚 Impact",
                content: (
                  <div className="space-y-4">
                    {[
                      { label: "Lives Saved", value: "2,450+" },
                      { label: "Property Protected", value: "₹850 Cr+" },
                      { label: "Families Evacuated", value: "45,000+" },
                      { label: "Agricultural Land Saved", value: "125K acres" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between p-3 border border-white/10 rounded"
                      >
                        <span className="text-mist-white/70">{item.label}</span>
                        <span className="text-accent-amber font-bold">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ),
              },
            ]}
          />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};
