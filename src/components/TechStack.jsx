import { SectionHeading, GlassCard } from "./UI";
import { motion } from "framer-motion";

export const TechStack = () => {
  const stack = [
    {
      category: "Frontend",
      techs: [
        "React 19",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "React Router",
      ],
    },
    {
      category: "Backend",
      techs: ["FastAPI", "Python 3.11", "SQLite", "REST APIs"],
    },
    {
      category: "ML & Data",
      techs: ["scikit-learn", "Random Forest", "Pandas", "NumPy"],
    },
    {
      category: "Data Sources",
      techs: [
        "Open-Meteo API",
        "GeoJSON",
        "Weather Data",
        "Historical Records",
      ],
    },
  ];

  const techBadges = stack.flatMap((s) => s.techs);

  return (
    <section className="section-container relative z-10">
      <SectionHeading subtitle="Modern, Scalable, and Industry-Standard Technologies">
        Tech Stack
      </SectionHeading>

      {/* Tech Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stack.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-effect p-6 rounded-xl border border-white/10"
          >
            <h3 className="text-lg font-bold text-gradient mb-4">
              {item.category}
            </h3>
            <div className="space-y-2">
              {item.techs.map((tech, j) => (
                <motion.div
                  key={j}
                  className="text-sm text-mist-white/70 flex items-center gap-2"
                  whileHover={{ x: 4 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow"></span>
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech Badges Cloud */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass-effect p-12 rounded-2xl"
      >
        <p className="text-center text-lg font-semibold text-mist-white mb-8">
          All Technologies
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {techBadges.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: (i % 10) * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
              }}
              className="px-4 py-2 rounded-full border border-cyan-glow/50 bg-cyan-glow/10 text-sm text-cyan-glow hover:border-cyan-glow transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stack Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <GlassCard className="p-6">
          <div className="text-3xl mb-3">⚡</div>
          <h3 className="text-lg font-bold text-cyan-glow mb-2">
            High Performance
          </h3>
          <p className="text-sm text-mist-white/70">
            Vite for fast builds, React 19 for optimized rendering, FastAPI for
            rapid API responses.
          </p>
        </GlassCard>
        <GlassCard className="p-6">
          <div className="text-3xl mb-3">🔐</div>
          <h3 className="text-lg font-bold text-ocean-teal mb-2">
            Production Ready
          </h3>
          <p className="text-sm text-mist-white/70">
            Industry-standard tools, scalable architecture, robust error
            handling, and data validation.
          </p>
        </GlassCard>
        <GlassCard className="p-6">
          <div className="text-3xl mb-3">🚀</div>
          <h3 className="text-lg font-bold text-accent-amber mb-2">
            Future Proof
          </h3>
          <p className="text-sm text-mist-white/70">
            Modern frameworks, active communities, continuous updates, and
            extensible design.
          </p>
        </GlassCard>
      </div>
    </section>
  );
};
