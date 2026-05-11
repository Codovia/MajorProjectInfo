import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SectionHeading, GlassCard } from "../components/UI";
import { InteractiveChart, ToggleSwitch } from "../components/Interactive";

export const MonitorPage = () => {
  const [liveStats, setLiveStats] = useState({
    alertsGenerated: 156,
    districtsMonitored: 31,
    averageAccuracy: 98,
    uptime: 99.8,
    activePredictions: 245,
    systemHealth: 98,
  });

  const [autoRefresh, setAutoRefresh] = useState(true);

  // Simulate live data updates
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      setLiveStats((prev) => ({
        alertsGenerated: prev.alertsGenerated + Math.floor(Math.random() * 3),
        districtsMonitored: 31,
        averageAccuracy: Math.min(
          99,
          prev.averageAccuracy + Math.random() * 0.5,
        ),
        uptime: Math.max(99, prev.uptime - Math.random() * 0.1),
        activePredictions:
          prev.activePredictions + Math.floor(Math.random() * 5) - 2,
        systemHealth: Math.min(
          100,
          prev.systemHealth + Math.random() * 0.5 - 0.2,
        ),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, [autoRefresh]);

  const chartData = [
    { label: "Jan", value: 45 },
    { label: "Feb", value: 62 },
    { label: "Mar", value: 58 },
    { label: "Apr", value: 78 },
    { label: "May", value: 85 },
    { label: "Jun", value: 72 },
  ];

  const riskChartData = [
    { label: "High", value: 35 },
    { label: "Medium", value: 45 },
    { label: "Low", value: 20 },
  ];

  return (
    <div className="min-h-screen bg-navy-dark">
      <Navigation />

      <section className="pt-32 pb-16 section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="premium-heading text-gradient mb-2">
                Live Monitor
              </h1>
              <p className="premium-subheading">
                Real-time system status and analytics
              </p>
            </div>
            <ToggleSwitch
              label="Auto Refresh"
              enabled={autoRefresh}
              onChange={setAutoRefresh}
            />
          </div>
        </motion.div>

        {/* Live Statistics */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {[
            {
              icon: "🚨",
              label: "Alerts Generated",
              value: liveStats.alertsGenerated,
              color: "from-red-500",
            },
            {
              icon: "📍",
              label: "Districts Monitored",
              value: liveStats.districtsMonitored,
              color: "from-cyan-glow",
            },
            {
              icon: "📊",
              label: "Avg Accuracy",
              value: `${liveStats.averageAccuracy.toFixed(1)}%`,
              color: "from-green-500",
            },
            {
              icon: "⏱️",
              label: "System Uptime",
              value: `${liveStats.uptime.toFixed(2)}%`,
              color: "from-accent-amber",
            },
            {
              icon: "🎯",
              label: "Active Predictions",
              value: liveStats.activePredictions,
              color: "from-ocean-teal",
            },
            {
              icon: "💚",
              label: "System Health",
              value: `${liveStats.systemHealth.toFixed(1)}%`,
              color: "from-green-500",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-effect p-6 rounded-xl hover:shadow-lg hover:shadow-cyan-glow/30 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-3xl">{stat.icon}</div>
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${stat.color} animate-pulse`}
                ></div>
              </div>
              <p className="text-mist-white/60 text-sm mb-2">{stat.label}</p>
              <motion.p
                key={stat.value}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-3xl font-bold text-gradient"
              >
                {stat.value}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          <InteractiveChart
            title="Flood Predictions (6 months)"
            data={chartData}
          />
          <InteractiveChart title="Risk Distribution" data={riskChartData} />
        </motion.div>

        {/* System Status Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gradient mb-8">
            Recent Activity
          </h3>

          <div className="space-y-6">
            {[
              {
                time: "5 minutes ago",
                event: "High risk alert generated for Kodagu District",
                severity: "high",
              },
              {
                time: "15 minutes ago",
                event: "Rainfall forecast updated for Western Ghats region",
                severity: "info",
              },
              {
                time: "32 minutes ago",
                event: "Model predictions refreshed for all 31 districts",
                severity: "success",
              },
              {
                time: "1 hour ago",
                event:
                  "System health check completed - All systems operational",
                severity: "success",
              },
              {
                time: "2 hours ago",
                event: "Medium risk alert issued for Hassan District",
                severity: "medium",
              },
            ].map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 pb-6 border-b border-white/10 last:border-b-0"
              >
                <div className="flex-shrink-0">
                  <div
                    className={`w-3 h-3 rounded-full mt-2 ${
                      activity.severity === "high"
                        ? "bg-red-500"
                        : activity.severity === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                    }`}
                  ></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-mist-white/60">{activity.time}</p>
                  <p className="text-mist-white font-semibold">
                    {activity.event}
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
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl mt-8"
        >
          <h3 className="text-2xl font-bold text-gradient mb-8">
            Performance Metrics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                label: "API Response Time",
                value: "45ms",
                target: "<100ms",
                status: "good",
              },
              {
                label: "Model Inference Speed",
                value: "230ms",
                target: "<500ms",
                status: "good",
              },
              {
                label: "Data Processing Latency",
                value: "120ms",
                target: "<200ms",
                status: "good",
              },
              {
                label: "Alert Delivery Time",
                value: "2.3s",
                target: "<5s",
                status: "good",
              },
              {
                label: "Database Query Time",
                value: "85ms",
                target: "<150ms",
                status: "good",
              },
              {
                label: "Dashboard Load Time",
                value: "1.8s",
                target: "<3s",
                status: "good",
              },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-4 border border-white/10 rounded-lg"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-mist-white/80 font-semibold">
                    {metric.label}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      metric.status === "good"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {metric.status.toUpperCase()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-2xl font-bold text-cyan-glow">
                    {metric.value}
                  </span>
                  <span className="text-sm text-mist-white/60">
                    Target: {metric.target}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};
