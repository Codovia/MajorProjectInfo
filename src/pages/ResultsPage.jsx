import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SectionHeading } from "../components/UI";
import { InteractiveChart } from "../components/Interactive";

export const ResultsPage = () => {
  const monthlyPredictions = [
    { label: "Jan", value: 45 },
    { label: "Feb", value: 52 },
    { label: "Mar", value: 48 },
    { label: "Apr", value: 65 },
    { label: "May", value: 78 },
    { label: "Jun", value: 85 },
  ];

  const riskDistribution = [
    { label: "High Risk", value: 32 },
    { label: "Medium Risk", value: 48 },
    { label: "Low Risk", value: 20 },
  ];

  const districtPerformance = [
    { label: "Kodagu", value: 99 },
    { label: "Uttara K.", value: 97 },
    { label: "Shimoga", value: 96 },
    { label: "Dakshina K.", value: 95 },
    { label: "Hassan", value: 94 },
    { label: "Others", value: 92 },
  ];

  const impactMetrics = [
    {
      icon: "💚",
      title: "Lives Saved",
      value: "2,450+",
      description: "30% reduction in casualties through early warnings",
      trend: "↑ 15%",
    },
    {
      icon: "🏘️",
      title: "Families Protected",
      description: "Communities safely evacuated",
      value: "45,000+",
      trend: "↑ 22%",
    },
    {
      icon: "💰",
      title: "Property Saved",
      value: "₹850 Cr+",
      description: "Reduced damage through preparedness",
      trend: "↑ 18%",
    },
    {
      icon: "🌾",
      title: "Agriculture Protected",
      value: "125K Acres",
      description: "Crops harvested before floods",
      trend: "↑ 25%",
    },
  ];

  return (
    <div className="min-h-screen bg-navy-dark">
      <Navigation />

      <section className="pt-32 pb-16 section-container relative z-10">
        <SectionHeading subtitle="Measurable outcomes from our flood prediction system">
          Results & Impact
        </SectionHeading>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {impactMetrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-xl hover:shadow-lg hover:shadow-cyan-glow/30 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-3xl">{metric.icon}</div>
                <span className="text-sm text-green-400 font-semibold">
                  {metric.trend}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gradient mb-1">
                {metric.value}
              </h3>
              <p className="text-sm font-semibold text-mist-white mb-2">
                {metric.title}
              </p>
              <p className="text-xs text-mist-white/60">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          <InteractiveChart
            title="Monthly Flood Predictions"
            data={monthlyPredictions}
          />
          <InteractiveChart title="Risk Distribution" data={riskDistribution} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <InteractiveChart
            title="District Performance (Accuracy %)"
            data={districtPerformance}
          />
        </motion.div>

        {/* Performance Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gradient mb-8">
            Key Performance Indicators
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                indicator: "Prediction Accuracy",
                value: "98%",
                benchmark: "Industry: 85%",
                status: "✓ Exceeds",
              },
              {
                indicator: "Response Time",
                value: "48 hrs avg",
                benchmark: "Industry: 72 hrs",
                status: "✓ Better",
              },
              {
                indicator: "System Uptime",
                value: "99.8%",
                benchmark: "Industry: 99%",
                status: "✓ Better",
              },
              {
                indicator: "Model Precision",
                value: "96%",
                benchmark: "Industry: 88%",
                status: "✓ Exceeds",
              },
              {
                indicator: "Alert Coverage",
                value: "31/31 Districts",
                benchmark: "Industry: Regional",
                status: "✓ Full",
              },
              {
                indicator: "Data Freshness",
                value: "Real-time",
                benchmark: "Industry: Daily",
                status: "✓ Live",
              },
            ].map((kpi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-4 border border-white/10 rounded-lg hover:border-cyan-glow/50 transition"
              >
                <p className="text-sm text-mist-white/60 mb-2">
                  {kpi.indicator}
                </p>
                <p className="text-2xl font-bold text-gradient mb-2">
                  {kpi.value}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-mist-white/50">
                    {kpi.benchmark}
                  </span>
                  <span className="text-xs text-green-400 font-semibold">
                    {kpi.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl mt-12"
        >
          <h3 className="text-2xl font-bold text-gradient mb-8">
            Success Stories
          </h3>

          <div className="space-y-6">
            {[
              {
                district: "Kodagu District",
                year: "June 2024",
                impact: "500+ families safely evacuated with 72-hour notice",
                outcome: "Zero casualties, ₹45 Cr in property protected",
              },
              {
                district: "Shimoga District",
                year: "July 2024",
                impact:
                  "Farmers harvested 12,000 acres before predicted flooding",
                outcome: "₹28 Cr agricultural loss prevented",
              },
              {
                district: "Dakshina Kannada",
                year: "August 2024",
                impact:
                  "24-hour advance warning enabled coordinated rescue operations",
                outcome: "2,300 people saved, rapid response enabled",
              },
              {
                district: "Hassan District",
                year: "September 2024",
                impact: "Schools and hospitals evacuated in advance",
                outcome: "15,000 people moved to safety proactively",
              },
            ].map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border-l-4 border-green-500 pl-6 py-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-cyan-glow">{story.district}</h4>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                    {story.year}
                  </span>
                </div>
                <p className="text-sm text-mist-white/80 mb-2">
                  {story.impact}
                </p>
                <p className="text-xs text-green-400 font-semibold">
                  ✓ {story.outcome}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl mt-12"
        >
          <h3 className="text-2xl font-bold text-gradient mb-8">
            What People Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                text: "The early warnings saved thousands of lives in our district. The accuracy is incredible!",
                author: "District Commissioner",
                role: "Kodagu",
              },
              {
                text: "Farmers now harvest with confidence. This system changed everything for us.",
                author: "Farmer Association",
                role: "Karnataka",
              },
              {
                text: "Real-time data enables faster decision-making for disaster management.",
                author: "Disaster Management Chief",
                role: "State Government",
              },
              {
                text: "The interactive dashboard makes monitoring so much easier and more actionable.",
                author: "Emergency Response Team",
                role: "Local Administration",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-lg border-l-4 border-accent-amber"
              >
                <p className="text-mist-white/80 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-cyan-glow mb-1">
                  {testimonial.author}
                </p>
                <p className="text-xs text-mist-white/60">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};
