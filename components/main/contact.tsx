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
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isMobile, setIsMobile] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

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
    setErrorMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage("EmailJS is not configured properly.");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Aryan Kumar", // Default recipient name
        },
        publicKey
      );

      if (result.text === "OK") {
        setIsSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSent(false), 4000);
      } else {
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error: any) {
      setErrorMessage(error.text || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
    { name: "GitHub", icon: "💻", url: "https://github.com/aryansingh0059", color: "hover:text-gray-300" },
    { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/aryan-kumar1705/", color: "hover:text-blue-400" },
    { name: "Twitter", icon: "🐦", url: "https://x.com/aryan30804", color: "hover:text-sky-400" },
    { name: "Email", icon: "📧", url: "mailto:aryansinghclub1212@gmail.com", color: "hover:text-cyan-300" },
  ];

  const contactItems = [
    {
      icon: EnvelopeIcon,
      title: "Email",
      value: "aryansinghclub1212@gmail.com",
      subtitle: "Fastest response",
      href: "mailto:aryansinghclub1212@gmail.com",
      hoverBg: "rgba(6, 182, 212, 0.08)",
      iconWrapClass: "bg-cyan-500/10",
      iconClass: "text-cyan-400",
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      value: "+91 7632849765",
      subtitle: "Mon-Fri, 9AM-6PM",
      href: "tel:+917632849765",
      hoverBg: "rgba(147, 51, 234, 0.08)",
      iconWrapClass: "bg-purple-500/10",
      iconClass: "text-purple-400",
    },
    {
      icon: MapPinIcon,
      title: "Location",
      value: "Buxar, Bihar",
      subtitle: "Available worldwide",
      href: "https://maps.google.com/?q=Buxar,Bihar",
      hoverBg: "rgba(6, 182, 212, 0.08)",
      iconWrapClass: "bg-cyan-500/10",
      iconClass: "text-cyan-400",
    },
    {
      icon: ClockIcon,
      title: "Response",
      value: "< 24 Hours",
      subtitle: "Usually within 3 hours",
      href: undefined,
      hoverBg: "rgba(147, 51, 234, 0.08)",
      iconWrapClass: "bg-purple-500/10",
      iconClass: "text-purple-400",
    },
  ] as const;

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden"
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
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 py-3 px-6 sm:py-4 sm:px-8 bg-slate-900/70 backdrop-blur-md rounded-2xl border border-cyan-500/20 shadow-2xl mb-4 sm:mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
            >
              <PaperAirplaneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            </motion.div>
            <span className="text-white font-semibold text-sm sm:text-base md:text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let&apos;s Build Something Great
            </span>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 5, delay: 1 }}
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
            </motion.div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 mb-3 sm:mb-4 px-4">
            Get in Touch
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            I&apos;m always excited to collaborate on innovative projects or discuss new ideas.  
            Let&apos;s turn your vision into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="xl:col-span-1 space-y-6 sm:space-y-8">
            <motion.div
              whileHover={!isMobile ? { y: -5 } : {}}
              className="bg-slate-900/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl border border-slate-700/40 p-6 sm:p-8 text-center shadow-lg shadow-cyan-900/10"
            >
              <motion.div
                whileHover={!isMobile ? { scale: 1.05 } : {}}
                className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center"
              >
                <UserCircleIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Aryan Kumar</h3>
              <p className="text-cyan-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Fullstack Developer</p>
              <p className="text-gray-400 text-xs sm:text-sm px-2">
                Turning ideas into impactful digital experiences
              </p>
            </motion.div>

            <div className="space-y-3 sm:space-y-4">
              {contactItems.map((contact) => {
                const ContactTag = contact.href ? motion.a : motion.div;
                return (
                  <ContactTag
                    key={contact.title}
                    {...(contact.href
                      ? { href: contact.href, target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    whileHover={!isMobile ? { x: 6, backgroundColor: contact.hoverBg } : {}}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-900/60 rounded-xl sm:rounded-2xl border border-slate-700/40 hover:border-cyan-400/30 transition-all duration-300 group cursor-pointer"
                  >
                    <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${contact.iconWrapClass} group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${contact.iconClass}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-sm sm:text-base truncate">{contact.title}</h4>
                      <p className="text-gray-300 text-xs sm:text-sm truncate">{contact.value}</p>
                      <p className="text-gray-400 text-xs hidden sm:block">{contact.subtitle}</p>
                    </div>
                    {contact.href ? (
                      <LinkIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                    ) : null}
                  </ContactTag>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/70 rounded-xl sm:rounded-2xl border border-slate-700/40 p-5 sm:p-6"
            >
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-center text-sm sm:text-base">
                Connect With Me
              </h4>
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={!isMobile ? { scale: 1.1, y: -2 } : {}}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-slate-800/50 rounded-lg sm:rounded-xl border border-slate-700/30 text-center text-gray-400 ${social.color} transition-all duration-300 group`}
                  >
                    <div className="text-base sm:text-lg mb-1">{social.icon}</div>
                    <div className="text-xs font-medium hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {social.name}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="xl:col-span-2">
            <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-slate-700/50 p-6 sm:p-8 h-full shadow-lg shadow-purple-900/10">
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Send Message</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Get in touch for collaborations
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <InputField
                    id="name"
                    name="name"
                    label="Your Name"
                    icon={UserCircleIcon}
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    isMobile={isMobile}
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
                    isMobile={isMobile}
                  />
                </div>

                <SelectField
                  id="subject"
                  name="subject"
                  label="Project Type"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  isMobile={isMobile}
                />

                <TextAreaField
                  id="message"
                  name="message"
                  label="Project Details"
                  placeholder="Describe your project goals..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  isMobile={isMobile}
                />

                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm"
                  >
                    {errorMessage}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isMobile && !isSubmitting ? { scale: 1.03 } : {}}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 text-sm sm:text-base ${
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
                      <PaperAirplaneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 md:mt-20 pt-12 sm:pt-16 border-t border-slate-700/30"
        >
          {[
            { number: "24h", label: "Avg. Response", icon: "⚡", color: "text-cyan-400" },
            { number: "50+", label: "Projects Done", icon: "🚀", color: "text-purple-400" },
            { number: "100%", label: "Satisfaction", icon: "⭐", color: "text-cyan-400" },
            { number: "Global", label: "Remote Work", icon: "🌎", color: "text-purple-400" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={!isMobile ? { scale: 1.05, y: -2 } : {}}
              className="text-center p-4 sm:p-6 bg-slate-900/70 rounded-xl sm:rounded-2xl border border-slate-700/40 shadow-sm hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{stat.icon}</div>
              <div className={`text-xl sm:text-2xl font-bold ${stat.color} mb-1 sm:mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm font-medium">{stat.label}</div>
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
  isMobile,
}: any) => (
  <motion.div whileHover={!isMobile ? { scale: 1.02 } : {}} className="relative">
    <label htmlFor={id} className="block text-white font-medium mb-2 sm:mb-3 text-sm sm:text-base">
      {label} {required && <span className="text-cyan-400">*</span>}
    </label>
    <div className="relative">
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        type="text"
        className="w-full px-4 py-3 sm:py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm sm:text-base"
        placeholder={placeholder}
      />
      <Icon className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
    </div>
  </motion.div>
);

const SelectField = ({ id, name, label, value, onChange, required, isMobile }: any) => (
  <motion.div whileHover={!isMobile ? { scale: 1.02 } : {}}>
    <label htmlFor={id} className="block text-white font-medium mb-2 sm:mb-3 text-sm sm:text-base">
      {label} {required && <span className="text-cyan-400">*</span>}
    </label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3 sm:py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 text-sm sm:text-base"
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
  isMobile,
}: any) => (
  <motion.div whileHover={!isMobile ? { scale: 1.02 } : {}}>
    <label htmlFor={id} className="block text-white font-medium mb-2 sm:mb-3 text-sm sm:text-base">
      {label} {required && <span className="text-cyan-400">*</span>}
    </label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      rows={isMobile ? 4 : 6}
      className="w-full px-4 py-3 sm:py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none text-sm sm:text-base"
      placeholder={placeholder}
    />
  </motion.div>
);
