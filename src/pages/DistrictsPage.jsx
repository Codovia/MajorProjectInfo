import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SectionHeading, GlassCard } from "../components/UI";
import { FilterButton, InputField } from "../components/Interactive";

export const DistrictsPage = () => {
  const [riskFilter, setRiskFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Mock district data
  const districts = [
    {
      name: "Belgaum",
      risk: "high",
      rainfall: 1250,
      lastAlert: "2 days ago",
      population: 4.5,
      color: "from-red-500",
    },
    {
      name: "Bijapur",
      risk: "high",
      rainfall: 1180,
      lastAlert: "1 day ago",
      population: 1.8,
      color: "from-red-500",
    },
    {
      name: "Raichur",
      risk: "medium",
      rainfall: 980,
      lastAlert: "3 days ago",
      population: 1.9,
      color: "from-yellow-500",
    },
    {
      name: "Bagalkot",
      risk: "low",
      rainfall: 720,
      lastAlert: "5 days ago",
      population: 1.7,
      color: "from-green-500",
    },
    {
      name: "Dharwad",
      risk: "high",
      rainfall: 1420,
      lastAlert: "1 day ago",
      population: 1.5,
      color: "from-red-500",
    },
    {
      name: "Gadag",
      risk: "medium",
      rainfall: 890,
      lastAlert: "4 days ago",
      population: 0.9,
      color: "from-yellow-500",
    },
    {
      name: "Haveri",
      risk: "low",
      rainfall: 750,
      lastAlert: "6 days ago",
      population: 1.4,
      color: "from-green-500",
    },
    {
      name: "Uttara Kannada",
      risk: "high",
      rainfall: 3600,
      lastAlert: "1 day ago",
      population: 1.3,
      color: "from-red-500",
    },
    {
      name: "Shimoga",
      risk: "high",
      rainfall: 3200,
      lastAlert: "2 days ago",
      population: 1.7,
      color: "from-red-500",
    },
    {
      name: "Chikmagalur",
      risk: "medium",
      rainfall: 2500,
      lastAlert: "3 days ago",
      population: 1.2,
      color: "from-yellow-500",
    },
    {
      name: "Hassan",
      risk: "medium",
      rainfall: 2100,
      lastAlert: "2 days ago",
      population: 1.7,
      color: "from-yellow-500",
    },
    {
      name: "Kodagu",
      risk: "high",
      rainfall: 4500,
      lastAlert: "1 day ago",
      population: 0.6,
      color: "from-red-500",
    },
    {
      name: "Mysore",
      risk: "low",
      rainfall: 650,
      lastAlert: "7 days ago",
      population: 3.1,
      color: "from-green-500",
    },
    {
      name: "Mandya",
      risk: "low",
      rainfall: 620,
      lastAlert: "6 days ago",
      population: 2.0,
      color: "from-green-500",
    },
    {
      name: "Tumkur",
      risk: "low",
      rainfall: 580,
      lastAlert: "8 days ago",
      population: 2.6,
      color: "from-green-500",
    },
    {
      name: "Bangalore Urban",
      risk: "low",
      rainfall: 900,
      lastAlert: "4 days ago",
      population: 9.6,
      color: "from-green-500",
    },
    {
      name: "Bangalore Rural",
      risk: "low",
      rainfall: 820,
      lastAlert: "5 days ago",
      population: 1.4,
      color: "from-green-500",
    },
    {
      name: "Kolar",
      risk: "low",
      rainfall: 710,
      lastAlert: "6 days ago",
      population: 1.3,
      color: "from-green-500",
    },
    {
      name: "Chikballapur",
      risk: "low",
      rainfall: 680,
      lastAlert: "7 days ago",
      population: 1.3,
      color: "from-green-500",
    },
    {
      name: "Ramnagara",
      risk: "low",
      rainfall: 750,
      lastAlert: "5 days ago",
      population: 0.6,
      color: "from-green-500",
    },
    {
      name: "Yadgir",
      risk: "medium",
      rainfall: 850,
      lastAlert: "4 days ago",
      population: 1.2,
      color: "from-yellow-500",
    },
    {
      name: "Kalaburagi",
      risk: "medium",
      rainfall: 920,
      lastAlert: "3 days ago",
      population: 1.9,
      color: "from-yellow-500",
    },
    {
      name: "Copy",
      risk: "low",
      rainfall: 700,
      lastAlert: "7 days ago",
      population: 1.0,
      color: "from-green-500",
    },
    {
      name: "Gulbarga",
      risk: "medium",
      rainfall: 900,
      lastAlert: "2 days ago",
      population: 1.2,
      color: "from-yellow-500",
    },
    {
      name: "Belgaum",
      risk: "high",
      rainfall: 1300,
      lastAlert: "1 day ago",
      population: 2.0,
      color: "from-red-500",
    },
    {
      name: "Chamrajnagar",
      risk: "low",
      rainfall: 640,
      lastAlert: "6 days ago",
      population: 0.7,
      color: "from-green-500",
    },
    {
      name: "Hassan",
      risk: "medium",
      rainfall: 2050,
      lastAlert: "3 days ago",
      population: 1.5,
      color: "from-yellow-500",
    },
    {
      name: "Udupi",
      risk: "high",
      rainfall: 3800,
      lastAlert: "1 day ago",
      population: 1.2,
      color: "from-red-500",
    },
    {
      name: "Mangalore",
      risk: "high",
      rainfall: 3950,
      lastAlert: "1 day ago",
      population: 0.8,
      color: "from-red-500",
    },
    {
      name: "Dakshina Kannada",
      risk: "high",
      rainfall: 4100,
      lastAlert: "1 day ago",
      population: 2.1,
      color: "from-red-500",
    },
    {
      name: "Chitradurga",
      risk: "low",
      rainfall: 720,
      lastAlert: "6 days ago",
      population: 2.1,
      color: "from-green-500",
    },
  ];

  const filtered = useMemo(() => {
    let result = districts;

    // Filter by risk
    if (riskFilter !== "all") {
      result = result.filter((d) => d.risk === riskFilter);
    }

    // Filter by search term
    if (searchTerm) {
      result = result.filter((d) =>
        d.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Sort
    switch (sortBy) {
      case "risk":
        const riskOrder = { high: 0, medium: 1, low: 2 };
        result.sort((a, b) => riskOrder[a.risk] - riskOrder[b.risk]);
        break;
      case "rainfall":
        result.sort((a, b) => b.rainfall - a.rainfall);
        break;
      default:
        result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [riskFilter, searchTerm, sortBy]);

  const stats = {
    high: filtered.filter((d) => d.risk === "high").length,
    medium: filtered.filter((d) => d.risk === "medium").length,
    low: filtered.filter((d) => d.risk === "low").length,
  };

  return (
    <div className="min-h-screen bg-navy-dark">
      <Navigation />

      <section className="pt-32 pb-16 section-container relative z-10">
        <SectionHeading subtitle="Real-time flood risk assessment across all districts">
          District Dashboard
        </SectionHeading>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">
              {filtered.length}
            </div>
            <p className="text-mist-white/70">Monitored Districts</p>
          </GlassCard>
          <GlassCard className="p-6 text-center border-l-4 border-red-500">
            <div className="text-3xl font-bold text-red-400 mb-2">
              {stats.high}
            </div>
            <p className="text-mist-white/70">High Risk</p>
          </GlassCard>
          <GlassCard className="p-6 text-center border-l-4 border-yellow-500">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {stats.medium}
            </div>
            <p className="text-mist-white/70">Medium Risk</p>
          </GlassCard>
          <GlassCard className="p-6 text-center border-l-4 border-green-500">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {stats.low}
            </div>
            <p className="text-mist-white/70">Low Risk</p>
          </GlassCard>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="glass-effect p-6 rounded-xl mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InputField
              label="Search Districts"
              placeholder="Type district name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div>
              <label className="block text-mist-white/80 font-semibold mb-2">
                Filter by Risk
              </label>
              <div className="flex flex-wrap gap-2">
                {["all", "high", "medium", "low"].map((risk) => (
                  <FilterButton
                    key={risk}
                    label={risk.charAt(0).toUpperCase() + risk.slice(1)}
                    isActive={riskFilter === risk}
                    onClick={() => setRiskFilter(risk)}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-mist-white/80 font-semibold mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-mist-white focus:border-cyan-glow transition"
              >
                <option value="name">District Name</option>
                <option value="risk">Risk Level</option>
                <option value="rainfall">Rainfall Amount</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Districts Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((district, i) => (
            <motion.div
              key={district.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8 }}
              className="glass-effect p-6 rounded-xl cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-cyan-glow group-hover:text-accent-amber transition">
                  {district.name}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    district.risk === "high"
                      ? "bg-red-500/20 text-red-400"
                      : district.risk === "medium"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {district.risk.toUpperCase()}
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-mist-white/60">Rainfall:</span>
                  <span className="text-cyan-glow font-semibold">
                    {district.rainfall} mm
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mist-white/60">Population:</span>
                  <span className="text-ocean-teal font-semibold">
                    {district.population}M
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mist-white/60">Last Alert:</span>
                  <span className="text-accent-amber font-semibold">
                    {district.lastAlert}
                  </span>
                </div>

                {/* Risk Progress Bar */}
                <div className="mt-4">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${district.risk === "high" ? 80 : district.risk === "medium" ? 50 : 20}%`,
                      }}
                      transition={{ duration: 1 }}
                      className={`h-full bg-gradient-to-r ${district.color} to-transparent`}
                    />
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full py-2 bg-gradient-to-r from-ocean-teal/20 to-cyan-glow/20 border border-cyan-glow/50 rounded-lg text-cyan-glow text-sm font-semibold hover:border-cyan-glow transition"
              >
                View Details
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-mist-white/60">
              No districts found matching your criteria
            </p>
          </motion.div>
        )}
      </section>

      <Footer />
    </div>
  );
};
