import { motion } from "framer-motion";
import { GradientText, GlassCard } from "../components/UI";
import { Footer } from "../components/Footer";

export const TeamPage = () => {
  const teamMembers = [
    {
      name: "Nandan Naik",
      role: "3RD YEAR C SECTION",
      contribution: "Department of Computer Science and Engineering",
      avatar: "👨‍💻",
    },
    {
      name: "V Suhaan Acharya",
      role: "3RD YEAR C SECTION",
      contribution: "Department of Computer Science and Engineering",
      avatar: "👨‍💼",
    },
    {
      name: "Shravan ArunaChandra Naik",
      role: "3RD YEAR C SECTION",
      contribution: "Department of Computer Science and Engineering",
      avatar: "👨‍🔬",
    },
    {
      name: "Prajanth Poojary",
      role: "3RD YEAR C SECTION",
      contribution: "Department of Computer Science and Engineering",
      avatar: "👨‍💻",
    },
  ];

  const guide = {
    name: "Ranjani K",
    title: "Project Guide",
    department: "Computer Science and Engineering",
    expertise: "Research Mentorship",
  };

  return (
    <div className="min-h-screen bg-navy-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-navy-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-gradient">
            Flood Prediction
          </a>
          <div className="flex gap-6">
            <a
              href="/"
              className="text-mist-white/70 hover:text-cyan-glow transition-colors"
            >
              Home
            </a>
            <a href="#team" className="text-cyan-glow">
              Team
            </a>
          </div>
        </div>
      </nav>

      {/* Team Hero */}
      <section className="pt-32 pb-16 section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="premium-heading text-gradient mb-4">Meet The Team</h1>
          <p className="premium-subheading max-w-2xl mx-auto">
            Dedicated innovators working together to revolutionize flood
            prediction and emergency response in Karnataka
          </p>
        </motion.div>

        {/* Guide Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16 max-w-md mx-auto"
        >
          <GlassCard className="p-8 rounded-2xl text-center border-2 border-accent-amber/50">
            <div className="text-6xl mb-4">👨‍🏫</div>
            <h2 className="text-2xl font-bold text-accent-amber mb-2">
              {guide.name}
            </h2>
            <p className="text-cyan-glow font-semibold mb-2">{guide.title}</p>
            <p className="text-mist-white/70 mb-4">{guide.department}</p>
            <div className="border-t border-white/10 pt-4">
              <p className="text-sm text-mist-white/60">
                <span className="text-accent-amber font-semibold">
                  Mentorship:
                </span>{" "}
                {guide.expertise}
              </p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gradient text-center mb-12">
            Development Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-effect p-6 rounded-xl text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-cyan-glow mb-1">
                  {member.name}
                </h3>
                <p className="text-accent-amber font-semibold text-sm mb-3">
                  {member.role}
                </p>
                <div className="border-t border-white/10 pt-3">
                  <p className="text-xs text-mist-white/70">
                    {member.contribution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Project Stats */}
      <section className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <GlassCard className="p-8 text-center">
            <div className="text-4xl font-bold text-gradient mb-2">4+</div>
            <p className="text-mist-white/70">Dedicated Team Members</p>
          </GlassCard>
          <GlassCard className="p-8 text-center">
            <div className="text-4xl font-bold text-gradient mb-2">6+</div>
            <p className="text-mist-white/70">Major Components Built</p>
          </GlassCard>
          <GlassCard className="p-8 text-center">
            <div className="text-4xl font-bold text-gradient mb-2">98%</div>
            <p className="text-mist-white/70">Model Accuracy Achieved</p>
          </GlassCard>
        </motion.div>
      </section>

      {/* Acknowledgments */}
      <section className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect p-12 rounded-2xl text-center"
        >
          <h2 className="text-2xl font-bold text-gradient mb-4">
            Special Thanks
          </h2>
          <p className="text-mist-white/70 leading-relaxed mb-4">
            We extend our gratitude to our project guide, faculty members, and
            college administration for their invaluable support and guidance
            throughout this innovative project.
          </p>
          <p className="text-sm text-mist-white/60">
            Built with passion and cutting-edge technology to make a difference
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};
