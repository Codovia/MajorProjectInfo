import React from "react";
import { motion } from "framer-motion";

export const GradientText = ({ children, className = "" }) => (
  <span className={`text-gradient ${className}`}>{children}</span>
);

export const GlassCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className={`glass-effect ${className}`}
  >
    {children}
  </motion.div>
);

export const AnimatedButton = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClass} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const SectionHeading = ({ children, subtitle, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`text-center mb-16 ${className}`}
  >
    <h2 className="premium-heading text-gradient mb-4">{children}</h2>
    {subtitle && <p className="premium-subheading">{subtitle}</p>}
  </motion.div>
);

export const StatCard = ({ icon, label, value, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="glass-effect p-8 text-center hover:shadow-lg hover:shadow-cyan-glow/30 transition-all"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <div className="text-2xl font-bold text-gradient mb-2">{value}</div>
    <div className="text-mist-white/70">{label}</div>
  </motion.div>
);

export const FeatureCard = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="glass-effect p-8 rounded-2xl hover:shadow-lg hover:shadow-cyan-glow/30 transition-all"
  >
    <div className="text-5xl mb-4 text-cyan-glow">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-mist-white">{title}</h3>
    <p className="text-mist-white/70 leading-relaxed">{description}</p>
  </motion.div>
);

export const WaveDivider = ({ flip = false }) => (
  <svg
    className={`w-full h-24 text-navy-dark ${flip ? "rotate-180" : ""}`}
    viewBox="0 0 1440 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0,50 Q360,0 720,50 T1440,50 L1440,120 L0,120 Z"
      fill="currentColor"
    />
  </svg>
);

export const ParticleBackground = () => {
  const particles = Array.from({ length: 50 }).map(() => ({
    id: Math.random(),
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 rounded-full bg-cyan-glow/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export const AnimatedCounter = ({ value, duration = 2, suffix = "" }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const increment = value / (duration * 60);
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= value) {
          clearInterval(interval);
          return value;
        }
        return prev + increment;
      });
    }, 16);
    return () => clearInterval(interval);
  }, [value, duration]);

  return (
    <span>
      {Math.floor(count)}
      {suffix}
    </span>
  );
};

export const PipelineStep = ({
  number,
  title,
  description,
  delay = 0,
  isLast = false,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="flex flex-col items-center relative"
  >
    <div className="relative z-10 mb-4">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-ocean-teal to-cyan-glow flex items-center justify-center text-2xl font-bold text-navy-dark shadow-lg shadow-cyan-glow/50">
        {number}
      </div>
    </div>
    <h3 className="text-xl font-bold text-cyan-glow mb-2">{title}</h3>
    <p className="text-mist-white/70 text-center max-w-xs">{description}</p>
    {!isLast && (
      <div className="absolute top-20 w-1 h-12 bg-gradient-to-b from-cyan-glow/50 to-transparent"></div>
    )}
  </motion.div>
);
