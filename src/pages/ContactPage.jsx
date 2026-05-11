import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SectionHeading, GlassCard } from "../components/UI";
import { InputField, TextareaField } from "../components/Interactive";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      content: "project@flood-alert.com",
      description: "Send us your inquiries",
    },
    {
      icon: "📞",
      title: "Phone",
      content: "+91 XXXX-XXX-XXX",
      description: "Call us during business hours",
    },
    {
      icon: "📍",
      title: "Location",
      content: "[College Name], Karnataka",
      description: "Visit our office",
    },
    {
      icon: "⏰",
      title: "Response Time",
      content: "< 24 hours",
      description: "Average response time",
    },
  ];

  return (
    <div className="min-h-screen bg-navy-dark">
      <Navigation />

      <section className="pt-32 pb-16 section-container relative z-10">
        <SectionHeading subtitle="Get in touch with our team">
          Contact Us
        </SectionHeading>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className="text-lg font-bold text-cyan-glow mb-2">
                {info.title}
              </h3>
              <p className="text-mist-white font-semibold mb-2">
                {info.content}
              </p>
              <p className="text-sm text-mist-white/60">{info.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Form */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gradient mb-8">
              Send us a Message
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">
                  Message Sent!
                </h3>
                <p className="text-mist-white/60">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <InputField
                  label="Your Name"
                  placeholder="John Doe"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <InputField
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <InputField
                  label="Subject"
                  placeholder="How can we help?"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <TextareaField
                  label="Message"
                  placeholder="Tell us about your inquiry..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button type="submit" className="w-full btn-primary">
                    Send Message
                  </button>
                </motion.div>
              </form>
            )}
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl h-full flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold text-gradient mb-6">
                Why Choose Us?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: "⚡",
                    title: "Fast Response",
                    description:
                      "Quick acknowledgment and support from our team",
                  },
                  {
                    icon: "🎯",
                    title: "Expert Team",
                    description:
                      "Dedicated professionals with flood prediction expertise",
                  },
                  {
                    icon: "🔒",
                    title: "Secure & Reliable",
                    description: "Enterprise-grade security and 99.8% uptime",
                  },
                  {
                    icon: "🌍",
                    title: "Always Available",
                    description: "24/7 support for critical alerts and issues",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-cyan-glow mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-mist-white/60">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="border-t border-white/10 pt-6 mt-8">
              <p className="text-mist-white/80 font-semibold mb-4">
                Connect With Us
              </p>
              <div className="flex gap-4">
                {["GitHub", "LinkedIn", "Twitter", "Email"].map((social, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
                    }}
                    className="w-10 h-10 rounded-full border border-cyan-glow/50 flex items-center justify-center text-cyan-glow hover:bg-cyan-glow/10 transition-all"
                  >
                    <span className="text-xs font-bold">
                      {social.charAt(0)}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 glass-effect p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold text-gradient mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What is the response time for flood alerts?",
                a: "Our system provides 24-72 hour advance warnings, allowing communities sufficient time to prepare and evacuate safely.",
              },
              {
                q: "How accurate is the flood prediction model?",
                a: "Our ML model achieves 98% accuracy using historical data, real-time weather patterns, and terrain analysis.",
              },
              {
                q: "Do you cover all districts in Karnataka?",
                a: "Yes, we monitor and provide predictions for all 31 districts in Karnataka with real-time updates.",
              },
              {
                q: "Can I integrate this system with my local administration?",
                a: "Absolutely! We provide APIs and integration options for government bodies and local authorities.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border-l-4 border-cyan-glow/50 pl-6 py-2"
              >
                <p className="font-bold text-cyan-glow mb-2">{faq.q}</p>
                <p className="text-mist-white/70">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};
