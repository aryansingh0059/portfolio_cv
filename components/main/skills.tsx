
"use client";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  OTHER_SKILL,
} from "@/constants";

import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const particles = Array.from({ length: 20 }, (_, i) => {
    const seed = (i * 7919 + 1237) % 104729;
    const nextSeed = (seed * 7919 + 1237) % 104729;
    return {
      id: i,
      left: `${(seed / 104729) * 100}%`,
      top: `${(nextSeed / 104729) * 100}%`,
      duration: 3 + (seed % 2000) / 1000,
      delay: (nextSeed % 1500) / 1000,
    };
  });

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center min-h-screen py-20 px-5 overflow-hidden "
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}
      </div>

      {/* Skills Text Component */}
      <SkillText />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-7xl mx-auto px-4"
      >
        {/* Main Skills Header */}
        <motion.div variants={sectionVariants} className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
            Tech Stack
          </h3>
          <p className="text-center text-gray-400 text-lg">
            Specialized technologies & frameworks I work with
          </p>
        </motion.div>

        {/* Frontend Skills */}
        <motion.div variants={sectionVariants} className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-cyan-300 mb-10 tracking-wide uppercase text-sm">
            ⚡ Frontend Development
          </h3>
          <div className="flex flex-row justify-center flex-wrap gap-6 md:gap-8 items-center">
            {FRONTEND_SKILL.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div variants={sectionVariants} className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-purple-300 mb-10 tracking-wide uppercase text-sm">
            🔧 Backend Development
          </h3>
          <div className="flex flex-row justify-center flex-wrap gap-6 md:gap-8 items-center">
            {BACKEND_SKILL.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div>
        </motion.div>

        {/* Tools & DevOps */}
        <motion.div variants={sectionVariants} className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-amber-300 mb-10 tracking-wide uppercase text-sm">
            🛠️ Tools & DevOps
          </h3>
          <div className="flex flex-row justify-center flex-wrap gap-6 md:gap-8 items-center">
            {OTHER_SKILL.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Background Video */}
      <div className="w-full h-full absolute inset-0 z-0">
        <div className="w-full h-full opacity-20 flex items-center justify-center">
          <video
            className="w-full h-full object-cover"
            preload="none"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2 }}
        className="text-center mt-20 relative z-10"
      >
        <motion.p
          className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
        >
          I continuously expand my expertise and stay updated with the latest industry trends and technologies.
        </motion.p>
        
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 50px rgba(6, 182, 212, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 text-lg"
        >
          Let&apos;s Build Something Awesome
        </motion.button>
      </motion.div>
    </section>
  );
};
