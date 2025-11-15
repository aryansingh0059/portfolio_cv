"use client";

import {
  ChatBubbleLeftRightIcon,
  ClockIcon,
  EnvelopeIcon,
  LinkIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSent(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setIsSent(false), 4000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const socialLinks = [
    { name: "GitHub", icon: "💻", url: "#", color: "hover:text-gray-300" },
    { name: "LinkedIn", icon: "💼", url: "#", color: "hover:text-blue-400" },
    { name: "Twitter", icon: "🐦", url: "#", color: "hover:text-sky-400" },
    { name: "Dribbble", icon: "🎨", url: "#", color: "hover:text-pink-400" },
  ];

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen py-24 px-6 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div> */}

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="inline-flex items-center gap-3 py-4 px-8 bg-slate-900/70 backdrop-blur-md rounded-2xl border border-cyan-500/20 shadow-2xl mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
            >
              <PaperAirplaneIcon className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <span className="text-white font-semibold text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let&apos;s Build Something Great
            </span>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 5, delay: 1 }}
            >
              <ChatBubbleLeftRightIcon className="w-6 h-6 text-purple-400" />
            </motion.div>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 mb-4">
            Get in Touch
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I’m always excited to collaborate on innovative projects or discuss new ideas.  
            Let’s turn your vision into reality with creative, scalable, and robust solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="xl:col-span-1 space-y-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-900/80 backdrop-blur-lg rounded-3xl border border-slate-700/40 p-8 text-center shadow-lg shadow-cyan-900/10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center"
              >
                <UserCircleIcon className="w-12 h-12 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">Aryan</h3>
              <p className="text-cyan-400 font-semibold mb-3">Fullstack Developer</p>
              <p className="text-gray-400 text-sm">
                Turning ideas into impactful digital experiences with precision and creativity.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  icon: EnvelopeIcon,
                  title: "Email",
                  value: "contact.aryan0101@gmail.com",
                  subtitle: "Fastest response",
                  color: "cyan",
                  href: "mailto:hello@aryan.dev",
                },
                {
                  icon: PhoneIcon,
                  title: "Phone",
                  value: "+91 7667682319",
                  subtitle: "Mon-Fri, 9AM-6PM",
                  color: "purple",
                },
                {
                  icon: MapPinIcon,
                  title: "Location",
                  value: "Darbhanga, Bihar, India",
                  subtitle: "Available worldwide",
                  color: "cyan",
                  href: "#",
                },
                {
                  icon: ClockIcon,
                  title: "Response Time",
                  value: `< 24 Hours`,
                  subtitle: "Usually within 3 hours",
                  color: "purple",
                  href: "#",
                },
              ].map((contact) => (
                <motion.a
                  key={contact.title}
                  href={contact.href}
                  whileHover={{
                    x: 6,
                    backgroundColor:
                      contact.color === "cyan"
                        ? "rgba(6, 182, 212, 0.08)"
                        : "rgba(147, 51, 234, 0.08)",
                  }}
                  className="flex items-center gap-4 p-4 bg-slate-900/60 rounded-2xl border border-slate-700/40 hover:border-cyan-400/30 transition-all duration-300 group cursor-pointer"
                >
                  <div
                    className={`p-3 rounded-xl bg-${contact.color}-500/10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <contact.icon className={`w-6 h-6 text-${contact.color}-400`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">{contact.title}</h4>
                    <p className="text-gray-300">{contact.value}</p>
                    <p className="text-gray-400 text-sm">{contact.subtitle}</p>
                  </div>
                  <LinkIcon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/70 rounded-2xl border border-slate-700/40 p-6"
            >
              <h4 className="text-white font-semibold mb-4 text-center">
                Connect With Me
              </h4>
              <div className="grid grid-cols-4 gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-slate-800/50 rounded-xl border border-slate-700/30 text-center text-gray-400 ${social.color} transition-all duration-300 group`}
                  >
                    <div className="text-lg mb-1">{social.icon}</div>
                    <div className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {social.name}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="xl:col-span-2">
            <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl border border-slate-700/50 p-8 h-full shadow-lg shadow-purple-900/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <EnvelopeIcon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Send Message</h3>
                  <p className="text-gray-400">
                    Get in touch for collaborations or project inquiries
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    id="name"
                    name="name"
                    label="Your Name"
                    icon={UserCircleIcon}
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    id="email"
                    name="email"
                    label="Email Address"
                    icon={EnvelopeIcon}
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <SelectField
                  id="subject"
                  name="subject"
                  label="Project Type"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <TextAreaField
                  id="message"
                  name="message"
                  label="Project Details"
                  placeholder="Describe your project goals, timeline, and budget..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : isSent ? (
                    "✅ Message Sent!"
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-16 border-t border-slate-700/30"
        >
          {[
            { number: "24h", label: "Avg. Response", icon: "⚡", color: "text-cyan-400" },
            { number: "50+", label: "Projects Done", icon: "🚀", color: "text-purple-400" },
            { number: "100%", label: "Client Satisfaction", icon: "⭐", color: "text-cyan-400" },
            { number: "Worldwide", label: "Remote Work", icon: "🌎", color: "text-purple-400" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-center p-6 bg-slate-900/70 rounded-2xl border border-slate-700/40 shadow-sm hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className={`text-2xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// --- Helper Components ---
const InputField = ({
  id,
  name,
  label,
  icon: Icon,
  placeholder,
  value,
  onChange,
  required,
}: any) => (
  <motion.div whileHover={{ scale: 1.02 }} className="relative">
    <label htmlFor={id} className="block text-white font-medium mb-3">
      {label} {required && "*"}
    </label>
    <div className="relative">
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        type="text"
        className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
        placeholder={placeholder}
      />
      <Icon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
    </div>
  </motion.div>
);

const SelectField = ({ id, name, label, value, onChange, required }: any) => (
  <motion.div whileHover={{ scale: 1.02 }}>
    <label htmlFor={id} className="block text-white font-medium mb-3">
      {label} {required && "*"}
    </label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
    >
      <option value="">Select project type</option>
      <option value="web-development">Web Development</option>
      <option value="mobile-app">Mobile App</option>
      <option value="ui-ux-design">UI/UX Design</option>
      <option value="consultation">Consultation</option>
      <option value="collaboration">Collaboration</option>
      <option value="other">Other</option>
    </select>
  </motion.div>
);

const TextAreaField = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  required,
}: any) => (
  <motion.div whileHover={{ scale: 1.02 }}>
    <label htmlFor={id} className="block text-white font-medium mb-3">
      {label} {required && "*"}
    </label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      rows={6}
      className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
      placeholder={placeholder}
    />
  </motion.div>
);
