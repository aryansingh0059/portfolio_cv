"use client";

import { AcademicCapIcon, CheckBadgeIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { CERTIFICATES } from "@/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="certificates"
      className="relative flex flex-col items-center justify-center py-20 px-5 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-slate-900/60 px-5 py-2 backdrop-blur-md mb-6">
          <AcademicCapIcon className="h-4 w-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-200">Professional Recognition</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Certifications & <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Badges</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Validation of my technical expertise and commitment to continuous learning in high-demand fields.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4"
      >
        {CERTIFICATES.map((cert) => (
          <motion.div
            key={cert.title}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative rounded-3xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-300"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                  <CheckBadgeIcon className="h-8 w-8 text-cyan-400" />
                </div>
                <span className="text-sm font-medium text-gray-500 group-hover:text-cyan-300 transition-colors">
                  {cert.date}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all duration-300">
                {cert.title}
              </h3>
              
              <p className="text-gray-400 font-medium mb-8">
                {cert.issuer}
              </p>

              <div className="mt-auto">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Verify Certificate
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
