import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Project",
      submenu: [
        { label: "Overview", href: "/overview" },
        { label: "Features", href: "/features" },
        { label: "Architecture", href: "/architecture" },
        { label: "How It Works", href: "/how-it-works" },
      ],
    },
    {
      label: "Interactive",
      submenu: [
        { label: "Districts Dashboard", href: "/districts" },
        { label: "Results & Impact", href: "/results" },
        { label: "Live Monitor", href: "/monitor" },
      ],
    },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <nav className="fixed top-0 w-full z-50 bg-navy-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-bold text-gradient hover:scale-105 transition"
          >
            🌊 Flood Alert
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item, i) => (
              <div key={i} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="text-mist-white/70 hover:text-cyan-glow transition-colors flex items-center gap-1">
                      {item.label}
                      <span className="text-xs">▼</span>
                    </button>
                    <div className="absolute top-full left-0 w-48 mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="glass-effect rounded-lg mt-2 overflow-hidden">
                        {item.submenu.map((sub, j) => (
                          <Link
                            key={j}
                            to={sub.href}
                            className={`block px-4 py-3 transition-colors ${
                              isActive(sub.href)
                                ? "bg-cyan-glow/20 text-cyan-glow"
                                : "text-mist-white/70 hover:text-cyan-glow"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`transition-colors ${
                      isActive(item.href)
                        ? "text-cyan-glow"
                        : "text-mist-white/70 hover:text-cyan-glow"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link to="/contact" className="btn-primary text-sm">
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};
