import { useState } from "react";
import { motion } from "framer-motion";

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-effect rounded-2xl p-8 max-w-2xl max-h-96 overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gradient">{title}</h2>
          <button
            onClick={onClose}
            className="text-2xl text-mist-white/60 hover:text-cyan-glow transition"
          >
            ✕
          </button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
};

export const Tabs = ({ tabs, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="w-full">
      <div className="flex border-b border-white/10 mb-6 overflow-x-auto">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-6 py-3 font-semibold transition-all whitespace-nowrap ${
              activeTab === i
                ? "text-cyan-glow border-b-2 border-cyan-glow"
                : "text-mist-white/60 hover:text-cyan-glow"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {tabs[activeTab].content}
      </motion.div>
    </div>
  );
};

export const FilterButton = ({ label, isActive, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-4 py-2 rounded-full font-semibold transition-all ${
      isActive
        ? "bg-cyan-glow text-navy-dark shadow-lg shadow-cyan-glow/50"
        : "bg-white/10 text-cyan-glow hover:bg-white/20"
    }`}
  >
    {label}
  </motion.button>
);

export const InputField = ({ label, placeholder, type = "text", ...props }) => (
  <div className="mb-4">
    <label className="block text-mist-white/80 font-semibold mb-2">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-mist-white placeholder-mist-white/40 focus:outline-none focus:border-cyan-glow transition-colors"
      {...props}
    />
  </div>
);

export const TextareaField = ({ label, placeholder, ...props }) => (
  <div className="mb-4">
    <label className="block text-mist-white/80 font-semibold mb-2">
      {label}
    </label>
    <textarea
      placeholder={placeholder}
      rows={5}
      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-mist-white placeholder-mist-white/40 focus:outline-none focus:border-cyan-glow transition-colors"
      {...props}
    />
  </div>
);

export const InteractiveChart = ({ title, data }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="glass-effect p-8 rounded-2xl"
  >
    <h3 className="text-xl font-bold text-gradient mb-6">{title}</h3>
    <div className="flex items-end justify-around h-64 gap-4">
      {data.map((item, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${item.value}%` }}
          transition={{ duration: 1, delay: i * 0.1 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)",
          }}
          className="flex-1 bg-gradient-to-t from-cyan-glow to-ocean-teal rounded-t-lg cursor-pointer group relative min-h-8"
        >
          <div className="absolute -top-8 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-xs text-cyan-glow font-bold">{item.value}%</p>
            <p className="text-xs text-mist-white/60">{item.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export const ToggleSwitch = ({ label, enabled, onChange }) => (
  <div className="flex items-center justify-between p-4 glass-effect rounded-lg mb-4">
    <span className="text-mist-white font-semibold">{label}</span>
    <motion.button
      onClick={() => onChange(!enabled)}
      className={`w-14 h-8 rounded-full transition-colors ${
        enabled ? "bg-cyan-glow" : "bg-white/20"
      }`}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        animate={{ x: enabled ? 28 : 4 }}
        className="w-6 h-6 bg-white rounded-full shadow-lg"
      />
    </motion.button>
  </div>
);

export const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);
